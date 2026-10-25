---
id: lem-standard-twists-fix-the-complementary-basic-arcs-and-commute
kind: lemma
title: "The standard twists commute and fix the complementary basic arcs"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps:
  - def-basic-arcs-admissible-curves-and-normal-form
  - lem-geometric-intersection-numbers-are-isotopy-invariants
  - def-curves-and-geometric-intersection-numbers-on-the-marked-disk
  - def-boundary-fixed-mapping-class-group-of-a-punctured-disk
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, proof of Lemma 3.6 and Figure 7"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Figure 7 and the proof of Lemma 3.6, printed pp. 20-21"
verification:
  precheck: pass
---

## Statement

In the standard picture of the basic arcs $b_0,\dots,b_m$ and the nested curves
$l_0,\dots,l_{m-1}$ of
[[def-basic-arcs-admissible-curves-and-normal-form]], let $\tau_j$ be the
positive Dehn twist about $l_j$ and let $G$ be the boundary-fixed mapping class
group. Then the twists commute,
$$[\tau_i,\tau_j]=1\qquad\text{in }G\text{ for all }i,j,$$
and
$$\tau_j(b_k)\simeq b_k\qquad\text{for all }k\ne j.$$
Consequently $\tau_j$ induces the identity on every $b_k$ with $k\ne j$, and
for any integers $e_0,\dots,e_{m-1}$ and any $j$ one has
$$\Bigl(\prod_{i=0}^{m-1}\tau_i^{e_i}\Bigr)(b_j)\simeq\tau_j^{e_j}(b_j).$$

## Facts & Assumptions

**Given:** The fixed standard picture with basic arcs $b_0,\dots,b_m$, nested curves $l_0,\dots,l_{m-1}$, their classes $[\tau_j]\in G$, and the isotopy relation of [[def-basic-arcs-admissible-curves-and-normal-form]].

[L1] The standard $l_j$ bounds the disk containing precisely $\{q_j,\ldots,q_m\}$, and their small supporting annuli are pairwise disjoint, contain no marks and meet only $b_j$ among the basic arcs ([[def-basic-arcs-admissible-curves-and-normal-form]]).

[L2] A curve disjoint from the support of a diffeomorphism is fixed pointwise. Thus a curve with such a representative is fixed up to isotopy, since diffeomorphisms transport isotopies ([[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]]).

[L3] Dehn twists about disjoint simple closed curves commute: the two twists have disjointly supported representatives, and the composites $\tau_i\tau_j$ and $\tau_j\tau_i$ agree pointwise because each twist acts as the identity on the support of the other ([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]], [[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]]).

## Proof

**Proof technique:** direct.

1.1 *Commutation.* Choose representatives $T_i,T_j$ of $\tau_i,\tau_j$ supported in closed annular neighbourhoods of $l_i,l_j$; since $l_i\cap l_j=\varnothing$ and the annuli can be chosen disjoint and contained in $D^\circ\setminus\Delta$ [L1], the composites $T_iT_j$ and $T_jT_i$ agree: on the support of $T_i$ the map $T_j$ is the identity, and conversely. Hence $[\tau_i,\tau_j]=1$ in $G$ for all $i,j$, including $i=j$. [L1, L3]

1.2 *The twists fix the complementary arcs.* If $k\ne j$, the fixed basic arc $b_k$ is disjoint from the chosen supporting annulus of $\tau_j$ by [L1]: for $k<j$ it lies outside the enclosed suffix disk, and for $k>j$ it lies inside that disk away from its boundary. Thus the chosen representative is the identity on $b_k$, and $\tau_j(b_k)\simeq b_k$. [L1, L2]

2.1 *The composite clause.* Let $e_0,\dots,e_{m-1}\in\mathbb Z$ and fix $j$. For $i\ne j$ the twist $\tau_i$ fixes $b_j$ up to isotopy by step 1.2; by induction on the number of factors and the commutation of step 1.1, $\bigl(\prod_{i\ne j}\tau_i^{e_i}\bigr)(b_j)\simeq b_j$ and the factors can be moved past $\tau_j^{e_j}$ with the identities $\tau_i\tau_j=\tau_j\tau_i$; hence $\bigl(\prod_i\tau_i^{e_i}\bigr)(b_j)\simeq\tau_j^{e_j}(b_j)$. [step 1.1, step 1.2]

3.1 *Conclusion.* The nested twists commute, fix the complementary basic arcs, and their composites act on $b_j$ through $\tau_j^{e_j}$ alone. No choice principle is used; all incidences are finite checks in the fixed standard picture. [step 1.1, step 1.2, step 2.1] ∎ 