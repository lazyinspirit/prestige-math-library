---
id: def-the-ceiling-of-a-quotient-of-naturals
kind: definition
title: "$\\lceil m/n \\rceil$ for naturals $m$ and $n \\ge 1$: the least $q \\in \\mathbb{N}$ with $m \\le n q$"
status: published
origin: session
deps: [thm-well-ordering-principle, def-natural-numbers, def-nat-order, lem-nat-order-is-membership,
       def-nat-multiplication, lem-nat-mult-identity, lem-nat-mult-commutative,
       lem-nat-mult-distributive, lem-nat-add-commutative, lem-nat-trichotomy,
       lem-nat-nonzero-is-successor,
       def-canonical-natural, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Floor and ceiling functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "Pigeonhole principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pigeonhole_principle"
pipeline_run: null
---

## Definition

Let $m, n \in \mathbb{N}$ with $n \ge 1$ ([[def-natural-numbers]],
[[def-nat-order]], [[lem-nat-order-is-membership]]), and put

$$Q(m,n) \;:=\; \{\, q \in \mathbb{N} \ :\ m \le n\,q \,\} ,$$

the multiplication being that of $\mathbb{N}$ ([[def-nat-multiplication]]).

**$Q(m,n)$ is nonempty, so the definition below has something to pick from.**
Since $n \ne 0$, [[lem-nat-nonzero-is-successor]] gives $n = \sigma(d)$ for some
$d \in \mathbb{N}$, and then
$n \cdot m = \sigma(d)\cdot m = d\cdot m + m = m + d\cdot m$ by the
successor-left law of [[lem-nat-mult-distributive]] and the commutativity of
addition ([[lem-nat-add-commutative]]), so $m \le n\cdot m$ by the definition of
the order ([[def-nat-order]]), which asks for a natural $j$ with $m + j = n m$
and is met by $j = d\cdot m$. Hence $m \in Q(m,n)$.

**Definition.** $\big\lceil m/n \big\rceil$ is the **least** element of
$Q(m,n)$, which exists by the well-ordering principle
([[thm-well-ordering-principle]]) applied to the nonempty subset $Q(m,n)$ of
$\mathbb{N}$. It is a natural number, and it is defined for $n \ge 1$ only.

**Four clauses, recorded here because they are what the notation is used for.**

**(a) $m \le n\big\lceil m/n\big\rceil$.** This is membership of
$\big\lceil m/n\big\rceil$ in $Q(m,n)$.

**(b) Minimality.** If $q \in \mathbb{N}$ satisfies $m \le n q$ then
$\big\lceil m/n\big\rceil \le q$; equivalently, every $q$ with
$q < \big\lceil m/n\big\rceil$ satisfies $n q < m$, by trichotomy
([[lem-nat-trichotomy]]).

**(c) Two values read off directly.** $\big\lceil 0/n\big\rceil = 0$, since
$0 \le n\cdot 0$ makes $0$ the least element of $\mathbb{N}$ that qualifies; and
$\big\lceil m/1\big\rceil = m$, since $m \le 1\cdot m = m$ while $m \le 1\cdot q$
forces $m \le q$ ([[lem-nat-mult-identity]], [[lem-nat-mult-commutative]]).

**(d) The reading in $\mathbb{R}$.** With $\iota : \mathbb{N} \to \mathbb{R}$ the
canonical natural ([[def-canonical-natural]]), clause (a) gives
$\iota(m) \le \iota(n)\,\iota\big(\lceil m/n\rceil\big)$ by the multiplicativity
of $\iota$ (clause 0 of
[[lem-nat-finite-sum-laws-and-the-canonical-embedding]]) and its strict
monotonicity (clause 7); and $\iota(n) > 0$ because $n \ge 1$. Since $\mathbb{R}$
is an ordered field ([[def-ordered-field]], [[def-field]]), dividing by
$\iota(n)$ gives

$$\frac{\iota(m)}{\iota(n)} \ \le\ \iota\Big(\big\lceil m/n\big\rceil\Big) .$$

## Remarks

- **This is not a floor and it is not a ceiling function.** It is defined for a
  pair of natural numbers with $n \ge 1$, its value is a natural number, and it
  is fixed by one order property and one minimality property. It is not defined
  for a real argument, it does not extend to negative numbers, and it carries no
  division: the symbol $m/n$ inside the brackets is part of the notation and not
  an operation performed anywhere above.

- **Why it is introduced at all.** The strong form of the pigeonhole principle
  says that some fibre has at least "the average, rounded up" elements, and that
  phrase needs a name for the rounding. The least $q$ with $m \le nq$ is exactly
  what the proof produces, and the well-ordering principle is exactly what makes
  it exist, so nothing stronger is required.

- **Nothing among this page's declared prerequisites supplies a division with
  remainder**, and the definition above deliberately does not attempt one: no
  $r$ with $m = nq + r$ and $r < n$ is produced or claimed here.
