# Gate cleanup — proof-contract citation errors and fwdcheck forward links

Run `phase-2-remaining-27`. Lane `step3b-cleanup-contracts` (alpha-high).
Dispatch: `research/phase-2-remaining-27-gate-cleanup-contracts.task.md`.
Completed 2026-09-17.

Edit scope actually used: the 70 draft item files named in the two error lists
(69 named by `fwdcheck`, one of them - `thm-dynkin-formula-for-bounded-brownian-
stopping` - also named by `proof-contract`, plus the `proof-contract`-only item
`thm-shelah-universal-meagre-composition-preserves-sweetness`), the per-batch
proof-contract files that carry those items (`batch-1, 4, 8, 9, 10, 12, 15`),
and the regenerated merged file
`research/phase-2-remaining-27-proof-contracts.json`. No manifest, coverage,
scope-decision, page or cross-batch-dependency file was touched. Every edited
item is `status: draft` and carries no judge stamp; no published content was
changed.

## Final gate outputs (after)

| command | result |
|---|---|
| `node tools/merge-proof-contracts.mjs --level phase-2-remaining-27 research/phase-2-remaining-27-proof-contracts.json research/phase-2-remaining-27-batch-{1..15}.proof-contracts.json` | wrote 961 scoped items from 15 batch contracts, exit 0 |
| `node tools/proof-contract.mjs research/phase-2-remaining-27-proof-contracts.json --strict` | **41 errors -> 0 errors**, 8 warnings (pre-existing `shotgun-bracket`), 961/961 items checked, exit 0 |
| `node tools/fwdcheck.mjs --quiet` | **73 errors -> 0**, exit 0 ("OK — every forward reference is declared, ...") |
| `node tools/tsx-run.mjs tools/precheck.mts` | 16023 checked, **0 failing**, exit 0 |
| `node tools/depcheck.mjs` | **26 errors (all `b-leaf-content`) -> 0 errors**, exit 0, "OK — no cycles, all references resolve, no draft items on published pages"; the 26 were the sibling `gate-cleanup-deps` lane's assignment and its re-homing landed while this lane ran; 117 `cited-not-in-deps` warnings unchanged (no new warning from these edits) |
| `node tools/finite-smoke.mjs <merged>` | 0 errors, exit 0 |
| `node tools/risk-report.mjs <merged>` | 0 errors, 961 items routed, exit 0 |
| `node tools/citation-fidelity.mjs <merged> --fail-on-missing-quote` | exit 0 (no missing quote) |
| `node tools/gate-liveness.mjs --run phase-2-remaining-27 ...` | exit 0 (live: proof-contract 961, coverage-checklist 877, precheck 16023) |
| `node tools/boundary-audit.mjs <merged> --fail-on-contradicted --fail-on-template --json` | still fails run-wide on pre-existing template clusters; **not in this lane's error list and not caused here** (see obligations) |
| `node tools/extcheck.mjs`, `rendercheck.mjs`, `prosecheck.mjs`, `depsource.mjs` | all exit 0 |
| `node tools/validate-plan.mjs research/plan-spec.json` | exit 0, page order acyclic |
| `node tools/content-policy.mjs <7 batch pages files>` | 455 scoped items, 0 errors, 0 warnings, exit 0 |

Dispatch-text mismatch (for Step 4): `tools/merge-proof-contracts.mjs` has no
`--run` flag. Its ingress is `--level <level> <output> <batch...>` (the engine's
own helper uses exactly that, `tools/autopilot/stages/mathlib.mts:1467`), so the
merged file was regenerated with the command shown above.

## 1. proof-contract pass (2 items, 41 errors)

### `thm-dynkin-formula-for-bounded-brownian-stopping` (26 errors)

Cause. The owner repair renumbered the proof to `1.1, 2.1, 3.1, 4.1, 5.1`
(the boundary/consistency step became 5.1), while the contract still carried the
pre-repair numbering:

- `citation-use-step-missing`: `F3`, `F6`, `F7` each named missing step `4.2`;
- `citation-use-unmapped`: `F3`, `F6`, `F7` cited by `5.1` but omitted;
- `step-entry-step-missing`: derivation `d4.2` named missing `4.2`;
- `step-unmapped`: `5.1` had no derivation;
- `boundary-evidence-step-missing` (empty, zero, one, degenerate, endpoints,
  nonempty-choice): each named `Step 4.2`.

