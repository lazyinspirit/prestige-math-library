---
id: lem-qc-sparse-fault-path-implies-code-deviation
kind: lemma
title: "Sparse Fault Paths Preserve Correctable Code Deviation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-qc-code-deviation-and-spread
  - def-qc-level-r-good-and-bad-rectangles
  - def-qc-ft-gadget-and-proper-code-contract
dependency_level: 20
proof_strategy: direct
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
    - title: "John Preskill, Toric code recovery, fault-tolerant recovery, fault-tolerant gates (2011 handwritten lecture notes)"
      url: "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf"
---

## Statement

Let a proper gadget family correct $d$ located errors and have effective spread budget $\ell$ with the explicit joint computation and correction identities below. Let $q\ge1$ and $2q\ell\le d$. If each computation stage and its correction stage have at most $q$ bad child rectangles, then after each correction stage every logical block is at most $d$-deviated from its ideal encoded target, using joint deviation over all live blocks, including when the joint target is entangled with an arbitrary finite external reference. Applying the declared decoded recovery to that residual deviation returns the ideal logical target exactly.

## Facts & Assumptions


**Given:** A fixed finite code, a reference-preserving deviation notion, and the one-level computation and correction contracts of a proper gadget family. Assume $q\ge1$, $\ell\ge1$, and $2q\ell\le d$. Prove the stated bound through every concatenation level.

[F1] [[def-qc-code-deviation-and-spread]]: Joint deviation is represented by one CPTP error channel on all live data blocks, whose Kraus operators lie in the span of tensor operators supported on at most the stated number of coordinates in each block. Only the external reference is acted on by the identity; the error map need not factor across blocks.

[F2] [[def-qc-ft-gadget-and-proper-code-contract]]: With incoming joint $q\ell$-deviation and at most $q$ bad children, the computation stage has joint $2q\ell$-deviation at its output. The actual correction stage, with at most $q$ bad children, corrects every such $d$-deviation and returns the same logical target with joint $q\ell$-deviation, branchwise with the external reference retained. This includes incoming-error propagation; a bound on spread alone does not imply it.

[F3] [[def-qc-level-r-good-and-bad-rectangles]]: A $q$-good parent has at most $q$ bad children, and its child rectangles form the declared recursive partition.

## Proof

1.1 At the initial encoded boundary the target has zero deviation, hence at most $q\ell$-deviation. This is the induction invariant before the first computation stage. [given, F1]

1.2 Suppose a computation stage begins with at most $q\ell$ supported errors per block. The computation-stage contract [F2], including propagation of the incoming errors rather than a false full-space recovery intertwiner, bounds the output by $2q\ell$ supported errors in each block. This is a joint error-space statement: products of terms with per-block supports $S_b,T_b$ have support contained in $S_b\cup T_b$, so $\mathcal E_u^B\mathcal E_v^B\subseteq\mathcal E_{u+v}^B$ by expanding the finite sums. Thus coherent Kraus sums and correlated bad-child maps are covered, and $2q\ell\le d$ gives correctability before correction. Thus the input to the actual correction stage lies in its declared correctable sector; no extra ideal recovery is inserted into the physical circuit. [F1, F2, F3, algebra]

1.3 The correction stage itself has at most $q$ bad child rectangles. Its correction contract in [F2] maps that joint pre-correction deviation to the same encoded target with at most $q\ell$ residual supported errors. Thus the induction invariant holds after the correction stage. [F1, F2, F3]

2.1 Induction over the finite sequence of computation and correction stages at each concatenation level gives at most $q\ell\le d$ deviation after every correction stage. The tensor product of declared block recoveries in [F2] corrects that joint residual channel, so the decoded logical output is the ideal target. The contract and every correction step retain the identity on the reference. [F1, F2, step 1.1, step 1.2, step 1.3, algebra] ∎

