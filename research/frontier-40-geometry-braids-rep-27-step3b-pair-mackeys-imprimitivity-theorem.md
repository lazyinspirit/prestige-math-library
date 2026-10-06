# Step 3b report — A/B pair `mackeys-imprimitivity-theorem`

- Run: `frontier-40-geometry-braids-rep-27` (batch 3, orders 510.077/510.078, `representation-theory`).
- Pair: A `mackeys-imprimitivity-theorem` / B `mackeys-imprimitivity-theorem-examples`.
- Role: alpha-high pair author. Owns only this pair's 31 items, its two pages and
  `research/frontier-40-geometry-braids-rep-27-batch-3.proof-contracts.json`
  (batch 3 contains no other pair; the two other batch-3 files are preserved as-is).
- Scope decision: Step 3a review `sufficient`, recorded in
  `research/frontier-40-geometry-braids-rep-27-step3a-review-mackeys-imprimitivity-theorem.json`;
  owner authoring direction preserves the full promised scope and permits local
  helpers. The three Step 3a prerequisite findings are resolved as follows:
  1. `countably separated` in `cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup`
     is supplied by the added local helper
     `lem-ergodic-imprimitivity-systems-with-regular-orbits-concentrate-on-one-orbit`
     (regular-orbit hypothesis) together with the added denominator-free
     formulation used in the proof; the parenthetical is treated as the
     countable-separation form of regularity defined inside that lemma's
     statement context. No owner statement change is requested.
  2. The n-dimensional momentum/generator identification in
     `ex-the-regular-position-momentum-imprimitivity-system` is proved locally
     from the published n-dimensional multiplier/Fourier suppliers and the
     published generator definition; those items are declared in the example's
     `deps`.
  3. The separable-Hilbert-space ONB/SOT-metric interfaces in
     `lem-steinhaus-and-pettis-for-second-countable-locally-compact-groups` and
     `lem-haar-regularization-of-transitive-unitary-cocycles` are proved inline
     from published Hilbert-space basis suppliers; no undefined convergence
     notion is left.

## Owned IDs (authoring order = dispatch order)

L0: `def-system-of-imprimitivity`, `def-transformation-algebra-of-a-g-space`,
`lem-characters-of-l1-of-an-abelian-lch-group`,
`lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms`,
`lem-nondegenerate-czero-representations-have-regular-pvms`,
`lem-second-countable-lch-spaces-are-standard-borel`,
`lem-steinhaus-and-pettis-for-second-countable-locally-compact-groups`,
`lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base`.
L1: `lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra`,
`lem-borel-cross-sections-for-closed-subgroups`,
`lem-lca-fourier-transforms-form-a-dense-czero-algebra`,
`lem-pvm-multiplicity-model-over-a-standard-borel-space`.
L2: `lem-ergodic-imprimitivity-systems-with-regular-orbits-concentrate-on-one-orbit`,
`lem-haar-lifts-and-borel-descent-on-a-homogeneous-space`,
`lem-spectral-measure-of-a-representation-of-an-abelian-lch-group`.
L3: `def-transitive-system-of-imprimitivity`,
`lem-a-transitive-quasi-invariant-borel-g-space-is-ergodic`,
`lem-haar-regularization-of-transitive-unitary-cocycles`.
L4: `def-unitary-equivalence-of-systems-of-imprimitivity`,
`lem-induced-representations-carry-a-canonical-system-of-imprimitivity`,
`lem-spectral-measure-multiplicity-model-for-a-transitive-system`,
`cex-a-nontransitive-system-is-not-classified-by-one-stabilizer`.
L5: `lem-borel-cocycle-fields-for-imprimitivity-systems`.
L6: `lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary`.
L7: `lem-the-imprimitivity-reconstruction-map-is-isometric-and-intertwining`.
L8: `thm-mackey-imprimitivity-theorem`.
L9: `thm-uniqueness-in-mackey-imprimitivity`,
`ex-the-regular-position-momentum-imprimitivity-system`.
L10: `cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup`,
`ex-imprimitivity-for-a-finite-transitive-g-set`.
L11: `ex-little-groups-for-the-real-ax-plus-b-group`.
Pages: `library/representation-theory/mackeys-imprimitivity-theorem.md`,
`library/representation-theory/mackeys-imprimitivity-theorem-examples.md`.

