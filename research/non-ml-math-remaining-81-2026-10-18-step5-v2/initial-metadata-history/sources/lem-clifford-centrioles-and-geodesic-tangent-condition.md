---
id: lem-clifford-centrioles-and-geodesic-tangent-condition
kind: lemma
title: Clifford centrioles and geodesic tangent conditions
status: draft
origin: pipeline
deps:
- def-axiom-of-choice
- thm-hopf-rinow
- thm-compact-implies-complete-and-totally-bounded
- def-orthogonal-clifford-families-and-centrioles
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Eschenburg–Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory
      (2021), expanded local argument
    url: https://arxiv.org/pdf/2011.14368v3
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 4
---

## Statement

Assume AC and let $p\ge2$ be even. For an orthogonal negative-square Clifford family $J_1,\ldots,J_l$ on $\mathbb R^p$, use the metric $\langle A,B\rangle=-p^{-1}\operatorname{tr}(AB)$ on $\mathfrak{so}(p)$ and the component $P_j$ of $\widehat P_j$ containing $J_j$. The midpoint component through $J_j$ in $P_{j-1}$ is exactly $P_j$. Each $P_j$ is a compact totally geodesic symmetric submanifold. For $A\in\mathfrak{so}(p)$, the curve $\exp(tA)J_j$ stays in $P_j$ for every $t\in\mathbb R$ if and only if $AJ_j=-J_jA$ and $AJ_i=J_iA$ for $i<j$. Successive midpoint assertions require the indicated antipodes to lie in the same component; no unconditional extendibility is asserted.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed; it implies the countable-choice assumptions in the differential-geometric suppliers. No stronger choice principle is introduced. ([[def-axiom-of-choice]]).

[F2] Under countable choice a nonempty connected complete boundaryless Riemannian manifold has a minimizing geodesic between any two points. Here every indicated component is compact and hence complete. ([[thm-hopf-rinow]], [[thm-compact-implies-complete-and-totally-bounded]]).

[F1] The family relations, normalized trace metric, algebraic loci $\widehat P_j$, and compatibility convention define the spaces used here. ([[def-orthogonal-clifford-families-and-centrioles]]).



**Proof technique:** direct construction.

**Given:** The data and hypotheses in the Statement.

## Proof

**Proof technique:** direct construction.

1.1 Trace cyclicity gives invariance under both left and right translations. For left-invariant fields the Koszul identity reduces to $\nabla_XY=[X,Y]/2$: substituting this expression gives zero torsion and metric compatibility, since $\langle[X,Y],Z\rangle=-\langle Y,[X,Z]\rangle$. It follows by differentiating that geodesics are $\exp(tA)g$, and that parallel translation in a left-trivialized frame is $\exp(-t\operatorname{ad}_A/2)$. Its curvature is $R(X,Y)Z=-\operatorname{ad}_{[X,Y]}Z/4$, so $R(Y,X)X=-\operatorname{ad}_X^2Y/4$. The factor $1/4$ is retained throughout; rescaling the trace inner product does not change this connection. [F1, algebra]


1.2 The maps $r(g)=-g^{-1}$ and $r_i(g)=J_i gJ_i$ are commuting involutive isometries. Their fixed equations are $g^2=-I$ and $gJ_i=-J_i g$. Their common fixed set is smooth near each fixed point: in a normal-coordinate ball, an isometry fixing the center acts by its orthogonal derivative because it preserves geodesics and their initial velocities; hence the fixed set is the exponential of the common fixed linear subspace. The same description proves total geodesy. Its components are closed in the compact group. The ambient geodesic symmetry at a common fixed point commutes with each defining involution, so restricts to its component, proving that the component is symmetric. [F1, construct]


2.1 Differentiating $(\exp(tA)J_j)^2=-I$ at $t=0$ gives $AJ_j=-J_jA$; differentiating anticommutation with $J_i$ gives $AJ_i=J_iA$ for $i<j$. Conversely these relations imply the two defining equations for every $t$, and the continuous curve stays in the component through $J_j$. The fixed-space description in step 1.2 shows that these are exactly its tangent directions. [F1, step 1.2, algebra]


3.1 In the real orthogonal two-plane decomposition of a skew generator, $\exp(A)=-I$ forces all rotation angles to be odd multiples of $\pi$. Consequently every geodesic from $I$ to $-I$ has length at least $\pi$ for the normalized metric. The group $\mathrm{SO}(p)$ is a nonempty connected compact boundaryless manifold; [F2] supplies a minimizing geodesic, so its distance between these endpoints is at least $\pi$. Every orthogonal complex structure $J$ gives $\cos(\pi t)I+\sin(\pi t)J$, of length $\pi$ and midpoint $J$. This proves the first midpoint assertion. Inductively let $K$ anticommute with $J_1,\ldots,J_j$ and set $J'=KJ_j^{-1}$. Then $(J')^2=-I$, $J'$ commutes with $J_i$ for $i<j$, and it anticommutes with $J_j$. Step 2.1 gives a path $\exp(\pi tJ')J_j$ in $P_j$ with midpoint $K$ and endpoints $\pm J_j$; it has length $\pi$. [A1, F1, F2, step 2.1, algebra]


4.1 The component $P_j$ is nonempty, connected, compact and boundaryless by step 1.2; its metric is therefore complete. Since AC implies the countable-choice premise in [F2], Hopf–Rinow supplies a minimizing path in $P_j$ between $J_j$ and $-J_j$ whenever those endpoints lie in that component. Total geodesy makes it $\exp(tA)J_j$, with $\exp(A)=-I$ and the tangent relations of step 2.1. Set $J'=\exp(A/2)$. The odd rotation angles give $(J')^2=-I$; the tangent relations imply that $J'$ anticommutes with $J_j$ and commutes with its predecessors. Its midpoint $K=J'J_j$ therefore anticommutes with all $J_1,\ldots,J_j$. The path constructed from this $K$ in step 3.1 also lies in $P_j$ and has length $\pi$, so the minimum length is $\pi$ and the midpoint correspondence is exact. Taking components gives the assertion. The symmetry at $J_j$ is $g\mapsto J_jg^{-1}J_j$, whose formula is unchanged on replacing $J_j$ by $-J_j$; hence the indicated antipodes are poles. [A1, F2, step 1.2, step 2.1, step 3.1, algebra] ∎
