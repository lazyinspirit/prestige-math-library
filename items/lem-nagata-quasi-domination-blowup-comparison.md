---
id: lem-nagata-quasi-domination-blowup-comparison
kind: lemma
title: A quasi-domination comparison is the corresponding blowup
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - lem-nagata-admissible-blowup-universal-property-and-properness
  - lem-nagata-product-blowup-dominates-factor-blowups
  - def-separated-morphism-schemes
  - def-proper-morphism
  - def-closed-immersion-schemes
proof_strategy: direct
axiom_use: No choice principle is assumed. The proof constructs the comparison maps by the blowup universal property and proves their equality using the supplied schematic densities.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint
      url: https://math.stanford.edu/~conrad/papers/nagatafinal.pdf
      locator: Lemma2.7 and its proof, internal pp.19–21, read in full. The special comparison immersion is proved directly below, without a general proper-monomorphism theorem.
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Lemma1.5, printed p.666, read in full.
---

## Statement

Let $X,Y$ be separated Noetherian schemes over a scheme $S$, with a common dense open $U$ identified by $S$-open immersions. Let $V\subseteq Y$ be open containing $U$, suppose $U$ is schematically dense in $V$, and let $\varphi:V\to X$ be an $S$-morphism restricting to the identity on $U$, whose graph is closed in $Y\times_SX$. Let $\mathcal J$ be a coherent ideal on $X$, unit on $U$, and put $\beta:\widetilde X=\operatorname{Bl}_{\mathcal J}(X)\to X$. Suppose $U$ is schematically dense in $\widetilde X$. If $W\subseteq\widetilde X$ is open containing $U$ and $\psi:W\to V$ is an $S$-morphism extending the identity on $U$, with graph closed in $\widetilde X\times_SV$, then there is a canonical $V$-isomorphism
$$W\cong\operatorname{Bl}_{\mathcal J\mathcal O_V}(V).$$
In particular $\psi$ is proper, and its graph is closed in the larger product $\widetilde X\times_SY$. Here image ideals are used in every pullback. Empty schemes and zero or unit ideals are included; no choice hypothesis or finite-type hypothesis on $X,Y\to S$ is imposed.

## Statement references

[Conrad, Lemma2.7, internal pp.19–21](https://math.stanford.edu/~conrad/papers/nagatafinal.pdf)

## Facts & Assumptions

**Given:** Exactly the schemes, maps, ideal, closed graphs and schematic densities in the Statement; the quasi-domination maps are actual input data.

[F1] Noetherian coherent-ideal blowups are proper, separated, and universal for invertible image ideals; they are the identity off the center. [[lem-nagata-admissible-blowup-universal-property-and-properness]]

[F2] A schematically dense open disjoint from the center remains schematically dense in a coherent-ideal blowup. [[lem-nagata-product-blowup-dominates-factor-blowups]]

[F3] A separated morphism has closed diagonal; a section of a separated morphism is a closed immersion. Proper maps are universally closed and remain proper under base change and composition. [[def-separated-morphism-schemes]] [[def-proper-morphism]] [[def-closed-immersion-schemes]]

## Proof

1.1 The two $S$-maps $\varphi\psi$ and $\beta|_W$ from $W$ to $X$ agree on $U$. Since $X\to S$ is separated, their equalizer is closed by [F3]; its ideal vanishes on the schematically dense $U\subseteq W$, and is therefore zero. Thus $\varphi\psi=\beta|_W$. Pull back the closed graph of $\varphi$ along $1_Y\times\beta$ to obtain a closed subscheme $Z\subseteq Y\times_S\widetilde X$. It is contained in the open $V\times_S\widetilde X$ and maps properly to $V$, since there it is the base change of the proper $\widetilde X\to X$ by $\varphi$. Flip the product order when comparing with the graph $\Gamma_\psi$. Commutativity shows that $\Gamma_\psi$ factors through $Z$. [F1, F3, given, construct, algebra]

2.1 By hypothesis $\Gamma_\psi$ is closed in $\widetilde X\times_SV$. The flipped $Z$ lies in that same open of $\widetilde X\times_SY$, so $\Gamma_\psi$ is a closed subscheme of $Z$. Since $Z$ is closed in the full product, so is $\Gamma_\psi$. Its projection to $V$ is proper as a closed subscheme of the $V$-proper $Z$, proving properness of $\psi$ and the larger closed-graph assertion. This argument uses full ideals and graph equations, not merely containment of their point sets. [F1, F3, step 1.1, algebra]

2.2 Put $\widetilde V=\operatorname{Bl}_{\mathcal J\mathcal O_V}(V)$. Its invertible image ideal gives a unique $X$-map $\alpha:\widetilde V\to\widetilde X$ by [F1]. On $W$, the equality in step 1.1 identifies the image of $\mathcal J$ pulled back through $\psi$ with the invertible ideal obtained by restricting $\mathcal J\mathcal O_{\widetilde X}$. Hence the other universal property gives a unique $V$-map $\gamma:W\to\widetilde V$. The composite $\alpha\gamma$ is the inclusion $j:W\hookrightarrow\widetilde X$, since both are $X$-maps with the prescribed invertible image ideal and uniqueness in [F1] applies. Both comparison maps are the identity on $U$. [F1, step 1.1, construct, algebra]

3.1 The map $\gamma$ is proper: its graph in $W\times_V\widetilde V$ is closed because $\widetilde V\to V$ is separated, and the projection to $\widetilde V$ is the base change of the proper $\psi$ from step 2.1. It is also a locally closed immersion, by a direct section argument. Let $D=\alpha^{-1}(W)\subseteq\widetilde V$. The equality $\alpha\gamma=j$ makes $\gamma$ a section of $\alpha|_D:D\to W$. This morphism is separated, since $D\to S$ is separated: $V\to S$ is separated as an open of $Y$, and its blowup is separated over $V$. Thus [F3] makes $\gamma$ closed in $D$. Properness makes its image closed in all of $\widetilde V$. Cover $\widetilde V$ by the open $D$ and the open complement of that closed image. On the first open $\gamma$ is a closed immersion and on the second it is empty; their defining ideals agree on the overlap. They therefore glue to prove that $\gamma$ is a closed immersion in $\widetilde V$. No general theorem about proper monomorphisms is needed. [F1, F3, step 2.1, step 2.2, construct, algebra]

4.1 By [F2], $U$ is schematically dense in $\widetilde V$, because it is schematically dense in $V$ and the image center ideal is unit there. The closed immersion $\gamma$ contains this unchanged $U$, by step 2.2. Its defining ideal consequently vanishes on $U$ and must be zero. Thus $\gamma$ is an isomorphism, proving the asserted canonical identification. If $U$ is empty, its schematic density in $V$ and $\widetilde X$ forces both empty, and all maps and conclusions are empty. Unit ideals yield identity blowups by [F1]; zero ideals give empty blowups and are already covered by the hypotheses. Every construction used only the supplied input maps and universal properties, so no extra finiteness or choice assumption has entered. [F1, F2, step 2.2, step 3.1, algebra] ∎
