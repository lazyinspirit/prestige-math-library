---
id: def-variational-family-and-elbo
kind: definition
title: "Variational family and evidence lower bound"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-finite-sigma-finite-and-semifinite-measures
  - def-likelihood-density
  - def-measurable-space
  - def-measure
  - def-natural-logarithm
  - def-probability-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-bayes-formula-for-dominated-kernels
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-conditional-density-formula
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_use: "The density and mean-field definitions are choice-free. Posterior-kernel context uses only the stated finite-positive-fiber and event-identity clauses; no conditional-expectation existence convention is invoked."
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-variational-family-and-elbo.json
  precheck: n/a
sources:
  references:
    - title: "David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe, Variational Inference: A Review for Statisticians (2017)"
      url: "https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf"
      locator: "§§1, 2.1–2.4, PDF pp. 1–6"
    - title: "Michael I. Jordan, Zoubin Ghahramani, Tommi S. Jaakkola, and Lawrence K. Saul, An Introduction to Variational Methods for Graphical Models (1999)"
      url: "https://people.eecs.berkeley.edu/~jordan/papers/variational-intro.pdf"
      locator: "§§6.1–6.3, printed pp. 213–220, PDF pp. 31–38"
    - title: "Ronghuo Zheng, Zhiting Hu, and Yuntian Deng, 10-708 Probabilistic Graphical Models, Lecture 13: Variational Inference II (2015)"
      url: "https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf"
      locator: "Complete 9-page lecture note; §§2.3.2–3.2, PDF pp. 3–6"
---

## Definition

Let $(\Omega,\mathcal A,\mu)$ be a measure space. Let $\gamma:\Omega\to[0,\infty]$ be measurable and suppose
$$Z:=\int_\Omega\gamma\,d\mu\in(0,\infty).$$
Define the normalized target density $\pi:=\gamma/Z$. Then $\int\pi\,d\mu=1$. For a measurable probability density $q\ge0$ (that is, $\int_\Omega q\,d\mu=1$), write $q\ll_\mu\pi$ to mean $q=0$ $\mu$-almost everywhere on $\{\pi=0\}$. This is a support condition on the two densities. It ensures that the induced probability measures $Q:=q\,\mu$ and $\Pi:=\pi\,\mu$ have $Q\ll\Pi$.

The normalization follows from positive-scalar homogeneity of the nonnegative integral:
$$\int\pi\,d\mu=Z^{-1}\int\gamma\,d\mu=1.$$
The induced density set functions are measures by The indefinite integral of a nonnegative measurable function is a measure. Their total masses are one: $Q(\Omega)=1$ by the probability-density hypothesis on $q$, and $\Pi(\Omega)=1$ by the preceding calculation. To verify the absolute-continuity claim, let $A\in\mathcal A$ satisfy $\Pi(A)=0$. Then $\int_A\pi\,d\mu=0$, so the zero-integral criterion gives $\pi=0$ $\mu$-almost everywhere on $A$. The support condition then gives $q=0$ $\mu$-almost everywhere on $A$, and hence $Q(A)=0$. The homogeneity and zero-integral criteria used here are Monotonicity and nonnegative homogeneity of the nonnegative integral and A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere.

Call $q$ **admissible** when $q\ll_\mu\pi$ and
$$\int_\Omega q\bigl(|\log\gamma|+|\log q|\bigr)\,d\mu<\infty.$$
Use the extended logarithm $\log0=-\infty$, agreeing with The natural logarithm as the inverse of the exponential function on positive inputs. Since $\int\gamma\,d\mu<\infty$ and $\int q\,d\mu=1$, both functions are finite $\mu$-almost everywhere: for either $f=\gamma$ or $f=q$, $\mu\{f=\infty\}\le n^{-1}\int f\,d\mu$ for every $n\ge1$. Interpret the weighted logarithmic terms on this measurable conull set and set them equal to zero on its measurable null complement, so the resulting functions remain measurable. In particular, set $q|\log\gamma|$, $q|\log q|$, $q\log\gamma$, and $q\log q$ equal to zero on $\{q=0\}$. On the set where $q>0$, admissibility implies $\gamma>0$ $\mu$-almost everywhere. Define the finite real number
$$\operatorname{ELBO}(q):=\int_\Omega q(\log\gamma-\log q)\,d\mu.$$
A **variational family** is a nonempty set of admissible densities. A maximizing member need not exist.

For a finite integer $m\ge1$, let $\Omega=\prod_{j=1}^m\Omega_j$, let each $(\Omega_j,\mathcal A_j,\mu_j)$ be sigma-finite, and let $\mu=\bigotimes_{j=1}^m\mu_j$. A **mean-field density** is a product $q(z)=\prod_{j=1}^m q_j(z_j)$ of probability densities $q_j$; it belongs to the admissible mean-field family only when the product satisfies the support and integrability conditions above. Tonelli gives $\int q\,d\mu=1$. The product form alone does not guarantee support or finite ELBO.

In a dominated Bayesian model, a posterior interpretation is available only with the model hypotheses and on fibers with finite positive evidence, as in Bayes formula for dominated kernels and Conditional density formula. In particular, Likelihood densities supplies separate likelihood versions but does not assert joint measurability in parameter and data. Supply the single jointly measurable density $\gamma$ explicitly before using Tonelli or a posterior-kernel formula. No quotient is formed at zero or infinite normalizer.

## Definition references

[[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]

[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]

[[def-natural-logarithm]]

[[thm-bayes-formula-for-dominated-kernels]]

[[thm-conditional-density-formula]]

[[def-likelihood-density]]

