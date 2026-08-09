# Wave 9 A3 orchestrator decision receipt

Decision completed: 2026-08-09

Status: **A3 complete; A4 authorized with the overrides below.** I verified
the batch manifest, the 43-row provenance ledger, the 34 proof contracts, the
findings register, both page files, every proposed item target, and the cited
licensing clauses from disk. A fresh GPT 5.6 Sol `xhigh` reader independently
reproduced the proposal checks and the Wave 8 reconciliation surface. No item
or library page is changed by this receipt.

Scope integrity is exact: 43 distinct scoped ids and 43 unique ledger rows;
34/34 proof-bearing ids have contracts; all 286 numbered steps and 272 boundary
dispositions are present. The baseline strict contract result is the honest
34/34 checked, two errors and zero warnings, both from proof-unused Facts that
A4 is authorized to remove. Recomputing the cross-wave graph gives exactly 65
relationships from 29 Wave 9 source ids into 17 Wave 8 targets, all in the
cantor-continuity batch and exactly matching the findings register.

## Mathematical and citation decisions

1. `def-oscillation` — **APPROVE**. The current unrestricted claims that both
   oscillations are nonnegative and that a bounded function has only real
   oscillation values contradict the explicit convention
   `omega_f(emptyset) = -infinity`. Apply the proposed nonempty-set/point
   qualification and retain the explicit empty-set exception.
2. `thm-baire-one-continuity-points` Remark — **APPROVE**. Baire class one
   supplies the approximating sequence in 1.1, its pointwise convergence in
   2.2/4.1, and approximant continuity in 2.1/4.2. Step 1.3 instead uses only
   L9. The proposed replacement records those uses accurately.
3. `library/real-analysis/monotone-functions-and-discontinuities.md` —
   **APPROVE** the narrow sentence repair. Left-limit-as-supremum and
   right-limit-as-infimum are the nondecreasing formulas; the roles reverse for
   nonincreasing functions. This is delegated correction of a mathematical
   falsehood in page prose, not a structural summary rewrite. The broader
   eleven-paragraph summary-shape debt remains recorded under prose triage.
4. `thm-continuity-set-realisation` Remark — **APPROVE WITH OVERRIDE**. The
   submitted replacement still says the construction does not produce a
   monotone example, but for `G = R` it produces the monotone zero function.
   Use exactly: “**The construction does not guarantee monotonicity, and the
   theorem does not claim it.** The function built above always takes values in
   `[-1,1]`, so it is bounded; no further behaviour beyond its continuity set
   is asserted.”
5. `thm-baire-one-continuity-points` L3 — **APPROVE** removal of L3 and the
   now-unused `thm-continuity-iff-oscillation-zero` dependency. No numbered
   step uses L3, while L9 already licenses the relevant claims. This is
   delegated Fact-inventory/citation cleanup, not deletion of a published item.
6. `fs-additive-implies-linear` L5 — **APPROVE** removal of L5 only. Keep
   `thm-cauchy-functional-equation-regularity` in `deps`, because the Statement
   and Remarks still cite it substantively. Do not fabricate a numbered-step
   use.
7. `thm-semicontinuous-evt` — **APPROVE WITH OVERRIDE**. Add L7 in the faithful
   symmetric form: for any `h : K -> R`, `h` is upper semicontinuous iff `-h`
   is lower semicontinuous; hence lower semicontinuous `f` makes `-f` upper
   semicontinuous. Cite the exact “Negation exchanges the two” clause of
   `def-semicontinuity`, and change step 9.1 to `[step 8.1, L7]`.

After items 5--7, regenerate the affected contracts from final text. Required
strict result: 34/34 checked, zero errors, zero warnings.

## Provenance decisions

**APPROVE WITH THREE OVERRIDES** the 43 component-level determinations and
reader-visible source additions. Preserve every legacy `origin` field. No
scoped item has a legacy `authorship` field, so A4 removes none.

- `def-intermediate-value-property`: change from
  `literature-derived` / `exact-source` to `ai-altered` /
  `semantic-source`. The Encyclopedia of Mathematics gives the classical
  pointwise Darboux form, while the local item merges it with an arbitrary-
  interval/every-subinterval image formulation.
- `thm-continuity-set-realisation`: retain `ai-altered` /
  `semantic-source`, but replace the false “closed-set-distance construction”
  rationale. The on-disk construction uses decreasing open sets and opposite
  rational/irrational signs.
- `fs-intermediate-value-property-implies-continuity`: retain the sourced
  statement classification, but correct the rationale: the source's standard
  `sin(1/x)` witness is adapted here to the library's `psi(1/x)` nearest-
  integer-distance oscillator. Record that adaptation as the reason the local
  proof is `ai-altered`; do not say the source witness is used verbatim.

All other 40 rows are approved as submitted. No `established-knowledge` waiver,
Alpha-concurrence deferral, or positive-novelty uncertainty remains.

## A4 and later-wave barrier

The owning Beta may now apply only these approved changes and pure retags. A6
must reopen the recorded 65 Wave 9-to-Wave 8 relationships against Wave 8's
final repaired text before Wave 9 is frozen or judged. Wholesale A-page prose
rewrites and positional/style cleanup remain recorded, not chased.
