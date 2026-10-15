# Step 3a reader report — batch 3

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Scope: batch `3`

## Inventory reviewed

Opened both assigned draft pages:

- `td-math-ordered-composition`
- `td-math-ordered-composition-examples`

Opened all 20 assigned items in dependency order. The A page contains:

- `def-tdmath-tagged-scalable-compound`
- `lem-tdmath-compound-mass-well-defined`
- `def-tdmath-comparison-and-stability`
- `def-tdmath-signed-comparison`
- `lem-tdmath-reciprocal-naturals-tend-zero`
- `lem-tdmath-spectator-cancellation`
- `lem-tdmath-reference-order`
- `lem-tdmath-reference-supremum-bounds`
- `thm-tdmath-additive-entropy-representation`
- `thm-tdmath-affine-entropy-uniqueness`
- `thm-tdmath-common-meter-calibration`
- `thm-tdmath-finite-inequality-alternative`
- `thm-tdmath-reaction-offset-feasibility`
- `def-tdmath-type-offset-vector-space`
- `lem-tdmath-type-offset-vector-space-well-defined`
- `thm-tdmath-infinite-no-sinks-sandwich`

The examples page contains:

- `ex-tdmath-reference-order-two-state`
- `ex-tdmath-common-meter-two-types`
- `ex-tdmath-reaction-offset-cycle-obstruction`
- `ex-tdmath-no-sinks-sandwich-on-r`

Read the relevant definitions and exact statements/facts of every direct external mathematical supplier in the batch dependency closure, including the finite-sum and order laws, natural-number and real-field suppliers, vector-space and basis results, and the published real Hahn–Banach dominated-extension theorem. Also opened `def-ordered-field` and `def-field` for the reciprocal-positivity derivations added during review. These imported mathematical suppliers are published and read-only; this review checked the exact statements used, not every supplier's separate bibliography or full proof history.

Reviewed all 20 records in `research/physics-td-qft-rpm-62-2026-10-14-batch-3.proof-contracts.json`, including citation mappings, derivation maps and boundary records. After repair, a source-to-contract comparison found every numbered derivation claim matched its current item step.

## Source checks

The Lieb–Yngvason paper was checked at the relevant portions of §§II.C–E and VI.B. Section II.C, Theorem 2.1 gives stability-based cancellation; §II.D, Lemma 2.2 gives the two-state reference ordering and Lemma 2.3 characterizes the entropy supremum, followed by Theorems 2.2–2.3 for representation and affine uniqueness. Section VI.B, Theorem 6.2 gives the conditional Hahn–Banach construction of additive entropy constants. The local items make their own stronger/generalized claims conditional and provide the remaining arguments.

The Stanford EE464 Fourier–Motzkin notes state exact projection by pairwise elimination and identify the resulting nonnegative zero-row/positive-right-side certificate as Farkas' lemma (slides 10–23). Daners, *Introduction to Functional Analysis*, Theorem 26.1 states the real algebraic Hahn–Banach dominated-extension result used by the in-run theorem (PDF pp. 94–95). The linked Math 521 course notes explicitly record $\lim 1/n=0$ in Chapter 20; their linked URL is not Rudin's book, so I corrected the item's bibliographic title to match the actual source. The Campión et al. survey PDF URL could not be retrieved by the web tool; I did not rely on that PDF to resolve a claim.

## Repairs

1. In `lem-tdmath-spectator-cancellation`, Step 3.1 previously asserted that cancelling the pointwise common minimum leaves exactly the positive and negative parts of the sum, without showing the identity. It now defines the two nonnegative sums and their pointwise minimum, proves the two residual identities by cases, and applies the cancellation result from Step 1.2. The Statement and dependencies are unchanged. Updated that item's Step 3.1 contract derivation.

2. In `lem-tdmath-reference-order`, Step 2.1 used scaling by $1/(-\delta)$ without establishing that this scalar is positive. It now derives reciprocal positivity from the ordered-field trichotomy and positive-product axiom before applying positive scaling. The Statement and dependencies are unchanged. Updated that item's Step 2.1 contract derivation.

3. In `thm-tdmath-common-meter-calibration`, Step 2.1 used $1/T$ to normalize the meter expressions without justifying its positivity, and left the order-preserving rescaling implicit. It now derives $T^{-1}>0$ from the ordered-field axioms and states that multiplying by $T>0$ preserves order. The Statement and dependencies are unchanged. Updated that item's Step 2.1 contract derivation. The same contract contained a stale Step 1.1 claim with `e_{r_i}`, `e_{z_0}`, and `e_{z_1}`; the current item uses the distinct raw tags `e_{\rho_i}`, `e_{\zeta_0}`, and `e_{\zeta_1}`. I corrected that contract claim to match the current proof.

4. In `lem-tdmath-reciprocal-naturals-tend-zero`, the source title said Rudin while its URL points to Math 521 course notes. I changed the title to “Math 521 – Spring 2010 course notes, Chapter 20”; the URL is unchanged. The proof itself was already complete and unchanged, so its proof-derivation contract did not need modification.

No stale `verification.judge` record was present on the changed items.

## Validation

Reflow reported `unchanged` and precheck passed for all four changed item paths:

- `lem-tdmath-spectator-cancellation`
- `lem-tdmath-reference-order`
- `thm-tdmath-common-meter-calibration`
- `lem-tdmath-reciprocal-naturals-tend-zero`

The final required `proof-layout.mjs` invocation covered those four paths but could not complete: its renderer failed to resolve the `@/components` package imported by `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`. This is the remaining handoff blocker; no item formatting failure was reported by precheck.

## Page verdicts

- `td-math-ordered-composition`: the comparison axioms are explicitly stated as mathematical hypotheses. The finite-support constructions and conditional representation, uniqueness, calibration, reaction-offset, quotient-space, and no-sinks conclusions follow from the supplied prerequisites and the local proofs, after the listed repairs. No unresolved page-summary or item-mathematics defect was found.
- `td-math-ordered-composition-examples`: all four examples follow from their exact assigned supplier statements and stated input data. The two-state stability example verifies the required limiting implication; the common-meter example retains compatibility as a hypothesis; the cycle certificate and real-line sandwich calculations are correct. No unresolved page-summary or item-mathematics defect was found.

## Unrepaired findings and blocker

No confirmed defect remains in the assigned pages or items, and no defect was found in an external published supplier. The only blocker is the renderer import failure preventing the final proof-layout check. The Campión survey URL retrieval limit is recorded above; the conclusions were established from the complete local arguments and the other inspected suppliers.
