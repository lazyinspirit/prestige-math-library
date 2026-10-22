# Confirmed failure of the linear smoothed-kernel comparison

This is an offcanonical mathematical finding, not an engine transition or source acceptance. The affected current Statement is `lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound`, with its direct and indirect consumers. The full primary de Hoop et al., arXiv:2511.20361, PDF pp.16–18, proves a square-root interpolation estimate instead. The following independent argument proves that replacing that exponent by one is impossible in the stated uniform class.

## Fixed admissible geometry and perturbations

Take the disk Ω of radius a<1/2 centered at (1/2,1/2), and let Ω′ be a concentric strictly smaller disk. Fix 0<c<b<1 with ab inside Ω′. Choose m<1<M and R>|Ω|. These are allowed fixed parameters. For every positive integer N there is a nonzero real smooth function H_N compactly supported in (c,b) such that

    m_n := ∫_0^1 H_N(s)s^(2n−1) ds = 0,  1≤n≤N.

Indeed, take N+1 smooth nonzero bumps with disjoint supports inside (c,b) and a nonzero vector in the kernel of the N by (N+1) moment matrix. Disjointness ensures the resulting function is nonzero. Not all the remaining moments vanish: after t=s², their vanishing would say that the continuous compactly supported function H_N(√t) is orthogonal to every polynomial. Polynomials uniformly approximate this function (for example its Bernstein polynomials on [0,1]); hence its squared integral would vanish, a contradiction. All moment sequences decay geometrically, since |m_n|≤||H_N||∞ b^(2n)/(2n).

Set h_N(x)=H_N(|x−(1/2,1/2)|/a). For each fixed N, γ_t=1+t h_N belongs to the SAME class X_2(R) for every sufficiently small |t|: it is smooth, supported in Ω′ relative to the background, and strict ellipticity and the BV margin follow from

    ||γ_t||_1 ≤ |Ω|+|t| ||h_N||_1,
    TV(γ_t)=|t|∫Ω |∇h_N|.

The allowed small interval may depend on N, which is harmless: the asserted comparison constant depends only on the fixed class, not on N or t. Dimension two has r_d=0 in the actual observation Definition, so the observation is the unweighted mean-zero NtD operator itself.

## Actual operator derivatives, including Hilbert–Schmidt differentiability

Let e_n(θ)=(2πa)^(−1/2)exp(inθ), n∈Z\{0}, the complex orthonormal mean-zero boundary modes. The real sine/cosine basis has exactly the same norms and multiplicity two. For unit conductivity the harmonic Neumann solution is

    u_n(r,θ)=(a/|n|)(r/a)^|n| e_n(θ).

The energy differentiation identity gives

    <R′_1[h_N]e_n,e_j> = −∫Ω h_N ∇u_n·overline(∇u_j).

Radial symmetry kills n≠j, and direct integration gives the eigenvalue

    ρ_n=−2a m_|n|.

Here this derivative is genuinely in Hilbert–Schmidt norm, not only weakly. Write U={|x−center|<ab}, V=L²(U;R²), E=H¹(Ω)/R with energy norm, P:L²_0(∂Ω)→E for the background Neumann solution, J:E→V for restricted gradient, and G:V→E defined by

    (Gv,w)_E=∫_U v·∇w.

These maps are bounded by the weak energy estimate and the definition of G. Q=JP is Hilbert–Schmidt, since the displayed harmonic solutions satisfy

    ||Qe_±n||²= a b^(2n)/n,
    Σ_{n≥1}2a b^(2n)/n <∞.

Let H denote multiplication by h_N on V. The perturbed weak equation gives

    J u_t=(I+t JGH)^(−1)Qf,
    R_t−R_0=−t Q* H(I+t JGH)^(−1)Q.

The second identity follows by testing the equation for u_t−u_0 with the background solution for a second boundary flux. For |t| ||JGH||<1/2 the inverse has a norm-convergent Neumann series. Thus

    ||(R_t−R_0)/t +Q*HQ||_HS ≤ C_N |t|,

using ||AMB||_HS≤||A||op||M||op||B||_HS. This proves the required derivative in the actual kernel norm; the kernel/HS isometry is the already explicit observation convention. Consequently

    ||R′_1[h_N]||²_HS=8a² Σ_{n>N}|m_n|².

For completeness the Dirichlet derivative is an operator-norm derivative between H^(1/2)/R and its mean-zero dual. Use a bounded harmonic Dirichlet lifting D from that trace space to H¹(Ω), and the energy Riesz inverse on H¹_0(Ω). The zero-trace correction w_t obeys w_t=−t(I+tB_h)^(−1)L_hD, where (B_hv,w)=∫h∇v·∇w and (L_hDf,w)=∫h∇Df·∇w. All these maps are bounded by ||h||∞ and the trace lifting bound. Substitution in the weak DN form therefore gives its usual first variation plus O_N(t²) in operator norm. Equivalently, separation of variables yields the same diagonal derivative

    λ′_n = −(n/a)²ρ_n = (2n²/a)m_n.

## Uniform quotient Sobolev comparison and contradiction

On the circle choose the spectral norm ||f||²_H^(1/2)=Σ_n (1+n²/a²)^(1/2)|f_n|². Taking the quotient by constants deletes n=0 because that basis is orthogonal in this norm; the mean-zero dual norm has inverse weights. Thus the DN derivative norm is EXACTLY

    D_N=sup_{n≥1} (2n²/a)|m_n|/(1+n²/a²)^(1/2).

Since n/(a sqrt(1+n²/a²))=1/sqrt(1+a²/n²)≥1/sqrt(1+a²),

    D_N≥2 M_N/sqrt(1+a²),    M_N=sup_{n>N} n|m_n|>0.

Every fixed alternative smooth-boundary trace/quotient norm is uniformly equivalent to this norm; those equivalence constants depend on the disk and norm convention, NEVER on N. Therefore the conclusion below holds for the actual quotient trace norm as well.

On the other hand,

    ||R′_1[h_N]||²_HS ≤8a² M_N² Σ_{n>N} n^(−2) ≤8a² M_N²/N.

Hence

    D_N / ||R′_1[h_N]||_HS ≥ sqrt(N)/(a sqrt(2(1+a²))) →∞.

If the registered nonlinear LINEAR comparison held for all pairs in this fixed X_2(R), apply it to γ_t and γ_0=1, divide by |t| and let t→0 using the TWO norm derivatives just proved. It would give D_N≤C||R′_1[h_N]||_HS for every N, contradicting the displayed divergence. This is a counterexample to a uniform linear constant, not to uniqueness, logarithmic inverse stability, or square-root interpolation.

## Necessary repair scope

Use the primary's square-root bound δ_DN≤C s^(1/2), where s=||κ_γ−κ_γ0||_L² is the kernel distance. Transfer the inverse modulus to ω(C sqrt(s)); prove its concavity and its full Hilbert extension locally. Propagate this necessary interface change through every actual direct/indirect consumer. Keep the full conductivity class, continuum noise sets, generalized-FNO approximation conclusion and deterministic noise term. This scope was authorized by root conditional on the checked derivative argument above. No source or canonical item has yet been changed by this note.
