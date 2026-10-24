---
id: cex-infinite-product-diverges-though-the-series-converges
kind: counterexample
title: "$\\prod_{j \\ge 0} \\bigl(1 + (-1)^{j}/\\sqrt{j+2}\\bigr)$ has partial products tending to $0$ although $\\sum_{j \\ge 0} (-1)^{j}/\\sqrt{j+2}$ converges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-infinite-product, thm-infinite-product-criterion, thm-alternating-series-test, thm-p-series-rational, thm-of-square-roots, thm-am-gm, thm-direct-comparison-test, lem-series-linearity, lem-alternating-sequence, thm-induction-principle, thm-squeeze, def-monotone-sequence, def-finite-sum, lem-finite-sum-laws, lem-of-inverse-positive, lem-of-naturals-positive, cor-archimedean-reciprocal, def-rational-power, thm-nth-roots-exist, def-integer-power, def-series, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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
    - title: "Infinite product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infinite_product"
    - title: "Alternating series test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alternating_series_test"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://ejwingler.people.ysu.edu/TBB-Real.pdf"
    - title: "D. Dikranjan, Analysis 478, Chapter 6"
      url: "https://people.math.binghamton.edu/dikran/478/Ch6.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $\sum p_k$ converges then $\prod(1 + p_k)$ converges
([[def-infinite-product]], [[def-series]]).

For **nonnegative** $p_k$ this is true, and is
[[thm-infinite-product-criterion]]. For signed $p_k$ it is false, and the witness
is

$$p_j \;:=\; \frac{(-1)^{j}}{\sqrt{\iota(j+2)}} \qquad (j \in \mathbb{N}),$$

with $\sqrt{\ }$ the nonnegative square root ([[thm-of-square-roots]]). The series
$\sum_j p_j$ converges by the alternating series test. The factors $1 + p_j$ are
all positive, since $|p_j| \le 1/\sqrt{2} < 1$; nevertheless the partial products

$$\Pi_m \;=\; \prod_{j<m}\Bigl(1 + \frac{(-1)^{j}}{\sqrt{j+2}}\Bigr)$$

tend to $0$, so no tail of the product has partial products with a nonzero limit
and the product diverges.

**The mechanism, and why no logarithm is needed.** Consecutive factors are paired.
With $a = \iota(2i+2)$ and $b = \iota(2i+3)$, so that $b - a = 1$,

$$\Bigl(1 + \frac{1}{\sqrt a}\Bigr)\Bigl(1 - \frac{1}{\sqrt b}\Bigr) \;=\; 1 - \frac{1}{\sqrt{ab}}\Bigl(1 - \frac{1}{\sqrt a + \sqrt b}\Bigr) \;\le\; 1 - \frac{1}{\iota(4i+6)} ,$$

and $\sum_i 1/\iota(4i+6)$ diverges. So the even partial products are dominated by
$\prod_{i<n}\bigl(1 - 1/\iota(4i+6)\bigr)$, which tends to $0$ by
[[thm-infinite-product-criterion]]; the odd ones differ from them by one bounded
factor.

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_j)$ with index maps $e_i = 2i$ and $o_i = 2i+1$; the sequence $p_j = \varepsilon_j/\sqrt{\iota(j+2)}$; the factors $f_j := 1 + p_j$; and the partial products $\Pi_m = \prod_{j<m} f_j$.

[L1] The alternating sequence: $\varepsilon_{e_i} = 1$, $\varepsilon_{o_i} = -1$, $|\varepsilon_j| = 1$, $e_0 = 0$, $e_{i+1} = e_i + 2$, $o_i = e_i + 1$, and $\mathbb{N}$ is the disjoint union of the two ranges ([[lem-alternating-sequence]]).

[L2] Square roots: every $t \ge 0$ has a unique $\sqrt t \ge 0$ with $(\sqrt t)^2 = t$; $\sqrt{uv} = \sqrt u \sqrt v$ and $\sqrt{\ }$ is strictly increasing on the nonnegative reals; and $\sqrt t = t^{1/2}$ ([[thm-of-square-roots]], [[thm-nth-roots-exist]], [[def-rational-power]]).

[L3] The canonical naturals are positive for $n \ge 1$, strictly increasing, with $\iota(m+n) = \iota(m)+\iota(n)$ and $\iota(mn) = \iota(m)\iota(n)$ for $m,n \ge 1$; reciprocation reverses the order on the positives; and for every real $\varepsilon > 0$ there is $n \ge 1$ with $1/\iota(n) < \varepsilon$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]]).

