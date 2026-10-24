# Batch 58 authoring notes — Sphere Gauge Groups and Section Obstructions

## Scope, authority, and discrepancies

- Run `advanced-qft-supersymmetry-build-2026-10-23`, batch 58, beta. Owned pair: `qftx-gauge-group-sphere-homotopy` and `qftx-gauge-group-sphere-homotopy-examples` only.
- Read the owner authoring direction before authoring. The batch task says “design: none found”; the current `research/plan-spec.json` and the approved owner scope extension point to `research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/gauge-slice-prerequisite-scaffold.md` and `scope-extension-7-pairs.json`. Follow the current plan and owner direction. The older track/prose scaffold has no separate governing section for this appended pair. Record the task/plan mismatch here; no prior design claim is silently treated as absent.
- The task table lists five prerequisite pages. The current plan and batch manifest require fourteen, adding the classification of coverings, circle fundamental group, Chern–Pontryagin classes, Steenrod/Bockstein operations, cup/cap products, relative homology/Mayer–Vietoris, CW/cellular homology, singular cohomology/UCT, and obstruction theory. Preserve the current fourteen-page manifest.
- The owner plan names six A items and one B example. The assigned A page also needs local intermediate results and definitions with complete arguments. Six local A lemmas are added for parametric vector-section smoothing, Hopf generator/cone calculation, the folded product attachment, the Steenrod–Adem composite obstruction, the special-unitary column fibration, and nonvanishing of `pi_5 SU(N)`. Two standalone A definitions supply the integral mapping-cone Hopf invariant and reduced-suspension pinch map before their consumers.
- Batch dependency-level evidence assigns batch 58 level 2. Its required page edge is the A page to `qftx-sobolev-gauge-orbit-geometry` in batch 56. Item levels are computed from actual in-batch edges, not by waiting for the other batch.

## Source audit

- Hatcher, *Algebraic Topology*, author-hosted chapter 4, `https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf`: targeted complete reading of §4.2 Hopf bundle/attaching-map material, printed pp. 379–381 (Examples 4.51–4.52); supports the Hopf generator and product-cell attachment discussion. His Appendix PDF, `https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf`, was read at printed pp. 427–428 (Hopf invariant/cone), 487–490 (Steenrod operations and suspension), and 498–499 (Proposition 4L.11 proof outline). The local proofs below supply explicit cone maps and the missing lifting/Adem steps; Hatcher’s outline is not used as a proof substitute.
- J. P. May, *A Concise Course in Algebraic Topology*, full author-hosted PDF `https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf`: read Chapter 7, pp. 49–56 (numerable bundles and fibrations), and Chapter 9, §3, p. 66 (fibration homotopy LES). Independent treatment supporting the fibration and exact-sequence framework.
- J. M. Lee, *Introduction to Smooth Manifolds*, full alternative PDF `https://pierre.ag.gerard.web.ulb.be/textbooks/books/Introduction_To_Smooth_Manifolds.pdf`: Theorem 6.26, relative Whitney approximation. The originally recorded Dokumen retrieval route failed; the alternative full ULB-hosted text was found and inspected. The present vector-bundle smoothing proof is constructed directly with finite-chart smoothing operators and does not claim that Lee’s finite-dimensional theorem alone gives continuity in a C-infinity section-space topology.
- I. M. Singer, “Some Remarks on the Gribov Ambiguity,” CMP 60 (1978), §§1–2, pp. 7–12, was read in full via web PDF text and checked against the official Project Euclid record. It is context only: Singer states low homotopy values and sketches smoothing/hemisphere arguments but does not provide those complete proofs. It is not used as a logical supplier. Mitter–Viallet and Narasimhan–Ramadas were read for context only; their proof scope does not cover this all-bundle/all-rank claim.
- Formal source coverage will use the successfully retrieved Hatcher, May, and Lee full texts. Singer, Mitter–Viallet, and Narasimhan–Ramadas are retained as context in this note with their proof limits; they are not represented as native-fetch-stamped sources.

## Current batch-56 interfaces and readiness

