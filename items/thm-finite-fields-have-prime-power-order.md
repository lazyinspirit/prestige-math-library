---
id: thm-finite-fields-have-prime-power-order
kind: theorem
title: "Every finite field has order $p^n$ for a unique prime characteristic $p$ and positive integer $n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-field-and-its-order, thm-prime-subfield-classification, def-extension-degree-and-finite-extension, cor-every-spanning-set-contains-a-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-cardinality-of-a-set-of-functions, def-nat-power, cor-euclids-lemma-for-finite-products]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Statement

If $F$ is a finite field, then there is a unique prime $p$ and a unique positive integer $n$ such that

$$|F|=p^n.$$

Here $p=\operatorname{char}F$ and $n=[F:\mathbb F_p]$.

## Facts & Assumptions

**Given:** A finite field $F$.

[L1] The order of a finite field is the cardinality of its underlying finite set ([[def-finite-field-and-its-order]]).

[L2] The prime subfield in positive characteristic $p$ is isomorphic to $\mathbb F_p$ ([[thm-prime-subfield-classification]]).

[L3] Extension degree is the size of a finite basis ([[def-extension-degree-and-finite-extension]]).

[L4] Assuming the Axiom of Choice, if $S\subseteq V$ spans $V$ then there is a basis $B$ of $V$ with $B\subseteq S$ ([[cor-every-spanning-set-contains-a-basis]]).

[L5] Coordinates with respect to a finite ordered basis are unique ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L6] The set of functions from an $n$-element set to a $p$-element set has cardinality $p^n$ ([[thm-cardinality-of-a-set-of-functions]], [[def-nat-power]]).

[L7] If a prime $p$ divides a finite product of integers, it divides one of the factors ([[cor-euclids-lemma-for-finite-products]]).

## Proof

**Proof technique:** direct.

1.1 The characteristic cannot be zero, because the distinct integer multiples of $1_F$ would give infinitely many elements. Hence it is a unique prime $p$, and [L2] identifies the prime subfield with $\mathbb F_p$. [given, L2]

1.2 The finite set $F$ spans itself over $\mathbb F_p$, so [L4] supplies a finite basis. Its size $n$ is positive because $F$ is not the zero vector space. [given, L3, L4]

2.1 By [L5], taking coordinates is a bijection from $F$ to the functions from an $n$-element basis index set to $\mathbb F_p$. Thus [L6] gives $|F|=p^n$. [step 1.2, L1, L5, L6]

3.1 Steps 1.1 and 1.2 exhibit the pair $(p,n)$ with $p=\operatorname{char}F$ and $n=[F:\mathbb F_p]$. For uniqueness, suppose also $|F|=\ell^m$ with $\ell$ prime and $m\ge1$. Then $p$ divides $\ell^m$, so [L7] gives $p\mid\ell$, and primality of $\ell$ forces $p=\ell$. Now $p^n=p^m$ with $p\ge2$ forces $n=m$, since $n<m$ would give $1=p^{m-n}\ge p\ge2$ and symmetrically for $m<n$. [step 1.1, step 1.2, L3, L7, algebra] ∎
