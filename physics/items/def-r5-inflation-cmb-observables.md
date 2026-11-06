---
id: def-r5-inflation-cmb-observables
kind: definition
title: "Primordial scalar and tensor observables for inflation models"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 1
deps:
  - def-r5-cosmology-4d-scalar-eft-data
  - def-gr-flrw-model-data
dependency_roles:
  def-r5-cosmology-4d-scalar-eft-data: formulation-prerequisite
  def-gr-flrw-model-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
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
physical_scope: "Definitions of the dimensionless primordial curvature and tensor spectra and the pivot quantities A_s, n_s and r for a specified perturbation model. The item is not an inflationary prediction, CMB likelihood, observational report, parameter constraint, or statistical inference."
sources:
  references:
    - title: "M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "Complete review; §§2.3.2–2.3.3 and §2.4.2, PDF pp. 15–25, for primordial spectra, scale dependence and the multi-field perturbation context."
    - title: "Daniel Baumann, TASI Lectures on Inflation, arXiv:0907.5424"
      url: "https://arxiv.org/pdf/0907.5424"
      locator: "Complete 159-page lecture-note PDF; Lecture 2 §§9–13, PDF pp. 43–59, for gauge-invariant curvature perturbations, scalar/tensor two-point functions, Fourier and dimensionless spectrum conventions, pivot quantities and their model interpretation."
---

## Definition

Fix the noncompact, spatially flat FLRW branch $\Sigma=\mathbb R^3$ of the cosmological EFT data in [[def-r5-cosmology-4d-scalar-eft-data]], with $\gamma_{ij}=\delta_{ij}$ and metric
$$ ds^2=-dt^2+a(t)^2\delta_{ij}dx^i dx^j. $$
Here $I\subseteq\mathbb R$ is the cosmic-time interval, $a\in C^\infty(I,(0,\infty))$ carries length, $\mathbf x\in\mathbb R^3$ is dimensionless, and $n=\partial_t$ is the background comoving unit timelike observer field, $g(n,n)=-1$, from [[def-gr-flrw-model-data]]. A Fourier covector $\mathbf k$ is dimensionless in this chart; its spatial momentum magnitude measured by $n$ is $k/a$, where $k=|\mathbf k|$. All linear perturbations below are evaluated on one declared primordial slice $t=t_*$, before any separately specified late-time transfer to CMB angular observables. The formulas use the continuous Fourier convention on $\mathbb R^3$; a compact flat spatial quotient instead requires its discrete Laplacian modes and corresponding covariance normalization.

**(a) Scalar curvature perturbation.** Let $J\subseteq I$ be an open time interval containing the chosen slice $t=t_*$. On $J\times\mathbb R^3$, take $\tilde g$ to be a smooth Lorentzian metric of signature $(-,+,+,+)$ and write $\tilde g_{\mu\nu}=g_{\mu\nu}+\delta g_{\mu\nu}$, where $\delta g$ is a smooth symmetric covariant $2$-tensor retained only to first order. Choose the time orientation of $\tilde g$ continuously from the background observer $n=\partial_t$. Assume $t$ is a time function for $\tilde g$: its level sets are spacelike and $\tilde g^{\mu\nu}\partial_\mu t\partial_\nu t<0$, with $-\tilde g^{\mu\nu}\partial_\nu t$ future-directed. Let $\tilde T_{\mu\nu}$ be the specified smooth symmetric total perturbed stress tensor. Write the spatial components' scalar/vector/tensor decomposition, for nonzero Fourier modes, as
$$ \tilde g_{ij}=a^2\bigl[(1-2\psi)\delta_{ij}+2\partial_i\partial_jE+\partial_iF_j+\partial_jF_i+h_{ij}\bigr],\qquad \partial_iF_i=0,\quad \partial_i h_{ij}=0,\quad \delta_{ij}h_{ij}=0. $$
The scalar functions $\psi,E$ are the scalar components in this decomposition; $F_i$ is transverse and $h_{ij}$ is transverse-traceless. The future-directed unit normal to the perturbed time slices is
$$\tilde n^\mu=-\frac{\tilde g^{\mu\nu}\partial_\nu t}{\sqrt{-\tilde g^{\alpha\beta}\partial_\alpha t\,\partial_\beta t}}.$$
Define the slice energy density by $\rho:=\tilde T_{\mu\nu}\tilde n^\mu\tilde n^\nu$. Write $\bar\rho(t)$ for its homogeneous background value and $\delta\rho(t,\mathbf x)$ for its first-order perturbation in the same gauge. Let $H:=\dot a/a$. On a background interval where $\dot{\bar\rho}\ne0$, define
$$ \zeta:=-\psi-H\frac{\delta\rho}{\dot{\bar\rho}}. $$
Adopt the linear time-slicing convention $\psi\mapsto\psi+H\Delta t$ and $\delta\rho\mapsto\delta\rho-\dot{\bar\rho}\Delta t$ for a smooth slicing shift $\Delta t(t,\mathbf x)$. The two shift terms cancel, so $\zeta$ is gauge invariant at linear order in this convention; on a uniform-density slice, where $\delta\rho=0$, $\zeta=-\psi$. This definition does not identify $\zeta$ with a comoving-slice curvature variable $\mathcal R$. A model using $\mathcal R$ must define it from its momentum perturbation and state and establish any claimed equality under the model's exact gauge, matter, and scale assumptions.

