# Batch 10 Step-1 scaffold — Character Groups and Elementary LCA Duals

Run `frontier-38-owner-30`, role beta, batch 10. Owned pair (the only pair
touched): A `character-groups-and-elementary-lca-duals` (order 510.06501) / B
`character-groups-and-elementary-lca-duals-examples` (order 510.06502),
category `fourier-analysis`. Artifacts written by this dispatch:
`research/frontier-38-owner-30-batch-10.pages.json` (13 A + 4 B items),
`research/frontier-38-owner-30-batch-10.coverage.json` (66 harvested rows),
`research/frontier-38-owner-30-batch-10.cross-batch-dependencies.json` (`[]`),
the 17 `research/frontier-38-owner-30-step1-<item>.json` readiness records, and
this note. No item file, published content, shared plan, engine state or
verdict was edited; Step 3 authors the item files from these contracts.

## Scope and instruction reconciliation

Read before construction: `CLAUDE.md`, `AGENTS.md`, `SCHEMA.md`,
`WORKFLOW.md`, `briefs/beta-scaffold.md`, the batch-10 task,
`research/plan-spec.json`, the FR-15 design in
`research/plan-fourier-analysis-track.md` (line 1008; tracked through its
per-pair source matrix at line 324), the binding
`research/frontier-38-owner-30-owner-authoring-direction.md`,
`research/frontier-38-owner-30-planning-notes.md`, the run's drift evidence
and `briefs/tasks/frontier-dependency-ledger.md`. The owner direction was
applied first; it changes nothing for this pair beyond the local-prerequisite
authority used below.

The plan-spec rows carry the exact page ids, orders, categories, companion
and `requires` of the dispatch task; no selected pair was changed, added or
dropped.

## Design-versus-plan reconciliation (current plan controls)

1. **Requires list.** The track design's FR-15 header names `uniform-spaces`,
   the quotient/product pages, the FR-6 A page and RG-18 Haar measure; the
   current plan and the dispatch task require `uniform-spaces`,
   `subspaces-products-and-quotients`,
   `fourier-multipliers-and-sobolev-characterisations`,
   `haar-measure-existence-and-uniqueness` **and** `ascoli-arzela`. The
   manifest carries the plan's five. Item-level consumers exist for
   `ascoli-arzela` (items `lem-dual-identity-neighbourhood-is-compact`,
   `thm-dual-of-an-lca-group-is-locally-compact-abelian`) and for
   `subspaces-products-and-quotients` (product, quotient, subspace and
   universal-property items). No FR-15 item consumes a `uniform-spaces`, FR-6
   or Haar item: those are used by the Ascoli page's own development and by
   FR-16, not here. Recorded for the owner rather than papered over.
2. **Inventory.** The design's FR-15 table has 7 A rows and 4 B rows. The
   plan-spec page rows are empty shells, so the design table is the only
   item-level specification; the manifest implements all 11 rows in design
   order and adds six same-page A supports (the multiplicative circle, the
   discrete-domain compact-open identity, the arc criterion, pointwise limits
   of characters, characters of the line, and the compact identity
   neighbourhood). The owner direction's local-prerequisite clause authorizes
   these; no claim of the design was weakened, moved off the pair, or reduced
   to a citation. Total 13 A + 4 B, far below the 100-item cap.
3. **Source for A items 1-7.** The design attributes them to Lo §§34-35,
   Ko §§6-9 and EW C.1. The design-cited Körner notes could not be retrieved:
   every host path under `dpmms.cam.ac.uk` fails TLS with
   `UNABLE_TO_VERIFY_LEAF_SIGNATURE`, and no mirror exposing the text was
   found. The drop is recorded in the coverage with the initial failure, five
   retries, two searches and one alternative per affected result; the content
   was reharvested from Dikranjan §§7.1-7.3 (recovered in full, 69 pp.),
   Loomis §§34-35 and Einsiedler-Ward Appendix C.3, plus the local proofs. All
   FR-15 claims, hypotheses and the design's proof route are preserved.
4. **Character convention.** The design writes characters `G -> T` and the
   FR-16 design conjugates `gamma(x)`; the plan's convention audit says groups
   are additive and characters multiplicative. The manifest fixes `T` as the
   multiplicative unit circle `{z in C : |z| = 1}` and proves the explicit
   topological-group isomorphism with the published circle `R/Z` as item 1,
   so the published additive Fourier items and the multiplicative character
   notation coexist without ambiguity.
5. **No unrestricted compact-open claim.** The design's item 4 forbids it.
   Item `lem-dual-homomorphisms-are-continuous-and-functorial` states exactly
   the two cases used later: pullback along an arbitrary continuous
   homomorphism is continuous, and for a closed subgroup the quotient dual is
   topologically the annihilator (compact-lift argument).
6. **Direct sums.** The design's "discrete direct sums" row is implemented as
   the algebraic direct sum of discrete groups carrying the discrete
   topology, which is Dikranjan Theorem 7.14's first identity. The manifest
   explicitly disclaims the subspace topology on an infinite direct sum of
   non-discrete factors, where the claim would be false.
