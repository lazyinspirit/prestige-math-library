# Boundary-row cleanup — batches 13, 14, 15

Run `phase-2-remaining-27`, label `step3b-boundary-13-15`. Scope: the
`boundaries` rows of `research/phase-2-remaining-27-batch-13.proof-contracts.json`,
`...-batch-14.proof-contracts.json` and `...-batch-15.proof-contracts.json`.
Batches 13 and 14 required edits; **batch 15 had no flagged rows and was not
modified at all**.

Every disposition below was written after reading the item's own Statement or
Definition, its Facts block where relevant, and its numbered Proof/Refutation
steps. Scaffold strategies and the previous row text were not used as
mathematical evidence, and no sentence is reused between items.

## Final audit output for the assigned batches

```
$ node tools/boundary-audit.mjs research/phase-2-remaining-27-batch-13.proof-contracts.json \
    research/phase-2-remaining-27-batch-14.proof-contracts.json \
    research/phase-2-remaining-27-batch-15.proof-contracts.json \
    --fail-on-contradicted --fail-on-template
boundary-audit: 1288 rows over 3 contract file(s); 845 marked not_applicable

TEMPLATE REUSE — none at or above 3 members.

CONTRADICTED DISPOSITIONS — none found by the three detectors.

Every line above is a candidate for a human read, not a verdict.
exit=0
```

Per-file strict contract checks, after the edits:

```
proof-contract: 0 error(s), 0 warning(s), 47/47 item(s) checked   (batch 13)
proof-contract: 0 error(s), 0 warning(s), 80/80 item(s) checked   (batch 14)
proof-contract: 0 error(s), 0 warning(s), 34/34 item(s) checked   (batch 15)
```

## Flagged rows fixed

The pre-edit audit of these three files reported **28 template clusters
covering 618 rows and 10 contradicted candidates**; all 10 contradicted rows
were themselves members of those clusters, so the flagged set is 618 distinct
(item, axis) rows — 374 in batch 13 and 244 in batch 14.

* 618/618 flagged rows were rewritten. A `checked` row now names the exact
  discharging step (or the definition clause) and the case it covers; a
  `not_applicable` row names the hypothesis, definition or step that excludes
  the case. Batch 13 additionally had two unflagged boundary rows that were
  still boilerplate and were rewritten with the rest; no unflagged row was
  altered in a way that changes its meaning.
* No `template_review` or `reviewed` escape was used: where a row is
  case-generic, the reason is now an item-specific fact about that item.
* The 10 contradicted candidates (all batch 14; the `empty` rows of
  `def-moore-spaces-and-developments`, `def-normalized-families-and-collectionwise-normality`,
  `thm-moore-spaces-are-subparacompact`, `def-q-sets-and-heath-moore-space-interface`,
  `lem-solovay-almost-disjoint-extension-under-ma`,
  `def-product-measure-extension-axioms-pmea-and-pmea-sigma`,
  `lem-pmea-three-quarter-separation-estimate`, `def-fleissner-hyp-covering-interface`,
  and the two `iff` rows of `def-moore-spaces-and-developments`) were re-read
  against the item text. In every case the axis **does** arise, and the
  definition or proof handles it (the vacuity clause for `I = empty`; `A = empty`
  as a relative `G_delta` set; the empty space absorbed by the `F(alpha,n)` of
  the subparacompactness construction; the `k = 0` cylinder; the decreasing
  normalisation equivalence). Those rows are now `checked` with the specific
  handling named.

### Rows whose status changed (against the pre-edit audit)

* `not_applicable` → `checked`: **73 rows** — the case genuinely arises and the
  item's own text or step handles it (for example: the closed generating loops
  in `cex-irrational-flow-...` and `fs-every-symplectic-action-is-hamiltonian`;
  the single generator `xi = 1` in the one-dimensional `fs-`/`cex-` refutations;
  the "empty" rows of the family/union items listed above; the degenerate
  configurations that the case splits of `lem-ladder-separation-from-hyp`,
  `ex-pmea-three-quarter-event-calculation` and the Moore-space items cover).
* `checked` → `not_applicable`: **86 rows** (81 in batch 13, 5 in batch 14).
  These were rows asserting that a case had been "covered" while crediting no
  step. The batch-14 instances were:
  `def-q-sets-and-heath-moore-space-interface` (nonempty-choice — no selection is
  made by a definition), `thm-fleissner-normal-moore-space-construction`
  (iff-forward/iff-reverse — not a biconditional),
  `thm-moore-spaces-are-subparacompact` and
  `lem-collectionwise-normal-moore-spaces-are-screenable` (one — no
  one-element case is singled out). The batch-13 instances were the
  "The statement is an equivalence; ..." rows on items whose statements are
  one-directional (for instance
  `prop-infinitesimal-generator-of-a-symplectic-action-is-symplectic`,
  `thm-noether-conservation-law-for-hamiltonian-actions`), now replaced by
  item-specific `not_applicable` reasons naming the single claim the proof
  proves.

## Items whose text needs a real boundary case (owner action required)

