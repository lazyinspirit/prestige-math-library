---
id: lem-qft-lattice-gauss-projection
kind: lemma
title: Gauss operators, gauge group and nonempty physical projection
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-qft-compact-lattice-gauge-data
dependency_roles:
  def-qft-compact-lattice-gauge-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979), §VI.C, printed pp. 694–696"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete 55-page review retrieved; §VI.C read for compact angular links, integer electric flux, site gauge generators and the Gauss constraint."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020), §§2.1–2.4"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Full-text HTML version cited; the corresponding 32-page PDF was retrieved and read at §§2.1–2.4 for Gauss-law generators, gauge-invariant sectors, fermionic matter and invariant Hamiltonians."
---

## Statement

Assume the conditional compact-rotor/CAR data of [[def-qft-compact-lattice-gauge-data]]. In the joint Fourier/occupation basis write
$$\gamma_x(\mathbf n,\mathbf m)=\sum_{e:s(e)=x}n_e-\sum_{e:t(e)=x}n_e-\sum_{\alpha=1}^s m_{x\alpha}+b_x\in\mathbb Z.$$
For every vertex $x$, let $G_x$ be multiplication by $\gamma_x$ on its maximal diagonal domain
$$D(G_x)=\left\{\psi:\sum_{\mathbf n,\mathbf m}|\gamma_x(\mathbf n,\mathbf m)|^2|\psi_{\mathbf n,\mathbf m}|^2<\infty\right\}.$$
Then each $G_x$ is self-adjoint, the $G_x$ strongly commute, and $U(\alpha)=\exp(i\sum_x\alpha_xG_x)$ is a strongly continuous unitary representation of $\mathbb T^V$. Its action obeys
$$U(\alpha)c_{x\beta}U(\alpha)^\dagger=e^{i\alpha_x}c_{x\beta},\qquad
U(\alpha)U_eU(\alpha)^\dagger=e^{i(\alpha_{s(e)}-\alpha_{t(e)})}U_e.$$
The normalized Haar average
$$P=\frac1{(2\pi)^{|V|}}\int_{[0,2\pi]^{|V|}}U(\alpha)\,d\alpha$$
is the orthogonal projection onto $\mathcal H_{\rm phys}=\bigcap_x\ker G_x$. This subspace is nonzero for every admissible fixed background $b$: it contains the normalized state with link Fourier labels $n_e=0$ and site occupations $m_{x\alpha}$ chosen so $\sum_\alpha m_{x\alpha}=b_x$.

## Facts & Assumptions

**Given:** The conditional model data of [[def-qft-compact-lattice-gauge-data]], Countable Choice, and the joint Fourier/occupation basis.

[F1] [[def-qft-compact-lattice-gauge-data]]: the Fourier characters $e_{\mathbf n}$ form a basis of $L^2(\mathbb T^E)$, the finite CAR occupation vectors form an orthonormal basis, and $G_x$ acts diagonally by $\gamma_x(\mathbf n,\mathbf m)$. The definition records that its CAR input is the inspected Countable Choice-dependent draft supplier and that the batch-37 QFT-MF01 page carrier and run readiness are absent. The conclusion here is therefore conditional on that actual inspected draft input.

## Proof

**Given:** The data and conventions in [F1].

1.1 The finite-support linear combinations of the joint basis vectors are dense in $\mathcal H_{\rm kin}$. On each joint basis vector, $G_x$ multiplies by the real number $\gamma_x(\mathbf n,\mathbf m)$. The maximal diagonal operator is self-adjoint: if $\phi\in D(G_x^*)$ and $G_x^*\phi=\eta$, testing the adjoint identity against each basis vector gives $\eta_{\mathbf n,\mathbf m}=\gamma_x(\mathbf n,\mathbf m)\phi_{\mathbf n,\mathbf m}$. Since $\eta\in\mathcal H_{\rm kin}$, the defining weighted square sum for $D(G_x)$ is finite, so $D(G_x^*)\subseteq D(G_x)$; conversely Cauchy–Schwarz gives the adjoint identity for every $\phi\in D(G_x)$. [F1, given, algebra]

1.2 Every $G_x$ is diagonal in the same basis. Thus the spectral projections of any two $G_x$ are diagonal coordinate projections and commute, which proves strong commutation. On a basis vector, $U(\alpha)$ multiplies by $e^{i\sum_x\alpha_x\gamma_x}$; integer $\gamma_x$ makes it $2\pi$-periodic in each coordinate, and the diagonal phases give $U(\alpha+\beta)=U(\alpha)U(\beta)$ and $U(0)=I$. [F1, step 1.1, algebra]

2.1 For finite linear combinations of basis vectors, $\alpha\mapsto U(\alpha)\psi$ is a finite sum of continuous characters. Such vectors are dense and all $U(\alpha)$ have norm one, so for arbitrary $\psi$ approximation by a finite combination proves norm continuity of $\alpha\mapsto U(\alpha)\psi$. This is strong continuity. [F1, step 1.2, algebra]

2.2 From $[E_e,U_f]=\delta_{ef}U_f$ and $[n_y,c_{x\beta}]=-\delta_{xy}c_{x\beta}$ on the finite occupation core, one has $[G_x,U_e]=(\mathbf1_{x=s(e)}-\mathbf1_{x=t(e)})U_e$ and $[G_x,c_{y\beta}]=\delta_{xy}c_{y\beta}$. Exponentiating these exact shifts on the joint basis yields the two displayed gauge-transformation laws. [F1, step 1.2, algebra]

3.1 For every $\psi\in\mathcal H_{\rm kin}$, strong continuity from step 2.1 makes $\alpha\mapsto U(\alpha)\psi$ continuous on the compact torus. Its Hilbert-valued Riemann sums converge in norm: uniform continuity makes sums over partitions of mesh tending to zero a Cauchy family, and completeness supplies their limit. The normalized integral therefore exists, and its operator norm is at most one because each summand is an average of unitary images. For a basis vector with charge labels $\gamma=(\gamma_x)$, that integral is the vector itself if $\gamma=0$ and zero otherwise, since $(2\pi)^{-1}\int_0^{2\pi}e^{ik\alpha}\,d\alpha=\mathbf1_{k=0}$ for each integer $k$. By density of finite-support vectors and the norm bound, $P$ is the diagonal multiplier $\mathbf1_{\gamma=0}$ on all of $\mathcal H_{\rm kin}$; hence $P=P^*=P^2$ and its range is exactly the joint kernel of the $G_x$. [F1, step 1.2, step 2.1, algebra]

3.2 For each $x$, choose any $b_x$ of the $s$ fermion modes at that site to occupy. The occupation vector so obtained is normalized and has $n_x=b_x$; tensoring it with the zero-link Fourier basis vector gives every $\gamma_x=0$. Thus it is a nonzero vector in $\operatorname{ran}P=\mathcal H_{\rm phys}$. [F1, step 3.1, construct] ∎

