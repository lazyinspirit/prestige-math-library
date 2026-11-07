---
id: lem-primitive-dirichlet-l-log-argument-bound
kind: lemma
title: "Log-argument bound for a primitive Dirichlet L-function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - cor-gamma-function-has-no-zeros
  - def-completed-dirichlet-l-function
  - def-parity-dirichlet-character
  - def-primitive-dirichlet-character-and-conductor
  - lem-completed-primitive-dirichlet-l-has-order-at-most-one
  - lem-primitive-dirichlet-l-zero-count-in-unit-window
  - thm-dirichlet-l-euler-product
  - thm-dirichlet-l-nonvanishing-line-one
  - thm-dirichlet-l-nonzero-at-one
  - thm-gamma-meromorphic-continuation
  - thm-gamma-weierstrass-product
  - thm-hadamard-factorization-for-finite-order-entire-functions
  - thm-identity-theorem-holomorphic-functions
  - thm-primitive-dirichlet-l-functional-equation
  - thm-zero-exponent-is-bounded-by-entire-order
  - thm-zero-order-factorization-holomorphic-function
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Montgomery and Vaughan, Multiplicative Number Theory I, Chapter 12, Lemmas 12.6 and 12.8"
      url: "https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/16.0_pp_397_418_Explicit_formulae.pdf"
      locator: "Printed pp. 402–403: the local logarithmic-derivative expansion and argument bound."
    - title: "Harold Davenport, Multiplicative Number Theory, 2nd ed."
      url: "https://djvu.online/file/Rh8B8jEVpxFgk"
      locator: "Chapter 19, argument variation and local zero-count estimates for primitive Dirichlet L-functions."
verification: {}
---

## Statement

Let $q>1$, let $\chi$ be a primitive Dirichlet character modulo $q$, and write $\tau=|t|+2$. Continue the argument of $L(\sigma+it,\chi)$ horizontally from $\sigma=2$, where its logarithm is given by the absolutely convergent Euler-product logarithm. At an ordinate $t$ of a zero, use the average of the two one-sided limits. There is an absolute constant $C$ such that, for every real $t$,
$$\left|\arg L\!\left(\frac12+it,\chi\right)\right|\le C\log(q\tau).$$

## Statement references

[[def-primitive-dirichlet-character-and-conductor|Primitive Dirichlet character and conductor]]

[[def-parity-dirichlet-character|Parity of a Dirichlet character]]

[Montgomery and Vaughan, Chapter 12, Lemmas 12.6 and 12.8](https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/16.0_pp_397_418_Explicit_formulae.pdf)

