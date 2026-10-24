---
id: lem-homotopy-cardinality-base-change
kind: lemma
title: "Homotopy-cardinality pushforward satisfies base change"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-locally-finite-homotopy-type
  - def-homotopy-fiber-of-a-map
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §2, Lemma 2.6"
      url: "https://arxiv.org/pdf/math/0501343v4"
---

## Statement

Let a homotopy-cartesian square of locally finite homotopy types be given, with its lower map $u$ proper on components. Then the upper map $u'$ is proper on components and $u^*\circ f_!=(f')_!\circ(u')^*$ on finite-support functions. The square's maps are displayed after the proof.

## Facts & Assumptions

**Given:** The homotopy-cartesian square in the statement and $\alpha\in\mathbb Q_c(X)$.

[F1] For a map $g$ of locally finite homotopy types, $g_!(\alpha)$ is the finite sum over components of its homotopy fibers weighted by $\prod_{i>0}|\pi_i|^{(-1)^i}$; a proper map also has the pullback $g^*$ ([[def-locally-finite-homotopy-type]]).

## Proof

1.1 Fix a component $x\in\pi_0(X)$ and put $y=f(x)$. The homotopy fiber of $u'$ over $x$ is the pullback of the homotopy fiber of $u$ over $y$, hence is equivalent to it by the homotopy-cartesian condition. Since $u$ is proper, this fiber has finitely many components; therefore $u'$ is proper on components. [F1, given]

2.1 Fix $y'\in\pi_0(Y')$ and put $y=u(y')$. The homotopy fiber of $f'$ over $y'$ is equivalent to the homotopy fiber of $f$ over $y$, with its map to $X$ equal to the composite of the fiber map to $X'$ and $u'$. Thus the summands, their higher homotopy groups, and the values of $\alpha$ pulled back along $u'$ agree term by term. Both sides evaluated at $y'$ are the same finite sum from [F1]. [F1, given, step 1.1] ∎
## Diagram

```tikzcd
X' \arrow[r,"u'"] \arrow[d,"f'"'] & X \arrow[d,"f"] \\
Y' \arrow[r,"u"'] & Y
```

The square is homotopy cartesian. The lower map $u$ is proper by hypothesis and the pullback map $u'$ is proper by step 1.1; the equation is the corresponding homotopy-cardinality base-change identity.
