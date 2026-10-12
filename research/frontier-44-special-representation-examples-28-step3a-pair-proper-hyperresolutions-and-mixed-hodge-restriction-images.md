# Step 3a scope review — pair `proper-hyperresolutions-and-mixed-hodge-restriction-images`

- Run: `frontier-44-special-representation-examples-28`; role alpha; label
  `step3a-pair-proper-hyperresolutions-and-mixed-hodge-restriction-images-0597c48496169ff4`.
- A page: `proper-hyperresolutions-and-mixed-hodge-restriction-images` (order 1828,
  4 items); B page: `proper-hyperresolutions-and-mixed-hodge-restriction-images-examples`
  (order 1831, 1 item); batch 46; category `algebraic-geometry`.
- **Scope decision: `sufficient`.** Review receipt:
  `research/frontier-44-special-representation-examples-28-step3a-review-proper-hyperresolutions-and-mixed-hodge-restriction-images.json`.
  No scaffold, item approval, or owner record was written. This review assesses
  scope only, not proof correctness. Two confirmed definitional prerequisite
  absences and several non-blocking wiring notes are recorded below with
  recommended owner action (§6); they are not subject-matter omissions.

## 1. Inputs read

- `research/frontier-44-special-representation-examples-28-batch-46.pages.json`
  (all 5 item statements, strategies, axiom-use, dependency lists),
  `...-batch-46.coverage.json` (all 31 source rows and decline reasons),
  `...-batch-46.notes.md` (design/plan conflicts, source and check record),
  `...-batch-46.cross-batch-dependencies.json`.
- Design prose and plan: section `## Proper Hyperresolutions And Mixed Hodge
  Restriction Images` of `research/plan-klr-foundation-prerequisites.md`
  (L1303–L1348; full designed statements for the three A suppliers and the one
  example); `research/plan-spec.json` entries for orders 1828/1831; the page
  drafts and the four author carriers under
  `research/frontier-44-special-representation-examples-28-klr-foundation-monodromy-drafts/`
  (`pages/proper-hyperresolutions-...md`, `pages/...-examples.md`,
  `items/thm-proper-varieties-...md`, `items/thm-proper-cohomology-...md`,
  `items/thm-mixed-hodge-weights-...md`, `items/ex-a-nodal-...md`);
  `...-klr-foundation-monodromy-inventory.json` (item contracts,
  `external_suppliers`, `open_interfaces`) and
  `...-klr-foundation-monodromy-report.md` (intended role and class-map use).
