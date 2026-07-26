---
id: cor-ratio-test-is-kummer-with-constant-weights
kind: corollary
title: "Kummer with $\\zeta_k = 1$ recovers the ratio test"
status: published
origin: session
deps: [thm-kummer-test, thm-ratio-test, def-series, def-limsup-liminf, lem-limsup-exists, lem-extended-reals-complete, def-extended-reals, lem-nth-term-test, lem-of-inverse-positive, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
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
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k > 0$ for every $k \in \mathbb{N}$,
and put $q_k := a_{k+1}/a_k$, which is the ratio family of [[thm-ratio-test]]
since $|a_k| = a_k$ here. Take the constant weights $\zeta_k := 1$, so that
Kummer's expression ([[thm-kummer-test]]) is

$$K_k \;=\; \frac{a_k}{a_{k+1}} - 1 \qquad (k \in \mathbb{N}) .$$

Then:

1. if $\limsup_{k} q_k < 1$ then $\liminf_{k} K_k > 0$, so Kummer's convergence
   criterion applies and yields convergence of $\sum a_k$;
2. if $\liminf_{k} q_k > 1$ then $\sum 1/\zeta_k$ diverges and $K_k \le 0$ from
   some index on, so Kummer's divergence criterion applies and yields divergence
   of $\sum a_k$.

Both conclusions are exactly those of [[thm-ratio-test]] for a sequence of
positive terms. So the ratio test is the constant-weight case of Kummer's test,
and every strengthening of Kummer's test by a better choice of weights is a
strengthening of the ratio test.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$; the ratios $q_k = a_{k+1}/a_k$, which are positive; the constant weights $\zeta_k = 1$; and Kummer's expression $K_k = a_k/a_{k+1} - 1$ ([[thm-kummer-test]], [[def-limsup-liminf]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound there ([[lem-extended-reals-complete]], [[def-extended-reals]]); $\limsup_k x_k = \inf\{s_n\}$ and $\liminf_k x_k = \sup\{i_n\}$ with $s_n, i_n$ the tail bounds, and both exist for every sequence ([[def-limsup-liminf]], [[lem-limsup-exists]]).

[L2] Kummer's test, in both halves, for positive terms and positive weights ([[thm-kummer-test]]).

[L3] Reciprocation on the positives: $0 < x < y$ implies $0 < 1/y < 1/x$ ([[lem-of-inverse-positive]]).

[L4] A series whose terms do not tend to $0$ diverges ([[lem-nth-term-test]]).

[L5] For positive terms $|a_k| = a_k$, so the ratio family of [[thm-ratio-test]] is the family $q_k$ above ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 The constant weights $\zeta_k = 1$ are positive, and the terms $a_k$ are positive, so Kummer's test applies with these data and its expression is $K_k = a_k/a_{k+1} - 1$. [given, L2]

1.2 Each $q_k$ is positive, so $\limsup_k q_k \ge 0$, every tail supremum being at least $q_n > 0$. [given, L1]

1.3 Suppose instead $\liminf_k q_k > 1$. The real $1$ is not an upper bound of $\{i'_n\}$, the tail infima of $(q_k)$, so there is $N$ with $i'_N > 1$, and then $q_k \ge i'_N > 1$ for every $k \ge N$. [given, L1, choose]

1.4 The weight series $\sum 1/\zeta_k$ is $\sum 1$, whose terms are constantly $1$ and so do not tend to $0$; it diverges. [given, L4]

2.1 Suppose $\limsup_k q_k < 1$. Then $\Lambda := \limsup_k q_k$ lies between the reals $0$ and $1$ and is therefore real; put $t := (\Lambda+1)/2$, so that $\Lambda < t < 1$ and $t \ge 1/2 > 0$. [step 1.2, L1, choose]

2.2 For $k \ge N$: $a_{k+1}/a_k > 1$ gives $a_{k+1} > a_k > 0$, hence $a_k/a_{k+1} < 1$, hence $K_k < 0$ and in particular $K_k \le 0$. [step 1.3, L3, algebra]

3.1 Since $t > \inf\{s_n\}$, the real $t$ is not a lower bound of $\{s_n\}$, so there is $N$ with $s_N < t$, and then $q_k \le s_N < t$ for every $k \ge N$. [step 2.1, L1, choose]

3.2 Kummer's divergence criterion therefore applies and $\sum a_k$ diverges, which is claim 2. [step 2.2, step 1.4, step 1.1, L2]

4.1 For $k \ge N$: $0 < a_{k+1}/a_k < t$, so $a_k/a_{k+1} > 1/t$, and hence $K_k = a_k/a_{k+1} - 1 > 1/t - 1 =: c$, where $c > 0$ because $0 < t < 1$ gives $1/t > 1$. [step 3.1, L3, algebra]

5.1 So $c$ is a lower bound of $\{K_k : k \ge N\}$, whence $i_N \ge c$ and $\liminf_k K_k = \sup\{i_n\} \ge i_N \ge c > 0$. [step 4.1, L1]

6.1 Kummer's convergence criterion therefore applies and $\sum a_k$ converges, which is claim 1. [step 5.1, step 1.1, L2]

7.1 The hypotheses in claims 1 and 2 are precisely those of the two halves of the ratio test for this sequence, and the conclusions agree, so the ratio test for positive terms is the case $\zeta_k = 1$ of Kummer's test. [step 6.1, step 3.2, L5] ∎

## Remarks

- **What this corollary is for.** It is not a new criterion. It fixes the place of the ratio test inside the Kummer family, so that the later choices of weights on this page can be read as improvements on a known test rather than as unrelated criteria.

- **The ratio test proved earlier is more general in one respect.** It allows terms of either sign, provided none vanishes, and concludes convergence of $\sum |a_k|$. Kummer's test needs positivity throughout, so the identification above is between the positive-term case of the ratio test and the constant-weight case of Kummer's test, and it says nothing about signed terms.
