---
id: def-nrqm-magnetic-and-detection-position-and-momentum-operators
aliases: [nrqm-magnetic-and-detection-position-and-momentum-operators]
kind: definition
domain: mathematics
title: "Position and momentum operators on Euclidean L2"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, lem-weak-derivatives-are-unique-almost-everywhere, def-complex-lp-and-euclidean-test-function-conventions, def-l-p-space-as-a-quotient-by-null-functions, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-hilbert-space, def-countable-choice, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]
dependency_roles:
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  lem-weak-derivatives-are-unique-almost-everywhere: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Ch. 2-3 pp. 55-100 (position and momentum operators, their domains and spectral calculus)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.1-8.2 pp. 201-210 (one-dimensional and Euclidean weak derivatives and Sobolev spaces)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix
$\hbar>0$ and an integer $d\ge1$, and work in the complex Hilbert space
$L^2(\mathbb R^d;\mathbb C)$ with inner product
$\langle f,g\rangle=\int_{\mathbb R^d}f\overline g$ linear in the first
argument ([[def-complex-lp-and-euclidean-test-function-conventions]],
[[def-l-p-space-as-a-quotient-by-null-functions]],
[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

**Weak derivatives.** For $f\in L^2(\mathbb R^d;\mathbb C)$ and
$j\in\{1,\dots,d\}$, say that the $j$-th weak derivative of $f$ exists in
$L^2$ when there is a class $g\in L^2(\mathbb R^d;\mathbb C)$ with
$$\int_{\mathbb R^d}f\,D_j\varphi=(-1)\int_{\mathbb R^d}g\,\varphi \qquad\text{for every }\varphi\in C_c^\infty(\mathbb R^d),$$
where $D_j\varphi$ is the classical partial derivative and the pairing is
bilinear without conjugation ([[def-weak-derivative-of-a-locally-integrable-function]]).
Such a $g$ is unique as an $L^2$ class
([[lem-weak-derivatives-are-unique-almost-everywhere]]); write $D_jf:=g$.
The Sobolev space $W^{1,2}(\mathbb R^d;\mathbb C)$ is the set of classes
$f\in L^2$ for which $D_1f,\dots,D_df$ all exist in $L^2$, and
$W^{2,2}(\mathbb R^d;\mathbb C)$ is the set of $f\in W^{1,2}$ with
$D_jf\in W^{1,2}$ for every $j$, with $D_jD_kf$ written for the iterated
derivative ([[def-sobolev-space-wkp-and-its-norm]]).

**(a) Position operators.** For $j\in\{1,\dots,d\}$ define
$$D(Q_j):=\{f\in L^2(\mathbb R^d;\mathbb C):\ x\mapsto x_jf(x)\in L^2(\mathbb R^d;\mathbb C)\},\qquad (Q_jf)(x):=x_jf(x).$$
Thus $Q_jf$ is the class of the pointwise product with the $j$-th coordinate
function.

**(b) Momentum operators.** For $j\in\{1,\dots,d\}$ define
$$D(P_j):=\{f\in L^2(\mathbb R^d;\mathbb C):\ D_jf\text{ exists in }L^2\},\qquad P_jf:=-i\hbar\,D_jf .$$

Both $Q_j$ and $P_j$ are densely defined $\mathbb C$-linear operators in
$L^2(\mathbb R^d;\mathbb C)$: for $Q_j$ the compactly supported smooth
classes lie in the domain because $x_j$ is bounded there, and for $P_j$ they
lie in the domain because their classical derivatives are weak derivatives in
$L^2$ ([[def-sobolev-space-wkp-and-its-norm]]).

For density, the classes of $C_c^\infty(\mathbb R^d;\mathbb C)$ are dense in
$W^{0,2}(\mathbb R^d;\mathbb C)=L^2(\mathbb R^d;\mathbb C)$ by
[[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]] and
[[def-sobolev-space-wkp-and-its-norm]]. Since these classes lie in each domain
as above, both operator domains are dense.

For a class
$f\in C_c^\infty(\mathbb R^d)$ one has $Q_jf=x_jf$ and
$P_jf=-i\hbar\,\partial_jf$ pointwise. The self-adjointness of these operators
and their Fourier representation are proved in
the companion self-adjointness lemma on this page, not
asserted here; for $d=1$ the domain $D(P)$ of the single momentum operator
coincides with $W^{1,2}(\mathbb R;\mathbb C)$.
