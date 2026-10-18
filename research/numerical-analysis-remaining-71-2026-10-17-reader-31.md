# Step 3a reader report — batch 31

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: independent reader  
Dispatch: `reader-31`

The autopilot status was `running` at review time, with batch 31 assigned to the Step 3a read lane and no worker currently in flight. I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, the relevant Step 3 section of `WORKFLOW.md`, and the batch-31 page manifest and proof-contract file. I treated their statements as review evidence, then checked the current authored carriers.

## Opened inventory

### Assigned pages

- A page: `library/numerical-pdes-and-spatial-discretization/mixed-finite-elements-and-stokes-stability.md` (`mixed-finite-elements-and-stokes-stability`).
- B page: `library/numerical-pdes-and-spatial-discretization/mixed-finite-elements-and-stokes-stability-examples.md` (`mixed-finite-elements-and-stokes-stability-examples`).

### Assigned items read in dependency order

All 30 manifest items were opened. The level grouping below is from the dispatch manifest. Assigned in-run suppliers were read before their consumers, and the exact published supplier statements were checked against cited uses before the dependent levels were reviewed. The level-zero item bodies were first opened before I extracted their published supplier statements, so I do not claim a strictly supplier-first file-opening sequence for those initial roots.

- Level 0: `lem-na-zero-mean-of-zero-boundary-divergence`, `lem-na-homogeneous-dirichlet-poincare`, `lem-na-homogeneous-dirichlet-korn-identity`, `lem-na-lipschitz-domain-finite-star-shaped-cover`, `def-na-star-shaped-bogovskii-integral`, `thm-na-infsup-bounded-right-inverse-hilbert`, `lem-na-scott-zhang-boundary-preserving-p1-interpolant`, `ex-na-taylor-hood-pressure-mode`.
- Level 1: `def-na-stokes-zero-mean-pressure-and-velocity-spaces`, `lem-na-finite-cover-zero-mean-data-decomposition`, `lem-na-bogovskii-kernel-support-and-divergence`, `thm-na-babuska-brezzi-kernel-coercivity`.
- Level 2: `lem-na-bogovskii-truncated-derivative-fourier-formula`, `def-na-fortin-operator`, `thm-na-mixed-galerkin-quasioptimality`, `def-na-mini-element-p1-bubble-p1-spaces`.
- Level 3: `lem-na-bogovskii-fourier-ray-and-derivative-ltwo-bound`, `lem-na-fortin-transfers-discrete-infsup`, `lem-na-mini-element-local-and-global-dimensions`, `def-na-discrete-weak-and-exact-divergence-free-spaces`, `ex-na-mini-element-bubble-moment`.
- Level 4: `thm-na-star-shaped-bogovskii-bounded-right-inverse`, `cex-na-q1-p0-checkerboard-pressure-mode`, `ex-na-weakly-versus-exactly-divergence-free-mini-velocity`.
- Level 5: `thm-na-bounded-lipschitz-domain-divergence-right-inverse`.
- Level 6: `thm-na-continuous-stokes-divergence-infsup`.
- Level 7: `thm-na-mini-element-fortin-stability`, `thm-na-weak-stokes-solvability-lipschitz-domain`.
- Level 8: `thm-na-mini-element-h1-pressure-error`, `thm-na-discrete-helmholtz-projection-and-pressure-schur`.

### Published dependency pages

Opened all five pages in the A-page `requires` list:

- `library/numerical-pdes-and-spatial-discretization/finite-element-meshes-and-interpolation.md`.
- `library/pde/lax-milgram-and-weak-elliptic-solutions.md`.
- `library/fourier-analysis/fourier-multipliers-and-sobolev-characterisations.md`.
- `library/pde/fredholm-elliptic-problems-and-the-elliptic-spectrum.md`.
- `library/number-theory/decomposition-inertia-and-frobenius.md`.

