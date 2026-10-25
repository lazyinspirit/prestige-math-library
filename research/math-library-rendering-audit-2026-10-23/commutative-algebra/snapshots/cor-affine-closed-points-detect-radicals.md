---
id: cor-affine-closed-points-detect-radicals
kind: corollary
title: "In a finite-type algebra over a field, radical ideals are intersections of maximal ideals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-proper-ideal-contained-in-maximal-ideal, thm-prime-spectrum-of-a-localisation-bijection, lem-jacobson-ring-prime-as-intersection-of-maximals, lem-finite-type-jacobson-residue-extension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 15.2"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition (15.22) and Theorem (15.26)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $k$ be a field, let $A$ be a finite-type $k$-algebra, and let
$J\subseteq A$ be a radical ideal. Then
$$ J=\bigcap_{\mathfrak m\supseteq J,\ \mathfrak m\text{ maximal}} \mathfrak m. $$
If no maximal ideal contains $J$, this intersection is understood to be $A$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, a finite-type $k$-algebra $A$, and a radical ideal $J\subseteq A$.

[L1] Every proper ideal is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

[L2] Primes of a localization correspond to primes disjoint from the denominator set ([[thm-prime-spectrum-of-a-localisation-bijection]]).

[L4] For a finite-type algebra over a field, residue fields at maximal ideals are finite extensions of the base field ([[lem-finite-type-jacobson-residue-extension]]).

## Proof

**Proof technique:** direct.

1.1 If $J=A$, then the family of maximal ideals containing $J$ is empty, and the stated convention makes the displayed intersection equal to $A=J$. So only the proper case needs proof. [given, algebra]

2.1 Assume now that $J$ is proper, and put $B=A/J$. Then $B$ is a reduced finite-type $k$-algebra. It is enough to prove that the intersection of the maximal ideals of $B$ is $0$, because pulling those ideals back along $A\to B$ then gives the displayed formula for $J$. [step 1.1, given, algebra]

3.1 Let $0\ne b\in B$. Because $B$ is reduced, the localization $B_b$ is nonzero. By [L1], the zero ideal of $B_b$ lies in some maximal ideal $\mathfrak n$. Let $\mathfrak p=\mathfrak n\cap B$. By [L2], $\mathfrak p$ is a prime ideal of $B$ that does not contain $b$. [L1, L2, step 2.1, choose]

4.1 The composed map $k\to B\to B_b\to B_b/\mathfrak n$ is a finite-type $k$-algebra map to a field. By [L4], the field $B_b/\mathfrak n$ is finite over $k$. The image of $B/\mathfrak p$ inside that field is a finite-type $k$-domain contained in a finite-dimensional $k$-vector space, so it is itself a field. Therefore $\mathfrak p$ is maximal in $B$. [L4, step 3.1, algebra]

5.1 Step 4.1 gives a maximal ideal of $B$ that avoids the chosen nonzero element $b$. Hence the intersection of all maximal ideals of $B$ is $0$. Returning to step 2.1 proves that every radical ideal of $A$ is the intersection of the maximal ideals containing it. [step 2.1, step 4.1] ∎
