---
id: fs-nowhere-dense-implies-measure-zero
kind: false-statement
title: "FALSE: every nowhere dense subset of $\\mathbb{R}$ has measure zero"
status: published
origin: session
deps: [thm-fat-cantor-set-has-positive-measure, def-fat-cantor-set, def-nowhere-dense-meager, def-measure-zero-and-content-zero]
justified_by: []
forward_refs: [cex-nowhere-dense-with-positive-measure]
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
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
pipeline_run: null
---

## Statement

**False claim:** every nowhere dense subset of $\mathbb{R}$
([[def-nowhere-dense-meager]]) has measure zero
([[def-measure-zero-and-content-zero]]).

The claim is tempting because a nowhere dense set is topologically thin: its
closure contains no interval at all, so it is "full of holes" everywhere. The
error is to read that as a statement about total length. Holes may be plentiful
and short at the same time, and the Smith-Volterra-Cantor set is built precisely
so that they are.

## Facts & Assumptions

**Given:** The Smith-Volterra-Cantor set $S$ of [[def-fat-cantor-set]].

[A1] The false claim: every nowhere dense subset of $\mathbb{R}$ has measure zero.

[L1] $S$ is nowhere dense ([[thm-fat-cantor-set-has-positive-measure]], claim 3).

[L2] If sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$ cover $S$ and all their partial total lengths are at most $M$, then $M \ge 2^{-1}$; in particular $S$ does not have measure zero ([[thm-fat-cantor-set-has-positive-measure]], claim 4).

[L3] A set is null when for every real $\varepsilon > 0$ it has a cover by a sequence of closed intervals with all partial total lengths at most $\varepsilon$ ([[def-measure-zero-and-content-zero]]).

## Refutation

**Proof technique:** direct.

1.1 The set $S$ is a subset of $\mathbb{R}$ and is nowhere dense, by [L1]. [L1]

1.2 $S$ does not have measure zero: a cover witnessing nullity at $\varepsilon := 4^{-1}$ would have all partial total lengths at most $4^{-1}$, and [L2] then forces $4^{-1} \ge 2^{-1}$, which is false. [L2, L3]

2.1 So $S$ is a nowhere dense subset of $\mathbb{R}$ that does not have measure zero, and the claim [A1] fails at $S$; the claim is therefore false. [step 1.1, step 1.2, A1] ∎

## Remarks

- **The converse implication is also false**, and for a completely different
  reason: $\mathbb{Q}$ has measure zero and is not nowhere dense
  ([[fs-measure-zero-implies-nowhere-dense]]). So neither of the two notions of
  smallness implies the other, and the two failures are witnessed by sets of
  different cardinality, $S$ being uncountable and $\mathbb{Q}$ countable.

- **What is true.** A nowhere dense set contains no interval of positive length,
  which is a genuine consequence of the definition; and a set of measure zero
  also contains no interval of positive length
  ([[lem-nondegenerate-interval-is-not-null]]). The two conditions share that
  consequence and nothing beyond it.

- **The named witness** is [[cex-nowhere-dense-with-positive-measure]].
