---
id: lem-nagata-quasi-affine-target-quasi-domination
kind: lemma
title: Quasi-domination of a quasi-affine target after a single blowup
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - lem-nagata-affine-space-quasi-domination-after-blowup
  - lem-nagata-coherent-ideal-extension-with-controlled-support
  - lem-nagata-product-blowup-dominates-factor-blowups
  - lem-nagata-admissible-blowup-universal-property-and-properness
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-closed-immersion
  - def-separated-morphism-schemes
  - def-multiplicative-subset-and-localisation
  - def-quotient-ring
proof_strategy: direct
axiom_use: No choice principle is assumed. The quasi-affine embedding uses a finite principal cover and a finite subalgebra. Local ideals are extended by the proved controlled-ideal lemma and dominated by their single product blowup.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint
      url: https://math.stanford.edu/~conrad/papers/nagatafinal.pdf
      locator: Theorem 2.4 Cases 1–2, internal pp. 13–16, read in full. The finite affine-envelope embedding and closed-graph domain comparison are written out below.
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Theorem 1.2 Cases 1–2, printed p. 665, read in full.
---

## Statement

Let $X,Y$ be Noetherian schemes, and let $p:Y\to X$ be a quasi-affine morphism of finite type. Here quasi-affine means that over each affine open of $X$, the inverse image in $Y$ is an open subscheme of some affine scheme over that open. Let $U\subseteq X$ be dense and open, and let $f:U\to Y$ be an $X$-morphism. There is a coherent ideal $\mathcal J$ on $X$ whose zero set is exactly $X\setminus U$ such that the single blowup $\beta:X'=\operatorname{Bl}_{\mathcal J}(X)\to X$ has a dense open $T\subseteq X'$ containing the unchanged copy of $U$ and an $X$-morphism $\widetilde f:T\to Y$ extending $f$, with graph closed in $X'\times_XY$.

The morphism $\beta$ is proper and is an isomorphism over $U$, and $U$ is schematically dense in $X'$. No schematic-density assumption on the original $U\subseteq X$ or reducedness hypothesis is required. Empty schemes are included.

## Statement references

