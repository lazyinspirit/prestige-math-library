---
id: thm-nrqm-coulomb-infinitesimal-kinetic-bound
aliases: [nrqm-coulomb-coulomb-infinitesimal-kinetic-bound]
kind: theorem
domain: mathematics
title: "Coulomb infinitesimal kinetic bound"
status: published
origin: pipeline
dependency_level: 1
deps: [lem-nrqm-coulomb-three-dimensional-hardy-bound, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-kato-rellich, def-relative-boundedness-with-respect-to-an-operator, def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-sobolev-space-wkp-and-its-norm, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, thm-plancherel, lem-weak-derivatives-are-polynomial-fourier-multipliers, cor-cauchy-schwarz-inequality-for-l-two, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  lem-nrqm-coulomb-three-dimensional-hardy-bound: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-kato-rellich: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  thm-plancherel: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Theorem 6.4 p. 135 (Kato-Rellich) and Section 10.1 pp. 221-222 (Theorem 10.2: the Coulomb potential is relatively compact, hence infinitesimally bounded, with respect to -Laplacian; H^{(1)} is self-adjoint on H^2)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 9.3 pp. 278-287 (Sobolev inequalities) and Comments on Chapter 9, p. 313 (Hardy's inequality, the model singular-potential estimate)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma>0$, let
$H=L^2(\mathbb R^3;\mathbb C)$ ([[def-hilbert-space]],
[[def-l-p-space-as-a-quotient-by-null-functions]]), and let
$H_0:=-\Delta$ be the free operator of
[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
with domain $D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$
([[def-sobolev-space-wkp-and-its-norm]]): $H_0=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$
and $H_0u=-\Delta u$ for $u\in D(H_0)$, where $\Delta u$ is the distributional
Laplacian. Write $M$ for the multiplication operator
$$M u:=\frac{u}{|\cdot|},\qquad D(M):=\Bigl\{u\in H:\frac{u}{|\cdot|}\in H\Bigr\},$$
and write $\|u\|_2=\|u\|_H$. Then:

(a) for every $u\in D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$ one has $u/|\cdot|\in L^2$ and

$$\Bigl\|\frac{u}{|\cdot|}\Bigr\|_2\le 2\sqrt{\|u\|_2\,\|\Delta u\|_2}\,,\qquad \Bigl\|\frac{u}{|\cdot|}\Bigr\|_2\le \eta\|\Delta u\|_2+\frac1\eta\|u\|_2\quad(\eta>0);$$

(b) $M$ is a self-adjoint operator on $H$ with $D(H_0)\subseteq D(M)$, symmetric on $D(H_0)$, with $H_0$-bound zero in the sense that for every $\eta>0$ the pair $(\eta,\eta^{-1})$ is admissible for $M$ relative to $H_0$;

(c) for every $\gamma>0$ the operator
$$C:=H_0-\gamma M,\qquad D(C):=D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C),$$
is self-adjoint on $H$, bounded below, and acts by $Cu=-\Delta u-\gamma u/|\cdot|$ for every $u\in D(C)$; for every $\eta\in(0,1/\gamma)$ one has $C\ge-\gamma\eta^{-1}/(1-\gamma\eta)$ in the quadratic-form sense.

No sharp lower bound of $C$ is claimed here, and no physical interpretation of
$C$, $H_0$, $\gamma$ or $\Delta$ is asserted.

## Facts & Assumptions

**Given:** the free operator $H_0=-\Delta$ with $D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$; the multiplier $M$; the constant $\gamma>0$; a function $u$ of the stated regularity.

[F1] $H_0=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$ is self-adjoint on $D(H_0)=\{f:|\xi|^2\mathcal F_2f\in L^2\}=W^{2,2}(\mathbb R^3;\mathbb C)$ as a set with equivalent norms, $H_0\ge0$ in the quadratic-form sense, and $H_0f=-\Delta f$ for Schwartz $f$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], [[def-sobolev-space-wkp-and-its-norm]]).

[F2] For every $u\in W^{1,2}(\mathbb R^3;\mathbb C)$ one has $u/|\cdot|\in L^2$ and $\|u/|\cdot|\|_2\le2\|\nabla u\|_2$ ([[lem-nrqm-coulomb-three-dimensional-hardy-bound]]).

[F3] Plancherel: $\mathcal F_2$ is unitary and for the weak derivatives of $u\in W^{2,2}$ the multipliers satisfy $\mathcal F_2(\partial_i u)(\xi)=2\pi i\xi_i\mathcal F_2u(\xi)$ and $\mathcal F_2(\Delta u)(\xi)=-4\pi^2|\xi|^2\mathcal F_2u(\xi)$ a.e.; equivalently $\|\nabla u\|_2^2=\int4\pi^2|\xi|^2|\mathcal F_2u|^2$ and $\|\Delta u\|_2^2=\int16\pi^4|\xi|^4|\mathcal F_2u|^2$ ([[thm-plancherel]], [[lem-weak-derivatives-are-polynomial-fourier-multipliers]], [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]]).

