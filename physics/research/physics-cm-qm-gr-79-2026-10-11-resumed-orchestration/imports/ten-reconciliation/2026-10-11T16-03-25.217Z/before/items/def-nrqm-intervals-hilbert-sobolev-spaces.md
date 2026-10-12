---
id: def-nrqm-intervals-hilbert-sobolev-spaces
aliases: [nrqm-intervals-and-contacts-hilbert-sobolev-spaces]
kind: definition
domain: mathematics
title: "One-dimensional Hilbert-Sobolev spaces on intervals"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-weak-derivative-of-a-locally-integrable-function, def-locally-integrable-function-as-a-regular-distribution, def-complex-lp-and-euclidean-test-function-conventions, def-l-p-space-as-a-quotient-by-null-functions, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-hilbert-space, def-countable-choice]
dependency_roles:
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-locally-integrable-function-as-a-regular-distribution: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 9 pp. 181-193 (Sturm-Liouville operators on an interval: locally integrable coefficients, absolutely continuous representatives and Wronskians)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.1-8.2 pp. 201-210 and Section 8.6 pp. 231-233 (Sobolev spaces in one dimension and Dirichlet eigenfunction expansions)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix complex
scalars. Let $I\subseteq\mathbb R$ be a nonempty open interval, bounded or
unbounded, and write $L^2(I;\mathbb C)$ for the complex Hilbert space of
Lebesgue (equivalence classes of) square-integrable functions with the inner
product $\langle u,v\rangle=\int_Iu\overline v$ linear in the first argument
([[def-complex-lp-and-euclidean-test-function-conventions]],
[[def-l-p-space-as-a-quotient-by-null-functions]],
[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

**First-order space.** Define
$H^1(I):=\{u\in L^2(I;\mathbb C):\ \text{the weak derivative }Du\text{ of the class }u\text{ exists and }Du\in L^2(I;\mathbb C)\},$
where $Du$ is the weak derivative of
[[def-weak-derivative-of-a-locally-integrable-function]]: a class
$Du\in L^1_{\mathrm{loc}}(I;\mathbb C)$ with
$\int_Iu\,\varphi'=(-1)\int_I(Du)\varphi\qquad\text{for every }\varphi\in C_c^\infty(I),$
an identity that is choice-free
([[def-locally-integrable-function-as-a-regular-distribution]]). Equip
$H^1(I)$ with the sesquilinear form
$\langle u,v\rangle_{H^1}:=\int_Iu\overline v+\int_I(Du)\overline{Dv},$
whose associated norm is $\|u\|_{H^1}=(\|u\|_{L^2}^2+\|Du\|_{L^2}^2)^{1/2}$;
the symbol $u'$ denotes the same weak derivative $Du$ throughout the page.

**Second-order space.** Define
$H^2(I):=\{u\in H^1(I):Du\in H^1(I)\},$
and for $u\in H^2(I)$ write $D^2u:=D(Du)\in L^2(I;\mathbb C)$; the norm is
$\|u\|_{H^2}=(\|u\|_{L^2}^2+\|Du\|_{L^2}^2+\|D^2u\|_{L^2}^2)^{1/2}$.
Thus $H^2(I)$ consists exactly of the classes in $L^2(I)$ whose first and
second weak derivatives exist and lie in $L^2(I)$, and $H^2(I)\subseteq
H^1(I)$.

**Endpoint-vanishing first-order space and the Dirichlet form.** For the
bounded interval $(0,L)$, $L>0$, define
$H^1_0(0,L):=\overline{C_c^\infty(0,L)}^{\,\|\cdot\|_{H^1}},$
the closure of the test functions in $H^1(0,L)$, and define the **Dirichlet
form** on it by $q_D[u]:=\|Du\|_{L^2(0,L)}^2=\int_0^L|Du|^2$.

**Elementary consequences, recorded for reuse.** Weak derivatives are unique
as locally integrable classes under Countable Choice, are additive and
$\mathbb C$-homogeneous, and classical derivatives of continuously
differentiable functions are weak derivatives. The cited published items
supply these facts, so $H^1(I)$ and $H^2(I)$ are well-defined linear
subspaces of $L^2(I;\mathbb C)$. No claim is made here that $H^1_0(0,L)$
equals the set of classes with vanishing endpoint values; that identification
is proved on this page from the trace estimates.

