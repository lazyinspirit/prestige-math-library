---
id: cex-a-non-split-short-exact-sequence-of-abelian-groups
kind: counterexample
title: "A non-split short exact sequence of abelian groups"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-split-short-exact-sequence-in-an-abelian-category,
       thm-splitting-lemma-in-an-abelian-category,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: frontier-23
---

## Statement refuted

Every short exact sequence of abelian groups splits.

## Facts & Assumptions

**Given:** The short exact sequence
$$0 \to \mathbb Z \xrightarrow{\times 2} \mathbb Z \xrightarrow{q} \mathbb Z/2 \to 0.$$

[L1] The category $\mathbf{Ab}$ is abelian
([[thm-abelian-groups-form-an-abelian-category]]).

[L2] A short exact sequence splits exactly when the quotient map has a section
([[def-split-short-exact-sequence-in-an-abelian-category]],
[[thm-splitting-lemma-in-an-abelian-category]]).

## Counterexample

**Proof technique:** direct.

1.1 The sequence is short exact in $\mathbf{Ab}$ by the usual kernel-image computation. [L1, given, algebra]

1.2 If $q$ had a section $s$, then $x := s(1 + 2\mathbb Z)$ would be an odd integer with $2x = s(0) = 0$, impossible in $\mathbb Z$. So no section exists. [L2, assume-hyp, algebra]

2.1 By [L2], the short exact sequence is nonsplit. This refutes the statement. [L2, step 1.1, step 1.2] ∎
