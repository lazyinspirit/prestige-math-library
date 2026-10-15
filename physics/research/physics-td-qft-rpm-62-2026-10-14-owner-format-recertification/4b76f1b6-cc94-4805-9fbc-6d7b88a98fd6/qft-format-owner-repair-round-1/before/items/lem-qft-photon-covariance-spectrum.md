---
id: lem-qft-photon-covariance-spectrum
kind: lemma
title: Photon quotient Lorentz representation and positive dynamics
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-countable-choice
  - def-euclidean-inner-product
  - def-lorentz-map-and-lorentz-group
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - def-qft-photon-transverse-space
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - lem-qft-lorentz-boost-rotation-factorization
  - lem-qft-photon-null-quotient
  - lem-qft-second-quantized-spectrum
dependency_roles:
  def-countable-choice: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  def-qft-photon-transverse-space: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  lem-qft-lorentz-boost-rotation-factorization: mathematical-premise
  lem-qft-photon-null-quotient: mathematical-premise
  lem-qft-second-quantized-spectrum: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §§6.2.1–6.2.2
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; massless photon shell, Lorentz transformations and physical polarizations.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 book draft, §§54–56
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page book draft; photon modes, Lorentz-invariant shell measure and Coulomb gauge.
---

## Statement

Assume Countable Choice. On the future null cone write $p=(\omega,\mathbf k)$, $\omega=|\mathbf k|$, $\mathbf k\ne0$, and use the measure $d\nu=d^3\mathbf k/(2\omega)$. The fiber $p^\perp/\mathbb Cp$ has the positive quotient form of [[lem-qft-photon-null-quotient]]. For each proper orthochronous Lorentz transformation $\Lambda$, the action
$$[s(p)]\longmapsto[\Lambda s(\Lambda^{-1}p)]$$
is a unitary representation on the square-integrable quotient sections. It is strongly continuous. Under the unitary identification with $\mathcal H_T$ given by $u(\mathbf k)=s(p)/\sqrt{2\omega}$, the free translation representation has phase $e^{i(\omega a^0-\mathbf k\cdot\mathbf a)}$. Its bosonic Fock lift has joint spectrum the closed future cone
$$\overline V_+=\{(E,\mathbf P):E\ge|\mathbf P|\},$$
with the vacuum at $(0,\mathbf0)$. The energy is the nonnegative sector multiplier $\sum_{r=1}^n|\mathbf k_r|$ with the exact maximal square-integrability domain on each sector and square-summability over sectors. These are mathematical free-field representation statements.

## Facts & Assumptions

**Given:** Countable Choice; the quotient and transverse space; the proper-boost/rotation decomposition; the scalar second-quantized multiplier result; and the compactly supported smooth density statement.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] The subsidiary quotient is isometric to $\mathcal H_T$ and represents each fiber as $p^\perp/\mathbb Cp$. [[lem-qft-photon-null-quotient]]

[F2] Every proper orthochronous Lorentz map factors into a boost and a spatial rotation. [[lem-qft-lorentz-boost-rotation-factorization]]

[F3] Bosonic Fock sector multipliers have the exact maximal square-integrability domains, joint PVM, strongly continuous phase groups, and vacuum value zero. [[lem-qft-second-quantized-spectrum]]

[F4] Under Countable Choice, $C_c^\infty(\mathbb R^3;\mathbb C^3)$ is dense in $L^2(\mathbb R^3;\mathbb C^3)$, by applying the scalar Sobolev density result componentwise with $k=0,p=2$. [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]

[F5] A proper orthochronous Lorentz map preserves the Minkowski form and the future null cone; the spatial Euclidean norm is $|\mathbf k|=\sqrt{\mathbf k\cdot\mathbf k}$. [[def-lorentz-map-and-lorentz-group]] [[def-euclidean-inner-product]]

[F6] The measure $d\nu=d^3\mathbf k/(2|\mathbf k|)$ on $\mathbb R^3\setminus\{0\}$ is sigma-finite, since the annuli $\{1/n\le|\mathbf k|\le n\}$ have finite measure and cover its domain. [[thm-polar-coordinates-formula-for-lebesgue-measure]]

## Proof

**Given:** [A1]–[F6], the future-cone parametrization, and the componentwise Lorentz action.

1.1 By [F5], $\Lambda$ preserves $\eta$ and sends a future null vector $p$ to a future null vector $\Lambda p$. It maps $p^\perp$ onto $(\Lambda p)^\perp$ and $\mathbb Cp$ onto $\mathbb C\Lambda p$, so it induces a well-defined map on the quotient fiber. The induced form is preserved because $\eta(\Lambda v,\Lambda w)=\eta(v,w)$; hence the fiber map is an isometry. Applying two maps successively gives the representation composition law. [F1, F5, given, algebra]

