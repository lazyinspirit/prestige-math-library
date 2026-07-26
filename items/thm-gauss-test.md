---
id: thm-gauss-test
kind: theorem
title: "Gauss: for positive terms, if $a_k/a_{k+1} = 1 + h/k + r_k$ with $|r_k| \\le C\\,k^{-1-\\varepsilon}$ for $k \\ge 1$, some constant $C$ and some rational $\\varepsilon > 0$, the series converges iff $h > 1$"
status: published
origin: session
deps: [cor-raabe-test, thm-p-series-rational, thm-direct-comparison-test, def-limsup-liminf, lem-limsup-exists, lem-extended-reals-complete, def-extended-reals, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, def-series, thm-induction-principle, thm-of-archimedean, cor-archimedean-reciprocal, thm-squeeze, thm-algebra-of-limits, lem-series-linearity, lem-series-tail-invariance, lem-limit-of-tail, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-abs-value, def-real-limit, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Convergence tests (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Convergence_tests"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k > 0$ for every $k \in \mathbb{N}$.
Suppose there are a real $h$, a real $C \ge 0$, a rational $\varepsilon > 0$ and
reals $r_k$ for $k \ge 1$ such that

$$\frac{a_k}{a_{k+1}} \;=\; 1 + \frac{h}{k} + r_k \qquad \text{and} \qquad |r_k| \;\le\; C\,k^{-1-\varepsilon} \qquad (k \ge 1),$$

where $k$ denotes the canonical natural $\iota(k) > 0$ and $k^{-1-\varepsilon}$
is the rational power ([[def-rational-power]], [[lem-of-naturals-positive]]).
Then

$$\sum a_k \ \text{converges} \qquad \Longleftrightarrow \qquad h > 1 .$$

The hypotheses are imposed from $k = 1$ on, since $h/k$ has no value at $k = 0$;
$a_0$ is unconstrained beyond being positive, which costs nothing because
convergence is a tail property ([[lem-series-tail-invariance]]).

**The exponent $\varepsilon$ is rational because that is what
[[def-rational-power]] supplies**, and the error bound is a $p$-series bound with
$p = 1 + \varepsilon > 1$, which is exactly the summability the proof consumes.

**The borderline case $h = 1$ is the whole point of the theorem.** There
$R_k = (k+1)(a_k/a_{k+1} - 1)$ tends to $1$, so both halves of Raabe's test
([[cor-raabe-test]]) are silent; the theorem asserts divergence there, and the
argument below establishes it without any logarithm, by a telescoping product
estimate.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$; reals $h$, $C \ge 0$, a rational $\varepsilon > 0$ and reals $r_k$ ($k \ge 1$) with $a_k/a_{k+1} = 1 + h/k + r_k$ and $|r_k| \le C k^{-1-\varepsilon}$ for $k \ge 1$; and $R_k := (k+1)(a_k/a_{k+1} - 1)$ for $k \in \mathbb{N}$ ([[cor-raabe-test]]).

[L1] Raabe's test: for positive terms, $\liminf_k R_k > 1$ gives convergence of $\sum a_k$ and $\limsup_k R_k < 1$ gives divergence ([[cor-raabe-test]]).

[L2] Every subset of $\overline{\mathbb{R}}$ has least upper and greatest lower bounds there; $\liminf_k x_k = \sup\{i_n\}$ and $\limsup_k x_k = \inf\{s_n\}$ for the tail bounds, both existing for every sequence ([[lem-extended-reals-complete]], [[def-extended-reals]], [[def-limsup-liminf]], [[lem-limsup-exists]]).

[L3] For every real $c > 0$ there is a natural $n \ge 1$ with $1/n < c$, and for every real $x$ there is a natural $n$ with $\iota(n) > x$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L4] Rational powers on a positive base: $a^{r+s} = a^{r}a^{s}$, $(a^{r})^{s} = a^{rs}$, $a^{-r} = 1/a^{r}$, $a^{r} > 0$; and for rational $t > 0$, $0 < x < y$ implies $x^{t} < y^{t}$ ([[lem-rational-power-laws]], [[lem-rational-power-monotone]], [[def-rational-power]]).

[L5] Limit rules: sums, scalar multiples, products and quotients of convergent sequences ([[thm-algebra-of-limits]]); the squeeze theorem ([[thm-squeeze]]); convergence depends only on the tail ([[lem-limit-of-tail]]); a convergent sequence satisfies its estimate for every real tolerance ([[def-real-limit]], [[cor-archimedean-reciprocal]]).

[L6] $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$ ([[thm-p-series-rational]]).

[L7] Direct comparison, and the fact that scaling by a nonzero constant preserves convergence and divergence ([[thm-direct-comparison-test]], [[lem-series-linearity]]); a series converges if and only if each of its tail series converges, and for nonnegative terms every partial sum is at most the sum ([[lem-series-tail-invariance]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] The principle of induction ([[thm-induction-principle]]); reciprocation reverses order on the positives ([[lem-of-inverse-positive]]); $|x| \ge 0$ and $x \le |x|$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** cases.

1.1 Assume $h > 1$. [assume-case gt]

1.2 Assume instead $h < 1$. [assume-case lt]

1.3 Assume instead $h = 1$. [assume-case eq]

1.4 For every $k \ge 1$, $R_k = (k+1)\left(\dfrac{h}{k} + r_k\right) = h\left(1 + \dfrac{1}{k}\right) + (k+1) r_k$. [given, algebra]

1.5 The sequence $j \mapsto 1/(j+1)$ converges to $0$: given a rational $\eta > 0$, choose a natural $n \ge 1$ with $1/n < \eta$; then $1/(j+1) \le 1/n < \eta$ for every $j$ with $j+1 \ge n$. [L3, L8, choose]

1.6 The sequence $j \mapsto (j+1)^{-\varepsilon}$ converges to $0$: given a real $\eta > 0$, put $M := \max\{1/\eta,\, 1\} > 0$ and choose a natural $n$ with $\iota(n) > M^{1/\varepsilon}$; then for $j + 1 \ge n$ we get $(j+1)^{\varepsilon} > \big(M^{1/\varepsilon}\big)^{\varepsilon} = M \ge 1/\eta$, hence $0 < (j+1)^{-\varepsilon} < \eta$. [L3, L4, L8, choose]

1.7 For every $j \in \mathbb{N}$, $|(j+2)\,r_{j+1}| \le C (j+2)(j+1)^{-1-\varepsilon} \le 2C (j+1)\,(j+1)^{-1-\varepsilon} = 2C\,(j+1)^{-\varepsilon}$, using $j + 2 \le 2(j+1)$. [given, L4, L8, algebra]

2.1 Hence $-2C(j+1)^{-\varepsilon} \le (j+2) r_{j+1} \le 2C(j+1)^{-\varepsilon}$ with both bounds converging to $0$, so $(j+2) r_{j+1} \to 0$ by the squeeze theorem. [step 1.7, step 1.6, L5]

2.2 In the case $h = 1$, put $u_k := \dfrac{k}{k+1}\,r_k$ and $t_k := k\,a_k$ for $k \ge 1$; then $t_k > 0$, $|u_k| \le |r_k| \le C k^{-1-\varepsilon}$ since $0 < k/(k+1) < 1$, and $\dfrac{a_k}{a_{k+1}} = \dfrac{k+1}{k} + r_k = \dfrac{k+1}{k}\big(1 + u_k\big)$. [step 1.3, given, L8, algebra]

3.1 Therefore $R_{j+1} = h\big(1 + 1/(j+1)\big) + (j+2) r_{j+1} \to h(1+0) + 0 = h$, and since convergence depends only on the tail, the sequence $(R_k)_{k \in \mathbb{N}}$ converges to $h$. [step 1.4, step 1.5, step 2.1, L5]

3.2 Consequently $\dfrac{t_k}{t_{k+1}} = \dfrac{k}{k+1}\cdot\dfrac{a_k}{a_{k+1}} = 1 + u_k$ for $k \ge 1$, so $1 + u_k = t_k/t_{k+1} > 0$ and $\dfrac{t_{k+1}}{t_k} = \dfrac{1}{1+u_k}$. [step 2.2, algebra]

3.3 In the case $h = 1$: $\sum_{k \ge 1} k^{-1-\varepsilon}$ converges, since $1 + \varepsilon$ is a rational exceeding $1$; hence so does $\sum_{k \ge 1} C k^{-1-\varepsilon}$, and by comparison with it so does $\sum_{k \ge 1} |u_k|$, whose terms are nonnegative. [step 2.2, L6, L7]

4.1 In the case $h > 1$: applying the limit estimate with the real tolerance $(h-1)/2 > 0$ gives an $N$ with $R_k > h - (h-1)/2 = (h+1)/2$ for all $k \ge N$; so $(h+1)/2$ is a lower bound of $\{R_k : k \ge N\}$, whence $\liminf_k R_k \ge (h+1)/2 > 1$ and $\sum a_k$ converges. [step 1.1, step 3.1, L2, L5, L1]

4.2 In the case $h < 1$: the tolerance $(1-h)/2 > 0$ gives an $N$ with $R_k < h + (1-h)/2 = (h+1)/2$ for all $k \ge N$; so $(h+1)/2$ is an upper bound of $\{R_k : k \ge N\}$, whence $\limsup_k R_k \le (h+1)/2 < 1$ and $\sum a_k$ diverges. [step 1.2, step 3.1, L2, L5, L1]

4.3 For $k \ge 1$: $(1-u_k)(1+u_k) = 1 - u_k^{2} \le 1$ and $1 + u_k > 0$, so $\dfrac{1}{1+u_k} \ge 1 - u_k \ge 1 - |u_k|$. [step 3.2, L8, algebra]

4.4 Writing $U$ for the sum of $\sum_{k \ge 1} |u_k|$ and $P_n = \sum_{k=1}^{n} |u_k|$ for its partial sums, $P_n \to U$, so there is a natural $N_0$ with $U - P_{N_0} \le 1/2$; put $N := N_0 + 1$. [step 3.3, L5, L7, choose]

5.1 For every $n \ge N$ the block $\sum_{k=N}^{n} |u_k|$ is a partial sum of the $N_0$-th tail series of $\sum_{k \ge 1}|u_k|$, whose terms are nonnegative and whose sum is $U - P_{N_0}$; hence $\sum_{k=N}^{n} |u_k| \le 1/2$, and in particular $|u_k| \le 1/2$ for every $k \ge N$. [step 4.4, L7]

6.1 In the case $h = 1$: for every $n \ge N-1$, $\dfrac{t_{n+1}}{t_N} \ge 1 - \sum_{k=N}^{n} |u_k|$, by induction on $n$. At $n = N-1$ both sides equal $1$, the sum being empty. Assume it at $n$; then, since $t_{n+1}/t_N > 0$ and $1/(1+u_{n+1}) \ge 1 - |u_{n+1}| \ge 1/2 > 0$, and since the induction hypothesis gives $t_{n+1}/t_N \ge 1 - \sum_{k=N}^{n}|u_k| \ge 1/2 > 0$, we get $\dfrac{t_{n+2}}{t_N} = \dfrac{1}{1+u_{n+1}}\cdot\dfrac{t_{n+1}}{t_N} \ge \big(1-|u_{n+1}|\big)\Big(1 - \sum_{k=N}^{n}|u_k|\Big) \ge 1 - \sum_{k=N}^{n+1}|u_k|$, the last step expanding the product and discarding a nonnegative term. [step 3.2, step 4.3, step 5.1, L8]

7.1 Hence $t_{n+1}/t_N \ge 1 - 1/2 = 1/2$ for every $n \ge N-1$, that is $m\,a_m = t_m \ge t_N/2 > 0$ for every $m \ge N$, and so $a_m \ge \dfrac{t_N}{2}\cdot\dfrac{1}{m}$ for every $m \ge N$. [step 6.1, step 5.1, L8, algebra]

8.1 The series $\sum_{m \ge 1} 1/m$ diverges, so $\sum_{m \ge 1} \frac{t_N}{2}\cdot\frac{1}{m}$ diverges, the factor $t_N/2$ being nonzero. [step 7.1, L6, L7]

9.1 If $\sum a_k$ converged, then so would $\sum_{m \ge 1} a_m$, and comparison with the estimate of step 7.1 would make $\sum_{m \ge 1} \frac{t_N}{2m}$ converge, contradicting step 8.1; so in the case $h = 1$ the series $\sum a_k$ diverges. [step 7.1, step 8.1, L7]

10.1 The three cases $h > 1$, $h < 1$ and $h = 1$ exhaust the reals, and they give convergence, divergence and divergence respectively; so $\sum a_k$ converges exactly when $h > 1$. [step 4.1, step 4.2, step 9.1, cases-exhaustive] ∎

## Remarks

- **No logarithm anywhere, and that is deliberate.** The classical treatment of $h = 1$ compares $a_k$ with $1/(k \log k)$ or invokes Bertrand's test. Neither is available in this library at this point, and neither is needed: the hypothesis $|r_k| \le C k^{-1-\varepsilon}$ makes $\sum |u_k|$ convergent, and a convergent sum of nonnegative errors is exactly what the product estimate of step 6.1 consumes. The price is that the theorem is stated with an $\varepsilon$ of decay to spare, rather than for an arbitrary summable error.

- **Step 7.1 is the Weierstrass product inequality in disguise.** In the form $\prod_{j}(1 - x_j) \ge 1 - \sum_j x_j$ for $x_j \in [0,1]$, it is the standard statement; here the product is $t_{n+1}/t_N$, telescoped in advance, so that one induction does the work of two and no separate lemma about products of inequalities is needed.

- **What the conclusion at $h = 1$ says about the terms.** The estimate $a_m \ge (t_N/2)\,(1/m)$ is a genuine lower bound of harmonic type: at the borderline the terms cannot decay faster than a constant multiple of $1/m$, and divergence follows from the divergence of the harmonic series alone.

- **The three cases are decided by $h$ and by nothing else.** The constants $C$ and $\varepsilon$ never appear in the conclusion; they enter only through the requirement that the error be summable, which is what keeps the case $h = 1$ from being genuinely borderline in this argument.
