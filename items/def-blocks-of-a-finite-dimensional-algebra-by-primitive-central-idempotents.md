---
id: def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents
kind: definition
title: "Blocks of a finite-dimensional algebra via primitive central idempotents"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-algebra-over-a-commutative-ring, lem-central-idempotent-decompositions-of-one-are-unique, lem-the-identity-of-a-finite-dimensional-algebra-decomposes-into-primitive-central-idempotents]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 5 Section 3, printed pp. 53-54: the block decomposition through central idempotents and the block decomposition of a module"
---

## Definition

Let $F$ be a field and $A$ a finite-dimensional unital $F$-algebra with centre
$Z(A):=\{z\in A:za=az\text{ for all }a\in A\}$
([[def-algebra-over-a-commutative-ring]]). A **central idempotent** of $A$ is
an idempotent $e\in Z(A)$; it is **primitive** when $e\ne0$ and $e$ is not the
sum of two nonzero orthogonal central idempotents.

Then $Z(A)$ is a finite-dimensional commutative $F$-algebra, so the identity
$1\in Z(A)$ admits a decomposition
$$1=e_1+\cdots+e_k$$
into pairwise orthogonal primitive central idempotents
([[lem-the-identity-of-a-finite-dimensional-algebra-decomposes-into-primitive-central-idempotents]]),
and this decomposition is unique up to order
([[lem-central-idempotent-decompositions-of-one-are-unique]]). A **block** of
$A$ is the two-sided ideal $B=eA=Ae$ cut out by a primitive central idempotent
$e$ (the two descriptions agree because $e$ is central).

The blocks are pairwise orthogonal two-sided ideals:
$B_iB_j\subseteq e_iAe_jA=e_ie_jA=0$ for $i\ne j$, and
$e_i\in B_i$ is the identity of $B_i$ since $e_i(e_ia)=e_ia$ and
$(ae_i)e_i=ae_i$. Moreover $A=B_1\oplus\cdots\oplus B_k$ as $F$-algebras with
units $e_i$: every $a\in A$ is $a=(\sum_ie_i)a=\sum_ie_ia$ with $e_ia\in B_i$,
and if $\sum_ib_i=0$ with $b_i\in B_i$ then multiplying by $e_j$ gives
$b_j=e_jb_j=\sum_ie_jb_i=0$, so the sum is direct. Each $B_i$ is an
indecomposable two-sided ideal: if $B_i=J\oplus J'$ were a direct sum of
nonzero two-sided ideals, the projections of $e_i$ onto $J$ and $J'$ would be
nonzero orthogonal central idempotents of $A$ summing to $e_i$, as is seen by
applying to $e_i$ the $A$-bimodule projections $B_i\to J$ and $B_i\to J'$,
which satisfy $\pi(a x)=a\pi(x)$ and $\pi(xa)=\pi(x)a$; this contradicts
primitivity of $e_i$.

For every (not necessarily finite-dimensional) $A$-module $M$ one has
$M=\bigoplus_{i=1}^ke_iM$ as $A$-modules: $\sum_ie_i=1$ acts as the identity on
$M$, so $M=\sum_ie_iM$, and if $\sum_im_i=0$ with $m_i=e_im_i$ then applying
$e_j$ gives $m_j=0$; each $e_iM$ is $A$-stable because $e_i$ is central. A
simple $A$-module $S$ satisfies $e_iS\ne0$ for exactly one $i$, and then
$S=e_iS$ lies in the corresponding block: $S=(\sum_ie_i)S=\sum_ie_iS$ forces
some $e_iS\ne0$, and if $e_iS\ne0\ne e_jS$ with $i\ne j$ then simplicity gives
$e_iS=S=e_jS$, whence $S=e_iS=e_i(e_jS)=(e_ie_j)S=0$, a contradiction. Nothing
here asserts that a block is semisimple or simple, and the construction is
choice-free.
