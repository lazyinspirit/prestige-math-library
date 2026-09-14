---
id: lem-nowhere-separable-suslin-line-nested-interval-tree
kind: lemma
title: "Nested intervals form a Suslin tree"
status: draft
origin: pipeline
deps: [lem-suslin-line-nowhere-separable-quotient, def-set-theoretic-tree-and-levels, def-aronszajn-suslin-and-special-tree, def-axiom-of-choice, thm-transfinite-recursion, thm-countable-union-of-countable]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Theorem 9.18 and complete proof, printed pp. 74-75"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

In ZFC, let $L$ be a dense ccc linear order with no endpoints such that no nonempty open interval is separable. Then there is a tree on carrier $\omega_1$, obtained by reverse nesting of recursively chosen closed intervals, which has height exactly $\omega_1$, countable levels, no cofinal branch, and no uncountable antichain. Hence it is a Suslin tree.

## Facts & Assumptions

**Given:** A line $L$ with the properties stated above. Assume AC.

[F1] The quotient-and-completion reduction supplies a nonempty dense no-endpoint boundedly complete ccc line in which no nonempty open interval is separable. [[lem-suslin-line-nowhere-separable-quotient]]

[F2] A tree has well-ordered predecessor sets; its levels are indexed by predecessor order type, and branches and antichains have their stated order meanings. [[def-set-theoretic-tree-and-levels]]

[F3] A Suslin tree is an $\omega_1$-height tree with countable levels, no cofinal branch, and no uncountable antichain. [[def-aronszajn-suslin-and-special-tree]]

[F4] Under countable choice, a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

[F5] A set-valued operation on all earlier stages determines a unique transfinite recursion. [[thm-transfinite-recursion]]

[A1] AC selects interval witnesses throughout the $\omega_1$-recursion. [[def-axiom-of-choice]]

## Proof

1.1 Recursively choose $a_\alpha<b_\alpha$ in $L$ for every $\alpha<\omega_1$. At stage $\alpha$, the earlier endpoints form a countable set by F4. They cannot be dense in $L$, so some nonempty open interval $(c,d)$ misses all of them; density of $L$ supplies $c<a_\alpha<b_\alpha<d$. AC gives a choice operation on the nonempty sets of possible quadruples, and F5 then performs the recursion. [F1, F4, F5, A1, given]

2.1 For $\xi<\alpha$, the connected interval $(c,d)$ selected at stage $\alpha$ avoids $a_\xi,b_\xi$. Consequently either $[a_\alpha,b_\alpha]\subset(a_\xi,b_\xi)$, or the two open intervals $(a_\alpha,b_\alpha)$ and $(a_\xi,b_\xi)$ are disjoint. Define $\xi\prec\alpha$ exactly in the first case. The relation is irreflexive and transitive. If $\xi,\eta\prec\alpha$, their intervals both contain $[a_\alpha,b_\alpha]$, so the disjoint alternative is impossible; whichever index is earlier is therefore $\prec$-below the other. Thus the predecessors of $\alpha$ are linearly ordered by the ordinal order and, being a subset of $\alpha$, are well ordered. Hence $(\omega_1,\prec)$ is a tree. [F1, F2, step 1.1]

3.1 There is no uncountable chain. Otherwise enumerate an uncountable chain increasingly as $(\alpha_\xi)_{\xi<\omega_1}$. Successive nesting gives $a_{\alpha_\xi}<a_{\alpha_{\xi+1}}<b_{\alpha_{\xi+1}}<b_{\alpha_\xi}$, so the nonempty open intervals $(a_{\alpha_\xi},a_{\alpha_{\xi+1}})$ are pairwise disjoint. This contradicts ccc of $L$. [F1, F2, A1, step 2.1]

3.2 There is no uncountable antichain. For incomparable $\alpha,\beta$, the dichotomy in step 2.1 makes $(a_\alpha,b_\alpha)$ and $(a_\beta,b_\beta)$ disjoint. An uncountable tree antichain would therefore give an uncountable family of pairwise disjoint nonempty open intervals in $L$, again contradicting ccc. [F1, F2, step 2.1]

4.1 Each tree level is an antichain, hence countable by step 3.2. Every node has countable height because all its predecessors have smaller ordinal indices. If the tree height were a countable ordinal $\delta$, its carrier would be the union of the countably many countable levels indexed below $\delta$, hence countable by F4, contradicting that the carrier is $\omega_1$. Its height is therefore exactly $\omega_1$, not merely the length of the construction. A countable branch cannot be cofinal, because F4 makes the supremum of its countably many countable node-heights countable; an uncountable branch is excluded by step 3.1. Thus there is no cofinal branch. Steps 3.1-3.2 and F3 now show that the tree is Suslin. AC was used only for the recursion's simultaneous interval selections and the countable-union consequences recorded above. [F2, F3, F4, A1, step 1.1, step 2.1, step 3.1, step 3.2] ∎
