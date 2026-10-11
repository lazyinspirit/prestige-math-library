---
id: ex-changing-finitely-many-terms
kind: example
title: "Changing the first hundred terms leaves convergence to $0$ and boundedness intact"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-limit-of-tail, ex-the-reciprocal-of-k-plus-one-is-null, lem-nat-discrete, lem-of-naturals-positive, prop-of-reciprocal-order, lem-of-inverse-positive, def-abs-value, def-sequence, def-real-limit, thm-nat-linear-order, def-nat-order, def-nat-addition, def-ordered-field]
justified_by: []
aliases: []
landmark: false
dependency_level: 2
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
      locator: "§3.3 tail discussion and Example 3.20 (printed pp. 43-44): convergence and boundedness depend only on the tail, with the first hundred terms changed"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§2.1.4 Exercise 2.1.19, printed p. 60: an eventually constant sequence converges to that constant."
---

## Example

Let $u_k := (k+1)^{-1}$ and let $(x_k)$ be $u$ modified in its first hundred
terms: $x_k := k+1$ for $k < 100$ and $x_k := (k+1)^{-1}$ for $k \ge 100$. Then
$x_k \to 0$ and $(x_k)$ is bounded, indeed $|x_k| \le 100$ for every $k$
([[def-sequence]], [[def-real-limit]]). The initial block is arbitrary
prescribed data: convergence depends only on the tail ([[lem-limit-of-tail]]),
while the bound is read off the finite block and the tail separately. This is
the worked form of the tail theorem.

## Facts & Assumptions

**Given:** The sequence $u_k := (k+1)^{-1}$ of [[ex-the-reciprocal-of-k-plus-one-is-null]] and the sequence $x_k := k+1$ for $k < 100$, $x_k := (k+1)^{-1}$ for $k \ge 100$, where $k+1 = \sigma(k)$ and $100$ are read in $\mathbb{R}$ through the canonical-natural embedding ([[def-sequence]], [[lem-of-naturals-positive]]).

[F2] Tails and convergence: $(x_k)$ converges to $x$ if and only if every tail $x^{(K)}$ converges to $x$; consequently, if two sequences agree from some index on, then either both converge to $x$ or neither does ([[lem-limit-of-tail]]).

[F3] The reference null sequence: $u_k = (k+1)^{-1}$ converges to $0$, with every term positive ([[ex-the-reciprocal-of-k-plus-one-is-null]]).

[F4] Discreteness: for all naturals $m, n$, $m < n \iff \sigma(m) \le n$, so there is no natural strictly between $n$ and $\sigma(n)$ ([[lem-nat-discrete]], [[def-nat-order]]).

[F5] Canonical naturals: for every $n \ge 1$ the element $n \cdot 1_{\mathbb{R}}$ is positive, and $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing on $\{1, 2, 3, \dots\}$, hence preserves non-strict order there; in particular $1 \le 100$ and every $k+1 \ge 1$ maps to a positive real ([[lem-of-naturals-positive]]).

[F6] Reciprocals against $1$: for $r > 0$ one has $r \ge 1 \iff 0 < r^{-1} \le 1$, and $r = 1 \iff r^{-1} = 1$ ([[prop-of-reciprocal-order]]).

[F7] Inverses of positives are positive: $a > 0$ implies $a^{-1} > 0$ ([[lem-of-inverse-positive]]).

[F8] Absolute value: $|u| = u$ whenever $u \ge 0$ ([[def-abs-value]]).

[F9] Boundedness: $(z_k)$ is bounded when there is a real $M$ with $|z_k| \le M$ for every $k \in \mathbb{N}$ ([[def-sequence]]).

[F10] The order on $\mathbb{N}$ is total: for all naturals $m, n$ exactly one of $m < n$, $m = n$, $n < m$ holds ([[thm-nat-linear-order]]).

## Verification

**Proof technique:** direct.

1.1 For every $k \ge 100$ the second clause of the definition of $(x_k)$ gives $x_k = (k+1)^{-1} = u_k$, so $(x_k)$ and $(u_k)$ agree from index $100$ on. [given]

2.1 By [F3] the sequence $(u_k)$ converges to $0$; by the agreement clause of [F2] the sequence $(x_k)$ converges to $0$ as well. [step 1.1, F2, F3]

2.2 For $k < 100$: discreteness [F4] gives $k + 1 = \sigma(k) \le 100$, and $k + 1 \ge 1$, so the real $x_k = k+1$ satisfies $1 \le x_k \le 100$ by [F5] and is positive; hence $|x_k| = x_k \le 100$ by [F8]. [step 1.1, F4, F5, F8]

2.3 For $k \ge 100$: the real $k + 1$ satisfies $k+1 \ge 100 \ge 1$, so it is positive with $(k+1)^{-1} \le 1$ by [F6] and $(k+1)^{-1} > 0$ by [F7]; since $1 \le 100$ by [F5], transitivity gives $0 < x_k \le 100$, hence $|x_k| = x_k \le 100$ by [F8]. [step 1.1, F5, F6, F7, F8]

3.1 Every natural $k$ satisfies $k < 100$ or $k \ge 100$ by totality [F10], and steps 2.2 and 2.3 give $|x_k| \le 100$ in the two cases; so $100$ is a bound in the sense of [F9] and $(x_k)$ is bounded. With step 2.1 this shows that changing the first hundred terms leaves both convergence to $0$ and boundedness, with the explicit bound $100$. [step 2.1, step 2.2, step 2.3, F9, F10] ∎
