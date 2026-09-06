---
id: lem-completion-reflects-depth
title: Completion reflects depth
kind: lemma
status: published
origin: pipeline
deps: [def-depth-with-respect-to-an-ideal, cor-depth-as-first-nonzero-ext, lem-completion-preserves-regular-sequences, thm-faithful-flatness-of-jacobson-adic-completion]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://stacks.math.columbia.edu/download/algebra.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $(R,\mathfrak m)$ be Noetherian local and $M$ finite. Then
$$\operatorname{depth}_{\widehat R}(M\otimes_R\widehat R) =\operatorname{depth}_R(M).$$

## Facts & Assumptions

**Given:** the residue fields of $R$ and $\widehat R$ agree, and completion is faithfully flat.

## Proof

**Proof technique:** direct.

1.1 For each $i$, flat base change for a free resolution of $R/\mathfrak m$ whose terms are finite free gives $$\operatorname{Ext}^i_R(R/\mathfrak m,M)\otimes_R\widehat R \cong \operatorname{Ext}^i_{\widehat R} (\widehat R/\mathfrak m\widehat R,\widehat M).$$ [given]

2.1 Faithful flatness says the left group vanishes exactly when its tensor product does. Thus the first nonzero Ext degree is unchanged; the Ext characterization of depth proves the equality, including the $+\infty$ case. [step 1.1, algebra] ∎
