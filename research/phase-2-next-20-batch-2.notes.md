# phase-2-next-20 — batch 2 scaffold construction

Status: **escalated**, 13 of 13 outcomes recorded with tools/step1-decisions.mjs; 0 ready. This is a construction handoff, not an independent mathematical review or engine gate pass.

## Scope and canonical-plan comparison

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, briefs/beta-scaffold.md, assigned beta-2 task, planning notes, drift review, design §14.3 at lines3039–3076, current canonical plan and batch manifest. Git head at entry was f9857f71e; status command for the exact .autopilot/phase-2-next-20 state reports Step 1 scaffold, after drift review/materialization. Historical RESUME files were not used.

The canonical A/B IDs, orders 288.0603/288.0604, category and three A prerequisites agree with the generated assignment. Canonical item inventories were empty, so there is no competing canonical item contract. All eight designed A items and all three B items are preserved. The design's phrase “finite convex hulls of compact sets” must mean the hull of finitely many **compact convex** sets (as in Hanche-Olsen), not the hull of an arbitrary compact set in an infinite-dimensional space. This is the source-supported interpretation, recorded for owner reconciliation, not a weakened useful claim.

Local additions: lem-topological-vector-space-translation-scaling-and-absorption immediately after the TVS definition, and def-minkowski-gauge-of-an-open-convex-zero-neighborhood immediately before the gauge lemma. Existing published def-minkowski-functional and def-absorbing-balanced-and-absolutely-convex-set expressly assume a normed space, so they cannot supply the general contracts. The general closed-refinement proof requires convex/balanced closure first: move the designed lem-locally-convex-closures-and-finite-compact-convex-hulls before lem-balanced-convex-zero-neighborhood-refinement. It uses only earlier definitions and published elementary topology. No new pair, page split, selected-pair change or canonical-plan edit is proposed.

## Item outcomes, in construction order

- def-topological-vector-space-for-local-convexity: **escalated**. Complete proposed statement/strategy and explicit deps are in the manifest; the individual readiness record names the examined direct interfaces and common unresolved source/closure obligations.
- lem-topological-vector-space-translation-scaling-and-absorption: **escalated**. Complete proposed statement/strategy and explicit deps are in the manifest; the individual readiness record names the examined direct interfaces and common unresolved source/closure obligations.
- def-locally-convex-topological-vector-space: **escalated**. Complete proposed statement/strategy and explicit deps are in the manifest; the individual readiness record names the examined direct interfaces and common unresolved source/closure obligations.
- lem-locally-convex-closures-and-finite-compact-convex-hulls: **escalated**. Complete proposed statement/strategy and explicit deps are in the manifest; the individual readiness record names the examined direct interfaces and common unresolved source/closure obligations.
- lem-balanced-convex-zero-neighborhood-refinement: **escalated**. Complete proposed statement/strategy and explicit deps are in the manifest; the individual readiness record names the examined direct interfaces and common unresolved source/closure obligations.
- def-minkowski-gauge-of-an-open-convex-zero-neighborhood: **escalated**. Complete proposed statement/strategy and explicit deps are in the manifest; the individual readiness record names the examined direct interfaces and common unresolved source/closure obligations.
- lem-continuous-gauge-of-an-open-convex-zero-neighborhood: **escalated**. Complete proposed statement/strategy and explicit deps are in the manifest; the individual readiness record names the examined direct interfaces and common unresolved source/closure obligations.
- thm-locally-convex-open-convex-separation: **escalated**. Complete proposed statement/strategy and explicit deps are in the manifest; the individual readiness record names the examined direct interfaces and common unresolved source/closure obligations.
- thm-locally-convex-continuous-dual-separates-points: **escalated**. Complete proposed statement/strategy and explicit deps are in the manifest; the individual readiness record names the examined direct interfaces and common unresolved source/closure obligations.
- thm-locally-convex-strict-separation: **escalated**. Complete proposed statement/strategy and explicit deps are in the manifest; the individual readiness record names the examined direct interfaces and common unresolved source/closure obligations.
- ex-product-scalar-topology-is-locally-convex: **escalated**. Complete proposed statement/strategy and explicit deps are in the manifest; the individual readiness record names the examined direct interfaces and common unresolved source/closure obligations.
- ex-locally-convex-separation-by-a-coordinate: **escalated**. Complete proposed statement/strategy and explicit deps are in the manifest; the individual readiness record names the examined direct interfaces and common unresolved source/closure obligations.
- cex-convex-maximum-set-need-not-be-a-face: **escalated**. Complete proposed statement/strategy and explicit deps are in the manifest; the individual readiness record names the examined direct interfaces and common unresolved source/closure obligations.

