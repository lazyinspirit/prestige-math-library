---
id: def-completed-dedekind-zeta-function
kind: definition
title: "Completed Dedekind zeta function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [def-dedekind-zeta-function, def-archimedean-embeddings-and-number-field-signature, def-discriminant-of-a-number-field-basis-and-order, def-euler-gamma-function, def-natural-logarithm, thm-dedekind-zeta-euler-product]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §4"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.454–456, gamma factors at real and complex places and their functional equations."
---

## Definition

Let $K$ be a number field of signature $(r_1,r_2)$ and field discriminant $d_K$. For $\operatorname{Re}(s)>1$, define the real and complex gamma factors by
$$\Gamma_{\mathbb R}(s):=\pi^{-s/2}\Gamma(s/2),\qquad \Gamma_{\mathbb C}(s):=2(2\pi)^{-s}\Gamma(s),$$
where $\Gamma$ is Euler's gamma function and positive-base complex powers use $a^s:=e^{s\log a}$. The **completed Dedekind zeta function** is
$$\Lambda_K(s):=|d_K|^{s/2}\Gamma_{\mathbb R}(s)^{r_1}\Gamma_{\mathbb C}(s)^{r_2}\zeta_K(s).$$

## Definition references

[[def-dedekind-zeta-function]]

[[def-archimedean-embeddings-and-number-field-signature]]

[[def-discriminant-of-a-number-field-basis-and-order]]

[[def-euler-gamma-function]]

[[def-natural-logarithm]]

[[thm-dedekind-zeta-euler-product]]
