---
id: lem-cohen-macaulay-parameter-first-element-regular
title: The first parameter of a Cohen--Macaulay module is regular
kind: lemma
status: draft
origin: pipeline
deps: [def-cohen-macaulay-local-module-and-ring, thm-dimension-and-parameters-for-modules, lem-associated-primes-of-cohen-macaulay-module-have-full-dimension]
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

Let $(R,\mathfrak m)$ be Noetherian local and $M$ a nonzero finite
Cohen--Macaulay module of positive dimension. If
$x_1,\ldots,x_d$ is a system of parameters for $M$, then $x_1$ is
$M$-regular.

## Facts & Assumptions

**Given:** $d=\dim M>0$ and the parameter quotient has dimension $0$.

## Proof

**Proof technique:** direct.

1.1 If $x_1$ lay in an associated prime $\mathfrak p$ of $M$, then the full-dimension result would give $\dim(R/\mathfrak p)=d$. Moreover $\mathfrak p\in\operatorname{Supp}(M/x_1M)$ because $\operatorname{Supp}(M/x_1M)=\operatorname{Supp}(M)\cap V(x_1)$. [given]

2.1 The remaining $d-1$ elements make $$M/x_1M\big/(x_2,\ldots,x_d)(M/x_1M)$$ finite length. The minimal-generator characterization in `thm-dimension-and-parameters-for-modules` therefore gives $\dim(M/x_1M)\le d-1$. This contradicts step 1.1. Thus $x_1$ avoids every associated prime; the associated-prime zero-divisor criterion makes it $M$-regular. The quotient is nonzero by Nakayama. [step 1.1, algebra] ∎
