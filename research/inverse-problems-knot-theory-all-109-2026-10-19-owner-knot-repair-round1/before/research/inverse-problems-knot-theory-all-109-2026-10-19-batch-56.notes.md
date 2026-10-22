# Batch 56 authoring evidence — Wirtinger presentations and knot groups

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Scope: A/B pair `wirtinger-presentations-and-knot-groups` only.

## Controlling design and current run

- The complete KT-01 design at `research/plan-knot-theory-track.md` L81–106 controls the item scope, crossing convention, proof route, and B examples. The task's two design pointers (L81 and L83) point to this same section.
- `research/plan-spec.json` L876536–876564 confirms the A/B page IDs, titles, category, order, companions, and `requires`. Its item arrays are empty while the scaffold is being filled. There is no page-metadata conflict; KT-01 supplies the missing inventory and local proof route. Owner direction makes both documents design context rather than proof evidence.
- Two local A helpers were added to discharge prerequisites that the geometric proof needs: `lem-compact-knot-has-choice-free-tube` avoids the generic tubular-neighborhood supplier's ACω branch, and `lem-knot-group-infinity-collar` identifies the Euclidean and three-sphere complement groups. They are inside the assigned pair and have explicit dependencies.
- Representation refinement: the plan names a finite planar code but does not specify how its planarity check is mechanically witnessed. The authored code definition adds a finite rational polygonal drawing certificate and exact segment checks, and defines the positive-meridian orientation locally to avoid a cycle through the later KT-02 meridian item. The theorem is conditional on a valid supplied code; it does not assert that every smooth projection has already been converted to this certificate. If the owner intends that stronger input-coverage claim, a finite planar-embedding/approximation supplier is still needed.
- The generated batch dependency input places batch 56 at level 0 with no prerequisite batches, hash `69632ca90817955c25ab60d41e32cde58ca7d3d83e260e2e0e7ef6b68b8447ce`. The on-disk autopilot state was at `1-scaffold`, paused false, with batch 56 dispatched. The requested status command produced no output after 30 seconds and was interrupted; no run state was changed. The status markdown looked stale and said PAUSED.

## Inventory and dependency levels

| Level | Item | Direct dependencies | Readiness |
|---:|---|---|---|
| 0 | `def-knot-planar-code` | `def-oriented-link-in-s-three-and-ambient-isotopy`; `def-regular-oriented-link-diagram` | ready |
| 0 | `lem-compact-knot-has-choice-free-tube` | Euclidean normal-addition definition; local-diffeomorphism lemma; Lebesgue-number theorem; deformation-retract definition | ready |
| 1 | `lem-wirtinger-crossing-ball-cover` | planar-code definition; compact-tube helper; knot/diagram interfaces; retraction and induced-π₁ interfaces; circle and finite-wedge π₁ results | escalated |
| 2 | `lem-wirtinger-local-meridian-conjugacy` | planar code; crossing-ball cover; based-loop/group-law interfaces; Seifert–van Kampen; group-pushout quotient | escalated |
| 2 | `lem-knot-group-infinity-collar` | knot definition; crossing-cover path-connectedness; based-loop, π₁, sphere, and van-Kampen interfaces | escalated |
| 3 | `alg-knot-wirtinger-presentation-from-code` | planar code; local meridian-conjugacy; group-presentation definition | escalated |
| 4 | `thm-knot-wirtinger-presentation-correctness` | code; cover and local relation; infinity collar; constructor; van Kampen/pushout; free and presented groups; circle/wedge π₁ | escalated |
| 5 | `ex-knot-kt-01-worked-cases` | constructor; correctness theorem; local crossing rule; group-presentation/free-group/quotient interfaces | escalated |
| 5 | `cex-knot-kt-01-boundary-case` | constructor; local rule and correctness; presentation/free-group/quotient; ambient isotopy and induced maps; commutator/abelianization | escalated |

The scoped manifest computation reports levels `0,0,1,2,2,3,4,5,5`, with no cycles or label mismatches; every item file's `deps` agrees with the batch manifest. B items are leaves and do not depend on each other. The cross-batch dependency input is `[]`.

## Supplier and source evidence