Fix.

- Regenerated the entry from the item with the sanctioned tool
  `node tools/regen-contract-entries.mjs research/phase-2-remaining-27-batch-8.proof-contracts.json thm-dynkin-formula-for-bounded-brownian-stopping`
  (citations and derivations re-derived from the current step text; the boundary
  rows were preserved and their `Step 4.2` -> `Step 5.1`, 6 rows).
- The item's trailing source note ("Lawler, Sections 2.10 and 3.5, ...") sat
  after the `∎` inside `## Proof`. `numberedProofSteps` absorbs every line after
  the last step opener into that step's block, so step 5.1's token list contained
  `2.10` and `3.5`; a contract cannot name them (naming them is
  `step-entry-input-step-missing`, omitting them is `step-entry-input-omitted`).
  Fix: the note was moved verbatim into a new `## Remarks` section, so the Proof
  section ends at the `∎`. No mathematical text was changed (the sentence is
  word-for-word the same).
- Cross-check: a scan of all 961 scoped items now finds **0 items whose step
  blocks contain a numeric token that is not a real step id**.

### `thm-shelah-universal-meagre-composition-preserves-sweetness` (15 errors)

Cause. The owner repair of Claim 7.6 condition (c) rewrote the proof (the
explicit diagonal, the transfer step, the common-bound clause check) while the
contract kept the pre-repair numbering:

- `citation-use-unmapped`: `F1` cited by `4.5`/`5.2`, `F2` cited by `5.2`,
  `F4` cited by `5.3`;
- `citation-use-not-supported`: `F4` declared at `5.1`/`5.2`;
- `step-entry-input-omitted`: `step-5-1` omitted `4.4`; `step-5-2` omitted
  `F1`,`F2`,`4.2`; `step-6-1` omitted `4.5`,`5.3`;
- `step-unmapped`: `4.5`, `5.3`, `7.1`.

Fix.

- Regenerated the entry from the item with the sanctioned tool (batch 15).
- Two in-item stale proof-step citations were corrected (step addresses only, no
  mathematics touched): 5.3 "the model of steps 3.2 through 5.4" -> "3.2 through
  6.1"; 7.1 "the diagonal of steps 4.5-5.4" -> "4.5-6.1".
  Reasoning for reading the old `5.4` as the current `6.1`: the owner repair's
  ordering after the transfer step (5.3) is the common-bound/equivalence check,
  now 6.1; 7.1 names 5.3 separately in the very same sentence, so `5.4` cannot be
  5.3; and "whose common bound is exhibited and verified clause by clause" is
  exactly what 6.1 does (4.5 exhibits it, 6.1 verifies (i)-(iv)). Confidence:
  high but not absolute - it is a one-token change if the owner reads `5.4`
  differently.

## 2. fwdcheck pass (69 items, 73 links -> 0)

