---
id: lem-emg-fx-dirichlet-energy-and-trace
kind: lemma
title: Local energy and zero-boundary closure for the charged constraint problem
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
proof_strategy: direct
deps:
  - def-wkp-zero-as-a-sobolev-closure
  - def-sobolev-space-wkp-and-its-norm
  - def-bounded-c-k-domain-and-boundary-charts
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-test-function-cutoffs-and-euclidean-localization
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 4, zero-boundary Poincare and trace arguments"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\Omega\subset\mathbb R^3$ be a bounded smooth domain and choose $R>0$ with $\Omega\subset(-R,R)^3$. Write $H^1_0(\Omega)$ for the $H^1$ closure of the compactly supported smooth functions. Then $\|v\|_{L^2}\le2R\|\nabla v\|_{L^2}$ for every $v\in H^1_0(\Omega)$. A function $u\in C^1(\overline\Omega)$ represents an element of $H^1_0(\Omega)$ if and only if $u=0$ on $\partial\Omega$.

## Statement references

[[def-wkp-zero-as-a-sobolev-closure]]

[[def-sobolev-space-wkp-and-its-norm]]

## Facts & Assumptions

**Given:** The axioms, domain, bounding cube and real-valued functions in the Statement.

[A1] The Axiom of Choice and Countable Choice are retained for the measure and Sobolev interfaces. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] The $H^1$ norm is the sum in quadrature of the $L^2$ function and weak-gradient norms; $H^1_0$ is the closure of $C_c^\infty$. [[def-sobolev-space-wkp-and-its-norm]] [[def-wkp-zero-as-a-sobolev-closure]]

[F2] Cauchy--Schwarz bounds a one-dimensional integral by its interval length and the integral of its square; Tonelli permits integration in successive coordinates. [[cor-cauchy-schwarz-inequality-for-l-two]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F3] A smooth boundary has local graph charts. Compact subsets of Euclidean open sets admit smooth cutoffs; finitely many such cutoffs, divided by their positive sum near a compact set, give a finite smooth partition there. [[def-bounded-c-k-domain-and-boundary-charts]] [[lem-test-function-cutoffs-and-euclidean-localization]]

## Proof

1.1 Extend $v\in C_c^\infty(\Omega)$ by zero. For fixed $(x_2,x_3)$, the fundamental theorem of calculus gives $v(x_1,x_2,x_3)=\int_{-R}^{x_1}\partial_1v(s,x_2,x_3)\,ds$. Cauchy--Schwarz bounds its square by $2R\int_{-R}^R|\partial_1v|^2\,ds$. Integrating over the cube gives $\|v\|_2^2\le(2R)^2\|\partial_1v\|_2^2\le(2R)^2\|\nabla v\|_2^2$. Pass to an $H^1$-convergent compactly supported smooth approximation to obtain the same inequality on $H^1_0$. [given, A1, F1, F2, algebra]

1.2 Suppose $u\in C^1(\overline\Omega)$ and $u=0$ on the boundary. Take a finite graph cover and a subordinate partition from [F3], with an additional interior term. In a boundary chart $\Psi(y',t)=(y',t+\varphi(y'))$, $t>0$ is the inward graph coordinate; its Jacobian is one and its differential and inverse differential are bounded on the compact chart. Each localized pullback $z$ is $C^1$, vanishes at $t=0$, and is supported away from artificial chart edges. The identity $z(y',t)=\int_0^t\partial_tz(y',s)\,ds$ gives $|z|\le Ct$. Choose a smooth $\eta_\delta(t)$ equal to zero for $t\le\delta$, one for $t\ge2\delta$, with $|\eta_\delta'|\le C/\delta$. The support of $z-z\eta_\delta$ is a layer of volume $O(\delta)$; both $Dz$ and $z\eta_\delta'$ are uniformly bounded there. Thus $\|z-z\eta_\delta\|_{H^1}=O(\delta^{1/2})$. Transport back and sum the finite partition. The resulting $C^1$ functions have compact support in $\Omega$, and ordinary mollification at a radius smaller than their distance to the boundary approximates each of them in $H^1$ by $C_c^\infty(\Omega)$. Hence $u\in H^1_0$. [given, F1, F3, construct, algebra]

2.1 Conversely, let $u\in C^1(\overline\Omega)\cap H^1_0$ and choose $u_j\in C_c^\infty(\Omega)$ converging in $H^1$. In a fixed smaller graph chart, for a $C^1$ pullback $w$ and $0<t<h$, the identity $w(y',0)=w(y',t)-\int_0^t\partial_tw(y',s)\,ds$ gives $|w(y',0)|^2\le2|w(y',t)|^2+2h\int_0^h|\partial_tw(y',s)|^2\,ds$. Average over $t\in(0,h)$ and integrate over a smaller fixed tangential base. Bounded chart Jacobians and differentials give $\|w(\cdot,0)\|_{L^2}^2\le C_h\|w\|_{H^1}^2$. Apply this to the localized pullback of $u-u_j$; its boundary value is the localized boundary value of $u$. The right side tends to zero, so that boundary value vanishes almost everywhere. Continuity makes it vanish everywhere: a nonzero value would persist on an open tangential disk of positive area. The finite cover proves $u|_{\partial\Omega}=0$. [given, A1, F1, F2, F3, step 1.2, algebra]

3.1 Steps 1.2 and 2.1 identify zero classical boundary values with the zero-boundary Sobolev closure for the stated $C^1$ representatives. Together with step 1.1 they establish both claims; no unproved trace-to-classical regularity upgrade has been used. [step 1.1, step 1.2, step 2.1] ∎
