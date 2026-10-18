---
id: lem-phase-field-neumann-laplacian-kernel-and-gauge
kind: lemma
title: Kernel, range, and mean-zero inverse for the no-flux Laplacian
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-phase-field-discrete-realizations, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: No choice axiom is used; all spaces are finite-dimensional.
sources:
  references:
    - title: R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, Handbook of Numerical Analysis, Vol. VII, 2000; complete updated author text
      url: https://raphaeleh.github.io/PUBLI/bookevol.pdf
      locator: "Chapter 10, §§10.1–10.2, printed pp. 63–68: the Neumann finite-volume scheme, compatibility, constant kernel, and mean-zero gauge."
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: https://arxiv.org/pdf/1407.1567
      locator: "§2.1, equations (2.6)–(2.7), PDF pp. 9–10, for the symmetric graph energy and the distinction between interior and boundary terms."
verification:
  precheck: pending
---

## Statement

Use either connected no-flux realization in [[def-phase-field-discrete-realizations]]. In its finite-volume branch, assume the interior cell graph is connected; in its interval conforming branch, assume $N\ge1$. Write $\bar u_h=\langle u_h,\mathbf1\rangle_h/\langle\mathbf1,\mathbf1\rangle_h$ and $X_{h,0}=\{u_h:\bar u_h=0\}$. Then $A_h$ is self-adjoint and nonnegative, $\ker A_h=\operatorname{span}\{\mathbf1\}$, and $\operatorname{ran}A_h=X_{h,0}$. The restriction $A_h:X_{h,0}\to X_{h,0}$ is positive definite and invertible. Define $A_h^\dagger u_h$ by first projecting $u_h$ onto $X_{h,0}$ and then applying this self-adjoint positive inverse. For each fixed finite mesh there is $C_h<\infty$ such that
$$\|u_h-\bar u_h\mathbf1\|_h^2\le C_h\langle A_hu_h,u_h\rangle_h.$$
For a one-cell mesh, $X_{h,0}=\{0\}$ and the inequality is vacuous.

## Facts & Assumptions

**Given:** A finite-dimensional real inner-product space and one of the two connected no-flux realizations in the statement.

[F1] [[def-phase-field-discrete-realizations]]: in the cell branch, $\langle A_hu,v\rangle_h=\sum_{F=K|L}T_F(u_K-u_L)(v_K-v_L)$ with $T_F>0$; in the interval branch, $\langle A_hu,v\rangle_h=\int_0^L u'v'\,dx$ on continuous piecewise-affine functions.

[F2] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: every continuous real-valued function on a nonempty compact subset of a finite-dimensional Euclidean space attains its minimum.

## Proof

1.1 The displayed bilinear form in [F1] is symmetric, so $A_h$ is self-adjoint. Its quadratic form is a sum of positive transmissibility-weighted squared jumps in the cell branch and is $\int_0^L|u_h'|^2$ in the interval branch, so it is nonnegative. If it is zero, every interior jump vanishes in the cell branch, and connectedness makes all cell values equal; in the interval branch the derivative is zero on every segment, and continuity makes the function constant. Conversely, constants have zero quadratic form. Thus $\ker A_h=\operatorname{span}\{\mathbf1\}$. [F1, given, algebra]

1.2 Self-adjointness implies $\operatorname{ran}A_h\subseteq(\ker A_h)^\perp$: for $z=A_hx$ and $c\in\ker A_h$, $\langle z,c\rangle_h=\langle x,A_hc\rangle_h=0$. Rank-nullity gives $\dim\operatorname{ran}A_h=\dim X_h-\dim\ker A_h=\dim(\ker A_h)^\perp$, so equality holds. The orthogonal complement of the constants is exactly $X_{h,0}$. [step 1.1, algebra]

2.1 The restriction of $A_h$ to $X_{h,0}$ maps into $X_{h,0}$ and has trivial kernel by step 1.1. It is therefore bijective on this finite-dimensional space. Hence each mean-zero source has a unique mean-zero inverse, and projecting an arbitrary source onto $X_{h,0}$ defines $A_h^\dagger$. [step 1.1, step 1.2, algebra]

2.2 On $X_{h,0}$ the restriction of $A_h$ is self-adjoint positive definite by step 1.1. If $x,y\in X_{h,0}$, write $x=A_hs$ and $y=A_ht$ with $s,t\in X_{h,0}$; then $\langle A_h^\dagger x,y\rangle_h=\langle s,A_ht\rangle_h=\langle A_hs,t\rangle_h=\langle x,A_h^\dagger y\rangle_h$, so its inverse is self-adjoint. Also, for nonzero $x=A_hs$, $\langle A_h^\dagger x,x\rangle_h=\langle s,A_hs\rangle_h>0$. [F1, step 1.1, step 2.1, algebra]

3.1 If $X_{h,0}=\{0\}$ the claimed inequality is immediate. Otherwise its unit sphere is compact and nonempty. The continuous quadratic form $u_h\mapsto\langle A_hu_h,u_h\rangle_h$ attains a minimum there by [F2]. The minimum is positive, since a zero value would put a unit mean-zero vector in the constant kernel from step 1.1. Calling the minimum $\lambda_h>0$, homogeneity gives $\|u_h-\bar u_h\mathbf1\|_h^2\le\lambda_h^{-1}\langle A_hu_h,u_h\rangle_h$. [F1, F2, step 1.1, algebra] ∎
