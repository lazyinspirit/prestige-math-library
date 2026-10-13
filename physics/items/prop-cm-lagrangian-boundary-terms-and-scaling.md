---
id: prop-cm-lagrangian-boundary-terms-and-scaling
kind: proposition
title: "Adding a total time derivative and rescaling a Lagrangian: the Euler-Lagrange expression and the stationary curves"
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-time-dependent-lagrangian-and-action, thm-cm-stationarity-iff-euler-lagrange, thm-clairaut-schwarz-mixed-partials, thm-chain-rule-for-total-derivatives, thm-ftc-second-part, thm-linearity-of-the-integral, def-ck-euclidean-maps-and-diffeomorphisms, def-ck-and-multi-index-notation-in-several-variables, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-vector-valued-derivative-and-integral, def-darboux-integral, thm-continuous-implies-integrable, def-interval]
dependency_roles:
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 9.3 (Lagrangian; gauge invariance and equivalent Lagrangians under addition of a total time derivative)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.5.7 (the equations of motion are invariant under addition of a total derivative to the Lagrangian), printed page 37"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $(O,\mathcal L)$ be a time-dependent Lagrangian chart over $[a,b]\times U$
([[def-cm-time-dependent-lagrangian-and-action]]), let $A\subseteq\mathbb R\times\mathbb R^n$ be open and contain the time-configuration projection of $O$, and let $F:A\to\mathbb R$
be of class $C^3$, and define

$$\widetilde{\mathcal L}(t,q,v):=\mathcal L(t,q,v)+F_t(t,q)+F_q(t,q)\cdot v .$$

Then:

1. $\widetilde{\mathcal L}$ is $C^2$ on $O$, and for every $C^2$ curve $q:[a,b]\to U$,

$$E_{\widetilde{\mathcal L}}(q)(t)=E_{\mathcal L}(q)(t)\qquad(t\in[a,b]);$$

2. for every such curve, $\widetilde S(q)=S(q)+F(b,q(b))-F(a,q(a))$, where $S$ and
   $\widetilde S$ are the actions of $\mathcal L$ and $\widetilde{\mathcal L}$;
3. consequently $q$ is stationary for $\widetilde S$ if and only if $q$ is stationary for $S$;
4. for every real $c\ne0$, $E_{c\mathcal L}(q)=c\,E_{\mathcal L}(q)$ and hence the stationary
   curves of $c\mathcal L$ and of $\mathcal L$ coincide; for $c=0$ one has $E_0=0$, so *every*
   $C^2$ curve is stationary for the zero Lagrangian, and setting $c=0$ does not preserve the
   stationary set unless every $C^2$ curve was already stationary for $\mathcal L$.

## Facts & Assumptions

**Given:** The chart data $(O,\mathcal L)$, a $C^3$ function $F$ on $A$ covering the chart projection, the modified Lagrangian $\widetilde{\mathcal L}$, a real $c$ and a $C^2$ curve
$q:[a,b]\to U$.

[F1] The chain rule and the equality of mixed partial derivatives
([[thm-chain-rule-for-total-derivatives]], [[thm-clairaut-schwarz-mixed-partials]],
[[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-ck-and-multi-index-notation-in-several-variables]]):
the functions $F_t,F_q$ are $C^2$; their mixed second derivatives commute, so
$\partial_{q_i}(F_t)=\partial_t(F_{q_i})$ and
$\partial_{q_i}(F_{q_j})=\partial_{q_j}(F_{q_i})$ on the domain.

[F2] Along a $C^2$ curve $q$, the function $t\mapsto F(t,q(t))$ is $C^2$ with derivative
$F_t(t,q(t))+F_q(t,q(t))\cdot q'(t)$ and second derivative
$F_{tt}+2\sum_iF_{tq_i}q_i'+\sum_{i,j}F_{q_iq_j}q_i'q_j'+F_q\cdot q''$; this is the chain rule
applied twice ([[thm-chain-rule-for-total-derivatives]]).

