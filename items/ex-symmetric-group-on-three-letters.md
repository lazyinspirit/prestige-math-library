---
id: ex-symmetric-group-on-three-letters
kind: example
title: "$\\operatorname{Sym}(\\{1,2,3\\})$ has exactly six elements, is non-abelian, and its elements have orders $1$, $2$ and $3$"
status: published
origin: session
deps: [def-symmetric-group, lem-symmetric-group-is-a-group, def-group, def-group-power, lem-group-power-laws, def-order-in-a-group, lem-order-characterisation, def-countable, def-equinumerous, def-injection-surjection-bijection, def-natural-numbers, lem-nat-transitive-irreflexive]
justified_by: []
aliases: [ex-s3]
landmark: false
short: "$\\operatorname{Sym}(\\{1,2,3\\})$"
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
    - title: "Symmetric group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Symmetric_group"
    - title: "Dihedral group of order 6 (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dihedral_group_of_order_6"
pipeline_run: null
---

## Example

Let $X = \{1,2,3\}$, the three-element set of natural numbers
$1 = \sigma(0)$, $2 = \sigma(1)$, $3 = \sigma(2)$, and let
$G = \operatorname{Sym}(X)$ be its symmetric group ([[def-symmetric-group]]),
a group under composition ([[lem-symmetric-group-is-a-group]]). Then:

1. $G$ has exactly six elements, namely

   $$\mathrm{id},\quad (1\,2),\quad (1\,3),\quad (2\,3),\quad (1\,2\,3),\quad (1\,3\,2),$$

   so $G \approx 6$ and $|G| = 6$ ([[def-order-in-a-group]]);
2. $G$ is not abelian: $(1\,2) \circ (2\,3) = (1\,2\,3)$ while
   $(2\,3) \circ (1\,2) = (1\,3\,2)$;
3. the orders of its elements are $\operatorname{ord}(\mathrm{id}) = 1$,
   $\operatorname{ord} = 2$ for each of the three transpositions, and
   $\operatorname{ord} = 3$ for each of the two $3$-cycles.

## Facts & Assumptions

**Given:** $X = \{1,2,3\}$ and $G = \operatorname{Sym}(X)$ with the operation $f \circ g$, $(f \circ g)(x) = f(g(x))$, and identity $\mathrm{id}$ ([[def-symmetric-group]]).

[L1] $1$, $2$ and $3$ are pairwise distinct natural numbers: $2 = \sigma(1) = 1 \cup \{1\}$ and $3 = \sigma(2) = 2 \cup \{2\} = \{0,1,2\}$, so $1 \in 2$, $2 \in 3$ and $1 \in 3$, while no natural number is a member of itself ([[def-natural-numbers]], [[lem-nat-transitive-irreflexive]]); so $X$ has exactly three elements.

[L2] $\operatorname{Sym}(X)$ is a group under composition; the cycle symbols $(a\,b)$ and $(a\,b\,c)$ denote the permutations described in [[def-symmetric-group]] ([[lem-symmetric-group-is-a-group]], [[def-group]]).

[L3] Two functions $X \to X$ are equal exactly when they agree at every point; a function on $X$ is determined by the triple $(f(1), f(2), f(3))$, and $f$ is a bijection of $X$ exactly when those three values are pairwise distinct, since three distinct values in a three-element set exhaust it ([[def-injection-surjection-bijection]]).

[L4] Powers: $f^{0} = \mathrm{id}$, $f^{1} = f$ and $f^{\sigma(k)} = f^{k} \circ f$ ([[def-group-power]]); $f^{j+k} = f^{j} \circ f^{k}$ and $(f^{j})^{k} = f^{jk}$ ([[lem-group-power-laws]]); $\operatorname{ord}(f)$ is the least $k \ge 1$ with $f^{k} = \mathrm{id}$ ([[def-order-in-a-group]]).

[L5] Finiteness and counting: $A \approx m$ means a bijection $A \to m$ exists, and $|A| = m$ is then the unique such natural ([[def-countable]], [[def-equinumerous]], [[def-order-in-a-group]]).

[L6] If $\operatorname{ord}(f) = k$ then $f^{j} \ne \mathrm{id}$ for $1 \le j < k$, and conversely a $k$ with $f^{k} = \mathrm{id}$ and $f^{j} \ne \mathrm{id}$ for $1 \le j < k$ is the order ([[def-order-in-a-group]], [[lem-order-characterisation]]).

## Verification

**Proof technique:** direct.

1.1 Writing each element of $G$ as the triple of its values at $1, 2, 3$, the six listed permutations are $\mathrm{id} = (1,2,3)$, $(2\,3) = (1,3,2)$, $(1\,2) = (2,1,3)$, $(1\,2\,3) = (2,3,1)$, $(1\,3\,2) = (3,1,2)$ and $(1\,3) = (3,2,1)$. These six triples are pairwise different, so the six permutations are pairwise different. [L1, L2, L3]

