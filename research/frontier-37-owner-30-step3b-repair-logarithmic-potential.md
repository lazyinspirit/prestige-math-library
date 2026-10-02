# Step 3b source and proof audit — logarithmic potential, capacity, and Riesz decomposition

Run: `frontier-37-owner-30`, batch 24. This is an independent source/proof audit
for the restarted primary author. It does not certify the pair or any gate.

## Disk checkpoint and write boundary

At this audit checkpoint the pair manifest still listed 23 A items and 8 B
items (31 total); 21 item files existed, the ten items listed below were
missing, and neither library page existed. I made no item, page, manifest,
coverage, contract, notes, decision, or run-state edits. This report is the only
repository file written by this audit.

## Full-text sources independently checked

1. **E. B. Saff, _Logarithmic Potential Theory with Applications to
   Approximation Theory_, complete arXiv v1 PDF**, 36 pages,
   <https://arxiv.org/pdf/1010.3760>. Retrieved to a temporary file and
   independently SHA-256 checked as
   `cfbeaad8cf695fc1b5528fd56295d7e3053056634c6841765a434ce9b074d862`, matching
   the batch coverage record. I read the complete extracted arguments/statements
   used here: printed pp. 170–172 (Examples 1.3–1.4 and capacity conventions),
   pp. 175–178 (Proposition 1.13, Lemma 1.14, Examples 1.15–1.17 and the full
   proof of Theorem 1.18(a)–(d)), pp. 181–183 (Theorems 2.5–2.8 and the stated
   domination proof idea), and pp. 184–185 (equilibrium-potential regularity,
   infinity-pole Green function, and its asserted uniqueness conditions).
2. **T. Bloom and N. Levenberg, _Pluripotential Energy_, complete arXiv PDF**,
   26 pages, <https://arxiv.org/pdf/1007.2391>, SHA-256
   `16662416a8e0ce1e3d582895b7405aa4c36326ea5581f94676202d5d5f773fa2`.
   I read Proposition 5.9 (PDF p. 22; printed pp. 21–23). Its domination proof
   uses a Borel strict-contact measure inequality, truncation, and weak-* limits;
   it does not assert the strict-contact set is open.
3. **V. Guedj and A. Zeriahi, _The Weighted Monge-Ampère Energy of
   Quasi-Plurisubharmonic Functions_, complete arXiv PDF**, 34 pages,
   <https://arxiv.org/pdf/math/0612630>, SHA-256
   `ae4d8e07329d7191e8217e1d29709b3d226f776ef550d30986444e5eb44de323`.
   I read Proposition 1.6 and Corollary 1.7 (PDF pp. 7–8), the contact-set
   identity used by Bloom–Levenberg, and the surrounding definition of the full
   Monge–Ampère mass class. Applying it to this plane theorem still requires a
   proved sphere compactification, normalization, and finite-energy/no-polar-
   mass verification; the citation alone does not supply those reductions.

An independent retry of the Khoruzhenko PDF fetch ended in `ECONNRESET`. The
batch coverage contains an earlier successful full-text fetch/read record for
that source. I do not claim a new independent Khoruzhenko retrieval in this
report.

### Supplementary read: Saff Theorem 1.9 supplier for `cap=τ` and weak convergence

