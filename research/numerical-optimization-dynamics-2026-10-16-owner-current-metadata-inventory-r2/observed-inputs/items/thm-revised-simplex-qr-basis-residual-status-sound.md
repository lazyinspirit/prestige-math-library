---
id: thm-revised-simplex-qr-basis-residual-status-sound
kind: theorem
title: Finite QR basis recomputation has sound residual and stored-data audit statuses
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-revised-simplex-qr-basis-recompute-and-audit
  - thm-computed-full-rank-least-squares-backward-stability
  - lem-rounded-linear-and-normal-residual-certificates
  - thm-revised-simplex-primal-dual-residual-gap
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Stuart and Voss, Matrix Analysis and Algorithms
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
      locator: "Adaptation of QR/triangular-solve residual analysis through the named proved NA02 suppliers. The finite simplex-basis composition and status theorem are proved locally, not attributed verbatim to this source."
    - title: David Bindel, CS6210, Sums, Dots, and Error in Linear Systems
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html
      locator: "Residual-based bounds; the simplex primal-dual identity is the separate proved OPT13 supplier."
dependency_level: 6
---

## Statement

For admitted inputs of [[alg-revised-simplex-qr-basis-recompute-and-audit]], the procedure terminates after at most $K$ basis-evaluation attempts with its defined output or failure status. Each completed solve certificate satisfies
$$\|D\widehat z-r\|_2\le\eta(D,r,\widehat z)$$
for its actual current $D=A_B$ or $A_B^{\mathsf T}$ and right-hand side. If $z_*=D^{-1}r$ denotes the exact solution, then also $\|\widehat z-z_*\|_2\le\|D^{-1}\|_2\eta(D,r,\widehat z)$. This conditional inequality does not compute or bound $\|D^{-1}\|_2$. In particular, its returned $\widehat x_B,\widehat y,\widehat d_j$ have the respective certified primal-basis, multiplier and direction residuals. Its exact stored-data audit obeys
$$g=\widehat x^{\mathsf T}r_d+\widehat y^{\mathsf T}r_p,\qquad |g|\le\|\widehat x\|_1\|r_d\|_\infty+\|\widehat y\|_1\|r_p\|_\infty.$$
An admitted exact inverse or $H,q$ basis witness proves the current basis nonsingular; every checked $M_D$ bounds the corresponding $\|D^{-1}\|_\infty$. A transition admitted by either exact rational checks or certified intervals satisfies the exact primal or dual pivot rule in the algorithm, and its replacement basis is nonsingular. Only the exact audit's feasibility, dual-sign and zero-gap checks issue `verified-optimal-for-stored-data`. Every unestablished transition or unresolved sign/ratio comparison stops without changing the basis. The theorem grants neither forward accuracy without conditioning nor correctness of unvalidated floating pivot choices, an infeasibility certificate from near-zero data, or numerical termination at an optimum.

## Facts & Assumptions

**Given:** The admitted inputs, finite budget, arithmetic and certificate hypotheses of the algorithm.

[F1] [[alg-revised-simplex-qr-basis-recompute-and-audit]] specifies fresh current-basis QR recomputation, bounded attempts, first failures, established transitions, exact stored-data audit and all return statuses.

[F2] [[thm-computed-full-rank-least-squares-backward-stability]] supplies a square exactly orthogonal representative $\widehat Q$, triangular $\widehat R$, and perturbations
$$D+\Delta_Q=\widehat Q\widehat R,\qquad(\widehat R+\Delta_R)\widehat z=\widehat Q^{\mathsf T}(r+\delta r),$$
with $\|\Delta_Q\|_F\le\beta\|D\|_F$, $\|\delta r\|_2\le\beta\|r\|_2$, and $\|\Delta_R\|_F\le\gamma_{m+3}\|\widehat R\|_F$ on every successful branch. Its additional perturbed-least-squares uniqueness premise is not needed for these equations.

[F3] [[lem-rounded-linear-and-normal-residual-certificates]] bounds $\|\widehat w-(D\widehat z-r)\|_2\le W$ for the specified successful residual evaluation and certified norms.

[F4] [[thm-revised-simplex-primal-dual-residual-gap]] gives the exact audit identity, norm bound and conditional optimality for the stored data.

[A1] Every claimed successful call obeys the stated source arithmetic/range hypotheses, and bound arithmetic is exact or certified upward.

## Proof

