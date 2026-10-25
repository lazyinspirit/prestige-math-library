# Reader 5 report — advanced QFT supersymmetry build

Batch: `5`  
Role: read-only reader, with repair authority limited to batch-5 in-flight items and assigned A-page prose.

## Opened inventory

Assigned pages:

- A page: `library/quantum-field-theory-mathematics/qftx-instanton-topology-mathematics.md`.
- B page: `library/quantum-field-theory-mathematics/qftx-instanton-topology-mathematics-examples.md`.

Both pages have the manifest inventory, draft status, `page_layout: compact-v1`, and empty Markdown bodies. No page prose was edited.

All eight assigned items were opened and reviewed: `lem-qftx-hodge-star-decomposition-four-dimensions`, `lem-qftx-two-chart-principal-bundle-gluing`, `def-qftx-instanton-number-and-asd-sector`, `thm-qftx-yang-mills-selfdual-action-bound`, `prop-qftx-su2-bpst-explicit-connection-on-s4`, `lem-qftx-round-s4-spin-twist-index-one`, `lem-qftx-periodic-su2-product-kernel-and-center-line-sign`, and `ex-qftx-su2-bpst-one-instanton`.

For dependency checks I opened the five batch-2 draft suppliers `def-qftx-nonabelian-gauge-data`, `def-qftx-principal-connection-form`, `def-qftx-lie-algebra-valued-form-bracket`, `lem-qftx-principal-curvature-cartan-bianchi`, and `def-qftx-associated-covariant-derivative`, along with their 32 direct mathematical prerequisites. I also opened the draft `qftx-gauge-geometry` page and the directly used Chern–Weil, Hodge, de Rham, Stokes, Sobolev/elliptic, Fredholm, and SU(2) mathematical supplier statements. The 48 directly used imported item byte files and 11 required published-page byte files matched their recorded pins.

The current-run consumers `ex-qftx-bpst-instanton-formal-sector-weight` and `pthm-aqft-global-anomaly-test` were opened to check downstream use of the edited public statements; `ex-aqft-anomaly-inflow-example` was also checked. The full transitive graph reaches 2,877 items and was not independently audited item by item; that is the principal coverage limitation.

Primary literature consulted for convention and source checks:

- Belavin–Polyakov–Schwartz–Tyupkin, “Pseudoparticle Solutions of the Yang–Mills Equations,” printed pp. 85–87: <https://strings.itp.ac.ru/Papers/belavin1975.pdf>.
- David Tong, *TASI Lectures on Solitons*, Lecture 1 §§1.1–1.1.2, printed pp. 6–10: <https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf>.
- Wernli, *Lectures on Spin Geometry*, §§1.5.2–1.5.3 and 2.3.3–2.3.5: <https://arxiv.org/pdf/1911.09766>.
- Wang, Wen, and Witten, *A New SU(2) Anomaly*, §§2.1–2.2: <https://arxiv.org/pdf/1810.00844v4>.
- Dai and Freed, determinant-line and holonomy conventions, §§2–3 and §5: <https://arxiv.org/pdf/hep-th/9405012>.

## Page verdicts

- `qftx-instanton-topology-mathematics`: pass for this reader scope. The A-page inventory matches its seven assigned items; the compact frontmatter-only presentation is intact.
- `qftx-instanton-topology-mathematics-examples`: pass for this reader scope. The B-page inventory matches its one assigned example; the compact frontmatter-only presentation is intact.

These are page-presentation and inventory verdicts, not publication or acceptance decisions.

## Item review and repairs

The Hodge-star decomposition, two-chart gluing lemma, charge convention, and self-dual action-bound proof were checked against their stated hypotheses and supplier conventions. In particular, the anti-Hermitian defining-representation convention gives `c₂ = +(8π²)⁻¹ tr(F∧F)`, while the selected `B = −tr` convention gives `q_B = −⟨c₂,[S⁴]⟩`; the BPST charge sign is consistent. The BPST curvature, self-duality, patched potential, action density, and radial integral were checked. The round spin-twist index proof and periodic product-kernel/parity proof received the material repairs below. No further confirmed defect was found in the authored content of the eight assigned items.

