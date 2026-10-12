---
id: lem-nrqm-potentials-free-operator-differential-identification
aliases: [nrqm-potentials-free-operator-differential-identification]
kind: lemma
domain: mathematics
title: "The one-dimensional free Schr\"odinger operator as the weak second-derivative operator"
status: draft
origin: session
dependency_level: 1
deps: [thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, lem-weak-derivatives-are-polynomial-fourier-multipliers, def-sobolev-space-wkp-and-its-norm, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, thm-plancherel, def-weak-derivative-of-a-locally-integrable-function, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  thm-plancherel: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 7.2 printed pages 167-169 (PDF pages 179-181): the free Schroedinger operator and its domain; Section 9.1 printed pages 181-187 (PDF pages 193-199): one-dimensional Sturm-Liouville operators"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 2.1, printed pages 20-27 (PDF pages 23-30): the one-dimensional free Schroedinger equation and its kinetic operator"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $m,\hbar>0$, put
$c:=2\pi^2\hbar^2/m$, and let $H_0$ be the free one-dimensional operator of
[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (b) with $d=1$, this $c$ and $b=0$:
$$H_0:=\mathcal F_2^{*}M_{c|\xi|^2}\mathcal F_2,\qquad D(H_0):=\bigl\{f\in L^2(\mathbb R;\mathbb C):|\xi|^2\mathcal F_2f\in L^2(\mathbb R;\mathbb C)\bigr\},$$
where $\mathcal F_2$ is the unitary Plancherel transform of that theorem and
$M_{c|\xi|^2}$ is multiplication by the function $\xi\mapsto c|\xi|^2$. Let
$D^2$ denote the second weak derivative, defined componentwise on the
locally integrable classes of $\mathbb R$
([[def-weak-derivative-of-a-locally-integrable-function]]), and let
$W^{2,2}(\mathbb R;\mathbb C)$ be the Sobolev space
([[def-sobolev-space-wkp-and-its-norm]]). Then:

(a) $D(H_0)=W^{2,2}(\mathbb R;\mathbb C)$ as sets and
$$H_0f=-\frac{\hbar^2}{2m}\,D^2f\qquad\text{for every }f\in D(H_0);$$
equivalently, $\mathcal F_2(H_0f)(\xi)=c|\xi|^2\mathcal F_2f(\xi)$ and
$\mathcal F_2\bigl(-\tfrac{\hbar^2}{2m}D^2f\bigr)(\xi)=c|\xi|^2\mathcal F_2f(\xi)$
for almost every $\xi$, and the two $L^2$ classes agree.

(b) For every real bounded measurable $V:\mathbb R\to\mathbb R$, the operator
$H_0+M_V$ of clause (c) of the cited theorem, with domain $D(H_0)$, coincides
with the operator $f\mapsto-\frac{\hbar^2}{2m}D^2f+Vf$ on the same domain; in
particular, for $E\in\mathbb R$ and $\psi\in W^{2,2}(\mathbb R;\mathbb C)$ the
eigenvalue equation $(H_0+M_V)\psi=E\psi$ is equivalent to the weak equation
$-\frac{\hbar^2}{2m}D^2\psi+V\psi=E\psi$ elementwise in $L^2(\mathbb R;\mathbb C)$.

The statement identifies operators on the same domain; it asserts neither
smoothness of the classes in $W^{2,2}$ nor any physical interpretation.

## Facts & Assumptions

**Given:** $m,\hbar>0$; $c=2\pi^2\hbar^2/m$; the operator $H_0$ of the cited theorem with $d=1$, $c$ and $b=0$; the weak derivative $D$ and the second weak derivative $D^2$; the Sobolev space $W^{2,2}(\mathbb R;\mathbb C)$; a real bounded measurable $V$.

[F1] **Fourier multipliers of weak derivatives.** For every $u\in L^2(\mathbb R^n)$ whose weak derivatives $D^\alpha u$ of all multi-indices $|\alpha|\le k$ again lie in $L^2$ and every such $\alpha$, the unitary Plancherel transforms satisfy $\mathcal F_2(D^\alpha u)(\xi)=(2\pi i\xi)^\alpha\mathcal F_2u(\xi)$ for almost every $\xi$ ([[lem-weak-derivatives-are-polynomial-fourier-multipliers]]). In one dimension with $\alpha=(2)$ this reads $\mathcal F_2(D^2u)(\xi)=-4\pi^2\xi^2\mathcal F_2u(\xi)$ a.e.; in particular $D^2u$ is the $L^2$ class with that Plancherel transform.

[F2] **The free operator.** $H_0$ is self-adjoint, $D(H_0)$ coincides with $W^{2,2}(\mathbb R;\mathbb C)$ as a set with equivalent norms, and for every $f\in D(H_0)$, $\mathcal F_2(H_0f)=c|\xi|^2\mathcal F_2f$; moreover $H_0\ge b=0$ in the quadratic-form sense ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clauses (b), (c)).

[F3] **Plancherel is injective.** The Plancherel transform $\mathcal F_2$ is a surjective linear isometry of $L^2(\mathbb R;\mathbb C)$; in particular $\mathcal F_2g=0$ implies $g=0$ ([[thm-plancherel]], [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]]).

