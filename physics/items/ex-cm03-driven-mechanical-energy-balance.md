---
id: ex-cm03-driven-mechanical-energy-balance
kind: example
title: "A driven one-dimensional model with a time-dependent potential and a residual force: the mechanical-energy balance, the integrated work form and the normalization ambiguity computed on explicit data"
status: published
origin: session
domain: physics
dependency_level: 13
deps: [def-cm03-centre-of-mass-and-momenta, pthm-cm03-work-energy, def-cm03-potential-and-mechanical-energy, pthm-cm03-energy-balance, post-cm02-force-superposition, def-cm02-newtonian-flow, def-cm01-units, def-euclidean-inner-product, def-derivative, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-newton-leibniz-with-interior-derivative, def-interval]
dependency_roles:
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  pthm-cm03-work-energy: physical-result
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  pthm-cm03-energy-balance: physical-result
  post-cm02-force-superposition: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-derivative: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked computation in a declared one-dimensional potential presentation with an explicit time-dependent potential and residual force: the displayed quadratic curve, embedded as q(t)=x(t)e1 in the open configuration domain R3, is a motion of the model, and along it the mechanical-energy balance, the power identity, the integrated work form and the change of the energy under a time-dependent renormalization of the potential are computed from the model data. The item asserts no measured value and no conservation; the model is driven."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 1.3-1.4, chapter pages 7-10 (PDF pages 11-14): the work-energy principle, potential forces, mechanical energy E = T + U and its failure to be conserved under non-conservative or explicitly time-dependent forcing"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3.2, printed page 8 (PDF page 14): the kinetic-energy change as the work of the forces and the conservative conditions required for an energy statement"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Work in the force branch of [[post-cm02-force-superposition]] with one label
$N=1$, mass $m>0$, time window $I_{0}=\mathbb R$ and configuration domain
$Q=\mathbb R^3$. Write $q=(x,y,z)\in Q$ and $e_1=(1,0,0)$. Define
$\mathbf d(t,q,v):=d(t,x,v)e_1$ and $\mathbf F(t,q,v):=F(t,x,v)e_1$
from the scalar expressions below, and set $U(t,q):=U(t,x)$, independent
of $y,z$. Here the velocity argument of $d,F$ may be any $v\in\mathbb R^3$;
these expressions are independent of it. Declare the **potential presentation** of
[[def-cm03-potential-and-mechanical-energy]] clause (a)
$$U(t,x):=\frac12\lambda\,t\,x^{2},\qquad d(t,x,v):=2ma+\lambda a\,t^{3},$$
where $a>0$ is a constant of dimension $\ell\tau^{-2}$ and $\lambda>0$ a
constant of dimension $\mu\tau^{-3}$, so that $U$ has dimension
$\mu\ell^{2}\tau^{-2}$ and $d$ has the dimension of a force
([[def-cm01-units]]). Both maps are smooth; the force map of the model is
$F(t,x,v)=-\partial_{x}U(t,x)+d(t,x,v)=-\lambda tx+2ma+\lambda at^{3}$, and
the model satisfies $\mathbf F=-\nabla_q U+\mathbf d$ on
$\mathbb R\times\mathbb R^3\times\mathbb R^3$. On each compact time
interval $|t|\le T$, its force has state-Lipschitz constant $\lambda T$;
$\mathbf d$ is state-independent. Thus both satisfy the standing regularity.
The one-dimensional computation below uses the rectilinear motion
$q(t)=x(t)e_1$ and zero transverse coordinates and velocities. Each scalar
force and residual-force expression denotes its $e_1$ component,
$\|q\prime(t)\|_2^2=x\prime(t)^2$, and
$\langle\mathbf d,q\prime\rangle=d x\prime$; no constrained configuration
domain or reaction force is assumed.

The curve
$$x(t):=a\,t^{2}\qquad(t\in\mathbb R)$$
is a motion of this model, and with $K$, $\mathcal P$ of
[[def-cm03-centre-of-mass-and-momenta]] and
$E=K+U(t,x(t))$:

For the numerical clauses below, put $s:=t/(1\,\mathrm s)$; displayed energy,
power and work values include their SI units, and the interval $0\le s\le1$
means $0\le t\le1\,\mathrm s$.

1. on the interval $[0,1\,\mathrm s]$ the numerical data $m:=1\,\mathrm{kg}$,
   $a:=1\,\mathrm{m}\,\mathrm{s}^{-2}$, $\lambda:=1\,\mathrm{kg}\,\mathrm{s}^{-3}$
   give
   $$K(t)=2s^{2}\,\mathrm J,\qquad U(t,x(t))=\frac12s^{5}\,\mathrm J,\qquad E(t)=\left(2s^{2}+\frac12s^{5}\right)\mathrm J,\qquad E'(t)=\left(4s+\frac52s^{4}\right)\mathrm W,$$
   and the balance of [[pthm-cm03-energy-balance]] clause 1,
   $E'=\partial_{t}U(t,x(t))+d\,\dot x$, holds with
   $\partial_{t}U(t,x(t))=\frac12s^{4}\,\mathrm W$ and
   $d\,\dot x=(4s+2s^{4})\,\mathrm W$;
