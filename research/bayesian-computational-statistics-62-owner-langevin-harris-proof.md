# BCS38: proposed weighted Harris supplier

Initial research proposal, 2026-10-15; subsequently integrated under the parent owner’s explicit authorization into the new draft `items/lem-weighted-drift-minorization-gives-contraction-and-invariant-law.md`. No page, manifest, live proof-contract collection, or readiness carrier is changed by this worker. The source-exact isolated contract proposal is `research/bayesian-computational-statistics-62-owner-langevin-harris-contract-proposal.json`. The existing `thm-geometric-ergodicity-under-drift-and-minorization` assumes an invariant probability and proves an ordinary total-variation bound; its bivariate coupling supplier does not construct an invariant probability or give contraction in a weighted signed-measure norm. They do not discharge this obligation.

Integrated new ID: `lem-weighted-drift-minorization-gives-contraction-and-invariant-law`. The numbered proof steps in the integrated carrier are 1.1 through 7.1; the prose proof numbering below predates that mechanical layout conversion.

## Precise statement

Assume AC. Let K be a Borel probability kernel on R^d and let V:R^d→[1,∞) be finite and Borel. Suppose

    KV ≤ a V + b,       0<a<1,  0≤b<∞.

Suppose that for some R>max{2,2b/(1-a)}, the sublevel D={V≤R} is nonempty and admits a one-step minorization K(x,·)≥ε₀ν(·), x∈D, where ε₀>0 and ν is a Borel probability. Requiring minorization on every nonempty finite sublevel is a sufficient stronger hypothesis.

Then K has a unique invariant probability π, uniqueness being among all Borel probabilities, and πV≤b/(1-a)<∞. There are explicit C<∞ and 0<r<1 such that, for every n≥0 and probabilities μ,ν' having finite V moments,

    ||μK^n−ν'K^n||_V ≤ C r^n ||μ−ν'||_V.

Here ||η||_V=sup{|ηf|: f Borel, |f|≤V}. In particular

    ||K^n(x,·)−π||_V ≤ C r^n [V(x)+πV].

The same contraction holds for every finite signed measure η with η(R^d)=0 and ∫V d|η|<∞. The nonempty D assumption can be guaranteed by choosing R also greater than V(x₀) for one fixed x₀; no global selection is involved.

