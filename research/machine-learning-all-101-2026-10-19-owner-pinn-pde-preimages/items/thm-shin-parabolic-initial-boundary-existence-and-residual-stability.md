---
id: thm-shin-parabolic-initial-boundary-existence-and-residual-stability
kind: theorem
title: "Variable-coefficient parabolic initial-boundary existence and residual stability"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-shin-parabolic-operator-and-boundary
  - lem-shin-parabolic-residual-stability
provenance:
  statement: literature-derived
  proof: incomplete
proof_strategy: direct
verification:
  precheck: blocked
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Assumption 3.4, Appendix F, Theorem F.1 and Lemma F.2"
---

## Statement

Let $U\subset\mathbb R^d$ be bounded, $T>0$, $Q=U\times(0,T)$, and $0<\alpha<1$. Let $a_{ij}=a_{ji}$ and $b_i$ be differentiable in space, and define
$$\widetilde b_i=\sum_{j=1}^dD_j a_{ij}+b_i+c_i,\qquad \widetilde c=\sum_{i=1}^dD_i b_i+d,\qquad \Omega=U\times(0,T).$$
Assume: (i) the minimum eigenvalue of $[a_{ij}(x,t)]$ is at least $\lambda_0>0$ on $\Omega$; (ii) $a_{ij},\widetilde b_i,\widetilde c$ are parabolic Hölder continuous of exponent $\alpha$, with the source weighted norms $|a_{ij}|_\alpha$, $|\delta\widetilde b_i|_\alpha$, and $|\delta^2\widetilde c|_\alpha$ uniformly bounded, where $\delta$ and the weighted norms are defined in the parabolic Hölder convention; (iii) $f$ is parabolic Hölder continuous with $|\delta^2f|_\alpha<\infty$, the initial datum $g$ and lateral datum $\varphi$ are parabolic Hölder continuous, and $g(x)=\varphi(x,0)$ on $\partial U$; (iv) there is $\theta>0$ such that $\theta^2a_{11}+\theta\widetilde b_1\ge1$ on $\Omega$; (v) every spatial boundary point has an exterior tangent ball; and (vi) for constants $\Lambda,v\ge0$,
$$\sum_{i,j}|a_{ij}(x,t)|^2\le\Lambda,\qquad \lambda_0^{-2}(\|b(x,t)\|^2+\|c(x,t)\|^2)+\lambda_0^{-1}|d(x,t)|\le v^2.$$
For the equation and data conventions in the local parabolic definition, the source asserts that there is a unique classical solution $u^*$.

If additionally $\widetilde c\le0$, the source asserts that any trial function $h\in C_{2+\alpha}(Q)\cap C^0(\bar U\times[0,T])$ satisfies
$$\|h-u^*\|_{C^0(Q)}\le C\left(\|f+h_t-L_t[h]\|_{C^0(Q)}+\|h-\psi\|_{C^0(\Gamma_T)}\right),$$
where $\Gamma_T=(\bar U\times\{0\})\cup(\partial U\times[0,T])$ and $\psi$ is the combined initial and lateral data. If the sampling and neural-class assumptions of the preceding regularized PINN theorem also hold, $m_r=O(m_b^{(d+1)/d})$, and $h_m$ is a global minimizer of the prescribed Hölder-regularized objective, the source further asserts $h_m\to u^*$ almost surely in $C^0(Q)$.

## Statement references
[Shin et al., Assumption 3.4, Theorem 3.13 and Lemma F.2: variable-coefficient parabolic claims](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** All coefficient, source, initial-data, lateral-data, exterior-ball, sample, network-class, regularization, and global-minimizer assumptions in the Statement.

[F1] Given a classical solution, the residual and prescribed-data errors imply the displayed sup-norm estimate by a local spatial-barrier proof ([[lem-shin-parabolic-residual-stability]]).

[F2] The equation, data and initial-lateral boundary use $P=-\partial_t+L_t$ and the final-time face is excluded ([[def-shin-parabolic-operator-and-boundary]]).

## Proof

**Proof strategy:** first construct the classical solution, then use a maximum-principle correction to prove stability.

1.1 Conditional on a classical solution $u^*$ with the stated data, apply [F1] to $h-u^*$. The operator residual is $f+h_t-L_t[h]$, and the prescribed-data error is $h-\psi$ on $\Gamma_T$, so the displayed stability bound follows. [given, F1, F2, algebra]

1.2 The source's minimizer conclusion additionally needs a constructed classical solution under Assumption 3.4. The heat-only maximum-principle supplier and step 1.1 do not construct that variable-coefficient solution, so no existence step has been proved from the listed assumptions. [given, F1, F2, step 1.1]

## Unresolved proof obligation

The classical variable-coefficient parabolic existence theorem under Assumption 3.4 and the exterior-ball/compatibility conditions is not proved locally. Shin et al.'s Theorem F.1 cites an external parabolic PDE theorem; the published heat maximum-principle supplier is heat-only. The unique-solution claim and the instantiated minimizer convergence theorem therefore remain escalated until the variable-coefficient Schauder existence argument is supplied with the exact stated assumptions.
