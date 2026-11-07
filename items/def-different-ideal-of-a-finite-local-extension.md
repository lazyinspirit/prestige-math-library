---
id: def-different-ideal-of-a-finite-local-extension
kind: definition
title: "Different ideal of a finite separable local extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-extension-degree-and-finite-extension
  - def-field-norm-and-trace
justified_by:
  - thm-local-trace-dual-is-a-fractional-ideal
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. Neukirch, Algebraic Number Theory, Chapter III, Section 2"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
    - title: "Keith Conrad, The Different Ideal, Sections 3–4"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
verification:
  precheck: n/a
---

## Definition

Let $L/K$ be a finite separable extension of nonarchimedean local fields with
finite residue fields. Write $\mathcal O_K$ and $\mathcal O_L$ for their
valuation rings, and use the field trace $\operatorname{Tr}_{L/K}$. The
codifferent is the trace-dual set
$$\mathfrak D_{L/K}^{-1}:=\{x\in L:\operatorname{Tr}_{L/K}(x\mathcal O_L)\subseteq\mathcal O_K\}.$$
Once this set is proved to be a nonzero fractional $\mathcal O_L$-ideal, its
inverse fractional ideal $\mathfrak D_{L/K}:=(\mathfrak D_{L/K}^{-1})^{-1}$ is
the different ideal. The exponent of the different is the integer $d$ for
which $\mathfrak D_{L/K}=\mathfrak m_L^d$.

## Definition references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-extension-degree-and-finite-extension]]

[[def-field-norm-and-trace]]

[J. Neukirch, *Algebraic Number Theory*, Chapter III, Section 2](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

[Keith Conrad, *The Different Ideal*, Sections 3–4](https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf)
