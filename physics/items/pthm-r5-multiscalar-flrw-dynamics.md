---
id: pthm-r5-multiscalar-flrw-dynamics
kind: physics-theorem
title: "Conditional homogeneous multi-field FLRW equations"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 2
deps:
  - def-r5-cosmology-4d-scalar-eft-data
  - post-r5-cosmology-4d-scalar-eft-model
  - def-gr-flrw-friedmann-system
  - def-gr-flrw-model-data
  - lem-gr-flrw-ricci-and-einstein-tensors
  - def-gr-hilbert-stress-energy-tensor
dependency_roles:
  def-r5-cosmology-4d-scalar-eft-data: formulation-prerequisite
  post-r5-cosmology-4d-scalar-eft-model: physical-assumption
  def-gr-flrw-friedmann-system: mathematical-premise
  def-gr-flrw-model-data: mathematical-premise
  lem-gr-flrw-ricci-and-einstein-tensors: mathematical-premise
  def-gr-hilbert-stress-energy-tensor: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional deduction in the source-free, spatially flat, homogeneous branch of the adopted four-dimensional multi-scalar EFT. The scalar equation, Hilbert stress tensor, energy density, pressure and two independent Einstein equations follow under the stated smoothness and natural-unit conventions. No equation of state, existence result, slow-roll approximation, observation or string compactification is assumed."
sources:
  references:
    - title: "M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "Complete review; §2.4 and §2.4.1, PDF pp. 21–24, for multi-field sigma-model equations and homogeneous FLRW dynamics. The proof below derives the local equations directly."
    - title: "Daniel Baumann, TASI Lectures on Inflation, arXiv:0907.5424"
      url: "https://arxiv.org/pdf/0907.5424"
      locator: "Complete lecture notes; Lecture 1 §§3.1–3.3 and 6.1–6.2, PDF pp. 15–31, for canonical scalar FLRW equations and the conditional model scope."
---

## Statement

Use the natural-unit convention $\hbar=c=1$. Let $I\subseteq\mathbb R$ be a nonempty open interval, let $\Sigma\subseteq\mathbb R^3$ be a nonempty connected open spatial chart domain with its Euclidean metric $\delta_{ij}$ and inherited orientation, and let $a\in C^\infty(I,(0,\infty))$. On the open product region $I\times\Sigma$, consider the spatially flat FLRW metric
$$ ds^2=-dt^2+a(t)^2\delta_{ij}dx^i dx^j $$
in the Euclidean spatial chart. This is the $k=0$, $c=1$ case of [[def-gr-flrw-model-data]]. Let $\Phi:I\times\Sigma\to\mathcal T$ be the restriction of the scalar field map in [[def-r5-cosmology-4d-scalar-eft-data]] to this region. Assume spatial homogeneity in the precise sense that there is a smooth curve $\phi:I\to\mathcal T_0$, with image in one target coordinate patch $q=(q^1,\ldots,q^N)$, such that $\Phi(t,\mathbf x)=\phi(t)$ for every $(t,\mathbf x)\in I\times\Sigma$. Write $\phi^i:=q^i\circ\phi$ and $\Phi^i:=\phi^i\circ\pi_I$, where $\pi_I:I\times\Sigma\to I$ is the projection. The target metric $G$ and potential $V$ are those of the EFT data; in this chart $G_{ij}$ is positive definite and smooth and $V$ is smooth (so in particular $G_{ij}\in C^2$ and $V\in C^1$), and $M_P>0$. Assume the matter-free adopted model of [[post-r5-cosmology-4d-scalar-eft-model]]: there is no other stress tensor and no direct scalar source. Define
$$ \Gamma^i{}_{jk}(G):=\frac12G^{i\ell}\left(\partial_jG_{\ell k}+\partial_kG_{\ell j}-\partial_\ell G_{jk}\right),\qquad D_t\dot\phi^i:=\ddot\phi^i+\Gamma^i{}_{jk}(G)\dot\phi^j\dot\phi^k,\qquad H:=\frac{\dot a}{a}. $$
Then scalar stationarity implies
$$ D_t\dot\phi^i+3H\dot\phi^i+G^{ij}\partial_jV=0. $$
The scalar Hilbert stress tensor is
$$ T_{\mu\nu}=G_{ij}(\Phi)\partial_\mu\Phi^i\partial_\nu\Phi^j -g_{\mu\nu}\left(\frac12G_{ij}(\Phi)g^{\alpha\beta}\partial_\alpha\Phi^i\partial_\beta\Phi^j+V(\Phi)\right). $$
The FLRW comoving observer field is $n=\partial_t$ by [[def-gr-flrw-model-data]] at $c=1$. For this homogeneous field $T_{0i}=0$ and $T_{ij}=p\,g_{ij}$; the comoving energy density $\rho:=T_{\mu\nu}n^\mu n^\nu$ and the common spatial pressure scalar $p$ are
$$ \rho=\frac12G_{ij}(\phi)\dot\phi^i\dot\phi^j+V(\phi),\qquad p=\frac12G_{ij}(\phi)\dot\phi^i\dot\phi^j-V(\phi). $$
With the adopted Einstein equation, its independent temporal and spatial components are
$$ 3M_P^2H^2=\rho,\qquad M_P^2(2\dot H+3H^2)=-p, $$
and consequently
$$ -2M_P^2\dot H=G_{ij}\dot\phi^i\dot\phi^j. $$
No barotropic equation of state is assumed.

