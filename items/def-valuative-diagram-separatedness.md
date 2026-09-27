---
id: def-valuative-diagram-separatedness
kind: definition
title: Valuative uniqueness diagram
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-valuation-ring, def-separated-morphism-schemes, def-field-of-fractions]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Definition 26.20.3 and Section 26.22, printed pp.37, 44"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Section 13.7.4, printed p.383"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: n/a
---

## Definition

Let $f:X\to S$ be a morphism of schemes. A **valuative diagram** for $f$
consists of a valuation ring $R\subseteq K$ with fraction field $K$
([[def-valuation-ring]], [[def-field-of-fractions]]) together with a morphism
$\operatorname{Spec}K\to X$ and a morphism $\operatorname{Spec}R\to S$ whose
composite with $\operatorname{Spec}K\to\operatorname{Spec}R$ is
$f\circ(\operatorname{Spec}K\to X)$; that is, the square
$$\begin{array}{ccc} \operatorname{Spec}K & \longrightarrow & X\\ \downarrow & & \downarrow f\\ \operatorname{Spec}R & \longrightarrow & S \end{array}$$
commutes. Call $\operatorname{Spec}K\to X$ the **generic map** of the diagram. A
**lift** of the diagram is a morphism $\operatorname{Spec}R\to X$ making both
triangles commute.

The morphism $f$ satisfies the **uniqueness part** of the valuative criterion if
every valuative diagram for $f$ has at most one lift, and the **existence part**
if every valuative diagram for $f$ has at least one lift. The two quantifiers are
separate: uniqueness asserts nothing when no lift exists, and existence asserts
nothing about the number of lifts.

The criterion is stated for all valuation rings, all fraction fields, all
specializations of the closed point, and all prescribed extensions of residue
fields implicit in the choice of the generic map; nothing restricts $R$ to
discrete valuation rings, to Noetherian rings or to finite-type situations.
Separatedness of $f$ is a property of the morphism alone, whereas a valuative
diagram involves chosen maps from the spectra of $R$ and $K$; the two are
compared by the lemmas and the theorem following on this page.
