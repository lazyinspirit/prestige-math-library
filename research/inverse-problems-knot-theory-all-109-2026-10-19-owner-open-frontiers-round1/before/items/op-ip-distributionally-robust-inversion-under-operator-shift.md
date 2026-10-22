---
id: op-ip-distributionally-robust-inversion-under-operator-shift
kind: open-problem
title: Minimax recovery under bounded operator and truth-law shift
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
axiom_use: No choice axiom is used; all data laws, perturbation classes, and learners are explicit inputs.
sources:
  references:
    - title: "Floor van Maarschalkerwaart, Subhadip Mukherjee, Christoph Brune, and Marcello Carioni, A Distributionally Robust Framework for Learned Reconstructions in Inverse Problems (2026)"
      url: https://arxiv.org/pdf/2606.30230v1
      locator: "Theorem 4.2 and its complete proof: explicit worst-case squared-risk bound for conditional measurement-law perturbations with a fixed truth marginal; §4.3 discusses truth-marginal perturbations."
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences, ICLR 2025"
      url: https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf
      locator: "Full 29-page proceedings paper, §§4.3–5 and Appendix C: selected empirical prior-shift and out-of-distribution behaviors; no uniform recovery modulus is proved."
    - title: "Guillaume Bal, Introduction to Inverse Problems, E6901 Lecture Notes, full 132-page text"
      url: https://www.stat.uchicago.edu/~guillaumebal/COURSES/E6901/LectureNotesIP.pdf
      locator: "§1.1 and §§8.2–8.3, PDF pp. 3–4 and 91–97: forward models, noise, prior assumptions, regularization, Bayesian inverse problems, and computational limits."
---

## Open problem

Fix an integer $N\ge1$, parameters $p,s,R,\sigma>0$, a shift radius $\rho_X\ge0$, and an operator radius $0\le\rho_A<1/2$. Let $\mathcal H=\ell^2(\mathbb N)$, with norm $\|\theta\|_2^2=\sum_{j\ge1}\theta_j^2$, and define the compact truth class
$$\Theta_s(R)=\left\{\theta\in\mathcal H:\sum_{j\ge1}j^{2s}\theta_j^2\le R^2\right\},\qquad (A_p\theta)_j=j^{-p}\theta_j.$$
Let $\mathcal Y=\mathbb R^{\mathbb N}$ have its product Borel sigma-algebra. A sequence observation with forward operator $A$ is $Y_j=(A\theta)_j+\sigma\xi_j$, where the $\xi_j$ are independent $N(0,1)$ variables; this defines a probability law on $\mathcal Y$ even though the white-noise sequence need not lie in $\ell^2$. Write $\mathcal P(K)$ for the Borel probability laws on a Borel set $K$. For a Borel probability law $\mu_0$ on $\Theta_s(R)$, the training data are $D_N=((\theta_i,Y_i))_{i=1}^N$ with independent $\theta_i\sim\mu_0$ and $Y_i=A_p\theta_i+\sigma\xi_i$. At test time, $\theta\sim\mu$ for another Borel probability law $\mu$ on $\Theta_s(R)$ and the unknown forward operator is $A_{p,E}=A_p(I+E)$, where $E:\ell^2\to\ell^2$ is bounded linear and $\|E\|_{\mathrm{op}}\le\rho_A$. Write $\mathcal L(\ell^2)$ for the bounded linear operators from $\ell^2$ to itself. The learner receives $D_N$ and the test observation $Y$, but not $E$.

For probability laws $\mu,\mu_0$ on $\Theta_s(R)$, define their Wasserstein distance by
$$W_1(\mu,\mu_0)=\inf_{\Gamma\in\Pi(\mu,\mu_0)}\int_{\Theta_s(R)\times\Theta_s(R)}\|\theta-\theta_0\|_2\,\Gamma(d\theta,d\theta_0),$$
where $\Pi(\mu,\mu_0)$ is the set of couplings with those marginals. A learner is a Borel map $G_N:(\Theta_s(R)\times\mathcal Y)^N\times\mathcal Y\to\ell^2$. For fixed training data its test risk is
$$R_{\mu,E}(G_N\mid D_N)=E_{\theta\sim\mu,\,\xi}\left\|G_N(D_N,A_p(I+E)\theta+\sigma\xi)-\theta\right\|_2^2,$$
where $\xi$ is an independent standard Gaussian sequence. Define the robust minimax value
$$\mathfrak R_N(\rho_X,\rho_A)=\inf_{G_N}\sup_{\substack{\mu_0,\mu\in\mathcal P(\Theta_s(R)),\ W_1(\mu,\mu_0)\le\rho_X\\ E\in\mathcal L(\ell^2),\ \|E\|_{\mathrm{op}}\le\rho_A}}E_{D_N\sim(\mu_0,A_p)}R_{\mu,E}(G_N\mid D_N).$$
Determine matching upper and lower bounds for $\mathfrak R_N(\rho_X,\rho_A)$ as a function of $N,\rho_X,\rho_A,p,s,R,\sigma$, and identify necessary and sufficient joint regimes in which it tends to zero. In particular, the bound must distinguish source-to-test truth-law shift from perturbation of the conditional measurement law induced by $E$; no access to $E$ is available at deployment.

## Open problem references

[van Maarschalkerwaart et al., full 2026 paper](https://arxiv.org/pdf/2606.30230v1)

[Zheng et al., ICLR 2025 InverseBench paper](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf)

[Bal, full inverse-problems lecture notes](https://www.stat.uchicago.edu/~guillaumebal/COURSES/E6901/LectureNotesIP.pdf)

## Status

Proposed formulation as of 2026-10-19; no global open-status claim is certified. The 2026 structured distributionally robust paper proves a finite-dimensional upper bound for squared reconstruction risk when only the conditional measurement law is perturbed and the truth marginal is fixed; it also states that its truth-marginal perturbation case has no tractable closed form without extra assumptions. InverseBench reports dataset-specific prior-shift experiments, not a uniform theorem. The simultaneous Sobolev-ellipsoid, unknown relative-operator, and truth-law Wasserstein minimax problem above remains an owner-review obligation; this draft does not assert that all bounded-shift specializations are unsolved.

## Status references

[van Maarschalkerwaart et al., Theorem 4.2 and §4.3](https://arxiv.org/pdf/2606.30230v1)

[Zheng et al., §5 and Appendix C](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf)
