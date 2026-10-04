# Exact electrovac solutions and their declared extensions

2026-10-04. Completed local research arguments; not production items, publication, independent acceptance, or observations. The pure mathematical solution statements take the following equations as mathematical hypotheses. Physical model adoption and SI interpretation are separate consumers. No global uniqueness, maximal-extension classification or censorship theorem is asserted.

<a id="X0"></a>
## X0. Precise conventions, quantities and verification calculus

Use smooth oriented time-oriented Lorentz four-manifolds with signature (−+++), Levi–Civita connection and curvature exactly as actual GR `gr-local-proofs.md` G0–G4: R(X,Y)Z=∇_X∇_YZ−∇_Y∇_XZ−∇_[X,Y]Z, Ric_bd=R^a_bad. Those complete local arguments and G6 Killing conservation were read. The component Ricci calculation is

Γ^a_bc=(1/2)g^{ad}(∂_bg_dc+∂_cg_db−∂_dg_bc),

Ric_ab=∂_cΓ^c_ab−∂_bΓ^c_ac+Γ^c_cdΓ^d_ab−Γ^c_bdΓ^d_ac.

All fields in this file are smooth on their stated open domains, and every coordinate differential maps an explicit chart. x⁰=ct has metres. Spatial length coordinates have metres, angles and expressly scaled coordinates are dimensionless. In length coordinates g_ab is dimensionless, Ric_ab has m^−2. F=dA on potential charts (global A is required only in exact sectors), F_0i=−E_i/c,F_ij=ε_ijk B_k; SI F has T, A has T m. Set α=√(4πG/(μ₀c⁴)), ℱ=αF, ℬ=αA. Geometrized ℱ_ab has m^−1 in length coordinates and ℬ_a is dimensionless; the geometric one-form ℬ has length units, the two-form ℱ likewise length units. With angle indices the component units inherit coordinate Jacobians. The geometrized vacuum equations for Λ=0 are

dℱ=0, d*ℱ=0, Ric_ab=2(ℱ_acℱ_b{}^c−g_ab ℱ_cdℱ^{cd}/4).

Trace makes scalar curvature zero, so Ric=Einstein tensor here. Hodge star on two-forms has *²=−1 with oriented volume; future unit tetrads use η=diag(−1,1,1,1). In a positively oriented length chart, (*ℱ)_ab=(1/2)√|detg| ε_abcd ℱ^{cd}. For antisymmetric ℱ, ∇_aℱ^{ab}=|detg|^−1/2∂_a(√|detg|ℱ^{ab}): G4 supplies the trace-connection identity, and Γ^b_acℱ^{ac}=0 by symmetry. The equivalent closed-dual identity follows by the alternating volume coefficient and the same coordinate differentiation. Closure of d(dℬ) follows by commuting smooth partial derivatives. Thus the calculations below check *all* equations, not a named metric alone.

Electric and magnetic geometric flux parameters on an oriented sphere S are q_e=(4π)^−1∫_S*ℱ and q_m=(4π)^−1∫_Sℱ, both in m. SI Q_e=(4πε₀c/α)q_e=√(4πε₀c⁴/G)q_e in C, and magnetic flux Φ_B=(4π/α)q_m in Wb. A magnetic *charge convention* additionally defining Q_m=Φ_B/μ₀ gives ampere metres; no universal SI magnetic-charge convention is silently imposed. μ₀ε₀c²=1 is adopted. G,c,μ₀ are physical constants/inputs of the coupled model, with m³ kg^−1s^−2,m/s,N/A² respectively. Positive physical mass m_* in kg is parametrized by M=Gm_*/c² in m; rotation parameter a=J/(m_*c) in m uses an adopted asymptotic angular-momentum interpretation of J in kg m²/s. The exact metric asymptotic coefficients below are proved; an independent ADM/Komar global definition is not substituted by merely naming M or J. Primitive data here are chosen model constants and metric/field ansatz parameters; derived quantities include flux, horizon radius, area and surface gravity. No observation of charged astrophysical black holes is claimed.

<a id="X1"></a>
## X1. Dyonic Reissner–Nordström verified from the scalar radial calculus

Choose real M,q_e,q_m, Q²=q_e²+q_m² and f(r)=1−2M/r+Q²/r². On R_t×J_r×S², J any open positive-r interval where f≠0, set

g=−f dt²+f^−1dr²+r²γ_S²,

ℱ=−q_e r^−2dt∧dr+q_m sinθ dθ∧dφ.

Here t=x⁰ is a length coordinate, and the sphere angular formula avoids its poles; γ_S² is the unit sphere induced metric. The block signature is Lorentz even when f<0 (the radial direction then timelike). Maxwell closure is direct; *ℱ=q_e sinθdθ∧dφ+q_m r^−2dt∧dr with orientation dt∧dr∧dθ∧dφ, so both two-forms are closed, and the sphere fluxes equal q_e,q_m exactly. The angular sphere form is globally smooth, though its magnetic potential need not be.

