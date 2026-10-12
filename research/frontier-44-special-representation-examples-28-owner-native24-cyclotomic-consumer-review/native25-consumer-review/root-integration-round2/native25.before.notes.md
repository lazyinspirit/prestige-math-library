# Batch 25 - Ariki Categorification and Graded Decomposition Numbers: scaffold notes

Run `frontier-44-special-representation-examples-28`, pair
`ariki-categorification-and-graded-decomposition-numbers` (order 1842) /
`ariki-categorification-and-graded-decomposition-numbers-examples` (order
1843), `special-topics-in-representation-theory`. The scaffold is the SYMR-12
pair of the symmetric-group track: the nondegenerate level-one Ariki
categorification transported across the Hecke--KLR bridge, with the graded
decomposition numbers and the positive-characteristic adjustment boundary.

**Status.** Manifest populated: 22 A-page items and 2 B-page items (24 total),
all with the exact `dependency_level` labels recomputed over the whole run
(840 items; batch levels 0, 22, and 28-40). All 24 items carry a fresh `ready`
record; `step1-decisions check` reports 840 items with 839 ready, the only
open row being the batch-24 owner-held escalation
`lem-cyclotomic-schur-weight-gram-determinants-are-products-of-monic-semistandard-norms`
(a source-author metadata typo held by the owner, not this batch). Coverage,
cross-batch input, source stamps and the unified ledger are current. This is
scaffold readiness, not mathematical approval.

## 1. Binding owner direction and controlling design

