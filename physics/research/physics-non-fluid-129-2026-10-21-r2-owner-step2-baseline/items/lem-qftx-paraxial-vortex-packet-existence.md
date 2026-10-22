---
id: lem-qftx-paraxial-vortex-packet-existence
kind: lemma
title: Finite-bandwidth vortex packets are rotation eigenvectors
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-qftx-paraxial-cone
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-qftx-photon-rotations-helicity
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qftx-paraxial-cone: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-qftx-photon-rotations-helicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Konstantin Y. Bliokh, Miguel A. Alonso, Elena A. Ostrovskaya, and Andrea Aiello, Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in Free Space"
      url: https://arxiv.org/pdf/1006.3876
      locator: "Full 8-page PDF retrieved; inspected §IV Eq. 24 gives the ideal conical vortex form and §IV Eqs. 25–26 give its spin, orbital, and total angular-momentum labels. The local proof uses finite-width packets instead."
    - title: "A. Bekshaev, M. Soskin, and M. Vasnetsov, Paraxial Light Beams with Angular Momentum"
      url: https://arxiv.org/pdf/0801.2309
      locator: "Full 87-page PDF retrieved; inspected §§2–3, PDF pp. 6–10, for the paraxial axis and azimuthal vortex modes. Its classical energy-flow split is not used as a quantum operator proof."
    - title: "David Tong, Quantum Field Theory, Chapter 6"
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: "Full author-hosted Chapter 6 HTML retrieved; §6.2.1 Eqs. 6.511–6.523 read in full; other sections not harvested."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice, and fix $0<\kappa_-<\kappa_+<\infty$ and $0<\theta_1<\theta_2<\theta_{\max}<\pi/2$. For each $\sigma\in\{+1,-1\}$ and $\ell\in\mathbb Z$, there exist nonzero real functions $a\in C_c^\infty((\kappa_-,\kappa_+))$ and $b\in C_c^\infty((\theta_1,\theta_2))$ that equal $1$ on nonempty subintervals. For any such functions, put $r=|\mathbf k|$ and let $\theta,\varphi$ be the spherical angles. On the support of $a(r)b(\theta)$ define $f^0_{\sigma,\ell}(\mathbf k)=a(r)b(\theta)e^{i\ell\varphi}e_\sigma^N(\mathbf k/r)$ and extend by zero. Set $A=\int_{\kappa_-}^{\kappa_+}r|a(r)|^2\,dr$, $B=\int_{\theta_1}^{\theta_2}\sin\theta\,|b(\theta)|^2\,d\theta$, and $f_{\sigma,\ell}=f^0_{\sigma,\ell}/\sqrt{\pi AB}$. Then $f_{\sigma,\ell}\in\mathcal D$, $\|f_{\sigma,\ell}\|_\nu=1$, $P_\sigma f_{\sigma,\ell}=f_{\sigma,\ell}$, and $J_zf_{\sigma,\ell}=(\ell+\sigma)\hbar f_{\sigma,\ell}$. The packet has compact positive radial support and nonzero angular width; its support avoids the axis, so $e^{i\ell\varphi}$ is smooth for every integer $\ell$.

## Statement references

[[def-qftx-paraxial-cone]]

[[thm-qftx-photon-rotations-helicity]]

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, the transverse one-photon Hilbert space with measure $d\nu=d^3\mathbf k/(2|\mathbf k|)$, the north-patch unit helicity frame, and the rotation convention $U(R_z(t))=e^{-itJ_z/\hbar}$.

[A1] Assume the Axiom of Choice for the Stone rotation generator and Countable Choice for the polar surface measure. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] The cone definition supplies $\mathcal H_T^\nu$, $d\nu=(r/2)\,dr\,d\Omega$, the smooth transverse domain $\mathcal D$, the unit frame $e_\sigma^N$, and its rotation phase $R_z(t)e_\sigma^N(\theta,\varphi-t)=e^{-i\sigma t}e_\sigma^N(\theta,\varphi)$. [[def-qftx-paraxial-cone]]

