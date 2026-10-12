---
id: def-nrqm-coulomb-ltwo-kernel-operators
aliases: [nrqm-coulomb-ltwo-kernel-operators]
kind: definition
domain: mathematics
title: "L^2 kernel operators and Hilbert-Schmidt operators on R^3"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-hilbert-space, def-countable-choice]
dependency_roles:
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.3 pp. 139-145 (Hilbert-Schmidt operators defined as integral operators with L^2 kernels)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis (ETH lecture notes, 2017), Section 5.2.3 pp. 224-227 (the spectrum of a compact operator; finite-rank and norm-limit structure)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Write
$L^2=L^2(\mathbb R^3;\mathbb C)$ for the complex Hilbert space of Lebesgue
(equivalence classes of) square-integrable functions with inner product
$\langle f,g\rangle=\int_{\mathbb R^3}f\overline g$ linear in the first
argument ([[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-complex-lp-and-euclidean-test-function-conventions]],
[[def-hilbert-space]]), and write $L^2(\mathbb R^3\times\mathbb R^3;\mathbb C)$
for the same construction over the product with Lebesgue measure.

**Kernel data.** Let $k\in L^2(\mathbb R^3\times\mathbb R^3;\mathbb C)$.

**Domain and action.** For $f\in L^2$ say that the integral defining $T_kf$
*exists at* $x\in\mathbb R^3$ if the function
$y\mapsto k(x,y)f(y)$ lies in $L^1(\mathbb R^3;\mathbb C)$, and at such points
put
$$(T_kf)(x):=\int_{\mathbb R^3}k(x,y)f(y)\,dy .$$
Define
$$D(T_k):=\Bigl\{f\in L^2:\ x\mapsto(T_kf)(x)\ \text{exists for almost every }x\text{ and agrees a.e. with a class in }L^2\Bigr\},$$
and for $f\in D(T_k)$ let $T_kf$ denote that class. The assignment
$f\mapsto T_kf$ is called the *$L^2$-kernel operator with kernel $k$*.

**Hilbert-Schmidt operators.** A linear operator $T$ on $L^2$ is called a
*Hilbert-Schmidt operator* if there is
$k\in L^2(\mathbb R^3\times\mathbb R^3;\mathbb C)$ with $D(T)=D(T_k)$ and
$T=T_k$; such a $k$ is called an *$L^2$ kernel* of $T$.

This definition asserts nothing about whether $D(T_k)$ is all of $L^2$,
whether $T_k$ is bounded, or whether $T_k$ is compact; those properties are
proved in [[lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact]]. A
finite product kernel $\sum_{i=1}^nf_i(x)\overline{g_i(y)}$ with
$f_i,g_i\in L^2$ is also a class in $L^2(\mathbb R^3\times\mathbb R^3;\mathbb C)$,
as the same lemma records, so $T_k$ is defined for it whenever that membership
is used.
