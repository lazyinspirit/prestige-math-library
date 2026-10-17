# Batch 82 — Step 1 authoring notes

Run `numerical-optimization-dynamics-2026-10-16`; beta batch 82; pair
`gaussian-quadrature` / `gaussian-quadrature-examples`; assigned pair dependency
level 5; prerequisite batches 4, 61 and 67; scheduling input SHA-256
`6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`. The A
page is order 2448 and the B page order 2449 in
`numerical-linear-algebra-and-approximation`. Both remain draft.

## Controlling design and conflicts

I read the complete assigned NA-13 design at
`research/plan-numerical-analysis-track.md` L186 and the complete current NA-13
section at `research/plan-numerical-linear-track.md` L2212, alongside the
current owner authoring direction and the NA-13 entry in `research/plan-spec.json`.
The current repaired linear-algebra plan controls: the owner direction makes it
binding over the older task/design text, and plan-spec order 2448 points to that
repaired plan and its approved amendments. The older analysis-track section is
retained as design history only.

The stale section formulates the construction using a positive density
`dμ=w(x)dx`, does not carry the current exactness-only moment branch as
explicitly, and predates the certified Golub–Welsch extension. The controlling
contract instead covers positive finite measures with support of at least
`m+1` points, distinguishes the degree-`2m−1` exactness branch from the
degree-`2m` remainder branch, and includes a Jacobi-matrix eigenprocedure with
validated node and weight enclosures. The plan-spec amendment explicitly
approves that Golub–Welsch extension. The current A-page requirements match the
assigned four pages: `inner-product-spaces-and-orthogonality`,
`polynomial-interpolation-and-remainder`,
`verified-linear-systems-and-spectral-enclosures`, and
`restarted-and-block-eigensolvers`. The plan-spec `items: []` is a planning
scaffold, not an authored-inventory conflict; the current batch manifest and
carrier frontmatter give the 22-item inventory below.

## Mathematical scope, conventions, and axioms

The local moment definition uses a finite positive Borel measure on the
relative Borel sets of `[a,b]`, `a<b`, with total mass positive and relative
support containing at least `m+1` distinct points. It states the two moment
orders `r∈{2m−1,2m}`. The degree-`2m−1` branch constructs the monic degree-`m`
orthogonal polynomial from the positive degree-`m−1` moment matrix; it never
uses an undefined degree-`m` squared norm. The stronger degree-`2m` branch is
required for the finite, positive `∫p_m² dμ` term in the Hermite mean-value
remainder.

The A carriers locally establish the polynomial pairing, monic orthogonal
polynomials, three-term recurrence, simple interior roots, Hermite double-node
remainder, rule well-definedness, exactness and strict weight positivity,
Jacobi spectrum/node identity, spectral weight formula, Hermite mean-value
remainder, tensor exactness and node count, residual-gap weight bound, and
certified Golub–Welsch procedure/soundness. The proposal eigensolver is not a
certificate: Arnoldi output is checked for real Ritz values and zero midpoint
residual, made real before applying the real weight formula, and independently
validated over the full interval Jacobi family. Any failed finite arithmetic,
solve, comparison, or certificate returns `inconclusive`.

The Legendre B example assumes Countable Choice and declares it in its facts;
the general A-page arguments do not import that example's axiom branch. The
two-node cardinal-square and four-coordinate tensor examples need no additional
choice assumption. No axiom branch is silently merged or omitted.

## Inventory and dependency levels

The A page has 19 items and the B page has 3, both below the 100-item cap. The
levels below were recomputed on the complete live run graph; the item labels in
the manifest match. Consumers follow all in-run suppliers in ascending level.

| Level | A-page items |
| ---: | --- |
| 0 | `def-gauss-moment-data` |
| 1 | `def-coordinatewise-product-moment-functional`; `def-gauss-polynomial-moment-inner-product` |
| 2 | `thm-gauss-polynomial-moment-pairing-is-an-inner-product` |
| 3 | `thm-monic-gauss-orthogonal-polynomials-exist-uniquely` |
| 4 | `lem-gauss-monic-three-term-recurrence`; `thm-gauss-orthogonal-polynomial-has-simple-interior-zeros`; `thm-hermite-interpolant-double-node-remainder` |
| 5 | `def-gauss-quadrature-rule`; `thm-jacobi-matrix-spectrum-equals-gauss-nodes` |
| 6 | `lem-gauss-quadrature-rule-data-well-defined` |
| 7 | `def-tensor-product-gauss-rule`; `thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights` |
| 8 | `thm-gauss-hermite-mean-value-remainder`; `thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared`; `thm-tensor-product-gauss-exactness-and-exponential-node-count` |
| 9 | `lem-gauss-weight-residual-gap-bound` |
| 10 | `alg-golub-welsch-certified-node-and-weight-enclosures` |
| 11 | `thm-golub-welsch-certified-enclosures-are-sound` |

The B items are level 8 `ex-two-node-gauss-weights-from-cardinal-squares` and
level 9 `ex-four-dimensional-gauss-product-has-sixteen-nodes` and
`ex-two-node-gauss-legendre-exact-through-degree-three`. Direct dependency
arrays and page inventories are in `batch-82.pages.json` and the carriers.

## Cross-batch supplier audit

The assigned prerequisite-batch list is 4, 61 and 67. Current item frontmatter
also creates direct item-level dependencies on batch 14's VAL-INTERVAL
arithmetic; this additional edge is recorded explicitly and does not change the
assignment or page requirements. Current supplier bodies and their relevant
proofs/interfaces were inspected. Readiness records exist for all direct
assigned cross-batch items: six batch-4 NA-10 items are ready; five batch-14
VAL-INTERVAL items and four batch-61 VAL-LINEAR items have ready records marked
`owner: true`; the batch-67 LIN-EIGITER Arnoldi item has a ready record marked
`owner: false`. These are author-readiness records only, not independent
mathematical acceptance.

