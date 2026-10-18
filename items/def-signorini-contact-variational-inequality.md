---
id: def-signorini-contact-variational-inequality
kind: definition
title: "The vector Signorini contact set and variational inequality"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-signorini-elasticity-contact-model, def-signorini-partial-trace-space]
justified_by: [lem-signorini-contact-set-closed-convex-nonempty]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Andersson, The Obstacle Problem, complete 52-page KTH lecture notes"
      url: "https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacle_Problem.pdf"
      locator: "Chapter 3 §3.1, Theorem 3.1 and printed pp. 26–28: feasible obstacle sets and variational minimizers."
    - title: "Richard S. Falk, Error Estimates for the Approximation of a Class of Variational Inequalities, complete 10-page paper"
      url: "https://ow3.math.rutgers.edu/~falk/papers/varineq.pdf"
      locator: "§2, Theorem 1, printed pp. 964–965: variational inequalities with finite-dimensional feasible sets."
---

## Definition

Let $\psi\in C(\Gamma_C;\mathbb R)$ satisfy $\psi\le0$. Define the unilateral frictionless **contact set**
$$K:=\{v\in V:T_Cv\cdot n\ge\psi\quad\text{for arclength-almost every point of }\Gamma_C\}.$$
Given the elasticity form $a$ and bounded load $F$ of [[def-signorini-elasticity-contact-model]], the **contact variational inequality** is to find $u\in K$ such that
$$a(u,v-u)\ge F(v-u)\qquad\text{for every }v\in K.$$
The set $K$ is nonempty, closed and convex by [[lem-signorini-contact-set-closed-convex-nonempty]].

## Remarks

The published scalar obstacle definition has a full-zero-boundary $H^1_0$ interface. This item instead defines the vector boundary-gap set on the stated partial-trace polygon; the scalar interface is used only by the one-dimensional example on the companion page.
