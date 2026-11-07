---
id: def-restricted-product-of-local-galois-cohomology-groups
kind: definition
title: "Restricted product of local Galois cohomology groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-finite-galois-module-and-cartier-dual
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-absolute-galois-group-of-a-local-field
  - def-absolute-galois-group-of-a-field
  - def-local-inertia-subgroup-of-absolute-galois-group
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - def-tate-cohomology-for-finite-groups
justified_by: []
axiom_use: >-
  AC and Countable Choice are inherited through the place and completion
  interfaces; DC is inherited through the finite-group Tate-cohomology
  convention. The restricted-product definition itself makes no further
  choices.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter I, §4"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "§4 definition of P_S^r(K,M), printed p. 55, including Tate-modified archimedean groups and unramified subgroups."
    - title: "Kęstutis Česnavičius, Poitou–Tate without restrictions on the order, arXiv:1410.2621v2"
      url: "https://arxiv.org/pdf/1410.2621v2"
      locator: "§1.1 and §§2.1–2.3, arXiv PDF pp. 1–5: restricted local products and unramified subgroups."
verification:
  precheck: n/a
---

## Definition

Assume AC, Countable Choice, and Dependent Choice as required by the place,
completion, and Tate-cohomology interfaces. Let $K$ be a global field, let
$M$ be a finite continuous $G_K$-module, and
fix a finite set $S_0$ of places containing all archimedean places, every place
where the $G_K$-action on $M$ is ramified, and every finite place whose residue
characteristic divides $|M|$. In the function-field case require
$\gcd(|M|,\operatorname{char}K)=1$. Let $S$ be any set of places containing
$S_0$. For each $v\in S$, fix an embedding of $K_s$ into a separable closure
of the completion $K_v$; it determines the local Galois group and localization
maps used below.

For a finite place $v\in S$, put
$H^r(K_v,M)=H^r_{\mathrm{cts}}(G_{K_v},M)$. For an archimedean place put
$H^r(K_v,M)=\widehat H^r(G_{K_v},M)$, using Tate cohomology of the finite
group $G_{K_v}$; in degrees $r=1,2$ this agrees with ordinary cohomology, and
at a complex place all these groups are zero. If $v\in S\setminus S_0$ is
finite, inertia $I_v$ acts trivially on $M$, and the **unramified subgroup**
$H^r_{\mathrm{un}}(K_v,M)$ is the image of inflation
$$H^r(G_{K_v}/I_v,M)\longrightarrow H^r(G_{K_v},M).$$
For $r=0,1,2$, the **restricted product**
$$
P^r_S(K,M):=\prod_{v\in S}' H^r(K_v,M)
$$
is taken relative to these unramified subgroups outside $S_0$, with the
restricted-product topology from the discrete local cohomology groups. If $S$
is finite this is the ordinary finite product. The definition of
$P^r_S(K,M^D)$ uses the same conventions for the Cartier dual.

## Definition references

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

[[def-finite-galois-module-and-cartier-dual]]

[[def-place-of-a-global-field]]

[[def-completion-of-a-global-field-at-a-place]]

[[def-absolute-galois-group-of-a-local-field]]

[[def-local-inertia-subgroup-of-absolute-galois-group]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[def-tate-cohomology-for-finite-groups]]

[J. S. Milne, *Arithmetic Duality Theorems*, Chapter I §4](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Kęstutis Česnavičius, *Poitou–Tate without restrictions on the order*, §1.1 and §2](https://arxiv.org/pdf/1410.2621v2)
