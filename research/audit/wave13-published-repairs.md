# Wave 13 published-item repair ledger

Reviewer: Audit-Alpha (GPT 5.6 Sol xhigh/1M, owner-delegated), Wave 13 A6.

The exact baseline is `442f831c94882899c1dc5559b36599b0f78a99c8`.
Pure provenance retags are excluded. These are the only three unique item ids
whose mathematical, citation, dependency, source, or source-provenance text
changed in Wave 13 A4/A6, and therefore the exact A7 targets.

## 1. `thm-jordan-boundary-criterion`

Class: mathematical falsehood/citation precision at A4; source-provenance
precision at A6; repeated-material personal audit required and completed.

- A4 old Fact: the relative indicator `1_E:Q -> R` was said to be
  discontinuous exactly on the ambient boundary for an arbitrary bounding
  rectangle. This is false for `E=Q`.
- A4 final Fact: `Q` is required to satisfy
  `closure(E) subset int(Q)`; the proof first obtains a bounding rectangle and
  enlarges every coordinate interval by a positive margin. The relative and
  ambient boundary argument is then exact.
- A6 old provenance: item `literature-derived`; ledger
  `literature-derived` / `exact-source`, with a stale rationale saying the A2
  defect “currently” remained.
- A6 final provenance: item and ledger `ai-altered`; ledger evidence
  `semantic-source`. Lebl Proposition 10.5.1 is credited exactly for Jordan
  measurable iff ambient boundary null. The content-zero equivalence and the
  relative-domain/enlarged-rectangle proof are explicitly local adaptations
  through `lem-compact-null-iff-content-zero-in-rn` and the internal boundary,
  compactness, and integrability interfaces.
- The public Statement, title, proof, and dependency list were unchanged at
  A6. Dropping the theorem was rejected by the required personal audit because
  the mathematics is valid and central; honest source classification is the
  complete remedy.
- First independent Terra result: `REFUSED` on the source overclaim, preserved
  at `wave13-dispatch/certifier-a6-thm-jordan-boundary-criterion.result.json`.
- Exact-final evidence at normalized SHA-256
  `8205f9b267307bfd4179f1959968046f45266dcd1d8b5b1532d2f2173e0c7375`:
  Terra `CERTIFIED` and DeepSeek `CLEAN` at the corresponding `a6r2` result
  files. Personal-audit receipt: `wave13-personal-audit-receipt.json`.

## 2. `thm-lebesgue-criterion-in-rn`

Class: citation precision.

- Old text folded the reciprocal-integer witness needed by step 6.1 into an
  oscillation Fact whose two cited items did not state it.
- Final text adds `cor-archimedean-reciprocal`, isolates it as `[L6]`, and cites
  it exactly at step 6.1. `[L1]` remains limited to oscillation and closed
  superlevel sets.
- The proof contract records the exact `[L6]` Statement quote and sole use.
- Exact-final independent evidence: Terra `CERTIFIED`; DeepSeek `CLEAN` at
  normalized SHA-256
  `f1aeff688c93848df6b53d4c796219722734f6c4fc3e671b6b1b5922ad0c215b`.

## 3. `ex-geometric-power-series-and-an-interior-reexpansion`

Class: citation precision.

- Old step 2.1 left both `[L2]` sources unused and could be read as attributing
  the sharp interval `|x-c|<1-c` to general re-expansion theorems that only
  guarantee a smaller/some local neighbourhood.
- Final step 2.1 says `[L2]` is qualitative only and derives the formula and
  full sharp interval directly from
  `1-x=(1-c)(1-(x-c)/(1-c))` and the geometric-series theorem.
- The proof contract maps both `[L2]` citations exactly to step 2.1.
- Exact-final independent evidence: Terra `CERTIFIED`; DeepSeek `CLEAN` at
  normalized SHA-256
  `6a93b0d25da3f563708c82054b9b955f5d5cd92fa106f08238f67c042821e74c`.

No page, Wave 11, Wave 12, or Wave 14 content was repaired. The contract-only
iff worksheet correction for `thm-jordan-content-and-indicator-integrability`
did not change item text and is not an A7 target.
