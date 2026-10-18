# Batch 62 FTC prerequisite owner resolution

Run: numerical-analysis-remaining-71-2026-10-17. Completed 2026-10-18 after rereading CLAUDE.md and the full native batch-62 review-1.json, then the complete current commutator lemma, published FTC supplier, continuity/integrability/MVT suppliers and the two named consuming theorem claims/proofs. This is focused owner evidence, not another native whole-batch review or gate receipt.

## Actual before-images and change scope

Exact actual pre-owner carriers are archived in scope62-before/ for:

- lem-periodic-fv-grid-reaction-diffusion-commutator-bound.
- thm-periodic-reaction-diffusion-lie-error-estimate.
- thm-cell-centered-no-flux-reaction-diffusion-lie-error.

Only items/lem-periodic-fv-grid-reaction-diffusion-commutator-bound.md was edited. Its Statement and all original constants, range, diffusion and mesh assumptions are unchanged. The complete native pointwise chain/product expansion and prior gradient bound are preserved. No new helper or stronger C² hypothesis on u was introduced. Both consumer carriers and the A-page remain unchanged. No outside source or native state/control/report was edited.

## Confirmed defect and exact missing premises

The original proof steps 1.1 and 2.1 invoked FTC without declaring thm-ftc-second-part. I read that supplier's complete current Statement and proof: it requires differentiability at all points of the compact interval, including one-sided endpoint derivatives, and Darboux integrability of the derivative. It does not justify integrating every bounded derivative automatically.

The actual commutator Statement assumes bounded existing spatial derivatives through order two; it does not explicitly assume continuous second derivatives. Consequently, merely citing FTC while keeping the original printed integrals of w''/g'' would leave an integrability gap. No Darboux integrability of an arbitrary bounded second derivative was assumed or invented.

With root's explicit approval the proof now uses the continuous-first-derivative route:

- Added thm-ftc-second-part, thm-continuous-implies-integrable, cor-mean-value-theorem and cor-differentiable-implies-continuous to deps and exact Facts F3–F6. Each supplier was read in full, including its proof. These are ordinary published prerequisite context, not new external proof fallbacks.
- In step 1.1, w is twice differentiable with bounded w''. The first derivative w' is differentiable and hence continuous. Therefore s -> w'(x+s)-w'(x-s) is continuous and Darboux integrable on [0,h]. FTC applied to s -> w(x+s)+w(x-s)-2w(x) gives the centered difference as the integral of this continuous first-derivative difference. MVT on w' gives |w'(x+s)-w'(x-s)|<=2s||w''||_infinity. Integrating yields the identical h²||w''||_infinity bound, with no dimension factor or continuity/integrability assumption on w''.
- In step 2.1, g' is continuous for the same reason. FTC applied to r -> g(r)-g(0)-r g'(0) gives the remainder as integral_0^s[g'(r)-g'(0)]dr. MVT on g' bounds the integrand by r H_kj. Thus the same s²H_kj/2 remainder and s|partial_j u_k|<=w_k+s²H_kj/2 follow. The optimized sqrt(2w_kH_kj) estimate and its zero-width/zero-H cases remain identical.

The one-sided endpoint derivatives exist because the scalar coordinate functions are restrictions of differentiable periodic lifts. Continuous integrability is supplied explicitly on every finite interval used; MVT applies to a continuous first derivative differentiable in the interval interior. The scalar/componentwise argument introduces no extra norm constant. Step 3.1 retains exactly the original mesh-independent C_com dependence on R, D²u, DF, D²F, dimension and D.

## Focused consumer dispositions

No Statement or Definition changed, so no new interface propagation is triggered. The existing direct and indirect consumer uses were nevertheless checked by the same owner, as requested.

| Consumer/context | Disposition |
| --- | --- |
| thm-periodic-reaction-diffusion-lie-error-estimate, Fact F4 and proof 3.1 | Accept unchanged. Its C¹_t C⁴_x sampled solution satisfies the repaired commutator lemma's original hypotheses. Step 3.1 still obtains the same grid-independent bound on A_h F_h(Y_h) using the commutator and bounded DF/A_hY_h. Its own centered-difference identity concerns C² scalar components, so there the second derivative is continuous/integrable and its already declared FTC Fact F10 is sufficient; no change is needed. |
| thm-cell-centered-no-flux-reaction-diffusion-lie-error, proof 4.1 | Accept unchanged. The stated even C¹_t C⁴_x reflection satisfies the periodic theorem; the finite intertwining and identical maximum norm transfer its same tau+h_max² estimate. No new assumption or constant is passed downstream. |
| reaction-diffusion-invariants-and-pattern-discretization | Accept unchanged after reading its current inventory and summary. Its smooth periodic/rectangular no-flux accuracy scope is exactly retained; the repaired prerequisite is internal proof context. |

The commutator has aliases: []. A source reference search over items/ and library/ finds its direct theorem consumer and A-page; the named no-flux theorem is the corresponding indirect consumer. No outside consumer repair is necessary, and no published supplier was edited.

## Explicit final check and root handoff

The first explicit proof-layout check reported one invalid trailing tag group in step 2.1. The generic “chain rule”/“product rule” labels were removed from that group while retaining the actual expanded chain/product calculation and all relevant Fact/step/algebra citations. After that final source edit ran:

`node tools/proof-layout.mjs items/lem-periodic-fv-grid-reaction-diffusion-commutator-bound.md`

Actual final result: exit 0; `proof-layout: 1 items, 3 steps, 0 defects`.

No tests, full validators, gates, native report/control edits, contracts, levels, hashes, readiness or recertification were performed. Root owns dependency/Facts mirrors, proof-contract quote updates, current source hashes and the native owner resolution. The single final native prerequisite finding and its actual finite-integrability bridge are substantively resolved without changing the approved Statement or constants.