[F3] If a $C^1$ function on an interval has derivative $G$, then its increment is the integral of
$G$ ([[thm-ftc-second-part]]); integrals are linear
([[thm-linearity-of-the-integral]], [[def-darboux-integral]], [[thm-continuous-implies-integrable]],
[[def-vector-valued-derivative-and-integral]], [[def-interval]]).

## Proof

**Proof technique:** direct; compute the Euler–Lagrange expression of the added total derivative
and integrate it exactly.

1.1 Put $G(t,q,v):=F_t(t,q)+F_q(t,q)\cdot v$, so $\widetilde{\mathcal L}=\mathcal L+G$. Since $A$ covers the chart projection and $F$ is $C^3$, $G$ and $\widetilde{\mathcal L}$ are defined and $C^2$ throughout $O$. By [F1], $$G_q(t,q,v)=F_{tq}+F_{qq}[v],\qquad G_v(t,q,v)=F_q(t,q),$$ where the first display abbreviates the vector with entries $\partial_{q_i}F_t+\sum_j\partial_{q_i}F_{q_j}v_j$. Hence for any $C^2$ curve $q$, $$\frac{d}{dt}G_v(t,q,q')=\frac{d}{dt}F_q(t,q)=F_{qt}+F_{qq}[q'] =F_{tq}+F_{qq}[q']=G_q(t,q,q'),$$ using [F1] in the penultimate equality. Therefore $E_G(q)=G_q-\frac{d}{dt}G_v=0$ along every $C^2$ curve. [F1, F2, algebra]

1.2 Clause 2: by [F2] and [F3], $$\widetilde S(q)-S(q)=\int_a^b\frac{d}{dt}F\bigl(t,q(t)\bigr)dt=F\bigl(b,q(b)\bigr)-F\bigl(a,q(a)\bigr),$$ which is the displayed identity. [F2, F3, algebra]

2.1 The Euler–Lagrange expression is additive and homogeneous in the Lagrangian: from the definition, $E_{\mathcal L+cG}(q)=E_{\mathcal L}(q)+c\,E_G(q)$ for every real $c$, because $\mathcal L+cG$ has gradients $\mathcal L_q+cG_q$ and $\mathcal L_v+cG_v$ and the derivative is linear. By step 1.1, $E_{\widetilde{\mathcal L}}(q)=E_{\mathcal L}(q)$; this proves clause 1 and the identity in clause 4. For $c\ne0$, $E_{c\mathcal L}=cE_{\mathcal L}$ vanishes exactly when $E_{\mathcal L}$ does, so the stationarity theorem gives the same stationary curves. [step 1.1, algebra]

3.1 Clause 3: stationary curves are characterised by the vanishing of the Euler–Lagrange expression ([[thm-cm-stationarity-iff-euler-lagrange]]). By clause 1 the two expressions agree, so the stationary sets of $S$ and $\widetilde S$ coincide; equivalently, the boundary term of clause 2 is unchanged by the variations, whose endpoint values are zero by definition of admissible variation. [step 2.1, step 1.2, given]

4.1 Clause 4, degenerate case: for $c=0$ the expression $E_0$ vanishes identically, so by [[thm-cm-stationarity-iff-euler-lagrange]] every $C^2$ curve is stationary for the zero Lagrangian; if $\mathcal L$ has a non-stationary curve, the stationary sets of $\mathcal L$ and $0\cdot\mathcal L$ differ. [step 2.1, given] ∎

## Remarks

- Clause 2 is the exact statement of the common phrase that two Lagrangians differing by a total
  time derivative give the same equations of motion: the actions differ by endpoint values, which
  are held fixed in the variational problem, and the Euler–Lagrange expressions agree pointwise.

- The rescaling clause is stated for the stationary *set* only. Multiplying the action by
  $c\ne0$ also rescales the first variation and the Euler–Lagrange expression, but it does not
  change which curves are stationary; the case $c=0$ is genuinely exceptional and is recorded
  because the zero Lagrangian is the degenerate witness used in the companion item on regular and
  hyperregular Lagrangians and in [[rem-cm-scope-of-the-legendre-map]].
