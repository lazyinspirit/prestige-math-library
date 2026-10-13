---
id: lem-gr-flat-inertial-cone-criterion-and-sums
kind: lemma
title: "The causal cones of the flat model in inertial coordinates, and closure of the future cone under sums"
status: published
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flat-minkowski-model-and-inertial-charts, def-gr-smooth-lorentzian-objects, def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, lem-gr-future-causal-classification-by-a-timelike-field, def-euclidean-inner-product, cor-triangle-inequality-for-inner-product-norm, def-derivation-at-a-point-and-tangent-space]
dependency_roles:
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the chronological and causal relations of Minkowski spacetime in coordinates, section 1.11 printed pp. 15-16"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): light cones and the timelike/null/spacelike classification, printed p. 7 (PDF p. 14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(M,\eta,N)$ be the flat model of
[[def-gr-flat-minkowski-model-and-inertial-charts]], let $y$ be an inertial
chart, let $p\in M$, and let $v\in T_pM$ have coordinates
$v=v^0\partial_0+\dots+v^3\partial_3$ in the chart
([[def-derivation-at-a-point-and-tangent-space]]). Write
$v_s:=(v^1,v^2,v^3)$ and $|v_s|:=\sqrt{(v^1)^2+(v^2)^2+(v^3)^2}$
([[def-euclidean-inner-product]]). Then:

**(a)** For every nonzero $v\in T_pM$: $v$ is future timelike iff
$v^0>|v_s|$, and past timelike iff $v^0<-|v_s|$; $v$ is future null iff
$0<v^0=|v_s|$, and past null iff $0<-v^0=|v_s|$; $v$ is future causal iff
$v^0\ge|v_s|$, past causal iff $v^0\le-|v_s|$, and causal iff
$|v^0|\ge|v_s|$; and every nonzero future causal $v$ satisfies $v^0>0$.

**(b)** $C_p^+=\{v\in T_pM:v^0>|v_s|\}$ and
$\operatorname{cl}(C_p^+)=\{v\in T_pM:v^0\ge|v_s|\}$; the future-directed
causal vectors are exactly $\operatorname{cl}(C_p^+)\setminus\{0\}
=\{v\neq0:v^0\ge|v_s|\}$.

**(c)** If $v,w\in T_pM$ are future causal, then $v+w$ is future causal; if
one of $v,w$ is future timelike and the other is future causal, then $v+w$ is
future timelike. Equivalently
$C_p^++\operatorname{cl}(C_p^+)\subseteq C_p^+$ and
$\operatorname{cl}(C_p^+)+\operatorname{cl}(C_p^+)
\subseteq\operatorname{cl}(C_p^+)$.

## Facts & Assumptions

**Given:** The flat model, an inertial chart, a point, and vectors with their chart coordinates as in the statement.

[L1] In an inertial chart the components of $\eta$ are the constant matrix $\operatorname{diag}(-1,1,1,1)$ and the first coordinate vector field $\partial_0$ is future-directed at every point; consequently the coordinate frame at $p$ is $\eta_p$-orthonormal, and for vectors with coordinates $v^a,w^a$ at $p$ one has $\eta_p(v,w)=-(v^0w^0)+\sum_{i=1}^3v^iw^i$, in particular $\eta_p(v,v)=-(v^0)^2+|v_s|^2$ ([[def-gr-flat-minkowski-model-and-inertial-charts]] clauses (b), (c) and (e), [[def-gr-smooth-lorentzian-objects]]).

[L2] For a Lorentz vector space with an $\eta$-orthonormal ordered basis $(e_0,\dots,e_3)$ and coordinates $v=\sum_av^ae_a$: the timelike set satisfies $T=T_+\cup T_-$ with $T_+=\{v:v^0>|v_{\mathrm{vec}}|\}$ and $T_-=\{v:v^0<-|v_{\mathrm{vec}}|\}$; the sets $T_+$ and $T_-$ are exactly the two connected components of $T$ and are convex; and $\operatorname{cl}(T_+)=\{v:v^0\ge|v_{\mathrm{vec}}|\}$, $\operatorname{cl}(T_-)=\{v:v^0\le-|v_{\mathrm{vec}}|\}$ ([[lem-timelike-cone-has-two-convex-components]]).

[L3] At $p$ the future cone $C_p^+$ is the component of the timelike set containing $N_p$ and equals $\{v:\eta_p(v,v)<0,\ \eta_p(v,N_p)<0\}$; the future-directed causal vectors are exactly $\operatorname{cl}(C_p^+)\setminus\{0\}$, and a nonzero causal $v$ is future-directed iff $\eta_p(v,N_p)<0$ ([[lem-gr-future-causal-classification-by-a-timelike-field]] clauses 3 and 4, [[def-time-orientation-and-future-causal-sets]]).

[L4] Causal character: $v$ is timelike iff $\eta_p(v,v)<0$, null iff $v\neq0$ and $\eta_p(v,v)=0$, spacelike iff $\eta_p(v,v)>0$, and causal iff timelike or null; the zero vector has no causal character ([[def-causal-classification-of-lorentz-vectors]]).

