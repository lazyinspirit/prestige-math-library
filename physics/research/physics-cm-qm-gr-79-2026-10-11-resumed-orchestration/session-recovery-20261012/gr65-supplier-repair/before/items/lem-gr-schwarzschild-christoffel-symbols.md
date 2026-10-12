---
id: lem-gr-schwarzschild-christoffel-symbols
kind: lemma
title: "Christoffel symbols of the Schwarzschild exterior metric in product charts"
status: draft
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, lem-gr-connection-conditions-in-chart-components, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-tensor-fields-and-components, def-derivative, def-directional-and-partial-derivatives, def-rational-power, def-countable-choice]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-derivative: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.4.3: the metric ds^2 = -f(r)^2 dt^2 + f(r)^{-2}dr^2 + r^2 dOmega^2 with general f, the connection one-forms and the curvature two-forms, printed pp. 136-138 (PDF pp. 143-145); section 6.1 (6.1): the Schwarzschild metric, printed p. 232 (PDF p. 239)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.14): the nonzero Christoffel symbols of the metric -e^{2alpha}dt^2 + e^{2beta}dr^2 + r^2 dOmega^2, specialised to the Schwarzschild metric (7.29) with -e^{2alpha} = -(1-2GM/r), e^{2beta} = (1-2GM/r)^{-1}, printed pp. 168 and 170 (PDF pp. 175 and 177)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3 (3.21)-(3.23): the Christoffel formula in a chart, printed pp. 59-61 (PDF pp. 66-68)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be the Schwarzschild exterior datum of mass parameter $m_*$
with Schwarzschild radius $s=2G_Nm_*/c^2$ and
$f(r)=1-s/r$ ([[def-gr-schwarzschild-exterior-model]]), and let $\nabla$ be
the metric-selected connection of $g$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]). In every product
chart $(x^0,r,\vartheta,\varphi)$ with $f'=\frac{df}{dr}=s/r^2$, the
Christoffel symbols $\Gamma^a{}_{bc}$ of $\nabla$
([[def-christoffel-symbols-of-an-affine-connection]]) are:

**(a)** $\Gamma^0{}_{01}=\Gamma^0{}_{10}=\dfrac{f'}{2f}$, and
$\Gamma^0{}_{00}=\Gamma^0{}_{11}=\Gamma^0{}_{ij}=0$ for all remaining index
pairs;

**(b)** $\Gamma^1{}_{00}=\dfrac{ff'}{2}$,
$\Gamma^1{}_{11}=-\dfrac{f'}{2f}$, $\Gamma^1{}_{22}=-rf$,
$\Gamma^1{}_{33}=-rf\sin^2\vartheta$, and
$\Gamma^1{}_{01}=\Gamma^1{}_{02}=\Gamma^1{}_{03}=\Gamma^1{}_{12}=\Gamma^1{}_{13}=\Gamma^1{}_{23}=0$;

**(c)** $\Gamma^2{}_{12}=\Gamma^2{}_{21}=\dfrac{1}{r}$,
$\Gamma^2{}_{33}=-\sin\vartheta\cos\vartheta$, and every other symbol with
upper index $2$ vanishes;

**(d)** $\Gamma^3{}_{13}=\Gamma^3{}_{31}=\dfrac{1}{r}$,
$\Gamma^3{}_{23}=\Gamma^3{}_{32}=\cot\vartheta$, and every other symbol with
upper index $3$ vanishes.

All components not listed vanish; equivalently, the only nonzero symbols are
those displayed. For the model value $f(r)=1-s/r$, so that $f'=s/r^2$, the
listed symbols read

$$\Gamma^0{}_{01}=\Gamma^0{}_{10}=\frac{s}{2r^2 f},\qquad \Gamma^1{}_{00}=\frac{s f}{2r^2},\qquad \Gamma^1{}_{11}=-\frac{s}{2r^2f},$$

$$\Gamma^1{}_{22}=-rf,\qquad \Gamma^1{}_{33}=-rf\sin^2\vartheta,\qquad \Gamma^2{}_{12}=\Gamma^3{}_{13}=\frac{1}{r},\qquad \Gamma^2{}_{33}=-\sin\vartheta\cos\vartheta,\qquad \Gamma^3{}_{23}=\cot\vartheta .$$

## Facts & Assumptions

**Given:** The Schwarzschild exterior datum with Schwarzschild radius $s$, the metric $g$ and its metric-selected connection $\nabla$, and a product chart $(x^0,r,\vartheta,\varphi)$ with $0<\vartheta<\pi$.

[L1] In the product chart the metric components are $g_{00}=-f$, $g_{11}=f^{-1}$, $g_{22}=r^2$, $g_{33}=r^2\sin^2\vartheta$ and $g_{ab}=0$ for $a\ne b$, with $f=f(r)>0$ smooth; the metric-selected connection exists and is the unique torsion-free $g$-compatible affine connection ([[def-gr-schwarzschild-exterior-model]], [[lem-gr-schwarzschild-metric-properties]], [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L2] The inverse-metric components are characterised by $\sum_bg^{ab}g_{bc}=\delta^a{}_c$; for the diagonal matrix of [L1] they are $g^{00}=-f^{-1}$, $g^{11}=f$, $g^{22}=r^{-2}$, $g^{33}=r^{-2}\sin^{-2}\vartheta$, all off-diagonal components vanishing ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-tensor-fields-and-components]]).

[L3] In every smooth chart the Christoffel symbols of the metric-selected connection are $\Gamma^a{}_{bc}=\tfrac12\sum_dg^{ad}\bigl(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc}\bigr)$, and they are symmetric in the lower pair, $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (a), [[def-christoffel-symbols-of-an-affine-connection]], [[lem-gr-connection-conditions-in-chart-components]]).

