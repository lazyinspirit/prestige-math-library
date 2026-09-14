---
id: lem-suslin-tree-branch-first-difference-order
kind: lemma
title: "The first-difference order on branches"
status: published
origin: pipeline
deps: [lem-suslin-tree-normal-splitting-refinement, lem-normal-set-theoretic-tree-sequence-representation, lem-tree-predecessors-and-common-extensions, thm-rationals-countable, lem-rat-embeds-dense, thm-countable-union-of-countable, def-axiom-of-choice, thm-zorn]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Theorem 9.13 and complete proof, printed pp. 68-69; local density and no-endpoint strengthening"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

Let $S$ be the infinitely splitting normal Suslin refinement furnished by [[lem-suslin-tree-normal-splitting-refinement]]. Order every immediate-successor set densely and without endpoints, and order the maximal branches of $S$ lexicographically at their first difference. In ZFC this is a dense linear order without endpoints, it is ccc, and none of its nonempty open intervals is separable.

## Facts & Assumptions

**Given:** The refined tree $S$ and AC.

[F1] The refinement is normal, Suslin, and countably infinitely splitting, and forbidden uncountable branch/antichain sets lift to the original tree. [[lem-suslin-tree-normal-splitting-refinement]]

[F2] A normal tree has a faithful downward-closed sequence representation preserving heights and initial segments. [[lem-normal-set-theoretic-tree-sequence-representation]]

[F3] Nodes below a common node are comparable, and each lower height has a unique predecessor. [[lem-tree-predecessors-and-common-extensions]]

[F4] The rationals are countably infinite. [[thm-rationals-countable]]

[F5] The rational order is dense; its elementary translates $q-1$ and $q+1$ also show it has no endpoints. [[lem-rat-embeds-dense]]

[F6] A countable union of countable sets is countable under countable choice. [[thm-countable-union-of-countable]]

[A1] AC supplies the simultaneous successor orders and maximal-branch extensions. [[def-axiom-of-choice]]

[F7] Under AC, Zorn's lemma supplies a maximal element when every chain in a nonempty poset has an upper bound. [[thm-zorn]]

## Proof

1.1 For each node $t$, its immediate-successor set is countably infinite by F1 and the countability of the next level. Using F4 and A1, choose a bijection from that set to $\mathbb Q$ and transport the usual dense no-endpoint order from F5. Use F2 to regard a branch as a coherent sequence of successor choices. The poset of branches through a fixed node, ordered by inclusion, is nonempty and the union of every chain is an upper bound, so F7 supplies a maximal branch through every node. Such a branch has countable limit length: it cannot have length $\omega_1$ because $S$ is Suslin, and it cannot have a last node because normality extends that node higher. Two distinct maximal branches cannot be proper initial segments of one another, so they have a least differing coordinate $d(B,C)$. [F1, F2, F3, F4, F5, F7, A1, given]

2.1 Define $B<_{\mathrm{lex}}C$ when, at $d(B,C)$, the successor chosen by $B$ precedes the successor chosen by $C$. The usual first-difference argument is valid because F2 identifies all earlier coordinates and F3 makes their common predecessor unique. If $A<B<C$, the least of the two relevant first-difference levels determines the same orientation for $A$ and $C$; hence the relation is transitive. Exactly one orientation holds for distinct branches, so this is a linear order. [F2, F3, step 1.1]

3.1 If $B<C$, choose at their first difference a successor strictly between their two successors in the dense local order and extend it to a maximal branch $E$. Then $B<E<C$. Given a branch $B$, take one of its successor choices and choose local successors immediately below and above it in the no-endpoint local order; maximal branches through them lie respectively below and above $B$. Thus the lexicographic branch order is dense and has no endpoints. [F5, A1, step 1.1, step 2.1]

4.1 Suppose $(I_\xi)_{\xi<\omega_1}$ were pairwise disjoint nonempty open branch intervals, writing $I_\xi=(B_\xi,C_\xi)$. Choose $E_\xi\in I_\xi$. Since its length is limit, choose $d(B_\xi,E_\xi),d(E_\xi,C_\xi)<\alpha_\xi<\operatorname{len}(E_\xi)$ and let $x_\xi$ be the height-$\alpha_\xi$ node of $E_\xi$. If $x_\xi\le_Sx_\eta$, then the two middle branches agree through $\alpha_\xi$; comparing them at the two earlier first-difference coordinates puts $E_\eta$ strictly between $B_\xi$ and $C_\xi$. This contradicts disjointness of $I_\xi$ and $I_\eta$. Hence the $x_\xi$ form an uncountable tree antichain, contrary to F1. The branch order is ccc. [F1, F3, A1, step 2.1, step 3.1]

5.1 Fix a nonempty open interval $(B,C)$ and a countable set $D$ of branches in it. By F6 choose a countable ordinal $\delta$ strictly above $d(B,C)$ and above the lengths of every member of $D$. At the first difference of $B,C$, choose an intermediate successor, extend its cone to a node $x$ at height $\delta$, and then to a maximal branch; every branch through $x$ lies in $(B,C)$. The cone above $x$ is not a chain, for normality would otherwise give a cofinal branch. Choose incomparable $y,z>x$, and incomparable $u,v>y$, and extend $u,v,z$ to branches $P,Q,R$. After interchanging $P,Q$ and, if needed, reversing the picture, either $(P,R)$ or $(R,Q)$ is a nonempty interval contained in $(B,C)$ whose two endpoints share $x$. Any branch lying strictly between those endpoints must agree with one endpoint through height $\delta$, so has length greater than $\delta$. It therefore is not in $D$. Thus $D$ is not dense in $(B,C)$. [F1, F3, F6, A1, step 2.1, step 3.1, step 4.1]

6.1 Steps 2.1-5.1 prove linearity, density, absence of endpoints, ccc, and failure of separability in every nonempty interval. AC is used through F7 and to choose the family of local rational orders, maximal branches, interval witnesses, and the countable ordinal bound; no claim is made in ZF alone. [F7, A1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
