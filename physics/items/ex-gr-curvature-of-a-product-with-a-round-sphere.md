---
id: ex-gr-curvature-of-a-product-with-a-round-sphere
kind: example
title: "Curvature, Ricci, scalar and Einstein tensors of a metric with a round two-sphere factor"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, def-gr-inverse-metric-and-musical-isomorphisms, thm-gr-curvature-tensoriality-and-coordinate-formula, def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-algebraic-symmetries, thm-gr-second-bianchi-and-divergence-free-einstein]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  thm-gr-second-bianchi-and-divergence-free-einstein: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.3.2: the Christoffel symbols of the round sphere S^2 (3.19), the Riemann component R_{phi theta theta phi} = -r^2 sin^2 theta and the geodesic deviation of meridians (3.37)-(3.38), printed pp. 126-129 (PDF pp. 133-136)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the Ricci tensor (3.90), the Ricci scalar (3.92) and the Einstein tensor (3.95), printed pp. 81-82 (PDF pp. 88-89)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.6: the Ricci tensor (4.30), the Ricci scalar (4.31) and the Einstein tensor (4.32); section 4.7: the contracted Bianchi identity and the divergence-free property of the Einstein tensor, printed pp. 48-51 (PDF pp. 49-52)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Let $S^2:=\{(X,Y,Z)\in\mathbb R^3:X^2+Y^2+Z^2=1\}$ with the round metric
induced by the Euclidean inner product, and let $M:=\mathbb R^2\times S^2$
with the product Lorentzian metric whose first factor has line element
$-(dx^0)^2+(dx^3)^2$. Use the sphere chart
$\sigma:(0,\pi)\times(0,2\pi)\to S^2$ given by
$$\sigma(\theta,\varphi)=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta),$$
and put $U:=\mathbb R^2\times\sigma((0,\pi)\times(0,2\pi))\subset M$. In the
product chart with coordinate order
$x=(x^0,x^1,x^2,x^3)=(x^0,\theta,\varphi,x^3)$, the metric is
$$g:=-(dx^0)^2+(dx^1)^2+\sin^2(x^1)\,(dx^2)^2+(dx^3)^2,\qquad N:=\partial_0 .$$
This chart contains the equatorial geodesic segment used in
[[ex-gr-conjugate-instant-on-a-round-sphere-factor]]; the underlying manifold
has an actual $S^2$ factor, not an unwrapped angular cover. The metric is
smooth and Lorentzian on $M$ with time orientation $N$
([[def-gr-smooth-lorentzian-objects]]). Let $\nabla$ be its metric-selected
connection and $R$, $R_{abcd}$,
$\operatorname{Ric}_{ab}$, $S$ and $G_{ab}$ its curvature data
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]],
[[def-gr-curvature-tensor-and-derived-tensors]]). Then:

1. The only nonzero Christoffel symbols in this chart are
   $$\Gamma^1{}_{22}=-\sin x^1\cos x^1,\qquad \Gamma^2{}_{12}=\Gamma^2{}_{21}=\cot x^1 .$$
2. The curvature has exactly one independent nonzero lowered component up
   to the algebraic symmetries, namely
   $$R_{1212}=\sin^2(x^1);$$ equivalently $R(\partial_1,\partial_2)\partial_2=\sin^2(x^1)\partial_1$ and $R(\partial_1,\partial_2)\partial_1=-\partial_2$, and every component containing an index $0$ or $3$ vanishes.
3. The Ricci tensor, scalar curvature and Einstein tensor are $$\operatorname{Ric}_{11}=1,\qquad \operatorname{Ric}_{22}=\sin^2(x^1),\qquad S=2,\qquad G=\operatorname{diag}(1,0,0,-1).$$
4. The contracted second Bianchi identity $\nabla^aG_{ab}=0$ holds. In the
   displayed chart $U$, $\nabla_eG_{ab}=0$ identically, so the divergence
   vanishes term by term there.

## Facts & Assumptions

**Given:** The product $M=\mathbb R^2\times S^2$ with its product metric and time orientation $N$, and its local chart $U$ with $0<x^1<\pi$ and $0<x^2<2\pi$ as specified above. Let $\nabla$ be the metric-selected connection and $R$, $R_{abcd}$, $\operatorname{Ric}$, $S$, and $G$ its curvature data.