Actual GR Q1 supplies the complete Christoffel/Ricci calculation for arbitrary f; it is an algebraic identity on every nonzero-f interval, not restricted by the square-root frame used in its exterior interpretation. Specifically Ric_tt=f(f″/2+f′/r), Ric_rr=−f^−1(f″/2+f′/r), Ric_θθ=1−f−rf′, Ric_φφ=sin²θ Ric_θθ, and all mixed components zero. Inserting f′=2M/r²−2Q²/r³ and f″=−4M/r³+6Q²/r⁴ gives

Ric=diag(fQ²/r⁴,−Q²/(fr⁴),Q²/r²,Q²sin²θ/r²).

On f>0 use e⁰=√fdt,e¹=dr/√f,e²=rdθ,e³=r sinθdφ. Then ℱ=−(q_e/r²)e⁰∧e¹+(q_m/r²)e²∧e³. Raising with η gives twice the Maxwell stress diag(w,−w,w,w), w=Q²/r⁴, which transforms to exactly the displayed coordinate Ricci. The same component rational identities apply when f<0; alternatively continue through X2's smooth charts. This verifies Einstein–Maxwell, with no material source present on this manifold.

GR Q1's full curvature contraction gives K=f″²+4f′²/r²+4(1−f)²/r⁴, hence

K=48M²/r⁶−96MQ²/r⁷+56Q⁴/r⁸, Ric_abRic^{ab}=4Q⁴/r⁸.

For Q≠0 the latter diverges as r↓0. For Q=0,M≠0, K diverges. A C² nondegenerate metric extension at an approached r=0 point would have continuous finite curvature scalars there, contradiction. This proves absence of such regular extensions, not a regular point-source stress tensor at r=0. M=Q=0 is flat and has no such invariant obstruction. No distributional source on the removed locus is asserted.

<a id="X2"></a>
## X2. RN horizon crossings, bifurcation patch and exact causal escape scope

Set v=t+r_* with r_*′=1/f on each f≠0 interval. Then g=−f dv²+2dvdr+r²γ and ℱ=−q_e/r²dv∧dr+q_m area_S². These expressions define a smooth nondegenerate Lorentz metric and smooth field on R_v×(0,∞)×S², even at f=0, because the base determinant is −1. They agree by an explicit diffeomorphism off the roots. Their equations extend across each root by continuity of the residual tensors from the dense f≠0 set. Choose future orientation by l=−∂_r,n=∂_v+(f/2)∂_r; both are null, g(l,n)=−1 and l+n is a global timelike future field. This is a selected ingoing extension, not an assertion that it is the maximal RN spacetime.

For M>0,Q²>0,M²≥Q² let r_±=M±√(M²−Q²)>0. Their constant-r hypersurfaces are null since g^rr=f. They are Killing horizons generated by ξ=∂_v, since ξ♭=dr on f=0. At a simple root, d(g(ξ,ξ))=−f′dr=−2κξ♭ gives κ=f′(r_H)/2=(r_H−r_other)/(2r_H²), in m^−1; physical acceleration convention is c²κ. At extremality r_+=r_−=M, κ=0; the ingoing chart remains regular. Q=0 gives only the positive root2M; r=0 is excluded. If M²<Q² there are no real positive roots for M>0 and f>0 everywhere, so no constant-r horizon in this model.

For a simple positive root r_H with f′(r_H)>0, a *local bifurcate* extension is also explicit. Write f=(r−r_H)b(r), b(r_H)=2κ>0. The function 1/f−1/[2κ(r−r_H)] is smooth: its numerator b(r_H)−b(r) vanishes to first order by the integral mean-value formula. Integrate it to a smooth h(r), in m. Choose a fixed auxiliary coordinate scale ℓ_*>0 in m, define r_*=log(|r−r_H|/ℓ_*)/(2κ)+h(r) on each side of the root, and put K(r)=[(r−r_H)/ℓ_*]e^{2κh(r)}, K′(r_H)>0. Thus K,U,V are dimensionless, K′ has m^−1, and ℓ_* fixes a coordinate normalization rather than a new physical constant. The inverse theorem defines r smoothly from UV=−K(r) near UV=0. Define

g=−f(r)/(κ²K(r)) dU dV+r²γ,

ℱ=−q_e/[κr²K′(r)]dU∧dV+q_m area_S².

The ratio f/K=ℓ_* b e^−2κh is smooth positive. The metric dU dV coefficient has m², and the field dU∧dV coefficient has m, matching X0's inherited component units. The metric cross product uses g_UV half its coefficient and has negative determinant. On U<0,V>0, U=−e^−κ(t−r_*),V=e^κ(t+r_*) gives exactly X1, and dt∧dr=(κK′)^−1dU∧dV by direct differentiation. Equations again extend by smoothness. U=V=0 is a regular bifurcation two-sphere. This establishes an actual local two-sided horizon/bifurcation chart without claiming the entire infinite RN extension diagram, Cauchy-horizon structure or rough maximality. The exponential construction needs κ≠0 and fails at extremality; the regular X2 ingoing chart does not.

