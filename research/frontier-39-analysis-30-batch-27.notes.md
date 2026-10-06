# Batch 27 Step 1 scaffold — Pontryagin Duality for Locally Compact Abelian Groups

Run `frontier-39-analysis-30`, role beta, label batch-27. Owned pair:
`pontryagin-duality-for-locally-compact-abelian-groups` (A, order 510.06505) /
`pontryagin-duality-for-locally-compact-abelian-groups-examples` (B, order 510.06506),
category `fourier-analysis`. Outputs: `research/frontier-39-analysis-30-batch-27.pages.json`
(20 A items + 3 B items; page cap 100 respected), `...-batch-27.coverage.json`, this note,
`...-batch-27.cross-batch-dependencies.json` (31 rows: 1 page edge + 30 item edges, all
`open` into batch-26), one `research/frontier-39-analysis-30-step1-<id>.json` readiness
record per item (23 records, currently all `ready`). The unified run ledger is awaiting
refresh after the scaffold writers drain. No published content,
item file, shared plan, engine state or verdict was edited. This record covers
construction only; it is not an independent mathematical review.

## Scope, plan and owner direction

- `research/frontier-39-analysis-30-owner-authoring-direction.md` does **not** exist
  (checked before construction); the binding texts are the dispatch, CLAUDE.md,
  SCHEMA.md, WORKFLOW.md, the design section and `research/plan-spec.json`.
- The design section is **FR-17** at `research/plan-fourier-analysis-track.md` L1275
  (`## FR-17. Pontryagin duality and full LCA Plancherel`); the L47 mention in the
  dispatch is only the id-table row, and the reconciliation-ledger row at L78 records
  `requires`: FR-15 A, FR-16 A, `uniform-spaces`, `subspaces-products-and-quotients`.
  The full section (L1275–L1317) was read: 16 numbered A rows, 3 B leaves, and the
  hard proof/boundary obligations quoted below.
- `research/plan-spec.json` pages 596/597 carry the same `order`, `title`, `companion`,
  `kind`, `category` and `requires` array as the dispatch and the manifest, with
  `items: []`. **No plan-vs-design conflict exists for this pair**; the design's
  16 A rows and 3 B leaves are all preserved verbatim, unweakened, under their design
  ids. The plan adds no item inventory to conflict with.
- All four `requires` pages were located on disk: `character-groups-and-elementary-lca-duals`
  (FR-15, `status: published`), `uniform-spaces` (published), `subspaces-products-and-quotients`
  (published), and `bochner-inversion-and-plancherel-on-lca-groups` (FR-16, in-run
  batch-26 scaffold; its 25 manifest items exist but no item files are authored yet,
  so every batch-27 edge into it is `open`).
- Hard obligations of the design, checked item by item: all groups are Hausdorff LCA
  abelian and no noncommutative claim is made; annihilator formulae use closed subgroups
  or insert closure (`lem-annihilator-reverses-inclusion-and-double-annihilator-closes`
  states $\overline H$); the bidual theorem cites FR-16 and does not cite RG-22
  Peter–Weyl, the full Plancherel theorem, or the later exactness rows; item 6
  (`thm-plancherel-theorem-for-lca-groups`) cites biduality.

## Recorded conflicts and design-vs-evidence notes

1. **Historical initial route divergence (superseded by the owner resolutions below).**
   This paragraph records the original Step-1 scaffold only; it does not describe the
   current manifest or readiness. Initially the design's route for item 3 was "Ko
   Theorem 13.3, with items 1–2 and FR-16 inversion". Item 2
   (`lem-positive-compactly-supported-transform-bump-on-the-dual`, Ko Lemma 13.2)
   had only a statement in Körner §§13–14 (full text read, 30 pp.; the section gives
   statements and exercises without proofs), and the locally available Loomis §37C
   substitute used the abstract Plancherel theorem of §26J/§36D, which this run then
   placed later on FR-17. The initial `thm-pontryagin-biduality` scaffold therefore
   recorded the Loomis §37D transform-algebra assembly (source read: printed
   pp. 151–152), and the bump item was owner-escalated. At that time no item consumed
   that escalated bump row. The current owner-approved order instead proves range
   density from the FR-16 isometry, derives full Plancherel, constructs the bump from
   inverse L² transforms, and proves biduality using that bump; see the owner-approved
   proof-order section below. The old residual-risk and resolution language above is
   historical and has been superseded.
2. **Item 4 direction (recorded).** The design table gives
   `lem-continuous-characters-separate-points-of-an-lca-group` rationale "Item 3"
   (a consequence of biduality). The manifest instead records a **direct Bochner-based
   proof** for this row so that it can be consumed *inside* the biduality proof
   (injectivity of $\Phi$) without a cycle. The row's declared deps are FR-16
   Bochner/inversion rows and measure-theoretic items, not biduality. No cycle, no
   forward edge; `item-dependency-levels` reports no batch-27 finding.
