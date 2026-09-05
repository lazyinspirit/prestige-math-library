---
id: fs-a-degree-zero-natural-transformation-between-delta-functors-always-extends
kind: false-statement
title: "FALSE: a degree-zero natural transformation between delta functors always extends uniquely"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-universal-delta-functor, def-homological-delta-functor]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Statement

> **False.** Every degree-zero natural transformation between delta functors
> extends uniquely to a morphism of delta functors.
## Facts & Assumptions

**Given:** The exact identity functor $E=\operatorname{id}_{\mathbf{Ab}}$.

[L1] Extension from degree zero is the extra property called universality ([[def-universal-delta-functor]]).

[L2] A homological delta functor consists of additive functors, exact long
sequences, and natural connecting maps ([[def-homological-delta-functor]]).

## Refutation

**Proof technique:** direct.

1.1 Define a homological delta functor $T$ on $\mathbf{Ab}$ by $T_1=E$ and $T_n=0$ for $n\ne1$, with every connecting map zero. For each short exact sequence, the only nonzero part of its long sequence is $$0\to E(A)\to E(B)\to E(C)\to0,$$ which is exact because $E$ is exact; naturality is immediate. Thus [L2] applies. [L2, given, construct]

2.1 The unique degree-zero transformation $T_0=0\Rightarrow T_0=0$ has at least two extensions $T\to T$: the zero morphism and the identity morphism. They differ in degree $1$, since $T_1=E\ne0$, but have the same degree-zero component. Therefore arbitrary delta functors do not have the unique-extension property [L1]. [L1, step 1.1] ∎
