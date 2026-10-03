# Batch 29 Step-1 notes — Hilbert functors and projective Hilbert schemes

## Scope and instruction reconciliation

Read `CLAUDE.md`, `AGENTS.md`, `SCHEMA.md`, `WORKFLOW.md`,
`briefs/beta-scaffold.md`, the batch-29 task, `research/plan-spec.json`,
`research/plan-algebraic-geometry-expansion-track.md` AG-MOD-1 (line 255),
`research/frontier-38-owner-30-owner-authoring-direction.md`,
`research/frontier-38-owner-30-planning-notes.md`,
`research/frontier-38-owner-30-packet-integration.md`, the current batch-29
artifacts and `briefs/tasks/frontier-dependency-ledger.md`. The owner-authoring
direction is binding and was applied first.

Owned pair: A `hilbert-functors-and-projective-hilbert-schemes` (order 905)
with B `hilbert-functors-and-projective-hilbert-schemes-examples` (order 906),
category `scheme-theory`. The A page declares the four published prerequisites
`flat-smooth-and-etale-morphisms`,
`quasi-coherent-and-coherent-sheaves-and-vector-bundles`,
`proj-projective-schemes-twisting-sheaves-and-ampleness` and
`cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`; each of
the four is a published page on disk. No selected pair was changed, added or
dropped.

**Design-vs-plan conflicts (current plan controls; recorded per the task):**

1. AG-MOD-1's design sentence names AV-18/19/22 and graded-module foundations
   as prerequisites. The current plan instead requires the four scheme-theory
   pages above, and no batch-29 item depends on any AV-18/19/22 page; the plan
   and the owner direction control, and the design sentence is stale.
2. The design promises three A claims and two B examples. The current plan and
   the registered packet keep the three A claims but carry 22 A items and four
   B items: 19 A and two B locally added supports (owner direction §Local
   prerequisite construction). The design's warning "do not repeat AV-4
   Grassmannians or projective hypersurface parameter spaces" is honoured; the
   relative Grassmannian is an A construction prerequisite only and no
   hypersurface parameter space is built.
3. The design's 905/906 orders and title match the plan-spec rows exactly; no
   order drift.
4. The definition/claim interface uses the packet's fibrewise eventual
   Hilbert-polynomial membership, equivalent under the local arbitrary-ample
   Euler-polynomial item to the all-integer Euler-characteristic formulation;
   this is recorded in `packet-integration.md` and is not a claim change.

The 26 item files were authored by the owner-authorized local prerequisite
packet before this dispatch (`research/frontier-38-owner-30-local-prereq-905.md`).
This scaffold did **not** edit any item file, plan, ledger, page or engine
artifact: it wrote the batch manifest, the coverage harvest, this note, the
per-item readiness records and the (empty) consumer-batch dependency input.

## Inventory, levels and dependency verification

A page, 22 items in construction order (the manifest preserves this order):