[L4] The alternating series test ([[thm-alternating-series-test]], [[def-monotone-sequence]], [[def-real-limit]]).

[L5] AM-GM for two nonnegative reals: $uv \le ((u+v)/2)^{2}$ ([[thm-am-gm]]).

[L6] Finite products: $\prod_{j<0}x_j = 1$, $\prod_{j<n+1}x_j = \bigl(\prod_{j<n}x_j\bigr)x_n$, splitting at an intermediate index, and a finite product of positive factors is positive ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L7] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L8] For $0 \le q_i < 1$ with $\sum q_i$ divergent, the partial products of $\prod(1 - q_i)$ tend to $0$ ([[thm-infinite-product-criterion]]).

[L9] $\sum_{k\ge1}1/k^{p}$ diverges at $p = 1$; direct comparison in its divergence form; and $\sum c\,x_k$ diverges when $c \ne 0$ and $\sum x_k$ diverges ([[thm-p-series-rational]], [[thm-direct-comparison-test]], [[lem-series-linearity]], [[def-integer-power]], [[def-series]]).

[L10] The squeeze theorem ([[thm-squeeze]]).

[L11] Convergence of an infinite product ([[def-infinite-product]]).

## Counterexample

**Proof technique:** direct.

1.1 For every $j$, $\iota(j+2) \ge \iota(2) = 2$, so $\sqrt{\iota(j+2)} \ge \sqrt 2 > 1$ and $|p_j| = 1/\sqrt{\iota(j+2)} \le 1/\sqrt 2 < 1$; hence every factor satisfies $0 < f_j \le 1 + 1/\sqrt 2 < 2$, and every $\Pi_m$ is positive. [given, L1, L2, L3, L6]

1.2 Fix $i$ and put $a := \iota(2i+2)$, $b := \iota(2i+3)$, so $b - a = 1$ and $a + b = \iota(4i+5)$, both positive. By [L1], $f_{2i} = 1 + 1/\sqrt a$ and $f_{2i+1} = 1 - 1/\sqrt b$. [L1, L3]

1.3 An induction gives that finite products are monotone in nonnegative factors: if $0 \le x_i \le y_i$ for all $i < n$ then $\prod_{i<n}x_i \le \prod_{i<n}y_i$, since both products are nonnegative and $\prod_{i<n+1}x_i = \bigl(\prod_{i<n}x_i\bigr)x_n \le \bigl(\prod_{i<n}y_i\bigr)x_n \le \bigl(\prod_{i<n}y_i\bigr)y_n$. [L6, L7]

2.1 The sequence $\beta_j := 1/\sqrt{\iota(j+2)}$ is positive, nonincreasing and converges to $0$: monotonicity from $0 < \iota(j+2) < \iota(j+3)$ and strict increase of the square root, and convergence because, given a rational $\varepsilon > 0$, an $n \ge 1$ with $1/\iota(n) < \varepsilon^{2}$ gives $\iota(j+2) > (1/\varepsilon)^{2}$ and so $\beta_j < \varepsilon$ for every $j \ge n$. [step 1.1, L2, L3]

2.2 Since $\sqrt b - \sqrt a = (b-a)/(\sqrt a + \sqrt b) = 1/(\sqrt a + \sqrt b)$, one has $\dfrac1{\sqrt a} - \dfrac1{\sqrt b} = \dfrac{\sqrt b - \sqrt a}{\sqrt{a}\sqrt{b}} = \dfrac{1}{\sqrt{ab}\,(\sqrt a + \sqrt b)}$, so $P_i := f_{2i}f_{2i+1} = 1 + \dfrac1{\sqrt a} - \dfrac1{\sqrt b} - \dfrac1{\sqrt{ab}} = 1 - \dfrac{1}{\sqrt{ab}}\Bigl(1 - \dfrac{1}{\sqrt a + \sqrt b}\Bigr)$. [step 1.2, L2, algebra]

2.3 Here $\sqrt a \ge \sqrt 2 > 1$ and $\sqrt b \ge \sqrt 3 > 1$, so $\sqrt a + \sqrt b > 2$ and $1 - 1/(\sqrt a + \sqrt b) > 1/2$; and by [L5], $\sqrt{ab} \le (a+b)/2 = \iota(4i+5)/2$, so $1/\sqrt{ab} \ge 2/\iota(4i+5)$. [step 1.2, L2, L3, L5]

2.4 An induction gives $\Pi_{2n} = \prod_{i<n} P_i$ for every $n$: at $n = 0$ both are the empty product $1$, and $\Pi_{2(n+1)} = \Pi_{2n} f_{2n} f_{2n+1} = \Pi_{2n}P_n$. [step 1.2, L6, L7]

