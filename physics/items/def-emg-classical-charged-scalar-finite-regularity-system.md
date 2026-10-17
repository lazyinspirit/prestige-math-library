---
id: def-emg-classical-charged-scalar-finite-regularity-system
kind: definition
title: "Classical finite-regularity charged-scalar system and relative action"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - thm-multidimensional-integral-properties
  - def-emg-trivial-potential-charged-scalar-system
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
  - cor-change-of-variables-for-compactly-supported-functions
  - thm-continuous-on-a-rectangle-is-riemann-integrable
dependency_roles:
  thm-multidimensional-integral-properties: mathematical-premise
  def-emg-trivial-potential-charged-scalar-system: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
  cor-change-of-variables-for-compactly-supported-functions: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, sections 4.1 and 4.5.3"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Context for the Einstein–Hilbert and scalar action expressions. The classical regularity domain and compact-density construction are specified and proved locally here."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $M$ be a smooth Hausdorff, second-countable, oriented four-manifold without boundary. Its smooth
structure is retained throughout. A **classical finite-regularity
trivial-potential configuration** consists of a time-oriented $C^3$
Lorentzian metric $g$ of signature $(-,+,+,+)$, a global real $C^2$ one-form
$A$, and a global complex $C^2$ scalar $\varphi$. Fix
$c,G_N,\mu_0,K_\varphi>0$, $\lambda,\Lambda\in\mathbb R$, and
$V\in C^\infty(\mathcal U;\mathbb R)$ for an open
$\mathcal U\subset\mathbb R$ containing $|\varphi|^2(M)$. Set
$\kappa_E=8\pi G_N/c^4$. The curvature sign, length-coordinate convention
$x^0=ct$, and SI assignments are those of
[[def-emg-trivial-potential-charged-scalar-system]]; only these formulas and
conventions are imported, not that item's smooth-field restriction.

The Levi-Civita connection and curvature here are defined by their coordinate
formulas for this $C^3$ metric. Define

$$F_{ab}:=\partial_aA_b-\partial_bA_a,\qquad P_a:=\mathcal D_a\varphi:=\partial_a\varphi-i\lambda A_a\varphi,$$

$$\mathcal D_aP_b:=\nabla_aP_b-i\lambda A_aP_b,\qquad E_\varphi:=g^{ab}\mathcal D_aP_b-V'(|\varphi|^2)\varphi,$$

$$L_\varphi:=g^{ab}\overline{P_a}P_b+V(|\varphi|^2),\qquad j^a:=K_\varphi\lambda\operatorname{Im}(\overline\varphi P^a),$$

$$T^\varphi_{ab}:=K_\varphi\operatorname{Re}(\overline{P_a}P_b)-\frac{K_\varphi}{2}g_{ab}L_\varphi,\qquad T^{\mathrm{EM}}_{ab}:=\mu_0^{-1}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right).$$

Conjugate charged derivatives use the opposite gauge sign. All indices are
raised with $g^{-1}$. Thus $F,P$ are $C^1$, $j,T^\varphi,T^{\mathrm{EM}}$
are $C^1$, $E_\varphi$ and $\nabla_aF^{ab}$ are continuous, and the
Einstein tensor $G$ is $C^1$. The **classical charged-scalar equations** are
the pointwise equations

$$dF=0,\qquad \nabla_aF^{ab}=-\mu_0j^b,\qquad E_\varphi=0,\qquad G_{ab}+\Lambda g_{ab}=\kappa_E(T^{\mathrm{EM}}_{ab}+T^\varphi_{ab}).$$

Here $dF=0$ already follows from $F=dA$ with $A\in C^2$. These are equations
for the declared classical fields; they do not assert existence, smoothness
improvement, or a weaker distributional theory.

For a continuous compactly supported real top form $\omega$, define
$\mathcal I_M(\omega)$ by a finite smooth cutoff localization near its
support and the signed Riemann integrals of the resulting chart
coefficients, extended by zero. The construction and its independence are
proved below. For a complex top form extend $\mathcal I_M$ by integrating
its real and imaginary parts separately. For a configuration
$X=(g,A,\varphi)$ put

$$\mathscr L(X):=\left[\frac{c^3}{16\pi G_N}(R(g)-2\Lambda)-\frac{1}{4\mu_0c}F_{ab}F^{ab}-\frac{K_\varphi}{2c}L_\varphi\right]\mathrm{vol}_g.$$

If $X_1=X_0$ outside a compact set, its **relative total action** is
$S(X_1;X_0):=\mathcal I_M(\mathscr L(X_1)-\mathscr L(X_0))$. The scalar
and Maxwell relative actions are defined by their respective summands. No
subtraction of divergent global integrals is intended. When the separate
global integrals are defined and finite, this agrees with their difference.

Allowed independent directions are smooth compactly supported symmetric
inverse-metric tensors $q^{ab}$, real one-forms $\alpha$, and complex scalars
$\eta$. Near zero parameter use

$$g_\varepsilon^{-1}=g^{-1}+\varepsilon q,\qquad A_\varepsilon=A+\varepsilon\alpha,\qquad\varphi_\varepsilon=\varphi+\varepsilon\eta.$$

