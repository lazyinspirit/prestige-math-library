---
id: op-dynamical-lang-height-lower-bound-over-q
kind: open-problem
title: Dynamical Lang height lower bound for wandering points of minimal degree-d rational maps over Q
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-canonical-height-of-a-morphism-on-projective-line
  - thm-dynamical-canonical-height-limit-and-functional-equation
  - def-preperiodic-point-of-a-self-map
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Joseph H. Silverman, Lecture Notes on Arithmetic Dynamics, Conjecture 22, printed p. 18"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
    - title: "Robin Zhang, The abcd conjecture, uniform boundedness, and dynamical systems, Conjecture 3.17 and Theorem 3.18, 2024"
      url: "https://www.numdam.org/item/10.5802/pmb.58.pdf"
    - title: "Benjamin Hutz, A Genetic Algorithm for Generating Extreme Examples in Arithmetic Dynamics, arXiv:2601.11482v2, §1.1"
      url: "https://arxiv.org/pdf/2601.11482"
---

## Open problem

Assume the Axiom of Choice and fix an integer $d\ge2$. Write a degree-$d$ rational map over $\mathbb Q$ in primitive form

$$\phi(z)=\frac{a_0+a_1z+\cdots+a_dz^d}{b_0+b_1z+\cdots+b_dz^d},$$

where the numerator and denominator are coprime in $\mathbb Q[z]$, all coefficients are integers, and the greatest common divisor of the full coefficient list is $1$. Define its coefficient height by

$$h_{\mathrm{coeff}}(\phi)=\log\max\{|a_0|,\ldots,|a_d|,|b_0|,\ldots,|b_d|\}.$$

For a rational Möbius transformation $\mu(z)=(az+b)/(cz+e)$ with $a,b,c,e\in\mathbb Q$ and $ae-bc\ne0$, let $\phi^\mu=\mu^{-1}\circ\phi\circ\mu$, and compute $h_{\mathrm{coeff}}(\phi^\mu)$ from its primitive integer coefficient representation in the same way. Call $\phi$ **minimal** if $h_{\mathrm{coeff}}(\phi)=\min_\mu h_{\mathrm{coeff}}(\phi^\mu)$. Is there a constant $C(d)>0$ such that

$$\widehat h_\phi(P)\ge C(d)h_{\mathrm{coeff}}(\phi)$$

for every minimal degree-$d$ rational map $\phi$ over $\mathbb Q$ and every $P\in\mathbb P^1(\mathbb Q)$ with infinite forward orbit?

## Open problem references

[[def-canonical-height-of-a-morphism-on-projective-line|Canonical height and degree-$d$ map convention]]

[[thm-dynamical-canonical-height-limit-and-functional-equation|Existence of the canonical-height limit]]

[[def-preperiodic-point-of-a-self-map|Wandering means infinite forward orbit]]

[[def-axiom-of-choice|Axiom of Choice]]

[Silverman, coefficient-height and minimal-map definitions and Conjecture 22, printed p. 18](https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf)

[Zhang, Conjecture 3.17 and Theorem 3.18, 2024](https://www.numdam.org/item/10.5802/pmb.58.pdf)

[Hutz, Conjecture 1 and §1.1, arXiv:2601.11482v2](https://arxiv.org/pdf/2601.11482)

## Status

Status reviewed 2026-10-26. Silverman's source-exact formulation uses coefficient height minimized over rational conjugates. Zhang's 2024 paper records a broader moduli-height form as a conjecture and proves only a weaker conditional bound for polynomials assuming the abcd conjecture. Hutz's 2026 paper discusses a moduli-height variant as an open problem and reports computations for restricted families; that moduli-height statement is not substituted for the coefficient-height formulation here. No proof of the stated rational-map conjecture was found in the reviewed sources; this is a bounded source review, not an exhaustive absence claim.
