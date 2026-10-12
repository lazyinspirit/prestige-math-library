---
id: lem-gr-weak-field-admissibility-and-inverse-bounds
kind: lemma
title: "Stationarity, timelikeness and uniform inverse-metric bounds for stationary weak-field data"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-stationary-weak-field-data, def-gr-minkowski-model-and-inertial-chart, def-gr-killing-field, def-lie-derivative-of-a-tensor-field, def-local-and-global-flow, def-complete-vector-field, thm-fundamental-theorem-on-flows, def-gr-inverse-metric-and-musical-isomorphisms, def-invertible-matrix-and-general-linear-group, thm-algebra-of-derivatives, thm-clairaut-schwarz-mixed-partials, def-c-r-and-smooth-maps-between-smooth-manifolds, def-compact-space, thm-heine-cantor-metric, thm-compactness-under-continuous-maps]
dependency_roles:
  def-gr-stationary-weak-field-data: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-killing-field: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  def-local-and-global-flow: mathematical-premise
  def-complete-vector-field: mathematical-premise
  thm-fundamental-theorem-on-flows: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
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
over an open set $\Omega$ of the flat model
([[def-gr-stationary-weak-field-data]], [[def-gr-minkowski-model-and-inertial-chart]]),
and let $E(\varepsilon):=g(\varepsilon)-\eta$ and
$H(\varepsilon):=\eta^{-1}E(\varepsilon)$ be the component matrices of the
perturbation and of its $\eta$-raise. Let
$m(A):=\max_{a,b}|A_{ab}|$ denote the maximum-entry norm of a $4\times4$
matrix. Then with
$\varepsilon_*:=\min\{\varepsilon_0,\,L,\,1,\,(128C)^{-1}\}$ the following
hold for every $0<\varepsilon\le\varepsilon_*$:

**(a) Smallness, timelikeness and stationarity.** On $K$,

$$m\bigl(E(\varepsilon)\bigr)\le4C\varepsilon,\qquad m\bigl(H(\varepsilon)\bigr)\le16C\varepsilon\le\tfrac18,\qquad g(\varepsilon)_{00}\le-\tfrac12 ,$$

so the chart field $\partial_0$ is timelike on $K$; moreover $\partial_0$ is
a Killing field of $g(\varepsilon)$ on $\Omega$
([[def-gr-killing-field]]).

**(b) Inverse-metric expansion and uniform bounds.** There is
$C_1=C_1(C,L)<\infty$ such that on $K$, with
$R^{ab}(\varepsilon):=g^{ab}(\varepsilon)-\eta^{ab}+\eta^{ac}E_{cd}(\varepsilon)\eta^{db}$,

$$|R^{ab}(\varepsilon)|\le C_1\varepsilon^2,\qquad |g^{ab}(\varepsilon)-\eta^{ab}|\le C_1\varepsilon,\qquad |\partial^\alpha g^{ab}(\varepsilon)|\le\frac{C_1}{L^{|\alpha|}}\quad(1\le|\alpha|\le2),$$

and

$$|\partial^\alpha R^{ab}(\varepsilon)|\le\frac{C_1\varepsilon^2}{L^{|\alpha|}}\qquad(0\le|\alpha|\le2),$$

where $g^{ab}(\varepsilon)$ are the components of the inverse metric
([[def-gr-inverse-metric-and-musical-isomorphisms]]).

## Facts & Assumptions

**Given:** Stationary weak-field data $(\Omega,K,L,C,\varepsilon_0,\varphi,r)$, the matrices $E(\varepsilon)$, $H(\varepsilon)$, and $\varepsilon_*=\min\{\varepsilon_0,L,1,(128C)^{-1}\}$.

