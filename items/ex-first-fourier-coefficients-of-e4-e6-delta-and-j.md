---
id: ex-first-fourier-coefficients-of-e4-e6-delta-and-j
kind: example
title: "The first Fourier coefficients of E4, E6, Delta and j"
status: draft
origin: pipeline
deps:
  - thm-eisenstein-series-are-modular-forms
  - def-divisor-power-sums-sigma-k
  - lem-discriminant-is-a-nonvanishing-cusp-form
  - lem-jacobi-product-formula-for-the-discriminant
  - def-modular-discriminant-and-j-invariant
  - def-bernoulli-numbers-by-their-generating-function
  - lem-binomial-theorem-over-complex-numbers
  - lem-cauchy-product-of-absolutely-convergent-complex-series
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Proposition 5 and the E4,E6 examples, printed pp. 16–17; the j expansion and equation (24), p. 22."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Theorem 4.22, printed pp. 57-58: the expansions of Delta and j."
---

## Example

With $q=e^{2\pi i\tau}$,
$$E_4=1+240q+2160q^2+6720q^3+\cdots,\qquad E_6=1-504q-16632q^2-122976q^3+\cdots,$$
$$\Delta=q-24q^2+252q^3-1472q^4+\cdots,\qquad j=q^{-1}+744+196884q+21493760q^2+\cdots.$$
The coefficients are read from $E_k=1-\frac{2k}{B_k}\sum\sigma_{k-1}(n)q^n$: $240=-8/B_4$, $-504=-12/B_6$, and the higher coefficients from $\sigma_3(n),\sigma_5(n)$ and the binomial expansions.

## Facts & Assumptions

**Given:** The expansion $E_k=1-\frac{2k}{B_k}\sum_{n\ge1}\sigma_{k-1}(n)q^n$ of [[thm-eisenstein-series-are-modular-forms]] with $B_4=-1/30$, $B_6=1/42$ ([[def-bernoulli-numbers-by-their-generating-function]]), the divisor sums of [[def-divisor-power-sums-sigma-k]], and $\Delta=q\prod(1-q^n)^{24}=(E_4^3-E_6^2)/1728$, $j=E_4^3/\Delta$ ([[lem-jacobi-product-formula-for-the-discriminant]], [[lem-discriminant-is-a-nonvanishing-cusp-form]], [[def-modular-discriminant-and-j-invariant]]).

[F1] $\sigma_1(1)=1$ and for prime powers $\sigma_k(p^e)=1+p^k+\cdots+p^{ke}$; in particular $\sigma_3(1)=1$, $\sigma_3(2)=9$, $\sigma_3(3)=28$, $\sigma_3(4)=73$ and $\sigma_5(1)=1$, $\sigma_5(2)=33$, $\sigma_5(3)=244$ ([[def-divisor-power-sums-sigma-k]]).

[F2] Multiplication of modular forms adds weights and multiplies $q$-expansions as absolutely convergent Cauchy products; the product formula for $\Delta$ is available ([[thm-eisenstein-series-are-modular-forms]], [[lem-jacobi-product-formula-for-the-discriminant]]).

## Verification

1.1 By [F1] and the Bernoulli values, $240=-\frac{8}{-1/30}$ and $-504=-\frac{12}{1/42}$, so $E_4=1+240q+240\cdot9q^2+240\cdot28q^3+\cdots=1+240q+2160q^2+6720q^3+\cdots$ and $E_6=1-504q-504\cdot33q^2-504\cdot244q^3+\cdots=1-504q-16632q^2-122976q^3+\cdots$. [F1, given, algebra]

2.1 Squaring and cubing these expansions by the binomial theorem [F2], $E_4^3=1+720q+179280q^2+16954560q^3+\cdots$ and $E_6^2=1-1008q+220752q^2+16519104q^3+\cdots$; hence $\Delta=(E_4^3-E_6^2)/1728=q-24q^2+252q^3+O(q^4)$. The product formula gives $\Delta=q\prod(1-q^n)^{24}=q(1-24q+252q^2-1472q^3+\cdots)=q-24q^2+252q^3-1472q^4+\cdots$, in agreement through $q^3$ and supplying the fourth coefficient. [F2, step 1.1, given, algebra]

3.1 Dividing $E_4^3$ by $\Delta=qP$ with $P=1-24q+252q^2-1472q^3+O(q^4)$, whose inverse begins $P^{-1}=1+24q+324q^2+3200q^3+O(q^4)$, gives $qj=E_4^3P^{-1}=1+744q+196884q^2+21493760q^3+O(q^4)$, that is $j=q^{-1}+744+196884q+21493760q^2+\cdots$. [F2, step 2.1, given, algebra] ∎
