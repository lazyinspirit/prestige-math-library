---
id: def-dirichlet-convolution-identity
kind: definition
title: "The Dirichlet-convolution identity and the constant-one function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-arithmetic-function]
justified_by: []
aliases: []
verification:
  audited: 2026-08-31
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Section 2.9"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
    - title: "Kiran S. Kedlaya, An Introduction to Analytic Number Theory, Definition 3.8"
      url: "https://kskedlaya.org/ant/chapter-3.html"
pipeline_run: null
---

## Definition

The **Dirichlet-convolution identity** is the arithmetic function
$\varepsilon$ given by

$$ \varepsilon(1)=1,\qquad \varepsilon(n)=0\text{ for }n>1. $$

The **constant-one function** is the arithmetic function $\mathbf 1$ defined by

$$ \mathbf 1(n)=1 $$

for every positive integer $n$.

## Remarks

- The symbols $\varepsilon$ and $\mathbf 1$ serve different roles. Later
  identities such as $\mathbf 1 * \Lambda=\log$ and $\mu * \mathbf 1=\varepsilon$
  use both at once.