2. the power is $\mathcal P(t)=4s\,\mathrm W$, the work over $[0,1\,\mathrm s]$ is
   $W([0,1\,\mathrm s])=2\,\mathrm J$, and the work-energy theorem
   $K(1\,\mathrm s)-K(0)=W([0,1\,\mathrm s])$ holds; the integrated form of clause 3 of
   [[pthm-cm03-energy-balance]] holds as
   $2\,\mathrm J=-\frac12\,\mathrm J+\bigl(\frac1{10}+2+\frac25\bigr)\mathrm J$;
3. replacing $U$ by the equivalent potential
   $\tilde U(t,x)=U(t,x)+c(t)$ with
   $c(t):=-(1\,\mathrm J)\bigl(t/(1\,\mathrm s)\bigr)^{2}$
   (same force, different representative) gives
   $\tilde E(t)=E(t)+c(t)=\left(s^{2}+\frac12s^{5}\right)\mathrm J$ and
   $\tilde E'(t)=\left(2s+\frac52s^{4}\right)\mathrm W=\partial_{t}\tilde U(t,x(t))+d\,\dot x$,
   so the balance holds in the renormalized presentation with a different
   value and rate;
4. the model is driven and the energy is not conserved:
   $E(1\,\mathrm s)-E(0)=\frac52\,\mathrm J$
   in the first normalization, while the balance attributes the change to the
   explicit time dependence, $\int_{0}^{1\,\mathrm s}\partial_{t}U\,dt=\frac1{10}\,\mathrm J$, and
   the residual power, $\int_{0}^{1\,\mathrm s}d\,\dot x\,dt=\frac{12}{5}\,\mathrm J$, whose sum
   $\frac1{10}\,\mathrm J+\frac{12}{5}\,\mathrm J=\frac52\,\mathrm J$ is the energy change
   $E(1\,\mathrm s)-E(0)=\int_{0}^{1\,\mathrm s}E'\,dt$.

## Facts & Assumptions

**Given:** The one-dimensional model and the curve $x(t)=at^{2}$ of the example; the numerical data $m=1$, $a=1$, $\lambda=1$ in the stated kilogram-metre-second units; the potential presentation with potential $U$ and residual force $d$; the definitions $K=\frac12m\dot x^{2}$, $\mathcal P=\langle F,\dot x\rangle=F\dot x$ in one dimension, $W([t_{0},t_{1}])=\int_{t_{0}}^{t_{1}}\mathcal P$, $E=K+U(t,x(t))$.

[L1] Model notions ([[post-cm02-force-superposition]], [[def-cm02-newtonian-flow]], [[def-cm03-centre-of-mass-and-momenta]], [[def-cm03-potential-and-mechanical-energy]]): a motion satisfies $m\ddot x=F(t,x,\dot x)$ with $F=-\partial_{x}U+d$ on the presentation; the dimensions are read by [[def-cm01-units]].

