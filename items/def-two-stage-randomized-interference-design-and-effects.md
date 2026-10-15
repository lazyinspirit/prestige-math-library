---
id: def-two-stage-randomized-interference-design-and-effects
kind: definition
title: "Two-stage randomized design and strategy-specific effects"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-potential-outcomes-under-partial-interference
  - def-finite-randomized-treatment-assignment-model
  - def-finite-probability-space-and-event
  - def-expectation-on-a-finite-probability-space
  - def-conditional-expectation-given-a-sigma-algebra
  - def-estimand-on-a-statistical-model
  - def-statistic-and-estimator
  - lem-finite-sum-laws
  - lem-finite-event-conditional-expectation-formula
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Michael G. Hudgens and M. Elizabeth Halloran, Toward Causal Inference With Interference, §§2.1–4.1"
      url: "https://www.treatment-effects.com/Hudgens-Halloran-2008.pdf"
    - title: "Graeme Blair, Alexander Coppock, and Macartan Humphreys, Research Design in the Social Sciences, §§18.9–18.10"
      url: "https://book.declaredesign.org/library/experimental-causal.html"
---

## Definition

Let $N>1$ groups have fixed sizes $n_i\ge2$, and let the fixed potential outcomes satisfy partial interference as in [[def-potential-outcomes-under-partial-interference]]. Let $\phi$ and $\psi$ be two group-specific treatment-allocation strategies. Under strategy $s\in\{\phi,\psi\}$, group $i$ has a fixed treated count $K_i^s\in\{1,\ldots,n_i-1\}$. Fix $C\in\{1,\ldots,N-1\}$. The two-stage design first chooses uniformly a set of exactly $C$ groups for $\psi$, assigning the other $N-C$ groups to $\phi$. Conditional on these strategy labels, it independently chooses in each group a uniformly random $K_i^s$-element subset for treatment, where $s$ is that group's strategy. Here $\binom nk$ denotes the number of $k$-element subsets of an $n$-element set. Thus, for any strategy vector $\mathbf s$ with exactly $C$ entries equal to $\psi$ and any assignment vectors $\mathbf z_i$ with $\sum_jz_{ij}=K_i^{s_i}$,
$$\mathbb P(\mathbf S=\mathbf s,\mathbf Z=\mathbf z)=\binom NC^{-1}\prod_{i=1}^N\binom{n_i}{K_i^{s_i}}^{-1};$$
all other pairs have probability zero. In particular, $\mathbb P(Z_{ij}=1\mid S_i=s)=K_i^s/n_i$ and $\mathbb P(Z_{ij}=0\mid S_i=s)=(n_i-K_i^s)/n_i$, both positive.

Write $\mathbb E_{i,s}$ for expectation under the finite uniform assignment law within group $i$ under strategy $s$. Conditional means given $Z_{ij}=z$ are the finite conditional weighted sums, defined because that event has probability strictly between zero and one; [[lem-finite-event-conditional-expectation-formula]] verifies that their piecewise versions satisfy the integral characterization of [[def-conditional-expectation-given-a-sigma-algebra]]. Define the strategy-specific group and population mean potential outcomes by
$$\bar Y_i(z;s)=\frac1{n_i}\sum_{j=1}^{n_i}\mathbb E_{i,s}[Y_{ij}(\mathbf Z_i)\mid Z_{ij}=z],\qquad \bar Y(z;s)=\frac1N\sum_{i=1}^N\bar Y_i(z;s),$$
for $z\in\{0,1\}$, and
$$\bar Y_i(s)=\frac1{n_i}\sum_{j=1}^{n_i}\mathbb E_{i,s}[Y_{ij}(\mathbf Z_i)],\qquad \bar Y(s)=\frac1N\sum_{i=1}^N\bar Y_i(s).$$
These are finite-population estimands: the outcomes are fixed, and the expectations average only over the specified within-group assignment strategy. Define
$$DE(\psi)=\bar Y(0;\psi)-\bar Y(1;\psi),\quad IE(\phi,\psi)=\bar Y(0;\phi)-\bar Y(0;\psi),$$
$$TE(\phi,\psi)=\bar Y(0;\phi)-\bar Y(1;\psi),\quad OE(\phi,\psi)=\bar Y(\phi)-\bar Y(\psi).$$

For an observed design realization, put $m_{i1}^s=K_i^s$ and $m_{i0}^s=n_i-K_i^s$, and define, whenever $S_i=s$,
$$\hat{\bar Y}_i(z;s)=\frac{\sum_{j=1}^{n_i}1\{Z_{ij}=z\}Y_{ij}^{\mathrm{obs}}}{m_{iz}^s},\qquad \hat{\bar Y}_i(s)=\frac1{n_i}\sum_{j=1}^{n_i}Y_{ij}^{\mathrm{obs}}.$$
The denominators are the fixed, positive realized arm sizes. With $C_\psi=C$ and $C_\phi=N-C$, define the observed population estimators
$$\hat{\bar Y}(z;s)=\frac1{C_s}\sum_{i=1}^N1\{S_i=s\}\hat{\bar Y}_i(z;s),\qquad \hat{\bar Y}(s)=\frac1{C_s}\sum_{i=1}^N1\{S_i=s\}\hat{\bar Y}_i(s).$$
The four strategy-contrast estimators $\widehat{DE}(\psi)$, $\widehat{IE}(\phi,\psi)$, $\widehat{TE}(\phi,\psi)$, and $\widehat{OE}(\phi,\psi)$ are obtained by replacing each mean in the corresponding displayed target by its hatted estimator. No stratified-interference or additive-effects assumption is part of this design definition.
