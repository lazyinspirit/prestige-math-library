---
id: thm-qa-34-modfkv-low-rank-approximation
kind: theorem
title: ModFKV low-rank approximation supplier
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qa-34-modfkv-low-rank-description
  - def-qa-34-l2-sample-query-access
  - def-qa-34-threshold-band-svd-target
  - lem-qa-34-modfkv-sampling-gram-bound
  - thm-qa-34-best-frobenius-rank-k-approximation
  - thm-singular-value-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
    - title: Alan Frieze, Ravi Kannan, and Santosh Vempala, Fast Monte-Carlo Algorithms for Finding Low-Rank Approximations
      url: https://www.cs.princeton.edu/courses/archive/spring04/cos598B/bib/FriezeKV-lowrank.pdf
---

## Statement

Let $A\in\mathbb R^{m\times n}$ be nonzero, $F=\|A\|_F$, and suppose it has the exact row/column ℓ2 sample/query access of [[def-qa-34-l2-sample-query-access]]. Let $0<\sigma\le F$, $0<\epsilon\le\tfrac14\sqrt{\sigma/F}$, $\epsilon^2\le\eta\le1$, and $0<\delta<1$. Set $K=F^2/\sigma^2$ and $\bar\epsilon=\eta\epsilon^2$. For a sufficiently large universal constant in the sample count
$$q=\Theta\!\left(\frac{K^4}{\bar\epsilon^2}\log\frac1\delta\right),$$
the procedure [[alg-qa-34-modfkv-low-rank-description]] outputs a description of a rank-at-most-$K$ matrix $D=AS^T\widehat U\widehat\Sigma^{-2}\widehat U^TS$ such that, with probability at least $1-\delta$, there is a threshold-band target $A_{\sigma,\eta}$ from [[def-qa-34-threshold-band-svd-target]] satisfying
$$\|D-A_{\sigma,\eta}\|_F\le\epsilon F.$$
The ModFKV description itself queries $O(q^2)$ matrix entries and computes an SVD of a $q\times q$ matrix at $O(q^3)$ arithmetic cost, before any later sampling from $D$'s rows. These operation counts use the stated exact-access arithmetic model and do not include unprovided preprocessing for the input access structure.

## Proof gap

No complete proof is supplied at this handoff. The local Gram-sampling estimate [[lem-qa-34-modfkv-sampling-gram-bound]] proves one variance bound, but it does not establish the FKV retained-subspace score estimate for the row-and-column sketches, the singular-value threshold count, the near-orthogonality of $S^T\widehat U\widehat\Sigma^{-1}$, or the threshold-band perturbation bound. Tang's §4.2 defers Lemma 4.5 and Proposition 4.6 to its appendix; its Theorem 4.7 proof uses the threshold-band lemma, and its appendix leaves three cases of Lemma A.2 to “similar” arguments. The increase from constant success to $1-\delta$ also cites a matrix martingale bound. Each of these inequalities and the parameter substitutions must be proved locally before this theorem can supply a ready consumer. The statement is retained as the controlling dependent claim and is escalated with the exact unresolved proof obligations in the batch notes.
