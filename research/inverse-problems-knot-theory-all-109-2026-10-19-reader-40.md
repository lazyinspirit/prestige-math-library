# Step 3a reader report — batch 40

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Reader: `reader-40`  
Review date: 2026-10-21

## Opened scope and inventory

Opened both assigned pages and all 19 assigned items in manifest dependency order. The assigned items were:

1. `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`
2. `lem-ip-smooth-boundary-tests-separate-locally-integrable-traces`
3. `lem-ip-smooth-whitney-extension-on-compact-sets`
4. `lem-ip-borel-jet-realization-and-beam-patching`
5. `def-ip-simple-riemannian-background`
6. `lem-ip-variable-metric-domain-of-dependence`
7. `lem-ip-compact-manifold-dirichlet-spectrum-and-regularity`
8. `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`
9. `lem-ip-simple-manifold-no-return-extension`
10. `def-ip-hyperbolic-dirichlet-to-neumann-map`
11. `lem-ip-gaussian-beam-null-bicharacteristic`
12. `lem-ip-simple-geodesic-polar-extension`
13. `lem-ip-wave-alessandrini-identity`
14. `lem-ip-simple-geometry-global-eikonal-geometric-optics`
15. `thm-ip-wave-data-determine-light-ray-integrals`
16. `cor-ip-wave-coefficient-uniqueness-under-simple-geometry`
17. `ex-ip-40-ray-limit-error-accounting`
18. `ex-ip-40-finite-time-invisible-perturbation`
19. `ex-ip-40-simple-geometry-adequate-observation-time`

Pages reviewed:

- `inverse-wave-problems-and-finite-time-observability` — pass. Inventory and metadata are intact; YAML frontmatter only, `page_layout: compact-v1`, and no summary/body prose.
- `inverse-wave-problems-and-finite-time-observability-examples` — pass. Inventory and metadata are intact; YAML frontmatter only, `page_layout: compact-v1`, and no summary/body prose.

Opened the additional suppliers needed to check the assigned claims, including the Riemannian metric, volume, divergence, Levi–Civita, Jacobi, simple-surface, Hamiltonian and cotangent-symplectic definitions; the finite-order Whitney and Borel jet results; the wave energy and Green/lifting results; the compact self-adjoint spectral and Dirichlet regularity results; and the measure, weak-derivative, absolute-continuity, Fubini, change-of-variables and Holder results. Also checked the current batch-38 supplier `def-ip-simple-surface-and-geodesic-xray-transform`; its complete Definition is uninterrupted and its links follow in `Definition references`, so no in-run finding remains for it. No TikZ/tikzcd diagrams occur in the assigned items.

## Repairs made and evidence

- `lem-ip-variable-metric-domain-of-dependence`: made the energy identities and weighted estimate valid for complex-valued solutions by using real parts and conjugates. The real Green identity is also applied separately to real and imaginary parts. This preserves the support-pairing statement. Reflow and precheck passed.
- `lem-ip-compact-manifold-dirichlet-spectrum-and-regularity`: specified the nonnegative-integer quantifier in the Sobolev embedding. Expanded the density argument with truncation and the shrinking boundary-strip estimate, and proved the one-dimensional (H^2) and higher-order regularity directly from the coordinate divergence equation. Added an explicit finite-chart bump construction for the partition used in the proof. Reflow and precheck passed.
- `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`: made the scalar field and Hermitian convention explicit and adjusted the weak form, norms and conjugations consistently for complex solutions. Reflow and precheck passed.
- `lem-ip-gaussian-beam-null-bicharacteristic`: stated support and phase construction branchwise, so projected crossings are handled by a finite sum of local packets rather than a single phase on a crossing image. Supplied the adapted coordinate construction, made the transverse eikonal and transport recursions explicit, and replaced reliance on unlisted partition/Cauchy–Schwarz/dominated-convergence dependencies with local constructions and a rescaling-plus-Gaussian-tail argument. The branch cross terms are estimated after factoring out their real oscillatory phase. Reflow and precheck passed.
- `lem-ip-simple-geometry-global-eikonal-geometric-optics`: removed a temporary Cauchy–Schwarz dependency absent from the assigned manifest and included the elementary normalized (L^2) product estimate in its facts. Reflow and precheck passed.
- `ex-ip-40-ray-limit-error-accounting`: explained why the real Holder inequality applies to complex beam products by applying it to the absolute values. Reflow and precheck passed.

Updated the affected batch-40 proof-contract derivations and citations for the repairs. The batch manifest still matches all 19 item dependency lists. The repaired items contained no stale `verification.judge` records. Final layout validation: `node tools/proof-layout.mjs` over the six changed item paths reported **6 items, 37 steps, 0 defects**.

Mathematical references checked for the geometric-optics and no-return arguments:

- Jan Bohr, “Stability of the Non-abelian X-ray Transform in Dimension ≥ 3,” Appendix §7.1, Lemma 7.1, PDF pp. 39–40: `https://d-nb.info/1246268426/34`.
- Oksanen, Salo, Stefanov and Uhlmann, “Inverse problems for real principal type operators,” §3, Theorem 3.1 and proof: `https://www.math.purdue.edu/~stefanop/publications/real_principal_type.pdf`.
- Mikko Salo, “On geometric inverse problems and microlocal analysis,” Theorem 3.1, Lemma 3.4 and Proposition 3.5, §3.3, PDF pp. 26–30: `https://arxiv.org/pdf/2312.08123v1`.
- Paternain, Salo and Uhlmann, “Geometric inverse problems, with emphasis on two dimensions,” Chapter 3 §§3.7–3.8 and Chapter 4 §4.4: `https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf`.

## Uneditable finding

- Published dependency `thm-linear-change-of-variables-for-lebesgue-measure`, used directly by assigned consumer `lem-ip-variable-metric-domain-of-dependence`: its Statement, final explanatory paragraph, second sentence is ill-formed. After the (0\cdot(+\infty)) clause it reads “which The extended real line … leaves undefined”; the malformed inserted phrase interrupts the explanation. The invertible-case formula and the singular-case nullity conclusion remain stated, so severity is nonfatal. This was not edited because the item is published. It is the sole finding in the batch findings JSON.

## Workflow note and blocker

The recomputed autopilot status was `PAUSED` at 2026-10-21 07:55:16 UTC, with no task in flight; batch 40 was listed as not yet read/split in the native stage counters. The reader audit and its artifacts are complete. No native run transition was performed. No mathematical blocker prevented this review.