## Statement references

[[def-r5-cosmology-4d-scalar-eft-data]], [[post-r5-cosmology-4d-scalar-eft-model]], [[def-gr-flrw-friedmann-system]], [[def-gr-flrw-model-data]], [[lem-gr-flrw-ricci-and-einstein-tensors]], [[def-gr-hilbert-stress-energy-tensor]]

## Facts & Assumptions

**Given:** The smooth spacetime field $\Phi(t,\mathbf x)=\phi(t)$ and positive target metric on a target chart, the spatially flat FLRW metric, compactly supported scalar stationarity, and the directly adopted Einstein field law in units $\hbar=c=1$.

[F1] [[def-r5-cosmology-4d-scalar-eft-data]]: the target is a finite-dimensional smooth manifold with smooth positive-definite metric $G$, smooth potential $V$, and a smooth field map into the target.

[F7] [[def-r5-cosmology-4d-scalar-eft-data]]: the spacetime datum includes an independent orientation and a smooth timelike vector field selecting its time orientation; on this flat FLRW chart the product orientation and $n=\partial_t$ supply them.

[F2] [[def-r5-cosmology-4d-scalar-eft-data]]: the Einstein-frame two-derivative scalar density is $-\frac12G_{ij}(\Phi)g^{\mu\nu}\partial_\mu\Phi^i\partial_\nu\Phi^j-V(\Phi)$, in units $\hbar=c=1$.

[A1] [[post-r5-cosmology-4d-scalar-eft-model]]: in the matter-free branch, scalar configurations are stationary under every compactly supported smooth target-coordinate variation.

[A2] [[post-r5-cosmology-4d-scalar-eft-model]]: the direct field law is $G_{\mu\nu}=M_P^{-2}T_{\mu\nu}$ with zero cosmological term and no other stress tensor.

[F3] [[def-gr-flrw-model-data]]: in a product chart the FLRW metric components are $g_{00}=-c^2$, $g_{0i}=0$, and $g_{ij}=a(t)^2\gamma_{ij}$; for this theorem $k=0$ and $c=1$.

[F4] [[lem-gr-flrw-ricci-and-einstein-tensors]] clause (c): $G_{00}=3(\dot a^2+kc^2)/a^2$, $G_{0i}=0$, and $G_{ij}=-((2a\ddot a+\dot a^2)/c^2+k)\gamma_{ij}$.

[F5] [[def-gr-flrw-friedmann-system]]: the Friedmann and acceleration equations are defined for the FLRW data.

[F6] [[def-gr-hilbert-stress-energy-tensor]]: in this convention a Hilbert tensor satisfies $\delta S=-\frac{1}{2c}\int T_{\mu\nu}\delta g^{\mu\nu}\,\mathrm{vol}_g$; here $c=1$.

## Proof

