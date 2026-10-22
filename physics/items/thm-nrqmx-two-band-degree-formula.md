---
id: thm-nrqmx-two-band-degree-formula
kind: theorem
domain: mathematics
library: mathematics
title: Two-band Chern number and degree formula
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 6
deps:
  - def-nrqmx-bloch-fiber-model
  - lem-nrqmx-bloch-fiber-model-properties
  - thm-nrqmx-bloch-projector-chern
  - lem-nrqmx-degree-area-formula
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-nrqmx-bloch-fiber-model: mathematical-premise
  lem-nrqmx-bloch-fiber-model-properties: mathematical-premise
  thm-nrqmx-bloch-projector-chern: mathematical-premise
  lem-nrqmx-degree-area-formula: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: János K. Asbóth, László Oroszlány, and András Pályi, A Short Course on Topological Insulators
      url: https://arxiv.org/pdf/1509.02295
      locator: Chapter 2, §2.3.4; Chapter 6, §§6.1.1–6.1.2.
    - title: David Tong, Applications of Quantum Mechanics, University of Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf
      locator: Chapter 6, §§6.3.4–6.3.5.
    - title: Di Xiao, Ming-Che Chang, and Qian Niu, Berry Phase Effects on Electronic Properties
      url: https://arxiv.org/pdf/0907.2021
      locator: Section I.C.2.
---

## Statement

Assume Axiom of Choice and Countable Choice. Let a two-orbital finite-range Bloch Hamiltonian on the oriented torus $\mathbb T^2_{2\pi}$ have the form

$$h(k)=d_0(k)I+d_1(k)\sigma_1+d_2(k)\sigma_2+d_3(k)\sigma_3,$$

where $d_0,d_1,d_2,d_3$ are real smooth periodic functions, $\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, $\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ are the Pauli matrices, and $d=(d_1,d_2,d_3)$ is nowhere zero. Define $n=d/|d|$. The upper and lower band projectors are $P_+=(I+n\cdot\sigma)/2$ and $P_-=(I-n\cdot\sigma)/2$. With the Chern convention $C(P)=(i/2\pi)\int_{\mathbb T^2}\operatorname{tr}(P(dP\wedge dP)P)$ and orientation $dk_1\wedge dk_2$,

$$C(P_+)=-\deg(n)=-\frac{1}{4\pi}\int_{\mathbb T^2}n\cdot(\partial_{k_1}n\times\partial_{k_2}n)\,dk_1\,dk_2,\qquad C(P_-)=+\deg(n)=+\frac{1}{4\pi}\int_{\mathbb T^2}n\cdot(\partial_{k_1}n\times\partial_{k_2}n)\,dk_1\,dk_2.$$

## Statement references

[[thm-nrqmx-bloch-projector-chern]]

[[lem-nrqmx-degree-area-formula]]

## Facts & Assumptions

**Given:** Axiom of Choice, Countable Choice, the stated finite-range Bloch Hamiltonian, and $|d(k)|>0$ on the torus.

[A1] Axiom of Choice and Countable Choice are the principles in [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] [[def-nrqmx-bloch-fiber-model]] fixes the finite-range Bloch convention and torus orientation; [[lem-nrqmx-bloch-fiber-model-properties]] gives smooth Hermitian fibers and smooth isolated-band projectors.

[F2] [[thm-nrqmx-bloch-projector-chern]] gives the Chern integral convention and identifies it with an integer for a smooth gapped projector.

[F3] [[lem-nrqmx-degree-area-formula]] identifies the normalized sphere-area pullback integral with the oriented homological degree.

## Proof

**Given:** [A1], [F1]–[F3]. Write $s\in\{+1,-1\}$ for the upper or lower band sign.

1.1 Direct multiplication of the displayed Pauli matrices gives $\sigma_a\sigma_b=\delta_{ab}I+i\sum_c\epsilon_{abc}\sigma_c$, $\operatorname{tr}\sigma_a=0$, and $\operatorname{tr}(\sigma_a\sigma_b)=2\delta_{ab}$. Thus $(n\cdot\sigma)^2=|n|^2I=I$, and $h=d_0I+|d|(n\cdot\sigma)$ has eigenvalues $d_0\pm|d|$ with the stated orthogonal projectors. Since $|d|$ is continuous and positive on compact $\mathbb T^2$, its minimum is positive, so the two bands are uniformly separated; $n$ and $P_s$ are smooth. [A1, F1, given, algebra]

2.1 Differentiating $P_s=(I+s n\cdot\sigma)/2$ gives $\partial_jP_s=(s/2)(\partial_jn)\cdot\sigma$. The Pauli product identity yields $[a\cdot\sigma,b\cdot\sigma]=2i(a\times b)\cdot\sigma$, hence $[\partial_1P_s,\partial_2P_s]=\frac{i}{2}(\partial_1n\times\partial_2n)\cdot\sigma$. Using $\operatorname{tr}(P_s\sigma_a)=s n_a$, which follows from the trace identities in step 1.1, we obtain $\operatorname{tr}(P_s[\partial_1P_s,\partial_2P_s])=\frac{i s}{2}n\cdot(\partial_1n\times\partial_2n)$. In dimension two this is the coefficient of $\operatorname{tr}(P_s(dP_s\wedge dP_s)P_s)$: cyclicity and $P_s^2=P_s$ give $\operatorname{tr}(P_sXP_s)=\operatorname{tr}(P_sX)$. Multiplying by $i/(2\pi)$ therefore gives $C(P_s)=-s(4\pi)^{-1}\int n\cdot(\partial_1n\times\partial_2n)\,dk_1dk_2$. [F2, step 1.1, given, algebra]

3.1 The normalized area form in [F3] pulls back to $(4\pi)^{-1}n\cdot(\partial_1n\times\partial_2n)\,dk_1\wedge dk_2$, by the defining outward area form on the unit sphere. Hence its integral is $\deg(n)$ by [F3]. Substitution into step 2.1 gives $C(P_s)=-s\deg(n)$, which is the two displayed upper- and lower-band formulas. [F3, step 2.1, algebra] ∎

## Remarks

The cited Qi–Wu–Zhang treatment of Asbøth, Oroszlány, and Pályi uses the same two-band lattice Hamiltonian and gap-closing values, but defines its band invariant with the opposite sign: its Eqs. (2.40)–(2.41) give $Q=-(2\pi)^{-1}\int(\partial_{k_x}A_y-\partial_{k_y}A_x)$ for $A_j=i\langle u|\partial_{k_j}u\rangle$. The $C(P)$ convention here instead gives $+(2\pi)^{-1}\int dA$. Accordingly, the signs in this theorem and its examples come from the explicit projector and Pauli calculation above; the cited table is not copied without conversion.