Explicit constants: reduce ε₀ if necessary to ε=min{ε₀,1/2}; take β=ε/[2(b+1)], w=1+βV, and set

    a'=a+2b/R <1,
    r_far=(2+βa'R)/(2+βR),
    r_near=1−2(ε−βb)/(2+βR),
    r=max{r_far,r_near},        C=(1+β)/β.

Both component rates lie strictly between zero and one.

## Full proof

1. Weighted norm and completeness. By AC obtain a Hahn partition P,N for an arbitrary finite signed η. Its Jordan parts are η⁺=η|P, η⁻=−η|N. If ∫w d|η|<∞, then |ηf|≤∫w d|η| for |f|≤w, and equality is attained at the Borel function f=w(1_P−1_N). Consequently ||η||_w=∫w d|η|. Multiplication Tη=wη, defined using the positive parts, is a linear isometry onto the ordinary finite-total-variation signed measures. Its inverse is T⁻¹ζ=w⁻¹ζ: a Hahn partition for ζ is also a Hahn partition after multiplication by strictly positive w⁻¹. Therefore |Tη|=w|η| and |T⁻¹ζ|=w⁻¹|ζ|, and both maps are well defined and inverse. Ordinary signed-measure completeness thus gives completeness in ||·||_w. The same argument applies to V. This proof does not assume completeness of a probability Wasserstein space or invoke optimal transport.

2. Kernel operations and integrability. Kernel integration makes Kf Borel whenever |f|≤cw, since K|f|≤cKw<∞. For a signed η with finite w norm, define ηK=η⁺K−η⁻K; integrating simple functions and then monotone limits proves (ηK)f=η(Kf) for all integrable test functions here. In particular ηK has total mass η(R^d) and finite w moment because |ηK|≤|η|K and

    Kw=1+βKV≤1+βaV+βb≤(1+βb)w.

The variation inequality follows, for example, by summing |ηK(A_j)|≤∫K(x,A_j)|η|(dx) over each measurable partition and taking the partition supremum. All integrations against products below are finite or nonnegative, so elementary product/Fubini identities apply.

3. Pairwise coupling bound far from the small region. Write S=V(x)+V(y). For distinct fixed x,y with S≥R, couple K(x,·), K(y,·) independently, calling the resulting coordinates U,Z. For any Borel |f|≤w, |f(U)−f(Z)|≤2+β[V(U)+V(Z)]. Thus

    |Kf(x)−Kf(y)|≤2+β(aS+2b)
                      ≤2+βa'S
                      ≤r_far(2+βS).

The last inequality holds because s↦(2+βa's)/(2+βs) is decreasing for s≥R. No path realization, coupling stopping time, or chain irreducibility is required.

4. Pairwise coupling bound near the small region. If x≠y and S<R, both states lie in D. The residual probabilities H_x=(K(x,·)−εν)/(1−ε) exist. The minorization and finite KV imply νV<∞: fix any x_D∈D and use ε νV≤KV(x_D)<∞. Couple by probability ε drawing the same ν state for both coordinates, and by probability 1−ε drawing independently from H_x,H_y. The common component contributes exactly zero to |f(U)−f(Z)|, hence

    |Kf(x)−Kf(y)|
      ≤2(1−ε)+β[KV(x)+KV(y)−2ενV]
      ≤2(1−ε)+β(aS+2b)
      ≤(2+βS)−2(ε−βb)
      ≤r_near(2+βS).

These estimates also hold with zero left side for x=y if desired. Only individual product measures are needed; no measurably selected family of optimal couplings is used. For explicit global measurability one may extend H_x off D by ν; its evaluations are Borel, product kernels are measurable, and the synchronous law is the pushforward of ν by z↦(z,z). Since the diagonal of R^d×R^d is Borel, the corresponding piecewise coupling kernel is Borel as well. The proof itself does not need that extra construction.

5. Signed reduction gives weighted contraction with no loss. Let η have total mass zero and finite w norm. If η=0 there is nothing to prove. Otherwise its Jordan masses agree, m=η⁺(R^d)=η⁻(R^d)>0. Put p=η⁺/m, q=η⁻/m. They concentrate respectively on disjoint Borel Hahn sets P,N. For |f|≤w, the preceding pairwise bounds and integration against p⊗q give

    |(ηK)f|
      =m |∫[Kf(x)−Kf(y)]p(dx)q(dy)|
      ≤mr ∫[w(x)+w(y)]p(dx)q(dy)
      =r∫w d|η|=r||η||_w.

Taking the test-function supremum proves ||ηK||_w≤r||η||_w. Step 2 permits iteration, giving ||ηK^n||_w≤r^n||η||_w. Since βV≤w≤(1+β)V, this implies the claimed C r^n contraction in V. In particular the input norm is ||μ−ν'||_V, not the weaker upper bound μV+ν'V.

6. Construct the invariant probability. Fix x₀∈R^d and put μ_n=δ_{x₀}K^n. The difference μ_1−μ_0 has finite w norm. Step 5 gives

    ||μ_{n+1}−μ_n||_w≤r^n||μ_1−μ_0||_w.

The geometric tail bound makes (μ_n) Cauchy. By step 1 it converges to a signed measure π of finite w norm. Norm convergence implies π(A)=lim_n μ_n(A)≥0 for every Borel A, and π(R^d)=1, so π is a probability. In particular πV<∞. Since π and μ_n are probabilities of finite w moment, step 5 yields ||μ_nK−πK||_w≤r||μ_n−π||_w→0. But μ_nK=μ_{n+1}→π, whence πK=π. Iterating the drift gives μ_nV≤a^nV(x₀)+b(1−a^n)/(1−a); weighted norm convergence allows the unbounded test function βV≤w, so μ_nV→πV. Therefore πV≤b/(1−a). Equivalently integrate the drift against the now-known finite-moment invariant π. No Fatou passage through an unspecified weak limit occurs.

7. Uniqueness without a moment assumption. Step 5 applied to δ_x−π proves the stated pointwise weighted bound, hence K^n(x,A)→π(A) for every fixed x and every fixed Borel A. If λ is any invariant probability, including one with λV=∞, then

    λ(A)=∫K^n(x,A)λ(dx)→∫π(A)λ(dx)=π(A)

by bounded dominated convergence. Thus λ=π. This avoids applying a weighted estimate to λ before its integrability is known.

## Exact local supplier dependencies

The proposed item's direct `deps` should be:

- `def-axiom-of-choice`: obtain Hahn/Jordan decompositions of arbitrary signed measures in steps 1 and 5, via the local AC-qualified existence clause. No new path-space AC claim is made.
- `def-measure-kernel-and-probability-kernel`: kernel setting and signed kernel action.
- `def-v-weighted-total-variation-distance`: the probability weighted norm and factor-of-two convention.
- `def-invariant-and-stationary-distribution-for-a-markov-kernel`: invariance meaning and probability action.
- `thm-jordan-decomposition-for-signed-measures`: general AC-qualified existence and conditional formulas.
- `prop-jordan-parts-and-total-variation-formulas-for-signed-measures`: variation as sum of Jordan parts.
- `thm-finite-total-variation-signed-measures-are-complete`: ordinary norm completeness.
- `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`: multiplication by positive measurable weights and its inverse.
- `thm-measurability-of-integration-against-a-kernel`: measurable integrands and kernel evaluations.
- `lem-finite-products-of-probability-kernels`: independent finite product coupling; no choice assumed by this supplier.
- `thm-tonelli-theorem-for-sigma-finite-product-spaces`: product integration in the Jordan reduction and marginal expectation formulas.
- `thm-monotone-convergence-for-the-integral`: simple-function extension of kernel integration identities and positive weighted-density integration.
- `thm-dominated-convergence`: uniqueness for arbitrary invariant probabilities.

These are exact IDs present on disk. The multiplication proof is supplied locally, so no new weighted-completeness item is necessary. General signed Jordan existence is the only explicit additional AC use; carry AC to all consumers. The ordinary completeness proof uses canonical setwise limits; the finite-product and kernel-measurability suppliers explicitly disclaim additional AC. Do not describe this proof as choice-free under current local supplier contracts.

## Euler application, with proof of the missing smallness

Take a fixed γ>0 and the Euler kernel with density

    k_γ(x,y)=(4πγ)^(-d/2) exp(−|y−m_γ(x)|²/(4γ)),
    m_γ(x)=x−γ∇U(x).

Suppose a local precursor gives K_γV≤a_γV+b_γ, a_γ<1, and V is continuous, finite, at least one, and coercive. For any finite sublevel D_R={V≤R}, compactness and continuity of m_γ give M_R=sup_{D_R}|m_γ(x)|<∞. Fix a target ball B(0,s) of positive finite Lebesgue volume v_s. On D_R×B(0,s),

    k_γ(x,y)≥c=(4πγ)^(-d/2)exp(−(s+M_R)²/(4γ))>0.

Thus K_γ(x,A)≥cv_s ν_s(A), where ν_s is uniform on the ball. Decrease cv_s if desired to at most 1/2. This is a one-step minorization at every nonempty finite sublevel, so the lemma gives the unique invariant probability π_γ, π_γV<∞, and fixed-γ weighted contraction. It is unnecessary to separately prove irreducibility or aperiodicity.

If the available drift is for a larger weight V while the consumer needs W=V^(1/2), Jensen/Cauchy–Schwarz gives K_γW≤(K_γV)^(1/2)≤sqrt(a_γ)W+sqrt(b_γ). Hence the same argument works with W; alternatively the conclusion π_γV<∞ already implies π_γW<∞.

**Uniformity limitation:** c, β, r and C above may depend badly on γ. This construction proves fixed-γ existence/uniqueness and contraction. It does not prove a uniform physical-time contraction estimate as γ↓0. A source-independent O(sqrt γ) invariant-bias proof must obtain uniformity from a separate fixed-time comparison and uniform moment argument, or prove a separate uniform block minorization.

## Diffusion skeleton application and semigroup upgrade

Assume a separately proved conservative Borel Markov semigroup (P_t) has, for a finite continuous coercive weight V≥1, the expectation drift

    P_tV≤e^(−ct)V+B(1−e^(−ct)),     c>0, B<∞.

A formal generator inequality alone does not supply this expectation assertion: stopping, nonexplosion, and the limiting argument must have been proved by a diffusion supplier. Suppose another supplier proves for some fixed τ>0 that the skeleton has a density whose lower bound is positive on each compact starting set times a fixed target ball of positive finite volume. Then P_τ satisfies the lemma with a=e^(−cτ), b=B(1−a). Compact sublevels give the required minorization, by exactly the normalized-ball argument above. It has a unique invariant probability π_τ, with π_τV≤B.

For any s≥0, semigroup commutation gives (π_τP_s)P_τ=(π_τP_τ)P_s=π_τP_s. Uniqueness among all probabilities for P_τ implies π_τP_s=π_τ. Thus π_τ is invariant for the entire semigroup, and any semigroup-invariant probability equals π_τ. This step does not identify π_τ with the Gibbs law unless a separate local supplier proves Gibbs invariance.

For t=nτ+s, 0≤s<τ, drift gives P_sV≤V+B≤(1+B)V. Consequently signed-kernel variation gives ||ηP_s||_V≤(1+B)||η||_V. Apply the skeleton bound first and this residual bound second:

    ||μP_t−ν'P_t||_V≤(1+B)C r^n ||μ−ν'||_V
                    ≤(1+B)C r^(−1)e^(−κt)||μ−ν'||_V,
    κ=−log(r)/τ>0.

This holds for all initial probabilities with finite V moments and all t≥0. Pointwise convergence to π follows by ν'=π. If Gibbs invariance is supplied, uniqueness identifies π=π_U and in particular proves its finite V moment. No outside Harris recurrence theorem or unproved invariant existence is used.

## Source and review status

The complete Hairer–Mattingly full text, arXiv:0810.2777v1 (8 pages), was downloaded and read through the extracted PDF text. Assumptions 1–2, Theorems 1.3, 3.1 and 3.2, and their complete proofs on pp. 2–6 directly support the literature-derived statement and the reweighted contraction/existence mechanism. The integrated proof supplies its own explicit constants, Jordan-product signed reduction, full weighted completeness argument, and uniqueness among invariant probabilities without a moment assumption. It does not rely on the source’s abbreviated completeness assertion. Durmus–Moulines, arXiv:1507.05021v3, remains the parent consumer’s cited source, not a source newly audited in full by this worker.

Actual scoped checks: the integrated item passed phase precheck (one file, one proof), proof-layout (one item, seven steps, zero defects), and its isolated source-exact contract passed strict checking (one item, zero errors and warnings). These are format/mechanical checks, not independent mathematical audit stamps.
