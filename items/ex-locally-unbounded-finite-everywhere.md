---
id: ex-locally-unbounded-finite-everywhere
kind: example
title: "The function equal to $q$ at a rational $p/q$ in lowest terms and to $0$ at every irrational is finite at every point and unbounded on every nondegenerate interval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [def-dirichlet-and-thomae-functions, lem-q-and-irrationals-dense-r, lem-rat-embeds-dense, def-bounded-set, def-interval, cor-archimedean-reciprocal, thm-of-archimedean, def-oscillation, def-continuity-real, lem-integer-part, def-canonical-natural, lem-of-naturals-positive, lem-of-abs-value, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "finite everywhere, unbounded on every interval"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Elements of Real Analysis (Rutgers University-Camden)"
      url: "https://math.camden.rutgers.edu/files/Real_Analysis.pdf"
pipeline_run: null
---

## Example

Let $q(x)$ be the least denominator of a rational $x$
([[def-dirichlet-and-thomae-functions]]) and define
$h : \mathbb{R} \to \mathbb{R}$ by

$$h(x) := \iota(q(x)) \ \text{ for } x \in \mathbb{Q}, \qquad h(x) := 0 \ \text{ for } x \notin \mathbb{Q},$$

where $\iota(q)$ is the canonical natural ([[def-canonical-natural]]) and
$\mathbb{Q}$ is the canonical copy of the rationals inside $\mathbb{R}$
([[lem-rat-embeds-dense]]). Equivalently $h(x) = 1/t(x)$ at a rational $x$,
where $t$ is Thomae's function. Then:

1. $h(x)$ is a real number for every real $x$: $h$ is finite at every point;
2. $h$ is **unbounded on every nondegenerate interval**
   ([[def-bounded-set]], [[def-interval]]): for all reals $a < b$ and every real
   $M$ there is $x \in (a,b)$ with $h(x) > M$.

So a function may be finite at every single point and yet fail to be bounded on
every interval, however short. In particular $h$ is bounded on no neighbourhood
of any point.

## Facts & Assumptions

**Given:** The function $h$ above, with $q(x) = \min\{\, q \in \mathbb{N} : q \ge 1 \text{ and } \iota(q)x \in \mathbb{Z} \,\}$ for $x \in \mathbb{Q}$.

[A1] $q(x) \ge 1$ is a natural with $\iota(q(x))\,x \in \mathbb{Z}$, and $q(x) \le q$ for every natural $q \ge 1$ with $\iota(q)x \in \mathbb{Z}$ ([[def-dirichlet-and-thomae-functions]]).

[L1] Strictly between any two distinct reals there lies a rational ([[lem-rat-embeds-dense]], [[lem-q-and-irrationals-dense-r]]).

[L2] A nonzero integer has absolute value at least $1$, since no integer lies strictly between $0$ and $1$ ([[lem-integer-part]], [[lem-of-abs-value]]).

[L3] For every real $\eta > 0$ there is a natural $n \ge 1$ with $1/\iota(n) < \eta$, and for every real $x$ a natural $n \ge 1$ with $x < \iota(n)$; $\iota$ is positive and strictly increasing on the naturals $\ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

[L4] $\mathbb{R}$ is an ordered field ([[def-complete-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 Claim 1: for a rational $x$ the value $h(x) = \iota(q(x))$ is a canonical natural, hence a real number, and for an irrational $x$ the value is $0$. Every real falls under exactly one clause, so $h$ is a function $\mathbb{R} \to \mathbb{R}$. [A1]

1.2 **Separation of rationals by their denominators.** Let $x \ne y$ be rationals. Then $|x - y| \ge 1/(\iota(q(x))\,\iota(q(y)))$. Indeed, put $q_{1} := q(x)$, $q_{2} := q(y)$, $p_{1} := \iota(q_{1})x$ and $p_{2} := \iota(q_{2})y$, all integers; then $x - y = (p_{1}\iota(q_{2}) - p_{2}\iota(q_{1}))/(\iota(q_{1})\iota(q_{2}))$, the numerator is an integer, and it is nonzero because $x \ne y$; so its absolute value is at least $1$. [A1, L2, L4]

2.1 Claim 2: let $a < b$ be reals and let $M$ be real. Take a rational $x_{1}$ with $a < x_{1} < b$ and put $q_{1} := q(x_{1})$. Take a natural $N \ge 1$ with $M < \iota(N)$, and put $$\eta := \min\Bigl\{\, \frac{1}{\iota(q_{1})\,\iota(N)},\ b - x_{1} \,\Bigr\} > 0 .$$ [step 1.2, L1, L3, L4]

3.1 With $x_{1}$, $q_{1}$, $N$ and $\eta$ as in step 2.1, take a rational $y$ with $x_{1} < y < x_{1} + \eta$. Then $a < x_{1} < y < b$, so $y \in (a,b)$; and $y \ne x_{1}$ with $|y - x_{1}| < \eta \le 1/(\iota(q_{1})\iota(N))$. [step 2.1, L1]

4.1 Hence $q(y) > N$. If instead $q(y) \le N$ then $\iota(q(y)) \le \iota(N)$, and step 1.2 would give $|y - x_{1}| \ge 1/(\iota(q_{1})\iota(q(y))) \ge 1/(\iota(q_{1})\iota(N))$, contradicting step 3.1. [step 1.2, step 3.1, L3]

5.1 Therefore $h(y) = \iota(q(y)) > \iota(N) > M$, and $y \in (a,b)$: the values of $h$ on $(a,b)$ exceed every real, so $h$ is unbounded on $(a,b)$, and hence on every set containing it. [step 2.1, step 3.1, step 4.1, L3] ∎

## Remarks

- **Finiteness at a point says nothing about local boundedness.** The two
  notions are often conflated; this example separates them as sharply as
  possible, since $h$ is unbounded on **every** nondegenerate interval and yet
  takes only real values.

- **$h$ is nowhere continuous, and the oscillation is infinite everywhere.**
  Continuity at $c$ would give a neighbourhood on which $|h - h(c)| < 1$, hence
  a neighbourhood on which $h$ is bounded, which claim 2 forbids; equivalently
  $\omega_{h}(c) = +\infty$ at every real $c$ ([[def-oscillation]],
  [[def-continuity-real]]). This is a different pathology from Thomae's
  function, whose values are bounded by $1$ and which is continuous at every
  irrational ([[thm-dirichlet-and-thomae-continuity-sets]]).

- **The separation estimate is the only arithmetic used.** Step 1.2 is the
  standard fact that two distinct rationals with denominators $q_{1}$ and
  $q_{2}$ are at least $1/(q_{1}q_{2})$ apart, and it is proved from nothing more
  than "a nonzero integer has absolute value at least $1$".
