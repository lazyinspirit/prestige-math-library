---
id: ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups
kind: example
title: "The nine lemma verified on a diagram of cyclic groups"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-nine-lemma-in-an-abelian-category,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Exercise 1.3.2"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
pipeline_run: frontier-24
---

## Example

In $\mathbf{Ab}$, take the commutative $3\times 3$ diagram whose top row is
the zero short exact sequence
$$0 \to 0 \to 0 \to 0 \to 0,$$
whose middle and bottom rows are both
$$0 \to \mathbb Z/2 \to \mathbb Z/4 \to \mathbb Z/2 \to 0,$$
whose vertical maps from the top row to the middle row are zero, and whose
vertical maps from the middle row to the bottom row are identities. Then each
column is short exact, and the nine lemma says that the top row is short exact
if and only if the bottom row is.

## Facts & Assumptions

**Given:** The cyclic-group $3 \times 3$ diagram just described.

[L1] Abelian groups form an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

[L2] The nine lemma applies to any such $3 \times 3$ diagram ([[thm-nine-lemma-in-an-abelian-category]]).

## Verification

1.1 In this diagram the middle and bottom rows are the standard short exact sequence $$0 \to \mathbb Z/2 \to \mathbb Z/4 \to \mathbb Z/2 \to 0,$$ and each column is one of the short exact sequences $$0 \to 0 \to G \xrightarrow{1_G} G \to 0$$ with $G\in\{\mathbb Z/2,\mathbb Z/4\}$ or the zero sequence. Hence all three columns and the middle row are short exact in $\mathbf{Ab}$. [L1, algebra]

2.1 The top row is the zero short exact sequence and the bottom row is the standard short exact sequence above, so both outer rows are short exact. This agrees with [L2], which predicts that under the hypotheses verified in step 1.1 the two outer rows stand or fall together. [L2, step 1.1, algebra]

3.1 Thus this cyclic-group diagram is a concrete instance of the nine lemma. [step 2.1] ∎
