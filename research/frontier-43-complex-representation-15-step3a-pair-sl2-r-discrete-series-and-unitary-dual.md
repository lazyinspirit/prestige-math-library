# Step 3a scope review: pair `sl2-r-discrete-series-and-unitary-dual`

- Run `frontier-43-complex-representation-15`, stage `3a-scope`, dispatch label
  `step3a-pair-sl2-r-discrete-series-and-unitary-dual-90fb78f6907f4e4b`
  (two further task files for this pair with different hashes exist and are
  byte-identical to this one; no separate artifact is owed for them).
- Role alpha, scope reviewer only. No item approval, no owner record, no edit
  to any scaffold, manifest, coverage, plan, item, library or engine file.
- A page `sl2-r-discrete-series-and-unitary-dual` (batch 5, order 1240; 19
  items: 4 definitions, 7 lemmas, 7 theorems, 1 corollary; item dependency
  levels 1..15, maximum level 15 on the page).
- B page `sl2-r-discrete-series-and-unitary-dual-examples` (order 1241; 5
  items: 4 examples, 1 counterexample; levels 11..14).
- Companion pointers agree A<->B; the B page requires only its own A page.
  Both pages are the whole of batch 5 (`...-batch-5.pages.json`), so no other
  pair shares a batch file with this one.
- Decision: **`sufficient`**, recorded through
  `node tools/step3-decisions.mjs record-scope --run
  frontier-43-complex-representation-15 --page
  sl2-r-discrete-series-and-unitary-dual --decision sufficient` with the
  scope evidence and this report's path in the reason. A current `sufficient`
  review closes the pair's Step-3a scope for authoring; the owner may still
  supersede it with `merge`/`enrich` (a merger or enrichment stays blocked
  until applied and the owner records `proceed` for the resulting scope).
- Date 2026-10-07. Scope only: no proof-correctness judgement, no source
  re-reading claim beyond the checks listed in section 6, no scaffold edit.

## 1. Intended subject and role in the library

