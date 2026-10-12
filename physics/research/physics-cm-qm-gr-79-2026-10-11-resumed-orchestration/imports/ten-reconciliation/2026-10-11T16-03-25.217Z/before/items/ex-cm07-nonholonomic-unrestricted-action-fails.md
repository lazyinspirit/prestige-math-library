---
id: ex-cm07-nonholonomic-unrestricted-action-fails
kind: example
title: "The unrestricted action principle fails for the nonholonomic constraint z' = x y': the d'Alembert motion is not vakonomic"
status: draft
origin: session
domain: physics
dependency_level: 9
deps: [def-cm-nonholonomic-velocity-constraint-law, cex-cm-dalembert-and-vakonomic-evolutions-differ, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, thm-real-power-continuity-and-derivatives, def-real-power, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, lem-of-square-positive, def-abs-value, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-derivative, def-interval]
dependency_roles:
  def-cm-nonholonomic-velocity-constraint-law: mathematical-premise
  cex-cm-dalembert-and-vakonomic-evolutions-differ: mathematical-premise
  post-cm02-force-superposition: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-real-power: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-of-square-positive: mathematical-premise
  def-abs-value: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked check on the nonholonomic constraint z' = x y' with unit mass and zero applied force: the d'Alembert motion from the stated initial data has strictly positive y' and nonzero y'' on the positive half-line, so it cannot satisfy the vakonomic (unrestricted-action) equations of the same constraint, which force y'' to vanish wherever x'' does. Consequently the unrestricted action principle is not a substitute for the d'Alembert prescription on this branch. The example reports exact model computations, not measurements."
sources:
  references:
    - title: "J. Cortes, M. de Leon, D. Martin de Diego and S. Martinez, Geometric description of vakonomic and nonholonomic dynamics. Comparison of solutions (SIAM J. Control Optim., author PDF), Sections 1, 2 and 5"
      url: "http://terrano.ucsd.edu/jorge/publications/data/2003_CoLeMaMa-sicon.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 5.7 and 6.9: constrained variational systems and the virtual-work treatment of non-holonomic constraints"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Example

Adopt the constraint model of [[def-cm-nonholonomic-velocity-constraint-law]]:
unit mass in $\mathbb R^{3}$ with coordinates $(x,y,z)$, configuration domain
$\mathbb R^{3}$, the velocity constraint law $z'=xy'$, the d'Alembert
prescription $x''=0$, $y''=-\lambda x$, $z''=\lambda$ with
$\lambda=x'y'/(1+x^{2})$ along motions, and the vakonomic prescription
$x''=-\eta y'$, $y''=\eta'x+\eta x'$, $z''=-\eta'$ for the multiplier $\eta$
of the augmented action. Consider the initial data
$$(x,y,z)(0)=(0,0,0),\qquad(x',y',z')(0)=(1,1,0).$$

Then:

1. the curve
   $$x(t):=t,\qquad y(t):=\int_{0}^{t}\frac{ds}{\sqrt{1+s^{2}}},\qquad z(t):=\int_{0}^{t}s\,y'(s)\,ds=\sqrt{1+t^{2}}-1$$
   is a d'Alembert motion with these data, and it satisfies
   $y'(t)=(1+t^{2})^{-1/2}>0$ and
   $y''(t)=-t\,(1+t^{2})^{-3/2}$ for every $t\ge0$;
2. $y''(1/2)=-4/(5\sqrt{5})\ne0$;
3. consequently this d'Alembert motion is not a vakonomic motion of the same
   constraint with the same data: a vakonomic motion with $x(t)=t$ on an
   interval where $y'>0$ would have $\eta\equiv0$ there and hence $y''\equiv0$,
   contradicting clause 2;
4. hence the unrestricted action procedure — minimising the substituted or
   augmented action — does not reproduce the model's d'Alembert evolution on
   this nonholonomic branch.

## Facts & Assumptions

**Given:** The constraint model and initial data of the Example, and the displayed curve.

[F1] The constraint model ([[def-cm-nonholonomic-velocity-constraint-law]]): the allowed velocities and virtual displacements are $D(q)=\{(w_{x},w_{y},w_{z}):w_{z}=xw_{y}\}$; the d'Alembert equations with zero applied force and the vakonomic equations are those displayed in the Example; the model's sample Lagrangian is $\tfrac12\lvert v\rvert^{2}$.

[F2] The comparison result ([[cex-cm-dalembert-and-vakonomic-evolutions-differ]]): every d'Alembert motion with the stated data is claimed to be a vakonomic motion of the same constraint with the same data; the statement is refuted there by exhibiting the difference. In particular the two prescriptions are not equivalent for this constraint and data. The present example re-derives the discrepancy on explicit quantities.

[F3] Real-power calculus ([[thm-real-power-continuity-and-derivatives]], [[def-real-power]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[lem-of-square-positive]], [[def-abs-value]], [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-interval]]): $t\mapsto(1+t^{2})^{-1/2}$ is differentiable on $[0,\infty)$ with derivative $-t(1+t^{2})^{-3/2}$, the expression $1+t^{2}$ is positive, and $\sqrt{5}>0$.

