---
id: def-intermediate-value-property
kind: definition
title: "The intermediate value property (Darboux property) of a function on an interval: the image of every subinterval is order-convex"
status: draft
origin: session
deps: [lem-monotone-with-interval-image-is-continuous, def-interval, def-complete-ordered-field, thm-connected-subsets-of-r-are-intervals, cor-continuous-image-of-an-interval-is-an-interval, def-continuity-real]
justified_by: []
aliases: [def-darboux-property]
landmark: true
short: "intermediate value property"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Darboux's theorem (analysis) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux%27s_theorem_(analysis)"
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
pipeline_run: null
---

## Definition

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$. Then $f$ has the **intermediate value property**, also
called the **Darboux property**, when

$$f[J] \ \text{is order-convex for every order-convex } J \subseteq I .$$

As everywhere in this library, "interval" is read as "order-convex"
([[thm-connected-subsets-of-r-are-intervals]] is what licenses the word;
[[def-interval]] records that the classification of the order-convex subsets of
$\mathbb{R}$ into the nine written forms is not proved here).

### The equivalent pointwise form

$f$ has the intermediate value property **if and only if**

> for all $a, b \in I$ with $a < b$ and every real $y$ with $f(a) \le y \le f(b)$
> or $f(b) \le y \le f(a)$, there is $c \in [a,b]$ with $f(c) = y$.

*From the displayed condition to the pointwise one.* Given $a < b$ in $I$, the
set $[a,b]$ is order-convex and contained in $I$ by order-convexity of $I$, so
$f[[a,b]]$ is order-convex; it contains $f(a)$ and $f(b)$, hence every $y$
between them, and such a $y$ is $f(c)$ for some $c \in [a,b]$.

*From the pointwise condition to the displayed one.* Let $J \subseteq I$ be
order-convex, let $u, v \in f[J]$ and let $u \le y \le v$. Write $u = f(a)$ and
$v = f(b)$ with $a, b \in J$. If $a = b$ then $u = v = y$ and $y \in f[J]$. If
$a < b$, the pointwise condition gives $c \in [a,b]$ with $f(c) = y$, and
$c \in J$ because $J$ is order-convex and $a, b \in J$; so $y \in f[J]$. If
$b < a$ the same argument applies with the roles of $a$ and $b$ exchanged, the
pointwise condition being stated symmetrically in the two orders. Hence $f[J]$
is order-convex.

Both forms are used below, and they are used interchangeably.

### Every continuous function on an interval has the property

If $f$ is continuous on $I$ ([[def-continuity-real]]) then $f[J]$ is
order-convex for every order-convex $J \subseteq I$
([[cor-continuous-image-of-an-interval-is-an-interval]], claim 1). So continuity
implies the intermediate value property.

**The converse is false**, and that is the whole reason the property is given a
name of its own: a function may take every intermediate value on every
subinterval and be continuous nowhere. The failure is recorded as
[[fs-intermediate-value-property-implies-continuity]].

**A monotone function with the intermediate value property is continuous.** This
is not a further theorem but a reading of
[[lem-monotone-with-interval-image-is-continuous]]: for a function satisfying
$f(x) \le f(y)$ whenever $x \le y$ on an order-convex $I$, order-convexity of
the single image $f[I]$ already forces continuity. So the pathologies live
entirely among the non-monotone functions.
