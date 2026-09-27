# U-P review: shard 01 report

Completed 2026-09-23. All 163 assigned items have primary receipts in exact assignment order. Five later amendment receipts update earlier findings; apply them over the primary receipts when reconciling. No item was skipped or reviewed out of order.

## Results

- Accepted: **94** (93 bounded-clear; one bounded-recorded).
- Repaired: **34**.
- Deferred in U-P: **35**.
- Focused precheck and rendercheck were run for edits; `git diff --check` is clean. No build or autopilot transition, commit, global configuration edit, or sub-agent was used.
- The workspace contains many edits from concurrent reviewers. This shard changed only assigned items and its own review artifacts; the receipt for each item identifies the exact files it changed.

## Repaired items

Each repair is limited to the original page or its authorized same-shard consumer. Exact proof changes, sources read, check results, and interface impact are in the corresponding receipt.

- `cor-meromorphic-great-picard-theorem`
- `ex-splitting-the-theta-mellin-integral-isolates-the-two-polar-terms`
- `lem-near-identity-c-one-maps-sandwich-cubes`
- `thm-density-integration-is-defined-without-an-orientation`
- `prop-homology-of-the-derived-tensor-product-is-tor`
- `ex-kunneth-for-two-cyclic-two-term-complexes`
- `def-henstock-kurzweil-integral-on-a-compact-interval`
- `def-segre-map`
- `ex-auslander-buchsbaum-first-syzygy`
- `ex-cofinite-topology`
- `ex-degree-order-is-representative-independent`
- `ex-hopf-formula-from-a-one-relator-presentation`
- `ex-maximal-cohen-macaulay-module`
- `ex-np-is-contained-in-p-sharpp`
- `ex-parameter-sequence-regular-in-a-hypersurface`
- `ex-shoenfield-limit-lemma`
- `ex-two-homology-theories-with-different-coefficient-groups`
- `ex-zero-dimensional-rings-cohen-macaulay`
- `fs-nl-equals-conl-follows-by-state-swapping`
- `fs-unrestricted-diagonalization-respects-any-bound`
- `lem-additive-is-q-linear`
- `lem-finitely-many-critical-values-can-be-separated-locally`
- `rem-rn-conventions-and-scope`
- `thm-bipolar-closure-for-linear-subspaces`
- `thm-cartan-matrix-is-d-transpose-d`
- `thm-central-characters-are-algebraic-integers`
- `thm-circuit-value-is-p-complete`
- `thm-gap-and-union-theorems-for-complexity-bounds`
- `thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups`
- `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`
- `thm-p-is-contained-in-p-poly`
- `lem-clocked-machine-construction`
- `ex-a-nonzero-tor-correction-in-universal-coefficients`
- `thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k`

## Deferred items and remaining obligations

These remain U-P. This list is an index; the receipts and impact files give the exact mathematical evidence and affected uses.