The batch-4 interpolation suppliers provide the coefficient representation,
monic node factors, cardinal basis and unique interpolant under distinct-node
hypotheses, and the terminal polynomial derivative used in the Hermite proof.
The batch-14 suppliers fix finite dyadic interval conventions, outward
operation/square-root behavior, and sound expression-DAG enclosures. The
batch-61 certifiers apply to the full interval families: the linear certifier
encloses unique coefficient solves on its certified branch, and the Hermitian
certifier encloses every ordered eigenvalue for the admitted Jacobi family.
The batch-67 procedure's own warning says residual acceptance alone does not
give a forward eigenvalue bound for a nonnormal matrix; it is used only to
propose midpoint Ritz data. The interval residual/Gram checks provide the
actual node and weight enclosures. Exact supplier excerpts, hypotheses,
readiness-record paths, and affected claims are in
`batch-82.cross-batch-dependencies.json`.

No cross-batch supplier remains unavailable at handoff. The revised local
residual-gap lemma now declares the positive-total-mass definition directly;
its proof bounds the normalized vector coordinate, not the unnormalized input.

## Source reading and retrieval history

The coverage file contains all harvested results and their item-level
dispositions. Three active full texts were read and fetch-verified:

| Source and URL | Full-text locator inspected | Supported items / disposition |
| --- | --- | --- |
| John A. Gubner, *Gaussian Quadrature and the Eigenvalue Problem*, [PDF](https://gubner.ece.wisc.edu/gaussquad.pdf) | Complete 7-page note; §§2–4; Proposition 1, Lemma 5, Theorems 6, 7, 10 and 12. Its nonconcentration hypothesis is stronger than the local finite-support hypothesis, which is proved locally. | Orthogonal-polynomial roots and recurrence, exactness/positive weights, Jacobi nodes and spectral weights; included. |
| MATH 373 Lecture Notes, Lecture 14, [PDF](https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf) | Complete 4-page note; all pages, §§10.2–10.5. The note's density-weight assumptions are narrower than the local finite positive-measure result. | Orthogonalization, roots, exactness, Hermite remainder, and the two-node Legendre example; included. |
| Walter Gautschi, “The Interplay Between Classical Analysis and (Numerical) Linear Algebra,” [PDF](https://web.stanford.edu/class/cme335/Golub.pdf) | Complete 30-page paper; §2.1, printed pp. 2–3. | Independent numerical-linear-algebra treatment of recurrence, Jacobi matrix, Golub–Welsch nodes and spectral weights; included as context, with identities proved locally. |

The dead Ovall `/math452` URL and searched official `/math451` alternative
each retain six recorded HTTP 404 attempts (initial failure plus five
recovery retries), search evidence, and `source_resolution.status: dropped`.
Relevant browser-read sections and candidate results remain in the source
history; no proof is imported from an unverified fetch. The corresponding local
proofs and the active Gubner, Rutgers and Gautschi sources preserve coverage;
dropping those URLs does not waive mathematical claims.

`coverage-checklist` reports 29 harvested results with zero errors and warnings.
`source-fetch-check --stamp` reports 3/5 sources fetch-verified (zero newly
stamped) and 5/5 resolved, with the two documented drops excluded from fetch
stamps. Retrieval attempts, alternative searches, local alternatives and each
harvested disposition remain in `batch-82.coverage.json`.

## Checks and Step 1 decisions

- `manifest-deps` on the batch manifest: 22 items, 0 normalized, 0 errors.
- Focused dependency-level recomputation: all 22 labels match the live run
  graph; no assigned cycle or level mismatch. The official whole-run check
  exits 1 on 30 empty scaffold inventories in other pairs; none is in batch 82.
- Focused `depcheck`: assigned items/pages and 1,036-item/164-page prerequisite
  closure pass with 0 errors and 0 warnings.
- `proof-layout`: 22 items, 74 steps, 0 defects.
- Scoped `precheck`: 22 files, 16 proof-bearing files checked, 0 failed; the
  definitions and algorithm are not applicable to phase proof format.
- Strict proof-contract check: 22/22, 0 errors, 0 warnings. The contracts
  record the actual steps, exact supplier excerpts, boundary cases and
  applicable finite checks.
- `rendercheck`: 24 assigned files, 0 errors. `coverage-checklist`: 1 page,
  29 harvested results, 0 errors, 0 warnings. Source fetch: 3/5 stamped and
  all 5 resolved including two documented drops.
- All 22 assigned items have current `ready` Step 1 records with their exact
  direct dependency arrays. These are authorship-completion records only.

The unscoped `step1-decisions check --run` cannot complete its corpus-wide scan:
while checking unrelated existing records it parses
`items/alg-chebyshev-composite-simpson-weighted-mass-matrix.md`, whose
frontmatter repeats `pipeline_run` (lines 7 and 26), and aborts with a duplicate
YAML-key error. That item is outside batch 82 and was not changed. Each assigned
record was written with the official `record` command, without `--owner`; the
individual assigned records and their dependency arrays were then checked.

Read-only autopilot status still reports the run in `1-scaffold`, with 75/107
units covered and batch 82 listed among the stage's missing authoring artifacts.
Its blocker file records only `stage-stalemate` for covered-but-incomplete units
44 and 54 and says owner/operator reconciliation is required. I did not edit
that blocker, verdicts, engine state, or stage status; this batch handoff does
not clear the owner-held run gate.

No test suite was run. No published content, shared plan, verdict, or engine
state was changed.
