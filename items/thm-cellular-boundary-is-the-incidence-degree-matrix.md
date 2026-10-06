---
id: thm-cellular-boundary-is-the-incidence-degree-matrix
kind: theorem
title: Cellular boundary is the incidence degree matrix
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cellular-boundary-from-three-consecutive-skeleta, def-incidence-number-of-two-cw-cells, def-oriented-cellular-chain-group]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Section 2.2
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

Let $X$ be a CW complex. For $n\geq1$, in the integral cellular chain groups with the chosen cell orientations,
$$d_ne^n_\alpha=\sum_\beta[e^n_\alpha:e^{n-1}_\beta]e^{n-1}_\beta.$$

## Facts & Assumptions

**Given:** A CW complex $X$, integral cellular chains, and the chosen cell orientations; the differential is as in [[def-cellular-boundary-from-three-consecutive-skeleta]].

## Proof

**Proof technique:** direct.

1.1 Project the three-skeleton connecting map defining $d_n$ to the summand of a fixed $(n-1)$-cell. [given]

2.1 For $n\ge2$, first pass from $X^{n-1}$ to $X^{n-1}/X^{n-2}$ as required by the relative target of the cellular boundary, and then collapse all summand spheres except that of $e^{n-1}_\beta$. Equivalently, collapse the entire complement $X^{n-1}\setminus e^{n-1}_\beta$, including $X^{n-2}$. Naturality of the connecting homomorphism for the characteristic disk identifies the coefficient with the composite from its oriented boundary sphere to this quotient sphere. This is precisely the reduced-homology endomorphism in [[def-incidence-number-of-two-cw-cells]], so its degree is $[e^n_\alpha:e^{n-1}_\beta]$. [step 1.1]

3.1 For $n=1$, use a characteristic interval compatible with the chosen edge generator. Its connecting homomorphism is the singular boundary $[v_+]-[v_-]$. For each chosen vertex generator $e_v=\varepsilon_v[v]$, the identity $[v]=\varepsilon_v e_v$ gives coefficient $\varepsilon_v(\mathbf1_{\{v_+=v\}}-\mathbf1_{\{v_-=v\}})$, exactly the incidence number of [[def-incidence-number-of-two-cw-cells]]. This includes negatively chosen zero-cell generators and gives zero when both endpoints coincide.  The boundary is an element of a direct sum, so only finitely many coefficients are nonzero; equality of all its projections therefore proves the formula for every $n\geq1$; separately, $d_0=0$ by definition. [step 1.1, step 2.1] ∎
