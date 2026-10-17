---
id: thm-bounded-mixed-integer-gap-certificate-sound
kind: theorem
title: A bounded mixed-integer gap certificate proves global epsilon-optimality
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 8
proof_strategy: direct
deps: [alg-bounded-mixed-integer-branch-and-bound, alg-certified-spatial-branch-and-bound, def-spatial-box-bound-certificate, thm-factorable-dual-certificate-is-valid-box-lower-bound]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §§12 and 17–18"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
    - title: "Thomas Hübner, Akshay Gupte, and Steffen Rebennack, Spatial branch-and-bound for nonconvex separable piecewise linear optimization, §2.1"
      url: "https://optimization-online.org/wp-content/uploads/2024/05/Spatial-branch-and-bound-Piecewise-Linear-IJOC-revisions.pdf"
---

## Statement

Suppose [[alg-bounded-mixed-integer-branch-and-bound]] returns a feasible incumbent with verified upper bound $U$ and a complete ledger of all nonempty terminal mixed nodes, each with lower bound $\ell_N$ valid on every feasible point in that node. Let $L$ be the least ledger bound. If $U-L\le\varepsilon$, then the incumbent $(\hat x,\hat z)$ satisfies
$$f(\hat x,\hat z)-\inf_{(x,z)\in C\cap(X\times Z)}f(x,z)\le\varepsilon.$$
If every terminal node is certified empty, then the mixed feasible set is empty. The conclusion applies both to the branch tree and to the fallback only when every bounded integer assignment has a complete continuous ledger.

## Facts & Assumptions

**Given:** Finite bounded integer box $Z$, continuous box $X$, the mixed-integer algorithm's branch/ledger invariants, valid node lower bounds, feasible incumbent, and tolerance $\varepsilon>0$.

[F1] Integer branching at a median partitions its finite integer interval into disjoint children whose union is the parent; continuous midpoint children cover their parent. [[alg-bounded-mixed-integer-branch-and-bound]]

[F2] A node lower bound from the factorable relaxation is no larger than the infimum over the node's original feasible set. [[thm-factorable-dual-certificate-is-valid-box-lower-bound]]

[F3] In the enumeration fallback, each fixed integer assignment is passed to the continuous spatial algorithm, whose terminal boxes cover that assignment's continuous box unless certified empty. [[alg-certified-spatial-branch-and-bound]]

[F4] Each continuous leaf lower bound is no larger than the infimum of the objective over that leaf's feasible set, and each witness is feasible with objective at most its reported upper bound. [[def-spatial-box-bound-certificate]]

## Proof

1.1 The root node contains every feasible pair in $X\times Z$. Each integer branch preserves the union of the allowed integer values by [F1], and each continuous branch covers its parent box by [F1]. Removing a node only with an emptiness proof cannot remove a feasible pair. Induction on the finite number of expansions shows every feasible pair lies in a nonempty terminal node, or in one of the fixed-$z$ continuous ledgers of the fallback. [given, F1, F3, induction]

2.1 For any feasible pair $(x,z)$ choose its terminal node or fallback leaf as in step 1.1. Its valid lower bound is at most $f(x,z)$ by [F2] for a main-tree node or [F4] for a fixed-$z$ continuous leaf. Since $L$ is the least bound over the complete global ledger, $L\le f(x,z)$ for every feasible pair, hence $L\le f^*$. [step 1.1, F2, F4, algebra]

3.1 The feasible incumbent satisfies $f(\hat x,\hat z)\le U$. The certificate condition then gives $f(\hat x,\hat z)\le U\le L+\varepsilon\le f^*+\varepsilon$, proving the global gap claim. If every terminal node is certified empty, step 1.1 shows no feasible pair exists. [given, step 2.1, algebra] ∎

