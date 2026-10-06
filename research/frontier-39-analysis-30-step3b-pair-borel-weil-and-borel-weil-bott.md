# Step 3b scaffold audit and item authoring — `borel-weil-and-borel-weil-bott`

- Run `frontier-39-analysis-30`, role `alpha-high`, label
  `step3b-pair-borel-weil-and-borel-weil-bott-6a724716efba1d06`; batch 23,
  A order 510.017 / B order 510.018, category `lie-theory`.
- A page: `borel-weil-and-borel-weil-bott`; B page:
  `borel-weil-and-borel-weil-bott-examples`.
- Inputs read: `CLAUDE.md`, `SCHEMA.md`, the RL-9 design
  (`research/plan-representation-theory-lie-track.md`), `plan-spec.json`
  rows 510.017/510.018, batch-23 pages/coverage/notes/cross-batch inputs,
  the Step 3a pair report and receipt, the Step 1 drift note, and the
  published AG supplier page `smooth-projective-serre-duality-and-flag-variety-line-bundles`.
- Owned pair only; no sibling item, published item, shared plan or engine
  state is edited. No owner authoring direction exists for this run.

## Owned IDs (dispatch order)

Level 0: `lem-a-regular-weight-has-a-unique-dominant-dot-translate`,
`lem-lowest-weight-space-is-the-nilradical-invariant-line`,
`lem-sections-of-an-associated-line-bundle-as-equivariant-functions`.

Level 1: `lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety`,
`prop-left-translation-makes-line-bundle-cohomology-a-g-module`.

Level 2: `lem-a-nonzero-dominant-section-is-determined-on-the-big-cell`,
`lem-rank-one-cohomology-shifts-across-a-simple-wall`.

Level 3: `lem-singular-dot-weights-have-zero-line-bundle-cohomology`,
`thm-borel-weil`.

Level 4: `thm-borel-weil-bott`,
`cex-changing-the-line-bundle-sign-dualizes-the-borel-weil-answer`,
`ex-the-sl2-singular-weight-has-no-cohomology`.

Level 5: `prop-borel-weil-bott-is-compatible-with-serre-duality`,
`ex-borel-weil-bott-on-p1-for-sl2`.

Level 6: `cor-borel-weil-bott-euler-character-is-the-weyl-character`,
`ex-the-top-degree-bwb-case-and-serre-duality`.

Level 7: `ex-an-sl3-weight-with-cohomology-in-degree-one`.

17 items total (12 A + 5 B). None had an item file at entry.

## Open obligations at entry

1. Author the 17 item files and both `library/lie-theory/` pages; write the
   batch proof contracts to
   `research/frontier-39-analysis-30-batch-23.proof-contracts.json`.
2. Audit each scaffold statement/strategy against its declared suppliers
   before accepting it; repair local gaps in the manifest where the actual
   proof needs a different or additional dependency, preserving sibling rows.
3. Apply the two Step-3a flagged proof obligations: (a) record the explicit
   one-parameter derivation of the $U^-$-invariance/$\mathfrak n^-$-invariance
   dictionary in `lem-a-nonzero-dominant-section-is-determined-on-the-big-cell`
   and in the counting step of `thm-borel-weil`; (b) add
   `cor-rational-function-no-poles-codimension-one-regular` (with the
   smoothness-to-normality chain) to
   `lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety`
   if the pole argument needs it.
4. **Unfinished in-run suppliers (batch 21, RL-7).** The following five
   suppliers of `cor-borel-weil-bott-euler-character-is-the-weyl-character`
   have no item file yet:
   `thm-weyl-character-formula`,
   `def-formal-character-of-a-finite-dimensional-weight-module`,
   `prop-formal-characters-are-additive-and-multiplicative`,
   `prop-characters-of-finite-dimensional-modules-are-weyl-invariant`,
   `def-weyl-alternation-operator`.
   The corollary will be authored and its decision recorded as `escalate`
   until those suppliers exist and the cited clauses are verified against the
   authored text. Exact consuming steps are recorded in the checkpoint below.
