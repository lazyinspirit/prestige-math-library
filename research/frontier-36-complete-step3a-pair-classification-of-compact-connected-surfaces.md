# Step 3a scope review — classification-of-compact-connected-surfaces

- Run: `frontier-36-complete` (batch 10), role alpha, label
  `step3a-pair-classification-of-compact-connected-surfaces-737f18193be404fa`.
- A page: `classification-of-compact-connected-surfaces` (order 444.1, category
  `topology`, 12 items). B page:
  `classification-of-compact-connected-surfaces-examples` (order 444.2, 6 items),
  companion pointers A↔B consistent, B requires only A.
- **Decision: `sufficient`** (non-owner scope review), recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-36-complete --page
  classification-of-compact-connected-surfaces --decision sufficient` at the
  current pair content hash. Receipt:
  `research/frontier-36-complete-step3a-review-classification-of-compact-connected-surfaces.json`;
  re-verify with `node tools/step3-decisions.mjs check --run frontier-36-complete
  --phase scope`.
- Scope only. This review decides whether the planned definitions, results and
  examples cover the intended subject. It is not proof or item approval, and it
  edits no scaffold, item, plan row or owner record.
- The verdict is `sufficient` because the design is covered item-for-item and no
  promised topic or result is missing. It is **not** a statement that the
  scaffold is complete at the definitional level: §"Required Step-3b local
  additions" below names four notions the manifested statements use whose
  carriers no local or reachable published item supplies. These are necessary
  definitions of the pair's own subject matter, which the Step-3b
  scaffold auditor is authorised to add before their consumers
  (`briefs/group-author.md`: "Add and fully author necessary definitions and
  lemmas on assigned existing A pages, before their consumers"), not a scope
  change requiring owner enrichment or a pair merger.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-36-complete-batch-10.pages.json` | Current A inventory (12 items) and B inventory (6 items): every statement, strategy, `deps`, `dependency_level`, provenance and source locator; page `requires`; companion pairing |
| `research/frontier-36-complete-batch-10.coverage.json` | 51 harvested rows over three sources with locators, per-row dispositions and item destinations; five fetch stamps |
| `research/frontier-36-complete-batch-10.notes.md` | Step-1 construction record: design/plan reconciliation, the four added planar suppliers, dependency and closure audit, choice ledger, gate results |
| `research/frontier-36-complete-batch-10.cross-batch-dependencies.json` (`[]`) | No owned cross-batch supplier is requested |
| `research/plan-topology-track.md` §6 (lines ~1953–2004) and the binding reconciliation (lines ~1618–1654) | Controlling prose design: five exact A-page requirements; binding A inventory (8 IDs) and B inventory (6 IDs); mandatory local finite-triangulability proof; uniqueness by orientability plus Euler characteristic; boundaryless, nonempty scope |
| `research/plan-complex-analysis-track.md` §E/§L (lines 5377, 5477–5490, 5509–5510, 5649–5658) | Role seam: planned consumers `thm-topological-classification-compact-riemann-surfaces`, `def-genus-and-euler-characteristic-compact-riemann-surface` (CA-RS-1) and `thm-symplectic-homology-basis-compact-riemann-surface` (CA-RS-3); pair is planned-only |
| `research/frontier-36-complete-batch-28.pages.json` | In-run consumer items and their exact uses of this A page |
| `research/plan-spec.json` rows 444.1/444.2; `research/frontier-36-complete-planning-notes.md`; `research/frontier-36-complete-owner-authoring-direction.md` | Page identity, order, kind, category and `requires` agree with the manifest; the owner direction carries no obligation for this pair; no owner scope decision exists for it |
| `research/frontier-36-complete-alpha-step1-drift.md` §`classification-of-compact-connected-surfaces` | Drift verdict `no-drift`; five declared prerequisites fixed by the topology design; triangulation and polygon reduction are local claims |
| `research/frontier-36-complete-drift-evidence.json` | 158-page declared-requires closure used below |
| `research/published-consumer-supplier-ledger.md` (lines 16306–16320) | Recorded exhaustive zero published impact; only planned CA consumers |
| `items/def-topological-manifold-without-boundary.md`, `items/thm-jordan-brouwer-separation.md`, `items/def-two-dimensional-torus.md`, `items/lem-real-projective-space-cellular-homology-and-pinch-map.md`, and the other published suppliers named in the manifest | Checked statements/conventions of the actual carriers the pair proposes to use |
| Cached full texts `/tmp/frontier36-gallier.txt` (sha256 `9ed2237db5452d29…`), `/tmp/frontier36-koch.txt` (`c2cd0879679453ce…`) | My own re-reading of the pivotal source passages (below) |

