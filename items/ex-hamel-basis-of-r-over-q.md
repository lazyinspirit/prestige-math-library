---
id: ex-hamel-basis-of-r-over-q
kind: example
title: "$\\mathbb{R}$ as a vector space over $\\mathbb{Q}$ has a basis, and every such basis is infinite; the existence proof exhibits none"
status: draft
origin: session
deps: [cor-every-vector-space-has-a-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-linear-basis, def-linear-independence, def-dimension, def-linear-combination-and-span, def-monoid-finite-product, lem-restriction-of-scalars, def-subfield, def-field-homomorphism, lem-of-q-embeds, def-ordered-field, thm-reals-ordered-field, thm-rationals-countable, thm-product-of-countable, thm-r-uncountable, lem-subset-of-countable, lem-pigeonhole, def-countable, def-equinumerous, def-injection-surjection-bijection, def-function-space, def-vector-space, def-field, def-rationals, def-real-numbers, thm-rat-field, thm-reals-field, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: [ex-hamel-basis]
landmark: false
short: "a Hamel basis of $\\mathbb{R}$ over $\\mathbb{Q}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Hamel basis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Example

Let $\mathbb{R}$ be the real numbers ([[def-real-numbers]]), a field
([[thm-reals-field]]) and an ordered field ([[thm-reals-ordered-field]],
[[def-ordered-field]]), and let $\mathbb{Q}$ be the rationals
([[def-rationals]]), a field ([[thm-rat-field]]). Let
$\iota : \mathbb{Q} \to \mathbb{R}$ be the unique field homomorphism
([[lem-of-q-embeds]], [[def-field-homomorphism]]), which is injective, and put
$\mathbb{Q}_{\mathbb{R}} := \iota[\mathbb{Q}]$. Then:

1. $\mathbb{Q}_{\mathbb{R}}$ is a subfield of $\mathbb{R}$ ([[def-subfield]]) and
   $\mathbb{R}$ is a vector space over $\mathbb{Q}_{\mathbb{R}}$ by restriction of
   scalars ([[lem-restriction-of-scalars]]); setting $q \cdot x := \iota(q)\,x$
   also makes $\mathbb{R}$ a vector space over $\mathbb{Q}$ itself;
2. $\mathbb{R}$ has a basis over $\mathbb{Q}_{\mathbb{R}}$
   ([[def-linear-basis]], [[cor-every-vector-space-has-a-basis]]);
3. $\mathbb{R}$ is infinite-dimensional over $\mathbb{Q}_{\mathbb{R}}$
   ([[def-dimension]]): **no** basis of $\mathbb{R}$ over
   $\mathbb{Q}_{\mathbb{R}}$ is finite;
4. the two structures of claim 1 have the same linearly independent subsets, the
   same spans and the same bases, so claims 2 and 3 hold verbatim for
   $\mathbb{R}$ as a $\mathbb{Q}$-vector space.

**The existence proof exhibits no basis.** Claim 2 comes from
[[cor-every-vector-space-has-a-basis]], which runs through Zorn's lemma and
therefore through the Axiom of Choice; nothing in it names a real number
belonging to the basis it produces. That is a statement about *this* proof. It is
**not** claimed here that no basis can be exhibited by any means: that would be a
metamathematical assertion about what is definable, and this library has
established nothing of the kind.

## Facts & Assumptions

**Given:** The field $\mathbb{R}$, the field $\mathbb{Q}$, the unique field homomorphism $\iota : \mathbb{Q} \to \mathbb{R}$, and $\mathbb{Q}_{\mathbb{R}} = \iota[\mathbb{Q}]$.

[L1] There is a unique field homomorphism $\iota : \mathbb{Q} \to \mathbb{R}$ and it is injective ([[lem-of-q-embeds]]); a field homomorphism satisfies $\varphi(x+y) = \varphi(x)+\varphi(y)$, $\varphi(xy) = \varphi(x)\varphi(y)$, $\varphi(1) = 1$, $\varphi(0) = 0$, $\varphi(-x) = -\varphi(x)$ and $\varphi(x^{-1}) = \varphi(x)^{-1}$ for $x \ne 0$ ([[def-field-homomorphism]]); a subfield is a subset containing $1$, closed under $a - b$ and $ab$, and containing $x^{-1}$ for each nonzero $x$ in it ([[def-subfield]]).

[L2] A field is a vector space over itself, and an $F$-vector space is a $K$-vector space for every subfield $K \subseteq F$ by restricting the scalar multiplication ([[lem-restriction-of-scalars]], [[def-vector-space]], [[def-field]]).

[L3] Every vector space has a basis ([[cor-every-vector-space-has-a-basis]]); a basis is a linearly independent spanning subset, an ordered basis is an injective list whose image is a basis, and $\dim_F V$ is defined exactly when some basis is finite ([[def-linear-basis]], [[def-linear-independence]], [[def-dimension]], [[def-linear-combination-and-span]]).

[L4] A list $v : n \to V$ is an ordered basis if and only if every $x \in V$ is $\sum_{i<n}\lambda_i v_i$ for exactly one $\lambda : n \to F$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]); finite sums are those of [[def-monoid-finite-product]] read additively.

