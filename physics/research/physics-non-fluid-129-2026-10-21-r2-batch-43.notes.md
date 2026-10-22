# Batch 43 notes — Operator domains and boundary realizations

## Plan comparison

The current plan-spec.json row matches the assigned A/B page IDs, titles,
category, library, companion, and all three page prerequisites. Its empty
items arrays are the Step 1 authoring inventory, not a conflicting item
design. The detailed design's inventory supplies four A items and two B items;
all six are retained. A local A-page lemma is added to prove the minimal and
maximal interval Laplacian domains before the boundary classification uses
them.

## Item inventory and dependencies

The assigned design items are:

- A: def-nrqmx-extension-data
- A: thm-nrqmx-von-neumann-extension
- A: thm-nrqmx-interval-unitary-boundaries
- A: thm-nrqmx-half-line-momentum-obstruction
- B: ex-nrqmx-twisted-ring-spectrum
- B: cex-nrqmx-formal-symmetry-insufficient

The additional A supplier is lem-nrqmx-minimal-maximal-interval-laplacian-domains.
The computed in-run item levels are 0 for the definition and interval-domain
lemma, 1 for the deficiency extension theorem, 2 for the interval boundary and
half-line results, and 3 for the two B items. Batch 43 itself is level 0 with
no in-run batch prerequisites. The three A-page requires targets are external
mathematics pages; the B-to-A companion edge is within this pair. There are no
cross-batch dependency rows.

The assigned proof routes remain intact: the von Neumann result uses the
Cayley partial isometry, orthogonal range decompositions, and graph-domain
decomposition; the interval classification uses Green's form, Hermite-cubic
trace surjectivity, and maximal-isotropic boundary data; the half-line result
computes the maximal H¹ adjoint and solves both deficiency equations. The
example verifies the twisted Fourier family and its U(2) matrix, and the
counterexample connects the obstruction to Stone's theorem.

## Mathematical conventions and checks to preserve

Use complex Hilbert spaces with inner product linear in the first argument.
The scaled deficiency spaces are
ker(S* - i E_* I) and ker(S* + i E_* I) for a fixed E_*>0; they are
the ordinary deficiency spaces of S/E_*. The interval boundary convention is
Gamma_0=(f(0),f(L)), Gamma_1=(f'(0),-f'(L)), b=ell Gamma_1, and
U(a+i b)=a-i b. The source Asorey–Ibort–Marmo paper writes the inverse
unitary convention; both range over the same U(2), and the authored proof
uses the planned convention. The half-line computation fixes E_*=1 and gets
indices (1,0).

The complete local proof of the interval classification checks the trace map is
onto, identifies the adjoint boundary domain from Green's identity, and proves
the maximal-isotropic/unitary correspondence. The proof does not treat a
differential expression without its operator domain as a self-adjoint
realization.

## Source disposition

The A page uses Teschl's textbook and Costin's complete functional-analysis
course notes as independent treatments of deficiency spaces, the Cayley map,
and the von Neumann extension theorem. Asorey, Ibort, and Marmo provide the
boundary-form and interval U(2) convention comparison. Their interval
appendix and the Costin notes' Section 11.3 were inspected in full at the
locators recorded in physics-non-fluid-129-2026-10-21-r2-batch-43.coverage.json.
Teschl's Section 9.1 also covers the local minimal/maximal interval-domain
lemma. Full text was inspected before authoring, and
`source-fetch-check --stamp` verified all 5 page/source entries; no recovery
retry or source drop was needed. The source-fetch stamps and per-item
dispositions are in the coverage file. The local arguments supply the proof
steps, with the papers used as independent treatments and convention checks.

## Scoped checks and readiness

The final scoped checks report:

- Item dependency levels: 7 items on 2 pages, levels 0–3, no cycle or label
  mismatch.
- `precheck`: 6 proof-bearing items passed; the definition is not applicable.
- `proof-layout`: 7 items, 30 numbered steps, 0 defects.
- `proof-contract --strict`: all 6 proof-bearing items checked, 0 errors or
  warnings; the contracts include 71 exact supplier citations and 12 finite
  checks.
- `depcheck`: 7 selected items, 0 errors and 0 warnings; the transitive closure
  has 1,616 items and no item or page cycles.
- `content-policy`: 7 items, 0 errors and 0 warnings; `manifest-deps`: 7 items,
  no missing dependency arrays.
- `rendercheck`: 7 items and 2 pages, 0 errors or warnings.
- `source-fetch-check`: 5/5 source entries fetch-verified, 0 drops.

`loadStep1Record` found all 7 item placements and complete dependency
closures; all direct and transitive carriers exist, with the 7 assigned items
as the only drafts in the 1,981-item examined closure. Each final item has a
hash-current Step 1 `ready` record with its direct dependencies listed; these
records are authoring-readiness evidence, not independent proof approval. Both
pages remain below the 100-item cap. Batch 43 has no missing prerequisite or
in-run dependency cycle.

## Run-wide scheduler note

The recorded batch-43 scheduling row is level 0 with no in-run page
prerequisites, consistent with the final pair. A fresh run-wide dependency
calculation could not load another batch's unfinished bare-ID item inventory
(`Duplicate item undefined`); the scoped item-level calculation for batch 43
passes. This loader issue is outside the assigned pair; the shared run-level
dependency file was left to the owner, as required.

