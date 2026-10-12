---
id: ex-nrqm-uncertainty-gaussian-minimum-spread
aliases: [nrqm-uncertainty-gaussian-minimum-spread]
kind: example
domain: physics
title: "The Gaussian family attains the position-momentum bound in the massive model"
status: draft
origin: pipeline
dependency_level: 12
deps: [def-countable-choice, def-heat-kernel, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-uncertainty-preparation-spread, def-schwartz-space-and-its-seminorms, lem-classical-derivatives-are-weak-derivatives, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, lem-first-and-second-moments-of-the-heat-kernel, lem-heat-kernel-normalisation-scaling-and-derivatives, lem-nrqm-composites-momentum-fourier-jacobian, lem-nrqm-kinematics-momentum-representation, pthm-nrqm-kinematics-spin-s-outcome-laws, pthm-nrqm-observables-preparation-moments, pthm-nrqm-uncertainty-position-momentum-relation, thm-gaussian-integral, thm-tonelli-theorem-for-sigma-finite-product-spaces]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-heat-kernel: mathematical-premise
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-uncertainty-preparation-spread: formulation-prerequisite
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  lem-first-and-second-moments-of-the-heat-kernel: mathematical-premise
  lem-heat-kernel-normalisation-scaling-and-derivatives: mathematical-premise
  lem-nrqm-composites-momentum-fourier-jacobian: mathematical-premise
  lem-nrqm-kinematics-momentum-representation: mathematical-premise
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  pthm-nrqm-observables-preparation-moments: physical-result
  pthm-nrqm-uncertainty-position-momentum-relation: physical-result
  thm-gaussian-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "An exact model computation for the spin-0 massive particle model of the framework: the normalized Gaussian preparation, its position and momentum outcome densities, the spreads sigma/sqrt(2) and hbar/(sigma sqrt(2)) and the product hbar/2, and the linear dependence of its centered position and momentum vectors that realizes the equality case of the position-momentum preparation relation. The example uses the model's own sharp outcome laws and the cited mathematics; it computes no dynamics, models no measurement, records no empirical value and claims no characterization of all equality states."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.4.1, printed pages 86-88 (PDF pages 89-91): the Gaussian wavepacket, its position and momentum variances and the saturation Delta x Delta p = hbar/2"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 2.3.2-2.3.3 and Box 2.3, printed pages 27-31 (PDF pages 35-39): the Gaussian packet's momentum-space amplitude, the dispersion product sigma_p sigma = hbar/2 and the Gaussian integral"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5 'Uncertainty Principle and Compatible Observables', Section 2, printed pages 3-6: the saturation conditions of the uncertainty inequality"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
verification:
  precheck: pass
---

## Example

Adopt the observable and probability postulate P2 and the massive-particle
model postulate P5 read through
[[def-nrqm-kinematics-framework-massive-spin-s-model]] for a spinless particle
($s=0$, $r=1$) of mass parameter $m>0$, and assume the Axiom of Countable
Choice ([[def-countable-choice]],
[[def-nrqm-observables-framework-observable-and-outcome-law]]). Fix a width
$\sigma>0$ and define
$$\psi_{\sigma}(x):=(\pi\sigma^{2})^{-3/4}e^{-|x|^{2}/(2\sigma^{2})},\qquad x\in\mathbb R^{3},$$
with momentum width $\sigma_{p}:=\hbar/\sigma$ and momentum representative
$U\psi_{\sigma}$ under the model's momentum transform $U$. Then:

(i) $\psi_{\sigma}\in\mathcal S(\mathbb R^{3};\mathbb C)$ is a unit vector, so
its ray is a pure preparation; $\psi_{\sigma}\in D(Q_{j})\cap D(P_{k})$ for all
$j,k$, and $P_{j}\psi_{\sigma}=i\hbar\sigma^{-2}x_{j}\psi_{\sigma}$;

(ii) the position outcome law of $Q_{j}$ has density
$(\pi\sigma^{2})^{-1/2}e^{-t^{2}/\sigma^{2}}$ in the coordinate $t=x_{j}$,
with mean $0$ and variance $\sigma^{2}/2$, so
$\Delta_{\psi_{\sigma}}Q_{j}=\sigma/\sqrt2$;

