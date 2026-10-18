# Batch 4 authoring notes

## Inventory and dependency levels

The authored inventory is declared in
research/numerical-analysis-remaining-71-2026-10-17-batch-4.pages.json: 19
A-page items and 3 B-page examples/counterexamples. Levels are recomputed from
the actual in-run item dependencies after the final carrier edits. The current
batch scheduling input places batch 4 at level 0 with no prerequisite batches;
all local theorem suppliers are housed on the A page and the examples depend
only on those same-pair items.

## Plan conflict

The APP-MINIMAX section in research/plan-numerical-linear-track.md says that no
external library page token is recorded in requires, while the current plan
row in research/plan-spec.json and the assigned batch evidence both declare
polynomial-approximation-and-chebyshev-interpolation. The plan row controls
this design conflict, so the requirement is preserved. The existing published
page and its seven actual item bodies were read; the page-level dependency is
recorded as verified in the cross-batch dependency input. It supplies no
unproved fallback and does not replace the new minimax proofs.

The earlier audit's NA-10/NA-11 proposed supplier interfaces are historical
design context, not current in-run batch dependencies: batch 4's scheduling
input has no prerequisite batches, and the declared
polynomial-approximation-and-chebyshev-interpolation page currently exists as
published content. No unresolved supplier ID remains at this authoring handoff.

## Mathematical scope and choices

The polynomial existence argument minimizes the continuous error functional on
a closed bounded coefficient sublevel set; it selects no minimizing sequence
and uses no choice axiom. The rational existence proof minimizes over the
closed set of coefficient-normalized pairs with a nonnegative limiting
denominator, then cancels every interval zero using the proved multiplicity
bound. The rational perturbation image is proved as exactly P_N, with
N=m+n-d; for the zero rational function the convention is d=n, hence N=m.
The weighted proof uses only that the continuous weight is strictly positive
on the compact interval.

The polynomial Remez definition is bounded by an explicit exchange budget and
uses exact candidate and global-extrema oracle contracts. The rational Remez
definition treats its alternation solver as an explicit input procedure and
returns singular, defective, oracle, no-valid-exchange, or budget statuses.
Neither algorithm has an iterative convergence claim. The exact
equioscillation certificate is proved independently of either implementation.

## Source harvest

Full-text source records and per-result dispositions are in
research/numerical-analysis-remaining-71-2026-10-17-batch-4.coverage.json. The
independent textbook/survey sources support the polynomial and defect-sensitive
rational theorems; the algorithm papers support the exchange interfaces.
Local proof arguments are complete and do not use a citation as a proof
substitute. Source-fetch stamps are added only by the required
source-fetch-check --stamp command.

## Checks and readiness

The source-fetch command verified and stamped all four full-text sources; no
retrieval failure occurred, so no source-resolution retry or drop was recorded.
The local exact computations in the two B examples and the defective-rational
counterexample provide the applicable finite checks; no registered finite-smoke
handler targets these claims.

## Scoped checks

- Item dependency levels were recomputed from the actual frontmatter deps across
  the 22 manifest items. The levels are 0–5, with no in-run cycles.
- `precheck` passed all 18 proof-bearing items; their format-only
  `verification.precheck` fields record that result.
- `proof-contract --strict` passed all 22 items with 59 exact supplier excerpts,
  54 numbered-step mappings, and all eight boundary dispositions per item.
- `content-policy` passed the assigned manifest (22 items, no warnings).
- Focused `depcheck` passed the 22 assigned items (538-item dependency closure,
  no errors or warnings).
- `rendercheck` passed all 22 items and both pages, including KaTeX parsing.
- `source-fetch-check` verified all 4/4 sources, with no documented drops.
- `proof-layout` passed after the final item edits: 22 items, 54 steps, and no
  layout defects.

## Readiness decisions

The 22 per-item decisions are recorded as `ready` with their exact direct
dependency IDs. A scoped read-back confirmed all 22 are hash-current and have
`owner: false`. A batch readiness record is not independent mathematical
approval; native review and all later gates remain due.