1.1 Vary the scalar action in a target chart by $\Phi^i\mapsto\Phi^i+s\eta^i$, where each smooth $\eta^i$ has compact support in an oriented spacetime coordinate patch. Differentiating the scalar density at $s=0$ gives $$\delta\mathcal L_\phi=-\frac12(\partial_kG_{ij})(\Phi)\eta^k\,\partial_\mu\Phi^i\partial^\mu\Phi^j-G_{ij}(\Phi)\partial_\mu\eta^i\,\partial^\mu\Phi^j-(\partial_kV)(\Phi)\eta^k.$$ In an oriented chart, the Levi-Civita formula and symmetry of $g^{\mu\nu}$ give $\Gamma^\mu{}_{\mu\lambda}=\frac12g^{\alpha\beta}\partial_\lambda g_{\alpha\beta}$. For an invertible matrix $A$ and a matrix $B$, the permutation expansion gives $\det(I+sB)=1+s\operatorname{tr}B+O(s^2)$, since only diagonal entries contribute at first order. Applying this with $B=A^{-1}\dot A$ gives $\frac{d}{ds}\det A=(\det A)\operatorname{tr}(A^{-1}\dot A)$ for every differentiable invertible matrix family. With $A=(g_{\alpha\beta})$ and $s=x^\lambda$, this identifies the trace above as $\partial_\lambda\log\sqrt{-g}$. Hence $\sqrt{-g}\nabla_\mu X_k^\mu=\partial_\mu(\sqrt{-g}X_k^\mu)$ for $X_k^\mu:=G_{kj}(\Phi)\partial^\mu\Phi^j$. Ordinary integration by parts and compact support therefore give $-\int\sqrt{-g}\,G_{ij}(\Phi)\partial_\mu\eta^i\,\partial^\mu\Phi^j\,d^4x=\int\sqrt{-g}\,\eta^i\nabla_\mu(G_{ij}(\Phi)\partial^\mu\Phi^j)\,d^4x$. Combining the terms yields the coefficient $$E_k=\nabla_\mu(G_{kj}(\Phi)\partial^\mu\Phi^j)-\frac12(\partial_kG_{ij})(\Phi)\partial_\mu\Phi^i\partial^\mu\Phi^j-(\partial_kV)(\Phi)$$ of $\eta^k$; the boundary term vanishes because $\eta$ is compactly supported. [F2, F7, algebra]

2.1 At fixed $\Phi$, varying the inverse spacetime metric in the scalar action and using [F6] and $\delta\sqrt{-g}=-\frac12\sqrt{-g}\,g_{\mu\nu}\delta g^{\mu\nu}$ gives $$\delta S_\phi=-\frac12\int\sqrt{-g}\left[G_{ij}(\Phi)\partial_\mu\Phi^i\partial_\nu\Phi^j-g_{\mu\nu}\left(\frac12G_{ij}(\Phi)\partial_\alpha\Phi^i\partial^\alpha\Phi^j+V(\Phi)\right)\right]\delta g^{\mu\nu}\,d^4x.$$ By the Hilbert-tensor convention this bracket is the displayed $T_{\mu\nu}$. [F2, F6, step 1.1, algebra]

2.2 Stationarity [A1] makes $\int\sqrt{-g}\,E_k\eta^k\,d^4x=0$ for every compactly supported test variation. If continuous $E_k$ were nonzero at a point, it would have a fixed strict sign on a coordinate ball $B_r(x_0)$ whose closure lies in the variation chart. The function $\eta(x)=\exp\!\bigl(-1/(1-|x-x_0|^2/r^2)\bigr)$ for $|x-x_0|<r$, extended by zero outside that ball, is smooth, nonnegative and compactly supported; its derivatives tend to zero at the boundary because $e^{-1/s}$ times every power of $s^{-1}$ tends to zero as $s\downarrow0$. Taking $\eta$ in the $k$th component and zero in the other components makes the integral nonzero, since $\sqrt{-g}>0$, a contradiction. Thus $E_k=0$ pointwise. The chain rule gives $E_k=G_{kj}(\Phi)\Box_g\Phi^j+\left(\partial_iG_{kj}-\frac12\partial_kG_{ij}\right)(\Phi)\partial_\mu\Phi^i\partial^\mu\Phi^j-(\partial_kV)(\Phi)$. Since $\partial_\mu\Phi^i\partial^\mu\Phi^j$ is symmetric in $i,j$, multiplying by $G^{\ell k}(\Phi)$ and symmetrizing its coefficient gives $\frac12G^{\ell k}(\Phi)(\partial_iG_{kj}+\partial_jG_{ki}-\partial_kG_{ij})(\Phi)=\Gamma^\ell{}_{ij}(G)(\Phi)$. Hence $$\Box_g\Phi^\ell+\Gamma^\ell{}_{ij}(G)(\Phi)\partial_\mu\Phi^i\partial^\mu\Phi^j-G^{\ell j}(\Phi)(\partial_jV)(\Phi)=0,\qquad \Box_g f:=\nabla_\mu\partial^\mu f.$$ [F1, A1, step 1.1, algebra]

