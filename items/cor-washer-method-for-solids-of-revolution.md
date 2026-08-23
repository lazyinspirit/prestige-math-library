---
id: cor-washer-method-for-solids-of-revolution
kind: corollary
title: 'The washer formula for a solid of revolution between two nonnegative profiles'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-volume-of-a-solid-of-revolution-by-discs, cor-cavalieri-principle-for-jordan-content, cor-disc-jordan-content-is-pi-r-squared, cor-jordan-content-finite-additivity, thm-jordan-boundary-criterion, thm-linear-images-scale-jordan-content-by-absolute-determinant]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sigurd Angenent, Math 221 lecture notes, Chapter 8 §4"
      url: "https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf"
pipeline_run: null
---

## Statement

Let $a\le b$ and let $f,g:[a,b]\to[0,\infty)$ be continuous with $g\le f$. Revolve the region $g(x)\le y\le f(x)$ about the $x$-axis. The resulting washer solid is compact and Jordan measurable. Its volume is $\pi\int_a^b\bigl(f(x)^2-g(x)^2\bigr)\,dx$.

The same assertion holds about any coordinate axis after the corresponding coordinate permutation.

## Facts & Assumptions

**Given:** The profiles $0\le g\le f$ and the washer solid $W:=\{(x,y,z):a\le x\le b,\ g(x)^2\le y^2+z^2\le f(x)^2\}$.

[F1] The disc solid of a continuous nonnegative profile is compact and Jordan measurable ([[thm-volume-of-a-solid-of-revolution-by-discs]]).

[F2] A closed disc of radius $r\ge0$ has Jordan content $\pi r^2$ ([[cor-disc-jordan-content-is-pi-r-squared]]).

[F3] Jordan content is additive when two bounded Jordan sets meet in a content-zero set ([[cor-jordan-content-finite-additivity]]).

[F4] A bounded set is Jordan measurable if and only if its boundary has content zero ([[thm-jordan-boundary-criterion]]).

[F5] If a bounded Jordan set has Jordan-measurable sections outside a content-zero parameter set, then its completed sectional-content function is integrable and its integral is the set's content ([[cor-cavalieri-principle-for-jordan-content]]).

[F6] A linear coordinate permutation preserves Jordan measurability and content because its determinant has absolute value $1$ ([[thm-linear-images-scale-jordan-content-by-absolute-determinant]]).

## Proof

**Proof technique:** direct.

1.1 The outer disc solid and the inner disc solid are compact Jordan sets by [F1]. The boundary of $W$, the outer solid with the interior of the inner solid removed, lies in the union of their content-zero boundaries; hence [F4] makes $W$ compact and Jordan measurable. [given, F1, F4]

2.1 At coordinate $x$, the section is the annulus between radii $g(x)$ and $f(x)$. Splitting the outer disc into that annulus and the inner disc, whose overlap is a boundary circle of content zero, [F2] and [F3] give section content $\pi(f(x)^2-g(x)^2)$. [step 1.1, F2, F3, algebra]

3.1 By [F5], integration of the continuous section-content function gives the displayed washer formula. It gives zero when $f=g$ and reduces to the disc formula when $g=0$. By [F6], coordinate permutations preserve the construction and volume, proving the coordinate-axis clause. [step 2.1, F5, F6] ∎