## Scope against the prose design

- **A page.** All eight binding design IDs are present with matching kinds and
  in design order: `def-polygonal-schema-and-edge-pairing`;
  `lem-compact-surface-admits-a-finite-triangulation`;
  `lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema`;
  `lem-polygonal-schema-reduction-moves`;
  `thm-polygonal-normal-form-for-compact-connected-surfaces`;
  `thm-classification-of-compact-connected-surfaces`;
  `cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g`;
  `cor-orientability-and-euler-characteristic-determine-a-compact-connected-surface`.
  Four further items are local suppliers of the mandated finite-triangulability
  step, added in proof order, and all four lie in
  `lem-compact-surface-admits-a-finite-triangulation`'s dependency closure:
  `lem-plane-arc-complements-and-accessible-jordan-points`,
  `lem-finite-plane-graph-ear-and-face-facts`,
  `lem-jordan-schoenflies-extension-for-plane-curves`,
  `lem-planar-facial-graph-isomorphism-extension`. This is the
  Thomassen/Gallier–Xu Appendix E route that the design requires when no
  recorded classification may be cited; the additions are necessary local
  lemmas, not a topic expansion, and the page stays far below the 100-item cap.
- **Design boundary clauses preserved.** Every A item is about nonempty compact
  connected *boundaryless* topological 2-manifolds; the empty-manifold case
  permitted by `def-topological-manifold-without-boundary` is named away; the
  normal-form theorem is stated as existence with uniqueness left to the
  classification theorem; Euler characteristic alone is never claimed to
  classify (the B counterexample exhibits the torus/Klein-bottle pair with
  χ = 0).
- **B page.** All six binding design IDs are present with matching kinds and in
  design order: sphere, torus, projective plane, Klein bottle, genus-two and the
  Euler-characteristic counterexample. The examples exercise exactly the
  canonical words of the A normal form and the two-invariant statement of the A
  corollary. No designed claim was dropped, renamed or weakened, and no extra
  pair is proposed.
- **Uniqueness route is covered.** The A page replaces Koch §10's deferred
  π₁/H₁ sketch with the Gallier–Xu Theorem 6.1/6.2 invariants already reachable
  from the declared requirements: integral orientability plus the
  Euler–Poincaré characteristic, with homeomorphism invariance from the
  published Euler–Poincaré formula and singular-homology functoriality. The
  design's required conclusions (normal forms, uniqueness, χ = 2 − 2g for the
  orientable case, joint invariant classification) are all present.
- **Choice scope.** AC is declared on exactly the items that inherit it through
  the published `thm-jordan-brouwer-separation` (which itself declares
  `def-axiom-of-choice`), and the genuinely finite items (arc lemma, conditional
  polygon moves, one-polygon reduction, all six B items) stay choice-free, as
  the source arguments allow. No Recorded result is consumed; no Foundations
  path to `deferred-set-theory-beyond-choice` occurs.
- **Structural state is current.** Whole-run
  `item-dependency-levels check --run frontier-36-complete` exits 0 (897 items,
  60 pages); `manifest-deps` on the batch manifest reports 18 items/0 errors;
  `validate-plan research/plan-spec.json` is OK (acyclic, no B-page or forward
  dependencies); `coverage-checklist` on the batch coverage reports 2 pages,
  51 rows, 0 errors. A closure audit of all 18 items found **0** published
  dependencies outside the declared-requires closure and 0 B-only dependencies
  (all are published A-page items on
  `the-topology-of-euclidean-space`, `compactness-in-metric-spaces`,
  `simplicial-complexes-and-simplicial-homology`,
  `simplicial-subdivision-and-simplicial-approximation`,
  `cw-complexes-and-cellular-homology`, `compactness`,
  `orientations-poincare-lefschetz-and-alexander-duality`,
  `singular-chains-and-singular-homology`, `relations-functions-and-quotients`).

