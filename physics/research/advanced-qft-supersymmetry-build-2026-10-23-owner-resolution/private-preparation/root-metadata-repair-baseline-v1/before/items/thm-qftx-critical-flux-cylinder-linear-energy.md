---
id: thm-qftx-critical-flux-cylinder-linear-energy
kind: theorem
title: Fixed-flux cylinders and uniform end-collar energy
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
- def-qftx-critical-abelian-higgs-divisor-data
- thm-qftx-taubes-arbitrary-divisor-plane-vortex
- thm-qftx-critical-vortex-global-energy-minimum
- def-axiom-of-choice
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- thm-general-stokes-theorem
dependency_roles:
  def-qftx-critical-abelian-higgs-divisor-data: mathematical-premise
  thm-qftx-taubes-arbitrary-divisor-plane-vortex: mathematical-premise
  thm-qftx-critical-vortex-global-energy-minimum: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
dependency_level: 4
axiom_base: ZF + full Axiom of Choice, inherited through the explicitly listed mathematical suppliers. No physical premise.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: 'David Tong, TASI Lectures on Solitons, Lecture 3: Vortices'
    url: https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf
    locator: '§§3.1–3.2, printed pp. 70–73: transverse critical model, flux normalization and Bogomolny tension; the finite-cylinder collar estimate is proved locally here.'
  - title: Shouxin Chen and Yisong Yang, Existence of Multiple Vortices in Supersymmetric Gauge Field Theory
    url: https://arxiv.org/pdf/1203.3071
    locator: '§§2–3 and 7, PDF pp. 2–5 and 19–20: independent scalar critical-model normalization and transverse flux/tension conventions; no cylinder estimate is imported.'
---

## Statement

Assume the Axiom of Choice. Fix $e>0$, $\xi>0$, $\kappa=2e^2\xi$, and $n\in\mathbb Z$. For transverse fields on the oriented Euclidean plane, let $A_\perp=A_1dx_1+A_2dx_2$ be a smooth real one-form, let $q:\mathbb R^2\to\mathbb C$ be smooth, set $D_iq=(\partial_i-iA_i)q$ and $B_{12}=\partial_1A_2-\partial_2A_1$, and define
$$E_\perp(A_\perp,q)=\int_{\mathbb R^2}\left(\frac{B_{12}^2}{2e^2}+|D_1q|^2+|D_2q|^2+\frac{e^2}{2}(|q|^2-\xi)^2\right)dx_1dx_2.$$
For $L>0$, write $\Omega_L=\mathbb R^2\times[0,L]$ with coordinates $(x_1,x_2,z)$, let $\mathcal A=A_1dx_1+A_2dx_2+A_3dz$ be a smooth real connection one-form, let $q:\Omega_L\to\mathbb C$ be smooth up to the ends, set $F=d\mathcal A$, $D_\mu q=(\partial_\mu-iA_\mu)q$, and define the full static energy
$$\mathcal E_L(\mathcal A,q)=\int_0^L\!\int_{\mathbb R^2}\left[\frac{B_{12}^2+F_{31}^2+F_{32}^2}{2e^2}+|D_1q|^2+|D_2q|^2+|D_3q|^2+\frac{e^2}{2}(|q|^2-\xi)^2\right]dx_1dx_2dz,$$
where $B_{12}=F_{12}$. Call such a pair admissible of winding $n$ if its energy is finite, every transverse slice has finite $E_\perp$, and there are $R_0>0$ and smooth $\rho>0$ and real $2\pi$-periodic $\phi$ on $\{|x|>R_0\}\times[0,L]$ such that $q=\rho e^{i(n\theta+\phi)}$, with $\rho\to\sqrt\xi$ and $\phi\to0$ uniformly in $z$ and $\theta$ as $|x|\to\infty$. Require that each slice has flux $\lim_{R\to\infty}\int_{D_R}B_{12}\,dx_1dx_2=2\pi n$, and require the angular one-form condition
$$\lim_{R\to\infty}\sup_{0\le z\le L}\left|\int_{\partial D_R}(A_1dx_1+A_2dx_2-n\,d\theta)\right|=0$$
and zero radial magnetic-flux leakage, meaning that the integral of $F$ over the side $\partial D_R\times[0,L]$ tends to zero as $R\to\infty$. The infimum below is over admissible pairs with fixed smooth finite-energy end traces $p_0=(A^0,q^0)$ and $p_1=(A^1,q^1)$ in winding $n$. If their exterior phase is $n\theta+\phi_j$, first apply the globally smooth degree-zero gauge cleanup proved below and prescribe the resulting representatives as the end values. The common canonical exterior gauge means $q^j=\rho_j e^{in\theta}$ and $A^j-n\,d\theta\in L^2$ outside a disk, with the angular one-form limit above.