[L5] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); a product of two at most countable sets is at most countable ([[thm-product-of-countable]]); a subset of an at most countable set is at most countable ([[lem-subset-of-countable]]); $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]); a finite set is equinumerous with exactly one natural ([[lem-pigeonhole]]); "at most countable" means finite or equinumerous with $\mathbb{N}$, and this property transfers along a bijection ([[def-countable]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L6] $K^{X}$ is the set of functions $X \to K$ ([[def-function-space]]); $\sigma(n) = n \cup \{n\}$ with $n \notin n$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]); induction ([[thm-induction-principle]]).

## Verification

**Proof technique:** direct.

1.1 Claim 1. $\mathbb{Q}_{\mathbb{R}} = \iota[\mathbb{Q}]$ is a subfield of $\mathbb{R}$: it contains $\iota(1) = 1$; for $p, q \in \mathbb{Q}$ it contains $\iota(p) - \iota(q) = \iota(p-q)$ and $\iota(p)\iota(q) = \iota(pq)$; and if $\iota(q) \ne 0$ then $q \ne 0$, since $\iota(0) = 0$, so $\iota(q)^{-1} = \iota(q^{-1}) \in \mathbb{Q}_{\mathbb{R}}$. Since $\mathbb{R}$ is a vector space over itself, restriction of scalars makes it a vector space over $\mathbb{Q}_{\mathbb{R}}$, with the field multiplication restricted to $\mathbb{Q}_{\mathbb{R}} \times \mathbb{R}$. The operation $(q,x) \mapsto \iota(q)x$ is a map $\mathbb{Q} \times \mathbb{R} \to \mathbb{R}$, and it satisfies (V2) to (V5) because $\iota$ preserves sums and products and $\iota(1) = 1$, while (V1) is the abelian group $(\mathbb{R},+,0)$; so it makes $\mathbb{R}$ a vector space over $\mathbb{Q}$. [L1, L2]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is at most countable: $\iota$ is injective with image $\mathbb{Q}_{\mathbb{R}}$, hence a bijection $\mathbb{Q} \to \mathbb{Q}_{\mathbb{R}}$, and $\mathbb{Q} \approx \mathbb{N}$; composing bijections gives $\mathbb{Q}_{\mathbb{R}} \approx \mathbb{N}$. [L1, L5]

1.3 If $K$ is at most countable then so is $K^{n}$, the set of functions $n \to K$, for every $n \in \mathbb{N}$. By induction on $n$: at $n = 0$ the set $K^{0}$ has exactly one element, the empty function, so it is finite; and the map $K^{\sigma(n)} \to K^{n} \times K$ sending $f$ to the pair consisting of its restriction to $n$ and its value at $n$ is a bijection, since $\sigma(n) = n \cup \{n\}$ and $n \notin n$, so a function on $\sigma(n)$ is determined by, and may be assembled from, those two data. Hence $K^{\sigma(n)} \approx K^{n} \times K$, which is at most countable by the inductive hypothesis and the product theorem, and countability transfers along the bijection. [L5, L6]

