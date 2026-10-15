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
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-em-sphere-zonal-moments
  - lem-qft-lorentz-boost-rotation-factorization
  - lem-qft-photon-null-quotient
  - lem-qft-second-quantized-spectrum
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
dependency_roles:
  def-countable-choice: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  def-qft-photon-transverse-space: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  lem-em-sphere-zonal-moments: mathematical-premise
  lem-qft-lorentz-boost-rotation-factorization: mathematical-premise
  lem-qft-photon-null-quotient: mathematical-premise
  lem-qft-second-quantized-spectrum: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
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

Assume Countable Choice. On the future null cone write $p=(\omega,\mathbf k)$, $\omega=|\mathbf k|$, $\mathbf k\ne0$, and use the measure $d\nu=d^3\mathbf k/(2\omega)$. The fiber $p^\perp/\mathbb Cp$ has the positive quotient form of [[lem-qft-photon-null-quotient]]. Give the proper orthochronous Lorentz group its matrix topology: the subspace topology inherited from $\mathbb R^{16}$ with Euclidean matrix norm $\|A\|_{\rm mat}=(\sum_{i,j=0}^3|A_{ij}|^2)^{1/2}$. For each proper orthochronous Lorentz transformation $\Lambda$, the action
$$[s(p)]\longmapsto[\Lambda s(\Lambda^{-1}p)]$$
is a unitary representation on the square-integrable quotient sections. It is strongly continuous for this topology, meaning $\|U_\Lambda s-U_{\Lambda_0}s\|\to0$ for every section $s$ as $\|\Lambda-\Lambda_0\|_{\rm mat}\to0$. Its bosonic Fock lift is strongly continuous for the same topology. Under the unitary identification with $\mathcal H_T$ given by
$T_p[\epsilon]:=\boldsymbol\epsilon-(\mathbf k/\omega)\epsilon^0$
and $u(\mathbf k)=T_p[s(p)]/\sqrt{2\omega}$, as in [[lem-qft-photon-null-quotient]], the free translation representation for $a=(a^0,\mathbf a)\in\mathbb R^4$ has phase $e^{i(\omega a^0-\mathbf k\cdot\mathbf a)}$. Its bosonic Fock lift has the joint PVM $\mathsf E$ whose $n$-particle sector acts by multiplication by $\mathbf1_{\{(\sum_{r=1}^n|\mathbf k_r|,-\sum_{r=1}^n\mathbf k_r)\in B\}}$ for Borel $B\subseteq\mathbb R^4$; on the vacuum it acts by $\mathbf1_B(0)$. Define its joint spectrum to be
$$\operatorname{supp}(\mathsf E):=\{q\in\mathbb R^4:\mathsf E(U)\ne0\text{ for every open neighborhood }U\text{ of }q\}.$$
Then this joint spectrum is the closed future cone
$$\overline V_+=\{(E,\mathbf P):E\ge|\mathbf P|\},$$
with the vacuum at $(0,\mathbf0)$. In the product realization of the sectors in [[lem-qft-second-quantized-spectrum]], on sector $n$ the energy operator multiplies by $\sum_{r=1}^n|\mathbf k_r|$ and has the exact maximal domain
$$D(H_E)=\left\{\Psi=(\Psi_n):\sum_{n\ge1}\int_{(\mathbb R^3)^n}\left(\sum_{r=1}^n|\mathbf k_r|\right)^2\|\Psi_n(\mathbf k_1,\ldots,\mathbf k_n)\|^2\,d^3\mathbf k_1\cdots d^3\mathbf k_n<\infty\right\},$$
with the vacuum component unrestricted; here $\Psi_n$ is the symmetric transverse wavefunction in the product realization and the norm is the product-fiber Hilbert norm. Each momentum operator $P_j$ multiplies by $-\sum_{r=1}^n k_{r,j}$ and has maximal domain
$$D(P_j)=\left\{\Psi=(\Psi_n):\sum_{n\ge1}\int_{(\mathbb R^3)^n}\left|\sum_{r=1}^n k_{r,j}\right|^2\|\Psi_n(\mathbf k_1,\ldots,\mathbf k_n)\|^2\,d^3\mathbf k_1\cdots d^3\mathbf k_n<\infty\right\},$$
again with unrestricted vacuum component. These are mathematical free-field representation statements.

## Facts & Assumptions

**Given:** Countable Choice; the quotient and transverse space; the proper-boost/rotation decomposition; the scalar second-quantized multiplier result; and the compactly supported smooth density statement.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] The subsidiary quotient is isometric to $\mathcal H_T$ and represents each fiber as $p^\perp/\mathbb Cp$. [[lem-qft-photon-null-quotient]]

