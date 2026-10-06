# Step 3b — pair `wave-energy-finite-propagation-and-huygens`

Run `frontier-39-analysis-30`; role `alpha-high`; batches 2, 3 (dispatch says
`Batches: 3` and the pair's rows live in batch 3; batch 2 holds the prerequisite
pair `wave-equation-representation-formulas`, which is being authored in the
same wave). A page `wave-energy-finite-propagation-and-huygens` (order 458.017,
19 items), B page `wave-energy-finite-propagation-and-huygens-examples`
(order 458.018, 9 items). Scope decision: owner `proceed`
(`research/frontier-39-analysis-30-step3a-owner-wave-energy-finite-propagation-and-huygens.json`),
recorded after the owner repair that added the homogeneous Neumann case to
`thm-conservation-of-total-wave-energy`, required $F'\not\equiv0$ inside $(0,1)$
for the open-boundary witness, and specified compactly supported odd data for
the reflection example.

This file is the running checkpoint: per item the claim, conventions, source
locators, dependencies, decision, checks and open gaps, then dispatch-level
results. It is resumed by rereading this file, the current item, its dependency
statements and the source passages.

## Owned IDs (dispatch order, dependency level first)

A page, 19 items: `def-forward-and-backward-wave-cones-domain-of-dependence-and-influence`,
`def-wave-energy-and-energy-flux`,
`lem-integral-of-a-divergence-of-an-l-one-c-one-field-vanishes`,
`lem-truncated-wave-cone-geometry-and-frustum-presentation`,
`lem-vanishing-gradient-and-time-derivative-imply-constancy-on-convex-sets`,
`lem-local-wave-energy-conservation-law`,
`lem-energy-identity-on-a-truncated-wave-cone`,
`thm-conservation-of-total-wave-energy`,
`thm-energy-continuous-dependence-for-the-forced-wave-equation`,
`cor-energy-uniqueness-for-the-wave-cauchy-problem`,
`thm-energy-uniqueness-for-homogeneous-dirichlet-waves-on-bounded-domains`,
`thm-finite-propagation-speed-for-the-wave-equation`,
`cor-compact-support-expands-at-speed-at-most-c`,
`cor-time-reversed-energy-uniqueness-from-final-data`,
`def-strong-huygens-principle`,
`thm-domain-of-dependence-and-local-uniqueness`,
`thm-strong-huygens-principle-in-odd-spatial-dimensions`,
`thm-wave-tails-in-one-and-even-spatial-dimensions`,
`rem-finite-propagation-is-not-huygens-principle`.

B page, 9 items: `ex-conserved-energy-of-a-travelling-wave-packet`,
`ex-plane-wave-shows-the-characteristic-speed-is-sharp`,
`cex-global-energy-identity-needs-integrability-or-decay`,
`cex-wave-energy-need-not-be-conserved-through-an-open-boundary`,
`ex-reflection-at-a-dirichlet-endpoint`,
`ex-zero-wave-energy-means-spatial-constant-before-data-fix-the-constant`,
`ex-three-dimensional-spherical-pulse-leaves-a-quiet-tail`,
`ex-two-dimensional-pulse-has-a-tail-inside-the-cone`,
`cex-finite-speed-does-not-imply-strong-huygens`.

Both pages must be authored (`library/pde/<page>.md`) and the batch-3 manifest
rows kept consistent; the batch-3 coverage and contracts files must be
maintained without disturbing sibling rows (batch 3 is pair-exclusive; batch 2
belongs to the sibling dispatch).

## Open obligations at entry

1. **Unfinished in-run suppliers (batch 2, pair `wave-equation-representation-formulas`).**
   At entry none of the batch-2 item files exists on disk. Every consumer below
   is authored anyway and its consuming step named in the item log; its item
   decision stays `escalate` until the supplier file is on disk and the exact
   use is reconciled:
   - `def-wave-equation-cauchy-data-and-wave-speed` (consumed by
     `lem-local-wave-energy-conservation-law` step 1.1,
     `thm-conservation-of-total-wave-energy` Given,
     `thm-energy-continuous-dependence-for-the-forced-wave-equation` Given,
     `thm-finite-propagation-speed-for-the-wave-equation` Given,
     `thm-domain-of-dependence-and-local-uniqueness` Given,
     `cex-wave-energy-need-not-be-conserved-through-an-open-boundary` and
     `cex-global-energy-identity-needs-integrability-or-decay` Given);
   - `thm-dalembert-formula` (consumed by `cex-finite-speed-does-not-imply-strong-huygens`,
     `ex-plane-wave-shows-the-characteristic-speed-is-sharp`);
   - `thm-kirchhoff-formula-for-the-three-dimensional-wave-equation` (consumed by
     `ex-three-dimensional-spherical-pulse-leaves-a-quiet-tail`);
   - `thm-poisson-formula-for-the-two-dimensional-wave-equation` (consumed by
     `ex-two-dimensional-pulse-has-a-tail-inside-the-cone`);
   - `thm-odd-dimensional-wave-formula-by-spherical-means` (consumed by
     `def-strong-huygens-principle`, `thm-strong-huygens-principle-in-odd-spatial-dimensions`);
   - `thm-even-dimensional-wave-formula-by-descent` (consumed by
     `thm-wave-tails-in-one-and-even-spatial-dimensions`);
   - `cor-time-reversal-invariance-of-the-homogeneous-wave-equation` (consumed by
     `cor-time-reversed-energy-uniqueness-from-final-data`);
   - `def-spherical-mean-of-space-dependent-data` and
     `lem-spherical-means-of-smooth-data-are-smooth` (consumed by
     `thm-strong-huygens-principle-in-odd-spatial-dimensions`).
