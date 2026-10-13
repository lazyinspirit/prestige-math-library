---
id: lem-nrqm-central-free-operator-differential-identification
aliases: [nrqm-central-free-operator-differential-identification]
kind: lemma
domain: mathematics
title: "The three-dimensional free Schr\u00f6dinger operator as the weak Laplacian on its Sobolev domain"
status: published
origin: session
dependency_level: 1
deps: [thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, lem-weak-derivatives-are-polynomial-fourier-multipliers, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, thm-plancherel, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  thm-plancherel: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Theorem 7.8, printed page 168 (the free Schr\u00f6dinger operator and its domain), and Section 10.1, printed pages 221-222 (the weak Laplacian of the hydrogen Hamiltonian)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.2, printed pages 104-105 (the three-dimensional Schr\u00f6dinger equation with a central potential and its spherical Laplacian)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $m,\hbar>0$, put
$c:=2\pi^{2}\hbar^{2}/m$, and let $H_{0}$ be the free operator of
[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (b) with $d=3$, this $c$ and $b=0$:
$$H_{0}:=\mathcal F_{2}^{*}M_{c|\xi|^{2}}\mathcal F_{2},\qquad D(H_{0}):=\bigl\{f\in L^{2}(\mathbb R^{3};\mathbb C):|\xi|^{2}\mathcal F_{2}f\in L^{2}(\mathbb R^{3};\mathbb C)\bigr\},$$
where $\mathcal F_{2}$ is the unitary Plancherel transform of that theorem.
Let $D^{2}_{j}$ denote the second weak partial derivative in the $j$-th
coordinate, defined componentwise on the locally integrable classes of
$\mathbb R^{3}$ ([[def-weak-derivative-of-a-locally-integrable-function]]),
write $\Delta_{w}:=D^{2}_{1}+D^{2}_{2}+D^{2}_{3}$ for the weak Laplacian
(defined on the classes whose three second weak partial derivatives lie in
$L^{2}$), and let $W^{2,2}(\mathbb R^{3};\mathbb C)$ be the Sobolev space
([[def-sobolev-space-wkp-and-its-norm]]). Then:

(a) $D(H_{0})=W^{2,2}(\mathbb R^{3};\mathbb C)$ as sets and
$$H_{0}f=-\frac{\hbar^{2}}{2m}\,\Delta_{w}f\qquad\text{for every }f\in D(H_{0});$$
equivalently, $\mathcal F_{2}(H_{0}f)(\xi)=c|\xi|^{2}\mathcal F_{2}f(\xi)$ and
$\mathcal F_{2}\bigl(-\tfrac{\hbar^{2}}{2m}\Delta_{w}f\bigr)(\xi)=c|\xi|^{2}\mathcal F_{2}f(\xi)$
for almost every $\xi$, and the two $L^{2}$ classes agree.

(b) For every real bounded measurable $V:\mathbb R^{3}\to\mathbb R$, the
operator $H_{0}+M_{V}$ of clause (c) of the cited theorem, with domain
$D(H_{0})$, coincides with the operator $f\mapsto-\frac{\hbar^{2}}{2m}\Delta_{w}f+Vf$
on the same domain; in particular, for $E\in\mathbb R$ and
$\psi\in W^{2,2}(\mathbb R^{3};\mathbb C)$ the eigenvalue equation
$(H_{0}+M_{V})\psi=E\psi$ is equivalent to the weak equation
$-\frac{\hbar^{2}}{2m}\Delta_{w}\psi+V\psi=E\psi$ elementwise in
$L^{2}(\mathbb R^{3};\mathbb C)$.

The statement identifies operators on the same domain; it asserts neither
smoothness of the classes in $W^{2,2}$ nor any physical interpretation.

## Facts & Assumptions

**Given:** $m,\hbar>0$; $c=2\pi^{2}\hbar^{2}/m$; the operator $H_{0}$ of the cited theorem with $d=3$, this $c$ and $b=0$; the weak partial derivatives $D_{j}$, the second weak partial derivatives $D^{2}_{j}$ and the weak Laplacian $\Delta_{w}$; the Sobolev space $W^{2,2}(\mathbb R^{3};\mathbb C)$; a real bounded measurable $V$.

[F1] **Fourier multipliers of weak derivatives.** If $f,g\in L^{2}(\mathbb R^{n})$ with $D^{\alpha}f=g$ for a multi-index $|\alpha|\le2$, then $\mathcal F_{2}g(\xi)=(2\pi i\xi)^{\alpha}\mathcal F_{2}f(\xi)$ for almost every $\xi$; in $n=3$ the second derivative in the $j$-th coordinate has multiplier $-4\pi^{2}\xi_{j}^{2}$, so $D^{2}_{j}f$ is the $L^{2}$ class with $\mathcal F_{2}(D^{2}_{j}f)(\xi)=-4\pi^{2}\xi_{j}^{2}\mathcal F_{2}f(\xi)$, and, when all three second weak partials lie in $L^{2}$, $\mathcal F_{2}(\Delta_{w}f)(\xi)=-4\pi^{2}|\xi|^{2}\mathcal F_{2}f(\xi)$ for almost every $\xi$ ([[lem-weak-derivatives-are-polynomial-fourier-multipliers]]). The weak partial derivatives are the corresponding distributional derivatives of the regular distributions of these classes ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F2] **The free operator.** $H_{0}$ is self-adjoint, $D(H_{0})$ coincides with $W^{2,2}(\mathbb R^{3};\mathbb C)$ as a set with equivalent norms, $\mathcal F_{2}(H_{0}f)=c|\xi|^{2}\mathcal F_{2}f$ for every $f\in D(H_{0})$, and $H_{0}\ge0$ in the quadratic-form sense ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clauses (b), (c)).

