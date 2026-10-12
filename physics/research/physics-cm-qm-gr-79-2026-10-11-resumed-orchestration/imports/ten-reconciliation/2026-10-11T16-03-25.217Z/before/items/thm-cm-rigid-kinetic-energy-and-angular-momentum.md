---
id: thm-cm-rigid-kinetic-energy-and-angular-momentum
kind: theorem
title: "Kinetic energy and angular momentum of a rigid placement: $K=\\tfrac12m\\lVert c'\\rVert_2^2+\\tfrac12\\omega^{\\mathsf T}I\\omega$ and $L_c=RI\\omega$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-rigid-placement-and-body-angular-velocity, def-cm-mass-distribution-and-inertia-matrix, lem-cm-mass-moments-are-finite, def-countable-choice, lem-cm-inertia-matrix-properties, lem-cm-skew-matrix-cross-product-correspondence, lem-cm-matrix-curve-derivative-rules, def-cross-product-in-r3, thm-cross-product-norm-is-the-two-vector-gram-determinant, def-cm-special-orthogonal-group, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-euclidean-inner-product, def-inner-product-space]
dependency_roles:
  def-cm-rigid-placement-and-body-angular-velocity: mathematical-premise
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  lem-cm-mass-moments-are-finite: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-cm-inertia-matrix-properties: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  lem-cm-matrix-curve-derivative-rules: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §§3.2-3.3, Eqs. (3.17)-(3.20) and (3.27)-(3.30), printed pp. 50-54: kinetic energy $T=\\tfrac12\\omega^{\\mathsf T}I\\omega$, angular momentum $L=I\\omega$, and the centre-of-mass split for a free body"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4 §4.2, Eqs. (4.14)-(4.22): rotational kinetic energy and angular momentum through the inertia tensor"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), §2.1 Eq. (2.10), §2.4 Eq. (2.41) and §2.6 Eq. (2.51): kinetic-energy split, inertia tensor and vector angular momentum"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), used only through the bound of [[lem-cm-mass-moments-are-finite]] that makes the two integrands of clause 1 $\nu$-integrable. Let $I\subseteq\mathbb R$ be an interval with at least two points, let $\nu$ be a **centred** mass distribution on $\mathbb R^3$ with total mass $m$ and inertia matrix $I$ ([[def-cm-mass-distribution-and-inertia-matrix]]), let $c:I\to\mathbb R^3$ and $R:I\to SO(3)$ be differentiable, and let $x(t,\rho)=c(t)+R(t)\rho$ be the rigid placement with body angular velocity $\omega$ ([[def-cm-rigid-placement-and-body-angular-velocity]]). For $t\in I$ define
$$K(t):=\frac12\int\lVert\partial_tx(t,\rho)\rVert_2^2\,d\nu(\rho),\qquad L_c(t):=\int\bigl(x(t,\rho)-c(t)\bigr)\times\bigl(\partial_tx(t,\rho)-c'(t)\bigr)\,d\nu(\rho),$$
the second integral read componentwise ([[def-cm-mass-distribution-and-inertia-matrix]]). Then for every $t\in I$:

1. $\partial_tx(t,\rho)=c'(t)+R(t)\bigl(\omega(t)\times\rho\bigr)$ for every $\rho\in\mathbb R^3$, and $R'(t)=R(t)[\omega(t)]_\times=[R(t)\omega(t)]_\times R(t)$; moreover the two integrands displayed above are $\nu$-integrable, so $K(t)$ and $L_c(t)$ are a well-defined finite real number and vector;
2. $K(t)=\tfrac12m\lVert c'(t)\rVert_2^2+\tfrac12\omega(t)^{\mathsf T}I\omega(t)$;
3. $L_c(t)=R(t)I\omega(t)$.

## Facts & Assumptions

**Given:** A centred mass distribution $\nu$, differentiable $c:I\to\mathbb R^3$ and $R:I\to SO(3)$, the rigid placement $x(t,\rho)=c(t)+R(t)\rho$, its body angular velocity $\omega$ with $R^{\mathsf T}R'=[\omega]_\times$, and a time $t\in I$.

[L1] The body angular velocity satisfies $R^{\mathsf T}R'=[\omega]_\times$, hence $R'=R[\omega]_\times$, and by conjugation $R'=[R\omega]_\times R$ as well; explicitly $\omega=\bigl((R^{\mathsf T}R')_{32},(R^{\mathsf T}R')_{13},(R^{\mathsf T}R')_{21}\bigr)$ [[def-cm-rigid-placement-and-body-angular-velocity]], [[lem-cm-skew-matrix-cross-product-correspondence]].

[L2] $[\omega]_\times z=\omega\times z$, and $R(u\times v)=Ru\times Rv$ for $R\in SO(3)$ [[lem-cm-skew-matrix-cross-product-correspondence]].

[L3] The elements of $SO(3)$ preserve the Euclidean inner product and norm: $\langle Ru,Rv\rangle=\langle u,v\rangle$, so $\lVert Rv\rVert_2=\lVert v\rVert_2$ [[def-cm-special-orthogonal-group]], [[def-euclidean-inner-product]], [[def-inner-product-space]].