2. **Batch-3 local prerequisites.** The three local lemmas at level 0 must be
   authored before their consumers; no new item may be added beyond the frozen
   batch-3 inventory.
3. **Pre-splice plan mismatch.** `research/plan-spec.json` carries empty item
   arrays for both pages; Step 3b must not edit the plan (Step 4 owns the
   splice) and reports the mismatch for Step 4.
4. **Contract file.** `research/frontier-39-analysis-30-batch-3.proof-contracts.json`
   does not exist yet; it is created merge-safely (sibling batch rows preserved
   if present) with citations, step derivations and boundary worksheets.
5. **Published concern (recorded, not edited).** The batch-3 scaffold notes
   recorded the batch-2 `thm-support-dichotomy-for-free-wave-fundamental-solutions`
   defect; the owner repaired it (clause (i) now the shell/neighbourhood form)
   and no item of this pair consumes that item. No other published concern is
   known at entry.

All five obligations above were carried into authoring and are resolved or
explicitly handed over in **Dispatch-level checks and handoff**: every batch-2
supplier is on disk and reconciled (no decision left escalated), the local
prerequisites were authored in dependency order, the contract file exists and
passes its strict gates, the plan splice is a Step 4 item, and no published
content outside this pair was edited.

## Item log

Order: dispatch order. Checks per item: explicit `precheck.mts` and `proof-layout.mjs`
(and `rendercheck.mjs` at the batch sweep); all items are `status: draft`,
`origin: pipeline`, `pipeline_run: frontier-39-analysis-30`.

1. **`def-forward-and-backward-wave-cones-domain-of-dependence-and-influence`** (A, level 0).
   Definition of the closed backward/forward cones $K^\pm$, base ball, lateral
   boundary, domain of influence $S+\overline B_{ct}(0)$, and "domain of
   dependence" formalised by local uniqueness (same-page link, not a `dep`).
   Deps: `def-euclidean-inner-product`, `def-interval` (published). Conventions:
   slope $c$; balls defined inline from $\lVert\cdot\rVert_2$. Sources: Teschl
   §7.3 (7.29) p. 177; Ivrii §9.2.3 p. 292; Speck §3 Defs 3.0.3–3.0.6. Written;
   precheck n/a (no phase body); rendercheck OK. Decision: accept.
