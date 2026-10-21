---
id: op-ip-stable-limited-angle-reconstruction
kind: open-problem
title: Sharp deterministic stability for limited-angle reconstruction
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-countable-choice
  - def-ip-visible-covector-for-limited-angle-data
  - lem-ip-limited-angle-radon-data-is-l2-on-compact-support
  - prop-ip-limited-angle-fourier-visibility
  - prop-ip-limited-angle-data-no-holder-stability
  - def-ip-identifiability-and-stability-modulus
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.1, pp. 4–5: the full-angle Fourier-slice and compact-support uniqueness baseline."
    - title: "Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography"
      url: "https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf"
      locator: "§1.3.2, pp. 13–14, Theorem 3; §1.5.1, pp. 34–35, visible directions."
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://arxiv.org/pdf/2306.05906"
      locator: "§1.2, Theorem 1.2, and §1.3, Theorem 1.3, pp. 4–5; contextual analytic continuation result."
    - title: "Daniel Hohmann and Hajo Holzmann, Weighted angle Radon transform: Convergence rates and efficient estimation"
      url: "https://www3.stat.sinica.edu.tw/ss_newpaper/SS-14-064_na.pdf"
      locator: "§3.1, Corollary 3.2 (limited-angle minimax risk)."
    - title: "Daniel Hohmann and Hajo Holzmann, supplementary proof of Weighted angle Radon transform: Convergence rates and efficient estimation"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/A26n17s.pdf"
      locator: "Appendix A.1, proof of Theorem 3.1 and supporting Lemma A.4."
verification:
  precheck: n/a
---

## Open problem

Assume the Axiom of Countable Choice. Let $\Omega\subset\mathbb R^2$ be any bounded open set with nonempty interior, and let $\Theta\subset S^1$ be any nonempty proper open antipodally symmetric set whose complement contains a nonempty open arc. Write $\theta^\perp=(-\theta_2,\theta_1)$ and define $R_\Theta f(\theta,s)=\int_{\mathbb R}f(s\theta+t\theta^\perp)\,dt$ for $\theta\in\Theta$, $s\in\mathbb R$. Equip $L^2(\Theta\times\mathbb R)$ with the norm $\|g\|_2=(\int_\Theta\int_{\mathbb R}|g(\theta,s)|^2\,ds\,d\theta)^{1/2}$, where $ds$ is Lebesgue measure and $d\theta$ is arc-length measure, and equip $L^2(\mathbb R^2)$ with Lebesgue measure. The line data of every compactly supported smooth input are regarded as elements of this data space. For $M>0$ define $\mathcal K_M(\Omega)=\{f\in C_c^\infty(\Omega;\mathbb C):\|f\|_{H^1}\le M\}$ with $\|f\|_{H^1}^2=\|f\|_2^2+\|\partial_1f\|_2^2+\|\partial_2f\|_2^2$. For deterministic noise radius $\delta>0$, define the worst-case reconstruction error $\mathcal E_{\Omega,\Theta,M}(\delta)=\inf_{\Phi:L^2(\Theta\times\mathbb R)\to L^2(\mathbb R^2)}\sup_{\substack{f\in\mathcal K_M(\Omega),\ \eta\in L^2(\Theta\times\mathbb R)\\\|\eta\|_2\le\delta}}\|\Phi(R_\Theta f+\eta)-f\|_2$.
Determine the sharp asymptotic order of $\mathcal E_{\Omega,\Theta,M}(\delta)$ as $\delta\downarrow0$, with matching upper and lower bounds and a deterministic reconstruction rule attaining the upper bound, for every such $\Omega$ and $\Theta$. In particular, determine the dependence of the sharp modulus on the geometry and aperture of the measured normal set.

## Open problem references

[Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1](https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf)

[Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography, §§1.3.2 and 1.5.1](https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf)

[Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms, §§1.2–1.3](https://arxiv.org/pdf/2306.05906)

[Daniel Hohmann and Hajo Holzmann, “Weighted angle Radon transform: Convergence rates and efficient estimation,” §3.1, Corollary 3.2](https://www3.stat.sinica.edu.tw/ss_newpaper/SS-14-064_na.pdf)

[Daniel Hohmann and Hajo Holzmann, supplementary proof, Appendix A.1 (Theorem 3.1 and Lemma A.4)](https://www3.stat.sinica.edu.tw/statistica/oldpdf/A26n17s.pdf)

## Status

Status as of 2026-10-19: the broad deterministic minimax question above remains unresolved in the checked source record. Salo proves the full-angle Fourier-slice and compact-support uniqueness baseline. Krishnan and Quinto prove compact-support uniqueness for limited-angle data while exhibiting nonzero Schwartz null functions; they also describe the visible covector condition. The local results on this page establish a no-Hölder lower-bound mechanism for each fixed compact support and blind arc, but none of the checked sources supplies matching deterministic minimax bounds for every bounded $\Omega$, every such $\Theta$, and this fixed $H^1$ ball. The analytic double-fibration result cited above is context only and is not a proof of this Euclidean noise question.

Related statistical result checked 2026-10-21: Hohmann and Holzmann, Corollary 3.2, proves the logarithmic minimax mean-squared risk $r_\varepsilon(\Theta_i(\kappa,L))\sim (\xi/2)^{2\kappa}L\log(1/\varepsilon)^{-2\kappa}$ for $0<\eta<\pi/2$, angle weight $\lambda=\mathbf 1_{[-\eta,\eta]}$, and $\gamma>-1/2$, in their Gaussian white-noise sequence model for the Radon SVD between weighted $L^2$ spaces on the unit disk and detector space and over their spectral ellipsoid classes $\Theta_i(\kappa,L)$. Its model and parameter classes do not settle the deterministic adversarial $L^2$-noise minimax error on the unweighted $H^1$ class for arbitrary $\Omega$ and $\Theta$ posed here.
