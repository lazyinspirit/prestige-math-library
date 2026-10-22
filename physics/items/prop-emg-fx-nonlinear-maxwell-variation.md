---
id: prop-emg-fx-nonlinear-maxwell-variation
kind: proposition
title: "Constitutive field equation from compact variations"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-emg-fx-nonlinear-lagrangian
  - lem-emg-lorentz-hodge-calculus
  - def-multidimensional-darboux-integral
  - def-multidimensional-darboux-sums
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-riemann-fubini-on-product-rectangles
  - thm-ftc-second-part
  - def-countable-choice
  - def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
  - thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement
  - def-emg-fx-continuous-compact-top-form-integral
dependency_roles:
  def-emg-fx-nonlinear-lagrangian: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  def-multidimensional-darboux-sums: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-countable-choice: mathematical-premise
  def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold: mathematical-premise
  thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement: mathematical-premise
  def-emg-fx-continuous-compact-top-form-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes (2019),
        §3.2.5, The Maxwell Action"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§3.2.5, printed pp. 113–117 (PDF pp. 120–124): compact field-strength
        variations and the source-free and sourced Maxwell equations. The
        nonlinear chain rule and sign are derived in the local proof."
    - title: "Dmitri P. Sorokin, Introductory Notes on Non-linear Electrodynamics and
        its Applications, arXiv:2112.12118v3 (2022)"
      url: "https://arxiv.org/pdf/2112.12118"
      locator: "§3.2, equations (3.4)–(3.7), PDF pp. 5–6; §6, equations (6.1)–(6.3),
        PDF pp. 10–11. Its generic invariant action and field equation are used
        as independent context; the local proof supplies the exact fixed-sector
        argument and convention."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Chapter 4, equations (4.28)–(4.29) and (4.45), and Chapter 1,
        equations (1.77)–(1.78): potential-to-field-strength and Maxwell action
        conventions. Gaussian source signs are not imported."
---

## Statement

Use the fixed-metric, fixed-bundle-sector model of the nonlinear Lagrangian Definition: $F$ is its smooth closed real curvature two-form, $L\in C^2(\mathbb R^2)$, $X=-F_{ab}F^{ab}/4$, $Y=-F_{ab}(\star_gF)^{ab}/4$, and $H^{ab}=L_XF^{ab}+L_Y(\star_gF)^{ab}$. For dimensionless $\epsilon\in\mathbb R$, a permitted variation is a smooth compactly supported global real one-form $a$ added to each compatible local physical-potential representative, so $F_\epsilon=F+\epsilon da$; stationarity differentiates the relative $L(X,Y)\,\mathrm{vol}_g$ action difference. Its compactly supported density is integrated by the finite chart-partition rule for continuous top forms, agreeing with the usual integral on smooth forms; this convention retains $\mathrm{AC}_\omega$, meaning every countable family of nonempty sets has a choice function. If the connection is stationary under every such variation and the source coupling is absent, then
$$\nabla_aH^{ab}=0,\qquad dF=0.$$
For $L=X+\alpha X^2+\beta Y^2$ this gives
$$H^{ab}=(1+2\alpha X)F^{ab}+2\beta Y(\star_gF)^{ab}.$$
Here $\alpha,\beta$ are arbitrary fixed real parameters with units inverse to those of $X,Y$ when units are attached. This is a conditional Euler–Lagrange deduction for the stated mathematical model; it does not assign QED coefficients or assert that a field solves the equations. The variation alone gives no hyperbolicity, causal-cone, uniqueness, or well-posedness result.

## Statement references

[[def-emg-fx-nonlinear-lagrangian]]

[[lem-emg-lorentz-hodge-calculus]]

[[def-countable-choice]]

[[def-emg-fx-continuous-compact-top-form-integral]]

## Facts & Assumptions

**Given:** The Definition's smooth Lorentzian metric, fixed bundle connection sector, smooth curvature $F$, $C^2$ function $L$, and all compactly supported smooth global one-form variations.

[F1] [[def-emg-fx-nonlinear-lagrangian]] defines $X=-F_{ab}F^{ab}/4$, $Y=-F_{ab}(\star_gF)^{ab}/4$, $H^{ab}=L_XF^{ab}+L_Y(\star_gF)^{ab}$, and the relative source-free action. Its fixed-sector variations add a global physical one-form to compatible local physical-potential representatives, giving $\delta F=da$; its curvature is closed. In the proof, $\delta S_L[a]$ denotes the derivative at $\epsilon=0$ of this relative action difference along the permitted variation generated by $a$.

