---
id: thm-riemann-stieltjes-countable-step-integrator
kind: theorem
title: "A countable pure-step integrator evaluates a continuous integrand as the absolutely convergent weighted sum of its values at the jumps"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       def-bounded-variation-and-total-variation,
       thm-jordan-decomposition-for-bv-functions,
       thm-riemann-stieltjes-existence-continuous-bv,
       thm-riemann-stieltjes-linearity-and-additivity,
       cor-riemann-stieltjes-integral-bound,
       def-series, thm-monotone-convergence, thm-direct-comparison-test,
       lem-absolute-convergence-implies-convergence,
       cor-boundedness-theorem-r, thm-heine-borel-r,
       def-continuity-real, def-real-limit, def-partition-and-refinement,
       def-tagged-partition-and-riemann-sum]
justified_by: []
aliases: []
landmark: false
short: '$\alpha=\sum c_nI(\cdot-s_n)\Rightarrow\int f\,d\alpha=\sum c_nf(s_n)$'
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.16"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Statement

Let $a<b$. Write $I:\mathbb R\to\mathbb R$ for the unit step $I(t)=0$ for $t\le0$ and $I(t)=1$ for $t>0$. Let $(s_n)_{n\in\mathbb N}$ be points of the open interval $(a,b)$, and let $(c_n)_{n\in\mathbb N}$ be reals with $c_n\ge0$ and $\sum c_n$ convergent.

Then for every $x\in[a,b]$ the series $\sum_n c_nI(x-s_n)$ converges, so

$$\alpha(x):=\sum_{n=0}^{\infty}c_nI(x-s_n)$$

defines a nondecreasing $\alpha:[a,b]\to\mathbb R$, which therefore has bounded variation.

For every continuous $f:[a,b]\to\mathbb R$ the integral $\int_a^b f\,d\alpha$ exists, the series $\sum_n c_nf(s_n)$ converges absolutely, and

$$\int_a^b f\,d\alpha=\sum_{n=0}^{\infty}c_nf(s_n).$$

The points $s_n$ are not required to be distinct, and any $c_n$ may be zero.

## Facts & Assumptions

**Given:** Reals $a<b$, points $s_n\in(a,b)$, reals $c_n\ge0$ with $\sum c_n$ convergent, and a continuous $f:[a,b]\to\mathbb R$.

[L1] A nondecreasing sequence of reals whose range is bounded above converges, with limit the supremum of its range ([[thm-monotone-convergence]]); a series converges when its sequence of partial sums converges ([[def-series]]).

[L2] A real function on $[a,b]$ has bounded variation if and only if it is a difference of two nondecreasing functions ([[thm-jordan-decomposition-for-bv-functions]]); the total variation is the supremum of the partition sums $\sum_{i<n}|g(t_{i+1})-g(t_i)|$ ([[def-bounded-variation-and-total-variation]]).

[L3] If $f:[a,b]\to\mathbb R$ is continuous and $\alpha:[a,b]\to\mathbb R$ has bounded variation, then $\int_a^b f\,d\alpha$ exists ([[thm-riemann-stieltjes-existence-continuous-bv]]).

[L4] Whenever the integrals on the right exist, $\int_a^b f\,d(u\alpha+v\beta)=u\int_a^b f\,d\alpha+v\int_a^b f\,d\beta$ ([[thm-riemann-stieltjes-linearity-and-additivity]]).

[L5] If $\int_a^b f\,d\alpha$ exists, $\alpha$ has bounded variation, and $|f(x)|\le M$ on $[a,b]$, then $\bigl|\int_a^b f\,d\alpha\bigr|\le M\operatorname{Var}_{[a,b]}(\alpha)$ ([[cor-riemann-stieltjes-integral-bound]]).

[L6] The closed bounded interval $[a,b]$ is compact ([[thm-heine-borel-r]]), and a continuous real function is bounded on a compact subset of its domain: there is $M\ge0$ with $|f(x)|\le M$ throughout ([[cor-boundedness-theorem-r]], [[def-continuity-real]]).

[L7] The Riemann–Stieltjes sum of a tagged partition $(P,\xi)$ is $S(f,\alpha;P,\xi)=\sum_{i<n}f(\xi_i)(\alpha(t_{i+1})-\alpha(t_i))$, and $\int_a^b f\,d\alpha=I$ means that for every $\varepsilon>0$ some $\delta>0$ makes $|S(f,\alpha;P,\xi)-I|<\varepsilon$ for every tagged partition of mesh below $\delta$ ([[def-riemann-stieltjes-sum-and-integral]], [[def-partition-and-refinement]], [[def-tagged-partition-and-riemann-sum]]).

[L8] If $0\le a_k\le b_k$ for all large $k$ and $\sum b_k$ converges, then $\sum a_k$ converges ([[thm-direct-comparison-test]]); a series converging absolutely converges ([[lem-absolute-convergence-implies-convergence]]).

[L9] Continuity of $f$ at $s$ means that for every $\varepsilon>0$ there is $\delta>0$ with $|f(x)-f(s)|<\varepsilon$ whenever $x$ lies in the domain and $|x-s|<\delta$ ([[def-continuity-real]]); convergence of a real sequence is the usual $\varepsilon$–threshold condition ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in[a,b]$. Each term $c_nI(x-s_n)$ lies in $[0,c_n]$, so the partial sums of $\sum_n c_nI(x-s_n)$ are nondecreasing and bounded above by $\sum_n c_n$. By [L1] the series converges and $\alpha(x)$ is defined, with $0\le\alpha(x)\le\sum_n c_n$. [given, L1]

