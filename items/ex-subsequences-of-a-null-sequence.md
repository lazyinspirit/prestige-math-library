---
id: ex-subsequences-of-a-null-sequence
kind: example
title: "Even and odd subsequences of $1/(k+1)$ converge to $0$"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-the-reciprocal-of-k-plus-one-is-null, lem-subsequence-inherits-limit, fs-bounded-implies-convergent, lem-index-map-grows, lem-nat-discrete, def-sequence, def-real-limit]
justified_by: []
aliases: []
landmark: false
dependency_level: 4
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes, 307 pp.)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§3.8 Proposition 3.50 and its complete proof, printed p. 58: every subsequence inherits the limit of a convergent sequence. The index-growth prerequisite is proved locally in lem-index-map-grows."
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§2.1.3 Proposition 2.1.17 and its proof, printed p. 58: subsequences inherit limits; §2.1.4 Exercises 2.1.14 and 2.1.16, printed pp. 59-60: subsequences of (-1)^n and divergence of a parent sequence with two different subsequential limits."
---

## Example

Let $(x_k)$ be the null sequence of
[[ex-the-reciprocal-of-k-plus-one-is-null]], let $n : \mathbb{N} \to
\mathbb{N}$ be the even strictly increasing index map constructed in
[[fs-bounded-implies-convergent]], and let $m_j := \sigma(n_j)$ be its
successor, the odd index map. Then the subsequences $x_{n_j}$ and $x_{m_j}$
both converge to $0$
([[lem-subsequence-inherits-limit]]): removing infinitely many indices from
this already convergent sequence, even all odd ones, preserves its inherited
limit. A convergent subsequence of a divergent sequence can exist, so no
converse is asserted, and by [[lem-index-map-grows]] the index maps satisfy
$n_j \ge j$ and $m_j \ge j$, so the subsequences are genuine thinnings of the
sequence.

## Facts & Assumptions

**Given:** The null sequence $x_k := (k+1)^{-1}$ ([[def-sequence]]), the index map $n$ with $n_0 = 0$ and $n_{\sigma(j)} = \sigma(\sigma(n_j))$ constructed in [[fs-bounded-implies-convergent]], and the successor map $m_j := \sigma(n_j)$.

[F1] $(x_k)$ converges to $0$ ([[ex-the-reciprocal-of-k-plus-one-is-null]]).

[F2] The map $n$ satisfies $n_0 = 0$, $n_{\sigma(j)} = \sigma(\sigma(n_j))$ for every $j$, and $n$ is strictly increasing ([[fs-bounded-implies-convergent]]).

[F3] Subsequences inherit limits: if $(z_k)$ converges to $z$ and $p : \mathbb{N} \to \mathbb{N}$ is strictly increasing, then $(z_{p_j})$ converges to $z$ ([[lem-subsequence-inherits-limit]]).

[F4] Growth of index maps: if $p$ is strictly increasing then $p_j \ge j$ for every $j$ ([[lem-index-map-grows]]).

[F5] Consecutive comparisons suffice for strict increase: if $p_i < p_{\sigma(i)}$ for every $i$, then $p$ is strictly increasing ([[lem-index-map-grows]]).

[F6] Strictly increasing means $p_i < p_j$ whenever $i < j$ ([[def-sequence]]).

[F7] Discreteness: for naturals $a, b$, $a < b \iff \sigma(a) \le b$ ([[lem-nat-discrete]]).

## Verification

**Proof technique:** direct.

1.1 $(x_k)$ converges to $0$ and $n$ is strictly increasing. [given, F1, F2]

1.2 For every $j$ one has $m_j = \sigma(n_j) = n_j + 1$, so $m$ is strictly increasing: from $n_j < n_{\sigma(j)}$ and [F7] we get $m_j = \sigma(n_j) \le n_{\sigma(j)} < \sigma(n_{\sigma(j)}) = m_{\sigma(j)}$, that is $m_j < m_{\sigma(j)}$ at every $j$, so [F5] applies. [given, F2, F5, F7]

2.1 The subsequence along $n$ converges to $0$: [F3] applied to step 1.1 gives $x_{n_j} \to 0$. [step 1.1, F3]

2.2 The subsequence along $m$ converges to $0$: [F3] applied to step 1.1 and the strict increase of step 1.2 gives $x_{m_j} \to 0$. [step 1.1, step 1.2, F3]

3.1 Both index maps grow at least like the identity: $n_j \ge j$ by [F4] applied to the strict increase of $n$ in step 1.1, and $m_j \ge j$ by [F4] applied to the strict increase of $m$ in step 1.2. Hence the even and odd subsequences of [F6] are genuine thinnings of $(x_k)$ and both converge to the inherited limit $0$. [step 1.1, step 1.2, step 2.1, step 2.2, F4, F6] ∎
