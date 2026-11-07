---
id: lem-nagata-strong-transcendence-survives-integral-scalars
kind: lemma
title: Strong transcendence survives integral scalar extension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-strongly-transcendental-element
  - thm-transitivity-of-integrality
  - lem-zmt-polynomial-relation-leading-coefficient-is-integral
  - def-matrix-minors-cofactors-and-adjugate
  - thm-laplace-cofactor-expansion
  - def-multiplicative-subset-and-localisation
proof_strategy: direct
axiom_use: No choice principle is assumed. A finite free monic quotient and its multiplication determinant replace prime or splitting-field arguments.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Alonso M. E., Coquand T., Lombardi H., Revisiting Zariski Main Theorem from a constructive point of view
      url: https://arxiv.org/abs/1602.00597
      locator: January2016 corrected version, Lemmas2.9–2.11, pp.6–7, read in full. The resultant step is reconstructed below as an explicit multiplication determinant.
---

## Statement

Let $D$ be a reduced commutative $C$-algebra and $x\in D$ strongly transcendental over $C$: for every $v\in D$ and $a_i\in C$, an equality $v\sum_i a_ix^i=0$ implies $va_i=0$ for every $i$, where coefficients denote their images in $D$.

If $u\in D$ and both $u$ and $ux$ are integral over $C$, then $u=0$. If $C_1\subseteq D$ is a subring integral over the image of $C$, then $x$ is strongly transcendental over $C_1$. Strong transcendence also persists in every localization $S^{-1}D$, and in $D_a$ with scalars extended from $C$ to $C_a$ for $a\in C$. No Noetherian hypothesis is required; zero rings and zero or unit elements are included.

## Statement references

[Alonso–Coquand–Lombardi, Lemmas2.9–2.11, pp.6–7](https://arxiv.org/abs/1602.00597)

## Facts & Assumptions

**Given:** The reduced algebra and strongly transcendental element, and the integral element or integral subring when asserting the corresponding conclusion.

[F1] Strong transcendence is the annihilator-sensitive polynomial condition in the Statement. [[def-strongly-transcendental-element]]

[F2] Integral ring maps compose; if $a_0z^k+a_1z^{k-1}+\cdots+a_k=0$, then $a_0z$ is integral over the coefficient ring, by multiplying by $a_0^{k-1}$. [[thm-transitivity-of-integrality]] [[lem-zmt-polynomial-relation-leading-coefficient-is-integral]]

[F3] The adjugate identity $M\operatorname{adj}(M)=\det(M)\mathbf1$ holds over any commutative ring. [[def-matrix-minors-cofactors-and-adjugate]] [[thm-laplace-cofactor-expansion]]

[F4] A fraction is zero in a localization precisely when a denominator multiplier kills its numerator. [[def-multiplicative-subset-and-localisation]]

## Proof

1.1 First prove the localization assertions. If a fraction $v/s$ annihilates a polynomial in $x$ with coefficients in $C$, then some $t\in S$ kills the numerator relation in $D$ by [F4]. Applying [F1] to the multiplier $tv$ gives $tva_i=0$ for every coefficient, which says that $v/s$ annihilates each coefficient in $S^{-1}D$. For coefficients in $C_a$, clear their finitely many powers of $a$ and use the same argument in $D_a$. A localization of reduced $D$ is reduced: if $(d/s)^n=0$, some $t\in S$ kills $d^n$, so $(td)^n=0$, hence $td=0$ and $d/s=0$. These arguments allow denominators containing zero and include the zero localization. [F1, F4, given, algebra]

1.2 Suppose $u$ and $ux$ are integral over $C$. Choose monic equations $P(u)=0$ and $Q(ux)=0$, with degrees $m,\ell\geq1$, and write $Q(T)=T^\ell+c_1T^{\ell-1}+\cdots+c_\ell$. We show that $c_\ell=0$ in $D$ by a finite determinant calculation. The algebra $E=C[X,T]/(P(T))$ is free over $C[X]$ on $1,T,\ldots,T^{m-1}$, by division by the monic polynomial $P$. Let $M(X)$ be the matrix of multiplication by $Q(TX)$, and put $H(X)=\det M(X)\in C[X]$. At $X=0$ this matrix is $c_\ell\mathbf1$, so $H(0)=c_\ell^m$. The adjugate identity [F3], applied to the coordinate vector of $1$, gives $H(X)=Q(TX)V(X,T)$ in $E$ for an explicitly specified $V$, namely the element with coefficient vector $\operatorname{adj}(M(X))e_1$. Evaluation $X\mapsto x$, $T\mapsto u$ is well-defined because $P(u)=0$, and gives $H(x)=Q(ux)V(x,u)=0$. Strong transcendence with multiplier $1$ forces each coefficient of $H$ to vanish in $D$. Thus $c_\ell^m=0$, and reducedness gives $c_\ell=0$ in $D$. [F1, F3, construct, algebra]

2.1 In the reduced localization $D'=D[1/(ux)]$, strong transcendence persists by step 1.1. Since $c_\ell=0$, the equation $Q(ux)=0$ can be divided by the invertible $ux$ there to give a monic equation of degree $\ell-1$ for $ux$. Repeat step 1.2 with that equation and the original monic equation for $u$. Its last coefficient vanishes in $D'$, and division by $ux$ lowers the degree again. After finitely many repetitions a monic equation of degree zero says $1=0$ in $D'$. Consequently some power $(ux)^n$ is zero in $D$ by [F4]; reducedness yields $ux=0$. Applying [F1] to the relation $u\cdot x=0$ then gives $u=0$. When $\ell=1$ the first division already gives $1=0$, so the same conclusion applies. [F1, F4, step 1.1, step 1.2, algebra]

3.1 Let $C_1\subseteq D$ be integral over the image of $C$ and suppose $v(c_0x^k+c_1x^{k-1}+\cdots+c_k)=0$, with $c_i\in C_1$. In $D_v$ the polynomial relation holds without the multiplier. Its leading coefficient $c_0$ is integral over $C$; moreover $c_0x$ is integral over $C_1$ by the explicit leading-coefficient equation in [F2], and hence over $C$ by transitivity. Steps 1.1 and 2.1 applied in $D_v$ therefore give $c_0=0$ there. Remove its term and repeat finitely to obtain $c_i=0$ in $D_v$ for every $i$; a constant relation is already zero. By [F4] some power of $v$ kills each $c_i$ in $D$. Then $(vc_i)^N=0$ for a sufficiently large positive $N$, and reducedness yields $vc_i=0$. This is the required strong transcendence over $C_1$. If $v=0$ this conclusion is immediate; zero rings, zero $u$, and unit denominators were all permitted in the preceding computations. [F1, F2, F4, step 1.1, step 2.1, algebra] ∎