(iii) $U\psi_{\sigma}=\psi_{\sigma_{p}}$, that is
$$(U\psi_{\sigma})(p)=(\pi\sigma_{p}^{2})^{-3/4}e^{-|p|^{2}/(2\sigma_{p}^{2})};$$
the momentum outcome law of $P_{k}$ has density
$(\pi\sigma_{p}^{2})^{-1/2}e^{-p_{k}^{2}/\sigma_{p}^{2}}$, with mean $0$ and
variance $\sigma_{p}^{2}/2=\hbar^{2}/(2\sigma^{2})$, so
$\Delta_{\psi_{\sigma}}P_{k}=\hbar/(\sigma\sqrt2)$;

(iv) for every $j$,
$$\Delta_{\psi_{\sigma}}Q_{j}\,\Delta_{\psi_{\sigma}}P_{j}=\frac{\hbar}{2},$$
and the centered vectors are linearly dependent with vanishing real part of
their pairing:
$$Q_{j}\psi_{\sigma}=-\frac{i\sigma^{2}}{\hbar}P_{j}\psi_{\sigma},\qquad \operatorname{Re}\bigl\langle Q_{j}\psi_{\sigma},P_{j}\psi_{\sigma}\bigr\rangle=0,$$
so the equality case of
[[pthm-nrqm-uncertainty-position-momentum-relation]] clause (c) is realized.

The computation is one family of preparations in the model; it is not a
characterization of all preparations attaining $\hbar/2$, involves no dynamics,
no detection model and no empirical value.

## Facts & Assumptions

**Given:** A width $\sigma>0$; the action constant $\hbar>0$; the model of [[def-nrqm-kinematics-framework-massive-spin-s-model]] with $r=1$; the vector $\psi_{\sigma}$; the momentum transform $U$; a coordinate $j$ or $k$.

[F1] **Heat kernel.** For $t>0$ the function $\Gamma(x,t)=(4\pi t)^{-n/2}e^{-|x|^{2}/(4t)}$ on $\mathbb R^{n}$ is in $C^{\infty}$, satisfies $\int_{\mathbb R^{n}}\Gamma(x,t)\,dx=1$ ([[def-heat-kernel]], [[lem-heat-kernel-normalisation-scaling-and-derivatives]]), and has absolutely integrable first and second moments with $\int_{\mathbb R^{n}}x_{i}\Gamma(x,t)\,dx=0$ and $\int_{\mathbb R^{n}}x_{i}x_{j}\Gamma(x,t)\,dx=2t\delta_{ij}$ ([[lem-first-and-second-moments-of-the-heat-kernel]]).

[F2] **Gaussian Fourier transform and momentum transform.** With the $2\pi$-normalized unitary Plancherel transform one has $\mathcal F_{2}(e^{-\pi t|x|^{2}})(\xi)=t^{-n/2}e^{-\pi|\xi|^{2}/t}$ for $t>0$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]); the model's momentum transform satisfies $U=D_{\hbar}\mathcal F_{2}$ with $D_{\hbar}g(p)=(2\pi\hbar)^{-3/2}g(p/(2\pi\hbar))$ and $(U\varphi)(p)=(2\pi\hbar)^{-3/2}\int e^{-ip\cdot x/\hbar}\varphi(x)\,dx$ for $\varphi\in L^{1}\cap L^{2}$ ([[lem-nrqm-composites-momentum-fourier-jacobian]] clauses (a),(c), [[lem-nrqm-kinematics-momentum-representation]] clause (a)).

[F3] **Outcome laws of the model.** For a unit class $\psi$ the position law of $Q_{j}$ is $\mu^{Q_{j}}_{\psi}(B)=\int_{x_{j}^{-1}(B)}|\psi(x)|^{2}\,dx$ and the momentum law of $P_{k}$ is $\mu^{P_{k}}_{\psi}(B)=\int_{\{p_{k}\in B\}}|(U\psi)(p)|^{2}\,dp$ ([[pthm-nrqm-kinematics-spin-s-outcome-laws]] clauses (a) and (c), [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b)).

