---
id: def-bruhat-interval-and-r-polynomials
kind: definition
title: Bruhat intervals and the $R$-coefficients
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [def-normalized-type-a-hecke-algebra-and-its-bar-involution, lem-the-hecke-bar-involution-is-well-defined, lem-bruhat-order-basic-properties-for-permutations, def-bruhat-order-on-the-symmetric-group]
dependency_level: 2
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters (revised book version, arXiv:math/0208154v2) — the split case $L\\equiv1$ read as the source for the bar operator, the R-coefficients, the new basis, its multiplication properties and cells; translated to the normalization of this page by $v_L=v^{-1}$ (so $v_L^{L(w)-L(y)}=v^{-(\\ell(w)-\\ell(y))}$)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§2.1–2.5 (printed pp. 19–22) for Bruhat order; §3.1–3.5 (pp. 22–24) for the Hecke presentation and standard basis; §4.1–4.3 (pp. 24–25) for the bar operator and coefficient expansion. These complete passages were read."
    - title: "Ben Elias and Geordie Williamson, The Hodge theory of Soergel bimodules, arXiv:1212.0791 (45 pp.) — §3.2 (printed pp. 15–16): the Hecke algebra in the normalization $H_xH_s=H_{xs}$ or $(v^{-1}-v)H_x+H_{xs}$, the bar involution $\\overline{H_x}=H_{x^{-1}}^{-1}$, the Kazhdan–Lusztig basis $\\{\\underline H_x\\}$ characterized by bar-invariance and $\\underline H_x\\in H_x+\\sum_{y<x}v\\mathbb Z[v]H_y$, the example $\\underline H_s=H_s+vH_{\\mathrm{id}}$, and Remark 3.2: $v=q^{-1/2}$, $H_x=v^{\\ell(x)}T_x$, $\\underline H_x=C'_x$, $h_{y,x}=v^{\\ell(x)-\\ell(y)}P_{y,x}(v^{-2})$"
      url: "https://arxiv.org/pdf/1212.0791"
      locator: "§3.2, printed pp. 15–16, complete section read for the bar and normalization conventions."
    - title: "Susumu Ariki, Robinson–Schensted correspondence and left cells, arXiv:math/9910117 (18 pp.) — the direct proof of the Kazhdan–Lusztig cell classification in type A via Knuth relations and transported Kazhdan–Lusztig graph edges"
      url: "https://arxiv.org/pdf/math/9910117"
      locator: "§§2.1–2.2 (printed pp. 3–7: RSK, Kazhdan–Lusztig polynomials, and cells, including Lemma 2.7); §§3.1–3.3 (pp. 7–9: Knuth relations, Lemma 3.4, Propositions 3.5–3.7); §3.4 (pp. 10–11: Proposition 3.8 and the complete proof of Theorem A)"
verification:
  precheck: n/a
---

## Definition

Let $n\ge1$ and $y,w\in S_n$. The **Bruhat interval** $[y,w]:=\{z\in S_n:y\le z\le w\}$ is finite, with Bruhat order as in [[lem-bruhat-order-basic-properties-for-permutations]] and [[def-bruhat-order-on-the-symmetric-group]]. The rank-order definition uses the zero-based model of $S_n$, while $H_v(n)$ uses the one-based model; throughout, identify them by the order-preserving shift $i\mapsto i+1$ on inputs and values.

The **$R$-coefficients** $r_{y,w}\in A=\mathbb Z[v^{\pm1}]$ are the unique coefficients in the standard-basis expansion
$$\overline{H_w}=H_{w^{-1}}^{-1}=\sum_{y\in S_n}r_{y,w}H_y,$$
where the bar is the involution from [[lem-the-hecke-bar-involution-is-well-defined]] and $\{H_y:y\in S_n\}$ is the standard basis of [[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]. The sum has finite support because $S_n$ is finite. In rank one, $\overline{H_{s_i}}=H_{s_i}^{-1}=H_{s_i}+(v-v^{-1})H_{\mathrm{id}}$, so $r_{\mathrm{id},s_i}=v-v^{-1}$.

The support, diagonal, and parity properties of these coefficients are stated and proved in [[thm-r-polynomial-recursion-and-degree-bounds]]. This page uses the coefficient normalization given by the displayed bar expansion.
