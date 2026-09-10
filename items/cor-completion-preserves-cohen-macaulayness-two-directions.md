---
id: cor-completion-preserves-cohen-macaulayness-two-directions
title: Completion preserves Cohen--Macaulayness in both directions
kind: corollary
status: published
origin: pipeline
deps: [def-cohen-macaulay-local-module-and-ring, lem-completion-reflects-depth, thm-completion-preserves-dimension-and-hilbert-samuel-data, thm-faithful-flatness-of-jacobson-adic-completion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://stacks.math.columbia.edu/download/algebra.pdf
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local defect repair; no independent judge or owner audit"
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice. If
$(R,\mathfrak m)$ is Noetherian local and $0\ne M$ is finite, then $M$ is
Cohen--Macaulay over $R$ if and only if
$\widehat M=M\otimes_R\widehat R$ is Cohen--Macaulay over $\widehat R$.

## Facts & Assumptions

**Given:** the stated Noetherian local ring, nonzero finite module, and Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 By [[lem-completion-reflects-depth]], $\operatorname{depth}_{\widehat R}(\widehat M)=\operatorname{depth}_R(M)$. Under the stated AC assumption, [[thm-completion-preserves-dimension-and-hilbert-samuel-data]] gives $\dim_{\widehat R}(\widehat M)=\dim_R(M)$, where dimensions mean support dimensions. AC is used through this supplier's dimension assertion and through the completion flatness supplier in the next step. [given]

2.1 By [[thm-faithful-flatness-of-jacobson-adic-completion]], completion is faithfully flat, so $\widehat M\ne0$; it is finite because the images of any finite generating set of $M$ generate it over $\widehat R$. Thus [[def-cohen-macaulay-local-module-and-ring]] applies on both sides. The two equalities in step 1.1 show that depth equals support dimension on one side exactly when it does on the other, proving both directions. [step 1.1, algebra] ∎
