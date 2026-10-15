---
id: thm-rpm-h-first-order-action-and-geodesics
kind: theorem
title: "First-order shell action yields massive and null geodesics"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-background-and-model-quantities, def-rpm-h-cotangent-phase-space, post-rpm-h-free-test-particle-action, post-rpm-h-massless-shell-action, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-geodesic-of-an-affine-connection, def-covariant-derivative-along-a-curve, thm-cm-stationarity-iff-euler-lagrange, def-rpm-h-regular-constraint-system, thm-rpm-h-canonical-poisson-and-flow, thm-rpm-h-homogeneous-massive-shell]
dependency_roles:
  thm-rpm-h-homogeneous-massive-shell: mathematical-premise
  thm-rpm-h-canonical-poisson-and-flow: mathematical-premise
  def-rpm-h-regular-constraint-system: mathematical-premise
  def-countable-choice: mathematical-premise
  def-rpm-h-background-and-model-quantities: mathematical-premise
  def-rpm-h-cotangent-phase-space: mathematical-premise
  post-rpm-h-free-test-particle-action: physical-assumption
  post-rpm-h-massless-shell-action: physical-assumption
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, complete lecture notes, §§1.2.1–1.2.3"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Printed pp. 11–16: particle action, mass shell, geodesic equation."
    - title: "W. F. Chagas-Filho, Free massless particles and extended space-time algebra"
      url: "https://arxiv.org/pdf/hep-th/0401091"
      locator: "§§1–2, pp. 1–3: separate massless einbein action."
physical_scope: "Conditional variational equivalence on a prescribed smooth background; does not assert empirical validity or global geodesic completeness."
---

## Statement

Let $(M,g,T)$ be a prescribed smooth time-oriented Lorentzian four-manifold with signature $(-+++)$. For $m\ge0$ define $C_m=\tfrac12(g^{ab}p_ap_b+m^2c^2)$ and the first-order functional

