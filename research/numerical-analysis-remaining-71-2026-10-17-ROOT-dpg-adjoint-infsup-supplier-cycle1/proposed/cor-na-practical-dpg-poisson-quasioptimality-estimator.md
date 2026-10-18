---
id: "cor-na-practical-dpg-poisson-quasioptimality-estimator"
kind: "corollary"
title: "P1/R3 practical DPG quasi-optimality and residual estimator for Poisson"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 10
deps: ["def-na-ultraweak-poisson-dpg-formulation", "thm-na-ultraweak-poisson-adjoint-graph-infsup", "lem-na-practical-dpg-fortin-p1-r3", "thm-na-practical-dpg-fortin-quasioptimality", "thm-na-practical-dpg-residual-estimator-equivalence", "def-countable-choice"]
justified_by: []
aliases: []
proof_strategy: direct
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG method", "url": "https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf", "locator": "Complete 15-page article; §2 Theorem 2.1/proof, §§3.1–3.4 and Lemmas 3.1–3.3."}, {"title": "Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method for the Poisson equation", "url": "https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf", "locator": "Complete 22-page article; §§3–4 and Theorem 4.2; simple connectivity hypothesis noted."}, {"title": "Leszek Demkowicz, Mathematical Theory of Finite Elements", "url": "https://users.ices.utexas.edu/~leszek/classes/EM394H/book.pdf", "locator": "Complete 229-page monograph; §§5.1–5.2 and §§5.6.2, 5.6.4."}, {"title": "Carstensen, Demkowicz, and Gopalakrishnan, A Posteriori Error Control for DPG Methods", "url": "https://web.pdx.edu/~gjay/pub/cdg.pdf", "locator": "Complete 21-page article; complete §2/Theorem 2.1 proof and §3.1."}]}
verification: {}
---

## Statement

Assume Countable Choice. On every bounded connected Lipschitz polygon and every finite conforming shape-regular triangular mesh, take the exact two-dimensional P1/R3 practical family of [[lem-na-practical-dpg-fortin-p1-r3]]: volume $P_1^2\times P_1$, continuous scalar trace P2 with homogeneous Dirichlet boundary condition, conservative normal trace P1, and broken $P_3^2\times P_3$ tests. For every $f\in L^2(\Omega)$ there is a unique continuous ultraweak solution $x$ and a unique practical solution $x_h$, with
$$\|x-x_h\|_U\le(1+5C_\Pi C_*)\inf_{z_h\in U_h}\|x-z_h\|_U.$$
For every $\widetilde x_h\in U_h$, let $\eta=\|F_f-B\widetilde x_h\|_{V_r'}$ and $\operatorname{osc}(F_f)=\|F_f\circ(I-\Pi)\|_{V'}$. Then
$$C_*^{-2}\|x-\widetilde x_h\|_U^2\le\eta^2+(C_\Pi\eta+\operatorname{osc}(F_f))^2,\qquad \eta\le5\|x-\widetilde x_h\|_U,$$
$$\operatorname{osc}(F_f)\le C_{\rm osc}\left(\sum_Kh_K^2\|f-f_K\|_{L^2(K)}^2\right)^{1/2},\qquad f_K=|K|^{-1}\int_Kf.$$
Here $C_*$ is the continuous graph constant from [[thm-na-ultraweak-poisson-adjoint-graph-infsup]], while $C_\Pi,C_{\rm osc}$ are the actual Fortin constants. All are mesh independent for the fixed domain and shape-regular family. Polygons with holes are included; no simple-connectivity assumption is imposed. The practical family is the dimension-two branch selected by PE30; the continuous graph theorem also covers dimension three.

## Facts & Assumptions

**Given:** Countable Choice, the exact planar P1/R3 family, and $f\in L^2(\Omega)$.

[A1] Countable Choice is inherited by the cited Hilbert and Sobolev interfaces. ([[def-countable-choice]])

[F1] The continuous graph theorem gives bounded invertibility and both inf-sup constants at least $C_*^{-1}$ on every connected Lipschitz polygon. ([[thm-na-ultraweak-poisson-adjoint-graph-infsup]])

[F2] The local P1/R3 Fortin map preserves the form, is mesh-uniformly bounded, and preserves scalar cell means with $\|v-\Pi^{grad}_3v\|_K\le C_{\rm osc}h_K\|\nabla v\|_K$. ([[lem-na-practical-dpg-fortin-p1-r3]])

[F3] The conditional practical theorem gives unique solution and quasi-optimality once the two continuous inf-sup bounds hold. ([[thm-na-practical-dpg-fortin-quasioptimality]])

[F4] The conditional residual theorem gives efficiency, reliability and the cell-average oscillation estimate. ([[thm-na-practical-dpg-residual-estimator-equivalence]])

[F5] The load is $F_f(\tau,v)=(f,v)$ and the form bound is at most five, as established in the proof of the practical theorem. ([[def-na-ultraweak-poisson-dpg-formulation]], [[thm-na-practical-dpg-fortin-quasioptimality]])

## Proof

1.1 Cauchy–Schwarz gives $\|F_f\|_{V'}\le\|f\|_2$. Thus [F1] yields a unique continuous $x=B^{-1}F_f$. The domain and mesh satisfy [F2–F3] literally: dimension two, triangular mesh and the specified trace/volume/test degrees. Apply [F3] with $\beta=C_*^{-1}$ and $\|b\|\le5$ to obtain the unique $x_h$ and displayed quasi-optimal estimate. [A1, F1, F2, F3, F5, given, algebra]

2.1 Apply [F4] to this invertible continuous operator and the same Fortin map. Its reliability and efficiency inequalities with $\beta=C_*^{-1}$ and $\|b\|\le5$ give the displayed estimator bounds for every $\widetilde x_h$, not just the practical minimizer. Its mean-preservation argument gives the displayed $f-f_K$ oscillation bound and zero oscillation for cellwise constant data. The continuous constant has no topological restriction, and the Fortin constants depend only on the fixed polynomial degrees and mesh shape regularity; all claims therefore hold on the entire stated connected planar scope. [F1, F2, F4, F5, step 1.1, algebra] ∎
