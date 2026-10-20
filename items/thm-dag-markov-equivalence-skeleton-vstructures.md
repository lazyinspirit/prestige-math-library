---
id: thm-dag-markov-equivalence-skeleton-vstructures
kind: theorem
title: "DAG Markov equivalence is determined by skeletons and unshielded colliders"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-cpdag-markov-equivalence-class
  - lem-pc-skeleton-separation
  - lem-covered-edge-reversal-preserves-d-separation
proof_strategy: direct
axiom_use: "The proof uses only finite graph arguments and no choice axiom."
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
    - title: "Meek, Causal Inference and Causal Explanation with Background Knowledge, Theorem 1"
      url: "https://arxiv.org/pdf/1302.4972"
    - title: "Lauritzen, Graphical Models lecture notes, Theorem 2.62 and Lemmas 2.57–2.61"
      url: "https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf"
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, §2.1"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
---

## Statement

Two finite DAGs on the same vertex set are Markov equivalent, meaning that they
induce the same d-separation relations, if and only if they have the same
skeleton and the same unshielded colliders.

## Statement references

[Meek, Theorem 1](https://arxiv.org/pdf/1302.4972)

[Lauritzen, Theorem 2.62](https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf)

[Kalisch and Bühlmann, §2.1](https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf)

## Facts & Assumptions

**Given:** Finite DAGs $G_1,G_2$ on the same vertex set.

[F1] Markov equivalence means equality of the induced d-separation relations; skeleton and unshielded-collider conventions are fixed. [[def-cpdag-markov-equivalence-class]]

[F2] Two distinct vertices are nonadjacent exactly when some conditioning set d-separates them. [[lem-pc-skeleton-separation]]

[F3] Reversing a covered arrow in a finite DAG preserves acyclicity and every d-separation relation. [[lem-covered-edge-reversal-preserves-d-separation]]

## Proof

**Given:** $G_1,G_2$ have the hypotheses in the Statement.

1.1 First assume that $G_1,G_2$ have the same skeleton and the same unshielded colliders. A finite DAG has a topological order: if every remaining vertex had an incoming arrow, following incoming arrows in the finite graph would repeat a vertex and create a directed cycle; remove a source and repeat. Fix such an order $\prec$ for $G_1$. If the DAGs differ, choose the $\prec$-earliest vertex $\beta$ with $\operatorname{pa}_{G_1}(\beta)\setminus\operatorname{pa}_{G_2}(\beta)\ne\varnothing$, and choose the $\prec$-latest $\alpha$ in that difference. Then $\alpha\to\beta$ occurs in $G_1$ and $\beta\to\alpha$ in $G_2$. [given, F1, construct, choose]

1.2 Conversely, assume $G_1,G_2$ are Markov equivalent. If their skeletons differed, [F2] would give a pair separated in one graph but not the other. Thus their skeletons agree. If an unshielded collider $i\to k\leftarrow j$ occurred in $G_1$ but not in $G_2$, then $i,j$ are nonadjacent in both. By [F2] choose $S$ that d-separates $i,j$ in $G_1$. The path $i\to k\leftarrow j$ shows that no descendant of $k$, including $k$, can lie in $S$, because otherwise that path would be active. In $G_2$, the same unshielded triple has a noncollider at $k$; since $k\notin S$, the two-edge path is active, so $S$ does not d-separate $i,j$ there. This contradicts Markov equivalence. Interchanging $G_1,G_2$ rules out a collider present only in $G_2$. [F1, F2, construct, choose]

2.1 Let $\gamma\ne\alpha$ be another parent of $\beta$ in $G_1$. If $\gamma$ were not a parent of $\alpha$, then either $\gamma$ and $\alpha$ would be nonadjacent, making $\alpha\to\beta\leftarrow\gamma$ an unshielded collider absent from $G_2$, or they would be adjacent with $\alpha\to\gamma$ in $G_1$. The first case contradicts equality of colliders; in the second case, $G_2$ cannot retain both $\alpha\to\gamma$ and $\gamma\to\beta$, because together with $\beta\to\alpha$ they form a directed cycle. If $\alpha\to\gamma$ is reversed in $G_2$, then $\gamma\prec\beta$ is an earlier vertex with a differing parent; if $\gamma\to\beta$ is reversed, then $\gamma$ is a later member than $\alpha$ of $\operatorname{pa}_{G_1}(\beta)\setminus\operatorname{pa}_{G_2}(\beta)$. Both contradict the choices in step 1.1. Hence every parent of $\beta$ other than $\alpha$ is a parent of $\alpha$. [F1, step 1.1, construct]

3.1 To prove $\operatorname{pa}_{G_1}(\alpha)\subseteq\operatorname{pa}_{G_1}(\beta)$, suppose instead that $\gamma\to\alpha$ in $G_1$ but $\gamma\notin\operatorname{pa}_{G_1}(\beta)$. Minimality of $\beta$ implies $\gamma\to\alpha$ is also present in $G_2$; otherwise the earlier vertex $\alpha$ would already have a differing parent. If $\gamma$ were not adjacent to $\beta$, then $G_2$ would contain the unshielded collider $\beta\to\alpha\leftarrow\gamma$, while $G_1$ has the noncollider chain $\gamma\to\alpha\to\beta$, contradicting equality of colliders. Thus $\gamma$ is adjacent to $\beta$. In $G_1$ it must be oriented $\gamma\to\beta$, since $\beta\to\gamma$ would make a directed cycle with $\gamma\to\alpha\to\beta$. This contradicts the assumption that $\gamma$ is not a parent of $\beta$. Therefore the inclusion holds. Together with step 2.1, $\operatorname{pa}_{G_1}(\beta)=\operatorname{pa}_{G_1}(\alpha)\cup\{\alpha\}$, so $\alpha\to\beta$ is covered. [F1, step 1.1, step 2.1, construct, contradiction]

4.1 Reverse this covered arrow in $G_1$. By [F3] the result remains a DAG and is Markov equivalent to $G_1$. It has the same skeleton, and it has the same unshielded colliders: an edge in an unshielded collider cannot be covered, because the other parent of the collider would then also be a parent of the edge's tail and hence adjacent to it. Exactly one edge now agrees with $G_2$, so the finite number of edge-orientation disagreements decreases by one. If any disagreement remains, choose the earliest differing parent set again; the argument in steps 1.1–3.1 applies because the skeleton and collider set are unchanged. Thus finitely many covered reversals transform $G_1$ into $G_2$, and each reversal preserves d-separation. [F3, step 1.1, step 3.1, construct]

5.1 The two directions prove the equivalence. [step 4.1, step 1.2, algebra] ∎