[F4] Cauchy-Schwarz: $\int|fg|\le\|f\|_2\|g\|_2$ ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[F5] Kato-Rellich: if $A$ is self-adjoint, $B$ symmetric, $D(A)\subseteq D(B)$ and the $A$-bound of $B$ is less than one with admissible pair $(a,b)$, then $A+B$ on $D(A)$ is self-adjoint and, when $A\ge\gamma_0$, satisfies $A+B\ge\gamma_0-\max\{a|\gamma_0|+b,b/(1-a)\}$ ([[thm-kato-rellich]], [[def-relative-boundedness-with-respect-to-an-operator]]).

[F6] If $a$ is a real finite-valued measurable function on $\mathbb R^3$, then $M_a f:=af$ on $\{f\in H:af\in H\}$ is self-adjoint, and it is symmetric on every subspace on which both sides of the pairing are integrable, in particular on the set of $f$ with $af\in H$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] (a), [[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

## Proof

1.1 [Kinetic inequality] Let $u\in W^{2,2}(\mathbb R^3;\mathbb C)$ and put $g:=\mathcal F_2u$. By [F3], $\|\nabla u\|_2^2=\int4\pi^2|\xi|^2|g(\xi)|^2\,d\xi$ and $\|\Delta u\|_2^2=\int(4\pi^2|\xi|^2)^2|g(\xi)|^2\,d\xi$, while $\|u\|_2^2=\int|g|^2$. Writing $4\pi^2|\xi|^2|g|^2=(|g|)(4\pi^2|\xi|^2|g|)$ and applying [F4] to the two factors gives $\|\nabla u\|_2^2\le\|u\|_2\|\Delta u\|_2$. [F3, F4, algebra]

2.1 [Infinitesimal Coulomb bound] Combining step 1.1 with [F2] yields $\|u/|\cdot|\|_2\le2\|\nabla u\|_2\le2\sqrt{\|u\|_2\|\Delta u\|_2}$. For $\eta>0$ the arithmetic-geometric mean inequality $2\sqrt{ab}\le\eta a+\eta^{-1}b$ applied to $a=\|\Delta u\|_2$, $b=\|u\|_2$ gives $2\sqrt{\|u\|_2\|\Delta u\|_2}\le\eta\|\Delta u\|_2+\eta^{-1}\|u\|_2$. This proves (a). [step 1.1, F2, algebra]

3.1 [Relative bound of the multiplier] By [F6] applied to $a(x)=1/|x|$ (finite-valued on $\mathbb R^3\setminus\{0\}$ and arbitrary, say $0$, at the origin, a null set) the operator $M$ is self-adjoint on $D(M)=\{f:f/|\cdot|\in H\}$, and $M$ is symmetric on $D(M)$. Step 2.1 shows $D(H_0)=W^{2,2}\subseteq D(M)$ and $\|M u\|_2=\|u/|\cdot|\|_2\le\eta\|\Delta u\|_2+\eta^{-1}\|u\|_2=\eta\|H_0u\|_2+\eta^{-1}\|u\|_2$ for every $u\in D(H_0)$, since $\Delta u=-H_0u$ on $D(H_0)$ by [F1] and [F3]. Hence $(\eta,\eta^{-1})$ is an admissible pair for $M$ relative to $H_0$, and the $H_0$-bound of $M$ is zero; this is (b). [step 2.1, F1, F3, F6, algebra]

4.1 [Self-adjointness of the Coulomb operator] Fix $\gamma>0$ and let $\eta\in(0,1/\gamma)$. Then $B:=-\gamma M$ is symmetric with $D(H_0)\subseteq D(B)$ and admissible pair $(a,b)=(\gamma\eta,\gamma\eta^{-1})$ with $a<1$; indeed $\|Bu\|_2=\gamma\|Mu\|_2\le\gamma\eta\|H_0u\|_2+\gamma\eta^{-1}\|u\|_2$ by step 3.1. By [F5] with $A=H_0\ge0$ (so $\gamma_0=0$) the operator $C=H_0+B$ on $D(H_0)$ is self-adjoint with $C\ge-\max\{0,\ b/(1-a)\}=-\gamma\eta^{-1}/(1-\gamma\eta)$. Moreover $Cu=H_0u-\gamma u/|\cdot|=-\Delta u-\gamma u/|\cdot|$ for $u\in D(H_0)$, by [F1] and [F3]; this is (c). [step 3.1, F1, F3, F5, algebra] ∎
