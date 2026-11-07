---
id: thm-heath-brown-identity-for-von-mangoldt-sums
kind: theorem
title: "Finite Heath–Brown identity for the von Mangoldt function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-von-mangoldt-function, def-number-theoretic-mobius-function, def-truncated-mobius-function, cor-von-mangoldt-mobius-inversion-formula, thm-canonical-prime-factorisation, def-natural-logarithm, def-dirichlet-convolution, def-dirichlet-convolution-identity, cor-classical-mobius-inversion, thm-dirichlet-convolution-commutative-ring]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "§1.1, Heath–Brown identity reduction, printed pp. 2–3"
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "§3, Heath–Brown identity reduction to Type I/II/III estimates, printed pp. 11–12"
    - title: "Dimitris Koukoulopoulos, The Distribution of Prime Numbers"
      url: "https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf"
      locator: "Chapter 23, Exercise 23.5; finite cutoff condition V ≥ x^(1/k)"
---

## Statement

For arithmetic functions $f,g:\mathbb N\to\mathbb C$, define their Dirichlet convolution by $(f*g)(n)=\sum_{d\mid n}f(d)g(n/d)$. Let $\mathbf1(n)=1$ and let $\varepsilon(1)=1$, $\varepsilon(n)=0$ for $n>1$; thus $\varepsilon$ is the convolution identity and $\mathbf1^{*0}:=\varepsilon$. For real $x\ge1$ and integer $k\ge1$, put $V=(2x)^{1/k}$. For every integer $n$ with $x\le n\le2x$,
$$\Lambda(n)=\sum_{j=1}^{k}(-1)^{j-1}\binom{k}{j}\bigl(\mu_{\le V}^{*j}*\mathbf1^{*(j-1)}*\log\bigr)(n),$$
where $\mu_{\le V}$ is the truncated Möbius function at cutoff $V$, $\mu$ is the number-theoretic Möbius function, $\Lambda$ is the von Mangoldt function, $\log$ is the natural logarithm on the positive integers, and $f^{*j}$ denotes the $j$-fold Dirichlet convolution of $f$ with itself. This is an identity on the displayed interval, not an identity on all positive integers for a fixed finite cutoff.

## Statement references

[[def-number-theoretic-mobius-function|The number-theoretic Möbius function $\\mu(n)$ from prime factorisation]]

[[def-truncated-mobius-function|Truncated Möbius Function at a Real Cutoff]]

[[def-von-mangoldt-function|The von Mangoldt function]]

[[def-natural-logarithm|The natural logarithm as the inverse of the exponential function]]

[[def-dirichlet-convolution|Dirichlet convolution of arithmetic functions]]

[[def-dirichlet-convolution-identity|The Dirichlet-convolution identity and the constant-one function]]

[[cor-classical-mobius-inversion|Classical Möbius inversion over positive divisors]]

[[cor-von-mangoldt-mobius-inversion-formula|Möbius inversion gives $\\Lambda=\\mu*\\log$]]

[[thm-dirichlet-convolution-commutative-ring|Arithmetic functions form a commutative ring under pointwise addition and Dirichlet convolution]]

[Stadlmann, §1.1](https://arxiv.org/pdf/2309.00425v3)

[Polymath8a, §3](https://arxiv.org/pdf/1402.0811v3)

[Koukoulopoulos, Chapter 23, Exercise 23.5](https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf)

## Facts & Assumptions

**Given:** A positive integer $n$, an integer $k\ge1$, the number-theoretic Möbius function $\mu$, the von Mangoldt function $\Lambda$, and Dirichlet convolution on arithmetic functions.

[F1] [[cor-classical-mobius-inversion]]: if $g(n)=\sum_{d\mid n}f(d)$ for all positive integers $n$, then $f(n)=\sum_{d\mid n}\mu(d)g(n/d)$.

[F2] [[thm-dirichlet-convolution-commutative-ring]]: Dirichlet convolution is associative and commutative and has identity $\varepsilon$.

[F3] [[cor-von-mangoldt-mobius-inversion-formula]]: $\mu*\log=\Lambda$.

[F4] [[def-truncated-mobius-function]]: $\mu_{\le V}(m)=0$ for $m>V$, and $\mu_{>V}(m)=0$ unless $m>V$.

## Proof

1.1 Set $\mu_{>V}=\mu-\mu_{\le V}$. Every nonzero summand in $(\mu_{>V}^{*k}*\mathbf1^{*(k-1)}*\log)(n)$ comes from a factorization $n=a_1\cdots a_kb_1\cdots b_{k-1}c$ with each $a_i>V$. Thus $n>V^k=2x$, so this convolution is zero whenever $n\le2x$. [F4, given, algebra]

1.2 Expand $\mu_{>V}^{*k}=(\mu-\mu_{\le V})^{*k}$ by the binomial theorem in the commutative convolution ring [F2]. Step 1.1 therefore gives, for $n\le2x$,
$$0=\sum_{j=0}^{k}(-1)^j\binom{k}{j}(\mu^{*(k-j)}*\mu_{\le V}^{*j}*\mathbf1^{*(k-1)}*\log)(n).$$
Here a zero-fold convolution is $\varepsilon$. [F2, F4, step 1.1, algebra]

2.1 The $j=0$ term of the sum in step 1.2 is $\mu^{*k}*\mathbf1^{*(k-1)}*\log=\mu*(\mu*\mathbf1)^{*(k-1)}*\log=\mu*\log=\Lambda$, using $\mu*\mathbf1=\varepsilon$ from [F1], associativity [F2], and [F3]. [F1, F2, F3, step 1.2, algebra]

2.2 For $1\le j\le k$, commutativity and associativity [F2] and $\mu*\mathbf1=\varepsilon$ [F1] cancel the $k-j$ full Möbius factors against the same number of constant-one factors, leaving
$$\mu^{*(k-j)}*\mu_{\le V}^{*j}*\mathbf1^{*(k-1)}*\log=\mu_{\le V}^{*j}*\mathbf1^{*(j-1)}*\log.$$
Substituting this and step 2.1 into step 1.2 and moving the nonzero-index terms to the other side gives the asserted formula with signs $(-1)^{j-1}$. [F1, F2, step 1.2, step 2.1, algebra] ∎
