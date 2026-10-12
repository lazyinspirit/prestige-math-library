---
id: thm-nrqm-controlled-dynamics-driven-oscillator-common-domain
aliases: [nrqm-controlled-dynamics-driven-oscillator-common-domain]
kind: theorem
domain: mathematics
title: "Driven oscillator common domain"
status: draft
origin: pipeline
dependency_level: 6
deps: [thm-nrqm-oscillator-oscillator-scaling-and-exact-realization, thm-nrqm-oscillator-coherent-evolution-and-variance, lem-nrqm-oscillator-closed-ladder-domains, thm-kato-rellich, def-relative-boundedness-with-respect-to-an-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice, thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]
dependency_roles:
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  thm-nrqm-oscillator-coherent-evolution-and-variance: mathematical-premise
  lem-nrqm-oscillator-closed-ladder-domains: mathematical-premise
  thm-kato-rellich: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.1 pp. 133-136 (Kato-Rellich) and Chapter 8 pp. 173-180 (algebraic oscillator methods)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Simple Harmonic Oscillator pp. 80-84 (ladder operators and the ground state)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$m,\omega,\hbar>0$, let $\ell:=\sqrt{\hbar/(m\omega)}$, let
$H_{\mathrm{osc}}=\frac{\hbar\omega}{2}DAD^{-1}$ be the oscillator of
[[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] with
orthonormal eigenbasis $(\psi_n)_{n\ge0}$ and ladder operators
$a_\psi,a_\psi^\dagger,N_\psi$ of [[lem-nrqm-oscillator-closed-ladder-domains]]
transported to $L^2(\mathbb R,dx)$, and let
$Q=M_x$, $P=\mathcal F_2^*M_{2\pi\hbar\xi}\mathcal F_2$ be the self-adjoint
position and momentum operators of
[[thm-nrqm-oscillator-coherent-evolution-and-variance]], with
$H_{\mathrm{osc}}=\hbar\omega(N_\psi+\frac12I)$ and the couplings
$$Q=\frac{\ell}{\sqrt2}(a_\psi+a_\psi^\dagger),\qquad P=\frac{\hbar}{i\ell\sqrt2}(a_\psi-a_\psi^\dagger)$$
on the common domain $D(N_\psi^{1/2})$. Let $f:[a,b]\to\mathbb R$ be of class
$C^1$. Put $Y:=D(H_{\mathrm{osc}})=D(N_\psi)$ with graph norm
$\|\psi\|_Y^2:=\|\psi\|^2+\|H_{\mathrm{osc}}\psi\|^2$. Then:

(a) *Ladder bounds.* For every $\psi\in D(N_\psi^{1/2})$,
$$\|Q\psi\|\le\ell\bigl(\|N_\psi^{1/2}\psi\|^2+\|\psi\|^2\bigr)^{1/2},\qquad \|P\psi\|\le\frac{\hbar}{\ell}\bigl(\|N_\psi^{1/2}\psi\|^2+\|\psi\|^2\bigr)^{1/2}.$$

(b) *Infinitesimal bound.* For every $\eta>0$ there is $b_\eta<\infty$ with
$\|Q\psi\|\le\eta\|H_{\mathrm{osc}}\psi\|+b_\eta\|\psi\|$ for
$\psi\in Y=D(H_{\mathrm{osc}})$; hence $-f(t)Q$ is
$H_{\mathrm{osc}}$-bounded with relative bound $0$ for every fixed $t$
([[def-relative-boundedness-with-respect-to-an-operator]]).

(c) *Common domain.* For every $t\in[a,b]$ the operator
$H(t):=H_{\mathrm{osc}}-f(t)Q$ is self-adjoint on the single domain $Y$
(independent of $t$); moreover $t\mapsto H(t)$ belongs to
$C^1([a,b];\mathcal B(Y,L^2))$ with derivative $-f'(t)Q$, so the family has a
common domain and satisfies the regularity hypothesis of
[[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]].

## Facts & Assumptions

**Given:** $m,\omega,\hbar>0$, the oscillator data, $f\in C^1([a,b])$, $\psi\in Y$.

[F1] $H_{\mathrm{osc}}=\hbar\omega(N_\psi+\frac12I)$ with domain $D(N_\psi)$; $Q$ and $P$ are self-adjoint on their domains and the coupling identities hold on $D(N_\psi^{1/2})\supseteq D(N_\psi)$ ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]], [[thm-nrqm-oscillator-coherent-evolution-and-variance]], [[lem-nrqm-oscillator-closed-ladder-domains]]).

