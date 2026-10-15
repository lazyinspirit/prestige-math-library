---
id: lem-qft-example-penning-frequency-invariant
kind: lemma
title: Ideal linear Penning mode-frequency invariant
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-qft-example-data]
dependency_roles:
  def-qft-example-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "L. S. Brown and G. Gabrielse, Geonium theory: Physics of a single electron or ion in a Penning trap, Reviews of Modern Physics 58 (1986), §II.A and §II.D, Eqs. (2.1)–(2.17), (2.70)–(2.79)"
      url: https://cfp.physics.northwestern.edu/documents/GeoniumTheoryReview.pdf
    - title: "Manuel Vogel, Particle Confinement in Penning Traps: An Introduction, Springer Series on Atomic, Optical, and Plasma Physics 100 (2018), Chapter 5, §§5.1–5.3.2, Eqs. (5.1)–(5.27)"
      url: https://ndl.ethernet.edu.et/bitstream/123456789/72726/1/243.pdf
    - title: "David Tong, Quantum Field Theory, Cambridge Part III complete lecture notes, §0.1 Units and Scales"
      url: https://davidtong.org/teaching/quantum-field-theory/qfthtml/S0
    - title: "X. Fan et al., Measurement of the Electron Magnetic Moment, Physical Review Letters 130, 071801 (2023), arXiv:2209.13084v2 (2022)"
      url: https://arxiv.org/html/2209.13084
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

Let $q\ne0$ be a signed charge in coulombs, $M>0$ a rest-mass energy in joules, $c>0$ the speed of light in metres per second, and $\mathbf B\in\mathbb R^3\setminus\{0\}$ a constant magnetic-field vector in teslas. Set $m:=M/c^2>0$. Let $K\in\mathbb R^{3\times3}$ be a real symmetric matrix with $\operatorname{tr}K=0$, with units volts per square metre, and define the quadratic scalar potential $\Phi(\mathbf r):=\tfrac12\mathbf r^{T}K\mathbf r$ for $\mathbf r\in\mathbb R^3$ in metres. Thus $\partial_i\partial_j\Phi=K_{ij}$ and $\sum_{i=1}^3\partial_i^2\Phi=\operatorname{tr}K=0$. Put $\alpha:=qc^2/M=q/m$, $D:=-\alpha K$, and define $C:\mathbb R^3\to\mathbb R^3$ by $C\mathbf w:=\alpha\,\mathbf w\times\mathbf B$. The ideal linear model is the real linear map $A:\mathbb R^3\times\mathbb R^3\to\mathbb R^3\times\mathbb R^3$, $A(\mathbf r,\mathbf v):=(\mathbf v,D\mathbf r+C\mathbf v)$, equivalently $A=\begin{pmatrix}0&I_3\\D&C\end{pmatrix}$. Equivalently, its equations are $\dot{\mathbf r}=\mathbf v$ and $\dot{\mathbf v}=-(qc^2/M)K\mathbf r+(qc^2/M)\mathbf v\times\mathbf B$. The entries of $\mathbf r,\mathbf v$ are their real numerical coordinates in the fixed SI units. A state solution on an open time interval $I\subseteq\mathbb R$ is a $C^1$ map $y=(\mathbf r,\mathbf v):I\to\mathbb R^3\times\mathbb R^3$ satisfying the displayed equations for every $t\in I$. Here $\mathbf v$ has units metres per second, $D$ has units inverse seconds squared, and $C$ has units inverse seconds.

Define a linear mode to be a complex eigenvector of the complexified state matrix $A$; its eigenvalue $+i\omega$ or $-i\omega$ gives the time factor $e^{\pm i\omega t}$, with angular frequency $\omega>0$ in radians per second. Assume the complexification of $A$ is diagonalizable with eigenvalues $+i\omega_1,-i\omega_1,+i\omega_2,-i\omega_2,+i\omega_3,-i\omega_3$, where each $\omega_j$ is counted with its eigenvalue multiplicity. Define the free cyclotron angular frequency $\omega_c:=|q|c^2|\mathbf B|/M$. Then

$$\omega_c^2=\omega_1^2+\omega_2^2+\omega_3^2.$$

Consequently, if $\nu_c:=\omega_c/(2\pi)$ and $\nu_j:=\omega_j/(2\pi)$ are the corresponding ordinary frequencies in hertz, then $\nu_c^2=\nu_1^2+\nu_2^2+\nu_3^2$. The claim is conditional on the stated uniform-field, harmonic-quadrupole, and complete stable-mode hypotheses; it is an identity for this linear model.

