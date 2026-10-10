# Step 3b authoring report — pair `em-elementary-mathematical-prerequisites` / `em-elementary-mathematical-prerequisites-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: alpha-high (Step 3b scaffold auditor and item author); batch 13; 2026-10-09. Authoring passes: `step3b-pair-em-elementary-mathematical-prerequisites-6a999c849cff08f1` (items 1-10 and this report skeleton), `step3b-pair-em-elementary-mathematical-prerequisites-cd5df7727d521a8c` (items 11-14, pages, manifest), and the completion pass `step3b-pair-em-elementary-mathematical-prerequisites-ead5953f00da8bd2` recorded at the end of this file.
- A page: `em-elementary-mathematical-prerequisites` (order 305, category `classical-electromagnetism-mathematics`, `library: mathematics`, 13 items).
- B page: `em-elementary-mathematical-prerequisites-examples` (order 306, 1 leaf example).
- Owned items (authoring order = dispatch dependency order; ties by page order and item ID):
  1. `def-em-complex-plane-wave` (level 0)
  2. `def-em-moving-patch` (level 0)
  3. `def-em-surface-distribution` (level 0, AC_omega)
  4. `lem-em-continuous-localization` (level 0, AC_omega)
  5. `lem-em-coulomb-dipole-remainder` (level 0, AC_omega)
  6. `lem-em-parameter-integrals` (level 0)
  7. `lem-em-point-current-continuity` (level 0)
  8. `lem-em-quadratic-stress-identity` (level 0)
  9. `lem-em-interface-derivatives` (level 1, AC_omega)
  10. `lem-em-joint-smooth-potentials` (level 1)
  11. `lem-em-moving-flux` (level 1, AC_omega)
  12. `lem-em-period-average` (level 1)
  13. `lem-em-interface-wave-linear-system` (level 2)
  14. `ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries` (level 3, B page)
- Artifacts owed at handoff: the fourteen item carriers under `items/`, the two page carriers under
  `library/classical-electromagnetism-mathematics/`, `research/physics-em-sr-40-2026-10-08-batch-13.proof-contracts.json`,
  manifest/coverage/cross-batch record reconciliation, Step 3b item decisions for the fourteen original scaffold IDs, and this report.

## Open obligations at entry

1. Author all fourteen items with complete arguments, exact supplier interfaces, explicit conventions and honest exclusions; reconcile every actual proof use against the exact published supplier statements (58 published mathematical deps), and against the same-page suppliers as they are authored in dependency order.
2. Carry the six `AC_omega` declarations (`def-em-surface-distribution`, `lem-em-continuous-localization`, `lem-em-coulomb-dipole-remainder`, `lem-em-parameter-integrals`, `lem-em-interface-derivatives`, `lem-em-moving-flux`) with exact use; the B example inherits the qualification through `lem-em-moving-flux`.
3. Recheck the Step 3a observations against current inputs: the three published `AC_omega` metadata-hygiene rows (no repair attempted on read-only content); the `lem-em-point-current-continuity` third-reconciliation direction (proper graph map; endpoint identity `partial_t rho + div J = q delta_start - q delta_s`); the `lem-em-joint-smooth-potentials` corrected interface (negative scalar radial witness, joint `C^k`, no joint `C^{k+1}` for `k=1`).
4. Recompute dependency levels from actual dependencies after any dependency change; record each level in the item frontmatter and the batch manifest.
5. Register the items on both pages and in the batch manifest; refresh batch coverage and cross-batch dependency records where the authored uses differ from the scaffold; write item-specific proof contracts from the completed arguments.
6. Run explicit-path precheck, rendercheck, content policy, strict proof contracts, dependency-level checks and `validate-plan`; run `proof-layout.mjs` on all changed items once before handoff.
7. Record `step3-decisions.mjs record-item` decisions (`accept` only with confidence 1, examined dependency IDs and concrete evidence) after complete authoring and checks; report any unresolved escalation.

## Checkpoints

(checkpoints appended per item below)

### Checkpoint — `def-em-complex-plane-wave` (item 1)

- Claim/conventions: real fields $E_j=\operatorname{Re}(e_j\exp(i\theta))$, $B_j=\operatorname{Re}(b_j\exp(i\theta))$, $\theta=\langle k,x\rangle-\omega t$, $k\in R^3$, $\omega>0$, $e,b\in C^3$; complex notation encodes real fields and real linear equations; no electromagnetic interpretation. Domain conventions and well-definedness recorded; no regularity claimed.
- Suppliers read: `def-complex-exponential`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-complex-numbers-and-arithmetic`, `def-euclidean-inner-product`, `def-ck-euclidean-maps-and-diffeomorphisms`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-complex-exponential-is-entire-with-derivative-itself` (exact Definition/Statement text read).
- Deps/roles/level: unchanged from the scaffold manifest; `dependency_level 0` recorded in item frontmatter.
- Checks: rendercheck OK; depcheck focused OK (0 errors, 0 warnings); precheck n/a (definition).
- Open: none for this item.

