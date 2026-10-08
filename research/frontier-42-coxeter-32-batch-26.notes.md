# Batch 26 — Spherical Parabolic Cosets and the Davis Complex (CG-22)

Run `frontier-42-coxeter-32`; role beta; pair CG-22, orders 1768 (A) and 1769 (B),
category `coxeter-groups`. Outputs written by this batch:

- `research/frontier-42-coxeter-32-batch-26.pages.json` (7 A items, 5 B items)
- `research/frontier-42-coxeter-32-batch-26.coverage.json` (3 sources per page, all fetch-stamped)
- `research/frontier-42-coxeter-32-batch-26.cross-batch-dependencies.json` (39 reviewed edges)
- `research/frontier-42-coxeter-32-step1-<item>.json` (12 readiness records, all `ready`)

## Design, plan and owner direction

`research/frontier-42-coxeter-32-owner-authoring-direction.md` was read before construction.
The design section is `research/plan-coxeter-groups-track.md` L481–495 (CG-22); the
`plan-spec.json` entries for orders 1768/1769 agree with it in title, category, companion,
`requires` list and scope. **No design/plan conflict was found**, so no conflict had to be
recorded; the binding owner direction (richest sound claims, choice branches preserved, local
closure) is respected.

The design lists four A-page contracts. They are scaffolded verbatim as items 1, 4, 5 and 7
of the A page (with the local additions below inserted in dependency order). Three local
additions were necessary for mathematical closure and are **not** scope changes:

1. `lem-cg-spherical-coset-inclusion-and-intersection` (after the definition): Davis
   Theorem 4.1.6(iii) — equality/inclusion/intersection of spherical cosets. Neither the
   design's definition nor any in-run supplier proves it, yet it is used by the face/coset
   bijection, by the gluing intersection condition, by closure finiteness and by the
   chamber-quotient identification.
2. `lem-cg-canonical-cell-exposed-faces-and-normal-cones` (before the design's
   orbit-polytope lemma): the finite-type Coxeter cell theorem (`conv(Wx)`; normal cone at
   `x`; every face exposed; face poset = special cosets) with a self-contained proof. The
   design's lemma applies it to each parabolic subsystem `(W_T,T)`.
3. `lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta` (between the design's two
   theorems): the design's simple-connectivity route explicitly requires "verify its CW
   hypotheses first"; this item supplies the characteristic maps (radial homeomorphism of a
   polyhedral cell with a disk), closure finiteness, the weak topology and the skeleta
   `Sigma^0 = W`, `Sigma^1 = Cayley graph`, `Sigma^2 = Cayley 2-complex`.

The B companion's four constructions (A2 hexagon, B2 octagon, right-angled cube,
universal-Coxeter tree) are items 1–4 of the B page; the residues, compact chamber quotient
and finite-sphere-versus-contractible-Davis-cell comparison are item 5.

## Item inventory (level = step-1 dependency level)

| # | Item | Kind | Level | Deps (in-run only, with batch) |
|---|---|---|---|---|
| A1 | `def-cg-spherical-nerve-coset-poset-and-davis-realization` | def | 7 | b2 ×3, b10 ×1 |
| A2 | `lem-cg-spherical-coset-inclusion-and-intersection` | lem | 13 | A1, b2, b10 |
| A3 | `lem-cg-canonical-cell-exposed-faces-and-normal-cones` | lem | 16 | b4 ×3, b7 ×4, b13 ×1, b17 ×2 |
| A4 | `lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics` | lem | 17 | A1, A3, b2, b6, b10, b13 |
| A5 | `thm-cg-davis-complex-cell-incidence-and-stabilizers` | thm | 18 | A1, A2, A4, b2 ×2, b4 ×2, b6 ×3, b17 ×2 |
| A6 | `lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta` | lem | 19 | A1–A5, b2 ×2, b4 ×2, b6 gluing definition |
| A7 | `thm-cg-davis-complex-is-simply-connected` | thm | 20 | A1, A6 |
| B1 | `ex-cg-a2-davis-complex-hexagon-and-boundary-circle` | ex | 19 | A1, A2, A4, A5, b2 ×2, b4 ×2, b17 |
| B2 | `ex-cg-b2-davis-complex-octagon-and-boundary-circle` | ex | 20 | A1, A2, A4, A5, A6, b2, b17 |
| B3 | `ex-cg-right-angled-cube-davis-complex` | ex | 19 | A1, A2, A4, A5, b2 ×2, b4 ×3, b13 ×2, b17 |
| B4 | `ex-cg-universal-coxeter-tree-davis-complex` | ex | 20 | A1, A2, A5, A6, b2 |
| B5 | `ex-cg-spherical-residues-chamber-quotient-and-finite-versus-infinite` | ex | 19 | A1, A2, A4, A5, A6, b2, b4 ×3, b17 |

