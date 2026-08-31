---
page: resource-bounds-and-machine-invariance
title: "Resource Bounds and Machine Invariance"
status: draft
items:
  - def-worst-case-time-and-space-complexity
  - def-asymptotic-resource-comparison
  - def-time-and-space-constructible-function
  - def-dtime-ntime-dspace-and-nspace
  - lem-time-at-least-input-length-permits-complete-input-reading
  - lem-time-bounds-imply-space-bounds
  - thm-multitape-to-single-tape-time-simulation
  - thm-multitape-to-single-tape-space-simulation
  - thm-universal-simulation-with-logarithmic-overhead
  - prop-polynomial-time-and-space-are-model-invariant
  - lem-clocked-machine-construction
  - prop-polynomially-related-encodings-preserve-polynomial-classes
  - fs-model-invariance-means-equal-step-counts
  - fs-time-bounds-never-need-constructibility
examples: []
---

This page fixes the standard quantitative conventions of complexity theory:
worst-case time and space, asymptotic comparison, constructible bounds, and the
basic deterministic and nondeterministic resource classes. With those
definitions in place, it separates three different quantitative phenomena that
are often blurred together in loose exposition: time controls space for a fixed
machine, multitape simulation can cost a quadratic slowdown on one tape, and
efficient universal simulation still needs only logarithmic overhead per step.

The closing propositions explain what invariance does and does not mean. It
does mean that polynomial-time and polynomial-space classes survive passage
between the standard deterministic tape models, and that reasonable encoding
changes preserve those classes when the translations are themselves polynomial.
It does not mean literal equality of step counts, and it does not let one drop
constructibility from arguments that must actually realize a time budget.
