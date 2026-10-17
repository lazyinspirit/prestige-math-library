# Batch 18 — stationary iterations and relaxation

## Controlling design and recorded conflicts

The controlling design is NA-04 in `research/plan-numerical-linear-track.md`,
read with its full contract in
`research/numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`.
The current owner direction routes this pair to those repaired category
documents; the current `plan-spec.json` row confirms the A/B page IDs, category,
order, and declared page requirements. The older NA-04 paragraph in
`research/plan-numerical-analysis-track.md` is stale: it asks for a new general
splitting definition and a proof of the all-start spectral-radius equivalence.
The controlling linear contract instead requires reuse of the published
`def-stationary-iteration-from-a-matrix-splitting` and
`thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one`.
Those items were reused as direct suppliers; no duplicate general definition or
criterion was authored. The stated methods, failure branches, diagonal
dominance hypotheses, Hermitian SOR theorem, nonnormal/transient caveats, and
three assigned examples are retained.

The manifest retains its four page requirements. The linear audit identifies
the Krylov, preconditioning, and matrix-norm pages as context whose placement
does not itself supply proof premises. The actual logical supplier items and
matched hypotheses are in item `deps` and the proof contracts. No Krylov
convergence or matrix-norm bound is used to prove a batch-18 claim.

## Inventory and dependency levels

The batch-18 manifest was populated before carrier authoring. It contains nine
A-page items and three B-page examples, with the direct item dependencies and
`dependency_level` labels shown below. The batch itself is level 1 with
prerequisite batch 2 and scheduling-input SHA-256
`ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d`.

| Item | Level |
|---|---:|
| `def-diagonal-lower-upper-splitting-convention` | 0 |
| `alg-richardson-stationary-iteration` | 0 |
| `lem-irreducible-row-substochastic-matrix-has-strict-weighted-contraction` | 0 |
| `alg-jacobi-stationary-iteration` | 1 |
| `alg-gauss-seidel-stationary-iteration` | 1 |
| `alg-sor-stationary-iteration` | 1 |
| `thm-strict-row-diagonal-dominance-implies-jacobi-and-gauss-seidel-convergence` | 2 |
| `thm-irreducibly-weakly-diagonally-dominant-jacobi-and-gauss-seidel-converge` | 2 |
| `thm-sor-converges-iff-a-is-positive-definite-and-zero-less-than-omega-less-than-two` | 2 |
| `ex-stationary-splitting-with-an-initial-error-missing-an-unstable-eigenspace` | 0 |
| `ex-jacobi-iteration-for-a-strictly-diagonally-dominant-matrix` | 3 |
| `ex-sor-iteration-for-a-positive-definite-matrix-with-omega-in-zero-two` | 3 |

The scoped dependency-level recomputation found 12 items, levels 0–3, no
cycles, and no label mismatches. Manifest dependencies and carrier frontmatter
were compared after the final proof edits.

## Supplier and axiom checks

The complete current Statements/Definitions and Proofs were inspected for the
logical suppliers in the item dependencies, including the canonical splitting
definition and convergence criterion, the fixed-order Jacobi/GS/SOR procedures,
triangular substitution, the triangular/diagonal matrix convention, the
Hermitian positive-definite definition, determinant identities, and complex
algebraic closure. The use sites retain their supplier hypotheses. The
published spectral-radius criterion is used only for the all-start,
all-right-hand-side statement; the local examples distinguish it from
convergence for one selected initial error.

The batch-2 prerequisite page `sparse-matrix-models-and-kernel-costs` is now
present in the current batch-2 manifest and draft page. Its seven actual
supplier items were inspected. The CSR definition keeps the zero-based stored
entry count distinct from `nnz` when duplicates or explicit zeros occur; its
matvec theorem assumes a valid record and exact field arithmetic; the separate
storage theorem states only its declared operation/storage counts. Batch 18
uses no CSR access, storage, or cost claim: every assigned result is stated for
finite matrices in general and no item depends on a CSR item. The declared
same-frontier page edge is recorded as verified context in
`batch-18.cross-batch-dependencies.json`; there is no unresolved item-level
supplier or invented excerpt.