I subsequently read Saff printed pp. 172–174 (PDF pp. 8–10), including the
complete proof of Theorem 1.9. For an equilibrium law `μ_E`, integrating the
`n`-point Fekete log-energy over `μ_E^n` gives
`n(n−1)V_E/2 ≥ E_n = n(n−1)log(1/δ_n)/2`, hence
`V_E ≥ log(1/τ)` when capacity is positive. For a weak limit `ν̂` of the
empirical Fekete laws `ν_n`, Saff truncates the kernel by
`log_M(1/|z−t|)=min(log(1/|z−t|),M)`. Product weak convergence gives convergence
of each bounded continuous truncated energy. Its diagonal contribution is
`nM/n²`; the off-diagonal contribution is bounded by `2E_n/n²`. Monotone
convergence then yields
`I(ν̂)≤log(1/τ)≤V_E`, so minimality proves `cap(E)=τ(E)` and every weak
cluster law is an equilibrium law. Under positive capacity uniqueness makes
every cluster law the same `μ_E`, which gives convergence of the empirical
sequence. The zero-capacity edge follows from the same truncation inequality:
if `τ>0`, it would produce a finite-energy weak cluster, contradicting
`V_E=+∞`; thus `τ=0`. This source route uses weak compactness/cluster points
and therefore the run’s AC declaration; the library proof must expand those
uses through its actual weak-compactness supplier rather than importing
Banach–Alaoglu without an axiom audit.

## Confirmed proof/contract findings in existing suppliers

### Logarithmic domination: strict-contact set is not established open

In `items/thm-principle-of-descent-and-domination.md`, steps 2.1 and 3.1 define
`Aε={u+ε>v}`, claim it is open by writing it as a rational union containing
sets `{u>q}∩{v<q+ε}`, and then use ordinary distributional locality on `Aε`.
Here `u,v` are subharmonic and therefore upper semicontinuous. The sets
`{u>q}` need not be open, and the difference of two upper semicontinuous
functions need not be semicontinuous. Thus the claimed openness and ensuing
open-set locality do not follow. Saff Theorem 2.8 (pp. 182–183) gives only the
minimum-of-superharmonics/Riesz proof idea and refers elsewhere for details.
The verified Bloom–Levenberg/Guedj–Zeriahi route instead establishes a
strict-contact **measure inequality** on the Borel contact set.

Repair route for the primary author: keep the theorem’s statement and prove an
appropriate one-dimensional contact-set Riesz-measure inequality, or transfer
the verified compact-Riemann-surface result after explicitly checking every
hypothesis. For the latter route, use the Fubini–Study potential
`ρ(z)=½log(1+|z|²)` on `P¹`, set `φ=u−ρ` and `ψ=v−ρ`, where
`u=p_μ/M` and `v=(p_ν−c)/M`. On `C`,
`ω+ddᶜφ=μ/M` and `ω+ddᶜψ=ν/M`; at infinity the logarithmic coefficient gives
the residual atom `(1−ν(C)/M)δ∞` in `ω+ddᶜψ`, so `ψ` is
`ω`-subharmonic of total mass one. Prove finite logarithmic energy puts no mass
on polar sets so the first potential belongs to the cited full-mass class; then
apply the contact-set identity and the total-mass argument. Do not use Euclidean
openness of `{u+ε>v}` as a substitute. Also make explicit that finite energy
implies `U^μ<∞`, equivalently `p_μ>−∞`, `μ`-almost everywhere; this is needed
to deduce `μ(Aεᶜ)=0` from the almost-everywhere premise.

The Bloom–Levenberg/Guedj–Zeriahi source papers do not state a foundational
choice axiom for their results. Their contact theorem is a verified analytic
route, but this audit does not certify that importing it preserves the
batch item’s current Dependent Choice hypothesis. Either expose a proof with
the project’s required axiom accounting or make and synchronize any stronger
axiom/interface change explicitly.

The existing mass computation needs a line-by-line check after the contact
repair. In particular, retain a correct proof that the Riesz measure of
`max(u+ε,v)` has total mass one from its logarithmic coefficient at infinity,
and repair the malformed final set-mass display in step 4.1 so the measure
inequality and equal-total-mass argument are correctly parenthesized and
directionally justified.