### Checkpoint — `def-em-moving-patch` (item 2)

- Claim/conventions: finite elementary Green region $D$ (Jordan measurable, positive boundary chain), $C^2$ extension of $r:D\times I\to R^3$, $r_u\times r_v\ne 0$ on $D^\circ\times I^\circ$, swept set $S$, a $C^1$ velocity field $(W,v)$ with $v(r(p,t),t)=r_t(p,t)$ (existence is a standing hypothesis; this is the precise single-valuedness condition), $C^1$ field $B$ on $V\supseteq S$, flux $\Phi(t)=\int_D\langle B(r,t),r_u\times r_v\rangle\,du\,dv$. Extension-independence of partials, integrability (compact Jordan set, continuous integrand), degenerate $I$ cases and the optional material-sheet injectivity are stated.
- Suppliers read: `def-type-i-type-ii-and-elementary-green-regions`, `def-positive-orientation-for-elementary-region-boundaries`, `def-admissible-regular-parametrized-surface-patch`, `def-oriented-unit-normal-and-flux-of-a-surface-patch`, `def-cross-product-in-r3` (exact Definitions read).
- Dep changes: added `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `cor-jordan-content-finite-additivity`, `thm-jordan-boundary-criterion`, `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`, `lem-compact-null-iff-content-zero-in-rn` for the Jordan-measurability and integrability of the flux integral; statement text unchanged (scope hash unaffected). `dependency_level 0`.
- Checks: rendercheck OK; depcheck focused OK (0 errors, 0 warnings); precheck n/a.
- Open: none for this item.

### Checkpoint — `def-em-surface-distribution` (item 3)

- Claim/conventions: AC_ω declared. Ω⊆R³ open; S⊂Ω compact embedded C² hypersurface (slice-chart definition stated); two-sided presentation: continuous unit normal n and open sides Ω_± with Ω∖S=Ω_−⊔Ω_+ and the offset condition x±sn(x)∈Ω_± for small s>0; δ_S(ψ)=∫_Sψ dS and aδ_S(ψ)=∫_Saψ dS are distributions via the order-0 estimate |δ_S(ψ)|≤S(S)p_0(ψ) and its density version (local finite-order characterization); C¹ fields on Ω_−∪Ω_+ with continuous one-sided traces F_± have locally integrable components (S is content zero via graph/slice-chart and C¹-image arguments), jump [F]=F_+−F_− continuous; sign convention fixed; no products of distributions defined.
- Suppliers read: `def-distribution`, `def-test-function-space-d-of-an-open-set`, `def-fixed-support-test-function-frechet-space`, `thm-local-finite-order-characterization-of-distributions`, `def-regular-distribution-from-a-locally-integrable-function`, `def-surface-integral-on-a-compact-c-one-hypersurface`, `lem-surface-integral-is-independent-of-c-one-boundary-charts`, `def-bounded-c-one-domain-boundary-charts-and-outward-normal`, `def-bounded-piecewise-c-one-euclidean-domain`, `def-oriented-unit-normal-and-flux-of-a-surface-patch`, `def-countable-choice` (exact Definitions/Statements read).
- Dep additions: `def-fixed-support-test-function-frechet-space`, `thm-local-finite-order-characterization-of-distributions`, `def-embedded-submanifold-and-slice-chart`, `def-codimension-and-hypersurface`, `thm-graph-of-continuous-function-on-a-compact-set-has-content-zero`, `lem-c-one-images-of-content-zero-compact-sets-have-content-zero`, `def-null-and-content-zero-in-rn`, `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`, `lem-compact-null-iff-content-zero-in-rn`. Statement unchanged. `dependency_level 0`.
- Checks: rendercheck OK; depcheck focused OK; precheck n/a (definition).
- Open: none.

### Checkpoint — `lem-em-continuous-localization` (item 4)

- Claim: AC_ω declared. Integral form: n,m≥1, U⊆R^n open, g:U→R^m continuous, ∫_V g dλ_n=0 (componentwise signed Lebesgue integrals of g_iχ_V) for every ball V compactly contained in U ⟹ g=0 on U. Disc form: W⊆R³ open, F:W→R³ continuous, vanishing of ∫_{D_r}(F_i∘φ_{i,q})dλ₂ for all coordinate discs φ_{i,q}(D̄_r)⊆W (equivalent, by the stated flat-patch computation, to vanishing flux with unit normal e_i) ⟹ F=0 on W. Proof: contradiction, layered steps 1.1–5.1 (canonical precheck numbering), lower bound cχ_V≤uχ_V and ball positivity λ(V)>0; disc form reduces to the integral form in the chart centred at the nonzero point (no translation-invariance fact needed).
- Suppliers read: `def-metric-ball`, `def-metric-continuity`, `def-metric-topology`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-integral-over-a-measurable-set`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `def-integral-of-a-nonnegative-simple-function`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `cor-continuous-functions-are-borel-measurable`, `def-borel-sigma-algebra`, `thm-extreme-value-metric`, `lem-standard-basis-of-f-n`, `cor-disc-jordan-content-is-pi-r-squared`, `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals` (exact text read).
- Dep additions: `def-metric-topology`, `def-integrable-real-and-complex-functions-and-their-integrals`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `def-integral-of-a-nonnegative-simple-function`, `def-borel-sigma-algebra`, `thm-extreme-value-metric`, `lem-standard-basis-of-f-n`, `def-euclidean-inner-product`, `def-admissible-regular-parametrized-surface-patch`, `def-cross-product-in-r3`, `cor-disc-jordan-content-is-pi-r-squared`, `def-riemann-integral-over-a-jordan-set`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`. Statement unchanged. `dependency_level 0`.
- Checks: precheck PASS (contradiction, canonical layered numbering adopted); rendercheck OK; depcheck focused OK.
- Open: none. Note: `thm-monotonicity-of-the-integral` and `def-ck-euclidean-maps-and-diffeomorphisms` remain declared from the scaffold; the proofs cite the corresponding multidimensional suppliers instead (`prop-order-and-scalar-rules...`, `cor-disc...`); flagged for Step 5 review as metadata-only.

### Checkpoint — `lem-em-coulomb-dipole-remainder` (item 5)

- Claim: AC_ω declared. a>0, ρ∈L¹(λ₃) vanishing a.e. outside the closed ball B_a; Q=∫ρ, p=∫yρ, ‖ρ‖₁=∫|ρ|; for r=‖x‖≥2a: ∫ρ(y)/‖x−y‖dλ₃ = Q/r + ⟨p,x⟩/r³ + R(x) with R(x):=∫_{B_a}ρ(y)(1/‖x−y‖−1/r−⟨x,y⟩/r³)dλ₃ and |R(x)|≤16a²‖ρ‖₁/r³. Proof: h(s)=‖x−sy‖⁻¹, h''=−‖y‖²‖w‖⁻³+3⟨w,y⟩²‖w‖⁻⁵, |h''|≤4‖y‖²‖w‖⁻³≤32‖y‖²r⁻³; G(s)=(1−s)h'(s)+h(s) has G'=(1−s)h''; FTC; integrate the pointwise identity against ρ via a.e.-representative and linearity; triangle inequality gives the bound. No derivative of R asserted.
- Suppliers read: `thm-newton-leibniz-with-interior-derivative`, `thm-monotonicity-of-the-integral`, `thm-integral-triangle-inequality`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `def-l-one-of-a-measure`, `def-measure-null-set-and-almost-everywhere`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `thm-cauchy-schwarz-and-the-euclidean-norm` (exact statements read).
- Dep additions: `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-integrable-real-and-complex-functions-and-their-integrals`, `cor-continuous-functions-are-borel-measurable`, `def-borel-sigma-algebra`. Statement unchanged. `dependency_level 0`.
- Checks: precheck PASS (direct, chain labels 1.1–6.1); rendercheck OK; depcheck focused OK.
- Open: none.

### Checkpoint — `lem-em-parameter-integrals` (item 6)

- Claim: K⊆R^n compact measurable finite measure, f and ∂_tf continuous on a neighbourhood of K×[a,b]; then t↦∫_Kf(x,t)dλ is differentiable on [a,b] with relative endpoint derivatives and derivative ∫_K∂_tf(x,t)dλ; surface form under AC_ω on a fixed compact C¹ hypersurface with the same conclusion. No moving sets, no crossing singularities, no spatial differentiation. Proof: MVT writes the difference quotient as ∫_K∂_tf(x,τ_x)dλ; uniform continuity of ∂_tf on the compact K×[a,b] (Heine–Cantor) turns the sup error into ε via λ(K); the surface clause is the same argument with the finite surface measure and its linearity/monotonicity.
- Suppliers read: `cor-mean-value-theorem`, `thm-heine-cantor-metric`, `thm-heine-borel-rn`, `def-integral-over-a-measurable-set`, `def-integrable-real-and-complex-functions-and-their-integrals`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-integral-triangle-inequality`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `def-surface-integral-on-a-compact-c-one-hypersurface`, `lem-surface-integral-is-independent-of-c-one-boundary-charts` (exact text read; `def-metric-uniform-continuity`, `def-metric-compactness` consulted).
- Dep additions: `def-integrable-real-and-complex-functions-and-their-integrals`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-integral-triangle-inequality`, `lem-surface-integral-is-independent-of-c-one-boundary-charts`, `def-metric-uniform-continuity`, `def-metric-compactness`. Statement unchanged. `dependency_level 0`.
- Checks: precheck PASS (direct, labels 1.1–5.1); rendercheck OK; depcheck focused OK.
- Open: none.

### Checkpoint — `lem-em-point-current-continuity` (item 7)

- Claim: proper-graph branch (I open interval, z C¹, γ(t)=(z(t),t) proper into Ω; ⟨ρ,ψ⟩=q∫_Iψ(z(t),t)dt, ⟨J,ψ⟩=q∫_Iz'ψ): ρ,J are distributions and ∂_tρ+divJ=0; properness automatic for Ω=R³×I and for I=R; endpoint branch (I=(a,b), continuous extension of z, finite ∫_a^b|z'|, endpoint events in Ω): same functionals defined by improper integrals are distributions and ∂_tρ+divJ=qδ_{(z(a),a)}−qδ_{(z(b),b)}. Proof: pulled-back test compactly supported under properness; chain rule gives the integrand as (d/dt)(ψ∘γ); interior FTC; endpoint branch uses truncated FTC on [a+ε,b−ε] plus the mixed improper limit, and the static witness I=(0,1), z=0 gives qδ_{(0,0)}−qδ_{(0,1)} (recorded in Remarks).
- Suppliers read: `def-test-function-space-d-of-an-open-set`, `def-distribution`, `def-fixed-support-test-function-frechet-space`, `thm-local-finite-order-characterization-of-distributions`, `def-distributional-derivative`, `def-dirac-delta-and-its-derivatives`, `thm-newton-leibniz-with-interior-derivative`, `thm-linearity-of-the-integral`, `thm-additivity-over-subintervals`, `def-improper-integral-at-a-finite-endpoint`, `def-mixed-improper-integral`, `thm-comparison-test-for-improper-integrals`, `thm-absolute-improper-convergence-implies-convergence`, `lem-closed-subset-of-a-compact-space-is-compact`, `thm-compactness-under-continuous-maps`, `thm-compact-subset-is-closed-and-bounded`, `thm-heine-borel-rn` (exact text read).
- Dep additions: `def-fixed-support-test-function-frechet-space`, `thm-local-finite-order-characterization-of-distributions`, `thm-linearity-of-the-integral`, `thm-additivity-over-subintervals`, `def-improper-integral-at-a-finite-endpoint`, `def-mixed-improper-integral`, `thm-comparison-test-for-improper-integrals`, `thm-absolute-improper-convergence-implies-convergence`, `thm-compact-subset-is-closed-and-bounded`, `lem-closed-subset-of-a-compact-space-is-compact`, `thm-compactness-under-continuous-maps`, `thm-heine-borel-rn`. Statement unchanged. `dependency_level 0`.
- Checks: precheck PASS (direct; canonical layered numbering adopted, labels 1.1–7.1); rendercheck OK; depcheck focused OK.
- Open: none.

### Checkpoint — `lem-em-quadratic-stress-identity` (item 8)

- Claim: U⊆R³ open, F C¹; Q_ij=F_iF_j−½δ_ij|F|²; then divQ=F divF−F×curlF; ε_ijkQ_kj=0 for symmetric Q; and for C¹ symmetric Π with ∂_tg+divΠ=−f: ∂_t(x×g)+div(x×Π)=−x×f. Proof by explicit coordinate expansion (product rule), the ε antisymmetry/symmetry cancellation, and differentiation of (x×Π)_{iℓ}=ε_ijkx_jΠ_{kℓ} with the product rule. No mixed-partial interchange, no boundary terms.
- Suppliers read: `def-cross-product-in-r3`, `def-divergence-and-curl-of-a-c1-vector-field`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives` (statements; `def-jacobian-matrix-and-gradient`, `def-directional-and-partial-derivatives` consulted).
- Dep changes: none beyond the scaffold; statement unchanged (the Levi-Civita symbol is defined inside the statement). `dependency_level 0`.
- Checks: precheck PASS (direct; canonical labels 1.1–4.1 after adopting the layered numbering); rendercheck OK; depcheck focused OK.
- Open: none.

