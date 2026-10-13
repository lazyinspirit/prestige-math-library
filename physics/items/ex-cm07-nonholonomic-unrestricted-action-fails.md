---
id: ex-cm07-nonholonomic-unrestricted-action-fails
kind: example
title: "The unrestricted action principle fails for the normalized nonholonomic relation $z_s = x y_s$: the d'Alembert motion is not vakonomic"
status: published
origin: session
domain: physics
dependency_level: 9
deps: [def-cm-nonholonomic-velocity-constraint-law, cex-cm-dalembert-and-vakonomic-evolutions-differ, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, thm-real-power-continuity-and-derivatives, def-real-power, thm-of-square-roots, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-ftc-second-part, thm-ftc-first-part, thm-additivity-over-subintervals, thm-continuous-implies-integrable, def-oriented-integral, lem-of-square-positive, def-abs-value, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-derivative, def-interval]
dependency_roles:
  def-cm-nonholonomic-velocity-constraint-law: mathematical-premise
  cex-cm-dalembert-and-vakonomic-evolutions-differ: mathematical-premise
  post-cm02-force-superposition: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-real-power: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-oriented-integral: mathematical-premise
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
where $T_{0}>0$, $L_{0}>0$ and $m_{0}>0$ are reference quantities with
$[T_{0}]=\tau$, $[L_{0}]=\ell$ and $[m_{0}]=\mu$. Primes below mean differentiation with respect to $s$. The
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
   is a d'Alembert motion with these data on $\mathbb R$, and it satisfies
   $y_{s}(s)=(1+s^{2})^{-1/2}>0$ and
   $y_{ss}(s)=-s\,(1+s^{2})^{-3/2}$ for every $s\in\mathbb R$, so
   $y_{ss}(s)\ne0$ whenever $s\ne0$;
2. $y_{ss}(1/2)=-4/(5\sqrt{5})\ne0$;
3. consequently this d'Alembert motion is not a vakonomic motion of the same
   constraint with the same data: on any nondegenerate interval where a
   vakonomic pair for this curve is stationary, $x_{ss}=0$ and $y_{s}>0$
   force $\eta\equiv0$, and then the vakonomic equation forces
   $y_{ss}\equiv0$. Every nondegenerate interval contains some $s\ne0$, which
   contradicts clause 1;
4. hence, for this normalized model and initial data, the vakonomic
   stationary-action prescription does not reproduce the d'Alembert motion.
   This conclusion concerns the augmented-action prescription defined by the
   vakonomic law above; it makes no claim about a separately specified
   minimization problem or other variational prescriptions.

## Facts & Assumptions

**Given:** The normalized constraint model and initial data of the Example, the scales $L_{0},T_{0},m_{0}$ and the displayed curve.

[F1] The constraint model ([[def-cm-nonholonomic-velocity-constraint-law]]): in normalized variables the allowed velocities and virtual displacements are $D(q)=\{(w_{x},w_{y},w_{z}):w_{z}=xw_{y}\}$; the normalized sample Lagrangian is $\tfrac12\lvert q_{s}\rvert^{2}$. The displayed d'Alembert equations follow from acceleration orthogonal to $D(q)$ and differentiation of the constraint; the displayed vakonomic equations are necessary for augmented-action stationarity, as derived in the Counterexample paragraphs headed "the d'Alembert system" and "the vakonomic equations" of [[cex-cm-dalembert-and-vakonomic-evolutions-differ]].

[F2] The comparison result ([[cex-cm-dalembert-and-vakonomic-evolutions-differ]]): every d'Alembert motion with the stated data is claimed to be a vakonomic motion of the same constraint with the same data; the statement is refuted there by exhibiting the difference. In particular the two prescriptions are not equivalent for this constraint and data. The present example re-derives the discrepancy on explicit quantities.

[F3] Real-power and integral calculus ([[thm-real-power-continuity-and-derivatives]], [[def-real-power]], [[thm-of-square-roots]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-ftc-first-part]], [[thm-ftc-second-part]], [[thm-additivity-over-subintervals]], [[thm-continuous-implies-integrable]], [[def-oriented-integral]], [[lem-of-square-positive]], [[def-abs-value]], [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-interval]]): $s\mapsto(1+s^{2})^{-1/2}$ is continuously differentiable on $\mathbb R$ with derivative $-s(1+s^{2})^{-3/2}$, the expression $1+s^{2}$ is positive, and $\sqrt{5}>0$. Continuous integrands are integrable on every nondegenerate compact interval. Oriented additivity gives $\int_u^v f+\int_v^w f=\int_u^w f$ for arbitrary endpoints in such an interval. The first part of the fundamental theorem differentiates $v\mapsto\int_A^v f$ on a fixed $[A,B]$, and its second part evaluates the integral of an integrable derivative.