[L4] The measure $\nu$ has finite total mass, $\nu(\mathbb R^3\setminus\overline B_R(0))=0$ for some $R>0$, and vanishing first moment $\int\rho_j\,d\nu=0$ for $j=1,2,3$; every polynomial of degree at most two in the coordinates is $\nu$-integrable, with the bound of [[lem-cm-mass-moments-are-finite]] ([[def-cm-mass-distribution-and-inertia-matrix]]).

[L5] The integral is linear on $L^1(\nu)$ and equals the componentwise integral for vector- or matrix-valued integrands [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]].

[L6] The inertia matrix satisfies $\omega^{\mathsf T}I\omega=\int\lVert\omega\times\rho\rVert_2^2\,d\nu$ [[lem-cm-inertia-matrix-properties]].

[L7] For $u,v\in\mathbb R^3$, the cross product is bilinear, $u\times v$ is determined componentwise by $(u\times v)_1=u_2v_3-u_3v_2$ and its cyclic analogues, and $\lVert u\times v\rVert_2^2=\lVert u\rVert_2^2\lVert v\rVert_2^2-\langle u,v\rangle^2\le\lVert u\rVert_2^2\lVert v\rVert_2^2$ [[def-cross-product-in-r3]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]].

## Proof

**Proof technique:** direct.

1.1 By [L1], $R'=R[\omega]_\times$, and $[\omega]_\times\rho=\omega\times\rho$ by [L2]; hence for every $\rho$ the derivative of $s\mapsto x(s,\rho)$ at $t$ is $\partial_tx(t,\rho)=c'(t)+R'(t)\rho=c'(t)+R(t)(\omega(t)\times\rho)$. [given, L1, L2]

1.2 For every $\rho,\omega$ one has the vector identity $\rho\times(\omega\times\rho)=\bigl(\lVert\rho\rVert_2^2I_3-\rho\rho^{\mathsf T}\bigr)\omega$: for instance the first coordinate of the left side is $\rho_2(\omega_1\rho_2-\omega_2\rho_1)-\rho_3(\omega_3\rho_1-\omega_1\rho_3)=\omega_1(\rho_2^2+\rho_3^2)-\rho_1(\omega_2\rho_2+\omega_3\rho_3)$, which equals the first coordinate $\lVert\rho\rVert_2^2\omega_1-\rho_1\langle\rho,\omega\rangle$ of the right side, and the second and third coordinates are the cyclic analogues. [given, L7, algebra]

2.1 The first integrand satisfies $\lVert\partial_tx(t,\rho)\rVert_2^2\le 4\lVert c'(t)\rVert_2^2+4\lVert\omega(t)\rVert_2^2\lVert\rho\rVert_2^2$ by step 1.1, [L3] and the two elementary bounds $\lVert a+b\rVert_2^2\le2\lVert a\rVert_2^2+2\lVert b\rVert_2^2$ and $\lVert u\times v\rVert_2\le\lVert u\rVert_2\lVert v\rVert_2$; the second integrand satisfies $\lVert(x-c)\times(\partial_tx-c')\rVert_2\le\lVert\rho\rVert_2\lVert\omega(t)\times\rho\rVert_2\le\lVert\omega(t)\rVert_2\lVert\rho\rVert_2^2$ by step 1.1 and [L3]. Both are bounded on the support ball of $\nu$ by constants depending on $t$, so they are $\nu$-integrable by [L4]; this is the integrability clause of the statement. [step 1.1, given, L3, L4, L7, algebra]

2.2 Expanding the square with bilinearity and symmetry of the inner product and using [L3], $\lVert\partial_tx\rVert_2^2=\lVert c'\rVert_2^2+2\langle c',R(\omega\times\rho)\rangle+\lVert\omega\times\rho\rVert_2^2$. [step 1.1, L3, L7, algebra]

2.3 By step 1.1 the relative velocity is $(x-c)'=\partial_tx-c'=R(\omega\times\rho)$, so the angular-momentum integrand is $(x-c)\times(x-c)'=R\rho\times R(\omega\times\rho)=R\bigl(\rho\times(\omega\times\rho)\bigr)$ by [L2]. [step 1.1, L2, algebra]

3.1 Integrating step 2.2 with [L5] and pulling the constant $R(t)$ and the linear map $\rho\mapsto\omega\times\rho$ through the integral, $$\int\lVert\partial_tx\rVert_2^2\,d\nu=m\lVert c'\rVert_2^2+2\bigl\langle c',R\bigl(\omega\times\textstyle\int\rho\,d\nu\bigr)\bigr\rangle+\int\lVert\omega\times\rho\rVert_2^2\,d\nu.$$ The middle term vanishes because $\int\rho\,d\nu=0$ by [L4], and the last term equals $\omega^{\mathsf T}I\omega$ by [L6]; substituting into the definition of $K$ gives clause 2. [step 2.1, 2.2, given, L4, L5, L6, algebra]

4.1 Integrating step 2.3 and substituting step 1.2, $L_c(t)=R(t)\int\bigl(\lVert\rho\rVert_2^2I_3-\rho\rho^{\mathsf T}\bigr)d\nu\,\omega(t)=R(t)I\omega(t)$, the constant matrix $R(t)$ and the finite sum of integrals being interchanged by [L5] componentwise, and the last equality being the definition of $I$ in [[def-cm-mass-distribution-and-inertia-matrix]]. This is clause 3. [step 2.3, 1.2, given, L4, L5] ∎
