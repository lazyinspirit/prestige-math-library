---
id: "cor-projective-equations-dimension-bound"
kind: "corollary"
title: "Several homogeneous equations in projective space"
deps: ["lem-projective-hypersurface-dimension-drop", "lem-variety-equations-dimension-bound", "lem-affine-cone-dimension-projective-variety", "lem-dimension-finite-union-components", "lem-dimension-nonempty-open-subset"]
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
    - title: "Milne Corollary 6.44, p.156"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Apply the affine equations bound on the cone and subtract one on nonvertex components. If d>=r, all cone components have positive dimension, so cannot be just the vertex."
---

## Statement

Let $X\subseteq\mathbf P_k^N$ be irreducible of dimension $d$, and let $f_1,\ldots,f_r$ be homogeneous polynomials of positive degree, with $r\ge0$. Every nonempty component of $X\cap V_+(f_1,\ldots,f_r)$ has dimension at least $d-r$. If $d\ge r$, this common zero set is nonempty.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F2] Let $X$ be an irreducible classical variety of dimension $n$, and let $f_1,\ldots,f_r$ be global regular functions, with $r\ge0$. Every nonempty irreducible component $Z$ of their common zero set has $\dim Z\ge n-r$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-variety-equations-dimension-bound]]).

[F3] If $X\subseteq\mathbf P_k^N$ is a nonempty projective algebraic set, then $\dim C(X)=\dim X+1$. Over $X_i=X\cap D_+(T_i)$, the locus $C(X)\cap D(T_i)$ is isomorphic to $X_i\times\mathbf G_m$. If $X$ is irreducible, so is $C(X)$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-affine-cone-dimension-projective-variety]]).

[F5] If $U$ is a nonempty open of an irreducible classical variety $X$, then $\dim U=\dim X$. Every proper closed subvariety $Z\subsetneq X$ has $\dim Z<\dim X$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dimension-nonempty-open-subset]]).

## Proof

1.1 For $r=0$ the zero set is $X$ and both assertions hold. For $r>0$, the affine common zero locus $H$ on the irreducible cone $C(X)$ contains the vertex, and every component has dimension at least $(d+1)-r$ by the equations bound. If $d\ge r$, this number is positive, so $H$ cannot be supported only at the vertex. A nonzero point yields a point of the projective common zero set. [F2, F3]

2.1 On a chart where $T_i\ne0$, homogeneity identifies $H$ with the corresponding projective common zero locus times $\mathbf G_m$. A nonempty projective component, restricted away from the other components, corresponds to an affine component in this open, whose dimension is at least $d+1-r$. Subtracting the one scaling dimension gives the bound $d-r$. This comparison concerns the punctured locus; when the projective zero set is empty, $H$ can still contain the vertex, so it is not identified with the supplier-defined cone of the empty set. [F3, step 1.1, F5] ∎
