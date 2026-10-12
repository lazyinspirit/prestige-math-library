---
id: lem-gr-flrw-ricci-and-einstein-tensors
kind: lemma
title: "Ricci, scalar and Einstein tensors of the FLRW metric in product charts"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flrw-model-data, def-gr-flrw-spatial-model, lem-gr-flrw-christoffel-symbols, lem-gr-flrw-metric-and-comoving-data, lem-gr-constant-curvature-three-manifold-ricci, def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, thm-gr-curvature-algebraic-symmetries, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-smooth-covariant-two-tensor-field, def-ricci-curvature, lem-ricci-curvature-is-symmetric-and-basis-independent, def-riemannian-metric-and-riemannian-manifold, def-derivative, def-countable-choice]
dependency_roles:
  def-gr-flrw-model-data: mathematical-premise
  def-gr-flrw-spatial-model: mathematical-premise
  lem-gr-flrw-christoffel-symbols: mathematical-premise
  lem-gr-flrw-metric-and-comoving-data: mathematical-premise
  lem-gr-constant-curvature-three-manifold-ricci: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-ricci-curvature: mathematical-premise
  lem-ricci-curvature-is-symmetric-and-basis-independent: mathematical-premise
  def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  def-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.6.1: R_00 = -3 a-double-dot/a, R_0i = 0, R_ij = (a-double-dot/a + 2(a-dot/a)^2 + 2k/a^2)g_ij, the Ricci scalar and the Einstein tensor components, printed pp. 200-201 (PDF pp. 207-208); section 4.6.2: the Friedmann and acceleration equations (4.66)-(4.67), printed pp. 202-203 (PDF pp. 209-210)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.32)-(8.36): the 00 and ij Einstein equations for the FRW metric and the resulting Friedmann equations, printed pp. 222-223 (PDF pp. 229-230)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3 (3.90)-(3.95): the Ricci tensor, Ricci scalar and Einstein tensor in a chart, printed pp. 81-82 (PDF pp. 88-89)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(I,\Sigma,\gamma,k,a)$ be an FLRW model datum with conversion constant
$c>0$, with spacetime $M=I\times\Sigma$ and metric $g$
([[def-gr-flrw-model-data]], [[def-gr-flrw-spatial-model]]), let $\nabla$ be
its metric-selected connection, and let $R^a{}_{bcd}$,
$\operatorname{Ric}_{ab}$, $S$ and $G_{ab}$ be the curvature components, Ricci
tensor, scalar curvature and Einstein tensor of $\nabla$
([[def-gr-curvature-tensor-and-derived-tensors]],
[[thm-gr-curvature-tensoriality-and-coordinate-formula]],
[[def-gr-metric-selected-connection]]). In a product chart
$(x^0,x^1,x^2,x^3)$ with $x^0=t$, with $\dot a$ the derivative of the scale
factor and $H=\dot a/a$:

**(a)** $\operatorname{Ric}_{00}=-\dfrac{3\ddot a}{a}$,
$\operatorname{Ric}_{0i}=0$, and
$\operatorname{Ric}_{ij}=\Bigl(\dfrac{a\ddot a+2\dot a^2}{c^2}+2k\Bigr)\gamma_{ij}$
for $i,j\in\{1,2,3\}$;

**(b)** $S=6\Bigl(\dfrac{\ddot a}{ac^2}+\dfrac{H^2}{c^2}+\dfrac{k}{a^2}\Bigr)$;

**(c)** $G_{00}=\dfrac{3(\dot a^2+kc^2)}{a^2}$, $G_{0i}=0$, and
$G_{ij}=-\Bigl(\dfrac{2a\ddot a+\dot a^2}{c^2}+k\Bigr)\gamma_{ij}$ for
$i,j\in\{1,2,3\}$.

All displayed component functions are smooth on the chart domain; the
identities are equalities of the components of the respective tensor fields
in the product chart and hold at every point.


## Facts & Assumptions


