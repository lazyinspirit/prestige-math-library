# Batch 5 scaffold evidence — frontier-34-fa-prereqs

Status: **BLOCKED — NOT READY FOR SPLICE OR AUTHORING.** Date: 2026-09-08.
This is a diagnostic scaffold, not a declaration of complete mathematical review.
All 69 design items remain reserved, plus four supporting lemmas: 26/8 items in
FA-16 A/B and 30/9 in FA-17 A/B. Both A inventories remain below sixty.
Every manifest item has an explicit dependency array and a proof obligation.
Unresolved supplier IDs deliberately remain visible; they are not established results.

## Authority and scope

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the generated beta-5 task,
the generic beta-batch task, current plan, and the complete FA-16/FA-17 sections
of research/plan-functional-analysis-track.md (lines 1185–1322), together with
its page/provenance conventions and source/convention ledger. The functional
analysis design explicitly owns these pages. The representation-theory file's
§2 supplier table (line 145) says its Banach-algebra material is cited rather
than rebuilt; it does not override FA-17.

Writable deliverables are only this notes file and batch-5.pages.json and
batch-5.coverage.json. Neither the plan nor the prose design is writable under
the generated task. No published content, other batch, run control, or plan
was edited. The pre-existing dirty plan was preserved. Git HEAD on entry was
12927d03a; the .autopilot/frontier-34-fa-prereqs status file identifies this run.
Its cached report still showed drift running, so it was not treated as a claim
that a scaffold gate had cleared. No historical RESUME was used.

## Design/plan conflicts and conventions

1. FA-16 design explicitly requires FA-13–15 and MT-11/14. The plan has only
   the preceding compact-operator B edge; its transitive chain contains the
   named Hilbert and measure pages. A page edge through a B companion does
   not authorize an item dependency on a B-only result.
2. FA-17 design names FA-1/2/12 and five complex-analysis pages. The plan uses
   the preceding FA-16 B edge and those five complex-analysis edges. The
   omitted FA inputs are inherited in the page closure; their item interfaces
   still must be supplied and audited.
3. The design says the complex-analysis suppliers have empty inventories.
   They now have published items, at orders 288.07803–288.07813 before FA-17.
   The current plan, not the stale design status sentence, controls.
4. Inner products are linear in the first variable. Teschl's displayed SVD
   uses coefficients <u_j,f>, i.e. the opposite convention; the design's
   attribution that Teschl uses the first-variable convention is inaccurate
   for this fetched 2017 text. Translate SVD to <f,u_j>, trace to <Te,e>,
   and rank-one operators to x -> <x,v>u. Do not copy formulas verbatim.
5. Correct the circular compactness iff wording: singular values introduced
   only for compact operators cannot characterize compactness of arbitrary
   operators. The preserved corollary now states the approximation-number
   criterion, with equality to singular values proved separately.
6. R(z,a)=(z1-a)^(-1), derivative -R(z,a)^2. Unit norm is one and the algebra
   is nonzero. The finite-dimensional Calkin quotient and zero invariant
   summands need separate zero-algebra conventions.
7. No source's blanket choice assumptions replace local costs. FA-16's
   approximate-maximizer selection consumes countable choice; arbitrary
   kernel bases use AC. Spectral nonemptiness/weak-to-vector Cauchy use HB
   through dual separation. The published closed-range equivalence explicitly
   assumes DC, and quotient completeness explicitly assumes countable choice.

## Exact local interfaces read

- items/thm-banach-series-criterion.md: completeness implies convergence of
  absolutely summable normed-space series, over the common scalar convention.
  Used by Neumann series and Banach-valued Riemann-sum constructions.
- items/cor-dual-separates-points.md: real or complex normed-space dual separates
  distinct vectors, via the norming-functional theorem. Used only after scalar
  functionals annihilate a vector; it is not a vector-valued integral theorem.
- items/thm-liouville-bounded-entire-function.md: globally bounded entire scalar
  functions are constant. Nonemptiness proof must also establish boundedness
  on a compact disk and decay outside that disk.
- items/thm-global-cauchy-integral-formula-homology.md: an open set need not be
  connected; a finite cycle null-homologous in it gives the index-weighted
  formula. This is the right interface for disconnected/holed calculus domains.
  It does not construct an admissible cycle around an arbitrary compact set.
- items/thm-bounded-below-iff-injective-with-closed-range.md: **DC**, Banach
  domain and target, bounded linear map. Preserve these hypotheses for the
  spectral-part partition; do not use it for incomplete spaces.
