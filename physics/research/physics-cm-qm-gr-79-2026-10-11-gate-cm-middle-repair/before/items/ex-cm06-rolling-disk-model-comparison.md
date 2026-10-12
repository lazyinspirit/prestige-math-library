---
id: ex-cm06-rolling-disk-model-comparison
kind: example
title: "Rolling as distinct models: the planar ideal no-slip disk against frictionless sliding, and the contact capability condition"
status: draft
origin: session
domain: physics
dependency_level: 10
deps: [def-cm-holonomic-constraint-and-ideal-reactions, lem-cm-constraint-multipliers-and-accelerations, prop-cm-ideal-holonomic-system-in-a-time-dependent-chart, def-cm06-nonholonomic-model, def-cm01-units, def-linear-map, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-invertible-matrix-and-general-linear-group, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, cor-zero-derivative-implies-constant, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm-holonomic-constraint-and-ideal-reactions: mathematical-premise
  lem-cm-constraint-multipliers-and-accelerations: mathematical-premise
  prop-cm-ideal-holonomic-system-in-a-time-dependent-chart: mathematical-premise
  def-cm06-nonholonomic-model: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-linear-map: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked model-discrimination example for the rolling contact: two reduced planar models of a disk with the same declared kinetic matrix and applied force — the ideal no-slip model with its holonomic constraint and ideal reaction, and the frictionless sliding model with no constraint — with the accelerations, the multiplier, the required contact force and the empirical static-friction capability condition compared on explicit model data. The example uses a reduced two-coordinate description declared as model data, asserts no measured value, and records that general three-dimensional rolling, slip transitions and contact changes are separate models outside it."
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 5.7 (Constrained Variational Systems: the straight-rolling exception) and Section 6.8 (a disk rolling on an inclined plane with the constraint force)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 4.3, Fig. 4.6 and Eqs. (4.45)-(4.47), chapter pages 8-9 (PDF pages 63-64): a round cylinder rolling without slippage, the no-slip kinematic relation as a holonomic constraint, and the effective inertia I_ef=I+Mr^2"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.4, printed page 20 (PDF page 23): rolling, sliding and static friction as distinct model assumptions with separate coefficients, and the breakdown of smooth ODE models for static friction without further structure"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.3.2, Eq. (2.41) and the rolling-coin discussion, printed pages 20-21 (PDF pages 26-27): the rolling coin's velocity-dependent constraints cannot be integrated, so general rolling is non-holonomic"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Declare a **reduced planar disk model** on the two coordinates
$q=(x,\theta)\in\mathbb R^{2}$, where $x$ is the centre coordinate along a
straight line and $\theta$ the oriented spin, with the **declared kinetic
matrix**
$$M:=\begin{pmatrix}m&0\\ 0&I\end{pmatrix},\qquad m>0,\quad I>0,$$
of dimension $\mu$ and $\mu\ell^{2}$ respectively ([[def-cm01-units]]); the
reduction of a rigid disk to these two coordinates, with the spin inertia $I$
as model data, is a declared modelling step and is not derived here. The
applied generalized force is
$$\Phi:=(f,0),\qquad f\in\mathbb R,$$
a force $f$ on the centre and no applied spin torque, and the disk radius is
$a>0$.

Consider two models of the planar contact, expressed in the same coordinates
and with the same $M$ and $\Phi$:

**(M1) ideal no-slip model.** The holonomic constraint
$$\mathcal G(x,\theta):=x-a\theta,\qquad \mathcal G_{q}=(1,-a),$$
imposed as $\mathcal G=0$; the Jacobian has rank one. With the d'Alembert
ideal-reaction law of
[[def-cm-holonomic-constraint-and-ideal-reactions]] and virtual displacements
$\delta\in\ker\mathcal G_{q}=\mathbb R(a,1)$: the generalized reaction is
$\mathcal G_{q}^{\mathsf T}\lambda$ for a multiplier $\lambda$, and the
motions satisfy $Mq''=\Phi+\mathcal G_{q}^{\mathsf T}\lambda$.

**(M2) frictionless sliding model.** No constraint and no reaction: the
motions satisfy $Mq''=\Phi$.

Then:

1. in **M1** the ideal motions satisfy
   $$\Bigl(m+\frac{I}{a^{2}}\Bigr)x''=f,\qquad x''=\frac{fa^{2}}{I+ma^{2}},\qquad \theta''=\frac{af}{I+ma^{2}},$$
   with the unique multiplier $\lambda=-\dfrac{fI}{I+ma^{2}}$, reaction
   $\mathcal G_{q}^{\mathsf T}\lambda=(\lambda,-a\lambda)$ and reaction power
   identically zero; the planar straight-line no-slip constraint is
   holonomic-equivalent, since $x-a\theta$ is constant along every admissible
   curve;
2. in **M2** the motions satisfy $x''=f/m$ and $\theta''=0$;
3. the two models make different predictions for the same applied force: for
   $f\ne0$ and $a^{2}m>0$,
   $$\frac{x''_{\mathrm{M1}}}{x''_{\mathrm{M2}}}=\frac{ma^{2}}{I+ma^{2}}=\frac{1}{1+I/(ma^{2})}<1,$$
   equal to $\tfrac23$ for a uniform thin disk $I=\tfrac12ma^{2}$ and to
   $\tfrac12$ for a hoop $I=ma^{2}$;
4. the ideal no-slip model requires the contact to supply the generalized
   reaction $(\lambda,-a\lambda)$, that is a contact force of magnitude
   $|\lambda|=|f|I/(I+ma^{2})$ along the line of rolling together with its
   torque; if the normal component of the contact force is $N=mg$ (horizontal
   plane, weight only) and the static-friction coefficient of the declared
   contact model is $\mu_{s}$, the no-slip idealization is consistent with the
   declared contact model only while $|\lambda|\le\mu_{s}N$; for the uniform
   disk this is $|f|\le3\mu_{s}mg$. Where the required force exceeds the
   contact capability, the no-slip constraint cannot be maintained and a
   slipping model (with kinetic friction as a separately declared force)
   applies instead;
5. on the explicit model data $m=1\,\mathrm{kg}$, $a=1\,\mathrm m$,
   $I=\tfrac12\,\mathrm{kg}\,\mathrm m^{2}$, $g=10\,\mathrm m\,\mathrm s^{-2}$
   and $f=3\,\mathrm N$: $x''_{\mathrm{M1}}=2\,\mathrm m\,\mathrm s^{-2}$,
   $x''_{\mathrm{M2}}=3\,\mathrm m\,\mathrm s^{-2}$,
   $\lambda=-1\,\mathrm N$ and $|\lambda|=1\,\mathrm N$, within
   $\mu_{s}N=5\,\mathrm N$ for the declared $\mu_{s}=\tfrac12$; with
   $f=18\,\mathrm N$ instead, M1 requires $|\lambda|=6\,\mathrm N>5\,\mathrm N$,
   so under those parameters the declared contact model cannot maintain the
   no-slip constraint and M1's premises fail.

All values are model values under the declared reduction and contact model;
the example reports no measurement.

## Facts & Assumptions

**Given:** The constants $m,a,I>0$ and $f\in\mathbb R$, the reduced model data $(M,\Phi)$, the constraint $\mathcal G$, and the two declared models M1 and M2.

[F1] The ideal-constraint mathematics ([[def-cm-holonomic-constraint-and-ideal-reactions]], [[lem-cm-constraint-multipliers-and-accelerations]], [[prop-cm-ideal-holonomic-system-in-a-time-dependent-chart]]): for a $C^{2}$ regular constraint $\mathcal G$ with $\mathcal G_{q}$ of rank $k$, $M$ symmetric positive definite, $C=\mathcal G_{q}M^{-1}\mathcal G_{q}^{\mathsf T}$ is symmetric positive definite and invertible, the ideal-constraint motions with permitted velocity are exactly the solutions of the first-order system with multiplier $\Lambda=-C^{-1}[\mathcal G_{q}M^{-1}\Phi+\mathcal G_{tt}+2\mathcal G_{tq}[v]+\mathcal G_{qq}[v,v]]$ and acceleration $a=M^{-1}(\Phi+\mathcal G_{q}^{\mathsf T}\Lambda)$, and the reaction power satisfies $R\cdot q'=-\Lambda\cdot\mathcal G_{t}$; the multiplier is unique, and a vector orthogonal to $\ker\mathcal G_{q}$ is $\mathcal G_{q}^{\mathsf T}\lambda$ with $\lambda=C^{-1}\mathcal G_{q}M^{-1}R$ ([[lem-cm-constraint-multipliers-and-accelerations]]).

[F2] Regularity of the constraint data: $\mathcal G$ is $C^{\infty}$ with $\mathcal G_{q}=(1,-a)$ of rank $1$; the kernel is the line $\mathbb R(a,1)$; $\mathcal G_{t}=0$, $\mathcal G_{tt}=0$, $\mathcal G_{tq}=0$ and $\mathcal G_{qq}=0$ ([[def-linear-map]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-euclidean-inner-product]]).

