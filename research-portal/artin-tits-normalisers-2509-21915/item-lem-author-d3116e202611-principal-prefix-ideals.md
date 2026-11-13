---
title: Bounded prefix ideals and rank-two closure
status: published
research_item: lem-author-d3116e202611-principal-prefix-ideals
dependency_level: 3
sources:
  references:
    - title: Pierre Deligne, Les immeubles des groupes de tresses généralisés,
        Inventiones mathematicae 17 (1972), 273–302
      url: https://publications.ias.edu/sites/default/files/Number18.pdf
      locator: §1, (1.5)–(1.6), (1.8), (1.9.2), (1.13)–(1.14), and Corollary (1.20);
        printed pp. 275–278, 282
      statement: For an intersection Q of supporting wall hyperplanes of a chamber B,
        the unique face supported on Q identifies its incident chambers with
        chambers of the quotient arrangement in V/Q; the opposite quotient
        chamber lifts to B_Q and Δ(Q)=u(B,B_Q). A length-bounded set I of
        gallery classes of source A is the prefix set of a unique class exactly
        when it contains the identity, is prefix closed, and contains gΔ(M∩N)
        whenever it contains both gΔ(M) and gΔ(N), for wall hyperplanes M,N at
        the target of g.
      hypotheses: A finite arrangement of homogeneous real hyperplanes in a
        finite-dimensional real vector space V, with every chamber the positive
        span of a basis of V, as in (1.8). Gallery classes and traversal-order
        products are those of (1.10)–(1.13); Q is an intersection of supporting
        wall hyperplanes of B. The set I has fixed source and bounded gallery
        length.
      reading_limits: Checked the PDF text of (1.5)–(1.6), (1.8), (1.9.2),
        (1.13)–(1.14), and (1.20), and visually inspected printed pp. 276, 278,
        282 in the cached Deligne PDF. The quotient correspondence and
        bounded-prefix criterion are imported; their substantial proofs are not
        reconstructed. No whole-paper reading or new verification of
        cancellation is claimed.
external_input: true
---

## Prerequisites

- [lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category)
- [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)
- [` Pierre Deligne, Les immeubles des groupes de tresses généralisés, Inventiones mathematicae 17 (1972), 273–302 · §1, (1.5)–(1.6), (1.8), (1.9.2), (1.13)–(1.14), and Corollary (1.20); printed pp. 275–278, 282 `](https://publications.ias.edu/sites/default/files/Number18.pdf)


## Statement

Let $V$, $\mathcal A$, $P$, and $u$ be as in the positive gallery category: $\mathcal A$ is a finite central arrangement in the finite-dimensional real vector space $V$, and every chamber is an open simplicial cone in $V$. Let $I$ be a set of arrows of $P$ with common source $A$ and bounded length; a prefix of $h$ is an arrow $g$ such that $h=gk$ for some arrow $k$, with products in traversal order.

A supporting wall hyperplane of a chamber $B$ is a hyperplane $H\in\mathcal A$ whose wall face $\overline B\cap H$ has dimension $\dim V-1$. For an intersection $Q$ of supporting wall hyperplanes of $B$ (with empty intersection $V$), let $F_B(Q)$ be the interior in $Q$ of $\overline B\cap Q$, the unique relatively open face of $\overline B$ with linear span $Q$. The residue at this face is the arrangement $\{H/Q:H\in\mathcal A,\ Q\subseteq H\}$ in $V/Q$. Let $B_Q$ be the unique chamber whose closure contains $F_B(Q)$ and whose residue chamber is opposite the residue chamber of $B$, and put $d_B(Q)=u(B,B_Q)$.

Then $I$ is the full prefix set of one unique arrow if and only if it contains $1_A$, is closed under taking prefixes, and whenever $g:A\to B$ and distinct supporting wall hyperplanes $M,N$ of $B$ satisfy $g d_B(M),g d_B(N)\in I$, also $g d_B(M\cap N)\in I$.

## Statement references

[lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category)

[def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

## Facts & Assumptions

[F99] Import Deligne Proposition 1.14 and Corollary 1.20 for both directions of the bounded-prefix criterion, and (1.5)–(1.6), (1.9.2), (1.13) for its face, residue and $\Delta(Q)$ construction, under hypothesis (1.8). No local proof of the substantial criterion or residue correspondence is claimed.

[F1] The category, minimal class $u$, traversal-order composition and additive length, with length-zero arrows exactly identities, are those of [lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category).

[F2] Use [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites) with $T=V$ for chambers, wall faces, supporting hyperplanes, their intersections, the quotient vector space and open simplicial cones. The objects intersected to form $Q$, $M\cap N$ and $V/Q$ are linear hyperplanes, not closed wall faces. The imported correspondence in [F99] supplies the unique face and the incident-chamber lift defining $B_Q$.

## External input

[E1] Deligne (1.5)–(1.6) identifies chambers incident to the face supported on $Q$ with chambers of the quotient arrangement; (1.9.2) ensures that this face exists for an intersection of wall hyperplanes of $B$, and (1.13) defines $\Delta(Q)=u(B,B_Q)$. Under the finite central simplicial hypotheses (1.8), Proposition 1.14 says that the three closure conditions in the Statement make a length-bounded fixed-source set a principal prefix set, with a unique generator. Corollary 1.20 supplies the converse. These are imported inputs, not locally reconstructed proofs.

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the Statement.

1.1 The arrangement hypotheses are exactly Deligne (1.8). By the imported correspondence (1.5)–(1.6), (1.9.2), the residue antipode lifts to the chamber $B_Q$ in the Statement, and $d_B(Q)$ is Deligne's $\Delta(Q)$ in (1.13). The gallery congruence agrees with his by [lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category). Thus the three stated conditions are those of (1.14); the case $M=N$, if included, adds only a tautology. [F1, F2, F99, given]

2.1 Proposition 1.14 gives principality from these conditions, and Corollary 1.20 gives their necessity for a principal prefix set. For uniqueness, if $x$ and $y$ have the same prefix set, write $x=ya$ and $y=xb$. Additive length gives $\ell(a)+\ell(b)=0$, so both complements are identities and $x=y$. [F1, F99, step 1.1] ∎
