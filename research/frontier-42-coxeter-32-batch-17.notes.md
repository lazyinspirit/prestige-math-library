# Batch 17 Step 1 scaffold — Finite Reflection Arrangements and Spherical Coxeter Complexes

Run: `frontier-42-coxeter-32` · pair `finite-reflection-arrangements-and-spherical-coxeter-complexes`
(A order 1750, B order 1751, `coxeter-groups`, design label CG-14). Outputs:
`research/frontier-42-coxeter-32-batch-17.pages.json` (3 A + 3 B items), this note,
`research/frontier-42-coxeter-32-batch-17.coverage.json`,
`research/frontier-42-coxeter-32-batch-17.cross-batch-dependencies.json` (61 rows: 59 item + 2 page,
all reviewed) and six item-readiness records `research/frontier-42-coxeter-32-step1-<id>.json`.
This is attempt 2 of the batch: attempt 1 (2026-10-06, 4 h) timed out without writing any artifact;
the empty page shells were the only on-disk state.

## Scope, plan and binding inputs

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md` (read first;
  binding), the design `research/plan-coxeter-groups-track.md` §CG-14 (lines 341–353), the machine
  inventory `research/coxeter-scaffold/inventory.json` (CG-14), `definition-justifications.json`, the
  native A/B prose (`library/coxeter-groups/finite-reflection-arrangements-and-spherical-coxeter-complexes{,-examples}.md`),
  the independent audit `research/coxeter-scaffold/independent-audit.md` and the classical source report
  `research/coxeter-scaffold/classical-source-report.md`. The drift review
  (`research/frontier-42-coxeter-32-alpha-step1-drift.md`, §`finite-reflection-arrangements-and-spherical-coxeter-complexes`)
  records **VERDICT: no-drift**: “No prerequisite gap. The chamber-face triangulation and longest-element
  proofs remain draft obligations.” No plan edge or ordering amendment applies to this pair.
- **Preserved contracts.** The three designed local supplier contracts keep their exact ids, kinds and
  relative order: `def-cg-finite-reflection-arrangement-and-spherical-chambers`,
  `thm-cg-finite-chamber-tiling-and-coset-face-identification`,
  `thm-cg-finite-parabolic-longest-element-and-opposition`, with the definition justifier exactly
  `thm-cg-finite-chamber-tiling-and-coset-face-identification` as recorded in
  `definition-justifications.json`. Their warnings are kept: the identification $V\cong V^*$ by the
  positive definite form is made **only on this page**; the definition asserts no tiling, no face or
  coset identification and no triangulation; the longest-element theorem is stated for arbitrary
  Coxeter systems with the finiteness hypothesis placed where it is actually used ($W$ finite for the
  opposition element, $W_I$ finite for the parabolic longest element).
- **B companion (3 items).** exact ids:
  `ex-cg-circle-coxeter-complex-of-i2-5`, `ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue`,
  `ex-cg-infinite-dihedral-degeneration-versus-davis-complex`), matching the design's B checks
  (circle for $I_2(5)$, sphere for $A_3$ with a proper-parabolic residue, infinite-$W$ comparison).

## Plan-spec comparison and recorded conflicts

`research/plan-spec.json` agrees with the task and design on the pair ids, orders 1750/1751, category
`coxeter-groups`, companion ids and the A page's `requires` (`finite-coxeter-diagrams-and-complete-classification`,
`finite-lattice-projections-and-coxeter-chain-labels`). Its item arrays for these two pages are empty,
exactly as for every other new page of this run, so no item-level plan text can conflict; the design's
local supplier contracts are the item-level authority, and no plan text was edited.
**No design-versus-plan conflict exists.**

### Inventory `depends_on` edges dropped or added (with reasons)

The inventory attaches the same page-level `depends_on` list to the three contracts. Each item's recorded
`deps` is its actual use set:

- **Dropped:** `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` (batch 5) from all three
  items. Nothing in the tiling, the face identification, the triangulation or the longest-element
  argument consumes it; the shelling lemma is consumed by CG-13 (batch 16), and the audited ordinary-edge
  list inherited the inventory's page-level ordering artifact exactly as batch 15 recorded for its own
  dropped edges. The **page-level** `requires` edge to `finite-lattice-projections-and-coxeter-chain-labels`
  is preserved in the manifest (it is a reading-order prerequisite of the plan, and it stays).
- **Rerouted:** `thm-cg-finite-coxeter-classification-including-h-and-dihedral` (batch 13) is not a
  literal `dep` of any item: what the arguments actually consume are its finite-type consequences
  `thm-cg-finite-type-positive-definite-criterion` (1)–(2) and
  `lem-cg-diagram-products-and-invariant-form-comparison` (4), both of which *depend on* the
  classification theorem, so the dependency is transitive and the classification list itself is never
  used. The page-level `requires` edge to the classification page is preserved.
- **Added (transitive closure of the proof route, all already scaffolded):** the batch-9 Tits-cone and
  chamber-collision items, the batch-7 root-sign / inversion / faithfulness items, the batch-2 parabolic
  length item, and the published finite-simplicial-complex, compact-Hausdorff and Heine–Borel suppliers
  needed by the explicit triangulation map. No promise was weakened and no item was added beyond the
  three designed contracts (the proof route closes inside them).

## Dependency levels (in-run only)

Computed with the shared `item-dependency-levels.mjs` logic over the current run manifests; published
suppliers do not raise a level. `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32`
reports **no cycle, dependency or label error naming any batch-17 item**; the only errors it reports are
`empty scaffold inventory` for the pairs of batches 18–32 (and other in-flight batches) that no worker has
built yet, which are outside this batch's scope. The labels written into the manifest are:

| level | item |
|---|---|
| 14 | `def-cg-finite-reflection-arrangement-and-spherical-chambers` |
| 15 | `thm-cg-finite-chamber-tiling-and-coset-face-identification` |
| 16 | `thm-cg-finite-parabolic-longest-element-and-opposition` |
| 17 | `ex-cg-circle-coxeter-complex-of-i2-5` |
| 17 | `ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue` |
| 14 | `ex-cg-infinite-dihedral-degeneration-versus-davis-complex` |

No item depends on a later item of this page or of another page of the run (the definition's
`justified_by` target is its own consumer and is part of its audit closure by design; both records share
one hash).

## Dependency verification (examined, not assumed)

Every declared `deps` target was checked to exist on disk or as an in-run scaffold contract, and its
statement and proof route were read for adequacy (hypotheses, direction, conventions and axiom strength):

- **Batch 13** — `thm-cg-finite-type-positive-definite-criterion` (1)–(2): $W$ finite $\iff B$ positive
  definite, and for positive definite $B$ the map $b(v)=B(v,\cdot)$ is an isomorphism with positive
  definite dual form; `lem-cg-diagram-products-and-invariant-form-comparison` (4): $W$ finite $ \Rightarrow
  B$ positive definite. Both are read with their exact hypotheses; the finite case of the page uses (4)
  directly and the definition uses (1)+(2).
- **Batch 4** — the Coxeter form, reflections and the reflection formula
  (`def-cg-real-coxeter-form-and-reflection`, `lem-cg-reflection-form-invariance-and-rank-two-orders`);
  the canonical representation, root system and reflection set
  (`def-cg-canonical-reflection-homomorphism`, `lem-cg-reflection-representation-descends-and-root-norms`);
  the dual chamber, faces and hyperplanes and their well-definedness
  (`def-cg-dual-chambers-and-reflection-hyperplanes`, `lem-cg-dual-action-and-chamber-faces-exist`).
- **Batch 7** — the inversion set and its elementary identities (`def-cg-geometric-inversion-set`),
  the root-sign/positivity theorem (`thm-cg-root-sign-and-simple-reflection-positivity`), the inversion
  formula and root–reflection dictionary with strong exchange
  (`thm-cg-root-inversion-formulas-and-strong-exchange`), and the root-length criterion with faithfulness
  (`thm-cg-root-length-criterion-and-faithfulness`). Clause references are recorded per item in the
  manifest strategy.
- **Batch 9** — the Tits cone and its topology (`def-cg-tits-cone-and-fundamental-chamber`), the
  finite-negativity criterion, reduction step and convexity
  (`thm-cg-tits-cone-finite-negativity-and-convexity`), the wall/root-hyperplane identification, the
  collision theorem, point stabilizers, intersection rule and strict fundamental domain
  (`thm-cg-dual-chamber-intersections-and-point-stabilizers`), and the interior criterion
  (`thm-cg-tits-cone-interior-and-local-finiteness`) used only by the infinite-dihedral example for
  $0\notin U^\circ$.
- **Batch 2** — the presented group, length function, support of a reduced expression, the intrinsic
  parabolic presentation with restricted length, type $A$ length, and the parabolic longest-element
  supplier `thm-hh-parabolic-minimal-representatives-and-length-additivity`.
- **Published suppliers** — the abstract simplicial complex, its geometric realization, the compact
  Hausdorff realization of a finite complex, the compact-to-Hausdorff homeomorphism theorem,
  Heine–Borel and the metric Hausdorff separation lemma, plus the inner-product/norm and
  connectedness/component items used in the definition and the triangulation.

### Proof-route re-derivations done at scaffold time (no gaps left to Step 3)

- **Face–coset dictionary.** Well-definedness uses that every $u\in W_I$ fixes $\overline{C_I}$ pointwise
  (verified generator by generator with the reflection formula); injectivity uses the collision theorem
  and the fact that $x\in C_I$ has zero set $I$; the containment equivalence is
  $wW_I\subseteq vW_J \iff w\overline{C_J}\subseteq v\overline{C_I}$, re-derived from the intersection
  formula (an earlier draft had this display reversed and was corrected before the readiness records).
- **Intersection formula.** $w\overline{C_I}\cap v\overline{C_J}=w\overline{C_{I\cup J\cup S(v^{-1}w)}}$
  is proved by folding each intersection point to the unique $C$-point of its orbit
  ([[thm-cg-dual-chamber-intersections-and-point-stabilizers]] (3), (4), (6)) plus the support
  characterization of parabolics; no parabolic-intersection theorem is needed.
- **Triangulation.** $\varphi:|K|\to S^{n-1}$ is the simplexwise affine map on the finite coset complex;
  continuity comes from the weak topology (restrictions to closed simplices are affine plus a never-vanishing
  normalisation), injectivity from the partition into relative interiors of faces, and compactness of $|K|$
  with Hausdorffness of the sphere gives a homeomorphism. The construction is choice-free.

## Recorded defects and deferrals

1. **In-run scaffold defect: `lem-cg-dual-action-and-chamber-faces-exist` (batch 4) clause (3)(ii).**
   The item states that for $m(s,t)=\infty$ the chambers $wC_P$ have “union … the closed half-plane
   $\{f:f(e_s+e_t)\ge0\}$”. The correct union is $\{f:\Delta(f)>0\}\cup\{0\}$: every chamber's extreme rays
   are images of the dual-basis rays, whose $\Delta$-value is $1$, so no chamber contains a nonzero point of
   the boundary line, while the boundary rays are limits of chambers. Evidence: the item's own strategy
   (“taking cones over the intervals”), the explicit computation reproduced in
   `ex-cg-infinite-dihedral-degeneration-versus-davis-complex` (ii), and batch 9's
   `ex-cg-tits-cone-of-infinite-dihedral-type` (iii), which correctly computes
   $U=\{f:\Delta>0\}\cup\{0\}$ from the same definitions. Planned repair (owner/cross-batch, not performed
   here): replace the union sentence in the statement and strategy of clause (3)(ii) by the correct union;
   the separation and integer-trace claims of that clause are correct and are the parts other batches use.
   No batch-17 item consumes the defective sentence (the infinite-dihedral example proves the correct
   statement locally), so this pair is not blocked; the defect is routed to the owner for the canonical
   ledger.
2. **Source erratum (non-blocking): Davis, Appendix D.2, Example D.2.1(i).** The sentence “$U$ is the
   half-plane $x_1+x_2\ge0$” for the infinite dihedral group contradicts the same appendix's Lemma D.2.3
   and Corollary D.2.4 (whose proof says “if $W$ is finite, then $E^*=U$”, and whose infinite case uses a
   point of $-\overset{\circ}{C}$ outside $U$), and contradicts the direct computation. The scaffold cites
   the correct clauses and does not use that sentence; the coverage row records this note.
3. **Deferred comparison (valid destination).** The design's B check “compare spherical Coxeter complex
   with the Davis complex for infinite $W$” is only partly local: for $W$ infinite the present page's
   chamber system is not a finite sphere (example (i)–(iv)), but the Davis complex itself is the subject of
   the later pair `spherical-parabolic-cosets-and-the-davis-complex` (order 1768), which requires this page.
   The example states the negative comparison it can prove and names the later page in prose; it declares no
   dependency and no forward reference on it, so nothing planned is treated as published. Disposition:
   **deferred, destination `spherical-parabolic-cosets-and-the-davis-complex`** (a resolvable plan-spec page).
4. **No item-level dependency on batch 5** (see the dropped inventory edge above); the page-level plan
   edge is untouched.

## Sources (full-text verified)

- Michael W. Davis, *The Geometry and Topology of Coxeter Groups*, author-hosted 600-page manuscript,
  `https://people.math.osu.edu/davis.12/davisbook.pdf` — `fetch_verified` 2026-10-07:
  4 220 570 bytes, sha256_16 `ccefbb950fdcfce9`, 600 pages (identical to the file inspected).
  Read for this batch: §4.6 (Lemma 4.6.1–4.6.2), Example 5.2.7 and §5.3, Theorems 6.4.3, 6.6.3 and
  6.12.9 with Lemmas 6.6.4–6.6.6, §6.8, Appendices D.1–D.2.
