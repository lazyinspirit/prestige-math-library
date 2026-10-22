---
id: cex-qsmx-stationarity-without-relaxation
kind: counterexample
title: A two-level generator fixes many states
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-qsm-dt-channel-definition
  - def-qsm-dt-gksl-definition
  - thm-qsmx-spohn-finite-inequality
  - thm-qsm-dt-gksl-sufficient
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-exponential-series-of-a-bounded-operator
dependency_roles:
  def-qsm-dt-channel-definition: mathematical-premise
  def-qsm-dt-gksl-definition: mathematical-premise
  thm-qsmx-spohn-finite-inequality: mathematical-premise
  thm-qsm-dt-gksl-sufficient: mathematical-premise
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ángel Rivas and Susana F. Huelga, Open Quantum Systems: An Introduction, Springer Briefs in Physics, arXiv:1104.5242v2, §6.2.8"
      url: https://arxiv.org/pdf/1104.5242
    - title: "Lin Lin, Notes on Lindblad Equations and Davies Generator, §§3 and 5"
      url: https://ruizhezhang.com/teaching_2025/Lindblad_Notes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement refuted

Let $d\geq1$ and let $(T_t)_{t\geq0}$ be complex-linear maps on $M_d(\mathbb C)$ that are completely positive (each finite ancilla amplification preserves positive matrices) and trace-preserving ($\operatorname{Tr}(T_t(X))=\operatorname{Tr}X$ for every $X$), with $T_0=\operatorname{id}$ and $T_{t+s}=T_t\circ T_s$ for all $s,t\geq0$. A density matrix $\rho$ means $\rho=\rho^*$, $v^*\rho v\geq0$ for every $v\in\mathbb C^d$, and $\operatorname{Tr}\rho=1$; it is faithful when $v^*\rho v>0$ for every nonzero $v\in\mathbb C^d$. For a Hermitian matrix $H\in M_d(\mathbb C)$ and $\beta\in\mathbb R$, define $Z_\beta:=\operatorname{Tr}(e^{-\beta H})>0$ and the Gibbs density $\sigma_\beta:=e^{-\beta H}/Z_\beta$. A density matrix $\sigma$ is stationary for $(T_t)$ when $T_t(\sigma)=\sigma$ for every $t\geq0$. For a density matrix $\rho$ and faithful density $\sigma$, let $D(\rho\|\sigma):=\operatorname{Tr}(\rho\log\rho)-\operatorname{Tr}(\rho\log\sigma)$, using the natural logarithm, the finite spectral logarithm on the support of $\rho$, and $0\log0:=0$. The claim refuted here is that nonincrease of relative entropy to a faithful stationary Gibbs density is sufficient to guarantee that the Gibbs density is the unique stationary density and that every initial density converges to it.

## Statement references

[[thm-qsmx-spohn-finite-inequality]]

[[def-qsm-dt-channel-definition]]

[[def-qsm-dt-gksl-definition]]

[[thm-qsm-dt-gksl-sufficient]]

## Facts & Assumptions

**Units convention:** In the refuted Gibbs formula, $H$ is an energy matrix with entries in joules and $\beta\in\mathbb R$ is an inverse-energy parameter in joules$^{-1}$, so $\beta H$ is dimensionless. All real values of $\beta$, including zero and negative values, are retained; no positive-temperature restriction is imposed.

**Given:** The space is $\mathcal H=\mathbb C^2$ with standard basis $e_0=(1,0)^T$, $e_1=(0,1)^T$, written $|j\rangle=e_j$; $E_{jk}$ denotes the matrix unit defined by $E_{jk}e_\ell=\delta_{k\ell}e_j$. Let $Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, $H=0$ joules, $\gamma>0$ have units seconds$^{-1}$, and $\beta\in\mathbb R$ have units joules$^{-1}$. The generator acts on dimensionless matrices as $\mathcal L(\rho)=\gamma(Z\rho Z-\rho)$. Time $t$ is in seconds. An initial density has the form $\rho(0)=\begin{pmatrix}p&z\\\overline z&1-p\end{pmatrix}$ with $0\leq p\leq1$ and $|z|^2\leq p(1-p)$.

