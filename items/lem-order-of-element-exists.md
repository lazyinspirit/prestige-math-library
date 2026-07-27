---
id: lem-order-of-element-exists
kind: lemma
title: "In a finite group, every element $g$ satisfies $g^{n} = e$ for some natural $n \\ge 1$"
status: published
origin: session
deps: [def-group, def-group-power, lem-group-power-laws, lem-group-cancellation, def-countable, lem-pigeonhole, def-equinumerous, def-injection-surjection-bijection, def-nat-order, lem-nat-order-is-membership, def-natural-numbers, lem-nat-trichotomy, lem-nat-nonzero-is-successor, lem-nat-add-commutative]
justified_by: []
aliases: []
landmark: false
short: "finite group: some $g^{n} = e$, $n \\ge 1$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Order (group theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_(group_theory)"
    - title: "Pigeonhole principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pigeonhole_principle"
pipeline_run: null
---

## Statement

Let $G$ be a group ([[def-group]]) whose underlying set is finite
([[def-countable]]), and let $g \in G$. Then there is a natural number $n \ge 1$
with $g^{n} = e$, the power being the natural power of [[def-group-power]].

## Facts & Assumptions

**Given:** A group $G$ with identity $e$ whose underlying set is finite, and an element $g \in G$; natural powers $g^{k}$ with $g^{0} = e$ and $g^{\sigma(k)} = g^{k} g$ ([[def-group-power]]).

[L1] $G$ finite means $G \approx m$ for some $m \in \mathbb{N}$, that is, there is a bijection $\beta : G \to m$ ([[def-countable]], [[def-equinumerous]]).

[L2] Claim 1 of the pigeonhole principle: for every $m \in \mathbb{N}$ there is no injection $\sigma(m) \to m$ ([[lem-pigeonhole]]).

[L3] On $\mathbb{N}$ the order is membership, so the elements of the natural number $\sigma(m)$ are exactly the natural numbers $k < \sigma(m)$, and the elements of $m$ are exactly the natural numbers $k < m$ ([[lem-nat-order-is-membership]], [[def-natural-numbers]]).

[L4] A map $f$ is injective when $f(x) = f(y)$ forces $x = y$; a bijection is injective ([[def-injection-surjection-bijection]]).

[L5] $g^{i+k} = g^{i} g^{k}$ for natural $i, k$, in any monoid ([[lem-group-power-laws]]).

[L6] Cancellation in a group: $gx = gy$ implies $x = y$ ([[lem-group-cancellation]]).

[L7] On $\mathbb{N}$: exactly one of $i < j$, $i = j$, $j < i$ holds ([[lem-nat-trichotomy]]); $i \le j$ means $i + k = j$ for some $k$ ([[def-nat-order]]); every $k \ne 0$ is a successor $\sigma(t) = 1 + t$ ([[lem-nat-nonzero-is-successor]], [[lem-nat-add-commutative]]), so $k \ne 0$ implies $1 \le k$.

## Proof

**Proof technique:** direct.

1.1 Fix a bijection $\beta : G \to m$ with $m \in \mathbb{N}$, available because $G$ is finite. [L1, choose]

2.1 Define $F : \sigma(m) \to m$ by $F(k) := \beta(g^{k})$. This is a function: every element $k$ of $\sigma(m)$ is a natural number, so the natural power $g^{k}$ is defined and lies in $G$, and $\beta$ sends it into $m$. [step 1.1, L3, given]

3.1 $F$ is not injective, since there is no injection $\sigma(m) \to m$. Hence there are $i, j \in \sigma(m)$ with $i \ne j$ and $F(i) = F(j)$. [step 2.1, L2, choose]

4.1 From $\beta(g^{i}) = \beta(g^{j})$ and injectivity of $\beta$ we get $g^{i} = g^{j}$. [step 1.1, step 3.1, L4]

4.2 By trichotomy and $i \ne j$, one of $i < j$ and $j < i$ holds; interchanging the names if necessary, assume $i < j$. Then $i + k = j$ for some $k \in \mathbb{N}$, and $k \ne 0$, since $k = 0$ would give $i = j$. [step 3.1, L7]

5.1 Hence $g^{i} g^{k} = g^{i+k} = g^{j} = g^{i} = g^{i} e$, and cancelling $g^{i}$ on the left gives $g^{k} = e$. [step 4.1, step 4.2, L5, L6, given]

6.1 Finally $k \ne 0$ gives $1 \le k$, so $n := k$ is a natural number with $n \ge 1$ and $g^{n} = e$. [step 4.2, step 5.1, L7] ∎

## Remarks

- **The route avoids "a subset of a finite set is finite".** That statement is not available at this point in the reading order, so the argument does not build an injection $\mathbb{N} \to G$ and contradict finiteness. It uses claim 1 of [[lem-pigeonhole]] directly on the map $k \mapsto \beta(g^{k})$ from $\sigma(m)$ to $m$: the $m+1$ exponents $0, 1, \dots, m$ cannot receive $m+1$ distinct values in a set of $m$ elements.

- **The conclusion is one-sided on purpose.** It asserts that *some* positive power is the identity, not which one. Picking the least such power is what defines $\operatorname{ord}(g)$ ([[def-order-in-a-group]]), and that step needs the well-ordering principle, not this lemma.

- The hypothesis of finiteness cannot be dropped: in $(\mathbb{Z},+)$ the element $1$ satisfies $n \cdot 1 = n \ne 0$ for every $n \ge 1$.
