---
id: cor-ring-of-integers-is-a-dedekind-domain
kind: corollary
title: "Rings of integers are Dedekind domains"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-extension-degree-and-finite-extension
  - def-ring-of-integers-of-a-number-field
  - def-dedekind-domain
  - cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension
  - lem-subgroups-of-z-are-cyclic
  - thm-int-comm-ring
  - lem-nat-embeds-int
  - lem-int-cancellation
  - def-zero-divisor-and-integral-domain
  - def-noetherian-ring
  - def-noetherian-module
  - cor-rational-algebraic-integers-are-integers
  - def-integral-closure-and-integrally-closed-domain
  - def-rationals
  - thm-rat-field
  - lem-int-embeds-rat
  - def-field-of-fractions
  - def-multiplicative-subset-and-localisation
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - cor-algebraic-extensions-of-perfect-fields-are-separable
  - def-prime-and-maximal-ideals
  - def-divides-in-z
  - cor-prime-iff-euclid-property
  - thm-z-mod-p-is-a-field
  - prop-integers-modulo-n-as-a-quotient-ring
  - thm-quotient-is-field-iff-ideal-maximal
  - def-prime
  - cor-maximal-ideals-are-prime
  - def-krull-dimension-of-a-ring
  - lem-divisor-bound
  - lem-int-abs-properties
  - thm-int-ordered-ring
  - def-int-order
  - lem-nat-discrete
  - def-natural-numbers
proof_strategy: direct
verification:
  audited: 2026-10-01
  precheck: pass
sources:
  references:
    - title: "Milne, Theorem 3.1"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

Assume the Axiom of Choice. The ring of integers of every number field is a
Dedekind domain.

## Facts & Assumptions

**Given:** The Axiom of Choice and a number field $K$.

[F1] The integers form a commutative ring with $1\ne0$ and no zero divisors, so they are an integral domain; the natural-number embedding into $\mathbb Z$ is injective and its image is the nonnegative integers ([[thm-int-comm-ring]], [[lem-nat-embeds-int]], [[lem-int-cancellation]], [[def-zero-divisor-and-integral-domain]]).

[F2] Every additive subgroup of $\mathbb Z$ is $n\mathbb Z$ for a unique $n\in\mathbb N$, with the generator positive when the subgroup is nonzero ([[lem-subgroups-of-z-are-cyclic]]).

[F3] A rational number integral over $\mathbb Z$ is an integer ([[cor-rational-algebraic-integers-are-integers]]).

[F4] A number field $K$ is a finite extension of $\mathbb Q$ ([[def-number-field]], [[def-extension-degree-and-finite-extension]]).

[F5] Every field of characteristic zero is perfect ([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]).

[F6] Every algebraic extension of a perfect field is separable ([[cor-algebraic-extensions-of-perfect-fields-are-separable]]).

[F7] A Dedekind domain is a Noetherian integrally closed domain of Krull dimension $1$ ([[def-dedekind-domain]]).

[F8] Assuming the Axiom of Choice, the integral closure of a Dedekind domain in a finite separable extension of its fraction field is Dedekind ([[def-axiom-of-choice]], [[cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension]]).

[F9] The ring of integers $\mathcal O_K$ is the integral closure of $\mathbb Z$ in $K$ ([[def-ring-of-integers-of-a-number-field]]).

[F10] The rationals are classes $[(a,b)]$ with $a,b\in\mathbb Z$ and $b\ne0$; the canonical map $j:\mathbb Z\to\mathbb Q$ is an injective ring map, $\mathbb Q$ is a field, and the fraction-field construction uses the localization relation $u(ad-cb)=0$ for some nonzero $u\in\mathbb Z$ ([[def-rationals]], [[lem-int-embeds-rat]], [[thm-rat-field]], [[def-field-of-fractions]], [[def-multiplicative-subset-and-localisation]]).

[F11] A module is Noetherian when all its submodules are finitely generated, and a ring is Noetherian when its left regular module is Noetherian ([[def-noetherian-module]], [[def-noetherian-ring]]).

[F12] A domain is integrally closed when every element of its fraction field integral over it lies in the domain ([[def-integral-closure-and-integrally-closed-domain]]).

[F13] A prime ideal is proper and absorbs factors of products; $p\mid a$ means $a\in p\mathbb Z$; for $p>1$, the Euclid property characterizes prime integers ([[def-prime-and-maximal-ideals]], [[def-divides-in-z]], [[cor-prime-iff-euclid-property]]).

[F14] For a prime integer $p$, $\mathbb Z/p$ is a field and is the quotient ring $\mathbb Z/p\mathbb Z$; a quotient by an ideal is a field exactly when the ideal is maximal ([[thm-z-mod-p-is-a-field]], [[prop-integers-modulo-n-as-a-quotient-ring]], [[thm-quotient-is-field-iff-ideal-maximal]]).

[F15] If $d\mid a$ and $a\ne0$, then $d\le |a|$; if $x>0$, then $1\le x$ (the integer-discreteness argument in the proof of [[lem-divisor-bound]]). For nonnegative $x$, $|x|=x$; the integer order is antisymmetric and compatible with addition ([[lem-divisor-bound]], [[lem-int-abs-properties]], [[thm-int-ordered-ring]], [[def-int-order]]).

