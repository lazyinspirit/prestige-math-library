---
id: def-descriptive-tree-rank
kind: definition
title: "The Polish space of trees and its well-founded rank"
status: published
origin: pipeline
deps: ["def-trees-and-bodies-on-discrete-alphabets", "lem-cantor-and-baire-sequence-coding", "lem-polish-closed-products-and-baire-parametrization", "def-rank-of-a-well-founded-relation", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definitions 5.5 and 5.7 pp44–45; local root-rank convention explicit"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Definition

Assume ZFC, with [[def-axiom-of-choice]] supplying the hypothesis of the closed-subspace Polishness result below. Enumerate $\mathbb N^{<\omega}$ by increasing length plus sum of entries, then by length and lexicographically within each finite stratum. This is a bijection with $\mathbb N$. Identify subsets of finite words with their characteristic binary sequences, and let $\mathrm{Tr}$ consist of the prefix-closed subsets, including the empty tree, as in [[def-trees-and-bodies-on-discrete-alphabets]]. Give it the inherited Cantor topology from [[lem-cantor-and-baire-sequence-coding]].

The space $\mathrm{Tr}$ is closed: failure of prefix closure is witnessed by two words $t\in T$, $s\subseteq t$ with $s\notin T$, and fixing these two characteristic coordinates gives an open neighbourhood of non-trees. It is therefore Polish by [[lem-polish-closed-products-and-baire-parametrization]].

Let $\mathrm{WF}\subseteq\mathrm{Tr}$ consist of trees whose immediate-child relation, with a child related to its parent, is well-founded. This relation is setlike. For $T\in\mathrm{WF}$, [[def-rank-of-a-well-founded-relation]] defines

$$r_T(s)=\sup\{r_T(s^\frown n)+1:s^\frown n\in T\}.$$

Its supplier proves existence and ordinal-valuedness with a total recursion rule; the empty supremum is zero. Put $r(T)=r_T(\varnothing)$ for nonempty T and $r(\varnothing)=0$ for the empty tree. Thus both an empty tree and a root-only tree have rank zero. The rank does not distinguish those trees. We do not assign a negative ordinal rank to the empty tree. Write $\mathrm{IF}=\mathrm{Tr}\setminus\mathrm{WF}$; its identification with trees having infinite branches is proved separately.
