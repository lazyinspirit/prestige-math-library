---
id: ex-cft-resonant-trivial-voa-return-pairing
kind: example
title: Top returns for the trivial VOA
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
deps:
  - lem-cft-resonant-universal-top-jacobi-realization
  - def-cft-resonant-induced-top-return-data
dependency_roles:
  lem-cft-resonant-universal-top-jacobi-realization: mathematical-premise
  def-cft-resonant-induced-top-return-data: mathematical-premise
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: voa-resonant-induction-and-projective-socles-examples
physical_scope: Pure mathematics; no physical premises or physical claim.
axiom_base: ZF
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
verification:
  precheck: pending
---

## Statement

For the one-dimensional trivial VOA $V=\mathbb C\mathbf1$ with conformal vector $\omega=0$, the Zhu algebra is $A(V)=\mathbb C$, and for every unital left $A(V)$-module $U$, its universal induced module is $M(U)=U$ in degree zero. All positive grades vanish, so there are no positive resonances. The degree-zero return pairing is ordinary evaluation and every simple projective cover in finite-dimensional $A(V)$-modules is the identity up to isomorphism.

## Statement references

[[lem-cft-resonant-universal-top-jacobi-realization]]

[[def-cft-resonant-induced-top-return-data]]

## Facts & Assumptions

**Given:** $V=\mathbb C\mathbf1$ with $T=0$, $\omega=0$, and $Y(c\mathbf1,z)(d\mathbf1)=cd\mathbf1$.

[F1] [[lem-cft-resonant-universal-top-jacobi-realization]] identifies the universal induced module's degree-zero space with $U$ and gives its mode action. [[def-cft-resonant-induced-top-return-data]] defines the all-word top-return evaluation.

## Proof

1.1 The only nonzero state is a scalar multiple of $\mathbf1$, and $Y(\mathbf1,z)=\mathrm{id}$ has only the mode $\mathbf1_{(-1)}=\mathrm{id}$; all other modes are zero. The Zhu circle sum for $\mathbf1$, of weight zero, is $\mathbf1_{(-2)}b=0$, so $O(V)=0$, $A(V)=\mathbb C\mathbf1\cong\mathbb C$, and the star product is scalar multiplication. The current-mode relations impose only the identity action of $\mathbf1_{(-1)}$ and zero for every other mode. Thus the generated module has no positive-degree word, and the universal quotient is exactly $M(U)(0)=U$, $M(U)(n)=0$ for $n>0$. [F1, given, algebra]

1.2 A word of total degree zero acts as the identity or zero, so for $u\in U$, $w\in\mathcal W_0$, and $\lambda\in U^*$, $\beta_0(u,w,\lambda)$ is either $\lambda(u)$ or $0$; the empty word gives $\lambda(u)$. For $n>0$, $M(U)(n)=0$, hence every return pairing is vacuous and there is no resonant singular grade. In finite-dimensional $\mathbb C$-modules every short exact sequence splits by choosing a vector-space complement; every simple is one-dimensional and projective. A projective cover of a simple has superfluous kernel, so its simple summand mapping onto the quotient is the entire source and the cover is an isomorphism. [F1, step 1.1, algebra] ∎
