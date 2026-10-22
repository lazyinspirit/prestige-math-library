---
id: pthm-nrqmx-jaynes-cummings-blocks
kind: physics-theorem
title: Jaynes–Cummings invariant blocks and Rabi frequency
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - post-nrqmx-finite-mode-light-matter-model
  - def-nrqm-framework-quantities-and-units
  - thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains
  - thm-nrqm-fock-and-equilibrium-fixed-mode-number-law
  - lem-nrqm-composites-hilbert-tensor-construction
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  post-nrqmx-finite-mode-light-matter-model: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains: mathematical-premise
  thm-nrqm-fock-and-equilibrium-fixed-mode-number-law: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: >-
  An exact conditional calculation for the single-mode, two-level
  rotating-wave model on the full infinite-dimensional oscillator Fock space.
  The excitation blocks and self-adjoint direct-sum realization are model
  deductions. The usual weak-coupling rotating-wave scale condition is not
  uniform over all Fock states; no continuum spontaneous-emission law,
  detector observation, or laboratory identification is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Carlos Navarrete-Benlloch, Introduction to Quantum Optics, full lecture notes, §§IV.2.1–2.2"
      url: "https://arxiv.org/pdf/2203.13206"
      locator: "The rotating-wave Jaynes–Cummings Hamiltonian and excitation sectors, Eqs. (267)–(271). The local proof fixes a different coupling phase and completes the operator-domain argument."
verification:
  precheck: pending
---

## Statement

Take the one-mode, two-level specialization of the finite-mode assignment and use its SI convention with $\hbar>0$ in joule-seconds. Let $\omega>0$ be the selected angular frequency in seconds$^{-1}$, let $\mathcal H_A=\mathbb C^2$ have orthonormal states $|g\rangle,|e\rangle$, and choose $\omega_0>0$ in seconds$^{-1}$, $d\in\mathbb R$ in coulomb-metres, and $\mathcal E\in\mathbb R$ in volts per metre. Set $\sigma_+=|e\rangle\langle g|$, $\sigma_-=|g\rangle\langle e|$, $\sigma_z=|e\rangle\langle e|-|g\rangle\langle g|$, and $\sigma_x=\sigma_++\sigma_-$. Choose $H_A=(\hbar\omega_0/2)\sigma_z$ and $D=d\sigma_x$; then the dipole expression $-\mathcal E D\otimes(a+a^*)$ has energy units. Define the real coupling $g:=-\mathcal E d/\hbar$ in seconds$^{-1}$. Retaining from the dipole expression just the excitation-exchange terms $\sigma_+\otimes a$ and $\sigma_-\otimes a^*$ gives coefficient $-\mathcal E d=\hbar g$. Thus the rotating-wave Hamiltonian below is a specified specialization of the model assignment, not an independently measured interaction.

Let $\mathcal F_s(\mathbb C)$ be the infinite-dimensional one-mode bosonic Fock space with occupation basis $|n\rangle$, $n\in\mathbb N_0$, and operators $a|n\rangle=\sqrt n|n-1\rangle$, $a^*|n\rangle=\sqrt{n+1}|n+1\rangle$ on the finite-particle core. Write $I_A$ and $I_F$ for the identity operators on the atomic and field factors, respectively. Define $\Delta=\omega_0-\omega$. For this rotating-wave model, whose usual scale $|g|\sqrt{n+1}\ll\omega,\omega_0$ applies only to the photon-number sectors under study and is not uniform over the full Fock space, set
$$H_{\rm core}=\hbar\omega\,I_A\otimes a^*a+\frac{\hbar\omega_0}{2}\sigma_z\otimes I_F+\hbar g(\sigma_+\otimes a+\sigma_-\otimes a^*)$$
on the finite-particle core of $\mathbb C^2\widehat\otimes\mathcal F_s(\mathbb C)$. The Hamiltonian is the exact operator for the selected rotating-wave model; no error bound relative to the unapproximated dipole interaction is asserted.

