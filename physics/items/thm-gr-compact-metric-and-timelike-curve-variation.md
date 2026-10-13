---
id: thm-gr-compact-metric-and-timelike-curve-variation
kind: theorem
title: "First variation of the Einstein-Hilbert density under compactly supported metric variations, and of the timelike length functional"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, thm-gr-point-normal-and-exponential-coordinate-charts, def-christoffel-symbols-of-an-affine-connection, lem-gr-connection-conditions-in-chart-components, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-tensor-fields-and-components, lem-gr-metric-divergence-and-density-formula, def-gr-metric-volume-form-and-current-flux, lem-gr-lorentzian-perturbations-remain-lorentzian, lem-gr-first-variation-of-proper-time, def-gr-timelike-worldline-and-proper-time, def-covariant-derivative-along-a-curve, def-geodesic-of-an-affine-connection, thm-ftc-second-part, def-darboux-integral, def-smooth-manifold, def-interval, def-multidimensional-darboux-integral, def-multidimensional-darboux-sums, thm-continuous-on-a-rectangle-is-riemann-integrable, thm-riemann-fubini-on-product-rectangles, thm-heine-cantor-metric, cor-mean-value-theorem, lem-cm-determinant-derivative-along-a-matrix-curve]
dependency_roles:
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  lem-gr-lorentzian-perturbations-remain-lorentzian: mathematical-premise
  lem-gr-first-variation-of-proper-time: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-interval: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  def-multidimensional-darboux-sums: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  lem-cm-determinant-derivative-along-a-matrix-curve: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the variation of the Ricci tensor (4.60), the divergence term (4.61), the variation of the determinant (4.65) and the resulting variation (4.66)-(4.67) of the Hilbert action, printed pp. 116-117 (PDF pp. 123-124); Ch. 3: the variation of the proper-time functional (3.48)-(3.53), printed pp. 70-71 (PDF pp. 77-78)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 9.2: delta R = -R_{ab} delta g^{ab} + nabla_a X^a (9.21)-(9.22) and the variation (9.23)-(9.25) of the Einstein-Hilbert action, printed p. 115 (PDF p. 116); section 2.4: curves of extremal proper time, printed pp. 28-29 (PDF pp. 29-30)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.1: delta sqrt(-g) and delta R_{mu nu} = nabla_rho delta Gamma^rho_{mu nu} - nabla_nu delta Gamma^rho_{mu rho}, printed pp. 141-144 (PDF pp. 148-151); section 1.2.1: the particle action and its Euler-Lagrange equation, printed pp. 12-16 (PDF pp. 19-23)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$, curvature tensors
