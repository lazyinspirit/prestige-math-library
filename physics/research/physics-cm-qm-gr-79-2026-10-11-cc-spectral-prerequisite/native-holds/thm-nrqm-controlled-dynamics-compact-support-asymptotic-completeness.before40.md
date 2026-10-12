---
id: thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness
aliases: [nrqm-controlled-dynamics-compact-support-asymptotic-completeness]
kind: theorem
domain: mathematics
title: "Compact-support asymptotic completeness"
status: draft
origin: pipeline
dependency_level: 10
deps: [thm-nrqm-controlled-dynamics-compact-scattering-defects, thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation, thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence, thm-riemann-lebesgue, thm-canonical-spectral-type-decomposition, def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces, thm-norm-limit-of-compact-operators-is-compact, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-compact-scattering-defects: mathematical-premise
  thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation: mathematical-premise
  thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence: mathematical-premise
  thm-riemann-lebesgue: mathematical-premise
  thm-canonical-spectral-type-decomposition: mathematical-premise
  def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 12 pp. 245-256 (asymptotic completeness for short-range potentials)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "M. Reed and B. Simon, Methods of Modern Mathematical Physics III: Scattering Theory, Sections XI.4-XI.6 (Enss-type completeness for short-range potentials)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V\in L^\infty(\mathbb R^3;\mathbb R)$ be real with
$\operatorname{supp}V\subseteq B_R$, let $H_0=-\Delta$ and
$H=H_0+M_V$ on $D(H)=H^2(\mathbb R^3)$, and let $\Omega_\pm$ be the wave
operators of [[thm-nrqm-controlled-dynamics-compact-scattering-defects]].
Write $H_{\mathrm{ac}},H_{\mathrm{sc}},H_{\mathrm{pp}}$ for the spectral
subspaces of [[def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces]].
Then:

(a) $\operatorname{ran}\Omega_\pm\subseteq H_{\mathrm{ac}}(H)$ and
$H_{\mathrm{sc}}(H)=\{0\}$;

(b) $\operatorname{ran}\Omega_\pm=H_{\mathrm{ac}}(H)=H_{\mathrm{c}}(H)$, i.e.
the wave operators are asymptotically complete;

(c) $S:=\Omega_+^*\Omega_-$ is unitary on $L^2(\mathbb R^3)$ and commutes with
$e^{-itH_0}$ for every $t$.

## Facts & Assumptions

**Given:** the real bounded compactly supported $V$, the operators $H_0,H$, the wave operators $\Omega_\pm$, and $f\in C_c(\mathbb R)$.

[F1] $H_0$ is purely absolutely continuous ([[thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence]] (c)); $\Omega_\pm$ are isometries intertwining $H_0$ and $H$: $\Omega_\pm e^{-isH_0}=e^{-isH}\Omega_\pm$ ([[thm-nrqm-controlled-dynamics-compact-scattering-defects]], [[thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence]]).

[F2] The defects $C_\pm=(\Omega_\pm-I)f(H_0)P_\pm$ are compact for every $f\in C_c(\mathbb R)$, and $f(H)-f(H_0)$ is compact for every $f\in C_0(\mathbb R)$ ([[thm-nrqm-controlled-dynamics-compact-scattering-defects]]).

[F3] Riemann–Lebesgue: for a finite measure with $L^1$ density the Fourier transform vanishes at infinity; scalar spectral measures of vectors in $H_{\mathrm{ac}}(H)$ have $L^1$ densities, so $e^{-itH}\psi\to0$ weakly as $t\to\pm\infty$ for $\psi\in H_{\mathrm{ac}}(H)$ ([[thm-riemann-lebesgue]], [[thm-canonical-spectral-type-decomposition]], [[def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces]]).

## Proof

1.1 [The range is absolutely continuous] By [F1] the closed subspace $\operatorname{ran}\Omega_+$ is $H$-invariant, and $\Omega_+$ conjugates the action of $e^{-itH}$ on it to the action of $e^{-itH_0}$ on $L^2$; since $H_0$ is purely absolutely continuous, the restriction of $H$ to $\operatorname{ran}\Omega_+$ has purely absolutely continuous spectral measures, so $\operatorname{ran}\Omega_+\subseteq H_{\mathrm{ac}}(H)$; the same holds for $\Omega_-$. [F1, algebra]

2.1 [Vanishing of the singular continuous part] For $f\in C_0$, split $f(H_0)=f(H_0)P_++f(H_0)P_-$ and insert the identifications $\Omega_+f(H_0)P_+=f(H)\Omega_+P_+$, $\Omega_-f(H_0)P_-=f(H)\Omega_-P_-$: multiplying $f(H)$ on the right by the decomposition of the identity gives $f(H_0)=-\,(C_++C_-)+R$ with $R:=f(H)\Omega_+P_++f(H)\Omega_-P_-$; applying the spectral projection $Q_{\mathrm{sc}}:=E_H(\mathbb R)$-singular of $H$ and using the invariance $\Omega_\pm P_\pm$ of the absolutely continuous subspace from step 1.1, the range terms lie in $H_{\mathrm{ac}}$, so $Q_{\mathrm{sc}}f(H_0)=-Q_{\mathrm{sc}}(C_++C_-)$ is compact by [F2]. Adding the compact $f(H)-f(H_0)$ gives compactness of $Q_{\mathrm{sc}}f(H)$ for $f\in C_c$. On a positive compact energy interval $J$ choose $f\ge0$ equal to $1$ on $J$; then $E_H(J)Q_{\mathrm{sc}}=Q_{\mathrm{sc}}f(H)E_H(J)$ is a compact orthogonal projection, hence of finite rank, and the restriction of the self-adjoint operator $H$ to its finite-dimensional range has only point spectrum, contradicting singular continuity unless it is zero. Hence $H_{\mathrm{sc}}(H)=\{0\}$. [step 1.1, F2, algebra]

3.1 [Range equality] Let $\psi\in H_{\mathrm{ac}}(H)$ be orthogonal to $\operatorname{ran}\Omega_+$. Cutting off energy, assume $\psi=f(H)\psi$ with $f\in C_c$, and put $\psi_t:=e^{-itH}\psi$. By [F3], $\psi_t\to0$ weakly, so by [F2] and compactness $\|\psi_t-f(H_0)\psi_t\|\to0$ and $\|C_\pm\psi_t\|\to0$. Hence $\|\psi\|^2=\lim_t\langle\psi_t,\Omega_+f(H_0)P_+\psi_t+\Omega_-f(H_0)P_-\psi_t\rangle$, and the $\Omega_+$ term vanishes because $\psi\perp\operatorname{ran}\Omega_+$; for the remaining term move the adjoint: the pairing is at most $\|P_-f(H_0)^*\Omega_-^*\psi_t\|\|\psi\|$, and by intertwining $\Omega_-^*\psi_t=e^{-itH_0}\Omega_-^*\psi$, whose norm tends to $0$ as $t\to+\infty$ by the opposite-time free estimate of [[thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation]]. Thus $\psi=0$ and $\operatorname{ran}\Omega_+=H_{\mathrm{ac}}(H)$; the other sign and the case of $\Omega_-$ are identical. Since $H_{\mathrm{sc}}=0$, one has $H_{\mathrm{ac}}=H_{\mathrm{c}}$, and $S=\Omega_+^*\Omega_-$ is unitary on $L^2$ because $\Omega_\pm$ are isometries onto the same subspace; the intertwining gives $Se^{-itH_0}=e^{-itH_0}S$. [step 2.1, F1, F2, F3, algebra] ∎
