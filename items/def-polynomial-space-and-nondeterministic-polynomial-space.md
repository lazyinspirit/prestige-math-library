---
id: "def-polynomial-space-and-nondeterministic-polynomial-space"
kind: "definition"
title: "Polynomial space and nondeterministic polynomial space"
status: published
origin: "pipeline"
deps: ["def-dtime-ntime-dspace-and-nspace", "def-worst-case-time-and-space-complexity", "def-uniform-asymptotic-time-space-comparison"]
justified_by: []
landmark: false
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, Definition 4.5"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
---

## Definition

Use the all-tape resource classes of [[def-dtime-ntime-dspace-and-nspace]] and the worst-case convention of [[def-worst-case-time-and-space-complexity]]. Set
$$\mathrm{PSPACE}=\bigcup_{k\ge1}\mathrm{DSPACE}(n^k),\qquad \mathrm{NPSPACE}=\bigcup_{k\ge1}\mathrm{NSPACE}(n^k).$$
Here $k$ ranges over integers. Membership requires one fixed finite-tape machine, one exponent and input-independent asymptotic constants. A deterministic machine must decide the language; a nondeterministic machine must halt on every branch and accept exactly when an accepting branch exists. Finitely branching all-halting computation trees are finite: if one were infinite, a node with infinitely many descendants would have a least-indexed child with infinitely many descendants, recursively producing an infinite branch. Thus finite maxima exist; this uses a fixed finite ordering of instructions, not AC.

Space counts distinct scanned tape/cell pairs, including the input tape and each initial head cell. Initially occupied but unvisited input cells are not automatically counted, as specified in [[def-uniform-asymptotic-time-space-comparison]]. Reading the complete input costs $n$ cells, and storing it explicitly costs $O(n+1)$ space. For polynomial space we may enlarge any bound to an integer polynomial $S(n)=C(n+1)^k$ dominating $n+1$ and the number of tapes. Conversely such a bound is $O(n^k)$ for $n\ge1$, so this gives the same unions. Short inputs, including the empty input, must still halt, but do not affect asymptotic class membership. This definition asserts no equality between PSPACE and NPSPACE.