3.1 By the alternating series test $\sum_j p_j = \sum_j \varepsilon_j \beta_j$ converges. [step 2.1, L4]

3.2 Combining, $P_i \le 1 - \bigl(2/\iota(4i+5)\bigr)\cdot\tfrac12 = 1 - 1/\iota(4i+5) \le 1 - q_i$, where $q_i := 1/\iota(4i+6)$, using $\iota(4i+5) < \iota(4i+6)$; and $0 < P_i$ by step 1.1, while $0 < q_i < 1$. [step 1.1, step 2.2, step 2.3, L3]

4.1 Hence $0 < \Pi_{2n} = \prod_{i<n}P_i \le \prod_{i<n}(1 - q_i)$ for every $n$. [step 1.1, step 3.2, step 2.4, step 1.3]

4.2 The series $\sum_i q_i$ diverges: $6(i+1) = 6i+6 \ge 4i+6$, so $\iota(4i+6) \le 6\,\iota(i+1)$ and $q_i \ge \tfrac16\cdot\dfrac1{\iota(i+1)}$; the series $\sum_i \tfrac16 \cdot 1/\iota(i+1)$ diverges, being a nonzero multiple of the harmonic series, so $\sum_i q_i$ diverges by comparison. [step 3.2, L3, L9]

5.1 By [L8] applied to $(q_i)$, the partial products $\prod_{i<n}(1-q_i)$ tend to $0$; with step 4.1 and the squeeze, $\Pi_{2n} \to 0$. [step 4.1, step 4.2, L8, L10]

6.1 Also $\Pi_{2n+1} = \Pi_{2n} f_{2n}$ with $0 < f_{2n} < 2$, so $0 < \Pi_{2n+1} < 2\,\Pi_{2n}$ and $\Pi_{2n+1} \to 0$ as well. [step 1.1, step 5.1, L6, L10]

7.1 Therefore $\Pi_m \to 0$: given a rational $\varepsilon > 0$, choose $N$ with $\Pi_{2n} < \varepsilon/2$ for all $n \ge N$; then for $m \ge 2N+1$, writing $m$ as $2n$ or $2n+1$ according to the partition of $\mathbb{N}$ by the two index maps, in either case $n \ge N$ and $\Pi_m \le 2\Pi_{2n} < \varepsilon$. [step 1.1, step 5.1, step 6.1, L1]

8.1 For every $N'$ the $N'$-th tail products satisfy $\prod_{j=N'}^{N'+n-1}f_j = \Pi_{N'+n}/\Pi_{N'}$ with $\Pi_{N'} > 0$ fixed, so they tend to $0$ too; no tail has partial products with a nonzero limit, and $\prod_j (1+p_j)$ diverges. [step 1.1, step 7.1, L6, L11]

9.1 So $\sum_j p_j$ converges while $\prod_j (1+p_j)$ diverges, and the refuted claim fails; the hypothesis it is missing is a sign condition, or absolute convergence of $\sum p_j$, as in [[thm-infinite-product-criterion]]. [step 3.1, step 8.1, L8, L11] ∎

## Remarks

- **The pairing is what replaces the logarithm.** The classical argument writes $\log(1+p_j) = p_j - p_j^{2}/2 + \cdots$ and observes that $\sum p_j$ converges while $\sum p_j^{2}$ diverges, so the logarithms sum to $-\infty$. That expansion is not available at this point in the reading order. Pairing consecutive factors reproduces the same effect with one algebraic identity: the first-order terms cancel to size $1/(\sqrt{ab}(\sqrt a + \sqrt b))$, of order $i^{-3/2}$, while the cross term $-1/\sqrt{ab}$, of order $i^{-1}$, survives, and its sum diverges.

- **Absolute convergence would settle it the other way.** Here $\sum_j |p_j| = \sum_j 1/\sqrt{\iota(j+2)}$ diverges, so claim 4 of [[thm-infinite-product-criterion]] does not apply. That claim is exactly the hypothesis under which a signed product is safe.

- **The refinement that decides every case is deferred.** For signed $(p_j)$ with $\sum p_j$ convergent, the classical criterion is convergence of $\sum p_j^{2}$; for this witness $p_j^{2} = 1/\iota(j+2)$ and that series diverges, which is consistent with what is proved above. The criterion itself needs the logarithm and is recorded in [[rem-sums-proved-to-exist-but-not-evaluated]].