## Open obligations

- All 31 items are new files; the scaffold inventory (batch-3.pages.json) and the
  coverage file already contain all of them. Author in the listed order,
  one item at a time, checking each before moving on.
- Baseline check (final pass): **all 31 assigned IDs** are present in
  `research/frontier-40-geometry-braids-rep-27-step3-auditor-baseline.json`
  (`items` array; none is newly minted in this Step-3b authoring pass). All 31
  therefore needed ordinary `record-item` decisions, and all 31 were recorded
  `accept` with confidence 1 (see the final pass below). An earlier note here
  expecting "14 originals + 17 additions" was wrong for the current immutable
  baseline and is superseded.
- Step 3b requires `batch-3.proof-contracts.json` (31 entries) plus manifest,
  coverage, page registration and the Step-3 check battery.
- No sibling pair in batch 3; shared batch files are single-writer for this pair.

## Checkpoints

(updated after each item; see §Checkpoints below)

### Dependency level 0 — complete (pending manifest/contracts)

| item | file written | precheck | rendercheck | proof-layout | notes |
|---|---|---|---|---|---|
| `def-system-of-imprimitivity` | yes | n/a | clean | 0 defects | definition; no proof |
| `def-transformation-algebra-of-a-g-space` | yes | n/a | clean | 0 defects | associativity/involution verified in well-definedness prose; uses commuting-Radon-integral lemma |
| `lem-characters-of-l1-of-an-abelian-lch-group` | yes | pass | clean | 14 steps | added deps: def-convolution-on-cc-and-l1, lem-complex-haar-l1-l2-complete-cc-dense, lem-compactly-supported-kernels-commuting, lem-bochner-integral-norm-inequality, def-strongly-measurable-banach-valued-function |
| `lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms` | yes | pass | clean | 6 steps | dense statements; no deps added |
| `lem-nondegenerate-czero-representations-have-regular-pvms` | yes | pass | clean | 9 steps | added deps: def-one-point-compactification, thm-pvm-integral-is-a-star-homomorphism |
| `lem-second-countable-lch-spaces-are-standard-borel` | yes | pass | clean | 6 steps | added deps: thm-choice-implies-dependent-implies-countable-choice, rem-choice-strengths, def-group-action |
| `lem-steinhaus-and-pettis-for-second-countable-locally-compact-groups` | yes | pass | clean | 10 steps | added deps: def-strong-and-weak-operator-topologies, thm-separable-hilbert-space-has-a-countable-orthonormal-basis, def-unitary-group-of-a-hilbert-space, thm-choice-implies-dependent-implies-countable-choice |
| `lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base` | yes | pass | clean | 6 steps | added deps: ex-direct-integral-of-a-constant-hilbert-field, def-cardinality |

All eight files pass `node tools/tsx-run.mjs tools/precheck.mts`, rendercheck and
proof-layout individually. Manifest deps and levels are reconciled in a single
manifest pass after all items are written.

### Dependency level 1 — complete (pending manifest/contracts)

