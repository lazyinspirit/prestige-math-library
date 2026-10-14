---
id: ex-fishers-exact-test-from-two-binomial-samples
kind: example
title: "Fisher's exact test from two Bernoulli samples"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps:
  - def-conditional-test-given-statistic
  - thm-conditional-test-controls-unconditional-level
  - def-randomized-conditional-p-value
  - thm-conditional-randomized-p-uniformity
  - def-test-size-and-power
  - def-finite-probability-space-and-event
  - lem-finite-probability-basic-laws
  - def-conditional-probability
  - def-product-of-finite-probability-spaces
  - thm-product-probability-has-independent-coordinate-events
  - def-independence-of-finite-random-variables
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Berkeley Stat 210A Course Reader, Testing with Nuisance Parameters, Conditional testing section"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/testing-nuisance.html"
    - title: "George Deligiannidis, Foundations of Statistical Inference, Chapter 13, PDF pp. 77–78"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
---

## Example

Take two independent Bernoulli samples of sizes $n_1,n_2\ge1$ and test the one-sided alternative that the first success probability exceeds the second. Under the null, all $N=n_1+n_2$ trials have a common success probability $p\in[0,1]$. Let $K$ be the number of successes in the first sample and $S$ the total number in both samples. For every integer margin $s\in\{0,\ldots,N\}$, define the supplied conditional-law kernel $Q$ by
$$Q(s,\{k\})=\frac{\binom{n_1}{k}\binom{n_2}{s-k}}{\binom{N}{s}},\qquad \max(0,s-n_2)\le k\le\min(n_1,s),$$
and set $Q(s,\{k\})=0$ outside the displayed range. For each $s$, these weights sum to one because they count all $\binom Ns$ ways to choose the $s$ success positions according to how many lie in the first sample. At margins of positive probability this is the conditional law and it does not depend on $p$; at endpoint nulls $p=0,1$, the formula also supplies a version at the other, probability-zero margins. Large values of $K$ support the one-sided alternative that the first sample has a larger success probability. For $n_1=n_2=2$ and $s=2$, the conditional masses at $k=0,1,2$ are $1/6,4/6,1/6$; the inclusive upper-tail p-values are $1,5/6,1/6$.

## Facts & Assumptions

**Given:** Positive integers $n_1,n_2$, the null product Bernoulli model with common parameter $p$, the statistic $K$ conditioned on $S$, the supplied kernel $Q$ defined for every margin in the Example, and an auxiliary $U\sim\operatorname{Unif}[0,1]$ independent of all trials.

[F1] A product of finite probability spaces assigns a sequence the product of its coordinate weights. [[def-product-of-finite-probability-spaces]]

[F2] Product weights normalize and the coordinate trials are independent. [[thm-product-probability-has-independent-coordinate-events]], [[def-independence-of-finite-random-variables]]

[F3] For an event of positive probability, conditional probability is the ratio of the joint event probability to the conditioning-event probability. [[def-conditional-probability]]

[F4] The nonrandomized conditional upper-tail value uses the inclusive tail; the randomized value uses the strict tail plus an independent uniform fraction of the tie mass. [[def-randomized-conditional-p-value]]

[F5] For each fixed null value $p$, under the supplied kernel the randomized upper-tail value is conditionally uniform and the inclusive value is conditionally superuniform. [[thm-conditional-randomized-p-uniformity]]

[F6] A test has unconditional size equal to the supremum of its null rejection expectations; conditional level at most $\alpha$ implies unconditional level at most $\alpha$. [[def-test-size-and-power]], [[thm-conditional-test-controls-unconditional-level]]

## Verification

1.1 Write $\Omega=\{0,1\}^{N}$ and give each coordinate the two-point Bernoulli$(p)$ law. By [F1], a sequence with $s$ ones has weight $p^s(1-p)^{N-s}$; the product weights sum to $(p+(1-p))^N=1$, and [F2] gives the independent-trial model. For $0<p<1$, every sequence with $S=s$ has the same positive weight. [F1, F2, given, algebra]

2.1 There are $\binom{N}{s}$ sequences with $s$ successes. Exactly $\binom{n_1}{k}\binom{n_2}{s-k}$ of them have $K=k$: choose $k$ of the first $n_1$ positions and $s-k$ of the other $n_2$. These counts partition all size-$s$ subsets, so the displayed kernel weights sum to one for every $s$, and when $P_p(S=s)>0$, dividing by the total count using [F3] gives the conditional mass; the feasible range is precisely where both binomial coefficients are nonzero. At $p=0$ only $S=0$ occurs and $K=0$; at $p=1$ only $S=N$ occurs and $K=n_1$, so the supplied kernel has the required conditional law on the realized margin. At the other, probability-zero margins the same formula is simply the chosen kernel extension. [F1, F3, step 1.1, given, construct, algebra]

3.1 For $n_1=n_2=2$ and $s=2$, the feasible values are $k=0,1,2$, with counts $1,4,1$ among the six two-success sequences. Their probabilities are therefore $1/6,4/6,1/6$. Summing the masses at or above each observed value gives inclusive p-values $1,5/6,1/6$. The strict-tail-plus-tie formulas are respectively $5/6+U/6$, $1/6+2U/3$, and $U/6$; their intervals $[5/6,1]$, $[1/6,5/6]$, and $[0,1/6]$ have lengths matching the three conditional masses. [F3, F4, step 2.1, given, algebra]

4.1 For each margin $s$ with $P_p(S=s)>0$, [F5] makes the nonrandomized p-value conditionally superuniform and the randomized value conditionally uniform under the null. Rejecting when the nonrandomized value is at most $\alpha$ is therefore a conditional level-$\alpha$ test, so [F6] gives unconditional size at most $\alpha$. The test function of the randomized rule is $\varphi_\alpha(x)=P_U(p_U(x,U)\le\alpha)$; it is measurable because the sample space is finite. By finite conditioning and independence of $U$, $E_p[\varphi_\alpha(X)\mid S=s]=P_p(p_U\le\alpha\mid S=s)=\alpha$, so the randomized rule has conditional and unconditional size exactly $\alpha$. At $p=0$ and $p=1$ the only observed margin has a degenerate conditional law; its inclusive value is $1$ and its randomized value is $U$, so the same validity conclusions hold. [F3, F5, F6, step 2.1, step 3.1, given] ∎
