---
id: lem-subsequence-inherits-limit
kind: lemma
title: "Subsequences inherit the limit"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sequence, def-real-limit, lem-index-map-grows, lem-limit-unique, thm-nat-linear-order, def-nat-order]
justified_by: []
aliases: []
landmark: true
short: "subsequences keep the limit"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]), and let $n : \mathbb{N} \to \mathbb{N}$
be strictly increasing. Then the subsequence $(x_{n_k})$ converges to $x$.

**Divergence test.** Consequently, if two subsequences of $(x_k)$ converge to
different limits, then $(x_k)$ does not converge.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals converging to a real $x$, and a strictly increasing $n : \mathbb{N} \to \mathbb{N}$, so that $(x_{n_k})$ is a subsequence of $(x_k)$ ([[def-sequence]], [[def-real-limit]]).

[L1] $(x_k)$ converges to $x$ when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x| < \hat\varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[L2] Growth of the index map: $n_k \ge k$ for every $k$ ([[lem-index-map-grows]]).

[L3] The order on $\mathbb{N}$ is transitive, so $n_k \ge k \ge K$ gives $n_k \ge K$ ([[thm-nat-linear-order]], [[def-nat-order]]).

[L4] A sequence has at most one limit ([[lem-limit-unique]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be rational. By convergence of $(x_k)$ there is $K \in \mathbb{N}$ with $|x_j - x| < \varepsilon$ for every $j \ge K$. [L1]

2.1 For every $k \ge K$ we have $n_k \ge k \ge K$, so the estimate of step 1.1 applies at the index $j = n_k$ and gives $|x_{n_k} - x| < \varepsilon$. [step 1.1, L2, L3]

3.1 Since the rational $\varepsilon > 0$ was arbitrary, and the same threshold $K$ served, $(x_{n_k})$ converges to $x$. [step 2.1, L1]

4.1 Divergence test: suppose subsequences $(x_{n_k})$ and $(x_{m_k})$ converge to $a$ and $b$ with $a \ne b$. If $(x_k)$ converged, to $x$ say, then by step 3.1 both subsequences would converge to $x$, and uniqueness of limits would force $a = x$ and $b = x$, hence $a = b$, contrary to hypothesis; so $(x_k)$ does not converge. [step 3.1, L4] ∎

## Remarks

- A sequence is a subsequence of itself, via the identity index map $n_k = k$, which is strictly increasing. So "every subsequence converges to $x$" and "the sequence converges to $x$" are equivalent, and the lemma is the non-trivial half of that equivalence.

- The converse of the first claim is false: **one** convergent subsequence says nothing about the sequence ([[fs-subsequence-convergence-implies-convergence]]). It is the divergence test, not the convergence of a single subsequence, that is usable.

- The divergence test is the standard way to show a concrete sequence diverges, and it is how [[fs-bounded-implies-convergent]] is refuted. The opposite direction, extracting a convergent subsequence from a bounded sequence, is Bolzano-Weierstrass; it is **not available at this point in the reading order**, being the subject of the next page of this track, *Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness*, where it is proved.
