---
id: def-logarithmic-derivative-meromorphic-function
kind: definition
title: "The logarithmic derivative of a meromorphic function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-meromorphic-function-complex-domain]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Definition

Let $\Omega\subseteq\mathbb C$ be a complex domain, let $f$ be meromorphic on
$\Omega$, let $Z(f)$ be the zero set of $f$, and let $P(f)$ be its pole set.
On the open set

$$\Omega\setminus\bigl(Z(f)\cup P(f)\bigr)$$

the function $f$ is holomorphic and nonzero, so the quotient

$$\frac{f'}{f}$$

is holomorphic there. This quotient is the **logarithmic derivative** of $f$.

## Remarks

The logarithmic derivative is not defined at a zero or a pole of $f$ by the
displayed quotient itself. At every zero of finite positive order and at every
pole, the next lemma identifies its principal part and shows that the resulting
singularity is simple. The identically zero function is excluded from that
local conclusion because its quotient $f'/f$ is defined nowhere.
