---
id: "thm-na-ultraweak-poisson-adjoint-graph-infsup"
kind: "theorem"
title: "Adjoint graph inf-sup for ultraweak Poisson on connected Lipschitz polyhedra"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 8
deps: ["def-na-ultraweak-poisson-dpg-formulation", "lem-na-ultraweak-poisson-bounded-load-lifting", "lem-na-ultraweak-poisson-trial-kernel", "lem-na-ultraweak-poisson-bilinear-form-bounded", "thm-riesz-representation-for-hilbert-space", "def-countable-choice"]
justified_by: []
aliases: []
proof_strategy: direct
provenance: {"statement": "ai-altered", "proof": "ai-altered"}
sources: {"references": [{"title": "Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG method", "url": "https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf", "locator": "Complete 15-page article; §2 Theorem 2.1/proof, §§3.1–3.4 and Lemmas 3.1–3.3."}, {"title": "Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method for the Poisson equation", "url": "https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf", "locator": "Complete 22-page article; §§3–4 and Theorem 4.2; simple connectivity hypothesis noted."}, {"title": "Leszek Demkowicz, Mathematical Theory of Finite Elements", "url": "https://users.ices.utexas.edu/~leszek/classes/EM394H/book.pdf", "locator": "Complete 229-page monograph; §§5.1–5.2 and §§5.6.2, 5.6.4."}, {"title": "Carstensen, Demkowicz, and Gopalakrishnan, A Posteriori Error Control for DPG Methods", "url": "https://web.pdx.edu/~gjay/pub/cdg.pdf", "locator": "Complete 21-page article; complete §2/Theorem 2.1 proof and §3.1."}]}
verification: {}
---

## Statement

Assume Countable Choice. For every bounded connected Lipschitz polyhedron in dimension two or three and every finite conforming shape-regular simplicial mesh, give $U$ its L2/global-quotient product norm and $V$ the full broken graph norm of [[def-na-ultraweak-poisson-dpg-formulation]]. With $C_*$ as in [[lem-na-ultraweak-poisson-bounded-load-lifting]], the primal and adjoint bounds are
$$\sup_{y\ne0}\frac{|b(x,y)|}{\|y\|_V}\ge C_*^{-1}\|x\|_U,\qquad \sup_{x\ne0}\frac{|b(x,y)|}{\|x\|_U}\ge C_*^{-1}\|y\|_V.$$
The constants are independent of the mesh. The operator $B:U\to V'$ and its Riesz trial-to-test map $T:U\to V$ are boundedly invertible, with inverse norms at most $C_*$. No assumption of simple connectivity or connected boundary is made.

## Facts & Assumptions

**Given:** Countable Choice, the indicated domain and mesh, and the stated exact norms.

[A1] Countable Choice is inherited from the trace and Hilbert interfaces. ([[def-countable-choice]])

[F1] The topology-free load lifting gives a bounded linear $R:V'\to U$ with $BR=I$ and norm at most $C_*$. ([[lem-na-ultraweak-poisson-bounded-load-lifting]])

[F2] The trial kernel is zero. ([[lem-na-ultraweak-poisson-trial-kernel]])

[F3] The form is bounded with constant at most five. ([[lem-na-ultraweak-poisson-bilinear-form-bounded]])

[F4] Riesz on the real Hilbert space $V$ is an isometric bijection $J_V:V\to V'$. ([[thm-riesz-representation-for-hilbert-space]])

[F5] The spaces, form and full graph norm are those of the formulation. ([[def-na-ultraweak-poisson-dpg-formulation]])

## Proof

1.1 By [F1], $B$ is onto, and [F2] makes it injective. For every $x$, $B(RBx-x)=0$; injectivity gives $RBx=x$. Therefore $B^{-1}=R$ and $\|x\|_U\le C_*\|Bx\|_{V'}$. The dual norm is the first displayed supremum, so this is the primal bound. [A1, F1, F2, F3, given, algebra]

2.1 For $y\ne0$, let $F=J_Vy$ and $x=RF$. Then $b(x,y)=F(y)=\|y\|_V^2$ and $\|x\|_U\le C_*\|F\|_{V'}=C_*\|y\|_V$. Here $x\ne0$ since $F\ne0$ and $Bx=F$. This particular $x$ gives the adjoint bound; for $y=0$ it is immediate. [F1, F4, step 1.1, algebra]

3.1 The trial-to-test map is $T=J_V^{-1}B$, so $T^{-1}=RJ_V$. Since the Riesz maps are isometries, $\|T\|\le5$ by [F3] and $\|T^{-1}\|\le C_*$. The constant from [F1] depends only on a domain Poincare constant, hence is uniform over the stated meshes in both dimensions. [F1, F3, F4, F5, step 1.1, step 2.1, algebra] ∎
