---
id: lem-pe11-gauge-conforming-edge-approximation
kind: lemma
title: Kernel projection gives dense conforming gauge approximants
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-na-pe11-maxwell-cavity-eigenproblem
  - def-na-zero-tangential-hcurl
  - lem-pe11-smooth-nedelec-approximation
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "§2, pp. 6–8: the discrete curl-curl kernel gauge."
---

## Statement

Assume Countable Choice. Let $\Omega$ be a bounded connected Lipschitz polyhedron and
let $\{\mathcal T_h\}$ be a shape-regular family of matching affine
tetrahedral meshes with maximum cell diameter $h\to0$, as in
[[def-matching-affine-simplicial-meshes]] and the mesh hypothesis of
[[lem-pe11-smooth-nedelec-approximation]]. For each mesh
let $K_h=\ker(\operatorname{curl}|_{V_h})$ and
$X_h=V_h\cap K_h^\perp$, with the $L^2$ inner product. Then for every
$u\in X$ and every sequence of mesh sizes $h_n\to0$, there are
$u_{h_n}\in X_{h_n}$ such that
$$\|u_{h_n}-u\|_{H(\operatorname{curl};\Omega)}\longrightarrow0.$$

## Facts & Assumptions

**Given:** Countable Choice, the constant $\epsilon>0$ from the Maxwell definition, $u\in X$, the finite-dimensional PEC edge spaces $V_h$, and the shape-regular refining mesh family from [[lem-pe11-smooth-nedelec-approximation]].

[A1] Countable Choice is inherited from the smooth edge-approximation supplier. ([[def-countable-choice]])

[F1] $H_0(\operatorname{curl})$ is the graph-norm closure of $C_c^\infty(\Omega;\mathbb R^3)$. Every vector in $K_h$ is a continuous curl-free PEC field, so $K_h\subset K$. ([[def-na-zero-tangential-hcurl]], [[def-na-pe11-maxwell-cavity-eigenproblem]])

[F2] For every compactly supported smooth field $w$, the canonical edge interpolants $I_hw$ are in $V_h$ for sufficiently small $h$ and converge to $w$ in the $H(\operatorname{curl})$ norm. ([[lem-pe11-smooth-nedelec-approximation]])

[F3] Every finite-dimensional subspace of the real $L^2$ Hilbert space has an orthonormal basis; a closed subspace has an orthogonal projection. ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[thm-orthogonal-decomposition-by-a-closed-subspace]])

[F4] Since $\epsilon$ is a positive constant scalar, the weighted and ordinary $L^2$ orthogonal complements of $K$ and $K_h$ coincide. ([[def-na-pe11-maxwell-cavity-eigenproblem]])

## Proof

**Given:** Countable Choice, $u\in X$, and an arbitrary mesh sequence $h_n\to0$.

1.1 By [F1], for every $j\ge1$ there is $\varphi_j\in C_c^\infty(\Omega;\mathbb R^3)$ with $\|u-\varphi_j\|_{H(\operatorname{curl})}<1/j$. Countable Choice selects one such field for each $j$. By [F2], for each fixed $j$ there is an index $N_j$ such that for every $n\ge N_j$, $I_{h_n}\varphi_j\in V_{h_n}$ and $\|I_{h_n}\varphi_j-\varphi_j\|_{H(\operatorname{curl})}<1/j$; choose the least such $N_j$, and replace the sequence by increasing thresholds $M_j:=\max\{j,N_1,\ldots,N_j,M_{j-1}+1\}$, with $M_0=0$. [A1, F1, F2, given, choose]

1.2 Each $K_{h_n}$ is a finite-dimensional subspace of the real $L^2$ Hilbert space. By Countable Choice [A1], choose an orthonormal basis for each $K_{h_n}$ using [F3]. If a sequence in $K_{h_n}$ converges in $L^2$, its coordinates against this finite basis converge, and the limit is the corresponding finite linear combination; thus $K_{h_n}$ is closed. By [F3] it has an orthogonal projection $P_n$ satisfying $\|P_n y\|_2\le\|y\|_2$, including $P_n=0$ when $K_{h_n}=\{0\}$. [A1, F3, given, construct]

2.1 For each $n$ with $\{j\le n:M_j\le n\}\ne\varnothing$, let $j(n)$ be its largest member and set $w_n:=I_{h_n}\varphi_{j(n)}$; for the finitely many initial indices where the set is empty put $w_n=0$. Since $M_j\ge j$ and is strictly increasing, $j(n)\to\infty$. For all later indices, $\|w_n-u\|_{H(\operatorname{curl})}<2/j(n)$, so $w_n\to u$ in graph norm. [step 1.1, algebra]

3.1 Since $K_{h_n}\subset K$ by [F1] and $u\in K^\perp$ by [F4], $P_nu=0$. Thus $\|P_nw_n\|_2=\|P_n(w_n-u)\|_2\le\|w_n-u\|_2$. Set $u_{h_n}:=w_n-P_nw_n$. Both terms lie in $V_{h_n}$ and the projection residual is orthogonal to $K_{h_n}$, so $u_{h_n}\in X_{h_n}$. [F1, F3, F4, step 2.1, step 1.2]

4.1 Because $\operatorname{curl}(P_nw_n)=0$, $\|u_{h_n}-u\|_2\le2\|w_n-u\|_2$ and $\|\operatorname{curl}(u_{h_n}-u)\|_2=\|\operatorname{curl}(w_n-u)\|_2$. Consequently $\|u_{h_n}-u\|_{H(\operatorname{curl})} \le3\|w_n-u\|_{H(\operatorname{curl})}\to0$ by step 2.1. [step 2.1, step 3.1, algebra] ∎