**Given:** An FLRW model datum with $c>0$, its spacetime, metric, connection $\nabla$, curvature data and a product chart $(x^0,x^1,x^2,x^3)$ with $x^0=t$.

[L1] In the product chart the Christoffel symbols are $\Gamma^0{}_{00}=\Gamma^0{}_{0i}=\Gamma^i{}_{00}=0$, $\Gamma^0{}_{ij}=a\dot a\gamma_{ij}/c^2$, $\Gamma^i{}_{0j}=H\delta^i{}_j$ and $\Gamma^i{}_{jk}={}^{(3)}\Gamma^i{}_{jk}$, where ${}^{(3)}\Gamma$ are the symbols of the spatial metric $\gamma$ ([[lem-gr-flrw-christoffel-symbols]]).

[L2] The curvature components are given by $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\sum_e(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb})$, and $R$ is a smooth $(1,3)$-tensor whose curvature data are independent of the chart used ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (b), [[def-gr-curvature-tensor-and-derived-tensors]], [[thm-gr-curvature-algebraic-symmetries]]).

[L3] $\operatorname{Ric}_{bd}=\sum_{a,c}g^{ac}R_{abcd}$ with $R_{abcd}=\sum_eg_{ae}R^e{}_{bcd}$; equivalently, in every orthonormal frame $\operatorname{Ric}_{bd}=\sum_cR^c{}_{bcd}$, which is the trace $\operatorname{tr}(Z\mapsto R(Z,\partial_d)\partial_b)$ of the curvature endomorphism ([[def-gr-curvature-tensor-and-derived-tensors]] clause (c), [[def-ricci-curvature]], [[lem-ricci-curvature-is-symmetric-and-basis-independent]], [[def-gr-inverse-metric-and-musical-isomorphisms]]). Moreover $S=\sum_{a,b}g^{ab}\operatorname{Ric}_{ab}$ and $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12Sg_{ab}$ ([[def-gr-curvature-tensor-and-derived-tensors]] clause (c)).

[L4] The remaining components of the inverse metric in the product chart are $g^{00}=-c^{-2}$ and $g^{ij}=a(t)^{-2}\gamma^{ij}$, and $\sum_j\gamma^{ij}\gamma_{jl}=\delta^i{}_l$ ([[lem-gr-flrw-christoffel-symbols]] [L2], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L5] The spatial metric $\gamma$ has constant sectional curvature $k$, so its three-dimensional Ricci tensor is $\operatorname{Ric}(\gamma)_{ij}=2k\gamma_{ij}$; in the component convention shared with [L2] this reads $\sum_l{}^{(3)}R^l{}_{ilj}=2k\gamma_{ij}$, where ${}^{(3)}R$ are the curvature components of $\gamma$ computed from the symbols ${}^{(3)}\Gamma$ ([[lem-gr-constant-curvature-three-manifold-ricci]], [[def-ricci-curvature]], [[def-riemannian-metric-and-riemannian-manifold]]).

[L6] $\dot a$ is the derivative of the smooth function $a$ of $t$, $H=\dot a/a$, $\ddot a$ its second derivative, and $\partial_i a=0$ for $i=1,2,3$ in the product chart ([[def-gr-flrw-model-data]], [[def-derivative]]).

## Proof

**Proof technique:** direct substitution of the Christoffel symbols in the curvature formula, organized by the index families, followed by the traces.

