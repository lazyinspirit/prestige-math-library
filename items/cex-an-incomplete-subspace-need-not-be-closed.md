---
id: cex-an-incomplete-subspace-need-not-be-closed
kind: counterexample
title: "An incomplete normed subspace need not be closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-c0-is-a-banach-space, ex-finite-sequences-c00-with-standard-norms,
       lem-complete-subspace-is-closed]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Statement refuted

Every incomplete normed subspace of a normed space is closed.

## Facts & Assumptions

**Given:** The supremum-norm inclusion $c_{00}\subset c_0$.

[L1] The space $c_0$ is Banach ([[ex-c0-is-a-banach-space]]).

[L2] The space $c_{00}$ is incomplete and dense in $c_0$ for the supremum norm ([[ex-finite-sequences-c00-with-standard-norms]]).

[L3] A complete normed subspace is closed ([[lem-complete-subspace-is-closed]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L2], the subspace $c_{00}$ is incomplete. [L2]

1.2 By [L2], the same subspace is dense in $c_0$, so if it were closed then it would equal all of $c_0$. But $c_{00}\ne c_0$, since for example $(1,1/2,1/3,\dots)\in c_0\setminus c_{00}$. [L2, algebra]

2.1 Therefore $c_{00}$ is an incomplete normed subspace that is not closed, refuting the statement. The ambient space is Banach by [L1], and [L3] explains why no contradiction occurs: [L3] goes in the opposite direction. [step 1.1, step 1.2, L1, L3] ∎
