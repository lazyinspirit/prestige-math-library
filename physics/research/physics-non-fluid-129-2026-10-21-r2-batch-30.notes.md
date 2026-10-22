# Batch 30 authoring notes — conformal construction of constrained initial data

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
Owned pair: `gr-fx02-conformal-constraint-construction` and
`gr-fx02-conformal-constraint-construction-examples`

## Scope and plan comparison

Read the complete assigned design section in
`research/plan-general-relativity-frontier-expansion-track.md` and the detailed
pair module in `research/frontier-expansion-2026-10-19/general-relativity/prose-scaffold.md`.
The design calls for four A-page items and two B-page examples, compact smooth
three-manifolds without boundary, vacuum data with `Lambda=0`, CMC trace `tau`,
covariant TT free data, an exact positive constant root, and a positive Fourier
inverse in one flat-torus case. It explicitly excludes general Yamabe,
non-CMC, puncture, matter, conformal-thin-sandwich, nonlinear implicit-function,
and general existence claims.

`research/plan-spec.json` has the correct page IDs, order 757/758, titles,
libraries, categories, and `requires` edges, but both pair item arrays are
empty. The detailed design supplies the six-item inventory below; the empty
arrays are therefore recorded as unpopulated inventory, not as a conflicting
scope instruction. The owner override file
`research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md`
was absent. The batch dependency-level plan puts batch 30 at level 1 after
batch 29.

## Authored inventory and in-run dependency levels

| Item | Placement | Level | In-run suppliers | Argument |
|---|---|---:|---|---|
| `def-gr-fx-conformal-constraint-data` | A | 0 | none | Defines abstract vacuum conformal data, curvature and Laplacian conventions, TT, residuals, units, and the separate embedded interpretation. Its well-definedness argument checks smoothness, metric positivity, the Levi-Civita connections, and coordinate independence. |
| `thm-gr-fx-lichnerowicz-reduction` | A | 1 | `def-gr-fx-conformal-constraint-data` | Derives the trace and norm weights, the three-dimensional scalar-curvature transformation, the upper-index TT divergence weight, automatic momentum constraint, and reversible Hamiltonian reduction. |
| `prop-gr-fx-constant-constraint-solution` | A | 2 | definition; reduction theorem | Reduces the stated constant seed equation to `phi^12=3A/(2 tau^2)` and identifies its unique positive root. Uniqueness is only among positive constants. |
| `prop-gr-fx-positive-linearized-constraint` | A | 3 | definition; reduction theorem; constant solution | Computes the directional derivative, proves positivity, and constructs the real Fourier inverse on the stated Sobolev spaces with a symbol bound. It makes no nonlinear nearby-data assertion. |
| `ex-gr-fx02-1` | B | 3 | definition; reduction theorem; constant solution | Verifies a nonzero constant covariant TT tensor on the flat torus, its units and norm, the exact root, and nonzero trace-free part of `K`. |
| `ex-gr-fx02-2` | B | 2 | definition; reduction theorem | Sets TT data and `tau` to zero, verifies infinitely many positive constant solutions, and tests the linearized zero mode to disprove coercivity. |

The levels are recomputed from the current six item files: 0, 1, 2, 3, 3,
and 2 in the table order. The maximum is below the page cap. The B page depends
on the A page within this batch and is not a cross-batch row.

## Supplier checks and conventions

Before authoring, the current `loadStep1Record` and `step1Decision` interfaces
were used to inspect the batch-29 prerequisite. All seven batch-29 assigned
items (five A items and two examples) have nonstale `ready` Step 1 records. The
exact page `gr-fx01-hypersurface-and-null-geometry` is present and its page
interface is retained as a verified prerequisite in
`research/physics-non-fluid-129-2026-10-21-r2-batch-30.cross-batch-dependencies.json`.
This records prerequisite availability, not independent proof approval.

The other A-page requirement,
`gr-gr14-full-high-regularity-symmetric-hyperbolic-proof`, is available as the
GR14 page and its current Fourier torus and differentiation carriers were read.
Its Fourier suppliers explicitly assume `AC_omega`; the Lorentzian
time-orientation and normal-field convention also inherits `AC_omega`. Each
item states this premise for the relevant embedded GR or Fourier interpretation.
The algebraic conformal definitions and calculations themselves do not spend a
choice principle. GR14 high-regularity local development is contextual only:
this batch proves no spacetime development or high-regularity existence claim.

The library extrinsic-curvature convention is
`K(X,Y)=g(nabla_X n,Y)`. The positive Hamiltonian quadratic formula is
unchanged by reversing `K`, but Gourgoulhon uses the opposite sign at §2.4,
equation (2.43). The local momentum proof derives the conformal divergence
using the library convention. Bartnik–Isenberg’s §4.1 discussion distinguishes
the conformal scalar equation from global solvability; that caveat is preserved
in the item scopes and examples.

