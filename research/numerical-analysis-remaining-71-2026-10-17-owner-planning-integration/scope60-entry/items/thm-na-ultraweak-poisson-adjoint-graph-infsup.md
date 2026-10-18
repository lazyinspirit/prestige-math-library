---
id: thm-na-ultraweak-poisson-adjoint-graph-infsup
kind: theorem
title: Adjoint graph inf-sup for ultraweak Poisson on connected Lipschitz polyhedra
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps: [def-na-ultraweak-poisson-dpg-formulation, lem-na-ultraweak-poisson-skeleton-quotients, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, lem-w-one-two-is-a-hilbert-space, lem-na-hdiv-is-hilbert-and-h0div-closed, lem-na-ultraweak-poisson-bounded-load-lifting, lem-na-ultraweak-poisson-trial-kernel, lem-na-ultraweak-poisson-bilinear-form-bounded, thm-riesz-representation-for-hilbert-space, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance: {statement: literature-derived, proof: ai-altered}
sources:
  references:
    - title: Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG method
      url: https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf
      locator: Section 3 gives the ultraweak form and abstract DPG framework; its Poisson inf-sup input is imported rather than proved for the present topology-free domain class.
    - title: Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method for the Poisson equation
      url: https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf
      locator: Sections 4.1–4.3 give a different inf-sup proof under simple connectivity; the local proof here uses no Hodge or potential decomposition.
    - title: Leszek Demkowicz, Mathematical Theory of Finite Elements
      url: https://users.ices.utexas.edu/~leszek/classes/EM394H/book.pdf
      locator: Sections 5.1–5.2 describe ideal and practical DPG operators; the connected-domain graph bounds below follow from the local right inverse.
    - title: Carstensen, Demkowicz, and Gopalakrishnan, A Posteriori Error Control for DPG Methods
      url: https://web.pdx.edu/~gjay/pub/cdg.pdf
      locator: Section 2 gives the abstract DPG estimator framework; the topology-free graph bound below is proved locally.
---

## Statement

Assume Countable Choice. For every bounded connected Lipschitz polyhedron $\Omega\subset\mathbb R^d$, $d\in\{2,3\}$, and every finite conforming shape-regular simplicial mesh, give $U$ its $L^2$/global-quotient product norm and $V$ the full broken graph norm of [[def-na-ultraweak-poisson-dpg-formulation]]. With $C_*$ from [[lem-na-ultraweak-poisson-bounded-load-lifting]], the primal and adjoint bounds are $$\sup_{y\ne0}\frac{|b(x,y)|}{\|y\|_V}\ge C_*^{-1}\|x\|_U,\qquad \sup_{x\ne0}\frac{|b(x,y)|}{\|x\|_U}\ge C_*^{-1}\|y\|_V.$$ Both constants are independent of the mesh. The bounded operator $B:U\to V'$ and its Riesz trial-to-test map $T:U\to V$ are boundedly invertible, with inverse norms at most $C_*$. No simple-connectivity or connected-boundary hypothesis is required; connected polyhedra with holes are included.

## Facts & Assumptions

**Given:** Countable Choice, the stated connected Lipschitz polyhedron and finite mesh, and the exact real trial/test norms and bilinear form.

[A1] Countable Choice is the hypothesis for the Hilbert and Riesz interfaces used below. ([[def-countable-choice]])

[F1] The product trial and broken test spaces are real Hilbert spaces: their $L^2$ factors, global trace quotient ranges, $H(\operatorname{div})$ factors and $H^1$ factors have the stated real Hilbert structures. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[lem-na-ultraweak-poisson-skeleton-quotients]], [[lem-na-hdiv-is-hilbert-and-h0div-closed]], [[lem-w-one-two-is-a-hilbert-space]])

[F2] The real bilinear form defines a bounded operator $B:U\to V'$ with $|b(x,y)|\le5\|x\|_U\|y\|_V$. ([[lem-na-ultraweak-poisson-bilinear-form-bounded]])

[F3] The trial operator has trivial kernel: $Bx=0$ implies $x=0$. ([[lem-na-ultraweak-poisson-trial-kernel]])

[F4] There is a linear $R:V'\to U$ with $BR=I_{V'}$ and $\|R\|\le C_*$. ([[lem-na-ultraweak-poisson-bounded-load-lifting]])

[F5] The real Hilbert Riesz map $J_V:V\to V'$ is an isometric linear bijection. ([[thm-riesz-representation-for-hilbert-space]])

[F6] The formulation fixes the five signs of $b$, the real trial/test spaces and the full broken graph norm. ([[def-na-ultraweak-poisson-dpg-formulation]])

## Proof

1.1 The bounded form [F2] defines $B$, and [F4] makes $B$ onto. By [F3], $B$ is injective. For each $x\in U$, $B(RBx-x)=BRBx-Bx=0$, so injectivity gives $RBx=x$. Therefore $B^{-1}=R$, $\|x\|_U\le C_*\|Bx\|_{V'}$, and the dual norm identity $\|Bx\|_{V'}=\sup_{y\ne0}|b(x,y)|/\|y\|_V$ gives the primal bound. [A1, F2, F3, F4, F6, given, algebra]

2.1 For $y\ne0$, set $F=J_Vy$ and $x=RF$. Then $Bx=F$, so $b(x,y)=F(y)=\|y\|_V^2$, while [F4] and [F5] give $\|x\|_U\le C_*\|F\|_{V'}=C_*\|y\|_V$. Since $F\ne0$, $x\ne0$, and this $x$ proves the adjoint bound; for $y=0$ the bound is immediate. [F1, F4, F5, step 1.1, algebra]

3.1 Define $T=J_V^{-1}B$. By [F2], $\|T\|\le5$. Since $B^{-1}=R$, $T^{-1}=RJ_V$ and [F4] and [F5] give $\|T^{-1}\|\le C_*$. The lifting constant depends only on a fixed-domain Poincaré constant, so both graph inf-sup bounds are uniform over the stated mesh family; the construction uses no simple-connectivity or connected-boundary condition. [F1, F2, F4, F5, F6, step 1.1, step 2.1, algebra] ∎