The three batch-56 carrier files appeared after the first authoring snapshot. Their complete current files were read and their actual interfaces compared with every use below. The current batch-56 A/B manifest and YAML-only page files are present; the A inventory contains five items and the B inventory contains two examples. All three inspected items remain `draft` with `verification.precheck: pending`, which is not a blocker by itself. `loadStep1Record` plus `step1Decision` now returns closed, hash-bound `ready` records for each direct carrier and all seven items on that prerequisite A/B page. These are Step 1 authoring-readiness records only, not independent proof acceptance.

- `def-qftx-smooth-sobolev-gauge-configuration` is present at `items/def-qftx-smooth-sobolev-gauge-configuration.md`. Its actual Definition fixes compact connected oriented boundaryless Riemannian `M`, `d in {3,4}`, `N>=2`, smooth `P` and `A0`, finite-atlas Sobolev spaces, `G_{k+1}`, `G_{k+1,m}`, `bar G_{k+1}`, `A_infty`, `G_infty`, `bar G_infty`, the right action, holonomy irreducibility, formal adjoint conventions, and quotient topology. The actual based notation is `G_{k+1,m}` for Sobolev sections and `G_infty` for smooth sections; batch 58 now names the smooth subgroup explicitly as `{u in G_infty:u(p_m)=e}`.
- `lem-qftx-gauge-sobolev-calculus` is present at `items/lem-qftx-gauge-sobolev-calculus.md`. Its actual Statement includes the planned finite-atlas norm equivalence, `H^k -> C^1`, bounded products, Hilbert Lie group charts, smooth Sobolev action, and the differential formula `a+d_A xi`. Its complete proof was inspected. Batch 58's completed route uses the `C^infty` group and proves its needed topology from finite-atlas seminorms, so this Sobolev-only calculus item is not a logical dependency of the local relative-smoothing/evaluation arguments.
- `lem-qftx-gauge-stabilizer-and-properness` is present at `items/lem-qftx-gauge-stabilizer-and-properness.md`. Its actual Statement/proof concern the Sobolev action of `G_{k+1}` and `bar G_{k+1}` on `A_k^*`; it proves the holonomy-centralizer stabilizer, openness of the irreducible locus, and the properness subsequence conclusion. Its proof was read in full and checked. The assigned evaluation and homotopy claims are for the smooth section group `G_infty` and its finite central quotient; finite-covering and local-evaluation arguments prove those claims directly. The Sobolev stabilizer/properness lemma is not imported as a premise for the smooth-group statement.

Two plan edges are therefore removed with explicit evidence: `lem-qftx-parametric-gauge-smoothing -> lem-qftx-gauge-sobolev-calculus`, and the planned evaluation edges to `lem-qftx-gauge-sobolev-calculus` and `lem-qftx-gauge-stabilizer-and-properness`. The actual statement of those suppliers concerns Sobolev spaces, while the authored claims use the smooth section topology; no smooth-to-Sobolev weak-equivalence theorem is proved in this assigned pair. This is a recorded plan/design discrepancy for owner review. The direct configuration-definition edges are now verified at the inspected smooth-group interface and current hash-bound Step 1 record.

## Item inventory and authoring checkpoints

| Item | In-batch suppliers | Dependency level | Current status |
|---|---|---:|---|
| `lem-qftx-parametric-vector-bundle-section-smoothing` | none | 0 | authored below |
| `def-qftx-mapping-cone-hopf-invariant` | none | 0 | authored below |
| `def-qftx-suspension-pinch-map` | none | 0 | authored below |
| `lem-qftx-hopf-generator-and-cone` | Hopf-invariant definition | 1 | authored below |
| `lem-qftx-folded-product-attachment-suspends-to-zero` | Hopf/cone lemma, suspension pinch definition | 2 | authored below |
| `lem-qftx-suspended-hopf-composite-adem-obstruction` | Hopf/cone lemma | 2 | authored below |
| `lem-qftx-special-unitary-column-fibration` | none | 0 | authored below |
| `lem-qftx-low-unitary-homotopy-inputs` | folded attachment, composite obstruction, column fibration | 3 | authored below |
| `lem-qftx-pi5-special-unitary-nonzero` | low-unitary, column fibration | 4 | authored below |
| `lem-qftx-parametric-gauge-smoothing` | vector-section smoothing | 3 | authored against current configuration Definition; ready record to be written after contracts |
| `lem-qftx-sphere-gauge-evaluation-fibration` | column fibration | 3 | authored against current configuration Definition; ready record to be written after contracts |
| `lem-qftx-based-gauge-sphere-homotopy` | gauge smoothing, evaluation fibration | 4 | authored against current configuration Definition; ready record to be written after contracts |
| `thm-qftx-reduced-gauge-group-sphere-nontriviality` | evaluation, based homotopy, low-unitary, `pi5 SU(N)` | 5 | authored against current configuration Definition; ready record to be written after contracts |
| `lem-qftx-section-retract-obstruction` | none | 0 | authored below |
| `ex-qftx-sphere-gauge-s3-components` (B) | based homotopy, low-unitary, reduced theorem | 6 | authored against current configuration Definition; ready record to be written after contracts |

