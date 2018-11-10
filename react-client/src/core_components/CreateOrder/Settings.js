import React from 'react'
import { observer } from 'mobx-react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import _ from 'lodash'
import DashboardsStore from '../../stores/DashboardsStore'

@observer
class Settings extends React.Component {
  render() {
    var {dashboardId, widgetId} = this.props.data
    return (
      <div>
        <div className="section-body">
          <form noValidate autoComplete="off">
            <Typography variant="h6" gutterBottom>Widget settings</Typography>
            <TextField
              id="outlined-name"
              label="Name"
              value={_.find(DashboardsStore.dashboards[dashboardId].widgets, ['i', widgetId]).customHeader}
              onChange={this.changeCustomHeader.bind(this)}
              variant="outlined"
              fullWidth
            />
            <br />
            <br />
            <TextField
              id="outlined-name"
              label="Type"
              value={_.find(DashboardsStore.dashboards[dashboardId].widgets, ['i', widgetId]).data.type}
              onChange={this.setWidgetData.bind(this, 'type')}
              variant="outlined"
              fullWidth
            />
          </form>
        </div>
        <Divider />
      </div>
    )
  }
  changeCustomHeader(e) {
    var {dashboardId, widgetId} = this.props.data
    DashboardsStore.setCustomHeader(dashboardId, widgetId, e.target.value)
  }
  setWidgetData(key, e) {
    var {dashboardId, widgetId} = this.props.data
    DashboardsStore.setWidgetData(dashboardId, widgetId, key, e.target.value)
  }
}

export default Settings
