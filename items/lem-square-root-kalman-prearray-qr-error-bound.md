---
id: lem-square-root-kalman-prearray-qr-error-bound
kind: lemma
title: "Product and Householder QR errors bound the represented joint covariance"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - thm-floating-point-dot-product-componentwise-and-normwise-error-bounds
  - alg-scaled-householder-reflector-formation-and-application
  - lem-scaled-householder-step-meets-local-backward-error-premise
  - thm-scaled-householder-qr-backward-stability
  - lem-square-root-kalman-gram-perturbation-bound
  - lem-square-root-kalman-householder-error-rational-envelope
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kevin S. Tracy, A Square-Root Kalman Filter Using Only QR Decompositions"
      url: "https://arxiv.org/pdf/2208.06452"
      locator: "§§2–3.4, QR covariance arrays and square-root filtering"
    - title: "M. A. Salzmann, Some Aspects of Kalman Filtering, Technical Report 140"
      url: "https://gge.ext.unb.ca/Pubs/TR140.pdf"
      locator: "Chapter 3, §§3.3.1 and 3.5.2, orthogonal-factor square-root covariance updates"
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
      locator: "Chapter 4, §4.3, equations (4.20)–(4.29), the canonical covariance blocks being approximated"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $G\in\mathbb R^{n\times q}$, with $q\ge n\ge1$, be an exact prediction or
measurement prearray. Work in the operationwise no-underflow model with
$0<u<1$ and $qu<1$. Let $\widehat G$ be its computed version and assume
$$\|\widehat G-G\|_F\le e_{\mathrm{form}}+e_{\mathrm{in}},$$
where $e_{\mathrm{form}},e_{\mathrm{in}}\ge0$, $e_{\mathrm{form}}$ bounds
rounded products used to form the array, and $e_{\mathrm{in}}$ bounds
separately specified input-factor uncertainty. If
the successful scaled-Householder QR of $\widehat G^T\in\mathbb R^{q\times
n}$ has reduced upper factor $R$ and $L=R^T$, set
$$\kappa_q=\kappa_q(u),\qquad \beta_{q,n}=(1+\kappa_q)^n-1,\qquad \epsilon=e_{\mathrm{form}}+e_{\mathrm{in}}+ \beta_{q,n}\|\widehat G\|_F,$$
where $\kappa_q$ is the explicit local coefficient in
[[lem-scaled-householder-step-meets-local-backward-error-premise]]. Then
$$\|LL^T-GG^T\|_F\le2\|G\|_F\epsilon+\epsilon^2.$$
If $200qnu<1$, the rational envelope lemma
[[lem-square-root-kalman-householder-error-rational-envelope]] gives
$\beta_{q,n}\le\eta_{q,n}:=200qnu/(1-200qnu)$. In that regime the same
conclusion holds with
$\epsilon=e_{\mathrm{form}}+e_{\mathrm{in}}+\eta_{q,n}\|\widehat G\|_F$.
For one left-to-right rounded product $\widehat{UV}$ with positive inner
dimension $r\ge1$ and $ru<1$, a valid choice is
$e_{\mathrm{form}}=\gamma_r\|U\|_F\|V\|_F$. A product with zero inner
dimension is exactly zero and contributes zero to $e_{\mathrm{form}}$; for
several disjoint product blocks, sum the nonempty-product bounds. This
conclusion allows rank loss and does not imply
that the nearby joint covariance has the original independent-noise block
structure.

## Facts & Assumptions

**Given:** The exact and computed arrays, operationwise round-to-nearest arithmetic with all successful nonzero intermediates normal, $ru<1$ for each nonempty product, and successful scaled-Householder QR with $qu<1$.

[F1] A left-to-right computed dot product of length $r$ has componentwise relative error at most $\gamma_r=ru/(1-ru)$, and its absolute error is at most $\gamma_r\sum_j|x_jy_j|$. [[thm-floating-point-dot-product-componentwise-and-normwise-error-bounds]]

[F2] Successful scaled-Householder QR of an $m\times n$ real matrix, $m\ge n$, gives $A+\Delta A=\widehat Q\widehat R$ with $\|\Delta A\|_F\le((1+\kappa_m)^n-1)\|A\|_F$; the coefficient comes from the local computed-reflector bound. [[thm-scaled-householder-qr-backward-stability]]

[F3] For any factor perturbation $E$, the Gram-matrix error is at most $2\|G\|_F\|E\|_F+\|E\|_F^2$. [[lem-square-root-kalman-gram-perturbation-bound]]

[F4] If $200qnu<1$, then $\beta_{q,n}\le200qnu/(1-200qnu)$. [[lem-square-root-kalman-householder-error-rational-envelope]]

[F5] For real vectors $a,b$, if $b\ne0$ then expanding $0\le\|a-tb\|_2^2$ at $t=(a^Tb)/\|b\|_2^2$ gives $|a^Tb|\le\|a\|_2\|b\|_2$; if $b=0$ the inequality is immediate.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Exact-zero operations satisfy the relative model with error factor zero, so the rounded-factor expansion underlying [F1] also covers zero products and partial sums in the present model. An empty inner product is exact zero. For each entry of a nonempty product $UV$, [F1] therefore gives an error at most $\gamma_r\sum_j|U_{ij}V_{jk}|$. Apply [F5] to the vectors $(|U_{ij}|)_j$ and $(|V_{jk}|)_j$, then square and sum over entries: $$\sum_{i,k}\left(\sum_j|U_{ij}||V_{jk}|\right)^2 \le\sum_{i,k}\left(\sum_j|U_{ij}|^2\right) \left(\sum_j|V_{jk}|^2\right) =\|U\|_F^2\|V\|_F^2.$$ Therefore $\|\widehat{UV}-UV\|_F\le\gamma_r\|U\|_F\|V\|_F$. Disjoint product blocks add by the Frobenius norm definition, and separately bounded input-factor errors add by the triangle inequality. [F1, F5, given, algebra]

1.2 Apply [F2] to $\widehat G^T$, which has $q\ge n$ rows and $n$ columns. Transposing its factorization gives $$\widehat G+\Delta^T=R^T\widehat Q^T=L\widehat Q^T, \qquad \|\Delta^T\|_F\le\beta_{q,n}\|\widehat G\|_F.$$ Set $E=(\widehat G-G)+\Delta^T$. Then $\|E\|_F\le\epsilon$. Since $\widehat Q^T\widehat Q=I$, the transposed factorization also gives $$LL^T=L\widehat Q^T\widehat QL^T =(G+E)(G+E)^T.$$ [F2, given, algebra]

2.1 Apply [F3] to the factor identity and perturbation $E$ from step 1.2. It gives $\|LL^T-GG^T\|_F\le2\|G\|_F\epsilon+\epsilon^2$ for the stated $\beta_{q,n}$ choice. Under $200qnu<1$, [F4] makes this epsilon no larger than the version using $\eta_{q,n}$. Since $t\mapsto2\|G\|_Ft+t^2$ is increasing for $t\ge0$, the same covariance bound follows with the rational-envelope epsilon. The argument permits zero singular values and places no structural restriction on the perturbation of $GG^T$. [F3, F4, step 1.2, algebra] ∎

