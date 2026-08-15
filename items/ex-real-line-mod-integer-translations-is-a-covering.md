---
id: ex-real-line-mod-integer-translations-is-a-covering
kind: example
title: "The quotient $\\mathbb R\\to\\mathbb R/\\mathbb Z$ is a covering with integer translations as deck transformations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-orbit-map-of-a-covering-space-action-is-a-covering, def-deck-transformation-and-deck-group, def-quotient-topology, def-integers]
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

For the quotient by integer translation, $q:\mathbb R\to\mathbb R/\mathbb Z$ is a covering map, and every deck transformation is a unique translation $x\mapsto x+n$ with $n\in\mathbb Z$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] For a covering-space action of $G$ on $E$, the orbit map $E\to E/G$ is a covering. If $E$ is path-connected, the deck group of this covering consists exactly of the transformations supplied by $G$. ([[thm-orbit-map-of-a-covering-space-action-is-a-covering]]).

[F2] For a covering $p:E\to B$, a **deck transformation** is an isomorphism $h:E\to E$ over $B$, so $p\circ h=p$ (def-map-and-isomorphism-of-covering-spaces). Deck transformations form the **deck group** $\operatorname{Deck}(p)$ under composition, and this group acts on $E$ by evaluation (def-group, def-group-action). ([[def-deck-transformation-and-deck-group]]).

[F3] **The quotient topology.** Let $(X, \mathcal{T})$ be a topological space (def-topological-space), let $Y$ be a set and let $q : X \to Y$ be a surjection (def-injection-surjection-bijection). The **quotient topology** on $Y$ induced by $q$ is the final topology of the one-element family $(q)$ (def-initial-and-final-topology): $$\mathcal{T}_q \;:=\; \{\, V \subseteq Y : q^{-1}[V] \in \mathcal{T} \,\} .$$ That this is a topology is discharged in def-initial-and-final-topology, where every final topology is verified to satisfy (T1), (T2) and (T3). Dually, $C \subseteq Y$ is closed in $\mathcal{T}_q$ exactly when $q^{-1}[C]$ is closed in $X$, because $q^{-1}[Y \setminus V] = X \setminus q^{-1}[V]$. ([[def-quotient-topology]]).

[F4] On the set $\mathbb{N} \times \mathbb{N}$ of pairs of natural numbers, define $$(a,b) \sim (c,d) \iff a + d = b + c.$$ This is an equivalence relation (lem-int-equivalence). The **integers** are the quotient $$\mathbb{Z} := (\mathbb{N} \times \mathbb{N}) / \sim,$$ and we write $[(a,b)]$ for the equivalence class of $(a,b)$. ([[def-integers]]).

## Verification

**Proof technique:** direct.

1.1 Use the equivalence relation $x\sim y$ iff $x-y$ is an integer and the quotient topology. [given, F3, F4]

2.1 Intervals of length less than one have pairwise disjoint integer translates whose quotient images are evenly covered. [step 1.1, F3, F4]

3.1 Verify directly that translations are deck transformations and that every deck transformation is the unique integer translation determined by the image of zero, without computing the fundamental group of the quotient. [step 2.1, F2, F3, F1]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
