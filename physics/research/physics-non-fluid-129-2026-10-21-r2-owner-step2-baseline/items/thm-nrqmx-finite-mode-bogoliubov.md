---
id: thm-nrqmx-finite-mode-bogoliubov
kind: theorem
domain: mathematics
title: Finite Bogoliubov implementability
status: draft
origin: pipeline
dependency_level: 4
deps: [def-nrqmx-finite-mode-symplectic-data, thm-nrqmx-finite-metaplectic-construction, lem-nrqmx-finite-mode-fock-schr-identification, lem-nrqm-fock-and-equilibrium-creation-contraction-bounds, def-axiom-of-choice]
dependency_roles:
  def-nrqmx-finite-mode-symplectic-data: mathematical-premise
  thm-nrqmx-finite-metaplectic-construction: mathematical-premise
  lem-nrqmx-finite-mode-fock-schr-identification: mathematical-premise
  lem-nrqm-fock-and-equilibrium-creation-contraction-bounds: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Phan Thành Nam, Mathematical Quantum Mechanics II, §6.3, pp. 146–156"
      url: "https://www.math.lmu.de/~nam/LectureNotesMQM2020.pdf"
    - title: "Christian Weedbrook et al., Gaussian Quantum Information, §II.A, Eqs. (21)–(25)"
      url: "https://arxiv.org/pdf/1110.3234"
---

## Statement

Assume AC, $r\ge1$, and the finite-mode Fock conventions of
[[def-nrqmx-finite-mode-symplectic-data]]. Let $U,V\in M_r(\mathbb C)$ obey
$$UU^*-VV^*=I_r,\qquad UV^T=VU^T,$$
where $^*$ is conjugate transpose and $^T$ is transpose without conjugation.
On the finite Hermite core define
$$a'_j=\sum_k(U_{jk}a_k+V_{jk}a_k^*).$$
Then the $a'_j$ satisfy $[a'_j,(a'_k)^*]=\delta_{jk}I$ and
$[a'_j,a'_k]=0$ on that core. The real matrix
$$S_g=\begin{pmatrix}\operatorname{Re}(U+V)&-\operatorname{Im}(U-V)\\ \operatorname{Im}(U+V)&\operatorname{Re}(U-V)\end{pmatrix}$$
is symplectic in grouped coordinate order $(Q_1,\ldots,Q_r,P_1,\ldots,P_r)$.
There is a unitary $M$ on finite-mode Fock, obtained by transporting an
individual finite symplectic implementer through the Fock–Schrödinger
unitary, such that $M^*aM=a'$ on the transported Schwartz core and
$M^*W(z)M=W(S_g^Tz)$ in grouped Weyl-label order. The transformed vacuum
$M\Omega$ has finite mean number
$$\sum_j\|a_jM\Omega\|^2=\operatorname{tr}(VV^*).$$
No infinite-mode implementability assertion is made.

## Facts & Assumptions

**Given:** AC, finite $r\ge1$, matrices $U,V$ satisfying the two displayed
matrix identities, the finite-mode Fock vacuum $\Omega$, and the quadrature
and Weyl conventions of the definition.

[A1] The matrices obey $UU^*-VV^*=I_r$ and $UV^T=VU^T$, with AC adopted
for the finite-dimensional uniqueness interface
([[def-axiom-of-choice]]).

[F1] On the finite Hermite span, $[a_j,a_k^*]=\delta_{jk}I$ and all
annihilators mutually commute, as do all creators; $a_j\Omega=0$ and
$a_j^*\Omega=|e_j\rangle$ ([[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]],
[[lem-nrqmx-finite-mode-fock-schr-identification]]).

[F2] With $Q_j=\sqrt{\hbar/2}(a_j+a_j^*)$ and
$P_j=-i\sqrt{\hbar/2}(a_j-a_j^*)$, the matrix $S_g$ is the unique real
coefficient matrix satisfying
$$a'=\frac{(S_gR)_Q+i(S_gR)_P}{\sqrt{2\hbar}}$$
on that core; this follows by separating real and imaginary parts.

[F3] Every interleaved finite symplectic matrix $S_i$ has an implementer
$M^*W_i(z)M=W_i(S_i^Tz)$ and $M^*R_iM=S_iR_i$ on the transported Schwartz
core; conjugating by the fixed interleaved-to-grouped permutation gives the
same covariance for grouped matrices
([[thm-nrqmx-finite-metaplectic-construction]]).

[F4] The Fock–Schrödinger map is unitary, sends $\Omega$ to $g_0^{\otimes r}$,
and sends the finite-particle span to the finite Hermite span
([[lem-nrqmx-finite-mode-fock-schr-identification]]).

## Proof

1.1 Expand the commutator using [F1]. The only nonzero terms in
$[a'_j,(a'_k)^*]$ are
$$\sum_lU_{jl}\overline{U_{kl}}-\sum_lV_{jl}\overline{V_{kl}} =(UU^*-VV^*)_{jk}=\delta_{jk}.$$
Likewise
$$[a'_j,a'_k]=\sum_l(U_{jl}V_{kl}-V_{jl}U_{kl}) =(UV^T-VU^T)_{jk}=0.$$
These are finite sums on the common core, so no unbounded product is used
outside its domain. [A1, F1, given, algebra]

2.1 Substitute $a=(Q+iP)/\sqrt{2\hbar}$ and
$a^*=(Q-iP)/\sqrt{2\hbar}$ into $Ua+Va^*$. Its real quadrature part is
$\operatorname{Re}(U+V)Q-\operatorname{Im}(U-V)P$ and its imaginary part is
$\operatorname{Im}(U+V)Q+\operatorname{Re}(U-V)P$. This is exactly $S_gR$.
Since step 1.1 gives the canonical commutators for these transformed
quadratures, bilinearity yields
$$[ (S_gR)_j,(S_gR)_k]=i\hbar(S_gJ_0S_g^T)_{jk} =i\hbar(J_0)_{jk}.$$
As $\hbar>0$, this matrix identity implies $S_gJ_0S_g^T=J_0$, hence
$S_g$ is invertible and symplectic. [F1, F2, step 1.1, algebra]

3.1 Let $P$ be the fixed permutation from interleaved to grouped coordinates
and set $S_i=P^TS_gP$. The symplectic identity for $S_g$ makes $S_i$
symplectic in interleaved order. Apply [F3] to $S_i$ and transport its
unitary to Fock by [F4]. Converting by $P$ gives
$M^*W_g(w)M=W_g(S_g^Tw)$ on every label and $M^*R_gM=S_gR_g$ on the
transported Schwartz core. The Weyl covariance holds on all Fock space
because each Weyl operator and the implementer are bounded. The complex
recombination in step 2.1 gives
$M^*aM=a'$. Each generator in [F3] preserves Schwartz space, so $M\Omega$
lies in that core. Therefore, using $a_j\Omega=0$ and
$a'_j\Omega=\sum_kV_{jk}a_k^*\Omega$, one has
$$\sum_j\|a_jM\Omega\|^2 =\sum_j\|M a'_j\Omega\|^2 =\sum_{j,k}|V_{jk}|^2=\operatorname{tr}(VV^*).$$
The equality is finite and proves the claimed finite mean number. No step
passes to infinitely many modes. [F1, F3, F4, step 2.1, algebra] ∎
