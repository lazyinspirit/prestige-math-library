---
id: alg-finite-budget-stable-block-reordering-for-schur-and-qz
kind: algorithm
title: "Finite-budget stable block reordering for Schur and QZ forms"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-real-and-complex-schur-forms
  - def-generalized-schur-form
  - def-verified-linear-residual-certificate-data
  - thm-uniform-linear-residual-solution-enclosure
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
  - thm-gram-schmidt-orthonormalisation
  - lem-neumann-inverse-norm-bound
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-rank-nullity
justified_by:
  - thm-finite-budget-stable-block-reordering-correctness-and-status
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "LAPACK auxiliary routine DLAEXC, double-precision real Schur block
        exchange"
      url: "https://www.netlib.org/lapack/double/dlaexc.f"
      locator: "Complete source, adjacent 1x1 and 2x2 Schur block exchanges, local
        solve, tentative transform, whole-panel updates and explicit rejection."
    - title: "LAPACK auxiliary routine DTGEX2, double-precision generalized real Schur
        block exchange"
      url: "https://www.netlib.org/lapack/double/dtgex2.f"
      locator: "Complete source, coupled generalized Sylvester solve, two-sided
        transformations, whole-panel updates and ill-conditioning rejection. The
        repository procedure uses its own exact arithmetic contract and does not
        adopt LAPACK's rounded thresholds."
verification:
  precheck: pass
---

## Definition

Inputs are an order $d\ge0$ real or complex Schur matrix $T$, or a regular real or complex generalized Schur pair $(S,T)$, with the declared diagonal block partition. Complex Schur and QZ forms have scalar blocks; real Schur forms have scalar blocks or real $2\times2$ blocks; real generalized Schur forms have real $1\times1$ or $2\times2$ blocks. Each generalized diagonal block pair must be regular. Optional accumulated factors are exact unitary/orthogonal products; if omitted they are identity. Other inputs are a CARE selector (strict left half-plane) or DARE selector (strict unit disk), a required integer selected dimension $0\le r\le d$, nonnegative integer budgets $K$ and $W$, a positive local separation threshold $\eta$, and either an exact arithmetic controller or a bounded outward evaluator.

Use the CARE selector with an ordinary Schur form and the DARE selector with a generalized Schur form; an unmatched form-selector combination returns invalid-form.

Before any charged operation, initialize attempts, accepted swaps and primitive/evaluator counts to zero, diagnostic lists to empty, and every uncomputed diagnostic to unavailable. In particular, the actual selected dimension, block labels, boundary and separation predicates, and initial inversion count remain unavailable until their respective scans or tests finish; the requested dimension $r$ is always retained separately. Report only completed tests and certificates, together with the last committed arrays and factors, on an early exit. Unavailable predicates assert neither truth nor falsity.

The entries of the input arrays are treated as their exact represented real or complex values. All local transformed arrays and accumulated factors are retained exactly as finite products; a rounded dense copy is only a separately evaluated diagnostic. Before each scalar primitive or outward evaluation, return work-budget-exhausted if no units of $W$ remain; otherwise consume one unit before requesting the operation. Charge validation, label and inversion-count scans, local construction, and the final ordering scan to this same budget. For rational or dyadic arrays, the exact core uses rational arithmetic and positive square roots, with exact real-algebraic sign comparisons where needed. Exact decisions on arbitrary real inputs are an exact-real arithmetic model, not a bit-computability claim. The bounded-evaluator branch returns arithmetic-inconclusive whenever a needed zero, sign, division, or normalization remains unresolved.

1. Validate dimensions, the declared block pattern, and regularity of each generalized diagonal pair in one finite scan. For ordinary scalar blocks over either field classify $t_{ii}$ by $\operatorname{Re}t_{ii}<0$ or $>0$ for CARE; for real $2\times2$ blocks first verify negative discriminant and then classify by trace less than or greater than zero. For generalized scalar blocks over either field $[s_{ii}:t_{ii}]$, verify the pair is nonzero and classify by $|s_{ii}|<|t_{ii}|$ or $|s_{ii}|>|t_{ii}|$ for DARE; thus $t_{ii}=0$, $s_{ii}\ne0$ is complementary and represents infinity without division. For a real generalized $2\times2$ block, verify $\det(T_b)\ne0$ and that $\det(S_b-\lambda T_b)$ has negative discriminant; its conjugate roots have common squared modulus $\det(S_b)/\det(T_b)$, so classify by strict comparison of this ratio with one, cross-multiplying with the certified sign of $\det(T_b)$. Exact equality with the selected boundary returns boundary-spectrum. A bounded enclosure touching the boundary returns separation-inconclusive. Require that the selected block sizes sum to $r$, or return dimension-mismatch. Invalid patterns or singular local homogeneous pairs return invalid-form. Compute the initial inversion count once by scanning all ordered block pairs after classification.