[Davenport, Chapter 19](https://djvu.online/file/Rh8B8jEVpxFgk)

## Facts & Assumptions

**Given:** A primitive character $\chi$ modulo $q>1$, its parity $a$, and $t\in\mathbb R$.

[F1] $\Lambda(s,\chi)$ is entire of order exactly one and equals $(q/\pi)^{(s+a)/2}\Gamma((s+a)/2)L(s,\chi)$. ([[lem-completed-primitive-dirichlet-l-has-order-at-most-one]], [[def-completed-dirichlet-l-function]])

[F2] Hadamard factorization gives the genus-one canonical product for an entire function of order one; the exponent of its zero sequence is at most one, so $\sum_\rho|\rho|^{-2}<\infty$ and termwise differentiation gives $\Lambda'/\Lambda(s,\chi)=B+\sum_\rho(1/(s-\rho)+1/\rho)$ locally uniformly off zeros. ([[thm-hadamard-factorization-for-finite-order-entire-functions]], [[thm-zero-exponent-is-bounded-by-entire-order]])

[F3] For each real $u$, the number of zeros with $1/2\le\Re\rho\le1$ and $|\Im\rho-u|\le1$, counted with multiplicity, is at most $C_0\log(q(|u|+3))$. ([[lem-primitive-dirichlet-l-zero-count-in-unit-window]])

[F4] The functional equation sends a zero $\rho$ of $L(s,\chi)$ to $1-\rho$ for $L(s,\bar\chi)$, and conjugation sends zeros of $L(s,\bar\chi)$ to conjugate zeros of $L(s,\chi)$. ([[thm-primitive-dirichlet-l-functional-equation]])

[F5] The Euler product is nonzero for $\Re s>1$; $L(s,\chi)$ has no zero on $\Re s=1$; and $L(1,\chi)\ne0$. ([[thm-dirichlet-l-euler-product]], [[thm-dirichlet-l-nonvanishing-line-one]], [[thm-dirichlet-l-nonzero-at-one]])

[F6] Gamma is holomorphic and nonzero in the right half-plane. ([[thm-gamma-meromorphic-continuation]], [[cor-gamma-function-has-no-zeros]])

[F7] Reciprocal Gamma has the locally uniformly convergent product $1/\Gamma(z)=ze^{\gamma z}\prod_{n\ge1}(1+z/n)e^{-z/n}$. ([[thm-gamma-weierstrass-product]])

[F8] Zeros of a nonzero holomorphic function are isolated and have finite multiplicity; enumerate rational disks and assign each zero its first disk containing no other zero, then repeat each disk's zero by its finite multiplicity. This gives a choice-free zero listing. ([[thm-identity-theorem-holomorphic-functions]], [[thm-zero-order-factorization-holomorphic-function]])

## Proof

**Proof technique:** direct.

**Given:** The data above; first take $t$ not equal to a zero ordinate.

1.1 By [F8], the discrete zero set can be listed by its first isolating rational disk, without a choice axiom. By [F1] and [F2], away from zeros, $$\frac{\Lambda'}{\Lambda}(s,\chi)=B+\sum_\rho\left(\frac1{s-\rho}+\frac1\rho\right),$$ where the zeros are listed with multiplicity and $\sum_\rho|\rho|^{-2}<\infty$. The zeros lie in $0<\Re\rho<1$: the Euler product and [F5] exclude $\Re s\ge1$, while the functional equation excludes $\Re s\le0$ after the trivial Gamma zeros are canceled in the completion. There is no zero at $s=0$, since [F4] and [F5] identify $\Lambda(0,\chi)$ with a nonzero multiple of $L(1,\bar\chi)$. [F1, F2, F4, F5, F6, F8, given]

2.1 Subtract the formula in step 1.1 at $s_0=2+it$ from its value at $s=\sigma+it$, $1/2\le\sigma\le2$, and use the completion in [F1]. Termwise logarithmic differentiation of the Euler product gives $$\frac{L'}{L}(2+it,\chi)=-\sum_p\sum_{k\ge1}\frac{\chi(p)^k\log p}{p^{k(2+it)}}=O(1),$$ since $\sum_p\sum_{k\ge1}(\log p)p^{-2k}\le\sum_{n\ge2}\log n/(n^2-1)<\infty$. From [F7], $$\frac{\Gamma'}{\Gamma}(z)=-\frac1z-\gamma+\sum_{m\ge1}\left(\frac1m-\frac1{m+z}\right).$$ For $z=(\sigma+a+it)/2$ and $z_0=(2+a+it)/2$, both real parts are at least $1/4$. In the displayed series, $|m+z|\ge|z|$ gives terms $O(1/m)$ when $m\le2|z|$, while $|m+z|\ge m/2$ gives terms $O(|z|/m^2)$ when $m>2|z|$; the same bounds apply to $z_0$. Hence both logarithmic derivatives are $O(\log\tau)$, so their difference is also $O(\log\tau)$. The conductor term cancels in the subtraction. For zeros with $|\gamma-t|>1$, group them into unit ordinate windows. By [F3] and the reflection in [F4], each window contains $O(\log(q(|t|+n+3)))$ zeros at distance between $n$ and $n+1$, while $$\left|\frac1{s-\rho}-\frac1{s_0-\rho}\right|\le\frac{3/2}{|\gamma-t|^2}.$$ For $n\le |t|+2$, $\log(q(|t|+n+3))\le\log(3q\tau)$, so this part of the sum is $O(\log(q\tau))$. For $n>|t|+2$, it is at most $\log(2qn)$, and comparison with $\int_{|t|+1}^\infty\log(2qu)u^{-2}\,du$ gives $O(\log(q\tau))$. Thus the full distant-zero sum is $O(\log(q\tau))$. The terms $1/(s_0-\rho)$ for $|\gamma-t|\le1$ are also $O(\log(q\tau))$ by [F3], since $|2-\beta|\ge1$. Therefore $$\frac{L'}{L}(\sigma+it,\chi)=\sum_{|\gamma-t|\le1}\frac1{\sigma+it-\rho}+O(\log(q\tau))$$ uniformly for $1/2\le\sigma\le2$. [F1, F2, F3, F4, F5, F7, step 1.1, algebra]

3.1 Integrate the imaginary part of step 2.1 from $\sigma=2$ to $\sigma=1/2$. The integral of $\Im(\sigma+it-\rho)^{-1}$ is the argument change of a horizontal segment not passing through $\rho$, so its absolute value is at most $\pi$. There are $O(\log(q\tau))$ such zeros by [F3] and [F4]. At $\sigma=2$, the Euler-product logarithm has bounded imaginary part because $\sum_{p,k\ge1}1/(kp^{2k})<\infty$. This proves the asserted bound when $t$ is not a zero ordinate. [F3, F4, F5, step 2.1, algebra]

4.1 At a zero ordinate, take the one-sided limits of the established bound from adjacent ordinates and average them, as prescribed in the Statement. The bound is uniform in the distance to the ordinate, so the same constant applies. [step 3.1, algebra] ∎ 