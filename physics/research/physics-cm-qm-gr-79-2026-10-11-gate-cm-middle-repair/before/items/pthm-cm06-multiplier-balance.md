---
id: pthm-cm06-multiplier-balance
kind: physics-theorem
title: "Ideal holonomic constraints determine the reaction: multiplier form, explicit acceleration, unique constrained motions and the reaction-power identity"
status: draft
origin: session
domain: physics
dependency_level: 11
deps: [def-cm06-holonomic-constraint-model, post-cm06-ideal-reaction-law, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm-holonomic-constraint-and-ideal-reactions, lem-cm-constraint-multipliers-and-accelerations, prop-cm-ideal-holonomic-system-in-a-time-dependent-chart, lem-matrix-inversion-preserves-ck-regularity, thm-chain-rule-for-total-derivatives, thm-clairaut-schwarz-mixed-partials, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-invertible-matrix-and-general-linear-group, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix]
dependency_roles:
  def-cm06-holonomic-constraint-model: formulation-prerequisite
  post-cm06-ideal-reaction-law: physical-assumption
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-holonomic-constraint-and-ideal-reactions: mathematical-premise
  lem-cm-constraint-multipliers-and-accelerations: mathematical-premise
  prop-cm-ideal-holonomic-system-in-a-time-dependent-chart: mathematical-premise
  lem-matrix-inversion-preserves-ck-regularity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The conditional dynamics of a holonomic-constraint model with the adopted ideal-reaction law: the reaction is the transpose multiple of the constraint Jacobian with a unique continuous multiplier, the multiplier and the constrained acceleration are the explicit functions Lambda and a of the datum, the constrained motions with permitted velocity are exactly the solutions of the resulting first-order system with consistent data, the constraint and its differentiated form are preserved, and the reaction power equals minus the multiplier paired with the time derivative of the constraint. Empirical qualifications of the idealization and the exclusions of the postulate are carried; no measured value and no energy-conservation claim is asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.3.1, Eqs. (2.31)-(2.38), printed pages 18-19 (PDF pages 24-25): the augmented Lagrangian with multipliers, the constraint-force term lambda_alpha d f_alpha/dx_A, and the pendulum multiplier proportional to the tension"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 5.9 and 6.8: Lagrange multipliers for holonomic constraints and the explicit multiplier solution of constrained systems"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 2.1-2.2, chapter pages 1-4: Lagrange equations with constraint forces for a bead on a rotating ring, and the reduced equation for the generalized coordinate"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Adopt a holonomic-constraint model of [[def-cm06-holonomic-constraint-model]]
with datum $(O,k,G)$, mass operator $\mathsf M$, force map $F$, and the
ideal-reaction law of [[post-cm06-ideal-reaction-law]]. Suppose, in addition
to the hypotheses of those items:

**(h1)** $G$ is of class $C^{3}$ on $O$, and $D_{x}G(t,x)$ has rank $k$ for
every $(t,x)\in O$ (not only on the constraint locus);

**(h2)** the force map is of class $C^{1}$ on
$I_{0}\times Q\times(\mathbb R^{3})^{N}$
([[def-ck-euclidean-maps-and-diffeomorphisms]]).

Let $x:J\to Q$ be a constrained motion of the model with reaction field $R$
satisfying the ideal-reaction law, on an interval $J\subseteq I_{0}$ with
nonempty interior, and write $w=x'$ for its velocity. Then:

1. **multiplier form.** For every $t\in J$ there is a unique
   $\lambda(t)\in\mathbb R^{k}$ with $R(t)=D_{x}G(t,x(t))^{\mathsf T}\lambda(t)$;
   the map $\lambda:J\to\mathbb R^{k}$ so defined is continuous, and with

$$C(t,x):=D_{x}G(t,x)\,\mathsf M^{-1}D_{x}G(t,x)^{\mathsf T},\qquad \Lambda(t,x,v):=-C(t,x)^{-1}\Bigl[D_{x}G\,\mathsf M^{-1}F(t,x,v)+G_{tt}+2G_{tq}[v]+G_{qq}[v,v]\Bigr],$$

   the terms being evaluated at $(t,x)$ or $(t,x,v)$, the $k\times k$ matrix
   $C(t,x)$ is symmetric positive definite and invertible and
   $$\lambda(t)=\Lambda\bigl(t,x(t),w(t)\bigr)\qquad(t\in J):$$
   the multiplier, and hence the reaction, is determined by the model data
   and the motion, not a free or measured quantity.

