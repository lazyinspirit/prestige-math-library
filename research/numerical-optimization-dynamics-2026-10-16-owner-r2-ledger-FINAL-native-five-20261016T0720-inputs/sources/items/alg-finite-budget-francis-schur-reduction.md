---
id: alg-finite-budget-francis-schur-reduction
kind: algorithm
title: "Finite-budget computed Francis Schur reduction with explicit statuses"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-exact-francis-hessenberg-qr-step
  - lem-two-sided-scaled-householder-similarity-error
  - lem-exact-rational-two-by-two-discriminant-sign
  - alg-complex-scaled-householder-reflector-step
  - alg-scaled-householder-reflector-formation-and-application
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - def-exact-real-2x2-discriminant-sign-predicate
  - def-real-and-complex-schur-forms
  - def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift
  - lem-real-francis-double-shift-polynomial
  - lem-scaled-householder-step-meets-local-backward-error-premise
  - thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries
  - thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "James Demmel, Math 221 Lecture 16: Hessenberg reduction and implicit Q"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Definition

Input a real or complex square matrix $A\in\mathbb F^{n\times n}$ with $n\ge1$, a finite nonnegative deflation tolerance $\tau$, a nonnegative integer sweep budget $N$, a positive integer stagnation period $h$, finite tables of finite exceptional shifts, optional exact rational/dyadic encodings of its stored real values, and optionally a terminating exact evaluator of [[def-exact-real-2x2-discriminant-sign-predicate]]. A formation `breakdown` is propagated with the operation index and partial factors. Every scalar operation is evaluated in the operationwise model of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]. Any invalid, overflow, or underflow operation returns range-failure with the operation index and partial factors.

For each stored reflector with active indices $S=(s_1,\ldots,s_m)$, vector $v\in\mathbb F^m$, and real computed coefficient $\widehat\tau$, the real or complex formation routine first performs the stated finite left application. Then perform the right application in this fixed order: for each matrix row $i=1,\ldots,n$, compute $d_i=\operatorname{fl}(\sum_{a=1}^m H^L_{i,s_a}v_a)$ by left-to-right rounded products and additions; for $a=1,\ldots,m$, compute $c_a=\operatorname{fl}(\widehat\tau\overline{v_a})$, $g_{ia}=\operatorname{fl}(d_ic_a)$, and $H^R_{i,s_a}=\operatorname{fl}(H^L_{i,s_a}-g_{ia})$. Each complex product uses the six real operations of the arithmetic model. The exact factor appended to $Q$ is $P(v)=I-2vv^*/(v^*v)$; the computed right update uses $\widehat\tau$ as displayed and is not asserted equal to multiplication by $P(v)$. For a matrix-target column, the formation routine's explicit zero writes are retained. In the initial polynomial-vector step there is no matrix-target column: use the entire active row panel for the left update and then apply the right update to the active columns. Record deflation writes separately, including a pure deflation with no following reflector as an identity-transform stage; a local error certificate must account for all other rounding and target-column writes.

1. Reduce $A$ to upper Hessenberg form with Householder similarities. For $k=1,\ldots,\max(n-2,0)$ in increasing order, use active indices $S=\{k+1,\ldots,n\}$, target $x=H_{S,k}$, and trailing left panel $B=H_{S,\{k+1,\ldots,n\}}$ with columns in increasing order. In the real branch use [[alg-scaled-householder-reflector-formation-and-application]] for the finite left application and overwrite; in the complex branch use [[alg-complex-scaled-householder-reflector-step]]. Complete each similarity by the right application above on columns $S$. If the resulting matrix fails the exact upper-Hessenberg zero-pattern check, return bulge-chase-invariant-failure with the partial factors. Store the exact unitary reflector factors as a product representation $Q_0$.
2. At each sweep, test every active first-subdiagonal entry by
   $$|h_{i,i-1}|\le\tau\bigl(|h_{i-1,i-1}|+|h_{i,i}|\bigr).$$
   For a complex entry $z=a+ib$, evaluate $|z|$ by $s=\max(|a|,|b|)$ and $s\sqrt{(a/s)^2+(b/s)^2}$ when $z\ne0$, with divisions, squares, sum, square root and final scaling rounded in the stated order; use $|0|=0$. Return range-failure if this evaluation fails. Compute the diagonal-magnitude sum first, then multiply by $\tau$ in the operationwise model; compare the resulting finite values exactly. When the test holds, set that entry to zero, record its original value as a deflation perturbation, and split the active block. The equality case deflates. Do not use the Hermitian-tridiagonal Wilkinson shift rule for a general Hessenberg matrix.