Levels will be recomputed after final dependency edits. All mathematical carriers use `domain: mathematics`, `library: mathematics`, `dependency_roles: mathematical-premise`, draft status, and unchanged claim strength. The A/B page files contain YAML frontmatter only.

## Validation and escalation ledger

- Initial source/readiness check found the batch-56 item files absent. They later appeared, were read in full, and now have current ready records. No mathematical prerequisite remains open from batch 56. The batch-dependency-level record itself is stale after the authorized manifest update; it is owner-maintained shared state and is reported below rather than edited here.
- After authoring: run native source fetch stamping, item proof-layout checks, dependency-level checks, proof-contract checks, coverage/manifest checks, and scoped Step 1 decisions. Record raw outcomes below. No record constitutes independent acceptance.

### Checkpoint: `lem-qftx-parametric-vector-bundle-section-smoothing`

- Claim/conventions: Finite-parameter smoothing of vector-bundle sections; mathematical item in the assigned A page, with the statement self-contained and all references moved to its immediate references section.
- Sources inspected: J. M. Lee, Introduction to Smooth Manifolds, full ULB-hosted text (Theorem 6.26, relative Whitney approximation; alternative full text inspected after the originally recorded Dokumen route failed.), Allen Hatcher, Algebraic Topology, Chapter 4 (§4.2, printed pp. 379–381; background on compact smooth topology and homotopy constructions.), J. P. May, A Concise Course in Algebraic Topology (Chapter 7, pp. 49–56; bundle and homotopy framework.).
- Dependencies: def-smooth-manifold, def-vector-bundle-chart-and-transition-function, def-smooth-partition-of-unity-subordinate-to-an-open-cover, def-axiom-of-choice; dependency level recorded as 0.
- Decision: authored from inspected mathematical interfaces; no review acceptance asserted.
- Validation so far: carrier written; full scoped checks remain after all edits.
- Unresolved obligation/next action: continue with the next supplier and then run proof-contract, source-fetch, proof-layout, and readiness checks.

### Checkpoint: `lem-qftx-hopf-generator-and-cone`

- Claim/conventions: Hopf generator and mapping-cone coefficient; mathematical item in the assigned A page, with the statement self-contained and all references moved to its immediate references section.
- Sources inspected: Allen Hatcher, Algebraic Topology, Chapter 4 (§4.2, printed pp. 379–381; Appendix §4.B, pp. 427–428.), J. P. May, A Concise Course in Algebraic Topology (Chapter 7, pp. 49–56; Chapter 9, §3, p. 66.), Allen Hatcher, Algebraic Topology, Appendix (§4.B, printed pp. 427–428; Hopf invariant and mapping-cone coefficient.).
- Dependencies: cor-real-line-is-universal-cover-of-circle, thm-covering-space-lifting-criterion, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-based-sphere-maps-are-classified-by-geometric-degree, lem-integral-cohomology-ring-of-complex-projective-space-by-splitting, def-axiom-of-choice; dependency level recorded as 0.
- Decision: authored from inspected mathematical interfaces; no review acceptance asserted.
- Validation so far: carrier written; full scoped checks remain after all edits.
- Unresolved obligation/next action: continue with the next supplier and then run proof-contract, source-fetch, proof-layout, and readiness checks.

### Checkpoint: `lem-qftx-folded-product-attachment-suspends-to-zero`

