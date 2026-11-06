---
id: lem-cft-euclidean-pullbacks-preserve-schwartz-space
kind: lemma
title: Euclidean and block-permutation pullbacks preserve Schwartz space
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-schwartz-space-and-its-seminorms
dependency_roles:
  def-schwartz-space-and-its-seminorms: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Definition 11.3, p. 120; Schwartz-space seminorm convention.
category: quantum-field-theory-mathematics
page: cft-euclidean-axioms-and-sewing
reference: items/lem-cft-euclidean-pullbacks-preserve-schwartz-space.md
---

## Statement

For every integer $n\geq1$, every Euclidean isometry $g(x)=Rx+a$ of $\mathbb R^2$, and every permutation $\pi\in\mathfrak S_n$, the pullbacks
$$T_{g,n}f(x_1,\ldots,x_n)=f(g^{-1}x_1,\ldots,g^{-1}x_n),\qquad T_{\pi,n}f(x_1,\ldots,x_n)=f(x_{\pi^{-1}(1)},\ldots,x_{\pi^{-1}(n)})$$
are continuous linear automorphisms of $\mathcal S((\mathbb R^2)^n)$.

## Statement references

[[def-schwartz-space-and-its-seminorms]]

## Facts & Assumptions

**Given:** $n\geq1$, $g(x)=Rx+a$ with $R\in O(2)$ and $a\in\mathbb R^2$, a permutation $\pi\in\mathfrak S_n$, and $f\in\mathcal S((\mathbb R^2)^n)$.

[F1] The Schwartz space is defined by the seminorms $p_{\alpha\beta}(f)=\sup_x|x^\alpha\partial^\beta f(x)|$ for all multi-indices $\alpha,\beta$ ([[def-schwartz-space-and-its-seminorms]]).

[A1] The pullbacks use the block-diagonal affine map $(x_1,\ldots,x_n)\mapsto(g^{-1}x_1,\ldots,g^{-1}x_n)$ and the linear block permutation $(x_1,\ldots,x_n)\mapsto(x_{\pi^{-1}(1)},\ldots,x_{\pi^{-1}(n)})$.

## Proof

1.1 In dimension $2n$, each pullback is $f\circ L$ for an affine map $L(x)=Ax+b$ whose linear part $A$ is invertible. By the chain rule, every derivative $\partial^\beta(f\circ L)$ is a finite linear combination of $(\partial^\gamma f)\circ L$. Since $x=A^{-1}(y-b)$, each monomial $x^\alpha$ is a finite linear combination of monomials $y^\delta$ with $y=L(x)$. Therefore each seminorm $p_{\alpha\beta}(f\circ L)$ is bounded by a finite linear combination of seminorms $p_{\delta\gamma}(f)$ from [F1]. This proves that the pullback maps Schwartz space to itself and is continuous in the stated seminorm topology. [given, F1, A1, algebra]

2.1 The inverse pullbacks are $T_{g^{-1},n}$ and $T_{\pi^{-1},n}$, respectively; direct substitution gives $T_{g,n}T_{g^{-1},n}=T_{g^{-1},n}T_{g,n}=\mathrm{id}$ and the same identities for $\pi$. Hence both maps are linear automorphisms. [given, A1, step 1.1, algebra] ∎