[F2] Every proper orthochronous Lorentz map factors into a boost and a spatial rotation. [[lem-qft-lorentz-boost-rotation-factorization]]

[F3] Bosonic Fock sector multipliers have the exact maximal square-integrability domains, joint PVM, strongly continuous phase groups, and vacuum value zero. [[lem-qft-second-quantized-spectrum]]

[F4] Under Countable Choice, $C_c^\infty(\mathbb R^3;\mathbb C^3)$ is dense in $L^2(\mathbb R^3;\mathbb C^3)$, by applying the scalar Sobolev density result componentwise with $k=0,p=2$. [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]

[F5] A proper orthochronous Lorentz map preserves the Minkowski form and the future null cone; the spatial Euclidean norm is $|\mathbf k|=\sqrt{\mathbf k\cdot\mathbf k}$. [[def-lorentz-map-and-lorentz-group]] [[def-euclidean-inner-product]]

[F6] Polar coordinates give $d^3\mathbf k=r^2dr\,d\sigma(\mathbf n)$ on $\mathbb R^3$; hence $d\nu=d^3\mathbf k/(2|\mathbf k|)=(r/2)dr\,d\sigma(\mathbf n)$ off the origin. The annuli $\{1/n\le|\mathbf k|\le n\}$ have finite $\nu$-measure and cover its domain, so $\nu$ is sigma-finite. [[thm-polar-coordinates-formula-for-lebesgue-measure]]

[F7] For $\mathbf k\ne0$, $P_T(\mathbf k)=I-nn^T$ is a continuous orthogonal projection onto the rank-two plane $n^\perp$ and has norm at most one; these pointwise properties follow from the unit-vector formula in [[def-qft-photon-transverse-space]].

[F8] A rectangular box with finite side lengths has Lebesgue measure equal to the product of those lengths; in particular, every nonempty open ball contains a box of positive finite measure. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F9] Euclidean Cauchy–Schwarz bounds $|x\cdot y|\le|x||y|$, and the Euclidean norm satisfies the triangle inequality. [[thm-cauchy-schwarz-and-the-euclidean-norm]]

[F10] The polar surface measure of $S^2$ satisfies $\sigma(S^2)=4\pi$. [[lem-em-sphere-zonal-moments]]

[F11] In finite-dimensional Euclidean space, closed bounded sets are compact by [[thm-heine-borel-rn]]. A continuous map from a compact metric space to any metric space is uniformly continuous by [[thm-heine-cantor-metric]]. Step 3.1 uses these statements on a closed matrix box times a closed momentum annulus.

## Proof

**Given:** [A1], [F1]–[F11], the future-cone parametrization, and the componentwise Lorentz action.

1.1 By [F5], $\Lambda$ preserves $\eta$ and sends a future null vector $p$ to a future null vector $\Lambda p$. It maps $p^\perp$ onto $(\Lambda p)^\perp$ and $\mathbb Cp$ onto $\mathbb C\Lambda p$, so it induces a well-defined map on the quotient fiber. The induced form is preserved because $\eta(\Lambda v,\Lambda w)=\eta(v,w)$; hence the fiber map is an isometry. The map $T_p$ is independent of the representative: replacing $\epsilon$ by $\epsilon+cp$ changes its value by $c(\mathbf k-(\mathbf k/\omega)\omega)=0$. For $\epsilon\in p^\perp$, $\mathbf k\cdot T_p[\epsilon]=0$; its pairing is the positive quotient pairing of [F1]. The lift $\epsilon=(0,\sqrt{2\omega}\,u(\mathbf k))$ for transverse $u$ proves surjectivity, and $d\nu=d^3\mathbf k/(2\omega)$ gives $\int\|T_p[s(p)]\|^2d\nu=\int\|u(\mathbf k)\|^2d^3\mathbf k$. Thus the stated section identification is well-defined and unitary. Applying two Lorentz maps successively gives the representation composition law. [F1, F5, given, algebra]

1.2 The component identification of [F3] uses $X=\mathbb R^3\times\{1,2,3\}$ with Lebesgue measure times counting measure; $X$ is sigma-finite because the boxes $[-m,m]^3\times\{1,2,3\}$ have finite measure by [F8]. The finite measurable map $\boldsymbol\omega(\mathbf k,j)=(|\mathbf k|,-\mathbf k)$ lets us apply [F3]. It gives the PVM $\mathsf E(B)$ whose $n$-particle multiplier is $\mathbf1_{\{(\sum_r|\mathbf k_r|,-\sum_r\mathbf k_r)\in B\}}$, with vacuum multiplier $\mathbf1_B(0)$, and it gives the maximal componentwise multiplier domains. By [F7], $P_T(\mathbf k)$ is pointwise self-adjoint and idempotent, so it commutes with each scalar multiplier; its tensor powers commute with the n-particle PVM and multiplier. The symmetric transverse sector is reducing, so restriction preserves the maximal domain, which for the energy is exactly $D(H_E)$ displayed in the Statement. [A1, F3, F7, F8, given, algebra]

