---
id: def-gr-smooth-lorentzian-objects
kind: definition
title: "Smooth time-oriented Lorentzian four-manifolds: the geometric objects of the model"
status: draft
origin: session
domain: mathematics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-covariant-two-tensor-field, def-smooth-manifold, def-derivation-at-a-point-and-tangent-space, def-smooth-vector-field-as-a-tangent-bundle-section, def-countable-choice, def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, lem-lorentz-form-has-orthonormal-basis]
dependency_roles:
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-countable-choice: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
justified_by: [lem-gr-future-causal-classification-by-a-timelike-field, lem-gr-timelike-fields-define-equal-or-opposite-future-cones]
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2 'the metric again' and 'canonical form of the metric', printed pp. 47-50 (PDF pp. 54-57)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 printed pp. 25-28 (PDF pp. 26-29); Conventions, PDF p. 1"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 3.1.2-3.1.3 printed pp. 93-95 (PDF pp. 100-102)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Definition

Let $M$ be a smooth four-manifold without boundary, so that $M$ is Hausdorff
and second countable and carries a maximal smooth atlas
([[def-smooth-manifold]]). Let $g$ be a smooth covariant $2$-tensor field on $M$
in the sense of [[def-gr-smooth-covariant-two-tensor-field]]. Then $g$ assigns
to every $p\in M$ a bilinear form $g_p:T_pM\times T_pM\to\mathbb R$
([[def-derivation-at-a-point-and-tangent-space]]).

**(a) Lorentzian metric.** The field $g$ is a **Lorentzian metric of signature
$(-,+,+,+)$** on $M$ when it is symmetric and nondegenerate, and at every
$p\in M$ the pair $(T_pM,g_p)$ is a Lorentz vector space of signature
$(-,+,+,+)$ in the sense of [[def-lorentz-form-and-inertia]]: that is, $g_p$ has
inertia $(3,1,0)$, so that some — equivalently every — basis of $T_pM$ in which
the matrix of $g_p$ is diagonal has exactly one negative and three positive
diagonal entries. The pair $(M,g)$ is a **smooth Lorentzian four-manifold** (or
Lorentzian manifold of signature $(-,+,+,+)$). In a smooth chart $(U,x)$ the
**components** of $g$ are the $C^\infty$ functions
$g_{ab}(q)=g_q(\partial_a|_q,\partial_b|_q)$ of
[[def-gr-smooth-covariant-two-tensor-field]], and $g_{ab}=g_{ba}$ by symmetry.
We use indices $a,b,c,d=0,1,2,3$ and the Einstein summation convention, with
components in a chart written as lower-case indexed symbols and equations
between indexed fields understood basis-independently. These conventions are
fixed once for this library and the physical reading of the symbols is recorded
with the framework postulates, separately from this mathematical definition.

**(b) Pointwise causal structure.** For every $p\in M$ the vocabulary of
[[def-causal-classification-of-lorentz-vectors]] applies to the Lorentz vector
space $(T_pM,g_p)$: a tangent vector $v\in T_pM$ is **timelike** when
$g_p(v,v)<0$, **null** when $v\neq0$ and $g_p(v,v)=0$, **spacelike** when
$g_p(v,v)>0$, and **causal** when it is timelike or null. Every nonzero
$v\in T_pM$ has exactly one causal character. The **timelike set**
$T_p:=\{v\in T_pM:g_p(v,v)<0\}$ has exactly two connected components, each
nonempty, open, convex and path-connected; each $g_p$-orthonormal basis
$e_0,e_1,e_2,e_3$ of $T_pM$ satisfies $g_p(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$
for some ordering, so in particular nonzero orthonormal vectors exist at every
point ([[lem-lorentz-form-has-orthonormal-basis]],
[[lem-timelike-cone-has-two-convex-components]]).

**(c) Time orientation.** A **time orientation** of $(M,g)$, also called a
**choice of future cone**, is a smooth vector field $N$ on $M$
([[def-smooth-vector-field-as-a-tangent-bundle-section]], whose tangent-bundle
smooth structure uses the axiom $\mathrm{AC}_\omega$ of
[[def-countable-choice]]; this is the only use of that axiom in this
definition) such that

$$g_p(N_p,N_p)<0\qquad\text{for every }p\in M .$$

The function $p\mapsto g_p(N_p,N_p)$ is $C^\infty$ because $g$ is a smooth
covariant $2$-tensor field and $N$ a smooth field, so the condition is a
pointwise strict inequality between a smooth function and $0$; since
$g_p(N_p,N_p)<0$ implies $N_p\neq0$, a time orientation is nowhere vanishing.
A **time-oriented smooth Lorentzian four-manifold** is a triple $(M,g,N)$
consisting of a smooth Lorentzian four-manifold and a time orientation $N$.

Given a time orientation $N$ and $p\in M$, the vector $N_p$ is timelike, and we
**define** a nonzero causal vector $v\in T_pM$ to be **future-directed** when
$g_p(v,N_p)<0$ and **past-directed** when $g_p(v,N_p)>0$. The classification of
nonzero causal vectors into exactly these two classes, and its agreement with
the two components of the timelike set (the future component is the component
$C_p^+$ containing $N_p$, and the future closed null cone is
$\operatorname{cl}(C_p^+)\setminus\{0\}$), is proved in
[[lem-gr-future-causal-classification-by-a-timelike-field]]; in particular no
nonzero causal $v$ satisfies $g_p(v,N_p)=0$, so the definition is exhaustive and
mutually exclusive. Replacing $N$ by $-N$ reverses every future/past label, and
two time orientations $N,N'$ determine the same future-directed causal vectors
at every point where $g_p(N_p,N'_p)<0$, while they determine opposite ones
where $g_p(N_p,N'_p)>0$, by
[[lem-gr-timelike-fields-define-equal-or-opposite-future-cones]]; that lemma
also shows the sign of $p\mapsto g_p(N_p,N'_p)$ is constant on every connected
component of $M$.

**(d) The inverse metric.** Because $g_p$ is nondegenerate, it induces at each
$p$ an isomorphism $\flat_p:T_pM\to T_p^*M$, $v\mapsto g_p(v,\cdot)$, and an
inverse metric $g_p^{-1}$ on the dual space; the inverse metric, the musical
isomorphisms and the components $g^{ab}$ are defined separately on this page,
where the smoothness of those components is also proved. Neither construction
uses any choice principle beyond the one already recorded in (c).

**Convention and scope.** The physical reading of a smooth time-oriented
Lorentzian four-manifold as a classical spacetime model, and the domain in which
that reading is adopted, are recorded in the framework postulate
`post-gr-spacetime-and-classical-domain`; the words spacetime and event carry no
mathematical content beyond this definition, and this item asserts no claim
about nature. The dimension $4$ and the absence of boundary are part of the
data; nothing in the definition assumes that $M$ is nonempty or connected, and
no completeness, extendibility or maximality property of $(M,g)$ is asserted.