1.2 Fix $s\in(a,b)$ and put $\sigma(x):=I(x-s)$ on $[a,b]$. Then $\sigma$ is nondecreasing, hence of bounded variation by [L2]. Let $\varepsilon>0$ and take $\delta>0$ from [L9] for $f$ at $s$, so that $|f(x)-f(s)|<\varepsilon$ whenever $|x-s|<\delta$. Let $(P,\xi)$ be a tagged partition of mesh below $\delta$. The increment $\sigma(t_{i+1})-\sigma(t_i)$ is $1$ when $t_i\le s<t_{i+1}$ and $0$ otherwise, and because $a\le s<b$ exactly one index $i$ satisfies $t_i\le s<t_{i+1}$. Hence $S(f,\sigma;P,\xi)=f(\xi_i)$ for that index, and $t_i\le\xi_i\le t_{i+1}$ with $t_i\le s<t_{i+1}$ give $|\xi_i-s|\le t_{i+1}-t_i<\delta$, so $|S(f,\sigma;P,\xi)-f(s)|<\varepsilon$. By [L7], $\int_a^b f\,d\sigma=f(s)$. [given, L2, L7, L9]

2.1 If $x\le y$ then $I(x-s_n)\le I(y-s_n)$ for every $n$, because $I$ is nondecreasing and $x-s_n\le y-s_n$. Multiplying by $c_n\ge0$ and summing, every partial sum for $x$ is at most the corresponding partial sum for $y$, so the limits satisfy $\alpha(x)\le\alpha(y)$ by [L1]. Thus $\alpha$ is nondecreasing, and $\alpha=\alpha-0$ exhibits it as a difference of two nondecreasing functions, so [L2] gives $\alpha$ bounded variation. [step 1.1, given, L1, L2]

2.2 For $N\in\mathbb N$ set $\alpha_N(x):=\sum_{n<N}c_nI(x-s_n)$, a finite sum. Each summand is a nonnegative multiple of a function of the form treated in step 1.2, so applying [L4] finitely many times, with the integral of each summand supplied by step 1.2, gives $\int_a^b f\,d\alpha_N=\sum_{n<N}c_nf(s_n)$. [step 1.2, L4]

3.1 By [L6] there is $M\ge0$ with $|f(x)|\le M$ on $[a,b]$. Since $0\le|c_nf(s_n)|\le Mc_n$ and $\sum c_n$ converges, [L8] makes $\sum_n c_nf(s_n)$ absolutely convergent, hence convergent. By step 2.1 and [L3] the integral $\int_a^b f\,d\alpha$ exists. [given, step 2.1, L3, L6, L8]

3.2 Set $\beta_N:=\alpha-\alpha_N$. For each $x$, $\beta_N(x)=\sum_{n\ge N}c_nI(x-s_n)$, the tail of the series in step 1.1; the argument of steps 1.1 and 2.1 applies verbatim to it, so $\beta_N$ is nondecreasing with bounded variation. Since $s_n\in(a,b)$ we have $I(a-s_n)=0$ and $I(b-s_n)=1$, so $\beta_N(a)=0$ and $\beta_N(b)=\sum_{n\ge N}c_n$. A nondecreasing function has every partition sum equal to $\beta_N(b)-\beta_N(a)$, because each increment is nonnegative and the sum telescopes, so [L2] gives $\operatorname{Var}_{[a,b]}(\beta_N)=\sum_{n\ge N}c_n$. [step 1.1, step 2.1, given, L1, L2]

4.1 Both $\alpha_N$ and $\beta_N$ are of bounded variation, so [L3] makes $\int_a^b f\,d\alpha_N$ and $\int_a^b f\,d\beta_N$ exist, and $\alpha=\alpha_N+\beta_N$ with [L4] gives $\int_a^b f\,d\alpha=\int_a^b f\,d\alpha_N+\int_a^b f\,d\beta_N$. Using step 2.2 and then [L5] with the bound $M$ of step 3.1, $$\Bigl|\int_a^b f\,d\alpha-\sum_{n<N}c_nf(s_n)\Bigr|=\Bigl|\int_a^b f\,d\beta_N\Bigr|\le M\sum_{n\ge N}c_n.$$ [step 2.2, step 3.1, step 3.2, L3, L4, L5]

5.1 Convergence of $\sum c_n$ makes its tails $\sum_{n\ge N}c_n$ tend to $0$ as $N$ increases, so given $\varepsilon>0$ the right side of step 4.1 is below $\varepsilon$ for all large $N$. Hence the partial sums $\sum_{n<N}c_nf(s_n)$ converge to $\int_a^b f\,d\alpha$, and by step 3.1 that series converges absolutely. By [L1] and [L9] its sum is $\int_a^b f\,d\alpha$, which is the claimed identity. [step 3.1, step 4.1, given, L1, L9] ∎

## Remark

The two endpoints behave differently, which is why the jumps are confined to the open interval. A jump at $a$ would be harmless: $I(x-a)$ vanishes only at $x=a$, the increment $\alpha(b)-\alpha(a)$ still records the whole weight, and step 2.1 goes through unchanged because its counting argument needs only $a\le s<b$. A jump at $b$ genuinely breaks the identity: $I(x-b)=0$ for every $x\in[a,b]$, so such a term contributes nothing at all to $\alpha$, yet it would contribute $c_nf(b)$ to the right-hand sum. The hypothesis $s_n\in(a,b)$ excludes that case, and it is the hypothesis Rudin states.

Rudin's Theorem 6.16 additionally requires the $s_n$ to be distinct. Nothing in the proof above uses distinctness, so it is not assumed here.

Continuity of $f$ is not decorative. `cex-common-jump-prevents-riemann-stieltjes-integrability` exhibits an $f$ and an $\alpha$ sharing a single jump for which no mesh limit exists, and a single step integrator is exactly the $\alpha$ of that counterexample.