The total excitation operator $N_{\rm exc}:=I_A\otimes a^*a+\sigma_+\sigma_-\otimes I_F$ is conserved on that core. The ground line $\mathbb C|g,0\rangle$ is invariant. For each $n\in\mathbb N_0$, the subspace $\mathcal K_n=\operatorname{span}\{|e,n\rangle,|g,n+1\rangle\}$ is invariant and the restriction has matrix
$$H_n=\begin{pmatrix}\hbar\omega n+\frac{\hbar\omega_0}{2}&\hbar g\sqrt{n+1}\\\hbar g\sqrt{n+1}&\hbar\omega(n+1)-\frac{\hbar\omega_0}{2}\end{pmatrix}.$$
Its eigenvalue splitting is $\hbar\sqrt{\Delta^2+4g^2(n+1)}$. Define the full Hamiltonian to act on the ground line by $-\hbar\omega_0/2$ and as the orthogonal direct sum of the $H_n$ on the $\mathcal K_n$, with squared-block-norm domain
$$D(H_{\rm JC})=\left\{c|g,0\rangle\oplus\bigoplus_{n\ge0}\psi_n:\ c\in\mathbb C,\ \psi_n\in\mathcal K_n,\ \sum_{n\ge0}\|H_n\psi_n\|^2<\infty\right\}.$$
This direct-sum operator is self-adjoint and extends $H_{\rm core}$.

## Statement references

[[post-nrqmx-finite-mode-light-matter-model]]

[[def-nrqm-framework-quantities-and-units]]

[[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]]

[[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]]

