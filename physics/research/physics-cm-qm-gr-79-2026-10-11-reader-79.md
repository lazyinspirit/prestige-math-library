# Reader report — batch 79

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: independent reader  
Scope: batch `79` only

## Opened inventory

Opened both assigned page files:

- A page: `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability` — 25 items.
- B page: `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability-examples` — 4 examples.

Opened all 29 listed item carriers. A-page items, in the manifest order, were:

`def-gr-development-and-data-fixing-isometry`, `def-gr-common-subdevelopment-and-corresponding-boundary`, `lem-gr-subdevelopment-convexity`, `lem-gr-portion-inextendibility`, `lem-gr-isometric-immersion-rigidity`, `lem-gr-data-fixing-immersion-is-embedding`, `lem-gr-maximal-common-development`, `lem-gr-corresponding-boundary-structure`, `lem-gr-corresponding-set-smooth-extension`, `lem-gr-compact-past-above-cauchy-set`, `lem-gr-geodesic-extension-from-compact-length`, `lem-gr-boundary-null-geodesic-segment`, `lem-gr-exposed-boundary-point`, `lem-gr-time-separation-maximizers`, `lem-gr-spacelike-restart-hypersurface`, `lem-gr-partial-cauchy-development`, `lem-gr-no-corresponding-boundary-points`, `lem-gr-intersection-of-developments`, `lem-gr-development-pair-gluing`, `lem-gr-universal-development`, `lem-gr-development-quotient-dense-set`, `lem-gr-development-quotient-second-countable`, `thm-gr-smooth-maximal-globally-hyperbolic-development`, `pthm-gr-smooth-maximal-development`, and `rem-gr-mghd-scope`.

B-page examples: `ex-gr-minkowski-maximal-development`, `ex-gr-translated-minkowski-common-development`, `ex-gr-flat-restart-level-set`, and `ex-gr-minkowski-rational-dense-and-basis`.

For dependency context, I opened `def-gr-causal-curves-and-reachability`, `def-gr-smooth-lorentzian-objects`, `def-gr-perfect-fluid-matter-model`, `def-gr-dust-matter-model`, `lem-gr-maximal-geodesics-and-extension`, `lem-gr-cauchy-set-topology-and-graph`, `lem-gr-push-up-rule`, `thm-gr-cauchy-surface-implies-globally-hyperbolic`, `thm-gr-local-geometric-development`, `lem-gr-local-cauchy-neighborhood`, and `post-gr-field-and-matter-assumptions`. I checked the relevant arguments in Sbierski, *On the Existence of a Maximal Cauchy Development for the Einstein Equations — a Dezornification*, arXiv:1309.7591v3, §§3.1–3.3 (including Lemma 3.9, Lemma 3.11, Theorems 3.6 and 3.13), and Minguzzi, *Lorentzian Causality Theory* (2019), especially the corner-regularization and global-hyperbolicity results.

## Edits and evidence

1. In `lem-gr-subdevelopment-convexity`, replaced the time-orientation reversal used for clause (b) with a direct past-side argument in the original orientation. The proof extends a past half of a future timelike maximal geodesic at the initial point, then concatenates the given future causal segment. Both ends of the resulting curve have no limit in the open subdevelopment, while the full curve lies in the past of the Cauchy surface, contradicting its Cauchy property. This preserves any future-directed matter fields tied to the given time orientation. I also placed clause (b) before clause (c) in the canonical proof order and updated its step references.

2. In `lem-gr-intersection-of-developments`, removed the reduction that replaced `N` by `-N`. The proof now handles both sides separately. On the past side it uses the compact set `J^+(gamma(t0)) intersect J^-(Sigma)`, bounds the future-tail auxiliary length, takes its limit, and uses clause (b) of subdevelopment convexity to force the limit into both open developments. Facts [L1], the proof contract's derivations/citation-use records, and the boundary worksheet anchors were updated. I checked the downstream universal-development construction, which uses this intersection result to establish transitivity of the pairwise identifications.

3. In `lem-gr-development-quotient-second-countable`, revised the title and Statement to present its proved public claim as the explicit rational-exponential basis. The former headline conclusion was redundant under its premise: the item assumed `Q` as in `lem-gr-universal-development` clause (d), which already states that `Q` is second countable. The proof establishes the stronger useful content that the displayed family is a countable basis. I checked the consumers `thm-gr-smooth-maximal-globally-hyperbolic-development` and `ex-gr-minkowski-rational-dense-and-basis`; both use the countable-basis result and remain supported. The proof-contract derivation record was refreshed.

None of the three edited items had a `verification.judge` record to remove. Reflow reported both repaired proof items unchanged after the final edits. Precheck passed for all three changed items. The final proof-layout command covered the three changed carriers: 19 steps, 0 defects.

## Unedited finding

`lem-gr-no-corresponding-boundary-points`, Proof step 1.1 (also repeated in Remarks), says that replacing `N` by `-N` preserves the development hypotheses and matter model. That is false for the admitted orientation-dependent sectors: `def-gr-perfect-fluid-matter-model` and `def-gr-dust-matter-model` require their unit velocity fields to be future-directed relative to `N`. Keeping those fields fixed while replacing `N` reverses the strict sign condition; replacing the fields as well would require a time-reversal covariance hypothesis not imposed on additional fixed models. The step therefore does not justify reducing a past-only corresponding-boundary set to the future-only exposure and restart suppliers. The owner needs a past-directed exposure/restart proof that keeps the fixed model and fields, or an explicitly restricted and verified time-reversal transformation for the model class.

## Page verdicts

- A page: **hold**. The local construction is substantial and its principal supplier-before-consumer chain was checked, but the final no-corresponding-boundary proof has the unclosed scope defect above. The maximal-development theorem and its physical packaging therefore remain unsupported for the full stated model class pending that repair.
- B examples page: **hold on the A-page prerequisite**. No separate fatal defect was found in the four example computations; their maximal-development or quotient conclusions use the A-page results whose closure is held.

## Blocker and coverage limit

There is no process blocker. The remaining mathematical blocker is the past-only case in `lem-gr-no-corresponding-boundary-points` for the full admitted fixed-model scope.

I opened all assigned pages and all 29 assigned items, but I did not independently open every transitive prerequisite in the A page's 88-page `requires` closure or every one of the 92 distinct external direct dependencies. The dependency review above names the supporting suppliers I did open. Other supplier-chain defects outside those passages may remain; this report does not claim a complete external dependency audit.
