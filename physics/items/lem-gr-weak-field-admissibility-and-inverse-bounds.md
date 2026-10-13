---
id: lem-gr-weak-field-admissibility-and-inverse-bounds
kind: lemma
title: "Stationarity, timelikeness and uniform inverse-metric bounds for stationary weak-field data"
status: published
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-stationary-weak-field-data, def-gr-minkowski-model-and-inertial-chart, def-gr-killing-field, def-lie-derivative-of-a-tensor-field, def-gr-inverse-metric-and-musical-isomorphisms, def-invertible-matrix-and-general-linear-group, thm-geometric-series, thm-algebra-of-derivatives, thm-clairaut-schwarz-mixed-partials, def-c-r-and-smooth-maps-between-smooth-manifolds, def-compact-space, thm-heine-cantor-metric, thm-compactness-under-continuous-maps]
dependency_roles:
  def-gr-stationary-weak-field-data: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-killing-field: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  thm-geometric-series: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-compact-space: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-compactness-under-continuous-maps: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: perturbation of the inverse metric, g^{mu nu} = eta^{mu nu} - eta^{mu rho}h_{rho sigma}eta^{sigma nu} + O(h^2), printed pp. 106-108 (PDF pp. 113-115), and the Newtonian limit with the controlled small parameter, printed pp. 105-112 (PDF pp. 112-119)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.1-5.1.2: the weak-field expansion, raising indices with the flat metric and the Newtonian limit, printed pp. 205-210 (PDF pp. 212-217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.1: invertibility and the inverse-metric components, printed pp. 25-27 (PDF pp. 26-28)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ be stationary weak-field data
with spatial base $U=\pi(\Omega)$ and compact $K\subseteq U$
([[def-gr-stationary-weak-field-data]], [[def-gr-minkowski-model-and-inertial-chart]]),
and let $E(\varepsilon):=g(\varepsilon)-\eta$ and
$H(\varepsilon):=\eta^{-1}E(\varepsilon)$ be the component matrices of the
perturbation and of its $\eta$-raise. Let
$m(A):=\max_{a,b}|A_{ab}|$ denote the maximum-entry norm of a $4\times4$
matrix. Then with
$\varepsilon_*:=\min\{\varepsilon_0,\,1,\,(128C)^{-1}\}$ the following
hold at every $p\in\Omega$ with $\pi(p)\in K$ and every
$0<\varepsilon\le\varepsilon_*$:

**(a) Smallness, timelikeness and stationarity.** At these spacetime points,

$$m\bigl(E(\varepsilon)\bigr)\le4C\varepsilon,\qquad m\bigl(H(\varepsilon)\bigr)\le16C\varepsilon\le\tfrac18,\qquad g(\varepsilon)_{00}\le-\tfrac12 ,$$

so the chart field $\partial_0$ is timelike over the spatial compact $K$;
moreover $\partial_0$ is
a Killing field of $g(\varepsilon)$ on $\Omega$. Here, on a Lorentzian
region without a specified global time orientation, **Killing** means
$\mathcal L_{\partial_0}g(\varepsilon)=0$: the same orientation-independent
equation as [[def-gr-killing-field]], applied on each locally time-oriented
neighborhood. No global time orientation of $g(\varepsilon)$ is asserted.

**(b) Inverse-metric expansion and uniform bounds.** There is
$C_1=C_1(C,L)<\infty$ such that at these spacetime points, with
$R^{ab}(\varepsilon):=g^{ab}(\varepsilon)-\eta^{ab}+\eta^{ac}E_{cd}(\varepsilon)\eta^{db}$,

$$|R^{ab}(\varepsilon)|\le C_1\varepsilon^2,\qquad |g^{ab}(\varepsilon)-\eta^{ab}|\le C_1\varepsilon,\qquad |\partial^\alpha g^{ab}(\varepsilon)|\le\frac{C_1}{L^{|\alpha|}}\quad(1\le|\alpha|\le2),$$

and

$$|\partial^\alpha R^{ab}(\varepsilon)|\le\frac{C_1\varepsilon^2}{L^{|\alpha|}}\qquad(0\le|\alpha|\le2),$$

where $g^{ab}(\varepsilon)$ are the components of the inverse metric
([[def-gr-inverse-metric-and-musical-isomorphisms]]).

## Facts & Assumptions

**Given:** Stationary weak-field data $(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ with spatial base $U=\pi(\Omega)$, the matrices $E(\varepsilon)$, $H(\varepsilon)$, and $\varepsilon_*=\min\{\varepsilon_0,1,(128C)^{-1}\}$.

[L1] For $\mathbf x\in K$, $E_{00}=-2\varepsilon\varphi+r_{00}$, $E_{0i}=r_{0i}$ and $E_{ij}=-2\varepsilon\varphi\delta_{ij}+r_{ij}$; the bounds $|\varphi|\le C$, $|r_{00}|+|r_{ij}|\le C\varepsilon^2$ and $|r_{0i}|\le C\varepsilon^{3/2}$ hold. All these component functions are pulled back from $U$, so $\partial_0g_{ab}=0$ ([[def-gr-stationary-weak-field-data]] clauses (a)-(b)).

[L2] For $4\times4$ matrices, $m(A+B)\le m(A)+m(B)$, $m(AB)\le4\,m(A)m(B)$, and $m(\eta^{-1}E)\le m(E)$ because $\eta^{-1}$ is diagonal with entries $\pm1$. If $m(H)<1/4$, then $m(H^k)\le4^{k-1}m(H)^k\le(4m(H))^k$ for $k\ge1$. Hence each entry of $\sum_{k\ge0}(-H)^k$ converges absolutely by the scalar geometric-series theorem, $H^k\to0$, and $(I+H)\sum_{k=0}^N(-H)^k=\sum_{k=0}^N(-H)^k(I+H)=I+(-1)^NH^{N+1}$ tends to $I$. Thus $I+H$ is invertible with inverse $\sum_{k\ge0}(-H)^k$ and $m((I+H)^{-1})\le(1-4m(H))^{-1}$ ([[def-invertible-matrix-and-general-linear-group]], [[thm-geometric-series]], [[thm-algebra-of-derivatives]]).

[L3] The local flow of the coordinate field $\partial_0$ is the local translation $\Psi_s(x^0,\mathbf x)=(x^0+s,\mathbf x)$ wherever source and target lie in $\Omega$. Its differential in the chart is the identity, and the metric components factor through the spatial projection, so $\Psi_s^*g=g$ on every such local flow domain. By the local-flow definition of the Lie derivative, $\mathcal L_{\partial_0}g=\frac{d}{ds}|_{s=0}\Psi_s^*g=0$; this is the Killing condition ([[def-lie-derivative-of-a-tensor-field]], [[def-gr-killing-field]]).

[L4] Continuous functions on the compact set $\overline K$ are bounded by constants depending only on the data appearing in them; derivatives of products, quotients and inverses obey the usual finite rules, and mixed partials commute ([[thm-heine-cantor-metric]], [[thm-compactness-under-continuous-maps]], [[def-compact-space]], [[thm-algebra-of-derivatives]], [[thm-clairaut-schwarz-mixed-partials]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

## Proof

**Proof technique:** direct; read the smallness from the explicit bounds, verify stationarity by the flow computation, and invert the metric with the exact Neumann identity, differentiating it for the higher-order bounds.

1.1 (Smallness and timelikeness.) Over the spatial set $K$, [L1] gives $m(E)\le2C\varepsilon+C\varepsilon^2+C\varepsilon^{3/2}\le4C\varepsilon$ for $\varepsilon\le1$, hence $m(H)\le16C\varepsilon\le1/8$ for $\varepsilon\le(128C)^{-1}$; and $g(\varepsilon)_{00}=-(1+2\varepsilon\varphi)+r_{00}\le-1+2C\varepsilon+C\varepsilon^2\le-1/2$ for $\varepsilon$ small as chosen. Thus $\partial_0$ is timelike at every spacetime point over $K$. [L1, L2, given, algebra]

1.2 (Stationarity.) For each $p\in\Omega$, the local flow of $\partial_0$ is the translation of [L3] for sufficiently small $s$ on a neighborhood of $p$. Its differential is the identity, and the metric components have equal values at source and target by [L1]. The local pullback therefore fixes $g(\varepsilon)$, so differentiating at $s=0$ in the definition of [L3] gives $\mathcal L_{\partial_0}g(\varepsilon)=0$ throughout $\Omega$. For each $p$, choose a timelike $v\in T_p\Omega$ and extend its coordinate components constantly on a chart neighborhood; smoothness and the strict inequality $g_p(v,v)<0$ make the extension timelike after shrinking the neighborhood. This gives a local time orientation on which [[def-gr-killing-field]] applies. Its defining equation is independent of that local choice and holds on every such neighborhood, hence globally in the sense specified in (a). Thus $\partial_0$ is Killing; neither a global time orientation nor a global translation flow on $\Omega$ is required. [L1, L3, given, algebra]

2.1 (Convergent matrix inverse.) Write $g(\varepsilon)=\eta(I+H(\varepsilon))$. By step 1.1, $m(H)\le1/8$. From [L2], induction gives $m(H^k)\le4^{k-1}m(H)^k\le(4m(H))^k$ for $k\ge1$. Since $4m(H)\le1/2$, the scalar geometric series [[thm-geometric-series]] shows that every entry of $S_N:=\sum_{k=0}^N(-H)^k$ converges as $N\to\infty$; let $S$ be the limiting matrix. The finite geometric identity $(I+H)S_N=S_N(I+H)=I+(-1)^NH^{N+1}$ and the same bound $m(H^{N+1})\to0$ imply $(I+H)S=S(I+H)=I$, so $S=(I+H)^{-1}$. Moreover, $m(S)\le1+\sum_{k\ge1}(4m(H))^k\le2$. [step 1.1, L2, given, algebra]

3.1 (Exact inverse expansion.) The finite geometric identity also gives $S=I-H+H^2S$. Since $g^{-1}=S\eta^{-1}$, substituting $H=\eta^{-1}E$ yields $$g^{-1}=\eta^{-1}-\eta^{-1}E\eta^{-1}+\eta^{-1}E\eta^{-1}E S\eta^{-1}.$$ Thus the first two terms are the zeroth- and first-order parts and the final term is exactly the remainder $R$ in (b), with the stated component convention. [step 2.1, L2, given, algebra]

4.1 (Derivative bounds.) Since $H=\eta^{-1}E$ and $E$ is smooth with $m(\partial^\alpha E)\le4C\varepsilon/L^{|\alpha|}$ for $1\le|\alpha|\le2$ on the spatial compact (using $\varepsilon^{3/2}\le\varepsilon$), [L2] gives $m(\partial^\alpha H)\le4C\varepsilon/L^{|\alpha|}$. Differentiating $(I+H)S=I$ for $S=(I+H)^{-1}$ gives $\partial_cS=-S(\partial_cH)S$; differentiating again gives $\partial_d\partial_cS=-S_dH_cS-SH_{cd}S-SH_cS_d$. Step 2.1 bounds $m(S)\le2$, and repeated use of [L2] in these identities yields $m(\partial^\alpha S)\le C'\varepsilon/L^{|\alpha|}$ for $1\le|\alpha|\le2$ (terms quadratic in $\varepsilon$ are bounded by the same order since $\varepsilon\le1$). Differentiating the exact identity $g^{-1}=\eta^{-1}-\eta^{-1}E\eta^{-1}+\eta^{-1}E\eta^{-1}E S\eta^{-1}$ from step 3.1, every derivative of the last term still contains two factors drawn from $E,\partial E,\partial^2E$, so $|\partial^\alpha R^{ab}|\le C_1\varepsilon^2/L^{|\alpha|}$ for $0\le|\alpha|\le2$. The first two terms give $|\partial^\alpha g^{ab}|\le C_1/L^{|\alpha|}$ for $1\le|\alpha|\le2$, with $C_1=C_1(C,L)$ enlarged as needed. This proves (b). [step 2.1, L2, L4, algebra, step 3.1]

5.1 (Conclusion.) Step 1.1 gives the three bounds and timelikeness of (a), step 1.2 gives the Killing property of (a), and steps 3.1 and 4.1 give the expansion and all bounds of (b); the constants depend only on $C$ and $L$ and on the fixed dimension $4$. [step 1.1, step 1.2, step 2.1, step 4.1, given, step 3.1] ∎

## Remarks

- **Uniform in the family.** The threshold $\varepsilon_*$ also depends on the admissible range $\varepsilon_0$; the constant $C_1$ depends only on $(C,L)$ and the dimension, not on the individual family; this uniformity is what makes the estimates effective for the trajectory limit later on this page.
- **Local in space.** All bounds are stated over the fixed spatial compact set $K$; no global smallness on $\Omega$ and no decay of the data at infinity is assumed.
- **Scope.** The lemma is the analytic input of the weak-field hierarchy: it converts the raw $O(\varepsilon^2)$ and $O(\varepsilon^{3/2})$ bounds on the remainders into uniform control of the inverse metric through two derivatives, which is what the curvature and geodesic estimates require.
