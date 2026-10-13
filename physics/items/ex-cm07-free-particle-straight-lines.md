---
id: ex-cm07-free-particle-straight-lines
kind: example
title: "The free particle: the unique stationary curve between fixed endpoints is the straight uniform motion, and it minimises the action"
status: published
origin: session
domain: physics
dependency_level: 16
deps: [def-cm07-action-and-mechanical-lagrangian, pthm-cm07-euler-lagrange-equations, pthm-cm07-newton-equivalence, def-cm02-newtonian-flow, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-velocity-acceleration, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-ftc-second-part, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, thm-nonnegative-continuous-with-zero-integral-vanishes, thm-continuous-implies-integrable, def-darboux-integral, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-derivative, def-interval]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  pthm-cm07-euler-lagrange-equations: physical-result
  pthm-cm07-newton-equivalence: physical-result
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-nonnegative-continuous-with-zero-integral-vanishes: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked check of the stationary-action equivalence on the free one-label model: zero force map, zero potential, Cartesian Lagrangian of a free particle; on every closed time interval the stationary curves are exactly the affine uniform motions, for each pair of endpoint configurations there is exactly one, and the action difference to the stationary curve is a nonnegative quadratic functional of the variation, so the stationary curve is a minimiser within the fixed-endpoint class. The mass, position, time and velocity carry dimensions mass, length, time and length per time, respectively. All quantities are model values under the declared idealization of a particle subject to no force."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.1, printed pages 10-13 (PDF pages 16-19): the free particle action and the straight-line stationary path"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.1, chapter pages 1-2: free motion as uniform straight motion of a particle with fixed mass"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Example

Declare a one-label model of the force branch of
[[post-cm02-force-superposition]] with $N=1$, mass $m>0$, time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$ and zero force map
$F\equiv0$; this is the global potential model with potential $U\equiv0$ and no
residual forces ([[def-cm03-potential-and-mechanical-energy]]), whose
mechanical Lagrangian is
$$L(t,x,v)=\tfrac12\,m\lvert v\rvert_{2}^{2}$$
([[def-cm07-action-and-mechanical-lagrangian]]). Let $a<b$, let
$x_{a},x_{b}\in\mathbb R^{3}$, and consider the $C^{2}$ curves
$x:[a,b]\to\mathbb R^{3}$ with $x(a)=x_{a}$ and $x(b)=x_{b}$. Under the
units of [[def-cm01-units]], $[m]=\mu$, $[x]=[x_{a}]=[x_{b}]=\ell$,
$[t]=[a]=[b]=\tau$, and $[x']=\ell\tau^{-1}$.

Then:

1. $x$ is stationary for the action $S$ if and only if $x$ is affine,
   $x(t)=x_{a}+v_{0}(t-a)$ with constant $v_{0}\in\mathbb R^{3}$; consequently
   there is exactly one stationary curve with the prescribed endpoints,
   $$x_{*}(t):=x_{a}+\frac{t-a}{b-a}\,(x_{b}-x_{a}),\qquad x_{*}'=\frac{x_{b}-x_{a}}{b-a}.$$
2. For every variation $\eta$ of $x_{*}$ one has the exact identity
   $$S(x_{*}+\eta)-S(x_{*})=\frac m2\int_{a}^{b}\lvert\eta'(t)\rvert_{2}^{2}\,dt\ge0,$$
   with equality if and only if $\eta=0$; hence $x_{*}$ is the unique minimiser
   of $S$ in the class of $C^{2}$ curves with these endpoints.
3. The global affine curve $x_{\max}:\mathbb R\to\mathbb R^{3}$ defined by
   $x_{\max}(t)=x_{a}+v_{0}(t-a)$, with
   $v_{0}:=(x_{b}-x_{a})/(b-a)$, is the unique maximal motion through the datum
   $\bigl(a,x_{a},v_{0}\bigr)$, and $x_{*}=x_{\max}|_{[a,b]}$.

All quantities are model values; no measurement is reported.

## Facts & Assumptions

**Given:** The model data of the Example, $a<b$, the endpoints $x_{a},x_{b}$, the curve $x_{*}$ and a variation $\eta$ with $\eta(a)=\eta(b)=0$ of $x_{*}$.

[F1] The chart and the equivalence ([[def-cm07-action-and-mechanical-lagrangian]], [[pthm-cm07-euler-lagrange-equations]]): $(O,L)$ with $O=\mathbb R\times\mathbb R^{3}\times\mathbb R^{3}$ is a time-dependent Lagrangian chart, and a $C^{2}$ curve $x$ is stationary for $S$ if and only if $m x''(t)=-\nabla U(t,x(t))=0$ for every $t\in[a,b]$.

[F2] Motion and maximal motion ([[pthm-cm07-newton-equivalence]], [[def-cm02-newtonian-flow]]): the stationary curves of $S$ on $[a,b]$ are the restrictions of the motions of the model with interval containing $[a,b]$; every motion with $\mathsf M x''=0$ is affine, and through each datum there is exactly one maximal motion.

[F3] Integral and derivative calculus ([[thm-ftc-second-part]], [[thm-linearity-of-the-integral]], [[thm-monotonicity-of-the-integral]], [[thm-nonnegative-continuous-with-zero-integral-vanishes]], [[thm-continuous-implies-integrable]], [[def-darboux-integral]], [[def-euclidean-inner-product]], [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-interval]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]]): the integral is linear and monotone on continuous integrands; a continuous nonnegative function with zero integral vanishes identically; and componentwise the fundamental theorem gives $\int_{u}^{v}f'=f(v)-f(u)$ for the $C^{1}$ functions used here. The derivatives of a $C^{2}$ curve on $[a,b]$ are continuous and the usual derivative algebra applies.

