---
id: thm-product-of-connected-spaces
kind: theorem
title: "A product of connected spaces is connected in the product topology; for an infinite index set the choice of a base point uses the Axiom of Choice"
status: draft
origin: session
deps: [def-connected-space, thm-unions-of-connected-sets, thm-closure-of-a-connected-set,
       def-product-topology, thm-product-universal-property, def-continuous-map-top,
       def-axiom-of-choice, def-choice-function, thm-closure-characterisation-top,
       def-subspace-topology-top, def-interior-closure-boundary-top,
       def-topology-basis-subbasis, thm-continuous-image-of-a-connected-space,
       def-dense-top, lem-finite-choice, thm-induction-principle, def-countable]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "J. R. Munkres, Topology, 2nd ed., §23"
      url: "https://en.wikipedia.org/wiki/Topology_(Munkres_book)"
pipeline_run: null
---

## Statement

Let $I$ be a set, let $(X_i, \mathcal{T}_i)$ be a connected topological space
([[def-connected-space]]) for each $i \in I$, and give
$P := \prod_{i \in I} X_i$ the product topology ([[def-product-topology]]). Then
$P$ is connected.

**The choice cost, stated exactly.** The proof needs one point $a \in P$ and
nothing else, and it obtains it as follows.

- If $P = \varnothing$ then $P$ is connected outright, no separation of the empty
  space existing, and no choice principle is involved.
- If $P \ne \varnothing$ a point $a \in P$ is fixed. Selecting one element of one
  nonempty set is not a choice principle.

So the theorem **as displayed is a theorem of ZF**. What costs something is the
companion assertion that $P$ is nonempty when every $X_i$ is: for $I$ a natural
number that is [[lem-finite-choice]], a theorem of ZF, and for an arbitrary $I$
it **is** the Axiom of Choice ([[def-axiom-of-choice]], [[def-choice-function]]),
as [[def-product-topology]] records. A reader who wants "the product of nonempty
connected spaces is a nonempty connected space" for infinite $I$ is therefore
using $\mathrm{AC}$, and that is where the cost sits — not in the connectedness
argument.

## Facts & Assumptions

**Given:** A set $I$, connected spaces $(X_i)_{i \in I}$, and $P = \prod_{i \in I} X_i$ with the product topology and projections $\pi_i$.

[A1] A point of $P$ is a function $x$ on $I$ with $x_i \in X_i$ for every $i$; the sets $\prod_{i} U_i$ with $U_i$ open and $U_i = X_i$ for all but finitely many $i$ form a basis of the product topology ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[A2] A map $h : Z \to P$ is continuous exactly when every component $\pi_i \circ h$ is continuous; constant maps are continuous, a preimage under a constant map being $\varnothing$ or $Z$ ([[thm-product-universal-property]], claim 2, [[def-continuous-map-top]]).

[A3] A continuous image of a connected space is a connected subset of the target ([[thm-continuous-image-of-a-connected-space]], claim 1).

[A4] A union of connected subsets each meeting a fixed connected subset $A$, together with $A$, is connected; a union of connected subsets with a common point is connected; a singleton is connected ([[thm-unions-of-connected-sets]], claims 1 and 2, [[def-connected-space]]).

[A5] If $A$ is connected and $A \subseteq B \subseteq \overline{A}$ then $B$ is connected; $D \subseteq P$ is dense exactly when it meets every nonempty basic open set, and then $\overline{D} = P$ ([[thm-closure-of-a-connected-set]], [[def-dense-top]], [[thm-closure-characterisation-top]], [[def-interior-closure-boundary-top]], [[def-subspace-topology-top]]).

