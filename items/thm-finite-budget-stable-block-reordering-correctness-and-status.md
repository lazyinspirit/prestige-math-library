---
id: thm-finite-budget-stable-block-reordering-correctness-and-status
kind: theorem
title: "Finite-budget stable block reordering has exact adjacent-swap
  correctness and status"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - alg-finite-budget-stable-block-reordering-for-schur-and-qz
  - thm-sylvester-unique-solvability-spectral-separation
  - thm-root-bound-for-polynomials-over-a-domain
  - thm-operator-invertible-iff-determinant-nonzero
  - thm-rank-nullity
  - thm-gram-schmidt-orthonormalisation
  - thm-determinant-multiplicative
  - lem-block-upper-triangular-pencil-determinant-factorizes
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - lem-neumann-inverse-norm-bound
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "LAPACK auxiliary routine DLAEXC, double-precision real Schur block
        exchange"
      url: "https://www.netlib.org/lapack/double/dlaexc.f"
      locator: "Complete source, adjacent Schur-block exchanges and whole-panel
        transformation. Its rounded thresholds are not asserted here."
    - title: "LAPACK auxiliary routine DTGEX2, double-precision generalized real Schur
        block exchange"
      url: "https://www.netlib.org/lapack/double/dtgex2.f"
      locator: "Complete source, coupled generalized Sylvester solve and two-sided
        block exchange. Its rounded thresholds are not asserted here."
verification:
  precheck: pass
---

## Statement

For an order-$d$ real or complex Schur form, or a regular generalized Schur form, run [[alg-finite-budget-stable-block-reordering-for-schur-and-qz]] with its declared selector, selected dimension $r$, swap budget $K$, primitive/evaluator budget $W$, and positive local threshold $\eta$. Every execution returns after its finite scans or an explicit budget, boundary, form, separation, arithmetic, or range status. Every committed exact swap uses orthogonal/unitary transformations, preserves the appropriate Schur form over the original field, and exchanges exactly the two adjacent block spectra; for generalized Schur form it exchanges the homogeneous roots with multiplicity, including infinity.

Let $b$ be the initial number of diagonal blocks and $I$ the number of complementary-before-selected block pairs. If the initial selected block sizes sum to $r$, all selector comparisons are strict, every local construction and certificate succeeds, every inverse-norm threshold passes, $K\ge I$, and $W$ suffices for the entire execution, including validation, label and inversion scans, all $I$ swaps, and the final ordering scan, the procedure returns ordered. The first $r$ columns of the updated ordinary Schur factor then span the selected invariant subspace of the current computed form; the first $r$ columns of the updated right QZ factor span the selected right deflating subspace of the current computed pencil. When an original reduction residual is present, this is the exact subspace of its represented nearby matrix or pencil, not automatically the original data's subspace. Each accepted swap decreases the inversion count by one and $I\le b(b-1)/2$. Boundary, small-gap, arithmetic, or budget exits do not prove that a stabilizing Riccati solution does not exist.

If the ordinary input relation is $Q_0^*AQ_0=T_0+R_0$ and the cumulative exact reordering factor is $V$, then $Q_{\rm new}=Q_0V$, $T_{\rm new}=V^*T_0V$, and the new residual is $V^*R_0V$, with unchanged Frobenius norm. If the generalized input relations are $Q_0^*AZ_0=S_0+R_A$ and $Q_0^*BZ_0=T_0+R_B$, then for cumulative left and right factors $U,V$ the new residuals are $U^*R_AV$ and $U^*R_BV$, again with unchanged Frobenius norms. Thus exact reordering preserves the original unstructured reduction certificate but creates no structured Hamiltonian or symplectic error theorem.

For $k$ local swap attempts, the scalar-core work is $O(d^2+kd)$ in the declared exact scalar/evaluator unit model: the initial structure scan costs $O(d^2)$ and each local system has order at most eight while whole-panel updates touch $O(d)$ entries. On success $k=I$, so the worst-case swap core is $O(d^3)$. Exact algebraic bit cost, evaluator implementation cost beyond the declared units, and dense evaluation of product factors are separate. From $L_0$ bounded-support input factors, directly evaluating the first $r$ columns costs $O(L_0dr+Idr)$; a dense residual multiplication, if used, has its own actual $O(d^3)$ cost.

## Facts & Assumptions

**Given:** The algorithm's admitted exact Schur or generalized Schur input, block partition, strict selector, selected dimension, finite budgets and local exact or bounded-evaluator certificates.

[F1] [[alg-finite-budget-stable-block-reordering-for-schur-and-qz]]: it forms the stated ordinary or generalized Sylvester systems, completes exact orthonormal bases, applies whole-panel transformations transactionally, and returns explicit finite statuses.

