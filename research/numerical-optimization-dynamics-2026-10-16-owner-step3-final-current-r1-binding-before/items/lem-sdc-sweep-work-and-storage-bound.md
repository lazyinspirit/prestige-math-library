---
id: lem-sdc-sweep-work-and-storage-bound
kind: lemma
title: Stage-call, storage and arithmetic bounds for a finite SDC execution
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-explicit-left-euler-sdc-sweep
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, section 1.1, explicit sweep equation (9); local finite-budget and cache accounting refinement
      url: https://arxiv.org/pdf/1706.06245
dependency_level: 6
---

## Statement

Consider the procedure of [[alg-explicit-left-euler-sdc-sweep]] with $M,d\ge1$ and budget $K\ge0$. Count one **stage call** for each instructed evaluation of $F_j(U)=f(t+c_jh,U_j)$, even when different calls happen to have equal arguments. Generating the supplied predictor and constructing or checking external admissibility, set-membership or invariance certificates are outside this call count. Assume each invoked evaluation and check returns. The following counts apply to any supplied predictor, including the default constant predictor.

- An exit at the node, contraction, invariance or predictor-admissibility checks before step 4 uses zero instructed stage calls. A run completing step 4 uses $M$ predictor calls. If $K=0$, it then returns `iteration-budget-exhausted`, with no residual test and no accepted endpoint.
- If predictor evaluation and exactly $s$ full sweeps complete, with no incomplete sweep, the run uses exactly $M(s+1)$ stage calls, where $0\le s\le K$. If the next sweep instead exits at an inadmissible stage after evaluating a prefix of $p$ new stages, where $0\le p<M$ and $s<K$, the count is exactly $M(s+1)+p$.
- Hence every execution uses at most $M(K+1)$ instructed stage calls. Equality holds for a run completing predictor evaluation and all $K$ sweeps, including the $K=0$ case after predictor evaluation. Acceptance after $s\ge1$ completed sweeps returns $U^{s-1}$; forming its endpoint uses the cached $F(U^{s-1})$ and adds no stage call. No $F_0=f(t,u)$ call is required.

For direct dense evaluation of the prescribed finite sums, the stored tableau and preconditioner use $O(M^2)$ real coefficients, and old/current stage and derivative buffers use $O(Md)$ real scalars. A complete sweep uses $O(M^2d)$ scalar arithmetic in addition to its $M$ stage calls. Its residual requires $O(Md)$ scalar arithmetic, at most $M$ square roots and $O(M)$ comparisons; the accepted endpoint requires $O(Md)$ further arithmetic and no stage calls. These bounds also bound any evaluated prefix of a failed sweep. After the quadrature data are supplied, forming the preconditioner, coefficient differences and contraction row norms uses $O(M^2)$ scalar arithmetic and absolute-value operations. Including default constant-predictor initialization, all direct algebraic work through any exit is bounded by $O(M^2+(K+1)M^2d)$, with at most $KM$ square roots for residuals; scalar absolute values and loop/comparison work obey the same asymptotic bound. The storage bound is independent of $K$ when buffers are reused as instructed.

These bounds exclude the work and internal storage of evaluating $f$, constructing the polynomial quadrature data, generating a supplied nondefault predictor, and performing the external domain/set/certificate checks. They do not bound those unspecified tasks or assert that a failed execution completed $K$ sweeps. All counts concern exact real arithmetic and give no floating-point roundoff guarantee.

## Facts & Assumptions

**Given:** The finite SDC procedure, its positive integers $M,d$, integer budget $K\ge0$, and the counting model in the Statement.

[F1] [[alg-explicit-left-euler-sdc-sweep]]: steps 1–3 validate before predictor evaluation; step 4 evaluates and stores all $M$ predictor derivatives once; step 5 handles $K=0$ after those evaluations.

[F2] [[alg-explicit-left-euler-sdc-sweep]]: step 6 runs at most $K$ sweeps in increasing stage order, reuses old derivatives, checks a new stage before evaluating it, and evaluates each new stage derivative once. Its residual test after computing $U^{k+1}$ returns $U^k$ and the endpoint using $F(U^k)$ on acceptance; otherwise it continues with the new buffers or returns budget exhaustion. The fixed initial column cancels before the stage recursion.

