---
id: lem-ip-calderon-planar-beltrami-dbar-logarithmic-stability
kind: lemma
title: Planar BV logarithmic Calderón stability
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-ip-calderon-admissible-conductivity-class
  - def-ip-calderon-weak-dn-map-for-bounded-conductivities
  - lem-ip-bv-translation-modulus-for-conductivity
  - lem-ip-calderon-boundary-trace-quotient-identification
  - lem-ip-calderon-rough-dn-map-wellposedness
  - lem-ip-planar-dn-enclosure-and-reciprocal-comparison
  - lem-ip-planar-measurable-beltrami-cgo-solutions
  - lem-ip-planar-beltrami-cgo-power-phase-decay
  - lem-ip-planar-conductivity-cgo-logarithmic-phases
  - lem-ip-planar-scattering-dbar-equation-and-parameter-bounds
  - lem-ip-planar-dn-to-scattering-lipschitz-estimate
  - lem-ip-planar-scattering-topological-zero-separation
  - lem-ip-planar-conductivity-l2-interpolation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Daniel Faraco and Martí Prats, Characterization for stability in planar
        conductivities
      url: https://arxiv.org/pdf/1701.06480
      locator: Theorem 1.6, printed pp. 1–2; proof of Theorem 3.5 in Section 6.2,
        printed pp. 41–43, using the preceding Beltrami-CGO and
        scattering-transform sections.
    - title: Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H.
        Nelsen, Extension and neural operator approximation of the electrical
        impedance tomography inverse map
      url: https://arxiv.org/pdf/2511.20361
      locator: Section 3.1, Theorem 3.2 and its dimension-two proof, printed pp. 13–14.
    - title: Astala and Päivärinta, Calderón's inverse conductivity problem in the
        plane
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v163-n1-p05.pdf
      locator: Sections 3–5, complete measurable Beltrami CGO, similarity and
        parameter-equation proofs, supplied locally by proved helpers.
    - title: Barceló, Faraco and Ruiz, Stability of Calderón inverse conductivity
        problem in the plane
      url: https://www.mis.mpg.de/preprints/2006/preprint2006_5.pdf
      locator: Theorem 2.1, Theorem 3.12 and Section 4.2, full forced estimates and
        DN-to-scattering proof; local proofs retain the bounded measurable
        class.
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\Omega\subset(0,1)^2$ be a nonempty bounded connected smooth domain, let $\Omega'\Subset\Omega$, and fix $m>0$, $M\ge\max\{1,m\}$ and $R>0$. For every $\gamma,\gamma_0\in X_2(R)$ there exist constants $C>0$, $\rho>0$ and $t_0\in(0,1)$, depending only on $\Omega,\Omega',m,M,R$, such that
$$\|\gamma-\gamma_0\|_{L^2(\Omega)}\le C\,\omega\!\left(\|\dot{\Lambda}_\gamma-\dot{\Lambda}_{\gamma_0}\|_{\mathcal L(\mathcal D(\Omega)/\mathbb C\mathbf1,(\mathcal D(\Omega)/\mathbb C\mathbf1)^*)}\right),$$
where $\mathcal D(\Omega)$ is the trace quotient and $\dot\Lambda_\gamma$ is the induced weak Dirichlet-to-Neumann map on the constant quotient, and
$$\omega(0):=0,\qquad \omega(t):=\left[\log\!\left(\frac1{\min\{t,t_0\}}\right)\right]^{-\rho}\quad(t>0).$$

## Statement references

[[def-ip-calderon-admissible-conductivity-class|The planar uniformly elliptic BV class with fixed background near the boundary.]]

[[def-ip-calderon-weak-dn-map-for-bounded-conductivities|The weak DN map and its constant quotient.]]


## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice, the fixed domain, collar and class parameters in the statement, and $\gamma_1=\gamma$, $\gamma_2=\gamma_0\in X_2(R)$.

[F1] The background extensions of the BV class have uniform $L^p$ translation difference bounds $C_pt^{1/p}$ for every sufficiently large finite $p$. ([[def-ip-calderon-admissible-conductivity-class]], [[lem-ip-bv-translation-modulus-for-conductivity]])

[F2] Enclosing the domain in the fixed disk $B=(1/2,1/2)+D_1$, extending the coefficients by $1$, and translating to $D_1$ controls both the disk DN difference and the reciprocal-conductivity disk DN difference by a constant times the original constant-quotient DN norm. The supports of their Beltrami coefficients lie in a fixed $D_a$, $a<1$. ([[def-ip-calderon-weak-dn-map-for-bounded-conductivities]], [[lem-ip-calderon-boundary-trace-quotient-identification]], [[lem-ip-calderon-rough-dn-map-wellposedness]], [[lem-ip-planar-dn-enclosure-and-reciprocal-comparison]])

