# Batch 23 authoring notes — Positive harmonic conformastatic electrovac data

Run: physics-remaining-80-2026-10-17  
Role: beta  
Owned pair: emg-ms03 / emg-ms03-examples  
Status: 14 assigned items authored; all 14 have current Step 1 ready records.

## Plan, design, and inventory

The complete design section “Positive harmonic conformastatic electrovac data” at L782 of research/plan-einstein-maxwell-models-track.md and the matching entries in research/plan-spec.json agree on the pair, titles, mathematics library/category, A-page order 481, and the A-page requirements emg-mm02 and emg-ms01; the B page requires the A page. The final A/B manifest retains those requirements and includes all 10 reserved A items and all 4 reserved B items. Both pages are below the 100-item cap.

The old source reservation in research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json additionally lists EMG-MG01 as a direct page requirement. The current design and plan-spec omit that direct edge; the controlling plan is followed, while emg-ms01 retains emg-mg01 in its own page context. That source inventory also repeats seven old generic foundations as direct item dependencies. They remain present in the actual transitive closure through current typed suppliers; the local items declare only the mathematical inputs used by their arguments.

Two stale design keys/routes were resolved locally. GR-Q1 is a research key, not a supplier item, so thm-emg-xs-br-verification computes both factor Ricci tensors from coordinates. The old nonharmonic counterexample route depended on the harmonic-only MP verification; cex-emg-xs-nonharmonic-vacuum instead uses the arbitrary-positive-H curvature table and computes a nonzero Einstein-Maxwell residual.

The A page preserves the design's three candidate-data families, direct component verification, finite multicenter flux result, single-center extremal-RN identification, and local RN throat limit. Its B companion contains the two-center specialization, the nonharmonic counterexample, the constant sphere-radius coordinate obstruction, and the null-wave zero-invariant counterexample.

## Conventions and mathematical scope

All 14 items remain domain mathematics, library mathematics, physical_scope null, with mathematical-premise dependency roles. The data use signature \((-+++)\), the geometric normalization \(Q_{ab}(F)=F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd}\), \(\operatorname{Ric}=2Q(F)\), zero cosmological constant, and the orientation and curvature convention fixed by emg-ms01. The harmonic conformastatic family has smooth positive dimensionless \(H\) on an open Euclidean domain; the arbitrary-positive-\(H\) curvature table is used before imposing \(\Delta_\delta H=0\). The product page fixes \(L>0\) and dimensionless base coordinates. The null-wave profiles have inverse-length units and the transverse addition is smooth and harmonic.

The proofs are conditional mathematical deductions, not experimental evidence or adopted physical postulates. The finite fluxes are through regular spheres in the punctured exterior; no removed center is asserted to be a regular matter point. The MP/RN coordinate equality is between open exteriors. The RN scaling proves \(C^\infty_{\rm loc}\) convergence only on \(R>0\). No horizon extension, global completeness, asymptotic flatness for the null wave, finite wave energy, stability, uniqueness, measurement, or physical realization is claimed.

The actual current geometric-electrovac and published GR geometry closures carry the named \(\mathrm{AC}_\omega\) background through their exact suppliers. That strength is retained; the local calculations add no full Axiom of Choice or countable selection.

## Dependencies and levels

The batch dependency file places batch 23 at level 5 with page predecessors 17 and 21. The 14 item levels were recomputed from current manifest item suppliers, supplier-first:

- Level 3: def-emg-xs-harmonic-mp, def-emg-xs-br-products, def-emg-xs-null-wave, cex-emg-xs-nonharmonic-vacuum.
- Level 4: thm-emg-xs-mp-verification, thm-emg-xs-br-verification, thm-emg-xs-null-wave-verification.
- Level 5: prop-emg-xs-mp-multicenter, prop-emg-xs-null-invariants, cex-emg-xs-constant-radius.
- Level 6: cex-emg-xs-vanishing-scalars, ex-emg-xs-two-center.
- Level 7: prop-emg-xs-mp-extremal-rn, thm-emg-xs-rn-near-horizon.

