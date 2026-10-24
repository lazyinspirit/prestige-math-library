---
id: cor-na-practical-dpg-poisson-quasioptimality-estimator
kind: corollary
title: P1/R3 practical DPG quasi-optimality and residual estimator for Poisson
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 10
deps:
  [
    def-na-ultraweak-poisson-dpg-formulation,
    thm-na-ultraweak-poisson-adjoint-graph-infsup,
    lem-na-ultraweak-poisson-bilinear-form-bounded,
    lem-na-practical-dpg-fortin-p1-r3,
    thm-na-practical-dpg-fortin-quasioptimality,
    thm-na-practical-dpg-residual-estimator-equivalence,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance: { statement: literature-derived, proof: ai-altered }
sources:
  references:
    - title: Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG
        method
      url: https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf
      locator: Sections 2 and 3 give the abstract practical-DPG theorem and planar
        polynomial family; the current connected-domain result uses the local
        graph theorem.
    - title: Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method for
        the Poisson equation
      url: https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf
      locator: The Poisson graph inf-sup proof in Section 4 assumes simple
        connectivity; that proof is not imported for the connected-polygon
        conclusion here.
    - title: Leszek Demkowicz, Mathematical Theory of Finite Elements
      url: https://users.ices.utexas.edu/~leszek/classes/EM394H/book.pdf
      locator: Sections 5.1–5.2 give the ideal and practical Petrov–Galerkin framework
        used by the conditional local results.
    - title: Carstensen, Demkowicz, and Gopalakrishnan, A Posteriori Error Control for
        DPG Methods
      url: https://web.pdx.edu/~gjay/pub/cdg.pdf
      locator: Section 2 proves the abstract residual reliability/efficiency estimate;
        Section 3 applies it to Poisson under its stated stability input.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $\Omega\subset\mathbb R^2$ be any bounded connected Lipschitz polygon, including polygons with holes, and let $\mathcal T_h$ be any finite conforming shape-regular triangular mesh. Use the exact two-dimensional P1/R3 practical family selected in PE30: volume fields $\sigma_h|_K\in P_1(K)^2$ and $u_h|_K\in P_1(K)$; compatible global scalar traces of degree at most two on facets, zero on boundary facets; conservative global normal traces of degree at most one; and broken tests $V_r=\prod_K(P_3(K)^2\times P_3(K))$, with the graph inner product inherited from $V$. The local Fortin projection $\Pi:V\to V_r$ is that of [[lem-na-practical-dpg-fortin-p1-r3]], and $C_\Pi$ is its operator norm bound. For each $f\in L^2(\Omega)$, the continuous ultraweak solution $x$ and practical solution $x_h$ exist uniquely, with $$\|x-x_h\|_U\le(1+5C_\Pi C_*)\inf_{z_h\in U_h}\|x-z_h\|_U.$$ For every $\widetilde x_h\in U_h$, put $\eta=\|F_f-B\widetilde x_h\|_{V_r'}$, where $V_r'$ is the dual of $V_r$ with its induced norm, and $\operatorname{osc}(F_f)=\|F_f\circ(I-\Pi)\|_{V'}$. Then $$C_*^{-2}\|x-\widetilde x_h\|_U^2\le\eta^2+(C_\Pi\eta+\operatorname{osc}(F_f))^2,\qquad \eta\le5\|x-\widetilde x_h\|_U,$$ and $$\operatorname{osc}(F_f)\le C_{\rm osc}\left(\sum_Kh_K^2\|f-f_K\|_{L^2(K)}^2\right)^{1/2},\qquad f_K=|K|^{-1}\int_Kf,$$ where $h_K=\operatorname{diam}(K)$ and $C_{\rm osc}$ is the cellwise constant from the Fortin map's mean-preserving local $L^2$ estimate. The constants $C_*$, $C_\Pi$, and $C_{\rm osc}$ are independent of mesh size for the fixed domain and shape-regular family. The practical corollary is two-dimensional; the continuous graph theorem also covers dimension three.

## Facts & Assumptions

**Given:** Countable Choice, a bounded connected Lipschitz polygon, a finite conforming shape-regular triangular mesh, and $f\in L^2(\Omega)$.

[A1] Countable Choice is the hypothesis for the cited Hilbert and Riesz interfaces. ([[def-countable-choice]])

[F1] The continuous graph theorem gives bounded invertibility and primal and adjoint inf-sup constants at least $C_*^{-1}$ on every connected Lipschitz polygon, with no simple-connectivity assumption. ([[thm-na-ultraweak-poisson-adjoint-graph-infsup]])

[F2] The local P1/R3 Fortin map applies on shape-regular triangular meshes, has $\|\Pi\|\le C_\Pi$, preserves scalar cell means, and satisfies the local $L^2$ approximation bound. ([[lem-na-practical-dpg-fortin-p1-r3]])

[F3] The DPG bilinear form is bounded with $\|b\|\le5$. ([[lem-na-ultraweak-poisson-bilinear-form-bounded]])

[F4] The conditional practical-DPG theorem gives a unique discrete solution and quasi-optimality under the stated continuous inf-sup and Fortin hypotheses. ([[thm-na-practical-dpg-fortin-quasioptimality]])

[F5] The conditional residual theorem gives reliability, efficiency and the Fortin data-oscillation estimate under the same hypotheses. ([[thm-na-practical-dpg-residual-estimator-equivalence]])

[F6] The load is $F_f(\tau,v)=(f,v)$, the test norm includes $\|v\|_2$, and the scalar skeleton trace is the trace of a global $H^1_0$ field. ([[def-na-ultraweak-poisson-dpg-formulation]])

## Proof

1.1 Since $\|F_f\|_{V'}\le\|f\|_2$, [F1] gives the unique continuous solution $x=B^{-1}F_f$. The mesh and discrete spaces satisfy [F2] exactly: the dimension is two, the mesh is triangular, and the compatible scalar trace vanishes on boundary facets. Apply [F4] with $\beta=C_*^{-1}$; using [F3] in its quasi-optimal constant gives the stated unique practical solution and factor $1+5C_\Pi C_*$. For $f=0$, both solutions are zero by these uniqueness conclusions. [A1, F1, F2, F3, F4, F6, given, algebra]

2.1 For any $\widetilde x_h\in U_h$, apply [F5] with the same $\beta=C_*^{-1}$ and Fortin map [F2]. Its reliability and efficiency inequalities give $$C_*^{-2}\|x-\widetilde x_h\|_U^2\le\eta^2+(C_\Pi\eta+\operatorname{osc}(F_f))^2,\qquad \eta\le\|b\|\|x-\widetilde x_h\|_U\le5\|x-\widetilde x_h\|_U.$$ [F1, F2, F3, F5, step 1.1, algebra]

3.1 For $y=(\tau,v)$, cell-mean preservation gives $\int_K(v-\Pi^{\rm grad}_3v)=0$, hence $$F_f((I-\Pi)y)=\sum_K(f-f_K,v-\Pi^{\rm grad}_3v)_K.$$ The local approximation bound in [F2] and Cauchy–Schwarz over cells give the displayed $C_{\rm osc}$ estimate. In particular the oscillation is zero when $f$ is cellwise constant. All constants depend on the fixed domain, polynomial degrees and mesh shape regularity, not on $h$; the graph proof makes no topological restriction, while this Fortin family is only the dimension-two branch. [F2, F6, step 2.1, algebra] ∎
