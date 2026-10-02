---
id: lem-composite-finite-proper-morphism-proper
kind: lemma
title: "Composite of a finite morphism and a proper morphism is proper"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-finite-morphism-proper
  - def-affine-morphism-schemes
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-finite-morphism-schemes
  - def-locally-finite-type-and-finite-type-morphism
  - def-proper-morphism
  - def-quasi-compact-and-quasi-separated-morphism
  - def-separated-morphism-schemes
  - def-universally-closed-morphism
  - lem-base-change-open-closed-immersions
  - lem-closed-immersion-affine-quotient-and-base-change
  - thm-finite-morphism-integral-closed
  - thm-valuative-criterion-properness
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, \u00a7\u00a729, 33-35, 43"
      url: "https://stacks.math.columbia.edu/download/morphisms.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Statement

Assume the Axiom of Choice, used through the valuative criterion for proper
morphisms and the universal closedness of finite morphisms. Let $h:X\to Y$ be
a finite morphism of schemes and let $g:Y\to S$ be a proper morphism. Then the
composite $g\circ h:X\to S$ is proper. The same argument gives that a
composite of a finite morphism with a separated morphism is separated, and a
composite of finite-type morphisms is finite type; these two auxiliary facts
are proved as steps below because the composite is not assumed separated in
advance.

## Facts & Assumptions

**Given:** A finite morphism $h:X\to Y$ and a proper morphism $g:Y\to S$ of schemes.

[F1] $h$ is finite when for every affine open $\operatorname{Spec}A\subseteq Y$ the preimage is affine, $h^{-1}(\operatorname{Spec}A)=\operatorname{Spec}B$, with $B$ a module-finite $A$-algebra; equivalently $h$ is affine and the corresponding sheaf of $\mathcal O_Y$-algebras is finite. ([[def-finite-morphism-schemes]], [[def-affine-morphism-schemes]])

[F2] $f:U\to V$ is locally of finite type when every point of $U$ has an affine neighbourhood $\operatorname{Spec}B$ mapping into an affine open $\operatorname{Spec}A\subseteq V$ with $A\to B$ of finite type, and of finite type when moreover $f$ is quasi-compact. ([[def-locally-finite-type-and-finite-type-morphism]])

[F3] $f$ is separated if and only if its diagonal is a closed immersion, and quasi-separated if and only if its diagonal is quasi-compact; a closed immersion is affine, hence quasi-compact, so a separated morphism is quasi-separated. ([[def-separated-morphism-schemes]], [[def-closed-immersion-schemes]], [[lem-closed-immersion-affine-quotient-and-base-change]])

[F4] $f$ is universally closed when for every base change $T\to S$ the projection $X_T\to T$ is a closed map. ([[def-universally-closed-morphism]])

[F5] $f$ is proper if and only if it is separated, of finite type and universally closed. ([[def-proper-morphism]])

[F6] Under Choice, a finite morphism is universally closed, and on affine charts $A\to B$ it is an integral ring map. ([[thm-finite-morphism-integral-closed]])

[F7] Closed immersions remain closed immersions after arbitrary base change. ([[lem-base-change-open-closed-immersions]])

[F8] Under Choice, a morphism of finite type and quasi-separated is proper if and only if every valuative diagram for it has exactly one lift. ([[thm-valuative-criterion-properness]])

[F9] Under Choice every finite morphism is proper. ([[cor-finite-morphism-proper]])

[F10] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; verify finite type, quasi-separatedness, separatedness and the valuative criterion for the composite.

1.1 Finite type and quasi-compactness of $g\circ h$. Fix a point $x\in X$. Choose an affine open $\operatorname{Spec}B\subseteq Y$ with $h(x)\in\operatorname{Spec}B$ and an affine open $\operatorname{Spec}A\subseteq S$ with $g(\operatorname{Spec}B)\subseteq\operatorname{Spec}A$ and $A\to B$ of finite type, as [F2] permits for the finite-type morphism $g$ [F5]; write $h^{-1}(\operatorname{Spec}B)=\operatorname{Spec}C$, so that $C$ is module-finite over $B$ [F1]. A module generating set of $C$ over $B$ generates $C$ as a $B$-algebra, so $B\to C$ is of finite type, and a generating set of $B$ over $A$ together with one of $C$ over $B$ generates $C$ over $A$, so $C$ is of finite type over $A$; the affine chart $\operatorname{Spec}C$ of $x$ over $\operatorname{Spec}A$ therefore witnesses that $g\circ h$ is locally of finite type [F2]. It is quasi-compact as well: $g$ is of finite type, hence quasi-compact, by [F5] and [F2], and the finite morphism $h$ is proper by [F9], hence of finite type and quasi-compact, again by [F5] and [F2]; for a quasi-compact open $U\subseteq S$ the preimage $(g\circ h)^{-1}(U)=h^{-1}(g^{-1}(U))$ is then the preimage under the quasi-compact morphism $h$ of the quasi-compact open $g^{-1}(U)$ [F2]. Hence $g\circ h$ is of finite type. [F1, F2, F5, F9]

