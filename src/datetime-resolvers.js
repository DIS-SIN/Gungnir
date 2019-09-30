const appendCreatedAt = (r,  p,  a,  c,  i,) => {
    const formatted = new Date().toISOString();
    a.createdAt = { formatted };
    return r(p, a, c, i);
  };
  
  const appendUpdatedAt = (r,  p,  a,  c,  i,) => {
    const formatted = new Date().toISOString();
    a.updatedAt = { formatted };
    return r(p, a, c, i);
  };
  
  export const autoCreatedAt = {
    Query: {},
    Mutation: {
     // Mapping of resolvers to append argument to
      CreateSurvey: appendCreatedAt,
      CreateSurveyTemplate: appendCreatedAt,
      CreateSurveyResponse: appendCreatedAt
    },
  };
  
  export const autoUpdatedAt = {
    Query: {},
    Mutation: {
     // Mapping of resolvers to append argument to
      CreateSurvey: appendUpdatedAt,
    },
  };