1.2 For the boost $B_n(\chi)$ in [F2], put $\beta=\tanh\chi$ and $\gamma=\cosh\chi$, so $|\beta|<1$ and $\gamma=(1-\beta^2)^{-1/2}$. In Euclidean unit direction $n$ [F5], its spatial cone coordinates satisfy
$$\mathbf k'=\mathbf k+(\gamma-1)(n\cdot\mathbf k)n-\gamma\beta\omega n,\qquad
\omega'=\gamma(\omega-\beta n\cdot\mathbf k).$$
Taking $n$ as the third coordinate axis, the first two spatial coordinates are unchanged and
$$\frac{\partial k'_3}{\partial k_3}
=\gamma\left(1-\beta\frac{k_3}{\omega}\right)=\frac{\omega'}{\omega}.$$
Thus $\det(\partial\mathbf k'/\partial\mathbf k)=\omega'/\omega$. A rotation has determinant one and preserves $\omega$. By [F2], every proper orthochronous $\Lambda$ is a product of these, so $d^3\mathbf k'/(2\omega')=d^3\mathbf k/(2\omega)$. Combining this change of variables with the fiber isometry in step 1.1 proves unitarity on the quotient-section space and verifies the stated identification with $\mathcal H_T$. [F2, F5, step 1.1, given, algebra]

2.1 For $v\in C_c^\infty(\mathbb R^3;\mathbb C^3)$, consider the bundle section $s_v(p)=\sqrt{2\omega}\,P_T(\mathbf k)v(\mathbf k)$; under the stated unitary identification it corresponds exactly to $u=P_Tv\in\mathcal H_T$. In the transverse chart the transformed section is $T_p(\Lambda s_v(\Lambda^{-1}p))$, where $T_p$ is the explicit continuous fiber quotient map of [F1]. Its support stays in a fixed compact set for Lorentz transformations near the identity. Away from an arbitrarily small ball about $\mathbf k=0$, the momentum maps and fiber maps vary uniformly continuously; inside that ball $s_v$ is bounded and the $d\nu$ measure tends to zero with the radius. Hence the transformed sections converge in $L^2(d\nu)$ as $\Lambda\to I$. Such sections are dense: approximate any $u\in\mathcal H_T$ by $v\in C_c^\infty$ using [F4], and apply the bounded projection $P_T$; the transformed maps are unitary by step 1.2, so density extends continuity to every section. The Fock lift is strongly continuous on finite tensor products and the vacuum by this one-particle continuity; finite-particle vectors are dense, and its unitary bound extends continuity to all Fock space. [A1, F1, F4, step 1.2, given]

2.2 The measure for the one-particle shell is sigma-finite by [F6]. The phase in the statement is multiplication by the four-vector $(\omega,-\mathbf k)$. Identify $L^2(\mathbb R^3;\mathbb C^3)$ with scalar $L^2(\mathbb R^3\times\{1,2,3\})$ using counting measure on the three labels; [F3] then gives the joint PVM with sector multipliers $(\sum_r|\mathbf k_r|,-\sum_r\mathbf k_r)$ and their exact maximal domains. On each one-particle sector $P_T(\mathbf k)$ commutes with every scalar multiplier $1_B(|\mathbf k|,-\mathbf k)$; hence $P_T^{\otimes n}$ commutes with the n-particle joint PVM and multiplier. The symmetric transverse sector is reducing, so restriction preserves the exact multiplier domain. Each joint value $(\sum_r|\mathbf k_r|,-\sum_r\mathbf k_r)$ lies in $\overline V_+$ by the triangle inequality. Conversely, every nonzero lightlike boundary point is in the support of the one-particle measure, since every neighborhood of its momentum has positive measure and a nonzero transverse fiber. For $E>|\mathbf P|$, choose $\mathbf k_1=-\mathbf P/2+q n$ and $\mathbf k_2=-\mathbf P/2-q n$ with $n\perp\mathbf P$ and $q=\tfrac12\sqrt{E^2-|\mathbf P|^2}$ (when $\mathbf P=0$, choose any unit $n$). Then $|\mathbf k_1|+|\mathbf k_2|=E$ and $-(\mathbf k_1+\mathbf k_2)=\mathbf P$. Small neighborhoods of these nonzero momenta have positive measure and nonzero transverse fibers, so every neighborhood of $(E,\mathbf P)$ has nonzero two-particle spectral projection. The vacuum supplies the origin. Thus the joint spectrum is exactly $\overline V_+$, and [F3] gives the exact energy domain. [A1, F1, F3, F5, F6, step 1.2, given] ∎
