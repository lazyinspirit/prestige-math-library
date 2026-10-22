---
id: post-qftx-ideal-wavepacket-counting
kind: postulate
domain: physics
library: physics
title: "Ideal wavepacket number counting"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - def-countable-choice
  - def-qft-fock-and-test-spaces
  - def-qft-framework-units
  - def-qft-photon-transverse-space
  - def-qftx-photon-helicity-bundle
  - lem-nrqm-composites-density-and-scalar-spectral-probability
  - lem-qftx-mode-number-pvm
  - lem-qftx-photon-invariant-measure-isometry
  - post-qft-free-photon-model
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-qft-framework-units: formulation-prerequisite
  def-qft-photon-transverse-space: mathematical-premise
  def-qftx-photon-helicity-bundle: formulation-prerequisite
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-qftx-mode-number-pvm: mathematical-premise
  lem-qftx-photon-invariant-measure-isometry: mathematical-premise
  post-qft-free-photon-model: formulation-prerequisite
physical_scope: "An ideal countably number-resolving detector for one normalized transverse wavepacket mode in the selected positive free-photon Fock model, with unit efficiency, no mode mismatch, no background and no dark counts. It supplies no finite-time response, point-field product, interacting QED model, or empirical outcome."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Roy J. Glauber, The Quantum Theory of Optical Coherence, Physical Review 130, 2529–2539 (1963)"
      url: "https://journals.aps.org/pr/pdf/10.1103/PhysRev.130.2529"
      locator: "§II, printed pp. 2530–2532, equations (2.14)–(2.18), and §III, pp. 2532–2534, equations (3.1)–(3.7), for ideal absorption and normally ordered count correlations. The local postulate uses a countable mode PVM, not point-field products."
    - title: "Daniel A. Steck, Quantum and Atom Optics, revision 0.16.7 (13 March 2026)"
      url: "https://atomoptics.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf"
      locator: "Author-hosted complete course text, Chapter 16 §§16.1 and 16.4.2.2–16.4.2.3, PDF pp. 685–693, for photodetection, normalized pulse modes and time-window counting. Its narrowband and finite-window assumptions are not imported as exact claims here."
verification:
  precheck: pending
---

## Postulate

Assume Countable Choice and use the positive transverse free-photon model whose one-particle space is $\mathcal H_T=L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3)$ with its transverse condition and whose state space is the bosonic Fock space $\mathcal F_s(\mathcal H_T)$. In the unit convention where $\mathbf k$ has unit $\mathrm m^{-1}$, let $u\in\mathcal H_T^\nu$ be a normalized transverse wavepacket for the invariant measure $d\nu=d^3\mathbf k/(2|\mathbf k|)$, so that $u(\mathbf k)$ has unit metre and $\int|u|^2d\nu=1$. Let $v=Wu$, where $Wf(\mathbf k)=f(\mathbf k)/\sqrt{2|\mathbf k|}$; then $v\in\mathcal H_T$, $v(\mathbf k)$ has unit $\mathrm m^{3/2}$, and $\|v\|_2=1$. In the Fock factorization $\mathcal F_s(\mathcal H_T)\cong\mathcal F_s(\mathbb C v)\widehat\otimes\mathcal F_s(v^\perp)$, $P_n(v)$ is the orthogonal projection onto mode occupation $n$ tensored with the identity on the orthogonal-mode Fock factor. These projections are mutually orthogonal and have strong sum $I$; their count PVM is $E_v(B)=\sum_{n\in B\cap\mathbb N_0}P_n(v)$, and $N_v=\sum_n nP_n(v)$ on the domain $\sum_n n^2\|P_n(v)\Psi\|^2<\infty$. A density operator $\rho$ means a positive self-adjoint trace-class operator with $\operatorname{tr}\rho=1$, using the trace pairing obtained from the Fock space's second-variable-linear convention by conjugation. For $n\in\mathbb N_0$, put $p_n=\operatorname{tr}(\rho P_n(v))$. The mathematical density/PVM result makes $(p_n)$ a countably additive probability law under the stated Countable Choice hypothesis.

Adopt as the ideal detector postulate that this law is the model probability for recording exactly $n$ photons in the selected mode. The detector is number resolving, has unit mode efficiency, and has no mode mismatch, background counts or dark counts. This is an additional physical measurement assumption; it is not deduced from the CCR or from the free-field equations.

When $\sum_n np_n<\infty$ and $\sum_n n(n-1)p_n<\infty$, define the first number moment and normally ordered second factorial moment by
$$\mu_v(\rho):=\sum_{n=0}^{\infty}np_n,\qquad F^{(2)}_v(\rho):=\sum_{n=0}^{\infty}n(n-1)p_n.$$
The PVM sums define the unbounded-state moments. In this ideal mode model, define the normally ordered second-mode correlation to be the spectral factorial expectation $F^{(2)}_v(\rho)$. The self-adjoint closure of the finite-particle operator $a^\dagger(v)^2a(v)^2$ is $N_v(N_v-I)$ by [[lem-qftx-mode-number-pvm]], so this definition agrees with the normally ordered operator on its finite-particle core and uses the spectral expectation for states outside that core. It does not assert a trace product of $\rho$ with an unbounded operator. If $\mu_v(\rho)>0$, define the dimensionless same-mode zero-delay statistic
$$g_v^{(2)}(0):=\frac{F^{(2)}_v(\rho)}{\mu_v(\rho)^2}.$$
Here $0$ is the conventional zero-delay label for this same-mode statistic; no temporal detector response or pointwise product of electric-field distributions is defined.

## Postulate references

[[post-qft-free-photon-model]]

[[def-qft-framework-units]]

[[def-qft-photon-transverse-space]]

[[def-qftx-photon-helicity-bundle]]

[[lem-qftx-photon-invariant-measure-isometry]]

[[lem-qftx-mode-number-pvm]]

[[lem-nrqm-composites-density-and-scalar-spectral-probability]]

[Glauber (1963)](https://journals.aps.org/pr/pdf/10.1103/PhysRev.130.2529)

[Steck, Quantum and Atom Optics](https://atomoptics.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf)

## Remarks

The density/PVM supplier is used only for its density decomposition and scalar probability clauses, which require Countable Choice; its separate unbounded-moment clause requires the Axiom of Choice and is not used. The new physical postulate supplies the detector reading of this countable PVM. It does not claim that the more general finite-instrument measurement postulate or an experimental measurement has derived this detector model.
