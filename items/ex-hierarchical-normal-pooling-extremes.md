---
id: ex-hierarchical-normal-pooling-extremes
kind: example
title: "Complete, partial, and no-pooling limits in the normal hierarchy"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-hierarchical-bayesian-model
  - thm-normal-normal-hierarchical-shrinkage
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited through the positive-variance normal shrinkage theorem and the library normal-law convention, including the degenerate boundary; the weight and limit calculations are choice-free."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., §5.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 5, §5.4, printed pp. 114–117: complete pooling, no pooling, and the normal hierarchical conditional posterior."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapters 15–16"
      url: "https://www.bayesrulesbook.com/chapter-15.html"
      locator: "Chapter 15, §§15.1–15.4: the complete-pooling, no-pooling, and partial-pooling comparison."
---

## Example

In the known-variance normal hierarchy, fix $\mu$, an observed group summary
$\bar y_j$, and $s_j^2>0$. Specify the likelihood-density version pointwise by
$$f_j(\theta,y)=(2\pi s_j^2)^{-1/2}\exp\!\left(-\frac{(y-\theta)^2}{2s_j^2}\right)\qquad(\theta,y\in\mathbb R).$$
For finite $\tau^2>0$, the posterior mean is a
strictly weighted average of $\bar y_j$ and $\mu$. As $\tau^2\downarrow0$ it
approaches complete pooling at $\mu$; at the boundary $\tau^2=0$, the prior
itself forces $\theta_j=\mu$. As $\tau^2\to\infty$, the posterior mean and
variance approach the group-only values $\bar y_j$ and $s_j^2$, the
no-pooling limit. The value $\tau^2=\infty$ is not an admissible proper prior.

## Facts & Assumptions

**Given:** A finite group hierarchy, fixed $\mu$, observed $\bar y_j$, known $s_j^2>0$, and conditional variance $\tau^2>0$ except when examining the stated boundary limit.

[F1] For positive $\tau^2,s_j^2$ and the canonical normal likelihood-density version specified in the Example, the conditional posterior mean and variance are $\hat\theta_j=(\bar y_j/s_j^2+\mu/\tau^2)/(1/s_j^2+1/\tau^2)$ and $V_j=(1/s_j^2+1/\tau^2)^{-1}$. [[thm-normal-normal-hierarchical-shrinkage]]

[F2] The library normal law includes the degenerate boundary $N(\mu,0)=\delta_\mu$. [[def-standard-normal-and-normal-laws]]

[A1] AC is assumed for the library normal-law convention. [[def-axiom-of-choice]]

[A2] $\tau^2>0$ and $s_j^2>0$ for the conditional-posterior formula.

## Verification

**Given:** The normal hierarchy in the Example and Facts & Assumptions.

1.1 Set $a_j=\tau^2/(\tau^2+s_j^2)$. Algebra in [F1] gives $\hat\theta_j=a_j\bar y_j+(1-a_j)\mu$ and $V_j=\tau^2s_j^2/(\tau^2+s_j^2)$. Since both variances are positive, $0<a_j<1$, so for finite positive $\tau^2$ the group mean uses both its own data and the population mean. [A1, A2, F1, algebra]

2.1 As $\tau^2\downarrow0$, $a_j\to0$, $V_j\to0$, and $\hat\theta_j\to\mu$. At $\tau^2=0$, [F2] makes the conditional prior $\delta_\mu$, so every group parameter equals $\mu$ and conditioning on the data leaves it there. This is complete pooling. [A1, A2, F1, F2, step 1.1, algebra]

3.1 As $\tau^2\to\infty$, $a_j\to1$, $V_j\to s_j^2$, and $\hat\theta_j\to\bar y_j$. These are the group-only posterior mean and variance, so they describe the no-pooling limit. No posterior at $\tau^2=\infty$ is asserted. [A1, A2, F1, step 1.1, algebra] ∎
