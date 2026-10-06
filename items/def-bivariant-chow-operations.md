---
id: def-bivariant-chow-operations
kind: definition
title: "Bivariant Chow operations and bivariant classes"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-chow-group-of-cycles-mod-rational-equivalence
  - def-flat-morphism-schemes
  - def-intersection-with-a-cartier-divisor-and-first-chern-class
  - def-proper-morphism
  - lem-pushforward-pullback-compatibility-chow
  - lem-two-dimensional-tame-symbol-reciprocity
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.29-42.35 (bivariant classes and operations)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.29-42.35: Chow operations, bivariant classes, the operations of flat pullback and Cartier Gysin, and composition"
    - title: "William Fulton, Intersection Theory, Chapter 17 (bivariant intersection theory) — bibliographical comparison, not retrieved"
      url: "https://link.springer.com/book/10.1007/978-1-4612-1700-8"
      locator: "Chapter 17: bivariant Chow groups and operations; comparison only"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
proper/quasi-finite and scheme base-change suppliers. Fix a field $k$ and
work in the category of schemes locally of finite type over $k$, with
$k$-morphisms. For $f:Z\to T$ in this category, a degree-$d$ bivariant
Chow operation assigns to every $k$-morphism $T'\to T$ in this category homomorphisms $c:A_m(T')\to A_{m-d}(Z\times_TT')$, commuting with
proper pushforward, flat pullback of fixed relative dimension, and Cartier
divisor Gysin. Restriction along any base morphism, composition, and proper
pushforward of such operations are defined by their action. Flat pullback and
Cartier divisor Gysin give bivariant classes. If $h:Z\to Z_1$ is proper over
$T$, pushing a class for $Z\to T$ along $h$ gives a class for $Z_1\to T$;
ordinary proper pushforward is a covariant Chow operation, not a class reversing
that proper morphism. Equality can be tested on fundamental classes of integral
schemes over $T$; it suffices to test after a proper birational modification of
each such integral scheme.

**Well-definedness.** The three axioms are required for every base change
$T'\to T$ in this category, and the operations are compared only on Chow
groups, using [[def-chow-group-of-cycles-mod-rational-equivalence]]. Proper
pushforward and flat pullback are the maps of
[[lem-pushforward-pullback-compatibility-chow]]; the Cartier divisor Gysin is
the operation of [[def-intersection-with-a-cartier-divisor-and-first-chern-class]].
Restriction along a base morphism $T''\to T'$ simply changes the indexing family,
and composition of operations is associative because each axiom is applied first
to the inner and then to the outer factor; the compatibility of two Cartier
Gysins is the tame-symbol reciprocity computation of
[[lem-two-dimensional-tame-symbol-reciprocity]], and if a cycle is contained in
one of the two divisors the operation is $c_1$ of the corresponding invertible
sheaf, whose commutation is the same rational-section argument. For a proper
$h:Z\to Z_1$ over $T$ the definition $(h_*c)_{T'}=h_{T',*}c_{T'}$ satisfies the
three axioms by the corresponding compatibilities of proper pushforward with
flat pullback and Cartier Gysin. For the equality criterion, a finite cycle is
a finite sum of pushforwards of integral fundamental classes. For a locally
finite cycle $\sum_i n_i[V_i]$ on $T'$, the map
$h:\coprod_i V_i\to T'$ is proper: over every quasi-compact open only
finitely many supports occur, and their inclusions are closed immersions.
Locally finite Chow groups on this disjoint union are the product of the Chow
groups of its components, as are those of its base change to $Z$. Flat
restriction to each open-and-closed component therefore determines an
operation on the class $(n_i[V_i])_i$. Equality on the integral classes gives
equality there, and proper compatibility pushes it along $h$ to equality on
the original cycle. Finally, for a proper birational $h:V'\to V$ of integral
schemes one has $h_*[V']=[V]$, so equality on $[V']$ pushes forward to equality
on $[V]$. This is a descent test
for operations, not an assertion that Chow pullback to a modification is
injective.