[F4] **Moments and spreads.** For a unit vector in the domain of the operator the mean and variance of the outcome law exist and equal the quadratic-form mean and the squared norm of the centered vector ([[pthm-nrqm-observables-preparation-moments]] clauses (a) and (b), [[def-nrqm-uncertainty-preparation-spread]] clauses (b) and (c)).

[F5] **Position-momentum relation.** For every unit $\psi\in D(Q_{j})\cap D(P_{j})$ one has $\Delta_{\psi}Q_{j}\Delta_{\psi}P_{j}\ge\hbar/2$, with equality if and only if the centered vectors are linearly dependent and their pairing has vanishing real part ([[pthm-nrqm-uncertainty-position-momentum-relation]] clauses (a) and (c)).

[F6] **Schwartz classes and weak derivatives.** A class lies in $\mathcal S(\mathbb R^{3};\mathbb C)$ exactly when all seminorms $\sup_{x}|x^{\alpha}\partial^{\beta}f(x)|$ are finite; a $C^{1}$ function whose classical partial derivatives lie in $L^{2}$ has those derivatives as weak derivatives, and products of Schwartz classes with polynomials are again Schwartz classes ([[def-schwartz-space-and-its-seminorms]], [[lem-classical-derivatives-are-weak-derivatives]]).

[F7] **Product integration.** Integrals of nonnegative measurable functions on product spaces may be iterated ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]), and $\int_{\mathbb R}e^{-u^{2}}du=\sqrt{\pi}$ ([[thm-gaussian-integral]]).

## Verification

**Proof technique:** identify $|\psi_{\sigma}|^{2}$ with a heat-kernel slice so that normalisation and all moments come from the heat-kernel items, transform the Gaussian with the published Gaussian Fourier lemma and the model's normalisation, and read the equality case of the position-momentum relation from the explicit centered vectors.

**Given:** The data of the example and [F1]-[F7].

1.1 [The preparation] With $t:=\sigma^{2}/4$ one has $(4\pi t)^{-3/2}=(\pi\sigma^{2})^{-3/2}$ and $|x|^{2}/(4t)=|x|^{2}/\sigma^{2}$, so $|\psi_{\sigma}(x)|^{2}=\Gamma(x,\sigma^{2}/4)$; by [F1], $\|\psi_{\sigma}\|^{2}=\int\Gamma(x,\sigma^{2}/4)\,dx=1$. The function $\psi_{\sigma}$ is smooth and all of its polynomial-weighted derivatives are bounded because the exponential beats every polynomial, so $\psi_{\sigma}\in\mathcal S(\mathbb R^{3};\mathbb C)$ by [F6]. Its classical partial derivative is $\partial_{j}\psi_{\sigma}=-\sigma^{-2}x_{j}\psi_{\sigma}$, a Schwartz class, which by [F6] is its weak derivative $D_{j}\psi_{\sigma}$; hence $x_{j}\psi_{\sigma},D_{j}\psi_{\sigma}\in L^{2}$ and $\psi_{\sigma}\in D(Q_{j})\cap D(P_{k})$ with $P_{j}\psi_{\sigma}=-i\hbar D_{j}\psi_{\sigma}=i\hbar\sigma^{-2}x_{j}\psi_{\sigma}$. This is (i). [given, F1, F6, algebra]

2.1 [Position law and spread] By [F3], [F7] and step 1.1, the law of $Q_{j}$ has density $$f_{j}(t)=\int_{\mathbb R^{2}}|\psi_{\sigma}(x_{\perp},t)|^{2}\,dx_{\perp}=\frac{1}{\sqrt{\pi\sigma^{2}}}e^{-t^{2}/\sigma^{2}} .$$ By [F1] the first moment of this density vanishes and its second moment equals the one-dimensional heat-kernel second moment $2\cdot(\sigma^{2}/4)=\sigma^{2}/2$, so by [F4] the mean is $0$ and the variance is $\sigma^{2}/2$; hence $\Delta_{\psi_{\sigma}}Q_{j}=\sigma/\sqrt2$. This is (ii). [step 1.1, F1, F3, F4, F7, algebra]