[F2] [[thm-sylvester-unique-solvability-spectral-separation]]: $X\mapsto AX+XB$ is invertible exactly when $\sigma(A)\cap(-\sigma(B))=\varnothing$.

[F3] [[thm-root-bound-for-polynomials-over-a-domain]]: a nonzero polynomial of degree $q$ over an integral domain has at most $q$ distinct roots.

[F4] [[thm-operator-invertible-iff-determinant-nonzero]]: a finite-dimensional square operator is invertible exactly when its determinant is nonzero.

[F5] [[thm-rank-nullity]]: an injective square map on a finite-dimensional space is invertible.

[F6] [[thm-gram-schmidt-orthonormalisation]]: Gram–Schmidt gives an orthonormal list with the same successive spans as a finite independent input list.

[F7] [[thm-determinant-multiplicative]]: determinants multiply under finite square matrix products.

[F8] [[lem-block-upper-triangular-pencil-determinant-factorizes]]: the homogeneous determinant of a block upper-triangular pencil is the product of the diagonal-block homogeneous determinants.

[F9] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: unitary changes preserve the Frobenius norm and $\|M\|_2\le\|M\|_F$.

[F10] [[lem-neumann-inverse-norm-bound]]: if $\|E\|_2\le\theta<1$, then $\|(I-E)^{-1}\|_2\le(1-\theta)^{-1}$.

[F11] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: compatible operator norms are submultiplicative.

## Proof

1.1 For an ordinary complex scalar block the diagonal entry itself classifies the root, while a real $2\times2$ block with negative discriminant has conjugate roots with real part $\operatorname{tr}(T_b)/2$. For a generalized scalar pair $[s:t]$, a finite root is $s/t$, so $|s|<|t|$ is exactly the disk predicate and $t=0$, $s\ne0$ is infinity and complementary. For a real generalized $2\times2$ pair with finite nonreal roots, the root product is $\det(S_b)/\det(T_b)=|\lambda|^2$. Thus the procedure labels whole blocks exactly and detects equality at the selector boundary. [F1, given, algebra]

1.2 For ordinary adjacent diagonal blocks $A,B$, column-wise expansion gives $\operatorname{vec}(AR-RB)=(I_q\otimes A-B^T\otimes I_p)\operatorname{vec}R$. The selected and complementary spectra are disjoint, so [F2] applied to $X\mapsto AX+X(-B)$ makes this square coefficient operator invertible, giving a unique local solve. [F1, F2, given, algebra]

1.3 For generalized adjacent pairs $(A,D)$ and $(B,E)$, their homogeneous root sets are disjoint and both pairs are regular. The polynomials $\det(A-\zeta D)$ and $\det(B-\zeta E)$ are nonzero of degrees at most $p,q$; among $p+q+1$ distinct real integers, [F3] gives a $\zeta$ for which $A_0=A-\zeta D$ and $B_0=B-\zeta E$ have nonzero determinants, hence are invertible by [F4]. Each homogeneous root $[\alpha:\beta]$ maps injectively to $\mu=\beta/(\alpha-\zeta\beta)$, an eigenvalue of $DA_0^{-1}$ because $D-\mu A_0=-(\beta A-\alpha D)/(\alpha-\zeta\beta)$; this also maps infinity to zero, and maps the second pair to $EB_0^{-1}$, so the ordinary spectra remain disjoint. If $AR-LB=0$ and $DR-LE=0$, then $A_0R=LB_0$, hence $R=A_0^{-1}LB_0$ and $DA_0^{-1}L=LEB_0^{-1}$; [F2] forces $L=0$, then $R=0$. The square generalized Sylvester system has zero kernel, so [F5] makes it invertible; for real blocks its real coefficient matrix has the same nonzero determinant as its complexification. [F1, F2, F3, F4, F5, given, construct, algebra]

1.4 For ordinary input, $Q_0^*AQ_0=T_0+R_0$ and $Q_{\rm new}=Q_0V$ imply $Q_{\rm new}^*AQ_{\rm new}=V^*T_0V+V^*R_0V$. For QZ, substituting $Q_{\rm new}=Q_0U$ and $Z_{\rm new}=Z_0V$ into the two input relations gives residuals $U^*R_AV$ and $U^*R_BV$; [F9] preserves their Frobenius norms. These unstructured residual relations assert no structured pencil perturbation. [F1, F9, given, algebra]

