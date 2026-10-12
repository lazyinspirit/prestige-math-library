---
id: thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty
aliases: [nrqm-magnetic-and-detection-covariance-refined-uncertainty]
kind: theorem
domain: mathematics
title: "Covariance-refined preparation uncertainty without operator products"
status: draft
origin: pipeline
dependency_level: 1
deps: [lem-nrqm-composites-weak-form-robertson-uncertainty, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-inner-product-space, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-weak-form-robertson-uncertainty: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1 pp. 55-57 and Section 3.1 pp. 88-92 (symmetric operators, variances and the Robertson inequality)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5 'Uncertainty Principle and Compatible Observables', pp. 1-8 (variance, covariance and Cauchy-Schwarz refined uncertainty)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\mathcal H$ be a complex Hilbert space with inner product linear in the first
argument ([[def-inner-product-space]], [[def-hilbert-space]]), let $A,B$ be
symmetric densely defined operators on $\mathcal H$
([[def-symmetric-self-adjoint-and-essentially-self-adjoint]],
[[def-adjoint-of-a-densely-defined-unbounded-operator]]), and let
$u\in D(A)\cap D(B)$ satisfy $\|u\|=1$. Put
$$a:=\langle Au,u\rangle,\quad b:=\langle Bu,u\rangle,\quad x:=(A-a)u,\quad y:=(B-b)u,\quad \Delta A:=\|x\|,\quad\Delta B:=\|y\|,$$
and define the **covariance** of the pair $(A,B)$ in the preparation $u$ by
$\operatorname{Cov}_u(A,B):=\operatorname{Re}\langle x,y\rangle$.
Then:

(a) $a,b\in\mathbb R$; $x,y\in\mathcal H$; and
$\operatorname{Cov}_u(A,B)\in\mathbb R$ is symmetric in its two arguments:
$\operatorname{Cov}_u(A,B)=\operatorname{Cov}_u(B,A)$;

(b) *covariance-refined bound:*
$$(\Delta A)^2(\Delta B)^2\ge\bigl[\operatorname{Cov}_u(A,B)\bigr]^2 +\bigl[\operatorname{Im}\langle x,y\rangle\bigr]^2 \ge\bigl[\operatorname{Cov}_u(A,B)\bigr]^2,$$
so in particular $\Delta A\,\Delta B\ge|\operatorname{Cov}_u(A,B)|$;

(c) equality holds in (b)'s first inequality if and only if $x$ and $y$ are
linearly dependent (in the convention that $x=0$ or $y=0$ counts as
dependence);

(d) if in addition $u\in D(AB)\cap D(BA)$ — that is $Bu\in D(A)$ and
$Au\in D(B)$ — then the pairing
$\langle[A,B]u,u\rangle:=\langle ABu,u\rangle-\langle BAu,u\rangle$ is
defined and
$$\langle[A,B]u,u\rangle=-2i\,\operatorname{Im}\langle x,y\rangle,$$
in particular it is purely imaginary, and consequently
$$(\Delta A)^2(\Delta B)^2\ge\bigl[\operatorname{Cov}_u(A,B)\bigr]^2 +\tfrac14\bigl|\langle[A,B]u,u\rangle\bigr|^2, \qquad \Delta A\,\Delta B\ge\tfrac12\bigl|\langle[A,B]u,u\rangle\bigr| .$$

Clauses (a)-(c) use no product $AB$ or $BA$ and no assumption on the domains
of such products. The quantities are preparation quantities of the vector $u$;
no measurement model, apparatus error or energy-time interpretation is
asserted.

## Facts & Assumptions

**Given:** symmetric densely defined $A,B$ on a complex Hilbert space $\mathcal H$, a unit vector $u\in D(A)\cap D(B)$, the numbers $a,b$, vectors $x,y$ and $\Delta A,\Delta B$.

[F1] $(T-\lambda)v\in\mathcal H$ for $T$ symmetric, $v\in D(T)$, $\lambda\in\mathbb R$; and $\langle Tv,v\rangle=\overline{\langle Tv,v\rangle}$, so the mean of a symmetric operator in any vector of its domain is real ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-adjoint-of-a-densely-defined-unbounded-operator]]).

