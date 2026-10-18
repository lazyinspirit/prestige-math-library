---
id: cex-approximate-jacobian-breaks-stiff-damping
title: "A bounded approximate Jacobian can destroy Rosenbrock stiff damping"
kind: counterexample
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-two-stage-rosenbrock-w-method
  - thm-two-stage-rosenbrock-scalar-l-stability
proof_strategy: direct
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "WIAS Berlin, Numerical Methods for Stiff Ordinary Differential Equations, §2.4 Rosenbrock Methods"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf"
      locator: "§2.4, Remark 2.39 and Theorem 2.40, printed pp. 47–48: approximate-J order and exact-J stability distinction"
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed pp. 42–44: exact-J stability versus approximate-J order"
    - title: "Joachim Rang and Lutz Angermann, New Rosenbrock Methods of Order 3 for PDAEs of Index 2"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/700435/Equadiff_11-2005-2_46.pdf"
      locator: "§2, printed pp. 386–387: exact-J and arbitrary-W order hypotheses"
---

## Statement

For the scalar family $y'=-\lambda y$ with $\lambda>0$ and $y_0=1$, take $h=4/\lambda$, $\widetilde J=0$, and $\widetilde T=0$ in the exact-arithmetic stage equations of the two-stage method. Then $W=1$, its amplification factor is $5$, and this approximate-J method amplifies the mode even though the exact-J method at $z=-4$ has modulus less than one. The zero approximation is bounded. This calculation demonstrates loss of stiff damping and makes no order or uniform-convergence claim.

## Facts & Assumptions

**Given:** The scalar equation, $\lambda>0$, $h=4/\lambda$, and the stated approximate derivatives.

[F1] [[alg-two-stage-rosenbrock-w-method]]: the stages satisfy $Wk_1=f+\alpha h\widetilde T$, $F_1=f(y+hk_1/2)$ for this autonomous equation, $Wq_2=F_1-k_1$, $k_2=q_2+k_1$, and $y_+=y+hk_2$.

[F2] [[thm-two-stage-rosenbrock-scalar-l-stability]]: for the exact Jacobian, $R(z)=[1+(1-2\alpha)z]/(1-\alpha z)^2$ and it is L-stable.

## Proof

**Given:** The data in the Statement.

1.1 Here $W=1$ and $k_1=f(y)=-\lambda y$. Since $hk_1/2=-2y$, the midpoint state is $-y$ and $F_1=f(-y)=\lambda y$. [given, F1, algebra]

2.1 The second right-hand side is $F_1-k_1=2\lambda y$, so $q_2=2\lambda y$ and $k_2=q_2+k_1=\lambda y$. Therefore $y_+=y+h\lambda y=5y$, giving amplification factor $5$. [step 1.1, F1, algebra]

3.1 For the exact-J branch, [F2] gives $R(-4)=[1-4(1-2\alpha)]/(1+4\alpha)^2=(5-4\sqrt2)/(5-2\sqrt2)^2$, because $\alpha=1-1/\sqrt2$. Since $25<32<36$, we have $5<4\sqrt2<6$, so $|5-4\sqrt2|<1$; also $2\sqrt2<4$, so $5-2\sqrt2>1$. Thus $|R(-4)|<1$. This differs from step 2.1 and proves that boundedness of $\widetilde J$ alone does not preserve stiff damping. [given, F2, step 2.1, algebra]

4.1 The approximate-J calculation in step 2.1 and the exact-J factor comparison establish the stated damping failure. No order or convergence conclusion follows from this stiff-scaled calculation. [step 1.1, step 2.1, algebra] ∎

## Finite check

With $\lambda=4$ and $h=1$, the approximate-J output is $5y$, while the exact-J factor is $(5-4\sqrt2)/(5-2\sqrt2)^2\approx-0.1393$.
