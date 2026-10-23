# Reader report — Batch 19

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader (`reader-19`)  
Scope: batch `19`

## Opened inventory

Assigned pages:

- `fd-s03` — `library/fluid-dynamics-mathematics/fd-s03.md`
- `fd-s03-examples` — `library/fluid-dynamics-mathematics/fd-s03-examples.md`

Both pages are draft mathematics pages with `page_layout: compact-v1`, frontmatter only, and inventories matching the batch manifest. The A page lists the 12 assigned A items; the companion lists two remarks and one example. Their page prerequisites are the published mathematical page `euclidean-surface-measure-divergence-and-green-identities` and draft page `fd-s02` (for `fd-s03`), and `fd-s03` (for `fd-s03-examples`). I opened `fd-s02` and the published prerequisite page; their identities and relevant inventories match the declared edges.

Assigned items opened and checked in the batch inventory:

- `lem-fd-torus-mean-zero-poincare`
- `thm-fd-periodic-smooth-incompressible-energy`
- `thm-fd-periodic-smooth-stability`
- `thm-fd-smooth-sobolev-continuation`
- `thm-fd-periodic-inviscid-limit`
- `thm-fd-smooth-vorticity-identities`
- `thm-fd-polytropic-energy`
- `thm-fd-smooth-wall-energy-uniqueness`
- `prop-fd-fluid-equation-scaling`
- `lem-fd-2d-fourier-log-velocity-bound`
- `lem-fd-2d-transport-commutator-l1-bound`
- `thm-fd-global-two-dimensional-periodic-navier-stokes`
- `rem-fd-global-regularity-open`
- `rem-fd-boundary-layer-low-mach-status`
- `ex-fd-acoustic-energy-mode`

Dependency suppliers opened for the uses in these items included `def-countable-choice`, `def-the-one-dimensional-torus-and-normalized-haar-integral`, `def-fourier-coefficients-and-trigonometric-polynomials`, `thm-fourier-basis-and-parseval-on-the-n-torus`, `def-fd-periodic-fourier-sobolev-spaces`, `def-fd-polytropic-symmetric-variables`, `def-fd-periodic-leray-pressure-maps`, `lem-fd-periodic-fourier-embedding-products`, `lem-fd-periodic-tame-transport-commutator`, `thm-fd-periodic-pressure-recovery`, `lem-fd-given-smooth-solutions-difference-energy`, `thm-fd-smooth-periodic-incompressible-ivp`, `thm-fd-smooth-polytropic-euler-ivp`, `thm-fd-smooth-wall-exterior-solution-domains`, `def-bounded-c-one-domain-boundary-charts-and-outward-normal`, `def-surface-integral-on-a-compact-c-one-hypersurface`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `thm-fd-global-linear-acoustics`, `thm-picard-lindelof-local-existence-and-uniqueness`, `lem-fd-polynomial-ode-continuation`, `thm-bolzano-weierstrass`, `lem-peak-monotone-subsequence`, and `thm-euclidean-space-complete`. The published supplier statements and draft supplier interfaces were checked against their actual files; author notes and readiness records were treated as context, not proof verdicts. For the local IVP suppliers' coefficient diagonals, the inspected scalar Bolzano–Weierstrass proof reduces to the least-index peak/rising-sun construction in `lem-peak-monotone-subsequence`; this supplies a recursive extraction rule without adding a dependent-choice premise.

I also opened the batch manifest, batch notes, and proof-contract file. The 15 contracts identify derivations for the current proof steps. No assigned item contains a TikZ or tikzcd diagram, and none is needed for these arguments.

## Review, edits, and evidence

No item or page edits were needed. I found no confirmed defect in the assigned statements, definitions, arguments, page inventories, or titles. The supplied hypotheses support the deductions: the torus Poincare estimate uses the zero Fourier mode and normalized Parseval; the energy and stability estimates use the stated periodic/symmetric-system identities; the continuation and inviscid-limit conclusions retain their local smooth and domain qualifications; and the two-dimensional global theorem is restricted to positive viscosity and closes through the stated enstrophy, Fourier-logarithmic, commutator, and continuation suppliers. The wall theorem is explicitly conditional on given fields and proves velocity uniqueness only. The acoustic example verifies the displayed linear tangent system directly and distinguishes it from nonlinear finite-amplitude evolution.

The status remark `rem-fd-global-regularity-open` is limited to CMI's public status and does not accept or reject the announced proof. I opened the two cited official pages: the CMI active list places “Navier–Stokes Equation” under “Active problems,” and its announcement dated 11 September 2026 says the problem has “apparently been settled” and that the evaluation process is “deliberately unhurried.” These sources support the remark's qualified wording: [CMI active problems](https://www.claymath.org/Millennium%20Problems/) and [CMI announcement](https://www.claymath.org/news/navier-stokes-announcement/).

The cited mathematical texts were opened at the named source locations where extractable. For example, Kuksin–Shirikyan's §2.1.7 identifies the standard-torus first positive Laplacian eigenvalue as one (PDF pp. 50–51); its Exercise 2.1.14 gives the energy identity, and §2.1.6 contains the regularity estimates. Hou's cited equations (3.1)–(3.4) concern the strong-flow energy/vorticity estimates; Tong's cited chapters cover incompressible energy, boundary layers, and sound waves; and Golse §7.4 is the compressible Euler section. The assigned deductions are established by their local proofs and exact mathematical suppliers rather than inferred from these source summaries.

Scoped format check:

```text
node tools/physics-support/proof-layout.mjs items/<all 15 assigned item paths>
proof-layout: 15 items, 62 steps, 0 defects
```

The command was run once with all 15 item paths explicitly listed. No reflow, precheck, or contract update was required because no item changed.

## Page verdicts

- `fd-s03`: acceptable. Its 12-item inventory matches the manifest, metadata and prerequisite edges are consistent, and the required body is empty.
- `fd-s03-examples`: acceptable. Its two remarks and acoustic example match the manifest, it is correctly paired with `fd-s03`, and the required body is empty.

## Defects and blockers

No uneditable defect was identified. No blocker remains. The reader findings array is empty.
