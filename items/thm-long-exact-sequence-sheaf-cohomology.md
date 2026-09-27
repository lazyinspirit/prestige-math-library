---
id: "thm-long-exact-sequence-sheaf-cohomology"
kind: "theorem"
title: "Long exact sequence of sheaf cohomology"
status: draft
origin: pipeline
deps: [def-sheaf-cohomology-derived-global-sections, def-global-sections-functor-sheaves, thm-abelian-sheaves-have-enough-injectives, def-derived-category-of-an-abelian-category, def-cochain-complex-in-an-abelian-category, def-quasi-isomorphism, def-mapping-cone-of-a-chain-map, thm-the-derived-category-inherits-a-triangulated-structure, thm-existence-of-the-bounded-below-right-total-derived-functor, prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles, thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic, prop-morphisms-into-a-homotopically-injective-complex-need-no-roof, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Statement

Assume the Axiom of Choice. Let
$$0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$$
be a short exact sequence of abelian sheaves on a topological space $X$, and let
$H^q(X,-)$ be sheaf cohomology computed from the supplied functorial injective
resolution datum $I$ on $\mathrm{Ab}(X)$
([[def-sheaf-cohomology-derived-global-sections]]). Then there is a natural long
exact sequence
$$\cdots\to H^q(X,\mathcal F')\to H^q(X,\mathcal F)\to H^q(X,\mathcal F'')\xrightarrow{\partial^q}H^{q+1}(X,\mathcal F')\to H^{q+1}(X,\mathcal F)\to\cdots,$$
natural in the short exact sequence and independent of the choice of injective
resolutions used to assemble it.

The derived categories and right derived functor here are taken under the
standing smallness or supplied cofinal-denominator hypothesis of
[[def-derived-category-of-an-abelian-category]].

## Facts & Assumptions

[F1] $\Gamma(X,-)$ is additive and left exact ([[def-global-sections-functor-sheaves]]).

[F2] The supplied injective resolution datum defines $R_I\Gamma:D^+(\mathrm{Ab}(X))\to D^+(\mathbf{Ab})$, and $H^q(X,\mathcal F)$ is the cohomology of $R_I\Gamma(\mathcal F)$ for a sheaf in degree zero ([[def-sheaf-cohomology-derived-global-sections]], [[thm-existence-of-the-bounded-below-right-total-derived-functor]]).

[F3] The derived category has its cone triangulation and every distinguished triangle induces a natural long exact cohomology sequence ([[thm-the-derived-category-inherits-a-triangulated-structure]]).

[F4] The bounded-below right total derived functor of an additive functor sends distinguished triangles to distinguished triangles ([[prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles]]).

[F5] For a cochain map $f:A^\bullet\to B^\bullet$, its cone has terms $B^n\oplus A^{n+1}$ and differential $(b,a)\mapsto(d_Bb+f(a),-d_Aa)$; a quasi-isomorphism is a map inducing isomorphisms on all cohomology groups ([[def-mapping-cone-of-a-chain-map]], [[def-quasi-isomorphism]]).

[F6] The bounded-below right total derived functor is independent of the supplied injective replacement system up to the unique natural isomorphism compatible with coaugmentations; on cohomology this gives the canonical isomorphisms of right derived functors ([[thm-existence-of-the-bounded-below-right-total-derived-functor]], [[thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic]]).

[F7] For a K-injective complex $J$, localization gives a bijection $\operatorname{Hom}_K(K,J)\to\operatorname{Hom}_D(K,J)$; therefore maps into an injective replacement are uniquely determined up to homotopy by their derived morphisms ([[prop-morphisms-into-a-homotopically-injective-complex-need-no-roof]]).

## Proof

**Given:** The Axiom of Choice, a topological space $X$, and a short exact sequence $0\to\mathcal F_1\xrightarrow{i}\mathcal F_2\xrightarrow{p}\mathcal F_3\to0$ of abelian sheaves on $X$.

1.1 Regard the three sheaves as cochain complexes concentrated in degree zero. The mapping cone of $i$ has $\mathcal F_1$ in degree $-1$, $\mathcal F_2$ in degree $0$, and differential $i$. Its only possibly nonzero cohomology is $H^0(\operatorname{Cone}(i))=\operatorname{coker}(i)\cong\mathcal F_3$, since $i$ is a monomorphism and the original sequence is short exact. The map $\operatorname{Cone}(i)\to\mathcal F_3$ induced by $p$ in degree zero and zero in degree $-1$ is therefore a quasi-isomorphism [F5]. By the cone triangulation and localization at quasi-isomorphisms, the short exact sequence determines the distinguished triangle $\mathcal F_1\to\mathcal F_2\to\mathcal F_3\to\mathcal F_1[1]$ in the bounded-below derived category [F3, F5]. [F3, F5]

2.1 The bounded-below right derived functor $R_I\Gamma$ exists for the supplied resolution datum [F2], and $\Gamma(X,-)$ is additive [F1]. It is exact as a functor of triangulated categories [F4], so applying it to the triangle of [step 1.1] gives a distinguished triangle $R_I\Gamma(\mathcal F_1)\to R_I\Gamma(\mathcal F_2)\to R_I\Gamma(\mathcal F_3)\to R_I\Gamma(\mathcal F_1)[1]$. The induced maps on cohomology in the first two positions are the maps $H^q(X,i)$ and $H^q(X,p)$ because the derived functor is formed from the same supplied datum $I$ that defines sheaf cohomology [F2]. [F1, F2, F4, step 1.1]

3.1 The long exact cohomology sequence of the distinguished triangle of [step 2.1] exists and is natural [F3]. By [F2], its terms are exactly $H^q(X,\mathcal F_1)$, $H^q(X,\mathcal F_2)$ and $H^q(X,\mathcal F_3)$, and its connecting map gives $\partial^q:H^q(X,\mathcal F_3)\to H^{q+1}(X,\mathcal F_1)$. This is the asserted long exact sequence. [F2, F3, step 2.1]

4.1 A morphism of short exact sequences gives a commutative morphism between their mapping-cone triangles in [step 1.1]. The functor $R_I\Gamma$ and the long exact sequence construction of [F3] preserve this morphism, so all maps, including $\partial^q$, are natural in the short exact sequence. If a different supplied injective resolution datum is used, [F6] gives the canonical natural isomorphism of right total derived functors compatible with coaugmentations. Write $j_K:K\to I_K$ and $j\prime_K:K\to J_K$ for the two replacements. The comparison class $c_K:I_K\to J_K$ is characterized by $Q(c_K)=Q(j\prime_K)Q(j_K)^{-1}$, uniquely in the homotopy category by [F7]. Let $t_I:I_{K[1]}\to I_K[1]$ and $t_J:J_{K[1]}\to J_K[1]$ be the shift comparison classes characterized in the same way by $j_K[1]$ and $j\prime_K[1]$. The two classes $c_K[1]t_I$ and $t_Jc_{K[1]}$ from $I_{K[1]}$ to $J_K[1]$ have the same image under $Q$, namely $Q(j\prime_K[1])Q(j_{K[1]})^{-1}$. The target is again K-injective, so [F7] identifies them in the homotopy category. Applying the additive functor $\Gamma$ preserves that homotopy equality. These are exactly the transported shift comparisons of [F4], so the natural comparison commutes with shifts and hence with the connecting arrow. Therefore it identifies the resulting long exact sequences, proving independence of the resolutions used. ∎ [F2, F3, F4, F6, F7, step 1.1, step 2.1, step 3.1]