[F4] The model setting ([[def-cm01-configuration]], clause (e), [[def-cm01-units]], [[def-euclidean-inner-product]]): realize the separately adopted d'Alembert prescription of [F1] by one particle of mass $m_{0}$ with $C^2$ position curve $\mathbf r(t)=L_{0}q(t/T_{0})$, where $q=(x,y,z):\mathbb R\to\mathbb R^3$. The applied force input $F_{\mathrm{app}}:\mathbb R\times\mathbb R^3\times\mathbb R^3\to\mathbb R^3$ is identically zero. Along a d'Alembert motion the ideal reaction is $\mathbf R(t)=(m_{0}L_{0}/T_{0}^{2})\lambda(t/T_{0})(0,-x(t/T_{0}),1)$, a continuous vector of force dimension, so $m_{0}\ddot{\mathbf r}=F_{\mathrm{app}}+\mathbf R$. Its pairing with every physical virtual displacement $L_{0}\delta$, $\delta\in D(q)$, vanishes because $\delta_z=x\delta_y$. Thus zero applied force does not mean zero total force. This constrained prescription is outside [[post-cm02-force-superposition]], clause (i), which explicitly excludes constrained dynamics; that postulate supplies no equation with zero total force for this curve.

## Verification

**Proof technique:** direct; substitute the displayed curve into the d'Alembert equations, evaluate the curvature terms, and derive the contradiction with the vakonomic system.

1.1 Clause 1, integral derivatives: for any $s_0\in\mathbb R$, choose $A<\min(0,s_0)$ and $B>\max(0,s_0)$. For either continuous integrand $f(u)=(1+u^2)^{-1/2}$ or $f(u)=u(1+u^2)^{-1/2}$, oriented additivity gives $\int_0^s f=\int_A^s f-\int_A^0 f$ for $s\in[A,B]$. The first part of the fundamental theorem differentiates the first term at the interior point $s_0$ and the second term is constant, so the integral has derivative $f(s_0)$, including when $s_0\le0$. Thus $y_s=(1+s^2)^{-1/2}$ and $z_s=s y_s$ on $\mathbb R$. The derivative of $\sqrt{1+s^2}$ is $s(1+s^2)^{-1/2}$; the second part of the fundamental theorem on the interval between $0$ and $s$, with oriented reversal for $s<0$ and the zero-integral convention for $s=0$, gives $z(s)=\sqrt{1+s^2}-1$. [F3, given, algebra]

2.1 Clause 1, d'Alembert equations: with $x(s)=s$ one has $x_s\equiv1$ and $x_{ss}\equiv0$; differentiating step 1.1 by [F3] gives $y_{ss}=-s(1+s^{2})^{-3/2}$ and $z_{ss}=y_s+s y_{ss}=(1+s^{2})^{-3/2}$, both continuous, so the curve is $C^2$. The d'Alembert multiplier is $\lambda=x_s y_s/(1+x^2)=(1+s^2)^{-3/2}$, so $y_{ss}=-\lambda x$ and $z_{ss}=\lambda$; the constraint holds by step 1.1, and the initial data match. Thus the curve is a d'Alembert motion on $\mathbb R$ with the stated data, $y_s>0$ everywhere, and $y_{ss}$ vanishes only at $s=0$. [F1, F3, F4, step 1.1, given, algebra]

3.1 Clause 2: at $s=1/2$, $1+s^{2}=5/4$, so by [F3] $y_{ss}(1/2)=-(1/2)(5/4)^{-3/2}=-(1/2)\cdot 8/(5\sqrt{5})=-4/(5\sqrt{5})\ne0$, because $4\ne0$ and $5\sqrt{5}>0$. [F3, step 2.1, algebra]

3.2 Clause 3, contradiction: suppose the same curve were also vakonomic, with a $C^2$ multiplier $\eta$ making the augmented pair stationary on some nondegenerate interval $[a,b]$. Its first vakonomic equation reads $x_{ss}=-\eta y_s$; since $x_{ss}=0$ and $y_s>0$ everywhere by step 2.1, this forces $\eta=0$ on $[a,b]$. The second equation then gives $y_{ss}=0$ on $(a,b)$. Choose $s_0\in(a,b)$ with $s_0\ne0$, which exists because $(a,b)$ is a nonempty open interval; step 2.1 gives $y_{ss}(s_0)\ne0$, a contradiction. Hence no interval in the vakonomic definition makes this curve stationary, so it is not a vakonomic motion with these normalized data. [F1, F2, step 2.1, algebra]

4.1 Clause 4: since the d'Alembert motion with these normalized data is not vakonomic by step 3.2, the vakonomic stationary-action prescription does not reproduce that motion for this model and data. The proof asserts no conclusion about minimization or other variational prescriptions, and no universal claim about all velocity constraints follows; the holonomic reduction of this page concerns the separate holonomic branch. [F1, F2, step 3.2] ∎

## Remarks

- The verification uses only the two displayed prescriptions and exact calculus; the underlying separation of the two dynamics is recorded in the cited counterexample, and the model-theoretic warning belongs to the scope remark of this pair's main page.