| # | item | kind | level |
|---|---|---|---|
| 1 | `def-castelnuovo-mumford-regularity` | definition | 0 |
| 2 | `lem-hilbert-regularity-propagation` | lemma | 1 |
| 3 | `lem-hilbert-uniform-regularity-fixed-polynomial` | lemma | 2 |
| 4 | `lem-hilbert-relative-regularity-and-base-change` | lemma | 2 |
| 5 | `lem-hilbert-uniform-sections-after-flat-pullback` | lemma | 3 |
| 6 | `lem-hilbert-rank-flattening-finite-module` | lemma | 0 |
| 7 | `lem-hilbert-universal-scheme-theoretic-flattening` | lemma | 4 |
| 8 | `lem-hilbert-family-vanishing-locus` | lemma | 0 |
| 9 | `def-projective-morphism-coherent-bundle-convention` | definition | 0 |
| 10 | `lem-hilbert-euler-polynomial-for-ample-polarization` | lemma | 0 |
| 11 | `def-hilbert-functor-of-flat-projective-subschemes` | definition | 1 |
| 12 | `lem-hilbert-families-fpqc-descent` | lemma | 2 |
| 13 | `lem-hilbert-relative-grassmannian-quotients` | lemma | 1 |
| 14 | `lem-hilbert-projective-space-construction` | lemma | 5 |
| 15 | `lem-hilbert-valuative-flat-closure` | lemma | 3 |
| 16 | `lem-hilbert-proper-relative-ample-projectivity` | lemma | 0 |
| 17 | `lem-hilbert-regularity-independent-of-ambient-dimension` | lemma | 3 |
| 18 | `lem-hilbert-coherent-projective-bundle-construction` | lemma | 6 |
| 19 | `lem-hilbert-noetherian-base-fixed-polarization` | lemma | 6 |
| 20 | `thm-hilbert-scheme-represents-projective-flat-families` | theorem | 7 |
| 21 | `lem-universal-family-and-hilbert-polynomial-strata` | lemma | 8 |
| 22 | `lem-hilbert-polynomial-finite-scheme-length` | lemma | 0 |

B page, four items: `ex-hilbert-polynomial-of-finite-points-on-p1` (level 9),
`cex-fibrewise-subschemes-without-flatness-do-not-form-a-hilbert-family`
(level 5), `ex-hilbert-base-change-of-a-fat-point-family` (level 9) and
`ex-full-hilbert-functor-of-p1-has-infinitely-many-strata` (level 8). Two are
the commissioned examples; the other two are the registered local additions.
Both pages stay far below the 100-item cap (22 and 4).

Dependency verification performed on the authored files:

- every one of the 55 distinct declared dependency IDs resolves: 22 to items of
  this batch and 33 to published items on disk (`status: published`), with no
  missing file, no forward reference, no B-page dependency and no cycle. The
  scoped `item-dependency-levels` evaluation over the batch manifest reports
  `26 item(s), 0 errors, maximum level 9`.
- every wikilink in every statement, fact block and proof resolves to a declared
  `deps` entry (checked mechanically per file); no `justified_by` and no
  `forward_refs` are used.
- the published suppliers actually used were opened and their statements
  checked against the use: `lem-proper-flat-fp-cohomology-perfect-complex`
  (arbitrary base ring, base-change naturality),
  `thm-hilbert-polynomial-coherent-sheaf` (Statement 1 all-integer Euler,
  Statement 2 eventual h^0), `lem-serre-vanishing-induction-hyperplane`
  (infinite field, associated points),
  `thm-ample-powers-very-ample-proper-base` (Noetherian base, absolute
  ampleness), `thm-valuative-criterion-properness` (arbitrary valuation rings),
  `lem-filtered-colimit-flat-fp-sheaf-stage`,
  `thm-closed-subschemes-projective-space-homogeneous-ideals`,
  `cor-euler-characteristic-locally-constant-flat-proper-family`,
  `thm-serre-vanishing`, `thm-projective-bundle-represents-line-quotients`,
  `thm-relative-proj-base-change`,
  `lem-eventual-global-generation-coherent-twists`,
  `lem-graded-section-module-finite-projective`,
  `thm-generic-flatness-morphisms`,
  `lem-generic-freeness-finite-type-algebra-module`,
  `thm-nakayama-lemma` (Jacobson-radical form, AC),
  `thm-faithfully-flat-descent-of-flatness`,
  `cor-faithfully-flat-descent-of-finite-generation`,
  `lem-proper-cohomology-field-extension`,
  `lem-euler-characteristic-additive-short-exact`,
  `lem-support-dimension-preserved-field-extension`,
  `thm-hilbert-polynomial-degree-support-dimension`,
  `lem-ample-pullback-finite-morphism`,
  `thm-finiteness-of-associated-primes`, `thm-zero-divisors-on-a-module`
  (DC), `thm-qc-sheaf-affine-higher-cohomology-vanishes`,
  `thm-proper-pushforward-coherent`, `def-relatively-ample-invertible-sheaf`
  (affine-base remark) and the two definitions
  `def-projective-morphism-pre-proj`,
  `def-relative-proj-quasi-coherent-graded-algebra`. The published
  `def-axiom-of-choice` and `def-dependent-choice` conventions are declared
  wherever used.
