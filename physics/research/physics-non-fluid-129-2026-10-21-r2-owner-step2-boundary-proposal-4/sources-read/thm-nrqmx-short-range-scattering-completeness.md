---
id: thm-nrqmx-short-range-scattering-completeness
kind: theorem
domain: mathematics
library: mathematics
title: Compact-support short-range scattering closure
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-nrqmx-scattering-channel-data
  - thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
  - thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness
  - thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification
  - thm-canonical-spectral-type-decomposition
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqmx-scattering-channel-data: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness: mathematical-premise
  thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification: mathematical-premise
  thm-canonical-spectral-type-decomposition: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "D. R. Yafaev, Lectures on Scattering Theory, Lectures 1–2"
      url: "https://arxiv.org/pdf/math/0403213"
      locator: "Lecture 1, Definitions 1.1–1.3; Lecture 2, §§2.1–2.2 and equations (2.14)–(2.16), PDF pp.2–3, 6–11."
    - title: "B. Zwiebach, Quantum Physics III, Chapter 7: Scattering, MIT OpenCourseWare (Spring 2018)"
      url: "https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/45dbd7038c3e969491eceeae86c44d42_MIT8_06S18ch7.pdf"
      locator: "§§7.1 and 7.3, PDF pp.1–4 and 12–15: positive-energy finite-range scattering setup, outgoing Green function, and integral scattering equation; it does not prove operator-theoretic completeness."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let
$V\in L^\infty(\mathbb R^3;\mathbb R)$ and suppose there is a compact set
$K\subset\mathbb R^3$ such that $V=0$ almost everywhere outside $K$.
Let $\mathcal H=L^2(\mathbb R^3;\mathbb C)$, and set
$H_0=-\Delta$ and $H=H_0+M_V$ on
$D(H_0)=D(H)=H^2(\mathbb R^3;\mathbb C)$. Use

$$\widehat f(p)=(2\pi)^{-3/2}\int_{\mathbb R^3}e^{-ip\cdot x}f(x)\,dx,\qquad \Omega_\pm=\operatorname*{s-lim}_{t\to\pm\infty}e^{itH}e^{-itH_0}, \qquad S=\Omega_+^*\Omega_-.$$

Here $M_Vf=Vf$, and the strong limits act on every $f\in\mathcal H$. Then:

(a) The wave operators exist, are isometries, and satisfy

$$\operatorname{ran}\Omega_+=\operatorname{ran}\Omega_-=\mathcal H_{\mathrm{ac}}(H)=\mathcal H_{\mathrm c}(H), \qquad \mathcal H_{\mathrm{sc}}(H)=\{0\}.$$

For $u\in\mathcal H$, write $\mu_u(B)=\|E_H(B)u\|^2$. The subspace
$\mathcal H_{\mathrm{ac}}(H)$ consists of vectors with
$\mu_u\ll dE$; $\mathcal H_{\mathrm{sc}}(H)$ is the subspace with atomless
scalar spectral measures singular with respect to Lebesgue measure;
$\mathcal H_{\mathrm{pp}}(H)$ is the closed span of eigenspaces, and
$\mathcal H_{\mathrm c}(H)=\mathcal H_{\mathrm{pp}}(H)^\perp$. These are the
canonical spectral-type subspaces of the PVM.

(b) The scattering operator $S$ is unitary on $\mathcal H$ and commutes with $e^{-itH_0}$ for every $t\in\mathbb R$.

Use time in the corresponding $\hbar=1$ evolution convention and the
standard scaled Schrödinger normalization in which the kinetic
coefficient $\hbar^2/(2m)$ is set to $1$. When length is dimensional,
$E$ and $V$ then have units $L^{-2}$ and $k=\sqrt E$ has units
$L^{-1}$; the proof is an operator deduction in this normalization.

(c) Put $\mathfrak h=L^2(S^2,d\sigma)$, where $d\sigma(S^2)=4\pi$, and define the normalized free energy transform

$$(F_0f)(E,\omega)=\frac{E^{1/4}}{\sqrt2}\widehat f(\sqrt E\,\omega), \qquad F_0:\mathcal H\to L^2((0,\infty),dE;\mathfrak h).$$

Fix a bounded ball $B$ containing $K$. For $E>0$,
$k=\sqrt E$, define bounded maps $Z_0(E):L^2(B)\to\mathfrak h$ and
$Z_0(E)^*:\mathfrak h\to L^2(B)$ by

$$(Z_0(E)f)(\omega)=\frac{\sqrt k}{4\pi^{3/2}}\int_Be^{-ik\omega\cdot x}f(x)\,dx,\qquad (Z_0(E)^*a)(x)=\frac{\sqrt k}{4\pi^{3/2}}\int_{S^2}e^{ik\omega\cdot x}a(\omega)\,d\sigma(\omega).$$

Let $R_H(E+i0):L^2(B)\to L^2(B)$ be the operator-norm limit
$\lim_{\epsilon\downarrow0}\mathbf1_B(H-(E+i\epsilon)I)^{-1}\mathbf1_B$;
existence and continuity for $E>0$ are part of the stated supplier input.
The products below are these bounded maps on $B$. Then $F_0$ is unitary and
there is a measurable unitary field $S_{\mathrm{stat}}(E)\in\mathcal B(\mathfrak h)$ such that