I opened the exact Definition/Statement sections needed from the direct published item dependencies: `cor-cauchy-schwarz-inequality-for-l-two`, `cor-vector-valued-ftc-and-lipschitz-bound`, `def-broken-and-conforming-polynomial-spaces`, `def-countable-choice`, `def-distributional-derivative`, `def-hilbert-space`, `def-matching-affine-simplicial-meshes`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `def-sobolev-space-wkp-and-its-norm`, `def-wkp-zero-as-a-sobolev-closure`, `lem-affine-pullback-weak-derivatives-and-scaling`, `lem-affine-simplex-gauss-green-formula`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `lem-mollification-commutes-with-weak-derivatives-in-the-interior`, `lem-shape-regular-affine-simplex-scaling`, `lem-smooth-bump-between-concentric-euclidean-balls`, `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`, `lem-w-one-two-is-a-hilbert-space`, `lem-weak-derivatives-are-polynomial-fourier-multipliers`, `thm-bramble-hilbert-on-reference-simplex`, `thm-compactness-under-continuous-maps`, `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`, `thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field`, `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-heine-borel-rn`, `thm-holder-inequality-for-integrals`, `thm-l-one-approximate-identities-converge-in-l-p`, `thm-lax-milgram`, `thm-linear-change-of-variables-for-lebesgue-measure`, `thm-rank-nullity`, `thm-reference-simplex-poincare-wirtinger`, `thm-reference-simplex-trace-and-gauss-green`, `thm-riesz-representation-for-hilbert-space`, `thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-zero-boundary-piecewise-polynomials-in-w10p`, and `thm-matching-continuous-piecewise-polynomials-are-wkp` (the last is now an added direct dependency of the repaired Fortin proof).

For the trace review I also read the relevant proofs of `thm-reference-simplex-trace-and-gauss-green`, `lem-affine-pullback-weak-derivatives-and-scaling`, and `thm-zero-boundary-piecewise-polynomials-in-w10p`. Those clauses establish the reference trace continuity, affine pullback convergence, and the zero-trace-to-`H^1_0` implication used by the local dimension repair.

### Authoritative source passages checked

