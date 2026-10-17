---
id: def-absolute-stability-regions-for-one-step-and-multistep-methods
kind: definition
title: "Scalar absolute stability, A-stability, L-stability, and multistep root regions"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-linear-multistep-method-consistency-order-and-root-condition
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §III.9"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis, Chapter 5, §5.2.2: Stability"
      url: "https://math.mit.edu/icg/resources/teaching/18.330/18.330-Apr-2014.pdf"
    - title: "Masayuki Yano, James Douglass Penn, George Konidaris, and Anthony T. Patera, Math, Numerics, and Programming (for Mechanical Engineers), Unit IV, Chapter 21"
      url: "https://ocw.mit.edu/courses/2-086-numerical-computation-for-mechanical-engineers-spring-2013/64e7bed65373841c988a0fd98e1ae16e_MIT2_086S13_Unit4_Textbook.pdf"
---

## Definition

For the scalar test equation $y'=\lambda y$, a step size $h>0$ gives $z=h\lambda$. A one-step scalar update has stability function $R$ when one step sends $y_n$ to $y_{n+1}=R(z)y_n$. If $R$ is rational, write it in reduced form; it is defined at $z$ exactly when its denominator is nonzero there. Its absolute-stability region is

$$\mathcal S_R=\{z\in\mathbb C:R(z)\text{ is defined and }|R(z)|\le1\}.$$

The update is A-stable when the closed left half-plane $\{z:\operatorname{Re}z\le0\}$ is contained in $\mathcal S_R$. A rational one-step update is L-stable when it is A-stable and

$$\lim_{\substack{|z|\to\infty\\ \operatorname{Re}z\le0}}R(z)=0,$$

where the limit means that the values tend to zero along every sequence in the closed left half-plane whose modulus tends to infinity.

For a linear multistep method with the coefficient and polynomial convention of [[def-linear-multistep-method-consistency-order-and-root-condition]], substitution of the scalar test equation gives the characteristic polynomial

$$\pi_z(\zeta)=\rho(\zeta)-z\sigma(\zeta).$$

The multistep absolute-stability region consists of those $z$ for which the leading coefficient $\alpha_k-z\beta_k$ is nonzero and every root of $\pi_z$ satisfies the root condition: all roots have modulus at most one, and every root of modulus one is simple. This criterion concerns constant-step scalar test recurrences.

## Remarks

Absolute stability is a scalar test-equation property. It does not itself assert an accuracy bound for an ODE solution, contractivity of a matrix step, positivity preservation, or conservation.
