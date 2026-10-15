# Batch 14 authoring notes — bayesian-computational-statistics-62

## Scope and plan reconciliation

The controlling BCS-11 design and plan-spec.json agree on the assigned A/B
page IDs, titles, category, order, and the A-page direct requires list:
conjugate-families-and-posterior-prediction,
brownian-motion-construction-and-continuity, and
direct-matrix-factorisations-lu-cholesky-and-qr. The manifest preserves
those exact page prerequisites.

The BCS-11 design's item-level Requires list names BCS-01, BCS-02, and BCS-03
and the Gaussian-process, Kolmogorov, multivariate-normal, square-root, and
Cholesky suppliers. The page-spec list is a page-order interface; it does not
replace those logical item dependencies. The authored theorem dependencies
include the exact Gaussian-process and cylinder-extension interfaces,
thm-multivariate-normal-conditional-law, and the Cholesky/solve results. The
Brownian page is retained as a declared page prerequisite. No Brownian path
continuity or Banach-space conclusion is imported for an arbitrary covariance
kernel.

The design proposes thm-finite-gaussian-process-posterior-and-predictive-laws
as the posterior result. Its arbitrary-index mean/kernel premise also needs a
local construction result before use, so
thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel
was added to the A page. The already-published
thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel only
covers index sets contained in a finite-dimensional Euclidean space; it does
not supply the design's arbitrary-set claim.

The dispatch scheduling input is
4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d. The
recomputed autopilot status at 2026-10-15T04:41:32Z remained at 1-scaffold,
with no worker in flight. Its current blocker is the batch-52 unquoted-colon
YAML error in
items/ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy.md; this
batch did not edit that carrier or run controller transitions.

## Item inventory and dependency levels

The run dependency artifact assigns batch 14 level 3 with prerequisite batch
6. Item levels below count in-run logical item suppliers. The actual BCS-03
conditional-normal draft currently declares level 0.

| Item | Home | In-run logical suppliers | Item level |
|---|---|---|---:|
| lem-real-line-is-standard-borel | A | — | 0 |
| thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel | A | local real-line Borel lemma | 1 |
| thm-finite-gaussian-process-posterior-and-predictive-laws | A | local GP construction theorem; thm-multivariate-normal-conditional-law | 2 |
| ex-finite-gaussian-process-posterior-with-nonzero-mean-and-correlated-noise | B | both A-page theorems | 3 |
| ex-singular-gaussian-process-prior-and-predictive-covariances | B | both A-page theorems | 3 |
| ex-gaussian-process-extrapolation-retains-independent-index-uncertainty | B | both A-page theorems | 3 |

No cycle is present. All three examples are consumers of the finite posterior
theorem; none is a dependency target.

## Supplier inspection and current boundary

- Read the published Gaussian-process definition, stochastic-process
  definition, multivariate-normal definition and characteristic-function
  theorem, the non-negative square-root theorem, consistent-family and
  cylinder-sigma-algebra definitions, the complete arbitrary-standard-Borel
  Kolmogorov-extension proof, and the published real completeness, rational
  countability, and rational-density interfaces. The pre-existing
  Euclidean-standard-Borel example has an ai-generated statement and is not
  used as a dependency. The local Borel lemma proves the needed interface
  from permitted suppliers.
- Read the published Brownian A-page summary. It explicitly separates the
  canonical cylinder process from its later continuity construction. The
  BCS-11 construction uses the cylinder-space interface only.
- Read the published Cholesky existence/uniqueness and triangular
  forward/back-substitution definitions and proof. The observed block alone
  is assumed positive definite, and its solves are valid by those suppliers.
- Read the complete current thm-multivariate-normal-conditional-law
  Statement and Proof. Its actual hypotheses are joint multivariate
  normality and positive-definite observed covariance; its Schur-complement
  covariance may be singular. The current item body is a complete draft with
  all listed direct supplier files present and published. This records the
  actual interface, not acceptance.
- The required page conjugate-families-and-posterior-prediction appeared
  during authoring. Its current batch-6 manifest and page carrier are present;
  the page remains a draft. I inspected the complete current
  thm-multivariate-normal-conditional-law statement and proof, which supplies
  the finite posterior argument under the declared jointly Gaussian and
  positive-definite observed-covariance hypotheses, including singular
  conditional covariance. The posterior theorem and its three examples have
  complete prerequisites, placement, and contracts for Step 1 readiness.
  This records draft-level verification only and does not imply supplier
  acceptance or independent approval.

## Mathematical and axiom boundaries

- Positive semidefiniteness means every finite Gram matrix is positive
  semidefinite. The construction states AC, proves finite-law enumeration
  invariance and restriction consistency, and applies the exact
  arbitrary-index standard-Borel Kolmogorov supplier.
- The resulting process is on the cylinder sigma-algebra. It gives no
  continuity, joint measurability in the index and sample point, or tight
  Banach-valued law.
- In finite regression, the observation-noise covariance may be singular but
  C=K_XX+R must be positive definite. The prior observation block, test
  block, and conditional test block may be singular. No pseudoinverse claim
  is made.
