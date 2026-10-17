---
id: alg-revised-simplex-qr-basis-recompute-and-audit
kind: algorithm
title: Revised-simplex basis QR recomputation with finite residual and pivot statuses
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-revised-simplex-basis-dictionary
  - alg-revised-primal-simplex-bland-rule
  - alg-revised-dual-simplex-with-finite-budget
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - alg-scaled-householder-reflector-formation-and-application
  - thm-computed-full-rank-least-squares-backward-stability
  - lem-scaled-householder-step-meets-local-backward-error-premise
  - lem-rounded-linear-and-normal-residual-certificates
  - alg-revised-simplex-residual-audit
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Stuart and Voss, Matrix Analysis and Algorithms
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
      locator: "QR/triangular-solve and residual analysis as embodied in the named NA02 suppliers; the finite basis-recomputation/status composition is defined locally, not asserted to occur verbatim in this source."
    - title: David Bindel, CS6210, Sums, Dots, and Error in Linear Systems
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html
      locator: "Residual-based interpretation; the stored-data simplex audit is the existing local OPT13 supplier."
dependency_level: 5
---

## Definition

Input finite stored binary data for the standard-form LP of [[def-revised-simplex-basis-dictionary]], with full-row-rank $A\in\mathbb R^{m\times n}$, a candidate ordered basis $B$ of $m$ distinct in-range indices, and a nonnegative integer budget $K$ of basis evaluations. Stored values represent their exact dyadic rationals. Invalid dimensions, nonfinite inputs or repeated/out-of-range basis indices return `invalid-input`. Nonsingularity of $C=A_B$ must be established as part of an admitted basis input; a numerical rank threshold is not such an establishment. A basis whose validity is unavailable returns `basis-validity-inconclusive`.

A caller may request a primal or dual simplex transition after an audit, or only an audit. It may supply a finite sequence of transition records, one for each requested basis replacement, from [[alg-revised-primal-simplex-bland-rule]] or [[alg-revised-dual-simplex-with-finite-budget]]. A transition record has fields `mode` (primal or dual), `basis_before` (the ordered current basis, with its validity witness), `leaving_position` $i$, and `entering_index` $j$; it is checked rather than trusted as already verified. The initial basis and each record's `basis_before` must carry the validity witness described here. After a replacement, its checked nonzero pivot coefficient establishes the new basis; any next transition record must carry its own checked validity witness.

An admitted basis input includes either an exact rational inverse witness $G$ with $CG=GC=I_m$, checked exactly, or a rational matrix $H$ and rational $q$ with $0\le q<1$ and $\|I_m-HC\|_\infty\le q$, also checked exactly. For matrices with at least one row, $\|M\|_\infty=\max_i\sum_j|M_{ij}|$; the empty matrix has norm $0$. For vectors it is the maximum absolute coordinate, with empty value $0$. For $m=0$, the empty inverse witness satisfies the identities. If neither validity certificate is verified, return `basis-validity-inconclusive` before factorization. A numerical rank threshold is never a validity certificate.

With an exact inverse witness, first compare `basis_before` with the current ordered basis exactly. Then check a transition by exact rational arithmetic: compute $x_B=Gb$, $y=G^{\mathsf T}c_B$, $d_k=Ga_k$ for every nonbasic $k$, and $\bar c_k=c_k-a_k^{\mathsf T}y$. A primal record is admissible exactly when $x_B\ge0$, $j$ is the least-index nonbasic column with $\bar c_j<0$, some $d_{rj}>0$, and $i$ minimizes $x_{B_r}/d_{rj}$ over rows with $d_{rj}>0$, with ties resolved by least basic-variable index. A dual record is admissible exactly when every nonbasic $\bar c_k\ge0$, $B_i$ is the least-index basic variable with $x_{B_i}<0$, $d_{ij}<0$, and $j$ minimizes $\bar c_k/(-d_{ik})$ over nonbasic $k$ with $d_{ik}<0$, with ties resolved by least variable index. In either case, the checked nonzero pivot coefficient proves the replacement basis nonsingular.

