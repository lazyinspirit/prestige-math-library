---
id: cex-ip-infinite-dimensional-pointwise-density-fallacy
kind: counterexample
title: An infinite-dimensional Gaussian has no locally finite translation-invariant density reference
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-small-ball-map-estimator
  - lem-ip-gaussian-series-prior-regularity
  - def-axiom-of-choice
  - def-countable-choice
  - def-measure
  - thm-finite-and-countable-subadditivity-of-measures
  - prop-measure-monotonicity
  - thm-rationals-countable
  - lem-rat-embeds-dense
  - thm-product-of-countable
  - thm-countable-union-of-countable
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "M. Dashti, K. J. H. Law, A. M. Stuart, and J. Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems"
      url: "https://arxiv.org/pdf/1303.4795"
      locator: "§2, discussion of the absence of an infinite-dimensional Lebesgue density; §3, Definition 3.1."
    - title: "E. Giné and R. Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models"
      url: "https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf"
      locator: "§2.4, Banach Gaussian measures and Cameron–Martin geometry; §4.4.1, Gaussian series in infinite-dimensional function spaces."
axiom_use: "AC and countable choice are assumed for the Gaussian-series supplier. The nonexistence argument uses an explicit countable set and countable subadditivity only."
generation:
  role: counterexample
---
## Statement refuted

Every centered Borel Gaussian probability on an infinite-dimensional separable Banach space has a density with respect to some nonzero translation-invariant Borel measure that is finite on every bounded Borel set.

## Statement references

[[def-ip-small-ball-map-estimator|small-ball MAP comparisons use posterior ball probabilities and do not require pointwise density values]]

## Facts & Assumptions

**Given:** AC, countable choice, the real Hilbert space $\ell^2$ with standard basis $(e_j)$, independent standard normal variables $(\xi_j)$, and the displayed series.

[A1] AC and countable choice are assumed by the Gaussian branch of the weighted Hilbert Gaussian-series result. [[def-axiom-of-choice]], [[def-countable-choice]]

[F1] If $\sum_j\lambda_jw_j<\infty$, then $\sum_j\sqrt{\lambda_j}\xi_je_j$ converges almost surely in the selected Hilbert norm; with standard normal coefficients and AC, its limit is a centered Borel Gaussian random element. [[lem-ip-gaussian-series-prior-regularity]]

[F2] A measure is countably additive on pairwise-disjoint measurable sequences, and the measure of a countable union is at most the sum of the measures. [[def-measure]], [[thm-finite-and-countable-subadditivity-of-measures]]

[F3] The rationals are countable and dense in the reals; finite products and countable unions of countable sets are countable. [[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-product-of-countable]], [[thm-countable-union-of-countable]]

[F4] A measure is monotone under inclusion of measurable sets. [[prop-measure-monotonicity]]

## Counterexample

Assume AC and countable choice. Let $B=\ell^2$ with its standard basis $(e_j)_{j\ge1}$, let $(\xi_j)_{j\ge1}$ be independent standard normal variables, and define
$$ W=\sum_{j\ge1}\frac{\xi_j}{\sqrt{j(j+1)}}e_j. $$
The weighted Hilbert Gaussian-series convergence result makes $W$ a centered Borel Gaussian probability on $\ell^2$. There is no nonzero translation-invariant Borel measure on $\ell^2$ that is finite on every bounded Borel set; here translation invariance means $\lambda(A+x)=\lambda(A)$ for every Borel $A\subseteq\ell^2$ and $x\in\ell^2$. Thus this law has no density with respect to a locally finite translation-invariant analogue of Lebesgue measure.

1.1 In [F1], take $H_0=H_1=\ell^2$, $w_j=1$, and $\lambda_j=1/(j(j+1))$. The finite sums telescope as $\sum_{j=1}^N\lambda_j=\sum_{j=1}^N(1/j-1/(j+1))=1-1/(N+1)\le1$, so the required infinite sum is finite. Thus [F1] applies to the stated independent standard normals and proves that $W$ is a centered Borel Gaussian random element. [A1, F1, given, algebra]

1.2 Suppose that $\lambda$ is a nonzero locally finite translation-invariant Borel measure, where locally finite means that every point has a neighborhood of finite measure. At zero choose $R>0$ with $\lambda(B(0,R))<\infty$. Put $r=R/8$ and $U_j=B((R/2)e_j,r)$. For $j\ne k$ the distance between the centers is $R/\sqrt2>2r$, so these balls are pairwise disjoint, and every $U_j$ lies in $B(0,R)$ because $R/2+r<R$. Translation invariance gives a common finite mass $m=\lambda(U_j)$. If $m>0$, finite additivity and monotonicity give $Nm\le\lambda(B(0,R))$ for every $N$, a contradiction. Hence $m=0$. This covers in particular every measure finite on all bounded Borel sets, since that condition implies local finiteness. [F2, F4, given, algebra]

2.1 Translation invariance and step 1.2 make every radius-$r$ ball have measure zero. Let $D$ be the set of finitely supported rational sequences. [F3] makes $D$ countable: it is the countable union, over support lengths $N$, of the countable set $\mathbb Q^N$ padded with zeros. It is dense in $\ell^2$: for any $x\in\ell^2$ and $\epsilon>0$, choose $N$ so that the squared tail sum is less than $\epsilon^2/4$, then approximate the first $N$ coordinates by rationals with squared total error less than $\epsilon^2/4$; the resulting padded vector is within $\epsilon$ of $x$. The radius-$r$ balls centered at $D$ therefore form a countable cover of $\ell^2$. By [F2], $\lambda(\ell^2)=0$, and [F4] makes every Borel subset null. This contradicts that $\lambda$ is nonzero. Hence no such reference measure exists, refuting the statement; in particular, the displayed Gaussian has no density relative to one. [F2, F3, F4, step 1.2, given, algebra, choose] ∎

