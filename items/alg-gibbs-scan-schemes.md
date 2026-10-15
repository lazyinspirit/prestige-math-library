---
id: alg-gibbs-scan-schemes
kind: algorithm
title: Random and systematic Gibbs scan schemes
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-gibbs-block-update
  - def-composition-of-probability-kernels
  - lem-kernel-composition-is-well-defined-and-associative
justified_by:
  - lem-gibbs-scan-schemes-are-probability-kernels
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 12"
      url: "https://artowen.su.domains/mc/Ch-MCMC.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
axiom_use: "No choice principle is used; the scan order and weights are supplied finite data."
---

## Definition

**Inputs:** A common finite-product measurable state space $(S,\mathcal S)$ with target probability $\pi$, an integer $m\ge1$, and for each $j=1,\ldots,m$ a nonempty block $B_j$ with its supplied proper full conditional kernel for $\pi$. Invoke [[alg-gibbs-block-update]] for each block to obtain its exact update kernel $P_j:S\to S$. Select random scan, systematic scan, or both; if random scan is selected, also supply fixed weights $w_j\ge0$ with $\sum_{j=1}^m w_j=1$.

**Admissible conditions:** Every $P_j$ acts on this same $(S,\mathcal S)$ and is an exact block-update kernel for this same target $\pi$. The weights are required only for the random-scan branch; systematic scan takes no weights.

**Outputs:** For each selected mode, its one-update random-scan kernel $P_{\rm rand}:S\to S$ or full-sweep systematic kernel $P_{\rm sweep}:S\to S$; for systematic scan, also the phase-indexed single-update kernels $P_1,\ldots,P_m$.

**Random-scan instructions:** At each update, independently draw $j\in\{1,\ldots,m\}$ with probabilities $w_1,\ldots,w_m$ and apply $P_j$ to the current state. The one-update kernel is
$$P_{\rm rand}(x,A)=\sum_{j=1}^m w_jP_j(x,A).$$
Uniform random scan is the special case $w_j=1/m$.

**Systematic-scan instructions:** Starting from the current state, apply $P_1$, then $P_2$, through $P_m$ in that fixed order; repeat the same order for each subsequent sweep. For kernels, $P_1\cdots P_m$ means chronological composition: apply $P_1$ first and $P_m$ last, as in [[def-composition-of-probability-kernels]]. Return the full-sweep kernel $P_{\rm sweep}=P_1\cdots P_m$. Observing after each single update gives the phase-indexed sequence $P_1,\ldots,P_m,P_1,\ldots$ and is generally time-inhomogeneous; observing only at full-sweep boundaries gives a homogeneous chain with kernel $P_{\rm sweep}$. The scan kernels are well-defined by [[lem-gibbs-scan-schemes-are-probability-kernels]].

