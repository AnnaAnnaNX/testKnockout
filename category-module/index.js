// return desired object
const findElementById = (id, dataStructure) => {
  if (dataStructure?.id === id) {
    return dataStructure;
  }
  let children;
  try {
    children = dataStructure?.children()
  } catch (e) {
    children = dataStructure?.children;
  }
  if (children) {
    for (obj of children) {
      const result = findElementById(id, obj);
      if (result) {
        return result;
      }
    }
  }
}

const replaceElementById = (id, replacement, dataStructure) => {
  if (dataStructure?.id === id) {
    return replacement;
  }
  if (dataStructure?.children()) {
    for (obj of dataStructure.children()) {
      const result = findElementById(id, replacement, obj);
      if (result) {
        return result;
      }
    }
  }
}

// does not delete whole base object
const deleteElementById = (id, obj, dataStructure) => {
  if (id === obj?.id) return null;
  const children = obj?.children();
  if (children) {
    const index = children.map((el) => (el.id)).indexOf(id);
    if (index != -1) {
      children.splice(index, 1);
      return dataStructure;
    }
    for (el of obj.children()) {
      const result = deleteElementById(id, el, dataStructure);
      if (result) {
        return result;
      }
    }
  }
}

// after
const addElementAfter = (el, id, obj, dataStructure, order="after") => {
  if (id === obj?.id) return null; // return Error
  const children = obj?.children();
  if (children) {
    const index = children.map((_) => (_.id)).indexOf(id);
    if (index != -1) {
      const indexForEl = index + (order === 'after' ? 1 : 0);
      children.splice(indexForEl, 0, el)
      return dataStructure;
    }
    for (child of obj.children()) {
      const result = addElementAfter(el, id, child, dataStructure, order);
      if (result) {
        return result;
      }
    }
  }
}

