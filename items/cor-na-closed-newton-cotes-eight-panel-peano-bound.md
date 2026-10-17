---
id: cor-na-closed-newton-cotes-eight-panel-peano-bound
kind: corollary
title: "Peano remainder bound for the eight-panel rule"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 5
deps: [def-na-closed-newton-cotes-eight-panel-rule, lem-na-closed-newton-cotes-eight-panel-weights-and-exactness, def-na-peano-kernel, thm-na-peano-kernel-remainder-and-bound]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. This is direct substitution into the Peano representation.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.2"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed pp. 223–227, Peano kernel representation and quadrature error bound."

---

## Statement

If $f\in C^{10}[-1,1]$, then the rule $Q_8$ of [[def-na-closed-newton-cotes-eight-panel-rule]] satisfies
$$\left|\int_{-1}^1f(x)\,dx-Q_8(f)\right|\le\left(\int_{-1}^1|K_{10}(t)|\,dt\right)\|f^{(10)}\|_\infty,$$
where
$$K_{10}(t)=\frac{(1-t)^{10}}{10!}-\sum_{j=0}^8w_j\frac{(x_j-t)_+^9}{9!},\qquad x_j=-1+j/4,$$
and $u_+:=\max(u,0)$.

## Facts & Assumptions

**Given:** A function $f\in C^{10}[-1,1]$ and the nine-node quadrature $Q_8$.

[A1] $f$ has continuous derivatives through order $10$ on $[-1,1]$.

[F1] [[def-na-closed-newton-cotes-eight-panel-rule]]: $Q_8(f)=\sum_{j=0}^8w_jf(x_j)$ on the nodes $x_j=-1+j/4$.

[F2] [[lem-na-closed-newton-cotes-eight-panel-weights-and-exactness]]: $Q_8$ is exact for the zero polynomial and every nonzero polynomial of degree at most $9$.

[F3] [[def-na-peano-kernel]]: for $r=10$, $K_{10}(t)=L(g_{10,t})$, where $g_{10,t}(x)=(x-t)_+^9/9!$ and $L(u)=\int_{-1}^1u-Q_8(u)$.

[F4] [[thm-na-peano-kernel-remainder-and-bound]]: exactness through degree $9$ and $f\in C^{10}$ imply $|L(f)|\le\left(\int_{-1}^1|K_{10}(t)|\,dt\right)\|f^{(10)}\|_\infty$.

## Proof

1.1 By [F1] and [F3], $K_{10}(t)=\int_{-1}^1(x-t)_+^9/9!\,dx-\sum_{j=0}^8w_j(x_j-t)_+^9/9!$. For $-1\le t\le1$, the integral is $\int_t^1(x-t)^9/9!\,dx=(1-t)^{10}/10!$, by the power antiderivative and endpoint evaluation. This gives the displayed kernel. [given, F1, F3, algebra]

2.1 The exactness condition of [F4] holds by [F2], and its smoothness condition is [A1]. Applying [F4] to this $Q_8$ and substituting the kernel from step 1.1 proves the bound. [given, A1, F2, F4, step 1.1] ∎
