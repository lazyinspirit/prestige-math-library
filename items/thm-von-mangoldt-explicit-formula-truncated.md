---
id: thm-von-mangoldt-explicit-formula-truncated
kind: theorem
title: "The truncated von Mangoldt explicit formula"
status: published
origin: pipeline
deps: [def-countable-choice, def-half-weighted-chebyshev-psi, thm-von-mangoldt-logarithmic-derivative-zeta, thm-truncated-perron-formula, cor-zeta-zero-count-unit-interval, lem-local-logarithmic-derivative-zeta, lem-logarithmic-derivative-zeta-left-half-plane, lem-von-mangoldt-explicit-formula-residues, thm-trivial-zeros-and-critical-strip]
proof_strategy: contour
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, Theorem 10.1"
      url: "https://kskedlaya.org/ant/chapter-10.html"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume countable choice.

For $x,T\ge2$,
$$\psi_0(x)-x=-\sum_{|\Im\rho|<T}\frac{x^\rho}{\rho}-\frac{\zeta'(0)}{\zeta(0)}-\frac12\log(1-x^{-2})+O\!\left(\frac{x\log^2(xT)}T+(\log x)\min\{1,\frac{x}{T\langle x\rangle}\}\right),$$
where $\langle x\rangle$ is the distance to the nearest prime power other than
possibly $x$.  The zero sum is finite and counts multiplicities.

## Proof

**Given:** Countable choice and $x,T\ge2$. All constants below are absolute.

1.1 Put $c=1+1/\log(2x)$, so $1<c<2$ and $x^c=O(x)$. On $\Re s=c$, [[thm-von-mangoldt-logarithmic-derivative-zeta]] gives $-\zeta'(s)/\zeta(s)=\sum_{n\ge1}\Lambda(n)n^{-s}$ absolutely. Apply [[thm-truncated-perron-formula]] at height $H\ge2$ to this series. Its starred sum is $\psi_0(x)$ by [[def-half-weighted-chebyshev-psi]], and its error is at most $$\sum_{n\ne x}\Lambda(n)(x/n)^c\min\{1,(H|\log(x/n)|)^{-1}\}+O(\Lambda(x)/H).$$ Here $\Lambda(x)=0$ if $x$ is not an integer prime power. [given, algebra]

1.2 The unit-interval zero count [[cor-zeta-zero-count-unit-interval]] bounds the number of zero ordinates in $[T-1,T+2]$ by $C\log(T+2)$. Removing intervals of radius $1/(8C\log(T+2))$ about those ordinates leaves a point $H\in[T,T+1]$ at that distance or more from every zero ordinate; ordinates outside $[T-1,T+2]$ are farther away. Use this $H$ and its reflection $-H$ as the horizontal contour heights. By [[lem-local-logarithmic-derivative-zeta]], for $-1\le\sigma\le c$ one has $\zeta'/\zeta(\sigma\pm iH)=O(\log^2(H+2))$: at most $O(\log H)$ zeros enter the local sum and each denominator has modulus $\gg1/\log H$. The pole term is harmless since $H\ge2$. [given, construct, algebra]

2.1 For $n\notin(3x/4,5x/4)$, $|\log(x/n)|$ is bounded below by an absolute constant. Since $\Lambda(n)\le\log n$ and $c-1=1/\log(2x)$, comparison with $\int_1^\infty(\log u)u^{-c}\,du=(c-1)^{-2}$ gives $\sum_n\Lambda(n)n^{-c}=O(\log^2(2x))$. Thus these far terms contribute $O(x\log^2(2x)/H)$. [step 1.1, algebra]

2.2 For odd positive integers $U$, shift the Perron segment from $c\pm iH$ to $-U\pm iH$. The horizontal parts with $-1\le\sigma\le c$ contribute $$O\!\left(\frac{\log^2(H+2)}H\int_{-1}^c x^\sigma\,d\sigma\right)=O\!\left(\frac{x\log^2(H+2)}{H\log x}\right).$$ For $\sigma\le-1$, the line is at distance at least $H$ from every negative even integer, so [[lem-logarithmic-derivative-zeta-left-half-plane]] bounds the logarithmic derivative by $O(\log(|\sigma|+H+2))$. These horizontal tails are $O((1+\log(H+2))/(Hx\log x))$ after integrating $x^\sigma$ over $(-\infty,-1]$. Along $\Re s=-U$, the same lemma with distance at least $1$ from the negative even integers gives $\zeta'/\zeta=O(\log(U+H+2))$; the vertical integral is $O(H\log(U+H+2)/(Ux^U))$ and tends to zero as $U\to\infty$. All three bounds are absorbed by $O(x\log^2(xH)/H)$. [step 1.2, algebra]

3.1 In the middle interval, $(x/n)^c=O(1)$ and $|\log(x/n)|\gg|n-x|/x$. On each side of $x$, single out the nearest prime power $q\ne x$, if one lies in that middle interval. Its contribution is $O((\log x)\min\{1,x/(H|x-q|)\})$, at most the term involving $\langle x\rangle$ in the statement. For all other integers on that side, put $m=|n-q|\ge1$; because $q$ is the nearest contributing prime power, $|n-x|\ge m$, so their total is at most $$O\!\left(\frac{x\log(2x)}H\sum_{1\le m\le 2x}\frac1m\right)=O\!\left(\frac{x\log^2(2x)}H\right).$$ The endpoint $n=x$ in step 1.1 is $O(\log(2x)/H)$. Consequently the Perron integral $P_H(x)$ satisfies $$P_H(x)=\psi_0(x)+O\!\left(\frac{x\log^2(2x)}H+(\log x)\min\{1,\frac{x}{H\langle x\rangle}\}\right).$$ [step 1.1, step 2.1, algebra]

4.1 The residue ledger [[lem-von-mangoldt-explicit-formula-residues]] now gives, after $U\to\infty$, $$P_H(x)=x-\sum_{|\Im\rho|<H}\frac{x^\rho}{\rho}-\frac{\zeta'(0)}{\zeta(0)}-\frac12\log(1-x^{-2})+O\!\left(\frac{x\log^2(xH)}H\right).$$ Its negative-even residue series converges absolutely since $x>1$. Combining this with step 3.1 proves the formula at height $H$. [step 3.1, step 2.2, algebra]

5.1 The only zeros gained between the strict cutoffs $T$ and $H$ have $T\le|\Im\rho|<H\le T+1$. There are $O(\log(T+2))$ of them, with multiplicity, and $0<\Re\rho<1$ by [[thm-trivial-zeros-and-critical-strip]], so each contributes at most $x/T$. Their total $O(x\log(T+2)/T)$ is absorbed by $O(x\log^2(xT)/T)$. Since $T\le H\le T+1$, the two errors in step 3.1 at height $H$ are bounded by the displayed errors at height $T$ up to absolute constants. This proves the statement, including when $T$ itself is a zero ordinate. [step 4.1, algebra] ∎