For any two such fixed end traces, the cleaned differences $q^1-q^0$ and $A^1-A^0$ lie in $L^2(\mathbb R^2)$. Choose any finite collection of distinct points $z_j\in\mathbb C$ with positive integer multiplicities $m_j$ summing to $|n|$ (the empty collection for $n=0$), and let $p_*=(A^*,q^*)$ be its planar minimizing field pair in canonical exterior gauge. Set $T_n=2\pi\xi|n|$. There are a fixed collar width $\ell>0$ and finite constants $C_0,C_1$, depending on the end traces, $p_*$, and the chosen smooth collar profile but not on $L$, such that for every $L\ge2\ell$,
$$T_nL\le\inf\mathcal E_L\le T_n(L-2\ell)+C_0+C_1.$$
Consequently the difference $\inf\mathcal E_L-T_nL$ remains bounded as $L\to\infty$. If both fixed end traces are the same planar minimizing pair, its constant extension in $z$ attains the exact minimum $T_nL$. This is a mathematical fixed-flux boundary variational statement and does not assert a point-source self-energy or a quantum Wilson-loop result.

The gauge transformations used to put an end trace in canonical exterior gauge have the form $(q,A)\mapsto(e^{i\chi}q,A+d\chi)$ for a smooth real-valued function $\chi$ on the whole plane; the function is globally defined by extending a radial cutoff times the single-valued periodic phase correction.

## Statement references