2.1 For the boost $B_n(\chi)$ in [F2], put $\beta=\tanh\chi$ and $\gamma=\cosh\chi$, so $|\beta|<1$ and $\gamma=(1-\beta^2)^{-1/2}$. In Euclidean unit direction $n$ [F5], its spatial cone coordinates satisfy
$$\mathbf k'=\mathbf k+(\gamma-1)(n\cdot\mathbf k)n+\gamma\beta\omega n,\qquad \omega'=\gamma(\omega+\beta n\cdot\mathbf k).$$
Taking $n$ as the third coordinate axis, the first two spatial coordinates are unchanged and
$$\frac{\partial k'_3}{\partial k_3} =\gamma\left(1+\beta\frac{k_3}{\omega}\right)=\frac{\omega'}{\omega}.$$
Thus $\det(\partial\mathbf k'/\partial\mathbf k)=\omega'/\omega$. A rotation has determinant one and preserves $\omega$. By [F2], every proper orthochronous $\Lambda$ is a product of these, so $d^3\mathbf k'/(2\omega')=d^3\mathbf k/(2\omega)$. Combining this change of variables with the fiber isometry in step 1.1 proves unitarity on the quotient-section space and verifies the stated identification with $\mathcal H_T$. [F2, F5, step 1.1, given, algebra]

2.2 Each joint multiplier value $(\sum_r|\mathbf k_r|,-\sum_r\mathbf k_r)$ lies in $\overline V_+$ by the triangle inequality [F9], so the PVM vanishes outside that closed cone. Fix a nonzero $\mathbf k_0$ and the boundary point $(|\mathbf k_0|,-\mathbf k_0)$. Choose $v\in\mathbb R^3$ not parallel to $\mathbf k_0$. By [F7], $P_T(\mathbf k_0)v\ne0$, and continuity gives a bounded open momentum neighborhood $V$ of $\mathbf k_0$, disjoint from zero, on which $\|P_T(\mathbf k)v\|$ is bounded below by a positive constant. Given any open neighborhood $G$ of $(|\mathbf k_0|,-\mathbf k_0)$, shrink $V$ so the map $\mathbf k\mapsto(|\mathbf k|,-\mathbf k)$ sends $V$ into $G$. Choose a ball inside $V$ and a positive finite-measure box $Q$ inside that ball by [F8]. The vector $u(\mathbf k)=\mathbf1_Q(\mathbf k)P_T(\mathbf k)v$ is a nonzero element of $\mathcal H_T$ supported over $G$, so $\mathsf E(G)u=u\ne0$. The vacuum supplies the origin. [A1, F3, F5, F7, F8, F9, step 1.2, given, construct]

