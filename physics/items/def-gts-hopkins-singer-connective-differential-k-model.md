---
id: def-gts-hopkins-singer-connective-differential-k-model
kind: definition
title: Hopkins–Singer connective differential K-model on smooth stacks
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 1
deps:
  - def-gts-smooth-stack-of-g-connections
  - def-gts-connective-complex-k-theory
  - thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory
justified_by: []
dependency_roles:
  def-gts-smooth-stack-of-g-connections: mathematical-premise
  def-gts-connective-complex-k-theory: mathematical-premise
  thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Daniel Grady, On the differential K-theory of moduli stacks
      url: https://arxiv.org/pdf/2501.03108v2
      locator: Definition 5.5, Lemma 5.4 and the homotopy-pullback model of connective differential K-theory.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $k$ be the connective cover of $KU$ and let $c:k\to H\mathbb C[u]$ be the fixed complexified Chern character, with the source grading. For each integer $q$, define the Hopkins–Singer degree-$q$ object as the homotopy pullback of sheaves of spectra
$$\widehat k(q)=\Sigma^qk\mathop\times_{H(\Omega^*(-;\mathbb C[u])[q])}H Z(\Omega^*(-;\mathbb C[u])[q]),$$
where $Z$ is the smart heart: its only nonzero group is the sheaf of closed total-degree-$q$ forms in chain degree zero. The bottom map is the shifted Chern character followed by the locally constant inclusion, and the other map includes closed forms. The pullback projections induce the forgetful map and curvature map. Closed forms are taken before derived global sections; their discrete sheaf has good-cover descent. Define $\widehat k^q(X)=\pi_0\mathbf R\Gamma(X;\widehat k(q))$. These degree-dependent truncations, together with the product induced by the coefficient ring and wedge multiplication, are the source's graded Hopkins–Singer connective model. Taking all degrees from one unshifted smart-heart pullback is not this convention. No equivalence with Freed–Lott cycle groups is included.

## Definition references

[[def-gts-smooth-stack-of-g-connections]]

[[def-gts-connective-complex-k-theory]]

[[thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory]]

## Remarks

The degree index is included explicitly to retain the source's shift and smart-heart truncation. The definition does not compute curvature kernels or suppress flat classes.