Four assigned items were repaired:

- `prop-qftx-su2-bpst-explicit-connection-on-s4`: specified the stereographic embeddings, omitted poles, inverse coordinates, and overlap relation `y=x/r²`, fixing the chart convention used by the local potentials. Added the global principal connection form in each product chart and checked its transition, reproduction on fundamental vertical vectors, and right equivariance. The curvature diagram in Remarks was reviewed: its square commutes by the gauge-transformation law `F ↦ Ad_u F`; it is correct and was left unchanged.
- `ex-qftx-su2-bpst-one-instanton`: added the same explicit chart maps and overlap coordinates so the connection formulas have specified domains and patch identifications.
- `lem-qftx-round-s4-spin-twist-index-one`: made the spin-lift, half-spin bundles, Clifford actions, Sobolev spaces, and operator conventions explicit. Replaced the unsupported cokernel argument with the Hodge-theoretic construction: `H¹(S⁴;ℂ)=0` gives an invertible one-form Laplacian, and `T*G₁` is a bounded right inverse of the chiral Hodge operator. For the full Dirac realization, proved surjectivity of `P+I` from self-adjointness and nonnegativity, then established the resolvent, self-adjoint domain, and square domain using the cited elliptic regularity. These arguments give the stated one-dimensional kernel, zero cokernel, and index one without an Atiyah–Singer shortcut.
- `lem-qftx-periodic-su2-product-kernel-and-center-line-sign`: specified an SU(2)-compatible connection and the parallel quaternionic structure required for the real product-kernel argument, and defined the fixed real Hilbert space used in the mod-two count. Replaced the unsupported shifted-inverse claim with the same direct `P+I` argument for the self-adjoint product operator and its domain.

The four affected proof-contract entries now exactly match the authored proof/verification derivations. No stale `verification.judge` record was present on the repaired items. Final checks:

- Reflow and precheck passed for each of the four repaired items.
- `proof-layout.mjs` on all four changed items reported 19 steps and 0 defects.
- The assigned scope contains one TikZ diagram; it was checked as above and is mathematically consistent with the stated curvature transformation.

## Findings that could not be edited

1. `def-qftx-nonabelian-gauge-data`, a batch-2 draft prerequisite of the assigned `def-qftx-instanton-number-and-asd-sector`, calls the equivalence class of all smooth principal-bundle presentations a “bundle sector,” then requires `[P]` to be an element of a set `Σ`. In the stated set-based foundations the unrestricted collection of presentations is a proper class, so this literal equivalence class is not an element that can be placed in a set. A set-sized family/skeleton or set-valued sector label is needed. The source still has SHA-256 `3c8f1978285281d39f24e636937de89e33591cd41ce7e18763a3e86b3bc5c011` at report time; the routed finding binds those current bytes.
2. `ex-qftx-bpst-instanton-formal-sector-weight`, outside batch 5, repeats the BPST chart-dependent formulas but its Example opening only names a “north stereographic chart” and states metric expressions. It supplies no embedding or pole formula and does not identify its coordinates with the explicit chart maps used by its supplier. The domains and patch identification of the local potentials therefore remain unspecified in this item.
3. `pthm-aqft-global-anomaly-test`, outside batch 5, assumes a rank-two Hermitian bundle “with structure group SU(2)” and a smooth unitary connection `A`, but does not require `A` to preserve the SU(2) reduction. The proof uses a parallel pseudoreal/SU(2) real structure; a general unitary connection need not preserve that structure. The statement needs the SU(2)-compatibility hypothesis.

These defects remain for their owners’ disposition; no out-of-scope source was edited. There is no other blocker to this reader report.