1.1 (The $\operatorname{Ric}_{00}$ component.) By [L3], $\operatorname{Ric}_{00}=\sum_cR^c{}_{0c0}$. In the sum, the term $c=0$ is $R^0{}_{000}=0$ because every term of [L2] contains a symbol $\Gamma^{\cdot}{}_{00}$ or $\Gamma^0{}_{0\cdot}$, all of which vanish by [L1]. For $c=i$ the same formula gives $R^i{}_{0i0}=\partial_i\Gamma^i{}_{00}-\partial_0\Gamma^i{}_{i0}+\sum_e(\Gamma^i{}_{ie}\Gamma^e{}_{00}-\Gamma^i{}_{0e}\Gamma^e{}_{i0})=0-\dot H-\sum_e\Gamma^i{}_{0e}\Gamma^e{}_{i0}$, using $\Gamma^i{}_{00}=0$ and $\Gamma^i{}_{i0}=H\delta^i{}_i=H$ from [L1]; the remaining quadratic term is $-\sum_e\Gamma^i{}_{0e}\Gamma^e{}_{i0}=-\sum_m(H\delta^i{}_m)(H\delta^m{}_i)=-H^2$, because the terms with $e=0$ contain the vanishing symbol $\Gamma^0{}_{i0}$. Summing over $c=0,1,2,3$ gives $\operatorname{Ric}_{00}=3(-\dot H-H^2)=-3\ddot a/a$, where $\dot H=\ddot a/a-(\dot a/a)^2=\ddot a/a-H^2$ by [L6]. [L1, L2, L3, L6, algebra]

1.2 (The spatial components.) By [L3], $\operatorname{Ric}_{ij}=\sum_cR^c{}_{icj}=R^0{}_{i0j}+\sum_kR^k{}_{ikj}$. For the term $c=0$, [L2] and [L1] give $R^0{}_{i0j}=\partial_0\Gamma^0{}_{ji}-\partial_j\Gamma^0{}_{0i}+\sum_e(\Gamma^0{}_{0e}\Gamma^e{}_{ji}-\Gamma^0{}_{je}\Gamma^e{}_{0i})=\partial_0\bigl(a\dot a\gamma_{ij}/c^2\bigr)+0-\sum_m\bigl(a\dot a\gamma_{jm}/c^2\bigr)\bigl(H\delta^m{}_i\bigr)$, since $\Gamma^0{}_{0e}=0$ and $\Gamma^0{}_{je}=0$ for $e=0$; with $\partial_0(a\dot a)=a\ddot a+\dot a^2$ and $a\dot aH=\dot a^2$ this is $\bigl(a\ddot a+\dot a^2-\dot a^2\bigr)\gamma_{ij}/c^2=a\ddot a\gamma_{ij}/c^2$. For the spatial terms, substituting [L1] into [L2] and summing over $k$ separates the $\gamma$-symbols from the time-dependent symbols exactly as in the third family of [[lem-gr-flrw-christoffel-symbols]]: the terms with some index $0$ contribute the total $3Ha\dot a\gamma_{ij}/c^2-Ha\dot a\gamma_{ij}/c^2=2\dot a^2\gamma_{ij}/c^2$, and the remaining terms are $\sum_k\bigl(\partial_k{}^{(3)}\Gamma^k{}_{ji}-\partial_j{}^{(3)}\Gamma^k{}_{ki}+\sum_m({}^{(3)}\Gamma^k{}_{km}{}^{(3)}\Gamma^m{}_{ji}-{}^{(3)}\Gamma^k{}_{jm}{}^{(3)}\Gamma^m{}_{ki})\bigr)=\sum_k{}^{(3)}R^k{}_{ikj}=2k\gamma_{ij}$ by [L5]. Adding the two contributions gives $\operatorname{Ric}_{ij}=\bigl(a\ddot a+2\dot a^2\bigr)\gamma_{ij}/c^2+2k\gamma_{ij}$, which is claim (a). [L1, L2, L3, L5, algebra]

