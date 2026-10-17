---
id: lem-emg-positive-square-root-smoothness
kind: lemma
title: The positive square-root branch is smooth
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
physical_scope: null
deps:
- def-emg-explicit-power-regimes
- lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
- thm-algebra-of-derivatives
- thm-ck-euclidean-maps-closed-under-algebra-and-composition
dependency_roles:
  def-emg-explicit-power-regimes: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. Lebl, Basic Analysis II, Theorem 8.5.1 and higher-regularity discussion
    url: https://www.jirka.org/ra/html/sec_svinvfuncthm.html
proof_strategy: direct
dependency_level: 1
---

## Statement

For $q>0$, let $s(q)$ be the unique positive root specified in [[def-emg-explicit-power-regimes]]. Then $s:(0,\infty)\to(0,\infty)$ is smooth and $s'(q)=1/(2s(q))$.

## Facts & Assumptions

**Given:** The positive-root function $s$ on the open interval $(0,\infty)$.

[F1] [[def-emg-explicit-power-regimes]] supplies existence and uniqueness of the positive root.

[F2] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]] applies to a smooth map on an open Euclidean set at a point with invertible derivative, and produces a smooth local inverse.

[F3] [[thm-algebra-of-derivatives]] gives the product rule $(uv)'=u'v+uv'$ for differentiable real functions; [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]] gives smoothness of polynomial maps and composition.

## Proof

1.1 Define $P:(0,\infty)\to\mathbb R$ by $P(t)=t^2$. By [F3], $P$ is smooth with $P'(t)=2t$. Fix $q>0$ and put $t=s(q)>0$. Then $P(t)=q$ and the one-dimensional derivative is invertible because $2t\ne0$. [given, F1, F3, algebra]

2.1 By [F2], there are open neighborhoods $V\subseteq(0,\infty)$ of $t$ and $W$ of $q$ on which $P|_V$ has a smooth inverse $h$. Shrink $W$ inside $(0,\infty)$. For $y\in W$, $h(y)>0$ and $h(y)^2=y$, so uniqueness in [F1] implies $h(y)=s(y)$. Thus $s$ agrees with a smooth function near every point of its domain and is smooth. [F1, F2, step 1.1, construct]

3.1 Differentiate $s(q)^2=q$ using [F3] to obtain $2s(q)s'(q)=1$. Since $s(q)>0$, division gives the stated derivative. The domain excludes the zero endpoint; no smooth extension through zero is claimed. The local inverses agree by uniqueness, without any choice of a family of inverses. [F1, F3, step 2.1, algebra] ∎