[L1] $E_{00}=-2\varepsilon\varphi+r_{00}$, $E_{0i}=r_{0i}$ and $E_{ij}=-2\varepsilon\varphi\delta_{ij}+r_{ij}$; on $K$ the bounds $|\varphi|\le C$, $|r_{00}|+|r_{ij}|\le C\varepsilon^2$ and $|r_{0i}|\le C\varepsilon^{3/2}$ hold, and $\partial_0\varphi=\partial_0r_{ab}=0$ ([[def-gr-stationary-weak-field-data]] clauses (a)-(b)).

[L2] For $4\times4$ matrices, $m(A+B)\le m(A)+m(B)$, $m(AB)\le4\,m(A)m(B)$, $m(\eta^{-1}E)\le4\,m(E)$ since the entries of $\eta^{-1}$ are $0,\pm1$, and if $m(H)<1$ then $I+H$ is invertible with $\sum_{k\ge0}(-H)^k$ convergent in $m$-norm and equal to $(I+H)^{-1}$ ([[def-invertible-matrix-and-general-linear-group]], [[thm-algebra-of-derivatives]]).

[L3] The flow of the coordinate field $\partial_0$ on the chart image is the translation $\Psi_s(p)=p+s\,e_0$, a global flow whose differential in the chart is the identity; for a global flow $\Psi$ with $\Psi_s^*g=g$ for all $s$, $\mathcal L_{\partial_0}g=\frac{d}{ds}|_0\Psi_s^*g=0$ ([[thm-fundamental-theorem-on-flows]], [[def-local-and-global-flow]], [[def-complete-vector-field]], [[def-lie-derivative-of-a-tensor-field]], [[def-gr-killing-field]]).

