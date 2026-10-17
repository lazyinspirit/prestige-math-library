---
id: cor-sqp-augmented-lagrangian-finite-budget-status
kind: corollary
title: "The augmented-Lagrangian multiplier procedure preserves its domain and returns within its caps"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-sqp-augmented-lagrangian-multiplier-method
  - def-sqp-augmented-lagrangian-equality-and-inequality
  - def-kkt-residual-and-normal-cone
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: direct-corollary
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 17 §17.4, printed pp. 511–521; augmented-Lagrangian setting. The finite-cap property is a direct consequence of the local procedure and its supplied inner contract."
    - title: "Dimitri P. Bertsekas, Constrained Optimization and Lagrange Multiplier Methods"
      url: https://www.mit.edu/~dimitrib/Constrained-Opt.pdf
      locator: "Chapter 2 §2.2, printed pp. 104–121; multiplier-method setting. No independent external finite-cap theorem is asserted."
---

## Statement

On the admitted inputs of [[alg-sqp-augmented-lagrangian-multiplier-method]], with finite positive integer caps $K,M$, and with its supplied inner procedure satisfying its stated finite-iteration/report contract, the procedure terminates with one of `inner-budget-exhausted`, `inner-failure`, `kkt-tolerance-reached`, or `outer-budget-exhausted`. It performs at most $KM$ inner iterations and at most $K$ outer KKT residual tests. Every multiplier iterate satisfies $\lambda_k\ge0$, and every point used for a multiplier update or KKT test lies in the program domain $U$.

A `kkt-tolerance-reached` return reports a KKT residual at most $\tau$ at the returned primal point and updated multipliers, together with the achieved inner residual at most its declared $\epsilon_k$. An `outer-budget-exhausted` return includes the last reported inner and KKT residuals. An `inner-budget-exhausted` return retains the current outer state and the inner procedure's last point and residual; an `inner-failure` return preserves its declared failure data. None of these conclusions asserts that a tolerance will be reached, that an inner call will succeed within its cap, or that the finite procedure converges.

## Facts & Assumptions

**Given:** The admitted smooth program, finite positive integer caps $K,M$, tolerances, initial state $x_0\in U$, initial multipliers $\nu_0\in\mathbb R^p$, $\lambda_0\in\mathbb R^m_+$, and the supplied finite inner-procedure contract.

[F1] [[alg-sqp-augmented-lagrangian-multiplier-method]] calls the inner procedure at most once per outer index $k=0,\ldots,K-1$. A success supplies $x_k^+\in U$ and its achieved inner residual, and the algorithm rejects a purported success reporting residual above $\epsilon_k$. Inner budget or failure returns terminate the outer procedure immediately with their stated data.

[F2] [[def-sqp-augmented-lagrangian-equality-and-inequality]] defines $\nu^+=\nu+\rho h(x^+)$ and $\lambda^+=[\lambda+\rho g(x^+)]_+$, where projection is componentwise maximum with zero.

[F3] [[def-kkt-residual-and-normal-cone]] defines a finite sum of stationarity, primal feasibility, dual feasibility and complementarity residual norms at domain points and finite multipliers; zero-dimensional norms are zero.

[A1] Every inner call performs at most $M$ inner iterations, each iteration and report computation is finite, and the call returns the residual or failure data prescribed by [F1]. The smooth program evaluations and finite-dimensional arithmetic used for each outer update and test are the admitted exact evaluations of that procedure.

## Proof

1.1 Initially $x_0\in U$ and $\lambda_0\ge0$. An inner failure or budget return stops before an update. Otherwise [F1] supplies $x_k^+\in U$ and checks its reported inner residual against $\epsilon_k$. The multiplier update in [F2] is therefore defined, and each component of $\lambda_{k+1}$ is nonnegative. If the procedure continues, it sets $x_{k+1}=x_k^+\in U$. Induction proves the domain and multiplier assertions at every reached index, including when the equality or inequality multiplier space has dimension zero. [given, F1, F2, A1, induction, algebra]

2.1 At each reached outer index, [A1] gives at most $M$ inner iterations and finite return/report work. Either the inner status or a failed success-residual check terminates the procedure, or one finite multiplier update and one finite KKT test [F3] follow. Thus every outer iteration is finite. There are only $K$ possible outer indices, so total inner iterations are at most $KM$ and total KKT tests are at most $K$. If none of the earlier returns occurs, the procedure reaches its explicitly prescribed `outer-budget-exhausted` return. [given, F1, F2, F3, A1, step 1.1, algebra]

3.1 A passing KKT test is exactly $r_k\le\tau$, and its reported point and updated multipliers are those used to evaluate $r_k$; the preceding success check ensures the reported inner residual is at most $\epsilon_k$. If the outer cap is reached, $K\ge1$ ensures the last successful call and test exist, so $x_K$, $(\nu_K,\lambda_K)$, $r_{K-1}$ and $\widehat\epsilon_{K-1}$ are defined and returned. The two inner terminal statuses return exactly the state/data specified by [F1]. These are all branches, and none requires that any KKT or inner tolerance eventually be met. [given, F1, F3, step 1.1, step 2.1, algebra] ∎
