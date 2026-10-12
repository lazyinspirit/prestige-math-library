---
id: texp-nrqm-composites-singlet-correlations
aliases: [nrqm-composites-singlet-correlations]
kind: thought-experiment
domain: physics
title: "The spin singlet of two declared spin-half factors: directional correlations, perfect anti-correlation and setting-independent marginals"
status: draft
origin: session
dependency_level: 13
deps: [def-countable-choice, def-nrqm-angular-momentum-framework-angular-momentum-observables, def-nrqm-composites-framework-composite-systems-and-local-readouts, def-nrqm-composites-framework-reduced-preparations, def-nrqm-measurement-framework-declared-measurements-and-instruments, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-rank-one-operator-calculus, lem-nrqm-composites-separable-partial-trace, prop-nrqm-orbital-and-spin-finite-spin-matrices, pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws, pthm-nrqm-composites-local-instruments-and-no-signalling, pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations, pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement, thm-nrqm-orbital-and-spin-tensor-spin-composition]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  def-nrqm-composites-framework-composite-systems-and-local-readouts: formulation-prerequisite
  def-nrqm-composites-framework-reduced-preparations: formulation-prerequisite
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws: physical-result
  pthm-nrqm-composites-local-instruments-and-no-signalling: physical-result
  pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement: physical-result
  thm-nrqm-orbital-and-spin-tensor-spin-composition: mathematical-premise
  pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An idealized model computation for the internal-factor composite of two declared spin-half factors in the spin singlet preparation: the reduced preparations, the joint directional spin outcome laws, the correlation function and the setting-independent marginals. The setup is a thought experiment of the declared framework, not a reported experiment; it asserts no spatially separated particles, no relativistic considerations, no measurements, no measured correlation and no empirical fact, and it draws no conclusion about nature."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1.4, printed pages 111-115 (PDF pages 119-123): the spin singlet of an electron-positron pair and the expectation value of the product of the two spin measurements"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', Section 5, chapter pages 16-19: the singlet state of two spin-half particles and the joint probability for spin measurements along two directions"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 1.4 printed pages 45-47 (PDF pages 57-59): tensor products of finite-dimensional spaces and product bases"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the framework's composition, state and measurement readings for the
internal factors of two declared spin-half particles
([[thm-nrqm-orbital-and-spin-tensor-spin-composition]],
[[def-nrqm-composites-framework-composite-systems-and-local-readouts]],
[[def-nrqm-composites-framework-reduced-preparations]],
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]),
and assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V=\mathbb C^{2}$ be a declared spin-half internal factor with orthonormal
basis $(e_{+},e_{-})$ and spin matrices $J_{i}=\tfrac12\sigma_{i}$ of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]], so that
$S_{i}:=\hbar J_{i}$ and, for a unit vector $n\in\mathbb R^{3}$,
$S_{n}:=\sum_{i}n_{i}S_{i}$; let the declared composite of the two internal
factors be $V\widehat\otimes V$ with the local spin observables
$S_{n}\otimes I$ and $I\otimes S_{m}$, read as bounded assigned sharp
observables of the two factors with unit $\mathrm{J\,s}$
([[def-nrqm-angular-momentum-framework-angular-momentum-observables]] clause
(c), [[def-nrqm-observables-framework-observable-and-outcome-law]]). Put
$$\Psi:=\frac{1}{\sqrt2}\bigl(\kappa(e_{+}\otimes e_{-})-\kappa(e_{-}\otimes e_{+})\bigr),\qquad \rho:=T_{\Psi,\Psi}\in D(V\widehat\otimes V),$$
the **singlet preparation**, and let $\rho_{A}=\operatorname{Tr}_{B}\rho$,
$\rho_{B}=\operatorname{Tr}_{A}\rho$ be its reduced preparations. Then:
 
**(a) Singlet data.** $\Psi$ is a unit vector; $S^{\mathrm{tot}}_{i}\Psi=0$ for
all $i$; $\rho_{A}=\rho_{B}=\tfrac12 I$; and the Schmidt expansion of $\Psi$
is $\Psi=\tfrac{1}{\sqrt2}\bigl(\kappa(e_{+}\otimes e_{-})-\kappa(e_{-}\otimes e_{+})\bigr)$
with two equal coefficients, so $\Psi$ is not a product vector and both
reduced preparations are mixed with $\operatorname{tr}\rho_{A}^{2}=\tfrac12$.
 
**(b) Joint directional laws.** For unit vectors $a,b\in\mathbb R^{3}$ with
$\cos\theta=a\cdot b$ and for the two-outcome local measurements
$(P_{a,\pm},P_{a,\mp})$ and $(P_{b,\pm},P_{b,\mp})$ of the observables
$S_{a}\otimes I$ and $I\otimes S_{b}$, the joint probabilities are
$$p(+,+)=p(-,-)=\tfrac12\sin^{2}\tfrac{\theta}{2},\qquad p(+,-)=p(-,+)=\tfrac12\cos^{2}\tfrac{\theta}{2},$$
where the first sign refers to the outcome $+\hbar/2$ or $-\hbar/2$ of
$S_{a}\otimes I$ and the second to that of $I\otimes S_{b}$;
in particular the four numbers are nonnegative and sum to one.
 