[F2] For every $0<r<R$ in $\mathbb R^3$, there is a smooth function equal to $1$ on $\overline B_r(0)$ and supported in $B_R(0)$. [[lem-smooth-bump-between-concentric-euclidean-balls]]

[F3] The spherical chart has surface element $d\Omega=\sin\theta\,d\theta\,d\varphi$. [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]

[F4] Fubini's theorem separates an integrable function on a sigma-finite product measure into its iterated integrals. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F5] On $\mathcal D$, the rotation group is $U(R_z(t))f(\mathbf k)=R_z(t)f(R_z(-t)\mathbf k)$ and $J_z$ is its self-adjoint Stone generator with convention $U(R_z(t))=e^{-itJ_z/\hbar}$. [[thm-qftx-photon-rotations-helicity]]

## Proof

**Given:** [A1], [F1]–[F5], and the interval constraints in the Statement.

1.1 For any nonempty bounded open interval $(u,v)$, choose $c$ and $\varepsilon>0$ with $[c-\varepsilon,c+\varepsilon]\subset(u,v)$. Apply [F2] in $\mathbb R^3$ with radii $\varepsilon/2<\varepsilon$, obtaining a smooth $\rho$ equal to $1$ on the smaller ball and supported in the larger. The restriction $g(x)=\rho((x-c)e_1)$ is smooth, equals $1$ on a neighborhood of $c$, and is supported in $(u,v)$. Applying this construction to $(\kappa_-,\kappa_+)$ and $(\theta_1,\theta_2)$ gives the required nonzero functions $a$ and $b$. [F2, given, construct]

2.1 The integrand $|a(r)|^2|b(\theta)|^2$ is bounded and supported in a finite radial annulus and a finite-measure spherical chart, so it is integrable. By [F1], [F3], and [F4],
$$\|f^0_{\sigma,\ell}\|_\nu^2=\frac12\left(\int_{\kappa_-}^{\kappa_+}r|a(r)|^2\,dr\right)\left(\int_{S^2}|b(\theta)|^2\,d\Omega\right)=\pi AB.$$
The first factor $A$ is finite and positive because $a$ is bounded, compactly supported, and equals $1$ on an interval. The spherical chart gives $\int_{S^2}|b(\theta)|^2d\Omega=2\pi B$, so $B$ is finite and positive for the same reason. Thus $0<\|f^0_{\sigma,\ell}\|_\nu^2=\pi AB<\infty$, and the stated normalization is valid. [A1, F1, F3, F4, step 1.1, algebra]

3.1 The support lies in $\kappa_-<r<\kappa_+$ and $\theta_1<\theta<\theta_2$, a compact region away from $\mathbf k=0$ and the azimuthal axis after taking the compact supports of $a,b$. The frame $e_\sigma^N$ is smooth and transverse with $P_\sigma e_\sigma^N=e_\sigma^N$ by [F1]; because $\ell$ is integral, $e^{i\ell\varphi}$ is single-valued and smooth on this region. Extension by zero is smooth since $a,b$ have compact support in the open intervals. Hence $f^0_{\sigma,\ell}\in\mathcal D$, and dividing by its positive norm preserves membership and helicity while giving norm one. [F1, step 1.1, step 2.1, given, algebra]

4.1 Under $R_z(-t)$, $r$ and $n_z$ stay fixed and $\varphi$ becomes $\varphi-t$. Therefore [F1] gives $U(R_z(t))f_{\sigma,\ell}=e^{-i\ell t}e^{-i\sigma t}f_{\sigma,\ell}=e^{-i(\ell+\sigma)t}f_{\sigma,\ell}$. Since $f_{\sigma,\ell}\in\mathcal D\subseteq D(J_z)$ by [F5], differentiating at $t=0$ in the Stone convention of [F5] yields $J_zf_{\sigma,\ell}=(\ell+\sigma)\hbar f_{\sigma,\ell}$. [A1, F1, F5, step 3.1, algebra] ∎
