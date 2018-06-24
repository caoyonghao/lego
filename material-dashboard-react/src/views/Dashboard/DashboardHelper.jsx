import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons
import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

let key = 1;

const renderChild = ({ classes, data }) => {
    const config = data.config;
    const color = config.color || 'success';
    if (data.type === 'simple-card') {
        return (
            <GridItem key={key++} xs={12} sm={6} md={3}>
                <Card>
                    <CardHeader color={color} stats icon>
                        <CardIcon color={color}>
                            <ContentCopy />
                        </CardIcon>
                        <p className={classes.cardCategory}>{config.title}</p>
                        <h3 className={classes.cardTitle}>
                            {config.content}
                        </h3>
                    </CardHeader>
                    <CardFooter stats>
                        <div className={classes.stats}>
                            <Danger>
                                <Warning />
                            </Danger>
                            <a href={config.link}>
                                {config.link}
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </GridItem>);
    } else if (data.type === 'simple-table') {
        return (
            <GridItem key={key++} xs={12} sm={12} md={6}>
                <Card>
                    <CardHeader color={color}>
                        <h4 className={classes.cardTitleWhite}>{config.title}</h4>
                        <p className={classes.cardCategoryWhite}>
                            {config.desc}
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor={color}
                            tableHead={config.table.head}
                            tableData={config.table.data}
                        />
                    </CardBody>
                </Card>
            </GridItem>);
    }
}
export { renderChild };