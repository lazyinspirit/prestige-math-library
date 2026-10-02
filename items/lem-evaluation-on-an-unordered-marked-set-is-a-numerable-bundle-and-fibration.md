---
id: lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration
kind: lemma
title: "Evaluation is a numerable bundle and Hurewicz fibration"
status: published
origin: pipeline
landmark: true
deps: [def-axiom-of-choice,
       def-unordered-configuration-space,
       def-ordered-configuration-space,
       def-locally-trivial-fiber-bundle,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       lem-boundary-fixed-disk-evaluation-has-continuous-local-point-motion-sections,
       cor-metric-spaces-admit-subordinate-partitions-of-unity,
       thm-choice-implies-dependent-implies-countable-choice,
       thm-numerable-fiber-bundles-are-hurewicz-fibrations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3 and the proof of Theorem 1, author manuscript pp. 5-7"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Dale Husemoller, Fibre Bundles, Chapter 4 discussion of numerable bundles"
      url: "https://doi.org/10.1007/978-1-4757-2261-1"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $D^2\subseteq\mathbb R^2$ be the closed unit disc,
let $Q_n=(q_1,\dots,q_n)$ be the fixed base configuration of
[[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]], let

$$E:=\operatorname{Homeo}^+(D^2,\partial D^2),\qquad B:=C_n(\operatorname{int}D^2),\qquad F:=\operatorname{Homeo}^+(D^2,\partial D^2;Q_n),$$

with the compact-open topology on the homeomorphism groups, and let
$\operatorname{ev}:E\to B$, $\operatorname{ev}(h):=[h(q_1),\dots,h(q_n)]$, be the
evaluation map. Then:

1. $\operatorname{ev}$ is a locally trivial fiber bundle with fiber $F$ in the
   sense of [[def-locally-trivial-fiber-bundle]];
2. the bundle is numerable: the same charts come with a locally finite
   partition of unity whose supports are subordinate to their domains;
3. consequently $\operatorname{ev}$ is a Hurewicz fibration.

All three assertions include $n=0$, where $B$ is a one-point space and the
bundle is trivial.

## Facts & Assumptions

**Given:** The Axiom of Choice, the closed disc $D^2$, the fixed marked tuple $Q_n$, and the evaluation map $\operatorname{ev}$.

[L1] The evaluation map $\operatorname{ev}:\operatorname{Homeo}^+(D^2,\partial D^2)\to C_n(\operatorname{int}D^2)$ is surjective, and every configuration has an open neighbourhood $U$ with a continuous section $s:U\to\operatorname{Homeo}^+(D^2,\partial D^2)$ satisfying $\operatorname{ev}\circ s=\operatorname{id}_U$ ([[lem-boundary-fixed-disk-evaluation-has-continuous-local-point-motion-sections]]).

[L2] A locally trivial fiber bundle with fiber $F$ is a continuous $p:E\to B$, an open cover $(U_i)$ and homeomorphisms $\theta_i:p^{-1}(U_i)\to U_i\times F$ with $\operatorname{pr}_1\theta_i=p$; it is numerable when the data include a locally finite partition of unity $(\rho_i)$ with $\operatorname{supp}\rho_i\subseteq U_i$ and sum one ([[def-locally-trivial-fiber-bundle]]).

[L3] Assume AC and DC: every open cover of a metric space admits a locally finite partition of unity subordinate to it ([[cor-metric-spaces-admit-subordinate-partitions-of-unity]]).

[L4] The Axiom of Choice implies the Axiom of Dependent Choice, which implies countable choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[L5] Assume AC: every numerable fiber bundle, with its supplied ordinary local product charts and support-subordinate locally finite partition of unity, is a Hurewicz fibration in all ordinary spaces ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]).

[L6] The Axiom of Choice selects an element from each member of every family of nonempty sets ([[def-axiom-of-choice]]).

[L7] $C_n(X)=F_n(X)/S_n$ with quotient map $p_n$, points written $[x]$, and $F_n(X)$ consists of the tuples with pairwise distinct coordinates ([[def-unordered-configuration-space]], [[def-ordered-configuration-space]]).

[L8] $\operatorname{Homeo}^+(D^2,\partial D^2;Q_n)$ is the stabiliser of the marked set and $\operatorname{Homeo}^+(D^2,\partial D^2)$ is the group of boundary-fixing homeomorphisms, both with the compact-open topology, and composition is continuous ([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]).