Every error had the shape
`[forward-undeclared] items/<id>.md: wikilink [[<target>]] points forward to <page> (#<order>)`.
Each target is on a page later in reading order than the citing item's page:
`weak-choice-principles-and-sierpinskis-theorem` (#665, 63 links),
`projective-algebraic-sets-projective-morphisms-and-cones` (#366.045, 4),
`singular-cochains-mayer-vietoris-and-smooth-singular-comparison` (#473, 1),
`lie-subgroups-actions-and-homogeneous-spaces-examples` (#494, 1),
`morse-critical-points-hessians-and-indices` (#517, 1),
`the-fundamental-group-of-the-circle` (#295, 1),
`conformal-mapping-branches-and-the-schwarz-lemma` (#325, 1),
`gelfand-theory-and-commutative-c-star-algebras-examples` (#288.082, 1).

Rule applied. The target is present in the citing item's `deps` for 68 of the 69
items, so declaring it in `forward_refs` would immediately trip
`forward-in-deps` (and `forward-on-spine` for the theorem/lemma/definition/
proposition kinds); the dispatch also says a non-load-bearing forward reference
must not be declared. For those items the load-bearing citation was therefore
deleted at its site, and the dependency remains recorded in `deps` (untouched -
`deps` is another lane's field and the cross-batch ledger's business).

What each deletion does and does not do. The removed links were citations of a
later item; the surrounding claims are unchanged and remain true, and the
supplier is still declared in `deps`, so no item lost a prerequisite. In the
"AC bookkeeping" rows the surviving citation is `[[def-axiom-of-choice]]`; in
the compound citation groups the other links survive.

Prose notes for the non-mechanical edits (25 items):

- `def-brownian-generator`, `def-continuous-brownian-ito-process`,
  `def-continuous-time-adapted-process-and-martingale` (2 sites),
  `def-elementary-predictable-brownian-integrand`,
  `def-ito-integral-for-square-integrable-predictable-processes`,
  `def-ito-integral-of-an-elementary-predictable-process`: the link was the
  subject of "the implication bridge ... records the inherited obligations", so
  the sentence was rewritten minimally to "... the countable-choice obligations
  inherited from that interface are declared as dependencies of this item."
  (same claim, dependency recorded, no forward link).
- `lem-zero-set-ultrafilters-and-stone-cech-points` and
  `thm-every-commutative-c-star-algebra-has-an-approximate-unit`: the bare
  parenthetical citation was deleted; the surrounding statement sentence is
  unchanged.
- `thm-existence-of-a-maximal-orthonormal-family`, `thm-banach-stone`,
  `thm-commutative-gelfand-duality`, `thm-locally-compact-gelfand-duality`,
  `thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra`,
  `lem-extreme-points-of-the-dual-ball-of-c-of-k`, `rem-l2-projection-agreement`,
  `thm-density-of-elementary-predictable-processes-in-predictable-l2` (step
  8.1): the link was deleted from its citation group or sentence; no other text
  changed.
- `lem-zero-free-entire-function-of-exponential-type-is-an-exponential` and
  `prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics`: the forward
  link was the first of a two-link citation group; the earlier supplier
  (`thm-local-maximum-modulus-principle`, resp.
  `thm-fundamental-theorem-of-riemannian-geometry`) stays.
- `ex-gelfand-transform-of-ell-one-of-z`, `thm-integral-complex-projective-
  bundle-theorem`, `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-
  section`, `lem-integral-cohomology-ring-of-complex-projective-space-by-splitting`:
  the forward link was the fact's only citation; the fact now carries no body
  citation and its supplier remains in `deps`. These four rows are the clearest
  places for a Step 4/Step 5 reader to check whether the intended supplier should
  instead be re-homed earlier.
- `def-complex-projective-bundle-and-tautological-complex-line`,
  `lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator`,
  `thm-first-chern-class-classifies-complex-line-bundles`: the link was removed
  from a multi-link identification; the Stiefel/Grassmannian suppliers stay.
- `def-zero-set-filter-and-zero-set-ultrafilter` (the one item whose target is
  **not** in `deps`): the link sits in `## Remarks` and is orientation only, so a
  `forward_refs` declaration was *legal* here. It was removed instead, because
  the target (`rem-nagata-cp-theorem-remains-topological`) lives on this page's
  own companion examples page (#288.082): an orientation forward edge from an A
  page to its companion B page is the exact shape the page-level `stack-cycle`
  check treats as a potential cycle (B-page items depend back on the A page), and
  the dispatch says not to declare non-load-bearing forward references. The
  remark now reads "(the neighbouring deferral is recorded as a remark on the
  companion examples page)". Judgement call, recorded deliberately.

Per-item table (error before -> fix):

| item | error before (73 links over 69 items) | fix |
|---|---|---|
| `cex-a-nonadapted-step-integrand-breaks-the-ito-isometry` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `cex-pathwise-riemann-stieltjes-integration-does-not-construct-the-brownian-ito-integral` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `cex-product-measure-ae-equality-is-not-pointwise-equality-of-integrands` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `cex-the-ordinary-chain-rule-fails-for-brownian-motion` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section` | `[[ex-su-two-to-so-three-as-a-covering-homomorphism]]` -> lie-subgroups-actions-and-homogeneous-spaces-examples (#494) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `cor-brownian-filtration-local-martingales-have-continuous-versions` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `cor-brownian-square-martingale` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `cor-deterministic-ito-integrals-are-gaussian` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `cor-exponential-brownian-martingale` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `cor-heat-semigroup-martingale` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `cor-square-integrable-brownian-terminal-variables-have-ito-representations` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `cor-vector-levy-characterization` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `def-brownian-generator` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `def-complex-projective-bundle-and-tautological-complex-line` | `[[def-projective-space-points]]` -> projective-algebraic-sets-projective-morphisms-and-cones (#366.045) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `def-continuous-brownian-ito-process` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `def-continuous-time-adapted-process-and-martingale` | (2 links) `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `def-elementary-predictable-brownian-integrand` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `def-ito-integral-for-square-integrable-predictable-processes` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `def-ito-integral-of-an-elementary-predictable-process` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `def-zero-set-filter-and-zero-set-ultrafilter` | `[[rem-nagata-cp-theorem-remains-topological]]` -> gelfand-theory-and-commutative-c-star-algebras-examples (#288.082) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `ex-brownian-hitting-probability-from-an-exponential-martingale` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `ex-covariance-of-two-deterministic-ito-integrals` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `ex-expected-exit-time-from-an-interval-via-ito-formula` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `ex-exponential-martingale-and-a-brownian-tail-bound` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `ex-gelfand-transform-of-ell-one-of-z` | `[[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]` -> the-fundamental-group-of-the-circle (#295) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `ex-harmonic-functions-of-planar-brownian-motion` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `ex-integral-of-a-deterministic-step-function-against-brownian-motion` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `ex-integral-of-brownian-motion-against-itself-preview` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `ex-integral-of-the-indicator-of-a-stopping-interval` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `ex-ito-formula-for-brownian-powers` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `ex-logarithm-of-geometric-brownian-motion` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `ex-time-changed-quadratic-variation-of-an-ito-integral` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator` | `[[def-projective-space-points]]` -> projective-algebraic-sets-projective-morphisms-and-cones (#366.045) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `lem-cross-ito-isometry` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `lem-elementary-ito-integral-is-independent-of-the-step-representation` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `lem-extreme-points-of-the-dual-ball-of-c-of-k` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `lem-integral-cohomology-ring-of-complex-projective-space-by-splitting` | `[[def-projective-space-points]]` -> projective-algebraic-sets-projective-morphisms-and-cones (#366.045) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `lem-zero-free-entire-function-of-exponential-type-is-an-exponential` | `[[thm-unit-disc-schwarz-lemma-with-rigidity]]` -> conformal-mapping-branches-and-the-schwarz-lemma (#325) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `lem-zero-set-ultrafilters-and-stone-cech-points` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics` | `[[def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian]]` -> morse-critical-points-hessians-and-indices (#517) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `rem-l2-projection-agreement` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `thm-banach-stone` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `thm-brownian-filtration-martingale-representation` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-commutative-gelfand-duality` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `thm-density-of-elementary-predictable-processes-in-predictable-l2` | (2 links) `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-doob-maximal-bound-for-the-ito-integral` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-dynkin-formula-for-bounded-brownian-stopping` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-every-commutative-c-star-algebra-has-an-approximate-unit` | (2 links) `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `thm-existence-of-a-maximal-orthonormal-family` | (2 links) `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `thm-first-chern-class-classifies-complex-line-bundles` | `[[def-projective-space-points]]` -> projective-algebraic-sets-projective-morphisms-and-cones (#366.045) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `thm-integral-complex-projective-bundle-theorem` | `[[cor-singular-cohomology-is-homotopy-invariant]]` -> singular-cochains-mayer-vietoris-and-smooth-singular-comparison (#473) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `thm-integration-by-parts-for-brownian-ito-processes` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-ito-formula-one-dimensional` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-ito-integral-process-has-a-continuous-martingale-version` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-ito-isometry-and-linearity-in-predictable-l2` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-ito-isometry-for-elementary-integrands` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-levy-characterization-of-brownian-motion` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-localized-ito-integral` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-locally-compact-gelfand-duality` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | link deleted at its citation site (see the prose notes above); `deps` entry untouched |
| `thm-multidimensional-ito-formula-for-brownian-driven-processes` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-quadratic-covariation-of-brownian-ito-processes` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-quadratic-variation-of-an-ito-integral` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-space-time-harmonic-functions-yield-brownian-local-martingales` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
| `thm-stopping-an-ito-integral` | `[[thm-choice-implies-dependent-implies-countable-choice]]` -> weak-choice-principles-and-sierpinskis-theorem (#665) | deleted the trailing AC-bookkeeping citation (the `[[def-axiom-of-choice]]` citation stays; the dependency stays in `deps`) |
## 3. Contract reconciliation (the two passes meet in the same files)

Deleting a body citation invalidates the matching contract citation entry
(`citation-source-not-in-fact`), and editing a cited Definition can invalidate
somebody else's recorded quote (`citation-quote-mismatch`). After the item edits
the strict gate reported 65 such errors; all were repaired in the per-batch
contracts (the merged file is regenerated from them):

- **59 stale `citations` entries deleted**, each one a `(fact, source)` pair whose
  fact no longer links that source: the removed forward citations of section 2,
  in batches 1, 4, 8, 9, 10, 12. No other key of any contract entry was touched.
- **6 quotes refreshed** in batch 8, all of them quoting Definition sections this
  lane had edited: `thm-dynkin-...` F1 -> `def-continuous-brownian-ito-process`,
  F1 -> `def-elementary-predictable-brownian-integrand`,
  F4 -> `def-ito-integral-for-square-integrable-predictable-processes`,
  F5 -> `def-continuous-time-adapted-process-and-martingale`, and
  `thm-density-of-elementary-predictable-processes-in-predictable-l2`
  F1 -> `def-elementary-predictable-brownian-integrand`,
  F1 -> `def-ito-integral-of-an-elementary-predictable-process`. The two
  entries of the last two items were then regenerated with
  `regen-contract-entries.mjs`, so their quotes are the full current statement
  sections; no quote in the merged file fails `proof-contract --strict` or
  `citation-fidelity --fail-on-missing-quote`.
- Independent check: after the edits a scan over all 961 scoped items reports 0
  items with dangling step tokens, and `proof-contract --strict` reports
  961/961 entries checked with 0 errors, so every fact link has a contract and
  every contract entry matches a real fact link.

Files rewritten by this lane: `research/phase-2-remaining-27-batch-1, -4, -8,
-9, -10, -12, -15 .proof-contracts.json` and the regenerated
`research/phase-2-remaining-27-proof-contracts.json`. (Those batch files are
untracked working files of this run; the JSON writer normalises indentation.)

## 4. Judgement calls, uncertainty and honesty notes

1. `5.4 -> 6.1` in `thm-shelah-universal-meagre-composition-preserves-sweetness`
   is an inference from the owner-repaired step order, not from a surviving
   pre-renumbering copy: no copy of the pre-renumber text exists in the repo
   (`git log` shows the file only in `87ee9eb6c`; no snapshot, no dispatch log
   carries it). The two candidate readings and why 6.1 was chosen are recorded in
   section 1. The owner can reverse it with a one-token edit.
2. `thm-dynkin-...`: moving the trailing source note into `## Remarks` is a
   structural edit (Proof -> Remarks), made because the contract gate cannot
   cover a step block that contains the locator "Sections 2.10 and 3.5" - naming
   `step 2.10` is an error and omitting it is an error. The note's text is
   unchanged. Pre-existing typo left in place: step 5.1 reads "bounded gradie nt
   and Hessian".
3. For the 68 in-`deps` forward links, deleting the body link is the dispatch's
   sanctioned remedy, but it does lose a reader-visible pointer: the item's
   `deps` still names the supplier, the body does not. This is the correct
   mechanical state, but the underlying fact - the spine of the library resting
   on a page that comes later in reading order - is a planning-level issue this
   lane could not fix (see obligation 1 below).
4. No mathematical claim was changed anywhere: the edits are citation removals,
   step-address corrections, one moved source note, and the local sentence
   rewrites listed in section 2. Where a fact lost its only body citation
   (four items), the claim itself is unchanged.
5. I did not verify the mathematics of the two repair targets. The proof-contract
   pass only re-derived the contract from the item as written; the Shelah item
   remains the item the owner repaired under
   `research/phase-2-remaining-27-step3b-owner-thm-shelah-universal-meagre-composition-preserves-sweetness.json`
   and the Step-5 reader/refuter passes still owe it an independent read
   (its sibling pair report lists the condensed steps 8.1/3.2/4.1 of the
   neighbourhood as first targets; the composition item itself is no longer
   listed as escalated there).

## 5. Open obligations and observations for Step 4 / the owner

1. **Forward `deps` on the spine (structural, not fixable here).** 71 draft
   items in this run declare `thm-choice-implies-dependent-implies-countable-
   choice` (#665) and (4 more) items on #366.045/#473/#494/#517 in `deps` while
   living on earlier pages. The citations are now gone, the `deps` edges are not.
   Step 4/owner reconciliation should decide whether the choice item belongs
   earlier in the reading order, or whether these dependents should declare the
   implication as a load-bearing `forward_refs` entry (legal only for
   corollary/example/counterexample/remark kinds and only after the `deps` entry
   is dropped - a deps/cross-batch change owned elsewhere).
2. **`depcheck` transients (resolved).** Mid-run the sibling `gate-cleanup-deps`
   re-homing produced two transient `[page-cycle]` errors
   (`lie-groups-...` and `root-systems-dynkin-...` A/B pairs); both were gone by
   the final run, which reports 0 errors and 167 legal `multi-home` warnings.
   Nothing in this lane's edits can produce a page cycle (no `deps` or page file
   was touched).
3. **`boundary-audit` remains red run-wide** (exit 1): 122 template clusters /
   2426 rows; the largest is "Step <k> and the statement enumerate the empty,
   zero, one, degenerate and endpoint cases." with 120 members, and the cluster
   includes items from lanes this dispatch never touched (e.g.
   `cex-a-normal-operator-need-not-have-any-eigenvectors`,
   `thm-spectral-theorem-for-bounded-normal-operators-pvm-form`). It is
   pre-existing and outside this lane's error list; recorded here so Step 4 does
   not read it as cleanup fallout. Note the dynkin rows this lane corrected had
   inherited the template wording with a step number ("Step 4.2") that never
   existed in the item - a template-artifact pattern other lanes may share.
4. **No published item was found defective.** All 70 touched items are drafts.
   The only published item involved, `thm-choice-implies-dependent-implies-
   countable-choice` itself, was not edited and is not implicated as defective.
5. Dispatch-text mismatch already noted: `merge-proof-contracts.mjs --run` does
   not exist; use `--level <run> <output> <batch...>`.

## Checkpoint (navigation only; the items and the merged contract are the evidence)

- **IDs completed**: proof-contract pass `thm-dynkin-formula-for-bounded-
  brownian-stopping`, `thm-shelah-universal-meagre-composition-preserves-
  sweetness`; fwdcheck pass the 69 items in the table of section 2 (44 by the
  uniform trailing-citation deletion, 25 with site-specific deletions/rewrites).
  Contract files: batch-1/4/8/9/10/12/15 + merged.
- **Checks actually run**: the table of "Final gate outputs"; plus a repo-wide
  dangling-step-token scan (961 items, 0 findings) and a contract-vs-item
  reconciliation dry run (0 remaining deletions/requotes).
- **Local suppliers added**: none (no mathematics was authored here).
- **Decisions**: delete rather than declare for in-`deps` links (`forward-in-
  deps`/`forward-on-spine`); delete rather than declare for the one
  orientation-only companion-page link (page-cycle risk); `5.4 -> 6.1` in the
  Shelah 7.1/5.3 prose; dynkin source note moved to `## Remarks`.
- **Final verification sweep (in the dispatch's order)**: merge (exit 0) ->
  `proof-contract --strict` (exit 0: 0 errors, 961/961) -> `fwdcheck --quiet`
  (exit 0) -> `precheck` (16023 checked, 0 failing) -> `depcheck` (exit 0, 0
  errors; the sibling lane's 26 `b-leaf-content` errors are closed and its
  transient page cycles are gone).
- **Open gaps**: obligation 1 (forward `deps` on the spine, other lanes' field)
  and obligation 3 (`boundary-audit` run-wide template rows); the two Shelah
  step addresses are the only inferred (not read-from-source) content in this
  dispatch.
- **Next action**: none inside this lane; hand obligation 1 to Step 4 for the
  forward-`deps` reconciliation.
