---
id: thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence
aliases: [nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence]
kind: theorem
domain: mathematics
title: "Vacuum emission Dyson convergence"
status: draft
origin: pipeline
dependency_level: 8
deps: [thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound, thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains, thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound: mathematical-premise
  thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains: mathematical-premise
  thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  thm-bochner-integrability-criterion: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Time-Dependent Perturbation Theory pp. 175-182 (Dyson series and interaction picture)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 5 pp. 123-131 (Stone's theorem, unitary dynamics and uniqueness)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Adopt the objects and
hypotheses of [[thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]]:
$d\ge1$, Hermitian matrices $H_a,D_1,\dots,D_J$ on $\mathbb C^d$, cutoff
$\Lambda>0$, transverse vectors $g_j$ with
$\operatorname{supp}g_j\subseteq\{0<\varepsilon\le\Lambda\}$ and
$g_j/\sqrt\varepsilon\in\mathfrak h$, coupling $\eta_0\in\mathbb R$,
$$H_0:=H_a\otimes I+I\otimes H_f,\qquad B:=\eta_0\sum_{j=1}^JD_j\otimes\phi(g_j),\qquad H:=H_0+B,$$
all with domain $C^d\otimes D(H_f)$ so that $H_0$ and $H$ are self-adjoint on
that domain. Fix $\hbar>0$, a unit vector $v_a\in\mathbb C^d$ and
$\Psi_0:=v_a\otimes\Omega$, and define the interaction-picture family
$$V(t):=e^{itH_0/\hbar}Be^{-itH_0/\hbar}\qquad(t\in\mathbb R).$$
For $n\ge0$ and $t\ge0$ let
$$\Psi_n(t):=\Bigl(\frac1{i\hbar}\Bigr)^{\!n}\int_{0<t_1<\cdots<t_n<t}V(t_1)\cdots V(t_n)\Psi_0\,dt_1\cdots dt_n$$
(iterated Bochner integral in $C^d\otimes D(H_f)$; $\Psi_0(t):=\Psi_0$). Put
$C:=2\sum_{j=1}^J\|D_j\|\,\|g_j\|/\hbar$ and $C':=C\Lambda$. Then:

(a) for all $n\ge0$ and $t\ge0$,
$$\|\Psi_n(t)\|\le\frac{(|\eta_0|Ct)^n}{\sqrt{n!}};$$

(b) the vectors $\Psi_n(t)$ lie in $C^d\otimes D(H_f)$, the series
$\sum_{n\ge0}\Psi_n(t)$ converges in the graph norm of $H_f$ uniformly for $t$
in compact subsets of $[0,\infty)$, and its sum $\Psi(t)$ satisfies
$$i\hbar\,\partial_t\Psi(t)=V(t)\Psi(t),\qquad \Psi(0)=\Psi_0 ;$$

(c) the Dyson sum solves the actual self-adjoint evolution:
$e^{-itH_0/\hbar}\Psi(t)=e^{-itH/\hbar}\Psi_0$ for every $t\ge0$;

(d) explicit tail bound: for $0\le t\le T$ and $N\ge1$,
$$\Bigl\|e^{-itH/\hbar}\Psi_0-e^{-itH_0/\hbar}\sum_{n=0}^{N-1}\Psi_n(t)\Bigr\|\le\sum_{n\ge N}\frac{(|\eta_0|CT)^n}{\sqrt{n!}} .$$

The convergence is proved for the actual self-adjoint $H$ on the stated domain;
this is not a formal manipulation of divergent series, and no all-time
weak-coupling, Markov or exponential-decay statement is made.

## Facts & Assumptions
**Given:** the self-adjoint operators $H_0,H$ and the bound-zero perturbation $B$ on $C^d\otimes D(H_f)$, the interaction-picture family $V(t)$ and the Dyson terms $\Psi_n(t)$.

[F1] $H_0$ and $H=H_0+B$ are self-adjoint on $C^d\otimes D(H_f)$; $B$ is symmetric there with $\|B\Xi\|\le a\|H_0\Xi\|+b\|\Xi\|$ for some $a<1$ and finite $b$ ([[thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]]).

[F2] Sector bound: if $\Xi\in F(\mathfrak h)$ has all particle numbers $\le m$, then $\|\phi(g)\Xi\|\le2\sqrt{m+1}\,\|g\|\,\|\Xi\|$, because $\|A_+(g)\psi_n\|\le\sqrt{n+1}\|g\|\|\psi_n\|$ and $\|A_-(g)\psi_n\|\le\sqrt{n+1}\|g\|\|\psi_{n+1}\|$ by the sector formulas and $\|\Psi_g^{(n)}\|\le\|g\|$ ([[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]], [[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-permutation-sector-projections]]).

[F3] Commutator identity: on the core $F_0$ and with $\varepsilon g\in\mathfrak h$, $[H_f,\phi(g)]=A_+(\varepsilon g)-A_-(\varepsilon g)=:\phi_\varepsilon(g)$, and $\|\phi_\varepsilon(g)\Xi\|\le2\Lambda\sqrt{m+1}\|g\|\|\Xi\|$ on sectors $\le m$; the identity follows by comparing the sector formulas for $H_fA_\pm(g)$ and $A_\pm(g)H_f$ ([[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]], [[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]]).

[F4] Stone's theorem: $e^{itH_0/\hbar}$ is a strongly continuous unitary group preserving $D(H_0)=C^d\otimes D(H_f)$ with $H_0e^{itH_0/\hbar}=e^{itH_0/\hbar}H_0$ there ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]).

[F5] Bochner integrals of continuous Banach-valued functions on compact intervals exist and satisfy the norm inequality and the fundamental theorem of calculus ([[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).




## Proof

1.1 [Vertex bounds] Let $\Xi\in C^d\otimes F(\mathfrak h)$ have photon numbers $\le m$. Since $e^{\pm it H_0/\hbar}$ preserve the photon number (they act as $e^{\pm itH_f/\hbar}$ on the second factor and $e^{itH_f/\hbar}$ commutes with all $\Pi_n$ by [[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]] (c)), [F2] gives $\|\phi(g_j)e^{-itH_0/\hbar}\Xi\|\le2\sqrt{m+1}\|g_j\|\,\|\Xi\|$, so $\|V(t)\Xi\|\le2\sqrt{m+1}\sum_j\|D_j\|\,\|g_j\|\,\|\Xi\|=:\sqrt{m+1}\,\gamma\|\Xi\|$ with $\gamma:=2\sum_j\|D_j\|\|g_j\|$. Similarly, using [F3] and $\|\varepsilon g_j\|\le\Lambda\|g_j\|$ with $\varepsilon g_j\in\mathfrak h$, $\|\,[H_f,V(t)]\,\Xi\|\le\sqrt{m+1}\,\gamma\Lambda\|\Xi\|$. [F2, F3, F4, algebra]

2.1 [Norm bounds for the Dyson terms] Since $V(t)$ preserves $C^d\otimes F(\mathfrak h)$ and increases the maximal photon number by at most one, the vector $V(t_1)\cdots V(t_n)\Psi_0$ has photon numbers $\le n$ and its norm is bounded recursively by $\gamma\sqrt{k}\cdot\|\cdot\|$ at the $k$-th vertex for $k=1,\dots,n$: applying step 1.1 to the vector after $k-1$ vertices (photon numbers $\le k-1$) gives the factor $\gamma\sqrt{k}$. Hence $\|V(t_1)\cdots V(t_n)\Psi_0\|\le\gamma^n\sqrt{n!}$, and the volume of the simplex $\{0<t_1<\cdots<t_n<t\}$ is $t^n/n!$, so [F5] gives $\|\Psi_n(t)\|\le(|\eta_0|/\hbar)^n\gamma^n\sqrt{n!}\cdot t^n/n!=(|\eta_0|Ct)^n/\sqrt{n!}$ with $C=\gamma/\hbar$. This is (a). [F5, step 1.1, algebra]

3.1 [Graph-norm bounds] Similarly, inserting $H_f$ in front of a product and commuting it to the right through the $n$ vertices by [F3] gives $H_fV(t_1)\cdots V(t_n)\Psi_0=\sum_{k=1}^nV(t_1)\cdots V(t_{k-1})\,\eta_0\sum_jD_j\otimes\phi_\varepsilon(g_j)\,V(t_{k+1})\cdots V(t_n)\Psi_0$ (the term with $H_f\Psi_0=0$ vanishes); each summand has norm $\le\gamma^n\Lambda\sqrt{n!}\cdot(\text{photon-number factor at the }k\text{-th position})$, and the sector bookkeeping of step 2.1 at the $k$-th position is unchanged, so every summand is bounded by $\gamma^n\Lambda\sqrt{n!}$ and $H_f\Psi_n(t)$ is bounded in norm by $n\Lambda(|\eta_0|Ct)^n/\sqrt{n!}$. [F3, F5, step 1.1, step 2.1, algebra]

4.1 [Convergence, integral equation and differentiation] The bounds of steps 2.1 and 3.1 show that both $\sum_n\Psi_n(t)$ and $\sum_nH_f\Psi_n(t)$ are dominated, uniformly for $t$ in compact sets, by $\sum_n(1+n\Lambda)(|\eta_0|CT)^n/\sqrt{n!}$, which converges because $n!(4|\eta_0|CT)^{2n}\to\infty$; hence the series converges in the graph norm of $H_f$ on $C^d\otimes D(H_f)$, uniformly on compact time sets, and each $\Psi_n(t)$ depends continuously on $t$ in the graph norm by [F5]. The identity $\Psi_{n+1}(t)=\frac1{i\hbar}\int_0^tV(s)\Psi_n(s)\,ds$ and uniform convergence permit the interchange of the sum and the Bochner integral, giving $\Psi(t)=\Psi_0+\frac1{i\hbar}\int_0^tV(s)\Psi(s)\,ds$; differentiating by the fundamental theorem [F5] gives $i\hbar\partial_t\Psi(t)=V(t)\Psi(t)$ and $\Psi(0)=\Psi_0$. This is (b). [F5, step 2.1, step 3.1, algebra]

5.1 [Identification with the Stone evolution] Put $U(t):=e^{-itH_0/\hbar}\Psi(t)$. By [F4] and step 4.1, $U(t)\in C^d\otimes D(H_f)=D(H)$ and $i\hbar\,U'(t)=i\hbar\bigl(-\tfrac i\hbar H_0\bigr)U(t)+e^{-itH_0/\hbar}i\hbar\Psi'(t)=H_0U(t)+e^{-itH_0/\hbar}V(t)\Psi(t)=H_0U(t)+BU(t)=HU(t)$, and $U(0)=\Psi_0$. If $U_1,U_2$ are two such solutions in $D(H)$ with $U_1(0)=U_2(0)$, then $w:=U_1-U_2$ satisfies $i\hbar w'=Hw$ and $\frac{d}{dt}\|w\|^2=\frac2\hbar\operatorname{Re}\langle Hw,w\rangle\cdot(-i)(i)=0$ because $H$ is self-adjoint ([F1]) and $\langle Hw,w\rangle\in\mathbb R$; hence $w=0$. Therefore $U(t)=e^{-itH/\hbar}\Psi_0$, which is (c). [F1, F4, step 4.1, algebra]

6.1 [Tail bound and conclusion] For $0\le t\le T$, $e^{-itH/\hbar}\Psi_0-e^{-itH_0/\hbar}\sum_{n<N}\Psi_n(t)=e^{-itH_0/\hbar}\sum_{n\ge N}\Psi_n(t)$ by step 5.1, whose norm is at most $\sum_{n\ge N}(|\eta_0|CT)^n/\sqrt{n!}$ by step 2.1 and unitarity of $e^{-itH_0/\hbar}$; this is (d). The scope paragraph of the statement records that only convergence on finite times and the stated identification are asserted, and no weak-coupling or Markov statement is claimed. [F4, step 2.1, step 5.1, algebra] ∎