Certified rational enclosures may instead establish a transition. For each current $D=C$ and $D=C^{\mathsf T}$, provide rational $H_D,q_D,M_D$ with $0\le q_D<1$, $\|I_m-H_DD\|_\infty\le q_D$, and $M_D\ge\|H_D\|_\infty/(1-q_D)$; verify these inequalities exactly. For each solve $Dz=r$, combine its returned candidate $\widehat z$ and a rational upper bound $\eta$ for its Step 3 residual bound to form the coordinate intervals $[\widehat z_\ell-M_D\eta,\widehat z_\ell+M_D\eta]$. For closed rational intervals $I=[a,b]$ and $J=[c,d]$, use $I+J=[a+c,b+d]$, $I-J=[a-d,b-c]$, $IJ=[\min\{ac,ad,bc,bd\},\max\{ac,ad,bc,bd\}]$, and $I/J=I\cdot[\min\{1/c,1/d\},\max\{1/c,1/d\}]$ when $0\notin J$; division is undefined otherwise. Evaluate dot products, reduced costs, and ratio expressions with these exact rational endpoint operations. First compare `basis_before` with the current ordered basis exactly. An interval proves a sign or order only when its endpoints imply that relation. If a ratio comparison is not decided by interval endpoints, return `pivot-inconclusive` unless an exact inverse witness $G$ is supplied for the current basis; with $G$, compute the exact rational ratios and compare them exactly, resolving equality by the least-index rule. Admit the record only when the required signs and comparisons, including all least-index rules, are proved. If a needed sign, ratio comparison, or basis match is not established, return `pivot-inconclusive` with the current basis and its last completed audit, without changing the basis.

For $m\ge1$, use the operationwise arithmetic of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], with $0<u<1$, $mu<1$, $(m+3)u<1$, and $\gamma_{m+3}<1/8$. All nonzero exact intermediates must be normal. Norms and certificate expressions below are evaluated exactly or by certified upward bounds; failure to obtain a finite valid bound is a numerical failure. Process the following loop:

1. Maintain an attempt counter $t$, initially $0$. If $t=K$, return `budget-exhausted` with the current basis, the last completed audit if any, and the basis to which that audit belongs. Otherwise set $t\leftarrow t+1$ before starting this basis evaluation. Every budget, numerical-failure, basis-validity-inconclusive, or pivot-inconclusive return includes the current basis and identifies the basis associated with any retained audit; state explicitly when no audit exists.
2. Separately for $D=C=A_B$ and $D=C^{\mathsf T}$, copy the current stored entries into a working matrix $W$. For $k=1,\ldots,m$, set $r=m-k+1$, take the active column $x=W_{k:m,k}$ and trailing block $T=W_{k:m,k+1:m}$, and call [[alg-scaled-householder-reflector-formation-and-application]] once on $(x,T)$. On success, save its reflector data and replace the active block $W_{k:m,k:m}$ by its returned output, which writes the new diagonal entry and exact zeros below it; leave earlier rows and columns unchanged. If $x=0$, save an identity marker and leave the trailing block unchanged. Stop with `numerical-failure` at the first failed call, recording the factorization, column $k$, and failure stage. The final $W$ is the computed upper-triangular factor $\widehat R_D$.

   To apply these stored reflectors to any right-hand side $s$, start with $z=s$ and visit $k=1,\ldots,m$ in that same order. Skip an identity marker. Otherwise, on the active suffix $z_{k:m}$ compute the sequential rounded dot $d=\operatorname{fl}(v_k^{\mathsf T}z_{k:m})$, then $p=\operatorname{fl}(\widehat\tau_k v_k)$, $u=\operatorname{fl}(p\,d)$ componentwise, and $z_{k:m}=\operatorname{fl}(z_{k:m}-u)$ componentwise, using the operation order of [[alg-scaled-householder-reflector-formation-and-application]] without a column overwrite. Stop at the first failure and record the right-hand side, reflector index, and failure stage. For $Dz=s$, apply this replay to obtain the transformed right-hand side and solve $\widehat R_D\widehat z=z$ by descending substitution: for $i=m,\ldots,1$, sequentially compute $t_i=\operatorname{fl}(\sum_{j=i+1}^m(\widehat R_D)_{ij}\widehat z_j)$, $h_i=\operatorname{fl}(z_i-t_i)$, and $\widehat z_i=\operatorname{fl}(h_i/(\widehat R_D)_{ii})$. A zero diagonal or any failed operation returns `numerical-failure` with the solve and row index. Reuse the $C$ factorization for $\widehat x_B$ and every nonbasic direction $\widehat d_j$; reuse the $C^{\mathsf T}$ factorization for $\widehat y$. Never substitute a rounded dense orthogonal product for the exact orthogonal representative in the proof. After every admitted basis replacement discard both factorizations and recompute; no rank-one factorization-update implementation is claimed.