- items/thm-quotient-of-banach-by-closed-subspace-is-banach.md: **countable
  choice**, closed linear subspace and quotient norm. The Calkin application
  still owes closedness/ideality of compact operators from FA-15.

These reads do not certify the complete transitive item closure.
Missing FA-13–15 interfaces prevent that certification. Every unresolved
semantic input is blocking, even if a structural validator passes.

## Fatal findings and open obligations

### B5-F1 — unsupplied Hilbert and compact-operator interfaces

At the initial read, live batches 3 and 4 and their canonical plan rows had
empty inventories. Required interfaces include Hilbert adjoints and C*-norm
identity, positive/self-adjoint operators, orthogonal decomposition, Parseval
for arbitrary index sets, maximal orthonormal families, compactness and its
sequential characterization, norm closure of compact operators, the compact
ideal property, Riesz–Schauder and Atkinson. The source design's reservations
are not local results. Representative dependency paths:

- FA-16 requires compact-operators-and-riesz-schauder-theory-examples -> its
  A page -> orthonormal-bases-parseval-and-fourier-series-examples -> its A
  page -> hilbert-space-geometry-and-riesz-representation-examples -> its A.
- thm-spectral-theorem-for-compact-self-adjoint-operators ->
  lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign
  -> thm-sequential-characterization-of-compact-operators (missing).
- def-absolute-value-and-singular-values-of-a-compact-operator ->
  thm-hilbert-adjoint-properties (missing).
- thm-hilbert-schmidt-norm-is-basis-independent ->
  thm-parseval-equivalences-for-a-complete-orthonormal-family (missing).
- cor-atkinson-in-calkin-algebra-language -> thm-atkinson (missing).

The same applies to FA-12's promised Bochner agreement: its exact supplier is
not yet known, and the manifest text expressly leaves that interface open.
Consumer closure must be rerun after the supplier batches land. No B-only item
may be used to bypass their missing A interfaces.

### B5-F2 — Lidskii proof not supplied; prerequisite pair needs plan authority

Teschl p.97 explicitly refers elsewhere for Lidskii; it proves the diagonal
self-adjoint case, not the general trace formula. Knapp's read §II.5 builds
trace class and its trace, not Lidskii. The author-hosted Simon paper and
bibliography could not be opened in this environment. Robert's complete §5
sketch was read as a diagnostic and cannot fill this gap: it omits proofs of
Weyl inequalities and spectral approximation, and its final paragraph assumes
that the orthogonal projection onto the closed generalized-eigenvector span
commutes with a nonnormal operator. Invariance does not imply this. For
A=[[1,1],[0,0]], that span for the nonzero eigenvalue is span(e1), and
P=diag(1,0) satisfies PA=A but AP=diag(1,0). The paragraph also calls A* itself
quasinilpotent in the general case. It must not be copied as proof.

The manifest retains thm-lidskii-for-trace-class-operators and explicitly names
its missing trace-zero and generalized-eigenspace decomposition suppliers.
The result is neither dropped nor restricted to normal operators.

**Concrete proposed A/B prerequisite package (not applied):**

- Title: Fredholm Determinants and the Lidskii Trace Formula.
- Category: functional-analysis.
- A slug: fredholm-determinants-and-the-lidskii-trace-formula.
- B slug: fredholm-determinants-and-the-lidskii-trace-formula-examples.
- Placement: after FA-17 B and before FA-18 A, proposed orders 288.0801 and
  288.0802 (check these remain unused at application time).
- Prerequisites: FA-16 core through trace ideals and cyclicity, FA-15 compact
  Fredholm theory, FA-17 resolvent/calculus and spectral radius, scalar complex
  power series and contour theory, finite-dimensional determinants and Jordan
  algebraic multiplicity. Exact item closure of this package is still owed.
- Required scope amendment: move the retained Lidskii endpoint from FA-16 to
  this new A page, and route its consumers after it. Do not make early FA-16
  require the new pair: that would create a cycle through trace-class inputs.
  This is a proposed split, not permission to omit the endpoint.