$R^{a}{}_{bcd}$, $\operatorname{Ric}_{ab}$, scalar curvature $S$ and Einstein
tensor $G_{ab}$ ([[def-gr-curvature-tensor-and-derived-tensors]],
[[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]). Let $(U,x)$ be a
smooth chart, let $K\subseteq U$ be compact, let $I\subseteq\mathbb R$ be an
open interval with $0\in I$, and let $s\mapsto g(s)$, $s\in I$, be a family of
smooth Lorentzian metrics of signature $(-,+,+,+)$ on $M$ such that

- $g(0)=g$ and $g(s)=g$ on $M\setminus K$ for every $s\in I$; and
- the components $g(s)_{ab}$ in the chart are smooth functions of $(s,x)$ on
  $I\times x(U)$ ([[def-gr-tensor-fields-and-components]]).

Write $h_{ab}:=\partial_sg(s)_{ab}|_{s=0}$, a smooth symmetric covariant
$2$-tensor field with support in $K$, and
$q^{ab}:=\partial_sg(s)^{ab}|_{s=0}$
([[def-gr-inverse-metric-and-musical-isomorphisms]]).

**(a) Variation of the inverse metric; realizability.** $q^{ab}
=-g^{ac}g^{bd}h_{cd}$; conversely, for every smooth symmetric covariant
$2$-tensor field $h_0$ with compact support in $U$ there is $\lambda_0>0$ such
that for every $|\lambda|<\lambda_0$ the family $s\mapsto g+s\lambda h_0$
satisfies the hypotheses above on the parameter interval $(-1,1)$ (with
$K=\operatorname{supp}h_0$). In particular any prescribed smooth compactly
supported inverse-metric direction $q$ is realized by $g+s h$ on a
sufficiently small interval, with $h_{ab}=-g_{ac}g_{bd}q^{cd}$.

**(b) Variation of the Christoffel symbols.** The field
$\delta\Gamma^{a}{}_{bc}:=\partial_s\Gamma(s)^{a}{}_{bc}|_{s=0}$ is a smooth
tensor field on $U$ and

$$\delta\Gamma^{a}{}_{bc}=\tfrac12g^{ad}\bigl(\nabla_bh_{cd}+\nabla_ch_{bd}-\nabla_dh_{bc}\bigr).$$

**(c) Variation of the Ricci tensor (Palatini identity).**
$\delta\operatorname{Ric}_{bd}:=\partial_s\operatorname{Ric}(s)_{bd}|_{s=0}$
satisfies

$$\delta\operatorname{Ric}_{bd}=\nabla_a\delta\Gamma^{a}{}_{db}-\nabla_d\delta\Gamma^{a}{}_{ab}.$$

**(d) Variation of the curvature density.** With
$V^{a}:=g^{bd}\delta\Gamma^{a}{}_{db}-g^{ab}\delta\Gamma^{d}{}_{db}$ and
$w(s):=\sqrt{|\det(g(s)_{ab})|}$ the metric density of
[[def-gr-metric-volume-form-and-current-flux]],

$$\partial_s\bigl(w(s)S(s)\bigr)\big|_{s=0}=w\,G_{ab}q^{ab}+\partial_a\bigl(wV^{a}\bigr).$$

**(e) Variation of the chart action integral.** For every constant
$\Lambda\in\mathbb R$, the function
$F(s):=\int_U\bigl[(S(s)-2\Lambda)w(s)-(S(0)-2\Lambda)w(0)\bigr]\,d^4x$ is the compactly supported chart action difference, differentiable at $0$, and

$$F'(0)=\int_U\bigl(G_{ab}+\Lambda g_{ab}\bigr)q^{ab}\,w\,d^4x,$$

where the integrand is compactly supported in $K$ and the integral is an
ordinary Riemann integral in the chart coordinates
([[def-multidimensional-darboux-integral]]).

**(f) Variation of the timelike length and particle action.** Let
$\gamma:[a,b]\to U$ and $H$ be as in
[[lem-gr-first-variation-of-proper-time]], so that $\gamma$ is $C^2$, future
timelike, parametrized with $g(\gamma',\gamma')=-c^2$, the variation is $C^2$
with fixed endpoints and future timelike fibres, and $L(s)$ is the length
functional of that lemma. Then the first-variation formulas (1)-(3) of that
lemma hold verbatim. Consequently for every $m>0$ the particle action
$S_p(\gamma):=-mc\int_a^b\sqrt{-g(\gamma'(t),\gamma'(t))}\,dt$ satisfies
$\partial_sS_p(H(s,\cdot))|_{s=0}=-mc\,L'(0)$, so within this class of curves
and variations $\gamma$ is stationary for $S_p$ if and only if
$D_t\gamma'=0$, i.e. if and only if $\gamma$ is a geodesic in its proper-time
parameter ([[def-geodesic-of-an-affine-connection]],
[[def-covariant-derivative-along-a-curve]]).

## Facts & Assumptions

**Given:** The chart $(U,x)$, the compact set $K\subseteq U$, the interval $I$ about $0$, the smooth family $s\mapsto g(s)$ of Lorentzian metrics equal to $g$ off $K$, and the curve and variation of clause (f).

[L1] The metric-selected connection $\nabla$ of $g$ exists, is unique and is torsion-free and $g$-compatible; in a chart its Christoffel symbols are $\Gamma^{a}{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$, and its extension to tensor fields commutes with contractions, annihilates $g,g^{-1}$ and has coordinate expression $T^{\cdots}{}_{;c}=\partial_cT^{\cdots}$ plus one $\Gamma$-term per slot ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[lem-gr-connection-conditions-in-chart-components]]).

[L2] $\nabla$ satisfies the point-normal chart property: about every $p\in U$ there is a chart with $g_{ab}(p)=\operatorname{diag}(-1,1,1,1)$ and $\partial_ag_{bc}(p)=0$, hence $\Gamma^{a}{}_{bc}(p)=0$ ([[thm-gr-point-normal-and-exponential-coordinate-charts]]).

