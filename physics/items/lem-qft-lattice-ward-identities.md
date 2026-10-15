---
id: lem-qft-lattice-ward-identities
kind: lemma
title: "Exact regulated gauge and infinitesimal Ward identities"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps:
  - def-qft-compact-lattice-gauge-data
  - lem-qft-lattice-gauss-projection
  - lem-qft-lattice-physical-evolution
  - def-axiom-of-choice
dependency_roles:
  def-qft-compact-lattice-gauge-data: mathematical-premise
  lem-qft-lattice-gauss-projection: mathematical-premise
  lem-qft-lattice-physical-evolution: mathematical-premise
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
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume the finite-graph model of [[def-qft-compact-lattice-gauge-data]] and the Axiom of Choice. Let $\psi\in\mathcal H_{\rm phys}$ be a normalized vector. A bounded operator $O$ has gauge charge $q=(q_x)_{x\in V}\in\mathbb Z^V$ when
$$U(\alpha)OU(\alpha)^\dagger=e^{i\sum_x q_x\alpha_x}O.$$
Then $\langle\psi,O\psi\rangle=0$ whenever $q\ne0$, and any finite product of bounded gauge-charge eigenoperators has zero expectation when the sum of its charge vectors is nonzero.

For each $x$, if $O$ maps $D(G_x)$ into itself and $[G_x,O]$ extends to a bounded operator, then
$$\langle\psi,[G_x,O]\psi\rangle=0.$$
The same assertions apply to $O(t)=\mathcal U(t)^\dagger O\mathcal U(t)$: the finite-regulator time evolution preserves the gauge charge and the domains $D(G_x)$. These are exact operator identities for the stated regulator; no trace or path-integral identity and no continuum Ward–Takahashi statement is asserted.



## Facts & Assumptions

**Given:** The finite-graph gauge representation, $\mathcal H_{\rm phys}$, the self-adjoint gauge generators, and the Axiom of Choice.

[A1] The Axiom of Choice applies to every family of nonempty sets. [[def-axiom-of-choice]]

[F1] [[lem-qft-lattice-gauss-projection]]: $U(\alpha)$ is strongly continuous, $\mathcal H_{\rm phys}$ is its fixed subspace, and the joint Fourier/occupation basis diagonalizes every $G_x$ with integer eigenvalues.

[F2] [[lem-qft-lattice-physical-evolution]]: under the Axiom of Choice, $\mathcal U(t)$ is a strongly continuous unitary group that commutes with every $U(\alpha)$ and preserves $\mathcal H_{\rm phys}$.

## Proof

**Given:** [A1], [F1], [F2], and a normalized $\psi\in\mathcal H_{\rm phys}$.

1.1 Physicality gives $U(\alpha)\psi=\psi$ for every $\alpha$. If $O$ has charge $q$, then $$\langle\psi,O\psi\rangle=\langle U(\alpha)\psi,O\,U(\alpha)\psi\rangle=\langle\psi,U(\alpha)^\dagger O U(\alpha)\psi\rangle=e^{-i\sum_xq_x\alpha_x}\langle\psi,O\psi\rangle.$$ If $q\ne0$, choose a vertex $x$ with $q_x\ne0$ and set $\alpha_x=\pi/q_x$, with all other components zero. The phase is $-1$, forcing $\langle\psi,O\psi\rangle=0$. [F1, given, algebra]

1.2 For $\psi\in\mathcal H_{\rm phys}\subseteq D(G_x)$ and $O\psi\in D(G_x)$, self-adjointness of $G_x$ gives $$\langle\psi,[G_x,O]\psi\rangle=\langle G_x\psi,O\psi\rangle-\langle\psi,O G_x\psi\rangle=0.$$ If the commutator is initially defined on $D(G_x)$, its bounded extension has the same value on these vectors. [F1, given, algebra]

1.3 Fix $g\in\mathbb Z^V$ and define the joint character projection $$Q_g=\frac1{(2\pi)^{|V|}}\int_{\mathbb T^V}e^{-i\sum_xg_x\alpha_x}U(\alpha)\,d\alpha.$$ Since the joint basis diagonalizes the integer $G_x$, $Q_g$ is the orthogonal projection onto the joint eigenspace with eigenvalue vector $g$. The unitary $\mathcal U(t)$ commutes with every $U(\alpha)$ by [F2], hence with every $Q_g$. The exact domain is $$D(G_x)=\left\{\phi:\sum_{g\in\mathbb Z^V}g_x^2\|Q_g\phi\|^2<\infty\right\};$$ commutation and unitarity therefore show that $\mathcal U(t)$ preserves $D(G_x)$ and commutes there with $G_x$. [A1, F1, F2, algebra]

2.1 A product $O_1\cdots O_k$ of charge eigenoperators with charges $q^{(j)}$ transforms with charge $\sum_jq^{(j)}$, by inserting $U^\dagger U=I$ between adjacent factors. Applying step 1.1 to that product proves the finite-product selection rule. [F1, step 1.1, algebra]

3.1 Gauge covariance of $O(t)$ follows from commuting $\mathcal U(t)$ through the transformation law of $O$. Unitary conjugation preserves boundedness, and the domain relation in step 1.3 carries any $D(G_x)$ invariance and bounded commutator of $O$ to $O(t)$. The selection and infinitesimal identities already proved thus apply at every time. [F2, step 1.3, step 1.1, step 1.2] ∎
