---
id: ex-normalization-by-mobius-maps
kind: example
title: "Normalization of a solution by a Möbius postcomposition"
status: published
origin: pipeline
deps:
  - def-measurable-beltrami-coefficient
  - def-weak-solution-beltrami-equation
  - thm-measurable-riemann-mapping-sphere
  - def-beltrami-coefficient-and-maximal-dilatation
  - def-acl-sobolev-quasiconformal-homeomorphism
  - thm-acl-characterisation-of-w-one-p
  - def-wirtinger-derivatives
  - def-mobius-transformation
  - thm-three-point-transitivity-mobius-transformations
  - thm-mobius-transformations-biholomorphic-sphere
  - def-countable-choice
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-riemann-sphere-holomorphic-charts
  - rem-riemann-sphere-one-point-compactification
  - thm-determinant-sign-detects-orientation-change
  - def-geometric-quasiconformal-homeomorphism
  - def-complex-domain
dependency_level: 10
axiom_use: >-
  Assume AC for the global normalized solution and analytic quasiconformal
  interfaces. AC implies Countable Choice for the coefficient and weak-solution
  definitions. The explicit normalizing Möbius map and derivative computation
  use no choice.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §14.1, printed p. 196: uniqueness up to conformal postcomposition and normalization by three points; read in full."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 3 §2, printed p. 88: the measurable Riemann mapping theorem and its Möbius normalization ambiguity; read in full."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. It implies Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]). Fix $\nu\in\mathbb C$ with $|\nu|<1$, let $\mu$ be the sphere coefficient with finite-chart representative $\nu$, and set $A(z)=z+\nu\bar z$ on the finite complex domain ([[def-measurable-beltrami-coefficient]], [[def-complex-domain]], [[def-riemann-sphere-holomorphic-charts]], [[rem-riemann-sphere-one-point-compactification]]).

(a) **Evaluate the affine solution.** On the sphere, $A(0)=0$, $A(1)=1+\nu$, and $A(\infty)=\infty$. It is an orientation-preserving quasiconformal homeomorphism and is already normalized exactly when $\nu=0$ ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-geometric-quasiconformal-homeomorphism]]).

(b) **Find the normalizing map.** The unique Möbius map $M$ sending $(A(0),A(1),A(\infty))$ to $(0,1,\infty)$ is $M(w)=w/(1+\nu)$: a Möbius map fixing $0$ and $\infty$ has the form $M(w)=\lambda w$, and $M(1+\nu)=1$ forces $\lambda=1/(1+\nu)$ ([[def-mobius-transformation]], [[thm-three-point-transitivity-mobius-transformations]]).

(c) **Preserve the coefficient.** The normalized composite is $$f^\nu(z)=(M\circ A)(z)=\frac{z+\nu\bar z}{1+\nu}.$$ In the finite chart, its derivatives are $f^\nu_z=1/(1+\nu)$ and $f^\nu_{\bar z}=\nu/(1+\nu)$, so its coefficient is still $\nu$ and it solves $f_{\bar z}=\mu f_z$ weakly on the sphere ([[def-wirtinger-derivatives]], [[def-beltrami-coefficient-and-maximal-dilatation]], [[def-weak-solution-beltrami-equation]]). It fixes $0,1,\infty$ and is the unique normalized solution by [[thm-measurable-riemann-mapping-sphere]]. The Möbius map is biholomorphic in the sphere charts ([[thm-mobius-transformations-biholomorphic-sphere]]).

(d) **Every solution can be normalized.** If $f$ is any quasiconformal homeomorphic solution, the three points $f(0),f(1),f(\infty)$ are distinct. There is a unique Möbius map sending them to $(0,1,\infty)$; the composite is the normalized solution. Hence the full solution family is the set of Möbius postcompositions of $f^\nu$ ([[thm-three-point-transitivity-mobius-transformations]], [[thm-measurable-riemann-mapping-sphere]]).

## Facts & Assumptions

**Given:** AC; $\nu\in\mathbb C$ with $|\nu|<1$; the sphere coefficient $\mu$ with finite-chart representative $\nu$; and the affine map $A(z)=z+\nu\bar z$.

[F1] AC implies Countable Choice, required by the coefficient, weak-solution and ACL interfaces ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F2] A sphere coefficient is determined by its finite-chart representative and the infinity-chart pullback law; the weak equation is invariant under these holomorphic chart changes ([[def-measurable-beltrami-coefficient]], [[def-weak-solution-beltrami-equation]], [[def-riemann-sphere-holomorphic-charts]], [[rem-riemann-sphere-one-point-compactification]]).

[F3] Three-point transitivity gives a unique Möbius map carrying any ordered triple of distinct sphere points to any other such triple ([[thm-three-point-transitivity-mobius-transformations]]).

[F4] Every Möbius transformation is biholomorphic in the sphere charts ([[def-mobius-transformation]], [[thm-mobius-transformations-biholomorphic-sphere]]).

[F5] The analytic quasiconformal definition for maps between complex domains requires $W^{1,2}_{\mathrm{loc}}$ and the differential inequality; the ACL characterization [[thm-acl-characterisation-of-w-one-p]] identifies locally square-integrable coordinate-line derivatives of an ACL representative with weak derivatives; the Beltrami coefficient and maximal dilatation are determined by the two Wirtinger derivatives ([[def-complex-domain]], [[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-beltrami-coefficient-and-maximal-dilatation]], [[def-wirtinger-derivatives]]).