## Source coverage

Three independent full texts are harvest-verified (byte counts and sha256
prefixes as in the coverage file; I re-hashed the two cached PDFs and the
prefixes match):

- Gallier–Xu, *A Guide to the Classification Theorem for Compact Surfaces*,
  Chapter 3 §§3.1–3.2, Chapter 6 §§6.1–6.3, Appendix E. I re-read the pivotal
  passages in the cached text: Lemma 6.1 (canonical cell complexes), Theorem 6.1
  (triangulated compact polyhedra classified by orientability, number of
  contours and Euler–Poincaré characteristic), Theorem 6.2 (same for compact
  surfaces), the statement that triangulability is deferred to Appendix E, and
  §1.2's constructions of RP² (lines through the origin; upper hemisphere with
  antipodal boundary identification; the `aa` word) and the Klein bottle
  (`aba^{-1}b`, `aacc`). The pair's item statements and corollaries agree with
  these statements for the boundaryless case.
- Thomassen, *The Jordan–Schönflies Theorem and the Classification of
  Surfaces* (Monthly 99, 1992). The coverage cites Lemmas 2.1–2.14 and Theorems
  2.12, 3.1, 3.3, 4.1, 5.1 from the scanned pages. **Honest limitation:** that
  PDF is a scan and I did not re-read its page images myself; I verified the
  attribution indirectly — Gallier–Xu state that they present Thomassen's proof
  of triangulability in their Appendix E, and the manifest's proof strategies
  match the Thomassen route (countable mesh-controlled graph back-and-forth,
  facial isomorphism extension, finite disk cover). No divergence was found.
- Koch, *Classification of Surfaces*, §§1–9 plus §10. I re-read §10: it is
  explicitly a rough sketch deferring uniqueness to a later course, so the
  coverage's `out-of-scope` disposition for the uniqueness claim is correct, and
  the scaffold's decision to prove uniqueness from published invariants is the
  right response. Koch's remark on connected sums (that their well-definedness
  is left unproved in his book, so his reduction avoids them) is reflected in
  the A theorem's strategy, which explicitly refuses to assume connected-sum
  independence.

No source failed or was dropped; no retrieval retry is pending; no unresolved
source-level uncertainty remains except the scan limitation recorded above.

## Role in the library

- The pair is planned-only with **zero direct and zero transitive published
  consumers** (ledger lines 16306–16320; no published `deps`, `justified_by` or
  load-bearing body link names any of its 18 IDs). Its only consumers are the
  planned CA-RS-1 items `thm-topological-classification-compact-riemann-surfaces`
  and `def-genus-and-euler-characteristic-compact-riemann-surface` (which depend
  on `thm-classification-of-compact-connected-surfaces` and
  `cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g`
  respectively) and CA-RS-3 under the design table. Those consumer uses are
  exactly the two results the pair's design promises, so the library role is
  served. The B page is a dependency leaf requiring only A, as designed.

## Required Step-3b local additions (before their consumers)

These are the only completeness gaps found. Each is a necessary definition of a
notion the manifested statements already use, fully supported by the harvested
sources, and each belongs to the Step-3b scaffold auditor's local repair remit.

