---
id: op-cft-r5-critical-loop-three-point-functions
kind: open-problem
title: "Exact sphere three-point functions in critical loop CFTs"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: physics
library: physics
deps:
  - def-cft-r5-full-local-cft-data
dependency_roles:
  def-cft-r5-full-local-cft-data: mathematical-premise
physical_scope: "Critical two-dimensional nonintersecting loop scaling models and the source-defined sphere three-point functions of their ell-leg and diagonal primary fields."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jesper Lykke Jacobsen, Rongvoram Nivesvivat, Sylvain Ribault, and Paul Roux, Three-point functions in critical loop models, arXiv:2510.04701v1"
      url: https://arxiv.org/pdf/2510.04701v1
      locator: "§§1.1–1.4, especially eqs. (1.2)–(1.11); §§2.1–2.6 for the transfer-matrix limit; selected §§3–4 cases; §5 for outstanding issues."
    - title: "Jesper Lykke Jacobsen, Rongvoram Nivesvivat, Sylvain Ribault, and Paul Roux, Three-point functions in critical loop models, arXiv:2510.04701v3"
      url: https://arxiv.org/pdf/2510.04701v3
      locator: "§1.1 and eqs. (1.2)–(1.14) for the field domain and normalized formula; §§2.1–2.6 and §§3–4 for lattice comparisons; §5, PDF pp. 27–28, for the remaining general proof question."
    - title: "Morris Ang, Gefei Cai, Jesper Lykke Jacobsen, Rongvoram Nivesvivat, Paul Roux, Xin Sun, and Baojun Wu, Exact solution of three-point functions in critical loop models, arXiv:2604.05503v1"
      url: https://arxiv.org/pdf/2604.05503v1
      locator: "pp. 1–4, eqs. (1)–(4), transfer-matrix calculation, crossing-symmetry discussion, CLE/LQG derivation, and conclusion."
    - title: "Gefei Cai, Haoyu Liu, Baojun Wu, and Zijie Zhuang, Three-point connectivity constant for q-state Potts spin clusters, arXiv:2510.05850v1"
      url: https://arxiv.org/pdf/2510.05850v1
      locator: "§1.1, Theorems 1.2 and 1.5, Conjecture 1.3; §1.2, §3.1, and §4 for the continuum constant and the conditional scaling-limit interpretation."
verification:
  precheck: n/a
  sources_checked:
    date: "2026-10-26"
    scope: "Current source status and partial results for the exact all-allowed-field-range sphere three-point formula."
    by: "Step 1 author"
---

## Open problem

In the source's critical-loop Coulomb-gas convention, let $\beta\in\mathbb C$ satisfy $\operatorname{Re}(\beta^2)>0$, with central charge $c=13-6\beta^2-6\beta^{-2}$ and O(n) loop fugacity $n=-2\cos(\pi\beta^2)$. A sphere primary $V_{(r,s)}$ has weights $(\Delta(r,s),\Delta(r,-s))$, where

$$\Delta(r,s)=\frac14(\beta r-\beta^{-1}s)^2-\frac14(\beta-\beta^{-1})^2.$$

For $r>0$, $r\in\frac12\mathbb Z_{>0}$, and $rs\in\mathbb Z$, the field inserts $2r$ open loop segments and has the source's spin label $rs$. For $r=0$, $s\in\mathbb C$ labels a diagonal field that changes the weight of loops surrounding its insertion to $w=2\cos(\pi s)$. An allowed sphere triple $(r_i,s_i)_{i=1}^3$ has each $r_i=0$ or a positive half-integer, each $r_is_i\in\mathbb Z$, and $r_1+r_2+r_3\in\mathbb Z_{\ge0}$. The source's CLE probabilistic range is the real interval $\frac12<\beta^2<\frac32$; the conjectured formula is stated on the larger parameter domain $\operatorname{Re}(\beta^2)>0$, whose analytic continuation is model-specific and need not be unitary.

Let $\Gamma_\beta$ be the source's Barnes double-Gamma function with its normalization and shift recurrences (eq. (1.11)), and define the proposed reference coefficient by

$$C_{(r_1,s_1)(r_2,s_2)(r_3,s_3)}=\prod_{\epsilon_1,\epsilon_2,\epsilon_3\in\{-1,1\}}\Gamma_\beta^{-1}\!\left(\frac{\beta+\beta^{-1}}{2}+\frac{\beta}{2}\left|\sum_{i=1}^3\epsilon_i r_i\right|+\frac{\beta^{-1}}{2}\sum_{i=1}^3\epsilon_i s_i\right).$$

Write $0=(0,1-\beta^2)$ for the identity field, $C_{123}=C_{(r_1,s_1)(r_2,s_2)(r_3,s_3)}$, and $C_{0ii}=C_{(0,1-\beta^2)(r_i,s_i)(r_i,s_i)}$; $C_{000}$ is the source's partition-function factor. Its normalized candidate is

$$\omega_{123}=C_{123}\sqrt{\frac{C_{000}}{C_{011}C_{022}C_{033}}}.$$

For every allowed triple and parameter in the stated domain, determine whether the critical-limit sphere structure constant equals this candidate, proving the equality or giving a counterexample. The formula covers spinless, nonzero-spin, mixed leg/diagonal, and diagonal fields; known exact subfamilies and model-specific continuum observables below are partial results, not a proof of the universal claim. The source notes that the square-root factor is generally complex and leaves its sign undetermined; a proof must state a consistent source-compatible square-root/sign convention, or a counterexample must respect the source's declared normalization.

## Open problem references

[[def-cft-r5-full-local-cft-data]]

https://arxiv.org/pdf/2510.04701v1

https://arxiv.org/pdf/2510.04701v3 (eqs. (1.10)–(1.14))

https://arxiv.org/pdf/2604.05503v1

https://arxiv.org/pdf/2510.05850v1

## Status

The current 2026-04-01 version of the primary loop paper still calls the all-allowed-triples formula a conjecture and says a proof of the general case would be of interest. Its transfer-matrix calculations use finite cylinders followed by finite-size extrapolation; the paper reports agreement in many cases and identifies degeneracies that can complicate selected limits. This numerical agreement is evidence, not a proof of the continuum identity.

The 2026-04 paper proposes the same formula over its stated $(r_i,s_i)$ domain and combines bootstrap constraints, transfer-matrix calculations, and CLE/Liouville-quantum-gravity arguments. Its conclusion explicitly describes the general formula as supported by evidence. The rigorous probabilistic cases it identifies include three diagonal insertions and three spinless two-leg insertions; the earlier loop paper also records the mixed $V_{(0,s)}V_{(1,0)}V_{(1,0)}$ case. These results leave the remaining nonzero-spin and mixed triples unresolved.

Cai–Liu–Wu–Zhuang prove a continuum three-point connectivity constant for the fuzzy q-state Potts spin-cluster model for $q\in(1,4)$. Their identification with a normalized discrete spin-cluster probability is conditional on their Conjecture 1.3 about the scaling limit. This is a model-specific continuum observable, not a proof of the general $V_{(r,s)}$ structure-constant formula or of every lattice scaling limit.

A focused source search through 2026-10-26 found no proof of the full allowed-field-range assertion. This is an unresolved mathematical/physical model question; it is not a logical supplier and does not assert that every critical loop model satisfies the full-local-data package.