[F6] A positive real determinant gives the positive local orientation sign, and the sign of a homeomorphism is locally constant in oriented charts ([[thm-determinant-sign-detects-orientation-change]], [[def-geometric-quasiconformal-homeomorphism]]).

[F7] The normalized measurable Riemann mapping theorem supplies the unique normalized solution and says all solutions are its Möbius postcompositions ([[thm-measurable-riemann-mapping-sphere]]). The stable global proof supplies exactly this normalization and classification interface.

## Proof

**Proof technique:** evaluate the affine map, solve the three normalization equations, and differentiate the normalized composite.

1.1 Direct calculation gives $A_z=1$, $A_{\bar z}=\nu$, $J_A=1-|\nu|^2>0$, and $A^{-1}(w)=(w-\nu\bar w)/(1-|\nu|^2)$. Thus $A$ is a real-linear homeomorphism of $\mathbb C$; since $|A(z)|\ge(1-|\nu|)|z|$, it extends by $A(\infty)=\infty$ to a sphere homeomorphism. Its affine coordinate-line restrictions are absolutely continuous with locally square-integrable derivatives. In source and target infinity charts its expression is $a(w)=w\bar w/(\bar w+\nu w)$ for $w\ne0$, with $a(0)=0$. The denominator has modulus at least $(1-|\nu|)|w|$, so $a$ is continuous at $0$; its degree-one homogeneity and smoothness off $0$ give bounded derivatives there. Integrating along segments, splitting at $0$ if needed, makes $a$ Lipschitz. Thus its coordinate-line restrictions are absolutely continuous with locally square-integrable derivatives, and [F5] gives local $W^{1,2}$ in both charts. The pullback law [F2] transports the equation off $0$, a null point. Hence $A$ is analytically quasiconformal with coefficient $\nu$ and $K=(1+|\nu|)/(1-|\nu|)$; [F6] gives orientation preservation. The values $A(0)=0$ and $A(1)=1+\nu$ show it is already normalized exactly when $\nu=0$. [F2, F5, F6, given, algebra]

2.1 Since $|\nu|<1$, $1+\nu\ne0$. By [F3], there is a unique Möbius map $M$ sending $(0,1+\nu,\infty)$ to $(0,1,\infty)$. Write $M(w)=(aw+b)/(cw+d)$ with $ad-bc\ne0$. The conditions $M(0)=0$ and $M(\infty)=\infty$ force $b=c=0$, so $M(w)=\lambda w$ with $\lambda=a/d\ne0$; then $M(1+\nu)=1$ gives $\lambda=(1+\nu)^{-1}$. Thus $M(w)=w/(1+\nu)$, proving (b). [F3, F4, step 1.1, given, algebra]

3.1 Put $f^\nu=M\circ A$. In the finite chart, $f^\nu_z=1/(1+\nu)$ and $f^\nu_{\bar z}=\nu/(1+\nu)$, so $f^\nu_{\bar z}=\nu f^\nu_z$ and $\mu_{f^\nu}=\nu$. It is a sphere homeomorphism fixing $\infty$; in the infinity coordinates $w=1/z$ and $\eta=1/f^\nu(z)$ its expression is $$\eta(w)=\frac{(1+\nu)w\bar w}{\bar w+\nu w},\qquad \eta(0)=0.$$ This is $(1+\nu)a(w)$, with $a$ from step 1.1, so it has the same local $W^{1,2}$ regularity by linearity of weak derivatives. The pullback law in [F2] transports the weak equation to the infinity chart, where the coefficient still has modulus $|\nu|$; [F5] gives the analytic quasiconformal inequality there. Thus $f^\nu$ is a quasiconformal sphere homeomorphism and weak solution; its three values are $0,1,\infty$. By [F7] it is the unique normalized solution, proving (c). The local orientation sign remains positive by [F6]. [F1, F2, F4, F5, F6, F7, step 1.1, step 2.1, given]

4.1 Let $f$ be any quasiconformal homeomorphic solution. Its homeomorphism property makes $f(0),f(1),f(\infty)$ distinct. By [F3], the unique Möbius map carrying this triple to $(0,1,\infty)$ exists. By [F7], all solutions are Möbius postcompositions of $f^\nu$ and the normalized solution is unique; therefore the normalizing map is the inverse of the unique Möbius map in the family, and the full solution family has exactly the stated form. [F1, F3, F4, F7, step 3.1, given] ∎

## Source notes

Lyubich, Ch. 2 §14.1, printed p. 196, was read in full for the Möbius ambiguity and three-point normalization. Bishop, Ch. 3 §2, printed p. 88, was read in full as context for the same normalization statement; its Theorem 2.11 proof invokes an unresolved “Theorem ??”, so the affine computation above does not rely on it.

## Supplier reconciliation

The explicit maps and calculations above remain unchanged. Their exact normalized uniqueness and solution-family uses now consume the complete stable MRMT proof, and their analytic conventions consume the earlier12 definitions/equivalence. Root decisions and full-run certification are separate.
