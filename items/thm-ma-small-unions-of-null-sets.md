---
id: thm-ma-small-unions-of-null-sets
kind: theorem
title: MA makes unions of fewer than continuum many null sets null
status: published
origin: pipeline
deps: [def-martins-axiom, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, thm-lebesgue-outer-regularity-for-arbitrary-subsets, thm-continuity-from-below-for-measures, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Kunen, Set Theory, Martin's Axiom and the null ideal", url: "https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf"}
---

## Statement

In ZFC+MA, the union of fewer than $2^{\aleph_0}$ Lebesgue-null subsets of the real line is null. In particular every set of reals of cardinality below the continuum is null.

## Facts & Assumptions

**Given:** AC, MA, $\kappa<\mathfrak c$, null sets $N_\alpha$, and $\varepsilon>0$.

[F1] [[thm-lebesgue-outer-regularity-for-arbitrary-subsets]] gives small open covers.

[F2] [[thm-continuity-from-below-for-measures]] permits a finite stage of an increasing countable open cover to approximate its union in measure.

[F3] [[def-martins-axiom]] supplies the filter.

[F4] [[thm-lebesgue-measure-is-a-complete-measure]] passes nullity to subsets.

## Proof

1.1 Let $P_\varepsilon$ be the set of open subsets $U$ of $\mathbb R$ with $m(U)<\varepsilon$, ordered by **reverse inclusion**: $U\le V$ means $U\supseteq V$, so a larger open set is a stronger condition in the convention of [F3]. For every $\alpha$, the subcollection $D_\alpha=\{U:N_\alpha\subseteq U\}$ is dense: given $U$, choose by F1 an open cover $O$ of the null set $N_\alpha\setminus U$ with $m(O)<\varepsilon-m(U)$; then $U\cup O\le U$ lies in $D_\alpha$. [F1, F3]

2.1 The order is ccc. Enumerate the rational open intervals whose closures lie in a condition $U$; their union is $U$. The increasing finite unions $W_j\subseteq U$ therefore have union $U$, so F2 supplies some finite rational-interval union $W=W_j$ with $m(U\setminus W)<(\varepsilon-m(U))/2$. If two conditions $U,V$ share this $W$, then, labelling so that $m(U)\le m(V)$, $$m(U\cup V)\le m(W)+m(U\setminus W)+m(V\setminus W)<m(U)+\tfrac{\varepsilon-m(U)}2+\tfrac{\varepsilon-m(U)}2=\varepsilon,$$ so $U\cup V$ is a condition below both in the declared reverse-inclusion order. Only countably many sets $W$ occur, so no antichain of conditions is uncountable. [F2, step 1.1]

3.1 MA gives a filter meeting all $D_\alpha$. Its union $U$ covers every $N_\alpha$. Directedness toward stronger conditions in the reverse-inclusion order makes every finite subunion of filter members a subset of one stronger member, so it has measure below $\varepsilon$. The rational base gives a countable cofinal subfamily for the union, so continuity from below yields $m(U)\le\varepsilon$. Repeating for $\varepsilon=2^{-n}$ proves the total union has outer measure zero, and completeness gives nullity. [F3, F4, step 1.1, step 2.1]

4.1 A singleton has measure zero. Applying the first clause to the family of singletons indexed by any set of reals of size below $\mathfrak c$ gives the second. AC was used to enumerate/cardinalize the family and choose all covers and approximations. [F4, step 3.1] ∎
