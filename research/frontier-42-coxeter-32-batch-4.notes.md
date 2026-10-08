# Frontier 42 (Coxeter build) — batch 4 Step 1 notes

**Owner:** beta, batch 4. **Pair:** `real-forms-and-reflection-geometry` /
`real-forms-and-reflection-geometry-examples`, orders 1724/1725, category
`coxeter-groups` (design label CG-01). This file records scaffold decisions and
evidence; Step 3 authors the proofs and owner reconciliation plus the engine
gate follow. Nothing here is mathematical approval.

## Scope, plan and binding inputs

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the binding
`research/frontier-42-coxeter-32-owner-authoring-direction.md`, the batch task
`research/frontier-42-coxeter-32-beta-4.task.md`, the design
`research/plan-coxeter-groups-track.md` §CG-01 (line 133 ff.), the machine
inventory `research/coxeter-scaffold/inventory.json` (CG-01), the definition
bindings `research/coxeter-scaffold/definition-justifications.json` (the three
CG-01 definitions), the independent audit `research/coxeter-scaffold/independent-audit.md`,
`research/coxeter-scaffold/classical-source-report.md` and the canonical-representation
section of `research/coxeter-scaffold/geometric-source-report.md`, the canonical native
A/B page prose `library/coxeter-groups/real-forms-and-reflection-geometry{,-examples}.md`,
the current `research/plan-spec.json`, the batch shells, and the step-1 drift report
(`research/frontier-42-coxeter-32-alpha-step1-drift.md`, verdict no-drift for this page).

The pair is unchanged: order, category, title, companion and the four page `requires` are
exactly the plan's, and the design's `Requires` line matches the plan verbatim:
`coxeter-presentations-exchange-and-reduced-word-theorems`,
`dual-spaces-bilinear-forms-and-inertia`, `sine-cosine-and-the-definition-of-pi`,
`group-homomorphisms-and-the-isomorphism-theorems`. The design section and
`research/plan-spec.json` agree on every pair-level field (id, title, category, order,
companion, requires); **no plan/design conflict was found**. The A manifest carries the
design's six item IDs unchanged; the B manifest carries the three companion items promised
by the design's companion paragraph (positive/Lorentzian/radical reflection matrices; the
null-normal failure; the finite-dihedral-versus-infinite-unipotent rank-two comparison).
No item was added and none was dropped. The owner direction's clauses are respected: the
page keeps its Coxeter Groups home; positivity and faithfulness are explicitly left to
later pages; no complete local proof was replaced by a citation.

## Design / inventory reconciliation (recorded conflicts and route decisions)

1. **Inventory `depends_on` lists versus actual use.** The machine inventory gives all six
   CG-01 items the same `depends_on` list, including
   `thm-hh-parabolic-minimal-representatives-and-length-additivity`,
   `thm-dual-family-is-a-basis-in-finite-dimension` and
   `thm-symmetric-bilinear-forms-have-an-orthogonal-basis` for every item. These are not
   uses of the recorded strategies: no CG-01 item invokes parabolic minimal
   representatives, the dual-basis theorem is used only by
   `lem-cg-dual-action-and-chamber-faces-exist`, and the orthogonal-basis theorem is not
   used at all (the rank-two positive definiteness is the explicit square-sum
   $(x_s-cx_t)^2+\sin^2(\pi/m)x_t^2$, and the $\mathbb R(e_s+e_t)$ radical for
   $m=\infty$ is computed directly). The manifest records the actual use set; the
   inventory's proposed blanket edges are dropped as proof dependencies, not as content.
2. **The one real in-run supplier.** Only `def-hh-coxeter-matrix-word-group-and-length`
   (batch 2, HH-11) is consumed by this pair: for the Coxeter-matrix convention, the
   presented group $W$ and its universal property. This is the in-run prerequisite captured
   by the page `requires`; it is a Step-1 scaffold contract (level 0), so all seven
   cross-batch rows are recorded `open` in
   `research/frontier-42-coxeter-32-batch-4.cross-batch-dependencies.json` and the supplier
   proof is Step-3 authoring work. `thm-hh-parabolic-minimal-representatives-and-length-additivity`
   in particular is **not** used by any CG-01 item.
