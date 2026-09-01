---
id: thm-chebyshev-theta-linear-bounds
kind: theorem
title: "Chebyshev's theta function has linear lower and upper bounds"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chebyshev-theta-function,
       lem-central-binomial-coefficient-bounds,
       lem-central-binomial-coefficient-prime-valuation,
       thm-natural-logarithm-laws,
       thm-binomial-theorem,
       thm-binomial-closed-formula,
       thm-induction-principle]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

There exist positive constants $c<C$ and a real number $x_0$ such that

$$
cx\le\theta(x)\le Cx
$$

for every real $x\ge x_0$.

## Facts & Assumptions

**Given:** A real number $x\ge2$.

[L1] The central binomial coefficient satisfies $$ \frac{4^n}{2n+1}\le\binom{2n}{n}\le4^n $$ for every natural number $n$ ([[lem-central-binomial-coefficient-bounds]]).

[L2] For every prime $p$ and natural $n\ge1$, primes $p$ with $n<p\le2n$ divide $\binom{2n}{n}$, and in general $$ v_p\binom{2n}{n}\le\frac{\log(2n)}{\log p} $$ ([[lem-central-binomial-coefficient-prime-valuation]]).

[L3] The binomial theorem gives $$ \sum_{k=0}^n\binom{n}{k}=2^n $$ ([[thm-binomial-theorem]]).

[L4] The closed form $$ \binom{n}{m}\,m!\,(n-m)!=n! $$ holds for $m\le n$ ([[thm-binomial-closed-formula]]).

[L5] The logarithm satisfies $\log(ab)=\log a+\log b$ and $\log(4^n)=2n\log2$ ([[thm-natural-logarithm-laws]]).

[L6] Induction on $\mathbb N$ is valid ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Put $P(y):=\prod_{p\le y}p$ for real $y\ge2$. We claim that $$ P(y)\le4^{y-1}\qquad(y\ge2). $$ Let $q$ be the largest prime with $q\le y$. Then $P(y)=P(q)$ and $4^{q-1}\le4^{y-1}$, so it suffices to prove the claim when $y=q$ is prime. For $q=2$ this is immediate. Let $q=2m+1$ be an odd prime, and assume inductively that $P(r)\le4^{r-1}$ for every integer $r$ with $2\le r\le2m$. Then $$ P(q)=P(m+1)\prod_{m+1<p\le2m+1}p. $$ Every prime in the second product divides $$ \binom{2m+1}{m}=\frac{(2m+1)!}{m!(m+1)!} $$ by [L4], because it appears in the numerator and in neither denominator factorial. Also [L3] gives $$ \sum_{k=0}^{2m+1}\binom{2m+1}{k}=2^{2m+1}, $$ and the two equal middle terms $\binom{2m+1}{m}=\binom{2m+1}{m+1}$ therefore satisfy $\binom{2m+1}{m}\le2^{2m}$. Thus $$ P(q)\le P(m+1)\binom{2m+1}{m}\le4^m\cdot2^{2m}=4^{2m}=4^{q-1}. $$ So the claim holds for every real $y\ge2$. [L3, L4, L6, construct, algebra]

1.2 Again by [L2], the factorization of $\binom{2n}{n}$ can be written as $$ \log\binom{2n}{n}\le\theta(2n)+R_n, $$ where $$ R_n:=\sum_{k=2}^{\lfloor\log_2(2n)\rfloor}\theta((2n)^{1/k}). $$ Using the trivial estimate $\theta(y)\le y\log y$ on each layer and $(2n)^{1/k}\le\sqrt{2n}$ for $k\ge2$, we get $$ 0\le R_n\le\sqrt{2n}\,\log(2n)\,\lfloor\log_2(2n)\rfloor=o(n). $$ [L2, given, algebra]

2.1 By definition of $\theta$ and the logarithm law in [L5], $$ \theta(y)=\log P(y)\le\log(4^{y-1})=2(y-1)\log2<2y\log2 $$ for every real $y\ge2$. [step 1.1, L5, algebra]

2.2 The lower bound in [L1] and [L5] give $$ \log\binom{2n}{n}\ge2n\log2-\log(2n+1). $$ Combining this with step 1.2 shows $$ \theta(2n)\ge2n\log2-\log(2n+1)-R_n. $$ Since $\log(2n+1)+R_n=o(n)$, choose $n_0$ so large that $\log(2n+1)+R_n\le n\log2$ for every $n\ge n_0$. Then $$ \theta(2n)\ge n\log2\qquad(n\ge n_0). $$ [L1, L5, step 1.2, choose, algebra]

3.1 Let $x\ge4n_0$, and put $n=\lfloor x/2\rfloor$. Then $n\ge n_0$ and $2n\le x$, so by monotonicity of $\theta$ and step 2.2, $$ \theta(x)\ge\theta(2n)\ge n\log2\ge\frac{\log2}{4}\,x. $$ Step 2.1 also gives $\theta(x)\le2x\log2$ for every $x\ge2$. Thus the theorem holds with $c=\frac{\log2}{4}$, $C=2\log2$, and $x_0=4n_0$. [step 2.2, step 2.1, given, algebra] ∎
