---
id: pthm-cm07-euler-lagrange-equations
kind: physics-theorem
title: "The stationary-action criterion and the potential-part Euler-Lagrange equation"
status: draft
origin: session
domain: physics
dependency_level: 14
deps: [def-cm07-action-and-mechanical-lagrangian, pthm-cm07-first-variation-and-euler-lagrange-expression, thm-cm-stationarity-iff-euler-lagrange, lem-cm-first-variation-formula, def-cm-time-dependent-lagrangian-and-action, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-velocity-acceleration, def-cm01-units, def-interval]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  pthm-cm07-first-variation-and-euler-lagrange-expression: physical-result
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
  lem-cm-first-variation-formula: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The Euler-Lagrange equation of the mechanical Lagrangian of a declared potential presentation: for a C^2 curve of the model on a fixed interval, stationarity of the action, the vanishing of the Euler-Lagrange expression and the pointwise equation mass-operator acceleration equals minus the potential gradient are equivalent. The equivalence identifies the variational critical-point condition with the potential-part equation on the interval, and with the full model equation when d is identically zero; it is conditional on the adopted force branch and the declared presentation, and it asserts no solution existence, no minimisation and no empirical content."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.1, printed pages 10-13 (PDF pages 16-19): stationarity of the action is equivalent to Lagrange's equations"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 5.2-5.3 and 6.2: Euler's differential equation and the Newtonian plausibility argument for the standard Lagrangian"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 2.1, chapter pages 1-2: Lagrange equations of motion for a system with kinetic minus potential energy"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and the mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
masses $m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$ and $C^{2}$ potential
$U:I_{0}\times Q\to\mathbb R$ ([[def-cm03-potential-and-mechanical-energy]]).
Let $a<b$ with $[a,b]\subseteq I_{0}$, and let $x:[a,b]\to Q$ be a $C^{2}$
admissible curve ([[def-cm-time-dependent-lagrangian-and-action]]). Then the
following three conditions are equivalent:

1. $x$ is stationary for the action $S$ of $L$;
2. $E_{L}(x)(t)=0$ for every $t\in[a,b]$;
3. $\mathsf M x''(t)=-\nabla_{x}U\bigl(t,x(t)\bigr)$ for every $t\in[a,b]$.

Condition 3 is the model's equation of motion of the potential branch
([[post-cm02-force-superposition]] clause (iv)) written along the curve for the
presentation $(U,d)$ with the potential part alone: the residual forces $d$ do
not appear, and the statement is therefore a statement about the potential
part of the force map. No existence of curves satisfying these conditions is
asserted.

## Facts & Assumptions

**Given:** The model data, presentation and curve of the statement.

[F1] The chart instance and first variation ([[def-cm07-action-and-mechanical-lagrangian]], [[lem-cm-first-variation-formula]]): $(O,L)$ with $O=I_{0}\times Q\times\mathbb R^{3N}$ is a time-dependent Lagrangian chart over $[a,b]\times Q$, and the notions of admissible curve, variation, action, first variation and stationarity are those of [[def-cm-time-dependent-lagrangian-and-action]] instantiated at it.

[F2] The stationarity theorem ([[thm-cm-stationarity-iff-euler-lagrange]]): a $C^{2}$ admissible curve $q$ of a time-dependent Lagrangian chart is stationary for the action if and only if its Euler-Lagrange expression vanishes identically on the interval.

[F3] The Euler-Lagrange expression in model terms ([[pthm-cm07-first-variation-and-euler-lagrange-expression]]): for the curve $x$ one has $E_{L}(x)(t)=-\bigl(\mathsf M x''(t)+\nabla_{x}U(t,x(t))\bigr)$ for every $t\in[a,b]$.

[F4] The model's equation of motion ([[post-cm02-force-superposition]] clause (iv), [[def-cm01-velocity-acceleration]], [[def-cm01-configuration]]): a motion of the model with force map $F$ satisfies $m_{i}x_{i}''(t)=F_{i}(t,x(t),x'(t))$ on its interval, equivalently $\mathsf M x''(t)=F(t,x(t),x'(t))$; for the presentation $(U,d)$ of the statement the potential part of $F$ is $-\nabla_{x}U$ ([[def-cm03-potential-and-mechanical-energy]] clause (a)).

## Proof

**Proof technique:** direct; combine the mathematical stationarity characterisation with the model-terms Euler-Lagrange identity and read the result through the equation of motion.

1.1 Conditions 1 and 2 are equivalent: $x$ is a $C^{2}$ admissible curve of the chart instance of [F1], so the stationarity theorem [F2] applied to that chart gives that $x$ is stationary for $S$ if and only if $E_{L}(x)(t)=0$ for every $t\in[a,b]$. [F1, F2, given]

1.2 Conditions 2 and 3 are equivalent: by [F3], at every $t\in[a,b]$ the value $E_{L}(x)(t)$ is the negative of $\mathsf M x''(t)+\nabla_{x}U(t,x(t))$; a vector-valued function on $[a,b]$ vanishes identically if and only if its negative does. [F3, algebra]

1.3 Reading condition 3: by [F4], for the presentation $(U,d)$ the potential part of the model's force map is $-\nabla_{x}U$, so condition 3 says that $x$ satisfies the model's equation of motion with the declared force map replaced by its potential part, i.e. the equation of the global potential model obtained from the presentation by discarding $d$. [F4, given]

2.1 Steps 1.1 and 1.2 establish the equivalence of conditions 1-3; step 1.3 records its reading as the model's equation of motion of the potential part. No existence, minimisation or empirical claim is made. [step 1.1, step 1.2, step 1.3] ∎

## Remarks

- **Residual forces are excluded here.** Condition 3 uses $-\nabla_{x}U$ only. When $d\not\equiv0$ the model's full equation of motion is $\mathsf M x''=F=-\nabla_{x}U+d$, and the additional term $d$ appears on the right of condition 3; the variational reading of the full equation requires generalized forces and is treated separately on this page.

- **The equation is an identity of curves, not a solution statement.** The equivalence is between three conditions on one given $C^{2}$ curve. Whether such curves exist through given data, and how they relate to the maximal motions of the force model, is the content of the following theorem.
