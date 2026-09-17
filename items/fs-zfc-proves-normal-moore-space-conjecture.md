---
id: fs-zfc-proves-normal-moore-space-conjecture
kind: false-statement
title: "False: ZFC proves the normal Moore space conjecture"
status: draft
origin: pipeline
deps: [thm-ch-normal-nonmetrizable-moore-space, thm-formal-consistency-of-zfc-plus-gch-from-zf, thm-formal-relative-consistency-from-verified-proof-reduction, def-moore-spaces-and-developments, def-arithmetic-provability-and-consistency]
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
---

## Statement

Relative to $\operatorname{Con}(\mathrm{ZFC})$, it is false that
$\mathrm{ZFC}$ proves the normal Moore space conjecture: $\mathrm{ZFC}$ does
not prove that every normal Moore space is metrizable.

## Facts & Assumptions

**Given:** The metatheoretic hypothesis $\operatorname{Con}(\mathrm{ZFC})$ and the fixed arithmetization of [[def-arithmetic-provability-and-consistency]].

[F1] The verified finite-proof reduction: for the fixed theories, a target refutation compiles to a source refutation, giving the corresponding consistency implication ([[thm-formal-relative-consistency-from-verified-proof-reduction]]).

[F2] $\operatorname{Con}(\mathrm{ZF})$ implies $\operatorname{Con}(\mathrm{ZFC} + \mathrm{GCH})$, by the guarded $L$-interpretation compiler ([[thm-formal-consistency-of-zfc-plus-gch-from-zf]]).

[F3] GCH implies CH at $\omega$, and $\mathrm{ZFC}+\mathrm{CH}$ proves that there is a normal nonmetrizable Moore space ([[thm-ch-normal-nonmetrizable-moore-space]], [[def-moore-spaces-and-developments]]).

[F4] $\mathrm{NMSC}$ is the assertion that every normal Moore space is metrizable. [given]



## Refutation

**Proof technique:** direct.

1.1 Assume $\operatorname{Con}(\mathrm{ZFC})$. Then $\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$ by [F2], hence $\operatorname{Con}(\mathrm{ZFC}+\mathrm{CH})$ by [F3]'s first clause. [given, F2, F3]
2.1 If $\mathrm{ZFC}$ proved NMSC, then the fixed NMSC proof together with the fixed proof of "there is a normal nonmetrizable Moore space" from $\mathrm{ZFC}+\mathrm{CH}$ (which is a fixed finite proof by [F3]) would give a $\mathrm{ZFC}+\mathrm{CH}$ refutation; the compiler of [F1] would then convert it into a $\mathrm{ZFC}+\mathrm{GCH}$ refutation, contradicting step 1.1. [step 1.1, F1, F3, F4]
3.1 Therefore, assuming $\operatorname{Con}(\mathrm{ZFC})$, no such refutation exists and $\mathrm{ZFC}$ does not prove NMSC. [step 2.1, discharge-contradiction] ∎

## Remarks

- **The consistency hypothesis cannot be dropped.** The conclusion is a relative statement; $\mathrm{ZFC}$ itself cannot prove $\operatorname{Con}(\mathrm{ZFC})$ ([[def-arithmetic-provability-and-consistency]]).
- **The failure is not a theorem of $\mathrm{ZFC}$ alone.** The witness space is produced under CH; under PMEA every normal Moore space is metrizable ([[thm-pmea-implies-normal-moore-space-conjecture]]), so the statement is independent in the usual relative-consistency sense.