5. Verify the RL-8 page edge
   (`tensor-product-multiplicities-and-littlewood-richardson`) as
   non-load-bearing at item level, or read a batch-22 clause in.
6. Record a Step-3b item decision for each item after the checks, or escalate
   to the owner with exact evidence.
7. Run the explicit-path checks before handoff and report completed IDs,
   checks, added suppliers, published concerns and open obligations.

## Checkpoints

(updated after each item; append only)

### Level 0

- `lem-a-regular-weight-has-a-unique-dominant-dot-translate` — **accept**.
  Authored as scaffolded: unique dominant Weyl translate of a regular weight,
  `N(mu) = l(w)`, the reflection counts `N(s_a mu) = N(mu) -+ 1`, the monotone
  reduced chain and `l(w_0 w) = |Phi^+| - l(w)`; stated choice-free (no AC in
  the statement; deps are the published finite-Weyl and length items). No repair.
- `lem-lowest-weight-space-is-the-nilradical-invariant-line` — **accept**.
  Authored: `dim L(mu)^{n^-} = 1` and it equals the lowest weight space
  `L(mu)_{w_0 mu}`; route through the dual, classification and weights-below
  facts; supplier uses checked step by step. No repair.
- `lem-sections-of-an-associated-line-bundle-as-equivariant-functions` —
  **repaired**. The scaffold's last clause that `ev_1` is *onto* the fibre is
  false when `H^0 = 0`; the statement now says `ev_1` is a `B`-equivariant map
  into the fibre and records the right-action formula `(b·f)(g) = f(gb^{-1})`.
  The section/function dictionary and its naturality are preserved.

### Level 1

- `lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety`
  — **repaired**. The scaffold's codimension-one cells `B s_a B` are wrong for
  the big cell `U^- B`; the proof now uses the opposite-Borel cells
  `U^- n_{s_a} B`, the local-parameter computation for
  `a^{<lambda,alpha^vee>}` on the rank-one subgroups and the pole criterion,
  so a nonzero section exists exactly for dominant `lambda` (no regularity
  needed). Added suppliers: `lem-semisimple-rank-one-sl2-root-homomorphism`,
  `thm-regular-local-ring-is-normal`,
  `thm-regular-local-rings-are-domains-and-cohen-macaulay`,
  `cor-rational-function-no-poles-codimension-one-regular`,
  `def-normal-point-and-normal-variety`. Final pass: the intermediate fibre
  count was corrected to `dim(U^- n_w B) = dim G - l(w)` (fibre dimension
  `l(w)`, trivial torus part); the codimension conclusion is unchanged, and
  the proof-contract entry was regenerated.
- `prop-left-translation-makes-line-bundle-cohomology-a-g-module` —
  **repaired, owner-directed restoration**. Restored the scaffold's rational
  `G`-module clause locally: the universal action on `G×X`, a finite affine
  Čech cover and affine pullback identify the family cohomology with
  `O(G)⊗H^i(X,L_lambda)`, making the action matrix entries regular. Corrected
  the pullback/linearization variance and cocycle, and recorded the action-map
  definition of rationality in the item itself. Added only the published
  affine Čech and affine quasi-coherent module suppliers; no `frontier-40`
  dependency is used. The H^0 function model, naturality, finite-dimensionality,
  differentiation, and tensor/dual equivariance are preserved.

### Level 2

- `lem-a-nonzero-dominant-section-is-determined-on-the-big-cell` — **accept**
  (internally repaired during authoring, statement kept). A `U^-`-invariant
  section satisfies `f(u^-b) = lambda(b)f(1)` and is determined by `f(1)`;
  the equivalence of `U^-`-invariance with `n^-`-annihilation is proved by the
  explicit one-parameter derivation required by the Step-3a observation.
- `lem-rank-one-cohomology-shifts-across-a-simple-wall` — **accept**.
  Authored: `H^i(X,L_lambda) = H^{i+1}(X,L_{s_a·lambda})` for
  `<lambda,alpha^vee> >= -1`, the `n = -1` vanishing clause, and the
  reformulation for `n <= -1`; suppliers are the published relative-`P^1`
  items.

