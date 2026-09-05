---
id: lem-extend-a-degree-zero-transformation-through-one-dimension-shift
kind: lemma
title: "A partial morphism of delta functors extends through one dimension shift"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-natural-transformation, def-effaceable-homological-delta-functor-in-positive-degrees, def-effaceable-cohomological-delta-functor-in-positive-degrees, lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle, lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
    - title: "The Stacks Project, Section 12.12: Cohomological delta-functors"
      url: "https://stacks.math.columbia.edu/tag/010P"
pipeline_run: frontier-30
---

## Statement

Let $S$ and $T$ be delta functors on an abelian category. In the homological
case fix $n>0$; in the cohomological case fix $n\geq0$.

Homological case: suppose $S=(S_i,\partial^S)$ and $T=(T_i,\partial^T)$ are
homological, suppose natural transformations
$$u_i:S_i\Rightarrow T_i,\qquad 0\leq i<n,$$
have already been chosen compatibly with the connecting maps in degrees
$<n$, and choose for an object $A$ a short exact sequence
$$0\to K\to P\xrightarrow{p}A\to0$$
such that $P$ is projective and $T_n(p)=0$. Then there is a unique morphism
$$u_n^{(p)}(A):S_n(A)\to T_n(A)$$
such that
$$\partial_n^T\,u_n^{(p)}(A)=u_{n-1}(K)\,\partial_n^S.$$
If a morphism $f:A\to A'$ is covered by a morphism between two such chosen
short exact sequences, then the maps $u_n^{(p)}(A)$ and $u_n^{(p')}(A')$ are
natural with respect to $f$.

Cohomological case: suppose $S=(S^i,\partial_S)$ and $T=(T^i,\partial_T)$ are
cohomological, suppose natural transformations
$$u^i:S^i\Rightarrow T^i,\qquad 0\leq i\leq n,$$
have already been chosen compatibly with the connecting maps in degrees
$<n$, and choose for an object $A$ a short exact sequence
$$0\to A\xrightarrow{e}I\to C\to0$$
such that $I$ is injective and $S^{n+1}(e)=0$. Then there is a unique morphism
$$u_A^{n+1,(e)}:S^{n+1}(A)\to T^{n+1}(A).$$
More explicitly, let
$$q_S:\operatorname{coker}(S^n(I)\to S^n(C))\xrightarrow{\sim}S^{n+1}(A)$$
be induced by $\partial_S^n$, let $\overline u^n$ be the map on cokernels
induced by $u^n$, and let
$$q_T:\operatorname{coker}(T^n(I)\to T^n(C))\to T^{n+1}(A)$$
be induced by $\partial_T^n$. Then $u_A^{n+1,(e)}$ is characterized by
$$u_A^{n+1,(e)}q_S=q_T\overline u^n.$$
If a morphism $f:A\to A'$ is covered by a morphism between two such chosen
short exact sequences, then these maps are natural with respect to $f$.
## Facts & Assumptions

**Given:** An object $A$ and a chosen effacement sequence as in the statement.

[L1] Effaceability supplies the chosen projective or injective short exact
sequence
([[def-effaceable-homological-delta-functor-in-positive-degrees]],
[[def-effaceable-cohomological-delta-functor-in-positive-degrees]]).

[L2] In the homological case, the chosen effacement makes the connecting map
$\partial_n^T:T_n(A)\to T_{n-1}(K)$ monic; in the cohomological case, the
chosen effacement makes $S^{n+1}(A)$ the cokernel of
$S^n(I)\to S^n(C)$
([[lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle]],
[[lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle]]).

[L3] A natural transformation is defined by commuting with the maps induced by
the chosen morphisms
([[def-natural-transformation]]).

## Proof

**Proof technique:** direct.

1.1 In the homological case, exactness of the long sequences for the chosen short exact sequence gives $$S_n(P)\to S_n(A)\xrightarrow{\partial_n^S}S_{n-1}(K)\to S_{n-1}(P)$$ and $$T_n(P)\to T_n(A)\xrightarrow{\partial_n^T}T_{n-1}(K)\to T_{n-1}(P).$$ Because the lower incoming map is zero by the chosen effacement, [L2] makes $\partial_n^T$ monic. The already defined map $u_{n-1}(K)$ therefore determines at most one map $u_n^{(p)}(A)$ satisfying $$\partial_n^T\,u_n^{(p)}(A)=u_{n-1}(K)\,\partial_n^S,$$ and exactness shows that the right-hand side lands in $\ker(T_{n-1}(K)\to T_{n-1}(P))=\operatorname{im}(\partial_n^T)$, so this map exists. [L1, L2, given, construct]

2.1 If $f:A\to A'$ is covered by a morphism of chosen effacement sequences, then the already defined degree-$(n-1)$ maps are natural by [L3]. Applying the defining equation from step 1.1 on both objects and using naturality of the connecting morphisms inside the two long exact sequences shows that $\partial_n^T$ has the same composite with both $T_n(f)\,u_n^{(p)}(A)$ and $u_n^{(p')}(A')\,S_n(f)$. Since the target $\partial_n^T$ is monic by [L2], these two maps are equal. [L2, L3, step 1.1, algebra]

3.1 In the cohomological case, [L2] makes $q_S$ an isomorphism. The known map $u^n$ induces $\overline u^n$ on the displayed cokernels, while exactness makes $\partial_T^n$ factor through the map $q_T$ from the target cokernel. Define $$u_A^{n+1,(e)}:=q_T\overline u^n q_S^{-1}.$$ This is the unique map satisfying $u_A^{n+1,(e)}q_S=q_T\overline u^n$. The same cokernel equation, together with naturality of the known degree-$n$ maps from [L3], gives naturality for morphisms covered by chosen effacement ladders. [L2, L3, given, construct] ∎
