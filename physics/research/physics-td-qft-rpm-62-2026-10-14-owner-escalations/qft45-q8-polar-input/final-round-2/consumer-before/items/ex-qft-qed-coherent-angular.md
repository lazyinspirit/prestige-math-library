---
id: ex-qft-qed-coherent-angular
kind: example
title: Fixed-vector transverse angular coefficient $8\pi/3$
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - lem-qft-qed-coherent-ir-obstruction
dependency_roles:
  lem-qft-qed-coherent-ir-obstruction: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§5.2–5.5 and 6.1
      url: https://arxiv.org/html/math-ph/0511030
      locator: Full author lecture-note HTML; bosonic Fock sectors, second quantization, and the Fock representation of the CCR.
    - title: David Tong, Quantum Field Theory, §6.2.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted Chapter 6 HTML; transverse photon modes and their angular polarization projection.
---

## Example

Let $e\in\mathbb R^3$ be a unit vector and $P_T(n)=I_3-nn^\top$ for $n\in S^2$. Then the angular coefficient in the coherent infrared family with $b(n)=\lambda P_T(n)e$, $\lambda\in\mathbb R\setminus\{0\}$, is
$$ \int_{S^2}|b(n)|^2\,d\Omega=\frac{8\pi\lambda^2}{3}. $$

## Facts & Assumptions

**Given:** The unit vector $e$, the scalar $\lambda\ne0$, and the transverse projection and angular integral in [[lem-qft-qed-coherent-ir-obstruction]].

[F1] [[lem-qft-qed-coherent-ir-obstruction]] uses $P_T(n)=I_3-nn^\top$ and $C_b=\int_{S^2}|b(n)|^2d\Omega$ for a measurable transverse $b\in L^2(S^2;\mathbb C^3)$.

[A1] $e\in\mathbb R^3$ is a unit vector and $\lambda\in\mathbb R\setminus\{0\}$, as stated in the Example.

## Verification

**Given:** [F1] and the specified $b(n)=\lambda P_T(n)e$.

1.1 Since [A1] gives $|e|=1$ and $|n|=1$, $|P_T(n)e|^2=e^\top(I_3-nn^\top)e=1-(n\cdot e)^2$. Rotational invariance of $d\Omega$ permits taking $e=(0,0,1)$, so with $u=n_3$, the angular integral is $2\pi\int_{-1}^{1}(1-u^2)\,du$. [A1, F1, algebra]

1.2 The integral equals $2\pi[u-u^3/3]_{-1}^{1}=8\pi/3$. Multiplying by $\lambda^2$ yields $C_b=8\pi\lambda^2/3>0$, which is the coefficient required by [F1]. [A1, F1, step 1.1, algebra] ∎
