---
id: thm-nrqmx-finite-level-duhamel-error
kind: theorem
domain: mathematics
library: mathematics
title: Finite-level truncation with bounded coupling error
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - def-countable-choice
  - def-self-adjoint-and-normal-endomorphism
  - def-bounded-linear-operator
  - def-operator-norm
  - def-nrqmx-finite-hermitian-matrix-exponential
  - lem-nrqmx-finite-hermitian-matrix-exponential
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - lem-bochner-integral-norm-inequality
dependency_roles:
  def-countable-choice: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-nrqmx-finite-hermitian-matrix-exponential: mathematical-premise
  lem-nrqmx-finite-hermitian-matrix-exponential: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Konrad Viebahn, Introduction to Floquet theory, lecture notes (2020)
      url: https://boulderschool.yale.edu/sites/default/files/files/floquetlecture_Konrad%20Viebahn.pdf
      locator: Section II, equations (10)-(20), finite-dimensional unitary propagation and exact Floquet factorization; the bounded Duhamel estimate is proved locally.
    - title: André Eckardt and Egidijus Anisimovas, High-frequency approximation for periodically driven quantum systems from a Floquet-space perspective, New Journal of Physics 17 (2015), 093039
      url: https://arxiv.org/pdf/1502.06477
      locator: Section 2.1, equations (5)-(7), period propagator and Floquet modes; the finite coupling estimate is proved locally.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice. Let $d\ge1$, $\hbar>0$, let $H=H^*$ on $\mathbb C^d$, and let $P=P^*=P^2$ be an orthogonal projection. Use the operator norm induced by the standard inner product. Put $P^\perp=I_d-P$, $H_D=PHP+P^\perp HP^\perp$, and $V=H-H_D$. With finite matrix exponentials as defined on this page, for every $t\in\mathbb R$,
$$\left\|e^{-itH/\hbar}-e^{-itH_D/\hbar}\right\|\le\frac{|t|}{\hbar}\|V\|,\qquad \left\|P^\perp e^{-itH/\hbar}P\right\|\le\frac{|t|}{\hbar}\|V\|.$$
The second inequality bounds amplitude leakage from the retained subspace $\operatorname{ran}P$; it asserts no convergence for an unbounded coupling.

## Statement references

[[def-nrqmx-finite-hermitian-matrix-exponential]]

[[lem-nrqmx-finite-hermitian-matrix-exponential]]

## Facts & Assumptions

**Given:** Countable Choice, $d\ge1$, $\hbar>0$, Hermitian $H$, an orthogonal projection $P$, and real $t$.

[A1] Countable Choice is the hypothesis of the Banach-valued fundamental theorem of calculus used to integrate the matrix derivative ([[def-countable-choice]], [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

[F1] [[def-nrqmx-finite-hermitian-matrix-exponential]] defines the finite matrix exponential, and [[lem-nrqmx-finite-hermitian-matrix-exponential]] gives its unitary property, group law, and operator-norm derivative for Hermitian matrices.

[F2] The operator norm satisfies $\|AB\|\le\|A\|\|B\|$ by its unit-ball definition ([[def-operator-norm]], [[def-bounded-linear-operator]]); a unitary matrix has norm one because it preserves vector norms and $d\ge1$. For a continuous matrix-valued curve, the integral of its derivative is the endpoint difference ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]), and its integral norm is bounded by the integral of the norm ([[lem-bochner-integral-norm-inequality]]).

[F3] For an endomorphism of a finite-dimensional complex inner product space, Hermitian means self-adjoint, $A=A^*$ ([[def-self-adjoint-and-normal-endomorphism]]).

## Proof

**Given:** [A1], [F1], [F2], and the matrices in the Statement.

1.1 By [F3], $H_D$ is Hermitian because $P=P^*$, $P^\perp=(P^\perp)^*$, and $H=H^*$. Also $PH_DP^\perp=P^\perp H_DP=0$, so $H_D$ preserves both $\operatorname{ran}P$ and $\operatorname{ran}P^\perp$. Its power-series exponential therefore preserves those subspaces and commutes with $P$, giving $P^\perp e^{-itH_D/\hbar}P=0$. The vectors $Px$ and $P^\perp x$ are orthogonal because $PP^\perp=0$ and $P=P^*$; hence $\|x\|^2=\|Px\|^2+\|P^\perp x\|^2$, so $\|P\|,\|P^\perp\|\le1$. [F1, F3, given, algebra]

1.2 For $s$ between $0$ and $t$, set $F(s)=e^{-i(t-s)H/\hbar}e^{-isH_D/\hbar}$. By [F1] and the product rule,
$$F'(s)=\frac{i}{\hbar}e^{-i(t-s)H/\hbar}(H-H_D)e^{-isH_D/\hbar}=\frac{i}{\hbar}e^{-i(t-s)H/\hbar}Ve^{-isH_D/\hbar}.$$
Integrating this continuous matrix curve from $0$ to $t$ by [F2] gives
$$e^{-itH_D/\hbar}-e^{-itH/\hbar}=\frac{i}{\hbar}\int_0^t e^{-i(t-s)H/\hbar}Ve^{-isH_D/\hbar}\,ds.$$
This oriented integral identity holds also for $t<0$. [A1, F1, F2, algebra]

2.1 The two exponentials in the integrand of step 1.2 are unitary by [F1], so its integrand has norm at most $\|V\|$ by [F2]. Taking norms in that identity and using the interval length $|t|$ proves the first bound. [F1, F2, step 1.2]

3.1 Step 1.1 gives $P^\perp e^{-itH_D/\hbar}P=0$. Hence $P^\perp e^{-itH/\hbar}P=P^\perp(e^{-itH/\hbar}-e^{-itH_D/\hbar})P$. The contraction bounds for $P$ and $P^\perp$ from step 1.1 and the first estimate in step 2.1 yield the claimed leakage bound. [step 1.1, step 2.1, algebra] ∎
