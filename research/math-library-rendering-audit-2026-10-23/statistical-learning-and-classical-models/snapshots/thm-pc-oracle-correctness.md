---
id: thm-pc-oracle-correctness
kind: theorem
title: "The PC algorithm recovers the oracle CPDAG"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-causal-discovery-oracle-regime
  - def-cpdag-markov-equivalence-class
  - alg-pc-causal-discovery
  - lem-pc-skeleton-separation
  - lem-pc-separating-set-collider
  - lem-meek-rules-complete-for-cpdag
  - thm-dag-factorization-implies-d-separation-conditional-independence
  - def-faithfulness-of-a-dag-model
  - def-axiom-of-choice
  - def-d-separation-in-a-dag
proof_strategy: direct
axiom_use: "AC enters only through the supplied probability interfaces for global Markovness and conditional independence. The finite graph search and orientation proof use no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, §§2.1.1 and 2.3"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
    - title: "Meek, Causal Inference and Causal Explanation with Background Knowledge, §§1.3–2.3"
      url: "https://arxiv.org/pdf/1302.4972"
    - title: "Lauritzen, Graphical Models lecture notes, §2.6"
      url: "https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf"
---

## Statement

Assume AC and the causally sufficient perfect-oracle discovery regime for a
finite observed DAG $G$ and its full-joint law. The population PC algorithm
with any fixed vertex order terminates and returns exactly the skeleton of $G$
and records a d-separating set for every deleted pair. At its
collider-orientation stage it orients exactly the unshielded colliders of $G$;
after R1–R3 closure it returns the CPDAG for the Markov-equivalence class of
$G$.

## Statement references

[Kalisch and Bühlmann, §§2.1.1 and 2.3](https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf)

[Meek, §§1.3–2.3](https://arxiv.org/pdf/1302.4972)

[Lauritzen, §2.6](https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf)

## Facts & Assumptions

**Given:** AC, a finite observed DAG and law in the discovery regime, and a fixed-order perfect conditional-independence oracle.

[F1] The discovery regime supplies a finite observed DAG, full-joint parent-kernel factorization, faithfulness, and the exact conditional-independence oracle; AC is assumed. [[def-causal-discovery-oracle-regime]]

[F2] Under AC, a finite topological probability-kernel factorization implies the global Markov property: d-separation implies conditional independence. [[thm-dag-factorization-implies-d-separation-conditional-independence]]

[F3] Faithfulness gives the converse: conditional independence implies d-separation. [[def-faithfulness-of-a-dag-model]]

[F4] A pair is adjacent in a finite DAG exactly when no conditioning set d-separates it. [[lem-pc-skeleton-separation]]

[F5] A separating set for an unshielded triple's endpoints omits the middle vertex exactly when that triple is a collider. [[lem-pc-separating-set-collider]]

[F6] The population PC algorithm searches levels in order, stores the first separating set, then orients unshielded colliders and closes under R1–R3. [[alg-pc-causal-discovery]]

[F7] The initialized collider pattern closed under R1–R3 is the CPDAG of the DAG's Markov-equivalence class. [[lem-meek-rules-complete-for-cpdag]]

[F8] A path is active given $S$ when every internal noncollider is outside $S$ and every collider has a descendant in $S$, including itself. [[def-d-separation-in-a-dag]]

[A1] AC is required by the supplied probability interfaces in [F1] and [F2]; no graph-theoretic step uses it. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F2], every d-separation in $G$ is a conditional independence in its law. By [F3], every conditional independence is a d-separation. Since the oracle is exact by [F1], it answers “independent” exactly for d-separated pairs and sets. [given, F1, F2, F3, A1]

1.2 The skeleton search terminates. If $|V|\le1$, it has no pairs to test and stops at level $0$. Otherwise, at each level it processes finitely many pairs and finitely many subsets. An endpoint has at most $|V|-2$ neighbors other than the other endpoint, so at level $\ell=|V|-2$ no remaining edge can meet the condition requiring at least $\ell+1$ such neighbors; the level therefore cannot be incremented past this finite bound. The orientation phase scans finitely many rule instances on the finite vertex set. Every successful application directs one previously undirected edge, which is never undirected again, so there are at most $\binom{|V|}{2}$ successful applications before a scan finds none. Both phases, and hence the algorithm, terminate. [F6, construct]

1.3 For a nonadjacent pair, acyclicity permits labeling its endpoints $i,j$ so that $j$ is not a descendant of $i$. Put $S=\operatorname{pa}_G(i)$, which excludes both endpoints. Every path starting with an arrow into $i$ is blocked by its first internal vertex, a parent in $S$ and a noncollider. On any path starting with an arrow out of $i$, there must be a first reversal of arrow direction, since $j$ is not a descendant of $i$. The vertex at that reversal is a collider reached by a directed path from $i$. It cannot have a descendant in $S$, since a directed path from that collider to a parent of $i$ would close a directed cycle through $i$. This path is also blocked by [F8]. Thus $S$ d-separates the endpoints. [given, F8, construct, cases]

2.1 Every true skeleton edge remains in the search graph: by [F4] no allowed conditioning set d-separates its endpoints, so step 1.1 makes every oracle answer dependent. For a nonedge, step 1.3 supplies $S=\operatorname{pa}_G(i)$ after possibly interchanging endpoints. Every vertex of $S$ remains adjacent to $i$, since all true edges remain. At each level $\ell<|S|$ while this nonedge remains, endpoint $i$ has at least $|S|\ge\ell+1$ other neighbors. The stopping condition therefore cannot stop before level $|S|$. If the nonedge has not already been deleted, at that level the search either deletes it on an earlier separating set or tests $S$ and deletes it. Thus the returned skeleton is exactly the skeleton of $G$. [F4, F6, step 1.1, step 1.3, cases]

3.1 Every set recorded when an edge is deleted was accepted by the exact oracle. By step 1.1 it d-separates the deleted endpoints. Since the skeleton from step 2.1 is exact, each unshielded triple is an unshielded triple of $G$; [F5] shows the algorithm orients its middle vertex as a collider exactly when it is a collider in $G$. [F5, F6, step 1.1, step 2.1]

4.1 The algorithm then applies R1–R3 to closure. Its pattern has the exact skeleton and exactly the unshielded colliders of $G$ by steps 2.1–3.1. Applying [F7] gives the CPDAG of $G$. By step 1.2 the finite procedure terminates, so this is the algorithm's output. [F6, F7, step 1.2, step 2.1, step 3.1] ∎
