---
id: lem-linear-order-completion-existence-uniqueness-and-density
kind: lemma
title: "Linear-order completion and density"
status: published
origin: pipeline
deps: [def-partial-order, def-interval, def-dense-top, def-separable-space, def-countable, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Theorems 9.14-9.15 and Corollary 9.16, printed pp. 69-72"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

Let $L$ be a linear order. A **completion of $L$** means a linear order $M$ satisfying the following exact clauses:

- (C1) $L\subseteq M$, with the same order on $L$;
- (C2) every subset of $M$, including the empty set, has a least upper bound and a greatest lower bound in $M$;
- (C3) every $x\in M$ is the least upper bound in $M$ of some subset of $L$; and
- (C4) if $a\in L$ is the least upper bound in $L$ of $A\subseteq L$, then it remains the least upper bound of $A$ in $M$.

Every linear order has such a completion, and any two completions are uniquely isomorphic over $L$. If $L$ is dense, then it is order-dense in every completion. If in addition $L$ has no endpoints, has no uncountable pairwise disjoint family of nonempty open intervals, and no nonempty open interval of $L$ is separable in its order topology, then deleting the possible first and last elements of a completion produces a dense, no-endpoint, boundedly complete order with the same two latter properties.

## Facts & Assumptions

**Given:** A linear order $L$; for the transfer clause, the additional hypotheses displayed in the statement.

[F1] A linear order is a partial order in which every two elements are comparable; least upper bounds are unique by antisymmetry. [[def-partial-order]]

[F2] Open intervals are endpoint-excluding order-convex sets; we use the same displayed interval notation in an arbitrary linear order. [[def-interval]]

[F3] A subset is dense exactly when it meets every nonempty open set. [[def-dense-top]]

[F4] Separability means the existence of an at most countable dense subset. [[def-separable-space]]

[F5] “Countable” means finite or countably infinite. [[def-countable]]

[A1] AC supplies simultaneous witnesses from families of nonempty intervals. [[def-axiom-of-choice]]

## Proof

1.1 Let $\mathcal C(L)$ consist of the subsets $X\subseteq L$ such that (i) $b<a\in X$ implies $b\in X$, and (ii) whenever $X$ has a least upper bound $a$ in $L$, one has $a\in X$. Order $\mathcal C(L)$ by inclusion. These are the downward-closed cuts with every already-existing $L$-supremum closed in. [F1, given]

2.1 The inclusion order on $\mathcal C(L)$ is linear. Indeed, if $X,Y\in\mathcal C(L)$ and $a\in X\setminus Y$, then every $b\in Y$ satisfies $b<a$ (otherwise downward closure would put $a$ in $Y$), and hence $b\in X$; thus $Y\subsetneq X$. [F1, step 1.1]

3.1 Every family $\mathscr X\subseteq\mathcal C(L)$ has a supremum. Put $U=\bigcup\mathscr X$. If $U$ has no least upper bound in $L$, then $U\in\mathcal C(L)$ and is the union-supremum. If $a=\sup_LU$ exists, downward closure gives $U\cup\{a\}=(-\infty,a]$, which lies in $\mathcal C(L)$ and is the least cut above every member of $\mathscr X$. This includes $\mathscr X=\varnothing$. Infima then exist as suprema of sets of lower bounds, so $\mathcal C(L)$ is complete. [F1, step 1.1, step 2.1]

3.2 Send $a\in L$ to $j(a)=(-\infty,a]$. Each $j(a)$ is a cut, and $a<b$ holds exactly when $j(a)\subsetneq j(b)$, so $j$ is an order embedding. Replacing $L$ by its named copy $j[L]$ if necessary gives literal inclusion as required by C1. [F1, step 1.1, step 2.1]

4.1 Every cut $X$ is $\sup\{j(a):a\in X\}$, including the empty cut. If $a=\sup_LA$ for $A\subseteq L$, then $j(a)$ is an upper bound of $j[A]$; any cut $Y$ above every $j(x)$ for $x\in A$ contains every $b<a$, and it contains $a$ either because $a\in A$ or because clause (ii) closes $Y$ under the supremum $a$. Hence $j(a)=\sup j[A]$. Thus the constructed order satisfies C2-C4. [F1, step 1.1, step 3.1, step 3.2]

5.1 Let $P$ be any completion satisfying C1-C4 and define $\tau_P(x)=\{a\in L:a\le_Px\}$. This is a cut: downward closure is immediate, while if $b=\sup_L\tau_P(x)$, C4 makes $b$ its supremum in $P$, which also equals $x$ by C3, so $b=x\in\tau_P(x)$. If $x<y$, C3 gives an $a\in L$ with $x<a\le y$, so $\tau_P(x)\subsetneq\tau_P(y)$. Conversely the traces reflect order. For every cut $X$, if $x=\sup_PX$, then $\tau_P(x)=X$: an $a<x$ in the trace cannot upper-bound $X$, and if $a=x\in L$, then $a=\sup_LX$ and cut closure puts $a$ in $X$. Thus $\tau_P$ is an onto isomorphism from $P$ to $\mathcal C(L)$ and fixes $L$. Applying this to two completions gives the unique isomorphism over $L$, since C3 forces any such isomorphism to send each $\sup_PA$ to $\sup_NA$. [F1, step 1.1, step 4.1]

5.2 Suppose now that $L$ is dense and $M$ is a completion. If $x<y$ in $M$, C3 supplies $b\in L$ with $x<b\le y$. If $x\in L$, density in $L$ gives $x<a<b$ for some $a\in L$. If $x\notin L$ and there were no $a\in L$ with $x<a<b$, then $b$ would be the least upper bound in $L$ of the $L$-points below $x$; C4 would make that supremum equal both $b$ and $x$, a contradiction. Hence in all cases some $a\in L$ satisfies $x<a<y$, so $L$ is order-dense in $M$. [F1, step 4.1]

6.1 If $(I_\xi)_{\xi<\omega_1}$ were pairwise disjoint nonempty open intervals of $M$, order-density and A1 would choose $a_\xi<b_\xi$ in $L\cap I_\xi$. The nonempty $L$-intervals $(a_\xi,b_\xi)$ would remain pairwise disjoint, contradicting the corresponding hypothesis on $L$. Thus the interval ccc passes to $M$. [F2, A1, step 5.2]

6.2 Suppose a nonempty open interval $I$ of $M$ had a countable dense set $D$. Choose $a<b$ in $L\cap I$. The set $D\cap(a,b)$ is nonempty and countable; list it as $(d_n)_{n<\omega}$, repeating entries in the finite case. For every pair $d_i<d_j$, use order-density and A1 to choose $e_{ij}\in L$ with $d_i<e_{ij}<d_j$. The set $E=\{e_{ij}:d_i<d_j\}$ is countable by diagonal enumeration of the pairs of natural indices. Given $u<v$ in $L\cap(a,b)$, density of $D$ first gives $d_i\in(u,v)$ and then $d_j\in(d_i,v)$, so $u<e_{ij}<v$. Therefore $E$ is dense in the nonempty $L$-interval $(a,b)$, contradicting the hypothesis on $L$. No nonempty open interval of $M$ is separable. [F2, F3, F4, F5, A1, step 5.2]

7.1 Finally assume that $L$ has no endpoints, and delete from $M$ its first and last elements when they exist. Neither deleted point belongs to $L$. The remainder $M^\circ$ still contains the order-dense copy of $L$, is dense and has no endpoints, and retains the conclusions of steps 6.1-6.2. If a nonempty $A\subseteq M^\circ$ is bounded above there, then $\sup_MA$ lies above a member of $A$ and below an upper bound in $M^\circ$, so it is neither deleted endpoint and belongs to $M^\circ$; hence $M^\circ$ is boundedly complete. This proves every assertion and records the precise use of AC. [A1, step 5.2, step 6.1, step 6.2] ∎
