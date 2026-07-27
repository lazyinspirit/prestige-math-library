---
id: lem-integer-multiples-agree-with-canonical-natural
kind: lemma
title: "In a field, the additive multiple $n \\cdot 1_F$ is the canonical natural $\\iota(n)$: the additive power of the group-power definition and the canonical natural are the same function, both being the unique one given by the recursion $\\iota(0) = 0_F$, $\\iota(\\sigma(n)) = \\iota(n) + 1_F$"
status: draft
origin: session
deps: [def-canonical-natural, def-group-power, def-field, lem-field-is-a-commutative-ring, def-ring, thm-recursion, def-natural-numbers, def-nat-addition, def-group]
justified_by: []
aliases: []
landmark: false
short: "$n \\cdot 1_F = \\iota(n)$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "Recursion (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Recursion#The_recursion_theorem"
pipeline_run: null
---

## Statement

Let $F$ be a field ([[def-field]]), which is a ring by
[[lem-field-is-a-commutative-ring]]. Two functions $\mathbb{N} \to F$ are in
play:

- $\iota$, the **canonical natural** of [[def-canonical-natural]], defined by
  $\iota(0) = 0_F$ and $\iota(n+1) = \iota(n) + 1_F$;
- $n \mapsto n \cdot 1_F$, the **additive natural power** of the element $1_F$ in
  the abelian group $(F,+,0_F)$, defined by [[def-group-power]] read additively:
  $0 \cdot 1_F = 0_F$ and $\sigma(n)\cdot 1_F = n \cdot 1_F + 1_F$.

These are the same function: $\iota(n) = n \cdot 1_F$ for every
$n \in \mathbb{N}$. In particular the notation $n \cdot 1_F$ used by
[[def-canonical-natural]] and the notation $n \cdot 1_F$ used by
[[def-group-power]] denote the same element of $F$, and no second notion is in
play.

## Facts & Assumptions

**Given:** A field $F$ with $0_F$ and $1_F$, the map $\iota : \mathbb{N} \to F$ of [[def-canonical-natural]], and the additive natural powers of [[def-group-power]] in the group $(F,+,0_F)$.

[L1] $F$ is a ring, so $(F,+,0_F)$ is an abelian group ([[lem-field-is-a-commutative-ring]], [[def-ring]], [[def-group]]).

[L2] $\iota(0) = 0_F$ and $\iota(n+1) = \iota(n) + 1_F$ for every $n \in \mathbb{N}$ ([[def-canonical-natural]]).

[L3] The additive natural powers satisfy $0 \cdot a = 0_F$ and $\sigma(n) \cdot a = n \cdot a + a$ for every $n \in \mathbb{N}$ and every $a \in F$ ([[def-group-power]]).

[L4] On $\mathbb{N}$: $m + 0 = m$ and $m + \sigma(n) = \sigma(m+n)$, so $n + 1 = \sigma(n)$ ([[def-nat-addition]], [[def-natural-numbers]]).

[L5] The recursion theorem: for a set $A$, an element $a \in A$ and a function $u : A \to A$ there is exactly one $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(\sigma(n)) = u(g(n))$ ([[thm-recursion]]).

## Proof

**Proof technique:** direct.

1.1 Let $u : F \to F$ be the function $u(t) = t + 1_F$, which is a function from $F$ to $F$ because addition is a binary operation on $F$. By [L5] applied with $A = F$, $a = 0_F$ and this $u$, there is exactly one function $g : \mathbb{N} \to F$ satisfying $g(0) = 0_F$ and $g(\sigma(n)) = g(n) + 1_F$ for every $n \in \mathbb{N}$. [L1, L5]

1.2 The map $\iota$ satisfies those two equations: $\iota(0) = 0_F$ by [L2], and $\iota(\sigma(n)) = \iota(n+1) = \iota(n) + 1_F$ by [L2] together with $n + 1 = \sigma(n)$. [L2, L4]

1.3 The map $n \mapsto n \cdot 1_F$ satisfies them too: $0 \cdot 1_F = 0_F$ and $\sigma(n)\cdot 1_F = n \cdot 1_F + 1_F$, both by [L3] with $a = 1_F$. [L3]

2.1 By the uniqueness clause of step 1.1, the two functions of steps 1.2 and 1.3 are equal, so $\iota(n) = n \cdot 1_F$ for every $n \in \mathbb{N}$. [step 1.1, step 1.2, step 1.3, L5] ∎

## Remarks

- **This is the item the characteristic rests on.** [[def-ring-characteristic]]
  is stated for an arbitrary ring using the additive powers of
  [[def-group-power]]; for a field a reader may already know
  [[def-canonical-natural]], and without the present lemma the page would carry
  two notations for one element and invite the reader to assume they agree. That
  assumption is exactly the defect this item removes, and it is removed by a
  proof rather than by a remark.

- **Uniqueness, not a computation, is what does the work.** Both functions are
  characterised by the same recursion, and [[thm-recursion]] says a recursion of
  that shape has exactly one solution. An induction on $\mathbb{N}$ would prove
  the same thing directly; nothing is gained by writing it out, since the
  uniqueness clause of [[thm-recursion]] is that induction.

- **$\mathbb{N}$ contains $0$, and $\iota(0) = 0_F$**, not $1_F$. So $\iota$ is
  not the map $n \mapsto$ "$1_F$ added to itself $n$ times" for $n \ge 1$ only:
  the value at $0$ is a genuine value of the recursion.
  [[def-canonical-natural]] records the same point, and the published
  [[lem-of-naturals-positive]] states its own recursion from $n = 1$, which
  agrees because $\iota(1) = \iota(0) + 1_F = 1_F$.