### Level 3

- `lem-singular-dot-weights-have-zero-line-bundle-cohomology` — **repaired**.
  The scaffold equivalence "some positive-root wall iff some simple-root
  pairing vanishes" is false (B_2 witness recorded in the Remarks); the
  statement now uses the *dominant* Weyl translate, and the proof runs the
  monotone chain with the `n = -1` clause. All cohomology of a singular
  `L_lambda` vanishes.
- `thm-borel-weil` — **accept**. `H^0(X,L_lambda) = 0` for non-dominant
  `lambda`; for dominant integral `lambda`, `H^0 = L(lambda)^*` and higher
  cohomology vanishes. Complete reducibility + lowest-weight count + big-cell
  bound + extension lemma for existence; the `n^-`-invariance dictionary is
  explicit. The isomorphism is asserted as `g`-modules only (no unproved
  rational-`G` clause).

### Level 4

- `thm-borel-weil-bott` — **repaired**. The scaffold chain gives only degrees
  `>= l(w)`; the proof now adds the complementary range via Serre duality on
  `L_{-lambda-2rho}` (BWB degree `N - l(w)`), the singular case via the
  wall-crossing vanishing, and the regular case via the monotone reduced
  chain and Borel-Weil at the dominant translate. New suppliers
  `thm-serre-duality-smooth-projective-variety-locally-free-sheaves` and
  `lem-flag-variety-canonical-bundle-weight-minus-two-rho`.
- `cex-changing-the-line-bundle-sign-dualizes-the-borel-weil-answer` —
  **repaired**. Cross-page example suppliers replaced by A-page/published
  suppliers (`thm-cohomology-projective-space-twisting-sheaves`,
  `thm-minimal-parabolic-flag-projection-is-p1-bundle`,
  `lem-flag-line-bundle-degree-on-minimal-parabolic-fibre`,
  `def-projective-line-two-affine-cover-and-twisting-sheaf`); the `SL_2`,
  `m > 0` witness (`O(-m)` has no sections) is preserved.
- `ex-the-sl2-singular-weight-has-no-cohomology` — **repaired**. Cross-page
  example suppliers replaced as above plus
  `thm-serre-duality-smooth-projective-variety-locally-free-sheaves`; the
  wall weight `-omega_1` and total vanishing are preserved.

### Level 5

- `prop-borel-weil-bott-is-compatible-with-serre-duality` — **accept**.
  Authored parts (i)-(iii): regular/singular correspondence of `lambda` and
  `mu = -lambda - 2rho`, Weyl element `w_0 w` of degree `N - l(w)`, the
  matching of `H^{l(w)}(L_lambda)^vee` with `H^{N-l(w)}(L_mu)`, and the
  simultaneous vanishing in the singular case.
- `ex-borel-weil-bott-on-p1-for-sl2` — **repaired**. The three-regime table
  (`m >= 0`, `m <= -2`, `m = -1`) is preserved; suppliers are now A-page
  items, with `dim L(k omega_1) = k + 1` from `thm-weyl-dimension-formula`
  instead of a cross-page example.

### Level 6

- `cor-borel-weil-bott-euler-character-is-the-weyl-character` — **repaired**.
  The scaffold's `ch L(w·lambda)^* = ch L(w·lambda)` is false in rank `>= 2`
  (the `SL_3`, `lambda = omega_1` weight computation is recorded in the
  Remarks). The statement now reads
  `sum_i (-1)^i ch H^i = (-1)^{l(w)} ch L(w·lambda)^* = (-1)^{l(w)} A(-w_0(w·lambda)+rho)/A(rho)`
  and the singular case is `0`. The five batch-21 RL-7 suppliers were read as
  authored drafts and their exact clauses reconciled; the Weyl-invariance
  supplier is no longer consumed.
- `ex-the-top-degree-bwb-case-and-serre-duality` — **repaired**. Cross-page
  examples replaced by the Weyl dimension computation `dim L(rho) = 2^3 = 8`
  and the A-page `A_2` root data; the top-degree case `lambda = -3rho`,
  `H^3 = L(rho)^*` and the perfect eight-dimensional Serre pairing against
  `H^0(L_rho)` are preserved.

