---
id: "cex-degree-zero-does-not-imply-a-sphere-map-is-constant"
kind: "counterexample"
title: "Degree zero does not imply a sphere map is constant"
deps: ["thm-global-sphere-degree-is-the-sum-of-local-degrees", "prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps", "prop-every-integer-occurs-as-the-degree-of-a-sphere-map"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Example 2.31, p.136 (signed fold variation)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Example 2.31, p.136 (signed fold variation)"
status: "draft"
origin: "pipeline"
proof_strategy: "Pinch two disjoint disks and fold one quotient with local sign +1 and the other with sign -1; outside both disks map to the basepoint. The local-degree sum is zero while each disk quotient surjects. This says nothing against the later nullhomotopy classification."
---

## Statement refuted

The implication “a continuous self-map of $S^n$ of degree zero is constant” is false. For every $n\ge1$ there is a surjective, hence nonconstant, continuous map $S^n\to S^n$ of degree zero.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Let $f:S^n\to S^n$ be continuous, $n\ge1$, with source and target orientations fixed. If $f^{-1}(y)$ is finite, then $$\deg(f)=\sum_{x\in f^{-1}(y)}\deg_x f.$$ The sum over an empty fibre is $0$. ([[thm-global-sphere-degree-is-the-sum-of-local-degrees]])

[F2] On $S^n\subset\mathbb R^{n+1}$ for $n\ge1$, the identity, a constant map, any single coordinate reflection, and the antipodal map have degrees $1$, $0$, $-1$, and $(-1)^{n+1}$ respectively. ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]])

[F3] For every $d\in\mathbb Z$ and $n\ge1$ there exists a continuous self-map of $S^n$ of degree $d$. ([[prop-every-integer-occurs-as-the-degree-of-a-sphere-map]])

## Counterexample

1.1 Choose two disjoint closed round $n$-balls $D_+,D_-$ in $S^n$, each with nonempty interior. Collapse the complement of their interiors to a point. As in the pinch construction of [F3], this gives a continuous quotient to $(D_+/\partial D_+)\vee(D_-/\partial D_-)\cong S^n\vee S^n$. On the first quotient use an orientation-preserving homeomorphism to the target sphere, taking the collapsed boundary to a chosen basepoint $b$. On the second use an orientation-reversing homeomorphism with the same basepoint image; obtain it by composing an orientation-preserving one with a reflection fixing $b$. Such a reflection has degree $-1$ by [F2]. [F2, F3, construct]

2.1 The two maps agree at the wedge point, so they descend to a continuous map $f:S^n\to S^n$. Each ball quotient already covers the target, so $f$ is surjective and nonconstant. A point $y\ne b$ has precisely two preimages, one in each ball interior. With the inherited local orientations their local degrees are $+1$ and $-1$: restriction of each oriented quotient homeomorphism to its interior preserves the local generator, and the inserted reflection reverses it. Thus [F1] gives $\deg f=1-1=0$. This refutes constancy, without making any assertion that a degree-zero map cannot be nullhomotopic. [F1, step 1.1, algebra] ∎
