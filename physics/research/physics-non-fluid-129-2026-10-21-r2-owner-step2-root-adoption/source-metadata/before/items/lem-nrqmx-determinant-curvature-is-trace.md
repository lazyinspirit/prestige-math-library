---
id: lem-nrqmx-determinant-curvature-is-trace
kind: lemma
domain: mathematics
library: mathematics
title: Determinant-line curvature is the trace curvature
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - def-nrqmx-determinant-line-projector
  - lem-nrqmx-determinant-line-projector-well-defined
  - thm-nrqmx-berry-projector-curvature
  - def-countable-choice
dependency_roles:
  def-nrqmx-determinant-line-projector: mathematical-premise
  lem-nrqmx-determinant-line-projector-well-defined: mathematical-premise
  thm-nrqmx-berry-projector-curvature: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Di Xiao, Ming-Che Chang, and Qian Niu, Berry Phase Effects on Electronic Properties
      url: https://arxiv.org/pdf/0907.2021
      locator: Section I.C and Appendix A, projector curvature and connection conventions.
---

## Statement

Let $M$ be a finite-dimensional smooth manifold, let $r\ge1$, and let $P:M\to M_r(\mathbb C)$ be a $C^2$ orthogonal projector of constant rank $m$, with $1\le m\le r$. Write $E_P=\{(x,v):P(x)v=v\}$ and give it the projected connection $\nabla s=P\,ds$. For $x\in M$ and $X,Y\in T_xM$, define the curvature two-form with values in $M_r(\mathbb C)$ by

$$F_x(X,Y):=P(x)\bigl(dP_x(X)dP_x(Y)-dP_x(Y)dP_x(X)\bigr)P(x).$$

Let $U\subseteq M$ be open and let $V:U\to\mathbb C^{r\times m}$ be a $C^2$ orthonormal frame, meaning $V(x)^*V(x)=I_m$ and $V(x)V(x)^*=P(x)$ for all $x\in U$. Put $A=V^*dV$ and $w=v_1\wedge\cdots\wedge v_m$, where $v_1,\ldots,v_m$ are the columns of $V$. The induced projected connection on $\det E_P$ has local connection one-form $a=\operatorname{tr}A$ in the unit frame $w$, and its scalar curvature is

$$da=\operatorname{tr}(V^*FV)=\operatorname{tr}F.$$

Thus the curvature of the determinant line is the trace of the original bundle curvature, with the same orientation and sign convention.

## Statement references

[[def-nrqmx-determinant-line-projector]]

[[thm-nrqmx-berry-projector-curvature]]

## Facts & Assumptions

**Given:** The smooth projector and the supplied local orthonormal frame in the Statement.

[F1] [[def-nrqmx-determinant-line-projector]] identifies $\det E_P$ with the range of $Q=\bigwedge^mP$.

[F2] [[lem-nrqmx-determinant-line-projector-well-defined]] proves that $Q$ is a smooth rank-one orthogonal projector.

[F3] [[thm-nrqmx-berry-projector-curvature]] gives the frame connection $A=V^*dV$ and curvature $F_{\mathrm{fr}}=dA+A\wedge A=V^*FV$.

## Proof

**Given:** [F1]–[F3].

1.1 Because the columns of $V$ are orthonormal, $w=v_1\wedge\cdots\wedge v_m$ has unit norm and spans the determinant line. Differentiating by the product rule gives $dw=\sum_j v_1\wedge\cdots\wedge dv_j\wedge\cdots\wedge v_m$. The projected connection applies $P$ to each differentiated factor. Since $P\,dv_j=\sum_a v_a A_{aj}$, each term with $a\ne j$ vanishes from a repeated wedge factor, while the $a=j$ term is $A_{jj}w$. Summing gives $Qdw=(\operatorname{tr}A)w$, so the determinant connection form is $a=\operatorname{tr}A$. [F1, F2, given, algebra]

2.1 A line connection with scalar one-form $a$ has curvature $da+a\wedge a=da$, since a scalar one-form wedges with itself to zero. By [F3], $\operatorname{tr}F=\operatorname{tr}(dA)+\operatorname{tr}(A\wedge A)$. In coordinates, $\operatorname{tr}(A\wedge A)=\sum_{i,j}A_{ij}\wedge A_{ji}=0$: diagonal terms vanish and each off-diagonal pair cancels because one-forms anticommute. Therefore $da=d\operatorname{tr}A=\operatorname{tr}F_{\mathrm{fr}}=\operatorname{tr}(V^*FV)$. Finally, since $PFP=F$ and $VV^*=P$, cyclicity of finite-dimensional trace gives $\operatorname{tr}(V^*FV)=\operatorname{tr}(FVV^*)=\operatorname{tr}(FP)=\operatorname{tr}F$. [F3, step 1.1, algebra] ∎
