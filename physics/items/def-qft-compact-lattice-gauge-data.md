---
id: def-qft-compact-lattice-gauge-data
kind: definition
title: Exact compact U(1) rotor plus finite CAR data
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - lem-qft-finite-mode-occupation-basis
  - lem-nrqm-composites-hilbert-tensor-construction
  - def-qft-fock-and-test-spaces
  - lem-qft-fock-ccr-car
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - def-countable-choice
dependency_roles:
  lem-qft-finite-mode-occupation-basis: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
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

Assume Countable Choice. Let $\Gamma=(V,E,s,t,\mathcal P)$ be a finite oriented graph with nonempty finite vertex set $V$, nonempty finite link set $E$, endpoint maps $s,t:E\to V$, and a finite list $\mathcal P$ of oriented simple cycles. Parallel links and self-loops are allowed. An oriented simple cycle $p\in\mathcal P$ is a finite closed path using each link at most once; write $\sigma_{p,e}\in\{-1,0,1\}$ for its signed use of link $e$, so its signed incidence at every vertex is zero. Fix enumerations $E=(\ell_1,\ldots,\ell_N)$ and $V=(v_1,\ldots,v_M)$, where $N=|E|$ and $M=|V|$. Write $\mathbb T_1=\mathbb R/\mathbb Z$ and $\mathbb T_{2\pi}=\mathbb R/(2\pi\mathbb Z)$, and set $\mathbb T=\mathbb T_{2\pi}$ with normalized Haar measure $d\theta/(2\pi)$ and product measure $m_E$ on $\mathbb T^E$.

The coordinatewise map
$$\Phi_E:\mathbb T_{2\pi}^E\to\mathbb T_1^E,\qquad ([\theta_e])_{e\in E}\mapsto([\theta_e/(2\pi)])_{e\in E},$$
is a well-defined measure-preserving group isomorphism for the normalized product Haar measures. The fixed enumeration of $E$ identifies $\mathbb T_1^E$ with $\mathbb T_1^N$; pulling back the Fourier characters $x\mapsto\exp(2\pi i\sum_{e\in E}n_ex_e)$ along $\Phi_E$ gives $e_{\mathbf n}(\theta)=\exp(i\sum_{e\in E}n_e\theta_e)$. Thus the Fourier basis theorem [[thm-fourier-basis-and-parseval-on-the-n-torus]], whose torus is $\mathbb R/\mathbb Z$ and whose characters are $\exp(2\pi i kx)$, gives an orthonormal basis $\{e_{\mathbf n}:\mathbf n\in\mathbb Z^E\}$ of $L^2(\mathbb T^E)$. The second-variable-linear $L^2$ pairing used below is the conjugate of the first-variable-linear pairing in that theorem, so orthonormality and completeness are unchanged.

Fix an integer $s\ge1$ and let $\mathcal K=\bigoplus_{x\in V}\mathbb C^s$ with orthonormal modes $e_{x\alpha}$, $1\le\alpha\le s$. This is finite-dimensional and hence separable. Fix the lexicographic order on $J=V\times\{1,\ldots,s\}$ induced by the chosen order on $V$ and the usual order on $\{1,\ldots,s\}$. Use the antisymmetric Fock space and second-variable-linear inner product convention of [[def-qft-fock-and-test-spaces]]. The current draft supplier [[lem-qft-fock-ccr-car]] states that, assuming Countable Choice, $\mathcal F_a(\mathcal K)$ is a Hilbert space and its creation and annihilation operators are bounded and satisfy the CAR; that supplier is still a draft carrier, not an accepted result in this run. For $\mathbf m=(m_{x\alpha})\in\{0,1\}^J$, put $S(\mathbf m)=\{(x,\alpha):m_{x\alpha}=1\}$ and write $\xi_{\mathbf m}=\xi_{S(\mathbf m)}$ for the ordered wedge basis vector of [[lem-qft-finite-mode-occupation-basis]]. This is a complete orthonormal basis of $\mathcal F_a(\mathcal K)$; changing the chosen order changes individual wedge vectors only by signs. Write $c_{x\alpha}=c(e_{x\alpha})$, $c^\dagger_{x\alpha}=c^\dagger(e_{x\alpha})$, and $n_x=\sum_{\alpha=1}^s c^\dagger_{x\alpha}c_{x\alpha}$. On $\xi_{\mathbf m}$, $n_x$ acts by $N_x(\mathbf m)=\sum_{\alpha=1}^s m_{x\alpha}$; it is bounded self-adjoint with spectrum contained in $\{0,\ldots,s\}$.