[F3] The sliding model M2: $Mq''=\Phi$ componentwise is $mx''=f$ and $I\theta''=0$; $M$ is invertible with $M^{-1}=\mathrm{diag}(m^{-1},I^{-1})$ ([[def-invertible-matrix-and-general-linear-group]]).

[F4] Calculus and equivalence: for a $C^{1}$ curve the derivative of $x-a\theta$ is $x'-a\theta'$, so the constraint $\mathcal G(q(t))=0$ for all $t$ is equivalent for admissible curves to $x'-a\theta'=0$ and to $x-a\theta$ constant ([[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]], [[cor-zero-derivative-implies-constant]], [[def-interval]], [[thm-chain-rule-for-total-derivatives]]).

[F5] The nonholonomic classification, read for this declared reduced model in the coordinates $(x,\theta)$ ([[def-cm06-nonholonomic-model]] clause (d): a constant-rank affine law is holonomic-equivalent when it has the form $A=\varrho\Phi_{q}$, $b=\varrho\Phi_{t}$ for a $C^{2}$ map $\Phi$ and a nowhere-vanishing $C^{2}$ factor $\varrho$, so that it integrates to the position constraint $\Phi=$ constant along admissible curves): step 1.1 exhibits the pair $\Phi=x-a\theta$, $\varrho=1$ for the planar straight-line no-slip law; general three-dimensional rolling is reported nonholonomic; rank and contact changes are outside the comparison.

