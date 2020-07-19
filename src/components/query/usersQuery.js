import { gql } from '@apollo/client';


export const USERS_QUERY = (from, to) => gql`
    query {
        users(from:${from}, to:${to}){
            id
            first_name
            last_name
            ip_address
            email
            gender
          stats{
            userId
            clicks
            page_views
            date
          }
        }
        total
    }
`;
