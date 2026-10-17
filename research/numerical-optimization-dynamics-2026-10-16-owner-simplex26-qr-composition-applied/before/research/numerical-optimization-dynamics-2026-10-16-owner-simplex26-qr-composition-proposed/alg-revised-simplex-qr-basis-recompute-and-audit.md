---
id: alg-revised-simplex-qr-basis-recompute-and-audit
kind: algorithm
title: Revised-simplex basis QR recomputation with finite residual and pivot statuses
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-revised-simplex-basis-dictionary
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - alg-scaled-householder-reflector-formation-and-application
  - thm-computed-full-rank-least-squares-backward-stability
  - lem-scaled-householder-step-meets-local-backward-error-premise
  - lem-rounded-linear-and-normal-residual-certificates
  - alg-revised-simplex-residual-audit
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Stuart and Voss, Matrix Analysis and Algorithms
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
      locator: "QR/triangular-solve and residual analysis as embodied in the named NA02 suppliers; the finite basis-recomputation/status composition is defined locally, not asserted to occur verbatim in this source."
    - title: David Bindel, CS6210, Sums, Dots, and Error in Linear Systems
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html
      locator: "Residual-based interpretation; the stored-data simplex audit is the existing local OPT13 supplier."
---

## Definition

Input finite stored binary data for the standard-form LP of [[def-revised-simplex-basis-dictionary]], with full-row-rank $A\in\mathbb R^{m\times n}$, a valid ordered basis $B$, and a nonnegative integer budget $K$ of basis evaluations. Stored values represent their exact dyadic rationals. Invalid dimensions, nonfinite inputs or repeated/out-of-range basis indices return `invalid-input`. Nonsingularity of $C=A_B$ must be established as part of an admitted basis input; a numerical rank threshold is not such an establishment. A basis whose validity is unavailable returns `basis-validity-inconclusive`.

A caller may request a primal or dual simplex transition after an audit, or only an audit. It may supply a finite sequence of valid transitions from the existing exact OPT13 methods. A transition record identifies the leaving position and entering nonbasic index and establishes the exact primal or dual sign/ratio hypotheses for that transition and nonsingularity of its new basis. Exact OPT13 pivot checks suffice. Certified enclosures with a justified conditioning bound may also suffice, but this procedure does not manufacture such a bound or infer a sign from a small residual. A floating proposal lacking an established transition returns `pivot-inconclusive`, without changing the basis. Thus this interface composes both exact primal/dual drivers and guarded numerical proposals; it does not redefine their pivot rules.

For $m\ge1$, use the operationwise arithmetic of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], with $0<u<1$, $mu<1$, $(m+3)u<1$, and $\gamma_{m+3}<1/8$. All nonzero exact intermediates must be normal. Norms and certificate expressions below are evaluated exactly or by certified upward bounds; failure to obtain a finite valid bound is a numerical failure. Process the following loop:

1. If $K$ basis evaluations have been attempted, return `budget-exhausted` with the last completed audit, if any. Count this attempt before starting a factorization.
2. Recompute QR of $C=A_B$ and of $C^{\mathsf T}$ from their current original stored entries, by the canonical successive calls to [[alg-scaled-householder-reflector-formation-and-application]] used in [[thm-computed-full-rank-least-squares-backward-stability]]. Apply stored reflectors to right-hand sides by the analyzed rounded rank-one updates and use successful rounded triangular substitution. Compute $\widehat x_B$ from $Cz=b$, $\widehat y$ from $C^{\mathsf T}z=c_B$, and $\widehat d_j$ from $Cz=a_j$ for the finitely many requested nonbasic columns. Reuse the current $C$ factorization for its separate right-hand sides. Never substitute a rounded dense orthogonal product for the exact orthogonal representative in the proof. After every admitted basis replacement discard both factorizations and recompute; no rank-one factorization-update implementation is claimed.
3. Independently certify each returned solve for its actual current matrix $D=C$ or $C^{\mathsf T}$ and right-hand side $r$. Compute $\widehat v=\operatorname{fl}(D\widehat z)$ and $\widehat w=\operatorname{fl}(\widehat v-r)$ by the sequential products/subtraction of [[lem-rounded-linear-and-normal-residual-certificates]]. Put
$$g_m=\frac{1+6u}{1-(m-1)u}-1,\qquad W=g_m\|D\|_F\|\widehat z\|_2+u(\|\widehat v\|_2+\|r\|_2).$$
With the local coefficient $\kappa_m$ of [[lem-scaled-householder-step-meets-local-backward-error-premise]], put
$$\beta=(1+\kappa_m)^m-1,\qquad \beta_D=\beta+\gamma_{m+3}(1+\beta),$$
and report the valid upper bound
$$\eta(D,r,\widehat z)=\min\{\|\widehat w\|_2+W,\ \beta_D\|D\|_F\|\widehat z\|_2+\beta\|r\|_2\}.$$
Any factorization, substitution, dot, subtraction, range or certificate failure returns `numerical-failure`, with its stage and the last completed audit; it returns no certificate for the failed solve.
4. Embed $\widehat x_B$ in $\widehat x\in\mathbb R^n$ with zero nonbasic entries, and call [[alg-revised-simplex-residual-audit]] on these actual stored $\widehat x,\widehat y$. Retain its exact $r_p=A\widehat x-b$, $r_d=c-A^{\mathsf T}\widehat y$, objective difference $g$, and audit status together with all solve residual bounds. `basis-solves-residual-certified` means only that the returned bounds certify those linear equations; any requested thresholds must also be checked before declaring them met. `verified-optimal-for-stored-data` is issued only by the exact audit's primal/sign/zero-gap checks. Other completed candidates remain `candidate-only`; small residuals or a failed/ambiguous pivot never certify infeasibility.
5. Return if audit-only mode or the caller has no further transition. Otherwise accept only an established transition of the declared type. An unresolved sign, leaving-ratio comparison, tie or basis validity returns `pivot-inconclusive` or `basis-validity-inconclusive`, retaining the last completed audit and current basis. After an admitted replacement, continue at step1 with the new basis. Exact driver invariants remain those of the existing driver, not consequences of successful floating solves.

For $m=0$, skip QR and substitution: the basis, multiplier and direction arrays are empty and their basis-equation residuals are zero. Evaluate the existing exact audit with $\widehat x=0$; no basis replacement is possible. The budget and invalid-input branches remain in force.

## Remarks

No exact-arithmetic simplex method, Bland termination theorem, dual invariant, PhaseI certificate or existing residual audit is replaced. The procedure realizes canonical finite-precision basis updates by fresh recomputation and reports computed candidates with independently certified residuals. If $D$ is nonsingular, a solve's forward error is at most $\|D^{-1}\|_2\eta$; without a usable conditioning/enclosure check this grants no sign, ratio or pivot validity. Pre-rounded input uncertainty requires separate data enclosures. No numerical-success, anti-cycling or polynomial-time guarantee is added.
