---
id: ex-cm07-nonholonomic-unrestricted-action-fails
kind: example
title: "The unrestricted action principle fails for the normalized nonholonomic relation $z_s = x y_s$: the d'Alembert motion is not vakonomic"
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
physical_scope: "A worked check in dimensionless normalized coordinates and time, with physical length and time scales declared, on the nonholonomic relation z_s = x y_s: the d'Alembert motion from the stated normalized initial data has strictly positive y_s and nonzero y_{ss} for s>0, so it cannot satisfy the vakonomic (unrestricted-action) equations of the same constraint, which force y_{ss} to vanish wherever x_{ss} does. Thus these two prescriptions differ for this model and data, so no general equivalence holds. The example reports exact model computations, not measurements."
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

Adopt the constraint model of [[def-cm-nonholonomic-velocity-constraint-law]]
in dimensionless normalized variables: let $s=t/T_{0}$ be dimensionless time
and $(x,y,z)=\mathbf r/L_{0}\in\mathbb R^{3}$ be dimensionless coordinates,
where $[T_{0}]=\tau$, $[L_{0}]=\ell$, and the physical mass scale is
$[m_{0}]=\mu$. Primes below mean differentiation with respect to $s$. The
normalized unit-mass equations have zero applied force and velocity constraint
$z_{s}=xy_{s}$; in physical variables this is
$\dot r_{z}=(r_{x}/L_{0})\dot r_{y}$, which is dimensionally consistent.
The physical kinetic action is $m_{0}L_{0}^{2}/T_{0}$ times the normalized
action; scaling the augmented multiplier by $m_{0}L_{0}/T_{0}$ makes its
augmented action the same positive multiple of the normalized one, preserving
stationarity. Physical reactions scale as $m_{0}L_{0}/T_{0}^{2}$ times
normalized reactions, and physical virtual displacements scale as $L_{0}$, so
the zero-virtual-work condition is preserved. In these normalized variables
the d'Alembert prescription is
$x_{ss}=0$, $y_{ss}=-\lambda x$, $z_{ss}=\lambda$ with
$\lambda=x_{s}y_{s}/(1+x^{2})$ along motions, and the vakonomic prescription
is $x_{ss}=-\eta y_{s}$, $y_{ss}=\eta_{s}x+\eta x_{s}$,
$z_{ss}=-\eta_{s}$ for the normalized multiplier $\eta$. Consider the
normalized initial data
$$(x,y,z)(0)=(0,0,0),\qquad(x_{s},y_{s},z_{s})(0)=(1,1,0).$$

Then:

1. the curve
   $$x(s):=s,\qquad y(s):=\int_{0}^{s}\frac{du}{\sqrt{1+u^{2}}},\qquad z(s):=\int_{0}^{s}u\,y_{s}(u)\,du=\sqrt{1+s^{2}}-1$$
   is a d'Alembert motion with these data, and it satisfies
   $y_{s}(s)=(1+s^{2})^{-1/2}>0$ and
   $y_{ss}(s)=-s\,(1+s^{2})^{-3/2}$ for every $s\ge0$;
2. $y_{ss}(1/2)=-4/(5\sqrt{5})\ne0$;
3. consequently this d'Alembert motion is not a vakonomic motion of the same
   constraint with the same data: a vakonomic motion with $x(s)=s$ on an
   interval where $y_{s}>0$ would have $\eta\equiv0$ there and hence
   $y_{ss}\equiv0$,
   contradicting clause 2;
4. hence for this normalized model and initial data the unrestricted-action
   procedure — stationary or minimizing use of the substituted or augmented
   action — does not reproduce the d'Alembert evolution.

## Facts & Assumptions

**Given:** The normalized constraint model and initial data of the Example, the scales $L_{0},T_{0},m_{0}$ and the displayed curve.

[F1] The constraint model ([[def-cm-nonholonomic-velocity-constraint-law]]): in normalized variables the allowed velocities and virtual displacements are $D(q)=\{(w_{x},w_{y},w_{z}):w_{z}=xw_{y}\}$; the d'Alembert equations with zero applied force and the vakonomic equations are those displayed in the Example; the normalized sample Lagrangian is $\tfrac12\lvert q_{s}\rvert^{2}$.

