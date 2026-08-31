# frontier-27 reader-10 report

Date: Monday, August 31, 2026.
Batch: `research/frontier-27-batch-10.pages.json`

## Opened scope

- Control and dispatch artifacts opened: `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `.autopilot/status.md`, `.autopilot/state.json`, `research/frontier-27-reader.task.md`, `research/frontier-27-dispatch/reader-reader-10.prompt.md`, `research/frontier-27-beta-10.task.md`, `research/frontier-27-batch-10.pages.json`, `research/frontier-27-batch-10.coverage.json`, `research/frontier-27-batch-10.proof-contracts.json`, `research/frontier-27-batch-10.notes.md`, the TC-15 and TC-19 design slices of `research/plan-computability-theory-track.md`, and the live `research/plan-spec.json`.
- Assigned page files opened: `library/computability-theory/primitive-recursive-and-partial-computable-functions.md`, `library/computability-theory/primitive-recursive-and-partial-computable-functions-examples.md`, `library/computability-theory/resource-bounds-and-machine-invariance.md`, and `library/computability-theory/resource-bounds-and-machine-invariance-examples.md`.
- Prerequisite page context opened: `library/computability-theory/robust-machine-models-and-universal-computation.md`, `library/foundations/construction-of-the-natural-numbers.md`, and `library/real-analysis/the-logarithm-and-general-powers.md`.
- Assigned item scope: opened all `36` batch-owned item files on current disk.

```text
def-initial-arithmetic-functions
def-composition-and-primitive-recursion-schemes
def-primitive-recursive-function
prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive
def-natural-number-coding-of-finite-sequences
thm-sequence-length-and-coordinate-functions-are-primitive-recursive
def-mu-minimization-and-partial-recursive-function
prop-ackermann-is-total-computable-but-not-primitive-recursive
lem-turing-step-coding-is-primitive-recursive
def-kleene-t-predicate-and-output-function
thm-kleene-normal-form
thm-partial-recursive-iff-turing-computable
def-lambda-term-beta-reduction-and-represented-function
thm-lambda-definable-iff-partial-recursive
fs-every-total-computable-function-is-primitive-recursive
fs-mu-minimization-is-always-total
ex-sequence-length-and-coordinate-functions-are-primitive-recursive
ex-lambda-definable-iff-partial-recursive
cex-every-total-computable-function-is-primitive-recursive
def-worst-case-time-and-space-complexity
def-asymptotic-resource-comparison
def-time-and-space-constructible-function
def-dtime-ntime-dspace-and-nspace
lem-time-at-least-input-length-permits-complete-input-reading
lem-time-bounds-imply-space-bounds
thm-multitape-to-single-tape-time-simulation
thm-multitape-to-single-tape-space-simulation
thm-universal-simulation-with-logarithmic-overhead
prop-polynomial-time-and-space-are-model-invariant
lem-clocked-machine-construction
prop-polynomially-related-encodings-preserve-polynomial-classes
fs-model-invariance-means-equal-step-counts
fs-time-bounds-never-need-constructibility
ex-time-bounds-imply-space-bounds
ex-polynomially-related-encodings-preserve-polynomial-classes
cex-model-invariance-means-equal-step-counts
```

- Direct dependency items opened for verification: `20`.

```text
def-function
def-natural-numbers
thm-recursion
def-effective-binary-encoding-and-decoder
lem-finite-tuples-admit-effective-prefix-free-encodings
def-partial-function-computed-by-a-machine
def-effective-encoding-of-turing-machines
lem-machine-encoding-is-injective-and-decodable
def-turing-machine-configuration
def-one-step-configuration-relation
thm-existence-of-a-universal-turing-machine
def-universal-turing-machine
def-language-recognized-and-decided
def-multitape-and-nondeterministic-machines
def-nondeterministic-accepting-computation
lem-multitape-simulation-has-quadratic-time-overhead
thm-multitape-machines-have-one-tape-simulations
thm-logarithm-slower-than-every-positive-power
def-instance-size-under-an-encoding
prop-polynomially-related-encodings-preserve-polynomial-size
```

## Confirmed defects

1. `items/thm-sequence-length-and-coordinate-functions-are-primitive-recursive.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: the theorem claimed that `len(s)` is a total primitive-recursive function, but on the pre-repair bytes it never defined `len(s)` on malformed sequence codes. The proof likewise treated the header scan only on valid codes. I repaired the statement and step `1.1` so the total function returns `0` outside the coding image.

2. `items/thm-partial-recursive-iff-turing-computable.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: step `1.2` concluded that the Turing-computable side is “exactly the normal form of a partial recursive function” without citing the closure clauses needed to turn `U(\mu s\,T(e,x,s))` into a partial recursive function. The item was also missing the dependency on `def-mu-minimization-and-partial-recursive-function`.
   Repair: added the missing dependency, recorded the closure fact explicitly, and rewrote the reverse implication through the primitive-recursive predicate `T`, minimization, and composition with `U`.

3. `items/thm-lambda-definable-iff-partial-recursive.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: the old reverse implication assumed without license that a normal-order reduction search suffices whenever some beta-reduction reaches a Church numeral. That is a nontrivial standardization claim, not a one-line consequence of the cited definition.
   Repair: replaced the normal-order argument by a breadth-first search through all finite beta-reduction sequences, which halts exactly when some branch reaches a Church numeral.

4. `items/def-dtime-ntime-dspace-and-nspace.md`
   Disposition: repaired in the owned A-page item; downstream contract quotes were refreshed where this definition is cited.
   Severity: fatal.
   Evidence: the old `NTIME` clause cited `def-nondeterministic-accepting-computation`, whose current statement is one-tape, while the definition here quantified over nondeterministic multitape machines without explaining the combined convention.
   Repair: added the missing dependency on `def-multitape-and-nondeterministic-machines` and rewrote the `NTIME` clause to state the multitape/nondeterministic combination and its existential acceptance condition explicitly.

