---
id: thm-finite-budget-francis-schur-termination-and-status
kind: theorem
title: Finite Francis procedure terminates with explicit statuses and verifies its Schur pattern on success
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-finite-budget-francis-schur-reduction
  - thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries
  - def-real-and-complex-schur-forms
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "James Demmel, Math 221 Lecture 16: Hessenberg reduction and implicit Q"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
      locator: "Adapted numerical-method setting; this finite termination/status and successful-pivot composition is proved locally using the named typed suppliers, not asserted as a verbatim external theorem. No new external full-text reading is claimed."
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
dependency_level: 5
---

## Statement

For admitted inputs of [[alg-finite-budget-francis-schur-reduction]], including its terminating sign and outward-bound evaluators when supplied, the procedure terminates with one of its defined main statuses after finite initialization and at most $N$ sweeps. Its separate backward-certificate flag is `certified` only when every required local/evaluator bound is available, and otherwise is `inconclusive`. A `Schur-computed` return has the verified real or complex block pattern; its recorded exact reflector product is unitary. This asserts neither an exact Schur factorization of the original matrix nor convergence of any shift schedule, a forward spectral bound, or exact unitarity of a rounded dense product.

## Facts & Assumptions

**Given:** Finite-dimensional input and finite controls, with the actual algorithm's admitted representations, arithmetic/range semantics and terminating supplied evaluators.

[F1] [[alg-finite-budget-francis-schur-reduction]] specifies all finite initialization/chase loops, main statuses, optional evaluator contracts and bounded sweep count.

[F2] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]: each exact stored reflector is unitary.

[F3] [[def-real-and-complex-schur-forms]] defines the target triangular or real block-upper-triangular pattern, with negative-discriminant two-by-two real blocks.

## Proof

1.1 Initialization uses at most $\max(n-2,0)$ reflector stages. Each active reflector formation and both specified applications have finite loops over matrix rows and columns. A main invalid/range/formation failure returns at once. Hence initialization ends with its stored factors or an explicit status. [F1, given, algebra]

2.1 Every sweep has a finite active partition and a dimension-bounded bulge chase per block. Deflation tests, shift-table lookups and exact pattern checks are finite; each supplied sign or outward-bound call terminates by the input contract. A missing shift, unavailable type sign or failed invariant/range test gives the declared main failure. There are at most $N$ sweeps, including the initial target test when $N=0$. Bookkeeping makes finitely many calls per stage and sets its own flag inconclusive on unavailable data. Thus all main and bookkeeping paths terminate. [F1, step 1.1, given, algebra]

2.2 After initialization's full pattern check, every position below the first subdiagonal is zero; for $n\le2$ there is no such position. A block chase on $[a,b]$ changes matrix entries only in rows or columns of that interval: every left update and target overwrite has a row in it, and every right update has a column in it. Its complementary below-subdiagonal entries therefore stay unchanged and zero. The explicit row ranges in [F1] test every remaining below-subdiagonal position, without repetition. An accepted block check thus establishes the entire global Hessenberg pattern again; a rejected check detects exactly a nonzero entry that a full pattern check would detect at the same block boundary. Deflation writes are on the first subdiagonal, so preserve this invariant. Induction over all processed blocks and scans proves that the final target check starts from a globally verified Hessenberg matrix. [F1, step 1.1, step 2.1, given, induction, algebra]

3.1 The only `Schur-computed` branch checks the entire target pattern and all required exact discriminant signs, which is exactly [F3]. Every exact factor appended is unitary by [F2]; the adjoint of a finite product reverses the factors and cancels them pairwise, so the recorded product remains unitary. No exact original-matrix factorization is inferred from a rounded update or a residual diagnostic. The flag branch is the actual availability test in [F1], not a new backward-error proof. [F1, F2, F3, step 2.1, step 2.2, given, algebra] ∎
