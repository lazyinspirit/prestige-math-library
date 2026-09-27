---
id: lem-completion-reflects-depth
title: Completion reflects depth
kind: lemma
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-depth-with-respect-to-an-ideal, cor-depth-as-first-nonzero-ext, lem-completion-preserves-regular-sequences, thm-faithful-flatness-of-jacobson-adic-completion]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://stacks.math.columbia.edu/download/algebra.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (lem-completion-reflects-depth). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(R,\mathfrak m)$ be Noetherian local and $M$ finite. Then
$$\operatorname{depth}_{\widehat R}(M\otimes_R\widehat R) =\operatorname{depth}_R(M).$$

## Facts & Assumptions

**Given:** The Axiom of Choice; the residue fields of $R$ and $\widehat R$ agree, and completion is faithfully flat.

## Proof

**Proof technique:** direct.

1.1 For each $i$, flat base change for a free resolution of $R/\mathfrak m$ whose terms are finite free gives $$\operatorname{Ext}^i_R(R/\mathfrak m,M)\otimes_R\widehat R \cong \operatorname{Ext}^i_{\widehat R} (\widehat R/\mathfrak m\widehat R,\widehat M).$$ [given]

2.1 Faithful flatness says the left group vanishes exactly when its tensor product does. Thus the first nonzero Ext degree is unchanged; the Ext characterization of depth proves the equality, including the $+\infty$ case. [step 1.1, algebra] ∎
