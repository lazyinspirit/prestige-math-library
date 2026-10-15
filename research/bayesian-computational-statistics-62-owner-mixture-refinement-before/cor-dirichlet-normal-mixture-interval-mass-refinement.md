---
id: cor-dirichlet-normal-mixture-interval-mass-refinement
kind: corollary
title: "An interval-mass condition removes the Gaussian-bias logarithm"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 10
deps:
  - thm-dirichlet-normal-mixture-posterior-contraction
  - lem-dirichlet-normal-mixture-local-prior-mass
  - lem-hellinger-ratio-controls-kl-moments
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, Theorem 1, equation (2.2), and §9 proof"
      url: "https://arxiv.org/pdf/0708.1885"
---

## Statement

Under the hypotheses of [[thm-dirichlet-normal-mixture-posterior-contraction]],
assume additionally that $\operatorname{supp}(p_0)$ is a finite union of
intervals and there are $a,c>0$ such that $P_0(I)\ge c\lambda(I)^a$ for
every interval $I$ contained in the support. Then the source's sharpened
Hellinger contraction rate is
$$\max\{(n\sigma_n)^{-1/2}\log n,\ n^{-1/2}\sigma_n^{-\eta},\ \sigma_n^2\},\qquad \eta>\frac{\gamma}{2(\gamma-1)}.$$
If $G$ is compactly supported in $(0,\infty)$, the middle term is omitted.

## Facts & Assumptions

**Given:** The exact hypotheses of [[thm-dirichlet-normal-mixture-posterior-contraction]] and the stated finite-union-of-intervals lower-mass condition.

## Authoring blocker

The interval-mass refinement is retained as a separate item, but its proof is escalated. The complete proof in the cited source's §9 obtains the improved local KL/log-square bound through a pointwise likelihood-ratio control and invokes its Lemma 6 for the ratio $p_0/(p_0*\phi_{\sigma_n})$. That Lemma 6 assumes a unimodal density which is bounded away from zero on a central interval; those hypotheses are not in this corollary. The interval-mass premise alone gives the local lower bound $p_{F,\sigma}(x)\ge c\sigma_n^{a-1}$ in the construction, hence only $p_0(x)/p_{F,\sigma}(x)\le C\sigma_n^{1-a}$ from boundedness of $p_0$. For arbitrary $a>0$ this need not be uniformly bounded, so [[lem-hellinger-ratio-controls-kl-moments]] still leaves logarithmic factors. The missing supplier is a complete local lemma proving the required $P_0$-KL and log-square neighborhood mass at radius $\sigma_n^2$ under the stated interval-mass condition. No proof or acceptance is claimed here.