- The actual `thm-seifert-van-kampen` statement and proof were read. Its applicable interface is an open path-connected two-set cover with path-connected overlap and a basepoint in that overlap; the theorem needs no injectivity hypothesis. The group-pushout quotient supplier is separate and is cited only for the normal-closure presentation.
- The actual oriented-link and regular-diagram definitions were read. They fix smooth oriented knots in standard oriented $S^3$, finite transverse double points, oriented branches, and over/under data. This pair stores no algebraic crossing sign; the local rule uses oriented chart directions.
- The actual `oriented-links-braid-closures-and-markov-equivalence` page was inspected for its smooth diagram and ambient-isotopy interface. This pair makes no new Reidemeister-invariance assertion.
- Additional actual library suppliers read for the authored arguments include the based-loop and group-law definitions, group-presentation/free-group/quotient-universal-property results, induced-π₁ functoriality, the circle and finite-wedge π₁ results, the deformation-retract definition, the normal-addition definition and local-diffeomorphism proof, Lebesgue's-number theorem, simply-connected sphere result, the simply-connected-overlap corollary, and the commutator/abelianization suppliers.
- The generic tubular-neighborhood theorem has an ACω hypothesis and is not used. The compact tube is built from a definable set of all local witnesses, a finite subcover, a finite minimum, and an explicit radial homotopy. No choice axiom is used in this batch's intended proofs.

Selected full-text sources and coverage:

- Danny Calegari, *Introduction to Knot Theory*, full 48-page notes, §4.2, printed pp. 34–36; URL `https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf`. Supports `def-knot-planar-code`, `lem-wirtinger-local-meridian-conjugacy`, `alg-knot-wirtinger-presentation-from-code`, and the trefoil/unknot group context in `cex-knot-kt-01-boundary-case`.
- Cole Charbonneau, “Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram,” complete 6-page paper, §§1.2–4, printed pp. 2–6; URL `https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf`. Supports the finite diagram input, principal-region/crossing-piece design, algorithm interface, and worked examples.
- John Stillwell, *Classical Topology and Combinatorial Group Theory*, complete 7-page author-hosted excerpt, §§4.2.3–4.2.4, excerpt pp. 1–3, Figures 159–161; URL `https://homepages.math.uic.edu/~kauffman/Stillwell.pdf`. Supports the tunnel-cover route and crossing-relator chart. Its figure-based “simply connected trench” step is not treated as a completed proof here.
- Stefan Friedl, *Knot Theory*, full 248-page lecture notes, §5.3, printed pp. 69–73, and §§5.2–5.4, pp. 68–74; URL `https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf`. Supports the punctured-sphere decomposition, meridian group computation, infinity collar, and knot-group examples. The relevant proof passages were inspected in chunks; the compressed upper-piece gluing argument is not copied as a substitute proof.
- Alessia Cattabriga and Stefano Francaviglia, *Knot Theory and Applications: Lecture Notes*, full 53-page notes, §4.2, printed pp. 19–21, Figure 18; URL `https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf`. Supports the exact four figure-eight equations and the algebraic redundancy of $R_4$; the item also proves that redundancy directly.

The coverage ledger is `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-56.coverage.json`. `source-fetch-check --stamp` verified all 8 page/source records (5 distinct documents); the subsequent fetch gate reports 8/8 verified and no documented drops. A non-selected Rolfsen scan candidate at a 2025 Miami endpoint returned HTTP 404. The exact URL was not preserved in the current batch evidence; no Rolfsen claim is cited. The successful Stillwell, Charbonneau, Calegari, Friedl, and Cattabriga texts supplied alternatives, so no source was dropped from the coverage ledger.

The recovery searches included “Wirtinger presentation knot group proof open cover simply connected complement of trenches textbook pdf,” “Wirtinger presentation proof van Kampen complement upper half space lower half space knot diagram open sets,” and “Cattabriga Francaviglia Knot Theory and Applications Lecture Notes figure 18 figure eight Wirtinger pdf.” The first Rolfsen retrieval failure was not retried after complete alternative treatments were located. Per-item supported claims, dispositions, and dependencies are recorded in the coverage `contents` arrays and item checkpoints above.

