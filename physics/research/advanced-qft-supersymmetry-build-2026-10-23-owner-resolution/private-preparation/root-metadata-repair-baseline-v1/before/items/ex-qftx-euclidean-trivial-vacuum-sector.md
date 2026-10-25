---
id: ex-qftx-euclidean-trivial-vacuum-sector
kind: example
title: The trivial Euclidean vacuum lies in the zero-charge sector
status: draft
origin: session
dependency_level: 4
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
physical_scope: "Exact classical configuration of the conditional SU(2) Euclidean Yang–Mills formulation on compact oriented S4; no empirical or continuum-quantum claim."
deps:
  - def-qftx-euclidean-yang-mills-sector
dependency_roles:
  def-qftx-euclidean-yang-mills-sector: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "David Tong, TASI Lectures on Solitons, Lecture 1: Instantons"
      url: "https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf"
      locator: "§1.1, printed p. 8, identifies the k=0 vacuum A_mu=0."
verification:
  precheck: pass
generation:
  role: example
---

## Example

Let $M=S^4$ be a connected compact oriented smooth four-manifold with any smooth Riemannian metric, let $P=S^4\times SU(2)$ be the trivial principal bundle, and take the zero connection $A=0$ in its global trivialization. With the SU(2) trace and charge convention of the Euclidean Yang–Mills sector definition, this configuration has $F_A=0$, $\nu(P,A)=0$, and $S_E[A]=0$. It is a classical saddle in the trivial sector, and it is not a nonzero-charge instanton saddle.

## Example references

[Tong, §1.1, the k=0 vacuum](https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf)

[[def-qftx-euclidean-yang-mills-sector|Euclidean action, charge, and saddle definitions]]

## Facts & Assumptions

**Given:** The Euclidean SU(2) model and conventions in the statement; $M=S^4$ with its chosen orientation and Riemannian metric; the trivial bundle $P$; and the zero connection.

[A1] The underlying principal bundle is $P=M\times SU(2)$ with the product right action, and $A=0$ is its connection potential in the global product trivialization.

[F1] The local curvature is $F_A=dA+\tfrac12[A\wedge A]$. [[def-qftx-euclidean-yang-mills-sector]]

[F2] The conditional Euclidean action is $S_E[A]=\frac{1}{2g_{\mathrm{YM}}^2}\int_M \kappa(F_A\wedge *F_A)$ with $\kappa=-2\operatorname{tr}_{\mathbf2}$. [[def-qftx-euclidean-yang-mills-sector]]

[F3] The SU(2) charge is $\nu=-\frac{1}{8\pi^2}\int_M\operatorname{tr}_{\mathbf2}(F_A\wedge F_A)$. [[def-qftx-euclidean-yang-mills-sector]]

[F4] A classical saddle is a smooth admissible connection whose first variation of $S_E$ vanishes under every smooth compactly supported connection variation. [[def-qftx-euclidean-yang-mills-sector]]

## Verification

1.1 Since $A=0$, its exterior derivative and wedge–Lie bracket both vanish. Substitution into [F1] gives $F_A=0$. [given, A1, F1, algebra]

2.1 The charge integrand in [F3] is zero, so $\nu(P,A)=0$; the action integrand in [F2] is also zero, so $S_E[A]=0$. [F2, F3, step 1.1, algebra]

3.1 Since $*0=0$, both $F_A=*F_A$ and $F_A=-*F_A$ hold, but [F4] calls an instanton saddle nonzero-charge. Therefore this zero-charge configuration is a vacuum saddle in the trivial sector, not a nonzero-charge instanton. [F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 Let $a$ be any smooth $\mathfrak{su}(2)$-valued one-form and vary $A_t=t a$. With $G_a=\tfrac12[a\wedge a]$, the curvature is $F_{A_t}=t\,da+t^2G_a$. Expanding the quadratic action in [F2] gives only terms of orders $t^2,t^3,t^4$; each coefficient is integrable because $M$ is compact and $a$ is smooth. Hence $\left.\frac{d}{dt}\right|_{0}S_E[A_t]=0$ for every admissible variation, which verifies the saddle condition in [F4]. [A1, F1, F2, F4, step 1.1, algebra] ∎