**(c) Correlation function.** With the product $\sigma\tau$ of the two sign
labels,
$$\mathbb E(a,b):=\sum_{\sigma,\tau\in\{\pm\}}\sigma\tau\,p(\sigma,\tau) =-\cos\theta=-a\cdot b .$$
In particular $\mathbb E(a,a)=-1$ and $\mathbb E(a,-a)=+1$: the outcomes are
perfectly anti-correlated for equal directions.
 
**(d) Setting-independent marginals.** The marginal laws are
$p_{A}(\pm)=\tfrac12$ and $p_{B}(\pm)=\tfrac12$, independent of $b$ and of
$a$ respectively; the reduced preparations $\rho_{A}=\rho_{B}=\tfrac12 I$ are
unchanged by performing the local measurement on the other factor and
discarding its record, in agreement with
[[pthm-nrqm-composites-local-instruments-and-no-signalling]] clause (b).
 
**(e) Scope.** This is a thought experiment of the declared framework: the
composite is an internal-factor composite, the particles are not assigned
spatial positions or worldlines here, and no spatial separation, temporal
order, relativistic consideration, measurement or recorded data enters. The
computation asserts no empirical correlation and draws no conclusion about
nature; in particular it makes no claim about the completeness of the
framework or about any hidden-variable model.

## Facts & Assumptions

**Given:** The declared spin-half internal factor $V=\mathbb C^{2}$ with basis $(e_{+},e_{-})$ and the spin matrices $S_{i}=\hbar J_{i}$; the declared composite $V\widehat\otimes V$ with local observables $S_{n}\otimes I$, $I\otimes S_{m}$; the singlet vector $\Psi$ and preparation $\rho$; unit directions $a,b$; the Axiom of Countable Choice.

[F1] **Finite spin-half matrices.** $J_{i}=\frac12\sigma_{i}$ is self-adjoint on $V$ with $J_{z}e_{\pm}=\pm\frac12e_{\pm}$, $J_{+}e_{-}=e_{+}$, $J_{+}e_{+}=0$, and $\sigma_{i}\sigma_{j}=\delta_{ij}I+i\sum_{k}\varepsilon_{ijk}\sigma_{k}$, so $S_{n}=\frac{\hbar}{2}n\cdot\sigma$ with $(n\cdot\sigma)^{2}=I$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clauses (a), (b), (e)).

[F2] **Directional outcome laws.** For every unit $n$ the operator $S_{n}$ is bounded self-adjoint with spectrum $\hbar\{-\frac12,\frac12\}$ and spectral projections $P_{n,\pm}=\frac12(I\pm n\cdot\sigma)$; for every unit $\psi\in V$, $\mu^{S_{n}}_{\psi}(\{\pm\hbar/2\})=\|P_{n,\pm}\psi\|^{2}=\frac12(1\pm\langle(n\cdot\sigma)\psi,\psi\rangle)$ ([[pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]] clauses (a), (c)).

[F3] **Tensor composition.** The composite internal factor $V\widehat\otimes V$ carries the tensor-product representation; the local operators $S_{n}\otimes I$ and $I\otimes S_{m}$ are bounded self-adjoint, and $\langle\kappa(x\otimes y),\kappa(x'\otimes y')\rangle=\langle x,x'\rangle\langle y,y'\rangle$; the singlet vector is the vector displayed in the statement, with $S^{\mathrm{tot}}_{i}\Psi=0$ and the stated expansion ([[thm-nrqm-orbital-and-spin-tensor-spin-composition]] clauses (a), (b), (d), [[lem-nrqm-composites-hilbert-tensor-construction]] clauses (a), (b)).

[F4] **Partial trace and reductions.** $\operatorname{Tr}_{B}T_{u\otimes v,u'\otimes v'}=\langle v,v'\rangle T_{u,u'}$, and for unit $\Psi=\frac{1}{\sqrt2}(\kappa(e_{+}\otimes e_{-})-\kappa(e_{-}\otimes e_{+}))$ the reduced preparations are $\rho_{A}=\frac12T_{e_{+},e_{+}}+\frac12T_{e_{-},e_{-}}$ and $\rho_{B}=\frac12T_{e_{-},e_{-}}+\frac12T_{e_{+},e_{+}}$; the purity criterion gives $\operatorname{tr}\rho_{A}^{2}=\frac12$ and shows $\Psi$ is not a product vector ([[lem-nrqm-composites-separable-partial-trace]] clause (c), [[pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement]] clauses (a), (b)).

[F5] **Joint local laws.** For two declared finite-outcome measurements of the factors with effect families $(F_{i})$ and $(F'_{j})$, the joint outcome probabilities in $\rho$ are $\operatorname{tr}(\rho(F_{i}\otimes F'_{j}))$; for rank-one projections $F=T_{x,x}$, $F'=T_{y,y}$ this equals $|\langle\Psi,\kappa(x\otimes y)\rangle|^{2}$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clause (d), [F4] of [[pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations]], [[lem-nrqm-composites-rank-one-operator-calculus]] clause (e)).

