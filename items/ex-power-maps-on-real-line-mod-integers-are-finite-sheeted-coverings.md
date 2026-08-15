---
id: ex-power-maps-on-real-line-mod-integers-are-finite-sheeted-coverings
kind: example
title: "The maps $[x]\\mapsto[mx]$ on $\\mathbb R/\\mathbb Z$ are $m$-sheeted coverings for $m\\ge1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-real-line-mod-integer-translations-is-a-covering, def-covering-map-and-evenly-covered-neighbourhoods, prop-number-of-sheets-is-locally-constant, def-integers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
    - title: "Omar Antolín Camarena, Proper local homeomorphisms and covering maps"
      url: "https://www.matem.unam.mx/~omar/notes/propetale.html"
pipeline_run: null
---

## Example

For every integer $m\ge1$, the map $P_m:\mathbb R/\mathbb Z\to\mathbb R/\mathbb Z$ given by $P_m([x])=[mx]$ is a well-defined $m$-sheeted covering.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] For the quotient by integer translation, $q:\mathbb R\to\mathbb R/\mathbb Z$ is a covering map, and every deck transformation is a unique translation $x\mapsto x+n$ with $n\in\mathbb Z$. ([[ex-real-line-mod-integer-translations-is-a-covering]]).

[F2] A **covering map** is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets $V_j$, called **sheets**, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism (def-continuous-map-top, def-homeomorphism-and-open-maps, def-disjoint-union-topology). Such a $U$ is **evenly covered**, and $p^{-1}(b)$ is the **fibre** over $b$. A covering is **trivial** when it is isomorphic over $B$ to a product projection $B\times F\to B$ with $F$ discrete. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F3] For a covering $p:E\to B$, the cardinality of $p^{-1}(b)$ is locally constant as a function of $b\in B$. If $B$ is connected, all fibres are equinumerous. ([[prop-number-of-sheets-is-locally-constant]]).

[F4] On the set $\mathbb{N} \times \mathbb{N}$ of pairs of natural numbers, define $$(a,b) \sim (c,d) \iff a + d = b + c.$$ This is an equivalence relation (lem-int-equivalence). The **integers** are the quotient $$\mathbb{Z} := (\mathbb{N} \times \mathbb{N}) / \sim,$$ and we write $[(a,b)]$ for the equivalence class of $(a,b)$. ([[def-integers]]).

## Verification

**Proof technique:** direct.

1.1 Check well-definedness modulo integer translation. [given, F1]

2.1 Around a class choose an interval short enough that its $m$ inverse branches are disjoint; these branches give the evenly covered neighbourhood and exactly $m$ fibre points. [step 1.1, F2, F4]

3.1 At $m=1$ the map is the identity, so no zero-sheet or division-by-zero case is hidden. [step 2.1, F3]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
