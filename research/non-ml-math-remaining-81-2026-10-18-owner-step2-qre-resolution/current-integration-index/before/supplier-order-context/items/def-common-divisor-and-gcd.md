---
id: def-common-divisor-and-gcd
kind: definition
title: "Common divisor, and the greatest common divisor $\\gcd(a,b)$, with the convention $\\gcd(0,0) := 0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-divides-in-z, lem-divisor-bound, lem-int-bounded-above-has-greatest, def-int-abs, def-int-order, thm-int-ordered-ring]
justified_by: []
forward_refs: [cex-common-divisors-of-zero-have-no-greatest-element]
aliases: [def-gcd-in-z]
landmark: true
short: "$\\gcd(a,b)$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
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
- **It is the only value under which the scaling identity extends to this
  boundary.** Requiring $\gcd(ca,cb) = |c|\gcd(a,b)$ to hold at every triple
  leaves no freedom here. At $c = 0$ with any $(a,b) \ne (0,0)$ it would read
  $\gcd(0,0) = |0|\gcd(a,b) = 0$, whose right-hand side does not involve
  $\gcd(0,0)$ at all; and at $a = b = 0$ with $c = 1 + 1$ it reads $g = g + g$,
  again giving $g = 0$. The value is therefore chosen here, and
  [[lem-gcd-scaling]] then proves the identity for every triple with this
  convention in force; its own $(0,0)$ case reads the value off this definition
  rather than establishing it.
- **It is consistent with the product formula** —
  $\gcd(a,b)\operatorname{lcm}(a,b) = |ab|$ ([[thm-gcd-lcm-product]]) reads
  $0 \cdot 0 = 0$ at $(0,0)$, using $\operatorname{lcm}(0,0) = 0$ from
  [[def-lcm]]. This one is a check, **not** a second forcing argument: with
  $\operatorname{lcm}(0,0) = 0$ the left side vanishes whatever value
  $\gcd(0,0)$ is given, so the product formula is silent at $(0,0)$ and only the
  scaling identity above pins the value down.

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
