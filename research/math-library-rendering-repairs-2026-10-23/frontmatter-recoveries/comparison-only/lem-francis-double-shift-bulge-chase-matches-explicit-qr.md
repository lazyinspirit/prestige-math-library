---
id: lem-francis-double-shift-bulge-chase-matches-explicit-qr
kind: lemma
title: "Under unreduced hypotheses, the Francis double-shift chase matches explicit shifted QR"
status: published
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
sources:
  references:
    - title: "James Demmel, Applied Numerical Linear Algebra, §4.4.8"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Statement

Let $n\ge2$, let $H\in\mathbb R^{n\times n}$ be unreduced upper Hessenberg, and let $p(z)=z^2-sz+t$ be real with $p(H)$ nonsingular and $p(H)e_1\ne0$. Assume the exact double-shift bulge chase from [[alg-exact-francis-hessenberg-qr-step]] and the two successive shifted QR steps for the roots of $p$ both finish unreduced. Let $Q_b$ be the bulge-chase factor, and let $p(H)=Q_eR_e$ be a QR factorization with positive diagonal in $R_e$. Then $Q_b=Q_eD$ for a diagonal sign matrix $D$. Its first sign records the possible difference between the bulge reflector's normalization and the positive-diagonal QR normalization, and

$$Q_b^THQ_b=D^T(Q_e^THQ_e)D.$$

Thus the real Francis step agrees with the real-normalized explicit two-shift QR similarity up to diagonal signs; arbitrary complex QR normalizations introduce diagonal unitary phases, which reduce to signs when both accumulated factors are real. No statement is made for a deflated or singular-shift branch.

## Facts & Assumptions

**Given:** The matrix, polynomial, nonzero and unreduced hypotheses in the statement.

[F1] [[lem-real-francis-double-shift-polynomial]]: a real trailing $2\times2$ block supplies the real quadratic $p(z)$ whose roots form the shift pair.

[F2] [[prop-shifted-qr-preserves-upper-hessenberg-form]]: an exact shifted QR step on an upper-Hessenberg matrix remains upper Hessenberg.

[F3] [[lem-implicit-q-uniqueness-for-unreduced-hessenberg]]: two unitary similarities of the same unreduced Hessenberg matrix that yield unreduced Hessenberg matrices and have the same first column differ only by diagonal phases.

[F4] [[alg-exact-francis-hessenberg-qr-step]]: the algorithm returns completed only when the output is upper Hessenberg and $Qe_1$ is proportional to $p(H)e_1$.

[F5] [[def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift]]: an exact shifted QR step factors $H-\mu I=QR$ and updates $H_+=RQ+\mu I=Q^*HQ$.

## Proof

1.1 By [F1], write the roots of $p$ as $\mu_1,\mu_2$ with $\mu_1+\mu_2=s$ and $\mu_1\mu_2=t$. Factor $H-\mu_1I=Q_1R_1$ and let $H_1=R_1Q_1+\mu_1I=Q_1^*HQ_1$ by [F5]. Factoring $H_1-\mu_2I=Q_2R_2$ gives $p(H)=(H-\mu_2I)(H-\mu_1I)=Q_1(H_1-\mu_2I)R_1=Q_1Q_2R_2R_1$. Put $Q_c=Q_1Q_2$ and $R_c=R_2R_1$, so $p(H)=Q_cR_c$ with $Q_c$ unitary and $R_c$ upper triangular. Since $p(H)$ is nonsingular, both $R_c$ and $R_e$ are nonsingular. From $Q_e^*Q_c=R_eR_c^{-1}$, the matrix $Q_e^*Q_c$ is upper triangular and unitary, hence diagonal unitary; write $Q_c=Q_e\Theta$ for a diagonal unitary $\Theta$. Also $p(H)e_1=(R_c)_{11}Q_ce_1=(R_e)_{11}Q_ee_1$, with $(R_e)_{11}>0$. [given, F1, F5, algebra]

2.1 By [F2], the two explicit shifted steps produce the unreduced upper-Hessenberg similarity $Q_c^*HQ_c$. Since $Q_c=Q_e\Theta$, this equals $\Theta^*(Q_e^THQ_e)\Theta$. Diagonal unitary similarity preserves the Hessenberg zero pattern and the nonzero first-subdiagonal entries, so $Q_e^THQ_e$ is also unreduced upper Hessenberg. [given, F2, step 1.1, algebra]

3.1 By [F4], $Q_be_1$ is proportional to the nonzero real vector $p(H)e_1$. Step 1.1 and the positive diagonal of $R_e$ give $Q_ee_1=p(H)e_1/(R_e)_{11}$. Since both are real unit vectors, there is $\varepsilon\in\{1,-1\}$ with $Q_be_1=\varepsilon Q_ee_1$. Set $S=\operatorname{diag}(\varepsilon,1,\ldots,1)$. Then $Q_eS$ and $Q_b$ have the same first column, and $S(Q_e^THQ_e)S$ remains unreduced upper Hessenberg by step 2.1. Apply [F3] to $Q_b$ and $Q_eS$: their relative factor is a diagonal sign matrix with first entry $1$. Therefore $Q_b=Q_eD$ for a diagonal sign matrix $D$. [given, F3, F4, step 1.1, step 2.1, algebra]

4.1 Substituting $Q_b=Q_eD$ gives $Q_b^THQ_b=D^T(Q_e^THQ_e)D$, as claimed. [step 3.1, algebra] ∎
