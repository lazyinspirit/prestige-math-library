---
id: def-fd-weak-time-continuity
kind: definition
title: Weak time continuity and energy spaces
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-fd-periodic-solenoidal-spaces, def-fd-bounded-solenoidal-spaces, lem-fd-bounded-solenoidal-basis]
dependency_roles:
  def-fd-periodic-solenoidal-spaces: mathematical-premise
  def-fd-bounded-solenoidal-spaces: mathematical-premise
  lem-fd-bounded-solenoidal-basis: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§5.5, printed p. 48."
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§2.1, printed p. 4, and Definition 1 in §3, printed p. 6."
---

## Definition

Let $\mathbb K\in\{\mathbb R,\mathbb C\}$, let $H$ be a Hilbert space over
$\mathbb K$, let $X$ be a separable Hilbert space over $\mathbb K$, and let
$T>0$. Define $C_w([0,T];H)$ to be the set of actual maps $u:[0,T]\to H$
such that $t\mapsto (u(t),h)_H$ is continuous for every fixed $h\in H$;
membership here is pointwise and is not an almost-everywhere equivalence
class. A map $u:(0,T)\to X$ is strongly measurable if it is an almost-everywhere
pointwise limit of measurable simple $X$-valued maps. For $1\le p<\infty$,
$L^p(0,T;X)$ consists of almost-everywhere equivalence classes of strongly
measurable maps with $\int_0^T\|u(t)\|_X^pdt<\infty$; $L^\infty(0,T;X)$
consists of such classes with finite essential supremum norm. In this page,
$L^p_{\rm loc}(0,\infty;X)$ means membership on every finite interval
$(0,T)$. These conventions apply to any of the periodic spaces $H,V,H^{-r}$
and to the bounded-domain Hilbert spaces $H,V$ whenever the target space $X$
is separable.

If two maps in $C_w([0,T];H)$ agree almost everywhere on $(0,T)$, they agree
at every $t\in[0,T]$. Consequently, a Bochner equivalence class has at most
one weakly continuous representative; whenever it has one, all pointwise
values associated with that class mean the values of this unique representative.

## Definition references

[Leonid Ryzhik, *Math 256B Lecture Notes*, §5.5, p. 48](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, §2.1 and Definition 3.1, pp. 4, 6](https://www.mdpi.com/2311-5521/6/1/42/pdf).

## Facts & Assumptions

**Given:** Hilbert spaces $H,X$ over $\mathbb R$ or $\mathbb C$, with $X$ separable, and a finite interval $[0,T]$. In applications, periodic $H,V,H^{-r}$ come from [[def-fd-periodic-solenoidal-spaces]]; the bounded-domain spaces $H,V$ are those defined by [[def-fd-bounded-solenoidal-spaces]] and are separable under the Axiom of Choice by [[lem-fd-bounded-solenoidal-basis]].

[F1] [[def-fd-periodic-solenoidal-spaces]]: under Countable Choice, the periodic spaces $H,V,H^{-r}$ have the stated real Hilbert structures.

[F2] [[def-fd-bounded-solenoidal-spaces]] and [[lem-fd-bounded-solenoidal-basis]]: under the Axiom of Choice, the bounded-domain spaces $H,V$ are separable real Hilbert spaces.

## Proof

1.1 The weak-continuity clause is the continuity of all scalar coordinate maps $t\mapsto(u(t),h)_H$ and therefore defines a property of an actual map; it makes no assertion of norm continuity. The Bochner conditions, by contrast, are properties of almost-everywhere equivalence classes. [given, F1, F2]

2.1 If $u,v\in C_w([0,T];H)$ agree almost everywhere, then for each fixed $h\in H$ the continuous scalar function $t\mapsto(u(t)-v(t),h)_H$ vanishes almost everywhere. A continuous scalar function that is nonzero at any point is nonzero on a relative interval of positive measure, including at an endpoint, so this function vanishes everywhere. Taking $h=u(t)-v(t)$ gives $u(t)=v(t)$ for every $t$. Thus a weakly continuous representative, if it exists for a Bochner class, is unique. [given, step 1.1, algebra]

3.1 The definition of $L^p_{\rm loc}$ is exactly the conjunction of the stated Bochner-class conditions over finite intervals. The periodic and bounded-domain applications are valid whenever the named target spaces have the separability hypotheses recorded in [F1] and [F2]. [given, F1, F2, step 2.1] ∎

