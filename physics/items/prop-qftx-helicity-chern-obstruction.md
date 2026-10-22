---
id: prop-qftx-helicity-chern-obstruction
kind: proposition
title: Helicity line bundles have nonzero Chern number
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-countable-choice
  - def-qftx-photon-helicity-bundle
  - lem-em-sphere-zonal-moments
  - thm-general-stokes-theorem
  - thm-heine-borel-rn
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-photon-helicity-bundle: mathematical-premise
  lem-em-sphere-zonal-moments: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eric Palmerduca and Hong Qin, Photon topology, arXiv:2308.11147v2
      url: https://arxiv.org/pdf/2308.11147
      locator: Full 66-page PDF retrieved; section III, theorem 18 and equations 59–63, with the source's unitary-connection convention and Chern sign.
    - title: Konstantin Y. Bliokh, Miguel A. Alonso, Elena A. Ostrovskaya, and Andrea Aiello, Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in Free Space
      url: https://arxiv.org/pdf/1006.3876
      locator: Full 8-page PDF retrieved; section II, equations 6–9 and the accompanying discussion of the helicity Berry connection. The source uses a different Berry/Chern sign convention.
    - title: David Tong, Quantum Field Theory, Chapter 6, section 6.2.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Full author-hosted HTML chapter; section 6.2.1, equations 6.513–6.514 on the transverse polarization plane and the real-frame hairy-ball obstruction.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice. Let $S^2=\{\mathbf n\in\mathbb R^3:|\mathbf n|=1\}$ with the subspace topology and six smooth graph charts: for $j\in\{1,2,3\}$ and $\varepsilon\in\{+1,-1\}$, the chart on $\{\varepsilon n_j>0\}$ uses the other coordinates in $B_1^2=\{x\in\mathbb R^2:|x|<1\}$ and has inverse $n_j=\varepsilon\sqrt{1-\sum_{i\ne j}n_i^2}$. Orient it by the outward unit normal, so an ordered tangent basis $(u,v)$ is positive exactly when $u\times v=\lambda\mathbf n$ for some real $\lambda>0$; in spherical coordinates away from the poles its area form is $d\Omega=\sin\theta\,d\theta\wedge d\varphi$. In that chart let $\mathbf n=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$, $\mathbf e_\theta=(\cos\theta\cos\varphi,\cos\theta\sin\varphi,-\sin\theta)$, and $\mathbf e_\varphi=(-\sin\varphi,\cos\varphi,0)$. For $\sigma\in\{+1,-1\}$ set $e_\sigma=(\mathbf e_\theta+i\sigma\mathbf e_\varphi)/\sqrt2$, a local unit frame of $\mathcal L_{\sigma,\mathbf n}=\operatorname{ran}P_\sigma(\mathbf n)$. With Hermitian pairing $\overline u\cdot v$, define the skew-Hermitian connection form $\omega_\sigma=e_\sigma^\dagger de_\sigma$, its curvature $\Omega_\sigma=d\omega_\sigma$, the real Berry connection $A_\sigma=-i e_\sigma^\dagger de_\sigma$, and $F_\sigma=dA_\sigma$. Then
$$A_\sigma=-\sigma\cos\theta\,d\varphi,\qquad F_\sigma=\sigma\sin\theta\,d\theta\wedge d\varphi,\qquad \frac{1}{2\pi}\int_{S^2}F_\sigma=2\sigma.$$
Use the Chern-Weil convention $c_1(\mathcal L_\sigma)[S^2]=\frac{i}{2\pi}\int_{S^2}\Omega_\sigma$ for $\nabla=d+\omega_\sigma$; then $c_1(\mathcal L_\sigma)[S^2]=-2\sigma$. The north and south unit gauges $e_\sigma^N=e^{i\sigma\varphi}e_\sigma$ and $e_\sigma^S=e^{-i\sigma\varphi}e_\sigma$ have transition $e_\sigma^N=e^{2i\sigma\varphi}e_\sigma^S$; the map $e^{i\varphi}\mapsto e^{2i\sigma\varphi}$ has degree $2\sigma$, since its argument changes by $4\pi\sigma$ as $\varphi$ runs from $0$ to $2\pi$. Thus neither helicity line admits a global smooth unit section. This obstruction concerns each line separately and makes no nontriviality claim about the rank-two transverse complex bundle.

## Statement references

[[def-qftx-photon-helicity-bundle]]

[[lem-em-sphere-zonal-moments]]

[[thm-general-stokes-theorem]]

[[thm-heine-borel-rn]]

## Facts & Assumptions

**Given:** Countable Choice; the unit sphere with the graph charts and outward orientation in the Statement; the helicity line projections; and the stated Berry and Chern-Weil conventions.

[A1] Assume Countable Choice, $\mathrm{AC}_\omega$. [[def-countable-choice]]

[F1] For each $\mathbf n\in S^2$, $P_\sigma(\mathbf n)$ is a smooth rank-one orthogonal projection, and $\mathcal L_{\sigma,\mathbf n}=\operatorname{ran}P_\sigma(\mathbf n)$. [[def-qftx-photon-helicity-bundle]]

[F2] The polar surface measure of $S^2$ has total mass $4\pi$. [[lem-em-sphere-zonal-moments]]

