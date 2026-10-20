---
id: lem-covered-edge-reversal-preserves-d-separation
kind: lemma
title: "Covered edge reversal preserves d-separation"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-ancestral-moral-graph-of-a-dag
  - lem-d-separation-ancestral-moral-separation
proof_strategy: direct
axiom_use: "The proof is finite and choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Lauritzen, Graphical Models lecture notes, Lemma 2.59"
      url: "https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf"
    - title: "Meek, Causal Inference and Causal Explanation with Background Knowledge, §1.1, Theorem 1"
      url: "https://arxiv.org/pdf/1302.4972"
---

## Statement

Let $G$ be a finite DAG and let $x\to y$ be a covered arrow, meaning
$\operatorname{pa}_G(y)=\operatorname{pa}_G(x)\cup\{x\}$. Replacing $x\to y$
by $y\to x$ gives a DAG $G'$ with exactly the same d-separation relations as
$G$.

## Statement references

[Lauritzen, Lemma 2.59](https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf)

[Meek, §1.1, Theorem 1](https://arxiv.org/pdf/1302.4972)

## Facts & Assumptions

**Given:** A finite DAG $G$, a covered arrow $x\to y$, and $G'$ obtained by reversing that arrow.

[F1] D-separation is equivalent to undirected separation by $S$ in the moral graph induced on the ancestors of the endpoints and $S$. [[lem-d-separation-ancestral-moral-separation]]

[F2] The ancestral moral graph keeps the skeleton on the ancestral set and joins distinct parents of each common child in that set. [[def-ancestral-moral-graph-of-a-dag]]

## Proof

1.1 Put $P=\operatorname{pa}_G(x)$, so $\operatorname{pa}_G(y)=P\cup\{x\}$. If reversing the arrow created a directed cycle, that cycle would use the new arrow $y\to x$, and the remaining part would be a directed path $x\to\cdots\to z\to y$ in $G$ with $z\ne x$. Then $z\in P$, so $z\to x$ is also in $G$, making the directed cycle $x\to\cdots\to z\to x$ in $G$, a contradiction. Thus $G'$ is acyclic. [given, choose, construct]

1.2 The full moral graphs of $G$ and $G'$ coincide. Their skeletons coincide. The only changed parent sets are $\operatorname{pa}_G(x)=P$, $\operatorname{pa}_G(y)=P\cup\{x\}$ and $\operatorname{pa}_{G'}(x)=P\cup\{y\}$, $\operatorname{pa}_{G'}(y)=P$. Any pair newly married at $y$ in $G$ or at $x$ in $G'$ already belongs to the clique on $P\cup\{x,y\}$: pairs involving $x$ or $y$ are skeleton edges, and pairs in $P$ are married at both $x$ and $y$. All other parent sets are unchanged, so the moral edge sets are identical. [given, F2, algebra]

1.3 Fix pairwise disjoint query sets $A,B,S$ and put $T=A\cup B\cup S$. The ancestor sets of $T$ in $G$ and $G'$ differ, if at all, only by $x$ or $y$. Indeed, a directed path whose existence changes must use the reversed edge. A path in $G$ that uses $x\to y$ and starts at $v\ne x$ enters $x$ from some $p\in P$; in $G'$ replace $p\to x\to y$ by the unchanged arrow $p\to y$. Therefore only $x$ can cease to be an ancestor. Symmetrically, a path in $G'$ using $y\to x$ and starting at $v\ne y$ enters $y$ from $p\in P=\operatorname{pa}_{G'}(y)$; in $G$ replace $p\to y\to x$ by $p\to x$. Therefore only $y$ can become an ancestor. If $x$ is lost, $y$ belongs to both ancestor sets; if $y$ is gained, $x$ belongs to both. [given, construct]

2.1 If the ancestor sets are equal, step 1.2 shows the induced ancestral moral graphs are equal. Suppose instead that $x$ is an ancestor only in $G$. Then $x\notin T$ and $y$ is a common ancestor of $T$. In the moral graph induced on $\operatorname{An}_G(T)$, every neighbor of $x$ is in $P\cup\{y\}$: its parents lie in $P$; among its children only $y$ can be ancestral, since any other child has an unchanged arrow from $x$ and would make $x$ an ancestor in $G'$; and a marriage through a child other than $y$ would have the same consequence, while a marriage through $y$ uses another parent in $P$. The vertices in $P\cup\{y\}$ form a clique because they are parents of $y$ in $G$. Hence $x$ is simplicial in the ancestral moral graph. The case that $y$ is gained only in $G'$ is symmetric, with its neighbors contained in the clique $P\cup\{x\}$. [given, F2, step 1.2, step 1.3, construct]

3.1 Removing an unconditioned simplicial vertex does not change separation between $A$ and $B$ after deleting $S$: the vertex is not in $T$, and any path through it can be shortened by replacing its two incident edges with the edge joining its neighbors, which exists because the neighborhood is a clique. Conversely, every path in the smaller graph remains in the larger graph. Thus the two ancestral moral graphs separate $A$ and $B$ by $S$ in exactly the same cases. By [F1], $G$ and $G'$ have the same d-separation relations. [F1, step 2.1, algebra] ∎