2. **determined dynamics.** With
   $a(t,x,v):=\mathsf M^{-1}\bigl(F(t,x,v)+D_{x}G(t,x)^{\mathsf T}\Lambda(t,x,v)\bigr)$,
   the tuple $(x,w)$ solves the first-order system
   $$x'=v,\qquad v'=a(t,x,v)$$
   on $J$; conversely every solution $(x,v)$ of this system on an interval
   whose initial datum is consistent, with
   $R(t):=D_{x}G(t,x(t))^{\mathsf T}\Lambda(t,x(t),v(t))$, is a constrained
   motion of the model satisfying the ideal-reaction law; and through every
   consistent datum $(t_{0},x_{0},v_{0})$ there is a unique maximal solution
   of the system. Hence the holonomic-constraint model with ideal reactions
   has determined dynamics on its constraint locus.

3. **preservation.** Along every solution of clause 2 with consistent data,
   $$G\bigl(t,x(t)\bigr)=0,\qquad G_{t}\bigl(t,x(t)\bigr)+D_{x}G\bigl(t,x(t)\bigr)v(t)=0$$
   for every $t$ of its maximal interval.

4. **reaction power.** Along every ideal constrained motion as in clause 1,
   $$R(t)\cdot w(t)=-\lambda(t)\cdot G_{t}\bigl(t,x(t)\bigr)\qquad(t\in J),$$
   the pairings being the Euclidean inner products.

The statement is conditional on the adopted force branch and ideal-reaction
law and on hypotheses (h1)-(h2); it asserts no empirical value, and the
multiplier is a representation tied to the declared components of $G$.

## Facts & Assumptions

**Given:** The holonomic-constraint model and ideal-reaction law of the statement, with datum $(O,k,G)$, mass operator $\mathsf M$, force map $F$, and a constrained motion $x:J\to Q$ with ideal reaction $R$ and velocity $w=x'$.

[F1] The model ([[def-cm06-holonomic-constraint-model]]): $\mathsf M$ is symmetric positive definite; $\Sigma\subseteq I_{0}\times Q$ is the nonempty constraint locus with $D_{x}G$ of rank $k$ on $\Sigma$; the virtual displacements are $V(t,x)=\ker D_{x}G(t,x)$; a constrained motion satisfies $\mathsf Mx''=F(t,x,w)+R$; and a constrained curve family has $G(t,x(t))=0$.

[F2] The ideal law and multiplier lemma ([[post-cm06-ideal-reaction-law]] clause (i), [[lem-cm-constraint-multipliers-and-accelerations]]): $R(t)\cdot\delta=0$ for every $\delta\in V(t,x(t))$; for a surjective Jacobian $A=D_{x}G(t,x(t))$, a vector $R$ orthogonal to $\ker A$ is $R=A^{\mathsf T}\lambda$ for a unique $\lambda$; the matrix $C=A\mathsf M^{-1}A^{\mathsf T}$ is symmetric positive definite and invertible; and for such $R$ one has $\lambda=C^{-1}A\mathsf M^{-1}R$.

[F3] The chart proposition ([[prop-cm-ideal-holonomic-system-in-a-time-dependent-chart]]): let $O'\subseteq\mathbb R\times\mathbb R^{n}$ be open and nonempty, $G:O'\to\mathbb R^{k}$ of class $C^{3}$ with $G_{q}$ of rank $k$ on $O'$, $M$ symmetric positive definite and $f:O'\times\mathbb R^{n}\to\mathbb R^{n}$ of class $C^{1}$; with $C=G_{q}M^{-1}G_{q}^{\mathsf T}$ and $\Lambda,a$ as in that item, $C$ is symmetric positive definite, $\Lambda$ and $a$ are $C^{1}$, every initial value problem for $q'=v$, $v'=a(t,q,v)$ has a unique maximal solution, solutions with consistent data satisfy $G(t,q(t))=0$ and $G_{t}+G_{q}q'=0$ and are ideal-constraint motions with multiplier $\Lambda$, and conversely every $C^{2}$ ideal-constraint motion of $(G,M,f)$ with permitted velocity solves the system.

