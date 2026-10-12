---
id: ex-cm08-uniform-field-breaks-translation-and-boost
kind: example
title: "The uniform-force model: translation and boost charges fail across the field while the energy survives, with exact rates and a numerical instance"
status: draft
origin: session
domain: physics
dependency_level: 19
deps: [ex-cm02-uniform-field, pthm-cm08-translation, pthm-cm08-boost-boundary, pthm-cm08-time-energy, def-cm08-symmetry-of-the-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm02-newtonian-flow, def-cm07-action-and-mechanical-lagrangian, def-cm01-configuration, def-cm01-units, def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, thm-algebra-of-derivatives, lem-derivative-of-a-power, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  ex-cm02-uniform-field: operational-prerequisite
  pthm-cm08-translation: physical-result
  pthm-cm08-boost-boundary: physical-result
  pthm-cm08-time-energy: physical-result
  def-cm08-symmetry-of-the-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked model check inside the framework: the one-label uniform-force model with its potential presentation U = -m g . x, its explicit maximal motion, the failure of the translation and boost charges in directions with a nonzero component along the field, with the exact rates predicted by the sharpness clauses, a numerical instance at an explicit time, and the survival of the mechanical energy because the potential has no explicit time dependence. All values are model values in a declared idealization; the example reports no measurement and asserts no property of any field of nature."
sources:
  references:
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 4.5, printed pages 79-83: constant near-Earth gravity as the potential mgz with constant g, an approximation and not a globally uniform planetary field"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.4.1, printed pages 24-26 (PDF pages 30-32): translation invariance as the source of momentum conservation, so that a force law breaking translation invariance breaks the momentum charge"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 2.3, chapter pages 7-8 (PDF pages 26-27): the distinction between a conserved Hamiltonian function and the mechanical energy in a driven description"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Example

Work in the one-label uniform-force model of [[ex-cm02-uniform-field]]: the
force branch of [[post-cm02-force-superposition]] with $N=1$, mass $m>0$,
time window $I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$ and
force map $F(t,x,v)=m\,\mathbf g$ for a declared constant parameter
$\mathbf g\in\mathbb R^{3}$ of dimension $\ell\tau^{-2}$
([[def-cm01-units]]). Adopt the **potential presentation**

$$U(t,x):=-m\,\mathbf g\cdot x\qquad\bigl((t,x)\in\mathbb R\times\mathbb R^{3}\bigr),$$

of class $C^{\infty}$ and dimension $\mu\ell^{2}\tau^{-2}$, so that
$-\nabla_{x}U=m\mathbf g=F$ and the model is a global potential model
$d\equiv0$ in the sense of [[def-cm03-potential-and-mechanical-energy]];
declare a nonzero $a\in\mathbb R^{3}$ and consider the motion

$$x(t):=x_{0}+v_{0}\,t+\tfrac12\,\mathbf g\,t^{2}\qquad(t\in\mathbb R)$$

with $x_{0},v_{0}\in\mathbb R^{3}$, which is the unique maximal motion through
$(0,x_{0},v_{0})$ by [[ex-cm02-uniform-field]]. Verify:

1. the directional derivative of the potential is
   $a\cdot\nabla_{x}U(t,x)=-m\,a\cdot\mathbf g$, so the translation
   condition of [[pthm-cm08-translation]] clause 1 holds exactly when
   $a\cdot\mathbf g=0$;
2. the momentum component is
   $a\cdot P(t)=m\,a\cdot v_{0}+m\,t\,(a\cdot\mathbf g)$, hence constant on
   $\mathbb R$ exactly when $a\cdot\mathbf g=0$, with rate
   $m\,a\cdot\mathbf g$ otherwise;
3. the boost charge is
   $K_{a}(t)=t\,(a\cdot P(t))-m\,a\cdot x(t)=\tfrac12m\,t^{2}(a\cdot\mathbf g)-m\,a\cdot x_{0}$,
   with rate $\frac{d}{dt}K_{a}(t)=t\,m\,(a\cdot\mathbf g)$;
4. the mechanical energy is
   $E(t)=\tfrac12m\lvert x'(t)\rvert^{2}+U(t,x(t))=\tfrac12m\lvert v_{0}\rvert^{2}-m\,\mathbf g\cdot x_{0}$,
   constant on $\mathbb R$, and the potential has no explicit time
   dependence, so the time-translation identity of
   [[pthm-cm08-time-energy]] clause 1 holds;
5. for the numerical instance $m=1\,\mathrm{kg}$,
   $\mathbf g=(0,0,-1)\,\mathrm m\,\mathrm s^{-2}$, $x_{0}=0$,
   $v_{0}=(1,0,0)\,\mathrm m\,\mathrm s^{-1}$ and $a=e_{3}$: at $t=2\,\mathrm s$
   one has $P(2)=(1,0,-2)$ in $\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$,
   $a\cdot P(2)=-2\,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$,
   $K_{a}(2)=-2\,\mathrm{kg}\,\mathrm m^{2}\,\mathrm s^{-1}$ and
   $K_{a}'(2)=-2\,\mathrm{kg}\,\mathrm m^{2}\,\mathrm s^{-2}$, while the
   component along $e_{1}$ is constant at $1\,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$.

All values are model values of the declared idealization: the constant field is
an adopted approximation of an external influence and no measurement is
reported.

## Facts & Assumptions

**Given:** The one-label uniform-force model, the potential presentation $U$, the vector $a$, the constants $x_{0},v_{0}$ and the motion $x$.

[F1] The uniform-force model and its motions ([[ex-cm02-uniform-field]], [[post-cm02-force-superposition]], [[def-cm02-newtonian-flow]]): $F(t,x,v)=m\mathbf g$ satisfies the standing hypotheses; the displayed quadratic curve is the unique maximal motion through $(0,x_{0},v_{0})$ and is defined on all of $\mathbb R$; a motion satisfies $m x''=F$.

[F2] The presentation ([[def-cm03-potential-and-mechanical-energy]], [[def-cm07-action-and-mechanical-lagrangian]]): $U(t,x)=-m\mathbf g\cdot x$ is $C^{\infty}$ with $\nabla_{x}U=-m\mathbf g$, so $F=-\nabla_{x}U$ and $d\equiv0$; the mechanical Lagrangian is $L=\tfrac12m\lvert v\rvert^{2}+m\mathbf g\cdot x$, and the mechanical energy function is $E(t,x,v)=\tfrac12m\lvert v\rvert^{2}-m\mathbf g\cdot x$.

[F3] Translation and boost statements ([[pthm-cm08-translation]], [[pthm-cm08-boost-boundary]]): under the differential condition with $d\equiv0$ the component $a\cdot P$ is constant along every motion; the boost datum $(0,t(a),m\,a\cdot x)$ satisfies the model identity exactly under the same condition, and then $K_{a}=a\cdot(tP-mx)$ is constant, with rate $K_{a}'=t\,a\cdot F_{\mathrm{tot}}$ in general.

[F4] The energy statement ([[pthm-cm08-time-energy]], [[def-cm08-symmetry-of-the-mechanical-lagrangian]]): the datum $\tau\equiv1,\xi\equiv0,B\equiv0$ satisfies the model identity exactly when $\partial_{t}U\equiv0$, and then the mechanical energy is constant along every motion with $d\equiv0$.

[F5] Calculus ([[thm-algebra-of-derivatives]], [[lem-derivative-of-a-power]], [[def-vector-valued-derivative-and-integral]], [[def-euclidean-inner-product]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-interval]], [[def-cm01-units]], [[def-cm01-configuration]]): polynomials in $t$ differentiate by the power rule; the Euclidean inner product is bilinear; the dimensions of $P=mx'$ are $\mu\ell\tau^{-1}$ and those of $K_{a}=a\cdot(tP-mx)$ are $\mu\ell^{2}\tau^{-1}$.

