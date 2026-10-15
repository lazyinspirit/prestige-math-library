---
id: def-hierarchical-bayesian-model
kind: definition
title: "Finite-group hierarchical Bayesian model"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - lem-finite-products-of-dominated-kernels-have-product-density
  - def-parametric-statistical-model
  - def-parameter-measurable-statistical-model-as-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-standard-borel-space
  - def-conditional-independence-given-a-sigma-algebra
  - def-axiom-of-choice
  - thm-independent-random-elements-have-product-joint-law
  - lem-finite-products-of-probability-kernels
  - lem-prior-and-model-kernel-define-joint-law
justified_by: []
proof_strategy: definition
axiom_use: "The finite product-kernel construction is choice-free. AC is included only for the library's conditional-independence terminology, whose definition uses conditional-expectation classes."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., §§5.1–5.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 5, §§5.1–5.4, printed pp. 101–119: hyperparameters, finite exchangeability, the full joint posterior, and the normal hierarchy."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapters 15–16"
      url: "https://www.bayesrulesbook.com/chapter-15.html"
      locator: "Chapter 15, §§15.1–15.4: complete pooling, no pooling, grouped data, and partial pooling."
---

## Definition

Fix a finite group count $m\ge1$, a standard Borel hyperparameter space
$(H,\mathcal H)$, and a standard Borel parameter space $(\Theta,\mathcal T)$.
Let $\Pi$ be a probability measure on $(H,\mathcal H)$ and let
$$G:H\times\mathcal T\to[0,1]$$
be a probability kernel. For each $j\in\{1,\ldots,m\}$, let
$(\mathcal Y_j,\mathcal A_j)$ be a measurable observation space, let $\nu_j$
be a sigma-finite measure on it, and let $K_j$ be a probability kernel from
$(\Theta,\mathcal T)$ to $(\mathcal Y_j,\mathcal A_j)$ with a specified
jointly measurable density $f_j:\Theta\times\mathcal Y_j\to[0,\infty]$:
$$K_j(\theta,B)=\int_B f_j(\theta,y_j)\,\nu_j(dy_j)\qquad(B\in\mathcal A_j).$$

The **finite-group hierarchical model** is the following specified kernel
construction. First draw $\eta\sim\Pi$. Conditional on $\eta$, draw
$\theta_1,\ldots,\theta_m$ from the finite product kernel
$$G_\eta^{\otimes m}(d\theta_1\cdots d\theta_m)=\bigotimes_{j=1}^mG_\eta(d\theta_j).$$
Thus the group parameters are conditionally independent and have the same
conditional law $G_\eta$. Conditional on the parameter tuple, draw the group
observations from the product kernel $\bigotimes_{j=1}^mK_j(\theta_j,\cdot)$.
The product-kernel laws are probability kernels by
[[lem-finite-products-of-probability-kernels]]. For each fixed $\eta$, the
coordinate maps under $G_\eta^{\otimes m}$ are independent random elements,
so their joint law is the finite product law
([[thm-independent-random-elements-have-product-joint-law]]).

Put $\Xi=H\times\Theta^m$ with its finite product sigma-algebra. The proper
latent prior $P_0$ on $\Xi$ is
$$P_0(d\eta,d\theta_1\cdots d\theta_m)=\Pi(d\eta)\prod_{j=1}^mG_\eta(d\theta_j),$$
well-defined by [[lem-prior-and-model-kernel-define-joint-law]]. For
$\xi=(\eta,\theta_1,\ldots,\theta_m)\in\Xi$, lift each observation kernel
to the common source $\Xi$ by
$$M_j(\xi,B)=K_j(\theta_j,B)\qquad(B\in\mathcal A_j).$$
The coordinate projection $\xi\mapsto\theta_j$ is measurable, so the kernel
definition shows that each $M_j$ is a probability kernel. Its specified
jointly measurable density is $(\xi,y_j)\mapsto f_j(\theta_j,y_j)$, by
composition with the same measurable coordinate projection. Let
$\mathcal Y=\prod_{j=1}^m\mathcal Y_j$,
$\nu=\bigotimes_{j=1}^m\nu_j$, and $y=(y_1,\ldots,y_m)$. The observation
kernel from $\Xi$ has jointly measurable density
$$L_y(\eta,\theta_1\cdots\theta_m)=\prod_{j=1}^m f_j(\theta_j,y_j)$$
with respect to $\nu$, by [[lem-finite-products-of-dominated-kernels-have-product-density]].
Its **evidence** is the possibly extended nonnegative number
$$Z(y)=\int_\Xi L_y(\eta,\theta_1\cdots\theta_m)\,P_0(d\eta,d\theta_1\cdots d\theta_m).$$
The normalized likelihood measure is called a pointwise joint posterior on a
fiber only when $0<Z(y)<\infty$; no quotient is formed at zero or infinite
evidence.

For each group, $\theta\mapsto K_j(\theta,\cdot)$ is a parametric statistical
model in the sense of [[def-parametric-statistical-model]], with its
parameter-measurable kernel representation as in
[[def-parameter-measurable-statistical-model-as-markov-kernel]]. Here
“conditionally independent given $\eta$” is shorthand for the explicit
finite product-kernel specification above. The library's random-element
conditional-independence terminology is defined in
[[def-conditional-independence-given-a-sigma-algebra]]; its
conditional-expectation-class convention assumes AC. The finite
product-kernel definition here does not use that class convention or any
choice axiom.

## Remarks

The product-kernel assumption is part of this model. An arbitrary finitely
exchangeable law need not be a mixture of iid laws; no finite de Finetti theorem
is claimed here. When $\eta$ is unknown, the joint posterior retains its
uncertainty and induces dependence between group parameters after $\eta$ is
integrated out.
