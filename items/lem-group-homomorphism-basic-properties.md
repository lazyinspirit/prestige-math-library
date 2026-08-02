---
id: lem-group-homomorphism-basic-properties
kind: lemma
title: "A group homomorphism automatically satisfies $f(e) = e'$ and $f(g^{-1}) = f(g)^{-1}$, and $f(g^{n}) = f(g)^{n}$ for every $n \\in \\mathbb{Z}$; for monoid homomorphisms preservation of the identity must be assumed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-group-homomorphism, def-group, def-semigroup-and-monoid, lem-group-cancellation, lem-group-inverse-laws, lem-inverse-unique, def-group-power, lem-group-power-laws, thm-induction-principle, thm-int-comm-ring, def-int-operations, def-int-order, thm-int-ordered-ring, lem-nat-embeds-int, def-integers]
justified_by: []
aliases: []
landmark: false
short: "$f(e)=e'$, $f(g^{-1})=f(g)^{-1}$, $f(g^{n})=f(g)^{n}$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Group homomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Group_homomorphism"
    - title: "Monoid (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monoid"
pipeline_run: null
---

## Statement

Let $G$ and $G'$ be groups with identities $e$ and $e'$, and let $f : G \to G'$
be a group homomorphism ([[def-group-homomorphism]]), so $f(xy) = f(x)f(y)$ for
all $x, y \in G$. Then:

1. $f(e) = e'$;
2. $f(g^{-1}) = f(g)^{-1}$ for every $g \in G$;
3. $f(g^{n}) = f(g)^{n}$ for every $g \in G$ and every $n \in \mathbb{Z}$, powers
   being those of [[def-group-power]].

For **monoid** homomorphisms the analogue of claim 1 is false, so preservation of
the identity has to be part of the definition: the map $u : \mathbb{Z} \to \mathbb{Z}$
with $u(x) = 0$ for every $x$ satisfies $u(xy) = u(x)u(y)$ for the multiplicative
monoid $(\mathbb{Z},\cdot,1)$, yet $u(1) = 0 \ne 1$.

## Facts & Assumptions

**Given:** Groups $G$, $G'$ with identities $e$, $e'$, and a function $f : G \to G'$ with $f(xy) = f(x)f(y)$ for all $x, y \in G$ ([[def-group-homomorphism]]).

[A1] $f(xy) = f(x)f(y)$ for all $x, y \in G$.

[L1] The group laws in $G$ and in $G'$ ([[def-group]], [[def-semigroup-and-monoid]]).

[L2] Cancellation in $G'$: $ab = ac$ implies $b = c$, and $ba = ca$ implies $b = c$ ([[lem-group-cancellation]]).

[L3] Uniqueness of inverses in the sharp form: if $x$ is invertible and $yx = e'$ or $xy = e'$, then $y = x^{-1}$ ([[lem-inverse-unique]]); and $(u^{-1})^{-1} = u$ ([[lem-group-inverse-laws]]).

[L4] Powers: $g^{0} = e$, $g^{\sigma(k)} = g^{k}g$ for $k \in \mathbb{N}$, and $g^{x} = (g^{k})^{-1}$ when $x < 0$ and $-x = \iota(k)$, where $\iota : \mathbb{N} \to \mathbb{Z}$ is the embedding of [[lem-nat-embeds-int]] with image the nonnegative integers ([[def-group-power]]).

[L5] $g^{-x} = (g^{x})^{-1}$ for every $x \in \mathbb{Z}$ ([[lem-group-power-laws]]).

[L6] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L7] $\mathbb{Z}$ is a totally ordered commutative ring, so exactly one of $0 \le x$ and $x < 0$ holds, and $x < 0$ gives $0 < -x$ ([[thm-int-comm-ring]], [[thm-int-ordered-ring]], [[def-int-operations]], [[def-int-order]], [[def-integers]]).

[L8] $(\mathbb{Z},\cdot,1)$ is a commutative monoid: multiplication on $\mathbb{Z}$ is associative and commutative with $x \cdot 1 = x$, and $x \cdot 0 = 0$ for every $x$ ([[thm-int-comm-ring]], [[def-int-operations]]).