[F2] [[lem-emg-lorentz-hodge-calculus]] defines the Lorentzian Hodge map by the metric-orientation pairing. The symmetry of the induced two-form pairing gives $F_{ab}(\star_g\delta F)^{ab}=(\star_gF)^{ab}\delta F_{ab}$ at fixed $g$.

[F3] The integral of a bounded function over a nondegenerate rectangle is the common lower and upper Darboux integral, with lower and upper sums formed from cell infima and suprema times cell volumes ([[def-multidimensional-darboux-integral]], [[def-multidimensional-darboux-sums]]). A continuous function on a closed nondegenerate rectangle is integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]). For an integrable function on a product rectangle whose sections in the integration order are integrable, the iterated and multiple integrals agree ([[thm-riemann-fubini-on-product-rectangles]]); if $G$ is differentiable and $G'$ is integrable on a closed interval, then $\int G'=G(b)-G(a)$ ([[thm-ftc-second-part]]). If a continuous coefficient $h$ is nonnegative on a rectangle $Q$ and $h\ge\eta>0$ on a nondegenerate subrectangle $R\subseteq Q$, a grid of $Q$ with $R$ as a cell has lower sum at least $\eta\operatorname{vol}(R)>0$, so $\int_Qh>0$.

[F4] $\mathrm{AC}_\omega$ states that every countable family of nonempty sets has a choice function ([[def-countable-choice]]). The continuous compact-support integral [[def-emg-fx-continuous-compact-top-form-integral]] is a linear finite chart-partition sum, independent of the charts and cutoffs, local to an open set containing the support, and compatible on smooth forms with [[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]] and [[thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement]]. This explicit continuous extension, rather than the smooth-only imported formulation, is the relative-action integral in [F1] and the integral of the continuous divergence density below.

[A1] $F$ and the metric are smooth and $L\in C^2(\mathbb R^2)$, so $H$ is $C^1$ and $\nabla_aH^{ab}$ is continuous; stationarity is imposed for every permitted compactly supported one-form.

## Proof

1.1 At fixed $g$, variation of the contractions gives $\delta X=-\frac12F^{ab}\delta F_{ab}$. By [F2], $F_{ab}(\star_g\delta F)^{ab}=(\star_gF)^{ab}\delta F_{ab}$: in an oriented orthonormal coframe this follows from the component formula for $\star_g$ and the positive sign of exchanging the two antisymmetric index pairs of the volume tensor. Hence $\delta Y=-\frac12(\star_gF)^{ab}\delta F_{ab}$. The chain rule gives $\delta L=-\frac12H^{ab}\delta F_{ab}$. For a connection variation $a_b$, [F1] gives $\delta F_{ab}=2\nabla_{[a}a_{b]}$; antisymmetry of $H$ reduces the varied density to $-H^{ab}\nabla_a a_b$. [given, F1, F2, A1, algebra]

1.2 The connection-curvature construction in [F1] is locally $F=dA_i$ in every bundle chart. The exterior derivative satisfies $d^2=0$, so $dF=d^2A_i=0$ in each chart and hence globally. This equation is a curvature identity, not a second consequence of stationarity. [given, F1, algebra]