`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
was read as binding. The sections that name this pair:

- **Final level-one Fock and modular interface direction (2026-10-08).**
  Future 11/24/25 must use the full exact parameter/form/basis interfaces of
  batches 9/23. This batch consumes exactly those: the symmetric model
  `def-symmetric-group-level-one-residue-and-partition-label-convention`, the
  transition polynomials
  `def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention`
  with their dominance/core unitriangularity and the recorded `e=2` data, the
  restricted basic crystal, and the batch-8 lower/upper global-basis and
  duality interfaces. No premise is re-derived locally and no convention is
  bridged silently.
- **Future cyclotomic first/right convention (2026-10-09).** The side
  convention is consumed from batch 24 and the batch-11 based-quotient lemma
  exactly as scaffolded: first-strand cyclotomic relation, right-append
  induction, and the raw projective-extension map `pi_Lambda composed with the
  multiplication-reversing star` with the FIRST/RIGHT label cancellation.
  This scaffold states the transport at the level of the reviewed batch-11
  theorems (`thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis`,
  `thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis`,
  `thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda`) and
  does not re-derive or replace them. Genuine cyclotomic categorification,
  integrability, highest-weight identification and pairings remain the
  suppliers' obligations as the direction requires.
- **Final KLR algebraic interfaces (2026-10-09).** Only the reviewed algebraic
  interfaces of batch 10 (`def-klr-grading-and-diagrammatic-composition`,
  `def-klr-induction-and-restriction-bimodules`) and the algebraic
  KLR/Fock/crystal interfaces of batches 9/10/11/23/24 are consumed. The
  geometric global theorem is not used here: it only enters through the
  batch-11 items that own it.
- **Batch18 note.** The original supplier reviewer still owns the actual
  future 11/24/25 consumer checks and focused repairs. The readiness records
  written here are scaffold evidence, not that review.

**Which design controls.** The dispatch lists two design mentions, neither a
heading: `research/plan-quantum-groups-track.md` L479 (the future-consumer
sentence naming SYMR-12 as a consumer of QG-6 and QG-8) and
`research/plan-symmetric-group-representations-track.md` L47 (the SYMR-12 table
row "QG-8 categorification transported to Hecke decomposition numbers").
The controlling design is `research/symmetric-group-planning/proposed-inventory.md`
**"SYMR-12 - Ariki categorification and graded decomposition numbers"**
(section beginning at line 341; A inventory line 351, B inventory line 368),
because it is the only document stating this pair's claims, conventions and
proof route. The two plan mentions only fix the pair's identity, category and
consumer position. `research/plan-spec.json` carries the pair with empty
`items` arrays and the same five `requires` as the dispatch, so there is no
scope conflict.

## 2. Plan / design conflicts recorded

1. **Plan-spec vs design inventory.** The plan-spec pages are empty shells;
   the design proposes 12 A items and 2 B items. The manifest contains all 14
   design items and adds exactly 10 necessary local items:
   `lem-graded-algebra-isomorphism-transports-the-graded-module-category`,
   `def-tableau-domination-order-garnir-tableaux-and-bricks`,
   `lem-degree-and-codegree-of-standard-tableaux`,
   `prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux`,
   `thm-graded-specht-module-has-homogeneous-tableau-basis`,
   `thm-graded-specht-heads-classify-the-graded-simple-modules`,
   `lem-standard-fock-vectors-expand-in-the-upper-global-basis`,
   `cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group`,
   `def-integral-form-of-the-cyclotomic-hecke-klr-block`,
   `lem-reduction-of-characteristic-zero-simple-modules-modulo-p`.
   No design item was removed, weakened, or replaced.
2. **Design dependency lists corrected and extended.** The design's dep lists
   were the pre-scaffold sketch; the manifest declares the actual closures,
   e.g. the two-tower definition now also deps the affine/cyclotomic Hecke
   algebra, the residue idempotents and the type-A KLR specialization; the
   transport proposition also deps the transport lemma and the type-A
   specialization; the graded Specht definition also deps the cellular-basis
   theorem and duality items; the ariki theorem deps the Fock transition and
   expansion items; the heads item deps the cellular head/triangularity and
   the ariki/decomposition items. Each added edge was read at statement level
   and is listed in the cross-batch input or is same-batch.
3. **Ordering repair (recorded).** The first draft placed the head
   classification before the Ariki and decomposition-number theorems while
   the head item cited them, a genuine forward citation and dependency cycle
   (ariki's strategy in turn cited the head item for its label dictionary).
   The final order follows Brundan--Kleshchev's own development: Specht
   classes = Fock standard vectors (their Theorem 5.6), the restricted class
   basis (5.7), the canonical-basis transport (5.1/5.3/5.14), the graded
   decomposition numbers (5.14/5.15), then the cellular head classification
   (5.10) with the (C0) label identification (5.13), and only then the
   integral forms and adjustment theory (5.16--5.18). The Ariki item no longer
   cites the head item at all; the head item owns the crystal-vs-cellular
   label comparison, and its (CP) analogue (BK Theorem 5.18) is explicitly
   not asserted on this page (see SS5).
4. **Design cites internal research reports ("Agent 6 S1/S2", "Agent 5"); the
   manifest cites primary sources with exact locators** (Brundan--Kleshchev
   2009, Brundan--Kleshchev--Wang 2009, Hu--Mathas 2010, Kleshchev's survey,
   Mathas' manuscript, Brundan--Kleshchev 2008, Ariki 1996), as the coverage
   file records heading by heading.
5. **The design's phrase "Ariki's normalization xi = q^2" is a source
   dictionary, not a substitution.** Ariki's source Hecke parameters are
   powers of a fixed square; the library's Hecke parameter `xi` and the
   grading variable `q` are INDEPENDENT data. The regime item records this
   explicitly and no item imposes a numerical relation between them.
6. **The design's adjustment row's degenerate comparison is deferred.** The
   source's remark that the graded adjustment matrix specializes to James's
   matrix at level one, `xi=1`, `q=1` concerns the degenerate parameter
   `xi=1`, outside this page's nondegenerate branch; the coverage file records
   it as deferred to the Dipper--James background on the batch-20 page and no
   item consumes it.

## 3. Item interface decisions (what the manifest actually claims)

- **Two Grothendieck towers, never identified.** `K_0^gr` (graded projectives)
  and `G_0^gr` (finite-dimensional graded modules) are restricted direct sums
  over blocks; the shift action is by `q`, the Cartan homomorphism `c` and the
  forgetful `zeta` are A-linear; the Hecke side is the transported tower.
- **The grading variable and the Hecke parameter are independent.** All
  polynomial statements are in `q` with `A = Z[q,q^-1]`; no item identifies
  `xi` with a power of `q`. Sub-branches: (C0) characteristic zero, (CP)
  characteristic `p > 0` with `p` not dividing `e` and `xi` a primitive
  `e`-th root.
- **The graded Specht module is the DJM cell module dual to the older DJ
  Specht module** (the BKW convention), with the standard basis `z_T`, the
  homogeneous vectors `v_T = psi_{w_T} z_mu`, the degree recursion (4.33) and
  the explicit dictionary to `def-type-a-hecke-specht-module-and-cell-form`
  recorded in the definition. Head labels are restricted partitions; the
  crystal labels of the transport proposition are matched to the cellular
  labels only in the head item's clause (3), in branch (C0).
- **Ariki's characteristic-zero theorem is the transported QG-8 statement**
  (projective classes = lower global basis, simple classes = upper global
  basis, labels = the crystal `B(Lambda_0) = RP`), with the `q=1`
  specialization recorded as Ariki's original ungraded statement. It is NOT
  proved through the original geometric representation theory; the coverage
  record carries the source and the independent treatments.
- **Graded decomposition numbers** `[S(mu):D(lambda)]_q = d_{lambda,mu}(q)` in
  branch (C0), with dominance support; the `q=1` specialization is Ariki's
  ungraded theorem. The positive-characteristic factorization
  `[S(mu):D(lambda)]_q = sum_nu a_{lambda,nu}(q) d_{nu,mu}(q)` is stated
  without any identity-adjustment claim, and the adjustment entries are
  defined by reducing characteristic-zero simple lattices modulo `p`.
- **Integral form and reduction.** The `Z`-form is the span of the
  Khovanov--Lauda normal forms; its base change to characteristic `p` is
  proved by dimension comparison, and the lattice reduction of simples is
  stated with its `q`-character and class well-definedness. This is the only
  place where the positive-characteristic construction is used.
- **A label/dictionary subtlety was repaired in drafting.** The source's
  weak-Bruhat relations `r ->_T r+1` and `r down_T r+1`, the transposition
  form of Lemma 3.4, the `(a,b,n)`-Garnir belt and tableau, terminal tableaux
  and bricks were re-checked against the cached [BKW] text and the earlier
  free formulations replaced by the source's. The degree/codegree part (i)
  now reads "first row of the first component" ([BKW, Lemma 3.15(i)]).
  Headings and locators for every source are in the coverage file.

## 4. Source evidence and reading honesty

`source-fetch-check --stamp` -> **10/10 source instances fetch-verified**;
check mode -> **10/10 resolved, 0 drops**. Stamped hashes (16 hex) and page
counts, all equal to the cached bytes that were read:

| source | sha256_16 | pages/bytes |
|---|---|---|
| Brundan--Kleshchev 2009, arXiv:0901.4450v3 | `62e4dddfab3caf89` | 57 pp. |
| Brundan--Kleshchev--Wang 2009, arXiv:0901.0218v3 | `dc74dd93bd954f8f` | 23 pp. |
| Hu--Mathas 2010, arXiv:1008.1462v1 | `f29a8e1040db2fb8` | 19 pp. |
| Kleshchev survey, arXiv:0909.4844v1 | `8685199608967fa7` | 66 pp. |
| Mathas manuscript, author-hosted PDF | `8cfeb611a95a3ff2` | 79 pp. |
| Brundan--Kleshchev 2008, arXiv:0808.2032v4 | `c9a24757f7f3d1e1` | 32 pp. |
| Ariki 1996 through the `r.jina.ai` text extraction | text | 48,807 chars |

**Ariki 1996: exact status of the source.** The canonical Project Euclid PDF
URL bot-walls this client: both a plain and a browser-like user agent receive
HTTP 200 with a 6,183-byte Incapsula "Pardon Our Interruption" HTML page and
no PDF bytes (recorded in the coverage source's `recovery_attempts`). The
complete correct article (J. Math. Kyoto Univ. 36 (1996) 789--808, Theorem 4.4
at pp. 806--807) was read through the `r.jina.ai` text extraction of that same
canonical PDF, and the stamped source URL is that extraction; the canonical
locator (DOI `10.1215/kjm/1250518452`) is recorded inside the source title. A
reader with institutional access reaches the canonical PDF normally; no drop
and no `source_resolution` record is needed, because the full text was
retrieved and inspected (the extraction's own metadata title line is
unreliable and names a different article, but the body, running heads, page
numbers and Theorem 4.4 are the correct Ariki paper). Ariki is used for the
parameter dictionary and the ungraded endpoint only; both are independently
restated in Brundan--Kleshchev 2009 (Theorems 5.1, 5.3, 5.9) and Kleshchev's
survey (Theorems 9.8--9.9), which are the two independent treatments carrying
the mathematics here.

**Reading honesty.** The scaffold's locators record the ranges actually read
by this worker's predecessor dispatch and re-verified now; the cached full
texts under `scratchpad/source-cache/symmetric-groups/klr-fock-articles/`
were re-hashed and match the stamps. The BKW degree, Garnir and branch
statements were re-read in the cached text during this dispatch, and the
tableau-item and B-page repairs above are consequences. No result of Ariki's
geometric proof is consumed; the coverage disposes the source's Sections 2--4
architecture and its geometric Proposition 4.3 accordingly (`out-of-scope`
with a written reason), while Theorem 4.4 and Section 1 are `included`.

**Honesty flags.**

- The (CP) analogue of the head/crystal label identification ([BK 2009,
  Theorem 5.18]) is deliberately NOT asserted; the coverage marks it
  out-of-scope with the exact reason. Nothing in this batch consumes it.
- The two batch-24 deferred obligations that concern this pair are inherited,
  not discharged here: the `e = 0` branch (destination `owner-decision`) and
  the tower-compatibility diagram (deferred to this pair by batch 24) are not
  needed by any batch-25 item; if a later page needs the tower compatibility,
  it must be scaffolded there.
- Batches 9 and 20 deferred "decomposition numbers of v-Schur algebras" and
  related refinement rows to "the planned Ariki categorification page". This
  pair is the Hecke/KLR Ariki pair of the SYMR track and does NOT build
  v-Schur decomposition numbers; the deferrals therefore do not land here as
  built items. Recorded for owner reconciliation rather than silently
  absorbed.
- No item claims independent mathematical acceptance; supplier proofs are
  owed to Steps 3--5.

## 5. Published defects and open obligations

No defect was confirmed in any consumed published item. The published
interfaces read at statement level are `def-young-tableau-standard-tableau-and-shape`,
`def-dominance-order-on-partitions`, `def-removable-and-addable-nodes-of-a-partition`,
`def-partition-young-diagram-and-conjugate-partition`,
`prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`,
`thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra`,
`cor-cellular-decomposition-matrices-are-dominance-unitriangular`,
`def-cellular-algebra-basis-and-cell-module`, `def-e-regular-and-e-restricted-partitions`,
`thm-projective-hom-pairing-is-additive-and-graded-sesquilinear`,
`thm-graded-projective-and-simple-classes-have-shift-orbit-bases`,
`thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular`,
`cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular` and the two
unsolved-decomposition remarks; their statements matched their uses. The
in-run supplier statements read are those of batches 5, 8, 9, 10, 11, 20, 23
and 24 that appear in the 107 cross-batch rows.

Open obligations, recorded and not silently discharged:

1. **Supplier-reviewer consumer checks (binding owner direction).** The
   original batch-10/11/24 suppliers' reviewer owns the actual future 11/24/25
   consumer-use checks and focused repairs; these readiness records are not
   that review. If a supplier interface changes, this batch's consumers must
   be re-checked by that reviewer.
2. **Run-level pre-existing defect, not this batch's.** `validate-plan`
   reports 26 `[intra-order]` errors on the batch-11 page
   `cyclotomic-klr-algebras-and-highest-weight-categorification` (items whose
   deps appear later on that page, including suppliers consumed here such as
   `thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis`
   and `thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda`).
   That page is owned by batch 11 and its repair is bound by the owner
   direction's 11 -> 24 -> 25 progression. This batch does not edit it; it is
   recorded so the dependency is not mistaken for current order-clean input.
3. **One open run row (not this batch).** `step1-decisions check` shows 839/840
   ready; the open row is the batch-24 owner-held escalation
   `lem-cyclotomic-schur-weight-gram-determinants-are-products-of-monic-semistandard-norms`
   (source-author metadata typo pending owner reconciliation). All 24 batch-25
   items are closed.
4. **Recorded boundary: (CP) identification.** [BK 2009, Theorem 5.18] is
   available in the source but not scaffolded; a future page that needs the
   positive-characteristic identification of head and crystal labels must
   supply the lattice-reduction and adjustment inputs again.
5. **Recorded boundary: v-Schur deferrals.** The batch-9/20 deferrals naming
   "the planned Ariki categorification page" concern v-Schur algebra
   decomposition numbers; this pair does not build them (see SS4).
6. **No `Recorded` result is consumed to prove its replacement**, and no
   published carrier was edited.

## 6. Checks run (exact results)

| check | command | result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs research/frontier-44-...-batch-*.pages.json` | 840 items, 0 normalized, **0 errors** |
| manifest policy | `node tools/content-policy.mjs --manifest-only research/frontier-44-...-batch-*.pages.json` | 840 scoped items, **0 errors, 0 warnings** |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28` | **840 items across 98 pages, maximum level 44, exit 0**; batch-25 labels 0/22/28-40; no label mismatch anywhere in the run |
| coverage | `node tools/coverage-checklist.mjs research/...-batch-25.coverage.json --require-destination` | 2 pages, 73 harvested results, **0 errors, 0 warnings** |
| source fetch (stamp) | `node tools/source-fetch-check.mjs --coverage research/...-batch-25.coverage.json --stamp` | **10/10 fetch-verified** (10 newly stamped) |
| source fetch (check) | `node tools/source-fetch-check.mjs --coverage research/...-batch-25.coverage.json` | **10/10 resolved**, 0 documented drops |
| plan | `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28` | **no error in this batch**; run-level FAIL from the 26 pre-existing batch-11 `[intra-order]` rows; 899 warnings, of which 7 are this A page's `redundant-prereq` advisories on the plan's own `requires` list (shared plan, not edited) |
| scope | `node tools/manifest-integrity.mjs --run frontier-44-special-representation-examples-28` | **98 pages owed, 98 in manifests, no scope drift** |
| readiness | `node tools/step1-decisions.mjs check --run frontier-44-special-representation-examples-28` | **840 items, 839 ready**; all 24 batch-25 items closed; the single open row is the batch-24 owner escalation (owned there) |
| ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28` | refreshed; batch 25 in `reviewed_batches`, `unreviewed_batches` empty, all **107 batch-25 edges reviewed**, no orphaned batch-25 rows (pre-existing orphans unchanged: 3 batch-11, 7 batch-23, 31 batch-24, 18 batch-9) |
| url liveness | `node tools/url-sweep.mjs --coverage research/...-batch-25.coverage.json --out /tmp/b25/url-liveness.json` | **9/9 URLs live, 0 failed, 0 suspect**; 0 documented source drops |
| source backing | `node tools/source-backing.mjs --coverage research/...-batch-25.coverage.json --liveness /tmp/b25/url-liveness.json` | **20 authored result(s) across 1 file(s), every one backed**; exit 0 |
| depcheck | `node tools/depcheck.mjs --items-file /tmp/b25/items.json` | **FAIL, exit 1: 24/24 `focus-item-unknown`** (Step-1 item files are deliberately absent; the engine runs item-mode checks after authoring) |
| fwdcheck | `node tools/fwdcheck.mjs --items-file /tmp/b25/items.json` | **FAIL, exit 1: 24/24 `focus-item-unknown`**; same boundary |
| extcheck | `node tools/extcheck.mjs --items-file /tmp/b25/items.json` | **FAIL, exit 1: 24/24 `focus-item-unknown`**; same boundary |

No published carrier was edited. No `Recorded` result is consumed to prove its
replacement. AC is declared exactly where inherited through the cited
transported suppliers; all finite combinatorial and algebraic items are
choice-free. Owner/operator reconciliation, the Step-3 authoring review and
the full engine gate still follow; a readiness record is not independent
mathematical approval.

Files written by this batch: the four
`research/frontier-44-special-representation-examples-28-batch-25.*` artifacts
(manifest, coverage, cross-batch input, these notes), the 24
`research/frontier-44-special-representation-examples-28-step1-<item>.json`
readiness records, the appended
`frontier-44-special-representation-examples-28-batch-25-step1` block in
`briefs/tasks/frontier-dependency-ledger.md`, and the derived unified ledger
`research/frontier-44-special-representation-examples-28-cross-batch-dependencies.json`
as regenerated by its sanctioned writer (`frontier-dependency-ledger.mjs
refresh`). No item file, library page, shared plan, engine state or verdict
was modified.
