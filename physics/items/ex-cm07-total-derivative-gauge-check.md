---
id: ex-cm07-total-derivative-gauge-check
kind: example
title: "A total-derivative Lagrangian on explicit data: the endpoint term and the unchanged equations"
status: published
origin: session
domain: physics
dependency_level: 16
deps: [def-cm07-action-and-mechanical-lagrangian, pthm-cm07-boundary-terms-and-gauge, pthm-cm07-euler-lagrange-equations, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, thm-ftc-second-part, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-linearity-of-the-integral, thm-continuous-implies-integrable, def-darboux-integral, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-vector-valued-derivative-and-integral, def-derivative, def-interval]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  pthm-cm07-boundary-terms-and-gauge: physical-result
  pthm-cm07-euler-lagrange-equations: physical-result
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
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
physical_scope: "A worked gauge check on the free one-label model in three-dimensional configuration space: adding the total time derivative of F(t,x)=alpha*t*x_1 to the free Lagrangian changes the action by endpoint values and leaves the Euler-Lagrange expression equal to the original one, hence leaves stationary curves and the model equation unchanged. The position is a vector of length dimension, time has time dimension, alpha has force dimension, and F has action dimension. The potential normalization U + gamma*t is the special case F = -gamma*t^2/2, with gamma of energy-per-time dimension. The values are exact model values of a declared computation."
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
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$ and zero force map; the
mechanical Lagrangian is $L(t,x,v)=\tfrac12m\lvert v\rvert_{2}^{2}$
([[def-cm07-action-and-mechanical-lagrangian]]). Let $t_{0}>0$ be a time scale,
fix the interval $[t_{0},2t_{0}]$, a dimensioned parameter $\alpha$ with
$[\alpha]=\mu\ell\tau^{-2}$, and the $C^{2}$ function

$$F(t,x):=\alpha\,t\,x_{1},\qquad L'(t,x,v):=L(t,x,v)+F_{t}(t,x)+F_{x}(t,x)\cdot v=\tfrac12m\lvert v\rvert_{2}^{2}+\alpha x_{1}+\alpha t\,v_{1},$$

so that $L'$ is the Lagrangian $L$ plus the total time derivative of $F$
([[pthm-cm07-boundary-terms-and-gauge]]). Under [[def-cm01-units]],
$[m]=\mu$, $[x]=\ell$, $[t]=[t_{0}]=\tau$, and $[F]=[S]=\mu\ell^{2}\tau^{-1}$.
Fix a unit vector $e_{1}=(1,0,0)$ and a velocity $v_{0}$ with
$[v_{0}]=\ell\tau^{-1}$, and consider the dimensionally consistent affine
curve $x_{*}(t):=v_{0}(t-t_{0})$ on $[t_{0},2t_{0}]$.

Then:

1. for every $C^{2}$ curve $x:[t_{0},2t_{0}]\to\mathbb R^{3}$ one has
   $E_{L'}(x)(t)=E_{L}(x)(t)=-m x''(t)$ at every $t\in[t_{0},2t_{0}]$, and the
   stationary curves of $S$ and $S'$ coincide;
2. for the curve $x_{*}$ the actions satisfy
   $$S'(x_{*})-S(x_{*})=F(2t_{0},x_{*}(2t_{0}))-F(t_{0},x_{*}(t_{0}))=2\alpha t_{0}^{2}(e_{1}\cdot v_{0}),$$
   with $S(x_{*})=\tfrac12m\lvert v_{0}\rvert_{2}^{2}t_{0}$ and
   $S'(x_{*})=S(x_{*})+2\alpha t_{0}^{2}(e_{1}\cdot v_{0})$;
3. for the reference-unit choice $m=1\,\mathrm{kg}$, $t_{0}=1\,\mathrm{s}$,
   $v_{0}=(1\,\mathrm{m}\,\mathrm{s}^{-1})e_{1}$ and
   $\alpha=1\,\mathrm{kg}\,\mathrm{m}\,\mathrm{s}^{-2}$, these values are
   $S=0.5\,\mathrm{kg}\,\mathrm{m}^{2}\,\mathrm{s}^{-1}$,
   $S'=2.5\,\mathrm{kg}\,\mathrm{m}^{2}\,\mathrm{s}^{-1}$ and endpoint term
   $2\,\mathrm{kg}\,\mathrm{m}^{2}\,\mathrm{s}^{-1}$, all of dimension
   $\mu\ell^{2}\tau^{-1}$, while the equation of motion and stationary curves
   are unchanged.

## Facts & Assumptions

**Given:** The model and functions of the Example, the curve $x_{*}$, and a $C^{2}$ curve $x:[t_{0},2t_{0}]\to\mathbb R^{3}$.

[F1] The gauge theorem ([[pthm-cm07-boundary-terms-and-gauge]]): for the mechanical Lagrangian $L$ and the $C^{3}$ function $F$ defined throughout the chart time-configuration domain with action dimension, the Lagrangian $L'=L+F_{t}+\nabla_{x}F\cdot v$ is $C^{2}$, satisfies $E_{L'}=E_{L}$ and $S'(x)=S(x)+F(b,x(b))-F(a,x(a))$ for every $C^{2}$ admissible curve, and has the same stationary curves; a potential normalization $\widetilde U=U+\gamma t$ uses $F(t,x)=-\gamma t^{2}/2$, where $[\gamma]=\mu\ell^{2}\tau^{-3}$.

