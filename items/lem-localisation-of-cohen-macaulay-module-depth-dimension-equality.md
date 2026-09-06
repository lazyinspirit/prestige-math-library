---
id: lem-localisation-of-cohen-macaulay-module-depth-dimension-equality
title: Localization preserves the Cohen--Macaulay depth--dimension equality
kind: lemma
status: published
origin: pipeline
deps: [def-cohen-macaulay-local-module-and-ring, lem-depth-localisation-inequality, cor-depth-of-a-finite-local-module-at-most-its-dimension]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $(R,\mathfrak m)$ be Noetherian local and let $M$ be a nonzero finite
Cohen--Macaulay $R$-module. For every
$\mathfrak p\in\operatorname{Supp}_R(M)$,
$$\operatorname{depth}_{R_\mathfrak p}(M_\mathfrak p) =\dim_{R_\mathfrak p}(M_\mathfrak p).$$

## Facts & Assumptions

**Given:** $M_\mathfrak p\ne0$; write $d=\dim_R(M)$.

## Proof

**Proof technique:** direct.

1.1 The localization inequality gives $$\operatorname{depth}_{R_\mathfrak p}(M_\mathfrak p) +\dim(R/\mathfrak p)\ge d.$$ The dimension-chain inequality for the support gives $$\dim_{R_\mathfrak p}(M_\mathfrak p)+\dim(R/\mathfrak p)\le d.$$ [given]

2.1 Hence localized depth is at least localized dimension. The general bound `cor-depth-of-a-finite-local-module-at-most-its-dimension` supplies the reverse inequality, so equality holds. [step 1.1, algebra] ∎
