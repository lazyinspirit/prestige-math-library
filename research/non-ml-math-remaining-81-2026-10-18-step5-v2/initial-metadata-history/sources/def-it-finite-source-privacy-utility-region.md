---
id: def-it-finite-source-privacy-utility-region
kind: definition
title: "Finite-source privacy–utility region"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-finite-mutual-information, def-finite-stochastic-kernel]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; all alphabets, kernels, and distributions are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ali Makhdoumi, Salman Salamatian, Nadia Fawaz, and Muriel Médard, From the Information Bottleneck to the Privacy Funnel, ITW 2014"
      url: https://www.nadiafawaz.com/Publis/ConfPapers/Fawaz-ITW2014.pdf
      locator: "§§II–III: finite privacy mappings, log-loss privacy leakage, mutual-information utility, and the privacy-funnel optimization."
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, arXiv:1001.3404v3"
      url: https://arxiv.org/pdf/1001.3404v3
      locator: "The Wiretap Channel, PDF pp. 23-8–23-11: finite probability models and the distinction between wiretap secrecy and source privacy."
---

## Definition

Let $S$ be a finite sensitive variable and $X$ a finite useful variable with joint law $P_{SX}$. For each finite nonempty release alphabet $\mathcal Z$, choose a stochastic kernel $K(z\mid x)$ from $\mathcal X$ to $\mathcal Z$ ([[def-finite-stochastic-kernel]]) and form

$$P_{SXZ}(s,x,z):=P_{SX}(s,x)K(z\mid x).$$

Thus the induced variables satisfy the explicitly defined factorization $P_{SXZ}=P_{SX}K_{Z\mid X}$, written $S-X-Z$. The **privacy–utility region** for this source is the closure in $\mathbb R^2$ of

$$\bigcup_{\mathcal Z,K}\left\{\bigl(I(S;Z),I(X;Z)\bigr)\right\},$$

where mutual information uses nats and the finite definition [[def-it-finite-mutual-information]]. The first coordinate is the chosen leakage metric and the second is the chosen retained-information utility. This model does not itself impose a distortion, rate, or perfect-privacy constraint; those define different optimization problems.
