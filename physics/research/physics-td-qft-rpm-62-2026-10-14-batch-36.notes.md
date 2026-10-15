# Batch 36 notes — `qft-mc03` / `qft-mc03-examples`

Run `physics-td-qft-rpm-62-2026-10-14`, role beta, Step 1 authoring, 2026-10-14.
Scope: the assigned A/B pair only, pages `qft-mc03` and `qft-mc03-examples`,
orders **511** and **512**, category `quantum-field-theory-mathematics`, library
`mathematics`. Both pages and all three local carriers remain drafts. The owner
direction was present when this final pass was made and was read; the local pair
was completed supplier-first, with current readiness evidence and no absent
cross-pair supplier.

## Design and current-plan comparison

Read the complete “Finite bounded instruments normalize measurement
probabilities” design section in `research/plan-quantum-field-theory-track.md`
and compared it with `research/plan-spec.json`. The current plan assigns
`qft-mc03` order 511, companion `qft-mc03-examples`, and the page prerequisite
`qm-math-composites`; the B page is order 512 and requires `qft-mc03`. The A and
B plan inventories are empty. The design prose names `qm-math-composites` as an
earlier prerequisite, but its original reservation JSON says `requires: []`.
Followed the current plan and recorded that internal design conflict here; the
page carriers preserve the plan’s prerequisites. The design reserves
`lem-qft-finite-instrument-normalization` and the B counterexample
`cex-qft-formal-factorial-series`; the A-page definition below is an explicit
local prerequisite required to make the theorem’s finite Kraus datum precise.
The B item remains a leaf with no item dependencies.

## Inventory, placement, and dependency levels

The run-level snapshot gives batch 36 level **0** with no incoming in-run batch
edge. Recalculation from the current page graph gives batch 36 level **0** and
`requires: []`; the recorded row has the same level and prerequisites, but its
run-wide input digest is stale after authored manifests changed. That shared
run-level file is left to the owner to refresh. At item scope the current DAG is
acyclic and computes as follows:

| Item | Page | Level | Direct dependencies |
|---|---|---:|---|
| `def-qft-finite-bounded-kraus-instrument` | A | 0 | `def-bounded-linear-operator`, `def-countable-choice`, `def-hilbert-space`, `def-hilbert-space-adjoint`, `def-operator-norm`, `def-real-and-complex-inner-product-space`, `def-space-of-bounded-linear-operators` |
| `lem-qft-finite-instrument-normalization` | A | 1 | `def-countable-choice`, `def-qft-finite-bounded-kraus-instrument`, `def-self-adjoint-positive-unitary-and-normal-operator`, `def-trace-class-operator`, `def-trace-of-a-trace-class-operator`, `lem-nrqm-composites-density-and-scalar-spectral-probability`, `lem-nrqm-composites-nuclear-bounded-cyclicity`, `lem-nrqm-composites-rank-one-operator-calculus`, `thm-trace-class-is-a-two-sided-banach-operator-ideal`, `thm-trace-is-absolutely-convergent-and-basis-independent` |
| `cex-qft-formal-factorial-series` | B | 0 | none |

All item dependencies have role `mathematical-premise`. The definition precedes
the theorem on A; the B counterexample is item-independent and follows A through
the page prerequisite. `qft-mc03` preserves the plan prerequisite
`qm-math-composites`, which is outside this run; B preserves `qft-mc03`. The
batch cross-dependency input is `[]`. No dependency cycle or page-capacity issue
was found; the pages contain two A items and one B item.

## Mathematical dependency review

Read the exact statements and complete proofs of the published general-H
suppliers used by the theorem: the density expansion under Countable Choice,
nuclear bounded cyclicity, rank-one operator calculus, the two-sided trace-class
ideal estimate, and basis-independent trace continuity. Also checked the
bounded-operator, Hilbert adjoint, trace-class, trace, positivity, and Countable
Choice definitions. In particular, the published finite-effects/instruments
result is finite-dimensional and is not used to justify this arbitrary-H
statement. The local proof instead uses the density trace-norm expansion and
bounded trace-class multiplication, with the exact ideal estimate stated as a
direct prerequisite. The inner product convention is linear in its first
argument. The statement assumes a nonzero complex Hilbert space, bounded Kraus
operators, a finite outcome set and finite Kraus lists, a normalized datum, a
trace-class density operator, and Countable Choice. It asserts no general
representation theorem for instruments and no apparatus realization or
physical measurement postulate.

