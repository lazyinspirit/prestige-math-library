---
id: thm-lefschetz-trace-formula-for-constructible-l-adic-sheaves-on-smooth-proper-curves
kind: theorem
title: "Lefschetz trace formula for constructible ℓ-adic sheaves on smooth proper curves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-derived-category-of-etale-sheaves
  - def-constructible-l-adic-sheaf-on-a-scheme
  - def-l-adic-sheaf-as-compatible-system
  - def-smooth-curve-over-finite-field
  - thm-finiteness-of-compactly-supported-etale-cohomology
  - thm-torsion-lefschetz-trace-formula-for-constructible-sheaves-on-smooth-proper-curves
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Grothendieck et al., SGA 5, Exposé XV §3, Proposition 2"
      url: "https://grothendiecksga.com/read/sga5/en/XV-3.html"
---

## Statement

Let $k$ be an algebraically closed field of characteristic $p$, let $\ell\ne p$ be a prime, let $C$ be a smooth proper curve over $k$, and let $\mathcal F$ be a constructible $\ell$-adic sheaf on $C$. Let $h:C\to C$ be a morphism with finite fixed-point scheme such that the local intersection multiplicity of its graph with the diagonal is one at every fixed point, and let $h_{\mathcal F}:h^*\mathcal F\to\mathcal F$ be a morphism of sheaves. For each fixed point $x\in C^h$, let $h_{\mathcal F,x}$ be the endomorphism of the stalk induced by $h_{\mathcal F}$. For each integer $i$, define $T_i$ to be the composite $H^i(C,\mathcal F)\xrightarrow{h^*}H^i(C,h^*\mathcal F)\xrightarrow{H^i(h_{\mathcal F})}H^i(C,\mathcal F)$. Then
$$\sum_{x\in C^h}\operatorname{Tr}(h_{\mathcal F,x})=\sum_i(-1)^i\operatorname{Tr}(T_i).$$

## Statement references

[SGA 5, Exposé XV §3, Proposition 2 and the proof following it](https://grothendiecksga.com/read/sga5/en/XV-3.html)