There is a second use of the false openness in step 5.1: it concludes that the
harmonic representative `H` vanishes on a nonempty open subset. If keeping the
distributional harmonic-difference route, first justify pointwise
representative recovery: `wε` and `u+ε+H` are subharmonic and agree Lebesgue
almost everywhere, so the circle-mean/upper-semicontinuity characterization
identifies them pointwise. Finite energy gives `u` finite μ-a.e.; the premise
then gives `wε=u+ε` μ-a.e., so `H=0` at μ-a.e. points. Since `μ(C)>0`, one
such interior zero exists, and a nonnegative harmonic function with an
interior zero is identically zero. Alternatively the verified compact-sphere
domination theorem yields the desired conclusion without this reconstruction.

### Frostman proof: invalid full-mass branch and false signed-kernel monotonicity

In `items/thm-frostman-equilibrium-theorem.md`, step 4.1 sets
`m=μ(K∩B(x₀,r))`. In the branch `m=1`, it claims
`μ(K\overline B(x₀,1/j))=0` for every sufficiently large `j`; the premise only
says all mass lies in `B(x₀,r)` and does not force concentration at `x₀`.
Replace that branch by: `U^μ>V_K+η` on the ball and `μ(B)=1`, so
`I(μ)=∫U^μdμ>V_K+η`, contradicting `I(μ)=V_K`. Explicitly justify the finite
integral from `I(μ)<∞` and the bounded-below kernel before using this integral;
the infinite-potential set is `μ`-null.

The same item’s Fact [F1] also states `σ≤ρ ⇒ U^σ≤U^ρ` pointwise. This is false
for the signed logarithmic kernel: the difference is the potential of a
positive measure, which can be negative away from its support. Only the
**shifted nonnegative kernel** is monotone, yielding the required energy
monotonicity on a common compact carrier. Remove the false pointwise claim and
use the shifted kernel whenever restricting a finite-energy measure.

Finally, step 7.1 infers that `⋃ₙEₙ` is capacity-polar from the definition.
The definition only tests compact subsets and does not itself state countable
union closure. Prove this inference through the compact-polar Fσ lemma (its
global witness plus the compact converse applies to every compact subset of
the union), or give the finite-energy-measure/inner-regularity proof, and
declare the actual supplier/dependency. The same closure issue must be handled
for unions of Borel exceptional sets used in q.e. uniqueness statements.

The direct closure proof is short under the run’s available regularity/choice
assumptions. If a compactly supported finite-energy measure `ρ` charged a
Borel capacity-polar set `E`, inner regularity would give a compact
`F⊂E` with `ρ(F)>0`. The normalized restriction `ρ|F/ρ(F)` still has finite
energy: on one common compact carrier the shifted kernel is nonnegative and
its self-integral is bounded by the corresponding finite integral for `ρ`.
This contradicts `cap(F)=0`. Thus `ρ(E)=0`. If a compact `K⊂⋃ⱼEⱼ` had
positive capacity for Borel polar `Eⱼ`, the capacity definition supplies a
finite-energy probability on `K`; it gives each `Eⱼ` measure zero by the
preceding argument, hence gives the union measure zero by countable
additivity, contradicting its mass one on `K`. This proves both finite and
countable closure of the Borel polar class without assuming it in the
definition.

### Strict positivity of zero-mass logarithmic energy: edge case and density algebra

In `items/lem-logarithmic-energy-strict-positivity-for-zero-mass-charges.md`,
the statement permits common mass `M=0`, but step 1.1 immediately chooses
`R>diam(supp μ∪supp ν)`, undefined for the two zero measures’ empty support.
Discharge `M=0` separately (`μ=ν=0`, energy difference zero), then use the
shifted-kernel proof for `M>0`.

Steps 5.1–6.1 should name the approximation algebra as real polynomials in
`Re z, Im z` (equivalently polynomials in `z, z̄`). Holomorphic polynomials
alone are not dense in `C(K)` on general compact planar sets. The real-coordinate
derivatives of the Gaussian convolution do give all such polynomial moments;
state that bridge before invoking real Stone–Weierstrass.

