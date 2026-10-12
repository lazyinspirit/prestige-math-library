---
id: pthm-gr-linearized-field-equations
kind: physics-theorem
title: "Linearized field equations as the first-order consequence of the adopted field law, with the harmonic-gauge wave reduction and the quadratic residual control"
status: draft
origin: session
domain: physics
dependency_level: 14
physical_scope: "Conditional deduction inside the classical gravitational framework: a one-parameter family of models of the adopted field law on an open set of the flat model, with smooth metric and stress-energy families, expanded to first order about the flat metric. The conclusion is the linearized equation with the first-order stress coefficient as its source, its vacuum and harmonic-gauge reductions, and a compact-set bound on the exact vacuum residual of a small-amplitude metric. The all-space harmonic-gauge existence clause additionally assumes the Axiom of Countable Choice. Excludes nonlinear back-reaction, non-smooth or distributional sources, curved backgrounds, boundaries, quantum fields and any comparison with observation; the stress-energy family is model input, not derived from the metric perturbation."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [post-gr-einstein-field-law, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, post-gr-classical-gravitational-action, pthm-gr-adopted-action-and-einstein-equations, def-gr-si-unit-and-coordinate-conventions, def-gr-flat-linearized-perturbation, def-gr-plane-wave-perturbation, thm-gr-flat-linearized-curvature-and-gauge, thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge, def-countable-choice, def-polar-surface-measure-on-the-unit-sphere, thm-linear-change-of-variables-for-lebesgue-measure, lem-gr-lorentzian-perturbations-remain-lorentzian, cor-taylor-lagrange-and-cauchy-remainders, def-gr-minkowski-model-and-inertial-chart, def-gr-smooth-covariant-two-tensor-field, def-gr-curvature-tensor-and-derived-tensors, def-gr-metric-selected-connection, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  post-gr-einstein-field-law: physical-assumption
  post-gr-spacetime-and-classical-domain: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
  post-gr-classical-gravitational-action: physical-assumption
  pthm-gr-adopted-action-and-einstein-equations: physical-result
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-flat-linearized-perturbation: mathematical-premise
  def-gr-plane-wave-perturbation: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
  thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge: mathematical-premise
  def-countable-choice: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  lem-gr-lorentzian-perturbations-remain-lorentzian: mathematical-premise
  cor-taylor-lagrange-and-cauchy-remainders: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.1)-(6.29): the weak-field expansion, the linearized Einstein tensor and the linearized field equation in harmonic gauge, printed pp. 142-148 (PDF pp. 149-155)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.1: the linearized Einstein equation (7.11), the gauge symmetry (7.14), the harmonic gauge condition (7.16) and the reduction to the sourced wave equation (7.18), printed pp. 71-73 (PDF pp. 72-74)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.1.1-5.1.2 and 5.2.1: the linearised Einstein equations in de Donder gauge, their sourced form and the vacuum wave equation, printed pp. 205-212 (PDF pp. 212-219)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the field-law postulate [[post-gr-einstein-field-law]] with its
constants $\Lambda\in\mathbb R$, $G_N>0$, $c>0$, together with
[[post-gr-spacetime-and-classical-domain]] and
[[post-gr-field-and-matter-assumptions]]
([[def-gr-si-unit-and-coordinate-conventions]]). Let
$(M,g,N)=(\mathbb R^4,\eta,\partial_0)$ be the flat model with its inertial
chart, let $\Omega\subseteq\mathbb R^4$ be a nonempty open set, let
$(\varepsilon_1,h,q)$ be a flat linearized family over $\Omega$ with
$\varepsilon_1\le\varepsilon$, and let
$(T(\lambda))_{\lambda\in(-\varepsilon,\varepsilon)}$ be a family of smooth
symmetric covariant $2$-tensor fields on $\Omega$ whose component families
$T_{ab}(\lambda,p)$ are smooth in $(\lambda,p)$ and such that for every
$\lambda\in(-\varepsilon,\varepsilon)$ the pair $(g(\lambda),T(\lambda))$
satisfies the adopted field law