- Claim/conventions: Folded product attachment has Hopf invariant two and null suspension; mathematical item in the assigned A page, with the statement self-contained and all references moved to its immediate references section.
- Sources inspected: Allen Hatcher, Algebraic Topology, Chapter 4 (§4.2, Example 4.52, printed pp. 380–381; product-cell attaching map.), J. P. May, A Concise Course in Algebraic Topology (Chapter 7, pp. 49–56; cellular/cofiber homotopy framework.), Allen Hatcher, Algebraic Topology, Appendix (§4.L, printed pp. 487–490; suspension and Steenrod context.).
- Dependencies: lem-qftx-hopf-generator-and-cone, thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism, def-axiom-of-choice; dependency level recorded as 1.
- Decision: authored from inspected mathematical interfaces; no review acceptance asserted.
- Validation so far: carrier written; full scoped checks remain after all edits.
- Unresolved obligation/next action: continue with the next supplier and then run proof-contract, source-fetch, proof-layout, and readiness checks.

### Checkpoint: `lem-qftx-suspended-hopf-composite-adem-obstruction`

- Claim/conventions: Nonvanishing of consecutive suspended Hopf composites by Adem relation; mathematical item in the assigned A page, with the statement self-contained and all references moved to its immediate references section.
- Sources inspected: Allen Hatcher, Algebraic Topology, Appendix (§4.L, printed pp. 487–490 and Proposition 4L.11, pp. 498–499; Steenrod operations, suspension, and the Adem obstruction.), J. P. May, A Concise Course in Algebraic Topology (Chapter 7, pp. 49–56; cofiber/fibration background.), Allen Hatcher, Algebraic Topology, Chapter 4 (§4.2, printed pp. 379–381; Hopf map and its cone.).
- Dependencies: lem-qftx-hopf-generator-and-cone, lem-mod-two-cohomology-rings-of-complex-projective-spaces, thm-steenrod-squares-are-well-defined-and-natural, prop-steenrod-square-normalization-instability-and-top-square, thm-adem-relations-for-steenrod-squares, lem-cw-quotients-and-collapse-of-a-contractible-subcomplex, def-reduced-cone-suspension-and-cofiber-sequence, def-axiom-of-choice; dependency level recorded as 1.
- Decision: authored from inspected mathematical interfaces; no review acceptance asserted.
- Validation so far: carrier written; full scoped checks remain after all edits.
- Unresolved obligation/next action: continue with the next supplier and then run proof-contract, source-fetch, proof-layout, and readiness checks.

### Checkpoint: `lem-qftx-special-unitary-column-fibration`

- Claim/conventions: Special-unitary column fibration; mathematical item in the assigned A page, with the statement self-contained and all references moved to its immediate references section.
- Sources inspected: J. P. May, A Concise Course in Algebraic Topology (Chapter 7, pp. 49–56; locally trivial numerable bundles and their fibration property.), Allen Hatcher, Algebraic Topology, Chapter 4 (§4.2, printed pp. 379–381; sphere fibrations and homotopy sequences.), I. M. Singer, Some Remarks on the Gribov Ambiguity (§§1–2, pp. 7–12; context only, not used as proof.).
- Dependencies: def-locally-trivial-fiber-bundle, thm-numerable-fiber-bundles-are-hurewicz-fibrations, def-axiom-of-choice; dependency level recorded as 0.
- Decision: authored from inspected mathematical interfaces; no review acceptance asserted.
- Validation so far: carrier written; full scoped checks remain after all edits.
- Unresolved obligation/next action: continue with the next supplier and then run proof-contract, source-fetch, proof-layout, and readiness checks.

### Checkpoint: `lem-qftx-low-unitary-homotopy-inputs`

- Claim/conventions: Low special-unitary homotopy inputs; mathematical item in the assigned A page, with the statement self-contained and all references moved to its immediate references section.
- Sources inspected: Allen Hatcher, Algebraic Topology, Chapter 4 (§4.2, printed pp. 379–381; Hopf bundle and attaching maps.), Allen Hatcher, Algebraic Topology, Appendix (§4.B, pp. 427–428 and §4.L, pp. 487–490, 498–499; Hopf invariant, suspension, and Steenrod operations.), J. P. May, A Concise Course in Algebraic Topology (Chapter 7, pp. 49–56 and Chapter 9, §3, p. 66; bundle fibration and homotopy LES.).
- Dependencies: lem-qftx-special-unitary-column-fibration, lem-qftx-hopf-generator-and-cone, lem-qftx-folded-product-attachment-suspends-to-zero, lem-qftx-suspended-hopf-composite-adem-obstruction, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-lower-dimensional-sphere-maps-are-based-nullhomotopic, thm-based-sphere-maps-are-classified-by-geometric-degree, thm-freudenthal-suspension-theorem, def-axiom-of-choice; dependency level recorded as 2.
- Decision: authored from inspected mathematical interfaces; no review acceptance asserted.
- Validation so far: carrier written; full scoped checks remain after all edits.
- Unresolved obligation/next action: continue with the next supplier and then run proof-contract, source-fetch, proof-layout, and readiness checks.

