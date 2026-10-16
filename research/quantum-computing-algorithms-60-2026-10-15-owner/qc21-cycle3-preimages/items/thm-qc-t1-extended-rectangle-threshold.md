---
id: thm-qc-t1-extended-rectangle-threshold
kind: theorem
title: "Conditional Distance-Three Extended-Rectangle Threshold"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-qc-noise-channel-model
  - lem-qc-disjoint-fault-location-events-are-independent
  - thm-finite-union-bound
dependency_level: 12
proof_strategy: direct
sources:
  references:
    - title: "Aliferis, Gottesman and Preskill, Quantum accuracy threshold for concatenated distance-3 codes"
      url: "https://arxiv.org/abs/quant-ph/0504218"
---

## Statement

Assume a fully verified distance-three, $t=1$ extended-rectangle gadget family, including correctness of every gate, idle, preparation, syndrome, measurement, readout and correction gadget. Each level-zero rectangle is one elementary location, faulty independently with probability $\eta\in[0,1]$. Let $b\ge2$ bound the number of child-location roots in each one-scale exRec template and put $A_1=\binom b2$. Assume a proved truncated-exRec reduction with the following witness interface: for every bad level-$(r+1)$ root, one of at most $A_1$ predetermined pairs consists of bad level-$r$ witnesses; for each such pair the two witness events are determined by fixed disjoint elementary-location sets. The same bound applies to every complete or truncated witness in these pairs. Assume also that a decoded circuit with no bad top-level root implements its ideal output instrument.

Define the uniform probability envelope $p_0=\eta$ and $p_{r+1}=A_1p_r^2$. Then each level-$r$ bad-root probability is at most $p_r$, and
$$
p_r=A_1^{-1}(A_1\eta)^{2^r}.
$$
For $N$ top-level roots, the probability of any bad root is at most $Np_r$, and every final classical success probability differs from ideal by at most $Np_r$. If $\eta<1/A_1$, then $p_r\to0$ super-exponentially. For fixed gadgets and fixed subthreshold $\eta$, achieving error at most $\delta$ requires $O(\log\log(N/\delta))$ levels and polylogarithmic multiplicative size and depth overhead. The gadget correctness and overlap/witness reduction are explicit hypotheses, not conclusions of this theorem.

## Facts & Assumptions

**Given:** The finite independent fault process, $b\ge2$, the fully checked gadget family, the fixed disjoint-pair witness reduction and good-circuit correctness hypotheses, $N\ge1$, and target $\delta\in(0,1]$. Prove the conditional probability and overhead bounds.

[F1] [[def-qc-noise-channel-model]]: Elementary locations fault independently with probability $\eta$.

[F2] [[lem-qc-disjoint-fault-location-events-are-independent]]: Events determined by disjoint elementary-location sets are independent.

[F3] [[thm-finite-union-bound]] bounds a finite union by the sum of its probabilities.

[A1] The predetermined disjoint-pair witness reduction and good-circuit correctness are the hypotheses in the statement. In particular selected adaptive witness events are not automatically independent.

## Proof

1.1 Inductively suppose every level-$r$ complete or truncated witness has bad probability at most $p_r$. A bad level-$(r+1)$ root has an all-bad pair among at most $A_1$ fixed candidate pairs by [A1]. Each pair's events are determined by fixed disjoint location sets, so [F1] and [F2] bound their intersection probability by $p_r^2$. Applying [F3] proves the bound $A_1p_r^2=p_{r+1}$. The base bound is $p_0=\eta$. [given, F1, F2, F3, A1, induction, algebra]

2.1 The envelope has $p_0=\eta=A_1^{-1}(A_1\eta)$. If $p_r=A_1^{-1}(A_1\eta)^{2^r}$, its recurrence gives $p_{r+1}=A_1(A_1^{-1}(A_1\eta)^{2^r})^2=A_1^{-1}(A_1\eta)^{2^{r+1}}$. Thus the closed form holds at every level. [step 1.1, algebra]

3.1 By [F3], the probability $\alpha$ of any bad top-level root is at most $Np_r$. By [A1], the conditional output law on its complement is ideal. Thus the full output law is $(1-\alpha)P_{\rm ideal}+\alpha Q$ for some probability law $Q$; at $\alpha=0$ choose $Q$ arbitrarily. Each success probability differs from ideal by at most $\alpha\le Np_r$. [given, F3, A1, step 2.1, algebra]

4.1 If $\eta=0$, $p_r=0$ at every level. Otherwise for fixed $\eta<1/A_1$ put $\theta=A_1\eta\in(0,1)$ and $c=-\log\theta>0$. The bound $Np_r\le\delta$ holds whenever $2^r\ge c^{-1}\log(N/(A_1\delta))$, and level zero suffices when the right side is at most one. Hence the least qualifying level is $O(\log\log(N/\delta))$. The finite recursive gadget family has a constant size and depth expansion bound $\kappa\ge1$, so a circuit of original size $S$ and depth $D$ has size at most $S\kappa^r$ and depth at most $D\kappa^r$, with a fixed boundary factor. Thus its multiplicative overheads are polylogarithmic. Also $p_r=A_1^{-1}e^{-c2^r}\to0$ super-exponentially. [given, step 2.1, algebra] ∎

## Remarks

The missing recursive cut invariant for a concrete overlap proof is recorded in the incomplete draft [[lem-qc-t1-truncated-exrec-witness-reduction]]. That draft is contextual only, not a logical supplier here. Fault-dependent selected bad-root events are not asserted independent; applying this theorem requires an actual fixed-candidate disjoint-witness reduction. A proof using joint fixed-tree witness counts could instead supply a suitable probability bound directly, but the present theorem does not assume that such a reduction has been established.