- Jean Michel, *Lectures on Coxeter groups*, author-hosted 15-page lecture notes,
  `https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf` — `fetch_verified` 2026-10-07:
  268 299 bytes, sha256_16 `94731c97ae760919`, 15 pages. Read: §4.6 (Proposition 4.6), §5 (Lemmas 5.1–5.2,
  Propositions 5.4, 5.8), §§5.10–5.12 (Theorem 5.9, Tits' Lemma 5.11, Lemma 5.12).
- Harvest dispositions: 17 rows in the coverage file — 12 `included` (9 Davis, 3 Michel; landing on the three A
  items and two of the B examples), 2 `inline`, 3 `out-of-scope` with reasons; one row carries the Davis erratum note. There is
  no source drop and no source-resolution record: both URLs resolved and were fully fetched.

## Checks actually run (results as of 2026-10-07)

| check | command (abbreviated) | result |
|---|---|---|
| readiness | `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | 165 items, 155 ready; **zero findings naming any batch-17 item** (remaining findings are `empty scaffold inventory` for unbuilt pages of other batches) |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no cycle/label error naming a batch-17 item; labels recomputed and written |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed; batch 17 reviewed; 61 owned edges, 0 without a review, 0 orphaned rows. The stage gate form `--require-reviewed` still fails **run-wide** because other batches have not yet supplied their inputs; nothing in that failure names batch 17. |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-17.coverage.json --require-destination` | 1 page, 17 harvested results, 0 errors, 0 warnings |
| manifest deps | `node tools/manifest-deps.mjs <all 32 manifests>` | 165 items, 0 missing, 0 errors |
| manifest policy | `node tools/content-policy.mjs --manifest-only <all 32 manifests>` | 165 scoped items, 0 errors, 0 warnings |
| plan | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` | exit 0; page order acyclic and consistent, no unresolved ids among item-listed pages (warnings concern other pages' redundant prereqs) |
| URL liveness | `node tools/url-sweep.mjs --coverage <batch-17 coverage> --out /tmp/... --recover --fail-on-dead` | 2/2 live, 0 failed, 0 recoverable, exit 0 (scoped run; the shared run artifact is produced by the engine gate) |
| source backing | `node tools/source-backing.mjs --coverage <batch-17 coverage> --liveness <scoped sweep>` | every authored result backed; exit 0 |
| fetch stamps | `node tools/source-fetch-check.mjs --coverage <batch-17 coverage>` | 2/2 fetch-verified, 0 drops, exit 0 |
| scope | `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed, 64 in the manifests; no scope drift |
| drift | `node tools/drift-review-check.mjs --run frontier-42-coxeter-32` | 32 pages reviewed, 0 blocked edges, no spec edits |

`extcheck`/`depsource`/`rendercheck` are authoring-stage checks: item carriers do not exist at Step 1
(the engine's own gate comment says to run them after authoring), and the manifest-only policy pass above
is the scaffold-stage external-record check. Unresolved finding carried forward: **none for this pair**;
the two defect notes above are out-of-batch repairs owned by the owner/reconciliation.

## Completion statement

All six items were built once, in prerequisite order, and each has a complete proof strategy with met
in-run prerequisites and a `ready` step-1 record. Engine artifacts for this unit all exist and check clean:
`research/frontier-42-coxeter-32-batch-17.pages.json`, `...-batch-17.coverage.json`, `...-batch-17.notes.md`,
the six `research/frontier-42-coxeter-32-step1-<id>.json` records, and the reviewed consumer input
`research/frontier-42-coxeter-32-batch-17.cross-batch-dependencies.json` (59 item + 2 page rows). This record
is a scaffold readiness statement, not independent mathematical approval; Step 3 authoring and review follow.