### Checkpoint: `lem-qftx-pi5-special-unitary-nonzero`

- Claim/conventions: Nonvanishing of the fifth special-unitary homotopy group; mathematical item in the assigned A page, with the statement self-contained and all references moved to its immediate references section.
- Sources inspected: J. P. May, A Concise Course in Algebraic Topology (Chapter 7, pp. 49–56 and Chapter 9, §3, p. 66; locally trivial bundles and exact sequences.), Allen Hatcher, Algebraic Topology, Appendix (§4.L, printed pp. 487–490 and 498–499; suspended Hopf composites.), Allen Hatcher, Algebraic Topology, Chapter 4 (§4.2, printed pp. 379–381; sphere fibrations.).
- Dependencies: lem-qftx-low-unitary-homotopy-inputs, lem-qftx-special-unitary-column-fibration, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-lower-dimensional-sphere-maps-are-based-nullhomotopic, thm-based-sphere-maps-are-classified-by-geometric-degree, def-axiom-of-choice; dependency level recorded as 3.
- Decision: authored from inspected mathematical interfaces; no review acceptance asserted.
- Validation so far: carrier written; full scoped checks remain after all edits.
- Unresolved obligation/next action: continue with the next supplier and then run proof-contract, source-fetch, proof-layout, and readiness checks.

### Checkpoint: `lem-qftx-parametric-gauge-smoothing`

- Claim/conventions: Parametric smoothing of gauge sections; statement is uninterrupted and the proof uses its declared topologies, basepoints, and conditional supplier interfaces.
- Sources inspected: J. M. Lee, Introduction to Smooth Manifolds, full ULB-hosted text (Theorem 6.26, relative Whitney approximation; the local finite-parameter vector-bundle smoothing argument is proved directly.), J. P. May, A Concise Course in Algebraic Topology (Chapter 7, pp. 49–56; fiber bundles and homotopy lifting.), Allen Hatcher, Algebraic Topology, Chapter 4 (§4.2, printed pp. 379–381; homotopy and Hopf bundle context.).
- Dependencies: def-qftx-smooth-sobolev-gauge-configuration, lem-qftx-gauge-sobolev-calculus, cor-the-smooth-and-continuous-homotopy-categories-of-smooth-manifolds-have-the-same-morphism-sets, lem-qftx-parametric-vector-bundle-section-smoothing, thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold, prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking, def-axiom-of-choice; in-batch level recorded as 1.
- Decision: complete conditional argument authored; the exact missing batch-56 carriers remain unresolved and will block readiness where consumed.
- Validation so far: carrier written; scoped mechanical checks remain after all edits.
- Next action: continue the assigned inventory, then construct contracts/coverage and record actual scoped checks.

### Checkpoint: `lem-qftx-sphere-gauge-evaluation-fibration`

- Claim/conventions: Evaluation and finite-center fibrations of sphere gauge groups; statement is uninterrupted and the proof uses its declared topologies, basepoints, and conditional supplier interfaces.
- Sources inspected: J. P. May, A Concise Course in Algebraic Topology (Chapter 7, pp. 49–56; numerable locally trivial bundles are Hurewicz fibrations.), Allen Hatcher, Algebraic Topology, Chapter 4 (§4.2, printed pp. 379–381; fibration and homotopy-sequence context.).
- Dependencies: def-qftx-smooth-sobolev-gauge-configuration, lem-qftx-gauge-sobolev-calculus, lem-qftx-gauge-stabilizer-and-properness, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-numerable-fiber-bundles-are-hurewicz-fibrations, lem-qftx-special-unitary-column-fibration, def-axiom-of-choice; in-batch level recorded as 1.
- Decision: complete conditional argument authored; the exact missing batch-56 carriers remain unresolved and will block readiness where consumed.
- Validation so far: carrier written; scoped mechanical checks remain after all edits.
- Next action: continue the assigned inventory, then construct contracts/coverage and record actual scoped checks.