$$G_{ab}\bigl(g(\lambda)\bigr)+\Lambda\,g_{ab}(\lambda)=\kappa\,T_{ab}(\lambda)\qquad\text{on }\Omega,\qquad \kappa:=\frac{8\pi G_N}{c^4},$$

$G$ being the Einstein tensor of the metric-selected connection
([[def-gr-curvature-tensor-and-derived-tensors]],
[[def-gr-metric-selected-connection]]). Define
$T^{(1)}_{ab}:=\partial_\lambda T_{ab}(\lambda)\big|_{\lambda=0}$. Then:

**(a) Linearized field equation with source.** On $\Omega$,

$$G^{(1)}_{ab}(h)+\Lambda\,h_{ab}=\kappa\,T^{(1)}_{ab},$$

where $G^{(1)}$ is the first-order Einstein coefficient of
[[def-gr-flat-linearized-perturbation]]. In particular the linearized
equation of the model is not an independent postulate: it is the first-order
consequence of the adopted field law along the family.

**(b) Vacuum and harmonic-gauge reduction.** If $T(\lambda)=0$ for every
$\lambda$ and $\Lambda=0$, then $G^{(1)}_{ab}(h)=0$; if in addition $h$
satisfies the harmonic-gauge condition $\partial^a\bar h_{ab}=0$
([[def-gr-flat-linearized-perturbation]] clause (d)), then
$\Box\bar h_{ab}=0$ componentwise on $\Omega$.

**(c) Sourced wave equation in harmonic gauge.** If $h$ is in harmonic gauge
and solves the linearized equation with source $S$ and parameter $\Lambda$ in
the sense of [[def-gr-plane-wave-perturbation]] clause (e), then
$\Box\bar h_{ab}=2\Lambda h_{ab}-2S_{ab}$ on $\Omega$.

**(d) Quadratic residual of a linearized vacuum wave.** Let
$K\subseteq\Omega$ be compact and let $L>0$ be a length scale. In the fixed
SI numerical chart define the real control functional

$$B_K(A):=\sup_K\max_{a,b}|A_{ab}|+L^{-1}\sup_K\max_{a,b,c}|\partial_cA_{ab}|+L^{-2}\sup_K\max_{a,b,c,d}|\partial_c\partial_dA_{ab}|.$$

Take the fixed dimensionless numerical threshold $\delta_0:=1/16$. If $h$ is
a smooth symmetric perturbation on a neighborhood of $K$ with
$G^{(1)}_{ab}(h)=0$ on $K$, then there is a finite dimensionless numerical
constant $C_{K,L}$ such that, for every $|\lambda|\le1$ with
$|\lambda|B_K(h)\le\delta_0$,

$$\bigl|G_{ab}(\eta+\lambda h)(p)\bigr|\le C_{K,L}\,\lambda^2B_K(h)^2/L^2\qquad(p\in K,\ |\lambda|\le1).$$

The functional $B_K$ and threshold are numerical chart controls, not physical
observables; each component and derivative is first evaluated in the fixed
SI length-coordinate convention. With $L$ in metres, the displayed residual
has units $\mathrm m^{-2}$. Thus the exact vacuum field law holds on $K$ up
to a residual quadratic in the amplitude.

