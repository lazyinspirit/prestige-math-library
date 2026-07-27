---
id: def-common-divisor-and-gcd
kind: definition
title: "Common divisor, and the greatest common divisor $\\gcd(a,b)$, with the convention $\\gcd(0,0) := 0$"
status: draft
origin: session
deps: [def-divides-in-z, lem-divisor-bound, lem-int-bounded-above-has-greatest, def-int-abs, def-int-order, thm-int-ordered-ring]
justified_by: []
forward_refs: [cex-common-divisors-of-zero-have-no-greatest-element]
aliases: [def-gcd-in-z]
landmark: true
short: "$\\gcd(a,b)$"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Greatest common divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Greatest_common_divisor"
pipeline_run: null
---

## Definition

Let $a, b \in \mathbb{Z}$. An integer $d$ is a **common divisor** of $a$ and $b$
when $d \mid a$ and $d \mid b$ ([[def-divides-in-z]]). Write

$$D(a,b) \;:=\; \{\, d \in \mathbb{Z} \;:\; d \mid a \ \text{ and } \ d \mid b \,\}$$

for the set of common divisors.

**Case $(a,b) \ne (0,0)$: the greatest element exists.** $D(a,b)$ is nonempty,
since $1 \mid a$ and $1 \mid b$ for every $a$ and $b$ ([[def-divides-in-z]]). It
is bounded above: at least one of $a$ and $b$ is nonzero, say $a \ne 0$ (if
instead $b \ne 0$, argue with $b$ throughout), and every $d \in D(a,b)$ divides
$a$, so $d \le |a|$ by [[lem-divisor-bound]]. A nonempty set of integers bounded
above has a unique greatest element ([[lem-int-bounded-above-has-greatest]]), and
we define

$$\gcd(a,b) \;:=\; \text{the greatest element of } D(a,b).$$

Since $1 \in D(a,b)$ and $\gcd(a,b)$ is greatest, $\gcd(a,b) \ge 1$; in
particular $\gcd(a,b) > 0$.

**Case $(a,b) = (0,0)$: a convention, fixed here.** Every integer divides $0$
([[def-divides-in-z]]), so $D(0,0) = \mathbb{Z}$, which has no greatest element
at all: the clause above defines nothing, and leaving $\gcd(0,0)$ undefined would
put a hole in every identity below. We therefore set

$$\gcd(0,0) \;:=\; 0 .$$

With both cases together, $\gcd(a,b)$ is defined for every pair of integers, and
$\gcd(a,b) \ge 0$ always.

**Why $0$, and not some other value.** The convention is not arbitrary, and the
reasons are recorded here rather than deferred:

- **It is the greatest common divisor in the divisibility ordering.** $0$ is a
  common divisor of $0$ and $0$, and every common divisor of $0$ and $0$ divides
  $0$. So $0$ is greatest at $(0,0)$ in the sense "divisible by every common
  divisor", which is the sense that [[cor-common-divisor-divides-gcd]] shows
  holds at **every** pair, $(0,0)$ included, whereas "greatest in the order of
  $\mathbb{Z}$" fails there.
- **It is forced by the scaling identity.** $\gcd(ca,cb) = |c|\gcd(a,b)$ is
  proved below as [[lem-gcd-scaling]]. At $a = b = 0$ it reads
  $\gcd(0,0) = |c|\gcd(0,0)$ for every $c$; taking $c = 1 + 1$, so that
  $|c| = 1 + 1$, gives $g = g + g$ and hence $g = 0$. No other value makes the
  identity true at $c = 0$ or anywhere else on that boundary.
- **It keeps the product formula true.** $\gcd(a,b)\operatorname{lcm}(a,b) = |ab|$
  ([[thm-gcd-lcm-product]]) reads $0 \cdot 0 = 0$ at $(0,0)$, using the matching
  convention $\operatorname{lcm}(0,0) = 0$ of [[def-lcm]].

## Remarks

- **The gap the convention fills is real.** The failure is exhibited on the
  companion page by [[cex-common-divisors-of-zero-have-no-greatest-element]]:
  the common divisors of $(0,0)$ really are all of $\mathbb{Z}$, and really have
  no greatest element, so a value has to be supplied rather than computed.

- **The definition is by a maximum, and the theory replaces it by a divisibility
  characterisation.** Reading $\gcd$ as "largest common divisor" is what makes
  the $(0,0)$ case awkward, and it is also not the property later pages use.
  [[cor-common-divisor-divides-gcd]] proves the replacement: $d = \gcd(a,b)$
  exactly when $d \ge 0$, $d$ is a common divisor, and every common divisor
  divides $d$. That statement is uniform across all pairs.

- **Sign.** $\gcd(a,b)$ is never negative, by construction. Since $-d$ is a
  common divisor whenever $d$ is ([[lem-divisibility-basic]]), the set $D(a,b)$
  is symmetric about $0$, and taking the greatest element is exactly the choice
  of the nonnegative representative from each pair of associates
  ([[lem-associates-characterisation]]).

- **Two arguments, not a list.** $\gcd$ is defined here on **pairs** only. Nothing
  on this page needs a greatest common divisor of a longer list, and none is
  defined.
