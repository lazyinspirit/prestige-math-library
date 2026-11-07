---
id: ex-split-torsor-polarization-boundary
kind: example
title: "The obstruction boundary on a split abelian torsor"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - lem-polarization-divisor-cocycle-and-fppf-obstruction
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
---

## Example

Under the geometric hypotheses and conventions of
[[lem-polarization-divisor-cocycle-and-fppf-obstruction]], take $X=A$ and
$P=0\in A(K)$. Then the obstruction cocycle $\gamma$ lifts to the closed
divisor cochain $\sigma D-D$. Its image in
$H^1(G,\operatorname{Pic}(A_{K_s}))$ is zero, even when no $K$-rational
divisor lift of $\lambda$ has been supplied. This does not imply that its
class in $H^1(G,A^\vee(K_s))$ is zero.

## Facts & Assumptions

**Given:** The supplied data of the cited lemma with $X=A$ and $P=0$.

[F1] The cited lemma gives $B_\sigma=D_P-\sigma(D_P)$ as a closed
divisor cochain lifting $\lambda a-\gamma$ and identifies $\gamma$ with
the fppf fiber obstruction.
([[lem-polarization-divisor-cocycle-and-fppf-obstruction]])

## Verification

**Proof technique:** specialize the divisor formula to the rational origin.

**Given:** [F1] and the Example's data.

1.1 Since $\sigma P=P=0$, the torsor cocycle $a_\sigma$ is zero and $D_P=D$. Consequently [F1] gives $B_\sigma=D-\sigma D$ lifting $-\gamma_\sigma$. Negating this cochain gives the closed lift $\sigma D-D$ of $\gamma$. [F1, given, algebra]

2.1 In the full Picard group this cocycle is the coboundary $\sigma[D]-[D]$, so its class there is zero. The cochain $[D]$ need not lie in $\operatorname{Pic}^0$; therefore the same expression supplies no coboundary witness in $A^\vee(K_s)$. The asserted conclusion concerns the larger coefficient group only. [F1, step 1.1, algebra] ∎
