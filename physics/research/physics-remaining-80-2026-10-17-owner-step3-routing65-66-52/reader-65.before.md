# Step 3a reader report — batch 65

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Scope: batch `65`

## Inventory opened

Assigned pages:

- `tgr-et04` — A page, `library/thermodynamics-and-general-relativity-mathematics/tgr-et04.md`.
- `tgr-et04-examples` — B page, `library/thermodynamics-and-general-relativity-mathematics/tgr-et04-examples.md`.

Assigned items, read in prerequisite order:

1. `lem-tgr-spatial-shear-properties`.
2. `lem-tgr-eckart-entropy-specialization`.
3. `thm-tgr-supported-static-heat-evolution`.
4. `ex-tgr-static-cosine-heat-relaxation`.

I opened the required pages `tgr-et01` and `tgr-mc02`, including the summaries and the relevant supplier items `def-tgr-stationary-thermal-carriers`, `lem-tgr-killing-thermal-normalization`, and `lem-tgr-dissipative-entropy-identity`. I also opened the relevant definitions and statements/proof portions for the observer, rest-space projection, Levi-Civita connection, local fluid state, Gibbs–Euler identities, frame projection, heat Cauchy solution, heat kernel, change of variables, Lebesgue and (L^2) conventions, Hölder, and completed-product Fubini suppliers. Their exact invoked claims and hypotheses were checked against the assigned proofs. I checked the further required-page IDs named by `tgr-et01` for their current page carriers; they are present in the local imported/library view.

## Independent mathematical review

### `lem-tgr-spatial-shear-properties`

The smooth unit-timelike hypotheses and the selected torsion-free metric-compatible connection are explicit. Differentiating (g(u,u)=-1) gives (u^d\nabla_cu_d=0), which supplies the orthogonality needed for the two projected indices. The trace computation uses (g^{ab}h_{ab}=3) and the vanishing derivative contraction; the rest-space positivity follows from `lem-gr-observer-projection-decomposition`. In an orthonormal basis of the positive-definite rest space, the squared shear norm is a sum of squares and vanishes exactly when the shear vanishes. I found no mathematical defect.

Gourgoulhon, §7.3, Eq. (7.30), PDF p. 32, gives the same projected symmetric trace-free shear convention: [full lecture notes](https://arxiv.org/pdf/gr-qc/0603009). The cited passage supports the convention; the assigned proof supplies its own positivity argument. Romatschke, §§3–4.1, PDF pp. 7–13, supplies dissipative-stress and entropy-current context only; its conformal, zero-charge/Landau-frame restrictions are not imported into this lemma: [full article](https://arxiv.org/pdf/0906.4787).

### `lem-tgr-eckart-entropy-specialization`

The statement explicitly assumes smooth fields, (T>0), the local Gibbs–Euler identities, nonnegative coefficient functions, zero diffusion, the stress and particle balances, and zero local force power. The cited general entropy identity applies with (Q=q/c); the spatial projection gives (Q\cdot(\nabla T+Ta)=Q\cdot X). Substituting (Q=-\kappa X/c), (\Pi=-\zeta_{\rm b}c\theta), and (\pi=-2\eta c\sigma) yields the displayed three nonnegative terms. The shear lemma establishes the required positive rest-space norm. Units and the (x^0=ct) convention are consistent. I found no mathematical defect.

### `thm-tgr-supported-static-heat-evolution`

The fixed background, lapse bounds, coordinate and unit conventions, material state function, positive even-reflected periodic initial extension, heat law, insulated boundary condition, solution class, and support force are stated. The transformation \(\vartheta=NT\) gives (q=-A_0N^{-2}\nabla_x\vartheta) and hence the constant-coefficient Neumann heat equation. The even periodic convolution is positive and preserves the initial bounds; translation/reflection invariance gives the face conditions. The energy method proves uniqueness in the stated class. The coordinate divergence calculation verifies (u_bf^b=0) for the defined support, and the Killing-current balance yields the lapse-weighted energy conservation. The entropy balance has the stated (cN) conversion and zero boundary flux. The double-integral estimate gives the stated Poincaré constant (C_\Omega=\tfrac32(\max_iL_i)^2), and the energy inequality yields the stated exponential (L^2) rate. The equilibrium field has (NT_{\rm eq}=\overline\vartheta>0), so the cited normalization result applies. I found no mathematical defect.

The cited Hunter source, §5.1.2, Theorem 5.5, printed pp. 130–131, gives positive-time smoothing and the heat equation for Gaussian convolution; it states (L^p) initial convergence only for finite (p). The assigned theorem correctly uses its bounded-uniformly-continuous Cauchy supplier for the local-uniform initial trace and proves the reflected Neumann boundary and box estimates locally: [full notes](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf).

### `ex-tgr-static-cosine-heat-relaxation`

The positivity condition (|\delta|<\overline\vartheta), cosine average, eigenvalue (\pi^2/L_1^2), reflected Neumann faces, and exact (L^2) norm are verified directly. The profile is a valid positive even-reflected periodic datum for the preceding theorem, and uniqueness identifies the explicit mode with the theorem's solution. I found no mathematical defect.

## Page verdicts

- `tgr-et04` — **Pass on the reviewed mathematics.** Its item summaries accurately describe the shear, conditional entropy identity, and restricted supported heat construction. Its entropy claim is nonnegative production/nondecrease as shown by the displayed formula.
- `tgr-et04-examples` — **Pass.** The page summary and example accurately state the single-mode specialization and the conditional spatial variation of (T_{\rm eq}=\overline\vartheta/N).

The current batch-65 cross-batch dependency file still records open review/readiness edges for `tgr-et01`, `tgr-mc02`, and several current draft TGR suppliers. I inspected the actual supplier statements and relevant arguments used here; this report does not close those mechanical readiness records or certify unrelated claims on the required pages.

## Repairs and uneditable findings

No assigned item or page was edited. No item proof contract or judge record was changed, and no item formatter, reflow, or precheck was run.

Two nonfatal title-spacing defects occur in current-run draft suppliers outside batch 65 and are reported for their assigned consumer `lem-tgr-eckart-entropy-specialization`:

- `def-tgr-local-fluid-state`, `frontmatter.title`: `Rest fluid state,frame and geometric current definitions` is missing a space after the comma.
- `lem-tgr-local-gibbs-euler`, `frontmatter.title`: `Local Gibbs,Euler,parcel first law and response identities` is missing spaces after its commas.

These title defects do not alter the exact definitions or identities used by batch 65. They were not edited because their carriers belong to batch 53.

## Limitations and blocker

I reviewed the assigned claims and the exact dependency statements/proof portions invoked by them. I did not recursively re-audit every unrelated proof in the full transitive closure of the published mathematical suppliers. The current cross-batch readiness records remain open as noted above; no mathematical blocker to the assigned conditional deductions was found.
