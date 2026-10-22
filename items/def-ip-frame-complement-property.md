---
id: def-ip-frame-complement-property
kind: definition
title: Complement property for a real finite measurement family
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-real-frame-phase-retrieval
  - def-linear-combination-and-span
  - lem-span-is-the-set-of-linear-combinations
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Radu Balan, Pete Casazza, and Dan Edidin, On signal reconstruction without phase, Applied and Computational Harmonic Analysis 20(3) (2006), §2"
      url: "https://arxiv.org/pdf/math/0412411"
    - title: "Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, Phase Retrieval: Uniqueness and Stability, arXiv:1901.07911v2, §2.1"
      url: "https://arxiv.org/pdf/1901.07911v2"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $d\ge1$, $m\ge0$, and let $\Phi=(a_i)_{i\in[m]}$ be a finite family in $\mathbb R^d$. For $S\subseteq[m]$, write
$$\operatorname{span}_{\mathbb R}(\Phi_S):=\operatorname{span}_{\mathbb R}\{a_i:i\in S\},$$
with $\operatorname{span}_{\mathbb R}(\Phi_{\varnothing})=\{0\}$. The family $\Phi$ has the **complement property** if for every $S\subseteq[m]$,
$$\operatorname{span}_{\mathbb R}(\Phi_S)=\mathbb R^d \quad\text{or}\quad \operatorname{span}_{\mathbb R}(\Phi_{[m]\setminus S})=\mathbb R^d.$$
The definition applies to labeled families, including repeated or zero vectors.

## Definition references

[[def-ip-real-frame-phase-retrieval|Finite real measurement families and index set]]

[[def-linear-combination-and-span|Linear span and the empty span]]

[[lem-span-is-the-set-of-linear-combinations|Finite-combination description and empty-span value]]

[Radu Balan, Pete Casazza, and Dan Edidin, complement property, §2](https://arxiv.org/pdf/math/0412411)

[Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, complement property, §2.1](https://arxiv.org/pdf/1901.07911v2)
