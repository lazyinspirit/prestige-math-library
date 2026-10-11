---
id: def-injectivity-surjectivity-and-stability-degree-of-an-fi-module
kind: definition
title: "Injectivity, surjectivity and stability degree"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-fi-coinvariant-functors-and-transition-maps,
       def-natural-numbers]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Definition 3.1.3 (stability degree), Definition 3.1.5 (injectivity and surjectivity degree with $\\operatorname{stab-deg}=\\max$), and Remark 3.1.4, printed pp. 16–17"
    - title: "Thomas Church, Jordan S. Ellenberg, Benson Farb and Rohit Nagpal, “FI-modules over Noetherian rings”, Geom. Topol. 18 (2014) 2951–2984; author-hosted full text"
      url: "https://www.math.uchicago.edu/~farb/papers/FImodNoetherian.pdf"
      locator: "§2.1, printed pp. 9–13: the shift-form equivalent running through $H_0$ (corroborating context; not used in the definition)"
---

## Definition

Let $V$ be an FI-module over $k$ and let $\Phi_a$ and $T$ be the coinvariant
functors and transition maps of
[[def-fi-coinvariant-functors-and-transition-maps]]. The **injectivity degree**
$\operatorname{inj-deg}(V)$ is the least $s\ge0$ such that for every $a\ge0$
the transition map $T\colon\Phi_a(V)_n\to\Phi_a(V)_{n+1}$ is injective for all
$n\ge s$; the **surjectivity degree** $\operatorname{surj-deg}(V)$ is the least
$s\ge0$ such that for every $a\ge0$ the map $T$ is surjective for all $n\ge s$.
The **stability degree** is

$$\operatorname{stab-deg}(V):=\max\bigl(\operatorname{inj-deg}(V),\operatorname{surj-deg}(V)\bigr).$$

Each of the three is $+\infty$ when no such $s$ exists; here the bounds are
read as elements of the extended nonnegative integers
$\mathbb N\cup\{+\infty\}$ with the evident order, in which every nonempty
subset of $\mathbb N$ has a least element
([[def-natural-numbers]]), so "the least $s$" is well defined. Equivalently,
$T\colon\Phi_a(V)_n\to\Phi_a(V)_{n+1}$ is an isomorphism for all $a\ge0$ and
all $n\ge\operatorname{stab-deg}(V)$: the map is an isomorphism exactly when it
is both injective and surjective, and for finite bounds a threshold that
controls all $a$ simultaneously is the larger of the two thresholds, while
each of the two stated bounds remains the least threshold controlling its own
property.

The three bounds are kept distinct: $\operatorname{stab-deg}(V)$ is the maximum
of the other two, and nothing in the definition requires
$\operatorname{inj-deg}(V)=\operatorname{surj-deg}(V)$. No finiteness is
asserted: each bound is allowed to be $+\infty$. No choice principle is used.