- because all suppliers outside the batch are published, the per-batch
  consumer input records no in-run cross-batch edge. The page-level `requires`
  edges of the A page all point at published pages; the B page requires only
  its own A page, inside this batch.

## Choice assumptions

Every A item states "Assume AC and DC" (definitions state the AC/DC working
convention) and lists `def-axiom-of-choice` and, where a proof uses it,
`def-dependent-choice`. The inherited uses are the local
Noetherian-approximation/flatness framework, the projective-space and
cohomology suppliers, and the published `thm-nakayama-lemma` (AC). No item
claims choice-freeness, and no incompatible-axiom branch is introduced. The
four B items state AC and DC with both dependency entries, matching their A
suppliers.

## Cross-batch input

`research/frontier-38-owner-30-batch-29.cross-batch-dependencies.json` is an
empty array: every dependency outside the batch is a published item and every
page prerequisite is a published page, so there is no within-run supplier for
this consumer batch. The unified
`research/frontier-38-owner-30-cross-batch-dependencies.json` was refreshed
after writing the input; it lists batch 29 as reviewed with no edges.

## Sources and coverage

`research/frontier-38-owner-30-batch-29.coverage.json` records 41 harvested
results from three retrieved full texts; all three are fetch-verified by
`source-fetch-check --stamp` (stamps written to the coverage file):

