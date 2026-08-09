---
id: cex-nowhere-dense-with-positive-measure
kind: counterexample
title: "The Smith-Volterra-Cantor set is nowhere dense and does not have measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-nowhere-dense-implies-measure-zero, thm-fat-cantor-set-has-positive-measure, def-fat-cantor-set, def-nowhere-dense-meager, def-measure-zero-and-content-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
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
    - title: "A. Jin, Cantor sets in topology, analysis, and financial markets"
      url: "https://math.uchicago.edu/~may/REU2021/REUPapers/Jin%2CAlexa.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every nowhere dense subset of $\mathbb{R}$ has measure zero
([[fs-nowhere-dense-implies-measure-zero]]).

The witness is the Smith-Volterra-Cantor set $S$ ([[def-fat-cantor-set]]): the
subset of $[0,1]$ obtained by removing, at stage $n$, an open interval of length
$4^{-n-1}$ from the middle of each of the $2^{n}$ intervals then present. It is
nowhere dense ([[def-nowhere-dense-meager]]) and no cover of it by intervals has
total length below $2^{-1}$, so it is not of measure zero
([[def-measure-zero-and-content-zero]]). This item records the witness and says
what makes it work; the refutation is carried out in full in
[[fs-nowhere-dense-implies-measure-zero]] and
[[thm-fat-cantor-set-has-positive-measure]].

## Facts & Assumptions

**Given:** The Smith-Volterra-Cantor set $S$ of [[def-fat-cantor-set]].

[A1] The refuted claim: every nowhere dense subset of $\mathbb{R}$ has measure zero.

[L1] $S$ is compact, perfect and nowhere dense, and any bound $M$ on the partial total lengths of a cover of $S$ by intervals satisfies $M \ge 2^{-1}$ ([[thm-fat-cantor-set-has-positive-measure]], claims 1 to 4).

[L2] A set is null when for every real $\varepsilon > 0$ it admits a cover by a sequence of closed intervals with all partial total lengths at most $\varepsilon$ ([[def-measure-zero-and-content-zero]]).

## Counterexample

**Proof technique:** direct.

1.1 $S$ is a nowhere dense subset of $\mathbb{R}$, by claim 3 of [L1]. [L1]

1.2 $S$ is not null: a cover witnessing nullity at $\varepsilon := 4^{-1}$ would give $4^{-1} \ge 2^{-1}$ by claim 4 of [L1] and [L2], which is false. [L1, L2]

2.1 So $S$ witnesses the failure of [A1]. [step 1.1, step 1.2, A1] ∎

## Remarks

- **What makes it work is a change of proportion, not of shape.** The
  middle-thirds construction removes a fixed *fraction* of each piece and loses
  total length $1$; this one removes a fixed *length* $4^{-n-1}$ at stage $n$ and
  loses only $2^{-1}$ ([[ex-fat-cantor-measure-computed]]). Topologically the two
  sets are indistinguishable at the level of the properties proved here: both are
  compact, perfect and nowhere dense ([[thm-cantor-set-properties]]).

- **The complementary witness.** For the reverse implication the witness is
  $\mathbb{Q}$, which is null and not nowhere dense
  ([[cex-dense-set-of-measure-zero]]). The two counterexamples together show the
  two smallness notions are independent.
