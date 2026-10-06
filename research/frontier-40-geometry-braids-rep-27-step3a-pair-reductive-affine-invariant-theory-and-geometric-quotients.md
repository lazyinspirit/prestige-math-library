# Step 3a dispatch report — `reductive-affine-invariant-theory-and-geometric-quotients`

- Run: `frontier-40-geometry-braids-rep-27` (batch 16, orders 881/882,
  `algebraic-geometry`).
- Pair: A `reductive-affine-invariant-theory-and-geometric-quotients`
  (13 items) / B `...-examples` (4 items); B `requires` is A only.
- Role: alpha scope review of this pair only. No scaffold, item, plan, page,
  manifest or owner record was edited; this report and the `record-scope`
  receipt are the only outputs.
- **Decision: `sufficient`** for the promised subject. Two confirmed
  prerequisite/interface gaps and one source-route uncertainty are recorded in
  §4 for the owner / Step 3b author; none of them omits a design-promised
  topic, so they are recorded as unmet-prerequisite findings rather than as an
  insufficient scope.

## 1. Inputs read

| Artifact | Use |
|---|---|
| `...-batch-16.pages.json` | Full text of both pages: all 17 items (13 A + 4 B), statements, strategies, deps, dependency levels, `requires` (A: AG-ACT-1/2 and AV-18/19/22; B: A only), companion links |
| `...-batch-16.coverage.json`, `...-batch-16.notes.md`, `.../owner-reductive-quotients/{review.md, source-inventory.json, checks.json, readiness-check.json, lie-bridge-candidate.md}` | 8 source rows / 55 harvested results with dispositions; owner Step-1 repair record, retained PDF hashes, check outputs (17/17 ready, 0 escalated) |
| `...-batch-16.cross-batch-dependencies.json` | 4 rows (1 page + 3 item edges) to batch 15, all `open` with compatibility evidence; supplier authored proof pending |
| `research/plan-algebraic-geometry-expansion-track.md` L34, L212 (AG-ACT-3), L293 and `research/plan-spec.json` orders 881/882 | Binding prose design: 4 A rows + 2 B rows + the finite-group-Noether caveat; page fields (kind, category, companion, requires) match the manifest; plan-level `items` are intentionally empty for future pages |
| `research/frontier-40-...-owner-authoring-direction.md`, `...-scope-ledger.json`, `...-planning-notes.md` | Both pages owed; owner preserves complete promised scope, permits required local helpers, permits lower-order in-run pair dependencies only |
| `...-batch-15.pages.json` (AG-ACT-1 scaffold) and `...-batch-17.pages.json` (AG-ACT-4 consumer) | Statements/hypotheses of the 2 direct in-run suppliers; the 6 consumer items that call this pair's four core items |
| `items/*.md` frontmatter and `library/**` page files | Own scripts: link resolution, dep classification, status check, requires-page consumption |
| Owner-retained `brion.pdf` (mutool text extraction of PDF pp. 9–11 = printed pp. 8–10) | Direct check that Brion Thm. 1.23/1.24, Def. 1.25, Prop. 1.26, Ex. 1.27 say what the items claim |

## 2. Design ∶ scaffold comparison (scope only)

All four commissioned A rows are present with their design roles:

| design row | manifest item | design clause covered |
|---|---|---|
| reductive/linearly reductive def | `def-reductive-and-linearly-reductive-over-c` | Brion Defs. 1.20–1.21, Ex. 1.22; char-p boundary |
| complete reducibility + Reynolds | `thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group` | Br. 1.23 (i),(iv),(v); conditional compact averaging |
| finite generation + affine categorical quotient | `thm-invariant-ring-finite-generation-and-affine-categorical-quotient` | Br. 1.24 (i)–(vi) |
| stable-locus geometric quotient | `thm-stable-locus-geometric-quotient` | Br. 1.25/1.26 |
| B: plane example | `ex-gm-quotient-of-affine-plane` (+ helper `lem-invariant-polynomials-of-the-hyperbolic-gm-action-on-the-plane`) | Br. Ex. 1.27(2) |
| B: closed orbit ≠ stable | `cex-closed-orbit-does-not-imply-stability-positive-dimensional-stabilizer` | Br. Ex. 1.27(1), origin restriction |
| B: Noether does not supply the result | `rem-finite-group-noether-theorem-does-not-supply-the-reductive-finiteness-theorem` | design line 212, last sentence |

