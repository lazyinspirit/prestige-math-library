---
id: thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
kind: theorem
title: "A complex polynomial of degree $n$ has exactly $n$ roots counted with multiplicity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-every-complex-polynomial-splits-into-linear-factors, def-polynomials-that-split-and-splitting-fields, thm-polynomial-ring-over-a-field-is-a-ufd]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 5"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
pipeline_run: frontier-20
---

## Statement

Let $f \in \mathbb C[x]$ have degree $n \ge 1$. Then there exist distinct
complex numbers $\alpha_1,\dots,\alpha_r$ and positive integers
$m_1,\dots,m_r$ such that
$$ f(x)=c\prod_{j=1}^r (x-\alpha_j)^{m_j} $$
for some $c \in \mathbb C^\times$, with
$$ m_1+\cdots+m_r=n. $$
These exponents are uniquely determined by $f$. Equivalently, $f$ has exactly
$n$ roots counted with multiplicity.

## Facts & Assumptions

**Given:** A polynomial $f \in \mathbb C[x]$ of degree $n \ge 1$.

[L1] Every nonconstant polynomial in $\mathbb C[x]$ splits over $\mathbb C$ ([[cor-every-complex-polynomial-splits-into-linear-factors]]).

[L2] Splitting means a nonzero scalar times a product of linear factors ([[def-polynomials-that-split-and-splitting-fields]]).

[L3] The polynomial ring $\mathbb C[x]$ is a unique factorization domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], there are $c \in \mathbb C^\times$ and complex numbers $\beta_1,\dots,\beta_n$ such that $$ f(x)=c\prod_{k=1}^n (x-\beta_k). $$ Let $\alpha_1,\dots,\alpha_r$ be the distinct values among the $\beta_k$, and let $m_j$ be the number of indices $k$ with $\beta_k=\alpha_j$. Then $$ f(x)=c\prod_{j=1}^r (x-\alpha_j)^{m_j}, $$ and by construction $m_1+\cdots+m_r=n$. [L1, L2, construct]

2.1 Suppose also that $$ f(x)=c'\prod_{j=1}^s (x-\gamma_j)^{n_j} $$ with $c' \in \mathbb C^\times$, distinct $\gamma_j$, and positive integers $n_j$. In the UFD $\mathbb C[x]$, each linear factor $x-\alpha$ is irreducible, hence prime. Therefore the exponent with which $x-\alpha$ appears in a factorization of $f$ is uniquely determined. After reordering, this gives $$ r=s,\qquad \gamma_j=\alpha_j,\qquad n_j=m_j \text{ for every } j. $$ So the multiplicities are well defined. [L3, step 1.1, algebra]

3.1 Step 1.1 gives a factorization whose exponents sum to $n$, and step 2.1 gives uniqueness of those exponents. This is exactly the statement that a degree-$n$ complex polynomial has exactly $n$ roots counted with multiplicity. [step 1.1, step 2.1] ∎
