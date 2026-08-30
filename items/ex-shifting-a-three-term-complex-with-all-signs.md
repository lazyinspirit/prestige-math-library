---
id: ex-shifting-a-three-term-complex-with-all-signs
kind: example
title: "Shifting a three-term complex with all signs"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-shift-of-a-chain-complex, prop-homology-of-a-shift-is-shifted-homology, thm-abelian-groups-form-an-abelian-category]
proof_strategy: direct
verification:
  audited: 2026-08-31
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
pipeline_run: frontier-25
---

## Example

Let $C_\bullet$ be the three-term complex
$$0\to\mathbb Z\xrightarrow{2}\mathbb Z\xrightarrow{0}\mathbb Z\to0,$$
with nonzero terms in degrees $2,1,0$. Then
$$C[1]_3=\mathbb Z,\qquad C[1]_2=\mathbb Z,\qquad C[1]_1=\mathbb Z,$$
and its displayed differentials are
$$d^{C[1]}_3=-2,\qquad d^{C[1]}_2=0.$$
Consequently
$$H_3(C[1])\cong H_2(C),\qquad H_2(C[1])\cong H_1(C),\qquad H_1(C[1])\cong H_0(C).$$

## Facts & Assumptions

**Given:** The three-term complex $C_\bullet$ above.

[L1] Shift reindexes terms and multiplies the differential by $(-1)^k$ ([[def-shift-of-a-chain-complex]]).

[L2] Homology of a shift satisfies $$H_n(C[1])\cong H_{n-1}(C)$$ ([[prop-homology-of-a-shift-is-shifted-homology]]).

[L3] $\mathbf{Ab}$ is an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L1] with $k=1$ gives the displayed terms of $C[1]$ and the shifted differentials $$d^{C[1]}_3=-d^C_2=-2,\qquad d^{C[1]}_2=-d^C_1=0.$$ [L1, L3, given, algebra]

2.1 The displayed homology identifications are the cases $n=3,2,1$ of [L2]. Thus the example shows every sign and every reindexing explicitly. [L2, step 1.1, algebra] ∎
