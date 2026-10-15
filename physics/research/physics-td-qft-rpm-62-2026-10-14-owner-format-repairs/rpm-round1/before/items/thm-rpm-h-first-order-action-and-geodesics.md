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
deps: [def-countable-choice, def-gr-smooth-lorentzian-objects, def-rpm-h-cotangent-phase-space, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-geodesic-of-an-affine-connection, def-covariant-derivative-along-a-curve, thm-cm-stationarity-iff-euler-lagrange, def-rpm-h-regular-constraint-system, thm-rpm-h-canonical-poisson-and-flow, thm-rpm-h-homogeneous-massive-shell]
dependency_roles:
  thm-rpm-h-homogeneous-massive-shell: mathematical-premise
  thm-rpm-h-canonical-poisson-and-flow: mathematical-premise
  def-rpm-h-regular-constraint-system: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-rpm-h-cotangent-phase-space: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete lecture notes (arXiv:gr-qc/9712019v1)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Complete 238-page notes; Chapter 1, printed pp. 25–27, and Chapter 3, printed pp. 68–72; full relevant sections inspected."
    - title: "W. F. Chagas-Filho, Free massless particles and extended space-time algebra"
      url: "https://arxiv.org/pdf/hep-th/0401091"
      locator: "§§1–2, pp. 1–3: separate massless einbein action."
physical_scope: null
---

## Statement

Let $(M,g,T)$ be a prescribed smooth time-oriented Lorentzian four-manifold with signature $(-+++)$. Work in a spacetime chart on a compact parameter interval $[a,b]$ with $a<b$; take $x,p,e$ smooth on a neighbourhood of that interval, $e>0$, $m\ge0$, and $c>0$. Select stationary triples on the future shell branch after taking the independent variations: when $m>0$, $p^\sharp$ is future timelike; when $m=0$, require $p\ne0$ and $p^\sharp$ future null. Set $C_m=\tfrac12(g^{ab}p_ap_b+m^2c^2)$ and define the first-order functional

$$I_m[x,p,e]=\int_a^b\left(p_ax'^a-eC_m(x,p)\right)d\lambda.$$

Take independent smooth variations of $p,e$ and fixed-endpoint variations of $x$. Stationarity on the chart segment is equivalent to

$$x'^a=e g^{ab}p_b,\quad p'_a=-\tfrac e2\partial_a g^{bc}p_bp_c,\quad C_m=0.$$

On the massive future branch $m>0$, these equations are equivalent to stationary paths of the mathematical square-root functional $S[x]=-mc\int_a^b\sqrt{-g(x\prime,x\prime)}\,d\lambda$ on future-timelike curves with fixed endpoints; the fibre-derivative covector is $p=mc\,x'^\flat/\sqrt{-g(x',x')}$, and proper-time gauge has $e=1/m$. For the separate nonzero future-null branch $m=0$, the equations describe a null geodesic with an arbitrary positive parameter multiplier; no proper-time parameter exists. In both cases the unparameterized path is a geodesic, and no existence or completeness claim is made.

## Facts & Assumptions

**Given:** A smooth nondegenerate Lorentz metric, $c>0$, the displayed first-order functional and the selected future massive or nonzero future-null branch, and smooth curves/covectors with fixed endpoint events.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] On future-timelike smooth curves with fixed endpoint events, define the mathematical functional $S[x]=-mc\int_a^b\sqrt{-g(x\prime,x\prime)}\,d\lambda$ for fixed $m,c>0$. Its Lorentzian geometry is supplied by [[def-gr-smooth-lorentzian-objects]]. No physical motion principle is assumed.

[F2] For $m=0$, select the stationary triples with $p\ne0$, $p^\sharp$ future null, and smooth multiplier $e>0$. This is a mathematical branch condition on the displayed first-order functional, with independent variations taken before imposing $C_0=0$.

[F3] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: the metric-compatible torsion-free Levi-Civita connection exists and $\nabla g=0$.

[F4] [[def-geodesic-of-an-affine-connection]]: an affine geodesic satisfies $\nabla_{\dot x}\dot x=0$.

[F5] [[def-covariant-derivative-along-a-curve]]: covariant differentiation obeys the coordinate connection formula and product rule.

[F6] [[thm-cm-stationarity-iff-euler-lagrange]]: fixed-endpoint stationarity is equivalent to the Euler–Lagrange equations.

[F7] [[def-rpm-h-regular-constraint-system]]: a regular constraint level is specified by independent differentials, and its total generator is the canonical Hamiltonian plus multiplier-weighted constraints.

[F8] [[thm-rpm-h-canonical-poisson-and-flow]]: the convention is $\iota_{X_H}\omega=dH$ and canonical Hamilton equations have the corresponding signs.