3. Independently certify each returned solve for its actual current matrix $D=C$ or $C^{\mathsf T}$ and right-hand side $r$. Compute $\widehat v=\operatorname{fl}(D\widehat z)$ and $\widehat w=\operatorname{fl}(\widehat v-r)$ by the sequential products/subtraction of [[lem-rounded-linear-and-normal-residual-certificates]]. Put
$$g_m=\frac{1+6u}{1-(m-1)u}-1,\qquad W=g_m\|D\|_F\|\widehat z\|_2+u(\|\widehat v\|_2+\|r\|_2).$$
With the local coefficient $\kappa_m$ of [[lem-scaled-householder-step-meets-local-backward-error-premise]], put
$$\beta=(1+\kappa_m)^m-1,\qquad \beta_D=\beta+\gamma_{m+3}(1+\beta),$$
and report the valid upper bound
$$\eta(D,r,\widehat z)=\min\{\|\widehat w\|_2+W,\ \beta_D\|D\|_F\|\widehat z\|_2+\beta\|r\|_2\}.$$
A finite concrete certificate option uses exact rational arithmetic on the stored dyadic entries and a rational upper bound for $u$ satisfying all displayed admissibility inequalities. Use $\|v\|_2\le\sum_i|v_i|$ and $\|D\|_F\le\sum_{i,j}|D_{ij}|$ as rational upper bounds for every norm in the two nonnegative expressions. For the local coefficient, substitute $\bar e_m=(1+u)^{m+3}-1$ for $e_m=(1+u)^{m/2+3}-1$ in the source formula: put $\bar d_m=\bar e_m+u(2+\bar e_m)$, $a_m=(1+u)/(1-u)^m-1$, $g_m^{\rm QR}=mu/(1-mu)$, $c_m=2((1+a_m)(1+u)^2(1+g_m^{\rm QR})-1)$, and $\bar\kappa_m=\max\{\bar e_m+8\bar d_m,(1+u)c_m+3u\}$. These are rational upper bounds because $m+3\ge m/2+3$ and all constituent nonnegative formulas increase in their arguments. Then $\bar\beta=(1+\bar\kappa_m)^m-1$ and $\bar\beta_D=\bar\beta+\gamma_{m+3}(1+\bar\beta)$ are rational upper bounds for the QR coefficients. Compute both candidate bounds by finite exact rational sums/products/powers and take their minimum as the returned $\eta$. This implements the certificate without a norm oracle; other finite certified upper-bound procedures are allowed. Any factorization, substitution, dot, subtraction, range or certificate failure returns `numerical-failure`, with its stage and the last completed audit; it returns no certificate for the failed solve.
4. Embed $\widehat x_B$ in $\widehat x\in\mathbb R^n$ with zero nonbasic entries, and call [[alg-revised-simplex-residual-audit]] on these actual stored $\widehat x,\widehat y$. Retain its exact $r_p=A\widehat x-b$, $r_d=c-A^{\mathsf T}\widehat y$, objective difference $g$, and audit status together with all solve residual bounds. `basis-solves-residual-certified` means only that the returned bounds certify those linear equations; any requested thresholds must also be checked before declaring them met. `verified-optimal-for-stored-data` is issued only by the exact audit's primal/sign/zero-gap checks. Other completed candidates remain `candidate-only`; small residuals or a failed/ambiguous pivot never certify infeasibility.
5. Return if audit-only mode or the caller has no further transition. Otherwise compare the next record with the current basis and apply the exact or enclosure admission predicate above. A failed or unresolved predicate returns `pivot-inconclusive` or `basis-validity-inconclusive`, retaining the current basis and last completed audit. On admission, replace position $i$ by $j$, discard both factorizations, and continue at Step 1. Exact driver invariants remain those of the existing driver, not consequences of successful floating solves.

For $m=0$, skip QR and substitution: the basis and multiplier are empty, every direction is the empty vector, and their basis-equation residuals and solve bounds $\eta$ are zero. Evaluate the existing exact audit with $\widehat x=0$; no basis replacement is possible. The budget and invalid-input branches remain in force.

## Remarks

No exact-arithmetic simplex method, Bland termination theorem, dual invariant, PhaseI certificate or existing residual audit is replaced. The procedure recomputes canonical current-basis QR data, checks caller-supplied transitions, and reports computed candidates with independently certified residuals. A useful forward-accuracy interpretation requires a conditioning bound; signs and ratios are used only when exact checks or certified enclosures establish them. Pre-rounded input uncertainty requires separate data enclosures. No numerical-success, anti-cycling or polynomial-time guarantee is added.
