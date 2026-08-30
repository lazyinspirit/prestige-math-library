---
id: fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign
kind: false-statement
title: "FALSE: the shift of a complex keeps the same differential with no sign"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-shift-of-a-chain-complex, lem-the-shifted-differential-squares-to-zero]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.14: Homotopy and the shift functor"
      url: "https://stacks.math.columbia.edu/tag/0119"
pipeline_run: frontier-25
---

## Statement

The shift of a chain complex keeps the same differential, with no sign change.

## Facts & Assumptions

**Given:** The two-term complex $C_\bullet$ in $\mathbf{Ab}$ with $C_1=C_0=\mathbb Z$ and differential $d_1=1_{\mathbb Z}$.

[A1] The statement refuted is: the shift of a chain complex keeps the same differential, with no sign change.

[L1] The adopted shift convention is $$d^{C[1]}_n=-d^C_{n-1}$$ ([[def-shift-of-a-chain-complex]]).

[L2] With the shifted differential from [L1], the shifted complex is again a chain complex ([[lem-the-shifted-differential-squares-to-zero]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the differential of $C[1]$ from degree $2$ to degree $1$ is $$d^{C[1]}_2=-d^C_1=-1_{\mathbb Z}.$$ It is therefore not the unchanged differential $1_{\mathbb Z}$. [given, L1, algebra]

2.1 The explicit complex in step 1.1 contradicts [A1]. The adopted definition is [L1], and [L2] confirms that it gives a legitimate shifted complex. Hence [A1] is false. [A1, L1, L2, step 1.1] ∎