[L5] For all $u,w\in\mathbb R^3$ one has $|u+w|\le|u|+|w|$, and $|u|\ge0$ with $|u|=0$ iff $u=0$ ([[cor-triangle-inequality-for-inner-product-norm]], [[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct.

1.1 (The coordinate frame is orthonormal.) By [L1] the coordinate frame $(\partial_0|_p,\dots,\partial_3|_p)$ of the inertial chart is $\eta_p$-orthonormal, so it is an $\eta_p$-orthonormal ordered basis of $T_pM$ in the sense of [L2]; hence the chart coordinates $v^a$ of $v$ are its coordinates in that basis, and $\eta_p(v,v)=-(v^0)^2+|v_s|^2$ and $\eta_p(v,w)=-(v^0w^0)+\sum_{i=1}^3v^iw^i$. [given, L1, L2]

2.1 (Which component is the future cone.) The first coordinate field $\partial_0$ of the chart is future-directed by the definition of an inertial chart, so $\eta_p(\partial_0|_p,N_p)<0$ by [L1] and [L3]; the vector $\partial_0|_p$ has coordinates $(1,0,0,0)$, which satisfies $1>|0|=0$, so $(1,0,0,0)$ lies in the coordinate image of $C_p^+$. By [L2] the coordinate image of the timelike set is $T_+\cup T_-$, where $T_+$ and $T_-$ are exactly its two components, and $(1,0,0,0)\in T_+$; since the coordinate image of the component $C_p^+$ is a component and contains $(1,0,0,0)$, it equals $T_+$. Thus the future cone has coordinate image $\{v:v^0>|v_s|\}$ and the past cone has coordinate image $\{v:v^0<-|v_s|\}$. [step 1.1, L2, L3]

3.1 (The criterion, timelike and null cases.) Let $v\neq0$ with coordinates $(v^0,v_s)$. By [L1] and [L4], $v$ is timelike iff $-(v^0)^2+|v_s|^2<0$ iff $|v^0|>|v_s|$, and null iff $|v^0|=|v_s|$. Combining with step 2.1: $v$ is future timelike iff $v^0>|v_s|$ and past timelike iff $v^0<-|v_s|$. For the null case, the future-directed null vectors are the nonzero null vectors in $\operatorname{cl}(C_p^+)$ by [L3], whose coordinate image is $\{v:v^0\ge|v_s|\}$ by [L2]; a nonzero null $v$ satisfies $|v^0|=|v_s|$, and $v^0\ge|v_s|$ then gives $v^0=|v_s|$, which forces $v^0>0$ (if $v^0=0$ then $v_s=0$ and $v=0$, excluded). Conversely $0<v^0=|v_s|$ makes $v$ a nonzero null vector in $\operatorname{cl}(C_p^+)$, hence future-directed by [L3]. So $v$ is future null iff $0<v^0=|v_s|$, and by the same argument in the past cone $v$ is past null iff $0<-v^0=|v_s|$. [step 2.1, L1, L2, L3, L4]

4.1 (The criterion, causal case.) By [L4] and step 3.1, a nonzero $v$ is causal iff it is timelike or null iff $|v^0|\ge|v_s|$. It is future causal iff it is future timelike or future null iff $v^0>|v_s|$ or $0<v^0=|v_s|$ iff $v^0\ge|v_s|$; and if $v\neq0$ satisfies $v^0\ge|v_s|$, then $v^0>0$, because $v^0\le0$ would give $|v_s|\le v^0\le0$, hence $v_s=0$ and $v^0=0$, that is, $v=0$. Similarly $v$ is past causal iff $v^0\le-|v_s|$. This proves (a). [step 3.1, L4, algebra]

5.1 (The cones.) By step 2.1 the coordinate image of $C_p^+$ is $T_+=\{v:v^0>|v_s|\}$, which proves the first identity of (b), and by [L2] its closure has coordinate image $\operatorname{cl}(T_+)=\{v:v^0\ge|v_s|\}$, which proves the second. By [L3] the future-directed causal vectors are exactly $\operatorname{cl}(C_p^+)\setminus\{0\}$, which by step 4.1 and the positivity statement is $\{v\neq0:v^0\ge|v_s|\}$. This proves (b). [step 2.1, step 4.1, L2, L3]

5.2 (Closure under sums.) Let $v,w$ be future causal. By (a) of step 4.1, $v^0\ge|v_s|$ and $w^0\ge|w_s|$, and by the positivity statement $v^0>0$ and $w^0>0$. By the triangle inequality [L5], $(v+w)^0=v^0+w^0\ge|v_s|+|w_s|\ge|v_s+w_s|$, so $v+w$ is nonzero and future causal by step 4.1. If in addition $v$ is future timelike, then $v^0>|v_s|$ and $(v+w)^0>|v_s|+|w_s|\ge|v_s+w_s|$, so $v+w$ is future timelike by step 3.1; the same argument applies with the roles of $v$ and $w$ interchanged. This proves (c). [step 3.1, step 4.1, L5]

6.1 (Conclusion.) Statements (a), (b) and (c) are proved, and the argument used only the components of $\eta$ in one inertial chart and the general structure of the timelike cone, so it applies to every inertial chart. [step 4.1, step 5.1, step 5.2] ∎

## Remarks

- **What the proof uses.** Only the constant components of $\eta$ in an inertial chart and the two-component structure of the timelike cone of a Lorentz vector space; no affine structure beyond the chart coordinates is needed.
- **Time orientation.** The orientation enters through the future-directedness of $\partial_0$ in an inertial chart, which selects $T_+$ as the future cone in step 2.1. Replacing $N$ by $-N$ would reverse the future and past cones and interchange the two coordinate inequalities.
- **Scope.** The statement is pure mathematics about the flat model, with no physical premise and no empirical content.
