---
id: cex-cm-dalembert-and-vakonomic-evolutions-differ
kind: counterexample
title: "The d'Alembert and vakonomic motions of $z'=xy'$ differ from the same initial data"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-nonholonomic-velocity-constraint-law, lem-cm-c2-bump-functions, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-integration-by-parts, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, def-darboux-integral, thm-continuous-implies-integrable, thm-picard-lindelof-local-existence-and-uniqueness, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-first-order-ode-initial-value-problem-and-solution, thm-chain-rule-for-total-derivatives, thm-real-power-continuity-and-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant, def-ck-euclidean-maps-and-diffeomorphisms, def-vector-valued-derivative-and-integral, def-interval, def-euclidean-inner-product, def-abs-value, def-derivative]
dependency_roles:
  def-cm-nonholonomic-velocity-constraint-law: mathematical-premise
  lem-cm-c2-bump-functions: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-abs-value: mathematical-premise
  def-derivative: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. Cortes, M. de Leon, D. Martin de Diego and S. Martinez, Geometric description of vakonomic and nonholonomic dynamics. Comparison of solutions (SIAM J. Control Optim., author PDF), Section 1 (the two dynamics do not coincide in general) and Sections 2 and 5 (the vakonomic and Chetaev equations for the same linear constraints)"
      url: "http://terrano.ucsd.edu/jorge/publications/data/2003_CoLeMaMa-sicon.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 6.9 (Applications involving Non-holonomic Constraints; virtual work in the d'Alembert treatment)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Statement refuted

Every d'Alembert motion of the constraint $z'=xy'$ with unit mass and zero applied force that
satisfies the initial data

