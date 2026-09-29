---
id: thm-projective-bundle-represents-line-quotients
kind: theorem
title: "Projective bundle represents line quotients"
status: published
origin: pipeline
deps:
  - def-projective-bundle-scheme
  - thm-twisting-sheaf-invertible-standard-graded
  - thm-line-bundle-sections-define-projective-map
  - thm-projective-map-line-bundle-data-equivalence
  - def-relative-proj-quasi-coherent-graded-algebra
  - def-relative-projective-space-standard-charts
  - def-globally-generated-sheaf
  - def-locally-free-sheaf-finite-rank
  - def-invertible-sheaf
  - def-pullback-module-ringed-spaces
  - def-sheaf-on-topological-space
  - def-module-on-ringed-space
  - thm-gluing-sheaves
  - lem-morphism-schemes-local-on-source-target
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice as inherited from the relative Proj and sheaf
constructions ([[def-axiom-of-choice]]). Let $S$ be a scheme, let $E$ be a
finite locally free $\mathcal O_S$-module of locally constant rank
([[def-locally-free-sheaf-finite-rank]]), and let
$$\pi:\mathbb P_S(E)=\operatorname{Proj}_S\operatorname{Sym}(E)\longrightarrow S$$
be its projective bundle in the quotient convention, with twist
$\mathcal O_{\mathbb P_S(E)}(1)$ and tautological quotient
$\pi^*E\to\mathcal O_{\mathbb P_S(E)}(1)$
([[def-projective-bundle-scheme]],
[[def-relative-proj-quasi-coherent-graded-algebra]]).

Then for every $S$-scheme $g:T\to S$ the assignment
$$h\longmapsto\Bigl(h^*\bigl(\pi^*E\to\mathcal O_{\mathbb P_S(E)}(1)\bigr)\Bigr)$$
is a natural bijection between

1. the set of $S$-morphisms $h:T\to\mathbb P_S(E)$, and
2. the set of isomorphism classes of surjections $g^*E\to L$ with $L$ an
   invertible $\mathcal O_T$-module ([[def-invertible-sheaf]]), where an
   isomorphism between $g^*E\to L$ and $g^*E\to L'$ is an isomorphism
   $L\to L'$ of $\mathcal O_T$-modules making the triangle commute.

Naturality means compatibility with morphisms $T'\to T$ of $S$-schemes. For
$T=\mathbb P_S(E)$ and $h=\operatorname{id}$ the class on the right is the
tautological quotient itself: $\operatorname{id}^*(\pi^*E\to\mathcal O(1))$ is
$\pi^*E\to\mathcal O(1)$. The rank-zero case is included: if $E=0$ then
$\mathbb P_S(0)=\varnothing$, and the two sides are empty for nonempty $T$ and
singletons for $T=\varnothing$.

## Facts & Assumptions

**Given:** A scheme $S$, a finite locally free $\mathcal O_S$-module $E$ of locally constant rank, the projective bundle $\pi:\mathbb P_S(E)\to S$ with twist $\mathcal O(1)=\mathcal O_{\mathbb P_S(E)}(1)$ and tautological quotient $q:\pi^*E\to\mathcal O(1)$, an $S$-scheme $g:T\to S$, and the Axiom of Choice as inherited from the relative Proj construction.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] For an affine open $U\subseteq S$ over which $E|_U\cong\mathcal O_U^{\,r}$ with $r\ge1$: the restriction $\mathbb P_S(E)|_U=\pi^{-1}(U)$ equals $\mathbb P_U(E|_U)$ ([[def-relative-proj-quasi-coherent-graded-algebra]]), there is a canonical isomorphism $\mathbb P_S(E)\times_SU\cong\mathbb P^{r-1}_U$ under which $\operatorname{Sym}(E)|_U$ corresponds to $\mathcal O_U[t_1,\dots,t_r]$ with degree-one generators, the twist $\mathcal O(1)|_{\pi^{-1}(U)}$ corresponds to the standard twist $\mathcal O_{\mathbb P^{r-1}_U}(1)$, and the tautological quotient restricts to the standard quotient $\mathcal O_U^{\,r}\to\mathcal O_{\mathbb P^{r-1}_U}(1)$ whose components are the coordinate sections. If $E|_U=0$ then $\mathbb P_U(0)=\varnothing$. The twist $\mathcal O(1)$ is invertible on $\pi^{-1}(U)$ in the case $r\ge1$. ([[def-projective-bundle-scheme]], [[def-relative-proj-quasi-coherent-graded-algebra]], [[def-relative-projective-space-standard-charts]], [[thm-twisting-sheaf-invertible-standard-graded]])

