export const updateActive = (state, data) => {
  return state.sports.map((sport) => {
    return sport.subcat.map((item) => {
      return item.event.forEach((evt) => {
        if (evt.id === data.id) evt.active = data.active;
      });
    });
  });
};
export const updateSportSelection = (state, data) => {
  return state.sports.map((sport) => {
    return sport.subcat.map((item) => {
      return item.event.map((evt) => {
        return evt.selection.forEach((selected) => {
          console.log(data.active);
          if (selected.id === data.id) return (selected.active = data.active);
        });
      });
    });
  });
};

export const updateSportPrice = (state, data) => {
  return state.sports.map((sport) => {
    return sport.subcat.map((item) => {
      return item.event.map((evt) => {
        return evt.selection.forEach((selected) => {
          if (selected.id === data.id) selected.price = data.newPrice;
        });
      });
    });
  });
};
export const updateSportBtn = (state, data) => {
  return state.sports.map((sport) => {
    return sport.subcat.map((item) => {
      return item.event.map((evt) => {
        return evt.selection.map((select) => {
          if (select.id === +data.btnId) {
            !state.btn[+data.btnId]
              ? (state.btn[+data.btnId] = true)
              : (state.btn[+data.btnId] = false);
          }
        });
      });
    });
  });
};
