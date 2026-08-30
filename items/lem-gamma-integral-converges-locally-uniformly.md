---
id: lem-gamma-integral-converges-locally-uniformly
kind: lemma
title: "Euler's Gamma integral converges locally uniformly on the right half-plane"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-euler-gamma-function,
       thm-real-gamma-euler-integral-convergence]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(ii)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
    - title: "M. Weber, Complex Analysis, §3.7"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

The improper integral

$$\int_0^\infty t^{z-1}e^{-t}\,dt$$

converges locally uniformly on $\{z\in\mathbb C:\operatorname{Re}z>0\}$.

## Facts & Assumptions

**Given:** A compact set $K\subseteq\{z:\operatorname{Re}z>0\}$.

[L1] The real Euler integral $\int_0^\infty t^{s-1}e^{-t}\,dt$ converges exactly
for $s>0$ ([[thm-real-gamma-euler-integral-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Since $K$ is compact in the open right half-plane, choose real numbers $0<a\le b$ with $a\le\operatorname{Re}z\le b$ for every $z\in K$. For $0<t\le1$ one has $|t^{z-1}e^{-t}|=t^{\operatorname{Re}z-1}e^{-t}\le t^{a-1}$, and for $t\ge1$ one has $|t^{z-1}e^{-t}|\le t^{b-1}e^{-t}$. [given, choose, algebra]

2.1 By [L1], both majorants from step 1.1 have convergent improper integrals on their respective ranges. The Weierstrass M-test on compact subsets therefore gives local-uniform convergence of the truncated integrals to the Gamma integral on $K$. [step 1.1, L1, algebra] ∎
