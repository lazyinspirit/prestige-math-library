---
id: ex-cohen-macaulay-ring-with-zero-divisors
title: A Cohen--Macaulay ring with zero divisors
kind: example
status: draft
origin: pipeline
deps: [thm-regular-quotients-and-cohen-macaulayness, cor-one-regular-system-of-parameters-implies-cohen-macaulay]
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

For a field $k$, the ring $A=k\llbracket x,y\rrbracket/(xy)$ is a
one-dimensional Cohen--Macaulay local ring
with nonzero zero divisors.

## Facts & Assumptions

**Given:** $k\llbracket x,y\rrbracket$ is a two-dimensional regular local domain and $xy$ is nonzero.

## Verification

**Proof technique:** direct.

1.1 Put $Q=k\llbracket x,y\rrbracket$. The sequence $x,y$ is a regular system of parameters of $Q$, so `cor-one-regular-system-of-parameters-implies-cohen-macaulay` makes $Q$ Cohen--Macaulay. The nonzero element $xy$ is $Q$-regular, and $(xy,x+y)$ is a system of parameters because $Q/(xy,x+y)\cong k\llbracket x\rrbracket/(x^2)$ has finite length. Therefore `thm-regular-quotients-and-cohen-macaulayness` makes $A=Q/(xy)$ Cohen--Macaulay of dimension one. [given, algebra]

2.1 The classes of $x$ and $y$ are nonzero but their product is zero. Hence $A$ is Cohen--Macaulay although it is not a domain. [step 1.1, algebra] ∎