2.1 Put $K:=\operatorname{supp}a$ and $W^a:=H^{ab}a_b$. Then $W$ is a compactly supported $C^1$ vector field, not necessarily smooth. If $K$ is empty the variation is zero, so assume $K\ne\varnothing$. Cover $K$ by smaller relatively compact coordinate balls $U_i$ and choose finitely many larger positively oriented coordinate balls $V_i$ with $\overline{U_i}\subset V_i$; compactness gives a finite subcover. In each chart choose a nonnegative smooth bump $\rho_i$ supported compactly in $V_i$ and equal to $1$ on $U_i$, which is obtained from the standard smooth Euclidean bump by a radial rescaling in the chart. For $B:=\sum_i\rho_i$, one has $B\ge1$ on $K$. Choose a smooth function $q:\mathbb R\to[0,1]$ with $q(s)=0$ for $s\le1/4$ and $q(s)=1$ for $s\ge1/2$ (such a step is obtained from $u(s)=e^{-1/s}$ for $s>0$ and $u(s)=0$ for $s\le0$); set $\eta:=q\circ B$. Then $\eta=1$ on the open neighborhood $V:=\{B>1/2\}$ of $K$, its support is compact and contained in $\{B>0\}$, and $\chi_i:=\eta\rho_i/B$ on $\{B>0\}$, extended by zero elsewhere, are smooth, compactly supported in $V_i$, and satisfy $\sum_i\chi_i=1$ on $V$. This construction of local cutoffs uses compactness only; the inherited $\mathrm{AC}_\omega$ condition for the global integral is stated in [F4]. In a positive chart put $w:=\sqrt{|\det(g_{ab})|}>0$. Contracting the Christoffel formula gives $\Gamma^a{}_{ac}=\frac12g^{ab}\partial_cg_{ab}=\partial_c\log w$, where the last equality is the determinant derivative formula. Hence, for $W_i:=\chi_iW$, $\nabla_aW_i^a=\partial_aW_i^a+\Gamma^a{}_{ac}W_i^c=w^{-1}\partial_a(wW_i^a)$. Each $wW_i^a$ is $C^1$ and compactly supported inside its chart, so extend it by zero to a containing coordinate rectangle. Its coordinate derivative is continuous and each one-variable section of $wW_i^a$ is continuously differentiable, so [F3] applies: Fubini reduces the integral of each derivative to an interval integral, and the fundamental theorem makes that integral zero because the section vanishes near the interval endpoints. Thus $\int_{V_i}\nabla_aW_i^a\,\mathrm{vol}_g=0$. Since $\sum_i\chi_i=1$ on the open neighborhood $V$ of $K$ and $W$ vanishes outside $K$, $\sum_i\nabla_aW_i^a=\nabla_aW^a$ everywhere. The finite cutoffs near $K$ compute the continuous compact-support integral by [F4], so $\int_M\nabla_aW^a\,\mathrm{vol}_g=\sum_i\int_{V_i}\nabla_aW_i^a\,\mathrm{vol}_g=0$. The relative-action density difference is $C^1$ in the parameter and supported in $K$. Multiplying it by the same $\chi_i$ gives finitely many compactly supported chart densities; on a fixed coordinate rectangle their parameter derivatives are continuous and hence uniformly continuous on a compact parameter interval. [F3] makes these derivatives integrable, and the mean-value theorem shows their difference quotients converge uniformly to the derivatives at $\epsilon=0$. The Darboux definition gives $|\int_Qf|\le\operatorname{vol}(Q)\sup_Q|f|$, so these uniform limits pass to the integrals and the finite sum differentiates termwise. Integrating the product identity $\nabla_aW^a=(\nabla_aH^{ab})a_b+H^{ab}\nabla_aa_b$ now yields
$$\delta S_L[a]=\int_M(\nabla_aH^{ab})a_b\,\mathrm{vol}_g.$$
No boundary term at infinity is used because the varied integrand has compact support. The finite-cover integration-by-parts argument applies to $C^1$ $W$ and does not use a global partition of unity; the overall compact-action convention still has the inherited $\mathrm{AC}_\omega$ hypothesis in [F4]. [given, F1, F4, A1, F3, step 1.1, construct, algebra]

3.1 Put $P^b=\nabla_aH^{ab}$, which is continuous by [A1]. If $P^{b_0}$ were nonzero at a point in a chart, continuity would give a closed nondegenerate coordinate rectangle $Q$ around that point, with $Q$ contained in the chart, on which $P^{b_0}$ has one strict sign. Choose a nonnegative smooth bump $\phi$ compactly supported in the interior of $Q$ and positive near the point, set $a_{b_0}=\phi$ and all other coordinate components to zero, and extend by zero. Such a bump is obtained as a product of one-dimensional smooth bumps, each built from $u(s)=e^{-1/s}$ for $s>0$ and $u(s)=0$ for $s\le0$. If units are attached, multiply this test one-form by a fixed positive potential-component unit so it has the units required by [F1]; this does not change its sign. After multiplying by the sign of $P^{b_0}$, the coefficient $h:=P^{b_0}\phi w$ is nonnegative on $Q$ and bounded below by some $\eta>0$ on a smaller nondegenerate rectangle $R\subseteq Q$ around the point. By [F3], a grid of $Q$ with $R$ as one cell has a strictly positive lower sum, so the local integral over $Q$ is positive. Its support lies in $Q$, and [F4] identifies this with the global integral in step 2.1. This is nonzero, contradicting stationarity. Thus $P^b=0$ in every chart. Conversely, $P=0$ makes the variation in step 2.1 zero for every allowed $a$. [given, A1, F3, F4, step 2.1, construct, algebra]

4.1 For the displayed polynomial, $L_X=1+2\alpha X$ and $L_Y=2\beta Y$. Substitution into the definition of $H$ in [F1] gives the stated constitutive tensor. The proof derives no characteristic polynomial or principal symbol, so no hyperbolicity or causal-cone conclusion is available. [F1, algebra] ∎
## Remarks

The action uses the mathematical normalization $L=X$; physical SI factors require the inherited field-scaling convention before any physical adoption. Order reduction, when used in an effective model, is an additional approximation rather than an algebraic equivalence.
