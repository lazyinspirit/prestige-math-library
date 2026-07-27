---
id: def-ring-characteristic
kind: definition
title: "The characteristic of a ring: the least $n \\ge 1$ with $n \\cdot 1_R = 0$ when one exists, and $0$ otherwise"
status: draft
origin: session
deps: [def-ring, def-group, def-group-power, lem-integer-multiples-agree-with-canonical-natural, def-canonical-natural, def-field, def-order-in-a-group, thm-well-ordering-principle, def-natural-numbers, def-nat-order]
justified_by: []
aliases: [def-characteristic]
landmark: true
short: "$\\operatorname{char}(R)$"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
pipeline_run: null
---

## Definition

Let $R$ be a ring ([[def-ring]]) with identity $1_R$ and zero $0_R$. For
$n \in \mathbb{N}$ let $n \cdot 1_R$ be the additive natural power of $1_R$ in
the abelian group $(R,+,0_R)$ ([[def-group-power]], [[def-group]]): thus
$0 \cdot 1_R = 0_R$ and $\sigma(n)\cdot 1_R = n \cdot 1_R + 1_R$. Put

$$T_R \;:=\; \{\, n \in \mathbb{N} \;:\; n \ge 1 \text{ and } n \cdot 1_R = 0_R \,\} \;\subseteq\; \mathbb{N}.$$

The **characteristic** of $R$ is

$$\operatorname{char}(R) \;:=\; \begin{cases} \min T_R & \text{if } T_R \ne \varnothing, \\[2pt] 0 & \text{if } T_R = \varnothing.\end{cases}$$

**Why the least element exists.** $T_R$ is a subset of $\mathbb{N}$, so when it
is nonempty it has a least element by the well-ordering principle
([[thm-well-ordering-principle]]), and that element is unique, being a member of
$T_R$ that is $\le$ every member of $T_R$ in the order of [[def-nat-order]]. So
$\operatorname{char}(R)$ is a well-defined natural number in both cases.

**The clause $n \ge 1$ is not decoration.** $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and $0 \cdot 1_R = 0_R$ holds in every ring, so
without that clause $T_R$ would always contain $0$ and the definition would say
nothing.

**Convention: the value in the empty case is $0$, and this is the OPPOSITE of
the convention for the order of a group element.** [[def-order-in-a-group]]
writes $\operatorname{ord}(g) = \infty$ when no positive power of $g$ is the
identity. Here the value in the corresponding case is the natural number $0$,
not a symbol $\infty$. A reader coming straight from
[[def-order-in-a-group]] should notice the difference: it is deliberate, it is
the standard convention for the characteristic, and it is what makes the
divisibility statement of [[lem-characteristic-and-additive-order]] uniform
across the two cases.

**$\operatorname{char}(R)$ is a natural number, hence a set, not an element of
$R$.** A natural number in this library is a von Neumann natural
([[def-natural-numbers]]), so $\operatorname{char}(R) \notin R$ in general and
the expression $n \cdot 1_R$ is not a product in $R$ but the additive multiple
just described.

**Dictionary for fields.** When $R$ is a field $F$ ([[def-field]]), the element
$n \cdot 1_F$ is exactly the canonical natural $\iota(n)$ of
[[def-canonical-natural]]; this is proved, not assumed, in
[[lem-integer-multiples-agree-with-canonical-natural]]. So for a field
$T_F = \{\, n \ge 1 : \iota(n) = 0_F \,\}$ and the characteristic is the least
$n \ge 1$ with $\iota(n) = 0_F$, or $0$ if there is none.

## Remarks

- **Characteristic $1$ occurs, exactly once.** $1 \cdot 1_R = 0 \cdot 1_R + 1_R = 1_R$,
  so $1 \in T_R$ exactly when $1_R = 0_R$, that is exactly when $R$ is the
  one-element ring; and then $\operatorname{char}(R) = 1$, since $1$ is the least
  member of $\mathbb{N}$ with $n \ge 1$. The companion page records that ring.
  Every other ring has characteristic $0$ or a value at least $2$.

- **Characteristic $0$ means "no such $n$", not "$n = 0$ works".** The value $0$
  is a flag, and the flag is chosen so that "$n \cdot 1_R = 0_R$ exactly when
  $\operatorname{char}(R)$ divides $n$" is true in both cases: when the
  characteristic is $0$ the right-hand side says $n = 0$, which is exactly right.
  That statement is [[lem-characteristic-and-additive-order]].

- **A further property of the characteristic of an integral domain is not
  stated here.** Stating it requires the notion of a prime number, and no
  definition on this page, nor in any item this page cites, introduces that
  notion; so the statement is not made here. It is taken up on a later page,
  where primes are available, and what it needs from this page is
  [[lem-characteristic-and-additive-order]].
