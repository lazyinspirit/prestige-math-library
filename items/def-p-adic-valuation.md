---
id: def-p-adic-valuation
kind: definition
title: "The $p$-adic valuation $v_p(a)$ of a nonzero integer: the greatest $k \\in \\mathbb{N}$ with $p^{k} \\mid a$"
status: draft
origin: session
deps: [def-prime, def-group-power, def-semigroup-and-monoid, lem-units-of-z,
       def-divides-in-z, lem-divisibility-basic, lem-divisor-bound,
       lem-int-bounded-above-has-greatest, thm-induction-principle, def-int-abs,
       lem-int-abs-properties, def-integers, def-int-operations, def-int-order,
       thm-int-comm-ring, thm-int-ordered-ring, def-natural-numbers, def-nat-order,
       lem-nat-embeds-int, lem-nat-discrete, def-nat-addition]
justified_by: []
aliases: [def-p-adic-valuation-on-z]
landmark: true
short: "$v_p(a)$, the exponent of $p$ in $a$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "P-adic valuation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/P-adic_valuation"
pipeline_run: null
---

## Definition

Let $p$ be a prime ([[def-prime]]) and let $a \in \mathbb{Z}$ with $a \ne 0$.
Powers $p^{k}$ for $k \in \mathbb{N}$ are the **natural powers of
[[def-group-power]] taken in the commutative monoid $(\mathbb{Z},\cdot,1)$** of
[[lem-units-of-z]] and [[def-semigroup-and-monoid]], so that

$$p^{0} = 1, \qquad p^{\sigma(k)} = p^{k} \cdot p \quad (k \in \mathbb{N}).$$

Put

$$E(p,a) \;:=\; \{\, k \in \mathbb{N} \;:\; p^{k} \mid a \,\}$$

([[def-divides-in-z]]). Then $E(p,a)$ has a greatest element, and the **$p$-adic
valuation** of $a$ is

$$v_p(a) \;:=\; \max E(p,a) \;\in\; \mathbb{N},$$

the greatest $k \in \mathbb{N}$ with $p^{k} \mid a$.

**Why a greatest element exists.** Three facts are needed, and each is proved
here rather than assumed.

*The set is nonempty.* $p^{0} = 1$ and $1 \mid a$ for every $a$
([[def-divides-in-z]]), so $0 \in E(p,a)$.

*Every power of $p$ exceeds its own exponent.* We claim $p^{k} \ge 1$ and
$\iota(k) < p^{k}$ for every $k \in \mathbb{N}$, where
$\iota : \mathbb{N} \to \mathbb{Z}$ is the embedding of [[lem-nat-embeds-int]].
Both are proved by induction ([[thm-induction-principle]]). At $k = 0$ we have
$p^{0} = 1 \ge 1$ and $\iota(0) = 0 < 1 = p^{0}$, using $0 < 1$, which holds
because $1 = \iota(1)$ is nonnegative and differs from $0 = \iota(0)$ by
injectivity of $\iota$. Assume both at $k$. Since $p > 1$ we have $p - 1 > 0$,
hence $p - 1 \ge 1$ by discreteness of the order on $\mathbb{Z}$
([[lem-nat-discrete]], [[lem-nat-embeds-int]]: an integer $x > 0$ is $\iota(j)$
with $j \ne 0$, so $1 = \sigma(0) \le j$ and $1 \le x$). Therefore
$p^{\sigma(k)} - p^{k} = p^{k}(p-1) \ge p^{k} \ge 1$, because $p^{k} \ge 1 > 0$
and positives are closed under multiplication ([[thm-int-ordered-ring]]); so
$p^{\sigma(k)} \ge p^{k} + 1 \ge 1 + 1 > 1$. The same discreteness applied to
$p^{k} - \iota(k) > 0$ gives $\iota(k) + 1 \le p^{k}$, and
$\iota(\sigma(k)) = \iota(k) + 1$ because $\sigma(k) = k + 1$ in $\mathbb{N}$
([[def-nat-addition]]) and $\iota$ preserves addition; so
$\iota(\sigma(k)) \le p^{k} < p^{k} + 1 \le p^{\sigma(k)}$. The induction is
complete.

*The set is bounded.* Let $k \in E(p,a)$. Then $p^{k} \mid a$ with $a \ne 0$, so
$|p^{k}| \le |a|$ ([[lem-divisor-bound]]); and $p^{k} \ge 1 > 0$ gives
$|p^{k}| = p^{k}$ ([[def-int-abs]], [[lem-int-abs-properties]]). Combining with
the previous paragraph, $\iota(k) < p^{k} \le |a|$. So the set of integers
$\iota[E(p,a)] = \{\, \iota(k) : k \in E(p,a) \,\}$ is nonempty and bounded above
by $|a|$, hence has a unique greatest element
([[lem-int-bounded-above-has-greatest]]). That greatest element lies in the set,
so it is $\iota(k_0)$ for some $k_0 \in E(p,a)$; and since $\iota$ is injective
and preserves the order in both directions, $k_0$ is the greatest element of
$E(p,a)$ and is unique. We set $v_p(a) := k_0$.

**$v_p(0)$ is left undefined.** Every power of $p$ divides $0$
([[def-divides-in-z]]), so $E(p,0) = \mathbb{N}$ has no greatest element and the
clause above defines nothing. Every statement about $v_p$ in this library
therefore carries the hypothesis $a \ne 0$ explicitly. The convention
$v_p(0) := \infty$ is *not* adopted: it would need an ordered set with a greatest
element in which to place $\infty$, and this library has not built one.

## Remarks

- **$v_p(a)$ is a natural number, not an integer.** It is a von Neumann natural
  ([[def-natural-numbers]]), which is exactly what the exponent slot of
  [[def-group-power]] takes, so $p^{v_p(a)}$ is meaningful without any
  translation. Where a valuation has to be subtracted from another, as in
  [[lem-p-adic-valuation-on-q]], the values are first carried into $\mathbb{Z}$
  along $\iota$ ([[lem-nat-embeds-int]]).

- **These are monoid powers, and deliberately not [[def-integer-power]].** That
  definition is stated for an element of the ambient ordered field $\mathbb{R}$;
  using it here would make a statement about $\mathbb{Z}$ rest on the whole
  construction of the real numbers for no gain. The two agree along the
  embeddings $\mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$, since both are defined
  by the same recursion $x^{0} = 1$, $x^{\sigma(k)} = x^{k} x$ and the
  embeddings preserve products and the constant $1$; nothing on this page
  depends on that observation, and it is recorded here only so the reader does
  not think a second notion of power has been introduced.

- **The definition is by a maximum, and [[lem-p-adic-valuation-basic]] converts
  it into the form later proofs use**: $p^{v_p(a)} \mid a$, $p^{v_p(a)+1} \nmid a$,
  and $a = p^{v_p(a)} a'$ with $p \nmid a'$.
