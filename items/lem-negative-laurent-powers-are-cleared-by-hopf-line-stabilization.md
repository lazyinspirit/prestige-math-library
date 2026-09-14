---
id: lem-negative-laurent-powers-are-cleared-by-hopf-line-stabilization
kind: lemma
title: Negative Laurent powers are cleared by Hopf-line stabilization
status: draft
origin: pipeline
deps: [lem-uniform-laurent-approximation-through-bundle-automorphisms, def-clutching-construction-for-bundles-over-a-suspension, def-external-product-in-complex-k-theory, thm-hopf-line-calculation-of-k-zero-of-the-two-sphere, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, proof of Theorem 2.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Clearing negative Laurent powers, printed p.44"
---

## Statement

Assume AC. If

$$f(z)=\sum_{j=-r}^{s}a_jz^j$$

is Laurent-polynomial clutching data for a bundle $E$ over $X\times S^2$,
then $z^rf(z)$ is polynomial. In the fixed clutching convention this
multiplication tensors the glued bundle by
$\operatorname{pr}_{S^2}^*\gamma^r$. The original $K$-class is recovered by
multiplying by the inverse unit $[\gamma]^{-r}$.

## Facts & Assumptions

**Given:** AC, $r,s\geq0$, and normalized Laurent clutching data $f$ supplied
by [[lem-uniform-laurent-approximation-through-bundle-automorphisms]].

[F1] Under the fixed convention, transition maps multiply under tensor product
([[def-clutching-construction-for-bundles-over-a-suspension]]).

[F2] The external product pulls the Hopf line from $S^2$ to $X\times S^2$
([[def-external-product-in-complex-k-theory]]).

[F3] For $\beta=[\gamma]-1$, one has $\beta^2=0$ and hence
$[\gamma]^{-1}=1-\beta$
([[thm-hopf-line-calculation-of-k-zero-of-the-two-sphere]]).

[A1] AC is inherited from [F2] for the reduced product convention and from
[F3]; the exponent-clearing calculation itself is finite algebra.

## Proof

**Proof technique:** direct.

1.1 Multiplication gives $z^rf(z)=\sum_{j=-r}^{s}a_jz^{j+r}$, whose exponents range from $0$ to $r+s$. On $|z|=1$ the scalar $z^r$ is nonzero, so $z^rf(z)$ remains an automorphism. [algebra]

2.1 The line $\gamma^r$ has transition $z^r$. By [F1] and [F2], tensoring the bundle $[E,f]$ with $\operatorname{pr}_{S^2}^*\gamma^r$ multiplies its transition by $z^r$. Therefore $[E,z^rf]=[E,f]\,[\gamma]^r$ in $K^0(X\times S^2)$. [F1, F2, A1, step 1.1]

3.1 By [F3], $[\gamma]$ is a unit with $[\gamma]^{-r}=(1-\beta)^r=1-r\beta$. Multiplying the equality in step 2.1 by this unit gives $[E,f]=[E,z^rf]\,[\gamma]^{-r}$, so clearing the negative powers loses no class information. This includes $r=0$, when no change occurs. [F3, A1, step 2.1, algebra] ∎