[F2] $D(a)=D(N^{1/2})$, $\|a\psi\|^2=\sum_nn|c_n|^2\le\|N^{1/2}\psi\|^2$ and $\|a^\dagger\psi\|^2=\sum_n(n+1)|c_n|^2=\|N^{1/2}\psi\|^2+\|\psi\|^2$ for $\psi=\sum_nc_n\psi_n$ ([[lem-nrqm-oscillator-closed-ladder-domains]]).

[F3] For $\psi\in D(N)$ one has $\|N\psi\|=\|N_\psi\psi\|$, $\|N_\psi^{1/2}\psi\|^2=\langle N_\psi\psi,\psi\rangle\le\|N_\psi\psi\|\|\psi\|$, and $H_{\mathrm{osc}}\ge\frac{\hbar\omega}{2}I$; hence $D(H_{\mathrm{osc}})=D(N_\psi)$ ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]], [[def-operator-norm]]).

[F4] Kato–Rellich: a symmetric perturbation $B$ with $D(A)\subseteq D(B)$ and $A$-bound $<1$ gives $A+B$ self-adjoint on $D(A)$; bounded operators have relative bound $0$ ([[thm-kato-rellich]], [[def-relative-boundedness-with-respect-to-an-operator]]).

## Proof

1.1 [Coupling bounds] By [F1] and the triangle inequality, $\|Q\psi\|\le\frac{\ell}{\sqrt2}(\|a_\psi\psi\|+\|a_\psi^\dagger\psi\|)$ and $\|P\psi\|\le\frac{\hbar}{\ell\sqrt2}(\|a_\psi\psi\|+\|a_\psi^\dagger\psi\|)$; inserting the exact norms of [F2] and using $\|a_\psi\psi\|\le(\|N^{1/2}\psi\|^2+\|\psi\|^2)^{1/2}\le\|a_\psi^\dagger\psi\|$ (for $n\ge0$) gives (a). [F1, F2, algebra]

2.1 [Relative bound] For $\psi\in Y=D(N_\psi)$, [F3] gives $\|N_\psi^{1/2}\psi\|^2\le\|N_\psi\psi\|\|\psi\|$; then step 1.1 yields $\|Q\psi\|\le\ell(\|N_\psi\psi\|\,\|\psi\|+\|\psi\|^2)^{1/2}\le\ell\bigl(\eta\|N_\psi\psi\|+(\eta^{-1}+1)\|\psi\|\bigr)$ by $2ab\le\eta a^2+\eta^{-1}b^2$ applied with $a=\|N_\psi\psi\|^{1/2}$, $b=\|\psi\|^{1/2}$; since $\|H_{\mathrm{osc}}\psi\|=\hbar\omega\|N_\psi\psi+\frac12\psi\|\ge\hbar\omega\|N_\psi\psi\|$, given $\eta>0$ choose the free constant so small that the coefficient of $\|N_\psi\psi\|$ is at most $\eta$, giving (b). [step 1.1, F3, algebra]

3.1 [Self-adjointness on the common domain] For fixed $t$, the operator $-f(t)Q$ is symmetric on $D(Q)\supseteq Y$ with $H_{\mathrm{osc}}$-bound $0<1$ by step 2.1, so [F4] gives that $H(t)$ is self-adjoint on $Y=D(H_{\mathrm{osc}})$. Since $Q:Y\to L^2$ is bounded (step 1.1 with [F3]) and $H_{\mathrm{osc}}:Y\to L^2$ is bounded, $H(t)\in\mathcal B(Y,L^2)$, and $t\mapsto H(t)$ is $C^1$ in $\mathcal B(Y,L^2)$ with derivative $-f'(t)Q$ because $f\in C^1$ and $Q$ is bounded $Y\to L^2$. [step 2.1, F1, F4, algebra] ∎