[Conrad, Theorem 2.4 Cases 1–2, internal pp. 13–16](https://math.stanford.edu/~conrad/papers/nagatafinal.pdf)

[Deligne, Theorem 1.2 Cases 1–2, printed p. 665](https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf)

## Facts & Assumptions

**Given:** The Noetherian schemes, finite-type quasi-affine morphism, dense open and section in the Statement.

[F1] Over a Noetherian affine base, a morphism from a dense open to affine space extends after one blowup centered exactly outside that open to projective space. The modified dense open is schematically dense, and restriction back to affine space has graph closed in the full product with the modification. [[lem-nagata-affine-space-quasi-domination-after-blowup]]

[F2] A coherent ideal on an open subset of a Noetherian scheme, equal to the unit ideal off a prescribed closed subset there, extends coherently to the whole scheme while remaining the unit ideal off that closed subset. [[lem-nagata-coherent-ideal-extension-with-controlled-support]]

[F3] The blowup of a finite product of coherent base ideals maps to every factor blowup and is itself the blowup of the other pulled-back factors over each one. These maps are proper; a schematically dense open disjoint from the centers remains schematically dense after such a blowup. [[lem-nagata-product-blowup-dominates-factor-blowups]]

[F4] A coherent-ideal blowup over a Noetherian scheme is proper, is the identity off the center, and has schematically dense open complement of the center. [[lem-nagata-admissible-blowup-universal-property-and-properness]]

[F5] Local finite type is given by affine finite algebra generators. Localization preserves such finite algebra generation, a locally closed immersion is closed in a suitable open ambient subscheme, and separatedness means a closed diagonal. [[def-locally-finite-type-and-finite-type-morphism]] [[def-locally-closed-immersion]] [[def-separated-morphism-schemes]] [[def-multiplicative-subset-and-localisation]] [[def-quotient-ring]]

## Proof

1.1 We first construct the finite affine embedding needed locally. Let the base be $\operatorname{Spec}A$ and write the quasi-affine $Y$ as an open of an affine $A$-scheme $\operatorname{Spec}B$. Every point of $Y$ has an affine neighbourhood of finite type over $A$: in the definition of local finite type, shrink the affine target neighbourhood to a principal open of $\operatorname{Spec}A$ containing its image, and restrict the source affine neighbourhood accordingly. This restriction is principal on that source and its coordinate algebra is finite type over a localization $A_a$, hence over $A$. Choose principal opens $D_B(b_i)$ contained in these source neighbourhoods and covering $Y$; a finite subcover exists because $Y$ is Noetherian. Each $D_B(b_i)$ is also principal on the corresponding finite-type source affine neighbourhood, since $b_i$ is a function on the ambient $\operatorname{Spec}B$. Thus $B_{b_i}$ is a finitely generated $A$-algebra. Choose finite generators for each, express them as fractions with numerators $c_{ij}\in B$ and denominators powers of $b_i$, and let $B_0\subseteq B$ be the $A$-subalgebra generated by the finite lists $b_i,c_{ij}$. [F5, given, construct]

2.1 For each $i$, the map $(B_0)_{b_i}\to B_{b_i}$ is surjective because its image contains the chosen algebra generators and $b_i^{-1}$. It is injective because $B_0$ is a subring of $B$: an equality killed by a power of $b_i$ in $B$ is the identical equality in $B_0$. The corresponding affine isomorphisms agree on every overlap by their fraction formulas, and therefore identify $Y$ with the open $\bigcup_iD_{B_0}(b_i)$ of $\operatorname{Spec}B_0$. A finite polynomial algebra over $A$ surjects onto $B_0$, so $\operatorname{Spec}B_0$ embeds as a closed subscheme of some $\mathbb A^n_A$. Its open $Y$ is a locally closed subscheme of that affine space, and is closed in an appropriate open $O$ of $\mathbb A^n_A$: remove from the affine space the closed subset given by the complement of $Y$ in $\operatorname{Spec}B_0$. This constructs the required immersion without an affine-coordinate finite-generation theorem. [F5, step 1.1, construct, algebra]

3.1 Still over this affine base, compose $f$ with that immersion into $\mathbb A^n_A$ and apply [F1]. It gives a blowup $P$ centered exactly outside $U$, with $U$ schematically dense, and a morphism $g:W\to\mathbb A^n_A$ on an open $W\subseteq P$ containing $U$, whose graph is closed in $P\times_A\mathbb A^n_A$. Restrict to $W_Y=g^{-1}(O)$. On $U$ this morphism lands in the closed subscheme $Y\subseteq O$. Its defining ideal therefore pulls back to an ideal on $W_Y$ vanishing on the schematically dense $U$, so that ideal is zero. Hence $g|_{W_Y}$ factors through $Y$. Its graph is closed in $P\times_AY$: it is the inverse image of the closed graph of $g$ under $P\times_AY\to P\times_A\mathbb A^n_A$, and that inverse image has domain exactly $W_Y$. Thus the affine-base assertion holds, with $U$ still schematically dense in the entire modification $P$. [F1, F5, step 2.1, construct, algebra]

4.1 Now choose a finite affine cover $\{V_i\}$ of the general $X$, and apply the affine-base result to $Y_i=p^{-1}(V_i)$, $U_i=U\cap V_i$ and $f|_{U_i}$. Obtain ideals $I_i$ on $V_i$, factor blowups $P_i\to V_i$, and maps $g_i:T_i\to Y_i$ on opens $T_i\subseteq P_i$ containing $U_i$ with graphs closed in $P_i\times_{V_i}Y_i$. Extend $I_i$ to a coherent ideal $\mathcal J_i$ on $X$ unit on $U$ by [F2], using the closed subset $X\setminus U$. Let $\mathcal J=\prod_i\mathcal J_i$ and form $X'=\operatorname{Bl}_{\mathcal J}(X)$. The product center is exactly $X\setminus U$: all factors are unit on $U$, while a point outside $U$ lies in some $V_i$ and in the zero set of its $I_i$. By [F3] there are canonical maps $\pi_i:X'\to\operatorname{Bl}_{\mathcal J_i}(X)$, which over $V_i$ map to $P_i$. Put $T_i'=\pi_i^{-1}(T_i)$ over $V_i$, with the induced map $g_i':T_i'\to Y_i$. Its graph is the pullback of the graph of $g_i$, hence is closed in $\beta^{-1}(V_i)\times_{V_i}Y_i$. By [F4], $U$ is schematically dense in all of $X'$. [F2, F3, F4, step 3.1, construct, algebra]

5.1 The $g_i'$ agree on intersections of their domains: they agree on the copy of $U$, which is schematically dense on every such open intersection, and their target $Y$ is separated over $X$. Indeed quasi-affineness embeds it locally in an affine $X$-scheme, so its diagonal is closed; then the equalizer ideal must vanish by schematic density. They glue to a map $\widetilde f:T=\bigcup_iT_i'\to Y$. We also have $T\cap\beta^{-1}(V_i)=T_i'$. To prove the nontrivial inclusion, restrict any $g_j'$ to $D=T_j'\cap\beta^{-1}(V_i)$. Its graph maps into the product over $V_i$. Pull back the closed graph of $g_i'$ along that map. This gives a closed subscheme of $D$ containing the schematically dense $U\cap D$, because both maps agree there. Its ideal is zero, so the whole graph factors through the graph of $g_i'$. In particular its domain lies in $T_i'$, proving $D\subseteq T_i'$. Taking the union over $j$ gives the equality. [F3, F4, F5, step 4.1, algebra]

6.1 Over each $V_i$, the graph of $\widetilde f$ is consequently the closed graph of $g_i'$. These base opens cover $X$ and their product preimages cover $X'\times_XY$, so the graph is closed globally. The open $T$ contains $U$, and $U$ is schematically and topologically dense in $X'$ by [F4], so $T$ is dense as well. Properness of $\beta$, its unchanged restriction over $U$, and the exact center support were established in step 4.1. If $X$ is empty all constructions are empty; if $Y$ is empty, the given map forces $U$ empty and density forces $X$ empty. This proves the Statement in every case. [F1, F4, step 4.1, step 5.1, algebra] ∎
