---
id: def-continuous-a-l-adic-galois-representation
kind: definition
title: "Continuous A_l-adic Galois representation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-function-field-coefficient-ring
  - lem-adic-completion-of-dedekind-domain-at-prime-is-a-dvr
  - def-absolute-galois-group-of-a-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bjorn Poonen, Introduction to Drinfeld Modules, §3.8"
      url: "https://math.mit.edu/~poonen/papers/drinfeld.pdf"
    - title: "Mihran Papikian, An Overview of the Theory of Drinfeld Modules, §3.2"
      url: "https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf"
verification:
  precheck: n/a
---

## Definition

Fix a function-field coefficient datum $(A,\mathfrak l)$, a field $L$, and a separable closure $L^{\mathrm{sep}}/L$. Let $G_L=\operatorname{Gal}(L^{\mathrm{sep}}/L)$ with its inverse-limit (Krull) topology, and let $M$ be a finite free $A_{\mathfrak l}$-module with the topology defined by the submodules $\mathfrak l^n A_{\mathfrak l}M$. The group $\operatorname{Aut}_{A_{\mathfrak l}}(M)$ is given the congruence topology whose neighborhoods of the identity are the kernels of the maps to $\operatorname{Aut}_{A_{\mathfrak l}/\mathfrak l^nA_{\mathfrak l}}(M/\mathfrak l^nA_{\mathfrak l}M)$. A **continuous $A_{\mathfrak l}$-adic Galois representation of $L$ on $M$** is a continuous group homomorphism $\rho:G_L\to\operatorname{Aut}_{A_{\mathfrak l}}(M)$.

## Definition references

[[def-function-field-coefficient-ring]]

[[lem-adic-completion-of-dedekind-domain-at-prime-is-a-dvr]]

[[def-absolute-galois-group-of-a-field]]

Bjorn Poonen, *Introduction to Drinfeld Modules*, §3.8: https://math.mit.edu/~poonen/papers/drinfeld.pdf

Mihran Papikian, *An Overview of the Theory of Drinfeld Modules*, §3.2: https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf
