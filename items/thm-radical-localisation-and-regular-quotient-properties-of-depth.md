---
id: thm-radical-localisation-and-regular-quotient-properties-of-depth
title: Radical, localization, and regular-quotient properties of depth
kind: theorem
status: draft
origin: pipeline
deps: [cor-depth-depends-only-on-radical, lem-depth-quotient-by-regular-element, lem-depth-localisation-inequality]
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

For finite modules over Noetherian rings, depth has the following properties.

1. Ideals with the same radical and contained in the Jacobson radical give the
   same depth.
2. If $(R,\mathfrak m)$ is local, then
   $\operatorname{depth}(M_{\mathfrak p})+\dim(R/\mathfrak p)
   \ge\operatorname{depth}(M)$ for every prime $\mathfrak p$.
3. If $x\in I$ is $M$-regular and $I$ is in the Jacobson radical, then
   $\operatorname{depth}_I(M/xM)=\operatorname{depth}_I(M)-1$.

## Facts & Assumptions

**Given:** In each part, the hypotheses stated there.

## Proof

**Proof technique:** direct.

1.1 Part 1 is radical invariance, and part 2 is the localization inequality with its zero-localization convention. [given]

2.1 Part 3 is the regular-element quotient formula. The three cited results prove the package. [step 1.1] ∎
