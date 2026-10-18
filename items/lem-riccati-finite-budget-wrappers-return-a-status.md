---
id: lem-riccati-finite-budget-wrappers-return-a-status
kind: lemma
title: "Finite Riccati candidate, Newton-Kleinman, and doubling wrappers return
  a status"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
deps:
  - alg-finite-budget-schur-qz-riccati-candidate-extraction
  - alg-finite-budget-newton-kleinman-policy-iteration
  - alg-finite-budget-structure-preserving-doubling-for-dare
  - thm-finite-budget-francis-schur-termination-and-status
  - prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence
  - thm-finite-budget-stable-block-reordering-correctness-and-status
  - thm-bartels-stewart-finite-status-and-local-pivot-uniqueness
  - thm-uniform-linear-residual-solution-enclosure
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
  - thm-computed-qz-pair-has-certified-backward-error
  - alg-point-verified-linear-system-certifier
  - thm-point-verified-linear-system-certifier-soundness
  - def-verified-linear-residual-certificate-data
  - def-standard-continuous-and-discrete-riccati-equations
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems,
        Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
dependency_level: 5
verification:
  precheck: pass
---

## Statement

Use admitted inputs and the finite solver/arithmetic/evaluator controllers
stipulated by each of
[[alg-finite-budget-schur-qz-riccati-candidate-extraction]],
[[alg-finite-budget-newton-kleinman-policy-iteration]], and
[[alg-finite-budget-structure-preserving-doubling-for-dare]]. Then each
procedure terminates with its declared output or status, retaining its
specified failure diagnostics.

Candidate extraction makes one matching Schur or QZ reduction, at most one
stable-block reordering call, and at most $n$ graph-column certificate passes
followed by finite acceptance checks. Exact Newton–Kleinman makes at most $N$
policy evaluations; its safeguarded mode inspects at most $N(L+1)$ trial gains
and makes at most $N$ point-certificate calls for the current cost matrices. SDA makes at most $N$
solve/update passes, at most $nN$ point-certificate calls for recurrence
solves, and at most $m(N+1)$ calls for residual solves ($R\in F^{m\times m}$), followed by finite
symmetry/residual reporting. Early
failures may shorten these counts. These conclusions are conditional on the
declared finite controller contracts; they do not derive termination of an
unspecified certificate-producing routine from an enclosure theorem.

Successful ordering concerns the represented computed form. The original
Riccati residual, symmetry, positivity and closed-loop checks remain separate.
This finite-status result asserts no convergence for arbitrary inexact
proposals and no rounded PSD or structured-backward-error guarantee.

## Facts & Assumptions

**Given:** The three procedures' admitted finite matrix data, their finite Schur/QZ, reordering, outer-iteration and line-search budgets, and exactly the finite solver/verifier interfaces supplied in their Definitions.

[A1] For candidate extraction, every supplied arithmetic/evaluator controller has the finite execution and explicit failure behavior declared in its Definition. For Newton–Kleinman the finite line-search controller and each point-certificate call return their result or status; for SDA each point certificate, exact factorization, and arithmetic operation returns its result or failure in finite work. These are the existing operational hypotheses, not inferred root-finding or precision-success guarantees.

[F1] [[alg-finite-budget-schur-qz-riccati-candidate-extraction]] calls its matching reduction, then stable-block reordering, then its finite verified graph solve and outward acceptance diagnostics.

[F2] [[thm-finite-budget-francis-schur-termination-and-status]] and [[prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence]] prove finite status return of the admitted reduction calls.

[F3] [[thm-finite-budget-stable-block-reordering-correctness-and-status]] proves finite status return, selected invariant/right-deflating subspace on an ordered return, and transport of the original unstructured reduction residual.

[F4] [[thm-uniform-linear-residual-solution-enclosure]] and [[def-verified-linear-residual-certificate-data]] supply the interpretation of usable verified linear-solve and inverse/residual data. [[thm-outward-rounded-operations-are-isotone-and-dag-sound]] gives enclosure soundness for finite DAG evaluations.

[F5] [[thm-computed-qz-pair-has-certified-backward-error]] concerns the specified nearby unstructured pencil, not a structured Riccati perturbation.

[F6] [[alg-finite-budget-newton-kleinman-policy-iteration]] has at most $N$ outer updates, at most $L+1$ safeguarded trials per pass, and at most one current-cost point-certificate call per pass. [[alg-point-verified-linear-system-certifier]] has a finite status, and [[thm-point-verified-linear-system-certifier-soundness]] gives the solution ball on a certified return. [[thm-bartels-stewart-finite-status-and-local-pivot-uniqueness]] proves finite policy-solve status return and uniqueness on successful exact solves.

