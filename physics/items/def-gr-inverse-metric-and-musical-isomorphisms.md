---
id: def-gr-inverse-metric-and-musical-isomorphisms
kind: definition
title: "The inverse metric, musical isomorphisms and index raising"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-algebraic-dual-and-linear-functional, def-differential-of-a-smooth-map, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, def-trace-of-an-endomorphism, lem-timelike-cone-has-two-convex-components]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-algebraic-dual-and-linear-functional: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
justified_by: [lem-gr-inverse-metric-is-smooth]
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.1 on the inverse metric and the isomorphism between vectors and covectors, printed pp. 25-27 (PDF pp. 26-28)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2, the inverse metric and index manipulation, printed pp. 47-48 (PDF pp. 54-55)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.1.3 on the metric as an isomorphism between vectors and covectors, printed pp. 94-96 (PDF pp. 101-103)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold and let
$p\in M$ ([[def-gr-smooth-lorentzian-objects]]). The cotangent space $T_p^*M$ is
the algebraic dual of $T_pM$ ([[def-algebraic-dual-and-linear-functional]]).

**Musical isomorphisms.** Define the **flat map**

$$\flat_p:T_pM\longrightarrow T_p^*M,\qquad \flat_p(v):=g_p(v,\cdot),$$

so that $\flat_p(v)(w)=g_p(v,w)$; it is $\mathbb R$-linear by bilinearity of
$g_p$. Its kernel is $\{v:g_p(v,w)=0\text{ for all }w\}=\{0\}$ because $g_p$ is
nondegenerate, and $\dim_{\mathbb R}T_pM=\dim_{\mathbb R}T_p^*M=4$ since the
coordinate derivations of a chart form a basis of $T_pM$
([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]); hence
$\flat_p$ is a linear isomorphism and has an inverse
$\sharp_p:T_p^*M\to T_pM$.

**Inverse metric.** The **inverse metric** at $p$ is the symmetric bilinear form

$$g_p^{-1}:T_p^*M\times T_p^*M\longrightarrow\mathbb R,\qquad g_p^{-1}(\alpha,\beta):=g_p(\sharp_p\alpha,\sharp_p\beta).$$

It is symmetric because $g_p$ is, and it is nondegenerate: if
$g_p^{-1}(\alpha,\beta)=0$ for all $\beta$, then $g_p(\sharp_p\alpha,\cdot)=0$,
so $\sharp_p\alpha=0$ and hence $\alpha=0$.

**Components in a chart.** Let $(U,x)$ be a smooth chart and
$g_{ab}(q)=g_q(\partial_a|_q,\partial_b|_q)$ the components of $g$; let
$dx^a|_q$ be the differential of the coordinate function $x^a$ at $q$
([[def-differential-of-a-smooth-map]]), so that
$dx^a|_q(\partial_b|_q)=\partial_b|_q(x^a)=\delta^a{}_b$. Define the components
of the inverse metric in this chart by

$$g^{ab}(q):=g_q^{-1}\bigl(dx^a|_q,\,dx^b|_q\bigr),\qquad q\in U,$$

so that $\sharp_q(dx^a|_q)=\sum_bg^{ab}(q)\,\partial_b|_q$; equivalently
$(g^{ab}(q))$ is the inverse matrix of $(g_{ab}(q))$ at every $q$, that is

$$g^{ac}(q)\,g_{cb}(q)=\delta^a{}_b,\qquad g_{ac}(q)g^{cb}(q)=\delta_a{}^b,$$

because $g_q(\sharp_qdx^a|_q,\partial_c|_q)=dx^a|_q(\partial_c|_q)=\delta^a{}_c$
and also $g_q(\sharp_qdx^a|_q,\partial_c|_q)=\sum_bg^{ab}(q)g_{bc}(q)$. In
particular $g^{ab}=g^{ba}$. The components $g^{ab}$ depend smoothly on $q$;
this is proved in [[lem-gr-inverse-metric-is-smooth]].

**Raising, lowering and metric trace.** Let $A$ be a smooth symmetric covariant
$2$-tensor field on an open set $V\subseteq M$
([[def-gr-smooth-covariant-two-tensor-field]]). At each $p\in V$ define the
endomorphism

$$A^\sharp_p:T_pM\to T_pM,\qquad A^\sharp_p(v):=\sharp_p\bigl(A_p(v,\cdot)\bigr),$$

characterized by $g_p(A^\sharp_p(v),w)=A_p(v,w)$ for all $w\in T_pM$; it is
self-adjoint for $g_p$ because $A_p$ is symmetric. Its **metric trace** is

$$\operatorname{tr}_g(A)(p):=\operatorname{tr}\bigl(A^\sharp_p\bigr)$$

with the trace of an endomorphism as in [[def-trace-of-an-endomorphism]]. In a
chart the raised, mixed and doubly raised components are

$$A^{ab}:=g^{ac}g^{bd}A_{cd},\qquad A^a{}_b:=g^{ac}A_{cb},\qquad\text{and}\qquad \operatorname{tr}_g(A)=g^{ab}A_{ab},$$

the last identity obtained by evaluating in a $g_p$-orthonormal basis
$(e_0,e_1,e_2,e_3)$, where $g_p(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ by
[[lem-timelike-cone-has-two-convex-components]] so that
$g^{ab}A_{ab}=\sum_a g^{aa}A_{aa}=-A(e_0,e_0)+A(e_1,e_1)+A(e_2,e_2)+A(e_3,e_3)$,
which is the trace of the endomorphism $v\mapsto\sharp_p(A_p(v,\cdot))$ in that
basis. All these operations are pointwise and depend only on $g$, $A$ and the
duality pairing, not on a chart.

**Conventions.** Raising and lowering apply to one index at a time and preserve
index order; $A_{ab}$, $A^a{}_b$ and $A^{ab}$ denote the same tensor $A$ with
indices positioned by $g$. The musical isomorphisms and the inverse metric are
defined for every smooth Lorentzian four-manifold of this library; no choice
principle is used in this definition, every ingredient being pointwise linear
algebra over $\mathbb R$ together with the pointwise nondegeneracy of $g_p$.
