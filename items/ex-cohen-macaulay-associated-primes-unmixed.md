---
id: ex-cohen-macaulay-associated-primes-unmixed
title: Associated primes are unmixed in a Cohen--Macaulay example
kind: example
status: published
origin: pipeline
deps: [thm-associated-primes-of-cohen-macaulay-modules, ex-cohen-macaulay-ring-with-zero-divisors]
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
## Example

For $A=k\llbracket x,y\rrbracket/(xy)$,
$$\operatorname{Ass}_A(A)=\{(x)A,(y)A\}.$$
Both associated-prime quotients have dimension $1=\dim A$.

## Facts & Assumptions

**Given:** $A$ is the Cohen--Macaulay hypersurface from `ex-cohen-macaulay-ring-with-zero-divisors`.

## Verification

**Proof technique:** direct.

1.1 In $A$, the annihilator of $x$ is $(y)$ and the annihilator of $y$ is $(x)$, so both primes are associated. The hypersurface is reduced with these two minimal primes; the Cohen--Macaulay associated-prime theorem rules out embedded primes. [given]

2.1 Finally $A/(x)\cong k\llbracket y\rrbracket$ and $A/(y)\cong k\llbracket x\rrbracket$, each of dimension $1$. This verifies unmixedness directly. [step 1.1, algebra] ∎