2. **`def-wave-energy-and-energy-flux`** (A, level 0). $e_{\rm kin}=\tfrac12u_t^2$,
   $e_{\rm pot}=\tfrac{c^2}2|Du|^2$, $e=e_{\rm kin}+e_{\rm pot}$,
   $q=-c^2u_tDu$, $E_\Omega(t)=\int_\Omega e$; sign convention tied to
   $\partial_te+\operatorname{div}q=u_t\Box_cu$; $c^2$ weight retained.
   Deps: `def-ck-and-multi-index-notation-in-several-variables`,
   `def-jacobian-matrix-and-gradient`,
   `def-divergence-and-curl-of-a-c1-vector-field`,
   `def-euclidean-inner-product`, `def-nonnegative-lebesgue-integral` (published;
   the last two per the manifest's Lebesgue convention). Sources: Teschl (7.27)
   p. 176; Ivrii (2.7.3)–(2.7.5) pp. 87–88; Hunter §7.1.1 p. 212. Written;
   precheck n/a; rendercheck OK. Decision: accept.
3. **`lem-integral-of-a-divergence-of-an-l-one-c-one-field-vanishes`** (A, level 0).
   Under $\mathrm{AC}_\omega$, if $F\in C^1(\mathbb R^n;\mathbb R^n)\cap L^1(\lambda_n)$
   and $\operatorname{div}F\in L^1(\lambda_n)$ then
   $\int_{\mathbb R^n}\operatorname{div}F\,d\lambda_n=0$. Proof: one smooth bump
   $\chi$ scaled to $\chi_R$, $\int\operatorname{div}(\chi_RF)=0$ (divergence
   theorem on $B_{3R}$ for $n\ge2$; for $n=1$ the FTC + Darboux/Riemann/Lebesgue
   bridges, since the published divergence theorem is stated for $n\ge2$ — a
   scaffold-strategy gap repaired locally), then product rule, $L^1$ linearity
   and dominated convergence. Both hypotheses used; the $F\in L^1$ hypothesis
   is shown necessary by the explicit witness $F(x)=\int_{-\infty}^xh$ with
   $\int h=1$. Deps extended beyond the manifest: added
   `lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules`,
   `thm-ftc-second-part`, `thm-darboux-equals-riemann`,
   `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`,
   `cor-additivity-of-the-nonnegative-lebesgue-integral`,
   `def-l-one-of-a-measure`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`.
   Sources: Hunter Thm 1.46 (cutoff); Ivrii (9.2.2)–(9.2.3). 3 steps; precheck
   PASS; proof-layout 0 defects. Decision: repaired (route gap closed with the
   local n = 1 branch; the claim is unchanged; manifest dep row updated with the
   added deps).
4. **`lem-truncated-wave-cone-geometry-and-frustum-presentation`** (A, level 0).
   $K(t_1,t_2)=\{t_1<t<t_2,\ |x-x_0|<c(t_0-t)\}$ is nonempty open bounded convex;
   has the finite piecewise $C^1$ presentation with bottom/top disks and lateral
   frustum $L$, edge set the two rim circles; outward normals $(0,-1)$, $(0,1)$,
   $\nu_{\rm lat}=(\widehat{x-x_0},c)/\sqrt{1+c^2}$; $K^-$ compact convex, and
   $K(t_1,t_2)=\operatorname{int}(K^-)\cap\{t_1<t<t_2\}$. Proof: convexity of
   $\varphi=|x-x_0|+ct$ from the norm axioms; boundary decomposition with both
   inclusions; face-by-face verification of the piecewise-$C^1$ definition
   (compact Borel subsets of graph patches, relative boundaries and overlaps in
   $E$, surface-null rims via graph density $\sqrt{1+1/c^2}$ on $L$ and
   sphere-nullity, local graph property, normals from $\nabla\varphi$); interior
   characterisation of $K^-$ by the convexity slack argument. Deps extended:
   added `thm-cauchy-schwarz-and-the-euclidean-norm`,
   `thm-real-power-continuity-and-derivatives`, `thm-chain-rule-for-total-derivatives`,
   `thm-ck-euclidean-maps-closed-under-algebra-and-composition`,
   `lem-unit-sphere-is-lebesgue-null`,
   `lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null`. Sources:
   Hunter §1.12; Ivrii §9.2.3 p. 292; Speck Thm 2.1. 6 steps after adopting the
   precheck's canonical layer numbering (the numbering change is mechanical);
   precheck PASS; proof-layout 0 defects. Decision: accept (manifest dep row to
   be updated).

5. **`lem-vanishing-gradient-and-time-derivative-imply-constancy-on-convex-sets`** (A, level 0).
   Open convex $U\subseteq\mathbb R^m$, $w\in C^1(U)$ with $Dw=0$ (equivalently
   all $\partial_iw=0$); then $w$ is constant; space-time form with
   $\partial_tu=0$, $D_xu=0$. Proof: the equivalence of the total and partial
   forms through the Jacobian, then the published
   `cor-zero-total-derivative-on-a-convex-open-set-is-constant`. Deps: as
   manifest plus `def-jacobian-matrix-and-gradient`,
   `thm-total-derivative-computes-directional-and-partial-derivatives`,
   `cor-zero-total-derivative-on-a-convex-open-set-is-constant`; the manifest's
   `thm-chain-rule-for-total-derivatives`/`cor-zero-derivative-implies-constant`
   are not needed (the segment argument is already published as the cited
   corollary). 3 steps; precheck PASS; layout 0 defects. Decision: accept
   (manifest deps updated).
6. **`lem-local-wave-energy-conservation-law`** (A, level 1).
   $\partial_te+\operatorname{div}q=fu_t$ for $f=\Box_cu$; at $c=1$ the form
   $\partial_t[\tfrac12(u_t^2+|Du|^2)]=\operatorname{div}(u_tDu)$. Proof:
   $\partial_te=u_tu_{tt}+c^2\langle Du,Du_t\rangle$ (Clairaut for
   $\partial_tDu=D\partial_tu$), $\operatorname{div}q=-c^2\langle Du_t,Du\rangle-c^2u_t\Delta u$
   (product rule), then sum. Deps extended: `thm-clairaut-schwarz-mixed-partials`,
   `thm-algebra-of-derivatives`, `def-euclidean-inner-product`. 3 steps;
   precheck PASS; layout 0 defects. Decision: accept (manifest deps updated).
7. **`ex-conserved-energy-of-a-travelling-wave-packet`** (B, level 1). **Scaffold
   defect repaired.** The scaffold claimed for $n\ge1$ that
   $F(\omega\cdot x-ct)$ has finite total energy $c^2\int F'^2$; for $n\ge2$ the
   density is constant along the $(n-1)$ transverse directions, so the integral
   is $+\infty$ whenever $F'\not\equiv0$ (exact evidence: the transverse
   $(n-1)$-fold integral of a positive constant). The item is restated for the
   one-dimensional packet $u=F(x-ct)$ — which is the design's "compactly
   supported travelling profile" and Ivrii's 1D running wave — with the $n\ge2$
   divergence recorded as a caution and justified locally. Proof: chain rule for
   the equal split, translation invariance via
   `lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands`,
   finiteness by monotonicity. Deps changed accordingly (Fubini, orthonormal
   basis and the linear change-of-variables theorem are no longer used; added the
    change-of-variables lemma and `prop-order-and-scalar-rules-for-the-nonnegative-integral`).
   3 steps; precheck PASS; rendercheck OK; layout 0 defects. Decision: repaired
   (statement narrowed to the true one-dimensional claim because the scaffold's
   $n\ge1$ finite-energy assertion is false for $n\ge2$; the caution records the
   divergence, and the manifest statement needs the Step 4 splice).
8. **`ex-plane-wave-shows-the-characteristic-speed-is-sharp`** (B, level 1).
   $u=F(\omega\cdot x-ct)$ solves $\Box_cu=0$ and
   $\operatorname{supp}u(\cdot,t)=\{x:\omega\cdot x-ct\in\operatorname{supp}F\}
   =\operatorname{supp}u(\cdot,0)+ct\omega$; front and back move at speed exactly
   $c$ (the slab is unbounded for $n\ge2$, which is stated). Deps extended with
   `def-directional-and-partial-derivatives`, `def-laplacian-of-a-c2-function`,
   `def-euclidean-inner-product`, `def-jacobian-matrix-and-gradient`. 3 steps;
   precheck PASS; rendercheck OK; layout 0 defects. Decision: accept.
9. **`lem-energy-identity-on-a-truncated-wave-cone`** (A, level 2). **Scaffold
   normalisation defect repaired.** The scaffold's identity with
   $\ell=(ce-c^2u_t\partial_ru)/\sqrt{1+c^2}$ is off by the lateral graph factor
   $\sqrt{1+c^2}$; the item uses
   $\ell=ce-c^2u_t\partial_ru=q\cdot\widehat{x-x_0}+ce
   =\tfrac c2[(u_t-c\partial_ru)^2+c^2|D_{\rm tan}u|^2]\ge0$, for which the
   displayed identity is exactly the space-time divergence theorem on the
   frustum (the lateral area element $\sqrt{1+c^2}c(t_0-t)^{n-1}d\omega\,dt$
   cancels the normal's $1/\sqrt{1+c^2}$). Proof: $V=(q,e)$,
   $\operatorname{div}_{(x,t)}V=fu_t$; caps $-E(t_1)+E(t_2)$; lateral completed
   square. Deps extended with
   `lem-surface-integral-is-independent-of-c-one-boundary-charts` and
   `def-euclidean-inner-product`. 4 steps; precheck PASS; layout 0 defects.
   Decision: repaired (normalisation; reported for Step 4).
10. **`thm-conservation-of-total-wave-energy`** (A, level 2). Three admissible
    settings: (a) fixed compact spatial support, (b) integrable flux, (c)
    bounded domain with homogeneous **Dirichlet or Neumann** data ($n\ge2$;
    finite unions of intervals for $n=1$) — realising the owner's Step 3a
    repair. Proof: localise to a compact time interval; (a) differentiate on a
    fixed large ball, boundary flux zero; (b) stated energy identity plus the
    divergence lemma; (c) divergence theorem with
    $q\cdot\nu=-c^2u_t\partial_\nu u=0$ (Dirichlet trace derivative, Neumann
    hypothesis), and for $n=1$ the FTC per interval with endpoint fluxes. Deps
    extended with `thm-ftc-second-part`, `thm-darboux-equals-riemann`,
    `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`.
    6 steps; precheck PASS; layout 0 defects. Decision: accept (manifest deps
    updated).
11. **`thm-energy-continuous-dependence-for-the-forced-wave-equation`** (A,
    level 2). $\sqrt{2E(t)}\le\sqrt{2E(0)}+\int_0^t\|f(s)\|_2ds$ and the
    $E^{1/2}$ form, under $E'=(f,u_t)$ and continuity of $t\mapsto\|f(t)\|_2$.
    **Hypothesis strengthened from local integrability to continuity**, with
    reason: with only $L^1_{\rm loc}$ coefficients the regularised-division
    argument needs the Henstock–Kurzweil/Lebesgue comparison, which the library
    explicitly records as *not proved here*
    (`rem-henstock-kurzweil-and-lebesgue-integral-comparison-on-a-compact-interval`:
    "Not proved here. The cited source supplies the comparison."); continuity
    keeps every step inside proved items and is supplied by the classical
    setting. Proof: $\varphi_\varepsilon=\sqrt{2E+\varepsilon^2}$,
    $\varphi_\varepsilon'\le\|f\|_2$ by Cauchy–Schwarz, monotonicity of
    $\varphi_\varepsilon-\int\|f\|_2$, let $\varepsilon\downarrow0$. Deps
    extended with `def-wave-energy-and-energy-flux`,
    `thm-monotonicity-from-the-derivative`,
    `thm-chain-rule-for-total-derivatives`,
    `thm-real-power-continuity-and-derivatives`, `thm-ftc-first-part`,
    `thm-continuous-implies-integrable`, `thm-darboux-equals-riemann`,
    `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`.
    4 steps; precheck PASS; layout 0 defects. Decision: repaired (hypothesis
    strengthened to continuity so every step stays inside proved items, the
    HK/Lebesgue comparison being recorded as not proved in the library; the
    manifest statement needs the Step 4 splice).
12. **`cex-global-energy-identity-needs-integrability-or-decay`** (B, level 2).
    **Scope narrowed to a choice-free witness**: $n\ge2$, $\omega=e_0$,
    $F\in C^2$ with $F'\not\equiv0$; then $e=c^2F'(x_0-ct)^2$ and
    $\int_{\mathbb R^n}e=+\infty$ for every $t$ (Tonelli plus a positive slab),
    while the local law holds pointwise; the $n=1$, $F=\cos$ witness is also
    recorded. The general unit $\omega$ would need the $\mathrm{AC}_\omega$-based
    orthogonal change of variables (the library's
    `cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps` assumes
    $\mathrm{AC}_\omega$); the witness form needs no choice. Deps changed to the
    choice-free set (`thm-tonelli-theorem-for-sigma-finite-product-spaces`,
    `prop-order-and-scalar-rules-for-the-nonnegative-integral`,
    `thm-monotone-convergence-for-the-integral`,
    `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, chain rule, local
    law, energy def). 4 steps; precheck PASS; layout 0 defects; strict contract
    clean after the $d\lambda_n$ measure citation was anchored in step 3.1.
    Decision: repaired (choice-free witness $\omega=e_0$ replacing the general
    $\omega$ form that would need the $\mathrm{AC}_\omega$-based orthogonal
    change of variables; the refuted claim is unchanged and the manifest witness
    row needs the Step 4 splice).