## Item checkpoints

### `def-knot-planar-code`

Defines the finite rational polygonal embedding certificate, crossing incidence/order, over/under and edge orientation, one-component tracing, under-arcs, and the positive-meridian orientation. Dependencies: `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-regular-oriented-link-diagram`. References Calegari §4.2 pp. 34–36 and Charbonneau §§1.2–3.2 pp. 2–4. Placement and statement are complete; no proof is asserted, so precheck is not applicable. Decision: `ready`.

### `lem-compact-knot-has-choice-free-tube`

Proves a compact smooth circle has a uniform normal-addition tube and an explicit radial strong deformation retraction of its punctured complement. Dependencies: Euclidean normal addition, its local-diffeomorphism lemma, Lebesgue number, and deformation-retract definition. Uses the finite set of all local chart/radius witnesses, a finite subcover and minimum, with no point-indexed selection. The scoped precheck, proof layout, and strict proof contract pass. References Stillwell §4.2.4 pp. 1–3 and Charbonneau §2 pp. 2–3 for the tunnel model; the finite-radius proof is local. Decision: `ready`.

### `lem-wirtinger-crossing-ball-cover`

States the actual open cover required by KT-01: a deformation-retract subspace of the compact exterior, a free meridian region, one contractible crossing piece per crossing, annular overlaps, and the crossing-free circle case. Dependencies are listed at level 1 in the manifest. Sources: Stillwell §§4.2.3–4.2.4, Charbonneau §2, Friedl §5.3. Proof steps 1.1–1.2 establish only the crossing count and tube reduction. The missing proof is an explicit construction of $Y,U,V_i$, the compatible product-collar homotopies, exact intersection checks, the chosen meridian basis paths, and the crossing-free unknot retraction. Precheck reports `no-qed`; proof contract is structurally populated with `risk_review: incomplete`. Decision: `escalated`.

### `lem-wirtinger-local-meridian-conjugacy`

States $m_R=m_om_Lm_o^{-1}$ or its opposite-direction form, inverse-meridian behavior, and common-path conjugation. Dependencies: code, crossing cover, based-loop/group-law, Seifert–van Kampen, and pushout quotient. Calegari §4.2, Stillwell §4.2.4, and Friedl §5.3 supply the convention/context. The proof-layout, precheck, and contract gates pass; readiness is still blocked by the actual crossing-cover body, whose annulus core is not verified. Decision: `escalated`.

### `lem-knot-group-infinity-collar`

Proves inclusion $\mathbb R^3\setminus K\hookrightarrow S^3\setminus K$ induces a π₁ isomorphism by covering with the Euclidean complement and a ball around infinity; the overlap is a punctured ball homotopy equivalent to $S^2$. Dependencies: knot definition, crossing-cover path-connectedness, based-loop/induced-map/functoriality, sphere simple connectedness, and Seifert–van Kampen. Source: Friedl §5.3 pp. 69–73. The local van-Kampen argument and checks pass, but path-connectedness depends on the escalated crossing-cover supplier. Decision: `escalated`.

### `alg-knot-wirtinger-presentation-from-code`

Defines finite validation, one positive-meridian symbol per under-arc, one oriented conjugacy relator per crossing, and `invalid-input` on failed finite certificates. Dependencies: code, local meridian rule, group-presentation definition. Sources: Charbonneau §§2–3 and Calegari §4.2. Termination and finite output checks pass; the local conjugation direction depends on the escalated local supplier. Decision: `escalated`.

### `thm-knot-wirtinger-presentation-correctness`

Claims the constructor's presentation maps isomorphically to $\pi_1(S^3\setminus K)$ on based positive meridians, including the crossing-free branch and changes of basing/start arc. Dependencies are the level-4 manifest list. Sources: Stillwell §4.2.4, Friedl §5.3, and Charbonneau §§2–3. The finite pushout quotient argument is drafted, including $c=0$ and infinity handling; the actual open cover and annular-core word remain unproved. Precheck, proof layout, and contract structure pass, but the mathematical supplier gap requires escalation. Decision: `escalated`.