[L3] The curvature components have the chart expression $R^{a}{}_{bcd}=\partial_c\Gamma^{a}{}_{db}-\partial_d\Gamma^{a}{}_{cb}+\sum_e(\Gamma^{a}{}_{ce}\Gamma^{e}{}_{db}-\Gamma^{a}{}_{de}\Gamma^{e}{}_{cb})$, and $\operatorname{Ric}_{bd}=R^{a}{}_{bad}$, $S=g^{bd}\operatorname{Ric}_{bd}$, $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12Sg_{ab}$ ([[def-gr-curvature-tensor-and-derived-tensors]], [[thm-gr-curvature-tensoriality-and-coordinate-formula]]).

[L4] For a smooth metric family with compactly supported variation: if $w(s)$ is the density of $g(s)$, then $\partial_sw(s)|_0=-\tfrac12w\,g_{ab}q^{ab}$; equivalently $\partial_sw(s)|_0=\tfrac12w\,g^{ab}h_{ab}$ ([[lem-gr-metric-divergence-and-density-formula]] clause (a), [[def-gr-smooth-lorentzian-objects]]).

[L5] For a differentiable matrix curve $A$ with invertible values, $(\det A)'=\det A\operatorname{tr}(A^{-1}A')$, and the inverse-metric components are the matrix inverse of $g_{ab}$; hence differentiating $g(s)^{ac}g(s)_{cb}=\delta^{a}{}_{b}$ gives $q^{ac}g_{cb}+g^{ac}h_{cb}=0$ ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-tensor-fields-and-components]], [[lem-cm-determinant-derivative-along-a-matrix-curve]]).

[L6] If $g$ is Lorentzian and $h_0$ is smooth symmetric with compact support, then $g+s\lambda h_0$ is a smooth Lorentzian metric of signature $(-,+,+,+)$ for every $|s|<1$ and $|\lambda|$ smaller than some $\lambda_0$ ([[lem-gr-lorentzian-perturbations-remain-lorentzian]]).

[L7] On the chart domain, $\nabla_aJ^a=w^{-1}\partial_a(wJ^a)$ for every smooth vector field $J$ ([[lem-gr-metric-divergence-and-density-formula]] clause (c)).

[L8] A continuous chart coefficient supported in a fixed compact subset of $x(U)$ is extended by zero to $\mathbb R^4$ and integrated on a containing closed nondegenerate rectangle. It is integrable by [[thm-continuous-on-a-rectangle-is-riemann-integrable]], with the integral of [[def-multidimensional-darboux-integral]]. For a $C^1$ compactly supported coefficient $f$, zero extension is $C^1$; [[thm-riemann-fubini-on-product-rectangles]] and [[thm-ftc-second-part]] give $\int\partial_af=0$ because the endpoint values in that coordinate vanish. For a jointly smooth parameter coefficient $A(s,x)$ with fixed compact support, choose a compact parameter interval about $0$. Uniform continuity of $\partial_s A$ on its product with the containing rectangle ([[thm-heine-cantor-metric]]) and [[cor-mean-value-theorem]] imply $(A(s,x)-A(0,x))/s\to\partial_sA(0,x)$ uniformly in $x$. The Darboux sums give $|\int f-\int h|\le\operatorname{vol}(Q)\sup_Q|f-h|$ for continuous functions on $Q$ ([[def-multidimensional-darboux-sums]]); hence the derivative passes through this integral.

