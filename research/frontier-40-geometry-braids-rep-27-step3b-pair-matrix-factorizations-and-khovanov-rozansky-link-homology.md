# Step 3b — pair authoring: matrix-factorizations-and-khovanov-rozansky-link-homology

- Run: `frontier-40-geometry-braids-rep-27` (batch 10, orders 763/764, category `braid-groups`)
- Role `alpha-high`; label `step3b-pair-matrix-factorizations-and-khovanov-rozansky-link-homology-d975ad30ec3f99b5`
- A page `matrix-factorizations-and-khovanov-rozansky-link-homology` (15 items) and B page `...-examples` (4 items); both page files authored.
- Report created at entry; this is the handoff record. No self-review, judge or audit stamps were added.

## 1. Completed IDs

A page, in dependency-level order (all authored, each with its manifest entry):

| item | level | kind | steps |
|---|---|---|---|
| `def-bigraded-matrix-factorization-with-potential` | 0 | definition | — |
| `def-arc-and-wide-edge-khovanov-rozansky-factorizations` | 1 | definition | — |
| `def-factorization-of-a-marked-moy-graph` | 2 | definition | — |
| `lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type` | 3 | lemma | 6 |
| `def-chi-zero-and-chi-one-wide-edge-morphisms` | 4 | definition | 5 |
| `def-positive-and-negative-khovanov-rozansky-crossing-complexes` | 5 | definition | 3 |
| `def-khovanov-rozansky-complex-and-trigraded-braid-homology` | 6 | definition | 3 |
| `thm-markings-do-not-change-the-khovanov-rozansky-complex` | 7 | theorem | 3 |
| `lem-khovanov-rozansky-braid-oriented-kink-shifts` | 7 | lemma | 5 |
| `thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-two-a` | 7 | theorem | 5 |
| `thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-three` | 8 | theorem | 5 |
| `lem-khovanov-rozansky-complex-is-invariant-under-braid-conjugation` | 8 | lemma | 3 |
| `thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift` | 9 | theorem | 3 |
| `def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series` | 10 | definition | 3 |
| `thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial` | 11 | theorem | 7 |

B page: `ex-the-khovanov-rozansky-unknot-factorization` (7, 3 steps),
`ex-a-positive-crossing-factorization-complex` (6, 3 steps),
`ex-a-two-crossing-closed-braid-factorization-complex` (7, 3 steps),
`ex-why-the-kr-two-invariance-proof-stays-in-the-braid-diagram-calculus` (10, 3 steps).

Pages: `library/braid-groups/matrix-factorizations-and-khovanov-rozansky-link-homology.md`,
`library/braid-groups/matrix-factorizations-and-khovanov-rozansky-link-homology-examples.md` (both `status: draft`).
Contract: `research/frontier-40-geometry-braids-rep-27-batch-10.proof-contracts.json` (19 scope entries, 41 citations, 63 derivations, 152 boundary rows).

## 2. Checks actually run (with results)