Controlling prose design: the RG-30 block of
`research/plan-representation-theory-groups-track.md`:
index row L63 ("lowest/highest weights, limits, classification and tempered
boundary"), A-page table L2086-L2107, hard proof plan L2108-L2111, B-page
table L2114-L2120, harvest crosswalk RG-30/H1-H5 L2560-L2564, source rows
L2339-L2351, `SL_2(R)` parameter convention L2259, and the binding
page-requirements row L2786. The registry `research/plan-spec.json` rows 1240
and 1241 carry the same ids, kinds, companions and `requires` lists as the
manifest (the plan-spec item inventories for these pages are empty; the
manifest is the item contract, as for every run page).

Intended subject: the representation theory of the one concrete noncompact
group `G = SL_2(R)`. The pair defines smooth/K-finite vectors and the
`(g,K)`-module with the run's fixed Casimir normalization; establishes the
algebraic core (density/stability of `V`, extremal submodules at exceptional
principal-series parameters); builds the holomorphic and antiholomorphic
discrete-series models and proves the weighted space is a Hilbert space with
multiplicity-one K-type chains and an invariant form; defines and analyses the
two limits of discrete series inside the reducible `I_{1,0}`; calibrates the
native Haar integral through the KAK formula; computes the exact extremal
matrix coefficients and their decay; proves square integrability of the
discrete-series coefficients (and the failure at the endpoint); defines
temperedness and determines the tempered boundary; proves Fell continuity of
the principal-series parameter; proves the local GCR/type-I consequence and
classifies the irreducible unitary dual; records the Plancherel inversion
identity with its native constant, formal degrees, carrier-versus-support
distinction and no endpoint atom; and reads off the non-discreteness and
non-Hausdorffness of the dual at the stated limits. The B page supplies four
concrete computations and one counterexample supporting the A-page claims.

Intended role: RG-30 is the terminal page of the representation-theory groups
track (RG-1 through RG-30; the page's own row is the last in the track table).
In this run it has no in-run consumer: the aggregate frontier dependency
ledger (`research/frontier-43-complex-representation-15-cross-batch-dependencies.json`)
contains 60 edges whose consumer is a batch-5 item (50 into batch 3, 10 into
batch 1) and no edge whose supplier is a batch-5 item. The three published
prerequisites (`group-c-star-algebras-and-the-fell-unitary-dual` on
`library/representation-theory/`, `harish-chandra-isomorphism-casimir-and-central-characters`
and `verma-modules-and-shapovalov-forms` on `library/lie-theory/`) exist, and
the two remaining page prerequisites (`sl2-r-principal-and-complementary-series`,
order 1236 in batch 3; `direct-integral-decomposition-and-type-i-groups`,
order 1232 in batch 1) are scaffolded in this run below order 1240. The
pair's reading order and dependencies are therefore backward only.

The Step-1 drift verdict for this page recorded in
`research/frontier-43-complex-representation-15-alpha-step1-drift.md`
(section `sl2-r-discrete-series-and-unitary-dual`) is **no-drift**, with the
design's `RL-n` placeholder resolved to published highest-weight/Verma and
Harish-Chandra items rather than a missing supplier.

## 2. Design-to-manifest mapping

All 19 designed A ids and all 5 designed B ids are present. The manifest id
set equals the current RG-30 design table up to one id spelling: the design
row `lem-the-weighted-discrete-series-space-is-a-hilbert-space-with-k-type-basis`
is carried as `lem-the-weighted-discrete-series-space-is-a-hilbert-space`
(kind `lemma`); its title and statement(1)-(3) still assert completeness,
point-evaluation bounds and the multiplicity-one K-type basis, so no designed
claim is dropped. Item counts by kind match the design table (A: 4
definitions, 7 lemmas, 7 theorems, 1 corollary; B: 4 examples, 1
counterexample).

The five items the batch notes listed as local additions
(`lem-the-weighted-discrete-series-space-is-a-hilbert-space`,
`lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r`,
`lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series`,
`thm-the-limits-of-discrete-series-are-not-square-integrable`,
`lem-fell-continuity-in-the-parameter-of-the-unitary-principal-series`) are
themselves design rows in the current L2086-L2107 table, so the manifest
matches the current controlling design 1:1. The batch-5 notes' phrase "all 14
design A items" is stale relative to the current extended table; the
manifest, not the notes, is bound here (24/24 present).

Documented resequencings, all claim-preserving:

1. The design row
   `thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series`
   promises "unitary and irreducible but not square-integrable". The manifest
   keeps unitarity, irreducibility, K-types and the orthogonal splitting in
   that item and states the divergent extreme coefficient in
   `thm-the-limits-of-discrete-series-are-not-square-integrable` under the
   all-matrix-coefficients definition (Hochs Definition 1.3; Frahm's
   discrete-series slide). The stronger no-Plancherel-atom statement is not
   dropped: it is stated in `thm-plancherel-support-for-sl2-r` ("which carry
   no atom"). The promised content is preserved across the page.
2. The design's corollary row is graded by the source's parameter convergence
   and exceptional splittings; the scaffolded corollary records exactly (1)
   the two distinct Fell limits of `I_{1,1\nu}` with the two limit classes,
   (2) the spherical principal family converging to `I_{0,0}`, and (3) the
   complementary-to-trivial convergence proved in batch 3. No Plancherel
   statement is made in the corollary.
3. The design's classification row was rewritten in the owner integration to
   "classify all irreducibles, exclude reducible `I_{1,0}` from the principal
   list, and prove the local GCR/type-I consequence ... without
   admissibility/globalization citations"; the manifest statement realises
   exactly the five families (i)-(v) plus the `K(H_\pi) \subseteq \pi(C^*(G))`,
   GCR/type-I and standard-Borel clauses. `I_{1,0}` is not treated as a dual
   point and its two irreducible summands are listed separately.

Hard-proof-plan coverage. Every structural element of the L2108-L2111 plan is
carried by a manifest item: the local K-character-corner/GCR route and the
direct ladder classification
(`thm-classification-of-the-irreducible-unitary-dual-of-sl2-r`), the Casimir
scalar `(\nu^2-1)/8` and the ladder scalar `(q-1)/8`
(`def-k-finite-and-smooth-vectors-for-sl2-r`,
`lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points`,
`thm-irreducibility-and-k-types-of-the-discrete-series`), the `I_{1,0}`
reducibility and the two limit classes
(`def-limits-of-discrete-series-for-sl2-r`,
`thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series`), the
Harish-Chandra citation boundary plus local Haar conversion, native degrees
`(n-1)/(4\pi)` and densities
(`thm-plancherel-support-for-sl2-r`, with `proof_scope`), the transform
range/carrier-versus-Fell-support distinction (same item), and the spherical
positive-kernel exclusion without zero-mass inference
(`thm-plancherel-support-for-sl2-r` and
`thm-tempered-status-of-the-sl2-r-unitary-series`).

## 3. Source coverage

`research/frontier-43-complex-representation-15-batch-5.coverage.json` records
5 sources and 35 harvested results for the A page (Kerr 10 rows, Kowalski 12,
Etingof 5, Hochs 4, Frahm 4) and 2 sources and 5 rows for the B page (Kerr 2,
Kowalski 3), 40 rows total. All 7 source objects carry Step-1
`fetch_verified` stamps with bytes, sha256-16 and page counts
(`source-fetch-check --stamp`, 7/7), and the Step-1 `url-sweep` on this
coverage file reported 5/5 live, 0 failed, 0 suspect. The design's source
backing list (L2339-L2351 and the RG-30 header) is exactly Kerr, Kowalski,
Etingof, Hochs, Frahm plus the citation-only Harish-Chandra item, and the
coverage matches it. Dispositions map every harvested heading to an item id,
an already-published item, a named destination page, or a written reason
(for example Kowalski 7.4.4 and the intertwiner/recurrence rows are deferred
to batch 3, and 7.4.23's coefficient decay is recorded as an owner-decision
input of the held tempered branch).

Harish-Chandra, PNAS 38(4) (1952) 337-342, is present as a citation-only
source: the manifest source entry carries the DOI URL with the locator
"original full text unread; exact cited fact only", the item
`thm-plancherel-support-for-sl2-r` carries an explicit `proof_scope` naming
the single cited fact (original `C_c^\infty` trace-inversion identity,
source Haar normalization, principal density, discrete degrees) and the local
obligations that remain local, and the authority is recorded in
`research/frontier-43-complex-representation-15-conditional-glimm-citation-authorization.json`
as `third_accepted_cited_fact`. The coverage file correctly does not harvest
it. Lang's book, cited in the design, is explicitly not counted as a read
proof source (L2350), and the coverage matches that.

## 4. Prerequisite examination (unmet-prerequisite check)

I enumerated every dependency declared by the 24 pair items (A and B
together): 101 distinct dependency ids, of which 63 resolve to published
item files under `items/` and 38 resolve to items of the current frontier
(17 same-page batch-5 items, 12 batch-3 items on
`sl2-r-principal-and-complementary-series`, 9 batch-1 items on
`direct-integral-decomposition-and-type-i-groups`). Zero dependency ids are
absent from both the published library and the current scaffold, so no
confirmed unmet prerequisite exists for this pair.

Cross-page hypotheses were spot-checked against the current sibling
manifests, not just their titles:

- All 12 batch-3 supplier items used here exist with the expected content:
  Iwasawa/minimal-parabolic data and the Iwasawa Haar formula, the normalized
  principal series, the compact picture, the K-type decomposition, the
  raising/lowering ladder, K-finite detection, the exceptional-parameter
  lattice and composition series, unitarity of the unitary principal series
  (including the `\nu=0` splitting `I_{1,0} \cong M^-_1 \oplus M^+_{-1}`),
  unitarity of the complementary series in its corrected finite-rescaled
  endpoint form, the `I_{\varepsilon,\nu} \cong I_{\varepsilon,-\nu}`
  equivalence, and the family convergence of the spherical complementary
  series to the trivial class as `\nu \uparrow 1`.
- The corrected batch-3 statements remain scope-compatible with the batch-5
  consumers as written: the corollary clause (3) quotes the sequence/family
  Fell convergence, `ex-parameter-identifications...` records `\nu=\pm1` as
  degenerate endpoints with the trivial representation as a subquotient
  (quotient at `+1`, submodule at `-1`), and `def-limits...` uses the
  `\nu=0` direct-sum splitting.
- All 9 batch-1 supplier items used here exist: the direct-integral and
  factor-representation definitions, the irreducible type-I disintegration,
  essential uniqueness, the central decomposition into factor
  representations, the GCR-kernel/Mackey-Borel characterizations, the type-I
  definitions, second-countability separability, and the double commutant
  theorem. They are consumed only by the Plancherel item (5 edges) and the
  classification item (4 edges, all GCR/Borel/type-I interfaces).

Page-level prerequisites: the two in-run pages exist in the manifests below
order 1240 and the three published pages exist in `library/`; all five are in
the transitive closure recorded on the pair's page rows.

Dependency ledger: the derived aggregate ledger now carries 60 batch-5
consumer edges (50 to batch 3, 10 to batch 1) and no batch-5 supplier edges.
Every edge has a review row in
`research/frontier-43-complex-representation-15-batch-5.cross-batch-dependencies.json`,
including the two edges named in the final Step-1 gate failure
(`thm-tempered-status-of-the-sl2-r-unitary-series` to
`def-normalized-principal-series-i-epsilon-nu`, and the batch-10/batch-9 page
edge). `frontier-dependency-ledger refresh --require-reviewed` now exits 0
run-wide (section 6), so the Step-1 ledger blocker is resolved and no
unreviewed edge remains for this pair.

Step-1 readiness: `step1-decisions.mjs check` reports 371 items, 371 ready,
closed, work empty. The three items the scaffold escalated
(`thm-plancherel-support-for-sl2-r`,
`thm-tempered-status-of-the-sl2-r-unitary-series`,
`thm-classification-of-the-irreducible-unitary-dual-of-sl2-r`) carry current
owner-reviewed `ready` records whose reasons name the exact Harish-Chandra
citation boundary and the local GCR/classification route; none was silently
weakened.

## 5. Uncertainty and observations for the owner (not scope findings)

1. KAK constant. The design's KAK row says "with constant 2\pi"; the manifest
   item states existence of a constant `c_0>0` and the L^1/L^2 criterion
   without fixing the numeric value. No consumer needs the numeral: the two
   B-page integrals are written as multiples of `c_0`, and the calibration is
   delivered by the same-page Plancherel statement (`4\pi f(e)`, degrees
   `(n-1)/(4\pi)`) whose `proof_scope` names the local KAK conversion. This is
   a wording deviation to consider when the item is authored (stating
   `c_0 = 2\pi` explicitly would match the design literally); it is not a
   scope omission.
2. Tempered definition. The manifest's `def-tempered-unitary-representation`
   restricts to locally compact `\sigma`-compact groups, while the design
   phrase is unrestricted. `SL_2(R)` and every consumer here is
   `\sigma`-compact, and the Fell/dual machinery used is stated in that
   setting, so nothing on this page is short. Minor wording deviation only.
3. Id spelling. The one design/manifest id difference is the dropped
   `-with-k-type-basis` suffix (section 2). Title and statement retain the
   content; recorded so the owner can decide whether to align the id spelling.
4. Knapp at item level. Two items
   (`lem-k-finite-vectors-are-dense-and-stable-under-the-derived-action`,
   `lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r`) cite
   Knapp, *Lie Groups Beyond an Introduction*, 2nd ed. (author's PDF,
   `https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf`, HTTP 200
   checked 2026-10-07), but the page coverage file has no Knapp row and the
   design's RG-30 source list does not include it. This is not a
   coverage-checklist failure (the gate passes) and neither item's primary
   backing depends on it (Kerr/Kowalski rows cover both topics); flagged for
   Step-3b/5a either to harvest/verify Knapp or to drop the reference.
5. B-page harvest labels. The B-page Kowalski rows map Exercise 7.4.17 to
   `ex-a-square-integrable-discrete-series-matrix-coefficient` while the
   A-page rows map the same exercise to
   `ex-lowest-k-types-of-the-first-holomorphic-discrete-series`; the example's
   actual coefficient integral rests on Proposition 7.4.16(3), which is
   harvested for the counterexample row and whose printed range (pp. 305-309)
   includes the example's material. Label-level nuance only, for the Step-5a
   source reader.
6. Verification boundary. This review re-checked the design mapping,
   dependency resolution, coverage structure, ledger state and the shape of
   the classification list (Etingof Lecture 9, Theorem 9.3, fetched from OCW
   on 2026-10-07: discrete series and limit `M^\mp_m`, unitary principal
   series, complementary series `0<|s|<1`, trivial, with `P^-(0)` splitting
   into the two limits). I did not re-audit the proofs or the full source
   ranges; that is Step 5a/5b work, and no proof acceptance is implied here.

## 6. Checks run

- `node tools/coverage-checklist.mjs research/frontier-43-complex-representation-15-batch-5.coverage.json --require-destination`
  -> 2 pages, 40 harvested results, 0 errors, 0 warnings (exit 0).
- `node tools/manifest-integrity.mjs --run frontier-43-complex-representation-15`
  -> 30 pages owed, 30 in the manifests, no scope drift (exit 0).
- `node tools/manifest-deps.mjs research/frontier-43-complex-representation-15-batch-5.pages.json`
  -> 24 items, 0 normalized, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-43-complex-representation-15`
  -> 371 items across 30 pages, maximum level 28 (pass).
- `node tools/step1-decisions.mjs check --run frontier-43-complex-representation-15`
  -> 371 ready, closed, work empty.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-43-complex-representation-15 --require-reviewed`
  -> refreshed and deduplicated, exit 0 (all declared edges reviewed;
  60 consumer-batch-5 edges all carry review rows; 0 orphaned reviews).
- `node tools/frontier-item-gate.mjs --run frontier-43-complex-representation-15 --tool validate-plan`
  -> declared page order acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids (the run-wide
  `frontier-selection`/`redundant-prereq` notes on other pages are the known
  plan-spec artifact).
- Dependency resolution scan over all 24 pair items: 101 distinct dependency
  ids, 63 published + 38 in-run, 0 unresolved.
- Content checks read directly: current batch-5 manifest statements for all 24
  items; batch-3 and batch-1 statements for every cross-batch supplier;
  RG-30 design rows (plan L2078-L2120, L2560-L2564, L2786); owner direction
  `...-owner-authoring-direction.md` (batch 1/5 section and the exact
  Harish-Chandra citation boundary); citation authority JSON; Step-1 records
  for the 24 items.

## 7. Scope decision

**`sufficient`**: the planned definitions, results and examples adequately
cover the intended subject. All 19 A items and 5 B items of the design are
present with design-matching statements (one id-spelling variance; one
claim-preserving split), the pair's role as the terminal `SL_2(R)` capstone is
served by a complete classification/Plancherel/tempered/topology layer, the
source coverage matches the design's backing list with fetch-verified stamps
and the exact citation-only boundary for Harish-Chandra, and no dependency of
the pair is absent from the published library and current scaffold. No
omission was found that would justify enrichment or a pair merger, and no
unmet prerequisite was found to flag. Recorded via
`node tools/step3-decisions.mjs record-scope --run
frontier-43-complex-representation-15 --page
sl2-r-discrete-series-and-unitary-dual --decision sufficient` with the
evidence and this report's path in the reason. The owner must record
`proceed` only if the owner chooses to merge or enrich this scope; the current
`sufficient` review is itself the closure condition for authoring. Nothing in
this report is an item approval or owner decision.

## Appendix: inventory bound to this decision

A page `sl2-r-discrete-series-and-unitary-dual` (19 items):
`def-k-finite-and-smooth-vectors-for-sl2-r`,
`lem-k-finite-vectors-are-dense-and-stable-under-the-derived-action`,
`lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points`,
`def-holomorphic-and-antiholomorphic-discrete-series-models`,
`lem-the-weighted-discrete-series-space-is-a-hilbert-space`,
`lem-the-weighted-area-form-is-sl2-r-invariant`,
`thm-irreducibility-and-k-types-of-the-discrete-series`,
`def-limits-of-discrete-series-for-sl2-r`,
`lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r`,
`lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series`,
`thm-square-integrability-of-sl2-r-discrete-series-matrix-coefficients`,
`thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series`,
`thm-the-limits-of-discrete-series-are-not-square-integrable`,
`def-tempered-unitary-representation`,
`thm-tempered-status-of-the-sl2-r-unitary-series`,
`thm-plancherel-support-for-sl2-r`,
`thm-classification-of-the-irreducible-unitary-dual-of-sl2-r`,
`lem-fell-continuity-in-the-parameter-of-the-unitary-principal-series`,
`cor-the-unitary-dual-of-sl2-r-is-non-discrete-and-non-hausdorff-at-the-stated-limits`.

B page `sl2-r-discrete-series-and-unitary-dual-examples` (5 items):
`ex-lowest-k-types-of-the-first-holomorphic-discrete-series`,
`ex-weighted-norm-invariance-for-a-mobius-transformation`,
`ex-a-square-integrable-discrete-series-matrix-coefficient`,
`cex-a-limit-of-discrete-series-is-not-square-integrable`,
`ex-parameter-identifications-in-the-sl2-r-unitary-dual`.

The scope receipt stores the hash of the pair's current
id/kind/title/statement inventory; any later change to those inputs reopens
the scope decision and requires a fresh owner `proceed`.
