---
id: def-qc-unbounded-error-time-space-counting-model
kind: definition
title: "Unbounded error time space counting model"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-probabilistic-polynomial-time-machine-interface
  - def-effective-binary-encoding-and-decoder
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Van Melkebeek and Watson, Time-Space Efficient Simulations of Quantum Computations, Theory of Computing 8 (2012), Sections 2.3 and 5"
      url: https://doi.org/10.4086/toc.2012.v008a001
    - title: "Eric Allender et al., Time-Space Tradeoffs in the Counting Hierarchy"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
    - title: "Van Melkebeek and Watson, A Quantum Time-Space Lower Bound for the Counting Hierarchy, Sections 2–3"
      url: https://arxiv.org/pdf/0712.2545
---

## Definition

Use fixed finite-control fair-bit probabilistic machines with read-only binary input followed by blanks and a fixed finite number of work tapes and heads, with a finite explicit transition-table code. Each nonhalting transition consumes one independent fair bit as in [[def-probabilistic-polynomial-time-machine-interface]]. Fix one access profile for each complexity class.

In the **sequential** profile, heads move locally by at most one cell per transition. In the **erased-index head-access** profile, use the head-access mechanism of the final 2012 Van Melkebeek–Watson model: a zero-initialized binary classical work tape, a fixed finite number of input/work heads, and classical finite control. Each head may move left, right, stay, or jump in one transition to an address computed on a designated one-way sequential-access write-only index tape. Index tapes are initially empty, writing each bit is charged to the ordinary transition count, and an index tape is erased after each use. The original input tape is read-only and contains the input followed by blanks. If coincident work heads make an operation undefined, omit that work-tape operation in the transition. All heads start at the left boundary; left motion there clamps at zero.

The **published VMW derived basis restriction**, denoted the **basis** profile, also permits the classical basis action of the source's native coherent input query. On a contiguous block $[l,r]$ of a specified binary work tape, the first $r-l$ bits give the binary input index $i$ in most-significant-first order and the last cell holds $b$; the query replaces only $b$ by $b\mathbin\oplus x_i$, using zero on invalid input indices. Both endpoints are freshly emitted on erased index tapes. The native query costs one transition, as in the published quantum model. The input indices are $1,\ldots,n$, with $x_0=0$; the empty address word denotes zero, and reversed endpoints cause omission of the query. Allow a fixed finite number of binary work tapes, local operations of fixed finite arity, and native queries on any specified tape: this is the fixed finite product of these classical basis operations, permitting separate path-simulation rows. This is an explicit locally defined comparison model derived from the quantum operations. The source does not separately state a formal classical block-query machine definition, and no equivalence with the index-only profile is assumed. The clocked-normalization lemma proves the required time-only simulation into that profile for clocks at least the input length; no general sublinear-time equivalence is asserted.

For historical comparison, the **preprint-delimited VMW profile** retains the 2007 preprint convention: a jump reads the address written between two classical work-tape heads, without the final paper's write-only erased index tapes. This is a separately named profile. No equivalence or preservation of time/space bounds between the preprint-delimited and published profiles is asserted. Results proved below for the published profile do not establish their extension to the preprint-delimited profile.

Time is the maximum number of transitions on every branch. Sequential space counts distinct visited work cells. Erased-index and basis space use the maximum address of every work cell accessed on any branch, including the highest endpoint of every native basis-query block; read-only input and index tapes are not counted in this maximum-address measure. The preprint-delimited space convention is likewise its maximum visited work-head address. For a fixed profile, $\mathrm{PrTIME}(t)$ uses strict acceptance probability greater than $1/2$ on members and at most $1/2$ on nonmembers; $\mathrm{PrTISP}(t,s)$ adds the stated space bound. Subscripts $\mathrm{seq}$, $\mathrm{index}$, $\mathrm{basis}$, and $\mathrm{preprint}$ distinguish the four profiles. An exact classical oracle is deterministic; writing its queries and returning from them are charged, and total query-string length is at most the outer running time.

For either $P\in\{\mathrm{seq},\mathrm{basis}\}$, define $\mathrm{LCH}_{P,1}=\mathrm{PrTIME}_P(n)$ and $\mathrm{LCH}_{P,j+1}=\mathrm{PrTIME}_P(n)^{\mathrm{LCH}_{P,j}}$. Oracle queries are exact and all fair-bit branches belong to the outer machine. An omitted profile in an item must be fixed explicitly by that item's hypotheses; profiles are never silently identified.

A $\mathrm{MajSAT}$ formula has a fixed finite set of Boolean variables and is accepted when at least half of assignments satisfy it. A $\mathrm{MajMajSAT}$ formula has two disjoint ordered variable blocks and is accepted when at least half of outer assignments leave a residual formula true on at least half of inner assignments. Use a common explicit plain-formula encoding for MajSAT. MajMajSAT accepts this same plain encoding with one implicit fresh unused outer variable and all formula variables in the inner block; it also accepts a separately tagged encoding with the two variable blocks explicitly listed. Thus every plain MajSAT instance embeds identically, bit for bit, into MajMajSAT with unchanged truth value. The unused outer variable is part of the decoded fixed finite variable set. Concretely, use distinct fixed tags for plain and partitioned inputs, a unary declaration of the number of variables, fixed-width variable indices, and prefix-encoded binary AND/OR and unary NOT gates (with constant tokens). The partitioned form also gives the outer-block split; variables are renamed into block order. Plain-format validity is checked by one pending-subexpression counter, variable-range checks and a scan of the declared fields, using $O(n\,\mathrm{polylog}\,n)$ time and $O(\log n)$ workspace. These conventions do not alter either at-least-half threshold. Malformed encodings are rejected by both problems.

## Source-model boundary

The published-profile convention follows Van Melkebeek and Watson, *Time-Space Efficient Simulations of Quantum Computations*, Theory of Computing 8 (2012), §2.3.1–2.3.2, printed pages 10–11, https://doi.org/10.4086/toc.2012.v008a001. The delimited-head mechanism belongs to the 2007 arXiv preprint. The final-source correction retains that historical mechanism explicitly but grants no theorem about it.

## Operand-space clarification

The source informally describes space as maximum work-head address and its simulation proof fixes an $s$-qubit work register. Here operand access is explicit: every local operand and every endpoint of a native query counts as a work-access head for the space measure. This local clarification prevents uncharged query workspace. The source does not explicitly spell out this endpoint rule; it is not quoted as a verbatim source condition. No lower-bound or resource-inclusion claim is made for a literal head-only variant that permits free uncharged query blocks.
