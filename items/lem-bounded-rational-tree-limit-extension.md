---
id: lem-bounded-rational-tree-limit-extension
kind: lemma
title: "Rational bounds at countable limit levels"
status: draft
origin: pipeline
deps: [def-normal-splitting-set-theoretic-tree, lem-tree-predecessors-and-common-extensions, thm-rationals-countable, thm-product-of-countable, thm-rat-ordered-field, thm-recursion]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Karagila, Axiomatic Set Theory, Theorem 9.2 proof, printed p43 (rational-label adaptation and distinct-branch repair)"
      url: https://karagila.org/files/set-theory-2017.pdf
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
justified_by: []
forward_refs: []
---

## Statement

Let $T$ be a countable tree of nonzero countable limit height $\delta$, with a labeling $\ell:T\to\mathbb Q$ strictly increasing on strict tree order. Assume:

- For every $x\in T$, every $\operatorname{ht}(x)<\beta<\delta$, and every rational $r>\ell(x)$, there is $y\in T_\beta$ with $x<_Ty$ and $\ell(y)<r$.
- For every $x\in T$ and rational $r>\ell(x)$, infinitely many immediate successors of $x$ have label less than $r$.

One can add a countable level at $\delta$ and extend $\ell$ so that it is still strictly increasing and the first invariant holds also for $\beta=\delta$. Distinct new tops have distinct predecessor branches. Thus if the original tree is normal, the extension is normal; it also retains the small-successor condition wherever a successor level exists. This construction works in ZF.

## Facts & Assumptions

**Given:** $T,\delta,\ell$ and the two displayed invariants.

[F1] The rationals are countably infinite. [[thm-rationals-countable]]

[F2] A product of two at most countable sets is at most countable. [[thm-product-of-countable]]

[F3] The rationals form a totally ordered field. [[thm-rat-ordered-field]]

[F4] Recursion on natural numbers defines a sequence from a specified state transition. [[thm-recursion]]

[F5] Every smaller height has a unique predecessor, common predecessors are comparable, and strict order increases height. [[lem-tree-predecessors-and-common-extensions]]

[F6] Normality includes unique root, extension to higher levels and distinct predecessor sets at nonzero limit levels. [[def-normal-splitting-set-theoretic-tree]]

## Proof

1.1 Fix enumerations of $T$ and $\delta$. From an enumeration $d:\omega\to\delta$, define $\gamma_0=d(0)$ and $\gamma_{k+1}=\max\{\gamma_k+1,d(k+1)\}$. All terms lie below the limit $\delta$ and $\gamma_k\ge d(k)$, so the sequence is cofinal. By F1 and F2, $T\times\mathbb Q$ has an enumeration. Keep precisely the entries $(x,r)$ with $\ell(x)<r$ to enumerate all requests as $(x_n,r_n)$. There are infinitely many entries to keep, since for one fixed $x$ the distinct rationals $\ell(x)+m+1$ give requests for all natural $m$. Retaining successive least valid indices is recursion, not countable choice. [F1, F2, F3, F4, given]

2.1 Suppose branches $b_0,\ldots,b_{n-1}$ for the earlier requests have been defined. Set $q_n=(\ell(x_n)+r_n)/2$, so $\ell(x_n)<q_n<r_n$. Infinitely many immediate successors of $x_n$ have labels below $q_n$. Each earlier branch contains at most one of them, since distinct immediate successors are incomparable by F5. Thus finitely many earlier branches exclude at most finitely many candidates. Choose the least enumerated remaining successor $z_0$; it has label below $q_n$ and belongs to none of the earlier branches. [F3, F5, step 1.1, given]

3.1 Recursively, with $z_k$ already defined, put $\eta_k=\max\{\gamma_k,\operatorname{ht}(z_k)+1\}<\delta$. The first invariant gives an extension $z_{k+1}$ of height $\eta_k$ and label below $q_n$, since $\ell(z_k)<q_n$. Take the least enumerated such extension. This defines a strictly increasing chain whose heights are cofinal and whose labels are all less than $q_n$. Recursion uses the state $(k,z_k)$, and the successor bound stays below $\delta$ because it is limit. [F4, step 1.1, step 2.1, given]

4.1 Let $b_n=\{s:\exists k\ s\le_Tz_k\}$. Common-predecessor comparability makes this a chain; its cofinality and unique predecessors give exactly one node of each height below $\delta$. A node comparable with all of $b_n$ lies below some $z_k$ of greater height and hence belongs to $b_n$, so it is a maximal chain. Every label on $b_n$ is less than $q_n$: for $s\le_Tz_k$, strict increase gives $\ell(s)\le\ell(z_k)<q_n$. It contains $x_n$ and $z_0$, and $z_0$ belongs to no earlier branch, so $b_n$ differs from all of them. This construction determines $b_n$ uniquely from the finite list of previous branches; recursion on finite lists therefore produces all $b_n$ simultaneously. [F4, F5, step 2.1, step 3.1]

5.1 Adjoin a distinct top $v_n$ above precisely $b_n$, with label $q_n$. Formally use the disjoint union of a tagged copy of $T$ and a tagged copy of $\omega$, ordered by the old order and $s<v_n$ iff $s\in b_n$. A branch is downward closed, so this order is transitive. The predecessor set of $v_n$ is ordered like $\delta$ by height, proving that these are exactly a new level at $\delta$. Their predecessor sets are distinct by step 4.1. The new tree is countable by interleaving its old enumeration with $n\mapsto v_n$. Strict increase holds on new comparisons because $\ell(s)<q_n=\ell(v_n)$ for $s\in b_n$; there are no comparisons between new tops. [F5, step 1.1, step 4.1]

6.1 For any old $x$ and rational $r>\ell(x)$, its request occurs at some $n$. Then $x<_Tv_n$ and $\ell(v_n)=q_n<r$, proving the invariant at the new level. Earlier instances are unchanged and new tops have no higher level to check. If the old tree is normal, its root and old limit-level uniqueness persist, the request argument supplies extensions to the new level, and step 5.1 supplies new limit-level uniqueness. No immediate successors of old nodes are lost or changed, since their successor heights are strictly below $\delta$; new tops have no successor requirement. Every selection used least indices after finitely many fixed enumerations. [F6, step 2.1, step 4.1, step 5.1] ∎