[L4] All metric components of [L1] are independent of $x^0$ and $\varphi$, so $\partial_0g_{bc}=0$ and $\partial_3g_{bc}=0$ for all indices; the coordinate partial derivatives of the components are those of [[def-directional-and-partial-derivatives]], and $\frac{d}{dr}f=f'=\frac{s}{r^2}$ for the model function $f(r)=1-s/r$ by [[def-derivative]] and the power rule.

[L5] On the chart domain $0<\vartheta<\pi$, so $\sin\vartheta>0$, $\sin^2\vartheta>0$ and $r>s>0$; the displayed expressions for $\Gamma$ are smooth there ([[def-rational-power]]).

## Proof

**Proof technique:** substitute the metric components of [L1] and the inverse components of [L2] into the Koszul formula of [L3], organised by the upper index.

1.1 (Metric derivatives and inverse components.) The only nonconstant components of [L1] are $g_{00}=-f(r)$, $g_{11}=f(r)^{-1}$, $g_{22}=r^2$, $g_{33}=r^2\sin^2\vartheta$, and their nonzero coordinate derivatives are $\partial_1g_{00}=-f'$, $\partial_1g_{11}=-f'/f^2$, $\partial_1g_{22}=2r$, $\partial_1g_{33}=2r\sin^2\vartheta$, $\partial_2g_{33}=2r^2\sin\vartheta\cos\vartheta$; by [L4] every $\partial_0$ or $\partial_3$ derivative vanishes. The inverse components are $g^{00}=-1/f$, $g^{11}=f$, $g^{22}=1/r^2$, $g^{33}=1/(r^2\sin^2\vartheta)$, as the diagonal matrix inverse of [L2]. [L1, L2, L4, algebra]