Each item was appended once and its CLI decision recorded before the next was appended. No ready item or prior escalation was overwritten.

## Mathematics and dependency examination

The proposed chain is TVS → translation/scaling/absorption → local convexity → closure and finite compact hulls → balanced closed refinements → gauge definition/properties → open separation → point separation and compact/closed strict separation. Examples are leaves except the coordinate example's permitted dependency on the earlier product example on its own B page.

The open-separation strategy assumes only the published real principle def-hahn-banach-extension-principle-relative, through thm-relative-hahn-banach-dominated-extension. Its entire short proof and its sublinear/subspace/algebraic-functional contracts were read: HB extends the real one-dimensional map dominated by the finite real gauge; applying the bound to -x supplies the second side. It does not prove HB in ZF. Negative multiples on the initial line are dominated because the gauge is nonnegative. Continuity uses U∩(-U), not a false modulus bound by an asymmetric gauge. Complexification is f(x)=H(x)-iH(ix); only Re f is ordered. Dual separation does not select an entire family of norming functionals.

Closed refinement uses scalar joint continuity to obtain a small balanced neighborhood, then its convex hull inside an already convex neighborhood. Openness is proved by varying a positive-weight open summand. Closure is contained in O+O via the neighborhood test and is balanced/convex by the earlier lemma. This avoids assuming an infinite intersection of open rotations is open.

Strict separation uses a cover by all admissible pairs (k,N), restricts the cover to K, takes finitely many members, and uses only finite choice for their witnesses. This respects intrinsic compactness in def-compact-space. Thickening K by a single finite intersection produces an open convex set disjoint from C. The continuous real functional attains its maximum on K, giving a positive uniform gap. Hausdorffness is not needed for that proof.

The finite-hull proof uses the compact simplex and a **finite** product of compact convex sets, followed by the general topological continuous-image theorem. Grouping arbitrary convex sums by their supplier set proves the missing reverse inclusion; zero weights use only finite choice. thm-continuous-image-of-a-compact-space-is-compact was inspected and rejected as a supplier because its statement is metric-only. The actual dependency is thm-compactness-under-continuous-maps, clauses 1–2. Its compact-cover proof was read. The finite-product proof and its tube-lemma proof were read, including their all-witness cover construction, finite witness selection, and empty-product case. The Heine–Borel product-topology corollary and its metric bisection supplier thm-heine-borel-rn were read: the latter chooses the left non-finitely-covered half by a deterministic rule and does not use the choice-sensitive completeness/total-boundedness theorem.

The product example uses only clauses 1–2 of thm-product-universal-property; those were read together with its separate AC-dependent arbitrary-factor surjectivity clause. The zero function supplies a point in K^I explicitly. Similarly lem-finite-choice is a theorem of ZF even though its metadata cites def-axiom-of-choice for the stated boundary. No new item assumes AC; HB is stated only on separation and its actual consumers. Do not infer an AC cost merely from those explanatory dependency mentions, and do not infer that this local review certifies every deep supplier.

The graph traversal found 288 distinct declared-deps nodes (including the 13 local items), no missing target, no deps cycle, no unpublished external supplier and no Recorded item. All 24 direct published dependencies have canonical homes in the A page's existing prerequisite closure. This is a structural traversal, **not a complete semantic closure audit**. Well-definedness paths and implicit uses require continued clause-sensitive examination; the generic dependency hash is not that examination. In particular finish the lower real/complex scalar continuity, finite-induction and real-infimum interfaces and the underlying topology/basis proof closures before deciding ready.