3.1 By the explicit factorization $\Phi^i(t,\mathbf x)=\phi^i(t)$, $\partial_j\Phi^i=0$, while [F3] gives $g_{00}=-1$. Hence $T_{00}=G_{ij}(\phi)\dot\phi^i\dot\phi^j-g_{00}(-\frac12G_{ij}(\phi)\dot\phi^i\dot\phi^j+V(\phi))=\frac12G_{ij}(\phi)\dot\phi^i\dot\phi^j+V(\phi)=\rho$, $T_{0i}=0$, and $T_{ij}=a^2\delta_{ij}(\frac12G_{mn}(\phi)\dot\phi^m\dot\phi^n-V(\phi))=p\,g_{ij}$. This is an isotropic stress with the displayed comoving density and pressure. [F3, step 2.1, algebra]

3.2 In the flat metric of [F3], the Levi-Civita formula gives $\Gamma^0{}_{00}=0$ and $\Gamma^i{}_{0j}=\frac12g^{ik}\dot g_{kj}=H\delta^i{}_j$. For $X^\mu:=\partial^\mu\Phi^i$, the factorization $\Phi^i(t,\mathbf x)=\phi^i(t)$ gives $X^0=-\dot\phi^i$ and $X^j=0$; therefore $\Box_g\Phi^i=\nabla_\mu X^\mu=\partial_0X^0+\Gamma^0{}_{00}X^0+\sum_{j=1}^3\Gamma^j{}_{j0}X^0=-\ddot\phi^i-3H\dot\phi^i$. Also $\partial_\mu\Phi^j\partial^\mu\Phi^k=-\dot\phi^j\dot\phi^k$. Substituting these identities in step 2.2 and multiplying by $-1$ yields $D_t\dot\phi^i+3H\dot\phi^i+G^{ij}(\phi)(\partial_jV)(\phi)=0$. [F3, step 2.2, algebra]

4.1 By [A2], $G_{\mu\nu}=M_P^{-2}T_{\mu\nu}$. Substitution of [F4] with $k=0,c=1$ and step 3.1 gives $3H^2=\rho/M_P^2$ and $(2a\ddot a+\dot a^2)/a^2=-p/M_P^2$ from the temporal and spatial components. Since $(2a\ddot a+\dot a^2)/a^2=2\ddot a/a+H^2=2\dot H+3H^2$, these are the two displayed Einstein equations. [A2, F4, step 3.1, algebra]

5.1 Subtracting the temporal equation of step 4.1 from its spatial equation yields $-2M_P^2\dot H=\rho+p=G_{ij}\dot\phi^i\dot\phi^j$. This uses no division by $H$, so it includes static instants and turning points. With $k=\Lambda=0$ and $c=1$, the first two equations are the Friedmann and acceleration equations of [F5]; their density and pressure are those computed in step 3.1. No barotropic relation was introduced. [F5, step 3.1, step 4.1, algebra] ∎

## Remarks

- The proof only varies scalar fields; the Einstein equation is the separate direct-equation postulate [A2]. The two premises are not presented as a derivation of the gravitational law from action stationarity.
- There is no use of a perfect-fluid equation-of-state supplier. The scalar stress tensor is computed directly, and its induced $\rho(t)$ and $p(t)$ need not satisfy a separately prescribed barotropic law.
- This is a conditional model deduction. It establishes no solution for arbitrary initial data, slow-roll regime, observational fit, or global string realization.