Nine further A items are run-local proof helpers carrying the design's stated
joints (defs of classical categorical/geometric quotients and stable points;
smoothness of complex groups; orbit dimension/closed orbits; stabilizer
semicontinuity; separation of invariant closed sets; graded Noetherianity;
Reynolds ideal theory; finite-dimensional module finite generation). The
owner-authoring direction explicitly permits required local helpers; every
helper is consumed by a commissioned theorem, so there is no unjustified
scope. Page fields match `plan-spec.json` (order, kind, category, companion,
requires = AG-ACT-1, AG-ACT-2, AV-18/19/22); the B page is a dependency leaf.

Design warnings are preserved in the statements and strategies:
reductive ⇔ linearly reductive over **C only**, with the char-p classification
and SL₂-in-char-2 boundary (Milne 12.55/12.56) and an explicit never-extend
warning; Brion 1.23(ii)→(iii) (existence of a Zariski-dense compact subgroup)
is explicitly **not** claimed — clause (iv) of the bridge theorem is
conditional on a supplied K, and the coverage declares the omitted direction
out-of-scope. The design's source-gate note (Brion leaves the bridge to
Schwarz–Brion Ch. 5, unread) was superseded at Step 1 by the owner: coverage
now rests on an independent local algebraic Lie bridge over published inputs,
with Milne AG 22.41–22.43 as second treatment and Monastir 2.2 / Milne Lie
3.7, 5.20(b) as the local Lie inputs. Every commissioned conclusion is kept;
this substitution is recorded, and whether the local bridge really discharges
the claim is a Step 3b authoring / Step 5–6 review question, not a scope
omission.

## 3. Source coverage, including the declined rows

55 harvested rows. A page (48): 5 `already-published`, 18 `included`, 5
`inline`, 2 `deferred`, 18 `out-of-scope`. B page (7): 4 `included`, 1
`inline`, 1 `deferred`, 1 `out-of-scope`. The `coverage-checklist`
low-yield warning (18/48 "scaffolded") counts only `included` rows; I reviewed
the declines and agree they are deliberate, each with a reason, and none
removes a design-promised subject:

- **Deferred, with exact destinations:** Brion 1.15/1.16 Chevalley +
  homogeneous G/H → AG-ACT-1 (batch 15, this run); Brion 1.28–1.35 projective
  GIT → AG-ACT-4 (batch 17, this run) "which claims nothing projective".
- **Out-of-scope, uncommissioned extras:** Brion Ex. 1.19(1)(2),
  Ex. 1.27(3)–(5) SL_n invariants, the full scalar action, Cor. 1.13(i)
  homomorphism images; Milne Prop. 12.54, Aside 12.58 Haboush/Nagata,
  Cor. 22.44–22.45 tensor products; Dolgachev §3.4 geometric reductivity;
  Monastir tensor-power recognition, classical-group instances, covariant
  modules, nonreduced algebras, converse recognition. Each decline names the
  uncommissioned source result and states that no item asserts it.
- Brion's compact-existence direction (the only genuine source gap in the
  design note) is handled by the conditional clause plus the independent
  bridge; it is not imported and not claimed.

I verified the source locators directly against the retained `brion.pdf`:
Thm. 1.23 and Thm. 1.24 (finite generation, closed images, categorical
universality for affine targets, unique closed orbit per fibre, normality) at
printed p. 8; Def. 1.25 and Prop. 1.26 (stable = closed orbit with finite
isotropy; π(Xs) open, saturated, πs a geometric quotient) at printed
pp. 9–10; Ex. 1.27(1)(2) at printed p. 10. The manifest statements match the
source, including the manifest's deliberate strengthening of universality to
all separated classical targets (Brion states affine targets only).
`source-fetch-check` records 8/8 sources fetch-verified; full PDFs are
retained with raw SHA-256 in `source-inventory.json`.

