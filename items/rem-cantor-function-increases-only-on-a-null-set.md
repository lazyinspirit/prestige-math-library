---
id: rem-cantor-function-increases-only-on-a-null-set
kind: remark
title: "The Cantor function is continuous and nondecreasing, climbs from $0$ to $1$, and is constant on every interval removed in the construction of the Cantor set, so all of its increase happens on a set of measure zero"
status: draft
origin: session
deps: [cor-cantor-function-is-continuous, thm-cantor-function-properties, thm-cantor-set-properties, def-cantor-set, def-cantor-function, def-measure-zero-and-content-zero, def-monotone-function, def-interval]
justified_by: []
aliases: []
landmark: false
short: "the Cantor function climbs on a null set"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
pipeline_run: null
---

## Remark

Collect what is now known about the Cantor function $c : [0,1] \to \mathbb{R}$
([[def-cantor-function]]) and the Cantor set $C$ ([[def-cantor-set]]).

- $c$ is continuous on $[0,1]$ ([[cor-cantor-function-is-continuous]]).
- $c$ is nondecreasing ([[def-monotone-function]]), and $c(0) = 0$, $c(1) = 1$:
  it climbs the whole way from $0$ to $1$ ([[thm-cantor-function-properties]],
  claims 2 and 3).
- $c$ is **constant on every interval removed in the construction of $C$**: if
  $u < v$ lie in $C$ and $(u,v) \cap C = \varnothing$, then $c$ is constant on
  $[u,v]$; and every point of $[0,1] \setminus C$ lies in the open interval
  $(u,v)$ of such a pair ([[thm-cantor-function-properties]], claim 4).
- $C$ has content zero, and therefore measure zero
  ([[thm-cantor-set-properties]], claim 2, [[def-measure-zero-and-content-zero]]).

**All of the increase happens on $C$, in the following exact sense.** Let
$x < y$ in $[0,1]$ with $c(x) < c(y)$. Then $(x,y) \cap C \ne \varnothing$.
Indeed, suppose $(x,y) \cap C = \varnothing$ and pick any $t$ with $x < t < y$.
Then $t \notin C$, so $t$ lies in the open interval $(u,v)$ of a pair $u < v$ of
points of $C$ with $(u,v) \cap C = \varnothing$, and $c$ is constant on $[u,v]$.
Now $u < t < y$, and $u \in C$, so $u \notin (x,y)$ and therefore $u \le x$;
symmetrically $x < t < v$ and $v \in C$ give $v \ge y$. Hence
$[x,y] \subseteq [u,v]$ and $c(x) = c(y)$, contrary to assumption. So a
nondegenerate interval on which $c$ actually rises must meet $C$, a set of
measure zero, while on the complement of $C$ the function is locally constant.

**What is not claimed here.** Nothing above says that $c$ is differentiable
anywhere, that its derivative vanishes anywhere, or that $c$ is singular: no
notion of derivative is available at this point in the reading order, and no
notion of Lebesgue measure is developed in the library as it stands. Measure
zero here is exactly [[def-measure-zero-and-content-zero]], a condition on
covers by intervals, and every statement above is a statement about $c$, about
$C$, and about that covering condition, and about nothing else.

**Why this is worth recording at all.** A continuous nondecreasing function that
climbs from $0$ to $1$ might be expected to do its climbing on a set that is
large in some sense; $c$ does all of it on a set that is null and, being
nowhere dense ([[thm-cantor-set-properties]], claim 5), small in category as
well. The companion page pushes the same observation one step further: $c$ maps
the null set $C$ **onto** the whole of $[0,1]$.
