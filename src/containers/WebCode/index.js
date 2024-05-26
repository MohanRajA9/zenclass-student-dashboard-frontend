import React from "react";
import { Button, Card, CardContent } from "@mui/material";

export function WebCode() {
    return (
        <div>
            <div className="capstoneContainer" >
                <div className="dashboardCardContainer" >
                <div>
                    <Card className="dashBoardcard" >
                        <CardContent className="dashBoardCardContent" >
                            <div>
                                <h3>WebCode</h3>
                            </div>
                            <div>
                                <img src={`./Assets/webcode.png`} alt="" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
                </div>
            </div>
        </div>

    )
}