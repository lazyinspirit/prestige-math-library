# Step 3a reader report — batch 112

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: read-only reader  
Scope: batches/pages/items assigned to batch `112` only

## Inventory opened

Assigned pages:

- `library/quantum-statistical-mechanics/qsmx-transverse-ising-spectral.md`
- `library/quantum-statistical-mechanics/qsmx-transverse-ising-spectral-examples.md`

Assigned items, read in supplier order:

- `items/def-qsmx-transverse-ising-majoranas.md`
- `items/lem-qsmx-transverse-ising-majorana-car.md`
- `items/lem-qsmx-real-skew-orthogonal-normal-form.md`
- `items/lem-qsmx-l2-fourier-unitarity.md`
- `items/thm-qsmx-open-ising-quadratic.md`
- `items/thm-qsmx-ising-bulk-symbol-gap.md`
- `items/ex-qsmx-ising-classical-and-field-limits.md`

Direct mathematical suppliers opened to verify the assigned items:

- Local published mathematics: `def-qsm-pauli-two-qubit-conventions`, `lem-qsm-matrix-state-calculus`, and `lem-qsm-models-diagonal-occupation-trace`.
- Imported mathematics: `def-countable-choice`, `def-square-summable-family-on-an-arbitrary-index-set`, `def-the-one-dimensional-torus-and-normalized-haar-integral`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `thm-fourier-basis-and-parseval-on-the-n-torus`, `def-bounded-linear-operator`, `def-hilbert-space-adjoint`, and `def-resolvent-and-spectrum-of-a-closed-unbounded-operator`.

Page prerequisites opened: `qsmx-quasifree-gases`, `qsm-bose-fermi-gases`, `qsm-states-ensembles`, and `qsm-interacting-exact-models`. The batch-112 cross-batch page edge to `qsmx-quasifree-gases` is marked `verified`; its target is currently a draft page. The assigned items do not use that page's items as proof premises. The three other required supplier pages are published and contain the exact local published dependencies listed above.

The current manifest's seven item identities, item order, declared dependencies, page inventories, and each item's Definition/Statement/Example text match the current carriers. The eight direct imported mathematical supplier files match their `research/math-imports.json` SHA-256 pins. The proof-contract file has a row for each assigned item; its stated proof-step and citation mappings were compared with the current item bodies.

## Independent review

- The open-chain definition gives a finite tensor-product space, explicit Pauli matrices, real energy parameters, open bond indexing, and ordered strings. Its `N=4` TikZ path has the three adjacent bonds and four onsite labels and correctly omits a wraparound edge.
- The CAR lemma's same-site products and one-string-sign argument establish Hermiticity and all stated anticommutators. The real-skew normal-form proof gives the required orthogonal two-plane blocks, including the even-dimensional real kernel and singular-value multiplicities.
- The Fourier lemma explicitly rescales the imported unit torus `R/Z` to the angle torus `R/(2πZ)`. Under this map the characters become `e^{ijk}` and the normalized measure becomes `dk/(2π)`, so the orthogonality and unitary extension are consistent with the exact imported Fourier theorem.
- The finite-chain theorem's Majorana signs and factors give `H_N=(i/4)γᵀA_Nγ`; the real-skew block form gives the stated fermionic mode energies, and the finite occupation trace yields one factor `2 cosh(βε_r/2)` per mode, including a factor two at zero energy.
- The infinite convolution operator's Fourier symbol matches its shift convention. The proof establishes both resolvent exclusion and inclusion by normalized localized approximate eigenvectors, and the minimum `2||h|-|J||` is correct for every real `h,J`. Its conclusion is explicitly limited to the defined one-particle operator; it does not claim an infinite-spin-chain ground-state or thermodynamic result.
- The endpoint minimizers and finite-`N` positivity/real-analyticity calculation are correct. No experimental observation or statistical inference is asserted; all assigned items have `domain: mathematics`.

The source passages were read independently as contextual support, not used as proof substitutes:

- Mbeng, Russomanno, and Santoro, *The quantum Ising chain for beginners*, arXiv:2009.09208v2, §6.2 (open-chain four-site matrix and Majorana bond identity, including Eqs. (149), (154)–(160)) and §3.1.1 (Eqs. (79)–(81), parity and thermodynamic-limit qualification): <https://arxiv.org/pdf/2009.09208>
- Pieter Claeys, *Quench dynamics in the Transverse Field Ising Model*, §6 (Eqs. (49)–(68), Jordan–Wigner signs, boundary-parity convention, and dispersion): <https://www.pks.mpg.de/fileadmin/user_upload/MPIPKS/group_pages/DQI/TFIM_2024.pdf>

The source conventions are not silently substituted for the local ones: the Claeys notes use a different field sign and periodic-sector momenta, while the MRS worked open-chain matrix is for `L=4` and its displayed phase discussion uses positive couplings. The assigned local arguments establish the broader finite-`N` and all-real-parameter claims directly.

## Uneditable findings

The reader brief makes this a read-only assignment. I made no changes to assigned content.

1. `ex-qsmx-ising-classical-and-field-limits`, line 40: `## Statement references` is not the statement-first heading for the preceding `## Example`. The policy's example is `## Example references`; only `Statement refuted` uses `Statement references`. Rename the references heading to `## Example references` while preserving its two links.
2. `ex-qsmx-ising-classical-and-field-limits`, line 58: the example's numbered argument is under `## Proof`. `SCHEMA.md` specifies `## Example` and optional `## Verification` for examples. Rename this heading to `## Verification`, preserving the proof steps and contract mapping.

These are schema/section-heading defects; the mathematical claims in the item are otherwise sound. Both are reported as nonfatal because the existing argument and links remain readable and the corrections are mechanical.

## Page verdicts

- `qsmx-transverse-ising-spectral`: pass. Its frontmatter inventory and page prerequisites match the manifest; the page has the compact-layout empty body expected by this run. No page-level defect found.
- `qsmx-transverse-ising-spectral-examples`: page metadata, companion, and example placement pass. The assigned example has the two section-heading defects recorded above; no independent page-level defect found.

## Edits and blockers

- Edits: none; the dispatch is read-only.
- Blocker: none.

## Coverage limits

I read the complete assigned carriers, page prerequisites, direct suppliers, relevant proof-contract rows, and relevant cited source passages. I did not re-audit the full transitive foundational dependency graph behind every already published mathematical supplier, and I did not read either cited PDF cover to cover. The relevant claims needed by this batch are supplied by the exact current published statements and their relevant proofs; imported supplier pins were current.
