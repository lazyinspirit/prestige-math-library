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

Fix a beta length $L\ge1$. For a partition $\nu$ with at most $L$ columns (that is, $\nu_1\le L$), put $$\beta_i(\nu)=\nu'_i+L-i\qquad(1\le i\le L).$$ Its beta numbers are strictly decreasing nonnegative integers. Conversely, from any strictly decreasing nonnegative sequence $b$ recover the unique partition with conjugate parts $\nu'_i=b_i-L+i$, of degree $|\nu|=\sum_i b_i-L(L-1)/2$ ([[def-partition-young-diagram-and-conjugate-partition]]).

For arbitrary $b\in\mathbb Z^L$, first set all its alternating symbols to zero if it has repeated entries or a negative entry. Otherwise there is a unique sorting permutation $w$ taking it to decreasing order; let $\nu$ be the recovered partition and let $\epsilon(b)=(-1)^{\ell(w)}$. Uniqueness of the sorting permutation is claimed only in this distinct-entry case. In the fixed degree-$r$ Grothendieck groups define $$[W^b]_{d,r}:=\begin{cases}\epsilon(b)[W^\nu],&|\nu|=r\text{ and } \ell(\nu)\le d,\\0,&\text{otherwise},\end{cases} \qquad [S^b]_r:=\begin{cases}\epsilon(b)[S_{\mathrm M}^\nu],&|\nu|=r,\\ 0,&\text{otherwise}.\end{cases}$$ The notation $[\Delta^b]$ is synonymous with $[W^b]_{d,r}$ when $d,r$ are fixed. The ordinary Dipper-James translation conjugates every partition label and pulls every compared module back by the same $\theta$ ([[def-type-a-hecke-specht-module-and-cell-form]], [[def-type-a-q-schur-algebra-and-weyl-modules]]).

For a composition $\mu$ define the signed semistandard number directly by $$d_\mu(b):=\begin{cases}\epsilon(b)|T_0(\nu,\mu)|,&b\text{ has distinct nonnegative entries and }|\nu|=|\mu|,\\0,&\text{otherwise}. \end{cases}$$ Here the tableau alphabet is the length of $\mu$; a shape with too many rows automatically has no such tableau ([[def-semistandard-tableau-and-kostka-number]]). This function is alternating in the beta entries. It also obeys the branching identity $$d_\mu(b)=\sum_{\substack{C\subseteq\{1,\ldots,L\}\\|C|=z}}  d_{\bar\mu}(b-\mathbf1_C),$$ where $z$ is the last nonzero part of $\mu$ and $\bar\mu$ deletes that part. The selected entries are **decreased by one**, not replaced by $-1$. For a decreasing beta sequence this is the deletion of the largest semistandard entries: they occupy a horizontal strip, at most one box in each selected column. Sorting extends the identity to distinct arbitrary sequences; if entries repeat, terms selecting just one of the equal entries cancel in pairs, while terms selecting both or neither vanish. Negative entries remain negative after decrementing. Thus the identity also holds in all zero-symbol cases. At $\mu=0$ its value is the sorting sign for a permutation of $(L-1,\ldots,0)$ and is zero otherwise, so the recursion terminates without another unproved extension rule.

In the formulas of this page take $L=r$ when $r>0$. A nonzero degree-$r$ partition has width at most $r$, so this length suffices; the Weyl cutoff $\ell(\nu)\le d$ is retained even when $d<r$. A balanced displacement $+h\mathbf e_b-h\mathbf e_c$ preserves total degree. An unbalanced change is not silently treated as a class in the same fixed-degree group. The empty degree is handled by the empty beta sequence and unit symbol. No choice principle is used.