Direct published interfaces read (some long outputs were truncated; the item-level semantic audit is therefore not certified complete):

- def-vector-space
- def-topological-space
- def-product-topology
- def-continuous-map-top
- def-neighbourhood-top
- def-hausdorff-space
- thm-product-universal-property
- lem-continuity-is-local-and-pastes
- lem-vector-space-elementary-consequences
- def-algebraic-dual-and-linear-functional
- def-sublinear-functional
- thm-closure-characterisation-top
- thm-finite-products-of-compact-spaces
- cor-heine-borel-in-the-product-topology
- thm-compactness-under-continuous-maps
- thm-compact-subset-of-a-hausdorff-space-is-closed
- lem-finite-choice
- thm-infimum-property
- def-infimum
- def-hahn-banach-extension-principle-relative
- thm-relative-hahn-banach-dominated-extension
- lem-restriction-of-scalars
- def-compact-space
- def-subspace-topology-top

Additional examined supplier/contrast items: lem-tube-lemma-for-a-compact-factor; thm-heine-borel-rn; def-linear-subspace; def-minkowski-functional; def-absorbing-balanced-and-absolutely-convex-set; lem-minkowski-functional-is-sublinear; lem-balanced-gauge-is-a-seminorm; def-relative-normed-convexity-and-separation; lem-relative-open-convex-gauge-properties; thm-continuous-image-of-a-compact-space-is-compact. Their publication status alone was not used to establish adequacy.

## Source evidence and unresolved retrieval

Coverage records 3 independent treatments and 29 source-anchored dispositions with exact selected locators. Teschl's university copy gives the general gauge/separation route; Bühler–Salamon gives the independent ordered-extension separation comparison and full closure proof; Hanche-Olsen gives the complete finite-compact-hull subargument inside Milman's converse. Scope is explicitly selective, not a claim that every surrounding chapter was read. The generated maximum-set counterexample has a complete local algebraic verification and the source's face convention.

The original Teschl author URL returned 404 and the Salamon author URL 403 through web retrieval. Searches recovered the university-hosted PDFs; Hanche-Olsen's real URL was recovered from earlier source history. Indexed full-text windows were read, including Teschl Lemma5.1/Theorems5.2–5.3/Corollary5.4, Bühler–Salamon Lemma3.10/Theorem3.11 and its Theorem2.38 prerequisite, and Hanche-Olsen's full Theorem22 text. The web PDF screenshot endpoint returned cache misses for the Salamon PDF, so no visual reading is claimed.

Important source corrections: Teschl Theorem5.2's extraction displays a plus where the set-builder is a difference, and a modulus bound |H|≤p for a potentially asymmetric gauge; the local argument uses the displayed difference-set meaning and the mathematically adequate one-sided domination H≤p. Theorem5.3 says “real Banach space” in a TVS proof; the local argument restricts scalars without imposing a norm. Hanche-Olsen's extracted overbars cannot be trusted, so the finite-hull subargument is stated and proved directly for supplied compact convex K_j. His Proposition1 complex bound needs the intersection with the i-preimage of the real-bound neighborhood; our calculus proof instead starts with a modulus bound, and complexification separately proves continuity. These are source-text cautions, not claims of defects in published library items.

Required command: node tools/source-fetch-check.mjs --coverage research/phase-2-next-20-batch-2.coverage.json --stamp --timeout-sec 15. It returned 0/3 fetch-verified after six automatic EAI_AGAIN attempts per source. Actual timestamps, URLs and outcomes remain in coverage.recovery_attempts and source_resolution.attempts. An initial direct Node fetch of Teschl had already failed with EAI_AGAIN before this command; the tool was not preseeded, so its automatic retries overran that source's allowance by one. The additional attempt is explicitly retained in coverage; no further retries were made. This cannot be represented as successful retrieval or a fresh allowance. No unavailable-source drop is claimed: every source_resolution is owner-escalation. Network/DNS failure does not show permanent unavailability. Existing historical stamps were not copied to manufacture a current pass.

