---
id: thm-gr-flat-linearized-curvature-and-gauge
kind: theorem
title: "First-order curvature of a flat linearized family, gauge transformations and the quadratic remainder"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flat-linearized-perturbation, def-gr-minkowski-model-and-inertial-chart, def-christoffel-symbols-of-an-affine-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, thm-gr-curvature-tensoriality-and-coordinate-formula, def-gr-curvature-tensor-and-derived-tensors, def-gr-inverse-metric-and-musical-isomorphisms, cor-taylor-lagrange-and-cauchy-remainders, thm-clairaut-schwarz-mixed-partials, thm-algebra-of-derivatives, def-c-r-and-smooth-maps-between-smooth-manifolds, def-compact-space, thm-heine-cantor-metric, thm-compactness-under-continuous-maps, def-total-derivative-in-euclidean-space, lem-gr-lorentzian-perturbations-remain-lorentzian]
dependency_roles:
  def-gr-flat-linearized-perturbation: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  cor-taylor-lagrange-and-cauchy-remainders: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-compact-space: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-compactness-under-continuous-maps: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  lem-gr-lorentzian-perturbations-remain-lorentzian: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: R^{(1)}_{mu nu} and the linearized Einstein tensor, printed pp. 106-110 (PDF pp. 113-117); Ch. 6: the linearized field equations in harmonic gauge, printed pp. 142-145 (PDF pp. 149-152)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 7.1-7.2: first-order curvature, the trace-reversed linearized Einstein tensor and the de Donder gauge condition, printed pp. 86-92 (PDF pp. 87-93)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.1-5.1.2: linearized curvature, gauge transformations and harmonic gauge, printed pp. 205-210 (PDF pp. 212-217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $\Omega\subseteq M$ be an open set of the flat model
[[def-gr-minkowski-model-and-inertial-chart]], let
$(\varepsilon_1,h,q)$ be a flat linearized family over $\Omega$ with
first-order coefficients $\Gamma^{(1)a}{}_{bc}$,
$\operatorname{Ric}^{(1)}_{ab}$, $S^{(1)}$, $G^{(1)}_{ab}$ and with trace
reversal $\bar h$, d'Alembertian $\Box$ and gauge transformation
$h'_{ab}=h_{ab}-\partial_a\xi_b-\partial_b\xi_a$ as in
[[def-gr-flat-linearized-perturbation]], and let $L>0$ be a length scale.
All components are taken in the inertial chart and all contractions are
with $\eta$ and $\eta^{-1}$.

**(a) Christoffel symbols.** For every compact $K\subseteq\Omega$ there is a
constant $C_K<\infty$ such that for all $p\in K$ and
$0<|\lambda|\le\varepsilon_1/2$,

$$\Bigl|\Gamma^a{}_{bc}(\lambda,p)-\lambda\,\Gamma^{(1)a}{}_{bc}(p)\Bigr|\le C_K\,\lambda^2,\qquad \Gamma^{(1)a}{}_{bc}=\tfrac12\,\eta^{ad}\bigl(\partial_bh_{cd}+\partial_ch_{bd}-\partial_dh_{bc}\bigr).$$

**(b) Ricci tensor.** With the same constants (enlarged if necessary),

$$\Bigl|\operatorname{Ric}_{ab}(\lambda,p)-\lambda\,\operatorname{Ric}^{(1)}_{ab}(p)\Bigr|\le C_K\,\lambda^2,\qquad \operatorname{Ric}^{(1)}_{ab}=\tfrac12\bigl(\partial_c\partial_a h^{c}{}_{b}+\partial_c\partial_b h^{c}{}_{a}-\Box h_{ab}-\partial_a\partial_b h\bigr).$$

**(c) Scalar curvature and Einstein tensor.** With the same constants,

$$\Bigl|S(\lambda,p)-\lambda\,S^{(1)}(p)\Bigr|\le C_K\,\lambda^2,\qquad S^{(1)}=\partial_a\partial_bh^{ab}-\Box h,$$

and

$$\Bigl|G_{ab}(\lambda,p)-\lambda\,G^{(1)}_{ab}(p)\Bigr|\le C_K\,\lambda^2,\qquad G^{(1)}_{ab}=-\tfrac12\,\Box\bar h_{ab}+\partial^c\partial_{(a}\bar h_{b)c}-\tfrac12\,\eta_{ab}\,\partial^c\partial^d\bar h_{cd}.$$

**(d) Gauge transformation.** For every smooth covector field $\xi$ on
$\Omega$,

$$\bar h'{}_{ab}=\bar h_{ab}-\partial_a\xi_b-\partial_b\xi_a+\eta_{ab}\,\partial^c\xi_c,\qquad \partial^a\bar h'{}_{ab}=\partial^a\bar h_{ab}-\Box\xi_b .$$

Consequently $h'$ is in harmonic gauge exactly when
$\Box\xi_b=\partial^a\bar h_{ab}$, and in that case

$$G^{(1)}_{ab}(h')=-\tfrac12\,\Box\bar h'{}_{ab}.$$

**(e) Gauge invariance of the first-order curvature.** For every smooth
covector field $\xi$ on $\Omega$,

$$\operatorname{Ric}^{(1)}_{ab}(h')=\operatorname{Ric}^{(1)}_{ab}(h),\qquad S^{(1)}(h')=S^{(1)}(h),\qquad G^{(1)}_{ab}(h')=G^{(1)}_{ab}(h).$$

That is, subtracting the pure-gauge perturbation
$\partial_a\xi_b+\partial_b\xi_a$ from the first-order perturbation leaves
the first-order Ricci, scalar and Einstein tensors unchanged; their
first-order coefficients depend on $h$ only through its gauge-equivalence
class.

**(f) Quadratic remainder.** For every compact $K\subseteq\Omega$ there are
$\delta_0>0$ and $C_K<\infty$ such that for every smooth symmetric component
field $A=(A_{ab})$ on a neighborhood of $K$ with

$$B_K(A):=\sup_K\max_{a,b}|A_{ab}|+L^{-1}\sup_K\max_{a,b,c}|\partial_cA_{ab}|+L^{-2}\sup_K\max_{a,b,c,d}|\partial_c\partial_dA_{ab}|\le\delta_0,$$

the metric $\eta+A$ is Lorentzian of signature $(-,+,+,+)$ on $K$ and

$$\Bigl|G_{ab}(\eta+A)(p)-G^{(1)}_{ab}(A)(p)\Bigr|\le \frac{C_K\,B_K(A)^2}{L^2}\qquad(p\in K),$$

where $G^{(1)}_{ab}(A)$ is the right-hand side of the displayed formula of
(c) with $h$ replaced by $A$, and $G_{ab}(\eta+A)$ is the Einstein tensor of
the metric with components $\eta_{ab}+A_{ab}$.

## Facts & Assumptions

**Given:** A flat linearized family $(\varepsilon_1,h,q)$ over an open set $\Omega$ of the flat model, a compact $K\subseteq\Omega$, a length scale $L>0$, and a smooth covector field $\xi$ on $\Omega$.

[L1] The Christoffel symbols of the metric-selected connection are $\Gamma^a{}_{bc}=\tfrac12\sum_dg^{ad}(\partial_bg_{cd}+\partial_cg_{bd}-\partial_dg_{bc})$; the curvature components are $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\sum_e(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb})$, and $\operatorname{Ric}_{bd}=\sum_{a,c}g^{ac}R_{abcd}$, $S=\sum_{b,d}g^{bd}\operatorname{Ric}_{bd}$, $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12Sg_{ab}$ ([[def-christoffel-symbols-of-an-affine-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (b), [[def-gr-curvature-tensor-and-derived-tensors]] clause (c)).

[L2] The family has the form $g_{ab}(\lambda,p)=\eta_{ab}+\lambda h_{ab}(p)+\lambda^2q_{ab}(\lambda,p)$ with $h$ and $q$ smooth, and $g^{ab}(\lambda,p)$ are the entries of the inverse matrix of $(g_{ab}(\lambda,p))$ ([[def-gr-flat-linearized-perturbation]] clause (a), [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L3] If $f$ is $C^2$ on an interval containing $0$ and $\lambda$ with $|\lambda|\le\lambda_0$, then $|f(\lambda)-f(0)-f'(0)\lambda|\le\tfrac12\sup_{|t|\le\lambda_0}|f''(t)|\,\lambda^2$ ([[cor-taylor-lagrange-and-cauchy-remainders]]). Mixed partial derivatives of a $C^2$ function commute ([[thm-clairaut-schwarz-mixed-partials]]); derivatives of sums and products obey the usual rules ([[thm-algebra-of-derivatives]], [[def-total-derivative-in-euclidean-space]]).

[L4] A continuous function on a compact subset of $\mathbb R^n$ is bounded and attains its bounds ([[thm-heine-cantor-metric]], [[thm-compactness-under-continuous-maps]], [[def-compact-space]]); component functions of smooth tensor fields on $\Omega$ are $C^\infty$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-gr-flat-linearized-perturbation]] clause (b)). The first-order coefficients of [[def-gr-flat-linearized-perturbation]] clause (b) are the $\lambda$-derivatives at $0$ of the corresponding component families of $g(\lambda)$.

[L5] If in some basis the matrix of a symmetric form is $\operatorname{diag}(-1,1,1,1)+E$ with $|E_{ij}|<1/8$ for all $i,j$, then the form has inertia $(3,1,0)$; equivalently a symmetric form sufficiently close to $\eta$ in the maximum-entry norm is Lorentzian ([[lem-gr-lorentzian-perturbations-remain-lorentzian]] clause (a)).

## Proof

**Proof technique:** direct; differentiate the chart formulas at $\lambda=0$ and bound the Lagrange remainders on compact parameter sets.

1.1 (Christoffel expansion and remainder bound.) By [L2], $\partial_\lambda g_{ab}(\lambda,p)|_{\lambda=0}=h_{ab}(p)$, and the metric components are smooth in $(\lambda,p)$; by [L1] the Christoffel symbols are smooth functions of the components and their first derivatives, hence $(\lambda,p)\mapsto\Gamma^a{}_{bc}(\lambda,p)$ is smooth. The chain rule gives $\Gamma^{(1)a}{}_{bc}=\partial_\lambda\Gamma^a{}_{bc}|_0=\tfrac12\eta^{ad}(\partial_bh_{cd}+\partial_ch_{bd}-\partial_dh_{bc})$: the derivative of the factor $g^{ad}(\lambda)$ is $O(\lambda)$ at $\lambda=0$ while $\partial_eg_{cd}(0)=0$. For the bound, fix the compact $K$ and note that $\partial_\lambda^2\Gamma^a{}_{bc}(\lambda,p)$ is continuous on the compact set $\overline K\times[-\varepsilon_1/2,\varepsilon_1/2]$, hence bounded there by a constant $C_K$ by [L4]; applying [L3] to $\lambda\mapsto\Gamma^a{}_{bc}(\lambda,p)$ for each fixed $p\in K$ gives the estimate of (a). [L1, L2, L3, L4, algebra]

1.2 (First-order coefficient of the inverse.) Differentiating the identity $\sum_cg^{ac}(\lambda,p)g_{cb}(\lambda,p)=\delta^a{}_b$ at $\lambda=0$ and using $g_{cb}(0)=\eta_{cb}$, $\partial_\lambda g_{cb}(0)=h_{cb}$ gives $\sum_c\bigl(\partial_\lambda g^{ac}(0)\bigr)\eta_{cb}+h^{a}{}_{b}=0$, hence $\partial_\lambda g^{ab}(0)=-\eta^{ac}h_{cd}\eta^{db}$. [L2, algebra]

1.3 (Gauge transformation algebra.) Compute with the definitions of [[def-gr-flat-linearized-perturbation]] clause (c)-(d): the trace of $h'$ is $h'=\eta^{ab}(h_{ab}-\partial_a\xi_b-\partial_b\xi_a)=h-2\partial^c\xi_c$, so $$\bar h'{}_{ab}=h'_{ab}-\tfrac12\eta_{ab}h'=h_{ab}-\partial_a\xi_b-\partial_b\xi_a-\tfrac12\eta_{ab}h+\eta_{ab}\partial^c\xi_c=\bar h_{ab}-\partial_a\xi_b-\partial_b\xi_a+\eta_{ab}\partial^c\xi_c .$$ Contracting with $\partial^a$ gives $$\partial^a\bar h'{}_{ab}=\partial^a\bar h_{ab}-\partial^a\partial_a\xi_b-\partial^a\partial_b\xi_a+\partial_b\partial^c\xi_c=\partial^a\bar h_{ab}-\Box\xi_b,$$ because the last two terms cancel by [L3]: $\partial^a\partial_b\xi_a=\partial_b\partial^a\xi_a=\partial_b\partial^c\xi_c$. Hence $\partial^a\bar h'{}_{ab}=0$ holds exactly when $\Box\xi_b=\partial^a\bar h_{ab}$. [given, L3, algebra]

1.4 (Quadratic remainder.) Write $\Phi_{ab}(U)$ for the Einstein tensor of the metric whose components and derivatives are encoded by the finite list $U$ of the variables $A_{cd}$, $L\partial_eA_{cd}$ and $L^2\partial_e\partial_fA_{cd}$; by [L1] and the inverse identity of [L2], $\Phi$ is a smooth function on the open set where $\eta+A$ is invertible, with $\Phi(0)=0$ and $D\Phi(0)[U]=G^{(1)}_{ab}(A)$ by [L4]. Fix a compact $K$; choose $\delta_0>0$ small enough that $|A_{ab}(p)|<1/8$ on $K$ whenever $B_K(A)\le\delta_0$, so that $\eta+A$ is Lorentzian there by [L5]. On the compact set where $B_K(A)\le\delta_0$ the second derivative $D^2\Phi$ is bounded by a constant $C_K'$ by [L4]; since the entries of the data list carrying a second derivative enter $\Phi$ with the weight $L^{-2}$, and all remaining factors are bounded on that set, this constant may be taken of the form $C_K/L^2$. For fixed $p\in K$ and a fixed data field $A$, apply the one-variable Taylor estimate [L3] to $t\mapsto\Phi_{ab}(tU)$ on $[0,1]$, where $U$ is the data of $A$: the remainder is at most $\tfrac12\sup_{0\le t\le1}|D^2\Phi(tU)[U,U]|\le C_KB_K(A)^2/L^2$, since by construction the maximum-entry norm of $U$ is $B_K(A)$; this is the displayed bound of (f). [L1, L2, L3, L4, L5, algebra]

2.1 (Ricci expansion.) By [L1], $\operatorname{Ric}_{bd}(\lambda)=\partial_a\Gamma^a{}_{db}(\lambda)-\partial_d\Gamma^a{}_{ab}(\lambda)+\sum_e(\Gamma^a{}_{ae}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{ab})(\lambda)$ in the chart, so differentiating at $\lambda=0$ and using $\Gamma(0)=0$ gives $\operatorname{Ric}^{(1)}_{bd}=\partial_a\Gamma^{(1)a}{}_{db}-\partial_d\Gamma^{(1)a}{}_{ab}$. By step 1.1, $\Gamma^{(1)a}{}_{ab}=\tfrac12\eta^{ae}(\partial_ah_{eb}+\partial_bh_{ea}-\partial_eh_{ab})=\tfrac12(\partial^eh_{eb}+\partial_bh-\partial^eh_{eb})=\tfrac12\partial_bh$, so $\partial_d\Gamma^{(1)a}{}_{ab}=\tfrac12\partial_d\partial_bh$. Substituting the formula of step 1.1 into the first term gives $$\operatorname{Ric}^{(1)}_{bd}=\tfrac12\bigl(\partial_c\partial_dh^{c}{}_{b}+\partial_c\partial_bh^{c}{}_{d}-\Box h_{bd}-\partial_b\partial_dh\bigr),$$ which is the formula of (b) after renaming $b,d$ as $a,b$. The remainder bound of (b) follows from [L3] as in step 1.1, since $\lambda\mapsto\operatorname{Ric}_{bd}(\lambda,p)$ is $C^2$ and its second derivative is bounded on $\overline K\times[-\varepsilon_1/2,\varepsilon_1/2]$ by [L4]. [step 1.1, L1, L3, L4, algebra]

3.1 (Scalar and Einstein expansion.) Since $S(\lambda)=\sum_{a,b}g^{ab}(\lambda)\operatorname{Ric}_{ab}(\lambda)$ and $\operatorname{Ric}_{ab}(0)=0$, differentiation at $0$ with steps 1.2 and 2.1 gives $S^{(1)}=\eta^{ab}\operatorname{Ric}^{(1)}_{ab}=\tfrac12(\partial_c\partial^bh^{c}{}_{b}+\partial_c\partial^ah^{c}{}_{a}-\Box h-\Box h)=\partial_a\partial_bh^{ab}-\Box h$. Since $G_{ab}(\lambda)=\operatorname{Ric}_{ab}(\lambda)-\tfrac12S(\lambda)g_{ab}(\lambda)$ and $S(0)=0$, $G^{(1)}_{ab}=\operatorname{Ric}^{(1)}_{ab}-\tfrac12\eta_{ab}S^{(1)}$. Substituting the formulas of step 2.1 and of $S^{(1)}$ and expanding with $\bar h_{ab}=h_{ab}-\tfrac12\eta_{ab}h$: $\Box\bar h_{ab}=\Box h_{ab}-\tfrac12\eta_{ab}\Box h$; $\partial^c\partial_{(a}\bar h_{b)c}=\tfrac12(\partial_a\partial_ch^{c}{}_{b}+\partial_b\partial_ch^{c}{}_{a})-\tfrac12\partial_a\partial_bh$; and $\partial^c\partial^d\bar h_{cd}=\partial^c\partial^dh_{cd}-\tfrac12\Box h$. Collecting terms gives exactly $\operatorname{Ric}^{(1)}_{ab}-\tfrac12\eta_{ab}S^{(1)}=-\tfrac12\Box\bar h_{ab}+\partial^c\partial_{(a}\bar h_{b)c}-\tfrac12\eta_{ab}\partial^c\partial^d\bar h_{cd}$, the formula of (c). The remainder bounds follow as in step 2.1. [step 2.1, L1, L3, L4, algebra]

4.1 (Harmonic-gauge reduction.) The first two displays of (d) are step 1.3. If $\Box\xi_b=\partial^a\bar h_{ab}$ then $\partial^a\bar h'{}_{ab}=0$, so in the formula of step 3.1 applied to $\bar h'$ both divergence terms vanish and $G^{(1)}_{ab}(h')=-\tfrac12\Box\bar h'{}_{ab}$, proving the last display of (d). [step 1.3, step 3.1, given, algebra]

5.1 (Gauge invariance.) Let $H_{ab}:=\partial_a\xi_b+\partial_b\xi_a$, so that $h'_{ab}=h_{ab}-H_{ab}$. By step 2.1, $$\operatorname{Ric}^{(1)}_{ab}(H)=\tfrac12\bigl(\partial_c\partial_aH^{c}{}_{b}+\partial_c\partial_bH^{c}{}_{a}-\Box H_{ab}-\partial_a\partial_bH\bigr).$$ Substituting $H_{ab}=\partial_a\xi_b+\partial_b\xi_a$, so $H=2\partial^c\xi_c$, and using $H^{c}{}_{b}=\partial^c\xi_b+\partial_b\xi^c$: $\partial_c\partial_aH^{c}{}_{b}=\partial_a\Box\xi_b+\partial_a\partial_b\partial^c\xi_c$, $\partial_c\partial_bH^{c}{}_{a}=\partial_b\Box\xi_a+\partial_a\partial_b\partial^c\xi_c$, $\Box H_{ab}=\partial_a\Box\xi_b+\partial_b\Box\xi_a$ and $\partial_a\partial_bH=2\partial_a\partial_b\partial^c\xi_c$; the sum is $\partial_a\Box\xi_b+\partial_b\Box\xi_a+2\partial_a\partial_b\partial^c\xi_c-\partial_a\Box\xi_b-\partial_b\Box\xi_a-2\partial_a\partial_b\partial^c\xi_c=0$, so $\operatorname{Ric}^{(1)}_{ab}(H)=0$. By linearity of the formula of step 2.1 in its argument, $\operatorname{Ric}^{(1)}(h-H)=\operatorname{Ric}^{(1)}(h)$; by step 3.1, $S^{(1)}(H)=\eta^{ab}\operatorname{Ric}^{(1)}_{ab}(H)=0$ and $G^{(1)}_{ab}(H)=\operatorname{Ric}^{(1)}_{ab}(H)-\tfrac12\eta_{ab}S^{(1)}(H)=0$, so $G^{(1)}(h-H)=G^{(1)}(h)$. This proves (e). [step 2.1, step 3.1, L3, algebra] ∎

## Remarks

- **Linear, not affine.** The formulas of (b)-(c) are $\mathbb R$-linear in $h$ and its derivatives; this linearity is used in (e) and in the weak-field hierarchy on this page, where the first-order perturbation is decomposed into a principal part and a small remainder.
- **Gauge versus chart.** The gauge transformation (d) is not a change of chart: it is the first-order change of the metric components under the pullback by the flow of $\xi$, computed inside the fixed inertial chart. A genuine chart change acts on the components of $h$ and $\eta$ simultaneously.
- **Scope.** The explicit formulas presuppose the flat background $\eta$; a perturbation of a general Lorentzian metric has additional terms involving the background curvature, which are not developed here. No claim about solving the linearized field equations is made in this item.
