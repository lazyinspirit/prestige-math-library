---
id: lem-rpm-external-charge-local-ivp
kind: lemma
title: "External Lorentz ODE local well-posedness"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-gr-smooth-lorentzian-objects
  - def-countable-choice
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-picard-lindelof-local-existence-and-uniqueness
  - cor-mean-value-theorem
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - lem-gr-future-causal-classification-by-a-timelike-field
  - thm-extreme-value-metric
  - thm-heine-borel-rn
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "Tobias Holck Colding, MIT OpenCourseWare 18.100B Real Analysis, Spring 2025, Lecture 23: Ordinary Differential Equations"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec23.pdf"
      locator: "Complete five-page lecture note, pp. 1–4: Picard–Lindelöf existence and uniqueness, contraction proof, and the mean-value bound from a continuous derivative. The local RPM proof separately verifies its finite-dimensional C1 vector field is locally Lipschitz."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011)"
      url: "https://arxiv.org/pdf/1102.0529v3"
      locator: "Author manuscript, arXiv v3, §18.1, equations (18.3)–(18.7), printed pp. 96–97: the proper-length particle action, electromagnetic interaction e∫A_mu dz^mu, reparameterization invariance, and the Lorentz-force equation. The source varies a coupled field-particle system and warns that its point-particle equation is only formal because the self-field is singular on the worldline; it is cited as context, not as a derivation of this prescribed smooth external-field model."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $(M,g,N)$ be a smooth, time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$; assume $\mathrm{AC}_\omega$ for its canonical tangent-bundle smooth structure, so the metric-selected Levi–Civita connection $\nabla$ exists by [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Let $O\subseteq M$ be open and let $F$ be a $C^1$ alternating covariant two-tensor field on $O$ (a two-form); define $F^\sharp$ by $g(F^\sharp(v),w)=F(w,v)$. Fix $m,c>0$, $q\in\mathbb R$, an event $x_0\in O$, and $U_0\in T_{x_0}M$ with $g(U_0,U_0)=-c^2$ future directed. Then the initial-value problem

$$\dot x=U,\qquad \nabla_UU=(q/m)F^\sharp(U),\qquad (x(\tau_0),U(\tau_0))=(x_0,U_0)$$

has a unique local $C^2$ solution on an open proper-time interval containing $\tau_0$. Any two solutions with these initial data agree on every connected part of their common domain containing $\tau_0$. Along the solution, $g(U,U)=-c^2$ and $U$ remains future directed. The result is local; it asserts no completeness or global existence for arbitrary external fields.

## Facts & Assumptions

**Given:** A smooth time-oriented Lorentzian four-manifold $(M,g,N)$; assume $\mathrm{AC}_\omega$ for its canonical tangent-bundle smooth structure; an open region $O\subseteq M$; the metric-selected connection $\nabla$; a $C^1$ alternating covariant two-tensor $F$ on $O$; $m,c>0$, $q\in\mathbb R$; and future timelike initial data $(x_0,U_0)$ with $x_0\in O$ and $g(U_0,U_0)=-c^2$.

[A1] [[def-countable-choice]]: assume the axiom of countable choice $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure.

[F1] [[def-gr-smooth-lorentzian-objects]]: the metric is smooth, symmetric and nondegenerate of signature $(-,+,+,+)$, and the time orientation selects the future timelike component continuously.

[F2] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: under $\mathrm{AC}_\omega$, the metric connection is smooth and metric compatible, with $\nabla g=0$ and smooth Christoffel coefficients in every chart.

[F3] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous vector field on an open Euclidean domain that is locally Lipschitz in its state variable has a unique local classical solution through each initial datum; solutions with the same initial data agree on common intervals.

[F4] [[cor-mean-value-theorem]]: for a differentiable scalar function continuous on a closed interval, its endpoint difference equals its derivative at an interior point times the interval length.

[F5] [[thm-algebra-of-derivatives]]: finite sums and products of differentiable real-valued functions of one real variable obey the sum and product rules; the finite-dimensional extension needed below is proved in step 1.1.

[F6] [[thm-chain-rule-for-total-derivatives]]: if $f$ and $g$ are totally differentiable at the relevant points, then $g\circ f$ is totally differentiable with derivative $Dg(f(a))\circ Df(a)$.

[F7] [[lem-gr-future-causal-classification-by-a-timelike-field]]: $g(v,N)\neq0$ for every nonzero causal vector, and a timelike vector is future-directed exactly when $g(v,N)<0$.

[F8] [[thm-extreme-value-metric]]: every continuous real function on a nonempty compact metric set attains finite maximum and minimum values.

[F9] [[thm-heine-borel-rn]]: closed bounded boxes in finite-dimensional Euclidean space are compact.

## Proof

**Proof technique:** direct.

1.1 Choose a chart $(U,\varphi)$ with $x_0\in U\subseteq O$ and write its coordinates as $y^a=\varphi^a(x)$. The state domain $\varphi(U)\times\mathbb R^4$ is open and the equation is $\dot y^a=U^a$, $\dot U^a=-\Gamma^a{}_{bc}(y)U^bU^c+(q/m)F^a{}_b(y)U^b$, where $F^a{}_b:=g^{ac}F_{cb}$ by the definition of $F^\sharp$. To extend the scalar rules [F5] to this state domain, let $h,k$ be $C^1$ scalar functions on a Euclidean open set and write $\Delta h=h(w+\eta)-h(w)=Dh(w)\eta+r_h(\eta)$ with $r_h(\eta)=o(\|\eta\|_2)$, and similarly for $k$. The identity $\Delta(hk)=k(w)\Delta h+h(w)\Delta k+\Delta h\Delta k$ gives $D(hk)(w)=k(w)Dh(w)+h(w)Dk(w)$, since $\Delta h,\Delta k=O(\|\eta\|_2)$ and their product is $o(\|\eta\|_2)$; adding expansions gives $D(h+k)=Dh+Dk$. These derivatives are continuous: their entries are finite sums and products of continuous scalar functions, and continuity of a product follows directly from $|ab-a_0b_0|\le |a|\,|b-b_0|+|b_0|\,|a-a_0|$ with $a$ locally bounded by continuity. The coordinate projections are linear with constant derivatives; composing the $C^1$ coefficients $g^{ac},\Gamma^a{}_{bc},F_{cb}$ with the projection $(y,U)\mapsto y$ uses [F6]. Thus these local sum and product rules show the eight-component right-hand side $H$ is $C^1$, with continuous derivative matrix formed from its component derivatives. [given, A1, F1, F2, F5, F6, algebra]

2.1 Choose a nondegenerate closed convex coordinate box $B$ about $(\varphi(x_0),U_0^a)$ contained in the state domain. It is compact by [F9], so [F8] bounds the absolute values of all entries of $DH$ by one finite $M\ge0$ on $B$. For $w,w'\in B$, apply [F6] and the one-variable mean value theorem [F4] to $t\mapsto H^i(w+t(w'-w))$ on $[0,1]$, for each of the eight components. It gives $|H^i(w')-H^i(w)|\le M\sum_{j=1}^8|w'_j-w_j|\le8M\|w'-w\|_2$, hence $\|H(w')-H(w)\|_2\le8\sqrt8M\|w'-w\|_2$. Since the box has the initial state in its interior, the field is locally Lipschitz there; the same construction applies at every state. [step 1.1, F4, F6, F8, F9, algebra]

3.1 Apply [F3] to this locally Lipschitz coordinate vector field to obtain a unique local solution. Because the vector field is $C^1$, composing it with the $C^1$ solution and applying [F6] shows its derivative is $C^1$, so the curve is $C^2$. The coordinate equation is equivalent to the covariant equation by the Christoffel coefficients of [F2], so coordinate changes carry solutions to solutions. For any two geometric solutions with the same initial data on a connected common interval, their equality set is nonempty and closed by continuity; it is relatively open because at each equality point a common chart and [F3] give local uniqueness. Connectedness makes the equality set the whole interval. [step 1.1, step 2.1, A1, F2, F3, F6]

4.1 Metric compatibility and antisymmetry give $\frac{d}{d\tau}g(U,U)=2g(U,\nabla_UU)=2(q/m)g(U,F^\sharp(U))=2(q/m)F(U,U)=0$. Thus the initial norm $-c^2$ is preserved, so $U$ stays timelike. Let $N$ be the smooth timelike field defining the time orientation. By [F7], $g(U,N)$ is nonzero throughout the solution and the initial future direction means it is initially negative; continuity therefore keeps it negative on the connected local interval. Again by [F7], $U$ remains future-directed. [step 3.1, A1, F2, F7, algebra] ∎
