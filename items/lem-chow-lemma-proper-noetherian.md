---
id: lem-chow-lemma-proper-noetherian
kind: lemma
title: "Chow lemma for proper Noetherian schemes"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - lem-affine-open-containing-component-generics
  - lem-noetherian-space-has-finitely-many-irreducible-components
  - lem-schematic-closure-and-dense-agreement
  - def-scheme-theoretic-image
  - thm-scheme-theoretic-image-quasi-compact-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-locally-finite-type-and-finite-type-morphism
  - def-quasi-compact-and-quasi-separated-morphism
  - def-quasi-compact-and-quasi-separated-scheme
  - def-irreducible-component-of-a-topological-space
  - def-generic-point-irreducible-closed-subset
  - def-relative-projective-space-standard-charts
  - def-standard-open-proj
  - lem-standard-opens-proj-affine
  - thm-projective-space-proper-over-base
  - lem-relative-projective-space-universally-closed
  - thm-segre-line-bundle-external-tensor
  - def-proper-morphism
  - lem-proper-stable-composition
  - lem-proper-stable-base-change
  - lem-proper-local-on-base
  - lem-proper-source-to-separated-target-proper
  - lem-closed-immersion-proper
  - lem-immersion-with-closed-image
  - def-projective-morphism-pre-proj
  - def-locally-closed-immersion
  - def-open-immersion-schemes
  - def-closed-immersion-schemes
  - def-separated-morphism-schemes
  - def-diagonal-morphism-scheme
  - lem-affine-finite-type-source-immerses-in-relative-projective-space
  - def-affine-open-subscheme
  - def-scheme-over-base
  - def-fibre-product-schemes-universal-property
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Coherent Cohomology, Lemma 30.18.1 and Section 29.7"
      url: "https://stacks.math.columbia.edu/tag/0200"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Section 28.1"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $S$ be a Noetherian
scheme ([[def-locally-noetherian-and-noetherian-scheme]]) and let
$f:X\to S$ be a separated morphism of finite type
([[def-separated-morphism-schemes]],
[[def-locally-finite-type-and-finite-type-morphism]]). Then there exist an
integer $N\ge0$, a scheme $X'$ and morphisms
$$\pi:X'\longrightarrow X,\qquad \iota:X'\longrightarrow\mathbb P^N_S,$$
with $\iota$ an immersion over $S$ ([[def-locally-closed-immersion]]) and
$\pi$ proper and surjective ([[def-proper-morphism]]), and there is a dense
open subscheme $U\subseteq X$ such that $\pi^{-1}(U)\to U$ is an isomorphism.

The construction passes through the schematic closure of $U$ in $X$: in the
proof $X$ is first replaced by the schematic closure $X^*$ of a dense open
$U\subseteq X$, a closed subscheme of $X$ through which $U\hookrightarrow X$
factors, over which $U$ is schematically dense and which is a surjective
closed immersion over $X$ restricting to an isomorphism over $U$; a solution
for $X^*$ composes with $X^*\to X$ to a solution for $X$.

If $f$ is proper, then $\iota$ is a closed immersion, so $X'$ is projective
over $S$ ([[def-projective-morphism-pre-proj]]). The case $X=\varnothing$ is
included with $X'=U=\varnothing$.

## Facts & Assumptions
**Given:** The Axiom of Choice, a Noetherian scheme $S$, and a separated morphism $f:X\to S$ of finite type.

[F1] Projective space: for a scheme $S$ and $n\ge0$ the projective space
$\mathbb P^n_S$ is glued from its standard charts, the standard open
$D_+(x_0)\subseteq\mathbb P^n_S$ is affine with coordinate ring
$\mathcal O_S[x_1,\dots,x_n]$ over an affine open of $S$ and is identified
with the affine $n$-space over that open, and the structure morphism
$\mathbb P^n_S\to S$ is proper and universally closed
([[def-relative-projective-space-standard-charts]],
[[def-standard-open-proj]], [[lem-standard-opens-proj-affine]],
[[thm-projective-space-proper-over-base]],
[[lem-relative-projective-space-universally-closed]],
[[def-proper-morphism]]).

