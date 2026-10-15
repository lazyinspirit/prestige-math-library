---
id: def-qft-compact-lattice-gauge-data
kind: definition
title: Exact compact U(1) rotor plus finite CAR data
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-qft-fock-and-test-spaces
  - lem-qft-fock-ccr-car
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - def-countable-choice
dependency_roles:
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979), §VI.C, printed pp. 694–696"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete 55-page review retrieved; §VI.C, printed pp. 694–696, read for the compact angular link, integer electric spectrum, Hamiltonian, gauge generator and Gauss constraint."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020), §§2.1–2.4"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Full-text HTML version cited; the corresponding 32-page PDF was retrieved and read at §§2.1–2.4 for Hilbert-space factors, fermionic matter, U(1) link variables, Gauss generators and invariant Hamiltonian terms. Its quantum-link model is not identified with the rotor model defined here."
---

## Definition

Assume Countable Choice. Let $\Gamma=(V,E,s,t,\mathcal P)$ be a finite oriented graph with nonempty finite vertex set $V$, nonempty finite link set $E$, endpoint maps $s,t:E\to V$, and a finite list $\mathcal P$ of oriented simple cycles. Parallel links and self-loops are allowed. An oriented simple cycle $p\in\mathcal P$ is a finite closed path using each link at most once; write $\sigma_{p,e}\in\{-1,0,1\}$ for its signed use of link $e$, so its signed incidence at every vertex is zero. Set $\mathbb T=\mathbb R/(2\pi\mathbb Z)$ with normalized measure $d\theta/(2\pi)$ and use product measure on $\mathbb T^E$.

Fix an integer $s\ge1$ and let $\mathcal K=\bigoplus_{x\in V}\mathbb C^s$ with orthonormal modes $e_{x\alpha}$, $1\le\alpha\le s$. Use the antisymmetric Fock space and second-variable-linear inner product convention of [[def-qft-fock-and-test-spaces]]. The current draft supplier [[lem-qft-fock-ccr-car]] states that, assuming Countable Choice, $\mathcal F_a(\mathcal K)$ is a Hilbert space and its creation and annihilation operators are bounded and satisfy the CAR; that supplier is still a draft carrier, not an accepted result in this run. Write $c_{x\alpha}=c(e_{x\alpha})$, $c^\dagger_{x\alpha}=c^\dagger(e_{x\alpha})$, and $n_x=\sum_{\alpha=1}^s c^\dagger_{x\alpha}c_{x\alpha}$. In the occupation basis each mode label $m_{x\alpha}\in\{0,1\}$, and $n_x$ acts by the multiplier $N_x(\mathbf m)=\sum_{\alpha=1}^s m_{x\alpha}$. Thus $n_x$ is bounded self-adjoint with spectrum contained in $\{0,\ldots,s\}$.

The kinematical Hilbert space is
$$\mathcal H_{\rm kin}=L^2(\mathbb T^E)\widehat\otimes\mathcal F_a(\mathcal K).$$
The coordinate Fourier characters $e_{\mathbf n}(\theta)=\exp(i\sum_{e\in E}n_e\theta_e)$, $\mathbf n\in\mathbb Z^E$, form an orthonormal basis of the first factor by [[thm-fourier-basis-and-parseval-on-the-n-torus]]. On this basis define the electric operator $E_e e_{\mathbf n}=n_e e_{\mathbf n}$, with its maximal diagonal domain; hence $E_e$ is self-adjoint with integer spectrum. Define the bounded unitary multiplication operator $U_e f(\theta)=e^{i\theta_e}f(\theta)$, equivalently $U_e e_{\mathbf n}=e_{\mathbf n+\delta_e}$, so $[E_e,U_f]=\delta_{ef}U_f$ on $D(E_e)$.

