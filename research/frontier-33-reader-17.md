# Frontier-33 reader report — batch 17

## Scope opened

- A/B pages: `the-polynomial-hierarchy-and-relativization`,
  `the-polynomial-hierarchy-and-relativization-examples`,
  `expander-graphs-and-constraint-graphs`, and
  `expander-graphs-and-constraint-graphs-examples`.
- Assigned manifest: `research/frontier-33-batch-17.pages.json` (64 items).
- Read contracts: `CLAUDE.md`, `README.md`, `SCHEMA.md`, and the batch proof
  contracts. Current batch state was checked in `.autopilot/frontier-33/`.
- Dependency closure opened from the manifest: the eleven published foundational
  items named in the batch's external dependency list, plus all in-batch links.

## Checkpoint

Current-disk review is complete. No content edits were made. The completed
inventory, exact checks, page verdicts, and lack of uneditable findings follow.

## Completed inventory — polynomial-hierarchy pair

Read and independently checked the A items
`def-polynomial-hierarchy-levels`, `def-relativized-complexity-class`,
`lem-ph-quantifier-block-closure`, `prop-np-and-conp-are-the-first-levels`,
`lem-ph-circuit-matrix-final-block-encoding`,
`thm-bounded-alternation-qbf-is-level-complete`,
`lem-ph-adaptive-oracle-transcript-normal-form`,
`thm-quantifier-and-oracle-characterizations-of-ph`,
`prop-ph-containments-and-polynomial-space`,
`lem-collapse-at-one-level-propagates`,
`thm-sigma-k-equals-pi-k-implies-ph-collapse`,
`cor-ph-complete-language-forces-collapse`,
`lem-standard-containments-relativize`, `def-relativizing-proof-technique`,
`lem-oracle-diagonalization-finite-extension`,
`thm-an-oracle-separates-p-from-np`,
`lem-polynomial-space-oracle-absorption`,
`thm-an-oracle-collapses-p-and-np`,
`cor-relativization-alone-cannot-resolve-p-versus-np`,
`def-lowness-and-highness`, `prop-elementary-high-low-identities`,
`def-promise-problem`, `def-promise-preserving-reduction`,
`rem-oracle-and-promise-conventions-are-distinct`, and
`fs-relativized-separations-prove-unrelativized-separations`; and B items
`ex-np-and-conp-are-the-first-levels`,
`ex-relativization-alone-cannot-resolve-p-versus-np`,
`cex-relativized-separations-prove-unrelativized-separations`, and
`ex-promise-oracle-off-promise-answers`.

Checks included the exact fixed-level and total-oracle qualifications, transcript
quantifier polarities (including NO-answer certificates), circuit-to-3CNF/3DNF
final-block encoding, PH collapse directions, diagonal finite-extension
boundary condition $2^n>p(n)$, TQBF-oracle absorption, high/low identities,
and promise-completion quantifiers. The false inference remains explicitly
present for Alpha and correctly refutes only an oracle-independent universal
transfer rule. No defect or repair found in these 29 items.

## Completed inventory — expander/constraint-graph pair