Use the second-variable-linear $L^2$ pairing $\langle f,g\rangle_2=\int_{\mathbb T^E}\overline{f(\theta)}g(\theta)\,dm_E(\theta)$. The kinematical Hilbert space is
$$\mathcal H_{\rm kin}=L^2(\mathbb T^E)\widehat\otimes\mathcal F_a(\mathcal K),$$
where $\widehat\otimes$ has the same completion norm as [[lem-nrqm-composites-hilbert-tensor-construction]] and the second-variable-linear pairing obtained by conjugating its first-variable-linear tensor pairing, as in [[def-qft-fock-and-test-spaces]]. Concretely, the tensor supplier is applied to the conjugate first-variable-linear pairings $(f,g)_1=\langle g,f\rangle_2$ and $(\Phi,\Psi)_1=\langle\Psi,\Phi\rangle_2$, and the resulting tensor pairing is conjugated; this preserves the norm and the product-basis assertion. Consequently
$$\{e_{\mathbf n}\otimes\xi_{\mathbf m}:\mathbf n\in\mathbb Z^E,\ \mathbf m\in\{0,1\}^J\}$$
is a complete orthonormal basis of $\mathcal H_{\rm kin}$ by the product-basis assertion of [[lem-nrqm-composites-hilbert-tensor-construction]]. This is the joint basis used for all diagonal multipliers below. Write
$\psi=\sum_{\mathbf n,\mathbf m}\psi_{\mathbf n,\mathbf m}e_{\mathbf n}\otimes\xi_{\mathbf m}$.
All matter operators previously defined on $\mathcal F_a(\mathcal K)$ act on
$\mathcal H_{\rm kin}$ as identity on the rotor factor tensor that operator.
On the full kinematical basis define
$$E_e(e_{\mathbf n}\otimes\xi_{\mathbf m})=n_e(e_{\mathbf n}\otimes\xi_{\mathbf m}),\qquad D(E_e)=\left\{\psi\in\mathcal H_{\rm kin}:\sum_{\mathbf n,\mathbf m}n_e^2|\psi_{\mathbf n,\mathbf m}|^2<\infty\right\}.$$
Thus $E_e$ is the maximal real diagonal multiplier, self-adjoint with integer
spectrum, and on its domain its coefficients are $n_e\psi_{\mathbf n,\mathbf m}$.
Define the bounded unitary $U_e$ as multiplication by $e^{i\theta_e}$ on the
rotor factor and identity on the matter factor. Equivalently,
$$U_e(e_{\mathbf n}\otimes\xi_{\mathbf m})=e_{\mathbf n+\delta_e}\otimes\xi_{\mathbf m},\qquad (U_e\psi)_{\mathbf n,\mathbf m}=\psi_{\mathbf n-\delta_e,\mathbf m}.$$
Each $U_f$ preserves $D(E_e)$, since
$(n_e+\delta_{ef})^2\le2n_e^2+2$ and the coefficient sequence is square
summable; its inverse preserves that domain by the same estimate. Computing
on coefficients gives $[E_e,U_f]=\delta_{ef}U_f$ on $D(E_e)$.


