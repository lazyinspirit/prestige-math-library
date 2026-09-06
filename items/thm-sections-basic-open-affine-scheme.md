---
id: thm-sections-basic-open-affine-scheme
kind: theorem
title: "Sections and restrictions on distinguished opens of an affine scheme"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-structure-sheaf-affine-scheme, def-principal-distinguished-subset-of-spectrum, thm-universal-property-of-localisation]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "The Stacks Project, Lemma 26.5.4"
      url: "https://stacks.math.columbia.edu/tag/01HR"
---
## Statement

For $f\in A$, $\Gamma(D(f),\mathcal O)=A_f$. If $D(g)\subseteq D(f)$, the
restriction is the canonical localization map $A_f\to A_g$.

## Facts & Assumptions

**Given:** The sheaf extending the localization basis assignment.

## Proof

**Proof technique:** direct.

1.1 The extended sheaf agrees with the basis assignment on $D(f)$, so its sections are $A_f$. [given]

2.1 Its restriction along $D(g)\subseteq D(f)$ is the prescribed canonical localization map $A_f\to A_g$. [step 1.1]

3.1 If $D(f)=\varnothing$, then $A_f=0$, the unique ring of sections on the empty open. [step 1.1] ∎