[F2] Stationarity criterion ([[pthm-cm07-euler-lagrange-equations]], [[def-cm07-action-and-mechanical-lagrangian]]): a $C^{2}$ curve is stationary for the action of a mechanical Lagrangian if and only if it satisfies $m x''=-\nabla_{x}U$; for the free model this is $x''=0$, whose solutions on $[t_{0},2t_{0}]$ are the affine vector curves.

[F3] Calculus facts ([[thm-ftc-second-part]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-linearity-of-the-integral]], [[thm-continuous-implies-integrable]], [[def-darboux-integral]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-interval]]): for this $F$ one has $F_{t}=\alpha x_{1}$ and $\nabla_{x}F=\alpha t e_{1}$, so $\frac{d}{dt}F(t,x(t))=F_{t}+\nabla_{x}F\cdot x'$; its integral over $[t_{0},2t_{0}]$ is the endpoint difference. Also $S(x_{*})=\int_{t_{0}}^{2t_{0}}\tfrac12m\lvert v_{0}\rvert_{2}^{2}dt=\tfrac12m\lvert v_{0}\rvert_{2}^{2}t_{0}$.

## Verification

**Proof technique:** direct; compute the two Euler-Lagrange expressions on a general curve and evaluate the endpoint term and both actions on explicit data.

1.1 The displayed $F(t,x)=\alpha t x_{1}$ is a polynomial, hence $C^{\infty}$ (in particular $C^{3}$), throughout the chart projection $\mathbb R\times\mathbb R^{3}$. For a $C^{2}$ curve $x$ on $[t_{0},2t_{0}]$, $\nabla_{x}L'=\alpha e_{1}$ and $L'_{v}=m x'+\alpha t e_{1}$, so $E_{L'}(x)(t)=\alpha e_{1}-\frac{d}{dt}\bigl(m x'(t)+\alpha t e_{1}\bigr)=-m x''(t)=E_{L}(x)(t)$ pointwise; hence the vanishing sets on this interval coincide and, by [F2], so do the stationary curves. [F1, F2, F3, given, algebra]

1.2 Endpoint term on the explicit curve: $x_{*}(t_{0})=0$ and $x_{*}(2t_{0})=v_{0}t_{0}$, so $F(t_{0},x_{*}(t_{0}))=0$ and $F(2t_{0},x_{*}(2t_{0}))=2\alpha t_{0}^{2}(e_{1}\cdot v_{0})$. By [F1] this is $S'(x_{*})-S(x_{*})$. [F1, F3, given, algebra]

2.1 Actions: $S(x_{*})=\tfrac12m\lvert v_{0}\rvert_{2}^{2}t_{0}$ by [F3], and step 1.2 gives $S'(x_{*})=S(x_{*})+2\alpha t_{0}^{2}(e_{1}\cdot v_{0})$. [F1, F3, step 1.2, algebra]

3.1 Reference-unit data: substituting the specified $m,t_{0},v_{0},\alpha$ into step 2.1 gives $S=(1/2)\,\mathrm{kg}\,\mathrm{m}^{2}\,\mathrm{s}^{-1}$ and $S'=(5/2)\,\mathrm{kg}\,\mathrm{m}^{2}\,\mathrm{s}^{-1}$, differing by endpoint term $2\,\mathrm{kg}\,\mathrm{m}^{2}\,\mathrm{s}^{-1}$. Their numerical values in that SI action unit are $0.5$, $2.5$ and $2$, respectively; the dimension is $\mu\ell^{2}\tau^{-1}$. The curve $x_{*}$ is affine, hence stationary for both actions by [F2], and the model equation $x''=0$ is the same for both. [F2, step 1.1, step 2.1, algebra]

4.1 Clauses 1-3 are verified: the total-derivative modification changes the action by the endpoint value of $F$ and leaves the Euler-Lagrange expression, the stationary curves and the model equation unchanged; the potential normalization is the case $F=-\gamma t^2/2$ by [F1]. [step 1.1, step 1.2, step 2.1, step 3.1, F1] ∎

## Remarks

- The endpoint value $2\alpha t_{0}^{2}(e_{1}\cdot v_{0})$ is not the
  difference of a physical energy: it depends on the chosen $F$ and the
  endpoints. The illustration complements the gauge theorem of this page,
  which licenses reading the potential's arbitrary $c(t)$ as such a total
  derivative.