Owner/operator action: restore a permitted full-body retrieval path, reconcile the already-exhausted attempt history, inspect the actual PDFs, and resolve the held source evidence. Mathematical action: complete the semantic transitive audit described above. All proposed strategies are concrete and reviewable, but neither the reader's confidence in these elementary arguments nor source snippets may waive either requirement.

## Published debt and cross-batch inputs

No new confirmed defect in a published actual prerequisite was established by this partial audit. No wholesale no-defect claim is made. Norm-only gauge definitions and metric-only compact-image results are inadequate **for this general use**, not thereby false; use the local general suppliers and existing topological theorem. No unrelated published consumer debt is being used to block these suppliers. Future FA-9 obligations (absolute polar definition, locally convex hypotheses, Bauer maximum set as extremal rather than necessarily a face, and regular Borel probability/RMK conditions) remain in the design; their published proofs were not audited by this dispatch. Do not mark them repaired because this scaffold exists.

There are no same-run cross-batch page or item prerequisites for this owned consumer pair: all external direct suppliers are already published. The owned batch-2.cross-batch-dependencies.json is therefore [], under briefs/tasks/frontier-dependency-ledger.md. The mandated refresh command succeeded. Future weak/compact-convex consumers are not silently treated as published and are not prerequisites here. Shared plans, published content, engine state and verdicts were not edited.

## Actual checks

- coverage-checklist --require-destination: exit1; 1 page, 29 harvested rows, 30 errors, 0 warnings. Every reported error is coverage-source-resolution on the three explicit owner escalations; the checker additionally asks for drop-only alternatives/confidence because it validates all resolution records through the drop schema. Do not fabricate a certain drop to suppress these expected failures.
- manifest-deps over all run manifests: exit0; manifest-deps: 364 item(s), 0 normalized, 0 error(s).
- whole-run content-policy --manifest-only: exit1; scope 365, 22 errors, 0 warnings, all outside this batch. Snapshot changes during concurrent construction are expected; this is not the engine's final join.
- owned content-policy --manifest-only: exit0; 13 items, 0 errors, 0 warnings.
- validate-plan research/plan-spec.json: exit0; existing canonical plan acyclic/consistent, 978 pages with item lists and 641 empty planned pages, with repository-wide redundancy warnings. It does not splice this scaffold into the canonical plan.
- extcheck --quiet --json: exit0; 16529 items, 163 Recorded entries, 0 errors, 55 existing consequence warnings. This checks published/authored disk, not proof approval of the new manifest.
- source-fetch-check check mode: exit1; 0/3 verified, three unresolved owner-escalation records, 0 drops.
- step1-decisions check --run phase-2-next-20: exit1; 364 items and 41 ready in that concurrent whole-run snapshot. All 13 owned items have an escalated record.
- Owned declared-dependency graph: no missing/circular/unpublished/Recorded paths or out-of-prerequisite direct homes, as described above.

Whole-run policy findings outside ownership, retained for the serial reconciler:

