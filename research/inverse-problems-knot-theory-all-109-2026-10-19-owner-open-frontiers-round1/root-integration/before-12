---
id: op-ip-finite-compute-multimodal-posterior-fidelity
kind: open-problem
title: Finite-compute mode fidelity for score-based posterior samplers
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
axiom_use: No choice axiom is used; the target measures, diffusion schedule, score fields, and finite budgets are specified.
sources:
  references:
    - title: "Benjamin A. Burns and Sara Fridovich-Keil, When, why, and how do diffusion posterior samplers fail? A finite-sample lens (2026)"
      url: https://arxiv.org/pdf/2605.30330v1
      locator: "§4.1 and §5–6, with Appendix C proofs: empirical-prior posterior laws at positive diffusion times and observed mode-weight/mode-missing failures of moment-matching score-guidance methods."
    - title: "Giannis Daras et al., A Survey on Diffusion Models for Inverse Problems (2024)"
      url: https://arxiv.org/pdf/2410.00083v1
      locator: "§§2.4 and 3.3–3.4: posterior score guidance, finite reverse updates, and method-specific exactness caveats."
    - title: "Jan Blechschmidt, Oliver G. Ernst, Moritz Poguntke, and Björn Sprungk, Flow Matching for Fast Posterior Sampling in Bayesian Inverse Problems (2026)"
      url: https://arxiv.org/pdf/2610.02377v1
      locator: "§§3.3–3.4 and §5: Metropolized correction and computable a-posteriori TV/KL diagnostics for flow-matching posteriors, together with stated accuracy limits."
    - title: "Simon J. D. Prince, Understanding Deep Learning, Chapter 18: Diffusion Models (2026), complete course notes"
      url: https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html
      locator: "Chapter 18, sections on the reverse process, training and sampling algorithms, and faster sampling."
---

## Open problem

Fix dimension $d\ge1$, component count $L\ge2$, noise scale $\sigma>0$, diffusion horizon $T>0$, and a continuous schedule $\beta:[0,T]\to(0,\infty)$. Assume the parameter choices below admit at least one component configuration and mixture weight vector. Consider a posterior density on $\mathbb R^d$ of the form
$$\pi(x)=\sum_{\ell=1}^L w_\ell\,\mathcal N(x;\mu_\ell,\Sigma_\ell),\qquad \sum_{\ell=1}^Lw_\ell=1,\quad w_\ell\ge w_{\min}>0,$$
Here $\mathcal N(\cdot;\mu_\ell,\Sigma_\ell)$ denotes the normal density with mean $\mu_\ell$ and covariance matrix $\Sigma_\ell$. The component means satisfy $\|\mu_\ell\|_2\le M_0$ and $\|\mu_\ell-\mu_r\|_2\ge\Delta>0$ for $\ell\ne r$, and every eigenvalue of each positive-definite $\Sigma_\ell$ lies in $[v_{\min},v_{\max}]$ for fixed $0<v_{\min}\le v_{\max}<\infty$. Assume $0<w_{\min}\le1/L$ and $\Delta\ge8\sqrt{d v_{\max}}$. For $t\in[0,T]$, let $p_t$ be the density of $X_t$ under
$$dX_t=-\tfrac12\beta(t)X_t\,dt+\sqrt{\beta(t)}\,dW_t,\qquad X_0\sim\pi,$$
where $W_t$ is a standard $d$-dimensional Brownian motion, and let $s_t=\nabla\log p_t$ be its exact score. Let $\widehat s_t$ be a supplied jointly Borel, finite-valued score field satisfying the integrated error bound
$$\sup_{0\le t\le T}\int_{\mathbb R^d}\|\widehat s_t(x)-s_t(x)\|_2^2p_t(x)\,dx\le\varepsilon_s^2.$$
Consider fields whose Euler chain has finite first moment. For $h=T/J$, use the reverse-time Euler convention $Z_0\sim p_T$ and
$$Z_{k+1}=Z_k+h\left[\tfrac12\beta(T-kh)Z_k+\beta(T-kh)\widehat s_{T-kh}(Z_k)\right]+\sqrt{h\beta(T-kh)}\,\zeta_k,\qquad k=0,\ldots,J-1,$$
with $\zeta_k\sim N(0,I_d)$ independent of $Z_0$ and of one another. Generate $M\ge1$ independent terminal values $X^{(1)},\ldots,X^{(M)}$ and let $\widehat\pi_{J,M}=M^{-1}\sum_{i=1}^M\delta_{X^{(i)}}$; one score evaluation per reverse step gives online budget $B=JM$. Define disjoint mode regions $R_\ell=\{x:\|x-\mu_\ell\|_2<\Delta/4\}$, target masses $q_\ell=\pi(R_\ell)$, and empirical masses $\widehat q_\ell=\widehat\pi_{J,M}(R_\ell)$. For probability measures on $\mathbb R^d$, let $W_1$ be the infimum of $E\|X-Y\|_2$ over all couplings with the specified marginals. Determine whether the integrated score-error assumption alone yields finite minimax-sharp nonasymptotic upper and lower bounds, uniformly over the stated score-field class, for
$$E\,W_1(\widehat\pi_{J,M},\pi)+\Delta\sum_{\ell=1}^L E|\widehat q_\ell-q_\ell|+\Delta\,P\{\min_{1\le\ell\le L}\widehat q_\ell=0\}$$
as a function of $d,L,w_{\min},\Delta,v_{\min},v_{\max},M_0,T,\beta,\varepsilon_s,J,M$. In particular, characterize the compute regimes $B=JM$ that guarantee simultaneous control of distributional error and missed-mode probability uniformly over this family. This asks about score-based reverse diffusion with finite computation; it does not assume that the posterior is unimodal or that a good posterior mean certifies its mode weights.

## Open problem references

[Burns and Fridovich-Keil, full 2026 paper](https://arxiv.org/pdf/2605.30330v1)

[Daras et al., full diffusion inverse-problems survey](https://arxiv.org/pdf/2410.00083v1)

[Blechschmidt et al., full 2026 flow-matching paper](https://arxiv.org/pdf/2610.02377v1)

[Prince, Chapter 18 full diffusion notes](https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html)

## Status

Proposed formulation as of 2026-10-19; no global open-status claim is certified. Burns and Fridovich-Keil derive an empirical-prior finite-sample lens for intermediate diffusion marginals and exhibit incorrect mode weights, missed modes, and hallucinations for common moment-matching samplers; their finite-sample law becomes discrete at time zero and its accuracy worsens near zero. Blechschmidt et al. give a-posteriori TV/KL diagnostics and a Metropolized correction for conditional flow matching, but note accuracy degradation for concentrated posteriors and observations outside prior-predictive support. Neither inspected treatment gives the requested uniform score-error, Euler-step, empirical-sample, and mode-region bound for this separated Gaussian-mixture family. Formulation-specific solution-status review remains owed to the owner.

## Status references

[Burns and Fridovich-Keil, §§4.1, 5, and 6](https://arxiv.org/pdf/2605.30330v1)

[Blechschmidt et al., §§3.3–3.4 and §5](https://arxiv.org/pdf/2610.02377v1)
