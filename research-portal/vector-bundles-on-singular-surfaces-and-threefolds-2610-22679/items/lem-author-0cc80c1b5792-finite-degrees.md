---
id: lem-author-0cc80c1b5792-finite-degrees
kind: lemma
title: Degreewise boundedness and finite collections of eventual vanishings
status: published
domain: mathematics
deps:
  - lem-adjudicate-5eb16844831b-empty-motivic-stages
  - math:def-axiom-of-choice
  - def-valuative-dimension-and-boundedness
  - def-motivic-filtration
  - lem-author-0cc80c1b5792-threshold
dependency_roles:
  lem-adjudicate-5eb16844831b-empty-motivic-stages: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-valuative-dimension-and-boundedness: mathematical-premise
  def-motivic-filtration: mathematical-premise
  lem-author-0cc80c1b5792-threshold: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 15
---

## Statement
Assume the Axiom of Choice. The actual motivic filtration of every finite-dimensional Noetherian equicharacteristic scheme is degreewise bounded above in filtration on all integer homotopy degrees. For any finite set $S\subseteq\mathbb Z$ and any anchor $t$, one may choose a common sufficiently large $\ell$ making every $\pi_qF^{t+\ell}$ with $q\in S$ zero. The same holds for their image subgroups in $K_q(X)$. No threshold independent of an unbounded set of degrees is asserted.

## Facts & Assumptions
**Given:** The Axiom of Choice and the general source filtration or its actual standing-field restriction.

**Goal:** Express the stagewise result in the completed local boundedness language and in the form used by finite exact-sequence arguments.

[F1] For nonempty $X$, [[lem-author-0cc80c1b5792-threshold]] supplies an actual zero-group threshold for each fixed degree and anchor.

[F2] [[def-valuative-dimension-and-boundedness]] defines degreewise boundedness; [[def-motivic-filtration]] defines the image subgroups.

[F3] The assumed [[math:def-axiom-of-choice]] discharges the inherited Choice premises of the threshold supplier in [F1] and the selected filtration in [F2]. The finite maximum in the proof introduces no stronger choice assumption.

[F4] [[lem-adjudicate-5eb16844831b-empty-motivic-stages]] proves that every actual stage on the empty scheme is zero, independently of any dimension convention.

## Proof
1.1 If $X$ is empty, [F4] gives all stage and image vanishings, with threshold zero for any anchor. Suppose henceforth that $X$ is nonempty. Under the inherited Choice premise in [F3], take anchor $t=0$ in [F1]. For every fixed $q$, all stages beyond $\ell_0(q,0)$ have zero $\pi_q$. These are exactly the quantifiers in [F2]. If a stage group is zero, its image under the augmentation to $K_q(X)$ is zero as well. [F1, F2, F3, F4, given]

2.1 For a finite nonempty $S$, take the maximum of the finitely many $\ell_0(q,t)$; the empty set is vacuous. Every larger $\ell$ satisfies every individual threshold in [F1], proving simultaneous vanishing for that finite set. This construction leaves the dependence on $S$ and $q$ explicit and makes no assertion of a universal bound for all integer homotopy degrees. [F1, F2, step 1.1] ∎
