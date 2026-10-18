---
id: thm-pe18-planar-impedance-reflection-coefficient
kind: theorem
title: Exact plane-wave reflection coefficient of the local impedance condition
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-pe18-local-impedance-absorbing-boundary]
justified_by: []
proof_strategy: direct
axiom_use: "No axiom is used; this is an exact substitution for one homogeneous plane-wave mode."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Galkowski, Lafontaine, and Spence, Local absorbing boundary conditions on fixed domains give order-one errors for high-frequency waves"
      url: "https://arxiv.org/pdf/2101.02154"
    - title: "Steven G. Johnson, Notes on Perfectly Matched Layers (PMLs), §2"
      url: "https://arxiv.org/pdf/2108.05348"
---

## Statement

For $0<q\le k$ and tangential wavevector $\eta\in\mathbb R^2$ satisfying $q^2+|\eta|^2=k^2$, consider
$$u(x,y)=e^{i\eta\cdot y}\left(e^{iq(x-R)}+\mathcal R e^{-iq(x-R)}\right).$$
The impedance condition [[def-pe18-local-impedance-absorbing-boundary]] gives
$$\mathcal R=\frac{q-k}{q+k},\qquad |\mathcal R|=\frac{k-q}{k+q}.$$
Thus reflection is zero at normal incidence $q=k$ and its magnitude tends to one as $q\downarrow0$ (grazing incidence).

## Facts & Assumptions

**Given:** A homogeneous propagating mode with $0<q\le k$ and the boundary convention in [F1].

[F1] [[def-pe18-local-impedance-absorbing-boundary]]: on $x=R$ impose $\partial_xu-iku=0$ with outward normal $+e_x$.

## Proof

**Given:** The mode and condition in [F1].

1.1 At $x=R$, the bracket in the definition of $u$ is $1+\mathcal R$ and its $x$ derivative is $iq(1-\mathcal R)$. Substitution into [F1], after cancelling the nonzero tangential exponential, gives $q(1-\mathcal R)-k(1+\mathcal R)=0$. [given, F1, algebra]

2.1 Since $q+k>0$, solving the equation in step 1.1 gives $\mathcal R=(q-k)/(q+k)$. The numerator is nonpositive for $q\le k$, so $|\mathcal R|=(k-q)/(k+q)$; this is zero at $q=k$ and tends to $1$ as $q\downarrow0$. [step 1.1, algebra] ∎
