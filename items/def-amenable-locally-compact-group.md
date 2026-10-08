---
id: def-amenable-locally-compact-group
kind: definition
title: Amenable locally compact group
status: published
origin: pipeline
dependency_level: 2
deps:
  - def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group
axiom_use: No choice principle is used.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G, §G.1, Definition G.1.4 and Remark G.1.6 (printed pp. 448–449); G.1.4 defines amenability using an invariant mean on UCB(G)"
    - title: "Matthew Daws and Volker Runde, Reiter's properties (P1) and (P2) for locally compact quantum groups, arXiv:0705.3432v5"
      url: "https://arxiv.org/pdf/0705.3432v5"
      locator: "Introduction, printed p. 1: amenability of a locally compact group defined by a left-invariant state on complex L-infinity(G)"
---

## Definition

A locally compact Hausdorff group $G$ is **amenable** if there exists a
left-invariant mean $m$ on $L^\infty(G)$, using the fixed left Haar measure
and the translation action from
[[def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group]]. Thus
$m$ is a positive complex-linear functional with $m(1_G)=1$ and
$m(L_gf)=m(f)$ for every $g\in G$ and $f\in L^\infty(G)$.

This definition imposes no countability, discreteness, compactness, or
unimodularity assumption. It does not depend on the normalization of Haar
measure: replacing $\mu$ by $c\mu$ for $c>0$ preserves exactly the same null
sets, so it gives the same almost-everywhere classes and essential-supremum
norm on $L^\infty(G)$. The mean and its left-invariance condition are therefore
unchanged.
