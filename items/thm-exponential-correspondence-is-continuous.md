---
id: thm-exponential-correspondence-is-continuous
kind: theorem
title: "If $f : X \\times Z \\to Y$ is continuous then its transpose $F : Z \\to C(X,Y)$, $F(z)(x) = f(x,z)$, is continuous for the compact-open topology, with no hypothesis on $X$ beyond being metric"
status: draft
origin: session
deps: [lem-tube-lemma-for-a-compact-metric-factor, def-compact-open-topology,
       def-product-topology, thm-product-universal-property, def-continuous-map-top,
       thm-continuity-characterisations-top, def-metric-compactness,
       lem-compactness-is-intrinsic, def-metrizable-space, def-metric-topology,
       def-neighbourhood-top, def-topological-space, lem-continuity-is-local-and-pastes,
       def-topology-basis-subbasis, thm-basis-criterion, def-metric-space]
justified_by: []
aliases: [thm-transpose-is-continuous]
landmark: true
short: "the transpose of a continuous map is continuous"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Compact-open topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact-open_topology"
    - title: "Exponential law (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponential_object"
    - title: "J. Munkres, Topology, 2nd ed., §46"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space carrying its metric topology
([[def-metric-topology]], [[def-metrizable-space]]), let $Z$ and $Y$ be
topological spaces ([[def-topological-space]]), and let

$$f : X \times Z \to Y$$

be continuous, the product carrying the product topology
([[def-product-topology]]). For $z \in Z$ define $F(z) : X \to Y$ by
$F(z)(x) := f(x,z)$. Then:

1. $F(z) \in C(X,Y)$ for every $z \in Z$;
2. the **transpose** $F : Z \to C(X,Y)$ is continuous when $C(X,Y)$ carries the
   compact-open topology ([[def-compact-open-topology]]).

**No local compactness and no separation hypothesis is used**, on any of the
three spaces; $X$ is metric only because the compact-open topology is defined
here over the compact subsets of a metric space. No choice principle is used.

## Facts & Assumptions

**Given:** A metric space $(X,d)$ with its metric topology, topological spaces $Z$ and $Y$, a continuous $f : X \times Z \to Y$, and $F(z)(x) = f(x,z)$.

[L1] A map $h$ into a product is continuous exactly when each of its components is, the components being the composites with the projections; the projections are continuous ([[thm-product-universal-property]], claims 1 and 2, [[def-product-topology]]).

[L2] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1).

[L3] A constant map into a topological space is continuous, the preimage of an open set being the whole domain or the empty set, both open ([[thm-continuity-characterisations-top]], clause (b), [[def-topological-space]]).

[L4] The identity map of a topological space is continuous, being its own preimage assignment ([[thm-continuity-characterisations-top]], clause (b)).

[L5] Continuity may be checked on a subbasis: $h$ is continuous exactly when $h^{-1}[S]$ is open for every member $S$ of a subbasis of the target ([[thm-continuity-characterisations-top]], clause (d), [[def-topology-basis-subbasis]], [[thm-basis-criterion]]).

[L6] The sets $S(K,V) = \{\, g \in C(X,Y) : g[K] \subseteq V \,\}$, for compact $K \subseteq X$ and open $V \subseteq Y$, are a subbasis for the compact-open topology on $C(X,Y)$ ([[def-compact-open-topology]], [[def-metric-compactness]], [[lem-compactness-is-intrinsic]]).

[L7] Tube lemma: for compact $K \subseteq X$, a point $z_0 \in Z$ and an open $N \subseteq X \times Z$ with $K \times \{z_0\} \subseteq N$ there is an open $W \subseteq Z$ with $z_0 \in W$ and $K \times W \subseteq N$ ([[lem-tube-lemma-for-a-compact-metric-factor]]).

[L8] A subset of a topological space is open exactly when it is a neighbourhood of each of its points, that is when each of its points lies in an open set inside it ([[def-neighbourhood-top]], consequence 4).

[L9] $f$ is continuous, so $f^{-1}[V]$ is open in $X \times Z$ for every open $V \subseteq Y$ ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], clause (b)).

## Proof

**Proof technique:** direct.

1.1 Fix $z \in Z$ and let $j_z : X \to X \times Z$ be the map $j_z(x) := (x,z)$; its components are the identity of $X$ and the constant map at $z$, both continuous, so $j_z$ is continuous. [L1, L3, L4]

2.1 $F(z) = f \circ j_z$, since $(f \circ j_z)(x) = f(x,z) = F(z)(x)$ for every $x \in X$; hence $F(z)$ is continuous and $F(z) \in C(X,Y)$, which is claim 1. [step 1.1, L2]

3.1 For claim 2 it suffices, by [L5] and [L6], to show that $F^{-1}[S(K,V)]$ is open in $Z$ for every compact $K \subseteq X$ and every open $V \subseteq Y$. [step 2.1, L5, L6, suffices: preimages of subbasic sets are open]

3.2 Unwinding the definitions, $F^{-1}[S(K,V)] = \{\, z \in Z : F(z)[K] \subseteq V \,\} = \{\, z \in Z : f(x,z) \in V \text{ for every } x \in K \,\}$. [step 2.1, L6]

4.1 Let $z_0 \in F^{-1}[S(K,V)]$ and put $N := f^{-1}[V]$, an open subset of $X \times Z$; by step 3.2 every $x \in K$ satisfies $f(x,z_0) \in V$, that is $K \times \{z_0\} \subseteq N$. [step 3.2, L9]

5.1 The tube lemma applied to $K$, $z_0$ and $N$ gives an open $W \subseteq Z$ with $z_0 \in W$ and $K \times W \subseteq N$. [step 4.1, L7, choose]

6.1 Every $z \in W$ then satisfies $f(x,z) \in V$ for every $x \in K$, that is $z \in F^{-1}[S(K,V)]$; so $W$ is an open set with $z_0 \in W \subseteq F^{-1}[S(K,V)]$. [step 3.2, step 4.1, step 5.1]

7.1 As $z_0$ was an arbitrary point of $F^{-1}[S(K,V)]$, that set is open in $Z$; by step 3.1 this proves claim 2. [step 3.1, step 6.1, L8] ∎

## Remarks

- **The tube lemma is the entire content.** The condition defining $F^{-1}[S(K,V)]$ is "the whole slice $K \times \{z\}$ lands in $V$", and openness of that condition in $z$ is exactly the statement that a neighbourhood of a slice contains a tube. Everything else is unwinding.

- **This half of the exponential law is the cheap half.** It needs no hypothesis on $X$ beyond compactness being available for its subsets, and none at all on $Z$ or $Y$. The converse half — that every continuous $F : Z \to C(X,Y)$ arises from a continuous $f$ — runs through continuity of the evaluation map and is where local compactness of $X$ is spent.

- **The map $F$ determines $f$ and conversely, as functions.** That the assignment $f \mapsto F$ is injective, and that under the local compactness hypothesis it is onto the continuous maps $Z \to C(X,Y)$, is the exponential law below; this theorem is the statement that the assignment lands in the right place.
