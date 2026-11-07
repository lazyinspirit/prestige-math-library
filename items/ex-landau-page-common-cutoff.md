---
id: ex-landau-page-common-cutoff
kind: example
title: One common cutoff gives a unique exceptional character across conductors
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-primitive-dirichlet-character-and-conductor
  - def-induced-dirichlet-character
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - thm-landau-page-exceptional-zero-uniqueness
  - thm-natural-logarithm-laws
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Philippe Michel, Analytic Number Theory and Families of L-functions, Park City lecture notes
      url: https://www.epfl.ch/labs/tan/wp-content/uploads/2018/10/Parkcitylectures.pdf
      locator: Landau/Page theorem and proof, printed p. 21.

---




## Example

Let $c>0$ be the constant in the Landau–Page uniqueness theorem, put $c_0=\min\{c,\tfrac12\log3\}$, and take a conductor $q=3$ inside the common cutoff $Q=8$. The number
$$\beta_0=1-\frac{3c_0}{5\log3}$$
lies above the individual cutoff $1-c_0/\log3$ for conductor $3$, but below the common cutoff $1-c_0/\log8$ for all conductors at most $8$. This compares the cutoff intervals only; it does not assert that any Dirichlet $L$-function has a zero at $\beta_0$. The theorem says that at most one primitive real character of conductor at most $8$ can have a real zero $\beta\in(0,1)$ above the common cutoff.

## Example references

[[thm-landau-page-exceptional-zero-uniqueness|Landau–Page common-cutoff uniqueness theorem]]

## Facts & Assumptions

**Given:** The absolute cutoff constant $c$, and the real numbers $q=3$ and $Q=8$.

[F1] There is a constant $c>0$ such that for every real $Q\ge3$, at most one primitive real nonprincipal character of conductor $q\le Q$ has a real zero $\beta\in(0,1)$ with $\beta>1-c/\log Q$ ([[thm-landau-page-exceptional-zero-uniqueness]]).

[F2] The natural logarithm is strictly increasing on $(0,\infty)$ ([[thm-natural-logarithm-laws]]).

[F3] For real $0<s<1$, $\zeta(s)=s/(s-1)-s\int_1^\infty\{u\}u^{-s-1}du<0$, since the first term is negative and the integral is nonnegative ([[thm-riemann-zeta-continuation-to-the-right-half-plane]]).

[F4] A principal character at any modulus is induced from the character modulo $1$ by the defining unit agreement ([[def-primitive-dirichlet-character-and-conductor]], [[def-induced-dirichlet-character]]); hence the only primitive principal character has conductor $1$.

## Verification

**Given:** The values and theorem in [F1]–[F2].

1.1 Since $0<c_0\le\tfrac12\log3$, the decrement $3c_0/(5\log3)$ is positive and at most $3/10$, so $0<\beta_0<1$. Also $3/5<1$, hence $\beta_0>1-c_0/\log3$. [given, F2, algebra]

2.1 We have $8^3=512>243=3^5$, so [F2] gives $3\log8>5\log3$ and therefore $3/(5\log3)>1/\log8$. Thus $\beta_0<1-c_0/\log8$. [F2, step 1.1, algebra]

3.1 Steps 1.1–2.1 show that a hypothetical zero at $\beta_0$ could pass the conductor-$3$ cutoff while failing the common $Q=8$ cutoff. Independently, since $c_0\le c$, the strip $\beta>1-c_0/\log8$ is contained in the strip in [F1]. By [F4], the only primitive principal character has conductor $1$ and $L(s)=\zeta(s)$, which has no zero in $(0,1)$ by [F3]. Applying [F1] with $Q=8$ therefore proves that no two distinct primitive real characters of conductor at most $8$ can both have zeros above that common cutoff. [F1, F3, F4, step 1.1, step 2.1, given, algebra] ∎