Define escape on the selected ingoing model as a future piecewise C¹ causal curve eventually reaching arbitrarily large r. Every future causal tangent is αl+βn+W with W sphere-tangent, α,β≥0 and 2αβ≥g(W,W); this follows by inner products with the two future null vectors and its norm. Therefore v′=β≥0 and r′=−α+βf/2≤βf/2. If β=0 then W=0 and r′≤0. Near a root the Lipschitz bound on f and scalar integrating-factor inequality for the radial upper barrier preclude outward crossing from below r_+ in finite v; vertical l segments decrease r. For explicit detail on a β>0 interval, w=r_+−r≥0 satisfies dw/dv≥−Cw while r is below the root, so w(v)≥w(v_0)e^−C(v−v_0)>0. Piecewise segments patch and compact segments have finite v. Thus no point with r≤r_+ can escape to r>r_+. Every point with r>r_+ escapes along n, because dr/dv=f/2>0; its only possible finite limiting radius would have f=0, impossible above r_+, and at large r f→1 giving r→∞. Hence the boundary of this explicitly defined escape set is r=r_+. This result is about the stated extension and escape definition, not an unproved conformal-infinity theorem or a censorship assertion. With superextremal f>0, the same radial n paths escape from every r>0; singular endpoints are still absent from the manifold.

<a id="X3"></a>
## X3. Kerr–Newman: full exact algebra and reproducible tensor verification

Let M,a,q∈R. Put Σ=r²+a²cos²θ, Δ=r²−2Mr+a²+q², B=sin²θ, R=r²+a². On any open Boyer–Lindquist domain with Σ>0,Δ≠0,0<θ<π, use length t,r and angleφ:

g=−Δ/Σ(dt−aB dφ)²+Σ/Δ dr²+Σdθ²+B/Σ(Rdφ−a dt)²,

ℬ=−qr/Σ(dt−aB dφ), ℱ=dℬ.

The metric/field coefficients are independent of t,φ, giving their Killing fields. On Δ>0 its displayed tetrad e⁰=√(Δ/Σ)(dt−aB dφ),e¹=√(Σ/Δ)dr,e²=√Σdθ,e³=√(B/Σ)(Rdφ−a dt) has invertible determinant and signature −+++. The inverse and determinant computation below also prove nondegeneracy on other Δ≠0 patches; continuation in X4 supplies the same Lorentz signature.

Here is a complete finite algebra carrier, rather than a citation to a named rotating metric. Change y=cosθ, b=1−y²; this is a smooth coordinate diffeomorphism on the pole-free patch. Then Σ=r²+a²y², and the only nonzero entries of g are

g_00=−(Δ−a²b)/Σ, g_03=−ab(R−Δ)/Σ, g_33=b(R²−a²Δb)/Σ, g_11=Σ/Δ, g_22=Σ/b.

The inverse has g^00=−(R²−a²Δb)/(ΣΔ), g^03=−a(R−Δ)/(ΣΔ), g^33=(Δ−a²b)/(ΣΔb), g^11=Δ/Σ,g^22=b/Σ. Multiplication gives identity and the determinant −Σ². Potential entries are ℬ_0=−qr/Σ,ℬ_3=qra b/Σ,ℬ_1=ℬ_2=0. Every field component is obtained by ∂_iℬ_j−∂_jℬ_i, and every Ricci entry by X0's explicitly displayed finite sums.

`check-kn.py` implements precisely these sums using exact rational functions over Q(r,y,M,a,q). It differentiates by the quotient/product rules, raises the two field indices, checks all four ∑_i∂_i(Σℱ^{ij})=0, builds all connection entries, and independently computes every Ricci component from the metric. The zero Einstein residual is not preinserted: the script constructs the Maxwell stress from ℱ and g^−1 *after* Ricci evaluation. Each check uses equality of rational functions, i.e. a polynomial zero numerator after cross multiplication, without numerical sampling or a parameter specialization. Exact integer/rational arithmetic and finite polynomial multiplication/division preserve the stated rational identities. Every denominator is nonzero on the chosen chart, so those identities imply ordinary smooth-function identities. `kn-check.json` records the actually run script hash, SymPy version and results. The algorithm itself is a finite full derivation of the component tensor calculation; the library's correctness is not an independent mathematical audit.

For reviewable compact intermediate outputs let w=q²/Σ². Computed Ricci has only

Ric_00=w(Δ+a²b)/Σ, Ric_03=−wab(Δ+R)/Σ, Ric_33=w(a²Δb²+bR²)/Σ, Ric_11=−wΣ/Δ, Ric_22=wΣ/b.

The script separately verifies these five expressions against its metric calculation. In the exterior tetrad they are diag(w,−w,w,w). Direct differentiation of the potential gives

