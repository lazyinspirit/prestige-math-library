---
id: ex-a-random-series-that-converges-conditionally-almost-surely
title: "Almost-sure conditional convergence"
kind: example
status: published
origin: pipeline
deps: ["thm-kolmogorov-three-series-theorem", "cor-countable-independent-copies-exist", "thm-p-series-real-exponents", "thm-alternating-series-test"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Example 2.5.7, p. 85"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Examples 5.1 and 5.3, pp. 1\u20132"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf
proof_strategy: "Apply three-series at A=1 and the p-series criterion separately to the squares and absolute values; no dependency on a generated example. Inline contrast: the deterministic harmonic series diverges, whereas its alternating version converges by the published alternating-series test."
---

## Example

Assume countable choice and dependent choice. On a probability space carrying independent fair signs $\epsilon_n\in\{-1,1\}$, the random harmonic series $\sum_{n\ge1}\epsilon_n/n$ converges almost surely, but $\sum_{n\ge1}|\epsilon_n/n|$ diverges at every sample point. By comparison the deterministic harmonic series diverges and its alternating version converges.

## Facts & Assumptions

[F1] [[thm-kolmogorov-three-series-theorem]]: Let $(X_n)_{n\ge1}$ be independent real random variables and fix $A>0$. Put $Y_n=X_n\mathbf1_{\{|X_n|\le A\}}$. Then $\sum_nX_n$ converges almost surely if and only if all three conditions hold: $\sum_n\mathbb P(|X_n|>A)<\infty,\qquad \sum_n\mathbb EY_n\text{ converges in }\mathbb R,\qquad \sum_n\operatorname{Var}(Y_n)<\infty.$ The conditions hold for some $A>0$ if and only if they hold for every $A>0$. No moment assumption is imposed on the untruncated variables.

[F2] [[cor-countable-independent-copies-exist]]: Assume countable choice and dependent choice. Every probability measure $\nu$ on $(S,\Sigma)$ is the common law of a countable independent family of $S$-valued random elements.

[F3] [[thm-p-series-real-exponents]]: For every real $p$, $\sum_{k\ge1}\frac1{k^p}\text{ converges}\quad\Longleftrightarrow\quad p>1.$

[F4] [[thm-alternating-series-test]]: Let $(\varepsilon_k)$ be the alternating sequence of lem-alternating-sequence, that is the unique sequence of reals with $\varepsilon_0 = 1$ and $\varepsilon_{k+1} = -\varepsilon_k$, which is what is usually written $\varepsilon_k = (-1)^k$; let $e$ and $o$ be its even and odd index maps, so that $\varepsilon_{e_j} = 1$, $\varepsilon_{o_j} = -1$, and every natural number is $e_j$ for exactly one $j$ or $o_j$ for exactly one $j$. Let $(b_k)$ be a sequence of reals that is nonincreasing (def-monotone-sequence) and converges to $0$ (def-real-limit); then $b_k \ge 0$ for every $k$. Write $t_n := \sum_{k<n} \varepsilon_k b_k$ for the partial sums (def-series). Then: 1. the series $\sum \varepsilon_k b_k$ converges; write $L$ for its sum; 2. $t_{e_j} \le L \le t_{o_j}$ for every $j \in \mathbb{N}$, and for every $n \in \mathbb{N}$ the sum $L$ lies between the two consecutive partial sums $t_n$ and $t_{n+1}$; 3. $|L - t_n| \le b_n$ for every $n \in \mathbb{N}$. Claim 3 is the error bound: the partial sum $t_n$, which uses the $n$ terms $\varepsilon_0 b_0, \dots, \varepsilon_{n-1}b_{n-1}$, differs from the sum by at most the first term omitted. **Only claim 1 is a corollary of thm-dirichlet-test.** Claims 2 and 3 are not: they come from the interlacing of the even-index and odd-index partial sums, and that argument is carried out below rather than smuggled into the Dirichlet estimate, which produces no bracketing at all.

## Verification

**Given:** The construction and assumptions above.

1.1 Under countable choice and dependent choice, use the countable-copy theorem for the fair law on $\{-1,1\}$. At cutoff $A=1$, all summands $X_n=\epsilon_n/n$ are retained, including the first one. Their means are zero and their variances are $1/n^2$, whose sum is finite. Three-series therefore gives almost-sure convergence. [F2, F3, F1, given, algebra]

2.1 At every point $|\epsilon_n/n|=1/n$, and the harmonic p-series diverges. Thus on the probability-one convergence event the convergence is conditional. The same p-series test gives deterministic harmonic divergence. Apply the zero-based alternating-series test with $b_k=1/(k+1)$ to obtain convergence of $\sum_{n\ge1}(-1)^{n-1}/n$; $b_k$ decreases to zero and is nonnegative. [F3, F4, step 1.1, algebra] ∎