Every item states `deps` explicitly; the A page has 7 items and the B page 5, far inside the
100-item cap. `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32`
reports zero label mismatches for these items (its 22 current errors are the empty page
shells of batches 16, 18–20, 23–25, 27–32, which are in flight elsewhere).

## Mathematical route and the choices made

- **Cells.** For each spherical `T`, `x_T = sum_{s in T} d_s v_s^{(T)}` is the point of
  `V_T` at the prescribed distances `d_s > 0`; `C_T = conv(W_T x_T)` is a compact convex
  polyhedral cell with `0` in its interior and face poset the coset poset of `W_T`
  (A3, A4). The inversion expansion `x - rho(v)x = sum_i 2 d_{s_i} rho(s_1...s_{i-1})e_{s_i}`
  is proved from the root-length criterion and the inversion formula; the expansion is a
  nonnegative combination of positive roots, which yields both the normal-cone inequality
  for `y in C` and, with the point stabilizer clause of the finite-type tiling theorem, the
  exact maximizer set `W_{S(y)}`. Face exposure is proved **without the Axiom of Choice**:
  a face `F` equals `conv((Wx) cap F)`, the disjoint compact convex sets `F` and
  `conv((Wx)\F)` have positive distance, and the nearest-point variational inequality
  produces a strictly separating functional. The polyhedral-cell description
  `P = {v : B(wv_s,v) <= d_s for all w,s}` is proved by separation (not assumed).
- **Metric compatibility.** `x_U` is the `B`-orthogonal projection of `x_T`; the complement
  `z_{T,U}` is `W_U`-fixed; `v -> rho(w)(v+z_{T,U})` is a Euclidean isometry onto the face
  `conv(wW_Ux_T)`, and the identity `z_{T,U}+z_{T',T}=z_{T',U}` gives the cocycle condition.
  The face metric of a cell `C_T` therefore depends only on `U` and the `d_s`, `s in U`.
- **Gluing and incidence.** The Davis complex is an isometric polyhedral gluing in the
  sense of `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric`: the intersection
  of two spherical cosets is a single coset of type `T cap T'` (A2(3)), which is exactly the
  meet, and (H1)–(H3) hold because `S` is finite. The b6 chain-metric theorems then give
  metric, topology, completeness and properness of the space; the order complex `|WS|` is
  the barycentric subdivision of the glued complex.
- **Properness.** Deliberately proved from finite incidence, not from finite stabilizers:
  a compact set meets finitely many cells, and for fixed cells `uW_T`, `vW_{T'}` the
  elements `w` with `w(uW_T) cap vW_{T'} != 0` lie in the finite set `vW_{T cap T'}u^{-1}`.
  Point stabilizers are `wW_{T cap S(y')}w^{-1}`, conjugate spherical parabolics (b9 (4)
  plus `W_I cap W_J = W_{I cap J}`).
- **Simple connectivity.** `pi_1(Sigma) = pi_1(Sigma^2)` by the choice-free finite-source
  clause of `thm-cellular-approximation-for-maps-of-cw-pairs`, applied to the finite CW
  pairs `(S^1,*)` and `(D^2,S^1)`. The 2-skeleton is the Cayley 2-complex of
  `W = <S | s^2, (st)^{m_st}>`; a closed edge loop is a word in the normal closure of the
  relators (published `prop-equality-of-words-in-a-presentation`,
  `prop-normal-closure-is-products-of-conjugates`); `s^2`-relators are immediate backtracks
  and `(st)^{m}`-relators bound the polygons, so `pi_1(Sigma^2)=1`. This replaces Davis's
  covering-space argument for `Cay(W,<S|R>)` (book §2.2, Proposition 2.2.3, recorded as the
  source) by an explicit van Kampen-diagram filling; the two facts "pi_1 of a cell complex
  is pi_1 of its 2-skeleton" are supplied by cellular approximation rather than quoted.
- **No Choice is used anywhere in the pair.** All hulls are finite, the separation route is
  the choice-free variational inequality, the cellular approximation is the finite-source
  clause, and no selection over infinite families occurs. No item consumes
  `def-axiom-of-choice`.

## Sources (all fetched as full text and stamped)

