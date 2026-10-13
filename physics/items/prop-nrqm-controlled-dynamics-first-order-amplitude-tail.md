---
id: prop-nrqm-controlled-dynamics-first-order-amplitude-tail
aliases:
- nrqm-controlled-dynamics-first-order-amplitude-tail
kind: proposition
domain: mathematics
title: First-order amplitude tail
status: published
origin: pipeline
dependency_level: 2
deps:
- thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture
- def-hilbert-space
- def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
- def-bounded-linear-operator
- def-operator-norm
- lem-bochner-integral-norm-inequality
- def-countable-choice
dependency_roles:
  thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted
      course text), Perturbation Expansion and Harmonic Perturbations pp. 180-183
      (first-order time-dependent amplitudes and their error as a formal expansion)
    url: https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf
  - title: G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
      Section 5.1 pp. 123-126 (unitary dynamics) and Chapter 6 pp. 133-136 (self-adjointness
      of bounded perturbations)
    url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Adopt the
hypotheses and notation of
[[thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture]]: $H$ is a
complex Hilbert space with inner product linear in the first variable, $H_0$ is self-adjoint with domain $D(H_0)$, $\hbar>0$,
$V:[a,b]\to\mathcal B(H)$ is strongly continuous with self-adjoint values and
$v=\sup_t\|V(t)\|<\infty$, $K=v/\hbar$, and $U(t,s)$ is the mild propagator of
that item. Suppose in addition that $(\varphi_n)_{n\in\mathbb N}$ is a complete
orthonormal family of $H$ consisting of eigenvectors of $H_0$, with
$H_0\varphi_n=E_n\varphi_n$ and $E_n\in\mathbb R$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), and
fix indices $a_0,b_0$ and $s\le t$ in $[a,b]$, $\tau:=t-s$. Define the
*transition amplitude*
$$A_{b_0a_0}(t,s):=e^{iE_{b_0}(t-s)/\hbar}\bigl\langle U(t,s)\varphi_{a_0},\varphi_{b_0}\bigr\rangle.$$
Then
$$A_{b_0a_0}(t,s)=\delta_{a_0b_0}-\frac{i}{\hbar}\int_s^te^{i(E_{b_0}-E_{a_0})(r-s)/\hbar}\bigl\langle V(r)\varphi_{a_0},\varphi_{b_0}\bigr\rangle\,dr+R_{b_0a_0}(t,s),$$
where the remainder satisfies the explicit bound
$$|R_{b_0a_0}(t,s)|\le e^{K\tau}\frac{(K\tau)^2}{2}.$$

Consequently, if $\eta:[a,b]\to\mathbb R_{\ge0}$ is integrable with
$\|V(t)-V_0(t)\|\le\eta(t)$ for a family $V_0$ of self-adjoint bounded operators,
assume the selected scalar coefficient $c_0(r)=\langle V_0(r)\varphi_{a_0},\varphi_{b_0}\rangle$ is Lebesgue measurable (equivalently here, require it to be integrable). Then the first-order amplitude computed with $V_0$ differs from the exact one by at
most $\frac1\hbar\int_s^t\eta(r)\,dr+e^{K\tau}(K\tau)^2/2$. No physical
transition probability, no measurement postulate and no long-time limit are
asserted.

## Facts & Assumptions

**Given:** CC and the full strong-continuity/eigenbasis hypotheses of the Statement. Write $\varphi_a=\varphi_{a_0}$, $\varphi_b=\varphi_{b_0}$, $E_a=E_{a_0}$, $E_b=E_{b_0}$ and $\mathcal E(r)=e^{-irH_0/\hbar}$.

[F1] [[thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture]] gives $V_I(r)=\mathcal E(-r)V(r)\mathcal E(r)$, $U(t,s)=\mathcal E(t)U_I(t,s)\mathcal E(-s)$, latest-time-left vector-integral Dyson terms $D_n$, $D_0=I$ and $D_1\varphi=-(i/\hbar)\int_s^tV_I(r)\varphi\,dr$. Their operator-norm convergent sum has $\|D_n\|\le(K\tau)^n/n!$ and first-order tail at most $e^{K\tau}(K\tau)^2/2$. This is the actual strong-vector supplier, without norm continuity or operator-valued Bochner integrability of $V_I$. Its autonomous group acts on an $H_0$ eigenvector by the scalar exponential.