$$F_0SF_0^*=M_{S_{\mathrm{stat}}(E)},\qquad S_{\mathrm{stat}}(E)=I_{\mathfrak h}-2\pi i\,Z_0(E)\bigl[V-VR_H(E+i0)V\bigr]Z_0(E)^*, \quad E>0.$$

The formula uses only positive energies; it makes no claim at the threshold $E=0$, and no long-range Coulomb potential is included.

## Statement references

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-nrqmx-scattering-channel-data]]

[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]

[[thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness]]

[[thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification]]

[[thm-canonical-spectral-type-decomposition]]

## Facts & Assumptions

**Given:** AC and CC; a real bounded compactly supported $V$; the free Fourier convention, operators and wave limits in the Statement.

[A1] Assume AC ([[def-axiom-of-choice]]).

[A2] Assume CC ([[def-countable-choice]]).

[F1] The real multiplier and bounded-potential theorem gives $H_0=-\Delta$ self-adjoint on $H^2$, $H_0\ge0$, and $H=H_0+M_V$ self-adjoint on the same domain ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]).

[F2] For the exact hypotheses $V\in L^\infty(\mathbb R^3;\mathbb R)$, compact support, $H_0=-\Delta$, and $H=H_0+M_V$ on $H^2$, the compact-support completeness supplier proves that $\Omega_\pm$ exist by Cook's construction, their individual ranges equal $\mathcal H_{\mathrm{ac}}(H)=\mathcal H_{\mathrm c}(H)$, the singular-continuous subspace is zero, and $S=\Omega_+^*\Omega_-$ is unitary and commutes with the free group ([[thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness]]).

[F3] For the same real bounded compactly supported $V$, the stationary/dynamical supplier uses $\widehat f(p)=(2\pi)^{-3/2}\int e^{-ip\cdot x}f(x)\,dx$, $F_0f(E,\omega)=E^{1/4}\widehat f(\sqrt E\,\omega)/\sqrt2$, and proves that $F_0$ is unitary, that $Z_\pm=F_0\Omega_\pm^*$, and that the positive-energy stationary matrix is

$$I-2\pi i\,Z_0(E)\bigl[V-VR_H(E+i0)V\bigr]Z_0(E)^*.$$

It proves this matrix is unitary for every $E>0$, with the local resolvent and compact-region adjoint conventions in the Statement ([[thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification]]).

[F4] The definitions of $\Omega_\pm$, completeness, and $S=\Omega_+^*\Omega_-$ are those of [[def-nrqmx-scattering-channel-data]].

[F5] The canonical spectral-type decomposition defines the absolutely continuous, singular-continuous, and pure-point subspaces from the spectral PVM and scalar measures $\mu_u(B)=\|E_H(B)u\|^2$ ([[thm-canonical-spectral-type-decomposition]]).

## Proof

**Given:** [A1], [A2], [F1]–[F5], and the operators and conventions stated above.

1.1 The Fourier convention in [F1] is $\widehat f_{2\pi}(\xi)=\int e^{-2\pi i x\cdot\xi}f(x)\,dx$; with $p=2\pi\xi$, its multiplier $4\pi^2|\xi|^2$ is exactly $|p|^2$, and the unitary momentum transform is $(2\pi)^{-3/2}\int e^{-ip\cdot x}f(x)\,dx$. Thus the $H_0$ and domain $H^2$ in [F2] agree with those in the Statement. Since the potential is the same real bounded compactly supported multiplication operator, [F1] also gives the self-adjoint realization required by [F2]. [A1, A2, F1, F2, algebra]

1.2 By [F2], the two stated pointwise strong limits exist with the exact sign convention $e^{itH}e^{-itH_0}$, are isometries, and have the stated individual ranges. That same supplier proves the absent singular-continuous subspace; [F5] fixes the PVM meaning of these spectral subspaces. In the degenerate case $V=0$, the approximants are $e^{itH_0}e^{-itH_0}=I$, so $\Omega_\pm=I$ and $S=I$. By [F4], the supplier's scattering operator is exactly the $S$ defined in the Statement, so its unitarity and free-group commutation give (b). [F2, F4, F5, algebra]

1.3 The Fourier scaling and energy change of variables in [F3] use the same momentum transform and $d\sigma(S^2)=4\pi$ as in the Statement. Hence the local $F_0$, $Z_0(E)$, resolvent boundary value, and compact-region generalized adjoint agree term-for-term with [F3]; no independent normalization or sign change is introduced. [F3, algebra]

2.1 Applying [F3] with the identical $H_0,H,V$ now proves that $F_0$ is unitary, that $F_0SF_0^*$ is multiplication by $S_{\mathrm{stat}}(E)$, and that the displayed stationary formula is unitary for every $E>0$. The result is conditional on AC, CC and the compact-support model and makes no threshold or Coulomb assertion. This proves (a)–(c). [A1, A2, F1, F2, F3, F4, step 1.1, step 1.2, step 1.3] ∎