1. **Connected sum of two compact connected surfaces.** Used in
   `thm-classification-of-compact-connected-surfaces` ("connected sum of g
   tori", "connected sum of k real projective planes") and in
   `ex-genus-two-orientable-surface-polygonal-schema`. The phrase "connected
   sum" has **zero occurrences** anywhere in `items/` or `library/`, so no local
   or published carrier exists. Supply `def-connected-sum-of-compact-surfaces`
   (delete open disks, glue along boundary circles) with the explicit polygon
   identification the classification strategy already plans; Gallier–Xu
   Definition 6.6 supplies the construction, and Koch §1–§3 the models. Do not
   import connected-sum independence: Koch leaves it unproved and the strategy
   correctly uses only explicit finite gluings, so the definition only has to
   make the statement well-formed.
2. **Klein bottle.** Used in `ex-klein-bottle-polygonal-schema` ("realizes the
   Klein bottle, equivalently the standard square word `a b a^{-1} b`"). The
   only three library files mentioning the Klein bottle sit on pages outside the
   pair's declared-requires closure and none defines it (one is a group
   presentation, one a mapping-torus aside on a B page). Supply a definition
   (square model, or mapping torus of the reflection) or restate the item so the
   model is part of its statement; Gallier–Xu §1.2/§6.2 and Koch §3 cover it.
3. **Real projective plane.** Used in the same two statements. There is no
   definition item for RP^n; the usable in-closure carrier is
   `lem-real-projective-space-cellular-homology-and-pinch-map` (published on
   `singular-cohomology-and-coefficient-theorems`, inside the closure), whose
   statement defines RP^m = S^m/(x ∼ −x). Either depend on that carrier or add a
   local definition (the B example already uses the hemisphere/antipodal model,
   matching Gallier–Xu §1.2). The chart model on
   `smooth-manifolds-and-smooth-maps-examples` is B-only and cannot be a
   dependency under the b-leaf-content rule.
4. **Genus.** `cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g`
   quantifies over "a unique genus g ≥ 0" without a definition item; the CA
   consumer calls the same invariant the "handle count". Define genus (as the
   unique g of the orientable normal form) either inside the corollary's
   statement or as a local definition before it.

Sphere (`def-euclidean-spheres-and-closed-balls`) and torus
(`def-two-dimensional-torus`) carriers already exist inside the closure, so no
addition is needed for those names; the author must still declare the exact
dependencies where the statements use them.

## Observations and residual uncertainty

- The A page's declared requirement `the-fundamental-group` is not used by any
  manifested item `deps`; the uniqueness argument chosen (Gallier–Xu
  invariants) does not need π₁, which was Koch §10's deferred sketch route. The
  requirement set is plan-controlled and matches `plan-spec.json`, so this is a
  non-blocking observation, not a scope defect.
- The AC declarations are inherited from the published
  `thm-jordan-brouwer-separation`; over-declaring AC downstream of a supplier
  that assumes it is conservative and consistent with CLAUDE.md rule 11. I found
  no choice-free argument falsely depending on AC, and no AC argument presented
  as choice-free.
- I found **no potentially defective published item** among the actual
  carriers used by this pair; the statements, hypotheses and indexing checked
  (manifold convention, Euler characteristic invariance, top-homology
  orientability, antipodal quotient model) match their uses.
- Residual uncertainty, stated honestly: (a) if the owner reads the scope bar as
  requiring every named notion to be already manifested, the four items of the
  previous section would move this pair to `insufficient`; I judged them to be
  the Step-3b author's necessary local definitions rather than a subject-level
  omission, since no design topic or result is missing and no merger is
  required. (b) The Thomassen scan was not re-read page-by-page by me; the
  triangulation attribution rests on the verified Gallier–Xu cross-reference
  and the coverage's stamped harvest.

## Checks run

| Check | Result |
|---|---|
| `item-dependency-levels check --run frontier-36-complete` | exit 0 — 897 items, 60 pages |
| `manifest-deps research/frontier-36-complete-batch-10.pages.json` | 18 items, 0 errors |
| `validate-plan research/plan-spec.json` | OK — acyclic, no forward/B-page/unresolved edges |
| `coverage-checklist research/frontier-36-complete-batch-10.coverage.json` | 2 pages, 51 rows, 0 errors, 0 warnings |
| Declared-requires closure audit of all 18 items' published deps | 0 violations, 0 B-only dependencies |
| Cached source hash re-verification | Gallier `9ed2237db5452d29…`, Koch `c2cd0879679453ce…` match coverage stamps |

Next action: none required from the owner for this pair; Step 3b authors the
scaffold in dependency-level order and supplies the four definitions above
before the items that use them, refreshing the scope evidence afterwards.