[A6] Induction on $\mathbb{N}$: a property holding at $0$ and passing from $n$ to $n+1$ holds at every natural number ([[thm-induction-principle]]). A set $F$ is finite exactly when $F \approx n$ for some $n \in \mathbb{N}$, that is exactly when some bijection $n \to F$ exists ([[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 If $P = \varnothing$ then $P$ is connected, no separation of the empty space existing, and the theorem holds; so assume $P \ne \varnothing$ and fix a single point $a \in P$. [A4, given]

1.2 For a function $\sigma$ with domain a natural number $n$ and values in $I$, put $P_\sigma := \{\, x \in P : x_j = a_j \text{ for every } j \in I \setminus \sigma[n] \,\}$, the points agreeing with $a$ outside the finite set $\sigma[n]$. [A1, given]

1.3 For $x \in P$ and $i \in I$ let $T_{x,i} := \{\, y \in P : y_j = x_j \text{ for every } j \ne i \,\}$, the $i$-th axis through $x$; the map $t_{x,i} : X_i \to P$ sending $u$ to the point with $i$-th coordinate $u$ and $j$-th coordinate $x_j$ for $j \ne i$ has image $T_{x,i}$. [A1]

2.1 Each $t_{x,i}$ is continuous, since its $i$-th component is the identity of $X_i$ and its $j$-th component for $j \ne i$ is constant, so [A2] applies; hence $T_{x,i}$ is a connected subset of $P$ by [A3], $X_i$ being connected. [step 1.3, A2, A3]

2.2 By induction on $n \in \mathbb{N}$ using [A6]: for every function $\sigma$ with domain $n$ and values in $I$, the set $P_\sigma$ is connected. At $n = 0$ the domain is empty, $\sigma[0] = \varnothing$, and $P_\sigma = \{a\}$, a singleton, connected by [A4]. [step 1.1, step 1.2, A4, A6]

2.3 For the step, let $\sigma$ have domain $n+1$, let $\tau := \sigma|_n$ and let $i := \sigma(n)$; then $\sigma[n+1] = \tau[n] \cup \{i\}$, so $P_\tau \subseteq P_\sigma$ and every $T_{x,i}$ with $x \in P_\tau$ is contained in $P_\sigma$, since a point of it agrees with $x$, hence with $a$, off $\tau[n] \cup \{i\}$. [step 1.2, step 1.3]

2.4 Moreover $P_\sigma = P_\tau \cup \bigcup_{x \in P_\tau} T_{x,i}$: given $y \in P_\sigma$, the point $x$ obtained from $y$ by resetting the $i$-th coordinate to $a_i$ lies in $P_\tau$, and $y \in T_{x,i}$. [step 1.2, step 1.3]

3.1 So, assuming inductively that $P_\tau$ is connected, each $T_{x,i}$ with $x \in P_\tau$ is connected by step 2.1 and meets $P_\tau$ in $x$, whence $P_\sigma$ is connected by [A4] and step 2.4; by [A6] this proves the claim of step 2.2 for every $n$. [step 2.1, step 2.2, step 2.3, step 2.4, A4, A6]

4.1 Let $D := \bigcup \{\, P_\sigma : \sigma \text{ a function from a natural number into } I \,\}$, the set of points of $P$ agreeing with $a$ outside a finite subset of $I$; every $P_\sigma$ is connected by step 3.1 and contains $a$, so $D$ is connected by [A4]. [step 3.1, A4]

5.1 $D$ is dense in $P$: let $B = \prod_i U_i$ be a nonempty basic open set as in [A1], with $U_i = X_i$ off a finite $F \subseteq I$, and fix $y \in B$; write $F = \sigma[n]$ for a bijection $\sigma : n \to F$, which exists by [A6]; the point $x$ with $x_j := y_j$ for $j \in F$ and $x_j := a_j$ otherwise lies in $P_\sigma \subseteq D$, and lies in $B$, since $x_j = y_j \in U_j$ for $j \in F$ and $x_j \in X_j = U_j$ otherwise. [step 1.2, step 4.1, A1, A6]

6.1 Hence $\overline{D} = P$ by [A5], and $D \subseteq P \subseteq \overline{D}$, so $P$ is connected by [A5] and step 4.1. [step 4.1, step 5.1, A5] ∎

## Remarks

- **Why the finite-support points and not the whole product at once.** A basic open set of the product topology constrains only finitely many coordinates, so a point that has been moved away from $a$ in finitely many coordinates is already enough to meet every basic open set. That is the entire reason the theorem is true for arbitrary $I$, and it is also why the same argument fails for the box topology, where a basic open set may constrain every coordinate at once, so a point moved in finitely many coordinates need not meet it.

- **The induction is on the number of moved coordinates, not on $I$.** Step 3.1 runs over $n \in \mathbb{N}$ and quantifies over all functions from $n$ into $I$, so no ordering or enumeration of $I$ is needed and $I$ may have any cardinality whatever.

- **Where a choice principle would enter if the statement were strengthened.** The proof selects a single point $a$ and, in step 6.1, a single point $y$ of a nonempty set — one selection each, not a family of them. What cannot be done in ZF for infinite $I$ is to produce a point of $P$ from the mere nonemptiness of every factor; that assertion is $\mathrm{AC}$ itself ([[def-axiom-of-choice]]), and it is the reason the Statement above separates connectedness from nonemptiness rather than bundling them.