[F2] A finite locally free module of locally constant rank admits an open cover of $S$ by affine opens $U$ with $E|_U\cong\mathcal O_U^{\,r}$ for a constant $r=r(U)$; its rank function is locally constant. Consequently such a cover by trivialising affine opens exists, and the rank attached to a connected trivialising open set is well defined. ([[def-locally-free-sheaf-finite-rank]])

[F3] Pullback of $\mathcal O$-modules ([[def-pullback-module-ringed-spaces]]): $\operatorname{id}^*=\operatorname{id}$ and $(h\circ u)^*=u^*h^*$ for composable morphisms; if $\mathcal G|_V\cong\mathcal O_V^{\,r}$ then $h^*\mathcal G|_{h^{-1}(V)}\cong\mathcal O_{h^{-1}(V)}^{\,r}$, so pullback of a locally free sheaf of rank $r$ is locally free of rank $r$ and pullback of an invertible sheaf is invertible; in particular $\pi^*E$, $g^*E$ and $h^*\mathcal O(1)$ are locally free of the corresponding ranks on their sources. ([[def-pullback-module-ringed-spaces]], [[def-locally-free-sheaf-finite-rank]], [[def-invertible-sheaf]])

[F4] For an invertible sheaf $L$ with global sections $s_0,\dots,s_n$, the associated morphism $\mathcal O_X^{n+1}\to L$, $(a_j)\mapsto\sum_ja_js_j$, is surjective exactly when the $s_j$ generate $L$, and a morphism from a free module is determined by its components; in particular a surjection $\mathcal O_X^{n+1}\to L$ is the same thing as a generating $(n+1)$-tuple, namely the images of the standard basis. If the $s_j$ generate $L$ and $u:Y\to X$ is a morphism then the pullbacks $u^*s_j$ generate $u^*L$, so the pullback of a surjection of invertible sheaves is again surjective. ([[def-globally-generated-sheaf]], [[def-invertible-sheaf]], [[def-pullback-module-ringed-spaces]])

[F5] For a base scheme $S$ and $n\ge0$, the assignment $\varphi\mapsto(\varphi^*\mathcal O(1);\varphi^*x_0,\dots,\varphi^*x_n)$ is a natural bijection between $S$-morphisms $\varphi:T\to\mathbb P^n_S$ and isomorphism classes of pairs $(L;s_0,\dots,s_n)$ with $L$ invertible and $s_0,\dots,s_n$ generating $L$; the morphism attached to data satisfies $\varphi^*\mathcal O(1)\cong L$ and $\varphi^{-1}(D_+(x_i))=X_{s_i}$, and a morphism is determined by its data. In particular, surjections $\mathcal O_T^{n+1}\to L$ correspond bijectively to morphisms $T\to\mathbb P^n_S$ by sending the surjection $q$ to the morphism attached to the generating tuple $(q(e_0),\dots,q(e_n))$ of images of the standard basis $e_0,\dots,e_n$ of $\mathcal O_T^{n+1}$. ([[thm-projective-map-line-bundle-data-equivalence]], [[thm-line-bundle-sections-define-projective-map]], [[def-globally-generated-sheaf]])

