# frontier-30 reader-8 report

## Opened scope

- Control artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `WORKFLOW.md`,
  `SCHEMA.md`, `research/frontier-30-reader.task.md`,
  `research/frontier-30-dispatch/reader-reader-8.attempt-1.prompt.md`,
  `research/frontier-30-batch-8.pages.json`,
  `research/frontier-30-batch-8.proof-contracts.json`,
  `research/frontier-30-batch-8.coverage.json`,
  `research/frontier-30-batch-8.notes.md`,
  `research/frontier-30-splice-8.json`, the live design sections for NT-13 and
  NT-18 in `research/plan-number-theory-track.md`, and the current controller
  state via `cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..`.
- Assigned page files opened: `library/number-theory/dirichlet-characters-l-functions-and-primes-in-progressions.md`,
  `library/number-theory/dirichlet-characters-l-functions-and-primes-in-progressions-examples.md`,
  `library/number-theory/hilbert-symbols-and-the-quadratic-local-global-principle.md`,
  `library/number-theory/hilbert-symbols-and-the-quadratic-local-global-principle-examples.md`.
- Assigned item files opened: all 58 current batch-8 items.
- Published dependency closure opened: `cor-completely-multiplicative-dirichlet-series-euler-product`,
  `cor-p-adic-simple-root-lifting`,
  `cor-quadratic-forms-diagonalize-in-characteristic-not-two`,
  `cor-the-regular-character-gives-the-sum-of-squares-formula`,
  `def-dirichlet-series`, `def-field-norm-and-trace`,
  `def-field-of-p-adic-numbers`, `def-finite-field-and-its-order`,
  `def-legendre-symbol`, `def-quadratic-form-and-polar-form`,
  `def-riemann-zeta-function`, `lem-abel-summation-by-parts`,
  `thm-dirichlet-series-summatory-integral`,
  `thm-euler-product-for-riemann-zeta`,
  `thm-eulers-criterion-for-legendre-symbol`,
  `thm-first-orthogonality-relation-for-irreducible-complex-characters`,
  `thm-first-supplement-to-quadratic-reciprocity`,
  `thm-gregory-leibniz-series-for-pi-from-a-finite-remainder`,
  `thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional`,
  `thm-landau-dirichlet-series`,
  `thm-multiplicative-group-of-a-finite-field-is-cyclic`,
  `thm-p-adic-newton-criterion`, `thm-quadratic-reciprocity`,
  `thm-riemann-zeta-meromorphic-continuation`,
  `thm-second-column-orthogonality-relation-for-irreducible-complex-characters`,
  `thm-second-supplement-to-quadratic-reciprocity`,
  `thm-square-criterion-in-q2`,
  `thm-square-criterion-in-qp-for-odd-p`,
  `thm-weak-approximation-for-rational-places`.

`autopilot status` still reports the live `.autopilot/` state as `frontier-23`
at `5-author`, not `frontier-30`. I treated that as controller evidence only
and did not edit workflow state.

## Repairs made

1. `items/def-natural-and-dirichlet-density.md`
   - Corrected the Dirichlet-density definition for subsets of `N` from the
     false logarithmic asymptotic to the standard `(s-1) sum n^{-s}` limit,
     and added the relative natural-density sentence for prime sets.
2. `items/thm-natural-density-implies-dirichlet-density.md`
   - Rewrote the proof to match the corrected definition and proved the error
     term only after multiplying by `s-1`.
3. `items/thm-product-dirichlet-l-nonvanishing-line-one.md`
   - Removed the unjustified claim that the principal pole at `s=1` is already
     known to survive cancellation; the item now proves the nonvanishing claim
     and only the warranted meromorphic control at `s=1`.
4. `items/lem-nonreal-dirichlet-l-nonzero-at-one.md`
   - Added the missing principal-pole and nonprincipal-holomorphy inputs and
     replaced the handwaved order count with an explicit contradiction against
     a zero of the full product at `s=1`.
5. `items/lem-real-dirichlet-l-nonzero-at-one.md`
   - Replaced the invalid cancellation argument with the standard auxiliary
     product / Landau abscissa contradiction.
6. `items/lem-equivalent-definitions-of-the-hilbert-symbol.md`
   - Repaired both false branches: the proof no longer claims every ternary
     isotropic vector has `z != 0`, and it no longer mishandles the norm case
     with a zero coefficient.
7. `items/ex-dirichlet-characters-modulo-three-four-and-five.md`
   - Fixed the malformed modulus-3 principal-character table.
8. `items/cor-ternary-isotropy-via-hilbert-symbol.md`
   - Added the missing `z=0` branch and proved that the binary form still
     represents `-c` in that isotropic case.
