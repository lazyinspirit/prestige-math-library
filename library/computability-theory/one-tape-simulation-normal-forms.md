---
page: one-tape-simulation-normal-forms
title: "One-Tape Simulation Normal Forms"
status: draft
items: ["def-stay-put-one-tape-machine-and-run-interface", "lem-stay-put-right-left-macro-simulation", "thm-stay-put-elimination-with-explicit-simulation-interface"]
examples: []
---

This page fixes a stay-put extension of the right-infinite, clamped-left-boundary machine model and proves its reduction to ordinary left/right machines. The finite tagged-state construction preserves the whole tape and head at every macro boundary, including a transition into a halting state. The run argument gives an exact transition count and preserves acceptance, rejection and divergence in both directions. All arguments work in ZF without Choice.