ℱ=−E e⁰∧e¹+B_m e²∧e³, E=q(r²−a²cos²θ)/Σ², B_m=2qar cosθ/Σ².

For example ℱ_rt=E, ℱ_θt=−2qra²sinθcosθ/Σ², ℱ_θφ=2qraR sinθcosθ/Σ²; the radial angular term is −a sin²θ E. E²+B_m²=q²/Σ²=w by expanding (r²−a²y²)²+4a²r²y²=Σ². Raising with η gives twice the Maxwell stress diag(w,−w,w,w), so the displayed Ricci is exactly the Einstein–Maxwell RHS. The scalar trace is zero. The independent script checks also give

ℱ_abℱ^{ab}=−2q²(r⁴−6a²r²y²+a⁴y⁴)/Σ⁴, Ric_abRic^{ab}=4q⁴/Σ⁴.

Thus all vacuum equations are fully verified on the stated domain, including the field, stress and normalization. q=0 is the vacuum rotating limit; a=0 gives X1's electric RN exactly; a=q=0 gives actual GR Q1 Schwarzschild. These limits follow by component substitution and not from uniqueness theorems.

<a id="X4"></a>
## X4. Rotating horizon extension, generators and precisely scoped global claims

Off Δ=0 integrate dv=dt+R/Δdr and dψ=dφ+a/Δdr. These are locally exact because their radial coefficients depend only on r, and their triangular Jacobian determinant is1. Let H=2Mr−q². Substitution, also checked in all16 components by `check-kn.py`, gives

g=−(1−H/Σ)dv²+2dvdr−2a sin²θ drdψ−2a sin²θ(H/Σ)dvdψ+Σdθ²+sin²θ[R+a²sin²θ H/Σ]dψ².

The transformed potential has an extra qr/Δdr term; it is a closed, locally exact radial one-form. Remove it by a local gauge primitive to obtain ℬ_in=−qr/Σ(dv−a sin²θdψ). This new smooth formula and its exterior derivative define the horizon-crossing field without a pole. The determinant in y is still −Σ², so the ingoing metric/field extend over Δ=0 wherever Σ>0; tensor residuals extend by continuity from Δ≠0. These definitions also permit negative r away from Σ=0, but the principal physical domain here is r>0.

Sphere-axis extension is not presumed from a divergent angular chart. On the sphere embedded with coordinates (X,Y,Z), sin²θdψ=X dY−Y dX is a globally smooth one-form β and cosθ=Z. Write the angular part as Σγ_S²+a²(1+H/Σ)β² and the mixed terms with β. This reproduces the displayed coefficients and gives globally smooth tensors on the full sphere, including the axes. The potential is −qr/Σ(dv−aβ). On r>0, Σ>0 everywhere; nondegeneracy and signature persist across the axes by these smooth formulas and the standard round-sphere charts. A global timelike orientation field on the pole-free chart is N=∂_v−(1+f_0²)∂_r/2 with f_0=1−H/Σ: g(N,N)=−(f_0²+f_0+1)<0. ∂_v,∂_r extend over the axes, so does N.

If M>0 and M²≥a²+q²>0, r_±=M±√(M²−a²−q²)>0. Since g^rr=Δ/Σ, each r_H root is a smooth null hypersurface, including the coincident extremal root. Set Ω_H=a/(r_H²+a²) and χ=∂_v+Ω_H∂_ψ. At the horizon, direct substitution gives χ♭=(Σ_H/R_H)dr, so χ is null, normal and future-directed (g(χ,N)<0). The Killing field χ therefore makes this a Killing horizon. Its norm off the horizon is

χ²=−Δ/Σ(1−a sin²θ Ω_H)²+(sin²θ/Σ)(RΩ_H−a)².

Differentiate at r_H, keeping Ω_H fixed: the second squared term and its first derivative vanish, leaving dχ²=−Δ′(r_H)Σ_H/R_H² dr. Comparing with −2κχ♭ gives κ=Δ′(r_H)/(2R_H)=(r_H−r_other)/(2R_H). It is independent of θ and zero at extremality. Restricting to a v-constant horizon two-sphere gives metric Σ_Hdθ²+(R_H²/Σ_H)sin²θdψ², whose area density is R_Hsinθ; thus area=4πR_H, in m². The electric potential contraction is −ℬ_in(χ)=qr_H/R_H, also constant on that sphere. Its corresponding SI voltage convention is (c/α)qr_H/R_H.

These statements prove regular null/Killing horizons and their exact local invariants. An unrestricted maximal analytic extension, global event-horizon uniqueness, Cauchy-horizon stability, no-hair and censorship do not follow from Δ=0 and are not asserted. In particular, the external review's shortcut that every null ray is a linear combination of only two principal null vectors omits angular screen components; it is not used as a proof of global causal escape here. RN's selected global escape result is established separately in X2; X4a below supplies the corresponding fully proved escape boundary on the chosen ingoing KN manifold. If M²<a²+q² there is no real Δ root; this is a proved algebraic fact, not a censorship counterexample produced by collapse.

