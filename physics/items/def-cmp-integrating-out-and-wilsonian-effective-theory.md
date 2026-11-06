---
id: def-cmp-integrating-out-and-wilsonian-effective-theory
kind: definition
title: Integrating out fields and the Wilsonian effective theory
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
page: cmp-kaluza-klein-reduction-and-effective-theory
dependency_level: 8
physical_scope: "Classical tree elimination and regulated Wilsonian quantum matching for a declared retained/omitted field split. Locality claims require a positive omitted-sector gap and low external momenta in a common frame."
deps:
  - def-cmp-consistent-truncation
  - def-cmp-kaluza-klein-reduction-ansatz-and-frames
dependency_roles:
  def-cmp-consistent-truncation: formulation-prerequisite
  def-cmp-kaluza-klein-reduction-ansatz-and-frames: formulation-prerequisite
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Riccardo Penco, An Introduction to Effective Field Theories, arXiv:2006.16285v1"
      url: "https://arxiv.org/pdf/2006.16285v1"
      locator: "§1.1 and §§2.1–2.2, especially equations (8)–(12); tree saddle, matching, and expansion parameter"
    - title: "Alex S. Arvanitakis, Olaf Hohm, Chris Hull, and Victor Lekeu, Homotopy Transfer and Effective Field Theory I: Tree-level, arXiv:2007.07942v2"
      url: "https://arxiv.org/pdf/2007.07942v2"
      locator: "§5.4, PDF pp. 48–50; classical high-mode propagator and tree-level elimination"
    - title: "Alex S. Arvanitakis, Olaf Hohm, Chris Hull, and Victor Lekeu, Homotopy Transfer and Effective Field Theory II: Strings and Double Field Theory, arXiv:2106.08343v2"
      url: "https://arxiv.org/pdf/2106.08343v2"
      locator: "§§2.1 and 3.1, PDF pp. 4–5 and 14–17; nonlocal tree elimination, zero modes, and consistency"
---

## Definition

Let $(M_d,g)$ be a smooth time-oriented Lorentzian $d$-manifold with signature $(-,+,\ldots,+)$ and a declared metric convention (for example, Einstein or string metric). On each region used for a momentum comparison, choose a smooth orthonormal frame $(e_0,\ldots,e_{d-1})$ with $e_0$ future-directed, $g(e_0,e_0)=-1$, and $g(e_i,e_j)=\delta_{ij}$ and $g(e_0,e_i)=0$ for spatial indices. Thus the observer field is $e_0$; existence of a global frame is not assumed. For a real momentum covector $p\in T_x^*M_d$, put $p_a:=p(e_a)$ and define its observer energy by $E_{e_0}(p):=-p(e_0)$ for $p=0$ or for a nonzero covector satisfying $g^{-1}(p,p)\leq0$ and $p(e_0)<0$ (the future causal covectors in this signature). Declare a momentum domain $\mathcal P\subseteq T^*M_d$ over the stated region, containing all momentum arguments of the propagators being expanded, including channel sums when relevant. Choose a finite bound $E\geq0$ such that $|p_a|\leq E$ for every $p\in\mathcal P$ and every $a$. This bounds energy and spatial momentum, including off-shell momenta; energy alone is not a bound on arbitrary spacelike covectors. Use $\hbar=c=1$, so $E$ and mass thresholds have units of inverse length. Field configurations and tree elimination below do not themselves require a momentum domain. Let $C_<,C_>$ be specified $C^1$ Banach manifolds of retained fields $\phi$ and omitted fields $\chi$ (sections of declared bundles with fixed regularity, boundary conditions, and gauge treatment), and let $S:C_<\times C_>\to\mathbb R$ be a specified $C^1$ action. Define the omitted variational equation by
$$\mathcal E_>(\phi,\chi):=D_\chi S|_{(\phi,\chi)}\in T_\chi^*C_>.$$
A **tree-elimination branch** is an open set $U\subseteq C_<$ and a $C^1$ map $\chi_*:U\to C_>$ such that $\mathcal E_>(\phi,\chi_*(\phi))=0$ for every $\phi\in U$, against every admissible omitted variation. It defines
$$S_{\rm tree}[\phi]:=S[\phi,\chi_*(\phi)].$$
The branch, its domain, and its boundary and gauge prescriptions are part of the definition. If a quadratic operator $K$ is inverted, its domain, codomain, gauge fixing, boundary prescription, and inverse on the specified source space must be declared. Any zero or gauge modes on which $K$ is not invertible must first be retained, constrained by an explicitly stated condition, or gauge-fixed.

For a stable omitted quadratic sector in a common external frame, let $\Sigma_{\rm omit}\subseteq[0,\infty)$ be the declared spectrum of physical mass-squared values, including the support of any continuous spectrum. Define its mass threshold by
$$M_{\rm gap}:=\inf\{\sqrt{\lambda}:\lambda\in\Sigma_{\rm omit}\}.$$
This has units of inverse length. If there is no omitted sector, set $M_{\rm gap}=+\infty$; if the spectral threshold is zero, then $M_{\rm gap}=0$ and there is no positive-gap derivative expansion. An omitted instability with negative mass-squared lies outside the stable-sector definition and also supplies no positive gap.