- A inventory in proof order (new reservations unless explicitly retained):
  1. def-fa5-algebraic-multiplicity-for-compact-operators — generalized nonzero
     eigenspaces and stable finite multiplicity, from FA-15.
  2. lem-fa5-finite-rank-compressions-converge-in-trace-norm — S1 density,
     strong convergence of given projections, ideal estimates.
  3. lem-fa5-weyl-eigenvalue-singular-value-inequalities — finite matrix
     inequalities then compact approximation; supply their full proofs.
  4. def-fa5-fredholm-determinant — trace-norm limit of finite-rank determinants.
  5. lem-fa5-determinant-trace-norm-continuity-and-growth — existence,
     representation independence, and product singular-value growth bound.
  6. lem-fa5-determinant-logarithmic-derivative — near zero, power-series
     identity with traces of powers; absolute/local uniform convergence.
  7. lem-fa5-determinant-zeros-and-algebraic-multiplicities — compact Fredholm
     splitting and local analytic factorization.
  8. lem-fa5-quasinilpotent-trace-class-has-zero-trace — finite compression,
     spectral-radius control and the determinant growth argument.
  9. lem-fa5-generalized-eigenspace-trace-decomposition — correct invariant
     quotient/compression argument, without assuming reducing subspaces.
  10. thm-lidskii-for-trace-class-operators — retained stable ID; absolute sum
      and algebraic multiplicities, including separable-support reduction.
- B inventory: ex-fa5-fredholm-determinant-of-a-finite-rank-operator;
  ex-fa5-diagonal-trace-class-determinant; ex-fa5-volterra-square-has-zero-trace;
  cex-fa5-invariant-subspace-need-not-reduce-an-operator. Each depends only on
  the new A and earlier A material; B remains a leaf.

This package is a fatal proposed repair requiring addition to the prose and
plan by their authorized writer. Its proof/source obligations are not claimed
closed. An alternative fully sourced proof that fits before FA-16's endpoint
may avoid the split, but no such closure was established here.

### B5-F3 — unclosed supporting mathematics within the pairs

These obligations remain load-bearing and are not excused by the blockers above:

- Complete the arbitrary-index HS/kernel proof for sigma-finite product spaces.
  Published Tonelli is not automatically Tonelli over an uncountable ONB.
  A finite-tensor-density argument must be given or supplied in proof order.
- Prove the continuous-positive-kernel diagonal trace formula retained on B;
  an arbitrary L2 representative has no canonical restriction to the diagonal.
  Do not weaken it to a finite-rank example to pass source gates.
- Complete complexification norm/completeness/uniqueness as separate local
  results; the definition's description is not a proof of its assertions.
- Complete Banach-valued contour integral construction, double integration,
  coefficient estimates for the radius formula, and Bochner agreement.
- Prove the new grid-boundary admissible-cycle lemma in full, including nested
  separated cycles. Shirbisheh §2.5's single-curve simplification does not
  establish arbitrary-holed-domain closure. Define holomorphic germs precisely.
- Retain the functional-calculus composition rule harvested from Theorem 2.5.5;
  it needs the image/preimage contour conditions proved, not assumed.
- Supply local disk-algebra completeness and maximum-modulus interfaces for
  the strict ambient-spectrum inclusion example, and measurable finite-set
  selection for the multiplication-operator example.
- Check every example's scalar summation/integration and operator vocabulary
  dependency explicitly; present dependency arrays are a proposed core graph,
  not a claim that all leaf calculations already have full semantic closure.

### B5-F4 — source closure and executable fetch evidence fail

The coverage file records two independent treatments for each A page and a
third Lidskii diagnostic source. Only the exact named results listed there
are harvested; every other proposed item is listed in open_source_obligations.
Full-book web availability does not certify unread chapter ranges. The
coverage checker verifies shape, not complete mathematical source backing.

Web PDF text was accessible for the Teschl 2017 mirror, Knapp, Shirbisheh and
Robert. Local curl and Node fetch both fail DNS (curl code 6 / EAI_AGAIN),
including for those same URLs. Therefore zero fetch_verified stamps were
invented. ETH copies returned web errors, including the alternate author path;
Simon access also failed. Original URLs and attempts are retained. Source
replacement must preserve all mathematics and use a newly read harvest.

## Continuation

Reread the current manifest, source locators, supplier manifests and these open
obligations after any handoff. First resolve the missing A interfaces and
source access; then finish the local helper proofs and the Lidskii placement
repair. Rerun the complete closure and all required checks. Neither a green
page-plan validator nor the passing coverage-shape check licenses this batch.

## Checks actually run and retained evidence

All output summaries below refer to the filesystem snapshot at execution;
other live batches can change independently. Full policy diagnostics,
liveness results, source-fetch failures and dependency scan evidence are
retained inside batch-5.coverage.json.

| Command | Result |
|---|---|
| `node tools/coverage-checklist.mjs research/frontier-34-fa-prereqs-batch-5.coverage.json --require-destination` | Exit 0: 2 A pages, 29 harvested rows, no shape errors/warnings. Incomplete harvest remains explicitly blocked. |
| `node tools/manifest-deps.mjs research/frontier-34-fa-prereqs-batch-*.pages.json` | Exit 0: 218 items across the live run at check time, all explicit arrays. |
| `node tools/content-policy.mjs research/frontier-34-fa-prereqs-batch-*.pages.json --manifest-only --json` | Exit 1: 60 errors, 32 concerning owned items; all 32 owned errors are unresolved dependencies. Other batches also have missing suppliers and an existing-ID collision. No edits made to them. |
| `node tools/validate-plan.mjs research/plan-spec.json` | Exit 0; canonical plan only, not approval of the unspliced inventories. |
| `node tools/extcheck.mjs` | Exit 0 with existing warnings; no prohibited Foundations catalogue path reported. |
| `node tools/source-fetch-check.mjs --coverage research/frontier-34-fa-prereqs-batch-5.coverage.json --stamp --timeout-sec 10` | Exit 1: 0/5 verified, all EAI_AGAIN. |
| `node tools/url-sweep.mjs --coverage research/frontier-34-fa-prereqs-batch-5.coverage.json --out /tmp/fa5-liveness.json --fail-on-dead` | Exit 1: 0/7 live in local network; all DNS failures. Includes retained original/recovery URLs. |
| `node tools/source-backing.mjs --coverage research/frontier-34-fa-prereqs-batch-5.coverage.json --liveness /tmp/fa5-liveness.json --require-verified` | Exit 1: 21 harvested target items lack executable verified backing. This count excludes still-unharvested obligations. |
| `node tools/depcheck.mjs --quiet` | Exit 0, 474 existing warnings. Canonical content only. |
| Custom read-only Python/YAML closure and collision audit | 197 pages, 3982 reachable item IDs, 18 missing target IDs, zero cycles after excluding links occurring only in Remarks, zero cross-page B dependency edges, no owned ID/alias collisions. Scanned 397 manifest files, retaining historical occurrences as evidence rather than treating them as live suppliers. |

The initial custom scan over-counted orientation-only forward references;
its apparent cycles were discarded after matching the repository's actual
Remarks exclusion. Its initial YAML delimiter split was also corrected;
the final scan has no parse errors. These were audit-script defects, not
published mathematical findings.

### B5-F5 — inherited within-page order findings need reconciliation

The final scan identified six authored dependency edges that point to a later
item in the canonical plan's same-page inventory. These are outside this
batch's writable scope and prevent a claim that every inherited edge is in
proof order. The canonical validators' passes do not resolve this stricter
contract finding:

- `thm-holder-inequality-for-integrals` -> `prop-essential-supremum-is-attained-as-the-least-essential-bound`.
- `thm-minkowski-inequality-for-integrals` -> `prop-essential-supremum-is-attained-as-the-least-essential-bound`.
- `lem-composition-operator-norm-inequality` -> `def-space-of-bounded-linear-operators`.
- `thm-generalized-holder-inequality-for-products` -> `prop-essential-supremum-is-attained-as-the-least-essential-bound`.
- `fs-measurable-sections-imply-product-measurability` -> `thm-iterated-section-measures-agree-on-product-measurable-sets`.
- `lem-operator-norm-is-a-norm` -> `def-space-of-bounded-linear-operators`.

Compare each authored statement and actual page order with the plan before certifying; do not silently reorder published content.

The missing targets in the final item closure are:

- `def-compact-linear-operator`.
- `def-hilbert-space`.
- `def-orthogonality-and-orthogonal-complement`.
- `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`.
- `def-self-adjoint-positive-unitary-and-normal-operator`.
- `lem-compositions-with-a-compact-operator-are-compact`.
- `lem-fa5-generalized-eigenspace-trace-decomposition`.
- `lem-fa5-quasinilpotent-trace-class-has-zero-trace`.
- `lem-finite-rank-operators-are-compact`.
- `thm-atkinson`.
- `thm-cauchy-schwarz-in-an-inner-product-space`.
- `thm-existence-of-a-maximal-orthonormal-family`.
- `thm-hilbert-adjoint-properties`.
- `thm-norm-limit-of-compact-operators-is-compact`.
- `thm-orthogonal-decomposition-by-a-closed-subspace`.
- `thm-parseval-equivalences-for-a-complete-orthonormal-family`.
- `thm-riesz-schauder-spectrum-of-a-compact-operator`.
- `thm-sequential-characterization-of-compact-operators`.

Final scope check: only the three owned repository deliverables were written. No publication, commit, or run transition was attempted.
