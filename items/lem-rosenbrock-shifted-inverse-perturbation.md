---
id: lem-rosenbrock-shifted-inverse-perturbation
title: "Perturbing a shifted Jacobian perturbs its inverse explicitly"
kind: lemma
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - lem-rosenbrock-shifted-matrix-invertibility-bound
  - def-induced-matrix-p-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
proof_strategy: direct
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "WIAS Berlin, Numerical Methods for Stiff Ordinary Differential Equations, §2.4 Rosenbrock Methods"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf"
      locator: "§2.4, printed pp. 43–47: shifted stage matrices and bounded inverse hypotheses"
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed pp. 42–44"
---

## Statement

Let $d\ge1$, $h,\gamma>0$, and $J,\widetilde J\in\mathbb R^{d\times d}$. Set $A=I_d-\gamma hJ$ and $\widetilde A=I_d-\gamma h\widetilde J$. If both matrices are invertible, then
$$\widetilde A^{-1}-A^{-1}=\gamma h\,\widetilde A^{-1}(\widetilde J-J)A^{-1}.$$
Consequently, if $\|A^{-1}\|_2\le K$ and $\|\widetilde A^{-1}\|_2\le\widetilde K$, then
$$\|\widetilde A^{-1}-A^{-1}\|_2\le\gamma hK\widetilde K\|\widetilde J-J\|_2.$$
Here the induced matrix norm is the one defined in [[lem-rosenbrock-shifted-matrix-invertibility-bound]].

## Facts & Assumptions

**Given:** The stated matrices and inverse bounds.

[F1] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: the induced Euclidean matrix norm is submultiplicative: $\|AB\|_2\le\|A\|_2\|B\|_2$.

[F2] [[lem-rosenbrock-shifted-matrix-invertibility-bound]]: if $\|\gamma hB\|_2\le q<1$, then $I-\gamma hB$ is invertible and its inverse norm is at most $(1-q)^{-1}$.

## Proof

**Given:** The data in the Statement.

1.1 Multiplying out the right-hand side gives $\widetilde A^{-1}(A-\widetilde A)A^{-1}=\widetilde A^{-1}AA^{-1}-\widetilde A^{-1}\widetilde A A^{-1}=\widetilde A^{-1}-A^{-1}$. Also $A-\widetilde A=\gamma h(\widetilde J-J)$, proving the identity. [given, algebra]

2.1 Apply the induced-norm inequality in [F1] twice to the identity in step 1.1 and then use the two inverse bounds. This gives the claimed estimate. [step 1.1, F1, algebra]

3.1 If $\|\gamma hJ\|_2\le q<1$ and $\|\gamma h\widetilde J\|_2\le\widetilde q<1$, [F2] supplies $K=(1-q)^{-1}$ and $\widetilde K=(1-\widetilde q)^{-1}$, so the estimate is explicit under these sufficient smallness conditions. [F2, step 2.1, algebra] ∎