## Proof
**Proof technique:** direct. 

1.1 *Local product charts.* Let $\xi\in B$ and let $U_\xi$ and $s_\xi$ be the neighbourhood and continuous section provided by [L1]; the evaluation map is continuous because for $h,h'\in E$ one has $\lVert h(q_i)-h'(q_i)\rVert_2\le d(h,h')$ for all $i$ and the quotient map $F_n(\operatorname{int}D^2)\to B$ of [L7] is continuous. Define $$\theta_\xi:\operatorname{ev}^{-1}(U_\xi)\longrightarrow U_\xi\times F,\qquad \theta_\xi(h):=\bigl(\operatorname{ev}(h),\,s_\xi(\operatorname{ev}(h))^{-1}\circ h\bigr).$$ For $h\in\operatorname{ev}^{-1}(U_\xi)$ the composite $s_\xi(\operatorname{ev}(h))^{-1}\circ h$ lies in $F$: applying it to the set $Q_n$ gives $s_\xi(\operatorname{ev}(h))^{-1}(\operatorname{ev}(h))=Q_n$ because $s_\xi(\operatorname{ev}(h))(Q_n)=\operatorname{ev}(h)$ as sets. The map $\theta_\xi$ is continuous, being built from $\operatorname{ev}$, the continuous section, inversion and composition, which are continuous by [L8]; it satisfies $\operatorname{pr}_1\circ\theta_\xi=\operatorname{ev}$; and it is a bijection with inverse $(\xi,g)\mapsto s_\xi(\xi)\circ g$, because $\operatorname{ev}(s_\xi(\xi)\circ g)=[s_\xi(\xi)(g(Q_n))]=[s_\xi(\xi)(Q_n)]=\xi$ and $s_\xi(\xi)^{-1}\circ(s_\xi(\xi)\circ g)=g$, while the other composite is the identity by the same computation. Hence the maps $\theta_\xi$ are local product charts over the open cover $\{U_\xi\}$ and $\operatorname{ev}$ is a locally trivial fiber bundle with fiber $F$ as in [L2]; the fibre over $[Q_n]$ is exactly $F$ by [L8]. [L1, L2, L7, L8] 

2.1 *Numerating data.* For $n\ge1$, give the ordered configuration space the metric $d(x,y)=\max_i\lVert x_i-y_i\rVert_2$ and set $$d_B([x],[y]):=\min_{\sigma\in S_n}d(x,\sigma y).$$ Coordinate permutations are isometries, so this is independent of representatives and symmetric. The finite minimum is zero exactly for equal orbits; composing minimizing permutations and applying the triangle inequality for $d$ gives the triangle inequality for $d_B$. Moreover the preimage of the $d_B$-ball about $[x]$ of radius $r$ is the union of the permutation translates of the ordered $r$-ball about $x$, hence is open. Conversely, the preimage of a quotient-open neighbourhood of $[x]$ contains an ordered ball about $x$ and is permutation-invariant, so it contains that union. Thus $d_B$ gives exactly the quotient topology of [L7]. For $n=0$, $B$ is a singleton and is metrizable. The family $\{U_\xi\}$ is therefore an open cover of the metric space $B$. By [L6] choose one such pair $(U_\xi,s_\xi)$ for each $\xi\in B$; using AC we also obtain DC and countable choice by [L4], so [L3] supplies a locally finite partition of unity $(\rho_\xi)$ subordinate to the cover with all sums equal to one. Since each support satisfies $\operatorname{supp}\rho_\xi\subseteq U_\xi$, the charts of step 1.1 together with this partition are exactly the numerating data required in [L2]; hence the bundle is numerable. [L2, L3, L4, L6, L7, step 1.1, algebra] 

3.1 *The fibration.* By [L5] and AC the numerable bundle just produced, with its displayed charts and partition of unity, is a Hurewicz fibration. The same argument applies for $n=0$, where $B$ is a one-point space: the unique chart identifies $E$ with the fibre, the constant partition with value one is locally finite, and the bundle over a point is a Hurewicz fibration. [L2, L5, step 1.1, step 2.1] ∎

## Remarks

- Choice selects one section chart for each base configuration. The Axiom of Choice also implies dependent choice, used for the subordinate partition of unity, and the published numerable-bundle theorem uses it to well-order finite chart words.
- The local section charts were selected once for the open cover in step 2.1. The partition and numerable-bundle theorem then supply the homotopy lifting property without choosing a separate lift for each path.
