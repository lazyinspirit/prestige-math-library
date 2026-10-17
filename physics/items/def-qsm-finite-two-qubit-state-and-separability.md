---
id: def-qsm-finite-two-qubit-state-and-separability
kind: definition
title: "Finite two-qubit density matrices and separability"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsm-pauli-two-qubit-conventions
  - thm-nth-roots-exist
dependency_roles:
  def-qsm-pauli-two-qubit-conventions: mathematical-premise
  thm-nth-roots-exist: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1.2–2.1.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
    - title: "Damian Markham et al., Survival of entanglement in thermal states, Example 1"
      url: "https://arxiv.org/pdf/quant-ph/0606103"
---

## Definition

Use the single-qubit space and ordered two-qubit basis from [[def-qsm-pauli-two-qubit-conventions]]. A one-qubit density matrix is a Hermitian $2\times2$ matrix $\rho$ such that $\langle \rho x,x\rangle\ge0$ for every $x\in\mathbb C^2$ and $\operatorname{tr}(\rho)=1$. A two-qubit density matrix is defined in the same way on $\mathbb C^2\otimes\mathbb C^2$, using the four-dimensional trace.

The tensor product of two one-qubit density matrices is again a two-qubit density matrix. To verify positivity, write any positive semidefinite Hermitian matrix as $R=\begin{pmatrix}a&z\\\overline z&b\end{pmatrix}$; testing the quadratic form on the two coordinate vectors gives $a,b\ge0$. If $a>0$, completing the square gives

$$\langle R(x,y),(x,y)\rangle=a\left|x+\frac za y\right|^2+\left(b-\frac{|z|^2}{a}\right)|y|^2,$$

so positivity implies $b-|z|^2/a\ge0$ and

$$R=S^*S,\qquad S=\begin{pmatrix}\sqrt a&z/\sqrt a\\0&\sqrt{b-|z|^2/a}\end{pmatrix}.$$

If $a=0$, positivity forces $z=0$: if $z\ne0$, choose $y=1$ and $x=-tz$ with real $t>b/(2|z|^2)$, giving quadratic form $b-2t|z|^2<0$. Then $R=S^*S$ for $S=\operatorname{diag}(0,\sqrt b)$. The nonnegative square roots exist by [[thm-nth-roots-exist]] through the preceding matrix conventions. Thus for one-qubit densities $\rho_A=S_A^*S_A$ and $\rho_B=S_B^*S_B$, the tensor-product adjoint identity from [[def-qsm-pauli-two-qubit-conventions]] gives

$$\rho_A\otimes\rho_B=(S_A\otimes S_B)^*(S_A\otimes S_B),$$

which is Hermitian and positive semidefinite. In the displayed product basis, $\operatorname{tr}(X\otimes Y)=\sum_{i,j=0}^1X_{ii}Y_{jj}=\operatorname{tr}(X)\operatorname{tr}(Y)$ for $2\times2$ matrices $X,Y$. Therefore $\operatorname{tr}(\rho_A\otimes\rho_B)=1$.

A product density matrix is $\rho_A\otimes\rho_B$ for one-qubit density matrices $\rho_A,\rho_B$. A two-qubit density matrix is **separable** if it is a finite convex combination $\sum_{j=1}^m t_j\rho_{A,j}\otimes\rho_{B,j}$, where $t_j\ge0$ and $\sum_{j=1}^m t_j=1$; these convex combinations are again density matrices by linearity of the trace and quadratic form. A two-qubit density matrix that is not separable is **entangled**. This finite-convex-combination convention is the one used by the local threshold proof.