| check | command | result |
|---|---|---|
| format/precheck (explicit paths, 19 items) | `node tools/tsx-run.mjs tools/precheck.mts <19 items>` | **16 checked, 0 failing** (3 definitions have no proof body) |
| proof layout (explicit paths, batched) | `node tools/proof-layout.mjs <19 items>` | **19 items, 63 steps, 0 defects** |
| rendering (items + both pages) | `node tools/rendercheck.mjs <19 items> <2 pages>` | **OK — 21 files**, no KaTeX or YAML errors |
| manifest dependencies | `node tools/manifest-deps.mjs research/...-batch-10.pages.json` | 19 items, 0 missing, 0 errors |
| content policy, item mode (batch) | `node tools/content-policy.mjs research/...-batch-10.pages.json` | 19 scoped items, **0 errors, 0 warnings** |
| content policy, item mode (run) | `node tools/content-policy.mjs research/...-batch-*.pages.json` | 894 scoped items, 238 errors run-wide, **none names a batch-10 item** (all `scope-item-missing` for other batches) |
| coverage | `node tools/coverage-checklist.mjs research/...-batch-10.coverage.json --require-destination` | 1 page, 66 harvested results, 0 errors |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` | exit 0, 894 items across 54 pages, no error names a pair item |
| strict proof contract | `node tools/proof-contract.mjs research/...-batch-10.proof-contracts.json --strict` | **0 errors, 19/19 items checked** |
| citation fidelity | `node tools/citation-fidelity.mjs <batch-10 contract> --fail-on-missing-quote` | exit 0; one widening *candidate* (F2 of `def-khovanov-rozansky-complex-and-trigraded-braid-homology`), reviewed and kept: the restatement does not drop any hypothesis |
| boundary audit | `node tools/boundary-audit.mjs <batch-10 contract> --fail-on-contradicted --fail-on-template` | 152 rows, **no template cluster ≥ 3, no contradicted disposition** |
| finite smoke | `node tools/finite-smoke.mjs <batch-10 contract>` | 0 errors, 0 obligations declared |
| risk report | `node tools/risk-report.mjs <batch-10 contract>` | 19 items routed, 0 errors |
| contract merge (spot) | `merge-proof-contracts` with the then-existing batch-16/19 contracts | batch-10 entries merge without duplicate-item or shape errors; remaining merged errors are batch-16's missing items |
| depcheck | `node tools/depcheck.mjs` | exit 1 run-wide; the only batch-10 rows are the three expected `dep-unresolved`/`link-unresolved` supplier rows of §4 |
| fwdcheck / extcheck / depsource / prosecheck / pathcheck | as in WORKFLOW | extcheck, depsource, prosecheck, pathcheck exit 0 with no batch-10 finding; fwdcheck's 77 errors are other batches' forward references (batch-10 rows are the three supplier links of §4) |
| plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 |
| pre-splice state | `node tools/splice-plan.mjs --run ... --verify` | expected pre-splice mismatch only: plan rows 763/764 still carry 0 items vs manifest 15/4; no `requires` disagreement, no duplicate id (reported for Step 4, see §6) |
| Step-3 item decisions | `node tools/step3-decisions.mjs check --run ... --phase final` | 18 accepted, 1 escalated (owner-held), see §4 |

## 3. Dependency, manifest and coverage maintenance

- Manifest `research/...-batch-10.pages.json`: added **direct in-pair deps only** (strengthenings; all pairwise levels still match the tool check): `ex-a-positive-crossing-...` and `ex-the-khovanov-rozansky-unknot-factorization` gained `def-factorization-of-a-marked-moy-graph`; `def-khovanov-rozansky-complex-...` and `thm-khovanov-...-two-a` gained `lem-koszul-...`; `thm-markings-...` gained `def-factorization-...`; `lem-...-kink-shifts` gained `def-chi-zero-...`; `def-normalized-...` gained `def-khovanov-rozansky-complex-...`; `thm-khovanov-rozansky-homology-categorifies-...` gained the eight in-pair items actually consumed by its proof. Statements, titles, kinds and ids are unchanged, so the Step-3a scope hash is unchanged.
- Coverage `research/...-batch-10.coverage.json`: unchanged, all 66 rows keep resolvable destinations.
- Cross-batch input `research/...-batch-10.cross-batch-dependencies.json`: the 4 rows (1 page + 3 item edges into batch 6) were updated in place to name the **actual consumer proof steps** (1.2, 4.2, 5.1) and keep status `open`. No new cross-batch edge was created by authoring.
- Ledger refresh command `node tools/frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27` currently **fails run-wide** on a sibling artifact, reported in §5; the batch input itself is written atomically and was verified by reading it back.

## 4. Open obligations (supplier unfinished)

- Consumer `thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial`, part (3), consuming steps **1.2** (coefficient-ring relations and `phi(l)`, `phi(m)`, `phi(alpha)`), **4.2** (stabilization factors and the recorded v2 source defect) and **5.1** (skein relation, unknot normalization, split-union rule, uniqueness).
- Suppliers, the pair `hecke-markov-traces-and-polynomial-link-invariants` (batch 6, order 751): `def-the-homflypt-coefficient-ring`, `def-homflypt-polynomial-from-the-hecke-markov-trace`, `thm-the-homflypt-skein-relation` — **no item files on disk at handoff** (their manifest statements were read and are recorded in Fact [F10] of the consumer, without wikilinks so the proof contract does not cite missing items).
- The consumer item is fully authored with the open obligation in a `## Remarks` section; its Step-3 decision is **`escalate`** (receipt `research/...-step3b-review-thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial.json`) and remains owner-held until the suppliers land and steps 1.2/4.2/5.1 are reconciled. All 18 other items are `accept` with confidence 1.
- Upstream consumer note: the batch-11 pair (HHH) consumes this A page and this item (`research/...-batch-11.cross-batch-dependencies.json` rows are `open`); they are unaffected by the escalation of the last theorem because they are separately reconciled by batch 11.

## 5. Published and sibling concerns

- Published suppliers consulted: `def-graded-ring-module-bimodule-and-internal-shift`, `def-polynomial-ring-over-a-commutative-ring`, `def-braid-group-by-the-artin-presentation`, `def-closure-of-a-geometric-braid`, `def-markov-conjugation-and-stabilization-moves`, `thm-markovs-closed-braid-equivalence-theorem` (with its declared AC), `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-axiom-of-choice`. No defect found; no consumer change needed.
- Source errata verified at the stamped bytes and recorded in the items, not as library defects: (i) arXiv v2 prints the `chi_0` display for the negative crossing while Figure 6, (6), the IIa proof and the published (13) give the `chi_1`-cone; the published (28)–(30) are internally consistent (re-derived by elimination in the categorification item, step 3.1). No published library item is defective.
- Sibling blocker (not batch 10, reported for the owner): `items/lem-cartan-subgroups-conjugacy-and-density.md` has an unquoted frontmatter `title:` containing a colon, which makes the frontier-dependency-ledger refresh abort with `Nested mappings are not allowed in compact mappings at line 3, column 8: title: Cartan subgroups: conjugacy, density and normalizers`. The batch-10 ledger input is correct; the refresh will resume once that item is fixed.

## 6. Notes for Step 4

- Plan rows 763/764 have empty `items` arrays; splice should insert the 15 A items and 4 B items above. No `requires` change is requested: both page files carry the planned `requires` (`oriented-links-...`, `graded-bimodules-and-tensor-functors`, `hecke-markov-...` for the A page; the A page for the B page).
- No prose amendment to shared plan text is requested; the page summaries are authored in the two page files.
- The pathway placement of the two new pages belongs to the pathway stage (pathcheck currently exits 0; the pages are draft and unplaced).