$$(x,y,z)(0)=(0,0,0),\qquad(x',y',z')(0)=(1,1,0)$$

is a vakonomic motion of the same constraint with the same initial data.

## Facts & Assumptions

**Given:** The definitions and notation of [[def-cm-nonholonomic-velocity-constraint-law]]: the
distribution $D(q)=\{\delta:\delta_z=x\delta_y\}$, the d'Alembert condition
$q''(t)\cdot\delta=0$ for all $\delta\in D(q(t))$ together with $z'=xy'$, the augmented functional
$\Phi(q,\eta)=\int_a^b\bigl[\tfrac12|q'|^2+\eta(z'-xy')\bigr]dt$, and the vakonomic stationary pairs
and motions defined by the vanishing of the directional derivative of $\Phi$ for every admissible
pair variation.

[F1] On the interval $[a,b]$ the maps $q\mapsto\Phi(q,\eta)$ are computed by differentiation under
the integral sign on a compact rectangle
([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]), and the resulting
coefficients are continuous; integration by parts
([[thm-integration-by-parts]], [[thm-linearity-of-the-integral]], [[def-darboux-integral]],
[[thm-continuous-implies-integrable]]) reduces the derivative to a linear combination of the
coefficients, and the bumps of [[lem-cm-c2-bump-functions]] detect a nonzero continuous
coefficient against an admissible variation.

[F2] The first-order system with right-hand side
$$F(x,y,z,X,Y,Z)=\bigl(X,Y,Z,\,0,\,-xXY/(1+x^2),\,XY/(1+x^2)\bigr)$$
is of class $C^1$ on $\mathbb R^6$, so Picard–Lindelöf gives a unique local solution through every
initial point, and the maximal-solution theorem gives the unique maximal solution
([[thm-picard-lindelof-local-existence-and-uniqueness]],
[[thm-existence-and-uniqueness-of-a-maximal-ode-solution]],
[[def-first-order-ode-initial-value-problem-and-solution]],
[[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F3] Calculus: the chain rule and the power rule give
$\frac{d}{dt}(1+t^2)^{-1/2}=-t(1+t^2)^{-3/2}$ and
$\frac{d}{dt}\bigl[t(1+t^2)^{-1/2}\bigr]=(1+t^2)^{-3/2}$ for all real $t$
([[thm-chain-rule-for-total-derivatives]], [[thm-real-power-continuity-and-derivatives]],
[[thm-algebra-of-derivatives]], [[def-derivative]], [[def-abs-value]]); a differentiable function
on an interval with vanishing derivative is constant ([[cor-zero-derivative-implies-constant]]),
and the Euclidean inner product is that of [[def-euclidean-inner-product]]
([[def-vector-valued-derivative-and-integral]], [[def-interval]]).

## Counterexample

**Proof technique:** direct; solve the d'Alembert system explicitly for the displayed data and show
that no multiplier can make the same curve stationary for the augmented functional.

1.1 **(the d'Alembert system.)** Let $q$ be a d'Alembert motion on an open interval containing $0$. Since $q''$ is orthogonal to $\delta=(1,0,0)$ and to $\delta=(0,1,x)$, we get $x''=0$ and $y''+xz''=0$. Put $\lambda:=z''$, a continuous function; then $y''=-\lambda x$ and $z''=\lambda$. Differentiating the constraint $z'=xy'$ gives $z''=x'y'+xy''$, so $\lambda=x'y'+x(-\lambda x)=x'y'-\lambda x^2$, hence $$\lambda=\frac{x'y'}{1+x^2},\qquad x''=0,\qquad y''=-\frac{xx'y'}{1+x^2},\qquad z''=\frac{x'y'}{1+x^2}.$$ [given, F1, algebra]

1.2 **(the vakonomic equations.)** Suppose $q$ is a vakonomic motion with the same data: there are $a<b$ in the motion's domain and a $C^2$ function $\eta$ on an open interval containing $[a,b]$ such that $(q,\eta)$ is a vakonomic stationary pair, i.e. the directional derivative of $\Phi$ vanishes for every admissible pair variation. Computing that derivative for a variation $(\xi,\zeta)$ with $\xi(a)=\xi(b)=0$ and integrating by parts in the terms containing $\xi'$ and $\zeta$ gives $$0=\int_a^b\Bigl[\bigl(-x''-\eta y'\bigr)\xi_x+\bigl(-y''+(\eta x)'\bigr)\xi_y +\bigl(-z''-\eta'\bigr)\xi_z\Bigr]dt+\int_a^b\zeta\,\bigl(z'-xy'\bigr)\,dt .$$ Taking first $\zeta=0$ and $\xi$ running through the bumps of [F1] in each component yields $x''=-\eta y'$, $y''=(\eta x)'$, $z''=-\eta'$ on $[a,b]$; then taking $\xi=0$ and $\zeta$ a bump gives $z'=xy'$. [F1, given, algebra]

2.1 **(existence and uniqueness.)** The system of step 1.1 is the first-order system of [F2]. Hence it has a unique maximal solution through the data $(x,y,z,X,Y,Z)(0)=(0,0,0,1,1,0)$; every d'Alembert motion with these data solves it, so the d'Alembert motion is unique. [F2, step 1.1]

3.1 **(the explicit solution.)** Define $$x(t):=t,\qquad y'(t):=(1+t^2)^{-1/2},\qquad z'(t):=t(1+t^2)^{-1/2},$$ and let $y,z$ be the primitives with $y(0)=z(0)=0$. By [F3], $$y''(t)=-t(1+t^2)^{-3/2}=-\frac{x(t)x'(t)y'(t)}{1+x(t)^2},\qquad z''(t)=(1+t^2)^{-3/2}=\frac{x'(t)y'(t)}{1+x(t)^2},$$ and $x''=0$, while $x(t)y'(t)=t(1+t^2)^{-1/2}=z'(t)$; the data at $0$ are $(0,0,0,1,1,0)$. Therefore this curve is a solution of the system defined on all of $\mathbb R$, so by step 2.1 it *is* the unique d'Alembert motion with the displayed data. Note $y'(t)>0$ and $y'(t)<1$ for $t>0$. [F2, F3, step 2.1, algebra]

4.1 **(contradiction.)** For the explicit motion of step 3.1 we have $x''=0$ and $y'>0$ on $[a,b]$, so the first equation of step 1.2 gives $\eta=0$ on $[a,b]$. Then $y''=(\eta x)'=\eta'x+\eta x'=0$ on $[a,b]$, on its interior. This is impossible: every nondegenerate interval $(a,b)$ contains a nonzero point $t$, where the explicit formula gives $y''(t)=-t(1+t^2)^{-3/2}\ne0$. Hence no such pair $(q,\eta)$ exists, and the d'Alembert motion of step 3.1 is not a vakonomic motion. [F3, step 3.1, step 1.2]

5.1 The displayed data therefore give a d'Alembert motion which is not a vakonomic motion with the same initial data, refuting the statement. [step 3.1, step 4.1] ∎

## Remarks

- The counterexample separates the two prescriptions as mathematical definitions; it does not by
  itself say which of them, if either, models a given physical system. The empirical question is
  the subject of the consuming physical items and requires its own apparatus assumptions and data.

- The specific numbers were chosen for an elementary closed-form solution; the general statement
  that the two dynamics need not coincide is the content of the cited treatments of vakonomic and
  non-holonomic mechanics, and the computation here is self-contained.