The stationary Killing vector ∂_v=∂_t has norm −(r²+a²cos²θ−2Mr+q²)/Σ. Wherever the discriminant is nonnegative its zero surfaces are r_E±(θ)=M±√(M²−q²−a²cos²θ). The *ergoregion* is defined here as where that specified asymptotic time-translation field is spacelike; no fixed-r,θ,ψ worldline along it is timelike there. This differs from the null horizon: at r_H and away from axes, ∂_v is spacelike if a≠0, while χ is the null generator. Along any affine geodesic g(∂_v,T) and g(∂_ψ,T) are conserved by actual GR G6; this is a test-trajectory statement, not an asserted global gravitational-energy conservation law.

For q≠0, Ric²=4q⁴/Σ⁴ diverges as r→0,cosθ→0. Thus no approached ring-locus point can be appended as a regular C² nondegenerate metric point. Using the oblate spatial map X=√(r²+a²)sinθ cosφ,Y=√(r²+a²)sinθ sinφ,Z=r cosθ, that excluded locus projects to X²+Y²=a²,Z=0, a ring if a≠0. This map labels the location but is not asserted to be a globally injective chart through the disk. No regular ring matter/charge distribution is deduced. For q=0 this Ricci invariant vanishes; no charged-invariant proof is used for vacuum Kerr's singularity. Its stronger Weyl-extension statements require their own calculation.

<a id="X5"></a>
## X5. Duality, flux, gauge patches and topology

For any smooth electrovac field ℱ and constant β, define ℱ_β=cosβ ℱ+sinβ *ℱ. Because *²=−1 and both forms are closed, dℱ_β=d*ℱ_β=0. Maxwell stress is unchanged. A full algebra proof is pointwise: in a Lorentz orthonormal tetrad write ℱ_0i=−E_i and ℱ_ij=ε_ijkB_k. Hodge sends E→−B,B→E, hence E_β=Ecosβ−Bsinβ,B_β=Bcosβ+Esinβ. Expanding proves invariance of E²+B², each E_iE_j+B_iB_j and E×B. These are all stress components (energy, momentum and spatial stress), from raising η in X0's formula, so tensor invariance follows. No quantum duality or magnetic-monopole existence evidence is asserted.

For the electric KN family, sphere electric flux is q and magnetic flux0. The latter is zero because its potential is globally smooth on a full fixed-r sphere (X4), so integral of its exact field is zero. For electric flux, d*ℱ=0 makes the fluxes on any two fixed-v,r spheres equal by Stokes on their finite annulus. As r→∞, ℬ_0=−q/r+O(r^−3), ℬ_ψ=qa sin²θ/r+O(r^−3); metric inverse asymptotic substitution in the star formula gives (*ℱ)_θψ=q sinθ+O(r^−2) uniformly in sphere-regular frames. Integrate and pass this uniform limit: every sphere has flux4πq. The rotation gives q_e=qcosβ,q_m=qsinβ, while the metric depends on q²=q_e²+q_m². This supplies dyonic KN and RN with real classical flux parameters. No charge quantization follows merely from this local classical system.

If q_m≠0, a globally defined one-form potential on the entire sphere-containing manifold is impossible: restricting a purported ℱ=dℬ to a closed sphere and applying finite smooth-chain Stokes would give ∫ℱ=0, contrary to4πq_m. The field remains closed. For RN, explicit north/south potentials are

ℬ_N=−q_e/r dt+q_m(1−cosθ)dφ,

ℬ_S=−q_e/r dt−q_m(1+cosθ)dφ.

They are smooth at their respective poles: (1−cosθ)dφ=β/(1+cosθ) using X4's smooth β, and the south expression analogously. On the overlap their difference is2q_m dφ, locally the derivative of2q_mφ on angular cuts. Its nonzero overlap-circle integral shows why one global real gauge function does not glue them. This is an explicit closed-not-exact counterexample; it does not assume a regular magnetic source at the removed center. A U(1)-bundle/integrality condition would be an additional framework whose normalization/quantization must be supplied separately.

Flux conservation between homologous spheres uses only dℱ=d*ℱ=0 and the actual finite-chain Stokes supplier of GR G4. In a source region or with a nonzero side flux the conclusion changes; arbitrary noncompact flux charges require convergence hypotheses. This limited, precisely justified conservation is the one used throughout this module.

<a id="X6"></a>
## X6. Harmonic Majumdar–Papapetrou electrovacuum and actual single-center identification

Let D⊂R³ open, H:D→(0,∞) smooth and harmonic for the ordinary Euclidean Laplacian, σ=±1. On R_t×D, t=x⁰ in m, choose

g=−H^−2dt²+H²δ_ij dx^i dx^j, ℬ=σ(H^−1−1)dt.

