---
id: alg-finite-budget-square-root-kalman-filter
kind: algorithm
title: "Finite-horizon square-root Kalman filter by rectangular factors and QR"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-linear-gaussian-state-space-model-with-independent-noises
  - alg-kalman-filter
  - def-full-reduced-and-column-pivoted-computational-qr-factorisations
  - thm-kalman-filter-is-exact-posterior
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - def-forward-and-back-substitution-for-triangular-systems
  - alg-scaled-householder-reflector-formation-and-application
  - lem-square-root-kalman-prediction-factor-identity
  - lem-square-root-kalman-measurement-block-factor-identity
justified_by: []
axiom_use: "The statistical target inherits AC from the linear-Gaussian model and exact-posterior theorem. The matrix-factor identities and numerical error bounds use no choice."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Kevin S. Tracy, A Square-Root Kalman Filter Using Only QR Decompositions"
      url: "https://arxiv.org/pdf/2208.06452"
      locator: "§§2–3.4, prediction, innovation and update QR arrays and Algorithm 1"
    - title: "M. A. Salzmann, Some Aspects of Kalman Filtering, Technical Report 140"
      url: "https://gge.ext.unb.ca/Pubs/TR140.pdf"
      locator: "Chapter 3, §3.3.1 and §3.5.2, square-root covariance factors and limits of stability claims"
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
      locator: "Chapter 4, §4.3, Theorem 4.2 and equations (4.20)–(4.29), canonical Kalman recursion"
verification:
  precheck: n/a
---

## Definition

Fix a finite horizon $T\ge0$, positive state dimensions $d_k$ for
$0\le k\le T$, and positive observation dimensions $p_k$ for
$1\le k\le T$. Inputs are real finite matrices $F_k\in\mathbb R^{d_k\times
d_{k-1}}$, $H_k\in\mathbb R^{p_k\times d_k}$, observation vectors
$y_k\in\mathbb R^{p_k}$, and an initial mean $m_0\in\mathbb R^{d_0}$.
For each covariance supply a rectangular real factor
$$L_0\in\mathbb R^{d_0\times r_0},\qquad L_{Q,k}\in\mathbb R^{d_k\times r_{Q,k}},\qquad L_{R,k}\in\mathbb R^{p_k\times r_{R,k}},$$
where each column count is any finite nonnegative integer. The represented
covariances are $P_0=L_0L_0^T$, $Q_k=L_{Q,k}L_{Q,k}^T$, and
$R_k=L_{R,k}L_{R,k}^T$. Thus zero columns and rank-deficient factors are
allowed. The admissible statistical inputs are those of
[[def-linear-gaussian-state-space-model-with-independent-noises]] for which
the canonical innovation $S_k=H_kP_k^-H_k^T+R_k$ is positive definite at each
step. The [[def-axiom-of-choice]] assumption is inherited only for the
interpretation as a posterior; the finite matrix procedure itself uses no
probability-space choice.

Choose a unit roundoff $u$ in the no-underflow operationwise model of
[[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]].
During an update, whenever an entry $a$ of a supplied matrix, factor, or
vector is read as an arithmetic operand or copied into a QR prearray, first
convert it to $\operatorname{fl}(a)$ in that format. Return `range-failure`
at that read if conversion fails under the same no-underflow rule. Read
operands from left to right; for products and block copies, visit output
entries column by column, with increasing row index within each column.
Repeat the conversion on each such read; the supplied arrays themselves
remain unchanged. The formulas below use these converted entries during
execution, while $P_0,Q_k,R_k,F_k,H_k,y_k,m_0$ denote the original exact
target data in comparisons with the canonical recursion. In particular,
conversion errors must be included in any certified local error bounds.
For $T=0$, return the input pair immediately without reading or converting
its entries.
Every matrix or vector product below is evaluated as left-to-right dot
products. A nonzero nonnormal intermediate, nonfinite result, zero innovation
diagonal, or failed factorization returns a status and the first failing step;
it is not coerced into a covariance
estimate. Each arithmetic and factorization failure has a declared return;
there is no iterative convergence loop or unbounded refinement search.

The QR operation used below is the following unpivoted reduced procedure on
$A\in\mathbb R^{m\times n}$ with floating-point entries and $m\ge n\ge1$. Initialize a working array
$R^{(0)}=A$ and an empty ordered reflector list. For $j=1,\ldots,n$, take
$x=R^{(j-1)}_{j:m,j}$ and $B=R^{(j-1)}_{j:m,j+1:n}$, call
[[alg-scaled-householder-reflector-formation-and-application]] on $(x,B)$,
and, on success, replace the active block by its returned $C_+$. If the call
fails, return its first status and step. Store the exact orthogonal reflector
represented by the returned record, or the identity for its identity branch.
After $n$ successful steps, return the computed upper-triangular block
$R=R^{(n)}_{1:n,1:n}$ and the ordered reflector list representing the exact
product $Q_{\rm full}$ whose first $n$ columns are the reduced $Q$ factor.
Do not materialize a rounded dense $Q$. The conventions are those of
[[def-full-reduced-and-column-pivoted-computational-qr-factorisations]].