5. `items/fs-model-invariance-means-equal-step-counts.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: the old refutation treated the asymptotic theorem “may require `O(T^2)` time” as if it directly supplied a concrete witness that exact step counts differ. An upper-bound theorem alone does not prove strict inequality on a specific computation.
   Repair: replaced the refutation by an explicit copying-machine witness whose standard one-tape simulation must perform extra sweeps and therefore strictly more steps.

6. `items/cex-model-invariance-means-equal-step-counts.md`
   Disposition: repaired in the owned B-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: the counterexample had the same defect as the false statement: it cited the `O(T^2)` simulation theorem as if that alone witnessed unequal exact step counts.
   Repair: rewrote the witness around the concrete copying machine and the extra one-tape shuttling work.

7. `items/fs-time-bounds-never-need-constructibility.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: the old title, statement, and dependency route bundled “invariance arguments” into the claim and then leaned on `thm-universal-simulation-with-logarithmic-overhead`, even though that theorem's current statement does not require constructibility. The actual local load-bearing use of constructibility on this page is the clocked-simulation lemma.
   Repair: narrowed the false claim to clocked-simulation and time-hierarchy arguments, rerouted the dependency to `lem-clocked-machine-construction`, and rewrote the refutation around explicit timeout construction.

8. `items/prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: `rendercheck` failed on the current bytes because the item used the unsupported KaTeX command `\dotminus` in both the statement and the proof.
   Repair: replaced that notation by a KaTeX-safe explicit dotted-minus expression.

9. `research/frontier-27-batch-10.proof-contracts.json`
   Disposition: repaired in the assigned batch contract.
   Severity: nonfatal.
   Evidence: `boundary-audit` failed on the current contract with one contradicted boundary row and two templated iff clusters. The `empty` boundary for `prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive` was wrong because the bounded sums/products are indexed by `y \le n`, hence never over an empty set; the iff rows on `fs-time-bounds-never-need-constructibility` and `cex-model-invariance-means-equal-step-counts` were stale boilerplate.
   Repair: changed the `empty` boundary to a checked disposition and rewrote the affected iff rows item-specifically.

## Edits

- Patched `items/prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive.md`.
- Patched `items/thm-sequence-length-and-coordinate-functions-are-primitive-recursive.md`.
- Patched `items/thm-partial-recursive-iff-turing-computable.md`.
- Patched `items/thm-lambda-definable-iff-partial-recursive.md`.
- Patched `items/def-dtime-ntime-dspace-and-nspace.md`.
- Patched `items/fs-model-invariance-means-equal-step-counts.md`.
- Patched `items/fs-time-bounds-never-need-constructibility.md`.
- Patched `items/cex-model-invariance-means-equal-step-counts.md`.
- Regenerated affected citation/derivation rows in `research/frontier-27-batch-10.proof-contracts.json` with `tools/regen-contract-entries.mjs`.
- Patched the stale boundary rows in `research/frontier-27-batch-10.proof-contracts.json`.
- Wrote this report.
- Wrote `research/frontier-27-reader-findings-10.json`.

- No changed item carried a `verification.judge` block, so no stale judge record needed removal.

## Uneditable manifest drift

- `research/frontier-27-batch-10.pages.json` is now stale against current item frontmatter. I left it untouched because this dispatch does not license manifest edits.
- Its `deps` list for `thm-partial-recursive-iff-turing-computable` still omits `def-mu-minimization-and-partial-recursive-function`.
- Its `deps` list for `def-dtime-ntime-dspace-and-nspace` still omits `def-multitape-and-nondeterministic-machines`.
- Its `title` and `deps` for `fs-time-bounds-never-need-constructibility` still reflect the pre-repair statement routed through `thm-universal-simulation-with-logarithmic-overhead`.

## Page verdicts

- `primitive-recursive-and-partial-computable-functions`: repaired and clean on current bytes; no remaining uneditable item or page defect found.
- `primitive-recursive-and-partial-computable-functions-examples`: clean on current bytes after the counterexample-side repair.
- `resource-bounds-and-machine-invariance`: repaired and clean on current bytes; remaining drift is confined to the uneditable batch manifest.
- `resource-bounds-and-machine-invariance-examples`: clean on current bytes after the counterexample-side repair.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the changed item set; only `items/thm-partial-recursive-iff-turing-computable.md` needed canonical reflow.
- `node tools/tsx-run.mjs tools/precheck.mts` on the `6` changed proof-bearing items: `6 checked, 0 failing`.
- `node tools/tsx-run.mjs tools/precheck.mts` on all `25` proof-bearing batch-10 items: `25 checked, 0 failing`.
- `node tools/rendercheck.mjs` on all `36` batch item files plus the `4` assigned page files: `OK — 40 file(s)`.
- `node tools/proof-contract.mjs research/frontier-27-batch-10.proof-contracts.json --strict`: `0` errors, `0` warnings, `25/25` items checked.
- `node tools/citation-fidelity.mjs research/frontier-27-batch-10.proof-contracts.json --items-dir items --fail-on-missing-quote`: `61` citations, no missing quote and no widening candidate.
- `node tools/boundary-audit.mjs research/frontier-27-batch-10.proof-contracts.json --items-dir items --fail-on-contradicted`: no contradicted dispositions and no template cluster at threshold.
- `node tools/content-policy.mjs research/frontier-27-batch-10.pages.json`: `36` scoped items, `0` errors, `0` warnings.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-10.coverage.json`: `2` pages, `69` harvested results, `0` errors, `0` warnings.
- `git diff --check`: clean.

## Blockers

- None.
