---
id: "prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic"
kind: "proposition"
title: "A complex is zero in the derived category exactly when it is acyclic"
deps: ["prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms", "prop-cohomology-factors-through-the-derived-category"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05RR"
      title: "13.11.1–13.11.6"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

A complex $X$ becomes a zero object in $D(\mathcal A)$ if and only if $H^n(X)=0$ for every integer $n$.

## Facts & Assumptions

**Given:** A complex $X$ becomes a zero object in $D(\mathcal A)$ if and only if $H^n(X)=0$ for every integer $n$.

[F1] Every quasi-isomorphism becomes invertible in the derived category ([[prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms]]).

[F2] Cohomology factors through the derived category ([[prop-cohomology-factors-through-the-derived-category]]).

## Proof

1.1 First $Q(0)$ is a zero object: a roof $X\leftarrow U\to0$ represents the ordinary zero map, because its numerator is the composite $U\to X\to0$; dually a right roof out of $0$ is zero. Hence both Hom sets involving $Q(0)$ are singletons. If $X$ is acyclic, $X\to0$ is a quasi-isomorphism, so $Q(X)\cong Q(0)$. [F1, algebra]

2.1 Conversely, if $Q(X)$ is a zero object it is isomorphic to $Q(0)$. The factored cohomology functors take this isomorphism to $H^n(X)\cong H^n(0)=0$ for every $n$. Thus $X$ is acyclic. [F2, step 1.1] ∎