2.1 (The mixed components vanish.) By [L3], $\operatorname{Ric}_{0i}=\sum_cR^c{}_{0ci}$. The term $c=0$ vanishes as in step 1.1. For $c=j$, [L2] and [L1] give $R^j{}_{0ji}=\partial_j\Gamma^j{}_{i0}-\partial_i\Gamma^j{}_{j0}+\sum_e(\Gamma^j{}_{je}\Gamma^e{}_{i0}-\Gamma^j{}_{ie}\Gamma^e{}_{j0})=0-0+\sum_m\bigl({}^{(3)}\Gamma^j{}_{jm}H\delta^m{}_i-{}^{(3)}\Gamma^j{}_{im}H\delta^m{}_j\bigr)$, since the terms with $e=0$ contain $\Gamma^0{}_{i0}=\Gamma^0{}_{j0}=0$ and the spatial derivatives of the functions $H(t)\delta^j{}_i$ vanish; substituting $\delta^m{}_i$ and $\delta^m{}_j$ and summing over $j$ gives $H\sum_j({}^{(3)}\Gamma^j{}_{ji}-{}^{(3)}\Gamma^j{}_{ij})=0$ by the symmetry of the spatial symbols. Hence $\operatorname{Ric}_{0i}=0$. [L1, L2, L3, algebra]

2.2 (Scalar curvature.) By [L3] and [L4], $S=g^{00}\operatorname{Ric}_{00}+g^{ij}\operatorname{Ric}_{ij}=-c^{-2}\bigl(-3\ddot a/a\bigr)+a^{-2}\gamma^{ij}\bigl(\tfrac{a\ddot a+2\dot a^2}{c^2}\gamma_{ij}+2k\gamma_{ij}\bigr)$. Using $\gamma^{ij}\gamma_{ij}=3$ by [L4], $S=3\ddot a/(ac^2)+3\bigl(a\ddot a+2\dot a^2\bigr)/(a^2c^2)+6k/a^2=6\bigl(\ddot a/(ac^2)+H^2/c^2+k/a^2\bigr)$, since $a\ddot a/a^2=\ddot a/a$ and $\dot a^2/a^2=H^2$ by [L6]. This is claim (b). [L3, L4, L6, step 1.1, step 1.2, algebra]

3.1 (Einstein tensor and conclusion.) By [L3] and [L4], $G_{00}=\operatorname{Ric}_{00}-\tfrac12Sg_{00}=-3\ddot a/a+\tfrac12c^2S=-3\ddot a/a+3\ddot a/a+3H^2+3kc^2/a^2=3(\dot a^2+kc^2)/a^2$ by step 2.2; $G_{0i}=\operatorname{Ric}_{0i}-\tfrac12Sg_{0i}=0$ by step 2.1; and $G_{ij}=\operatorname{Ric}_{ij}-\tfrac12Sg_{ij}=\bigl(\tfrac{a\ddot a+2\dot a^2}{c^2}+2k\bigr)\gamma_{ij}-3\bigl(\tfrac{\ddot a}{ac^2}+\tfrac{H^2}{c^2}+\tfrac{k}{a^2}\bigr)a^2\gamma_{ij}=-\bigl(\tfrac{2a\ddot a+\dot a^2}{c^2}+k\bigr)\gamma_{ij}$ by steps 1.2 and 2.2. This is claim (c), and it completes the proof of all three claims. [L3, L4, step 1.1, step 2.1, step 1.2, step 2.2, algebra] ∎

## Remarks

- **Conventions.** The curvature sign convention is the one fixed by
  [[def-gr-curvature-tensor-and-derived-tensors]] and
  [[thm-gr-curvature-tensoriality-and-coordinate-formula]]:
  $R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$ and
  $\operatorname{Ric}_{bd}=\sum_cR^c{}_{bcd}$. With this convention the round
  unit two-sphere has positive Ricci curvature and the spatial constant
  $k=+1$ gives $\operatorname{Ric}(\gamma)=+2\gamma$, as recorded in
  [[lem-gr-constant-curvature-three-manifold-ricci]]. Other sources order the
  loop indices differently; no formula of another source is used here without
  checking it against this convention.

- **Flat check.** For $k=0$ and $\gamma$ the Euclidean metric the spatial
  symbols ${}^{(3)}\Gamma$ vanish, so steps 1.1-1.3 reduce to the textbook
  flat-slice expressions; the derivation covers this case without extra
  hypotheses and displays the $k$-dependence explicitly.