### Checkpoint: `lem-qftx-based-gauge-sphere-homotopy`

- Claim/conventions: Based gauge-group homotopy via hemisphere clutching; statement is uninterrupted and the proof uses its declared topologies, basepoints, and conditional supplier interfaces.
- Sources inspected: J. P. May, A Concise Course in Algebraic Topology (Chapter 7, pp. 49–56 and Chapter 9, §3, p. 66; fibration and homotopy sequence framework.), Allen Hatcher, Algebraic Topology, Chapter 4 (§4.2, printed pp. 379–381; sphere maps, clutching and homotopy background.).
- Dependencies: def-qftx-smooth-sobolev-gauge-configuration, lem-qftx-parametric-gauge-smoothing, lem-qftx-sphere-gauge-evaluation-fibration, prop-loop-suspension-adjunction-on-based-homotopy-classes, cor-higher-homotopy-groups-are-iterated-loop-components, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, def-axiom-of-choice; in-batch level recorded as 2.
- Decision: complete conditional argument authored; the exact missing batch-56 carriers remain unresolved and will block readiness where consumed.
- Validation so far: carrier written; scoped mechanical checks remain after all edits.
- Next action: continue the assigned inventory, then construct contracts/coverage and record actual scoped checks.

### Checkpoint: `thm-qftx-reduced-gauge-group-sphere-nontriviality`

- Claim/conventions: Nontrivial homotopy of reduced sphere gauge groups; statement is uninterrupted and the proof uses its declared topologies, basepoints, and conditional supplier interfaces.
- Sources inspected: J. P. May, A Concise Course in Algebraic Topology (Chapter 7, pp. 49–56 and Chapter 9, §3, p. 66; fibration LES.), Allen Hatcher, Algebraic Topology, Chapter 4 (§4.2, printed pp. 379–381; Hopf/fibration context.).
- Dependencies: lem-qftx-sphere-gauge-evaluation-fibration, lem-qftx-based-gauge-sphere-homotopy, lem-qftx-low-unitary-homotopy-inputs, lem-qftx-pi5-special-unitary-nonzero, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-covering-maps-inject-fundamental-groups, def-axiom-of-choice; in-batch level recorded as 4.
- Decision: complete conditional argument authored; the exact missing batch-56 carriers remain unresolved and will block readiness where consumed.
- Validation so far: carrier written; scoped mechanical checks remain after all edits.
- Next action: continue the assigned inventory, then construct contracts/coverage and record actual scoped checks.

### Checkpoint: `lem-qftx-section-retract-obstruction`

- Claim/conventions: A section forces the structure group to retract from a principal bundle; statement is uninterrupted and the proof uses its declared topologies, basepoints, and conditional supplier interfaces.
- Sources inspected: J. P. May, A Concise Course in Algebraic Topology (Chapter 7, pp. 49–56; locally trivial bundles.), Allen Hatcher, Algebraic Topology, Chapter 4 (§4.2, printed pp. 379–381; bundle and homotopy context.).
- Dependencies: prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant, def-locally-trivial-fiber-bundle; in-batch level recorded as 0.
- Decision: complete conditional argument authored; the exact missing batch-56 carriers remain unresolved and will block readiness where consumed.
- Validation so far: carrier written; scoped mechanical checks remain after all edits.
- Next action: continue the assigned inventory, then construct contracts/coverage and record actual scoped checks.

### Checkpoint: `ex-qftx-sphere-gauge-s3-components`

- Claim/conventions: Integer components of the based S3 gauge group; statement is uninterrupted and the proof uses its declared topologies, basepoints, and conditional supplier interfaces.
- Sources inspected: Allen Hatcher, Algebraic Topology, Chapter 4 (§4.2, printed pp. 379–381; degree and Hopf bundle background.), J. P. May, A Concise Course in Algebraic Topology (Chapter 7, pp. 49–56 and Chapter 9, §3, p. 66; bundle LES framework.).
- Dependencies: lem-qftx-based-gauge-sphere-homotopy, lem-qftx-low-unitary-homotopy-inputs, thm-qftx-reduced-gauge-group-sphere-nontriviality, thm-based-sphere-maps-are-classified-by-geometric-degree, lem-qftx-parametric-gauge-smoothing, def-qftx-smooth-sobolev-gauge-configuration, def-axiom-of-choice; in-batch level recorded as 5.
- Decision: complete conditional argument authored; the exact missing batch-56 carriers remain unresolved and will block readiness where consumed.
- Validation so far: carrier written; scoped mechanical checks remain after all edits.
- Next action: continue the assigned inventory, then construct contracts/coverage and record actual scoped checks.

