---
id: lem-qsm-dt-trace-gibbs-correlation-series
kind: lemma
title: Absolute convergence of trace-Gibbs bounded correlation series
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-axiom-of-choice
  - thm-qsm-trace-gibbs-variational
  - lem-qsm-trace-state-calculus
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
  - thm-hilbert-adjoint-properties
  - def-operator-norm
  - thm-cauchy-schwarz-in-an-inner-product-space
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-qsm-trace-gibbs-variational: mathematical-premise
  lem-qsm-trace-state-calculus: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
  def-operator-norm: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2, printed pp. 573–575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §1.3"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
---

## Statement

Assume the Axiom of Choice. Let $\mathcal H\ne\{0\}$ be separable, $K=K^*$ a densely defined Hamiltonian bounded below with energy unit J, and $\beta$ lie in an open interval $I\subset(0,\infty)$ measured in J$^{-1}$ on which $e^{-sK}$ is trace class for every $s\in I$. Set $Z_\beta=\operatorname{Tr}(e^{-\beta K})$, $\sigma_\beta=Z_\beta^{-1}e^{-\beta K}$, and $U(t)=e^{-itK/\hbar}$ with $\hbar>0$ in J s and $t$ in s. By [[thm-qsm-trace-gibbs-variational]], $K$ has a complete orthonormal energy basis $(u_i)$, $Ku_i=E_i u_i$, with Gibbs weights $r_i=e^{-\beta E_i}/Z_\beta>0$ and $\sum_i r_i=1$. For bounded $A,B$, put $A_{ij}=\langle Au_j,u_i\rangle$, $B_{ij}=\langle Bu_j,u_i\rangle$, and $\omega_{ji}=(E_j-E_i)/\hbar$. Then
$$C_{AB}(t):=\operatorname{Tr}(\sigma_\beta U(t)^*AU(t)B)=\sum_{i,j}r_iA_{ij}B_{ji}e^{-i\omega_{ji}t}$$
converges absolutely and uniformly on $\mathbb R$, with $\sum_{i,j}r_i|A_{ij}||B_{ji}|\le\|A\|\|B\|$. Consequently
$$S_{AB}:=2\pi\sum_{i,j}r_iA_{ij}B_{ji}\,\delta_{\omega_{ji}}$$
is a finite complex Borel measure with total variation at most $2\pi\|A\|\|B\|$, and $C_{AB}(t)=(2\pi)^{-1}\int e^{-i\omega t}\,dS_{AB}(\omega)$. A Dirac measure $\delta_\nu$ assigns mass one to the point $\nu$. When $A,B$ carry units $[A],[B]$, the atomic masses of the finite measure $S_{AB}$ have units $[A][B]$. For every smooth compactly supported complex-valued function $\varphi:\mathbb R\to\mathbb C$, the distribution represented by $S_{AB}$ acts as $\langle S_{AB},\varphi\rangle=\int_{\mathbb R}\varphi(\omega)\,dS_{AB}(\omega)$. In the Fourier convention, the generalized density $S_{AB}(\omega)$ relative to $d\omega$ has units $[A][B]$ multiplied by seconds; it is a sum of Dirac distributions, not an ordinary function density.

## Facts & Assumptions

**Given:** The Axiom of Choice; the trace-class Gibbs hypotheses in the Statement; bounded operators $A,B$; and the specified $\hbar$ and $\beta$.

[A1] [[def-axiom-of-choice]]: assume the full Axiom of Choice for the unbounded self-adjoint spectral theorem.

[F1] [[thm-qsm-trace-gibbs-variational]]: under [A1], self-adjoint $K$ bounded below with $e^{-sK}$ trace class on an open positive interval has $0<Z_\beta<\infty$, a faithful normal Gibbs density, and a complete energy eigenbasis with eigenvalues $e^{-\beta E_i}/Z_\beta$.

[F2] [[lem-qsm-trace-state-calculus]]: for a trace-class density $\sigma$ and bounded $X$, $\operatorname{Tr}(\sigma X)=\sum_i r_i\langle Xu_i,u_i\rangle$ with absolute convergence; bounded cyclicity holds only for the trace-class factor and bounded factor.

[F3] [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]: for a complete orthonormal basis $(u_j)$, $\sum_j|\langle v,u_j\rangle|^2=\|v\|^2$.

[F4] [[thm-hilbert-adjoint-properties]] and [[def-operator-norm]]: $\|A^*\|=\|A\|$ and $\|Ax\|\le\|A\|\|x\|$ for bounded operators.

[F5] [[thm-cauchy-schwarz-in-an-inner-product-space]]: for square-summable coefficient sequences, the absolute inner-product sum is bounded by the product of their $\ell^2$ norms.

## Proof

**Proof technique:** direct spectral expansion with an absolute-summability estimate.

**Given:** [A1], [F1]–[F3], and the bounded matrices of the Statement.

1.1 The eigenbasis and weights in the Statement are provided by [F1], and $\sum_i r_i=1$ follows from $\operatorname{Tr}\sigma_\beta=1$. For each fixed $i$, Parseval [F3] and [F4] give $\sum_j|A_{ij}|^2=\|A^*u_i\|^2\le\|A\|^2$ and $\sum_j|B_{ji}|^2=\|Bu_i\|^2\le\|B\|^2$. By [F5] and summing the nonnegative bounds over $i$, $\sum_{i,j}r_i|A_{ij}||B_{ji}|\le\|A\|\|B\|$. [given, A1, F1, F3, F4, F5, algebra]

2.1 Apply [F2] to $X=U(t)^*AU(t)B$. Expanding the diagonal matrix element in the energy basis gives $\langle U(t)^*AU(t)B u_i,u_i\rangle=\sum_j e^{-i(E_j-E_i)t/\hbar}A_{ij}B_{ji}$. The absolute bound from step 1.1 justifies the double sum and is independent of $t$; hence the series converges uniformly by the uniform tail bound and equals the stated trace correlation. [given, F1, F2, step 1.1, algebra]

3.1 For each Borel set $E\subseteq\mathbb R$, define $S_{AB}(E)=2\pi\sum_{i,j:\,\omega_{ji}\in E}r_iA_{ij}B_{ji}$. Absolute convergence from step 1.1 makes this finite and makes the sum countably additive: for disjoint $E_n$, each atom belongs to exactly one $E_n$, and the absolutely convergent series may be regrouped. The same bound gives total variation at most $2\pi\|A\|\|B\|$. Integrating the bounded function $e^{-i\omega t}$ termwise, justified by that absolute sum, gives the stated Fourier relation. [given, step 1.1, step 2.1, algebra] ∎