13. **`cex-wave-energy-need-not-be-conserved-through-an-open-boundary`** (B,
    level 2). Right-moving compactly supported packet in $\Omega=(0,1)$:
    $E_\Omega(0)>0$ (owner repair: $F'$ nonzero somewhere in $(0,1)$),
    $E_\Omega(t)=0$ for large $t$, and $E_\Omega'=q(0,t)-q(1,t)$ via
    differentiation under the integral and the FTC; plus the half-line
    Dirichlet/Neumann comparison with $v_x=v_t=0$ beyond $R_J$. Deps extended
    with chain rule, the differentiation theorem, the FTC and the
    Darboux/Riemann/Lebesgue bridges, support, and constancy. 5 steps after
    adopting the precheck's canonical layer numbering; precheck PASS; layout 0
    defects. Decision: accept (manifest deps updated).

14. **`cor-energy-uniqueness-for-the-wave-cauchy-problem`** (A, level 3). In the
    class where the sharp conserved form $E_{\mathbb R^n}(t)=E_{\mathbb R^n}(0)$
    holds with finite initial energy: vanishing data force $u_t=Du=0$, hence
    $u(\cdot,t)$ spatially constant, fixed by $u_0$ (so clause (i) gives
    $u\equiv0$); more generally $u_1=0$, $Du_0=0$ give $u(\cdot,t)\equiv u_0$;
    equal-data uniqueness follows by linearity. Deps extended with
    `def-convex-subset-of-euclidean-space`,
    `thm-nonnegative-integral-zero-iff-zero-almost-everywhere` and
    `thm-algebra-of-derivatives`. Sources: Teschl Cor 7.13 p. 178; Ivrii
    Thms 9.2.2–9.2.3 pp. 290–292; Hunter p. 212. 4 steps; precheck PASS;
    layout 0 defects; strict contract clean. Decision: accept.
15. **`thm-energy-uniqueness-for-homogeneous-dirichlet-waves-on-bounded-domains`**
    (A, level 3). Bounded connected $C^1$ domain, homogeneous Dirichlet data,
    $u\in C^2(\overline U\times[0,T])$ with zero initial data: then $u\equiv0$;
    equal-data uniqueness by linearity. Proof: case (c) of the conservation
    theorem gives zero boundary flux and conserved energy; $E(0)=0$ forces
    $u_t=Du=0$; constancy on the polygonally connected domain plus the zero
    trace kill the residual constant. Deps extended with
    `cor-components-of-open-subsets-of-rn-are-polygonally-connected`,
    `def-polygonal-path-and-polygonal-connectedness`,
    `cor-zero-derivative-implies-constant`, chain rule and algebra of
    derivatives. Sources: Teschl Thm 7.11 p. 177; Ivrii Thm 9.2.4 p. 292.
    4 steps; precheck PASS; layout 0 defects. Decision: accept.
16. **`thm-finite-propagation-speed-for-the-wave-equation`** (A, level 3).
    $f=0$ on $K^-(x_0,t_0)$ and zero Cauchy data on the base ball give $u\equiv0$
    on the closed cone. Proof: the truncated-cone identity with $\ell\ge0$ makes
    the cone energy nonincreasing, $E(t)\downarrow0$ at the base by dominated
    convergence, the vanishing integral of the nonnegative density gives
    $u_t=Du=0$ on the open cone, and convexity constancy plus continuity give
    $u=0$ on the closed cone. Deps: `lem-energy-identity-on-a-truncated-wave-cone`,
    `lem-vanishing-gradient-and-time-derivative-imply-constancy-on-convex-sets`,
    `def-forward-and-backward-wave-cones-domain-of-dependence-and-influence`,
    `def-wave-equation-cauchy-data-and-wave-speed`,
    `def-wave-energy-and-energy-flux`, `thm-dominated-convergence`,
    `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`,
    `lem-truncated-wave-cone-geometry-and-frustum-presentation`. Sources:
    Teschl Thm 7.12 and (7.29) pp. 176–178; Ivrii Thm 9.2.3 pp. 290–292;
    Speck Thm 2.1 pp. 3–4. 4 steps; precheck PASS; layout 0 defects. Decision:
    accept.
17. **`cor-compact-support-expands-at-speed-at-most-c`** (A, level 4).
    $\operatorname{supp}u_0\cup\operatorname{supp}u_1\subseteq K$ and
    $\operatorname{supp}f\subseteq\{\operatorname{dist}(\cdot,K)\le ct\}$ give
    $\operatorname{supp}u(\cdot,t)\subseteq K+\overline B_{ct}(0)$. Proof: at a
    point outside, the base ball misses $K$ and the source vanishes on the
    backward cone (triangle inequality), so finite propagation gives $u=0$;
    $t\downarrow0$ is handled by closedness. Deps: `thm-finite-propagation-speed-...`,
    `def-support-...`, `def-forward-and-backward-wave-cones-...`,
    `def-wave-equation-cauchy-data-and-wave-speed`, `def-countable-choice`.
    Sources: Teschl pp. 177–178; Ivrii Thm 9.2.3 and its support corollary.
    2 steps; precheck PASS; layout 0 defects. Decision: accept.
18. **`cor-time-reversed-energy-uniqueness-from-final-data`** (A, level 4).
    In any class closed under differences with energy conserved in one of the
    senses (a)–(c), equal terminal displacement and velocity force $u=v$ on
    $\mathbb R^n\times[0,T]$. Proof: the reversal
    $\tilde w(x,s):=w(x,T-s)$ of the difference is a conserved homogeneous
    solution with zero initial data, and the Cauchy energy-uniqueness corollary
    gives $\tilde w\equiv0$. Deps: `cor-energy-uniqueness-...`,
    `cor-time-reversal-invariance-of-the-homogeneous-wave-equation`,
    `thm-conservation-of-total-wave-energy`, `def-wave-energy-and-energy-flux`,
    `def-countable-choice`. Sources: Teschl §7.2–7.3 pp. 170–178; Hunter p. 212.
    3 steps; precheck PASS; layout 0 defects. Decision: accept.
19. **`def-strong-huygens-principle`** (A, level 4). Admissible data are a pair
    in the regularity class of the dimension-$n$ representation formula of the
    preceding pair; the definition states the germ form (the value is a
    functional of the jet on the sphere), the strictly-inside form, the shell
    form, and the caution that bare sphere restriction fails (the 1-D box
    profile gives $u(0,1)=-1$). Deps: `def-wave-equation-cauchy-data-and-wave-speed`,
    `def-spherical-mean-of-space-dependent-data`,
    `thm-kirchhoff-formula-for-the-three-dimensional-wave-equation`,
    `def-countable-choice` plus the odd/even formula links. No numbered phases;
    rendercheck OK; statement matches the frozen manifest row. Decision: accept.
20. **`thm-domain-of-dependence-and-local-uniqueness`** (A, level 4). Equal base
    Cauchy data and equal source on $K^-(x_0,t_0)$ force $u=v$ on the cone; the
    value at the vertex depends only on the base ball data and the cone source.
    Proof: the difference is homogeneous with zero cone data; finite propagation
    gives $w=0$. Deps: `thm-finite-propagation-speed-...`,
    `def-forward-and-backward-wave-cones-...`,
    `def-wave-equation-cauchy-data-and-wave-speed`,
    `thm-algebra-of-derivatives`, `def-countable-choice`. Sources: Ivrii
    Thm 9.2.2 pp. 290–292; Teschl Thm 7.12 pp. 177–178; Speck Cor 2.0.4 and §3.
    2 steps; precheck PASS; layout 0 defects. Decision: accept.
21. **`ex-reflection-at-a-dirichlet-endpoint`** (B, level 4). Owner Step 3a
    repair realised: odd compactly supported $u_0\in C_c^2(\mathbb R)$,
    $u_1\in C_c^1(\mathbb R)$. The d'Alembert solution stays odd, so
    $u:=U|_{x>0}$ has $u(0,t)=0$; for $u_0=\phi$, $u_1=c\phi'$ the reflected
    term re-enters with reversed sign,
    $u(x,t)=\phi(x+ct)-\phi(ct-x)$ for $0<x<ct$; the half-line energy is half
    the whole-line energy and is constant by case (a). Deps:
    `thm-conservation-of-total-wave-energy`, `thm-dalembert-formula`,
    `def-wave-equation-cauchy-data-and-wave-speed`,
    `def-wave-energy-and-energy-flux`, `def-support-...`,
    `def-countable-choice`. Sources: Ivrii Ex 2.6.1(b)/(2.6.12) pp. 67–69 and
    §2.7 Problem 1; Teschl Problem 4.16 pp. 88–90. 3 steps; precheck PASS;
    layout 0 defects. Decision: accept.
22. **`ex-zero-wave-energy-means-spatial-constant-before-data-fix-the-constant`**
    (B, level 4). $E(0)=0$ with nonnegative density gives $u_1=0$, $Du_0=0$ and
    $u_0$ constant; the energy stays zero and the spatial constant is carried by
    the flow; conversely every constant displacement with zero velocity is a
    genuine zero-energy classical solution. Deps:
    `thm-conservation-of-total-wave-energy`,
    `cor-energy-uniqueness-for-the-wave-cauchy-problem`,
    `lem-vanishing-gradient-and-time-derivative-imply-constancy-on-convex-sets`,
    `def-wave-energy-and-energy-flux`,
    `def-wave-equation-cauchy-data-and-wave-speed`,
    `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`,
    `cor-zero-derivative-implies-constant`, `def-countable-choice`. Sources:
    Teschl pp. 177–178; Ivrii pp. 290–292. 3 steps; precheck PASS; layout 0
    defects. Decision: accept.
23. **`thm-strong-huygens-principle-in-odd-spatial-dimensions`** (A, level 5).
    $n=2k+1\ge3$: the value is a finite linear combination of radial
    spherical-mean derivatives on $S(x_0,t_0)$ (germ form, so data agreeing on a
    neighbourhood of the sphere agree at the vertex), and compactly supported
    data with the sphere disjoint from the support give $u=0$ (shell form).
    Proof: differentiate the odd-dimensional formula, identify the radial
    derivatives with sphere data, use the positive-distance argument, assemble
    the definitions. Deps: `thm-odd-dimensional-wave-formula-by-spherical-means`,
    `lem-spherical-means-of-smooth-data-are-smooth`,
    `def-spherical-mean-of-space-dependent-data`,
    `def-wave-equation-cauchy-data-and-wave-speed`,
    `def-strong-huygens-principle`, `def-countable-choice`. Sources: Teschl
    Thm 7.7 pp. 171–172; Ivrii remarks (c), (e) pp. 281–289; Speck Remark 1.0.1.
    4 steps; precheck PASS; layout 0 defects. Decision: accept.
24. **`thm-wave-tails-in-one-and-even-spatial-dimensions`** (A, level 6).
    Strong Huygens fails in dimension 1 and every even dimension, with
    admissible data supported in a compact subset of the open base ball (so
    vanishing near the sphere) yet a nonzero value at the vertex. (i) $n=1$:
    $u(x_0,t_0)=\frac1{2c}\int u_1\ne0$ by d'Alembert; (ii) $n=2k$: the
    descended kernel has $K(0,t_0)\ne0$, and a small bump inside the ball gives a
    nonzero centre value while the zero data give zero. Deps:
    `thm-even-dimensional-wave-formula-by-descent`, `thm-dalembert-formula`,
    `thm-poisson-formula-for-the-two-dimensional-wave-equation`,
    `def-spherical-mean-of-space-dependent-data`, `def-strong-huygens-principle`,
    `def-wave-equation-cauchy-data-and-wave-speed`, `def-countable-choice` plus
    differentiation/linearity/algebra items. Sources: Teschl pp. 171–172 and
    §4.4; Ivrii remarks (c), (e) pp. 281–289. 4 steps; precheck PASS; layout 0
    defects. Decision: accept.
25. **`ex-three-dimensional-spherical-pulse-leaves-a-quiet-tail`** (B, level 6).
    Data supported in $\overline B_r(x_0)$: outside the outer sphere
    $|x-x_0|>ct+r$ and inside the inner sphere $|x-x_0|<ct-r$ the support ball is
    disjoint from the Kirchhoff sphere with positive distance, so $u(x,t)=0$;
    the support is contained in the closed shell. Deps:
    `thm-strong-huygens-principle-in-odd-spatial-dimensions`,
    `thm-kirchhoff-formula-for-the-three-dimensional-wave-equation`,
    `def-support-...`, `def-strong-huygens-principle`, `def-countable-choice`.
    Sources: Teschl Thm 7.2 and Problem 7.3 pp. 167–172; Speck Thm 1.1 and
    Remark 1.0.1. 2 steps; precheck PASS; layout 0 defects. Decision: accept.
26. **`rem-finite-propagation-is-not-huygens-principle`** (A, level 7). The
    remark separates the support bound of finite propagation from the
    sphere-carried value of strong Huygens, using the odd-dimensional theorem
    alongside the 1-D/2-D tail witnesses; the two properties are logically
    independent. No numbered phases; rendercheck OK. Deps:
    `cor-compact-support-expands-at-speed-at-most-c`,
    `thm-strong-huygens-principle-in-odd-spatial-dimensions`,
    `thm-wave-tails-in-one-and-even-spatial-dimensions`,
    `def-strong-huygens-principle`, `def-countable-choice`. Sources: Teschl
    pp. 171–172 and 176–178; Speck Remark 1.0.1. Decision: accept.
27. **`ex-two-dimensional-pulse-has-a-tail-inside-the-cone`** (B, level 7).
    For a nonnegative nonzero bump $u_1$ supported in $B_r(x_0)$ and every
    $t>r/c$, Poisson's formula at the centre gives
    $u(x_0,t)=\frac1{2\pi c}\int_{B_{ct}(x_0)}u_1(y)(c^2t^2-|y-x_0|^2)^{-1/2}dy>0$;
    the centre keeps seeing the pulse after the front has passed, and the tail
    stays inside the cone. Deps: `thm-wave-tails-in-one-and-even-spatial-dimensions`,
    `thm-poisson-formula-for-the-two-dimensional-wave-equation`,
    `thm-linearity-of-the-lebesgue-integral-on-l-one`, `def-support-...`,
    `def-countable-choice`. Sources: Teschl pp. 171–172; Hunter §7.1; Ivrii §9.1
    pp. 281–289. 3 steps; precheck PASS; layout 0 defects. Decision: accept.
28. **`cex-finite-speed-does-not-imply-strong-huygens`** (B, level 8). Two
    witness families separate finite propagation from strong Huygens: $n=1$ with
    $u_1$ supported strictly inside the base interval and $\int u_1\ne0$, and
    $n=2$ with a nonnegative nonzero bump strictly inside the base disk. Both
    have compactly supported data vanishing near $S(x_0,t_0)$, both give
    $u(x_0,t_0)\ne0$, and both obey the finite-speed bound. Deps:
    `cor-compact-support-expands-at-speed-at-most-c`,
    `thm-wave-tails-in-one-and-even-spatial-dimensions`,
    `ex-two-dimensional-pulse-has-a-tail-inside-the-cone`,
    `def-strong-huygens-principle`, `def-support-...`,
    `rem-finite-propagation-is-not-huygens-principle`, `def-countable-choice`.
    Sources: Teschl pp. 171–172; Speck Remark 1.0.1. 3 steps; precheck PASS;
    layout 0 defects. Decision: accept.

## Dispatch-level checks and handoff

### Checks actually run (results current as of this handoff)

| Gate | Scope | Result |
|---|---|---|
| `precheck.mts` (explicit paths) | 28 owned item files | 24 checked, 0 failing (`def-*` and the remark carry no phase body) |
| `proof-layout.mjs` (single batched command, all 28 paths) | 28 items | 86 steps, 0 defects |
| `rendercheck.mjs` | 28 items + both pages | 30 files OK (no wikilink in math, no multiline display, all spans parse) |
| `proof-contract.mjs --strict` | batch-3 contract | 0 errors, 0 warnings, 24/24 items |
| `boundary-audit.mjs --fail-on-contradicted --fail-on-template` | batch-3 contract | no contradicted dispositions, no template reuse (192 rows) |
| `citation-fidelity.mjs --fail-on-missing-quote` | batch-3 contract | 136 citations, every quote found, no widening candidates |
| `finite-smoke.mjs` | batch-3 contract | 0 errors |
| `manifest-deps.mjs` | batch-3 manifest | 28 items, 0 errors |
| `content-policy.mjs` | batch-3 manifest | 28 scoped items, 0 errors, 0 warnings |
| `coverage-checklist.mjs` | batch-3 coverage | 2 pages, 48 harvested results, 0 errors, 0 warnings |
| `item-dependency-levels.mjs check --run` | whole run | 2 errors at final re-run, both in batches 16/17 (not this pair; an earlier batch-7 mismatch was fixed by its owner during the session); no batch-3 item named; batch-3 levels recomputed with 0 mismatches |
| `validate-plan.mjs research/plan-spec.json` | plan | exit 0, acyclic and consistent over 1420 pages with item lists; NOTEs: 257 pages (including 458.017/458.018) still carry no item list — pre-splice mismatch for Step 4 |
| `source-fetch-check.mjs --coverage …batch-3.coverage.json` | batch-3 sources | 7/7 fetch-verified, 7/7 resolved |
| `frontier-dependency-ledger.mjs refresh --run` | whole run | 500 edges, 0 orphaned, every batch reviewed; batch-3 has 32 edges, all `verified` |
| `step3-decisions.mjs check --phase final` | whole run | this pair closed: 0 work rows for any of its 28 items or 2 pages; 894 rows remain open in other batches (expected mid-wave) |

### Dependency and supplier reconciliation

All nine load-bearing batch-2 supplier items are on disk, and their statements
were read against the exact uses in the consuming steps:
`def-wave-equation-cauchy-data-and-wave-speed` (operator, classical-solution and
Cauchy vocabulary), `thm-dalembert-formula` (whole-line formula for the
reflection and 1-D witnesses), `thm-kirchhoff-…` and `thm-poisson-…` (sphere and
ball formulas for the pulse examples), `thm-odd-dimensional-…` and
`thm-even-dimensional-wave-formula-by-descent` (the Huygens and tail
expansions, with the convention $W(x,t)=W^{\text{supplier}}(x,ct)$ noted),
`cor-time-reversal-invariance-…` (the reversal used), and
`def-spherical-mean-of-space-dependent-data` with
`lem-spherical-means-of-smooth-data-are-smooth` (means and their
differentiability). No item decision remains escalated on a supplier ground;
the batch-3 cross-batch input records one `verified` row per declared edge
(32 rows: 31 item + 1 page). Step 5 still re-audits these formulas
independently, and any later batch-2 edit invalidates the affected review rows,
which their owner must refresh.

### Repairs recorded in the item decisions

Five items are recorded `repaired` (the other 23 `accept`):
`lem-integral-of-a-divergence-of-an-l-one-c-one-field-vanishes` (n = 1 branch
added because the published divergence theorem is n ≥ 2; claim unchanged),
`ex-conserved-energy-of-a-travelling-wave-packet` (false n ≥ 1 finite-energy
claim narrowed to the true 1-D statement plus the n ≥ 2 caution),
`lem-energy-identity-on-a-truncated-wave-cone` (lateral normalisation
corrected to $\ell=ce-c^2u_t\partial_ru$),
`thm-energy-continuous-dependence-for-the-forced-wave-equation` (hypothesis
strengthened from $L^1_{\rm loc}$ to continuity of $t\mapsto\|f(t)\|_2$) and
`cex-global-energy-identity-needs-integrability-or-decay` (choice-free
$\omega=e_0$ witness). Of these, four change the frozen manifest **statement**
rows (`ex-conserved-energy…`, `lem-energy-identity…`,
`thm-energy-continuous-dependence…`, `cex-global-energy…`); the divergence
lemma's statement is unchanged and only its proof route and dependency row
changed. **Step 4 owns the splice** that aligns the batch-3 manifest statements
and the plan-spec item lists with the authored items.

### Added suppliers

None. No new item IDs were created; every prerequisite already existed as a
published item or as a batch-2 in-run supplier of this wave.

### Published concerns and cross-group findings

- The scaffold-notes concern about the batch-2
  `thm-support-dichotomy-for-free-wave-fundamental-solutions` was repaired by
  the owner before this pair consumed anything; no item here cites that item.
- During this session the unified ledger refresh failed with
  `Invalid escape sequence \G` on
  `items/cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting.md`
  (a `locator` containing `\Gamma` inside a double-quoted YAML scalar), which
  blocked a shared gate for every batch; the owning pair fixed it and the final
  refresh is clean. Reported here for the serial reconciler in case the same
  escape shape recurs in that pair.
- Run-wide `item-dependency-levels` still reports two level mismatches, in
  batches 16 and 17
  (`thm-higher-eigenvalues-by-orthogonality-constrained-minimisation`,
  `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`); a third,
  batch-7 mismatch observed earlier in the session was fixed by its owner. None
  is in this pair and no batch-3 item participates.

### Open obligations at handoff

1. **Step 4 splice.** `research/plan-spec.json` still carries empty item lists
   for both pages (orders 458.017/458.018), and the manifest `statement` fields
   of the four statement-changing repairs
   (`ex-conserved-energy…`, `lem-energy-identity…`,
   `thm-energy-continuous-dependence…`, `cex-global-energy…`) predate the
   authored text. The splice must import the batch-3 item lists, align the
   repaired statements, and re-run `validate-plan.mjs`.
2. **Step 5 re-audit of batch-2 suppliers.** The supplier statements were
   verified against the exact uses as of 2026-10-05; they are drafts of the
   same wave, so an independent re-read (speed conventions, sphere
   normalisations, regularity classes) is due in Steps 5–8.
3. **Owner visibility of the five repairs.** Recorded in the receipts and in
   the section above; no owner decision is held, and no escalation remains open
   from this pair.
