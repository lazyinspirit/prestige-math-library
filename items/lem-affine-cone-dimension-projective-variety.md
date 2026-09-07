---
id: "lem-affine-cone-dimension-projective-variety"
kind: "lemma"
title: "A nonempty projective cone raises dimension by one"
deps: ["thm-dimension-product-varieties", "cor-dimension-affine-and-projective-space", "lem-dimension-nonempty-open-subset", "lem-dimension-finite-union-components", "def-affine-cone-projective-set", "lem-projective-variety-cone-irreducible"]
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
    - title: "Milne §6p proof of Theorem 6.43 and Corollary 6.47"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Use (point,nonzero scaling) as inverse chart coordinates; then take components, whose cones contain the vertex in their closure."
---

## Statement

If $X\subseteq\mathbf P_k^N$ is a nonempty projective algebraic set, then $\dim C(X)=\dim X+1$. Over $X_i=X\cap D_+(T_i)$, the locus $C(X)\cap D(T_i)$ is isomorphic to $X_i\times\mathbf G_m$. If $X$ is irreducible, so is $C(X)$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Products of nonempty classical varieties exist in the category of classical varieties, and $\dim(X\times_kY)=\dim X+\dim Y$. If both factors are irreducible, their product is irreducible. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-dimension-product-varieties]]).

[F2] For every integer $n\ge0$, $\dim\mathbf A_k^n=\dim\mathbf P_k^n=n$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[cor-dimension-affine-and-projective-space]]).

[F3] If $U$ is a nonempty open of an irreducible classical variety $X$, then $\dim U=\dim X$. Every proper closed subvariety $Z\subsetneq X$ has $\dim Z<\dim X$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dimension-nonempty-open-subset]]).

[F4] If a Noetherian space $T$ is a finite union of closed subsets $T_1,\ldots,T_m$, then $\dim T=\max_i\dim T_i$. For $m=0$ both sides are $-\infty$. ([[lem-dimension-finite-union-components]]).

[F5] For $X\subseteq\mathbf P_k^n$, define its affine cone $C(X)=V(I_+(X))\subseteq\mathbf A_k^{n+1}$. It is stable under scalar multiplication. If $X\ne\varnothing$, then $0\in C(X)$; under the stated definition, $C(\varnothing)=\varnothing$. ([[def-affine-cone-projective-set]]).

[F6] The affine cone over a classical projective variety is irreducible. ([[lem-projective-variety-cone-irreducible]]).

## Proof

1.1 For a nonzero cone point with $i$th coordinate $\lambda\ne0$, normalize by dividing its coordinates by $\lambda$. This gives $([v],\lambda)\in X_i\times\mathbf G_m$, whose inverse is multiplication of the representative with $i$th coordinate one by $\lambda$. These are regular inverse maps on the indicated affine charts. The cone is the one defined by the homogeneous vanishing ideal; the assertion assumes $X\ne\varnothing$. [F5]

2.1 If $X$ is irreducible, its cone is irreducible by the cone supplier. Each nonempty cone chart therefore has the dimension of the whole cone. The group $\mathbf G_m=D(t)\subset\mathbf A^1$ is a nonempty open of dimension one, and $X_i$ is a nonempty open of $X$. Product dimension gives $\dim C(X)=\dim(X_i\times\mathbf G_m)=\dim X+1$. [F1, F2, F3, F6, step 1.1]

3.1 For reducible $X$, take its finitely many irreducible components $X_j$. The cone is the finite closed union of their cones: every nonzero vector projects to some component, and the common vertex belongs to all their cones. Taking the maximum of their dimensions gives $\dim C(X)=\max_j(\dim X_j+1)=\dim X+1$. In particular a point has a line as its cone. [F4, step 2.1] ∎