[F2] Properness calculus: closed immersions are proper; a composite of proper
morphisms is proper; the base change of a proper morphism is proper;
properness is local on the target; a morphism from a proper $S$-scheme to a
separated $S$-scheme is proper; in particular a proper morphism has closed
image, and an immersion whose image is closed is a closed immersion
([[lem-closed-immersion-proper]], [[lem-proper-stable-composition]],
[[lem-proper-stable-base-change]], [[lem-proper-local-on-base]],
[[lem-proper-source-to-separated-target-proper]], [[def-proper-morphism]],
[[lem-immersion-with-closed-image]]).

[F3] Under the Axiom of Choice assumed here, the scheme-theoretic image of a quasi-compact morphism $h:T\to Y$ has the following properties: with
$\mathcal I=\ker(\mathcal O_Y\to h_*\mathcal O_T)$ the sheaf $\mathcal I$ is a
quasi-coherent ideal and $V(\mathcal I)$ is the scheme-theoretic image
([[def-scheme-theoretic-image]]): the smallest closed subscheme of $Y$
through which $h$ factors, with $\mathcal O_{V(\mathcal I)}\to h_*\mathcal O_T$
injective, and for every open $W\subseteq Y$ the restriction
$V(\mathcal I)\cap W$ is the scheme-theoretic image of $h^{-1}(W)\to W$
([[thm-scheme-theoretic-image-quasi-compact-morphism]]). The published
finite-cover localization and closed-subscheme correspondence give the
existence, restriction and minimality clauses used in steps 1.6–1.8.

[F4] Closure of a quasi-compact open immersion: for a quasi-compact open
immersion $j:U\to Y$ with $Y$ Noetherian, the kernel sheaf
$\mathcal K=\ker(\mathcal O_Y\to j_*\mathcal O_U)$ is quasi-coherent and
$Z=Z_{\mathcal K}$ is the schematic closure of $U$ in $Y$: the smallest
closed subscheme through which $j$ factors, with $j=i\circ j'$, $j'$ an open
immersion, $U$ schematically dense in $Z$, and morphisms $Z\to T$ into a
separated scheme agreeing after composition with $j'$ being equal
([[lem-schematic-closure-and-dense-agreement]]).

[F5] Noetherian sheaf theory: for $S$ Noetherian and $f$ of finite type the
scheme $X$ is Noetherian and quasi-compact, hence has finitely many
irreducible components $X_1,\dots,X_r$ with generic points $\eta_i$, and every
open subscheme of $X$ is Noetherian and quasi-compact; for every point
$x\in X$ there is an affine open subscheme $U_x\subseteq X$ containing $x$ and
all generic points $\eta_1,\dots,\eta_r$
([[def-locally-noetherian-and-noetherian-scheme]],
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]],
[[lem-noetherian-space-has-finitely-many-irreducible-components]],
[[lem-affine-open-containing-component-generics]],
[[def-quasi-compact-and-quasi-separated-scheme]],
[[def-irreducible-component-of-a-topological-space]],
[[def-generic-point-irreducible-closed-subset]],
[[def-affine-open-subscheme]]).

[F6] Affine-source immersion over an arbitrary base: assuming AC, every affine scheme $Y$ locally of finite type over a scheme $S$ admits an $S$-immersion $Y\to\mathbb P^n_S$ for some $n$. By the definition of immersion, that map is a closed immersion into a suitable open subscheme of $\mathbb P^n_S$; the local supplier constructs that open from principal source opens over affine base opens. ([[lem-affine-finite-type-source-immerses-in-relative-projective-space]], [[def-locally-closed-immersion]]).

