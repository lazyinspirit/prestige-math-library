---
id: thm-radical-localisation-and-regular-quotient-properties-of-depth
title: Radical, localization, and regular-quotient properties of depth
kind: theorem
status: published
origin: pipeline
deps: [def-axiom-of-choice, cor-depth-depends-only-on-radical, lem-depth-quotient-by-regular-element, lem-depth-localisation-inequality]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (thm-radical-localisation-and-regular-quotient-properties-of-depth). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

For finite modules over Noetherian rings, depth has the following properties.

1. Ideals with the same radical and contained in the Jacobson radical give the
   same depth.
2. If $(R,\mathfrak m)$ is local, then
   $\operatorname{depth}(M_{\mathfrak p})+\dim(R/\mathfrak p)
   \ge\operatorname{depth}(M)$ for every prime $\mathfrak p$.
3. If $x\in I$ is $M$-regular and $I$ is in the Jacobson radical, then
   $\operatorname{depth}_I(M/xM)=\operatorname{depth}_I(M)-1$.

## Facts & Assumptions

**Given:** the Axiom of Choice and, in each part, the hypotheses stated there.

[L1] Depth is invariant under radical for the ideals in part 1 ([[cor-depth-depends-only-on-radical]]).

[L2] Under Choice, depth obeys the localization inequality of part 2, including the zero-localization convention ([[lem-depth-localisation-inequality]]).

[L3] Quotienting by a regular element lowers depth by one as in part 3 ([[lem-depth-quotient-by-regular-element]]).

## Proof

**Proof technique:** direct.

1.1 Part 1 follows from [L1], and part 2 follows from [L2] under the stated Choice assumption. [L1, L2, given]

2.1 Part 3 follows from [L3]. The three cited results prove the package. [L3, step 1.1] ∎