[F16] The natural embedding preserves order; the natural numerals satisfy $0<1<2$, since $1=\sigma(0)$, $2=\sigma(1)$, and each successor is the immediate successor ([[lem-nat-embeds-int]], [[lem-nat-discrete]], [[def-natural-numbers]]).

[F17] By definition, an integer $p$ is prime exactly when $p>1$ and every positive divisor of $p$ is $1$ or $p$ ([[def-prime]]).

[F18] Every maximal ideal in a commutative ring is prime ([[cor-maximal-ideals-are-prime]]).

[F19] Krull dimension is the supremum of the lengths of strict chains of prime ideals ([[def-krull-dimension-of-a-ring]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $\mathbb Z$ is a domain. A fraction $a/b$ equals $c/d$ in $\operatorname{Frac}(\mathbb Z)$ exactly when $u(ad-cb)=0$ for some nonzero $u\in\mathbb Z$; the domain property makes this equivalent to $ad=cb$, the relation defining $\mathbb Q$. The operations agree under $(a,b)\mapsto j(a)/j(b)$, so this gives the canonical identification $\operatorname{Frac}(\mathbb Z)=\mathbb Q$. [F1, F10, algebra]

1.2 Let $I$ be an ideal of $\mathbb Z$. It is an additive subgroup, so [F2] gives $I=n\mathbb Z$ for some $n\in\mathbb N$; as a $\mathbb Z$-module, $I$ is generated by that one element, including when $n=0$. Every submodule of the left regular module $\mathbb Z$ is such an ideal. Therefore this module is Noetherian, and $\mathbb Z$ is a Noetherian ring by [F11]. [F2, F11, algebra]

1.3 The field $\mathbb Q$ has characteristic zero: for every positive integer $m$, $m\cdot1_{\mathbb Q}=j(m)\ne0$ by the injectivity in [F10]. By [F5], $\mathbb Q$ is perfect. [F5, F10, algebra]

1.4 Let $P$ be a nonzero prime ideal of $\mathbb Z$. By [F2], $P=p\mathbb Z$ for a positive integer $p$; since $P$ is proper, $p\ne1$, so $p>1$. If $p\mid ab$, then $ab\in P$, and [F13] gives $a\in P$ or $b\in P$, so $p\mid a$ or $p\mid b$. The Euclid-property characterization therefore makes $p$ a prime integer. [F2, F13, given]

2.1 If $x\in\operatorname{Frac}(\mathbb Z)$ is integral over $\mathbb Z$, step 1.1 identifies it with a rational number, and [F3] gives $x\in\mathbb Z$. Hence $\mathbb Z$ is integrally closed by [F12]. [F3, step 1.1, F12]

2.2 Put $n=[K:\mathbb Q]$, which is finite and at least $1$ by [F4] and because $K$ is a field extension of $\mathbb Q$. For each $\alpha\in K$, the $n+1$ vectors $1,\alpha,\ldots,\alpha^n$ in the $n$-dimensional $\mathbb Q$-vector space $K$ are linearly dependent, so a nonzero polynomial over $\mathbb Q$ vanishes at $\alpha$. Thus $K/\mathbb Q$ is algebraic; [F6] and step 1.3 make it separable. [F4, F6, step 1.3, algebra]

2.3 For the prime $p$ from step 1.4, [F14] makes $\mathbb Z/p$ a field and identifies it with the quotient ring $\mathbb Z/p\mathbb Z=\mathbb Z/P$. The quotient criterion in [F14] then makes every nonzero prime ideal of $\mathbb Z$ maximal. [step 1.4, F14]

3.1 First, [F16] gives $0<1<2$, so $2>1$. If $d$ is any positive divisor of $2$, [F15] gives $1\le d\le |2|=2$. If $d\ne1$, then $1<d$; translation compatibility of the order gives $0<d-1$, and integer discreteness in [F15] gives $1\le d-1$. Hence $2\le d$, so antisymmetry and $d\le2$ give $d=2$. Thus the only positive divisors of $2$ are $1$ and $2$, and [F17] proves that $2$ is prime. Now [F14] makes $2\mathbb Z$ maximal, and [F18] makes it prime. Since $\mathbb Z$ is a domain, $(0)$ is prime; and $2\ne0$ by [F16], so $(0)\subsetneq2\mathbb Z$. Every prime chain with positive length starts at $(0)$ and has length at most $1$, because each nonzero prime is maximal by step 2.3. Thus [F19] gives $\dim\mathbb Z=1$. [F1, F14, F15, F16, F17, F18, F19, step 2.3, algebra]

4.1 Steps 1.1, 1.2, 2.1, and 3.1 show that $\mathbb Z$ is a Noetherian integrally closed domain of dimension $1$. Hence [F7] makes $\mathbb Z$ a Dedekind domain. [F1, F7, step 1.2, step 2.1, step 3.1]

5.1 By [F9], $\mathcal O_K$ is the integral closure of $\mathbb Z$ in $K$. Apply [F8] with $R=\mathbb Z$, fraction field $\mathbb Q=\operatorname{Frac}(\mathbb Z)$ from step 1.1, and finite separable extension $K/\mathbb Q$ from step 2.2. Under the given Axiom of Choice, this proves that $\mathcal O_K$ is Dedekind. [F8, F9, step 1.1, step 2.2, step 4.1, given] ∎
