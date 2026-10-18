# Batch 37 — Well-balanced balance laws and wet/dry fronts

Run `numerical-analysis-remaining-71-2026-10-17`, role Beta, pair
`well-balanced-balance-laws-and-wet-dry-fronts` /
`well-balanced-balance-laws-and-wet-dry-fronts-examples`, orders 2628/2629.
The assignment gives batch dependency level 4 and prerequisite batch 33. Its
task file lists scheduling input
`53f1559723ef3507f5d50bf062f735a8375cc540f6fc821401c1f3fdb795b504`. The
run-level `batch-dependency-levels.json` row says batch 37, level 4, requires
33, and has `input_sha256`
`ddd75e28f0ea33f5486073233367b94c125995d901fed2c2c1de2449fcfdee3c`. The row
and the assigned prerequisite agree. I left the shared scheduler artifact
unchanged.

## Plan control and scope reconciliation

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the full beta assignment,
`research/numerical-analysis-remaining-71-2026-10-17-owner-authoring-direction.md`,
the beta scaffold brief, the full PE05 design section in
`research/plan-numerical-spatial-track.md`, and the current `research/plan-spec.json`
rows before authoring. The owner direction overrides stale task/design
material. The manifest and both draft pages retain order, pair identity,
category and the 100-item cap: 12 A items and 3 B examples/counterexamples.

The PE05 design's prerequisite-interface list names NA26, PE01, PE02 and PE03;
the controlling plan-spec A row and assignment manifest put only PE03 in
`requires`. The plan controls that conflict, so the A page requires PE03 only;
the B page requires its A page. The design's scope and warnings are retained:
specified dry convention, hydrostatic reconstruction, exact lake-at-rest
preservation, water conservation, nonnegative depth under the face-specific
CFL, smooth-bed source consistency and a conditional weak-limit theorem.
Bed-step fluxes are defined discretely, but no continuum path product across a
bed jump is asserted. No entropy inequality, AP/stiff-relaxation result or
unconditional convergence/compactness result is claimed. Plan-spec's
conditional weak-limit requirement is met by an explicit strong-convergence
theorem with a proved source-quadrature limit.

## Inventory, dependencies and item levels

Direct logical dependencies and levels below were read from the scaffold
manifest before authoring, checked against item frontmatter afterward, and
recomputed with the current PE03 convexity-definition supplier included. The
level is zero without an in-run supplier and otherwise one plus the maximum
level of the in-run suppliers.

| Level | Item | Direct dependencies |
|---:|---|---|
| 0 | `def-pe05-shallow-water-balance-law` | — |
| 1 | `def-pe05-hydrostatic-hll-scheme` | `def-pe05-shallow-water-balance-law` |
| 1 | `lem-pe05-strong-l1-limit-preserves-dry-admissibility` | `def-pe05-shallow-water-balance-law` |
| 1 | `prop-pe05-shallow-water-admissible-state-set-is-convex` | `def-pe05-shallow-water-balance-law`, `def-pe03-convex-invariant-domain` |
| 2 | `lem-pe05-hll-depth-flux-decomposition` | `def-pe05-hydrostatic-hll-scheme` |
| 3 | `lem-pe05-hll-dry-face-direction-and-zero-flux` | `def-pe05-hydrostatic-hll-scheme`, `lem-pe05-hll-depth-flux-decomposition` |
| 2 | `thm-pe05-hydrostatic-reconstruction-is-well-balanced` | `def-pe05-shallow-water-balance-law`, `def-pe05-hydrostatic-hll-scheme` |
| 4 | `thm-pe05-hydrostatic-update-preserves-water-and-dry-admissibility` | `def-pe05-shallow-water-balance-law`, `def-pe05-hydrostatic-hll-scheme`, `def-pe03-convex-invariant-domain`, `prop-pe05-shallow-water-admissible-state-set-is-convex`, `lem-pe05-hll-depth-flux-decomposition`, `lem-pe05-hll-dry-face-direction-and-zero-flux` |
| 2 | `lem-pe05-source-quadrature-consistency` | `def-pe05-shallow-water-balance-law`, `def-pe05-hydrostatic-hll-scheme` |
| 2 | `lem-pe05-discrete-weak-identity-with-source` | `def-pe05-shallow-water-balance-law`, `def-pe05-hydrostatic-hll-scheme` |
| 2 | `lem-pe05-hll-flux-reconstruction-converges-under-strong-primitive-l1` | `def-pe05-shallow-water-balance-law`, `def-pe05-hydrostatic-hll-scheme`, `def-countable-choice`, `thm-dominated-convergence`, `thm-l-one-convergence-implies-convergence-in-measure`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `thm-riesz-subsequence-theorem-for-convergence-in-measure`, `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity` |
| 3 | `thm-pe05-strong-limit-satisfies-smooth-bed-balance-law` | `def-pe05-shallow-water-balance-law`, `def-pe05-hydrostatic-hll-scheme`, `def-countable-choice`, `lem-pe05-strong-l1-limit-preserves-dry-admissibility`, `lem-pe05-source-quadrature-consistency`, `lem-pe05-discrete-weak-identity-with-source`, `lem-pe05-hll-flux-reconstruction-converges-under-strong-primitive-l1` |
| 3 | `ex-pe05-lake-at-rest-over-a-dry-crest` | `def-pe05-shallow-water-balance-law`, `def-pe05-hydrostatic-hll-scheme`, `thm-pe05-hydrostatic-reconstruction-is-well-balanced` |
| 5 | `ex-pe05-hll-dam-break-wets-dry-cell` | `def-pe05-shallow-water-balance-law`, `def-pe05-hydrostatic-hll-scheme`, `thm-pe05-hydrostatic-update-preserves-water-and-dry-admissibility` |
| 1 | `cex-pe05-centered-source-produces-spurious-current` | `def-pe05-shallow-water-balance-law` |

