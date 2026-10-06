# Batch 8 Step 1 scaffold — Categorical Braid Actions and Decategorification

Run: `frontier-40-geometry-braids-rep-27` · pair `categorical-braid-actions-and-decategorification`
(A, order 757, `braid-groups`) / `categorical-braid-actions-and-decategorification-examples`
(B, order 758). Outputs: `research/frontier-40-geometry-braids-rep-27-batch-8.pages.json`
(30 A + 4 B = 34 items), `research/frontier-40-geometry-braids-rep-27-batch-8.coverage.json`,
`research/frontier-40-geometry-braids-rep-27-batch-8.cross-batch-dependencies.json`, this note,
and 34 item-readiness records `research/frontier-40-geometry-braids-rep-27-step1-<id>.json`.

## Owner direction and design control

`research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md` was read first. It
keeps the 27-pair scope, forbids changing selected pairs, and explicitly permits lower-order
dependencies on other selected pairs in this exact run ("Scaffold and certify suppliers before
consumers"). This pair has exactly one such supplier, `the-burau-representations`
(order 745, batch 5), for the decategorification comparison and the five-strand Burau-kernel
input; the direction therefore authorizes the dependency and requires the batch-5 items to be
scaffolded before this batch, which they are. Nothing else in the direction changes this pair.

Design locations read: `research/plan-braid-groups-track.md` **L722** = the heading plus
inventory table of `BG-15 — Categorical Braid Actions and Decategorification` (the A page,
L722–L751), and **L753** = the heading plus table of `BG-15 — … — Examples` (the B page,
L753–L760). The two are sections of one binding design; **L722 controls the A inventory and
L753 the B inventory**, and there is no competing design for this pair. The complete BG-15
section, its `Requires` list, its warnings (weak action, not coherence; triangulated $K_0$,
not short-exact $G_0$) and its proof routes were preserved.

**Design versus plan.** `research/plan-spec.json` carries the page records 757/758 with the
same titles, kinds, category, companion pointers and the identical A-page `requires` chain
(`graded-quiver-algebras-and-derived-tensor-functors`, `geometric-braids-and-artin-generators`,
`the-burau-representations`, `grothendieck-groups-and-graded-cartan-pairings`,
`perfect-complexes-and-triangulated-grothendieck-groups`,
`punctured-disks-mapping-classes-and-point-pushing`, `homological-gaussian-elimination`), and
with empty item lists, so the plan fixes the page frame and delegates the item inventory to the
design. **No design/plan conflict exists**; the earlier run drift review
(`frontier-40-geometry-braids-rep-27-alpha-step1-drift.md`, BG-15 entry) also returned
`no-drift` for this page. The only design-level imprecision repaired here is recorded below.

## Inventory

A page — 30 items: the 18 design ids plus 12 authorised local prerequisites. Levels (as
computed by `tools/item-dependency-levels.mjs`, in-run dependencies only) in parentheses.

1. `def-weak-action-of-a-group-on-a-category` (0) — KS Definition 2.6, weak versus coherent.
2. `def-faithful-weak-categorical-action` (1) — faithfulness of the functor assignment.
3. `def-curves-and-geometric-intersection-numbers-on-the-marked-disk` (0) — **added**: KS §3a
   curves, minimal intersection, the half-weight $I$, its flow extension.
4. `lem-geometric-intersection-numbers-are-isotopy-invariants` (1) — **added**: KS Lemmas 3.2–3.3.
5. `def-basic-arcs-admissible-curves-and-normal-form` (1) — **added**: KS §3b/§3e basic set,
   admissible curves, $d_i$, normal form, crossings, segments, string types, the nested twists.
6. `lem-standard-twists-fix-the-complementary-basic-arcs-and-commute` (2) — **added**: the
   incidence facts used in KS's Lemma 3.6 proof ($\tau_j(b_k)\simeq b_k$, $k\ne j$).
7. `lem-standard-disk-twists-generate-a-free-abelian-subgroup` (3) — **added**: KS's free
   abelian twist subgroup, proved by the Farb–Margalit surgery formula.
8. `def-khovanov-seidel-bigraded-cover-and-bigraded-curves` (1) — **added**: first half of the
   design's bigraded row (the $\mathbb Z^2$-cover, preferred lifts, bigradings).
9. `def-khovanov-seidel-bigrading-cover-and-local-intersection-indices` (2) — design: local
   indices and $I^{\mathrm{bigr}}$ with its properties (the second half of that row).
10. `lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action` (2) — **added**:
    KS Lemmas 3.12–3.13.
11. `lem-the-preferred-lift-of-a-half-twist-shifts-the-bigrading` (3) — **added**: KS Lemma 3.14.
12. `lem-normal-form-string-types-and-their-geometric-intersection-contributions` (2) —
    **added**: KS Lemma 3.18.
13. `lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers` (4) — **added**:
    KS Lemma 3.20, including the $(q_1^{-1}q_2)^u$ dependence.
14. `lem-khovanov-seidel-generator-complexes-are-mutually-inverse` (0) — design; KS Prop. 2.4.
15. `lem-khovanov-seidel-complexes-satisfy-far-commutativity` (0) — design; KS Thm. 2.5 (2.10).
16. `lem-khovanov-seidel-complexes-satisfy-the-three-term-braid-relation` (1) — design; KS
    Thm. 2.5 (2.11)–(2.13).
17. `def-khovanov-seidel-complex-of-a-braid-word` (0) — design; KS Definition 2.6.
18. `thm-khovanov-seidel-complexes-give-a-weak-derived-braid-action` (2) — design; KS Prop. 2.7.
19. `def-khovanov-seidel-path-ideal` (0) — design; $J$, $J^3=0$, $A_m/J\cong\mathbb Z^{m+1}$.
20. `lem-finite-graded-projective-a-m-modules-are-sums-of-shifted-vertex-projectives` (1) —
    design; the nilpotent Nakayama classification with uniqueness.
21. `lem-graded-grothendieck-group-of-a-m-is-free-on-the-shifted-vertex-projectives` (2) —
    **added**: the freeness claim that the design's definition row asserted but could not prove.
22. `def-graded-grothendieck-group-of-a-m-perfect-complexes` (0) — design; interface definition
    naming $G(A_m)=K_0(C_m)$ with the $q$-action and the $G_0$/field-algebra warnings.
23. `prop-khovanov-seidel-decategorification-is-the-unreduced-burau-action` (5) — design; the
    displayed action on every $[P_j]$ plus an *explicit* change of basis $C$ with $CA_iC^{-1}=B_i|_{t=q}$.
24. `def-khovanov-seidel-complex-of-an-admissible-bigraded-curve` (3) — design; $L(\widetilde c)$.
25. `lem-the-khovanov-seidel-curve-complex-is-a-complex-and-is-invariant-under-normal-form-moves` (4).
26. `lem-khovanov-seidel-curve-complexes-intertwine-the-braid-generators` (5) — design; Prop. 4.4,
    Cor. 4.8.
27. `thm-khovanov-seidel-homs-compute-bigraded-arc-intersections` (6) — design; Prop. 4.9, Thm. 1.1.
28. `lem-khovanov-seidel-basic-arcs-detect-the-identity-braid` (4) — design; KS Lemmas 3.4–3.6
    with the missing freeness input supplied by item 7.
29. `thm-the-khovanov-seidel-weak-braid-action-is-faithful` (7) — design; KS Corollary 1.2.
30. `lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel` (10) — **added**: Bigelow's
    explicit nontrivial kernel element, needed to make the B-page counterexample provable without
    consuming a recorded-not-proved item.

B page — the 4 design ids: `ex-cancelling-a-generator-with-its-inverse-categorical-twist` (1),
`ex-decategorifying-a-khovanov-seidel-generator` (6),
`cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences` (11),
`cex-ks-weak-actions-do-not-supply-pentagon-coherence-data` (1).

### Why the added ids are prerequisites, not padding

* Items 3–7 supply the topological layer that KS §3 uses before its bigraded definitions. The
  design's arc-detector row already invoked $I$ (ordinary intersection numbers) and "the
  free-abelian twist subgroup" without any item defining $I$, fixing the standard picture, or
  proving the freeness; without items 3–7 the detector's hypothesis has no referent and its
  last step is an unproved appeal. Item 7's proof is honest about the one non-elementary input:
  the Farb–Margalit surgery formula $i(T_a^k(b),b)=|k|\,i(a,b)^2$, whose proof is the
  bigon/position argument cited and transcribed.
* Items 8–13 split the design's single bigraded definition row into its definitional content
  (cover; local indices) and its factual content (existence/rigidity of bigradings, the
  half-twist shift, the two string tables). A definition cannot assert Lemma 3.12–3.14 or the
  tables, so the scaffold separates them; nothing is weakened, and every clause of the design
  row remains.
* Item 21 is the freeness statement hidden in the design's `def-graded-grothendieck-group…`
  row ("identify it with the free split group $\bigoplus\mathbb Z[q,q^{-1}][P_i]$"). It is
  proved from the published perfect-complex comparison and item 20; the definition keeps only
  notational and warning content.
* Item 30 makes the B-page counterexample independent of the recorded-not-proved item
  `rem-current-faithfulness-status-of-the-reduced-burau-representation` (which cannot be a
  dependency): the scaffold proves the needed instance directly from Bigelow's Theorem 1.4 and
  his Section 3 construction, with the finite verifications named.

### Design corrections and dependency repairs (all recorded against the source)

* **Bigraded definition split** (above) and **$L(\widetilde c)$ indexing corrected**: the design
  row `def-khovanov-seidel-complex-of-an-admissible-bigraded-curve` says "assign a shifted
  vertex projective to every essential $k$-string"; KS §4a assigns one shifted copy
  $P_{x_0}[-x_1]\{x_2\}$ to every *crossing* $x$, with the *differential components* given by
  the essential segments. The scaffold follows the source, since the design cites KS §4a–4b as
  its route; the design's phrase is treated as a paraphrase, not as a competing construction.
* **Arc detector dependencies extended.** The design listed only the mapping-class theorem and
  the bigraded definition; the detector's statement uses ordinary $I$ and its proof uses the
  basic-curve classification, the standard-twist incidence facts and the free-abelian subgroup.
  Items 3–7 are declared as dependencies.
* **Decategorification made convention-explicit.** The design's route said "after the explicit
  basis/parameter convention $q=t$", which is not sufficient: the KS matrices on
  $([P_0],\dots,[P_m])$ are *not literally* the Burau matrices but are conjugate to them. The
  scaffold records the explicit invertible intertwiner $C$ (bidiagonal with
  $C_{r,r}=C_{r,r+1}=(-q)^{m-r}$), checked on generators. This answers the planning note
  `research/braid-groups-planning/researcher-06-categorical-actions.md` ("do not merely assert
  $q=t$").
* **KS Proposition 2.8's reduced-Burau clause** (the submodule $K'$ spanned by $[P_1],\dots,[P_m]$)
  is not part of the design's promised claim and is disposed `out-of-scope` in the coverage file;
  the reduced representation is a published item of the (in-run) Burau page.
* **Weak versus coherent.** Both the A-page definition and the B-page counterexample keep KS's
  action weak; no coherence upgrade is claimed anywhere.

## Source harvest

Seven source entries over the two pages (four on A, three on B), all fetched as complete
documents and stamped (`source-fetch-check: 7/7 source(s) fetch-verified`):

1. **Khovanov–Seidel, *Quivers, Floer cohomology, and braid group actions*, JAMS 15 (2002)**
   (arXiv:math/0006056v2, sha256 `34e74708…c6957d`, 72 pages) — Introduction, §§1b, 2a–2e,
   3a–3e, 4a–4c read in the MuPDF extraction; §§5–6 (Floer cohomology) deliberately not read
   and disposed out-of-scope.
2. **Farb–Margalit, *A Primer on Mapping Class Groups*, v5.0 author draft** (book) — bigon
   criterion, isotopy extension, Dehn-twist intersection formulas with the full proof of
   Proposition 3.2.
3. **Bigelow, *The Burau representation is not faithful for n = 5*, Geom. Topol. 3 (1999)**
   — Theorems 1.2 and 1.4, §2 proof, §3 construction.
4. **Seidel–Thomas, *Braid group actions on derived categories of coherent sheaves*, Duke 108
   (2001)** (arXiv:math/0001043) — introduction, Theorem 2.18, §3d; independent corroborating
   treatment, not consumed by any local proof (all its harvested rows are `out-of-scope` with
   reasons).
5. **Khovanov–Thomas, *Braid cobordisms, triangulated categories, and flag varieties*, HHA 9
   (2007)** (arXiv:math/0609335) — the weak-versus-genuine action discussion used in item 1 and
   the B-page pentagon counterexample.
6. **Birman–Brendle, *Braids: A Survey*** — the unreduced Burau matrix convention used by the
   decategorification proposition and item 30.

Every harvested heading received a disposition in the coverage files: 37 `included` rows naming
scaffolded items, 8 `inline` rows, 4 `already-published` rows and 8 `out-of-scope` rows with
specific reasons; no result is left undisposed.

## Cross-batch dependencies

Batch 8 consumes one in-run pair, `the-burau-representations` (batch 5, order 745):
one page-level edge and seven item-level edges are recorded in
`research/frontier-40-geometry-braids-rep-27-batch-8.cross-batch-dependencies.json` with status
`open` and the exact required clauses (the unreduced matrix convention, the same-kernel bridge,
the cyclic cover, the topological-matrix agreement, the Laurent coefficient ring of
$I^{\mathrm{bigr}}$, and the unreduced matrix used by the decategorification example; see the
attempt-2 section below, which added the last two rows after late manifest edits). The supplier
is a *draft scaffold* in this run: the owner direction explicitly permits the dependency, and the
Step-3 author/reviewer must re-verify it against the authored content before the Step-3 gate.

One outgoing edge exists and is owned by its consumer: `rouquier-complexes-and-categorical-braid-relations`
(batch 9, order 761) declares this A page in its `requires`. Recorded here so the batch-9 owner
reviews it in its own cross-batch input; batch 8 does not edit that file.

## Published-prerequisite inspection (no defective prerequisites found)

The declared supplier pages were read at item level: `graded-quiver-algebras-and-derived-tensor-functors`
(published; the 18 Khovanov–Seidel items including the twist complexes, the Temperley–Lieb
theorem, the bounded homotopy category and the two $K_0$ shift items),
`geometric-braids-and-artin-generators` and `punctured-disks-mapping-classes-and-point-pushing`
(published; geometric braids, elementary half twists, the boundary-fixed mapping class theorem
and the smooth isotopy-extension items),
`grothendieck-groups-and-graded-cartan-pairings`,
`perfect-complexes-and-triangulated-grothendieck-groups` (the perfect-complex versus split
$K_0$ comparison, read in full statement and proof) and `homological-gaussian-elimination`
(the block cancellations used by Proposition 2.4, read in full). No hypothesis mismatch was
found: in particular the Gaussian-elimination theorem's invertible-pivot hypothesis is exactly
the identity pivot produced by the KS corner computation, and the perfect-complex comparison
requires no Noetherian or finite-global-dimension hypothesis, so it applies to $A_m$ directly.
No published item is consumed to prove its own replacement.

## Checks actually run (with results)

| check | command | result |
|---|---|---|
| manifest dependency fields | `node tools/manifest-deps.mjs research/…-batch-8.pages.json` | 34 items, 0 missing, 0 error(s) |
| scaffold policy (manifest mode, whole run) | `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` | 449 scoped items, 2 error(s), 0 warning(s) — **both errors are in batch 27** (`lem-arith-poincare-cohomology-at-the-identity` depends on `thm-projective-resolutions-exist`; `lem-arith-mumford-map-degree-is-euler-characteristic-square` depends on `lem-flat-base-change-cohomology`), neither declared nor on disk; no batch-8 finding |
| coverage (scaffold contract) | `node tools/coverage-checklist.mjs research/…-batch-8.coverage.json --require-destination` | 2 pages, 57 harvested results, 0 errors, 0 warnings |
| full-text fetch stamps | `node tools/source-fetch-check.mjs --coverage research/…-batch-8.coverage.json --stamp` | 7/7 source(s) fetch-verified |
| dependency levels (whole run) | `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` | red only on sibling batch-27 items (`lem-arith-*` carry `dependency_level 2` against computed values 0–12); restricted to batch 8 the levels recompute with 0 errors, maximum level 11 |
| readiness records | `node tools/step1-decisions.mjs record` ×34, then `check --run frontier-40-geometry-braids-rep-27` | all 34 batch-8 items closed; remaining work rows are the batch-5 draft supplier, sibling batches still unscaffolded, and the batch-27 level errors |

## Unresolved findings / escalation status

* No escalation is required for the mathematical closure of this pair: every item has a
  complete proof strategy with an explicit route and met published or in-run scaffolded
  prerequisites, and no cycle, forward edge or inadequate hypothesis was found in batch 8.
* The one dependency that is not yet *authored* content is the batch-5 Burau scaffolding
  (aligned with the owner direction's supplier-first rule). Its seven item edges are recorded
  `open` in the cross-batch input; they must be verified on current content at Step 3.
* Whole-run gates remain red outside batch 8: two dangling dependencies and 24 mismatched
  `dependency_level` labels in batch 27, and the still-empty batches 6, 9, 10, 11, 14–20,
  23, 24, 26. These are recorded here, not repaired (outside the batch's write scope).
* Owner reconciliation and the full engine gate follow construction; neither this note nor the
  readiness records are independent mathematical approval. Step 3 provides that review.

## Attempt 2 completion pass (2026-10-04)

Attempt 1 wrote every artifact (manifest, coverage, this note, and 34 readiness records) but its
session ended without a terminal response (`terminal_summary.task_completed: false`,
`final_response_present: false`, no error events), so the engine re-dispatched the batch. The
attempt-1 failure line also cites `dispatch: note — brief retains generic placeholder(s) <br>`;
that token is the HTML line break in the generated task file's design row (`L722<br>L753`), a
false positive of the `<([a-z]+)>` placeholder detector, not a defect of an owned artifact.
This pass preserved all 34 ready items and records unchanged, and repaired the one real gap
found by re-deriving the unification ledger.

### Repaired: two missing cross-batch review rows

`frontier-dependency-ledger.mjs` derives eight cross-batch edges for this consumer batch (one
page edge and seven item edges into batch 5), but the input file carried only six: the late
manifest edits of attempt 1 (adding the Laurent-ring and Burau-matrix dependencies) postdated
the file write. Both rows were added with the exact clause the Step-3 author must re-verify:

* `def-khovanov-seidel-bigrading-cover-and-local-intersection-indices <- def-the-laurent-polynomial-ring`
  — the coefficient ring $\mathbb Z[q_1^{\pm1},q_2^{\pm1}]$ of $I^{\mathrm{bigr}}$, its
  monomial units and the reversal rule; needs the supplier's $\Lambda_1=\mathbb Z[t^{\pm1}]$,
  its universal property (iterated once) and the explicit $t^{-1}$.
* `ex-decategorifying-a-khovanov-seidel-generator <- def-unreduced-burau-matrices` — the
  example's $B_1$ at $t=q$: exact $2\times2$ block, its placement in rows/columns $i,i+1$, the
  column-vector convention and the relative lifted-edge basis.

After the edit the refresh derives 8/8 reviewed edges for batch 8 and no orphaned reviews.

### Checks run in this pass (whole run unless stated)

| check | command | result |
|---|---|---|
| readiness records | `node tools/step1-decisions.mjs check --run frontier-40-geometry-braids-rep-27` | 474 items, 341 ready, not closed; **0 work rows for batch 8** — all 34 records current and hash-bound |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` | batch 8: 0 errors, max level 11; whole run red only outside batch 8: 24 empty-inventory page errors in unscaffolded batches 6, 9–11, 16–20, 23, 24, 26 and 12 `dependency_level` mismatches in batch 25 (`lem-surface-*` items labelled 0 against computed 1–8) |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run … --require-reviewed` | batch 8 complete (8/8 edges reviewed); whole run still red: unreviewed batches 6, 9, 10, 11, 16–20, 23, 24, 26 and 19 unreviewed edges elsewhere; the pre-existing outgoing edge (batch 9's `rouquier-complexes-and-categorical-braid-relations` requires this A page) belongs to batch 9's input |
| manifest integrity | `node tools/manifest-integrity.mjs --run …` | 54 pages owed, 54 in the manifests; no scope drift |
| manifest dependencies | `node tools/manifest-deps.mjs research/…-batch-*.pages.json` | 474 items, 0 normalized, 0 error(s) |
| scaffold policy | `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` | 474 scoped items, 0 error(s), 0 warning(s) |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; declared order acyclic and consistent; 247 planned pages still carry no item list (sibling batches) |
| coverage (batch 8) | `node tools/coverage-checklist.mjs research/…-batch-8.coverage.json --require-destination` | 2 pages, 57 harvested results, 0 error(s), 0 warning(s) |
| full-text fetch stamps (batch 8) | `node tools/source-fetch-check.mjs --coverage research/…-batch-8.coverage.json` | 7/7 source(s) fetch-verified, 7/7 resolved |
| url sweep (whole run) | `node tools/url-sweep.mjs --coverage … --recover --fail-on-dead` | 70/71 live, 1 HTTP 404 (Cambridge, *Weak containment and induced representations of groups*) already full-text fetched, non-blocking; all four batch-8 URLs live |
| source backing | `node tools/source-backing.mjs --coverage … --liveness …` | 294 authored result(s) across 15 file(s), every one backed |
| external references | `node tools/extcheck.mjs --quiet` | OK |
| drift review | `node tools/drift-review-check.mjs --run …` | 27 page(s) reviewed, no blocked edges |

### Remaining findings, recorded not repaired (outside batch 8)

* Sibling batches 6, 9–11, 14–20, 23, 24, 26 are still unscaffolded or have incomplete
  cross-batch inputs; their work rows dominate the whole-run gate diagnostics above.
* One dead citation URL in the whole-run sweep (not batch 8; already fetch-verified, so the
  gate continues).
* No batch-8 escalation. Every batch-8 item has a complete proof strategy and met in-run or
  published prerequisites; the seven batch-5 edges are draft-scaffold dependencies the owner
  direction explicitly permits and Step 3 must re-verify on authored content.

## Attempt 3 completion pass (2026-10-04)

Attempts 1 and 2 wrote the manifest, coverage, cross-batch input and all 34 readiness
records but each session ended without a terminal response (`ok: false`,
`task_completed: false`, `final_response_present: false`, no error events), so the
engine re-armed the batch. This pass preserves every unchanged ready item, repairs the
one real contract gap found by a full Axiom-of-Choice audit, refreshes exactly the
records whose transitive hash closure changed, and records the results below.

### Repaired: Axiom of Choice was not declared where the proof uses it

The manifest declared no choice assumption anywhere, yet several items consume
suppliers whose statements or constructions assume AC. In this library AC is declared
in an item's contract, named through `def-axiom-of-choice` in `deps`, and carried to
consumers that use the result (every published consumer of
`thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`
and of `lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints`
carries it; the batch-5 Burau suppliers `prop-reduced-and-unreduced-burau-representations-have-the-same-kernel`
and `thm-topological-and-matrix-burau-representations-agree` state "Assume AC" outright).

Criterion applied: declare AC exactly where the item's own statement or proof route
invokes an AC-bearing clause; leave items whose arguments are finite local
computations choice-free, and record the borderline ones for Step 3. Eight items were
repaired (each now states `Assume AC`, lists `def-axiom-of-choice`, and identifies its
use; no other clause changed):

| item | identified AC use |
|---|---|
| `lem-geometric-intersection-numbers-are-isotopy-invariants` | the relative-isotopy step replaces homotopic arcs by isotopic ones via the AC-stated arc-isotopy lemma; the bigon criterion and counting are choice-free |
| `def-khovanov-seidel-bigraded-cover-and-bigraded-curves` | passage between braid classes and boundary-fixed mapping classes so that `B_(m+1)` acts on bigraded curves; cover, deck action and preferred lifts are choice-free |
| `lem-khovanov-seidel-curve-complexes-intertwine-the-braid-generators` | the induction over braid words reads a braid as a mapping class; each local intertwining isomorphism is finite |
| `thm-khovanov-seidel-homs-compute-bigraded-arc-intersections` | the statement displays the isomorphism `B_(m+1) = G`; the graded Hom table is finite |
| `lem-khovanov-seidel-basic-arcs-detect-the-identity-braid` | the braid/mapping-class transfer and the isotopy-extension steps; the intersection tables and exponent bookkeeping are finite |
| `thm-the-khovanov-seidel-weak-braid-action-is-faithful` | inherited through the Hom theorem and the detector, both using `B_(m+1) = G` |
| `lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel` | inherited from the topological Burau representation, the same-kernel transfer and the arc-isotopy lemma; the explicit matrix identities are finite |
| `cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences` | inherited from the five-strand kernel lemma and the faithfulness theorem |

Nine further items had their readiness records refreshed because an upstream dependency
entry changed; their contracts are unchanged and they remain choice-free:
`lem-standard-twists-fix-the-complementary-basic-arcs-and-commute`,
`lem-standard-disk-twists-generate-a-free-abelian-subgroup`,
`def-khovanov-seidel-bigrading-cover-and-local-intersection-indices`,
`lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action`,
`lem-the-preferred-lift-of-a-half-twist-shifts-the-bigrading`,
`lem-normal-form-string-types-and-their-geometric-intersection-contributions`,
`lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers`,
`def-khovanov-seidel-complex-of-an-admissible-bigraded-curve`,
`lem-the-khovanov-seidel-curve-complex-is-a-complex-and-is-invariant-under-normal-form-moves`.
Two of these already recorded "no choice principle is used" in their strategies, and
their local/table arguments are finite; this is a deliberate choice-free branch, not an
omission. Residual question for Step 3: confirm on authored content that these items
consume only the choice-free clauses of the repaired items above (the deck/shift/table
clauses), never the braid-to-mapping-class clause.

No cross-batch review row changed: `def-axiom-of-choice` is published and out of run, so
`frontier-dependency-ledger.mjs` derives no new edge. Levels are unchanged because the
new dependency is out of run; `item-dependency-levels.mjs` recomputes every batch-8 item
without error.

### Checks run in this pass

| check | command | result |
|---|---|---|
| readiness records | `node tools/step1-decisions.mjs check --run frontier-40-geometry-braids-rep-27` | 480 items, 378 ready; **0 work rows for batch 8** — all 34 records current and hash-bound |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` | batch 8: 0 errors; whole run red only with 24 empty-inventory errors in still-unscaffolded batches 6, 9-11, 16-20, 23, 24, 26 |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run ... --require-reviewed` | batch 8: 8/8 owned edges reviewed, 0 orphaned reviews; whole run still red for the unreviewed batches and their edges; the outgoing edge owned by batch 9 (`rouquier-complexes-and-categorical-braid-relations` requires this A page) is batch 9's review duty |
| manifest dependencies | `node tools/manifest-deps.mjs research/...-batch-8.pages.json` | 34 items, 0 error(s) |
| scaffold policy | `node tools/content-policy.mjs --manifest-only research/...-batch-*.pages.json` | 480 scoped items, 0 error(s), 0 warning(s) |
| coverage | `node tools/coverage-checklist.mjs research/...-batch-8.coverage.json --require-destination` | 2 pages, 57 harvested results, 0 error(s), 0 warning(s) |
| full-text fetch stamps | `node tools/source-fetch-check.mjs --coverage research/...-batch-8.coverage.json --stamp` | 7/7 fetch-verified, 7/7 resolved |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; declared order acyclic and consistent |
| manifest integrity | `node tools/manifest-integrity.mjs --run ...` | 54 pages owed, 54 present; no scope drift |
| external references | `node tools/extcheck.mjs --quiet` | OK |
| drift review | `node tools/drift-review-check.mjs --run ...` | 27 pages reviewed, no blocked edges |
| URL sweep (existing run artifact) | `research/...-url-liveness.json` | 70/71 live; the single 404 is outside batch 8 and non-blocking; all four batch-8 URLs live |

### Remaining findings, recorded not repaired (outside batch 8)

* Whole-run gates still red only outside batch 8: unreviewed sibling batches and their
  cross-batch edges; empty scaffold inventories in batches 6, 9-11, 16-20, 23, 24, 26.
* No batch-8 escalation. Every batch-8 item has a complete proof strategy with an
  explicit route, met published or in-run scaffolded prerequisites, declared axiom
  strength and current readiness record. Owner reconciliation and the full engine gate
  follow construction; Step 3 remains the independent mathematical review.