3.1 Matrix multiplication is continuous, and the Lorentz equation gives $\Lambda^{-1}=\eta\Lambda^T\eta$, so inversion is continuous in the stated matrix topology. For $v\in C_c^\infty(\mathbb R^3;\mathbb C^3)$ with support in $B_R$, $R\ge1$, take the four-component representative $s_v(p)=(0,\sqrt{2\omega}\,P_T(\mathbf k)v(\mathbf k))$; under the stated unitary identification its class corresponds to $u=P_Tv\in\mathcal H_T$. Put $q=\Lambda^{-1}p$ and $a_\Lambda(\mathbf k)=T_p\Lambda(0,\sqrt{2q^0}\,P_T(\mathbf q)v(\mathbf q))$, the transverse chart representative of the transformed quotient section. If $\Lambda$ is sufficiently close to $I$, uniformly for future null $p$ one has $\omega/2\le q^0=|\mathbf q|\le2\omega$ and $\|\Lambda\|_{\rm op}\le2$: use $\|p\|_2=\sqrt2\omega$, the displayed inverse formula and the Euclidean Cauchy–Schwarz bound for a matrix acting on a vector. Thus $a_\Lambda$ vanishes outside $B_{2R}$, and $\|T_p\|_{\rm op}\le\sqrt2$, $\|P_T\|_{\rm op}\le1$ give $|a_\Lambda(\mathbf k)|\le C M\sqrt\omega$, where $M=\sup|v|$ and $C$ is independent of sufficiently small $\Lambda-I$. Consequently $|a_\Lambda-a_I|$ is bounded by a fixed constant $C_R M$ on the common support. Its squared $L^2(d\nu)$ contribution on $B_\delta$ is at most $C_R^2M^2\nu(B_\delta)=C_R^2M^2\pi\delta^2$ by [F6, F10]. On the annulus $\delta\le|\mathbf k|\le2R$, extend the explicit formula to matrices $A$ in a sufficiently small closed Euclidean matrix box about $I$ by putting $q=\eta A^T\eta p$. On that box $q^0$ and $|\mathbf q|$ remain positive, bounded away from zero on the annulus; the formula using $P_T(\mathbf q)=I-(\mathbf q/|\mathbf q|)(\mathbf q/|\mathbf q|)^T$ is therefore continuous. The box times annulus is closed bounded in $\mathbb R^{19}$, hence compact, and [F11] gives uniform continuity of this formula there. Restricting back to Lorentz matrices yields $a_\Lambda\to a_I$ uniformly on the annulus, which has finite $\nu$-measure by [F6]. First choose $\delta$, then $\Lambda-I$, to obtain $\|a_\Lambda-a_I\|_{L^2(d\nu)}\to0$; this is exactly the quotient-section norm. No fiber value at the omitted apex is used. These sections are dense by [F4, F7]: approximate any $u\in\mathcal H_T$ by smooth compactly supported $v$ and project by $P_T$. Unitarity from step 2.1 gives $\|U_\Lambda s-s\|\le2\|s-s_v\|+\|U_\Lambda s_v-s_v\|$, extending continuity to every section. At any $\Lambda_0$, the representation identity reduces continuity to $U_{\Lambda_0^{-1}\Lambda}\to I$, and $\Lambda_0^{-1}\Lambda\to I$ in the matrix topology. For an elementary $n$-tensor, telescoping and unitarity give $\|(U_\Lambda^{\otimes n}-I)(h_1\otimes\cdots\otimes h_n)\|\le\sum_{j=1}^n\|(U_\Lambda-I)h_j\|\prod_{l\ne j}\|h_l\|\to0$. Finite linear combinations are dense in the Hilbert tensor product; the symmetric projection is a contraction commuting with the tensor action, so continuity holds on each symmetric sector. The vacuum is fixed. Truncating an arbitrary Fock vector to finitely many sectors leaves an error bounded by twice its tail norm under these unitary maps; letting that tail tend to zero proves strong continuity on all Fock space. [A1, F1, F4, F5, F6, F7, F9, F10, F11, step 1.1, step 2.1, given, algebra]

4.1 Fix $(E,\mathbf P)$ with $E>|\mathbf P|$. Choose a unit $n\perp\mathbf P$; if $\mathbf P\ne0$, select a standard basis vector $w$ not parallel to $\mathbf P$ and normalize $w-(w\cdot\mathbf P/|\mathbf P|^2)\mathbf P$, while if $\mathbf P=0$ take any standard basis vector. Put $q=\tfrac12\sqrt{E^2-|\mathbf P|^2}$ and let $\mathbf k_1=-\mathbf P/2+qn$, $\mathbf k_2=-\mathbf P/2-qn$. Since $n\cdot\mathbf P=0$, $|\mathbf k_i|^2=|\mathbf P|^2/4+q^2=E^2/4$, so they are distinct nonzero momenta with $|\mathbf k_1|+|\mathbf k_2|=E$ and $-(\mathbf k_1+\mathbf k_2)=\mathbf P$. Given any open neighborhood $G$ of $(E,\mathbf P)$, continuity of the two-particle sum map gives disjoint bounded momentum neighborhoods $V_1,V_2$ of $\mathbf k_1,\mathbf k_2$ whose pairwise sums map into $G$. Choose fixed $v_i$ not parallel to $\mathbf k_i$ and shrink $V_i$ so $P_T(\mathbf k)v_i$ never vanishes there by [F7]; choose balls inside $V_i$ and positive finite-measure boxes $Q_i$ inside those balls by [F8]. The vectors $u_i(\mathbf k)=\mathbf1_{Q_i}(\mathbf k)P_T(\mathbf k)v_i$ are nonzero in $\mathcal H_T$. The symmetric vector $\Psi_2=P_{s,2}(u_1\otimes u_2)$ is nonzero because $Q_1$ and $Q_2$ are disjoint, and its two-particle multiplier values lie in $G$. Hence $\mathsf E(G)\Psi_2=\Psi_2\ne0$. Thus every neighborhood of $(E,\mathbf P)$ has nonzero two-particle spectral projection. Together with steps 1.2–2.2 this proves $\operatorname{supp}(\mathsf E)=\overline V_+$; [F3] gives the exact energy domain from step 1.2. [A1, F3, F5, F7, F8, step 1.2, step 2.2, given, construct] ∎