Initialize $m_{0|0}=m_0$ and $L_{0|0}=L_0$. At step $k$, perform the
following operations in order.

1. Compute the rounded mean prediction $\widehat m_{k|k-1}
=\operatorname{fl}(F_k\widehat m_{k-1|k-1})$. Form the rounded factor product
$\widehat X_k=\operatorname{fl}(F_kL_{k-1|k-1})$. Concatenate
$\widehat G_k=[\widehat X_k\;L_{Q,k}]$ and append zero columns until its
column count is $q_k=\max(d_k,r_{k-1|k-1}+r_{Q,k})$. Apply the above
reduced Householder QR procedure to
$\widehat G_k^T\in\mathbb R^{q_k\times d_k}$. On success let $R_k^{p}$ be
its reduced upper factor and set $L_{k|k-1}= (R_k^{p})^T$. No diagonal
positivity or full-rank condition is imposed on this prediction factor.

2. Compute $\widehat v_k=\operatorname{fl}
(y_k-\operatorname{fl}(H_k\widehat m_{k|k-1}))$. Pad $L_{R,k}$ with zero
columns to $\bar r_k=\max(p_k,r_{R,k})$ columns. Compute
$\widehat Y_k=\operatorname{fl}(H_kL_{k|k-1})$ and form the block prearray
$$\widehat Z_k= \begin{bmatrix} L_{R,k}^{\mathrm{pad}} & \widehat Y_k\\ 0 & L_{k|k-1} \end{bmatrix}.$$
Apply the above reduced Householder QR procedure to
$\widehat Z_k^T\in\mathbb R^{(\bar r_k+d_k)\times(p_k+d_k)}$. Its row
count is at least its column count: the prediction step gives
$L_{k|k-1}\in\mathbb R^{d_k\times d_k}$, and $\bar r_k\ge p_k$. On success
transpose its reduced upper factor and partition the resulting lower factor as
$$\widehat L_k=\begin{bmatrix}\widehat L_{11,k}&0\\ \widehat L_{21,k}&\widehat L_{22,k}\end{bmatrix},$$
with block sizes $p_k$ and $d_k$. If any diagonal entry of $\widehat
L_{11,k}$ is zero, return `innovation-factorization-failure`. Otherwise,
for each $i=1,\ldots,p_k$, multiply column $i$ of the whole factor
$\widehat L_k$ by the sign of its diagonal entry. These exact sign changes
make $\widehat L_{11,k}$ have positive diagonal and preserve
$\widehat L_k\widehat L_k^T$ and its lower block structure. Use the resulting
factor blocks below. No invertibility or positive diagonal is required of
$\widehat L_{22,k}$.

3. Solve $\widehat L_{11,k}\widehat z_k=\widehat v_k$ by forward
substitution in the order of
[[def-forward-and-back-substitution-for-triangular-systems]]. Set
$$\widehat m_{k|k}=\operatorname{fl} (\widehat m_{k|k-1}+\widehat L_{21,k}\widehat z_k),\qquad L_{k|k}=\widehat L_{22,k}.$$
Do not form a covariance downdate or an explicit matrix inverse. The
factor-defined covariance $L_{k|k}L_{k|k}^T$ is positive semidefinite as an
exact product of the returned entries; no claim is made that a separately
rounded materialization of that product remains positive semidefinite.

4. If any arithmetic operation or QR call returns a failure status, return the
first such failure and its step; if the leading innovation block has a zero
diagonal, return innovation-factorization-failure. Otherwise the finite loop
returns the predicted and updated mean/factor arrays with success. The success
status records arithmetic and factorization completion only.

For $T=0$ the loop is empty and the output is $(m_0,L_0)$ with no update
status. In exact arithmetic, the result implements the covariance and mean map of
[[alg-kalman-filter]]. The prediction factor identity is supplied by
[[lem-square-root-kalman-prediction-factor-identity]], and the measurement
block identity by
[[lem-square-root-kalman-measurement-block-factor-identity]]. Under the
inherited AC assumption
its statistical interpretation is the one in
[[thm-kalman-filter-is-exact-posterior]]. The nearby covariance supplied by
an unstructured QR backward error may introduce cross-correlations between
model blocks. Therefore no backward-stability claim within the original
independent-noise state-space model, and no uniform-in-time accuracy or
stability claim, is part of this procedure.
