---
id: lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound
aliases: [nrqm-uncertainty-schrodinger-robertson-anticommutator-bound]
kind: lemma
domain: mathematics
title: "The Schroedinger-Robertson bound in anticommutator form and the Robertson bound on product domains"
status: draft
origin: pipeline
dependency_level: 2
deps: [def-adjoint-of-a-densely-defined-unbounded-operator, def-bounded-linear-operator, def-countable-choice, def-hilbert-space, def-inner-product-space, def-symmetric-self-adjoint-and-essentially-self-adjoint, lem-nrqm-composites-weak-form-robertson-uncertainty, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty]
dependency_roles:
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-nrqm-composites-weak-form-robertson-uncertainty: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5 'Uncertainty Principle and Compatible Observables', Section 2, printed pages 3-6: the uncertainty inequality, the commutator-anticommutator refinement (2.28) and the saturation conditions"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.4.1, printed pages 84-85: the variance definition, the commutator derivation of the position-momentum bound and the class of saturation states"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1 and Section 3.1, printed pages 55-58 and 88-92 (PDF pages 67-70 and 100-104): symmetric operators, variances and the Cauchy-Schwarz bound in spectral form"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space with inner product linear in the first argument
([[def-inner-product-space]], [[def-hilbert-space]]), let $A,B$ be symmetric
densely defined operators on $H$
([[def-symmetric-self-adjoint-and-essentially-self-adjoint]],
[[def-adjoint-of-a-densely-defined-unbounded-operator]]), and let $u\in D(A)\cap D(B)$
with $\|u\|=1$ satisfy in addition $u\in D(AB)\cap D(BA)$, that is
$Bu\in D(A)$ and $Au\in D(B)$. Put
$$a:=\langle Au,u\rangle,\qquad b:=\langle Bu,u\rangle,\qquad x:=(A-a)u,\qquad y:=(B-b)u,\qquad \Delta A:=\|x\|,\qquad \Delta B:=\|y\|,$$
and write $\{A,B\}u:=ABu+BAu$ and $[A,B]u:=ABu-BAu$ for the pairings at $u$.
Then:

(a) $a,b\in\mathbb R$, $x,y\in H$, and
$$\operatorname{Re}\langle x,y\rangle=\tfrac12\bigl\langle\{(A-a),(B-b)\}u,u\bigr\rangle=\tfrac12\langle\{A,B\}u,u\rangle-ab, \qquad \langle[A,B]u,u\rangle=-2i\operatorname{Im}\langle x,y\rangle ;$$

(b) *(Robertson bound)* $\Delta A\,\Delta B\ge\tfrac12\bigl|\langle[A,B]u,u\rangle\bigr|$;

(c) *(Schroedinger-Robertson bound)*
$$(\Delta A)^{2}(\Delta B)^{2}\ge\Bigl(\tfrac12\bigl\langle\{(A-a),(B-b)\}u,u\bigr\rangle\Bigr)^{2}+\tfrac14\bigl|\langle[A,B]u,u\rangle\bigr|^{2},$$
that is, with the expanded anticommutator pairing
$(\Delta A)^{2}(\Delta B)^{2}\ge\bigl(\tfrac12\langle\{A,B\}u,u\rangle-ab\bigr)^{2}+\tfrac14\bigl|\langle[A,B]u,u\rangle\bigr|^{2}$;

(d) equality holds in (c) if and only if $x$ and $y$ are linearly dependent;
in particular the Robertson bound (b) follows from (c) because the first
square is nonnegative;

(e) if $A$ and $B$ are bounded everywhere-defined self-adjoint operators, then
the product-domain hypothesis $u\in D(AB)\cap D(BA)$ holds for every unit
$u\in H$ and clauses (a)-(d) apply to every unit $u$.

No energy-time inequality and no apparatus statement is made.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; a complex Hilbert space $H$; symmetric densely defined $A,B$; a unit $u\in D(A)\cap D(B)$ with $u\in D(AB)\cap D(BA)$; the numbers $a,b$ and vectors $x,y$.

[F1] **Covariance-refined uncertainty.** For symmetric densely defined $A,B$ and a unit $u\in D(A)\cap D(B)$, with $a,b,x,y$ as above: $a,b$ are real and $x,y\in H$; $\operatorname{Cov}_{u}(A,B):=\operatorname{Re}\langle x,y\rangle$ is real and symmetric; the refined bound $(\Delta A)^{2}(\Delta B)^{2}\ge[\operatorname{Re}\langle x,y\rangle]^{2}+[\operatorname{Im}\langle x,y\rangle]^{2}$ holds, with equality if and only if $x,y$ are linearly dependent; and if $u\in D(AB)\cap D(BA)$ then $\langle[A,B]u,u\rangle=-2i\operatorname{Im}\langle x,y\rangle$ and $(\Delta A)^{2}(\Delta B)^{2}\ge[\operatorname{Re}\langle x,y\rangle]^{2}+\tfrac14|\langle[A,B]u,u\rangle|^{2}$ ([[thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty]] clauses (a)-(d)).

