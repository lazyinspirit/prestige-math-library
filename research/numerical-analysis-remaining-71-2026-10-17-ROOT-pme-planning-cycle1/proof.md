# PC-EWALD local supplier proof development (planning only, cycle 1)

These are proposed local suppliers on the existing A page, before its certified PME force theorem. They are not canonical items, authored inventories, native review coverage or an acceptance receipt. The approved torus-distribution/Ewald/self-limit/tail/force scope remains intact. All formulas below use angular physical frequencies, and integer frequencies only in fractional coordinates.

## Conventions and two necessary clarifications

Write the physical cell as A[0,1)^3, V=|det A|, x=At, κ_k=2πA^{-T}k, k∈Z³. Thus the published Poisson theorem uses the dual A^{-T}Z³ with exponent 2πiξ·x; its dual is not the angular lattice 2πA^{-T}Z³. Assume Countable Choice when using that theorem and carry `def-countable-choice` in its dependency closure. The Gaussian summation supplier applies that theorem only to Schwartz Gaussians, not to a compact spline with finite smoothness.

Fix integers M_r≥1, P≥2 and N=M_1M_2M_3. Let W_P=1_[0,1]*...*1_[0,1] (P factors), using its continuous representative. This equals the approved truncated-power formula. It has support [0,P], integral one and nonnegative values. Define W_1 by one-sided values where needed, W'_P=W_{P-1}(u)-W_{P-1}(u-1); P=2 has one-sided derivatives at integers. A classical energy-gradient force exists at every configuration for P≥3. For P=2 it exists off assignment knots; at knots return the explicitly selected one-sided derivative (or the average of one-sided values) and enclose it. The latter is a declared mesh force value, never a claim of classical differentiability at a corner. Spectrally differentiated field evaluation is defined there without this qualification. This retains the P≥2 procedure and states its actual smoothness.

Computable certificates presume finitely presented data with certified arithmetic and elementary-function enclosures (or an explicit enclosure oracle); the mathematical inequalities themselves hold for arbitrary admissible real data. Use periodic assignment, accumulating support crossing a boundary:
w_l(t)=∏_r Σ_{j∈Z}W_P(M_rt_r-l_r-jM_r), 0≤l_r<M_r;
g_l=Σ_iq_iw_l(t_i).
Each periodic sum has finitely many nonzero terms; if P>M_r, distinct support terms can wrap to the same residue and must be accumulated. The support is the P consecutive predecessor indices for W_P(Mt-l), not an unspecified symmetric 'P nearest' list. At exact endpoints zero terms can be included.

Let F_Mg(k)=N^{-1/2}Σ_lg_l exp(-2πiΣ_r k_rl_r/M_r), the tensor product LIN-FFT convention. Its inverse has positive exponent and N^{-1/2}. Define the signed representative k before evaluating windows; residues only identify storage slots. Retained K is a finite symmetric subset of nonzero integer modes, injective modulo M. A convenient valid choice is |κ_k|≤k_c with |k_r|<M_r/2 for every retained k; omitted Nyquist modes and every other omitted mode remain in the reciprocal truncation term. No discarded mode is silently assigned zero error.

Let D(k)=∏_r exp(-πiPk_r/M_r)sinc(πk_r/M_r)^P, sinc(0)=1. This is exactly the printed approved D. For the negative-sign transform and W_P(Mt-l), the leading deposition multiplier is **conj(D(k))**, not D(k). Consequently use z_k=√N F_Mg(k)/conj(D(k)). Equivalently conjugate the opposite-sign transform and divide by conj(D(k)); the printed D need not be redefined. Arbitrary division by D(k) with the negative-sign transform introduces a deterministic phase error. Enclose denominators outward; a nonpositive lower bound for |D(k)| returns denominator-inconclusive before division.

## Supplier 1: 3D normalization and exact aliases

Put a_k(t)=exp(-2πik·t), b_k(t)=[Σ_l w_l(t)exp(-2πiΣ_rk_rl_r/M_r)]/conj(D(k)), ρ_k=Σ_iq_ia_k(t_i), r_{k,n}=conj(D(k+n⊙M))/conj(D(k)). For D(k)≠0:

b_k(t)=Σ_{n∈Z³}r_{k,n}a_{k+n⊙M}(t),
z_k=Σ_nr_{k,n}ρ_{k+n⊙M},
z_k-ρ_k=Σ_{n≠0}r_{k,n}ρ_{k+n⊙M}.

All these series are absolutely and uniformly convergent for P≥2. In particular there is no missing N, 1/N, grid-cell volume or cell-volume factor. The coefficient c_k used later is 4π exp(-|κ_k|²/(4α²))/(V|κ_k|²), independently of the unitary mesh normalization. The √N in z converts a unitary transform into the charge structure sum. Finite orthogonality Σ_{l=0}^{M-1}exp(2πi(a-b)l/M)=M1_{a≡b mod M} proves the inverse and storage-index rules, coordinate by coordinate.