1.2 Universal closedness. Base change along any $T\to S$ gives $(g\circ h)_T=g_T\circ h_{Y_T}$ where $h_{Y_T}:X_T\to Y_T$ is the base change of $h$ and is again finite, since finiteness is checked on affine charts and tensor products of module-finite algebras are module-finite [F1]; by [F6] it is universally closed, and $g_T$ is closed because $g$ is universally closed [F4]. A composite of closed maps is closed, so $(g\circ h)_T$ is closed for every $T$, i.e. $g\circ h$ is universally closed [F4]. [F1, F4, F6]

2.1 Separatedness. The finite morphism $h$ is proper by [F9], hence separated by [F5], so its diagonal $\Delta_h:X\to X\times_YX$ is a closed immersion, and for $g$ separated $\Delta_g:Y\to Y\times_SY$ is one too [F3]. The diagonal of $g\circ h$ factors canonically as $$X\xrightarrow{\ \Delta_h\ }X\times_YX\xrightarrow{\ i\ }X\times_SX,$$ because both composites with the two projections to $X$ are the identity; here $i$ is the natural inclusion, the base change of $\Delta_g$ along $h\times_Sh:X\times_SX\to Y\times_SY$ and is therefore a closed immersion [F7]. A composite of closed immersions is a closed immersion — closedness of the image is preserved by composition of homeomorphisms onto closed subsets, and surjectivity of structure sheaves is stable under composition — so $\Delta_{g\circ h}$ is a closed immersion and $g\circ h$ is separated [F3]; since it is of finite type by step 1.1, it is quasi-separated [F3]. The separatedness of $h$ used above is thus a consequence of finiteness, via [F9] and [F5]. [F3, F5, F6, F7, F9, step 1.1]

3.1 Valuative criterion. Let $R$ be a valuation ring with fraction field $K$ and let a valuative diagram for $g\circ h$ be given, with generic map $\operatorname{Spec}K\to X$ and base map $\operatorname{Spec}R\to S$. Composing the generic map with $h$ yields a valuative diagram for $g$, which by [F8] and the properness of $g$ has exactly one lift $v:\operatorname{Spec}R\to Y$ under Choice [F10]. Now $v$ and the generic map form a valuative diagram for $h$; the finite morphism $h$ is proper by [F9], hence of finite type and separated by [F5] and quasi-separated by [F3], so [F8] applied to $h$ gives a lift $u:\operatorname{Spec}R\to X$ with $h\circ u=v$, which is a lift of the original diagram. For uniqueness let $u_1,u_2$ be two lifts of that diagram; then $h\circ u_1$ and $h\circ u_2$ are two lifts of the induced diagram for $g$, so $h\circ u_1=h\circ u_2$ by uniqueness for $g$, and $u_1,u_2$ are then two lifts of one valuative diagram for $h$, so $u_1=u_2$ by uniqueness for the proper morphism $h$ [F9]. Hence every valuative diagram for $g\circ h$ has exactly one lift, and since $g\circ h$ is of finite type and quasi-separated by steps 1.1 and 2.1, [F8] gives that $g\circ h$ is proper. [F3, F5, F8, F9, F10, step 1.1, step 2.1]

4.1 By step 1.1 the composite $g\circ h$ is of finite type and by step 2.1 it is quasi-separated; by step 2.1 it is separated; by step 1.2 it is universally closed; and by step 3.1 it satisfies the valuative criterion under Choice. The criterion [F8] applied in its sufficient direction gives that $g\circ h$ is proper, which is also the conjunction of separated, finite type and universally closed by [F5]. Choice is inherited through [F9] in steps 1.1, 2.1 and 3.1, through [F6] in step 1.2, and through [F8] in step 3.1 and this conclusion. [F5, F8, F9, F10, step 3.1] ∎
