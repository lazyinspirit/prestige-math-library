---
id: lem-well-founded-borel-code-evaluation
kind: lemma
title: "Existence and uniqueness of Borel-code evaluation"
status: draft
origin: pipeline
deps: ["def-well-founded-borel-evaluation-codes", "thm-recursion-on-well-founded-setlike-relations", "thm-induction-on-well-founded-relations", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definitions 7.1–7.2 and Exercise 7.3, printed pp62–63; full local recursion proof supplies the exercise"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZF, each valid code $T$ for a space $X$ with enumerated basis $(U_n)$ has a unique evaluation $E:T\to\mathcal P(X)$ satisfying

$$E(s)=U_n\text{ at leaf}(n),\qquad E(s)=X\setminus E(s^\frown0)\text{ at a complement},\qquad E(s)=\bigcup_{s^\frown k\in T}E(s^\frown k)\text{ at a union}.$$

Every value, in particular the root value, is Borel. Assuming AC in addition, every Borel subset of $X$ is the root value of some code. The first assertions do not use AC.

## Facts & Assumptions

[F1] Valid codes have a nonempty tree and a well-founded immediate-child relation; see [[def-well-founded-borel-evaluation-codes]].

[F2] A total definable recursion rule on a well-founded setlike relation has a unique solution; see [[thm-recursion-on-well-founded-setlike-relations]].

[F3] A progressive property holds everywhere on such a relation; see [[thm-induction-on-well-founded-relations]].

[A1] Only for the converse, assume [[def-axiom-of-choice]] to select codes for a sequence of already codable sets.

## Proof

**Given:** A code $T$ satisfying F1, its fixed space $X$, and the enumerated basis.

1.1 On any function $h$ on the children of $s$, replace values not in $\mathcal P(X)$ by $\varnothing$, then apply the operation specified by the label at $s$. This is a definable, single-valued, total rule returning a subset of $X$. The child relation is well-founded by F1 and setlike because $T$ is a set. F2 therefore supplies a set function $E$ on $T$ satisfying the rule. Every value is a subset of $X$, so no replacement of an actual value occurs, and the displayed equations hold. [F1, F2]

2.1 If $E'$ is another evaluation agreeing with $E$ at the children of $s$, the relevant union, complement, or fixed leaf value is identical, so $E'(s)=E(s)$. This property is progressive, and F3 proves equality at all nodes. For Borelness, leaves are basis opens, a complement of a Borel set is Borel, and a union node uses the sequence indexed by $k\in\mathbb N$, filling absent children by $\varnothing$. Borelness is therefore progressive too; F3 proves it at every node. [F1, F3, step 1.1]

2.2 Let $\mathcal H$ be the set of root values of valid codes. A single leaf codes each $U_n$. For any open $V$, give a union root one child $(n)$ labelled leaf$(n)$ for each $n$ such that $U_n\subseteq V$. Its evaluation is $\bigcup\{U_n:U_n\subseteq V\}=V$ by the basis property. This includes $V=\varnothing$ and an empty union. The tree has height at most one and hence is well-founded: a nonempty subset containing a child has that child minimal; otherwise its root is minimal. [F1, step 1.1]

2.3 From a code $(T,l)$ for $B$, form $T'=\{\varnothing\}\cup\{(0)^\frown s:s\in T\}$, put a complement label at its root and copy all other labels. It codes $X\setminus B$. For a sequence $(B_n)$ in $\mathcal H$, the sets of codes for the respective $B_n$ are nonempty subsets of the one set of all labelled trees. A1 selects $(T_n,l_n)$ for all $n$. The tree $T''=\{\varnothing\}\cup\{(n)^\frown s:n\in\mathbb N,\ s\in T_n\}$, with union root and inherited labels, codes $\bigcup_n B_n$. [A1, F1, step 1.1]

3.1 Both graftings in step 2.3 are well-founded. Given a nonempty subset meeting a tagged constituent subtree, take a minimal element of its intersection with that one subtree. Every child of that element is still in that subtree, so it is minimal in the whole subset. If no constituent subtree is met, the subset consists of the root. Thus the graftings are valid codes. By steps 2.2–2.3, $\mathcal H$ contains all opens and is closed under complement and countable union; it therefore contains $\mathcal B(X)$. Step 2.1 gives the reverse inclusion. This proves the converse under AC and completes the claims, including $X=\varnothing$. QED. [F1, step 2.1, step 2.2, step 2.3]
