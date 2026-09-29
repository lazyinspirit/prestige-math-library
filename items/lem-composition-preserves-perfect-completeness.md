---
id: lem-composition-preserves-perfect-completeness
kind: lemma
title: "Composition preserves perfect satisfiability"
status: draft
origin: pipeline
deps:
  - def-composition-with-an-assignment-tester
  - def-robust-codeword-blocks-for-constraint-graphs
  - thm-two-piece-pcp-of-proximity
  - def-constraint-graph-and-labeling-value
  - def-assignment-tester-and-rejection-ratio
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §5, Lemma 1.8 and proof (perfect-completeness direction)"
      url: https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach, §18.5.2, Corollary 18.35 and proof of Lemma 18.30 (completeness direction)"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
---

## Statement

Let $G$ be a finite binary constraint graph over a finite alphabet
$\Sigma$ with $|\Sigma|\ge2$, and let $H=G\circ P$ be the Boolean
arity-six composition defined in
[[def-composition-with-an-assignment-tester]]. For this finite Boolean
constraint system, write
$\operatorname{val}(H)$ for the maximum satisfied fraction, with value one
when the constraint list is empty; equivalently,
$\operatorname{val}(H)=1-\operatorname{UNSAT}(H)$ under the convention of
[[def-assignment-tester-and-rejection-ratio]]. If
$\operatorname{val}(G)=1$, then $\operatorname{val}(H)=1$, including the
edgeless case.

## Facts & Assumptions

**Given:** Fix $G$ and its robust ordered edge circuits, with the local two-piece assignment tester $P$ and composition $H$ fixed as in the definition.

[F1] The graph has finite vertex and edge sets and a finite nonempty alphabet, so its labeling set is finite; its value is the maximum over labelings, and an edgeless graph has value one. ([[def-constraint-graph-and-labeling-value]])

[F2] The code $C$ is injective, so every valid block has a unique decoded label. ([[def-robust-codeword-blocks-for-constraint-graphs]])

[F3] The robust edge circuit accepts exactly when both blocks are valid and their decoded ordered labels satisfy the edge relation; on a loop it tests the diagonal pair. ([[def-robust-codeword-blocks-for-constraint-graphs]])

[F4] The two-piece construction supplies an explicit Boolean assignment tester, of arity at most six, for the combined named list of the two pieces. ([[thm-two-piece-pcp-of-proximity]])

[F5] By perfect completeness of an assignment tester, every accepted named input extends to an auxiliary labeling satisfying every local constraint. ([[def-assignment-tester-and-rejection-ratio]])

[F6] Composition identifies the first and second named pieces coordinatewise with their endpoint blocks, including both pieces of a loop, and gives every other gadget variable a private edge name. ([[def-composition-with-an-assignment-tester]])

[F7] If the original graph is edgeless, the composition has the empty constraint list. ([[def-composition-with-an-assignment-tester]])

[F8] Local gadget labelings that agree on all identifications combine into one output labeling. ([[def-composition-with-an-assignment-tester]])

[F9] Each local constraint is copied uniformly, so an accepted local constraint remains accepted in every copy. ([[def-composition-with-an-assignment-tester]])

[F10] For each labeling, constraint-system value is its satisfied fraction and $\operatorname{UNSAT}_\tau=1-\operatorname{val}_\tau$; the overall unsatisfiability is the minimum over labelings, and the empty list has value one. ([[def-assignment-tester-and-rejection-ratio]])

## Proof

**Given:** Assume $\operatorname{val}(G)=1$.

1.1 If $E(G)=\varnothing$, then $G$ has value one by [F1], while the composition has an empty constraint list by [F7] and therefore $\operatorname{val}(H)=1$ by [F10] and the stated convention. It remains to consider $E(G)\ne\varnothing$. [F1, F7, F10, given, cases]

1.2 Because $G$ has finitely many vertices and $\Sigma$ is finite and nonempty, its set of labelings is finite and nonempty, so the maximum in [F1] is attained. Choose $\sigma:V(G)\to\Sigma$ with $\operatorname{val}_{\sigma}(G)=\operatorname{val}(G)=1$. Since the edge set is nonempty, every edge relation is satisfied by its ordered pair of endpoint labels. [F1, given, algebra, choose]

2.1 For each active vertex $v$, assign its shared block the codeword $B_v=C(\sigma(v))$. By [F2] this is valid and decodes uniquely to $\sigma(v)$. If $e=(v,w)$, then $\sigma$ satisfies its ordered relation, so [F3] says the robust circuit $C_e$ accepts $(B_v,B_w)$. If $e$ is a loop, both pieces are the same block and the satisfied diagonal pair is accepted as well. [F2, F3, step 1.2, construct, algebra]

3.1 For each edge $e$, [F4] supplies the assignment tester on the combined named input list of its two raw pieces. The fixed input $(B_v,B_w)$ is accepted by $C_e$ by step 2.1. Its accepted-input clause in [F5] therefore gives at least one Boolean assignment $b_e$ to the gadget's auxiliary variables satisfying every local constraint. Order that finite variable list as in the explicit tester output and take the lexicographically first such $b_e$. The edge set and each Boolean search space are finite, so this specifies the witnesses without an axiom of choice. [F4, F5, step 2.1, choose, construct]

4.1 Assign each shared vertex block its fixed codeword and assign each edge-private variable its value from $b_e$. By [F6], the named pieces take the already fixed endpoint blocks, including the same block in both positions of a loop; all other variables are private to their edge. These local labelings agree on every identification, so [F8] combines them into an output labeling $\tau$. Every local constraint accepts under its $b_e$, and [F9] preserves acceptance in every uniform copy. Thus every constraint of $H$ accepts under $\tau$. [F6, F8, F9, step 2.1, step 3.1, construct, algebra]

5.1 Every constraint of $H$ is satisfied by $\tau$, so $\operatorname{val}_{\tau}(H)=1$ and $\operatorname{UNSAT}_{\tau}(H)=0$ by [F10]. Hence $\operatorname{UNSAT}(H)=0$, and the stated convention gives $\operatorname{val}(H)=1$. Together with the edgeless case, this proves the claim. [F10, step 1.1, step 4.1, algebra, discharge-construct] ∎

## Remarks

Dinur's proof of Lemma 1.8 extends each satisfied original edge to a satisfying assignment of its local gadget and uses equal gadget sizes to average the local fractions. This lemma is its perfect-completeness direction specialized to a fully satisfiable input graph. The present composition uses the two-piece Boolean tester and the explicit least-common-multiple padding in [[def-composition-with-an-assignment-tester]]. The Arora–Barak proof of Lemma 18.30 makes the same witness extension for each satisfiable qCSP cluster. Both source arguments support the construction pattern; the local tester completeness used here is supplied and proved by [[thm-two-piece-pcp-of-proximity]].
