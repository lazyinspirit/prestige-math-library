---
id: ex-ip-unobservable-state-mode
kind: example
title: An unobserved state mode
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-discrete-linear-input-state-output-experiment
  - thm-ip-finite-observability-identifies-initial-state
justified_by: []
aliases: []
generation:
  role: example
axiom_use: No choice principle is used; the example is a finite matrix calculation.
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Mohammed Dahleh, Munther A. Dahleh, and George Verghese, Lectures on Dynamic Systems and Control, Chapter 25: Minimal State-Space Realization"
      url: "https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf"
      locator: "§25.2, unobservable modes in the Kalman decomposition, PDF pp. 2–4"
    - title: "Sanjay Lall, Engr207c: Operator Theory and Linear Systems, State-Space Realization lecture notes"
      url: "https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf"
      locator: "§9.2, unobservable space and output map, PDF pp. 3–4"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Take $d=2$, one input, one output, $A=\begin{bmatrix}1&0\\0&2\end{bmatrix}$,
$B=0_{2\times1}$, and $C=\begin{bmatrix}1&0\end{bmatrix}$. For every finite
horizon $q\ge1$ with zero inputs, the distinct initial states
$x_0=(0,0)^{\mathsf T}$ and $x'_0=(0,1)^{\mathsf T}$ produce the same exact
output sequence, namely $y_k=0$ for all $0\le k<q$. The finite observability
matrix has rank $1<2$.

## Example references

[[def-ip-discrete-linear-input-state-output-experiment|State recurrence and output equation]]

[[thm-ip-finite-observability-identifies-initial-state|Finite observability criterion]]

[Dahleh, Dahleh, and Verghese, *Lectures on Dynamic Systems and Control*, §25.2](https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf)

[Lall, *State-Space Realization*, §9.2](https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf)

## Facts & Assumptions

**Given:** The displayed matrices, zero inputs, a finite horizon $q\ge1$, and the two stated initial states.

[F1] [[def-ip-discrete-linear-input-state-output-experiment]]: the state evolves by $x_{k+1}=Ax_k+Bu_k$ and each exact output is $y_k=Cx_k$.

[F2] [[thm-ip-finite-observability-identifies-initial-state]]: for known $A,C$ and inputs, the initial-state output map is injective exactly when $O_q=[C;CA;\ldots;CA^{q-1}]$ has rank $d$.

## Verification

1.1 The first initial state remains zero because $B=0$, so its outputs are all zero. For the difference $e_2=(0,1)^{\mathsf T}$, $Ae_2=2e_2$; induction gives $A^ke_2=2^ke_2$ for each $k\ge0$. Since $Ce_2=0$, every output difference is $CA^ke_2=0$. Thus the two distinct initial states produce identical outputs at all samples. [given, F1, algebra]

2.1 For each $j\ge0$, $CA^j=[1,0]$, so $O_q$ consists of $q$ copies of $[1,0]$ and has rank $1$. Since $1<d=2$, [F2] implies that the initial-state output map is noninjective for every $q\ge1$. [given, F2, step 1.1, algebra]

3.1 The initial states in step 1.1 are different but have the same complete observed sequence, so no data-only rule can recover both states exactly in this experiment. [step 1.1, step 2.1] ∎
