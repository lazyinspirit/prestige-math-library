---
id: "ex-a-two-sheeted-orientation-preserving-cover-has-degree-two"
kind: "example"
title: "A displayed two-sheeted orientation-preserving covering has degree two"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-regular-value-formula-for-compact-support-degree","prop-degree-of-the-power-map-on-the-circle","prop-real-line-mod-integers-is-compact-and-path-connected","thm-compact-subset-of-a-hausdorff-space-is-closed","thm-closed-subspace-of-a-compact-space-is-compact"]
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology, Theorem 5.4.1, pp.191–192
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "regular-value"
---

## Example

On the counterclockwise oriented quotient circle $S^1=\mathbb R/\mathbb Z$, the map
$$F:S^1\longrightarrow S^1,\qquad F([t])=[2t],$$
is a proper two-sheeted local diffeomorphism. Both sheets preserve orientation, and $\deg(F)=2$.

## Facts & Assumptions

**Given:** The displayed quotient-circle map and the increasing angular orientation.

[F1] [[prop-degree-of-the-power-map-on-the-circle]] verifies that $F=P_2$ is a well-defined smooth map with degree $2$.

[F2] [[thm-regular-value-formula-for-compact-support-degree]] computes the degree of a proper smooth same-dimensional map at a supplied regular value as the finite sum of local orientation signs.

[F3] [[prop-real-line-mod-integers-is-compact-and-path-connected]] makes $S^1=\mathbb R/\mathbb Z$ compact. By [[thm-compact-subset-of-a-hausdorff-space-is-closed]] and [[thm-closed-subspace-of-a-compact-space-is-compact]], the inverse image under the continuous $F$ of every compact target subset is compact; hence $F$ is proper.

## Verification

1.1 Let $y=[a]\in S^1$. Its fibre is exactly $$F^{-1}(y)=\left\{\left[\frac a2\right],\left[\frac{a+1}{2}\right]\right\}.$$ Both displayed classes map to $[a]$, and they are distinct because their difference is $1/2\notin\mathbb Z$. Conversely, $F([t])=[a]$ means $2t-a=k\in\mathbb Z$; according as $k$ is even or odd, $[t]$ is the first or second displayed class. This also shows that changing $a$ by an integer merely permutes the two classes. [F1, given, algebra]

2.1 Choose quotient arcs about either preimage and $y$, and lift them to increasing real coordinates. On each source arc $F$ has the form $u\mapsto2u-k$ for an integer $k$, so its derivative is $2>0$. Hence each restriction is an orientation-preserving diffeomorphism onto a sufficiently short target arc; these two restrictions are the two inverse sheets over that arc. Thus every $y$ is regular and both local signs are $+1$. [F1, step 1.1]

3.1 Since $F$ is proper by [F3], [F2] applies at the arbitrary value $y$ and gives $$\deg(F)=(+1)+(+1)=2.$$ The fibre is never empty or a singleton, the derivative never degenerates, and quotient seams introduce no boundary endpoints because the calculation uses local lifts. Both inverse branches were displayed explicitly, so no choice principle is used. [F1, F2, F3, step 1.1, step 2.1] ∎
