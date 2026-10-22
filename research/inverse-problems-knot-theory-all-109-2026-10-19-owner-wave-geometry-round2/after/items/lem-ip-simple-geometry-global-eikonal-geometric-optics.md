---
id: lem-ip-simple-geometry-global-eikonal-geometric-optics
kind: lemma
title: Finite-order geometric optics along a maximal ray in simple geometry
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
axiom_base: Countable Choice
deps:
  - lem-ip-simple-geodesic-polar-extension
  - def-ip-simple-riemannian-background
  - thm-ip-variable-metric-wave-ibvp-energy-wellposedness
  - lem-ip-riemannian-green-boundary-traces-and-wave-lifting
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (full author lecture notes, arXiv:2312.08123v1)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "§3.3, complete simple-geometry geometric-optics construction, PDF pp. 26–32: eikonal, transport, transverse cutoff, residual estimate, and concentrating products."
    - title: "Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for hyperbolic PDEs (full lecture notes, arXiv:2311.06020v2)"
      url: "https://arxiv.org/pdf/2311.06020v2"
      locator: "§§4.1–4.4, PDF pp. 20–22: eikonal and transport calculations and the Euclidean correction estimate; the variable-metric chart and normalization terms must be supplied locally."
proof_strategy: polar eikonal and transport expansion with energy correction
---

## Statement

Assume Countable Choice. Let $(M,g)$ be a compact, connected, nonempty simple Riemannian background of dimension $n\ge2$, let $T>0$, and let $q_1,q_2\in C_c^\infty(M^\circ;\mathbb R)$ be static potentials. Let $\gamma:[0,L]\to M$ be a maximal unit-speed geodesic with $0<L<T$, and choose a time shift $t_0$ with $0<t_0<T-L$. In a nonsingular geodesic-polar tube about $\gamma$, there are conjugate eikonal phases and transport amplitudes, with a transverse cutoff of width $\varepsilon_\lambda=\lambda^{-1/(n+8)}$, that produce approximate forward and terminal solutions for the two wave operators. After solving the transport hierarchy through the required finite order and correcting the residual by the zero-data energy solver, the exact solutions have remainders $R_{j,\lambda}$ satisfying
$$\|R_{j,\lambda}\|_{L^\infty(0,T;H^1(M))}\le C\lambda^{-1}\|\chi_\lambda\|_{W^{4,\infty}},\qquad \|R_{j,\lambda}\|_{L^2((0,T)\times M)}=O(\lambda^{-1/2}),$$
where $\chi_\lambda$ is the stated transverse cutoff and $C$ is independent of $\lambda$. The normalized product of the forward and terminal exact solutions converges against every compactly supported smooth spacetime test function to integration along the null ray $(t_0+s,\gamma(s))$, $0\le s\le L$, with the Gaussian normalization fixed so that the limiting transverse integral is one.

## Statement references

[[lem-ip-simple-geodesic-polar-extension]]

[[def-ip-simple-riemannian-background]]

[[thm-ip-variable-metric-wave-ibvp-energy-wellposedness]]

