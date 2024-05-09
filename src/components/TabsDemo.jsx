import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as images from "../assets";
export function TabsDemo() {
  const [coins, setCoins] = useState([
    { id: 'doge', name: 'Doge', image: images.dogecoin },
    { id: 'laika', name: 'Laika', image: images.logo }
  ]);

  const swapCoins = () => {
    setCoins([coins[1], coins[0]]);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <Tabs defaultValue="account" className="w-[100%]">
          <TabsList className="flex items-center gap-3 md:w-[20%] w-full mx-auto py-3 bg-[#0c151f] rounded-2xl">
            <TabsTrigger
              value="account"
              className="rounded-full flex items-center text-white gap-3"
            >
              <img src={images.tabbridge} alt="" className="w-4 h-4" />
              <span>Bridge</span>
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="rounded-full flex items-center text-white gap-3"
            >
              <img src={images.historytab} alt="" className="w-4 h-4" />
              <span>History</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="w-[100%]">
            <Card className="lg:w-[35%] w-[90%] mx-auto">
              <CardHeader>
                <CardTitle className="mb-10">Bridge</CardTitle>
                <div className="flex justify-evenly items-center w-full gap-4">
                  <div className="h-[100px] w-[100px] p-5 bg-[#060b10] rounded-2xl flex justify-center items-center shadow_coin">
                    <img src={coins[0].image} alt={coins[0].name} />
                  </div>
                  <img src={images.shiftvector} alt="" className="w-[30%]" />
                  <div className="h-[100px] w-[100px] p-5 bg-[#060b10] rounded-2xl flex justify-center items-center shadow_coin">
                    <img src={coins[1].image} alt={coins[1].name} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 my-4">
                <div className="flex justify-between w-full my-10">
                  <div className="border-0 text-sm bg-[#060b10] px-2 rounded-[5px] w-[40%] flex items-center gap-3">
                    <img src={coins[0].image} alt={coins[0].name} className="w-4 h-4" />
                    <span>{coins[0].name}</span>
                  </div>
                  <button className="bg-[#060b10] py-3 px-3 rounded-[5px]"  onClick={swapCoins}>
                    <img src={images.swap} alt="" className="w-5 h-5" />
                  </button>
                  <div className="border-0 text-sm bg-[#060b10] px-2 rounded-[5px] w-[40%] flex items-center gap-3">
                    <img src={coins[1].image} alt={coins[1].name} className="w-4 h-4" />
                    <span>{coins[1].name}</span>
                  </div>
                </div>
                <div className="flex justify-between my-10">
                  <Label className="text-dimGrey">You Send</Label>
                  <Label className="text-dimGrey">Balance: 5,000</Label>
                </div>
                <div className="relative my-10">
                  <input type="number" className="w-full bg-[#060b10] appearance-none border-0 text-sm focus:outline-none py-3 px-3 rounded-[5px]" placeholder="0.00" />
                  <div className="absolute top-[20%] right-2 flex items-center gap-8">
                    <span className="text-gradient text-sm">MAX</span>
                    <div className="flex items-center gap-3">
                      <img src={coins[0].image} alt={coins[0].name} className="w-4 h-4" />
                      <span>{coins[0].name}</span>
                    </div>
                  </div>
                </div>
                <div className="my-10">
                  <Label className="text-dimGrey">You Receive</Label>
                </div>
                <div className="relative my-10">
                  <input type="number" disabled className="w-full appearance-none bg-[#060b10] border-0 text-sm focus:outline-none py-3 px-3 rounded-[5px]" placeholder="0.00" />
                  <div className="flex items-center gap-3 absolute top-3 right-2">
                    <img src={coins[1].image} alt={coins[1].name} className="w-4 h-4" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password" className="w-[100%]">
            <Card className="w-[35%] mx-auto">
              <CardHeader>
                <CardTitle className="mb-10">Bridge</CardTitle>
                <div className="flex justify-evenly items-center w-full gap-4">
                  <div className="h-[100px] w-[100px] p-5 bg-[#060b10] rounded-2xl flex justify-center items-center shadow_coin">
                    <img src={images.dogecoin} alt="" />
                  </div>
                  <img src={images.shiftvector} alt="" className="w-[30%]" />
                  <div className="h-[100px] w-[100px] p-5 bg-[#060b10] rounded-2xl flex justify-center items-center shadow_coin">
                    <img src={images.logo} alt="" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