**(b) Tensor perturbation.** For each $\hat{\mathbf k}=\mathbf k/k$, $k>0$, choose a local polarization basis $e^s_{ij}(\hat{\mathbf k})$, $s\in\{+,\times\}$, spanning the two-dimensional transverse-traceless subspace and satisfying
$$ \hat k_i e^s_{ij}=0,\qquad \delta_{ij}e^s_{ij}=0,\qquad e^s_{ij}e^{s'*}_{ij}=2\delta_{ss'}. $$
With $h_{ij}(\mathbf k)$ the Fourier transform of the tensor part in (a), reality requires $h_{ij}(-\mathbf k)=\overline{h_{ij}(\mathbf k)}$; choose paired polarization bases at opposite directions so their amplitudes obey this relation. Define the polarization amplitudes by
$$ h_{ij}(\mathbf k)=\sum_{s=+,\times}e^s_{ij}(\hat{\mathbf k})h^s_{\mathbf k}. $$

**(c) Fourier and spectrum convention.** Let $\mathscr S(\mathbb R^3)$ denote the complex smooth functions $f$ for which every seminorm $\sup_x|x^\alpha\partial^\beta f(x)|$ is finite, for multi-indices $\alpha,\beta\in\mathbb N_0^3$, with the topology generated by those seminorms. A tempered distribution is a continuous complex linear functional on this test space; a real distribution obeys $Z(\bar f)=\overline{Z(f)}$. On the fixed slice, treat $\zeta$ and $h_{ij}$ as real tempered distributions on $\mathbb R^3$ (or random tempered distributions); Fourier transforms and the equalities below are understood distributionally. For any perturbation $f$, define $f_{\mathbf k}:=\int_{\mathbb R^3}e^{-i\mathbf k\cdot\mathbf x}f(\mathbf x)\,d^3x$ in the tempered-distribution sense and use the inverse convention
$$ f(\mathbf x)=\int\frac{d^3k}{(2\pi)^3}e^{i\mathbf k\cdot\mathbf x}f_{\mathbf k}. $$
The omitted zero mode is part of the background. Let the specified classical ensemble be a probability law on these fields, with $\langle\cdot\rangle$ its expectation. Require measurable smeared fields, finite second moments, and continuous one-point and jointly continuous bilinear two-point functionals on $\mathscr S$; require a supplied tempered two-point distribution on $\mathbb R^3\times\mathbb R^3$ for each component pair whose pairing with $f\otimes g$ equals the corresponding second moment. For a quantum model, let $\mathfrak A$ be its specified unital $*$-algebra of perturbation observables and $\omega:\mathfrak A\to\mathbb C$ its specified state, meaning a positive linear functional with $\omega(1)=1$; supply complex linear smearing maps $Z,H_{ij}:\mathscr S(\mathbb R^3)\to\mathfrak A$ with $Z(f)^*=Z(\bar f)$ and $H_{ij}(f)^*=H_{ij}(\bar f)$, representing the quantized linear perturbations $\zeta,h_{ij}$ of (a)-(b), with the tensor symmetry, transverse and trace constraints imposed distributionally. Require $f\mapsto\omega(Z(f))$ and its tensor analogues to be continuous, and $(f,g)\mapsto\omega(A(f)B(g))$ jointly continuous for every pair of components $A,B\in\{Z,H_{ij}\}$. Also supply a tempered distribution $W_{AB}$ on $\mathbb R^3\times\mathbb R^3$ for every component pair with $W_{AB}(f\otimes g)=\omega(A(f)B(g))$. These are explicit correlation-data requirements, not an asserted existence theorem for an arbitrary algebra and state; no pointwise mode is an algebra element. Write $\langle A\rangle_\omega:=\omega(A)$ in the order displayed. In the classical branch use $Z(f):=\zeta(f)$ and $H_{ij}(f):=h_{ij}(f)$ as random variables. For either branch define the Fourier-smeared field by $\widehat Z(f)=Z(\mathcal F f)$, where $(\mathcal F f)(x)=\int e^{-ik\cdot x}f(k)\,d^3k$, and likewise for $H$. The notation $\langle\zeta_{\mathbf k}\zeta_{\mathbf k'}\rangle$ below denotes the distribution whose pairing with $f(k)g(k')$ is $\omega(\widehat Z(f)\widehat Z(g))$ (classical expectation in the ensemble branch). Define connected pairings by subtracting the product of one-point pairings. Polarization amplitudes mean contraction of $\widehat H_{ij}$ with $e^{s*}_{ij}/2$ on smooth paired polarization patches away from $k=0$, using compactly supported tests there; all displayed polarization identities are in this patchwise distributional sense. In either case the formulas use connected two-point expectations, $\langle AB\rangle_c:=\langle AB\rangle-\langle A\rangle\langle B\rangle$. For the classical ensemble and quantum-state branches, the slice quantities in (a) are represented at the level of their smearings by the supplied distributional fields and correlation data; this does not construct a pointwise perturbed metric or normal from arbitrary distributional data. Statistical homogeneity and isotropy mean invariance of these two-point distributions under translations and rotations of $\mathbb R^3$. Assume their nonzero-mode spectral measures have the displayed nonnegative, locally integrable density functions $\mathcal P_\zeta(k)$ and $\mathcal P_t^s(k)$ for $k>0$, with specified pointwise representatives wherever pivot values are used; any infrared regulator or singular spectral part is separately stated. The Dirac distribution is normalized by $\int_{\mathbb R^3}\delta^3(\mathbf k)\varphi(\mathbf k)\,d^3k=\varphi(0)$ for test functions $\varphi$. The covariance conventions are
$$ \langle\zeta_{\mathbf k}\zeta_{\mathbf k'}\rangle_c=(2\pi)^3\delta^3(\mathbf k+\mathbf k')\frac{2\pi^2}{k^3}\mathcal P_\zeta(k), $$
$$ \langle h^s_{\mathbf k}h^{s'}_{\mathbf k'}\rangle_c=(2\pi)^3\delta^3(\mathbf k+\mathbf k')\delta_{ss'}\frac{2\pi^2}{k^3}\mathcal P_t^s(k). $$
The displayed tensor covariance is the adopted polarization-diagonal convention. In the real $+,\times$ basis, rotational invariance together with this diagonal form entails $\mathcal P_t^+(k)=\mathcal P_t^\times(k)$. If tensor polarizations have a cross-covariance, specify the full polarization matrix and define the total spectrum as its trace under this normalization; an isotropic parity-odd component must be represented in that full matrix. If tensor polarizations are cross-correlated or have a non-diagonal covariance, specify the full polarization matrix and define the total spectrum as its trace under this normalization. This convention sets scalar-tensor cross-correlations to zero; any model retaining them must state the cross-spectrum separately. Define $\mathcal P_t(k):=\sum_{s=+,\times}\mathcal P_t^s(k)$, so both tensor polarizations are included exactly once. All these spectra are dimensionless in the stated Fourier convention. Under a coordinate rescaling $\mathbf y=L_0\mathbf x$, $\tilde a=a/L_0$, $\tilde k=k/L_0$ for $L_0>0$, the spectral arguments and pivot rescale together while $\mathcal P_\zeta$ and $\mathcal P_t$ remain unchanged.

