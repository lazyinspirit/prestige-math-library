---
id: lem-countable-tree-ranks-and-rank-monotonicity
kind: lemma
title: "Countable tree ranks and monotonicity under extension maps"
status: published
origin: pipeline
deps: ["def-descriptive-tree-rank", "thm-countable-subsets-of-omega-one-are-bounded", "thm-induction-on-well-founded-relations", "thm-transfinite-induction", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Lemma 5.8, Exercise 5.9(b) and forward direction of Lemma 5.11, printed pp44–45"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC a tree on a countable alphabet is well-founded if and only if it has no infinite branch; every well-founded such tree has rank below $\omega_1$. If $f:S\to T$ between nonempty well-founded trees preserves proper extensions, then $r_S(s)\leq r_T(f(s))$ for every node s. For every $\alpha<\omega_1$ there is a nonempty tree on $\mathbb N$ of root rank $\alpha$.

## Facts & Assumptions

[F1] [[def-descriptive-tree-rank]] specifies the child relation and ordinal rank equation.

[F2] [[thm-countable-subsets-of-omega-one-are-bounded]] bounds countable families of countable ordinals under countable choice.

[F3] [[thm-induction-on-well-founded-relations]] permits induction over a well-founded relation.

[F4] [[thm-transfinite-induction]] permits induction over ordinals.

[A1] Assume [[def-axiom-of-choice]], including countable choice.

## Proof

**Given:** Trees on a countable alphabet, coded injectively into $\mathbb N$ when necessary.

1.1 A branch provides the set of all its prefixes, every member of which has a child in that set; hence the child relation is not well-founded. Conversely, if well-foundedness fails, take a nonempty set D of nodes with no child-minimal member. Starting with one node in D, recursively choose its least-coded child in D. Such a child exists by the defining failure of minimality. Their union, together with the initial node's prefixes in the tree, is an infinite branch. This proves both implications, also for an empty tree, whose relation is vacuously well-founded and whose body is empty. [F1]

1.2 Induct over the well-founded child relation by F3. If all child ranks are countable, their successors are countable ordinals. There are at most countably many children; pad the sequence by zero at unused alphabet codes. F2, licensed by A1, bounds the supremum of these successor ranks below $\omega_1$. By F1 this supremum is the parent rank. Leaf ranks are the empty supremum zero, so the induction proves all node ranks countable, including the root; the empty-tree rank is zero by F1. [F1, F2, F3, A1]

1.3 For an extension-preserving f, induct on the source child relation by F3. For each child u of s, induction gives $r_S(u)\leq r_T(f(u))$. Since f(u) properly extends f(s), a finite chain of target child steps and F1 gives $r_T(f(u))<r_T(f(s))$. Thus $r_S(u)+1\leq r_T(f(s))$. Taking the supremum over all children proves $r_S(s)\leq r_T(f(s))$, including a leaf whose rank is zero. [F1, F3]

2.1 Fix $\alpha<\omega_1$ and an injection $c:\alpha\to\mathbb N$. Let T consist of the root and the coordinatewise c-codes of finite strictly decreasing sequences of ordinals below $\alpha$. It is a tree. It has no infinite branch, since an infinite descending ordinal sequence would have a least value followed by a smaller value; hence it is well-founded by step 1.1. By F4, every node ending at $\beta$ has rank $\beta$: its children end at exactly $\gamma<\beta$, whose ranks by induction are $\gamma$, and $\sup_{\gamma<\beta}(\gamma+1)=\beta$. The same formula at the root gives rank $\alpha$. For $\alpha=0$ the tree is root-only and the supremum is zero. QED. [F1, F4, step 1.1]