[F6] Morphisms of schemes are local on the source: two morphisms agreeing on the members of an open cover are equal, and a compatible family of morphisms on an open cover glues uniquely. Morphisms of sheaves and invertible sheaves are likewise local: compatible local data, including the overlap identifications, glue, and a morphism of sheaves is determined by its local restrictions. If $q:M\to L$ is a surjection of $\mathcal O$-modules and $\alpha,\beta:L\to L'$ satisfy $\alpha\circ q=\beta\circ q$, then $\alpha=\beta$, because the image of $q$ generates $L$ locally and a morphism of sheaves is determined by its values on a generating family of local sections. ([[lem-morphism-schemes-local-on-source-target]], [[thm-gluing-sheaves]], [[def-sheaf-on-topological-space]], [[def-module-on-ringed-space]])

## Proof

**Proof technique:** direct: define the restriction map by pulling back the universal quotient; trivialise the bundle over affine opens of $S$, where the projective bundle becomes a projective space with the standard quotient and the absolute line-bundle-data equivalence gives the bijection; then glue the local bijections over the cover of $T$ induced by the trivialising cover of $S$, using uniqueness of morphisms and of isomorphisms conjugating a surjection.

1.1 The trivialising cover and the local models. By [F2] and the Axiom of Choice [A1] choose an open cover $S=\bigcup_{i\in I}U_i$ by affine opens with trivialisations $\tau_i:\mathcal O_{U_i}^{\,r_i}\to E|_{U_i}$, $r_i\ge0$. For an $S$-scheme $h:T\to S$ put $T_i=h^{-1}(U_i)$ and $P_i=\pi^{-1}(U_i)=\mathbb P_{U_i}(E|_{U_i})$, so that the $T_i$ cover $T$ and the $P_i$ cover $\mathbb P_S(E)$. By [F1], if $r_i\ge1$ there is an isomorphism $P_i\cong\mathbb P^{r_i-1}_{U_i}$ identifying $\mathcal O(1)|_{P_i}$ with the standard invertible twist and $q|_{P_i}$ with the standard quotient $\mathcal O_{U_i}^{\,r_i}\to\mathcal O(1)$ with components the coordinate sections $x_0,\dots,x_{r_i-1}$, while if $r_i=0$ then $P_i=\varnothing$. [A1, F1, F2]

1.2 The map and its naturality. For $h:T\to\mathbb P_S(E)$ the pullback $h^*q:h^*\pi^*E\to h^*\mathcal O(1)$ is a morphism $g^*E\to h^*\mathcal O(1)$, because $h^*\pi^*E=(\pi\circ h)^*E=g^*E$ by [F3]; the target $h^*\mathcal O(1)$ is invertible by [F3] applied to the invertible sheaf $\mathcal O(1)$, and $h^*q$ is surjective: on $T_i=h^{-1}(U_i)$ with $r_i\ge1$ it is the pullback of the standard quotient of [F1], whose components are the pullbacks of the generating coordinate sections $x_j$ of $\mathcal O(1)$ on $\mathbb P^{r_i-1}_{U_i}$ (each $x_j$ is a frame on the chart $D_+(x_j)$), and pullbacks of generating sections generate, so $h^*q|_{T_i}$ is surjective by [F4]; when $r_i=0$ one has $P_i=\pi^{-1}(U_i)=\varnothing$ by [F1] while $\pi\circ h=g$ forces $h(T_i)\subseteq P_i$, hence $T_i=\varnothing$ and there is nothing to check. Thus $\Phi_T(h):=[\,h^*q\,]$ is an isomorphism class of surjections $g^*E\to L$ with $L$ invertible, and for a morphism $u:T'\to T$ of $S$-schemes one has $\Phi_T(h\circ u)=u^*\Phi_T(h)$ since $(h\circ u)^*=u^*h^*$ by [F3]. [F1, F3, F4, algebra]