[F2] **Commutator pairing.** If $u\in D(AB)\cap D(BA)$ then $([A,B]u,u)=\langle ABu,u\rangle-\langle BAu,u\rangle=-2i\operatorname{Im}\langle Au,Bu\rangle$, and $\langle x,y\rangle=\langle Au,Bu\rangle-ab$ with real $a,b$ ([[lem-nrqm-composites-weak-form-robertson-uncertainty]] clauses (a) and (c)).

[F3] **Inner products and Cauchy-Schwarz.** For $z\in\mathbb C$ one has $|z|^{2}=(\operatorname{Re}z)^{2}+(\operatorname{Im}z)^{2}$, and $\|v\|\,\|w\|\ge|\langle v,w\rangle|$ with equality if and only if $v,w$ are linearly dependent ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F4] **Bounded operators.** A bounded everywhere-defined self-adjoint operator on $H$ has domain $H$, so for bounded self-adjoint $A,B$ the hypotheses $u\in D(A)\cap D(B)$ and $u\in D(AB)\cap D(BA)$ hold for every $u\in H$ ([[def-bounded-linear-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

## Proof

**Proof technique:** expand the two pairings of the centered vectors in terms of the anticommutator and commutator pairings using symmetry of the operators, then read the Schroedinger-Robertson inequality off the refined Cauchy-Schwarz bound.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Means and centered vectors] By [F1] the numbers $a$ and $b$ are real and $x=(A-a)u$, $y=(B-b)u$ lie in $H$, so $\Delta A=\|x\|$ and $\Delta B=\|y\|$ are the norms of the centered vectors. [given, F1]

2.1 [The real part is the anticommutator pairing] Since $Bu\in D(A)$ and $Au\in D(B)$, symmetry of $A$ gives $\langle ABu,u\rangle=\langle Bu,Au\rangle=\overline{\langle Au,Bu\rangle}$ and symmetry of $B$ gives $\langle BAu,u\rangle=\langle Au,Bu\rangle$. Adding, $\langle\{A,B\}u,u\rangle=2\operatorname{Re}\langle Au,Bu\rangle$. By [F2], $\langle x,y\rangle=\langle Au,Bu\rangle-ab$ with $ab\in\mathbb R$, hence $\operatorname{Re}\langle x,y\rangle=\operatorname{Re}\langle Au,Bu\rangle-ab=\tfrac12\langle\{A,B\}u,u\rangle-ab$. Expanding the anticommutator of the centered operators, using $a,b\in\mathbb R$ and $\langle Au,u\rangle=a$, $\langle Bu,u\rangle=b$, gives $\langle\{(A-a),(B-b)\}u,u\rangle=\langle\{A,B\}u,u\rangle-2ab$, so the two displays for the real part agree. [step 1.1, F2, algebra]

3.1 [The imaginary part is the commutator pairing] By [F2], $\langle[A,B]u,u\rangle=-2i\operatorname{Im}\langle Au,Bu\rangle$; by step 2.1 and [F2], $\operatorname{Im}\langle x,y\rangle=\operatorname{Im}\langle Au,Bu\rangle$, so $\langle[A,B]u,u\rangle=-2i\operatorname{Im}\langle x,y\rangle$. This completes (a). [step 2.1, F2, algebra]

4.1 [The two bounds] By [F1] the refined bound $(\Delta A)^{2}(\Delta B)^{2}\ge[\operatorname{Re}\langle x,y\rangle]^{2}+[\operatorname{Im}\langle x,y\rangle]^{2}$ holds. Substituting step 2.1 and $|\operatorname{Im}\langle x,y\rangle|=\tfrac12|\langle[A,B]u,u\rangle|$ from step 3.1 gives (c); dropping the nonnegative first square gives (b). [step 2.1, step 3.1, F1, F3, algebra]

5.1 [Equality] By [F1] equality in the refined bound holds if and only if $x,y$ are linearly dependent; this is (d). [step 4.1, F1]

6.1 [Bounded case] If $A$ and $B$ are bounded everywhere-defined self-adjoint operators then $D(A)=D(B)=H$ and all products are everywhere defined, so the product-domain hypothesis of the statement holds for every unit $u\in H$ by [F4]; the displays of (a)-(d) are then unconditional in $u$. This is (e). [given, F4] ∎