[A1] [[thm-qsmx-spohn-finite-inequality]] (this batch’s draft theorem; its current proof is presented here as a conditional input and remains subject to independent review): for a finite channel semigroup with a faithful stationary density, relative entropy to that density is nonincreasing.

[F1] [[def-qsm-dt-channel-definition]]: a finite quantum channel is a complex-linear map that is completely positive and trace-preserving.

[F2] [[def-qsm-dt-gksl-definition]]: a finite GKSL generator on dimensionless matrices has Hamiltonian term $-i[H,\rho]/\hbar$ and finite jump terms $J\rho J^*-\frac12\{J^*J,\rho\}$, with jump matrices in seconds$^{-1/2}$.

[F3] [[thm-qsm-dt-gksl-sufficient]]: a finite GKSL generator produces finite channel maps $T_t=e^{t\mathcal L}$ for every $t\geq0$.

[F4] [[cor-finite-dimensional-normed-spaces-are-banach]]: every finite-dimensional normed space is complete.

[F5] [[lem-exponential-series-of-a-bounded-operator]]: on a Banach space the operator exponential is given by its operator-norm convergent series.

## Counterexample

1.1 Let $J=\sqrt{\gamma}Z$, which is Hermitian and has units seconds$^{-1/2}$, so $J^*J=\gamma I_2$. Substitution of $H=0$ and this jump into [F2] gives $J\rho J^*-\frac12\{J^*J,\rho\}=\gamma(Z\rho Z-\rho)=\mathcal L(\rho)$. Use the max-entry norm on $M_2(\mathbb C)$; the space is finite-dimensional and hence Banach by [F4]. Since $Z$ is diagonal with entries $1,-1$, $\|\mathcal L(X)\|_{\max}\leq2\gamma\|X\|_{\max}$, so $\mathcal L$ is bounded. Thus [F5] supplies the norm-convergent exponential series. By [F3] and [F1], this generator produces a finite channel semigroup. [given, F1, F2, F3, F4, F5, algebra]

1.2 Since $H=0$, $e^{-\beta H}=I_2$ and $Z_\beta=\operatorname{Tr}I_2=2$, so the faithful Gibbs density is $\sigma_\beta=I_2/2>0$. Direct multiplication gives $\mathcal L(E_{00})=\mathcal L(E_{11})=0$ and $\mathcal L(E_{01})=-2\gamma E_{01}$, $\mathcal L(E_{10})=-2\gamma E_{10}$. Since $\rho(0)=pE_{00}+(1-p)E_{11}+zE_{01}+\overline zE_{10}$, applying the exponential series [F5] to these four eigenmatrices yields $T_t\rho(0)=pE_{00}+(1-p)E_{11}+e^{-2\gamma t}zE_{01}+e^{-2\gamma t}\overline zE_{10}=\begin{pmatrix}p&e^{-2\gamma t}z\\e^{-2\gamma t}\overline z&1-p\end{pmatrix}$. Every diagonal density is therefore stationary, including the faithful Gibbs density $I_2/2$ and the distinct density $\operatorname{diag}(1,0)$. [given, F5, algebra]

2.1 The hypotheses of [A1] hold by steps 1.1 and 1.2, so relative entropy to $I_2/2$ is nonincreasing in this example. Yet $\operatorname{diag}(1,0)$ remains fixed and differs from $I_2/2$ for every $t\geq0$. Hence the Gibbs density is not the unique stationary density, and this initial state does not converge to it, refuting both conclusions. [given, A1, step 1.1, step 1.2] ∎

## Remarks

The vertices are the chosen eigenvectors of $Z$, and the generator leaves their population coordinates fixed. Because $H=0$, they belong to the same degenerate energy eigenspace. An arrow would represent a nonzero population-transfer rate; here no such arrow occurs, while the separate coherence mode decays exponentially.

~~~tikz
\begin{tikzpicture}
\node (zero) at (0,0) {$|0\rangle$};
\node (one) at (3,0) {$|1\rangle$};
\node at (1.5,-0.7) {$\dot p_0=\dot p_1=0$};
\node at (1.5,0.7) {$\rho_{01}(t)=e^{-2\gamma t}\rho_{01}(0)$};
\end{tikzpicture}
~~~

The drawing records the population and coherence equations proved above; no proof step relies on it.
