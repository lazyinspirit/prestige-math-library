# Step 3a reader report — batch 71

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader (`reader-71`)  
Scope: batch `71` only; pair `tgr-g01` / `tgr-g01-examples`.

## Opened inventory

### Assigned pages

- `library/thermodynamics-and-general-relativity/tgr-g01.md`
- `library/thermodynamics-and-general-relativity/tgr-g01-examples.md`

### Assigned items, in dependency order

- `lem-tgr-finite-static-mode-occupation-trace`
- `post-tgr-finite-newton-gravity-preparation`
- `pthm-tgr-regulated-gravity-canonical-equilibrium`
- `post-tgr-unregulated-point-attempt`
- `post-tgr-kepler-canonical-preparation`
- `post-tgr-kepler-microcanonical-volume-preparation`
- `pthm-tgr-regulated-ensemble-response-inequivalence`
- `post-tgr-fixed-static-gas-preparation`
- `pthm-tgr-static-gas-local-equilibrium`
- `ex-tgr-physical-finite-softened-box`
- `cex-tgr-physical-unregulated-collapse`
- `ex-tgr-physical-negative-kepler-capacity`
- `ex-tgr-physical-static-lapse-two`

### Prerequisite context opened

Page prerequisites: `tgr-i01` and `tgr-mg01`.

Item prerequisites: `def-tgr-framework-units`; `def-tgr-gravitating-phase-reference`; `def-tgr-softened-gravity-finite-phase`; `lem-tgr-finite-gaussian-moment-envelope`; `lem-tgr-finite-gravitational-gibbs`; `thm-tgr-finite-gravitational-entropy-optimum`; `thm-tgr-gravitational-canonical-response`; `thm-tgr-gravity-collapse-nonextensivity`; `lem-tgr-annular-radial-integration`; `def-tgr-regulated-kepler-shell-law`; `lem-tgr-regulated-kepler-shell-law-normalization`; `lem-tgr-relative-shell-canonical-response`; `thm-tgr-regulated-kepler-negative-capacity`; and `lem-tgr-static-gas-finite-normalization`.

The exact mathematical supplier statements used in these arguments were checked for `thm-gaussian-integral`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-differentiation-under-the-integral-sign`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `thm-change-of-variables-for-compact-jordan-sets`, `thm-jordan-boundary-criterion`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-injective-c-one-images-of-compact-jordan-sets-are-jordan`, and `thm-extreme-value-metric`. Their stated hypotheses supply the local Gaussian, product-integration, differentiation, entropy-equality, and radial-integration steps used here.

I also inspected the current batch manifest and item inventory, the 13-row proof-contract file, cross-batch dependency rows, authoring notes, source-reading record, author-check record, and batch task. These records informed navigation and source scope; they were not treated as proof or review verdicts.

## Independent review

The finite softened model keeps its Hamiltonian, bounded positive-volume region, positive regulator, and phase reference explicit. The canonical normalization, variational entropy comparison, and fixed-Hamiltonian response follow from the cited current mathematical statements under their stated hypotheses. The point-particle item specifies a collision-free domain and its counterexample proof supplies a direct lower-bound argument for unequal masses; the equal-mass supplier is used only for its stated equal-mass case.

The relative Kepler items distinguish the canonical and Gibbs-volume preparations, specify the shell and entropy conventions, and keep the slow-motion qualification on the bounded-energy microcanonical branch. The response comparison uses the negative-capacity interval and canonical variance identity with matching parameters. The finite-mode fermion lemma is a finite sum over bit strings and its consumers do not rely on the separate countable-mode supplier.

The static-gas items specify a prescribed smooth background, positive bounded lapse, orthonormal momentum variables, proper phase measure, and separate fixed-particle, grand-canonical, and finite-mode branches. The normalization and local pressure, redshift, hydrostatic, and finite-mode occupation deductions are supported by their current mathematical suppliers. The items distinguish model deductions from observations and make no claim of measured equilibrium, thermalization, gravitational backreaction, or a general curved-space spectrum.

The reviewed proof contracts map their derivations to the authored numbered steps; postulates have formulation, scope, source, and non-derivation review fields. No contract or stored author check was treated as independent acceptance. No empirical premises or observations occur in the assigned claims.

Source context was checked against accessible targeted passages in [Katz's manuscript](https://arxiv.org/pdf/astro-ph/0212295), [Tong's Statistical Physics notes](https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf), [Chavanis's classical-gas paper](https://arxiv.org/pdf/1908.10817), and [Chavanis's Fermi-gas paper](https://arxiv.org/pdf/1908.10806). These works support the cited model context and conventions; they are not used in place of the local mathematical proofs or as empirical evidence.

## Edits and uneditable defects

- Edits: none. I found no confirmed in-scope defect requiring repair.
- Uneditable defects: none. The findings array is empty.
- No proof-layout, reflow, or precheck command was run because no item was edited. The existing author-check record was not treated as an independent mathematical verdict.

## Page verdicts

- `tgr-g01`: **pass for this independent content review, as draft.** Its summary matches the three model preparations on the page and preserves their distinct conventions and physical limitations.
- `tgr-g01-examples`: **pass for this independent content review, as draft.** Each example or counterexample follows the assigned supplier's scope; the page summary does not present model outputs as observations.

## Coverage limits and blocker

No blocker. I reviewed the exact dependency statements needed by this batch and their relevant local arguments, but did not audit every unrelated ancestor in their full mathematics dependency closures. The cited source PDFs were checked only at targeted accessible passages; I did not independently repeat the source-reading record's claimed full-document retrieval. No empirical data, measurements, or statistical inference were used.
