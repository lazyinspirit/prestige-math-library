---
id: lem-symmetric-group-is-a-group
kind: lemma
title: "$\\operatorname{Sym}(X)$ is a group under composition, and it is non-abelian whenever $X$ has at least three distinct elements"
status: published
origin: session
deps: [def-symmetric-group, def-group, def-injection-surjection-bijection, def-semigroup-and-monoid, def-invertible-element]
justified_by: []
aliases: []
landmark: false
short: "$\\operatorname{Sym}(X)$ is a group"
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
    - title: "Function composition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_composition"
pipeline_run: null
---

## Statement

For every set $X$, the triple
$(\operatorname{Sym}(X), \circ, \mathrm{id}_X)$ of [[def-symmetric-group]] is a
group ([[def-group]]); the inverse of a permutation $f$ is its inverse function
$f^{-1}$.

If $X$ contains three distinct elements $a$, $b$, $c$, then
$\operatorname{Sym}(X)$ is not abelian: the transpositions $\tau = (a\,b)$ and
$\rho = (b\,c)$ satisfy $\tau \circ \rho \ne \rho \circ \tau$.

## Facts & Assumptions

**Given:** A set $X$; $\operatorname{Sym}(X)$ the set of bijections $X \to X$ with the operation $f \circ g$ defined by $(f \circ g)(x) = f(g(x))$ and the element $\mathrm{id}_X$ ([[def-symmetric-group]]); and, for the second claim, three distinct elements $a, b, c \in X$ together with the transpositions $\tau = (a\,b)$ and $\rho = (b\,c)$ of [[def-symmetric-group]].

[L1] A composite of two bijections $X \to X$ is a bijection $X \to X$, so $\circ$ is a binary operation on $\operatorname{Sym}(X)$; $\mathrm{id}_X$ is a bijection; and a bijection $f$ has a two-sided inverse function $f^{-1}$, which is itself a bijection ([[def-injection-surjection-bijection]], [[def-symmetric-group]]).

[L2] Two functions $X \to X$ are equal exactly when they agree at every point of $X$.

[L3] A group is a monoid in which every element is invertible; a monoid is an associative operation with a two-sided identity ([[def-group]], [[def-semigroup-and-monoid]], [[def-invertible-element]]).

## Proof

**Proof technique:** direct.

1.1 Composition is associative: for $f, g, h \in \operatorname{Sym}(X)$ and $x \in X$, both $((f \circ g) \circ h)(x)$ and $(f \circ (g \circ h))(x)$ evaluate to $f(g(h(x)))$, so the two composites agree at every point and are equal. [L2, given]

1.2 $\mathrm{id}_X$ is a two-sided identity: for $f \in \operatorname{Sym}(X)$ and $x \in X$, $(f \circ \mathrm{id}_X)(x) = f(x)$ and $(\mathrm{id}_X \circ f)(x) = f(x)$, so $f \circ \mathrm{id}_X = f = \mathrm{id}_X \circ f$. [L1, L2, given]

1.3 Every $f \in \operatorname{Sym}(X)$ is invertible in $\operatorname{Sym}(X)$: the inverse function $f^{-1}$ is again a bijection $X \to X$, hence lies in $\operatorname{Sym}(X)$, and it satisfies $f^{-1}(f(x)) = x$ and $f(f^{-1}(x)) = x$ for every $x$, that is $f^{-1} \circ f = \mathrm{id}_X = f \circ f^{-1}$. [L1, L2]

1.4 The transposition $\tau = (a\,b)$ satisfies $\tau(a) = b$, $\tau(b) = a$ and $\tau(x) = x$ for $x \notin \{a,b\}$; the transposition $\rho = (b\,c)$ satisfies $\rho(b) = c$, $\rho(c) = b$ and $\rho(x) = x$ for $x \notin \{b,c\}$. Both are bijections of $X$, being their own inverses. [given, L1]

2.1 By steps 1.1 and 1.2 the pair $(\operatorname{Sym}(X), \circ)$ with the element $\mathrm{id}_X$ is a monoid; by step 1.3 every element of it is invertible; hence it is a group, and the inverse of $f$ is the inverse function $f^{-1}$. [step 1.1, step 1.2, step 1.3, L3]

2.2 Evaluate the two composites at $c$. Since $c \ne a$ and $c \ne b$, $\tau(c) = c$, so $(\rho \circ \tau)(c) = \rho(\tau(c)) = \rho(c) = b$. And $\rho(c) = b$, so $(\tau \circ \rho)(c) = \tau(\rho(c)) = \tau(b) = a$. [step 1.4, given]

3.1 The two composites take different values at $c$, because $a \ne b$; hence $\tau \circ \rho \ne \rho \circ \tau$ and $\operatorname{Sym}(X)$ is not abelian. [step 2.2, L2, given]

4.1 $\operatorname{Sym}(X)$ is a group under composition, and it fails to be abelian as soon as $X$ has three distinct elements. [step 2.1, step 3.1] ∎

## Remarks

- **"Three distinct elements", not a cardinality hypothesis.** The second claim is stated and proved with three named, pairwise distinct points of $X$. No notion of the size of $X$ is used, so the statement is available for any $X$ whatever, finite or not, and needs nothing about counting.

- For $X$ with at most two elements $\operatorname{Sym}(X)$ *is* abelian: it has at most two elements itself, and any group with at most two elements is abelian, since one of any two of its elements is then the identity.

- The witness pair $\tau, \rho$ is reused on the companion page to show that the exponent law $(gh)^n = g^n h^n$ genuinely needs its commuting hypothesis.
