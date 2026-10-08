---
id: thm-abels-theorem-for-divisors
kind: theorem
title: Abel's theorem for divisors
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 24
deps:
  - def-abel-jacobi-map
  - def-axiom-of-choice
  - def-bigraded-complex-differential-forms
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-jacobian-of-a-compact-riemann-surface
  - def-meromorphic-differential-on-a-riemann-surface
  - def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface
  - def-period-pairing-and-period-lattice
  - def-riemann-surface-and-holomorphic-atlas
  - def-wirtinger-derivatives
  - lem-abel-jacobi-map-is-well-defined-and-base-point-independent
  - lem-dbar-solvability-criterion-for-a-smooth-zero-one-form
  - lem-period-pairing-is-well-defined-and-computed-by-integration
  - lem-principal-divisors-have-vanishing-abel-jacobi-class
  - lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity
  - thm-connected-and-locally-path-connected-implies-path-connected
  - thm-d-dbar-decomposition-and-identities
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces, GTM 81, 4th corrected printing"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2, Theorem 20.7 (Abel) and its proof, printed pp. 163-165: sufficiency via the weak solution and the $\\bar\\partial$-equation, necessity via the trace of a holomorphic differential."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 15, Theorem 15.5 (Abel) and the completion of its proof from the smooth solution, printed pp. 129-133."
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf"
      locator: "Ch. 7 §2, Propositions 7.5 and Theorem 7.6 (Clebsch), printed pp. 61-63."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the Hodge,
