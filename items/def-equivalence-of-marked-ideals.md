---
id: "def-equivalence-of-marked-ideals"
kind: "definition"
title: "Equivalence of marked ideals"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 4
deps:
  - "def-marked-ideal"
  - "def-multiple-test-blowup-and-controlled-transform"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Definition

Two marked ideals $(\mathcal I,E_{\mathcal I},\mu_{\mathcal I})$ and $(\mathcal J,E_{\mathcal J},\mu_{\mathcal J})$ on the same smooth $K$-scheme $X$ are equivalent,
$$(\mathcal I,E_{\mathcal I},\mu_{\mathcal I})\simeq(\mathcal J,E_{\mathcal J},\mu_{\mathcal J}),$$
if: (1) $E_{\mathcal I}=E_{\mathcal J}$ as ordered families of divisors; (2) their supports agree; and (3) the multiple test blow-ups of the one are exactly the multiple test blow-ups of the other, and for every such blow-up $(X_i)$ the induced supports agree, $\operatorname{supp}(\mathcal I_i,E_i,\mu_{\mathcal I})=\operatorname{supp}(\mathcal J_i,E_i,\mu_{\mathcal J})$ for every $i$ ([[def-multiple-test-blowup-and-controlled-transform]]).
The relation is reflexive, symmetric and transitive by definition, and the algorithm below replaces a marked ideal by equivalent ones at the steps marked in the source.
