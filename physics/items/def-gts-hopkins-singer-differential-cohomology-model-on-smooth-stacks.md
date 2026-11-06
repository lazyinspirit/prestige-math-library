---
id: def-gts-hopkins-singer-differential-cohomology-model-on-smooth-stacks
kind: definition
title: Hopkins–Singer differential cohomology model on smooth stacks
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 1
deps:
  - def-gts-smooth-stack-of-g-connections
  - def-singular-cohomology-with-coefficients
justified_by: []
dependency_roles:
  def-gts-smooth-stack-of-g-connections: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Daniel Grady, On the differential K-theory of moduli stacks
      url: https://arxiv.org/pdf/2501.03108v2
      locator: Definition 4.2, homotopy-pullback model for differential cohomology with graded coefficients.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $A$ be a finite-type graded $\mathbb Z$-algebra and $A_{\mathbb C}=A\otimes\mathbb C$, and let $X$ be a smooth stack on the Cartesian site. For each integer $q$, form the degree-shifted full de Rham complex $\Omega^*(-;A_{\mathbb C})[q]$ and its smart heart $Z(\Omega^*(-;A_{\mathbb C})[q])$, whose only nonzero chain group is the sheaf of closed forms of total cohomological degree $q$ in degree zero. The degree-$q$ Hopkins–Singer object is the homotopy pullback of sheaves of spectra
$$\widehat H_A(q)=\Sigma^qH\underline A\mathop\times_{H(\Omega^*(-;A_{\mathbb C})[q])}H Z(\Omega^*(-;A_{\mathbb C})[q]).$$
The first map is induced by the canonical coefficient homomorphism $A\to A_{\mathbb C}$, $a\mapsto a\otimes1$, followed by the inclusion of locally constant $A_{\mathbb C}$-valued forms into the full de Rham complex; the second map is closed-form inclusion. The coefficient homomorphism can kill torsion and is not assumed injective. The pullback projections induce the forgetful map and curvature map. Closed forms are taken before derived global sections; their discrete sheaf has good-cover descent. Set $\widehat H^q(X;A)=\pi_0\mathbf R\Gamma(X;\widehat H_A(q))$. The degree-dependent smart heart is part of the definition: a single unshifted smart-heart pullback is not used to define all degrees by shifting its homotopy groups. The graded product is induced by wedge product and multiplication in $A$, with their shifted graded signs. This is the source's Hopkins–Singer spectrum model and makes no equivalence assertion with differential characters or Freed–Lott cycles.

## Definition references

[[def-gts-smooth-stack-of-g-connections]]

[[def-singular-cohomology-with-coefficients]]

## Remarks

The degree index is included explicitly to retain the source's shift and smart-heart truncation. The definition does not compute curvature kernels or suppress flat classes.
