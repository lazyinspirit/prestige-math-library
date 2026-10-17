---
id: def-riemann-stieltjes-sum-and-integral
kind: definition
title: "Riemann–Stieltjes sums, upper and lower sums, and the Riemann–Stieltjes integral"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partition-and-refinement, def-tagged-partition-and-riemann-sum,
       def-finite-sum, lem-finite-sum-laws, def-bounded-set,
       def-complete-ordered-field, def-infimum, thm-infimum-property,
       def-monotone-function, def-interval, def-oriented-integral]
justified_by: []
aliases: [def-riemann-stieltjes-integral]
landmark: true
short: "Riemann-Stieltjes integral"
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Definition 3.1.5"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Definition

Let $a<b$, let $f,\alpha:[a,b]\to\mathbb R$, and let $P=(n,t)$ be a partition
([[def-partition-and-refinement]]). A choice of tags
$\xi_i\in[t_i,t_{i+1}]$ for $i<n$ makes $(P,\xi)$ a tagged partition as in
[[def-tagged-partition-and-riemann-sum]]. Its **Riemann-Stieltjes sum** is

$$S(f,\alpha;P,\xi):=\sum_{i<n}f(\xi_i)\bigl(\alpha(t_{i+1})-\alpha(t_i)\bigr).$$

The function $f$ is **Riemann-Stieltjes integrable with respect to $\alpha$** on
$[a,b]$ if there is $I\in\mathbb R$ such that for every $\varepsilon>0$ there is
$\delta>0$ for which every tagged partition with $\|P\|<\delta$ satisfies
$|S(f,\alpha;P,\xi)-I|<\varepsilon$. Then
$I=\int_a^b f\,d\alpha$.

If $f$ is bounded ([[def-bounded-set]]) and $\alpha$ is nondecreasing
([[def-monotone-function]]), put

$$m_i:=\inf_{x\in[t_i,t_{i+1}]}f(x),\qquad M_i:=\sup_{x\in[t_i,t_{i+1}]}f(x),$$
$$L_\alpha(f,P):=\sum_{i<n}m_i\Delta_i\alpha,\qquad U_\alpha(f,P):=\sum_{i<n}M_i\Delta_i\alpha,$$

where $\Delta_i\alpha=\alpha(t_{i+1})-\alpha(t_i)\ge0$. These are the lower and
upper Stieltjes sums. Each subinterval is nonempty and its image under bounded
$f$ is bounded above and below, so the suprema exist by
[[def-complete-ordered-field]] and the infima by [[def-infimum]] and
[[thm-infimum-property]]. Finite sums use [[def-finite-sum]] and
[[lem-finite-sum-laws]]. On $[a,a]$ the integral is $0$; for $b<a$ set
$\int_a^b f\,d\alpha=-\int_b^a f\,d\alpha$, matching
[[def-oriented-integral]].