Proof. Fubini on the compact unit cubes gives
∫W_P(u)e^{-iωu}du=[∫_0^1e^{-iωv}dv]^P=e^{-iPω/2}sinc(ω/2)^P.
The convolution formula equals the truncated-power formula by induction: integrate the order-(P-1) finite-difference formula over [u-1,u], then combine consecutive binomial coefficients. The same convolution or the finite difference gives W'_P=W_{P-1}-W_{P-1}(·-1). Nonnegativity and support follow directly from convolution. For P=1 the periodized indicator sums to one off its endpoints; convolution with the next unit interval shows Σ_jW_P(u-j)=1 everywhere for P≥2. Thus Σ_lw_l(t)=1 and Σ_lg_l=Σ_iq_i=0; the exact grid zero mode vanishes.

For one coordinate set θ=2πk/M and H(a)=e^{iθa}Σ_{l∈Z}W_P(a-l)e^{-iθl}. This is continuous and 1-periodic. Its nth Fourier coefficient is
∫_0^1H(a)e^{-2πina}da=∫_R W_P(u)e^{-i(2πn-θ)u}du.
Indeed substitute u=a-l; the integer phase exp(-2πinl)=1 and intervals [-l,1-l] partition R up to endpoints. The coefficients are O((1+|n|)^{-P}), hence summable for P≥2. Their uniformly convergent Fourier series equals H: for completeness, the difference is a continuous periodic function with every coefficient zero. Its convolutions with the nonnegative Fejér kernel K_J(v)=(1/J)|Σ_{h=0}^{J-1}e^{2πihv}|² vanish; ∫K_J=1 by finite orthogonality, and outside distance δ from an integer K_J≤1/[J sin²(πδ)]. Uniform continuity bounds convolution error on distance≤δ and this tail bound handles its complement, so these convolutions converge uniformly to the function. The difference is therefore zero. No nonsmooth application of the Schwartz Poisson theorem occurs.

Multiply the resulting series by e^{-iθa} and replace n by -n. The factor is the transform of W_P at -θ-2πn, namely conj(D(k+nM)); the exponential is e^{-2πi(k+nM)t} when a=Mt. Tensor the three absolutely summable series (absolute convergence justifies regrouping), divide by conj D(k), and sum over the finite particles. This proves every displayed identity. ∎

For a signed retained frequency u_r=k_r/M_r with |u_r|<1/2 define
h_r(n)=|u_r/(u_r+n)|^P for n≠0 if u_r≠0; h_r(0)=1; for u_r=0 set h_r(n)=0 for n≠0.
Then |r_{k,n}|=∏_rh_r(n_r). Put a_r=Σ_{n≠0}h_r(n) and A_k=∏_r(1+a_r)-1. With Q=Σ_i|q_i|,
|b_k-a_k|≤A_k, |b_k|≤1+A_k, |z_k-ρ_k|≤QA_k.

Each a_r has the explicit enclosure
0≤a_r≤2|u_r|^P(1-|u_r|)^{-P}ζ(P),
and, after summing |n|≤J exactly, omitted terms are at most
2|u_r|^P(1-|u_r|)^{-P} J^{1-P}/(P-1).
This follows from |n+u|≥(1-|u|)|n| and ∑_{n>J}n^{-p}≤∫_J^∞t^{-p}dt. ζ(P) itself is enclosed by a finite sum plus that integral. Thus A_k is computable without a heuristic lattice cutoff.

## Supplier 2: derivative-window alias enclosure

All derivatives here are physical derivatives ∇_x=A^{-T}∇_t. First suppose P≥3. Define
v_r=Σ_{n≠0}|k_r+nM_r|h_r(n),
J_{k,r}=(|k_r|+v_r)∏_{s≠r}(1+a_s)-|k_r|,
B_k=2π||A^{-T}||_2(Σ_rJ_{k,r}²)^{1/2}.
Then ||∇_xb_k-∇_xa_k||≤B_k uniformly. Indeed differentiated aliases have factors -2πiA^{-T}(k+n⊙M), not merely -2πiA^{-T}k. For each fractional coordinate the sum over n≠0 of |k_r+n_rM_r||r_{k,n}| equals J_{k,r}. It is finite because
v_r≤2M_r|u_r|^P(1-|u_r|)^{-(P-1)}ζ(P-1),
with zero when u_r=0. After |n|≤J its omitted part is at most
2M_r|u_r|^P(1-|u_r|)^{-(P-1)}J^{2-P}/(P-2).
The derivative series therefore converges absolutely and uniformly. Integrating its uniformly convergent sum along each coordinate and using convergence at one point proves it differentiates the original alias sum. Apply A^{-T} and the Euclidean norm bound. ∎

