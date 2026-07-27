---
id: def-disjoint-union-topology
kind: definition
title: "The disjoint union (coproduct) $\\bigsqcup_i X_i$ with the final topology of the canonical injections: a set is open exactly when each of its traces is"
status: published
origin: session
deps: [def-initial-and-final-topology, def-topological-space, def-subspace-topology-top,
       def-homeomorphism-and-open-maps, def-injection-surjection-bijection]
justified_by: []
aliases: [def-coproduct-top, def-disjoint-union-top, def-topological-sum]
landmark: true
short: "disjoint union, coproduct of spaces"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Disjoint union (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Disjoint_union_(topology)"
    - title: "Coproduct (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Coproduct"
    - title: "J. Munkres, Topology, 2nd ed., §22"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

**The underlying set.** Let $I$ be a set and let $X_i$ be a set for each
$i \in I$. The **disjoint union** is

$$\bigsqcup_{i \in I} X_i \;:=\; \bigcup_{i \in I} \big(X_i \times \{i\}\big) ,$$

whose elements are the pairs $(x, i)$ with $i \in I$ and $x \in X_i$. For
$j \in I$ the $j$-th **canonical injection** is

$$\kappa_j : X_j \to \bigsqcup_{i \in I} X_i, \qquad \kappa_j(x) := (x, j).$$

*The construction is what makes the word "disjoint" honest.* Each $\kappa_j$ is
injective ([[def-injection-surjection-bijection]]), since $(x,j) = (x',j)$ forces
$x = x'$; the images $\kappa_j[X_j] = X_j \times \{j\}$ are pairwise disjoint,
since the second coordinate determines $j$; and their union is the whole set. So
no assumption that the $X_i$ are disjoint as sets is needed, and none is made:
the tag $i$ separates the copies even when $X_i = X_{i'}$ for $i \ne i'$.

**The trace of a subset.** For $U \subseteq \bigsqcup_i X_i$ and $j \in I$ write

$$U_j \;:=\; \kappa_j^{-1}[U] \;=\; \{\, x \in X_j : (x,j) \in U \,\} \subseteq X_j ,$$

the **trace** of $U$ on the $j$-th summand. A subset is determined by its family
of traces, since $U = \bigcup_i \kappa_i[U_i]$.

**The topology.** Now let each $X_i$ carry a topology $\mathcal{T}_i$
([[def-topological-space]]). The **disjoint union topology** (also *coproduct
topology*, or *topological sum*) on $\bigsqcup_i X_i$ is the final topology of
the family $(\kappa_i)_{i \in I}$ ([[def-initial-and-final-topology]]), that is

$$\mathcal{T}^{\sqcup} \;:=\; \Big\{\, U \subseteq \bigsqcup_i X_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i \in I \,\Big\} :$$

**a set is open exactly when each of its traces is open.** That this is a
topology is discharged in [[def-initial-and-final-topology]], where the final
topology of any family is verified to satisfy (T1), (T2) and (T3); nothing
further is needed here.

**Closed sets, dually.** $F \subseteq \bigsqcup_i X_i$ is closed exactly when
every trace $F_i$ is closed in $X_i$. Indeed the trace operation commutes with
complementation, $\kappa_i^{-1}[\,\bigsqcup_j X_j \setminus F\,] = X_i \setminus F_i$,
so $F$ is closed if and only if the complement is open if and only if every
$X_i \setminus F_i$ is open.

**Each summand sits inside as a clopen subspace.** The set
$\kappa_j[X_j] = X_j \times \{j\}$ has traces $X_j$ at $j$ and $\varnothing$
elsewhere, both open and both closed, so it is clopen in the union. Its subspace
topology ([[def-subspace-topology-top]]) is carried across by $\kappa_j$ from
$\mathcal{T}_j$, and $\kappa_j$ is an embedding
([[def-homeomorphism-and-open-maps]]); both statements are proved in the next
item rather than assumed here.

**Degenerate cases.** For $I = \varnothing$ the disjoint union is the empty set
with its only topology. For $I$ a one-element set the map $\kappa$ is a bijection
carrying $\mathcal{T}$ to $\mathcal{T}^{\sqcup}$, so the construction returns the
one summand up to homeomorphism and changes nothing.

## Remarks

- **Why the tag is part of the element.** Writing $\bigsqcup_i X_i$ as the plain
  union $\bigcup_i X_i$ would collapse points that happen to be shared between
  two summands, and the two canonical injections would then fail to be injective.
  Building the tag into the element makes the injectivity, the disjointness and
  the description "a set is open when each trace is open" true by construction
  rather than by hypothesis.

- **This is the exact dual of the product.** The product is an initial topology
  of maps *out of* it, the coproduct a final topology of maps *into* it; the
  product has the characteristic property for maps into it, the coproduct the
  characteristic property for maps out of it. Both are instances of
  [[def-initial-and-final-topology]] and the next item reads the corresponding
  half of [[thm-initial-and-final-characteristic-properties]].

- **Nothing here is finite.** The index set is arbitrary and no choice principle
  is involved: the injections are given by an explicit formula and the topology
  is described by a condition on all traces at once, with no selection anywhere.
