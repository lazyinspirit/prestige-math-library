# Batch 8 complex-valued derivative repair, outside cycle 1

The actual native batch-8 round-1 report identifies the direct use of the
real-valued zero-derivative corollary on a complex-valued function in
`lem-qftx-rational-torus-classifying-space-cohomology`, Proof 1.4.

Read that complete current lemma, the actual report, the complete pinned
`cor-zero-derivative-implies-constant` statement/proof and the complete pinned
`thm-complex-exponential-is-entire-with-derivative-itself` statement/proof.
The former requires a real-valued function, continuous on an order-convex
real interval, differentiable with zero derivative at each interior point.
It does not directly supply the complex-valued assertion previously used.
No external source full-text retrieval or reading is claimed.

Replaced only the offending sentence in Proof 1.4. The proof now names
`g_i(s)=exp(-2 pi i a_i s)f_i(s)` as a differentiable map from R to C=R²,
computes its zero derivative by the product rule, and explains that the
real-linear coordinate projections commute with difference quotients.
Consequently Re(g_i) and Im(g_i) are real differentiable, hence continuous,
functions on the order-convex interval R, with zero derivatives everywhere.
Separate applications of F10 make them constant. The homomorphism identity
`f_i(0)=chi(e)=1` gives `g_i(0)=1`; their constants are therefore 1 and 0.
This establishes `g_i=1` and the existing exponential formula. The unchanged
period-one argument then gives integer weights and the unchanged character
classification and Chern-class conclusion.

No Statement, Definition, dependency declaration or public interface changed.
Only this lemma source was edited. No manifest, contract, plan, level, coverage,
readiness, authority, native state, certificate or receipt was edited; no gate,
rehash, commit or backup was performed.

## Bounded consumer-use consequences

Read the complete current `def-qftx-character-localization`, particularly F2
and Proof 1.1/2.1. They consume the same unique integer-weight classification,
the same character Chern-class formula, and nonvanishing for a nontrivial
character. Those conclusions and hypotheses remain unchanged and now have
the corrected componentwise argument. This consumer needs no source change.

Read the relevant Facts/proof passages of the other six consumers listed in
the native report. These are focused checks of the reported prerequisite use,
not independent reviews of their entire proofs:

- `lem-qftx-fixed-normal-euler-class-is-unit-after-character-localization`:
  F2 and Proof 2.1/3.1 consume nontrivial character classes as generators of
  the same multiplicative set. Unaffected by this proof-only correction.
- `lem-qftx-nonfixed-locus-cohomology-is-torsion-after-localization`:
  F3 and Proof 1.2/2.1 use those same classes as invertible denominators.
  Unaffected by this proof-only correction.
- `thm-borel-localization-for-compact-torus-actions`: F2–F4 and its localized
  exact-sequence/Euler arguments use the unchanged localization and the two
  preceding conclusions. Unaffected by this correction.
- `ex-qftx-borel-localization-rotation-on-projective-line`: F1 and Proof 1.1
  use the same weight-one and inverse-character classes u and -u.
- `ex-qftx-borel-localization-free-circle-orbit`: F3 and Proof 2.1 use the
  same weight-one denominator u.
- `ex-qftx-borel-localization-positive-dimensional-fixed-components`: F1
  and Proof 1.1 use the same classes u and -u; F3's finite-free homology use
  is untouched by the character-proof correction.

All seven reported consumer uses retain the same interfaces; no consumer edit
or outside source write is required for this finding. Existing readiness prose
in examples was observed but is outside this single scientific finding and was
not changed or represented as resolved by this repair.

## Focused check after final source edit

From physics cwd:
`node tools/physics-support/proof-layout.mjs items/lem-qftx-rational-torus-classifying-space-cohomology.md`

Exit 0: `proof-layout: 1 items, 9 steps, 0 defects`.
Root retains scientific adoption and native owner-resolution authority.
