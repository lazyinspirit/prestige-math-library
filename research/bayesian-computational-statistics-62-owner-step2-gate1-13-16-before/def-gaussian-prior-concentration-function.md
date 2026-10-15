---
id: def-gaussian-prior-concentration-function
kind: definition
title: "Concentration function of a Banach Gaussian prior"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - def-banach-gaussian-covariance-operator-and-rkhs
  - thm-support-of-banach-gaussian-is-closure-of-rkhs
  - def-axiom-of-choice
  - def-countable-choice
justified_by: []
forward_refs: []
aliases: []
axiom_use: "AC and countable choice are stated because the support theorem used to ensure positive small-ball probability uses those choice interfaces."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors (2008)"
      url: "https://arxiv.org/pdf/0806.3024"
      locator: "Section 2.1, printed p. 1437: definition of the concentration function."
    - title: "A. Lunardi, M. Miranda, and D. Pallara, Infinite Dimensional Analysis"
      url: "https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/Lectures.pdf"
      locator: "Section 3.1: Cameron–Martin norm and small-ball probabilities."
---

## Definition

Assume AC and countable choice. Let $\mu$ be a centered tight Borel Gaussian law on a real separable Banach
space $B$, with covariance RKHS $H$, and let $w_0\in\overline H^{\,B}$. For
$\varepsilon>0$, write
$\varepsilon B^\circ=\{x\in B:\|x\|_B<\varepsilon\}$ and define the
**concentration function**
$$\phi_{w_0}(\varepsilon) =\inf_{\substack{h\in H\\\|h-w_0\|_B<\varepsilon}} \left\{\|h\|_H^2-\log\mu(\varepsilon B^\circ)\right\}.$$
The feasible set is nonempty because $w_0$ lies in the Banach-norm closure of
$H$. Also $\mu(\varepsilon B^\circ)>0$ because $0\in\operatorname{supp}\mu$;
thus the logarithm is finite. The value is finite and nonnegative. The support assertion used here is
[[thm-support-of-banach-gaussian-is-closure-of-rkhs]].
