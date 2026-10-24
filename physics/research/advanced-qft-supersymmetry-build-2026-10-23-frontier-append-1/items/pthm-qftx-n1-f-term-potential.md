---
id: pthm-qftx-n1-f-term-potential
kind: physics-theorem
title: Kähler-metric F-term scalar potential in the rigid N=1 model
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 4
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-n1-superspace-and-actions
axiom_base: "ZF; the auxiliary-field elimination and positive-definite matrix calculation use no choice principle."
deps:
  - post-qftx-n1-wess-zumino-model
dependency_roles:
  post-qftx-n1-wess-zumino-model: physical-assumption
proof_strategy: direct
physical_scope: "Conditional classical elimination of the chiral auxiliary fields in the bosonic zero-derivative sector of the adopted rigid N=1 Kähler sigma-model action on flat Minkowski spacetime. The result excludes gauge D-terms, supergravity, quantum corrections, and empirical claims."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§3.1–3.2 and 4.7, printed pp. 18–24 and 41–42: algebraic auxiliary fields and the canonical F-term scalar potential."
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§7.1, printed pp. 43–46, equations (7.1)–(7.25): the general Kähler metric, auxiliary-field equation, and inverse-metric scalar potential."
verification:
  precheck: pending
---

## Statement

Use the rigid N=1 Kähler sigma-model action with scalar coordinates $z=(z^1,\ldots,z^n)\in U\subseteq\mathbb C^n$, smooth real Kähler potential $K$, positive-definite Hermitian metric $g_{i\bar j}=\partial_i\partial_{\bar j}K$, holomorphic superpotential $W$, and complex algebraic auxiliary fields $F^i$. In the bosonic sector with fermions and spacetime derivatives set to zero, write $W_i=\partial_iW(z)$ and $\bar W_{\bar j}=\partial_{\bar j}\overline{W(z)}$. The auxiliary Lagrangian is

$$\mathcal L_F=g_{i\bar j}F^i\bar F^{\bar j}+F^iW_i+\bar F^{\bar j}\bar W_{\bar j}.$$

Let $g^{i\bar j}$ be the inverse Hermitian matrix. The algebraic field equation is $F^i=-g^{i\bar j}\bar W_{\bar j}$, and eliminating $F$ gives the nonnegative scalar-potential contribution

$$V_F=g^{i\bar j}W_i\bar W_{\bar j}\geq0.$$

For the canonical Kähler potential $K=\sum_i\bar z^{\bar i}z^i$, this becomes $V_F=\sum_i|W_i|^2$. The simple sum is specific to that metric; for a noncanonical Kähler metric the inverse matrix in the displayed formula is required. This statement concerns the classical F-term sector only and does not include gauge D-terms or quantum corrections.

## Statement references

[Stephen P. Martin, *A Supersymmetry Primer*, §§3.1–3.2 and 4.7](https://arxiv.org/pdf/hep-ph/9709356v7).

[Adel Bilal, *Introduction to Supersymmetry*, §7.1](https://arxiv.org/pdf/hep-th/0101055).

[[post-qftx-n1-wess-zumino-model]]

## Facts & Assumptions

**Given:** A point $z\in U$ in the Kähler coordinate patch of the adopted model and its bosonic zero-derivative auxiliary fields.

[A1] [[post-qftx-n1-wess-zumino-model]]: $g_{i\bar j}(z,\bar z)$ is positive-definite Hermitian and the zero-fermion auxiliary Lagrangian is $g_{i\bar j}F^i\bar F^{\bar j}+F^iW_i+\bar F^{\bar j}\bar W_{\bar j}$, with no derivatives of $F$.

## Proof
**Given:** [A1], with $W_i$ and $\bar W_{\bar j}$ evaluated at the same scalar value $z$.

1.1 Since $F^i$ occurs algebraically and without derivatives, its Euler–Lagrange equation is the ordinary partial derivative of $\mathcal L_F$ with respect to the independent conjugate coordinate $\bar F^{\bar j}$. Differentiating [A1] gives $g_{i\bar j}F^i+\bar W_{\bar j}=0$. [A1, algebra]

1.2 Expand the Hermitian square $g_{i\bar j}(F^i+g^{i\bar k}\bar W_{\bar k})(\bar F^{\bar j}+g^{\ell\bar j}W_\ell)$. The two cross terms are $F^iW_i$ and $\bar F^{\bar j}\bar W_{\bar j}$ because $g_{i\bar j}g^{\ell\bar j}=\delta_i^\ell$ and $g_{i\bar j}g^{i\bar k}=\delta_{\bar j}^{\bar k}$; the final term is $g^{\ell\bar k}W_\ell\bar W_{\bar k}$. Therefore $\mathcal L_F$ equals this square minus $g^{\ell\bar k}W_\ell\bar W_{\bar k}$. [A1, algebra]

2.1 Positive definiteness makes $g$ invertible. Multiply the equation in step 1.1 by $g^{k\bar j}$ and use $g^{k\bar j}g_{i\bar j}=\delta_i^k$ to obtain $F^k=-g^{k\bar j}\bar W_{\bar j}$. [A1, step 1.1, algebra]

3.1 Substitute the solution from step 2.1: the square in step 1.2 vanishes, so the on-shell auxiliary Lagrangian is $-g^{i\bar j}W_i\bar W_{\bar j}$. The inverse of a positive-definite Hermitian matrix is positive definite, so this contraction is nonnegative; for $g_{i\bar j}=\delta_{i\bar j}$ it is $\sum_i|W_i|^2$. This is the classical scalar potential in the stated F-term sector. [A1, step 2.1, step 1.2, algebra] ∎