7. **Design warnings honoured.** The equicontinuity/compactness lemmas behind
   local compactness are proved locally (item 10) rather than citing
   Arzela-Ascoli by name, as demanded. The design's remark that the four B
   computations formerly sat on FR-14 is consistent with the plan and with
   batch 6's manifest, which does not carry them; they are homed here once.

## Inventory, levels and dependency verification

A page, 13 items in construction order (levels computed over in-run deps):

| # | item | kind | level |
|---|---|---|---|
| 1 | `lem-unit-circle-is-a-compact-metrizable-topological-group` | lemma | 0 |
| 2 | `lem-compact-open-topology-on-a-discrete-domain-is-pointwise` | lemma | 0 |
| 3 | `lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup` | lemma | 1 |
| 4 | `def-pontryagin-dual-and-compact-open-topology` | definition | 1 |
| 5 | `lem-compact-open-character-group-operations-are-continuous` | lemma | 2 |
| 6 | `lem-character-evaluation-pairing-is-jointly-continuous` | lemma | 2 |
| 7 | `lem-pointwise-limits-of-characters-are-characters` | lemma | 2 |
| 8 | `lem-dual-homomorphisms-are-continuous-and-functorial` | lemma | 3 |
| 9 | `lem-continuous-characters-of-the-real-line-are-exponentials` | lemma | 1 |
| 10 | `lem-dual-identity-neighbourhood-is-compact` | lemma | 3 |
| 11 | `thm-dual-of-an-lca-group-is-locally-compact-abelian` | theorem | 4 |
| 12 | `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals` | theorem | 3 |
| 13 | `lem-duals-of-finite-products-and-discrete-direct-sums` | lemma | 4 |

B page, four items: `ex-pontryagin-dual-of-the-integers-is-the-circle`
(level 4), `ex-pontryagin-dual-of-the-circle-is-the-integers` (level 4),
`ex-pontryagin-dual-of-euclidean-space` (level 5),
`ex-pontryagin-dual-of-a-finite-cyclic-group` (level 4). All four are the
commissioned B rows; the B page is a dependency leaf.