### Level 7

- `ex-an-sl3-weight-with-cohomology-in-degree-one` — **repaired** (twice).
  First pass: `dim L(rho) = 8` established by the Weyl dimension formula
  rather than a cross-page adjoint-representation example; the `A_2`
  computation `lambda = s_1·rho = rho - 2alpha_1 = -3omega_1 + 3omega_2` and
  the degree-one conclusion are unchanged. Final pass (consumer
  reconciliation): `[F4]` was misquoting the repaired corollary without the
  dual; it now reads `(-1)^{l(v)} ch L(v·nu)^*`, and a new `[F5]` proves
  `L(rho)^* = L(rho)` from `w_0 rho = -rho` (longest element sends `Phi^+`
  onto `Phi^-`), the dual highest-weight proposition and the highest-weight
  classification. The scaffold statement (Euler characteristic `-ch L(rho)`)
  is thus preserved with a complete argument. Three published suppliers were
  added to the item and the manifest entry (listed below).

## Final pass (continuation of this dispatch)

1. Consumer reconciliation with the changed corollary: `ex-an-sl3-weight-…`
   (exact fix above). This is required because the corollary's Statement was
   repaired in this batch and the example had restated the old formula.
2. Arithmetic repair in `lem-the-borel-weil-section-extends-…` step 1.2
   (exact fix above). The downstream uses (`thm-borel-weil` step 3.1,
   `lem-singular-dot-weights-…`) were rechecked against the corrected
   dimension count; both depend only on the codimension conclusion.
3. `proof-layout.mjs` was re-run once on all 17 changed paths after the last
   edit (17 items, 69 steps, 0 defects); proof-contract entries for the two
   edited items were regenerated.
4. All 17 item decisions were re-recorded after the formatter run with
   confidence 1 and exact dependency lists (6 `accept`, 11 `repaired`); none
   is escalated.

## Checks actually run (all after the last item edit and formatter run)

| check | result |
|---|---|
| `precheck.mts` (17 explicit paths) | 17 checked, 0 failing |
| `rendercheck.mjs` (17 explicit paths) | no errors (links, delimiters, KaTeX, YAML) |
| `proof-layout.mjs` (17 paths, one command) | 17 items, 69 steps, 0 defects |
| `proof-contract.mjs batch-23 --strict` | 0 errors, 0 warnings, 17/17 |
| `citation-fidelity.mjs --fail-on-missing-quote` | no missing quotes; no widening candidates |
| `boundary-audit.mjs` | no template cluster >= 3; no contradicted disposition |
| `manifest-deps.mjs` (batch-23) | 17 items, 0 errors |
| `content-policy.mjs` (batch-23, authored-item mode) | 17 scoped items, 0 errors, 0 warnings |
| `depcheck.mjs --items-file` (the 17 ids) | no finding names an owned item; the tool's global corpus pass reports 30 errors elsewhere (PDE page under construction; `b-leaf-content` rows in other batches) |
| `item-dependency-levels.mjs check --run` | no batch-23 error; three errors are other batches' items |
| `coverage-checklist.mjs batch-23 --require-destination` | 2 pages, 51 results, 0 errors, 1 advisory `coverage-low-yield` (13/37; declines justified row by row) |
| `validate-plan.mjs research/plan-spec.json` | OK |
| `frontier-dependency-ledger.mjs refresh --run` | refreshed; batch-23 rows carry verified evidence |
| `step3-decisions.mjs check --run --phase final` | every batch-23 item closed; `--phase scope` has no batch-23 work row |

Note on `content-policy --manifest-only`: that form is the pre-authoring
"may these ids be minted here?" gate. After authoring it reports
`batch-item-already-exists` for the minted ids because `plan-spec.json`
carries no item lists; the authored-item mode above is the correct
post-authoring gate and is clean.

## Added suppliers

