---
id: thm-pc-oracle-correctness
kind: theorem
title: "The PC algorithm recovers the oracle CPDAG"
status: draft
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
proof_strategy: direct
axiom_use: "AC enters only through the supplied probability interfaces for global Markovness and conditional independence. The finite graph search and orientation proof use no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, §§2.2.1 and 2.3"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
    - title: "Meek, Causal Inference and Causal Explanation with Background Knowledge, §§2.1–2.3"
      url: "https://arxiv.org/pdf/1302.4972"
    - title: "Lauritzen, Graphical Models lecture notes, §2.6"
      url: "https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf"
---

## Statement

Assume AC and the causally sufficient perfect-oracle discovery regime for a
finite observed DAG $G$ and its full-joint law. The population PC algorithm
with any fixed vertex order terminates and returns exactly the skeleton of $G$,
records a d-separating set for every deleted pair, orients exactly the
unshielded colliders of $G$, and returns the CPDAG for the Markov-equivalence
class of $G$.

## Statement references

[Kalisch and Bühlmann, §§2.2.1 and 2.3](https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf)

[Meek, §§2.1–2.3](https://arxiv.org/pdf/1302.4972)

[Lauritzen, §2.6](https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf)

## Facts & Assumptions

**Given:** AC, a finite observed DAG and law in the discovery regime, and a fixed-order perfect conditional-independence oracle.

[F1] The discovery regime supplies a finite observed DAG, full-joint parent-kernel factorization, faithfulness, and the exact conditional-independence oracle; AC is assumed. [[def-causal-discovery-oracle-regime]]

[F2] Under AC, a finite topological probability-kernel factorization implies the global Markov property: d-separation implies conditional independence. [[thm-dag-factorization-implies-d-separation-conditional-independence]]

[F3] Faithfulness gives the converse: conditional independence implies d-separation. [[def-faithfulness-of-a-dag-model]]

[F4] A pair is adjacent in a finite DAG exactly when no conditioning set d-separates it; a nonedge has a separating set among the parents of one endpoint. [[lem-pc-skeleton-separation]]

[F5] A separating set for an unshielded triple's endpoints omits the middle vertex exactly when that triple is a collider. [[lem-pc-separating-set-collider]]

[F6] The population PC algorithm searches levels in order, stores the first separating set, then orients unshielded colliders and closes under R1–R3. [[alg-pc-causal-discovery]]

[F7] The initialized collider pattern closed under R1–R3 is the CPDAG of the DAG's Markov-equivalence class. [[lem-meek-rules-complete-for-cpdag]]

[A1] AC is required by the supplied probability interfaces in [F1] and [F2]; no graph-theoretic step uses it. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F2], every d-separation in $G$ is a conditional independence in its law. By [F3], every conditional independence is a d-separation. Since the oracle is exact by [F1], it answers “independent” exactly for d-separated pairs and sets. [given, F1, F2, F3, A1]

1.2 The skeleton search terminates. If $|V|\le1$, it has no pairs to test and stops at level $0$. Otherwise, at each level it processes finitely many pairs and finitely many subsets. An endpoint has at most $|V|-2$ neighbors other than the other endpoint, so at level $\ell=|V|-2$ no remaining edge can meet the condition requiring at least $\ell+1$ such neighbors; the level therefore cannot be incremented past this finite bound. The orientation phase scans finitely many rule instances on the finite vertex set. Every successful application directs one previously undirected edge, which is never undirected again, so there are at most $\binom{|V|}{2}$ successful applications before a scan finds none. Both phases, and hence the algorithm, terminate. [F6, construct]

2.1 Every true skeleton edge $i-j$ remains in the search graph: its one-edge path is active given every allowed conditioning set, so by [F1] and [F2] no oracle test deletes it. For a nonedge $i-j$, [F4] gives a separating set $S=\operatorname{pa}(i)$ or $\operatorname{pa}(j)$ that excludes the endpoints. Every vertex in that parent set remains adjacent to the chosen endpoint because all true edges remain. At any level $\ell<|S|$ while $i-j$ remains, that endpoint has at least $|S|\ge\ell+1$ other neighbors. The stopping condition therefore cannot stop before level $|S|$, and at that level the algorithm tests $S$ and deletes $i-j$. Thus the returned skeleton is exactly the skeleton of $G$. [F1, F2, F4, F6, step 1.1, cases]

3.1 Every set recorded when an edge is deleted was accepted by the exact oracle. By step 1.1 it d-separates the deleted endpoints. Since the skeleton from step 2.1 is exact, each unshielded triple is an unshielded triple of $G$; [F5] shows the algorithm orients its middle vertex as a collider exactly when it is a collider in $G$. [F5, F6, step 1.1, step 2.1]

4.1 The algorithm then applies R1–R3 to closure. Its pattern has the exact skeleton and exactly the unshielded colliders of $G$ by steps 2.1–3.1. Applying [F7] gives the CPDAG of $G$. By step 1.2 the finite procedure terminates, so this is the algorithm's output. [F6, F7, step 1.2, step 2.1, step 3.1] ∎