Read and independently checked the A items
`def-regular-multigraph-and-normalized-adjacency`,
`lem-constant-vector-is-a-top-eigenvector`,
`def-spectral-edge-and-vertex-expansion`, `thm-expander-mixing-lemma`,
`lem-cheeger-indicator-and-positive-part-energy`,
`lem-cheeger-sweep-and-layer-cake`,
`thm-cheeger-inequalities-for-finite-regular-graphs`,
`cor-expander-independent-sets-coloring-and-diameter`,
`def-margulis-gabber-galil-graph`,
`lem-margulis-family-is-constant-degree-and-neighbor-computable`,
`def-finite-torus-fourier-transform`,
`lem-finite-torus-fourier-orthogonality-and-affine-change`,
`lem-fourier-analysis-of-margulis-adjacency`,
`lem-margulis-diamond-weight-bound`,
`thm-margulis-family-has-uniform-spectral-gap`,
`lem-expander-size-adjustment-and-laziness`,
`cor-explicit-polynomial-time-constant-degree-expanders-exist`,
`def-constraint-graph-and-labeling-value`,
`def-constraint-graph-regularization`, `lem-cloud-plurality-rounding`,
`lem-regularization-preserves-value-quantitatively`,
`lem-constraint-expander-overlay`, `def-graph-power-and-walk-constraint`,
`lem-expander-walk-contraction`, `lem-expander-walk-restricted-operator`,
`thm-expander-walk-hits-dense-bad-sets`,
`prop-expander-walk-sampled-and-moving-sets`,
`lem-expander-walk-bad-edge-return`, `prop-expander-walk-hits-bad-edges`,
`def-gap-csp`, and `fs-nonconstructive-expanders-suffice-for-uniform-reductions`;
and B items `ex-expander-mixing-lemma`,
`ex-expander-walk-hits-dense-bad-sets`,
`cex-nonconstructive-expanders-suffice-for-uniform-reductions`, and
`ex-constraint-cloud-rounding-and-loop-counts`.

Checks included adjacency-slot versus ordinary-edge normalization and loop
counts; the $\alpha$/$\gamma$ distinction; centered-indicator mixing; Cheeger
constants; Fourier-transform phase and normalization; the Margulis diamond
weight calculation; all-size quotient/laziness constants; cloud and overlay
degree, edge, value, and decoder bounds; stationary-walk projection estimates;
and the diagonal construction witnessing nonuniform expander choices. No
defect or repair found in these 35 items.

## Dependency closure

Opened the direct external dependencies needed by these proofs:
`def-p`, `def-np-by-verifiers`, `def-conp`,
`def-polynomial-time-many-one-reduction`, `def-pspace-and-npspace`,
`thm-tqbf-is-pspace-complete`,
`lem-polynomial-time-computations-have-logspace-uniform-circuits`,
`def-boolean-circuit-size-depth-fanin-and-basis`,
`cor-real-spectral-theorem-for-self-adjoint-endomorphisms`,
`cor-rayleigh-quotient-extreme-eigenvalue-characterisation`, and
`thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`.
Their exact statements support the cited facts and introduce no uneditable
defect relevant to this batch.

## Sources and citations opened

The assigned source locators and current citation targets were checked against
the current arguments: Arora--Barak *Computational Complexity* §§3.5 and
5.1--5.3.1/5.5; Goldreich's computational-complexity notes Lecture 9 and
promise-problem survey §§1.1--1.2; Chang §3; Hoory--Linial--Wigderson
§§2.1--2.4, 3.1--3.2, 4.5, and Chapter 8; and Dinur §§1.1--1.2, 2.1--2.2,
and 4. The current item citations preserve the necessary total-oracle,
fixed-level, stationary-start, graph-regularity, and loop/slot conventions.

## Page verdicts

| Page | Verdict |
| --- | --- |
| `the-polynomial-hierarchy-and-relativization` | Pass: 25 A items plus the retained false inference agree with the stated summary and dependency order. |
| `the-polynomial-hierarchy-and-relativization-examples` | Pass: four B examples/counterexample are leaf treatments and do not overclaim an unrelativized P-versus-NP result. |
| `expander-graphs-and-constraint-graphs` | Pass: 30 A items plus the retained false statement have consistent normalization, construction, and quantitative bounds. |
| `expander-graphs-and-constraint-graphs-examples` | Pass: four B examples/counterexample correctly exercise the A-page conventions. |

## Edits, validations, and blockers

- Content edits: none. No reflow was needed, and no judge record was touched.
- Focused precheck: 49 proof-bearing assigned items passed.
- `tools/proof-contract.mjs ... --strict`: 49/49 contracts checked, zero
  errors and warnings.
- `tools/content-policy.mjs research/frontier-33-batch-17.pages.json`: 64
  scoped items, zero errors and warnings.
- Focused `tools/rendercheck.mjs`: 68 assigned item/page files, zero errors.
- Blockers: none.