All 78 distinct declared dependency IDs resolve: 10 to items of this batch and
68 to published item files on disk (`status: published`), with no missing
target, no draft supplier, no B-page supplier, no `justified_by`, no
`forward_refs`, and no cycle. `node tools/manifest-deps.mjs` reports
17 items, 0 errors; `node tools/item-dependency-levels.mjs check --run
frontier-38-owner-30` reports no batch-10 error (the run-wide failures it
prints are other batches' empty and mislabelled inventories).

Supplier interfaces were opened and read, not inferred from page membership:
`def-locally-compact-space` (locally compact = compact neighbourhood at every
point), `lem-topological-group-translations-and-inversion`,
`thm-ascoli-arzela-sufficiency` and
`cor-equicontinuous-families-into-a-compact-metric-target` (both assume AC and
a metric target), `thm-tychonoff` (AC), `lem-pointwise-closure-preserves-
equicontinuity`, `lem-compact-open-and-pointwise-topologies-agree-on-an-
equicontinuous-family`, `def-equicontinuity-on-a-topological-domain-and-
pointwise-relative-compactness`, `thm-closed-subspace-of-a-compact-space-is-
compact`, `lem-closed-subgroup-quotient-averaging-and-compact-lifts` (open
quotient map and compact lifts), `thm-quotient-universal-property`,
`thm-real-line-covers-real-line-mod-integers`,
`thm-covering-space-lifting-criterion`,
`thm-convex-subsets-have-trivial-fundamental-group`,
`cor-rn-is-polygonally-connected-and-locally-path-connected` (supplies the
locally path-connected hypothesis of the lifting criterion for the line),
`thm-cauchy-functional-equation-regularity`, the exponential/trigonometric
chain (`def-complex-exponential`,
`thm-complex-exponential-addition-and-real-extension`,
`cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`,
`thm-sine-and-cosine-parametrize-the-unit-circle`,
`thm-sine-cosine-zero-sets-and-fundamental-period`), the published circle
(`def-the-one-dimensional-torus-and-normalized-haar-integral`,
`prop-real-line-mod-integers-is-compact-and-path-connected`), the Fourier
completeness chain (under countable choice), and the `Z/N` arithmetic chain.

## Choice accounting

* `lem-dual-identity-neighbourhood-is-compact` and
  `thm-dual-of-an-lca-group-is-locally-compact-abelian` assume AC (Ascoli
  sufficiency); the statement and strategy name the exact step.
* `lem-dual-homomorphisms-are-continuous-and-functorial` assumes AC only for
  part (b), through the compact-lift theorem for closed subgroup quotients;
  the pullback part (a) is choice-free.
* `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-
  duals` uses AC only through Tychonoff's theorem in direction (2), as its
  statement now says.
* `lem-duals-of-finite-products-and-discrete-direct-sums` is choice-free for
  finite products and uses AC only for the infinite discrete direct sum.
* `ex-pontryagin-dual-of-the-circle-is-the-integers` assumes countable choice
  through the published measure/Fourier items; it says so.
* Items 1, 3, 4, 5, 6, 7, 8, 9 and the other three B examples are choice-free.
* No item consumes a Recorded (`proved_here: false`) result, in particular not
  `rem-lca-group-algebra-and-character-space-external` (FR-16 owns that
  external input); no Foundations path and no `deferred-set-theory` path is
  opened.

## Sources

Three independent treatments were fetched as full text, stamped, and
inspected (coverage carries the `fetch_verified` blocks):

* Dikranjan, *Introduction to Topological Groups* (author lecture notes,
  69 pp.), §§7.1-7.3 read in full (dual topology W(K,U), Example 7.1,
  Theorems 7.2 and 7.14, Lemma 7.5 and 7.12, Example 7.7, Proposition 7.13)
  and §1/§3.1 consulted; this is the recovered alternative for the dropped
  Körner notes.
* Loomis, *Introduction to Abstract Harmonic Analysis*, Ch. VII §§34-35,
  printed pp. 134-140 (34A-34E, 35A-35E) read from the full scan.
* Einsiedler-Ward, *Ergodic Theory with a View Towards Number Theory*,
  Appendix C.1-C.3, printed pp. 429-439, read from the full course text.

Körner, *Topological Groups* (design `Ko §§6-9`) is a documented drop in the
coverage: initial TLS failure plus five retries (four host-path variants and
one aggregator page), two recorded web searches, and an alternative argument
with declared dependencies for each of its three inline results. The drop
waives only the original source, not mathematical coverage; every affected
claim is carried by the three treatments above and by local proofs.

Harvest dispositions across the 66 rows: 39 `included`, 7 `inline`,
3 `already-published`, 10 `deferred`, 7 `out-of-scope`. Every deferral names a
resolvable destination (`pontryagin-duality-for-locally-compact-abelian-groups`
or `bochner-inversion-and-plancherel-on-lca-groups`, both plan-spec pages);
every decline carries its own reason.

## Published defects and uncertainty

No defect was found in an actual prerequisite of this batch: the 40 global
`unproved-on-published` advisories reported by `extcheck` do not intersect the
78-dependency closure. Two honest notes for the owner: (i) the design-cited
Körner text remains inaccessible (documented drop; alternative treatments
used); (ii) Dikranjan proves local compactness of the dual by a
Tychonoff/product-topology route rather than the design's Ascoli/equicontinuity
route; both routes are recorded in the coverage alternatives, and the local
item follows the design's route. No unresolved mathematical uncertainty
remains in the scaffolded statements.

## Checks run (actual results)

* `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-10.pages.json`
  → 17 item(s), 0 missing, 0 errors.
* `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`
  → no batch-10 error (the run-wide output lists only other batches' empty
  inventories and the BGG level mismatches).
* `node tools/step1-decisions.mjs check --run frontier-38-owner-30` → all 17
  batch-10 items closed with hash-current `ready` records (run-wide: 624
  items, 535 ready; the remainder are sibling batches still in flight).
* `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-10.pages.json`
  → 17 scoped item(s), 0 error(s), 0 warning(s).
* `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-10.coverage.json --require-destination`
  → 2 page(s), 66 harvested, 0 errors, 0 warnings.
* `node tools/source-fetch-check.mjs --coverage ... --stamp` → 6/7 sources
  fetch-verified, 7/7 resolved (1 documented drop); check mode afterwards
  passes without network.
* `node tools/url-sweep.mjs --coverage ... --recover --fail-on-dead --out
  /tmp/b10/url-liveness.json` → 3/3 live, 0 failed, 4 citation decisions
  (1 documented drop), written to a scratch path so the shared run artifact
  was not touched.
* `node tools/source-backing.mjs --coverage ... --liveness /tmp/b10/url-liveness.json`
  → 18 authored result(s), all backed by an openable source or a documented
  alternative argument.
* `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (note only:
  289 planned pages still carry no item list).
* `node tools/extcheck.mjs` and `node tools/fwdcheck.mjs --quiet` → OK; the
  batch-10 items declare no unproved and no forward references.
* `node tools/manifest-integrity.mjs --run frontier-38-owner-30` → 60 pages
  owed, 60 present, no scope drift.
* `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`
  → refreshed and deduplicated; batch 10 is a reviewed input with no
  cross-batch edge, matching the empty
  `research/frontier-38-owner-30-batch-10.cross-batch-dependencies.json`.

## Handoff

The pair is scaffolded and READY for owner/operator reconciliation and the
Step-3 authoring review; neither the readiness records nor this note are
independent mathematical approval. No item file was written here: Step 3
authors the 17 items from the manifest contracts, keeping the stated choice
hypotheses, the proper/quotient restrictions and the disclaimers. The engine's
whole-run Step-1 battery still depends on the sibling batches that remain
unscaffolded or unreviewed.
