---
id: def-qftx-paraxial-cone
kind: definition
title: Paraxial cone and regular north-patch helicity gauge
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-qftx-photon-helicity-bundle
  - prop-qftx-helicity-chern-obstruction
  - thm-qftx-photon-rotations-helicity
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qftx-photon-helicity-bundle: mathematical-premise
  prop-qftx-helicity-chern-obstruction: mathematical-premise
  thm-qftx-photon-rotations-helicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Konstantin Y. Bliokh, Miguel A. Alonso, Elena A. Ostrovskaya, and Andrea Aiello, Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in Free Space"
      url: https://arxiv.org/pdf/1006.3876
      locator: "Full 8-page PDF retrieved; inspected §I Eq. 1, §II Eqs. 2–9, and §IV Eqs. 24–26. The article uses hbar=c=1."
    - title: "A. Bekshaev, M. Soskin, and M. Vasnetsov, Paraxial Light Beams with Angular Momentum"
      url: https://arxiv.org/pdf/0801.2309
      locator: "Full 87-page PDF retrieved; inspected §§2–3, PDF pp. 6–10, for the small-diffraction-angle paraxial regime and the conventional beam SAM/OAM split."
    - title: "David Tong, Quantum Field Theory, Chapter 6"
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: "Full author-hosted Chapter 6 HTML retrieved; §6.2.1 Eqs. 6.511–6.523 read in full; other sections not harvested."
verification:
  precheck: pass
---

## Definition

Assume the Axiom of Choice and fix constants $0<\kappa_-<\kappa_+<\infty$ and $0<\theta_{\max}<\pi/2$. Let $M=\mathbb R^3\setminus\{0\}$, $r=|\mathbf k|$, $\mathbf n=\mathbf k/r$, and use the positive $z$ axis as the propagation axis. Set $\theta(\mathbf k)=\arccos(n_z)\in[0,\pi]$ and let $\varphi\in\mathbb R/(2\pi\mathbb Z)$ be the azimuth on $0<\theta<\pi$. Use the transverse Hilbert space $\mathcal H_T^\nu=\{f\in L^2(M,d\nu;\mathbb C^3):\mathbf k\cdot f(\mathbf k)=0\ \nu\text{-almost everywhere}\}$ with $d\nu=d^3\mathbf k/(2|\mathbf k|)$ and the helicity projectors $P_\sigma(\mathbf n)=(P(\mathbf n)+\sigma h(\mathbf n))/2$, where $P=I-\mathbf n\mathbf n^T$, $h=i(\mathbf n\times\cdot)$, and $\sigma\in\{+1,-1\}$. A normalized helicity-$\sigma$ packet in the paraxial cone is a vector $f\in\mathcal H_T^\nu$ such that $\|f\|_\nu=1$, $P_\sigma(\mathbf n(\mathbf k))f(\mathbf k)=f(\mathbf k)$ almost everywhere, and $f(\mathbf k)=0$ almost everywhere unless $\kappa_-\le |\mathbf k|\le\kappa_+$ and $0\le\theta(\mathbf k)\le\theta_{\max}$.

On the north patch $U_N=S^2\setminus\{-e_z\}$, write $\mathbf e_\theta=(\cos\theta\cos\varphi,\cos\theta\sin\varphi,-\sin\theta)$ and $\mathbf e_\varphi=(-\sin\varphi,\cos\varphi,0)$. Define $e_\sigma=(\mathbf e_\theta+i\sigma\mathbf e_\varphi)/\sqrt2$ and $e_\sigma^N=e^{i\sigma\varphi}e_\sigma$, with its smooth extension at $+e_z$. The south gauge is $e_\sigma^S=e^{-i\sigma\varphi}e_\sigma$; the transition is $e_\sigma^N=e^{2i\sigma\varphi}e_\sigma^S$, and neither helicity line has a global smooth unit frame. For an integer $\ell$, a north-gauge vortex coefficient has azimuthal factor $e^{i\ell\varphi}$. For the class defined here, a coefficient whose support reaches the axis is required to have the sufficient regular form $b(r,\cos\theta)(\sin\theta)^{|\ell|}e^{i\ell\varphi}$ with $b$ smooth; a smooth envelope supported away from the axis also makes $e^{i\ell\varphi}$ regular for every integer $\ell$. The winding $\ell$ is a label in this chosen patch, not a global orbital label. Use the rotation convention $U(R_z(t))f(\mathbf k)=R_z(t)f(R_z(-t)\mathbf k)=e^{-itJ_z/\hbar}f(\mathbf k)$.