H is dimensionless and chosen model data; its spatial derivatives have inverse-length units. This is smooth nondegenerate −+++ with future H∂_t and no shift. The field has ℱ_i0=−σH_i/H², ℱ^{i0}=σH_i/H² and √|detg|=H². Thus every vacuum Maxwell density equation is zero: the temporal component is σΔH=0 and the spatial components have only zero time derivatives. dℱ=0 follows from the potential. In the tetrad e⁰=H^−1dt,e^i=Hdx^i, E_i=−σH_i/H², B=0.

The canonical *shared* mathematical supplier `lem-emg-conformastatic-curvature`, matter-limits/mathematical-proofs.md#ml07, was read fully, including all nine spatial connection products. It proves for arbitrary positive H

Ric_00=H^−6|∇H|²−H^−5ΔH, Ric_0i=0,

Ric_ij=−2H_iH_j/H²+δ_ij(|∇H|²/H²−ΔH/H).

For ΔH=0 these equal the Maxwell RHS from the preceding electric components: coordinate00=H^−6|∇H|² and ij=−2H_iH_j/H²+δ_ij|∇H|²/H². Thus this family fully satisfies Einstein–Maxwell. The mathematical curvature lemma has no dependence on dust/physical assumptions; its unique canonical home is the matter worker's earlier mathematical page. A harmonic hypothesis cannot be discarded: the displayed density/Ricci residuals show that general positive nonharmonic H is not electrovacuum and needs actual matter, not a mislabelled vacuum solution.

A finite multicenter exterior is explicit. For distinct x_A∈R³ and m_A>0 in m let D=R³\{x_A}, H=1+∑m_A/|x−x_A|. Positivity and smoothness hold there. For z≠0, ∂_i|z|^−1=−z_i|z|^−3 and ∂_i²|z|^−1=−|z|^−3+3z_i²|z|^−5; summing gives0. Therefore H is harmonic away from the excluded centers, and the above proof gives a genuine stationary multicenter electrovac exterior. Its geometric electric flux is −σ(4π)^−1∫∇H·n dS: this follows directly from the metric-raised field and star volume density. On a small Euclidean coordinate sphere enclosing exactly one center, the self-term integrates to4πσm_A; every other harmonic term has zero flux by the divergence theorem on that smooth ball. Thus the flux q_A=σm_A, and a large enclosing sphere has q_total=σ∑m_A. These are fluxes through regular surfaces, not definitions of regular center matter.

For a single center set ρ=|x−x_1| and R=ρ+m_1. Then H=R/(R−m_1), dR=dρ, and substitution gives exactly X1 with M=m_1, q_e=σm_1,q_m=0, f=(1−m_1/R)², plus potential ℬ=−σm_1/R dt. Hence the single-center exterior is extremal RN, and its horizon-crossing extension is already proved by X2. For multiple centers this module claims only the smooth exterior, fluxes and static solution; smooth individual horizon extensions, geodesic completeness or global equilibrium stability require separate proofs and are not silently inferred from harmonic poles.

<a id="X7"></a>
## X7. Bertotti–Robinson products and a proved near-horizon scaling limit

Take L>0 in m, dimensionless τ,z and a positive open interval branch of f(z)=z² or f(z)=1+z². Define on R_τ×J_z×S²

g=L²[−f(z)dτ²+f(z)^−1dz²+γ_S²], ℱ=−L dτ∧dz.

The Lorentz volume is L⁴sinθdτ dzdθ dφ, and *ℱ=L area_S². Thus dℱ=d*ℱ=0, q_e=L,q_m=0. Direct two-dimensional connection calculation gives Γ^τ_τz=f′/(2f),Γ^z_ττ=ff′/2,Γ^z_zz=−f′/(2f). The Ricci components are Ric_ττ=ff″/2=f,Ric_zz=−f″/(2f)=−1/f. The unit sphere connection/Ricci are actual GR Q1's angular calculation, Ric_sphere=γ. No mixed connections occur in a direct product because each factor coefficient depends only on its own coordinates. Hence Ric equals −L^−2 times the base metric on the Lorentz two-factor, +L^−2 times the sphere metric, and scalar curvature is0. In the product tetrad ℱ_01=−1/L, so twice Maxwell stress is diag(L^−2,−L^−2,L^−2,L^−2), exactly this Ricci. The product is a verified electrovacuum. Its sphere radius is constant, so X1's varying areal-radius coordinate cannot be used as a global coordinate here. q_m≠0 versions follow by X5 duality. The f=1+z² metric is defined for all real z and has no zero-f chart pole; no maximal-geodesic-completeness statement or global AdS causal theorem is inferred merely from that formula.

An exact conditional limit from extremal RN supplies the f=z² positive patch. In X1 with M=q_e=L,q_m=0, pull back by r=L+λR,t=T/λ with λ>0, and restrict to R>0 on compact coordinate sets. Since f=λ²R²/(L+λR)²,

g_λ=−R²/(L+λR)² dT²+(L+λR)²/R² dR²+(L+λR)²γ,