2.1 The local bijection for $r\ge1$. Fix $i$ with $r_i=r\ge1$ and fix $h:T\to S$; write $g_i=g|_{T_i}$ and identify $E|_{T_i}\cong\mathcal O_{T_i}^{\,r}$ by $\tau_i$. By [F5] applied over the base $U_i$, the $U_i$-morphisms $\varphi:T_i\to\mathbb P^{r-1}_{U_i}$ correspond bijectively to generating tuples $(s_0,\dots,s_{r-1})$ of an invertible sheaf $L$ on $T_i$, by $\varphi^*x_j\leftrightarrow s_j$, and such tuples correspond bijectively to surjections $g_i^*E\cong\mathcal O_{T_i}^{\,r}\to L$ by $s_j=q(e_j)$ for the standard basis, a morphism from a free module being determined by its components and surjective exactly when the components generate by [F4]. Under the identification of [F1] the pullback of the universal quotient $q$ along a morphism is the pullback of the standard quotient, whose components are the pullbacks of the coordinate sections; hence $\Phi_{T_i}(\varphi)$ corresponds under these bijections to the tuple $(\varphi^*x_j)=(s_j)$, i.e. $\Phi$ followed by the two bijections is the identity. Therefore $\Phi_{T_i}$ is a bijection between $U_i$-morphisms $T_i\to P_i$ and isomorphism classes of surjections $g_i^*E\to L_i$ with $L_i$ invertible on $T_i$, the local model being that of step 1.1. [F1, F4, F5, step 1.1, algebra]

2.2 The local bijection for $r=0$. If $r_i=0$ then $P_i=\varnothing$ by [F1], so a morphism $T_i\to P_i$ exists only when $T_i=\varnothing$; and a surjection $g_i^*E=0\to L_i$ onto an invertible sheaf $L_i$ exists only when $T_i=\varnothing$, since an invertible sheaf on a nonempty scheme has nonzero stalks ([[def-invertible-sheaf]]) while the zero sheaf does not, and the zero morphism onto such a sheaf is not surjective. For $T_i=\varnothing$ both sides have exactly one element, the empty morphism and the zero surjection of the empty scheme; hence $\Phi_{T_i}$ is a bijection here as well. [F1, F3, step 1.1, algebra]

3.1 Injectivity of $\Phi_T$. Let $h_1,h_2:T\to\mathbb P_S(E)$ with $\Phi_T(h_1)\cong\Phi_T(h_2)$. For each $i$ the restrictions are isomorphic: $\Phi_{T_i}(h_1|_{T_i})=\Phi_T(h_1)|_{T_i}\cong\Phi_T(h_2)|_{T_i}=\Phi_{T_i}(h_2|_{T_i})$, because pullback of the universal quotient commutes with restriction to the open subscheme $T_i$. By the bijectivity of steps 2.1 and 2.2 the restrictions $h_1|_{T_i}$ and $h_2|_{T_i}$ are equal for every $i$, and since the $T_i$ cover $T$ the morphisms $h_1,h_2$ are equal by [F6]. Hence $\Phi_T$ is injective. [F6, step 2.1, step 2.2]

3.2 Surjectivity of $\Phi_T$, local construction. Let $q':g^*E\to L$ be a surjection with $L$ invertible on $T$; we construct $h:T\to\mathbb P_S(E)$ with $\Phi_T(h)\cong q'$. For each $i$: if $r_i\ge1$, let $h_i:T_i\to P_i$ be the morphism corresponding to the isomorphism class of $q'|_{T_i}$ under the bijection of step 2.1 (equivalently, the morphism attached by [F5] to the generating tuple $(q'(\tau_i(e_j)))_j$); then $\Phi_{T_i}(h_i)\cong q'|_{T_i}$. If $r_i=0$ then $T_i=\varnothing$, as the restriction of $q'$ would be a surjection $0\to L|_{T_i}$ onto an invertible sheaf, which is impossible on a nonempty $T_i$ by step 2.2; take $h_i$ the empty morphism. [F5, step 2.1, step 2.2]

