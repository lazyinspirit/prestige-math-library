---
id: def-ptas-fptas-and-apx
kind: definition
title: "PTAS, FPTAS and APX"
status: draft
origin: pipeline
deps:
  - def-optimization-problem-and-approximation-ratio
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §1.1 Definition 1.2 (printed p. 15), §3.1 Definition 3.4 and Theorem 3.5 (printed pp. 68–69)"
      url: "https://designofapproxalgs.com/book.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Fix a finite-instance optimization problem in the model of
[[def-optimization-problem-and-approximation-ratio]].

- A **polynomial-time approximation scheme** (PTAS) is a family
  $(A_\epsilon)_{0<\epsilon<1}$ of algorithms such that for every fixed
  $\epsilon$ with $0<\epsilon<1$ the algorithm $A_\epsilon$ runs in
  deterministic time polynomial in the input length and guarantees factor
  $1+\epsilon$ for minimization, respectively $1-\epsilon$ for maximization,
  in the value inequalities of [[def-optimization-problem-and-approximation-ratio]].
  The order of quantifiers is that the exponent of the polynomial may depend on
  the fixed $\epsilon$.
- A **fully polynomial-time approximation scheme** (FPTAS) is a PTAS with one
  running-time bound that is a polynomial jointly in the input length and in
  $1/\epsilon$.
- **APX** denotes, by explicit local convention, the class of finite-instance
  optimization problems in that model that admit one polynomial-time
  fixed-factor approximation in the objective direction of
  [[def-optimization-problem-and-approximation-ratio]]: a rational $\rho\ge 1$
  with a polynomial-time $\rho$-approximation for a minimization problem, or a
  rational $0<\rho\le 1$ with a polynomial-time $\rho$-approximation for a
  maximization problem. This is a selected convention for this page; it does
  not claim that all of the literature uses the same reduction-based notion of
  APX-hardness.

Since every FPTAS is a PTAS, a problem with no PTAS (unless $P=NP$) also has no
FPTAS unless $P=NP$. All value guarantees above use the inequalities of
[[def-optimization-problem-and-approximation-ratio]] and therefore include
$\operatorname{OPT}=0$ without forming a quotient by $\operatorname{OPT}$.
PTAS or FPTAS existence, by itself, proves neither APX-hardness nor
APX-completeness of any target; those notions are defined separately on this
page, under a declared reduction notion, and are not derived here.