[F7] [[alg-finite-budget-structure-preserving-doubling-for-dare]] uses exact elimination for recurrence and residual solves in exact mode. Finite mode uses at most $n$ point-certificate calls per recurrence solve and at most $m$ calls for each residual diagnostic at initialization and after each update, since $R+B^*H_jB$ has order $m$. An unavailable residual does not change recurrence status. The point solver has finite status by [F6]. The residual/feedback conventions are [[def-standard-continuous-and-discrete-riccati-equations]].

## Proof

1.1 Each candidate-extraction branch calls only its matching finite Schur or QZ routine. The finite controls and declared status behavior are covered by [F1]–[F2]. Any reduction, regularity, range or budget failure immediately propagates its inconclusive status; no convergence-until-success loop is present. [given, A1, F1, F2, algebra]


1.2 Exact Newton–Kleinman performs at most $N$ policy evaluations. Each admitted Bartels–Stewart call has the complete per-pass control packet and returns a finite success or failure status by [F6]; failure stops immediately and success is followed by one finite gain update. Hence exact mode returns within its declared outer budget. [given, A1, F6, algebra]


1.3 Each safeguarded outer pass clears finitely many positive integer denominators from the rational current-cost system, preserving its solution while making the stored point-call data dyadic, or returns range-failure. It inspects the finite list of $L+1$ gains and makes one current-cost point-certificate call. Each trial then uses finitely many outward operations to verify its inverse, residual and stability bounds. By [A1] each call and outward check returns its enclosure or status in finite work, with certified balls interpreted by [F4] and [F6]. A trial passes the certified acceptance inequality or is rejected; if no trial passes, the routine returns safeguard-inconclusive without changing the current gain. At most $N$ outer passes therefore make at most $N(L+1)$ trial inspections and $N$ point-certificate calls. No assertion of convergence for arbitrary inexact proposals follows from this finite search. [A1, F4, F6, algebra]


1.4 Each SDA pass $j<N$ requests one solve with $I+G_jH_j$ and, in finite mode, at most $n$ point-certificate calls for its columns. The finite-mode initialization solves the order-$m$ system $RV=B^*$ on finite dyadic encodings by finite exact rational elimination, forms $BV,C^*C$, and rounds finitely many components or returns its declared failure; it makes no point-certificate call. At initialization and after each update, form $S_j=R+B^*H_jB$ exactly. In exact mode its possibly non-dyadic entries are handled by the finite exact elimination rule, as are the recurrence solves; the residual is then evaluated exactly. In finite mode $S_j$ is dyadic, so its order-$m$ residual solve uses at most $m$ point-certificate calls followed by outward residual evaluation. By [A1] and [F6] all these operations return a result or failure in finite work. An unavailable residual is reported without changing recurrence status. Failure of the recurrence solve immediately returns its declared range/inverse status; success is followed by the fixed finite matrix updates. Thus every pass and final report terminate. [given, A1, F6, F7, algebra]


2.1 On successful reduction, reordering inspects finitely many blocks and returns ordered or an explicit status by [F3]. On an ordered return its first required factor columns are the selected subspace of the represented computed form, with only the original unstructured residual certificate transported. Under [A1] the graph-block bound and verified solve [F4] terminate; missing invertibility or a failed solve takes the stated inconclusive branch. Residual, symmetry, positivity and closed-loop diagnostics use finitely many matrix/enclosure operations, and failure or unavailable evidence takes its explicit return. The enclosure interpretation in [F4] does not itself produce a terminating verifier; that is the supplied contract [A1]. The QZ diagnostic retains precisely the limitation in [F5]. Thus the wrapper returns in finite work with ordering and equation-level acceptance kept separate. [A1, F1, F3, F4, F5, step 1.1, algebra]


3.1 There are at most $N$ such passes. The final symmetry defects and, when its solve is available, the standard DARE residual use finite-dimensional arithmetic under [A1] and the conventions [F7]. Therefore the exact and finite-arithmetic paths return their declared output/status by the cap. The recorded raw matrices and defects supply no rounded PSD or structured-backward-error claim without separate checks, just as the candidate and safeguarded branches retain their original acceptance restrictions. [A1, F7, step 2.1, step 1.2, step 1.3, step 1.4, algebra] ∎

