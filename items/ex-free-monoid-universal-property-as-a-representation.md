---
id: ex-free-monoid-universal-property-as-a-representation
kind: example
title: 'The free word monoid on $X$ represents $M\mapsto\mathbf{Set}(X,U(M))$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-presheaf-representable-functor-and-representation,
       def-semigroup-and-monoid, def-group-homomorphism, def-category,
       def-small-locally-small-and-large-category,
       def-functor-and-contravariant-functor,
       def-the-set-of-functions-from-one-set-to-another,
       def-monoid-finite-product, thm-generalised-associativity,
       thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David I. Spivak, Category Theory for Scientists, Definition 3.1.1.15 and Proposition 3.1.4.9"
      url: "https://ocw.mit.edu/courses/18-s996-category-theory-for-scientists-spring-2013/9cf51d1394fc107baa6764d553dd0bb6_MIT18_S996S13_textbook.pdf"
pipeline_run: null
---

## Example

Let $X^*$ be the set of finite words in the alphabet $X$, including the empty
word $\varepsilon$. Concatenation and $\varepsilon$ make $X^*$ a monoid, and
the one-letter map $j:X\to X^*$ makes it the free word monoid on $X$.

If $\mathbf{Mon}$ denotes the locally small category of monoids and unital
monoid homomorphisms and $U:\mathbf{Mon}\to\mathbf{Set}$ forgets the monoid
structure, then $X^*$ represents

$$M\longmapsto\mathbf{Set}(X,U(M)).$$

The representing bijection sends $\phi:X^*\to M$ to $U(\phi)\circ j$.

## Facts & Assumptions

**Given:** A set $X$; finite words have a length, the empty word has length zero, every nonempty word is uniquely a shorter word followed by one letter, and concatenation joins the two finite lists.

[F1] A monoid has an associative product and a two-sided identity ([[def-semigroup-and-monoid]]).

[F2] A monoid homomorphism preserves products and the identity; identity maps and composites are monoid homomorphisms ([[def-group-homomorphism]]).

[F3] A category has associative composition and identity morphisms; it is locally small when each hom-collection is a set ([[def-category]], [[def-small-locally-small-and-large-category]]).

[F4] A functor preserves identities and composition, and the functions between two fixed sets form a set ([[def-functor-and-contravariant-functor]], [[def-the-set-of-functions-from-one-set-to-another]]).

[F5] The finite product in a monoid has empty value $e$ and appending one factor multiplies it on the right; its splitting law identifies the product along a concatenated list with the product of the first list followed by the product of the second ([[def-monoid-finite-product]], [[thm-generalised-associativity]]).

[F6] A property of all finite lengths follows from the zero case and the step obtained by appending one letter ([[thm-induction-principle]]).

[F7] A covariant functor is represented by $R$ when it is naturally isomorphic to the hom-functor out of $R$ ([[def-presheaf-representable-functor-and-representation]]).

## Verification

**Proof technique:** constructive.

1.1 Concatenation is associative because joining three finite lists gives the same word in either bracketing, and the empty word is a two-sided identity; hence [F1] makes $X^*$ a monoid. [given, F1]

1.2 Monoids and their unital homomorphisms form a category by [F2] and the function laws. Its hom-collection from $M$ to $N$ is a subclass of the set of functions $U(M)\to U(N)$, so it is a set and the category is locally small by [F3] and [F4]. [F2, F3, F4]

1.3 Given $f:X\to U(M)$ and a word $w=x_0\cdots x_{n-1}$, define $\widehat f(w)=\prod_{i<n}f(x_i)$. In particular, $\widehat f(\varepsilon)=e_M$ and $\widehat f(j(x))=f(x)$. [F5, construct]

2.1 Sending a monoid to its underlying set and a homomorphism to its underlying function preserves identities and composition, so it defines the functor $U$. Postcomposition therefore makes $M\mapsto\mathbf{Set}(X,U(M))$ a functor. [step 1.2, F2, F4]

2.2 The splitting law in [F5] gives $\widehat f(wv)=\widehat f(w)\widehat f(v)$ for all words $w,v$; together with the empty-word equation, this makes $\widehat f:X^*\to M$ a unital monoid homomorphism extending $f$. [step 1.3, F2, F5]

3.1 If $q:X^*\to M$ is a unital monoid homomorphism with $qj=f$, then $q(\varepsilon)=e_M=\widehat f(\varepsilon)$. If $q(w)=\widehat f(w)$, then $q(wj(x))=q(w)f(x)=\widehat f(wj(x))$; induction [F6] proves $q=\widehat f$. [step 1.3, step 2.2, F2, F6]

4.1 Thus restriction along $j$ and $f\mapsto\widehat f$ are inverse bijections $\mathbf{Mon}(X^*,M)\cong\mathbf{Set}(X,U(M))$. If $r:M\to N$ is a monoid homomorphism, then both $r\widehat f$ and $\widehat{,U(r)f,}$ extend $U(r)f$, so uniqueness in step 3.1 makes them equal; the bijection is natural in $M$. [step 2.2, step 3.1, F2]

5.1 By [F7], $X^*$ is the claimed representing object. The construction also covers $X=\varnothing$: then $X^*=\{\varepsilon\}$, and there is exactly one unital homomorphism from it to every monoid. [step 2.1, step 4.1, F7, discharge-construct] ∎
