# Reader 49 report

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader (read-only)  
Batch: `49`

## Opened inventory

- Assigned A page: `qftx-s3-partition-functions` at `library/advanced-qft-and-supersymmetry/qftx-s3-partition-functions.md`.
- Assigned B page: `qftx-s3-partition-functions-examples` at `library/advanced-qft-and-supersymmetry/qftx-s3-partition-functions-examples.md`.
- Assigned item, dependency level 0: `post-qftx-s3-cs-matter-localization-model` at `items/post-qftx-s3-cs-matter-localization-model.md`; it declares no item dependencies.
- Assigned item, dependency level 1: `ex-qftx-s3-cs-matter-matrix-integral` at `items/ex-qftx-s3-cs-matter-matrix-integral.md`; its direct supplier is the postulate above.
- Page prerequisite context: `qftx-qexact-field-theory-localization` at `library/advanced-qft-and-supersymmetry/qftx-qexact-field-theory-localization.md`, with its listed items `def-qftx-supersymmetry-fluctuation-complex` and `pthm-qftx-qexact-localization-ward-identity`. I also read the fluctuation definition's listed suppliers `def-qftx-susy-background-data` and `def-finite-dimensional-q-exact-localization-data`.
- Batch evidence read: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-49.pages.json`, `research/advanced-qft-supersymmetry-build-2026-10-23-batch-49.proof-contracts.json`, and `research/advanced-qft-supersymmetry-build-2026-10-23-batch-49.cross-batch-dependencies.json`. These were navigation and review evidence, not verdicts.

Both assigned page files contain frontmatter only, retain `page_layout: compact-v1`, and have inventories and page prerequisites consistent with the batch manifest. Neither has a summary body. No TikZ or tikzcd diagrams occur in the assigned items or pages.

## Independent review

The example's direct derivation is internally consistent: its matrix-unit calculation gives the stated bifundamental weights; the Chern–Simons evaluation at `D=-sigma/r` gives the displayed phase and sign; the two conjugate matter pairs give the squared cosh denominator; and the paired root products and `S_N x S_N` quotient give the numerator and Weyl factor. It limits the formula to the source-specific formal localization calculation and does not claim a constructed continuum measure, a proved localization limit, an empirical result, or a general `N=2` theorem. I found no separate defect in its computation or source locators.

I checked the cited source sections directly:

- Kapustin, Willett, and Yaakov, [arXiv:0909.4559](https://arxiv.org/pdf/0909.4559): §2, Eqs. (2.1), (2.14), and the ABJM field content; §3.1, Eqs. (3.2)–(3.14), for the selected supersymmetry, gauge-fixed variation, and localization locus; §3.2 and §3.5, Eqs. (3.20), (3.28), and (3.64)–(3.68), for the Weyl/root, vector, and matter factors; §4, Eqs. (4.2)–(4.4), for the ABJM matrix integral.
- Mariño, [arXiv:1104.0783](https://arxiv.org/pdf/1104.0783): §2.4, Eq. (2.43), for the quartic interaction; §4.1 for radius independence; §6.3, Eq. (6.67), for the self-conjugate matter determinant; and §6.5, Eqs. (6.79)–(6.81), for the ABJM measure, determinant powers, and phase convention.

The source formula and the item's convention change `k_Marino=-k` agree algebraically. The finite checks listed in the contract are consistent with the displayed formula, but I did not run them; they would not certify the formal continuum localization argument in any event.

## Findings not repaired

1. `post-qftx-s3-cs-matter-localization-model`, Postulate paragraph beginning “Choose a dimensionless global spinor profile $u$...” and the following $Q$-variation displays: the statement does not specify a spinor bundle or representation, type `u` as a smooth section, define its fiber norm, or fix the Clifford relations for the gamma matrices. The earlier mention of a unique spin structure and a spin connection does not supply these definitions. This leaves the domain and operators in the displayed supersymmetry transformations under-specified. A repair should define the complex rank-two spinor bundle from the chosen `Spin(3)` structure and representation, state the induced connection and pointwise Hermitian norm, require `u` to be a smooth section, and fix the Euclidean Clifford convention.

2. `post-qftx-s3-cs-matter-localization-model`, Postulate paragraph beginning “For a positive self-adjoint elliptic fluctuation operator $L$...” : the zeta-determinant definition gives no Hilbert space or operator domain/realization and does not define ellipticity or self-adjointness; it also leaves eigenvalue multiplicities unstated. The generic operator and its spectrum are therefore not fully specified. A repair should state the bundle Hilbert space and closed operator domain, define the symbol condition and positivity/self-adjointness hypotheses (or give an exact supplier and its relevant content), and specify that eigenvalues are counted with multiplicity.

No source files were edited because this was a read-only reader assignment. No proof-layout, reflow, or precheck command was run because there were no item edits.

## Page verdicts and blocker

- `qftx-s3-partition-functions` (A): inventory, prerequisites, and compact presentation are consistent. Hold on the two fatal mathematical-formulation findings in its postulate.
- `qftx-s3-partition-functions-examples` (B): inventory, companion relation, prerequisite, and compact presentation are consistent. The example derivation and source attribution checked out, but this page's consumer depends on the postulate with the two unresolved formulation defects, so the page remains on hold.

There is no operational blocker. The two findings are left for disposition by the item owner; this report does not judge, stamp, or self-certify either item.

## Coverage limits

I reviewed every assigned page and item, the example's complete direct item dependency, and the current q-exact page context listed above. I did not recursively audit every mathematical or physical supplier of the q-exact page's own theorem and background definitions because those are not item dependencies of batch 49 and are not needed to verify the assigned calculation. I checked the cited PDF sections listed above rather than claiming a full-paper audit.
