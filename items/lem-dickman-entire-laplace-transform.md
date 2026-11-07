---
dependency_level: 4
id: lem-dickman-entire-laplace-transform
kind: lemma
title: The entire Laplace transform of the Dickman function
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-dickman-method-of-steps-existence-uniqueness-and-positivity
- lem-dickman-smooth-density-for-bounded-parameters
- lem-smooth-counting-logarithmic-identity-and-finite-euler-product
- thm-third-mertens-theorem-for-primes
- thm-first-mertens-theorem-for-primes
- thm-identity-theorem-holomorphic-functions
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Hildebrand and Tenenbaum, Integers without large prime factors; direct local reconstruction of bounded-parameter and transform inputs
    url: https://numdam.org/item/JTNB_1993__5_2_411_0.pdf
---

## Statement

For every complex $s$, the improper integral

$$\widehat\rho(s)=\int_0^\infty\rho(u)e^{-su}\,du$$

converges absolutely and locally uniformly in $s$, and defines an entire function. With $\gamma$ the Euler–Mascheroni constant,

$$\widehat\rho(s)=\exp\left(\gamma+\int_0^1\frac{e^{-st}-1}{t}\,dt\right),$$

where the integrand at $t=0$ has its continuous value $-s$. In particular $\int_0^\infty\rho(u)\,du=e^\gamma$.

## Statement references

[[lem-dickman-method-of-steps-existence-uniqueness-and-positivity]]

[[lem-dickman-smooth-density-for-bounded-parameters]]

[[lem-smooth-counting-logarithmic-identity-and-finite-euler-product]]

[[thm-third-mertens-theorem-for-primes]]

[[thm-first-mertens-theorem-for-primes]]

[[thm-identity-theorem-holomorphic-functions]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local result [[lem-dickman-method-of-steps-existence-uniqueness-and-positivity]] supplies its stated facts under its stated hypotheses.

[F2] The local result [[lem-dickman-smooth-density-for-bounded-parameters]] supplies its stated facts under its stated hypotheses.

[F3] The local result [[lem-smooth-counting-logarithmic-identity-and-finite-euler-product]] supplies its stated facts under its stated hypotheses.

[F4] The local result [[thm-third-mertens-theorem-for-primes]] supplies its stated facts under its stated hypotheses.

[F5] The local result [[thm-first-mertens-theorem-for-primes]] supplies its stated facts under its stated hypotheses.

[F6] The local result [[thm-identity-theorem-holomorphic-functions]] supplies its stated facts under its stated hypotheses.

## Proof

1.1 The delay equation and positivity in [F1] imply that $\rho$ is nonincreasing. Its integral identity gives $u\rho(u)\le\rho(u-1)$ for $u\ge1$. Consequently $\rho(u)\le1/n!$ on $[n,n+1]$, by iteration, since the factors $u,u-1,\ldots,u-n+1$ have product at least $n!$. For every fixed $B$, the series $\sum_{n\ge0}e^{B(n+1)}/n!$ and the same series multiplied by any fixed power of $n+1$ converge by their term ratios. These estimates bound the integrand and each of its $s$-derivatives on $|s|\le B$, proving locally uniform absolute convergence and entire dependence by difference quotients and their uniformly integrable Taylor remainders. [given, F1, F2, F3, F4, F5, F6, algebra]

2.1 First fix $s$ with $\Re s>0$ and write $w=1+s/\log y$. The Dirichlet series in [F3], integrated one term at a time with absolutely convergent tails, gives $Z_y(w)=w\int_1^\infty\Psi(t,y)t^{-w-1}dt$. Substituting $t=y^u$ yields $Z_y(w)/\log y=w\int_0^\infty(\Psi(y^u,y)/y^u)e^{-su}du$. On any bounded $u$ interval away from zero, [F2] makes the factor in parentheses converge uniformly to $\rho(u)$. The omitted initial interval of length $\eta$ is bounded by $\eta$, and the tail beyond $U$ is bounded by $\int_U^\infty e^{-(\Re s)u}du$, since $\Psi(t,y)\le t$. First take $y\to\infty$, then $\eta\downarrow0$ and $U\to\infty$. Thus the limit is $\widehat\rho(s)$. [given, F1, F2, F3, F4, F5, F6, step 1.1, algebra]

3.1 The quotient $Z_y(1+s/\log y)/Z_y(1)$ is the exponential of $\sum_{p\le y}\sum_{k\ge1}p^{-k}(e^{-ks\log p/\log y}-1)/k$, by the convergent logarithm series for each finite Euler factor. The terms with $k\ge2$ tend to zero: their absolute values are bounded by $2/(kp^k)$ for this fixed $\Re s>0$, a summable series, and each fixed term tends to zero; splitting into a finite part and a small tail justifies the limit without an interchange assumption. For $k=1$, put $g_s(t)=(e^{-st}-1)/t$ with $g_s(0)=-s$. By [F5], the cumulative mass $(\log y)^{-1}\sum_{p\le y^v}(\log p)/p$ is $v+O(1/\log y)$ uniformly for $\log2/\log y\le v\le1$. Finite summation by parts with the continuously differentiable function $g_s$ shows that the $k=1$ sum tends to $\int_0^1g_s(t)dt$. [given, F1, F2, F3, F4, F5, F6, step 2.1, algebra]

4.1 Mertens' product theorem [F4] gives $Z_y(1)/\log y\to e^\gamma$. Combining steps 2.1–3.1 proves the displayed transform formula for $\Re s>0$. The right side is entire: expand $(e^{-st}-1)/t=\sum_{j\ge1}(-s)^jt^{j-1}/j!$, whose integrals converge locally uniformly in $s$. The left side is entire by step 1.1. The identity theorem [F6] extends the equality to all $s\in\mathbb C$. Setting $s=0$ gives the final integral. [given, F1, F2, F3, F4, F5, F6, step 3.1, algebra] ∎
