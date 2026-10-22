# Step 3a reader report — batch 57

**Run:** `physics-non-fluid-129-2026-10-21-r2`  
**Role:** reader  
**Verdict:** both assigned pages and all seven assigned items reviewed; no in-scope edits were needed. One nonfatal in-run supplier issue is reported for owner routing.

## Opened inventory

### Assigned pages

- `nrqmx-quantum-optics-models` — `library/non-relativistic-quantum-mechanics/nrqmx-quantum-optics-models.md`
- `nrqmx-quantum-optics-models-examples` — `library/non-relativistic-quantum-mechanics/nrqmx-quantum-optics-models-examples.md`

### Assigned items

- `post-nrqmx-finite-mode-light-matter-model`
- `def-nrqmx-finite-mode-g2-statistic`
- `pthm-nrqmx-jaynes-cummings-blocks`
- `pthm-nrqmx-beam-splitter-count-statistics`
- `pthm-nrqmx-finite-mode-loss-channel`
- `ex-nrqmx-jc-vacuum-rabi`
- `ex-nrqmx-single-photon-antibunching`

### Page prerequisites opened

- `nrqmx-finite-mode-gaussian` — `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-finite-mode-gaussian.md`
- `nrqmx-finite-open-dynamics` — `library/non-relativistic-quantum-mechanics/nrqmx-finite-open-dynamics.md`
- `qm-light-matter-and-spectral-transitions` — `library/non-relativistic-quantum-mechanics/qm-light-matter-and-spectral-transitions.md`
- `qm-math-fock-and-equilibrium` — `library/non-relativistic-quantum-mechanics-mathematics/qm-math-fock-and-equilibrium.md`
- `qm-math-composites` — `library/non-relativistic-quantum-mechanics-mathematics/qm-math-composites.md`

### Item suppliers opened for the assigned claims

- Draft finite-mode suppliers: `post-nrqmx-finite-open-model`, `def-nrqmx-finite-mode-symplectic-data`, `lem-nrqmx-finite-mode-fock-schr-identification`, `thm-nrqmx-finite-mode-bogoliubov`, and its used metaplectic suppliers `thm-nrqmx-finite-metaplectic-construction`, `lem-nrqmx-finite-symplectic-implementers`, `lem-nrqmx-finite-symplectic-generator-factorization`, and `thm-nrqmx-finite-weyl-uniqueness-interface`.
- Mathematical model suppliers: `lem-nrqm-fock-and-equilibrium-creation-contraction-bounds`, `thm-nrqm-fock-and-equilibrium-fixed-mode-number-law`, `thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains`, `lem-nrqm-composites-hilbert-tensor-construction`, `lem-nrqm-composites-bounded-tensor-maps`, `lem-nrqm-composites-separable-partial-trace`, and `lem-nrqm-composites-nuclear-bounded-cyclicity`.
- Framework suppliers: `def-nrqm-framework-quantities-and-units`, `def-nrqm-measurement-framework-declared-measurements-and-instruments`, `post-nrqm-framework-observable-and-probability`, `post-nrqm-framework-ideal-conditional-measurement`, `post-nrqm-framework-autonomous-dynamics`, and `def-nrqm-autonomous-dynamics-framework-evolution`.
- Choice suppliers: `def-axiom-of-choice` and `def-countable-choice`.

The batch proof-contract file `research/physics-non-fluid-129-2026-10-21-r2-batch-57.proof-contracts.json` was checked against the seven item bodies: derivation-step maps, fact citations and uses, boundary/finite checks, and the postulate's `physics_review` fields. Its prior author/readiness evidence was treated as navigation context, not as a verdict.

## Page verdicts

- **`nrqmx-quantum-optics-models` — pass.** Draft A-page identity, category, title, five-item inventory, and page prerequisites agree with the assigned manifest. Its frontmatter-only body is consistent with the selected compact page layout.
- **`nrqmx-quantum-optics-models-examples` — pass.** Draft B-page identity and companion link are correct; its two example placements and requirement on the A page agree with the manifest. The B page is frontmatter-only. No page prose edit was authorized or needed.

## Item review