4.1 The local morphisms glue. Let $i,j$; on $T_{ij}=T_i\cap T_j$ the restrictions $h_i|_{T_{ij}}$ and $h_j|_{T_{ij}}$ are morphisms $T_{ij}\to P_i|_{T_{ij}}=P_j|_{T_{ij}}$ with $\Phi_{T_{ij}}(h_i|_{T_{ij}})\cong q'|_{T_{ij}}\cong\Phi_{T_{ij}}(h_j|_{T_{ij}})$, the first identification being the restriction of the isomorphism of step 3.2 and the second the same statement with $j$ in place of $i$. Since $\Phi_{T_{ij}}$ is injective by step 3.1 (or by the bijection of step 2.1 applied over the open subscheme $T_{ij}$ of $T_i$), the two restrictions are equal; the open subschemes $T_{ij}$ cover $T_i\cap T_j$ (they equal it when nonempty, and when $T_{ij}=\varnothing$ there is nothing to check). Hence the family $(h_i)$ is compatible on the cover $\{T_i\}$ of $T$ and glues to a unique morphism $h:T\to\mathbb P_S(E)$ by [F6]. [F6, step 2.1, step 3.1, step 3.2]

5.1 The glued morphism represents $q'$. For each $i$ one has $\Phi_T(h)|_{T_i}=\Phi_{T_i}(h|_{T_i})=\Phi_{T_i}(h_i)\cong q'|_{T_i}$, so there is an isomorphism $\alpha_i:h^*\mathcal O(1)|_{T_i}\to L|_{T_i}$ with $\alpha_i\circ(h^*q)|_{T_i}=q'|_{T_i}$. On an overlap $T_{ij}$ the two isomorphisms $\alpha_i|_{T_{ij}}$ and $\alpha_j|_{T_{ij}}$ both conjugate the surjection $(h^*q)|_{T_{ij}}$ to $q'|_{T_{ij}}$; such a conjugating isomorphism is unique by the last clause of [F6], since $(h^*q)|_{T_{ij}}$ is surjective. Hence $\alpha_i$ and $\alpha_j$ agree on overlaps, so by the gluing clause of [F6] they glue to an isomorphism $\alpha:h^*\mathcal O(1)\to L$ satisfying $\alpha\circ h^*q=q'$; that is, $\Phi_T(h)\cong q'$. Therefore $\Phi_T$ is surjective. [F6, step 3.2, step 4.1]

6.1 Conclusion. Steps 1.2, 3.1 and 5.1 show that $\Phi_T$ is a natural bijection for every $S$-scheme $g:T\to S$, and steps 2.1 and 2.2 supply the local bijections it is built from. The tautological quotient is the universal element: for $T=\mathbb P_S(E)$ and $h=\operatorname{id}$ one has $\Phi_T(\operatorname{id})=\operatorname{id}^*q=q$ by [F3]. Naturality in the base holds because the relative Proj and $\operatorname{Sym}$ commute with base change $S'\to S$, so $\mathbb P_{S'}(E_{S'})\cong\mathbb P_S(E)\times_SS'$ and the universal quotient base changes to the universal quotient ([[def-projective-bundle-scheme]]). In the rank-zero case $E=0$ one has $\mathbb P_S(0)=\varnothing$; for $T\ne\varnothing$ there is no morphism $T\to\varnothing$ and no surjection $0\to L$ onto an invertible sheaf, while for $T=\varnothing$ both sides consist of the empty morphism and the zero surjection. The Axiom of Choice [A1] is inherited from the relative Proj construction and is used to select a trivialising affine cover of $S$ in step 1.1; every later step is determined by that finite-or-infinite family of local data, with no further choices. [A1, F3, step 1.2, step 2.1, step 2.2, step 3.1, step 5.1, cases: rank zero and empty T]
\qed