## Design-edge note from the completed local proof route

The planned `lem-qftx-parametric-gauge-smoothing` dependency list included `cor-the-smooth-and-continuous-homotopy-categories-of-smooth-manifolds-have-the-same-morphism-sets`. The completed proof instead establishes the required finite-parameter relative section-space result directly using the local vector-bundle smoothing lemma, then uses a matrix tubular retraction. That finite-dimensional corollary does not state a theorem about maps into infinite-dimensional section spaces and is not a logical premise of this argument; its redundant dependency edge was removed from the draft item and batch manifest. The weak-equivalence claim remains unchanged. This plan-edge discrepancy is recorded for owner review.

The relative injectivity proof fixes the entire sphere boundary during smoothing and then uses the disk's linear contraction fixing the chosen boundary basepoint to obtain a based nullhomotopy. Thus it does not assume parameter-track preservation by the vector-section smoothing lemma.


## Recomputed in-run item levels

`item-dependency-levels.mjs check --run advanced-qft-supersymmetry-build-2026-10-23` computed the assigned consumers at levels 3 (parametric gauge smoothing), 3 (evaluation fibration), 4 (based gauge homotopy), 5 (reduced-group theorem), and 6 (B example), after the Sobolev-only plan edges and two local definition suppliers were incorporated. The levels include direct suppliers assigned elsewhere in this run, as required by the run-wide DAG. The local helper levels are 0 (vector smoothing), 0 (Hopf-invariant definition), 0 (pinch definition), 1 (Hopf lemma), 2 (fold and Adem lemmas), 0 (column fibration), 3 (low-unitary lemma), and 4 (pi5 SU(N)); the section-retract lemma is level 0. The run-wide item-level check reports seven stale levels on unrelated items outside batch 58; those files were not changed. The batch-level check reports a stale run graph hash after the authorized manifest update; the current read-only DAG recomputation still gives batch 58 level 2 with prerequisite batch 56. The generated batch-level file is owner-maintained shared state and was not overwritten.


## Current-interface recheck after the batch-56 carriers appeared

The actual Definition and complete proofs for `def-qftx-smooth-sobolev-gauge-configuration`, `lem-qftx-gauge-sobolev-calculus`, and `lem-qftx-gauge-stabilizer-and-properness` were inspected above. The authored smooth-gauge arguments use the actual `G_infty`, `bar G_infty`, and finite-atlas C-infinity topology from the Definition. The evaluation and parametric-smoothing items do not use the Sobolev-only calculus or properness theorem; their planned edges were removed with the mismatch recorded above. `def-qftx-smooth-sobolev-gauge-configuration` remains a direct prerequisite for the four A consumers and B example, and its Step 1 record is current and hash-bound ready. The current `qftx-sobolev-gauge-orbit-geometry` page file and five-item manifest exist; its page cross-edge is verified against the current page inventory and seven closed item-readiness records.


## Final authoring checkpoints after current interface verification