[F3] Measurable Beltrami coefficients give normalized solutions $f_\mu$, principal quasiconformal phases, uniform local $W^{1,r}$ bounds and inverse-gradient $L^{r-2}$ bounds at $|k|=1$. Under a uniform positive power translation modulus, their conductivity CGO combinations $u_\gamma=e^{\delta_\gamma}$ have continuous onto logarithmic phases and satisfy $|\delta_\gamma(z,k)-ikz|\le C|k|^{1-b}$ for $|k|\ge1$, uniformly in $z$, for some $b>0$. On fixed disks the $u_\gamma(\cdot,1)$ have a uniform positive Hölder exponent. ([[lem-ip-planar-measurable-beltrami-cgo-solutions]], [[lem-ip-planar-beltrami-cgo-power-phase-decay]], [[lem-ip-planar-conductivity-cgo-logarithmic-phases]])

[F4] The scattering amplitudes obey $|\tau_\mu|\le1$, $\bar\partial_k\delta_\gamma=-i\tau_\mu e^{\overline\delta_\gamma-\delta_\gamma}$, and uniform exponential bounds on their parameter derivatives and those of $\delta_\gamma(z,k)$ for bounded $z$. Their difference is at most $C\delta e^{C(1+|k|)}$ in terms of the disk DN difference. ([[lem-ip-planar-scattering-dbar-equation-and-parameter-bounds]], [[lem-ip-planar-dn-to-scattering-lipschitz-estimate]])

[F5] If $g(0)=0$, $g(k)=\ell k+O(|k|^{1-b})$, and $\bar\partial g=\sigma g+E$ with $\sigma$ uniformly bounded, $|E|\le C\varepsilon e^{C|k|}$ and $|\nabla E|\le Ce^{C(1+|k|)}$, then $|\ell|\ge D[\log(1/\varepsilon)]^{-b}$ excludes every nonzero zero of $g$ for sufficiently small $\varepsilon>0$. If $E=0$, every $\ell\ne0$ excludes them. ([[lem-ip-planar-scattering-topological-zero-separation]])

[F6] Uniform power translation bounds for $\mu_j$, fixed-parameter $W^{1,r}$ bounds for $f_j$, and uniform negative-gradient integrability imply $\|\gamma_1-\gamma_2\|_2\le C\|f_1-f_2\|_{L^\infty(D_2)}^\eta$ for some $\eta>0$, including zero error. This is proved by Caccioppoli, frequency splitting and interpolation. ([[lem-ip-planar-conductivity-l2-interpolation]])

[A1] The Axiom of Choice and Countable Choice are assumed in the quoted BV, weak-solution, quasiconformal and Fourier interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement. Let $\varepsilon$ denote the original constant-quotient DN difference appearing in its modulus.

1.1 Extend both coefficients by $1$ and use the fixed translation in [F2]. Let $K=\max\{2,M,m^{-1}\}$, $\kappa=(K-1)/(K+1)\in(0,1)$, and $\mu_j=(1-\gamma_j)/(1+\gamma_j)$. Then $|\mu_j|\le\kappa$ and their support lies in $D_a$. The scalar function $x\mapsto(1-x)/(1+x)$ is Lipschitz on $[\min\{m,1\},\max\{M,1\}]$, so [F1] gives $\omega_p(\mu_j,t)\le C_pt^{1/p}$ for all sufficiently large finite $p$. Choose $2<r\le p_\kappa$ sufficiently close to $2$ that $q=2r/(r-2)$ and $p=2q=4r/(r-2)$ both lie in this range. These are fixed class-dependent exponents. The same bounds apply to $-\mu_j$, which correspond to the reciprocal conductivities. Thus all hypotheses of [F3]–[F6] hold uniformly for both conductivity pairs, and [F2] bounds both corresponding disk measurement errors by $C\varepsilon$. [A1, F1, F2, F3, given, algebra]