## Verification

**Proof technique:** direct; compute the two models' accelerations from their declared equations, compare them, and evaluate the contact capability condition on explicit data.

1.1 The M1 constraint data and its holonomic-equivalence: $\mathcal G_{q}=(1,-a)$ has rank one, $\ker\mathcal G_{q}=\{(a\delta,\delta):\delta\in\mathbb R\}$ as a set of virtual displacements, and along any admissible curve $x'-a\theta'=0$; hence $\mathcal G(q(t))$ is constant by [F4], so the constraint is the differentiated position constraint $\mathcal G=$ constant and is holonomic-equivalent in the sense of [F5]. [F2, F4, F5, algebra]

1.2 The M1 acceleration, multiplier and reaction: by [F1] with the time-independent data of [F2], $C=\mathcal G_{q}M^{-1}\mathcal G_{q}^{\mathsf T}=\frac1m+\frac{a^{2}}{I}=\frac{I+ma^{2}}{mI}$, $\mathcal G_{q}M^{-1}\Phi=\frac{f}{m}$, and $\Lambda=-C^{-1}\frac fm=-\frac{mI}{I+ma^{2}}\cdot\frac fm=-\frac{fI}{I+ma^{2}}=\lambda$. The equations $Mq''=\Phi+\mathcal G_{q}^{\mathsf T}\lambda$ read $mx''=f+\lambda$ and $I\theta''=-a\lambda$; substituting $\lambda$ gives $mx''=f-\frac{fI}{I+ma^{2}}=\frac{fma^{2}}{I+ma^{2}}$, that is $x''=\frac{fa^{2}}{I+ma^{2}}$, and $I\theta''=\frac{afI}{I+ma^{2}}$, that is $\theta''=\frac{af}{I+ma^{2}}$; this is the displayed triple, with reaction $\mathcal G_{q}^{\mathsf T}\lambda=(\lambda,-a\lambda)$. The reaction power vanishes because $R\cdot q'=\lambda x'-a\lambda\theta'=\lambda(x'-a\theta')=0$ by the constraint, in agreement with the power identity of [F1] and $\mathcal G_{t}=0$. [F1, F2, algebra]