### `ex-knot-kt-01-worked-cases`

Computes the unknot group, the trefoil braid presentation and $S_3$ quotient, and all four figure-eight relations, then proves $R_4$ follows from $R_1,R_2,R_3$. The item includes a TikZ trefoil closure and four local figure-eight crossing charts; the code's under-arc transition cycle is explicitly listed. Dependencies: algorithm, theorem, local crossing rule, presentation/free-group/quotient. Sources: Cattabriga–Francaviglia §4.2 Figure 18, Charbonneau §4, Friedl §§5.2–5.4. Finite algebra checks pass; identification with knot groups depends on the escalated correctness supplier. Decision: `escalated`.

### `cex-knot-kt-01-boundary-case`

Refutes the claim that isomorphic abelianized knot groups determine ambient-isotopy type, using the unknot and trefoil. The displayed trefoil code gives the three local crossing triples; the proof verifies its presentation, both abelianizations, the surjection to $S_3$, and the complement-group obstruction to isotopy. Dependencies include the local rule, algorithm/correctness, group/abelianization and isotopy interfaces. Sources: Friedl §§5.2–5.4 and Calegari §4.2. Algebraic calculations pass; group identification depends on the escalated theorem. Decision: `escalated`.

## Validation and handoff

- Scoped item dependency check: 9 items, levels `0,0,1,2,2,3,4,5,5`, no errors; file `deps` match the batch manifest exactly.
- Full-run `item-dependency-levels.mjs check`: 164 pages have empty scaffold inventories; there are no dependency-level mismatches or cycles in the current full-run check. The exact empty-page inventory is preserved in `...batch-56.checks.json`. This is an external run blocker, not a batch-56 label defect.
- Scoped precheck: definition not applicable; seven proof-bearing items pass; `lem-wirtinger-crossing-ball-cover` fails `no-qed` because its proof is explicitly unfinished and escalated.
- `node tools/proof-layout.mjs` on the nine explicitly changed items: 9 items, 30 steps, 0 layout defects.
- A local PDF-render attempt extracted the four TikZ figures but could not compile because this environment has no `tikz.sty`; no package was installed. The diagrams remain as TikZ source and the proof-layout gate passes.
- Statement-first link audit on all nine items: the Definition, Statement, Example, and Statement refuted sections contain no inline wikilinks, Markdown links, autolinks, or HTML anchors. Both page bodies are empty and contain no summaries.
- Strict proof-contract validation: 8 proof-bearing items checked, 0 structural/citation/step/boundary errors. The crossing-cover and its consumers retain `risk_review: incomplete`; completion of a contract is not acceptance.
- Full-run proof-contract coverage cannot close because `minimax-testing-and-detection-rates` has an empty inventory; this is part of the same other-batch scaffold blocker.
- Full-run Step 1 readiness check reports 222 items, 136 ready, and `closed: false`, with 19 missing item readiness records, 47 escalated records, and 164 empty page inventories. Batch 56's two ready records and seven escalations are present.
- Readiness records: `def-knot-planar-code` and `lem-compact-knot-has-choice-free-tube` are `ready`; the seven items depending on unresolved crossing geometry are `escalated`. No `--owner` flag was used and no escalation was overwritten.
- Exact-hash audit: the ready records and five escalated records match their current item hashes. The B items `ex-knot-kt-01-worked-cases` and `cex-knot-kt-01-boundary-case` received later statement/diagram edits after their escalation records were written, so those two stored hashes are stale. I left the escalations untouched as required; the owner must refresh them after reconciliation before any hash-bound handoff.
- No pages were published, no shared plan/run state was changed, and no verdict or acceptance was recorded.

## Owner escalation

The significant unresolved prerequisite is the actual crossing-ball/upper-region cover. The source pictures and compressed gluing arguments do not by themselves verify the required subspace, open-set cover, compatible product collars, path-connected intersections, free meridian basis for the chosen basing paths, or the no-crossing exterior retraction. A complete local proof or a new A-page geometric supplier is needed before the local conjugacy lemma and all downstream correctness/example/counterexample claims can be marked ready. No cycle exists in this batch; no cross-batch prerequisite is missing.
