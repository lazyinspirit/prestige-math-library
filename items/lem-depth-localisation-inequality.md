---
id: lem-depth-localisation-inequality
title: Localization gives the stated depth inequality
kind: lemma
status: draft
origin: pipeline
deps: [lem-depth-bounded-by-associated-prime-quotient-dimension, lem-finite-prime-avoidance, lem-zero-divisor-annihilator-contained-in-associated-prime, lem-depth-quotient-by-regular-element]
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
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $(R,\mathfrak m)$ be Noetherian local, let $M$ be finite, and let
$\mathfrak p\in\operatorname{Spec}R$. Then
$$\operatorname{depth}_{R_{\mathfrak p}}(M_{\mathfrak p}) +\dim(R/\mathfrak p)\ge\operatorname{depth}_R(M),$$
with the left side infinite when $M_{\mathfrak p}=0$.

## Facts & Assumptions

**Given:** The data in the statement.

## Proof

**Proof technique:** direct.

1.1 The claim is immediate if $M_{\mathfrak p}=0$ or if $\operatorname{depth}M\le\dim(R/\mathfrak p)$. Otherwise the associated-prime dimension bound shows that $\mathfrak p$ is contained in no member of $\operatorname{Ass}(M)$. Finite prime avoidance supplies an $M$-regular $x\in\mathfrak p$. [given, choose]

2.1 Localizing preserves regularity of $x$, and quotienting by it lowers both $\operatorname{depth}M$ and $\operatorname{depth}M_{\mathfrak p}$ by one. Induction on $\operatorname{depth}M$ applied to $M/xM$ proves the inequality after adding one. [step 1.1, algebra] ∎