Riemann-Roch and de Rham machinery. Let $X$ be a compact connected Riemann
surface and let $D\in\operatorname{Div}^0(X)$ be a divisor of degree zero. Then
$$D\text{ is a principal divisor}\quad\Longleftrightarrow\quad u(D)=0\ \text{ in }\ \operatorname{Jac}(X),$$
where $u:\operatorname{Div}^0(X)\to\operatorname{Jac}(X)$ is the Abel-Jacobi
homomorphism of [[def-abel-jacobi-map]]. Equivalently, the kernel of $u$ is
exactly the subgroup of principal divisors
([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

## Facts & Assumptions

**Given:** Full AC, a compact connected Riemann surface $X$, and a degree-zero divisor $D\in\operatorname{Div}^0(X)$.

[F1] For any chain $c$ of continuous curves with $\partial c=D$ the class $u(D)$ is represented by the functional $\omega\mapsto\int_c\omega$, and $u$ is a base-point-free group homomorphism on $\operatorname{Div}^0(X)$ ([[def-abel-jacobi-map]], [[lem-abel-jacobi-map-is-well-defined-and-base-point-independent]]).

[F2] $\Lambda=e(H_1(X;\mathbb Z))\subseteq\Omega(X)^*$ with $e(\gamma)(\omega)=P(\gamma,\omega)$, and for every continuous singular cycle $c_\alpha$ representing a class $\alpha\in H_1(X;\mathbb Z)$, $P(\alpha,\omega)=\int_{c_\alpha}\omega$ for all holomorphic $\omega$ ([[def-jacobian-of-a-compact-riemann-surface]], [[def-period-pairing-and-period-lattice]], [[lem-period-pairing-is-well-defined-and-computed-by-integration]]).

[F3] Weak-solution lemma: for a degree-zero divisor and a chain with boundary it, there is a weak solution $f$ of $D$ with $\frac{1}{2\pi i}\int_X\frac{\bar\partial f}{f}\wedge\omega=\int_c\omega$ for every $\omega\in\Omega(X)$, and $f$ is unique up to a smooth nowhere-vanishing factor ([[lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity]]).

[F4] $\bar\partial$-solvability criterion: a smooth $(0,1)$-form $\theta$ on $X$ equals $\bar\partial g$ for a smooth $g$ if and only if $\int_X\theta\wedge\omega=0$ for every $\omega\in\Omega(X)$ ([[lem-dbar-solvability-criterion-for-a-smooth-zero-one-form]]).

[F5] On a Riemann surface a smooth function is holomorphic exactly where $\bar\partial h=0$; moreover $\bar\partial(fe^{-g})=e^{-g}(\bar\partial f-f\,\bar\partial g)$ and the product of a weak solution with a smooth nowhere-vanishing factor is again a weak solution of the same divisor, with local powers $z^{n_p}$ ([[thm-d-dbar-decomposition-and-identities]], [[def-wirtinger-derivatives]], [[def-bigraded-complex-differential-forms]], [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]).

[F6] The forward direction: if $D=(f)$ is a principal divisor then $u(D)=0$ ([[lem-principal-divisors-have-vanishing-abel-jacobi-class]]).

[F7] On a connected Riemann surface any two points are joined by a continuous path; hence every divisor of degree zero is the boundary of a finite chain of paths ([[thm-connected-and-locally-path-connected-implies-path-connected]], [[def-riemann-surface-and-holomorphic-atlas]]).

[F8] Divisor orders, principal divisors and degrees are those of [[def-divisor-principal-and-canonical-divisor-riemann-surface]]; a weak solution of $D$ whose local factors are holomorphic is a meromorphic function with divisor $D$.

[F9] Full AC is inherited from the Hodge and Riemann-Roch interfaces used by the weak-solution and solvability suppliers ([[def-axiom-of-choice]]).

[F10] The path integral is additive under concatenation and reverses sign under reversal ([[def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface]]). Repeating paths realizes positive integer weights, and reversing paths realizes negative weights with the same boundary and integrals.

## Proof

**Proof technique:** direct.

1.1 Write $D=\sum_{j=1}^{k}(Q_j-P_j)$. By [F7] choose a continuous path $\gamma_j$ from $P_j$ to $Q_j$ for every $j$ and put $c:=\sum_j\gamma_j$; then $\partial c=D$. [F7]

2.1 By [F1] the class $u(D)$ is represented by the functional $\varphi(\omega):=\int_c\omega$. Suppose $u(D)=0$; then $\varphi\in\Lambda$, so $\varphi=e(\alpha)$ for some $\alpha\in H_1(X;\mathbb Z)$ by [F2], and choosing a continuous singular cycle $c_\alpha$ representing $\alpha$ we have $\varphi(\omega)=\int_{c_\alpha}\omega$ for all $\omega\in\Omega(X)$. Replacing $c$ by $c':=c-c_\alpha$ gives a chain with $\partial c'=D$ and $\int_{c'}\omega=0$ for every holomorphic $\omega$. [F1, F2, step 1.1]

3.1 Expand the integer coefficients of $c'$ by repeating positively weighted paths and reversing negatively weighted ones. By [F10] this produces a finite sum of paths with the same boundary $D$ and the same zero holomorphic integrals; denote it again by $c'$. Apply the weak-solution lemma [F3] to the divisor $D$ and the chain $c'$: there is a weak solution $f$ of $D$ with $\frac{1}{2\pi i}\int_X\frac{\bar\partial f}{f}\wedge\omega=\int_{c'}\omega=0$ for every $\omega\in\Omega(X)$. [F3, F10, step 2.1]

4.1 The smooth $(0,1)$-form $\theta:=\bar\partial f/f$ satisfies $\int_X\theta\wedge\omega=0$ for every $\omega\in\Omega(X)$ by step 3.1, so the solvability criterion [F4] provides a smooth $g:X\to\mathbb C$ with $\bar\partial g=\theta=\bar\partial f/f$. [F4, step 3.1]

5.1 Define $F:=f\,e^{-g}$. By [F5], $F$ is again a weak solution of $D$, and $\bar\partial F=e^{-g}(\bar\partial f-f\,\bar\partial g)=0$ by step 4.1. Hence $F$ is smooth on $X\setminus|D|$ and holomorphic there, while near each support point $F=z^{n_p}h$ with $h$ smooth, nowhere vanishing and $\bar\partial h=0$, so $h$ is holomorphic; therefore $F$ is a meromorphic function on $X$ with divisor $(F)=D$. Thus $D$ is principal. [F5, F8, step 4.1]

6.1 Conversely, if $D$ is principal then $u(D)=0$ by [F6]. Hence $D$ is principal if and only if $u(D)=0$, and the kernel of $u$ on $\operatorname{Div}^0(X)$ is exactly the subgroup of principal divisors; all of this holds under the inherited AC of [F9]. [F6, F9, step 5.1] ∎


## Source notes

The sufficiency direction is Forster's proof of Theorem 20.7(a) (*Lectures on Riemann Surfaces*, printed pp. 163-164): the weak solution, the identity $\int_c\omega=\frac{1}{2\pi i}\int\frac{\bar\partial f}{f}\wedge\omega$, and the correction $F=f e^{-g}$ solving the $\bar\partial$-equation; McMullen's completion of the proof of Theorem 15.5 (printed pp. 132-133) is the same argument. Necessity is the trace argument of Forster 20.7(b), proved for the chain form in [[lem-principal-divisors-have-vanishing-abel-jacobi-class]]. Looijenga's Propositions 7.5 and Theorem 7.6 (printed pp. 61-63) package the two directions as the homomorphism $I$ and its injectivity on $\operatorname{Pic}^0$.