[F9] [[thm-rpm-h-homogeneous-massive-shell]]: for $m>0$ the square-root Legendre image is the embedded future mass shell with positive-ray fibres.

## Proof

1.1 Use the supplied smooth tangent and cotangent bundles under [A1], with the mathematical functionals and selected branches [F1,F2]. In a spacetime chart, variation in $e$ gives $C_m=0$. Variation in $p_a$ gives $x'^a=e g^{ab}p_b$. Variation in $x^a$, integrating the $p_a\delta x'^a$ term by parts with $\delta x$ vanishing at endpoints, gives $p'_a=-e\partial_a C_m=-\tfrac e2\partial_a g^{bc}p_bp_c$. The vertical differential of $C_m$ is $d_pC_m=p^\sharp$; it is nonzero on the massive branch because $g^{-1}(p,p)=-m^2c^2<0$, and on the massless branch because $p\ne0$ and $g^{-1}$ is nondegenerate. Thus the shell is a regular primary constraint by [F7], and [F8] fixes the canonical sign convention. The equations are tensorial and hence agree across overlapping charts. [given, A1, F1, F2, F6, F7, F8, algebra]

1.2 For $m>0$, the first equation gives $p_a=g_{ab}x'^b/e$. The constraint gives $g(x',x')=-e^2m^2c^2$, so $s=\sqrt{-g(x',x')}=emc$ because $e,m,c>0$. Hence $p_a=mc\,g_{ab}x'^b/s$, the fibre derivative of the square-root Lagrangian; this agrees with the exact image result [F9]. [given, F1, F9, step 1.1, algebra]

1.3 Substituting $p_a=g_{ab}x'^b/e$ into the integrand gives $L_1=g(x',x')/(2e)-em^2c^2/2=-s^2/(2e)-em^2c^2/2$, where $s=\sqrt{-g(x',x')}>0$. Its $e$-derivative is $s^2/(2e^2)-m^2c^2/2$, whose unique positive zero is $e=s/(mc)$; the second derivative there is $-s^2/e^3\ne0$. Thus the $p$- and $e$-stationarity equations determine a unique smooth auxiliary pair $(p^*(x,x'),e^*(x,x'))$ on the future timelike domain, and the stationary integrand is $-mc\,s$. For any fixed-endpoint variation $x_\varepsilon$, choose $p_\varepsilon,e_\varepsilon$ by these formulas. The chain rule for the varied action has the $x_\varepsilon$ variation plus terms proportional to its $p$- and $e$-derivatives; those terms vanish at the auxiliary stationary pair. Hence the first variation of the reduced action equals the $x$-part of the first-order variation. Conversely every stationary first-order triple must equal this unique auxiliary pair, so the same identity gives the reverse implication. This proves the equivalence with the square-root action. [given, F1, F6, step 1.1, step 1.2, algebra]

2.1 Differentiate $p_a=g_{ab}x'^b/e$, use the second equation, and use the inverse-metric identity $\partial_a g^{bc}g_{bi}g_{cj}=-\partial_a g_{ij}$. Multiplying by $e$ gives
$$g_{ab}x''^b+(\partial_cg_{ab})x'^cx'^b-\frac{e'}e g_{ab}x'^b=\frac12(\partial_ag_{ij})x'^ix'^j.$$
Since $x'^cx'^b$ is symmetric, the difference of the metric-derivative terms is $\frac12(\partial_cg_{ab}+\partial_bg_{ac}-\partial_ag_{bc})x'^cx'^b=g_{ad}\Gamma^d{}_{cb}x'^cx'^b$. Inverting $g_{ab}$ therefore gives
$$\nabla_{x'}x'=\frac{e'}e x'.$$
This computation uses [F3]–[F5]; it is the coordinate form of the reparameterized geodesic equation. [given, F3, F4, F5, step 1.1, algebra]

2.2 For $m>0$, $d\tau=s\,d\lambda/c=em\,d\lambda$, so $e=1/m$ in proper-time parameter and step 2.1 becomes $\nabla_UU=0$; the converse follows by reversing the momentum definition and the same identities. [given, F1, F4, step 1.2, step 2.1]

3.1 For $m=0$, [F2] selects $p\ne0$ future null; the first equation makes $x'=e p^\sharp$, so $x'$ is nonzero future null and the constraint is null. Choose a new parameter σ with $d\sigma/d\lambda=e/e_0$ for any constant $e_0>0$; the connection transformation law applied to step 2.1 gives $\nabla_{dx/d\sigma}(dx/d\sigma)=0$. Since $g(x',x')=0$, the massive proper-time construction cannot be used. [given, F2, F4, F5, step 1.1, step 2.1, algebra] ∎
