---
id: def-linear-basis
kind: definition
title: "Basis of a vector space: a linearly independent spanning subset; and ordered basis: an injective finite list whose image is a basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-linear-independence, lem-independent-list-is-injective, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, def-linear-subspace, def-monoid-finite-product, def-vector-space, def-field, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection]
justified_by: []
forward_refs: [def-topology-basis-subbasis]
aliases: [def-hamel-basis, def-ordered-basis]
landmark: true
short: "basis; ordered basis"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

A subset $B \subseteq V$ is a **basis of $V$** when

- **(B1)** $B$ is linearly independent ([[def-linear-independence]]), and
- **(B2)** $B$ spans $V$, that is $\operatorname{span}(B) = V$
  ([[def-linear-combination-and-span]], which is where the words *spans* and
  *spanning set* are fixed; they are not redefined here).

**The empty set is a basis of the zero space, and of nothing else.**
$\varnothing$ is linearly independent ([[def-linear-independence]]) and
$\operatorname{span}(\varnothing) = \{0_V\}$
([[lem-span-is-the-set-of-linear-combinations]]), so $\varnothing$ is a basis of
$V$ exactly when $V = \{0_V\}$. This is the case $n = 0$ from which every
induction on this page starts, and it is a genuine case rather than a convention.

### Ordered bases

An **ordered basis of $V$** is a finite list $v : n \to V$, with $n \in
\mathbb{N}$ and $n = \{0, \dots, n-1\}$ the von Neumann natural
([[def-natural-numbers]], [[lem-nat-order-is-membership]]), such that $v$ is
injective ([[def-injection-surjection-bijection]]) and its image $v[n]$ is a
basis of $V$.

By claim 6 of [[lem-independent-list-is-injective]], a list is linearly
independent exactly when it is injective with linearly independent image, so an
ordered basis is equally described as a **linearly independent list $v : n \to V$
with $\operatorname{span}(v[n]) = V$**: the injectivity does not have to be
imposed separately. The empty list is the ordered basis of the zero space.

An ordered basis is a list, so it carries an order; a basis is a set, so it does
not. Reordering an ordered basis gives a different ordered basis with the same
image, and the coordinates of
[[thm-unique-coordinates-with-respect-to-an-ordered-basis]] are attached to the
list, not to the set.

### Bases of a linear subspace

Let $U$ be a linear subspace of $V$ ([[def-linear-subspace]]), which is itself a
vector space over $F$, with the addition, the zero vector and the scalar
multiplication of $V$ restricted to $U$. For $A \subseteq U$ the two readings of
"$A$ is a basis" — computed inside $U$, or computed inside $V$ — agree, so the
phrase needs no disambiguation below.

- **Independence agrees.** The finite sums $\sum_{i<n}\lambda_i a_i$ of a list
  $a : n \to U$ are given by the same recursion in $U$ as in $V$
  ([[def-monoid-finite-product]]), the base value $0_V$ and the operation $+$
  being literally those of $V$ ([[def-linear-subspace]]). So a list into $U$ has
  the same sums whichever space it is read in, and the vanishing condition of
  [[def-linear-independence]] is the same condition in both.
- **The span agrees.** A subset of $U$ is a linear subspace of $U$ exactly when it
  is a linear subspace of $V$, conditions (W1), (W2), (W3) being the same
  conditions in either reading. Now $\operatorname{span}_V(A) \subseteq U$, since
  $U$ is a linear subspace of $V$ containing $A$ and the span is contained in
  every such subspace; so $\operatorname{span}_V(A)$ is a linear subspace of $U$
  containing $A$, whence $\operatorname{span}_U(A) \subseteq \operatorname{span}_V(A)$.
  Conversely $\operatorname{span}_U(A)$ is a linear subspace of $V$ containing
  $A$, whence $\operatorname{span}_V(A) \subseteq \operatorname{span}_U(A)$. The
  two are therefore equal, and we write $\operatorname{span}(A)$ for both.

Consequently $A \subseteq U$ is a basis of the vector space $U$ if and only if
$A$ is linearly independent as a subset of $V$ and $\operatorname{span}(A) = U$.

## Remarks

- **The name is `def-linear-basis`, and the bare word is not used here.** The
  library already has a *basis* — a basis for a topology, defined in
  [[def-topology-basis-subbasis]] and namespaced there with the alias
  `def-basis-top`. The two notions share the word and nothing else: one is a
  family of open sets closed under a refinement condition, the other an
  independent spanning subset of a vector space. This page therefore follows the
  convention of [[def-linear-subspace]], where the same collision with the
  topological *subspace* was resolved the same way, and says *linear* in the id.
  In prose, where the ambient vector space is named, "basis" alone is used.

- **Nothing above asserts that a basis exists.** Existence for an arbitrary vector
  space is [[cor-every-vector-space-has-a-basis]], and it is proved from Zorn's
  lemma; existence for the concrete spaces $F^{n}$ is
  [[lem-standard-basis-of-f-n]] and needs no choice principle at all. The
  definition is stated first so that both statements have something to be about.

- **A basis need not be finite, and this definition does not assume it is.**
  Condition (B1) quantifies over finite lists drawn from $B$ and (B2) is an
  equality of sets, so both make sense for an arbitrary $B$. It is only
  [[def-dimension]] that restricts attention to spaces admitting a *finite* basis,
  and the companion page exhibits an explicit infinite basis, for the
  eventually zero families in $F^{\mathbb{N}}$.
