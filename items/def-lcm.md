---
id: def-lcm
kind: definition
title: "Common multiple, and the least common multiple $\\operatorname{lcm}(a,b)$, taken to be $0$ when $a = 0$ or $b = 0$"
status: draft
origin: session
deps: [def-divides-in-z, lem-divisibility-basic, thm-well-ordering-principle, lem-nat-embeds-int, def-natural-numbers, def-nat-order, def-int-abs, lem-int-abs-properties, lem-int-cancellation, thm-int-ordered-ring, def-int-order, thm-int-comm-ring, def-int-operations]
justified_by: []
aliases: []
landmark: true
short: "$\\operatorname{lcm}(a,b)$"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Least common multiple (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least_common_multiple"
pipeline_run: null
---

## Definition

Let $a, b \in \mathbb{Z}$. An integer $m$ is a **common multiple** of $a$ and $b$
when $a \mid m$ and $b \mid m$ ([[def-divides-in-z]]).

**Case $a \ne 0$ and $b \ne 0$: a least positive common multiple exists.** The
integer $|ab|$ is a positive common multiple. It is a common multiple because
$a \mid a$ gives $a \mid ab$ and hence $a \mid |ab|$, the last step because
$|ab|$ is $ab$ or $-ab$ ([[lem-divisibility-basic]], [[def-int-abs]]), and
symmetrically for $b$; and it is positive because $ab \ne 0$
([[lem-int-cancellation]]), so $|ab| \ge 0$ and $|ab| \ne 0$
([[lem-int-abs-properties]]). Every positive common multiple is nonnegative,
hence of the form $\iota(k)$ for a unique $k \in \mathbb{N}$, where
$\iota : \mathbb{N} \to \mathbb{Z}$ is the embedding of [[lem-nat-embeds-int]];
so the set

$$T \;:=\; \{\, k \in \mathbb{N} \;:\; \iota(k) \text{ is a positive common multiple of } a \text{ and } b \,\}$$

is a nonempty subset of $\mathbb{N}$ and has a least element $k_0$
([[thm-well-ordering-principle]]). Since $\iota$ preserves the order,
$\iota(k_0)$ is then the least positive common multiple of $a$ and $b$, and we
define

$$\operatorname{lcm}(a,b) \;:=\; \iota(k_0),$$

the least positive common multiple. It is unique, greatest and least elements
being unique by antisymmetry ([[thm-int-ordered-ring]], [[def-int-order]]).

**Case $a = 0$ or $b = 0$: the only common multiple is $0$.** Say $a = 0$. Then
$a \mid m$ reads $0 \mid m$, which holds exactly for $m = 0$
([[def-divides-in-z]]); and $0$ is indeed a common multiple, since every integer
divides $0$. So there is no positive common multiple at all, and we set

$$\operatorname{lcm}(a,b) \;:=\; 0 .$$

This is not a free choice dressed as one: $0$ is the *only* common multiple of
the pair, so any other value would name an integer that is not a common multiple.

With both cases together $\operatorname{lcm}(a,b)$ is defined for every pair, and
$\operatorname{lcm}(a,b) \ge 0$ always.

## Remarks

- **The convention matches the one for $\gcd$.** $\gcd(0,0) = 0$ was fixed in
  [[def-common-divisor-and-gcd]] and $\operatorname{lcm}(a,b) = 0$ is fixed here
  whenever either argument vanishes; with both,
  $\gcd(a,b)\operatorname{lcm}(a,b) = |ab|$ holds at every pair without exception
  ([[thm-gcd-lcm-product]]). At $a = 0$ that identity reads $\gcd(0,b) \cdot 0 = 0
  = |0 \cdot b|$, which is true for every $b$.

- **"Least" is least in the order of $\mathbb{Z}$, among the positive common
  multiples.** The stronger statement, that $\operatorname{lcm}(a,b)$ divides
  every common multiple and not merely that it is smallest, is a theorem and is
  proved as the first half of [[thm-gcd-lcm-product]]. It is that divisibility
  form, not the minimality, that later pages use.

- **Two arguments only.** As with $\gcd$, no least common multiple of a longer
  list is defined on this page, because nothing here needs one.