3. **Proof-provenance column deviations (recorded).** The design's proof-provenance
   column is `literature-derived` for rows 1, 2, 3, 8, 9, 11, 12, 13, 14, 15, while the
   manifest records `ai-altered` for rows 1, 2, 3, 8, 9, 12, 13, 14, 15 and
   `literature-derived` for row 11. Reason: for rows 1, 2 and 9 the source gives the
   statement (Ko Lemmas 13.1, 13.2, 14.3) but no usable proof at this position, and for
   rows 3, 8, 12–15 the recorded proof is an AI-authored adaptation of a route whose
   complete argument was not fully certified from the fetched text; row 11's proof is a
   direct citation of the published FR-15 item `lem-dual-homomorphisms-are-continuous-and-functorial`
   part (b), hence `literature-derived`. Statement provenance is `literature-derived`
   for all 16 design A rows. No claim was weakened or dropped by these tags.
4. **B3 statement provenance reconciled to `ai-generated`.** The design table lists B3
   (`cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality`)
   as `literature-derived`, but the three fetched sources do not state this assembled
   counterexample, and the manifest had carried `generation.role: counterexample`
   together with a `literature-derived` statement — the only such combination in the
   run and one SCHEMA rejects (`generation` is reserved for an `ai-generated`
   statement; run-wide sibling batches pair `generation` with `ai-generated`). This
   dispatch set `provenance.statement: ai-generated` (proof stays `ai-altered`), which
   is the honest label for a locally composed counterexample leaf; nothing in the run
   depends on the item, so the ai-generated restriction (not a legal `deps` target) is
   vacuous here. The readiness record was re-recorded.