Fix background integers $b_x\in\{0,\ldots,s\}$. In the joint basis define the real integer multiplier
$$\gamma_x(\mathbf n,\mathbf m)=\sum_{e:s(e)=x}n_e-\sum_{e:t(e)=x}n_e-\left(\sum_{\alpha=1}^s m_{x\alpha}-b_x\right),$$
and let $G_x$ be its maximal diagonal operator, with domain $D(G_x)=\{\psi:\sum_{\mathbf n,\mathbf m}|\gamma_x(\mathbf n,\mathbf m)|^2|\psi_{\mathbf n,\mathbf m}|^2<\infty\}$. On the common link-electric domain this is the finite sum $\sum_{s(e)=x}E_e-\sum_{t(e)=x}E_e-(n_x-b_xI)$. These are the Gauss operators; the operator constraint defines $\mathcal H_{\rm phys}:=\bigcap_{x\in V}\ker G_x$. For $\alpha\in\mathbb T^V$ define the diagonal multiplier $U(\alpha)=\exp(i\sum_x\alpha_xG_x)$; the next lemma proves that these operators form a strongly continuous representation and that their normalized Haar average is the orthogonal projection onto $\mathcal H_{\rm phys}$.

For each $x$, choose a Hermitian matrix $M_x\in M_s(\mathbb C)$, and for each link $e$ choose a matrix $T_e\in M_s(\mathbb C)$. Choose real coefficients $\lambda_E>0$ and $\lambda_p\in\mathbb R$ for $p\in\mathcal P$. Write
$$W_p=\prod_{e\in E}U_e^{\sigma_{p,e}},\qquad
V_B=-\frac12\sum_{p\in\mathcal P}\lambda_p(W_p+W_p^\dagger),$$
and
$$V_F=\sum_{x\in V}\sum_{\alpha,\beta=1}^s c^\dagger_{x\alpha}(M_x)_{\alpha\beta}c_{x\beta}
+\sum_{e\in E}\left(A_e+A_e^\dagger\right),\qquad
A_e=\sum_{\alpha,\beta=1}^s c^\dagger_{s(e),\alpha}(T_e)_{\alpha\beta}U_e c_{t(e),\beta}.$$
The operator $H_0=\lambda_E\sum_{e\in E}E_e^2$ is the diagonal multiplier with domain
$$D(H_0)=\left\{\psi:\sum_{\mathbf n,\mathbf m}
\left(\lambda_E\sum_{e\in E}n_e^2\right)^2|\psi_{\mathbf n,\mathbf m}|^2<\infty\right\},$$
where $\mathbf m=(m_{x\alpha})$ ranges over occupation configurations with each $m_{x\alpha}\in\{0,1\}$, and $N_x(\mathbf m)=\sum_{\alpha=1}^s m_{x\alpha}$ is the eigenvalue of $n_x$ on that basis vector. The coefficients $\lambda_E,\lambda_p$ and entries of $M_x,T_e$ are ordinary real or complex scalars here; no physical units are assigned. Set $H=H_0+V_B+V_F$ on $D(H_0)$. This is a mathematical finite-graph regulator definition. It asserts no physical adoption, continuum limit, Lorentz invariance, or identification with a particular continuum QED model.

For sign comparison only, if a smooth path $\gamma_e:[0,1]\to X$ in a smooth manifold $X$, a real $C^1$ connection one-form $a$, and a real $C^1$ function $\lambda$ are supplied, take $U_e^{\rm cont}=\exp(-ig\int_0^1a_{\gamma_e(r)}(\dot\gamma_e(r))\,dr)$ for real $g$. Under $a\mapsto a+d\lambda$, the endpoint factor is $e^{ig(\lambda(s(e))-\lambda(t(e)))}$, matching the discrete transformation proved in [[lem-qft-lattice-gauss-projection]] when $\alpha_x=g\lambda(x)$. This comparison supplies no embedding of the finite graph into $X$ and asserts no continuum limit.

## Remarks

The statements involving $\mathcal F_a(\mathcal K)$ and its CAR operators are conditional on the inspected but still-draft supplier [[lem-qft-fock-ccr-car]]. Its current statement assumes Countable Choice, a separable complex Hilbert space, and the second-variable-linear convention; its displayed proof is complete as a draft argument, but the QFT-MF01 page carrier and its readiness record are not yet present in batch 37 of the current run. All consumers below keep that dependency and do not treat its draft status as acceptance.