Fix background integers $b_x\in\{0,\ldots,s\}$. In the joint basis define the real integer multiplier
$$\gamma_x(\mathbf n,\mathbf m)=\sum_{e:s(e)=x}n_e-\sum_{e:t(e)=x}n_e-\left(\sum_{\alpha=1}^s m_{x\alpha}-b_x\right),$$
and let $G_x$ be its maximal diagonal operator, with domain $D(G_x)=\{\psi:\sum_{\mathbf n,\mathbf m}|\gamma_x(\mathbf n,\mathbf m)|^2|\psi_{\mathbf n,\mathbf m}|^2<\infty\}$. On the common link-electric domain this is the finite sum $\sum_{s(e)=x}E_e-\sum_{t(e)=x}E_e-(n_x-b_xI)$. These are the Gauss operators; the operator constraint defines $\mathcal H_{\rm phys}:=\bigcap_{x\in V}\ker G_x$. For $\alpha\in\mathbb T^V$ define the diagonal multiplier $U(\alpha)=\exp(i\sum_x\alpha_xG_x)$; the next lemma proves that these operators form a strongly continuous representation and that their normalized Haar average is the orthogonal projection onto $\mathcal H_{\rm phys}$.

For each $x$, choose a Hermitian matrix $M_x\in M_s(\mathbb C)$, and for each link $e$ choose a matrix $T_e\in M_s(\mathbb C)$. Choose real coefficients $\lambda_E>0$ and $\lambda_p\in\mathbb R$ for $p\in\mathcal P$. Write
$$W_p=\prod_{e\in E}U_e^{\sigma_{p,e}},\qquad V_B=-\frac12\sum_{p\in\mathcal P}\lambda_p(W_p+W_p^\dagger),$$
and
$$V_F=\sum_{x\in V}\sum_{\alpha,\beta=1}^s c^\dagger_{x\alpha}(M_x)_{\alpha\beta}c_{x\beta}+\sum_{e\in E}\left(A_e+A_e^\dagger\right),\qquad A_e=\sum_{\alpha,\beta=1}^s c^\dagger_{s(e),\alpha}(T_e)_{\alpha\beta}U_e c_{t(e),\beta}.$$
The operator $H_0=\lambda_E\sum_{e\in E}E_e^2$ is the diagonal multiplier with domain
$$D(H_0)=\left\{\psi:\sum_{\mathbf n,\mathbf m}\left(\lambda_E\sum_{e\in E}n_e^2\right)^2|\psi_{\mathbf n,\mathbf m}|^2<\infty\right\},$$
where $\mathbf m=(m_{x\alpha})$ ranges over occupation configurations with each $m_{x\alpha}\in\{0,1\}$, and $N_x(\mathbf m)=\sum_{\alpha=1}^s m_{x\alpha}$ is the eigenvalue of $n_x$ on that basis vector. The coefficients $\lambda_E,\lambda_p$ and entries of $M_x,T_e$ are ordinary real or complex scalars here; no physical units are assigned. Set $H=H_0+V_B+V_F$ on $D(H_0)$. This is a mathematical finite-graph regulator definition. It asserts no physical adoption, continuum limit, Lorentz invariance, or identification with a particular continuum QED model.

For sign comparison only, if a smooth path $\gamma_e:[0,1]\to X$ in a smooth manifold $X$, a real $C^1$ connection one-form $a$, and a real $C^1$ function $\lambda$ are supplied, take $U_e^{\rm cont}=\exp(-ig\int_0^1a_{\gamma_e(r)}(\dot\gamma_e(r))\,dr)$ for real $g$. Under $a\mapsto a+d\lambda$, the fundamental theorem along the supplied path gives the endpoint factor
$e^{ig(\lambda(\gamma_e(0))-\lambda(\gamma_e(1)))}$.
This is an edgewise sign comparison: it has the same source-minus-target
angle pattern as the finite vertex-phase convention. Neither $s(e)$ nor
$t(e)$ is evaluated by $\lambda$; they are vertices in $V$, whereas
$\gamma_e(0),\gamma_e(1)$ are points of $X$. No map $V\to X$ or compatible
paths for the whole graph are supplied, and no continuum limit is asserted.

