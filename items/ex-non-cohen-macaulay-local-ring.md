---
id: ex-non-cohen-macaulay-local-ring
title: A non-Cohen--Macaulay local quotient
kind: example
status: draft
origin: pipeline
deps: [thm-depth-zero-associated-prime-criterion, thm-depth-bounded-by-support-dimension]
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
## Example

Let $k$ be a field and let
$$A=k\llbracket x,y\rrbracket/(x^2,xy),\qquad \mathfrak m=(x,y)A.$$
Then $A$ is a one-dimensional Noetherian local ring of depth $0$, so it is
not Cohen--Macaulay.

## Facts & Assumptions

**Given:** the radical of $(x^2,xy)$ is $(x)$.

## Verification

**Proof technique:** direct.

1.1 Hence $\dim A=\dim k\llbracket y\rrbracket=1$. The nonzero class of $x$ is annihilated by both $x$ and $y$, so $\operatorname{ann}_A(x)=\mathfrak m$ and $\mathfrak m\in\operatorname{Ass}_A(A)$. [given]

2.1 The depth-zero criterion gives $\operatorname{depth}A=0$. Since $0<1=\dim A$, the ring is not Cohen--Macaulay. [step 1.1, algebra] ∎
