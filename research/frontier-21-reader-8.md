# frontier-21 reader-8 report

Date: Thursday, August 27, 2026.
Batch: `research/frontier-21-batch-8.pages.json`

## Opened scope

- Control artifacts opened: `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `research/frontier-21-reader.task.md`, `research/frontier-21-beta-8.task.md`, `research/frontier-21-batch-8.pages.json`, `research/frontier-21-batch-8.coverage.json`, `research/frontier-21-batch-8.notes.md`, `research/frontier-21-alpha-step4.md`, `research/plan-complex-analysis-track.md`, and `research/plan-spec.json`.
- Assigned page paths checked: `library/complex-analysis/the-argument-principle-and-rouche.md`, `library/complex-analysis/the-argument-principle-and-rouche-examples.md`, `library/complex-analysis/domains-of-holomorphy-and-pseudoconvexity.md`, and `library/complex-analysis/domains-of-holomorphy-and-pseudoconvexity-examples.md`.
- Assigned item scope: opened all `27` extant CA-10 item files and verified the `37` SC-4 item paths declared in the manifest are currently absent on disk.
- Dependency items opened for verification: `36`.

```text
def-meromorphic-function-complex-domain
def-admissible-cycle-for-residue-theorem
def-order-of-zero-holomorphic-function
def-integration-and-index-of-complex-chain
thm-zero-order-factorization-holomorphic-function
thm-pole-characterizations
thm-algebra-of-complex-derivatives
cor-complex-differentiability-implies-continuity
lem-finiteness-support-residue-sum
thm-residue-theorem-null-homologous-cycle
def-winding-number-closed-complex-contour
cor-winding-number-is-the-normalized-argument-increment
def-complex-line-integral-over-a-rectifiable-path
thm-chain-rule-for-complex-derivatives
thm-contour-parameter-integrals-are-holomorphic
thm-winding-number-is-integer
thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
thm-weierstrass-convergence-holomorphic-functions
thm-isolated-zeros-holomorphic-function
def-complex-domain
thm-open-mapping-theorem-holomorphic-functions
cor-local-multiplicity-count-holomorphic-map
def-complex-contours-reversal-concatenation-and-closedness
thm-riemann-stieltjes-and-parametric-contour-integrals-agree
rem-complex-contours-as-planar-rectifiable-paths
thm-every-rectifiable-path-has-an-arc-length-parametrization
thm-invariance-of-complex-line-integrals-under-increasing-reparametrization
thm-fundamental-theorem-for-complex-line-integrals
thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment
lem-local-holomorphic-logarithm-nonvanishing-function-on-disc
cor-holomorphic-logarithm-has-the-logarithmic-derivative
lem-contour-subdivision-into-discs-missing-a-point
prop-reversal-and-concatenation-of-complex-line-integrals
thm-continuous-logarithms-exist-along-a-contour
thm-winding-number-chain-laws
lem-logarithm-branch-for-a-linear-factor-on-a-disc
```

## Confirmed defects

1. `items/thm-argument-principle-as-image-winding-number.md:70`
   Disposition: editable in-flight item, left unrepaired in this pass.
   Severity: fatal.
   Defect: `unlicensed-inference`.
   Evidence: step `1.2` rewrites the contour integral for a general closed complex contour as
   `\int_a^b (f\circ\gamma)'(t)/f(\gamma(t))\,dt = \int_a^b f'(\gamma(t))\gamma'(t)/f(\gamma(t))\,dt`.
   But `def-complex-contours-reversal-concatenation-and-closedness` defines a complex contour as a rectifiable path, and `def-complex-line-integral-over-a-rectifiable-path` uses componentwise Riemann-Stieltjes integration. The only parametrized equality I opened, `thm-riemann-stieltjes-and-parametric-contour-integrals-agree`, requires piecewise-`C^1` regularity. The current theorem statement quantifies over all closed complex contours, so the proof does not justify the claim as written.

2. `items/ex-the-inverse-contour-formula-recovers-a-local-inverse-value.md:30-54`
   Disposition: editable in-flight item, left unrepaired in this pass.
   Severity: fatal.
   Defect: `unlicensed-inference` and `overstrong-title-or-statement`.
   Evidence: step `1.1` says one quadratic root is "close to `0`" and the other is "close to `-1`", but that is not a proof that exactly one root lies inside `|z|=1/4` for every `|w|<1/8`. The displayed witness `(-1+\sqrt{1+4w})/2` also leaves the square-root branch unspecified. Since the item's point is the exact enclosed preimage, the current witness argument is not mathematically complete.

