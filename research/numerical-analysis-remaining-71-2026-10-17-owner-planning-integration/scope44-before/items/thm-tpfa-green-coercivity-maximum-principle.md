---
id: thm-tpfa-green-coercivity-maximum-principle
kind: theorem
title: TPFA discrete Green identity, coercivity, and maximum principle
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps: [def-fv-admissible-cell-face-mesh, def-tpfa-harmonic-face-scheme]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, Handbook of Numerical Analysis, Vol. VII, 2000; complete updated author text"
      url: "https://raphaeleh.github.io/PUBLI/bookevol.pdf"
      locator: "Chapter 9 §9.3–§9.4, printed pp. 42–49: discrete energy, solvability, and convergence for orthogonal finite-volume schemes."
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: "https://arxiv.org/pdf/1407.1567"
      locator: "§2.1–§2.2, equations (2.6)–(2.7), PDF pp. 9–10: TPFA energy and its minimum-principle argument."
---

## Statement

Let $\mathcal T$ be a finite TPFA-admissible cell-face mesh, let every cell be connected through interior faces to a cell with a boundary face, and let $T_F>0$ be the transmissibilities of [[def-tpfa-harmonic-face-scheme]]. For cell vectors $u,v$, define
$$ (A_hu)_K=\frac1{|K|}\left(\sum_{F=K|L}T_F(u_K-u_L)+\sum_{F\subset\partial K\cap\partial\Omega}T_{K,F}u_K\right). $$
Then interior fluxes are locally conservative, and for all cell vectors $u,v$,
$$ \sum_{K\in\mathcal K}|K|v_K(A_hu)_K= \sum_{F=K|L\in\mathcal F_{\rm int}}T_F(v_K-v_L)(u_K-u_L) +\sum_{F\in\mathcal F_{\rm bdy}}T_{K,F}v_Ku_K. $$
The stiffness matrix associated with the displayed bilinear identity is symmetric positive definite. Equivalently, $A_h$ is self-adjoint and positive definite in the volume-weighted inner product $\langle u,v\rangle_h=\sum_K|K|u_Kv_K$; its ordinary coordinate matrix need not be symmetric when cell volumes differ. Hence every finite source and boundary-data vector gives a unique solution. If all cell sources and all prescribed boundary face values are nonnegative, then every solution cell value is nonnegative. The maximum-principle claim uses the boundary anchor; no diagonal sign statement alone is used as a substitute for that condition.

## Facts & Assumptions

**Given:** A finite connected cell-face mesh, the positive TPFA transmissibilities, a path from every cell to a boundary face, finite real cell and face vectors, and the cell-balance convention of [[def-tpfa-harmonic-face-scheme]].

[F1] [[def-fv-admissible-cell-face-mesh]]: the cell adjacency graph is finite; an interior face belongs to exactly two cells, and a boundary face belongs to one cell.

[F2] [[def-tpfa-harmonic-face-scheme]]: $T_F>0$; the two outward fluxes on an interior face are $T_F(u_K-u_L)$ and $T_F(u_L-u_K)$; a homogeneous boundary face contributes $T_{K,F}u_K$ to the cell operator.

[A1] The mesh is boundary anchored: every cell has a finite adjacency path to a cell incident to a Dirichlet boundary face. All cell volumes and transmissibilities are strictly positive.

## Proof

1.1 For an interior face $F=K|L$, the shared-flux definitions give $Q_{K,F}(u)+Q_{L,F}(u)=T_F(u_K-u_L)+T_F(u_L-u_K)=0$. Thus summing cell balances cancels every interior flux exactly. [F1, F2, algebra]

1.2 In $\sum_K |K|v_K(A_hu)_K$, the two terms contributed by an interior face are $T_F[v_K(u_K-u_L)+v_L(u_L-u_K)]=T_F(v_K-v_L)(u_K-u_L)$. A boundary face contributes $T_{K,F}v_Ku_K$. Summing all faces proves the displayed identity. [F1, F2, given, algebra]

2.1 Set $v=u$ in step 1.2. The resulting stiffness quadratic form is a sum of nonnegative terms. If it is zero, every interior term forces $u_K=u_L$, and every boundary term forces $u_K=0$ on its incident cell. The path condition [A1] propagates these zeros through the connected cell graph, so $u=0$. The finite-dimensional symmetric stiffness matrix therefore has trivial kernel and is positive definite and invertible. Since the volume matrix $M_h=\operatorname{diag}(|K|)$ is invertible, $A_h=M_h^{-1}(M_hA_h)$ is also invertible; inhomogeneous boundary values change only the right-hand side. [A1, step 1.2, algebra]

3.1 Suppose $u$ solves the cell balances with $f_K\ge0$ and $g_F\ge0$. If a cell value has a negative global minimum, choose a minimizing cell $K$. Every interior summand $T_F(u_K-u_L)$ in its balance is nonpositive, and every boundary summand $T_{K,F}(u_K-g_F)$ is strictly negative. Since the balance equals $|K|f_K\ge0$, all summands must be zero. Thus the minimum propagates unchanged to every adjacent cell along a path from [A1], but at a boundary face the summand $T_{K,F}(u_K-g_F)$ is strictly negative. This contradiction rules out a negative minimum, so all cell values are nonnegative. [F1, F2, A1, choose, algebra] ∎