The scoped dependency calculation checked 16 graph nodes (15 PE05 items plus
`def-pe03-convex-invariant-domain`): no cycles or level errors, maximum PE05
item level 5. These levels match the scaffold manifest. No dependency cycle
was found.

## Supplier body and hypothesis checks

The actual PE03 `def-pe03-convex-invariant-domain` Definition was read in full;
it defines segment convexity and invariance for a specified one-step map. The
current record `research/numerical-analysis-remaining-71-2026-10-17-step1-def-pe03-convex-invariant-domain.json`
is `ready` and hash-closed against the current supplier inputs (SHA-256
`444fce9e03eea8e291d3032f34f7fca0e9106fe36bb738c519770537712bced7`). This is
author readiness, not independent proof acceptance. The PE03 HLL invariant
theorem was also read but is not a supplier: it treats a shared conservative
HLL map, while PE05 has distinct one-sided momentum corrections; PE05 proves
its own invariant-domain result.

The current NA26 `thm-conservative-finite-volume-weak-limit` body and proof
were read. It is scalar and source-free, so it does not supply the local
vector/source theorem. PE05 proves the vector weak passage under strong local
L1 state and primitive-velocity convergence, locally uniform bounds,
initial-trace convergence and explicit smooth-bed source convergence. The
generic PE01 HLL definition assumes an open wet state domain and strictly
ordered speeds; PE05 defines the all-dry equal-zero branch itself. The PE02
high-resolution reconstruction interface is unused by this first-order
scheme. These interface checks do not add undeclared dependency edges.

## Mathematical construction and axiom use

The A page defines `K={(h,m): h>0} union {(0,0)}`, velocity, free surface,
physical flux and dry source value, then fully specifies hydrostatic clipping,
dry-safe HLL speeds/branches, one-sided corrections, source decomposition and
the face-specific CFL. Its TikZ face sketch marks the common max-bed height
and both reconstructed depth measurements; no proof relies on the diagram.

The local arguments prove: that bulk and initial strong local L1 limits remain
in `K` (using the negative-part estimate and the initial uniform velocity
bound); convexity of `K`; HLL mass-flux decomposition and
coefficient bounds including zero-speed branches; dry-face direction and the
zero-full-flux consequence; exact rest-state cancellation; wet-state strict
positivity and dry-state zero-momentum under the stated CFL; periodic water
conservation and finite-chain boundary discharge; the uniform O(Delta x)
smooth-bed source residual through the positive-part kink; the exact discrete
space-time identity; and convergence of reconstructed face fluxes under the
stated strong primitive convergence. The final weak-limit proof passes each
term of that identity to its limit and retains the initial boundary term.

Only the face-flux convergence lemma and its dependent weak-limit theorem
assume `AC_omega`, through the cited published translation-continuity and
finite-measure suppliers. Their subsequence arguments are explicit. No
dependent choice or full axiom of choice is used. Finite algebraic examples
and other local proofs are choice-free.

## Full-text sources and dispositions

`batch-37.coverage.json`, `batch-37.source-coverage.json` and
`batch-37.source-evidence.json` retain item coverage, URLs, locators, full-text
extent, source stamps and each harvested result's disposition. Five distinct works were fully read across the two pages; the A
page has multiple independent treatments including a book chapter and full
lecture notes. The current source-fetch check verifies 7/7 page/source records
with zero documented drops.

