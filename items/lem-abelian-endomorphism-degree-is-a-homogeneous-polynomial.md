---
id: lem-abelian-endomorphism-degree-is-a-homogeneous-polynomial
kind: lemma
title: Endomorphism degree is a homogeneous polynomial on finite rational spans
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- thm-abelian-variety-is-projective
- lem-nonaffine-theorem-of-the-cube-for-abelian-variety
- def-intersection-with-a-cartier-divisor-and-first-chern-class
- thm-intersection-product-and-chow-ring-of-a-smooth-scheme
- lem-proper-pushforward-of-cycles-well-defined
- lem-projective-hypersurface-dimension-drop
- thm-nonaffine-abelian-multiplication-finite-faithfully-flat
justified_by: []
sources:
  references:
  - title: J. S. Milne, Abelian Varieties, version 2.00 (2008)
    url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    locator: Chapter I section10, Proposition10.13, printed47–48. The finite-difference polynomial is expanded explicitly below; no characteristic-polynomial or Tate theorem is imported.
---

## Statement

Assume the Axiom of Choice. Let $A$ be an abelian variety of dimension $g\ge1$ over an algebraically closed field $k$. For an endomorphism $f$, set $\delta(f)=[k(A):f^*k(A)]$ if $f$ is dominant, and $\delta(f)=0$ otherwise. The group $\operatorname{End}(A)$ is torsion-free. The rule
$$\delta(f/d)=d^{-2g}\delta(f)\qquad(f\in\operatorname{End}(A),\ d\ge1)$$
is well defined on $\operatorname{End}^0(A)$. For every finite list $f_1,\ldots,f_r\in\operatorname{End}(A)$ there is a homogeneous polynomial $P\in\mathbb Q[X_1,\ldots,X_r]$ of degree $2g$ (the zero polynomial allowed) such that
$$P(t_1,\ldots,t_r)=\delta\!\left(\sum_i t_i f_i\right)\qquad(t_i\in\mathbb Q).$$
In particular the degree function is continuous in the ordinary real coordinates on each finite-dimensional rational span. For every nonzero isogeny $f$, its value is a positive integer. No finite generation or Tate-faithfulness theorem is assumed.

## Facts & Assumptions

**Given:** AC, the positive-dimensional abelian variety, its degree convention and the finite endomorphism list in the Statement.

[A1] AC is explicit and supplies DC for the cube theorem ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] An abelian variety is projective. Its cube identity says $m_{123}^*L\otimes m_1^*L\otimes m_2^*L\otimes m_3^*L\cong m_{12}^*L\otimes m_{13}^*L\otimes m_{23}^*L$ for every invertible sheaf $L$ ([[thm-abelian-variety-is-projective]], [[lem-nonaffine-theorem-of-the-cube-for-abelian-variety]]).

[F2] First Chern classes are additive under tensor product and vanish on a trivial line bundle. Smooth schemes have a Chow ring, ring pullbacks and the proper projection formula. Proper pushforward of the fundamental cycle is the function-field degree times the image if dimensions agree, and zero if the image has smaller dimension ([[def-intersection-with-a-cartier-divisor-and-first-chern-class]], [[thm-intersection-product-and-chow-ring-of-a-smooth-scheme]], [[lem-proper-pushforward-of-cycles-well-defined]]).

[F3] A hyperplane not containing an integral positive-dimensional projective variety meets it nontrivially and lowers every component dimension by one ([[lem-projective-hypersurface-dimension-drop]]).

[F4] Multiplication by a nonzero integer on a $g$-dimensional abelian variety is finite faithfully flat of degree $n^{2g}$ ([[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]]).

## Proof

1.1 Choose a very ample line bundle $L$ using [F1], and set $D=\deg(c_1(L)^g\cap[A])$. This is a positive integer. Indeed, in its projective embedding choose a hyperplane avoiding the finitely many components of each successive intersection cycle. Such a hyperplane exists because the algebraically closed field is infinite and a finite union of proper linear subspaces of its finite-dimensional space of linear forms is proper. The Cartier-cycle rule in [F2] produces an effective cycle with positive multiplicities at every cut; [F3] keeps it nonempty and lowers its pure dimension by one. After $g$ cuts it is a nonempty effective zero-cycle, whose degree is a positive integer. The choice of hyperplanes does not change its Chow class by [F2]. [A1, F1, F2, F3, given, choose, algebra]