## Proof

**Proof technique:** direct.

1.1 Applying [A1] with $x = y = e$ gives $f(e) = f(e\,e) = f(e)f(e)$; and $f(e) = e' f(e)$ because $e'$ is the identity of $G'$. [A1, L1]

1.2 Applying [A1] with $y = g^{-1}$ gives $f(g)f(g^{-1}) = f(g g^{-1}) = f(e)$. [A1, L1]

1.3 Base of claim 3 for natural exponents: $f(g^{0}) = f(e)$ and $f(g)^{0} = e'$. [L4]

1.4 The monoid statement. In the commutative monoid $(\mathbb{Z},\cdot,1)$ the constant map $u(x) = 0$ satisfies $u(xy) = 0 = 0 \cdot 0 = u(x)u(y)$ for all $x, y$, so it obeys the product law; but $u(1) = 0$ and the identity of the monoid is $1$, and $0 \ne 1$ in $\mathbb{Z}$. So a map obeying the product law between monoids need not send the identity to the identity, and (H2) is not redundant there. [L8, given]

2.1 From $e' f(e) = f(e)f(e)$ and cancellation in $G'$ we get $f(e) = e'$, which is claim 1. [step 1.1, L2]

3.1 By steps 1.2 and 2.1, $f(g)f(g^{-1}) = e'$, so $f(g^{-1})$ is a right inverse of the invertible element $f(g)$, and uniqueness of inverses gives $f(g^{-1}) = f(g)^{-1}$: claim 2. [step 1.2, step 2.1, L3]

3.2 Claim 3 for natural exponents. The set of $k \in \mathbb{N}$ with $f(g^{k}) = f(g)^{k}$ contains $0$, by step 1.3 and step 2.1, which give $f(g^{0}) = f(e) = e' = f(g)^{0}$; and it is closed under $\sigma$, since $f(g^{\sigma(k)}) = f(g^{k} g) = f(g^{k}) f(g) = f(g)^{k} f(g) = f(g)^{\sigma(k)}$. By induction it is all of $\mathbb{N}$. [step 1.3, step 2.1, A1, L4, L6]

4.1 Claim 3 for negative exponents. Let $x < 0$ and write $-x = \iota(k)$ with $k \in \mathbb{N}$, possible since $0 < -x$. Then $g^{x} = (g^{k})^{-1}$, so $f(g^{x}) = f\bigl((g^{k})^{-1}\bigr) = f(g^{k})^{-1} = \bigl(f(g)^{k}\bigr)^{-1} = f(g)^{x}$, the last equality being the definition of the negative power of $f(g)$. [step 3.1, step 3.2, L4, L5, L7]

5.1 Every integer is either nonnegative, hence of the form $\iota(k)$ and covered by step 3.2, or negative and covered by step 4.1; so claim 3 holds for every $n \in \mathbb{Z}$. [step 3.2, step 4.1, L4, L7]

6.1 Claims 1, 2 and 3 are steps 2.1, 3.1 and 5.1, and step 1.4 shows the corresponding automatic identity preservation fails for monoids. [step 2.1, step 3.1, step 5.1, step 1.4] ∎

## Remarks

- **Cancellation is the whole difference.** Step 2.1 turns $f(e)f(e) = e'f(e)$ into $f(e) = e'$, and it can do so only because $G'$ is a group. In a monoid the element $f(e)$ is merely idempotent, and idempotents other than the identity exist, as $0$ in $(\mathbb{Z},\cdot)$ shows.

- **Claim 3 is what makes homomorphisms interact with orders.** It gives $f(g)^{n} = e'$ whenever $g^{n} = e$, so the order of $f(g)$ divides the order of $g$ when the latter is finite ([[lem-order-characterisation]]). That consequence is used from the next page onwards.

- Only one of the two one-sided equations is checked in step 3.1. That is enough: $f(g)$ is invertible in the group $G'$, and for an invertible element a single one-sided equation identifies the inverse ([[lem-inverse-unique]]).
