import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import {exerciseOptions,fetchData,youtubeOptions} from '../utils/fetchData';

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const {id} = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exercisesDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exercisesDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosDetails = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,youtubeOptions);
      setExerciseVideos(exerciseVideosDetails.contents);

      const targetMuscleExercises = await fetchData(`${exercisesDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercises)

      const equipmentExercises = await fetchData(`${exercisesDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
      setEquipmentExercises(equipmentExercises)
    }

    fetchExerciseData();
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail