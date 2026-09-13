---
id: def-generalized-decomposition-numbers
kind: definition
title: Generalized decomposition numbers
status: draft
origin: pipeline
deps: [def-p-section-of-a-p-element, def-splitting-p-modular-system-for-a-finite-group, def-brauer-character-of-a-finite-dimensional-kg-module, thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order, cor-schurs-lemma-for-irreducible-representations, def-decomposition-numbers-and-decomposition-matrix]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Craven, The Brauer Correspondence, Chapter 1 section 1.5, pp. 13–14"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
    - title: "Aschbacher–Kessar–Oliver, Fusion Systems in Algebra and Topology, Part IV after Theorem 5.4, pp. 277–278"
      url: "https://www.math.univ-paris13.fr/~bobol/ako.pdf"
---

## Definition

Fix a splitting $p$-modular system $(K,\mathcal O,k)$ for a finite group
$G$, an ordinary irreducible character $\chi\in\operatorname{Irr}_K(G)$,
and a $p$-element $u\in G$. Put $H=C_G(u)$. By Maschke's theorem the
restricted character has a unique decomposition

$$\operatorname{Res}^G_H\chi =\sum_{\zeta\in\operatorname{Irr}_K(H)}n_{\chi,\zeta}\zeta.$$

The element $u$ is central in $H$. On a simple $KH$-module affording
$\zeta$, its action is therefore an $H$-endomorphism; Schur's lemma and the
splitting-field condition make it a scalar $\lambda_{u,\zeta}\in K^\times$.
For each irreducible Brauer character $\varphi\in\operatorname{IBr}(H)$,
define the **generalized decomposition number**

$$d^u_{\chi,\varphi} :=\sum_{\zeta\in\operatorname{Irr}_K(H)} n_{\chi,\zeta}\lambda_{u,\zeta}d_{\zeta,\varphi},$$

where $d_{\zeta,\varphi}$ is the ordinary decomposition number for $H$ from
[[def-decomposition-numbers-and-decomposition-matrix]].

The sum is finite and defines an element of $K$; unlike an ordinary
decomposition number, it need not be a nonnegative integer. Since $u$ has
$p$-power order, $\lambda_{u,\zeta}^{|u|}=1$. The next theorem identifies
these scalars as the unique coefficients of the character expansion on the
$p$-section defined in [[def-p-section-of-a-p-element]]. Brauer characters and
their value convention are those of
[[def-brauer-character-of-a-finite-dimensional-kg-module]].
