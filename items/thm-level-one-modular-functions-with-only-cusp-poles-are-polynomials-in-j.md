---
id: thm-level-one-modular-functions-with-only-cusp-poles-are-polynomials-in-j
kind: theorem
title: "Level-one modular functions with only a cusp pole are polynomials in j"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-modular-discriminant-and-j-invariant
  - thm-standard-fundamental-domain-for-the-modular-group
  - thm-local-maximum-modulus-principle
  - def-modular-group-action-on-the-upper-half-plane
  - thm-compactness-under-continuous-maps
  - thm-extreme-value-metric
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Lemma 11.10 and Theorem 11.18(i), printed pp. 231–232"
verification: {}
---

## Statement

Let $f$ be an $SL_2(\mathbb Z)$-invariant function holomorphic on the upper
half-plane and meromorphic at the cusp, with no poles except possibly at the
cusp. Then there is a unique polynomial $P(X)\in\mathbb C[X]$ such that
$f(\tau)=P(j(\tau))$.

## Statement references

[[def-modular-discriminant-and-j-invariant|The function $j$ is invariant, holomorphic on the upper half-plane, and has a simple pole at the cusp.]]

[Cox, Lemma 11.10](https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf)

## Facts & Assumptions

**Given:** An invariant function $f$ holomorphic on $\mathfrak H$ with a pole of finite order only at the cusp.

[F1] [[def-modular-discriminant-and-j-invariant]]: $j=q^{-1}+744+O(q)$ and is holomorphic on $\mathfrak H$.

[F2] [[thm-standard-fundamental-domain-for-the-modular-group]]: every orbit has a representative in the closed standard fundamental region $|\Re\tau|\le1/2$, $|\tau|\ge1$; its only noncompact end is the cusp, with local parameter $q=e^{2\pi i\tau}$.

[F3] [[thm-local-maximum-modulus-principle]]: a local maximum of the modulus of a holomorphic function on a connected complex domain forces the function to be constant.

[F4] [[thm-compactness-under-continuous-maps]] and [[thm-extreme-value-metric]]: a continuous image of a compact space is compact, and the modulus on a compact subset of $\mathbb C$ attains its maximum.

## Proof

1.1 Let the pole order of $f$ at the cusp be $r$. Since $j=q^{-1}+O(1)$, the function $j^r$ has leading term $q^{-r}$ with coefficient $1$. Subtract the leading Laurent coefficient of $f$ times $j^r$; this cancels the order-$r$ pole and leaves an invariant function with pole order at most $r-1$. Repeating for orders $r,r-1,\ldots,1$ produces constants $c_0,\ldots,c_r$ such that $g=f-\sum_{s=1}^r c_sj^s$ has no pole at the cusp. [F1, given, algebra]

2.1 The function $g$ is invariant and holomorphic on $\mathfrak H$ and at the cusp. At an elliptic point of stabilizer order $e$, its Taylor series in a local coordinate has only powers divisible by $e$, since invariance under the stabilizer rotation fixes it; hence it descends holomorphically in the quotient coordinate. The standard region in [F2] truncated at height $T$ is compact, and its remaining tail maps into the cusp disk $|q|<e^{-2\pi T}$; adjoining $q=0$ therefore makes the quotient compact and connected. By [F4], the compact image of that quotient under $g$ has a point of maximum modulus. In a local chart at a maximizing point, [F3] makes $g$ constant on that chart and then on the connected quotient by the identity theorem. Thus $g$ is constant, so $f=P(j)$. [F2, F3, F4, step 1.1, algebra]

3.1 If $P(j)=Q(j)$ for polynomials $P,Q$ and $P-Q$ has degree $d>0$, then $(P-Q)(j)$ has a pole of order $d$ at the cusp because $j=q^{-1}+O(1)$; it cannot vanish identically. Hence $P=Q$, proving uniqueness. [F1, step 2.1, algebra] ∎