**(e) All-space harmonic gauge (assuming $\mathrm{AC}_\omega$).** If
$\Omega=\mathbb R^4$, $h$ solves the linearized vacuum equations with
$\Lambda=0$, and the Axiom of Countable Choice is assumed
([[def-countable-choice]]), then there is a smooth covector
field $\xi$ on $\mathbb R^4$ such that
$h'_{ab}:=h_{ab}-\partial_a\xi_b-\partial_b\xi_a$ is in harmonic gauge,
$G^{(1)}_{ab}(h')=0$ and $\Box\bar h'_{ab}=0$ componentwise.

**Status.** Clauses (a)-(e) are conditional deductions from the adopted field
law and the cited mathematics for the stated families; they assert no
observation, no measured constant and no fact about nature. The item contains
no empirical premise.

## Facts & Assumptions

**Given:** The adopted postulates, a flat linearized family $(\varepsilon_1,h,q)$ over $\Omega$, a smooth family $T(\lambda)$ of symmetric fields satisfying the field law for every $\lambda$, and a compact set $K\subseteq\Omega$ with $L>0$; for clause (e), also assume $\mathrm{AC}_\omega$.

[A1] The model satisfies the adopted field law $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ on its matter domain, with $\kappa=8\pi G_N/c^4$; the equation is model input, and the constants, the matter content and the domain are those of the cited postulates ([[post-gr-einstein-field-law]] clauses (i)-(ii), [[post-gr-spacetime-and-classical-domain]], [[post-gr-field-and-matter-assumptions]], [[def-gr-si-unit-and-coordinate-conventions]]).

[L1] The family $g(\lambda)$ has the expansion $g_{ab}(\lambda,p)=\eta_{ab}+\lambda h_{ab}(p)+\lambda^2q_{ab}(\lambda,p)$ with smooth $h,q$; the component families of the metric-selected connection, curvature and Einstein tensor are smooth functions of $(\lambda,p)$; and the first-order coefficients of [[def-gr-flat-linearized-perturbation]] are the $\lambda$-derivatives at $0$ of these component families ([[def-gr-flat-linearized-perturbation]] clauses (a)-(c), [[def-gr-metric-selected-connection]], [[def-gr-curvature-tensor-and-derived-tensors]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L2] In harmonic gauge $\partial^a\bar h_{ab}=0$ one has $G^{(1)}_{ab}(h)=-\tfrac12\Box\bar h_{ab}$, and $G^{(1)}$ is unchanged under $h\mapsto h-\partial\xi-\partial\xi$ ([[thm-gr-flat-linearized-curvature-and-gauge]] clauses (c)-(e), [[def-gr-flat-linearized-perturbation]] clauses (c)-(d)). For the all-space existence assertion, the nonnegative-radius spherical-mean kernel and zero-data Duhamel construction are those of [[thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge]] clauses (a)-(b); $H_f(x,0)=0$ and its right derivative at $s=0$ is $f(x)$. The signed extension used for negative time differences is smooth as shown in proof step 4.1 below, where [[def-polar-surface-measure-on-the-unit-sphere]] and [[thm-linear-change-of-variables-for-lebesgue-measure]] justify antipodal symmetry and hence preserves these initial data.

[L3] In the inertial chart the Einstein tensor of $\eta+A$ is a smooth function of the finite component list $(A_{ab},\partial_cA_{ab},\partial_c\partial_dA_{ab})$ whenever $\eta+A$ is nondegenerate; at the zero list it vanishes, and its derivative there is $G^{(1)}(A)$, which is linear in $A$ ([[def-gr-metric-selected-connection]], [[def-gr-curvature-tensor-and-derived-tensors]], [[thm-gr-flat-linearized-curvature-and-gauge]] clauses (a), (e), [[def-gr-flat-linearized-perturbation]] clause (b)). The Taylor estimate of [[cor-taylor-lagrange-and-cauchy-remainders]] applies on compact subsets of this finite-dimensional jet domain, and matrices within maximum-entry distance $1/8$ of $\eta$ are Lorentzian ([[lem-gr-lorentzian-perturbations-remain-lorentzian]] clause (a)).

## Proof

**Proof technique:** direct; differentiate the field-law identity along the family at $\lambda=0$, then apply the harmonic-gauge reduction and the quadratic-remainder estimate.

1.1 (The residual family.) Define $\Phi_{ab}(\lambda,p):=G_{ab}(g(\lambda))(p)+\Lambda g_{ab}(\lambda)(p)-\kappa T_{ab}(\lambda,p)$ for $(\lambda,p)\in(-\varepsilon,\varepsilon)\times\Omega$. By [L1] and the smoothness of $T$, each component $\Phi_{ab}$ is differentiable in $\lambda$ at every $\lambda$. By hypothesis $\Phi_{ab}(\lambda,p)=0$ for all $(\lambda,p)$, so $\partial_\lambda\Phi_{ab}(0,p)=0$ for every $p$ (the difference quotients of the identically zero function vanish). [A1, L1, given]

1.2 (Sourced wave equation.) If $h$ is in harmonic gauge and $G^{(1)}_{ab}(h)+\Lambda h_{ab}=S_{ab}$, then substituting [L2] gives $-\tfrac12\Box\bar h_{ab}=S_{ab}-\Lambda h_{ab}$, that is $\Box\bar h_{ab}=2\Lambda h_{ab}-2S_{ab}$. This proves (c). [L2, algebra]

1.3 (Quadratic residual.) Let $h$ satisfy $G^{(1)}_{ab}(h)=0$ on $K$ and choose $|\lambda|\le1$ with $|\lambda|B_K(h)\le\delta_0=1/16$. Put $A:=\lambda h$ and at each $p\in K$ let $V_A(p)$ be the finite list $(A_{ab},\partial_cA_{ab},\partial_c\partial_dA_{ab})$. By the displayed definition of $B_K$, $\|V_A(p)\|_{\max}\le m_LB_K(A)$, where $m_L:=\max\{1,L,L^2\}$; in particular $|A_{ab}(p)|\le1/16<1/8$, so [L3] makes $\eta+A$ Lorentzian. The jet lists along all segments $tV_A(p)$, $p\in K$, $0\le t\le1$, lie in the compact set given by $\max|A_{ab}|\le1/16$, $\max|\partial_cA_{ab}|\le L\delta_0$ and $\max|\partial_c\partial_dA_{ab}|\le L^2\delta_0$. On this set the smooth Einstein-tensor map of [L3] has Hessian bounded by a finite $H_{K,L}$. Taylor's estimate along $tV_A(p)$ gives $|G_{ab}(\eta+A)(p)-G^{(1)}_{ab}(A)(p)|\le\tfrac12H_{K,L}m_L^2B_K(A)^2=C_{K,L}B_K(A)^2/L^2$, with $C_{K,L}:=\tfrac12H_{K,L}m_L^2L^2$. Since $B_K(A)=|\lambda|B_K(h)$ and $G^{(1)}_{ab}(A)=\lambda G^{(1)}_{ab}(h)=0$, this is (d). [L3, algebra]

2.1 (First-order equation.) Differentiating the definition of $\Phi$ at $\lambda=0$ and evaluating at $p$, $$0=\partial_\lambda G_{ab}(g(\lambda))\big|_0+\Lambda\,\partial_\lambda g_{ab}(\lambda)\big|_0-\kappa\,\partial_\lambda T_{ab}(\lambda,0).$$ By [L1] the first term is the first-order Einstein coefficient $G^{(1)}_{ab}(h)(p)$, the second is $\Lambda h_{ab}(p)$, and the third is $\kappa T^{(1)}_{ab}(p)$. Hence $G^{(1)}_{ab}(h)+\Lambda h_{ab}=\kappa T^{(1)}_{ab}$ on $\Omega$, which is (a). [L1, step 1.1, algebra]

3.1 (Vacuum branch and wave form.) If $T(\lambda)=0$ for every $\lambda$, then $T^{(1)}=0$, and with $\Lambda=0$ step 2.1 gives $G^{(1)}_{ab}(h)=0$. If in addition $\partial^a\bar h_{ab}=0$, then [L2] gives $-\tfrac12\Box\bar h_{ab}=G^{(1)}_{ab}(h)=0$ for every $a,b$, so $\Box\bar h_{ab}=0$. This proves (b). [L2, step 2.1, algebra]

4.1 (All-space harmonic gauge.) Let $\Omega=\mathbb R^4$, let $h$ solve the linearized vacuum equations with $\Lambda=0$, and set $F_b(x,t):=-\partial^a\bar h_{ab}(x,t)$ in the coordinates $x^0=ct$. For $f\in C^\infty(\mathbb R^3)$ define the signed-radius mean $\widetilde M_rf(x):=(4\pi)^{-1}\int_{S^2}f(x+r\omega)\,d\sigma(\omega)$ for $r\in\mathbb R$. The integral is smooth in $(x,r)$ by differentiation under the integral on compact parameter sets, as in the proof of [[thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge]] clause (a). The antipodal substitution $\omega\mapsto-\omega$ preserves $\sigma$: by the cone-volume definition in [[def-polar-surface-measure-on-the-unit-sphere]], the cone of $-E$ is the image of the cone of $E$ under $y\mapsto-y$, a linear map with determinant $-1$ in $\mathbb R^3$ and hence preserves Lebesgue measure by [[thm-linear-change-of-variables-for-lebesgue-measure]]. Thus $\widetilde M_{-r}f=\widetilde M_rf$, and for $r\ge0$ it agrees with $M_rf$. The kernel $\widetilde H_f(x,s):=s\widetilde M_{cs}f(x)$ is therefore smooth for signed $s$, odd in $s$, agrees with the kernel of [L2] for $s\ge0$, and satisfies $(c^{-2}\partial_s^2-\Delta_x)\widetilde H_f=0$: for $s>0$ this follows from [[thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge]] clause (a), for $s<0$ by oddness, and at $s=0$ by smoothness and continuity. The same moving-endpoint differentiation as in that theorem's proof (b), now with this smooth two-sided kernel, shows that $\xi_b(x,t):=c^2\int_0^t\widetilde H_{F_b(\cdot,v)}(x,t-v)\,dv$ is smooth on $\mathbb R^3\times\mathbb R$ and satisfies $(c^{-2}\partial_t^2-\Delta_x)\xi_b=F_b$ for every signed $t$; hence $-\Box\xi_b=F_b=-\partial^a\bar h_{ab}$ and $\Box\xi_b=\partial^a\bar h_{ab}$. The gauge identity of [L2] then gives $\partial^a\bar h'_{ab}=0$ for $h'_{ab}=h_{ab}-\partial_a\xi_b-\partial_b\xi_a$. By gauge invariance in [L2] and the vacuum conclusion of step 3.1 applied only to $h$, $G^{(1)}_{ab}(h')=G^{(1)}_{ab}(h)=0$; applying the harmonic-gauge identity of [L2] to $h'$ yields $\Box\bar h'_{ab}=0$. This proves (e). [given, L2, step 3.1, algebra]

5.1 (Status and conclusion.) Steps 1.1-4.1 use only the field-law hypothesis for the family, the differentiability of the component families and the cited mathematical reductions. No observation, apparatus, measured constant or statistical model is used, and the family hypothesis is precisely the adopted field law evaluated on the given families; therefore the conclusions are conditional model deductions. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, step 4.1, A1] ∎


## Remarks

- **The source is model input.** Clause (a) produces the source $\kappa T^{(1)}$ from the matter sector of the model; the theorem does not construct a metric family solving the exact field law for a prescribed matter content, and (d) shows only that a solution of the linearized vacuum equation has an exact vacuum residual of order $\lambda^2$. The existence theory for the exact equations is a different module.

- **Presentations and the action formulation.** A model may instead adopt the action formulation [[post-gr-classical-gravitational-action]]; by [[pthm-gr-adopted-action-and-einstein-equations]] its solutions satisfy the same field law, so the linearization above applies without change. The two presentations are not combined as independent premises.

- **What is not covered.** The linearization about a non-flat background, sources that are not smooth on $\Omega$, boundary and initial-value problems for the linearized equation on bounded domains, and the back-reaction of the perturbation on the matter are outside the stated scope.
