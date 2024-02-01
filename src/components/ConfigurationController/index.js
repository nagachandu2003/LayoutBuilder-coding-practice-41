import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="control-bg">
          <h1>Layout</h1>
          <input
            id="content"
            type="checkbox"
            onChange={onToggleShowContent}
            checked={showContent}
          />
          <label htmlFor="content">Content</label>
          <br />
          <input
            id="leftnavbar"
            type="checkbox"
            onChange={onToggleShowLeftNavbar}
            checked={showLeftNavbar}
          />
          <label htmlFor="leftnavbar">Left Navbar</label>
          <br />
          <input
            id="rightnavbar"
            type="checkbox"
            onChange={onToggleShowRightNavbar}
            checked={showRightNavbar}
          />
          <label htmlFor="rightnavbar">Right Navbar</label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
