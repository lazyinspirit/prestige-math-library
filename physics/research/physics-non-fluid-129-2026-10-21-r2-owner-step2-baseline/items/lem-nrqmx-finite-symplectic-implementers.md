---
id: lem-nrqmx-finite-symplectic-implementers
kind: lemma
domain: mathematics
title: Individual finite symplectic implementers
status: draft
origin: pipeline
dependency_level: 1
deps: [lem-nrqmx-finite-mode-fock-schr-identification, lem-nrqmx-finite-symplectic-generator-factorization, lem-schrodinger-weyl-system-is-regular-and-irreducible, thm-plancherel, thm-spectral-theorem-for-bounded-normal-operators-pvm-form, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  lem-nrqmx-finite-mode-fock-schr-identification: mathematical-premise
  lem-nrqmx-finite-symplectic-generator-factorization: mathematical-premise
  lem-schrodinger-weyl-system-is-regular-and-irreducible: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-spectral-theorem-for-bounded-normal-operators-pvm-form: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arvind, B. Dutta, N. Mukunda and R. Simon, The Real Symplectic Groups in Quantum Mechanics and Optics, §§IV–VI"
      url: "https://arxiv.org/pdf/quant-ph/9509002"
    - title: "Phan Thành Nam, Mathematical Quantum Mechanics II, §6.3, pp. 146–156"
      url: "https://www.math.lmu.de/~nam/LectureNotesMQM2020.pdf"
---

## Statement

Assume the Axiom of Choice. On $L^2(\mathbb R^r)$, for $r\ge1$ and $\hbar>0$,
define the Weyl unitaries in grouped label order $(q,p)\in\mathbb R^r\oplus
\mathbb R^r$ by
$$[W(q,p)f](x)=e^{i\sqrt\hbar\,q\cdot(x+\sqrt\hbar p/2)}f(x+\sqrt\hbar p).$$
For $J_0=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$, every
$T\in\operatorname{Sp}(2r,\mathbb R)$ has a unitary $M_T$ such that
$$M_T^*W(z)M_T=W(Tz)\quad(z\in\mathbb R^{2r}).$$
Any two such unitaries differ by a scalar of modulus one. The covariance
identity holds on all of $L^2$; the corresponding unbounded quadrature
identities hold on the common transported Schwartz domain. This is an
individual existence and phase-uniqueness result; it does not identify the
global topology or kernel of a continuously chosen implementer family.

## Facts & Assumptions

**Given:** AC (and hence Countable Choice), finite $r\ge1$, $\hbar>0$, the displayed Weyl
system, and $T\in\operatorname{Sp}(2r,\mathbb R)$.

[A1] AC supplies Countable Choice for the regular irreducibility input and is
the explicit hypothesis of the finite-dimensional Stone–von Neumann result
([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The displayed $W$ are unitary and form a strongly continuous irreducible
Weyl system. Under $(q_0,p_0)=(-\sqrt\hbar p,q/\sqrt\hbar)$ they are the
Schrödinger system with fixed nonzero central parameter $\hbar$; the root
lemma proves regularity and irreducibility under Countable Choice
([[lem-schrodinger-weyl-system-is-regular-and-irreducible]]).

[F2] Every real symplectic matrix factors into symmetric upper and lower
shears, invertible coordinate changes and partial Fourier rotations
([[lem-nrqmx-finite-symplectic-generator-factorization]]).

[F3] The negative-sign Fourier transform with unitary normalization extends
to a unitary on $L^2(\mathbb R^r)$ ([[thm-plancherel]]).

[F4] For a bounded normal operator on a nonzero complex Hilbert space, its
spectral projection valued measure represents its bounded Borel functional
calculus; a projection commuting with the operator's generated unitaries is
therefore available from the spectral calculus of a commuting self-adjoint
operator ([[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]]).

## Proof

1.1 The formula for $W$ is a unitary composition of translation and a
modulus-one multiplier; its inverse is $W(-q,-p)$. Direct substitution gives
$$W(q,p)W(q',p')=e^{-i\hbar(q\cdot p'-p\cdot q')/2}W(q+q',p+p').$$
For a real symmetric $X$, the chirp
$$[C_Xf](x)=e^{ix^TXx/2}f(x)$$
is unitary, and substitution in the Weyl formula gives
$C_X^*W(q,p)C_X=W(q+Xp,p)$, the upper shear. For invertible real $A$,
$$[D_Af](x)=|\det A|^{1/2}f(Ax)$$
is unitary by change of variables, and direct substitution gives
$D_A^*W(q,p)D_A=W(A^{-T}q,Ap)$, an invertible coordinate change. [given, A1,
F1, algebra]

2.1 Let $\mathcal F$ be the unitary Fourier transform with kernel
$(2\pi)^{-r/2}e^{-ik\cdot x}$, which exists by [F3]. On Schwartz functions,
change variables in the integral formula gives
$$\mathcal F W(q,p)\mathcal F^*=W(p,-q).$$
Both sides are bounded operators, and Schwartz functions are dense, so this
identity holds on all of $L^2$. Applying it to selected coordinates gives
partial Fourier rotations. Conjugating an upper shear by the full or partial
Fourier rotation gives every lower shear, since the matrix identity is
$\begin{pmatrix}0&-I\\I&0\end{pmatrix}
U_X\begin{pmatrix}0&I\\-I&0\end{pmatrix}=L_{-X}$.
Thus each generator and inverse in [F2] has a unitary Weyl implementer. [F2,
F3, step 1.1, algebra]

3.1 Each generator unitary maps Schwartz space onto itself: this follows from
the product rule for the smooth quadratic chirp, the chain rule for an
invertible linear coordinate change, and Fourier invariance of Schwartz
space. On any connected parameter neighborhood on which $A$ remains
invertible, the chirp and coordinate formulas vary continuously in every
Schwartz seminorm; the Fourier factor is fixed. If
$G_1^*W(z)G_1=W(T_1z)$ and $G_2^*W(z)G_2=W(T_2z)$, then
$(G_1G_2)^*W(z)(G_1G_2)=W(T_2T_1z)$. Therefore, for any finite factorization
$T=T_k\cdots T_1$ supplied by [F2], multiplying the corresponding generator
unitaries in the order $G_1\cdots G_k$ gives a unitary $M_T$ with
$M_T^*W(z)M_T=W(Tz)$ for every label $z$. This proves existence and does not
invoke a general metaplectic existence theorem. [F2, step 1.1, step 2.1,
algebra]

4.1 Suppose $M_1,M_2$ implement the same $T$. Then
$X=M_2M_1^*$ commutes with every $W(z)$ by applying their two covariance
identities. Since the Weyl system is irreducible by [F1], every spectral
projection of either bounded self-adjoint operator
$\operatorname{Re}X=(X+X^*)/2$ and
$\operatorname{Im}X=(X-X^*)/(2i)$ commutes with every $W(z)$ and has invariant
range. Irreducibility forces each such projection to be $0$ or $I$. The
spectral measure in [F4] then implies each self-adjoint part is scalar: if a
bounded self-adjoint operator had two distinct spectral values, disjoint
neighborhoods of those values would yield a nonzero proper spectral
projection. Hence $X=\lambda I$ for some $\lambda\in\mathbb C$; since $X$ is
unitary, $|\lambda|=1$. Thus $M_1,M_2$ differ only by a phase. [F1, F4,
step 3.1, algebra] ∎
