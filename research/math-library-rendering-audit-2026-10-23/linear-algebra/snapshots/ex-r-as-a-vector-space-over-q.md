---
id: ex-r-as-a-vector-space-over-q
kind: example
title: "$\\mathbb{R}$ is a vector space over itself, over the embedded copy of $\\mathbb{Q}$ by restriction of scalars, and over $\\mathbb{Q}$ itself via the embedding"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-restriction-of-scalars, def-vector-space, def-subfield, def-field, def-ordered-field, def-field-homomorphism, lem-of-q-embeds, thm-rat-field, thm-reals-field, thm-reals-ordered-field, def-real-numbers]
justified_by: []
aliases: []
landmark: false
short: "$\\mathbb{R}$ over $\\mathbb{R}$ and over $\\mathbb{Q}$"
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
    - title: "Vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_space"
    - title: "Restriction of scalars (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Restriction_of_scalars"
pipeline_run: null
---

## Example

Let $\mathbb{R}$ be the real numbers ([[def-real-numbers]]), a field
([[thm-reals-field]]) and an ordered field ([[thm-reals-ordered-field]],
[[def-ordered-field]]), and let $\mathbb{Q}$ be the rationals, a field
([[thm-rat-field]]).

1. $\mathbb{R}$ is a vector space over itself ([[def-vector-space]]): the vectors
   are the reals, the vector addition is the field addition, the zero vector is
   $0$, and the scalar multiplication is the field multiplication.
2. Let $\iota : \mathbb{Q} \to \mathbb{R}$ be the unique field homomorphism
   ([[lem-of-q-embeds]], [[def-field-homomorphism]]), which is injective and
   order-preserving. Its image
   $\mathbb{Q}_{\mathbb{R}} := \iota[\mathbb{Q}] = \{\, \iota(q) : q \in \mathbb{Q} \,\}$
   is a subfield of $\mathbb{R}$ ([[def-subfield]]), and by restriction of scalars
   ([[lem-restriction-of-scalars]]) $\mathbb{R}$ is a vector space over
   $\mathbb{Q}_{\mathbb{R}}$, the scalar multiplication being the field
   multiplication restricted to $\mathbb{Q}_{\mathbb{R}} \times \mathbb{R}$.
3. Setting $q \cdot x := \iota(q)\,x$ for $q \in \mathbb{Q}$ and $x \in \mathbb{R}$
   makes $\mathbb{R}$ a vector space over $\mathbb{Q}$ itself.

**The subfield is the image, not $\mathbb{Q}$.** $\mathbb{Q}$ is not a subset of
$\mathbb{R}$ in this library: a rational is a class of pairs of integers and a
real is a class of Cauchy sequences of rationals ([[def-real-numbers]]). What
sits inside $\mathbb{R}$ as a subfield is the image $\mathbb{Q}_{\mathbb{R}}$ of
the embedding, and claim 2 is a statement about that image. Claim 3 is the
statement about $\mathbb{Q}$ itself, and it is proved directly rather than by
restricting scalars, because restriction of scalars requires a subfield.

## Facts & Assumptions

**Given:** The field $\mathbb{R}$, the field $\mathbb{Q}$, and the map $\iota : \mathbb{Q} \to \mathbb{R}$ of [[lem-of-q-embeds]].

[L1] $\mathbb{R}$ is a field ([[thm-reals-field]], [[def-real-numbers]]) and is an ordered field with positive cone as in [[def-ordered-field]] ([[thm-reals-ordered-field]]).

[L2] $\mathbb{Q}$ is a field ([[thm-rat-field]]).

[L3] There is a unique field homomorphism $\iota : \mathbb{Q} \to \mathbb{R}$, and it is injective and order-preserving ([[lem-of-q-embeds]]).

[L4] A field homomorphism $\varphi$ satisfies $\varphi(x+y) = \varphi(x)+\varphi(y)$, $\varphi(xy) = \varphi(x)\varphi(y)$ and $\varphi(1) = 1$, and consequently $\varphi(0) = 0$, $\varphi(-x) = -\varphi(x)$ and $\varphi(x^{-1}) = \varphi(x)^{-1}$ for $x \ne 0$ ([[def-field-homomorphism]]).

[L5] A subfield of a field $F$ is a subring of $F$ containing $x^{-1}$ for each of its nonzero elements; equivalently, a subset containing $1_F$ and closed under $a - b$ and $ab$, and containing $x^{-1}$ for each of its nonzero elements. Such a subset contains $0_F$ and is closed under addition and additive inverses ([[def-subfield]]).

