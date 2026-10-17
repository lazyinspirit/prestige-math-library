---
page: deferred-correction-and-collocation-iterations-examples
title: Deferred correction and collocation iterations — Examples
status: draft
items: []
examples:
  - ex-sdc-cost-accounting-per-sweep
  - ex-sdc-one-node-gauss-stiff-iteration-diverges
  - ex-sdc-two-node-gauss-nonstiff-cubic-ivp
  - ex-sdc-constant-predictor-too-few-sweeps
  - ex-sdc-inexact-midpoint-stage-residual
---

## Summary

These checks cover per-sweep work and storage, divergence of the explicit SDC iteration on a stiff scalar mode despite a stable midpoint step, exact endpoint integration for a two-node Gauss cubic IVP, order loss from accepting a constant predictor under a fixed loose tolerance, and the controlled update error from a small implicit-midpoint stage residual. The Gaussian specializations use Countable Choice for Lebesgue interval-measure data.