3. Check for the target Schur block structure after initialization and after each sweep. A complex active block of size at least two uses a single shift, normally its bottom-right entry. A real active block of size at least two uses the real quadratic $p(z)=z^2-sz+t$ with trailing block $\begin{pmatrix}a&b\\c&d\end{pmatrix}$; compute $s=\operatorname{fl}(a+d)$ and $t=\operatorname{fl}(\operatorname{fl}(ad)-\operatorname{fl}(bc))$ in that order, returning range-failure if an operation fails. Maintain a counter for each active block, reset it after any deflation in that block, and after $h$ consecutive sweeps without deflation consume that block's next declared exceptional shift or real quadratic. If the required table entry is absent, return stagnation-exhausted.
4. Apply the corresponding implicit bulge chase from [[alg-exact-francis-hessenberg-qr-step]]. For the initial single-shift vector compute $x_1=\operatorname{fl}(h_{11}-\mu)$ and $x_i=h_{i1}$ for $i>1$. For the initial real double-shift vector, compute $u=He_1$, then $w=Hu$ by left-to-right rounded matrix-vector products, then $x=\operatorname{fl}(\operatorname{fl}(w-su)+te_1)$ componentwise. Compute only the first $r+1$ components from the Hessenberg support pattern; on range failure return the operation index and partial factors. For a chase at column $j$, use active indices $S=I_j$, target $x=H_{S,j}$, and trailing left panel $B=H_{S,\{j+1,\ldots,n\}}$ with columns in increasing order. Call the real or complex formation routine, write the target tail zeros exactly, complete the two-sided update by the right-kernel order above on columns $S$, and append the exact reflector representation to $Q$. In the initial polynomial-vector step there is no matrix-target column; use the full active row panel for the left update and then apply the right update to its active columns. If the exact routine or its finite-precision realization returns bulge-chase-invariant-failure, return that status with the partial matrix and factors. Use [[lem-two-sided-scaled-householder-similarity-error]] to store the proved two-sided coefficient $\alpha_{m_j}=a_{m_j}+b_{m_j}+a_{m_j}b_{m_j}$, with $a$ the target-overwrite coefficient or separate-block coefficient as actually used and $b$ the right separate-block coefficient. This gives $\|E_j\|_F\le\alpha_{m_j}\|\widehat H_{j-1}\|_F$ when its $m_ju<1$ and range hypotheses hold. Apply the same certificate to every Hessenberg-initialization similarity. If any step lacks that certificate, retain the residual diagnostic and set the backward-error-certificate status to inconclusive.
5. Stop with Schur-computed when every complex block has size one, or every real block has size one or is a $2\times2$ block with negative characteristic-polynomial discriminant. Use the supplied evaluator, or the finite integer recipe in [[lem-exact-rational-two-by-two-discriminant-sign]] when exact rational/dyadic encodings are available, for each real block's $\operatorname{discSign}$ as defined in [[def-exact-real-2x2-discriminant-sign-predicate]]. If no exact sign is available, return schur-type-undecided and do not claim Schur-computed. If the target check fails when the sweep count reaches $N$, return budget-exhausted; in particular, with $N=0$ return Schur-computed only when the initialized matrix already has the target block structure. Return the partial matrix and factors on every failure or nonconvergence status.

Let $\widehat T$ be the final returned matrix. The output includes the product representation $Q$, residual matrix $R=Q^*AQ-\widehat T$ and its Frobenius norm as diagnostics, the exact orthogonality bound $0$ for that reflector product, the recorded deflation entries, and either the accumulated backward-error bound when all local certificates exist or certificate status inconclusive. Bound expressions and any claimed upper bounds are evaluated exactly or with rigorous outward allowances; uncorrected rounded residual norms are diagnostics only. A rounded dense matrix formed from $Q$ has its own orthogonality residual and is not asserted exactly unitary. The residual diagnostic does not itself give a forward eigenvalue bound. The procedure asserts no unconditional convergence of any shift schedule.

## Facts & Assumptions

**Given:** A finite input matrix, finite controls and shift tables, and the operationwise arithmetic model.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: every successful operation returns a finite value and every excluded-range or invalid operation returns its specified failure status.

[F2] [[alg-exact-francis-hessenberg-qr-step]]: an exact single- or double-shift bulge chase has a finite reflector loop bounded by the matrix dimension.

[F3] [[alg-scaled-householder-reflector-formation-and-application]]: the current real reflector procedure has an explicit finite operation sequence and range-failure branch, but its definition is real-only and makes no local similarity-error claim.

[F4] [[alg-complex-scaled-householder-reflector-step]]: the local complex wrapper uses the canonical proved scaled arithmetic, with explicit success, zero-column, breakdown and range-failure branches.

[F5] [[lem-two-sided-scaled-householder-similarity-error]]: the real/complex left and right bounds compose to the explicit similarity coefficient $\alpha_m=a_m+b_m+a_mb_m$, including target zero writes.

[F6] [[thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form]]: every real or complex square matrix has an exact unitary Hessenberg reduction.

[F7] [[def-real-and-complex-schur-forms]]: a complex Schur form is upper triangular; a real Schur form is block upper triangular with real scalar blocks and 2x2 blocks of negative discriminant.

[F8] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]: each stored exact Householder reflector is unitary.

[F9] [[def-exact-real-2x2-discriminant-sign-predicate]]: a real 2x2 block has a conjugate nonreal pair exactly when its discriminant sign is $-1$.

[F10] [[lem-exact-rational-two-by-two-discriminant-sign]] supplies a terminating exact discriminant-sign evaluation for rational/dyadic encoded stored real blocks.

## Proof

1.1 The exact Hessenberg target exists by [F6]. The initialization uses at most $n-2$ reflector columns. By [F3] in the real branch and [F4] in the complex branch, each call returns a stated result or an explicit failure. Hence initialization terminates. [given, F3, F4, F6, choose]

1.2 Each sweep performs finitely many deflation comparisons and at most $\max(n-2,0)+1$ initial/chase reflector updates per active block. There are at most $N$ sweeps. By [F1], any arithmetic operation either returns its finite value or terminates with range-failure; the finite control table can terminate with stagnation-exhausted, and the explicit invariant check can terminate with bulge-chase-invariant-failure. [given, F1, F2]

2.1 Therefore the procedure returns Schur-computed, budget-exhausted, stagnation-exhausted, schur-type-undecided, breakdown, range-failure, or bulge-chase-invariant-failure after finitely many operations. By [F7] and [F9], its Schur-computed test is exactly the defined real or complex block structure when every required real discriminant sign is available, either from the supplied evaluator or the exact encoded-integer recipe [F10]. By [F8], the exact reflector product $Q$ is unitary, so its orthogonality residual is zero. The definition withholds a backward-error certificate when a local bound is absent; this is the inconclusive branch specified in step 4. [step 1.1, step 1.2, F5, F7, F8, F9, F10, algebra] ∎
