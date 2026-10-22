# Step 3a reader report — batch 18

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-18`)  
Scope: batch `18` only

## Opened inventory

Assigned pages:

- `emg-fx03` — [library/einstein-maxwell-models-mathematics/emg-fx03.md](../library/einstein-maxwell-models-mathematics/emg-fx03.md)
- `emg-fx03-examples` — [library/einstein-maxwell-models-mathematics/emg-fx03-examples.md](../library/einstein-maxwell-models-mathematics/emg-fx03-examples.md)

Assigned items, reviewed in dependency order:

1. `def-emg-fx-spherical-orbit-geometry`
2. `lem-emg-fx-spherical-maxwell-reduction`
3. `lem-emg-fx-two-dimensional-ricci-trace`
4. `def-emg-fx-spherical-quotient`
5. `lem-emg-fx-warped-curvature`
6. `thm-emg-fx-local-charged-birkhoff`
7. `cex-emg-fx-constant-radius-rigidity`

Page-prerequisite context opened: `emg-ms01`, `emg-cp02`, and `emg-ms03` under `library/einstein-maxwell-models-mathematics/`.

Direct item suppliers opened: `def-emg-xs-rn-data`, `def-emg-xs-geometric-electrovac`, `def-countable-choice`, `def-gr-curvature-tensor-and-derived-tensors`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `thm-gr-curvature-tensoriality-and-coordinate-formula`, `thm-gr-curvature-algebraic-symmetries`, `def-emg-xs-br-products`, `thm-emg-xs-br-verification`, `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves`, `thm-smooth-inverse-function-theorem-on-manifolds`, `thm-ftc-first-part`, and `def-lie-bracket-of-smooth-vector-fields`. I also opened `lem-emg-lorentz-hodge-calculus`, `prop-integration-over-an-oriented-embedded-submanifold`, and `thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement` for the flux and Hodge conventions used by the assigned proofs.

The assigned diagram in `def-emg-fx-spherical-orbit-geometry` correctly depicts the projection from `U × S²` to `U`; the circle is explicitly schematic for the full sphere fibre. No other TikZ/tikzcd diagrams occur in the assigned items or pages, and no additional diagram is needed for the stated arguments.

## Review and repair

The local Maxwell reduction is valid: the isotropy element `2ppᵀ − I` removes mixed base–sphere two-form components, transitivity makes the remaining coefficients constant over each sphere, and the two source-free equations make the magnetic coefficient and `r²` times the electric coefficient constant on connected `U`. The stated Hodge signs agree with the assigned four-volume orientation. The surface fluxes use the supplied `1/(4π)` convention.

The two-dimensional Ricci identity is established under the four-dimensional suppliers' actual hypotheses by extending `q` to `q + (dx²)² + (dx³)²` on `U × R²`; the base Christoffels and curvature contraction agree with those of `q`. The warped-curvature component calculation and the deductions of the trace Hessian, `Δ_q r`, and `dϖ = 0` are consistent with the stated curvature sign and Maxwell normalization. The local charged Birkhoff proof correctly constructs the rotated-gradient Killing field, obtains a flow coordinate transverse to `r`, removes the cross term by a smooth antiderivative, and fixes the electric-field sign from the chosen orientation. Its conditions exclude both `dr = 0` and a null areal gradient; it makes no global-extension claim.

I repaired `lem-emg-fx-warped-curvature`, step `1.1`: the original notation `(∇^q r)^A` did not define whether it denoted the covariant derivative of the scalar or its metric-dual vector, and the mixed Christoffel coefficients were asserted without showing the metric substitution. The proof now defines `r_A = ∂_A r` and `r^A = q^{AB}r_B`, states the index ranges, and gives the direct Christoffel substitutions. I updated the matching step `1.1` derivation in [the batch 18 proof contract](physics-non-fluid-129-2026-10-21-r2-batch-18.proof-contracts.json). The item had no `verification.judge` record to remove.

## Source checks

- Bronnikov, Kim, and Skvortsov, [“The Birkhoff theorem and string clouds”](https://arxiv.org/pdf/1604.04905), §2, Eq. (1), PDF pp. 2–3; §3, Theorem 1 proof and Eqs. (8)–(9), PDF pp. 3–4; §4, PDF p. 3 onward. The paper uses signature `(+---)` and `8πG = c = 1`; those conventions are not imported. Its Theorem 1 assumes the areal-radius gradient is spacelike or timelike and concludes local static or homogeneous form; the assigned theorem supplies its own warped calculation and coordinates. Section 4 treats the constant-radius branch and conditions for an additional symmetry.
- Tong, [General Relativity lecture notes](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf), §6.1.1, printed pp. 234–236 / PDF pp. 241–243; §6.2.1, printed pp. 259–260 / PDF pp. 266–267; §6.2.5, printed pp. 266–268 / PDF pp. 273–275; §3.4.1, printed pp. 130–131 / PDF pp. 137–138. The §6.1.1 treatment is a sketch under its asymptotic setting. The RN section uses its own charge normalization. The Bertotti–Robinson discussion is a near-horizon limit, not an exact-solution proof. These passages were used for context and convention checks, not as substitutes for the local proofs.
- Chruściel, Lopes Costa, and Heusler, [“Stationary Black Holes: Uniqueness and Beyond”](https://arxiv.org/pdf/1205.6112), §5.3, PDF pp. 27–28. It states a staticity result for the domain of outer communication of a spherically symmetric vacuum or Einstein–Maxwell black-hole solution. That global statement is not used to prove the local theorem.

The exact zero-`Λ` geometric electrovac supplier is distinguished from the locally defined mathematical `Ric(g) = Λg + 2Q(F)` system when `Λ ≠ 0`. The Bertotti–Robinson counterexample relies on the opened product definition and its local verification theorem, not solely on Tong's limiting argument. The run's notes and coverage record were treated as navigation evidence; their review and retrieval claims were not taken as verdicts.

## Page verdicts

- `emg-fx03`: **pass**. The draft mathematics page has the six assigned items in dependency order, matching the batch manifest and category. Its empty body matches the current frontmatter-only A-page layout. The published `emg-ms01`, `emg-cp02`, and `emg-ms03` requirements resolve; `emg-cp02` is page-level context and no item proof in this batch uses its Maxwell-reduction item as a logical supplier.
- `emg-fx03-examples`: **pass**. The draft examples page contains the assigned counterexample, requires the A page and its stated earlier context, and has the expected empty body for the current examples-page layout.

## Remaining defects and blocker

No confirmed or suspected defect remains in an uneditable assigned or published dependency. The direct item suppliers needed by the assigned proofs are outside the current run; there is no current-run cross-batch item dependency in this batch. No blocker remains.

## Validation

After the repair, reflow reported the changed item unchanged, precheck passed (`1 checked, 0 failing`), and the final proof-layout check reported `1 items, 5 steps, 0 defects`. No changes were made to other items, pages, manifests, or proof contracts beyond the step `1.1` contract derivation update.
