---
id: def-nrqmx-finite-hermitian-matrix-exponential
kind: definition
domain: mathematics
library: mathematics
title: Finite-dimensional matrix exponential
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - def-complex-exponential
  - def-operator-norm
  - def-real-and-complex-inner-product-space
  - lem-complex-exponential-series-converges-everywhere
  - thm-complex-plane-is-complete
  - thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field
dependency_roles:
  def-complex-exponential: mathematical-premise
  def-operator-norm: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  thm-complex-plane-is-complete: mathematical-premise
  thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Konrad Viebahn, Introduction to Floquet theory, lecture notes (2020)
      url: https://boulderschool.yale.edu/sites/default/files/files/floquetlecture_Konrad%20Viebahn.pdf
      locator: Section II, equations (15)-(19), finite-dimensional Floquet Hamiltonian and propagator exponentials.
    - title: André Eckardt and Egidijus Anisimovas, High-frequency approximation for periodically driven quantum systems from a Floquet-space perspective, New Journal of Physics 17 (2015), 093039
      url: https://arxiv.org/pdf/1502.06477
      locator: Section 2.2, equations (8)-(13), Floquet Hamiltonian and finite-dimensional exponentials.
---

## Definition

Let $d\ge1$. Regard $\mathbb C^d$ as column vectors with the standard complex inner product
$$\langle x,y\rangle:=\sum_{j=1}^d x_j\overline{y_j},$$
linear in the first argument, and induced norm $\|x\|=(\sum_{j=1}^d|x_j|^2)^{1/2}$. A matrix $A=(a_{ij})\in M_d(\mathbb C)$ acts by $(Ax)_i=\sum_{j=1}^d a_{ij}x_j$, and its adjoint for this inner product is $A^*=\overline A^{\mathsf T}$.

For $A\in M_d(\mathbb C)$ and $z\in\mathbb C$, define the finite-dimensional matrix exponential by
$$e^{zA}:=\sum_{k=0}^{\infty}\frac{z^kA^k}{k!},\qquad A^0=I_d.$$
The scalar exponential convention is $\exp w=\sum_{k\ge0}w^k/k!$.

Every matrix $B=(b_{ij})\in M_d(\mathbb C)$ is bounded on $\mathbb C^d$: since $|x_j|\le\|x\|$, one has
$$\|Bx\|^2\le\sum_{i=1}^d\left(\sum_{j=1}^d|b_{ij}|\right)^2\|x\|^2.$$
Thus its operator norm is defined by the unit-ball supremum in the operator-norm definition listed in Definition references. For $B,C\in M_d(\mathbb C)$ and $\|x\|\le1$, the operator-norm bound gives $\|BCx\|\le\|B\|\|Cx\|\le\|B\|\|C\|$; taking the supremum proves $\|BC\|\le\|B\|\|C\|$. Since $d\ge1$, the coordinate vector $e_1$ with first entry $1$ and other entries $0$ is a unit vector, so $\|I_d\|=1$. Homogeneity and the triangle inequality follow from the unit-ball supremum, and $\|B\|=0$ forces $Be_j=0$ for each coordinate vector $e_j$ (with entry $1$ at $j$ and $0$ elsewhere), hence $B=0$. Therefore $M_d(\mathbb C)$ with this operator norm is a normed $\mathbb C$-vector space; the matrices $E_{ij}$ with entry $1$ at $(i,j)$ and $0$ elsewhere form a basis of size $d^2$.

Completeness of the complex plane and finite-dimensional norm equivalence (the two theorems in Definition references) make $M_d(\mathbb C)$ complete in this operator norm. By induction and submultiplicativity, $\|A^k\|\le\|A\|^k$ for every $k\ge1$, while $\|A^0\|=1$. The scalar series $\sum_{k\ge0}(|z|\|A\|)^k/k!$ converges by the scalar exponential convergence lemma in Definition references. Hence for $m>n$,
$$\left\|\sum_{k=n+1}^{m}\frac{z^kA^k}{k!}\right\|\le\sum_{k=n+1}^{m}\frac{(|z|\|A\|)^k}{k!}\longrightarrow0\quad(n\to\infty).$$
The partial sums are Cauchy, so completeness gives their operator-norm limit; the same estimate proves absolute convergence in operator norm.

## Definition references

[[def-complex-exponential]]

[[def-operator-norm]]

[[def-real-and-complex-inner-product-space]]

[[lem-complex-exponential-series-converges-everywhere]]

[[thm-complex-plane-is-complete]]

[[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]]

