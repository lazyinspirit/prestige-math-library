---
id: pthm-cm07-boundary-terms-and-gauge
kind: physics-theorem
title: "Total-derivative Lagrangians, the potential representative and scaling: invariant stationary curves with endpoint terms"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [def-cm07-action-and-mechanical-lagrangian, prop-cm-lagrangian-boundary-terms-and-scaling, pthm-cm07-euler-lagrange-equations, def-cm-time-dependent-lagrangian-and-action, def-cm03-potential-and-mechanical-energy, def-cm01-configuration, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, thm-chain-rule-for-total-derivatives, def-jacobian-matrix-and-gradient, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  prop-cm-lagrangian-boundary-terms-and-scaling: mathematical-premise
  pthm-cm07-euler-lagrange-equations: physical-result
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm03-potential-and-mechanical-energy: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Gauge properties of the mechanical action of a declared potential presentation: adding to the Lagrangian the total time derivative of a C^2 function changes the action by endpoint values only and leaves the Euler-Lagrange expression, the stationary curves and the model's stationary-action equation unchanged; changing the potential representative by a function of time alone is an instance and shifts the action by a constant-free endpoint term; multiplying the Lagrangian by a nonzero constant leaves the stationary curves unchanged. The statements are conditional on the adopted force branch and presentation and assert no minimisation and no empirical content."
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 9.3: equivalent Lagrangians under addition of a total time derivative, and the role of the arbitrary constant in the potential"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.5.7, printed page 37 (PDF page 43): the equations of motion are invariant under addition of a total derivative to the Lagrangian"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.3, chapter pages 7-8: the additive constant of the potential and the energy reference"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
masses $m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$ and $C^{2}$ potential
$U:I_{0}\times Q\to\mathbb R$ ([[def-cm03-potential-and-mechanical-energy]]).
Let $a<b$ with $[a,b]\subseteq I_{0}$, let
$F:(a-\varepsilon,b+\varepsilon)\times Q\to\mathbb R$ be of class $C^{2}$ for
some $\varepsilon>0$, and define

$$L'(t,x,v):=L(t,x,v)+F_{t}(t,x)+F_{x}(t,x)\cdot v .$$

Then:

1. $L'$ is $C^{2}$ on $I_{0}\times Q\times\mathbb R^{3N}$, has the same
   dimension as $L$, and for every $C^{2}$ admissible curve $x:[a,b]\to Q$ one
   has $E_{L'}(x)(t)=E_{L}(x)(t)$ for all $t\in[a,b]$ and

$$S'(x)=S(x)+F\bigl(b,x(b)\bigr)-F\bigl(a,x(a)\bigr),$$

   where $S'$ is the action of $L'$; consequently $x$ is stationary for $S'$
   if and only if $x$ is stationary for $S$, and, by
   [[pthm-cm07-euler-lagrange-equations]], both are equivalent to the model's
   potential-part equation $\mathsf M x''=-\nabla_{x}U$ along $x$.

2. **Potential representative.** Let $c:I_{0}\to\mathbb R$ be differentiable
   with antiderivative $C$ (i.e. $C'=c$), and let $\widetilde U:=U+c$ be the
   representative of [[def-cm03-potential-and-mechanical-energy]] clause (c),
   with Lagrangian $\widetilde L=K-\widetilde U$. Then
   $\widetilde L=L+M$ where $M(t,x,v)=F_{t}+F_{x}\cdot v$ for
   $F(t,x):=-C(t)$, so clause 1 applies: the actions of $L$ and
   $\widetilde L$ differ by $C(a)-C(b)$, independently of the curve, and the
   stationary curves and the model's equation are unchanged.

3. **Scaling.** For every real $\lambda\ne0$ one has
   $E_{\lambda L}(x)=\lambda E_{L}(x)$ pointwise, so the stationary curves of
   the Lagrangian $\lambda L$ coincide with those of $L$; the value $\lambda=0$
   is excluded because the zero Lagrangian has every curve stationary.

The statement is conditional on the adopted force branch and presentation; it
asserts no minimisation, no conservation law and no empirical content, and it
does not remove the need to declare which representative and normalisation are
used by an energy statement.

## Facts & Assumptions

**Given:** The model data and presentation, reals $a<b$ with $[a,b]\subseteq I_{0}$, the function $F$, the number $\lambda\ne0$ and a $C^{2}$ admissible curve $x:[a,b]\to Q$.

[F1] The mathematical gauge proposition ([[prop-cm-lagrangian-boundary-terms-and-scaling]]): for a time-dependent Lagrangian chart $(O,\mathcal L)$ over $[a,b]\times U$ and a $C^{2}$ function $F$ on an open neighbourhood of $[a,b]\times U$, the map $\widetilde{\mathcal L}:=\mathcal L+F_{t}+F_{q}\cdot v$ is $C^{2}$ on $O$, $E_{\widetilde{\mathcal L}}(q)=E_{\mathcal L}(q)$ for every $C^{2}$ curve, the actions differ by $F(b,q(b))-F(a,q(a))$, the stationary curves coincide, and $E_{c\mathcal L}=c\,E_{\mathcal L}$ for every real $c$ with the stationary curves of $c\mathcal L$ and $\mathcal L$ coinciding for $c\ne0$ while for $c=0$ every $C^{2}$ curve is stationary for $0$.

[F2] The chart instance ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm-time-dependent-lagrangian-and-action]]): $(O,L)$ with $O=I_{0}\times Q\times\mathbb R^{3N}$ is a time-dependent Lagrangian chart over $[a,b]\times Q$, and $S$, $E_{L}$ and stationarity are its notions.