ℱ_λ=−L/(L+λR)² dT∧dR.

The rational coefficients and every finite derivative converge uniformly on compact R>0 domains to −R²/L²dT²+L²/R²dR²+L²γ and −L^−1dT∧dR. Denominators stay uniformly away from zero there, so this is C∞_loc convergence, not only a formal leading term. Set T=Lτ,R=Lz to obtain the f=z² product above. This proves a real near-horizon coordinate scaling limit with domains/maps stated. It is not a global convergence across the horizon, an asymptotically flat identification of the product, or a universal near-horizon uniqueness theorem. Parameter λ is dimensionless, T,R are lengths.

<a id="X8"></a>
## X8. Exact Einstein–Maxwell plane waves and a scalar-invariant counterexample

On R⁴ with length coordinates u,v,x,y use g=−2du dv+dx²+dy²+H(u,x,y)du². Its determinant is−1, inverse entries g^uv=−1,g^vv=−H,g^xx=g^yy=1,g^uu=0. It is smooth −+++ for any smooth H: the (u,v) block has negative determinant and the transverse directions are positive. Choose smooth p,q:R→R in m^−1, potential ℬ=−[p(u)x+q(u)y]du and field ℱ=p(u)du∧dx+q(u)du∧dy. Closure is direct since every coefficient derivative in u wedges with du again. Raised components only involve v and the transverse indices, so each ∂_aℱ^{ab} is zero: p,q depend only on u, but the raised u components vanish. Maxwell is fully checked, ℱ²=0 and only twice-stress_uu=2(p²+q²) is nonzero.

The exhaustive nonzero connection types are Γ^v_uu=−H_u/2,Γ^v_ui=Γ^v_iu=−H_i/2,Γ^i_uu=−H_i/2, i=x,y. In the Ricci sum every trace Γ^a_ab is zero; the quadratic products vanish because a needed matching upper-u or lower-v entry is absent. The only derivative trace is Ric_uu=−(H_xx+H_yy)/2; all other components vanish by the same exhaustive connection list. Choose

H=−(p²+q²)(x²+y²)+h(u,x,y), h_xx+h_yy=0.

Then Ric_uu=2(p²+q²), verifying Einstein–Maxwell. This is a broad actual smooth null-field family, with arbitrary smooth wave profiles and transverse harmonic addition. H is dimensionless, p²x² is dimensionless; no sources or Λ are present. A global future timelike field is N=∂_u+(H+1)∂_v/2, norm−1. This provides time orientation explicitly rather than treating a null coordinate as an observer clock.

Its nonzero curvature components are R_uiuj=−H_ij/2 and their symmetry partners, by the displayed connection list. Raising any u index uses g^uv, but every curvature component with a v index is zero. Thus all quadratic curvature contractions, including K and Ric², vanish. Nevertheless for constant p≠0,q=0,h=0, Ric_uu=2p²≠0 and R_uxux=p²≠0. Hence vanishing ℱ², scalar Ricci, Ric² and Kretschmann does not imply zero electromagnetic field or flat metric. This is a completed counterexample, not an inference that every scalar invariant diagnoses singularity or regularity. The null-wave family is not asymptotically flat in all spatial directions and carries no claimed finite ADM energy.

<a id="X9"></a>
## X9. Useful exact examples with qualified physical interpretations

For dyonic RN outside its outer root, f>0 and stationary observers n=f^−1/2∂_t are defined with g(n,n)=−1. A future affine null geodesic T has C=−g(T,∂_t)>0 constant by actual G6. Under the earlier geometric-optics/ideal-clock premise, frequency is proportional to −g(T,n)=C/√f, so ω_R/ω_E=√(f(r_E)/f(r_R)). This is a conditional observer formula, without invented measurements; it does not apply to a stationary observer at f=0 or inside f<0.

Equatorial null geodesics have ℰ=f t′ and ℓ=r²φ′ conserved, and θ=π/2,θ′=0 is preserved by the angular ODE since its θ-force vanishes there. Null normalization gives r′²=ℰ²−fℓ²/r². Circular null orbits with ℓ≠0 require (f/r²)′=0, i.e. r²−3Mr+2Q²=0. Thus positive roots r_γ±=(3M±√(9M²−8Q²))/2 supply candidate circular radii only where f>0 and normalization admits the corresponding ℰ. For 0≤Q²≤M² and M>0, the outer root is >r_+: writing x=√(M²−Q²)∈[0,M], r_γ+=(3M+√(M²+8x²))/2>M+x, since √(M²+8x²)>2x−M (if the right side≤0 immediate, otherwise squaring leaves4x(x+M)>0). The radial ODE then constructs the circular solution with ℰ²=fℓ²/r² and zero radial acceleration. At Q²=M² the *inner* formal root r_γ−=M lies on the horizon and is not a stationary circular orbit in the f>0 exterior class. This example catches an illegal division by f at extremality. Full perturbative orbit stability and charged Lorentz-force orbits are not part of this elementary calculation.

