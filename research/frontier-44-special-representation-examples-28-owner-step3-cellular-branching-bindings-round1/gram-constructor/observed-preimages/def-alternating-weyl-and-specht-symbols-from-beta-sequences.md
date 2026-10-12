---
id: def-alternating-weyl-and-specht-symbols-from-beta-sequences
kind: definition
title: "Virtual Weyl and Specht symbols attached to beta sequences"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partition-young-diagram-and-conjugate-partition, def-semistandard-tableau-and-kostka-number, def-type-a-hecke-specht-module-and-cell-form, def-type-a-q-schur-algebra-and-weyl-modules]
justified_by: []
aliases: []
landmark: false
dependency_level: 10
proof_strategy: direct
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Equations (5.21)-(5.22) with Lemma 5.26, printed pp. 52-57: the alternating symbols attached to beta sequences and the signed semistandard multiplicities, including the branching recursion for displaced sequences"
    - title: "Richard Dipper and Gordon James, Representations of Hecke algebras of general linear groups, Proc. London Math. Soc. (3) 52 (1986) 20-52"
      url: "https://doi.org/10.1112/plms/s3-52.1.20"
      locator: "Sections 3-4: the beta-sequence description of Weyl and Specht module classes used for the translation"
---

## Definition

Fix an integer $n\ge1$. For a sequence $b=(b_1,\dots,b_n)$ of integers let
$b^{\downarrow}=(b^{\downarrow}_1\ge\cdots\ge b^{\downarrow}_n)$ be the
non-increasing rearrangement and let $w\in S_n$ be the unique permutation with
$b^{\downarrow}_i=b_{iw}$ for all $i$. A sequence $b$ is a **beta sequence**
when it is strictly decreasing with $b_1>b_2>\cdots>b_n\ge0$; then $b$ is the
sequence of beta numbers $\beta(\nu)$ of a unique partition $\nu$ of size
$|\nu|=\sum_ib_i-n(n-1)/2$, namely the partition with conjugate parts
$$\nu'_i=b_i-n+i\qquad(1\le i\le n),$$
and every partition with at most $n$ parts arises this way
([[def-partition-young-diagram-and-conjugate-partition]]). For an arbitrary
sequence $b\in\mathbb Z^n$ define the **virtual Weyl symbol** $[\Delta^{b}]$
and the **virtual Specht symbol** $[S^{b}]$ by the same rule
$$[\Delta^{b}]:=\begin{cases}(-1)^{\ell(w)}[\Delta^{\nu}], & b^{\downarrow}\text{ strictly decreasing and } b^{\downarrow}_n\ge0,\\ 0, & \text{otherwise},\end{cases}$$
where $[\Delta^{\nu}]$ is the class of the Weyl module and $[S^{\nu}]$ the
class of the Hecke Specht module in the source's normalisation, i.e. of the
Murphy cell module $S^{\nu}_{\mathrm M}$ of
[[def-type-a-hecke-specht-module-and-cell-form]], in the appropriate
Grothendieck group (the Dipper-James translation conjugates partitions and
applies the same $\theta$ pullback to every Hecke module) and $\ell(w)$ is the
inversion length; the symbol therefore vanishes on sequences with a repeated
entry or with a negative sorted last entry, and changes sign by $(-1)^{\ell(w)}$
when the entries of $b$ are permuted. The **signed semistandard multiplicity**
$d_{\mu}(b)\in\mathbb Z$ for a composition $\mu$ of $|\nu|$ is
$$d_{\mu}(b):=(-1)^{\ell(w)}\,|T_0(\nu,\mu)|$$
when $b=\beta(\nu)$
([[def-semistandard-tableau-and-kostka-number]] for the semistandard tableaux
of type $\mu$), and is extended to arbitrary integer sequences
$b\in\mathbb Z^n$ by the branching recursion
$$d_{\mu}(b)=\sum_{\substack{C\subseteq\{1,\dots,n\}\\|C|=z}}d_{\mu'}(b^{C}),\qquad b^{C}_i:=\begin{cases}-1, & i\in C,\\ b_i, & i\notin C,\end{cases}$$
where $z$ is the last nonzero part of $\mu$ and $\mu'$ is $\mu$ with that part
deleted; the recursion terminates because $|\mu|$ strictly decreases. In the
applications on this page the beta sequences have length $n=|\lambda|$ and the
recovered partitions have at most $n\le d$ parts, so the symbols and
multiplicities are honest elements of the Grothendieck groups of
$S(d,n)$-modules and $H_{F,q}(S_n)$-modules respectively. The sorting sign is
well defined because a strictly decreasing rearrangement is unique; the
recovery formula is the inverse of $\nu'_i=b_i-n+i$ and produces a partition
exactly in the non-vanishing case; and the recursion for $d_{\mu}$ on non-beta
sequences is the source's (5.22). No analytic assertion is smuggled into the
definition, and no choice principle is used.