### Checkpoint — `lem-em-interface-derivatives` (item 9)

- Claim: AC_ω declared. Two-sided compact embedded C² interface S with sides Ω_± and normal n from minus to plus; F C¹ on each side with one-sided C¹ traces; away from the edge, ∂_iF_j={∂_iF_j}+n_i[F_j]δ_S and divF={divF}_piecewise+n·[F]δ_S, curlF={curlF}_piecewise+n×[F]δ_S, tested against ψ∈D(Ω) with suppψ∩∂S=∅. Proof: localize by a finite smooth partition of unity to single-patch balls, apply the divergence theorem on Ω_±∩B to ψF_je_i (outward normals −n and +n), and antisymmetrize.
- Suppliers read: `def-em-surface-distribution` (own item), `def-distributional-derivative`, `def-regular-distribution-from-a-locally-integrable-function`, `def-bounded-piecewise-c-one-euclidean-domain`, `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`, `lem-test-function-cutoffs-and-euclidean-localization` (exact statements read).
- Dep additions: `def-divergence-and-curl-of-a-c1-vector-field`, `lem-test-function-cutoffs-and-euclidean-localization`, `def-fixed-support-test-function-frechet-space`. Statement unchanged. `dependency_level 1` (consumer of the same-page `def-em-surface-distribution`).
- Checks: precheck PASS (direct; canonical labels 1.1, 1.2, 2.1, 3.1, 4.1); rendercheck OK; depcheck focused OK.
- Open: none.