There is also an undeclared signed-measure interface in step 6.1: it sets
`K=supp σ` for `σ=μ−ν`, then uses `|σ|(K)<∞`, while the local support
definition is only for positive measures and the item supplies no total-
variation result. Use the compact carrier `K=supp μ∪supp ν` instead. The needed
uniform-limit passage follows directly from
`|∫f dσ|≤(μ(C)+ν(C))‖f‖_K` for `σ=μ−ν`, so neither signed support nor total
variation needs to be introduced.

The uniqueness clause of `items/thm-riesz-decomposition-subharmonic-plane.md`
has one more supplier-hypothesis gap. Step 9.1 applies Radon-measure uniqueness
to an arbitrary finite positive Borel competitor `M'` carried by `D`, but the
Facts & Assumptions do not establish that `M'` is Radon. The local
`cor-second-countable-lch-locally-finite-borel-measures-are-regular` supplier
does establish it under Countable Choice; this theorem already has Dependent
Choice, which supplies Countable Choice. Add and map that actual fact and
dependency, or restrict the uniqueness quantifier to finite Radon competitors.
The current route otherwise invokes a stronger [F12] hypothesis than stated.

`items/thm-riesz-measure-is-positive-radon.md` also defines
`Ω_ε={z∈Ω:dist(z,∂Ω)>2ε}` while allowing `Ω=ℂ`. For that domain the boundary is
empty, and the library's point-to-set distance is defined only for nonempty
sets, so this expression is undefined. Branch on `Ω=ℂ` with `Ω_ε=ℂ`, or define
the mollifier-safe center set directly by
`{z∈Ω:z−supp ρ_ε⊂Ω}` and verify openness. This is an allowed-domain edge, not
a choice issue.

### Kernel, energy, and axiom checks

For a common compact carrier and `R` larger than its diameter,
`k_R(z,w)=log(R/|z−w|)≥0`, including diagonal value `+∞`. This makes energy
monotonicity under positive restrictions valid after adding/subtracting the
constant `mass² log R`; it does **not** make the unshifted potential monotone.
Finite energy implies `U^μ<∞` μ-a.e. by Tonelli applied to the nonnegative
shifted kernel. Reciprocity for arbitrary compactly supported `σ` does not
need finite energy of `σ`: use one common shift on `K×suppσ`, Tonelli for the
nonnegative kernel, then Frostman’s global upper bound to conclude the
reversed integral is finite.

One base-definition edge needs repair in
`items/def-logarithmic-potential-and-energy.md`: it quantifies over finite
positive Borel measures, including the zero measure, but defines `I(μ)` by
choosing `R>diam(supp μ)`. The current support definition gives
`supp 0=∅`, while the published `def-metric-bounded-diameter` explicitly leaves
`diam(∅)` undefined. The same issue affects `I(0,0)` in the mixed-energy
definition. Define the zero-mass cases directly as zero before choosing a
radius, or choose a nonempty compact carrier containing the support (a
singleton works when the union of supports is empty). This edge propagates to
the zero-common-mass branch of strict-energy arguments; it should be resolved
at the definition so downstream suppliers do not silently assume a diameter
convention the library rejects.

The same empty-support diameter appears in step 1.1 of
`items/lem-logarithmic-potential-distributional-laplacian.md`: its statement
also allows `μ=0`, but sets `D₀=diam(supp μ)`. Treat the zero measure separately
(`p_μ=0`, all conclusions immediate), or use a nonempty compact carrier for
the estimate. The potential/energy contract should then make the zero-mass
case consistent for the Riesz-decomposition consumer as well.

The intended axiom costs are consistent if explicit in each statement and
contract: AC for equilibrium existence/Frostman/Green existence and
capacity–transfinite-diameter–Chebyshev equality; DC for the Evans compact-
polar lemma and any direct Riesz-decomposition use (AC implies DC); CC only
where a countable enumeration, minimizer family, or regularity result actually
requires it. Do not strengthen or weaken an item’s axiom declaration without
checking inherited supplier assumptions.

