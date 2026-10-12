---
id: ex-gr-curvature-in-a-point-normal-chart
kind: example
title: "Curvature survives a first-order normal chart: an explicit metric, its normal form and its deviation field"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, thm-gr-jacobi-equation-and-geodesic-deviation, def-gr-jacobi-field-and-conjugate-instant, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, thm-gr-point-normal-and-exponential-coordinate-charts, def-christoffel-symbols-of-an-affine-connection, def-covariant-derivative-along-a-curve, def-geodesic-of-an-affine-connection, def-gr-inverse-metric-and-musical-isomorphisms]
dependency_roles:
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  def-gr-jacobi-field-and-conjugate-instant: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.3.2 on normal coordinates and the counting argument that second derivatives of the metric cannot be removed, printed pp. 119-121 (PDF pp. 126-128)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: normal coordinates with g_{mu nu}(p)=eta_{mu nu} and first derivatives vanishing, printed pp. 79-80 (PDF pp. 86-87)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.4: normal coordinates give g_{mu nu,rho}(p)=0 and equation (4.35): g_{mu nu}=eta_{mu nu}-(1/3)R_{mu rho nu sigma}X^rho X^sigma+O(X^3), printed pp. 38-40 and 49 (PDF pp. 39-41 and 50)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

On $M=\mathbb R^4$ consider the identity chart $x=(x^0,x^1,x^2,x^3)$, the
metric with components
$$g_{00}=-1,\qquad g_{11}=1+(x^0)^2,\qquad g_{22}=g_{33}=1,\qquad g_{ab}=0 \ \text{for }a\neq b,$$
and the time orientation $N:=\partial_0$
([[def-gr-smooth-lorentzian-objects]]). Let $\nabla$ be its metric-selected
connection and $R$ its curvature
([[def-gr-curvature-tensor-and-derived-tensors]]). Then:

1. The identity chart is point-normal at the origin: $g_{ab}(0)=\eta_{ab}$,
   $\partial_ag_{bc}(0)=0$ and $\Gamma^a{}_{bc}(0)=0$; nevertheless the
   curvature does not vanish at the origin, since
   $R_{0101}(0)=R_{1010}(0)=-1$ and $R_{0110}(0)=1$.
2. The only nonzero Christoffel symbols of the metric-selected connection are
   $$\Gamma^1{}_{10}=\Gamma^1{}_{01}=\frac{x^0}{1+(x^0)^2},\qquad \Gamma^0{}_{11}=x^0 .$$
3. The deviation equation is verified exactly on the explicit family of
   geodesics $\Phi(s,r)=(s,r,0,0)$: with $T=\partial_s\Phi$ and
   $J=\partial_r\Phi$ one has $D_s^2J=R(T,J)T$ for every $s$, and the
   relative acceleration does not vanish at the event where all connection
   symbols of the chart vanish.

## Facts & Assumptions

**Given:** The metric $g=\operatorname{diag}(-1,1+(x^0)^2,1,1)$ on $\mathbb R^4$ with its metric-selected connection $\nabla$ and curvature $R$.

[L1] The metric-selected connection exists, is unique, and its Christoffel symbols in the identity chart are $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$, with $g^{ad}$ the matrix inverse of $g_{ab}$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (a), [[def-christoffel-symbols-of-an-affine-connection]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L2] In a point-normal chart the lowered curvature at the point is given by $R_{abcd}=\tfrac12(g_{ad,bc}+g_{bc,ad}-g_{bd,ac}-g_{ac,bd})$, and the components satisfy $R^a{}_{bcd}=g^{ae}R_{ebcd}$ ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (c), [[def-gr-curvature-tensor-and-derived-tensors]] clause (c)).

[L3] A chart is point-normal at $p$ when $g_{ab}(p)=\eta_{ab}$, $\partial_ag_{bc}(p)=0$ and $\Gamma^a{}_{bc}(p)=0$ ([[thm-gr-point-normal-and-exponential-coordinate-charts]] clause (a)).

[L4] For a smooth family of affinely parametrized geodesics the variation field satisfies $D_s^2J=R(T,J)T$, where $T=\partial_s\Phi$ and $J=\partial_r\Phi$ ([[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (b), [[def-gr-jacobi-field-and-conjugate-instant]] clause (b)).

[L5] Along a curve, $\nabla_{\partial_s}\partial_s=\sum_a\Gamma^a{}_{00}\partial_a$ in a chart, so a coordinate curve $s\mapsto(s,r,0,0)$ is a geodesic with affine parameter $s$ whenever the displayed symbols vanish along it ([[def-covariant-derivative-along-a-curve]], [[def-geodesic-of-an-affine-connection]], [[def-christoffel-symbols-of-an-affine-connection]]).

[L6] The components of the curvature in a chart are given by $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\sum_e(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb})$ ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (b)).