### Checkpoint — `lem-em-joint-smooth-potentials` (item 10)

- Claim: joint-C^k interval convention stated explicitly (restriction of a C^k map on a neighbourhood; relative endpoint derivatives; degenerate/unbounded I qualifications). For open star-shaped U with centre a and jointly C^k B (k≥1) with divB(·,t)=0: A=∫₀¹sB(a+s(x−a),t)×(x−a)ds is jointly C^k with curlA(·,t)=B(·,t); for jointly C^k closed C: φ=−∫₀¹⟨C(a+s(x−a),t),x−a⟩ds is jointly C^k with ∇φ(·,t)=−C(·,t); smooth data give smooth witnesses. Proof: extension neighbourhood, radial-admissibility set P (open by a finite-ball/ρ argument), induction on derivative order via differentiation under the integral over s∈[0,1] and the uniform error bound, then the slice-wise published vector-potential theorem and an explicit Newton–Leibniz derivation of ∇Ψ_C=C (negative scalar witness preserves the sign).
- Suppliers read: `thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential`, `thm-poincare-lemma-for-star-shaped-domains`, `def-star-shaped-open-subset-of-rn`, `def-vector-potential-of-a-c1-vector-field`, `def-closed-and-exact-c1-vector-fields`, `lem-uniform-integral-error-bound`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle` (exact statements read).
- Dep additions: `def-directional-and-partial-derivatives`. `lem-em-parameter-integrals` retained as declared parallel method reference. Statement unchanged. `dependency_level 1` (consumer of the same-page `lem-em-parameter-integrals`).
- Checks: precheck PASS (direct, labels 1.1–6.1); rendercheck OK; depcheck focused OK.
- Open: none.

## Completion pass — missing proof contracts and recovery checks (label `step3b-pair-em-elementary-mathematical-prerequisites-ead5953f00da8bd2`)

Entry state: all 14 item carriers and both page carriers were on disk from the two
earlier authoring passes; the engine's dispatch-author artifact accounting (18
files: this report, `batch-13.proof-contracts.json`, 2 pages, 14 items) failed
only on the absent `research/physics-em-sr-40-2026-10-08-batch-13.proof-contracts.json`,
and the report above carried checkpoints for items 1–10 but none for items
11–14 and no handoff section. This pass independently re-read all 14 carriers
and their exact direct suppliers (published imports as well as the same-page
items), repaired the three bookkeeping defects below, wrote the missing proof
contracts from the completed arguments, re-ran the full scoped battery, and
recorded the 14 item decisions. No mathematical claim, hypothesis, dependency,
page placement or level was changed in this pass.

### Re-verification of items 1–10 (full read, this pass)

Items 1–3 are definitions whose well-definedness clauses were checked line by
line against their suppliers (`def-em-complex-plane-wave`: the encoding
convention and componentwise real parts; `def-em-moving-patch`: Jordan
measurability of finite elementary Green regions, extension independence of
partials including the explicit singleton-time failure, integrability of the
flux integrand; `def-em-surface-distribution`: the order-zero finite-order
estimates, the two-sided normal convention, and the content-zero/local
integrability argument). Items 4–10 were checked step by step, including the
contradiction argument of `lem-em-continuous-localization` (the reversed
component, `u>c` on `V`, `λ(V)>0`, and the disc reduction), the two
fundamental-theorem applications and the bound `|R|≤16a²‖ρ‖₁/r³` of
`lem-em-coulomb-dipole-remainder`, the uniform-continuity estimate of
`lem-em-parameter-integrals`, the proper-graph and truncated endpoint branches
of `lem-em-point-current-continuity` (with the static witness
`I=(0,1)`, `z=0`), the coordinate expansions and Levi-Civita cancellation of
`lem-em-quadratic-stress-identity`, the single-patch divergence-theorem
computation of `lem-em-interface-derivatives`, and the radial-admissibility
induction and negative scalar witness of `lem-em-joint-smooth-potentials`. No
mathematical defect was found in items 1–10 on re-reading; their checkpoints
above stand.

### Checkpoint — `lem-em-moving-flux` (item 11, level 1, AC_ω)

- Claim: in the setting of `def-em-moving-patch` with `divB=0`, `Φ` is
  differentiable on `I` with relative one-sided endpoint derivatives and
  `Φ'(t)=∫_{S(t)}∂_tB·n dS − ∮_{∂S(t)}(v×B)·dr` at regular slices; without
  `divB=0` the additional term `∫_{S(t)}(v·n)divB dS` appears.
