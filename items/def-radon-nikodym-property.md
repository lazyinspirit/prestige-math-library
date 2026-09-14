---
id: def-radon-nikodym-property
kind: definition
title: "Radon--Nikodym property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-banach-valued-vector-measure-and-variation, def-bochner-integrable-function]
justified_by: []
forward_refs: []
aliases: [RNP]
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, Section 2.1, RNP definition following Proposition 2.1, printed p. 34"
pipeline_run: phase-2-next-18
---

## Definition

A real or complex Banach space $X$ has the **Radon--Nikodym property**
(**RNP**) if the following holds. For every finite measure space
$(\Omega,\mathcal A,\mu)$ and every norm-countably additive $X$-valued vector
measure $\nu$ of bounded variation satisfying $\nu\ll\mu$, there exists a
Bochner-integrable function $f:\Omega\to X$ such that

$$\nu(E)=\int_E f\,d\mu\qquad(E\in\mathcal A).$$

Such an $f$ is called a **Bochner density** of $\nu$ with respect to $\mu$.
The equality is required on every measurable set, not only on $\Omega$.

## Remarks

- The control measure $\mu$ is finite; the vector measure separately has
  bounded variation and is absolutely continuous with respect to it.
- The zero Banach space has RNP, with the zero density for its only vector
  measure. On the empty measure space the same density satisfies the condition.
- The definition is a property of the Banach target. It is stronger than the
  scalar Radon--Nikodym theorem when the target is arbitrary.
