---
id: ex-fixed-target-lmnn-triplet-conflict
kind: example
title: "A fixed LMNN target triplet can retain a positive margin loss"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-lmnn-fixed-target-objective]
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  scraped: []
  references: []
aliases: []
landmark: false
proof_strategy: direct
---

## Example

Take $d=1$, $n=3$, $C=2$, inputs $x_1=0$, $x_2=1$, $x_3=-1$, labels $y_1=y_2=1$, $y_3=2$, fixed target sets $N_1=\{2\}$, $N_2=\{1\}$, $N_3=\varnothing$, and $\mu=\tfrac12$. Every positive-semidefinite matrix is a scalar $M=[m]$ with $m\ge0$. For the anchor $i=1$, target $j=2$, and impostor $l=3$, the LMNN hinge term is exactly $[1+q_M(x_1,x_2)-q_M(x_1,x_3)]_+=1$ for every feasible $M$; therefore the fixed target triplet cannot attain zero margin loss.

## Example references

[[def-lmnn-fixed-target-objective|Fixed target sets and the LMNN push hinge]]

## Facts & Assumptions

**Given:** The sample, labels, fixed target sets, and weighting parameter in the Example.

[F1] For $M\succeq0$, every $q_M(x,x')$ is nonnegative; the push terms are positive parts, and the full objective is the nonnegative weighted sum of the pull and push terms ([[def-lmnn-fixed-target-objective]]).

## Verification

1.1 A scalar matrix $M=[m]$ is feasible exactly when $m\ge0$. For the designated triplet, $q_M(x_1,x_2)=(0-1)^2m=m$ and $q_M(x_1,x_3)=(0-(-1))^2m=m$, so the hinge argument is $1+m-m=1$ and its value is $[1]_+=1$. [given, F1, algebra]

2.1 Every squared distance and every hinge term in $F_{1/2}$ is nonnegative. The designated hinge contributes $\tfrac12$, so $F_{1/2}(M)\ge\tfrac12$ for every feasible $M$, and this triplet's margin loss cannot be zero. [step 1.1, F1, algebra] ∎
