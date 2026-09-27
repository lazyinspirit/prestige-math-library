---
id: lem-cohen-macaulay-parameter-first-element-regular
title: The first parameter of a Cohen--Macaulay module is regular
kind: lemma
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-cohen-macaulay-local-module-and-ring, thm-dimension-and-parameters-for-modules, lem-associated-primes-of-cohen-macaulay-module-have-full-dimension, thm-zero-divisors-on-a-module]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (lem-cohen-macaulay-parameter-first-element-regular). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $(R,\mathfrak m)$ be Noetherian local and $M$ a nonzero finite
Cohen--Macaulay module of positive dimension. If
$x_1,\ldots,x_d$ is a system of parameters for $M$, then $x_1$ is
$M$-regular.

## Facts & Assumptions

**Given:** the Axiom of Choice, $d=\dim M>0$, and the parameter quotient has dimension $0$.

[L1] Under Choice, every associated prime of $M$ has quotient dimension $d$ ([[lem-associated-primes-of-cohen-macaulay-module-have-full-dimension]]).

[L2] Under Choice, an element is a zero divisor on $M$ exactly when it lies in an associated prime; only the union formula is used ([[thm-zero-divisors-on-a-module]]).

[L3] A system of parameters is characterized by its finite-length quotient ([[thm-dimension-and-parameters-for-modules]]).

## Proof

**Proof technique:** direct.

1.1 If $x_1$ lay in an associated prime $\mathfrak p$ of $M$, then [L1] would give $\dim(R/\mathfrak p)=d$. Moreover $\mathfrak p\in\operatorname{Supp}(M/x_1M)$ because $\operatorname{Supp}(M/x_1M)=\operatorname{Supp}(M)\cap V(x_1)$. [L1, given]

2.1 The remaining $d-1$ elements make $$M/x_1M\big/(x_2,\ldots,x_d)(M/x_1M)$$ finite length. The parameter characterization [L3] therefore gives $\dim(M/x_1M)\le d-1$. This contradicts step 1.1. Thus $x_1$ avoids every associated prime; [L2] makes it $M$-regular. The quotient is nonzero by Nakayama. [L2, L3, step 1.1, algebra] ∎
