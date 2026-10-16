---
id: thm-qc-fidelity-range-equality-and-products
kind: theorem
title: "Fidelity range equality and products"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps: ["def-qc-fidelity", "thm-qc-fidelity-purification-characterization", "thm-singular-value-decomposition", "def-qc-density-operator", "thm-non-negative-operator-characterisations", "thm-non-negative-square-root-exists-and-is-unique", "thm-qc-trace-norm-duality-and-norm-properties", "thm-cauchy-schwarz-in-an-inner-product-space", "def-qc-tensor-map", "def-qc-tensor-register-and-permutation", "thm-qc-tensor-map-composition-and-adjoint", "lem-qc-trace-norm-tensor-product"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§3.2.1–3.2.3, root-fidelity range and equality properties."
---

## Statement

For finite-dimensional density operators $\rho,\sigma$,
$$0\le F(\rho,\sigma)\le1,\qquad F(\rho,\sigma)=1\iff\rho=\sigma,\qquad F(\rho,\sigma)=0\iff\operatorname{supp}\rho\perp\operatorname{supp}\sigma.$$
For density operators $\rho,\sigma$ on $H$ and $\tau,\omega$ on $K$,
$$F(\rho\otimes\tau,\sigma\otimes\omega)=F(\rho,\sigma)F(\tau,\omega).$$

## Facts & Assumptions

**Given:** Nonzero finite-dimensional spaces $H,K$ and density operators on them.

[L1] Taking the fixed auxiliary space $R=H$, root fidelity is the maximum absolute inner product of purifications ([[thm-qc-fidelity-purification-characterization]]); the QC06 theorem proves this as part of its every-$R$ statement.

[L2] Root fidelity equals $\|\sqrt\rho\sqrt\sigma\|_1$ ([[def-qc-fidelity]]), the trace norm is a norm, and singular values of a tensor product are pairwise products of singular values ([[thm-singular-value-decomposition]], [[thm-qc-trace-norm-duality-and-norm-properties]]). The QC01 norm theorem body is present as a draft.

[F2] Density operators are nonnegative and have trace one ([[def-qc-density-operator]]).

[F1] Cauchy–Schwarz bounds the absolute inner product of unit vectors by one, with equality exactly for linearly dependent vectors ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F3] On finite product spaces, $\sqrt\rho\otimes\sqrt\tau$ is nonnegative and squares to $\rho\otimes\tau$: diagonalize both nonnegative factors in orthonormal eigenbases; the product basis has eigenvalues equal to products of their nonnegative eigenvalues, and tensor-map composition gives the square identity. Uniqueness of the nonnegative square root identifies it with $\sqrt{\rho\otimes\tau}$ ([[thm-non-negative-operator-characterisations]], [[def-qc-tensor-register-and-permutation]], [[def-qc-tensor-map]], [[thm-qc-tensor-map-composition-and-adjoint]], [[thm-non-negative-square-root-exists-and-is-unique]]).

[L3] The trace norm of a tensor product of finite-dimensional maps is the product of the trace norms ([[lem-qc-trace-norm-tensor-product]]).

## Proof

1.1 The fidelity is nonnegative because it is a trace norm. Choose unit purifications attaining the maximum in [L1]; [F1] gives their overlap at most one, so $F\le1$. If $F=1$, equality in [F1] makes the two purifying vectors scalar multiples of modulus one. Their partial traces are then equal, hence $\rho=\sigma$. Conversely, if $\rho=\sigma$, choose the same purification twice to obtain overlap one. [given, L1, L2, F1, F2, algebra]

1.2 By [L2], $F=0$ exactly when $\sqrt\rho\sqrt\sigma=0$, since a norm vanishes only at zero. The range of $\sqrt\sigma$ is $\operatorname{supp}\sigma$, while the kernel of $\sqrt\rho$ is $(\operatorname{supp}\rho)^\perp$. Thus the product is zero exactly when $\operatorname{supp}\sigma\subseteq(\operatorname{supp}\rho)^\perp$, which is the asserted orthogonality. [given, L2, algebra]

2.1 By [F3] and uniqueness of the nonnegative square root, $\sqrt{\rho\otimes\tau}=\sqrt\rho\otimes\sqrt\tau$. Tensor-map composition gives $(\sqrt\rho\otimes\sqrt\tau)(\sqrt\sigma\otimes\sqrt\omega)=(\sqrt\rho\sqrt\sigma)\otimes(\sqrt\tau\sqrt\omega)$. Now [L3] makes the trace norm of this product the product of the two factor trace norms, which by the root-fidelity definition is $F(\rho,\sigma)F(\tau,\omega)$. [given, L2, F2, F3, L3, algebra] ∎