[L1] The product metric is smooth Lorentzian of signature $(-,+,+,+)$ on $M$ with time orientation $N=\partial_0$; its components on $U$ are $\operatorname{diag}(-1,1,\sin^2(x^1),1)$. The metric-selected connection exists and is unique, and on $U$ its Christoffel symbols are $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$, with $g^{ad}$ the matrix inverse of $g_{ab}$ ([[def-gr-smooth-lorentzian-objects]], [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (a), [[def-christoffel-symbols-of-an-affine-connection]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L2] The curvature components in a chart are $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\sum_e(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb})$, and $R$ is a tensor: its components transform between charts, while tensor identities and vanishing are chart-independent; the displayed nonzero component values below refer to the specified product chart ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clauses (a)-(b), [[def-gr-curvature-tensor-and-derived-tensors]] clause (b)).

[L3] The lowered curvature satisfies $R_{abcd}=-R_{bacd}=-R_{abdc}=R_{cdab}$ and $R_{abcd}+R_{acdb}+R_{adbc}=0$; equivalently $R(X,Y)Z=-R(Y,X)Z$ and $g(R(X,Y)Z,W)=-g(R(X,Y)W,Z)$ ([[thm-gr-curvature-algebraic-symmetries]] clauses (a)-(c)).

[L4] The Ricci tensor, scalar curvature and Einstein tensor are $\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$, $S=g^{bd}\operatorname{Ric}_{bd}$ and $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12Sg_{ab}$ ([[def-gr-curvature-tensor-and-derived-tensors]] clause (c)).

