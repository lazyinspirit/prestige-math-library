---
id: lem-rpm-external-charge-local-ivp
kind: lemma
title: "External Lorentz ODE local well-posedness"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-gr-smooth-lorentzian-objects
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-picard-lindelof-local-existence-and-uniqueness
  - cor-mean-value-theorem
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - lem-gr-future-causal-classification-by-a-timelike-field
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "Tobias Holck Colding, MIT OpenCourseWare 18.100B Real Analysis, Spring 2025, Lecture 23: Ordinary Differential Equations"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec23.pdf"
      locator: "Complete five-page lecture note, pp. 1–4: Picard–Lindelöf existence and uniqueness, contraction proof, and the mean-value bound from a continuous derivative. The local RPM proof separately verifies its finite-dimensional C1 vector field is locally Lipschitz."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011)"
      url: "https://arxiv.org/html/1102.0529v3"
      locator: "Complete author manuscript, arXiv v3, §5.2.1: curved charged-particle interaction/action and worldline equation, with the singular self-field limitation kept separate from the prescribed external-field model."
verification: {}
---

## Statement

Let $(M,g,N)$ be a smooth, time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$, with Levi–Civita connection $\nabla$. Let $O\subseteq M$ be open and let $F$ be a $C^1$ alternating covariant two-tensor field on $O$ (a two-form); define $F^\sharp$ by $g(F^\sharp(v),w)=F(w,v)$. Fix $m,c>0$, $q\in\mathbb R$, an event $x_0\in O$, and $U_0\in T_{x_0}M$ with $g(U_0,U_0)=-c^2$ future directed. Then the initial-value problem

$$\dot x=U,\qquad \nabla_UU=(q/m)F^\sharp(U),\qquad (x(\tau_0),U(\tau_0))=(x_0,U_0)$$

has a unique local $C^2$ solution on an open proper-time interval containing $\tau_0$. Any two solutions with these initial data agree on every connected part of their common domain containing $\tau_0$. Along the solution, $g(U,U)=-c^2$ and $U$ remains future directed. The result is local; it asserts no completeness or global existence for arbitrary external fields.

## Facts & Assumptions

**Given:** A smooth time-oriented Lorentzian four-manifold $(M,g,N)$; an open region $O\subseteq M$; the metric-selected connection $\nabla$; a $C^1$ alternating covariant two-tensor $F$ on $O$; $m,c>0$, $q\in\mathbb R$; and future timelike initial data $(x_0,U_0)$ with $x_0\in O$ and $g(U_0,U_0)=-c^2$.

[F1] [[def-gr-smooth-lorentzian-objects]]: the metric is smooth, symmetric and nondegenerate of signature $(-,+,+,+)$, and the time orientation selects the future timelike component continuously.

[F2] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: the metric connection is smooth and metric compatible, so $\nabla g=0$ and its Christoffel coefficients are smooth in every chart.

[F3] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous vector field on an open Euclidean domain that is locally Lipschitz in its state variable has a unique local classical solution through each initial datum; solutions with the same initial data agree on common intervals.

[F4] [[cor-mean-value-theorem]]: for a differentiable scalar function continuous on a closed interval, its endpoint difference equals its derivative at an interior point times the interval length.

[F5] [[thm-algebra-of-derivatives]]: finite sums and products of differentiable coordinate functions are differentiable, with the stated sum and product rules.

[F6] [[thm-chain-rule-for-total-derivatives]]: if $f$ and $g$ are totally differentiable at the relevant points, then $g\circ f$ is totally differentiable with derivative $Dg(f(a))\circ Df(a)$.

[F7] [[lem-gr-future-causal-classification-by-a-timelike-field]]: the orthogonal complement of a timelike vector is positive definite, and $g(v,N)\neq0$ for every nonzero causal vector $v$.

## Proof

**Proof technique:** direct.

1.1 In a chart with $x_0\in O$, the state domain $x(O)\times\mathbb R^4$ is open and the equation is $\dot x^a=U^a$, $\dot U^a=-\Gamma^a{}_{bc}(x)U^bU^c+(q/m)F^a{}_b(x)U^b$. Its right-hand side is $C^1$ because $g$ and $\Gamma$ are smooth and $F$ is $C^1$, using the sum, product and composition rules [F5, F6]. Choose a sufficiently small closed convex coordinate box about $(x_0,U_0)$ contained in that state domain. Its first partial derivatives are bounded; along the segment between any two states, the one-variable mean value theorem [F4], applied to each component, bounds the difference of vector-field values by a constant times the state difference. Thus the field is locally Lipschitz. [given, F1, F2, F4, F5, F6, algebra]

1.2 Apply [F3] to this locally Lipschitz coordinate vector field to obtain a unique local solution. Because the vector field is $C^1$, composing it with the $C^1$ solution and applying [F6] shows its derivative is $C^1$, so the curve is $C^2$. The coordinate equation is equivalent to the covariant equation by the definition of the Christoffel coefficients, so the local chart solutions agree under chart changes and share the asserted uniqueness. [step 1.1, F2, F3, F6]

2.1 Metric compatibility and antisymmetry give $\frac{d}{d\tau}g(U,U)=2g(U,\nabla_UU)=2(q/m)g(U,F^\sharp(U))=2(q/m)F(U,U)=0$. Thus the initial norm $-c^2$ is preserved. Let $N$ be the smooth timelike field defining the time orientation. Since each solution value $U$ is timelike, [F7] gives $g(U,N)\neq0$; this continuous function therefore keeps its initially negative sign on the connected local interval, so $U$ remains future directed. [step 1.2, F2, F7, algebra] ∎
