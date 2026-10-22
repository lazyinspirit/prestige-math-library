---
id: cex-qsmx-dc-order-of-limits
kind: counterexample
title: A conserved finite current obstructs an integrable dc correlation
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-qsmx-lattice-current-and-limits
  - lem-qsmx-lattice-current-continuity
  - thm-qsmx-finite-mazur-bound
dependency_roles:
  def-qsmx-lattice-current-and-limits: mathematical-premise
  lem-qsmx-lattice-current-continuity: mathematical-premise
  thm-qsmx-finite-mazur-bound: mathematical-premise
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "J. Sirker, Transport in one-dimensional integrable quantum systems, SciPost Physics Lecture Notes 17 (2020), §2.1, equations (2.9)–(2.14), and §2.2"
      url: https://arxiv.org/pdf/1910.12155
      locator: "§2.1, equations (2.9)–(2.14), and §2.2: finite persistent correlations, limit-order cautions, and the role of nondecaying current components."
    - title: "MIT OpenCourseWare 22.103, Microscopic Theory of Transport, Lecture 3: Diffusion and the Velocity Autocorrelation—Green-Kubo Relations"
      url: https://ocw.mit.edu/courses/22-103-microscopic-theory-of-transport-fall-2003/42a7a0ddcb94eb23f6c096ae04da0162_lec3.pdf
      locator: "Lecture 3, equations (3.6)–(3.8), and discussion on pp. 3–4: a nondecaying correlation makes the Green–Kubo integral diverge."
---

## Statement refuted

Every finite thermal lattice current correlation $C_L(t)$ defined by the current convention in this page is absolutely integrable on $[0,\infty)$, so its unregulated Green–Kubo integral is finite.

## Statement references

[[def-qsmx-lattice-current-and-limits]]

[Sirker, §2](https://arxiv.org/pdf/1910.12155)

[MIT OpenCourseWare 22.103, Lecture 3](https://ocw.mit.edu/courses/22-103-microscopic-theory-of-transport-fall-2003/42a7a0ddcb94eb23f6c096ae04da0162_lec3.pdf)

## Facts & Assumptions

**Given:** The finite-volume current convention, finite Mazur bound, and three-site ring below.

[F1] [[def-qsmx-lattice-current-and-limits]]: $j_{j,j+1}=(i/\hbar)[h_{j,j+1},q_{j+1}]$, $J_L=\sum_j j_{j,j+1}$, and $C_L(t)=L^{-1}\operatorname{Re}\omega_{\beta,L}(J_L^\circ(t)J_L^\circ)$.

[F2] [[lem-qsmx-lattice-current-continuity]]: local charge-conserving bond terms give the oriented continuity equation and self-adjoint bond currents.

[F3] [[thm-qsmx-finite-mazur-bound]]: a centered finite current with nonzero overlap with a conserved operator has a strictly positive lower bound on its Cesàro autocorrelation.

[A1] Take $L=3$, $\mathcal H_3=\mathbb C^3$ with orthonormal site basis $|0\rangle,|1\rangle,|2\rangle$, indices modulo $3$, $q_j=q_*|j\rangle\langle j|$ with a fixed $q_*>0$ of unit $\mathsf Q$, and $h_{j,j+1}=-g(|j\rangle\langle j+1|+|j+1\rangle\langle j|)$ for an energy $g>0$. Use finite $\beta>0$ and $\hbar>0$.

## Counterexample

**Given:** [A1], [F1]–[F3]. Let $S:=\sum_{j=0}^2|j+1\rangle\langle j|$ be the cyclic shift, $H_3:=\sum_jh_{j,j+1}$, $J_3:=\sum_jj_{j,j+1}$, and $\rho_{\beta,3}:=e^{-\beta H_3}/\operatorname{Tr}(e^{-\beta H_3})$.

1.1 Each $h_{j,j+1}$ acts only on the span of $|j\rangle,|j+1\rangle$, so it commutes with every $q_k$ outside those two sites and with $q_j+q_{j+1}$. The definition [F1] therefore applies. By [F2], each bond current is self-adjoint, so $J_3=J_3^*$. Direct multiplication gives $H_3=-g(S+S^*)$ and $J_3=(iq_*g/\hbar)(S-S^*)$. Since $S$ is unitary, $S$ commutes with $S^*$; hence $[H_3,J_3]=0$, and $J_3\ne0$. [given, A1, F1, F2, algebra]

2.1 In the Fourier basis of the three-cycle, $H_3$ has eigenvalues $-2g,g,g$, while $J_3$ has eigenvalues $0,\sqrt3q_*g/\hbar,-\sqrt3q_*g/\hbar$ in the corresponding order. The two states with energy $g$ have equal Gibbs weight, so $\omega_{\beta,3}(J_3)=0$. Positive definiteness of $\rho_{\beta,3}$ and $J_3\ne0$ give $c:=\omega_{\beta,3}(J_3^2)=6q_*^2g^2/(\hbar^2(e^{3\beta g}+2))>0$, with unit $\mathsf Q^2\,\mathrm{s}^{-2}$. [given, A1, step 1.1, algebra]

3.1 Because $[H_3,J_3]=0$, Heisenberg evolution fixes $J_3$ for all $t$. Thus $J_3^\circ=J_3$ and $C_3(t)=c/3$ is a positive constant. Therefore $\int_0^\infty|C_3(t)|\,dt=+\infty$, refuting the statement. [F1, step 1.1, step 2.1, algebra]

4.1 In the finite Mazur bound [F3], choose the single conserved operator $Q_1=J_3$. Then $G_{11}=v_1=c$, so the lower bound on the Cesàro average of the unnormalized autocorrelation $\operatorname{Re}\omega_{\beta,3}(\alpha_t(J_3)J_3)$ is $c>0$. The per-site convention in the definition gives $C_3(t)=\frac13\operatorname{Re}\omega_{\beta,3}(\alpha_t(J_3)J_3)$, so the Mazur contribution for the Cesàro average of $C_3$ is $c/3$, equal to the constant correlation found in step 3.1. This remains a finite-volume obstruction only; no thermodynamic Drude weight is inferred. [F3, step 2.1, step 3.1, algebra] ∎

## Diagram

The arrows show the orientation $j\to j+1$ used in [F1]. The diagram records the three-site ring in [A1]; the proof computes its matrices directly and does not use the picture.

```tikz
\begin{tikzpicture}[>=stealth]
  \node (q0) at (0,0) {$q_0$};
  \node (q1) at (3,0) {$q_1$};
  \node (q2) at (1.5,2) {$q_2$};
  \draw[->] (q0) -- node[below] {$j_{0,1}$} (q1);
  \draw[->] (q1) -- node[right] {$j_{1,2}$} (q2);
  \draw[->] (q2) -- node[left] {$j_{2,0}$} (q0);
\end{tikzpicture}
```
