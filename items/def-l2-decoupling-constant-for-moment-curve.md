---
id: def-l2-decoupling-constant-for-moment-curve
kind: definition
title: L2 Decoupling Constants for the Moment Curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
- def-polynomial-decoupling-weight-and-norm
- def-moment-curve-extension-operator
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: §1, pp. 634–637, Theorem 1.2 and notation for weighted moment-curve decoupling;
      §7, pp. 649–653, linear and multilinear decoupling constants.
  - title: Shaoming Guo, Zane Kun Li, Po-Lam Yung, and Pavel Zorin-Kranich, A short
      proof of ℓ² decoupling for the moment curve
    url: https://arxiv.org/pdf/1912.09798
    locator: §1, pp. 1–2, the critical exponent p_n=n(n+1), dyadic parameter partition,
      and the frequency-supported decoupling constant.
---

## Definition

Fix an integer $d\ge2$, $0<\delta\le1$, and $E\ge100d$. Let $\mathcal P_\delta$ be the finite partition of $[0,1]$ into intervals $J_j=[j\delta,\min((j+1)\delta,1)]$ for $0\le j<\lceil\delta^{-1}\rceil$, with endpoint overlaps ignored in Lebesgue integrals. For $p\ge2$, define the **linear decoupling constant** $D_{p,d}(\delta,E)$ as the infimum of the $C\ge0$ such that, for every $g\in L^1([0,1])$ and every ball $B\subset\mathbb R^d$ of radius $\delta^{-d}$,
$$\|E^{(d)}g\|_{L^p(w_{B,E})}\le C\left(\sum_{J\in\mathcal P_\delta}\|E_J^{(d)}g\|_{L^p(w_{B,E})}^2\right)^{1/2}.$$
For integers $n\ge2$ and $K\ge2n!$, real $E\ge100n$, real $p\ge2$, and $0<\delta\le1$, set $M_n=n!$ and define the **multilinear decoupling constant** $M_{p,n}(\delta,K,E)$ as the infimum of the $C\ge0$ such that for every $g\in L^1([0,1])$, every ball $B\subset\mathbb R^n$ of radius $\delta^{-n}$, and every $M_n$ intervals $I_1,\ldots,I_{M_n}$ of length $K^{-1}$ with pairwise distance at least $K^{-1}$,
$$\left\|\left(\prod_{i=1}^{M_n}|E_{I_i}^{(n)}g|\right)^{1/M_n}\right\|_{L^p(w_{B,E})}\le C\prod_{i=1}^{M_n}\left(\sum_{J\in\mathcal P_\delta(I_i)}\|E_J^{(n)}g\|_{L^p(w_{B,E})}^2\right)^{1/(2M_n)},$$
where $\mathcal P_\delta(I_i)$ is the canonical consecutive step-$\delta$ partition of $I_i$ starting at its left endpoint, with at most one final shorter interval. The infimum of the empty set is $+\infty$.

## Definition references

[[def-moment-curve-extension-operator]]

[[def-polynomial-decoupling-weight-and-norm]]