I also read the current proof files for energy lower semicontinuity,
equilibrium-measure uniqueness, the Fekete-diameter decrease, and the
Chebyshev root-limit lemma. Their main routes are consistent with the recorded
conventions: lower semicontinuity uses one common nonnegative shift and bounded
continuous truncations; Fekete decrease counts each pair in exactly `n−1`
deletions, including zero-product cases; the Chebyshev root limit separates an
eventual-zero case before taking logarithms or dividing by a norm; and
equilibrium uniqueness uses the strict-positive zero-mass energy lemma. The
strict-energy lemma’s separate `M=0` and real-coordinate density obligations
are listed above. No additional fatal defect was established in these four
proofs during this pass.

## Exact routes for the ten missing items

The following are proof obligations/routes, not proof approvals. Keep every
manifest claim, including the weak limits and exterior compact-uniform limit.

### A items

- **`prop-reciprocity-inequality-for-logarithmic-potential`.** Saff Prop. 1.13,
  printed p. 175: for equilibrium `μ_K` and compactly supported probability
  `σ`, Tonelli on a common shifted kernel gives
  `∫U^σdμ_K=∫U^{μ_K}dσ`; support of `μ_K` lies in `K`, so the left integral
  bounds `inf_K U^σ` from below, and Frostman bounds the right side by `V_K`.
  State the AC inherited through equilibrium/Frostman. Do not assume `I(σ)` is
  finite.
- **`lem-monic-polynomial-capacity-lower-bound`.** Saff Lemma 1.14 gives
  `||p||_K≥cheb(K)^n` from the defining infimum. For `cap(K)>0`, factor
  `p(z)=∏(z−α_j)` and let `ν=n⁻¹∑δ_{α_j}`; then
  `U^ν(z)=n⁻¹log(1/|p(z)|)`. Apply the reciprocity item to get
  `inf_K U^ν≤V_K`, and convert using the attained sup norm. Positive capacity
  makes `K` infinite, so `p` cannot vanish on all of `K`. For `cap(K)=0` the
  capacity lower bound is immediate. Taking infima and the existing Chebyshev
  root-limit lemma yields `cap(K)≤cheb(K)`.
- **`thm-green-function-from-equilibrium-potential`.** Use Frostman for
  `g=V_K−U^{μ_K}`: on the exterior `Ω`, `U` is harmonic; its uniform far-field
  expansion is `−log|z|+o(1)`; `g≥0`, and the strong minimum principle plus
  nonconstant growth gives `g>0`; at a boundary point with `U(ξ)=V_K`, lower
  semicontinuity together with `U≤V_K` gives the zero boundary limit. Frostman’s
  compact-Fσ exceptional set supplies the q.e. boundary condition. For
  uniqueness, subtract candidates; their log terms cancel at infinity and
  local boundary boundedness makes the difference bounded. Its failure set
  `P={ξ:limsup_{Ω∋z→ξ}|h(z)|>0}` is Fσ: if
  `A_n={ξ:limsup|h|≥1/n}`, then every point in the relative closure of `A_n`
  has cluster limsup at least `1/(2n)` (choose points `z_j→ξ` with
  `|h(z_j)|>1/(2n)`), so
  `P=⋃ₙ closure(A_n)`. To show `P` is polar from the two q.e. exceptions,
  first prove finite-energy measures annihilate Borel polar sets: if a
  finite-energy measure charged one, inner regularity gives a positive-mass
  compact polar subset; restricting and normalizing preserves finite energy
  by the shifted nonnegative kernel, contradiction to zero capacity. A
  positive-capacity compact subset of `P` has a finite-energy equilibrium
  measure, contradicting that annihilation fact. Now `P` is a specified Fσ
  union of compact zero-capacity sets, so the compact-polar lemma supplies a
  finite Evans measure whose shifted potential diverges on `P`; combine it
  with `m g` to form the nonnegative harmonic barrier and apply the ordinary
  maximum principle to `h−εQ` and `−h−εQ`. Handle `P=∅` separately. This keeps
  the promised q.e. uniqueness at irregular boundary points.
