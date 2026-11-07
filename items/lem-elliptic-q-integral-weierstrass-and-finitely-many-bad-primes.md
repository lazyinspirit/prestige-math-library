---
id: lem-elliptic-q-integral-weierstrass-and-finitely-many-bad-primes
kind: lemma
title: "Integral elliptic Weierstrass equation and finitely many bad primes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-abelian-variety-over-a-field
  - def-weierstrass-model-and-discriminant-invariants
  - cor-canonical-degree-two-g-minus-two
  - cor-rr-exact-high-degree-formula
  - thm-degree-two-g-plus-one-line-bundle-very-ample
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Elliptic Curves"
      url: "https://www.jmilne.org/math/Books/ectext6.pdf"
      locator: "Chapter II §§2 and 5–6, Weierstrass equations and reduction; the Riemann–Roch construction and finite exceptional set are given locally below."
---

## Statement

Assume AC. Every elliptic curve $E/\mathbb Q$ has a pointed isomorphism to a smooth projective Weierstrass cubic $y^2=x^3+Ax+B$ with $A,B\in\mathbb Z$ and nonzero integer discriminant $\Delta=-16(4A^3+27B^2)$. For every prime $p$ this equation is integral over $\mathbb Z_p$, so the set of discriminant valuations of integral Weierstrass equations for $E_{\mathbb Q_p}$ is nonempty and has a least nonnegative integer $\delta_p$. If $p\nmid6\Delta$, this displayed equation has smooth reduction and $\delta_p=0$. Thus only finitely many $\delta_p$ are nonzero, the minimal-discriminant product $\prod_p p^{\delta_p}$ is a positive integer, and any conductor-exponent assignment that is zero at good primes has finite support. No existence of a minimal proper regular model or Ogg conductor formula is asserted.

## Facts & Assumptions

**Given:** AC and an elliptic curve $E/\mathbb Q$ with identity $O$.

[F1] An elliptic curve is a smooth proper geometrically connected one-dimensional group variety with rational identity. [[def-abelian-variety-over-a-field]]

[F2] On a smooth proper genus-$g$ curve the canonical divisor has degree $2g-2$, and a divisor of degree greater than $2g-2$ has $\ell(D)=\deg D+1-g$. A degree at least $2g+1$ line bundle is very ample and its complete linear system gives a closed immersion. [[cor-canonical-degree-two-g-minus-two]] [[cor-rr-exact-high-degree-formula]] [[thm-degree-two-g-plus-one-line-bundle-very-ample]]

[F3] The generalized Weierstrass coefficients, discriminant and notion of minimal integral equation are as in the cited definition. [[def-weierstrass-model-and-discriminant-invariants]]

[A1] AC is inherited from [F1] and [F2]. [[def-axiom-of-choice]]

## Proof

1.1 Translation of a nonzero cotangent vector at $O$ gives a nonzero invariant regular differential on the smooth group curve $E$, and translation makes it nowhere zero. Its canonical divisor is therefore zero, so $2g(E)-2=0$ and $g(E)=1$. Since $O$ is rational, [F2] gives $\ell(nO)=n$ for every $n\ge1$. Pick $x\in L(2O)\setminus L(O)$ and $y\in L(3O)\setminus L(2O)$. Their pole orders at $O$ are exactly $2$ and $3$. A local parameter at the rational point has rational leading coefficients for both functions; rescaling $x,y$ separately makes both leading coefficients $1$. [A1, F1, F2, given, construct, algebra]

2.1 The five functions $1,x,y,x^2,xy$ have distinct pole orders $0,2,3,4,5$, hence are linearly independent. They form a basis of $L(5O)$ by step 1.1. The leading order-six terms of $y^2$ and $x^3$ cancel, so $y^2-x^3\in L(5O)$ and there are $a_1,a_2,a_3,a_4,a_6\in\mathbb Q$ giving $y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6$. The sections $1,x,y$ form a basis of $L(3O)$; by [F2] they embed $E$ as a closed curve in $\mathbb P^2$. The displayed homogeneous cubic contains that image. Completing the square in characteristic zero makes the defining polynomial a monic quadratic in $y$ whose discriminant is a monic cubic in $x$, hence not a square in $\mathbb Q(x)$; the polynomial is irreducible. Its projective cubic is therefore the image of $E$, and is smooth, with $O$ at its unique point at infinity. [A1, F2, step 1.1, construct, algebra]

3.1 Complete the square and shift $x$ by a rational constant to obtain $y'^2=x'^3+A_0x'+B_0$ with $A_0,B_0\in\mathbb Q$. Choose a positive integer $D$ with $D^4A_0,D^6B_0\in\mathbb Z$ and set $x'=D^{-2}x'',\ y'=D^{-3}y''$. The resulting pointed equation has $A=D^4A_0$, $B=D^6B_0$ integral. Its discriminant $\Delta=-16(4A^3+27B^2)$ is nonzero: otherwise the cubic $x^3+Ax+B$ has a multiple root over an algebraic closure, giving a singular affine point of the smooth projective cubic from step 2.1. [F3, step 2.1, construct, algebra]

4.1 The integral equation from step 3.1 remains integral over every $\mathbb Z_p$, and its discriminant valuation is a nonnegative integer. Hence the set of such valuations is nonempty and has a least element $\delta_p$. If $p\nmid6\Delta$, then in characteristic $p$ a singular affine point of $y^2=x^3+Ax+B$ would satisfy $y=0$, $3x^2+A=0$ and $x^3+Ax+B=0$, which forces $4A^3+27B^2=0$; this contradicts $p\nmid\Delta$. The point at infinity is smooth since the derivative of $y^2z-x^3-Axz^2-Bz^3$ with respect to $z$ is nonzero there. The equation is consequently smooth modulo $p$ and has valuation zero, so it is minimal and $\delta_p=0$. Only the finite set of prime divisors of $6\Delta$ can remain, proving the finite product and finite-support assertions. [F3, step 3.1, algebra] ∎