[F3] Stationarity and the model equation ([[pthm-cm07-euler-lagrange-equations]]): for a $C^{2}$ admissible curve $z$ of the chart, stationary for the action, vanishing of the Euler-Lagrange expression and the equation $\mathsf M z''=-\nabla_{x}U$ on $[a,b]$ are equivalent.

[F4] The potential normalization and the chain rule ([[def-cm03-potential-and-mechanical-energy]] clause (c), [[thm-chain-rule-for-total-derivatives]], [[def-jacobian-matrix-and-gradient]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-vector-valued-derivative-and-integral]], [[def-interval]]): replacing $U$ by $U+c(t)$ presents the same potential part; and for the displayed $F(t,x)=-C(t)$ one has $F_{t}=-c$ and $F_{x}=0$, so $F_{t}+F_{x}\cdot v=-c(t)$.

## Proof

**Proof technique:** direct; apply the mathematical gauge proposition to the mechanical chart, and evaluate the potential-representative substitution and the scaling on the two Lagrangians.

1.1 Clause 1, structure: the chart $(O,L)$ is a time-dependent Lagrangian chart over $[a,b]\times Q$ with $O$ open by [F2], and the domain $(a-\varepsilon,b+\varepsilon)\times Q$ of $F$ is an open neighbourhood of $[a,b]\times Q$; hence the hypotheses of [F1] are satisfied with this chart and this $F$. Therefore $L'$ is $C^{2}$ with $E_{L'}(x)=E_{L}(x)$ and $S'(x)=S(x)+F(b,x(b))-F(a,x(a))$ for the curve $x$, which is the first part of clause 1. [F1, F2, given]

2.1 Clause 1, stationarity: by step 1.1 the Euler-Lagrange expressions agree along $x$, so $x$ is stationary for $S'$ if and only if $x$ is stationary for $S$; by [F3] both are equivalent to $\mathsf M x''=-\nabla_{x}U$ along $x$. [F1, F3, step 1.1]

2.2 Clause 2: with $\widetilde U=U+c$ and $\widetilde L=K-\widetilde U$, one has $\widetilde L=L-c(t)$ because the kinetic energies coincide; by [F4] the choice $F(t,x):=-C(t)$ gives $F_{t}+F_{x}\cdot v=-c(t)$, so $\widetilde L=L+M$ with $M=F_{t}+F_{x}\cdot v$ of the form required in clause 1. Applying step 1.1 to this $F$ gives that the Euler-Lagrange expressions of $L$ and $\widetilde L$ agree and that $\widetilde S(x)-S(x)=F(b,x(b))-F(a,x(a))=-C(b)+C(a)$ for every $C^{2}$ admissible curve; in particular the difference is independent of the curve, the stationary curves coincide, and the model's equation is unchanged by [F3]. [F1, F3, F4, step 1.1, algebra]

3.1 Clause 3: applying the scaling clause of [F1] to the chart $(O,L)$ gives $E_{\lambda L}=\lambda E_{L}$ for the given $\lambda\ne0$; hence the vanishing sets on $[a,b]$ coincide and, by [F3], so do the stationary curves. [F1, F3, given] ∎

## Remarks

- **The endpoint term is not a physical energy.** The difference
  $F(b,x(b))-F(a,x(a))$ in clause 1 is an endpoint value of the added
  function; it depends on the endpoints and on the representative chosen, and
  no energy balance is asserted from it.

- **Normalisation is a declared convention.** Because the potential is determined
  only up to $c(t)$ and the Lagrangian only up to total derivatives, every
  energy or action statement of the framework records the representative used;
  the model's equation of motion is insensitive to both choices.
