---
id: fs-solvable-by-radicals-does-not-force-an-abelian-galois-group
kind: false-statement
title: "FALSE: a polynomial solvable by radicals must have abelian Galois group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-x-fifth-minus-two-is-solvable-by-radicals, thm-eisenstein-irreducibility-criterion, cor-the-galois-group-of-a-rational-cyclotomic-field, lem-degree-of-a-compositum-with-a-galois-extension, thm-tower-law-for-finite-field-extensions, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Section 7"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "J. Ash, Basic Abstract Algebra, Section 6.8"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
pipeline_run: null
---

## Statement

**False claim:** a polynomial solvable by radicals must have abelian Galois
group.

## Facts & Assumptions
**Given:** The polynomial $x^5-2$ and its splitting field $K=\mathbb Q(\zeta_5,\sqrt[5]{2})$.

[L1] The polynomial $x^5-2$ is solvable by radicals ([[ex-x-fifth-minus-two-is-solvable-by-radicals]]).

[L2] Eisenstein's criterion proves that a primitive integer polynomial satisfying its prime-divisibility conditions is irreducible over $\mathbb Q$ ([[thm-eisenstein-irreducibility-criterion]]).

[L3] The rational cyclotomic field $\mathbb Q(\zeta_5)$ is Galois of degree $\varphi(5)=4$, with automorphisms $\zeta_5\mapsto\zeta_5^a$ for $a\in(\mathbb Z/5)^\times$ ([[cor-the-galois-group-of-a-rational-cyclotomic-field]]).

[L4] If one of two finite extensions is Galois, the degree of their compositum is the product of their degrees divided by the degree of their intersection ([[lem-degree-of-a-compositum-with-a-galois-extension]]).

[L5] Degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

[L6] Embeddings of a simple algebraic extension correspond to roots of the generator's minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

## Refutation

**Proof technique:** direct.

1.1 Let $\alpha=\sqrt[5]{2}$, $E=\mathbb Q(\alpha)$, and $F=\mathbb Q(\zeta_5)$. By [L2] with the prime $2$, $x^5-2$ is irreducible and $[E:\mathbb Q]=5$. By [L3], $F/\mathbb Q$ is Galois of degree $4$. The degree of $E\cap F$ divides both $5$ and $4$ by [L5], so $E\cap F=\mathbb Q$. Hence [L4] gives $[K:\mathbb Q]=20$, $[K:F]=5$, and $[K:E]=4$. [L2, L3, L4, L5, algebra]

2.1 The minimal polynomial of $\alpha$ over $F$ is therefore $x^5-2$. Since $\zeta_5\alpha$ is another root in $K$, [L6] gives an $F$-automorphism $\sigma$ of $K$ with $\sigma(\alpha)=\zeta_5\alpha$ and $\sigma(\zeta_5)=\zeta_5$; it has order $5$. Similarly, $[K:E]=4$ shows that the minimal polynomial of $\zeta_5$ over $E$ is the degree-four cyclotomic polynomial. Its root $\zeta_5^2$ therefore gives by [L6] an $E$-automorphism $\tau$ with $\tau(\alpha)=\alpha$ and $\tau(\zeta_5)=\zeta_5^2$; it has order $4$. [L3, L6, step 1.1, algebra]

3.1 These automorphisms do not commute: $$\tau\sigma\tau^{-1}(\alpha)=\tau(\zeta_5\alpha)=\zeta_5^2\alpha=\sigma^2(\alpha)\ne\sigma(\alpha).$$ So the Galois group of $x^5-2$ is nonabelian, even though [L1] makes the polynomial solvable by radicals. This disproves the claim. [L1, step 2.1, algebra] ∎
