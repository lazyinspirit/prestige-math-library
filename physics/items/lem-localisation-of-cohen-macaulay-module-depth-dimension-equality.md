---
id: lem-localisation-of-cohen-macaulay-module-depth-dimension-equality
title: Localization preserves the Cohen--Macaulay depth--dimension equality
kind: lemma
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-cohen-macaulay-local-module-and-ring, lem-depth-localisation-inequality, cor-depth-of-a-finite-local-module-at-most-its-dimension]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (lem-localisation-of-cohen-macaulay-module-depth-dimension-equality). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $(R,\mathfrak m)$ be Noetherian local and let $M$ be a nonzero finite
Cohen--Macaulay $R$-module. For every
$\mathfrak p\in\operatorname{Supp}_R(M)$,
$$\operatorname{depth}_{R_\mathfrak p}(M_\mathfrak p) =\dim_{R_\mathfrak p}(M_\mathfrak p).$$

## Facts & Assumptions

**Given:** the Axiom of Choice, $M_\mathfrak p\ne0$; write $d=\dim_R(M)$.

[L1] Under Choice, localization gives $\operatorname{depth}_{R_\mathfrak p}(M_\mathfrak p)+\dim(R/\mathfrak p)\ge\operatorname{depth}_R(M)$ ([[lem-depth-localisation-inequality]]).

[L2] A nonzero finite local module has depth at most its dimension ([[cor-depth-of-a-finite-local-module-at-most-its-dimension]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and Cohen--Macaulayness, $$\operatorname{depth}_{R_\mathfrak p}(M_\mathfrak p) +\dim(R/\mathfrak p)\ge d.$$ The dimension-chain inequality for the support gives $$\dim_{R_\mathfrak p}(M_\mathfrak p)+\dim(R/\mathfrak p)\le d.$$ [L1, given]

2.1 Hence localized depth is at least localized dimension. The general bound [L2] supplies the reverse inequality, so equality holds. [L2, step 1.1, algebra] ∎
