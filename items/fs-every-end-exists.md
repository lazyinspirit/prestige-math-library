---
id: fs-every-end-exists
kind: false-statement
title: 'FALSE: every functor on $\mathcal C^{\mathrm{op}}\times\mathcal C$ has an end'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-end-and-coend, thm-an-end-is-an-equalizer-between-two-products, def-products-and-coproducts, def-subcategory-and-full-subcategory, prop-sets-and-functions-form-category-set, def-finite-cardinality, lem-pigeonhole, def-small-locally-small-and-large-category, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-wedge-and-cowedge]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Richter, From Categories to Homotopy Theory (author's draft), Proposition 4.5.3"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

**False claim:** every functor
$T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ has an end
([[def-end-and-coend]]).

## Facts & Assumptions

**Given:** The discrete category $\mathcal C$ on the set $\mathbb N$ of natural numbers, the full subcategory $\mathcal D$ of $\mathbf{Set}$ whose objects are the finite sets, and the functor $T$ with $T(c,c')=\{0,1\}$ for every pair of objects.

[F4] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F3] A subcategory has a subclass of the objects and, for each pair, a subclass of the morphisms; The subcategory is **full** when $\mathcal A(A,B)=\mathcal C(A,B)$ for every pair of its objects ([[def-subcategory-and-full-subcategory]]).

[F6] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets. ([[def-small-locally-small-and-large-category]]).

[F8] A wedge from $d$ to $T$ is a family $\omega_c:d\to T(c,c)$ with $T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$ for every $f:c\to c'$ ([[def-wedge-and-cowedge]]).

[F1] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge, so an end is a wedge through which every wedge factors by exactly one morphism ([[def-end-and-coend]]).

[L1] For small $\mathcal C$ and a target where the displayed objects exist, an end is the equalizer of two products, the first indexed by the objects of $\mathcal C$ and the second by its morphisms ([[thm-an-end-is-an-equalizer-between-two-products]]).

[F2] A product of $(A_i)_{i\in I}$ is an object $P$ with projections $p_i$ such that every family $f_i:X\to A_i$ has a unique pairing $\langle f_i\rangle_{i\in I}:X\to P, \qquad p_i\langle f_i\rangle=f_i\quad(i\in I)$ ([[def-products-and-coproducts]]).

[F5] A set $A$ is **finite** when $A \approx n$ for some $n \in \mathbb{N}$, and then $\lvert A\rvert$ is that unique $n$ ([[def-finite-cardinality]]).

[L2] For every $n \in \mathbb{N}$ there is **no injection** $\sigma(n) \to n$ ([[lem-pigeonhole]]).

[F7] A category is **complete** when it has all small limits; Completeness and cocompleteness do not assert the existence of limits or colimits of large diagrams ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

## Refutation

**Proof technique:** direct.

1.1 Let $\mathcal C$ be discrete on $\mathbb N$, so its only morphisms are identities and it is small by [F6]; let $\mathcal D$ be the full subcategory of $\mathbf{Set}$ on the finite sets, which is a category by [F3] and [F4]; and let $T$ send every pair of objects to the two-element set $\{0,1\}$ and every morphism to an identity, which is a functor because every morphism of $\mathcal C^{\mathrm{op}}\times\mathcal C$ is an identity. The index category is deliberately small, so that smallness of the index is not what is at issue. [F3, F4, F6, given, construct]

2.1 A wedge over $T$ with vertex $X$ is an unconstrained family: by [F8] the wedge equation is imposed only at morphisms of $\mathcal C$, and all of those are identities, at which it reads $\omega_c=\omega_c$. So a wedge with vertex $X$ is exactly a family of functions $X\to\{0,1\}$ indexed by $\mathbb N$, and by [L1] and [F2] an end of $T$ is exactly a product of the diagonal values in $\mathcal D$. [F2, F8, L1, step 1.1]

3.1 No object of $\mathcal D$ has that property. Suppose $E$ were an end, with $\lvert E\rvert=n$ by [F5]. Take the vertex to be a one-element set, which is an object of $\mathcal D$; the wedges with that vertex are the families $(\epsilon_c)_{c\in\mathbb N}$ with $\epsilon_c\in\{0,1\}$, and the $\sigma(n)$ families that are $1$ at exactly one of the numbers $0,\dots,n$ and $0$ elsewhere are pairwise distinct. By [F1] each factors through $E$ by exactly one morphism from a one-element set, that is by exactly one element of $E$, and distinct wedges give distinct elements; this is an injection $\sigma(n)\to E$, hence an injection $\sigma(n)\to n$, which [L2] forbids. So $T$ has no end and the claim is false. [F1, F2, F5, L2, step 2.1]

4.1 A large index category is a second and independent way for an end to fail, since the equalizer description of [L1] would then ask for a product over a proper class, and [F7] records that completeness asserts nothing about diagrams that are not small. The refutation above does not use that route: its index category is small, and what fails is the target. [F7, step 3.1] ∎

## Remarks

The witness turns on the target, not on the index. Taking $\mathcal D$ to be all of $\mathbf{Set}$ would make the end exist, since the required product is then available; taking the diagonal values to be one-element sets would also make it exist, since the product of one-element sets is a one-element set. It is the combination of infinitely many two-element values with a target closed under nothing infinite that removes the end.

The correct sufficient condition is on this page: [[cor-ends-and-coends-exist-when-the-index-category-is-small-and-the-target-is-complete-or-cocomplete]] asks for a small index category and a complete target, and the witness above has the first without the second.