The local graph, eigenvector, and finite-dimensional algebra arguments are
choice-free. The axiom audit also traced the imported complex-closure and
spectral-radius supplier branches: the transitive `Countable Choice` edge in
the sequential-continuity theorem belongs to its converse direction, which the
real-root/IVT branch does not use. No local proof uses that branch or adds an
Axiom of Choice dependency; the proof contracts record no local axioms.

## Source reading and dispositions

Four full-text sources were fetched, inspected, and mapped in
`batch-18.coverage.json`:

- Saad, *Iterative Methods for Sparse Linear Systems*, 2nd ed., Chapter 4
  §§4.1–4.2.5, printed pp. 105–126: fixed-order method conventions, Richardson,
  Jacobi, Gauss–Seidel, SOR, the spectral-radius discussion, strict/irreducible
  weak diagonal dominance, and the HPD SOR iff statement. The source states the
  SOR iff theorem but does not supply its complete proof; the local determinant
  and energy-identity proof does. The consistent-ordering optimal-parameter
  material in §4.2.5 was read only to delimit its hypotheses; no general
  optimal-omega formula is asserted.
- Cornell CS6210 Fall 2012 Lecture 31, complete 5-page PDF: splitting, method
  updates, strict-dominance bounds, and SOR recurrence convention.
- Rutgers MATH 574 Lecture Notes, §3, complete 4-page PDF: method recurrences,
  weak diagonal dominance, necessary SOR parameter range, and theorem
  statements; the local proof supplies the complete missing argument.
- Cornell CS6210 Fall 2012 Lecture 33, complete 5-page PDF: the model-problem
  SOR/Jacobi relation under red-black ordering. It is not imported as a general
  convergence-factor or optimal-parameter claim.

Each source locator, supported item, and harvested-result disposition is in the
coverage file. `source-fetch-check --stamp` reported 4/4 sources fetch-verified,
4/4 resolved, and zero documented drops; the final check reported zero newly
stamped sources. Earlier targeted PDF line-open attempts timed out, then the
full-text PDF route was fetched and inspected; no source remains unresolved and
no `source_resolution` fallback is applicable.

## Proof scope and checks

The finite-budget methods define dimensions, budgets, zero-pivot/invalid
parameter returns, and exact updates without promising convergence or an
accuracy certificate. The convergence proofs state their distinct matrix
hypotheses. The SOR iff argument uses the determinant ratio for the necessary
parameter interval and the full Hermitian energy identity for positive
definiteness; its sufficiency direction uses the locally assumed interval,
without citing a step from the convergence direction. The examples include
exact rational/matrix finite checks recorded in the proof contracts.

Final scoped checks after the carrier, manifest, and contract edits:

- Scoped item dependency levels: 12 items, levels 0–3, no cycles or mismatches.
- `node tools/tsx-run.mjs tools/precheck.mts` on the 12 carriers: 7 proof-bearing
  items passed; 5 definitions/algorithms were not applicable.
- `node tools/proof-layout.mjs` on the 12 items: 28 numbered steps, 0 defects.
- `node tools/rendercheck.mjs` on the 12 carriers and two pages: 14 files,
  0 errors and 0 warnings.
- `node tools/content-policy.mjs` on the batch manifest: 12 items,
  0 errors and 0 warnings.
- Focused `node tools/depcheck.mjs --items-file ...`: 0 errors and 0 warnings;
  690-item / 78-page dependency closure checked.
- Strict proof contracts: all 12 items checked, 0 errors and 0 warnings.
- Source check: 4/4 sources fetch-verified and resolved; the preceding
  `--stamp` run newly stamped 0 sources.
- Manifest/carrier comparison: all 12 direct dependency arrays and levels
  match; every proof-bearing manifest strategy matches its carrier. The
  cross-batch dependency input parses and contains one verified page edge.

All 12 items have hash-current Step 1 `ready` records listing their direct
item dependencies. These are authoring-readiness records, not independent
mathematical approval. No shared plan, published content, unified dependency
ledger, engine state, or verdict was edited; unified-ledger refresh remains an
owner operation.