- **`thm-logarithmic-capacity-equals-transfinite-diameter`.** Saff’s complete
  Thm. 1.18 proof, printed pp. 177–178, assumes the established
  `cap=τ`/Fekete weak-convergence results from Thm. 1.9. For any Fekete
  `n`-tuple polynomial `F_n`, appending `z∈K` gives
  `||F_n||_K^(1/n)≤(δ_{n+1}/δ_n)^(n/2)√(δ_{n+1}δ_n)≤√(δ_{n+1}δ_n)`;
  Lemma 1.14 gives the lower bound `≥cheb(K)`, hence `τ≥cheb`. The
  reciprocity/monic-bound supplier gives `cheb≥cap=τ` when cap is positive;
  zero-capacity and finite-K cases need explicit handling. For the empirical
  measure limit, retain the full Thm. 1.9 Fekete-energy compactness argument
  and uniqueness of equilibrium. For the exterior limit, weak convergence of
  the empirical measures gives uniform convergence of potentials on each
  compact `L⊂C\K` by a finite-net argument, since `log(1/|z−w|)` is uniformly
  continuous on `L×K`; exponentiate
  `U^{ν_n}(z)=n⁻¹log(1/|F_n(z)|)`.

### B examples

- **`ex-logarithmic-capacity-of-disc-and-equilibrium-circle`.** Integrate
  `log|z−a−re^{it}|` against normalized arclength. The circle mean is
  `log r` for `|z−a|≤r` and `log|z−a|` for `|z−a|≥r`, so the potential is
  constant `log(1/r)` on the disc and its circle. Polarization with the
  strict-positive zero-mass energy lemma proves minimality and uniqueness;
  state AC only because the equilibrium framework is used.
- **`ex-logarithmic-capacity-of-a-real-interval`.** Push normalized angle on
  `[0,π]` through `x=cos θ`; change of variables gives the arcsine density.
  Compute the logarithmic potential on `[-1,1]` (e.g. Saff Example 3.6’s
  Joukowski identity, or the direct cosine integral) as `log 2`; polarization
  and strict positivity give the unique minimizer. Scaling by `(b−a)/2`
  yields capacity `(b−a)/4`.
- **`ex-chebyshev-extremal-polynomials-and-capacity`.** For a disk, Cauchy’s
  coefficient estimate on its boundary gives every monic norm at least `R^n`,
  attained by `(z−a)^n`. For `[-1,1]`, reduce complex monic polynomials to
  their real parts and use the published Chebyshev minimax theorem. For the
  closed unit disk, the Vandermonde matrix has column norms at most `√n`, hence
  Hadamard gives product at most `n^{n/2}`; the Fourier columns at roots of
  unity are orthogonal and attain equality. Thus the roots form Fekete tuples
  and `F_n=z^n−1`; use Thm. 1.18(c) and the disk equilibrium calculation for
  weak convergence, and `||z^n−1||=2` for asymptotic optimality.
- **`ex-chebyshev-extremal-nodes-and-arcsine-measure`.** For continuous `f`,
  apply Riemann sums to `f(cos θ)` on `[0,π]`; replacing `n` by `n+1` equal
  weights and including the final endpoint changes the averages by `o(1)`.
  The pushforward is the arcsine equilibrium measure. The cosine multiple-angle
  identity gives the alternating extrema.
- **`ex-finite-and-countable-sets-are-logarithmically-polar`.** A probability
  on a countable compact set has an atom, and the fixed diagonal `+∞` makes its
  energy infinite. For an enumeration of distinct points `a_j`, choose
  positive `c_j` with finite `∑c_j(1+log(1+|a_j|))`; the measure
  `∑c_jδ_{a_j}` has finite logarithmic moment, and its logarithmic potential
  is locally integrable/subharmonic but `−∞` at each `a_j`. Handle finite and
  empty sets directly; keep the promised CC declaration only for the choices
  actually used in the enumeration/supplier route.