[F3] [[alg-explicit-left-euler-sdc-sweep]]: $Q,Q_\Delta$ are $M$ by $M$, $b$ has $M$ components, stages and derivatives have $M$ blocks of $d$ real coordinates, and the forward recursion consists of sums over $j<i$ and $1\le j\le M$. Setup coefficients are retained and old/current buffers are reused after the residual test.

[A1] Scalar additions, subtractions, multiplications and divisions are counted as scalar arithmetic; square roots, absolute values and comparisons are counted separately as stated. Dense sums are evaluated by accumulating their terms, with no retained history of previous sweeps. The unspecified tasks excluded in the Statement are not charged to this algebraic work bound.

## Proof

1.1 By [F1], preliminary exits precede any instructed stage call. A run reaching and completing step 4 executes exactly one call for each of the $M$ stage indices. Step 5 is after this operation, so $K=0$ gives exactly $M$ calls and the stated exhausted status, without a residual test or accepted endpoint. The cancellation in [F2] removes both appearances of the fixed initial derivative from the forward recursion, so no separate $F_0$ call is instructed, including when a collocation node equals zero. [given, F1, F2, algebra]

1.2 There are $2M^2$ entries in $Q,Q_\Delta$, $M$ weights and $O(M)$ node data; optionally storing $Q-Q_\Delta$ adds $M^2$ entries. Thus coefficient storage is $O(M^2)$. The two stage vectors and two derivative vectors have $4Md$ scalar entries, and accumulators and the endpoint require at most $O(Md)$ further entries. Buffer reuse in [F3] keeps this storage independent of $K$. Once $Q,b$ are available, computing the node differences, $Q_\Delta$, $Q-Q_\Delta$ and the maximum absolute row sums visits at most $O(M^2)$ entries, giving the asserted setup work, outside the excluded checks. [F3, A1, algebra]

2.1 In a full sweep, [F2] reuses every old derivative and executes exactly one new derivative call for each stage, for $M$ new calls. Summing these disjoint calls over $s$ full sweeps and adding step 1.1 gives $M+sM=M(s+1)$. If the next stage is inadmissible after $p$ new derivative evaluations, it is rejected before its own evaluation and no remaining stage is evaluated; the count is consequently $M(s+1)+p$, with $p<M$. Here $s<K$, so $M(s+1)+p<M(K+1)$; without an incomplete sweep, $s\le K$ gives $M(s+1)\le M(K+1)$. Exits before step 4 also satisfy this bound by step 1.1. Equality holds when all $K$ sweeps complete. After $s$ full sweeps, the current loop index is $k=s-1$; on acceptance [F2] returns $U^{s-1}$ and its endpoint is a weighted sum of derivatives already in the old buffer. Thus endpoint formation makes no additional stage call and does not substitute $U^s$ for the returned stage vector. [F1, F2, step 1.1, algebra]

3.1 At stage $i$, the two sums in [F3] contain at most $(i-1)+M\le2M$ terms, each a scalar multiple of a $d$-vector. Direct scalar multiplication and accumulation cost $O(Md)$ arithmetic for that stage, hence $O(M^2d)$ for at most $M$ stages. Early exit evaluates only a prefix of these sums. Each completed residual computes $Md$ differences and squares, $M$ sums of $d$ squares, at most $M$ square roots, and a maximum over $M$ norms; this costs $O(Md)$ arithmetic and the stated additional operations. An accepted endpoint sums $M$ weighted $d$-vectors for $O(Md)$ arithmetic. There are at most $K$ attempted sweeps, at most $K$ residual tests and at most one accepted endpoint. Default predictor initialization takes $O(Md)$ scalar assignments. Adding this initialization, step 1.2 setup and the per-sweep work gives $O(M^2+(K+1)M^2d)$ because $M,d\ge1$; at most $KM$ square roots are used. The same bounds hold through any earlier exit. No work or storage from an excluded task has been charged, and exact-real counts provide no assertion about floating-point error. [F1, F2, F3, A1, step 1.2, algebra] ∎