- **`post-nrqmx-finite-mode-light-matter-model` — pass.** The postulate defines the finite-mode Fock space, atomic matrices, algebraic interaction domain, SI quantities, detector models, and optional approximation regimes as model assignments. It explicitly declines to assert a laboratory realization, continuum limit, controlled compression error, or Fock-field reduced dynamics. The ideal homodyne quadrature and PVM follow the declared Fock–Schrödinger and measurement conventions; no empirical outcome is claimed.
- **`def-nrqmx-finite-mode-g2-statistic` — pass.** The one-mode statistic has a precise probability-sum definition with finite positive mean and finite second factorial moment. The number-basis ladder calculation is consistent with that definition and makes no detector or time-resolved correlation claim.
- **`pthm-nrqmx-jaynes-cummings-blocks` — pass.** The retained rotating-wave terms, signs, units, excitation sectors, block matrix, eigenvalue gap, and squared-block-norm domain are consistent. The self-adjoint direct-sum proof checks the adjoint domain and the finite-support restriction. Its TikZ orthogonal-sector diagram agrees with the stated decomposition and is not used as proof.
- **`pthm-nrqmx-beam-splitter-count-statistics` — pass for the assigned claim.** The unitary matrix and state-action phase convention yield the stated binomial count law, endpoint laws, and coherent product output. The mode-factorization unitary is established from the complete product bases. Its TikZ diagram shows the declared two-mode unitary and no detector or laboratory layout.
- **`pthm-nrqmx-finite-mode-loss-channel` — pass.** Vacuum insertion, unitary conjugation, arbitrary-Hilbert-space partial trace, and their finite-ancilla amplifications establish the stated trace-class CPTP map. The number, coherent, and endpoint formulas follow from the beam-splitter supplier. The result remains a conditional finite-mode model, not observed loss or detector efficiency.
- **`ex-nrqmx-jc-vacuum-rabi` — pass.** The resonant block eigenvectors and P4 spectral evolution give the claimed conditional excited-state probability and revival times. It is explicitly a model prediction, not measured oscillation or irreversible decay.
- **`ex-nrqmx-single-photon-antibunching` — pass.** The number-state factorial moment and two-port count probabilities follow from the declared number measurement and beam-splitter result. No experiment or empirical antibunching dataset is inferred.

All physical conclusions in the assigned batch are conditional deductions or adopted model assignments. No statistical observations, uncertainty estimates, apparatus records, or experimental support are asserted.

## Uneditable dependency finding

`thm-nrqmx-finite-mode-bogoliubov` is a draft in current-run batch 52 and is outside this reader's write scope. Its Statement defines `S_g` in grouped coordinate order, then writes the Weyl covariance as `M^* W(z) M = W(S_g^T z)` “in grouped Weyl-label order.” The exact prerequisite `def-nrqmx-finite-mode-symplectic-data` defines `R` and `W(z)` using interleaved order `(Q_1,P_1,...,Q_r,P_r)` and `(q_1,p_1,...,q_r,p_r)`. The theorem does not define a grouped `W_g` or give the conversion permutation at that formula. The related `thm-nrqmx-finite-metaplectic-construction` makes the missing convention explicit as `R_g=PR` and `W_g(w)=W(P^T w)`. For `r>1`, the Bogoliubov statement therefore needs either the interleaved matrix `S_i=P^T S_g P` with `W`, or a separately defined `W_g` with the grouped formula. The assigned beam-splitter proof uses the valid annihilation-operator action and vacuum conclusion, not this Weyl-covariance clause, so this is nonfatal to that consumer's stated count law.

The raw current supplier bytes had SHA-256 `5edfcb6dd512648c4af36e7ec2dd4950fa2bdcc34de3596c39b7e9dd629f8152`, matching its immutable batch-52 pre-reader snapshot. This binding is recorded in the findings JSON. The exact assigned consumer is `pthm-nrqmx-beam-splitter-count-statistics`.

## Diagrams, edits, checks, and blocker

- Reviewed every diagram in the assigned items. The Jaynes–Cummings direct-sum and beam-splitter diagrams match their text; the proofs remain independent of the diagrams. No missing diagram was required by the exposition.
- No in-scope defect was confirmed, so no item or page edit was made. The only confirmed issue is the out-of-scope draft dependency above.
- Because there were no item edits, no proof-contract update, judge-stamp removal, reflow, precheck, or proof-layout run was required.
- No blocker to completing this read-only review. The in-run supplier finding remains for the owning batch to disposition.

## Source limitation

The cited Navarrete-Benlloch lecture-note PDF could not be retrieved through the web reader in this pass (the alternate PDF endpoint returned 403 and the arXiv PDF/HTML exceeded the reader's size limit). I did not use that retrieval as proof evidence; the assigned model deductions were checked from their local arguments and exact mathematical suppliers. I also checked Arvind, Dutta, Mukunda, and Simon, “The Real Symplectic Groups in Quantum Mechanics and Optics,” arXiv:quant-ph/9509002, §II for its grouped quadrature ordering and §VI for unitary implementation up to phase. That survey explicitly omits complete proofs, so the local implementer argument, not the survey, supports the mathematical check.