2. Give every whole block its selected or complementary label. Locate the leftmost adjacent complementary-selected inversion. If none exists, return ordered with the current exact arrays and accumulated factors. If an inversion exists but $K$ swap attempts have already been made, return swap-budget-exhausted. Otherwise consume one attempt before starting its local construction. Never split a real conjugate pair.

3. Let $p,q\in\{1,2\}$ be the two adjacent block sizes (over $\mathbb C$, $p=q=1$), with local blocks
$$T_{JJ}=\begin{bmatrix}A&C\\0&B\end{bmatrix}$$
for ordinary Schur form, or
$$S_{JJ}=\begin{bmatrix}A&C\\0&B\end{bmatrix},\qquad T_{JJ}=\begin{bmatrix}D&F\\0&E\end{bmatrix}$$
for QZ form. With column-vectorization, form the local coefficient system
$$H=I_q\otimes A-B^T\otimes I_p,\qquad h=-\operatorname{vec}(C)$$
for ordinary Schur, with unknown $\operatorname{vec}(R)$, and
$$H=\begin{bmatrix}I_q\otimes A&-B^T\otimes I_p\\I_q\otimes D&-E^T\otimes I_p\end{bmatrix},\qquad h=-\begin{bmatrix}\operatorname{vec}(C)\\\operatorname{vec}(F)\end{bmatrix}$$
for QZ, with unknown $[\operatorname{vec}(R);\operatorname{vec}(L)]$. The transpose in $B^T$ and $E^T$ is intentional, also over $\mathbb C$. Solve $Hx=h$ and $HY=I$ by finite Gaussian elimination with complete pivoting: at each stage scan the finite remaining submatrix, choose an entry of largest certified modulus with lexicographic ties, swap rows and columns, eliminate, and back-substitute while undoing column permutations. An exact all-zero remaining submatrix returns swap-singular. An unresolved pivot or range failure returns separation-inconclusive or range-failure. Verify $Hx=h$ and $HY=I$ exactly, or verify a usable approximate-inverse certificate $\|I-YH\|_2\le\theta<1$ and still solve $Hx=h$ exactly. In the latter case it gives $\|H^{-1}\|_2\le\|Y\|_2/(1-\theta)$. In the exact-inverse branch take $\beta=\|Y\|_F$ in exact arithmetic, or an outward upper bound for that norm; in the approximate-inverse branch take an outward bound for $\|Y\|_2/(1-\theta)$. Require $\eta\beta\le1$; otherwise return swap-separation-inconclusive. Record the threshold, solves, pivot decisions and certificate.

4. For ordinary Schur form set $V=[R;I_q]$. For QZ set $V=[R;I_q]$ and $W_L=[L;I_q]$. Complete the columns of $V$, and separately $W_L$, to exact orthonormal bases by Gram–Schmidt: process the graph columns first, then $e_1,\ldots,e_{p+q}$, skipping exactly zero residuals and normalizing each nonzero residual by the positive square root of its squared norm. The graph columns are independent because their last $q$ rows form $I_q$; the coordinate scan completes a basis. An unresolved zero or normalization decision in bounded mode returns arithmetic-inconclusive.

5. Let $Z_{\rm loc}$ be the ordinary orthogonal/unitary completion; for QZ let $Z_{\rm loc}$ be the right completion and $Q_{\rm loc}$ the left completion. Propose the local transform $Z_{\rm loc}^*T Z_{\rm loc}$ in the ordinary case, or $Q_{\rm loc}^*SZ_{\rm loc}$ and $Q_{\rm loc}^*TZ_{\rm loc}$ in the QZ case. Apply it to the entire affected row and column panels, including upper off-diagonal blocks. The lower-left block is set to exact zero only by the local equations solved in step 3. For a real QZ form, factor each newly formed real $2\times2$ diagonal block as $T_b=L_bR_b$ by Gram–Schmidt on its two columns, apply the embedded $L_b^*$ to the corresponding rows of both arrays, and update $Q_{\rm loc}\leftarrow Q_{\rm loc}L_b$ with the same embedded factor; such a block is nonsingular because its roots are finite and nonreal. A size-one infinite pair requires no division by its zero second coordinate. Commit the provisional panels and factor updates only after every required local operation succeeds, incrementing accepted swaps by one as part of that same commit; otherwise return the previous committed arrays with a failed-attempt diagnostic and leave accepted swaps unchanged.

