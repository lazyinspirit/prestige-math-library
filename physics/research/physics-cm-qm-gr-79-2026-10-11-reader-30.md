# Step 3a Reader Report — Batch 30

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `30`

## Inventory opened

Pages:

- `library/non-relativistic-classical-mechanics/cm14-hamilton-jacobi-and-integrability.md`
- `library/non-relativistic-classical-mechanics/cm14-hamilton-jacobi-and-integrability-examples.md`

Items on the A page:

- `def-cm14-hamilton-jacobi-equation`
- `def-cm14-complete-integral`
- `def-cm14-involution`
- `def-cm14-complete-integrability`
- `pthm-cm14-hamilton-jacobi-characteristics`
- `pthm-cm14-regular-tori`
- `pthm-cm14-action-angle`
- `pthm-cm14-adiabatic-invariance`
- `rem-cm14-scope-of-hamilton-jacobi-and-integrability`

Items on the B page:

- `ex-cm14-harmonic-oscillator-hamilton-jacobi-check`
- `ex-cm14-kepler-radial-action-check`
- `cex-cm14-harmonic-model-critical-fibre`
- `cex-cm14-free-particle-noncompact-fibre`
- `ex-cm14-oscillator-caustic-check`

I read the assigned run manifest and reader brief, the batch-30 proof-contract file and notes, and the applicable workspace instructions and schemas. For the substantive claims, I opened the in-run Hamilton–Jacobi, Liouville–Arnold, action-variable, and adiabatic suppliers; the physical Hamiltonian and harmonic-model suppliers; the Kepler reduction and period suppliers; and the published symplectic definitions and fibre/action-angle results used by the page. The current `thm-cm-liouville-arnold-action-angle-repaired` carrier gives its dependency on `def-cm-phase-domain-and-standard-symplectic-two-form` the required `mathematical-premise` role; an earlier batch note claiming otherwise is stale.

I also opened Meinrenken, *Symplectic Geometry* (Fall 2024), Proposition 6.10, pp. 68–69, Definition 6.18 and Theorem 6.21, pp. 72–75: [source PDF](https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf). Those passages support the compact-fibre action and local action-angle conclusions under the stated fibration hypotheses. The Tong and archived Cannas da Silva PDFs could not be retrieved by the web reader; I did not use them to close a proof gap.

## Repair

I repaired the remark in `items/def-cm14-complete-integral.md`. It had said that failure of the mixed-derivative determinant means the characteristic family focuses, and attributed a Hamilton–Jacobi failure to the Kepler example's radial turning points. The determinant condition supplies the inverse-function-theorem conclusions for the maps defined by `p=S_q` and `beta=S_alpha`; its failure does not by itself prove focusing. The assigned oscillator caustic example does exhibit a specific degeneration: `S_{x alpha}` is unbounded at the conjugate times while the label-to-position derivative vanishes. The Kepler example treats turning points of a radial action integral, not Hamilton–Jacobi caustics. The replacement states these distinctions.

The changed definition has no proof-contract entry and no `verification.judge` record. Reflow reported the file unchanged; precheck reported `0 checked, 0 failing`; the final proof-layout command reported `1 item, 0 steps, 0 defects`.

## Uneditable finding

- **Published dependency:** `prop-regular-common-level-sets-are-lagrangian-submanifolds`, `## Facts & Assumptions` [F1]. It states `dF_j(X_F_i)=omega(X_F_j,X_F_i)=-{F_j,F_i}`. The library definitions give `i_Xf omega=df` and `{f,g}=omega(X_f,X_g)`, so this expression is `{F_j,F_i}`, without the minus sign. Since the proposition uses the expression only when the bracket is zero, its Lagrangian conclusion and the assigned use remain valid. The assigned consumer is `pthm-cm14-regular-tori`. This is reported in the JSON findings file.

## Page verdicts

- **`cm14-hamilton-jacobi-and-integrability` (A):** the conditional Hamilton–Jacobi, regular-fibre, action-angle, and adiabatic statements are supported by their stated hypotheses and suppliers. The A-page definition remark was repaired as above. The published sign typo is nonfatal to the assigned regular-fibre argument.
- **`cm14-hamilton-jacobi-and-integrability-examples` (B):** no substantive defect found in the five worked examples/counterexamples or the page summary. B-page prose was read-only and was not edited.

## Coverage limit and blocker

All two assigned pages and all 14 assigned item carriers were opened. The non-elementary suppliers used for the conclusions were checked, but I did not independently reopen every elementary calculus, matrix, and topology supplier or every external full-text reference. The source retrieval limit is recorded above; no mathematical conclusion here relies on treating a failed retrieval as evidence. No blocker remains for the assigned mathematical review.
