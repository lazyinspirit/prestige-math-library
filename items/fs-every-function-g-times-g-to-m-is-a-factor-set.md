---
id: fs-every-function-g-times-g-to-m-is-a-factor-set
kind: false-statement
title: "FALSE: every function G times G to M is a factor set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normalized-two-cocycle-and-two-coboundary]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

Every function $f:G\times G\to M$ is a valid factor set.

## Facts & Assumptions

**Given:** $G=C_2=\{1,t\}$, the trivial action on $M=\mathbb Z$, and the
constant function $f(g,h)=1$.

[F1] A factor set must satisfy the normalized cocycle equations
([[def-normalized-two-cocycle-and-two-coboundary]]).

## Refutation

**Proof technique:** direct.

1.1 The function $f$ is not normalized, since $f(1,1)=1\ne0$. It already fails the normalization part of [F1]. [F1, given]

2.1 Even ignoring normalization, the cocycle equation at $(t,t,t)$ would read $1-1+1-1=0$, but the normalization failure from step 1.1 already prevents $f$ from being a factor set. [step 1.1, algebra]

3.1 Therefore the statement is false. [step 1.1, step 2.1] ∎