- `lem-qftx-parametric-gauge-smoothing`: revised to use the actual `G_infty` and `p_m` conventions, and to name its continuous section group locally. The actual configuration supplier is ready/current; its C-infinity definition and based frame match. The Sobolev-calculus edge was removed because it was not used by the proof route. Item contract, source citations, and scoped layout checks are next/finalized below.
- `lem-qftx-sphere-gauge-evaluation-fibration`: revised to state the smooth `G_infty` evaluation bundle and `bar G_infty` finite cover. The local exponential section proof supplies evaluation surjectivity and local triviality; the actual configuration record is current. The actual calculus and stabilizer results concern Sobolev `G_{k+1}` and are not premises of this smooth-group construction; the corresponding plan edges are recorded as removed.
- `lem-qftx-based-gauge-sphere-homotopy`: notation now agrees with the actual smooth group and based frame. The explicit hemisphere homeomorphism is followed by the relative smoothing equivalence; its config and evaluation suppliers are current. The based contraction fixes the chosen boundary basepoint.
- `thm-qftx-reduced-gauge-group-sphere-nontriviality`: the conclusion is explicitly about `bar G_infty`; the actual configuration, evaluation, based homotopy, and low-SU inputs have been inspected. The proof retains the all-bundle-sector argument and does not identify the smooth quotient with the Sobolev action quotient.
- `ex-qftx-sphere-gauge-s3-components`: the example now names `G_infty`, `G_{infty,m}`, and `bar G_infty` explicitly; current configuration readiness and the degree argument are recorded.

All current batch-56 item records used here are ready and hash-current. The A-page cross edge is verified at the prerequisite page/interface scope. The removed Sobolev-only edges remain recorded for owner review.


## Additional local definitions

A final proof-layout and term audit split two technical definitions into standalone A carriers before their consumers: `def-qftx-mapping-cone-hopf-invariant` (cellular cohomology fixes the two integral generators and their cup-square coefficient) and `def-qftx-suspension-pinch-map` (an explicit quotient-compatible half-interval formula). `lem-qftx-hopf-generator-and-cone` now depends on the Hopf-invariant definition; the folded-attachment lemma depends on the pinch-map definition. This keeps every use of these technical constructions anchored to an exact A-page item.

## Final Step 1 results — 2026-10-24

The 13 canonical-format precheck repairs were applied to phase/step labels and matching step references only; existing proof arguments were preserved. The independent evaluation-bundle proof step was placed before the center-covering step where their dependency layers require that order. The range reference in the parametric gauge-smoothing proof was updated to `steps 1.1–3.1`. Proof contracts were regenerated from all 15 final arguments, then boundary-evidence step references were updated to the same final labels.

Final scoped outcomes:

- Normative precheck: 15 items checked, 0 failing.
- `proof-layout`: 15 items, 46 steps, 0 defects.
- `rendercheck`: 15 items, no math/link delimiter or YAML-rendering errors.
- Strict proof contracts: 15/15 items, 0 errors, 0 warnings.
- `source-fetch-check --stamp`: 6/6 full-text sources verified; 0 newly stamped, 0 drops. Check mode also passes.
- Coverage checklist: 2 pages, 59 harvested results, 0 errors, 0 warnings.
- Manifest dependencies: 15 items, 0 missing dependency arrays. Manifest integrity: all 124 owed pages present, 0 missing, 0 added.
- Focused dependency check: the 15 assigned items and their dependency closures pass with 0 errors and 0 warnings.
- Page frontmatter audit: both assigned pages parse as YAML, match their exact manifest inventories, and have empty Markdown bodies. The assigned statements/definitions/example are uninterrupted by hyperlinks. Cross-batch dependency evidence is a valid JSON array with 9 scoped rows and nonempty evidence.
- Current assigned item levels are 0, 0, 0, 1, 2, 2, 0, 3, 4, 3, 3, 4, 5, 0, and 6 in manifest order; no batch-58 item-level mismatch was reported. Current read-only batch graph computation gives batch 58 level 2 with prerequisite batch 56. The stored run batch-dependency-level file is stale after the authorized manifest changes; it is owner-maintained shared state and was not rewritten.
- The run-wide item-level check still reports seven stale levels, all on unrelated AQFT items outside batch 58. Those items were not changed.
- The run-wide `page-layout.mjs check` cannot complete because the unrelated page `qftx-susy-extended-actions` lacks frontmatter. The two assigned pages were separately parsed and validated above. No `page_layout` flag or page summary was authored; the engine applies its compact layout flag after initial authoring.

Current supplier status was checked again with `loadStep1Record` and `step1Decision`: all seven items on the batch-56 prerequisite page have current hash-bound `ready` records. Each of the 15 batch-58 items now has a current, non-owner Step 1 `ready` record with its exact direct dependency IDs. These records document authoring readiness and do not assert independent proof acceptance.

Historical checkpoint lines above that describe batch-56 carriers as missing or describe final checks as pending refer to earlier authoring snapshots. They were superseded by the current-interface recheck and the final results in this section.
