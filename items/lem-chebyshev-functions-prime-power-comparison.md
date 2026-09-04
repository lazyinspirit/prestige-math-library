---
id: lem-chebyshev-functions-prime-power-comparison
kind: lemma
title: "Psi and theta differ by at most a square-root term"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chebyshev-theta-function,
       def-chebyshev-psi-function,
       lem-chebyshev-psi-prime-power-expansion,
       thm-chebyshev-theta-linear-bounds]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

There are positive constants $K_1,K_2$ such that for every real $x\ge2$,

$$ 0\le\psi(x)-\theta(x)\le K_1\sqrt{x}\log x $$

and, for all sufficiently large $x$,

$$ \psi(x)-\theta(x)\le K_2\sqrt{x}. $$

## Facts & Assumptions

**Given:** A real number $x\ge2$.

[L1] The prime-power expansion is $$ \psi(x)=\sum_{k\ge1}\theta(x^{1/k}) $$ ([[lem-chebyshev-psi-prime-power-expansion]]).

[L2] Chebyshev's theta function has linear upper bounds for large arguments ([[thm-chebyshev-theta-linear-bounds]]).

[L3] By definition, $\theta(y)=\sum_{p\le y}\log p$ and $\psi(y)=\sum_{n\le y}\Lambda(n)$ ([[def-chebyshev-theta-function]], [[def-chebyshev-psi-function]]).

## Proof

**Proof technique:** direct.

1.1 Subtracting the $k=1$ term from [L1] gives $ \psi(x)-\theta(x)=\sum_{k\ge2}\theta(x^{1/k}). $ Every summand is nonnegative, so $ 0\le\psi(x)-\theta(x). $ [L1, L3, given, algebra]

2.1 The $k=2$ term is $\theta(\sqrt x)\le\sqrt x\log x$, because there are at most $\sqrt x$ primes at most $\sqrt x$, and each contributes at most $\log\sqrt x\le\log x$. The terms with $k>\lfloor\log_2x\rfloor$ vanish because $x^{1/k}<2$. For $3\le k\le\lfloor\log_2x\rfloor$, one has $x^{1/k}\le x^{1/3}$, so $$ \sum_{k=3}^{\lfloor\log_2x\rfloor}\theta(x^{1/k}) \le x^{1/3}\log x\cdot\lfloor\log_2 x\rfloor \le K_1'\sqrt x\log x $$ for a fixed constant $K_1'$, because $(\log x)x^{-1/6}$ is bounded for $x\ge2$. Together with step 1.1, this proves $ \psi(x)-\theta(x)\le K_1\sqrt x\log x $ for a suitable constant $K_1$. [step 1.1, given, algebra]

3.1 By [L2], choose $C>0$ and $y_0\ge2$ such that $\theta(y)\le Cy$ for every $y\ge y_0$. Put $C':=\max\{C,\theta(y_0)\}$. If $1\le y\le y_0$, monotonicity gives $\theta(y)\le\theta(y_0)\le C' \le C'y$, while for $y\ge y_0$ one has $\theta(y)\le Cy\le C'y$. Thus $\theta(y)\le C'y$ for every real $y\ge1$. Then for all sufficiently large $x$, the term $k=2$ satisfies $ \theta(\sqrt x)\le C'\sqrt x. $ Also, using the finite range from step 2.1, $$ \sum_{k=3}^{\lfloor\log_2x\rfloor}\theta(x^{1/k}) \le C'x^{1/3}\lfloor\log_2 x\rfloor \le C'\sqrt x $$ for large $x$, because $(\log x)x^{-1/6}\to0$. Therefore $ \psi(x)-\theta(x)\le K_2\sqrt x $ for a suitable constant $K_2$. [L2, step 1.1, step 2.1, choose, algebra] ∎