The A-page definition states empty inner sums, specifies the outcome effects and
operation, and verifies that the finite operation maps bounded operators to
bounded operators. The theorem proves effect positivity, trace-class positive
updates, the trace formula and normalization, nonselective and positive-probability
conditional density states, the undefined zero-probability division case, and
the rank-one input formula. The B proof separately defines coefficientwise
formal algebra and numerical convergence, uses the convention `g^0 = 1` at zero,
and proves zero radius by ruling out every positive radius. Both items are
conditional mathematical arguments; no experiment, observed frequency, or
statistical inference is asserted.

## Sources and retrieval history

The A page has two independent full-text treatments: Watrous, *The Theory of
Quantum Information*, Chapter 2, §§2.3.1–2.3.2, printed pp. 100–102 and 111–113;
and Griffiths, *Notes on Quantum Information Theory*, complete §7, pp. 1–3,
equations (7.2)–(7.9). Watrous supplies finite-dimensional outcome, trace
probability and conditional-update formulas; Griffiths supplies the vector-state
interaction/Kraus normalization argument. Their finite-dimensional or pure-vector
scope is not used as a proof of the local arbitrary-H trace-class extension.
The local proof supplies that extension from the inspected mathematical
suppliers above.

The B page has two active, stamped treatments: OpenStax, *Calculus Volume 2*,
§6.1, including Example 6.1(2), which works the real factorial-coefficient
series; and Howell, *Complex Analysis*, §4.4, including the complex radius-zero
case and Exercise 3(b), which poses the exact series `sum n! z^n`. Howell’s
exercise is not treated as a proof; the B item contains the complete complex
argument. The sources’ domain and proof limits are stated in the coverage ledger.

Two source URLs were dropped only as mechanically unstamped retrieval paths.
The original Watrous full-book PDF exhausted the initial attempt and five retries
because its compressed object stream could not be page-counted without
`mutool`; the official standalone Chapter 2 PDF was fetched and inspected for
the same treatment. Dozier’s complete 41-page Cornell notes PDF was downloaded
and its radius section inspected, but its URL exhausted six stamp attempts for
the same parser limitation; OpenStax and Howell provide active replacement
treatments. Both source-resolution records preserve attempts, searches,
alternatives, and item dependencies. These URL drops remove no mathematical
claim or coverage. `source-fetch-check --stamp` verified four of six source rows;
all six rows are resolved when the two documented drops are counted.

## Checks, readiness, and remaining run-level gates

Actual final scoped results:

- Item dependency-level check: 3 items, levels 0/1/0, no errors. Batch 36
  recomputation: level 0, no incoming in-run prerequisites.
- `precheck.mts`: both proof-bearing items pass; 2 checked, 0 failing.
- Strict proof contract: 2/2 proof items checked, 0 errors, 0 warnings.
- Proof layout on the three changed items: 3 items, 9 steps, 0 defects. The
  ordinary runner first failed because this workspace’s global TypeScript
  fallback cannot resolve the sibling app’s `@/` aliases; the scoped final run
  used a temporary resolver for the app’s existing alias and passed. No sibling
  app files were changed.
- `rendercheck`: all 3 items and 2 pages passed; KaTeX and renderer YAML parsing
  passed.
- `content-policy`: 3 scoped items, 0 errors, 0 warnings; `manifest-deps`: 3
  items, 0 missing dependencies; `audit-manifest`: 17 relationships, 0 defects.
- `coverage-checklist`: 2 pages, 12 harvested results, 0 errors, 0 warnings.
- `source-fetch-check`: 4/6 source rows fetch-verified and 6/6 resolved,
  including the two documented drops.

The run-wide `proof-contract-coverage` check remains blocked by the separate
frontier page `td-cycles-and-low-temperature`, whose current page inventory is
empty or invalid. The batch’s own strict contract check covers both of its
proof-bearing items. The run-wide dependency-level file also has a stale input
digest even though batch 36’s recomputed level and prerequisites match its
recorded row; its refresh belongs to the owner.

A later run-wide Step 1 snapshot read also failed on the unrelated
`research/physics-td-qft-rpm-62-2026-10-14-batch-5.pages.json`: JSON parsing
reports a trailing literal `\\n` after the closing array (position 4141, line
130, column 2). That page manifest is outside this assignment and was left
untouched. To verify these records despite the run-wide parse failure, the Step 1
hash check was recomputed over the batch-36 manifest, the full current
`plan-spec.json` inventory, and the records’ transitive supplier closure; all
three assigned readiness records are closed with current hashes.

Step 1 readiness records mark all three assigned items `ready`, with exact
examined dependency IDs and current hashes. These records establish local
scaffold completeness only; independent review and final run gates remain
separate.
