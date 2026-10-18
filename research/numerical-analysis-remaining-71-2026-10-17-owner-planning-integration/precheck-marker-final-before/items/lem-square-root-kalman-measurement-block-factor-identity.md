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
  precheck: pending
---

## Statement

Let $P^-=L^- (L^-)^T$ and $R=L_RL_R^T$, with real factors of arbitrary
rank. Let $H\in\mathbb R^{p\times n}$ and suppose
$$S=H P^-H^T+R\succ0.$$
Pad $L_R$ with zero columns so it has at least $p$ columns and form
$$Z=\begin{bmatrix}L_R^{\mathrm{pad}}&HL^-\\0&L^-\end{bmatrix}.$$
Take an exact reduced QR factorization $Z^T=UR$ with $U^TU=I$, set
$L=R^T$, and partition
$$L=\begin{bmatrix}L_{11}&0\\L_{21}&L_{22}\end{bmatrix}$$
at the observation and state dimensions. If needed, multiply each of the
first $p$ rows of $R$ by the sign of its diagonal entry, so that $L_{11}$ has
positive diagonal. Then
$$L_{11}L_{11}^T=S,\qquad L_{21}L_{11}^T=P^-H^T,$$
and
$$L_{22}L_{22}^T=P^- -P^-H^TS^{-1}HP^-.$$
For innovation $v=y-Hm^-$, the exact solve $L_{11}z=v$ gives
$m^-+L_{21}z=m^-+P^-H^TS^{-1}v$. Thus the factor update has exactly the
canonical one-step mean and covariance; $L_{22}$ may be singular.

## Facts & Assumptions

**Given:** AC, the real covariance factors and matrices, positive-definite
innovation $S$, and exact QR of the padded prearray.

[A1] AC is the choice assumption of the Gaussian conditional-law supplier;
the block-matrix identities below add no choice. [[def-axiom-of-choice]]

[F1] For a real matrix with at least as many rows as columns, exact successive
Householder QR gives $Z^T=UR$ with $U^TU=I$; rank deficiency is permitted.
[[thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts]]

[F2] For independent Gaussian prediction and observation noises, if
$S=HP^-H^T+R$ is positive definite, the one-step conditional mean is
$m^-+P^-H^TS^{-1}v$ and its covariance is
$P^- -P^-H^TS^{-1}HP^-$, which also equals the Joseph expression.
[[lem-one-step-kalman-gaussian-conditioning]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Multiplying the prearray by its transpose and using $P^-=L^-(L^-)^T$ gives $$ZZ^T=\begin{bmatrix} L_R^{\mathrm{pad}}(L_R^{\mathrm{pad}})^T+HL^-(L^-)^TH^T&HL^-(L^-)^T\\ L^-(L^-)^TH^T&L^-(L^-)^T \end{bmatrix} =\begin{bmatrix}S&HP^-\\P^-H^T&P^- \end{bmatrix}.$$ The zero padding leaves $L_RL_R^T$ unchanged. [given, algebra]

2.1 Since $Z^T=UR$ and $U^TU=I$, $LL^T=R^TR=ZZ^T$. Block multiplication therefore yields $L_{11}L_{11}^T=S$, $L_{21}L_{11}^T=P^-H^T$, and $L_{21}L_{21}^T+L_{22}L_{22}^T=P^-$. Exact diagonal sign changes multiply rows of $R$ by an orthogonal diagonal matrix and preserve $R^TR$, so these identities survive the positive-diagonal normalization. [F1, step 1.1, algebra]

3.1 Because $S\succ0$ and $S=L_{11}L_{11}^T$, the square matrix $L_{11}$ is invertible. From the cross-block identity, $L_{21}=P^-H^T L_{11}^{-T}$; hence $$L_{21}L_{21}^T=P^-H^TL_{11}^{-T}L_{11}^{-1}HP^- =P^-H^TS^{-1}HP^-.$$ Subtracting this equality from the lower-right identity in step 2.1 gives the stated posterior covariance. Since it is also $L_{22}L_{22}^T$, it is positive semidefinite even when $L_{22}$ is singular. [given, step 2.1, algebra]

4.1 The solve $L_{11}z=v$ gives $$L_{21}z=L_{21}L_{11}^{-1}v =P^-H^TL_{11}^{-T}L_{11}^{-1}v =P^-H^TS^{-1}v.$$ By [F2], these mean and covariance are the one-step Gaussian conditional update. The matrix calculations themselves are deterministic and use no choice beyond [A1]. [A1, F2, step 2.1, step 3.1, given, algebra] ∎

