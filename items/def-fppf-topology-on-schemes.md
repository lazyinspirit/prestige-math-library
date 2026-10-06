---
id: def-fppf-topology-on-schemes
kind: definition
title: "Fppf coverings and the fppf site"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
justified_by: []
aliases: []
deps:
  - def-scheme
  - def-scheme-over-base
  - def-morphism-of-schemes
  - def-flat-morphism-schemes
  - def-locally-finite-presentation-morphism
  - def-open-immersion-schemes
  - def-fibre-product-schemes-universal-property
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 34 (Topologies on Schemes), Section 34.7 (The fppf topology)"
      url: "https://stacks.math.columbia.edu/download/topologies.pdf"
      locator: "Definition 34.7.1 (tag 021L) and Lemmas 34.7.2-34.7.3 (tags 021P, 021Q, 021R) on stability under base change, composition and refinement"
    - title: "Angelo Vistoli, Notes on Grothendieck topologies, fibered categories and descent theory (arXiv:math/0412512)"
      url: "https://arxiv.org/pdf/math/0412512"
      locator: "Sections 2.3.1-2.3.2 (Grothendieck topologies, the fppf topology)"
---

## Definition

Fix a base scheme $S$ ([[def-scheme]], [[def-scheme-over-base]]). An **fppf
covering** of an $S$-scheme $T$ is a family
$\{T_i\to T\}_{i\in I}$ of morphisms of $S$-schemes
([[def-morphism-of-schemes]]) such that each $T_i\to T$ is flat
([[def-flat-morphism-schemes]]) and locally of finite presentation
([[def-locally-finite-presentation-morphism]]), and the images of the
underlying maps $|T_i|\to|T|$ cover $T$. The **fppf site**
$(\mathit{Sch}/S)_{fppf}$ is the category of $S$-schemes with the pretopology
whose coverings of $T$ are the fppf coverings of $T$, with the identity
refinements and the usual composition of coverings of an fppf topology.

The covering condition is a topological surjectivity condition on the index
family together with the two morphism properties; the index set $I$ need not
be finite. The images may overlap. The maps need not be open immersions. We work inside one fixed big fppf site of $S$-schemes;
nothing below uses size questions beyond those conventions.

Three standard properties are used constantly and are recorded here with
their proofs. First, a Zariski open cover is an fppf covering
([[def-open-immersion-schemes]]): an open immersion is flat and locally of
finite presentation, and its underlying map is an open topological embedding,
so the images of the members of an open cover of $T$ cover $T$. Second, fppf
coverings are stable under base change: for a morphism $T'\to T$ the
base-changed family $\{T_i\times_TT'\to T'\}$ is fppf, because flatness and
local finite presentation are stable under base change and images of the
base-changed maps still cover $T'$ ([[def-fibre-product-schemes-universal-property]]).
Third, fppf coverings are stable under composition: if $\{T_i\to T\}_{i\in I}$
is fppf and $\{T_{ij}\to T_i\}_{j\in J_i}$ is fppf for every $i$, then the
composites $\{T_{ij}\to T\}$ form an fppf covering of $T$, because a composite
of flat morphisms is flat, a composite of locally finitely presented
morphisms is locally of finite presentation, and the images of the composites
cover $T$ by the covering property of the two families together.

No choice principle is used to state the definition or its consequences: a
covering is a single family of morphisms, and the stability assertions are
element-wise. A covering may be indexed by an empty set only when the target
$T$ is empty, in which case the covering condition is vacuous.