[F4] **Boundary of the construction.** For real bounded measurable $V$, $M_V$ is the bounded multiplication operator of clause (a) of the cited theorem and $H_0+M_V$ is self-adjoint on $D(H_0)$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clauses (a), (c)).

## Proof

**Proof technique:** direct; compare the Plancherel multipliers of $H_0$ and of the weak second derivative, using the Fourier characterization of the Sobolev space and the injectivity of Plancherel.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Domain] By [F2] the sets $D(H_0)$ and $W^{2,2}(\mathbb R;\mathbb C)$ coincide, and by [F1] a class $u\in L^2(\mathbb R;\mathbb C)$ has a second weak derivative in $L^2$ exactly when $\xi\mapsto(2\pi\xi)^2\mathcal F_2u(\xi)$ is in $L^2$, i.e. exactly when $|\xi|^2\mathcal F_2u\in L^2$; this is the defining condition of $D(H_0)$ in the statement, so the domain identity of (a) holds with no appeal to any additional regularity. [given, F1, F2]

1.2 [Multiplier comparison] Fix $f\in D(H_0)$. By [F2], $\mathcal F_2(H_0f)(\xi)=c|\xi|^2\mathcal F_2f(\xi)$ for almost every $\xi$. Let $g:=-\frac{\hbar^2}{2m}\,D^2f$; since $f\in W^{2,2}$, $D^2f\in L^2$ and [F1] gives $\mathcal F_2g(\xi)=-\frac{\hbar^2}{2m}\bigl(-4\pi^2\xi^2\bigr)\mathcal F_2f(\xi)=\frac{2\pi^2\hbar^2}{m}\xi^2\mathcal F_2f(\xi)=c|\xi|^2\mathcal F_2f(\xi)$ for almost every $\xi$. Hence $\mathcal F_2(H_0f-g)=0$ in $L^2$, and [F3] gives $H_0f=g$. This proves (a). [given, F1, F2, F3, algebra]

2.1 [Bounded perturbations] Let $V$ be real, bounded and measurable and let $f\in D(H_0)$. By step 1.1 $f\in W^{2,2}$, so $-\frac{\hbar^2}{2m}D^2f\in L^2$ by [F1] and $Vf\in L^2$ because $V$ is bounded; moreover $(H_0+M_V)f=H_0f+Vf=-\frac{\hbar^2}{2m}D^2f+Vf$ by step 1.2 and the definition of $M_V$, on the common domain $D(H_0)=D(M_V)\cap D(H_0)$ of clause (c) of the cited theorem. Since the two operators have the same domain and the same values, they coincide; the eigenvalue equation and the weak equation are therefore the same elementwise identity in $L^2$. This proves (b). [step 1.1, step 1.2, F1, F4, algebra] ∎

## Remarks

- **Why the factor $c$.** With the Plancherel convention
  $\widehat f(\xi)=\int f(x)e^{-2\pi ix\xi}dx$ the weak Laplacian has multiplier
  $-4\pi^2|\xi|^2$, so $-\frac{\hbar^2}{2m}D^2$ has multiplier
  $\frac{2\pi^2\hbar^2}{m}|\xi|^2$: the constant $c$ of the cited theorem is
  fixed by this convention and not a convention-free physical statement.
- **What is not asserted.** The lemma compares two mathematical operators. It
  asserts no smoothness of $W^{2,2}$ classes, no boundary values, no
  self-adjointness statement beyond that of the cited theorem, and no
  identification with any measured Hamiltonian.
