---
id: def-adelic-metrization-and-anticanonical-height
kind: definition
title: "Adelic metrization and anticanonical height"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-smooth-fano-variety-over-number-field
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-invertible-sheaf
  - thm-product-formula-for-number-fields
  - def-axiom-of-choice
justified_by: []
axiom_use: >-
  AC is assumed because the supplied number-field product formula uses AC; the
  local metric data are otherwise explicit.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §§3–4"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Bjorn Poonen, Rational Points on Varieties, §2.6.4.3"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
    - title: "Jakob Glas, Counting rational points over function fields, PhD thesis, §2.3 (2024)"
      url: "https://research-explorer.ista.ac.at/download/18132/18140/example-phd.pdf"
      locator: "Chapter 2, §2.3, printed pp. 10–11 / PDF pp. 21–22: Manin–Peyre conjecture, alpha-beta-tau factors, thin sets, and accumulating lines on cubic surfaces."
verification: {}
---

## Definition

Assume the Axiom of Choice. Let $K$ be a number field of degree $N=[K:\mathbb Q]$, let $X/K$ be a smooth Fano variety, and let $L=-K_X$ be its anticanonical line bundle. A **model** of $X$ over a localization $\mathcal O_{K,S}$ of its ring of integers is a proper finite-type $\mathcal O_{K,S}$-scheme $\mathcal X$ with generic fibre identified with $X$; here $\mathcal O_{K,S}:=\{a\in K:|a|_v\le1\text{ at every finite place }v\notin S\}$. An **adelic metrization** of $L$ is a family of continuous norms $\|\cdot\|_v$ on $L$ over the completions $K_v$, one for every place $v$ of $K$, with $\|a\ell\|_v=|a|_v\|\ell\|_v$ for $a\in K_v$, such that outside a finite set $S$ of finite places the norms are induced by one model $\mathcal X$ and an extending invertible sheaf $\mathcal L$, with every integral local generator assigned norm $1$. At an archimedean place the norm is continuous on the associated complex analytic line bundle. Use the product-formula normalization $|a|_v=(N\mathfrak p)^{-\operatorname{ord}_{\mathfrak p}(a)}$ at the finite place from $\mathfrak p$, $|\sigma(a)|$ at a real place, and $|\tau(a)|^2$ at a complex place from $\tau$, so $\prod_v|a|_v=1$ for $a\in K^\times$. For $P\in X(K)$ and a nonzero rational section $s$ of $L$ that is regular and nonzero at $P$, when the product converges, its **anticanonical height** is
$$
H_{-K_X,\bar L}(P):=\left(\prod_v\|s(P)\|_v^{-1}\right)^{1/N}.
$$
The height is attached to the chosen metrics; the formula does not assert a Northcott property or any point-counting asymptotic.

## Definition references

[[def-smooth-fano-variety-over-number-field]]

[[def-global-field]]

[[def-place-of-a-global-field]]

[[def-completion-of-a-global-field-at-a-place]]

[[def-invertible-sheaf]]

[[thm-product-formula-for-number-fields]]

[[def-axiom-of-choice]]

[Emmanuel Peyre, §§3–4](https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf)

[Bjorn Poonen, §2.6.4.3, printed p. 51](https://math.mit.edu/~poonen/papers/Qpoints.pdf)