[F3] **Sobolev weight characterisation.** For $f\in L^{2}(\mathbb R^{3})$ one has $f\in W^{2,2}$ if and only if $(1+4\pi^{2}|\xi|^{2})\mathcal F_{2}f\in L^{2}$, equivalently if and only if $\mathcal F_{2}f\in L^{2}$ and $|\xi|^{2}\mathcal F_{2}f\in L^{2}$; the bracket-weighted norm is equivalent to the weak-derivative norm ([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]] clause 2, [[def-sobolev-space-wkp-and-its-norm]]).

[F4] **Plancherel is injective.** The Plancherel transform $\mathcal F_{2}$ is a surjective linear isometry of $L^{2}(\mathbb R^{3};\mathbb C)$; in particular $\mathcal F_{2}g=0$ implies $g=0$ ([[thm-plancherel]]).

[F5] **Bounded perturbation.** For $V$ real, bounded and measurable, $M_{V}$ is the bounded multiplication operator of clause (a) of the cited theorem and $H_{0}+M_{V}$ is self-adjoint on $D(H_{0})=D(M_{V})\cap D(H_{0})$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clauses (a), (c)).

## Proof

**Proof technique:** direct; compare the Plancherel multipliers of $H_{0}$ and of the weak Laplacian, using the Fourier characterisation of the Sobolev space, and then add the bounded multiplication operator on the common domain.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Domain and regularity] By [F2] the sets $D(H_{0})$ and $W^{2,2}(\mathbb R^{3};\mathbb C)$ coincide. For $f\in D(H_{0})$, [F3] gives $\mathcal F_{2}f\in L^{2}$ and $|\xi|^{2}\mathcal F_{2}f\in L^{2}$, so each $\xi_{j}^{2}\mathcal F_{2}f$ lies in $L^{2}$ and, by [F1], each second weak partial derivative $D^{2}_{j}f$ lies in $L^{2}$ with that transform; hence $\Delta_{w}f\in L^{2}$ is defined and its Plancherel transform is the sum $\sum_{j=1}^{3}\bigl(-4\pi^{2}\xi_{j}^{2}\mathcal F_{2}f\bigr)=-4\pi^{2}|\xi|^{2}\mathcal F_{2}f$ almost everywhere. This proves the domain identity of (a) and defines the left-hand side of the multiplier comparison. [F1, F2, F3]

2.1 [Multiplier comparison] Fix $f\in D(H_{0})$. By [F2], $\mathcal F_{2}(H_{0}f)(\xi)=c|\xi|^{2}\mathcal F_{2}f(\xi)$ for almost every $\xi$. Let $g:=-\frac{\hbar^{2}}{2m}\Delta_{w}f$; by step 1.1 and [F1], $\mathcal F_{2}g(\xi)=-\frac{\hbar^{2}}{2m}\bigl(-4\pi^{2}|\xi|^{2}\bigr)\mathcal F_{2}f(\xi)=\frac{2\pi^{2}\hbar^{2}}{m}|\xi|^{2}\mathcal F_{2}f(\xi)=c|\xi|^{2}\mathcal F_{2}f(\xi)$ for almost every $\xi$. Hence $\mathcal F_{2}(H_{0}f-g)=0$ in $L^{2}$ and [F4] gives $H_{0}f=g$. This proves (a). [step 1.1, F1, F2, F4, algebra]

3.1 [Bounded perturbations] Let $V$ be real, bounded and measurable and let $f\in D(H_{0})$. By step 1.1, $f\in W^{2,2}$, so $\Delta_{w}f\in L^{2}$, and $Vf\in L^{2}$ because $V$ is bounded; moreover, by [F5] and step 2.1, $(H_{0}+M_{V})f=H_{0}f+Vf=-\frac{\hbar^{2}}{2m}\Delta_{w}f+Vf$ on the common domain $D(H_{0})$ of clause (c) of the cited theorem. Since the two operators have the same domain and the same values, they coincide; in particular the eigenvalue equation and the weak equation are the same elementwise identity in $L^{2}(\mathbb R^{3};\mathbb{C})$. This proves (b). [step 1.1, step 2.1, F1, F5, algebra] ∎

## Remarks

- **Why the factor $c$.** With the Plancherel convention $\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}\,dx$ the weak Laplacian has multiplier $-4\pi^{2}|\xi|^{2}$, so $-\frac{\hbar^{2}}{2m}\Delta_{w}$ has multiplier $\frac{2\pi^{2}\hbar^{2}}{m}|\xi|^{2}$: the constant $c$ of the cited theorem is fixed by this convention and is not a convention-free physical statement.
- **Scope.** The lemma compares two mathematical operators on $L^{2}(\mathbb R^{3};\mathbb C)$. It asserts no smoothness of $W^{2,2}$ classes, no boundary values, no self-adjointness beyond that of the cited theorem, and no identification of $H_{0}$ with any measured Hamiltonian.