## Source review

Two independent full-text treatments were retrieved and inspected:

1. É. Gourgoulhon, *3+1 Formalism and Bases of Numerical Relativity*, Lecture
   Notes in Physics 846 (2012), author preprint
   [arXiv:gr-qc/0703035](https://arxiv.org/pdf/gr-qc/0703035). Full 220-page PDF
   retrieved. Inspected §2.4 equation (2.43), §6.3.3 equations (6.48)–(6.52),
   §§6.4.1–6.4.2 equations (6.53), (6.79)–(6.83), §§6.5.2–6.5.3 equations
   (6.101)–(6.104), and §§8.2.2–8.2.4 equations (8.5)–(8.8), including
   surrounding derivations.
2. R. Bartnik and J. Isenberg, *The Constraint Equations*, in *The Einstein
   Equations and the Large Scale Behavior of Gravitational Fields* (Birkhäuser,
   2004), [arXiv:gr-qc/0405092](https://arxiv.org/pdf/gr-qc/0405092). Full
   34-page review chapter retrieved. Inspected complete §4.1, equations
   (47)–(56), surrounding derivation, and its caution that not every free-data
   choice yields a solution.

Searches recorded in the coverage file were:

- `Bartnik Isenberg The constraint equations arXiv conformal method 2004 pdf`
- `Gourgoulhon 3+1 formalism conformal method 6.2.3 Lichnerowicz equation PDF`
- `conformal method Einstein constraint equations CMC flat torus TT Lichnerowicz equation lecture notes PDF`

The source coverage record enumerates 16 harvested results with a disposition
and supported item for each. Both PDFs were subsequently verified and stamped
by `source-fetch-check`. No retrieval failed, no source was dropped, and no
`source_resolution` escalation was needed. Local `pdftotext` extraction was not
available, so the complete PDF bodies were inspected through the retrieved
PDF/full-text views; no reading claim is based on a failed extraction.

## Evidence and checks

The pair manifest is
`research/physics-non-fluid-129-2026-10-21-r2-batch-30.pages.json`.
It preserves the design’s domain, library, dependency roles, physical scopes,
page requirements, and the current six-item inventory. The proof contract is
generated from the final numbered arguments and contains exact supplier
sections, step claims and inputs, boundary dispositions, finite checks,
supplier hashes, and author-only risk notes. Coverage and cross-batch
dependency inputs are separate JSON artifacts as required.

## Final scoped checks and readiness

All assigned items have `Step 1` decision records with `decision: ready`,
`owner: false`, and current item/dependency hashes. `loadStep1Record` and
`step1Decision` report all six records closed. These records capture authoring
readiness only; they are not independent proof approval.

Final scoped results:

- `precheck.mts`: 6 items checked, 0 failing.
- `proof-layout.mjs`: 6 items, 15 numbered steps, 0 defects.
- `rendercheck.mjs`: all 6 items and 2 pages checked, 0 errors or warnings.
- `depcheck.mjs`: focused scope of 6 items and 2 pages, 0 errors or warnings;
  its prerequisite closure contains 1,460 items and 298 pages, with no cycle.
- `content-policy.mjs`: 6 items, 0 errors or warnings.
- `proof-contract.mjs --strict`: 6 items checked, 0 errors or warnings.
- `coverage-checklist.mjs`: 1 A page, 16 harvested results, 0 errors or warnings.
- `source-fetch-check.mjs`: both full-text source URLs fetch-verified and
  stamped; no drops.
- `manifest-deps.mjs`: 6 items, no missing dependency arrays.
- Scoped `dependencyLevels` recomputation: all 6 item levels match the table,
  with no cycle or other error.

Two run-wide owner inputs remain stale and were left untouched under the
dispatch boundary. The current batch graph still computes batch 30 at level 1
after batch 29, matching the recorded row, but the shared
`research/physics-non-fluid-129-2026-10-21-r2-batch-dependency-levels.json`
input hash is `e9464e11acecf8f1a8bda27ba93ac324cf04cd85b6d1fd546ef373621e7cc91b`
while recomputation from current manifests gives
`e3cc4f1fd388d65673b12b12d0a8b268a2ed763d73ff82a5aaef145e05210973`; the
run-wide checker therefore reports stale batch dependency levels. The
run-wide item-level checker also reports 133 errors across other pages,
including empty scaffold inventories and `ex-gr-fx14-1` recorded at level 3
instead of its computed level 4. The six owned item levels pass the scoped
calculation above. The owner should refresh the shared batch-level hash and
resolve the unrelated run-wide item-level findings before a full-run gate.