[F4] The model setting ([[post-cm02-force-superposition]], [[def-cm01-configuration]], [[def-cm01-units]], [[def-euclidean-inner-product]]): the constraint model is posed for a one-label force model with vanishing force map; the quantities are read in the stated coordinates with the framework's dimensions.

## Verification

**Proof technique:** direct; substitute the displayed curve into the d'Alembert equations, evaluate the curvature terms, and derive the contradiction with the vakonomic system.

1.1 Clause 1, d'Alembert equations: with $x(t)=t$ one has $x'\equiv1$ and $x''\equiv0$; with $y'=(1+t^{2})^{-1/2}$ and $z'=ty'$ one computes, by [F3], $y''=-t(1+t^{2})^{-3/2},\qquad z''=y'+ty''=(1+t^{2})^{-1/2}\bigl(1-t^{2}(1+t^{2})^{-1}\bigr)=(1+t^{2})^{-3/2}.$ The d'Alembert multiplier is $\lambda=x'y'/(1+x^{2})=(1+t^{2})^{-1/2}/(1+t^{2})=(1+t^{2})^{-3/2}$, and indeed $y''=-\lambda x=-\lambda t$ and $z''=\lambda$; moreover the constraint holds by construction of $z$ and the data match: $x(0)=0$, $y(0)=0$, $z(0)=0$, $x'(0)=1$, $y'(0)=1$, $z'(0)=0$. Hence the curve is a d'Alembert motion with the stated data. [F1, F3, F4, given, algebra]

2.1 Clause 2: at $t=1/2$, $1+t^{2}=5/4$, so by [F3] $y''(1/2)=-(1/2)(5/4)^{-3/2}=-(1/2)\cdot 8/(5\sqrt{5})=-4/(5\sqrt{5})\ne0$, because $4\ne0$ and $5\sqrt{5}>0$. [F3, step 1.1, algebra]

3.1 Clause 3, contradiction: suppose the same curve were also a vakonomic motion with multiplier $\eta$. Its first vakonomic equation reads $x''=-\eta y'$; since $x''=0$ and $y'>0$ on $[0,\infty)$ by step 1.1, this forces $\eta=0$ on the interval; the second vakonomic equation $y''=\eta'x+\eta x'$ then gives $y''\equiv0$, contradicting step 2.1 at $t=1/2$. Hence the curve is not a vakonomic motion with these data. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Clause 4: since the d'Alembert motion with the stated data is not vakonomic, the two prescriptions differ on this branch, and the unrestricted action procedure cannot replace the d'Alembert equation of the model. This conclusion is confined to the displayed constraint and data; the holonomic reduction of this page concerns the separate holonomic branch. [F1, F2, step 3.1] ∎

## Remarks

- The verification uses only the two displayed prescriptions and exact
  calculus; the underlying separation of the two dynamics is recorded in the
  cited counterexample, and the model-theoretic warning belongs to the scope
  remark of this pair's main page.