[L4] Continuous functions on the compact set $\overline K$ are bounded by constants depending only on the data appearing in them; derivatives of products, quotients and inverses obey the usual finite rules, and mixed partials commute ([[thm-heine-cantor-metric]], [[thm-compactness-under-continuous-maps]], [[def-compact-space]], [[thm-algebra-of-derivatives]], [[thm-clairaut-schwarz-mixed-partials]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

## Proof

**Proof technique:** direct; read the smallness from the explicit bounds, verify stationarity by the flow computation, and invert the metric with the exact Neumann identity, differentiating it for the higher-order bounds.

1.1 (Smallness and timelikeness.) On $K$, [L1] gives $m(E)\le2C\varepsilon+C\varepsilon^2+C\varepsilon^{3/2}\le4C\varepsilon$ for $\varepsilon\le1$, hence $m(H)\le16C\varepsilon\le1/8$ for $\varepsilon\le(128C)^{-1}$; and $g(\varepsilon)_{00}=-(1+2\varepsilon\varphi)+r_{00}\le-1+2C\varepsilon+C\varepsilon^2\le-1/2$ for $\varepsilon$ small as chosen. In particular $\partial_0$ is timelike on $K$. [L1, L2, given, algebra]

1.2 (Stationarity.) The chart image is open in $\mathbb R^4$ and the curves $s\mapsto p+s\,e_0$ are integral curves of $\partial_0$ defined for all $s$; by uniqueness of maximal integral curves the flow of $\partial_0$ is the global translation $\Psi_s$ of [L3]. In the chart, $(\Psi_s^*g(\varepsilon))_{ab}(p)=g_{ab}(\varepsilon,\Psi_s(p))=g_{ab}(\varepsilon,p)$ because the components do not depend on $x^0$ by [L1]; hence $\Psi_s^*g(\varepsilon)=g(\varepsilon)$ for every $s$ and $\mathcal L_{\partial_0}g(\varepsilon)=0$, so $\partial_0$ is a Killing field. [L1, L3, given, algebra]

2.1 (Exact inverse.) Write $g(\varepsilon)=\eta(I+H(\varepsilon))$; since $m(H)\le1/8<1$, the Neumann series of [L2] converges and $I+H$ is invertible with $m((I+H)^{-1})\le\sum_{k\ge0}(4m(H))^k\le\tfrac1{1-4m(H)}\le2$ for $m(H)\le1/8$. Inserting the exact identity $(I+H)^{-1}=I-H+H^2(I+H)^{-1}$ and multiplying by $\eta^{-1}$ gives $$g(\varepsilon)^{-1}=(I+H)^{-1}\eta^{-1}=\eta^{-1}-\eta^{-1}E\eta^{-1}+\eta^{-1}E\eta^{-1}E(I+H)^{-1}\eta^{-1},$$ so $R^{ab}(\varepsilon)$ is the $(a,b)$-entry of $\eta^{-1}E\eta^{-1}E(I+H)^{-1}\eta^{-1}$. By [L2], $m(R)\le4^3m(E)^2m((I+H)^{-1})\le64\cdot(4C\varepsilon)^2\cdot2\le C_1\varepsilon^2$ for a constant $C_1$ depending on $C$; likewise $m(\eta^{-1}-\eta^{-1}E\eta^{-1}-\eta^{-1})=m(\eta^{-1}E\eta^{-1})\le4^2m(E)\le C_1\varepsilon$, so $|g^{ab}-\eta^{ab}|\le C_1\varepsilon$. This is the zeroth-order part of (b). [step 1.1, L2, algebra]

3.1 (Derivative bounds.) Since $H=\eta^{-1}E$ and $E$ is smooth with $|\partial^\alpha E_{cd}|\le4C\varepsilon/L^{|\alpha|}$ for $1\le|\alpha|\le2$ (as in step 1.1, using $\varepsilon^{3/2}\le\varepsilon$), [L2] gives $m(\partial^\alpha H)\le16C\varepsilon/L^{|\alpha|}$ for $1\le|\alpha|\le2$. Differentiating $(\partial_c(I+H)^{-1}=-(I+H)^{-1}(\partial_cH)(I+H)^{-1}$ and its second derivative, whose terms are $(I+H)^{-1}(\partial_cH)(I+H)^{-1}(\partial_dH)(I+H)^{-1}$ and $-(I+H)^{-1}(\partial_c\partial_dH)(I+H)^{-1})$ and bounding with [L2] gives $m(\partial^\alpha(I+H)^{-1})\le C\varepsilon/L^{|\alpha|}$ for $1\le|\alpha|\le2$, while $m((I+H)^{-1})\le2$. Differentiating the exact identity of step 2.1 in the entries and using the product rule and the commuting of partials [L4], each term of $\partial^\alpha g(\varepsilon)^{-1}$ contains at most one factor $\partial^\beta(I+H)^{-1}$ with $|\beta|\ge1$ or else the pair of factors $E,E$; collecting the bounds gives $|\partial^\alpha g^{ab}(\varepsilon)|\le C_1/L^{|\alpha|}$ for $1\le|\alpha|\le2$ and, for the remainder, $|\partial^\alpha R^{ab}(\varepsilon)|\le C_1\varepsilon^2/L^{|\alpha|}$ for $0\le|\alpha|\le2$ (for $|\alpha|=0$ this is step 2.1). This proves (b). [step 2.1, L2, L4, algebra]

4.1 (Conclusion.) Step 1.1 gives the three bounds and timelikeness of (a), step 1.2 gives the Killing property of (a), and steps 2.1 and 3.1 give the expansion and all bounds of (b); the constants depend only on $C$ and $L$ and on the fixed dimension $4$. [step 1.1, step 1.2, step 2.1, step 3.1, given] ∎

## Remarks

- **Uniform in the family.** The threshold $\varepsilon_*$ and the constant $C_1$ depend only on $(C,L)$ and the dimension, not on the individual family; this uniformity is what makes the estimates effective for the trajectory limit later on this page.
- **Local in space.** All bounds are stated on the fixed compact set $K$; no global smallness on $\Omega$ and no decay of the data at infinity is assumed.
- **Scope.** The lemma is the analytic input of the weak-field hierarchy: it converts the raw $O(\varepsilon^2)$ and $O(\varepsilon^{3/2})$ bounds on the remainders into uniform control of the inverse metric through two derivatives, which is what the curvature and geodesic estimates require.
