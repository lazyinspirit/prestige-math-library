---
id: def-vanishing-cycle-of-a-codimension-one-foliation
kind: definition
title: "Vanishing cycles of a codimension-one foliation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-leaf-of-a-regular-foliation, def-based-loops-and-fundamental-group, def-simply-connected, def-map-transverse-to-a-regular-foliation, def-smooth-manifold, def-limit-cycle-of-a-leaf-of-a-codimension-one-foliation, def-limitwise-nullhomotopy-subgroup-of-a-leaf, def-countable-choice-principle-for-foliation-pair, lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity]
justified_by: []
aliases: []
landmark: false
dependency_level: 10
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov\u2019s Theorem (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)"
      url: "https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf"
      locator: "\u00a73.2.2, printed p. 49 (Definition 3.3)"
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a73, printed pp. 9\u201310 (limitwise homotopy and $\\Pi^j_1$)"
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a $C^2$ transversely oriented
codimension-one regular foliation. A **vanishing cycle** supported on a leaf $L_1$ is a
jointly $C^2$ family of loops $\sigma_t:S^1\to M$, $t\in[0,1]$, such that: (i) each
$\sigma_t$ lies in one leaf $L_t$ of $F$; (ii) $[\sigma_1]$ is nonzero in $\pi_1(L_1)$;
(iii) $\sigma_t$ is null-homotopic in $L_t$ for every $t<1$; and (iv) for each
$\theta\in S^1$, $t\mapsto\sigma_t(\theta)$ is transverse to $F$. The nearby loops in (iii) have trivial holonomy because they are null-homotopic. Closure of this transverse family makes the supporting loop's holonomy the identity on the side approached by the family: its return map fixes every sufficiently close parameter on that side. Thus the supported loop is a nonlimit cycle on the approached side; its opposite-side holonomy may be nonidentity. The supported class instead determines a
nonzero element of the distinct subgroup $\Pi^j_1(L_1)$ on the side approached by the
family, as proved in [[lem-a-vanishing-cycle-determines-a-nontrivial-limitwise-nullhomotopy-class]]. Here jointly $C^2$ means the trace map $S^1\times[0,1]\to M$ is
$C^2$, with one-sided derivatives at the parameter endpoints; transversality requires
its parameter derivative to have nonzero normal component. Smooth foliation data with a
smooth trace are included as a special case.
