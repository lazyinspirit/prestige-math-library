---
id: thm-qsm-dt-spectral-fdt
kind: theorem
title: Finite spectral balance and distributional fluctuation response
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 4
deps:
  - lem-qsm-matrix-state-calculus
  - lem-qsm-dt-lorentzian-distribution-limits
  - thm-qsm-dt-finite-kubo
  - thm-qsm-dt-finite-unitary
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-dt-lorentzian-distribution-limits: mathematical-premise
  thm-qsm-dt-finite-kubo: mathematical-premise
  thm-qsm-dt-finite-unitary: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §§1.3–1.5"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2, printed pp. 573–575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
    - title: "Mehran Kardar, Statistical Mechanics I, Lecture 21: Quantum Microstates and Quantum Macrostates"
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Statement

Let $\mathcal H$ be finite-dimensional, $H=H^*$ with unit J, $\hbar>0$ with unit J s, $\beta>0$ with unit J$^{-1}$, and $\sigma=Z_\beta^{-1}e^{-\beta H}$ as in [[thm-qsm-dt-finite-unitary]]. Let $A=A^*$ be a matrix observable, write $Hu_i=E_i u_i$ in an orthonormal eigenbasis, $r_i=e^{-\beta E_i}/Z_\beta$, $A_{ij}=\langle Au_j,u_i\rangle$, and $\omega_{ji}=(E_j-E_i)/\hbar$. Define the finite positive spectral measure
$$S_{AA}=2\pi\sum_{i,j}r_i|A_{ij}|^2\,\delta_{\omega_{ji}},$$
where $\delta_\nu$ is unit point mass at frequency $\nu$ and $S_{AA}(-\cdot)$ denotes pushforward under $\omega\mapsto-\omega$; $\omega_{ji}$ has unit s$^{-1}$. With observable unit $[A]$, the atomic masses of the finite measure $S_{AA}$ have units $[A]^2$. For every smooth compactly supported complex-valued function $\varphi:\mathbb R\to\mathbb C$, the distribution represented by the measure $S_{AA}$ acts as $\langle S_{AA},\varphi\rangle=\int_{\mathbb R}\varphi(\omega)\,dS_{AA}(\omega)$. In the Fourier convention below, the generalized density $S_{AA}(\omega)$ relative to $d\omega$ has units $[A]^2$ multiplied by seconds; it is a finite sum of Dirac distributions, not an ordinary function density. For time $t\in\mathbb R$ measured in s, the equilibrium correlation is $C_{AA}(t)=\operatorname{Tr}(\sigma\alpha_t(A)A)$; its Fourier variable $\omega$ is measured in s$^{-1}$, and its Fourier convention is $S_{AA}(\omega)=\int_{\mathbb R}e^{i\omega t}C_{AA}(t)\,dt$ in the distributional sense.

For $t\ge0$, set $R_{AA}(t)=\frac{i}{\hbar}\operatorname{Tr}(\sigma[\alpha_t(A),A])$. For $\omega\in\mathbb R$ and regulator $\eta>0$, both measured in s$^{-1}$, define the retarded transform $\chi_\eta(\omega)=\int_0^\infty e^{(i\omega-\eta)t}R_{AA}(t)\,dt$. With observable unit $[A]$, $R_{AA}$ has units $[A]^2/(\mathrm J\,\mathrm s)$ and $\chi_\eta$ has units $[A]^2/\mathrm J$. Then
$$\chi_\eta(\omega)=\sum_{i,j}\frac{(r_i-r_j)|A_{ij}|^2}{\hbar(\omega_{ji}-\omega-i\eta)}.$$
As $\eta\downarrow0$, its boundary value is the corresponding sum of principal-value real parts and Lorentzian imaginary terms weighted by $r_i-r_j$, and distributionally
$$\operatorname{Im}\chi=\frac{1}{2\hbar}(1-e^{-\beta\hbar\omega})S_{AA}(\omega).$$
Detailed balance is $S_{AA}(-d\omega)=e^{-\beta\hbar\omega}S_{AA}(d\omega)$. Thus, on $\mathbb R\setminus\{0\}$,
$$S_{\mathrm{sym}}(d\omega)=\hbar\coth\!\left(\frac{\beta\hbar\omega}{2}\right)\operatorname{Im}\chi(d\omega),\qquad S_{\mathrm{sym}}=\tfrac12(S_{AA}+S_{AA}(-\cdot)).$$
Any zero-frequency mass of $S_{AA}$ is retained separately: the commutator factor vanishes there, so the formula does not determine that atom or define a value for the singular product with $\coth$ at $\omega=0$.

