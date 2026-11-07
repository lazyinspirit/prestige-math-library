---
id: lem-nagata-common-separated-gluing-after-blowup
kind: lemma
title: Common separated gluing of finitely many models after blowup
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - lem-nagata-quasi-domination-after-admissible-blowup
  - lem-nagata-quasi-domination-blowup-comparison
  - lem-nagata-coherent-ideal-extension-with-controlled-support
  - lem-nagata-admissible-blowups-compose
  - lem-nagata-admissible-blowup-universal-property-and-properness
  - lem-nagata-product-blowup-dominates-factor-blowups
  - def-separated-morphism-schemes
  - def-proper-morphism
proof_strategy: direct
axiom_use: No choice principle is assumed. Finite two-model gluing and finite induction suffice; graph closedness uses the diagonal inside the blowup fiber product, without falsely identifying that whole product with the diagonal.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint
      url: https://math.stanford.edu/~conrad/papers/nagatafinal.pdf
      locator: Theorem2.8 and Corollary2.10, internal pp.21–23, read in full. The pulled-back graph is treated below by its closed diagonal, rather than identifying the whole self-fiber-product with that diagonal.
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Lemma1.6, printed pp.666–667, read in full.
---

## Statement

Let $S$ be Noetherian and let $U\hookrightarrow X_i$ for $1\leq i\leq r$, $r\geq1$, be a finite collection of dense $S$-open immersions into separated finite-type $S$-schemes. There are $U$-admissible coherent-ideal blowups $X_i'\to X_i$ and a separated finite-type $S$-scheme $M$ covered by open copies of the $X_i'$, such that all the induced embeddings $U\hookrightarrow M$ agree and this $U$ is schematically dense in $M$. Each proper map $X_i'\to X_i$, viewed on its open domain in $M$, is a proper quasi-domination of $M$ over $X_i$: its graph is closed in $M\times_SX_i$.

The single-member case and empty $U$ or schemes are included.

## Statement references

[Conrad, Theorem2.8 and Corollary2.10, internal pp.21–23](https://math.stanford.edu/~conrad/papers/nagatafinal.pdf)

## Facts & Assumptions

**Given:** The Noetherian base and finite dense open-immersion diagram in the Statement.

[F1] A map on a dense open with closed graph over its protected open extends to a quasi-domination after a coherent-ideal blowup preserving that protected open. [[lem-nagata-quasi-domination-after-admissible-blowup]]

[F2] For the supplied comparison diagram, the second quasi-domination is the blowup of the first domain along the image ideal, and its graph remains closed in the larger ambient product. [[lem-nagata-quasi-domination-blowup-comparison]]

[F3] Coherent ideals extend with controlled support; finite successive blowups compress to one; coherent-ideal blowups are proper and preserve unchanged schematically dense opens. [[lem-nagata-coherent-ideal-extension-with-controlled-support]] [[lem-nagata-admissible-blowups-compose]] [[lem-nagata-admissible-blowup-universal-property-and-properness]] [[lem-nagata-product-blowup-dominates-factor-blowups]]

[F4] Separatedness is closedness of the diagonal. Properness consists of finite type, separatedness and universal closedness, and is stable under base change and composition. [[def-separated-morphism-schemes]] [[def-proper-morphism]]


## Proof

1.1 Begin with two models. Blow up the reduced closed complements of $U$ in each $X_i$. By [F3], $U$ becomes schematically dense and stays unchanged; further admissible blowups preserve this. It suffices to construct the common gluing after this replacement, since [F3] will compress the final composites to single blowups of the original models. Apply [F1] on $X_1$ with target $X_2$, section the common $U$, and protected open $U$. Obtain an admissible blowup $A\to X_1$ and an open $V\subseteq A$ containing $U$, with a map $\varphi:V\to X_2$ whose graph is closed in $A\times_SX_2$. All schemes are still Noetherian, separated and finite type over $S$. [F1, F3, given, construct, algebra]

2.1 Apply [F1] on $X_2$ with target $V$ and protected open $U$, obtaining a blowup $B\to X_2$, an open $W\subseteq B$ containing $U$ and a map $\psi:W\to V$ with closed graph. The comparison [F2], with $A$ as its ambient $Y$, identifies $W$ with $\operatorname{Bl}_{\mathcal K}(V)$ for the pulled-back center ideal and makes $\Gamma_\psi$ closed in $B\times_SA$. Extend $\mathcal K$ to a coherent ideal $\mathcal K'$ on $A$ unit on $U$ by [F3], and put $A'=\operatorname{Bl}_{\mathcal K'}A$. Its inverse image of $V$ is $\operatorname{Bl}_{\mathcal K}V=W$. We therefore have an $S$-isomorphism between the open $W\subseteq B$ and this open of $A'$. [F1, F2, F3, step 1.1, construct, algebra]

3.1 The graph of this isomorphism is closed in $B\times_SA'$. Indeed the pullback of the closed $\Gamma_\psi\subseteq B\times_SA$ is closed there and is identified with $W\times_V\operatorname{Bl}_{\mathcal K}V=W\times_VW$. The graph of the isomorphism is its diagonal, which is closed since the blowup $W\to V$ is separated by [F3]. Thus it is closed in the full ambient product. The whole pulled-back fiber product need not equal the diagonal; only this closed inclusion is used. Glue $A'$ and $B$ along the isomorphism of these opens. The usual finite open gluing construction takes the disjoint union with the specified open identifications and glues their structure sheaves, giving a scheme $M$. Its diagonal is closed: on $A'\times_SA'$ and $B\times_SB$ this is their separatedness, and on the two cross-products it is the graph just proved closed and its flip. These four opens cover $M\times_SM$. Hence $M$ is separated over $S$. It is finite type because its two Noetherian finite-type open pieces cover it. [F3, F4, step 2.1, construct, algebra]

4.1 The embeddings of $U$ in $A'$ and $B$ coincide in $M$, and $U$ is schematically dense in both by [F3], hence in $M$. Compress their successive blowups by [F3] to obtain the required single blowups of the original $X_1,X_2$. To verify the proper quasi-domination clause, use the following direct graph observation. If $j:D\hookrightarrow N$ is open, $N\to S$ is separated and $h:D\to T$ is proper, then $(j,h):D\to N\times_ST$ is proper: factor it as the closed graph of $j$ into $N\times_SD$, followed by the base change $1_N\times h$ of the proper $h$. It is also an immersion, since over the open $D\times_ST$ it is the closed graph of $h$ when $T\to S$ is separated. A proper immersion is closed here directly: its image is closed, and on the open where it is already closed and the complementary open of that image, its defining ideals glue. Apply this with the two open pieces of $M$ and their proper blowup maps to the original models. Their graphs are closed as required. [F3, F4, step 1.1, step 3.1, construct, algebra]

5.1 For finitely many models, induct on their number. Merge the already constructed separated finite-type common model with the next $X_i$ by the two-model construction. The modification of the old common model is a coherent-ideal blowup. Its restriction to each old open model is the corresponding blowup there, so the new open pieces are still successive admissible blowups of the original $X_j$ and compress by [F3]. They cover the modified old model and, together with the new model's open, cover the new common scheme. Schematic density of $U$ persists on every piece. Their maps to the original models are proper composites and have closed graphs by the observation in step 4.1. This proves the finite induction. [F3, F4, step 3.1, step 4.1, construct, algebra]

6.1 For one model, its preliminary complement blowup suffices. If $U$ is empty and dense, all the given models are empty; take $M$ empty. All other constructions use only finite lists, ideal extensions and the fixed gluing isomorphism. [F3, step 1.1, step 5.1, algebra] ∎