- The conditional Gaussian formula is one explicit kernel version defined
  for every observation vector. Regular conditional versions are only
  determined almost surely.
- AC is named at the process construction and carried through the Gaussian
  law, arbitrary-index extension, and conditional-normal interfaces. Finite
  matrix calculations add no choice requirement.

## Full-text source reading and coverage

Two independent full-text treatments were inspected for the A page:

- van der Vaart–van Zanten (2008), §2.1, printed pp. 202–203, in the complete
  23-page article PDF. It supports the arbitrary-index finite-dimensional
  Gaussian-process convention and covariance interpretation. RKHS and
  Banach-Gaussian support material is deferred to BCS-12.
- Rasmussen–Williams (2006), Gaussian Processes for Machine Learning,
  Chapter 2 §2.2, printed pp. 13–18, equations 2.13–2.24, and Algorithm 2.1
  on printed p. 19, in the complete chapter PDF. It supports mean/covariance
  and finite noisy/noise-free regression formulas, multiple test inputs, and
  Cholesky solves. Its regression formulas use zero mean and independent
  homoscedastic noise; the local proof establishes the broader declared
  covariance and singular-block regimes.
- Biskup, MATH 275D notes, Chapter 2, Definition 2.3 and the immediately
  following examples, in the complete 8-page PDF. The note identifies
  Euclidean R as standard Borel; the new local lemma proves this instance
  directly from the library's definitions and completeness/density results.

research/bayesian-computational-statistics-62-batch-14.coverage.json records
each selected result's disposition, exact locators, URLs, and supported item
IDs. The retrieved full PDFs were inspected through their PDF-rendered text;
local pdfinfo/pdftotext binaries were unavailable, so the local extract
attempt was replaced by direct inspection of the complete cited PDF sections.
An initial attempt to open the Durrett fifth-edition PDF at
https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf failed with an
UnexpectedStatusCode. A search for an alternate Euclidean standard-Borel
treatment found the accessible Biskup full-text notes above; its complete
relevant page was inspected. Durrett is not cited or treated as a dropped
source. No required mathematical coverage was lost.

Because the failed Durrett URL was only an exploratory candidate and is not a
harvested source, its recovery history is retained here without fabricating
the five retries required by the source-drop validator. The alternate
full-text retrieval succeeded, so recovery stopped at that point:

```json
{
  "source_resolution": {
    "status": "resolved_by_alternative; original candidate not harvested",
    "original_source": "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf",
    "attempts": [
      { "url": "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf", "outcome": "UnexpectedStatusCode; full text not retrieved; exact attempt time was not retained" },
      { "url": "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf", "outcome": "Full 8-page PDF fetched and stamped; cited page inspected" }
    ],
    "searches": [
      { "query": "Biskup MATH 275D notes Chapter 2 Kolmogorov Extension Theorem PDF standard Borel real line", "outcome": "Found the UCLA full-text PDF; its Definition 2.3 and following examples support the real-line standard-Borel interface." }
    ],
    "alternatives": [
      {
        "item": "lem-real-line-is-standard-borel",
        "argument": "The rationals are countable and dense, so the usual real topology is separable; the usual metric is complete. Thus the real line is Polish, and the identity Borel presentation gives a standard-Borel space.",
        "deps": ["def-polish-space", "def-separable-space", "def-standard-borel-space", "lem-rat-embeds-dense", "thm-euclidean-space-complete", "thm-rationals-countable"]
      }
    ]
  }
}
```

## Final scoped checks and scheduling evidence

- `precheck` passed all six carriers; `proof-layout` found 24 steps and zero
  defects; `rendercheck` checked the six carriers and two pages with zero
  errors or warnings. Strict proof-contract validation passed all six after
  aligning the contract's step inputs and the triangular-substitution fact
  labels.
- Scoped `depcheck`, `extcheck`, and `fwdcheck` passed. Manifest dependency
  validation found six items and zero normalization or errors. Content policy
  checked six items with zero errors or warnings. Coverage validation found
  one page and 18 harvested results with zero errors or warnings. Source fetch
  validation reports 3/3 sources fetch-verified and resolved.
- Recomputing item levels from this batch's current two manifests gives levels
  0, 1, 2, 3, 3, 3 as tabulated above, with no local errors. The run-wide item
  level check reports 54 empty-inventory errors on other pages; it reports no
  error for any of these six items.
- The run-wide batch-level check reports its shared artifact as stale. A
  read-only recomputation gives current input hash
  `aba61b0eac55583edc0c7c5c75bd63673350ff738e5d7fad8d6a180e0e3c352e`; batch
  14 remains level 3 with prerequisite batch 6. The recorded artifact hash is
  `0da7f8405e2f8ed8a94b5a81ee0fbc28acd9c7eb96f18dee73cce74545c03c6c`. The
  shared scheduling artifact was left unchanged for owner reconciliation.
- All six assigned items have current `ready` Step 1 records (`owner: false`),
  with their examined direct dependency IDs. Readiness records completion of
  this scaffolding pass and does not confer supplier acceptance or independent
  proof approval.