- lem-finite-weyl-strong-exchange-and-deletion depends on def-weyl-group-of-a-root-system, which is neither declared by this batch nor an item on disk
- lem-finite-weyl-strong-exchange-and-deletion depends on def-positive-system-and-base-of-simple-roots, which is neither declared by this batch nor an item on disk
- lem-finite-weyl-strong-exchange-and-deletion depends on def-length-and-longest-element-of-a-finite-weyl-group, which is neither declared by this batch nor an item on disk
- def-weyl-orbit-sum-in-a-group-algebra depends on def-weyl-group-of-a-root-system, which is neither declared by this batch nor an item on disk
- def-weyl-orbit-sum-in-a-group-algebra depends on def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice, which is neither declared by this batch nor an item on disk
- lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants depends on thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers, which is neither declared by this batch nor an item on disk
- lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums depends on thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, which is neither declared by this batch nor an item on disk
- lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums depends on thm-finite-dimensional-representations-of-sl-two, which is neither declared by this batch nor an item on disk
- def-weyl-discriminant-and-reflecting-hyperplane-arrangement depends on def-weyl-group-of-a-root-system, which is neither declared by this batch nor an item on disk
- def-weyl-discriminant-and-reflecting-hyperplane-arrangement depends on def-positive-system-and-base-of-simple-roots, which is neither declared by this batch nor an item on disk
- def-kostant-harmonic-subspace-of-the-symmetric-algebra depends on def-killing-form, which is neither declared by this batch nor an item on disk
- lem-local-chevalley-restriction-for-kostant-freeness depends on thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate, which is neither declared by this batch nor an item on disk
- def-carleson-operator-and-measurable-linearisation depends on def-fourier-transform-on-l-one-of-rn, which is neither declared by this batch nor an item on disk
- def-carleson-operator-and-measurable-linearisation depends on def-schwartz-space-and-its-seminorms, which is neither declared by this batch nor an item on disk
- def-carleson-tiles-wave-packets-and-tile-order depends on def-schwartz-space-and-its-seminorms, which is neither declared by this batch nor an item on disk
- def-carleson-tiles-wave-packets-and-tile-order depends on thm-fourier-inversion-on-schwartz-space, which is neither declared by this batch nor an item on disk
- lem-wave-packet-model-dominates-the-linearised-carleson-operator depends on thm-plancherel, which is neither declared by this batch nor an item on disk
- lem-carleson-size-selection depends on thm-plancherel, which is neither declared by this batch nor an item on disk
- lem-carleson-single-tree-estimate depends on thm-plancherel, which is neither declared by this batch nor an item on disk
- lem-carleson-signed-tree-weak-one-one-estimate depends on thm-plancherel, which is neither declared by this batch nor an item on disk
- thm-carleson-maximal-operator-is-strong-ltwo depends on thm-plancherel, which is neither declared by this batch nor an item on disk
- lem-carleson-real-line-to-torus-transfer depends on thm-fourier-inversion-on-schwartz-space, which is neither declared by this batch nor an item on disk

## Declared closure inventory, not a proof-reading receipt

The following IDs are recorded so the unclosed semantic audit has an exact reading target. Inclusion means reached by declared deps, not that every statement and proof was fully audited.

