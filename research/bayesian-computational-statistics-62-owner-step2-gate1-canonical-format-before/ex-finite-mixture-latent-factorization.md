---
id: ex-finite-mixture-latent-factorization
kind: example
title: "A finite mixture latent factorization"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-latent-variable-joint-and-observed-data-factorization
  - thm-observed-density-is-latent-marginal-under-tonelli
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Mario A. T. Figueiredo, Lecture Notes on the EM Algorithm (2004)"
      url: "https://www2.stat.duke.edu/courses/Spring06/sta376/Support/EM/EM.Mixtures.Figueiredo.2004.pdf"
      locator: "§1, equation (1), PDF pp. 1–2, and §§6.1–6.2 finite-mixture sections, PDF pp. 24–29"
---
## Example

Let the parameter space be a singleton, let $\mathsf X$ have sigma-finite
reference measure $\nu$, and let the finite latent label set be
$\mathsf Z=\{1,\ldots,J\}$ with counting measure. Choose weights
$w_j>0$ with $\sum_{j=1}^Jw_j=1$ and probability densities $f_j$ with
respect to $\nu$. Set
$$ p(x,j):=w_jf_j(x). $$
Then the observed marginal density is $m(x)=\sum_{j=1}^Jw_jf_j(x)$, and on
each positive finite fibre the conditional label probabilities are
$q(j\mid x)=w_jf_j(x)/m(x)$.

## Facts & Assumptions


**Given:** A finite integer $J\ge1$, positive weights summing to one,
nonnegative measurable component densities with $\int f_j\,d\nu=1$, and
the singleton parameter space.

[F1] [[def-latent-variable-joint-and-observed-data-factorization]]: the
complete-data density is jointly measurable and integrates to one on each
parameter fibre; an observed marginal is obtained by integrating over the
latent reference measure.

[F2] [[thm-observed-density-is-latent-marginal-under-tonelli]]: the
observed marginal is a density, and division by a positive finite marginal
normalizes the latent fibre.

## Verification

1.1 The map $p(x,j)=w_jf_j(x)$ is nonnegative and product measurable. With counting measure on the finite label set, $$ \int_{\mathsf X\times\mathsf Z}p\,d(\nu\otimes\#) =\sum_{j=1}^J w_j\int_{\mathsf X}f_j\,d\nu =\sum_{j=1}^Jw_j=1. $$ It is therefore a complete-data probability density of the type in [F1]. [given, F1, algebra]

2.1 Integrating over the label coordinate gives $m(x)=\int_{\mathsf Z}p(x,j)\,\#(dj)=\sum_{j=1}^Jw_jf_j(x)$. For $0<m(x)<\infty$, the conditional label mass is $q(j\mid x)=w_jf_j(x)/m(x)$ and its finite sum is $$ \sum_{j=1}^Jq(j\mid x) =\frac{\sum_{j=1}^Jw_jf_j(x)}{m(x)}=1. $$ [F1, F2, step 1.1, given, algebra]

3.1 The joint density, its observed marginal, and its normalized positive finite fibres therefore have exactly the finite-mixture factorization claimed. [step 1.1, step 2.1] ∎