3. **Design route "diagonalize the finite rotation with angles $2\pi/m$".** Realized as the
   equivalent explicit $2\times2$ computation: the matrix
   $A=\begin{pmatrix}4c^2-1&-2c\\2c&-1\end{pmatrix}$, $\det A=1$,
   $\operatorname{tr}A=2\cos(2\pi/m)$, the Cayley–Hamilton identity
   $A^2=2\cos(2\pi/m)A-I$ and the sine identity
   $A^k=\frac{\sin(2k\pi/m)A-\sin(2(k-1)\pi/m)I}{\sin(2\pi/m)}$; the sine zero set then
   forces $m\mid k$. The case $m=2$ is handled separately ($A=-I$). This is the same
   rotation statement without introducing eigenvalues of non-rational matrices.
4. **Design route "$\rho:W\to\mathrm{GL}(V)$ only after relator verification".** Realized as
   the definition/justifier split of the inventory: the definition item names $\rho$ and the
   universal property, and its `justified_by` lemma proves the relator identities and hence
   existence and uniqueness.
5. **Infinite edge in the chamber lemma.** The design asks to "calculate the dihedral
   chamber tiling and separating-root inequalities for every finite $m$ and the infinite
   case". The orbit of the chamber under the infinite dihedral group cannot tile the plane:
   the functional $f\mapsto f(e_s+e_t)$ is invariant, so the chambers lie in the half-plane
   $\{f(e_s+e_t)\ge0\}$. The lemma therefore states and proves the infinite case as:
   pairwise disjoint chamber interiors, union equal to that closed half-plane, separating
   root hyperplanes, and wall traces on the affine line $\{f(e_s+e_t)=1\}$ being exactly the
   integers. This is exactly Davis's Example D.2.1(i) ("$U$ is the half-plane
   $x_1+x_2\ge0$") and his Lemma D.1.5 Case 1, not a weakening of the design's promise.
6. **Redundant prerequisite advisories.** `validate-plan` reports four `redundant-prereq`
   warnings for this page's declared `requires` array (e.g.
   `group-homomorphisms-and-the-isomorphism-theorems` is already reached through three
   other prerequisites). The array is the owner-approved plan and the drift review left it
   intact; recorded for the owner, no plan edit made.

## Inventory, levels and dependency audit

The A manifest carries 6 items and the B manifest 3. In-run dependency levels
(level = 1 + max level of in-run `deps`; published suppliers do not raise a level, so the
figures include the batch-2 supplier at level 0): 1 for
`def-cg-real-coxeter-form-and-reflection`, 2 for
`lem-cg-reflection-form-invariance-and-rank-two-orders`, 3 for
`def-cg-canonical-reflection-homomorphism`, 4 for
`lem-cg-reflection-representation-descends-and-root-norms`, 5 for
`def-cg-dual-chambers-and-reflection-hyperplanes`, 6 for
`lem-cg-dual-action-and-chamber-faces-exist`, 3 for the two rank-two examples and 2 for
the null-normal example; maximum 6. There are no cycles, no forward page-order edges, no
B-page targets from outside their own B page, and the only cross-batch item target is the
batch-2 supplier above.

Forty-five distinct published/in-run items are cited. I opened each supplier's Statement
and the proof paragraphs its use relies on, and checked hypothesis, direction, convention
and axiom strength. The load-bearing checks actually made:

- **The Coxeter form (A1).** `def-function-space` supplies the real vector space
  $\mathbb R^S$; `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form` fixes the
  radical and nondegeneracy vocabulary and
  `def-definiteness-inertia-and-signature-data-over-the-reals` the real definiteness
  vocabulary the page's warning needs; `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual`
  is the linear bijection between bilinear forms and maps $V\to V^*$ used for
  existence/uniqueness of $B$ from its Gram data on the basis $e_s$.
  `thm-quarter-turn-values-and-shift-formulas` supplies $\cos\pi=-1$ (the diagonal value
  $B(e_s,e_s)=1$).
- **The reflection formula (A2).** Linearity and $r_a^2=\mathrm{id}$ are expanded from the
  formula; form invariance is the four-term expansion recorded in the strategy;
  `thm-rank-nullity` (with `def-rank-and-nullity`, `def-dimension`) gives that
  $\ker B(-,a)$ is a hyperplane; `def-coordinate-column-and-matrix-of-a-linear-map` and
  `thm-matrix-of-a-composite-is-the-product` compute $[r_sr_t]$; the trigonometric inputs
  are `thm-sine-and-cosine-addition-formulas` (double angle, sum-to-product),
  `cor-trigonometric-parity-and-pythagorean-identity` ($1-c^2=\sin^2(\pi/m)$) and
  `thm-sine-cosine-zero-sets-and-fundamental-period` (sine zero set). The direct-sum
  decomposition uses the invertible Gram matrix, `def-internal-direct-sum` and
  `lem-direct-sum-criterion`.