1.3 The M2 acceleration: by [F3], $x''=f/m$ and $\theta''=0$. [F3, algebra]

2.1 The models disagree and the comparison is quantitative: for $f\ne0$, subtracting the two predictions gives $x''_{\mathrm{M2}}-x''_{\mathrm{M1}}=\frac fm-\frac{fa^{2}}{I+ma^{2}}=\frac{f}{m}\cdot\frac{I}{I+ma^{2}}\ne0$, so the two declared models are distinct; taking the ratio, $\frac{x''_{\mathrm{M1}}}{x''_{\mathrm{M2}}}=\frac{ma^{2}}{I+ma^{2}}=\frac{1}{1+I/(ma^{2})}$, which is $\frac{2}{3}$ at $I=\frac12ma^{2}$ and $\frac12$ at $I=ma^{2}$. [F3, step 1.2, step 1.3, algebra]

2.2 The contact capability condition: model M1's reaction is the contact's force pair $(\lambda,-a\lambda)$ with $|\lambda|=\frac{|f|I}{I+ma^{2}}$; a contact model with normal reaction $N$ and static-friction bound $\mu_{s}$ can maintain no-slip only while the required tangential force satisfies $|\lambda|\le\mu_{s}N$. For the uniform disk $I=\frac12ma^{2}$ this is $\frac{|f|}{3}\le\mu_{s}N$, that is $|f|\le3\mu_{s}N$; with the weight-only normal reaction $N=mg$ on a horizontal plane, $|f|\le3\mu_{s}mg$. Where the bound fails, the no-slip idealization is not a valid model of that contact; the sliding model or a kinetic-friction model applies instead, and transitions between rolling and slipping — like general three-dimensional rolling and rank or contact changes — are outside the present comparison. [F5, step 1.2, algebra]

3.1 Finite model data: with $m=1$, $a=1$, $I=\frac12$, $f=3$ and $g=10$ one has $x''_{\mathrm{M1}}=\frac{3\cdot1}{\frac12+1}=2\,\mathrm m\,\mathrm s^{-2}$, $x''_{\mathrm{M2}}=3\,\mathrm m\,\mathrm s^{-2}$ and $\lambda=-\frac{3\cdot\frac12}{\frac12+1}=-1\,\mathrm N$, so the required tangential force is $1\,\mathrm N$; with the declared $\mu_{s}=\frac12$ and $N=mg=10\,\mathrm N$ the bound $\mu_{s}N=5\,\mathrm N$ is satisfied and M1 is consistent with the declared contact model on these data. With $f=18$ instead, $x''_{\mathrm{M1}}=12\,\mathrm m\,\mathrm s^{-2}$ and $\lambda=-6\,\mathrm N$, whose magnitude exceeds $5\,\mathrm N$, so the required force lies outside the declared contact capability and M1's premises fail. [step 1.2, step 1.3, step 2.2, algebra]

4.1 Clauses 1-5 are proved: the reduced ideal no-slip model and the frictionless sliding model have the displayed accelerations, they are distinct for every nonzero applied force, the ideal model's reaction is the displayed contact pair with vanishing power, and the contact capability condition selects the models on explicit data. The example is a comparison of declared reduced models, not a derivation of the disk's reduction from rigid-body mechanics and not a measurement. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The reduced model is declared.** The pair $(x,\theta)$ with kinetic matrix $\mathrm{diag}(m,I)$ is a reduced description of the planar disk; the moment of inertia $I$ is model data, not derived here, and the reduction of a rigid body to these coordinates belongs to the rigid-body development of the track. What the example tests is the model discrimination and the capability condition, not the reduction.

- **Rolling is a family of models.** No-slip with sufficient static friction, slipping with kinetic friction, rolling with resistance, and prescribed motion of the contact are different models; their empirical adequacy depends on the contact materials and regime, and transitions between them require contact-change or impact models that are outside this pair.