5. **`cor-pontryagin-duality-is-a-contravariant-involution` AC/DC declaration added.**
   As first recorded, the corollary's statement carried no choice assumption while its
   proof consumes `thm-pontryagin-biduality` (AC+DC) and
   `lem-biduality-is-stable-under-products-closed-subgroups-and-quotients` (AC+DC) for
   the categorical conclusion ("$\Phi$ is a natural isomorphism … dualisation is a
   contravariant involution"). The statement now begins "Assume the Axiom of Choice and
   Dependent Choice."; the continuity, composition and naturality clauses alone remain
   direct computations. The record was re-recorded with the use identified. Every other
   ready A row already declares exactly the AC/DC it uses.
6. **Two B examples flagged for inherited choice cost (not edited).**
   `ex-annihilator-of-a-closed-subgroup-of-euclidean-space` and
   `ex-bidual-map-on-the-circle-and-the-integers` are recorded as choice-free direct
   computations, but their deps include AC/DC-assuming rows consulted for the general
   identifications (respectively `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator`,
   `thm-dual-of-a-closed-subgroup-is-the-dual-quotient`, `thm-pontryagin-biduality`).
   The concrete clauses *can* be verified directly on $\mathbb R^n$ and on
   $\mathbb Z/\mathbb T$, preserving the choice-free branch; Step 3 must either give
   those direct verifications (then the AC rows are context-only) or add an explicit
   inherited-AC header and re-record. Recorded rather than resolved because either
   resolution is sound and the choice-free branch must not be destroyed.
7. **Duplicated published interface (canonical-ledger finding).** The design row 11
   `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator` duplicates the published
   item `lem-dual-homomorphisms-are-continuous-and-functorial` part (b), whose statement
   (verified on disk) is exactly: for a closed subgroup $H$ of an LCA group $G$,
   $\widehat q:\widehat{G/H}\to\widehat G$ is a topological group isomorphism onto the
   annihilator $H^\perp$. Evidence: `items/lem-dual-homomorphisms-are-continuous-and-functorial.md`
   lines 60–73 and its proof step 3.1. Publication state: the supplier is published;
   the batch-27 row is scaffold-only. Planned supplier: none — the batch row
   re-presents the published result at the page's stable id and mints no new proof. No
   consumer-batch debt is created (nothing in the run consumes the batch row yet).
   Repair strategy for owner reconciliation: keep the row as an interface alias citing
   the published lemma, or re-home/merge it if the owner prefers one canonical id.

## Initial scaffold inventory and dependency levels (historical)

Every item carries `design_row: "FR-17"`, explicit `deps`, provenance and source
references, and the `dependency_level` recomputed by `tools/item-dependency-levels.mjs`
(1 + maximum level of its in-run deps; published and out-of-run suppliers do not raise
it). Four rows are `local_addition: true`
(`lem-local-compact-subgroups-of-hausdorff-groups-are-closed`,
`lem-compact-open-subgroups-in-totally-disconnected-lca-groups`,
`lem-lca-group-has-an-open-compactly-generated-subgroup-with-no-open-subgroup-of-infinite-index`,
`lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean`);
the 16 design A rows and 3 B leaves are not. Levels below are the
`item-dependency-levels.mjs check` values for batch-27 (no finding):

| Level | Item |
|---:|---|
| 0 | `def-annihilator-of-a-subgroup` |
| 0 | `lem-compact-open-subgroups-in-totally-disconnected-lca-groups` |
| 0 | `lem-lca-group-has-an-open-compactly-generated-subgroup-with-no-open-subgroup-of-infinite-index` (escalated) |
| 0 | `lem-local-compact-subgroups-of-hausdorff-groups-are-closed` |
| 1 | `lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean` (escalated) |
| 1 | `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator` |
| 2 | `thm-principal-structure-theorem-for-lca-groups` (escalated) |
| 10 | `lem-continuous-characters-separate-points-of-an-lca-group` |
| 14 | `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group` |
| 14 | `lem-positive-compactly-supported-transform-bump-on-the-dual` (escalated) |
| 15 | `thm-pontryagin-biduality` |
| 16 | `cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality` (B) |
| 16 | `ex-bidual-map-on-the-circle-and-the-integers` (B) |
| 16 | `lem-annihilator-reverses-inclusion-and-double-annihilator-closes` |
| 16 | `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual` |
| 16 | `thm-compact-discrete-duality-for-lca-groups` |
| 17 | `lem-character-extension-from-a-closed-subgroup-of-an-lca-group` |
| 17 | `thm-plancherel-theorem-for-lca-groups` |
| 18 | `cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases` |
| 18 | `thm-dual-of-a-closed-subgroup-is-the-dual-quotient` |
| 19 | `ex-annihilator-of-a-closed-subgroup-of-euclidean-space` (B) |
| 19 | `lem-biduality-is-stable-under-products-closed-subgroups-and-quotients` |
| 20 | `cor-pontryagin-duality-is-a-contravariant-involution` |

The design's row order is not the authoring order: Step 3 derives it by level. The
manifest's own array order is presentation only; the escalations and local additions
are deliberately beside the A rows they support.

## Dependency and prerequisite verification

The batch declares 98 distinct dependency ids: **69 published item files on disk,
29 in-run scaffold rows** (all batch-26 FR-16 items plus the batch's own), and
**0 unresolved ids** (`manifest-deps`, `content-policy` whole-run and
`item-dependency-levels` all clean for batch-27). Recorded dependencies were compared
against the manifest: 23/23 records have dependency arrays equal to the manifest's
`deps` (0 mismatches).

- **FR-15 published suppliers** were opened and their statements checked against the
  declared uses: `def-pontryagin-dual-and-compact-open-topology`,
  `lem-character-evaluation-pairing-is-jointly-continuous`,
  `lem-compact-open-character-group-operations-are-continuous`,
  `lem-dual-homomorphisms-are-continuous-and-functorial` (both parts; part (b) is the
  duplicated-interface finding above), `lem-dual-identity-neighbourhood-is-compact`,
  `thm-dual-of-an-lca-group-is-locally-compact-abelian`,
  `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals`,
  `lem-duals-of-finite-products-and-discrete-direct-sums`, and the concrete dual
  computations `ex-pontryagin-dual-of-euclidean-space`,
  `ex-pontryagin-dual-of-the-integers-is-the-circle`,
  `ex-pontryagin-dual-of-the-circle-is-the-integers`. Hypotheses (Hausdorff LCA,
  closed subgroups, compact-open topology) and directions (pullback contravariance,
  annihilator = kernel) match the declared uses; no page membership or publication
  status was used as a proof check.
- **FR-16 in-run suppliers** (batch-26 manifest read, items not yet authored): the
  inversion core, Fourier inversion for integrable transforms, Parseval pairing,
  Plancherel isometric extension, Bochner's theorem, compatible dual Haar
  normalisation, Riemann–Lebesgue, the convolution Banach-star-algebra and
  approximate-identity rows, and the transform-algebra determination row. Their
  recorded statements/strategies were checked against the uses declared here; every
  edge is `open` in the unified ledger until Step 3 authors the supplier, and the
  batch-27 records say so. No batch-27 proof consumes a *planned but unscaffolded*
  row: the 29 in-run suppliers all have batch-26 manifest entries with the exact ids
  used.
- **Local additions (4).** `lem-local-compact-subgroups-of-hausdorff-groups-are-closed`
  is recorded `ready` with a complete elementary proof (locally compact subgroup
  contained in the ambient closed set). `lem-compact-open-subgroups-in-totally-disconnected-lca-groups`
  is `ready` with a complete tube-lemma/closed-set proof (Ko Lemmas 14.9–14.10 style,
  statements only in the source). The other two are design-row decomposition rows for
  the structure theorem and are escalated with the structure chain.
- **B-page edges** point only into the A page (and published items); no B-page item is a
  `deps` target anywhere in the run, and `validate-plan` reports no B-page dependency.
- **Acyclicity/forward edges.** `manifest-deps` batch-27: `23 item(s), 0 normalized,
  0 error(s)`. `item-dependency-levels.mjs check --run frontier-39-analysis-30` reports
  only `empty scaffold inventory` findings in sibling batches that are not yet
  scaffolded — zero findings mentioning any batch-27 page (no cycle, no label
  mismatch). `validate-plan` exit 0 over the whole plan.

## Choice ledger

No item assumes an incompatible axiom (no ¬AC/¬DC branch); "AC/DC declared" means the
statement's header names it and the record identifies the use.

- **AC + DC (12 rows):** `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group`,
  `lem-positive-compactly-supported-transform-bump-on-the-dual`,
  `thm-pontryagin-biduality`, `lem-continuous-characters-separate-points-of-an-lca-group`,
  `lem-annihilator-reverses-inclusion-and-double-annihilator-closes`,
  `lem-character-extension-from-a-closed-subgroup-of-an-lca-group`,
  `thm-dual-of-a-closed-subgroup-is-the-dual-quotient`,
  `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual`,
  `thm-plancherel-theorem-for-lca-groups`,
  `cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases`,
  `lem-biduality-is-stable-under-products-closed-subgroups-and-quotients`,
  `cor-pontryagin-duality-is-a-contravariant-involution`. Uses: the FR-15 compact-open
  topology and FR-16 Bochner/inversion/Plancherel/normalisation rows declare AC+DC, and
  the batch rows inherit through them (the biduality proof itself uses
  Stone–Weierstrass/density and the transported-measure identification; the records
  name the exact rows).
- **AC only (3 rows):** `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator`
  (through the published compact-lift theorem in the cited FR-15 lemma),
  `thm-compact-discrete-duality-for-lca-groups` (through the published Tychonoff-based
  FR-15 theorem), and the B3 counterexample (Hamel basis).
- **No header, with disposition:** `lem-local-compact-subgroups-of-hausdorff-groups-are-closed`,
  `def-annihilator-of-a-subgroup` (definition; not-applicable proof),
  `lem-compact-open-subgroups-in-totally-disconnected-lca-groups` — recorded
  choice-free. The three structure rows previously shown as owner-held escalations are now
  owner-resolved through the literature-derived Hewitt--Ross 9.8 route described
  below. Step 3 must audit the source theorem's axiom strength against repository
  conventions; the primary HR proof was not accessible, and no proof certification
  is claimed here. The two B examples remain flagged in conflict note 6.

## Initial scaffold escalations (historical)

At initial scaffold, all four rows were recorded with `--decision escalated`, never
with `--owner`, and included the examined dependency ids. The owner later resolved
all four, as recorded under “Owner resolutions after scaffold” below. Exact initial
blocker texts live in the corresponding `step1-...json` files; summaries:

1. `lem-positive-compactly-supported-transform-bump-on-the-dual` — Körner Lemma 13.2
   has no proof in the source; the needed exact-support/regularity step is not in the
   fetched sources or FR-16 rows, and Loomis §37C's substitute depends on the abstract
   Plancherel theorem reserved for later FR-17 items (would cycle with biduality).
   Proposed resolutions: (a) source and read Rudin, *Fourier Analysis on Groups*,
   §1.6/§2.6 or an equivalent complete treatment of the regularity of $L^1(G)$;
   (b) authorize a literature-derived citation; or (c) authorize the alternative
   ordering with full Plancherel before the bump.
2. `lem-lca-group-has-an-open-compactly-generated-subgroup-with-no-open-subgroup-of-infinite-index`
   — Körner Lemma 14.13 is statement-only; the naive descent through open subgroups
   does not obviously terminate (open subgroups of compactly generated LCA groups need
   not be compactly generated), so no complete local proof could be certified.
   Proposed: Hewitt–Ross, *Abstract Harmonic Analysis I*, Theorem 9.8, or
   Deitmar–Echterhoff, *Principles of Harmonic Analysis*, Ch. 4, or a literature-derived
   citation.
3. `lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean`
   — Körner Lemma 14.14 is statement-only and its source proof needs Lemmas 14.7–14.12,
   including the connected locally Euclidean case 14.11, a Hilbert-fifth-type input not
   available in any fetched source. Only the totally disconnected input
   (`lem-compact-open-subgroups-in-totally-disconnected-lca-groups`) is locally
   discharged. Proposed: Hewitt–Ross Theorem 9.8/9.14, Deitmar–Echterhoff Ch. 4, or
   Morris, LNM 29.
4. `thm-principal-structure-theorem-for-lca-groups` — both local prerequisites above
   are escalated, so the row has an unmet prerequisite chain; the statement stays on
   the A page with its design id, unweakened. Proposed: source complete proofs as in
   (3), or authorize a literature-derived citation with exact locator.

None of the proposed treatments (Rudin; Hewitt–Ross Theorems 9.8/9.14;
Deitmar–Echterhoff Ch. 4; Morris LNM 29) was fetched or read in this dispatch: a
bounded accessibility probe on 2026-10-04 located Deitmar–Echterhoff Ch. 4
("The Structure of LCA Groups", printed p. 84) and a secondary statement of
Hewitt–Ross Theorem 9.8 (compactly generated LCA ≅ $\mathbb R^m\times\mathbb Z^n\times K$),
but snippets are not full text and no `source-fetch-check` stamp was made. These are
proposals for the owner, not claimed reading. The four failed-proof situations are
mathematical-coverage escalations, not retrieval failures: all six source rows (three
distinct works: the Loomis scan, the Körner snapshot and EW) were fetched in full
(below), so the five-retry ladder for unavailable sources was never entered; no
`source_resolution` drop row is present or needed.

## Initial scaffold checks (historical; 2026-10-04)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-27.pages.json`
  → `23 item(s), 0 normalized, 0 error(s)`.
- Whole-run form `node tools/manifest-deps.mjs ...-batch-*.pages.json`
  → `270 item(s), 0 normalized, 0 error(s)` (run still growing; sibling batches landed
  while this batch was checking).
- `node tools/content-policy.mjs --manifest-only ...-batch-*.pages.json`
  → `270 scoped item(s), 0 error(s), 0 warning(s)`. Caveat recorded: passing only
  batch-27 reports `batch-dependency-missing` for the batch-26 suppliers by
  construction — the whole-run invocation is the correct one and is what the sibling
  batches use.
- `node tools/coverage-checklist.mjs ...-batch-27.coverage.json --require-destination`
  → `2 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage ...-batch-27.coverage.json --stamp`
  → `6/6 source(s) fetch-verified (6 newly stamped)`; check mode
  `6/6 source(s) fetch-verified` and `6/6 source(s) resolved (0 documented drops)`.
  Sources: Loomis (198-page scan, SHA-256 prefix `05a32c7db1e616af`), Körner
  (§§13–14 read in full from the Internet Archive snapshot of the author PDF), EW
  Appendix C.1/C.3.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  → accepted; batch `27` is in `reviewed_batches`, all 46 batch-27 consumer edges are
  present with `open` reviews into batch-26, and `orphaned_reviews` is empty.
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` → 19/23
  batch-27 items `ready` with hash-current records; the only batch-27 open rows are the
  four escalations. (Rows for sibling batches still scaffolding are expected.)
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` → exit 1
  solely through `empty scaffold inventory` findings in not-yet-scaffolded sibling
  batches; **zero findings mentioning any batch-27 page** (no cycle, no label mismatch).
- `node tools/manifest-integrity.mjs --run frontier-39-analysis-30` → `60 page(s) owed,
  60 in the manifests; no scope drift`.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0; no cycle, forward
  reference, unresolved id, or cap violation. The only output rows are unrelated
  `redundant-prereq` notes in other categories; none in fourier-analysis.
- `node tools/drift-review-check.mjs --run frontier-39-analysis-30` → `30 page(s)
  reviewed, 6 spec edit(s) applied, no blocked edges`.
- `node tools/extcheck.mjs` → exit 0; the only rows are pre-existing published
  `unproved-on-published` remark warnings elsewhere in the library, none in this batch.
- `node tools/url-sweep.mjs --coverage ...-batch-27.coverage.json
  --out research/frontier-39-analysis-30-url-liveness.json --recover --fail-on-dead`
  → `3/3 live; 0 failed (0 previously fetched, 0 blocking); 0 recoverable; 0 suspect`;
  `3 citation decision(s) (0 documented source drops)`.
- `node tools/source-backing.mjs --coverage ...-batch-27.coverage.json --liveness
  research/frontier-39-analysis-30-url-liveness.json` → `24 authored result(s) across
  1 file(s), every one still backed by an openable source or documented alternative
  argument`, exit 0.
- KaTeX parse of all `$...$`/`$$...$$` segments of the batch-27 manifest →
  476 segments, 0 parse errors.

## Initial construction currency and handoff snapshot (historical)

This snapshot predates the owner resolutions and proof-order repair below.

- The batch-27 manifest has 23 items (20 A + 3 B), unchanged in scope from the design;
  nothing was dropped or weakened. This dispatch made exactly two reconciliations
  (conflict notes 4 and 5: the B3 statement tag and the corollary's AC/DC header) and
  re-recorded those two readiness records (one ai-generated B3 leaf, one ready A-page
  corollary); the other 21 records were verified hash-current, and the four owner-held
  escalation records were untouched. The manifest is now frozen for Step 3.
- Records were produced with `tools/step1-decisions.mjs record` (dependencies equal to
  the manifest's `deps`; 0 mismatches) and never with `--owner`; the four escalations
  are owner-held and must not be overwritten by a worker.
- Cross-batch dependencies for this pair are filed in
  `research/frontier-39-analysis-30-batch-27.cross-batch-dependencies.json` and in the
  refreshed unified ledger; the FR-16 lead should read the 45 item rows for the exact
  clauses consumed. Owner/operator reconciliation and the full engine gate follow
  construction; neither a worker exit nor a readiness record is independent
  mathematical approval, and Step 3 provides that review.

## Owner resolutions after scaffold

The four initial escalations are now owner-resolved and have hash-current `ready`
records. The planned item claims and IDs are retained.

1. `lem-positive-compactly-supported-transform-bump-on-the-dual` now has an
   inline Plancherel proof independent of biduality. For a compact neighborhood
   $K$ of $\gamma_0$ in $\widehat G$, take indicators of $V$ and
   $\gamma_0^{-1}V$ in $L^2(\widehat G)$, where
   $\gamma_0\overline V\overline V^{-1}\subset K$. Their inverse $L^2$
   transforms $u,v\in L^2(G)$ give $f=u\overline v\in L^1(G)$ by
   Cauchy--Schwarz. Plancherel and modulation identify $\widehat f$ with the
   nonnegative overlap $m_{\widehat G}(V\cap\omega\gamma_0^{-1}V)$, supported
   in $K$ and positive at $\gamma_0$. FR-17 now proves full Plancherel before
   this item and uses this bump in the biduality density argument.
2. The two compact-generation lemmas and the principal structure theorem use
   Hewitt--Ross, *Abstract Harmonic Analysis I*, Theorem 9.8. K. A. Ross's full
   author-hosted article was fetched and read; its Theorem 3 proof, p. 3, quotes
   and attributes the compactly generated LCA decomposition to HR 9.8. From
   $H_0\cong\mathbb R^m\times\mathbb Z^n\times K$, the first lemma takes the
   preimage of $\mathbb R^m\times\{0\}\times K$; the second rules out a
   nonzero $\mathbb Z^n$ factor under its finite-index hypothesis; the
   principal theorem composes them. The unnecessary compact-open prerequisite
   was removed from the second lemma. The primary HR volume was not accessible
   here, so this route uses the design's literature-derived citation form and
   does not claim that the primary proof was read. Since the accessible Ross
   article does not state HR 9.8's axiom basis, the three structure items now
   explicitly assume and depend on AC+DC. This conservative basis is not a
   claim of minimality.
3. The Ross article is recorded as a fetch-verified source for the exact HR 9.8
   statement and attribution. `source-fetch-check` reports 7/7 sources verified,
   including this source; the hash is recorded in the batch coverage file.


## Post-scaffold dependency correction

The bump lemma's dependency list initially misspelled the published Haar uniqueness supplier ID. It briefly named `thm-uniqueness-of-left-haar-measure-up-to-scale`; the current Plancherel-based proof no longer compares measures through biduality, so that edge has been removed. The owner readiness record was refreshed against the current manifest. No statement, proof route, pair, or item scope changed.


## Post-scaffold LCA hypothesis and dependency correction

The compactly generated Euclidean-times-compact lemma now states local compactness, matching the LCA scope of Hewitt--Ross 9.8 used by its proof. The two preceding/following structure results explicitly cite Hausdorffness, and their manifests now include `def-hausdorff-space`. Removed the principal structure theorem's unused `lem-compact-open-subgroups-in-totally-disconnected-lca-groups` dependency; its written proof composes the two structure lemmas directly. All three owner readiness records were refreshed. This clarifies assumptions and removes an unused edge without changing the intended pair claims.

The three structure items explicitly assume and depend on AC+DC because the
accessible quotation of HR 9.8 does not state the theorem's choice basis. The
primary HR proof remains unread and no minimal axiom claim is made.


## Owner-approved FR-17 proof-order repair

The earlier double-transform identities were corrected to $h(-x)$ and
$f(-x)$ under the repository's conjugate-phase convention, then superseded
when the owner replaced the Loomis density shortcut with a noncircular proof
sequence. The current range-density argument uses the one-way FR-16 isometry
and Fourier--Stieltjes uniqueness; full Plancherel follows from its closed,
dense range; the bump is constructed from inverse $L^2$ transforms; and
biduality uses the bump plus Fourier--Stieltjes uniqueness. No proof step uses
the bump to prove itself or assumes a double-dual identification in advance.
Readiness records and dependency levels were refreshed; this is not proof
certification.


## Independent Step 3 proof review handoff

- Loomis §37D states the nonzero-convolution contradiction parenthetically but omits its construction; the old route was not used as proof. The current strategy supplies the missing exact-vanishing step through the independently proved Plancherel bump. Step 3 still owes the local transform-overlap calculation and the finite-regular-measure justification recorded in the current item strategies.
- The earlier $h(-x)$/$f(-x)$ sign audit is preserved as historical evidence; those identities are absent from the current range-density and biduality strategies.
- The new range-density proof is an owner-authored derivation from FR-16's isometry, translations, $C_c$ density and Fourier--Stieltjes uniqueness. The new proof provenance is AI-altered; it does not rely on Loomis §36D's inverse-transform argument or on biduality.
- The three structure rows use HR 9.8 via the fetched and read Ross article, Theorem 3 proof, p. 3, which quotes HR 9.8. The primary HR proof itself was inaccessible and is not claimed read. The rows now conservatively assume AC+DC; Step 3 must preserve this provenance distinction and make no claim that this basis is minimal. The second structure lemma's local-compactness hypothesis has been restored.

## Current cross-batch metadata after proof-order repair

The batch-27 cross-batch input has 31 rows (one FR-16 page prerequisite and 30
direct batch-26 item edges). A focused comparison against the current manifests
found no missing, duplicate or stale edges. The unified run ledger remains at its
prior snapshot while batch-16 scaffold writers are active; refresh it after they
drain. The manifest and its 23 readiness dependency arrays match, so this metadata
reconciliation did not require readiness re-recording.


## Independent Step 3b closure audit — 2026-10-05

Reviewer lane `/root/resume_b12_b14/audit_b14_core`, B27 only. Verified latest task: `frontier-39-analysis-30-step3b-pair-pontryagin-duality-for-locally-compact-abelian-groups-5b3cf7f31f9227b1.task.md` (latest disk mtime). Audited all 24 current items supplier-first. Existing author receipts were current on entry; mathematical inspection found the repaired defects below. All in-run outside suppliers are B26 and current/closed; no outside item or shared supplier was edited.

### Findings and repairs

- Compact-open subgroup supplier: Step 1.1 reversed the clopen/complement finite-cover argument; rebuilt it with all clopen separators and a finite cover by their complements. Steps 1.2–2.1 now use the complete family of admissible rectangles, avoiding unlicensed point-indexed choice. F8 includes the essential U1 subset N condition for subspace openness. Added the published LCH compact-neighbourhood shrinking interface; made stabilizer inclusion use symmetry explicitly. Its three clauses and choice-free Statement are unchanged.
- Locally compact subgroup closedness: the ambient closure inclusion follows from C being closed and containing V, not from the closure trace identity alone. F1 now cites its declared LCH refinement supplier. The full Hausdorff, potentially nonabelian, choice-free Statement is retained.
- Quotient-LCA proof: Step 4.1 now descends addition from addition, then inversion, rather than equating subtraction with addition. Statement unchanged.
- Compact-dual neighbourhood basis: F6 gets compact L1 tails from current C_c density, rather than outer regularity alone. The maximum in Step 1.1 is justified on the compact real-valued image, avoiding any metrizable-domain assumption. Step 4.1 uses contained image neighbourhoods and the basis to prove inverse continuity; it no longer claims a chosen rectangle has exactly the whole polar set as its trace. Statement unchanged.
- Product/subgroup/quotient naturality: corrected Step 2.2's quotient character domain and evaluation typing. All finite-product and exact-sequence interfaces remain unchanged.
- Compact–discrete equivalences: kept both equivalences and the AC hypothesis; corrected the claim that AC is consumed only through Tychonoff, and explicitly accounted for AC supplying DC to analytic biduality in the converses. A complete item-reference scan found no consumer of this item outside B27 (no other item cites it). No outside lock or consumer edit is required.
- Algebraic-character CEX: used the supplied Hamel coefficient map normalized to T(1)=1, with a second nonzero basis vector sent to zero. This avoids assuming that an arbitrary supplied Hamel basis contains 1. The induced non-power circle homomorphism and the refuted claim are unchanged.
- Open compactly generated subgroup supplier: added exact current finite-product compactness, connected-image and Euclidean Heine–Borel suppliers. Removed a duplicated citation in F4; retained the cited full compactly generated LCA decomposition.
- Contract boundary repairs distinguish the H={0} trivial restriction/whole-dual quotient from the H=G identity case; account for both density/orthogonal-complement directions; exclude inadmissible null Haar measures; correct the compact/discrete converse directions, choice uses and changed Hamel witness. Refreshed 23 proof contracts; preserved the annihilator Definition's existing contract.

### Source evidence and complete dependency route

Retrieved and read all seven pages of Kenneth A. Ross, *Closed subgroups of compactly generated LCA groups are compactly generated*, May 31, 2018, from `https://pages.uoregon.edu/math/people/ross/SubgroupsCGLCAGareCG-v2.pdf`; raw PDF SHA256 `e694d06600f029199cdb7ee0bedf6a0a27160d23c5bdbfac9ef53e840273b323`. Page 3, Theorem 3 proof, explicitly gives R^c times Z^d times E with E compact abelian, citing Hewitt–Ross (9.8). This verifies the existing source-backed classification input; it does not invent a local proof of that imported classification. `pdftotext` was unavailable; text was read with installed PyMuPDF.

The analytic route is acyclic: current B26 Bochner gives point separation; compatible normalization/inversion gives the evaluation-image topology; current B26 isometry/uniqueness and the sigma-compact L2 support argument give dense range and full Plancherel; its modulation identity supplies the positive transform bump; that bump and current B26 Fourier–Stieltjes uniqueness prove surjective evaluation. Only then use annihilator/quotient calculus, character extension and dual quotient. No circular application of biduality or character extension enters the analytic suppliers. General non-sigma-compact LCA groups and reciprocal compatible Haar scales are preserved.

### Frozen carriers and focused checks

Scope hash: `c21323adfc622544fbb390e9971b21abd84156b66f71996459e7f9a82539d9b7`. All 24 mathematical reviews are complete; current scope refresh requested before ordinary receipts. No outside prerequisite blocker remains. The receipt pass subsequently detected two stale owner rows, as recorded below. No external Statement/Definition consumer was changed.

Final focused proof-layout on eight explicit changed source paths: **8 items, 39 steps, 0 defects**. Final B27-only strict proof-contract check: **24/24 items, 0 errors, 0 warnings**. The first focused strict attempt found the pre-existing repeated F4 citation after full regeneration; repaired it and the final attempt passed. No tests, run gates, stage transitions, or outside writes were performed.

Exact source writes:

- `items/lem-local-compact-subgroups-of-hausdorff-groups-are-closed.md`
- `items/lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca.md`
- `items/lem-compact-open-subgroups-in-totally-disconnected-lca-groups.md`
- `items/lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group.md`
- `items/lem-biduality-is-stable-under-products-closed-subgroups-and-quotients.md`
- `items/thm-compact-discrete-duality-for-lca-groups.md`
- `items/cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality.md`
- `items/lem-lca-group-has-an-open-compactly-generated-subgroup-with-no-open-subgroup-of-infinite-index.md`

Other carriers: B27 `.pages.json`, `.proof-contracts.json`, `.notes.md`, and forthcoming B27 review receipts. Cross-batch dependency carriers remain unchanged because supplier identities/consumed interfaces are unchanged.

### Current transitive hashes at freeze

| Item | Hash |
|---|---|
| `def-annihilator-of-a-subgroup` | `4c2af487e96877a8467af42c91c9d6e789e752a524ef484af7c484656f7820d3` |
| `lem-compact-open-subgroups-in-totally-disconnected-lca-groups` | `897f81531384423e4376a67b7d115a6802bbe81d4c3b44a739adf756962dd229` |
| `lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean` | `c8906ac1e171091b8a186a8b08f45d30b0c2593df1ab0fdbf934f8e8662cd146` |
| `lem-lca-group-has-an-open-compactly-generated-subgroup-with-no-open-subgroup-of-infinite-index` | `e7762c7ff6357cb8ce93c11690c4c6783b63a06ca22f2329f79a338ca9e763a1` |
| `lem-local-compact-subgroups-of-hausdorff-groups-are-closed` | `45cf6cc9e1bce0bb672404bd965dccba64db4d552babe7f0027021d86d046146` |
| `lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca` | `9023fd2d7975e67a173fcf7233b0ac0d6ec41b47e2e7839c602790edac17f3c5` |
| `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator` | `0936d2f8f16010546e56c99c8026b2104ef10cda8e34e217e487216bfe2b77fa` |
| `thm-principal-structure-theorem-for-lca-groups` | `de8dd3212dc6ad3b72f24c05ef7fea01013d96cdf7474fb99bd72a0089ca3df5` |
| `lem-continuous-characters-separate-points-of-an-lca-group` | `eda1977568865bbaffa993ccfd03d9f1af08f4005cedc6e7027dd038a586f8a3` |
| `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group` | `409ca277d13665b39172833c4f2391b487b12c78e58521690310c8461586a87d` |
| `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual` | `6db8780e43dc4bc8728a33ecc8592c780172373734b07aad7ac897c47c571b7d` |
| `thm-plancherel-theorem-for-lca-groups` | `79b8f8d8a03cfb29e140889dd061f376c0c42d675f402deacaa00a36b41833f9` |
| `cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases` | `5d7e986f79473842ed1d46aa9e39590a7ebf586d34d3f6ad0bc0f3bcca5196cc` |
| `lem-positive-compactly-supported-transform-bump-on-the-dual` | `253a764c0962c580ba0936862ec6f7ea70a0a3e31403a0e26aeb6e0fd14ad9aa` |
| `thm-pontryagin-biduality` | `aac962e24c42f1e283a618b50ecf433ae24793e9a9217178cf8f5c7509fb5354` |
| `cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality` | `8cc0fb8798a815f9464d0af7af17bd882d1593d10902a405b92809dc29308e4f` |
| `ex-bidual-map-on-the-circle-and-the-integers` | `48e51e2eeee73d111f960979aeefd6b97b3973eb2da6d153dcf1881c181923ec` |
| `lem-annihilator-reverses-inclusion-and-double-annihilator-closes` | `e7eb2ab580149e4f1e32ab83c34d960cf727d04be3d83d93a71b23f8c904e100` |
| `thm-compact-discrete-duality-for-lca-groups` | `b2d36d778ae9d35a160cc24a83336149b55a2c8eaaeff8465de50e086cd53a11` |
| `lem-character-extension-from-a-closed-subgroup-of-an-lca-group` | `ccdcb48302bdeefc1c2703bf57229b14ca0cf80f4b752580d97dfa710d7bb882` |
| `thm-dual-of-a-closed-subgroup-is-the-dual-quotient` | `112ef9e79f9d99fd84952faba9633fa51ad11372c0f2fc9e855aea78a9e0ef3b` |
| `ex-annihilator-of-a-closed-subgroup-of-euclidean-space` | `7d579f97b771edcf844cd2e2bd4c178b101e83dc947fedf690f647e624a80f9d` |
| `lem-biduality-is-stable-under-products-closed-subgroups-and-quotients` | `c44b796d4ac28ed60cc96768b0d60b4beb8b952f8fd6b37a8374bcc46fb58ddc` |
| `cor-pontryagin-duality-is-a-contravariant-involution` | `67222468b3d38c342274e81e37193a01cd7b894184112cf1ffa8832eea215332` |

Final supplier refinement before receipts: Fact F3 of the open compactly generated subgroup lemma now explicitly cites the connected-interval and connected-product suppliers for R^m. Its current item hash is `e7762c7ff6357cb8ce93c11690c4c6783b63a06ca22f2329f79a338ca9e763a1`; the principal-structure consumer is `de8dd3212dc6ad3b72f24c05ef7fea01013d96cdf7474fb99bd72a0089ca3df5`. The scope hash remains unchanged. After this final edit, focused layout again passed 8/39/0 and strict B27 contracts again passed 24/24 with 0 errors/warnings. Content writes are frozen pending the owner confirmation.

### Receipt pass and owner-row handling

Recorded 22 ordinary confidence-1 accepts for B27 after rehashing each current item and checking its direct suppliers. Two repaired items retained owner decisions: the compact-dual neighbourhood-basis lemma and the algebraic-character CEX. The owner refreshed the first at `409ca277d13665b39172833c4f2391b487b12c78e58521690310c8461586a87d`; after the biduality acceptance, the CEX has no open direct supplier and awaits owner refresh at `8cc0fb8798a815f9464d0af7af17bd882d1593d10902a405b92809dc29308e4f`. Current inventory is 23/24 closed pending that sole owner decision. No reviewer bypass or content edit followed the frozen checks. Cross-batch carrier inspection confirms 27 verified rows and six intentionally removed rows; it was not changed.

### Final independent closure

The owner refreshed the algebraic-character CEX repaired receipt at `8cc0fb8798a815f9464d0af7af17bd882d1593d10902a405b92809dc29308e4f`. Final live inventory: **24/24 current closed**, with current/closed scope `c21323adfc622544fbb390e9971b21abd84156b66f71996459e7f9a82539d9b7`, no item or supplier blocker. Closure consists of 22 ordinary independent confidence-1 accepts and two owner-repaired refreshes supported by the current mathematical audits. Source, manifest and proof-contract bytes remain those checked at the final freeze. Final writes stayed inside the eight listed B27 sources, B27 pages/contracts/notes, and 22 B27 ordinary review rows; the two owner rows were written by the owner. No other pair, shared supplier, outside consumer, test, gate or stage transition was touched.
