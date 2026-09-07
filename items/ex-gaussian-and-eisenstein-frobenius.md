---
id: ex-gaussian-and-eisenstein-frobenius
title: "Gaussian and eisenstein frobenius"
kind: example
status: published
origin: pipeline
deps: [thm-frobenius-cycle-type-and-prime-splitting, ex-decomposition-inertia-in-a-quadratic-field, thm-multiplicative-group-of-a-finite-field-is-cyclic, thm-ring-of-integers-of-a-quadratic-field]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chapter 8, Examples 8.18\u20138.19, pp.142\u2013143"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
proof_strategy: direct argument
---

## Example

In $\mathbb Q(i)$, an odd prime p splits if $p\equiv1\pmod4$ and is inert if $p\equiv3\pmod4$; arithmetic Frobenius sends $i\mapsto i^p$. The prime 2 ramifies. In $\mathbb Q(\zeta_3)$, a prime $p\ne3$ splits if $p\equiv1\pmod3$ and is inert if $p\equiv2\pmod3$; arithmetic Frobenius sends $\zeta_3\mapsto\zeta_3^p$. The prime 3 ramifies.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-frobenius-cycle-type-and-prime-splitting]]: Let $F\in\mathbb Z[T]$ be monic separable with splitting field L, and let p be a rational prime not dividing $\operatorname{Disc}(F)$. Then p is unramified in L and $\bar F\in\mathbb F_p[T]$ is squarefree. The degrees of its monic irreducible factors, with each distinct factor counted once, are exactly the cycle lengths of arithmetic Frobenius on the roots of F.

[F2] [[ex-decomposition-inertia-in-a-quadratic-field]]: In a quadratic Galois extension of number fields, let $G=C_2$. For any nonzero base prime the three possibilities are: split: $(e,f,g)=(1,1,2)$, $D=I=1$, Frobenius identity; inert: $(1,2,1)$, $D=C_2$, $I=1$, Frobenius the nonidentity element; ramified: $(2,1,1)$, $D=I=C_2$, arithmetic Frobenius coset identity in D/I.

[F3] [[thm-multiplicative-group-of-a-finite-field-is-cyclic]]: The multiplicative group $F^\times=F\setminus\{0\}$ of every finite field $F$ is cyclic.

[F4] [[thm-ring-of-integers-of-a-quadratic-field]]: For squarefree $d\ne1$, $\mathcal O_{\mathbb Q(\sqrt d)}=\mathbb Z[(1+\sqrt d)/2]$ if $d\equiv1\pmod4$, and $\mathbb Z[\sqrt d]$ otherwise.

## Verification

1.1 The quadratic integral-basis theorem gives $\mathcal O_{\mathbb Q(i)}=\mathbb Z[i]$ and $\mathcal O_{\mathbb Q(\zeta_3)}=\mathbb Z[\zeta_3]$, since $\zeta_3=(-1+\sqrt{-3})/2$. The polynomials are $T^2+1$ and $T^2+T+1$, with discriminants -4 and -3. At the stated nonexceptional primes they have good reduction. [F4]

2.1 For odd p, roots of $T^2+1$ are elements of order four in $\mathbb F_p^\times$. Cyclicity says they exist exactly when $4\mid p-1$. For $p\ne3$, roots of $T^2+T+1$ are elements of order three, since $(T-1)(T^2+T+1)=T^3-1$ and T=1 is not a root unless p=3. Cyclicity gives roots exactly when $3\mid p-1$. A quadratic without a root is irreducible. Thus the cycle types are two fixed points or a transposition, giving split or inert cases in the quadratic table. [F1, F2, F3, step 1.1]

2.2 In good reduction the two roots are distinct. The Frobenius congruence sends each chosen root to its p-th power modulo P; that power is itself a root, so injectivity on the two root reductions forces equality in the number field. This gives both claimed formulas. [F1, step 1.1]

3.1 In the Gaussian ring, $(1+i)^2=2i$ and $\mathbb Z[i]/(1+i)=\mathbb F_2$ by substituting i=-1. Thus (1+i) is prime and $(2)=(1+i)^2$ as ideals. In the Eisenstein ring, $(1-\zeta_3)^2=-3\zeta_3$ and the quotient by $(1-\zeta_3)$ is $\mathbb F_3$ by substituting $\zeta_3=1$. Hence $(3)=(1-\zeta_3)^2$ as ideals. Both exceptional primes ramify. [step 1.1, algebra] ∎
