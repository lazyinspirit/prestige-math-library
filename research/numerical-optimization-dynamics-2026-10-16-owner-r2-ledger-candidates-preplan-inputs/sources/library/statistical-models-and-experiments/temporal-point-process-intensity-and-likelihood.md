---
page: temporal-point-process-intensity-and-likelihood
title: "Temporal intensity and likelihood"
status: published
items:
  - def-temporal-point-process-and-conditional-intensity
  - lem-conditional-intensity-interevent-survival-and-density
  - lem-homogeneous-poisson-ordered-event-time-density
  - thm-conditional-intensity-interevent-law-and-point-pattern-likelihood
examples: []
---

## Overview

This page treats simple, locally finite event sequences on a finite
observation window when a conditional waiting-time law and its predictable
hazard are supplied, together with the separate counting-process
compensator-martingale contract. It derives the next-event survivor and
density, including the terminal mass when cumulative hazard is finite, then
derives the event-pattern likelihood relative to a supplied unit-rate
Poisson reference. The likelihood retains the final no-event interval and
adds conditional mark-density factors only when a mark law is supplied.
Writing an intensity does not establish that a process exists, is
non-explosive, or is stationary.
