---
id: def-qft-dirac-projections
kind: definition
title: Dirac Clifford matrices and energy projections
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qft-fock-and-test-spaces
  - def-countable-choice
  - def-qft-scalar-mass-shell
  - def-sr-affine-minkowski-model
  - def-inertial-frame-and-inertial-chart
  - def-sine-and-cosine-by-power-series
dependency_roles:
  def-qft-fock-and-test-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qft-scalar-mass-shell: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapters 4–5
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
      locator: Complete 155-page author-hosted notes; Chapter 4 Clifford algebra, spinor representation and plane-wave solutions, and Chapter 5 free Dirac field.
    - title: Niklas Beisert, Quantum Field Theory I, ETH Zürich 2025 HS complete lecture notes
      url: https://people.phys.ethz.ch/~nbeisert/lectures/QFT1-25HS-Notes.pdf
      locator: Complete 194-page official course notes; Chapter 5 §§5.1, 5.2, 5.4–5.6, printed 5.1–5.6 and 5.10–5.18, for Clifford algebra, spinor covariance, Hamiltonian form and fermionic quantization. The exact local conventions and domains are proved in the library.
---

## Definition

Assume Countable Choice [[def-countable-choice]], the mathematical scalar shell conventions of [[def-qft-scalar-mass-shell]], and the second-variable-linear Hilbert pairing of [[def-qft-fock-and-test-spaces]]. In the fixed inertial coordinates $x=(x^0,\mathbf x)$ of [[def-inertial-frame-and-inertial-chart]] on the affine Minkowski model [[def-sr-affine-minkowski-model]], $\eta=\operatorname{diag}(-1,1,1,1)$; these coordinates have length units under [[def-qft-scalar-mass-shell]]. The parameter $\mu\ge0$ and momentum coordinate $\mathbf k$ have inverse-length units, and $\omega(\mathbf k)=\sqrt{|\mathbf k|^2+\mu^2}$ has the same units. The parameter is not identified here with a physical rest mass. Matrix $h_D$ has inverse-length units; the dimensionless spin matrices have no physical unit assignment in this mathematical item.

Use the Pauli matrices $\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, and $\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. On $\mathbb C^4=\mathbb C^2\oplus\mathbb C^2$, define
$$\beta=\begin{pmatrix}I_2&0\\0&-I_2\end{pmatrix},\qquad \alpha_j=\begin{pmatrix}0&\sigma_j\\\sigma_j&0\end{pmatrix},\qquad \gamma^0=\beta,\qquad \gamma^j=\beta\alpha_j.$$
For a spinor column $z\in\mathbb C^4$, its Dirac adjoint is $\bar z=z^\dagger\beta$. The Clifford contraction is $\Gamma(p):=\gamma^0p^0-\sum_{j=1}^3\gamma^jp_j$; this contraction uses the effective matrix $-\eta$ in the relation $\{\gamma^a,\gamma^b\}=-2\eta^{ab}I_4$.

Let $\mathcal H_D$ be the space of measurable functions $u:\mathbb R^3\to\mathbb C^4$, modulo equality almost everywhere, with
$$\|u\|^2=\int_{\mathbb R^3}u(\mathbf k)^\dagger u(\mathbf k)\,\frac{d^3\mathbf k}{(2\pi)^3}<\infty,$$
and pairing $\langle u,v\rangle=\int u(\mathbf k)^\dagger v(\mathbf k)\,d^3\mathbf k/(2\pi)^3$. Define the measurable matrix $h_D(\mathbf k)=\sum_j\alpha_j k_j+\beta\mu$ and its maximal multiplication operator with domain $D(h_D)=\{u\in\mathcal H_D:h_Du\in\mathcal H_D\}$. For $\omega(\mathbf k)>0$, define the matrix fields
$$P_\pm(\mathbf k)=\frac12\left(I_4\pm\frac{h_D(\mathbf k)}{\omega(\mathbf k)}\right).$$
When $\mu=0$ at $\mathbf k=0$, set $P_+(0)=\operatorname{diag}(I_2,0)$ and $P_-(0)=\operatorname{diag}(0,I_2)$. These are complementary rank-two orthogonal projections; the value at this Lebesgue-null point does not change their multiplication operators. Write $M_{P_\pm}$ for their maximal multiplication operators and $\mathcal H_\pm=\operatorname{ran}M_{P_\pm}$. The companion matrix lemma on this page proves these are bounded orthogonal projections with closed ranges. The conjugate Hilbert space $\overline{\mathcal H_-}$ has vectors $\bar u$, scalar multiplication $z\bar u=\overline{\bar z u}$, and pairing $\langle\bar u,\bar v\rangle=\langle v,u\rangle$.

Use the sine and cosine definitions of [[def-sine-and-cosine-by-power-series]]. For a length-coordinate increment $t\in\mathbb R$ and $\omega(\mathbf k)>0$, define the matrix multiplier
$$W_D(t,\mathbf k)=\cos(\omega t)I_4+i\frac{\sin(\omega t)}{\omega}h_D(\mathbf k).$$
At the massless apex set $W_D(t,0)=I_4$. Its unitarity, group law and generator identity are proved by the companion matrix lemma on this page.

The symbols $P_+$ and $P_-$ designate the positive- and negative-energy matrix formulas for this fixed free Dirac operator. This is purely mathematical data; no physical spin-statistics postulate or empirical assertion is included.