[L2] Calculus ([[def-derivative]], [[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[thm-newton-leibniz-with-interior-derivative]]): derivatives of polynomials obey the power, sum and scalar rules, and a continuous derivative is integrated by the fundamental theorem on $[0,1\,\mathrm s]$ ([[def-interval]]).

[L3] Balance clauses ([[pthm-cm03-energy-balance]] clauses 1-3, [[pthm-cm03-work-energy]] clauses 1-2): $E'=\partial_{t}U(t,x(t))+\langle\mathfrak d,\dot x\rangle$, $K\,'=\mathcal P$ and $K(t_{1})-K(t_{0})=W([t_{0},t_{1}])$ for motions of the presentation; the Euclidean inner product in one dimension is the product of the components ([[def-euclidean-inner-product]]).

## Verification

**Proof technique:** direct; differentiate the explicit curve and evaluate each term of the balance identities on the stated data.

1.1 The curve $x(t)=at^{2}$ is $C^{2}$ with $\dot x=2at$ and $\ddot x=2a$ on $\mathbb R$. Moreover $$\partial_{x}U(t,x(t))=\lambda t\,x(t)=\lambda a\,t^{3},\qquad F(t,x(t),\dot x(t))=-\lambda at^{3}+2ma+\lambda at^{3}=2ma=m\ddot x(t),$$ so $m q\prime\prime=(m x\prime\prime)e_1=\mathbf F(t,q,q\prime)$, with both transverse components zero. Thus $q$ is a motion of the model on the whole time window, and the scalar quantities below are its longitudinal components. [given, L1, L2, algebra]

2.1 With the numerical data $m=1\,\mathrm{kg}$, $a=1\,\mathrm{m}\,\mathrm{s}^{-2}$ and $\lambda=1\,\mathrm{kg}\,\mathrm{s}^{-3}$, write $s=t/(1\,\mathrm s)$. Then $x(t)=s^{2}\,\mathrm m$ and $\dot x(t)=2s\,\mathrm{m}\,\mathrm{s}^{-1}$, so $K(t)=2s^{2}\,\mathrm J$, $U(t,x(t))=\frac12s^{5}\,\mathrm J$ and $E(t)=(2s^{2}+\frac12s^{5})\,\mathrm J$; differentiating by [L2], $E'(t)=(4s+\frac52s^{4})\,\mathrm W$. The two contributions of clause 1 of [[pthm-cm03-energy-balance]] are $\partial_{t}U(t,x(t))=\frac12s^{4}\,\mathrm W$ and $d(t,x,v)\dot x(t)=(4s+2s^{4})\,\mathrm W$, whose sum is $E'(t)$; the balance holds on $[0,1\,\mathrm s]$. [step 1.1, L2, L3, algebra]

3.1 Power and work. With $F(t,x(t),\dot x(t))=2\,\mathrm N$, the power is $\mathcal P(t)=4s\,\mathrm W$, and $\int_{0}^{1\,\mathrm s}\mathcal P(t)\,dt=2\,\mathrm J$ by [L2]. On the other hand $K(1\,\mathrm s)-K(0)=2\,\mathrm J$, so the work-energy theorem of clause 2 of [[pthm-cm03-work-energy]] holds. The integrated form of clause 3 of [[pthm-cm03-energy-balance]] reads $$K(1\,\mathrm s)-K(0)=U(0,x(0))-U(1\,\mathrm s,x(1\,\mathrm s))+\int_{0}^{1\,\mathrm s}\bigl[\partial_{t}U(t,x(t))+d\,\dot x\bigr]dt=-\frac12\,\mathrm J+\Bigl(\frac1{10}+2+\frac25\Bigr)\mathrm J=2\,\mathrm J,$$ since $\int_{0}^{1\,\mathrm s}\frac12s^{4}\,\mathrm W\,dt=\frac1{10}\,\mathrm J$, $\int_{0}^{1\,\mathrm s}4s\,\mathrm W\,dt=2\,\mathrm J$ and $\int_{0}^{1\,\mathrm s}2s^{4}\,\mathrm W\,dt=\frac25\,\mathrm J$ [L2]; this agrees with the computed value. [step 2.1, L2, L3, algebra]

3.2 Renormalization. Let $c(t):=-(1\,\mathrm J)(t/(1\,\mathrm s))^{2}$ and $\tilde U(t,x):=U(t,x)+c(t)$, a potential presenting the same force because $\partial_{x}\tilde U=\partial_{x}U$; its explicit time dependence along the curve is $\partial_{t}\tilde U(t,x(t))=(\frac12s^{4}-2s)\,\mathrm W$. With $\tilde E=E+c$, step 2.1 gives $\tilde E(t)=(s^{2}+\frac12s^{5})\,\mathrm J$ and $\tilde E'(t)=(2s+\frac52s^{4})\,\mathrm W$, while clause 1 of [[pthm-cm03-energy-balance]] reads $\partial_{t}\tilde U(t,x(t))+d\,\dot x=(\frac12s^{4}-2s+4s+2s^{4})\,\mathrm W=(2s+\frac52s^{4})\,\mathrm W$, the same value: the balance holds in the renormalized presentation, with the energy and its rate shifted by $c$ and $c'$. [step 2.1, L2, L3, algebra]

4.1 No conservation. Here $\partial_{t}U(t,x)=\frac12\lambda x^{2}$ does not vanish and $d$ does not vanish, so clause 2 of [[pthm-cm03-energy-balance]] does not apply; consistently, $E'(t)=(4s+\frac52s^{4})\,\mathrm W$ is positive on $(0,1\,\mathrm s]$ and $E(1\,\mathrm s)-E(0)=\frac52\,\mathrm J$. The balance of step 2.1 attributes this change to the explicit time dependence of the potential, $\int_{0}^{1\,\mathrm s}\partial_{t}U\,dt=\frac1{10}\,\mathrm J$, together with the residual work $\int_{0}^{1\,\mathrm s}d\,\dot x\,dt=\frac{12}{5}\,\mathrm J$; their sum is the energy change $E(1\,\mathrm s)-E(0)=\int_{0}^{1\,\mathrm s}E'\,dt$, in agreement with the direct value computed from step 2.1. [step 2.1, L2, L3, algebra] ∎

## Remarks

- **The three contributions are visible.** On this data the balance reads $E'=(\frac12s^{4})\,\mathrm W+(4s+2s^{4})\,\mathrm W$: the first term is the explicit time dependence of the potential and the remaining terms are the power of the residual force. Both are positive for $0<t\le1\,\mathrm s$, so the model is driven; this is the behaviour clause 2 of [[pthm-cm03-energy-balance]] excludes by hypothesis.

- **The representative matters.** The renormalized potential $\tilde U$ presents the same force and the same motion, yet $\tilde E$ differs from $E$ by $c(t)$ and its rate by $c'(t)$; a conservation statement must name the representative. The numerical data are declared model parameters, not measured values.