[F2] The comparison result ([[cex-cm-dalembert-and-vakonomic-evolutions-differ]]): every d'Alembert motion with the stated data is claimed to be a vakonomic motion of the same constraint with the same data; the statement is refuted there by exhibiting the difference. In particular the two prescriptions are not equivalent for this constraint and data. The present example re-derives the discrepancy on explicit quantities.

[F3] Real-power calculus ([[thm-real-power-continuity-and-derivatives]], [[def-real-power]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[lem-of-square-positive]], [[def-abs-value]], [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-interval]]): $s\mapsto(1+s^{2})^{-1/2}$ is differentiable on $[0,\infty)$ with derivative $-s(1+s^{2})^{-3/2}$, the expression $1+s^{2}$ is positive, and $\sqrt{5}>0$.

[F4] The model setting ([[post-cm02-force-superposition]], [[def-cm01-configuration]], [[def-cm01-units]], [[def-euclidean-inner-product]]): the constraint model is posed for a one-label force model with vanishing force map; the quantities are read in the stated coordinates with the framework's dimensions.

## Verification

**Proof technique:** direct; substitute the displayed curve into the d'Alembert equations, evaluate the curvature terms, and derive the contradiction with the vakonomic system.

1.1 Clause 1, d'Alembert equations: with $x(s)=s$ one has $x_{s}\equiv1$ and $x_{ss}\equiv0$; with $y_{s}=(1+s^{2})^{-1/2}$ and $z_{s}=s y_{s}$ one computes, by [F3], $y_{ss}=-s(1+s^{2})^{-3/2},\qquad z_{ss}=y_{s}+s y_{ss}=(1+s^{2})^{-1/2}\bigl(1-s^{2}(1+s^{2})^{-1}\bigr)=(1+s^{2})^{-3/2}.$ The d'Alembert multiplier is $\lambda=x_{s}y_{s}/(1+x^{2})=(1+s^{2})^{-1/2}/(1+s^{2})=(1+s^{2})^{-3/2}$, and indeed $y_{ss}=-\lambda x=-\lambda s$ and $z_{ss}=\lambda$; moreover the constraint holds by construction of $z$ and the data match: $x(0)=0$, $y(0)=0$, $z(0)=0$, $x_{s}(0)=1$, $y_{s}(0)=1$, $z_{s}(0)=0$. Hence the curve is a d'Alembert motion with the stated normalized data. [F1, F3, F4, given, algebra]

2.1 Clause 2: at $s=1/2$, $1+s^{2}=5/4$, so by [F3] $y_{ss}(1/2)=-(1/2)(5/4)^{-3/2}=-(1/2)\cdot 8/(5\sqrt{5})=-4/(5\sqrt{5})\ne0$, because $4\ne0$ and $5\sqrt{5}>0$. [F3, step 1.1, algebra]

3.1 Clause 3, contradiction: suppose the same curve were also a vakonomic motion with multiplier $\eta$. Its first vakonomic equation reads $x_{ss}=-\eta y_{s}$; since $x_{ss}=0$ and $y_{s}>0$ on $[0,\infty)$ by step 1.1, this forces $\eta=0$ on the interval; the second vakonomic equation $y_{ss}=\eta_{s}x+\eta x_{s}$ then gives $y_{ss}\equiv0$, contradicting step 2.1 at $s=1/2$. Hence the curve is not a vakonomic motion with these normalized data. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Clause 4: since the d'Alembert motion with these normalized data is not vakonomic, the two prescriptions differ for this model and data, so unrestricted action cannot replace its d'Alembert equation here. No universal claim about all velocity constraints follows; the holonomic reduction of this page concerns the separate holonomic branch. [F1, F2, step 3.1] ∎

## Remarks

- The verification uses only the two displayed prescriptions and exact
  calculus; the underlying separation of the two dynamics is recorded in the
  cited counterexample, and the model-theoretic warning belongs to the scope
  remark of this pair's main page.
