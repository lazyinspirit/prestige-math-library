---
id: def-activation-class-locally-essentially-bounded-ae-continuous
kind: definition
title: "Locally essentially bounded activations with null discontinuity closure"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-borel-and-lebesgue-measurable-function-on-rn
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, Definitions 3–5 and §4"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
    - title: "Moreau, Dynamical Neural Networks and Composition Networks for System Modeling, Chapter 2 §2.3"
      url: "https://ftp.esat.kuleuven.be/pub/pub/SISTA/ida/reports/98-69.pdf"
---

## Definition

Assume Countable Choice for the Lebesgue-measure convention. A real-valued function $\sigma:\mathbb R\to\mathbb R$ belongs to the activation class $\mathcal M$ when it is Lebesgue measurable, is locally essentially bounded, and the closure of its discontinuity set has one-dimensional Lebesgue measure zero. Here locally essentially bounded means that for every compact interval $J\subset\mathbb R$ there is a finite $M_J$ such that $|\sigma(t)|\le M_J$ for Lebesgue-almost every $t\in J$. The discontinuity set is $\{t:\sigma\text{ is not continuous at }t\}$. The function is a polynomial almost everywhere when there is a real algebraic polynomial $p$ such that $\sigma=p$ outside a Lebesgue-null set.

The subclass $\mathcal M_{\mathrm{pt}}$ consists of those $\sigma\in\mathcal M$ that are also pointwise locally bounded: $\sup_{t\in J}|\sigma(t)|<\infty$ for every compact interval $J$. This extra condition distinguishes pointwise uniform approximation from approximation in the essential-supremum norm.

## Definition references

[[def-borel-and-lebesgue-measurable-function-on-rn]]

[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[[def-countable-choice]]

[Leshno et al., Definitions 3–5 and §4: the class $\mathcal M$](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

[Moreau, Chapter 2 §2.3: the narrower piecewise-continuous class used for pointwise uniform approximation](https://ftp.esat.kuleuven.be/pub/pub/SISTA/ida/reports/98-69.pdf)
