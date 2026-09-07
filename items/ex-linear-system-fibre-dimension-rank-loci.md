---
id: "ex-linear-system-fibre-dimension-rank-loci"
kind: "example"
title: "Fibre dimensions of a family of homogeneous linear systems"
deps: ["def-fibre-dimension-at-point-classical", "cor-dimension-affine-and-projective-space", "thm-dimension-product-varieties"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
sources:
  references:
    - title: "Milne Example 9.10, pp.201–202"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "At a fixed y row elimination identifies the kernel with affine space of dimension n-rank. The rank bound is equivalent to vanishing minors; prove that equivalence using a largest invertible minor and elimination. Equations define W in affine charts of Y times A^n."
---

## Example

Let $A(y)$ be an $m\times n$ matrix of regular functions on a classical variety $Y$, with $m,n\ge0$, and $W=\{(y,x)\in Y\times\mathbf A^n:A(y)x=0\}$. Then $\dim W_y=n-\operatorname{rank}A(y)$. For every integer $r$, the locus $\{y:\dim W_y\ge r\}$ is closed: it is all of $Y$ for $r\le0$, empty for $r>n$, and otherwise is cut out by the minors of size $n-r+1$, with an absent family of minors imposing no conditions. No irreducibility or global dimension formula for $W$ is asserted.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a morphism $f:X\to Y$ of classical varieties and a closed point $y\in Y$, let $X_y=f^{-1}(y)$ have its reduced closed-subvariety structure. Its dimension is the chain dimension, with $\dim X_y=-\infty$ if the fibre is empty. On affine charts $V\subseteq Y$ containing $y$ and $U\subseteq f^{-1}(V)$, writing $A=k[V]$ and $B=k[U]$, the fibre chart has coordinate ring $B/\sqrt{\mathfrak m_yB}$. Here general morphisms have the locally ringed-space meaning; the earlier affine morphism definition applies to the restrictions $U\to V$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-fibre-dimension-at-point-classical]]).

[F2] For every integer $n\ge0$, $\dim\mathbf A_k^n=\dim\mathbf P_k^n=n$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[cor-dimension-affine-and-projective-space]]).

[F3] Products of nonempty classical varieties exist in the category of classical varieties, and $\dim(X\times_kY)=\dim X+\dim Y$. If both factors are irreducible, their product is irreducible. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-dimension-product-varieties]]).

## Verification

1.1 The product exists, and on its affine base charts the entries of $A(y)x$ are regular polynomial expressions. Their common zeros give a reduced closed subvariety $W$. Fix $y$. Elementary row and column changes over $k$ reduce $A(y)$ to a block matrix with an identity block of size $q=\operatorname{rank}A(y)$ and zeros elsewhere. The inverse linear coordinate changes identify its kernel, as an affine algebraic set, with $\mathbf A^{n-q}$. Thus the fibre has dimension $n-q$ and always contains zero. [F1, F2, F3]

2.1 For $1\le s\le\min(m,n)$, rank is at least $s$ exactly when some $s\times s$ minor is nonzero. One implication follows from the independence of its columns. For the other, choose $s$ independent columns; the resulting injective map $k^s\to k^m$ has $s$ independent coordinate row functionals, giving such a minor. Therefore rank at most $s-1$ is equivalent to vanishing of all size-$s$ minors. For $1\le r\le n$, take $s=n-r+1$: these minors are regular functions, hence define a closed locus. If $s>m$ all such minors are absent and the rank bound holds automatically. [step 1.1]

3.1 Every fibre is nonempty and has dimension between zero and $n$, so $r\le0$ gives all of $Y$ and $r>n$ gives the empty locus. If $n=0$, every fibre is a point; if $m=0$, there are no equations and every fibre is $\mathbf A^n$. The zero matrix gives that latter fibre too. These verify all boundary conventions without assuming the total space is irreducible. [F2, step 1.1, step 2.1] ∎