[F7] Segre embedding: for schemes $P_1=\mathbb P^{n_1}_S,\dots,P_m=\mathbb
P^{n_m}_S$ over a scheme $S$ the product
$P_1\times_S\cdots\times_SP_m$ embeds over $S$ as a closed subscheme of
$\mathbb P^N_S$ for $N=(n_1+1)\cdots(n_m+1)-1$, by iterating the closed
immersion $\mathbb P^a_S\times_S\mathbb P^b_S\to
\mathbb P^{(a+1)(b+1)-1}_S$
([[thm-segre-line-bundle-external-tensor]]). Its current batch-8 Step-3b
receipt is closed; the exact use below is step 1.9.



## Proof

**Proof technique:** direct: choose finitely many affine opens each containing every generic point, replace $X$ by the schematic closure of their intersection $U$, immerse the affine pieces into projective spaces, take the scheme-theoretic image of the diagonal immersion of $U$ in the product of these projective spaces, and take the union of the preimages of the affine pieces inside that image; the resulting open subscheme maps properly and surjectively to $X$ and isomorphically over $U$.

1.1 If $X=\varnothing$ take $X'=U=\varnothing$, $N=0$, and both maps empty; all assertions hold, the immersion being the identity of the empty scheme. Assume $X\ne\varnothing$. By [F5] the scheme $X$ is Noetherian and quasi-compact with finitely many irreducible components $X_1,\dots,X_r$, $r\ge1$, and generic points $\eta_i$. [F5]

1.2 For every point $x\in X$ choose by [F5] an affine open $U_x$ containing $x$ and all generic points $\eta_1,\dots,\eta_r$. Since $X$ is quasi-compact, finitely many of them, say $U_1,\dots,U_m$, cover $X$, and each $U_i$ contains every $\eta_j$. [F5]

1.3 The open subscheme $U:=U_1\cap\cdots\cap U_m$ is dense and nonempty: it contains $\eta_1,\dots,\eta_r$, and every irreducible component $\overline{\{\eta_j\}}$ meets $U$, so the closure of $U$ contains each component and hence equals $X$. [F5]

1.4 Replace $X$ by the schematic closure $X^*$ of $U$ in $X$: by [F4] applied to the open immersion $U\hookrightarrow X$ (quasi-compact because $X$ is Noetherian) there is a closed immersion $X^*\to X$ which is a surjective closed immersion, restricts to an isomorphism over $U$, and makes $U$ schematically dense in $X^*$; also $X^*$ is Noetherian and $U_i^*:=X^*\cap U_i$ is affine and contains $U$, the finitely many $U_i^*$ covering $X^*$. Since properness, surjectivity and the isomorphism over $U$ are preserved by composing with the closed immersion $X^*\to X$, and since immersions into $\mathbb P^N_S$ compose with that closed immersion, it suffices to prove the lemma for $X^*$; hence from now on we assume $U$ is schematically dense in $X$, replacing $X,U_i$ by $X^*,U_i^*$. [F4]

1.5 For each $i$, the affine open $U_i$ is locally of finite type over $S$ by restriction of $f$. Apply [F6] directly to obtain an $S$-immersion $j_i:U_i\to\mathbb P^{n_i}_S$ for some $n_i\ge0$. This uses no assertion that $U_i$ maps into a single affine open of $S$. [F6, 1.2]

1.6 Let $Z_i\subseteq\mathbb P^{n_i}_S$ be the scheme-theoretic image of $j_i$, which exists by [F3] because $U_i$ is Noetherian and quasi-compact. By [F6], write $j_i$ as a closed immersion $U_i\hookrightarrow W_i$ followed by an open immersion $W_i\hookrightarrow\mathbb P^{n_i}_S$. The restriction clause of [F3] identifies $Z_i\cap W_i$ with the scheme-theoretic image of that closed immersion, namely $U_i$. Thus $U_i\to Z_i$ is an open immersion, schematically dense by [F3], and $Z_i\to S$ is proper as a closed subscheme of the proper $S$-scheme $\mathbb P^{n_i}_S$. [F1, F2, F3, F6]