**(d) Pivot observables.** Choose and report a pivot $k_*>0$ in the same Fourier convention at which the selected representative of $\mathcal P_\zeta$ is positive and differentiable with respect to $\ln k$, and the selected representative of $\mathcal P_t$ has a finite value. A locally integrable spectral density specified only up to almost-everywhere equality does not determine $r$ at a single pivot; the pointwise representative there is part of the supplied spectral data. Define
$$ A_s:=\mathcal P_\zeta(k_*),\qquad n_s-1:=\left.\frac{d\ln\mathcal P_\zeta}{d\ln k}\right|_{k=k_*},\qquad r:=\frac{\mathcal P_t(k_*)}{\mathcal P_\zeta(k_*)}. $$
For example, if a source quotes $\tilde k_*$ in inverse-length coordinates $\mathbf y=L_0\mathbf x$, then the corresponding dimensionless pivot here is $k_*=L_0\tilde k_*$. Any slow-roll expansion, approximation order, number-of-e-folds convention, reheating map, late-time transfer function, likelihood, prior, data set and uncertainty convention is separate explicitly declared input. These are primordial model definitions, not an inflationary prediction, CMB measurement or fit.

## Definition references

[[def-r5-cosmology-4d-scalar-eft-data]], [[def-gr-flrw-model-data]]