A **regulated Wilsonian integration** is a different operation. In $\hbar=1$ units, continue to a declared Euclidean problem, choose a regulator and finite-volume or finite-dimensional regularization, fix the gauge and boundary conditions, choose a matching scale $\Lambda>0$ of inverse-length dimension, and declare a high-energy subspace $\mathcal H_>(\Lambda)$ of the regulated omitted-field space (for example, by a spectral projector of a specified gauge-fixed quadratic operator). Declare which modes remain in the retained theory and a regulated measure $\mathcal D_{\Lambda,\mathrm{reg}}\chi_>$ on the integrated subspace, including any gauge-fixing determinant, and define, when the integral exists and is nonzero,
$$e^{-S_{W,\Lambda}[\phi]}:=\int_{\mathcal H_>(\Lambda)}\mathcal D_{\Lambda,\mathrm{reg}}\chi_>\,e^{-S_{E,\mathrm{reg}}[\phi,\chi_>]}.$$
This operation includes fluctuation and loop contributions; it is not the tree saddle. No functional measure or integral is asserted to exist without the stated regulator and measure data.

The tree-eliminated action is generally nonlocal. A local derivative expansion is a separate low-momentum approximation. Specify the momentum representation of each omitted-sector propagator, its domain and expansion about zero momentum, and a finite Taylor truncation with a remainder estimate valid uniformly on $\mathcal P$. Require that the propagators are analytic on a neighborhood of that expansion domain, with $0<M_{\rm gap}<\infty$ and a declared bound $E/M_{\rm gap}\leq\delta<1$; the notation $E\ll M_{\rm gap}$ means a family for which this ratio tends to zero with the other declared bounds fixed. Replace the propagators by those Taylor polynomials, retaining the supplied remainder estimates. In a translation-invariant flat problem the representation is the ordinary Fourier multiplier. On a curved or nontranslation-invariant background an application must additionally specify its local coordinate or symbol representation, its rule converting polynomial momenta to differential operators, and the corresponding remainder controls; none is inferred from the gap or from pointwise analyticity alone. If $M_{\rm gap}=0$ there is no positive-gap expansion, and if $M_{\rm gap}=+\infty$ because the omitted sector is empty there is no omitted propagator to expand. All comparisons use the chosen orthonormal frame for the same declared metric convention. Neither this approximation nor setting $\chi=0$ is the tree-elimination operation. An exact tree-elimination branch gives a consistent truncation in the solution-uplift sense only when its reduced stationary solutions uplift to solutions of every full equation under the separately defined consistent-truncation criterion.

## Definition references

[[def-cmp-consistent-truncation]]

## Facts & Assumptions

**Given:** A retained/omitted field split in an action, boundary conditions, and a gauge-fixed or gauge-invariant formulation.

[F1] [[def-cmp-consistent-truncation]]: solving a reduced or restricted equation does not establish that all omitted full equations vanish.

[F2] [[def-cmp-kaluza-klein-reduction-ansatz-and-frames]]: the field split, frame, boundary conditions, and retained mode orders must be declared.

[A1] For the scalar calculation, use $\hbar=c=1$, flat Minkowski signature $(-,+,\ldots,+)$ on $\mathbb R^{1,d-1}$, a real omitted scalar $\chi$ of dimension $(\mathrm{length})^{-(d-2)/2}$, mass $M>0$ of dimension $(\mathrm{length})^{-1}$, and a source $J(\phi)$ for which $\widehat J$ is smooth and compactly supported in external momentum. The action is
$$S[\phi,\chi]=S_0[\phi]+\int d^dx\left[-\frac12\partial_\mu\chi\partial^\mu\chi-\frac12M^2\chi^2+g\chi J(\phi)\right].$$
Fix $Q=[-E,E]^d$ with $E$ as in [A2] and an integer $m>d$. Let $H_Q^m$ be the real Banach space of $C^m$ functions $f:\mathbb R^d\to\mathbb C$ supported in $Q$, satisfying $f(-p)=\overline{f(p)}$, with norm $\|f\|_{C^m}:=\max_{|\beta|\le m}\sup_p|\partial^\beta f(p)|$ in fixed units. This is a closed real subspace of the complete bounded-$C^m$ space. Use the inverse Fourier convention $\mathcal F^{-1}f(x)=(2\pi)^{-d}\int_Q e^{ip_\mu x^\mu}f(p)\,d^dp$, and set $C_>:=\mathcal F^{-1}H_Q^m$ with transported Banach norm. Let $U$ be an open subset of a specified real Banach space of retained configurations, $S_0:U\to\mathbb R$ be $C^1$, and $\widehat J:U\to H_Q^m$ be $C^1$, with each value smooth and compactly supported. Set $J(\phi)=\mathcal F^{-1}\widehat J(\phi)$ and take $g$ real and constant. Compact Fourier support makes every omitted field smooth in position space. Integrating the Fourier integral by parts $m$ times in a coordinate with maximal $|x^\mu|$ bounds each fixed position derivative by a constant times $\|\widehat\chi\|_{C^m}(1+|x|)^{-m}$. Hence these fields and their derivatives are in $L^2$, all displayed pairings and integrations by parts are well-defined, and the integral terms are continuous bilinear or quadratic forms in these Banach norms. Thus $S$ on $U\times C_>$ is $C^1$. The coefficient $gJ$ has dimension $(\mathrm{length})^{-(d+2)/2}$, making the action dimensionless. Use the Fourier-multiplier inverse of $K=M^2-\Box$ on this same space, with $p^2:=-(p_0)^2+\sum_{i=1}^{d-1}(p_i)^2$ and multiplier $(M^2+p^2)^{-1}$. The support condition in [A2] keeps it away from its pole. This is the declared boundary/inverse prescription, with no zero or gauge modes.