Three independent treatments per page; all locators were read in full over the ranges
recorded in `coverage.json`:

1. M. W. Davis, *The Geometry and Topology of Coxeter Groups*, first-edition author
   manuscript, 600 pp. `https://people.math.osu.edu/davis.12/davisbook.pdf`, fetch stamp
   sha256_16 `ccefbb950fdcfce9`. Read: §7.1 pp. 123–126, §7.2 pp. 126–127, §7.3 pp. 128–135
   (Definition 7.3.1, Examples 7.3.2, Lemma 7.3.3 with proof, Proposition 7.3.4, Lemma
   7.3.5), plus Theorem 4.1.6(iii) as quoted in §7.1 and §2.2 pp. 19–20 (Cayley 2-complex,
   Proposition 2.2.3). Not read: Chapters 8–17, Appendices A–G, and the parts of Chapters 4
   and 6 outside the quoted clauses.
2. R. Boyd, *Homology of Coxeter and Artin groups*, PhD thesis, Aberdeen 2018 (corrected).
   `https://www.maths.gla.ac.uk/~rboyd/Boyd%20Thesis%20with%20corrections.pdf`, stamp
   sha256_16 `32d53ca3f9c0fc6a`. Read: §1.3 printed pp. 20–22 in full (Definitions 1.3.1,
   1.3.3, 1.3.4, Lemma 1.3.2, Example 1.3.5, the action paragraph), Lemma 1.2.13, §1.1 for
   the presentation conventions. Chapters 2–4 only at heading level (disposed out of scope).
3. M. W. Davis, *The Geometry and Topology of Coxeter Groups*, MSC lecture slides (2013),
   19 pp. `https://people.math.osu.edu/davis.12/papers/Davis-MSC.pdf`, stamp sha256_16
   `aecaecc666d60d38`. Read: the slides on the second realisation `Sigma` (cells, skeleta,
   Coxeter zonotopes, the dual construction `K = |S|`, `Sigma = U(W,K)`, properties and
   CAT(0) remarks). The slides are a survey; they support statements and examples only, and
   every proof use is routed through the book or the local items.

Every harvested heading in the read range has a disposition in `coverage.json`
(`coverage-checklist`: 2 pages, 50 harvested results, 0 errors, 0 warnings). The only
deferral with a destination is Moussong's CAT(0) metric/contractibility of `Sigma`, deferred
to the planned page `davis-cat-zero-geometry-and-finite-subgroup-fixed-points` (CG-27), which
is exactly the design's split. `source-backing`: all 15 `included` results are backed by an
openable source. `url-sweep` on this coverage: 3/3 URLs live, 0 failed.

## Dependency verification

Supplier statements and proof strategies were read in dependency order for every in-run
supplier used: batches 2, 4, 6, 7, 9, 10, 13, 17 (all already scaffolded). The checked
clauses are recorded in the 39 evidence rows of
`research/frontier-42-coxeter-32-batch-26.cross-batch-dependencies.json` (exact consumer,
supplier, required claim, use, and the statement that no mismatch was found in statement,
hypotheses or direction). No missing, circular, forward or inadequate dependency was found:

- every `[[...]]` target in every item body is declared in `deps` or `justified_by`;
- no dependency points at a later page or at a later item of the same page;
- the declared prerequisites of every dependency page lie in the `requires` closure of the
  A page (checked against `plan-spec.json`); no `undeclared-prereq` violation;
- the A page's three in-run page requirements (batches 6, 10, 17) are reviewed as page rows;
  the four published AT requirements are resolved on disk and are not run edges.

`node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` succeeds;
all 39 batch-26 edges carry a review row and there are no orphaned reviews. Its
`unreviewed_batches` list contains only batches other than 26 (16, 19, 20, 23, 25, 27–32),
so the `--require-reviewed` stage gate cannot pass until those siblings land; that is a
run-level condition, not a batch-26 defect.

## Checks run (actual commands and results)