| Source | Kind; locator | Verified file |
|---|---|---|
| Nitsure, *Construction of Hilbert and Quot Schemes* | lecture notes; Sections 1–5, printed pp. 1–30 | 379,533 bytes, 36 pp.; SHA-256 prefix `edbab8363ccfd8fe`; [arXiv full text](https://arxiv.org/pdf/math/0504590) |
| Grothendieck, Bourbaki 221, *Les schémas de Hilbert* | paper; Sections 2–3, printed pp. 253–270 | 2,747,079 bytes, 29 pp.; SHA-256 prefix `abbf37780fdc514b`; [Numdam](https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf) |
| Grothendieck, EGA III₂, Chapitre III §7.7 | paper; (7.7.1)–(7.7.9), printed pp. 66–70 | 10,856,434 bytes, 90 pp.; SHA-256 prefix `3ad9d3710bceebb4`; [Numdam](https://www.numdam.org/item/PMIHES_1963__17__5_0.pdf) |

Nitsure Sections 1–5 are the primary treatment and were read over their full
range (stratification, Castelnuovo–Mumford regularity including Lemma 2.1,
Remark 2.2 and Theorem 2.3, the semicontinuity/base-change Theorems 3.3–3.7,
generic flatness and flattening Theorem 4.3, and the construction and
projectivity discussion of Section 5). Grothendieck Bourbaki 221 §§2–3 is the
independent original construction: Theorem 2.2's boundedness proof is
expressly an *esquisse* in the printed text, and the packet therefore closes
every bound with its own recursive `b(P)` induction; Lemmas 3.3–3.7 and
Proposition 3.8 independently confirm the rank-locus, flattening, valuative
and very-ampleness steps. EGA III₂ §7.7 supplies the classical
exchange/semicontinuity and representability statements. The coverage file
gives every harvested heading a disposition: 22 `included`, 11 `inline`, 2
`already-published`, and 6 declined (`out-of-scope`) with specific written reasons. The
`--require-destination` checklist passes with 0 errors and 0 warnings. One
verified authoritative treatment (Nitsure) is fully reproduced locally with
every prerequisite item proved, so the owner direction's rule applies to the
second-treatment situation; the Grothendieck reading is genuine, not a
citation.

## Validation results

- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-29.pages.json`
  — 26 items, 0 missing, 0 errors.
- scoped `dependencyLevels` over the batch-29 manifest — 26 items, 0 errors,
  maximum level 9.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` —
  no batch-29 error; the remaining errors are the empty inventories of other
  batches still being scaffolded at check time, outside this assignment.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-38-owner-30-batch-29.coverage.json`
  — 1 page, 41 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage ... --stamp` then check mode —
  3/3 fetch-verified, 3/3 resolved, 0 drops.
- `node tools/url-sweep.mjs --coverage <batch-29 coverage> --recover --fail-on-dead`
  (artifact written to a scratch path, not the run's) — 3/3 live, 0 failed,
  3 citation decisions, 0 source drops.
- `node tools/source-backing.mjs --coverage <batch-29 coverage> --liveness <scratch>`
  — 18 authored results, every one still backed by an openable source or
  documented alternative argument.
- `node tools/manifest-integrity.mjs --run frontier-38-owner-30` — 60 pages
  owed, 60 in the manifests, no scope drift.
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-29.pages.json`
  and the `--manifest-only` form — 26 scoped items, 0 errors, 0 warnings. At check time the
  whole-run form over all current batch manifests reported 94
  `scope-item-missing` errors for items declared by other, still-unauthored
  batches (for example the heat-kernel and Fourier packets); none of the 26
  batch-29 ids appears among the error ids.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-*.pages.json`
  — 201 items, 0 missing, 0 errors.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0; no item
  cycles, forward references, B-page dependencies or unresolved ids; the
  registered batch-29 rows validate.
- `node tools/depcheck.mjs` — exit 0 (290 repository-wide warnings, none for a
  batch-29 item); `node tools/extcheck.mjs` — exit 0; `node tools/fwdcheck.mjs`
  — exit 1 with two `link-unplanned` errors in
  `def-multiplicative-type-coordinate-hopf-algebra` and
  `lem-multiplicative-type-affineness-by-field-descent` (batch 25's packet),
  outside this assignment and left untouched.
- local format checks on the 26 explicit paths (read-only):
  `proof-layout` 26 items / 66 steps / 0 defects; `precheck` 23 proof-bearing
  items, 0 failing; `rendercheck` OK for all 26 files.
- `node tools/step1-decisions.mjs check --run frontier-38-owner-30` — all 26
  batch-29 items closed as `ready` with current hashes; the remaining work rows
  belong to other batches.

## Unresolved findings and notes for Step 3/5

No batch-29 source, dependency, proof-strategy or readiness blocker remains
under the explicit AC/DC scope. Three wording-level observations are recorded
for the author/reviewer rather than as escalations, because the mathematical
closure is unaffected:

1. `lem-hilbert-uniform-sections-after-flat-pullback`, step 1.1: the cited
   `lem-filtered-colimit-flat-fp-sheaf-stage` is stated for finitely generated
   **Z**-algebra stages. The proof's phrase "finitely generated A-subalgebras"
   should be read as f.g. Z-subalgebras carrying a descended
   finite-presentation model of `X`, `F` and the presentation and containing
   the image of `A`; with that reading every hypothesis is met and the
   conclusion is exactly the stated one.
2. `lem-hilbert-regularity-propagation`, steps 2.1 and 3.1: the dimensions
   `n` and `n-1` inductions for vanishing and for section multiplication are
   cleanest read as one simultaneous induction; the written order proves the
   vanishings first and then invokes the `P^{n-1}` generation statement.
3. `def-projective-morphism-coherent-bundle-convention` mentions a relatively
   ample polarization in an explanatory sentence but does not declare
   `def-relatively-ample-invertible-sheaf`; every item that takes relative
   ampleness as a hypothesis reaches that published definition transitively,
   and `def-hilbert-functor-of-flat-projective-subschemes` uses it explicitly
   in its definition.

Owner/operator reconciliation and the full engine gate follow; neither these
records nor the packet note are independent mathematical approval. Step 3
provides that review.
