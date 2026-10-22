---
id: def-ip-minimax-detection-risk-and-separation
kind: definition
title: Minimax detection risk and separation rate
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-gaussian-sequence-inverse-model
  - def-countable-choice
  - def-finite-hypothesis-testing-beta
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Yuri I. Ingster, Theofanis Sapatinas and Irina A. Suslina, Minimax signal detection in ill-posed inverse problems, §2, PDF pp. 4–6"
      url: https://arxiv.org/pdf/1001.1853
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §6.2.1 and §6.2.3"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Definition

Assume Countable Choice and use the Gaussian sequence inverse model with singular values $s_j>0$, inverse-noise weights $\sigma_j=s_j^{-1}$, and parameter coordinates $\theta=(\theta_j)\in\ell^2$. Let $a=(a_j)$ be a positive nondecreasing sequence with $a_j\to\infty$, and let $\sigma=(\sigma_j)$ be a positive nondecreasing sequence with $\sigma_j\to\infty$. For $\varepsilon>0$, put $\eta_j=\theta_j/\sigma_j$ and observe $Y_j=Z_j/\sigma_j=\eta_j+\varepsilon\xi_j$, where $Z$ is the normalized observation in the Gaussian sequence inverse model and the $\xi_j$ are independent standard normal random variables. For $0<q\le2$ and $r>0$, define
$$\Theta_q(r)=\left\{\eta\in\mathbb R^{\mathbb N}:(\sigma_j\eta_j)_{j\ge1}\in\ell^2,\ \sum_{j=1}^{\infty}|a_j\sigma_j\eta_j|^q\le1,\ \sum_{j=1}^{\infty}\sigma_j^2\eta_j^2\ge r^2\right\}.$$
Test $H_0:\eta=0$ against $H_1:\eta\in\Theta_q(r)$ by a product-Borel measurable randomized test $\psi:\mathbb R^{\mathbb N}\to[0,1]$, where $\psi(y)$ is the rejection probability. Its type-I error and maximal type-II error are
$$\alpha_\varepsilon(\psi)=\mathbb E_{\varepsilon,0}\psi,\qquad \beta_\varepsilon(\Theta_q(r),\psi)=\sup_{\eta\in\Theta_q(r)}\mathbb E_{\varepsilon,\eta}(1-\psi).$$
When $\Theta_q(r)=\varnothing$, define $\beta_\varepsilon(\Theta_q(r),\psi)=\beta_\varepsilon(\Theta_q(r),\alpha)=\gamma_\varepsilon(\Theta_q(r))=0$, the convention that no type-II error occurs when no alternative is possible. For $\alpha\in(0,1)$ define
$$\beta_\varepsilon(\Theta_q(r),\alpha)=\inf_{\psi:\,\alpha_\varepsilon(\psi)\le\alpha}\beta_\varepsilon(\Theta_q(r),\psi),\qquad \gamma_\varepsilon(\Theta_q(r))=\inf_\psi\{\alpha_\varepsilon(\psi)+\beta_\varepsilon(\Theta_q(r),\psi)\}.$$
A positive family $r_\varepsilon^*\to0$ is a minimax separation rate if $\gamma_\varepsilon(\Theta_q(r_\varepsilon))\to1$ and $\beta_\varepsilon(\Theta_q(r_\varepsilon),\alpha)\to1-\alpha$ for every $\alpha\in(0,1)$ whenever $r_\varepsilon/r_\varepsilon^*\to0$, while $\gamma_\varepsilon(\Theta_q(r_\varepsilon))\to0$ and $\beta_\varepsilon(\Theta_q(r_\varepsilon),\alpha)\to0$ for every $\alpha\in(0,1)$ whenever $r_\varepsilon/r_\varepsilon^*\to\infty$.

## Definition references

[[def-ip-gaussian-sequence-inverse-model|The Gaussian sequence inverse model and the coordinate law $Z_j=\theta_j+\varepsilon s_j^{-1}\xi_j$]]

[[def-countable-choice|Countable Choice, which is assumed by the upstream sequence model]]

[[def-finite-hypothesis-testing-beta|The null-first type-I/type-II orientation of the testing function]]

[Ingster, Sapatinas and Suslina, *Minimax signal detection in ill-posed inverse problems*, §2, PDF pp. 4–6](https://arxiv.org/pdf/1001.1853)

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §6.2.1 and §6.2.3, PDF pp. 489–494 and 506–508](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)
