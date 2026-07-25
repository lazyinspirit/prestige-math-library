---
id: ex-powerset-is-chain-complete
kind: example
title: "The power set is chain-complete, with union as supremum"
status: draft
origin: session
deps: [def-chain-complete-poset, def-chain, def-upper-bound, def-partial-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Complete partial order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_partial_order"
    - title: "Complete lattice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_lattice"
pipeline_run: null
---

## Example

For any set $X$, the power set $\mathcal{P}(X)$ ordered by inclusion is a poset
([[def-partial-order]]) in which every $\subseteq$-chain $\mathcal{D}$
([[def-chain]]) has least upper bound

$$\sup \mathcal{D} = \bigcup \mathcal{D} \in \mathcal{P}(X)$$

([[def-upper-bound]]). So $(\mathcal{P}(X), \subseteq)$ is chain-complete
([[def-chain-complete-poset]]), and its bottom element is
$\bot = \sup \emptyset = \bigcup \emptyset = \emptyset$.

Both halves of "least upper bound" are checked below. Chain-completeness asks
for the least one, not merely for some upper bound, and it is leastness that the
Bourbaki–Witt argument consumes.

## Facts & Assumptions

**Given:** A set $X$ and its power set $\mathcal{P}(X) = \{A : A \subseteq X\}$, ordered by inclusion.

[L1] A partial order is a reflexive, antisymmetric and transitive relation ([[def-partial-order]]).

[L2] $u$ is an upper bound of $S$ when $s \le u$ for every $s \in S$, and a least upper bound when in addition $u \le v$ for every upper bound $v$ of $S$ ([[def-upper-bound]]).

[L3] A subset is a chain when any two of its elements are comparable, and the empty set is a chain ([[def-chain]]).

[L4] A poset is chain-complete when every chain has a least upper bound, and then $\bot = \sup \emptyset$ is its least element ([[def-chain-complete-poset]]).

## Verification

**Proof technique:** direct.

1.1 Inclusion partially orders $\mathcal{P}(X)$: $A \subseteq A$; if $A \subseteq B$ and $B \subseteq A$ then $A$ and $B$ have the same elements, so $A = B$ by extensionality; and $A \subseteq B \subseteq C$ gives $A \subseteq C$. [given, L1]

1.2 Let $\mathcal{D} \subseteq \mathcal{P}(X)$ and put $U = \bigcup \mathcal{D}$, so that $x \in U$ exactly when $x \in D$ for some $D \in \mathcal{D}$; each such $D$ satisfies $D \subseteq X$, hence $U \subseteq X$ and $U \in \mathcal{P}(X)$. [given, construct]

2.1 $U$ is an upper bound of $\mathcal{D}$: if $D \in \mathcal{D}$ and $x \in D$ then $x \in U$, so $D \subseteq U$. [step 1.2, L2]

2.2 $U$ is least among the upper bounds: let $V \in \mathcal{P}(X)$ satisfy $D \subseteq V$ for every $D \in \mathcal{D}$; any $x \in U$ lies in some $D \in \mathcal{D}$ and hence in $V$, so $U \subseteq V$. [step 1.2, L2]

3.1 So every subset $\mathcal{D}$ of $\mathcal{P}(X)$ has least upper bound $\bigcup \mathcal{D}$, and a chain is in particular a subset, so every chain has one and $(\mathcal{P}(X), \subseteq)$ is chain-complete. [step 2.1, step 2.2, L3, L4]

4.1 The empty chain is the case $\mathcal{D} = \emptyset$, where $U = \bigcup \emptyset = \emptyset$; so $\bot = \sup \emptyset = \emptyset$, which is indeed the least element, since $\emptyset \subseteq A$ for every $A \in \mathcal{P}(X)$. [step 3.1, step 1.2, L4] ∎

## Remarks

- **The argument proves more than chain-completeness.** Neither the construction of $U$ nor either of the two bound checks used that $\mathcal{D}$ is a chain, so every subset of $\mathcal{P}(X)$ has a supremum and $(\mathcal{P}(X), \subseteq)$ is a complete lattice. Chain-completeness is strictly weaker, and the posets to which Zorn's lemma is applied usually have only the weaker property ([[ex-zorn-poset-of-chains]] is the standard instance).

- Infima are present too: for nonempty $\mathcal{D}$ the greatest lower bound is $\bigcap \mathcal{D}$, and the greatest lower bound of the empty family is $X$, the top element. The class $\bigcap \emptyset$ is not a set, which is why the empty case is read inside $\mathcal{P}(X)$ rather than absolutely.

- **The empty chain is not a technicality.** It is what forces a chain-complete poset to have a least element at all, and here it produces $\emptyset$. A convention that excludes the empty chain has to reintroduce the same content as a separate nonemptiness hypothesis ([[def-chain-complete-poset]] records the reduction between the two conventions).

- Chain-completeness is not the same as having a top. Deleting the top element from $\mathcal{P}(\{1,2\})$ leaves the three-element poset of [[cex-maximal-not-greatest]], which is still chain-complete, since $\{1\}$ and $\{2\}$ are incomparable and so never lie in a common chain, yet it now has two maximal elements and no greatest one.
