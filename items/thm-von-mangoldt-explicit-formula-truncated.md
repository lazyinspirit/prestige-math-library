---
id: thm-von-mangoldt-explicit-formula-truncated
kind: theorem
title: "The truncated von Mangoldt explicit formula"
status: published
origin: pipeline
deps: [def-half-weighted-chebyshev-psi, thm-truncated-perron-formula, cor-zeta-zero-count-unit-interval, lem-local-logarithmic-derivative-zeta, lem-logarithmic-derivative-zeta-left-half-plane, lem-von-mangoldt-explicit-formula-residues]
proof_strategy: contour
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, Theorem 10.1"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Statement

For $x,T\ge2$,
$$\psi_0(x)-x=-\sum_{|\Im\rho|<T}\frac{x^\rho}{\rho}-\frac{\zeta'(0)}{\zeta(0)}-\frac12\log(1-x^{-2})+O\!\left(\frac{x\log^2(xT)}T+(\log x)\min\{1,\frac{x}{T\langle x\rangle}\}\right),$$
where $\langle x\rangle$ is the distance to the nearest prime power other than
possibly $x$.  The zero sum is finite and counts multiplicities.

## Proof

**Given:** $x,T\ge2$.

1.1 Apply truncated Perron inversion to $-\zeta'/\zeta$.  Its kernel error is bounded by separating the nearest other prime power from the remaining terms, giving the stated Perron error. [given, algebra]

2.1 In a finite rational grid within bounded distance of $T$, the unit-interval zero bound leaves a height at distance $\gg1/\log T$ from every zero ordinate.  Shift at that height using the two logarithmic-derivative bounds and the residue ledger; changing back to $T$ affects only $O(\log T)$ finite zero terms and is absorbed in the displayed error. [step 1.1, construct] ∎