1.2 Each transposition $\tau \in \{(1\,2), (1\,3), (2\,3)\}$ satisfies $\tau \circ \tau = \mathrm{id}$, since it exchanges two points and fixes the third, so applying it twice returns every point to itself; and $\tau \ne \mathrm{id}$, since it moves two points. [L2, L3]

1.3 $\operatorname{ord}(\mathrm{id}) = 1$, since $\mathrm{id}^{1} = \mathrm{id}$ and $1$ is the least natural that is $\ge 1$. [L4, L6]

2.1 Every element of $G$ is one of the six. Let $f \in G$; its triple has pairwise distinct entries by [L3]. There are three possible values for $f(1)$; for each, two remaining values for $f(2)$; and then $f(3)$ is forced to be the one element of $X$ left over. Running through those six combinations produces exactly the six triples listed in step 1.1. [step 1.1, L1, L3]

2.2 Composites, computed pointwise. $(1\,2) \circ (2\,3)$ sends $1 \mapsto 1 \mapsto 2$, $2 \mapsto 3 \mapsto 3$, $3 \mapsto 2 \mapsto 1$, giving the triple $(2,3,1)$, which is $(1\,2\,3)$. And $(2\,3) \circ (1\,2)$ sends $1 \mapsto 2 \mapsto 3$, $2 \mapsto 1 \mapsto 1$, $3 \mapsto 3 \mapsto 2$, giving $(3,1,2)$, which is $(1\,3\,2)$. [step 1.1, L2, L3]

2.3 Let $c = (1\,2\,3)$, so $c$ sends $1 \mapsto 2 \mapsto 3 \mapsto 1$. Then $c \circ c$ sends $1 \mapsto 3$, $2 \mapsto 1$, $3 \mapsto 2$, which is the triple $(3,1,2)$, that is $(1\,3\,2)$; and $c \circ c \circ c$ sends $1 \mapsto c(3) = 1$, $2 \mapsto c(1) = 2$, $3 \mapsto c(2) = 3$, so it is $\mathrm{id}$. [step 1.1, L2, L3]

2.4 Each transposition $\tau$ has $\operatorname{ord}(\tau) = 2$: $\tau^{2} = \tau \circ \tau = \mathrm{id}$ by step 1.2, while $\tau^{1} = \tau \ne \mathrm{id}$, so $2$ is the least $k \ge 1$ with $\tau^{k} = \mathrm{id}$. [step 1.2, L4, L6]

3.1 By steps 1.1 and 2.1 the set $G$ consists of exactly the six listed elements, so the map $6 \to G$ sending $0,1,2,3,4,5$ to $\mathrm{id}, (1\,2), (1\,3), (2\,3), (1\,2\,3), (1\,3\,2)$ respectively is a bijection; hence $G \approx 6$ and $|G| = 6$. This is claim 1. [step 1.1, step 2.1, L5]

3.2 By step 2.2 the two composites differ, since the triples $(2,3,1)$ and $(3,1,2)$ differ at $1$; so $G$ is not abelian, which is claim 2. [step 2.2, L3]

3.3 Each of $c = (1\,2\,3)$ and $c^{2} = (1\,3\,2)$ has order $3$: by step 2.3, $c^{3} = \mathrm{id}$, $c^{1} = c \ne \mathrm{id}$ and $c^{2} = (1\,3\,2) \ne \mathrm{id}$, so $\operatorname{ord}(c) = 3$; and $(c^{2})^{3} = c^{6} = \mathrm{id}$ with $c^{2} \ne \mathrm{id}$ and $(c^{2})^{2} = c^{4} = c \ne \mathrm{id}$, so $\operatorname{ord}(c^{2}) = 3$ as well. [step 2.3, L4, L6]

4.1 Claims 1, 2 and 3 are steps 3.1, 3.2 and steps 1.3, 2.4 and 3.3 taken together; the orders occurring are exactly $1$, $2$ and $3$. [step 3.1, step 3.2, step 1.3, step 2.4, step 3.3] ∎

## Remarks

- **This is the first explicitly non-abelian group in the library.** Claim 2 instantiates the general statement of [[lem-symmetric-group-is-a-group]] at the three distinct points $1, 2, 3$; the pair of transpositions used there is the pair used here.

- No element of $G$ has order $6$, by claim 3, so by [[lem-order-characterisation]] every cyclic subgroup $\langle f \rangle$ has at most three elements and none of them is all of $G$: the group is not cyclic. That also follows from claim 2, every cyclic group being abelian ([[lem-cyclic-subgroup-is-the-set-of-powers]]).

- The elements $1$, $2$, $3$ here are the natural numbers of [[def-natural-numbers]], hence sets; nothing in the computation uses anything about them beyond their being three distinct objects.
