---
id: cor-completion-preserves-cohen-macaulayness-two-directions
title: Completion preserves Cohen--Macaulayness in both directions
kind: corollary
status: published
origin: pipeline
deps: [def-cohen-macaulay-local-module-and-ring, lem-completion-reflects-depth, thm-completion-preserves-dimension-and-hilbert-samuel-data]
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

Assume the stated choice convention for completion and dimension. If
$(R,\mathfrak m)$ is Noetherian local and $0\ne M$ is finite, then $M$ is
Cohen--Macaulay over $R$ if and only if
$\widehat M=M\otimes_R\widehat R$ is Cohen--Macaulay over $\widehat R$.

## Facts & Assumptions

**Given:** completion preserves both the depth and support dimension of a finite module.

## Proof

**Proof technique:** direct.

1.1 `lem-completion-reflects-depth` gives $\operatorname{depth}_{\widehat R}(\widehat M)=\operatorname{depth}_R(M)$. The completion dimension theorem gives $\dim_{\widehat R}(\widehat M)=\dim_R(M)$. [given]

2.1 Therefore depth equals dimension on one side exactly when it does on the other. Faithful flatness also ensures $\widehat M\ne0$. [step 1.1, algebra] ∎