[F6] **No-signalling.** A declared instrument of one factor leaves the reduced preparation of the other factor unchanged when its record is discarded ([[pthm-nrqm-composites-local-instruments-and-no-signalling]] clause (b)).

## Proof

**Proof technique:** direct; read the singlet's reduced preparations off the
partial trace, project the singlet onto the product of directional spin
eigenstates to obtain the joint laws, and evaluate the correlation sum and the
marginals.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Reduced preparations and purity] By [F3] $\Psi$ is a unit eigenvector of $S^{\mathrm{tot}}_{i}$ with eigenvalue $0$; by [F4], $\rho_{A}=\frac12T_{e_{+},e_{+}}+\frac12T_{e_{-},e_{-}}=\frac12I$ and $\rho_{B}=\frac12I$, with $\operatorname{tr}\rho_{A}^{2}=\frac12$, and $\Psi$ is not a product vector; this is (a). [given, F3, F4, algebra]

1.2 [Directional eigenbases] Fix unit $a$ and adopt the orthonormal basis $(u_{+},u_{-})$ of $V$ of eigenvectors of $a\cdot\sigma$ with $a\cdot\sigma u_{\pm}=\pm u_{\pm}$, so that $\Psi=\frac{1}{\sqrt2}(\kappa(u_{+}\otimes u_{-})-\kappa(u_{-}\otimes u_{+}))$ by the rotational invariance recorded in [F3]; for unit $b$ let $v_{\pm}$ be the eigenvectors of $b\cdot\sigma$ with eigenvalues $\pm1$ and let $c:=\langle u_{-},v_{+}\rangle$, so that $\|P_{b,+}u_{-}\|^{2}=|c|^{2}$ and $P_{b,+}=\frac12(I+b\cdot\sigma)$ by [F2]. [given, F1, F2, F3, algebra]

2.1 [Joint laws] Since $(P_{a,+}\otimes P_{b,+})\Psi=\frac{1}{\sqrt2}\kappa(u_{+}\otimes P_{b,+}u_{-})$ by [F3] and the eigenvalue conditions of step 1.2, [F5] gives $p(+,+)=\frac12\|P_{b,+}u_{-}\|^{2}=\frac12\mu^{S_{b}}_{u_{-}}(\{+\hbar/2\})=\frac14(1+\langle(b\cdot\sigma)u_{-},u_{-}\rangle)=\frac14(1-\cos\theta)=\frac12\sin^{2}\frac{\theta}{2}$ by [F2] and [F1], where $\cos\theta=a\cdot b$; the other three entries follow by the same projection, namely $p(+,-)=\frac12\|P_{b,-}u_{-}\|^{2}=\frac14(1+\cos\theta)$, $p(-,-)=\frac12\|P_{b,-}u_{+}\|^{2}=\frac14(1-\cos\theta)$ and $p(-,+)=\frac12\|P_{b,+}u_{+}\|^{2}=\frac14(1+\cos\theta)$, which is (b). [given, F1, F2, F3, F5, step 1.2, algebra]

3.1 [Correlation and marginals] Summing with the product signs, $\mathbb E(a,b)=p(+,+)+p(-,-)-p(+,-)-p(-,+)=\frac12\sin^{2}\frac{\theta}{2}+\frac12\sin^{2}\frac{\theta}{2}-\frac12\cos^{2}\frac{\theta}{2}-\frac12\cos^{2}\frac{\theta}{2}=\sin^{2}\frac{\theta}{2}-\cos^{2}\frac{\theta}{2}=-\cos\theta$, which is (c) since $\theta$ is the angle between $a$ and $b$; the marginals are $p_{A}(+)=p(+,+)+p(+,-)=\frac12$ and $p_{A}(-)=\frac12$, and likewise $p_{B}(\pm)=\frac12$, independent of the other direction. The preparations $\rho_{A}=\rho_{B}=\frac12I$ are unchanged by a discarded local instrument on the other factor by [F6]; this is (d). [given, F2, F6, step 2.1, algebra]

4.1 [Assembly and scope] Step 1.1 is (a), step 2.1 is (b), step 3.1 is (c), (d); only the declared internal-factor composite and the cited mathematics were used, with no spatial, temporal, relativistic or empirical input, which is (e). [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **Anti-correlation and the singlet.** For $b=\pm a$ the correlation is $\mp1$,
  the perfect anti-correlation (or correlation for the reversed direction) of
  the model. For $a\perp b$ the correlation vanishes, $\mathbb E=0$.
- **Correlated but not signalling.** The joint laws depend on both directions,
  while each marginal is the fixed law $\frac12$ of the maximally mixed reduced
  preparation: the model's correlations are not a dependence of one factor's
  local statistics on the other factor's setting.
- **Not an experiment.** No counts, apparatus or uncertainty analysis appears;
  a comparison of such a model with recorded data would require a separate
  experiment item with its own preparation, efficiency and sampling
  qualifications, and the Bell comparison belongs to a later page.
