---
id: cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree
kind: corollary
title: "For every finite field $\\mathbb F_q$ and every $n\\ge1$, a monic irreducible polynomial of degree $n$ exists"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finite-fields-have-prime-power-order, thm-existence-of-finite-fields, thm-multiplicative-group-of-a-finite-field-is-cyclic, thm-subfield-lattice-of-a-finite-field, thm-uniqueness-of-finite-fields, thm-simple-algebraic-extension-quotient-power-basis-and-degree, def-algebraic-and-transcendental-elements]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Appendix A"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Statement

For every finite field $\mathbb F_q$ and every integer $n\ge1$, there exists a monic irreducible polynomial in $\mathbb F_q[t]$ of degree $n$.

## Facts & Assumptions

**Given:** A finite field $\mathbb F_q$ and a positive integer $n$.

[L1] The order of a finite field is a prime power; write $q=p^r$ ([[thm-finite-fields-have-prime-power-order]]).

[L2] A field of order $p^{rn}=q^n$ exists ([[thm-existence-of-finite-fields]]).

[L3] The group $E^\times$ is cyclic ([[thm-multiplicative-group-of-a-finite-field-is-cyclic]]).

[L4] Since $r\mid rn$, a field of order $p^{rn}$ has a unique subfield of order $p^r=q$ ([[thm-subfield-lattice-of-a-finite-field]]).

[L5] Finite fields of the same order are isomorphic ([[thm-uniqueness-of-finite-fields]]).

[L6] An algebraic element's monic irreducible minimal polynomial has degree equal to the degree of its simple extension ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L7] An element is algebraic over a base field when some nonzero polynomial over that field vanishes at it ([[def-algebraic-and-transcendental-elements]]).

## Proof

**Proof technique:** contradiction.

1.1 By [L1], write $q=p^r$. Choose by [L2] a field $E$ of order $p^{rn}=q^n$, and by [L3] a generator $a$ of the cyclic group $E^\times$, whose order is $q^n-1$. [given, L1, L2, L3, choose]

2.1 By [L4] and [L5], identify the unique order-$q$ subfield of $E$ with the given $\mathbb F_q$. Since $E$ is finite, the powers $a^0,a^1,\ldots,a^{|E|}$ cannot be pairwise distinct, so $a^i=a^j$ for some $i<j$ and $a$ is a root of the nonzero polynomial $t^j-t^i\in\mathbb F_q[t]$; by [L7], $a$ is algebraic over $\mathbb F_q$. Let $m_a$ be its minimal polynomial over that subfield and put $d=\deg m_a$. Then $\mathbb F_q(a)$ has $q^d$ elements by [L6] and is a subfield of $E$, so $d\le n$. [step 1.1, L4, L5, L6, L7, algebra]

3.1 Suppose, for contradiction, that $d<n$. Then $\mathbb F_q(a)$ is a proper subfield whose multiplicative group has only $q^d-1<q^n-1$ elements and cannot contain an element of order $q^n-1$. This contradicts the choice of $a$. [step 1.1, step 2.1, assume-contra, algebra]

4.1 Therefore $d=n$, and $m_a$ is the required monic irreducible polynomial. [step 3.1, L6, discharge-contradiction] ∎