[Critical Abelian-Higgs field, winding, energy and gauge conventions](items/def-qftx-critical-abelian-higgs-divisor-data.md#Definition)

[Critical transverse energy, flux and tension normalization (Tong, §§3.1–3.2)](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf)

[Independent critical-model normalization and flux/tension conventions (Chen–Yang, §§2–3 and 7)](https://arxiv.org/pdf/1203.3071)

## Facts & Assumptions

**Given:** The Axiom of Choice, $e,\xi>0$, $n\in\mathbb Z$, $L>0$, and the smooth admissible cylinder and fixed end traces specified in the Statement.

[A1] Full AC is the mathematical base and includes the choice assumptions inherited from the elliptic suppliers. ([[def-axiom-of-choice]])

[F1] [[def-qftx-critical-abelian-higgs-divisor-data]]: $D_A=d-iA$, $B=dA$, the transverse energy has the displayed critical normalization, and a boundary-sector pair has modulus tending uniformly to $\sqrt\xi$ and phase $n\theta+\phi$ with single-valued periodic $\phi\to0$.

[F2] [[thm-qftx-taubes-arbitrary-divisor-plane-vortex]]: for every effective finite divisor of degree $|n|$ there is a smooth finite-energy planar critical pair with flux $2\pi n$ (using conjugation for $n<0$); for the empty divisor it is the vacuum. The local unwound exterior gauge has $q=\sqrt\xi e^{h/2}$ and $A=-\tfrac12*dh$; that degree-changing exterior gauge is not asserted to extend globally. Separately, removing only the smooth degree-zero polynomial phase correction relative to $n\theta$ by a global cutoff gauge yields the canonical winding representative $q=\sqrt\xi e^{h/2}e^{in\theta}$, $A=n\,d\theta-\tfrac12*dh$.

[F3] [[thm-qftx-critical-vortex-global-energy-minimum]]: every smooth finite-energy transverse boundary-sector pair of winding $n$ has energy at least $T_n=2\pi\xi|n|$, and the pair in [F2] attains this bound.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: an integrable nonnegative density on $\mathbb R^2\times[0,L]$ has measurable slice integrals whose integral equals the total integral.

[F5] [[thm-general-stokes-theorem]]: the integral of $d\mathcal A$ over a smooth oriented disk or side cylinder equals the oriented boundary integral of $\mathcal A$.

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 Decompose the integrand into the transverse density $e_\perp(x,z)$, containing $F_{12}$, $D_1q,D_2q$ and the potential, and the nonnegative longitudinal density $e_\parallel(x,z)$, containing $F_{31},F_{32},D_3q$. Since the total density is nonnegative and integrable, [F4] gives $\mathcal E_L=\int_0^L E(\mathbf A_\perp(\cdot,z),q_z)\,dz+\int_{\Omega_L}e_\parallel\,dx\,dz$, where $\mathbf A_\perp=A_1dx_1+A_2dx_2$ and $E(\mathbf A_\perp(\cdot,z),q_z)=\int_{\mathbb R^2}e_\perp(x,z)dx$ for almost every $z$. The slice hypotheses and [F3] give $E(\mathbf A_\perp(\cdot,z),q_z)\ge T_n$ for each slice, while the longitudinal integral is nonnegative; hence $\mathcal E_L\ge T_nL$. [F3, F4, given, algebra]

1.2 For finite $R$, apply [F5] to $D_R\times\{z\}$ to identify its magnetic flux with $\int_{\partial D_R}A_\perp(\cdot,z)$. Apply [F5] to the side $\partial D_R\times[0,L]$: its flux is the difference of the two oriented end-circle integrals. The uniform angular one-form condition makes both integrals $2\pi n+o(1)$, so the side flux tends to zero. Thus the stated angular condition enforces the required no-leakage condition and is consistent with the fixed slice flux. [F5, given, algebra]

1.3 For an end trace with exterior phase $n\theta+\phi$, choose a smooth radial cutoff $\eta$ which is zero on a disk containing the noncanonical region and one outside a larger disk. The real function $\chi=-\eta\phi$ extends smoothly by zero to the whole plane; the allowed gauge transformation $(q,A)\mapsto(e^{i\chi}q,A+d\chi)$ therefore makes the exterior phase exactly $n\theta$. This constructs the asserted degree-zero exterior phase cleanup without attempting to extend a degree-$n$ angular map across the disk. For the planar minimizer in [F2], write $P=|P|e^{i\vartheta}$ on the exterior; $\vartheta-n\theta$ is single-valued, smooth and tends to zero because $P(z)=z^n(1+O(|z|^{-1}))$ for $n\ge0$ (use the conjugate construction for $n<0$). Applying the same cutoff extension to $-(\vartheta-n\theta)$ changes its exterior fields to $q^*=\rho_*e^{in\theta}$ and $A^*=n\,d\theta-\tfrac12*dh$; hence $A^*-n\,d\theta$ decays exponentially. [A1, F1, F2, algebra]

1.4 In canonical exterior gauge write $q=\rho e^{in\theta}$ and $\alpha=A-n\,d\theta$. Directly, $D_Aq=e^{in\theta}(d\rho-i\rho\alpha)$, so the real and imaginary terms are orthogonal and $|D_Aq|^2=|d\rho|^2+\rho^2|\alpha|^2$. Uniform convergence gives $\rho\ge\sqrt\xi/2$ outside a disk; thus finite kinetic energy implies $\alpha\in L^2$ there. Also $|\rho-\sqrt\xi|\le |\rho^2-\xi|/\sqrt\xi$, so finite potential energy gives $\rho-\sqrt\xi\in L^2$ there. On compact disks all fields are smooth and bounded. Consequently, for any two cleaned end traces and the cleaned minimizer, differences of connections and Higgs fields are globally in $L^2$; each Higgs field is bounded. [F1, F2, given, algebra]

2.1 For any two such canonical profiles $p_a=(A^a,q^a)$ and $p_b=(A^b,q^b)$, put $A_t=(1-t)A^a+tA^b$, $q_t=(1-t)q^a+tq^b$, $0\le t\le1$, and $\delta A=A^b-A^a$, $\delta q=q^b-q^a$. The curvature is $B_t=(1-t)B_a+tB_b\in L^2$, so linearity of the flux integral gives flux $2\pi n$ for every blend because both endpoint fluxes equal $2\pi n$. On the exterior, $q_t=e^{in\theta}\rho_t$ with $\rho_t=(1-t)\rho_a+t\rho_b$; the uniform bounds and $\rho_t-\sqrt\xi\in L^2$ imply $|q_t|^2-\xi\in L^2$. Expanding the covariant derivative gives
$$D_{A_t}q_t=(1-t)D_{A^a}q^a+tD_{A^b}q^b+i\,t(1-t)\delta A\,\delta q.$$
The first two terms are in $L^2$ by finite end energy, and the last is in $L^2$ because $\delta A\in L^2$ and $\delta q$ is bounded. Thus every transverse energy term of the blend is integrable, with a bound uniform for $t\in[0,1]$. Its exterior phase, vacuum limit and angular one-form limit are preserved by convexity and linearity. [F1, step 1.4, algebra]

3.1 Fix $\ell>0$ and a smooth function $\sigma:[0,1]\to[0,1]$ which is zero near $0$ and one near $1$. On a collar of width $\ell$, set $t(z)=\sigma(z/\ell)$, $A_1,A_2=A_{t(z)}$, $q=q_{t(z)}$, and $A_3=0$. Then $D_3q=(\sigma'(z/\ell)/\ell)\delta q$ and $F_{3i}=(\sigma'(z/\ell)/\ell)\delta A_i$. Their squared integrals are finite by [F1] and step 1.4. Step 2.1 bounds the transverse density uniformly in $z$, so the complete collar energy is a finite constant depending only on its two profiles, $\ell$, and $\sigma$. Since $\sigma$ is constant near each end, this collar joins smoothly to constant-in-$z$ profiles. The angular limit is the convex combination of the endpoint limits; its side flux tends to zero by step 1.2. [F1, step 1.2, step 1.4, step 2.1, algebra]

4.1 Apply step 3.1 first to $p_0$ and $p_*$, defining its finite energy to be $C_0$, and then to $p_*$ and $p_1$, defining its finite energy to be $C_1$. For $L\ge2\ell$, place the first collar on $[0,\ell]$, the constant planar minimizer on $[\ell,L-\ell]$, and the second collar on $[L-\ell,L]$. The profiles match smoothly because the collar cutoff is constant near its ends. The middle has no longitudinal energy and contributes exactly $T_n(L-2\ell)$ by [F2]–[F3]. At $L=2\ell$ this middle interval has zero length; the two collars meet at the constant value $p_*$, so the same upper bound holds. This admissible concatenation proves $\inf\mathcal E_L\le C_0+T_n(L-2\ell)+C_1$. [F2, F3, step 3.1, given, algebra]

5.1 Combining steps 1.1 and 4.1 gives $0\le\inf\mathcal E_L-T_nL\le C_0+C_1-2\ell T_n$ for every $L\ge2\ell$; the right side is a finite constant independent of $L$, proving the bounded-remainder conclusion. If $p_0=p_1=p_*$, the constant extension $(A_1,A_2,q)=(A^*,q^*)$, $A_3=0$, has energy $T_nL$ and satisfies the angular and no-leakage conditions. The lower bound from step 1.1 then proves it is an exact translation-invariant minimum. [F2, F3, step 1.1, step 4.1, algebra] ∎
## Proof references

[Critical transverse energy and Bogomolny tension (Tong, §§3.1–3.2)](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf)

[Independent scalar-model and flux/tension conventions (Chen–Yang, §§2–3 and 7)](https://arxiv.org/pdf/1203.3071)
