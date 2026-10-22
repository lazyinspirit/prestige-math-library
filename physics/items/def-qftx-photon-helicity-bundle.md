---
id: def-qftx-photon-helicity-bundle
kind: definition
title: Transverse one-photon space and helicity projectors
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - def-countable-choice
  - lem-em-sphere-zonal-moments
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - lem-qftx-photon-invariant-measure-isometry
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-polar-coordinates-formula-for-lebesgue-measure
dependency_roles:
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-em-sphere-zonal-moments: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  lem-qftx-photon-invariant-measure-isometry: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, section 6.2.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Full author-hosted HTML chapter; section 6.2.1, equations 6.511–6.523, for the transverse photon modes and projector.
    - title: Eric Palmerduca and Hong Qin, Photon topology, arXiv:2308.11147v2
      url: https://arxiv.org/pdf/2308.11147
      locator: Full 66-page PDF retrieved; section II and section III, definition 14 and lemma 15, for the transverse rank-two bundle and circular helicity line subbundles.
    - title: Konstantin Y. Bliokh, Miguel A. Alonso, Elena A. Ostrovskaya, and Andrea Aiello, Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in Free Space
      url: https://arxiv.org/pdf/1006.3876
      locator: Full 8-page PDF retrieved; section I and equations 1 and 6–9, with the source's stated hbar=c=1 convention.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Put $M=\mathbb R^3\setminus\{0\}$, $\omega(\mathbf k)=|\mathbf k|$, and $d\nu(\mathbf k)=d^3\mathbf k/(2\omega(\mathbf k))$. Define the unit sphere by $S^2=\{\mathbf n\in\mathbb R^3:|\mathbf n|=1\}$ with the subspace topology. For $j\in\{1,2,3\}$ and $\varepsilon\in\{+1,-1\}$, chart $\{\varepsilon n_j>0\}$ by the other two coordinates in the open unit disk $B_1^2=\{x\in\mathbb R^2:|x|<1\}$, with inverse $n_j=\varepsilon\sqrt{1-\sum_{i\ne j}n_i^2}$; these six charts and their transition maps are smooth. Let $d\Omega$ denote polar surface measure on this sphere. Polar coordinates give $d\nu=(r/2)\,dr\,d\Omega$, and every orthogonal map preserves $\nu$. The transverse one-photon Hilbert space $\mathcal H_T^\nu$ consists of the equivalence classes $f\in L^2(M,\nu;\mathbb C^3)$ satisfying $\mathbf k\cdot f(\mathbf k)=0$ for $\nu$-almost every $\mathbf k$, with pairing $\langle f,g\rangle_\nu=\int_M\overline{f(\mathbf k)}\cdot g(\mathbf k)\,d\nu(\mathbf k)$, linear in $g$. The preceding measure-isometry lemma gives the unitary $Wf(\mathbf k)=f(\mathbf k)/\sqrt{2\omega(\mathbf k)}$ from this space to the transverse space defined with measure $d^3\mathbf k$. The null set $\mathbf k=0$ is omitted throughout.

For $\mathbf n\in S^2$, define $P(\mathbf n)=I-\mathbf n\mathbf n^T$. Extend the real cross product complex-linearly by $(\mathbf n\times v)_i=\sum_{j,\ell=1}^3\epsilon_{ij\ell}n_jv_\ell$, where $\epsilon_{ij\ell}$ is totally antisymmetric and $\epsilon_{123}=1$, and set $h(\mathbf n)=i\,\mathbf n\times$ and $P_\sigma(\mathbf n)=(P(\mathbf n)+\sigma h(\mathbf n))/2$ for $\sigma\in\{+1,-1\}$. Each $P_\sigma(\mathbf n)$ is a rank-one orthogonal projector on the complex transverse plane $P(\mathbf n)\mathbb C^3$, and $h$ has eigenvalue $\sigma$ on its range. The fibers $\mathcal L_{\sigma,\mathbf n}=\operatorname{ran}P_\sigma(\mathbf n)$ form smooth complex line subbundles of $S^2\times\mathbb C^3$. Here a smooth line subbundle means a family of one-dimensional complex fibers with smooth local unit sections. The common smooth domain for differential calculations is

