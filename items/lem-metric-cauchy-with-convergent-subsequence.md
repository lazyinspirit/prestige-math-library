---
id: lem-metric-cauchy-with-convergent-subsequence
kind: lemma
title: "A Cauchy sequence in a metric space with a convergent subsequence converges to that subsequence’s limit"
status: published
origin: session
deps: [def-cauchy-in-metric, def-metric-convergence, def-subsequential-limit,
       lem-index-map-grows, def-metric-space, lem-finite-set-has-max, def-max-min,
       lem-rat-embeds-dense]
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
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $(x_k)$ be a Cauchy
sequence in $X$ ([[def-cauchy-in-metric]]), and suppose some subsequence
$(x_{n_j})$ converges to $p \in X$, that is $p$ is a subsequential limit of
$(x_k)$ in $(X,d)$ ([[def-metric-convergence]], [[def-subsequential-limit]]).
Then the whole sequence converges to $p$.

In particular a Cauchy sequence has at most one subsequential limit, and it has
one exactly when it converges.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a Cauchy sequence $(x_k)$ in $X$, a strictly increasing $n : \mathbb{N} \to \mathbb{N}$, a point $p \in X$ with $x_{n_j} \to p$, and a real $\varepsilon > 0$.

[A1] Cauchyness: for every real $\eta > 0$ there is $K_1$ with $d(x_m,x_l) < \eta$ for all $m,l \ge K_1$ ([[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).

[A2] Convergence of the subsequence: for every real $\eta > 0$ there is $K_2$ with $d(x_{n_j}, p) < \eta$ for all $j \ge K_2$ ([[def-metric-convergence]], [[lem-rat-embeds-dense]]).

[L1] A strictly increasing index map satisfies $n_j \ge j$ for every $j$ ([[lem-index-map-grows]]).

[L2] Triangle inequality (M3) of a metric ([[def-metric-space]]).

[L3] Two naturals have a maximum, which is one of them and is at least each of them ([[lem-finite-set-has-max]], [[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 Apply [A1] with $\eta = \varepsilon/2$ to get $K_1$ with $d(x_m,x_l) < \varepsilon/2$ for all $m,l \ge K_1$, and [A2] with $\eta = \varepsilon/2$ to get $K_2$ with $d(x_{n_j},p) < \varepsilon/2$ for all $j \ge K_2$. [A1, A2, algebra]

1.2 Put $K := \max\{K_1, K_2\}$, so $K \ge K_1$ and $K \ge K_2$. [L3, choose]

2.1 The index $n_K$ satisfies $n_K \ge K \ge K_1$, and $K \ge K_2$, so $d(x_{n_K}, p) < \varepsilon/2$. [step 1.1, step 1.2, L1]

3.1 Let $k \ge K$. Then $k \ge K_1$ and $n_K \ge K_1$, so $d(x_k, x_{n_K}) < \varepsilon/2$, and therefore $d(x_k,p) \le d(x_k, x_{n_K}) + d(x_{n_K}, p) < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 1.1, step 1.2, step 2.1, L1, L2, algebra]

4.1 Since $\varepsilon > 0$ was an arbitrary real, $x_k \to p$ in $(X,d)$. [step 3.1, A2] ∎

## Remarks

- **Where $n_j \ge j$ is used.** In step 2.1, and quoted again in step 3.1, and both places matter: it puts the single chosen subsequence term $x_{n_K}$ beyond the Cauchy index $K_1$, and it is what lets one index $K$ control the subsequence and the sequence at once. Without it the subsequence could in principle look only at small indices, and the Cauchy hypothesis would never be reached.
- **Only one term of the subsequence is used.** The proof does not pass to the limit along the subsequence; it fixes the single index $n_K$ and routes every later term of the whole sequence through it. That is why no further hypothesis on the subsequence is needed.
- **This is the lemma that turns compactness into completeness.** A space in which every sequence has a convergent subsequence is complete ([[def-complete-metric-space]]) by this lemma alone, applied to a Cauchy sequence. The converse is **false**, not merely harder: $\mathbb{R}$ is complete ([[thm-euclidean-space-complete]]) and the sequence $x_k = k$ has no convergent subsequence, its terms being at pairwise distance at least $1$ so that no subsequence is Cauchy. What does hold is that a complete space in which every sequence has a convergent subsequence is exactly a complete and totally bounded one, and total boundedness is a later page of this library.