1. **`lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle`
   (batch 13) — confirmed overstrong converse.** The statement's last sentence
   asserts "`mu` is coadjoint equivariant if and only if `c = 0`" for an
   arbitrary Lie group `G`, while step 4.1 invokes [F9], whose converse
   hypothesis is that `G` is connected; the item assumes only that `M` is
   connected. Counterexample: let `G = Z/2` semidirect `R` act on `R^2` by
   `(eps,t) . (x,y) = (eps x + t, eps y)` with `omega = dx ^ dy`; the Lie
   algebra is abelian, `mu = -y + 1` satisfies the component equations, its
   defect `c` vanishes identically, yet `mu((-1,0).p) = 1 + y` differs from
   `(-1,0).mu(p) = y - 1`. The `iff-reverse` row records this gap explicitly
   (the case arises, so it is `checked`; it is not discharged as stated), and no
   item file was edited. Recommended repair: add "`G` connected" to the
   statement, or conclude equivalence with equivariance under the identity
   component `G^0`, as the companion proposition does. Confidence: confirmed;
   the computation is explicit and checks the item's own definitions.

2. **`lem-pmea-three-quarter-separation-estimate` (batch 14) — statement-level
   qualification.** The conclusion asks for a function `x -> U^x` with
   `U^x` in `U_x` for **all** `x` in `X`, while step 3.1 constructs `U^x` only
   for `x` in the union of the `F_i`; for a point outside that union the
   hypothesis ("whenever `G` is open, `i` in `I` and `x` in `F_i` contained in
   `G`, there is `U` in `U_x` with `U` contained in `G`") is vacuous and permits
   `U_x = empty`, in which case no such function exists. The `degenerate` row
   records this gap. Recommended repair: require `U_x` nonempty for every `x`
   (the intended local-base reading, which the item's own second sentence and
   its consumer `thm-pmea-normal-low-character-spaces-are-collectionwise-normal`
   use), or restrict the asserted assignment to the union of the `F_i`.
   Confidence: confirmed as written; harmless under the intended reading.

Neither item was repaired: the dispatch forbids editing item files, and both
repairs change the item text rather than a boundary row.

## Dispositions that are vacuous but correct under a stated convention

The library keeps the empty manifold on purpose
(`def-topological-manifold-without-boundary`: "The empty space satisfies all
three conditions vacuously, so `M = empty` is an `n`-manifold for every `n`").
Several reduction items can therefore have an empty level
(`thm-marsden-weinstein-meyer-symplectic-reduction`,
`cor-zero-level-symplectic-reduction-and-dimension-formula`,
`prop-dimension-of-a-regular-nonzero-reduced-space`,
`prop-reduction-commutes-with-products`,
`thm-reduction-in-stages-for-free-proper-regular-actions`,
`prop-shifting-trick-identifies-reduction-at-alpha-with-zero-reduction`,
`prop-invariant-hamiltonians-descend-to-reduced-hamiltonians`); their `empty`
rows now state the vacuous reading and point at the steps that remain valid.
Note for Step 4 prose: the two dimension formulas are not well-defined for an
empty quotient, because the empty manifold has no designated dimension under
the quoted convention. That is a shared-prose amendment (name a nonemptiness
hypothesis for the level, or state the empty-quotient case), not a boundary-row
defect, and it did not block the dispositions above.

## Checks actually run

* `node tools/boundary-audit.mjs <my three files> --fail-on-contradicted --fail-on-template`
  → exit 0 (output quoted above); also run per file while iterating.
* `node tools/proof-contract.mjs <file> --strict` on each of the three files →
  `0 error(s), 0 warning(s)`, all items checked (the twelve
  `boundary-evidence-unanchored` errors introduced by checked rows that named
  no step or definition word were fixed before the final run; no error remains).
* Merge simulation (read-only, written to `/tmp`; the run-level file itself was
  not touched, and is owned by the serial merger). The run-level file
  `research/phase-2-remaining-27-proof-contracts.json` was last refreshed at
  17:28 while my batch-14 edits were still in progress, so it still carries 6
  pre-edit clusters whose members are exclusively my items (batch 13 is
  current there; the stale rows are late batch-14 rows such as
  `thm-fleissner-hyp-normal-nonmetrizable-moore-space`,
  `thm-ch-normal-nonmetrizable-moore-space`,
  `thm-formal-nmsc-consistency-lower-bound`,
  `thm-normal-moore-implies-inner-model-measurable`,
  `cor-v-equals-l-refutes-normal-moore-space-conjecture`,
  `thm-normal-moore-consistency-strength-sandwich`). The merger
  `tools/merge-proof-contracts.mjs` rebuilds the file from the batch files, so
  a Step-4 re-run picks up the final state. Simulating that re-run — replacing
  only the batch-13/14/15 entries of a `/tmp` copy with the current rows —
  leaves **0 template clusters and 0 contradicted candidates touching batches
  13–15**. The 27 clusters / 553 rows and 7 contradicted candidates that remain
  in the simulation belong to other batches
  (`ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection`,
  `thm-stone-resolvent-formula-for-spectral-projections`,
  `def-chern-classes-from-the-projective-bundle-relation`,
  `def-pontryagin-classes-by-complexification`,
  `def-chern-character-of-a-complex-vector-bundle`); they are sibling scope and
  were neither touched nor adjudicated here.
* Formatting: the contract files were edited in place by a key-preserving
  script (only `status`, `reason`/`evidence` of the addressed rows change;
  `citations`, `derivations`, `routine_steps`, row order and every other key are
  untouched), and each file still round-trips its original indent and trailing
  newline. All three files remain valid JSON and pass `--strict`.

## Handoff

* Completed: every flagged boundary row of batches 13 and 14 (618 distinct
  rows), plus the two additional boilerplate rows in batch 13; batch 15
  verified clean and untouched.
* Open obligations: the two item-text repairs above (owner/Step-4 action), the
  merged-contract re-splice for my batches, and the optional prose amendment
  about empty levels and the dimension formulas.
* No item file, manifest, coverage file, merged run-level contract, sibling
  batch contract, decision ledger or shared ledger was modified.