For P=2 the v_r absolute series diverges when u_r≠0. Claiming it is finite would be false. Use the following finite derivative-window enclosure, also available for every P≥2, without raising the approved minimum P.

Define T_{k,r}(t)=∂_{t_r}b_k(t)+2πik_ra_k(t), and set C_{k,r} to any certified upper bound for sup_t|T_{k,r}(t)|, taking both one-sided limits at assignment knots. Put
B_k^{fin}=||A^{-T}||_2(Σ_r C_{k,r}²)^{1/2}.
This bounds precisely the same physical derivative error. Compute C by the finite formula
∂_{t_r}b_k(t)=M_r/conj(D(k)) Σ_{l∈Z³} W'_P(M_rt_r-l_r)∏_{s≠r}W_P(M_st_s-l_s)exp(-2πiΣ_s k_sl_s/M_s).
Only support indices contribute. This formula, including its derivative-window factors M_rW'_P, follows by differentiating the finite local spread sum on each open grid box. Periodic wrapping and both one-sided limits give its full domain enclosure. At a knot the selected average lies in the convex hull of the limits and obeys the same bound. It is the exact derivative error of the alias identity proved above, even though the absolutely summed derivative Fourier majorant fails at P=2.

Here is a fully finite way to produce C, with optional refinement. Partition [0,1]^3 at t_r=j/M_r. On each closed box and each side choice at a knot, the finite expression for ∂_{t_r}b_k is a known complex polynomial H(t) (use the corresponding one-sided polynomial extensions at the boundary). The other term is 2πik_re^{-2πik·t}. An immediate valid choice is
C_{k,r}=2M_r/|D(k)|+2π|k_r|.
To prove the constant, Σ_l|W'_P(a-l)|≤Σ_l[W_{P-1}(a-l)+W_{P-1}(a-l-1)]≤2, with the partition sums interpreted one-sided for P=2. The remaining coordinate sums are one by nonnegativity and partition of unity. Divide by |D|. This is a deterministic bound, though it can be pessimistic.

For a sharper computable enclosure, subdivide each closed box into finite rational subboxes of maximum diameter δ. At their centers v evaluate H(v)+2πik_ra_k(v) with rigorous elementary-function intervals. On the original box obtain an upper bound L for the Euclidean norm of its gradient by differentiating the explicit polynomial H and adding the bound 4π²|k_r| ||k|| for the exponential term. Polynomial absolute coefficient bounds on [0,1]^3 provide a finite L; they do not require optimization or a new theorem. The upper bound at each center plus Lδ encloses the whole subbox by the line-segment fundamental theorem of calculus. Maximize these finitely many bounds over all subboxes, knot sides and grid boxes. As δ and evaluation radii tend to zero this upper bound tends to the exact supremum, since the finite number of side polynomials are continuous on compact boxes. In particular this is an effective finite certificate at any chosen refinement, not an unspecified supremum oracle or empirical estimator. The derivative identities prove its correctness also at P=2, without conditional Fourier rearrangement. ∎

## Composition into energy and force, including actual differentiation

Fix c_k=4πe^{-|κ_k|²/(4α²)}/(V|κ_k|²)>0, k∈K, with c_{-k}=c_k. The exact truncated reciprocal energy is E_K=(1/2)Σ_kc_k|ρ_k|². The mesh reciprocal energy is E_M=(1/2)Σ_kc_k|z_k|². Its conservative force is
F_{M,i}=-q_iΣ_kc_k Re(conj(z_k)∇_xb_k(t_i)).
For P≥3 this is -∇_{x_i}E_M. For P=2 it is the branch derivative described above. This is a real vector: the real part already guarantees reality, even without pairing conjugate modes. A symmetric K gives the usual conjugate-paired implementation. The exact force is the same formula with z,b replaced by ρ,a.

Let B_k be either proved derivative bound, and H_k≥0 bound an explicitly specified alternative derivative/gather d_k through ||d_k-∇_xb_k||≤H_k. H=0 for analytic-window differentiation. The identity
conj(z_k)d_k-conj(ρ_k)∇a_k
=conj(z_k-ρ_k)∇a_k+conj(z_k)(∇b_k-∇a_k)+conj(z_k)(d_k-∇b_k)
proves, for each particle,
||F_{M,i}^{d}-F_{K,i}||≤|q_i|Q Σ_{k∈K}c_k[|κ_k|A_k+(1+A_k)B_k+(1+A_k)H_k].
The first term is source assignment/alias error; the second is derivative-window/gather alias error; the third is the separately declared mesh differentiation error. There is no assumption that differentiating aliases multiplies them only by the retained |κ_k|. The energy error is at most (Q²/2)Σ_kc_k A_k(2+A_k), from ||z|²-|ρ|²|≤|z-ρ|(|z|+|ρ|). Direct spectral evaluation at an independent query uses e^{iκ_k·x} instead of a spline gather and its alias force error is QΣ_kc_k|κ_k|A_k; it must not inherit the energy-gradient formula without its own derivative convention.

