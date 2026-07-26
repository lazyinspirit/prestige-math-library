---
id: lem-cauchy-with-convergent-subsequence
kind: lemma
title: "A Cauchy sequence with a convergent subsequence converges, to that subsequence’s limit"
status: published
origin: session
deps: [def-real-limit, def-sequence, def-subsequential-limit, lem-index-map-grows, lem-of-triangle-inequality, lem-rat-embeds-dense, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.11(b))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.4"
      url: "https://www.jirka.org/ra/"
---

## Statement

Let $(x_k)$ be a Cauchy sequence of reals ([[def-real-limit]]) and suppose some
subsequence $(x_{n_j})$ converges to $L \in \mathbb{R}$, that is, $L$ is a
subsequential limit of $(x_k)$ ([[def-subsequential-limit]]). Then the whole
sequence $(x_k)$ converges, and its limit is $L$.

So for a Cauchy sequence a single convergent subsequence already determines the
behaviour of the sequence. This is exactly the step that upgrades
Bolzano-Weierstrass into Cauchy completeness in
the Cauchy criterion later on this page, and it is false without the Cauchy
hypothesis.

## Facts & Assumptions

**Given:** A Cauchy sequence $(x_k)$ of reals, a strictly increasing $n : \mathbb{N} \to \mathbb{N}$, and $L \in \mathbb{R}$ with $x_{n_j} \to L$.

[A1] Cauchy condition: for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$ ([[def-real-limit]]).

[A2] Convergence of the subsequence: for every rational $\varepsilon > 0$ there is $J$ with $|x_{n_j} - L| < \varepsilon$ for all $j \ge J$ ([[def-real-limit]], [[def-subsequential-limit]], [[def-sequence]]).

[L1] Triangle inequality: $|x - L| = |(x - y) + (y - L)| \le |x - y| + |y - L|$ ([[lem-of-triangle-inequality]]).

[L2] Growth of an index map: a strictly increasing $n$ satisfies $n_j \ge j$ for every $j$ ([[lem-index-map-grows]]).

[L3] Halving a rational: if $\varepsilon$ is a positive rational then so is $\varepsilon/2$, and the embedding of $\mathbb{Q}$ in $\mathbb{R}$ is a field embedding, so the image of $\varepsilon/2$ is half the image of $\varepsilon$ and the two halves sum to $\varepsilon$ ([[lem-rat-embeds-dense]]).

[L4] The order on $\mathbb{N}$ is total and transitive, so two indices $J, K$ admit an index $j$ with $j \ge J$ and $j \ge K$ ([[thm-nat-linear-order]]).

[L5] Convergence: $(x_k)$ converges to $L$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - L| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be an arbitrary rational; then $\varepsilon/2$ is again a positive rational, and $\varepsilon/2 + \varepsilon/2 = \varepsilon$. [given, L3]

2.1 By [A1] applied to $\varepsilon/2$, fix $K \in \mathbb{N}$ with $|x_k - x_l| < \varepsilon/2$ for all $k, l \ge K$. [step 1.1, A1, choose]

2.2 By [A2] applied to $\varepsilon/2$, fix $J \in \mathbb{N}$ with $|x_{n_j} - L| < \varepsilon/2$ for all $j \ge J$. [step 1.1, A2, choose]

3.1 Fix a single index $j$ with $j \ge J$ and $j \ge K$; then $n_j \ge j \ge K$, so the term $x_{n_j}$ is simultaneously within $\varepsilon/2$ of $L$ and within $\varepsilon/2$ of every $x_k$ with $k \ge K$. [step 2.1, step 2.2, L2, L4, choose]

4.1 For every $k \ge K$: $|x_k - L| \le |x_k - x_{n_j}| + |x_{n_j} - L| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 2.1, step 2.2, step 3.1, L1]

5.1 The rational $\varepsilon > 0$ was arbitrary and an index $K$ was produced for it, so $(x_k)$ converges to $L$. [step 4.1, L5] ∎

## Remarks

- **The Cauchy hypothesis is doing all the work.** Without it a convergent
  subsequence says nothing at all about the sequence, which is
  [[fs-subsequence-convergence-implies-convergence]]; the alternating sequence
  has a constant, hence convergent, subsequence and does not converge. What the
  Cauchy condition adds is that the terms are eventually close to *each other*,
  so being close to $L$ at one late index propagates to all late indices.

- **The single index $j$ chosen in step 3.1 is the whole trick.** It is used
  once, as a bridge, and is not required to grow with $k$; this is why $n_j \ge j$
  ([[lem-index-map-grows]]) is needed only to know that some subsequence index
  lies beyond $K$.

- **The limit is forced to be $L$, not merely to exist.** Combined with
  uniqueness of limits ([[lem-limit-unique]]), this says that a Cauchy sequence
  has at most one subsequential limit, so for Cauchy sequences the subsequential
  limit set ([[def-subsequential-limit]]) is empty or a single point, and
  [[thm-cauchy-criterion-via-lub]] rules out the empty case in $\mathbb{R}$.