- Verified: the determinant identity of step 1.2
  (`⟨B₀,(Au₁)×u₂⟩+⟨B₀,u₁×(Au₂)⟩=tr(A)⟨B₀,u₁×u₂⟩−⟨AB₀,u₁×u₂⟩`) via the
  column-multilinear alternating function `E` with `E(I₃)=0`; the area-vector
  derivative and the substitution of
  `curl(v×B)=(divB)v−(divv)B+(Dv)B−(DB)v` in steps 2.2 and 3.1; and the
  term-by-term identification in step 4.1 (surface-integral formula with the
  content-zero boundary degeneracy of `w=r_u×r_v`, and patch Stokes for
  `∮(v×B)·dr`).
- Suppliers read: `def-em-moving-patch`, `lem-em-parameter-integrals`,
  `lem-the-divergence-and-curl-of-a-cross-product`,
  `thm-the-classical-stokes-theorem-for-a-c2-surface-patch`,
  `def-the-induced-boundary-chain-of-a-c2-surface-patch`,
  `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`,
  `def-oriented-unit-normal-and-flux-of-a-surface-patch`,
  `def-surface-area-and-scalar-surface-integral-of-a-patch`,
  `thm-surface-area-density-is-cross-product-norm`,
  `lem-rigidity-of-alternating-multilinear-matrix-functions`,
  `def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions`.
