---
id: ex-f4-finite-vertex-coupling-and-net-index
kind: example
title: F4 Finite Vertex Coupling And Net Index
domain: mathematics
library: physics
category: string-theory
dependency_level: 1
deps:
  - lem-f4-closed-branch-vertex-supercharge-index
dependency_roles:
  lem-f4-closed-branch-vertex-supercharge-index: mathematical-premise
status: published
origin: session
physical_scope: >-
  Pure mathematical finite-dimensional examples conditional on the operator
  lemma; no physical membrane states or vacua are asserted.
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $D$ be any closed densely defined Fredholm branch operator as in
[[lem-f4-closed-branch-vertex-supercharge-index]]. If $E=V=\mathbb C$ and
$S=T=0$, $M(e)=me$, then for $m\ne0$ the vertex pair has no even or odd
zero state, while for $m=0$ it has one even and one odd zero state. In both
cases $\operatorname{ind}L=\operatorname{ind}D$. If instead $E=0$, $V=\mathbb C$,
and $T=0$, then $\operatorname{ind}L=\operatorname{ind}D-1$ and an odd
cokernel state remains. These are mathematical examples, not membrane vacua.

## Facts & Assumptions

**Given:** A closed densely defined Fredholm operator $D$ and the finite
vertex spaces and maps specified in the Statement.

[F1] For the operator
$L(x,e)=(Dx+Se,Tx+Me)$ with finite-dimensional $E,V$ and graph-bounded $T$,
the closed-branch vertex lemma states
$\operatorname{ind}L=\operatorname{ind}D+\dim E-\dim V$
([[lem-f4-closed-branch-vertex-supercharge-index]]).

## Proof

**Given:** The hypotheses and maps in the Statement.

1.1 When $E=V=\mathbb C$ and $S=T=0$, the operator is the direct sum
$D\oplus m$. If $m\ne0$, scalar multiplication by $m$ is bijective, so
the vertex kernel and cokernel both vanish. If $m=0$, its kernel and
cokernel are each $\mathbb C$. The two zero spaces of the odd operator
therefore contain respectively one even and one odd vertex state in the zero
case, and none in the nonzero case. Formula [F1] gives
$\operatorname{ind}L=\operatorname{ind}D+1-1=\operatorname{ind}D$ in both
cases. [given, F1, algebra]

2.1 If $E=0$, $V=\mathbb C$, and $T=0$, then
$Lx=(Dx,0)$. Its kernel is $\ker D$, its range is
$\operatorname{ran}D\oplus\{0\}$, and its cokernel is
$(H_-/\operatorname{ran}D)\oplus\mathbb C$. The range is closed because
$\operatorname{ran}D$ is closed. Thus its index is
$\operatorname{ind}D-1$, also as [F1] gives. The additional odd cokernel
copy of $\mathbb C$ is present regardless of any physical interpretation.
[given, F1, step 1.1, algebra] ∎