$$\mathcal D=\{f\in C_c^\infty(M;\mathbb C^3):\mathbf k\cdot f(\mathbf k)=0\text{ for every }\mathbf k\in M\}.$$

It is dense in $\mathcal H_T^\nu$. For $0<r_0<r_1<\infty$, the mass-shell measure of the radial annulus is $\nu(\{r_0\le|\mathbf k|\le r_1\})=\pi(r_1^2-r_0^2)$; in particular $\nu$ is sigma-finite.

## Definition references

[[lem-qftx-photon-invariant-measure-isometry]]

[[def-countable-choice]]

[[def-qft-photon-transverse-space]]

[[def-qft-fock-and-test-spaces]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the weighted and unweighted transverse Hilbert spaces; $S^2$ with its outward orientation; and the Euclidean coordinate and measure conventions.

[A1] Assume Countable Choice, $\mathrm{AC}_\omega$. [[def-countable-choice]]

[F1] The map $Wf=f/\sqrt{2|\mathbf k|}$ is a unitary from the weighted transverse space with $d\nu=d^3\mathbf k/(2|\mathbf k|)$ onto the published transverse space with $d^3\mathbf k$, preserving the second-variable-linear pairing. [[lem-qftx-photon-invariant-measure-isometry]]

[F2] Under $\mathrm{AC}_\omega$, $C_c^\infty(\mathbb R^3;\mathbb C)$ is dense in $L^2(\mathbb R^3,d^3\mathbf k;\mathbb C)$; the componentwise statement gives density for $\mathbb C^3$-valued functions. [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]

[F3] Polar coordinates give $d^3\mathbf k=r^2\,dr\,d\Omega$ and the polar surface measure of $S^2$ has total mass $4\pi$. [[thm-polar-coordinates-formula-for-lebesgue-measure]] [[lem-em-sphere-zonal-moments]]

[F4] Orthogonal transformations of $\mathbb R^3$ preserve polar surface measure on $S^2$. [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]

[F5] If $0<r<R$, there is a smooth function $\rho:\mathbb R^3\to[0,1]$ that equals $1$ on $\overline B_r(0)$ and has support in $B_R(0)$. [[lem-smooth-bump-between-concentric-euclidean-balls]]

## Proof

**Given:** [A1], [F1]–[F5], and the definitions in the Statement.

1.1 Since $|\mathbf n|=1$, $P=I-\mathbf n\mathbf n^T$ satisfies $P^*=P=P^2$ and is the orthogonal projection onto $\mathbf n^\perp$; writing $z=Pz+\mathbf n(\mathbf n\cdot z)$ gives $\|Pz\|^2=\|z\|^2-|\mathbf n\cdot z|^2$, so $\|P\|\le1$. Write $C_{\mathbf n}v=\mathbf n\times v$, whose matrix is real skew-symmetric. Expanding with $\sum_k\epsilon_{ijk}\epsilon_{\ell m k}=\delta_{i\ell}\delta_{jm}-\delta_{im}\delta_{j\ell}$ gives $(C_{\mathbf n}^2v)_i=n_i(\mathbf n\cdot v)-v_i=-[P(\mathbf n)v]_i$. Antisymmetry also gives $\mathbf n\cdot C_{\mathbf n}v=0$ and $C_{\mathbf n}\mathbf n=0$, so $PC_{\mathbf n}=C_{\mathbf n}P=C_{\mathbf n}$. Consequently $h(\mathbf n)^*=h(\mathbf n)$, $h(\mathbf n)^2=P(\mathbf n)$, and $Ph=hP=h$. [given, algebra]

1.2 Applying the polar-coordinate formula in [F3] to the density $(2r)^{-1}$ gives $d\nu=(r/2)\,dr\,d\Omega$. Orthogonal maps preserve $d\Omega$ by [F4] and fix $r$, so they preserve $\nu$. [F3, F4, given, algebra]

1.3 Applying [F3] to the radial density $(2r)^{-1}$ gives
$$\nu(\{r_0\le|\mathbf k|\le r_1\})=\frac12\int_{r_0}^{r_1}r\,dr\int_{S^2}d\Omega=\pi(r_1^2-r_0^2).$$
The annuli $\{1/m\le|\mathbf k|\le m\}$ have finite measure and cover $M$, so $\nu$ is sigma-finite. [F3, given, algebra]

1.4 Given $f\in\mathcal H_T^\nu$, put $u=Wf\in\mathcal H_T^0$ by [F1]. Write $u=(u_1,u_2,u_3)$. For each of the three components, [F2] and [A1] give a compactly supported smooth $v_j$ with $\|u_j-v_j\|_{L^2(d^3\mathbf k)}<\varepsilon/(3\sqrt3)$. The three component choices are permitted by Countable Choice, and $v=(v_1,v_2,v_3)$ then satisfies $\|u-v\|_{L^2(d^3\mathbf k)}<\varepsilon/3$. [A1, F1, F2, choose]

1.5 For each $m$, [F5] supplies a smooth cutoff $\rho_m$ equal to $1$ on $\overline B_{1/m}(0)$ and supported in $B_{2/m}(0)$; set $\chi_m=1-\rho_m$. By [F3], $\lambda_3(B_{2/m}(0))=4\pi\int_0^{2/m}r^2\,dr=(4\pi/3)(2/m)^3$. Since $v$ is bounded,
$$\|\chi_m v-v\|_{L^2(d^3\mathbf k)}\le\|v\|_\infty\sqrt{\lambda_3(B_{2/m}(0))}\longrightarrow0.$$
Choose $m$ large enough that this norm is below $2\varepsilon/3$. The field $\chi_m v$ is smooth, compactly supported away from $0$, and can therefore be projected with the smooth matrix $P(\mathbf k/|\mathbf k|)$. [F3, F5, given, algebra]

2.1 The operators $P_\sigma$ are self-adjoint and
$$P_\sigma^2=\frac{P+2\sigma h+h^2}{4}=P_\sigma,\qquad P_+P_-=0,\qquad P_++P_-=P.$$
Moreover $hP_\sigma=\sigma P_\sigma$. The trace of $P$ is $2$ and the trace of $h=iC_{\mathbf n}$ is $0$, so $\operatorname{tr}P_\sigma=1$; a finite-dimensional orthogonal projection has rank equal to its trace, hence each range is a complex line. [step 1.1, algebra]

3.1 The matrices $P_\sigma(\mathbf n)$ depend smoothly on $\mathbf n$. For any $\mathbf n_0$, choose $v\in\mathbb C^3$ with $P_\sigma(\mathbf n_0)v\ne0$. Continuity makes $P_\sigma(\mathbf n)v$ nonzero on a neighborhood of $\mathbf n_0$, and normalizing this smooth vector gives a smooth unit local section. Thus the ranges form the stated smooth line subbundles. [step 2.1, construct]

4.1 Set $g_m(\mathbf k)=P(\mathbf k/|\mathbf k|)\chi_m(\mathbf k)v(\mathbf k)$. It is smooth, transverse, and compactly supported away from $0$. Since $Pu=u$ for the transverse field $u$ and $\|P(\mathbf k/|\mathbf k|)\|\le1$ by step 1.1,
$$\|g_m-u\|_{L^2(d^3\mathbf k)}\le\|\chi_m v-v\|_{L^2(d^3\mathbf k)}+\|v-u\|_{L^2(d^3\mathbf k)}.$$
The choices in steps 1.4 and 1.5 make the right side less than $\varepsilon$. The inverse image $W^{-1}g_m=\sqrt{2|\mathbf k|}\,g_m$ is smooth and compactly supported away from $0$, hence belongs to $\mathcal D$. As $W$ is unitary by [F1], $\mathcal D$ is dense in $\mathcal H_T^\nu$. [F1, step 1.1, step 1.4, step 1.5, construct] ∎
