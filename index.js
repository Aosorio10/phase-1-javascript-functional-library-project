function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
  
    return collection;
  }
  function myMap(collection, callback) {
    let result = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key]));
        }
      }
    }
  
    return result;
  }

  function myReduce(collection, callback, acc) {
    let startIdx = 0;
  
    if (acc === undefined) {
      if (Array.isArray(collection)) {
        acc = collection[0];
        startIdx = 1;
      } else if (typeof collection === 'object' && collection !== null) {
        let keys = Object.keys(collection);
        acc = collection[keys[0]];
        startIdx = 1;
      }
    }
  
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      let keys = Object.keys(collection);
      for (let i = startIdx; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], collection);
      }
    }
  
    return acc;
  }

  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key])) {
            return collection[key];
          }
        }
      }
    }
  
    return undefined;
  }
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key])) {
            return collection[key];
          }
        }
      }
    }
  
    return undefined;
  }
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key])) {
            return collection[key];
          }
        }
      }
    }
  
    return undefined;
  }

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key])) {
            return collection[key];
          }
        }
      }
    }
  
    return undefined;
  }

  function myFilter(collection, predicate) {
    let result = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key])) {
            result.push(collection[key]);
          }
        }
      }
    }
  
    return result;
  }

  function mySize(collection) {
    if (Array.isArray(collection) || typeof collection === 'string') {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    } else {
      return 0;
    }
  }

  function myFirst(array, n) {
    if (!Array.isArray(array) || array.length === 0) {
      return undefined;
    }
  
    if (n === undefined) {
      return array[0];
    } else if (n <= 0) {
      return [];
    } else {
      return array.slice(0, n);
    }
  }

  function myLast(array, n) {
    if (!Array.isArray(array) || array.length === 0) {
      return undefined;
    }
  
    if (n === undefined) {
      return array[array.length - 1];
    } else if (n <= 0) {
      return [];
    } else {
      return array.slice(-n);
    }
  }

  function myKeys(object) {
    if (typeof object !== 'object' || object === null) {
      return [];
    }
    
    return Object.keys(object);
  }

  function myValues(object) {
    if (typeof object !== 'object' || object === null) {
      return [];
    }
  
    return Object.values(object);
  }
  

  
  
  
  
  
  
  
  