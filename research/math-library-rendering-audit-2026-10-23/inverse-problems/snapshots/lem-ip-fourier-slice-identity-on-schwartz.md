---
id: lem-ip-fourier-slice-identity-on-schwartz
kind: lemma
title: Fourier-slice identity for Schwartz inputs
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-schwartz-radon-transform
  - lem-ip-schwartz-radon-well-defined
  - def-fourier-transform-on-l-one-of-rn
  - lem-schwartz-functions-and-all-derivatives-are-integrable
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - cor-c-one-change-of-variables-for-l-one-functions
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.1, pp. 4–5, Theorem 2.1 and its Fubini proof."
    - title: "Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography"
      url: "https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf"
      locator: "§1.3.2, pp. 12–14: line-normal parameterization and Fourier-slice identity."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Countable Choice. For every $f\in\mathcal S(\mathbb R^2)$, $\theta\in S^1$, and $\sigma\in\mathbb R$, the one-dimensional Fourier transform in the offset variable, using the phase $e^{-2\pi i s\sigma}$, satisfies $\widehat{R_{\mathcal S}f}(\theta,\sigma)=\widehat f(\sigma\theta)$, where the two-dimensional transform uses the phase $e^{-2\pi i x\cdot\xi}$. On compactly supported smooth inputs the formula has the same line parameterization and normalization as the Euclidean Radon transform.

## Statement references

[Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1](https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf)

[Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography, §1.3.2](https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf)

## Facts & Assumptions

**Given:** $f\in\mathcal S(\mathbb R^2)$, $\theta\in S^1$, and $\sigma\in\mathbb R$.

[F1] [[def-ip-schwartz-radon-transform]]: $R_{\mathcal S}f(\theta,s)=\int_\mathbb R f(s\theta+t\theta^\perp)\,dt$.

[F2] [[lem-ip-schwartz-radon-well-defined]]: for fixed $\theta$, the offset function is Schwartz and its line integral is absolutely convergent.

[F3] [[def-fourier-transform-on-l-one-of-rn]]: $\widehat g(\xi)=\int_{\mathbb R^n}g(x)e^{-2\pi i x\cdot\xi}\,dx$ for integrable $g$.

[F4] [[lem-smooth-bump-between-concentric-euclidean-balls]]: for $0<r<R$, there is a smooth cutoff equal to one on the radius-$r$ closed ball and supported in the radius-$R$ open ball.

[F5] [[thm-dominated-convergence]]: pointwise convergence under a single integrable majorant permits passage to the limit under an integral.

[F6] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: an absolutely integrable function on a product of sigma-finite measure spaces has integrable sections almost everywhere and its iterated integrals equal its product integral.

[F7] [[cor-c-one-change-of-variables-for-l-one-functions]]: assuming Countable Choice, a $C^1$ diffeomorphism changes an $L^1$ Lebesgue integral by the absolute Jacobian determinant.

[F8] [[lem-schwartz-functions-and-all-derivatives-are-integrable]]: under Countable Choice every Schwartz function and each of its derivatives is in $L^1$.

[A1] [[def-countable-choice]]: Countable Choice is assumed for the compact-support Lebesgue/Riemann compatibility in [F1], the Lebesgue change-of-variables supplier [F7], and Schwartz integrability [F8].

## Proof

1.1 The Schwartz seminorms and the estimate proved in [[lem-ip-schwartz-radon-well-defined]] give $|f(s\theta+t\theta^\perp)|\le C_N(1+|s|+|t|)^{-N}$ for every $N$, after changing the constant. For $N>2$ this is integrable on $\mathbb R^2$ in $(s,t)$. The offset integral is absolutely convergent, and [F6] applied to the absolutely integrable function $f(s\theta+t\theta^\perp)e^{-2\pi i\sigma s}$ yields $\widehat{R_{\mathcal S}f}(\theta,\sigma)=\int_{\mathbb R^2}f(s\theta+t\theta^\perp)e^{-2\pi i\sigma s}\,ds\,dt$. The Lebesgue Fourier-transform definitions in [F3] are applicable by [F8]. [A1, F1, F2, F3, F6, F8, given]

1.2 Choose a smooth radial cutoff $\chi_R$ equal to one on the radius-$R$ ball and supported in the radius-$2R$ ball, using [F4], and put $f_R=\chi_Rf$. Then $f_R\in C_c^\infty(\mathbb R^2)$. The matrix with columns $\theta,\theta^\perp$ is a positively oriented orthogonal matrix, so its determinant is one. Apply the Lebesgue change-of-variables formula [F7] to the integrable compactly supported function $x\mapsto f_R(x)e^{-2\pi i\sigma x\cdot\theta}$ and the map $(s,t)\mapsto s\theta+t\theta^\perp$; its pullback integral is $\int_{\mathbb R^2}f_R(s\theta+t\theta^\perp)e^{-2\pi i\sigma s}\,ds\,dt=\widehat{f_R}(\sigma\theta)$. [F4, F7, A1, given]

2.1 As $R\to\infty$, $f_R(x)\to f(x)$ and $|f_R(x)|\le |f(x)|$. The function $f$ is integrable by [F8], and the same Schwartz estimate in $(s,t)$ gives an integrable majorant for $f_R(s\theta+t\theta^\perp)$. Dominated convergence [F5] passes both integrals in step 1.2 to their limits; step 1.1 identifies the data-side limit with $\widehat{R_{\mathcal S}f}(\theta,\sigma)$, while the spatial-side limit is $\widehat f(\sigma\theta)$. This proves the formula. [A1, F5, F8, step 1.1, step 1.2] ∎
