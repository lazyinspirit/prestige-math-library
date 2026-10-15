---
id: def-statistical-and-computational-error-ledger
kind: definition
title: "Successive statistical and computational error targets"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - thm-arithmetic-and-lattice-operations-preserve-measurability
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Anthony Davison and David Hinkley, Bootstrap Methods and Their Application, Chapter 2 §2.5.1–§2.5.2"
      url: "https://api.pageplace.de/preview/DT0400.9781107266384_A23760363/preview-9781107266384_A23760363.pdf"
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §§17.1 and 17.4 and end notes"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "David Bindel, CS 6210: Sums, Dots, and Error in Linear Systems, lecture of 2025-09-10"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html"
---

## Definition

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space as in [[def-probability-measure]], let $\theta\in\mathbb R$ be a fixed target, and let $m\in\mathbb N\cup\{0\}$. Take $r_1,\ldots,r_m$ and $\widetilde r$ to be real random variables on this space, meaning measurable maps $(\Omega,\mathcal F)\to(\mathbb R,\mathcal B(\mathbb R))$ as in [[def-random-element-and-real-random-variable]]. Set $r_0(\omega):=\theta$ for every $\omega\in\Omega$. Deterministic values are included by using a one-point probability space. The reference chain $r_0,r_1,\ldots,r_m$ must put every quantity on the same scale and state which ideal analysis stage each transition represents. Define the signed stage errors pointwise by
$$e_j:=r_j-r_{j-1}\qquad(1\le j\le m)$$
and the final numerical error
$$e_{\mathrm{fp}}:=\widetilde r-r_m.$$

Each error is measurable because finite sums and differences of measurable real-valued functions are measurable ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

When the stages are present, $e_1$ may record data-sampling error, a later transition may record a bootstrap or permutation approximation, a discretized target may record numerical-model bias, and a finite simulation may record computation-randomization error. The labels describe the declared adjacent references; they do not by themselves assert that errors are independent, centered, unbiased, or even random. If a stage is absent, omit it or set its two adjacent references equal. If no floating-point computation is involved, set $\widetilde r=r_m$.

For a probability statement about these errors, the required joint probability law and any conditioning convention must also be specified. For example, fixing the observed data and varying independent randomizations concerns computation error conditional on those data; it does not include variation across new data samples. A deterministic quadrature rule has no replicate-based error estimate unless an actual randomization is added. Any numerical roundoff bound must state its arithmetic and normal-range hypotheses.
