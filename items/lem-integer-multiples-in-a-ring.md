---
id: lem-integer-multiples-in-a-ring
kind: lemma
title: "Integer multiples in a ring: $(m + n)a = ma + na$, $m(a + b) = ma + mb$, $(ma)b = m(ab) = a(mb)$ and $(ma)(nb) = (mn)(ab)$ for all $m, n \\in \\mathbb{Z}$ and $a, b \\in R$"
status: published
origin: session
deps: [def-ring, def-group, def-group-power, lem-group-power-laws, lem-ring-elementary-consequences, thm-induction-principle, def-natural-numbers, def-integers, def-int-operations, thm-int-comm-ring, thm-int-ordered-ring, def-int-order, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: false
short: "arithmetic of $ma$"
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Ring (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ring_(mathematics)"
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
pipeline_run: null
---

## Statement

Let $R$ be a ring ([[def-ring]]). For $m \in \mathbb{Z}$ and $a \in R$ write $ma$
for the integer power of $a$ in the additive group $(R,+,0)$, read in additive
notation as in [[def-group-power]]: thus $0a = 0$, $\sigma(n)a = na + a$ for
$n \in \mathbb{N}$, and $ma = -(ka)$ when $m < 0$ and $-m$ is the image of
$k \in \mathbb{N}$ under the embedding of [[lem-nat-embeds-int]]. Throughout, a
natural number written where an integer is expected means its image under that
embedding.

Then for all $m, n \in \mathbb{Z}$ and all $a, b \in R$:

1. $(m + n)a = ma + na$;
2. $m(a + b) = ma + mb$;
3. $(ma)b = m(ab) = a(mb)$;
4. $(ma)(nb) = (mn)(ab)$;
5. $ma = (m\,1)a = a(m\,1)$, where $1$ is the identity of $R$.

No commutativity of $R$ is assumed. The symbol $ma$ is not a product in $R$: an
integer is not an element of $R$, and claim 5 is the precise statement that the
multiple $ma$ *is* nevertheless a product in $R$, namely the product of $a$ with
the ring element $m\,1$.

## Facts & Assumptions

**Given:** A ring $R$ with zero $0$ and identity $1$, elements $a, b \in R$, integers $m, n \in \mathbb{Z}$, and multiples $ma$ as described in the Statement ([[def-ring]], [[def-group-power]]).

[L1] $(R,+,0)$ is an abelian group, $(R,\cdot,1)$ is a monoid, and both distributive laws hold ([[def-ring]], [[def-group]]).

[L2] The defining recursion for multiples: $0a = 0$ and $\sigma(n)a = na + a$ for $n \in \mathbb{N}$; and $ma = -(ka)$ when $m < 0$ and $-m = \iota(k)$ ([[def-group-power]]).

[L3] Exponent laws in a group, read additively in $(R,+,0)$: $(x+y)a = xa + ya$; $(-x)a = -(xa)$; $y(xa) = (xy)a$; and $x(u+v) = xu + xv$ whenever $u$ and $v$ commute, all for $x, y \in \mathbb{Z}$ ([[lem-group-power-laws]]).

[L4] Ring arithmetic: $0 \cdot x = x \cdot 0 = 0$ and $(-x)y = -(xy) = x(-y)$ ([[lem-ring-elementary-consequences]]).

[L5] Induction on $\mathbb{N}$ ([[thm-induction-principle]]), and $\mathbb{N}$ contains $0$ ([[def-natural-numbers]]).

[L6] $\iota : \mathbb{N} \to \mathbb{Z}$ is injective, preserves addition, multiplication and order, and its image is exactly the nonnegative integers ([[lem-nat-embeds-int]], [[def-integers]]).

[L7] $\mathbb{Z}$ is a totally ordered commutative ring: multiplication on $\mathbb{Z}$ is commutative, exactly one of $0 \le x$ and $x < 0$ holds, and $x < 0$ implies $0 < -x$ ([[thm-int-comm-ring]], [[thm-int-ordered-ring]], [[def-int-order]], [[def-int-operations]]).

## Proof

**Proof technique:** induction.

1.1 Claim 1 is the first exponent law of [L3] read additively in the group $(R,+,0)$: $(m+n)a = ma + na$. [L1, L3]

1.2 Claim 2: addition in $R$ is commutative, so any two elements of $(R,+,0)$ commute, and the last law of [L3] applies with $u = a$, $v = b$ to give $m(a+b) = ma + mb$. [L1, L3]

1.3 Base of claim 3 at the exponent $0$: $(0a)b = 0 \cdot b = 0$, $0(ab) = 0$ and $a(0b) = a \cdot 0 = 0$, so all three agree. [base, L2, L4]

1.4 Inductive hypothesis for claim 3: fix $n \in \mathbb{N}$ and assume $(na)b = n(ab)$ and $a(nb) = n(ab)$ for all $a, b \in R$. [ih]

2.1 Successor step: $(\sigma(n)a)b = (na + a)b = (na)b + ab = n(ab) + ab = \sigma(n)(ab)$, by the recursion, the right distributive law and the hypothesis; and $a(\sigma(n)b) = a(nb + b) = a(nb) + ab = n(ab) + ab = \sigma(n)(ab)$, by the recursion, the left distributive law and the hypothesis. [step 1.4, L1, L2]

3.1 By induction, $(ka)b = k(ab) = a(kb)$ for every $k \in \mathbb{N}$ and all $a, b \in R$. [step 1.3, step 2.1, L5]

4.1 Negative exponents. Let $m < 0$, so $0 < -m$ and $-m = \iota(k)$ for a unique $k \in \mathbb{N}$. Then $(ma)b = (-(ka))b = -((ka)b) = -(k(ab)) = ((-k)(ab)) = m(ab)$, and likewise $a(mb) = a(-(kb)) = -(a(kb)) = -(k(ab)) = m(ab)$, using the second clause of the recursion, the sign rules of [L4], step 3.1, and $(-x)c = -(xc)$ from [L3]. [step 3.1, L2, L3, L4, L6, L7]

5.1 Claim 3 in full: for $m \in \mathbb{Z}$ either $0 \le m$, in which case $m = \iota(k)$ for some $k \in \mathbb{N}$ and step 3.1 applies, or $m < 0$, in which case step 4.1 applies; exactly one of the two holds. [step 3.1, step 4.1, L6, L7]

6.1 Claim 4: applying claim 3 first with the pair $(a, nb)$ and then with the pair $(a,b)$, $(ma)(nb) = m\bigl(a(nb)\bigr) = m\bigl(n(ab)\bigr) = (nm)(ab) = (mn)(ab)$, the third equality being $y(xc) = (xy)c$ from [L3] with $x = n$, $y = m$, and the fourth commutativity of multiplication in $\mathbb{Z}$. [step 5.1, L3, L7]

6.2 Claim 5: applying claim 3 with the pair $(1,a)$ gives $(m\,1)a = m(1 \cdot a) = ma$, and applying it with the pair $(a,1)$ gives $a(m\,1) = m(a \cdot 1) = ma$, using the identity law of the multiplicative monoid. [step 5.1, L1]

7.1 Claims 1 to 5 are established: claim 1 in step 1.1, claim 2 in step 1.2, claim 3 in step 5.1, claim 4 in step 6.1 and claim 5 in step 6.2. [step 1.1, step 1.2, step 5.1, step 6.1, step 6.2, discharge-induction] ∎

## Remarks

- **Nothing here is a new recursion.** The multiples $ma$ are the integer powers
  of [[def-group-power]] applied to the additive group of $R$ and nothing else,
  so claims 1 and the law $n(ma) = (nm)a$ are quoted from
  [[lem-group-power-laws]] rather than reproved. What is genuinely new is claim
  3, which is the only place the multiplicative structure enters, and it is
  exactly the point at which distributivity is used.

- **Why claim 5 is worth stating separately.** It converts a statement about
  repeated addition into a statement about a single ring product, and that is
  what makes the characteristic of a ring ([[def-ring-characteristic]]) a
  statement about the element $m\,1$ rather than about $a$ for every $a$ at
  once; [[lem-characteristic-and-additive-order]] uses it in exactly that way.

- The proof needs the order on $\mathbb{Z}$ only to know that every integer is
  either the image of a natural number or the negative of one. That is the same
  case split [[def-group-power]] performs when it defines $g^{x}$, and it is
  performed on the sign of the integer rather than on a representative of it.