2.1 Each exact Gaussian-elimination pivot is nonzero; row and column permutations and row eliminations preserve the solution set. A zero remaining block before all pivots would contradict the invertibility in steps 1.2–1.3. Back-substitution gives the unique exact solution and applying the same operations to the coordinate vectors gives the inverse. In the approximate branch, $\|I-YH\|_2\le\theta<1$ and [F10] make $YH$ invertible; finite-dimensional square rank and [F11] give $\|H^{-1}\|_2=\|(YH)^{-1}Y\|_2\le\|Y\|_2/(1-\theta)$. Thus each committed swap has an exact solve and valid recorded inverse bound. [F1, F5, F9, F10, F11, step 1.2, step 1.3, algebra]

2.2 Every complementary-selected inversion can be removed by swapping an adjacent complementary-selected pair, which decreases the inversion count by one and leaves all other relative block orders unchanged. Thus $I\le b(b-1)/2$ and, after $I$ successful swaps, no inversion remains. The finite scans, local systems, and exact return branches in [F1] give a finite declared status; exhausted $K$ or $W$ returns its budget status. [F1, step 1.1, algebra]

3.1 The columns of $[R;I_q]$ and $[L;I_q]$ are independent because their last $q$ rows form $I_q$. Applying [F6] gives orthonormal graph columns; if their span is proper, some standard coordinate vector lies outside it, so the finite scan completes each required local basis. [F1, F6, step 2.1, algebra]

4.1 In the ordinary case $AR-RB=-C$ gives $\begin{bmatrix}A&C\\0&B\end{bmatrix}\begin{bmatrix}R\\I_q\end{bmatrix}=\begin{bmatrix}R\\I_q\end{bmatrix}B$. Writing $[R;I_q]=Z_1R_v$ with $R_v$ invertible shows the leading transformed block is similar to $B$. The quotient map $\pi(x,y)=x-Ry$ has kernel this graph and satisfies $\pi T_{JJ}=A\pi$, so its restriction to the orthogonal complement is an isomorphism onto the quotient and the trailing block is similar to $A$. Embedded local unitary updates preserve the surrounding block triangular zeros because rows below the pair vanish in its columns and columns before the pair vanish in its rows; the solved equations make the new lower-left block zero. Similarity preserves the characteristic polynomial and negative discriminant of a real $2\times2$ block, so whole conjugate pairs remain intact. [F1, F7, step 3.1, algebra]

4.2 In the generalized case the two local equations give $S_{JJ}[R;I_q]=[L;I_q]B$ and $T_{JJ}[R;I_q]=[L;I_q]E$. Writing the graph matrices as $Z_1R_v$ and $Q_1R_w$ gives a zero lower-left block and a leading pair strictly equivalent to $(B,E)$. The full homogeneous determinant changes only by nonzero factors under exact left/right transforms [F7] and factors across diagonal pairs [F8]; cancelling the nonzero leading polynomial shows that the trailing pair has exactly the old first pair's homogeneous roots with multiplicity, including infinity and regularity. A real $2\times2$ pair with a finite nonreal conjugate root pair has nonsingular $T$ block, since otherwise its determinant polynomial has degree at most one. The prescribed QR restores triangularity of this block; applying the same left factor to both QZ arrays and to $Q$ changes the homogeneous determinant only by a nonzero factor and preserves the lower-left zero. An infinite scalar pair keeps its zero second coordinate and is never divided by it. The left update changes $Q$, while the right update changes $Z$, so the selected right deflating basis comes from $Z$. [F1, F7, F8, step 3.1, algebra]

4.3 The initial structure scan costs $O(d^2)$ scalar/evaluator units. Each local solve has order at most eight, each basis completion has bounded local dimension, and each panel update touches $O(d)$ entries; therefore $k$ attempts cost $O(d^2+kd)$. On success $k=I\le b(b-1)/2\le d(d-1)/2$, giving $O(d^3)$ worst-case swap work. Evaluating $L_0$ bounded-support input factors on $r$ columns costs $O(L_0dr+Idr)$; dense residual multiplication costs its separate $O(d^3)$. These counts do not bound algebraic bit cost or evaluator implementation cost. [F1, step 2.2, step 3.1, given, algebra]

5.1 Under the stated sufficient conditions, including enough $W$ for every scan through the final ordered return, steps 2.2 and 4.1–4.3 show that all selected blocks move before every complementary block without splitting real pairs; the first $r$ factor columns therefore span the selected invariant subspace or right deflating subspace of the represented computed form. Step 1.4 transports only the original unstructured residual certificate. Algorithm [F1] returns explicitly on boundary, separation, arithmetic, range, form, and budget failures; none of those statuses proves nonexistence of a stabilizing Riccati solution or supplies structured backward error. [F1, step 1.4, step 2.2, step 4.1, step 4.2, step 4.3, algebra] ∎
