---
id: rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty
kind: remark
title: Proof cost and complex-analysis interface for Hardy uncertainty
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - lem-hardy-entire-growth-rigidity
  - thm-hardy-gaussian-uncertainty-principle
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Aingeru Fernández-Bertolín and Eugenia Malinnikova, Dynamical Versions of Hardy's Uncertainty Principle: A Survey (arXiv:2210.03369)"
      url: "https://arxiv.org/pdf/2210.03369"
      locator: "§§1–2, pp. 1–8; Theorem 1 and the higher-dimensional remark p. 2"
    - title: "Terence Tao, Hardy's uncertainty principle (blog post, 18 February 2009)"
      url: "https://terrytao.wordpress.com/2009/02/18/hardys-uncertainty-principle/"
      locator: "Section 1, the complex-variable proof with the sector Phragmén–Lindelöf tweak"
---

## Remarks

The complex-analysis cost of [[thm-hardy-gaussian-uncertainty-principle]] is the one-variable rigidity in [[lem-hardy-entire-growth-rigidity]]. For the critical function $\Phi(z)=e^{\pi z^2/a}F(z)$, that lemma first bounds $q_\delta\Phi$ on two sectors of aperture $\theta<\pi/2$, with $q_\delta=e^{i\delta z^2}$ on the first and $q_\delta=e^{-i\delta z^2}$ on the second. It then uses $h_\varepsilon(z)=\exp(i\varepsilon e^{i\mu}z_{\mathrm{pr}}^{2+\varepsilon})$, with the sector-dependent phase $\mu$ specified in its step 1.2, so that $|h_\varepsilon(z)|\le e^{-\varepsilon\sigma_\varepsilon|z|^{2+\varepsilon}}$ uniformly in angle. Boundary and infinity control give the sector bound; removing the perturbations and applying Liouville gives critical rigidity. Coordinate slices then yield the higher-dimensional theorem.

The estimate $|F(x+iy)|\le C_1e^{\pi y^2/a}$ comes from the spatial Gaussian bound; the critical decay is $e^{-\pi x^2/a}$. Tao's real-variable proof in the cited post proves a weaker, non-sharp threshold $ab>C_0$. This describes that particular proof, not a limitation of all real-variable methods: the cited survey, §1, printed p. 2, also records a complete sharp real-variable proof.