The parameter interval is restricted to preserve signature, time orientation,
and the potential domain. Stationarity means that the derivative of the
relative total action vanishes for every such direction. These definitions
include the original smooth trivial-potential system as a subclass, with its
same action coefficients and tensors. They do not change the separate
nontrivial-circle-bundle formulation or impose an integer condition on the
real coupling $\lambda$.

## Facts & Assumptions

**Given:** The smooth underlying oriented manifold, classical fields, constants, potential domain and compact directions in the Definition.

[F1] [[def-emg-trivial-potential-charged-scalar-system]] supplies the displayed tensor formulas and SI conventions in its smooth sector. Their classical meaning at the regularity declared here is established directly below.

[F2] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] provides finitely many nonnegative smooth functions with compact chart supports whose sum is one near any prescribed compact set. Only this smooth cutoff construction is used, not its smooth-form integration conclusion for the continuous coefficients here.

[F3] [[cor-change-of-variables-for-compactly-supported-functions]] applies to an injective $C^1$ coordinate change with invertible derivative and any compactly supported Riemann-integrable coefficient inside its image.

[F4] [[thm-continuous-on-a-rectangle-is-riemann-integrable]] makes continuous coefficients on a closed nondegenerate rectangle Riemann integrable.

[F5] [[thm-multidimensional-integral-properties]] supplies finite linearity, monotonicity and the absolute-value estimate on nondegenerate rectangles. Constants have their constant value times rectangle volume by their Darboux sums.

## Proof

**Proof technique:** verify the classical tensor orders, construct the compact integral, and check that compact directions stay in the declared domain.

1.1 In a smooth chart, inversion of a nondegenerate $C^3$ matrix is $C^3$; the Christoffel formula therefore gives a $C^2$ connection and the curvature formula a $C^1$ tensor. Smooth coordinate changes preserve these regularities. The ordinary chain and product rules give $F,P\in C^1$, the stated continuous Euler–Lagrange expressions, and $C^1$ current and stress. Symmetry of $g^{-1}$ makes $g^{ab}\overline{P_a}P_b$ real and $\operatorname{Re}(\overline{P_a}P_b)$ symmetric; the Maxwell quadratic is also symmetric. The coordinate transformation laws follow by the chain rule, so all displayed equations compare global tensors. Commuting the continuous second partial derivatives of $A$ gives $dF=0$. [given, F1, algebra]

1.2 Let $K=\operatorname{supp}\omega$. Apply [F2] and multiply $\omega$ by its finitely many cutoffs. Each continuous coefficient has compact support strictly inside its chart, so zero extension is continuous and has a bounding rectangle; [F4] defines its finite integral. On a chart overlap the top-form coefficient transforms by the determinant of the smooth coordinate change. Its orientation sign converts that determinant to the absolute determinant, so [F3] gives the same signed integral in either chart. For two finite localizations $(\chi_i)$ and $(\tau_j)$, insert $\chi_i\omega=\sum_j\chi_i\tau_j\omega$ and the corresponding identity with $i,j$ exchanged. Every product has compact support in the chart intersection. Finite linearity from [F5] and the overlap identity make both sums equal to the same double sum. Thus $\mathcal I_M$ is well defined, linear and local. Empty support gives the empty sum zero. [given, F2, F3, F4, F5, construct, algebra]

2.1 Each action density has continuous coefficients. Configurations agreeing off a compact set have density difference supported in that set, including the curvature term, because their derivatives agree on its open complement. Step 1.2 therefore defines every stated relative action. For three mutually compactly differing configurations the density differences add on the union of their compact supports, so their relative actions add. On smooth fields the construction is precisely the same finite chart integral and the formulas in [F1]; hence it agrees with the original smooth relative action. [given, F1, step 1.1, step 1.2, algebra]

2.2 On the union $K$ of the three direction supports, nondegeneracy and the chosen time cone persist under a uniformly small perturbation: use finitely many chart neighborhoods of the compact set and take the minimum of their positive parameter bounds. The attained set $|\varphi|^2(K)$ is a compact subset of the open set $\mathcal U$, so uniform convergence of $|\varphi+\varepsilon\eta|^2$ keeps it inside $\mathcal U$ for small $\varepsilon$; outside $K$ nothing changes. The resulting metric is $C^3$ and the matter fields are $C^2$, with $\delta g_{ab}=-g_{ac}g_{bd}q^{cd}$. The action densities and their parameter derivatives are continuous on compact parameter-chart rectangles. Consequently these directions are actual variations of the declared class, not only formal symbols. [given, step 1.1, step 1.2, construct, algebra]

3.1 A real $C^3$ function $\chi$ gives $A'=A+d\chi\in C^2$ and $\varphi'=e^{i\lambda\chi}\varphi\in C^2$. The product rule gives $P'=e^{i\lambda\chi}P$ and $F'=F$, so the action density is unchanged. Pullback by a smooth orientation-preserving diffeomorphism also preserves the classical class and the density formulas. For compactly supported transformations, step 1.2 and [F3] give invariance of the relative action. These are mathematical invariances, not a physical adoption or a solution-existence theorem. [given, F3, step 1.1, step 1.2, algebra] ∎