[F3] Under $\mathrm{AC}_\omega$, if $M$ is an oriented smooth $n$-manifold with boundary and $\eta$ is a compactly supported smooth $(n-1)$-form, then $\int_Md\eta=\int_{\partial M}j^*\eta$ with outward-normal-first boundary orientation. [[thm-general-stokes-theorem]]

[F4] The unit sphere is closed and bounded in $\mathbb R^3$, hence compact by Heine-Borel; the graph charts in the Statement make it a smooth 2-manifold without boundary. [[thm-heine-borel-rn]]

## Proof

**Given:** [A1], [F1]–[F4], the local spherical frame and connection conventions in the Statement.

1.1 The vectors $\mathbf e_\theta,\mathbf e_\varphi$ are real unit vectors orthogonal to each other and to $\mathbf n$, and $\mathbf n\times\mathbf e_\theta=\mathbf e_\varphi$, $\mathbf n\times\mathbf e_\varphi=-\mathbf e_\theta$. Hence $e_\sigma$ has unit norm and satisfies $h(\mathbf n)e_\sigma=\sigma e_\sigma$, so it is a local frame of $\mathcal L_{\sigma,\mathbf n}$. Direct differentiation gives $\mathbf e_\theta\cdot d\mathbf e_\varphi=-\cos\theta\,d\varphi$ and $\mathbf e_\varphi\cdot d\mathbf e_\theta=\cos\theta\,d\varphi$; the diagonal terms vanish. Therefore
$$e_\sigma^\dagger de_\sigma=\frac{i\sigma}{2}(\mathbf e_\theta\cdot d\mathbf e_\varphi-\mathbf e_\varphi\cdot d\mathbf e_\theta)=-i\sigma\cos\theta\,d\varphi.$$
Multiplying by $-i$ gives $A_\sigma=-\sigma\cos\theta\,d\varphi$, and differentiating gives $F_\sigma=\sigma\sin\theta\,d\theta\wedge d\varphi$. [F1, given, algebra]

1.2 In Cartesian coordinates, the north and south gauges for $\sigma=+1$ are
$$e_+^N=\frac1{\sqrt2}\begin{pmatrix}(1+n_3)/2-(n_1+in_2)^2/[2(1+n_3)]\\ i(1+n_3)/2+i(n_1+in_2)^2/[2(1+n_3)]\\ -(n_1+in_2)\end{pmatrix},\qquad e_+^S=\frac1{\sqrt2}\begin{pmatrix}(n_3-1)/2+(n_1-in_2)^2/[2(1-n_3)]\\ i(1-n_3)/2+i(n_1-in_2)^2/[2(1-n_3)]\\ -(n_1-in_2)\end{pmatrix}.$$
Their denominators are nonzero on the north and south charts respectively, so they are smooth there. Since $e_-^N=\overline{e_+^N}$ and $e_-^S=\overline{e_+^S}$, the gauges for $\sigma=-1$ are smooth as well. Each has unit norm because it differs from $e_\sigma$ by a phase. On the overlap, $e_\sigma^N=e^{2i\sigma\varphi}e_\sigma^S$, and the transition map $e^{i\varphi}\mapsto e^{2i\sigma\varphi}$ has degree $2\sigma$. [given, algebra]

2.1 Since $F_\sigma=\sigma d\Omega$, [F2] gives $\int_{S^2}F_\sigma=4\pi\sigma$, hence the normalized Berry flux is $2\sigma$. The skew-Hermitian curvature is $\Omega_\sigma=d\omega_\sigma=iF_\sigma$ because $\omega_\sigma=iA_\sigma$. Under the stated Chern-Weil convention,
$$c_1(\mathcal L_\sigma)[S^2]=\frac{i}{2\pi}\int_{S^2}iF_\sigma=-\frac{1}{2\pi}\int_{S^2}F_\sigma=-2\sigma.$$
[F2, given, step 1.1, algebra]

3.1 Suppose a global smooth unit section $s$ of $\mathcal L_\sigma$ existed. Then $A_s=-i\,s^\dagger ds$ would be a globally defined smooth real one-form with compact support because $S^2$ is compact by [F4]. On each local unit frame, writing $s=g e_\sigma$ with $|g|=1$ gives $A_s=A_\sigma-i g^{-1}dg$; the correction is closed because $d(g^{-1}dg)=-g^{-2}dg\wedge dg=0$, so $dA_s=F_\sigma$. The sphere is oriented and boundaryless by the Statement and [F4], so [F3] yields $\int_{S^2}F_\sigma=\int_{S^2}dA_s=\int_{\partial S^2}A_s=0$. This contradicts $\int_{S^2}F_\sigma=4\pi\sigma\ne0$ from step 2.1. Therefore no global smooth unit helicity eigenvector exists. [A1, F3, F4, step 2.1, step 1.2, assume-contra, algebra, discharge-contradiction] ∎

## Remarks

The displayed real Berry-flux convention gives $+2\sigma$, while the explicitly defined standard Chern-Weil convention gives $c_1=-2\sigma$. The sign difference follows from $\Omega_\sigma=iF_\sigma$ and is a convention conversion; both numbers are nonzero and give the same obstruction. The proof concerns the helicity eigenline bundles only.
