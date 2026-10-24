---
id: lem-hh-colored-permutation-rsk-and-tableau-square-count
kind: lemma
title: "Colored RSK and the multipartition square count"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 1
deps: [def-hh-multipartitions-standard-tableaux-and-generic-contents, thm-robinson-schensted-correspondence]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Spring Term 2013 lecture notes"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§1.5: ordinary row insertion and reverse deletion; the componentwise colored bijection and its count are proved here"
---

## Statement

Let $f^\lambda=|\operatorname{Std}(\lambda)|$ for an $r$-multipartition $\lambda$ of $n$. There is an explicit bijection between **$r$-colored permutations** $(\sigma,\kappa)\in S_n\times\{1,\ldots,r\}^n$ and pairs $(P,Q)$ of standard multitableaux of a common shape. Its forward map scans positions $i=1,\ldots,n$: if $\kappa_i=c$, row-insert the value $\sigma(i)$ into component $c$ of $P$ and place the recording label $i$ in the new box of component $c$ of $Q$. Its inverse scans $i=n,n-1,\ldots,1$: find the unique component whose recording tableau contains $i$, delete that recording corner, and reverse-row-delete the corresponding box of its insertion tableau to recover $\sigma(i)$; the component is $\kappa_i$. Consequently,

$$ \sum_{\lambda\in\mathcal P_r(n)}(f^\lambda)^2=r^n n!. $$

## Facts & Assumptions

**Given:** The row-insertion and reverse-row-deletion maps of [[thm-robinson-schensted-correspondence]], and the definition of standard multitableaux of [[def-hh-multipartitions-standard-tableaux-and-generic-contents]].

[F1] For any finite word of distinct entries, ordinary row insertion produces a standard insertion tableau and a standard recording tableau of the same shape. Repeated reverse-row-deletion at the recording label $m,m-1,\ldots,1$ recovers the original word; the largest recording entry lies at a removable corner. ([[thm-robinson-schensted-correspondence]])

[F2] An $r$-multipartition of $n$ is a tuple of $r$ ordinary diagrams with total size $n$, and a standard multitableau is a standard filling in each component using the labels $1,\ldots,n$ exactly once across all components. ([[def-hh-multipartitions-standard-tableaux-and-generic-contents]])

## Proof

**Given:** A colored permutation $(\sigma,\kappa)\in S_n\times[r]^n$, or a pair of standard multitableaux $(P,Q)$ of a common shape.

1.1 For each color $c$, take the subsequence of values $\sigma(i)$ with $\kappa_i=c$, in increasing order of their positions $i$. If its values are not $1,\ldots,m$ in that order, replace them by their increasing ranks before applying ordinary row insertion. The insertion and reverse-deletion routes use only comparisons, so this order-preserving relabelling leaves every bumping position unchanged; after reverse deletion, replace ranks by the original values in the same order. Thus [F1] gives standard insertion and recording tableaux of the same shape for every color subsequence, including an arbitrary subset of $\{1,\ldots,n\}$. At the step for position $i$, record $i$ in the new box of $Q^{(c)}$. Their entries across components are the values $1,\ldots,n$ once in $P$, and the positions $1,\ldots,n$ once in $Q$, so $P,Q$ are standard multitableaux of the same multipartition. This is the stated forward map. [F1, F2]

1.2 To invert, begin with standard multitableaux $(P,Q)$ of common shape. At global step $i=n,n-1,\ldots,1$, there is exactly one component $c$ with recording entry $i$. Since every recording component is standard and all larger global labels have already been removed, $i$ is the largest entry in the current $Q^{(c)}$ and occupies a removable corner. Remove that box from $Q^{(c)}$. In $P^{(c)}$, replace the current set of distinct values by their increasing ranks, reverse-row-delete the same corner, and replace the expelled rank by the corresponding original value; this works because both bumping and reverse deletion use only comparisons. Define that value to be $\sigma(i)$ and set $\kappa_i=c$. The process is defined at every step and ends with empty tableaux. [F1, F2]

2.1 Starting with a colored permutation and applying the inverse just defined deletes, in each component, its recording boxes in reverse time order. The inverse identity in [F1] expels exactly the value inserted at that position, so it recovers every $\sigma(i)$ and the component records every $\kappa_i$. Conversely, starting from $(P,Q)$ and reversing, each expelled value is reinserted into the same component at the same recording time; the insertion/reverse-deletion identity of [F1] restores that component and its new box. Induction over $i$ therefore restores the original pair. Thus the two algorithms are mutually inverse. [step 1.1, step 1.2, F1]

3.1 There are $n!$ permutations of $1,\ldots,n$ and independently $r$ choices of color at each of the $n$ positions, hence $r^n n!$ colored permutations. The bijection of step 2.1 sends them to the disjoint union over shapes $\lambda$ of pairs of standard multitableaux of shape $\lambda$, whose number is $\sum_\lambda(f^\lambda)^2$. This proves the square count. [step 2.1, F2, algebra] ∎