- Deps/level: unchanged from the manifest; `dependency_level 1`. AC_ω is
  declared and inherited from the surface-integral/parameter-integral
  suppliers; the proof itself makes no selection.
- Open: none. (The identity at an included endpoint is asserted only when the
  endpoint slice is regular, as the Statement says.)

### Checkpoint — `lem-em-period-average` (item 12, level 1, choice-free)

- Claim: for `ω>0`, `T=2π/ω`,
  `(1/T)∫₀^T Re(ae^{−iωt})Re(de^{−iωt})dt=½Re(a d̄)`, plus the componentwise
  complex-bilinear dot and cross versions.
- Verified: the expansion `Re z=(z+z̄)/2` with the conjugate-pair grouping in
  step 1.1; the explicit antiderivative `Φ(t)=ad e^{−2iωt}/(−2iω)+a d̄ t` with
  `Φ'=ad e^{−2iωt}+a d̄` (step 2.1, now citing `[F1]` for `exp'=exp`), the
  kernel value `e^{−2iωT}=e^{−4πi}=1` and the fundamental theorem in step 3.1;
  the componentwise reduction in step 4.1.
- Suppliers read: `def-complex-exponential`,
  `thm-complex-exponential-is-entire-with-derivative-itself`,
  `thm-complex-exponential-addition-and-real-extension`,
  `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`,
  `def-complex-conjugate-real-imaginary-part-and-modulus`,
  `lem-complex-conjugation-and-modulus-laws`, `thm-complex-numbers-form-a-field`,
  `thm-kernel-and-fibres-of-complex-exponential`,
  `thm-newton-leibniz-with-interior-derivative`.
- Deps/level: unchanged; `dependency_level 1`; no choice principle.
- Repairs in this pass: `[F1]` was declared and linked but cited by no numbered
  step; the derivative of `e^{−2iωt}` in step 2.1 genuinely uses `exp'=exp`, so
  step 2.1 now cites `[F1]` and states that use. Claim and conclusion unchanged.
- Open: none.

### Checkpoint — `lem-em-interface-wave-linear-system` (item 13, level 2, choice-free)

- Claim: for `ε_j,μ_j>0`, `Z_j=√(μ_j/ε_j)`, and `E_i≠0` satisfying
  `E_i+E_r=E_t`, `(E_i−E_r)/Z₁=E_t/Z₂`, one has
  `E_r/E_i=(Z₂−Z₁)/(Z₂+Z₁)`, `E_t/E_i=2Z₂/(Z₁+Z₂)` and `R+T=1` for
  `R=|E_r/E_i|²`, `T=(Z₁/Z₂)|E_t/E_i|²`.
- Verified: positivity and invertibility in step 1.1 (`Z_j>0`, `Z₁+Z₂>0`,
  `E_i≠0`), the substitution solution in step 2.1, and the expansion
  `(Z₂−Z₁)²+4Z₁Z₂=(Z₁+Z₂)²` in step 3.1.
- Suppliers read: `thm-of-square-roots`, `def-complete-ordered-field`,
  `def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`,
  `def-complex-conjugate-real-imaginary-part-and-modulus`,
  `lem-em-period-average`.
- Deps/level: unchanged; `dependency_level 2`; no choice principle.
- Repairs in this pass: the declared fact `[L3]` (mean-square interpretation)
  was cited by no numbered step and duplicated its `[[lem-em-period-average]]`
  link; it was moved into the Remarks, where the interpretive content is now
  stated with a single link and the same algebraic caveat. The dependency on
  `lem-em-period-average` is retained (the Remarks' mean-square identification
  uses it). Claim and proof unchanged.
- Open: none.

### Checkpoint — `ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries` (item 14, level 3, B page)

- Claim: on `D=[0,1]²`, `r(u,v,t)=(a(t)u,a(t)v,0)` with `a>0`, `B=e₃`,
  `v=(a'/a)(x₁,x₂,0)`, the flux is `Φ(t)=a(t)²`, `∂_tB` has zero surface
  integral, `curl(v×B)=−2(a'/a)e₃` and patch Stokes gives
  `∮(v×B)·dr=−2aa'`, matching `lem-em-moving-flux`; dropping the boundary term
  would contradict `Φ'=2aa'` whenever `a'≠0`.
