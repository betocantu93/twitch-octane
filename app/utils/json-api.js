
function toJsonApiRelationship(id, type) {
  return {
    data: {
      type,
      id
    }
  };
}

export {
  toJsonApiRelationship
}