---
id: def-dirichlet-density-of-prime-ideals
kind: definition
title: "Dirichlet density of prime ideals in a number field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-natural-and-dirichlet-density, def-number-field, def-absolute-norm-of-an-ideal]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, Chapter VI §4"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Printed pp.194–195, Dirichlet density for sets of prime ideals."
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, §4.2"
      url: "https://kskedlaya.org/ant/chap-primes-in-ap.html"
      locator: "Definitions 4.3–4.4 and Examples 4.5–4.6, relative prime density and its logarithmic normalization."
---

## Definition

Let $K$ be a number field and let $S$ be a set of nonzero prime ideals of $\mathcal O_K$. If the limit exists as a finite real number, the **Dirichlet density of $S$** is
$$\delta_K(S):=\lim_{\sigma\downarrow1,\ \sigma>1}\frac{\displaystyle\sum_{\mathfrak p\in S}(N\mathfrak p)^{-\sigma}}{\log\!\left(\frac1{\sigma-1}\right)},$$
where $N\mathfrak p$ is the absolute ideal norm. Equivalently, $S$ has Dirichlet density $\delta$ when
$$\sum_{\mathfrak p\in S}(N\mathfrak p)^{-\sigma}=\delta\log\!\left(\frac1{\sigma-1}\right)+o\!\left(\log\!\left(\frac1{\sigma-1}\right)\right)\qquad(\sigma\downarrow1,\ \sigma>1).$$
The logarithmic normalization is the number-field analogue of relative Dirichlet density among rational primes.

## Definition references

[[def-natural-and-dirichlet-density]]

[[def-number-field]]

[[def-absolute-norm-of-an-ideal]]