- `thm-prime-number-theorem-logarithmic-integral`: Reconcile countable-choice premises along the exact published supplier path, or provide an independently verified choice-free theta estimate. Then qualify this theorem if its proof still uses a choice-bearing supplier. Its analytic supplier closure was not independently certified here.
- `cor-zeta-zero-count-unit-interval`: Reconcile countable choice along the completed-zeta to zero-count path, or supply a verified choice-free zero-count theorem, then decide the necessary premise for this corollary.
- `lem-von-mangoldt-explicit-formula-residues`: Reconcile countable-choice premise in global zeta continuation, functional equation and this residue lemma, or supply a verified choice-free global continuation and zero classification.
- `lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator`: Supply a complete local asymptotically hyperbolic first-order Fredholm/index/range theorem, including half-line right inverses, then justify its application after trivializing gamma*TM and identifying Eu/Es with stable/unstable tangent spaces; or authorize a precisely cited external-theorem fact if local proof supply is not required. No new lemma ID/page was requested because a complete local proof is not yet ready.
- `prop-centralizer-of-a-cartan-element-from-its-vanishing-roots`: Repair or replace the old root-decomposition proof with an exact published supplier. If the available Phase-2 supplier with AC is used, propagate AC into this proposition and trace all published consumers of that Statement change; alternatively prove the required decomposition without choice.
- `ex-a-five-as-the-smallest-nonabelian-simple-group`: Prove from published finite-group tools that no nonabelian simple group has order below 60, or move this zero-consumer example to an explicitly recorded result with honest source scope.
- `ex-free-groups-and-their-cantor-boundaries`: Provide a complete local homeomorphism from the Gromov-product boundary of the free-basis Cayley tree to infinite reduced words with cylinder topology, including compactness/perfectness/Cantor identification, or an exact fully proved supplier; separately reconcile the general boundary-topology theorem if it remains a dependency.
- `lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction`: Supply a complete, published proof of the DG-30 Cartan conjugacy root and close the density supplier's semisimple-in-Cartan and algebraic-group/dominance steps, or replace those with a complete independent proof of injectivity. Until then this lemma remains U-P.
- `lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients`: Publish and verify the existing AT-24 simplicial/polyhedral suppliers and close the finite-CW comparison and sphere-degree-action proofs, or supply a complete independent arbitrary-coefficient degree-action proof. Until then this incidence-matrix lemma remains U-P.
- `lem-classical-subharmonic-mean-value-inequalities`: Shard 05 must close the exact radial divergence/measure bridge with a complete proof and compatible AC_omega contract, or an independent choice-free derivation. Then recheck the forward inequalities; until then U-P.
- `lem-complex-exponential-series-converges-everywhere`: Root must move this raw convergence lemma immediately before def-complex-exponential in library/real-analysis/the-complex-exponential-and-eulers-formula.md, retaining the definition's justified_by edge, then recheck page order. Until then the original forward-order U-P reason remains.
- `lem-depth-quotient-by-regular-element`: Require a complete choice/resolution-qualified depth-via-Ext chain, or an independently proved choice-free depth-drop route, then trace every load-bearing published consumer before any interface change. The related maximal-regular-sequence lemma is assigned later in this shard and must be reviewed in its turn.
- `lem-distinct-components-commute`: A complete audited proof or an explicit recorded, not-proved-here classification is needed; the direct generalized-Fitting consumer cannot count this as a proved supplier. Root must coordinate any dependency-edge removal on the other item.
- `lem-maximal-regular-sequences-have-common-length-ext`: Supply an exact choice/resolution-qualified chain or a complete choice-free replacement, make the backward nonvanishing argument explicit, and propagate any changed claim through the first-nonzero-Ext corollary and its published uses. Retain U-P meanwhile.
- `lem-reduced-noetherian-total-fractions-and-normal-components`: Either prove the minimal-prime and local-normality route under the exact unqualified contract or state a sufficient choice premise and trace the full published normality consumer closure. No interface edit made while these uses remain unresolved.
- `lem-regular-semisimple-elements-form-a-dense-open-subset`: Publish and audit the DG-30 Cartan proof, repair the shard-03 regular-locus supplier, and supply the algebraic image/open-map bridge or a complete alternative; then recheck this proof and its invariant-polynomial consumer. Cross-shard event agent-01-regular-locus-supplier-1 records the shard-03 dependency; Cartan event was already routed.
- `lem-serre-r-zero-s-one-characterises-reducedness`: Either prove the exact reducedness criterion and suppliers without choice or add a sufficient choice premise to the original claim and trace the complete published Serre-normality closure; retain U-P until then.
- `lem-subdivision-compatible-continuous-polyhedral-homology-comparison`: Repair or replace the load-bearing ordered-simplex/singular comparison for finite pairs and recheck continuous naturality; the separate finite-CW comparison remains under shard-03 review. Retain U-P despite the completed common-refinement dependency fix.
- `lem-universal-metric-trajectory-projection-is-fredholm`: Provide the exact fixed-metric first-order Fredholm/range theorem, a complete metric-variation cokernel elimination, a bounded right inverse and Banach section/slice construction with sufficient choice premises; then prove both index calculations. Retain U-P.
- `prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic`: Repair the Morse stability/quasi-isometry invariance chain or prove the nonhyperbolicity of every finite generating-set Cayley graph directly; then recheck the group conclusion. The local coordinate-grid proof is complete, but the full item stays U-P.
- `rem-kolmogorov-block-polynomials-have-large-partial-sum-maxima`: Publish and audit the planned FR-5 block-polynomial construction with all phase-alignment and smoothing estimates before treating this claim as proved. Keep the existing recorded, not-proved status and U-P meanwhile.
- `rem-suslin-line-non-ccc-square-unverified`: Keep U-P until the SET-17 independence supplier is available or the independence discussion is explicitly limited to external citation. No direct published consumer of this item was found.
- `rem-weak-perfect-graph-theorem-for-the-bull-route`: The planned locally proved thm-weak-perfect-graph-theorem supplier is unpublished; retain this recorded node and its load-bearing consumer path U-P until a sound proof is published and wired.
- `thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set`: Root-owned published page declaration must include existing A equivalent-forms-of-completeness and the three limit uses must be revalidated. Event agent-01-perfect-normality-page-declaration-1 gives the exact request; retain U-P for this metadata seam.
- `thm-auslander-buchsbaum-serre-regularity-criterion`: Root must reconcile six outside-shard/unassigned affected claim contracts: cor-localisations-of-regular-local-rings-are-regular; thm-localisation-and-polynomial-extension-of-regular-rings; cor-regular-local-ring-satisfies-r-one; cor-regular-local-ring-satisfies-s-two; ex-formal-power-series-ring-regular; thm-regular-local-rings-are-normal. Events agent-01-abs-regularity-cross/root-* provide exact routes. Retain U-P until closure; no assertion that AC is mathematically necessary for every conclusion.
- `thm-brauer-nesbitt-module-determination`: Root must repair the unassigned sole consumer fs-modular-representations-are-determined-by-ordinary-characters by a direct C_p Brauer-character calculation or a fixed system (event agent-01-brauer-nesbitt-fs-consumer-1).
- `thm-depth-equals-maximal-regular-sequence-length`: Earlier shard01 maximal-regular-sequence supplier remains U-P for the exact Nakayama/Ext proof; unassigned cor-depth-as-first-nonzero-ext also needs its claim premise and proof checked (event agent-01-depth-first-ext-supplier-1). Retain this theorem U-P until both close.
- `thm-eilenberg-steenrod-uniqueness-on-finite-dimensional-cw-pairs`: Close finite-pair singular comparison path underlying F1 and recheck finite-CW comparison; cross-shard event agent-01-finite-cw-comparison-supplier-2. All-CW consumer citation routed by event agent-01-all-cw-finite-image-citation-1.
- `thm-koszul-characterisation-of-depth`: Supplier lem-koszul-depth-first-nonzero-cohomology remains U-P; event agent-01-koszul-depth-supplier-1. The current theorem remains U-P until its exact equality is proved under the published hypothesis.
- `thm-nagata-smirnov-metrization`: Prove exact normal-cover/development supplier or replace with complete direct metrization proof; event agent-01-nagata-normal-cover-supplier-1. Recheck Alexandroff–Urysohn chain metric before clearance.
- `thm-norm-preserving-extension-from-any-subspace`: Upstream real/complex extension Statements omit AC despite their actual proof route; cross-shard event agent-01-arbitrary-subspace-hb-suppliers-1. Once repaired, amend this theorem and audit five direct consumers.
- `thm-quotient-and-lifting-regularity-across-a-regular-element`: Repair AC scope in regular-local-domain and parameter-quotient suppliers, then add and propagate exact choice premise for this theorem; event agent-01-regularity-lifting-domain-supplier-1. Retain U-P until these interfaces close.
- `thm-relative-cellular-homology-computes-relative-singular-homology`: Absolute cellular-to-singular comparison remains U-P for its infinite-CW colimit premise; event agent-01-relative-cellular-absolute-supplier-1.
- `thm-serre-normality-criterion`: Coordinate exact AC/DC premises in domain criterion, reducedness, normal components and finite-extension suppliers, then qualify or independently prove this original Statement and recheck its direct regular-local-normality use.
- `rem-aleph-one-dowker-space-open`: Current 2026 status of the ZFC aleph-one Dowker-space question could not be verified from an authoritative current source; retain U-P.

