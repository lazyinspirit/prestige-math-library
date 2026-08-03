---
id: lem-ordered-ring-cone-and-order-agree
kind: lemma
title: "The order presentation and the positive-cone presentation of an ordered ring determine each other: $P = \\{\\, x : 0 < x \\,\\}$ satisfies trichotomy and closure, and $a < b :\\iff b - a \\in P$ recovers the order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-ring, def-ring, def-group, lem-group-inverse-laws, lem-group-cancellation, def-partial-order]
justified_by: []
aliases: []
landmark: false
short: "order ↔ positive cone"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Ordered ring (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_ring"
    - title: "Positive cone (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field#Positive_cone"
pipeline_run: null
---

## Statement

Let $R$ be a ring ([[def-ring]]). Call a subset $P \subseteq R$ a **cone** when

- **(C1) trichotomy:** for each $x \in R$ exactly one of $x \in P$, $x = 0$,
  $-x \in P$ holds;
- **(C2) closure:** if $x, y \in P$ then $x + y \in P$ and $xy \in P$.

Then:

1. If $\le$ makes $R$ an ordered ring ([[def-ordered-ring]]), then
   $P := \{\, x \in R : 0 < x \,\}$ is a cone, and for all $a, b \in R$,
   $a < b$ if and only if $b - a \in P$.
2. Conversely, let $P \subseteq R$ be a cone and define
   $a \le_P b$ to mean $b - a \in P$ or $a = b$. Then $\le_P$ is a total order
   making $R$ an ordered ring, and its positive cone
   $\{\, x \in R : 0 <_P x \,\}$ is $P$.
3. The two constructions are mutually inverse: starting from an ordered ring
   $(R,\le)$, the order $\le_P$ built from its cone $P$ is $\le$ itself; and
   starting from a cone $P$, the cone of $\le_P$ is $P$.

## Facts & Assumptions

**Given:** A ring $R$ with zero $0$; $x - y$ abbreviates $x + (-y)$ ([[def-ring]]).

[L1] $(R,+,0)$ is an abelian group: addition is associative and commutative, $x + 0 = x$, and $x + (-x) = 0$ ([[def-ring]], [[def-group]]).

[L2] Identities of the abelian group $(R,+,0)$, where $x - y := x + (-y)$: $x - 0 = x$; $x - x = 0$; $-(x - y) = y - x$, since $-(u + v) = (-v) + (-u)$ and $-(-y) = y$; $(y - x) + (z - y) = z - x$, by associativity and commutativity; and $x - y = 0$ exactly when $x = y$, by cancellation after adding $y$ ([[def-group]], [[lem-group-inverse-laws]], [[lem-group-cancellation]]).

[L3] A total order is a reflexive, antisymmetric, transitive relation in which any two elements are comparable, and $a < b$ means $a \le b$ with $a \ne b$ ([[def-partial-order]]).

[L4] An ordered ring is a ring with a total order satisfying (OR1) $a \le b$ implies $a + c \le b + c$, and (OR2) $0 < a$ and $0 < b$ imply $0 < ab$ ([[def-ordered-ring]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\le$ makes $R$ an ordered ring, and put $P = \{x : 0 < x\}$. For $a, b \in R$: $a < b$ if and only if $0 < b - a$. Indeed, adding $-a$ to $a \le b$ gives $a - a \le b - a$, that is $0 \le b - a$, by (OR1); adding $a$ to $0 \le b - a$ gives $a \le b$ likewise; and $a = b$ exactly when $b - a = 0$. So $a < b$ exactly when $b - a \in P$. [L1, L2, L4]

1.2 Now let $P$ be any cone and define $\le_P$ as in the statement. Reflexivity holds by the clause $a = a$. Antisymmetry: if $a \ne b$, $b - a \in P$ and $a - b \in P$, then $-(b-a) = a - b \in P$ as well, contradicting trichotomy applied to $x = b - a$; so $a \le_P b$ and $b \le_P a$ force $a = b$. Transitivity: if $a \le_P b$ and $b \le_P c$ and the two are not equalities, then $(c - b) + (b - a) = c - a \in P$ by closure; the cases where one of them is an equality are immediate. Comparability: given $a, b$, trichotomy applied to $b - a$ gives $b - a \in P$, or $b - a = 0$ and then $a = b$, or $a - b = -(b-a) \in P$. So $\le_P$ is a total order. [L1, L2, L3]

2.1 Trichotomy for the positive cone in claim 1. Return here to the ordered-ring order and its set $P=\{x:0<x\}$ from step 1.1. Let $x \in R$. By totality and antisymmetry exactly one of $0 < x$, $0 = x$, $x < 0$ holds. By step 1.1 applied with $a = x$, $b = 0$, the last is equivalent to $0 - x = -x \in P$. So exactly one of $x \in P$, $x = 0$, $-x \in P$ holds. [step 1.1, L2, L3]

2.2 $\le_P$ makes $R$ an ordered ring. (OR1): $(b + c) - (a + c) = b - a$, so $a \le_P b$ implies $a + c \le_P b + c$. (OR2): $0 <_P a$ means $a - 0 = a \in P$, so if $0 <_P a$ and $0 <_P b$ then $ab \in P$ by closure, that is $0 <_P ab$. [step 1.2, L1, L2, L4]

3.1 Closure for $P$. Let $x, y \in P$. Then $0 < x$ and, adding $x$ to $0 \le y$, $x \le x + y$; with $0 < x$ and transitivity this gives $0 < x + y$, so $x + y \in P$. And $xy \in P$ is (OR2) verbatim. So $P$ is a cone, which with step 2.1 and step 1.1 proves claim 1. [step 1.1, step 2.1, L1, L3, L4]

3.2 The cone of $\le_P$ is $P$: $0 <_P x$ means $x - 0 = x \in P$ and $x \ne 0$, and $0 \notin P$ by trichotomy, so $\{x : 0 <_P x\} = P$. With steps 1.2 and 2.2 this proves claim 2. [step 1.2, step 2.2, L2]

4.1 Claim 3. Starting from an ordered ring $(R,\le)$ with cone $P$, step 1.1 says $a < b$ exactly when $b - a \in P$, hence $a \le b$ exactly when $b - a \in P$ or $a = b$, which is $a \le_P b$; so $\le_P$ and $\le$ are the same relation. Starting from a cone $P$, step 3.2 says the cone of $\le_P$ is $P$. [step 1.1, step 2.2, step 3.2] ∎

## Remarks

- **This is what keeps one notion of "ordered" in the library rather than two.** The published [[thm-int-ordered-ring]] presents the order on $\mathbb{Z}$ as a relation; the published [[def-ordered-field]] presents the order on a field by its positive cone. Without this lemma the two would be different-looking hypotheses and every later statement would have to choose one. With it, [[lem-ordered-field-is-an-ordered-ring]] is a two-line consequence.

- **Trichotomy is doing the work in both directions.** In claim 1 it comes from totality plus antisymmetry of the order; in claim 2 it is what supplies comparability and antisymmetry. Closure under addition, by contrast, is a strict statement in one direction and needs transitivity to recover in the other, which is why step 3.1 argues through $x \le x + y$ rather than quoting (OR1) directly.

- **Nothing here uses multiplication except (OR2) and (C2)**, which correspond to each other verbatim. That is why the lemma holds for rings that are not commutative as well.
