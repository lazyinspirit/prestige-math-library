---
id: cor-club-filter-not-an-ultrafilter
kind: corollary
title: "The club filter is never an ultrafilter"
status: published
origin: pipeline
deps: ["thm-solovay-stationary-partition", "def-club-filter-and-nonstationary-ideal"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vasey, Corollary 15.4 and proof, pp.83–84"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Statement

In ZFC, on every regular uncountable $\kappa$ there is a stationary costationary subset; consequently its club filter is not an ultrafilter (it does not decide every subset by membership or complement membership).

## Facts & Assumptions

[F1] [[thm-solovay-stationary-partition]]: Every stationary subset of kappa partitions into kappa stationary pieces.

[F2] [[def-club-filter-and-nonstationary-ideal]]: The club filter contains exactly the supersets of clubs; stationary sets meet every club.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 The whole cardinal is stationary because every club is nonempty. Split it into $(S_\xi)_{\xi<\kappa}$ by Solovay. Then $S_0$ is stationary and its complement contains the stationary $S_1$, so the complement is stationary as well. [F1, F2]

2.1 Neither $S_0$ nor its complement contains a club, since such a club would be disjoint from the stationary set on the other side. Thus the club filter contains neither side of this partition and does not decide every subset. [F2, step 1.1] ∎