[L5] The contracted second Bianchi identity reads $\nabla^aG_{ab}=0$, where $\nabla^aG_{ab}=g^{ae}\nabla_eG_{ab}$ and $\nabla$ acts on tensor components by the metric-compatible derivative ([[thm-gr-second-bianchi-and-divergence-free-einstein]] clause (b), [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (c)).

## Verification

**Proof technique:** direct.

1.1 (Christoffel symbols.) Only $g_{22}=\sin^2(x^1)$ is nonconstant, with $\partial_1g_{22}=2\sin x^1\cos x^1$ and $g^{22}=\sin^{-2}(x^1)$; by [L1] the only possible nonzero symbols are $\Gamma^1{}_{22}=\tfrac12g^{11}(-\partial_1g_{22})=-\sin x^1\cos x^1$ and $\Gamma^2{}_{12}=\Gamma^2{}_{21}=\tfrac12g^{22}\partial_1g_{22}=\cot x^1$, every other symbol vanishing because it contains $\partial_ag_{bc}$ with $a\neq1$ or a constant component. [L1, algebra]

2.1 (Candidate components.) In the coordinate formula of [L2] every term contains a factor $\Gamma^a{}_{\cdot\cdot}$ or a derivative of one; by step 1.1 a term can be nonzero only if all its symbol indices lie in $\{1,2\}$. Hence $R^a{}_{bcd}=0$ whenever one of $a,b,c,d$ equals $0$ or $3$: the derivative terms contain $\Gamma^a{}_{db}$ or $\Gamma^a{}_{cb}$ with a forbidden index in the lower pair, or are annihilated by $\partial_0,\partial_3$, and each product term contains a symbol with a forbidden index. Of the four remaining candidates $R^1{}_{112}$, $R^1{}_{212}$, $R^2{}_{112}$, $R^2{}_{212}$, the first and the last have a repeated index in the first lower pair, so their lowered components vanish by the skew-symmetry of [L3], and $R^2{}_{112}$ is the negative of $R^2{}_{121}$; it therefore suffices to check $R^1{}_{212}$ and $R^2{}_{121}$, which are equal up to lowering and sign. [L2, step 1.1, L3, algebra]

2.2 (The curvature component.) By [L2] and step 1.1, the products in $R^1{}_{212}$ contribute only through $-\sum_e\Gamma^1{}_{2e}\Gamma^e{}_{12}=-\Gamma^1{}_{22}\Gamma^2{}_{12}$, because $\Gamma^1{}_{1e}=0$ for every $e$ kills the first product and the only nonzero term of the second has $e=2$; hence $$R^1{}_{212}=\partial_1\Gamma^1{}_{22}-\partial_2\Gamma^1{}_{12}-\Gamma^1{}_{22}\Gamma^2{}_{12}=-\partial_1(\sin x^1\cos x^1)+\sin x^1\cos x^1\cot x^1 .$$ Substituting and using $\cos x^1\cot x^1=\cos^2x^1/\sin x^1$, $R^1{}_{212}=-({\cos^2}x^1-{\sin^2}x^1)+{\cos^2}x^1=\sin^2(x^1)$. Lowering with $g_{11}=1$ gives $R_{1212}=\sin^2(x^1)$; by [L3], $R_{2121}=R_{1212}$ and the skew-symmetry gives $R^2{}_{121}=\sin^{-2}(x^1)R_{2121}=1$, and the vector-valued forms follow from $R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$. [step 1.1, L2, L3, L4, algebra]

3.1 (Ricci tensor.) By [L4] and step 2.1, the only components of $R_{abcd}$ that can contribute to a contraction are those with all indices in $\{1,2\}$: $\operatorname{Ric}_{11}=g^{22}R_{2121}=\sin^{-2}(x^1)\sin^2(x^1)=1$ and $\operatorname{Ric}_{22}=g^{11}R_{1212}=\sin^2(x^1)$, while $\operatorname{Ric}_{bd}=0$ whenever $b$ or $d$ is $0$ or $3$, because every term of the sum $g^{ac}R_{abcd}$ then contains a component with a forbidden index. [step 2.1, step 2.2, L4, algebra]

4.1 (Scalar curvature and Einstein tensor.) By [L4] and step 3.1, $S=g^{11}\operatorname{Ric}_{11}+g^{22}\operatorname{Ric}_{22}=1+\sin^{-2}(x^1)\sin^2(x^1)=2$. Hence $G_{11}=1-\tfrac12\cdot2\cdot1=0$, $G_{22}=\sin^2(x^1)-\tfrac12\cdot2\cdot\sin^2(x^1)=0$, $G_{00}=0-\tfrac12\cdot2\cdot(-1)=1$, $G_{33}=0-\tfrac12\cdot2\cdot1=-1$, and all off-diagonal components vanish: $G=\operatorname{diag}(1,0,0,-1)$. [step 3.1, L4, algebra]

5.1 (Divergence of the Einstein tensor in the chart.) By [L5] and the formula for the covariant derivative of a tensor, $\nabla_eG_{ab}=\partial_eG_{ab}-\sum_d(\Gamma^d{}_{ea}G_{db}+\Gamma^d{}_{eb}G_{ad})$ on $U$. Step 4.1 gives $\partial_eG_{ab}=0$; and each product vanishes because a nonzero $\Gamma^d{}_{ea}$ has all three indices in $\{1,2\}$, while $G_{db}$ or $G_{ad}$ is nonzero only when both its indices are $0$ or both are $3$, so no index value is available for $d$. Hence $\nabla_eG_{ab}=0$ throughout $U$, and the contracted divergence vanishes term by term there, in accordance with the globally valid identity [L5]. [step 4.1, L5, algebra] ∎

## Remarks

- **What the example checks.** The computation verifies on an explicit curved
  metric the definitions of the Ricci, scalar and Einstein tensors, the
  algebraic symmetries in the form $R_{1212}=R_{2121}$ and
  $R_{1212}+R_{1122}+R_{1221}=0$, and the contracted second Bianchi identity.
  The metric is not Ricci flat and is not flat: $R_{1212}=\sin^2(x^1)$ is
  nonzero throughout the chart $U$, so $\operatorname{Ric}\neq0$ by step 3.1.
- **Relation to the tidal page.** On the equator $x^1=\pi/2$, the
  geodesic and field of [[ex-gr-conjugate-instant-on-a-round-sphere-factor]]
  have $T=\partial_2$ and $J(s)=\sin(s)\partial_1$. The component
  $R(\partial_1,\partial_2)\partial_2=\sin^2(x^1)\partial_1$ computed above,
  together with skew-symmetry, gives the curvature term
  $R(T,J)T=-\sin(s)\partial_1$. That item verifies the Jacobi equation
  and the conjugate instant it entails.
