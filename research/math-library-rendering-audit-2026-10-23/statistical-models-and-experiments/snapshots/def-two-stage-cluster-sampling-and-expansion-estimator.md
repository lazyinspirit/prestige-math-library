---
id: def-two-stage-cluster-sampling-and-expansion-estimator
kind: definition
title: "Two-stage sampling laws and the expansion estimator"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-cluster-sampling-design-and-cluster-totals
  - def-finite-population-and-sampling-design
  - def-moments-variance-and-covariance
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Shalabh, Sampling Theory, Chapter 10: Two Stage Sampling (Subsampling), PDF pp. 1–7, IIT Kanpur"
      url: "https://home.iitk.ac.in/~shalab/sampling/chapter10-sampling-two-stage-sampling.pdf"
    - title: "Sharon L. Lohr, Sampling: Design and Analysis, 2nd ed., §5.3, printed pp. 145–150"
      url: "https://drive.uqu.edu.sa/_/maatia/files/Sampling.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Use the PSU partition and fixed values from
[[def-cluster-sampling-design-and-cluster-totals]]. A first-stage design has a
nonempty finite support $\mathcal S_1\subseteq 2^{[M]}$ and probability mass
function $p_1$, positive on that support and summing to $1$. For each PSU
$i$, fix a second-stage sampling design with nonempty finite support
$\mathcal S_{2i}\subseteq 2^{U_i}$ and mass function $p_{2i}$, positive on
that support and summing to $1$. Given the selected PSU set $S_1$, the second-stage samples
$(S_i)_{i\in S_1}$ are independent, with each $S_i$ drawn from $p_{2i}$,
independently of the identities of other selected PSUs. The joint law is
$$P_d\bigl(S_1,(S_i)_{i\in S_1}\bigr) =p_1(S_1)\prod_{i\in S_1}p_{2i}(S_i).$$
It is a probability mass function: summing over the second-stage supports
first gives $p_1(S_1)$ for each $S_1$, and summing these values gives $1$.
For a function $g$ of the joint outcome, write
$$E_1[h]=\sum_{S_1\in\mathcal S_1}p_1(S_1)h(S_1),\qquad E_2[g\mid S_1=s]=\sum_{(S_i)_{i\in s}} \left(\prod_{i\in s}p_{2i}(S_i)\right)g\bigl(s,(S_i)_{i\in s}\bigr).$$
For a first-stage function $h$, define
$\operatorname{Var}_1(h)=E_1[(h-E_1h)^2]$. For a function $g$ of the full
second-stage outcome and fixed $S_1=s$, define
$$\operatorname{Var}_2(g\mid S_1=s) =E_2[(g-E_2[g\mid S_1=s])^2\mid S_1=s].$$
The symbol $\operatorname{Var}_{2i}$ denotes centered-square variance under
$p_{2i}$, and $\operatorname{Var}_d$ denotes centered-square variance under
the joint law. These use the variance definition in
[[def-moments-variance-and-covariance]].

For the first stage, put
$$\pi_i^{(1)}=P_d(i\in S_1),\qquad \pi_{ir}^{(1)}=P_d(i,r\in S_1).$$
For the second-stage design in PSU $i$, put
$$\pi_{j\mid i}^{(2)}=P_{2i}(j\in S_i),\qquad \pi_{j\ell\mid i}^{(2)}=P_{2i}(j,\ell\in S_i).$$
The stage-specific covariance differences are
$$\Delta_{ir}^{(1)}=\pi_{ir}^{(1)}-\pi_i^{(1)}\pi_r^{(1)},\qquad \Delta_{j\ell\mid i}^{(2)}=\pi_{j\ell\mid i}^{(2)}- \pi_{j\mid i}^{(2)}\pi_{\ell\mid i}^{(2)}.$$

If $\pi_i^{(1)}>0$ for every PSU and $\pi_{j\mid i}^{(2)}>0$ for every SSU,
the within-PSU expansion total and the two-stage expansion total are defined by
$$\widehat T_i=\sum_{j\in S_i}\frac{y_{ij}}{\pi_{j\mid i}^{(2)}},\qquad \widehat T=\sum_{i\in S_1}\frac{\widehat T_i}{\pi_i^{(1)}}.$$
No positivity assumption on the pair-inclusion probabilities is part of this
definition.

## Remarks

The product in the joint law is an explicit conditional-independence
assumption across selected PSUs. A design with dependent second-stage samples
across PSUs, or a second-stage law depending jointly on the first-stage set,
has a different variance formula. The expansion estimator's divisions use
only first-order inclusion probabilities.