1.7 Let $P:=\mathbb P^{n_1}_S\times_S\cdots\times_S\mathbb P^{n_m}_S$ with projections $\mathrm{pr}_i$, and let $j:U\to P$ be $(j_1|_U,\dots,j_m|_U)$. The map $U\to U_1\times_S\cdots\times_SU_m$ is a closed immersion: it is the base change of the closed multi-diagonal $X\to X^m_S$ of separated $X\to S$, since $U=U_1\cap\cdots\cap U_m$. For the opens $W_i$ of 1.6, the product of the closed immersions $U_i\hookrightarrow W_i$ is a closed immersion $\prod_SU_i\hookrightarrow\prod_SW_i$, and $\prod_SW_i$ is open in $P$. Hence $j$ is a closed immersion into that open product and thus an immersion into $P$. Its source is Noetherian, so the scheme-theoretic image $Z\subseteq P$ exists by [F3]. Restricting to the open product $\prod_SW_i$ gives exactly $j(U)$, so $U\to Z$ is an open immersion and $U$ is schematically dense in $Z$. The morphism $Z\to S$ is proper: the product $P\to S$ is proper by successive base change and composition of the projective-space maps [F1,F2], and $Z\hookrightarrow P$ is a closed immersion. [F1, F2, F3, F6, 1.3, 1.6]

1.8 For each $i$ the projection $\mathrm{pr}_i|_Z:Z\to\mathbb P^{n_i}_S$ factors through $Z_i$: the closed subscheme $\mathrm{pr}_i^{-1}(Z_i)\subseteq P$ is a closed subscheme through which $j$ factors, because $\mathrm{pr}_i\circ j=j_i|_U$ factors through $Z_i$; by minimality of $Z$ among closed subschemes of $P$ through which $j$ factors we have $Z\subseteq\mathrm{pr}_i^{-1}(Z_i)$, and hence $\mathrm{pr}_i|_Z$ factors through the projection $\mathrm{pr}_i^{-1}(Z_i)\to Z_i$ of the fibre product. Denote the induced morphism by $p_i:Z\to Z_i$; it is proper because $Z$ and $Z_i$ are proper over $S$ and $Z_i$ is separated over $S$ (as a closed subscheme of the separated $S$-scheme $\mathbb P^{n_i}_S$), using [F2]. [F2, F3, 1.6, 1.7]

1.9 Let $V_i:=p_i^{-1}(U_i)\subseteq Z$; this is an open subscheme, and $p_i|_{V_i}:V_i\to U_i$ is proper, being the base change of the proper morphism $p_i$ along the open immersion $U_i\hookrightarrow Z_i$; it is surjective because its image is closed in $U_i$ (proper morphisms have closed image) and contains $p_i(U\cap V_i)=U$, which is dense in $U_i$. Set $X':=V_1\cup\cdots\cup V_m\subseteq Z$; this is an open subscheme, so $X'\to Z$ is an open immersion, and composing with the closed immersion $Z\hookrightarrow P$ gives an immersion $X'\to P$. By the iterated Segre embedding [F7] the product $P$ is a closed subscheme of $\mathbb P^N_S$ for $N=(n_1+1)\cdots(n_m+1)-1$, so the composite $X'\to\mathbb P^N_S$ is an immersion over $S$ (composition of an open immersion, a closed immersion and a closed immersion), which is the required $\iota$. [F2, F7]

1.10 The morphisms $p_i|_{V_i}:V_i\to U_i\hookrightarrow X$ glue to a morphism $\pi:X'\to X$: on $V_i\cap V_j$ the two composites agree after restriction to the schematically dense open $U$ (both equal the identity of $U$), and they agree on all of $V_i\cap V_j$ because their difference, viewed through the closed diagonal $\Delta_{X/S}\subseteq X\times_SX$ of the separated $S$-scheme $X$, has closed preimage in $V_i\cap V_j$ containing the schematically dense open $U$, forcing equality; here $U$ is schematically dense in the open subscheme $V_i\cap V_j$ because schematic density is checked by the vanishing of a kernel sheaf and passes to open subschemes. [F4, 1.4, 1.7, 1.9]