## Facts & Assumptions

**Given:** The finite-dimensional Hamiltonian, Gibbs matrix, bounded self-adjoint observable, Fourier convention, and positive regulator $\eta$ above.

[F1] [[thm-qsm-dt-finite-unitary]]: the finite Hermitian spectral decomposition gives $U(t)$ and the stationary Gibbs matrix $\sigma$.

[F2] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices admit basis-independent real spectral decompositions and the finite trace is cyclic.

[F3] [[thm-qsm-dt-finite-kubo]]: under the fixed Gibbs preparation and control $H-\epsilon h(t)B$, the retarded commutator kernel has the sign $+i/\hbar$ and is the finite-time first variation.

[F4] [[lem-qsm-dt-lorentzian-distribution-limits]]: $\eta/(x^2+\eta^2)$ converges to $\pi\delta_0$ and $x/(x^2+\eta^2)$ to $\operatorname{PV}(1/x)$ on compactly supported $C^1$ test functions, with full dominated-convergence proofs.

## Proof

**Proof technique:** finite spectral expansion, exact retarded transform, and the Lorentzian distribution limits.

**Given:** [F1]–[F4], finite $d\ge1$, $\beta>0$, and $A=A^*$.

1.1 In the eigenbasis of $H$, $\alpha_t(A)_{ij}=e^{-i\omega_{ji}t}A_{ij}$, so $C_{AA}(t)=\sum_{i,j}r_i|A_{ij}|^2e^{-i\omega_{ji}t}$ and the displayed $S_{AA}$ is its Fourier measure under the stated convention. Swapping $i,j$ in the finite sum changes $S_{AA}(-d\omega)$ to coefficients $r_j|A_{ij}|^2$ at $\omega_{ji}$; since $r_j/r_i=e^{-\beta\hbar\omega_{ji}}$, this proves detailed balance. The coefficients of $S_{AA}$ are nonnegative. [given, F1, F2, construct, algebra]

2.1 Expanding the commutator and swapping indices in its second trace term gives $R_{AA}(t)=\frac{i}{\hbar}\sum_{i,j}(r_i-r_j)|A_{ij}|^2e^{-i\omega_{ji}t}$. For $\eta>0$, each term is integrable on $[0,\infty)$ and $\int_0^\infty e^{(i(\omega-\omega_{ji})-\eta)t}dt=-i/(\omega_{ji}-\omega-i\eta)$; multiplying by $i/\hbar$ yields the stated rational expression. [F1, F2, F3, step 1.1, algebra]

3.1 For each summand, write $x=\omega_{ji}-\omega$ and $1/(x-i\eta)=x/(x^2+\eta^2)+i\eta/(x^2+\eta^2)$. Applying [F4] after the affine change from $\omega$ to $x$ gives the principal-value real part and $\pi\delta(\omega-\omega_{ji})$ imaginary part. On each atom $\omega=\omega_{ji}$, detailed balance gives $r_i-r_j=r_i(1-e^{-\beta\hbar\omega})$, so summing the finite terms proves the distributional commutator relation. [F1, F4, step 2.1, algebra]

4.1 Detailed balance gives $S_{\mathrm{sym}}=\tfrac12(1+e^{-\beta\hbar\omega})S_{AA}$ away from zero, while step 3.1 gives $\operatorname{Im}\chi=\tfrac{1}{2\hbar}(1-e^{-\beta\hbar\omega})S_{AA}$. Dividing on $\mathbb R\setminus\{0\}$ yields the stated $\hbar\coth(\beta\hbar\omega/2)$ factor. At $\omega=0$, the detailed-balance pair has equal Gibbs weights and the commutator coefficient is zero, whereas the positive correlation measure may have a nonzero atom; therefore that atom must be retained separately. [F1, step 1.1, step 3.1, algebra] ∎
