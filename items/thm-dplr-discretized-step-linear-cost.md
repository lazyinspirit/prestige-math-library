---
id: thm-dplr-discretized-step-linear-cost
kind: theorem
title: A fixed-rank DPLR bilinear recurrent step has linear arithmetic cost
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-s4-dplr-parameterization, alg-s4-state-space-recurrence-and-convolution, lem-woodbury-dplr-bilinear-inverse]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, Theorem 2 and Appendix C.2"
      url: "https://arxiv.org/pdf/2111.00396"
---

## Statement

Let $N,r\ge1$, let $A=\Lambda-PQ^*$ with diagonal $\Lambda\in\mathbb C^{N\times N}$ and $P,Q\in\mathbb C^{N\times r}$, where $^*$ denotes conjugate transpose, let $B,C\in\mathbb C^N$, and let $\Delta>0$. If $G=I-\Delta A/2$ is invertible, then one bilinear recurrent update and its scalar output can be computed using $O(N(r+1)^2+(r+1)^3)$ exact complex arithmetic operations and $O(N(r+1)+(r+1)^2)$ working space. For fixed $r$, this is $O(N)$ operations and $O(N)$ space. When the diagonal base $I-\Delta\Lambda/2$ is invertible, the required $r\times r$ Woodbury correction is invertible. When that diagonal base is singular but $G$ is invertible, the bordered correction in the recurrent algorithm is invertible and has size at most $2r$.

## Statement references

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” Theorem 2 and Appendix C.2](https://arxiv.org/pdf/2111.00396)

## Facts & Assumptions

**Given:** The dimensions, DPLR matrices, step size, and invertibility hypothesis from the Statement.

[F1] [[def-s4-dplr-parameterization]]: $A=\Lambda-PQ^*$ and $G=I-\Delta A/2$; the recurrent right-hand side is $(I+\Delta A/2)x+\Delta Bu$ and the output is $C^*x'$ after solving for $x'$.

[F2] [[lem-woodbury-dplr-bilinear-inverse]]: if $D$ is invertible, then $D+UV^*$ is invertible exactly when $I+V^*D^{-1}U$ is invertible, and its inverse is $D^{-1}-D^{-1}U(I+V^*D^{-1}U)^{-1}V^*D^{-1}$.

[F3] [[alg-s4-state-space-recurrence-and-convolution]]: for a singular diagonal base, the algorithm partitions its zero and nonzero coordinates and solves the displayed bordered system of dimension $r+|Z|$, then sets $x_J=D_J^{-1}(b_J-\alpha P_Jz)$.

## Proof

1.1 Put $\alpha=\Delta/2$ and $D=I-\alpha\Lambda$. For a current state $x$ and input $u$, form $b=(I+\alpha A)x+\Delta Bu=x+\alpha\Lambda x-\alpha P(Q^*x)+\Delta Bu$. Diagonal scaling costs $O(N)$ operations, the two low-rank products cost $O(Nr)$, and the remaining vector additions cost $O(N)$. The solve is $Gx'=b$ with $G=D+\alpha PQ^*$. [F1, given, algebra]

2.1 If every diagonal entry of $D$ is nonzero, apply [F2] with $U=\alpha P$ and $V=Q$. Since $G$ is invertible, the correction $W=I_r+\alpha Q^*D^{-1}P$ is invertible, and $x'=D^{-1}b-D^{-1}(\alpha P)W^{-1}Q^*D^{-1}b$. Forming $D^{-1}P$ and $W$ costs $O(Nr^2)$ operations and $O(Nr+r^2)$ space; factoring $W$ costs $O(r^3)$. Applying the inverse to one right-hand side costs $O(Nr+r^2)$ operations. Thus this branch meets the stated bounds. [F2, step 1.1, algebra]

2.2 Otherwise let $Z=\{j:D_{jj}=0\}$, $J=\{0,\ldots,N-1\}\setminus Z$, and $s=|Z|$. The rows of $G$ indexed by $Z$ are those of $\alpha P_ZQ^*$, whose rank is at most $r$. If $s>r$, these $s$ rows are linearly dependent, so $G$ is singular, contrary to the hypothesis. Hence $s\le r$. [given, F1, step 1.1, algebra]

3.1 Suppose $s\le r$ and consider a homogeneous solution $(z,x_Z)$ of the bordered system in [F3]. Set $x_J=-\alpha D_J^{-1}P_Jz$. The first bordered row gives $z=Q_J^*x_J+Q_Z^*x_Z=Q^*x$, while its lower row gives $\alpha P_Zz=0$. Therefore the $J$ rows of $Gx$ equal $D_Jx_J+\alpha P_JQ^*x=0$, and the $Z$ rows equal $\alpha P_ZQ^*x=\alpha P_Zz=0$. Invertibility of $G$ implies $x=0$, hence $z=Q^*x=0$ and $x_Z=0$. The square bordered matrix has trivial kernel and is therefore invertible. [given, F3, step 2.2, algebra]

4.1 For any right-hand side, solve the bordered system, define $x_J=D_J^{-1}(b_J-\alpha P_Jz)$, and keep the solved $x_Z$. Its first row states $z=Q^*x$; the upper coordinate equations then give $(Gx)_J=b_J$, and the lower row gives $(Gx)_Z=\alpha P_Zz=b_Z$. Thus $x=x'$ is the unique solution to $Gx'=b$. The bordered dimension is $r+s\le2r$; forming it and its right-hand side costs $O(Nr^2)$ operations and $O(Nr+r^2)$ space, and factoring/solving it costs $O(r^3)$. Computing $C^*x'$ adds $O(N)$. Both branches satisfy the claimed fixed-rank linear bounds. [F1, F3, step 2.2, step 3.1, algebra] ∎
