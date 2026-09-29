---
id: thm-line-bundle-sections-define-projective-map
kind: theorem
title: "Generating line-bundle sections define a morphism to projective space"
status: draft
origin: pipeline
deps:
  - def-globally-generated-sheaf
  - thm-projective-space-as-proj
  - def-axiom-of-choice
  - def-very-ample-invertible-sheaf-relative
  - def-relative-projective-space-standard-charts
  - ex-affine-n-space-over-arbitrary-base
  - thm-morphisms-into-affine-scheme-global-sections
  - lem-morphism-schemes-local-on-source-target
  - def-invertible-sheaf
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
---

## Statement

Assume the Axiom of Choice as inherited from the projective-space and sheaf
constructions ([[def-axiom-of-choice]]). Let $S$ be a scheme, let $X$ be an
$S$-scheme, let $L$ be an invertible $\mathcal O_X$-module
([[def-invertible-sheaf]]) and let
$$s_0,\dots,s_n\in\Gamma(X,L)$$
be global sections which generate $L$: the evaluation morphism
$\mathcal O_X^{\,n+1}\to L$, $(g_0,\dots,g_n)\mapsto\sum_ig_is_i$, is
surjective ([[def-globally-generated-sheaf]]). Let $\mathbb P^n_S$ be the
relative projective space with charts $U_i$ and twisting sheaf
$\mathcal O(1)$ with frames $e_i$
([[def-very-ample-invertible-sheaf-relative]]).

Then there is a unique $S$-morphism
$$\varphi:X\longrightarrow\mathbb P^n_S$$
such that $\varphi^*\mathcal O(1)\cong L$ with $\varphi^*(x_i)=s_i$ under this
isomorphism, where $x_i$ is the global coordinate section of $\mathcal O(1)$,
and for which
$$\varphi^{-1}(D_+(x_i))=X_{s_i};$$
more precisely, on the chart $U_i$ with coordinates $x^{(i)}_j=x_j/x_i$ one has
$x^{(i)}_j\circ\varphi=s_j/s_i$ on $X_{s_i}$. No claim that $\varphi$ is an
immersion is made.

## Facts & Assumptions

**Given:** A scheme $S$, an $S$-scheme $X$, an invertible sheaf $L$ on $X$, global sections $s_0,\dots,s_n$ generating $L$, and the Axiom of Choice as inherited from the projective-space constructions.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] The sections generate $L$ if and only if the evaluation map $\mathcal O_X^{n+1}\to L$ is surjective; equivalently, for every $x\in X$ some $s_i$ has nonzero image in the fibre $L\otimes\kappa(x)$, so the nonvanishing loci $X_{s_i}=\{x:s_i(x)\ne0\}$ cover $X$. ([[def-globally-generated-sheaf]], [[def-invertible-sheaf]])

[F2] On the open set $X_{s_i}$ the section $s_i$ trivialises $L$: multiplication by $s_i$ is an isomorphism $\mathcal O_{X_{s_i}}\to L|_{X_{s_i}}$, so a quotient $s_j/s_i$ is a well-defined regular function on $X_{s_i}$. ([[def-invertible-sheaf]])

[F3] $\mathbb P^n_S$ has standard charts $U_i$ with transition isomorphisms $x^{(i)}_\ell\mapsto x^{(j)}_\ell/x^{(j)}_i$, $x^{(i)}_j\mapsto1/x^{(j)}_i$ on $U_i\cap U_j$; each $U_i$ is canonically an affine space over $S$ with coordinates $x^{(i)}_j$ ($j\ne i$); the sheaf $\mathcal O(1)$ is glued from frames $e_i$ on $U_i$ with $e_j=x^{(i)}_je_i$ on overlaps, equivalently $e_i=x^{(j)}_ie_j$. Over an affine base $S=\operatorname{Spec}A$ one has $\mathbb P^n_A=\operatorname{Proj}A[x_0,\dots,x_n]$, the chart $U_i$ is $\operatorname{Spec}A[x^{(i)}_j:j\ne i]$ and $e_i$ corresponds to the coordinate section $x_i$. ([[def-relative-projective-space-standard-charts]], [[def-very-ample-invertible-sheaf-relative]], [[thm-projective-space-as-proj]], [[ex-affine-n-space-over-arbitrary-base]])

[F4] For an $S$-scheme $Y$, $S$-morphisms $Y\to\mathbf A^n_S$ are determined by $n$ global regular functions on $Y$. Indeed, over an affine open $W=\operatorname{Spec}R$ of $S$, such functions specify the unique $R$-algebra map $R[t_1,\dots,t_n]\to\Gamma(Y_W,\mathcal O_Y)$ extending the structure map. The affine-target global-sections correspondence gives the local morphism, and on overlaps these morphisms agree after affine refinement because they have the same coordinates. They glue uniquely by [F5]. ([[ex-affine-n-space-over-arbitrary-base]], [[thm-morphisms-into-affine-scheme-global-sections]])

[F5] Morphisms of schemes compatible on an open cover of the source glue uniquely; two morphisms out of $X$ agree if they agree on an open cover. ([[lem-morphism-schemes-local-on-source-target]])

## Proof

**Proof technique:** direct: trivialise the line bundle by each nonvanishing section, read the ratios as chart coordinates, check the transition formulas on overlaps, glue, and compare pullbacks of frames with the given sections.

