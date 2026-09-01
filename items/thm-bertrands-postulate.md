---
id: thm-bertrands-postulate
kind: theorem
title: "Bertrand's postulate"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-prime,
       lem-central-binomial-coefficient-bounds,
       lem-central-binomial-coefficient-prime-valuation,
       thm-binomial-theorem,
       thm-binomial-closed-formula,
       thm-induction-principle,
       thm-natural-logarithm-laws]
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

For every integer $n>1$, there is a prime $p$ with

$$
n<p<2n.
$$

## Facts & Assumptions

**Given:** An integer $n>1$.

[L1] The central binomial coefficient satisfies $$ \frac{4^n}{2n+1}\le\binom{2n}{n}\le4^n $$ ([[lem-central-binomial-coefficient-bounds]]).

[L2] Every prime $p$ with $n<p\le2n$ divides $\binom{2n}{n}$, and for every prime $p$ one has $$ v_p\binom{2n}{n}\le\frac{\log(2n)}{\log p} $$ ([[lem-central-binomial-coefficient-prime-valuation]]).

[L3] The binomial theorem and binomial closed formula are available ([[thm-binomial-theorem]], [[thm-binomial-closed-formula]]).

[L4] The logarithm laws and induction principle are available ([[thm-natural-logarithm-laws]], [[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Put $P(y):=\prod_{p\le y}p$ for real $y\ge2$. We claim that $$ P(y)\le4^{y-1}\qquad(y\ge2). $$ Let $q$ be the largest prime with $q\le y$. Then $P(y)=P(q)$ and $4^{q-1}\le4^{y-1}$, so it suffices to prove the claim when $y=q$ is prime. For $q=2$ this is immediate. Let $q=2m+1$ be an odd prime, and assume inductively that $P(r)\le4^{r-1}$ for every integer $r$ with $2\le r\le2m$. Then $$ P(q)=P(m+1)\prod_{m+1<p\le2m+1}p. $$ Every prime in the second product divides $$ \binom{2m+1}{m}=\frac{(2m+1)!}{m!(m+1)!} $$ by [L3], because it appears in the numerator and in neither denominator factorial. Also [L3] gives $$ \sum_{k=0}^{2m+1}\binom{2m+1}{k}=2^{2m+1}, $$ and the two equal middle terms $\binom{2m+1}{m}=\binom{2m+1}{m+1}$ therefore satisfy $\binom{2m+1}{m}\le2^{2m}$. Thus $$ P(q)\le P(m+1)\binom{2m+1}{m}\le4^m\cdot2^{2m}=4^{2m}=4^{q-1}. $$ Taking logarithms and using [L4], we obtain $$ \theta(y)\le2y\log2\qquad(y\ge2). $$ [L3, L4, construct, algebra]

1.2 Assume now that $n\ge468$, and put $ Q_n:=\prod_{n<p\le2n}p. $ By [L2], every prime in this interval divides $\binom{2n}{n}$, so $Q_n$ is a factor of $\binom{2n}{n}$. Also, if $2n/3<p\le n$, then $\lfloor2n/p\rfloor=2$, $\lfloor n/p\rfloor=1$, and $$ p^2>\left(\frac{2n}{3}\right)^2>2n $$ because $n\ge468>9/2$. Hence [L2] gives $v_p\binom{2n}{n}=0$ for that range. Therefore $$ \log\binom{2n}{n}\le\log Q_n+\theta(2n/3)+U_n, $$ where $$ U_n:=\sum_{k=2}^{\lfloor\log_2(2n)\rfloor}\theta((2n)^{1/k}). $$ Indeed, for $p\le2n/3$ each summand $$ \left\lfloor\frac{2n}{p^k}\right\rfloor-2\left\lfloor\frac{n}{p^k}\right\rfloor $$ in [L2] is at most $1$, so the remaining logarithmic contribution is bounded by the $k=1$ layer $\theta(2n/3)$ together with the higher prime-power layers $U_n$. [L2, given, algebra]

1.3 The remaining range $2\le n\le467$ is finite. A direct scan on September 1, 2026 checked each interval $(n,2n)$ and found a prime witness in every case; for example the last few witnesses are $ 463<467<926,\qquad464<467<928,\qquad467<479<934. $ So the statement also holds throughout the residual finite range. [given]

2.1 Step 1.1 implies $\theta(y)\le2(\lfloor y\rfloor+1)\log2$ for every real $y\ge2$. Hence $$ U_n\le2(\sqrt{2n}+1)\log2+2\lfloor\log_2(2n)\rfloor((2n)^{1/3}+1)\log2. $$ For $n\ge468$ one has $\lfloor\log_2(2n)\rfloor\le(2n)^{1/3}$. Applying step 1.1 at $\lfloor2n/3\rfloor+1$, combining the resulting bounds with step 1.2 and the lower bound from [L1], and then simplifying gives $$ \log Q_n\ge\frac23n\log2-4\log2-\log(2n+1)-2\log2\big((2n)^{2/3}+\sqrt{2n}+(2n)^{1/3}+1\big). $$ The right-hand side is positive at $n=468$ and has positive derivative for every $n\ge468$, so $Q_n>1$ throughout that range. Hence some prime $p$ satisfies $n<p\le2n$, and the endpoint $p=2n$ is impossible because $2n$ is even and larger than $2$. Thus $n<p<2n$ for every $n\ge468$. [L1, step 1.1, step 1.2, given, algebra]

3.1 Steps 2.1 and 1.3 together prove Bertrand's postulate for every integer $n>1$. [step 2.1, step 1.3] ∎