- Verified: the regularity and compatibility check of step 1.1, the constant
  integral `∫_D a²=a²` from `[L3]` in step 2.1, the explicit curl computation
  and Stokes evaluation in step 2.2, and the comparison in step 3.1; the
  constant-amplitude case is recorded in the Remarks as non-discriminating.
- Suppliers read: `lem-em-moving-flux`, `def-em-moving-patch`,
  `def-type-i-type-ii-and-elementary-green-regions`,
  `def-riemann-integral-over-a-jordan-set`, `def-multidimensional-darboux-sums`,
  `def-multidimensional-darboux-integral`, `def-multidimensional-grid-partition`,
  `def-multidimensional-rectangle-and-volume`,
  `thm-the-classical-stokes-theorem-for-a-c2-surface-patch`,
  `def-the-induced-boundary-chain-of-a-c2-surface-patch`,
  `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`,
  `def-positive-orientation-for-elementary-region-boundaries`.
- Deps/level: unchanged; `dependency_level 3`; AC_ω is inherited through
  `lem-em-moving-flux` (declared on the B page's dependency, not re-described as
  a new assumption).
- Repairs in this pass: the facts `[L3]` and `[L4]` each linked one source
  twice (`def-riemann-integral-over-a-jordan-set`,
  `thm-algebra-of-derivatives`), which the strict contract rejects as a
  duplicate citation; the second occurrence was removed in each fact. Text and
  claim unchanged.
- Open: none.

### Defects found and repaired in this pass (exact statements)

1. `lem-em-period-average`: `[F1]` declared with four links but cited by no
   numbered step. Repair: step 2.1 now cites `[F1]` and states the use
   (`exp'=exp` in the derivative of `e^{−2iωt}`). No claim change.
2. `lem-em-interface-wave-linear-system`: `[L3]` declared with no proof-step use
   and a duplicated link. Repair: content moved to the Remarks with a single
   link; the unused fact removed; dep unchanged. No claim change.
3. `ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries`: duplicate
   links inside `[L3]` and `[L4]`. Repair: duplicate occurrences removed. No
   claim change.
4. Missing artifact: `research/physics-em-sr-40-2026-10-08-batch-13.proof-contracts.json`
   did not exist. Repair: written in this pass with all 14 entries (11 proof
   items with exact citations, per-step derivations and the eight boundary
   cases; 3 definitions with empty citations/derivations and the eight boundary
   cases).

