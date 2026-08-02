---
id: def-monoid-finite-product
kind: definition
title: "The product $g_0 g_1 \\cdots g_{n-1}$ of a finite list in a monoid, by recursion, with the empty product ($n = 0$) equal to the identity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-semigroup-and-monoid, thm-recursion, def-natural-numbers, def-binary-operation, thm-induction-principle, lem-nat-order-is-membership]
justified_by: []
aliases: [def-finite-product-in-a-monoid]
landmark: false
short: "$\\prod_{i<n} g_i$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Monoid (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monoid"
    - title: "Empty product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_product"
pipeline_run: null
---

## Definition

Let $(M,\cdot,e)$ be a monoid ([[def-semigroup-and-monoid]]) and let
$g : \mathbb{N} \to M$ be a family of elements of $M$, written $g_i := g(i)$.
There is exactly one function $P_g : \mathbb{N} \to M$ satisfying

$$P_g(0) = e, \qquad P_g(\sigma(n)) = P_g(n) \cdot g_n \quad (n \in \mathbb{N}),$$

and we write

$$\prod_{i<n} g_i \;:=\; P_g(n), \qquad \text{also written } g_0 g_1 \cdots g_{n-1}.$$

In particular the **empty product** is $\prod_{i<0} g_i = e$, and
$\prod_{i<1} g_i = e \cdot g_0 = g_0$.

**Why the recursion is legitimate.** The clause $P_g(\sigma(n)) = P_g(n) \cdot g_n$
consults $n$ as well as $P_g(n)$, so [[thm-recursion]] does not apply to it
directly. Apply that theorem instead with the set $A = \mathbb{N} \times M$, the
element $a = (0,e)$, and the function $F : A \to A$ given by
$F(n,x) = (\sigma(n),\, x \cdot g_n)$: it yields a unique
$H : \mathbb{N} \to \mathbb{N} \times M$ with $H(0) = (0,e)$ and
$H(\sigma(n)) = F(H(n))$. Writing $H(n) = (H_1(n), H_2(n))$, induction
([[thm-induction-principle]]) gives $H_1(n) = n$ for every $n$, since $H_1(0) = 0$
and $H_1(\sigma(n)) = \sigma(H_1(n))$. Hence
$H(\sigma(n)) = (\sigma(n),\, H_2(n) \cdot g_n)$, so $P_g := H_2$ satisfies the two
displayed equations. It is the only such function: if $Q$ satisfies them too, then
$\{ n : P_g(n) = Q(n) \}$ contains $0$ and is closed under $\sigma$, hence is all
of $\mathbb{N}$ by induction.

**The value depends only on $g_0,\dots,g_{n-1}$.** If $g, g' : \mathbb{N} \to M$
satisfy $g_i = g'_i$ for every $i < n$, then $P_g(n) = P_{g'}(n)$. Indeed the set
of $n$ for which this implication holds contains $0$, both products then being
$e$; and if it holds at $n$, and $g, g'$ agree at every $i < \sigma(n)$, then they
agree at every $i < n$ and also at $n$ itself, because $i < \sigma(n)$ is
equivalent to $i \le n$ ([[lem-nat-order-is-membership]]), so
$P_g(\sigma(n)) = P_g(n) \cdot g_n = P_{g'}(n) \cdot g'_n = P_{g'}(\sigma(n))$.
Induction finishes it. This is what makes the notation $g_0 g_1 \cdots g_{n-1}$
unambiguous: it names a value determined by the first $n$ terms alone, and a
finite list $u$ of length $n$, that is a function $u : n \to M$ on the von Neumann
natural $n = \{0,\dots,n-1\}$ ([[def-natural-numbers]]), determines the product
$\prod_{i<n} u_i := P_{\tilde u}(n)$ computed from any extension
$\tilde u : \mathbb{N} \to M$ of $u$.

## Remarks

- **The empty product is the identity, and this is not a convention chosen for
  convenience.** It is forced by the recursion, whose base clause is
  $P_g(0) = e$, and it is what makes the induction in
  [[thm-generalised-associativity]] start. $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]), so $n = 0$ is a genuine case of every statement
  below, never an afterthought.

- **The factors are multiplied left to right**: $P_g(\sigma(n))$ appends $g_n$ on
  the right. Nothing depends on that choice, because
  [[thm-generalised-associativity]] shows the value is unchanged by any
  regrouping of consecutive factors; but the choice must be made, since the
  recursion has to say where the new factor goes.

- The existing [[def-finite-sum]] is a different object: it is stated for
  sequences $\mathbb{N} \to \mathbb{R}$ in the complete ordered field, and its
  multiplicative alias already names the product of real numbers. It cannot carry
  a product in an arbitrary monoid, which is why this item exists.
