# Published prerequisite audit: Levy inversion and the sine-integral bridge

Date: 2026-09-11

## Scope

This bounded audit reads the complete published targets and the exact clauses
used by original-next-20 batch 3's sine-integral and Levy-inversion proofs. It
does not certify unused clauses, full transitive closures, or draft readiness.
Published files were read only.

Before classification, the canonical ledger was searched by each exact ID,
all listed aliases, the countable-choice mechanism, and the relevant supplier
IDs. `thm-continuous-implies-integrable` already had one U-C row, so this audit
moves and extends that record rather than creating another finding. The three
clear targets each had one U-P row and no alias collision. The existing bounded
clear for `thm-heine-cantor-r` remains unchanged.

## Audited pending repair

### `thm-continuous-implies-integrable`

Frozen SHA-256:
`9f7b29a64854ed16e3f116268e0b8ccfff9f2d57416b9a38e6ad0d86fb318edc`.

The statement assumes only continuity on a compact interval. Fact L3 and proof
step 2.1 apply `thm-heine-cantor-r`. That published supplier explicitly spends
countable choice in step 3.1 to select one bad pair for every natural index and
declares `def-countable-choice` as a dependency. The consumer neither assumes
nor declares countable choice. Its final remark acknowledges the inherited
cost, but a remark does not repair the theorem's contract.

The exact Heine--Cantor supplier was also read in full at SHA-256
`8538b8b411795af77f6ab30d886770d49862b0c82fdf45572fc951b9cfe16344`.

This is more than a missing redundant direct edge: the proof uses a theorem
whose mathematical derivation has an additional set-theoretic hypothesis.
Accordingly the existing U-C record moves to A-P after full-target and exact
used-interface review. Two repairs are available from published material:

- add countable choice to the statement and dependencies; or
- preserve the choice-free statement by taking all admissible local
  oscillation balls at once, using compactness for a finite subcover, taking a
  minimum positive radius, and applying `thm-riemann-criterion`.

The live `lem-uniform-sine-integral-bound-and-dirichlet-value` assumes the full
Axiom of Choice, so its use can explicitly invoke AC implies CC. No unavailable
published prerequisite or new Phase-2 pair is required for that authoring path.

## Bounded no-repair-needed dispositions

### `thm-ftc-second-part`

Frozen SHA-256:
`7d015074c437ab06920c0c86dd9d31adb37aede8283cc4bb73140ad635135f91`.
Aliases searched: `thm-fundamental-theorem-of-calculus-second-part` and
`thm-newton-leibniz`.

The proof applies the mean-value theorem to an arbitrary fixed partition
interval, obtains the Darboux lower/upper inequality, and sums that universally
quantified inequality. It never selects a simultaneous family of mean-value
tags. The telescoping sum then lies between every lower and upper Darboux sum,
so integrability gives the endpoint formula. This supplies the exact
integration-by-parts/primitive evaluations used by the sine-integral proof.

### `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`

Frozen SHA-256:
`3f3cd3b8814c4c1ec70afe155bae0d766ad80097fae2f8213d987b32485550d2`.
Alias list: empty.

The theorem states countable choice explicitly. Its Borel Darboux envelopes
agree almost everywhere because their nonnegative difference has integral
zero; completeness then transfers measurability to the original bounded
function. Domination by a finite constant on the finite-measure interval gives
Lebesgue integrability, and almost-everywhere equality gives equality of the
integrals. This is the exact Riemann-to-Lebesgue bridge used for bounded
truncated sine kernels.

### `thm-chain-rule`

Frozen SHA-256:
`28827465de1652f5f3817189715463cb07b645a9a4b0ddccf31a16d01336e9f6`.
Alias list: empty.

The Caratheodory-factor proof is sound: factor the increments of the inner and
outer functions without division, compose the outer continuous factor with the
inner function, multiply the two continuous factors, and apply the reverse
Caratheodory implication. The domain and limit-point hypotheses match the
supplier interfaces. This supplies the elementary derivative computations used
in the sine-integral argument.

## Reconciliation result

This batch introduces no new census ID. One existing U-C item moves to A-P and
three U-P items move to bounded clear. The existing clear classification of
`thm-heine-cantor-r` is unchanged: its own statement and proof openly name the
choice cost; the defect is in the consumer's omitted hypothesis.