### Checks run in this pass (actual results)

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` on the 14 explicit
  item paths: 11 proof items PASS (contradiction/direct as recorded above);
  3 definitions carry no checkable proof text.
- `node tools/physics-support/rendercheck.mjs --json` on the 14 items and 2 pages: 16 files,
  0 errors, 0 warnings.
- `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-13.pages.json`:
  14 items, 0 normalized, 0 errors.
- `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-13.pages.json`
  (item mode, not `--manifest-only`): 0 errors, 0 warnings.
- `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-13.coverage.json`:
  0 errors, 1 advisory warning (`coverage-low-yield`, 9/33 harvested results
  scaffolded; the declines are the already-published supplier rows and reasoned
  out-of-scope rows, to be confirmed by the Step-5 reviewer).
- `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-em-sr-40-2026-10-08-batch-13.coverage.json`:
  10/10 sources fetch-verified; 10/10 resolved, 0 documented drops.
- `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`: exit 0,
  473 items across 80 pages, maximum level 24; this pair records levels
  0,0,0,0,0,0,0,0,1,1,1,1,2,3 as computed.
- `node tools/physics-support/depcheck.mjs --json` (repo-wide): 0 errors and 0 warnings
  referencing any of the 14 item ids, either page id, or the pair ids.
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json`: exit 0.
- `node tools/physics-support/physics-check.mjs --plan research/plan-spec.json`: a moving
  31-32 errors in the whole run corpus at the two runs performed, none in this
  pair (an id scan over the error lines returns 0 matches for all 14 items and
  both pages); the errors belong to other pairs' unfinished items, e.g.
  `thm-em-elliptic-boundary-existence`,
  `thm-sr-tensor-and-current-transformation`.
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-13.proof-contracts.json --strict`:
  exit 0, 0 errors, 2 advisory `shotgun-bracket` warnings (step 3.1 of
  `lem-em-continuous-localization` and step 4.1 of
  `lem-em-joint-smooth-potentials` cite 6/8 and 5/7 declared facts; each cited
  fact is genuinely used in that step, so the warning is recorded rather than
  repaired).
- `node tools/physics-support/proof-layout.mjs` on the 14 explicit item paths: 14 items,
  60 steps, 0 defects.

### Cross-batch consumer edges (supplier side)

The refreshed unified ledger (snapshot inspected at this handoff; the serial
reconciler regenerates it as consumer owners update their own inputs, so the
counts move) lists 75 declared edges with a batch-13 supplier (71 item, 4 page)
from 22 consumer batches, carrying 69 review rows. The most-consumed suppliers
are `lem-em-parameter-integrals` (14), `lem-em-period-average` (12),
`def-em-surface-distribution` (7), `def-em-complex-plane-wave`,
`lem-em-point-current-continuity` and `lem-em-joint-smooth-potentials` (6
each), `lem-em-interface-derivatives` and `lem-em-coulomb-dipole-remainder` (5
each), `lem-em-continuous-localization` and `lem-em-quadratic-stress-identity`
(3 each), `lem-em-interface-wave-linear-system` (2), `def-em-moving-patch` and
`lem-em-moving-flux` (1 each). At this snapshot 25 consumer rows are marked
`verified` against the current authored carriers (for example the batch-24 rows
for `def-em-surface-distribution`, `lem-em-point-current-continuity` and the
page row; the batch-19 rows for `lem-em-period-average` and
`lem-em-parameter-integrals`; the batch-17, 21 and 22 rows for
`lem-em-parameter-integrals` and `lem-em-point-current-continuity`; the
batch-29 rows for `lem-em-interface-derivatives` and
`lem-em-parameter-integrals`), 44 rows are consumer-owned `open` notes, most of
them written while these suppliers were still scaffolds ("Supplier remains
scaffolded, not an authored-proof certificate") or recording the required claim
before authoring, and 6 edges carry no review row yet at this snapshot.
One batch-23 page row states that the batch-13 page carrier did not exist at
the time of writing; both page carriers now exist (order 305/306, listing 13
items and the B example). No consumer row records an interface mismatch with
the current statements; consumer owners must refresh their own rows, and this
report routes that as an open obligation rather than editing another batch's
input file. The batch-13 consumer input
`research/physics-em-sr-40-2026-10-08-batch-13.cross-batch-dependencies.json`
remains `[]`, which is correct: all 14 items consume only published imported
mathematics and same-page items.

### Published concerns (suspicion level, evidence, strategy)

- Three published items state the Axiom of Countable Choice in their defining
  text but list `def-countable-choice` in no `deps` entry:
  `thm-divergence-theorem-for-bounded-piecewise-c-one-domains` (2 occurrences of
  `\mathrm{AC}_\omega`), `def-surface-integral-on-a-compact-c-one-hypersurface`
  (1) and `def-bounded-piecewise-c-one-euclidean-domain` (1); each reaches
  `def-countable-choice` transitively through
  `def-bounded-c-one-domain-boundary-charts-and-outward-normal`. Evidence:
  frontmatter `deps` lists read directly; `def-countable-choice` occurs 0 times
  in each file elsewhere. Confidence: high that this is metadata hygiene only,
  not a mathematical gap (the assumption is explicit in the text and
  transitively reachable, and this pair's affected items carry both the
  assumption and the dep). Repair strategy: add `def-countable-choice` to those
  three published items' `deps` in an authorized published-repair pass; the
  items are read-only for this pair, and shared-ledger updates are left to the
  serial reconciler.

### Decisions recorded

`step3-decisions.mjs record-item`, confidence 1, examined dependency IDs = the
current `deps` list of each item:

- `accept` (11): `def-em-complex-plane-wave`, `def-em-moving-patch`,
  `def-em-surface-distribution`, `lem-em-continuous-localization`,
  `lem-em-coulomb-dipole-remainder`, `lem-em-parameter-integrals`,
  `lem-em-point-current-continuity`, `lem-em-quadratic-stress-identity`,
  `lem-em-interface-derivatives`, `lem-em-joint-smooth-potentials`,
  `lem-em-moving-flux`.
- `repaired` (3): `lem-em-period-average`,
  `lem-em-interface-wave-linear-system`,
  `ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries` (the
  bookkeeping repairs above; claims unchanged).

### Handoff

- Completed IDs: all 14 owned items and both pages listed at the top of this
  report; proof contracts for the batch written; manifest, coverage and
  cross-batch input reconciled to the authored carriers.
- Added suppliers: none; no new prerequisite items were needed.
- Pre-splice plan check: `validate-plan research/plan-spec.json` exits 0; the
  plan's page metadata for this pair (orders 305/306, category
  `classical-electromagnetism-mathematics`, library `mathematics`, companion
  pointers, `requires` lists) matches the current batch-13 manifest, so no
  Step-4 splice mismatch is reported for this pair.
- Checks actually run: precheck (14 explicit paths), rendercheck (16 files),
  manifest-deps, content-policy (item mode), coverage-checklist,
  source-fetch-check, item-dependency-levels, depcheck (repo-wide, scoped
  reading), validate-plan, physics-check, proof-contract `--strict`,
  proof-layout (14 explicit paths) - all as recorded above.
- Open obligations: (i) the 44 open consumer-owned ledger rows (and the 6
  edges without review rows at this snapshot) awaiting the consumer owners'
  re-verification against the authored carriers (including the batch-23 page
  row whose stated remedy - the missing page carrier - now exists);
  (ii) the advisory `coverage-low-yield` decline confirmation at Step 5;
  (iii) the three published AC_ω metadata-hygiene items; (iv) the two advisory
  `shotgun-bracket` warnings; (v) ordinary independent mathematical review and
  judgment in Steps 5-8 (this pass is authoring-side verification, not an
  independent audit).