| Command | Result |
|---|---|
| `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | 12/12 batch-26 labels match; only empty-shell errors of other batches (22) |
| `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | all 12 batch-26 records current (`ready`); remaining work belongs to other batches |
| `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-26.coverage.json --require-destination` | 2 pages, 50 harvested, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage ...batch-26.coverage.json --stamp` | 6/6 sources fetch-verified (full text, hashes above) |
| `node tools/source-fetch-check.mjs --coverage ...batch-26.coverage.json` | 6/6 resolved in check mode |
| `node tools/url-sweep.mjs --coverage ...batch-26.coverage.json --out /tmp/... --fail-on-dead` | 3/3 live, 0 failed |
| `node tools/source-backing.mjs --coverage ... --liveness /tmp/...` | 15/15 authored results backed |
| `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | 211 items, 0 errors |
| `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | 211 scoped items, 0 errors, 0 warnings |
| `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed, 64 present, no scope drift |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed; 39/39 batch-26 edges reviewed |
| `node tools/validate-plan.mjs research/plan-spec.json --run frontier-42-coxeter-32` | exit 2: `Empty frontier page bruhat-interval-labels-shellings-and-mobius-functions` (batch 16, in flight); batch-26 pages are populated and the `undeclared-prereq` closure was checked separately with no violation |

`extcheck`, `fwdcheck`, `depcheck`, `depsource` and `precheck` are item-level validators that
resolve manifest ids through authored item files; at Step 1 those files intentionally do not
exist yet, and the engine runs the manifest-only policy and dependency passes instead. They
remain Step-3 obligations.


## Post-recording correction pass (honest record)

Two notational/formula defects were found in the freshly recorded A-page items during a
final read-through and were corrected before hand-off:

- In `thm-cg-davis-complex-cell-incidence-and-stabilizers` (A5) the gluing face isometry is
  `phi^{T,U}_{w^{-1}w'}` from `C_{w'W_U}` into `C_{wW_T}` — the reciprocal index printed first
  was corrected; the quotient argument was made explicit (every simplex is a chamber
  translate, so the quotient is the continuous image of the compact chamber and the induced
  bijection is compact-to-Hausdorff); and the strict-fundamental-domain sentence was given
  its own proof via carrier simplices and the vertex `W_emptyset = {1}`.
- In `lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta` (A6) the radial
  homeomorphism is `psi(x) = x / t_max(x/||x||_B)` with `t_max` the exit parameter of the
  unit ray; the earlier printed formula `x/t_max(x)` maps `C_T` onto itself instead of the
  standard ball. The inverse, continuity and boundary behaviour were re-derived.

Because the readiness hash covers the transitive dependency closure, the edit invalidated
11 of the 12 batch-26 records (all except `lem-cg-canonical-cell-exposed-faces-and-normal-cones`,
which is not in the affected closure); the 11 records were re-recorded from the current
manifest with the same decisions and dependency arrays, and
`node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` now reports no pending
batch-26 item. `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32`
was re-run afterwards; the 39 reviewed edges are unchanged (dependency arrays were not
edited).

## Escalations, defects and unresolved findings

- **No escalation and no cross-batch change is required.** Every prerequisite of the pair is
  either an in-run scaffolded item (batches 2, 4, 6, 7, 9, 10, 13, 17) or a published item
  on disk; the local closure fits the A page.
- **No published defect was found** in the actual prerequisites examined for this pair. In
  particular the three b6 gluing/chain-metric items, the b17 tiling theorem, the b9 point
  stabilizer theorem, and the published CW/cellular-approximation and presentation items
  were read for the clauses used and matched the uses exactly (hypotheses, direction,
  conventions, choice strength).
- Open run-level items (not batch-26 defects): the run-level `validate-plan` and
  `step1-dependency-ledger --require-reviewed` gates cannot close until the remaining
  batches (16, 18–20, 23–25, 27–32) are scaffolded by their owners.
- Two B-page examples and the three B-area items carry `provenance.statement: ai-generated`
  with `generation.role: example`; their computations were verified locally against the
  cited locators. No ai-generated statement is a `deps` target.
- The engine's `status` still lists batch 26 among its "missing" scaffold units because that
  counter is driven by successful engine dispatches, not by the artifacts: the artifact check
  already accepts batch 26 (it is absent from the reported artifact-missing list). Owner/
  operator reconciliation is required to stamp the dispatch, exactly as the brief states; no
  engine state, verdict or shared plan was edited by this batch.
- These records are Step-1 readiness evidence only. They are not independent mathematical
  approval, and the full proofs of all 12 items remain Step-3 authoring and later review
  work; no item file was created by this batch.

## Final re-verification and readiness re-record (worker continuation, 2026-10-07 ~12:35 AEDT)

