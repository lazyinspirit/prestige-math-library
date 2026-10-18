---
id: ex-it-cq-binary-pure-state-channel
kind: example
title: Holevo information of an equiprobable binary pure-state channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-it-classical-quantum-memoryless-channel
  - def-it-classical-quantum-state-and-holevo-information
  - thm-it-hsw-classical-quantum-channel-capacity
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qc-density-operator
proof_strategy: direct
axiom_use: "No choice axiom is used; all selections and probability spaces are finite, and analytic existence uses the stated finite-dimensional or real-completeness hypotheses."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Chapters 18 and 20"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "John Watrous, The Theory of Quantum Information, §§5.3.2 and 8.1.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Example

Let a binary cq channel send equiprobable pure qubit states $|\psi_0\rangle,|\psi_1\rangle$ with overlap magnitude $c=|\langle\psi_0,\psi_1\rangle|\in[0,1]$. This ensemble has Holevo information
$$\chi=h\!\left(\frac{1+c}{2}\right)\quad\text{nats per channel use},$$
where $h(t)=-t\ln t-(1-t)\ln(1-t)$ with $0\ln0:=0$. If $\chi>0$, every rate $R$ with $0\le R<\chi$ is achievable for this memoryless channel; if $c=1$, the states coincide and no positive rate follows from this ensemble.

## Facts & Assumptions

**Given:** Two unit vectors in a two-dimensional complex inner-product space and the equiprobable ensemble of their pure-state density operators.

[F1] [[def-it-classical-quantum-memoryless-channel]]: each input symbol is sent to its assigned output density operator and block outputs are tensor products.

[F2] [[def-it-classical-quantum-state-and-holevo-information]]: $\chi=S(\bar\rho)-\sum_xp_xS(\rho_x)$.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: finite-dimensional Hermitian operators have orthonormal eigenbases.

[F4] [[def-qc-density-operator]]: a pure-state projector has trace one and is a density operator.

[F5] [[thm-it-hsw-classical-quantum-channel-capacity]]: the finite cq channel capacity is the maximum ensemble Holevo information, and every rate below that capacity is achievable by reliable memoryless block codes.

## Verification



1.1 Put $\bar\rho=\tfrac12|\psi_0\rangle\langle\psi_0|+\tfrac12|\psi_1\rangle\langle\psi_1|$. Its trace is one. After changing the global phase of $|\psi_1\rangle$ and choosing an orthonormal basis, write $|\psi_0\rangle=(1,0)$ and $|\psi_1\rangle=(c,\sqrt{1-c^2})$. Then $$\bar\rho=\frac12\begin{pmatrix}1+c^2&c\sqrt{1-c^2}\\c\sqrt{1-c^2}&1-c^2\end{pmatrix},$$ whose trace is $1$ and determinant is $\frac14((1+c^2)(1-c^2)-c^2(1-c^2))=(1-c^2)/4$. Thus its characteristic polynomial is $t^2-t+(1-c^2)/4$, and [F3] gives eigenvalues $(1+c)/2$ and $(1-c)/2$. [F3, F4, given, algebra, construct]

2.1 Each pure output state has eigenvalues $1,0$, hence entropy zero by [F2]. By the symmetry $h(t)=h(1-t)$ in its displayed definition, the average entropy from step 1.1 is $h((1+c)/2)$, so [F2] gives the displayed $\chi$. This ensemble is among those maximized in [F5], so $C_{\rm cq}\ge\chi$; the rate conclusion follows from [F5] for every $0\le R<\chi$ when $\chi>0$. If $c=0$, the value is $\ln2$; if $c=1$, both outputs coincide up to phase and the value is zero. [F1, F2, F5, step 1.1, algebra, cases] ∎

