---
id: def-nrqm-coulomb-closed-semibounded-forms
aliases: [nrqm-coulomb-closed-semibounded-forms]
kind: definition
domain: mathematics
title: "Closed semibounded symmetric forms and their associated operators"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-hilbert-space, def-inner-product-space, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice]
dependency_roles:
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.3 pp. 67-73 (quadratic forms, closedness, semiboundedness and the form domain of a self-adjoint operator)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis (ETH lecture notes, 2017), Chapter 6 pp. 305-333 (unbounded operators on Hilbert spaces: domains, adjoints and graphs)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$(V,\langle\cdot,\cdot\rangle_V)$ and $(H,\langle\cdot,\cdot\rangle_H)$ be
complex Hilbert spaces ([[def-hilbert-space]],
[[def-inner-product-space]]) and let $i:V\to H$ be a linear map with dense
image.

**Symmetric forms.** A *sesquilinear form on $V$* is a map
$a:V\times V\to\mathbb C$ that is linear in its first argument and
conjugate-linear in its second; it is *symmetric* if
$a(u,v)=\overline{a(v,u)}$ for all $u,v\in V$, in which case $a(u,u)\in\mathbb R$
and $\operatorname{Re}a(u,v)=\operatorname{Re}\overline{a(v,u)}$.

**Bounded and semibounded.** Such a form is *bounded* if there is $C>0$ with
$|a(u,v)|\le C\|u\|_V\|v\|_V$ for all $u,v\in V$, and *semibounded below with
bound $M\ge0$* if $a(u,u)\ge-M\|i(u)\|_H^2$ for every $u\in V$.

**Form norm and closedness.** Let $M\ge0$ be a bound as above and define the
*form norm*
$$\|u\|_{a,M}:=\Bigl(\operatorname{Re}a(u,u)+(M+1)\|i(u)\|_H^2\Bigr)^{1/2}\qquad(u\in V).$$
The form $a$ is *closed* if there are such an $M$ and constants $c,C>0$ with
$c\|u\|_V\le\|u\|_{a,M}\le C\|u\|_V$ for every $u\in V$; then
$(V,\|\cdot\|_{a,M})$ is complete because $V$ is.

**Associated operator.** With $a$ and $i$ as above, define
$$D(A):=\Bigl\{u\in V:\ \text{there is }f\in H\text{ with }a(u,v)=\langle f,i(v)\rangle_H\text{ for every }v\in V\Bigr\},\qquad Au:=f .$$
The element $f$ is unique when it exists, because two candidates differ by an
element of $H$ orthogonal to the dense subspace $i(V)$, hence coincide;
$A$ is called the *operator associated with $a$*. This definition asserts
neither that $A$ is densely defined, nor that $A$ is symmetric, nor that $A$ is
self-adjoint or bounded below; the specific closed semibounded form of
[[thm-nrqm-coulomb-transported-radial-endpoint-realization]] establishes those
properties for its own associated operator by a direct computation. When $V$
is a subspace of $H$ and $i$ is the inclusion, $\|i(u)\|_H$ is written
$\|u\|_H$ and the pairing $\langle f,i(v)\rangle_H$ is written
$\langle f,v\rangle$.