- New A-page items authored as prerequisites: `lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety`
  (existence of the dominant section; the design's row covered only
  uniqueness) and `lem-lowest-weight-space-is-the-nilradical-invariant-line`
  (the `n^-`-invariant line count for `thm-borel-weil`). Both are on the
  assigned A page, registered in the manifest, coverage and contracts, and
  precede their consumers.
- Published suppliers added to `lem-the-borel-weil-section-extends-…`:
  `lem-semisimple-rank-one-sl2-root-homomorphism`,
  `thm-regular-local-ring-is-normal`,
  `thm-regular-local-rings-are-domains-and-cohen-macaulay`,
  `cor-rational-function-no-poles-codimension-one-regular`,
  `def-normal-point-and-normal-variety`.
- Published suppliers added to `ex-an-sl3-weight-…` in this pass:
  `prop-highest-weight-of-the-dual-representation`,
  `def-length-and-longest-element-of-a-finite-weyl-group`,
  `thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`.
- B-item cross-page example suppliers replaced by A-page suppliers (the
  `b-leaf-content` rule): `thm-cohomology-projective-space-twisting-sheaves`,
  `thm-minimal-parabolic-flag-projection-is-p1-bundle`,
  `lem-flag-line-bundle-degree-on-minimal-parabolic-fibre`,
  `def-projective-line-two-affine-cover-and-twisting-sheaf`,
  `thm-weyl-dimension-formula` (an in-run item of another batch).

## Published concerns (exact IDs, evidence, confidence)

1. **Sign convention in the scope ledger and manifest descriptions.**
   The RL-9 scope text and some manifest `description` fields attach
   `C_{-lambda}`/`-lambda` inconsistently with the published definition.
   Source of truth (read): `def-borel-character-equivariant-line-bundle`
   defines `L_lambda = G x^B C_{-lambda}`, and
   `lem-flag-line-bundle-degree-on-minimal-parabolic-fibre` gives
   `L_lambda|_P1 = O(<lambda, alpha^vee>)`. All 17 items follow the
   definition (this is what makes the degree `+<lambda,alpha^vee>` and the
   BWB dual `L(w·lambda)^*` consistent). Confidence: high (definition read).
   Remedy: Step 4 refreshes the ledger/description wording; no proof change.
2. **`prop-left-translation-…` rationality clause.** Owner directed restoration
   of the scaffold's rational `G`-module claim. A product-family Čech argument
   now proves regularity of every finite-dimensional cohomology action directly
   from the algebraic bundle action, with corrected pullback variance and
   published affine-cover suppliers. No frontier-40 dependency is used. The
   owner `proceed` scope receipt (`4aeb144f…`) and `repaired` item receipt
   (`2f5f149a…`) are recorded; the final run check will recheck transitive
   freshness.
3. **Design source-mapping defect (documentation).** The RL-9 design lists
   Etingof 18.755 §27.1 as a Borel-Weil locator; §27 is "Representations of
   `GL_n`" and contains no Borel-Weil theorem. No item or proof uses it.
   Confidence: high (source read). Remedy: Step 4 refreshes the plan locator.
4. **Stale trailer on a published supplier page.** The published page
   `smooth-projective-serre-duality-and-flag-variety-line-bundles` ends with
   "The items are current-run drafts," while all 39 of its items are
   `status: published` (frontier-36, commit `fc59133d5`). Documentation
   only; no consumer depends on it. Remedy: owner updates the trailer.
5. **Cross-page example suppliers removed from B items.** The
   `b-leaf-content` rule forbids B-page items depending on examples-only
   items; the four `ex-*`/`cex-*` items were rewired to A-page suppliers
   (list above). Recorded as a repair, not a defect in the examples.

## Open obligations and watch items