9. `items/cex-local-global-fails-for-a-cubic-curve.md`
   - Replaced the false claims about every `3`-adic and `5`-adic unit being a
     cube with explicit Newton/Hensel local witnesses at `p=3` and `p=5`, and
     added the needed Newton dependency.
10. `items/cex-rational-isotropy-is-not-integral-representation.md`
    - Replaced the false witness `x^2-y^2=3` with the correct obstruction
      `x^2-y^2=2`.
11. `research/frontier-30-batch-8.proof-contracts.json`
    - Regenerated the affected entries for
      `thm-natural-density-implies-dirichlet-density`,
      `thm-product-dirichlet-l-nonvanishing-line-one`,
      `thm-dirichlet-l-nonvanishing-line-one`,
      `lem-nonreal-dirichlet-l-nonzero-at-one`,
      `lem-real-dirichlet-l-nonzero-at-one`,
      `lem-equivalent-definitions-of-the-hilbert-symbol`,
      `cor-ternary-isotropy-via-hilbert-symbol`, and
      `cex-local-global-fails-for-a-cubic-curve`.

## Confirmed editable blockers

These defects remain inside the assigned in-flight batch scope, so they do not
belong in the structured findings JSON.

1. `items/thm-odd-p-hilbert-symbol-formula.md`
   - Step `2.1` uses "multiplying the previous two cases" and the unexplained
     special value `(p,p)_p=(-1/p)` before any bilinearity or that special case
     has been proved. The design required an actual four-case verification;
     the current proof does not supply it.
2. `items/thm-two-adic-hilbert-symbol-formula.md`
   - Step `2.1` delegates the entire load-bearing argument to "one checks
     directly" in Sutherland's notes. That is source substitution, not a proof
     on current disk.
3. `items/thm-mertens-primes-arithmetic-progressions.md`
   - Step `1.1` replaces the needed weighted prime-sum asymptotic with an
     unexplained "differentiate the same character average" sentence. No cited
     dependency licenses that passage.
4. `items/thm-hasse-minkowski-for-ternary-forms-over-q.md`
   - Step `2.1` invokes the classical descent and strict coefficient reduction
     without constructing the descended form, proving local preservation, or
     verifying the monotone measure.
5. `items/thm-hasse-minkowski-over-the-rationals.md`
   - Step `2.1` invokes "the same matching argument" and automatic local
     isotropy of larger subforms without a derivation. The induction step is
     therefore not closed on current bytes.

## Page verdicts

- `dirichlet-characters-l-functions-and-primes-in-progressions`
  - Improved materially by the density and line-one repairs, but still blocked
    by the unresolved proof gap in
    `thm-mertens-primes-arithmetic-progressions`.
- `dirichlet-characters-l-functions-and-primes-in-progressions-examples`
  - Pass after the modulus-3 table repair and the corrected integral
    counterexample witness.
- `hilbert-symbols-and-the-quadratic-local-global-principle`
  - Improved materially by the Hilbert-symbol equivalence and ternary-isotropy
    repairs, but still blocked by the unresolved odd-`p`, `2`-adic, and
    Hasse-Minkowski proof gaps listed above.
- `hilbert-symbols-and-the-quadratic-local-global-principle-examples`
  - Improved materially by the Selmer-cubic repair; no additional confirmed
    B-item defect remains after that change.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the 10 changed item files
  - Result: all changed proof-bearing items were reflowed; the definition file
    stayed unchanged under reflow.
- `node tools/tsx-run.mjs tools/precheck.mts` on the 10 changed proof-bearing
  items
  - Result: all changed proof-bearing items passed.
- `node tools/tsx-run.mjs tools/precheck.mts` on all 58 batch-8 item files
  - Result: `52 checked, 0 failing — all clean`.
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-8.proof-contracts.json ...`
  - Result: regenerated the 8 proof-contract entries listed above.
- `node tools/proof-contract.mjs research/frontier-30-batch-8.proof-contracts.json --strict`
  - Result: `0 error(s), 0 warning(s), 52/52 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-8.proof-contracts.json --items-dir items --fail-on-missing-quote`
  - Result: `94 citation(s)` and no missing quotes.
- `node tools/content-policy.mjs research/frontier-30-batch-8.pages.json`
  - Result: `58 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json --pages research/frontier-30-batch-8.pages.json`
  - Result: final status `OK`.
- `node tools/boundary-audit.mjs research/frontier-30-batch-8.proof-contracts.json --items-dir items --fail-on-contradicted --fail-on-template`
  - Result: 12 candidates, no template reuse. After opening them, I did not
    treat them as confirmed new defects: 10 are false-positive `empty` flags on
    genuinely nonempty character/product families, 1 is the repaired Hilbert
    equivalence lemma whose denominators are excluded by its hypotheses, and 1
    is the finite reciprocity product.
- `git diff --check -- ...changed batch-8 files...`
  - Result: clean.
