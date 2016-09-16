// import assert from 'assert';
import {Map, List} from 'immutable';
import {expect, assert} from 'chai';
describe('Данные', () =>
  describe('Списки', () =>
    it('Список корректно увеличился', () => {
        "use strict";
        const listOfGenres = List.of("Драма", "Комедия");
        const newListOfGenres = listOfGenres.push("Боевик");


        let obj = Map().set('entires', newListOfGenres);
      console.log(obj);
      // assert.lengthOf(newListOfGenres.List, 3, "все ок");
        // console.log(listOfGenres, newListOfGenres);
        // assert.equal(-1, [1,2,3].indexOf(4));
      }
    )
  )
);