- **Batch-21 RL-7 suppliers are drafts in a sibling pair still under
  construction**: `thm-weyl-character-formula`,
  `def-formal-character-of-a-finite-dimensional-weight-module`,
  `prop-formal-characters-are-additive-and-multiplicative` and
  `def-weyl-alternation-operator` are consumed by
  `cor-borel-weil-bott-euler-character-is-the-weyl-character` (and through
  it by `ex-an-sl3-…`); `prop-characters-of-finite-dimensional-modules-are-weyl-invariant`
  is no longer consumed. Exact consuming clauses are recorded in
  `research/frontier-39-analysis-30-batch-23.cross-batch-dependencies.json`
  and the ledger. If any consumed supplier changes before Step 4, refresh
  the corollary/ex-an-sl3 receipts; the decisions are otherwise current.
- **RL-8 page edge** (`tensor-product-multiplicities-and-littlewood-richardson`,
  batch 22): verified non-load-bearing — no batch-23 item declares any
  batch-22 dependency, so no batch-22 clause is read.
- No item decision is escalated; no owner-held scope or decision was
  touched; no shared/published content outside this pair was edited.

## Handoff

- 17/17 assigned items authored (12 A + 5 B); both pages written
  (`library/lie-theory/borel-weil-and-borel-weil-bott.md`,
  `library/lie-theory/borel-weil-and-borel-weil-bott-examples.md`); batch-23
  manifest, coverage, proof contracts and cross-batch inputs updated
  preserving sibling rows; batch notes carry the bullet-level audit trail.
- All checks in the table above ran after the final edit and the single
  formatter pass; each owned item's decision is recorded at confidence 1.
  External findings (other batches' PDE/`b-leaf-content` rows, sibling level
  declarations) are reported, not hidden, and none is owned by this pair.

## Step 3b continuation: current-hash closure

This continuation supersedes the receipt and open-supplier status above for
the current B23 carriers. The owner proceeded the corrected B23 scope at
`f16aea8b837ba771e38b45dc5f612722e5d823a27b880cae960f594a630e4adb`.
After re-auditing all B23 items supplier-first, **17/17 item receipts are
current and closed**. There are no remaining B23 item blockers.

### Mathematical repairs in this pass

1. `lem-singular-dot-weights-have-zero-line-bundle-cohomology`: changed the
   claim from a nonexistent unique Weyl transporter to the unique dominant
   point in the orbit; the transporting element need not be unique. The
   earlier proof only killed degrees `q >= m` after `m` rank-one shifts. It
   did not justify the low degrees. The repair retains all-degree vanishing:
   use the same chain for `mu = -lambda - 2rho`, observe that the two
   negative-root counts sum to at most `|Phi+| - 1` at a singular weight, and
   apply Serre duality to the complementary low degrees. Direct published
   dependencies for the canonical line and flag dimension/Serre duality were
   added to the item and manifest.
2. `lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety`:
   the rank-one restriction alone did not explain how its vanishing order
   measures the ambient boundary divisor. The proof now records the
   left-`U^-` invariance and right-`B` semi-invariance of the rational big-cell
   function, transports its divisor order along the dense Bruhat orbit, and
   uses the etale rank-one slice at a simple boundary divisor. The dominant
   section existence claim is unchanged.
3. Clarified that the associated-bundle dictionary pairs dual sections by
   fibrewise evaluation, not by taking a pointwise reciprocal. Corrected the
   Serre-compatibility proof to identify both sides with `L(w dot lambda)`;
   its functorial pairing is recorded as equivariant. The sign counterexample
   title and text now distinguish dualizing a line bundle from dualizing its
   global-section space.

The two consumers of the corrected singular-weight statement are both in
B23: `thm-borel-weil-bott` and
`ex-the-sl2-singular-weight-has-no-cohomology`. No item outside B23 in this
run depends on any edited item. The four B21 formal-character/Weyl-character
suppliers were checked current before the B23 Euler-character corollary was
reaccepted.

### Current B23 Step 3b receipts

