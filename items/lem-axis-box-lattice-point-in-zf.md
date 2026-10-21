---
id: lem-axis-box-lattice-point-in-zf
kind: lemma
title: "Axis-box lattice-point theorem in ZF"
status: draft
origin: session
deps: [thm-linear-images-scale-jordan-content-by-absolute-determinant, def-jordan-inner-and-outer-content, thm-jordan-boundary-criterion]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 4, Minkowski's theorem"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

Work in ZF. Let $B$ be an invertible real $n\times n$ matrix, $n\ge1$, and let $L=B\mathbb Z^n$. If positive real numbers $t_1,\ldots,t_n$ satisfy $\prod_i t_i>|\det B|$, then there is a nonzero $v\in L$ such that $|v_i|<t_i$ for every $i$. Only finite Jordan-content operations are needed.

## Facts & Assumptions

**Given:** $B,L,n$ and $t_i$ as in the statement.

[F1] Invertible linear maps scale Jordan content by the absolute determinant ([[thm-linear-images-scale-jordan-content-by-absolute-determinant]]).

[F2] Jordan content is defined by finite rectangular inner and outer approximations; a bounded set whose boundary has content zero is Jordan measurable ([[def-jordan-inner-and-outer-content]], [[thm-jordan-boundary-criterion]]).

## Proof

1.1 Put $P=B[0,1)^n$ and $E=\prod_i(-t_i/2,t_i/2)$. Their contents are $|\det B|$ and $\prod_i t_i$, respectively. Every point $z\in\mathbb R^n$ has exactly one representation $z=p+Bk$ with $p\in P$, $k\in\mathbb Z^n$, by taking coordinatewise floors of $B^{-1}z$. Only finitely many translates $P+Bk$ meet $E$: if $z\in E\cap(P+Bk)$, then $k=B^{-1}z-u$ for $u\in[0,1)^n$, which bounds each integer coordinate of $k$ by a fixed finite constant. Thus all relevant $k$ lie in a single finite integer box. [F1, given, algebra]

2.1 For each of those finitely many $k$ put $E_k=E\cap(P+Bk)$. These are Jordan sets: their boundaries lie in finitely many bounded portions of affine hyperplanes. A coordinate hyperplane portion has zero outer content by covering it with an arbitrarily thin rectangular slab; a general hyperplane portion is contained in an invertible linear image of such a bounded portion and has zero content by [F1]. Finite unions remain null directly from finite covers. The boundary criterion [F2] therefore applies. Translation preserves Jordan content because translating each finite rectangular approximation preserves its total volume; finite additivity for disjoint Jordan sets follows by refining their finitely many approximating rectangular figures to one common grid and making the finitely many approximation errors arbitrarily small. Monotonicity follows from the same definition. Consequently $\operatorname{cont}(E)=\sum_k\operatorname{cont}(E_k)$. [F1, F2, step 1.1, algebra]

3.1 Suppose there were no distinct $x,y\in E$ with $x-y\in L$. The translated sets $E_k-Bk\subseteq P$ would then be pairwise disjoint: a common point gives $x-y=B(k-\ell)$, with $x\ne y$ when $k\ne\ell$. Finite additivity, translation invariance and monotonicity give $\operatorname{cont}(E)=\sum_k\operatorname{cont}(E_k-Bk)\le\operatorname{cont}(P)$, contradicting $\prod_i t_i>|\det B|$. Hence such $x,y$ exist. Their difference is a nonzero lattice vector and satisfies $|x_i-y_i|<t_i$. All sets indexed in this proof are explicitly finite; floors, finite grids and individual existential witnesses require no choice axiom. [step 1.1, step 2.1, algebra] ∎