[F2] [[def-hilbert-space]] and [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]] give the first-variable-linear pairing, Cauchy–Schwarz and unit eigenvectors. [[def-bounded-linear-operator]] and [[def-operator-norm]] give $|\langle Tx,y\rangle|\le\|T\|\|x\|\|y\|$. A bounded linear functional passes through a continuous vector integral by its defining finite sums and continuity; the norm inequality is [[lem-bochner-integral-norm-inequality]].

## Proof

1.1 [The exact forward amplitude] Unitarity and the eigenvector formula in [F1] give $\langle\mathcal E(t)x,\varphi_b\rangle=e^{-iE_bt/\hbar}\langle x,\varphi_b\rangle$, while $\mathcal E(-s)\varphi_a=e^{iE_as/\hbar}\varphi_a$. Thus $A_{ba}=e^{i(E_a-E_b)s/\hbar}\langle U_I(t,s)\varphi_a,\varphi_b\rangle$. Its order-zero term is $\delta_{ab}$. Moreover $\langle V_I(r)\varphi_a,\varphi_b\rangle=e^{i(E_b-E_a)r/\hbar}\langle V(r)\varphi_a,\varphi_b\rangle$. Passing the bounded linear pairing through $D_1$ gives exactly the displayed first-order integral. Its coefficient is continuous because $V$ is strongly continuous on the fixed $\varphi_a$. [F1, F2, given, algebra]

2.1 [The exact finite-time tail] Let $T_2=\sum_{n\ge2}D_n(t,s)$ and $R_{ba}=e^{i(E_a-E_b)s/\hbar}\langle T_2\varphi_a,\varphi_b\rangle$. The real eigenvalues and unit vectors give $|R_{ba}|\le\|T_2\|\le\sum_{n\ge2}(K\tau)^n/n!\le e^{K\tau}(K\tau)^2/2$, since $(j+2)!\ge2j!$. This includes $K=0$ and $\tau=0$ and proves the exact expansion. These are bounded operators obtained from vector integrals, so no norm-Bochner measurability of $V_I$ or differentiation on an uncontrolled unbounded domain is required. [step 1.1, F1, F2, given, algebra]

3.1 [The measurable selected comparison] Put $c(r)=\langle V(r)\varphi_a,\varphi_b\rangle$. By [F2], $|c-c_0|\le\eta$ and $|c_0|\le v+\eta$. Hence the explicitly assumed measurable $c_0$ is integrable on the finite interval; direct integrability is an equivalent sufficient hypothesis. The continuous modulus-one phase preserves integrability. Subtracting the two first-order scalar expressions and integrating their absolute difference gives at most $\hbar^{-1}\int_s^t\eta(r)dr$. Adding step 2.1 proves the full comparison estimate, without asserting a propagator for the arbitrary family $V_0$. [step 1.1, step 2.1, F2, given, algebra] ∎

## Remarks

The former backward pairing fails already when $V=0$, $H_0=I$ on $\ell^2(\mathbb N)$, $\hbar=1$, $\tau=\pi/2$ and $a_0=b_0$. It gives $e^{i\tau}\langle\varphi_a,e^{-i\tau}\varphi_a\rangle=e^{2i\tau}=-1$, whereas the claimed zero-remainder free amplitude would be $1$. The forward pairing is $1$. The matrix element also needs the same ordering: on two coordinate vectors let $H_0=0$ and $V=\begin{pmatrix}0&i\\-i&0\end{pmatrix}$, extended by zero on the remaining coordinates. The forward amplitude from the first to the second coordinate is $-\sin\tau$, with derivative $-1$; $-i\langle V\varphi_a,\varphi_b\rangle=-1$, while the former backward matrix element gives $+1$.

A norm bound alone does not imply measurability of an arbitrary selected coefficient. In a setting admitting a non-Lebesgue-measurable $A\subseteq[a,b]$, $V=0$ and $V_0(r)=\mathbf1_A(r)I$ obey $\|V-V_0\|\le1$ but have the nonmeasurable diagonal coefficient $\mathbf1_A$. This conditional example asserts no existence of such a set from CC alone; the comparison hypothesis now states the exact scalar measurability it uses. The retained remainder constant also has the direct check $K\int_0^\tau(e^{Kx}-1)dx\le K\int_0^\tau Kxe^{Kx}dx\le(K\tau)^2e^{K\tau}/2$, including $K=0$ without division. This removes the extra factor of $K$ in the former intermediate equality.