[[lem-nrqm-composites-hilbert-tensor-construction]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The finite one-mode model data $\omega,\omega_0>0$, $g\in\mathbb R$, $\hbar>0$, the product Hilbert space $\mathbb C^2\widehat\otimes\mathcal F_s(\mathbb C)$, the finite-particle core, and the rotating-wave Hamiltonian specified in the Statement.

[A1] The finite-mode light–matter assignment declares the one-mode frequency, two-level atom, SI-unit conventions, Hermitian dipole matrix, and rotating-wave option. The choices $D=d\sigma_x$ and $g=-\mathcal E d/\hbar$ make the exchange coefficient in the Statement exactly the retained part of the dipole expression. The RWA scale applies only on the stated low-excitation sectors; no approximation error or continuum-emission limit is supplied ([[post-nrqmx-finite-mode-light-matter-model]], [[def-nrqm-framework-quantities-and-units]]).

[A2] Carry AC and $\mathrm{AC}_\omega$ as the finite-mode assignment and Fock/domain suppliers' mathematical assumptions; they are not physical laws. The self-adjointness proof uses $\mathrm{AC}_\omega$ for the stated Fock/domain results ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] On the one-mode occupation basis, $a|n\rangle=\sqrt n|n-1\rangle$, $a^*|n\rangle=\sqrt{n+1}|n+1\rangle$, $a|0\rangle=0$, and $|n\rangle$ are orthonormal ([[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]]).

[F2] The one-mode Fock space is a Hilbert direct sum, the finite-particle subspace is dense, and its closed creation and annihilation operators have the stated domains and adjoint relations under $\mathrm{AC}_\omega$ ([[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]]).

[F3] The completed ordered Hilbert tensor product has the product orthonormal basis; atom and field operators act on separate factors and commute on the algebraic core ([[lem-nrqm-composites-hilbert-tensor-construction]]).

## Proof

1.1 On the finite-particle core, $[a^*a,a]=-a$ and $[a^*a,a^*]=a^*$ by [F1], while $[\sigma_+\sigma_-,\sigma_+]=\sigma_+$ and $[\sigma_+\sigma_-,\sigma_-]=-\sigma_-$. Therefore $[N_{\rm exc},\sigma_+\otimes a]=\sigma_+\otimes a-\sigma_+\otimes a=0$ and $[N_{\rm exc},\sigma_-\otimes a^*]=-\sigma_-\otimes a^*+\sigma_-\otimes a^*=0$. The free terms commute with $N_{\rm exc}$, so $[N_{\rm exc},H_{\rm core}]=0$ on the core. [given, A1, F1, F3, algebra]

2.1 The vectors $|g,0\rangle$ and $|e,n\rangle,|g,n+1\rangle$ have excitation eigenvalues $0$ and $n+1$, respectively. Applying the displayed ladder actions [F1] to each basis vector shows $H_{\rm core}|g,0\rangle=-(\hbar\omega_0/2)|g,0\rangle$, $H_{\rm core}|e,n\rangle=(\hbar\omega n+\hbar\omega_0/2)|e,n\rangle+\hbar g\sqrt{n+1}|g,n+1\rangle$, and $H_{\rm core}|g,n+1\rangle=\hbar g\sqrt{n+1}|e,n\rangle+(\hbar\omega(n+1)-\hbar\omega_0/2)|g,n+1\rangle$. The product occupation basis [F3] consists exactly of $|g,0\rangle$ and these pairs: $|e,m\rangle$ occurs in the pair indexed by $m$, while $|g,m\rangle$ with $m\ge1$ occurs in the pair indexed by $m-1$. They are mutually orthogonal and exhaust the space. Hence the displayed subspaces are invariant blocks with matrix $H_n$. [A1, F1, F3, step 1.1, algebra]

3.1 Write $H_n=\hbar\omega(n+\tfrac12)I+\hbar\begin{pmatrix}\Delta/2&g\sqrt{n+1}\\g\sqrt{n+1}&-\Delta/2\end{pmatrix}$. The traceless matrix has characteristic polynomial $\lambda^2-(\Delta^2/4+g^2(n+1))$, so its eigenvalues are $\pm\frac12\sqrt{\Delta^2+4g^2(n+1)}$. Their difference gives the stated splitting. [step 2.1, algebra]

4.1 Each block matrix and the ground-line scalar are Hermitian. Finite-support vectors are dense by [F2] and lie in the stated domain. If $y\in D(H_{\rm JC}^*)$ with adjoint value $z$, testing against vectors supported in the ground line and each individual block gives $z_g=-(\hbar\omega_0/2)y_g$ and $z_n=H_ny_n$. Since $z$ is square-summable, $\sum_n\|H_ny_n\|^2<\infty$, so $y\in D(H_{\rm JC})$ and $H_{\rm JC}^*y=H_{\rm JC}y$. Conversely, for $x,y\in D(H_{\rm JC})$, Cauchy–Schwarz makes the block inner-product series absolutely convergent, and the Hermitian block identities give $\langle H_{\rm JC}x,y\rangle=\langle x,H_{\rm JC}y\rangle$. Hence $H_{\rm JC}\subseteq H_{\rm JC}^*$ and equality holds. The direct-sum operator is self-adjoint, and its restriction to finite-support vectors is $H_{\rm core}$. [A2, F2, F3, step 2.1, algebra] ∎

## Remarks

The indexed blocks form an orthogonal decomposition by total excitation, not a finite-dimensional approximation of the full Fock space. The RWA inequality above is a model-validity scale for specified sectors, not a uniform bound on omitted counter-rotating terms.

```tikz
\begin{tikzpicture}[>=stealth,baseline=(current bounding box.center)]
\node[draw,minimum width=2.3cm,minimum height=1.1cm] (g) at (0,0) {$\mathbb C|g,0\rangle$};
\node at (1.8,0) {$\oplus$};
\node[draw,minimum width=3.2cm,minimum height=1.1cm] (k0) at (4.1,0) {$\mathcal K_0=\operatorname{span}\{|e,0\rangle,|g,1\rangle\}$};
\node at (6.2,0) {$\oplus$};
\node[draw,minimum width=3.2cm,minimum height=1.1cm] (k1) at (8.5,0) {$\mathcal K_1=\operatorname{span}\{|e,1\rangle,|g,2\rangle\}$};
\node at (10.5,0) {$\oplus\cdots$};
\end{tikzpicture}
```

The boxes label mutually orthogonal excitation sectors in $\mathbb C|g,0\rangle\oplus\bigoplus_{n\ge0}\mathcal K_n$. Each $\oplus$ denotes the Hilbert direct sum; no transition between blocks is represented. The proof of invariance and self-adjointness is the operator argument above and does not rely on the diagram.

