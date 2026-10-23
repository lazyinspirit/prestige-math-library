# Batch 16 reader report

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader (`reader-16`)  
Batch: `16`

## Inventory opened

Assigned pages:

- `fd-f04` — `library/fluid-dynamics/fd-f04.md`
- `fd-f04-examples` — `library/fluid-dynamics/fd-f04-examples.md`

Assigned items, reviewed in supplier-before-consumer order:

- `def-fd-adopted-nonnewtonian-models`
- `pthm-fd-nonnewtonian-conditional-admissibility`
- `ex-fd-bingham-rest-stress`

Batch evidence opened:

- `research/fluid-dynamics-all-47-2026-10-23-batch-16.pages.json`
- `research/fluid-dynamics-all-47-2026-10-23-batch-16.proof-contracts.json`
- `research/fluid-dynamics-all-47-2026-10-23-batch-16.cross-batch-dependencies.json`

Direct item suppliers and page prerequisites opened:

- `def-fd-smooth-motion`, `def-fd-quantity-and-frame-conventions`, and `post-fd-continuum-balances`
- `def-fd-nonnewtonian-laws` and `lem-fd-observer-calculus`
- `lem-fd-generalized-newtonian-dissipation`, `lem-fd-bingham-monotone-graph`, and `lem-fd-conformation-storage`
- Pages `fd-f01` and `fd-mf04`

Exact statements of the mathematical suppliers used to check these claims were opened: `thm-euclidean-inverse-function-theorem`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-determinant-multiplicative`, `thm-chain-rule-for-total-derivatives`, `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`, `prop-a-fundamental-matrix-is-invertible`, `thm-derivative-of-matrix-inversion`, `thm-algebra-of-derivatives`, `thm-determinant-differential-and-jacobis-formula`, `thm-logarithm-derivative-and-integral`, `thm-integral-logarithm-product-law`, `lem-cm-positive-definite-matrix-square-roots`, `thm-derivative-of-exponential`, and `cor-exponential-reciprocal-and-positivity`.

## Review and evidence

The constitutive definition specifies the motion, incompressible rate, tensor spaces, Frobenius normalization, stress branches, units, conformation storage function, and thermostat qualification. It presents selected model equations without asserting empirical applicability. Its statement has no hyperlinks; references follow the complete Definition.

The generalized-Newtonian power calculation follows directly from `tau = 2 eta(dot-gamma) D`, `dot-gamma^2 = 2 D:D`, and nonnegative viscosity. The Carreau and regularized/unregularized power-form qualifications in the supplier proof match their parameter ranges. The Bingham graph uses the stated Frobenius stress ball at rest; the graph lemma establishes nonnegative power and rotation equivariance. The example's matrix is symmetric and trace-free, has Frobenius norm exactly `tau_y`, and belongs to the rest graph for `tau_y > 0`.

For the conformation branch, `lem-fd-conformation-storage` supplies the forward-time positive-definiteness result, observer covariance, and storage identity under a continuous velocity gradient and positive-definite initial conformation. Its proof constructs the positive solution using a fundamental matrix and derives the identity by differentiating `w(C)`. The assigned theorem carries those hypotheses and the separate isothermal Helmholtz/thermostat qualification. It does not infer entropy production from the continuum balances, empirical material validity, or PDE existence. The theorem's three branch arguments and their boundary cases agree with its proof contract.

The example's TikZ figure depicts the stated planar section of the Frobenius ball in the orthonormal `E_1,E_2` coordinates. The axes, radius label, and marked witness agree with the text; its proof does not rely on the diagram. No other TikZ/tikzcd diagrams occur in the assigned items.

The two assigned page carriers are frontmatter-only, retain `page_layout: compact-v1`, and list exactly the assigned A-page items and B-page example. Their direct page prerequisites `fd-f01` and `fd-mf04` were opened and their inventories/classifications agree with the batch's stated dependencies. The cross-batch ledger's `verified` statuses were treated as evidence, not as review verdicts.

## Repairs and unresolved findings

No confirmed defect required repair. No item or page was edited. Therefore no proof contract or `verification.judge` record changed, and reflow, precheck, and proof-layout commands were not applicable.

No uneditable defects were found in the assigned claims or in the direct supplier uses needed to verify them. There is no blocker.

## Page verdicts

- `fd-f04`: pass for this reader review. The A-page inventory and required pages match the opened batch and supplier context; the page body is empty.
- `fd-f04-examples`: pass for this reader review. The B-page example placement matches the opened item; the page body is empty.

## Coverage limits

This review checked the assigned items and pages, their direct physical suppliers, the page prerequisites, and the exact mathematical statements used in the conformation proof. It did not audit the full transitive proof closure of those published mathematical suppliers or independently review the proofs of the context-only transport/Jordan-integration suppliers of the adopted balance postulate. The external reference PDFs were not retrieved; no external source claim was needed to establish the locally derived calculations. No unresolved mathematical uncertainty affected the verdicts.
