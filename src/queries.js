// import React from 'react'
import { gql, useQuery } from '@apollo/client';

// const GET_ESSENTIALS = gql`
//   query {
//     essentialItems {
//       name
//       id
//     }
//     itemsByCategory(category: 3) {
//       name
//       id
//     }
//   }
// `;

const GET_CATEGORIES = gql`
  query {
    categoryNames
  }
`;

const DELETE_ITEM = gql`
  mutation TripItemDelete($tripId: Int! $itemId: Int!){
    tripItemDelete(input: { tripId: $tripId, itemId: $itemId }) {
      tripItem {
        id
      }
    }
  }
`;

export const GET_SINGLE_TRIP = gql`
  query ItemsByTrip($tripId: Int!) {
    itemsByTrip(tripId: $tripId) {            
      name
      id
      category      
    }
  }
`;

export const ITEM_CREATE = gql`
mutation ItemCreate($tripId: Int!, $itemName: String!) {
  itemCreate(input: { tripId: $tripId, itemName: $itemName})
  {
    item{
      name
      id
      category
    }
  }
}`

// mutation{
//   itemCreate(input: {tripId: 1, itemName: "boss item"})
//   {
//     item{
//       name
//       id
//     }
//   }
// }

// const GET_SINGLE_TRIP = gql`
//   {
//     itemsByTrip(tripId: 1813) {
//       name
//       id
//       category
//     }
//   }
// `;

const ADD_TRIP_MUTATION = gql`
  mutation TripCreate($name: String!, $category: String!, $traveler: String!) {
    tripCreate(
      input: { name: $name, category: $category, traveler: $traveler }
    ) {
      trip {
        name
        category
        image
        traveler
      }
    }
  }
`;


const DELETE_TRIP = gql`
  mutation TripDelete($id: ID!) {
    tripDelete(input: {id:$id}) {
      trip {
        id
      }
    }
  }
`;

export const GET_ALL_TRIPS = gql`
  query {
    allTrips {
      name
      category
      id
      traveler
      image
    }
  }
`;


// export const GetEssentials = () => {
//   const { data, error, loading } = useQuery(GET_ESSENTIALS);
//   return { data, error, loading };
// };

export const GetCategories = () => {
  const { data, error, loading } = useQuery(GET_CATEGORIES);
  return { data, error, loading };
};

export const GetAllTrips = () => {
  const { data, error, loading, refetch } = useQuery(GET_ALL_TRIPS);
  return { data, error, loading, refetch};
};

// export const ItemsByTrip = (id) => {
//   const { data, error, loading } = useQuery(GET_SINGLE_TRIP);
//   return { data, error, loading, id };
// }

export { DELETE_TRIP };
export {DELETE_ITEM}
export { ADD_TRIP_MUTATION };

