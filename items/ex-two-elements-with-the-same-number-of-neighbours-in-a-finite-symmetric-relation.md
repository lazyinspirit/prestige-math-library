---
id: ex-two-elements-with-the-same-number-of-neighbours-in-a-finite-symmetric-relation
kind: example
title: "In a finite set with a symmetric irreflexive relation and at least two elements, two elements have equally many neighbours"
status: draft
origin: session
deps: [thm-the-strong-pigeonhole-principle, def-a-finite-incidence-relation-and-its-fibres,
       def-finite-cardinality, thm-subset-of-a-finite-set, def-injection-surjection-bijection,
       def-nat-order, thm-sum-rule, def-nat-finite-sum-and-product, lem-nat-order-is-membership,
       lem-nat-trichotomy, lem-nat-order-add-compatible, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pigeonhole principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pigeonhole_principle"
    - title: "Handshaking lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Handshaking_lemma"
pipeline_run: null
---

## Example

Let $V$ be a finite set with $N := \lvert V\rvert \ge 2$, and let
$R \subseteq V \times V$ be symmetric and irreflexive
([[def-a-finite-incidence-relation-and-its-fibres]], clause (d)). Write
$d(x) := \lvert R_x\rvert$ for the number of neighbours of $x$. Then there are
$x \ne y$ in $V$ with $d(x) = d(y)$.

The point is that the possible values of $d$ are $0, 1, \dots, N-1$, which is as
many values as $V$ has elements, so counting alone does not settle it. What
settles it is that the two extreme values cannot both occur: if some $x_0$ has no
neighbour then no $y$ can be a neighbour of everything else, since it would then
be a neighbour of $x_0$.

**Concretely**, with $V := 3 = \{0,1,2\}$ and
$R := \{(0,1),(1,0)\}$, the neighbour counts are $d(0) = 1$, $d(1) = 1$ and
$d(2) = 0$, and the elements $0$ and $1$ have equally many neighbours.

## Facts & Assumptions

**Given:** A finite set $V$ with $N = \lvert V\rvert \ge 2$, a symmetric irreflexive relation $R \subseteq V \times V$, and the neighbour counts $d(x) = \lvert R_x\rvert$.

[L1] $R_x \subseteq V \setminus \{x\}$ by irreflexivity, and $R_x$ is finite, so $d(x) \le \lvert V\setminus\{x\}\rvert$ ([[def-a-finite-incidence-relation-and-its-fibres]], [[thm-subset-of-a-finite-set]], clauses 1 and 2).

[L2] $\lvert V\setminus\{x\}\rvert = N - 1$, since $\{x\}$ and $V \setminus \{x\}$ are disjoint with union $V$ and $\lvert\{x\}\rvert = 1$ ([[thm-sum-rule]], clause 1, [[def-finite-cardinality]], [[def-nat-finite-sum-and-product]] for the truncated difference).

[L3] If $d(y) = N-1$ then $R_y = V\setminus\{y\}$, since $R_y$ is a subset of $V \setminus \{y\}$ of the same cardinality ([[thm-subset-of-a-finite-set]], clause 3).

[L4] Symmetry: $x \in R_y$ if and only if $y \in R_x$ ([[def-a-finite-incidence-relation-and-its-fibres]], clause (d)).

[L5] The counting form of the strong pigeonhole principle: if $\lvert A\rvert > 1\cdot\lvert B\rvert$ then some fibre of any $f : A \to B$ has more than one element ([[thm-the-strong-pigeonhole-principle]], clause 1, [[def-injection-surjection-bijection]]).

[L6] Order and membership in $\mathbb{N}$: $k \le N-2$ if and only if $k < N-1$, that is $k \in N-1$; $N \ge 2$ gives $N-1 \ge 1$ and $(N-1)-1 = N-2$; and exactly one of $p<q$, $p=q$, $q<p$ holds ([[lem-nat-order-is-membership]], [[def-nat-order]], [[lem-nat-trichotomy]], [[lem-nat-order-add-compatible]], [[def-natural-numbers]], [[def-nat-finite-sum-and-product]]).

## Verification

**Proof technique:** cases.

1.1 By [L1] and [L2], $d(x) \le N-1$ for every $x \in V$; and $N \ge 2$, so $N-1 \ge 1$ by [L6]. [given, L1, L2, L6]

1.2 The two extreme values cannot both be attained. Suppose $d(x_0) = 0$ and $d(y) = N-1$ for some $x_0, y \in V$. Then $x_0 \ne y$, since $0 \ne N-1$ by [L6]; by [L3] we have $R_y = V\setminus\{y\}$, so $x_0 \in R_y$, so $y \in R_{x_0}$ by [L4], so $d(x_0) \ge 1$, contradicting $d(x_0) = 0$. [L1, L3, L4, L6]

2.1 Case (a): no $x \in V$ has $d(x) = 0$. Then $1 \le d(x) \le N-1$ for every $x$, so $d(x) - 1 \le N-2$, that is $d(x)-1 \in N-1$ by [L6]; thus $x \mapsto d(x)-1$ maps $V$ into the set $N-1$, whose cardinality is $N-1$. Since $N > N-1$, [L5] gives two distinct $x \ne y$ with $d(x)-1 = d(y)-1$, and since both counts are at least $1$ this forces $d(x) = d(y)$. [assume-case pos, step 1.1, L5, L6]

2.2 Case (b): some $x_0 \in V$ has $d(x_0) = 0$. Then by step 1.2 no $y$ has $d(y) = N-1$, so $d(x) \le N-2$ for every $x$ by [L1], [L2] and [L6], that is $d(x) \in N-1$; thus $d$ maps $V$ into the set $N-1$, of cardinality $N-1$. Since $N > N-1$, [L5] gives two distinct $x \ne y$ with $d(x) = d(y)$. [assume-case zero, step 1.1, step 1.2, L1, L2, L5, L6]

3.1 The two cases are exhaustive, so in either case two distinct elements of $V$ have equally many neighbours. [step 2.1, step 2.2, cases-exhaustive] ∎

## Remarks

- **Where $N \ge 2$ is spent.** Twice: to make $N-1$ at least $1$, so that the set of possible values is nonempty and the shift by $1$ in case (a) lands inside $N-1$; and to make $0$ and $N-1$ different, which is what step 1.2 needs.

- **Why the naive count is not enough.** The values of $d$ lie in a set of $N$ naturals and $V$ has $N$ elements, so the pigeonhole principle says nothing until the range is cut down. Both cases cut it to $N-1$ values, one by removing $0$ and one by removing $N-1$, and the exclusion of the other extreme is what licenses the cut.

- **Symmetry and irreflexivity are both used.** Irreflexivity gives the bound $d(x) \le N-1$; symmetry is what turns "$x_0$ is a neighbour of $y$" into "$y$ is a neighbour of $x_0$" in step 1.2. Neither can be dropped.