X4 supplies a rotating counterexample to conflating an ergosurface and horizon: for a≠0, subextremal parameters and θ=π/2, r_E+=M+√(M²−q²)>M+√(M²−a²−q²)=r_+, while the rotation-axis surfaces coincide. X7 supplies a constant-radius electrovac product that a non-null-gradient areal-radius classification cannot cover. X6 supplies actual multicenter exact data that do not come from spherical symmetry. X8 supplies nonflat null fields with vanishing standard scalar invariants. Each example's mathematical verification precedes its physical model interpretation; none is an observed phenomenon or a general uniqueness/censorship result.

<a id="X4a"></a>
## X4a. One-way outer horizon in the specified ingoing KN model

The complete selected model is M_in=R_v×(0,∞)_r×S² with X4's smooth metric, field and future orientation N. Assume M>0,M²≥a²+q²>0, with outer positive root r_H=r_+. Define escape as in X2 by future piecewise C¹ causal paths eventually reaching arbitrarily large r. The escape set is exactly r>r_H, proved here without a missing screen-direction argument or an unspecified maximal extension.

For exterior escape, let l=−∂_r and n=(R/Σ)∂_v+(Δ/(2Σ))∂_r+(a/Σ)∂_ψ. Direct substitution in X4's metric gives g(l,l)=g(n,n)=0,g(l,n)=−1. Since g(l,N)=−1, l is future, hence n also future (in a Lorentz tetrad a null vector paired negatively with a future null vector lies in the future component). Its integral path has θ constant, dr/dv=Δ/(2R)>0 for r>r_H and dψ/dv=a/R, with dv/ds=R/Σ>0. A finite limiting radius above r_H is impossible since Δ/(2R) is then bounded below by a positive constant. At large r its limit is1/2, so r→∞ as v→∞. These are actual smooth future null escape paths; they need not be affine geodesics for the definition of causal escape.

To rule out crossing from below, a precise elementary cone-comparison lemma is needed. In a collar of r_H take τ=v−r. Its inverse-metric norm is

g^−1(dτ,dτ)=(a²sin²θ−2R+Δ)/Σ.

At the horizon this is strictly negative for every θ, and compactness of S² gives one collar on which it stays negative. Also dτ(N)=1+(1+f_0²)/2>0, so τ increases strictly on future causal vectors. On r=r_H, dr= (R_H/Σ_H)χ♭, with future null χ; consequently dr(Z)≤0 for every future causal Z, since in a Lorentz basis the inner product of two future causal vectors is≤0 by Euclidean Cauchy–Schwarz.

Here is the full uniform continuation bound for the cone, rather than a sign-at-one-point shortcut. Set n_τ=−∇τ/√(−g^−1(dτ,dτ)), a smooth future unit timelike field on the collar. On finitely many sphere charts choose smooth orthonormal screen frames e_i by actual GR G2. Every nonzero future causal vector, normalized by dτ(Z)=1, has the form

Z=(n_τ+∑b_i e_i)/dτ(n_τ+∑b_i e_i), |b|≤1.

The denominator is strictly positive uniformly on each compact chart subpatch and the closed Euclidean unit ball: in an n_τ-adapted tetrad dτ is its positive temporal covector, so the screen evaluations vanish and dτ(n_τ)>0. The numerator/denominator coefficients are smooth in r and the sphere coordinates; stationarity removes v dependence. Their radial derivatives are uniformly bounded on the compact collar/subpatch/ball. At r=r_H, dr(Z)≤0 for every b. Holding b and the sphere coordinates fixed and applying the mean-value bound therefore gives dr(Z)≤C|r−r_H|, with a common C from the finite cover. This proves the needed bound even when the causal direction has an angular screen component.

Reparameterize any nonconstant future causal curve in the collar by τ (piecewise C¹; a zero tangent segment can be removed). Then r'(τ)≤C|r−r_H|. Starting at or below r_H, it cannot cross above. To prove this without an unstated nonsmooth chain rule, compare with the strict upper barrier r_H+ε exp[(C+1)(τ−τ_0)] on a compact parameter segment; at a first contact above r_H the curve's left-hand derivative bound is at most Cε exp[…], strictly below the barrier derivative. The same left-sided argument applies at a piecewise-smooth joining point. Hence no first contact occurs. Let ε↓0 to conclude r≤r_H throughout; for a curve initially below, the barrier still starts above it. A path crossing to r>r_H would have a finite compact segment in this collar, contradicting the result. Thus no r≤r_H point escapes; together with the explicit exterior paths, the escape boundary is r=r_H. ∎

This is a proved global causal statement on *M_in with the declared escape observable*. It does not classify every maximal KN extension or identify the inner null surface as a Cauchy horizon for unspecified initial data. It supplies no collapse formation, nonlinear stability, generic uniqueness or censorship theorem. The same lemma also rigorously closes X2's outer RN barrier, including curves that start exactly on the horizon.