6. After a committed exchange, swap the two labels and sizes and return to step 2. Ordinary accumulated factors are updated by right multiplication with $Z_{\rm loc}$; generalized accumulated factors are updated as $Q\leftarrow QQ_{\rm loc}$ and $Z\leftarrow ZZ_{\rm loc}$. The first $r$ columns of the updated factor are reported as the selected basis candidate; in QZ the right factor $Z$, not the left factor $Q$, supplies the right deflating basis.

On every exit return the current partial form, exact product factors, status, selected dimension, boundary and separation predicates, initial inversion count, attempts, accepted swaps, primitive/evaluator counts, original residual certificates, local inverse-norm certificates, and any residual transport data. Other statuses are work-budget-exhausted, arithmetic-inconclusive, range-failure, invalid-form, dimension-mismatch, boundary-spectrum, separation-inconclusive, swap-singular, swap-separation-inconclusive, and swap-budget-exhausted. ordered is distinct from any Riccati acceptance status. Reordering a computed form does not assert a structured Hamiltonian or symplectic backward-error theorem.

## Facts & Assumptions

**Given:** The exact represented Schur or generalized Schur input, its block partition, selector, required dimension, two finite budgets and the declared exact controller or bounded evaluator.

[F1] [[def-real-and-complex-schur-forms]]: a complex Schur form is upper triangular; a real Schur form is block upper triangular with $1\times1$ blocks and real $2\times2$ blocks of negative discriminant.

[F2] [[def-generalized-schur-form]]: complex generalized Schur factors are unitary with upper-triangular arrays and nonzero diagonal homogeneous pairs; the real form retains whole $1\times1$ and $2\times2$ diagonal blocks.

[F3] [[def-verified-linear-residual-certificate-data]]: a uniform approximate-inverse/residual certificate is usable only under its stated strict norm bound.

[F4] [[thm-uniform-linear-residual-solution-enclosure]]: usable certificate data bound every exact solution; unavailable or unusable data do not assert a finite enclosure.

[F5] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: a finite outward evaluator enclosure contains the exact value, while non-finite statuses make no finite claim.

[F6] [[thm-gram-schmidt-orthonormalisation]]: finite independent vectors yield an orthonormal list with the same successive spans.

[F7] [[lem-neumann-inverse-norm-bound]]: if $\|E\|_2\le\theta<1$, then $I-E$ is invertible and its inverse norm is at most $(1-\theta)^{-1}$.

[F8] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: compatible operator norms are submultiplicative.

[F9] [[thm-rank-nullity]]: an injective or surjective endomorphism of a finite-dimensional space is bijective.

## Proof

1.1 The validation scan and each selector test examine finitely many matrix entries or declared blocks. The listed Schur forms and homogeneous block conventions are exactly [F1] and [F2]; every sign decision either has an exact result or a finite outward enclosure by [F5]. Invalid structure, boundary equality, an unresolved enclosure, or a dimension mismatch takes its declared return branch before a swap is committed. [given, F1, F2, F5, algebra]

1.2 At each local attempt $p,q\le2$, so the coefficient matrix has order at most eight and the pivot search is finite. Complete pivoting uses invertible row and column permutations; each elimination subtracts a pivot-row multiple and is reversed by adding it back. Exact back-substitution therefore solves the recorded system or detects an exact zero remaining block. If $\|I-YH\|_2\le\theta<1$, [F7] makes $YH$ invertible; $(YH)^{-1}Y$ is a left inverse of square $H$, so [F9] makes $H$ invertible and [F8] gives $\|H^{-1}\|_2\le\|Y\|_2/(1-\theta)$. The routine still verifies $Hx=h$ exactly. An unavailable solve, comparison, or bound takes its explicit failure status. [F3, F4, F5, F7, F8, F9, given, algebra]

2.1 The last $q$ rows of each graph matrix $[R;I_q]$ and $[L;I_q]$ form $I_q$, so both have independent columns. By [F6], Gram–Schmidt gives orthonormal graph columns with the same span. If the current span is proper, some standard coordinate vector lies outside it because those vectors span $F^{p+q}$; the finite scan therefore completes a basis. [F6, step 1.1, algebra]

3.1 All remaining loops are finite scans of blocks, rows, columns, pivots, or the bounded standard basis. Every arithmetic or evaluation request consumes one unit of $W$ before execution, and every local attempt consumes one unit of $K$ before construction. Each failure returns without committing provisional data. Thus the procedure returns a declared status after finitely many operations or reaches ordered after finitely many committed exchanges; no unresolved comparison is retried indefinitely. [given, step 1.1, step 1.2, step 2.1, algebra] ∎
