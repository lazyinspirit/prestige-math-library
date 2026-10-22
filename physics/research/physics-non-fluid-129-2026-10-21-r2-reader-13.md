# Step 3a reader report — batch 13

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Batch: `13`

## Opened inventory

Assigned pages:

- `library/classical-electromagnetism/emx-polarization-coherence.md`
- `library/classical-electromagnetism/emx-polarization-coherence-examples.md`

Assigned items, read in supplier-to-consumer order:

- `items/def-emx-coherency-matrix.md`
- `items/pthm-emx-stokes-positivity.md`
- `items/pthm-emx-classical-visibility.md`
- `items/ex-emx-unpolarized-nonzero-field.md`
- `items/cex-emx-zero-intensity-degree.md`

Page prerequisites opened:

- `library/classical-electromagnetism/em-vacuum-waves-and-polarization.md`
- `library/classical-electromagnetism/emx-paraxial-optics.md`
- `library/probability/probability-spaces-random-variables-and-expectation.md`
- `library/non-relativistic-classical-mechanics-mathematics/cm-math-evidence.md`

Direct item suppliers opened:

- `items/cor-expectation-linearity-monotonicity-and-modulus-bound.md` — published expectation linearity, monotonicity, and modulus bound, including its proof.
- `items/def-cm-covariance-matrix-of-a-random-vector.md` — published probability, square-integrability, coordinate, and covariance interface, including its well-definedness argument.
- `items/def-complex-conjugate-real-imaginary-part-and-modulus.md` — published real/imaginary parts, conjugation, and modulus definition.
- `items/def-em-polarization-definition.md` — published real plane-wave convention, transverse basis, and polarization sign convention.
- `items/def-em-si-conventions.md` — published SI units and constant conventions.
- `items/pthm-emx-paraxial-error.md` — current batch-10 draft statement and proof, especially the per-mode longitudinal bound.

Relevant transitive context for the paraxial per-mode claim:

- `items/def-emx-angular-spectrum.md`
- `items/def-em-complex-plane-wave.md`
- `items/post-em-vacuum-maxwell.md`
- `items/pthm-em-plane-wave-maxwell.md`
- `items/def-em-plane-wave-definition.md`

Run context opened: `research/physics-non-fluid-129-2026-10-21-r2-batch-13.pages.json`, `briefs/reader.md`, `research/physics-non-fluid-129-2026-10-21-r2-batch-13.proof-contracts.json`, `research/physics-non-fluid-129-2026-10-21-r2-batch-13.cross-batch-dependencies.json`, and `research/physics-non-fluid-129-2026-10-21-r2-batch-13.notes.md`. The author notes and Step 1 records were treated as context, not proof verdicts.

Source sections consulted:

- José J. Gil, *Polarimetric Characterization of Light and Media*, author-revised 2020 PDF, §§2.1–2.3, PDF pp. 6–8: coherency matrix definition, its time-average and conditional ensemble-average conventions, Pauli/Stokes coordinates, positivity, and the purity bound. URL: <https://arxiv.org/pdf/2002.04105>.
- University of Oxford, *Optics Lectures* (2012), §§3.2–3.3, PDF pp. 9–10: slow-detector mean intensity, cross term, phase extrema, and visibility. URL: <https://users.physics.ox.ac.uk/~Foot/C2/pdf/optics-lectures-2012.pdf>.
- A. Hemmerich, *Lectures on Classical Optics*, Part III (2023), “The concept of coherence” and “Interference visibility,” PDF pp. 2–4. URL: <https://www.physik.uni-hamburg.de/en/iqp/hemmerich/teaching-hemmerich/pdfs/opticspart3.pdf>.
- David Tong, *Electromagnetism*, §4.3.2, printed pp. 87–88: the $E_0=\alpha-i\beta$ convention, the real field $\alpha\cos\theta+\beta\sin\theta$, and handedness convention. URL: <https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf>.
- BIPM, *The International System of Units*, 9th edition, version 4.01 (June 2026), English §§2.2–2.3.1, printed pp. 123–128: exact defining values for $c$ and $e$, measured status of $\mu_0$, and exact product $\varepsilon_0\mu_0=1/c^2$. URL: <https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf>.

## Review and repair

