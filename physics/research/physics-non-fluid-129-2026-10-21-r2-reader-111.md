# Step 3a reader report — batch 111

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-111`)  
Scope: batch `111`

## Opened inventory

Assigned pages:

- `library/quantum-statistical-mechanics/qsmx-quasifree-gases.md` (A page)
- `library/quantum-statistical-mechanics/qsmx-quasifree-gases-examples.md` (B page)

The A page's declared prerequisite pages were also opened:

- `library/quantum-statistical-mechanics/qsm-bose-fermi-gases.md`
- `library/quantum-statistical-mechanics/qsmx-entropy-entanglement.md`
- `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-finite-mode-gaussian.md`

Assigned items, read in item dependency order:

1. `items/def-qsmx-quasifree-finite-covariance.md`
2. `items/lem-qsmx-finite-car-quasifree-gibbs-construction.md`
3. `items/thm-qsmx-quasifree-entropy.md`
4. `items/def-qsmx-finite-boson-quadratic-form.md`
5. `items/thm-qsmx-finite-boson-stability.md`
6. `items/cex-qsmx-bogoliubov-zero-mode.md`

Direct and claim-relevant suppliers opened included the finite CAR occupation-basis and matrix-state-calculus items; the finite entropy, density-operator, partial-trace, and orthonormal-basis items; the finite Fock-to-Schrödinger and oscillator basis items; finite symplectic factorization and implementer items; the QSM diagonal occupation trace; and the trace-class, positive-trace, adjoint, closed-operator, and unbounded functional-calculus items. The draft finite-mode symplectic-data, Bogoliubov, and metaplectic suppliers are in current-run batch `52`; their statements and the proof interfaces used by batch 111 were inspected as read-only context.

The proof contracts in `research/physics-non-fluid-129-2026-10-21-r2-batch-111.proof-contracts.json` were checked for all four proof-bearing assigned items. Their finite checks and boundary records agree with the current statements and arguments. In particular, `cex-qsmx-bogoliubov-zero-mode` intentionally presents a false finite-partition claim under `## Statement refuted`; its counterexample proves divergence from the unbounded occupation of the zero-energy mode.

## Mathematical review

No confirmed mathematical defect was found in the six assigned item carriers. The covariance convention, finite CAR Gibbs construction, entropy formula and mode restriction, symmetric quadratic operator, conditional finite-mode stability result, and zero-mode divergence argument are supported by their stated hypotheses and inspected suppliers. The finite-mode theorem remains conditional on its explicit diagonalization certificate. No physical observation or empirical claim is made by these mathematical-domain items.

No TikZ or tikzcd diagrams occur in the assigned items or pages.

## Source checks and limits

The source passages opened to resolve convention questions were:

- H. Araki, “On Quasifree States of CAR and Bogoliubov Automorphisms,” §2, printed pp. 386–387: the finite CAR relations and the relation-preserving unitary action that induces a *-automorphism. [Source PDF](https://ems.press/content/serial-article-files/41673)
- J. Surace and L. Tagliacozzo, “Fermionic Gaussian States: An Introduction to Numerical Approaches,” §§3.1, 3.4, 3.7, and 3.10, especially the finite-mode Gibbs form, Wick rule, reduced-state closure, and mode entropy formula. [Source PDF](https://arxiv.org/pdf/2111.08343)
- P. T. Nam, *Mathematical Quantum Mechanics II*, §6.3, pp. 145–157, and §6.6, pp. 174–179, for the Bogoliubov and quadratic-Hamiltonian context. [Lecture notes](https://www.math.lmu.de/~nam/LectureNotesMQM2020.pdf)

These were targeted section checks, not full-text audits. The reviewed items supply their own local finite-dimensional arguments. I did not reopen every transitive prerequisite of already-published mathematical suppliers.

## Edits and uneditable findings

No source item or page was edited. No proof contract, judge record, or verification stamp was changed. Because there were no material item repairs, reflow, precheck, and proof-layout were not run.

Two nonfatal title defects remain for owner disposition:

- **`qsmx-quasifree-gases`, `frontmatter.title`:** the title promises “interacting boundaries,” but the assigned A-page items concern finite CAR quasifree covariance/Gibbs/entropy and finite positive quadratic Bose stability; none formulates or proves an interacting boundary result.
- **`qsmx-quasifree-gases-examples`, `frontmatter.title`:** the companion title repeats “interacting boundaries,” while its only example is the zero-frequency Bose-mode divergence. The B title is outside the A-page prose repair scope. The paired page and manifest titles also make a one-file A-title edit incomplete.

## Page verdicts and blocker

- **`qsmx-quasifree-gases` (A):** the current mathematical carriers are sound for their stated finite-mode scope. Nonfatal overbroad title, as recorded above.
- **`qsmx-quasifree-gases-examples` (B):** the zero-mode counterexample is mathematically sound and correctly refutes its stated finite-partition claim. Nonfatal overbroad companion title, as recorded above.

Blocker: none. Coverage is limited to the assigned batch, its declared prerequisite pages, direct claim suppliers, and the additional dependency context listed above.
