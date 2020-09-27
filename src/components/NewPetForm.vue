<template>
  <div class="row">
    <div class="col">
      <form>
        <div class="form-group row">
          <label for="name-input" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="name-input">
          </div>
        </div>
        <div class="form-group row">
          <label for="age-input" class="col-sm-2 col-form-label">Age</label>
          <div class="col-sm-10">
            <input type="number" class="form-control" id="age-input">
          </div>
        </div>
        <div class="form-group row">
          <label for="color-input" class="col-sm-2 col-form-label">Color</label>
          <div class="col-sm-10">
            <input type="color" class="form-control" id="color-input">
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Species</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="cat" checked>
                <label class="form-check-label" for="gridRadios1">
                  Dog
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="dog">
                <label class="form-check-label" for="gridRadios2">
                  Cat
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="gender-choice1" value="cat" checked>
                <label class="form-check-label" for="gender-choice1">
                  Female
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="gender-choice2" value="dog">
                <label class="form-check-label" for="gender-choice2">
                  Male
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="form-group row">
          <label for="notes-input" class="col-sm-2 col-form-label">Notes</label>
          <div class="col-sm-10">
            <textarea class="form-control" id="notes-input"></textarea>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
