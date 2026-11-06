---
id: def-gts-classical-dm-stack-cotangent-complex
kind: definition
title: Classical Deligne–Mumford stack and cotangent complex
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
  - def-cotangent-complex-of-a-scheme-morphism
dependency_roles:
  def-cotangent-complex-of-a-scheme-morphism: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Behrend and Fantechi, The Intrinsic Normal Cone"
      url: "https://arxiv.org/pdf/alg-geom/9601010v1"
      locator: "§§2–3, especially the étale-site cotangent complex, Definition 3.6 and the local-embedding construction of the intrinsic normal sheaf and cone."
    - title: "The Stacks Project, The Cotangent Complex, Chapter 92"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Definitions 92.18.2 and 92.24.1 for the scheme cotangent complex and its étale-local comparison used on an atlas."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $k$ be a field. A classical Deligne–Mumford stack $X$ over $k$ is an algebraic stack with representable unramified diagonal and a surjective étale atlas $u:U\to X$ from a scheme. Its atlas groupoid is $R=U\times_X U\rightrightarrows U$, with source and target maps $s,t:R\to U$. The **cotangent complex** $L_{X/k}$ is the quasi-coherent complex on the étale site of $X$ whose pullback to each scheme atlas $U$ is the scheme cotangent complex $L_{U/k}$. The scheme cotangent complex is the sheaf-ring complex whose restriction to an affine chart $\operatorname{Spec}B\subseteq U$ is $L_{B/k}$, representing derived $k$-derivations. Atlas descent data are induced by the canonical comparison along the two étale maps $s,t$. Indeed $L_{R/U}=0$ for an étale morphism, so transitivity identifies $s^*L_{U/k}\simeq L_{R/k}\simeq t^*L_{U/k}$; the groupoid identities give the cocycle condition. Étale descent then glues these local complexes, independently of the chosen atlas.

This convention is the cotangent complex used in the Behrend–Fantechi obstruction theory for classical Deligne–Mumford stacks. The definition does not assert a particular amplitude or perfectness; those are separate hypotheses on a map $E^\bullet\to L_{X/k}$.

## Definition references

[[def-cotangent-complex-of-a-scheme-morphism]]