[L6] A field is a vector space over itself, and over any subfield $K$ of $F$ every $F$-vector space is a $K$-vector space by restricting the scalar multiplication to $K$ ([[lem-restriction-of-scalars]]).

[L7] The vector space axioms (V1)–(V5) ([[def-vector-space]]), and the field axioms of $\mathbb{R}$: $(\mathbb{R},+,0)$ is an abelian group, multiplication is associative and commutative with identity $1$, and it distributes over addition ([[def-field]]).

## Verification

**Proof technique:** direct.

1.1 $\mathbb{R}$ is a field, so it is a vector space over itself with the field addition as vector addition and the field multiplication as scalar multiplication; this is claim 1. [L1, L6]

1.2 Since $\mathbb{R}$ is an ordered field, there is a unique field homomorphism $\iota : \mathbb{Q} \to \mathbb{R}$, and it is injective. [L1, L2, L3]

1.3 $\mathbb{Q}_{\mathbb{R}} = \iota[\mathbb{Q}]$ is a subfield of $\mathbb{R}$: it contains $\iota(0) = 0$ and $\iota(1) = 1$; for $p, q \in \mathbb{Q}$ it contains $\iota(p) + \iota(q) = \iota(p+q)$, $-\iota(q) = \iota(-q)$ and $\iota(p)\iota(q) = \iota(pq)$; and if $\iota(q) \ne 0$ then $q \ne 0$, since $\iota(0) = 0$, so $\iota(q)^{-1} = \iota(q^{-1}) \in \mathbb{Q}_{\mathbb{R}}$. [L2, L3, L4, L5]

1.4 The assignment $(q,x) \mapsto \iota(q)\,x$ is a map $\mathbb{Q} \times \mathbb{R} \to \mathbb{R}$, since $\iota(q) \in \mathbb{R}$ and the field multiplication of $\mathbb{R}$ takes values in $\mathbb{R}$. [L3, L7]

2.1 Applying restriction of scalars to the $\mathbb{R}$-vector space of step 1.1 and the subfield of step 1.3 shows that $\mathbb{R}$ is a vector space over $\mathbb{Q}_{\mathbb{R}}$, with the field multiplication restricted to $\mathbb{Q}_{\mathbb{R}} \times \mathbb{R}$ as scalar multiplication; this is claim 2. [step 1.1, step 1.3, L6]

2.2 The operation of step 1.4 satisfies the five axioms over $\mathbb{Q}$. (V1) holds because $(\mathbb{R},+,0)$ is an abelian group. For $p, q \in \mathbb{Q}$ and $x, y \in \mathbb{R}$: $q \cdot (x+y) = \iota(q)(x+y) = \iota(q)x + \iota(q)y = q\cdot x + q\cdot y$ by distributivity, which is (V2); $(p+q)\cdot x = \iota(p+q)x = (\iota(p)+\iota(q))x = \iota(p)x + \iota(q)x = p\cdot x + q\cdot x$ by additivity of $\iota$ and distributivity, which is (V3); $(pq)\cdot x = \iota(pq)x = (\iota(p)\iota(q))x = \iota(p)(\iota(q)x) = p\cdot(q\cdot x)$ by multiplicativity of $\iota$ and associativity, which is (V4); and $1 \cdot x = \iota(1)x = 1\,x = x$, which is (V5). [step 1.4, L3, L4, L7]

3.1 Claim 1 is step 1.1, claim 2 is step 2.1, and claim 3 is step 2.2, so $\mathbb{R}$ carries all three structures at once: over itself, over the embedded copy of $\mathbb{Q}$ inside it, and over $\mathbb{Q}$. [step 1.1, step 2.1, step 2.2] ∎

## Remarks

- **Three structures on one set.** The vectors are the same reals throughout and the addition is the same in all three cases; what changes is which scalars are allowed to act. Claims 2 and 3 differ only in bookkeeping: the scalars are the elements of $\mathbb{Q}_{\mathbb{R}}$ in one and the elements of $\mathbb{Q}$ in the other, and $\iota$ matches them up bijectively, being injective onto its image.

- **Nothing here is said about size.** How big $\mathbb{R}$ is as a vector space over $\mathbb{Q}$ is a question about bases and dimension, which are developed on a later page; no claim about either is made above, and the verification uses neither.

- **Why the ordered field hypothesis appears at all.** The embedding $\iota$ is supplied by [[lem-of-q-embeds]], which is stated for an ordered field, and $\mathbb{R}$ is one. The order plays no further role: once $\iota$ is in hand, every step above uses only that it is a field homomorphism.
