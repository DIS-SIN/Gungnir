export const customTypeDefs = `
type Query {
  all_2019_course_data: [Course]
    @cypher(
      statement: "MATCH (c:Course)-[:COURSE_OF]->(o:Offering) WHERE o.start_date CONTAINS '2019' RETURN DISTINCT (c)"
    )
  all_offs_data(from: String, to: String): [Offering]
    @cypher(
      statement: "MATCH (o:Offering) WHERE date(o.start_date) >= date($from) AND date(o.start_date) <= date($to) RETURN o"
    )
  get_course_code(code: String): Course
    @cypher(
      statement: "MATCH (c:Course {code:$code}) RETURN c"
    )
  get_offerings(code: String, from: String, to: String): [Offering]
    @cypher(
      statement: "MATCH (c:Course {code:$code})-[:COURSE_OF]-(o:Offering)  WHERE date(o.start_date) >= date($from) AND date(o.start_date) <= date($to) RETURN o"
    )
}
`;