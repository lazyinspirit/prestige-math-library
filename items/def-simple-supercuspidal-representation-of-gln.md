---
dependency_level: 1
id: def-simple-supercuspidal-representation-of-gln
kind: definition
title: "Affine-Generic Simple Supercuspidal Representation of GL(m)"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [lem-affine-generic-cyclic-normalizer-splits-compact-induction]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula and L-functions for GL(n+1) × GL(n), §9.2.3"
      url: "https://arxiv.org/pdf/2303.02225v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Let $K$ be a nonarchimedean local field with ring of integers $\mathcal O$, maximal ideal $\mathfrak p=(\varpi)$, residue field $k=\mathcal O/\mathfrak p$, and $m\geq2$. Put $G=\mathrm{GL}_m(K)$ and let $Z=K^\times I_m$. The pro-unipotent Iwahori subgroup $I^+$ consists of matrices $g\in\mathrm{GL}_m(\mathcal O)$ with $g_{ii}\in1+\mathfrak p$, $g_{ij}\in\mathcal O$ for $i<j$, and $g_{ij}\in\mathfrak p$ for $i>j$. Define its affine-root coordinate map by

$$\operatorname{aff}(g)=\bigl(\overline{g_{1,2}},\ldots,\overline{g_{m-1,m}},\overline{\varpi^{-1}g_{m,1}}\bigr)\in k^m.$$

For a nontrivial additive character $\bar\psi:k\to\mathbb C^\times$ and coefficients $a_1,\ldots,a_m\in k^\times$, the character $\eta_a(g)=\bar\psi\bigl(\sum_{i=1}^{m-1}a_i\overline{g_{i,i+1}}+a_m\overline{\varpi^{-1}g_{m,1}}\bigr)$ of $I^+$ is called affine-generic. If $\chi:K^\times\to\mathbb C^\times$ is a unitary character trivial on $1+\mathfrak p$, then $\widetilde\eta_a(zg)=\chi(z)\eta_a(g)$ is a well-defined character of $ZI^+$. For the canonical coefficients $(1,\ldots,1,\bar t)$, let $c$ have ones in positions $(i,i+1)$ and $\varpi/t$ in position $(m,1)$. The cyclic extension $H^+=\langle c\rangle ZI^+$ has $c^m=(\varpi/t)I_m$. For each root $\zeta^m=\chi(\varpi/t)$, extend $\widetilde\eta_a$ to $H^+$ by giving $c$ value $\zeta$, and form the candidate $\sigma_\zeta=\operatorname{c-Ind}_{H^+}^{G}\eta_\zeta$. For general affine-generic coefficients use the diagonal conjugation reducing them to canonical coefficients, and transport $H^+$ and its character back by that conjugation. Compact induction means the locally constant equivariant functions with support compact modulo the inducing subgroup, acted on by right translation. When a candidate is irreducible and supercuspidal, this item calls it an affine-generic simple supercuspidal; genericity additionally means a nonzero Whittaker functional for the specified nondegenerate character.

The inducing subgroup is the cyclic extension, not $ZI^+$ alone: induction from $ZI^+$ is the direct sum of its $m$ nonzero candidates. This definition asserts no irreducibility, existence, genericity or source-equivalence theorem.

## Definition references

[Liyang Yang, *Relative Trace Formula and L-functions for GL(n+1) × GL(n)*, §9.2.3](https://arxiv.org/pdf/2303.02225v1)

[Andrew Knightly and Charles Li, *Simple supercuspidal representations of GL(n)*, Taiwanese Journal of Mathematics 19 (2015), no. 4, 995–1029](https://doi.org/10.11650/tjm.19.2015.3853)

## Remarks

This page fixes the affine-root character convention used for the local type in the nonvanishing example. Identifying it with the precise Knightly–Li construction cited by Yang remains a source check for that dependent theorem; this definition itself makes no irreducibility, existence, or local-period claim.

[[lem-affine-generic-cyclic-normalizer-splits-compact-induction|Finite cyclic normalizer and compact-induction decomposition]]
