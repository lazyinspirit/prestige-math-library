---
id: lem-null-ideal
kind: lemma
title: "Null sequences form an ideal"
status: published
origin: session
deps: [def-null-sequence, thm-cauchy-ring, lem-cauchy-bounded, lem-rat-triangle, lem-null-is-cauchy]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

The set $\mathcal{N}$ of null sequences is an ideal of the ring
$\mathcal{C}$ of Cauchy sequences ([[thm-cauchy-ring]]): it is a subgroup
under addition, and $c \cdot z \in \mathcal{N}$ whenever
$c \in \mathcal{C}$ and $z \in \mathcal{N}$.

## Facts & Assumptions

**Given:** Null sequences $(z_n), (w_n)$, a Cauchy sequence $(c_n)$, and a rational $\varepsilon > 0$.

[A1] Null: beyond some index, $|z_n|$ is smaller than any prescribed positive rational.

[L1] Ordered-field arithmetic in $\mathbb{Q}$ ([[thm-rat-ordered-field]]).

[L2] Triangle inequality and multiplicativity of $|\cdot|$ ([[lem-rat-triangle]]).

[L3] Cauchy sequences are bounded ([[lem-cauchy-bounded]]).

[L4] Null sequences are Cauchy, so $\mathcal{N} \subseteq \mathcal{C}$ ([[lem-null-is-cauchy]]).

## Proof

**Proof technique:** direct.

1.1 Fix $N_z, N_w$ with $|z_n| < \varepsilon/2$ for $n \ge N_z$ and $|w_n| < \varepsilon/2$ for $n \ge N_w$. [A1, L1]

1.2 Fix $M \ge 0$ with $|c_n| \le M$ ([L3]) and set $B = \max(M, 1) \ge 1$, so $|c_n| \le B$ for all $n$. [L3]

2.1 Sum: for $n \ge \max(N_z, N_w)$, $|z_n + w_n| \le |z_n| + |w_n| < \varepsilon$; negation: $|-z_n| = |z_n|$. So $\mathcal{N}$ is a subgroup under addition. [step 1.1, L2]

2.2 Fix $N$ with $|z_n| < \varepsilon/B$ for $n \ge N$. [step 1.2, A1, L1]

3.1 Product: for $n \ge N$, $|c_n z_n| = |c_n|\,|z_n| \le B\,|z_n| < \varepsilon$; so $(c_n z_n)$ is null. [step 1.2, step 2.2, L2]

4.1 $\mathcal{N}$ is a nonempty additive subgroup of $\mathcal{C}$ absorbing multiplication by $\mathcal{C}$: an ideal. [step 2.1, step 3.1, L4] ∎