[F2] Cauchy–Schwarz in a complex inner product space: $|\langle v,w\rangle|\le\|v\|\,\|w\|$, with equality if and only if $v,w$ are linearly dependent; and $|\langle v,w\rangle|^2=(\operatorname{Re}\langle v,w\rangle)^2+(\operatorname{Im}\langle v,w\rangle)^2$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F3] The weak-form Robertson lemma of [[lem-nrqm-composites-weak-form-robertson-uncertainty]] states in clause (b) exactly the inequality $(\Delta A)^2(\Delta B)^2\ge[\operatorname{Re}\langle x,y\rangle]^2+[\operatorname{Im}\langle x,y\rangle]^2$ for the present data; it is recorded here for comparison, and is derived below from [F2] without operator products.

[F4] If $v,w\in\mathcal H$ then $\langle w,v\rangle=\overline{\langle v,w\rangle}$, hence $\operatorname{Re}\langle w,v\rangle=\operatorname{Re}\langle v,w\rangle$.

## Proof

1.1 [Means, centered vectors and covariance] By [F1], $a$ and $b$ are real, so $x=(A-a)u$ and $y=(B-b)u$ are well-defined vectors of $\mathcal H$ (the sums $(A-a)u=Au-au$ lie in $\mathcal H$ because $Au,Bu\in\mathcal H$ and $a,b$ are scalars). By [F4], $\operatorname{Cov}_u(B,A)=\operatorname{Re}\langle y,x\rangle=\operatorname{Re}\langle x,y\rangle=\operatorname{Cov}_u(A,B)$, which is real by definition. This is (a). [given, F1, F4]

1.2 [The refined bound] Apply [F2] to $x,y$: $\Delta A\,\Delta B=\|x\|\,\|y\|\ge|\langle x,y\rangle|$, and [F2] again gives $|\langle x,y\rangle|^2=(\operatorname{Re}\langle x,y\rangle)^2+(\operatorname{Im}\langle x,y\rangle)^2=\operatorname{Cov}_u(A,B)^2+(\operatorname{Im}\langle x,y\rangle)^2$. Squaring the first inequality and substituting the second gives $(\Delta A)^2(\Delta B)^2\ge|\langle x,y\rangle|^2\ge\operatorname{Cov}_u(A,B)^2$, which is (b) and reproduces [F3] without any operator product. [given, F2, F3, algebra]

2.1 [Equality case] Equality holds in $(\Delta A)^2(\Delta B)^2\ge[\operatorname{Cov}_u(A,B)]^2+[\operatorname{Im}\langle x,y\rangle]^2$ exactly when equality holds in $\|x\|\,\|y\|\ge|\langle x,y\rangle|$, since the second step $|\langle x,y\rangle|^2\ge(\operatorname{Re}\langle x,y\rangle)^2$ is an identity with $[\operatorname{Im}\langle x,y\rangle]^2$ added, i.e. it is always an equality. By [F2] that holds exactly for linearly dependent $x,y$. This is (c). [given, F2, step 1.2, algebra]

3.1 [Commutator pairing] Assume $u\in D(AB)\cap D(BA)$. Then $Bu\in D(A)$ and $Au\in D(B)$, so both $\langle ABu,u\rangle=\langle Bu,Au\rangle$ (symmetry of $A$ applied to $Bu\in D(A)$ and $u$) and $\langle BAu,u\rangle=\langle Au,Bu\rangle$ (symmetry of $B$) are defined. Writing $z:=\langle x,y\rangle$, the computation $z=\langle Au,Bu\rangle-ab-ab+ab=\langle Au,Bu\rangle-ab$ with real $a,b$ gives $\overline z=\langle Bu,Au\rangle-ab$ by [F4]. Hence $\langle[A,B]u,u\rangle=(\overline z+ab)-(z+ab)=\overline z-z=-2i\operatorname{Im}z=-2i\operatorname{Im}\langle x,y\rangle$, which is purely imaginary. Substituting into (b) gives $(\Delta A)^2(\Delta B)^2\ge\operatorname{Cov}_u(A,B)^2+\frac14|\langle[A,B]u,u\rangle|^2$ and, taking square roots, $\Delta A\Delta B\ge\frac12|\langle[A,B]u,u\rangle|$. This is (d). [given, step 1.2, F1, F4, algebra] ∎
