---
id: lem-square-root-kalman-prediction-factor-identity
kind: lemma
title: "QR prediction preserves the canonical covariance factor"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kevin S. Tracy, A Square-Root Kalman Filter Using Only QR Decompositions"
      url: "https://arxiv.org/pdf/2208.06452"
      locator: "§2, equations (3)–(7), QR of concatenated covariance factors"
    - title: "M. A. Salzmann, Some Aspects of Kalman Filtering, Technical Report 140"
      url: "https://gge.ext.unb.ca/Pubs/TR140.pdf"
      locator: "Chapter 3, §3.3.1, equation (3.10b), square-root covariance time update"
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
      locator: "Chapter 4, §4.3, equation (4.20), canonical covariance prediction"
verification:
  precheck: pending
---

## Statement

Let $P=LL^T$ with $L\in\mathbb R^{d\times r}$ and let
$Q=L_Q L_Q^T$ with $L_Q\in\mathbb R^{n\times s}$, where zero columns and
rank deficiency are allowed. For any real $F\in\mathbb R^{n\times d}$,
form $G=[FL\;L_Q]$ and append zero columns if needed so that the transpose
has at least $n$ rows. In exact arithmetic, if $G^T=UR$ is a reduced QR
factorization with $U^TU=I$, then $L^-:=R^T$ satisfies
$$
L^-(L^-)^T=FPF^T+Q.
$$

## Facts & Assumptions

**Given:** The factor inputs, matrix $F$, zero-padding convention, and an
exact reduced QR factorization of the transposed padded array.

[F1] For a matrix with at least as many rows as columns, successive
Householder transformations produce a reduced QR factorization whose
orthogonal factor has orthonormal columns. [[thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 The padded zero columns do not change the Gram matrix, so $$GG^T=[FL\;L_Q][FL\;L_Q]^T=FLL^TF^T+L_QL_Q^T=FPF^T+Q.$$ The cross terms are absent because the two factors occupy disjoint column blocks. [given, algebra]

1.2 By [F1], $G^T=UR$ and $U^TU=I$. Thus $$L^-(L^-)^T=R^TR=R^TU^TUR=G G^T=FPF^T+Q.$$ No inverse or full-rank assumption was used, so the identity includes zero and rank-deficient factors. [F1, step 1.1, algebra] ∎

