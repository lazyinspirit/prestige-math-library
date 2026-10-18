---
id: lem-ale-jacobi-geometric-conservation-identity
kind: lemma
title: "Jacobi identity for the ALE mesh Jacobian"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-ale-moving-domain-map]
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "J. Donea, A. Huerta, J.-Ph. Ponthot, and A. Rodríguez-Ferran, Arbitrary Lagrangian–Eulerian Methods, Encyclopedia of Computational Mechanics, Vol. 1, Chapter 14 (2004)"
      url: "https://citeseerx.ist.psu.edu/document?doi=0233bb2f3a26e2c7677cf79adc0caea4811d86bf&repid=rep1&type=pdf"
      locator: "§2.2 and §3, mesh maps and the fundamental ALE equation, printed pp. 415–419."
---

## Statement

For the ALE moving-domain map $A_t$ of [[def-ale-moving-domain-map]], let $F(\xi,t):=D_\xi A_t(\xi)$ and $J(\xi,t):=\det F(\xi,t)$. Then

$$\partial_t J(\xi,t)=J(\xi,t)\,\operatorname{div}_x w_m(A_t(\xi),t).$$

This is the continuous geometric conservation identity. It makes no discrete or time-integration claim.

## Facts & Assumptions

**Given:** The $C^2$ orientation-preserving ALE map $A_t$, its Jacobian $J>0$, and mesh velocity $w_m$ as defined in [[def-ale-moving-domain-map]].

[F1] [[def-ale-moving-domain-map]]: $A$ is $C^2$ in space and time, $F=D_\xi A_t$ is invertible, $J=\det F$, and $w_m(A_t(\xi),t)=\partial_tA_t(\xi)$.

## Proof

1.1 Fix $(\xi,t)$ and write $H=\partial_tF(\xi,t)$. Differentiability gives $F(\xi,t+h)=F+hH+o(h)$. Since $F$ is invertible, factor this as $F[I+hF^{-1}H+o(h)]$. The permutation expansion of the determinant gives $\det(I+hK+o(h))=1+h\operatorname{tr}K+o(h)$: the identity permutation contributes $1+h\sum_jK_{jj}+o(h)$, while every nonidentity permutation contains at least two off-diagonal factors of order $h$. Hence $\partial_tJ=J\operatorname{tr}(F^{-1}H)$. [given, F1, algebra]

2.1 Differentiate $w_m(A_t(\xi),t)=\partial_tA_t(\xi)$ in $\xi$. The chain rule and equality of the mixed derivatives of the $C^2$ map give $H=(D_xw_m)(A_t(\xi),t)F$. Therefore $\operatorname{tr}(F^{-1}H)=\operatorname{tr}(F^{-1}(D_xw_m)F)=\operatorname{tr}(D_xw_m)=\operatorname{div}_xw_m$, using cyclic invariance of trace. Substitution into step 1.1 proves the identity. [F1, step 1.1, algebra] ∎