## Verification

**Proof technique:** direct; solve the second-order equation of the free model, then expand the action of a varied curve and integrate by parts.

1.1 Equation and uniqueness: by [F1], stationary means $x''\equiv0$ on $[a,b]$ because $m>0$. Componentwise, [F3] applied to $x'$ gives $x'(t)-x'(a)=\int_a^t x''(u)\,du=0$ for every $t\in[a,b]$; applying it to $x$ then gives $x(t)=x(a)+x'(a)(t-a)$, so $x$ is affine. Conversely an affine curve has $x''\equiv0$ and is stationary by [F1]. Its endpoint values force $x'(a)=(x_b-x_a)/(b-a)$, well defined because $b>a$; hence $x_*$ is the unique stationary curve with the prescribed endpoints. [F1, F3, given, algebra]

2.1 Expansion of the action: let $\eta$ be a variation. Since $L$ is quadratic with no linear term, $S(x_{*}+\eta)-S(x_{*})=\frac m2\int_{a}^{b}\bigl(\lvert x_{*}'+\eta'\rvert_{2}^{2}-\lvert x_{*}'\rvert_{2}^{2}\bigr)dt=\frac m2\int_{a}^{b}\bigl(2\,x_{*}'\cdot\eta'+\lvert\eta'\rvert_{2}^{2}\bigr)dt .$ The first term vanishes: $x_{*}'$ is the constant vector $v_{0}$, so by [F3] $\int_{a}^{b}x_{*}'\cdot\eta'\,dt=v_{0}\cdot\int_{a}^{b}\eta'\,dt=v_{0}\cdot\bigl(\eta(b)-\eta(a)\bigr)=0$ because $\eta$ vanishes at both endpoints. Hence $S(x_{*}+\eta)-S(x_{*})=\frac m2\int_{a}^{b}\lvert\eta'\rvert_{2}^{2}dt\ge0$ by [F3]. [F3, step 1.1, algebra]

3.1 Equality case: if the integral vanishes, the continuous nonnegative integrand $\lvert\eta'\rvert_{2}^{2}$ vanishes identically on $[a,b]$ by [F3], so $\eta'\equiv0$. The fundamental theorem in [F3] gives $\eta(t)-\eta(a)=\int_a^t\eta'(u)\,du=0$ componentwise; since $\eta(a)=0$, $\eta\equiv0$. Thus the stationary curve is the unique minimiser in the fixed-endpoint class. [F3, step 2.1, algebra]

4.1 Consistency with the flow: by [F2] the curve $x_{*}$ is the restriction of the maximal motion through $\bigl(a,x_{a},v_{0}\bigr)$; the affine curve $t\mapsto x_{a}+v_{0}(t-a)$ is a motion on all of $\mathbb R$, hence the maximal motion is defined for all times and equals $x_{*}$ on $[a,b]$. [F2, step 1.1] ∎

## Remarks

- The exact identity of step 2.1 shows that for the free particle the
  stationary curve is a genuine minimiser, not a saddle; the oscillator
  example of this page exhibits the opposite phenomenon for large intervals.
  Both computations are model checks of the stationarity theorem; neither is a
  claim that nature extremises an action.
