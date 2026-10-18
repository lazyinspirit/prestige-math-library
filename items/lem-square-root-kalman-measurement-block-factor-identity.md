---
id: lem-square-root-kalman-measurement-block-factor-identity
kind: lemma
title: "The block QR measurement update gives the canonical Kalman update"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-axiom-of-choice
  - lem-one-step-kalman-gaussian-conditioning
  - thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC only through the one-step Gaussian-conditioning supplier when identifying the algebraic update as a conditional law. The factor and matrix identities use no choice."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kevin S. Tracy, A Square-Root Kalman Filter Using Only QR Decompositions"
      url: "https://arxiv.org/pdf/2208.06452"
      locator: "§§3.2–3.4, innovation factor, triangular gain solve, and Algorithm 1"
    - title: "M. A. Salzmann, Some Aspects of Kalman Filtering, Technical Report 140"
      url: "https://gge.ext.unb.ca/Pubs/TR140.pdf"
      locator: "Chapter 3, §§3.3.1 and 3.5.2, square-root covariance measurement update and stability qualification"
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
      locator: "Chapter 4, §4.3, Theorem 4.2 and equations (4.21), (4.27)–(4.29)"
verification:
  precheck: pass
---

## Statement

Let $P^-=L^- (L^-)^T$ and $R=L_RL_R^T$, with real factors of arbitrary
rank. Let $H\in\mathbb R^{p\times n}$ and suppose
$$S=H P^-H^T+R\succ0.$$
Pad $L_R$ with zero columns to at least $p$ columns and $L^-$ with zero
columns to at least $n$ columns. Denote the resulting factors by
$L_R^{\mathrm{pad}}$ and $L^-_{\mathrm{pad}}$, and form
$$Z=\begin{bmatrix}L_R^{\mathrm{pad}}&HL^-_{\mathrm{pad}}\\0&L^-_{\mathrm{pad}}\end{bmatrix}.$$
Then $Z^T$ has at least $p+n$ rows. Take an exact reduced QR factorization
$Z^T=UR$ with $U^TU=I$ and set $L=R^T$. For each $i=1,\ldots,p$,
multiply column $i$ of $L$ by the sign of its diagonal entry. This makes the
first $p$ diagonal entries positive; the signs are well defined because
$S\succ0$. Partition the resulting $L$ as
$$L=\begin{bmatrix}L_{11}&0\\L_{21}&L_{22}\end{bmatrix}$$
at the observation and state dimensions. Then
$$L_{11}L_{11}^T=S,\qquad L_{21}L_{11}^T=P^-H^T,$$
and
$$L_{22}L_{22}^T=P^- -P^-H^TS^{-1}HP^-.$$
For innovation $v=y-Hm^-$, the exact solve $L_{11}z=v$ gives
$m^-+L_{21}z=m^-+P^-H^TS^{-1}v$. Thus the factor update has exactly the
canonical one-step mean and covariance; $L_{22}$ may be singular.

## Facts & Assumptions

**Given:** AC, the real covariance factors and matrices, positive-definite innovation $S$, and exact QR of the padded prearray.

[A1] AC is the choice assumption of the Gaussian conditional-law supplier; the block-matrix identities below add no choice. [[def-axiom-of-choice]]

[F1] For a real matrix with at least as many rows as columns, exact successive Householder QR gives $Z^T=UR$ with $U^TU=I$; rank deficiency is permitted. [[thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts]]

[F2] Under AC, let $U\sim N_d(m,P)$, $q\sim N_n(0,Q)$, and $r\sim N_p(0,R)$ be mutually independent Gaussian vectors, with positive dimensions and positive-semidefinite covariances. Set $X=FU+q$, $Y=HX+r$, $m^-=Fm$, and $P^-=FPF^T+Q$. If $S=HP^-H^T+R$ is positive definite, the everywhere-defined conditional law of $X$ given $Y=y$ has mean $m^-+P^-H^TS^{-1}(y-Hm^-)$ and covariance $P^- -P^-H^TS^{-1}HP^-$, which also equals the Joseph expression. [[lem-one-step-kalman-gaussian-conditioning]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Write $\bar r_R$ and $\bar r_-$ for the padded column counts. They satisfy $\bar r_R\ge p$ and $\bar r_-\ge n$, so $Z^T$ has $\bar r_R+\bar r_-\ge p+n$ rows, as required for the reduced QR. Padding either factor with zero columns leaves its Gram matrix unchanged. Multiplication of the prearray by its transpose therefore gives $$ZZ^T=\begin{bmatrix} L_R^{\mathrm{pad}}(L_R^{\mathrm{pad}})^T+HL^-_{\mathrm{pad}}(L^-_{\mathrm{pad}})^TH^T&HL^-_{\mathrm{pad}}(L^-_{\mathrm{pad}})^T\\ L^-_{\mathrm{pad}}(L^-_{\mathrm{pad}})^TH^T&L^-_{\mathrm{pad}}(L^-_{\mathrm{pad}})^T \end{bmatrix} =\begin{bmatrix}S&HP^-\\P^-H^T&P^- \end{bmatrix}.$$ [given, algebra]

2.1 Initially set $L^0=R^T$ and partition it at dimensions $p,n$. Since $Z^T=UR$ and $U^TU=I$, $L^0(L^0)^T=R^TR=ZZ^T$. Block multiplication gives $L^0_{11}(L^0_{11})^T=S$, $L^0_{21}(L^0_{11})^T=P^-H^T$, and $L^0_{21}(L^0_{21})^T+L^0_{22}(L^0_{22})^T=P^-$. The positive-definite matrix $S=L^0_{11}(L^0_{11})^T$ makes $L^0_{11}$ invertible, so its diagonal entries are nonzero. Let $D$ be the diagonal matrix whose entries are the signs of those entries, and set $L=L^0\operatorname{diag}(D,I_n)$. This flips the first $p$ columns of $L^0$, making the diagonal of $L_{11}=L^0_{11}D$ positive. Because $\operatorname{diag}(D,I_n)$ is orthogonal, $LL^T=L^0(L^0)^T$; moreover $L_{21}=L^0_{21}D$ and $L_{22}=L^0_{22}$. Hence all three displayed block identities remain true. [F1, step 1.1, algebra]

3.1 Because $S\succ0$ and $S=L_{11}L_{11}^T$, the square matrix $L_{11}$ is invertible. From the cross-block identity, $L_{21}=P^-H^T L_{11}^{-T}$; hence $$L_{21}L_{21}^T=P^-H^TL_{11}^{-T}L_{11}^{-1}HP^- =P^-H^TS^{-1}HP^-.$$ Subtracting this equality from the lower-right identity in step 2.1 gives the stated posterior covariance. Since it is also $L_{22}L_{22}^T$, it is positive semidefinite even when $L_{22}$ is singular. [given, step 2.1, algebra]

4.1 The solve $L_{11}z=v$ gives $$L_{21}z=L_{21}L_{11}^{-1}v =P^-H^TL_{11}^{-T}L_{11}^{-1}v =P^-H^TS^{-1}v.$$ When $n,p\ge1$ and these blocks arise in a model satisfying [F2], these are its one-step Gaussian conditional update formulas; for zero-dimensional blocks this lemma asserts only the matrix identities. The matrix calculations themselves are deterministic and use no choice beyond [A1]. [A1, F2, step 2.1, step 3.1, given, algebra] ∎