| item | file written | precheck | rendercheck | proof-layout | notes |
|---|---|---|---|---|---|
| `lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra` | yes | pass | clean | 8 steps | added deps: thm-pvm-integral-is-a-star-homomorphism, lem-bochner-integral-norm-inequality, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets |
| `lem-borel-cross-sections-for-closed-subgroups` | yes | pass | clean | 8 steps | least-index recursion with Borel selection; added deps: lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure, def-metric-convergence, def-metric-bounded-diameter, def-borel-sigma-algebra, def-complete-metric-space, def-polish-space |
| `lem-lca-fourier-transforms-form-a-dense-czero-algebra` | yes | pass | clean | 6 steps | added deps: def-involution-on-l1-of-a-group, lem-complex-haar-l1-and-l2-are-complete-and-cc-dense, thm-fubini-..., lem-lch-urysohn-cutoff, lem-haar-measure-is-positive, def-character-and-maximal-ideal-space, def-pontryagin-dual |
| `lem-pvm-multiplicity-model-over-a-standard-borel-space` | yes | pass | clean | 8 steps | uses the spectral multiplicity theorem for the prescribed generator S=∫c dP (the cited proof's construction applies to a prescribed self-adjoint generator); added deps as recorded in the item |

### Dependency levels 2–4 — complete (pending manifest/contracts)

| item | file written | precheck | rendercheck | proof-layout |
|---|---|---|---|---|
| `lem-ergodic-imprimitivity-systems-with-regular-orbits-concentrate-on-one-orbit` | yes | pass | clean | 5 steps |
| `lem-haar-lifts-and-borel-descent-on-a-homogeneous-space` | yes | pass | clean | 7 steps |
| `lem-spectral-measure-of-a-representation-of-an-abelian-lch-group` | yes | pass | clean | 10 steps |
| `def-transitive-system-of-imprimitivity` | yes | n/a | clean | 0 steps |
| `lem-a-transitive-quasi-invariant-borel-g-space-is-ergodic` | yes | pass | clean | 5 steps |
| `lem-haar-regularization-of-transitive-unitary-cocycles` | yes | pass | clean | 9 steps |
| `def-unitary-equivalence-of-systems-of-imprimitivity` | yes | n/a | clean | 0 steps |
| `lem-induced-representations-carry-a-canonical-system-of-imprimitivity` | yes | pass | clean | 6 steps |
| `lem-spectral-measure-multiplicity-model-for-a-transitive-system` | yes | pass | clean | 7 steps |
| `cex-a-nontransitive-system-is-not-classified-by-one-stabilizer` | yes | pass | clean | 6 steps |

Open technical notes for Steps 5–8: (a) the continuity hypothesis in
`lem-haar-regularization-of-transitive-unitary-cocycles` is read exactly as the
local-measure/strong-topology condition stated there, and is used only in its
step 2.2 upgrade; (b) `lem-pvm-multiplicity-model-over-a-standard-borel-space`
applies the published spectral multiplicity theorem to the prescribed
generator $S=\int c\,dP$; the cited proof's construction depends only on $S$
being a bounded self-adjoint generator of the abelian algebra.

## Final authoring pass (Step 3b close)

### Repairs applied after the first checkpoint pass

1. **Stale bracket-form step references left by the layer renumbering.**
   `precheck`'s canonical layer repair relabels numbered steps (and `step X.Y`
   tokens) but leaves bracket-form prose references unchanged, so 11 items
   contained references to steps that no longer exist. Each was re-read against
   its current step contents and corrected:
   - `lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra`:
     "Steps [1.2], [2.2] and [2.3]" → "Steps 2.1, 3.1 and 3.2" (boundedness 2.1,
     multiplicativity 3.1, adjoint 3.2).
   - `lem-pvm-multiplicity-model-over-a-standard-borel-space`:
     "Steps [1.1], [2.2], [3.1] and [3.2]" → "Steps 1.1, 1.3 and 3.2" (faithful
     measure, multiplicity $m'$, unitary $W$).
   - `lem-spectral-measure-of-a-representation-of-an-abelian-lch-group`:
     "Steps [2.2], [4.1], [4.2]" → "Steps 4.1, 6.1 and 7.1" (existence,
     uniqueness, covariance of $P$).
   - `lem-haar-regularization-of-transitive-unitary-cocycles`:
     "Steps [3.2], [4.2] and [4.3]" → "Steps 5.1, 6.1, 7.1 and 7.2"; the closing
     tag gains `step 6.1`.
   - `lem-induced-representations-carry-a-canonical-system-of-imprimitivity`:
     "Steps [2.1], [3.1], [4.1] and [4.2]" → "Steps 2.1, 3.1 and 3.2".
   - `lem-spectral-measure-multiplicity-model-for-a-transitive-system`:
     "Steps [3.2] and [4.1]" → "Steps 4.1 and 5.1 … and step 1.2"; the closing
     tag gains `step 4.1`.
   - `lem-borel-cocycle-fields-for-imprimitivity-systems`:
     "Steps [2.2], [3.1], [4.1] and [4.2]" → "Steps 1.2, 2.2, 3.1 and 4.1".
   - `lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary`:
     "Steps [1.1], [2.2], [3.1]" → "Steps 1.1, 2.1 and 3.1".
   - `thm-mackey-imprimitivity-theorem`:
     "Steps [2.1], [3.1] and [3.2]" → "Steps 1.2, 1.3 and 1.4".
   - `ex-the-regular-position-momentum-imprimitivity-system`:
     "Steps [1.1], [1.2], [2.1], [2.2] and [3.1]" → "Steps 1.1, 1.2, 1.3, 1.4
     and 1.5".
   - `ex-imprimitivity-for-a-finite-transitive-g-set`:
     "Steps [1.1], [1.2] and [1.3]" → "Steps 1.1, 2.1 and 3.1".
   Every remaining `\d+\.\d+` token in all 31 proofs was resolved against the
   current step set; the two other bracket-form references
   (`lem-characters-of-l1-of-an-abelian-lch-group` step 6.1 → 2.2/3.4,
   `thm-uniqueness-in-mackey-imprimitivity` step 4.1 → 1.1/2.1/3.1) were
   verified semantically correct and left unchanged.

2. **Uncited AC facts removed** so the facts block equals the cited facts; the
   standing hypothesis AC remains in the statement/Given and
   `def-axiom-of-choice` remains a declared dependency:
   `lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms` [F6],
   `lem-nondegenerate-czero-representations-have-regular-pvms` [F5],
   `lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base` [F6],
   `lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra` [F9].

3. **Genuine uses added where interfaces were implicit:**
   `lem-spectral-measure-of-a-representation-of-an-abelian-lch-group` now cites
   [F7] ($\sigma$-finiteness) at steps 1.1 and 5.1, the two Fubini applications.

4. **Load-bearing B-page (examples) dependencies replaced** by exact A-page
   suppliers or complete local arguments (`depcheck` `b-leaf-content`):
   - `ex-the-regular-position-momentum-imprimitivity-system`: removed
     `ex-momentum-operator-under-the-fourier-transform`; the momentum
     identification is the direct Schwartz difference-quotient computation of
     step 1.4 over the published generator/Fourier/Plancherel suppliers.
   - `ex-little-groups-for-the-real-ax-plus-b-group`: removed
     `ex-pontryagin-dual-of-euclidean-space`; F1 now uses
     `lem-continuous-characters-of-the-real-line-are-exponentials` with the
     Pontryagin-dual definition and LCA dual theorem.
   - `lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base`:
     removed `ex-direct-integral-of-a-constant-hilbert-field`; the constant-field
     identification is now the local Parseval argument in F1, supported by
     `thm-parseval-equivalences-for-a-complete-orthonormal-family`.

5. **Supplier registration changes (item frontmatter and manifest, preserved in
   both):** added `def-group-action`
   (`ex-the-regular-position-momentum-imprimitivity-system`),
   `def-compact-support-c-c-and-c-zero-on-an-lch-space`
   (`lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra`),
   `thm-parseval-equivalences-for-a-complete-orthonormal-family`
   (`lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base`);
   removed the three examples-page dependencies above. `manifest-deps` reports
   0 normalized / 0 errors.

6. **Proof contracts regenerated** (`batch-3.proof-contracts.json`, 31 entries,
   451 citation contracts, per-step inputs, eight boundary rows per item):
   - `iff-forward` / `iff-reverse` checked only for the three genuine
     biconditionals — `lem-pvm-multiplicity-model-over-a-standard-borel-space`
     (both directions at step 1.1), `lem-haar-lifts-and-borel-descent-on-a-homogeneous-space`
     (steps 2.1 + 3.1), `thm-uniqueness-in-mackey-imprimitivity` (forward 2.1,
     reverse 1.1); the `"equivalently"` clauses
     (`lem-ergodic-imprimitivity-systems-…`, `lem-a-transitive-quasi-invariant-borel-g-space-is-ergodic`,
     `cor-mackey-little-group-reduction-…`) and the two definition-internal
     equivalences (`def-system-of-imprimitivity`, `def-transitive-system-of-imprimitivity`)
     are disposed of with specific reasons.
   - `one`/`degenerate` rows are checked only where a named step handles the
     case (zero Hilbert space 1.1 or 9.1; $H=G$/$H=\{e\}$ in 3.2/4.1; $K=0$
     cases; $n=0$; the dual fixed point $\{0\}$), otherwise inapplicable with
     item-specific reasons.
   - `nonempty-choice` is checked exactly where a step consumes the declared
     choice fact, and inapplicable with the stated reason where the argument
     is choice-free.

### Checks actually run (final state)

| check | result |
|---|---|
| `precheck` (31 explicit item paths) | 27 checked, 0 failing (4 definitions n/a) |
| `rendercheck` (31 items + both pages) | OK — no math/wikilink/delimiter/frontmatter defects |
| `proof-layout` (31 changed item paths, one batched command) | 185 steps, 0 defects |
| `proof-contract --strict` (batch-3 contract) | 0 errors, 0 warnings, 31/31 items |
| `boundary-audit --fail-on-contradicted --fail-on-template` | no contradicted dispositions, no template clusters |
| `finite-smoke` | 0 errors, 0 obligations |
| `risk-report` | 0 errors, 31 items routed for Step 5 |
| `citation-fidelity` | 451 citations, no quote-not-found, no widening candidates |
| `content-policy` (batch-3 pages.json) | 31 scoped items, 0 errors |
| `coverage-checklist` (batch-3 coverage) | 2 pages, 62 harvested results, 0 errors, 2 low-yield warnings (informational) |
| `manifest-deps` (batch-3 pages.json) | 31 items, 0 normalized, 0 errors |
| `item-dependency-levels` (my pair) | 31 items, 0 mismatches, max level 11 |
| `depcheck` (my items) | clean; run-wide legacy errors are in other pairs (below) |
| `validate-plan research/plan-spec.json` | exit 0 — page order acyclic, no item-level cycles |
| `step3-decisions record-item` ×31 | all 31 recorded `accept`, confidence 1; `itemDecision` reports all 31 closed/current |

### Step 3 decisions

All 31 assigned IDs are original scaffold IDs per the immutable baseline, so all
31 carry ordinary current item decisions: `record-item --decision accept
--confidence 1 --dependencies <declared deps> --reason <per-item evidence>`
recorded in `research/frontier-40-geometry-braids-rep-27-step3b-review-<id>.json`.
The A-pair scope is closed by the Step 3a `sufficient` review receipt.

### Published / sibling concerns (exact IDs, not edited here)

- Run-wide `item-dependency-levels check` fails on eight **sibling** pairs'
  items (level off by one, all in the braid/Burau group, other authors still in
  flight): `def-coloured-reduced-burau-matrix` (5 vs 6),
  `thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis` (6 vs 7),
  `prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid`
  (7 vs 8), `ex-the-burau-determinant-for-a-two-strand-torus-link` (8 vs 9),
  `prop-khovanov-seidel-decategorification-is-the-unreduced-burau-action`
  (5 vs 6), `lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel`
  (10 vs 11), `ex-decategorifying-a-khovanov-seidel-generator` (6 vs 7),
  `cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences`
  (11 vs 12). Remedy: those pair authors re-run the level pass over their
  manifests; do not edit them from this pair.
- `depcheck` reports one remaining `b-leaf-content` defect in a sibling pair
  still in flight: `lem-blowup-charts-of-the-quadric-cone` depends on the
  examples-page item `ex-blowup-affine-three-space-origin-exceptional-p2`.
  Remedy: replace with A-page suppliers or a local argument (same rule applied
  to the three items of this pair).
- `depcheck` legacy debt elsewhere in the published library (833
  `published-unaudited`, 2 `published-unchecked`, 7 `link-unresolved`, 1
  `dep-unresolved`) is unrelated published debt and does not block this pair.
- `validate-plan` lists both pages as `0 items` (marked `*`): the plan-spec
  item lists are spliced at Step 4; no plan contradiction is present.

### Open obligations for Steps 5–8

- Independent audit of the two recorded caveats: the prescribed-generator
  application in `lem-pvm-multiplicity-model-over-a-standard-borel-space` and
  the exact use of the local-measure continuity hypothesis at step 3.1 of
  `lem-haar-regularization-of-transitive-unitary-cocycles`.
- Audit of the `checked` boundary rows (the author's dispositions of the
  `one`, `degenerate`, `iff` and choice axes) against the proofs.
- Supplier reconciliation for the cross-pair suppliers used here; every cited
  supplier file exists and its quoted section was verified verbatim by the
  strict contract, but Step 5 must re-check the completed suppliers' actual
  strength.
- Step 4: splice the pair's item lists into `research/plan-spec.json` for both
  pages and confirm no pre-splice mismatch is introduced.
