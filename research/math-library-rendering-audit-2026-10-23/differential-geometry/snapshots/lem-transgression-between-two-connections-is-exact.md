---
id: lem-transgression-between-two-connections-is-exact
kind: lemma
title: Explicit Chern–Simons transgression between two connections
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-evaluation-of-an-invariant-polynomial-on-curvature
  - def-invariant-polynomial-on-a-matrix-lie-algebra
  - def-complex-linear-and-compatible-bundle-connections
  - lem-invariant-polynomials-annihilate-covariant-commutators
  - thm-second-bianchi-identity-for-a-bundle-connection
  - prop-the-difference-of-two-connections-is-an-endomorphism-valued-one-form
  - lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Stefan Haller, The Atiyah–Singer Index Theorem, Vienna lecture notes (2013)
      url: https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf
      locator: "§II.4.1, variation and integration formulas, printed pp. 88–89"
    - title: Raoul Bott, Lectures on Characteristic Classes and Foliations
      url: https://poisson.phc.dm.unipi.it/~lmigliorini/secondo_magistrale/gauge_theory/bott_foliations.pdf
      locator: "§5, connection-independence proposition following Lemma (5.3), printed pp. 28–29"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold,
possibly with boundary. Let $E\to M$ be a finite-rank real or complex smooth
vector bundle with a fixed $G$-frame reduction, and let $\nabla_0,\nabla_1$
be connections compatible with that same reduction. Put
$A=\nabla_1-\nabla_0$, $\nabla_t=\nabla_0+tA$, and let $\Omega_t$ be the
curvature of $\nabla_t$. For a homogeneous degree-$k$ $G$-invariant
polynomial $P_k$ with symmetric polarization, $k\ge1$, define
$$
T_{P_k}(\nabla_0,\nabla_1)=k\int_0^1P_k(A,\Omega_t,\ldots,\Omega_t)\,dt.
$$
This is a global $(2k-1)$-form and
$$
P_k(\Omega_1,\ldots,\Omega_1)-P_k(\Omega_0,\ldots,\Omega_0)=dT_{P_k}(\nabla_0,\nabla_1).
$$
For $k=0$, the two constant curvature evaluations agree, so their difference
is zero. The result applies to the $\operatorname{GL}_r(\mathbb C)$,
$\operatorname{GL}_r(\mathbb R)$, $U(r)$, and $\operatorname{SO}(2m)$
reductions with their respective invariant polynomials.

## Facts & Assumptions

**Given:** The smooth base, fixed $G$-reduction, compatible endpoint
connections, and invariant polynomial in the Statement.

[F1] In a supplied $G$-frame, curvature is $\Omega=d\omega+\omega\wedge\omega$;
its invariant-polynomial evaluation patches to a global form
([[def-evaluation-of-an-invariant-polynomial-on-curvature]]).

[F2] The symmetric polarization is invariant under simultaneous adjoint
action by $G$
([[def-invariant-polynomial-on-a-matrix-lie-algebra]]).

[F3] The difference of two connections is a global endomorphism-valued
one-form, whose frame matrix is $\omega_1-\omega_0$
([[prop-the-difference-of-two-connections-is-an-endomorphism-valued-one-form]]).

[F7] A complex connection is $\mathbb C$-linear, so a difference of complex
connections is complex-linear on the underlying real bundle
([[def-complex-linear-and-compatible-bundle-connections]]).

[F4] For homogeneous $\mathfrak g$-valued forms, differentiating the
invariant-polynomial extension is the signed sum obtained by applying
$D^\nabla$ in each slot
([[lem-invariant-polynomials-annihilate-covariant-commutators]]).

[F5] For each connection with curvature $\Omega_t$, the covariant exterior
derivative satisfies $d^{\nabla_t}\Omega_t=0$
([[thm-second-bianchi-identity-for-a-bundle-connection]]).

[F6] On a manifold with boundary, the exterior derivative is defined by
locally extendible coefficients and obeys the graded Leibniz rule
([[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]]).

## Proof

**Proof technique:** differentiate the invariant curvature form along the
affine path and integrate its exact derivative.

1.1 By [F3], $A$ is a global endomorphism-valued one-form; for a complex bundle [F7] ensures that the difference remains complex-linear. In every supplied $G$-frame its matrix $a=\omega_1-\omega_0$ is $\mathfrak g$-valued. If $g_{\beta\alpha}$ is a transition matrix, then $a_\beta=g_{\beta\alpha}^{-1}a_\alpha g_{\beta\alpha}$ and $\omega_{t,\beta}=g_{\beta\alpha}^{-1}\omega_{t,\alpha}g_{\beta\alpha}+g_{\beta\alpha}^{-1}dg_{\beta\alpha}$; hence $\omega_t=\omega_0+ta$ is a compatible connection for every $t\in[0,1]$. The curvature transforms by conjugation, so [F2] makes $\beta_t=P_k(A,\Omega_t,\ldots,\Omega_t)$ agree in all frames. Its coefficients are smooth in $(x,t)$, hence integrating on the compact interval defines a global smooth form of degree $1+2(k-1)=2k-1$. [F1, F2, F3, F7, given, algebra]

2.1 In a fixed $G$-frame, [F1] gives $\Omega_t=d\omega_t+\omega_t\wedge\omega_t$. Differentiating this expression in $t$ yields $\dot\Omega_t=da+a\wedge\omega_t+\omega_t\wedge a=D^{\nabla_t}A$, since for a one-form $a$ the local covariant derivative is $D^{\nabla_t}a=da+\omega_t\wedge a+a\wedge\omega_t$. [F1, F4, step 1.1, algebra]

3.1 Set $\alpha_t=P_k(\Omega_t,\ldots,\Omega_t)$. Symmetry of $P_k$ and the even degree of every curvature factor give $\dot\alpha_t=kP_k(\dot\Omega_t,\Omega_t,\ldots,\Omega_t)$. Applying [F4] to $(A,\Omega_t,\ldots,\Omega_t)$ leaves $d\beta_t=P_k(D^{\nabla_t}A,\Omega_t,\ldots,\Omega_t)$: every other term contains $D^{\nabla_t}\Omega_t=0$ by [F5]. Here the local $D^{\nabla_t}$ in [F4] is the covariant exterior derivative $d^{\nabla_t}$ in [F5]. Therefore $\dot\alpha_t=k\,d\beta_t$. [F2, F4, F5, step 2.1, algebra]

4.1 Integrating the identity from step 3.1 gives $\alpha_1-\alpha_0=k\int_0^1d\beta_t\,dt=d\bigl(k\int_0^1\beta_t\,dt\bigr)$. To justify the last equality, write $\beta_t=\sum_I b_I(x,t)\,dx^I$ in a chart; each $b_I$ is smooth, and each coordinate derivative commutes with its integral over compact $[0,1]$, so the equality holds coefficient by coefficient. On boundary charts the same calculation restricts from local extensions by [F6]. For $k=0$ both endpoint forms are the same constant and their difference is zero. No axiom of choice is used. $\square$ [F1, F6, step 3.1, algebra]
