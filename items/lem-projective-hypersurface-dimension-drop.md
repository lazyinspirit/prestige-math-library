---
id: "lem-projective-hypersurface-dimension-drop"
kind: "lemma"
title: "Nontrivial projective hypersurface sections"
deps: ["lem-affine-cone-dimension-projective-variety", "thm-principal-subvariety-codimension-one", "lem-dimension-nonempty-open-subset"]
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
    - title: "Milne Theorem 6.43, printed p.156"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Apply the affine principal result to the cone. A positive-degree homogeneous element is not a unit in the cone ring; dimension >=1 of the intersection rules out only the vertex. Transfer purity on punctured-cone charts."
---

## Statement

Let $X\subseteq\mathbf P_k^N$ be irreducible of dimension $d\ge1$. If $f$ is homogeneous of positive degree and does not vanish identically on $X$, then $X\cap V_+(f)$ is nonempty and every irreducible component has dimension $d-1$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] If $X\subseteq\mathbf P_k^N$ is a nonempty projective algebraic set, then $\dim C(X)=\dim X+1$. Over $X_i=X\cap D_+(T_i)$, the locus $C(X)\cap D(T_i)$ is isomorphic to $X_i\times\mathbf G_m$. If $X$ is irreducible, so is $C(X)$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-affine-cone-dimension-projective-variety]]).

[F2] Let $X$ be irreducible affine and $0\ne f\in k[X]$ be a nonunit. Then $V_X(f)$ is nonempty and every irreducible component has dimension $\dim X-1$, hence codimension one. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-principal-subvariety-codimension-one]]).

[F3] If $U$ is a nonempty open of an irreducible classical variety $X$, then $\dim U=\dim X$. Every proper closed subvariety $Z\subsetneq X$ has $\dim Z<\dim X$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dimension-nonempty-open-subset]]).

## Proof

1.1 The affine cone $C(X)$ is irreducible of dimension $d+1$. The restriction of $f$ to its ring is nonzero and is a nonunit, since it vanishes at the vertex. The principal theorem gives that every component of $H=V_{C(X)}(f)$ has dimension $d$. In particular $H$ contains a nonzero point, since a set supported at the vertex has dimension zero whereas $d\ge1$. Its projectivization is therefore nonempty. [F1, F2]

2.1 On each chart $D(T_i)$, the zero set $H$ is the product of $(X\cap V_+(f))\cap D_+(T_i)$ with $\mathbf G_m$: a homogeneous equation at $\lambda v$ is $\lambda^{\deg f}f(v)=0$. Given a projective component, choose a chart meeting it away from the other components. Its product with $\mathbf G_m$ is a component of this open part of $H$, so has dimension $d$ by open invariance in its affine-cone component. The cone-chart dimension calculation subtracts one, giving $d-1$ for the chosen projective component. [F1, F3, step 1.1] ∎