## Verification

**Proof technique:** direct; differentiate the explicit potential, momentum, charge and energy along the stated motion and evaluate the numerical instance.

1.1 Clause 1: differentiating $U(t,x)=-m\mathbf g\cdot x$ in the configuration slot gives $\nabla_{x}U(t,x)=-m\mathbf g$, hence $a\cdot\nabla_{x}U(t,x)=-m(a\cdot\mathbf g)$ for every $(t,x)$, which vanishes identically exactly when $a\cdot\mathbf g=0$; by [F3] this is precisely the differential translation condition. [F2, F3, F5, algebra]

1.2 Clause 2: by [F1] the velocity is $x'(t)=v_{0}+\mathbf g t$, so $P(t)=m(v_{0}+\mathbf g t)$ and $a\cdot P(t)=m(a\cdot v_{0})+m\,t\,(a\cdot\mathbf g)$; this is constant in $t$ exactly when $m(a\cdot\mathbf g)=0$, and otherwise its derivative is $m(a\cdot\mathbf g)$. [F1, F5, algebra]

1.3 Clause 3: by the definition of the boost charge and clause 2, $$K_{a}(t)=t\bigl(m(a\cdot v_{0})+m\,t\,(a\cdot\mathbf g)\bigr)-m\,a\cdot\bigl(x_{0}+v_{0}t+\tfrac12\mathbf g t^{2}\bigr)=\tfrac12m\,t^{2}(a\cdot\mathbf g)-m\,a\cdot x_{0},$$ whose derivative is $t\,m(a\cdot\mathbf g)=-t\,a\cdot\nabla_{x}U(t,x(t))$, in agreement with the general rate $K_{a}'=t\,a\cdot F_{\mathrm{tot}}$ of [F3] because $F_{\mathrm{tot}}=m\mathbf g=-\nabla_{x}U$ in one label. [F1, F2, F3, F5, algebra]

