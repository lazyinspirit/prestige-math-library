---
id: def-joint-convergence-and-normalized-cycle-character-observables
kind: definition
title: "Joint convergence in distribution and the normalized cycle-character observables"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-shifted-character-observables-and-profile-moments, def-plancherel-measure-on-partitions, prop-plancherel-weights-sum-to-one, def-convergence-in-distribution-of-random-elements, def-law-or-distribution-of-a-random-element, def-multivariate-normal-law, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "Thm. 6.1 and the paragraph following it, printed pp. 29-30 (the normalization $\\sqrt k\\,n^{k/2}$ and the joint weak convergence)"
    - title: "Dan Romik, The Surprising Mathematics of Longest Increasing Subsequences, Cambridge University Press 2015; author-hosted manuscript of 20 August 2014 (363 pp.)"
      url: "https://danromik.com/resources/books/the-surprising-mathematics-of-longest-increasing-subsequences.pdf"
      locator: "§0.1, printed pp. 1-2 (convergence in distribution for real vectors)"
---

## Definition

Fix an integer $N\ge2$. For $n\ge1$ and $2\le k\le N$ define the real random variable
$$\eta_k^{(n)}(\lambda):=\frac{p_k^\#(\lambda)}{\sqrt k\,n^{k/2}},\qquad\lambda\vdash n,$$
on the finite probability space $(Y_n,P_n)$ of [[def-plancherel-measure-on-partitions]], whose weights are nonnegative and sum to one by [[prop-plancherel-weights-sum-to-one]], where $p_k^\#$ is the shifted character observable of [[def-shifted-character-observables-and-profile-moments]]; since $p_k^\#$ is a real function on $Y_n$, each $\eta_k^{(n)}$ is a real random variable on the finite space $Y_n$. Let
$$\eta^{(n)}:=\bigl(\eta_2^{(n)},\dots,\eta_N^{(n)}\bigr):Y_n\to\mathbb R^{N-1}$$
be the corresponding $\mathbb R^{N-1}$-valued random element, with law the pushforward of $P_n$ ([[def-law-or-distribution-of-a-random-element]]).

**Joint convergence in distribution** of such vectors means convergence in distribution of random elements in the sense of [[def-convergence-in-distribution-of-random-elements]]: if $\eta^{(n)}$ has law $\mu_n$ and $\eta$ has law $\mu$ on $\mathbb R^{N-1}$, then $\eta^{(n)}\Longrightarrow\eta$ means $\mu_n\Rightarrow\mu$ weakly, that is, $\int f\,d\mu_n\to\int f\,d\mu$ for every bounded continuous real function $f$ on $\mathbb R^{N-1}$.

The **standard Gaussian target law** is $N_{N-1}(0,I_{N-1})$ ([[def-multivariate-normal-law]]), the law of a vector with independent standard normal coordinates; under AC this multi-dimensional law exists and is available in the library. For independent standard Gaussian random variables $\xi_k$, $2\le k\le N$, this target is the law of $(\xi_2,\dots,\xi_N)$. The unnormalized observables $p_k^\#/n^{k/2}$ instead have the target coordinates $\zeta_k:=\sqrt k\,\xi_k$, independent centered Gaussians of variances $k$; the normalization $\eta_k^{(n)}=p_k^\#/(\sqrt k\,n^{k/2})$ is chosen so that this is the limit asserted in [[thm-kerov-central-limit-theorem-for-normalized-cycle-characters]]. No convergence is asserted in this definition, and no choice principle is used beyond the existence of the target law.
