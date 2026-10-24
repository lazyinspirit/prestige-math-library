---
id: ex-the-standard-seven-sphere-as-a-quaternionic-hopf-sphere-bundle
kind: example
title: "The standard seven-sphere as the $(1,0)$ quaternionic Hopf sphere bundle"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-milnor-sphere-bundle-m-h-j, lem-euler-and-first-pontryagin-classes-of-xi-h-j, lem-relative-pontryagin-number-of-the-milnor-disk-bundle-is-controlled-by-h-minus-j, lem-disk-bundle-intersection-form-and-signature-for-xi-h-j, def-axiom-of-choice, thm-milnor-lambda-invariant-is-well-defined-modulo-seven]
justified_by: []
aliases: []
landmark: false
dependency_level: 9
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed p. 403, the choice (h,j) = (1,0) gives the standard sphere"
    - title: "Allen Hatcher, Algebraic Topology, Example 4.46, printed p. 378"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "the quaternionic Hopf bundle S^3 -> S^{4n+3} -> HP^n and H^*(HP^n;Z) = Z[x]/(x^{n+1})"
---

## Example

Assume the Axiom of Choice. The $(1,0)$ Milnor sphere bundle is diffeomorphic to the standard $S^7$, and its disk filling has $q=4$, $\sigma=1$ and $\lambda=0\pmod7$.

## Facts & Assumptions

[F1] The quaternionic clutching is upper-to-lower $(a,v)_+\sim(a,av)_-$ for $(h,j)=(1,0)$ ([[def-milnor-sphere-bundle-m-h-j]]).

[F2] The local class and filling computations give $e=u$, $p_1=2u$, $q=4$ and $\sigma=1$ ([[lem-euler-and-first-pontryagin-classes-of-xi-h-j]], [[lem-relative-pontryagin-number-of-the-milnor-disk-bundle-is-controlled-by-h-minus-j]], [[lem-disk-bundle-intersection-form-and-signature-for-xi-h-j]]).

[F3] The filling-independent invariant is $\lambda=2q-\sigma\pmod7$ ([[thm-milnor-lambda-invariant-is-well-defined-modulo-seven]]).

## Verification

**Given:** AC and the sphere $S^7=\{(q_0,q_1)\in\mathbb H^2:|q_0|^2+|q_1|^2=1\}$, with the projection onto right quaternionic lines.

1.1 On the base chart $q_0\ne0$, put $z=q_1q_0^{-1}$ and write $(q_0,q_1)=(1,z)\lambda/\sqrt{1+|z|^2}$, with unit $\lambda=q_0/|q_0|$. On $q_1\ne0$, put $w=q_0q_1^{-1}=z^{-1}$ and write $(q_0,q_1)=(w,1)\lambda'/\sqrt{1+|w|^2}$, with $\lambda'=q_1/|q_1|$. These formulas and their inverses are smooth. The base is the one-point compactification of $\mathbb H$; replacing the second coordinate $w$ by $\bar w$ gives the usual stereographic transition $z\mapsto z/|z|^2$, hence its smooth structure is that of $S^4$. On the equator $|z|=1$ set $a=z$; the fibre transition is $\lambda'=a\lambda$, since quaternionic multiplication has the displayed order. Thus the two hemisphere product charts of $S^7$ glue by precisely [F1], giving $M_{1,0}\cong S^7$. [F1, given, construct]

2.1 By [F2], $q(W_{1,0})=4$ and $\sigma(W_{1,0})=1$. Therefore [F3] gives $\lambda(M_{1,0})=2\cdot4-1=7\equiv0\pmod7$, agreeing with the standard sphere's disk filling. [step 1.1, F2, F3, algebra] ∎
