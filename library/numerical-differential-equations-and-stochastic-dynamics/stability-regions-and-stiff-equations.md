---
page: stability-regions-and-stiff-equations
title: Stability regions and stiff equations
status: published
items:
  - def-matrix-contractivity-and-logarithmic-norm
  - def-absolute-stability-regions-for-one-step-and-multistep-methods
  - thm-backward-euler-a-and-l-stability
  - thm-trapezoidal-a-stable-not-l-stable
  - lem-bdf2-root-locus-location
  - thm-explicit-euler-absolute-stability-disk
  - thm-bdf2-is-a-stable
  - prop-bdf2-roots-vanish-in-stiff-limit
examples: []
---

This page defines scalar absolute-stability regions for one-step and constant-step multistep methods. It proves the forward-Euler disk, backward-Euler A/L-stability, trapezoidal A-stability without stiff decay, and BDF2 A-stability and fast-mode damping from its two characteristic roots.

Scalar test stability does not imply a matrix contraction or an accuracy guarantee. Fast/slow examples make the step restriction and stiff damping behavior explicit. Positivity preservation is a separate property; see [[positive-conservative-production-destruction-integrators]].
