---
id: lem-qft-lattice-physical-evolution
kind: lemma
title: "Global unitary dynamics in the Gauss sector"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - def-qft-compact-lattice-gauge-data
  - lem-qft-lattice-gauss-projection
  - lem-qft-lattice-hamiltonian-selfadjoint
  - thm-stone-one-parameter-unitary-groups
  - def-axiom-of-choice
dependency_roles:
  def-qft-compact-lattice-gauge-data: mathematical-premise
  lem-qft-lattice-gauss-projection: mathematical-premise
  lem-qft-lattice-hamiltonian-selfadjoint: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979)"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete 55-page review; relevant Hamiltonian and Gauss-law treatment in §VI.C, printed pp. 694–696. The Rome1 PDF is byte-identical to the previously retrieved full text."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020)"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Full-text arXiv HTML rendition; §§2.1–2.4, printed pp. 3–8. The corresponding complete 32-page PDF was also retrieved and read."
---

## Statement

Assume the model data of [[def-qft-compact-lattice-gauge-data]] and the Axiom of Choice. Let $H$ be the self-adjoint Hamiltonian on the exact domain supplied by [[lem-qft-lattice-hamiltonian-selfadjoint]], and let $P$ be the physical projection of [[lem-qft-lattice-gauss-projection]]. For any scalar $\hbar>0$, the family
$$\mathcal U(t)=e^{-itH/\hbar},\qquad t\in\mathbb R,$$
is a strongly continuous unitary group on $\mathcal H_{\rm kin}$, preserves $D(H)$, and satisfies
$$\lim_{h\to0}\frac{\mathcal U(h)\psi-\psi}{h}=-\frac{i}{\hbar}H\psi\quad(\psi\in D(H)).$$
It commutes with every gauge transformation $U(\alpha)$ and with $P$. Hence $\mathcal H_{\rm phys}=\operatorname{ran}P$ is a reducing subspace and $\mathcal U(t)|_{\mathcal H_{\rm phys}}$ is a strongly continuous unitary group with skew-adjoint infinitesimal generator $-iH|_{D(H)\cap\mathcal H_{\rm phys}}/\hbar$; its self-adjoint Stone operator is $-H|_{D(H)\cap\mathcal H_{\rm phys}}/\hbar$. Equivalently, the restricted physical Hamiltonian $H|_{D(H)\cap\mathcal H_{\rm phys}}$ is self-adjoint. This is an exact fixed-graph result; no continuum dynamics are asserted.



## Facts & Assumptions

**Given:** The finite-graph model, its gauge representation and physical projection, the self-adjoint operator $H$, and the Axiom of Choice.

[A1] The Axiom of Choice is the principle that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] [[lem-qft-lattice-gauss-projection]]: the operators $U(\alpha)$ form a strongly continuous unitary representation of $\mathbb T^V$ and $P$ is the orthogonal projection onto their joint fixed space $\mathcal H_{\rm phys}$.

[F2] [[lem-qft-lattice-hamiltonian-selfadjoint]]: $H$ is self-adjoint on $D(H_0)$ and $U(\alpha)HU(\alpha)^\dagger=H$ there; $U(\alpha)$ preserves that domain.

[F3] [[thm-stone-one-parameter-unitary-groups]]: assuming the Axiom of Choice, every self-adjoint operator $T$ determines the strongly continuous group $e^{itT}$, whose generator has domain exactly $D(T)$ and equals $iT$ there; a strongly continuous unitary group is uniquely determined by its generator.

## Proof

**Given:** [A1], [F1]–[F3], and $\hbar>0$.

1.1 Since $H$ is self-adjoint, $T=-H/\hbar$ is self-adjoint. Stone's theorem [F3] gives $\mathcal U(t)=e^{itT}=e^{-itH/\hbar}$ as a strongly continuous unitary group with the stated derivative at $t=0$ and exact generator domain $D(H)$. [A1, F2, F3, algebra]

2.1 For $x\in D(H)$ and fixed $t$, the difference quotient at zero for $\mathcal U(h)\mathcal U(t)x=\mathcal U(t)\mathcal U(h)x$ equals $\mathcal U(t)(\mathcal U(h)x-x)/h$ and converges to $-i\mathcal U(t)Hx/\hbar$. The exact domain characterization in [F3] therefore gives $\mathcal U(t)x\in D(H)$ and $H\mathcal U(t)x=\mathcal U(t)Hx$. [F3, step 1.1, algebra]

2.2 For each $\alpha$, the conjugated family $V_\alpha(t)=U(\alpha)\mathcal U(t)U(\alpha)^\dagger$ is a strongly continuous unitary group. By [F2], its generator is $-iH/\hbar$ on exactly $D(H)$, the same generator as $\mathcal U(t)$. Uniqueness in Stone's theorem gives $V_\alpha(t)=\mathcal U(t)$ for every $t$. [F2, F3, step 1.1]

3.1 Averaging the commutation $U(\alpha)\mathcal U(t)=\mathcal U(t)U(\alpha)$ over normalized Haar measure gives $P\mathcal U(t)=\mathcal U(t)P$. Thus $\mathcal U(t)$ and its inverse preserve $\operatorname{ran}P=\mathcal H_{\rm phys}$, and the restricted group is unitary and strongly continuous on that closed Hilbert subspace. [F1, step 2.2, algebra]

4.1 For $x\in\mathcal H_{\rm phys}$, the restricted difference quotient is the same norm limit as in $\mathcal H_{\rm kin}$. It exists exactly when $x\in D(H)$ by [F3]; therefore the restricted group generator has domain $D(H)\cap\mathcal H_{\rm phys}$ and is $-iH/\hbar$ there. Stone's theorem on $\mathcal H_{\rm phys}$ identifies its self-adjoint Stone operator as $-H|_{D(H)\cap\mathcal H_{\rm phys}}/\hbar$. Since multiplication by the nonzero real scalar $-\hbar$ preserves self-adjointness, the restricted physical Hamiltonian is self-adjoint. [A1, F3, step 3.1, algebra] ∎