After this batch's own final manifest edit pass (12:10 local), the twelve
`research/frontier-42-coxeter-32-step1-<id>.json` records written at 11:57 went
stale: the edit applied the two A5/A6 corrections above and added the
definition's `justified_by` ([[lem-cg-spherical-coset-inclusion-and-intersection]],
[[thm-cg-davis-complex-cell-incidence-and-stabilizers]]), both of which change the
recorded item hash. The engine therefore treated the batch-26 artifact set as
absent (the `.scaffold-incomplete` sentinel condition) even though every file was
on disk. Diagnosis: recomputing `itemHash` for each of the twelve items against
the current manifest showed exactly the local manifest edit as the only input
change since recording; no other batch's manifest or any item file in the
transitive closure changed after the record timestamps (checked by mtime against
each record's `at`, and the closure was enumerated through the same
`deps`/`justified_by`/`forward_refs` walk that `itemHash` uses).

Repair: re-recorded all twelve readiness decisions in dependency order with the
same evidence text plus a re-record note, using the declared input set
`deps ∪ justified_by ∪ forward_refs`:

```
node tools/step1-decisions.mjs record --run frontier-42-coxeter-32 --item <id> \
  --decision ready --dependencies <json> --reason <original evidence ...>
```

Results after the re-record (all commands re-run on the current bytes):

| Command | Result |
|---|---|
| `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | 211/211 items ready; **no batch-26 item open**; the 18 remaining open entries are the empty page shells of batches 19, 20, 25, 27–32 (in flight elsewhere) |
| `node tools/autopilot/bin/autopilot.mts status --run frontier-42-coxeter-32 --state-dir .autopilot/frontier-42-coxeter-32` | `artifact missing for 19, 20, 25, 27, 28, 29, 30, 31, 32` — **batch 26 absent**; its "missing" scaffold counter is dispatch-driven and clears when this dispatch exits |
| `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | 0 errors for batch 26; all 22 current errors are other batches' empty page shells |
| `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-26.pages.json` | 12 items, 0 errors |
| `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | 211 scoped items, 0 errors, 0 warnings (whole-level join, as the gate runs it) |
| `node tools/coverage-checklist.mjs ...batch-26.coverage.json --require-destination` | 2 pages, 50 harvested, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage ...batch-26.coverage.json --stamp` | 6/6 fetch-verified (0 newly stamped), 6/6 resolved |
| `node tools/url-sweep.mjs --coverage ... --out research/frontier-42-coxeter-32-batch-26-url-liveness.json --fail-on-dead` | 3/3 live, 0 failed; artifact retained at that path |
| `node tools/source-backing.mjs --coverage ... --liveness ...batch-26-url-liveness.json` | 15/15 authored results backed |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed; batch 26 in `reviewed_batches`; the only batch-26-related edge without a review row is the batch-30 consumer edge `davis-cat-zero-geometry-and-finite-subgroup-fixed-points <- spherical-parabolic-cosets-and-the-davis-complex`, owned by batch 30 |

`validate-plan.mjs --run frontier-42-coxeter-32` still exits 2 at *frontier gate
selection* (`Empty frontier page bipartite-coexeter-elements-and-ordered-root-complexes`,
batch 19, in flight); it never reaches the per-page checks. To avoid recording an
unverified plan claim, checks 1, 4, 5, 6, 7, 15 and 16 of `validate-plan.mjs`
(resolve, b-leaf, intra-order, forward-ref, undeclared-prereq, b-requires-a,
companion/prefix/requires-match) were replicated verbatim against the current
manifests, `plan-spec.json` and `library/` homes for the two batch-26 pages:
**0 hard findings**. Every in-run page reached by an item dependency
(`canonical-roots-signs-and-faithful-reflections`, `coxeter-presentations-...`,
`real-forms-and-reflection-geometry`, `tits-cones-...`,
`finite-coxeter-diagrams-...`, and the seven declared `requires` pages) lies in
the transitive `requires` closure of the consumer page, and all page/dep edges
point to earlier orders. The replica's 39 `orphan` warnings (published dependency
items that no published page lists) are pre-existing corpus warnings, not errors,
and not batch-26 defects.

Two corrected A-page statements were re-read after the edit pass and their
corrections stand: the face isometry index `\varphi^{T,U}_{w^{-1}w'}` in A5 and
the radial map `\psi(x)=x/t_{\max}(x/\|x\|_B)` in A6. The A1 `justified_by` pair
was checked to satisfy the SCHEMA rule that each justifier depends on the
definition through `deps` (A2 and A5 both list A1 in `deps`).

Nothing else changed: the manifest inventory, all `deps` arrays, `dependency_level`
labels, coverage file, source stamps and cross-batch review rows are as recorded
above. These remain Step-1 readiness records, not mathematical approval.