1.4 Clause 4: the potential has $\partial_{t}U\equiv0$, so the time-translation datum satisfies the model identity by [F4]; directly, $$E(t)=\tfrac12m\lvert v_{0}+\mathbf g t\rvert^{2}-m\,\mathbf g\cdot\bigl(x_{0}+v_{0}t+\tfrac12\mathbf g t^{2}\bigr)=\tfrac12m\bigl(\lvert v_{0}\rvert^{2}+2t\,\mathbf g\cdot v_{0}+t^{2}\lvert\mathbf g\rvert^{2}\bigr)-m\,\mathbf g\cdot x_{0}-m\,t\,\mathbf g\cdot v_{0}-\tfrac12m\,t^{2}\lvert\mathbf g\rvert^{2}=\tfrac12m\lvert v_{0}\rvert^{2}-m\,\mathbf g\cdot x_{0},$$ constant on $\mathbb R$, consistent with the conservation clause of [F4]. [F2, F4, F5, algebra]

2.1 Clause 5, numerical instance: with $m=1$, $\mathbf g=(0,0,-1)$, $x_{0}=0$ and $v_{0}=(1,0,0)$ the velocity is $x'(t)=(1,0,-t)$ and at $t=2$ (units $\mathrm m\,\mathrm s^{-1}$) one has $P(2)=(1,0,-2)$ in $\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$; with $a=e_{3}$ clause 2 gives $a\cdot P(2)=m(a\cdot v_{0})+2m(a\cdot\mathbf g)=0+2(-1)=-2\,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$, clause 3 gives $K_{a}(2)=\tfrac12(1)(4)(-1)-0=-2\,\mathrm{kg}\,\mathrm m^{2}\,\mathrm s^{-1}$ and $K_{a}'(2)=2(1)(-1)=-2\,\mathrm{kg}\,\mathrm m^{2}\,\mathrm s^{-2}$; with $a=e_{1}$ one has $a\cdot\mathbf g=0$, so $a\cdot P(t)=m(a\cdot v_{0})=1\,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$ for every $t$. [step 1.2, step 1.3, F5, algebra]

3.1 Clauses 1-5 are steps 1.1, 1.2, 1.3, 1.4 and 2.1; the example exhibits, on explicit data of an adopted model, a force law that breaks the translation and boost charges across the field while the autonomous potential preserves the mechanical energy, and it reports no measurement. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎

## Remarks

- **Reading of the failure.** The rate $m(a\cdot\mathbf g)$ of the momentum
  component is the component of the external force along $a$, in agreement
  with the balance identity of [[pthm-cm03-momentum-balance]] read on this
  single label; the Noether sharpness clause and the balance describe the same
  failure from different starting points. Directions perpendicular to
  $\mathbf g$ retain a conserved momentum component, so the model retains a
  two-dimensional family of translation charges while failing the third.

- **Energy versus momentum.** The same model conserves its mechanical energy:
  the potential is autonomous, and the time-translation datum is available.
  The example therefore exhibits the independence of the charges of this page:
  some symmetry data of the framework's model classes hold here and others do
  not, and the conservation statements must be applied one datum at a time.