[A2] Every component of a source Fourier momentum obeys $|p_\mu|\le E$ and $dE^2/M^2\le\epsilon<1$. Here $E$ has units $(\mathrm{length})^{-1}$ and is measured in the chosen external inertial frame; the Fourier-multiplier prescription is translation invariant. Since $|p^2|\le dE^2$, the symbol of $\Box/M^2$ has magnitude at most $\epsilon$ on this support.

## Proof

1.1  Varying the action in [A1] and integrating the kinetic variation by parts gives $(\Box-M^2)\chi+gJ=0$, equivalently $K\chi=gJ$ for $K=M^2-\Box$. On $Q$, $M^2+p^2\geq M^2(1-\epsilon)>0$. Multiplication by $(M^2+p^2)^{-1}$ preserves support and the reality condition and is bounded on $H_Q^m$: the product rule bounds its $C^m$ norm by finitely many bounded derivatives of this smooth multiplier on $Q$. Hence $K^{-1}:C_>\to C_>$ is bounded and $\chi_*(\phi)=gK^{-1}J(\phi)$ is $C^1$, with derivative $D\chi_*|_\phi=gK^{-1}DJ|_\phi$. It solves the omitted equation against every admissible variation and is therefore a tree-elimination branch on $U$. [given, A1, A2, algebra]

2.1  After integration by parts, the $\chi$-dependent action is $-\tfrac12\langle\chi,K\chi\rangle+g\langle\chi,J\rangle$. Substitution of $K\chi_*=gJ$ yields
$$S_{\rm tree}[\phi]=S_0[\phi]+\frac{g^2}{2}\langle J,K^{-1}J\rangle =S_0[\phi]+\frac{g^2}{2}\int d^dx\,d^dx'\,J(x)K^{-1}(x,x')J(x'),$$
where $K^{-1}(x,x')=\mathcal F^{-1}[\rho(p)/(M^2+p^2)](x-x')$ on this source sector: choose a smooth real even compactly supported cutoff $\rho$ equal to one on $Q$, supported in the pole-free neighborhood $M^2+p^2>0$. Its smooth compactly supported multiplier gives a rapidly decreasing kernel, so the displayed double integral converges absolutely for the sources in [A1]. This kernel represents the inverse on the specified source space, not a Green function on arbitrary sources. It is generally nonlocal; setting $\chi=0$ would instead omit this term. [given, A1, step 1.1, algebra]

2.2  On the stated Fourier support, $K^{-1}=M^{-2}(1-\Box/M^2)^{-1}=M^{-2}\sum_{j=0}^{N}(\Box/M^2)^j+\mathcal R_{N+1}$. For the multiplier $q=\Box/M^2$, $|q|\le dE^2/M^2$ and $|q|\le\epsilon$, so the remainder after terms $j=0,\ldots,N$ satisfies $|\mathcal R_{N+1}|/M^{-2}=|q|^{N+1}/|1-q|\le\epsilon^{N+1}/(1-\epsilon)$. In particular, the error relative to the leading multiplier $M^{-2}$ is at most $d(E/M)^2/(1-\epsilon)$ when only that term is kept, and at most $d^2(E/M)^4/(1-\epsilon)$ when the next derivative term is also kept. Thus these errors are respectively $O(E^2/M^2)$ and $O(E^4/M^4)$ for fixed $d$ and fixed $\epsilon<1$, with constants depending on both. [given, A2, step 1.1, algebra]

3.1  In a gauge theory, an inverse of the quadratic operator is undefined until gauge directions and their zero modes are treated; any physical zero mode whose eigenvalue is zero must remain in the retained sector or receive a separately specified constraint, since $K^{-1}$ cannot act on it. The regulated Wilsonian functional integral additionally contains fluctuation determinants and loop corrections, unlike the saddle substitution in 2.1. By [F1], neither the saddle nor this functional integral proves the solution-uplift condition without a separate check of the omitted equations. [given, F1, F2, A1, step 2.1, algebra] ∎
