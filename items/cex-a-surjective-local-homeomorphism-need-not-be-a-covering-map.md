---
id: cex-a-surjective-local-homeomorphism-need-not-be-a-covering-map
kind: counterexample
title: "A surjective local homeomorphism need not be a covering map"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres, prop-number-of-sheets-is-locally-constant, def-disjoint-union-topology, def-interval]
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

## Statement refuted

Let $E=(0,2)\sqcup(1,2)$ and map both summands by inclusion to $B=(0,2)$. This map is a surjective local homeomorphism but is not a covering map.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Every covering map is a surjective local homeomorphism, and each of its fibres is discrete in the subspace topology. ([[prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres]]).

[F2] For a covering $p:E\to B$, the cardinality of $p^{-1}(b)$ is locally constant as a function of $b\in B$. If $B$ is connected, all fibres are equinumerous. ([[prop-number-of-sheets-is-locally-constant]]).

[F3] **The underlying set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$. The **disjoint union** is $$\bigsqcup_{i \in I} X_i \;:=\; \bigcup_{i \in I} \big(X_i \times \{i\}\big) ,$$ whose elements are the pairs $(x, i)$ with $i \in I$ and $x \in X_i$. For $j \in I$ the $j$-th **canonical injection** is $$\kappa_j : X_j \to \bigsqcup_{i \in I} X_i, \qquad \kappa_j(x) := (x, j).$$ *The construction is what makes the word "disjoint" honest.* Each $\kappa_j$ is injective (def-injection-surjection-bijection), since $(x,j) = (x',j)$ forces $x = x'$; the images $\kappa_j[X_j] = X_j \times \{j\}$ are pairwise disjoint, since the second coordinate determines $j$; and their union is the whole set. So no assumption that the $X_i$ are disjoint as sets is needed, and none is made: the tag $i$ separates the copies even when $X_i = X_{i'}$ for $i \ne i'$. ([[def-disjoint-union-topology]]).

[F4] Throughout, $\mathbb{R}$ is the complete ordered field (def-complete-ordered-field, def-ordered-field) with its order (def-real-order). A subset $I\subseteq\mathbb R$ is **order-convex** when $x,y\in I$ and $x\le z\le y$ imply $z\in I$, and the **intervals** of $\mathbb R$ are the nine listed forms, among them $[a,b]=\{x:a\le x\le b\}$ and $(a,b)=\{x:a<x<b\}$. ([[def-interval]]).

## Counterexample

**Proof technique:** direct.

1.1 Let the domain be the disjoint union of $(0,2)$ and $(1,2)$ and map both components by inclusion onto the base $(0,2)$. [given, F3, F4]

2.1 The first component makes the map surjective and each inclusion is a local homeomorphism. [step 1.1, F1, F3]

3.1 The fibre has one point at $1$ and two immediately to its right, so local constancy of sheet number rules out a covering; equivalently, the second component supplies only a one-sided partial sheet above every neighbourhood of $1$. [step 2.1, F1, F2, F3]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