[[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The simple background, maximal geodesic $\gamma:[0,L]\to M$, time shift $t_0$, $L<T$, and real smooth interior potentials from the statement.

[F1] [[lem-ip-simple-geodesic-polar-extension]] gives global nonsingular polar coordinates from a boundary point and the unit radial eikonal identity; [[def-ip-simple-riemannian-background]] gives absence of conjugate points and transverse boundary intersections.

[F2] [[thm-ip-variable-metric-wave-ibvp-energy-wellposedness]] supplies exact zero-boundary energy correction and smooth classical solutions for smooth forcing vanishing near the prescribed temporal endpoint. [[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]] supplies the classical boundary convention.


## Proof

1.1 Extend the central geodesic a distance $\delta>0$ through both boundary endpoints in the no-return extension used by [F1], and take the polar centre $p=\gamma(-\delta)$ outside $M$. Choose $\delta<t_0/4$ and $\delta<(T-t_0-L)/4$. The polar differential based at $p$ is nonsingular along this extended ray for sufficiently small $\delta$: on a short initial segment this follows from the identity differential at the origin, and on the remaining compact segment it follows by continuous dependence of the Jacobi matrix and the nonsingularity in [F1] as $\delta\downarrow0$. It is injective on a sufficiently narrow ray tube as well. Otherwise a sequence of collisions in shrinking tubes has limits on the central ray; that ray is embedded by [F1], so its two limiting parameters agree and one local inverse chart excludes the collision. Thus there is a nonsingular polar tube containing the whole ray, with its two radial ends outside $M$. In the tube write $x=(r,\theta)$, $r=\delta+s$ along the ray, and $dV_g=m(r,\theta)drd\theta$. The Gauss orthogonality proved in [F1] gives $g=dr^2+g_{\alpha\beta}d\theta^\alpha d\theta^\beta$ and $\Delta_gr=m^{-1}\partial_rm$. [F1, given, construct, algebra]

2.1 Put $\phi=t-r$, $z=t-r-(t_0-\delta)$, and $D=\partial_t+\partial_r$. Then $\phi_t^2-|\nabla\phi|^2=0$ and, for $L_q=\partial_t^2-\Delta_g+q$, direct differentiation gives $$L_q(e^{i\lambda\phi}a)=e^{i\lambda\phi}(i\lambda\mathcal T a+L_qa),\qquad \mathcal T=2D+\partial_r\log m.$$ The variable $z$ and the angle $\theta$ are constant along $D$, and $D(m^{1/2}a)=m^{1/2}\mathcal T a/2$. Consequently $$a_0=m^{-1/2}\chi_\lambda(\theta,z),\qquad a_{1,q}=\frac{i}{2}m^{-1/2}\int_{r_*}^{r}m(\sigma,\theta)^{1/2}(L_qa_0)(\sigma,\theta,z)\,d\sigma$$ solve $\mathcal T a_0=0$, $\mathcal T a_{1,q}=iL_qa_0$, where all functions in the integral are expressed in $(r,\theta,z)$ and $r_*$ is a fixed exterior radial start. Extend the smooth metric coefficients and the interior potentials over this slightly longer tube. Integration in $r$ preserves support in $(\theta,z)$. The same recursion $\mathcal T a_{j,q}=iL_qa_{j-1,q}$ supplies every higher requested finite order; two amplitude terms already suffice for the stated bound. [F1, step 1.1, construct, algebra]

3.1 Choose the angular and $z$ supports sufficiently small. Transversality of the entry and exit makes the tube's part in $M$ lie between smooth nearby entry and exit radii; all these packets are zero on $M$ near $t=0,T$. Put a radial cutoff equal to one near the entire tube intersection with $M$ and supported with its radial derivatives outside $M$. Then $$v_{+,q}=e^{i\lambda\phi}(a_0+\lambda^{-1}a_{1,q}),\qquad L_qv_{+,q}=\lambda^{-1}e^{i\lambda\phi}L_qa_{1,q}\quad\text{on }Q.$$ On the fixed compact nonsingular tube, coefficient derivatives, integration lengths, and coordinate Jacobians are bounded independently of $\lambda$. The formula in step 2.1 and the chain rule therefore give $\|a_{1,q}\|_{C^k}\le C_k\|\chi_\lambda\|_{W^{k+2,\infty}}$ and $$\|L_qv_{+,q}\|_{L^1_tL^2_x}\le C\lambda^{-1}\|\chi_\lambda\|_{W^{4,\infty}}.$$ For the opposite phase use $v_{-,q}=\overline{v_{+,q}}$ (real $q$), obtaining the identical estimate. In particular the cutoff creates no residual inside the measurement domain. [step 1.1, step 2.1, given, construct, algebra]

4.1 Apply [F2] to $-L_{q_1}v_{+,q_1}$ with zero initial and boundary data, and to $-L_{q_2}v_{-,q_2}$ with zero terminal and boundary data. The smooth right sides vanish near the relevant time endpoints, so the regularity part of [F2] makes the corrections smooth. The resulting $u_1=v_{+,q_1}+R_1$ and $u_2=v_{-,q_2}+R_2$ are actual forward and terminal classical solutions, with smooth boundary traces compactly supported in time. The energy estimate gives $$\|R_j\|_{L^\infty_tH^1_x}+\|\partial_tR_j\|_{L^\infty_tL^2_x}\le C\lambda^{-1}\|\chi_\lambda\|_{W^{4,\infty}}.$$ Thus the remainder here is the correction to the complete two-term approximate solution, including its $\lambda^{-1}$ transport amplitude. [F2, step 3.1, construct, algebra]

5.1 In local coordinates about $(\theta_0,0)$ let $\zeta\in C_c^\infty(\mathbb R^n;\mathbb R)$ satisfy $\int\zeta^2dy=1$, choosing a cutoff Gaussian and dividing by its $L^2$ norm. Set $$\varepsilon=\lambda^{-1/(n+8)},\qquad \chi_\lambda(\theta,z)=\varepsilon^{-n/2}\zeta((\theta-\theta_0,z)/\varepsilon).$$ For bounded small $\lambda$ enlarge the constants and keep the support inside the tube; all asymptotic assertions concern sufficiently large $\lambda$. Then $\|\chi_\lambda\|_2=1$ and $\|\chi_\lambda\|_{W^{k,\infty}}\le C_k\varepsilon^{-n/2-k}$. For $k=4$ the exponent is exactly $\lambda^{1/2}$, so step 4.1 proves $\|R_j\|_{L^2(Q)}=O(\lambda^{-1/2})$. Also $\|a_0\|_{L^2(Q)}\le C$ since its squared metric density cancels $m$, and $$\|\lambda^{-1}a_{1,q}\|_2\le C\lambda^{-1}\varepsilon^{-n/2-2}=o(1).$$ This verifies every normalization and derivative loss used in the correction estimate. [step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 For a smooth test $A$, the leading product is $a_0^2=m^{-1}\chi_\lambda^2$. Since $dt=dz$ at fixed $r$, $$\int_Q A a_0^2\,dV_gdt=\int \chi_\lambda(\theta,z)^2\left[\int_{r_-(\theta)}^{r_+(\theta)} A(r+t_0-\delta+z,x(r,\theta))\,dr\right]d\theta dz.$$ The nearby entry and exit radii are smooth by transversality. The bracket converges uniformly as $(\theta,z)\to(\theta_0,0)$ to $\int_0^L A(t_0+s,\gamma(s))ds$. The change of variables $(\theta-\theta_0,z)=\varepsilon y$ and $\int\zeta^2=1$ prove the required ray limit with coefficient exactly one. The terms containing a $\lambda^{-1}a_{1,q}$ vanish by the $L^2$ bounds in step 5.1 and Cauchy–Schwarz; the terms containing $R_j$ vanish by the same inequality and step 4.1. These arguments also apply to any smooth function on the closed cylinder, not only a compactly supported interior test, because all approximate packets are supported away from the temporal endpoints and the global correction errors have vanishing $L^2$ norm. Thus the exact forward/terminal product has the asserted normalized limit. [step 4.1, step 5.1, algebra] ∎