3. `items/thm-weighted-argument-principle.md:38-40`
   Disposition: editable in-flight item, left unrepaired in this pass.
   Severity: nonfatal.
   Defect: `ill-formed`.
   Evidence: `rendercheck` reports that the statement display uses a hard line break between the opening and closing `$$`, so the main formula mis-renders on the current bytes.

4. `items/rem-fundamental-theorem-of-algebra-via-rouche.md:36-37`
   Disposition: editable in-flight item, left unrepaired in this pass.
   Severity: nonfatal.
   Defect: `ill-formed`.
   Evidence: `rendercheck` reports the same multiline-display error in the tail-bound inequality display.

5. `library/complex-analysis/domains-of-holomorphy-and-pseudoconvexity.md`
   Disposition: editable assigned A-page prose, left unrepaired in this pass.
   Severity: fatal.
   Defect: page missing on disk.
   Evidence: `research/frontier-21-batch-8.pages.json:290-569` declares this A page and its `27` items, but the current page file does not exist.

6. Missing SC-4 A-page item files
   Disposition: editable in-flight items, left unrepaired in this pass.
   Severity: fatal.
   Evidence: the following manifest-declared A-page item files are absent on disk.

```text
def-holomorphically-convex-hull-and-domain
lem-basic-properties-of-the-holomorphic-hull
def-polydisc-boundary-radius
lem-cauchy-estimates-propagate-to-holomorphic-hulls
thm-cartan-thullen-boundary-radius-theorem
thm-cartan-thullen-theorem
lem-finite-dimensional-separation-of-a-compact-convex-set-and-a-point
thm-convex-domains-are-holomorphically-convex
cor-convex-domains-are-domains-of-holomorphy
def-plurisubharmonic-function
lem-affine-line-independence-in-the-definition-of-plurisubharmonicity
def-levi-form-and-strict-plurisubharmonicity
thm-c-two-levi-criterion-for-plurisubharmonicity
thm-decreasing-limits-of-plurisubharmonic-functions
thm-holomorphic-pullback-of-plurisubharmonic-functions
thm-stability-operations-for-plurisubharmonic-functions
thm-upper-envelope-theorem-for-plurisubharmonic-functions
thm-maximum-principle-for-plurisubharmonic-functions
cor-log-modulus-of-a-holomorphic-function-is-plurisubharmonic
def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity
def-levi-pseudoconvex-domain
lem-levi-pseudoconvexity-is-independent-of-defining-function
def-continuous-family-of-analytic-discs
thm-continuity-principle-for-domains-of-holomorphy
thm-domains-of-holomorphy-are-hartogs-pseudoconvex
thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains
```

7. `library/complex-analysis/domains-of-holomorphy-and-pseudoconvexity-examples.md`
   Disposition: uneditable in this role because Step 6a does not permit B-page prose authoring.
   Severity: fatal.
   Defect: `ill-formed`.
   Evidence: `research/frontier-21-batch-8.pages.json:573-620` declares this B page, but the current page file does not exist. This is the only defect duplicated into the schema JSON findings artifact.

8. Missing SC-4 B-page item files
   Disposition: editable in-flight items, left unrepaired in this pass.
   Severity: fatal.
   Evidence: the following manifest-declared B-page item files are absent on disk.

```text
ex-the-bidisc-is-holomorphically-convex
ex-the-ball-is-levi-pseudoconvex
ex-a-convex-domain-is-a-domain-of-holomorphy
ex-the-holomorphic-hull-of-a-circle-in-c-is-the-filled-disc
ex-the-holomorphic-hull-of-a-product-torus-in-the-bidisc-is-the-polydisc
ex-minus-log-boundary-distance-is-plurisubharmonic-on-a-half-space
cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex
cex-a-domain-of-holomorphy-need-not-be-convex
fs-every-domain-in-c-n-is-a-domain-of-holomorphy
fs-the-union-of-two-domains-of-holomorphy-is-a-domain-of-holomorphy
```

9. `research/frontier-21-batch-8.proof-contracts.json`
   Disposition: report-only blocker; not representable in the Step-6a JSON schema.
   Severity: fatal for compliant repair flow.
   Evidence: the batch proof-contract artifact is absent on the current bytes. A material item repair would therefore require first minting the missing batch contract and then syncing the touched entries.

## Edits

- Wrote this report.
- Wrote `research/frontier-21-reader-findings-8.json`.
- No batch item, page, manifest, coverage, or proof-contract bytes were changed in this pass.

## Page verdicts

- `library/complex-analysis/the-argument-principle-and-rouche.md`: fail on current bytes because `thm-argument-principle-as-image-winding-number` is not justified and `thm-weighted-argument-principle` currently mis-renders.
- `library/complex-analysis/the-argument-principle-and-rouche-examples.md`: fail on current bytes because `ex-the-inverse-contour-formula-recovers-a-local-inverse-value` does not prove its enclosed-root witness.
- `library/complex-analysis/domains-of-holomorphy-and-pseudoconvexity.md`: fail; page file missing.
- `library/complex-analysis/domains-of-holomorphy-and-pseudoconvexity-examples.md`: fail; page file missing and uneditable in this role.