$$I_m[x,p,e]=\int\left(p_ax'^a-eC_m(x,p)\right)d\lambda,\qquad e>0.$$

Take independent smooth variations of $p,e$ and fixed-endpoint variations of $x$. Stationarity is equivalent to

$$x'^a=e g^{ab}p_b,\quad p'_a=-\tfrac e2\partial_a g^{bc}p_bp_c,\quad C_m=0.$$

On the massive future branch $m>0$, these equations are equivalent to stationary paths of the square-root action in [[post-rpm-h-free-test-particle-action]]; the mechanical covector is (p=mc\,x'^\flat/\sqrt{-g(x',x')}), and proper-time gauge has $e=1/m$. For the separate nonzero future-null branch $m=0$, the equations describe a null geodesic with an arbitrary positive parameter multiplier; no proper-time parameter exists. In both cases the unparameterized path is a geodesic, and no existence or completeness claim is made.

## Facts & Assumptions

**Given:** A smooth nondegenerate Lorentz metric, $c>0$, the two adopted physical formulations, and smooth curves/covectors with fixed endpoint events.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[post-rpm-h-free-test-particle-action]]: the massive square-root action is an adopted model on future timelike curves.

[F2] [[post-rpm-h-massless-shell-action]]: the null action is a separate adopted model with $p\ne0$, $p^\sharp$ future null, and $e>0$.

[F3] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: the metric-compatible torsion-free Levi-Civita connection exists and $\nabla g=0$.

[F4] [[def-geodesic-of-an-affine-connection]]: an affine geodesic satisfies $\nabla_{\dot x}\dot x=0$.

[F5] [[def-covariant-derivative-along-a-curve]]: covariant differentiation obeys the coordinate connection formula and product rule.

[F6] [[thm-cm-stationarity-iff-euler-lagrange]]: fixed-endpoint stationarity is equivalent to the Euler–Lagrange equations.

[F7] [[def-rpm-h-regular-constraint-system]]: a regular constraint level is specified by independent differentials, and its total generator is the canonical Hamiltonian plus multiplier-weighted constraints.

[F8] [[thm-rpm-h-canonical-poisson-and-flow]]: the convention is $\iota_{X_H}\omega=dH$ and canonical Hamilton equations have the corresponding signs.

[F9] [[thm-rpm-h-homogeneous-massive-shell]]: for $m>0$ the square-root Legendre image is the embedded future mass shell with positive-ray fibres.

## Proof

1.1 In a spacetime chart, variation in $e$ gives $C_m=0$. Variation in $p_a$ gives $x'^a=e g^{ab}p_b$. Variation in $x^a$, integrating the $p_a\delta x'^a$ term by parts with $\delta x$ vanishing at endpoints, gives $p'_a=-e\partial_a C_m=-\tfrac e2\partial_a g^{bc}p_bp_c$. By [F7] this is the regular total-constraint setup, and [F8] fixes the canonical sign convention. The equations are tensorial and hence hold across charts. [given, A1, F6, F7, F8, calculus]

1.2 For $m>0$, the first equation gives $p_a=g_{ab}x'^b/e$. The constraint gives $g(x',x')=-e^2m^2c^2$, so $s=\sqrt{-g(x',x')}=emc$ because $e,m,c>0$. Hence $p_a=mc\,g_{ab}x'^b/s$, the fibre derivative of the square-root Lagrangian; this agrees with the exact image result [F9]. [given, F1, F9, step 1.1, algebra]

1.3 Substituting $p_a=g_{ab}x'^b/e$ into $p_ax'^a-eC_m$ gives $L_1=g(x',x')/(2e)-em^2c^2/2=-s^2/(2e)-em^2c^2/2$. Its derivative in $e$ is $s^2/(2e^2)-m^2c^2/2$, with unique positive zero $e=s/(mc)$; its second derivative there is $-s^2/e^3\ne0$. The stationary value is $L_1=-mc s$. The $p$ equation is nondegenerate because its fibre derivative is $-e g^{-1}$, and the $e$ equation has the nonzero derivative just computed. Therefore eliminating these pointwise auxiliary variables preserves the fixed-endpoint $x$ first variation, proving both directions of the asserted equivalence with the square-root action. [given, F1, F6, step 1.1, step 1.2, algebra]

2.1 Differentiate $p_a=g_{ab}x'^b/e$, use the second equation, and use the inverse-metric identity $\partial_a g^{bc}g_{bi}g_{cj}=-\partial_a g_{ij}$. Multiplying by $e$ gives

$$g_{ab}x''^b+(\partial_cg_{ab})x'^cx'^b-\frac{e'}e g_{ab}x'^b=\frac12(\partial_ag_{ij})x'^ix'^j.$$

Since $x'^cx'^b$ is symmetric, the difference of the metric-derivative terms is $\frac12(\partial_cg_{ab}+\partial_bg_{ac}-\partial_ag_{bc})x'^cx'^b=g_{ad}\Gamma^d{}_{cb}x'^cx'^b$. Inverting $g_{ab}$ therefore gives

$$\nabla_{x'}x'=\frac{e'}e x'.$$

This computation uses [F3]–[F5]; it is the coordinate form of the reparameterized geodesic equation. [given, F3, F4, F5, step 1.1, tensor algebra]

2.2 For $m>0$, $d\tau=s\,d\lambda/c=em\,d\lambda$, so $e=1/m$ in proper-time parameter and step 2.1 becomes $\nabla_UU=0$; the converse follows by reversing the momentum definition and the same identities. [given, F1, F4, step 1.2, step 2.1]

3.1 For $m=0$, [F2] selects $p\ne0$ future null; the first equation makes $x'=e p^\sharp$, so $x'$ is nonzero future null and the constraint is null. Choose a new parameter σ with $d\sigma/d\lambda=e/e_0$ for any constant $e_0>0$; the connection transformation law applied to step 2.1 gives $\nabla_{dx/d\sigma}(dx/d\sigma)=0$. Since $g(x',x')=0$, the massive proper-time construction cannot be used. [given, F2, F4, F5, step 1.1, step 2.1, calculus] ∎