[L9] The proper-time length functional of a $C^2$ future timelike curve in a chart, with $g(\gamma',\gamma')=-c^2$ and $C^2$ endpoint-fixing variations with timelike fibres, has the first-variation formulas $L'(0)=-\int_a^b\frac{g(D_tJ,\gamma')}{\sqrt{-g(\gamma',\gamma')}}dt=\frac1c\int_a^bg(J,D_t\gamma')dt$ and is stationary for every such variation exactly when $D_t\gamma'=0$ ([[lem-gr-first-variation-of-proper-time]], [[def-gr-timelike-worldline-and-proper-time]], [[def-covariant-derivative-along-a-curve]]).

## Proof

**Proof technique:** direct; differentiate the defining algebraic identities and the Christoffel and curvature formulas in point-normal charts, integrate the total-divergence term, then cite the standalone curve-variation lemma for the particle functional.


1.1 (Variation of the inverse metric.) Differentiate the identity $g(s)^{ac}g(s)_{cb}=\delta^{a}{}_{b}$ at $s=0$ using [L5]: $q^{ac}g_{cb}+g^{ac}h_{cb}=0$. Multiplying by $g^{-1}$ twice gives $q^{ab}=-g^{ac}g^{bd}h_{cd}$, the first assertion of (a). [L5, algebra]

1.2 (Variation of the Christoffel symbols.) Fix $p$, use the point-normal chart of [L2] at $p$, and let $g(s)$ be the given family; at $p$, the Christoffel formula of [L1] applied to $g(s)$ gives $\Gamma(s)^{a}{}_{bc}(p)=\tfrac12g(s)^{ad}(p)\bigl(\partial_bg(s)_{dc}+\partial_cg(s)_{bd}-\partial_dg(s)_{bc}\bigr)(p)$. Differentiating at $s=0$ and using $g(0)=g$, the derivatives of the metric at $p$ may be replaced by covariant derivatives because $\Gamma^{a}{}_{bc}(p)=0$; this gives $\delta\Gamma^{a}{}_{bc}(p)=\tfrac12g^{ad}(\nabla_bh_{cd}+\nabla_ch_{bd}-\nabla_dh_{bc})(p)$, the displayed formula. Both sides are tensor fields: the left side is a difference of Christoffel-symbol families, whose transformation law differs only by a metric-independent term that cancels, and the right side is built from tensors. Since the identity holds at every point in some point-normal chart, it holds on $U$; this proves (b). [L1, L2, algebra]

2.1 (Realizability.) Let $h_0$ be smooth symmetric with compact support in $U$. By [L6] applied to the Lorentzian metric $g$ and the field $h_0$, there is $\lambda_0>0$ such that $g+\mu h_0$ is a smooth Lorentzian metric of signature $(-,+,+,+)$ for every $|\mu|<\lambda_0$. For $|\lambda|<\lambda_0$ and $|s|<1$ put $g(s):=g+s\lambda h_0$, so that $\mu=s\lambda$ ranges over $(-\lambda_0,\lambda_0)$; then $g(s)$ is Lorentzian for every $s\in(-1,1)$, equals $g$ off $K=\operatorname{supp}h_0$, and its components are smooth in $(s,x)$. For an arbitrary prescribed $q$, take $h_{ab}=-g_{ac}g_{bd}q^{cd}$ and restrict $g+s h$ to the stability interval; step 1.1 gives exactly that inverse-metric derivative. This proves the remaining assertions of (a). [L6, algebra]

2.2 (Palatini identity.) In the point-normal chart at $p$, the chart expression of [L3] reads $R(s)^{a}{}_{bcd}=\partial_c\Gamma(s)^{a}{}_{db}-\partial_d\Gamma(s)^{a}{}_{cb}+\sum_e\bigl(\Gamma(s)^{a}{}_{ce}\Gamma(s)^{e}{}_{db}-\Gamma(s)^{a}{}_{de}\Gamma(s)^{e}{}_{cb}\bigr)$. At $p$ the quadratic terms have a factor $\Gamma(0)^{e}{}_{xy}(p)=0$, so differentiating at $s=0$ gives $\delta R^{a}{}_{bcd}(p)=\partial_c\delta\Gamma^{a}{}_{db}(p)-\partial_d\delta\Gamma^{a}{}_{cb}(p)=\nabla_c\delta\Gamma^{a}{}_{db}(p)-\nabla_d\delta\Gamma^{a}{}_{cb}(p)$, where the last equality again uses $\Gamma(p)=0$. Both sides are tensors, so the identity holds on $U$. Contracting $a=c$ with [L3], $\delta\operatorname{Ric}_{bd}=\delta R^{a}{}_{bad}=\nabla_a\delta\Gamma^{a}{}_{db}-\nabla_d\delta\Gamma^{a}{}_{ab}$, which is (c). [L1, L2, L3, step 1.2, algebra]

3.1 (Variation of the density times scalar curvature.) From [L4], $\partial_sw(s)|_0=-\tfrac12w\,g_{ab}q^{ab}$, and from step 1.1 and (c), $\partial_sS(s)|_0=\partial_s(g(s)^{bd}\operatorname{Ric}(s)_{bd})|_0=q^{bd}\operatorname{Ric}_{bd}+g^{bd}\delta\operatorname{Ric}_{bd}$. Therefore $$\partial_s\bigl(w(s)S(s)\bigr)\big|_0=w\Bigl[\operatorname{Ric}_{bd}q^{bd}-\tfrac12S\,g_{bd}q^{bd}+g^{bd}\bigl(\nabla_a\delta\Gamma^{a}{}_{db}-\nabla_d\delta\Gamma^{a}{}_{ab}\bigr)\Bigr] .$$ The first two terms are $wG_{bd}q^{bd}$ by [L3]. For the last two terms, metric compatibility ($\nabla g^{-1}=0$, [L1]) gives $g^{bd}\nabla_a\delta\Gamma^{a}{}_{db}=\nabla_a(g^{bd}\delta\Gamma^{a}{}_{db})$ and $g^{bd}\nabla_d\delta\Gamma^{a}{}_{ab}=\nabla_d(g^{bd}\delta\Gamma^{a}{}_{ab})=\nabla_a(g^{ab}\delta\Gamma^{d}{}_{db})$ after relabelling the second index; their difference is $\nabla_aV^{a}$ with $V^{a}=g^{bd}\delta\Gamma^{a}{}_{db}-g^{ab}\delta\Gamma^{d}{}_{db}$, so $\partial_s(wS)|_0=wG_{ab}q^{ab}+w\nabla_aV^{a}$. Since $\partial_a(wV^a)=w\nabla_aV^{a}$ by the density-divergence formula [L7], this is (d). [step 1.1, step 2.2, L1, L3, L4, L7, algebra]

4.1 (Chart integral.) The action-difference integrand $[(S(s)-2\Lambda)w(s)-(S(0)-2\Lambda)w(0)]$ is smooth in $(s,x)$ on $I\times x(U)$ and supported in the fixed compact set $K$; all its $s$-derivatives are supported in $K$. By [L8], $F$ is differentiable at $0$ with $F'(0)=\int_U\partial_s\bigl((S(s)-2\Lambda)w(s)\bigr)|_0d^4x$. By [L4] and (d), $\partial_s((S(s)-2\Lambda)w(s))|_0=wG_{ab}q^{ab}+\partial_a(wV^{a})+\Lambda g_{ab}q^{ab}w=w(G_{ab}+\Lambda g_{ab})q^{ab}+\partial_a(wV^{a})$, the last step by [L7]. The function $\partial_a(wV^{a})$ has compact support in $K\subseteq U$, so its integral vanishes by [L8]; hence $F'(0)=\int_U(G_{ab}+\Lambda g_{ab})q^{ab}w\,d^4x$, which is (e). [step 3.1, L4, L7, L8, algebra]

5.1 (Particle functional.) Clause (f) is exactly [L9]: the lemma's hypotheses are the stated ones, and its conclusions are the formulas (1)-(3) quoted in (f). Multiplying the length functional by the positive constant $mc$ gives $S_p(H(s,\cdot))=-mc\,L(s)$, so $\partial_sS_p(H(s,\cdot))|_0=-mc\,L'(0)$; since $mc>0$, the vanishing of $L'(0)$ for every admissible variation is equivalent to the vanishing of $\partial_sS_p|_0$, and [L9] identifies this with $D_t\gamma'=0$. [L9, algebra] ∎

## Remarks

- **Hypotheses used.** The compact support of the variation is used twice: to make the parameter integral differentiable under the integral sign and to kill the total-divergence term. Nonzero boundary variations of the metric are not covered and require boundary terms that this theorem does not supply. The chart $U$ is only a localization of the integral; the formulas (a)-(d) are chart-independent tensor identities.

- **No physical premise.** The theorem is mathematics: it identifies the first variations of the stated functionals. The physical adoption of an action principle and its reading as the field law of the model occur in the framework's postulates, not here.

- **Relation to the particle functional's class.** The curve class in (f) is the restricted one of [[lem-gr-first-variation-of-proper-time]]: a single chart, fixed endpoints, timelike fibres, parametrization with $g(\gamma',\gamma')=-c^2$. Null curves and maximality statements are outside it.