1.1 The charts of the construction. By [F1] the open sets $X_{s_i}$ cover $X$. By [F2] each $s_i$ trivialises $L$ over $X_{s_i}$, so for every $i$ and every $j$ the ratio $s_j/s_i$ is a regular function on $X_{s_i}$: $s_j/s_i=(s_j\otimes s_i^{-1})|_{X_{s_i}}$ under the identification $L\otimes L^{-1}=\mathcal O_X$, restricted to $X_{s_i}$. [F1, F2]
1.2 The local morphisms. Fix $i$ and let $U_i\subseteq\mathbb P^n_S$ be the $i$-th chart, an affine space over $S$ with coordinates $x^{(i)}_j$, $j\ne i$, by [F3]. By [F4] the $n$ regular functions $s_j/s_i$, $j\ne i$, on $X_{s_i}$ define a morphism $\varphi_i:X_{s_i}\to U_i$ over $S$ with $x^{(i)}_j\circ\varphi_i=s_j/s_i$ for every $j\ne i$; this is the unique $S$-morphism with these coordinates. Its image lies in $U_i$, so $\varphi_i^{-1}(D_+(x_i))=X_{s_i}$; moreover on $X_{s_is_j}$ the quotient $s_j/s_i$ is invertible by [F2], so $\varphi_i(X_{s_is_j})\subseteq D(x^{(i)}_j)\subseteq U_i$. [F2, F3, F4]
2.1 Compatibility on overlaps. On $X_{s_i}\cap X_{s_j}=X_{s_is_j}$ both quotients $s_j/s_i$ and $s_i/s_j$ are invertible, and for $\ell\ne i,j$ the transition formula of [F3] reads $x^{(j)}_\ell=x^{(i)}_\ell/x^{(i)}_j$; substituting $x^{(i)}_\ell=s_\ell/s_i$ and $x^{(i)}_j=s_j/s_i$ from step 1.2 gives $s_\ell/s_j$, which is $x^{(j)}_\ell\circ\varphi_j$; likewise $x^{(j)}_i=1/x^{(i)}_j$ corresponds to $s_i/s_j$. Hence $\varphi_i$ and $\varphi_j$ agree on the overlap. [F3, step 1.2, algebra]
3.1 The global morphism. The local morphisms $\varphi_i$ of step 1.2 are compatible on overlaps by step 2.1, and the opens $X_{s_i}$ cover $X$ by step 1.1; hence they glue to a morphism $\varphi:X\to\mathbb P^n_S$ by [F5], which is a morphism over $S$ because each $\varphi_i$ is. Its restrictions satisfy $\varphi^{-1}(D_+(x_i))\cap X_{s_i}=X_{s_i}\cap X_{s_i}=X_{s_i}$ and, on $X_{s_j}$, $\varphi^{-1}(D_+(x_i))=X_{s_is_j}$, so altogether $\varphi^{-1}(D_+(x_i))=X_{s_i}$. [F5, step 1.1, step 2.1]
4.1 The pullback of the twist. On $X_{s_i}$ define an isomorphism $\varphi^*\mathcal O(1)|_{X_{s_i}}\to L|_{X_{s_i}}$ by sending the pullback of the frame $e_i$ to $s_i$; this is an isomorphism of invertible sheaves because both sides are free of rank one there. On the overlap $X_{s_is_j}$ the transition $e_i=x^{(j)}_ie_j$ of [F3] pulls back to the scalar $x^{(j)}_i\circ\varphi=s_i/s_j$: one has $\varphi^*(e_i)=\varphi^*(x^{(j)}_ie_j)=(s_i/s_j)\,\varphi^*(e_j)$ with $\varphi^*(e_j)=s_j$, so $\varphi^*(e_i)$ corresponds to $s_i$ under the trivialisation on $X_{s_j}$ exactly as it does under the trivialisation on $X_{s_i}$; hence the local isomorphisms glue to an isomorphism $\varphi^*\mathcal O(1)\cong L$ under which $\varphi^*(e_i)$ corresponds to $s_i$, that is, the universal coordinate section $x_i$ pulls back to $s_i$. [F3, step 3.1, algebra]
5.1 Uniqueness. Let $\psi:X\to\mathbb P^n_S$ be an $S$-morphism with $\psi^*\mathcal O(1)\cong L$ carrying the coordinate sections to $s_0,\dots,s_n$. Then $\psi^{-1}(D_+(x_i))=X_{s_i}$: a point maps into $D_+(x_i)$ exactly when the pullback of the coordinate $x_i$ does not vanish there, and that pullback is $s_i$. On $X_{s_i}$ the coordinates satisfy $x^{(i)}_j\circ\psi=\psi^*(x_j)/\psi^*(x_i)=s_j/s_i$, which agrees with $\varphi$ by step 2.1; hence $\psi=\varphi$ on each $X_{s_i}$, and since these cover $X$, $\psi=\varphi$ by [F5]. [F1, F5, step 2.1, step 4.1]
6.1 Conclusion. Steps 1.1 to 3.1 construct the $S$-morphism with $\varphi^{-1}(D_+(x_i))=X_{s_i}$, step 4.1 identifies $\varphi^*\mathcal O(1)$ with $L$ compatibly with the given sections, and step 5.1 proves uniqueness. Nothing in the construction asserts injectivity or immersion: two distinct points may have proportional tuples, and $\varphi$ is an immersion only under additional hypotheses. If some $s_i=0$ then $X_{s_i}=\varnothing$ and the corresponding local piece is empty, which the gluing of step 3.1 allows; if all $s_i=0$ the hypothesis that they generate $L$ fails unless $X=\varnothing$, and then the construction is vacuous. The Axiom of Choice [A1] is inherited from the projective-space and associated-sheaf constructions; no choice is made here. [A1, step 3.1, step 4.1, step 5.1, cases: vanishing sections and empty X]
\qed
