---
id: ex-gr-mixed-tensor-transformation-and-contraction
kind: example
title: "A mixed tensor field: components in two charts and the invariance of its trace"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-tensor-fields-and-components, def-gr-smooth-lorentzian-objects, lem-gr-tensor-component-transformation-law, lem-gr-contraction-of-smooth-tensor-fields]
dependency_roles:
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-tensor-component-transformation-law: mathematical-premise
  lem-gr-contraction-of-smooth-tensor-fields: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2 'the tensor transformation law' (printed pp. 46-47; PDF pp. 53-54) and Ch. 1 'index manipulation' (printed pp. 17-19; PDF pp. 24-26)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "J. M. Lee, Introduction to Smooth Manifolds, 2nd ed., Ch. 12 'Tensors and Tensor Fields on Manifolds', printed pp. 316-324"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ carry the flat Lorentzian metric
$g=\operatorname{diag}(-1,1,1,1)$ and the time orientation $N=\partial_0$, so
that $(M,g,N)$ is a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]); here $g$ and $N$ enter only to place
the charts and the tensor field in the setting of the cited definition and
take no part in the computation. Let $x=(x^0,x^1,x^2,x^3)$ be the identity
chart and let the chart $y=(y^0,y^1,y^2,y^3)$ be defined by

$$y^0=x^0,\qquad y^1=x^1+x^0,\qquad y^2=x^2,\qquad y^3=x^3 .$$

Define a type $(1,1)$ tensor field $T$ on $M$ by its components in the $x$
chart,

$$T^0{}_1:=1,\qquad T^2{}_3:=x^1,\qquad T^a{}_b:=0\text{ otherwise}.$$

Then $T$ is a smooth type $(1,1)$ tensor field. Its components in the chart
$y$ are

$$T'^0{}_0=-1,\quad T'^0{}_1=1,\quad T'^1{}_0=-1,\quad T'^1{}_1=1,\quad T'^2{}_3=y^1-y^0,\quad\text{others }0,$$

and its trace computed in the two charts agrees: it is $0$ in both, as the
chart-independence of contraction requires.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g,N)$ with time orientation $N=\partial_0$, the charts $x$ and $y$ on $\mathbb R^4$, and the component data $T^0{}_1=1$, $T^2{}_3=x^1$, all other $T^a{}_b=0$.

[L1] A smooth type $(1,1)$ tensor field has component functions $T^a{}_b(q)=T_q(dx^a|_q,\partial_b|_q)$ in each chart, and it is smooth exactly when these components are $C^\infty$ in every smooth chart ([[def-gr-tensor-fields-and-components]]).

[L2] In overlapping charts the components of a smooth type $(r,s)$ tensor field satisfy $T'^{a_1\cdots a_r}{}_{b_1\cdots b_s}(y(q))=\sum_{c,d}\bigl(\prod_i\frac{\partial y^{a_i}}{\partial x^{c_i}}\bigr)\bigl(\prod_j\frac{\partial x^{d_j}}{\partial y^{b_j}}\bigr)T^{c_1\cdots c_r}{}_{d_1\cdots d_s}(x(q))$ ([[lem-gr-tensor-component-transformation-law]]).

[L3] The trace $\operatorname{tr}T$ of a smooth type $(1,1)$ field is a smooth function whose value in every smooth chart is $\sum_aT^a{}_a$ ([[lem-gr-contraction-of-smooth-tensor-fields]]).

## Verification

**Proof technique:** direct.

1.1 The two maps $y$ and $x=\bigl(y^0,y^1-y^0,y^2,y^3\bigr)$ are mutually inverse smooth maps between open subsets of $\mathbb R^4$, so $x$ and $y$ are smooth charts on $\mathbb R^4$. Their Jacobians are constant: $\frac{\partial y^a}{\partial x^c}$ is $1$ for $(a,c)\in\{(0,0),(1,0),(1,1),(2,2),(3,3)\}$ and $0$ otherwise, while $\frac{\partial x^d}{\partial y^b}$ is $1$ for $(d,b)\in\{(0,0),(1,1),(2,2),(3,3)\}$ and $-1$ for $(d,b)=(1,0)$, and $0$ otherwise. [given, algebra]

1.2 The components $T^a{}_b$ are $1$, $x^1$ and $0$, hence $C^\infty$ on $\mathbb R^4$; by [L1] the field $T$ is a smooth type $(1,1)$ tensor field. [given, L1]

2.1 By [L2] and step 1.1, $T'^a{}_b=\sum_{c,d}\frac{\partial y^a}{\partial x^c}\frac{\partial x^d}{\partial y^b}T^c{}_d=\frac{\partial y^a}{\partial x^0}\frac{\partial x^1}{\partial y^b}+(y^1-y^0)\frac{\partial y^a}{\partial x^2}\frac{\partial x^3}{\partial y^b}$, where $x^1=y^1-y^0$. Evaluating the two terms: at $(a,b)=(0,0)$ we get $1\cdot(-1)+0=-1$; at $(a,b)=(0,1)$ we get $1\cdot1+0=1$; at $(a,b)=(1,0)$ we get $1\cdot(-1)+0=-1$; at $(a,b)=(1,1)$ we get $1\cdot1+0=1$; at $(a,b)=(2,3)$ we get $0+(y^1-y^0)\cdot1\cdot1=y^1-y^0$; all other entries vanish because the corresponding Jacobian entries are $0$. [step 1.1, L2, algebra]

3.1 In the $x$ chart the diagonal components are $T^0{}_0=T^1{}_1=T^2{}_2=T^3{}_3=0$, so $\sum_aT^a{}_a=0$; in the $y$ chart, step 2.1 gives diagonal entries $T'^0{}_0=-1$ and $T'^1{}_1=1$ with $T'^2{}_2=T'^3{}_3=0$, so $\sum_aT'^a{}_a=-1+1+0+0=0$. The two values agree, as required by [L3]. [step 2.1, L3, algebra] ∎

## Remarks

The example also shows that the diagonal components individually are not
invariant: the trace is the chart-independent quantity. The mixed field $T$
has both contravariant and covariant slots, and step 2.1 uses one Jacobian
factor of each kind, in contrast to the purely covariant case.
