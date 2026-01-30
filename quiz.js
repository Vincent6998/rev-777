const allQuestions = [

 {
    "question": "How many BackDrive Actuators are active during a stabilized autoland ILS approach above 1500ft:",
    "choices": [
      "A) 2",
      "B) 3",
      "C) 4"
    ],
    "correctAnswer": "A",
    "category": "ATA 22"
  },
  {
    "question": "How many BackDrive Actuators are active during a stabilized autoland ILS approach below 1500ft:",
    "choices": [
      "A) 3",
      "B) 4",
      "C) 6"
    ],
    "correctAnswer": "C",
    "category": "ATA 22"
  },
  {
    "question": "The AFDCs use MCP data sent:",
    "choices": [
      "A) by the MCP channel A",
      "B) by the MCP channel B",
      "C) to the master AFDC"
    ],
    "correctAnswer": "C",
    "category": "ATA 22"
  },
  {
    "question": "How many microprocessors are there in a MCP?",
    "choices": [
      "A) 1",
      "B) 2",
      "C) 3"
    ],
    "correctAnswer": "B",
    "category": "ATA 22"
  },
  {
    "question": "When autopilot is engaged after power up, the MCP channel sending data to the AFDCs is:",
    "choices": [
      "A) Channel A",
      "B) Channel B",
      "C) a random selection of channel A or channel B"
    ],
    "correctAnswer": "B",
    "category": "ATA 22"
  },
  {
    "question": "TO 2 on the EICAS indicates that:",
    "choices": [
      "A) the autothrottle is available for the 2 engines",
      "B) takeoff thrust is derated",
      "C) the 2 TMCFs are available"
    ],
    "correctAnswer": "B",
    "category": "ATA 22"
  },
  {
    "question": "Engine trim equalization:",
    "choices": [
      "A) equalizes the thrust between the 2 engines without throttle lever movement",
      "B) sends a command to the throttle lever servo motors",
      "C) is active whatever the N1% difference between the 2 engines"
    ],
    "correctAnswer": "A",
    "category": "ATA 22"
  },
  {
    "question": "When the A/P disengage bar is pushed down:",
    "choices": [
      "A) the Bank Angle Protection through the control Wheel is still available",
      "B) Flight Directors aren't available anymore",
      "C) the Bank Angle Protection through the control Wheel is lost"
    ],
    "correctAnswer": "C",
    "category": "ATA 22"
  },
  {
    "question": "When the A/P and Autothrottle are active on an airplane just after takeoff the speed is controlled by:",
    "choices": [
      "A) the autothrottle",
      "B) the autopilot",
      "C) the Flight Director"
    ],
    "correctAnswer": "B",
    "category": "ATA 22"
  },
  {
    "question": "When flying with the autopilot in cruise, how many BackDrive Actuators are engaged?",
    "choices": [
      "A) 2",
      "B) 3",
      "C) 4"
    ],
    "correctAnswer": "A",
    "category": "ATA 22"
  },
  {
    "question": "The MCP switch that doesn't have an annunciator bar is:",
    "choices": [
      "A) the A/T switch",
      "B) the FLCH switch",
      "C) the CLB/CON switch"
    ],
    "correctAnswer": "C",
    "category": "ATA 22"
  },
  {
    "question": "The master AFDC data:",
    "choices": [
      "A) only control its onside Backdrive Actuators (BDA)",
      "B) control all 6 BDAs during autoland",
      "C) control its onside BDAs and the MCP channel writing to the MCP LCD displays"
    ],
    "correctAnswer": "C",
    "category": "ATA 22"
  },
  {
    "question": "The autothrottle arm switches on the mode control panel (MCP):",
    "choices": [
      "A) Engage the autothrottle",
      "B) Give power to thrust management function software partition",
      "C) Give power to the A/T servomotors in the thrust CTL module"
    ],
    "correctAnswer": "C",
    "category": "ATA 22"
  },
  {
    "question": "Thrust Limit modes are displayed on:",
    "choices": [
      "A) the EICAS",
      "B) the ND",
      "C) the PFD"
    ],
    "correctAnswer": "A",
    "category": "ATA 22"
  },
  {
    "question": "An airplane climbs above 400ft after an autopilot Go-Around:",
    "choices": [
      "A) above 400ft the bus isolation is not active anymore",
      "B) the bus isolation stays active until 500ft",
      "C) the bus isolation stays active until 1500ft"
    ],
    "correctAnswer": "A",
    "category": "ATA 22"
  },
  {
    "question": "In cruise the number of operating AFDCs is:",
    "choices": [
      "A) 1",
      "B) 2",
      "C) 3"
    ],
    "correctAnswer": "C",
    "category": "ATA 22"
  },
  {
    "question": "The right Backdrive Actuators are connected to:",
    "choices": [
      "A) the left AFDC",
      "B) the center AFDC",
      "C) the right AFDC"
    ],
    "correctAnswer": "C",
    "category": "ATA 22"
  },
  {
    "question": "When the A/P is disengaged through the disengage bar:",
    "choices": [
      "A) both the A/P and FD are disengaged",
      "B) the A/P engages when the disengage bar is set to the up position (Normal)",
      "C) the FD is still available."
    ],
    "correctAnswer": "C",
    "category": "ATA 22"
  },
  {
        "question": "The right Backdrive Actuators are connected to:",
        "choices": [
            "A) the left AFDC",
            "B) the center AFDC",
            "C) the right AFDC"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "When the A/P is disengaged through the disengage bar:",
        "choices": [
            "A) both the A/P and FD are disengaged",
            "B) the A/P engages when the disengage bar is set to the up position (Normal)",
            "C) the FD is still available"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "The Back Drive Actuator that can engage when the Autopilot isn't engaged is:",
        "choices": [
            "A) the rudder pedal BDA",
            "B) the thrust lever Actuator",
            "C) the control wheel BDA"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "If the Autothrottle mode on the FMA is SPD:",
        "choices": [
            "A) speed is managed by the TMCF",
            "B) speed is managed by the AFDS",
            "C) engine thrust is derated not to exceed the VMO"
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },
    {
        "question": "When AP is engaged as the airplane is in cruise with the Flight Director ON, AP modes are:",
        "choices": [
            "A) LNAV and VNAV",
            "B) FLCH and APP",
            "C) same as FD modes"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "Autothrottle modes are displayed on:",
        "choices": [
            "A) the EFB",
            "B) the ND",
            "C) the PFD"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "The normal way to disengage the AutoPilot is:",
        "choices": [
            "A) the A/P disengage bar on the MCP",
            "B) the switch on the control wheel",
            "C) the A/P switch on the MCP"
        ],
        "correctAnswer": "B",
        "category": "ATA 22"
    },
    {
        "question": "When a pilot overrides a Back Drive Actuator:",
        "choices": [
            "A) AP disengages and reengages when the override signal is gone",
            "B) AP disengages and pilots must fly manually",
            "C) AP stays engaged but the aircraft is manually controlled"
        ],
        "correctAnswer": "B",
        "category": "ATA 22"
    },
    {
        "question": "Which AFDC is normally master after the airplane initial power up test?",
        "choices": [
            "A) The left AFDC",
            "B) The center AFDC",
            "C) The right AFDC"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "During autopilot operation, the PFCs use:",
        "choices": [
            "A) data from the master AFDC",
            "B) data from an AFDC randomly selected",
            "C) a mid-value selection of the 3 AFDCs"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "The active TMCF selection:",
        "choices": [
            "A) is a random selection",
            "B) starts with the right TMCF and switches to the other side when reselected",
            "C) is similar to the FMCF selection"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "The A/T disconnect switches are located on:",
        "choices": [
            "A) the sides of the thrust levers",
            "B) the control wheel",
            "C) the Mode Control Panel (MCP)"
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },
    {
        "question": "During an autoland the rudder pedal BackDrive Actuators engage at a radio altitude of:",
        "choices": [
            "A) 400 Ft",
            "B) 1500 Ft",
            "C) 2500 Ft"
        ],
        "correctAnswer": "B",
        "category": "ATA 22"
    },
    {
        "question": "In cruise with A/P and Autothrottle ON the altitude is kept by:",
        "choices": [
            "A) the autothrottle",
            "B) the autopilot",
            "C) the flight director"
        ],
        "correctAnswer": "B",
        "category": "ATA 22"
    },
    {
        "question": "If a mode control switch annunciator bar (green light) is illuminated:",
        "choices": [
            "A) the mode is active",
            "B) the mode is armed",
            "C) the mode can be either active or armed"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "When in cruise without failure, the Autopilot configuration is:",
        "choices": [
            "A) 1 AFDC engaged",
            "B) 2 AFDCs engaged with 1 as master",
            "C) 3 AFDCs engaged with 1 as master"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "ILS antenna switching is controlled by:",
        "choices": [
            "A) the onside AFDC",
            "B) the active TMCF",
            "C) the onside Radio Altimeter"
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },
    {
        "question": "When the left A/P switch is pushed:",
        "choices": [
            "A) one of the AFDCs is randomly selected as master",
            "B) the Autopilot is either engaged or disengaged",
            "C) all available AFDCs engage"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "In approach when the flight crew push either TO/GA switch once:",
        "choices": [
            "A) the autothrottle disconnects",
            "B) the Thrust Limit Mode is TO",
            "C) AFDS supplies a pitch up command, TMCS thrust maintains a 2000 ft/min climb"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "To reset the A/P disengage warning (wailer):",
        "choices": [
            "A) press the A/P switch on the MCP",
            "B) push one of the Master Warning Lights",
            "C) push on the A/P disengage switch on the control wheel"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "How many BackDrive Actuators are engaged at 700ft after an autopilot go-around?",
        "choices": [
            "A) 2",
            "B) 4",
            "C) 6"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "When the autothrottle is active, the thrust reduction after takeoff:",
        "choices": [
            "A) must always be initiated by a pilot action on the CLB/CON switch",
            "B) is automatic at a preset radio altitude whatever the autoflight pitch mode is",
            "C) is automatic at a preset radio altitude or flap setting if VNAV is active"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "For Engine Trim Equalization:",
        "choices": [
            "A) EEC Lh and Rh exchange data to keep synchronized",
            "B) the TMCF sends engine trim commands to the thrust lever servo motors",
            "C) the TMCF sends engine trim commands to the EECs"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "When the Autopilot pitch mode is VNAV SPD the airspeed is controlled by:",
        "choices": [
            "A) the Autopilot through the elevator",
            "B) the Autothrottle",
            "C) a mix of Autothrottle and Autopilot"
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },
    {
        "question": "The Bank Angle Protection triggers when the:",
        "choices": [
            "A) autopilot disengages",
            "B) airplane is about to stall",
            "C) PFCS is in the Normal mode and the airplane bank angle is more than 35 deg"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "You engage the Autopilot for the 1st time with the Rh A/P switch on an MCP which microprocessor B is failed:",
        "choices": [
            "A) the Right AFDC is master",
            "B) the Left AFDC is master",
            "C) the A/P disengages"
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },	
  {
        "question": "With the autopilot engaged or disengaged, if the airplane bank angle exceeds 35 degrees, the bank angle protection (BAP) function operates. The backdrive actuators will move:",
        "choices": [
            "A) The control columns",
            "B) The control wheels",
            "C) The rudder pedals"
        ],
        "correctAnswer": "B",
        "category": "ATA 22"
    },
    {
        "question": "The AFDS engages all six backdrive actuators:",
        "choices": [
            "A) In autoland.",
            "B) During landing phase",
            "C) During take-off phase"
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },
    {
        "question": "The autopilot pitch mode is VNAV SPD. What controls the airplane airspeed?",
        "choices": [
            "A) Both the elevator and the autothrottle.",
            "B) The elevator.",
            "C) The autothrottle."
        ],
        "correctAnswer": "B",
        "category": "ATA 22"
    },
    {
        "question": "The thrust management computing system (TMCS) autothrottle modes, such as THR, THR REF and SPD show on the?",
        "choices": [
            "A) EICAS display.",
            "B) Primary flight display (PFD).",
            "C) Mode control panel (MCP)."
        ],
        "correctAnswer": "B",
        "category": "ATA 22"
    },
    {
        "question": "The thrust management computing system (TMCS) thrust limit modes such as TO, CLB, CRZ and GA show on the?",
        "choices": [
            "A) EICAS display.",
            "B) Primary flight display (PFD).",
            "C) Mode control panel (MCP)."
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },
    {
        "question": "All the autopilot flight director computers (AFDCs) and their related sensors have no faults and the airplane is in cruise. How many AFDCs are engaged when you push an autopilot (A/P) switch on the mode control panel (MCP)?",
        "choices": [
            "A) 3",
            "B) 2",
            "C) 1"
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },
    {
        "question": "The airplane is in cruise and has no faults. How many backdrive actuators engage when the pilot engages the autopilot?",
        "choices": [
            "A) 2",
            "B) 3",
            "C) 6"
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },
    {
        "question": "Which of these mode select switches on the mode control panel (MCP) does not have a light emitting diode?",
        "choices": [
            "A) A/T.",
            "B) HOLD.",
            "C) CLB/CON."
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "At what radio altitude do the rudder pedal backdrive actuators engage during approach?",
        "choices": [
            "A) 400 feet.",
            "B) 1 500 feet.",
            "C) 2 500 feet."
        ],
        "correctAnswer": "B",
        "category": "ATA 22"
    },
    {
        "question": "The bank angle protection (BAP) is active when the?",
        "choices": [
            "A) Pilot disengages the autopilot.",
            "B) Primary flight control system (PFCS) is in direct mode.",
            "C) Bank angle is more than 35 degrees in normal mode."
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "All the autopilot flight director computers (AFDCs) and their related sensors have no faults and the airplane is in cruise. How many AFDCs are master when you push an autopilot (A/P) switch on the mode control panel (MCP)?",
        "choices": [
            "A) 3",
            "B) 2",
            "C) 1"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "How many microprocessors are available in the MCP?",
        "choices": [
            "A) 2",
            "B) 3",
            "C) 4"
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },
    {
        "question": "How many backdrives are installed in the airplane?",
        "choices": [
            "A) 4",
            "B) 6",
            "C) 3"
        ],
        "correctAnswer": "B",
        "category": "ATA 22"
    },
{
        "question": "Concerning antenna switching?",
        "choices": [
            "A) LOC/VOR antennas switching is done by the ILS receiver.",
            "B) Antennas switching is done by the AFDC.",
            "C) LOC/VOR and G/S antennas switching are done by the ILS receiver"
        ],
        "correctAnswer": "B",
        "category": "ATA 22"
    },
    {
        "question": "How many microprocessors are available in the AFDC?",
        "choices": [
            "A) 2",
            "B) 3",
            "C) 4"
        ],
        "correctAnswer": "B",
        "category": "ATA 22"
    },
    {
        "question": "The flight mode annunciator FMA autothrottle mode is speed SPD, therefore?",
        "choices": [
            "A) The target thrust is equal to the thrust limit",
            "B) The thrust is equal to the N1 entered by the crew on the control display unit CDU speed page.",
            "C) The speed is managed by the thrust management computing system TCMS"
        ],
        "correctAnswer": "C",
        "category": "ATA 22"
    },
    {
        "question": "At Take off, auto throttle is active, therefore thrust reduction:",
        "choices": [
            "A) Occurs automatically at thrust reduction altitude provided VNAV is active.",
            "B) Is only manually selected by the pilot by action on the 'Climb - Con' switch.",
            "C) Is always automatic once the thrust reduction altitude is reached."
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },
    {
        "question": "TO-1 shows on the EICAS, therefore?",
        "choices": [
            "A) Only engine 1 autothrust is available.",
            "B) Takeoff thrust is derated.",
            "C) Thrust management computing function 1 (TMCF1) is active in takeoff mode, TMCF2 is in stand-by mode."
        ],
        "correctAnswer": "B",
        "category": "ATA 22"
    },
    {
        "question": "Engine equalization is performed as follows?",
        "choices": [
            "A) Without throttles movement, provided they are close to each other.",
            "B) By the autothrottle servo motors.",
            "C) Only when the autothrottle is in the 'hold' mode."
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },
    {
        "question": "Following the power up test?",
        "choices": [
            "A) The right AFDC is normally master.",
            "B) The left AFDC is normally master.",
            "C) The system memorizes the AFDC that was master before power shutdown, at power up the opposite AFDC will become master."
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },
    {
        "question": "The active ATHR function (left or right)?",
        "choices": [
            "A) Is normally of the same side of the active FMCF (left or right).",
            "B) It is independent of the FMCF, at every ATHR engagement it switches side.",
            "C) Left function (of left cabinet) manages the left throttle, right function (of right cabinet) manages the right throttle."
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },
    {
        "question": "The autothrottle disconnect switches on the left and right thrust levers are used as follows?",
        "choices": [
            "A) Any switch disengages the autothrottle.",
            "B) The left or right pushbutton disengages respectively the left or right autothrottle function.",
            "C) Pushing both switches simultaneously disconnects the autothrottle for the remaining part of the flight, engagement of the autothrottle is no more possible before the next power-up."
        ],
        "correctAnswer": "A",
        "category": "ATA 22"
    },
 {
      "question": "The aircraft position displayed on the ND is:",
      "choices": [
        "A) a GPS position",
        "B) a Radio Navigation position",
        "C) a FMCF computed position"
      ],
      "correctAnswer": "C",
      "category": "ATA 34"
    },
    {
      "question": "The B777 has:",
      "choices": [
        "A) 1 Flight Management Computing Function",
        "B) 2 Flight Management Computing Functions",
        "C) 3 Flight Management Computing Functions"
      ],
      "correctAnswer": "B",
      "category": "ATA 34"
    },
    {
      "question": "You can select the active Flight Management Computing Function with:",
      "choices": [
        "A) the F/O display switching panel FMC selector",
        "B) the CAPT or F/O CDU",
        "C) the Mode Control Panel"
      ],
      "correctAnswer": "A",
      "category": "ATA 34"
    },
    {
      "question": "The GPWS gives warnings:",
      "choices": [
        "A) related to unsafe air traffic separation",
        "B) of unsafe flight conditions when the airplane is in cruise",
        "C) of unsafe flight conditions below 2450 feet Radio Altitude"
      ],
      "correctAnswer": "C",
      "category": "ATA 34"
    },
    {
      "question": "Flight Management Computing Functions are software in:",
      "choices": [
        "A) the 3 Autopilot Flight Director Computers",
        "B) the 2 AIMS cabinets",
        "C) the Mode Control Panel processors"
      ],
      "correctAnswer": "B",
      "category": "ATA 34"
    },
    {
      "question": "The ground test of the CDU is in the:",
      "choices": [
        "A) ATA 22",
        "B) ATA 23",
        "C) ATA 34"
      ],
      "correctAnswer": "C",
      "category": "ATA 34"
    },
    {
      "question": "The Flight Management Computing System:",
      "choices": [
        "A) supplies the Synoptic pages to the crews",
        "B) sends orders to the EECs to control engine thrust",
        "C) supplies flight plan control data and navigation calculations"
      ],
      "correctAnswer": "C",
      "category": "ATA 34"
    },
    {
      "question": "The pages that the flight crew uses to enter pre-flight data into the FMCS are accessible from:",
      "choices": [
        "A) the CDUs",
        "B) the EFB Display Units",
        "C) the MFDs"
      ],
      "correctAnswer": "A",
      "category": "ATA 34"
    },
    {
      "question": "In case of simultaneous GPWS, TCAS and WXR warnings the priority is:",
      "choices": [
        "A) GPWS - TCAS - WXR",
        "B) GPWS - WXR - TCAS",
        "C) WXR - TCAS - GPWS"
      ],
      "correctAnswer": "B",
      "category": "ATA 34"
    },
    {
      "question": "In case of simultaneous GPWS and WXR warnings priorities are managed by:",
      "choices": [
        "A) the Warning Electronic System",
        "B) the Ground Proximity Warning System",
        "C) the Weather Radar"
      ],
      "correctAnswer": "B",
      "category": "ATA 34"
    },
    {
      "question": "The GPWC sends its aural alerts and warnings:",
      "choices": [
        "A) directly to the aural warning speakers",
        "B) to the Warning Electronic System",
        "C) to the AIMS cabinets"
      ],
      "correctAnswer": "B",
      "category": "ATA 34"
    },
    {
      "question": "The 2 Flight Management Computing Functions:",
      "choices": [
        "A) operate simultaneously",
        "B) operate one at a time",
        "C) compute only the horizontal flight plan"
      ],
      "correctAnswer": "B",
      "category": "ATA 34"
    },
    {
      "question": "The FMC switch on the F/O Display Switching Panel:",
      "choices": [
        "A) makes sure that the FMCF and TMCF operate in different cabinets",
        "B) selects the active FMCF and Autopilot",
        "C) selects the active FMCF and TMCF"
      ],
      "correctAnswer": "C",
      "category": "ATA 34"
    },
    {
      "question": "If the 2 FMCFs fail:",
      "choices": [
        "A) the CDUs can supply LNAV",
        "B) the autopilot becomes inoperative",
        "C) the CDUs can supply VNAV"
      ],
      "correctAnswer": "A",
      "category": "ATA 34"
    },
    {
      "question": "The FMC COMM page is displayed by:",
      "choices": [
        "A) the FMC COMM key on the CDU",
        "B) the COMM key on the DSP",
        "C) the COMM key on the EFIS Control Panel"
      ],
      "correctAnswer": "A",
      "category": "ATA 34"
    },
    {
      "question": "The SET HDG field of the CDU POS INIT page 1/3 is:",
      "choices": [
        "A) to provide heading to the SAARU in case of ADIRU failure",
        "B) to align the ADIRU",
        "C) to align the SAARU"
      ],
      "correctAnswer": "A",
      "category": "ATA 34"
    },
    {
      "question": "CDUs are part of:",
      "choices": [
        "A) the Airplane Information Management System",
        "B) the Primary Display System",
        "C) the Flight Management System"
      ],
      "correctAnswer": "C",
      "category": "ATA 34"
    },
    {
      "question": "The Airline Policy page relates to:",
      "choices": [
        "A) FMCS operational flight program and data base identification Numbers",
        "B) the reference airplane initial position",
        "C) Airline Modifiable Information"
      ],
      "correctAnswer": "C",
      "category": "ATA 34"
    },
    {
      "question": "The Inertial Monitor page relates to:",
      "choices": [
        "A) FMCF computation errors",
        "B) ADIRU drift",
        "C) GPS position update from the ADIRU"
      ],
      "correctAnswer": "B",
      "category": "ATA 34"
    },
    {
      "question": "LNAV is:",
      "choices": [
        "A) INOP if the 2 FMCFs are failed",
        "B) computed by the Autopilot Flight Director Computers",
        "C) computed by a CDU in case of failure of the FMCFs"
      ],
      "correctAnswer": "C",
      "category": "ATA 34"
    },
    {
      "question": "Dashes replace box prompts on the CDU 'POSITION INIT' page when:",
      "choices": [
        "A) the ADIRU alignment fails",
        "B) the GPS position is available",
        "C) the ADIRU alignment is in progress"
      ],
      "correctAnswer": "A",
      "category": "ATA 34"
    },
    {
      "question": "Time Critical Warnings from the GPWS are:",
      "choices": [
        "A) Windshear and pull-up",
        "B) Pull-up and terrain",
        "C) Windshear ahead and terrain"
      ],
      "correctAnswer": "A",
      "category": "ATA 34"
    },
    {
      "question": "The purpose of the TERRAIN OVERRIDE switch is:",
      "choices": [
        "A) to inhibit TERRAIN alerts",
        "B) to prevent Controlled Flight Into Terrain from happening",
        "C) to automatically go around a TERRAIN threat"
      ],
      "correctAnswer": "A",
      "category": "ATA 34"
    },
    {
      "question": "When the FMCF has an active flight plan the VOR receiver is tuned by:",
      "choices": [
        "A) the Radio Tuning Panel",
        "B) the center CDU 'Nav Radio' page",
        "C) the left or right AIMS"
      ],
      "correctAnswer": "C",
      "category": "ATA 34"
    },
    {
      "question": "For mode 5 (below Glide Slope) alerts computation the GPWC gets data from:",
      "choices": [
        "A) the left MMR",
        "B) the center MMR",
        "C) the right MMR"
      ],
      "correctAnswer": "A",
      "category": "ATA 34"
    },
    {
      "question": "If the 2 Flight Management Computing Functions fail:",
      "choices": [
        "A) the on-side control display unit (CDU) supplies map data to the on-side ND",
        "B) map and navigation data are lost",
        "C) the center CDU supplies map data to the 2 NDs"
      ],
      "correctAnswer": "A",
      "category": "ATA 34"
},
{
  "question": "The purpose of VNAV is to:",
  "choices": [
    "A) compute the necessary thrust to perform a FL change in 120 seconds",
    "B) provide MAP data to the PDS for display on the ND",
    "C) control A/C vertical path and speed to comply with the FLT plan constraints"
  ],
  "correctAnswer": "C",
  "category": "ATA 34"
},
{
  "question": "If the GPWC determines that there is a terrain threat:",
  "choices": [
    "A) the terrain display shows on both NDs if not selected on either one",
    "B) the Flight crew must display the terrain via the TERR switch on the EFIS CP",
    "C) the WXR display has to be stopped to be replaced by the Terrain threat"
  ],
  "correctAnswer": "A",
  "category": "ATA 34"
},
{
  "question": "If the 2 Flight Management Computing Functions fail:",
  "choices": [
    "A) the on-side CDU supplies NAV data to the on-side Autopilot",
    "B) LNAV and VNAV commands to the Autopilot are lost",
    "C) L, CTR or R CDU (priority with all CDUs valid) supplies LNAV data to the AP"
  ],
  "correctAnswer": "C",
  "category": "ATA 34"
},
{
  "question": "In the Alternate LNAV function, to supply navigation outputs, the CDUs use data from:",
  "choices": [
    "A) the ADIRU only",
    "B) the ADIRU updated by radio position",
    "C) the ADIRU updated by GPS position"
  ],
  "correctAnswer": "A",
  "category": "ATA 34"
},
{
  "question": "The FMCF displays alerting messages when there is a degraded system condition. The highest message priority is:",
  "choices": [
    "A) Data entry error advisory messages. Ex: \"NOT IN DATA BASE\"",
    "B) Operational messages. Ex: \"END OF ROUTE\"",
    "C) Communication messages. Ex: \"PERF INIT UPLINK\""
  ],
  "correctAnswer": "A",
  "category": "ATA 34"
},
{
  "question": "When the 2 FMCFs and the left CDU are failed:",
  "choices": [
    "A) LNAV is INOP if the A/P is engaged from the left A/P switch on the MCP",
    "B) LNAV and VNAV guidance commands are sent to the A/P by the center CDU",
    "C) LNAV guidance commands are sent to the A/P by the center CDU"
  ],
  "correctAnswer": "C",
  "category": "ATA 34"
},
{
  "question": "Which function isn't an EGPWS function:",
  "choices": [
    "A) Runway Awareness and Advisory System",
    "B) Windshear",
    "C) Predictive windshear"
  ],
  "correctAnswer": "C",
  "category": "ATA 34"
},
{
  "question": "The GPWC makes these aurals come on when it receives a request from the AIMS cabinets:",
  "choices": [
    "A) \"Approaching minimums\" and \"Bank Angle\"",
    "B) \"Engine Fail\" and \"V1\"",
    "C) \"Too low gear\" and \"Too low flaps\""
  ],
  "correctAnswer": "B",
  "category": "ATA 34"
},
	{
    "question": "ADF antennas are located:",
    "choices": [
        "A) on the top of the vertical stabilizer",
        "B) behind the radome",
        "C) on the top of the fuselage"
    ],
    "correctAnswer": "C",
    "category": "ATA 34"
},
{
    "question": "The ADF tune mode can be:",
    "choices": [
        "A) M, P, R or A",
        "B) M or A only",
        "C) M only"
    ],
    "correctAnswer": "C",
    "category": "ATA 34"
},
{
    "question": "The TCAS sends aural alerts to:",
    "choices": [
        "A) the Ground Proximity Warning System",
        "B) the Warning Electronic System",
        "C) the 2 TCAS Directional Antennas"
    ],
    "correctAnswer": "B",
    "category": "ATA 34"
},
{
    "question": "The part of the weather radar system that shouldn't be removed from the airplane is:",
    "choices": [
        "A) the waveguide",
        "B) the waveguide switch",
        "C) the antenna mount assembly"
    ],
    "correctAnswer": "C",
    "category": "ATA 34"
},
{
    "question": "To switch on the Weather Radar you use:",
    "choices": [
        "A) Nothing, WXR is controlled by the Flight Management Function",
        "B) a switch on the EFIS Control Panel",
        "C) a switch on the Display Select Panel"
    ],
    "correctAnswer": "B",
    "category": "ATA 34"
},
{
    "question": "A TCAS can track an airplane:",
    "choices": [
        "A) that is equipped with an ATC Radio Beacon System transponder",
        "B) only if the airplane is equipped with an ATC Mode S transponder",
        "C) even if the airplane doesn't have a transponder"
    ],
    "correctAnswer": "A",
    "category": "ATA 34"
},
{
    "question": "The WXR control panel receives power from:",
    "choices": [
        "A) the P11 Overhead Circuit Breaker panel",
        "B) the left and right WXR receiver/transmitters",
        "C) the CAPT FLT INST bus"
    ],
    "correctAnswer": "B",
    "category": "ATA 34"
},
{
    "question": "WXR data can be displayed on:",
    "choices": [
        "A) the Primary Flight Display",
        "B) the Electronic Flight Bag",
        "C) the ND in the Expanded APP, VOR, MAP and centered MAP modes"
    ],
    "correctAnswer": "C",
    "category": "ATA 34"
},
{
    "question": "The WXR predictive windshear function turns on when:",
    "choices": [
        "A) the FMCF sends an APP discrete to the WXR transceiver",
        "B) the Flight Crew selects PWS on the control panel",
        "C) an engine is set to the take-off thrust on the ground",
    ],
    "correctAnswer": "C",
    "category": "ATA 34"
},
{
    "question": "The WXR Predictive Windshear function is armed via a discrete sent by:",
    "choices": [
        "A) the Mode Control Panel",
        "B) the Warning Electronic System",
        "C) the WXR Control Panel"
    ],
    "correctAnswer": "B",
    "category": "ATA 34"
},
{
    "question": "The Predictive Windshear (PWS) function of the WXR uses Radio Altitude to:",
    "choices": [
        "A) prioritize the different alerts",
        "B) turn PWS ON and OFF",
        "C) compute Wind speeds"
    ],
    "correctAnswer": "B",
    "category": "ATA 34"
},
{
    "question": "Predictive windshear symbol is displayed on:",
    "choices": [
        "A) the PFD",
        "B) the ND",
        "C) both the PFD and ND"
    ],
    "correctAnswer": "B",
    "category": "ATA 34"
},
{
    "question": "During a windshear alert the WXR PWS card makes an inhibit discrete that:",
    "choices": [
        "A) changes TCAS Resolution Advisories to Traffic Advisories",
        "B) disconnects the Autopilot",
        "C) initiates an automatic Go-Around"
    ],
    "correctAnswer": "A",
    "category": "ATA 34"
},
{
    "question": "On the WXR control panel the TFR switch is used to:",
    "choices": [
        "A) select the left or right WXR transceiver",
        "B) cause the RT to use the same mode, tilt and gain as the other side",
        "C) select the weather and turbulence mode"
    ],
    "correctAnswer": "B",
    "category": "ATA 34"
},
{
    "question": "When you select the WXR switch on the EFIS CTL Panel:",
    "choices": [
        "A) the 2 WXR RTs are switched on",
        "B) the WXR data shows on the 2 NDs",
        "C) the WXR data shows on the onside ND"
    ],
    "correctAnswer": "C",
    "category": "ATA 34"
},
{
    "question": "The WXR system:",
    "choices": [
        "A) shouldn't be operated if there is an open fuel cell less than 50ft away",
        "B) can be used if there is a fuel leakage less than 50ft away",
        "C) can be used if personnel is working in the nose radome"
    ],
    "correctAnswer": "A",
    "category": "ATA 34"
},
{
    "question": "The 2 switches of the WXR antenna pedestal:",
    "choices": [
        "A) prevent each WXR transceiver from emitting",
        "B) are used to make a test of the WXR system",
        "C) are elevation and scan disable switches"
    ],
    "correctAnswer": "C",
    "category": "ATA 34"
},
{
    "question": "In case of simultaneous TCAS and WXR warnings an alert inhibit discrete is sent:",
    "choices": [
        "A) by the WEUs to the TCAS computer",
        "B) by the WEUs to the WXR RT",
        "C) by the WXR RT to the TCAS computer"
    ],
    "correctAnswer": "C",
    "category": "ATA 34"
},
{
    "question": "If the right DME fails, the right DME distance on the first officer VOR mode display:",
    "choices": [
        "A) shows dashes",
        "B) is replaced by the left DME distance",
        "C) shows an amber DME flag"
    ],
    "correctAnswer": "C",
    "category": "ATA 34"
},
{
    "question": "Radio Altitude is used by:",
    "choices": [
        "A) the autobrake system",
        "B) the Flight Management Computing Functions",
        "C) the Weather Radar"
    ],
    "correctAnswer": "C",
    "category": "ATA 34"
},
{
    "question": "On the Captain's PFD and ND, if the left DME fails during an ILS approach:",
    "choices": [
        "A) the DME flag replaces the DME distance",
        "B) the right DME distance is shown instead of the left DME distance",
        "C) a flag replaces the left DME distance but the right DME is still shown"
    ],
    "correctAnswer": "A",
    "category": "ATA 34"
},
{
    "question": "To listen to a DME station audio identifier When the ND Mode Selector on the EFIS Control Panel is set to APP:",
    "choices": [
        "A) set the ACP MKR/APP switch to the appropriate APP position + adjust volume",
        "B) set the ACP VOR/ADF switch to the appropriate position + adjust volume",
        "C) push the ACP center VHF receiver volume control to listen to DME DATA"
    ],
    "correctAnswer": "A",
    "category": "ATA 34"
},
{
    "question": "Marker Beacon data appear on:",
    "choices": [
        "A) the Navigation Display",
        "B) the Primary Flight Display",
        "C) any Multi-Function Display"
    ],
    "correctAnswer": "B",
    "category": "ATA 34"
},
{
    "question": "During a Marker Beacon test the indication on the PFD is:",
    "choices": [
        "A) FT",
        "B) TEST",
        "C) MBT"
    ],
    "correctAnswer": "A",
    "category": "ATA 34"
},
{
    "question": "The Left ATC/mode S transponder uses:",
    "choices": [
        "A) the bottom ATC antenna only",
        "B) the top ATC antenna to transmit and the bottom ATC antenna to receive",
        "C) the 2 antennas at the same time"
    ],
    "correctAnswer": "C",
    "category": "ATA 34"
},
{
    "question": "The DME/ATC/TCAS suppression splitter:",
    "choices": [
        "A) filters background noise from received signals",
        "B) prevents the operation of the receiver circuits during signal transmissions",
        "C) splits the transmitted signal in 2 to share it between 2 antennas"
    ],
    "correctAnswer": "B",
    "category": "ATA 34"
},
	 {
        "question": "Radio Altitude indication becomes blank when the RA is more than:",
        "choices": [
            "A) 500 ft",
            "B) 1500 ft",
            "C) 2500 ft"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The CDU ALTN NAV RADIO Page is available:",
        "choices": [
            "A) when the tuning buses of the AIMS cabinets have failed",
            "B) when the left and right CDU auto-tune functions are failed",
            "C) when the center CDU auto-tune function is failed"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "It isn't possible to data load:",
        "choices": [
            "A) the SAARU",
            "B) an ADM",
            "C) A SADM"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "When only the left Radio Altimeter fails, the left PFD:",
        "choices": [
            "A) Doesn't show Radio Altitude",
            "B) displays the right RA",
            "C) displays the center RA"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The left CDU sends a frequency source select discrete to the left and center MMRs to:",
        "choices": [
            "A) inhibit tests in the air",
            "B) inhibit ILS tuning when the airplane is near landing",
            "C) select the tune input"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "ILS antenna switching occurs:",
        "choices": [
            "A) when the flight crew selects the APP mode on the MCP",
            "B) when the autopilot flight director computers supply a request discrete",
            "C) automatically below 1500 ft RA"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "The Radio Altimeter flag appears:",
        "choices": [
            "A) when the onside RA is failed",
            "B) when the onside and center RAs are failed",
            "C) when the left, center and right RAs are failed"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The Nav Radio page shows ILS frequency and PARK when:",
        "choices": [
            "A) the airplane is at more than 200 Nm from the top of descent",
            "B) as long as the airplane is in the first half of its flight",
            "C) the airplane is at less than 200 Nm from the top of descent"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "When the FMCS has an active flight plan the VOR receiver is tuned by:",
        "choices": [
            "A) the Radio Tuning Panel",
            "B) the center CDU 'Nav Radio' page",
            "C) the left or right AIMS"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The center Multi Mode Receiver (MMR) can get Alternate Tuning data from:",
        "choices": [
            "A) the left CDU",
            "B) the left or right CDU",
            "C) the left or center CDU"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "The center CDU:",
        "choices": [
            "A) has an alternate tune function for the center MMR",
            "B) has an alternate tune function for the right MMR",
            "C) doesn't have an alternate tune function for any MMR"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "To manually tune a VOR receiver you use:",
        "choices": [
            "A) the MFD Comm page",
            "B) the CDU Nav Radio page",
            "C) the Radio Tuning Panel"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "If the left VOR Marker Beacon receiver fails:",
        "choices": [
            "A) The letters FT are displayed on the PFD",
            "B) The AIMS cabinets don't supply marker beacon display data to the PFDs",
            "C) the right VOR Marker Beacon receiver data is used"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "The ILS Antenna switching occurs:",
        "choices": [
            "A) at landing gear extension",
            "B) when AFDCs supply ILS ANT request discretes to control switches position",
            "C) at Localizer or GlideSlope signal capture"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "Each ILS Receiver (MMR) supplies data to:",
        "choices": [
            "A) the Left, Center and Right AFDCs (Autopilot Flight Director Computer)",
            "B) its onside AFDC",
            "C) the Integrated Standby Flight Display (ISFD)"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "To do the ILS test for the integrated standby flight display (ISFD), you test:",
        "choices": [
            "A) the Left Instrument Landing System",
            "B) the Right Instrument Landing System",
            "C) the Center Instrument Landing System"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "Why does the CDU Nav Radio Page allow only one ILS tuning frequency?",
        "choices": [
            "A) because each CDU tunes its onside ILS receiver",
            "B) because the ILS receiver to tune has to be selected first from a RTP",
            "C) because the 3 ILS receivers are tuned to the same frequency"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "To inhibit a tune of the ILS receivers when G/S and LOC are active with the A/P engaged a tune inhibit discrete is sent:",
        "choices": [
            "A) by the onside AFDC",
            "B) by the onside CDU",
            "C) by the onside MMR"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "The AIMS priority selection of ILS display data on the PFD is:",
        "choices": [
            "A) Right, Center, Left for the 2 PFDs",
            "B) Left, Center, Right for the First Officer's PFD",
            "C) Right, Center, Left for the First Officer's PFD"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "If the Left ILS receiver test sequence goes invalid and the LOC and G/S flags do not show on the left EFIS this is:",
        "choices": [
            "A) not normal and you do the test again",
            "B) normal because there are no LOC and G/S flags",
            "C) normal because the AIMS cabinets have changed the source of the ILS data"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The LOC and G/S flags show when:",
        "choices": [
            "A) the onside ILS receiver fails.",
            "B) all three ILS receivers fail.",
            "C) the onside ILS receiver and the GPS fail."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "The GPS can compute:",
        "choices": [
            "A) the attitude",
            "B) the altitude",
            "C) the airspeed"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "To compute the airplane position the GPS receiver:",
        "choices": [
            "A) uses the time it takes for a radio signal to reach a SAT and come back",
            "B) receives the A/C position measured by the satellite",
            "C) uses the time it takes radio signals to go from the satellites to the A/C"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The EGPWS gets ILS deviations from:",
        "choices": [
            "A) the left MMR",
            "B) the left and right MMR simultaneously",
            "C) the left or right MMR depending on the active AFDC"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
{
        "question": "The B777 has:",
        "choices": [
            "A) 1 AOA sensor on the right side of the fuselage",
            "B) 1 AOA sensor on the left side of the fuselage",
            "C) 2 AOA sensors: one on each side of the fuselage"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The ADIRU has:",
        "choices": [
            "A) 4 ring laser gyros",
            "B) 6 ring laser gyros",
            "C) 4 Fiber Optic gyros"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "In the ADIRS there are:",
        "choices": [
            "A) 3 Inertial Reference Units and 3 Air Data Reference Functions",
            "B) 2 Air Data and Inertial Reference Functions",
            "C) 1 ADIRU and 1 SAARU"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The B777 has:",
        "choices": [
            "A) 3 pitot probes",
            "B) 3 pairs of pitot probe",
            "C) 2 pitot probes"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "The SAARU:",
        "choices": [
            "A) is a backup to the ADIRU",
            "B) supplies air data to the Integrated Standby Flight Display",
            "C) isn't powered on ground"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
{
    "question": "When the AIR DATA / ATT switch on the right ISSP is set to ALTN, F/O's EFIS air data comes from:",
    "choices": [
        "A) SAARU single channel (right)",
        "B) ADIRU single channel (left)",
        "C) SAARU Redundancy Management Function"
    ],
    "correctAnswer": "B",
    "category": "ATA 34"
},
    {
        "question": "The communication protocole of the standby Air Data Modules is:",
        "choices": [
            "A) Arinc 429",
            "B) Arinc 618",
            "C) Arinc 629"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "Air from the left air conditioning pack cross manifold creates a venturi effect inside the TAT probe to:",
        "choices": [
            "A) prevent icing of the probe",
            "B) reduce the drag created by the probe",
            "C) provide an accurate temperature measurement when the airplane is at low SPD"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The SAARU sends data to user systems on:",
        "choices": [
            "A) the center flight controls ARINC 629 bus",
            "B) the left and right flight controls ARINC 629 buses",
            "C) the 4 systems ARINC 629 buses"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "Standby Air Data Modules:",
        "choices": [
            "A) aren't interchangeable with an ADMs",
            "B) communicate in ARINC 629",
            "C) communicate in ARINC 717"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "The Air Data Module Power Supply sends power to:",
        "choices": [
            "A) the Air Data Modules",
            "B) the Integrated Standby Flight Display",
            "C) the Standby Air Data Modules"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "Air Data Modules send their data:",
        "choices": [
            "A) on ARINC 429 buses",
            "B) on the flight controls ARINC 629 buses",
            "C) on the systems ARINC 629 buses"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "Air Data Modules are powered by:",
        "choices": [
            "A) the Hot Bat bus",
            "B) their onside Flight Controls ARINC 629 buses",
            "C) their onside FCDC-PSA"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The Integrated Standby Flight Display receives data from:",
        "choices": [
            "A) the SAARU via ARINC 429",
            "B) the Standby Air Data Modules via ARINC 629",
            "C) the Standby Air Data Modules via ARINC 429"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The Integrated Standby Flight Display receives ILS data from:",
        "choices": [
            "A) the left MMR",
            "B) the center MMR",
            "C) the right MMR"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "The magnetic heading displayed on the ISFD comes from:",
        "choices": [
            "A) its internal sensors",
            "B) the left AIMS cabinet",
            "C) the center MMR"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "To test the ADIRU:",
        "choices": [
            "A) there is a CMCF system test in ATA 34",
            "B) put the ADIRU on/off switch to the ON position",
            "C) connect a Test Bench to the ADIRU"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "When the ADIRU has a failure of one gyro there is:",
        "choices": [
            "A) a caution message",
            "B) a status message",
            "C) a maintenance memo"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The SAARU provides:",
        "choices": [
            "A) Air data to the ISFD",
            "B) Attitude to the ISFD",
            "C) backup attitude and air data to the AIMS cabinets"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The SAARU computes the same parameters as the ADIRU except for:",
        "choices": [
            "A) the inertial altitude",
            "B) the airplane position",
            "C) the vertical speed"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "The Integrated Standby Flight Display gets its attitude data from:",
        "choices": [
            "A) its internal sensors",
            "B) the ADIRU",
            "C) the SAARU"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "For Air Data computation the ADIRU uses inputs from:",
        "choices": [
            "A) the Angle Of Attack Sensors",
            "B) the six ring laser gyros",
            "C) the SAARU"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "Standby ADMs are powered by:",
        "choices": [
            "A) the ADM power supply",
            "B) the right Power Supply Assembly",
            "C) the Bat Bus Sec 2"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "It isn't possible to data load:",
        "choices": [
            "A) the SAARU",
            "B) an ADM",
            "C) A SADM"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The ADIRU receives TAT data:",
        "choices": [
            "A) via a SADM",
            "B) via an ADM",
            "C) from the AIMS cabinets"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "Electrical power to the pitot heaters is controlled by:",
        "choices": [
            "A) the ADIRU",
            "B) the SAARU",
            "C) the ADMs"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The signal sent to the ADMs to control Pitot probe heaters comes from:",
        "choices": [
            "A) the SAARU",
            "B) the Air/Ground System",
            "C) the PFCs or the AFDCs"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
{
        "question": "When the ISFD displays \"INIT 90s\":",
        "choices": [
            "A) it is the time to complete the air data sensors calibration",
            "B) it is the time to complete the SAARU initialization",
            "C) it is the time to complete the attitude alignment"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "ADMs control probe heat for:",
        "choices": [
            "A) their onside pitot probe only",
            "B) their onside pitot probe and TAT probe only",
            "C) their onside pitot probe and AOA probe only"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "To supply inertial reference data the ADIRU must have a minimum of:",
        "choices": [
            "A) 3 gyros",
            "B) 2 processors",
            "C) 3 accelerometers"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "The ADIRU can be switched off when:",
        "choices": [
            "A) the computed airspeed (CAS) is less than 30 kts.",
            "B) the engines are shut down and a Pax door is open",
            "C) the calibrated airspeed is less than 60kts"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "When the left and right ADMs are failed:",
        "choices": [
            "A) the EFIS displays single channel air data from the SAARU",
            "B) air data is displayed on the standby instruments",
            "C) air data appears on the CDUs"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "Dashes replace box prompts on the CDU ‘POSITION INIT’ page when:",
        "choices": [
            "A) the ADIRU alignment cannot finish",
            "B) the GPS position is available",
            "C) the ADIRU is in the Navigation Mode"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "If the ADIRU is failed and SAARU backup navigation function goes invalid:",
        "choices": [
            "A) the AFDS TO/GA mode stays engaged",
            "B) the AFDS FPA mode stays engaged",
            "C) Some AFDS modes do not operate"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "How many Fault Containment Areas does the ADIRU have?",
        "choices": [
            "A) 3",
            "B) 5",
            "C) 7"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The TAT probe heater is controlled by:",
        "choices": [
            "A) the center pitot ADM",
            "B) the WOW card",
            "C) the AIMS cabinets"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "The ADIRU drift rate on the inertial monitor page clears:",
        "choices": [
            "A) at the next ground-to-air transition",
            "B) when the airplane is on the ground and the engines are shut down",
            "C) at the next first engine start"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
 {
        "question": "What air pressure(s) used by ADIRU and SAARU to calculate airspeed?",
        "choices": [
            "A) Static air pressure",
            "B) Pitot air pressure",
            "C) Both pitot and static air pressures"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The pitot-static system get static air pressure from",
        "choices": [
            "A) Flush static port on the fuselage",
            "B) Static port on pitot probe",
            "C) Static port on engine cowls"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "How static ADM/SADM connected to the static ports?",
        "choices": [
            "A) Each static ADM/SADM connected to each static port",
            "B) One left port and one right port are connected by tubing and then connects to static ADM/SADM",
            "C) All left ports are grouped and all right ports are grouped connected by tubing and then connects to static ADM/SADM"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "Airspeed and altitude indicated on standby instruments are calculated by",
        "choices": [
            "A) ADIRU",
            "B) SAARU",
            "C) SADMs"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "What statement is not true?",
        "choices": [
            "A) ADM & SADM are interchangeable",
            "B) Pitot ADM & static ADM are interchangeable",
            "C) Pitot SADM & static SADM are interchangeable"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "What is indicated on standby airspeed indicator when aircraft on ground and not moving?",
        "choices": [
            "A) 0 knots",
            "B) 30 knots",
            "C) 50 knots"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "When pitot probe is low power heated?",
        "choices": [
            "A) Airplane is on ground with an engine running",
            "B) Computed airspeed is more than 50 knots",
            "C) Airplane is in the air"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "How the inertial reference data and air data are supplied to user systems?",
        "choices": [
            "A) ADIRU is primary, SAARU is backup",
            "B) SAARU is primary, ADIRU is backup",
            "C) ADIRU and SAARU is selected alternately when flight leg changed"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "When ADIRU loses primary power, the ground crew call horn will come on if",
        "choices": [
            "A) Airplane on ground with battery switch OFF and ADIRU switch ON",
            "B) Airplane on ground with battery switch ON and ADIRU switch ON",
            "C) Airplane on ground with battery switch ON and ADIRU switch OFF"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "From which power supply assembly does SAARU get the power?",
        "choices": [
            "A) Left power supply assembly",
            "B) Center power supply assembly",
            "C) Right power supply assembly"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "If ADIRU failed, how long can the SAARU supply backup navigation function?",
        "choices": [
            "A) 3 minutes",
            "B) 10 minutes",
            "C) 30 minutes"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "TAT probe is heated",
        "choices": [
            "A) When airplane is on the ground",
            "B) When airplane is in the air",
            "C) Only in icing conditions"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "AOA sensor has 2 heaters. Which statement is true?",
        "choices": [
            "A) One heater used in low heating mode, 2 heaters used in high heating mode",
            "B) One heater is used, the other is backup",
            "C) One heater for case heating and one for vane heating"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "What test for ADIRU can you carry out on MAT/PMAT?",
        "choices": [
            "A) System test",
            "B) Operational test",
            "C) No test"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "What will be shown on PFD if RA NCD occurs?",
        "choices": [
            "A) Yellow RA flag",
            "B) Yellow NCD flag",
            "C) RA display goes out of view"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "What time is provided by GPS system?",
        "choices": [
            "A) UTC time",
            "B) Local time",
            "C) Both UTC and local time"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "GPS position is calculated by",
        "choices": [
            "A) GPS receiver",
            "B) Multimode receiver",
            "C) SATCOM receiver"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "To calculate the airplane position, the receiver must know the position of at least how many satellites?",
        "choices": [
            "A) 3 satellites",
            "B) 4 satellites",
            "C) 6 satellites"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "GPS calculates airplane position using",
        "choices": [
            "A) The time required to send a signal to the satellite and receive a reply",
            "B) A distance signal from the satellite and received by the airplane",
            "C) The time required for a signal to travel from the satellite to the airplane"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "Which guidance to the runway is provided by ILS in normal mode?",
        "choices": [
            "A) Vertical guidance",
            "B) Lateral guidance",
            "C) Both are correct"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "What kind of distance is provided by DME?",
        "choices": [
            "A) Vertical distance",
            "B) Horizontal distance",
            "C) Slant range distance"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "DME is operated on the same frequency band with",
        "choices": [
            "A) ATC",
            "B) RA",
            "C) VOR"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "TCAS data can be shown on ND in which EFIS mode?",
        "choices": [
            "A) EXP MAP, EXP VOR, PLN",
            "B) EXP MAP, EXP VOR, EXP APP",
            "C) EXP MAP, EXP VOR, EXP APP, Centered MAP"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "Terrain data can be shown on ND in which EFIS mode?",
        "choices": [
            "A) EXP MAP, EXP VOR, PLN",
            "B) EXP MAP, EXP VOR, EXP AP",
            "C) EXP MAP, EXP VOR, EXP APP, Centered MAP"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "Which switch do you have to push on EFIS control panel to display terrain data on ND?",
        "choices": [
            "A) WXR",
            "B) DATA",
            "C) TERR"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
{
        "question": "Red PULL Up and WINDSHEAR message can be shown on",
        "choices": [
            "A) Upper EICAS display",
            "B) ND display",
            "C) PFD display"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "On weather radar display, which color indicated turbulence?",
        "choices": [
            "A) Yellow",
            "B) Red",
            "C) Magenta"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "Windshear symbols on ND display are",
        "choices": [
            "A) Red and yellow bars",
            "B) Red and black bars",
            "C) Yellow and black bars"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "How to set ATC operating in mode A only?",
        "choices": [
            "A) ATC mode selector is in ALT RPTG OFF",
            "B) ATC mode selector is in XPNDR",
            "C) ATC mode selector is in STBY"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "What information does the TCAS computer get from the ATC transponder?",
        "choices": [
            "A) Identification code",
            "B) 24-bit airplane address",
            "C) Radio altitude"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "TCAS Traffic advisory (TA) indications are shown on",
        "choices": [
            "A) PFD display",
            "B) ND display",
            "C) Both PFD and ND displays"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "TCAS Resolution advisory (RA) indications are shown on",
        "choices": [
            "A) PFD display",
            "B) ND display",
            "C) Both PFD and ND displays"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "TCAS uses whisper-shout technique to interrogate with",
        "choices": [
            "A) ATCRBS transponder",
            "B) Mode S transponder",
            "C) Mode B transponder"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "Which page is used to check the effectivity date of the navigation database?",
        "choices": [
            "A) Ident page",
            "B) Nav data page",
            "C) Maint page"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "The center pitot probe is located on",
        "choices": [
            "A) Left side of aircraft",
            "B) Right side of aircraft",
            "C) Bottom of aircraft"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "How many gyros and accelerometers are installed on ADIRU?",
        "choices": [
            "A) 6 ring laser gyros and 6 accelerometers",
            "B) 1 ring laser gyro and 1 accelerometer",
            "C) 4 ring laser gyros and 4 accelerometers"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "Where is the left GPS antenna located?",
        "choices": [
            "A) On the top of the aircraft",
            "B) On the bottom of the aircraft",
            "C) On the vertical stabilizer"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "How many gyros and accelerometers are installed on SAARU?",
        "choices": [
            "A) 4 fiber optic gyros and 4 accelerometers",
            "B) 6 fiber optic gyros and 6 accelerometers",
            "C) 1 fiber optic gyro and 1 accelerometer"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "How many SADM are installed on B777?",
        "choices": [
            "A) 02",
            "B) 04",
            "C) 06"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "ADM and SADM can be interchangeable?",
        "choices": [
            "A) Yes",
            "B) No",
            "C) Yes, if suitable software is loaded"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "The radio altitude display on the primary flight display (PFD) goes blank when the radio altitude goes above?",
        "choices": [
            "A) 999 ft",
            "B) 1500 ft",
            "C) 2500 ft"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The weather radar panel receives power from the?",
        "choices": [
            "A) P11 circuit breaker panel",
            "B) Weather radar (WXR) antenna assembly",
            "C) Left and right WXR receiver/transmitters (RTs)"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "Which weather radar antenna component requires special alignment procedures and should not be loosened by maintenance technicians?",
        "choices": [
            "A) Antenna drive unit",
            "B) Mount assembly",
            "C) Waveguide switch"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "What happens to the traffic alert and collision avoidance system (TCAS) audio advisories when there is a ground proximity warning system (GPWS) warning or alert?",
        "choices": [
            "A) The TCAS audio advisories stop",
            "B) The TCAS audio advisories mix with the GPWS warning or alert",
            "C) The TCAS audio advisories have priority and the GPWS warning or alert stops"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "What ground proximity warning system (GPWS) time-critical warning messages show on the primary flight display (PFD)?",
        "choices": [
            "A) WINDSHEAR and TERRAIN",
            "B) WINDSHEAR and PULL UP",
            "C) WINDSHEAR, PULL UP and TERRAIN"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "Alert aurals from the ground proximity warning computer go to the aural speakers through?",
        "choices": [
            "A) Audio management unit (AMU)",
            "B) Warning electronic system (WES)",
            "C) Left AIMS cabinet"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "When is the ALTN NAV RADIO page available?",
        "choices": [
            "A) When both the left and right CDUs have failed",
            "B) When the tune inputs from the AIMS cabinets have failed",
            "C) When the onside CDU has failed"
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "Which air data inertial reference system (ADIRS) component controls pitot heat?",
        "choices": [
            "A) The pitot standby air data module (SADM)",
            "B) The static standby air data module (SADM)",
            "C) The pitot air data modules (ADMs)"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "How do you start a test of the ADIRU?",
        "choices": [
            "A) Remove then re-apply power to the ADIRU (power-up test)",
            "B) Go to the ground test menu on the MAT",
            "C) Go to the inertial monitor page of the CDU"
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "The only failure in the air data inertial reference unit (ADIRU) is a single gyro failure. What indications do you get?",
        "choices": [
            "A) A status message",
            "B) A caution message",
            "C) A maintenance memo"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
  {
        "question": "The ground crew call horn has been on for five minutes. There are no equipment cooling problems on the airplane. Where would you go to silence the ground crew call horn?",
        "choices": [
            "A) The flight deck to power down the ADIRU.",
            "B) The main equipment center.",
            "C) The nose wheel well."
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "Which indications do you see on the primary flight display (PFD) when you do a marker beacon test?",
        "choices": [
            "A) The letters MM.",
            "B) The letters IM.",
            "C) The letters FT."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "When both flight management computing functions (FMCFs) fail with the FMC selector in the AUTO position, or the selected FMCF fails, the control display units (CDUs) supply?",
        "choices": [
            "A) Map data only.",
            "B) LNAV commands and map data.",
            "C) Thrust commands and map data."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The secondary attitude air data reference unit (SAARU) provides a back-up navigation function, but it is limited to?",
        "choices": [
            "A) 3 minutes.",
            "B) 5 minutes.",
            "C) 10 minutes."
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "How many fault containment areas (FCA) are in the ADIRU?",
        "choices": [
            "A) 3",
            "B) 5",
            "C) 7"
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The secondary attitude air data reference unit (SAARU) provides?",
        "choices": [
            "A) Air data information to the standby instruments.",
            "B) Heading information to the standby compass.",
            "C) Attitude information to the standby attitude indicator."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The SAARU can provide the same information as the ADIRU, except?",
        "choices": [
            "A) Computed airspeed.",
            "B) Latitude and longitude.",
            "C) Airframe pitch and roll rates."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "If the left radio altimeter fails, the left PFD?",
        "choices": [
            "A) Does not show radio altitude.",
            "B) Shows center radio altitude.",
            "C) Shows right radio altitude after manual switching."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "Where do you go to manually tune the VOR radios?",
        "choices": [
            "A) The VOR control panel.",
            "B) The Radio Management Panel (RMP).",
            "C) The CDU NAV.RADIO page."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "Marker beacon shows information on?",
        "choices": [
            "A) The navigation display.",
            "B) The primary flight display.",
            "C) The EICAS display."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "You turn the weather radar system on and off from the?",
        "choices": [
            "A) Weather control panel.",
            "B) Mode control panel.",
            "C) EFIS control panel."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The Global Positioning System (GPS) calculates airplane position using?",
        "choices": [
            "A) The time required to send a signal to the satellite and receive a reply.",
            "B) A distance signal from the satellite, received by the airplane.",
            "C) The time required for a signal to be sent by the satellite."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "Which navigation display modes will display the weather radar?",
        "choices": [
            "A) Expanded APP, VOR and Map only.",
            "B) Expanded APP, VOR, Map and center Map.",
            "C) Expanded APP, VOR, Map and Plan."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "The Traffic Alert and Collision Avoidance System (TCAS) can track an airplane that?",
        "choices": [
            "A) Does not have a transponder.",
            "B) Has a transponder mode S only.",
            "C) Has a transponder mode A,C."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The predictive windshear function turns on when?",
        "choices": [
            "A) The airplane is on the ground with an engine at take off thrust.",
            "B) When the crew selects this function on the weather control panel.",
            "C) The GPWS (Ground Proximity Warning System) sends a discret to the weather radar."
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "The Secondary Attitude Air Data Reference Unit (SAARU)?",
        "choices": [
            "A) Is the secondary source of inertial navigation and air data for the Primary Flight Display (PFD).",
            "B) Supplies only information for the standby instruments.",
            "C) Is the primary source for air data information."
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "The Weather Radar System shows the weather conditions on the?",
        "choices": [
            "A) Primary Flight Display (PFD).",
            "B) Control Display Unit (CDU).",
            "C) Navigation Display (ND)."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The Ground Proximity Warning System alerts or warns the flight crew?",
        "choices": [
            "A) To possible collision with other airplanes.",
            "B) Of unsafe terrain clearance.",
            "C) In case of Auto Flight Director System default."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "In case of double FMCF failure?",
        "choices": [
            "A) The CDU back-up navigation mode is activated on the MCDU MENU page.",
            "B) Both CDU go into back-up navigation mode and provide the flight plan on the on-side ND.",
            "C) Normally the CDU having the highest priority will provide the flight plan to both NDs."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "To display the FMC COMM page one may use?",
        "choices": [
            "A) The FMC COMM key on the MCDU.",
            "B) The DSP COMM key and then the FMC COMM key that show on the DCMF display by means of the CCD.",
            "C) The FMC COMM key on the INIT/REF INDEX page."
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "With a double FMCF failure?",
        "choices": [
            "A) All autopilot NAV modes are lost, the autopilot will receive orders only from the MCP.",
            "B) Alternate lateral guidance is given to the left CDU if available.",
            "C) Back-up VNAV mode is controlled by left or center or right CDU."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "Testing of CDUs is performed by selection of Ground Test?",
        "choices": [
            "A) ATA 31.",
            "B) ATA 22.",
            "C) ATA 34."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The manual selection of FMCF L or R is done on?",
        "choices": [
            "A) A CDU.",
            "B) The MCP.",
            "C) The F/O display switching panel."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The standby air data modules (SADM) get power from?",
        "choices": [
            "A) Hot battery bus.",
            "B) Center power supply assembly.",
            "C) Standby indicators."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
{
        "question": "The Standby ADMs (Air Data Modules) transmit data on?",
        "choices": [
            "A) Flight control ARINC 629 bus.",
            "B) Arinc 429 bus.",
            "C) Analogue discrete output."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "How many heat levels have pitot probes?",
        "choices": [
            "A) 28 V low power level and 115 V full power level.",
            "B) 115 V low power and 200 V full power level.",
            "C) Only one 115 V power level."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "Air Data Inertial Reference Unit (ADIRU) receive Total Air Temperature (TAT) data?",
        "choices": [
            "A) Directly from a Total Air Temperature (TAT) probe element.",
            "B) From Static Air Data Module (SADM).",
            "C) From AIMS cabinets."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The ADIRU (Air Data Inertial Reference Unit) has these internal components?",
        "choices": [
            "A) Four laser gyros.",
            "B) Six laser gyros.",
            "C) Six fiber optic gyros."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "There are?",
        "choices": [
            "A) Two AOA (Angle Of Attack) sensor (left and right) on both sides of fuselage.",
            "B) Only one AOA (Angle Of Attack) sensor on left side of fuselage.",
            "C) Only one AOA (Angle Of Attack) sensor on the right side of the fuselage."
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "The purpose of the air supply distribution system in the total air temperature (TAT) probe is?",
        "choices": [
            "A) To permits accurate temperature measurement at airplane low speed.",
            "B) To prevent icing condition.",
            "C) To cool the electrical probe heater."
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "On 777-300 ER: The integrated standby flight display receives attitude data from the?",
        "choices": [
            "A) Left AIMS.",
            "B) Pitot standby air data module (SADM).",
            "C) Internal inertial sensors."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The purpose of the Terrain Override Switch is to?",
        "choices": [
            "A) Inhibit terrain alerts.",
            "B) Inhibit below glideslope alert.",
            "C) Override flaps and gear position alerts."
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "For the ADF system, the antennas are?",
        "choices": [
            "A) On the top.",
            "B) On the bottom.",
            "C) One on the top and one of the bottom."
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "Which information is not given by the Global Positioning System?",
        "choices": [
            "A) Altitude.",
            "B) Ground Speed.",
            "C) Attitude."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The traffic Alert and Collision Avoidance System (TCAS) sends aural signal to?",
        "choices": [
            "A) A dedicated speaker.",
            "B) The warning Electronic System.",
            "C) The Flight Interphone System."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "Concerning FMCS messages priorities?",
        "choices": [
            "A) \"Entry error advisory\" message such as \"INVALID ENTRY\" has the highest priority.",
            "B) \"Alert message\" such as \"NO ACTIVE ROUTE\" has the highest priority.",
            "C) There is no type priority, the oldest is the first to show."
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "The purpose of the field \"SET HDG\" in the CDU \"POS INIT\" page 1/3 is to align?",
        "choices": [
            "A) The magnetic compass to the value entered manually on the CDU.",
            "B) The SAARU in case of ADIRU failure.",
            "C) The ADIRU when true north is selected."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "The aircraft position displayed on the navigation display is?",
        "choices": [
            "A) An ADIRU computed position.",
            "B) A GPS computed position.",
            "C) A synthesis position computed by the FM."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The aircraft is equipped with?",
        "choices": [
            "A) 1 FM function.",
            "B) 2 FM functions.",
            "C) 3 FM functions."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "Concerning the FM selector?",
        "choices": [
            "A) It determines only the active FMCF.",
            "B) It determines the active FMCF and TMCF.",
            "C) It determines always the active FMCF; its effect on the TMCF is limited to the tests."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "Both FMCFs and the left CDU have failed, consequently?",
        "choices": [
            "A) Alternate LNAV guidance is no more available.",
            "B) The AFDS selects the center CDU lateral guidance.",
            "C) The AFDS selects the right CDU lateral guidance."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "The left CDU sends a discrete to the left and center MULTI-MODE-RECEIVERS to?",
        "choices": [
            "A) Select the tune input.",
            "B) Inhibit ILS tune input.",
            "C) Inhibit tests in the air."
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "For the switching from capture antenna to the track antenna, the discrete is sent by?",
        "choices": [
            "A) The PSEU (Proximity Sensor Electronic Unit).",
            "B) The AFDC onside.",
            "C) Left or right AIMS when we select approach on the EFIS control panel."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "The NAV RADIO page shows data for ILS systems, this page shows the frequency and PARK, for which condition?",
        "choices": [
            "A) The ILS frequency is not part of the active flight plan.",
            "B) The airplane is more than 200 NM from top of descent.",
            "C) The airplane is less than 200 NM from top of descent."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "Which component does not receive radio altitude data?",
        "choices": [
            "A) Traffic Alert and Collision Avoidance (TCAS) computer.",
            "B) Weather RADAR receiver-transmitter.",
            "C) Flight Management Function (CPM/Basic or ACMF)."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "Certain conditions cause the predictive wind shear (PWS) to turn on automatically. What is this condition?",
        "choices": [
            "A) On the weather radar control we must select \"WXR ON\".",
            "B) The computer airspeed (CAS) greater than 80 knots and in approach mode.",
            "C) The Warning Electronic Unit sends a discrete (60% of N1)."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "With flight plan active, the VOR computer receives tune data from?",
        "choices": [
            "A) Radio tuning panel (RTP).",
            "B) Center CDU through \"NAV RADIO\" page.",
            "C) Left or right AIMS (FMCF)."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
{
        "question": "The SAARU is a backup source of?",
        "choices": [
            "A) Attitude only through the standby attitude indicator.",
            "B) Attitude and navigation data.",
            "C) Attitude and air data."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The Air Data Inertial Reference System (ADIRS) has these components?",
        "choices": [
            "A) One ADIRU, one SAARU.",
            "B) Three ADIRUs, one SAARU.",
            "C) One ADIRU (which has three identical parts inside), one SAARU."
        ],
        "correctAnswer": "A",
        "category": "ATA 34"
    },
    {
        "question": "The pitot system?",
        "choices": [
            "A) Uses pitot probes to sense total and static pressure air.",
            "B) Has three pitot probes.",
            "C) Has four pitot probes (three for left, center, right sides and one for alternate)."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "The SAARU sends inertial reference and air data to user systems through?",
        "choices": [
            "A) Analog discretes.",
            "B) The center flight control ARINC 629 bus.",
            "C) ARINC 429 buses only."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "On B777-200, the Standby attitude indicator receives data from?",
        "choices": [
            "A) The ADIRU (primary source) or SAARU (alternate source).",
            "B) No unit, it calculates the attitude data itself.",
            "C) The SAARU through a 429 ARINC bus."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The Standby Air Data Module (SADM)?",
        "choices": [
            "A) Is interchangeable with an ADM, but it is named so because it is used on the standby circuit.",
            "B) Is software loadable through the flight control buses.",
            "C) Sends ARINC 429 messages only."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "Which unit gives data to the pitot Air Data Module (ADM) to control the pitot heater?",
        "choices": [
            "A) The ADIRU.",
            "B) The Air/Ground System (AGS).",
            "C) The primary Flight Computer (PFC) or the Autopilot/Flight Director Computer (AFDC)."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "On the left instrument source select panel by selecting alternate mode for the AIR DATA/ATT, we are on the captain PFD/ND?",
        "choices": [
            "A) In voted AIR DATA from ADIRU.",
            "B) In single channel AIR DATA (right) from SAARU.",
            "C) In single channel AIR DATA (right) from ADIRU."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "In which case does the SAARU start to calculate backup navigation data independent of the ADIRU?",
        "choices": [
            "A) If we select alternate mode on either instrument source select panel.",
            "B) If one or more inputs from ADIRU are invalid and the TAS (True airspeed) is more than 80 knots.",
            "C) If we are in single AIR DATA mode."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "When the ADIRU fails, which mode will be lost?",
        "choices": [
            "A) Approach mode.",
            "B) Go Around mode.",
            "C) VNAV mode."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
    {
        "question": "The purpose of the flight management computing system is to?",
        "choices": [
            "A) Supply the synoptic pages to the flight crew and to the maintenance crew.",
            "B) Supply flight plan control data and navigation calculations.",
            "C) Control engine thrust in response to mode request from the EEC (Electronic Engine Control)."
        ],
        "correctAnswer": "B",
        "category": "ATA 34"
    },
    {
        "question": "Which modules are not software loadable?",
        "choices": [
            "A) Air data modules (ADM) and standby air data modules (SADM).",
            "B) Air data modules only.",
            "C) Standby air data modules only."
        ],
        "correctAnswer": "C",
        "category": "ATA 34"
    },
 {
        "question": "Where is located the spare lamp box?",
        "choices": [
            "A) In left side of flight deck above coat storage area",
            "B) In right side of flight deck above MAT",
            "C) In main equipment center"
        ],
        "correctAnswer": "A",
        "category": "ATA 33"
    },
    {
        "question": "Captain and first officer instrument and panel lights intensity is controlled by",
        "choices": [
            "A) Brightness control unit",
            "B) Dimmer control unit",
            "C) Light control unit"
        ],
        "correctAnswer": "B",
        "category": "ATA 33"
    },
    {
        "question": "How do you make dome and flood light come fully bright?",
        "choices": [
            "A) Push OVRD switch",
            "B) Push STORM switch",
            "C) Push BRIGHT switch"
        ],
        "correctAnswer": "B",
        "category": "ATA 33"
    },
    {
        "question": "Dome light has 4 modes of operation. Under which mode is light level adjustable?",
        "choices": [
            "A) Normal and backup",
            "B) Backup and standby",
            "C) Standby and storm"
        ],
        "correctAnswer": "A",
        "category": "ATA 33"
    },
    {
        "question": "Which type is annunciator light in cockpit?",
        "choices": [
            "A) Lamp",
            "B) LED",
            "C) LCD"
        ],
        "correctAnswer": "B",
        "category": "ATA 33"
    },
    {
        "question": "Which types of push button switch are used in cockpit?",
        "choices": [
            "A) Momentary action switches",
            "B) Alternate action switches",
            "C) Both momentary and alternate action switches"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "Where is located the floor light control switch in cockpit?",
        "choices": [
            "A) P5 panel",
            "B) P61 panel",
            "C) P8 panel"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "Which position of master dim and test switch is momentary position?",
        "choices": [
            "A) BRT",
            "B) DIM",
            "C) TEST"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "What happens if you hold indicator light switch in test position for more than 10 seconds?",
        "choices": [
            "A) Most indicator lights are off",
            "B) Most indicator lights are dim",
            "C) Most indicator lights are bright"
        ],
        "correctAnswer": "B",
        "category": "ATA 33"
    },
    {
        "question": "Power for indirect ceiling lights and sidewall lights is from",
        "choices": [
            "A) Ground handling bus",
            "B) Ground service bus",
            "C) Standby bus"
        ],
        "correctAnswer": "B",
        "category": "ATA 33"
    },
    {
        "question": "Fasten seatbelt lights are controlled from",
        "choices": [
            "A) CSCP",
            "B) CACP",
            "C) Cockpit"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "Where is located the lavatory call reset switch?",
        "choices": [
            "A) At flight attendant panel",
            "B) Behind mirror inside lavatory",
            "C) Above lavatory door on external wall of lavatory"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "When does lavatory light go to dim mode?",
        "choices": [
            "A) Airplane is on ground and lavatory door is locked",
            "B) Airplane is in the air and lavatory door is locked",
            "C) Airplane is in the air and lavatory door is not locked"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "Where are located the emergency light power supplies?",
        "choices": [
            "A) Behind air grills",
            "B) Beside passenger entry doors",
            "C) Above passenger entry doors"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "What happens if you push emergency light test switch on attendant panel at door 1L?",
        "choices": [
            "A) All interior emergency lights will come on for 1 minute",
            "B) All exterior emergency lights will come on for 1 minute",
            "C) All interior and exterior emergency lights will come on for 1 minute"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "Advisory message EMER LIGHTS is not shown if emergency light switch on P5 panel is set to",
        "choices": [
            "A) ON",
            "B) OFF",
            "C) ARM"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "Which color is navigation light on forward of left wing tip?",
        "choices": [
            "A) Red",
            "B) Green",
            "C) White"
        ],
        "correctAnswer": "A",
        "category": "ATA 33"
    },
    {
        "question": "Which color is strobe anticollision lights?",
        "choices": [
            "A) Red",
            "B) White",
            "C) Green"
        ],
        "correctAnswer": "B",
        "category": "ATA 33"
    },
    {
        "question": "About the dome light, There are?",
        "choices": [
            "A) One lamp in each dome light",
            "B) Two lamps in each dome light",
            "C) Two lamps in CPT dome light and one in F/O"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "In the air, the wheel well lights are?",
        "choices": [
            "A) Always off",
            "B) Always on",
            "C) Depending of the control switch position"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "Which lights or system do you test with the indicator lights (IND LTS) switch on the anti-ice/lighting panel (P5)?",
        "choices": [
            "A) Operation of the engine fire warning lights",
            "B) Operation of the standby lights",
            "C) Operation of the master dim and test system"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "The two mode lights (Bright and Dim) are only for?",
        "choices": [
            "A) The wing landing lights",
            "B) The nose landing lights",
            "C) All landing lights"
        ],
        "correctAnswer": "A",
        "category": "ATA 33"
    },
    {
        "question": "With the Master Bright switch in the \"ON\" position?",
        "choices": [
            "A) You can use any panel control to adjust the amount of light for the related panel",
            "B) You set the lighting level at 20 percent",
            "C) You set the lighting level for all of the integral panel lights at the same time"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "The Master Dim and Test (MD&T) card file are?",
        "choices": [
            "A) In the left and right system card file (LSCF and RSCF)",
            "B) In the main equipment center E1",
            "C) In the coat storage area P29"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "On the B777-300, the ballasts are:",
        "choices": [
            "A) All identical",
            "B) All software loadable",
            "C) Only the indirect and sidewall ballasts are software loadable"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "The emergency lights get power from:",
        "choices": [
            "A) Batteries only",
            "B) Batteries or DC buses",
            "C) Emergency batteries or Main battery"
        ],
        "correctAnswer": "B",
        "category": "ATA 33"
    },
    {
        "question": "The passenger information's lights are controlled by:",
        "choices": [
            "A) Cabin system control panel (CSCP)",
            "B) PA/CI controller or ZMU",
            "C) Cabin system management unit (CSMU) or PA/CI controller"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "On which system do we have a DIM/BRIGHT mode?",
        "choices": [
            "A) The right and left landing lights",
            "B) All landing lights",
            "C) Landing lights and Taxi lights"
        ],
        "correctAnswer": "A",
        "category": "ATA 33"
    },
    {
        "question": "For passenger cabin lights, you get access to the lamps test menu on?",
        "choices": [
            "A) The P5 overhead panel",
            "B) The cabin system control panel (CSCP)",
            "C) The maintenance access terminal (MAT)"
        ],
        "correctAnswer": "B",
        "category": "ATA 33"
    },
    {
        "question": "When you do a test of the emergency lights, the lights stay on?",
        "choices": [
            "A) Until you make them go off",
            "B) For five minutes",
            "C) For 60 seconds"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },
    {
        "question": "Where are the emergency lights test switches?",
        "choices": [
            "A) On the MAT",
            "B) On the P40 and at the door 2L and 4R attendant switch panels",
            "C) On the CSCP (cabin system control panel)"
        ],
        "correctAnswer": "B",
        "category": "ATA 33"
    },
    {
        "question": "A small amount of power goes to the wing landing lights to prevent thermal shock, when?",
        "choices": [
            "A) The airplane is on the ground with nose gear down and locked",
            "B) Nose gear is down and landing light switches are \"OFF\"",
            "C) Nose gear is down and landing light switches are \"ON\""
        ],
        "correctAnswer": "B",
        "category": "ATA 33"
    },
    {
        "question": "There are?",
        "choices": [
            "A) One lamp in each dome light",
            "B) Two lamps in each dome light",
            "C) Two lamps in CPT dome light and one in F/O"
        ],
        "correctAnswer": "C",
        "category": "ATA 33"
    },	
{
        "question": "The flight control ARINC 629 buses have digital interfaces with the airplane systems:",
        "choices": [
            "A) through the left and right AIMS cabinets (data conversion gateway function) and system ARINC 629 buses",
            "B) by direct connections with PSEUs, FSEUs, system card files, WEUs.",
            "C) through EMLS and OPAS"
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "All analog interfaces with the PFCS go to:",
        "choices": [
            "A) the AIMS cabinets",
            "B) the ACE",
            "C) the PCUs"
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
	  {
    "question": "Slats 'Load relief' function is available in:",
    "choices": [
      "A) The Primary mode only.",
      "B) The Secondary Mode only.",
      "C) The Primary and Secondary modes."
    ],
    "correctAnswer": "B",
    "category": "ATA 27"
  },
  {
    "question": "Digital interfaces with the PFCS goes to the:",
    "choices": [
      "A) Backdrive Actuators",
      "B) ACEs",
      "C) PCUs"
    ],
    "correctAnswer": "B",
    "category": "ATA 27"
  },
  {
    "question": "The Aileron PCU anti-cavitation check valves permits to:",
    "choices": [
      "A) Reduces oscillations due to flutter if actuator fails.",
      "B) Measures the pressure difference between both sides of the actuator piston.",
      "C) Rigs the power control unit (PCU) during PCU installation."
    ],
    "correctAnswer": "A",
    "category": "ATA 27"
  },

    {
        "question": "The High Lift Control System (HLCS) controls the operation of the:",
        "choices": [
            "A) Trailing edge flaps, leading edge slats, Krueger flaps",
            "B) Trailing edge flaps, leading edge slats, Krueger flaps, spoilers",
            "C) Trailing edge flaps, leading edge slats, Krueger flaps, spoilers, speed brakes"
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "The High Lift Control System (HLCS) has digital interface with many other airplane systems through:",
        "choices": [
            "A) the flight control ARINC 629 buses",
            "B) the systems ARINC 629 buses",
            "C) the AIMS cabinets"
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "On the MAT you can do:",
        "choices": [
            "A) the operational tests for the HLCS.",
            "B) the system tests for the HLCS.",
            "C) the replacement tests for HLCS"
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "Wheel Force Transducer signals:",
        "choices": [
            "A) are used for the bank angle protection function override",
            "B) represent the control wheel position and its movement.",
            "C) measure autopilot input to detect a failed backdrive actuator."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "The rudder PCU null LVDT:",
        "choices": [
            "A) reduce oscillation as the actuator extends and retracts",
            "B) measures the movement of the actuator as it extends and retracts",
            "C) is used for rigging the rudder PCU"
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "The elevator off-load function",
        "choices": [
            "A) transfers manual and autopilot commanded elevator deflection to the stabilizer",
            "B) is a function of autopilot",
            "C) is used for elevator removal procedure"
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "Which conditions causes the column feel force to increase?",
        "choices": [
            "A) The feel actuator extends as the airspeed increases",
            "B) The feel actuator extends as the airspeed decreases",
            "C) The feel actuator retracts as the airspeed increases"
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "A Flap skew is detected:",
        "choices": [
            "A) only during primary mode flap operation",
            "B) by 16 LVDTs, which send position signals to FSEU",
            "C) by 16 proximity switches, which send position signals to FSEU"
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "Spoilers 4 and 11:",
        "choices": [
            "A) are fly-by-wire in roll control and speedbrake control",
            "B) are mechanically controlled for roll control and are fly-by-wire in speedbrake control",
            "C) are fly-by-wire for roll control and are mechanically controlled in speedbrake control"
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "Aileron lockout function operates",
        "choices": [
            "A) Based on airplane speed and altitude in Normal mode and flap position in Secondary and Direct modes",
            "B) Only when Autopilot engaged",
            "C) Only in Normal mode"
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "Manual bypass valve on spoiler PCU is used for",
        "choices": [
            "A) Moving the spoiler by hand during maintenance without hydraulic pressure",
            "B) Moving the spoiler by hand during maintenance with hydraulic pressure",
            "C) Moving the spoiler if EHSV has failed"
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "Aileron PCU is rigged by using",
        "choices": [
            "A) Null LVDT",
            "B) PCU rod end",
            "C) Position LVDTS"
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "Which spoilers are controlled by cables?",
        "choices": [
            "A) 5 and 10",
            "B) 4 and 11",
            "C) 6 and 9"
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "Which spoilers have lock out function?",
        "choices": [
            "A) 6 and 9",
            "B) 4 and 11",
            "C) 5 and 10"
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "Purpose of the friction brake in Rudder system is to",
        "choices": [
            "A) Move rudder pedal in autopilot",
            "B) Move rudder pedal to neutral position",
            "C) Simulate the resistance of a cable-controlled system"
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "Rudder trim is used to",
        "choices": [
            "A) Trim the rudder",
            "B) Decrease the force on rudder pedal",
            "C) Increase rudder effect"
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "The Manual Trim Cancel switch",
        "choices": [
            "A) Operates only when pilot turn the switch more than 25°",
            "B) Operates only in Direct Mode",
            "C) Is used to remove pilot Rudder Trim command"
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "What is the purpose of Elevator PCU manual test valve?",
        "choices": [
            "A) Release hydraulic lock in PCU",
            "B) Adjust the null LVDT",
            "C) Test PCU compensator/relief valve"
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "What component on the STCM is used to test the hydraulic brake?",
        "choices": [
            "A) Rate control valve",
            "B) Brake bypass valve",
            "C) Motor-operated shutoff valve"
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "Flaps are moved by",
        "choices": [
            "A) Electric in Primary mode",
            "B) Hydraulic in Primary mode",
            "C) Hydraulic in Primary and Secondary modes"
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "When Flap Load Relief occurs",
        "choices": [
            "A) Flaps move to UP position",
            "B) Flap indication on EICAS screen remain unchanged",
            "C) EICAS indications give the position of trailing edge flaps"
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "Purpose of the limit switch on slat PDU is to",
        "choices": [
            "A) Limit slat position in Primary mode",
            "B) Limit slat position in Secondary mode",
            "C) Limit slat position in Alternate mode"
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "No-back brake helps prevent flap retraction if there is a PDU or torque tube failure, what caution do you observe while operating the flap drive system",
        "choices": [
            "A) 12 min operation in Primary mode and 30 min off",
            "B) 30 min operation in Primary mode and 15 min off",
            "C) 15 min operation in Alternate mode and 30 min off"
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "The primary source of electrical power for each Power Supply Assembly (PSA) is:",
        "choices": [
            "A) The left and right 28v dc buses and the captain's flight instrument bus.",
            "B) The permanent magnet generators (PMG) on the left and right engines.",
            "C) The hot battery bus."
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "What is the purpose of the PFC disconnect switch?",
        "choices": [
            "A) It is for ground maintenance to do system tests on the primary flight control system (PFCS).",
            "B) It permits the pilot to select the direct mode of primary flight control system (PFCS) operation.",
            "C) It permits the pilot to disconnect the autopilot."
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "The primary flight control system (PFCS) switches from normal mode of operation to secondary mode when:",
        "choices": [
            "A) The pilots move the PFC disconnect switch to the DISC position.",
            "B) The autopilot disengages.",
            "C) It loses important air and attitude sensor data from both the ADIRU and the SAARU."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "The aileron trim switches:",
        "choices": [
            "A) Send electrical signals to the ACEs (Actuator Control Electronics).",
            "B) Are on the P5 panel.",
            "C) Send electrical signals directly to the aileron trim actuator."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "The aileron lockout function operates:",
        "choices": [
            "A) At cruise speed in normal mode and is based on the flaps position in secondary and direct mode.",
            "B) When the aileron power control unit (PCU) has a failure in any mode of the primary flight control system (PFCS).",
            "C) Only when the autopilot is disengaged."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "What is the function of the wheel force transducer?",
        "choices": [
            "A) It measures pilot manual input and sends a signal to the PFC for the wheel rudder cross-tie function.",
            "B) It measures autopilot input to detect a failed backdrive actuator.",
            "C) It measures pilot manual input and sends a signal to the PFCs to allow pilot override of the bank angle protection function."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "Spoiler panels 4 and 11:",
        "choices": [
            "A) Operate electrically for roll and speedbrake control.",
            "B) Operate mechanically for roll and electrically for speedbrake control.",
            "C) Operate mechanically for roll and speedbrake control."
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "Spoiler mixing function is done in the PFCs to:",
        "choices": [
            "A) Combine the roll and speedbrake commands into one mixed command for each PCU.",
            "B) Make sure the spoiler, flaperon, and aileron commands are coordinated.",
            "C) Combine the speedbrake and flaperon commands to control drag."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "The spoiler PCU is rigged on the airplane:",
        "choices": [
            "A) By adjustment of the null LVDT on the PCU.",
            "B) By adjustment of the actuator position LVDT on the PCU.",
            "C) By mechanical adjustment of the PCU rod end."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "The purpose of the friction brake in the rudder mechanism is to:",
        "choices": [
            "A) Stop a runaway rudder.",
            "B) Simulate the feel of a cable system.",
            "C) Return the rudder pedals to the center position."
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "The rudder power control unit (PCU) null LVDT:",
        "choices": [
            "A) Reduces oscillations as the actuator extends and retracts.",
            "B) Measures the pressure difference between both sides of the actuator piston.",
            "C) Rigs the power control unit (PCU) during PCU installation."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "The purpose of the rudder tab is to:",
        "choices": [
            "A) Increase the aerodynamic effect of the rudder",
            "B) Aerodynamically assist in the movement of the rudder panel",
            "C) Trim the rudder panel"
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "The purpose of the elevator is to supply:",
        "choices": [
            "A) Long term correction of the pitch attitude of the aircraft.",
            "B) Roll control of the aircraft.",
            "C) Short term correction of the pitch attitude of the aircraft."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "The elevator offload function:",
        "choices": [
            "A) Transfers stabilizer movement to the elevator.",
            "B) Refers to the elevator PCU removal procedure.",
            "C) Commands the stabilizer to move when the elevator is not at the neutral position."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "Which of these conditions causes an increase in control column feel force:",
        "choices": [
            "A) Feel actuator extension as a result of airspeed increase.",
            "B) Feel actuator retraction as a result of airspeed increase.",
            "C) Feel actuator retraction as a result of airspeed decrease."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "The purpose of the horizontal stabilizer is to supply:",
        "choices": [
            "A) Long term correction of the pitch attitude of the aircraft.",
            "B) Roll control of the aircraft.",
            "C) Short term yaw control of the aircraft."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "How many PDU (Power Drive Unit) are there on the leading edge slat system?",
        "choices": [
            "A) 2",
            "B) 1",
            "C) 4"
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "The alternate pitch trim levers:",
        "choices": [
            "A) Move cable pairs, rods and levers to mechanically command the stabilizer trim control modules (STCMs).",
            "B) Can operate the stabilizer only in the direct mode.",
            "C) Move switches that send electrical signal directly to the STCM solenoids."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "To verify the efficiency of the stabilizer hydraulic brakes:",
        "choices": [
            "A) Maintenance personnel uses the MAT to do a ground test.",
            "B) Maintenance personnel operates a brake bypass valve on the Stab Trim Control Module.",
            "C) Maintenance personnel uses a torque wrench."
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "When you select the 'High Lift System secondary mode inhibit override' on the MAT:",
        "choices": [
            "A) You have 15 seconds to move the flap lever on the control stand.",
            "B) Hydraulic power is necessary to move the flaps and slats.",
            "C) The alternate flap/slat indication display shows."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "When you move the flap lever from 'UP' to '1' position in the primary modes:",
        "choices": [
            "A) Only the slats extend.",
            "B) Only the flaps extend.",
            "C) Both the flaps and slats extend."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "In the High Lift Control System, the secondary mode auto test:",
        "choices": [
            "A) Does a test of the secondary mode operation of the slats only.",
            "B) Must be selected on the MAT.",
            "C) Energizes the flap and slat electric motors for approximately two seconds."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "Which statement about the FSEUs is true?",
        "choices": [
            "A) Both FSEUs send commands to the primary control valves at the same time.",
            "B) Both channels in the FSEU must agree before the FSEU sends a command.",
            "C) FSEU 1 is always in control and FSEU 2 is always in standby."
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "Slat load relief function is available in:",
        "choices": [
            "A) The primary mode only.",
            "B) The secondary mode only.",
            "C) The primary and secondary modes."
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "On the leading edge slat system, the no-back brake offset gearbox:",
        "choices": [
            "A) Reduces the speed of slat movement when the slats approach the commanded position.",
            "B) Drives a ballscrew type of transmission.",
            "C) Prevents slat retraction if the PDU fail."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "About the Primary Flight Control System (PFCS) and the High Lift Control System (HLCS):",
        "choices": [
            "A) PFCS is electrically controlled and HLCS is mechanically controlled",
            "B) PFCS and HLCS are electrically controlled.",
            "C) PFCS is mechanically controlled and HLCS is electrically controlled."
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "Which of these flight control surfaces droop when the trailing edge flaps extend?",
        "choices": [
            "A) Flaperons only.",
            "B) Flaperons and elevators.",
            "C) Ailerons and flaperons."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "Auto speedbrake function is available for:",
        "choices": [
            "A) Approach and Landing.",
            "B) Rejected Takeoff and Landing.",
            "C) Rejected Takeoff, Approach and Landing."
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "Which statement is true about Flap Load Relief function?",
        "choices": [
            "A) Flap Load Relief operates if flap airspeed limits are exceeded only with the flap lever in the 25 to 30 position.",
            "B) Flap Load Relief operates if flap airspeed limits are exceeded with the flap lever in the 15 to 30 position.",
            "C) There is no indication in the Flight Deck when Flap Load Relief is occurring."
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "The Aileron High Speed Droop function is available:",
        "choices": [
            "A) On the B777-200 and B777-300.",
            "B) When trailing edge flaps are not retracted.",
            "C) When the ailerons are locked out."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "On B777-300, if the squib has fired on the Spoiler Auxiliary Retract Device (SARD):",
        "choices": [
            "A) An indication light goes ON on the P61 panel.",
            "B) There is no indication, only a load humming sound.",
            "C) A red plunger extends on the bottom of the cartridge."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "The alternate pitch trim levers control the stabilizer:",
        "choices": [
            "A) When the stabilizer hydraulic system is depressurized.",
            "B) Only when the PFCS is in the Direct mode.",
            "C) Directly and at all times."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "The rudder surface is maneuvered by:",
        "choices": [
            "A) One Power Control Unit.",
            "B) Two Power Control Units.",
            "C) Three Power Control Units."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "Aileron PCU mode of operation are:",
        "choices": [
            "A) Normal and Bypass.",
            "B) Normal, Bypass and Blocking/Damped.",
            "C) Normal, Blocking and Direct."
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "To extend a spoiler PCU for maintenance, when hydraulic systems are depressurized:",
        "choices": [
            "A) It's not possible. Hydraulic pressure is necessary.",
            "B) Use the manual bypass on the PCU.",
            "C) Use the electrical secondary mode."
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "To maneuver the stabilizer with hydraulic power:",
        "choices": [
            "A) Center or right hydraulic system must be pressurized.",
            "B) All hydraulic system must be pressurized.",
            "C) Left and right hydraulic system must be pressurized."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "When the flap hydraulic motor is inoperative:",
        "choices": [
            "A) Flap system operates with an electric motor.",
            "B) Flap system is inoperative.",
            "C) Flap system is maneuvered by the slat hydraulic motor."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "If one hydraulic system fails:",
        "choices": [
            "A) Only the Roll and Pitch axes are available.",
            "B) All three axes are available with some spoilers.",
            "C) The Roll, Pitch and Yaw axes are available with spoilers."
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "With only the electrical Hot Bat Bus available:",
        "choices": [
            "A) Only the Yaw and Roll control stay available.",
            "B) Only the left Primary Flight Computer receives electrical power.",
            "C) Yaw, Roll and Pitch control are still available."
        ],
        "correctAnswer": "C",
        "category": "ATA 27"
    },
    {
        "question": "The STCM's (Stabilizer Trim Control Module) are located:",
        "choices": [
            "A) In the stabilizer compartment.",
            "B) In the Main Equipment Center.",
            "C) In each main gear wheel well."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "In normal mode, the aileron lockout logic is based on:",
        "choices": [
            "A) Airspeed and Altitude.",
            "B) Airspeed with flaps and slats retracted.",
            "C) Flaps and slats position and landing gear lever position."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "Trailing edge flap position sensors are located:",
        "choices": [
            "A) In the flap forward fairings.",
            "B) In the left and right main gear wheel wells.",
            "C) At the outboard ends of the flap torque tubes."
        ],
        "correctAnswer": "B",
        "category": "ATA 27"
    },
    {
        "question": "In normal mode, the rudder ratio changer schedule is based on:",
        "choices": [
            "A) Rudder pedal position and calibrated airspeed.",
            "B) Altitude and flap position.",
            "C) Rudder trim position and angle of attack."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "In alternate mode, the extended slat limit is:",
        "choices": [
            "A) Sealed position.",
            "B) Slat system is disabled.",
            "C) Only flap system stays available."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
    {
        "question": "The leading edge slat system is driven by:",
        "choices": [
            "A) A single PDU (powered drive unit) for both wings.",
            "B) Two PDU (one per wing).",
            "C) Four PDU (Two per wing)."
        ],
        "correctAnswer": "A",
        "category": "ATA 27"
    },
{
    "question": "The APU is driven and controlled by:",
    "choices": [
      "A) The APUC",
      "B) The AIMS",
      "C) The system card file"
    ],
    "correctAnswer": "A",
    "category": "ATA 49"
  },
  {
    "question": "APUC is located:",
    "choices": [
      "A) Below the aft galleys in the rack E.17",
      "B) Above the aft galleys in the rack E.7",
      "C) In the main equipment center"
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "To start the APU, the minimum quantity of fuel is:",
    "choices": [
      "A) 230 KGS",
      "B) 330 KGS",
      "C) 430 KGS"
    ],
    "correctAnswer": "C",
    "category": "ATA 49"
  },
  {
    "question": "APU overspeed (auto shutdown) is:",
    "choices": [
      "A) 105%",
      "B) 106%",
      "C) 107%"
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "Which system controls the APU door?",
    "choices": [
      "A) ELMS",
      "B) APUC",
      "C) AIMS"
    ],
    "correctAnswer": "A",
    "category": "ATA 49"
  },
  {
    "question": "APU door actuator is powered by:",
    "choices": [
      "A) Hot batt bus",
      "B) Batt bus sec 2",
      "C) Transfer bus 2"
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "APU can be started:",
    "choices": [
      "A) Below 22,000 fts",
      "B) Only on ground",
      "C) At any altitude"
    ],
    "correctAnswer": "C",
    "category": "ATA 49"
  },
  {
    "question": "Above altitude of 22,000 fts, APU can provide:",
    "choices": [
      "A) Both (electrical power + pneumatic power)",
      "B) Only electrical power (120 KVA)",
      "C) Only pneumatic power"
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "The APUC will not start the APU if the oil tank is almost empty...",
    "choices": [
      "A) Vrai",
      "B) Faux"
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "How many clusters are installed on the APU?",
    "choices": [
      "A) 2 (fuel + lube)",
      "B) 3 (fuel + lube + pneumatic)",
      "C) 4 (fuel + lube + ignition + pneumatic)"
    ],
    "correctAnswer": "C",
    "category": "ATA 49"
  },
  {
    "question": "To monitor the APU speed, the APUC uses by default:",
    "choices": [
      "A) Sensor 1 and sensor 2 in backup",
      "B) The average of the two sensors",
      "C) The highest sensor value"
    ],
    "correctAnswer": "C",
    "category": "ATA 49"
  },
  {
    "question": "In case of high EGT, in attended mode, the APUC will:",
    "choices": [
      "A) Shutdown the APU",
      "B) Display a caution message 'APU limit'",
      "C) Display an 'APU fire' warning message"
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "APU air inlet door's position can be checked:",
    "choices": [
      "A) On the APU synoptic page",
      "B) Only from outside by checking the door physically",
      "C) On the APU maintenance pages"
    ],
    "correctAnswer": "C",
    "category": "ATA 49"
  },
  {
    "question": "Tell-tale drains can help to detect leaks on:",
    "choices": [
      "A) The eductor/tailpipe fuel drain",
      "B) IGV actuator seal drain",
      "C) Combustion chamber fuel drain"
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "In case of failure, it is recommended to replace the APUC and the DMM together at the same time...",
    "choices": [
      "A) Vrai",
      "B) Faux"
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "How many chip detectors are installed on the APU?",
    "choices": [
      "A) 3",
      "B) 4",
      "C) 5"
    ],
    "correctAnswer": "C",
    "category": "ATA 49"
  },
  {
    "question": "When the APU is operating, the airplane pneumatic ducts are fed by:",
    "choices": [
      "A) The load compressor",
      "B) The centrifugal compressors",
      "C) The turbine stages"
    ],
    "correctAnswer": "A",
    "category": "ATA 49"
  },
  {
    "question": "To crank the APU for borescope inspection, you have to connect the wrench on:",
    "choices": [
      "A) The pneumatic starter",
      "B) The electrical starter",
      "C) On the accessory gearbox pad"
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "APU has:",
    "choices": [
      "A) Two load compressor and one stage of centrifugal compressor",
      "B) One load compressor and two stages of centrifugal compressor",
      "C) One load compressor and one stage of centrifugal compressor"
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "IGV(s) control the air flow to the:",
    "choices": [
      "A) Load compressor",
      "B) The two-stages of centrifugal compressor",
      "C) The APU discharge system via the surge control valve"
    ],
    "correctAnswer": "A",
    "category": "ATA 49"
  },
 {
    "question": "APU system data can be checked on:",
    "choices": [
      "A) The status page only.",
      "B) The status page, the APU synoptic page, and the APU maintenance page.",
      "C) The status page and the APU maintenance page."
    ],
    "correctAnswer": "C",
    "category": "ATA 49"
  },
  {
    "question": "If the APU is getting old and the EGT must be limited in order to avoid a fire, the APUC will:",
    "choices": [
      "A) Limit the electrical power supply.",
      "B) Limit the pneumatic power supply.",
      "C) Limit both power supplies."
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "If the surge control valve is fully open, it's because the APU bleed air valve is:",
    "choices": [
      "A) Regulating.",
      "B) Open.",
      "C) Closed."
    ],
    "correctAnswer": "C",
    "category": "ATA 49"
  },
  {
    "question": "During normal shutdown, it's possible to restart the APU (accelerate and return to 100%) if:",
    "choices": [
      "A) APU speed is less than 70%.",
      "B) If shutdown period is less than 105 seconds.",
      "C) APU speed is more than 15%."
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "The 'APU remote shutdown' status message means:",
    "choices": [
      "A) APU has stopped normally.",
      "B) APU has been stopped in emergency from the P40 panel.",
      "C) APU has been stopped in emergency by the APU fire switch on the P5 panel."
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "Which starter is considered as the primary one?",
    "choices": [
      "A) The air starter.",
      "B) The electrical starter.",
      "C) There is no priority."
    ],
    "correctAnswer": "A",
    "category": "ATA 49"
  },
  {
    "question": "During starting sequence the air turbine starter valve closes when:",
    "choices": [
      "A) APU speed is more than 49%.",
      "B) APU speed is more than 55%.",
      "C) APU speed is more than 95%."
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "The secondary nozzles are supplied by fuel when:",
    "choices": [
      "A) The APU speed is less than 50% RPM.",
      "B) The APU speed is more than 50% RPM.",
      "C) For quick starting during flight."
    ],
    "correctAnswer": "B",
    "category": "ATA 49"
  },
  {
    "question": "Electrical power and pneumatic power are available from the APU when the APU speed is:",
    "choices": [
      "A) More than 95%.",
      "B) 100%.",
      "C) More than 7%."
    ],
    "correctAnswer": "A",
    "category": "ATA 49"
  },	
 {
        "question": "Where is APUC located?",
        "choices": [
            "A) In aft cargo compartment",
            "B) In main equipment center",
            "C) In ceiling of aft galley"
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "Where is located the APU data memory module?",
        "choices": [
            "A) Next to APUC",
            "B) In main equipment center",
            "C) On APU"
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "The APU inlet door is located at:",
        "choices": [
            "A) Upper right side of tail cone",
            "B) Upper left side of tail cone",
            "C) Bottom of tail cone"
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "When is APU OIL QTY status message shown?",
        "choices": [
            "A) APU oil quantity is 3.8Q or less",
            "B) Oil quantity/ sump temperature sensor failed",
            "C) Both are correct"
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "How do you know if electric starter brush is worn to limit?",
        "choices": [
            "A) Brush wear indicator on starter shows yellow",
            "B) Brush wear indicator on starter shows red",
            "C) Brush wear sensor sends signal to APUC to give message"
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "What condition caused APU autostart in the air?",
        "choices": [
            "A) L and R transfer buses loss power",
            "B) L and R main buses loss power",
            "C) L and R DC bus loss power"
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "How do you shut down an APU after autostart?",
        "choices": [
            "A) Move APU selector to START and then back to OFF",
            "B) Move APU selector to ON and then back to OFF",
            "C) Move APU selector to START and then back to ON"
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "What will APU do if overload condition occurs?",
        "choices": [
            "A) Increase fuel flow",
            "B) Shutdown APU",
            "C) Close IGV to give priority to electrical power generation"
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "During APU start, the surge control valve is positioned to:",
        "choices": [
            "A) Full close",
            "B) Full open",
            "C) Intermediate position"
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "How many EGT thermocouples are installed on APU?",
        "choices": [
            "A) 2",
            "B) 4",
            "C) 6"
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "To do APU pneumatic start what is the position of APU bleed switch?",
        "choices": [
            "A) Auto",
            "B) Off",
            "C) Out"
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "Which is normal APU shutdown?",
        "choices": [
            "A) Shut down using APU switch on P5 panel",
            "B) Shut down using APU shutdown switch on P40 panel",
            "C) Shut down using APU fire handle on P5 panel"
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "How to reset APU control system after APU is shut down from P40 panel?",
        "choices": [
            "A) Reset battery switch",
            "B) Do Fire/OVHT test",
            "C) Turn APU selector switch to OFF and back to ON"
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "APU LIMIT caution message displayed means:",
        "choices": [
            "A) APU is operating for long time already and you should turn off APU",
            "B) Low oil pressure or high EGT or high oil temperature",
            "C) APU cycles exceeds overhaul limit"
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "APU can supply pneumatic:",
        "choices": [
            "A) At any altitude",
            "B) At flight level below 22000ft",
            "C) Only on ground"
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "When can you use Air turbine starter to start the APU?",
        "choices": [
            "A) Only on ground",
            "B) Only in the air",
            "C) On ground and in the air"
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "APU can supply electrical power 120 KVA:",
        "choices": [
            "A) At any altitude",
            "B) At flight level below 22000ft",
            "C) Only on ground"
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "You use APU maintenance switch on P61 to:",
        "choices": [
            "A) Supply electric power to APUC when APU is off",
            "B) Reset APU",
            "C) Start APU by electric motor"
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "After shutdown APU using APU shutdown switch on P40, to reset the system you must:",
        "choices": [
            "A) Cycle main battery switch",
            "B) Cycle APU maintenance switch on P61",
            "C) Do the fire test"
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "If you want to start APU after a protective shutdown, you must:",
        "choices": [
            "A) Replace APUC",
            "B) Move APU start selector to OFF",
            "C) Reset APU maintenance switch on P61"
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "Air starter will start the APU when",
        "choices": [
            "A) Electric starter fails",
            "B) Airplane is in the air",
            "C) Pneumatic pressure is available"
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "APU oil is cooled by",
        "choices": [
            "A) Turbine air",
            "B) Air in APU compartment thru air/oil heat exchanger",
            "C) Fuel"
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "APU is protected against surge by",
        "choices": [
            "A) Releasing Load Compressor air thru Surge Control Valve to APU exhaust",
            "B) ELMS",
            "C) Surge valve when airplane is in the air"
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "Before starting the APU, you should confirm which of the following conditions?",
        "choices": [
            "A) Fuel in the left main tank is more than 300kg",
            "B) BAT switch in the OFF position",
            "C) Fuel in the left main tank is at least 430kg and BAT switch ON"
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "APU cool down time after APU switch is selected to OFF is",
        "choices": [
            "A) 200 sec",
            "B) 105 sec",
            "C) 150 sec"
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "Purpose of APU oil heater system?",
        "choices": [
            "A) To heat oil before entering the gearbox",
            "B) To heat up oil for APU shutdown",
            "C) To decrease bearing oil drag on start"
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "When does APU oil heater system operate?",
        "choices": [
            "A) Airplane in the air",
            "B) Ground service bus has power",
            "C) Outside temperature less than 100°C"
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "APU oil heater system consists of",
        "choices": [
            "A) 3 heater pads for gearbox and 1 heater probe for midframe bearing",
            "B) 1 heater probe for gearbox controlled by APUC",
            "C) 3 heater pads for gearbox controlled by ELMS"
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "Data from fuel temperature sensor installed on the APU fuel cluster is sent to APUC",
        "choices": [
            "A) To correct fuel viscosity changes during APU start and operation",
            "B) To give temperature indication on MAT",
            "C) To monitor the correct operation of the IGV and SCV actuator"
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "The thermostatic bypass valve on the APU lube cluster",
        "choices": [
            "A) Controls the oil flow to the bearings",
            "B) Controls the oil flow to the oil heater",
            "C) Controls the oil flow to the oil cooler"
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "APU is mounted to the airplane tail section by",
        "choices": [
            "A) 4 mounts",
            "B) 2 mounts with vibration isolators",
            "C) 3 mounts with vibration isolators"
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "The tell-tale drains help find",
        "choices": [
            "A) Oil seal failure",
            "B) Fuel seal failure",
            "C) Oil component that has a leak"
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "What part of the APU supplies pneumatic power to the airplane systems?",
        "choices": [
            "A) The second stage power section compressor.",
            "B) The third stage power section compressor.",
            "C) The load compressor driven by the APU main shaft."
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "You use the APU maintenance switch on the P61 panel to:",
        "choices": [
            "A) Reset the APU after an auto-shutdown.",
            "B) Power the APU controller, open the APU fuel valve, open the APU air inlet door and turn on the APU DC fuel pump.",
            "C) Power the APU controller to show the APU data on the MFD."
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "The APU oil heater system turns on when?",
        "choices": [
            "A) You start the APU.",
            "B) The airplane goes in the air mode.",
            "C) There is electrical power on the ground service bus."
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "The APU oil system is cooled by:",
        "choices": [
            "A) An eductor cooling system that draws air through an oil cooler.",
            "B) An electric fan that blows air through an oil cooler.",
            "C) A fuel/oil heat exchanger located on the left side of the APU turbine case."
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "The inlet guide vane (IGV) actuator is controlled by the:",
        "choices": [
            "A) Auxiliary Power Unit Controller (APUC).",
            "B) Fuel control torque motor.",
            "C) Surge control valve."
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "Automatic protective shutdowns are initiated by:",
        "choices": [
            "A) The flight crew.",
            "B) The auxiliary power unit controller (APUC).",
            "C) The on-board maintenance system (OMS)."
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "The main components of the APU are:",
        "choices": [
            "A) Two shafts, for speed regulation.",
            "B) One shaft, two compressors, one turbine.",
            "C) Two shafts, two compressors, two turbines."
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "The APU Controller is in 'Unattended mode' when:",
        "choices": [
            "A) Engines are not running and airplane is on the ground.",
            "B) At least one engine is running.",
            "C) Engines are running and airplane is in flight."
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "The EICAS message 'APU LIMIT' is:",
        "choices": [
            "A) A Warning message.",
            "B) A Status message.",
            "C) A Caution message."
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "To control APU acceleration during start, APU Controller uses:",
        "choices": [
            "A) The fuel metering valve.",
            "B) The surge control valve.",
            "C) The inlet guide vanes."
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "If the APU has a low oil pressure condition during operation in the 'attended mode':",
        "choices": [
            "A) The APU shuts down, Fault light illuminates on the P5 panel.",
            "B) The APU runs normally, no message is displayed.",
            "C) The APU runs normally, the message 'APU LIMIT' is displayed."
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "When the APU bleed shutoff valve is closed:",
        "choices": [
            "A) The surge control valve is fully open.",
            "B) The surge control valve is fully closed.",
            "C) The position of the surge control valve depends only on the electrical load."
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "During an APU start, the air turbine starter control valve closes at:",
        "choices": [
            "A) 55% RPM.",
            "B) 100% RPM.",
            "C) 7% RPM."
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "On this APU, an overspeed shutdown is initiated at:",
        "choices": [
            "A) 101% RPM.",
            "B) 112% RPM.",
            "C) 106% RPM."
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "At 7% APU RPM:",
        "choices": [
            "A) The fuel solenoid, ignition unit, and start relay are turned on.",
            "B) The fuel solenoid and ignition unit are turned on.",
            "C) The APU inlet door is commanded on."
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "The APU door actuator is energized by:",
        "choices": [
            "A) The auxiliary power unit controller (APUC).",
            "B) The air supply and cabin pressure controller (ASCPC).",
            "C) The electrical load management system (ELMS)."
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "You can check the APU system datas through:",
        "choices": [
            "A) The maintenance access terminal (MAT).",
            "B) The air supply and cabin pressure controller (ASCPC).",
            "C) The APU maintenance page or the status page."
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "If oil quantity drops below the allowed limit:",
        "choices": [
            "A) The EICAS status message 'APU OIL QUANTITY' is displayed.",
            "B) The EICAS status message 'APU LIMIT' is displayed.",
            "C) The EICAS status message 'APU' is displayed."
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "The 'APU LIMIT' message is displayed when:",
        "choices": [
            "A) The APU is out of fuel.",
            "B) An APU limit has been exceeded.",
            "C) A heavy APU pneumatic load occurs."
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "If the APU is in attended mode, what fault causes an immediate automatic shutdown?",
        "choices": [
            "A) APU controller failure.",
            "B) High EGT.",
            "C) Low oil pressure."
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "The APU fuel consumption is approximately:",
        "choices": [
            "A) 3000 kgs per hour.",
            "B) 300 kgs per hour.",
            "C) 30 kgs per hour."
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "The APU is located in:",
        "choices": [
            "A) The tailcone.",
            "B) The left main landing gear compartment.",
            "C) The bulk cargo compartment."
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "The purpose of the APU is:",
        "choices": [
            "A) Supply electric and pneumatic power to the airplane.",
            "B) Supply electric power to the airplane only.",
            "C) Supply an additional take off power to the airplane."
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "It is still possible to start APU if:",
        "choices": [
            "A) The main battery is removed.",
            "B) The APU air inlet door is closed.",
            "C) The APU oil tank is empty."
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "The parameter monitored on EICAS varying with the load of the APU is:",
        "choices": [
            "A) APU RPM.",
            "B) APU EGT.",
            "C) APU oil pressure."
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "An APU start is possible with:",
        "choices": [
            "A) Airplane on ground only.",
            "B) Airplane on ground, or in flight in autostart mode only.",
            "C) Airplane on ground or in flight."
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "The APU Controller is located:",
        "choices": [
            "A) In the E7 rack, above the aft cabine ceiling.",
            "B) In the E1 rack, in the main equipment center.",
            "C) In the E10 rack, in the bulk cargo compartment."
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "During takeoff with the APU ON:",
        "choices": [
            "A) The inlet door stays fully open.",
            "B) The inlet door goes to fully open position.",
            "C) The inlet door closes from 45° open to 15° open."
        ],
        "correctAnswer": "A",
        "category": "ATA 49"
    },
    {
        "question": "APU pneumatic source is available:",
        "choices": [
            "A) On ground only.",
            "B) At any altitude.",
            "C) Up to an altitude of 22,000 feet."
        ],
        "correctAnswer": "C",
        "category": "ATA 49"
    },
    {
        "question": "The APU will start automatically if:",
        "choices": [
            "A) Airplane in flight and one engine shuts down.",
            "B) Airplane in flight and both transfer buses are lost.",
            "C) Airplane in flight and the two engine PRSOV are closed."
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "The Data Memory Module (DMM):",
        "choices": [
            "A) Is the back up of the APU Controller (APUC).",
            "B) Keeps APU data in non-volatile memory.",
            "C) Controls the APU functions alternatively with the APU Controller."
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
    {
        "question": "To get a 400 hertz APU generator output frequency:",
        "choices": [
            "A) AC generation use an APU generator converter.",
            "B) The APU must operate at a constant speed.",
            "C) The APU electrical power is supplied by an Integrated Drive Generator (IDG)."
        ],
        "correctAnswer": "B",
        "category": "ATA 49"
    },
{
        "question": "How many potable water tanks are installed on B777?",
        "choices": [
            "A) One",
            "B) Two",
            "C) Three"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
    {
        "question": "Where can you check the water level remained in the tanks?",
        "choices": [
            "A) CSCP at door 1L",
            "B) CACP at door 2L",
            "C) CACP at door 4L"
        ],
        "correctAnswer": "A",
        "category": "ATA 38"
    },
    {
        "question": "Where can you fill the water tanks?",
        "choices": [
            "A) At aft potable water service panel",
            "B) At mid potable water service panel",
            "C) At forward potable water service panel"
        ],
        "correctAnswer": "A",
        "category": "ATA 38"
    },
    {
        "question": "Lavatory water heater is located:",
        "choices": [
            "A) Next to water tank",
            "B) Below sink",
            "C) Behind mirror"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "Where can you find water isolation/drain valve handle?",
        "choices": [
            "A) Above door 1L",
            "B) Above door 2L",
            "C) Above door 4L"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "Water tank quantity transmitters send signal:",
        "choices": [
            "A) Direct to water gage",
            "B) Direct to CSS panel",
            "C) To summary unit"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
    {
        "question": "Where can you find the water quantity gage?",
        "choices": [
            "A) At aft potable water service panel",
            "B) At forward potable water service panel",
            "C) At cabin service system panel"
        ],
        "correctAnswer": "A",
        "category": "ATA 38"
    },
    {
        "question": "Air compressor will operate to pressurize water tanks when:",
        "choices": [
            "A) Airplane on ground",
            "B) Airplane in the air",
            "C) Pneumatic pressure is not sufficient to pressurize water tanks"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
    {
        "question": "The lavatory sink and galley drain water system is called:",
        "choices": [
            "A) Brown water drain system",
            "B) Gray water drain system",
            "C) Blue water drain system"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "When vacuum blower is used to create vacuum for waste system:",
        "choices": [
            "A) At altitude below 31000ft",
            "B) At altitude below 28000ft",
            "C) At altitude below 16000ft"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
    {
        "question": "Which 2 tanks are connected to one vacuum blower?",
        "choices": [
            "A) Tank 1 and 2",
            "B) Tank 2 and 3",
            "C) Tank 1 and 3"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "Flush control module valve maintenance switch is used to operate the blower for:",
        "choices": [
            "A) 2 seconds",
            "B) 5 seconds",
            "C) 10 seconds"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
    {
        "question": "Flush duty cycle is:",
        "choices": [
            "A) 10 seconds",
            "B) 15 seconds",
            "C) 20 seconds"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "Where can you check which toilet is unserviceable if one tank is full?",
        "choices": [
            "A) Check at CSCP/CACP",
            "B) Check at MAT",
            "C) Check at PAT"
        ],
        "correctAnswer": "A",
        "category": "ATA 38"
    },
    {
        "question": "How many potable water tank are there on VNA B777?",
        "choices": [
            "A) 3",
            "B) 2",
            "C) 1"
        ],
        "correctAnswer": "A",
        "category": "ATA 38"
    },
    {
        "question": "Where can you find potable water system isolation/drain valve in passenger cabin?",
        "choices": [
            "A) Above the ceiling aft of door 4 left",
            "B) Above the ceiling fwd of door 4 left",
            "C) Above the ceiling aft of door 2 left"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
    {
        "question": "Where can you find water shutoff valve in the lavatory?",
        "choices": [
            "A) Under the water sink",
            "B) Behind the mirror",
            "C) Behind the waste bin"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "Which of the following statements is true?",
        "choices": [
            "A) The fill/overflow valve lets water flow overboard when tanks are full",
            "B) The fill/overflow valve opens to turn on air compressor",
            "C) The fill/overflow valve lets air flow into the tanks"
        ],
        "correctAnswer": "A",
        "category": "ATA 38"
    },
    {
        "question": "Where can you find potable water system drain valves?",
        "choices": [
            "A) In the forward and aft drain panels",
            "B) In the cargo compartments",
            "C) In the forward most and aft most lavatory"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "The potable water isolation valves isolate the overhead water distribution lines to:",
        "choices": [
            "A) Forward and mid lavatories and galleys",
            "B) Forward lavatories and galleys",
            "C) Mid lavatories and galleys"
        ],
        "correctAnswer": "A",
        "category": "ATA 38"
    },
    {
        "question": "After an overheat condition, water heater in lavatory will be:",
        "choices": [
            "A) Automatically reset",
            "B) Manually reset",
            "C) Changed"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "What you need to do if you want to adjust water quantity transmitter?",
        "choices": [
            "A) Use the CACP",
            "B) Supply electrical power",
            "C) Fill the tanks to full then drain them"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
    {
        "question": "Purpose of drain restrictor valves?",
        "choices": [
            "A) To limit grey water flow out of the drain mast on the ground",
            "B) To restrict grey water flow from the drain mast",
            "C) To limit air flow from the drain mast to prevent noise"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
    {
        "question": "What do you do to prevent cabin pressure go out through the vacuum system if the flush valve fails in open position?",
        "choices": [
            "A) Push manual handle to close the valve",
            "B) Pull manual handle to close the valve",
            "C) Disconnect electric connector to flush control handle"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "How do you keep the flush valve in open position for maintenance?",
        "choices": [
            "A) Remove power to the flush control module",
            "B) Push manual handle",
            "C) Push maintenance switch on the flush control module one time"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
{
        "question": "When do the vacuum blowers operate?",
        "choices": [
            "A) Below 16000ft",
            "B) Above 16000ft",
            "C) Any time flush switch is activated"
        ],
        "correctAnswer": "A",
        "category": "ATA 38"
    },
    {
        "question": "What component de-energizes the vacuum blowers above 16000 ft?",
        "choices": [
            "A) Flush control module pressure switch",
            "B) ASCPC",
            "C) Barometric switch"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
    {
        "question": "Which of the following sensors send signal to the LCM when the waste tanks is full?",
        "choices": [
            "A) Continuous level sensor",
            "B) Tank full sensor",
            "C) Point level sensor"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
    {
        "question": "Data from continuous level sensor is used",
        "choices": [
            "A) To control when tanks are full",
            "B) For indication on CACP and CSCP",
            "C) To shutdown effected lavatories"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "What component do you use to do zero adjustment for continuous level sensor?",
        "choices": [
            "A) Logic control module (LCM)",
            "B) CACP or CSCP",
            "C) Flush control module"
        ],
        "correctAnswer": "A",
        "category": "ATA 38"
    },
    {
        "question": "What air is used to pressurize potable water tank?",
        "choices": [
            "A) Air from compressor only",
            "B) Air from pneumatic system or from compressor",
            "C) No air is required"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "Where is the compressor interlock switch located?",
        "choices": [
            "A) On the waste tank",
            "B) On the compressor",
            "C) Behind the right end wall of the bulk cargo compartment"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
    {
        "question": "Information from the water quantity summation unit shows on the?",
        "choices": [
            "A) Cabin services system (CSS)",
            "B) Quantity indicator on the P5 panel",
            "C) Airplane information management system"
        ],
        "correctAnswer": "A",
        "category": "ATA 38"
    },
    {
        "question": "Waste water from the lavatory and galley sinks?",
        "choices": [
            "A) Goes into a toilet",
            "B) Drains out through drain masts",
            "C) Goes into the toilet waste tank"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "In the vacuum waste system, which one of the following units controls the flush cycle (sequence of operation) for a vacuum toilet?",
        "choices": [
            "A) Left power management panel (P110)",
            "B) Flush control module (FCM)",
            "C) Flush valve"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "In the vacuum waste system, there are two vacuum blower barometric switches. What is the purpose of the switches?",
        "choices": [
            "A) The switches let the related vacuum blower operate only when the airplane is in the air",
            "B) The switches de-energize the related vacuum blower when the airplane is above 16,000 feet (4880 meters)",
            "C) The switches energize the related vacuum blower when the airplane is above 16,000 feet (4880 meters)"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "Which one of these can automatically remove power from the flush module power relay?",
        "choices": [
            "A) An attendant switch panel",
            "B) The continuous level sensor",
            "C) The point level sensors"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
    {
        "question": "Is it possible to drain the water system without electrical power on the aircraft?",
        "choices": [
            "A) Yes, the FWD Drain and AFT Drain valves can be operated manually",
            "B) No, electrical power is always needed to open and close all the water control valves",
            "C) Yes, the Fill/Overflow/Drain valve is operated manually"
        ],
        "correctAnswer": "A",
        "category": "ATA 38"
    },
    {
        "question": "Potable water is distributed by?",
        "choices": [
            "A) 1 electric water pump",
            "B) Gravity from 2 water tanks",
            "C) Charge air pressure (from the pneumatic manifold or a ground source)"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
    {
        "question": "Potable water quantity is indicated?",
        "choices": [
            "A) Only on the service panel and the CSCP",
            "B) At the forward attendant panel",
            "C) On the ECAM"
        ],
        "correctAnswer": "A",
        "category": "ATA 38"
    },
    {
        "question": "What happens when you push the flush switch in one toilet?",
        "choices": [
            "A) There is no effect on the operation of all the other toilet systems",
            "B) The toilet system will be inhibited for a period of 15 secs by the FCM",
            "C) All the other toilets are inhibited by the VSC during the period of operation of this toilet"
        ],
        "correctAnswer": "B",
        "category": "ATA 38"
    },
    {
        "question": "Why is the water tank pressurized?",
        "choices": [
            "A) To ease draining operation",
            "B) To warm up water",
            "C) To allow water distribution"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
    {
        "question": "On the aircraft with two service panels. With electrical power, water draining for the potable system can be accomplished?",
        "choices": [
            "A) Only if the tank is depressurized at the forward attendant panel",
            "B) Operation of the motorized drain valve for the forward potable water system only",
            "C) By operation of the fill/drain valve handle (to drain position)"
        ],
        "correctAnswer": "C",
        "category": "ATA 38"
    },
{
    "question": "If a 'Fault' light illuminates on the P5 'Hyd/Rat Panel' that could mean:",
    "choices": [
      "A) Overpressure",
      "B) Overheat",
      "C) Low quantity"
    ],
    "correctAnswer": "B",
    "category": "ATA 29"
  },
  {
    "question": "On ground during maintenance operations, which pumps are usually used to pressurize the three hydraulic systems?",
    "choices": [
      "A) The 4 ACMP(s)",
      "B) The 2 EDP(s) and the 2 center ACMP(s) C1 + C2",
      "C) The left and right ACMP(s) and the ADP(s) C1+C2"
    ],
    "correctAnswer": "A",
    "category": "ATA 29"
  },
  {
    "question": "Pressing the RAT manual switch on the P5 will:",
    "choices": [
      "A) Deploy the RAT by energizing one solenoid",
      "B) Deploy the RAT by energizing the two solenoids",
      "C) Make a request to the HYDIM cards to deploy the RAT"
    ],
    "correctAnswer": "B",
    "category": "ATA 29"
  },
  {
    "question": "The ELMS is able to deploy the RAT automatically:",
    "choices": [
      "A) Vrai",
      "B) Faux"
    ],
    "correctAnswer": "A",
    "category": "ATA 29"
  },
  {
    "question": "The ADP speed and pressure are controlled by:",
    "choices": [
      "A) A TGA",
      "B) HYDIM cards",
      "C) A LSCU"
    ],
    "correctAnswer": "C",
    "category": "ATA 29"
  },
  {
    "question": "If the ADP VIGV cannot operate, the LSCU will:",
    "choices": [
      "A) Stop the ADP in emergency to avoid an overspeed",
      "B) Use the MSOV in secondary air flow control",
      "C) Make a request to the ASCP(s) to reduce the pneumatic pressure"
    ],
    "correctAnswer": "B",
    "category": "ATA 29"
  },
  {
    "question": "Caution message: 'Hyd Press L + R' means:",
    "choices": [
      "A) Hydraulic systems left and right are pressurized",
      "B) Center hydraulic system isn't pressurized",
      "C) Hydraulic systems left and right are not pressurized"
    ],
    "correctAnswer": "C",
    "category": "ATA 29"
  },
  {
    "question": "Concerning the hydraulic box on the status page: 'Lo' display means:",
    "choices": [
      "A) Hydraulic level is below 0.40",
      "B) Hydraulic level is below 0.75",
      "C) Hydraulic level is above 1.20"
    ],
    "correctAnswer": "A",
    "category": "ATA 29"
  },
  {
    "question": "If one fire handle switch is pulled, the on side EDP will:",
    "choices": [
      "A) Be not supplied anymore and will also stop pressurizing the hydraulic system",
      "B) Will only stop pressurizing the hydraulic system",
      "C) Still operate normally"
    ],
    "correctAnswer": "A",
    "category": "ATA 29"
  },
  {
    "question": "Where are located the ACMP(s) C1 and C2?",
    "choices": [
      "A) In the left wheel well compartment",
      "B) In the right wheel well compartment",
      "C) In the right engine strut"
    ],
    "correctAnswer": "B",
    "category": "ATA 29"
  },
  {
    "question": "The RAT's hydraulic pump is partially connected to the:",
    "choices": [
      "A) Left system",
      "B) Center system",
      "C) Right system"
    ],
    "correctAnswer": "B",
    "category": "ATA 29"
  },
  {
    "question": "The center system has a total of five hydraulic pumps:",
    "choices": [
      "A) Vrai",
      "B) Faux"
    ],
    "correctAnswer": "A",
    "category": "ATA 29"
  },
  {
    "question": "On ground if the three hydraulic systems fail, the RAT will extend:",
    "choices": [
      "A) Vrai",
      "B) Faux"
    ],
    "correctAnswer": "B",
    "category": "ATA 29"
  },
  {
    "question": "Which HYDIM card is the only able to 'turn on' the RAT switch on P5: for 'press' and/or 'unlkd' condition?",
    "choices": [
      "A) HYDIM card left",
      "B) HYDIM card center left",
      "C) HYDIM card center right",
    ],
    "correctAnswer": "B",
    "category": "ATA 29"
  },
  {
    "question": "In case of an ADP automatic shutdown due to an overspeed detection:",
    "choices": [
      "A) The pilot can cycle the control switch (off then on) to restart the ADP",
      "B) The HYDIM cards will stop the pump and will try to restart it automatically",
      "C) An operational ground test (passed) should be performed to restart the ADP"
    ],
    "correctAnswer": "C",
    "category": "ATA 29"
  },
  {
    "question": "Where can you check some hydraulic systems informations?",
    "choices": [
      "A) HYD synoptic page + HYD maint page + status page + HYD reservoirs",
      "B) HYD synoptic page + HYD maint page",
      "C) HYD synoptic page + status page"
    ],
    "correctAnswer": "A",
    "category": "ATA 29"
  },
  {
    "question": "Select the case that can make both ADPs operating together at the same time:",
    "choices": [
      "A) Landing retraction",
      "B) Flaps and slats operation",
      "C) Autospeedbrake function"
    ],
    "correctAnswer": "A",
    "category": "ATA 29"
  },
  {
    "question": "When both ADP switches are selected 'on', which pump(s) will operate?",
    "choices": [
      "A) C1 and C2 will operate continuously",
      "B) C2 will operate continuously",
      "C) C1 will operate continuously"
    ],
    "correctAnswer": "C",
    "category": "ATA 29"
  },
  {
    "question": "If both ADP heaters (C1 and C2) fail to operate:",
    "choices": [
      "A) The 2 ADP will stop to operate",
      "B) C1 will start until the end of the flight",
      "C) Both ADP will start alternatively"
    ],
    "correctAnswer": "B",
    "category": "ATA 29"
  },
  {
    "question": "C.H.I.S. permits to:",
    "choices": [
      "A) Save hydraulic power for autoslat operation",
      "B) Save hydraulic quantity for RAT (PFCS) operation",
      "C) Save hydraulic quantity to keep nose gear steering and alternate braking"
    ],
    "correctAnswer": "C",
    "category": "ATA 29"
  },
  {
    "question": "The normal braking system receives power from:",
    "choices": [
      "A) The left hydraulic system",
      "B) The center hydraulic system",
      "C) The right hydraulic system"
    ],
    "correctAnswer": "C",
    "category": "ATA 29"
  },
  {
    "question": "The alternate braking system is powered by:",
    "choices": [
      "A) The left hydraulic system",
      "B) The center hydraulic system",
      "C) The right hydraulic system"
    ],
    "correctAnswer": "B",
    "category": "ATA 29"
  },
  {
    "question": "On one hydraulic reservoir, to ensure that the hydraulic level is correct, the sight glasses should show...",
    "choices": [
      "A) Top: black + bottom: red",
      "B) Top: black + bottom: black",
      "C) Top: red + bottom: black"
    ],
    "correctAnswer": "C",
    "category": "ATA 29"
  },
  {
    "question": "On the right hydraulic system, there are:",
    "choices": [
      "A) 2 pressure transducers",
      "B) 3 pressure transducers",
      "C) 4 pressure transducers"
    ],
    "correctAnswer": "B",
    "category": "ATA 29"
  },
  {
    "question": "The HYDIM cards are mainly used to:",
    "choices": [
      "A) Receive and share data from the sensors and control the demand pumps",
      "B) Only control the demand pumps",
      "C) Only receive and share data from the sensors"
    ],
    "correctAnswer": "A",
    "category": "ATA 29"
  },
  {
    "question": "If the center hydraulic system has to be pressurized, you must check a minimum fuel inside the:",
    "choices": [
      "A) Left fuel tank",
      "B) Center fuel tank",
      "C) Right fuel tank"
    ],
    "correctAnswer": "C",
    "category": "ATA 29"
  },
  {
    "question": "The ACMPs who are 'primary pumps', are connected on the:",
    "choices": [
      "A) Left hydraulic system",
      "B) Center hydraulic system",
      "C) Right hydraulic system"
    ],
    "correctAnswer": "B",
    "category": "ATA 29"
  },
  {
    "question": "What is the correct way to pressurize the three hydraulic systems together?",
    "choices": [
      "A) Left -> Center -> Right",
      "B) Center -> Right -> Left",
      "C) Right -> Center -> Left"
    ],
    "correctAnswer": "C",
    "category": "ATA 29"
  },
  {
    "question": "On the HYD/RAT Panel (P5), what position of switch gives control to the HYDIM cards?",
    "choices": [
      "A) Primary pumps to 'ON'",
      "B) Demand pumps to 'AUTO'",
      "C) Demand pumps to 'ON'"
    ],
    "correctAnswer": "B",
    "category": "ATA 29"
  },
  {
    "question": "The HYDIM cards are software loadable...",
    "choices": [
      "A) Vrai",
      "B) Faux"
    ],
    "correctAnswer": "A",
    "category": "ATA 29"
  },	
{
        "question": "If you pressurize the hydraulic systems with the hydraulic pumps make sure,",
        "choices": [
            "A) there is sufficient fuel in the main fuel tanks to cool the heat exchangers.",
            "B) not to let fluid move between the center and right systems, which can cause a high fluid level in one system and a low fluid level in the other system.",
            "C) the hydraulic reservoir is not overfull or under"
        ],
        "correctAnswer": "A",
        "category": "ATA 29"
    },
    {
        "question": "Four hydraulic interface module (HYDIM) cards supply control, indication, and other functions to the hydraulic system. Two of them control the functions for:",
        "choices": [
            "A) the left system.",
            "B) the right system",
            "C) the center system"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "When you operate one of the engine fire switches:",
        "choices": [
            "A) the related hydraulic pumps are switched off",
            "B) the hydraulic fluid supply to the related pump shuts off and the pump depressurizes",
            "C) the pressure line from the related pump is connected to the return line to relieve the pump"
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },
    {
        "question": "Alternating Current Motor Pumps (ACMPs) are normally the primary pumps, and NOT controlled by the HYDIM cards in:",
        "choices": [
            "A) left hydraulic system",
            "B) center hydraulic system",
            "C) right hydraulic system"
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },
    {
        "question": "The RAT is extended in 2 seconds by:",
        "choices": [
            "A) hydraulic pressure from the center hydraulic system",
            "B) two solenoids on the actuator",
            "C) the actuator internal spring"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "The operation of the RAT generator heater system can be done:",
        "choices": [
            "A) in no way",
            "B) through the MAT",
            "C) from the RAT control panel"
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },
    {
        "question": "Hydraulic reservoir quantity transmitters are interchangeable for:",
        "choices": [
            "A) left and center systems",
            "B) right and center systems",
            "C) left and right systems"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "The reservoir pressure switches send a reservoir low pressure signal:",
        "choices": [
            "A) when the reservoir pressure is 16 psia or less.",
            "B) when the reservoir pressure is 21 psia or less",
            "C) when the reservoir pressure is 25 psia or less."
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },
    {
        "question": "When both ADP switches are selected to ON, which pump will operate?",
        "choices": [
            "A) C1 and C2 will operate continuously",
            "B) C2 will operate continuously",
            "C) C1 will operate continuously"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "The Center Hydraulic Isolation System let hydraulic from the bottom of center hydraulic reservoir go to",
        "choices": [
            "A) Main landing gear",
            "B) Alternate/Reserve brake and Nose wheel steering systems",
            "C) Flaps/Slats systems"
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },
    {
        "question": "Pulling RH Engine Fire handle will",
        "choices": [
            "A) Turn off RH EDP and ACMP",
            "B) Activate Center Hydraulic Isolation System",
            "C) Supply electrical power to depress. solenoid of RH EDP"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "Airplane is powered and EDP switch is selected to OFF, which of the following is true?",
        "choices": [
            "A) EDP shutoff valve close",
            "B) Depress. solenoid of EDP is not powered",
            "C) Depress. solenoid of EDP is powered"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "ADP primary speed control circuit operates",
        "choices": [
            "A) A pneumatic actuator for the VIGVs",
            "B) A pneumatic actuator for the MSOV",
            "C) A speed sensor for MSOV"
        ],
        "correctAnswer": "A",
        "category": "ATA 29"
    },
    {
        "question": "RAT motoring valve lever is used to",
        "choices": [
            "A) Turn RAT turbine on the ground by center hydraulic power",
            "B) Turn RAT turbine on the ground by electrical power",
            "C) Stow RAT after extension for maintenance"
        ],
        "correctAnswer": "A",
        "category": "ATA 29"
    },
    {
        "question": "PRESS light on the RAT switch illumination indicates",
        "choices": [
            "A) RAT does not have enough pressure",
            "B) RAT does not operate",
            "C) RAT is supplying hydraulic pressure"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "Which of the following combination of upper and lower sight glasses shows a satisfactory hydraulic quantity in the reservoir?",
        "choices": [
            "A) Red-Black",
            "B) Black-Black",
            "C) Red-Red"
        ],
        "correctAnswer": "A",
        "category": "ATA 29"
    },
    {
        "question": "We must not operate hydraulic pumps when pump temperature indication on Hyd Maintenance page",
        "choices": [
            "A) ≤ 100°C",
            "B) ≥ 100°C",
            "C) ≥ 90°C"
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },
    {
        "question": "ADU heaters are used to",
        "choices": [
            "A) Prevent icing for hydraulic entering ADP",
            "B) Prevent icing for speed control components of ADP",
            "C) Prevent icing for LSCU"
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },
    {
        "question": "Minimum fuel quantity in the right main tank required for cooling center hydraulic system case drain is",
        "choices": [
            "A) 2175 kg",
            "B) 3313 kg",
            "C) 500 kg"
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },
    {
        "question": "Purpose of hydraulic accumulators?",
        "choices": [
            "A) To absorb pressure changes caused by tail flight control PCUs",
            "B) Reserve hydraulic for Alternate gear extension",
            "C) Reserve hydraulic for Alternate brake and Nose gear steering systems"
        ],
        "correctAnswer": "A",
        "category": "ATA 29"
    },
    {
        "question": "What controls ACMP primary pumps?",
        "choices": [
            "A) ELMS",
            "B) HYDIM cards",
            "C) AIMS"
        ],
        "correctAnswer": "A",
        "category": "ATA 29"
    },
    {
        "question": "Which of following statements of interchangeability is correct?",
        "choices": [
            "A) EDPs and ADPs",
            "B) EDPs and ACMPs",
            "C) ADP and ACMPs"
        ],
        "correctAnswer": "A",
        "category": "ATA 29"
    },
    {
        "question": "The center hydraulic isolation system (CHIS) lets fluid from the bottom of the center system reservoir go to:",
        "choices": [
            "A) The alternate/reserve brakes and nose gear steering.",
            "B) The leading edge slats and the trailing edge flaps.",
            "C) The center system primary flight controls."
        ],
        "correctAnswer": "A",
        "category": "ATA 29"
    },
    {
        "question": "What controls the automatic deployment of the RAT in flight?",
        "choices": [
            "A) The RAT deploy switch on the P5 overhead panel.",
            "B) The HYDIM cards or ELMS.",
            "C) A stall warning signal from the warning electronic system."
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },
{
        "question": "What component supplies the air-driven pump primary speed control?",
        "choices": [
            "A) The ADP logic speed control unit (LSCU)",
            "B) The hydraulic interface module (HYDIM)",
            "C) The aircraft information management system (AIMS)"
        ],
        "correctAnswer": "A",
        "category": "ATA 29"
    },
    {
        "question": "Hydraulic pump fault lights on the hydraulic/RAT panel turn on when:",
        "choices": [
            "A) The hydraulic system pressure is low",
            "B) The hydraulic reservoir quantity is low",
            "C) The hydraulic pump pressure is low or the case drain temperature is high"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "What controls the manual ground deployment of the ram air turbine?",
        "choices": [
            "A) The RAT ground deploy switch on the P61 overhead maintenance panel",
            "B) The RAT switch on the P5 overhead panel",
            "C) The RAT switch on the P56 main wheel well electrical service panel"
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },
    {
        "question": "Which type of pumps are there in the HYD SYST?",
        "choices": [
            "A) 2 EDP, 2 ACMP, 4 ADP",
            "B) 2 EDP, 4 ACMP, 2 ADP",
            "C) 2 EDP, 4 ACMP, 2 ADP, 1 RAT"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "Which pumps are PRIMARY?",
        "choices": [
            "A) 2 EDP, 2 ADP",
            "B) 2 EDP, 2 ACMP",
            "C) 2 ACMP, 2 ADP"
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },
    {
        "question": "Which pumps are DEMAND?",
        "choices": [
            "A) 2 EDP, 2 ACMP",
            "B) 2 EDP, 2 ADP",
            "C) 2 ACMP, 2 ADP"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "When fill to the correct level, the sight glasses on the hydraulic reservoir show:",
        "choices": [
            "A) Top sight glass black and bottom sight glass black",
            "B) Top sight glass red and bottom sight glass black",
            "C) Top sight glass black and bottom sight glass red"
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },
    {
        "question": "You want to pressurize Left, Center and Right hydraulic system, do you have to check fuel level before?",
        "choices": [
            "A) No, there is no need to check the fuel level",
            "B) Yes, in Left, Center and Right fuel tanks",
            "C) Yes, in Left and Right fuel tank"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "To avoid fluid movement between the systems, you must:",
        "choices": [
            "A) Pressurize the left system first and depressurize the left system last",
            "B) Pressurize the right system first and depressurize the right system first",
            "C) Pressurize the right system first and depressurize the right system last"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "Where can you see the hydraulic system parameters:",
        "choices": [
            "A) Hydraulic synoptic display and status display",
            "B) Hydraulic synoptic display, maintenance page and status display",
            "C) Hydraulic synoptic display, maintenance page, status display and reservoir fill quantity gage"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "The Boeing 777 has",
        "choices": [
            "A) Four hydraulic systems",
            "B) Two hydraulic systems",
            "C) Three hydraulics systems"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "How many hydraulic systems are needed to power enough of the Flight Controls for safe flight?",
        "choices": [
            "A) Two systems",
            "B) Three systems",
            "C) One system"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "In normal operation, the left hydraulic system is pressurized by?",
        "choices": [
            "A) An electric pump",
            "B) The RAT (Ram Air Turbine)",
            "C) An engine driven pump"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "The RAT (Ram Air Turbine) provides hydraulic power?",
        "choices": [
            "A) To the left system",
            "B) To the Right and center systems",
            "C) To the center system"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "The hydraulic EDP temperature transducer is located?",
        "choices": [
            "A) In the reservoir",
            "B) On the return filter",
            "C) On the case drain filter module"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "When the ACMPs push-buttons and Selectors are set to \"ON\", with aircraft on the ground, electrical power available and engine not running?",
        "choices": [
            "A) The left and right systems are pressurized",
            "B) The left, center and right systems are pressurized",
            "C) Only the center system is pressurized"
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },
    {
        "question": "Which hydraulic systems are equipped with a fire shut-off valve?",
        "choices": [
            "A) Center system",
            "B) Right and center systems",
            "C) Left and right systems"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "What indications will appear when there is an overheat (105° C) of the left system EDP?",
        "choices": [
            "A) The advisory message appears on the EICAS",
            "B) The advisory message appears on the EICAS and \"FAULT\" light come \"ON\" on P5",
            "C) The status messages appears on the EICAS"
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },
    {
        "question": "When servicing the hydraulic reservoirs with fluid?",
        "choices": [
            "A) You may gravity feed into fill neck on each reservoir",
            "B) Each reservoir is serviced at its own panel",
            "C) All 3 (three) systems can be replenished at hydraulic ground service bay"
        ],
        "correctAnswer": "C",
        "category": "ATA 29"
    },
    {
        "question": "Operation of the engine fire switch for the right engine:",
        "choices": [
            "A) Shuts down both the right system EDP and the right system ACMP",
            "B) Shuts off the hydraulic fluid supply to the right system EDP",
            "C) Operates the isolation valves in the center hydraulic isolation system (CHIS)"
        ],
        "correctAnswer": "B",
        "category": "ATA 29"
    },	
{
  "question": "On normal function, which LAV/GALLEY Vent Fan is on?",
  "choices": [
    "A) the left",
    "B) the right",
    "C) both"
  ],
  "correctAnswer": "B",
"category": "ATA 21"
},
{
  "question": "If we put the selector 'FWD Cargo A/C' OFF:",
  "choices": [
    "A) there is no air in fwd cargo",
    "B) fwd cargo still ventilated",
    "C) all valves goes off"
  ],
  "correctAnswer": "B",
"category": "ATA 21"
},
{
  "question": "What controls the temperature in the Aft Cargo?",
  "choices": [
    "A) Left CTC",
    "B) Left ECSMC",
    "C) Right ECMSC"
  ],
  "correctAnswer": "B",
"category": "ATA 21"
},
{
  "question": "What controls the temperature in the bulk Cargo?",
  "choices": [
    "A) Left CTC",
    "B) Left ECSMC",
    "C) Right ECMSC"
  ],
  "correctAnswer": "C",
"category": "ATA 21"
},
{
  "question": "In normal function, which fan sends air to cool MEC?",
  "choices": [
    "A) Right Supply Fan",
    "B) Left Supply Fan",
    "C) Left Vent Fan"
  ],
  "correctAnswer": "A",
"category": "ATA 21"
},
{
  "question": "The Vent Fan sends extracted air of the MEC to the:",
  "choices": [
    "A) Fwd Outflow Valve and Aft cargo",
    "B) Fwd Outflow Valve, Fwd cargo and Mix Bay",
    "C) Fwd Outflow Valve, Fwd Cargo and Mix Manifold"
  ],
  "correctAnswer": "B",
"category": "ATA 21"
},
{
  "question": "In flight, how many sensors must detect a Low Flow to open the override valve?",
  "choices": [
    "A) 1",
    "B) 2",
    "C) 3"
  ],
  "correctAnswer": "B",
"category": "ATA 21"
},
{
  "question": "When there is an Override in the MEC:",
  "choices": [
    "A) Vent Fan turns on",
    "B) Supply Fan turns on",
    "C) Supplemental Cooling Fan turns on"
  ],
  "correctAnswer": "C",
"category": "ATA 21"
},
{
  "question": "What is the backup of the ECSMC?",
  "choices": [
    "A) ECC",
    "B) EEC",
    "C) ECE"
  ],
  "correctAnswer": "A",
 "category": "ATA 21"
},
{
  "question": "What controls the Outflow Valves in normal condition?",
  "choices": [
    "A) Right CTC",
    "B) Both ECSMC",
    "C) Left ASCPC"
  ],
  "correctAnswer": "C",
"category": "ATA 21"
},
{
    "question": "This pressurization information shows in the ECS (environmental control system) data block on the EICAS display duct pressure:",
    "choices": [
      "A) Amber if duct pressure is less than 11 psi",
      "B) Amber if duct pressure is less than 9.42 psi",
      "C) Amber if duct pressure is less than 8.95 psi"
    ],
    "correctAnswer": "A",
    "category": "ATA 21"
  },
  {
    "question": "Cabin Altitude Warning Message shows if cabin altitude is higher than a safe limit. The cabin altitude at which the warning message shows is:",
    "choices": [
      "A) 10,000 feet",
      "B) 14,200 feet",
      "C) related to the selected landing altitude"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "In the automatic mode of Cabin Pressure Control System, the Air Supply Cabin Pressure Controller (ASCPC) in control of the position of the outflow valve is:",
    "choices": [
      "A) The left ASCPC",
      "B) The right ASCPC",
      "C) dependent on the power up sequence"
    ],
    "correctAnswer": "A",
    "category": "ATA 21"
  },
  {
    "question": "In the Cabin Pressure Control System:",
    "choices": [
      "A) One outflow valve can operate in automatic mode and the other can operate in manual mode at the same time",
      "B) Both outflow valves shall work in automatic mode at the same time",
      "C) Both outflow valves shall work in manual mode at the same time"
    ],
    "correctAnswer": "A",
    "category": "ATA 21"
  },
  {
    "question": "When can you use the Outflow Valve Manual Switch to move the outflow valves?",
    "choices": [
      "A) when you manually set the landing altitude",
      "B) when the cabin pressure is more than 8.6 psi above ambient",
      "C) when the Outflow Valve Switches are in the MAN position"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "The positive pressure relief valve opens when cabin air pressure:",
    "choices": [
      "A) is higher than ambient pressure by a set value",
      "B) is lower than ambient pressure by a set value",
      "C) is differential to the remote ambient pressure sense port by 8.95 psi"
    ],
    "correctAnswer": "A",
    "category": "ATA 21"
  },
  {
    "question": "How many Pack Flow Schedules (limits) can be set by the Air Supply Cabin Pressure Controller (ASCPC) for the Cabin Temperature Controllers (CTC) to use to control air flow into the airplane, (packs and trim air)?",
    "choices": [
      "A) 2",
      "B) 3",
      "C) 4"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "In the air conditioning - pack flow control system, at start up (when you put the pack switch to AUTO), the flow control and shutoff valve opens.",
    "choices": [
      "A) fully to increase air flow to the schedule rate",
      "B) at a rate that gives efficient air cycle machine acceleration",
      "C) slowly to permit condensed water to evaporate from the pack"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "In normal condition, which component controls Flow Control and Shut Off Valve (FCSOV)?",
    "choices": [
      "A) Cabin Temperature Controller (CTC)",
      "B) Air Supply and Cabin Pressure Controller (ASCPC)",
      "C) Airplane Information Management System (AIMS)"
    ],
    "correctAnswer": "A",
    "category": "ATA 21"
  },
  {
    "question": "How long after selecting pack control switch to OFF will the OFF light (on the pack control switch) illuminate?",
    "choices": [
      "A) 20 seconds",
      "B) 35 seconds",
      "C) 2 minutes"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "Which statement best describes the purpose of Economy Cooling Valve (ECV)?",
    "choices": [
      "A) ECV meters the air flow through air conditioning pack when FCSOV fully open",
      "B) ECV opens to prevent ACM stall at altitudes higher than 26000ft",
      "C) ECV opens to let air go around the ACM turbine 1 and the water separation parts of the pack"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "Purpose of the upper recirculation fans is to:",
    "choices": [
      "A) Put cabin air to mix manifold",
      "B) Put cabin air back in the overhead conditioned air distribution ducts",
      "C) Move cabin air overboard"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "In normal condition, which component controls the operation of recirculation fans?",
    "choices": [
      "A) Right CTC",
      "B) Both CTC",
      "C) Environmental Control System Miscellaneous Card (ECSMC)"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "The purpose of Equipment Cooling Controllers (ECCs) is to:",
    "choices": [
      "A) Take control of equipment cooling supply fans and override valves in the air when there is low flow condition",
      "B) Control equipment cooling supply fans and vent valves",
      "C) Take control of equipment cooling fans and override valve when ECSMC fails"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "SATCOM backup fan is used to pull the air through electronic components in E11. This fan is on when:",
    "choices": [
      "A) Airplane is in the air",
      "B) Airplane is on the ground",
      "C) Both lavatory/galley ventilation fans do not work"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "Advisory message EQUIP COOLING appears when:",
    "choices": [
      "A) There is low flow in the equipment cooling system in the air for 5 minutes",
      "B) Smoke is detected in the equipment cooling system on the ground",
      "C) There is low flow in the equipment cooling system on the ground for 5 minutes"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "Which flow schedule gives the largest airflow to the air conditioning pack?",
    "choices": [
      "A) Schedule 0",
      "B) Schedule 1",
      "C) Schedule 2"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "What is the purpose of ASCPC to set different flow schedules (0,2,3,4)?",
    "choices": [
      "A) To increase engine bleed air load",
      "B) To reduce air to other systems",
      "C) To reduce engine bleed air load or to make more air available to other systems"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "What is used to set the master temperature for all passenger zones?",
    "choices": [
      "A) CABIN TEMP control selector in the cockpit",
      "B) Cabin System Control Panel (CSCP)",
      "C) Cabin Area Control Panel (CACP)"
    ],
    "correctAnswer": "A",
    "category": "ATA 21"
  },
  {
    "question": "Which of the following statements is true?",
    "choices": [
      "A) The left CTC monitors and controls the temperature for these zones: F/D, A, B, C",
      "B) The right CTC monitors and controls the temperature for these zones: Fwd Cargo, D, E, F",
      "C) The right CTC monitors and controls the temperature for these zones: Fwd Cargo, B, D, F"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "Normal control of the pack flow control and shutoff valves comes from the?",
    "choices": [
      "A) Related environmental control system miscellaneous card (ECSMC)",
      "B) Related air Cabin Temperature controller (CTC)",
      "C) Related air supply cabin pressure controller (ASCPC)"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "What controls the position of the ram air inlet doors?",
    "choices": [
      "A) The right environmental control system miscellaneous card (ECSMC)",
      "B) The cabin temperature controller (CTC)",
      "C) The air supply and cabin pressure controller (ASCPC)"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "Which of these best describes the purpose of the second stage turbine bypass valve (TBV)?",
    "choices": [
      "A) The TBV opens to prevent air cycle machine surges when the airplane is above 26,000 feet (7,930 meters)",
      "B) The TBV regulates the air flow through the pack when the RAM air inlet door is full open",
      "C) The cabin temperature controller uses the TBV to control the pack outlet temperature"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "Why are there two flow control and shutoff valves for each air conditioning pack?",
    "choices": [
      "A) One valve is for the cabin temperature controller. The other valve is for the air supply cabin pressure controller",
      "B) The upper valve controls the flow of air into the trim air system and the lower one controls the flow of air into the pack",
      "C) The upper valve lets air go into the pack at low altitude. The lower valve lets air go through the ozone converter then into the pack at high altitude"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "Which panel lets you set the master cabin temperature for the passenger compartment?",
    "choices": [
      "A) Bleed air/pressurization panel",
      "B) Cabin area control panel (CACP)",
      "C) Air conditioning panel"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "Which one of these statements about the trim air modulating valves is correct?",
    "choices": [
      "A) The trim air modulating valves have two positions, fully open or fully closed",
      "B) All of the trim air modulating valves are the same",
      "C) The air supply cabin pressure controllers (ASCPC) control all of the trim air modulating valves"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "The flight deck usually receives conditioned air from the?",
    "choices": [
      "A) Right pack",
      "B) Mix manifold",
      "C) Left pack"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "The purpose of the upper recirculation fans is to?",
    "choices": [
      "A) Put cabin air into the flight compartment",
      "B) Put cabin air into the distribution system",
      "C) Vent cabin air overboard"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "The SATCOM backup cooling fan operates when?",
    "choices": [
      "A) Both lavatory/galley ventilation fans are off for more than 10 seconds",
      "B) Smoke is detected in the aft or bulk cargo compartment for more than 10 seconds",
      "C) Both forward equipment cooling supply fans are off for more than 10 seconds"
    ],
    "correctAnswer": "A",
    "category": "ATA 21"
  },
  {
    "question": "The equipment cooling system has one control switch on the air conditioning control panel. What causes the OVRD light in the switch to come on?",
    "choices": [
      "A) If smoke is detected in the supply part of the forward equipment cooling system only",
      "B) The system is in override mode",
      "C) Only if the forward cargo fire switch is ARMED"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "Which one of these conditions, related to the equipment cooling system, causes the ground crew call horn to sound when the airplane is on the ground?",
    "choices": [
      "A) Low flow or high temperature condition in the equipment cooling system",
      "B) Both lavatory/galley ventilation fans off",
      "C) Low pressure condition in the equipment cooling system"
    ],
    "correctAnswer": "A",
    "category": "ATA 21"
  },
  {
    "question": "What occurs to the forward equipment cooling system when smoke is detected by the E/E cooling smoke detector?",
    "choices": [
      "A) The system operates the main equipment center fire extinguishing system",
      "B) The system goes to the override (OVRD) mode. This sends smoke overboard",
      "C) The system closes the forward cargo heat valve, opens the vent valve and puts the vent fan to high flow mode"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "Normal operation of the cabin pressurization system requires?",
    "choices": [
      "A) The flight crew to set the takeoff altitude on the pressurization panel",
      "B) No flight crew action on the pressurization panel",
      "C) The flight crew to open the outflow valves after landing"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "When can you use the outflow valve manual switches to move the outflow valves?",
    "choices": [
      "A) Anytime power is available",
      "B) When the outflow valve AUTO switches are in the MAN position",
      "C) When the cabin pressure is more than 8.6 psi above ambient"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "How can you see if a positive pressure relief valve is open?",
    "choices": [
      "A) It shows on the air supply maintenance page",
      "B) It shows on the EICAS display",
      "C) The brightly colored edge of the valve door shows"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "Air conditioning system has?",
    "choices": [
      "A) One pack for fresh air and a zone temperature control with electric heaters",
      "B) Two packs in the lower section of the fuselage",
      "C) One pack for the cabin pressurization system"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "777-300: In the case of a smoke detection in the OFAR (Overhead Flight Attendant Rest)?",
    "choices": [
      "A) The Air shut off valve closes and the fire bottle automatically discharges 10 seconds after",
      "B) The Air shut off valve closes and the exhaust valve opens",
      "C) The Air shut off valve closes and the exhaust valve closes"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "What determines the PACK outlet temperature?",
    "choices": [
      "A) The master cabin temperature control",
      "B) The zone requesting the coldest temperature",
      "C) The zone requesting the warmest temperature"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "Why should the CABIN TEMP selector be set to mid position?",
    "choices": [
      "A) To set the maximum temperature in any zone",
      "B) To allow full temperature range adjustment on cabin attendant panel",
      "C) To prevent cabin overheat during low altitude flight"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "What does the \"MAN\" position on the \"FLT DECK TEMP\" selector do?",
    "choices": [
      "A) It removes power from the trim air system",
      "B) It causes the packs to provide air at an average mid temperature range",
      "C) It allows the flight deck trim air modulating valve to operate manually"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "What happens if the \"FLT DECK TEMP\" selector is moved to the \"C\" position?",
    "choices": [
      "A) The pack temperature decreases",
      "B) It opens the flight deck trim Air Valve",
      "C) It closes the flight deck trim air modulating valve and lowers the Flight Deck temperature"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "Which system(s) supply trim air to the flight deck?",
    "choices": [
      "A) Left trim air system",
      "B) Both right and left trim air systems",
      "C) Center trim air system"
    ],
    "correctAnswer": "A",
    "category": "ATA 21"
  },
  {
    "question": "How does the Trim Air system meet zone temperature requirements?",
    "choices": [
      "A) It controls pack air temperature",
      "B) It heats conditioned air",
      "C) It cools conditioned air"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "When does the EICAS advisory message \"EQUIP COOLING\" display?",
    "choices": [
      "A) When one of the two supply fans is inoperative",
      "B) In the air, when the forward equipment cooling system is inoperative",
      "C) On the ground when the forward equipment cooling system is inoperative"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "On the B777-300, the air supply valve is commanded open when?",
    "choices": [
      "A) The airplane is on the ground",
      "B) The left air conditioning pack is selected \"ON\"",
      "C) The airplane is in the air and above 25000ft altitude"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "When cabin pressure differential at the remote ambient pressure sense port is more than 8.95 psi?",
    "choices": [
      "A) Only the lower positive pressure relief valves open",
      "B) Only the upper positive pressure relief valves close",
      "C) The two positive pressure relief valves open simultaneously"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "There are two outflow valves?",
    "choices": [
      "A) Two aft of the airplane, one left side and one right side",
      "B) One forward (primary) and one aft of the airplane (back up)",
      "C) One forward and one aft on left side of the airplane (working simultaneously)"
    ],
    "correctAnswer": "C",
    "category": "ATA 21"
  },
  {
    "question": "The position of the outflow valves are normally controlled by?",
    "choices": [
      "A) The left Air Supply Cabin Pressure Controller (ASCPC)",
      "B) The Electrical load Management System (ELMS)",
      "C) The outflow valve manual switches on the bleed air/pressurization panel"
    ],
    "correctAnswer": "A",
    "category": "ATA 21"
  },
 {
    "question": "There are four negative pressure relief vents?",
    "choices": [
      "A) Two on each cargo door",
      "B) Two each side of the fuselage",
      "C) One on each passenger door"
    ],
    "correctAnswer": "B",
    "category": "ATA 21"
  },
  {
    "question": "The positive pressure relief valves?",
    "choices": [
      "A) Are not monitored",
      "B) Are monitored by the two Air Supply Cabin Pressure Controllers (ASCPC)",
      "C) Are monitored by the two Environmental Control System Miscellaneous Cards (ECSMCs)"
    ],
    "correctAnswer": "A",
    "category": "ATA 21"
  },
{
"question": "Ports on the flow control units are used to:",
"choices": [
"A) Connect additional oxygen bottles.",
"B) Empty the oxygen bottles.",
"C) Test the FCU in order to simulate different altitudes."
],
"correctAnswer": "C",
"category": "ATA 35"
},
{
"question": "The 777-200 'LLAR' oxygen system is...",
"choices": [
"A) Chemical.",
"B) Gaseous.",
"C) There is no fixed oxygen system (only masks)."
],
"correctAnswer": "A",
"category": "ATA 35"
},
{
"question": "B777 crew oxygen system is :",
"choices": [
"A) Chemical.",
"B) Gaseous.",
"C) Optional."
],
"correctAnswer": "B",
"category": "ATA 35"
},
{
"question": "How many O2 masks are available in the F/D?",
"choices": [
"A) 2",
"B) 4",
"C) 6"
],
"correctAnswer": "B",
"category": "ATA 35"
},
{
"question": "If the crew overboard discharge indicator is missing that's mean:",
"choices": [
"A) An aircraft depressurization has occurred.",
"B) A hard landing has been detected.",
"C) A bottle overpressure condition causes the disc to fall."
],
"correctAnswer": "C",
"category": "ATA 35"
},
{
"question": "If a crew oxygen mask is in use, the audio management unit gives microphone priority:",
"choices": [
"A) Inside the mask.",
"B) On the PTT (push to talk) microphone.",
"C) Both can be used."
],
"correctAnswer": "A",
"category": "ATA 35"
},
{
"question": "Both flow control units are identicals...",
"choices": [
"A) Vrai",
"B) Faux"
],
"correctAnswer": "B",
"category": "ATA 35"
},
{
"question": "How can you close and stop the flow control units?",
"choices": [
"A) They close automatically when the oxygen pressure is low.",
"B) By moving the 'PASS OXYGEN' switch to 'RESET' (on the P5 panel).",
"C) By doing an 'AIR COND RESET' on the P5 panel."
],
"correctAnswer": "B",
"category": "ATA 35"
},
{
"question": "Passenger system: How can the PAX oxygen system be deployed?",
"choices": [
"A) Manually.",
"B) Automatically.",
"C) Both."
],
"correctAnswer": "C",
"category": "ATA 35"
},
{
"question": "Where are located the PAX oxygen bottles?",
"choices": [
"A) In the aft cargo compartment.",
"B) In the fwd cargo compartment.",
"C) In the bulk cargo compartment."
],
"correctAnswer": "A",
"category": "ATA 35"
},
{
"question": "The voltage averaging unit gives:",
"choices": [
"A) The average pressure to the AIMS for display.",
"B) The highest bottle pressure available to the AIMS for display.",
"C) The lowest bottle pressure available to the AIMS for display."
],
"correctAnswer": "A",
"category": "ATA 35"
},
{
"question": "PAX restraint tools should be installed on each PSU:",
"choices": [
"A) During flight.",
"B) During all 'A' checks in the hangar.",
"C) During oxygen test."
],
"correctAnswer": "C",
"category": "ATA 35"
},
{
"question": "The crew system bleed valve's purpose is to:",
"choices": [
"A) To make sure the S.O.V. is correctly open and AIMS get the correct info.",
"B) To make sure the S.O.V. is correctly closed and AIMS get the correct info.",
"C) To make sure that there is no over pressure inside the oxygen supply."
],
"correctAnswer": "A",
"category": "ATA 35"
},
{
"question": "Pressure gauge on the oxygen bottle(s) is the only way to know the system pressure...",
"choices": [
"A) Vrai",
"B) Faux"
],
"correctAnswer": "B",
"category": "ATA 35"
},
{
    "question": "Where can you check the crew oxygen pressure?",
    "choices": [
      "A) At cylinder gauge",
      "B) At status page",
      "C) Both are correct"
    ],
    "correctAnswer": "C",
    "category": "ATA 35"
  },
  {
    "question": "The crew oxygen cylinders are made of?",
    "choices": [
      "A) Composite material",
      "B) Stainless steel",
      "C) Aluminium"
    ],
    "correctAnswer": "A",
    "category": "ATA 35"
  },
  {
    "question": "When you push down and hold the reset/test lever on the crew oxygen mask, what flow indication will be shown?",
    "choices": [
      "A) Momentary flow",
      "B) Continuous flow",
      "C) No flow"
    ],
    "correctAnswer": "A",
    "category": "ATA 35"
  },
  {
    "question": "How many crew oxygen masks are installed on B777?",
    "choices": [
      "A) 2",
      "B) 4",
      "C) 6"
    ],
    "correctAnswer": "B",
    "category": "ATA 35"
  },
  {
    "question": "Which is one of the conditions to make passenger oxygen masks automatically drop?",
    "choices": [
      "A) Airplane is on ground with airspeed more than 80 knots",
      "B) Airplane is in the air with airspeed more than 80 knots",
      "C) Airplane is on ground with airspeed less than 80 knots"
    ],
    "correctAnswer": "B",
    "category": "ATA 35"
  },
  {
    "question": "What is the indication of a chemical oxygen generator that has been operated?",
    "choices": [
      "A) Expended indicator turns a dark color",
      "B) Expended indicator turns a white color",
      "C) Expended indicator turns a red color"
    ],
    "correctAnswer": "A",
    "category": "ATA 35"
  },
  {
    "question": "The oxygen overboard discharge disk is?",
    "choices": [
      "A) Green color",
      "B) Blue color",
      "C) Red color"
    ],
    "correctAnswer": "A",
    "category": "ATA 35"
  },
  {
    "question": "Where can you find crew oxygen pressure?",
    "choices": [
      "A) Pressure gauge on cylinder and Status page",
      "B) Oxygen Synoptic page",
      "C) CSCP and pressure gauge on cylinder"
    ],
    "correctAnswer": "A",
    "category": "ATA 35"
  },
{
    "question": "Crew oxygen remote fill port is located?",
    "choices": [
      "A) In the main equipment center",
      "B) At nose landing gear P40",
      "C) In the forward equipment center"
    ],
    "correctAnswer": "C",
    "category": "ATA 35"
  },
  {
    "question": "Why are there two positions for the movable retainer ring?",
    "choices": [
      "A) There are two different types of composite bottles",
      "B) One for composite and one for steel oxygen bottle",
      "C) One is used as spare for the other"
    ],
    "correctAnswer": "B",
    "category": "ATA 35"
  },
  {
    "question": "What is the purpose of the thermal compensator?",
    "choices": [
      "A) To make cylinder temperature equal outside temperature",
      "B) To equalize temperature of the two bottles",
      "C) To absorb the heat that pressurized oxygen causes when filling the unpressurized lines"
    ],
    "correctAnswer": "C",
    "category": "ATA 35"
  },
  {
    "question": "Purpose of the crew oxygen system bleed valve is to?",
    "choices": [
      "A) Bleed oxygen overboard when overpressure occurs",
      "B) Make sure that AIMS get correct cylinder pressure information",
      "C) Bleed oxygen after cylinder installation"
    ],
    "correctAnswer": "B",
    "category": "ATA 35"
  },
  {
    "question": "Dilution control is used to?",
    "choices": [
      "A) Set 100% oxygen when breathing",
      "B) Control the oxygen pressure",
      "C) Vent air out of the mask"
    ],
    "correctAnswer": "A",
    "category": "ATA 35"
  },
  {
    "question": "When does the crew oxygen bleed valve operate?",
    "choices": [
      "A) Either engine start on the ground",
      "B) After landing",
      "C) After all doors closed"
    ],
    "correctAnswer": "A",
    "category": "ATA 35"
  },
  {
    "question": "When do passenger oxygen masks fall down?",
    "choices": [
      "A) When cabin altitude is more than 13500ft",
      "B) When passenger oxygen switch on P5 set to ON",
      "C) Both a and b"
    ],
    "correctAnswer": "C",
    "category": "ATA 35"
  },
 {
    "question": "The wing anti-ice system operates?",
    "choices": [
      "A) On Ground",
      "B) On the ground in icing conditions",
      "C) In flight only"
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "The WAI system receives Air/ground information from:",
    "choices": [
      "A) The weight on wheels (WOW) cards",
      "B) The Air Data Inertial Reference Unit (ADIRU)",
      "C) The weight on wheels (WOW) cards and the Air Data Inertial Reference Unit (ADIRU)"
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "To do wing anti-ice system ground tests with the MAT, the availability of the bleed air is:",
    "choices": [
      "A) Not necessary",
      "B) Necessary",
      "C) Dependent on the type of the required test"
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "If the EAI controller's torque motor has no power, the EAI valve:",
    "choices": [
      "A) Is set to full close",
      "B) Is set to full open",
      "C) Is pneumatically actuated"
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "The engine anti-ice system tests with related engine not running can be done if you need to check that:",
    "choices": [
      "A) The related engine anti-ice system can control the bleed airflow",
      "B) The electrical interface connections of the related engine anti-ice system are correct",
      "C) The electrical interface connections of the related engine anti-ice system are correct, and that the related ice detector operates correctly"
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "The probes and sensors that have heaters, are:",
    "choices": [
      "A) Pitot probes; TAT probe; AOA sensors",
      "B) Pitot probes; TAT probe; AOA sensors; engine P2/T2 probes",
      "C) Pitot probes; static ports; TAT probe; AOA sensors; engine P2/T2 probes"
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "The TAT probe heater receives power when:",
    "choices": [
      "A) The airplane is in the air",
      "B) The airplane is on the ground and the computed airspeed (CAS) is more than 50 knots",
      "C) The airplane is on the ground and one or both engines are on"
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "Engine P2/T2 probe heat systems is controlled by:",
    "choices": [
      "A) Electronic engine controls (EECs)",
      "B) The engine data interface unit (EDIU)",
      "C) The AIMS"
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "There are two window heat control units (WHCUs), which:",
    "choices": [
      "A) Operate with one as primary, and another in backup",
      "B) Control all on-side windows heating",
      "C) Control off-side No.1 windows heating"
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "The backup window heat system operates to supply the power to:",
    "choices": [
      "A) Number No 1 windows only",
      "B) Number No 1 and No 2 windows",
      "C) All windows"
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "Number of modes of operation for the windshield wipers is:",
    "choices": [
      "A) 2",
      "B) 3",
      "C) 4"
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "The ice detector probe is:",
    "choices": [
      "A) Vibration type",
      "B) Radioactive",
      "C) Pressure type"
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "The ice detector gives an engine icing signal to the ACIPS, if:",
    "choices": [
      "A) The airplane is in the air, and the heater is on for 15 seconds or more",
      "B) The airplane is in the air, and the heater is on for 25 seconds or more",
      "C) The airplane is in the air and there are ten cycles of heater operation"
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "The detector gives a wing icing signal to the ACIPS, if:",
    "choices": [
      "A) The airplane is in the air, and the heater is on for 15 seconds or more",
      "B) The airplane is in the air, and the heater is on for 25 seconds or more",
      "C) The airplane is in the air and there are ten cycles of heater operation"
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "What controls the wing anti-ice valve?",
    "choices": [
      "A) AIMS",
      "B) ACIPS control card",
      "C) HYDIM cards"
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "Purpose of Controller Air Cooler (CAC) is to decrease the temperature of engine bleed air that goes to",
    "choices": [
      "A) EAI valve controller",
      "B) EAI valve",
      "C) Ice detectors"
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "How do you remove power from the flight deck window heating system for maintenance?",
    "choices": [
      "A) Select window heat switches on P5 to OFF",
      "B) Select window heat switches on P5 and Backup window heat switches on P5 to OFF",
      "C) Select window heat switches on P5 and Backup window heat switches on P61 to OFF"
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "Is there a rain repellent fluid system on B777?",
    "choices": [
      "A) Yes",
      "B) No, a hydrophobic coating on each forward window repels rain",
      "C) No, rain repellent agent is dangerous"
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "How is ice detected?",
    "choices": [
      "A) Ice detector probe heater cycle determines a wing or engine icing condition",
      "B) Ice detector vibration frequency determines a wing or engine icing condition",
      "C) Ice detector temperature probe gives indication of icing condition"
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "On the engine anti-ice system, bleed air source is from:",
    "choices": [
      "A) An engine high stage bleed air port",
      "B) An engine fan air bleed air port, through electrical heaters",
      "C) The pneumatic distribution system"
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "The airplane ice detection system turns on wing and engine anti-ice:",
    "choices": [
      "A) Anytime ice is detected and the anti-ice switches are in auto",
      "B) When the anti-ice switches are in auto, the airplane is in the air and ice is detected",
      "C) When the airplane is in the air and ice is detected"
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "The wing anti-ice system is:",
    "choices": [
      "A) A thermal system with hot air from pneumatic system",
      "B) A thermal system with electric heaters",
      "C) A glycol system with two tanks in the dries bays"
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "In manual control, the engine anti-ice system can operate:",
    "choices": [
      "A) Only on the ground",
      "B) Only in the air",
      "C) On the ground or in the air"
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "In manual control, the wing anti-ice system can operate:",
    "choices": [
      "A) Only on the ground",
      "B) On the ground or in the air",
      "C) Only in flight"
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "When engine anti-ice is operating:",
    "choices": [
      "A) Engine approach idle is selected",
      "B) The 'ENGINE ANTI-ICE ON' memo message is displayed",
      "C) The backup window heat system comes on"
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "The 'EAI' symbol on EICAS indicates that:",
    "choices": [
      "A) Engine anti-ice system is armed",
      "B) Engine anti-ice system is operating",
      "C) Engine anti-ice system has failed"
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "The TAT probe heater goes ON:",
    "choices": [
      "A) Automatically if airplane is in flight",
      "B) When the TAT heater switch is set to ON position",
      "C) After an engine start when airplane is on the ground"
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "Anti-ice and anti-fog protections are available on:",
    "choices": [
      "A) Both pilot's number one windows",
      "B) Flight deck side windows only",
      "C) All flight deck windows"
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "The backup window heat system is available on:",
    "choices": [
      "A) All flight deck windows",
      "B) Both pilot's number one windows",
      "C) Flight deck side windows only"
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "On the B777, the rain repellent system is:",
    "choices": [
      "A) A fluid sprayed onto the number one windows, with two pushbutton switches",
      "B) A pneumatic bleed air blown on the number one windows",
      "C) A hydrophobic coating applied to the number one windows"
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
 {
    "question": "TAT probe heating operates only in flight?",
    "choices": [
      "A) Vrai",
      "B) Faux"
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "The pitot probes heating will operate:",
    "choices": [
      "A) As soon as one engine is running or during flight.",
      "B) Only in flight.",
      "C) Only if ice has been detected."
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "If the right EAI switch is set to 'ON':",
    "choices": [
      "A) The EAI will operate air or ground but engine running.",
      "B) The EAI will operate only in air but engine running.",
      "C) The EAI will operate air or ground regardless of engine running."
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "What is the purpose of a B777-300 CAC?",
    "choices": [
      "A) Reduce air muscle pressure temperature for the PRSOVC + HPFAC + EAIC.",
      "B) Reduce air muscle pressure temperature for the PRSOVC + EAIC.",
      "C) Reduce air muscle pressure temperature for the EAIC only."
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "The whole slats are heated during WAI operation:",
    "choices": [
      "A) Vrai",
      "B) Faux"
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "If both EAI valves control switches are set to 'AUTO':",
    "choices": [
      "A) The valves will open during flight only because ice should be detected.",
      "B) The valves will open directly but engine running.",
      "C) The valves will open during ground or flight but ice should be detected."
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "Concerning the ice detectors: Only one is enough to detect 'icing conditions'?",
    "choices": [
      "A) Vrai",
      "B) Faux"
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "To defrost the engine air inlet, which air stage from the HPC is used?",
    "choices": [
      "A) The 4th.",
      "B) The 7th.",
      "C) The 9th."
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "How the left EAI valve is controlled?",
    "choices": [
      "A) By his own side ACIPS card using a dedicated controller.",
      "B) In hard wire because the valve is electropneumatic.",
      "C) By either left or right ACIPS card using a dedicated controller."
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "If an 'Anti-ice on' advisory message appears on the EICAS, pilot's action should be:",
    "choices": [
      "A) The WAI switch must be set to 'ON' to operate the WAI.",
      "B) The WAI system is fail to operate.",
      "C) The WAI switch must be set to 'OFF or AUTO' because the TAT is too high."
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "During WAI operation what is visible on the EICAS page?",
    "choices": [
      "A) Green 'WAI' below N1 display.",
      "B) Green 'WAI' above N1 display.",
      "C) Green 'WAI' above EGT display."
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "During operations, the WAI valve:",
    "choices": [
      "A) Regulates air pressure to the manifold.",
      "B) Is fully open to defrost correctly the slats.",
      "C) Opens only during few seconds the packs needs too much air."
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "How the center ACIPS card receives information of 'icing conditions'?",
    "choices": [
      "A) By ARINC 329 ARINC systems buses.",
      "B) By ARINC 629 systems buses.",
      "C) By ARINC 717 ARINC systems buses."
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "Ice detectors can send 'ice condition detection' during:",
    "choices": [
      "A) Ground or flight.",
      "B) Flight only.",
      "C) Ground only."
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "If 2 'probe defrost cycles' are made within 3 minutes on the same ice detector probe:",
    "choices": [
      "A) WAI starts.",
      "B) EAI starts.",
      "C) EAI + WAI start together."
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "What are the drain mast heating level(s)?",
    "choices": [
      "A) 28 VAC permanently.",
      "B) 115 VAC permanently.",
      "C) 28 VAC on ground and 115 VAC in flight."
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "Which parts of the waste tanks are prevents to frost?",
    "choices": [
      "A) Drain lines only.",
      "B) Drain 'ball' valves only.",
      "C) Both."
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "If the WAI control switches are set to 'ON':",
    "choices": [
      "A) The WAI system will override all the other systems.",
      "B) The WAI system will operate in flight.",
      "C) The WAI system is 'armed' and waits for the ice detection system."
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "If the WAI control switches are set to 'AUTO':",
    "choices": [
      "A) The WAI system will override and operates whatever the flight phase.",
      "B) The WAI system will operate in flight.",
      "C) The WAI system is 'armed' and waits for the ice detection system."
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "What are the heating levels for the front windows?",
    "choices": [
      "A) Anti-ice only.",
      "B) Anti-ice (normal) and anti-fog (B/U).",
      "C) Anti-fog only."
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "What are the heating levels for the side windows?",
    "choices": [
      "A) Anti-ice only.",
      "B) Anti-ice (normal) and anti-fog (B/U).",
      "C) Anti-fog only."
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "How can you unpower the front windows heating?",
    "choices": [
      "A) Using switches on P5 and P61.",
      "B) Using switches on P5 only.",
      "C) Using switches on P61 only."
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "During operations, the EAI valve:",
    "choices": [
      "A) Regulates air pressure to the manifold.",
      "B) Is fully open to defrost correctly the engine air inlet.",
      "C) Opens only during few seconds because the engine compressor can't handle the pressure."
    ],
    "correctAnswer": "A",
    "category": "ATA 30"
  },
  {
    "question": "If an overheat is detected from the right engine DLODS module:",
    "choices": [
      "A) Both engines EAI valves will close.",
      "B) The right EAI valve will close.",
      "C) The right EAI valve will open."
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "WAI valve operating logic is:",
    "choices": [
      "A) Fail safe open spring loaded open.",
      "B) Fail safe close spring loaded open.",
      "C) Fail safe close spring loaded close."
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },
  {
    "question": "The WAI ACIPS card is located on the:",
    "choices": [
      "A) P5.",
      "B) P84.",
      "C) P85."
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "ACIPS means:",
    "choices": [
      "A) Air Conditioning Ice Protection System.",
      "B) Airfoil and Cowls Ice Protection System.",
      "C) Aircraft Ice Protection System."
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "Which ACIPS card controls the WAI system?",
    "choices": [
      "A) Left.",
      "B) Center.",
      "C) Right."
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "Concerning the drain and water lines heating:",
    "choices": [
      "A) Electrical power comes from the hot batt bus.",
      "B) Electrical power comes from the ground service bus.",
      "C) Electrical power comes from the ground handling bus."
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "When does the drain and water lines heating system operate?",
    "choices": [
      "A) Automatically as soon as the engines are running.",
      "B) Automatically as soon as the aircraft is powered.",
      "C) Manually as soon as the control switch on the P5 is set to 'ON'."
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "EAI CACs on the GE90-115 (B777-300) are identical with the GE90-90/94 (B777-200):",
    "choices": [
      "A) Vrai",
      "B) Faux"
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
  {
    "question": "On the GE90-115 where is located the EAIC?",
    "choices": [
      "A) On the fan hub.",
      "B) On the core engine.",
      "C) On the fan case."
    ],
    "correctAnswer": "C",
    "category": "ATA 30"
  },	
  {
    "question": "The Drain and Water line heating function is:",
    "choices": [
      "A) A system with electric and pneumatic heaters",
      "B) A system with electric heaters only requiring no actions from the crew",
      "C) A system that is powered only when the airplane is in flight"
    ],
    "correctAnswer": "B",
    "category": "ATA 30"
  },
{
    "question": "The purpose of the fuel vent system is:",
    "choices": [
      "A) To make sure that a flame does not come inside the fuel tanks",
      "B) To keep the pressure of the fuel tanks near the pressure of the outside atmosphere",
      "C) To let fuel in the vent system return to the fuel tanks so the engines or APU can use it"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "The pressure refuel system is controlled by:",
    "choices": [
      "A) The Fuel Quantity Processor Unit (FQPU)",
      "B) The Electrical Load Management System (ELMS)",
      "C) The FQPU and the ELMS"
    ],
    "correctAnswer": "C",
    "category": "ATA 28"
  },
  {
    "question": "Power to open and close the refuel valves is supplied by:",
    "choices": [
      "A) Integrated Refuel Panel (IRP)",
      "B) FQPU",
      "C) ELMS"
    ],
    "correctAnswer": "C",
    "category": "ATA 28"
  },
  {
    "question": "The overfill indication light is a red light that comes on when there is fuel in a surge tank, or when you do the overfill test. The overfill test protection should be performed:",
    "choices": [
      "A) Before refueling",
      "B) During refueling",
      "C) After refueling"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "During the pressure refuel system test, if one or more of the refuel valve indicator lights does not go out, the faulty component is:",
    "choices": [
      "A) The FQIS processor unit",
      "B) The valve itself",
      "C) The ELMS"
    ],
    "correctAnswer": "A",
    "category": "ATA 28"
  },
  {
    "question": "The power to open or close the spar valve is supplied from",
    "choices": [
      "A) The hot battery bus (ELMS) via the engine fire switch",
      "B) The hot battery bus (ELMS) or the engine fuel spar valve battery via the engine fire switch",
      "C) The hot battery bus or the DC standby bus via valve shut-off switches"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "The engine fuel spar valve battery makes sure that the fuel system always has power:",
    "choices": [
      "A) To close engine fuel spar and APU fuel shutoff valves",
      "B) To close engine fuel spar and crossfeed valves",
      "C) To close engine fuel spar and APU fuel isolation valve"
    ],
    "correctAnswer": "A",
    "category": "ATA 28"
  },
  {
    "question": "The fuel system has 11 motor-actuated valves. These valves:",
    "choices": [
      "A) Are all interchangeable",
      "B) Use interchangeable actuators",
      "C) Use the same adapter/shaft"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "A light on lower part of the boost pump control switch shows when:",
    "choices": [
      "A) There is power is not supplied to the pump",
      "B) There is low pressure at the pump outlet",
      "C) The pump is faulty"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "On the crossfeed valve switches, the VALVE light comes on to show the related valve:",
    "choices": [
      "A) Is open",
      "B) Is closed",
      "C) Is in transit, or a valve disagree fault exists"
    ],
    "correctAnswer": "C",
    "category": "ATA 28"
  },
  {
    "question": "APU DC fuel pump operates automatically when:",
    "choices": [
      "A) The APU selector is in the ON position and aircraft is on the ground",
      "B) The APU selector is in the ON position and there is no pressure in the left engine feed manifold",
      "C) The APU selector is in the ON position and there is no pressure in the right engine feed manifold"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "When the jettison system is operating in the Maximum Landing Weight (MLW) mode, the quantity of fuel to remain after it jettisons fuel to the MLW is calculated by:",
    "choices": [
      "A) The fuel quantity processor unit (FQPU)",
      "B) The Electrical Load Management System (ELMS)",
      "C) The Airplane Information Management System (AIMS)"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "The fuel quantity indicating system (FQIS) does these functions:",
    "choices": [
      "A) Measures the fuel volume; Calculates the fuel quantity",
      "B) Measures the fuel volume; Calculates the fuel quantity; Shows when there is water in the tanks",
      "C) Measures the fuel volume; Calculates the fuel quantity; Controls refuel operations; Shows when there is water in the tanks"
    ],
    "correctAnswer": "C",
    "category": "ATA 28"
  },
  {
    "question": "The water detectors are:",
    "choices": [
      "A) Capacitance-type transmitters",
      "B) Vibrating cylinder transducer type",
      "C) Ultrasonic devices type"
    ],
    "correctAnswer": "C",
    "category": "ATA 28"
  },
  {
    "question": "The FQPU has two channels, 1 and 2, that operate:",
    "choices": [
      "A) Independently",
      "B) As backup to each other",
      "C) In parallel processing signals from the same tank units"
    ],
    "correctAnswer": "A",
    "category": "ATA 28"
  },
  {
    "question": "To manually measure fuel quantity with the fuel measuring stick assemblies, you can get airplane attitude (pitch and roll) information:",
    "choices": [
      "A) By using inclinometers (in the nose wheel well) and the leveling scale (in the right main wheel well) only",
      "B) By using the pitch and roll data from the fuel quantity maintenance page 2 only",
      "C) By using inclinometers (in the nose wheel well) and the leveling scale (in the right main wheel well) or the pitch and roll data from the fuel quantity maintenance page 2"
    ],
    "correctAnswer": "C",
    "category": "ATA 28"
  },
  {
    "question": "When fuel enters surge tank, how do you turn off OVERFILL light?",
    "choices": [
      "A) Drain surge tank and move Reset/Normal switch to Normal",
      "B) Drain surge tank and move Reset/Normal switch to Reset",
      "C) Move Reset/Normal switch to Reset"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "When Refueling Panel is powered up, which test do we see?",
    "choices": [
      "A) Overfill test",
      "B) Indicator test",
      "C) System test"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "Which of the following components require fuel tank drain for removal?",
    "choices": [
      "A) X-feed valve",
      "B) Spar valve actuator",
      "C) Main tank boost pump"
    ],
    "correctAnswer": "A",
    "category": "ATA 28"
  },
  {
    "question": "If you want to move fuel from the left main tank to other tanks, you turn on left boost pumps and then open:",
    "choices": [
      "A) Jettison Isolation valve",
      "B) X-feed valve",
      "C) Defuel and X-feed valves"
    ],
    "correctAnswer": "C",
    "category": "ATA 28"
  },
{
    "question": "When both center tank fuel pump switches on P5 panel are selected to ON and APU is the only electric power source",
    "choices": [
      "A) Both pumps will operate",
      "B) Left pump will operate",
      "C) Right pump will operate"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "What component controls the fuel jettison system?",
    "choices": [
      "A) MAT",
      "B) ELMS",
      "C) FQPU"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "Fuel jettison nozzle valve can be opened",
    "choices": [
      "A) Only on the ground",
      "B) Only in the air",
      "C) Any time the switches are selected"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "'ENG S/O VLV' on Fuel Management Maintenance Page is the indication of",
    "choices": [
      "A) Shutoff valve on the HMU",
      "B) Spar valve",
      "C) Isolation valve"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "We can find pitch and roll data in",
    "choices": [
      "A) Nose wheel well",
      "B) Nose wheel well and Fuel Quantity Maintenance Page 2",
      "C) MLG wheel well and Fuel Quantity Maintenance Page 1"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "How do you do center tank fuel sump drain?",
    "choices": [
      "A) Push up on the flex hose connection on the sump drain valve",
      "B) Turn and push up the primary poppet with a fuel sampling tool",
      "C) Remove the sump drain valve"
    ],
    "correctAnswer": "A",
    "category": "ATA 28"
  },
  {
    "question": "How many refueling stations are there on B777?",
    "choices": [
      "A) Only one located at left wing",
      "B) Two stations, one on each wing",
      "C) Two stations on left wing"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "Purpose of water scavenge jet pump?",
    "choices": [
      "A) Prevent water from collecting in the bottom of the tank",
      "B) Take fluid from the tank low point and send it to the pump outlets",
      "C) Scavenge fuel back to fuel tank"
    ],
    "correctAnswer": "A",
    "category": "ATA 28"
  },
  {
    "question": "How do you connect Fuel Feed Manifold and Refueling Manifold?",
    "choices": [
      "A) Open X-feed and Defuel valves",
      "B) Open defuel valve",
      "C) Open X-feed valve"
    ],
    "correctAnswer": "A",
    "category": "ATA 28"
  },
  {
    "question": "Select Jettison ARM switch to ON on the ground will cause",
    "choices": [
      "A) Fuel jettison pumps to operate",
      "B) Fuel jettison pumps and Jettison Isolation valves to operate",
      "C) Nozzle valve to operate"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "What happens when the integrated refuel panel (IRP) initially gets power?",
    "choices": [
      "A) It does an overfill test",
      "B) It does an indicator test",
      "C) It does no tests"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "What indication shows that a refuel valve is open?",
    "choices": [
      "A) Symbol on the fuel synoptic page",
      "B) Light on the integrated refuel panel (IRP)",
      "C) Pressure light on the P5 overhead panel"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "Fuel gets into the left surge tank. The surge tank float switch makes the refuel valves close and makes the overfill light come on. How do you make the overfill light go off?",
    "choices": [
      "A) The fuel quantity processor unit (FQPU) turns the overfill light off automatically",
      "B) You drain the surge tank and move the RESET/NORMAL switch to NORMAL",
      "C) You drain the surge tank and move the RESET/NORMAL switch to RESET"
    ],
    "correctAnswer": "C",
    "category": "ATA 28"
  },
  {
    "question": "When you refuel the airplane, what happens when you push the SYSTEM TEST switch on the integrated refuel panel (IRP)?",
    "choices": [
      "A) The refuel valves close two at a time",
      "B) The refuel system goes into manual mode",
      "C) The refuel valves all close at the same time"
    ],
    "correctAnswer": "A",
    "category": "ATA 28"
  },
  {
    "question": "You must defuel the fuel tank to remove the:",
    "choices": [
      "A) Engine fuel spar valve actuator",
      "B) Fuel crossfeed valve",
      "C) Main fuel tank motor impeller of a boost pump"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "With all boost pumps switches off, which boost pump can automatically operate?",
    "choices": [
      "A) Left aft",
      "B) Left forward",
      "C) Right aft"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "What type of sensors does the fuel quantity processor unit use to measure fuel height?",
    "choices": [
      "A) Magnetic field floats",
      "B) Ultrasonic transmitter units",
      "C) Capacitance measurement units"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "Where is the engine fuel spar valve battery?",
    "choices": [
      "A) On the front spar of the left wing",
      "B) In a flight deck stowage bin",
      "C) In the OPAS card file"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "During APU starts, the APU dc fuel pump operates automatically when:",
    "choices": [
      "A) The ground service bus has no power",
      "B) There is no pressure in the left engine feed manifold",
      "C) The boost pump switches are off"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "You will use the boost pumps to defuel (remove all the fuel from) the left main tank. What valves must you open?",
    "choices": [
      "A) Jettison isolation valves",
      "B) Defuel valve and a crossfeed valve",
      "C) Defuel valve and the APU isolation valve"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "What controls the main tank jettison pumps?",
    "choices": [
      "A) Override/jettison pump switches",
      "B) ELMS",
      "C) Fuel-to-remain-selector"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "What fuel tank component does not send signals to the fuel quantity processor unit (FQPU)?",
    "choices": [
      "A) Densitometer",
      "B) Fuel temperature sensor",
      "C) DC pump pressure switch"
    ],
    "correctAnswer": "C",
    "category": "ATA 28"
  },
  {
    "question": "How does a densitometer work?",
    "choices": [
      "A) With a vibration detector",
      "B) With a capacitance detector",
      "C) With a float in a special material"
    ],
    "correctAnswer": "A",
    "category": "ATA 28"
  },
  {
    "question": "The fuel quantity processor unit (FQPU) is:",
    "choices": [
      "A) On the E5 shelf (Fwd Cargo)",
      "B) On the E6 shelf (Aft Cargo)",
      "C) On the E2 shelf (Main Equipment Center)"
    ],
    "correctAnswer": "A",
    "category": "ATA 28"
  },
  {
    "question": "The purpose of the refuel manifold drain valve is:",
    "choices": [
      "A) For jettison, when the vacuum relief valve is open",
      "B) To remove the fuel from the refuel manifold",
      "C) To drain the center tank"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "The Boeing 777 fuel system has:",
    "choices": [
      "A) Three fuel tanks and two reserves tanks in the lower lobe area",
      "B) Three fuel tanks, in the Left and Right wing and in the center wing section",
      "C) Three fuel tanks and a trim tank in the stabilizer"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "Which of the items listed below is NOT determined by the Fuel Quantity Indicating System?",
    "choices": [
      "A) Fuel Quantity",
      "B) Fuel Type",
      "C) Fuel Density"
    ],
    "correctAnswer": "B",
    "category": "ATA 28"
  },
  {
    "question": "How many tank probes are in the main tank of the 777-300 ER?",
    "choices": [
      "A) 25",
      "B) 23",
      "C) 28"
    ],
    "correctAnswer": "C",
    "category": "ATA 28"
  },
  {
    "question": "You will use the defuel valve to?",
    "choices": [
      "A) Defuel or jettison fuel tanks",
      "B) Defuel or refuel the tanks",
      "C) Defuel or to move fuel from one tank to another"
    ],
    "correctAnswer": "C",
    "category": "ATA 28"
  },
  {
    "question": "The purpose of the surge tank float switch is to?",
    "choices": [
      "A) Alert the ground crew in the event of fuel imbalance during refueling",
      "B) Alert the ground crew in the event of water detection in a surge tank",
      "C) Stop the refueling if some fuel comes in the surge tank"
    ],
    "correctAnswer": "C",
    "category": "ATA 28"
  },	
{
    "question": "On the B777, how many ASCP(s) are available?",
    "choices": [
        "A) 2",
        "B) 3",
        "C) 4"
    ],
    "correctAnswer": "A",
    "category": "ATA 36"
},
{
    "question": "What are the different air sources?",
    "choices": [
        "A) Engines + APU.",
        "B) APU + ASU.",
        "C) Engines + ASU + APU."
    ],
    "correctAnswer": "C",
    "category": "ATA 36"
},
{
    "question": "What are the 3 pneumatic system modes?",
    "choices": [
        "A) Digital - secondary + direct.",
        "B) Digital - analogic - pneumatic.",
        "C) Primary - secondary - pneumatic."
    ],
    "correctAnswer": "B",
    "category": "ATA 36"
},
{
    "question": "On the P5 'bleed air panel' what are the normal positions of the control switches?",
    "choices": [
        "A) Released and 'off'.",
        "B) Flush and 'on'.",
        "C) ENG 'off' but all others to 'on'."
    ],
    "correctAnswer": "B",
    "category": "ATA 36"
},
{
    "question": "Who control the right isolation valve?",
    "choices": [
        "A) Left ASCP.",
        "B) Right ASCP.",
        "C) Both ASCP."
    ],
    "correctAnswer": "C",
    "category": "ATA 36"
},
{
    "question": "The left ASCP can override and control the right engine's valves:",
    "choices": [
        "A) Faux",
        "B) Vrai"
    ],
    "correctAnswer": "A",
    "category": "ATA 36"
},
{
    "question": "The HPSOV is totally closed during...",
    "choices": [
        "A) Engine high power.",
        "B) Engine idle power.",
        "C) Engine deceleration."
    ],
    "correctAnswer": "A",
    "category": "ATA 36"
},
{
    "question": "On GE90-115, the HPFAC is located:",
    "choices": [
        "A) Under the fan hub.",
        "B) On the fan case just next to the PRSOVC.",
        "C) On the fan case just next to the oil tank."
    ],
    "correctAnswer": "C",
    "category": "ATA 36"
},
{
    "question": "The FAMV can be locked close for:",
    "choices": [
        "A) Maintenance removal.",
        "B) MEL dispatch.",
        "C) Ground test."
    ],
    "correctAnswer": "A",
    "category": "ATA 36"
},
{
    "question": "What is the purpose of the DVV (duct-vent-valve)?",
    "choices": [
        "A) Over temperature protection.",
        "B) Over flow protection.",
        "C) Over pressure protection."
    ],
    "correctAnswer": "C",
    "category": "ATA 36"
},
{
    "question": "Which components are made to perform 'the pneumatic mode'?",
    "choices": [
        "A) The left and right ASCP(s).",
        "B) The PRSOVC(s) and HPFAC(s).",
        "C) The HPSOV(s) and FAMV(s)."
    ],
    "correctAnswer": "B",
    "category": "ATA 36"
},
{
    "question": "On the GE90-115, the CAC purpose is to:",
    "choices": [
        "A) Cool the PRSOVC air muscle pressure only.",
        "B) Cool PRSOVC + HPFAC air + EAIC muscle pressure.",
        "C) Cool the PRSOVC + HPFAC air muscle pressure only."
    ],
    "correctAnswer": "B",
    "category": "ATA 36"
},
{
    "question": "The 4 isolation valves are identicals interchangeable:",
    "choices": [
        "A) Vrai",
        "B) Faux"
    ],
    "correctAnswer": "A",
    "category": "ATA 36"
},
{
    "question": "What is the normal position of the center isolation valve during cruise?",
    "choices": [
        "A) Open",
        "B) Regulating",
        "C) Close"
    ],
    "correctAnswer": "C",
    "category": "ATA 36"
},
{
    "question": "During cruise (without any failure), what is the PRSOV's position?",
    "choices": [
        "A) Fully open",
        "B) Regulating",
        "C) Fully close"
    ],
    "correctAnswer": "B",
    "category": "ATA 36"
},
{
    "question": "If both ASCP(s) totally fail during cruise (but there's still a correct pressure inside the manifold)...",
    "choices": [
        "A) The 4 isolation valves go to their 'fail safe open' position.",
        "B) The 4 isolation valves go to their 'fail safe close' position.",
        "C) The 4 isolation valves go to their 'spring loaded close' position."
    ],
    "correctAnswer": "A",
    "category": "ATA 36"
},

{
    "question": "Which sensors give the duct pressure information on the ECS data blocks?",
    "choices": [
        "A) The IP sensors.",
        "B) The ASCP(s) calculation by average.",
        "C) The manifold pressure sensors."
    ],
    "correctAnswer": "C",
    "category": "ATA 36"
},
{
    "question": "The FAMV and PRSOV positions informations are available on:",
    "choices": [
        "A) The status and synoptic pages.",
        "B) The synoptic and maintenance pages.",
        "C) The maintenance page only."
    ],
    "correctAnswer": "C",
    "category": "ATA 36"
},
{
    "question": "The ASU maximum operating limits according to AMM are:",
    "choices": [
        "A) 50 PSIG and/or 232°C.",
        "B) 50 PSIG and/or 10 lbs/sec.",
        "C) 10 lbs/sec and/or 190°C."
    ],
    "correctAnswer": "A",
    "category": "ATA 36"
},
{
    "question": "During normal operation (without failure), if an isol. valve closes, the 'close light' will illuminate on the P5?",
    "choices": [
        "A) Vrai",
        "B) Faux"
    ],
    "correctAnswer": "B",
    "category": "ATA 36"
},
{
    "question": "Where is located the IP sensor on GE90-115?",
    "choices": [
        "A) Under the fan hub.",
        "B) On the fan case.",
        "C) Inside the engine pylon."
    ],
    "correctAnswer": "B",
    "category": "ATA 36"
},
{
    "question": "What are the air source priorities during 'engine start' on ground?",
    "choices": [
        "A) 1: Engine - 2: ASU - 3: APU",
        "B) 1: ASU - 2: Engine - 3: APU",
        "C) 1: ASU - 2: APU - 3: Engine"
    ],
    "correctAnswer": "C",
    "category": "ATA 36"
},
{
    "question": "Per engine the dedicated ASCP uses:",
    "choices": [
        "A) 3 sensors",
        "B) 4 sensors",
        "C) 5 sensors"
    ],
    "correctAnswer": "B",
    "category": "ATA 36"
},
{
    "question": "Where is located the precooler?",
    "choices": [
        "A) On the fan hub.",
        "B) On the fan case.",
        "C) On top of the engine."
    ],
    "correctAnswer": "C",
    "category": "ATA 36"
},
    {
        "question": "Which ATA chapter gives an overview of windows structure?",
        "choices": [
            "A) Chapter 56",
            "B) Chapter 57",
            "C) Chapter 58"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Which ATA chapter gives an overview of pylon structure?",
        "choices": [
            "A) Seriously? There are questions about chapters?",
            "B) Chapter 54",
            "C) Chapter 55"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "Landing gears doors are made of:",
        "choices": [
            "A) Fiberglass/hybrid CFRP",
            "B) Toughened CFRP",
            "C) CFRP"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Wing-to-body fairing is made of:",
        "choices": [
            "A) Fiberglass/hybrid CFRP",
            "B) Toughened CFRP",
            "C) CFRP"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Node radome is made of:",
        "choices": [
            "A) CFRP",
            "B) Aluminium",
            "C) Fiberglass"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Torque box in the vertical stabilizer is made of:",
        "choices": [
            "A) Toughened CFRP",
            "B) CFRP",
            "C) Fiberglass/hybrid CFRP"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Select one disadvantage about using carbon material:",
        "choices": [
            "A) It is heavier than aluminium",
            "B) Drilling it is a health hazard",
            "C) It can't be painted"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "Slats are made of:",
        "choices": [
            "A) Aluminium",
            "B) CFRP",
            "C) Titanium"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Floor beams are made of:",
        "choices": [
            "A) Aluminium",
            "B) Toughened CFRP",
            "C) Titanium"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "What is the 'water line' (WL)?",
        "choices": [
            "A) It's the lateral measurement in inches from the center line of the airplane",
            "B) It's the height measurement in inches from a reference below the airplane",
            "C) It's a length measurement in inches from a zero datum"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "What is the buttock line (BL)?",
        "choices": [
            "A) It's the lateral measurement in inches from the center line of the airplane",
            "B) It's the height measurement in inches from a reference below the airplane",
            "C) It's a length measurement in inches from a zero datum"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "The fuselage is a:",
        "choices": [
            "A) Biconvex dissymmetric structure",
            "B) Monocoque structure",
            "C) Semi-monocoque structure"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Zero datum is:",
        "choices": [
            "A) 92.5 inches forward of the nose fuselage",
            "B) 92.5 inches aft of the nose fuselage",
            "C) The very forward part of radome"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "'Section 41' is the first aircraft longitudinal section...",
        "choices": [
            "A) Vrai",
            "B) Faux"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "What is the APU's section?",
        "choices": [
            "A) Section 46",
            "B) Section 47",
            "C) Section 48"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "What is the main landing gears' section?",
        "choices": [
            "A) Section 44",
            "B) Section 45",
            "C) Section 46"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "On the B777-300 there are more sections because of the added length...",
        "choices": [
            "A) Vrai",
            "B) Faux"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "Opening the radome gives access to:",
        "choices": [
            "A) The weather radar",
            "B) The VOR antennas",
            "C) The HF couplers"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Can the radome be held and locked open?",
        "choices": [
            "A) No it is not possible",
            "B) Yes using hold open fittings",
            "C) Yes using an additional locking tool"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "Wings frames and stringers are made of:",
        "choices": [
            "A) CFRP",
            "B) Titanium alloy",
            "C) Aluminium"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Wing fairings are made of:",
        "choices": [
            "A) Fiberglass/hybrid CFRP",
            "B) CFRP",
            "C) Aluminium"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "The impact resistant access doors are used to:",
        "choices": [
            "A) Protect the fuel tanks in case of engine burst",
            "B) Improve the wing rigidity",
            "C) Protect the fuel tanks against leaks"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "The 4 pylon/strut openable doors permits to access to:",
        "choices": [
            "A) Center hydraulic bay",
            "B) Left or right hydraulic bay",
            "C) Engine extinguishing bottle"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "The forward and aft engine mounts are located:",
        "choices": [
            "A) Inside the engine",
            "B) On the wing part",
            "C) Inside the engine strut/pylon"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "In case of ditching, the engine can be disconnected from the pylon/strut because of the:",
        "choices": [
            "A) Shear rivets",
            "B) Fuse pins",
            "C) Hi-locks"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "To access rudder's PCU you better open access doors from the:",
        "choices": [
            "A) Left hand side of the vertical stabilizer",
            "B) Right hand side of the vertical stabilizer",
            "C) Either left or right side of the vertical stabilizer"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "On the B777, why windows number 2 can be openable?",
        "choices": [
            "A) They permit to cool the cockpit in case of hot weather",
            "B) They give a larger view during taxiing",
            "C) They give an emergency escape"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "How many windows in the flight deck can be reheated?",
        "choices": [
            "A) 2",
            "B) 4",
            "C) 6"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "How the windows number 2 are monitored for correct closing/locking?",
        "choices": [
            "A) By an alert switch on the latch handle",
            "B) By an alert switch on the latch number 4",
            "C) By an alert switch on the carriage"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "If the 2 openable windows are not close properly, on the EICAS the pilots will see:",
        "choices": [
            "A) Advisory message 'WINDOWS'",
            "B) Caution message 'WINDOWS'",
            "C) Two advisory messages: 'WINDOW LEFT' and 'WINDOW RIGHT'"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "How many types of spring clips are used to hold the passengers windows assembly?",
        "choices": [
            "A) 1",
            "B) 2",
            "C) 3"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "The length of the spring clips types depends on:",
        "choices": [
            "A) The torque to be applied",
            "B) The location of the window in the fuselage",
            "C) The number of panes"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "The SRM is a customized manual for each airlines...",
        "choices": [
            "A) Vrai",
            "B) Faux"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "Chapter 58 concern:",
        "choices": [
            "A) Windows structure",
            "B) Wings structure",
            "C) Doesn't exist"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Passenger / crew doors are:",
        "choices": [
            "A) Butterfly type",
            "B) Plug type",
            "C) Scissor doors type"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "Cargo doors are located on:",
        "choices": [
            "A) The left-hand side of the fuselage",
            "B) The right-hand side of the fuselage",
            "C) The right-hand side of the fuselage but the bulk cargo door is on the..."
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "On the B777-300, all passenger doors are equipped with an escape slide:",
        "choices": [
            "A) Vrai",
            "B) Faux"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "EPAS system is used to:",
        "choices": [
            "A) Open the door in emergency",
            "B) Open the door normally",
            "C) Deploy and inflate the escape slide"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "On the 'door auto/manual switch' on the (ASP) P89, if 'auto' is flashing, that means:",
        "choices": [
            "A) All pax doors are in manual",
            "B) All pax doors are 'armed/auto'",
            "C) At least one pax door is 'armed/auto'"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Vent door mechanism is used to:",
        "choices": [
            "A) Block the door opening mechanism in case of 'high delta pressure'",
            "B) Draining rainwater in rainy weather",
            "C) Helps the door lifting because of the door weight"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Opening the pax door from the outside door handle will automatically disarm the escape slide mechanism:",
        "choices": [
            "A) Vrai",
            "B) Faux"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Passenger door has:",
        "choices": [
            "A) 14 door stops",
            "B) 16 door stops",
            "C) 18 door stops"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "The programming mechanism chain is used to:",
        "choices": [
            "A) Correctly aligns the door to the A/C during opening and closing",
            "B) Make the door open in EPAS opening emergencies",
            "C) Both answers"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "To lift upward the door, the two systems involved are:",
        "choices": [
            "A) The primary lift and the muscular force",
            "B) The primary lift and the linear lift",
            "C) The primary lift and the gas spring actuator"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "If the vent door interlock rod is broken:",
        "choices": [
            "A) The door can be still open or closed normally",
            "B) The door can be closed but cannot be opened anymore",
            "C) The door can be opened but cannot be closed anymore"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "The flight lock actuator is used to lock the door:",
        "choices": [
            "A) On ground only if the door is 'armed/auto'",
            "B) If aircraft speed is higher than 80 kts",
            "C) During flight only"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "The push/pull cable connected on the mode select handle is used to:",
        "choices": [
            "A) Disarm the mode select handle if the door is opened from the outside",
            "B) Latch or unlatch the escape slide's girt bar",
            "C) Latch the torque tube if the door is not correctly closed"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "If the Girt Bar is latched on the floor fittings, the crew can see:",
        "choices": [
            "A) Two black indication flags",
            "B) Two white indication flags",
            "C) Two yellow indication flags"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "To safety the EPAS opening squib on door '4 right':",
        "choices": [
            "A) The EPAS battery pack switch must be set to disarm",
            "B) The EPAS battery pack switch must be set to armed",
            "C) You have to insert lock pins on the programming mechanism"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "On the B777-300 door No. 3 left (or right), how many battery packs should be deactivated for maintenance?",
        "choices": [
            "A) 1",
            "B) 2",
            "C) 3"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "You can find an emergency locator transmitter inside one typical escape slide pack:",
        "choices": [
            "A) Vrai",
            "B) Faux"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Pulling the cable from the backup battery power switch (on the door frame) will fire:",
        "choices": [
            "A) The EPAS + SARD + slide squibs",
            "B) The EPAS and SARD squibs",
            "C) The SARD and slide deploy squibs"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "FWD and AFT large cargo doors are:",
        "choices": [
            "A) Plug type and identical",
            "B) Non-plug type and non-identical",
            "C) Non-plug type but identical"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Cargo doors are operated:",
        "choices": [
            "A) Pneumatically",
            "B) Electrically",
            "C) Hydraulically"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "To open a cargo door, the first action to perform is:",
        "choices": [
            "A) To move the electrical switch to open",
            "B) To move the lock handle to open the vent door",
            "C) To unlock the 8 latches"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "How many sockets/plugs can be found in the cargo compartment of a B777?",
        "choices": [
            "A) 2",
            "B) 3",
            "C) 4"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "How many latches should be opened to unlatch the cargo door properly?",
        "choices": [
            "A) 8 latches (4 pairs) + 2 pull-in hooks.",
            "B) 8 latches (4 pairs).",
            "C) 2 pull-in hooks."
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "To close the lock handle, the 'door latched light' on the P43 control panel must be:",
        "choices": [
            "A) Orange.",
            "B) Off.",
            "C) Green."
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "During operations, which control switch always gets the control priority?",
        "choices": [
            "A) The internal control switch.",
            "B) The external control switch.",
            "C) Neither of the two."
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Bulk cargo door is a plug type:",
        "choices": [
            "A) Vrai",
            "B) Faux"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "The forward access door:",
        "choices": [
            "A) Is a non-plug type.",
            "B) Is monitored by the PSEU(s).",
            "C) Gives access to the M.E.C."
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "If one of the off wing escape slide compartment doors opens, the pilots don't get any information about that:",
        "choices": [
            "A) Vrai",
            "B) Faux"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "From the CSCP the cabin crew can check if the PAX doors are 'armed/disarmed':",
        "choices": [
            "A) Yes always.",
            "B) No never.",
            "C) It depends if the option is available on the aircraft."
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
{
        "question": "Where do you find the information for basic handling of the structure?",
        "choices": [
            "A) AMM (Aircraft Maintenance Manual)",
            "B) NTM (No-destructive Test Method)",
            "C) SRM (Structure Repair Manual)"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "How many SRM can we find for B777?",
        "choices": [
            "A) One for all B777",
            "B) One SRM for each ATA chapter",
            "C) Two, one for B777-200 and one for B777-300"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Which manual gives damage tolerance on the airplane structure?",
        "choices": [
            "A) AMM (aircraft maintenance manual)",
            "B) MEL/CDL (minimum equipment list/ component deviation guide)",
            "C) SRM (structural repair manual)"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "How many ATA chapters are there in the SRM?",
        "choices": [
            "A) 100",
            "B) 1",
            "C) 7"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "What's the meaning of “LBL” and “RBL” in the aircraft breakdown?",
        "choices": [
            "A) “LBL” is the upper part and “RBL” is the lower part of water line",
            "B) “LBL” is the left-hand side and “RBL” is the right-hand side of buttock line",
            "C) “LBL” is the left-hand side and “RBL” is the right-hand side of water line"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "In the SRM, where can we find allowable damage limit for the fuselage?",
        "choices": [
            "A) In the 53 ATA chapter",
            "B) In the 54 ATA chapter",
            "C) In the 51 ATA chapter"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Which information can we find in the SRM?",
        "choices": [
            "A) Structure identification, allowable damage, repairs",
            "B) Non normal check lists",
            "C) Non-destructive tests, standard practices"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Which information is given by the fuselage station diagram and cross-section diagram?",
        "choices": [
            "A) Reference system to find the different airplane components",
            "B) External time limited repair",
            "C) Allowable damage limits"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Find the right order to do an evaluation of damage below a passenger door?",
        "choices": [
            "A) 1) Identification of chapter. 2) identification of station. 3) identification of section. 4) allowable damage limits.",
            "B) 1) Identification of chapter. 2) identification of section. 3) allowable damage limits.",
            "C) 1) Effectivity of aircraft. 2) identification of chapter. 3) identification of station. 4) identification of section. 5) allowable damage limits."
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Where can we find effectivity of the aircraft in the SRM?",
        "choices": [
            "A) Front matter chapter",
            "B) ATA 57 chapter",
            "C) ATA 51 chapter"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Which ATA chapters can we find in the SRM?",
        "choices": [
            "A) 05;06;07;11;12;51; 52; 53; 54; 55; 56; 57; 58; 59",
            "B) 00; 06; 51",
            "C) 51; 52; 53; 54; 55; 56; 57"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Which ATA gives standard practices and structure general in the SRM?",
        "choices": [
            "A) 57",
            "B) 38",
            "C) 51"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
{
        "question": "Which passenger entry doors are plug type door?",
        "choices": [
            "A) All doors",
            "B) Left side doors",
            "C) Right side doors"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "What should you do first when closing a passenger entry door?",
        "choices": [
            "A) Release hold open device",
            "B) Disarm the door",
            "C) Pull the door in"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Flight lock mechanism is used to:",
        "choices": [
            "A) Lock the door when airplane is in the air",
            "B) Lock the door when airplane is parked",
            "C) Lock the door when airspeed is above 80 knots"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Two positions of the passenger door mode handle are:",
        "choices": [
            "A) ARMED and DISARMED",
            "B) AUTO and MANUAL",
            "C) LOCKED and UNLOCKED"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "Which cargo door on VNA owned aircraft is large size?",
        "choices": [
            "A) Forward",
            "B) Aft",
            "C) Both forward and aft"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "You open and close forward and aft cargo doors using:",
        "choices": [
            "A) Electric power",
            "B) Hydraulic power",
            "C) Pneumatic power"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "When closing the forward cargo door, which light should be on before you can use the lock handle to lock the door?",
        "choices": [
            "A) DOOR CLOSED light",
            "B) DOOR IN light",
            "C) DOOR LATCHED light"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "What should you do before opening the forward cargo door using the internal switch?",
        "choices": [
            "A) Unlock the door using the internal release lever",
            "B) Unlock the door using the external catch release handle",
            "C) Both are correct"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "How many vent doors are installed on the forward cargo door?",
        "choices": [
            "A) 1",
            "B) 2",
            "C) 4"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Which of the following cannot be used to check if the cargo door is open?",
        "choices": [
            "A) EICAS upper display",
            "B) EICAS status page",
            "C) Door synoptic page"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "Bulk cargo door is open and close using:",
        "choices": [
            "A) Electric motor",
            "B) Hydraulic motor",
            "C) Counter balance mechanism"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Which passenger entry door status cannot be shown on CSCP?",
        "choices": [
            "A) LOCKED",
            "B) UNLOCKED",
            "C) ARMED"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Pressure seal depressors on the forward side of passenger doors 1L and 1R have holes:",
        "choices": [
            "A) To help control air noise",
            "B) To pull thru the seal",
            "C) To help easy installation"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "The door flight lock mechanism:",
        "choices": [
            "A) Latches the lock mechanism closed when airplane speed more than 100 kts",
            "B) Locks the latch mechanism closed when airplane is in the air",
            "C) Locks the latch mechanism closed when airplane speed is more than 80 kts"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "You cannot deploy the door slide raft by opening the door from outside. This is because:",
        "choices": [
            "A) AIMS monitors the door switches only from inside the airplane",
            "B) The mode selector goes to MANUAL if the external handle is pulled",
            "C) EPAS does not work"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "Purpose of vent door mechanism on passenger entry door is to:",
        "choices": [
            "A) Release pressurization and vent positive cabin pressure",
            "B) Keep door unlatched and vent positive cabin pressure",
            "C) Release pressurization and keep door latched when cabin is pressurized"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "You deactivate Emergency Power Assist System (EPAS) by:",
        "choices": [
            "A) A switch on the EPAS actuator",
            "B) A switch on EPAS battery pack",
            "C) A safety pin through EPAS actuator"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "After the EPAS has fired, can you immediately close the door?",
        "choices": [
            "A) No. EPAS actuator takes 5 min to bleed down the pressure",
            "B) Yes. EPAS actuator disengages the hinge lock mechanism",
            "C) No. EPAS actuator keeps the door open until a new slide/raft is installed"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Can you open the forward cargo door when there is no electrical power?",
        "choices": [
            "A) Yes. There are latch manual drive and lift manual drive",
            "B) Yes. There are lift manual drive and manual lock handle",
            "C) No. Lift manual drive and latch manual drive operate only by electric power"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "What is the purpose of the lock mechanism in the forward cargo door system?",
        "choices": [
            "A) The lock mechanism prevents the forward cargo from opening when there is a negative ΔP",
            "B) The lock mechanism latches the cargo door closed when the cargo compartment is pressurized",
            "C) The lock mechanism holds the cargo door main latch cam in the latched position"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Purpose of flight compartment door pressure sensor is to:",
        "choices": [
            "A) Release the door latch when the evacuation system is activated",
            "B) Release the door latch when there is a rapid decompression in the cabin",
            "C) Release the door latch when there is a rapid decompression in the cockpit"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Do all doors give their status to PSEU?",
        "choices": [
            "A) Yes. PSEU uses these signals for control and indication in the cockpit",
            "B) No. Only the doors that go through the pressurized structure of the airplane",
            "C) Yes. The pilot needs to know all doors' status before take-off"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "All cargo doors are located on:",
        "choices": [
            "A) The left-hand side of the airplane",
            "B) The right-hand side of the airplane",
            "C) Both left and right-hand side of the airplane"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "Which of the following is necessary for the passenger entry door emergency power assist system (EPAS) to activate?",
        "choices": [
            "A) Emergency evacuation system armed.",
            "B) Battery bus energized.",
            "C) Mode select lever in the ARMED/AUTO position and the interior handle to the open position."
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "What is the first action you must do to electrically operate the forward cargo compartment door?",
        "choices": [
            "A) Release the lock handle.",
            "B) Energize the door control relay.",
            "C) Manually operate the lift manual drive."
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Which one of the following will stop passenger entry door handle movement if cabin pressurization is too high to safely open the door?",
        "choices": [
            "A) The door handle mechanism.",
            "B) The vent door mechanism.",
            "C) The mode select mechanism."
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "How can you check the amount of pressure in the inflation cylinder for the escape slide pack?",
        "choices": [
            "A) Look through the view hole on the bustle.",
            "B) Look through the view hole on the exterior of the door.",
            "C) Use the cabin management system."
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Which component prevents the cargo door from unlocking when the cargo compartment is pressurized?",
        "choices": [
            "A) Vent door.",
            "B) Latch pin.",
            "C) Pull-in hook."
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "The passenger door closed and locked information is monitored by means of?",
        "choices": [
            "A) A single micro switch.",
            "B) 2 proximity sensors.",
            "C) Landing gear control interface unit."
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "When you open the cabin door from the outside with the slide system armed?",
        "choices": [
            "A) The locking mechanism is blocked.",
            "B) Only the girt bar is removed from the floor fittings.",
            "C) The slide mechanism disarms."
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "In a passenger door assembly, what causes the actuator to deploy the door in case of emergency?",
        "choices": [
            "A) The pressure contained in the escape slide bottle.",
            "B) The external handle when it is used.",
            "C) The nitrogen bottle and the percussion lever after operation of the internal door handle."
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "How is the operator warned when there is a residual pressure in the cabin?",
        "choices": [
            "A) By a white flashing light.",
            "B) By a vent door mechanism.",
            "C) By the hold open mechanism."
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "How many adjustable stops are fitted on the type 1 door?",
        "choices": [
            "A) 10 stops.",
            "B) 16 stops.",
            "C) 12 stops."
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "What is the purpose of the programming mechanism chain?",
        "choices": [
            "A) Controls the rate at which the door opens and closes.",
            "B) Correctly aligns the door to the airplane as the door opens and closes.",
            "C) Holds the door in the full open position."
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "What happens when the doors are opened from outside?",
        "choices": [
            "A) The white light comes ON.",
            "B) The mode select handle moves to Disarmed if it is Armed.",
            "C) The safety switch on the battery EPAS moves to disarm."
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "What is the purpose of the flight lock mechanism?",
        "choices": [
            "A) Lock the vent door in the closed position.",
            "B) Lock the latch mechanism closed when the airplane is in the air.",
            "C) Lock the latch mechanism closed when the airspeed is 80 knots or more."
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "How many battery packs does the EPAS on door 3 (over wing) on B777-300 have?",
        "choices": [
            "A) One, like the other doors.",
            "B) Two, one EPAS battery, and one over-wing door back-up battery.",
            "C) Three, one EPAS battery, one SARD battery and one over-wing door back-up battery."
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "How many safety pins must be installed on the slide/raft when you replace it?",
        "choices": [
            "A) One on the escape slide pack inflation cylinder.",
            "B) Two, one on the escape slide raft inflation cylinder and one on the escape slide pack girt release.",
            "C) None, you just put the safety switch of the EPAS on the safety position."
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "What happens in case of vent door mechanism interlock rod failure?",
        "choices": [
            "A) You can open the door but you can't go back to the closed position after.",
            "B) You can't open the door, so you must remove the hinge cover to get access to the vent door mechanism.",
            "C) The flight lock actuator is energized to keep the door in the closed position."
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
{
        "question": "What structure is B777 fuselage structure?",
        "choices": [
            "A) Semi-monocoque",
            "B) Monocoque",
            "C) Combination between monocoque and semi-monocoque"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "How many pressure bulkheads are there in the fuselage?",
        "choices": [
            "A) 3",
            "B) 4",
            "C) 2"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "When you open the radome, it is",
        "choices": [
            "A) Detached from the fuselage",
            "B) Held by a hinge",
            "C) Opened upward"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "Wing-to-body fairing is made of",
        "choices": [
            "A) Steel",
            "B) Aluminum",
            "C) Composite"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "The sound dampening angles are attached to",
        "choices": [
            "A) Fuselage skin",
            "B) Frames and stringers",
            "C) Wing-to-body fairing"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "The scuff plates are attached to",
        "choices": [
            "A) Passenger entry door thresholds",
            "B) Passenger entry door cut-out",
            "C) Passenger entry door hinge"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "When you open the nose radome, wind velocity must be",
        "choices": [
            "A) Less than 65kts",
            "B) Less than 45kts",
            "C) Less than 80kts"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "Lightning diverter strips in the nose radome deterioration can cause",
        "choices": [
            "A) Weather radar incorrect operation",
            "B) Lightning to strike the radome",
            "C) Radio noise interference"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "The fuselage sections 41 through 48 are",
        "choices": [
            "A) Bolted together",
            "B) Attached to each other by threads",
            "C) Riveted to each other"
        ],
        "correctAnswer": "C",
        "category": "ATA 50's"
    },
    {
        "question": "Where can you find the keel beam?",
        "choices": [
            "A) Under the forward cargo compartment",
            "B) Between the two main landing gear wheel wells",
            "C) Under the aft cargo compartment"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "What fuselage section is just behind the nose radome?",
        "choices": [
            "A) Section 49",
            "B) Section 41",
            "C) Section 43"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "What fuselage section contain AFT pressure bulkhead (separation between passengers cabin and the stabilizer compartment)?",
        "choices": [
            "A) Section 40",
            "B) Section 47",
            "C) Section 41"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
    {
        "question": "The Boeing B 777 fuselage structure is?",
        "choices": [
            "A) Semi monocoque type",
            "B) Fiber glace type",
            "C) Paper and wood type"
        ],
        "correctAnswer": "A",
        "category": "ATA 50's"
    },
    {
        "question": "The Boeing 777 fuselage is made of?",
        "choices": [
            "A) 1 section",
            "B) 6 or 8 sections",
            "C) Chrome-plated steel"
        ],
        "correctAnswer": "B",
        "category": "ATA 50's"
    },
{
    "question": "What is purpose of engine strut fire seal?",
    "choices": [
      "A) To make a seal between the side of the strut and the thrust reversers",
      "B) To make a seal between the strut and the upper fan case",
      "C) To make a seal between the strut and the fan cowls"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "What is purpose of strut firewall?",
    "choices": [
      "A) To prevent damage to the bottom of the strut caused by too much heat",
      "B) To prevent damage to the side of strut caused by too much heat",
      "C) To prevent damage to the forward of strut caused by too much cool"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "Where is located the strut firewall?",
    "choices": [
      "A) On the bottom of the strut",
      "B) On the side of the strut",
      "C) On the thrust reverser upper parts"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "What is correct to unblock the forward strut drain?",
    "choices": [
      "A) By airflow applied to the drain outlet",
      "B) By airflow applied to the drain inlet",
      "C) By vacuum applied to the drain outlet"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "What can use to unblock the forward strut drain?",
    "choices": [
      "A) Airflow",
      "B) Piece of locking wire",
      "C) A or B"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "How to perform the leak check of the strut aft upper spar?",
    "choices": [
      "A) Open access panel, apply water onto, examine the lower side for leak and repair as necessary",
      "B) Pressurize the area by nitrogen to find out leak and repair as necessary",
      "C) Pressurize the area by air to find out leak and repair as necessary"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "What is correct for the strut access doors?",
    "choices": [
      "A) None of doors is pressure relief door",
      "B) All doors are pressure relief doors",
      "C) Some doors are pressure relief doors, all the other are not pressure relief doors"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "What is not correct for the strut access doors?",
    "choices": [
      "A) All doors are behind the thrust reverser cowls so these doors are not required in the aerodynamic smoothness limits",
      "B) All doors are in the air stream so these doors are required in the aerodynamic smoothness limits",
      "C) A and B"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "What is correct for the strut aft fairing access doors?",
    "choices": [
      "A) There are two doors",
      "B) There are four doors, each door has three latches",
      "C) There are four door, each door has two latches and two hinges"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "The strut aft fairing access doors are hold in opened position by meaning of",
    "choices": [
      "A) The locking pin on the upper hinge",
      "B) The hold open rod",
      "C) The hold open device on the lower hinge"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
{
    "question": "Where are the hinges of the strut aft fairing door located?",
    "choices": [
      "A) On the door fwd edge",
      "B) On the door aft edge",
      "C) On the door upper edge"
    ],
    "correctAnswer": "B",
    "category": "ATA 50's"
  },
  {
    "question": "How is the strut attached to the wing?",
    "choices": [
      "A) By upper link, two side links and two aft upper spar fittings",
      "B) By diagonal brace",
      "C) All above A and B"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "When removing the strut access door we make sure",
    "choices": [
      "A) Use a hand tool only",
      "B) Loosen the latch bolts until the slot indicators turned approximately about 90 degrees counterclockwise from the lock position",
      "C) A and b"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "What is true for a preparation of a strut attaching pin assembly removal?",
    "choices": [
      "A) Make sure the related engine is supported properly if the engine is not removed",
      "B) Make sure the related strut is supported properly if the engine is removed",
      "C) A or b"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "What is correct for the strut removal?",
    "choices": [
      "A) Remove the engine firstly",
      "B) Disconnect all strut systems",
      "C) A and b"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "How to prepare the strut for maintenance action?",
    "choices": [
      "A) Ground the airplane and deactivate the thrust reversers in stow position",
      "B) Deactivate the leading edge slat in retract position",
      "C) All above a and b"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "With the strut aft fairing doors opened we can access to",
    "choices": [
      "A) The engine (fuel low pressure) spar valve",
      "B) The engine driven pump depressurization valve",
      "C) Components of left (or right) hydraulic system such filter modules, ACMP, reservoir,…"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "What is a correct indication that a strut pin assembly is unloaded for removing?",
    "choices": [
      "A) That strut pin assembly able to be turned easily with a maximum torque of 125 pound -inches",
      "B) The inner pin assembly dimensions checked in limits",
      "C) A and B"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "What is an indicator slots position of the strut access door latch when it is in locked position?",
    "choices": [
      "A) In position of red marking",
      "B) Indicator slot is approximately perpendicular to the edge (of the door) nearest to the latch bolt",
      "C) When latch bolt tightened with specified torque value"
    ],
    "correctAnswer": "B",
    "category": "ATA 50's"
  },
{
    "question": "The purpose of the engine pylon is?",
    "choices": [
      "A) To support the flap handle and engine controls in the cockpit.",
      "B) To contain the engine strut.",
      "C) To attach the two parts of the wing."
    ],
    "correctAnswer": "B",
    "category": "ATA 50's"
  },
  {
    "question": "The engine struts pylons are attached to the wing with?",
    "choices": [
      "A) Fuse pins.",
      "B) Fiber carbon screws.",
      "C) Cement."
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "On Boeing 777, the pylon also contains?",
    "choices": [
      "A) Fairings.",
      "B) The EEC (Electronic Engine Control).",
      "C) The flaperon PCU."
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "The pylon has 4 strut access doors?",
    "choices": [
      "A) To drain the fuel dry bay.",
      "B) To get access to the hydraulic bay.",
      "C) To vent the engine on ground."
    ],
    "correctAnswer": "B",
    "category": "ATA 50's"
  },
{
    "question": "The horizontal stabilizer attached to the airplane by meaning of",
    "choices": [
      "A) 02 pivot fittings at the rear spar and 01 stabilizer trim actuator at the front spar",
      "B) 02 pivot fittings at the rear spar and 01 stabilizer trim actuator at the upper fitting",
      "C) 02 pivot fittings at the front spar and 01 stabilizer trim actuator at the rear spar"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "What is the secondary structure attached to the horizontal stabilizer?",
    "choices": [
      "A) leading edge",
      "B) elevators and tip fairing",
      "C) A and B"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "What is the main structure of the horizontal stabilizer?",
    "choices": [
      "A) aluminum",
      "B) carbon fiber reinforced composite",
      "C) glass fiber reinforced composite"
    ],
    "correctAnswer": "B",
    "category": "ATA 50's"
  },
  {
    "question": "What is correct for the pivot fittings of the horizontal stabilizer?",
    "choices": [
      "A) the left and the right fitting are the same",
      "B) the left and the right fitting are interchangeable",
      "C) the left and the right fittings are not the same, the right fitting can move laterally because of the difference of the thermal expansion between the composite stabilizer and the metal fuselage"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "How to remove trailing edge skin panels of the horizontal stabilizer?",
    "choices": [
      "A) all panels on the upper surface at a time",
      "B) all panels on the lower surface at a time",
      "C) maximum two adjacent panels at a time"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "How to make an electrical bond for the trailing edge panels of the horizontal stabilizer during panel installation?",
    "choices": [
      "A) find out the fastener location for the electrical bonding",
      "B) apply specified coating to the composite part of each hole and let it dry then install bolts in those holes without sealant",
      "C) A and B",
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "Static dischargers of elevators are electrically bonded to the airplane by meaning of?",
    "choices": [
      "A) of the ground cable connected to each discharger",
      "B) of the conducting strip on the elevator surface and the ground cable connected to the conducting strip",
      "C) A and B"
    ],
    "correctAnswer": "B",
    "category": "ATA 50's"
  },
  {
    "question": "What is the main structure of the vertical stabilizer?",
    "choices": [
      "A) aluminum",
      "B) carbon fiber reinforced composite",
      "C) glass fiber reinforced composite"
    ],
    "correctAnswer": "B",
    "category": "ATA 50's"
  },
  {
    "question": "What is the secondary structure attached to the vertical stabilizer?",
    "choices": [
      "A) leading edge only",
      "B) leading edge, rudder and tip fairing",
      "D) tip fairing"
    ],
    "correctAnswer": "B",
    "category": "ATA 50's"
  },
  {
    "question": "Where is the HF antenna located?",
    "choices": [
      "A) on the vertical stabilizer tip fairing",
      "B) on the vertical stabilizer side panel",
      "C) on the vertical stabilizer leading edge panel"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "Before work on the vertical stabilizer we make sure that?",
    "choices": [
      "A) prevent any possible operation of the rudder",
      "B) deactivate the HF communication system and use the specified safety harness",
      "C) A and B"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "The Elevator and Rudder are made of?",
    "choices": [
      "A) Carbon fiber reinforced plastic",
      "B) Titanium ribs and panels",
      "C) hood panels"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "The vertical stabilizer supports?",
    "choices": [
      "A) The horizontal stabilizer.",
      "B) The APU (auxiliary power unit)",
      "C) The rudder."
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "The horizontal stabilizer contain parts of?",
    "choices": [
      "A) The APUC (APU controller)",
      "B) Elevators",
      "C) The rear (number 5) fuel tank."
    ],
    "correctAnswer": "B",
    "category": "ATA 50's"
  },
  {
    "question": "The stabilizer has a secondary structure that attached?",
    "choices": [
      "A) The elevator.",
      "B) The rudder and Tab.",
      "C) Ten leading edge slats."
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
{
    "question": "The external surface of number 1 cockpit window has a",
    "choices": [
      "A) Rain protection hydrophobic coating",
      "B) Ultra-violet prevention coating",
      "C) Light sensitive auto shade coating"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "Number 3 cockpit window",
    "choices": [
      "A) Has an anti-ice heating film",
      "B) Has no anti-ice protection",
      "C) Has an anti-fog heating film"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "The number 2 cockpit window alert switch gives an EICAS advisory message when",
    "choices": [
      "A) You do not close it before take-off",
      "B) The latch handle is out of the latched position",
      "C) You try to open it when the airplane is in the air"
    ],
    "correctAnswer": "B",
    "category": "ATA 50's"
  },
  {
    "question": "Spring clips that hold the passenger windows to the fuselage structure are",
    "choices": [
      "A) All the same",
      "B) Different in bolt sizes (color-coded)",
      "C) Different in grip lengths (color-coded)"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "What is the correct agent used to clean the windows?",
    "choices": [
      "A) M.E.K",
      "B) Mild soap (or isopropanol) and water mixture",
      "C) Cleaning solvent"
    ],
    "correctAnswer": "B",
    "category": "ATA 50's"
  },
  {
    "question": "The panes of passenger windows are made of",
    "choices": [
      "A) Plastic",
      "B) Glass",
      "C) Fiber glass"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "How are the six cockpit windows numbered?",
    "choices": [
      "A) 1L, 2L, 3L, 1R, 2R, 3R",
      "B) 1, 2, 3, 4, 5, 6",
      "C) C1, C2, L1, L2, R1, R2"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "How many heating films are there in each number 1 cockpit window?",
    "choices": [
      "A) 2 anti-ice heating films",
      "B) 2 anti-fog heating films",
      "C) 1 anti-ice heating film and 1 anti-fog heating film"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "What precaution do you observe when doing the torque for number 1 cockpit window bolts?",
    "choices": [
      "A) Use correct bolts, torque in correct sequence, torque 3 times",
      "B) Use correct bolts, torque in correct sequence, torque 2 times",
      "C) Use correct bolts, torque in correct sequence, torque 4 times"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "Which cockpit windows is removed from inside of the cockpit?",
    "choices": [
      "A) Number 1",
      "B) Number 2",
      "C) Number 3"
    ],
    "correctAnswer": "B",
    "category": "ATA 50's"
  },
  {
    "question": "What would indicate that a flight deck side window is NOT properly closed?",
    "choices": [
      "A) Audible caution tone is heard.",
      "B) Side window hand crank is not in the locked position.",
      "C) WINDOWS NOT CLOSED placard is visible OR the lock lever is not fully forward and in the locked position."
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "Information from the alert switch on the number two flight compartment window?",
    "choices": [
      "A) Show on EICAS ( Engine Indication and Crew Alerting System ).",
      "B) Goes to the warning systems electronics unit.",
      "C) Shows on the MAT ( Maintenance Access Terminal )."
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "What material the passenger compartment windows made of?",
    "choices": [
      "A) Windows are made of acrylic.",
      "B) Windows are made of bonded glass.",
      "C) Windows are made of strengthened glass."
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "When the windows is not completely closed?",
    "choices": [
      "A) The latch cam hook not let turn.",
      "B) You see 'WINDOW NOT CLOSED'.",
      "C) The switch are closed."
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "In the flight deck, the number two windows?",
    "choices": [
      "A) Give emergency escape.",
      "B) Is not openable.",
      "C) has wiper arm"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
{
    "question": "Wing structure and skin are made of",
    "choices": [
      "A) Aluminum",
      "B) Steel",
      "C) Composite"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "Vortex generators are installed on",
    "choices": [
      "A) Wing tip",
      "B) Wing lower surface",
      "C) Wing upper surface"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "Purpose of wind dry bays is to",
    "choices": [
      "A) Provide access for fuel tank maintenance",
      "B) Prevent fuel spill on engine if an engine burst occurs",
      "C) Let fuel in when overfill occurs"
    ],
    "correctAnswer": "B",
    "category": "ATA 50's"
  },
  {
    "question": "The baffle rib has",
    "choices": [
      "A) One hole at the bottom to let fuel flow inboard",
      "B) Check valve to let fuel flow outboard at a low rate",
      "C) Check valve to let fuel flow inboard at a slow rate"
    ],
    "correctAnswer": "C",
    "category": "ATA 50's"
  },
  {
    "question": "Fuel dam rib",
    "choices": [
      "A) Prevents fuel from flowing outboard",
      "B) Prevents fuel from flowing away from the pump inlets",
      "C) Prevents fuel from flowing inboard"
    ],
    "correctAnswer": "B",
    "category": "ATA 50's"
  },
  {
    "question": "What makes electrical bond between fuel tank access doors and wing skin?",
    "choices": [
      "A) A gasket",
      "B) A bonding wire",
      "C) No bonding is required"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "What door do you use to supply an opening for airflow when purging the fuel bays in center wing section?",
    "choices": [
      "A) Purge door in the left main wheel well",
      "B) Purge door in the right main wheel well",
      "C) Purge door in dry bay area"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "The primary structure of the wing are made of?",
    "choices": [
      "A) Aluminum",
      "B) Graphite epoxy",
      "C) Fiber glass"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "These components attach to the wing structure?",
    "choices": [
      "A) Engine pylon and Flight control surface",
      "B) Leading edge slat and Rudder tab",
      "C) Elevator"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "The wing fuel tank access door are?",
    "choices": [
      "A) On the bottom of the wing",
      "B) On the top of the wing",
      "C) In the main landing gears"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },
  {
    "question": "The wing landing gear doors are?",
    "choices": [
      "A) On the bottom of the wings",
      "B) On the top of the wings",
      "C) Made of titanium"
    ],
    "correctAnswer": "A",
    "category": "ATA 50's"
  },	
    {
      "question": "Which unit controls the operation of engine pneumatic system?",
      "choices": [
        "A) ASCPC",
        "B) CTC",
        "C) ECSMC"
      ],
      "correctAnswer": "A",
      "category": "ATA 36"
    },
    {
      "question": "How many high pressure ground connections are installed on B777?",
      "choices": [
        "A) 2 connections",
        "B) 3 connections",
        "C) 4 connections"
      ],
      "correctAnswer": "B",
      "category": "ATA 36"
    },
    {
      "question": "The ground air symbol on the air synoptic page is:",
      "choices": [
        "A) Always shown on the air synoptic page",
        "B) Shown when ground air cart is connected",
        "C) Shown when ground air cart is connected and user system is on"
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "On the air synoptic page, the white circle with flow bar 90 degrees to the duct is used to indicate:",
      "choices": [
        "A) Valve opened",
        "B) Valve closed",
        "C) Valve failed"
      ],
      "correctAnswer": "B",
      "category": "ATA 36"
    },
    {
      "question": "On the air synoptic page, how is the valve position invalid indicated?",
      "choices": [
        "A) Amber valve closed symbol with amber X",
        "B) White circle with flow bar in line with duct",
        "C) White circle with no flow bar"
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "How can you know which ASCPC controls the cabin pressurization system?",
      "choices": [
        "A) See maintenance page",
        "B) See air synoptic page",
        "C) See status page"
      ],
      "correctAnswer": "A",
      "category": "ATA 36"
    },
    {
      "question": "The unit of duct pressure shown in the air synoptic page is:",
      "choices": [
        "A) psid",
        "B) psig",
        "C) Milibar"
      ],
      "correctAnswer": "B",
      "category": "ATA 36"
    },
    {
      "question": "Which of the following is correct?",
      "choices": [
        "A) HPSOV and PRSOV are the same",
        "B) HPSOV is controlled and operates by electrical power",
        "C) You can lock HPSOV in open position"
      ],
      "correctAnswer": "A",
      "category": "ATA 36"
    },
    {
      "question": "Which of the following regulates control pressure to FAMV?",
      "choices": [
        "A) PRSOVC",
        "B) HPFAC",
        "C) Manifold flow sensor"
      ],
      "correctAnswer": "B",
      "category": "ATA 36"
    },
    {
      "question": "’CLOSED’ light on Isolation Valve Switches illuminates",
      "choices": [
        "A) Any time Isolation Valve in Close position",
        "B) When Isolation valve closed due to non-normal condition of the valve or pneumatic system",
        "C) Only when Isolation Valve Switch is selected to OFF"
      ],
      "correctAnswer": "B",
      "category": "ATA 36"
    },
    {
      "question": "When both engines are running and supply air to the pneumatic system, Center Isolation position is normally",
      "choices": [
        "A) Open",
        "B) Modulated",
        "C) Closed"
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "Which sensor is used by ASCPC to supply duct pressure to EICAS?",
      "choices": [
        "A) Manifold flow sensor",
        "B) Manifold pressure sensor",
        "C) Intermediate pressure sensor"
      ],
      "correctAnswer": "B",
      "category": "ATA 36"
    },
    {
      "question": "Pneumatic system of B777 has the following modes of operation",
      "choices": [
        "A) Primary, Analog (backup) and Pneumatic modes",
        "B) Primary and Backup modes",
        "C) Pneumatic and Backup modes"
      ],
      "correctAnswer": "A",
      "category": "ATA 36"
    },
    {
      "question": "In Pneumatic mode of operation, the engine air supply system is controlled by",
      "choices": [
        "A) ASCPC",
        "B) CTC",
        "C) Reference pressure regulator inside HPFAC and PRSOVC"
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "In Backup mode, FAMV is",
      "choices": [
        "A) Fully closed",
        "B) Modulated",
        "C) Fully open"
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "When the pneumatic system operates in Pneumatic mode, to turn off the air bleed we should",
      "choices": [
        "A) Pull ASCPC circuit breaker",
        "B) Select engine bleed switch to OFF",
        "C) Shut down engine"
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "Controlled air from the engine compressor to HPFAC and PRSOVC are cooled by",
      "choices": [
        "A) Fuel",
        "B) Fan air",
        "C) Ambient air"
      ],
      "correctAnswer": "B",
      "category": "ATA 36"
    },
    {
      "question": "The purpose of the Duct Vent Valve is to",
      "choices": [
        "A) Bleed air from the pneumatic system",
        "B) Bleed air from FAMV",
        "C) Bleed air to prevent overpressure condition caused by HPSOV leakage when HPSOV and PRSOV are both commanded to close"
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "Without electrical power, isolation valves are",
      "choices": [
        "A) Spring-loaded closed",
        "B) Spring-loaded open",
        "C) Latched in the previous position when electrical power was available"
      ],
      "correctAnswer": "A",
      "category": "ATA 36"
    },
    {
      "question": "All isolation valves are interchangeable and interchangeable with:",
      "choices": [
        "A) PRSOV",
        "B) HPSOV",
        "C) APU shutoff valve"
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "Where can you find the accurate position information of HPSOV and PRSOV?",
      "choices": [
        "A) Air Supply Maintenance page",
        "B) Air synoptic page",
        "C) Position indicator on the valve"
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "Intermediate Pressure Check Valve installation is prevented by:",
      "choices": [
        "A) Flow direction arrow on the valve",
        "B) Direction arrow and male-female flanges",
        "C) Male and female flanges"
      ],
      "correctAnswer": "B",
      "category": "ATA 36"
    },
    {
      "question": "Purpose of Controller Air Cooler is to:",
      "choices": [
        "A) Use fan air to cool engine controlled to HPFAC and PRSOVC",
        "B) Cool HPFAC and PRSOVC",
        "C) Cool ASCPC"
      ],
      "correctAnswer": "A",
      "category": "ATA 36"
    },
    {
      "question": "The pressure regulating and shutoff valve controller (PRSOVC):",
      "choices": [
        "A) Supplies control pressure to the pressure regulating and shutoff valve (PRSOV).",
        "B) Is controlled by the high pressure and fan air controller (HPFAC).",
        "C) Supplies control pressure to the high pressure/fan air controller (HPFAC)."
      ],
      "correctAnswer": "A",
      "category": "ATA 36"
    },
    {
      "question": "The airplane is on the ground, the right engine is on and the APU is on. What must you do when you want to do a cross bleed start from the right engine to the left engine?",
      "choices": [
        "A) Set the left and right pack and trim air switches to OFF or FAULT.",
        "B) Set all the switches on the bleed air/pressurization panel to AUTO or to ON.",
        "C) Set the APU bleed air switch to OFF."
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "When both engines give air to the pneumatic distribution system, what is the usual position of the center isolation valve?",
      "choices": [
        "A) Latched closed.",
        "B) Modulating.",
        "C) Closed."
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "Which sensors in the pneumatic system are used by the ASCPCs (Air Supply and Cabin Pressure Controller) to give DUCT PRESS information on the EICAS display?",
      "choices": [
        "A) Left and right manifold dual temperature sensors.",
        "B) Left and right manifold flow sensors.",
        "C) Left and right manifold pressure sensors."
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "What regulates control pressure to the fan air modulating valve (FAMV)?",
      "choices": [
        "A) The high pressure/fan air controller (HPFAC).",
        "B) The pressure regulating and shutoff valve controller (PRSOVC).",
        "C) The manifold flow sensor."
      ],
      "correctAnswer": "A",
      "category": "ATA 36"
    },
    {
      "question": "Which valves in the engine bleed air system are interchangeable?",
      "choices": [
        "A) APU shut off valve and Fan air Modulating Valve (FAMV).",
        "B) The pressure regulating and shutoff valve (PRSOV) and High pressure and shutoff valve (HPSOV).",
        "C) The Fan air modulating valve (FAMV) and High pressure and shutoff valve (HPSOV)."
      ],
      "correctAnswer": "B",
      "category": "ATA 36"
    },
    {
      "question": "In normal condition the Pneumatic System controls?",
      "choices": [
        "A) Pneumatic pressure.",
        "B) Pneumatic temperature and pressure.",
        "C) Pneumatic temperature, flow, and pressure."
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "At normal engine speed, during cruise bleed air is tapped (bleed) from?",
      "choices": [
        "A) The high-pressure stage.",
        "B) The auxiliary power unit bleed.",
        "C) The intermediate pressure stage."
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "The position of the PRSOV (pressure regulating and shut off valve) is monitored by the ASCPC?",
      "choices": [
        "A) Through a RVDT on the butterfly of the valve.",
        "B) With a proximity sensor wired with each PSEU (Proximity Sensor Electronic Unit).",
        "C) The position is not electronically monitored, the ASCPC determines the valve position with pneumatic sensors in the pneumatic circuit."
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "The ASCPC (Air Supply and Cabin Pressure Controller) has two control modes?",
      "choices": [
        "A) Digital for Air Supply and Analogic for Air Distribution.",
        "B) Primary for all functions and Alternate for backup functions of the Air Conditioning.",
        "C) Digital for Air Supply, Distribution, and Pressurization. Analogic mode for Air Supply Back Up."
      ],
      "correctAnswer": "C",
      "category": "ATA 36"
    },
    {
      "question": "The position of the isolation valves are driven by?",
      "choices": [
        "A) Left ASCPC in primary, Right ASCPC in backup mode.",
        "B) Both ASCPC at the same time.",
        "C) The ELMS."
      ],
      "correctAnswer": "B",
      "category": "ATA 36"
    },
    {
      "question": "The Fan Air Modulating Valve is?",
      "choices": [
        "A) Fail safe full open.",
        "B) Fail safe fully closed.",
        "C) Spring loaded 50% open."
      ],
      "correctAnswer": "A",
      "category": "ATA 36"
    },
{
  "question": "Under normal conditions, what is the source of bleed air to start the left engine?",
  "choices": [
    "A) Right engine bleed air system",
    "B) APU",
    "C) Left ground cart"
  ],
  "correctAnswer": "B",
  "category": "ATA 36"
},
    {
      "question": "When you do any test that does a check of fire bottle squibs, the ELMS supplies a small current to fire bottle squibs for:",
      "choices": [
        "A) the bottles selected only",
        "B) the bottles selected and to all other fire bottle squibs",
        "C) the bottles selected and their related wiring."
      ],
      "correctAnswer": "B",
      "category": "ATA 26"
    },
    {
      "question": "The fire and overheat test switch (FIRE/OVHT TEST) does a test of:",
      "choices": [
        "A) inaccessible during-the-flight areas fire and smoke detection systems",
        "B) the fire extinguishing system:",
        "C) all airplane fire protection system"
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "The squib test failure signal resets when:",
      "choices": [
        "A) If you repair the squib circuit",
        "B) If you repair the squib circuit and do another test",
        "C) if you cycle the power"
      ],
      "correctAnswer": "B",
      "category": "ATA 26"
    },
    {
      "question": "As the temperature of the core of the engine fire detectors increases, electrical resistance of conductor ground connected to the tube:",
      "choices": [
        "A) increases",
        "B) decreases",
        "C) shows short-circuited"
      ],
      "correctAnswer": "B",
      "category": "ATA 26"
    },
    {
      "question": "The engine and APU fire detection cards function differently:",
      "choices": [
        "A) and are not interchangeable",
        "B) but are interchangeable",
        "C) but are interchangeable if you reprogram the pins on the card."
      ],
      "correctAnswer": "B",
      "category": "ATA 26"
    },
    {
      "question": "If an engine has an overheat condition, these indications occur in the flight deck:",
      "choices": [
        "A) The master caution lights come on; The caution aural operates; An engine overheat caution message shows.",
        "B) The master warning lights come on; The fire warning aural operates; An engine fire warning message shows.",
        "C) The master warning lights come on; The fire warning aural operates; An engine fire warning message shows; The engine fire warning light comes on; The fuel control switch fire warning light comes on."
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "How many ways can you test lavatory smoke detectors?",
      "choices": [
        "A) 1",
        "B) 2",
        "C) 3"
      ],
      "correctAnswer": "B",
      "category": "ATA 26"
    },
    {
      "question": "The APU fire detection system has two modes of operation: unattended mode and attended mode. The difference between these modes is defined by:",
      "choices": [
        "A) engine operation",
        "B) air/ground mode",
        "C) engine operation and air/ground mode"
      ],
      "correctAnswer": "C",
      "category": "ATA 26"
    },
    {
      "question": "When using the fire/overheat test switch to make sure the APU fire detection system operates correctly the APU fire switch:",
      "choices": [
        "A) can not be pulled during the test",
        "B) is unlocked during the test",
        "C) is not power supplied"
      ],
      "correctAnswer": "B",
      "category": "ATA 26"
    },
    {
      "question": "The forward lower cargo smoke detector and the aft lower cargo smoke detector are:",
      "choices": [
        "A) interchangeable.",
        "B) identical but not interchangeable",
        "C) different"
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "The lavatory smoke detectors and cargo smoke detectors are:",
      "choices": [
        "A) interchangeable.",
        "B) identical but not interchangeable",
        "C) different"
      ],
      "correctAnswer": "C",
      "category": "ATA 26"
    },
    {
      "question": "If you pull and rotate the engine fire switch, the fire bottles will discharge:",
      "choices": [
        "A) with the battery switch ON or OFF, and with or without ground power on the airplane",
        "B) when the battery switch ON and with or without ground power on the airplane",
        "C) when the battery switch ON and with ground power on the airplane"
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "The engine fire switch releases if:",
      "choices": [
        "A) the engine has a fire.",
        "B) when the battery switch is ON and the engine fuel control switch is in CUTOFF during a fire/overheat test.",
        "C) the engine has a fire or when the battery switch is ON and the engine fuel control switch is in CUTOFF during a fire/overheat test."
      ],
      "correctAnswer": "C",
      "category": "ATA 26"
    },
    {
      "question": "To operate APU fire extinguishing system from the P40 panel, you should:",
      "choices": [
        "A) push the APU bottle discharge switch",
        "B) push the APU fire shutdown switch",
        "C) push the APU fire shutdown switch first, and then push the APU bottle discharge switch"
      ],
      "correctAnswer": "C",
      "category": "ATA 26"
    },
    {
      "question": "Flight and ground operation of the lower cargo fire extinguishing system is:",
      "choices": [
        "A) the same",
        "B) different",
        "C) different and dependent on the landing time"
      ],
      "correctAnswer": "C",
      "category": "ATA 26"
    },
    {
      "question": "Which statement is true for Engine Overheat Detection?",
      "choices": [
        "A) Overheat detectors are different from Fire detectors",
        "B) Overheat condition is detected by Engine Fire Detection Loops",
        "C) Fuel control switch light comes on when there is an engine overheat"
      ],
      "correctAnswer": "B",
      "category": "ATA 26"
    },
    {
      "question": "Which statement is true for APU fire detection system?",
      "choices": [
        "A) Operates only in the air",
        "B) Uses smoke detectors",
        "C) Has two modes: Attended and Unattended"
      ],
      "correctAnswer": "C",
      "category": "ATA 26"
    },
    {
      "question": "Airplane is on the ground, if you push forward cargo Fire Arm switch and then Discharge switch",
      "choices": [
        "A) Bottles 1A and 1B fire immediately, bottle 2A fires after 20 minutes",
        "B) Bottles 1A and 1B fire immediately, bottles 2A, 2B, 2C discharge after",
        "C) Only bottles 1A and 1B fire immediately"
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "Engine fire switch releases if the engine has a fire or",
      "choices": [
        "A) During fire/overheat test",
        "B) Fuel control switch is in CUT OFF",
        "C) BAT switch is ON"
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "Where can you find engine fire extinguisher bottles?",
      "choices": [
        "A) Forward cargo compartment",
        "B) Aft cargo compartment",
        "C) Main equipment center"
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "What agent is used for engine and APU fire extinguishing?",
      "choices": [
        "A) Water",
        "B) Halon",
        "C) Powder"
      ],
      "correctAnswer": "B",
      "category": "ATA 26"
    },
    {
      "question": "How do you check engine/APU fire bottles pressure switch circuit on the ground?",
      "choices": [
        "A) Push and hold the bottle pressure switch test button",
        "B) Do a fire/overheat test",
        "C) Weigh the bottle"
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "If you shut down the APU by fire shutdown switch on P40, to start the APU again you need to",
      "choices": [
        "A) Do a fire/overheat test",
        "B) Power the airplane by external power",
        "C) Cycle the BAT switch"
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "What is the hydrostatic test interval for fire extinguisher bottles?",
      "choices": [
        "A) 7 years",
        "B) 6 years",
        "C) 5 years"
      ],
      "correctAnswer": "C",
      "category": "ATA 26"
    },
    {
      "question": "What is the purpose of cargo compartment fire extinguishing in-line pressure switch reset button?",
      "choices": [
        "A) To set switch contacts to open after it is latched closed by discharge pressure",
        "B) To reset the switch after extinguisher bottle replacement",
        "C) To set switch contacts to close after it is latched opened by discharge pressure"
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "What is maximum service life of a fire extinguisher bottle squib?",
      "choices": [
        "A) 5 years",
        "B) 10 years",
        "C) 15 years"
      ],
      "correctAnswer": "B",
      "category": "ATA 26"
    },
    {
      "question": "At what temperature will the lavatory fire extinguisher bottle nozzles melt?",
      "choices": [
        "A) 77° C",
        "B) 100° C",
        "C) 90° C"
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "Which is true for the engine overheat detection system?",
      "choices": [
        "A) Overheat detection is provided by the engine fire detection system.",
        "B) The overheat detectors are different than the fire detectors.",
        "C) The pressure regulating and shutoff valve (PRSOV) closes automatically."
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "Which is true for the APU fire detection system?",
      "choices": [
        "A) It uses duct leak detection system to monitor for fire conditions.",
        "B) It uses smoke detectors to monitor for a fire condition.",
        "C) It has two modes of operation, unattended and attended."
      ],
      "correctAnswer": "C",
      "category": "ATA 26"
    },
    {
      "question": "When smoke is detected in a lavatory?",
      "choices": [
        "A) The green light on the smoke detector comes on.",
        "B) The lavatory call light/reset switch for that lavatory flashes.",
        "C) The horn can only be shutoff when the smoke is gone."
      ],
      "correctAnswer": "B",
      "category": "ATA 26"
    },
    {
      "question": "With the airplane on the ground, what happens when you push the FWD cargo fire arming switch, then push the discharge switch?",
      "choices": [
        "A) Bottles 1A and 1B discharge immediately. Bottles 2A, 2B and 2C discharge at twenty minutes intervals.",
        "B) Bottles 1A and 1B discharge immediately. Bottles 2A discharges twenty minutes later.",
        "C) Bottles 2B and 2C do not discharge. Bottles 1A, 1B and 2A discharge immediately."
      ],
      "correctAnswer": "B",
      "category": "ATA 26"
    },
    {
      "question": "Which of these happens when an engine fire is detected?",
      "choices": [
        "A) The fire switch solenoid unlocks.",
        "B) An EICAS caution message shows.",
        "C) The pressure regulating and shutoff valve (PRSOV) closes automatically."
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "What is the purpose of the fire overheat test switch for the APU fire extinguishing circuit?",
      "choices": [
        "A) To energize the solenoid to unlock the APU fire switch.",
        "B) To switch off the Fire lights in the APU fire switch.",
        "C) To reset the remote shutdown and the bottle discharge by the switch on the P40 panel."
      ],
      "correctAnswer": "C",
      "category": "ATA 26"
    },
    {
      "question": "APU fire on ground with two engines OFF causes?",
      "choices": [
        "A) The APU shuts down automatically and the extinguisher bottle discharges.",
        "B) The APU shuts down automatically.",
        "C) Nothing happens except an aural warning on the nose landing gear P40 panel."
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
 {
      "question": "The lower cargo fire extinguishing system has?",
      "choices": [
        "A) 2 Fire extinguishing bottles.",
        "B) 3 Fire extinguishing bottles.",
        "C) 5 Fire extinguishing bottles."
      ],
      "correctAnswer": "C",
      "category": "ATA 26"
    },
    {
      "question": "The fire bottle discharge switch and light of the Lower Lobe Attendant Rest ( LLAR ) fire extinguishing system is?",
      "choices": [
        "A) On the LLAR attendant switch panel.",
        "B) On the entrance enclosure attendant switch panel.",
        "C) On the fire extinguishing menu of the cabin control panel."
      ],
      "correctAnswer": "B",
      "category": "ATA 26"
    },
    {
      "question": "The Overhead Flight Attendant Rest ( OFAR ) smoke detector can be tested by?",
      "choices": [
        "A) The fire test switch on P5 panel.",
        "B) The CSS and individually at each detector.",
        "C) Only by the CSS."
      ],
      "correctAnswer": "B",
      "category": "ATA 26"
    },
    {
      "question": "The smoke detectors in OFCR / OFAR are of the type?",
      "choices": [
        "A) Electro pneumatic Smoke detector.",
        "B) Optical smoke detector.",
        "C) Electronic Smoke detector."
      ],
      "correctAnswer": "C",
      "category": "ATA 26"
    },
    {
      "question": "Lower Cargo Compartment Smoke Detection: The purpose of the 'line heaters' is to?",
      "choices": [
        "A) Prevent false detection due to air humidity.",
        "B) Avoid ice accumulator in the detector.",
        "C) Periodically test the system."
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "Lower Cargo Compartment Smoke Detection: The purpose of the 'water separator' is to?",
      "choices": [
        "A) Remove water concentration in the air sampling.",
        "B) Avoid smoke detectors contamination.",
        "C) Decrease the weight of the system."
      ],
      "correctAnswer": "A",
      "category": "ATA 26"
    },
    {
      "question": "The power for the captain and first officer seats is supplied from:",
      "choices": [
        "A) three phase 115V AC utility bus",
        "B) three phase 115V AC service bus",
        "C) single phase 115V AC standby bus"
      ],
      "correctAnswer": "A",
      "category": "ATA 25"
    },
    {
      "question": "Which of the following statements is NOT correct:",
      "choices": [
        "A) The emergency stop switch removes power from the horizontal control circuits of the Captain/First Officer seat",
        "B) The emergency stop switch removes power from the vertical control circuits of the Captain/First Officer seat.",
        "C) The emergency stop switch removes power from the Captain/First Officer seat"
      ],
      "correctAnswer": "C",
      "category": "ATA 25"
    },
    {
      "question": "For ground service equipment and necessary in-flight equipment, there are two usual kinds of electrical outlets:",
      "choices": [
        "A) 115 volts AC single phase power at 400 Hertz and 28 volts DC power",
        "B) 115 volts AC single phase power at 50 Hertz and 28 volts DC power",
        "C) 115 volts AC single phase power at 60 Hertz and 28 volts DC power"
      ],
      "correctAnswer": "A",
      "category": "ATA 25"
    },
    {
      "question": "Business class seats with electric controls for adjustment receives:",
      "choices": [
        "A) three-phase power from the three phase bus",
        "B) single phase power from the three phase bus",
        "C) DC power from the utility bus"
      ],
      "correctAnswer": "B",
      "category": "ATA 25"
    },
    {
      "question": "The operation of the electrical/mechanical components is:",
      "choices": [
        "A) automatically controlled by the cargo system controller only.",
        "B) automatically controlled by the cargo system controller, but some of them can be operated manually",
        "C) operated manually if no power available."
      ],
      "correctAnswer": "B",
      "category": "ATA 25"
    },
    {
      "question": "The cargo handling system gets power for control from",
      "choices": [
        "A) ground handling bus",
        "B) ground service bus",
        "C) ground utility bus"
      ],
      "correctAnswer": "A",
      "category": "ATA 25"
    },
    {
      "question": "If a lateral guide was manually lowered:",
      "choices": [
        "A) it can be released electrically",
        "B) it must manually be released before it will operate electrically",
        "C) it will reset itself when power is put on the system"
      ],
      "correctAnswer": "B",
      "category": "ATA 25"
    },
    {
      "question": "When you replace a PDU you must clean and seal the PDU mounting base to the airframe. Then make sure that:",
      "choices": [
        "A) electrical resistance between the PDU and airframe is acceptable",
        "B) the PDU mounting base is properly secured to the airframe",
        "C) the PDU is correctly installed on the PDU mounting base."
      ],
      "correctAnswer": "A",
      "category": "ATA 25"
    },
    {
      "question": "The cargo system controllers adjust for the difference between the forward and aft cargo compartments and for system options by using the logic that is defined by:",
      "choices": [
        "A) code switches.",
        "B) programming pins",
        "C) P/N"
      ],
      "correctAnswer": "B",
      "category": "ATA 25"
    },
    {
      "question": "To do a test of the cargo system controllers:",
      "choices": [
        "A) use the BITE",
        "B) use the MAT",
        "C) you operate the system to see if it operates correctly"
      ],
      "correctAnswer": "C",
      "category": "ATA 25"
    },
    {
      "question": "Emergency evacuation signal can be operated from:",
      "choices": [
        "A) The attendant stations only",
        "B) The flight deck only",
        "C) The attendant stations and flight deck"
      ],
      "correctAnswer": "C",
      "category": "ATA 25"
    },
    {
      "question": "If captain/first officer seat continues to move when you release an adjustment switch. You can stop this movement by",
      "choices": [
        "A) Using the emergency stop switch",
        "B) Pushing the adjustment switch in reverse direction",
        "C) Disconnecting electrical power to the seat"
      ],
      "correctAnswer": "A",
      "category": "ATA 25"
    },
    {
      "question": "You can remove captain/first officer seat by",
      "choices": [
        "A) Sliding forward off the tracks",
        "B) Sliding aftward off the tracks",
        "C) Removing the seat tracks"
      ],
      "correctAnswer": "A",
      "category": "ATA 25"
    },
    {
      "question": "You can externally open the stowage bin if the actuator does not operate correctly by pushing the emergency release lever which is located at",
      "choices": [
        "A) The bezel",
        "B) Top of side wall panel",
        "C) Stowage bin sidewall"
      ],
      "correctAnswer": "C",
      "category": "ATA 25"
    },
    {
      "question": "Air chillers can be attached to",
      "choices": [
        "A) The top of the galleys",
        "B) The bottom of the galleys",
        "C) The back of the galleys"
      ],
      "correctAnswer": "A",
      "category": "ATA 25"
    },
    {
      "question": "Fixed galleys are attached to airplane structure by",
      "choices": [
        "A) Tie rods at the top and bolts to hardpoint fittings at the bottom",
        "B) Tie rods at the top and bolts/fittings to seat tracks at the bottom",
        "C) Bolts and fittings to the seat tracks at the bottom"
      ],
      "correctAnswer": "A",
      "category": "ATA 25"
    },
    {
      "question": "If cargo compartment fiberglass liners have cuts, tears or holes,",
      "choices": [
        "A) You can repair when time available",
        "B) You must repair",
        "C) You must replace the liners"
      ],
      "correctAnswer": "B",
      "category": "ATA 25"
    },
    {
      "question": "What is the purpose of lower lobe cargo compartment decompression panels?",
      "choices": [
        "A) To prevent fuselage structural damage if there is a sudden decompression of passenger compartment",
        "B) To ensure equal air pressure between passenger compartment and cargo compartment",
        "C) To prevent fuselage structural damage if there is a sudden decompression of cargo compartment"
      ],
      "correctAnswer": "A",
      "category": "ATA 25"
    },
    {
      "question": "How can you identify individual Power Drive Unit (PDU)?",
      "choices": [
        "A) By row location number",
        "B) By PDU location in the row",
        "C) By row location number and its location in the row (left, right, center)"
      ],
      "correctAnswer": "C",
      "category": "ATA 25"
    },
    {
      "question": "What do you need to do prior to the removal of passenger door escape slide/raft?",
      "choices": [
        "A) Install the safety pin to lock the release mechanism",
        "B) Install the safety pin to the girt bar mechanism",
        "C) Install the safety pin to the lacing cover"
      ],
      "correctAnswer": "A",
      "category": "ATA 25"
    },
    {
      "question": "After deployment, the slide/raft is inflated by",
      "choices": [
        "A) Inflation cylinder air",
        "B) Ambient air",
        "C) Air from the aspirators"
      ],
      "correctAnswer": "C",
      "category": "ATA 25"
    },
    {
      "question": "Why is it important to repair damaged cargo liners?",
      "choices": [
        "A) The liners keep the cargo compartments pressurized.",
        "B) The liners protect cargo containers from damage.",
        "C) Sealed cargo compartments are necessary for fire protection and temperature control."
      ],
      "correctAnswer": "C",
      "category": "ATA 25"
    },
    {
      "question": "One retractable guide roller/lock attaches to the forward cargo door sill. What is the purpose of this component?",
      "choices": [
        "A) It guides the cargo door to full close and then locks it.",
        "B) It aligns and locks the cargo loader to the cargo door sill.",
        "C) It guides and aligns containers as they move through the cargo door opening."
      ],
      "correctAnswer": "C",
      "category": "ATA 25"
    },
    {
      "question": "The Cargo System Controller controls the position of?",
      "choices": [
        "A) PDU and lateral guide.",
        "B) Sill roller lock and retractable guide.",
        "C) Center stop lock and lateral guide."
      ],
      "correctAnswer": "A",
      "category": "ATA 25"
    },
    {
      "question": "To supply power to the Cargo handling system, these conditions must be true?",
      "choices": [
        "A) Grnd Handling Bus powered/Cargo Door full open/System Power Switch ON.",
        "B) Grnd Handling Bus powered and System Power Switch armed.",
        "C) Grnd Handling Bus powered and joystick FWD/AFT/IN/OUT."
      ],
      "correctAnswer": "A",
      "category": "ATA 25"
    },
    {
      "question": "The AIR CHILLER UNITS?",
      "choices": [
        "A) Are automatic devices that remove odors from the galleys.",
        "B) Operate on ground only to cool the galleys.",
        "C) Supply cold AIR in the carts or in compartments that need refrigeration when the system is ON."
      ],
      "correctAnswer": "C",
      "category": "ATA 25"
    },
    {
      "question": "On the emergency evacuation panel (P8) in the cockpit, the ON / OFF / ARM switch?",
      "choices": [
        "A) Is not used because evacuation is commanded by the push button on the attendant switch panel located at door 2 left.",
        "B) Will stop the alarm in the cockpit to let the pilots contact the attendant.",
        "C) The ARM position is not used, only ON / OFF will command or not an emergency evacuation for all the cabin"
      ],
      "correctAnswer": "C",
      "category": "ATA 25"
    },
    {
      "question": "On electrically powered aircraft, which conditions are necessary to power the cargo loading system?",
      "choices": [
        "A) Control panel access door open and power switch ON.",
        "B) Power switch ON and cargo door full open.",
        "C) Power switch AUTO and all manual door sill latches UP."
      ],
      "correctAnswer": "B",
      "category": "ATA 25"
    },
    {
      "question": "On an unpowered aircraft, is it possible to move the pilots seats?",
      "choices": [
        "A) No, electrical power is necessary.",
        "B) Yes, but only the backrest is possible.",
        "C) Yes, by using the manual controls"
      ],
      "correctAnswer": "C",
      "category": "ATA 25"
    },
    {
      "question": "Where is the Flight Crew Rest area?",
      "choices": [
        "A) In the mid section of the passenger compartment.",
        "B) AFT of the cockpit.",
        "C) At the AFT section of the passenger's compartment."
      ],
      "correctAnswer": "B",
      "category": "ATA 25"
    },
    {
      "question": "In case of emergency, is it possible to open the lavatory door?",
      "choices": [
        "A) Yes, but a special tool is required.",
        "B) No, the door can only be opened from inside.",
        "C) Yes, no specific tool is needed."
      ],
      "correctAnswer": "C",
      "category": "ATA 25"
    },
    {
      "question": "In the lower lobe cargo compartments, the decompression panels?",
      "choices": [
        "A) Prevent fuselage structural damage if there is sudden decompression of the passenger compartment.",
        "B) Automatically open in case of fire to remove smokes.",
        "C) Allow the ventilation of the cargo compartments."
      ],
      "correctAnswer": "A",
      "category": "ATA 25"
    },
    {
      "question": "To operate the cargo loading system?",
      "choices": [
        "A) The aircraft must be electrically supplied.",
        "B) Electrical power is not required.",
        "C) The ground handling bus must be supplied."
      ],
      "correctAnswer": "C",
      "category": "ATA 25"
    },
    {
      "question": "If electrical power to the cargo loading system is lost, the containers?",
      "choices": [
        "A) Cannot be unloaded.",
        "B) Must be manually unloaded.",
        "C) Are automatically unloaded."
      ],
      "correctAnswer": "B",
      "category": "ATA 25"
    },
    {
      "question": "When the cargo loading system is unpowered, the lateral guides are normally?",
      "choices": [
        "A) In the lowered (up) position.",
        "B) In the retract (down) position.",
        "C) In the last position selected by the control panel."
      ],
      "correctAnswer": "B",
      "category": "ATA 25"
    },
    {
      "question": "The cargo loading system of the B777 is?",
      "choices": [
        "A) Automatic and does not require any action from the ground crew.",
        "B) Electrical for the aft and fwd cargo compartment.",
        "C) Only manual and does not require electrical power."
      ],
      "correctAnswer": "B",
      "category": "ATA 25"
    },	
{
	"question": "The CDB installation fault results tell you that the possible causes of the fault are OEU 1-2-4 and OEU 1-2-5 because:",
	"choices" :[
	"A) One of the 2 OEUS didn't transmit or receive the token",
	"B) these 2 OEUS operate in parallel",
	"C) OEUS always fail by pair"
	],
	"correctAnswer": "A",
        "category": "ATA 23"
},
{
	"question": "The center VHF transceiver receives a port select discrete from:",
	"choices" :[
	"A) the left VHF transceive",
	"B) the left Radio Tuning Panel",
	"C) the right VHF transceiver"
	],
	"correctAnswer": "B",
        "category": "ATA 23"
},
{
	"question": "The SELCAL coding switch is:",
	"choices" :[
	"A) part of the SELCAL decoder",
	"B) on the rack behind the decoder",
	"C) on the front panel of the decoder"
	],
	"correctAnswer": "B",
        "category": "ATA 23"
},
{
	"question": "The audio signals sent by the AMU to the CVR are:",
	"choices" :[
	"A) Captain, First Officer and area microphone",
	"B) Captain, first observer and second observer",
	"C) Captain, First Officer and first observer"
	],
	"correctAnswer": "C",
        "category": "ATA 23"
},
{
	"question": "The ACP gets digital data from:",
	"choices" :[
	"A) the AMU to control ACP lights",
	"B) the DCMF in AIMS",
	"C) the AMU to route audio data"
	],
	"correctAnswer": "A",
        "category": "ATA 23"
},
{
	"question": "The SATCOM High Power Amplifier:",
	"choices" :[
	"A) amplifies the received signals",
	"B) adjusts the output of the transmit signal",
	"C) amplifies the Beam Steering Unit signals"
	],
	"correctAnswer": "B",
        "category": "ATA 23"
},
{
	"question": "When the left and right RTPs fail:",
	"choices" :[
	"A) all transceivers remain operating",
	"B) the HF transceivers are lost",
	"C) the VHF transceivers are lost"
	],
	"correctAnswer": "A",
        "category": "ATA 23"
},
{
	"question": "It is safe to transmit on the HF system when:",
	"choices" :[
	"A) There are personnel at less than 50 feet from the nose of the airplane",
	"B) There are personnel within 10 feet of the vertical stabilizer",
	"C) There is a fuel spillage under the airplane"
	],
	"correctAnswer": "A",
        "category": "ATA 23"
},
{
	"question": "The HF SENS selector on the RTP sets the sensitivity of:",
	"choices" :[
	"A) the onside HF transceiver",
	"B) the HF transceiver selected on the RTP",
	"C) the left and right transceivers at the same time"
	],
	"correctAnswer": "A",
        "category": "ATA 23"
},
{
	"question": "Ground crew call system signals between the flight crew and the ground crew are sent via:",
	"choices" :[
	"A) ",
	"B) ",
	"C) "
	],
	"correctAnswer": "",
        "category": "ATA 23"
},
{
	"question": ":",
	"choices" :[
	"A) the Audio Management unit",
	"B) PA/CI Controller",
	"C) the center CDU"
	],
	"correctAnswer": "B",
        "category": "ATA 23"
},
{
	"question": "AIMS sends ACARS data to the VHF transceivers on::",
	"choices" :[
	"A) ARINC 629",
	"B) ARINC 429",
	"C) ARINC 618"
	],
	"correctAnswer": "C",
        "category": "ATA 23"
},
{
	"question": "The Beam Steering Unit in the satcom SYSTEM:",
	"choices" :[
	"A) increases the strength of received signals",
	"B) provides beam alignment data to the phase shift elements of the antenna",
	"C) adjusts the Radio Frequency signal level before transmission"
	],
	"correctAnswer": "B",
        "category": "ATA 23"
},
{
	"question": "The center Radio Tuning Panel sends its tuning bus output::",
	"choices" :[
	"A) directly to any radio transceiver",
	"B) to the left and right RTPs in case of failure",
	"C) to the right and center transceivers only "
	],
	"correctAnswer": "B",
        "category": "ATA 23"
},
{
	"question": "The Digital Control Audio System test does a test of:",
	"choices" :[
	"A) the Digital Flight Data Recorder",
	"B) the Cockpit Voice Recorder",
	"C) the Service Interphone"
	],
	"correctAnswer": "C",
        "category": "ATA 23"
},
{
	"question": "The AMU gets DME pairing data from:",
	"choices" :[
	"A) the AIMS cabinets",
	"B) the DMES",
	"C) the Multi Mode Receivers"
	],
	"correctAnswer": "A",
        "category": "ATA 23"
},
{
	"question": "The Observer audio selector switch lets:",
	"choices" :[
	"A) the CAPT or FO use the first OBS's station card in the AMU",
	"B) the CAPT use the FO's station card in the AMU",
	"C) the FO use the CAPT's station card in the AMU"
	],
	"correctAnswer": "A",
        "category": "ATA 23"
},
{
	"question": "The HF system has::",
	"choices" :[
	"A) 1 antenna and 1 coupler for each transceive",
	"B) 1 antenna and 2 couplers for the 2 transceivers",
	"C) 1 antenna and 1 coupler for the 2 transceivers"
	],
	"correctAnswer": "B",
        "category": "ATA 23"
},
{
	"question": "The Left AIMS cabinet sends ACARS Data to::",
	"choices" :[
	"A) the right and center VHF transceivers",
	"B) the left VHF transceiver",
	"C) the center VHF transceiver"
	],
	"correctAnswer": "C",
        "category": "ATA 23"
},
{
	"question": "How many columns of OEUS does the PACI drive?:",
	"choices" :[
	"A) 1",
	"B) 3",
	"C) 0"
	],
	"correctAnswer": "C",
        "category": "ATA 23"
},
{
	"question": "If a Cabin Interphone Controller fails:",
	"choices" :[
	"A) Passenger address is inop",
	"B) there is an automatic switching to the Alternate CIC",
	"C) cabin interphone is inop"
	],
	"correctAnswer": "C",
        "category": "ATA 23"
},
{
	"question": "If an OEU fails:",
	"choices" :[
	"A) lighting control for the OEU related lights is inop",
	"B) Cabin lighting control in the zone of the OEU is inop",
	"C) Passenger address on 2 speakers is inop"
	],
	"correctAnswer": "A",
        "category": "ATA 23"
},
{
	"question": "A ZMU receives:",
	"choices" :[
	"A) Analog audio signals only",
	"B) Analog and digital audio signals",
	"C) Analog audio signals only"
	],
	"correctAnswer": "B",
        "category": "ATA 23"
},
{
	"question": "When a Passenger pushes the attendant call button:",
	"choices" :[
	"A) a ZMU turns on the Row Call Light",
	"B) the Passenger Address System generates a chime",
	"C) an OEU turns on a Master Call Light"
	],
	"correctAnswer": "B",
        "category": "ATA 23"
},
{
	"question": "To quickly determine if a Cabin Interphone problem comes from the PA/CI you can:",
	"choices" :[
	"A) push the PA Norm/ALTN switch",
	"B) push the CI Norm/ALTN switch",
	"C) do an All test"
	],
	"correctAnswer": "B",
        "category": "ATA 23"
},
{
	"question": "How many columns of SDMs does a ZMU drive?:",
	"choices" :[
	"A) 0",
	"B) 1",
	"C) 2"
	],
	"correctAnswer": "A",
        "category": "ATA 23"
},
{
	"question": "The FDH sends mic, PTT, and dial codes to:",
	"choices" :[
	"A) the PA/CI controlle",
	"B) all the ZMUS",
	"C) ZMU 1"
	],
	"correctAnswer": "A",
        "category": "ATA 23"
},
{
	"question": "The Cabin Services System combines::",
	"choices" :[
	"A) Cabin Lighting and Emergency Lighting",
	"B) Service Interphone and Cabin Lighting",
	"C) Passenger Address and Cabin Lighting"
	],
	"correctAnswer": "A",
        "category": "ATA 23"
},
{
	"question": "Chimes related to Passenger to attendant calls can be disabled by:",
	"choices" :[
	"A) the CSCP and the CACP",
	"B) the CSCP only",
	"C) CACPs only"
	],
	"correctAnswer": "A",
        "category": "ATA 23"
},
{
	"question": "The Passenger Service System cannot control:",
	"choices" :[
	"A) the reading lights",
	"B) the Passenger information signs",
	"C) the cabin lights"
	],
	"correctAnswer": "C",
        "category": "ATA 23"
},
{
	"question": "The CIS LRU connecting the handsets together is:",
	"choices" :[
	"A) the PA/Cl controller",
	"B) the ZMU",
	"C) the CSMU"
	],
	"correctAnswer": "A",
        "category": "ATA 23"
},
{
	"question": "PA/CI volume is adjusted according to",
	"choices" :[
	"A) FMF flight phases",
	"B)  Airplane system data (from AIMS, WES, FSEU...)",
	"C) an air/ground signal only"
	],
	"correctAnswer": "B",
        "category": "ATA 23"
},
{
	"question": "With which system does the PA/CI interface to generate chimes?",
	"choices" :[
	"A) The Data Communication Management System",
	"B) The Flight Management System",
	"C) The Overhead Panel Arinc 629 System"
	],
	"correctAnswer": "C",
        "category": "ATA 23"
},
{
	"question": "DCMF controls communications between AIMS and:",
	"choices" :[
	"A) the AVLAN, the QAR and the DFDR",
	"B) the AVLAN, the right and CTR VHF and the SATCOM",
	"C) the OPAS, the printer and the CTR VHF"
	],
	"correctAnswer": "B",
        "category": "ATA 23"
},
{
	"question": "To select the Flight Deck Communication Function you use:",
	"choices" :[
	"A) any CDU",
	"B) any EFIS control panel",
	"C) the DSP"
	],
	"correctAnswer": "C",
        "category": "ATA 23"
},
{
	"question": "To reset a DCMF modem:",
	"choices" :[
	"A) there is an operational test in the CMCF",
	"B) open then close the related VHF circuit breaker",
	"C) use the 'MANAGER' menu on the MFD"
	],
	"correctAnswer": "A",
        "category": "ATA 23"
},
{
	"question": "To enter text on a MFD you use:",
	"choices" :[
	"A) the MAT keyboard and a CCD",
	"B) the EFB scratchpad and a CCD to transfer the text to the MFD",
	"C) a CDU and the CCDG"
	],
	"correctAnswer": "C",
        "category": "ATA 23"
},
{
	"question": "The Flight Deck Communication Function supplies an operator's interface to:",
	"choices" :[
	"A) the EFB",
	"B) the Data Communication Management System",
	"C) the PLANENET"
	],
	"correctAnswer": "B",
        "category": "ATA 23"
},
{
	"question": "To connect to the ATC the flight crew uses the FCDF ATC:",
	"choices" :[
	"A) ATC requested reports page",
	"B) Voice contact request page",
	"C) Logon/ Status page"
	],
	"correctAnswer": "C",
        "category": "ATA 23"
},
{
	"question": "The CSS interfaces with other systems to provide:",
	"choices" :[
	"A) Cargo loading monitoring",
	"B) Inflight Entertainment",
	"C) Cabin temperature selection"
	],
	"correctAnswer": "C",
        "category": "ATA 23"
},	
{
    "question": "On a B777 an Arinc 629 bus can connect to a maximum of:",
    "choices": [
      "A) 7 LRUS",
      "B) 11 LRUS",
      "C) 46 LRUS"
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "An Arinc 629 Current Mode Coupler connects:",
    "choices": [
      "A) a computer to an Arinc 629 bus",
      "B) an Arinc 429 bus to an Arinc 629 bus",
      "C) a fiber optic bus to an Arinc 629 bus"
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "The OPAS connects the Overhead panel to:",
    "choices": [
      "A) Fiber optic buses",
      "B) Arinc 429 buses",
      "C) Arinc 629 buses"
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "The OPAS:",
    "choices": [
      "A) multiplexes O/Head Panel switches signals to send them to A629 buses",
      "B) multiplexes A629 signals to turn on O/ Head panel lights",
      "C) demultiplexes O/Head Panel switches signals to send them to A629 buses"
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "The components of the OPAS are:",
    "choices": [
      "A) OPCF, 1 PDCU and 1 OPBC",
      "B) OPCFS, 2 PDCUs and 2 OPBCS",
      "C) OPCF, 1 PDCU and 2 OPBCS"
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "The OPAS:",
    "choices": [
      "A) Changes A629 to A429 and vice versa",
      "B) Connects O/Head Panel switches and lights to A629 buses",
      "C) Connects computers to the A629 buses"
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "Current Mode Couplers of different brands (SCI and Amphenol):",
    "choices": [
      "A) cannot be installed on the same bus",
      "B) cannot be mixed on a B777",
      "C) are interchangeable"
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "The ARINC 629 buses are checked through:",
    "choices": [
      "A) a software configuration check of one LRU on each bus.",
      "B) an ARINC 629 system test from the MAT",
      "C) an ARINC 629 operational test from"
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "In the periodic mode, the timer that allows an LRU to transmit again on an A629 bus is:",
    "choices": [
      "A) the Terminal Gap timer",
      "B) the Synchronisation Gap timer",
      "C) the Transmit Interval timer"
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "The System test of the Right OPAS tests:",
    "choices": [
      "A) the right OPBC, 1 port of each PDCU and 1 card of each OPCF",
      "B) the right OPBC, the right PDCU and the right OPCF",
      "C) the right and left OPBCs, 1 port of each PDCU and 1 card of each OPCF"
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "The rectifier in the Current Mode Coupler:",
    "choices": [
      "A) Changes Voltage data into Current data",
      "B) Provides power to the coupler",
      "C) Corrects faults in the data strings"
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "Discretes from the switches connected to the OPAS are:",
    "choices": [
      "A) multiplexed by the OPAS",
      "B) demultiplexed by the OPAS",
      "C) changed into Arinc 429."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
 {
    "question": "The Emergency Locator Transmitter (ELT) uses power from:",
    "choices": [
      "A) airplane power.",
      "B) airplane power for test purpose.",
      "C) its own batteries."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "To stop the ELT after accidental activation:",
    "choices": [
      "A) Use OFF position of guarded switch in the ELT control panel.",
      "B) Use RESET position of guarded switch in the ELT control panel.",
      "C) Use DISARMED position of guarded switch in the ELT control panel."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "To make direct access announcements, flight attendants use cabin attendant handsets (CAHs) at:",
    "choices": [
      "A) any door.",
      "B) doors 1 left and 3 left.",
      "C) doors 1 left only."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "To do the cabin test for the passenger address system (PAS):",
    "choices": [
      "A) Use the cabin system control panel (CSCP) only.",
      "B) Use the cabin area control panel (CACP) only.",
      "C) Use the cabin system control panel (CSCP) or the cabin area control panel (CACP)."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "To call the flight deck, the ground crew:",
    "choices": [
      "A) pushes the PTT on the headset.",
      "B) pushes the FLIGHT DECK CALL switch on P40 panel.",
      "C) pushes the flight deck call switch in the Ground Power Receptacle Panel."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "The Cockpit Voice Recorder System keeps the last:",
    "choices": [
      "A) 30 minutes of audio.",
      "B) 90 minutes of audio.",
      "C) 120 minutes of audio."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "An erase switch on the Cockpit Voice Recorder panel erases the recorded audio when:",
    "choices": [
      "A) the airplane is on the ground.",
      "B) the parking brake is set.",
      "C) the airplane is on the ground and the parking brake is set."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "To establish communication between cockpit and service interphone jacks, you need to:",
    "choices": [
      "A) Use captain’s headset.",
      "B) Use first officer’s headset.",
      "C) Put Service Interphone Switch (P5) to ON position."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "What are the functions of Ground Crew Call system?",
    "choices": [
      "A) To tell flight deck personnel that there is a call from the ground and/or ground personnel that there is a call from the flight deck.",
      "B) To tell ground personnel that the air data inertial reference unit (ADIRU) is on battery power or that there is an equipment cooling failure.",
      "C) Both a and b."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "To call the ground crew from flight deck, you use:",
    "choices": [
      "A) The left or right CDU.",
      "B) The center CDU.",
      "C) The Call button on P5."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "The Flight Deck Call switch is located at:",
    "choices": [
      "A) P40.",
      "B) P5.",
      "C) P25."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "How to call cockpit from the ground?",
    "choices": [
      "A) Push FLIGHT DECK CALL switch on P40.",
      "B) Push GROUND CALL switch on P40.",
      "C) Push FLIGHT DECK CALL switch on the center CDU."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "In what case will the ground crew call horn come on continuously?",
    "choices": [
      "A) When there is a call from the flight deck.",
      "B) When the ADIRU is on battery power.",
      "C) When there is a fire."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "What LRU modulates incoming entertainment audio signals from the audio tape reproducers onto the RF carrier?",
    "choices": [
      "A) PESC-V (passenger entertainment system controller - video).",
      "B) CFS (cabin file server).",
      "C) PESC-A (passenger entertainment system controller - audio)."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "The purpose of the overhead panel ARINC 629 system (OPAS) is to:",
    "choices": [
      "A) Connect flight deck switches and lights to the ARINC 629 system.",
      "B) Change ARINC 429 data to ARINC 629 data.",
      "C) Connect the flight deck to the fiber optic network."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "What IFE component demodulates the entertainment digital audio from the RF signal and receives and transmits passenger service and cabin management data?",
    "choices": [
      "A) VMOD (Video Modulator).",
      "B) EPCU (Enhanced passenger control unit).",
      "C) AVU."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "Which unit manage a zone area?",
    "choices": [
      "A) PAT (Primary Access Terminal).",
      "B) AVU (Audio and Video Unit).",
      "C) ADB (Area Distribution Box)."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "The yellow led indicator light indicates that the PAT?",
    "choices": [
      "A) Has had a total communication failure.",
      "B) The unit must be replaced.",
      "C) Data link is normal."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "What LRU is responsible for storing the configurable data base (IFE downloads, seat applications, game software, flight survey information)?",
    "choices": [
      "A) PAT (primary access terminal).",
      "B) CFS (cabin file server).",
      "C) ADB (area distribution box)."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "Which component distributes system power to five columns of the AVU?",
    "choices": [
      "A) AVU.",
      "B) VMOD.",
      "C) ADB."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "The ADB yellow led indicator light could indicate which of the following?",
    "choices": [
      "A) The unit needs to be replaced.",
      "B) Major communication failure.",
      "C) Major communication failure and the unit needs to be replaced."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },	
  {
    "question": "The Cabin File Server (CFS) battery back up ensures?",
    "choices": [
      "A) Memorization of configuration data base.",
      "B) Automatic and proper shutdown.",
      "C) Memorization of configuration data base and automatic proper shutdown."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "Which LRU stores the games applications?",
    "choices": [
      "A) Cabin File Server (CFS).",
      "B) Video Modulator (VMOD).",
      "C) Primary Access Terminal (PAT)."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "What happens if you lose the link between CFS and the PAT?",
    "choices": [
      "A) You lose all the IFE system.",
      "B) You keep the overhead video.",
      "C) A back up function provides the first and business class video."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "To activate the airshow, you must?",
    "choices": [
      "A) Enter the flight planning.",
      "B) Enter the flight info page on the PAT.",
      "C) Push the circuit breaker."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "The Area Distribution Box (ADB) red light indicator could indicate which of the following?",
    "choices": [
      "A) Major communication failure.",
      "B) The unit needs to be replaced.",
      "C) The system is not energized."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "During Passenger Entertainment System Controller (PESC-A) operation, if a yellow LED flashes slowly, this indicates?",
    "choices": [
      "A) The unit needs to be replaced.",
      "B) The unit does not recognize a valid data base.",
      "C) This is a normal condition."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "What computer provides the aircraft position to the airshow system?",
    "choices": [
      "A) Primary Access Terminal (PAT).",
      "B) Flight Management.",
      "C) Cabin File Server (CFS)."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "How are the tapping units identified?",
    "choices": [
      "A) By the software.",
      "B) By a hard pin programming on the J2 connector.",
      "C) The tapping units are not identified."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "The CSMU sends the cabin data to the?",
    "choices": [
      "A) CFS (primary access terminal).",
      "B) PAT (primary access terminal).",
      "C) PESC-A (passenger entertainment system controller - audio)."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "In the periodic mode, after an ARINC 629 LRU transmits to the data bus, which timer lets the LRU transmit again?",
    "choices": [
      "A) Terminal gap (TG) timer.",
      "B) Synchronization gap (SG) timer.",
      "C) Transmit interval (TI) timer."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "The purpose of the ARINC 629 signal gateway (ASG) card in the SCF is to?",
    "choices": [
      "A) Change data between ARINC 429 and ARINC 629 formats.",
      "B) Monitor for forward and aft cargo compartment fires.",
      "C) Change analog signals to digital signals."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "How many ARINC 629 buses are there on the B777 ?",
    "choices": [
      "A) Three.",
      "B) Seven.",
      "C) Eleven."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "Which function has the highest print priority for the flight compartment printer?",
    "choices": [
      "A) Central maintenance computing function (CMCF).",
      "B) Multi-function display (MFD).",
      "C) Flight deck communication function (FDCF)."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "To enter text on a multi-function display (MFD), you must use the:",
    "choices": [
      "A) Maintenance access terminal (MAT) keyboard in the flight deck and the cursor control device (CCD).",
      "B) Control display unit (CDU) on a flight management computing function (FMCF) page and the display select panel (DSP).",
      "C) Control display unit (CDU) keypad on a flight management computing function (FMCF) page and a cursor control device (CCD)."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "For the cabin services system, which components control the master call lights?",
    "choices": [
      "A) Passenger address/cabin interphone controller (PA/CI).",
      "B) Overhead electronic units (OEUs).",
      "C) Zone management units (ZMUs)."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "Which of these cabin services system components connect to reading lights?",
    "choices": [
      "A) Zone management units (ZMUs).",
      "B) Cabin system management unit (CSMU).",
      "C) Overhead electronic units (OEUs)."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "How many columns of overhead electronics units (OEUs) does a zone management unit (ZMU) control?",
    "choices": [
      "A) Four.",
      "B) Two.",
      "C) Three."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "Which of these LRUs uses operational program software?",
    "choices": [
      "A) Cabin attendant handsets (CAH).",
      "B) Ambient noise sensors (ANS).",
      "C) Speaker drive modules (SDM)."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "Which component do you use to load cabin services system (CSS) LRUs with a configuration database?",
    "choices": [
      "A) Cabin system control panel (CSCP).",
      "B) Cabin system management unit (CSMU).",
      "C) Maintenance access terminal (MAT)."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "What audio does the audio management unit (AMU) send to the cockpit voice recorder?",
    "choices": [
      "A) Captain, first officer, area microphone audio.",
      "B) Captain, first observer, second observer audio.",
      "C) Captain, first officer and first observer audio."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "Which type of cabin services system test causes a complete BITE?",
    "choices": [
      "A) Quick test.",
      "B) All test.",
      "C) All engineering tests."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "Which component do you use to do a QUICK TEST?",
    "choices": [
      "A) Center control display unit (CDU).",
      "B) Cabin system control panel (CSCP).",
      "C) Cabin area control panel (CACP)."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "How can you disable a cabin area control panel (CACP) so you can clean the screen?",
    "choices": [
      "A) Select PANEL OVERRIDE on the cabin controls main menu.",
      "B) Select PANEL LOCKOUT on the cabin area control panel (CACP) display controls screen.",
      "C) Open circuit breaker for the cabin system management unit (CSMU)."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "On the cabin system control panel, which CABIN MAINTENANCE menu selection do you use to find faults related to flight deck effects?",
    "choices": [
      "A) CABIN REPORT.",
      "B) CABIN CONFIGURATION.",
      "C) CABIN FAULTS REVIEW."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "Which type of cabin services system test collects continuous monitor data?",
    "choices": [
      "A) All test.",
      "B) Quick test.",
      "C) All engineering tests."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "If the normal cabin interphone controller (CIC) fails, what component do you use to select the alternate CIC?",
    "choices": [
      "A) The passenger address/cabin interphone (PA/CI) controller.",
      "B) The attendant switch panel.",
      "C) A cabin area control panel."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "What are the functions of the passenger address controller (PAC) of the passenger address/cabin interphone (PA/CI) controller?",
    "choices": [
      "A) Receives cabin interphone call inputs and sends them to the flight crew.",
      "B) Receives audio inputs, selects the highest priority and sends the digital audio signal to the speaker drive modules (SDMs).",
      "C) Receives digital audio input, changes it to analog and sends it to the speakers."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "How many passenger address controllers (PACs) does the passenger address/cabin interphone (PA/CI) controller have?",
    "choices": [
      "A) Two.",
      "B) Three.",
      "C) Four."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "The overhead electronics units (OEUs) control the?",
    "choices": [
      "A) Master call lights.",
      "B) Passenger information signs.",
      "C) Chimes."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "The audio entertainment players (AEP) are?",
    "choices": [
      "A) In the main equipment center.",
      "B) Above the cabin ceiling panels.",
      "C) In the passenger cabin."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "Which component in a satellite communication (SATCOM) system contains system operation software and the position/frequency data for each satellite?",
    "choices": [
      "A) Audio management unit (AMU).",
      "B) Satellite data unit (SDU).",
      "C) Radio frequency unit (RFU)."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "What are the conditions to erase the cockpit voice recorder (CVR)?",
    "choices": [
      "A) The aircraft must be on the ground and the parking brake on.",
      "B) The aircraft must be on the ground and the parking brake off.",
      "C) The aircraft must be in the air and the flaps up."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
{
    "question": "If an overhead electronics unit (OEU) is in zone 2, right column, and fourth unit back in the column, what is its address?",
    "choices": [
      "A) 3 - 2 - 4.",
      "B) 4 - 3 - 2.",
      "C) 2 - 3 - 4."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "If a speaker drive module (SDM) is in zone 3, and fifth unit back in the column, what is its address?",
    "choices": [
      "A) 3 - 2 - 5.",
      "B) 3 - 5.",
      "C) 3 - 3 - 4."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "Which data bus does the CMS core equipment use for most CMS communications?",
    "choices": [
      "A) Intersystem bus.",
      "B) RF bus.",
      "C) Cabin interphone bus."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "What functionality do you lose if the cabin system management unit (CSMU) fails?",
    "choices": [
      "A) CABIN MAINTENANCE.",
      "B) Monitor and control functions.",
      "C) CABIN CONTROLS."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "What is the first test you should run if there is a CSS problem?",
    "choices": [
      "A) All test.",
      "B) Quick test.",
      "C) Engineering test."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "When do you need to re-install the configuration database?",
    "choices": [
      "A) When you test any CSS component.",
      "B) When you replace any CSS component.",
      "C) When you replace any CSS component, except peripherals (lights, speakers, cabin attendant handsets (CAHs), etc...)"
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "What functionality do you lose if a zone management unit (ZMU) fails?",
    "choices": [
      "A) There is no passenger address available.",
      "B) There is no lighting control in the cabin.",
      "C) There is no lighting control in the zone controlled by the ZMU."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "What functionality do you lose if an overhead electronics unit (OEU) fails?",
    "choices": [
      "A) There is no lighting control for lights connected to the failed OEU.",
      "B) There is no lighting control in the cabin.",
      "C) There is no passenger address available for one or two speakers."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
    "question": "If there is a problem with the cabin interphone system, how can you QUICKLY determine if the problem is in the passenger address/cabin interphone (PA/CI) controller?",
    "choices": [
      "A) Push the PA NORM/ALT switch.",
      "B) Push the CI NORMAL/ALT switch.",
      "C) Do an All Test."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "How many cabin interphone controllers (CICs) are there?",
    "choices": [
      "A) 1",
      "B) 2",
      "C) 4"
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "What functionality do you lose if a cabin interphone controller (CIC) fails?",
    "choices": [
      "A) There is no lighting control in the cabin.",
      "B) There is no PA audio.",
      "C) There is no cabin interphone capability."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "What functionality do you lose if a speaker drive module (SDM) fails?",
    "choices": [
      "A) There is no passenger address available.",
      "B) There is no lighting control in the cabin.",
      "C) There is no passenger address available for one or two speakers."
    ],
    "correctAnswer": "C",
    "category": "ATA 23"
  },
  {
    "question": "What is the purpose of the current mode coupler?",
    "choices": [
      "A) To allow data transmit between two LRU only.",
      "B) To connect an LRU on the ARINC 629 data bus.",
      "C) To link one stub to another stub."
    ],
    "correctAnswer": "B",
    "category": "ATA 23"
  },
  {
    "question": "The purpose of the overhead panel ARINC 629 system (OPAS) is to?",
    "choices": [
      "A) Connect flight deck switches and lights to the ARINC 629 system.",
      "B) Change ARINC 429 data to ARINC 629 data.",
      "C) Change ARINC 636 data to ARINC 429 data."
    ],
    "correctAnswer": "A",
    "category": "ATA 23"
  },
  {
        "question": "The control normally used to show the flight deck communication function main menu on the display, is?",
        "choices": [
            "A) Any control display unit CDU.",
            "B) The display select panel DSP.",
            "C) The left or right EFIS control panel."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "You need to configure the flight deck communication function, you use the following menu?",
        "choices": [
            "A) ATC",
            "B) STATUS",
            "C) MANAGER"
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "The mixability of the current mode couplers is as follows:",
        "choices": [
            "A) Amphenol and SCI couplers should not be mixed on the same Bus.",
            "B) Amphenol and SCI couplers should not be mixed on the same LRU when it has several input/output data buses.",
            "C) Amphenol and SCI couplers are interchangeable."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "The test of the left Overhead Panel Arinc 629 System (OPAS) concerns?",
        "choices": [
            "A) Left OPFC, left PDCU and the left OPBC.",
            "B) Left OPBC, one port of each PDCU and one card of each OPCF.",
            "C) All OPAS input/output on the left Systems ARINC 629 Buses."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "The cabin Service System (CSS) integrates many cabin and passengers systems like?",
        "choices": [
            "A) Passenger Address.",
            "B) Video entertainment.",
            "C) Cabin pressure control."
        ],
        "correctAnswer": "A",
        "category": "ATA 23"
    },
    {
        "question": "On the same ARINC 629 bus, we can install?",
        "choices": [
            "A) 2 Computers.",
            "B) 3 Computers.",
            "C) Several computers."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "The ARINC 629 coupler allows?",
        "choices": [
            "A) To connect a computer to the bus.",
            "B) To connect a bus to another bus of same type.",
            "C) To connect an ARINC 429 bus to an ARINC 629 bus."
        ],
        "correctAnswer": "A",
        "category": "ATA 23"
    },
    {
        "question": "The purpose of the coupler rectifier is to:",
        "choices": [
            "A) To detect and correct faulty data.",
            "B) To change voltage data into current data.",
            "C) To provide power to the coupler."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "Switches data going to the OPAS shall be first?",
        "choices": [
            "A) Multiplexed.",
            "B) Demultiplexed.",
            "C) Demultiplexed , then multiplexed at destination."
        ],
        "correctAnswer": "A",
        "category": "ATA 23"
    },
    {
        "question": "The major OPAS components are?",
        "choices": [
            "A) 1 OPCF, 1 PDCU and 2 OPBC.",
            "B) 1 OPCF, 1PDCU AND 1 OPBC.",
            "C) 2 OPCF , 2 PDCU and 2 OPBC."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "OPAS abbreviation means?",
        "choices": [
            "A) Overhead panel ARINC 629 system.",
            "B) Onboard panel ARINC system.",
            "C) Onboard panel ARINC six two nine."
        ],
        "correctAnswer": "A",
        "category": "ATA 23"
    },
    {
        "question": "OPAS inputs and outputs are as follows?",
        "choices": [
            "A) Switches and lights are simultaneously inputs and lights are outputs.",
            "B) Switches are inputs and lights are outputs .",
            "C) Switches and light could be both inputs and outputs ."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "The OPAS is linked to?",
        "choices": [
            "A) Fiber optic buses.",
            "B) ARINC 429 buses.",
            "C) ARINC 629 buses."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "The screen of the MAT is made of?",
        "choices": [
            "A) Optical fiber technology.",
            "B) LCD technology.",
            "C) CRT technology."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "The power regulation in the SCF is as follow?",
        "choices": [
            "A) The linear regulator output power is sensed by the linear output 'monitor/control'.",
            "B) The linear monitor sends independent power supply to each member ARINC 629 system card in the SCF.",
            "C) The linear regulator sends power to the active 629 output bus."
        ],
        "correctAnswer": "A",
        "category": "ATA 23"
    },
    {
        "question": "Left and Right system card files power supplies are as follow?",
        "choices": [
            "A) Both left and right SCF receive a hot bat bus.",
            "B) The left SCF receives hot bat bus and the right receives bat bus sec 2.",
            "C) Both left and right SCF receive a hot bat bus and bat bus sec 2."
        ],
        "correctAnswer": "A",
        "category": "ATA 23"
    },
    {
        "question": "The power control switches in the SCF?",
        "choices": [
            "A) Are discrete inputs to the 'linear regulators'.",
            "B) Are located on the outputs of the 'linear regulators'.",
            "C) Are inputs to the 'linear outputs monitor/control'."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "The left system card file chassis (P85) provide data to?",
        "choices": [
            "A) To the left system ARINC 629 bus.",
            "B) To the left system and left flight control ARINC 629 bus.",
            "C) To the left and right systems ARINC 629 bus."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "Concerning the SCF, there are?",
        "choices": [
            "A) One SCF chassis.",
            "B) Two SCF chassis.",
            "C) Four SCF chassis."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "The output data of a SCF chassis is transmitted on:",
        "choices": [
            "A) Optical bus.",
            "B) ARINC 429 buses.",
            "C) ARINC 629 buses."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "While removing a card from the SCF chassis, one must make uses of?",
        "choices": [
            "A) The ESDS.",
            "B) Isolated shoes.",
            "C) Isolated gloves."
        ],
        "correctAnswer": "A",
        "category": "ATA 23"
    },
    {
        "question": "How many columns of speaker drive modules (SDMs) does the passenger address system have?",
        "choices": [
            "A) Two.",
            "B) Three.",
            "C) Four."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "The HF and VHF transceivers receive the port select discret from?",
        "choices": [
            "A) All RTPs (Radio Tuning Panel).",
            "B) The one side RTP, except the center RTP."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "In the SATCOM system, the purpose of the Beam Steering Unit is?",
        "choices": [
            "A) To adjust the radio frequency signal level.",
            "B) To send pointing data to the antenna.",
            "C) To increase the strength of received low level satellite signals."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "To control the IFE functions, you can operate from?",
        "choices": [
            "A) The MAT (Maintenance Access Terminal).",
            "B) The CSCP (Cabin Service Control Panel).",
            "C) The PAT (Primary Access Terminal)."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "The IFE provides?",
        "choices": [
            "A) Video programs in the first and business classes only.",
            "B) The distributed and overhead video programs.",
            "C) Video data, audio data is given by the CSS (Cabin Service System)."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "All LRUs of the IFE are?",
        "choices": [
            "A) In the VCC (Video Control Center).",
            "B) In the MEC (Main Equipment Center).",
            "C) Distributed in the Aircraft."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "The IFE includes this function?",
        "choices": [
            "A) The cabin lights.",
            "B) The distribution video.",
            "C) The passenger address."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "The ground crew call horn is in the?",
        "choices": [
            "A) P40 Service and APU shutdown panel.",
            "B) Nose wheel well area.",
            "C) Forward Equipment Center."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "To select an active frequency for the left VHF Comm transceiver, you can use?",
        "choices": [
            "A) Any radio Tuning Panel (RTP).",
            "B) Only the left Radio Tuning Panel (RTP).",
            "C) The left Radio Tuning Panel or select CDU."
        ],
        "correctAnswer": "A",
        "category": "ATA 23"
    },
    {
        "question": "The AIMS sends ACARS data to the VHF Comm transceiver on?",
        "choices": [
            "A) ARINC 629.",
            "B) ARINC 429.",
            "C) ARINC 618."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "The left VHF Comm transceiver is powered by?",
        "choices": [
            "A) Left transfer bus.",
            "B) Left main DC bus.",
            "C) Captain Flight Instrument bus."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "To send signals between the flight crew and the ground crew, the Ground Crew Call System uses the?",
        "choices": [
            "A) Audio Management Unit (AMU).",
            "B) Passenger Address / Cabin Interphone (PA/CI) controller.",
            "C) Center CDU."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "Selecting ATC menu, if an ATC connection has not been established, the cursor shows on this selection:",
        "choices": [
            "A) Free Text Message.",
            "B) Logon / Status.",
            "C) Emergency Report."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "The flight deck communication function (FDCF) is in?",
        "choices": [
            "A) CPM / GG.",
            "B) CPM / ACMF or CPM / Basic.",
            "C) CPM / Comm."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "ACARS modem in the left CPM / Comm exchanges data with?",
        "choices": [
            "A) Left VHF Comm transceiver.",
            "B) Center VHF Comm transceiver.",
            "C) Right VHF Comm transceiver."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "Many CSS components get configuration data by?",
        "choices": [
            "A) Program pin.",
            "B) Database software.",
            "C) Selection through the MAT."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "What is the interface between the flight attendant and the In-Flight Entertainment system?",
        "choices": [
            "A) The CSCP (Cabin Service Control Panel).",
            "B) The MAT (Maintenance Access Terminal).",
            "C) The PAT (Primary Access Terminal)."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
{
        "question": "The IFE system provides entertainment in which classes?",
        "choices": [
            "A) First class only.",
            "B) First and Business classes.",
            "C) In each class (First, Business, and Economy)."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "Which unit controls an IFE zone in the cabin area?",
        "choices": [
            "A) ZMU (Zone Management Unit).",
            "B) AVU (Audio and Video Unit).",
            "C) ADB (Area Distribution Box)."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "What kind of cable is used to send video and audio data?",
        "choices": [
            "A) Coaxial cable.",
            "B) Twisted paired cable.",
            "C) No cable, the data is transmitted by radio frequency."
        ],
        "correctAnswer": "A",
        "category": "ATA 23"
    },
    {
        "question": "The CSS has interfaces with other systems for different functions like?",
        "choices": [
            "A) Cabin door status and emergency lights.",
            "B) Service Interphone and cargo loading.",
            "C) Cabin temperature selection and water waste tanks."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "To test and to program the CSS, the maintenance personnel can use?",
        "choices": [
            "A) A CSCP or a CACP by entering a password.",
            "B) A CSCP or the MAT through the maintenance page.",
            "C) A CSCP only."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
    {
        "question": "The cabin service system (CSS) is an integrated system that combines these functions?",
        "choices": [
            "A) Passenger Address and Cabin Lighting.",
            "B) Service Interphone and Cabin Lighting.",
            "C) Cabin Lighting and emergency light system."
        ],
        "correctAnswer": "A",
        "category": "ATA 23"
    },
    {
        "question": "In each zone, the ZMU (ZONE Management Unit) controls which unit?",
        "choices": [
            "A) SDM (Speaker Drive Module).",
            "B) OEU (Overhead Electronic Unit).",
            "C) EPCU (Enhanced Passenger Control Unit)."
        ],
        "correctAnswer": "B",
        "category": "ATA 23"
    },
    {
        "question": "The Cabin Configuration Data Base (CDB) is loaded in which unit?",
        "choices": [
            "A) The hard disk drive of the MAT.",
            "B) CFS (Cabin File Server).",
            "C) CSCP (Cabin Service Control Panel) memory."
        ],
        "correctAnswer": "C",
        "category": "ATA 23"
    },
{
	"question": "The FDCD PSA operate in secondary Mode when",
	"choices" :[
	"A) There is no power from the BUG PMG",
	"B) The FCDC BAttery is low",
	"C) an IDG is failed"
	],
	"correctAnswer": "A",
        "category": "ATA 24"
},
{
	"question": "The Signal Interface Unit is",
	"choices" :[
	"A) an analog interface to the ELMS",
	"B) a digital interface to the ELMS",
	"C) an interface between AIMS and ELMS"
	],
	"correctAnswer": "A",
        "category": "ATA 24"
},
{
	"question": "The ELMS LRU digitally controlling load shedding is",
	"choices" :[
	"A) the SIU",
	"B) the Computing and Communication Unit",
	"C) the Power Panel COntroller"
	],
	"correctAnswer": "B",
        "category": "ATA 24"
},	
{
	"question": "The main battery and APU battery chargers are powered by",
	"choices" :[
	"A) the ground service bus",
	"B) the ground handling bus",
	"C) the LH and RH DC buses"
	],
	"correctAnswer": "A",
        "category": "ATA 24"
},	
{
	"question": "On ground with no External Power, the bus getting power when you press the BAT switch is",
	"choices" :[
	"A) the BAT Bus",
	"B) the HOT BAT Bus",
	"C) the BAT bus sect. 2"
	],
	"correctAnswer": "C",
        "category": "ATA 24"
},
{
	"question": "The RAT generatorsupplies power to",
	"choices" :[
	"A) the captain and F/O FLT INST Buses",
	"B) The left and right main AC buses",
	"C) The Left and right WFR buses"
	],
	"correctAnswer": "A",
        "category": "ATA 24"
},	
{
	"question": "The Main Battery Charger can::",
	"choices" :[
	"A) charge the APU battery",
	"B) operate as a TRU",
	"C) charge the FCDC batteries"
	],
	"correctAnswer": "B",
        "category": "ATA 24"
},
{
	"question": "PMGs power:",
	"choices" :[
	"A) is regulated to 28v dc by the BUG CSD and a TRU",
	"B) is converted to 28v dc by the PSA Power Converters",
	"C) is regulated to 28v ac by a governor unit"
	],
	"correctAnswer": "B",
        "category": "ATA 24"
},
{
	"question": "In Secondary mode and if the voltage on the FCDC bus drops below 21.0v dc with the airplane on the ground, the PSA:",
	"choices" :[
	"A) reverts to the primary mode",
	"B) will power down",
	"C) goes to the Backup mode"
	],
	"correctAnswer": "B",
        "category": "ATA 24"
},
{
	"question": "If a BUG has too much oil, the electrical maintenance page OIL LEVEL indication is",
	"choices" :[
	"A) Overfull",
	"B) Normal",
	"C) Service"
	],
	"correctAnswer": "C",
        "category": "ATA 24"
},
{
	"question": "which mode of operation are the FCDC PSAs when the airplane is on the ground with the engines off",
	"choices" :[
	"A) Backup",
	"B) Primary",
	"C) Secondary"
	],
	"correctAnswer": "C",
        "category": "ATA 24"
},
{
	"question": "The right FCDC PSA operates in the Backup Mode",
	"choices" :[
	"A) the FCDC Battery is low",
	"B) there is no power from the BUG PMG",
	"C) never"
	],
	"correctAnswer": "C",
        "category": "ATA 24"
},
{
	"question": "The supplemental cooling fan operates:",
	"choices" :[
	"A) when a Backup Generator supplies power to the 2 XFR Buses",
	"B) when a Backup Generator supplies power to a XFR Bus",
	"C) when the OAT is above 26°c"
	],
	"correctAnswer": "A",
        "category": "ATA 24"
},
{
	"question": "The Supplemental Cooling Fan is turned on by:",
	"choices" :[
	"A) the Backup Generator GCU",
	"B) the Forward Equipment Cooling System",
	"C) the Backup Generator Converter"
	],
	"correctAnswer": "C",
        "category": "ATA 24"
},
{
	"question": "When two 90 KVA GPUs give power to the airplane load shedding is controlled by",
	"choices" :[
	"A) P110, P210 and P310 in Independent Operation mode",
	"B) P110 and 210 in Independent Operation mode",
	"C) P110, P210 and P310 in Interpanel Operation mode"
	],
	"correctAnswer": "B",
        "category": "ATA 24"
},
{
	"question": "To prevent the FCDC Batteries from draining when the PFCs are removed",
	"choices" :[
	"A) disconnect the main battery from the Hot Bat Bus",
	"B) open the Battery Interlock Circuit Breaker on the FCDC PSA",
	"C) do an ATA 24 Ground Test"
	],
	"correctAnswer": "B",
        "category": "ATA 24"
},
{
	"question": "No Break Power Transfers occur:",
	"choices" :[
	"A) in case of an IDG failure",
	"B) on the ground or during an Autoland Bus",
	"C) only on the ground"
	],
	"correctAnswer": "B",
        "category": "ATA 24"
},
{
	"question": "The Power Panel Controller receives digital commands from:",
	"choices" :[
	"A) the BPCU",
	"B) the Signal Interface Unit",
	"C) the Computing and Communication Unit"
	],
	"correctAnswer": "C",
        "category": "ATA 24"
},
{
	"question": "The PMGs supplying power to the FCDC PSAs are located in:",
	"choices" :[
	"A) the APU generators",
	"B) the Backup Generators",
	"C) the IDGS"
	],
	"correctAnswer": "B",
        "category": "ATA 24"
},
{
	"question": "During autoland, with all power sources available, the center critical autoland components are powered by:",
	"choices" :[
	"A) the right Backup Generator",
	"B) the left IDG",
	"C) the right IDG"
	],
	"correctAnswer": "C",
        "category": "ATA 24"
},
{
	"question": "To monitor the clogging of an IDG oil filter there must be::",
	"choices" :[
	"A) engine running and IDG oil temperature above 62°c",
	"B) engine running and IDG oil temperature below 62°c",
	"C) no power to the EEC and engine shutdown for less than 1 minute"
	],
	"correctAnswer": "A",
        "category": "ATA 24"
},
  {
    "question": "Where are the electrical power system control switches located in the flight compartment?",
    "choices": [
      "A) P200 right power panel and P61 overhead maintenance panel",
      "B) P5 overhead panel and P61 overhead maintenance panel",
      "C) P300 auxiliary power panel and P110 left power management panel"
    ],
    "correctAnswer": "B",
    "category": "ATA 24"
  },
  {
    "question": "Where is the RAT generator located?",
    "choices": [
      "A) P200 right power panel",
      "B) E4 rack",
      "C) Wing-to-body fairing aft of the right main gear"
    ],
    "correctAnswer": "C",
    "category": "ATA 24"
  },
  {
    "question": "What components are in the E5 rack?",
    "choices": [
      "A) ELMS panels",
      "B) Backup generator and IDG fuel/oil heat exchanger",
      "C) FCDC components"
    ],
    "correctAnswer": "C",
    "category": "ATA 24"
  },
  {
    "question": "Where is the APU generator attached?",
    "choices": [
      "A) Main equipment center",
      "B) APU gearbox",
      "C) Engine accessory gearbox"
    ],
    "correctAnswer": "B",
    "category": "ATA 24"
  },
  {
    "question": "What components are in the E10 rack?",
    "choices": [
      "A) Backup generator and IDG fuel/oil heat exchanger",
      "B) FCDC components",
      "C) APU battery and battery charger"
    ],
    "correctAnswer": "C",
    "category": "ATA 24"
  },
  {
    "question": "Where does the IDG attach to on each engine?",
    "choices": [
      "A) Aft side of the main gearbox",
      "B) Wing-to-body fairing",
      "C) E10 rack"
    ],
    "correctAnswer": "A",
    "category": "ATA 24"
  },
  {
    "question": "Where is the ground service switch located?",
    "choices": [
      "A) P300 auxiliary power panel",
      "B) Flight attendant panel by door 2 left",
      "C) P310 standby power management panel"
    ],
    "correctAnswer": "B",
    "category": "ATA 24"
  },
  {
    "question": "What racks in the main equipment center contain electrical system components?",
    "choices": [
      "A) E1, E2, E3, and E4",
      "B) E5, E10, and E20",
      "C) E50, E60, and E70"
    ],
    "correctAnswer": "A",
    "category": "ATA 24"
  },
  {
    "question": "How many momentary-action switches are on the electrical panel?",
    "choices": [
      "A) Two",
      "B) Four",
      "C) Six"
    ],
    "correctAnswer": "B",
    "category": "ATA 24"
  },
  {
    "question": "Which switch connects the hot battery bus to the battery bus 2?",
    "choices": [
      "A) APU Generator Switch",
      "B) Bus Tie Switches",
      "C) Battery Switch"
    ],
    "correctAnswer": "C",
    "category": "ATA 24"
  },
  {
    "question": "Which switch controls the operation of its related BTB?",
    "choices": [
      "A) External Power Switches",
      "B) Backup Generator Switches",
      "C) Bus Tie Switches"
    ],
    "correctAnswer": "C",
    "category": "ATA 24"
  },
  {
    "question": "What does the AVAIL light indicate for the external power switches?",
    "choices": [
      "A) A closed EPC",
      "B) An open EPC",
      "C) Good power quality of the ground power source"
    ],
    "correctAnswer": "C",
    "category": "ATA 24"
  },
  {
    "question": "What does the ISLN light indicate for the bus tie switches?",
    "choices": [
      "A) A closed BTB",
      "B) An open BTB",
      "C) Good power quality of the ground power source"
    ],
    "correctAnswer": "B",
    "category": "ATA 24"
  },
  {
    "question": "What is the order of power source selection for the ground service bus?",
    "choices": [
      "A) APU generator, Primary external, Right main ac bus",
      "B) Primary external, Right main ac bus, APU generator",
      "C) Right main ac bus, Primary external, APU generator"
    ],
    "correctAnswer": "C",
    "category": "ATA 24"
  },
  {
    "question": "When both primary external power and the APU generator are available, which power source is selected for the ground handling ac bus?",
    "choices": [
      "A) APU generator",
      "B) Secondary external power",
      "C) Primary external power"
    ],
    "correctAnswer": "C",
    "category": "ATA 24"
  },
  {
    "question": "Which of the following connects power between the main ac buses?",
    "choices": [
      "A) Ground handling relay",
      "B) GSSR",
      "C) BTBs"
    ],
    "correctAnswer": "C",
    "category": "ATA 24"
  },
  {
    "question": "Which of the following is not a component of the external power system?",
    "choices": [
      "A) Primary EPC",
      "B) Ground handling TRU",
      "C) APU generator"
    ],
    "correctAnswer": "C",
    "category": "ATA 24"
  },
  {
    "question": "What does the BPCU control on the airplane?",
    "choices": [
      "A) External power only",
      "B) Ground handling and ground service power",
      "C) Both external power and ground service power"
    ],
    "correctAnswer": "C",
    "category": "ATA 24"
  },
  {
    "question": "What happens to the ground handling bus if the engines are running or if the airplane is in the air?",
    "choices": [
      "A) It has power",
      "B) It does not have power",
      "C) It is disconnected"
    ],
    "correctAnswer": "B",
    "category": "ATA 24"
  },
  {
    "question": "Which receptacle should you always use when connecting to external power?",
    "choices": [
      "A) Secondary receptacle",
      "B) Primary receptacle",
      "C) Either a or b"
    ],
    "correctAnswer": "B",
    "category": "ATA 24"
  },
  {
    "question": "What are the steps to apply external power to the airplane electrical system?",
    "choices": [
      "A) Observe indications, operate control switches, connect ground power plugs",
      "B) Connect ground power plugs, observe indications, operate control switches",
      "C) Operate control switches, connect ground power plugs, observe indications"
    ],
    "correctAnswer": "B",
    "category": "ATA 24"
  },
{
  "question": "What controls the electrical load shedding?",
  "choices": [
    "A) BPCU (bus power control unit).",
    "B) ELMS (electrical load management unit).",
    "C) GCUs (generator control unit)."
  ],
  "correctAnswer": "B",
  "category": "ATA 24"
},
    {
        "question": "Where is the backup generator?",
        "choices": [
            "A) On the engine main gearbox.",
            "B) In the main equipment center (MEC).",
            "C) On the APU gearbox."
        ],
        "correctAnswer": "A",
        "category": "ATA 24"
    },
    {
        "question": "If a backup generator has too much oil (over-serviced), the electrical maintenance page OIL LEVEL indication shows?",
        "choices": [
            "A) OVERFILL.",
            "B) NORMAL.",
            "C) SERVICE."
        ],
        "correctAnswer": "C",
        "category": "ATA 24"
    },
    {
        "question": "The left and right IDGs are the only power sources operating. What happens when the right IDG fails?",
        "choices": [
            "A) The standby system supplies power to the right main ac bus.",
            "B) The two backup generators supply power to the right main ac bus.",
            "C) The left main ac bus supplies power to the right main ac bus."
        ],
        "correctAnswer": "C",
        "category": "ATA 24"
    },
    {
        "question": "What component controls the backup generators?",
        "choices": [
            "A) Backup generator converter.",
            "B) ELMS electronics unit.",
            "C) BPCU (Bus Power Control Unit)."
        ],
        "correctAnswer": "A",
        "category": "ATA 24"
    },
    {
        "question": "The backup generator converter automatically does a test of the backup generators immediately after?",
        "choices": [
            "A) Engine starts.",
            "B) DC/standby self-tests.",
            "C) Engine shutdowns."
        ],
        "correctAnswer": "A",
        "category": "ATA 24"
    },
    {
        "question": "The airplane is on the ground and has no electrical power. When you push the battery switch ON, what receives power?",
        "choices": [
            "A) Battery bus.",
            "B) Battery No. 2 bus.",
            "C) Captain's flight instrument bus."
        ],
        "correctAnswer": "B",
        "category": "ATA 24"
    },
    {
        "question": "The PMGs that supply power to the flight controls dc (FCDC) power supply assembly (PSA) are in the?",
        "choices": [
            "A) Backup generators.",
            "B) IDGs.",
            "C) APU generator."
        ],
        "correctAnswer": "A",
        "category": "ATA 24"
    },
    {
        "question": "What controls the relay that sends power to the ground handling bus?",
        "choices": [
            "A) BPCU (Bus Power Control Unit).",
            "B) APU GCU (Generator Control Unit).",
            "C) Flight GCU."
        ],
        "correctAnswer": "A",
        "category": "ATA 24"
    },
    {
        "question": "The engine is running and the IDG oil becomes too hot. What protects the IDG?",
        "choices": [
            "A) The ELMS sheds IDG loads.",
            "B) A thermal plug in the IDG melts and the drive disconnects.",
            "C) The GCU automatically energizes the disconnect solenoid."
        ],
        "correctAnswer": "B",
        "category": "ATA 24"
    },
    {
        "question": "What cools the APU generator?",
        "choices": [
            "A) APU oil.",
            "B) APU fuel.",
            "C) APU bleed air."
        ],
        "correctAnswer": "A",
        "category": "ATA 24"
    },
    {
        "question": "The supplement cooling fan supplies cooling air to the?",
        "choices": [
            "A) Backup generator converter.",
            "B) Backup generator air/oil heat exchanger.",
            "C) Main battery charger."
        ],
        "correctAnswer": "A",
        "category": "ATA 24"
    },
    {
        "question": "Primary external power always does a break-power transfer with the?",
        "choices": [
            "A) APU generator.",
            "B) Secondary external power.",
            "C) Left IDG."
        ],
        "correctAnswer": "B",
        "category": "ATA 24"
    },
    {
        "question": "The BPCU has these power sources?",
        "choices": [
            "A) Primary external power, Hot bat bus, Right DC bus.",
            "B) Batt bus section 2, Right DC bus.",
            "C) Primary external power, Batt bus section 2, Right DC bus."
        ],
        "correctAnswer": "C",
        "category": "ATA 24"
    },
    {
        "question": "When the primary external power supply power only to the ground handling bus, the two indication lights are as follow?",
        "choices": [
            "A) CONNECTED and NOT IN USE lights are off.",
            "B) CONNECTED light is on and NOT IN USE light is off.",
            "C) CONNECTED and NOT IN USE lights are on."
        ],
        "correctAnswer": "B",
        "category": "ATA 24"
    },
    {
        "question": "If two power sources supply power to the airplane?",
        "choices": [
            "A) The P310 power management panel controls the loads shedding in interpanel operation mode.",
            "B) The ELMS controls independently the left side (P110) shedding, and the right side (P210) shedding (independent operation).",
            "C) The P310 power management panel controls the loads shedding in independent operation mode."
        ],
        "correctAnswer": "B",
        "category": "ATA 24"
    },
    {
        "question": "Electrical Power System operates normally?",
        "choices": [
            "A) As one channel powered by the left or right IDG source.",
            "B) As two left and right power channels always coupled.",
            "C) As two independent left and right power channels."
        ],
        "correctAnswer": "C",
        "category": "ATA 24"
    },
    {
        "question": "Which bus operates only on the ground?",
        "choices": [
            "A) The Ground Service Bus.",
            "B) The Ground Handling Bus.",
            "C) The Left Main AC Bus."
        ],
        "correctAnswer": "B",
        "category": "ATA 24"
    },
    {
        "question": "On the B777-300, the ELMS uses what component for digital control?",
        "choices": [
            "A) Signal interface unit.",
            "B) Power panel controller.",
            "C) Control and communication unit."
        ],
        "correctAnswer": "C",
        "category": "ATA 24"
    },
    {
        "question": "On the B777-300, what is the purpose of the ELMS signal interface unit?",
        "choices": [
            "A) Provides all digital interfaces in and out of ELMS.",
            "B) Provides all analog interfaces in and out of ELMS.",
            "C) Interfaces AIMS with ELMS."
        ],
        "correctAnswer": "B",
        "category": "ATA 24"
    },
    {
        "question": "On the B777-300, how many signal interface units are in a power management panel?",
        "choices": [
            "A) 1.",
            "B) 2.",
            "C) 3."
        ],
        "correctAnswer": "B",
        "category": "ATA 24"
    },
    {
        "question": "At initial power application, battery switch in 'ON' position. The Hot Bat Bus supply?",
        "choices": [
            "A) Stand By Bus.",
            "B) Bat Bus n°2.",
            "C) Capt Flight Inst Bus."
        ],
        "correctAnswer": "B",
        "category": "ATA 24"
    },
    {
        "question": "The towing power buses are supplied by the?",
        "choices": [
            "A) Ground Handling Bus.",
            "B) Standby Power.",
            "C) Hot Bat Bus."
        ],
        "correctAnswer": "C",
        "category": "ATA 24"
    },
    {
        "question": "The Backup Generator Converter turns the supplement cooling fan on, during which condition?",
        "choices": [
            "A) Backup system supplies power to both transfer bus.",
            "B) Engine shutdown.",
            "C) Inlet air temperature is greater than 98°C."
        ],
        "correctAnswer": "A",
        "category": "ATA 24"
    },
    {
        "question": "The RAT (Ram Air Turbine) makes three phases 115vac, the frequency is regulated by?",
        "choices": [
            "A) The RAT GCU.",
            "B) The RAT propeller/governor unit.",
            "C) Nothing, the TRU (Transfo Rectifier Unit) can use any frequency."
        ],
        "correctAnswer": "B",
        "category": "ATA 24"
    },
    {
        "question": "The PSA (Power Supply Assembly) has three modes of operation: primary, secondary and back-up; in which case it operates in secondary mode?",
        "choices": [
            "A) With engine running and IDG failed",
            "B) When the pink battery is low.",
            "C) When there is no power from either PMG."
        ],
        "correctAnswer": "C",
        "category": "ATA 24"
    },
    {
        "question": "The Power Management Panels P110 and P210 control load shedding, they work together (Inter-panel operation) when the supply power is?",
        "choices": [
            "A) 240kva",
            "B) 210kva",
            "C) 120kva"
        ],
        "correctAnswer": "C",
        "category": "ATA 24"
    },
    {
        "question": "For the NBPT (No Break Power Transfer) function, between external power and APU generator, the BPCU (Bus Power Control Unit) sends a request to the:",
        "choices": [
            "A) APU Generator Control Unit",
            "B) APU Controller",
            "C) Ground power source through the contacts 'E and F' of the external power receptacle."
        ],
        "correctAnswer": "B",
        "category": "ATA 24"
    },
    {
        "question": "During a normal autoland bus isolation, the right critical autoland components get power from",
        "choices": [
            "A) Right B/U Generator",
            "B) Right IDG",
            "C) Battery bus."
        ],
        "correctAnswer": "A",
        "category": "ATA 24"
    },
    {
        "question": "The PPC (Power Panel Controller) receives signal from which unit?",
        "choices": [
            "A) CPU (Control Processor Unit) card",
            "B) SIU (Signal Interface Unit)",
            "C) CCU (Computing and Communications Unit)"
        ],
        "correctAnswer": "C",
        "category": "ATA 24"
    },
    {
        "question": "The primary sources of electrical power are:",
        "choices": [
            "A) The integrated drive generators IDG’s only",
            "B) The integrated drive generators IDG’s and the APU generator",
            "C) The integrated drive generators IDG’s, the APU generator and external ground power"
        ],
        "correctAnswer": "A",
        "category": "ATA 24"
    },
    {
        "question": "IDG can not be reconnected at the line maintenance if disconnected:",
        "choices": [
            "A) Accidentally by flight or ground crew",
            "B) Automatically due the IDG oil gets too hot",
            "C) Manually due to low oil pressure"
        ],
        "correctAnswer": "B",
        "category": "ATA 24"
    },
    {
        "question": "The IDG oil level data on the electrical maintenance page and the sighglass is not occurate until you wait a minimum of:",
        "choices": [
            "A) 5 minutes after engine shutdown",
            "B) 10 minutes after engine shutdown",
            "C) 30 minutes after engine shutdown"
        ],
        "correctAnswer": "A",
        "category": "ATA 24"
    },
    {
        "question": "The primary power source for the backup converter is:",
        "choices": [
            "A) The left backup generator",
            "B) The right backup generator",
            "C) Alternatively between two backup generators at next power up"
        ],
        "correctAnswer": "B",
        "category": "ATA 24"
    },
    {
        "question": "The OFF light on the BACKUP GEN switch comes on when:",
        "choices": [
            "A) Engine fire switch is pulled out",
            "B) Backup generator converter is faulty",
            "C) GCU is faulty"
        ],
        "correctAnswer": "A",
        "category": "ATA 24"
    },
    {
        "question": "The maintenance page will show NORMAL when the backup generator is shutdown, if:",
        "choices": [
            "A) The backup generator oil level is too low (if oil does not cover the underfill sensor)",
            "B) The backup generator oil level is too high (if oil covers the two - underfill and overfill - sensors)",
            "C) Oil covers the underfill sensor, but not the overfill sensor of the backup generator"
        ],
        "correctAnswer": "C",
        "category": "ATA 24"
    },
    {
        "question": "For fiber nickel – cadmium (FNC) batteries:",
        "choices": [
            "A) Maintenance is required at A check interval",
            "B) Maintenance is required at C check interval",
            "C) No maintenance is necessary"
        ],
        "correctAnswer": "C",
        "category": "ATA 24"
    },
    {
        "question": "Standby DC power comes from:",
        "choices": [
            "A) Either the RAT generator or the main battery",
            "B) Either the backup generators or the main battery",
            "C) Either the hot battery bus or main battery"
        ],
        "correctAnswer": "A",
        "category": "ATA 24"
    },
    {
        "question": "The RAT can be deployed automatically when:",
        "choices": [
            "A) The airplane is in the air and all hydraulic power systems unpressurised for more than seconds",
            "B) The airplane is in the air and the two transfer buses do not have power for more than 15 seconds",
            "C) The airplane is in the air and the AC standby bus does not have power for more than 15 seconds"
        ],
        "correctAnswer": "B",
        "category": "ATA 24"
    },
    {
        "question": "The ground handling AC bus cannot be supplied from:",
        "choices": [
            "A) The APU generator",
            "B) Primary external power",
            "C) Secondary external power"
        ],
        "correctAnswer": "C",
        "category": "ATA 24"
    },
    {
        "question": "No break Power Transfers between the external power sources and the IDG’s or APU generator is coordinated by:",
        "choices": [
            "A) The related GCU",
            "B) The APU controller",
            "C) The BPCU"
        ],
        "correctAnswer": "C",
        "category": "ATA 24"
    },
    {
        "question": "To use secondary external power, you must:",
        "choices": [
            "A) Connect the primary external power",
            "B) Push the battery switch on",
            "C) Connect the primary external power or push the battery switch on"
        ],
        "correctAnswer": "C",
        "category": "ATA 24"
    },
    {
        "question": "Which External Power Source will automatically power Ground Handling bus without selecting BAT switch to ON",
        "choices": [
            "A) Primary",
            "B) Secondary",
            "C) Primary and Secondary"
        ],
        "correctAnswer": "A",
        "category": "ATA 24"
    },	
{
	"question": "Speed tape parameters (VMP/MMO/VMAX/VMIN) are calculated by:",
	"choices": [
		"A) The FMCF",
		"B) The PFC",
		"C) The WEU"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The CMCS:",
	"choices": [
		"A) Generates long term reports for trend monitoring",
		"B) Provides detailed fault information to help in troubleshooting",
		"C) Generates Flight Deck Effects when applicable"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "The CMCF is located in:",
	"choices": [
		"A) The right AIMS",
		"B) The left AIMS",
		"C) The left and right AIMS"
	],
	"correctAnswer": "C",
	"category": "ATA 45"
},
{
	"question": "Wich dropdown menu has the Data Load submenu:",
	"choices": [
		"A) Line Maintenance",
		"B) Extended Maintenance",
		"C) Other Function"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "A code such as 343 311 31 corresponds to:",
	"choices": [
		"A) An FDE related to ATA 34",
		"B) an ATA 34 Maintenance Message",
		"C) an ATA 31 Maintenance Message"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "To quickly find data about a status message that appears during maintenance you should go to :",
	"choices": [
		"A) The Inbound FDE",
		"B) The Existing Faults",
		"C) The Existing FDE"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The Existing FDE menu shows:",
	"choices": [
		"A) The FDE and related MMSG currently active or latched",
		"B) only active FDE",
		"C) all active or latched minor and major failures"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "A FDE can be :",
	"choices": [
		"A) any fault reported to the CMCS",
		"B) any fault reported by an LRU",
		"C) an EFIS Flag"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "To find data about a Failure that occurred in flight but didn't cause an FDE you go to:",
	"choices": [
		"A) Present Leg Faults",
		"B) Existing FDE",
		"C) Inbound FDE"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The input monitoring of the CMCF can check:",
	"choices": [
		"A) ARINC 429, ARINC 629, analog variable and analog discrete signal",
		"B) ARINC 629 signals only",
		"C) ARINC 429 and 629 signals"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The CMCS stores reports for :",
	"choices": [
		"A) 100 flight legs from 0 to -99",
		"B) 100 flights legs from 1 to 100",
		"C) 10 flights legs from 0 to 9"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "If you don't want to lose memorized reports when you replace a CPM/COM you need to:",
	"choices": [
		"A) save the reports with the MAT",
		"B) make sure the opposite AIMS cab stays energized during the CPM replacement",
		"C) nothing special if the opposite cabinet has no fault"
	],
	"correctAnswer": "C",
	"category": "ATA 45"
},
{
	"question": "The Existing FDE menu:",
	"choices": [
		"A) shows only minor faults",
		"B) shows only Status messages",
		"C) doesn't show minor faults"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "On a B777 with AIMS 2 the CMCF is loaded in the :",
	"choices": [
		"A) CPM/STD",
		"B) CPM/COM",
		"C) IOM"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "To select Input Monitoring from the CMCS main menu you click on:",
	"choices": [
		"A) Line Maintenance",
		"B) Extended Maintenance",
		"C) Other Function"
	],
	"correctAnswer": "C",
	"category": "ATA 45"
},
{
	"question": "If a Status Message appears during maintenance but doesn't show on the Present Leg Fault this is:",
	"choices": [
		"A) because PLF doesn't show FDE",
		"B) Due to flight phase screening",
		"C) not normal and you have to troubleshoot the CMCF"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "When the Maintenance Phase is Disabled from the Maintenance Enable/Disable page:",
	"choices": [
		"A) A new leg will begin at engine start",
		"B) The CMCF won't record any failure",
		"C) failures are normally recorded in the current flight leg"
	],
	"correctAnswer": "C",
	"category": "ATA 45"
},
{
	"question": "To reload previously saved Fault History:",
	"choices": [
		"A) you select Extended Maintenance/ Fault History",
		"B) you select Extended Maintenance/ Data Load",
		"C) you select Report/ Fault History"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The Other Function/ Shop Faults menu is used to:",
	"choices": [
		"A) send by ACARS real-time failures to the workshop",
		"B) to get BITE data memorized by the LRU",
		"C) do a special test requested by the shop"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "A System test :",
	"choices": [
		"A) is self-contained",
		"B) just checks interfaces of the replaced LRU",
		"C) is triggered automatically at each power up"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "ACMF reports are stored in:",
	"choices": [
		"A) Volatile memory ",
		"B) A non-volatile memory",
		"C) A non-erasable memory"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The QAR records data from:",
	"choices": [
		"A) The ACMF",
		"B) The DFDAF",
		"C) The CMCF"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The ACMF software reset test:",
	"choices": [
		"A) saves the ACMF reports to a PCMCIA memory",
		"B) erases active ACMF data but keeps stored reports",
		"C) erases ACMF reports"
	],
	"correctAnswer": "C",
	"category": "ATA 45"
},
{
	"question": "The quick report page gives you:",
	"choices": [
		"A) a time history for a group of selected signals",
		"B) reports set with the Ground Based Software Tool",
		"C) data for input into the Boeing supplied airplane perf analysis program"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The DFDAF send Data to:",
	"choices": [
		"A) The FDR",
		"B) The ACMF",
		"C) The QAR"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The FDR is turned on by:",
	"choices": [
		"A) The ACMF",
		"B) The DFDAF",
		"C) The engine oil pressure"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "If the Left CPM/COMM fail the right DFDAF send data to the left CPM/COMM on:",
	"choices": [
		"A) ARINC 629",
		"B) ARINC 717",
		"C) Fiber optic"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "The printer receives print data from DCMF in:",
	"choices": [
		"A) The left AIMS",
		"B) The right AIMS",
		"C) Both AIMS"
	],
	"correctAnswer": "C",
	"category": "ATA 45"
},
{
	"question": "The WEU System Control:",
	"choices": [
		"A) The master warning light",
		"B) The MWL + ENG and APU fire lights",
		"C) The MWL + ENG + APU and CUTOFF switch lights"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The Warning Electronic System controls:",
	"choices": [
		"A) the stab green band lamps",
		"B) the stab position indicator",
		"C) the flap lever position"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The stall warning test is in:",
	"choices": [
		"A) ATA 31",
		"B) ATA 27",
		"C) ATA 29"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "The WEU get:",
	"choices": [
		"A) analog alert aural from GPWS, PWS and TCAS",
		"B) analog alerts aurals from GPWM and digital alert aurals from PWS and TCAS",
		"C) digital alert aurals from GPWS, PWS and TCAS"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "If at least 2 WEU channels send an altitude alert signal to AIMS:",
	"choices": [
		"A) the master warning light come on",
		"B) the master caution light come on",
		"C) a memo message come on"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "The 0 decibel reference for the WES Automatic audio gain is:",
	"choices": [
		"A) A/C parked engine on",
		"B) Low speed flight",
		"C) A/C parked engine off"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "The WEU make a take off attempt signal when:",
	"choices": [
		"A) a fuel CTL SW is in the run position and ENG at T/O thrust",
		"B) GND Spd increase V1",
		"C) the A/C is in takeoff config and N1 above idle"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The autopilot disconnect warning aural alert:",
	"choices": [
		"A) can be canceled through the master warning light",
		"B) can be canceled through the autopilot disconnect switch",
		"C) is inhibited during takeoff and landing"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "Data used by WEU to calculate the green band are:",
	"choices": [
		"A) airplane Cross Weight, CG, and takeoff thrust rating",
		"B) nose ldg pressure transducer input the airplane CG",
		"C) nose LDG pressur transducer input+ horizontal stabilizer position"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The power regulation in the SCF is as follows?",
	"choices": [
		"A) The linear regulator output power is sensed by the linear output \" monitor / control \".",
		"B) The linear monitor sends independent power supply to each member ARINC 629 system card in the SCF.",
		"C) The linear regulator sends power to the active 629 output bus."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Left and Right system card files power supplies are as follows?",
	"choices": [
		"A) Both left and right SCF receive a hot bat bus.",
		"B) The left SCF receives hot bat bus and the right receives bat bus sec 2.",
		"C) Both left and right SCF receive a hot bat bus and bat bus sec 2."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The power control switches in the SCF?",
	"choices": [
		"A) Are discrete inputs to the \" linear regulators \".",
		"B) Are located on the outputs of the \" linear regulators \".",
		"C) Are inputs to the \" linear outputs monitor / control \"."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Concerning the SCF, there are?",
	"choices": [
		"A) One SCF chassis",
		"B) Two SCF chassis",
		"C) Four SCF chassis"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "While removing a card from the SCF chassis, one must make use of?",
	"choices": [
		"A) The ESDS.",
		"B) Isolated shoes.",
		"C) Isolated gloves."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The flight deck communication function (FDCF) is in?",
	"choices": [
		"A) CPM / GG.",
		"B) CPM / ACMF or CPM / Basic.",
		"C) CPM / Comm."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "A clock is on UTC , you loose the GPSs ( MMRs ) receivers :",
	"choices": [
		"A) The clock continue to display the time that is generated by AIMS .",
		"B) The clock display is interrupted , the pilot switches the clock to the internal mode .",
		"C) The clock will automatically switch to the internal mode ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Each AIMS cabinet sends the UTC time to ?",
	"choices": [
		"A) One clock ( left AIMS to left clock , right AIMS to right clock ) .",
		"B) Two clocks ( each AIMS sends data to the left and to right clock ) .",
		"C) Three clocks ( each AIMS sends data to the left , central and right clocks ) ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "In AIMS cabinet: each of the backplane buses AX, AY, BX , BY is:",
	"choices": [
		"A) A serial bus requiring to be supplied (active bus)",
		"B) A parallel bus consisting of 16 data lines.",
		"C) A serial bus that does not require any supply (passive bus)"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Each MASTER WARNING LIGHT is wired to:",
	"choices": [
		"A) only one channel of one WEU",
		"B) both channels of only one WEU",
		"C) both channels of each WEU"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "Each loudspeaker is wired to:",
	"choices": [
		"A) Only one channel of one WEU",
		"B) both channels of only one WEU",
		"C) both channels of each WEU"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "AIMSII:Concerning the flight deck entry camera control selected picture and concerning the Ground Maneuver Camera System (GMCS) picture :",
	"choices": [
		"A) It is possible to display simultaneously any combination of these pictures on the ND and lower display unit",
		"B) It is impossible to display the same GMCS picture on two displays",
		"C) It is impossible to display the same flight deck entry camera picture on two displays"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "AIMSII:Concerning the flight deck entry camera control:",
	"choices": [
		"A) Using three display units it is possible to display the pictures of the three cameras simultaneously",
		"B) It is only possible to display one camera picture on only one display unit",
		"C) It is possible to display the same flight deck entry camera picture on several display units"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "AIMSII:Concerning the Ground Maneuver Camera System (GMCS):",
	"choices": [
		"A) It is possible to display simultaneously  just the left gear on the left ND and just the right gear on the right ND",
		"B) It is possible to display the same composite GMCS picture on three displays",
		"C) At most it is  possible to display the same Ground Maneuver Camera System picture  only on  both NDs"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "AIMSII:The Display Select Panel   (DSP) is inoperative:",
	"choices": [
		"A) the selected Control Display Unit (CDU) allows the display of the Ground Maneuver Camera System (GMCS) picture",
		"B) the selected Control Display Units (CDU) allows the display of a flight deck entry camera picture",
		"C) the flight deck entry camera control pictures and  the Ground Maneuver Camera System (GMCS) picture could'nt be called any more"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The purpose of the warning electronic system (WES) is to:",
	"choices": [
		"A) supply to the maintenance crew the maintenance reports and messages.",
		"B) supply indications of incorrect airplane system conditions to the flight crew.",
		"C) supply advisory and status messages to the flight crew and to the maintenance crew."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The Airplane Information Management System AIMS cabinets get UTC and date from",
	"choices": [
		"A) The clock",
		"B) The multi mode receivers MMRs ",
		"C) The Flight Management System FMS"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The Flight Data Recorder System FDRS operates:",
	"choices": [
		"A) During any engine start",
		"B) After engine start, while any engine is running",
		"C) When the airplane is in the air, with both engine running "
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The left AIMS cabinet sends DFDAF data to the FDR on:",
	"choices": [
		"A) An ARINC 429 data bus",
		"B) An ARINC 628 data bus",
		"C) An ARINC 717 data bus"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The Quick Access Recorder QAR stores data for:",
	"choices": [
		"A) 24 hours of recorded data",
		"B) 41 hours of recorded data",
		"C) Last 41 hours of recorded data"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "In the MAT, ACMS standard menu, for trouble shooting, which of the page you can use to monitor a specific signal parameter in the real time",
	"choices": [
		"A) The MNEMONIC DATA page",
		"B) The QUICK REPORT page",
		"C) The TRACE LOG page"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "During take off, the takeoff warning inhibit prevents:",
	"choices": [
		"A) All warning indications and alert indications",
		"B) Some warning indications and some alert indications",
		"C) Not important (flight crew distractions) warning indications and alert indications"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "To make the master warning light MWL activation signal, WEU must receive at least:",
	"choices": [
		"A) One MWL arm signal",
		"B) Two MWL arm signals",
		"C) Three MWL arm signals"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "These are Primary Display System (PDS) components:",
	"choices": [
		"A) Two Display Switching Panel, two Cursor Control Device (CCD) .",
		"B) Two Display Select Panel, two Control Display Units (CDUs) .",
		"C) Two Electronic Flight Instrument System (EFIS) control panels, a single Instrument Source Select Panel ( ISSP)."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The WES receives ?",
	"choices": [
		"A) External digital audio signal .",
		"B) Digital audio from the TCAS and analog audio from the GPWS .",
		"C) External analog audio signals ."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "When you select on the MAT , ground test , ATA 31 - WES , the following are available \" system test \":",
	"choices": [
		"A) \"Landing Configuration Warning\" , \"Stall Warning\" , \"Fire Test\" , \"Warning Tones\" .",
		"B) \"Landing Configuration Warning\" , \"Take Off Configuration Warning\" and \"Warning Electronic System\".",
		"C) \"Warning Electronic System\" , \"Stall Warning System\" , \"Altitude call out\" ."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The WES will provide illumination of  ?",
	"choices": [
		"A) The master warning lights .",
		"B) The master warning lights and some OPAS light on the overhead panel .",
		"C) The master warning lights , and the engines fuel cutoff levers lights ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The WES provides the necessary data to show  ?",
	"choices": [
		"A) Stab position and green band .",
		"B) The stabilizer green band .",
		"C) The stabilizer position indication ."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The WES has ?",
	"choices": [
		"A) 2 WEU .",
		"B) 3 WEU .",
		"C) 4 WEU ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "On the B777-300 , which switch selects the ground maneuvering camera system display to a MFD ?",
	"choices": [
		"A) TCIU switch on the EFIS control panel .",
		"B) CAM switch on the DSP .",
		"C) Camera switch on the P5 ."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The hot battery bus supplies power to the AIMS cabinet for the :",
	"choices": [
		"A) Static random access memory in the line replaceable modules ( LRMs ) .",
		"B) Backplane data bus .",
		"C) ARINC 429 transmitters in the input / output modules ( IOMs )."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Concerning the clocks ?",
	"choices": [
		"A) They receive the GPS time directly from the GPS sensor units .",
		"B) They receive the GPS time from the AIMS cabinets.",
		"C) They do not receive the GPS time , there are manually set ."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The FDR is ?",
	"choices": [
		"A) Water proof but not fire protected .",
		"B) Is fire protected but not water proof .",
		"C) Is water proof and fire protected ."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The printer uses ?",
	"choices": [
		"A) Roll paper .",
		"B) A4 separate sheets .",
		"C) A3 separate sheets ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Concerning the Display Units on the B777- 300 (Without any lost of any function):",
	"choices": [
		"A) All six DUs are interchangeable .",
		"B) An upper DU is interchangeable with a lower DU .",
		"C) A ND DU is interchangeable with a lower central DU ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Each graphic separator sends data to ?",
	"choices": [
		"A) 2 DUs .",
		"B) 3 DUs .",
		"C) All 6 DUs ."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The AIMS backplane has :",
	"choices": [
		"A) 4  data bus.",
		"B) 3  data bus.",
		"C) 2  data bus."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "AIMS - 1: To load the FMCF (Flight Management Computing Function) of the right cabinet with the navigation data base , you must select the following destination:",
	"choices": [
		"A) CPM STD .",
		"B) CPM Com",
		"C) CPM FM ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "There is no fault and the PDS is fully functional; on the left ISSP (Instrument Source Select Panel) you select \"CAPT ALTN\" , therefore:",
	"choices": [
		"A) LOB (Captain PFD) and LIB (Captain ND) DUs  (Display Units) will switch to another graphic generator .",
		"B) None of the DUs will switch to another generator because there is no fault .",
		"C) The PFD image will switch to inboard DU ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "In normal conditions; on the right Instrument Source Select Panel (ISSP), what happens when you set the F/O \"DSPL CTRL\" switch to \"ALTN\" ?",
	"choices": [
		"A) Right Outboard (ROB) and Right Inboard (RIB)  Display Units (DUs) will switch to another Graphic Generator (CPM/GG) .",
		"B) None of the Display Units (DUs)  will switch to another graphic generator (CPM/GG) because there is no fault .",
		"C) The Primary Flight Display (PFD) image will switch to inboard Display Unit (DU) ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The maintenance task maintenance page that shows the erasable status is generated by ?",
	"choices": [
		"A) The graphic generator .",
		"B) The CMCF .",
		"C) The WES ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "A caution is usually detected by:",
	"choices": [
		"A) The graphic generator .",
		"B) The WES .",
		"C) The CMCF ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The altitude alert function is part of:",
	"choices": [
		"A) The WES .",
		"B) The PDS .",
		"C) The CMCF ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The stall warning test is selected from:",
	"choices": [
		"A) ATA system 31",
		"B) ATA system 22",
		"C) ATA system 27"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "the alternate gear down dispatch switch is set to VMO, therefore ?",
	"choices": [
		"A) The maximum operating speed is limited by the flaps/slats configuration.",
		"B) The gear is activated by the alternate hydraulic system.",
		"C) The maximum operating speed or mach is decreased."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "An ACMS  ( Airplane Condition Monitoring System ) report summary provides:",
	"choices": [
		"A) The most important parameters of the reports.",
		"B) A list of the last reports of a specific type.",
		"C) The list of the various types of reports."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "A quick report is used to:",
	"choices": [
		"A) trigger by manual request the real time memorization of the selected set of parameters.",
		"B) automatically trigger in flight the parameters memorization.",
		"C) display the list of failed equipments."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The Captain's clock and the First Officer's clock get respectively power from :",
	"choices": [
		"A) Hot bat bus and bat bus .",
		"B) Captain flight instrument bus and First Officer flight instrument bus .",
		"C) Left DC bus and Right DC bus ."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "For recording on the FDR , in case of failure of the left CPM COM , the right cabinet sends to the left DFDAF the data on ?",
	"choices": [
		"A) The intercabinet ARINC 629 buses .",
		"B) Analog buses .",
		"C) Arinc 717 buses."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The quality of the recorded data is monitored ?",
	"choices": [
		"A) Internally by the FDR processor .",
		"B) By sensing back to the DFDAF the recorded data for comparison .",
		"C) By comparison of the left and right DFDAFS ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The data to be printed is collected by ?",
	"choices": [
		"A) A CPM COM.",
		"B) The CPM Basic .",
		"C) The CPM Basic or the CPM ACMF ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "On the printer the amber fail Light comes on ?",
	"choices": [
		"A) In case of failure that cannot be repaired on the line .",
		"B) In case of printer failure or in case of paper jam during print out .",
		"C) In case of active DCMF failure ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "AIMS - 1 :The ACMF reports are normally stored in:",
	"choices": [
		"A) A volatile memory  (Need battery supply to keep Memory)",
		"B) A non volatile memory (Does not need any supply to keep Memory).",
		"C) A non erasable memory."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "AIMS - 1 : The \" left ACMF software reset test \" :",
	"choices": [
		"A) Erases the ACMF reports .",
		"B) Erases active data but not the stored reports .",
		"C) Does not erase the stored reports ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The AIMS modules have a hot insertion switch , it purpose is ?",
	"choices": [
		"A) To provide hot battery bus to the AIMS modules .",
		"B) To keep moderately hot the plugs in order to prevent icing when the airplane is left outside without power .",
		"C) To power the module after positive contact of the connectors pins ."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "These are AIMS functions ?",
	"choices": [
		"A) Autopilot , flight management Primary display function .",
		"B) Airplane condition monitoring function , data conversion gateway function , data communication management .",
		"C) Environmental control function  , primary display function , autopilot  ."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The cursor Control Device light are wired to:",
	"choices": [
		"A) the OPAS",
		"B) the IOM",
		"C) the CPM/GG"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The alternate RH EFIS control panel function can be accessed from:",
	"choices": [
		"A) any CDU",
		"B) The Onside CDU",
		"C) The DSP"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "If the Right EFIS CTL PNL and CDU are failed :",
	"choices": [
		"A) The F/O cannot control the EFIS anymore ",
		"B) the center CDU is a backup for a failed CDU for the EFIS control panel ",
		"C) the left EFIS CTL Panel control the Right EFIS"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "A CPM/GG can generate:",
	"choices": [
		"A) 3 different display format : 1 essential and 2 critical ",
		"B) 2 different display format : 1 essential and 1 critical",
		"C) 3 different display format : 2 essential and 1 critical "
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Snapchot created with the EICAS event switch are recorded by:",
	"choices": [
		"A) the CPM/GG",
		"B) the CMCS ",
		"C) the QAR"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The purpose of the AIMS cabinet input/output modules (IOMs) is to :",
	"choices" :[
		"A) Supply the interface between the functions in the AIMS cabinet and external LRUs.",
		"B) Change ARINC 429 signals to ARINC 629 signals.",
		"C) Provide temporary data storage in memory."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The central maintenance computing function software is in which of these AIMS cabinet line replaceable modules (LRMs) ?",
	"choices" :[
		"A) Maintenance access terminal (MAT) and portable maintenance access terminal (PMATs).",
		"B) IOM 3.",
		"C) Core processor modules/graphics generators (CPM/GGs)."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "A multi-function display (MFD) format can show in which display unit location ?",
	"choices" :[
		"A) Left outboard.",
		"B) Right inboard.",
		"C) Upper center."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "You can manually switch EICAS formats to which Display Unit ?",
	"choices" :[
		"A) Lower center only.",
		"B) Right inboard or Left outboard.",
		"C) Right inboard or Left inboard."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "Each active AIMS core processor module/graphics generator (CPM/GG) sends outputs through a coaxial coupler to:",
	"choices" :[
		"A) Three display units.",
		"B) Two display units.",
		"C) Six display units."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "EICAS is in the limited mode of operation. On the display select panel (DSP), which switches are still active ?",
	"choices" :[
		"A) STAT, ELEC and HYD switches.",
		"B) ENG, HYD and FCTL switches.",
		"C) ENG, AIR and FUEL switches."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "Which type of crew messages has the lowest priority ?",
	"choices" :[
		"A) Memo messages.",
		"B) Status messages.",
		"C) Com messages."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Before you install new display unit in the center lower position, you must  ?",
	"choices" :[
		"A) Move the control column.",
		"B) Turn the display unit 180 degrees.",
		"C) Remove the center upper display unit first."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The flight data recorder (FDR) records the most recent  ?",
	"choices" :[
		"A) 25 hours of flight.",
		"B) 50 hours of flight.",
		"C) 75 hours of flight."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The flight data recorder (FDR) is in the  ?",
	"choices" :[
		"A) E2-1 rack in the main equipment center.",
		"B) E8 equipment rack.",
		"C) E7 aft equipment rack."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The printer receives operational software data loads from the  ?",
	"choices" :[
		"A) Directly from the maintenance access terminal (MAT ).",
		"B) Right AIMS cabinet only.",
		"C) Left AIMS cabinet only."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The printer receives print data from the :",
	"choices" :[
		"A) Right AIMS cabinet only.",
		"B) Left or right AIMS cabinet.",
		"C) Left AIMS cabinet only."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "You erase latched status messages from the ?",
	"choices" :[
		"A) Engine exceedance maintenance page.",
		"B) Performance maintenance page.",
		"C) Maintenance task maintenance page."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "A control display unit (CDU) failure causes:",
	"choices" :[
		"A) A CDU FAIL message to show on the scratchpad.",
		"B) The failed control display unit (CDU) to go blank.",
		"C) A memo message to show on the EICAS display."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "In transit, an SMT ( Scheduled Maintenance Task ) newly appeared ; could you dispatch the aircraft ?",
	"choices" :[
		"A) Yes, if there is no status.",
		"B) No, I must erase it before dispatch.",
		"C) No, the associated repair must be done before dispatch."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "How many WEU ( warning electronic unit ) are available ?",
	"choices" :[
		"A) 2, each having two channels.",
		"B) 3, each having two channels.",
		"C) 4,"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The following functions are computed by the WES (warning electronic system) ?",
	"choices" :[
		"A) All caution messages.",
		"B) Activation of the two warning lights and the two caution lights.",
		"C) Stall warning; landing configuration warning; T/O configuration warning."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "To trigger the shakers actuators ?",
	"choices" :[
		"A) Any two channels must agree",
		"B) Both channels in the same warning electronic unit WEU must agree.",
		"C) At least one channel in each unit must agree."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "Axle jacking can be done from:",
	"choices" :[
		"A) 1 point on each landing gear",
		"B) 2 points on each landing gear",
		"C) 7 different points"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "For airplane leveling you can use:",
	"choices" :[
		"A) The plumb bob scale in the right main wheel weel",
		"B) The related special function ion CMCF",
		"C) The ATA 32 Maintenance page"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Tow fitting can be installed:",
	"choices" :[
		"A) on the nose landing gear only ",
		"B) at the forward part of the nose ldg gear and main ldg gear ",
		"C) at the forward and aft parts of both nose and main lanfing gear"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The left and right system Carfile provide data to:",
	"choices" :[
		"A) The left and right Arinc 429 buses",
		"B) The left and right Systems Arinc 629 buses",
		"C) The left and right Flight Controls  Arinc 629 buses"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The 7 power control switches give a ground to:",
	"choices" :[
		"A) The Linear Output Monitor/Control circuit",
		"B) The 7 Linear Regulator",
		"C) The preregulator"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The Preregulator 1 of the System Card Files are powered by:",
	"choices" :[
		"A) The Bat bus section 2",
		"B) The hot bat bus",
		"C) The 28V DC Left Main Bus"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The SCF Linear Regulators:",
	"choices" :[
		"A) Are powered by the Linear Output Monitor/Control",
		"B) supply power to Linear Output Monitor/Control",
		"C) are monitored by the Linear Output Monitor/Control"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "Both SCF Linear Monitor Cards are normally powered by:",
	"choices" :[
		"A) Preregulator 1",
		"B) Preregulator 2",
		"C) Both Preregulator"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The Preregulator 2 of the SCF are powered by:",
	"choices" :[
		"A) The Hot bat bus",
		"B) The 28V DC RH Main Bus of RSCf and the Bat bus section 2 for LSCF",
		"C) The 28V DC LH Main bus of LSCF and the Bat Bus section 2 of RSCF"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The SCF Arinc Signal gateway (ASG) cards change:",
	"choices" :[
		"A) Arinc 429 to 629 and vice versa",
		"B) Arinc 429 to 629 only",
		"C) Arinc 629 to many different Aring language"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Output data from SCF is transmitted by:",
	"choices" :[
		"A) Arinc 429 buses",
		"B) Arinc 629 buses",
		"C) Fiber optic"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "SCF member system cards are directly powered by:",
	"choices" :[
		"A) The preregulator",
		"B) The linear regulator",
		"C) The linear Output Monitor/Control"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "An AIMS cabinet is connected to all theses Arinc 629 Buses:",
	"choices" :[
		"A) Systems",
		"B) Systems and Flight Control",
		"C) Systems, Flight Controls and intercabinet"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "To dataload the ACMF in a AIMS 2 cabinet you select:",
	"choices" :[
		"A) the IOMs",
		"B) the CPM STD",
		"C) The CPM COMM"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "Each CPM is able to compute:",
	"choices" :[
		"A) FMCF and TMCf",
		"B) DCGF and UTCF",
		"C) ACMF and CMCF"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The Power Conditioning Modules supply:",
	"choices" :[
		"A) all CPM and IOM power demands in the left or right AIMS",
		"B) all CPM and IOM backup power demand in both AIMS",
		"C) 115VAC to the CPMGG to keep DU ON if MAin AC Buses are lost"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
    "question": "The inboard DU normally display:",
    "choices": [
        "A) Nd or Mfd format",
        "B) EICAS format",
        "C) PFD format"
    ],
    "correctAnswer": "A",
    "category": "ATA 31"
},
{
    "question": "To install a lower center DU you have to :",
    "choices": [
        "A) Remove the upper Du first",
        "B) move the control column rearward",
        "C) Turn the DU by 180*"
    ],
    "correctAnswer": "C",
    "category": "ATA 31"
},
{
    "question": "Data display on ND and PFD are controlled by:",
    "choices": [
        "A) EFIS Control Panel",
        "B) Display Control Panel",
        "C) Instrument Source Selected Panel"
    ],
    "correctAnswer": "A",
    "category": "ATA 31"
},
{
    "question": "The EICAS format can manually be switched to:",
    "choices": [
        "A) The lower center DU",
        "B) either the left or right inboard DU",
        "C) either the left or right outboard DU"
    ],
    "correctAnswer": "B",
    "category": "ATA 31"
},
{
    "question": "If the DSP is selected to a DU which is displaying EICAS:",
    "choices": [
        "A) Only the ENG and STAT format select switches remain active",
        "B) Only the ENG, FUEL and AIR format select switch remain active ",
        "C) Only the HYD, ELEC, FUEL and AIR format select switch remain active"
    ],
    "correctAnswer": "B",
    "category": "ATA 31"
},
{
    "question": "A CPM/GG normally sends DATA to:",
    "choices": [
        "A) a pair of Display Unit (on the same side : LH, CTR, or RH)",
        "B) 3 Display Unit ",
        "C) all display Unit"
    ],
    "correctAnswer": "A",
    "category": "ATA 31"
},
{
    "question": "If there is no PDS fault and you select the ALTN position on the RH ISSP DSPL CTRL switch:",
    "choices": [
        "A) nothing change ",
        "B) the PFD format moves to the RH INBD DU",
        "C) the RH INBD AND OUTBD DU switch to another CPM/GG"
    ],
    "correctAnswer": "C",
    "category": "ATA 31"
},
{
    "question": "The forward section of fuselage is :",
    "choices": [
        "A) Section 41",
        "B) Section 47",
        "C) Section 48"
    ],
    "correctAnswer": "A",
    "category": "ATA 31"
},
{
    "question": "The aft section of fuselage is :",
    "choices" :[
        "A) Section 41",
        "B) Section 47",
        "C) Section 48"
    ],
    "correctAnswer": "C",
    "category": "ATA 31"
},
{
    "question": "Fuselage station are numbered:",
    "choices" :[
        "A) From the front to the aft",
        "B) From the aft to the front",
        "C) From the left to the right"
    ],
    "correctAnswer": "A",
    "category": "ATA 31"
},
{
    "question": "How many barrel sections does the fuselage have:",
    "choices" :[
        "A) 5",
        "B) 6",
        "C) 7"
    ],
    "correctAnswer": "B",
    "category": "ATA 31"
},
{
    "question": "How many manufacturing sections does the fuselage have:",
    "choices" :[
        "A) 5",
        "B) 6",
        "C) 7"
    ],
    "correctAnswer": "C",
    "category": "ATA 31"
},
{
    "question": "The system card files are located:",
    "choices" :[
        "A) in the flight deck",
        "B) in the Main Equipment Center ",
        "C) in the aft cargo compartment"
    ],
    "correctAnswer": "B",
    "category": "ATA 31"
},
{
    "question": "How many major zones does the B777 have ?:",
    "choices" :[
        "A) 6",
        "B) 7",
        "C) 8"
    ],
    "correctAnswer": "C",
    "category": "ATA 31"
},
{
    "question": "The major zone 800 related to:",
    "choices" :[
        "A) Wings",
        "B) Landing gears and landing gears doors",
        "C) Passenger and cargo compartment doors"
    ],
    "correctAnswer": "C",
    "category": "ATA 31"
},
{
    "question": "For airplane jacking there are:",
    "choices" :[
        "A) 3 primary and 5 auxilary jack points",
        "B) 4 primary and 4 auxilary jack points",
        "C) 5 primary and 3 auxilary jack points"
    ],
    "correctAnswer": "A",
    "category": "ATA 31"
},
{
    "question": "Adapters for jacking must be installed at:",
    "choices" :[
        "A) all jack points",
        "B) all the auxiliary jack points",
        "C) 3 auxiliary jack points D,E,F only"
    ],
    "correctAnswer": "B",
    "category": "ATA 31"
},	
  ];

const CONFIG = {
    numberOfQuestions: 40,
    timePerQuestion: 120, // secondes
    passingScore: 75, // pourcentage
    maxHistoryItems: 10
};

// ==================== ÉTAT DE L'APPLICATION ====================
let state = {
    currentQuestion: 0,
    score: 0,
    timer: null,
    timeRemaining: CONFIG.timePerQuestion,
    selectedQuestions: [],
    usedQuestions: [],
    allQuestionsCopy: [],
    selectedCategories: [],
    categoryStats: {},
    startTime: null,
    answers: []
};

// ==================== GESTION DES ÉCRANS ====================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// ==================== INITIALISATION ====================
function init() {
    displayCategories();
    loadHistory();
    setupEventListeners();
}

function setupEventListeners() {
    // Boutons de l'écran de démarrage
    document.getElementById('startButton').addEventListener('click', handleStartQuiz);
    document.getElementById('selectAllBtn').addEventListener('click', selectAllCategories);
    document.getElementById('deselectAllBtn').addEventListener('click', deselectAllCategories);
    document.getElementById('clearHistoryBtn')?.addEventListener('click', clearHistory);
    
    // Boutons du quiz
    document.getElementById('submitButton').addEventListener('click', checkAnswer);
    document.getElementById('nextButton').addEventListener('click', nextQuestion);
    
    // Boutons des résultats
    document.getElementById('restartButton').addEventListener('click', restartQuiz);
    document.getElementById('newQuizButton').addEventListener('click', () => {
        showScreen('startScreen');
        resetState();
    });
}

// ==================== GESTION DES CATÉGORIES ====================
function displayCategories() {
    const categories = [...new Set(allQuestions.map(q => q.category))];
    const sortedCategories = sortCategories(categories);
    
    const categoriesHTML = sortedCategories.map(category => {
        const questionCount = allQuestions.filter(q => q.category === category).length;
        return `
            <div class="category-item">
                <input type="checkbox" id="cat-${category}" value="${category}">
                <label for="cat-${category}" class="category-label">
                    ${category}
                    <span style="display: block; font-size: 0.75rem; opacity: 0.7; margin-top: 4px;">
                        ${questionCount} question${questionCount > 1 ? 's' : ''}
                    </span>
                </label>
            </div>
        `;
    }).join('');
    
    document.getElementById('categories').innerHTML = categoriesHTML;
}

function sortCategories(categories) {
    return categories.sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || 0);
        const numB = parseInt(b.match(/\d+/)?.[0] || 0);
        return numA - numB;
    });
}

function selectAllCategories() {
    document.querySelectorAll('#categories input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = true;
    });
    updateQuestionCount();
}

function deselectAllCategories() {
    document.querySelectorAll('#categories input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    updateQuestionCount();
}

function updateQuestionCount() {
    const selectedCategories = getSelectedCategories();
    const totalQuestions = filterQuestionsByCategory(selectedCategories).length;
    const questionCount = Math.min(CONFIG.numberOfQuestions, totalQuestions);
    document.getElementById('questionCount').textContent = questionCount;
}

function getSelectedCategories() {
    return Array.from(document.querySelectorAll('#categories input:checked'))
        .map(input => input.value);
}

function filterQuestionsByCategory(categories) {
    return allQuestions.filter(q => categories.includes(q.category));
}

// ==================== DÉMARRAGE DU QUIZ ====================
function handleStartQuiz() {
    const selectedCategories = getSelectedCategories();
    
    if (selectedCategories.length === 0) {
        alert('Veuillez sélectionner au moins une catégorie.');
        return;
    }
    
    startQuiz(selectedCategories);
}

function startQuiz(selectedCategories) {
    state.selectedCategories = selectedCategories;
    state.selectedQuestions = filterQuestionsByCategory(selectedCategories);
    
    if (state.selectedQuestions.length === 0) {
        alert('Aucune question disponible pour les catégories sélectionnées.');
        return;
    }
    
    state.allQuestionsCopy = [...state.selectedQuestions];
    state.usedQuestions = [];
    state.currentQuestion = 0;
    state.score = 0;
    state.answers = [];
    state.categoryStats = {};
    state.startTime = new Date();
    
    // Initialiser les statistiques par catégorie
    selectedCategories.forEach(category => {
        state.categoryStats[category] = {
            correct: 0,
            total: 0
        };
    });
    
    shuffleQuestions();
    showScreen('quizScreen');
    displayQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleQuestions() {
    if (state.allQuestionsCopy.length === 0) {
        state.allQuestionsCopy = [...state.usedQuestions];
        state.usedQuestions = [];
    }
    
    shuffleArray(state.allQuestionsCopy);
    const maxQuestions = Math.min(CONFIG.numberOfQuestions, state.selectedQuestions.length);
    state.questions = state.allQuestionsCopy.slice(0, maxQuestions);
}

// ==================== AFFICHAGE DES QUESTIONS ====================
function displayQuestion() {
    if (state.currentQuestion >= state.questions.length) {
        displayFinalResult();
        return;
    }
    
    const question = state.questions[state.currentQuestion];
    const totalQuestions = state.questions.length;
    
    // Mettre à jour la progression
    updateProgress();
    
    // Mettre à jour les numéros de question
    document.getElementById('currentQuestionNumber').textContent = state.currentQuestion + 1;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    
    // Mettre à jour le score actuel
    document.getElementById('currentScore').textContent = `${state.score}/${state.currentQuestion}`;
    
    // Afficher la catégorie
    document.getElementById('questionCategory').textContent = question.category;
    
    // Afficher la question
    document.getElementById('questionText').textContent = question.question;
    
    // Afficher les choix
    displayChoices(question);
    
    // Réinitialiser les boutons
    document.getElementById('submitButton').style.display = 'inline-flex';
    document.getElementById('submitButton').disabled = false;
    document.getElementById('nextButton').style.display = 'none';
    
    // Effacer le feedback
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('feedback').className = 'feedback';
    
    // Démarrer le timer
    startTimer();
}

function displayChoices(question) {
    const choicesHTML = question.choices.map((choice, index) => {
        const letter = String.fromCharCode(65 + index);
        return `
            <div class="choice-item">
                <input type="radio" id="choice-${index}" name="choice" value="${letter}">
                <label for="choice-${index}" class="choice-label">
                    ${choice}
                </label>
            </div>
        `;
    }).join('');
    
    document.getElementById('choicesContainer').innerHTML = choicesHTML;
}

function updateProgress() {
    const progress = ((state.currentQuestion) / state.questions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
}

// ==================== TIMER ====================
function startTimer() {
    state.timeRemaining = CONFIG.timePerQuestion;
    updateTimerDisplay();
    
    clearInterval(state.timer);
    state.timer = setInterval(() => {
        state.timeRemaining--;
        updateTimerDisplay();
        
        if (state.timeRemaining <= 0) {
            clearInterval(state.timer);
            autoSubmit();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(state.timeRemaining / 60);
    const seconds = state.timeRemaining % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const timerElement = document.getElementById('timeRemaining');
    timerElement.textContent = timeString;
    
    // Changer la couleur si le temps est presque écoulé
    if (state.timeRemaining <= 30) {
        timerElement.style.color = 'var(--error-color)';
    } else {
        timerElement.style.color = 'white';
    }
}

function autoSubmit() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        checkAnswer();
    } else {
        // Aucune réponse sélectionnée, passer à la question suivante
        showFeedback(false, null);
        setTimeout(nextQuestion, 2000);
    }
}

// ==================== VÉRIFICATION DES RÉPONSES ====================
function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    
    if (!selectedChoice) {
        alert('Veuillez sélectionner une réponse.');
        return;
    }
    
    clearInterval(state.timer);
    
    const selectedValue = selectedChoice.value.trim();
    const question = state.questions[state.currentQuestion];
    const correctAnswer = question.correctAnswer.trim();
    const isCorrect = selectedValue === correctAnswer;
    
    // Sauvegarder la réponse
    state.answers.push({
        question: question.question,
        category: question.category,
        selectedAnswer: selectedValue,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect
    });
    
    // Mettre à jour les statistiques
    if (isCorrect) {
        state.score++;
    }
    
    state.categoryStats[question.category].total++;
    if (isCorrect) {
        state.categoryStats[question.category].correct++;
    }
    
    // Afficher le résultat
    showFeedback(isCorrect, selectedChoice);
    
    // Désactiver les choix
    disableChoices();
    
    // Afficher le bouton suivant
    document.getElementById('submitButton').style.display = 'none';
    document.getElementById('nextButton').style.display = 'inline-flex';
}

function showFeedback(isCorrect, selectedChoice) {
    const question = state.questions[state.currentQuestion];
    const correctAnswer = question.correctAnswer;
    
    // Marquer la bonne et mauvaise réponse
    document.querySelectorAll('.choice-label').forEach(label => {
        const input = label.previousElementSibling;
        
        if (input.value === correctAnswer) {
            label.classList.add('correct');
            label.innerHTML += ' <span class="choice-icon">✓</span>';
        } else if (selectedChoice && input === selectedChoice && !isCorrect) {
            label.classList.add('incorrect');
            label.innerHTML += ' <span class="choice-icon">✗</span>';
        }
    });
    
    // Afficher le message de feedback
    const feedbackElement = document.getElementById('feedback');
    if (isCorrect) {
        feedbackElement.className = 'feedback success';
        feedbackElement.innerHTML = '✓ Bonne réponse !';
    } else {
        feedbackElement.className = 'feedback error';
        feedbackElement.innerHTML = `✗ Mauvaise réponse. La bonne réponse est ${correctAnswer}.`;
    }
}

function disableChoices() {
    document.querySelectorAll('input[name="choice"]').forEach(input => {
        input.disabled = true;
    });
    
    document.querySelectorAll('.choice-label').forEach(label => {
        label.classList.add('disabled');
    });
}

// ==================== NAVIGATION ====================
function nextQuestion() {
    state.currentQuestion++;
    displayQuestion();
}

// ==================== RÉSULTATS FINAUX ====================
function displayFinalResult() {
    clearInterval(state.timer);
    
    const totalQuestions = state.questions.length;
    const percentage = (state.score / totalQuestions) * 100;
    const passed = percentage >= CONFIG.passingScore;
    
    // Afficher l'écran des résultats
    showScreen('resultScreen');
    
    // Badge de résultat
    const badgeElement = document.getElementById('resultBadge');
    badgeElement.className = `result-badge ${passed ? 'success' : 'failure'}`;
    badgeElement.textContent = passed ? '🎉' : '😔';
    
    // Titre
    const titleElement = document.getElementById('resultTitle');
    titleElement.textContent = passed ? 'Félicitations !' : 'Continuez vos efforts';
    titleElement.style.color = passed ? 'var(--success-color)' : 'var(--error-color)';
    
    // Score
    document.getElementById('resultScore').textContent = `${state.score} / ${totalQuestions}`;
    document.getElementById('resultPercentage').textContent = `${percentage.toFixed(1)}%`;
    
    // Statistiques par catégorie
    displayCategoryStats();
    
    // Sauvegarder dans l'historique
    saveToHistory({
        date: new Date(),
        score: state.score,
        total: totalQuestions,
        percentage: percentage,
        passed: passed,
        categories: state.selectedCategories
    });
}

function displayCategoryStats() {
    const statsHTML = Object.entries(state.categoryStats)
        .map(([category, stats]) => {
            const percentage = stats.total > 0 ? (stats.correct / stats.total * 100).toFixed(0) : 0;
            return `
                <div class="category-stat-item">
                    <span class="category-stat-name">${category}</span>
                    <span class="category-stat-score">
                        ${stats.correct}/${stats.total} (${percentage}%)
                    </span>
                </div>
            `;
        })
        .join('');
    
    const categoryStatsElement = document.getElementById('categoryStats');
    categoryStatsElement.innerHTML = `
        <h3>Résultats par catégorie</h3>
        ${statsHTML}
    `;
}

// ==================== HISTORIQUE ====================
function saveToHistory(result) {
    let history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    history.unshift(result);
    
    // Limiter le nombre d'éléments
    if (history.length > CONFIG.maxHistoryItems) {
        history = history.slice(0, CONFIG.maxHistoryItems);
    }
    
    localStorage.setItem('quizHistory', JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    
    if (history.length === 0) {
        document.getElementById('historySection').style.display = 'none';
        return;
    }
    
    document.getElementById('historySection').style.display = 'block';
    
    const historyHTML = history.map(result => {
        const date = new Date(result.date);
        const dateString = date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const badge = result.passed ? '✓' : '✗';
        const color = result.passed ? 'var(--success-color)' : 'var(--error-color)';
        
        return `
            <div class="history-item">
                <div>
                    <span style="color: ${color}; font-weight: bold; margin-right: 8px;">${badge}</span>
                    <span class="history-date">${dateString}</span>
                </div>
                <span class="history-score">${result.score}/${result.total} (${result.percentage.toFixed(0)}%)</span>
            </div>
        `;
    }).join('');
    
    document.getElementById('historyList').innerHTML = historyHTML;
}

function clearHistory() {
    if (confirm('Êtes-vous sûr de vouloir effacer tout l\'historique ?')) {
        localStorage.removeItem('quizHistory');
        loadHistory();
    }
}

// ==================== RÉINITIALISATION ====================
function resetState() {
    clearInterval(state.timer);
    state.currentQuestion = 0;
    state.score = 0;
    state.timeRemaining = CONFIG.timePerQuestion;
    state.selectedQuestions = [];
    state.usedQuestions = [];
    state.allQuestionsCopy = [];
    state.selectedCategories = [];
    state.categoryStats = {};
    state.answers = [];
}

function restartQuiz() {
    startQuiz(state.selectedCategories);
}

// ==================== DÉMARRAGE ====================
// Attendre que le DOM soit chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Écouter les changements de catégories pour mettre à jour le compteur
document.addEventListener('change', (e) => {
    if (e.target.matches('#categories input[type="checkbox"]')) {
        updateQuestionCount();
    }
});
