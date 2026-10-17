---
id: lem-francis-double-shift-bulge-chase-matches-explicit-qr
kind: lemma
title: "Under unreduced hypotheses, the Francis double-shift chase matches explicit shifted QR"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-exact-francis-hessenberg-qr-step
  - def-real-and-complex-schur-forms
  - def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift
  - lem-implicit-q-uniqueness-for-unreduced-hessenberg
  - lem-real-francis-double-shift-polynomial
  - prop-shifted-qr-preserves-upper-hessenberg-form
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "James Demmel, Applied Numerical Linear Algebra, §4.4.8"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Statement

Let $n\ge2$, let $H\in\mathbb R^{n\times n}$ be unreduced upper Hessenberg, and let $p(z)=z^2-sz+t$ be real with $p(H)$ nonsingular and $p(H)e_1\ne0$. Assume the exact double-shift bulge chase from [[alg-exact-francis-hessenberg-qr-step]] and the two successive shifted QR steps for the roots of $p$ both finish unreduced. Let $Q_b$ be the bulge-chase factor, and let $p(H)=Q_eR_e$ be a QR factorization with positive diagonal in $R_e$. Then $Q_b=Q_eD$ for a diagonal sign matrix $D$ with $D_{11}=1$, and

$$Q_b^THQ_b=D^T(Q_e^THQ_e)D.$$

Thus the real Francis step is the explicit two-shift QR similarity up to the harmless diagonal sign convention. No statement is made for a deflated or singular-shift branch.

## Facts & Assumptions

**Given:** The matrix, polynomial, nonzero and unreduced hypotheses in the statement.

[F1] [[lem-real-francis-double-shift-polynomial]]: a real trailing $2\times2$ block supplies the real quadratic $p(z)$ whose roots form the shift pair.

[F2] [[prop-shifted-qr-preserves-upper-hessenberg-form]]: an exact shifted QR step on an upper-Hessenberg matrix remains upper Hessenberg.

[F3] [[lem-implicit-q-uniqueness-for-unreduced-hessenberg]]: two unitary similarities of the same unreduced Hessenberg matrix that yield unreduced Hessenberg matrices and have the same first column differ only by diagonal phases.

[F4] [[alg-exact-francis-hessenberg-qr-step]]: the algorithm returns completed only when the output is upper Hessenberg and $Qe_1$ is proportional to $p(H)e_1$.

[F5] [[def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift]]: an exact shifted QR step factors $H-\mu I=QR$ and updates $H_+=RQ+\mu I=Q^*HQ$.

## Proof

1.1 By [F1], write the roots of $p$ as $\mu_1,\mu_2$ with $\mu_1+\mu_2=s$ and $\mu_1\mu_2=t$. Factor $H-\mu_1I=Q_1R_1$ and let $H_1=R_1Q_1+\mu_1I=Q_1^*HQ_1$ by [F5]. Factoring $H_1-\mu_2I=Q_2R_2$ gives $p(H)=(H-\mu_2I)(H-\mu_1I)=Q_1(H_1-\mu_2I)R_1=Q_1Q_2R_2R_1$. Since $R_2R_1$ is upper triangular, $Q_1Q_2$ is a unitary QR factor of $p(H)$; by the positive-diagonal convention it is $Q_e$ up to diagonal signs. [given, F1, F5, algebra]

2.1 By [F2], the two explicit shifted steps give an unreduced upper-Hessenberg similarity $Q_e^THQ_e$. On the completed branch, [F4] says the bulge chase returns an unreduced upper-Hessenberg similarity and its first column is proportional to $p(H)e_1$. The first column of $Q_e$ is proportional to the first column of $p(H)$, which is $p(H)e_1$; normalize signs to make the first columns equal. [given, F2, F4, step 1.1]

3.1 Apply [F3] to $Q_b$ and $Q_e$. They differ by a diagonal sign matrix $D$, so $Q_b^THQ_b=D^T(Q_e^THQ_e)D$, as claimed. [step 2.1, F3, algebra] ∎