1.2 For $n\in\mathbb Z^r$ write $f_n=\sum_i n_i f_i$ and $q(n)=c_1(f_n^*L)\in A^1(A)$. The pullback by the zero homomorphism is a trivial line bundle, so $q(0)=0$. Pull [F1]'s cube identity back along $(f_n,f_a,f_b):A\to A^3$ and use [F2]. It gives $q(n+a+b)+q(n)+q(a)+q(b)=q(n+a)+q(n+b)+q(a+b)$. Hence $B(a,b)=q(a+b)-q(a)-q(b)$ is symmetric and additive in each variable: the displayed identity gives $B(n+a,b)=B(n,b)+B(a,b)$. Iterating this identity along the standard coordinate vectors $e_i$, forward and backward for positive and negative integers, yields
$$q(n)=\sum_i n_iq(e_i)+\sum_i\binom{n_i}{2}B(e_i,e_i)+\sum_{i<j}n_in_jB(e_i,e_j).$$
All coefficients lie in the abelian group $A^1(A)$; in particular this formula is valid after tensoring it with $\mathbb Q$. [F1, F2, given, algebra]

2.1 Replace each integer $n_i$ in step 1.2 by a variable $X_i$. Taking the $g$-th Chow power, its zero-cycle degree, and dividing by the positive integer $D$ gives a rational polynomial $P(X)$ of total degree at most $2g$. For every integral tuple $n$, the projection formula [F2] gives $\deg(c_1(f_n^*L)^g\cap[A])=\delta(f_n)D$: a dominant map has pushforward $\delta(f_n)[A]$, while a nondominant one has zero pushforward in dimension $g$. Thus $P(n)=\delta(f_n)$ for every integral tuple, including $n=0$. [F2, step 1.1, step 1.2, algebra]

3.1 For every nonzero integer $s$ and every endomorphism $f$, [F4] and the tower law of function-field degrees give $\delta(sf)=s^{2g}\delta(f)$ when $f$ is dominant. Both sides are zero when it is not dominant, since composition with a finite map preserves the image dimension. It holds also for $s=0$ because $g\ge1$ and $\delta(0)=0$. Therefore $P(sn)=s^{2g}P(n)$ for every integral $s,n$. A polynomial over $\mathbb Q$ vanishing on every integer tuple is zero, by induction on its number of variables and the fact that a nonzero one-variable polynomial has finitely many roots. Apply this to $P(sX)-s^{2g}P(X)$ as a polynomial in $s,X$. It follows that every nonzero homogeneous component of $P$ has degree $2g$. [F4, step 2.1, algebra]

4.1 If $df=0$ for a positive integer $d$, then $f\circ[d]=[d]\circ f=0$, and the faithfully flat surjectivity of $[d]$ in [F4] implies $f=0$. Thus $\operatorname{End}(A)$ is torsion-free and embeds in its rationalization. The scaling rule in step 3.1 shows that $\delta(f/d)$ is independent of the representation: if $f/d=h/e$, then $ef=dh$, and $e^{2g}\delta(f)=d^{2g}\delta(h)$. For a rational tuple $t$, clear one positive common denominator $d$ and use the homogeneity of step 3.1 to get $\delta(\sum_i t_i f_i)=d^{-2g}P(dt)=P(t)$. Ordinary real polynomials are continuous. An isogeny is dominant, and its finite function-field degree is a positive integer by definition. The empty list gives the zero polynomial, and the zero endomorphism has value zero. This proves every clause. [F4, step 3.1, algebra] ∎

## Source-reading boundary

The cached Milne AV notes were read at Proposition10.13 and its proof, printed47–48, and at Theorem10.15/Lemma10.16, printed49–50. The local proof uses the existing cube and Chow interfaces and an explicit multivariate finite-difference formula. Neither Milne's characteristic-polynomial theorem nor any Tate-isogeny theorem or Neron–Severi finiteness assertion is imported.
