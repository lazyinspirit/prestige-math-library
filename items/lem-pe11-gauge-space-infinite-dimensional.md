---
id: lem-pe11-gauge-space-infinite-dimensional
kind: lemma
title: The PEC full-kernel gauge is infinite-dimensional
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-na-pe11-maxwell-cavity-eigenproblem
  - def-na-hcurl-space
  - lem-smooth-bump-between-concentric-euclidean-balls
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Long Chen, Finite Element Methods for Maxwell Equations, complete
        lecture notes"
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "Section 2, pp. 6–8, and Section 3, pp. 8–10: PEC curl spaces,
        kernel/gauge and distributional de Rham context only. The precise local
        auxiliary claim and complete proof here are supplied independently from
        the listed canonical Facts; this source is not a proof of the weak-graph
        lemma or the infinite-dimensional construction."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $\Omega\subset\mathbb R^3$ be any nonempty open set, let
$V=H_0(\operatorname{curl};\Omega)$, let
$K=\{u\in V:\operatorname{curl}u=0\}$, and put $X=V\cap K^\perp$ using
the $L^2$ inner product. Then $X$ is infinite-dimensional.

## Facts & Assumptions

**Given:** a nonempty open $\Omega\subset\mathbb R^3$, the distributional curl convention, and a ball $B_r(x_0)\subset\Omega$.

[F1] A nonempty open subset of Euclidean space contains a nondegenerate ball.

[F2] For every pair $0<\rho<R$ there is a smooth bump equal to one on the smaller closed ball and supported in the larger ball. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

[F3] For $k\in H(\operatorname{curl})$, $\int_\Omega k\cdot\operatorname{curl}A\,dx =\int_\Omega\operatorname{curl}k\cdot A\,dx$ for every $A\in C_c^\infty(\Omega;\mathbb R^3)$, by the distributional definition. ([[def-na-hcurl-space]])

## Proof

**Given:** the nonempty open set, a ball $B_r(x_0)\subset\Omega$, and the full-kernel gauge $X$.

1.1 For $j\ge1$, set $c_j=x_0+r(1-2^{-j})e_1$ and $r_j=r2^{-j-4}$. The balls $B_j=B_{r_j}(c_j)$ lie in $B_r(x_0)$: $|c_j-x_0|+r_j=r(1-15\cdot2^{-j-4})<r$. If $l>j$, $|c_l-c_j|=r(2^{-j}-2^{-l})\ge r2^{-j-1}$, while $r_j+r_l\le3r2^{-j-5}<r2^{-j-1}$, so these balls are pairwise disjoint. By [F2], choose $\rho\in C_c^\infty(B_1(0))$ equal to one near the origin. Set $\psi(\xi)=\xi_1\rho(\xi)$, so $\partial_1\psi(0)=1$, and put $\psi_j(x)=\psi((x-c_j)/r_j)$ and $A_j=(0,0,\psi_j)$. Then $v_j:=\operatorname{curl}A_j=(\partial_2\psi_j,-\partial_1\psi_j,0)$ is a nonzero smooth vector field supported in $B_j$. [F1, F2, given, choose, construct]

2.1 Each $v_j$ has compact support in $\Omega$, hence $v_j\in V$. For every $k\in K$, [F3] gives $(v_j,k)_{L^2}=\int_\Omega k\cdot\operatorname{curl}A_j\,dx=\int_\Omega\operatorname{curl}k\cdot A_j\,dx=0$. Thus $v_j\in X$. Pairwise disjoint supports and $v_j\ne0$ imply linear independence: restricting any finite vanishing linear combination to $B_j$ forces its $j$th coefficient to be zero. The gauge space therefore contains infinitely many linearly independent vectors and is infinite-dimensional. [F3, step 1.1, algebra] ∎
