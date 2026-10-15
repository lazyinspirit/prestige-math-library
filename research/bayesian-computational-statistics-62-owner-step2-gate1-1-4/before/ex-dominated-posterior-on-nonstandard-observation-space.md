---
id: ex-dominated-posterior-on-nonstandard-observation-space
kind: example
title: A dominated posterior on a nonstandard-Borel observation space
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-bayesian-posterior-as-regular-conditional-law
  - def-standard-borel-space
  - def-polish-space
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-bayes-formula-for-dominated-kernels
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 2 §§2.1.1–2.1.4"
      url: https://www.bayesrulesbook.com/chapter-2.html
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., Chapter 1 §1.3"
      url: https://sites.stat.columbia.edu/gelman/book/BDA3.pdf
---

## Example

Let the data set be a disjoint union $\mathsf Y=U\sqcup V\sqcup W$ of three uncountable sets, with sigma-algebra consisting of all unions of these three atoms and reference probability $\nu(U)=\nu(V)=\nu(W)=1/3$. This measurable space is not standard Borel: distinct points of $U$ cannot be separated by a measurable set, whereas every standard-Borel space separates distinct points. Let $\Theta=\{0,1\}$ have prior probabilities $1/2,1/2$. With respect to $\nu$, use sampling densities $f_0(y)=\frac32\mathbf1_{U\cup V}(y)$ and $f_1(y)=3\mathbf1_U(y)$. The dominated formula gives posterior mass $2/3$ on $U$, $0$ on $V$, and the prior filler $1/2$ on the zero-evidence atom $W$.

## Facts & Assumptions

**Given:** The measurable data space, reference probability $\nu$, finite parameter space, prior, and sampling densities specified in the example.

[F1] The proper model is a prior probability together with a parameter-measurable sampling probability kernel. [[def-bayesian-model-as-prior-and-sampling-kernel]]

[F2] The posterior is a conditional law; a data-indexed posterior version must satisfy the rectangle identity. [[def-bayesian-posterior-as-regular-conditional-law]]

[F3] A proper prior and a sampling kernel with a specified jointly measurable density against a sigma-finite data measure have the displayed posterior kernel on fibres where the marginal density is finite and positive. The formula fills zero or infinite marginal-density fibres with the prior and does not require a standard-Borel data space. [[thm-bayes-formula-for-dominated-kernels]]

[F4] A standard-Borel space is measurably isomorphic to a Polish space. [[def-standard-borel-space]]

[F5] In a Polish space the topology is induced by a metric, so singleton sets are closed and Borel. [[def-polish-space]]

[F6] The product sigma-algebra contains measurable rectangles; on the finite parameter space, simple functions constant on such rectangles are jointly measurable. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

## Verification

**Given:** The assumptions and finite model in the example.

1.1 The eight unions of $U,V,W$ form a sigma-algebra. Assigning mass $1/3$ to each disjoint atom defines a probability measure $\nu$: a pairwise disjoint family has at most three nonempty members, so countable additivity reduces to finite additivity on the atoms. Distinct $u,u'\in U$ have the same membership in every measurable set. If $(\mathsf Y,\mathcal Y)$ were standard Borel, [F4] would give a bimeasurable bijection $h$ to a Polish space. Let $d$ be a compatible metric. For every $z\ne h(u)$, the ball about $z$ of radius $d(z,h(u))/2$ misses $h(u)$, so $\{h(u)\}$ is closed and Borel. Its inverse image under $h$ would be a measurable set separating $u$ and $u'$, a contradiction. [given, F4, F5, construct]

2.1 The joint density is $\ell(\theta,y)=\frac32\mathbf1_{\{0\}\times(U\cup V)}(\theta,y)+3\mathbf1_{\{1\}\times U}(\theta,y)$, a finite sum of indicators of measurable rectangles by [F6]. Its parameter sections are $f_0,f_1$, with integrals $\int f_0\,d\nu=\frac32\cdot\frac23=1$ and $\int f_1\,d\nu=3\cdot\frac13=1$. Thus the sections define sampling probabilities, and the finite reference measure $\nu$ is sigma-finite, so [F3] applies. [given, F1, F3, F6, step 1.1, algebra]

3.1 The marginal density is $m(y)=\frac12f_0(y)+\frac12f_1(y)$, hence $m=9/4$ on $U$, $m=3/4$ on $V$, and $m=0$ on $W$. Thus $J_Y(U)=3/4$, $J_Y(V)=1/4$, and $J_Y(W)=0$. The normalized formula gives $\Pi_y(1)=2/3$ on $U$ and $0$ on $V$; on $W$ the theorem fills the zero-evidence fibre with the prior, so $\Pi_y(1)=1/2$. [F3, step 2.1, algebra]

4.1 For $A=\{1\}$, the rectangle identities on $U,V,W$ are $(2/3)(3/4)=1/2=J(\{1\}\times U)$, $0(1/4)=0=J(\{1\}\times V)$, and $(1/2)0=0=J(\{1\}\times W)$. For $A=\{0\}$ they are $(1/3)(3/4)=1/4=J(\{0\}\times U)$, $1(1/4)=1/4=J(\{0\}\times V)$, and $(1/2)0=0=J(\{0\}\times W)$. Adding over atoms gives the identity for every $A\subseteq\Theta$ and $B\in\mathcal Y$, so this is a data-indexed posterior kernel despite the nonstandard-Borel data space. [F2, step 3.1, algebra] ∎