- Ricardo G. Durán, [“An elementary proof of the continuity from $L^2_0(\Omega)$ to $H^1_0(\Omega)^n$ of Bogovskii’s right inverse of the divergence”](https://arxiv.org/pdf/1103.3718), arXiv:1103.3718v1. I checked formula (1.3), §2, Lemmas 2.1–2.4 and Theorem 2.1 (PDF pp. 1–6, printed pp. 2–7): the star-shaped Bogovskii formula, distributional truncation, Fourier representation, ray estimate, and derivative $L^2$ bound.
- Jean-Luc Guermond, MATH 661 Fall 2025, [Chapter 53](https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf), §§53.2.1–53.2.2, Lemma 53.9 and the weak Stokes result; and [Chapter 54](https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf), §54.1.1, Lemmas 54.1 and 54.5, and Remark 54.6. These passages state the mixed Stokes interface, divergence inf-sup, Fortin transfer, MINI stability and the approximation-rate context.
- Daniele Boffi, Franco Brezzi and Michel Fortin, [*Mixed Finite Element Methods and Applications*](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf), Theorem 5.2.2 (printed pp. 276–277), Chapter 8 §§8.2, 8.4.2, 8.5.5 (including Proposition 8.5.8), 8.6.1, 8.7.1 and 8.10.2. The checked passages cover the mixed error estimate, MINI spaces and bubble stability, the three-dimensional analogue, and Q1/P0 instability.

## Review and page verdicts

| Assigned page | Verdict | Evidence |
| --- | --- | --- |
| `mixed-finite-elements-and-stokes-stability` (A) | Sound after the four item repairs below; no page prose edit required. | The cover/tree decomposition, local Bogovskii kernel and estimates, continuous divergence lift, Stokes inf-sup/solvability, MINI Fortin map, error estimate and Schur identities agree with their current item statements and proofs. The page’s domain, dimension, mesh, pressure-gauge and choice caveats are retained. |
| `mixed-finite-elements-and-stokes-stability-examples` (B) | Sound; no page prose edit made. | The Taylor–Hood integral is $-1/18$ with zero cell mean; the MINI bubble pairing is positive for nonconstant affine pressure; the alternating Q1/P0 mode annihilates the sole interior Q1 velocity basis; rank-nullity and the cell-bubble directional derivative give a weakly but not pointwise divergence-free mini velocity. The page does not overstate these as global Taylor–Hood stability or MINI pointwise incompressibility. |

## Repairs and evidence

1. `items/lem-na-bogovskii-truncated-derivative-fourier-formula.md`, Proof 1.1: replaced the direct “omitted range $0<t<\epsilon$” argument with a comparison of two truncations on $[\delta,\epsilon]$, where the change of variables and Fubini are absolutely justified. Integration by parts cancels the $t^{-1}$ factor and gives the Cauchy bound $(\epsilon-\delta)\|f\|_1\|\phi\|_1\|\nabla\zeta\|_\infty$. This establishes the distributional limit without assuming absolute integrability at $t=0$.

2. `items/thm-na-mixed-galerkin-quasioptimality.md`, Statement and Proof 5.1: added the explicit hypothesis $V_h\ne\{0\}$ because the inf-sup supremum is over nonzero test velocities. Rewrote the pressure estimate using $\theta_u+\eta_u=u-u_h$ and the established $U_h$ bound; this proves the stated $P_h$ bound without assuming $\|\theta_u\|\le U_h$. The only assigned theorem consumer is `thm-na-mini-element-h1-pressure-error`; its nonempty mini-element mesh and cell bubbles supply a nonzero $V_h$, and its use of the mixed estimate remains valid.

3. `items/lem-na-mini-element-local-and-global-dimensions.md`, Statement, dependencies and Proof 1.2: required a nonempty mesh so $N_v-1$ cannot be negative in the empty-mesh case allowed by the mesh definition. Proved that $S_h^1\cap H^1_0(D)$ has exactly the interior vertex degrees of freedom: the closure definition, affine pullback and reference trace continuity force zero boundary traces; conversely, zero boundary vertex values give zero boundary facet traces and the published zero-boundary piecewise-polynomial theorem gives membership in $H^1_0$. Its assigned consumer `ex-na-weakly-versus-exactly-divergence-free-mini-velocity` uses the repaired dimension result on a nonempty two-triangle mesh.

4. `items/thm-na-mini-element-fortin-stability.md`, dependencies, Facts [F5] and Proof 2.1: removed the unsupported cellwise Sobolev Green/cancellation claim. Added `thm-matching-continuous-piecewise-polynomials-are-wkp` and used its $q_h\in H^1(D)$ conclusion with $w=\Pi_hv-v\in H^1_0(D)$; approximation by compactly supported smooth fields gives $b(w,q_h)=\int_Dw\cdot\nabla q_h=0$ from the elementwise mean-zero correction. The Fortin statement itself is unchanged; `thm-na-mini-element-h1-pressure-error` continues to use it under its stated conforming mesh assumptions.

The four affected proof-contract entries in `research/numerical-analysis-remaining-71-2026-10-17-batch-31.proof-contracts.json` were regenerated from the repaired facts and steps. No `verification.judge` field was present in these four item carriers. Reflow reported all four unchanged; precheck passed for all four; strict proof-contract validation reported 0 errors and 0 warnings for 4/4; the single batched proof-layout command reported 4 items, 15 steps, 0 defects.

## Unedited defects and blockers

No confirmed or suspected uneditable mathematical defect was found in an assigned item, page, or published dependency. No blocker prevented review. No item outside batch 31, B-page prose, published content, or `research/plan-spec.json` was edited.

The two repaired item carriers add published direct dependencies (`lem-na-mini-element-local-and-global-dimensions` adds the H0/trace/zero-boundary suppliers; `thm-na-mini-element-fortin-stability` adds the continuous-piecewise-polynomial H1 supplier). The dispatch `batch-31.pages.json` remains unchanged; these exact dependency metadata deltas are present in the item byte changes for the run’s normal split/reconciliation.

## Coverage limitation

The level-zero item bodies were opened before their direct published supplier statements; those supplier statements were then checked against the cited uses, and all dependent in-run levels were reviewed supplier-first. I did not reread the full level-zero files after opening those suppliers. I checked the exact Definition/Statement clauses of direct published suppliers and the relevant proof passages for the trace repair. I read the cited Duran, Guermond and Boffi–Brezzi–Fortin passages listed above, but did not audit the entire proof of every published supplier or the remainder of those source books/papers. The review therefore records no independent verdict on unrelated published content.
