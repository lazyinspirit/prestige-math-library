---
id: ex-qft-qed-ward-selection
kind: example
title: Charged expectation vanishes by gauge averaging
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
proof_strategy: direct
deps:
  - lem-qft-lattice-ward-identities
  - def-axiom-of-choice
dependency_roles:
  lem-qft-lattice-ward-identities: mathematical-premise
  def-axiom-of-choice: mathematical-premise
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979), §VI.C, printed pp. 694–696"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete review retrieved; §VI.C read for local gauge transformations and the Gauss-law physical sector."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020), §§2.1–2.4"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Complete notes retrieved; §§2.1–2.4 read for gauge-charge sectors and fermionic matter transformations."
---

## Example

Take a two-vertex graph with one link $e:v_1\to v_2$, one fermion mode per vertex and zero backgrounds. The zero-electric, zero-occupation vector $\Omega$ is physical. The bounded creation operator $O=c^\dagger_{v_1,1}$ has nonzero gauge charge at $v_1$, so its expectation in any physical vector, including $\Omega$, vanishes.

## Facts & Assumptions

**Given:** The conditional finite-graph CAR model, the gauge action, and the Axiom of Choice required by the time-dependent Ward supplier.

[A1] The Axiom of Choice is the principle that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] [[lem-qft-lattice-ward-identities]]: every bounded gauge-charge eigenoperator with nonzero charge has zero expectation in a physical vector; time evolution preserves gauge charge under AC. This current A-page item depends on the still-draft QFT-MF01 CAR supplier through its graph-model dependencies.

## Verification

**Given:** [A1], [F1], and the zero-background two-vertex state described above.

1.1 For $\Omega$, $n_{v_1}=n_{v_2}=0$ and $E_e=0$, so both Gauss eigenvalues vanish. The CAR creation operator is bounded and nonzero; the gauge law gives $U(\alpha)OU(\alpha)^\dagger=e^{-i\alpha_{v_1}}O$, so its charge vector is $q_{v_1}=-1,q_{v_2}=0$. [A1, F1, given]

1.2 The nonzero charge in step 1.1 forces $\langle\Omega,O\Omega\rangle=0$ by the finite-regulator selection rule, even though $O\Omega$ is a nonzero one-fermion vector. This demonstrates that the selection rule concerns expectations in the physical sector, not the vanishing of the charged operator itself. [F1, step 1.1, algebra] ∎

