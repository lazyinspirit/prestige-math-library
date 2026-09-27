---
id: prop-mixing-correlations-extend-to-l-two
kind: proposition
title: Mixing correlations extend to L2 functions
deps: [def-strong-and-weak-mixing, thm-koopman-operator-is-a-linear-isometry-on-l-p, cor-cauchy-schwarz-inequality-for-l-two,
  def-complex-lp-and-euclidean-test-function-conventions, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p,
  thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, thm-complex-holder-minkowski-and-the-quotient-norm]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Sarig Proposition 1.3 p.7; E–W Exercise 2.7.7
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
  scraped: []
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

On a measure-preserving probability system, for complex $f,g\in L^2(\mu)$ put
$$C_n(f,g)=\int(f\circ T^n)\overline g\,d\mu-\left(\int f\,d\mu\right)\overline{\left(\int g\,d\mu\right)}.$$
Strong mixing is equivalent to $C_n(f,g)\to0$ for all such f,g. Weak mixing is equivalent to $N^{-1}\sum_{n<N}|C_n(f,g)|\to0$ for all such f,g. The pairing is linear in its first variable.

## Facts & Assumptions

[F1] Complex integration is componentwise and the pairing is linear in its first variable [[def-complex-lp-and-euclidean-test-function-conventions]].

[F2] Koopman is an isometry on complex $L^2$ [[thm-koopman-operator-is-a-linear-isometry-on-l-p]].

[F3] Real-modulus products have integral bounded by the product of their $L^2$ norms [[cor-cauchy-schwarz-inequality-for-l-two]].

[F4] The complex $L^2$ pairing is well-defined, sesquilinear and satisfies Cauchy–Schwarz [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]].

[F5] Set mixing uses ordinary convergence or absolute Cesaro convergence [[def-strong-and-weak-mixing]].

[F6] Finite simple functions of finite-measure support are dense in complex $L^2$ on every measure space [[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]].

[F7] The complex L2 quotient norm satisfies the triangle inequality [[thm-complex-holder-minkowski-and-the-quotient-norm]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 The constant one has $L^2$ norm one. Complex Cauchy–Schwarz gives $|\int f|\le\|f\|_2$ and $|\int g|\le\|g\|_2$. Koopman isometry, iterated n times, gives $\|f\circ T^n\|_2=\|f\|_2$. Applying the real-modulus Cauchy–Schwarz inequality to $|f\circ T^n|$ and $|g|$ proves absolute integrability of the product. Thus every term defining $C_n$ exists and is independent of representatives, with the indicated complex pairing. [F1, F2, F3, F4]

2.1 For indicators $C_n(\mathbf1_B,\mathbf1_A)=\mu(A\cap T^{-n}B)-\mu(A)\mu(B)$. For finite complex simple $a=\sum_j\alpha_j\mathbf1_{B_j}$ and $b=\sum_k\beta_k\mathbf1_{A_k}$, sesquilinearity gives $C_n(a,b)=\sum_{j,k}\alpha_j\overline{\beta_k}C_n(\mathbf1_{B_j},\mathbf1_{A_k})$. Therefore the set version of strong mixing gives convergence for simple pairs, and the weak version gives it for absolute Cesaro averages by the finite triangle inequality. [F4, F5, step 1.1]

2.2 For any $L^2$ h,k, the two Cauchy–Schwarz estimates in step 1.1 give $|C_n(h,k)|\le2\|h\|_2\|k\|_2$. Choose finite simple a,b with $\|f-a\|_2<\delta$ and $\|g-b\|_2<\delta$ using only the finite-simple clause of density. Then sesquilinearity gives $$|C_n(f,g)-C_n(a,b)|\le2\bigl(\|f-a\|_2\|g\|_2+\|a\|_2\|g-b\|_2\bigr)\le2\delta(\|g\|_2+\|f\|_2+\delta).$$ The bound is independent of n. [F4, F6, step 1.1, F7]

3.1 Taking limsups of absolute values, or of their Cesaro averages, uses step 2.1 to remove the simple-pair term. Sending $\delta$ to zero proves the respective $L^2$ property. Conversely the $L^2$ property applies to indicators, which lie in $L^2$ because $\mu(X)=1$, and their identity in step 2.1 is precisely the set property. [F5, step 2.1, step 2.2] ∎
