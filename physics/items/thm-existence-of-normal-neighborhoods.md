---
id: "thm-existence-of-normal-neighborhoods"
kind: "theorem"
title: "Existence of normal neighborhoods"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-the-differential-of-exp-p-at-zero-is-the-identity","lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space","thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth","def-c-r-and-smooth-maps-between-smooth-manifolds","thm-coordinate-formula-for-the-differential","def-countable-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Corollary 17.1.7, p.130
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "inverse-function-theorem"
---

## Statement

Assume $\mathrm{AC}_\omega$. For every point $p$ of a boundaryless Riemannian manifold, there is an open star-shaped neighbourhood $\widetilde U_p$ of $0_p$ in $T_pM$, contained in $\mathcal E_p$, such that
$$\exp_p:\widetilde U_p\longrightarrow U_p:=\exp_p(\widetilde U_p)$$
is a diffeomorphism and $U_p$ is an open neighbourhood of $p$.

## Facts & Assumptions

**Given:** A point $p$ of a boundaryless Riemannian $n$-manifold.

[F1] Under [[def-countable-choice]], [[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]] makes $\mathcal E_p$ open about $0_p$ and $\exp_p$ smooth, while [[thm-the-differential-of-exp-p-at-zero-is-the-identity]] gives $d(\exp_p)_{0_p}=I$.

[F2] [[def-c-r-and-smooth-maps-between-smooth-manifolds]] characterizes smoothness in smooth charts, and [[thm-coordinate-formula-for-the-differential]] identifies the derivative of the coordinate representative with the matrix of the manifold differential.

[F3] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]] gives a smooth local inverse for a positive-dimensional smooth Euclidean map whose derivative at the base point is invertible, without any additional choice principle.

## Proof

**Proof technique:** inverse-function-theorem.

1.1 Suppose $n\ge1$. Choose one smooth chart $x:Q\to x(Q)\subseteq\mathbb R^n$ at $p$ and let $L:\mathbb R^n\to T_pM$ be the inverse of the chart-induced linear isomorphism $dx_p$. The local representative $F=x\circ\exp_p\circ L$ is defined and smooth on the open neighbourhood $L^{-1}(\mathcal E_p\cap\exp_p^{-1}(Q))$ of $0$ by [F1]--[F2], satisfies $F(0)=x(p)$, and has derivative $DF(0)=dx_p\circ I\circ L=I$ by [F1]--[F2]. [F1, F2]

2.1 Apply [F3] to $F$. It yields open neighbourhoods $P$ of $0$ and $W$ of $x(p)$ on which $F$ is a diffeomorphism. Since $P$ is open about $0$, choose $r>0$ with $B(0,r)\subseteq P$. Put $\widetilde U_p=L(B(0,r))$. This set is open and star-shaped about $0_p$, and the restriction of $\exp_p$ is a diffeomorphism onto its image: it is the chart conjugate of the restriction of $F|_P$, whose inverse remains smooth. Its image $U_p$ is open because $F(B(0,r))$ is open in $W$ under the homeomorphism $F|_P$, and $x^{-1}$ is a chart homeomorphism. Finally $0_p\in\widetilde U_p$ and $\exp_p(0_p)=p$, so $p\in U_p$. [F1, F2, F3, step 1.1]

3.1 If $n=0$, a manifold chart shows that $\{p\}$ is open and $T_pM=\{0_p\}$. Take $\widetilde U_p=\{0_p\}$ and $U_p=\{p\}$; the exponential is the unique bijection and both it and its inverse are smooth under the zero-dimensional convention. Dimension one is included in steps 1.1--2.1. An empty manifold has no $p$, so the universal statement is vacuous. The source ball is open, so no sphere endpoint is included, and it contains the degenerate zero vector. $\mathrm{AC}_\omega$ is used only through [F1]; the choice-free inverse theorem [F3] and choosing one chart and one positive radius for the fixed $p$ require no family choice. [F1, F2, F3, step 1.1, step 2.1] ∎
