---
id: def-orientation-of-a-finite-dimensional-real-vector-space
kind: definition
title: "Orientation of a finite-dimensional real vector space"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dimension, def-linear-basis, def-determinant-of-a-linear-operator, thm-determinant-multiplicative, thm-reals-ordered-field]
aliases: []
landmark: true
short: "Orientation of a real vector space"
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §8.2"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Definition

Let $V$ be a finite-dimensional real vector space ([[def-dimension]]). Two ordered bases $\mathcal B,\mathcal B'$ of $V$ ([[def-linear-basis]]) are declared **equivalent** when the determinant of the unique change-of-basis linear isomorphism $P:V\to V$ carrying $\mathcal B$ to $\mathcal B'$ satisfies $\det P>0$, where the determinant is [[def-determinant-of-a-linear-operator]] and positivity is the order of the real field [[thm-reals-ordered-field]].

**This is an equivalence relation.** The identity change of basis has determinant $1>0$. If $\mathcal B\sim\mathcal B'$ through $P$, then $\mathcal B'\sim\mathcal B$ through $P^{-1}$, and $\det(P^{-1})=(\det P)^{-1}>0$. If $\mathcal B\sim\mathcal B'\sim\mathcal B''$ through $P,Q$, then $\det(Q\circ P)=\det Q\det P>0$ by [[thm-determinant-multiplicative]].

An **orientation** of $V$ is an equivalence class of ordered bases under this relation; a basis in the chosen class is **positively oriented** for that orientation. When $\dim V\ge1$ there are exactly two orientations: fixing one ordered basis $\mathcal B_0$, every other basis $\mathcal B$ has $\det P>0$ or $\det P<0$ by the trichotomy of [[thm-reals-ordered-field]]. If $\dim V=1$, replacing the sole basis vector of $\mathcal B_0$ by its negative produces a basis with determinant $-1$; if $\dim V\ge2$, interchanging two entries of $\mathcal B_0$ does the same. Thus both classes occur. When $\dim V=0$ the only ordered basis is the empty one and there is exactly one orientation.

## Remarks

Orientations depend only on the real vector-space structure; no inner product or basis preference enters the definition.
