---
id: lem-composition-transfers-rejection-ratio
kind: lemma
title: "Composition transfers a constant fraction of unsatisfaction"
status: draft
origin: pipeline
deps:
  - def-composition-with-an-assignment-tester
  - lem-robust-edge-circuit-has-distance-gap
  - thm-two-piece-pcp-of-proximity
  - def-assignment-tester-and-rejection-ratio
  - def-constraint-graph-and-labeling-value
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §5 proof of Lemma 1.8, printed pp. 17–18"
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach, §18.5.2 Corollary 18.35 and proof of Lemma 18.30, printed pp. 378–379"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Let $G$ be a finite binary constraint graph over a finite ordered alphabet
$\Sigma$ with $|\Sigma|\ge2$, and let $H=G\circ P$ be its Boolean arity-six
composition with the two-piece assignment tester. Put $\delta=1/2$ for the
relative distance of the shared Walsh–Hadamard block code and
$\rho_0=1/1000$ for the local assignment-tester rejection ratio. If
$E(G)\ne\varnothing$, then for every Boolean labeling $\tau$ of $H$, decode
each shared vertex block to its nearest codeword, breaking ties by the fixed
alphabet order, and extend that decoded labeling to isolated vertices by the
first alphabet symbol; call the result $\sigma_\tau$. Then
$$\operatorname{UNSAT}_\tau(H)\ge\frac{\rho_0\delta}{4}\operatorname{UNSAT}_{\sigma_\tau}(G)\ge\frac{\rho_0\delta}{4}\operatorname{UNSAT}(G).$$
Consequently,
$$\operatorname{UNSAT}(H)\ge\frac{\rho_0\delta}{4}\operatorname{UNSAT}(G)=\frac1{8000}\operatorname{UNSAT}(G).$$
If $G$ is edgeless, both unsatisfaction values are zero and the same global
inequality holds. Edge multiplicities are counted as separate edge records.

## Facts & Assumptions

**Given:** Fix the finite graph and its defined composition. For the nonempty-edge case, fix an arbitrary labeling $\tau$ of the output variables.

[F1] For any named input $a$ and auxiliary labeling $b$, an assignment tester of ratio $\rho$ guarantees $\operatorname{UNSAT}_{a\cup b}(P(C,X))\ge\rho\,\delta(a,\operatorname{SAT}(C))$. ([[def-assignment-tester-and-rejection-ratio]])

[F2] The two-piece construction applied to the combined named input list is an explicit Boolean assignment tester with rejection ratio $\rho_0=1/1000$. ([[thm-two-piece-pcp-of-proximity]])

[F3] If the labels decoded from the physical endpoint blocks violate an edge, their formal two-piece input is at relative distance at least $\delta/4=1/8$ from the circuit's accepting set; this holds for loops and for an empty accepting set. ([[lem-robust-edge-circuit-has-distance-gap]])

[F4] Composition shares the two formal named pieces with the endpoint blocks (the same block in both positions of a loop) and gives every remaining gadget variable a private edge name. ([[def-composition-with-an-assignment-tester]])

[F5] For nonempty $E(G)$ and every output labeling, composition's unsatisfaction is the average of the local gadget unsatisfactions after uniform row duplication. ([[def-composition-with-an-assignment-tester]])

[F6] Graph unsatisfaction for a labeling is the fraction of violated ordinary edge records, global $\operatorname{UNSAT}(G)$ is the minimum over labelings, and isolated vertices do not affect value. ([[def-constraint-graph-and-labeling-value]])

[F7] A constraint-system labeling has nonnegative unsatisfaction equal to its violated fraction; global unsatisfaction is the minimum over all labelings and is zero for an empty constraint list. ([[def-assignment-tester-and-rejection-ratio]])

[F8] For an edgeless input, the composition has no variables or constraints. ([[def-composition-with-an-assignment-tester]])

## Proof

**Given:** Use the constants and arbitrary output labeling from the statement.

1.1 If $E(G)=\varnothing$, then $\operatorname{UNSAT}(G)=0$ by [F6]. The composition has an empty constraint list by [F8], so $\operatorname{UNSAT}(H)=0$ by [F7]. The claimed global inequality follows. [F6, F7, F8, given, cases]

1.2 Suppose $E(G)\ne\varnothing$. For each active vertex $v$, let $B_v$ be its physical block under $\tau$ and decode it by the nearest-codeword rule of [F3]. Each vertex has one shared block by [F4], so this gives one label at that vertex for every incident edge, including both formal positions of a loop. Assign the first symbol of $\Sigma$ to any isolated vertex; by [F6] this extension does not change graph unsatisfaction. Denote the resulting global graph labeling by $\sigma_\tau$. [F3, F4, F6, given, construct]

1.3 For each edge $e$, let $\tau_e$ be the pullback of $\tau$ to its local gadget under the composition map. The equal-row construction in [F5] gives $\operatorname{UNSAT}_\tau(H)=\frac1{|E(G)|}\sum_{e\in E(G)}\operatorname{UNSAT}_{\tau_e}(T_e)$. [F5, given, algebra]

2.1 Let $F_\tau$ be the edge records violated by $\sigma_\tau$. For each $e=(v,w)\in F_\tau$, the named input to its local tester is the formal pair $(B_v,B_w)$, with $(B_v,B_v)$ for a loop. By [F3] this input is at relative distance at least $\delta/4$ from the edge circuit's accepting set. By [F2] and [F4], the local gadget is the assignment tester for that circuit on both named pieces; applying [F1] to the pullback labeling $\tau_e$ therefore gives $\operatorname{UNSAT}_{\tau_e}(T_e)\ge\rho_0\delta/4$. For an edge outside $F_\tau$, its local unsatisfaction is at least zero by [F7]. [F1, F2, F3, F4, F7, step 1.2, step 1.3, construct, algebra]

3.1 Combine the identity of step 1.3 with the local bounds of step 2.1. Since $|F_\tau|/|E(G)|=\operatorname{UNSAT}_{\sigma_\tau}(G)$ by [F6], and $\operatorname{UNSAT}(G)$ is the minimum over graph labelings, it follows that $\operatorname{UNSAT}_\tau(H)\ge\frac{\rho_0\delta}{4}\frac{|F_\tau|}{|E(G)|}=\frac{\rho_0\delta}{4}\operatorname{UNSAT}_{\sigma_\tau}(G)\ge\frac{\rho_0\delta}{4}\operatorname{UNSAT}(G)$. [F6, step 1.3, step 2.1, algebra]

4.1 Step 3.1 holds for every Boolean labeling $\tau$ of the finite output system. Taking the minimum over those labelings gives the asserted inequality for $\operatorname{UNSAT}(H)$. The edgeless case was handled in step 1.1, and $\rho_0\delta/4=(1/1000)(1/2)/4=1/8000$. [F7, step 1.1, step 3.1, algebra, discharge-construct] ∎

## Remarks

Dinur's proof of Lemma 1.8 decodes each shared block to a closest old-alphabet
symbol, uses assignment-tester soundness on every edge whose decoded relation
fails, and averages the local violations using equal gadget sizes. The present
composition makes those sizes equal by LCM duplication and uses the proved
distance bound $\delta/4$ for its shared Walsh–Hadamard blocks. Arora–Barak's
proof of Lemma 18.30 uses the same decoded-label and per-cluster soundness
pattern. The exact local ratio and robust-distance claim used here are the
completed suppliers cited above; neither source is treated as a substitute for
those local proofs.
