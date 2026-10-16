---
id: lem-qc-trace-norm-tensor-product
kind: lemma
title: Trace norm of a tensor product
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps: ["def-qc-trace-norm", "thm-singular-value-decomposition", "def-qc-tensor-map", "def-qc-tensor-register-and-permutation"]
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
      locator: "§1.1.3, trace norm and singular-value decomposition; tensor-product identity is proved locally."
---

## Statement

For finite-dimensional complex-inner-product spaces $H_1,K_1,H_2,K_2$ and linear maps $A:H_1\to K_1$, $B:H_2\to K_2$,
$$\|A\otimes B\|_1=\|A\|_1\,\|B\|_1.$$
The equality includes zero maps and zero-dimensional factors.

## Facts & Assumptions

**Given:** The finite-dimensional spaces and linear maps in the Statement.

[F1] The trace norm is the sum of the positive singular values, with zeros contributing nothing ([[def-qc-trace-norm]]).

[F2] Each finite-dimensional linear map has a singular-value decomposition with orthonormal left and right singular families and positive singular values ([[thm-singular-value-decomposition]]).

[F3] Tensor maps apply each factor map on elementary tensors, and the product inner product is the product of factor inner products ([[def-qc-tensor-map]], [[def-qc-tensor-register-and-permutation]]).

## Proof


1.1 If either $A$ or $B$ is zero, or a domain or codomain factor is zero-dimensional, then $A\otimes B=0$ and at least one factor trace norm is zero, so the formula holds. Otherwise choose SVDs $A z=\sum_{i=1}^r s_i\langle z,v_i\rangle u_i$ and $B w=\sum_{j=1}^q t_j\langle w,q_j\rangle p_j$ as in [F2], with all $s_i,t_j>0$. [given, F1, F2, choose, algebra]

2.1 By [F3], on elementary tensors $$ (A\otimes B)(z\otimes w)=\sum_{i=1}^r\sum_{j=1}^q s_it_j\langle z\otimes w,v_i\otimes q_j\rangle\,u_i\otimes p_j.$$ The families $(v_i\otimes q_j)_{i,j}$ and $(u_i\otimes p_j)_{i,j}$ are orthonormal because their pairings are products of the factor pairings. Since elementary tensors span, this is a singular-value decomposition of $A\otimes B$ with positive singular values exactly $s_it_j$. Thus [F1] gives $$\|A\otimes B\|_1=\sum_{i,j}s_it_j=\left(\sum_i s_i\right)\left(\sum_jt_j\right)=\|A\|_1\|B\|_1.$$ [given, F1, F2, F3, step 1.1, algebra] ∎

