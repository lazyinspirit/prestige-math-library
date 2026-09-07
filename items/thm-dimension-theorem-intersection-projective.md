---
id: "thm-dimension-theorem-intersection-projective"
kind: "theorem"
title: "Projective intersection dimension and nonemptiness"
deps: ["lem-affine-cone-dimension-projective-variety", "lem-affine-intersection-dimension-bound", "lem-dimension-nonempty-open-subset"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne Corollary 6.47"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "Use affine cones in A^(n+1); their intersection contains the vertex and has dimension at least dim X+dim Y-n+1. This is positive under the nonemptiness hypothesis. Use cone charts for the component bound."
---

## Statement

Let $X,Y\subseteq\mathbf P_k^n$ be irreducible closed subvarieties. Every nonempty irreducible component $Z$ of $X\cap Y$ satisfies $\dim Z\ge\dim X+\dim Y-n$. If $\dim X+\dim Y\ge n$, then $X\cap Y\ne\varnothing$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] If $X\subseteq\mathbf P_k^N$ is a nonempty projective algebraic set, then $\dim C(X)=\dim X+1$. Over $X_i=X\cap D_+(T_i)$, the locus $C(X)\cap D(T_i)$ is isomorphic to $X_i\times\mathbf G_m$. If $X$ is irreducible, so is $C(X)$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-affine-cone-dimension-projective-variety]]).

[F2] For irreducible closed $X,Y\subseteq\mathbf A_k^n$, every nonempty irreducible component $Z$ of $X\cap Y$ satisfies $\dim Z\ge\dim X+\dim Y-n$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-affine-intersection-dimension-bound]]).

[F3] If $U$ is a nonempty open of an irreducible classical variety $X$, then $\dim U=\dim X$. Every proper closed subvariety $Z\subsetneq X$ has $\dim Z<\dim X$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dimension-nonempty-open-subset]]).

## Proof

1.1 The irreducible affine cones have dimensions $\dim X+1$ and $\dim Y+1$ in $\mathbf A^{n+1}$. Their intersection $H$ contains the vertex. The affine intersection bound gives every component of $H$ dimension at least $\dim X+\dim Y-n+1$. If $\dim X+\dim Y\ge n$, this is at least one, so there is a nonzero point of $H$, projecting to $X\cap Y$. [F1, F2]

2.1 For any nonempty projective component $Z$, choose a standard chart meeting it away from the other projective components. The corresponding portion of $H$ is the product of that intersection with $\mathbf G_m$. Its component corresponding to $Z$ is an open of a component of $H$, so the cone-chart dimension comparison gives $\dim Z+1\ge\dim X+\dim Y-n+1$. This proves the bound, without asserting that a vertex-only $H$ is the cone of an empty projective set. For $n=0$ both factors are the point. [F1, step 1.1, F3] ∎