[F4] Identification of data: put $O':=O\cap(I_{0}\times Q)$, an open nonempty subset of $\mathbb R\times\mathbb R^{3N}$ (it contains the nonempty $\Sigma$), $n:=3N$, $M:=\mathsf M$, $f:=$ the restriction of $F$ to $O'\times\mathbb R^{3N}$, and $q:=x$ ([[def-cm01-configuration]] for $\mathsf M$ and $Q$, [[def-interval]] for $J$).

[F5] Chain rule and mixed partials: for the $C^{2}$ curve $t\mapsto(t,x(t))$ with values in $O$ and the $C^{3}$ map $G$, the function $h(t):=G(t,x(t))$ is $C^{2}$ with $h''=G_{tt}+2G_{tq}[x']+G_{qq}[x',x']+G_{q}x''$, by two applications of the chain rule and equality of mixed partials ([[thm-chain-rule-for-total-derivatives]], [[thm-clairaut-schwarz-mixed-partials]], [[def-vector-valued-derivative-and-integral]]).

[F6] Regularity of the inverse: inversion of a $C^{m}$ matrix-valued map whose values are invertible is $C^{m}$ ([[lem-matrix-inversion-preserves-ck-regularity]], [[def-invertible-matrix-and-general-linear-group]]).

[F7] Pairings and transposes: $(A^{\mathsf T}\lambda)\cdot v=\lambda\cdot Av$ for matrices and vectors over the Euclidean inner product, and sums and scalar multiples of continuous maps are continuous ([[def-transpose-of-a-matrix]], [[def-matrix-product-and-identity-matrix]], [[def-euclidean-inner-product]], [[def-jacobian-matrix-and-gradient]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

## Proof

**Proof technique:** direct; identify the model data with the chart proposition, use the multiplier lemma for the conormal representation, and differentiate the constraint twice to evaluate the multiplier.

1.1 The hypotheses of [F3] hold for the data of [F4]: $O'$ is open and nonempty, $G$ is $C^{3}$ with $G_{q}=D_{x}G$ of rank $k$ on $O'\subseteq O$ by (h1), $\mathsf M$ is symmetric positive definite by [F1], and $f$ is $C^{1}$ on $O'\times\mathbb R^{3N}$ because $F$ is $C^{1}$ on the open set $I_{0}\times Q\times(\mathbb R^{3N})$ by (h2). [F1, F3, F4, given]

1.2 Clause 1, representation and continuity: by the ideal law, $R(t)\cdot\delta=0$ for every $\delta\in\ker D_{x}G(t,x(t))$; the Jacobian is surjective because its rank is $k$ at $(t,x(t))\in\Sigma$ by [F1]. Applying clause 1 of [F2] at each $t$ gives a unique $\lambda(t)\in\mathbb R^{k}$ with $R(t)=D_{x}G(t,x(t))^{\mathsf T}\lambda(t)$. By clause 2 of [F2], $\lambda(t)=C(t,x(t))^{-1}D_{x}G(t,x(t))\mathsf M^{-1}R(t)$; here $t\mapsto C(t,x(t))$ is $C^{1}$ (indeed $C^{2}$) because $G$ is $C^{3}$ and $x$ is $C^{2}$, its values are invertible with $C^{-1}$ continuous by [F6], and $R$ is continuous by the definition of a reaction field; hence $\lambda$ is continuous. [F1, F2, F6, given, algebra]

2.1 Clause 1, explicit value: applying [F5] to the constrained motion and using the model equation $\mathsf Mx''=F(t,x,w)+R$ of [F1] together with $R=D_{x}G^{\mathsf T}\lambda$ of step 1.2, $$0=\frac{d^{2}}{dt^{2}}G\bigl(t,x(t)\bigr)=G_{tt}+2G_{tq}[w]+G_{qq}[w,w]+D_{x}G\,\mathsf M^{-1}\bigl(F+D_{x}G^{\mathsf T}\lambda\bigr)=G_{tt}+2G_{tq}[w]+G_{qq}[w,w]+D_{x}G\,\mathsf M^{-1}F+C\lambda,$$ where $C=D_{x}G\,\mathsf M^{-1}D_{x}G^{\mathsf T}$ is evaluated at $(t,x(t))$; solving, $C\lambda=-\bigl[D_{x}G\mathsf M^{-1}F+G_{tt}+2G_{tq}[w]+G_{qq}[w,w]\bigr]=C\,\Lambda(t,x,w)$ with $\Lambda$ of [F3], and $C$ is invertible, so $\lambda(t)=\Lambda(t,x(t),w(t))$. [F1, F3, F5, step 1.2, algebra]

3.1 Clauses 1 and 2, regularity and forward direction: by [F3], $C$ is symmetric positive definite and invertible and $\Lambda,a$ are $C^{1}$ on $O'\times\mathbb R^{3N}$; composing with the $C^{1}$ curve $t\mapsto(t,x(t),w(t))$ shows that $\lambda$ is $C^{1}$ as well, completing clause 1. Moreover $x'=w$ and $w'=x''=\mathsf M^{-1}(F+D_{x}G^{\mathsf T}\lambda)=\mathsf M^{-1}(F+D_{x}G^{\mathsf T}\Lambda(t,x,w))=a(t,x,w)$ by step 2.1, so $(x,w)$ solves the system of clause 2. [F3, step 1.2, step 2.1]

4.1 Clause 2, converse: let $(x,v)$ be a solution of the system on an interval $J$ with consistent data, and define $R(t):=D_{x}G(t,x(t))^{\mathsf T}\Lambda(t,x(t),v(t))$; $R$ is continuous because $\Lambda$, $D_{x}G$ and the curve are, and $R(t)\cdot\delta=\Lambda(t,x(t),v(t))\cdot D_{x}G(t,x(t))\delta=0$ for every $\delta\in\ker D_{x}G(t,x(t))$ by [F7], so the ideal-reaction law holds along $(x,v)$. The system gives $x'=v$ and $v'=\mathsf M^{-1}(F(t,x,v)+D_{x}G^{\mathsf T}\Lambda)=a(t,x,v)$, hence $\mathsf Mx''=F(t,x,v)+R$; a solution with consistent data satisfies $G(t,x(t))=0$ by clause 3 of [F3] (whose data are matched by step 1.1), so $x$ is a constrained curve family, and $(x,R)$ is a constrained motion with ideal reaction. Conversely, every ideal constrained motion with permitted velocity satisfies the system by steps 1.1, 1.2, 2.1, 3.1 applied to it: the hypotheses (h1)-(h2) and the structure of [F4] are the same. The uniqueness and maximal existence of solutions through consistent data is clause 2 of [F3]; this completes clause 2. [F3, F7, step 1.1, step 3.1, algebra]

5.1 Clause 3: for a solution with consistent data, clause 3 of [F3] gives $G(t,x(t))=0$ and $G_{t}(t,x(t))+D_{x}G(t,x(t))v(t)=0$ on the maximal interval; this is clause 3. [F3, step 4.1]

6.1 Clause 4: along an ideal constrained motion, $R\cdot w=(D_{x}G^{\mathsf T}\lambda)\cdot w=\lambda\cdot D_{x}G\,w=-\lambda\cdot G_{t}$ by [F7], where $G_{t}+D_{x}Gw=0$ is the differentiated constraint of step 5.1 (or the chain-rule identity of clause (b) of the model definition); this is clause 4. [step 1.2, step 5.1, F7, algebra] ∎

## Remarks

- **The multiplier is a representation.** The unique $\lambda(t)$ is attached to the declared components $G_{\alpha}$; multiplying $G$ by an invertible matrix-valued function $\rho(t,x)$ leaves the reaction $R$ and the constraint locus unchanged but changes $\lambda$ to
  $\rho^{-\mathsf T}\lambda$. Only $R$ enters the equation of motion, so no statement of this page may be read as attributing an independent measured meaning to $\lambda$.

- **Where the hypotheses enter.** The rank hypothesis (h1) on all of $O$ is used to make $C$ invertible and $\Lambda$ everywhere defined and $C^{1}$; the $C^{1}$ hypothesis on $F$ is used for the same purpose; the ideal-reaction law supplies the conormal membership of $R$, without which the motion is not determined. At a point of rank loss the multiplier matrix degenerates, the acceleration is not determined by the data, and the statement does not apply; no continuation across such a point is asserted.

- **Consistency is an initial-data condition.** A solution of the system through nonconsistent data still exists but does not satisfy $G=0$; the constrained motions are exactly the solutions with consistent data, as clause 2 records. Nothing here asserts existence of a constrained motion through data whose position is off the locus or whose velocity is not permitted.

- **No energy statement.** Clause 4 is the power identity of the reaction; the reading of its consequences for mechanical energy, including the vanishing of the reaction work for scleronomic constraints and the work done by rheonomic constraints, belongs to the rheonomic-power theorem of this page.