## Facts & Assumptions

**Given:** The joint Fourier/occupation basis and the coefficient formula for $E_e$ in the Definition.

[F1] The Fourier characters form an orthonormal basis by [[thm-fourier-basis-and-parseval-on-the-n-torus]], the finite occupation vectors form an orthonormal basis by [[lem-qft-finite-mode-occupation-basis]], and their tensor products form an orthonormal basis of $\mathcal H_{\rm kin}$ by [[lem-nrqm-composites-hilbert-tensor-construction]]. In these coordinates the second-variable-linear pairing is $\langle\psi,\phi\rangle_2=\sum_{\mathbf n,\mathbf m} \overline{\psi_{\mathbf n,\mathbf m}}\phi_{\mathbf n,\mathbf m}$.

## Proof

**Given:** [F1] and the displayed maximal domain and action of $E_e$.

1.1 The finite-support span of the joint basis lies in $D(E_e)$ and is dense, so $E_e$ is densely defined. For a densely defined operator with this pairing, $\phi\in D(E_e^*)$ exactly when some $\eta\in\mathcal H_{\rm kin}$ satisfies ${\langle E_e\psi,\phi\rangle_2=\langle\psi,\eta\rangle_2}$ for every $\psi\in D(E_e)$, in which case $E_e^*\phi=\eta$. Testing this identity on $e_{\mathbf n}\otimes\xi_{\mathbf m}$ gives $\eta_{\mathbf n,\mathbf m}=n_e\phi_{\mathbf n,\mathbf m}$, so $\sum_{\mathbf n,\mathbf m}n_e^2|\phi_{\mathbf n,\mathbf m}|^2 =\|\eta\|^2<\infty$ and $\phi\in D(E_e)$. Conversely, for $\phi\in D(E_e)$ the coordinate sums and Cauchy--Schwarz give $\langle E_e\psi,\phi\rangle_2=\langle\psi,E_e\phi\rangle_2$ for every $\psi\in D(E_e)$. Thus $D(E_e^*)=D(E_e)$ and $E_e^*=E_e$. [given, F1, algebra]

2.1 Every integer $k$ is an eigenvalue of $E_e$, by taking a joint basis vector with $n_e=k$. If $z\in\mathbb C\setminus\mathbb Z$, set $d=\operatorname{dist}(z,\mathbb Z)>0$ and define $R_z$ on basis coefficients by multiplication by $(n_e-z)^{-1}$. Then $R_z$ is bounded with norm at most $d^{-1}$, and $|n_e/(n_e-z)|\le 1+|z|/d$ shows that $R_z\mathcal H_{\rm kin}\subseteq D(E_e)$. Hence $R_z$ is an everywhere-defined bounded inverse of $E_e-zI:D(E_e)\to\mathcal H_{\rm kin}$. By the definition of spectrum as the complement of those $z$ with such an inverse, $\sigma(E_e)=\mathbb Z$. [F1, step 1.1, algebra] ∎

## Remarks

The statements involving $\mathcal F_a(\mathcal K)$ and its CAR operators are conditional on [[lem-qft-fock-ccr-car]] as it appears on the current batch-37 QFT-MF01 manifest. I inspected its actual statement and full draft proof: it assumes Countable Choice, a complex Hilbert space and the second-variable-linear convention, and states bounded CAR operators on the whole Fock space. The actual interface matches this finite-dimensional $\mathcal K$ and the uses above. Its item and the Fock definition remain drafts without a current Step-1 readiness record in this run; the arguments here remain conditional and do not treat draft status as proof acceptance. The finite occupation basis is established locally by [[lem-qft-finite-mode-occupation-basis]].

