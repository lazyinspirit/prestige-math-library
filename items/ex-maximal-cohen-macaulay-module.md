---
id: ex-maximal-cohen-macaulay-module
title: A nonfree maximal Cohen--Macaulay module
kind: example
status: published
origin: pipeline
deps: [def-maximal-and-global-cohen-macaulay-modules, thm-regular-quotients-and-cohen-macaulayness]
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

Let $A=k\llbracket x,y\rrbracket/(xy)$ and $M=A/(x)\cong k\llbracket y\rrbracket$. Then $M$ is a nonfree
maximal Cohen--Macaulay $A$-module.

## Facts & Assumptions

**Given:** $\dim A=1$ and $M\ne0$ is finite.

## Verification

**Proof technique:** direct.

1.1 Multiplication by $y$ is injective on $M\cong k\llbracket y\rrbracket$, and $M/yM\cong k$ is nonzero. Thus $\operatorname{depth}_A(M)\ge1$, while the dimension bound gives equality. [given]

2.1 Hence $\operatorname{depth}_A(M)=\dim A=1$, so $M$ is maximal Cohen--Macaulay. It is not free: the nonzero element $x\in A$ annihilates all of $M$, whereas a nonzero free $A$-module has zero annihilator. [step 1.1, algebra] ∎