An FFT implementation of the energy-gradient gather is exact in real arithmetic: form λ_l=Σ_{k∈K}c_k conj(z_k)exp(-2πiΣ_rk_rl_r/M_r)/conj(D(k)). This is √N times the appropriate negative-sign unitary transform of the coefficient array padded by zeros. Then F_{M,i}=-q_i Re Σ_lλ_l∇_xw_l(t_i). Computing the reverse-mode action with the inverse transform instead uses conjugated coefficients and the positive-sign exponent; the real part is identical. The finite scalar-product identity verifies this gather normalization without relying on the source paper's different DFT convention. Its cost is O(N log N+n_particles P³) for fixed P on supported FFT grids; evaluating finite certificates is separate certified-arithmetic work, never a proof of accuracy from operation count.

Self convention: retain the usual Ewald constant -α/√πΣ_iq_i². Its derivative is zero. Mesh diagonal self terms can cause a grid-dependent spurious self force; the bound above includes them and must not call them zero. An explicit energy-consistent correction is
C_M=(1/2)Σ_iq_i²Σ_kc_k(|b_k(t_i)|²-1), E_M^{corr}=E_M-C_M.
Differentiate this exact finite correction as well; the force becomes the displayed formula with z_k replaced by z_k-q_i b_k(t_i). The exact target force is unchanged, since Re(conj(a_k)∇a_k)=0. The same proof gives the stronger bound with Q replaced by Q-|q_i|. For energy replace Q² by Q²-Σ_iq_i². This correction removes only mesh self distortion and preserves the exact reciprocal diagonal constant, as the '-1' makes explicit. Its arithmetic and evaluation costs are reported separately; no formula asserts this correction is free or automatically FFT-local. If no mesh self correction is chosen, return the uncorrected force with the original Q bound and explicit convention.

Real cutoff plus reciprocal cutoff bounds from the local shell lemmas are now added by the triangle inequality to the displayed finite mesh certificate. The exact reciprocal omitted modes are all k∉K, not only modes outside a radial cutoff unless K was chosen to contain every mode inside that radius. Off-source field and total force claims retain the approved collision-free evaluation/collision-status hypotheses. The smooth reciprocal certificate itself has no source collision singularity. Countable Choice remains in the Ewald theorem contract through Gaussian Poisson summation; it is not silently dropped because the subsequent mesh sums are finite.

Arithmetic can be kept separate and concrete. For the uncorrected force suppose actual computed values satisfy |ẑ-z|≤ε_z, ||d̂-d||≤ε_d, |ĉ-c|≤ε_c, and final accumulation error ≤ε_sum. Put Z=Q(1+A), D=|κ|+B+H. Modewise product expansion gives the arithmetic force contribution at most
|q_i|Σ_k{c_k[ε_{z,k}D_k+(Z_k+ε_{z,k})ε_{d,k}]+ε_{c,k}(Z_k+ε_{z,k})(D_k+ε_{d,k})}+ε_sum.
Here D_k in this last line is a norm controller, not the window denominator D(k); use a different symbol in eventual item notation. Corrected-self arithmetic applies the same product calculation to z-q_ib, including the actual subtraction and b enclosures. Outward interval arithmetic on the finite spread/FFT/solve/gather nodes, or the matching LIN-FFT proven operationwise enclosure, supplies these radii; an unavailable radius returns arithmetic-inconclusive. This does not claim an unproved floating-point error theorem for a particular FFT implementation. The returned enclosure, when successful, is the sum of real-tail, reciprocal-tail, source-alias, derivative-window, mesh-differentiation, self-correction arithmetic and other arithmetic terms. No empirical rms estimate is substituted.

The optional mesh self correction can retain fixed-order FFT scaling. Precompute the cyclic kernel γ_{l-m}=Σ_{k∈K}c_k exp(-2πiΣ_r k_r(l_r-m_r)/M_r)/|D(k)|² by one correctly normalized FFT. Then Σ_kc_k|b_k(t_i)|²=Σ_{l,m}w_l(t_i)w_m(t_i)γ_{l-m}. For each particle only its support-residue pairs contribute, at most P^6 before duplicate merging; differentiate the two finite window factors to obtain its force correction. The subtracted exact diagonal constant Σ_kc_k is independent of particle positions. This gives O(N log N+n_particles P^6) arithmetic for the corrected branch at fixed P, with the actual kernel and local-product rounding enclosures added. The equality follows by expanding |Σ_lw_l e^{-2πik·l/M}|² and exchanging only finite sums. It does not need an unproved fast diagonal evaluation assumption.
