---
id: ex-real-projective-infinity-as-b-z-two
kind: example
title: Real projective infinity as BZ/2
status: published
origin: pipeline
deps: ["lem-finite-join-models-for-circle-and-two-point-groups", "thm-milnor-join-model-is-a-contractible-free-g-space", "cor-classifying-space-of-a-discrete-group-is-a-k-g-one", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Dale Husemoller, Fibre Bundles, Third Edition
      url: https://link.springer.com/book/10.1007/978-1-4757-2261-1
      locator: Chapter 4, Example 11.3, printed pages 55--56
---

## Claim

Assume AC. The antipodal universal double cover identifies

$$ \mathbb{RP}^{\infty}\simeq B(\mathbb Z/2)=K(\mathbb Z/2,1). $$

## Facts & Assumptions

[F1] The join of $N+1$ copies of the two-point space $\mathbb Z/2$ is $S^N$, compatibly with the standard inclusions, and the diagonal action is antipodal ([[lem-finite-join-models-for-circle-and-two-point-groups]]).

[F2] The same finite-join identification induces the antipodal quotient $S^N/(\mathbb Z/2)=\mathbb{RP}^N$ ([[lem-finite-join-models-for-circle-and-two-point-groups]]).

[F3] For a well-pointed topological group of CW type, Milnor's $EG$ is
contractible and its orbit map is a principal bundle
([[thm-milnor-join-model-is-a-contractible-free-g-space]]).

[F4] Assuming AC, the classifying space of a discrete group $G$ has CW type $K(G,1)$ ([[cor-classifying-space-of-a-discrete-group-is-a-k-g-one]]).

[A1] AC is used exactly through [F4] ([[def-axiom-of-choice]]).

## Verification

**Given:** $G=\mathbb Z/2$ with the discrete topology.

1.1 The identifications in [F1, F2] commute with the finite-join inclusions, so Milnor's orbit bundle is [F1, F2]

$$ S^\infty\longrightarrow\mathbb{RP}^{\infty}. $$

It is the antipodal double cover and its quotient is Milnor's $B(\mathbb Z/2)$.
By [F3] its total space is contractible and the map is locally trivial; because
$\mathbb Z/2$ is discrete, each trivialization is an evenly covered
neighborhood. Thus it is the universal double cover. [F1, F2, F3]

2.1 Under [A1], apply [F4]: the base is connected, its fundamental group is $\mathbb Z/2$, and every higher homotopy group vanishes. The assumption is used exactly through that cited corollary. Hence $\mathbb{RP}^{\infty}$ is the displayed Eilenberg--Mac Lane model. $\square$ [F4, A1, step 1.1]
