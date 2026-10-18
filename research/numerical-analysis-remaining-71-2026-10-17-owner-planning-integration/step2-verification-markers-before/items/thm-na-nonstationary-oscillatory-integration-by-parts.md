---
id: thm-na-nonstationary-oscillatory-integration-by-parts
kind: theorem
title: Repeated integration by parts for a nonstationary oscillatory integral
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-na-finite-interval-oscillatory-integral
  - lem-na-complex-phase-derivative
  - thm-integration-by-parts
  - thm-algebra-of-derivatives
proof_strategy: direct
axiom_use: "No choice axiom is used; the argument uses explicit finite formulas and the cited calculus results."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §2.3(i)"
      url: "https://dlmf.nist.gov/2.3"
    - title: "D. Levin, Procedures for computing one- and two-dimensional integrals of functions with rapid irregular oscillations, §3"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/OSCINT/LEV82.pdf"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature: The story so far, §2"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
---

## Statement

Let $a<b$, $r\ge1$, $\omega\in\mathbb R\setminus\{0\}$, $g\in C^{r+1}[a,b]$ be real-valued with $|g'|\ge c>0$, and $h\in C^r[a,b]$ be complex-valued. With $T_g h=(h/g')'$ and $T_g^0h=h$ as in [[def-na-finite-interval-oscillatory-integral]], one has
$$I_\omega(h,g;[a,b])=\sum_{j=0}^{r-1}\frac{(-1)^j}{(i\omega)^{j+1}}\left[\frac{T_g^jh(x)}{g'(x)}e^{i\omega g(x)}\right]_a^b+\frac{(-1)^r}{(i\omega)^r}I_\omega(T_g^rh,g;[a,b]).$$
Consequently,
$$\left|I_\omega(h,g;[a,b])-\sum_{j=0}^{r-1}\frac{(-1)^j}{(i\omega)^{j+1}}\left[\frac{T_g^jh(x)}{g'(x)}e^{i\omega g(x)}\right]_a^b\right|\le\frac{b-a}{|\omega|^r}\|T_g^rh\|_\infty.$$
For fixed $h,g,r$, the remainder is $O(|\omega|^{-r})$; the constant is the displayed derivative norm, not a frequency-uniform assertion about varying $h$ or $g$.

## Facts & Assumptions

**Given:** $a<b$, the hypotheses in the Statement, and the componentwise complex Riemann integral from [[def-na-finite-interval-oscillatory-integral]].

[F1] [[lem-na-complex-phase-derivative]]: $(e^{i\omega g})'=i\omega g'e^{i\omega g}$.

[F2] [[thm-integration-by-parts]]: for real $C^1$ functions $u,v$ on a closed interval, $\int u v'=[uv]-\int u'v$. Applying this to real and imaginary components gives the componentwise complex identity.

[F3] [[thm-algebra-of-derivatives]]: sums, products, and quotients with nonzero denominator preserve differentiability and obey the stated derivative rules.

## Proof

1.1 Since $g'$ is continuous and nowhere zero, [F3] makes $h/g'$ differentiable with derivative $T_gh$. Apply [F2] componentwise with $u=h/g'$ and $v=e^{i\omega g}$. By [F1], $v'=i\omega g'v$, so rearranging gives $I_\omega(h,g)=[(h/g')v]_a^b/(i\omega)-I_\omega(T_gh,g)/(i\omega)$. [given, F1, F2, F3, algebra]

2.1 Apply step 1.1 successively to $h,T_gh,\ldots,T_g^{r-1}h$. At each application the final integral receives one further factor $-1/(i\omega)$ and the next endpoint term receives the matching alternating sign, yielding the displayed finite sum and remainder. Since $|e^{i\omega g(x)}|=1$, the remainder modulus is at most $|\omega|^{-r}\int_a^b|T_g^rh(x)|\,dx\le (b-a)|\omega|^{-r}\|T_g^rh\|_\infty$. [given, F1, step 1.1, algebra] ∎
