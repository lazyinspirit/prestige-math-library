---
id: def-monotone-likelihood-ratio-family
kind: definition
title: Families with a monotone likelihood ratio
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps: [def-statistical-experiment, def-statistic-and-estimator,
       def-dominated-statistical-experiment, def-likelihood-density,
       def-axiom-of-choice]
justified_by: []
axiom_use: AC is used only through the simultaneous density-version selection in def-likelihood-density; the definition adds no further choice.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: George Deligiannidis, Foundations of Statistical Inference, Definition 13.4 and Theorem 13.5, PDF pp. 77–78
      url: https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf
    - title: Jun Shao, Stat 610 Mathematical Statistics, Lecture 11, Definition 8.3.16, PDF pp. 6–7
      url: https://pages.stat.wisc.edu/~shao/stat610/stat610-11.pdf
    - title: Karl B. Gregory, STAT 713 Lecture 11, slides 9–12, annotated PDF pp. 13–22
      url: https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_11_slides_annotated.pdf
---

## Definition

Assume AC. Let $\mathcal E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$
be a statistical experiment with $\Theta\subseteq\mathbb R$, dominated by a
fixed sigma-finite positive measure $\mu$. Let $T:(\mathcal X,\mathcal A)\to
(\mathbb R,\mathcal B(\mathbb R))$ be a statistic. Choose the simultaneous
finite-valued nonnegative density representatives $p_\theta=dP_\theta/d\mu$
from [[def-likelihood-density]].

For $\theta_1<\theta_2$, define the extended likelihood ratio on
$U_{\theta_1,\theta_2}=\{x:p_{\theta_1}(x)+p_{\theta_2}(x)>0\}$ by
$$R_{\theta_2,\theta_1}(x)=\begin{cases}p_{\theta_2}(x)/p_{\theta_1}(x),&p_{\theta_1}(x)>0,\\+\infty,&p_{\theta_1}(x)=0<p_{\theta_2}(x).\end{cases}$$
The family has a **monotone likelihood ratio (MLR) in $T$** when, for each
ordered pair $\theta_1<\theta_2$, there is a nondecreasing Borel function
$r_{\theta_2,\theta_1}:\mathbb R\to[0,+\infty]$ such that
$R_{\theta_2,\theta_1}(x)=r_{\theta_2,\theta_1}(T(x))$ for $\mu$-almost every
$x\in U_{\theta_1,\theta_2}$. The set where both densities vanish is
irrelevant. No common exceptional null set for all parameter pairs is
asserted. This definition concerns the likelihood ratio of the full data;
$T$ need not be sufficient.

## Remarks

Because the ratio is nondecreasing in $T$, increasing the parameter favors
larger values of $T$. The convention $R=+\infty$ where the lower-parameter
density vanishes records any alternative-only mass and keeps the direction of
the upper-tail rule explicit.
