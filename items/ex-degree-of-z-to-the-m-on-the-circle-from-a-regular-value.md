---
id: "ex-degree-of-z-to-the-m-on-the-circle-from-a-regular-value"
kind: "example"
title: "Degree of z to the m on the circle from a regular value"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-regular-value-formula-for-compact-support-degree","prop-degree-of-the-power-map-on-the-circle","prop-real-line-mod-integers-is-compact-and-path-connected","thm-compact-subset-of-a-hausdorff-space-is-closed","thm-closed-subspace-of-a-compact-space-is-compact"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology, Theorem 5.4.1, pp.191–192
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Example

Let $m\in\mathbb Z\setminus\{0\}$ and $P_m:S^1\to S^1$, $P_m(z)=z^m$, with both circles counterclockwise oriented. Every target point is regular, has exactly $|m|$ preimages, and every preimage has sign $\operatorname{sgn}(m)$; hence the regular-value sum is $m$.

## Facts & Assumptions

**Given:** The nonzero integer $m$ and a target point $y=[a]\in\mathbb R/\mathbb Z$.

[F1] [[thm-regular-value-formula-for-compact-support-degree]] gives degree as the finite sum of derivative signs at any supplied regular value.

[F2] [[prop-degree-of-the-power-map-on-the-circle]] verifies that $P_m([t])=[mt]$ is smooth and has degree $m$.

[F3] [[prop-real-line-mod-integers-is-compact-and-path-connected]] makes $S^1=\mathbb R/\mathbb Z$ compact. By [[thm-compact-subset-of-a-hausdorff-space-is-closed]] and [[thm-closed-subspace-of-a-compact-space-is-compact]], the inverse image under the continuous $P_m$ of every compact target subset is compact; hence $P_m$ is proper.

## Verification

1.1 Put $r=|m|$. The $r$ classes $$x_k=\left[\frac{a+k}{m}\right],\qquad 0\le k<r,$$ all map to $[a]$. They are distinct: if $x_j=x_k$, then $(j-k)/m\in\mathbb Z$, so $r$ divides $j-k$, which is possible in the displayed range only when $j=k$. Conversely, if $P_m([t])=[a]$, then $mt-a\in\mathbb Z$; reducing that integer modulo $r$ puts $[t]$ equal to exactly one $x_k$. Thus this is the complete fibre. [F2, given, algebra]

2.1 In increasing angular lift coordinates at every $x_k$ and at $y$, the map is $u\mapsto mu$ plus a constant, so its derivative is the nonzero scalar $m$. Every $x_k$ is therefore regular and has local sign $\operatorname{sgn}(m)$. Properness from [F3] lets [F1] apply, giving $$\deg(P_m)=\sum_{k=0}^{r-1}\operatorname{sgn}(m)=r\operatorname{sgn}(m)=m,$$ agreeing with [F2]. [F1, F2, F3, step 1.1]

3.1 For $m=1$ the fibre is a singleton of sign $+1$; for $m=-1$ it is a singleton of sign $-1$. The excluded $m=0$ map instead has empty fibres away from its constant value and degree zero, as [F2] records. There are no quotient-seam endpoints: all calculations use local lifts. The finite list is explicit and no choice principle is used. [F1, F2, step 1.1, step 2.1] ∎