2.1 (The family $\Gamma^0{}_{\cdot\cdot}$.) By [L3], $\Gamma^0{}_{bc}=\tfrac12g^{00}(\partial_bg_{0c}+\partial_cg_{0b}-\partial_0g_{bc})$. If $\{b,c\}$ contains an index in $\{2,3\}$ then $g_{0c}$ or $g_{0b}$ vanishes identically and $\partial_0g_{bc}=0$; the cases $(b,c)=(0,0)$ and $(1,1)$ give $\partial_0g_{00}=0$ and $\partial_0g_{11}=0$; hence only $(b,c)\in\{(0,1),(1,0)\}$ can contribute, with value $\tfrac12g^{00}\partial_1g_{00}=\tfrac12(-1/f)(-f')=f'/(2f)$. This is claim (a). [L3, step 1.1, algebra]

2.2 (The family $\Gamma^1{}_{\cdot\cdot}$.) By [L3], $\Gamma^1{}_{bc}=\tfrac12g^{11}(\partial_bg_{1c}+\partial_cg_{1b}-\partial_1g_{bc})$. If $g_{1c}$ or $g_{1b}$ is nonzero the corresponding term contributes; since $g_{1d}=0$ unless $d=1$, only $b=c=1$ retains a contribution and $\Gamma^1{}_{11}=\tfrac12g^{11}\partial_1g_{11}=\tfrac12f(-f'/f^2)=-f'/(2f)$. The cases $(b,c)=(0,0)$, $(2,2)$ and $(3,3)$ have $\Gamma^1{}_{bc}=-\tfrac12g^{11}\partial_1g_{bc}$, giving $\Gamma^1{}_{00}=\tfrac12f f'=ff'/2$, $\Gamma^1{}_{22}=-\tfrac12f(2r)=-rf$ and $\Gamma^1{}_{33}=-rf\sin^2\vartheta$. Every mixed case $(b\ne c)$ has $\partial_bg_{1c}+\partial_cg_{1b}=0$ and $\partial_1g_{bc}=0$ for the off-diagonal components, hence vanishes. This is claim (b). [L3, step 1.1, algebra]

2.3 (The families $\Gamma^2{}_{\cdot\cdot}$ and $\Gamma^3{}_{\cdot\cdot}$.) For the upper index $2$, [L3] gives $\Gamma^2{}_{bc}=\tfrac12g^{22}(\partial_bg_{2c}+\partial_cg_{2b}-\partial_2g_{bc})$ with $g^{22}=1/r^2$. The only nonzero $g_{2c}$ is $c=2$, so only $b=c=2$ and the pairs with $g_{bc}$ depending on $\vartheta$ contribute: $\Gamma^2{}_{22}=\tfrac12r^{-2}\partial_2g_{22}=0$ and $\Gamma^2{}_{33}=-\tfrac12r^{-2}\partial_2g_{33}=-\tfrac12r^{-2}(2r^2\sin\vartheta\cos\vartheta)=-\sin\vartheta\cos\vartheta$, while $\Gamma^2{}_{12}=\Gamma^2{}_{21}=\tfrac12r^{-2}\partial_1g_{22}=r^{-2}\cdot r=1/r$ and the $(0,0)$ case vanishes. For the upper index $3$, $g^{33}=1/(r^2\sin^2\vartheta)$ and only $g_{33}$ is nonzero among the $g_{3c}$: $\Gamma^3{}_{13}=\Gamma^3{}_{31}=\tfrac12(r^2\sin^2\vartheta)^{-1}\partial_1g_{33}=\tfrac12(r^2\sin^2\vartheta)^{-1}(2r\sin^2\vartheta)=1/r$, $\Gamma^3{}_{23}=\Gamma^3{}_{32}=\tfrac12(r^2\sin^2\vartheta)^{-1}\partial_2g_{33}=\tfrac12(r^2\sin^2\vartheta)^{-1}(2r^2\sin\vartheta\cos\vartheta)=\cot\vartheta$, and $\Gamma^3{}_{33}=\tfrac12g^{33}\partial_3g_{33}=0$ by [L4]; all cases with an index $0$ or $1$ in $b,c$ other than the displayed ones vanish because the corresponding $g_{3c}$ or $g_{bc}$ is constant. Together with the lower-pair symmetry of [L3], these are claims (c) and (d). [L3, L4, step 1.1, algebra]

3.1 (Exhaustiveness and the model values.) The index triples $(a,b,c)$ with $a,b,c\in\{0,1,2,3\}$ split into the families treated in step 1.1 and steps 2.1-2.3; each family was computed from the same unique connection $\nabla$ of [L1], so the displays (a)-(d) list exactly the nonzero symbols of $\nabla$ in the chart. Substituting $f=1-s/r$ and $f'=s/r^2$ of [L4] into the general expressions (a)-(d) gives the second display of the Statement. All symbols are smooth on the chart domain by [L5], and the expressions are those of the metric-selected connection, not of an arbitrary connection. [L3, L4, L5, step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Sign check at the leading order.** For large $r$ one has
  $f=1-s/r+O(r^{-2})$ and $f'=s/r^2$, so
  $\Gamma^1{}_{00}=\tfrac12f f'=\tfrac{s}{2r^2}+O(r^{-3})$; this is the
  coefficient $+\partial_r\Phi$ with the Newtonian potential
  $\Phi=-G_Nm_*/r$ of the flat and Newtonian bridge page, whose spatial
  acceleration reads $-\partial_r\Phi=-G_Nm_*/r^2$ and matches the geodesic acceleration $-c^2\Gamma^1{}_{00}$ computed in the
  weak-field bridge lemma of the flat-and-Newtonian page in the overlapping
  regime. The comparison is made with the round metric of the same chart and
  is not a statement of this lemma.

- **Distance to the Newtonian form.** The symbols here are written with
  $x^0=ct$ as the time coordinate; in the coordinate $t=x^0/c$ the
  components acquire factors of $c$ by the chain rule and the invariant
  statements of the following lemmas are used rather than the raw symbols.