1.4 Claim 4. For a list $v : n \to \mathbb{R}$ and scalars $\lambda : n \to \mathbb{Q}$, the vector $\sum_{i<n}\lambda_i \cdot v_i$ computed in the $\mathbb{Q}$-structure is by definition $\sum_{i<n}\iota(\lambda_i)v_i$, computed in the $\mathbb{Q}_{\mathbb{R}}$-structure; the two structures have the same underlying set, the same addition and the same zero, so their finite sums agree. Since $\iota$ is a bijection $\mathbb{Q} \to \mathbb{Q}_{\mathbb{R}}$, the scalar lists $\lambda : n \to \mathbb{Q}$ and $\iota \circ \lambda : n \to \mathbb{Q}_{\mathbb{R}}$ correspond bijectively, and $\lambda_i = 0$ for all $i$ exactly when $\iota(\lambda_i) = 0$ for all $i$. So a vanishing combination exists on one side exactly when it does on the other, and likewise for representations of an arbitrary vector; hence the two structures have the same linearly independent subsets, the same spans and the same bases. [L1, L3, L4]

2.1 Claim 2. $\mathbb{R}$ is a vector space over $\mathbb{Q}_{\mathbb{R}}$ by step 1.1, and every vector space has a basis, so a basis $B$ of $\mathbb{R}$ over $\mathbb{Q}_{\mathbb{R}}$ exists. [step 1.1, L3]

2.2 Claim 3. Suppose some basis $B$ of $\mathbb{R}$ over $\mathbb{Q}_{\mathbb{R}}$ were finite, say $B \approx n$. A bijection $n \to B$ is an injective list whose image is a basis, hence an ordered basis, so every $x \in \mathbb{R}$ is $\sum_{i<n}\lambda_i b_i$ for exactly one $\lambda : n \to \mathbb{Q}_{\mathbb{R}}$. The resulting map $\Phi : \mathbb{R} \to (\mathbb{Q}_{\mathbb{R}})^{n}$, sending $x$ to that $\lambda$, is injective, since $\Phi(x) = \Phi(y)$ makes $x$ and $y$ the same sum. By steps 1.2 and 1.3 the set $(\mathbb{Q}_{\mathbb{R}})^{n}$ is at most countable, hence so is its subset $\Phi[\mathbb{R}]$; and $\Phi$ is a bijection $\mathbb{R} \to \Phi[\mathbb{R}]$, so $\mathbb{R}$ is at most countable, contradicting the uncountability of $\mathbb{R}$. So no basis of $\mathbb{R}$ over $\mathbb{Q}_{\mathbb{R}}$ is finite, and $\mathbb{R}$ is infinite-dimensional over $\mathbb{Q}_{\mathbb{R}}$. [step 1.1, step 1.2, step 1.3, L3, L4, L5]

3.1 Claim 1 is step 1.1, claim 2 is step 2.1, claim 3 is step 2.2, and claim 4 is step 1.4; by claim 4 the last two transfer to $\mathbb{R}$ as a $\mathbb{Q}$-vector space. [step 1.1, step 1.4, step 2.1, step 2.2] ∎

## Remarks

- **Agreement with the order-69 examples page.** Claim 1 above is exactly claims 2 and 3 of [[ex-r-as-a-vector-space-over-q]], which states that $\iota[\mathbb{Q}]$ is a subfield of $\mathbb{R}$, that restriction of scalars makes $\mathbb{R}$ a vector space over it, and that $q \cdot x := \iota(q)x$ makes $\mathbb{R}$ a vector space over $\mathbb{Q}$. It is rebuilt here rather than quoted, because an examples page is a leaf of the library and nothing outside it may depend on the items homed there; the statements agree, and neither is stronger than the other. That page says explicitly that nothing there claims anything about size; claims 2, 3 and 4 are new here.

- **What the sharper statement would need.** This item does not claim that no basis of $\mathbb{R}$ over $\mathbb{Q}_{\mathbb{R}}$ is countably infinite. That statement is not proved here: it would need a count of the finite combinations drawn from a countably infinite set, which is a countable union of countable sets, and [[thm-countable-union-of-countable]] costs the Axiom of Countable Choice. The argument above avoids the question entirely by ruling out only finite bases, which is all that "infinite-dimensional" means ([[def-dimension]]).

- **The contrast this page is built around.** The eventually zero families have an infinite basis that is written down and costs no choice principle ([[ex-basis-of-the-eventually-zero-families]]); $\mathbb{R}$ over $\mathbb{Q}_{\mathbb{R}}$ has one that is produced by Zorn's lemma and that no argument here exhibits. Both are infinite-dimensional, and the difference is in what the proof delivers, not in the statement proved.
