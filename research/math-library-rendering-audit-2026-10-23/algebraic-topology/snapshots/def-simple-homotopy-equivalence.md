---
id: def-simple-homotopy-equivalence
kind: definition
title: "Simple homotopy equivalence"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-elementary-expansion-and-collapse-of-finite-cw-complexes, def-homotopy-equivalence]
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, Definition 2.17, pp.34–35"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Definition 2.17, pp.34–35"
---
## Definition

Let $X$ and $Y$ be finite CW complexes. A map $f:X\to Y$ is a **simple
homotopy equivalence** if it is homotopic to a finite composite
$$X=X_0\xrightarrow{f_1}X_1\xrightarrow{f_2}\cdots\xrightarrow{f_k}X_k=Y$$
of maps between finite CW complexes in which each $f_i$ is either an
elementary expansion inclusion, an elementary collapse map
([[def-elementary-expansion-and-collapse-of-finite-cw-complexes]]), or a
cellular isomorphism. A **cellular isomorphism** here means a homeomorphism
that carries the cell structure of its source isomorphically onto the cell
structure of its target, so that it restricts to a homeomorphism between the
interiors of corresponding cells; a general homeomorphism is *not* included by
definition.

For a formal collapse $Y\searrow X$, an **elementary collapse map** means
any retraction $r:Y\to X$ of its expansion inclusion $j:X\hookrightarrow Y$.
Such maps exist: the characteristic ball strongly deformation retracts onto
the complementary boundary disk, fixing that disk pointwise. This deformation
descends through the attaching identifications to a strong deformation
retraction of $Y$ onto $X$. If $r_0$ is its endpoint and $r$ is any retraction,
composing this deformation with $r$ gives $r\simeq r_0$ relative to $X$.
Thus $rj=\mathrm{id}_X$ and $jr\simeq\mathrm{id}_Y$.

Every such composite is a homotopy equivalence
([[def-homotopy-equivalence]]): an expansion inclusion and its collapse map
are homotopy inverses, and a cellular isomorphism is a homeomorphism. Consequently
every simple homotopy equivalence is a homotopy equivalence.

For disconnected complexes the sequence respects the induced bijection on
components: each operation is performed componentwise, and the composite maps
the components of $X$ bijectively onto those of $Y$. The empty complex is
allowed; the empty sequence exhibits the identity of a finite CW complex as a
simple homotopy equivalence.

Homotopy of maps is transitive, so any map homotopic to a simple homotopy
equivalence is again a simple homotopy equivalence. Concatenating two finite
composites exhibits a composite of two simple homotopy equivalences as a simple
homotopy equivalence as well.