## Facts & Assumptions

**Given:** Use the exact planned QFT-MX01 mass-energy convention below, together with the real linear model and spectral hypothesis stated in this item.

[L1] [[def-qft-example-data]] (QFT-MX01): the current draft Definition at items/def-qft-example-data.md says, “Write $M=mc^2$ for rest energy in joules,” with $c>0$ in metres per second. Its dependency list is empty. Its proof checks the listed unit conventions, but the draft has no independent acceptance stamp. The actual statement matches the use $m=M/c^2$ here; the theorem does not rely on the supplier for any dynamics or spectral result.

[A1] Model data: $q\ne0$, $M>0$, $c>0$, $\mathbf B\ne0$, $K=K^T$, and $\operatorname{tr}K=0$; $m=M/c^2$, $\alpha=qc^2/M$, $D=-\alpha K$, $C\mathbf w=\alpha\,\mathbf w\times\mathbf B$, and $A=\begin{pmatrix}0&I_3\\D&C\end{pmatrix}$.

[A2] Spectral hypothesis: $A$ is diagonalizable over $\mathbb C$ with eigenvalues $\pm i\omega_j$, $j=1,2,3$, where every $\omega_j>0$; repeated frequencies are allowed and counted with multiplicity.

## Proof
1.1 By [L1], the inertial-mass coefficient in the SI equation is $q/m=qc^2/M=\alpha$. Block multiplication gives $A^2=\begin{pmatrix}D&C\\CD&D+C^2\end{pmatrix}$, so $\operatorname{tr}(A^2)=2\operatorname{tr}D+\operatorname{tr}(C^2)$. [L1, A1, algebra]

1.2 By [A2], write the complexification as $A=P\Lambda P^{-1}$, where $\Lambda$ is diagonal with the six stated eigenvalues. Then $A^2=P\Lambda^2P^{-1}$; the finite-sum identity $\operatorname{tr}(XY)=\sum_{k,\ell}X_{k\ell}Y_{\ell k}=\operatorname{tr}(YX)$ gives $\operatorname{tr}(A^2)=\operatorname{tr}(\Lambda^2)=\sum_{j=1}^3((i\omega_j)^2+(-i\omega_j)^2)=-2\sum_{j=1}^3\omega_j^2$. [A2, algebra]

2.1 Since $D=-\alpha K$ and $\operatorname{tr}K=0$, $\operatorname{tr}D=0$. In the fixed right-handed Cartesian coordinates, $C$ has matrix $\alpha\begin{pmatrix}0&B_3&-B_2\\-B_3&0&B_1\\B_2&-B_1&0\end{pmatrix}$, so the diagonal entries of $C^2$ are $-\alpha^2(B_2^2+B_3^2)$, $-\alpha^2(B_1^2+B_3^2)$, and $-\alpha^2(B_1^2+B_2^2)$. Therefore $\operatorname{tr}(C^2)=-2\alpha^2|\mathbf B|^2=-2\omega_c^2$ and $\operatorname{tr}D=0$ gives $\operatorname{tr}(A^2)=-2\omega_c^2$ by step 1.1. [A1, step 1.1, algebra]

3.1 Equating the trace calculations in steps 2.1 and 1.2 and dividing by $-2$ gives $\omega_c^2=\omega_1^2+\omega_2^2+\omega_3^2$. [step 2.1, step 1.2, algebra]

4.1 Dividing the angular-frequency identity in step 3.1 by $(2\pi)^2$ gives the same sum-of-squares identity for $\nu_c,\nu_1,\nu_2,\nu_3$. [step 3.1, algebra] ∎

## Remarks

This is a mathematical deduction about the displayed first-order matrix. It does not prove that an actual trap realizes the model or spectral hypothesis. The statement excludes higher spatial multipoles, magnetic-field inhomogeneity, relativistic shifts, radiation or cavity shifts, and nonlinear motion. The Brown–Gabrielse derivation treats the broader quadratic model with field misalignment and ellipticity; the trace proof above supplies the local argument under the stated matrix hypotheses.

The current draft Definition [[def-qft-example-data]] has been inspected and its mass-energy interface matches this use. This conditional matrix deduction does not certify the supplier or any physical trap.