## Verification

- `node tools/tsx-run.mjs tools/precheck.mts items/def-logarithmic-derivative-meromorphic-function.md items/def-weighted-zero-and-pole-counts-on-cycle.md items/lem-logarithmic-derivative-order-residue.md items/thm-argument-principle-null-homologous-cycle.md items/thm-argument-principle-as-image-winding-number.md items/cor-argument-principle-counts-preimages.md items/thm-weighted-argument-principle.md items/thm-rouche-theorem.md items/rem-fundamental-theorem-of-algebra-via-rouche.md items/cor-local-zero-count-via-rouche.md items/thm-continuity-of-zeros-locally-uniform-convergence.md items/thm-hurwitz-zero-free-limit.md items/thm-hurwitz-injective-limit.md items/rem-open-mapping-theorem-via-argument-principle.md items/rem-local-degree-argument-principle-agreement.md items/thm-holomorphic-inverse-contour-formula.md items/ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc.md items/ex-z-five-plus-three-z-plus-one-has-four-zeros-in-the-annulus-one-to-two.md items/ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc.md items/ex-a-cubic-image-curve-has-winding-number-three-about-the-origin.md items/ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence.md items/ex-the-inverse-contour-formula-recovers-a-local-inverse-value.md items/cex-z-over-n-shows-why-hurwitz-needs-the-or-constant-clause.md items/cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle.md items/cex-weak-boundary-inequality-does-not-suffice-for-rouche.md items/fs-a-locally-uniform-limit-of-injective-holomorphic-functions-is-injective.md items/fs-the-argument-principle-counts-zeros-without-multiplicity.md`
  Result: `22 checked, 0 failing`.
- `node tools/rendercheck.mjs library/complex-analysis/the-argument-principle-and-rouche.md library/complex-analysis/the-argument-principle-and-rouche-examples.md items/def-logarithmic-derivative-meromorphic-function.md items/def-weighted-zero-and-pole-counts-on-cycle.md items/lem-logarithmic-derivative-order-residue.md items/thm-argument-principle-null-homologous-cycle.md items/thm-argument-principle-as-image-winding-number.md items/cor-argument-principle-counts-preimages.md items/thm-weighted-argument-principle.md items/thm-rouche-theorem.md items/rem-fundamental-theorem-of-algebra-via-rouche.md items/cor-local-zero-count-via-rouche.md items/thm-continuity-of-zeros-locally-uniform-convergence.md items/thm-hurwitz-zero-free-limit.md items/thm-hurwitz-injective-limit.md items/rem-open-mapping-theorem-via-argument-principle.md items/rem-local-degree-argument-principle-agreement.md items/thm-holomorphic-inverse-contour-formula.md items/ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc.md items/ex-z-five-plus-three-z-plus-one-has-four-zeros-in-the-annulus-one-to-two.md items/ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc.md items/ex-a-cubic-image-curve-has-winding-number-three-about-the-origin.md items/ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence.md items/ex-the-inverse-contour-formula-recovers-a-local-inverse-value.md items/cex-z-over-n-shows-why-hurwitz-needs-the-or-constant-clause.md items/cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle.md items/cex-weak-boundary-inequality-does-not-suffice-for-rouche.md items/fs-a-locally-uniform-limit-of-injective-holomorphic-functions-is-injective.md items/fs-the-argument-principle-counts-zeros-without-multiplicity.md`
  Result: `2 ERROR(s)` on the multiline displays in `thm-weighted-argument-principle` and `rem-fundamental-theorem-of-algebra-via-rouche`.
- `node tools/content-policy.mjs research/frontier-21-batch-8.pages.json`
  Result: `64 scoped item(s), 37 error(s), 0 warning(s)`, all `scope-item-missing` on the unauthored SC-4 pair.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: `OK`, with only repository-wide `redundant-prereq` advisories.
- `node tools/coverage-checklist.mjs research/frontier-21-batch-8.coverage.json --require-destination`
  Result: `coverage-checklist: 2 page(s), 44 harvested result(s), 0 error(s), 1 warning(s)` with the standing `coverage-low-yield` warning on `the-argument-principle-and-rouche`.

## Blockers

- The SC-4 pair is still absent on current bytes: `2` page files and `37` declared item files are missing.
- `research/frontier-21-batch-8.proof-contracts.json` is absent, so a fully compliant material item repair would need a fresh batch contract before any touched-proof sync.