| Item | Decision | Current composite SHA-256 |
|---|---|---|
| `lem-a-regular-weight-has-a-unique-dominant-dot-translate` | repaired | `33b95e936ab2b3029f0fbdf9988dd374e2a69f24bc7544093a7a121bc92f174b` |
| `lem-lowest-weight-space-is-the-nilradical-invariant-line` | accept | `99b11aef50bda34a73c869e5c9731b94725ef9b16a90e8f6db0d59e5e6b3ce63` |
| `lem-sections-of-an-associated-line-bundle-as-equivariant-functions` | repaired | `b184ca57792905d5547ce3d1ce6fe57400b4b2da00c60a7814e1a6646319e674` |
| `lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety` | repaired | `ad3d2e0418a767ae3112a7a5301b465feddbc51bd3f65f57996df58198598d57` |
| `prop-left-translation-makes-line-bundle-cohomology-a-g-module` | repaired | `62aeabdf0d8683525305094c8053245332c2825f3b43a301ca3ca75748ce4684` |
| `lem-a-nonzero-dominant-section-is-determined-on-the-big-cell` | accept | `616d762f52405f4bf35aa063efe7b8b240e1ae392aa842853e9643ee4350a866` |
| `lem-rank-one-cohomology-shifts-across-a-simple-wall` | accept | `2ae005a1a693cf54d009e3417f2928cb24e06b90f279c4335c94c1232f6ba562` |
| `lem-singular-dot-weights-have-zero-line-bundle-cohomology` | repaired | `27c9f90ef97e97852797122510ba6d02703dcc3d96afe80bf9f0cc215bf1edae` |
| `thm-borel-weil` | accept | `03fc19a22c52f656b2dd4fcb9f7fe4b3e83f6af16d5b0c1571c8361e3c4f120e` |
| `thm-borel-weil-bott` | accept | `cb44d3b4414ff770a8810998d0f7542b4bb3f1d8ea4baa08fa442e8e5fe9b0b4` |
| `cex-changing-the-line-bundle-sign-dualizes-the-borel-weil-answer` | repaired | `e2a4fb5ad9c0e0033507a4b60fb024f50a7c1192bbb5637207adcbab54c4d288` |
| `ex-the-sl2-singular-weight-has-no-cohomology` | accept | `328d40cc53e13d3d56dc19b874c378b288c45a4ca625840cfdeedfed6c2238f3` |
| `prop-borel-weil-bott-is-compatible-with-serre-duality` | repaired | `39830180712d7c96fd45ca3d0d88d7c8e1c0753758bccbb0fc1bab2284c28485` |
| `cor-borel-weil-bott-euler-character-is-the-weyl-character` | repaired | `e2d19b3f333ab9486ea7e2c29d7386aa87ca2f5a65bc2dc49995b3bc6d04fb21` |
| `ex-the-top-degree-bwb-case-and-serre-duality` | repaired | `07040471ca3490742faa45914c1f2a289752e7a898c7e948fb3954e50a84e14a` |
| `ex-an-sl3-weight-with-cohomology-in-degree-one` | repaired | `99492f4b45685d87baa8a077a156a1d92bf0437309ff578ef3c3203b3bf6c62f` |
| `ex-borel-weil-bott-on-p1-for-sl2` | repaired | `a2cdde71d8657b7efb4e46860792fe7316453fbf2aff40e52fb00b1227db89fd` |

### Changed carriers and local checks

- B23 items edited: the associated-section lemma, the big-cell extension
  lemma, the singular-weight lemma, the Borel-Weil–Bott/Serre proposition,
  and the line-sign counterexample.
- Batch-23 carriers synchronized: `frontier-39-analysis-30-batch-23.pages.json`
  and `frontier-39-analysis-30-batch-23.proof-contracts.json`; this pair note
  records the findings and current receipt hashes. Coverage and cross-batch
  dependency content did not need changes.
- Refreshed all 17 `research/frontier-39-analysis-30-step3b-review-<item-id>.json`
  receipts at the hashes above. The B23 owner scope receipt and the stale
  owner `repaired` receipt for `prop-left-translation-makes-line-bundle-cohomology-a-g-module`
  were refreshed by the run owner.
- `node tools/proof-layout.mjs` on the five edited item paths: 5 items,
  21 steps, 0 defects.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-23.proof-contracts.json --strict`:
  17/17 checked, 0 errors, 0 warnings.
- No workflow gates or tests were run in this pair lane.