2.2 [Momentum representative] Write $\psi_{\sigma}=(\pi\sigma^{2})^{-3/4}e^{-\pi t_{0}|x|^{2}}$ with $t_{0}=1/(2\pi\sigma^{2})$. By [F2], $\mathcal F_{2}\psi_{\sigma}(\xi)=(\pi\sigma^{2})^{-3/4}t_{0}^{-3/2}e^{-\pi|\xi|^{2}/t_{0}}$, and substituting $t_{0}^{-3/2}=(2\pi\sigma^{2})^{3/2}$ and $\pi/t_{0}=2\pi^{2}\sigma^{2}$ gives $\mathcal F_{2}\psi_{\sigma}(\xi)=2^{3/2}\pi^{3/4}\sigma^{3/2}e^{-2\pi^{2}\sigma^{2}|\xi|^{2}}$. By [F2], $U\psi_{\sigma}(p)=(2\pi\hbar)^{-3/2}\mathcal F_{2}\psi_{\sigma}(p/(2\pi\hbar))$; its coefficient is $(2\pi\hbar)^{-3/2}2^{3/2}\pi^{3/4}\sigma^{3/2}=(\sigma^{2}/(\pi\hbar^{2}))^{3/4}=(\pi\sigma_{p}^{2})^{-3/4}$ and its exponent is $-2\pi^{2}\sigma^{2}|p|^{2}/(4\pi^{2}\hbar^{2})=-|p|^{2}/(2\sigma_{p}^{2})$ with $\sigma_{p}=\hbar/\sigma$. This is the displayed Gaussian $U\psi_{\sigma}=\psi_{\sigma_{p}}$. [step 1.1, F2, algebra]

3.1 [Momentum law and spread] The momentum law density of $P_{k}$ is, by [F3] and step 2.2, the $k$-th marginal $(\pi\sigma_{p}^{2})^{-1/2}e^{-p_{k}^{2}/\sigma_{p}^{2}}$ of $|\psi_{\sigma_{p}}|^{2}$; by the same heat-kernel moment computation as in step 2.1 with $\sigma$ replaced by $\sigma_{p}$, its mean is $0$ and its variance is $\sigma_{p}^{2}/2=\hbar^{2}/(2\sigma^{2})$, so $\Delta_{\psi_{\sigma}}P_{k}=\hbar/(\sigma\sqrt2)$. This is (iii). [step 2.1, step 2.2, F1, F3, F4, algebra]

4.1 [Saturation and equality case] Multiplying the two spreads of steps 2.1 and 3.1 gives $\Delta_{\psi_{\sigma}}Q_{j}\Delta_{\psi_{\sigma}}P_{j}=(\sigma/\sqrt2)(\hbar/(\sigma\sqrt2))=\hbar/2$, the lower bound of [F5]. The centered vectors are $Q_{j}\psi_{\sigma}-0=Q_{j}\psi_{\sigma}$ and $P_{j}\psi_{\sigma}-0=P_{j}\psi_{\sigma}$ because both means vanish, and step 1.1 gives $Q_{j}\psi_{\sigma}=x_{j}\psi_{\sigma}=-\frac{i\sigma^{2}}{\hbar}\,P_{j}\psi_{\sigma}$, a linear dependence; moreover $\langle Q_{j}\psi_{\sigma},P_{j}\psi_{\sigma}\rangle=\frac{i\hbar}{\sigma^{2}}\|Q_{j}\psi_{\sigma}\|^{2}$ is purely imaginary, so its real part vanishes. By the equality clause of [F5] these two properties are exactly the equality case of the position-momentum relation. This is (iv). [step 1.1, step 2.1, step 3.1, F4, F5, algebra] ∎

## Remarks

- **No converse is claimed.** The verification shows that the Gaussian family
  attains the bound and satisfies the equality conditions of
  [[pthm-nrqm-uncertainty-position-momentum-relation]]; it does not claim that
  every preparation with $\Delta Q_{j}\Delta P_{j}=\hbar/2$ is Gaussian, and
  no classification of the equality set is recorded here.
- **One family, three coordinates.** The computation is uniform in the
  coordinate $j$ and in the width $\sigma$; different widths give different
  preparations, and the momentum width $\sigma_{p}=\hbar/\sigma$ is a property
  of this family in the model, not a measured resolution.
