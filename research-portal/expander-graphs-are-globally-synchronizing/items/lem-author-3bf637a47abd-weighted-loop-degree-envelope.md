---
id: lem-author-3bf637a47abd-weighted-loop-degree-envelope
kind: lemma
title: Loop-dependent weighted degree envelope
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-prereq-loop-compatible-networks
  - lem-author-3bf637a47abd-weighted-offdiagonal-degree
dependency_roles:
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  lem-author-3bf637a47abd-weighted-offdiagonal-degree: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 3
---

## Statement

Under the hypotheses of [[lem-author-3bf637a47abd-weighted-offdiagonal-degree]], set $\ell_{\min}=\min_x A_{xx}$ and $\ell_{\max}=\max_x A_{xx}$, with row degrees and loops as in [[def-expander-prereq-loop-compatible-networks]]. Define $d_{\min}=\min_{x\in V}d_A(x)$ and $d_{\max}=\max_{x\in V}d_A(x)$. Then $(1+c^-)d_0-d_0/n+\ell_{\min}\le d_{\min}\le d_{\max}\le(1+c^+)d_0-d_0/n+\ell_{\max}$. More precisely, $s(x)$ may be replaced by $d_A(x)-A_{xx}$ in the pointwise bounds of that supplier. In particular $0\le A_{xx}\le M$ implies $d_{\max}\le(1+c^+)d_0+M-d_0/n$. When every loop vanishes the sharper upper bound is $(1+c^+)d_0-d_0/n$.

## Facts & Assumptions

[F1] The finite network has row degree $d_A(x)=s(x)+A_{xx}$, with nonnegative loop weights ([[def-expander-prereq-loop-compatible-networks]]).

[F2] The degree without loops satisfies $(1+c^-)d_0-d_0/n\le s(x)\le(1+c^+)d_0-d_0/n$ ([[lem-author-3bf637a47abd-weighted-offdiagonal-degree]]).

## Proof

**Given:** The data in the Statement.

**Goal:** Establish the stated conclusions.

1.1 Add $A_{xx}$ to both bounds in [F2] and use [F1]. Replacing $A_{xx}$ by $\ell_{\min}$ in the lower bound and by $\ell_{\max}$ in the upper bound gives a common interval containing every row degree. The finite nonempty vertex set ensures these loop extrema and the degree extrema exist. [F1, F2, algebra]

2.1 Taking the minimum and maximum of the degrees in that interval gives the displayed chain. If $A_{xx}\le M$ then $\ell_{\max}\le M$, yielding the claimed uniform upper bound. If all loops vanish, $M=0$ is allowed. This proves all assertions. [F1, step 1.1, algebra] ∎