## 4. Prerequisite audit and unmet-prerequisite findings

My scripts against disk (not the scaffolder's report):

- Direct deps of the 17 items: 64 distinct = 14 in-pair + 2 batch-15 scaffold
  + 48 published, 0 unresolved; all 48 published suppliers carry frontmatter
  `status: published` (0 non-published, 0 `proved_here: false`).
- Transitive closure: 2735 ids = 17 in-pair + 5 batch-15 + 2713 published,
  0 ids absent from `items/` and the run manifests, 0 non-published statuses.
- Every `[[…]]` link in the 17 statements/strategies resolves to a published
  item or to the batch-15 scaffold; no link and no dep points at a
  higher-order batch in this run.
- Page `requires`: AG-ACT-2 `classical-complex-algebraic-actions-and-affine-embeddings`
  is published and 3 of its items are consumed
  (`def-rational-action-on-affine-variety`,
  `thm-coordinate-ring-of-affine-action-is-locally-finite`,
  `thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module`).
  AV-18/19/22 are published; observation (non-blocking): no item in this
  pair's closure consumes any item of the three AV pages — the requirement is
  a page-level graph declaration from the design, and the pair is entirely
  classical/affine.

Findings for the owner / Step 3b author. None of them omits a design-promised
topic, hence they do not by themselves make the scope insufficient.

1. **Confirmed gap — the Lie–Kolchin equivalence in the definition has no
   usable supplier.** `def-reductive-and-linearly-reductive-over-c` says a
   closed subgroup is unipotent "if every non-zero finite-dimensional rational
   U-module has a non-zero U-fixed vector … (equivalently, by the Lie-Kolchin
   theorem, U is unipotent in the standard sense that it admits no non-trivial
   rational characters and all its elements are unipotent)". Required
   prerequisite: the equivalence between the fixed-vector condition and the
   standard sense for closed subgroups of a complex affine algebraic group.
   Evidence of absence: `grep -rli kolchin items/ library/` returns nothing;
   the only scaffold home is batch 18 page
   `unipotent-solvable-groups-and-borel-fixed-points` (order 889 > 881:
   `def-unipotent-algebraic-group`, `thm-unipotent-group-triangular-criterion`,
   `thm-lie-kolchin-for-smooth-connected-solvable-groups`), a **higher-order**
   pair, while the owner direction permits lower-order dependencies only. The
   pair's proofs do not lean on the standard-sense equivalence: the bridge
   strategy re-establishes unipotence of its constructed U from the
   fixed-vector definition using the published solvable-Lie triangularization
   lemma and the stabilizer/dimension argument, and step 8 uses only the
   fixed-vector definition. Recommended owner action: keep the equivalence as
   a sourced parenthetical (Brion Ex. 1.22 cites Lie–Kolchin), or authorize a
   small local helper proving the forward direction actually used; do not add
   a supplier edge to batch 18.
2. **Confirmed interface gap — "principal G_m-bundle" is undefined in the
   algebraic register.** `ex-gm-quotient-of-affine-plane`(iii) states
   πs: Xs → C^× is "a geometric quotient, a principal G_m-bundle", but the
   only principal-bundle definition in `items/` is the topological
   `def-principal-g-bundle-and-associated-fiber-bundle` (topological group,
   locally trivial fiber bundle), and this run's scaffold contains no
   algebraic/classical principal-bundle item. The example's proof already
   exhibits the explicit trivialization (x,y) ↦ (x,xy): Xs ≅ G_m × G_m with
   G_m acting on the first factor, so the claim is true as a trivial bundle.
   Recommended action: phrase (iii) through that explicit product
   decomposition / trivialization, or have the owner authorize a small
   classical definition; the statement's deps currently declare neither.
3. **Uncertainty — source-route substitution carried by owner evidence.**
   The design's completion route (Schwarz–Brion Ch. 5, "that proof was not
   read … source-gated") was replaced at Step 1 by the independent local Lie
   bridge, with Milne AG 22.41–22.43 as the second treatment. I read the
   owner's review/notes/checks and the retained-source inventory, but I did
   **not** re-derive the bridge nor read Milne 22.41–22.43 myself; the owner
   record itself states that Milne's structural inputs are not imported and
   that compact-subgroup existence is neither used nor claimed. Step 3b must
   author the bridge, and Step 5/6 must review it; if the bridge fails review,
   the fallback is the source-gated route, an owner matter.
4. **Open in-run cross-batch edges (expected at 3a, not a gap).** Batch 15's
   `lem-action-map-fibres-and-stabilizer-subscheme` and
   `lem-orbit-map-fibres-and-stabilizer-dimension` (plus the page-level edge
   and one further transitive item) are scaffold-only; the 4 rows in
   `...-batch-16.cross-batch-dependencies.json` are `open` with recorded
   compatibility (closed complex points, separated finite-type X, connected
   smooth G° under AC) pending native authored proofs. Affected A items:
   `lem-orbit-dimension-and-closed-orbits-for-complex-group-actions`,
   `lem-stabilizer-dimension-semicontinuity`. Owner direction requires
   suppliers certified before consumers, so proceed in order 877 → 881.

## 5. Role in the library and non-blocking observations

- Role: the A page is the affine complex invariant-theory core (finite
  generation, affine categorical quotient with the unique closed orbit in
  each fibre, stable-locus geometric quotient) and the design's prerequisite
  of AG-ACT-4 `projective-git-from-linearized-line-bundles` (batch 17), whose
  6 items consume `def-categorical-and-geometric-quotients-of-classical-varieties`,
  `def-stable-points-of-an-affine-action`,
  `thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group`,
  `thm-invariant-ring-finite-generation-and-affine-categorical-quotient` and
  `thm-stable-locus-geometric-quotient` (stable locus, invariant localization,
  full classical universality, AC, exactly as written). Zero published
  consumers today; the B page supplies the boundary examples/cex.
- The manifest's (vi) normality, (iv) closed images/intersections and (v)
  unique closed orbit match Brion 1.24 exactly; (iii) is a scope-preserving
  strengthening recorded above.

## 6. Checks I ran and the receipt

- Own scripts (results in §4): wiki-link resolution for all 17 items; direct
  dep classification; full transitive-closure status scan (YAML frontmatter
  parsed with the repo's `yaml` binding); requires-page consumption;
  plan-spec ∶ manifest field comparison.
- Direct source check with `mutool` on the owner-retained `brion.pdf`
  (printed pp. 8–10): Thm. 1.23, Thm. 1.24, Def. 1.25, Prop. 1.26,
  Ex. 1.27(1)(2) as cited.
- Greps for the §4 findings: `kolchin` (0 hits in `items/`, `library/`;
  scaffold hits only in batch 18) and principal-bundle definitions.
- Owner evidence re-verified on disk: `manifest-deps` 17 items / 0 errors;
  `coverage-checklist` 2 pages / 55 rows / 0 errors / 1 explained warning;
  `source-fetch-check` 8/8; `content-policy` (manifest-only, batches 13–16)
  58 items / 0 errors / 0 warnings; `manifest-integrity` 54/54 pages, no
  scope drift; 17/17 Step-1 readiness receipts ready. These are local checks,
  not independent audits.

Scope decision for the A page: `sufficient`, recorded with findings 1–3 for
the owner / Step 3b author. Owner authority is untouched: any statement
change, helper addition, or supplier edge is the owner's decision; findings
1–2 can be resolved by the author by inline proof/restatement if the owner
accepts that route.