## Coordination and evidence

- Wrote **74** shard events: 35 cross_shard_repair, 2 event_correction, 3 expected_interface, 16 impact, 1 impact_hash_correction, 4 interface_change_intent, 2 page_order_request, 6 planned_interface_change, 5 receipt_amendment.
- Immediate interface-change and cross-shard-repair events are in `agent-01-events.jsonl`; root responses were checked in `agent-01-directions.jsonl`.
- The following impact files trace exact published consumers of original claim changes:

  - `research/up-1630-review/agent-01-abs-regularity-impact.json`
  - `research/up-1630-review/agent-01-additive-impact.json`
  - `research/up-1630-review/agent-01-bipolar-impact.json`
  - `research/up-1630-review/agent-01-brauer-nesbitt-impact.json`
  - `research/up-1630-review/agent-01-complex-exp-impact.json`
  - `research/up-1630-review/agent-01-density-impact.json`
  - `research/up-1630-review/agent-01-depth-length-impact.json`
  - `research/up-1630-review/agent-01-derived-tor-impact.json`
  - `research/up-1630-review/agent-01-dual-numbers-impact.json`
  - `research/up-1630-review/agent-01-kunneth-impact.json`
  - `research/up-1630-review/agent-01-mcm-impact.json`
  - `research/up-1630-review/agent-01-parameter-impact.json`
  - `research/up-1630-review/agent-01-picard-impact.json`
  - `research/up-1630-review/agent-01-shoenfield-impact.json`

## Review limits

An accept or repair result means the assigned claim and its exact used supplier interfaces passed this review; it is not a certification of every theorem in an upstream field. Deferred items retain their precise unresolved obligations. External sources are listed only when actually opened in the individual receipts. The Dowker-status remark remains U-P because a current authoritative 2026 status source was not verified.