- **Descent and roots (A3, A4).** `def-hh-coxeter-matrix-word-group-and-length` states the
  presentation and its universal property (relators $s^2$ and $(st)^{m(s,t)}$) verbatim; A4
  turns A2's exact orders into the relator verification and uses `def-generated-subgroup`
  for uniqueness. Conjugation $gr_ag^{-1}=r_{ga}$ is checked by substituting
  $B(ga,ga)=B(a,a)$ and $B(g^{-1}v,a)=B(v,ga)$.
- **Dual action and chambers (A5, A6).** `def-algebraic-dual-and-linear-functional` gives
  $V^*$; `def-dual-family-associated-to-a-basis` and
  `thm-dual-family-is-a-basis-in-finite-dimension` give the dual functionals $f_s$ used to
  construct the faces. The finite rank-two tiling route is: the two dual generators are the
  transposed inverse matrices computed in the strategy; $W_{s,t}$ is dihedral of order $2m$
  (A2's exact order $m$ plus the two-involution lemma); the $m$ walls are the fixed lines of
  its $m$ reflections; the roots are the $2m$ equally spaced directions of the dihedral root
  system and all have $\beta_s\beta_t\ge0$, so $C_P^\circ$ meets no wall; the orbit map is
  injective (a rotation fixing $C_P$ is the identity; the swap would be the bisector
  reflection, whose direction $(2m-1)\pi/(2m)$ is not a root direction, so it is not one of
  the $m$ reflections). Counting $|W_{s,t}|=2m$ against the $2m$ sectors gives the tiling,
  simple transitivity and separation. This route was checked numerically for $m=3$ and
  $m=4$ against the explicit matrices. The infinite case is Davis's affine-line argument
  (Case 1 of Lemma D.1.5), re-derived directly: the invariant functional
  $f\mapsto f(e_s+e_t)$, the affine line, and the induced action $y_s\mapsto-y_s$,
  $y_s\mapsto2-y_s$ on the slice.
- **Axiom ledger.** No item of this pair uses the Axiom of Choice: $S$ is finite, every
  selection is finite or explicit, and the only infinite-order object is the unipotent
  product, proved without choice from an explicit matrix identity. No choice hypothesis is
  stated or needed, and `def-axiom-of-choice` occurs nowhere in the deps.

## Cross-batch dependencies

`research/frontier-42-coxeter-32-batch-4.cross-batch-dependencies.json` carries seven
`open` rows: one page row (`real-forms-and-reflection-geometry` requires
`coxeter-presentations-exchange-and-reduced-word-theorems`) and six item rows (A1–A6 each
need `def-hh-coxeter-matrix-word-group-and-length` from batch 2: the Coxeter matrix
convention, the presented group $W$ and its universal property). The supplier is an in-run
Step-1 scaffold contract, not a published item, so `open` is the honest status; the Step-3
review resolves these rows. No other in-run supplier is used.

## Source evidence and dispositions

Three independent treatments were downloaded, inspected as full text and stamped with
`source-fetch-check --stamp` on 2026-10-06 (no retrieval failure, so no drop or
alternative-proof record is owed):

| Treatment | Kind | Locator read | Supports |
| --- | --- | --- | --- |
| [Davis, *The Geometry and Topology of Coxeter Groups*](https://people.math.osu.edu/davis.12/davisbook.pdf) — Princeton University Press, author's complete PDF | monograph | §6.12, printed pp. 115–118; Appendix D.1–D.2, printed pp. 439–443 | A1–A6, B1, B3 |
| [Björner–Brenti, *Combinatorics of Coxeter Groups*](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf) — GTM 231 | textbook | §1.2 Example 1.2.7, printed pp. 7–8; §4.2, printed pp. 93–97; §4.9, printed p. 123 | A1, A2, A4, A5, B2, B3 |
| [Lusztig, *Hecke Algebras with Unequal Parameters*](https://arxiv.org/pdf/math/0208154) — revised 2014 text | monograph | §§1.1–1.5, printed pp. 10–12; §1.11, printed p. 14 | A1, A2, A4 |

Stamps: Davis PDF 4 220 570 bytes / 600 pages / sha256-16 `ccefbb950fdcfce9`; Björner–Brenti
PDF 4 320 702 bytes / 370 pages / `ad1e7d9260127bb2`; Lusztig PDF 1 096 504 bytes /
141 pages / `6329366ceac9317c`. `url-sweep --recover --fail-on-dead` over all five existing
run coverage files: 10/10 live, 0 dead.

The coverage file records 26 harvested headings with dispositions: 16 `included` (each
naming a scaffolded item), 3 `inline`, and 7 declined — 5 `deferred` with resolving
destinations of this run (`canonical-roots-signs-and-faithful-reflections` for the
positivity/faithfulness theorems of Davis Theorem D.1.1 and Björner–Brenti
Lemma 4.2.4–Theorem 4.2.7; `tits-cones-chambers-and-parabolic-stabilizers` for the general
Tits cone of Davis §D.2 and Björner–Brenti §4.9;
`coxeter-presentations-exchange-and-reduced-word-theorems` for Lusztig Corollary 1.4 and
Proposition 1.5) and 2 `out-of-scope` with specific reasons (Davis Corollaries 6.12.6 and
6.12.7). No `already-published` row was needed for a result this pair must prove itself.

## Published defects for the canonical ledger

No defect was found in the suppliers this batch consumes. Three observations for the owner,
none of them a defect claim about a consumed supplier:

1. **Blanket inventory dependency lists (advisory).** The machine inventory assigns the
   same `depends_on` list to all six CG-01 items, including items no CG-01 proof uses
   (`thm-hh-parabolic-minimal-representatives-and-length-additivity`,
   `thm-symmetric-bilinear-forms-have-an-orthogonal-basis`). The manifest records actual
   uses; recorded here so the owner can trim the inventory in a later pass if desired.
2. **Redundant prereqs.** See design conflict 6 above; four `redundant-prereq` warnings on
   the page's `requires`, kept because the plan controls.
3. **In-run supplier is a scaffold contract.** `def-hh-coxeter-matrix-word-group-and-length`
   has no item file yet; the seven cross-batch rows are open and depend on batch 2's Step-3
   authoring. This is recorded in the dependency ledger, not a defect.

## Checks and outstanding findings

All commands were run on 2026-10-06. The first pass produced the manifest, coverage,
cross-batch input and notes; a link audit then added three published deps
(`thm-quarter-turn-values-and-shift-formulas` to A1,
`thm-bilinear-forms-correspond-to-linear-maps-into-the-dual` to A2 and
`def-coordinate-column-and-matrix-of-a-linear-map` to A6) that the strategies cite, the
readiness records were written against the final bytes, and every check below was re-run.

- `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` — exit 1 for the live
  whole run; every batch-4 item has a current `ready` record, and the remaining work entries
  are other batches' pages without inventories.
- `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` — exit 1 solely
  on other batches' empty scaffold inventories; no error names a batch-4 item and every
  batch-4 `dependency_level` equals the computed value (maximum 6).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` — exit 0;
  batch 4's seven rows are recorded, no orphaned review, and the unified ledger carries the
  page edge.
- `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` —
  0 missing, 0 errors (59 run items).
- `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json`
  — 0 errors, 0 warnings (59 scoped items).
- `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-4.coverage.json --require-destination`
  — 1 page, 26 harvested results, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json --pages-file <pair page ids>` —
  exit 0; reading order and declared prerequisites are consistent, with the four
  `redundant-prereq` advisories above. A separate script check resolved all 45 distinct item
  deps, verified every one has a home page, and verified every home lies in the transitive
  closure of the page's declared `requires`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-4.coverage.json --stamp`
  — 3/3 sources fetch-verified and stamped.
- `node tools/url-sweep.mjs --coverage <all existing run coverage files> --out research/frontier-42-coxeter-32-url-liveness.json --recover --fail-on-dead`
  — 10/10 live, 0 dead.
- `node tools/source-backing.mjs --coverage research/frontier-42-coxeter-32-batch-4.coverage.json --liveness research/frontier-42-coxeter-32-url-liveness.json`
  — 9 authored results, every one backed by a live, fetch-verified source.

Nothing in this batch is escalated: every item has a complete proof strategy with met
prerequisites. The two modelling risks left for Step 3 are recorded honestly rather than
smoothed over: (i) the finite rank-two tiling step "the roots are the $2m$ equally spaced
directions and all have $\beta_s\beta_t\ge0$" must be derived from the explicit matrices by
the author (verified here numerically for $m=3,4$ and by the general argument via the
rotation of exact order $m$); (ii) all six A items depend on batch 2's not-yet-authored
universal-property item, so their readiness is conditional on that in-run supplier, as the
seven open ledger rows state. The pair uses 9 items against the 100-item cap, and no page
split is needed.
