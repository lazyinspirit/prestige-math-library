---
id: "ex-family-hyperbolas-degenerate-fibre"
kind: "example"
title: "The family xy=t has constant dimension and a reducible special fibre"
deps: ["thm-principal-subvariety-codimension-one", "cor-dimension-affine-and-projective-space", "lem-dimension-nonempty-open-subset", "lem-dimension-finite-union-components", "def-fibre-dimension-at-point-classical"]
provenance:
  statement: "ai-generated"
  proof: "ai-generated"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne Theorem 3.42, p.76, dimension background; polynomial-family computation supplied here"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
generation:
  role: "example"
status: published
origin: "pipeline"
proof_strategy: "Eliminate t; for nonzero t solve y=t/x, and for zero factor xy."
---

## Example

For the morphism $V(xy-t)\subseteq\mathbf A_k^3\to\mathbf A_k^1$, $(x,y,t)\mapsto t$, the fibre at $a\ne0$ is $\mathbf G_m$, whereas the fibre at zero is the coordinate cross. Every fibre is nonempty of pure dimension one.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F2] For every integer $n\ge0$, $\dim\mathbf A_k^n=\dim\mathbf P_k^n=n$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[cor-dimension-affine-and-projective-space]]).

[F3] If $U$ is a nonempty open of an irreducible classical variety $X$, then $\dim U=\dim X$. Every proper closed subvariety $Z\subsetneq X$ has $\dim Z<\dim X$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dimension-nonempty-open-subset]]).

[F4] If a Noetherian space $T$ is a finite union of closed subsets $T_1,\ldots,T_m$, then $\dim T=\max_i\dim T_i$. For $m=0$ both sides are $-\infty$. ([[lem-dimension-finite-union-components]]).

[F5] For a morphism $f:X\to Y$ of classical varieties and a closed point $y\in Y$, let $X_y=f^{-1}(y)$ have its reduced closed-subvariety structure. Its dimension is the chain dimension, with $\dim X_y=-\infty$ if the fibre is empty. On affine charts $V\subseteq Y$ containing $y$ and $U\subseteq f^{-1}(V)$, writing $A=k[V]$ and $B=k[U]$, the fibre chart has coordinate ring $B/\sqrt{\mathfrak m_yB}$. Here general morphisms have the locally ringed-space meaning; the earlier affine morphism definition applies to the restrictions $U\to V$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-fibre-dimension-at-point-classical]]).

## Verification

1.1 The total space is isomorphic to $\mathbf A^2$ by $(x,y)\mapsto(x,y,xy)$, with inverse forgetting $t$. Its fibre at $a$ is the reduced zero locus $xy=a$. For $a\ne0$, $x\mapsto(x,a/x,a)$ identifies it with $\mathbf G_m$, a nonempty open of $\mathbf A^1$ of dimension one and irreducible. [F2, F3, F5]

2.1 At $a=0$, $xy=0$ is the union of the two coordinate axes, each an affine line; these are its two irreducible components. The finite-union formula gives dimension one, and each component has that dimension. Thus the special fibre is reducible but still pure of dimension one. All parameters have a nonempty fibre. [F2, F4, step 1.1] ∎
