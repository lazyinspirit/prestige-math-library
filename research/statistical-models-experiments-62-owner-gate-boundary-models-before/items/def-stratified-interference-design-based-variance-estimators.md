---
id: def-stratified-interference-design-based-variance-estimators
kind: definition
title: "Stratified interference and source design-based variance estimators"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-two-stage-randomized-interference-design-and-effects
  - def-potential-outcomes-under-partial-interference
  - def-variance-and-covariance
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michael G. Hudgens and M. Elizabeth Halloran, Toward Causal Inference With Interference, §4.2 and Theorems 4–9"
      url: "https://www.treatment-effects.com/Hudgens-Halloran-2008.pdf"
---

## Definition

In the setting of [[def-two-stage-randomized-interference-design-and-effects]], **stratified interference** means that, for each group $i$, unit $j$, and treatment count $k\in\{1,\ldots,n_i-1\}$, the value $Y_{ij}(\mathbf z_i)$ is the same for any two assignments $\mathbf z_i,\mathbf z_i'$ with $\sum_\ell z_{i\ell}=\sum_\ell z'_{i\ell}=k$ and $z_{ij}=z'_{ij}$. Thus at a fixed group treatment count an outcome may depend on the unit's own assignment, but not on which particular peers are treated. This assumption is additional to partial interference and is not needed for point-effect unbiasedness.

For strategy $s$ and own treatment $z$, write $Y_{ij}(z;s)$ for the common outcome at count $K_i^s$ and own assignment $z$. Define
$$S_{iz}^2(s)=\frac1{n_i-1}\sum_{j=1}^{n_i}\{Y_{ij}(z;s)-\bar Y_i(z;s)\}^2,\qquad d_{ij}(s)=Y_{ij}(0;s)-Y_{ij}(1;s),$$
$$S_{i01}(s)=\frac1{n_i-1}\sum_{j=1}^{n_i}\{Y_{ij}(0;s)-\bar Y_i(0;s)\}\{Y_{ij}(1;s)-\bar Y_i(1;s)\},$$
and
$$S_{iD}^2(s)=\frac1{n_i-1}\sum_{j=1}^{n_i}\{d_{ij}(s)-D_i(s)\}^2,$$
where $D_i(s)=\bar Y_i(0;s)-\bar Y_i(1;s)$. In an observed group assigned $s$, define the estimated group direct effect by
$$\hat D_i(s):=\hat{\bar Y}_i(0;s)-\hat{\bar Y}_i(1;s).$$
Let $s_{iz}^2(s)$ be the ordinary sample variance of the $m_{iz}^s$ observed outcomes in arm $z$, with denominator $m_{iz}^s-1$, and let $s_{D,s}^2$ be the sample variance of the observed group direct-effect estimates $\hat D_i(s)$ across the $C_s$ groups assigned to $s$.

The source direct-effect variance estimator under strategy $s$ is
$$\widehat V_D(s)=\left(1-\frac{C_s}{N}\right)\frac{s_{D,s}^2}{C_s}+\frac1{C_sN}\sum_{i:S_i=s}\left\{\frac{s_{i0}^2(s)}{n_i-K_i^s}+\frac{s_{i1}^2(s)}{K_i^s}\right\}.$$
For the indirect, total, and overall effect contrasts define
$$\widehat V_I(\phi,\psi)=\frac{s_{0,\phi}^2}{N-C}+\frac{s_{0,\psi}^2}{C},\quad \widehat V_T(\phi,\psi)=\frac{s_{0,\phi}^2}{N-C}+\frac{s_{1,\psi}^2}{C},$$
$$\widehat V_O(\phi,\psi)=\frac{s_{\phi}^2}{N-C}+\frac{s_{\psi}^2}{C},$$
where $s_{z,s}^2$ is the sample variance across groups assigned $s$ of the observed group estimates $\hat{\bar Y}_i(z;s)$, and $s_s^2$ is the sample variance across such groups of $\hat{\bar Y}_i(s)$.

These are design-randomization variance estimators for the fixed finite-population point estimators. The group-arm sample variances in these formulas are defined only if $C\ge2$ and $N-C\ge2$. In addition, $\widehat V_D(s)$ requires $2\le K_i^s\le n_i-2$ for every group, so both within-group arm sample variances have nonzero denominators. The point estimators themselves remain defined under the broader counts $1\le K_i^s<n_i$.