- cex-convex-maximum-set-need-not-be-a-face
- cor-archimedean-reciprocal
- cor-heine-borel-in-the-product-topology
- cor-metrizability-and-first-countability-are-hereditary
- cor-nat-addition-well-defined
- cor-nat-multiplication-well-defined
- cor-of-one-positive
- cor-of-reverse-triangle
- def-abs-value
- def-algebraic-dual-and-linear-functional
- def-axiom-of-choice
- def-axiom-of-extensionality
- def-axiom-of-infinity
- def-axiom-of-pairing
- def-axiom-of-power-set
- def-axiom-of-union
- def-axiom-schema-of-separation
- def-binary-operation
- def-bounded-set
- def-canonical-natural
- def-cartesian-product
- def-choice-function
- def-commutative-ring
- def-compact-space
- def-complete-ordered-field
- def-continuous-map-top
- def-countable
- def-countable-choice
- def-divergence-to-infinity
- def-division-ring
- def-equinumerous
- def-equivalent-metrics
- def-field
- def-field-homomorphism
- def-finite-sum
- def-first-countable-top
- def-function
- def-group
- def-hahn-banach-extension-principle-relative
- def-hausdorff-space
- def-hereditary-property
- def-homeomorphism-and-open-maps
- def-identity-element
- def-image-and-preimage-under-a-relation
- def-indexed-family
- def-indexed-union-and-intersection
- def-inductive-set
- def-infimum
- def-initial-and-final-topology
- def-injection-surjection-bijection
- def-int-operations
- def-int-order
- def-integer-power
- def-integers
- def-interior-closure-boundary-top
- def-intersection-of-a-set-and-binary-intersection
- def-interval
- def-inverse-relation-composition-and-restriction
- def-invertible-element
- def-isometry-and-metric-embedding
- def-language-of-set-theory
- def-linear-map
- def-linear-subspace
- def-locally-convex-topological-vector-space
- def-max-min
- def-metric-ball
- def-metric-bounded-diameter
- def-metric-compactness
- def-metric-continuity
- def-metric-convergence
- def-metric-interior-closure-boundary
- def-metric-space
- def-metric-topology
- def-metrizable-space
- def-minkowski-gauge-of-an-open-convex-zero-neighborhood
- def-monotone-sequence
- def-nat-addition
- def-nat-multiplication
- def-nat-order
- def-natural-numbers
- def-neighbourhood-top
- def-null-sequence
- def-ordered-field
- def-ordered-pair
- def-partial-order
- def-peano-system
- def-power-set
- def-product-topology
- def-rat-operations
- def-rat-order
- def-rational-cauchy-sequence
- def-rational-power
- def-rationals
- def-real-limit
- def-real-numbers
- def-real-order
- def-relation-domain-range-and-field
- def-ring
- def-semigroup-and-monoid
- def-sequence
- def-sequence-convergence-top
- def-set-difference-and-symmetric-difference
- def-standard-topologies
- def-subfield
- def-subgroup
- def-sublinear-functional
- def-subring
- def-subsequential-limit
- def-subset-and-proper-subset
- def-subspace-topology-top
- def-topological-space
- def-topological-vector-space-for-local-convexity
- def-topology-basis-subbasis
- def-union-of-a-set-and-binary-union
- def-unordered-pair-and-singleton
- def-vector-space
- def-vector-space-of-linear-maps
- def-zero-divisor-and-integral-domain
- ex-locally-convex-separation-by-a-coordinate
- ex-product-scalar-topology-is-locally-convex
- fs-every-set-has-sup
- lem-a-relation-is-included-in-the-product-of-its-domain-and-range
- lem-balanced-convex-zero-neighborhood-refinement
- lem-bernoulli-inequality
- lem-cauchy-away-from-zero
- lem-cauchy-bounded
- lem-closed-subset-of-a-compact-space-is-compact
- lem-commutative-division-ring-is-a-field
- lem-compactness-is-intrinsic
- lem-compactness-of-a-subspace-is-ambient
- lem-continuity-is-local-and-pastes
- lem-continuous-gauge-of-an-open-convex-zero-neighborhood
- lem-convergent-implies-bounded
- lem-countable-iff-surjection-from-n
- lem-field-is-a-commutative-ring
- lem-finite-choice
- lem-finite-set-has-max
- lem-finite-sum-laws
- lem-geometric-sequence-null
- lem-group-cancellation
- lem-group-inverse-laws
- lem-homeomorphism-criteria
- lem-identity-unique
- lem-index-map-grows
- lem-inf-epsilon
- lem-int-add-well-defined
- lem-int-cancellation
- lem-int-mul-well-defined
- lem-intersection-of-subgroups
- lem-inverse-relations-composites-and-restrictions-are-sets
- lem-inverse-unique
- lem-limit-unique
- lem-locally-convex-closures-and-finite-compact-convex-hulls
- lem-max-is-sup
- lem-metric-ball-neighbourhood-base
- lem-metric-limits-unique
- lem-metric-nonnegativity
- lem-metric-reverse-triangle
- lem-metrics-on-rn
- lem-monoid-units-form-a-group
- lem-nat-add-associative
- lem-nat-add-cancellative
- lem-nat-add-commutative
- lem-nat-add-identity
- lem-nat-add-successor-left
- lem-nat-discrete
- lem-nat-embeds-int
- lem-nat-mult-associative
- lem-nat-mult-cancellative
- lem-nat-mult-commutative
- lem-nat-mult-distributive
- lem-nat-mult-identity
- lem-nat-no-zero-divisors
- lem-nat-nonzero-is-successor
- lem-nat-order-add-compatible
- lem-nat-order-is-membership
- lem-nat-order-mult-compatible
- lem-nat-successor-neq-self
- lem-nat-transitive-irreflexive
- lem-nat-trichotomy
- lem-null-ideal
- lem-null-is-cauchy
- lem-null-maximal
- lem-null-times-bounded
- lem-of-abs-value
- lem-of-add-order
- lem-of-inverse-positive
- lem-of-inverse-unique
- lem-of-mult-neg
- lem-of-naturals-positive
- lem-of-no-zero-divisors
- lem-of-q-embeds
- lem-of-sign-rules
- lem-of-square-monotone
- lem-of-square-positive
- lem-of-triangle-inequality
- lem-of-zero-mult
- lem-omega-smallest-inductive
- lem-ordered-pairs-lie-in-the-double-power-set
- lem-pigeonhole
- lem-power-difference-factorisation
- lem-power-laws
- lem-power-monotone
- lem-product-topology-on-rn
- lem-rat-embeds-dense
- lem-rat-ops-well-defined
- lem-rat-positive-denominator
- lem-rat-triangle
- lem-rational-power-laws
- lem-rational-power-well-defined
- lem-real-line-is-a-metric-space
- lem-reflection
- lem-restriction-of-scalars
- lem-ring-elementary-consequences
- lem-ring-units-form-a-group
- lem-subgroup-criterion
- lem-subring-criterion
- lem-subset-of-countable
- lem-sup-epsilon
- lem-sup-monotone
- lem-sup-scale
- lem-sup-sum
- lem-sup-translate
- lem-sup-unique
- lem-the-domain-and-range-of-a-relation-are-sets
- lem-the-intersection-of-a-nonempty-set-is-a-set
- lem-the-power-set-of-a-set-is-a-set
- lem-topological-vector-space-translation-scaling-and-absorption
- lem-triangle-inequality-finite
- lem-tube-lemma-for-a-compact-factor
- lem-unions-and-intersections-of-small-families
- lem-unordered-pair-equality
- lem-vector-space-elementary-consequences
- prop-of-multiply-inequalities
- prop-of-reciprocal-order
- rem-sup-conventions
- thm-algebra-of-limits
- thm-am-gm
- thm-basis-criterion
- thm-cauchy-ring
- thm-cauchy-schwarz-finite
- thm-closed-subspace-of-a-compact-space-is-compact
- thm-closure-characterisation-top
- thm-compact-subset-is-closed-and-bounded
- thm-compact-subset-of-a-hausdorff-space-is-closed
- thm-compactness-agrees-with-metric-compactness
- thm-compactness-under-continuous-maps
- thm-continuity-characterisations-top
- thm-countable-union-of-countable
- thm-finite-products-of-compact-spaces
- thm-heine-borel-rn
- thm-holder-finite
- thm-induction-principle
- thm-infimum-property
- thm-initial-and-final-characteristic-properties
- thm-int-comm-ring
- thm-int-ordered-ring
- thm-locally-convex-continuous-dual-separates-points
- thm-locally-convex-open-convex-separation
- thm-locally-convex-strict-separation
- thm-metric-closure-characterisation
- thm-metric-continuity-characterisations
- thm-metric-equivalence-hierarchy
- thm-metric-hausdorff-separation
- thm-metric-open-set-algebra
- thm-metric-sequential-closure
- thm-minkowski-finite
- thm-monotone-convergence
- thm-n-cross-n-countable
- thm-nat-linear-order
- thm-nested-interval-property
- thm-nth-roots-exist
- thm-of-archimedean
- thm-of-square-roots
- thm-omega-is-peano-system
- thm-product-universal-property
- thm-rat-field
- thm-rat-ordered-field
- thm-reals-field
- thm-reals-ordered-field
- thm-recursion
- thm-relative-hahn-banach-dominated-extension
- thm-strong-induction
- thm-the-characterising-property-of-ordered-pairs
- thm-the-empty-set-exists-and-is-unique
- thm-weighted-am-gm-rational
- thm-well-ordering-principle
- thm-young-inequality
