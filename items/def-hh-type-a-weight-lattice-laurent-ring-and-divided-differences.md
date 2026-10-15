---
id: def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences
kind: definition
title: "The type-A weight lattice, Laurent ring, and divided differences"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [lem-hh-finite-polynomial-and-localization-constructions, thm-hh-parabolic-minimal-representatives-and-length-additivity, lem-int-cancellation, lem-nat-embeds-int, def-zero-divisor-and-integral-domain]
justified_by: [lem-hh-demazure-lusztig-operators-satisfy-affine-relations]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander A. Kirillov, Jr., Lectures on the affine Hecke algebras and Macdonald conjectures (Harvard lectures, 1994; arXiv:math/9501219v1)"
      url: "https://arxiv.org/pdf/math/9501219"
      locator: "Lecture 3, §§3.10–3.13, PDF pp. 19–20: the weight-lattice group algebra and the Bernstein–Lusztig divided-difference relation."
    - title: "I. G. Macdonald, Affine Hecke algebras and orthogonal polynomials, Séminaire Bourbaki 797, Astérisque 237 (1996), pp. 189–207"
      url: "https://smf.emath.fr/system/files/2017-08/smf_ast_237_189-207.pdf"
      locator: "§4.2, PDF pp. 8–9: the Bernstein–Lusztig relation and its Laurent-polynomial divisibility."
---

## Definition

Let $n\ge2$, let $R_0:=\mathbb Z[Q,Q^{-1}]$, and put
$$
\Lambda:=\mathbb Z^n,\qquad A:=R_0[X_1^{\pm1},\ldots,X_n^{\pm1}].
$$
Write $X^\lambda:=X_1^{\lambda_1}\cdots X_n^{\lambda_n}$ for $\lambda\in\Lambda$. The symmetric group $S_n$ acts on $\Lambda$ and $A$ by permuting coordinates and variables; its adjacent transposition $s_i=(i\ i+1)$, for $1\le i<n$, interchanges $X_i$ and $X_{i+1}$. This is the type-$A_{n-1}$ Coxeter identification of [[thm-hh-parabolic-minimal-representatives-and-length-additivity]].

For $1\le i<n$ and $f\in A$, define
$$
D_i(f):=\frac{f-s_i(f)}{1-X_i/X_{i+1}}.
$$
The quotient is taken in the fraction field of $A$; the verification below proves it is the unique element of $A$ with this quotient. The operators obey the twisted Leibniz rule
$$
D_i(fg)=D_i(f)g+s_i(f)D_i(g).
$$

## Facts & Assumptions

**Given:** An integer $n\ge2$, the Laurent polynomial ring $A$ over $R_0=\mathbb Z[Q,Q^{-1}]$, and the type-$A_{n-1}$ identification of its adjacent generators with $S_n$.

[F1] [[lem-hh-finite-polynomial-and-localization-constructions]]: the Laurent ring over a commutative coefficient ring is free on its Laurent monomials; when the coefficient ring is a domain, the Laurent ring is a domain and has a fraction field in which it embeds.

[F2] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]]: for the type-$A_{n-1}$ Coxeter matrix, $s_i\mapsto(i\ i+1)$ identifies its group with $S_n$.

[F3] [[lem-int-cancellation]]: the product of two nonzero integers is nonzero.

[F4] [[lem-nat-embeds-int]]: the natural numbers embed injectively in $\mathbb Z$, so $0\ne1$ in $\mathbb Z$.

[F5] [[def-zero-divisor-and-integral-domain]]: a commutative ring with $1\ne0$ and no zero divisors is an integral domain.

## Proof

**Given:** The data of the Definition.

1.1 By [F3] and [F4], the integers have no zero divisors and $0\ne1$; thus $\mathbb Z$ is a domain by [F5]. Applying [F1] to the Laurent variable $Q$ gives that $R_0=\mathbb Z[Q,Q^{-1}]$ is a domain, and applying it again gives that $A$ is a domain with $R_0$-basis $(X^\lambda)_{\lambda\in\mathbb Z^n}$ and embeds in its fraction field. By [F2], the adjacent transpositions generate the stated $S_n$ action, which permutes the Laurent monomial basis. [given, F1, F2, F3, F4, F5]

1.2 Fix $i$ and a Laurent monomial $X^\lambda$. Put $a=\lambda_i$, $b=\lambda_{i+1}$, and $z=X_i/X_{i+1}$. Then $X^\lambda-s_i(X^\lambda)=X^{\lambda'}(z^a-z^b)$, where $\lambda'$ agrees with $\lambda$ off coordinates $i,i+1$ and has exponents $0,a+b$ at coordinates $i,i+1$, respectively. For integers $a,b$, the quotient $(z^a-z^b)/(1-z)$ is a Laurent polynomial: it is $-\sum_{k=0}^{a-b-1}z^{b+k}$ if $a>b$, zero if $a=b$, and $\sum_{k=0}^{b-a-1}z^{a+k}$ if $a<b$. Each formula follows by multiplying the finite geometric sum by $1-z$. Thus $X^\lambda-s_i(X^\lambda)$ is divisible in $A$ by $1-z$, including when either exponent is negative. [given, F1, algebra]

2.1 Every $f\in A$ is a unique finite $R_0$-linear combination of the monomials by [F1]. Linearity of $f\mapsto f-s_i(f)$ and the monomial calculation in step 1.2 give a quotient in $A$ for every $f$. Since $1-z\ne0$ in the domain $A$, that quotient is unique. This defines $D_i:A\to A$ as stated. [F1, step 1.2, algebra]

3.1 For $f,g\in A$, the identity $fg-s_i(fg)=(f-s_i(f))g+s_i(f)(g-s_i(g))$ holds because $s_i$ is an algebra automorphism. Dividing by the nonzero element $1-z$ in the fraction field and using the definition of $D_i$ gives $D_i(fg)=D_i(f)g+s_i(f)D_i(g)$. [step 2.1, algebra]

4.1 The construction of $D_i$ and its Leibniz identity use only the monomial basis, finite geometric sums, and cancellation in the integral domain $A$; no choice principle is used. [F1, step 1.2, step 2.1, step 3.1] ∎