- **`ex-green-function-of-a-circular-conductor`.** The disk equilibrium
  calculation gives `U^{μ_K}(z)=−log|z−a|` outside and `V_K=−log r`.
  Therefore `g(z)=log(|z−a|/r)`. Verify positivity/harmonicity, zero trace on
  the circle, local boundary boundedness, and the infinity normalization
  directly. If uniqueness is stated in the example, the ordinary maximum
  principle on the spherical exterior is not by itself sufficient: the
  inherited candidate Green functions have boundary value zero only
  quasi-everywhere, so an exceptional polar subset is not controlled by
  pointwise boundary data. A direct route is to subtract candidates (the
  infinity singularities cancel; local boundary bounds plus a finite cover of
  the circle and the normalization at infinity make the difference bounded),
  map the exterior to the punctured disk by `w=r/(z−a)`, and extend across its
  center using the published
  `thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions`.
  Show the exceptional polar set on the circle has arclength zero. For that
  last claim, if the Borel exceptional set had positive arclength, the
  Countable-Choice regularity supplier
  `cor-second-countable-lch-locally-finite-borel-measures-are-regular` gives a
  compact positive-arclength subset. Normalized arclength restricted to that
  compact set has finite logarithmic energy: the circle's shifted kernel has
  finite full-arclength double integral because its logarithmic singularity is
  integrable, and restriction decreases that nonnegative shifted integral.
  Thus the compact subset has positive capacity, contradiction. Then use a
  bounded-harmonic L-infinity Poisson
  representation (or the bounded-harmonic Fatou theorem plus boundary
  representation) to conclude that a bounded harmonic disk function whose
  radial boundary values vanish arclength-a.e. is zero. The existing
  `thm-harmonic-hardy-representation-p-greater-one` /
  `cor-bounded-harmonic-functions-have-nontangential-limits` routes explicitly
  assume AC; carry that qualifier through dependencies. The continuous-boundary
  Poisson theorem alone does not apply to a merely bounded harmonic difference.
  Do not cite the still-unfinished general q.e. Green theorem.

## Handoff

The retrieved full texts support the routes stated above; they do not certify
the authored item files. The primary author still needs a complete
strict-contact Riesz-measure inequality for domination (or a fully checked
`P¹` transfer), the radial total-mass calculation, the corrected Frostman
restriction argument, and the five absent claims/pages listed in the disk
snapshot below. The count discrepancy also needs owner reconciliation before
batch close: the report's earlier checkpoint records 23 A + 8 B = 31, while the
current manifest on disk has 24 A + 8 B = 32.

At the read-only disk snapshot **2026-09-30 14:22:32 UTC**, the manifest had 32
items, 27 corresponding item files existed, five were absent, and both library
pages were absent. The author was still active, so presence here does not mean
stable proof completion. The following table makes the independent audit scope
explicit; “no additional defect found” means only this audit's pass, not a
judgment or gate result.

