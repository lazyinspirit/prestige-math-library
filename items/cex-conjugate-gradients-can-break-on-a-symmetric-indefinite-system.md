---
id: cex-conjugate-gradients-can-break-on-a-symmetric-indefinite-system
kind: counterexample
title: "A symmetric indefinite matrix can make the CG denominator vanish or change sign before convergence"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-conjugate-gradient-recurrence,
       prop-conjugate-gradient-denominators-are-positive-before-convergence]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jonathan Richard Shewchuk, An Introduction to the Conjugate Gradient Method Without the Agonizing Pain"
      url: "https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf"
---

## Statement refuted

Symmetry alone is enough for the CG denominator test: for every symmetric
invertible matrix, every nonconverged CG step has $p_k^TAp_k>0$.

## Facts & Assumptions

**Given:** The CG recurrence and the positive-denominator theorem for Hermitian
positive-definite matrices.

[F1] To test the proposed extension outside the positive-definite domain,
define the attempted first search direction by $p_0:=r_0:=b-Ax_0$ and inspect
the attempted denominator $p_0^TAp_0$. These are the same algebraic formulas
used by CG on its legitimate domain
([[def-conjugate-gradient-recurrence]]); this fact does not assert that the
cited definition applies to an indefinite matrix.

[L1] For Hermitian positive-definite matrices, every nonconverged CG
denominator is positive
([[prop-conjugate-gradient-denominators-are-positive-before-convergence]]).

## Counterexample
**Proof technique:** direct calculation.

1.1 Take $$A=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad b=\binom11,\qquad x_0=\binom00.$$ Then $A$ is symmetric and invertible but indefinite. By [F1], $$r_0=p_0=b=\binom11,$$ so $$p_0^TAp_0=(1,1)\begin{pmatrix}1&0\\0&-1\end{pmatrix}\binom11=(1,1)\binom1{-1}=0.$$ Yet $r_0\ne0$, so the method has not converged. [F1, algebra]

2.1 Step 1.1 shows that the first CG denominator can fail to be positive even before convergence. Therefore the refuted statement is false. The contrast with [L1] isolates the missing hypothesis: positive definiteness, not mere symmetry, is load-bearing. [L1, step 1.1] ∎