| Source | Extent and use/disposition |
|---|---|
| Audusse, Bouchut, Bristeau, Klein and Perthame, “A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows,” <https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf> | Complete 16-page paper inspected, including the full first-order proof, dry-bed CFL argument and shoreline discussion. Used for model/reconstruction/rest/source context. Its homogeneous-flux positivity premise and conditional entropy claim are not imported. Initial author-PDF retrieval timed out and then failed TLS; repository-browser retrieval timed out; a full 16-page institutional copy was recovered by curl and inspected. No source content was dropped. |
| Bouchut, “III. Shallow water problem – Hydrostatic reconstruction scheme,” <https://www.lestudium-ias.com/sites/default/files/07_-_bouchut.pdf> | Complete 20-page lecture read. Used as independent formulation and entropy-caveat check; the local proofs supply required details. |
| Ketcheson, LeVeque and del Razo, *Riemann Problems and Jupyter Solutions*, Chapter 12, <https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html> | Complete 555-line chapter read. Used for conserved-variable and HLL algebra context. Its Roe/Einfeldt-derived speeds and solver-specific positivity claims are not imported. |
| De Sterck and Ullrich, *Introduction to Computational PDEs*, Chapter 3, <https://climate.ucdavis.edu/AM452.pdf> | Full 143-page notes and Chapter 3 inspected using same-run batch-28 retrieval evidence; current FV, shared-flux and Theorem 3.1 passages rechecked. Its scalar/source-free theorem is not used as a vector/source proof. |
| Seibold, MIT 18.336 Lecture 19, <https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S09_lec19.pdf> | Complete six-page lecture read. Used for cell-average and shared-flux context, not as a source-bearing system limit theorem. |

There are no unresolved source retrievals, so no source is marked dropped and
no `source_resolution.status=dropped` record is applicable. The Audusse retry
history and searches are preserved in source evidence.

## Contracts, finite checks and scoped checks

`batch-37.proof-contracts.json` contains entries for all 15 items: 42 exact
numbered-step derivations, supplier citations with exact source-section
excerpts and use maps, and all eight boundary dispositions. Three exact
finite checks cover the dry-crest lake, one-step dam-break and centered-source
counterexample. `finite_smoke` is empty because no registered shallow-water
smoke check applies; the finite checks do not claim the general proofs.

Final scoped results:

- `manifest-deps`: 15 items, 0 normalized, 0 errors; manifest/frontmatter
  dependency arrays and both `requires` rows match.
- Scoped item levels: 16 graph nodes including the PE03 supplier, 0 errors;
  maximum PE05 item level 5.
- `precheck`: 15 files, 13 proof-bearing, 0 failures; 2 definitions are
  correctly not applicable.
- `proof-layout`: 15 items, 42 numbered steps, 0 defects.
- `rendercheck`: 17 files (15 items and 2 pages), pass; real KaTeX and renderer
  YAML parsing succeeded.
- `proof-contract --strict`: 15/15 entries, 0 errors, 0 warnings.
- `content-policy`: 15 items, 0 errors, 0 warnings.
- `coverage-checklist`: 2 pages and 22 harvested results, 0 errors, 1
  low-yield advisory. The A page has 6/18 directly included results; remaining
  results are individually marked `inline` with the absorbing item or
  `out-of-scope` with a specific reason. These are source-harvest dispositions,
  not omitted dependent claims.
- Focused `depcheck`, `fwdcheck` and `extcheck`: 0 errors and 0 warnings; no
  open forward references or recorded-not-proved dependencies.
- `source-fetch-check --stamp`: 7/7 fetch-verified and resolved, 0 new stamps,
  0 documented drops.
- `author-check` for batch 37: pass (precheck, render, provenance and strict
  contracts).
- Exact finite calculations: all three pass. The lake's five updates are
  zero; the dam-break interface flux is `(1/2,1/4)` and the adjacent states
  become `(3/4,1/8)` and `(1/4,1/8)` at maximum CFL 1; the central update has
  `m_0^+=-Delta t/16`.

## Step-1 records and owner handoff

The 15 current item records are 12 `ready` and 3 `escalated`. The theorem's
readiness record was refreshed after adding the admissibility lemma; its prior
ready hash had become stale through the explicit dependency change. The three
escalations are `prop-pe05-shallow-water-admissible-state-set-is-convex`,
`thm-pe05-hydrostatic-update-preserves-water-and-dry-admissibility`, and
`ex-pe05-hll-dam-break-wets-dry-cell`.

**Readiness-record defect requiring owner reconciliation:** I relied on the
pre-compaction note that the PE03 convexity definition had no Step-1 record.
The current disk check shows its `ready` record existed with timestamp
`2026-10-17T13:18:25.487Z`, before the PE05 escalations were recorded around
`2026-10-17T13:34Z`; `step1Decision` confirms the PE03 record is hash-closed.
The three PE05 escalation reasons therefore state stale evidence. I did not
overwrite or resolve them, as the assignment explicitly prohibits overwriting
an escalation. Their local arguments, contracts and checks are complete, but
these three dispositions remain open for owner reconciliation.

At handoff, recomputed Autopilot status reports the run still in `1-scaffold`,
55/71 covered, no work in flight, and the existing run-wide owner repair /
recertification blocker in `research/numerical-analysis-remaining-71-2026-10-17-step1-blockers.json`.
The status lists missing batches 25, 36, 37, 38, 42, 43, 57 and 60, plus eight
others. No Autopilot state or verdict was modified. No RESUME file was used to
infer run status; status was read from `.autopilot/`, and `git log` has no
committed history for this run-state path.