| Item | Disk status and this audit's finding |
|---|---|
| `def-support-of-a-borel-measure` | Present; read; no additional defect found. |
| `def-logarithmic-potential-and-energy` | Present; read; zero-measure energy/mixed-energy radius needs a defined case because `diam(∅)` is unavailable. |
| `def-logarithmic-capacity-compact-set` | Present; read; no additional defect found. |
| `thm-logarithmic-energy-well-defined-and-lower-semicontinuous` | Present; read; no additional defect found. |
| `lem-logarithmic-energy-strict-positivity-for-zero-mass-charges` | Present; read; needs `M=0` branch, real-coordinate polynomial moments, and a compact positive-measure carrier instead of undeclared `supp(μ−ν)`/total variation. |
| `thm-equilibrium-measure-existence-and-uniqueness` | Present; read; no additional defect found. |
| `def-polar-set-and-quasi-everywhere` | Present; read; no additional defect found; countable closure is not supplied by this definition. |
| `lem-logarithmic-potential-maximum-principle` | Present; read; current `μ≠0` hypothesis resolves the zero-measure counterexample; no additional defect found. |
| `thm-frostman-equilibrium-theorem` | Present; read; step 4.1 full-mass branch is invalid and [F1] has false signed-kernel monotonicity; exact shifted-kernel/infinite-energy route is in the binding authoring direction. |
| `prop-reciprocity-inequality-for-logarithmic-potential` | Present at snapshot; not independently proof-audited in this pass. |
| `def-chebyshev-constant-compact-set` | Present; not independently proof-audited in this pass. |
| `lem-chebyshev-constant-is-submultiplicative-root-limit` | Present; read; no defect found in its zero and positive cases. |
| `lem-monic-polynomial-capacity-lower-bound` | Missing at snapshot. |
| `def-riesz-measure-subharmonic-function` | Present; read; no additional defect found. |
| `thm-riesz-measure-is-positive-radon` | Present; read; `Ω=ℂ` makes its current distance-to-empty-boundary expression undefined. |
| `lem-logarithmic-potential-distributional-laplacian` | Present; read; statement allows `μ=0` but proof takes `diam(supp μ)`. |
| `thm-riesz-decomposition-subharmonic-plane` | Present; read; uniqueness step applies Radon uniqueness to finite Borel `M'` without establishing its regularity. |
| `lem-compact-polar-sets-and-subharmonic-minus-infinity-loci` | Present; read; no additional defect found in the current Evans construction; its existing proof supplies the specified compact-`Fσ` route, subject to its declared DC and supplier assumptions. |
| `thm-principle-of-descent-and-domination` | Present; read; strict-contact “openness” and open-set locality are unjustified, step 5.1 repeats the issue, and step 4.1 has malformed mass display; finite-energy a.e. and the exact verified contact-measure route are detailed above. |
| `def-green-function-with-pole-at-infinity` | Present; read; its q.e. boundary condition makes ordinary pointwise maximum-principle uniqueness insufficient. |
| `thm-green-function-from-equilibrium-potential` | Missing at snapshot. |
| `def-fekete-points-and-transfinite-diameter` | Present; read; no additional defect found. |
| `lem-fekete-diameters-decrease` | Present; read; no additional defect found. |
| `thm-logarithmic-capacity-equals-transfinite-diameter` | Missing at snapshot. |
| `ex-logarithmic-capacity-of-disc-and-equilibrium-circle` | Present; source route reviewed; this pass did not audit the complete authored proof. |
| `ex-logarithmic-capacity-of-a-real-interval` | Present; source route reviewed; this pass did not audit the complete authored proof. |
| `ex-chebyshev-extremal-polynomials-and-capacity` | Missing at snapshot. |
| `ex-chebyshev-extremal-nodes-and-arcsine-measure` | Present; source route reviewed; this pass did not audit the complete authored proof. |
| `ex-finite-and-countable-sets-are-logarithmically-polar` | Present; source route reviewed; this pass did not audit the complete authored proof. |
| `ex-cantor-sets-with-positive-and-zero-logarithmic-capacity` | Present; not independently proof-audited in this pass. |
| `ex-riesz-measure-of-log-modulus-is-zero-divisor` | Present; not independently proof-audited in this pass. |
| `ex-green-function-of-a-circular-conductor` | Missing at snapshot; proposed uniqueness route must account for its inherited q.e. boundary condition, the compact-circle polar-to-arclength-zero argument, and AC on the bounded-harmonic Hardy/Fatou supplier. |

No item, page, manifest, contract, coverage, notes, decision, or run-state
carrier was edited by this audit; only this report was written. No gate or
transition action was taken. Root owns integration, current manifest-count
reconciliation, author drain, receipt refresh, dependency-level recomputation,
and gate closure.