The five assigned item statements, definitions, assumptions, computations, proofs, and example witnesses were checked against their current suppliers. The positivity proof establishes $v^\dagger\Gamma v=\mathbb E|v^\dagger Z|^2\ge0$, the $2\times2$ minor bound, the Stokes cone and rank-one equality case, and deterministic Jones transformation. The visibility proof explicitly attains both extrema over the full phase circle and carries the positive-total-intensity condition through the quotient. The finite ensemble example and zero-amplitude counterexample compute the stated matrices and keep model statements separate from observations.

One confirmed definition defect was repaired in `items/def-emx-coherency-matrix.md`, under `## Definition`. The original definition used $Z_x(\rho)$, $Z_y(\rho)$, and $Z_i(\rho)$ in expectations and matrix entries without defining these as coordinate random-variable maps of $Z_\rho:\Xi\to\mathbb C^2$. It also left the measurable target structure, column-adjoint convention, and transverse norm convention implicit. The repair defines the Euclidean Borel structure on $\mathbb C^2\cong\mathbb R^4$, coordinate projections and their domains, $X_\rho:\Xi\to\mathbb R^4$, the finite-moment identity, $Z_1,Z_2$, and conjugate transpose. It records measurability of the products used in the matrix entries and states the square-of-unit rule for the algebraic extension to other common-unit channel amplitudes. The mathematical claim and all consumer formulas are unchanged.

The direct consumers `pthm-emx-stokes-positivity`, `pthm-emx-classical-visibility`, `ex-emx-unpolarized-nonzero-field`, and `cex-emx-zero-intensity-degree` were checked after the definition clarification. Their $\Gamma$, Stokes-coordinate, channel, and zero-intensity uses remain well-defined, so no consumer edits were needed. The four exact supplier excerpts in the batch proof contracts were refreshed; the definition’s derivation claims and finite-check step reference were synchronized. The bound root worksheet is retained as historical evidence for the pre-reader carrier and its qualification now says it does not review the repair. No `verification.judge` record was present on the changed item.

The current batch-10 paraxial theorem was checked at the exact interface used here. It derives a bound for an individual exact source-free monochromatic mode from the real plane-wave convention and the adopted smooth-branch $\operatorname{div}E=0$ postulate. The coherency definition does not claim an aggregate ensemble bound, an exact Maxwell field for arbitrary random superpositions, or an empirical detector bound.

The Tong notes support the cited handedness convention at §4.3.2. The PDF cover itself says “Lent Term, 2015,” while four published suppliers describe that URL as a “2026 author-hosted revision” or “2026 printing”; the author’s current course page links the notes but does not date a 2026 revision. The relevant passage is present and supports the mathematical convention, but I could not verify the 2026 version label. These four suspected bibliographic metadata defects are reported as nonfatal published-dependency findings below.

## Page verdicts

- `emx-polarization-coherence`: pass. Its frontmatter has the expected three A items and page prerequisites. It has no body summary under the compact statement-first page policy. No diagram is present.
- `emx-polarization-coherence-examples`: pass. Its frontmatter has the expected two B items and the A-page prerequisite. It has no body summary under the compact statement-first page policy. No diagram is present.

No TikZ or tikzcd diagram occurs in the assigned items or pages.

## Validation and remaining defects

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-emx-coherency-matrix.md` — unchanged after the final edit.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-emx-coherency-matrix.md` — pass.
- `node tools/physics-support/proof-layout.mjs items/def-emx-coherency-matrix.md` — 2 steps, 0 defects.
- No other assigned item or page defect was established.

Uneditable findings, all with `consumer_id: def-emx-coherency-matrix`:

- `def-em-polarization-definition`, `sources.references[1].title` (line 34): the “2026 author-hosted revision” label is not corroborated by the linked PDF cover (“Lent Term, 2015”) or current author page. The cited §4.3.2 passage itself supports the convention.
- `def-em-si-conventions`, `sources.references[2].title` (line 20): the “2026 printing” label is not corroborated by the same linked PDF cover. The item’s BIPM source supplies the relevant current SI claims independently.
- `pthm-em-plane-wave-maxwell`, `sources.references[1].title` (line 57): the “2026 author-hosted revision” label is not corroborated by the linked PDF cover or current author page; the cited plane-wave equations are present in §4.3.2.
- `def-em-plane-wave-definition`, `sources.references[1].title` (line 25): the “2026 author-hosted revision” label is not corroborated by the linked PDF cover or current author page; the cited plane-wave encoding is present in §§4.3.1–4.3.2.

Blocker: none. Coverage limitation: I reviewed the cited passages needed for the assigned claims, not every page of the referenced PDFs or every transitive mathematical supplier proof. No broader corpus or mathematical-audit coverage is claimed.
