---
id: lem-integrally-closed-minimal-polynomial-coefficients
kind: lemma
title: "Minimal polynomials of integral elements over an integrally closed domain have coefficients in the domain"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-closure-and-integrally-closed-domain, cor-integral-elements-form-a-subring, thm-evaluation-kernel-and-minimal-polynomial, thm-splitting-fields-exist-for-nonzero-polynomials, thm-universal-property-of-adjoining-an-irreducible-root]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition (14.8)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 6.11"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $A$ be an integrally closed domain with field of fractions $K$, let $L/K$ be a field extension, and let $u\in L$ be integral over $A$. Then the minimal polynomial of $u$ over $K$ has coefficients in $A$.

In particular, if $f(T)\in A[T]$ is monic and factors in $K[T]$ as
$$
f(T)=(T-a)h(T)
$$
with $a\in K$, then $h(T)\in A[T]$.

## Facts & Assumptions

**Given:** An integrally closed domain $A$ with field of fractions $K$, a field extension $L/K$, and an element $u\in L$ integral over $A$.

[L1] The phrase "integrally closed domain" means that every element of $K$ integral over $A$ already lies in $A$ ([[def-integral-closure-and-integrally-closed-domain]]).

[L2] Integral elements over a nonzero base ring form a subring ([[cor-integral-elements-form-a-subring]]).

[L3] An algebraic element over a field has a unique monic irreducible minimal polynomial, and it divides every polynomial that vanishes at that element ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L4] Every nonzero polynomial over a field has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).

[L5] If a monic irreducible polynomial over a field has two roots in extensions, there is a field homomorphism between the simple extensions sending one root to the other ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], the minimal polynomial $m_u(T)\in K[T]$ of $u$ is monic and irreducible. Since $u$ is integral over $A$, it satisfies some monic polynomial in $A[T]$, so [L3] implies that $m_u$ is nonzero. By [L4], choose a splitting field $E/K$ for $m_u$ and write $m_u(T)=\prod_{i=1}^n(T-\alpha_i)$ with $\alpha_1=u$. [L3, L4, given]

2.1 Let $g(T)\in A[T]$ be a monic polynomial with $g(u)=0$. For each root $\alpha_i$ of $m_u$, the universal property [L5] gives a $K$-homomorphism $K[u]\to E$ sending $u$ to $\alpha_i$. Applying that homomorphism to the identity $g(u)=0$ shows $g(\alpha_i)=0$. Thus every $\alpha_i$ is integral over $A$. [L1, L5, step 1.1, given]

3.1 The coefficients of $m_u$ are, up to sign, the elementary symmetric polynomials in the integral elements $\alpha_1,\ldots,\alpha_n$. Since $A$ is a domain and therefore nonzero, [L2] shows that these symmetric polynomials are integral over $A$. But the coefficients also lie in $K$, so [L1] forces them to lie in $A$. This proves the first statement. [L1, L2, step 2.1, algebra]

4.1 For the factor statement, choose a splitting field of $f$ over $K$ and write $f(T)=(T-a)\prod_{i=2}^n(T-\beta_i)$. Each $\beta_i$ is integral over $A$ because it is a root of the monic polynomial $f\in A[T]$. Therefore the coefficients of $h(T)=\prod_{i=2}^n(T-\beta_i)$ are integral over $A$ by the same symmetric-polynomial argument as in step 3.1, and they lie in $K$ because $h\in K[T]$. Hence [L1] forces all coefficients of $h$ to lie in $A$. [L1, L2, L4, step 3.1, algebra] ∎
