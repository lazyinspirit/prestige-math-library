---
id: pthm-nrqmx-beam-splitter-count-statistics
kind: physics-theorem
title: Passive beam-splitter photon statistics
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - post-nrqmx-finite-mode-light-matter-model
  - thm-nrqmx-finite-mode-bogoliubov
  - lem-nrqmx-finite-mode-fock-schr-identification
  - thm-nrqm-fock-and-equilibrium-fixed-mode-number-law
  - def-nrqm-measurement-framework-declared-measurements-and-instruments
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  post-nrqmx-finite-mode-light-matter-model: physical-assumption
  thm-nrqmx-finite-mode-bogoliubov: mathematical-premise
  lem-nrqmx-finite-mode-fock-schr-identification: mathematical-premise
  thm-nrqm-fock-and-equilibrium-fixed-mode-number-law: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: operational-prerequisite
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: >-
  An exact two-mode passive-unitary model calculation in the infinite-dimensional
  finite-mode bosonic Fock space, with ideal number-resolving outcomes. It gives
  conditional count distributions for specified number and coherent inputs.
  The result is not an experiment or a claim that an actual optical device
  realizes the assigned unitary.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Christian Weedbrook et al., Gaussian Quantum Information, §II.2.6"
      url: "https://arxiv.org/pdf/1110.3234"
      locator: "The two-mode beam-splitter unitary and Heisenberg matrix, Eqs. (36)–(38); the item fixes its own state-action/port phase convention."
verification:
  precheck: pending
---

## Statement

Assume the finite-mode assignment with two modes and its ideal number PVM. Let $t,r\in\mathbb C$ be dimensionless amplitudes with $|t|^2+|r|^2=1$, and fix the complete unitary mode matrix $C=\begin{pmatrix}t&-\overline r\\r&\overline t\end{pmatrix}$. Use the state-action convention that the passive unitary $U_C$ satisfies $U_C\Omega=\Omega$, $U_Ca_1^*U_C^*=t a_1^*+r a_2^*$, and $U_Ca_2^*U_C^*=-\overline r\,a_1^*+\overline t\,a_2^*$ on the finite-particle core. Put $\eta:=|t|^2$. For $n\in\mathbb N_0$ and $0\le k\le n$, write $\binom nk:=n!/(k!(n-k)!)$. For input $|n,0\rangle$ and $0<\eta<1$, the joint output count law is
$$\mathbb P(k,\ell)=\begin{cases}\binom nk\eta^k(1-\eta)^{n-k},&\ell=n-k,\ 0\le k\le n,\\0,&\text{otherwise}.\end{cases}$$
At $\eta=0$ and $\eta=1$ the joint laws are respectively point masses at $(0,n)$ and $(n,0)$. Thus the first output count is binomial with parameters $(n,\eta)$. For a dimensionless coherent input $|\alpha,0\rangle$ with $|\alpha\rangle=e^{-|\alpha|^2/2}\sum_{n\ge0}\alpha^n|n\rangle/\sqrt{n!}$, the output state is $|t\alpha\rangle\otimes|r\alpha\rangle$.

## Statement references

[[post-nrqmx-finite-mode-light-matter-model]]

[[thm-nrqmx-finite-mode-bogoliubov]]

[[lem-nrqmx-finite-mode-fock-schr-identification]]

[[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]]

[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Two finite oscillator modes with Fock occupation basis $|\mathbf n\rangle$, vacuum $\Omega$, a passive unitary mode matrix $C$ with first column $(t,r)^T$, ideal number PVMs on both output modes, and dimensionless coherent amplitude $\alpha\in\mathbb C$.

[A1] The postulate assigns two finite oscillator modes and their ideal photon-counting PVM, but it asserts no actual beam-splitter device or count record ([[post-nrqmx-finite-mode-light-matter-model]]).

[A2] Assume both AC and $\mathrm{AC}_\omega$. AC is used for the finite-mode Bogoliubov implementer; $\mathrm{AC}_\omega$ is used for the countable Fock basis and coherent-state series. These are mathematical assumptions, not physical inputs ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The two-mode occupation vectors $|n_1,n_2\rangle$ form a complete orthonormal basis and
$$a_1|n_1,n_2\rangle=\sqrt{n_1}|n_1-1,n_2\rangle,\quad a_2|n_1,n_2\rangle=\sqrt{n_2}|n_1,n_2-1\rangle,$$
$$a_1^*|n_1,n_2\rangle=\sqrt{n_1+1}|n_1+1,n_2\rangle,\quad a_2^*|n_1,n_2\rangle=\sqrt{n_2+1}|n_1,n_2+1\rangle,$$
with annihilation zero when its corresponding occupation is zero. The creators commute and the annihilators kill $\Omega$ ([[lem-nrqmx-finite-mode-fock-schr-identification]]). The current Step 1 record for this batch-52 Fock–Schrödinger supplier is ready and hash-current; it is an authoring-readiness record, not independent proof approval.

[F2] The finite-mode Bogoliubov statement assumes AC and, for unitary mode matrix $S$ with $V=0$, supplies an implementer $M$ satisfying $M^*aM=Sa$ and $\sum_j\|a_jM\Omega\|^2=0$ ([[thm-nrqmx-finite-mode-bogoliubov]]). Its current Step 1 record is ready and hash-current; it is an authoring-readiness record, not independent proof approval.

[F3] The one-mode coherent vector has the normalized expansion $|\alpha\rangle=e^{-|\alpha|^2/2}\sum_n\alpha^n|n\rangle/\sqrt{n!}$, and the occupation vectors are orthonormal ([[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]]).

[F4] The ideal outcome law for a declared PVM $P(B)$ is $\mathbb P(B)=\operatorname{tr}(\rho P(B))$; no apparatus realization follows ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]]).

