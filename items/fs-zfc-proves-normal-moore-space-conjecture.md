---
id: fs-zfc-proves-normal-moore-space-conjecture
kind: false-statement
title: "False: ZFC proves the normal Moore space conjecture"
status: published
origin: pipeline
deps: [thm-ch-normal-nonmetrizable-moore-space, cor-positive-relative-consistency-of-ch-and-gch, lem-derivation-finite-support-and-concatenation, def-moore-spaces-and-developments, def-arithmetic-provability-and-consistency]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "William G. Fleissner, If all normal Moore spaces are metrizable, then there is an inner model with a measurable cardinal"
      url: "https://kuscholarworks.ku.edu/server/api/core/bitstreams/88062b98-5ab8-4fdc-9548-9e00a9c7507d/content"
      locator: "CH instance and complete construction, printed pp. 366-371"
verification:
  audited: 2026-09-22
---

## Statement

Relative to $\operatorname{Con}(\mathrm{ZFC})$, it is false that
$\mathrm{ZFC}$ proves the normal Moore space conjecture: $\mathrm{ZFC}$ does
not prove that every normal Moore space is metrizable.

## Facts & Assumptions

**Given:** The metatheoretic hypothesis $\operatorname{Con}(\mathrm{ZFC})$ and the fixed arithmetization of [[def-arithmetic-provability-and-consistency]].

[F1] $\operatorname{Con}(\mathrm{ZFC})$ implies $\operatorname{Con}(\mathrm{ZFC}+\mathrm{CH})$ ([[cor-positive-relative-consistency-of-ch-and-gch]]).

[F2] Weakening, concatenation, and replacement of proved sentence premises by their proofs preserve derivability ([[lem-derivation-finite-support-and-concatenation]]).

[F3] $\mathrm{ZFC}+\mathrm{CH}$ proves that there is a normal nonmetrizable Moore space ([[thm-ch-normal-nonmetrizable-moore-space]], [[def-moore-spaces-and-developments]]).

[F4] $\mathrm{NMSC}$ is the assertion that every normal Moore space is metrizable. [given]



## Refutation

**Proof technique:** direct.

1.1 Assume $\operatorname{Con}(\mathrm{ZFC})$. Then $\operatorname{Con}(\mathrm{ZFC}+\mathrm{CH})$ directly by [F1]. [given, F1]

2.1 If $\mathrm{ZFC}$ proved NMSC, weakening would give the same theorem in $\mathrm{ZFC}+\mathrm{CH}$. But [F3] gives in that theory a normal nonmetrizable Moore space, contradicting NMSC; by the proof-composition operations of [F2], these two finite derivations concatenate to a $\mathrm{ZFC}+\mathrm{CH}$ refutation, contrary to [step 1.1]. [step 1.1, F2, F3, F4]

3.1 Therefore, assuming $\operatorname{Con}(\mathrm{ZFC})$, no such refutation exists and $\mathrm{ZFC}$ does not prove NMSC. [step 2.1, discharge-contradiction] ∎

## Remarks

- **The consistency hypothesis cannot be dropped.** The conclusion is a relative statement; $\mathrm{ZFC}$ itself cannot prove $\operatorname{Con}(\mathrm{ZFC})$ ([[def-arithmetic-provability-and-consistency]]).
- **The failure is not a theorem of $\mathrm{ZFC}$ alone.** The witness space is produced under CH; under PMEA every normal Moore space is metrizable ([[thm-pmea-implies-normal-moore-space-conjecture]]), so the statement is independent in the usual relative-consistency sense.
