---
id: thm-blr-linearity-test-soundness
kind: theorem
title: "BLR acceptance implies agreement with a linear function"
status: published
origin: pipeline
deps: [lem-blr-acceptance-fourier-identity, lem-boolean-cube-fourier-inversion-and-parseval]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct calculation
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, January 2007 web draft, Theorems 18.23 and 19.9, pp.364 and 390\u2013391"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $n\geq0$ and fix $f:\mathbb F_2^n\to\mathbb F_2$. If BLR accepts with probability at least $\rho$, where $1/2<\rho\leq1$, then some linear $\ell_a(x)=a\cdot x$ agrees with $f$ on at least a $\rho$ fraction of the cube. Equivalently, rejection probability at most $\varepsilon<1/2$, with $\varepsilon\geq0$, guarantees distance at most $\varepsilon$ from some linear function. Every linear function passes the test with probability one.

For $0<\delta<1/2$ and integer $k\geq0$, repeating the test $k$ times with independent randomness and rejecting if any trial rejects detects every fixed $f$ at distance greater than $\delta$ from every linear function with probability at least $1-(1-\delta)^k$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For h=(-1)^f, the cubic sum equals twice BLR acceptance minus one ([[lem-blr-acceptance-fourier-identity]]).

[F2] Parseval for real cube functions states that the sum of squared normalized Fourier coefficients is E h² ([[lem-boolean-cube-fourier-inversion-and-parseval]]).

## Proof

1.1 Put $h=(-1)^f$ and $M=\max_a\widehat h(a)$. The finite nonempty index set has $2^n$ elements, so a maximizing index exists. Parseval and $h^2=1$ give $\sum_a\widehat h(a)^2=1$. Hence $\sum_a\widehat h(a)^3\leq M\sum_a\widehat h(a)^2=M$, since each coefficient is at most $M$ and every square is nonnegative. This is a signed maximum, not a maximum absolute value. [F2, algebra]

2.1 If $\alpha$ is the actual acceptance probability, the cubic identity gives $M\geq2\alpha-1\geq2\rho-1$. At a maximizing index $a$, $\widehat h(a)=\mathbb E(-1)^{f(x)+a\cdot x}=2\Pr[f(x)=a\cdot x]-1$. Therefore agreement is at least $\rho$. Substituting $\rho=1-\varepsilon$ proves the rejection formulation; conversely setting $\varepsilon=1-\rho$ in that formulation gives the agreement formulation. These are equivalent parametrizations of a guarantee, not a claim that distance determines acceptance exactly. [F1, step 1.1, algebra]

3.1 For $f=\ell_a$, distributivity modulo two gives $\ell_a(x)+\ell_a(y)=\ell_a(x+y)$ for every pair, so completeness is perfect. This includes $a=0$ and the sole linear function in dimension zero. At $\rho=1$ or $\varepsilon=0$, the guarantee in the previous step likewise gives exact agreement. [step 2.1, algebra]

4.1 If $f$ is farther than $\delta$ from every linear function, its acceptance probability cannot exceed $1-\delta$: otherwise it is greater than $1/2$, and step 2.1 applied with $\rho=\alpha$ would give distance at most $1-\alpha<\delta$. Independent trials of a fixed function have all-accept probability $\alpha^k\leq(1-\delta)^k$. Taking complements proves the repetition bound. For $k=0$ the always-accept empty repetition has rejection probability zero, equal to the bound; for $k=1$ this is the single-test bound. [step 2.1, given, algebra] ∎
