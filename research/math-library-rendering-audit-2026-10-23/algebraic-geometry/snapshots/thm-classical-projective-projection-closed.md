---
id: "thm-classical-projective-projection-closed"
kind: "theorem"
title: "Projection from projective space over a variety is closed"
deps: ["lem-relative-projective-homogeneous-equations", "thm-nakayama-lemma"]
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
    - title: "Milne Theorem 7.22, pp.164–165"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Work over affine Y. For a fibre outside the image choose degree d with all monomials in the specialized ideal. The degree-d quotient is a finite A-module M with M/m_y M=0. Local Nakayama gives M_m_y=0; finite generators yield a neighborhood where M vanishes. All higher degrees vanish there, so all its fibres are empty. No proper-morphism theorem is imported."
---

## Statement

For every classical variety $Y$ and $N\ge0$, the projection $p:Y\times\mathbf P_k^N\to Y$ is a closed map.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a classical variety $Y$ and $N\ge0$, $Y\times\mathbf P_k^N$ exists with its standard product charts. If $Y$ is affine with $A=k[Y]$, its closed subsets are precisely the zero loci of finitely generated homogeneous ideals of $A[T_0,\ldots,T_N]$. For such an ideal $I$ and $y\in Y$, the fibre is empty if and only if the specialized ideal $I(y)\subseteq k[T_0,\ldots,T_N]$ contains every monomial of some positive degree $d$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-relative-projective-homogeneous-equations]]).

[F2] Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$. ([[thm-nakayama-lemma]]).

## Proof

1.1 Closedness can be tested on an affine open cover of $Y$, so take $Y$ affine with coordinate ring $A$ and a closed subset defined by a homogeneous ideal $I\subseteq S=A[T_0,\ldots,T_N]$. Fix $y$ outside its image. The monomial criterion supplies $d\ge1$ such that the fibre of the finite $A$-module $M=(S/I)_d$ at $y$ is zero: $M/\mathfrak m_yM=0$. [F1]

2.1 Localize at $\mathfrak m_y$. Nakayama applies to the finite module $M_{\mathfrak m_y}$ and the maximal ideal of the local ring, which is its Jacobson radical, giving $M_{\mathfrak m_y}=0$. Choose finitely many generators of $M$; each is annihilated by some $s_j\notin\mathfrak m_y$. Their product $s$ annihilates $M$, and $s(y)\ne0$. If $M=0$ already, use $s=1$. [F2, step 1.1]

3.1 For every $z\in D(s)$ the degree-$d$ fibre quotient is zero, so all degree-$d$ monomials belong to $I(z)$. The monomial criterion shows that every fibre there is empty. Hence every point outside the image has an open neighborhood outside it, so the image is closed. This proof works for empty closed subsets, reducible $Y$ and $N=0$; if $Y$ is empty there is nothing to check. [F1, step 2.1] ∎
