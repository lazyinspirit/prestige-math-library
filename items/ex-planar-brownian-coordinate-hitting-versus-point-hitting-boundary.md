---
id: ex-planar-brownian-coordinate-hitting-versus-point-hitting-boundary
kind: example
title: "Planar coordinate hitting does not imply point hitting"
status: draft
origin: pipeline
deps: [lem-planar-brownian-annular-exit-probability, cor-one-dimensional-brownian-motion-hits-every-point-almost-surely, cor-one-dimensional-brownian-motion-is-recurrent, def-d-dimensional-brownian-motion, def-brownian-motion-started-at-x, lem-rat-embeds-dense, lem-probability-measure-basic-identities, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Section 6.7, printed pp. 63-64"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.4"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Assume the Axiom of Choice, let $W$ be a standard two-dimensional Brownian
motion [[def-d-dimensional-brownian-motion]], let $x\ne y$ in $\mathbb R^2$
and let $P_x$ be the shifted planar law [[def-brownian-motion-started-at-x]].
Then:

1. each coordinate process $t\mapsto W^{(i)}_t$ is a standard one-dimensional
   Brownian motion and, almost surely, visits every neighbourhood of $y_i$ at
   arbitrarily large times;
2. nevertheless $P_x(\exists t\ge0:W_t=y)=0$, so the two coordinate hitting
   events do not synchronize: almost surely
   $\{t:W^{(1)}_t=y_1\}\cap\{t:W^{(2)}_t=y_2\}=\emptyset$;
3. every nonempty open disc is visited almost surely.

## Facts & Assumptions

**Given:** AC, a standard planar Brownian motion $W$, $x\ne y$ and the shifted law $P_x$.

[F1] Planar annular exit probability: for $0<\varepsilon<|z-y|<R$ and the law $P_z$, $$P_z(S_\varepsilon<T_R)=\frac{\log R-\log|z-y|}{\log R-\log\varepsilon},$$ where $S_\varepsilon,T_R$ are the first hits of the circles of radii $\varepsilon$ and $R$ about $y$. [[lem-planar-brownian-annular-exit-probability]]

[F2] The coordinates of a standard planar Brownian motion are standard one-dimensional Brownian motions, and one-dimensional Brownian motion visits every neighbourhood of every level at arbitrarily large times almost surely. [[def-d-dimensional-brownian-motion]] [[cor-one-dimensional-brownian-motion-is-recurrent]] [[cor-one-dimensional-brownian-motion-hits-every-point-almost-surely]]

[F3] Countable subadditivity of a probability measure and countable intersections of probability-one events. [[lem-probability-measure-basic-identities]]

[F4] Every nonempty open disc contains a disc with rational centre and rational radius. [[lem-rat-embeds-dense]]

[F5] AC is the ambient assumption of the Brownian construction. [[def-axiom-of-choice]] [[def-brownian-motion-started-at-x]]

## Verification

**Proof technique:** direct.

1.1 Fix $R>|x-y|$. For every $n$ with $1/n<|x-y|$, the event $\{T_y<T_R\}$ is contained in $\{S_{1/n}<T_R\}$: a path that reaches $y$ before leaving the disc of radius $R$ passes through the circle of radius $1/n$ about $y$ first, by continuity. Hence by [F1], $P_x(T_y<T_R)\le\lim_n\frac{\log R-\log|x-y|}{\log R-\log(1/n)}=0$, the denominator tending to $+\infty$. [F1, given]

1.2 For a given $\delta>0$ choose $0<\varepsilon<\min\{\delta,|x-y|\}$; then $P_x(S_\varepsilon<T_R)=\frac{\log R-\log|x-y|}{\log R-\log\varepsilon}\to1$ as $R\to\infty$, so the $\varepsilon$-circle about $y$ is hit almost surely, hence the disc of radius $\delta$ about $y$ is hit almost surely. Applying this to the countably many discs with rational centre and rational radius and intersecting the resulting probability-one events via [F3], while every nonempty open disc contains such a rational disc by [F4], gives the almost-sure statement of assertion 3. [F1, F3, F4, given]

1.3 By [F2] each coordinate process is a standard one-dimensional Brownian motion, so each visits every neighbourhood of its target coordinate at arbitrarily large times almost surely; this is assertion 1, and it does not synchronize the two coordinates. [F2, given]

2.1 The event $\{T_y<\infty\}$ is the union over the countably many integers $R>|x-y|$ of the increasing events $\{T_y<T_R\}$: if $T_y<\infty$ then the path on $[0,T_y]$ is a compact subset of $\mathbb R^2$, hence stays in some disc of integer radius about $y$, and conversely $T_y<T_R<\infty$ implies $T_y<\infty$. By [F3] and step 1.1, $P_x(T_y<\infty)\le\sum_RP_x(T_y<T_R)=0$. [F3, step 1.1]

3.1 By step 2.1 there is a probability-one event on which the planar path never equals $y$; on that event no time can satisfy both coordinate equations simultaneously, so $\{t:W^{(1)}_t=y_1\}\cap\{t:W^{(2)}_t=y_2\}=\emptyset$, even though each of the two sets is almost surely unbounded by step 1.3. This is assertion 2. [step 2.1, step 1.3]

4.1 The cases are consistent: the point $x=y$ is excluded, so $T_y=0$ is not possible; the dimension is two, and the polarity statement is not asserted in dimension one, where the same computation fails because the logarithm is replaced by a bounded harmonic function; the radius parameter $\delta>0$ and the inner radius $\varepsilon$ are chosen strictly positive. AC is used only through [F5]. [F1, F5, given, step 3.1] ∎

## Source notes

Sousi, Section 6.7 on printed pp. 63-64, computes the annular exit probability and concludes that planar points are polar while discs are hit; Durrett, Section 7.4, contains the corresponding discussion. The example separates the two coordinate recurrences from the planar polarity, which is exactly the boundary the surrounding page records.