## Proof

1.1 The matrix $C$ is unitary because $C^*C=I_2$ follows from $|t|^2+|r|^2=1$. Its transpose $S=C^T$ is also unitary, so $U=S,V=0$ satisfy $UU^*-VV^*=I_2$ and $UV^T=VU^T$. By [F2] the finite-mode Bogoliubov statement supplies an implementer $M$ with $M^*aM=Sa$. Multiplying by $M$ and $M^*$ gives $MaM^*=S^{-1}a$; taking adjoints gives $Ma^*M^*=\overline{S}^{-1}a^*=S^Ta^*=Ca^*$ because $S$ is unitary and $S^T=C$. These identities hold on the transported finite-particle core. [given, A2, F2, construct, algebra]

2.1 The transformed vacuum has $\sum_{j=1}^2\|a_jM\Omega\|^2=0$ by [F2], so $a_1M\Omega=a_2M\Omega=0$. Expanding $M\Omega$ in the complete occupation basis [F1], the equation $a_1\psi=0$ forces every coefficient with first occupation $n_1>0$ to vanish by the ladder formula; $a_2\psi=0$ then forces every coefficient with $n_2>0$ to vanish. Hence $M\Omega=e^{i\phi}\Omega$ for some real $\phi$. Replacing $M$ by $U_C=e^{-i\phi}M$ preserves the conjugation identities and gives $U_C\Omega=\Omega$. [F1, F2, step 1.1, algebra]

3.1 For $|n,0\rangle=(a_1^*)^n\Omega/\sqrt{n!}$, repeated use of the creation identity in [F1], the conjugation identity from step 1.1, and $U_C\Omega=\Omega$ from step 2.1 give $U_C|n,0\rangle=(t a_1^*+r a_2^*)^n\Omega/\sqrt{n!}=\sum_{k=0}^n\sqrt{\binom nk}t^k r^{n-k}|k,n-k\rangle$. The coefficient follows by choosing which $k$ of the $n$ commuting creation factors contribute $a_1^*$ and using $|k,n-k\rangle=(a_1^*)^k(a_2^*)^{n-k}\Omega/\sqrt{k!(n-k)!}$. [F1, step 1.1, step 2.1, construct, algebra]

4.1 Orthogonality of the output occupation basis makes the joint ideal number-count probability the squared modulus of the coefficient in step 3.1. Since $|t|^2=\eta$ and $|r|^2=1-\eta$, for $0<\eta<1$ this is the displayed binomial law; at the endpoints the expansion has a single surviving basis vector. The declared number PVM and its Born rule [A1, F4] assign these probabilities. [A1, F4, step 3.1, algebra]

5.1 For the coherent input, each output occupation coefficient has only one contributing input total $n=k+\ell$. By step 3.1 that coefficient is $e^{-|\alpha|^2/2}\alpha^{k+\ell}t^kr^\ell/\sqrt{k!\ell!}$. The product coherent vector $|t\alpha\rangle\otimes|r\alpha\rangle$ has the same coefficient because $|t\alpha|^2+|r\alpha|^2=|\alpha|^2$; completeness of the occupation basis [F1] therefore gives equality of the two output vectors. [F1, F3, step 3.1, algebra] ∎

## Remarks

The state-action convention fixes which amplitude is called $t$ and which output is called the first port. The literature often displays the inverse Heisenberg transformation; the transpose relation in step 1.1 matches that convention. In the diagram, each line denotes a bosonic mode, and the box denotes the declared two-mode unitary. The number labels are Fock occupations, not photon positions.

```tikz
\begin{tikzpicture}[>=stealth,baseline=(current bounding box.center)]
\node (g) at (0,0.8) {$|n,0\rangle$};
\node (v) at (0,0) {vacuum input};
\node[draw,minimum width=1.2cm,minimum height=1cm] (u) at (1.8,0.4) {$U_C$};
\node (m1) at (3.8,1.1) {mode 1};
\node (m2) at (3.8,-0.3) {mode 2};
\draw[->] (g) -- (u);
\draw[->] (v) -- (u);
\draw[->] (u) -- (m1);
\draw[->] (u) -- (m2);
\end{tikzpicture}
```

This diagram represents only the unitary mode transformation and the specified inputs. It does not depict a detector's efficiency or a physical laboratory layout; the count distribution follows from the proof and the assigned number PVM.

