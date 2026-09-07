---
id: "cor-a-group-acting-freely-on-a-positive-even-sphere-has-at-most-two-elements"
kind: "corollary"
title: "A group acting freely on a positive even sphere has at most two elements"
deps: ["cor-a-fixed-point-free-sphere-map-has-antipodal-degree", "prop-degree-is-homotopy-invariant-and-multiplicative-under-composition", "prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Proposition 2.29, p.135"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Proposition 2.29, p.135"
status: published
origin: "pipeline"
proof_strategy: "The degree homomorphism to {+1,-1} has trivial kernel because every nonidentity group element has no fixed point and hence degree -1. The antipodal action realizes the nontrivial case."
---

## Statement

If a group $\Gamma$ acts freely by homeomorphisms on $S^{2m}$ with $m\ge1$, then $|\Gamma|\le2$. If it is nontrivial, it is isomorphic to $\mathbb Z/2\mathbb Z$. The antipodal action realizes the nontrivial case.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For $n\ge1$, any continuous fixed-point-free map $f:S^n\to S^n$ has degree $(-1)^{n+1}$. Consequently, a self-map of any other degree has a fixed point. ([[cor-a-fixed-point-free-sphere-map-has-antipodal-degree]])

[F2] For $n\ge1$ and continuous sphere self-maps $f,g$, homotopic maps have the same degree and $\deg(g\circ f)=\deg(g)\deg(f)$. Every homotopy equivalence $S^n\to S^n$ has degree $1$ or $-1$. ([[prop-degree-is-homotopy-invariant-and-multiplicative-under-composition]])

[F3] On $S^n\subset\mathbb R^{n+1}$ for $n\ge1$, the identity, a constant map, any single coordinate reflection, and the antipodal map have degrees $1$, $0$, $-1$, and $(-1)^{n+1}$ respectively. ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]])

## Proof

1.1 Let $a_g$ be the homeomorphism associated to $g\in\Gamma$. F2 makes $d(g)=\deg(a_g)$ a homomorphism $\Gamma\to\{1,-1\}$, since $a_{gh}=a_g\circ a_h$ and a homeomorphism is a homotopy equivalence. [F2]

2.1 For every $g\ne e$, freeness says $a_g$ has no fixed point. F1, in positive even dimension, gives $d(g)=-1$. Thus $\ker d=\{e\}$, so $d$ is injective and $|\Gamma|\le2$, including the trivial group. A nontrivial subgroup of $\{1,-1\}$ is the entire two-element group. [F1, step 1.1, algebra]

3.1 The antipodal involution squares to the identity and has no fixed point on a unit sphere: $x=-x$ would imply $x=0$. Together with the identity it therefore gives a free two-element action, of nonidentity degree $-1$ by F3. [F3, algebra] ∎
