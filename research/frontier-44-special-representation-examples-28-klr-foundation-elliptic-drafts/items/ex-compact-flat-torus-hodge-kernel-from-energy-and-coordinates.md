---
id: ex-compact-flat-torus-hodge-kernel-from-energy-and-coordinates
kind: example
title: "Flat torus harmonic forms are constant-coefficient forms"
status: draft
origin: session
deps: [def-axiom-of-choice, thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Assume the Axiom of Choice and $n\ge2$. On $T^n=\mathbb R^n/\mathbb Z^n$ with its flat metric, the forms $dx^{i_1}\wedge\cdots\wedge dx^{i_k}$, $i_1<\cdots<i_k$, form a basis of $\mathcal H^k$. Every real de Rham class therefore has a unique constant-coefficient representative, and $\dim H^k_{\mathrm{dR}}(T^n)=\binom nk$.

## Facts & Assumptions

**Given:** full AC, $n\ge2$, the flat torus and its global coframe $dx^1,\ldots,dx^n$.

[F1] The compact Hodge theorem supplies a unique harmonic representative of each de Rham class ([[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]]).

## Verification

1.1 Write a smooth form uniquely as $u=\sum_Iu_I dx^I$ with periodic smooth coefficients on $\mathbb R^n$. The constant metric gives $d=\sum_j\varepsilon(dx^j)\partial_j$ and $d^*=-\sum_j\iota(\partial_j)\partial_j$. The wedge/contraction anticommutator from [F1] cancels the mixed terms, giving $\Delta u=-\sum_I\sum_j\partial_j^2u_I dx^I$. Integration over the unit cube, with opposite-face terms canceled by periodicity, yields $(\Delta u,u)_2=\sum_{I,j}\int_{[0,1]^n}|\partial_j u_I|^2$. [F1, given, algebra]

2.1 If $u$ is harmonic, the sum of nonnegative integrals in step 1.1 is zero. Each derivative is continuous, so a nonzero value would give a neighbourhood with positive integral; hence every $\partial_j u_I$ vanishes everywhere. Integration along line segments in $\mathbb R^n$ gives constant coefficients. Conversely constant coefficients give $\Delta u=0$ by step 1.1. The increasing wedge basis has $\binom nk$ members, and [F1] identifies this harmonic space with de Rham cohomology, proving the asserted representative and dimension claims. [F1, step 1.1, algebra] ∎
