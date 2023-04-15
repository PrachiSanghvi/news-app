import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

const CardDialog = ({ popupNewsData, open, setOpen }) => {
  // We are using MUI dialog box for showing particular news data in popup
  // We are getting data through props , instead of that we can also use redux to store and get news latest search data
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >

        <div className="row">
          <div className="col-md-4">
              <img src={popupNewsData.urlToImage} alt={popupNewsData.title} width={200} height={200}/>
          </div>
          <div className="col-md-8">
            <DialogTitle id="responsive-dialog-title">
              {popupNewsData.title}
            </DialogTitle>
            <DialogTitle id="responsive-dialog-title">
              Author - {popupNewsData.author}
            </DialogTitle>
            <DialogTitle id="responsive-dialog-title">
              Published Date - {popupNewsData.publishedAt}
            </DialogTitle>
            <DialogTitle id="responsive-dialog-title">
              Description -
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {popupNewsData.description}
              </DialogContentText>
              <DialogContentText>
                {popupNewsData.content}
              </DialogContentText>
            </DialogContent>
          </div>
        </div>

        {/* for closeing dialog box */}
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CardDialog