- Owner decisions: `...-owner-authoring-direction.md` (same-frontier
  prerequisite extension of 2026-10-09 authorizes this appended pair; "add
  necessary local prerequisites within the selected scope").
- Supplier interfaces actually consumed, read from the current scaffolds:
  batch 30 `def-analytic-topology-...` and
  `lem-locally-contractible-metric-spaces-...`; batch 34
  `def-rational-mixed-hodge-structure`, `def-cohomological-mixed-hodge-complex`,
  `lem-morphisms-...-are-strict`,
  `lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights`;
  batch 35 `thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms`;
  batch 37 `thm-constructible-sheaves-admit-finite-stratified-triangulations-...`
  and `lem-finite-simplicial-open-stars-...`; batch 38
  `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures`;
  batch 39 `lem-smooth-projective-analytification-has-rational-kahler-polarization`;
  batch 45 `thm-proper-hypercovers-compute-constructible-derived-cohomology`;
  published items `lem-chow-lemma-proper-noetherian`,
  `thm-weak-embedded-desingularization`,
  `cor-finite-morphism-proper`,
  `cor-normalization-resolves-singularities-of-curves`,
  `cor-cohomology-over-a-field-is-dual-to-homology-over-that-field`.
- Consumers, by manifest scan of all 50 batch files: batch 48
  `projective-perverse-hard-lefschetz-and-decomposition`, in particular
  `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`
  (deps on two of this pair's items; strategy [F5]) and the page `requires`
  entry for the A page. No other run item or page consumes the pair; the B page
  is a leaf.
- Sources independently re-fetched on 2026-10-10 and hash-checked against the
  coverage stamps: Deligne II `PMIHES_1971__40__5_0.pdf` sha256_16
  `748edefb44fded8a` (read at (3.2.15)–(3.2.18), printed pp. 39–40); Deligne III
  `PMIHES_1974__44__5_0.pdf` sha256_16 `d78d4f46742916cd` (read at (8.2.5)–(8.2.8),
  printed pp. 39–40); Weber `mhs.pdf` sha256_16 `9917272bb0f70c3e` (read at
  §4.1–§4.3, printed pp. 9–11); El Zein `ElZein.pdf` sha256_16 `98547015e6a7a47b`
  (read at §3.2, §4–§5.5, printed pp. 5–8). The two host servers answer 403 to
  user-agent-less fetches; with a browser user agent all four bodies match the
  recorded bytes.
- Step-1 readiness: all five items `ready` (records of 2026-10-09); scope state
  `node tools/step3-decisions.mjs check --run ... --phase scope` shows this page
  had no prior scope decision. Coverage `coverage-checklist` 2 pages/31 rows,
  0 errors, 1 warning (`coverage-low-yield` 9/26); `source-fetch-check` 6/6
  verified, 6/6 resolved, 0 documented drops.

## 2. Scope vs design

The design inventory is 3 theorems + 1 example. The manifest carries all four
under the designed ids/kinds/titles with statements preserved, plus one added
local prerequisite; dependency levels 0, 1, 19, 20, 20.

| manifest item | kind | level | role in the pair |
|---|---|---|---|
| `lem-blowups-of-projective-schemes-are-projective` | lemma | 0 | added local prerequisite: blowups of integral projective complex schemes along nonzero finite-type ideals stay projective |
| `thm-proper-varieties-admit-smooth-projective-hyperresolutions` | theorem | 1 | designed A1 (Deligne III (6.2.5)–(6.2.8)): split smooth-projective proper hypercovers, common refinements, lifting, finite skeleton |
| `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree` | theorem | 19 | designed A2 (Deligne III (8.2.1)–(8.2.4)): functorial MHS on proper cohomology, weights ≤ n, smooth-open pullback morphism, homological class map and pure image |
| `thm-mixed-hodge-weights-control-proper-cohomological-restriction-images` | theorem | 20 | designed A3 (Deligne III (8.2.6), II (3.2.17)–(3.2.18)): equality of the two restriction images and purity of weight n |
| `ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class` (B) | example | 20 | designed B: nodal rational projective curve has H¹ of weight 0, a Čech-hypercover computation |

The five statements match the design and carrier texts sentence-for-sentence at
the level of claims and hypotheses (spot-checked against
`plan-klr-foundation-prerequisites.md` L1303–L1348 and the four carriers).
The addition of `lem-blowups-of-projective-schemes-are-projective` is exactly
the dependency-adequacy repair recorded as conflict 2 of `batch-46.notes.md`:
the design's declared A1 input `thm-resolution-of-singularities-in-characteristic-zero`
gives smooth proper resolutions but not their projectivity, while A1 promises
*smooth projective* covers. Routed through the published
`thm-weak-embedded-desingularization` + the added blowup lemma, A1 is a
projective blowup tower over P^N and keeps the designed claim. This is an
owner-authorized local prerequisite inside the pair's scope, not a scope
change; Step 4 should adopt the manifest inventory (see §5, note N5).

Subject coverage is complete for the intended subject: existence/refinement of
smooth projective proper hyperresolutions (A1), functorial mixed Hodge theory
of proper cohomology including the smooth-open pullback and the homological
class map (A2), the restriction-image equality with purity (A3, including the
de Cataldo–Migliorini 8.3.2 use stated in the design), and one illustrative
computation (B). The B page realizes the designed single example; it
demonstrates the weight-convention phenomenon (weight 0 in degree 1) and, via
the normalization Čech nerve, the hypercover machinery of A1/A2 in a concrete
case, but it does not exercise A3's restriction-image equality. Neither the
design nor any consumer asks for more, so this is not a gap; it is a possible
future enrichment only.

## 3. Intended role and consumers

- Design role (monodromy report): the second branch of the Hodge/monodromy
  lane — "constructs proper smooth-projective hyperresolutions and proper
  weights from pure cosimplicial complexes, then proves equality of actual
  restriction images by strictness"; the proper-cohomology supplier "supplies
  the exact Borel–Moore proper class-map image input needed by de
  Cataldo–Migliorini's absolute/projective proof", with proper singular fibers
  retained.
- In-run consumer: batch 48's induction step
  `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`
  declares `thm-mixed-hodge-weights-control-proper-cohomological-restriction-images`
  and `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`,
  and its strategy [F5] states they "supply the proper restriction-image
  equality, the pure Hodge class image". Those are exactly A3's equality/purity
  and A2's class-map clause; its Step 6.1 additionally uses a graded
  Borel–Moore class map (see finding P1). The consumer page requires the A page
  and is ordered after it (1830 > 1828).
- Orders are coherent: every page in the A page's `requires` is earlier
  (1796–1824); the A page precedes the consumer (1830) and its own B page (1831).
- No other item or page of the run consumes this pair (manifest scan of all 50
  batches). The B example is referenced by nothing.

## 4. Source coverage

- A page: 26 harvested rows over Deligne II/III, Weber, El Zein; B page: 5 rows
  over Deligne III and Weber. The recorded declines were re-examined against the
  fetched bodies and the scaffold:
  - deferred (5): Deligne II §1.2/2.1/2.3 and Weber §2.1–2.2 → batch 34
    `mixed-hodge-structures-and-strictness` (definitions, strictness, MHS
    complex all scaffolded there); Deligne II §4.1–4.2.7 → batch 42
    `geometric-fixed-parts-and-gauss-manin-semisimplicity` (fixed-part and
    semisimplicity theorems scaffolded there); El Zein §5.1 and §§1–4 →
    batch 38 `logarithmic-hodge-complexes-and-smooth-open-weights` (log theorem
    scaffolded there). All three destination pages exist in the run and are
    ordered before 1828. Confirmed as genuine deferrals, not omissions.
  - out-of-scope (3): Deligne III (6.3) relative cohomology of simplicial
    morphisms (A3's proof uses strictness of absolute mixed Hodge morphisms
    instead; no consumer uses it); Weber §4.4 virtual Poincaré polynomials and
    Weber §5 BG/equivariant models (equivariant theory is owned by separate
    frontier pairs). Confirmed unconsumed by the pair and by batch 48.
  - inline (9): the Deligne II rows (3.2.15 via the batch-35 compact-Kähler
    purity theorem; (3.2.16)–(3.2.18) via the batch-38 theorem's
    `W_n H^n(U) = im j*` and A3's generalization of the smooth-Y case), the
    Weber (1.2.3)/(2.3)–(2.4) and El Zein 3.6/5.1–5.3 rows (absorbed in the
    batch-34 mixed-Hodge-complex lemma and batch-45 descent theorem), and
    Deligne III (8.2.1)–(8.2.4). These are genuinely carried by scaffolded
    suppliers or by the item's own statement.
- One coverage-record accuracy finding (N2 below): the rows "(8.2.5)" and
  "(8.2.7)–(8.2.8)" are recorded `inline` into A3, but their content (the
  weight-n quotient identification for a proper surjection from a smooth Y;
  equality of the kernels of f* and (fπ)*; exactness of the localization
  sequence) is present in no item of the pair: A3 states exactly (8.2.6) plus
  purity, and its strategy cites only Deligne II (3.2.17) and III (8.2.4)/
  (8.2.6). The authoring ledger (`...-klr-foundation-monodromy-report.md`)
  records reading III 8.2.1–8.2.6, not 8.2.7–8.2.8. No consumer needs these
  three statements (batch-48's lemma uses only the image equality and the pure
  class image), and the design does not list them, so this is a ledger
  overstatement, not a subject-matter omission.
- The `coverage-low-yield` warning (9/26 on the A page) is answered by the
  above: the 5 deferrals have scaffolded destinations, the 3 out-of-scope rows
  are unconsumed with item-specific reasons, and the inline rows are carried by
  scaffolded suppliers except for the two overstated rows of N2.

## 5. Prerequisites and closure

- All declared item dependencies resolve. The five items have 52 declared dep
  edges / 41 unique targets: 26 published-only, 14 in-run-scaffold-only, 1 both
  (`thm-choice-implies-dependent-implies-countable-choice`); 0 missing. Every
  wikilink in statements and strategies resolves to a published item or an
  in-run scaffold item and is declared in `deps`. All 15 unique page-`requires`
  entries resolve (8 published pages, 6 in-run supplier pages, plus this A page
  as the B page's prerequisite). Every in-run supplier page is earlier
  (1796–1824). **No prerequisite of the pair is absent from both the published
  library and the run scaffold, except the two definitional vocabulary items
  P1/P2 below.**
- P1 — confirmed absence, Borel–Moore vocabulary (consuming item A2, and the
  consumer's Step 6.1). A2's statement defines the class-map as
  `H_i^{BM}(Y,Q) = H_i(Y,Q) → H^{2d-i}(X,Q)(d)` and Step 5.1 uses "ordinary and
  Borel–Moore homology coincide" for proper Y, but no definition of
  Borel–Moore/locally finite-chain homology, and no agreement statement for
  proper (compact) varieties, exists in the published library (no `Borel-Moore`
  text in `items/`) or in the 858-item run scaffold (the only BM items are
  batch 44's *equivariant* constructible BM homology for a different purpose).
  Required claim: a homology theory with locally finite supports with
  `H_i^{BM}(Y) = H_i(Y)` for compact/proper Y (every locally finite chain is
  finite there), plus the duality used in Step 5.1. Recommended addition: one
  local definition item plus a short agreement lemma on the A page (or an
  explicit instruction to state the clause in ordinary homology using the
  published duality corollary; that alternative needs an owner statement
  amendment because it changes A2's Statement). This should be coordinated
  with batch 48's graded-BM use in its Step 6.1.
- P2 — confirmed absence, simplicial splitting/coskeleton vocabulary (consuming
  item A1, shared with batch 45's hypercover theorem). A1's statement quantifies
  over "split simplicial proper hypercover" and defines the proper-hypercover
  condition via `Y_p → (cosk_{p-1}Y_•)_p`, but neither the notion of a split
  augmented simplicial object (extra degeneracies) nor skeleton/coskeleton
  (matching objects) is defined in the published library (`def-simplicial-object-...`
  covers only face/degeneracy maps and the Moore complex) or in the run
  scaffold. Deligne III (6.2.1)–(6.2.4) is the intended source; the strategy
  uses the matching object as "the limit of the previous face diagram".
  Recommended addition: a local definition item (extra degeneracies;
  `sk`/`cosk` and matching objects) on this A page or on batch 45's descent
  page, or explicit inline definitions in A1's statement. This is well-formedness
  vocabulary, not missing mathematics.
- N1 (non-blocking, wiring): A2's [F3] paraphrases
  `thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms` as if it
  were stated for smooth projective varieties; its hypothesis is compact
  Kähler. The bridge — smooth projective analytification is a compact complex
  manifold with a Kähler form from an ample sheaf — is
  `lem-smooth-projective-analytification-has-rational-kahler-polarization`
  (batch 39), reachable inside A2's transitive closure because the declared dep
  `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures`
  depends on it. No new prerequisite is needed, but Step 3b should cite the
  bridge explicitly and note that a hyperresolution term `Y_p` may be reducible
  or mixed-dimensional (the bridge is stated for pure dimension; apply it
  componentwise/finite disjoint union).
- N3 (non-blocking, wiring): the B example uses the normalization
  ν: P¹ → C, finiteness ⇒ properness of ν, and surjectivity, without declaring
  the published suppliers `cor-normalization-resolves-singularities-of-curves`,
  `cor-finite-morphism-proper` (both exist and are verified) nor a
  lying-over/surjectivity item. Recommended: add these dep edges at authoring
  and state "integral" explicitly, since the normalization corollary assumes an
  integral projective curve.
- N4 (uncertainty, conditional supplier): A2 Step 3.1 depends on batch 37's
  `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`,
  which is scaffolded, but its primitive
  `lem-compact-semialgebraic-families-admit-compatible-finite-triangulations`
  is recorded as an open in-run obligation in the monodromy inventory
  `open_interfaces`. The supplier is present (not absent); its closability is
  unverified here. The same inventory records that the consumer uses only the
  chart-wise clause on affine charts of the proper Y, which matches A2.
- N5 (non-blocking, splice bookkeeping): `plan-spec.json`'s A page still lists
  the design's 3 items and A1's original deps (`thm-resolution-of-singularities-in-characteristic-zero`
  in place of the manifest's `lem-blowups-...` + `thm-weak-embedded-desingularization`);
  the manifest has 4 items. Step 4 splice should adopt the manifest inventory
  and deps, as `batch-46.notes.md` conflict 2 already requests. No claim was
  weakened.
- Plan/design locator check: the batch task's cited L1148/L1170 belong to the
  pre-dedup snapshot; the live controlling section is L1303–L1348 and matches
  the manifest item-for-item (batch-46.notes.md conflict 1). Confirmed.

## 6. Decision and owner action

- `sufficient` for `proper-hyperresolutions-and-mixed-hodge-restriction-images`:
  the planned results and example adequately cover the intended subject
  (smooth projective hyperresolutions, functorial proper weights, smooth-open
  pullback, restriction-image equality and purity, one weight computation); the
  source coverage is adequate and every recorded decline is confirmed or
  explained; the declared consumer's needs are exactly the clauses A2/A3
  provide; the dependency closure resolves with no missing target.
- Owner action requested (no pair merger or subject-matter enrichment needed):
  1. decide the two definitional additions P1 (Borel–Moore homology and its
     agreement with ordinary homology on proper varieties) and P2 (split
     augmented simplicial objects; skeleton/coskeleton/matching objects) —
     add the definition items or authorize explicit inline definitions /
     statement wording, then record `proceed` for the resulting scope;
  2. re-disposition the two overstated coverage rows (8.2.5) and (8.2.7)–(8.2.8)
     to match the scaffold, or record them as optional future enrichment;
  3. at Step 3b/4 time, apply the wiring notes N1 (cite the projective-Kähler
     bridge; componentwise for mixed-dimensional Y_p), N3 (example normalization
     deps and integrality wording) and N5 (plan splice adopts the 4-item
     manifest).
- Conditional uncertainty to recheck at Step 3: N4 (batch 37's triangulation
  primitive). Reported to the owner; not treated as scope insufficiency.
