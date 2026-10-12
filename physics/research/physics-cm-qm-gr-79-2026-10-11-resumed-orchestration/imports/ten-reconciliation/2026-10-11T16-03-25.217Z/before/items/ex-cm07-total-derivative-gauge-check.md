---
id: ex-cm07-total-derivative-gauge-check
kind: example
title: "A total-derivative Lagrangian on explicit data: the endpoint term and the unchanged equations"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [def-cm07-action-and-mechanical-lagrangian, pthm-cm07-boundary-terms-and-gauge, pthm-cm07-euler-lagrange-equations, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, thm-ftc-second-part, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-linearity-of-the-integral, thm-continuous-implies-integrable, def-darboux-integral, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-vector-valued-derivative-and-integral, def-derivative, def-interval]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  pthm-cm07-boundary-terms-and-gauge: physical-result
  pthm-cm07-euler-lagrange-equations: physical-result
  def-cm03-potential-and-mechanical-energy: physical-assumption
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked gauge check on the free one-label model: adding the total time derivative of F(t,x)=alpha*t*x to the free Lagrangian changes the action by the endpoint value alpha(b x(b) - a x(a)) and leaves the Euler-Lagrange expression equal to the original one on every curve, hence leaves the stationary curves and the model's equation of motion unchanged; the potential normalization U + gamma t is the special case F = -gamma t. The values are exact model values of a declared computation."
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 9.3: equivalent Lagrangians differing by a total time derivative, and the arbitrary constant in the potential"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.5.7, printed page 37 (PDF page 43): addition of a total derivative to the Lagrangian leaves the equations of motion unchanged"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---
## Example

Declare a one-label model of the force branch of
[[post-cm02-force-superposition]] with $N=1$, mass $m>0$, time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R$ and zero force map; the
mechanical Lagrangian is $L(t,x,v)=\tfrac12 mv^{2}$
([[def-cm07-action-and-mechanical-lagrangian]]). Fix $a=1$, $b=2$, a real
parameter $\alpha$, and the $C^{2}$ function

$$F(t,x):=\alpha\,t\,x,\qquad L'(t,x,v):=L(t,x,v)+F_{t}(t,x)+F_{x}(t,x)\,v=\tfrac12 mv^{2}+\alpha x+\alpha t\,v ,$$

so that $L'$ is the Lagrangian $L$ plus the total time derivative of $F$
([[pthm-cm07-boundary-terms-and-gauge]]). Consider the affine curve
$x_{*}(t):=t-1$ on $[1,2]$, which has $x_{*}(1)=0$ and $x_{*}(2)=1$ and
$x_{*}'\equiv1$.

Then:

1. for every $C^{2}$ curve $x:[1,2]\to\mathbb R$ one has
   $E_{L'}(x)(t)=E_{L}(x)(t)=-mx''(t)$ at every $t\in[1,2]$, and the
   stationary curves of $S$ and $S'$ coincide;
2. for the curve $x_{*}$ the actions satisfy
   $S'(x_{*})-S(x_{*})=F(2,x_{*}(2))-F(1,x_{*}(1))=2\alpha$, with exact values
   $S(x_{*})=\tfrac m2$ and $S'(x_{*})=\tfrac m2+2\alpha$ (in units of
   $\mu\ell^{2}\tau^{-1}$, with $\alpha$ of dimension $\mu\ell\tau^{-2}$);
3. in particular at $\alpha=1$ and $m=1$ one has $S=0.5$, $S'=2.5$ and
   endpoint term $2$ (in the stated units), while the equation of motion and
   the stationary curves are unchanged.

## Facts & Assumptions

**Given:** The model and functions of the Example, the curve $x_{*}$, and a $C^{2}$ curve $x:[1,2]\to\mathbb R$.

[F1] The gauge theorem ([[pthm-cm07-boundary-terms-and-gauge]]): for the mechanical Lagrangian $L$ and the $C^{2}$ function $F$, the Lagrangian $L'=L+F_{t}+F_{x}\cdot v$ satisfies $E_{L'}=E_{L}$ and $S'(x)=S(x)+F(b,x(b))-F(a,x(a))$ for every $C^{2}$ admissible curve, and the stationary curves coincide; the potential normalization $\widetilde U=U+\gamma t$ is the special case $F(t,x)=-\gamma t$ of that statement.

[F2] Stationarity criterion ([[pthm-cm07-euler-lagrange-equations]], [[def-cm07-action-and-mechanical-lagrangian]]): a $C^{2}$ curve is stationary for the action of a mechanical Lagrangian if and only if it satisfies $mx''=-\nabla U$; for the free model this is $x''=0$, whose solutions on $[1,2]$ are the affine curves.

[F3] Calculus facts ([[thm-ftc-second-part]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-linearity-of-the-integral]], [[thm-continuous-implies-integrable]], [[def-darboux-integral]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-interval]]): for this $F$ one has $F_{t}=\alpha x$, $F_{x}=\alpha t$, and $\int_{1}^{2}\bigl(F_{t}+F_{x}x'\bigr)dt=\int_{1}^{2}\frac{d}{dt}F(t,x(t))dt=F(2,x(2))-F(1,x(1))$ for every $C^{2}$ curve; and $S(x_{*})=\int_{1}^{2}\tfrac12m\,dt=\tfrac m2$.

## Verification

**Proof technique:** direct; compute the two Euler-Lagrange expressions on a general curve and evaluate the endpoint term and both actions on explicit data.

1.1 Euler-Lagrange expressions: for a $C^{2}$ curve $x$ on $[1,2]$, $\partial_{x}L'=\alpha$ and $\partial_{v}L'=mx'+\alpha t$, so $E_{L'}(x)(t)=\alpha-\frac{d}{dt}\bigl(mx'(t)+\alpha t\bigr)=\alpha-mx''(t)-\alpha=-mx''(t)=E_{L}(x)(t)$ pointwise, using the derivative rules of [F3]; hence the vanishing sets on $[1,2]$ coincide and, by [F2], so do the stationary curves. [F1, F2, F3, given, algebra]

1.2 Endpoint term on the explicit curve: $F(2,x_{*}(2))=F(2,1)=2\alpha$ and $F(1,x_{*}(1))=F(1,0)=0$, so the endpoint difference is $2\alpha$; by [F1] this is $S'(x_{*})-S(x_{*})$. [F1, F3, given, algebra]

2.1 Actions: $S(x_{*})=\int_{1}^{2}\tfrac12m\,dt=\tfrac m2$ and $S'(x_{*})=S(x_{*})+2\alpha=\tfrac m2+2\alpha$. [F1, F3, step 1.2, algebra]

3.1 Finite data: at $\alpha=1$ and $m=1$ the two actions are $S=1/2$ and $S'=5/2$ in the units of the statement, differing by the endpoint term $2$; the curve $x_{*}$ is affine, hence stationary for both actions by [F2], and the model's equation $x''=0$ on $[1,2]$ is the same for both. [F2, step 1.1, step 2.1, algebra]

4.1 Clauses 1-3 are verified: the total-derivative modification changes the action by the endpoint value of $F$ and leaves the Euler-Lagrange expression, the stationary curves and the model equation unchanged; the potential normalization is the case $F=-\gamma t$ by [F1]. [step 1.1, step 1.2, step 2.1, step 3.1, F1] ∎

## Remarks

- The endpoint value $2\alpha$ is not the difference of a physical energy: it
  depends on the chosen $F$ and the endpoints. The illustration complements the
  gauge theorem of this page, which licenses reading the potential's arbitrary
  $c(t)$ as such a total derivative.
