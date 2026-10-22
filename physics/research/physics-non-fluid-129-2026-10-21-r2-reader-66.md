# Step 3a reader report — batch 66

- Run: physics-non-fluid-129-2026-10-21-r2
- Role: reader; scope: batch 66.
- Result: no defects identified, no edits, no blocker.

## Opened inventory

Assigned pages:

- `library/quantum-field-theory-mathematics/qftx-on-shell-amplitudes.md` (A; draft; mathematics).
- `library/quantum-field-theory-mathematics/qftx-on-shell-amplitudes-examples.md` (B; draft; mathematics).

Assigned items:

- `items/def-qftx-spinor-helicity.md`
- `items/lem-qftx-spinor-factorization.md`
- `items/thm-qftx-rational-bcfw-residue.md`
- `items/prop-qftx-helicity-polarization-ward.md`
- `items/cex-qftx-bcfw-contact-boundary.md`

Relevant dependency context:

- `items/def-qft-dirac-projections.md`, for the directly used Pauli matrix and metric conventions.
- `library/quantum-field-theory-mathematics/qft-mx02.md`, `qft-mg03.md`, and `qft-mf03.md`, the A-page's listed prerequisite pages.
- `research/physics-non-fluid-129-2026-10-21-r2-batch-66.proof-contracts.json` and `research/physics-non-fluid-129-2026-10-21-r2-batch-66.cross-batch-dependencies.json` were treated as evidence, not verdicts. The cross-batch list is empty.

Relevant source passages opened:

- Elvang and Huang, *Scattering Amplitudes*: §§2.2, 2.3, 2.4, 2.6, and 3.1–3.3. The passages cover null spinors, the scalar contact coefficient, reference-spinor polarizations, little-group scaling, the Cauchy formula including the infinity term, factorization, and the separate large-z condition. [Source](https://arxiv.org/pdf/1308.1697).
- Marzolla, *The four-dimensional on-shell three-point amplitude in spinor-helicity formalism and BCFW recursion relations*: §§3 and 5. The passages cover the Pauli map, complex null factorization, shifts, the infinity residue, and conditional factorization. [Source](https://arxiv.org/pdf/1705.09678).
- Britto, Cachazo, Feng, and Witten, *Direct Proof of Tree-Level Recursion Relation in Yang-Mills Theory*: §§2 and 3.1. The passages cover shifted momenta, simple poles, factorization residues, and fixed-reference polarization formulas. [Source](https://arxiv.org/pdf/hep-th/0501052).

## Review

- `def-qftx-spinor-helicity`: the displayed Pauli map and inverse agree entrywise, and its determinant is the stated complex-bilinear form. The factorization pair, C× action, units, independent complex spinors, brackets, and helicity-weight condition are explicit. Since each helicity is a half-integer, the weight exponent is an integer. The definition disclaims unasserted rationality, factorization, and physical-scattering assumptions.
- `lem-qftx-spinor-factorization`: determinant expansion, nonzero-matrix rank, construction from a nonzero column, and uniqueness up to one nonzero scalar establish the stated existence and uniqueness. The zero matrix is excluded where required.
- `thm-qftx-rational-bcfw-residue`: the shift preserves nullness and total momentum. Subtracting the simple-pole principal parts leaves a rational function without finite poles, hence a polynomial; its limit zero at infinity forces it to vanish. The residue substitution gives the stated conditional channel formula. Pole factorization and large-z decay remain explicit hypotheses, not conclusions about a QFT model.
- `prop-qftx-helicity-polarization-ward`: for each chirality, the normalized reference difference lies in the one-dimensional kernel spanned by the momentum spinor. The raised Pauli map sends it to a multiple of p, and the contraction conclusion follows from the stated complex-bilinear condition h(p,J)=0. The item does not assert a general model Ward identity.
- `cex-qftx-bcfw-contact-boundary`: for nonzero c, A(z)=c has no finite poles and A(0)=c. Under the stated infinity-residue convention, A(z)/z=c/z has residue -c at infinity, so the omitted boundary correction is c. This refutes the boundary-free identity without asserting a complete interacting model.

## Page verdicts

- `qftx-on-shell-amplitudes`: pass. Its four mathematics items are placed consistently and it lists the three opened published prerequisite pages. Its empty body follows the statement-first frontmatter-only page convention.
- `qftx-on-shell-amplitudes-examples`: pass. The counterexample is placed in `examples`, and its sole page prerequisite is the assigned A-page. Its empty body follows the same convention.

## Edits, uneditable defects, diagrams, and blocker

- Edits: none.
- Defects not edited: none identified.
- Diagram review: no TikZ/tikzcd or other diagrams occur in the assigned items or pages; no diagram addition is needed for these arguments.
- Blocker: none.

## Coverage note

All assigned pages and current item carriers, the directly used part of the published dependency, listed prerequisite pages, and relevant cited source arguments were examined. Strict supplier-first opening of current item carriers was not fully achieved: the current lemma carrier was opened before the current `def-qftx-spinor-helicity` carrier. The definition was checked directly afterward and its uses were checked against it; the sequence limitation remains. The unrelated transitive proof closure of published `def-qft-dirac-projections` was not audited because the reviewed claim uses only its explicit Pauli and metric conventions. No content defect remains unresolved.
