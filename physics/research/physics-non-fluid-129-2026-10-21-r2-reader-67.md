# Reader report — batch 67

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (Step 3a)  
Review date: 2026-10-22

## Scope and inventory

Opened both assigned page carriers and all five manifest-listed items:

- A page [`qftx-inclusive-soft-model`](../library/quantum-field-theory-mathematics/qftx-inclusive-soft-model.md), draft mathematics page; its four item placements match the manifest.
- B page [`qftx-inclusive-soft-model-examples`](../library/quantum-field-theory-mathematics/qftx-inclusive-soft-model-examples.md), draft mathematics page; its example placement and A-page requirement match the manifest.
- [`def-qftx-resolved-soft-poisson`](../items/def-qftx-resolved-soft-poisson.md), independent soft-radiation resolution model.
- [`lem-qftx-coherent-band-poisson`](../items/lem-qftx-coherent-band-poisson.md), finite-band coherent Poisson law.
- [`prop-qftx-soft-unresolved-cancellation`](../items/prop-qftx-soft-unresolved-cancellation.md), cutoff-independent inclusive probability.
- [`prop-qftx-soft-energy-finite`](../items/prop-qftx-soft-energy-finite.md), count, energy and norm-limit claims.
- [`ex-qftx-resolution-probability`](../items/ex-qftx-resolution-probability.md), threshold monotonicity example.

Also opened the two required pages, [`qft-mx03`](../library/quantum-field-theory-mathematics/qft-mx03.md) and [`qft-mg03`](../library/quantum-field-theory-mathematics/qft-mg03.md), and the mathematical suppliers needed for the assigned claims:

- Published local QFT mathematics: `def-qft-example-data`, `def-qft-fock-and-test-spaces`, `def-qft-photon-transverse-space`, `def-qft-qed-photon-energy-multiplier`, `thm-qft-example-soft-current-angular-coherent`, `lem-qft-second-quantized-spectrum`, and `lem-qft-qed-coherent-ir-obstruction`.
- Imported mathematical suppliers recorded in `research/math-imports.json`: countable choice, the Euclidean inner product, compact-hypersurface integration and its chart/polar agreement, polar coordinates, the logarithm integral, the complex exponential and its series/addition laws, factorial and integer powers, and strict monotonicity of the real exponential.

## Review and repairs

The authored claims are conditional mathematical results about the explicitly defined finite-cutoff free coherent model. They do not report detector data or assert interacting-QED cancellation. The dimensions, cutoffs, transverse space, Fock convention, probability assignment, and model limitations are stated. The model's current coefficient is covered by the cited current theorem; the energy and no-limit arguments use the exact hypotheses of their second-quantized and coherent-tail suppliers.

Three repairs were made within this batch:

1. In `def-qftx-resolved-soft-poisson`, the frequency-band subspaces were called closed “because the intervals are disjoint.” Disjointness establishes orthogonality, not closedness. The definition now identifies each band subspace as the range of its bounded, self-adjoint indicator multiplier on the transverse one-particle space; this is an orthogonal projection, so its range is closed. Disjointness gives pairwise orthogonality. The lemma consuming these subspaces was reviewed against the clarified construction.
2. In `prop-qftx-soft-energy-finite`, the scalar \(L^2\) identification for the three complex components omitted its measure. It now specifies Lebesgue measure times counting measure on \(\{1,2,3\}\), gives the component map, and records the norm identity. Its contract derivation was updated.
3. In the same proposition, the statement included \(C=0\Rightarrow b=0\) almost everywhere without spelling out the \(L^2\)-norm argument. The proof now states \(C=\|b\|_{L^2}^2=0\), hence \(b\) is the zero \(L^2\) equivalence class, and uses the band-norm formula for the zero displacement. The affected fact use and proof-contract derivation were updated.

A separate citation repair was made in four assigned items: the PTB locator previously named PDF pp. 1–2 and equations (1)–(8) for coherent-state number weights. The relevant passage is PDF p. 2, subsection “Photon statistics of coherent states,” Eq. (12). The updated locator now names that section and equation in `def-qftx-resolved-soft-poisson`, `lem-qftx-coherent-band-poisson`, `prop-qftx-soft-energy-finite`, and `ex-qftx-resolution-probability`. The [PTB lecture](https://www.ptb.de/cms/fileadmin/internet/institute/fpm/Quantenoptik19/lecture_5.pdf) gives the single-mode Poisson number law there; the band independence and continuum-frequency intensity are proved locally.

The [Dereziński notes](https://arxiv.org/pdf/math-ph/0511030), §§5.3–5.6 (PDF pp. 19–21), describe symmetric Fock sectors and the Fock-space tensor product law. [Srednicki, Chapter 26](https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf), printed pp. 167–170, treats unresolved splitting in a different scalar-field calculation; the assigned item correctly limits it to context and imports no QED cancellation result.

The TikZ interval sketch in `prop-qftx-soft-unresolved-cancellation` correctly labels the \(\varepsilon\)-to-\(\Delta\) unresolved range and the \(\Delta\)-to-\(\Lambda\) resolved range. The boundary convention is stated in prose, and the proof does not rely on the drawing.

The proof contract was updated for the corrected band-subspace construction and the energy-proposition repairs. No assigned item had a `verification.judge` record to remove.

## Checks

For all four changed items, reflow completed (the definition required no reflow); precheck passed, with the definition-only item reporting 0 proof steps to check. The required batched proof-layout check reported: `4 items, 13 steps, 0 defects`.

## Page verdicts and remaining defects

- `qftx-inclusive-soft-model` (A): pass after the repairs. Its placements and required pages are consistent; the assigned definitions and conditional calculations are supported.
- `qftx-inclusive-soft-model-examples` (B): pass. The example is a mathematical model prediction, and its strict monotonicity proof follows from the stated positive coefficient and threshold inequalities.

No uneditable defects remain in the assigned pages or items. No blocker.

