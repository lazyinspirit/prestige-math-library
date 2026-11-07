---
id: lem-nagata-quasi-domination-after-admissible-blowup
kind: lemma
title: Extend a quasi-domination after a blowup preserving a protected open
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - lem-nagata-graph-closure-has-finite-fibers-after-blowup
  - lem-nagata-separated-quasi-finite-morphisms-are-quasi-affine
  - lem-nagata-quasi-affine-quasi-domination-preserving-an-open
  - lem-nagata-admissible-blowups-compose
  - lem-nagata-admissible-blowup-universal-property-and-properness
proof_strategy: direct
axiom_use: No choice principle is assumed. The finite graph-closure reduction, local scheme quasi-affineness and coherent-ideal blowup composition preserve the original protected open.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint
      url: https://math.stanford.edu/~conrad/papers/nagatafinal.pdf
      locator: Theorem2.4 general case, internal pp.17–19, read in full.
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Theorem1.2 general case, printed p.666, read in full.
---

## Statement

Let $S,X,Y$ be Noetherian schemes, with $X,Y$ over $S$ and $Y\to S$ separated of finite type. Let $U\subseteq V\subseteq X$ be dense open subschemes, and let $f:U\to Y$ be an $S$-morphism whose graph is closed in $V\times_SY$. There is a coherent ideal $\mathcal J$ on $X$, unit on $V$, such that $\beta:X'=\operatorname{Bl}_{\mathcal J}(X)\to X$ has a dense open $T\subseteq X'$ containing the unchanged $U$ and an $S$-morphism $\widetilde f:T\to Y$ extending $f$, with graph closed in $X'\times_SY$. The blowup is proper and is the identity over all of $V$. No separatedness or finite-type hypothesis on $X\to S$, reducedness, schematic-density or choice assumption is added.

## Statement references

[Conrad, Theorem2.4, internal pp.17–19](https://math.stanford.edu/~conrad/papers/nagatafinal.pdf)

## Facts & Assumptions

**Given:** Exactly the schemes, morphism, open inclusions and closed graph in the Statement.

[F1] For a separated finite-type morphism between Noetherian schemes with a section on $U$ having closed graph over $V$, one coherent-ideal blowup unit on $V$ makes the graph closure have a finite open cover by locally closed immersions into the new base. [[lem-nagata-graph-closure-has-finite-fibers-after-blowup]]

[F2] A separated quasi-finite finite-type morphism between Noetherian schemes is quasi-affine. [[lem-nagata-separated-quasi-finite-morphisms-are-quasi-affine]]

[F3] A finite-type quasi-affine target with such a section admits an extending quasi-domination after one coherent-ideal blowup preserving $V$. [[lem-nagata-quasi-affine-quasi-domination-preserving-an-open]]

[F4] Coherent-ideal blowups are proper, separated, unchanged off their centers and have dense center complement. Finite compositions are single coherent-ideal blowups preserving every common protected open. [[lem-nagata-admissible-blowup-universal-property-and-properness]] [[lem-nagata-admissible-blowups-compose]]


## Proof

1.1 Apply [F1] to the separated finite-type projection $p:X\times_SY\to X$ and the section $(1,f):U\to X\times_SY$. Its target is Noetherian, since it is finite type over the Noetherian $X$. Obtain a blowup $X_1\to X$ unit on $V$ and a closed graph closure $C\subseteq X_1\times_SY$, separated and finite type over $X_1$, with a finite open cover by locally closed immersions into $X_1$. Each such immersion has every nonempty local fiber equal to the corresponding base residue field, since its base change to that field is an immersion into a point. Thus $C\to X_1$ is quasi-finite, including nonreduced original bases. By [F2] it is quasi-affine. The section on $U$ lands in $C$ by construction. Over $V$, $C$ is exactly the original closed graph, so this section has closed graph over $V$. [F1, F2, given, construct, algebra]

2.1 The copy of $U$ is dense in $X_1$: the complement of the first blowup center is dense by [F4], is unchanged from an open of $X$, and contains the originally dense $U$. Apply [F3] to $C\to X_1$, with these same unchanged $U\subseteq V$. It gives a second blowup $X_2\to X_1$ unit on $V$, an open $T\subseteq X_2$ containing $U$, and an $X_1$-map $T\to C$ with graph closed in $X_2\times_{X_1}C$. The latter product is closed in $X_2\times_SY$, since $C$ is closed in $X_1\times_SY$. Hence the composite $T\to C\to Y$ has closed graph in the required full product and extends $f$. The same dense-center-complement argument shows $U$, and therefore $T$, is dense in $X_2$. [F1, F3, F4, step 1.1, construct, algebra]

3.1 Compress the two blowups by [F4] to the blowup of one coherent ideal $\mathcal J$ on the original $X$, unit on $V$. Transfer $T$ and its extending map through the resulting $X$-isomorphism. Properness and the unchanged restriction over $V$ follow from [F4]. Empty $X$ causes empty constructions; if $Y$ is empty the given section and density force $X$ empty. This proves the Statement in all cases. [F4, step 2.1, construct, algebra] ∎