1.11 For each $i$, $\pi^{-1}(U_i)=V_i$. The inclusion $V_i\subseteq\pi^{-1}(U_i)$ is part of the construction. Conversely, cover $\pi^{-1}(U_i)$ by the opens $W_{ij}:=V_j\cap\pi^{-1}(U_i)$. Both $p_i|_{W_{ij}}$ and $j_i\circ\pi|_{W_{ij}}$ map $W_{ij}$ to the separated $S$-scheme $Z_i$ and agree on $U\subseteq W_{ij}$. The open $U$ is schematically dense in $W_{ij}$ because it is schematically dense in $Z$ and $W_{ij}$ is open; separatedness and [F4] force the two maps to agree everywhere. Hence $p_i(W_{ij})\subseteq j_i(U_i)=U_i$, so $W_{ij}\subseteq p_i^{-1}(U_i)=V_i$. Their union is $\pi^{-1}(U_i)$, proving equality. [F4, 1.6, 1.7, 1.9, 1.10]

1.12 The morphism $\pi$ is proper: by 1.11 the restrictions $\pi|_{\pi^{-1}(U_i)}: \pi^{-1}(U_i)\to U_i$ are identified with the proper morphisms $p_i|_{V_i}$, and properness is local on the target for the cover $X=U_1\cup\cdots\cup U_m$. [F2, 1.9, 1.11]

1.13 The morphism $\pi$ is surjective: its image is closed in $X$ (properness) and contains $\pi(V_i)=p_i(V_i)=U_i$ for every $i$ by 1.9, hence equals $X$. [F2, 1.9, 1.12]

1.14 Let $E:=\pi^{-1}(U)$, an open subscheme of $Z$ containing the schematically dense open $U$. The two $S$-morphisms $E\to P$ given by the inclusion $E\hookrightarrow Z\hookrightarrow P$ and by $j\circ\pi|_E$ agree on $U$, where $\pi$ is the identity. Since $P$ is separated over $S$, [F4] makes them equal on $E$. The closed immersion $Z\hookrightarrow P$ is a monomorphism, so as maps into $Z$ this says $j_Z\circ\pi|_E=\operatorname{id}_E$, where $j_Z:U\hookrightarrow Z$ is the open immersion from 1.7. Also $\pi\circ j_Z=\operatorname{id}_U$ by construction. Therefore $E=j_Z(U)$ and $\pi^{-1}(U)\to U$ is an isomorphism. [F4, 1.7, 1.10, 1.11]

1.15 If $f$ is proper, then $X'$ is proper over $S$, being the composite of the proper morphism $\pi:X'\to X$ of 1.12 with $f$; the immersion $\iota:X'\to\mathbb P^N_S$ is a morphism of $S$-schemes with $X'$ proper over $S$ and $\mathbb P^N_S$ separated over $S$, hence $\iota$ is proper, in particular its image is closed in $\mathbb P^N_S$; by [F2] the immersion $\iota$ is then a closed immersion, and $X'$ is projective over $S$ in the sense of [[def-projective-morphism-pre-proj]]. [F2, 1.12]

2.1 Boundary and choice accounting. The empty case is 1.1; $m=1$ (one affine chart) and $r=1$ (one irreducible component) are included in the arguments above, and $N=0$ is allowed when all $n_i=0$ (then $P=\mathbb P^0_S$ and the Segre embedding is the identity). The Axiom of Choice is a hypothesis of the published scheme-image and closed-subscheme correspondence used in [F3], and licenses the finite affine and principal-open selections in steps 1.1–1.8. Later steps use only finite selections from those covers. [F3, F4, F5] ∎
