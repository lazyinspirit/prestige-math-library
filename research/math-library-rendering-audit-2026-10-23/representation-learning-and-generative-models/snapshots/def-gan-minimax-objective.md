---
id: def-gan-minimax-objective
kind: definition
title: GAN minimax objective and its distributional domain
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-sigma-algebra
  - def-measure
  - def-measure-space
  - def-probability-measure
  - def-nonnegative-lebesgue-integral
  - def-integral-over-a-measurable-set
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-composition-with-borel-functions-preserves-measurability
  - def-measurable-pointwise-extended-real-product
  - thm-arithmetic-and-lattice-operations-preserve-measurability
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Ian J. Goodfellow et al., Generative Adversarial Nets, arXiv:1406.2661v1"
      url: "https://arxiv.org/pdf/1406.2661"
    - title: "Yingzhen Li, Lecture notes on generative adversarial networks (GANs), Deep Learning (Winter 2022, Imperial College London)"
      url: "https://yingzhenli.net/home/pdf/imperial_dlcourse2022_gan_notes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Let $X$ be a set, let $\mathcal A$ be a sigma-algebra on $X$ (a family containing $\emptyset$ and $X$, closed under complements and countable unions), and let $\mu:\mathcal A\to[0,+\infty]$ be a countably additive measure with $\mu(\emptyset)=0$. Let $P,Q$ be probability measures on $(X,\mathcal A)$, meaning countably additive measures with $P(X)=Q(X)=1$. A function from $X$ to a Borel space is measurable when the inverse image of each Borel set belongs to $\mathcal A$. Assume that $P$ and $Q$ have finite-valued, nonnegative, measurable densities $p$ and $q$ with respect to the same measure $\mu$, meaning that $P(E)=\int_E p\,d\mu$ and $Q(E)=\int_E q\,d\mu$ for every $E\in\mathcal A$. In particular, $\int p\,d\mu=\int q\,d\mu=1$.

For a measurable discriminator $D:X\to[0,1]$, put $a(t)=-\ln t$ for $0<t\le1$ and $a(0)=+\infty$, and put $b(t)=-\ln(1-t)$ for $0\le t<1$ and $b(1)=+\infty$. In the products below, define $0\cdot(+\infty)=0$; a positive finite factor times $+\infty$ is $+\infty$. Define the log payoff and the unrestricted discriminator value by
$$
V(D;P,Q):=-\int p(x)a(D(x))\,d\mu(x)-\int q(x)b(D(x))\,d\mu(x),\qquad C(P,Q):=\sup_{D:X\to[0,1]\,\mathrm{measurable}}V(D;P,Q).
$$
The functions $a$ and $b$ are Borel measurable: $\ln$ is continuous on $(0,\infty)$, and each extension assigns $+\infty$ only at one Borel endpoint. Therefore $a\circ D$ and $b\circ D$ are measurable, and the products with $p$ and $q$ are measurable by the pointwise product convention and product-closure result referenced below. Thus both nonnegative integrals are defined.

Each integral is the nonnegative Lebesgue integral, defined as the supremum of the integrals of nonnegative simple minorants, so $V(D;P,Q)\in[-\infty,0]$. The supremum ranges over all measurable functions into $[0,1]$, including boundary values; it is not restricted to a finite-parameter discriminator family.

## Definition references

[[def-measure-space|Measure-space convention]]

[[def-sigma-algebra|Sigma-algebra convention]]

[[def-measure|Countably additive measure convention]]

[[def-probability-measure|Probability-measure convention]]

[[def-nonnegative-lebesgue-integral|Nonnegative Lebesgue integral]]

[[def-integral-over-a-measurable-set|Integral over a measurable set]]

[[def-natural-logarithm|Natural logarithm]]

[[thm-natural-logarithm-laws|Continuity of the natural logarithm]]

[[thm-composition-with-borel-functions-preserves-measurability|Measurable composition]]

[[def-measurable-pointwise-extended-real-product|Extended-real product convention]]

[[thm-arithmetic-and-lattice-operations-preserve-measurability|Measurability of arithmetic and products]]

[Goodfellow et al., §§3–4.1, equations (1)–(3), complete 9-page paper](https://arxiv.org/pdf/1406.2661)

[Li, §§1.1–1.2, equations (1)–(8), complete 6-page lecture note](https://yingzhenli.net/home/pdf/imperial_dlcourse2022_gan_notes.pdf)