## Definition references

[[def-qftx-photon-helicity-bundle]]

[[prop-qftx-helicity-chern-obstruction]]

[[thm-qftx-photon-rotations-helicity]]

## Facts & Assumptions

**Given:** The Axiom of Choice, $\hbar>0$, the Euclidean cross product with $\epsilon_{123}=1$, and the weighted transverse one-photon Hilbert space.

[A1] Assume the Axiom of Choice, the hypothesis used for the Stone rotation generator. [[def-axiom-of-choice]]

[F1] The Hilbert space uses $d\nu=d^3\mathbf k/(2|\mathbf k|)$; $P_\sigma=(P+\sigma h)/2$ is the rank-one helicity projection in the transverse plane and $h$ has eigenvalue $\sigma$ on its range. [[def-qftx-photon-helicity-bundle]]

[F2] The local frame $e_\sigma=(\mathbf e_\theta+i\sigma\mathbf e_\varphi)/\sqrt2$ gives smooth north and south gauges with transition $e_\sigma^N=e^{2i\sigma\varphi}e_\sigma^S$; the helicity line has no global smooth unit section. [[prop-qftx-helicity-chern-obstruction]]

[F3] For $R_z(t)=\exp(t[e_z]_\times)$, the unitary action is $U(R_z(t))f(\mathbf k)=R_z(t)f(R_z(-t)\mathbf k)$ and its unique self-adjoint Stone generator satisfies $U(R_z(t))=e^{-itJ_z/\hbar}$. [[thm-qftx-photon-rotations-helicity]]

## Proof

**Given:** [A1], [F1]–[F3], and the spherical-coordinate definitions in the Statement.

1.1 The vectors $\mathbf e_\theta$ and $\mathbf e_\varphi$ are orthonormal, transverse to $\mathbf n$, and satisfy $\mathbf n\times\mathbf e_\theta=\mathbf e_\varphi$ and $\mathbf n\times\mathbf e_\varphi=-\mathbf e_\theta$. Thus $e_\sigma$ has unit norm and $h e_\sigma=\sigma e_\sigma$; multiplication by the phase $e^{i\sigma\varphi}$ preserves both properties. By [F2], the resulting north gauge extends smoothly through $+e_z$, while the stated transition prevents treating it as a global frame. [F1, F2, given, algebra]

1.2 For $\ell\ne0$, $(\sin\theta)^{|\ell|}e^{i\ell\varphi}=(n_x+i\operatorname{sgn}(\ell)n_y)^{|\ell|}$, a polynomial in the smooth Cartesian coordinates $n_x,n_y$; for $\ell=0$ the factor is $1$. Therefore the stated vanishing condition makes the vortex coefficient smooth at the axis. An envelope supported away from the axis has no coordinate singularity there. [given, algebra]

2.1 Since $R_z(t)\mathbf e_\theta(\theta,\varphi-t)=\mathbf e_\theta(\theta,\varphi)$ and $R_z(t)\mathbf e_\varphi(\theta,\varphi-t)=\mathbf e_\varphi(\theta,\varphi)$, the local frame obeys $R_z(t)e_\sigma^N(\theta,\varphi-t)=e^{-i\sigma t}e_\sigma^N(\theta,\varphi)$. This identity fixes the phase contribution of the chosen gauge under the rotation convention in [F3]. [A1, F2, F3, given, algebra] ∎