2.1 For either of these two pairs, write the conductivity phases as $\delta_j$ and amplitudes as $\tau_j$. Fix $z\in D_2$ and any $w\in\mathbb C$, and put $g(k)=\delta_1(z,k)-\delta_2(w,k)$. Then $g(0)=0$ and $g(k)=i(z-w)k+O(|k|^{1-b})$ by [F3], with a constant independent of $z,w$. The phase equation in [F4] gives $\bar\partial_kg=\sigma g+E$, where, when $g\ne0$, $\sigma=-i\tau_2[e^{\overline\delta_1-\delta_1}-e^{\overline\delta_2-\delta_2}]/g$, and set $\sigma=0$ where $g=0$; also $E=-i(\tau_1-\tau_2)e^{\overline\delta_1-\delta_1}$. Since these exponentials have modulus one and the exponential is Lipschitz on the imaginary axis, $|\sigma|\le2|\tau_2|\le2$. By [F2]–[F4], $|E|\le C\varepsilon e^{C|k|}$ after increasing $C$, and $|\nabla_kE|\le Ce^{C(1+|k|)}$: differentiate the amplitude difference and the unit-modulus exponential, using only the parameter derivative bound for $\delta_1(z,k)$ with $z\in D_2$. This last estimate is independent of $w$. For $w\ne z$, these are the hypotheses of [F5] with nonzero $\ell=i(z-w)$; its positive-error conclusion is available when the stated threshold for $|z-w|$ holds. No application of [F5] is made when $w=z$. If necessary reduce $b$ below $1$; this only weakens the already proved phase bound. [F2, F3, F4, F5, step 1.1, algebra]

3.1 At the fixed parameter $k=1$, surjectivity of $\delta_2(\cdot,1)$ in [F3] supplies a point $w$ with $\delta_2(w,1)=\delta_1(z,1)$. If $w=z$, the distance and solution-difference bounds below hold immediately. If $w\ne z$, then $g(1)=0$, so for sufficiently small $0<\varepsilon<t_0$, step 2.1 and [F5] force $|z-w|<D[\log(1/\varepsilon)]^{-b}$: the opposite inequality would exclude this nonzero-parameter zero. Reduce $t_0$ so this distance is below one; then $w\in D_3$. The uniform Hölder continuity from [F3], with exponent $\theta_0=1-2/r>0$, gives $|u_1(z,1)-u_2(z,1)|=|u_2(w,1)-u_2(z,1)|\le C|w-z|^{\theta_0}\le C[\log(1/\varepsilon)]^{-b\theta_0}$. The bound holds uniformly for $z\in D_2$, and for both the original and reciprocal pairs. If $\varepsilon=0$, the amplitude differences in [F4] vanish, so $E=0$; if $w\ne z$, the zero-error clause of [F5] contradicts $g(1)=0$. Hence $w=z$. In that case both conductivity CGO pairs agree exactly. [F3, F4, F5, step 2.1, algebra]

4.1 By the definition of the two conductivity combinations, $f_{\mu_j}(z,1)=\operatorname{Re}u_{\gamma_j}(z,1)+i\operatorname{Im}u_{\gamma_j^{-1}}(z,1)$. Applying step 3.1 to the two pairs therefore gives $\|f_{\mu_1}(\cdot,1)-f_{\mu_2}(\cdot,1)\|_{L^\infty(D_2)}\le C[\log(1/\varepsilon)]^{-b\theta_0}$ for small positive $\varepsilon$, and zero difference when $\varepsilon=0$. At this fixed parameter, [F3] gives the uniform $W^{1,r}(D_3)$ bound and the inverse-gradient integral with $\sigma=r-2>0$. The coefficient modulus needed in [F6] is $\omega_q(\mu_j,t)\le C_qt^{1/q}$ from step 1.1. Reduce $t_0$ so the displayed solution difference is at most one, as required by [F6]. [F1, F3, step 1.1, step 3.1, algebra]

5.1 Apply [F6] with its modulus exponent $\theta=1/q$ and inverse-gradient exponent $\sigma=r-2$. Its positive exponent is $\eta=\theta\sigma/[(1+\theta)(2+\sigma)]$. Step 4.1 yields $\|\gamma_1-\gamma_2\|_{L^2(D_1)}\le C[\log(1/\varepsilon)]^{-\rho}$, with $\rho=b\theta_0\eta>0$, for $0<\varepsilon<t_0$. The translated coefficient difference vanishes outside the original $\Omega$, so this is exactly its $L^2(\Omega)$ norm. If $\varepsilon=0$, step 4.1 and the zero-error clause of [F6] give equality of the coefficients and the required value $\omega(0)=0$. Finally, for $\varepsilon\ge t_0$, use $\|\gamma_1-\gamma_2\|_2\le2M|\Omega|^{1/2}$ and enlarge $C$ to at least $2M|\Omega|^{1/2}[\log(1/t_0)]^\rho$. Taking $t_0<1$ yields precisely the saturated modulus in the statement. All exponents and constants were fixed using only the listed class and geometry parameters. [F1, F6, step 4.1, algebra] ∎