## Verification

**Proof technique:** direct.

1.1 (First-order normal form.) With $g_{11}=1+(x^0)^2$ and all other components constant, $g(0)=\eta$ and $\partial_ag_{bc}(0)=0$ because $\partial_0g_{11}=2x^0$ vanishes at $0$ and no other component depends on the coordinates. By [L1] the Christoffel symbols at $0$ are linear combinations of the first derivatives $\partial g(0)$, so they vanish as well; the identity chart is point-normal at $0$ by [L3]. [L1, L3, given]

1.2 (Christoffel symbols.) By [L1], the only nonzero first derivatives of the metric are $\partial_0g_{11}=2x^0$ and $\partial_0g^{11}=-2x^0(1+(x^0)^2)^{-2}$, so a symbol can be nonzero only if one of its indices is a derivative index $0$ and another index refers to the component $g_{11}$ or $g^{11}$. Checking the three slots: $\Gamma^1{}_{10}=\Gamma^1{}_{01}=\tfrac12g^{11}\partial_0g_{11}=\tfrac12(1+(x^0)^2)^{-1}(2x^0)=\frac{x^0}{1+(x^0)^2}$, and $\Gamma^0{}_{11}=\tfrac12g^{00}(-\partial_0g_{11})=\tfrac12(-1)(-2x^0)=x^0$; all remaining symbols have a factor $\partial_ag_{bc}$ with $a\ne0$ or $g_{bc}$ one of the constant components and vanish. [L1, algebra]

2.1 (Curvature at the origin.) By steps 1.1 and 1.2 the chart is point-normal at $0$, so [L2] applies at that point. For $(a,b,c,d)=(0,1,0,1)$ the four terms are $g_{01,10}+g_{10,01}-g_{11,00}-g_{00,11}$, of which only $-g_{11,00}(0)=-\partial_0\partial_0(1+(x^0)^2)|_0=-2$ survives, so $R_{0101}(0)=-1$; interchanging the pairs gives $R_{1010}(0)=-1$ as well, and the last-pair skew gives $R_{0110}(0)=+1$. In particular $R(0)\neq0$, although all Christoffel symbols vanish at $0$. [step 1.1, step 1.2, L2, algebra]

2.2 (An explicit geodesic family.) Let $\Phi(s,r):=(s,r,0,0)$. By step 1.2, $\Gamma^a{}_{00}=0$ identically, so by [L5] each curve $s\mapsto\Phi(s,r)$ is a geodesic with affine parameter $s$; its tangent $T=\partial_0$ satisfies $g(T,T)=-1$. The variation field is $J=\partial_1$. [step 1.2, L5, given]

2.3 (The curvature term.) By [L6] and step 1.2, $R^1{}_{001}=\partial_0\Gamma^1{}_{10}-\partial_1\Gamma^1{}_{00}+\Gamma^1{}_{0e}\Gamma^e{}_{01}-\Gamma^1{}_{1e}\Gamma^e{}_{00}=\frac{1-s^2}{(1+s^2)^2}+0+\frac{s^2}{(1+s^2)^2}-0=\frac{1}{(1+s^2)^2}$, all other components $R^a{}_{001}$ vanishing because their Christoffel combinations vanish. Hence $R(T,J)T=R^1{}_{001}\partial_1=\frac{1}{(1+s^2)^2}\partial_1$. [step 1.2, L6, algebra]

3.1 (The variation field and its derivative.) By [L1], $D_sJ=\nabla_{\partial_0}\partial_1=\sum_a\Gamma^a{}_{10}\partial_a=\frac{x^0}{1+(x^0)^2}\partial_1$, and differentiating along the curve, $D_s^2J=\frac{d}{ds}\Bigl(\frac{s}{1+s^2}\Bigr)\partial_1+\frac{s}{1+s^2}\nabla_{\partial_0}\partial_1=\frac{1-s^2}{(1+s^2)^2}\partial_1+\frac{s^2}{(1+s^2)^2}\partial_1=\frac{1}{(1+s^2)^2}\partial_1$. [step 2.2, L1, algebra]

4.1 (Verification of the deviation equation.) Steps 3.1 and 2.3 give $D_s^2J=R(T,J)T$ for every $s$, in accordance with [L4]. At $s=0$ the relative acceleration is $\partial_1\neq0$, while every Christoffel symbol of the chart vanishes there: the first-order normal form of the metric cannot remove the tidal (curvature) effect, and the deviation equation detects it at the very event where the connection symbols are zero. This completes the verification. [step 3.1, step 2.3, L4, algebra] ∎