All direct in-run edges are listed in research/physics-remaining-80-2026-10-17-batch-23.cross-batch-dependencies.json: 26 item edges plus the two exact page edges, all verified. Direct item suppliers include the current batch-17 conformastatic chart, Lorentzian, and curvature carriers; the current batch-21 geometric electrovac and RN carriers; and batch-3 lem-emg-maxwell-current-forms. The two page suppliers are exactly emg-mm02 and emg-ms01. Published out-of-run Hodge, Christoffel, curvature-definition, coordinate-curvature, curvature-symmetry, and smooth-manifold chart suppliers are not in-run edges.

Before recording readiness, current supplier statements and relevant complete proofs were checked at their actual interfaces. The seven formerly reported missing typed foundations now exist with current ready records through the geometric-electrovac supplier. The batch-17 chart definition, Lorentzian lemma, and arbitrary-positive-H curvature lemma are current and ready; batch 3's Maxwell current-form lemma and batch 21's geometric definition, RN definition, RN verification, and RN tensor identities are current and ready. The published Lorentzian Hodge, metric-selected Christoffel, curvature-definition, coordinate-curvature, curvature-symmetry, and smooth-manifold chart interfaces were inspected. The multicenter flux proof now evaluates each Coulomb term directly on a sphere and makes no Stokes or region-as-chain inference. Present-but-draft labels do not substitute for proof inspection, and ready records establish authoring readiness only.

No assigned prerequisite is unresolved. The Hodge supplier's stated \(\mathrm{AC}_\omega\) context is inherited exactly; GR-Q1 is not treated as an item. The direct cross-batch checks are scoped interface checks, not independent proof approval.

## Sources and harvest

Two independent complete GR lecture-note treatments were inspected, with a specialized full-text paper as additional conformastatic context. Exact URLs, source extents, locators, supported items, all 13 harvested-result dispositions, fetch stamps, and limitations are recorded in research/physics-remaining-80-2026-10-17-batch-23.coverage.json and research/physics-remaining-80-2026-10-17-batch-23-sources/source-reading.md.

The Meinel–Hütten paper uses \(c=G=1\), Gaussian units, and a matter-bearing electrically counterpoised dust model; none of these conventions or matter claims is imported into the source-free geometric proof. Its matter branch is explicitly marked out of scope. There were no failed fetches, retries, drops, or source-resolution escalations.

## Proof contracts, readiness, and scoped checks

The contract file covers all 11 proof-bearing items and contains current exact supplier excerpts and numbered derivations. The three definitions have verification.precheck n/a; the 11 proof-bearing items have verification.precheck pass. Every final Step 1 record is non-owner, hash-current, and ready. No record was overwritten or escalated. These records do not constitute independent proof approval or publication.

Final scoped results:

- Precheck: 11 proof-bearing items, 0 failing.
- Proof layout: 14 items, 39 steps, 0 defects.
- Strict proof contracts: 11/11 items, 0 errors, 0 warnings.
- Rendercheck: 16 assigned item/page files, all math and frontmatter parse checks pass.
- Content policy: 14 scoped items, 0 errors, 0 warnings.
- Manifest dependencies: 14 items, 0 normalizations, 0 errors.
- Coverage checklist: 1 A page, 13 harvested results, 0 errors, 0 warnings.
- Source fetch check with --stamp: 3/3 full texts verified, 0 newly stamped; 3/3 resolved.
- Focused depcheck: 14 selected items, 0 errors, 0 warnings; 1,277 prerequisite items and 366 pages in the checked closure.
- Assigned item levels: 14/14 match current in-run suppliers at levels 3–7.
- Manifest integrity: 160 pages owed and present, with no missing or added page.

The run-wide dependency-level calculation reports 14 empty inventories on unrelated pages: emg-s02 and its examples page, tgr-pet02 and its examples page, tgr-g02 and its examples page, and tgr-phs01–tgr-phs04 with their examples pages. None is in batch 23. The run-wide proof-contract-coverage command likewise stops on the unrelated empty inventory emg-s02. The owned item-level calculation and strict batch contract check pass; shared manifests and plans were left unchanged.