1.1 If $m=0$, the empty basis is nonsingular on the zero space. For $m\ge1$, an exact inverse witness $G$ gives $C^{-1}=G$. Otherwise let $E=I-HC$ with $\|E\|_\infty\le q<1$. The row-sum norm inequality gives $(1-q)\|v\|_\infty\le\|HCv\|_\infty$ for every $v$, so both $HC$ and $C$ have trivial kernel and, being square, are nonsingular. If $M\ge\|H\|_\infty/(1-q)$ is supplied, applying this inequality to $v=(HC)^{-1}w$ gives $\|(HC)^{-1}w\|_\infty\le\|w\|_\infty/(1-q)$, and $C^{-1}=(HC)^{-1}H$ yields $\|C^{-1}\|_\infty\le M$. The same argument applies to each separately checked $D=C$ or $C^{\mathsf T}$ witness in interval mode. [F1, given, cases, algebra]

2.1 If $m=0$, the empty solve residuals are zero and only the finite audit and budget branches remain. If $m\ge1$, step 1.1 makes each square $D$ nonsingular and hence full column rank. Apply [F2] under [A1]; since the exact representative is square, $\widehat Q\widehat Q^{\mathsf T}=I$. Multiplication of its triangular equation therefore gives $(D+\Delta_D)\widehat z=r+\delta r$, where $\Delta_D=\Delta_Q+\widehat Q\Delta_R$. No nonsingularity of $\widehat R+\Delta_R$ or exact orthogonality of a rounded dense output is used. [A1, F1, F2, step 1.1, cases, algebra]

3.1 Orthogonality and [F2] imply $\|\widehat R\|_F=\|D+\Delta_Q\|_F\le(1+\beta)\|D\|_F$. Hence $\|\Delta_D\|_F\le[\beta+\gamma_{m+3}(1+\beta)]\|D\|_F=\beta_D\|D\|_F$. Rearranging step 2.1 yields $\|D\widehat z-r\|_2\le\|\delta r\|_2+\|\Delta_D\|_F\|\widehat z\|_2\le\beta\|r\|_2+\beta_D\|D\|_F\|\widehat z\|_2$. [A1, F2, step 2.1, algebra]

4.1 The triangle inequality and [F3] give the independent upper bound $\|D\widehat z-r\|_2\le\|\widehat w\|_2+W$. Both quantities in the reported minimum are upper bounds, so their minimum is an upper bound. Applying this to each current primal, transpose-multiplier and direction solve proves all residual conclusions. The same conclusion holds when the algorithm uses rational or other certified upper bounds, since both evaluated candidates remain upper bounds. Finally $D(\widehat z-z_*)=D\widehat z-r$, so the defining induced-norm inequality gives $\|\widehat z-z_*\|_2\le\|D^{-1}\|_2\|D\widehat z-r\|_2\le\|D^{-1}\|_2\eta$. This is conditional on the actual inverse norm, not an assertion that the procedure computes it. For interval mode, [F1] forms each coordinate interval with radius $M_D\eta$; step 1.1 gives $\|D^{-1}\|_\infty\le M_D$, while step 3.1's residual bound and $\|z\|_\infty\le\|z\|_2$ imply $\|\widehat z-D^{-1}r\|_\infty\le M_D\eta$. Thus the intervals contain the exact solution. [A1, F1, F3, step 1.1, step 3.1, algebra]

5.1 The interval addition and subtraction endpoints bound the corresponding sums and differences; the four endpoint products bound every product, and reciprocal endpoints bound reciprocals on either interval that avoids zero. Induction therefore encloses every exact reduced cost and ratio evaluated by [F1]. Any endpoint comparison that admits a sign or order is true of the enclosed exact value; any unresolved comparison either is checked by an exact inverse witness or returns inconclusive. Hence every admitted exact-witness or interval record satisfies the corresponding primal or dual pivot rule. If position $i$ is replaced by column $j$, then $C^{-1}A_{B'}$ is the identity with column $i$ replaced by $d=C^{-1}a_j$, so $\det(A_{B'})=\det(C)d_i\ne0$ by the checked pivot sign. The replacement basis is nonsingular. [F1, step 1.1, step 4.1, algebra]

5.2 By [F1], the completed audit uses the actual stored candidate vectors and original stored LP data. Apply [F4] to obtain the displayed identity, norm bound and exactly conditional optimality statement. Since [F1] labels no other branch verified-optimal and rejects unestablished transitions, no small residual, unresolved sign/ratio comparison or numerical failure is converted into a pivot, optimality or infeasibility certificate. [F1, F4, step 4.1, algebra]

6.1 Each canonical factorization, vector application, substitution and residual loop has finite dimensions; each elementary call either completes or returns its first failure by [F1]. Verifying a transition record uses only finitely many exact rational matrix products or certified interval operations over the finite basis and column sets; unresolved comparisons return inconclusive. The dyadic audit uses finitely many exact integer/rational operations. Before each attempt the counter increases, and [F1] allows at most $K$ attempts and no unbounded internal transition search. Every admitted basis replacement discards old factors before computing new certificates. Consequently the procedure terminates with only the stated current-basis outputs or failure/inconclusive status, proving the remaining claims. [F1, step 1.1, step 5.2, given, algebra] ∎
