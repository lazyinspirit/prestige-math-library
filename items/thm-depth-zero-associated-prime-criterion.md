---
id: thm-depth-zero-associated-prime-criterion
title: The local depth-zero associated-prime criterion
kind: theorem
status: published
origin: pipeline
deps: [cor-depth-zero-iff-ideal-contained-in-an-associated-prime]
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

Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M\ne0$ be a finite
$R$-module. Then
$$\operatorname{depth}(M)=0\quad\Longleftrightarrow\quad \mathfrak m\in\operatorname{Ass}_R(M).$$

## Facts & Assumptions

**Given:** A Noetherian local ring and a nonzero finite module.

## Proof

**Proof technique:** direct.

1.1 Nakayama gives $\mathfrak mM\ne M$, so the ideal-relative criterion applies with $I=\mathfrak m$. It says depth is zero exactly when $\mathfrak m\subseteq\mathfrak p$ for some associated prime $\mathfrak p$. [given]

2.1 Every associated prime is proper and every proper ideal of a local ring is contained in $\mathfrak m$. Hence $\mathfrak m\subseteq\mathfrak p$ forces $\mathfrak p=\mathfrak m$, proving both directions. [step 1.1, algebra] ∎
