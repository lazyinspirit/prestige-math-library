# Step 3b pair report — induced unitary representations of locally compact groups

## Scope and current decision

The owned pair is `induced-unitary-representations-of-locally-compact-groups` (A) and `induced-unitary-representations-of-locally-compact-groups-examples` (B), both in `representation-theory`. The exact 22 baseline IDs remain unchanged. Root reviewed and proceeded on the current AC-qualified scope at SHA-256 `ac5f691b9cadcce1dbff3cd685255e456e2f3846f7146f6cd7aef983c04f79fa`; this closes authoring-scope readiness, not item acceptance.

The IDs audited and authored are:

- `lem-closed-subgroup-quotient-averaging-and-compact-lifts`
- `def-quasi-invariant-measure-on-a-homogeneous-space`
- `def-rho-function-for-a-closed-subgroup`
- `lem-bruhat-cutoff-on-a-closed-subgroup-quotient`
- `thm-weil-quotient-integration-formula-with-rho-function`
- `thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h`
- `prop-invariant-measure-on-g-mod-h-iff-modular-functions-agree`
- `lem-radon-nikodym-cocycle-of-a-homogeneous-measure`
- `def-covariant-function-model-of-unitary-induction`
- `lem-the-induced-inner-product-is-independent-of-coset-representatives`
- `lem-compactly-supported-covariant-generators-are-dense`
- `lem-the-induced-action-is-unitary`
- `lem-the-induced-action-is-strongly-continuous`
- `thm-unitary-induction-from-a-closed-subgroup`
- `lem-equivalent-radon-measures-on-a-homogeneous-space-have-local-densities`
- `thm-induced-representation-is-independent-of-rho-function-and-measure-representative`
- `lem-composition-of-quotient-integrals-for-subgroup-chains`
- `thm-unitary-induction-in-stages`
- `ex-unitary-induction-from-the-trivial-subgroup`
- `ex-unitary-induction-from-a-cocompact-lattice`
- `ex-unitary-induction-for-a-finite-group-recovers-the-counting-model`
- `cex-g-mod-h-need-not-have-an-invariant-measure`

## Authored route and repairs

The proofs fix left cosets `G/H`, left Haar measures, `T_H f(xH)=∫_H f(xh)dh`, rho covariance `ρ(xh)=Δ_H(h)Δ_G(h)^{-1}ρ(x)`, and `g_*μ(E)=μ(g^{-1}E)`. The resulting density is `ρ(g^{-1}x)/ρ(x)`. All 22 bodies, both pages, and their proof contracts are present and audited; pure definitions are handled as definitions rather than unproved theorem entries.

Three results now explicitly assume AC, have a direct `def-axiom-of-choice` dependency and A1 fact, and retain their promised conclusions:

- `lem-radon-nikodym-cocycle-of-a-homogeneous-measure`
- `lem-the-induced-inner-product-is-independent-of-coset-representatives`
- `lem-the-induced-action-is-unitary`

The cocycle proof also declares `thm-choice-implies-dependent-implies-countable-choice`: its RMK uniqueness supplier assumes DC, and AC supplies DC by the cited theorem. Downstream induction, continuity, measure independence, density, and stages items already state AC; their A1 uses were checked and recorded.

Other supplier repairs are local and declared in both item files and manifest: the main induction theorem uses the cocycle lemma for the invariant-measure reduction; the cocompact example uses the rho-function definition to verify the covariance convention; and the affine counterexample uses the abelian-unimodularity proposition to prove `Δ_H=1`. The Weil construction records the positive-functional RMK representation theorem and uses it only after verifying its actual input is a positive real-linear `C_c(G/H)` functional on the LCH space `G/H`.

The affine counterexample has no dependency on the affine-group examples page. Its own proof verifies that `H={(0,a):a>0}` is closed, identifies `G/H` homeomorphically with `R`, proves affine pushforwards of Haar measure on `R` are positive scalar multiples, computes the left Haar density `a^{-2}db da`, and obtains `Δ_G(0,t)=t^{-1}`. The published abelian-group result gives `Δ_H=1`; the invariant-measure criterion then rules out a nonzero invariant Radon measure. The Lebesgue-Radon supplier assumes countable choice, which the proof derives from its explicit AC hypothesis.

The original attempt log records no termination cause. This report does not infer one.

## Source evidence

The coverage file retains the complete-text fetch stamps and section harvest. The 523-page Bekka–de la Harpe–Valette PDF mirror was verified at 1,971,873 bytes, SHA prefix `0281823290dfb42e`; the cited Appendix B and E ranges were inspected, and the source itself labels its induction-in-stages proof a sketch. Bruhat’s complete 140-page lecture text was verified at 599,589 bytes, SHA prefix `f96f18587433e1df`; its right-coset convention was translated into the page’s left-coset convention. Vogan’s complete five-page induced-representation note and three-page homogeneous-space note were also fetched and inspected, with hashes recorded in coverage. No unverified truncated body was used as full-text evidence.

## Supplier closure and checks

The current `plan-spec.json` recursive `requires` closures contain every declared supplier home: A closure 198 pages and B closure 208 pages. There are no missing supplier homes, no no-home suppliers, and no A-page edge to a B-page item. The B page continues to require its A page.

Observed scoped checks:

- Targeted precheck: 20 proof-bearing items checked, 0 failures; the two definition-only items are not proof-bearing.
- Strict proof contracts: 22/22 checked, 0 errors, 0 warnings.
- Batch-16 manifest-only dependency levels: 22 items, no errors. An earlier run-wide check passed 812 items across 60 pages (maximum level 24); the final rerun during concurrent authoring reported one unrelated mismatch outside this scope: `thm-principle-of-descent-and-domination` is labeled level 3 but computes to 2. Root was notified; no out-of-scope file was edited.
- Manifest dependency audit: 22 items, 0 missing dependency arrays, 0 errors.
- Content policy: all 22 scoped items, 0 errors, 0 warnings.
- Coverage checklist: one harvested A page, 51 source results, 0 errors, 0 warnings. Supplier-use/hypothesis audits for both pages are recorded separately in the coverage extension.
- Render check: all 22 items and both page files (24 files) pass YAML, delimiter, and KaTeX rendering checks.

## Coverage declines retained

The A-page source harvest has ten deliberate declines, all with current explanatory reasons and validated destinations where deferred: one deferred result, BHV Example E.1.8(iii) to `sl2-r-principal-and-complementary-series`, and nine out-of-scope results. Those nine are BHV Theorem B.1.4(ii), Propositions E.2.1, E.2.2, E.2.5, Corollary E.2.3, Corollary E.2.6; Bruhat’s relatively-invariant-character extension remark; and Vogan’s §1 adjunction motivation and §2 ring-module example. The exact reasons remain in the coverage rows. Run-wide grouped Step 8 decline decisions are outside this helper’s file scope and remain for root/Alpha review; this report does not create shared decision receipts.

## Handoff

All allowed pair artifacts and owned item content are complete. Current ordinary item-review receipts are recorded on the exact 22 IDs after examination. Root retains central certification and recertification after the other live authors drain.
