---
id: "lem-nonzero-finite-dimensional-complex-invariant-subspaces-have-unitary-eigenvectors"
kind: "lemma"
title: "Nonzero finite dimensional complex invariant subspaces have unitary eigenvectors"
deps: ["def-unitary-eigenfunction-for-a-probability-system", "cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue", "thm-fundamental-theorem-of-algebra-minimum-modulus-proof", "thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Sarig Definition 3.3 p.90; finite-dimensional eigenvalue interface proved by the published characteristic-polynomial and minimum-modulus suppliers
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Every nonzero finite-dimensional complex subspace $E$ invariant under a Koopman isometry $U$ contains a nonzero vector $f$ with $Uf=\lambda f$ and $|\lambda|=1$. If $E\subseteq H_0$, this eigenfunction is nonconstant. The assertion for a supplied finite-dimensional $E$ does not require AC; a preceding construction of $E$ may carry that assumption.

## Facts & Assumptions

[F1] Eigenfunctions are nonzero $L^2$ classes, and $H_0$ is the zero-mean subspace of a probability space [[def-unitary-eigenfunction-for-a-probability-system]].

[F2] An endomorphism of a nonzero finite-dimensional space over an algebraically closed field has an eigenvalue [[cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue]].

[F3] Every nonconstant complex polynomial has a root [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]].

[F4] The $L^2$ norm is positive definite [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]].

## Proof

**Given:** A nonzero finite-dimensional invariant complex subspace $E$ as stated.

1.1 Invariance makes $U|_E:E\to E$ a complex-linear endomorphism. The field $\mathbb C$ satisfies the algebraic-closedness hypothesis of F2 by F3. Since $\dim E\ge1$, F2 yields $\lambda\in\mathbb C$ and a nonzero $f\in E$ with $Uf=\lambda f$. This uses a single finite-dimensional eigenvalue assertion; it selects no infinite family of eigenvectors. [F2, F3, given]

2.1 Isometry gives $\|f\|=\|Uf\|=|\lambda|\|f\|$. Since $f\ne0$, positivity permits division by $\|f\|$, giving $|\lambda|=1$. If also $E\subseteq H_0$ and $f=c\mathbf1$, then $0=\int f=c$ because the total measure is one. This would give $f=0$, impossible. Thus in that case $f$ is nonconstant. The case $\dim E=1$ is included; $E=\{0\}$ is excluded before F2 is applied. [F1, F4, step 1.1] ∎
