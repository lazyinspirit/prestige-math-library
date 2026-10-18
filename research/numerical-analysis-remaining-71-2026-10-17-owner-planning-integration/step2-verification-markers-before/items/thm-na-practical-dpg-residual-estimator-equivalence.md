---
id: "thm-na-practical-dpg-residual-estimator-equivalence"
kind: "theorem"
title: "Practical DPG residual is reliable and efficient up to data oscillation"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 9
deps: ["def-na-ultraweak-poisson-dpg-formulation", "lem-na-practical-dpg-fortin-p1-r3", "thm-na-practical-dpg-fortin-quasioptimality", "thm-riesz-representation-for-hilbert-space", "def-countable-choice"]
justified_by: []
aliases: []
proof_strategy: direct
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG method", "url": "https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf", "locator": "Complete 15-page article; §2 Theorem 2.1/proof, §§3.1–3.4 and Lemmas 3.1–3.3."}, {"title": "Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method for the Poisson equation", "url": "https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf", "locator": "Complete 22-page article; §§3–4 and Theorem 4.2; simple connectivity hypothesis noted."}, {"title": "Leszek Demkowicz, Mathematical Theory of Finite Elements", "url": "https://users.ices.utexas.edu/~leszek/classes/EM394H/book.pdf", "locator": "Complete 229-page monograph; §§5.1–5.2 and §§5.6.2, 5.6.4."}, {"title": "Carstensen, Demkowicz, and Gopalakrishnan, A Posteriori Error Control for DPG Methods", "url": "https://web.pdx.edu/~gjay/pub/cdg.pdf", "locator": "Complete 21-page article; complete §2/Theorem 2.1 proof and §3.1."}]}
---

## Statement

Assume Countable Choice. Assume the continuous trial-to-test operator is boundedly invertible with lower inf-sup constant $\beta>0$, and let $\Pi:V\to V_r$ be the bounded Fortin map with $b(U_h,(I-\Pi)V)=0$. For any exact solution $x=B^{-1}F$ and any $\widetilde x_h\in U_h$, define the practical residual estimator $\eta=\|F-B\widetilde x_h\|_{V_r'}$ and Fortin data oscillation $\operatorname{osc}(F)=\|F\circ(I-\Pi)\|_{V'}$. Then
$$\beta^2\|x-\widetilde x_h\|_U^2\le\eta^2+(\|\Pi\|\eta+\operatorname{osc}(F))^2,\quad \eta\le\|b\|\|x-\widetilde x_h\|_U,$$
$$\operatorname{osc}(F)\le\|b\|\|I-\Pi\|\inf_{z_h\in U_h}\|x-z_h\|_U.$$
For the stated P1/R3 Poisson Fortin map, $\operatorname{osc}(F_f)\le C(\sum_Kh_K^2\|f-f_K\|_{L^2(K)}^2)^{1/2}$, where $f_K=|K|^{-1}\int_K f$; it vanishes for cellwise constant $f$.

## Facts & Assumptions

**Given:** The continuous inf-sup bound, the bounded Fortin map, Countable Choice, and an arbitrary discrete approximation.

[A1] Countable Choice is declared for Hilbert Riesz representation. ([[def-countable-choice]])

[F1] The DPG trial/test spaces and load functional are fixed by the formulation. ([[def-na-ultraweak-poisson-dpg-formulation]])

[F2] The practical Fortin map preserves the trial form and has the local mean-preserving approximation bound. ([[lem-na-practical-dpg-fortin-p1-r3]])

[F3] The practical quasi-optimality theorem records the continuous inf-sup and boundedness hypotheses used here. ([[thm-na-practical-dpg-fortin-quasioptimality]])

[F4] Hilbert Riesz identifies dual norms with norms of representatives and orthogonal projections. ([[thm-riesz-representation-for-hilbert-space]])

## Proof

1.1 Let $e=x-\widetilde x_h$ and let $\epsilon\in V$ represent $F-B\widetilde x_h$ by Riesz. Choose an orthonormal basis $e_1,\ldots,e_N$ of the finite-dimensional polynomial space $V_r$ and set $\epsilon_h=\sum_{j=1}^N(\epsilon,e_j)_V e_j$. Then $\delta=\epsilon-\epsilon_h$ is orthogonal to $V_r$, $\eta=\|\epsilon_h\|_V=\|F-B\widetilde x_h\|_{V_r'}$, and $\|\epsilon\|^2=\eta^2+\|\delta\|^2$. Continuous inf-sup gives $\beta\|e\|\le\|\epsilon\|$. [A1, F2, F3, F4, given]

1.2 Riesz gives $\eta\le\|Be\|_{V'}\le\|b\|\|e\|$. For any $z_h\in U_h$, Fortin orthogonality gives $F((I-\Pi)y)=b(x-z_h,(I-\Pi)y)$; take the dual norm and infimum to obtain the oscillation approximation bound. [F1, F2, F4, given, algebra]

2.1 Since $\Pi\delta\in V_r$, $\|\delta\|^2=(\delta,\delta-\Pi\delta)$. Substitute $\epsilon-\epsilon_h$ for $\delta$; Fortin orthogonality kills $b(\widetilde x_h, (I-\Pi)\delta)$, leaving $F((I-\Pi)\delta)+(\epsilon_h,\Pi\delta)$. Hence $\|\delta\|\le\operatorname{osc}(F)+\|\Pi\|\eta$. Combine with step 1.1 to get the reliability inequality. [F2, F4, step 1.1, algebra]

3.1 For the Poisson load, mean preservation gives $\int_K(v-\Pi^{grad}_3v)=0$, so $F_f((I-\Pi)(\tau,v))=\sum_K(f-f_K,v-\Pi^{grad}_3v)_K$. By [F2], each difference is bounded by $Ch_K\|\nabla v\|_K$. Cauchy–Schwarz over cells yields the stated data oscillation; it is zero if every $f|_K=f_K$. [F1, F2, step 1.2, algebra] ∎
