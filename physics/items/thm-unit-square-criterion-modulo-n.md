---
id: thm-unit-square-criterion-modulo-n
kind: theorem
title: "A unit is a square modulo $n$ exactly when it is a square at every prime-power factor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-unit-square-criterion-modulo-odd-prime-powers,
       thm-unit-square-criterion-modulo-two-powers,
       thm-unit-group-chinese-remainder-decomposition,
       thm-canonical-prime-factorisation,
       thm-fundamental-theorem-of-arithmetic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §B.VII"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.4"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ and let $[a]_n\in(\mathbb Z/n)^\times$. A unit is a square modulo $n$ if and only if it is a square modulo every prime-power factor of $n$.

Equivalently, for every odd prime $p\mid n$ one must have $(a/p)=1$; for the factor $2^e$, there is no additional condition when $e\le1$, one needs $a\equiv1\pmod4$ when $e=2$, and one needs $a\equiv1\pmod8$ when $e\ge3$. At $n=1$, the unique unit class is a square.

## Facts & Assumptions

**Given:** A positive integer $n$ and a unit class $[a]_n$.

[L1] For an odd prime $p$, $k\ge1$, and $p\nmid a$, the congruence $x^2\equiv a\pmod{p^k}$ is soluble if and only if $\left(\frac ap\right)=1$ ([[thm-unit-square-criterion-modulo-odd-prime-powers]]).

[L2] For powers of $2$, the unit square criterion is automatic modulo $2$, is $a\equiv1\pmod4$ modulo $4$, and is $a\equiv1\pmod8$ modulo $2^k$ for $k\ge3$ ([[thm-unit-square-criterion-modulo-two-powers]]).

[L3] For pairwise coprime positive integers $n_i$ with product $N$, the Chinese remainder map gives $(\mathbb Z/N)^\times\cong\prod_i(\mathbb Z/n_i)^\times$, including the empty list ([[thm-unit-group-chinese-remainder-decomposition]]).

[L4] The prime factors and exponents in the canonical factorisation of a positive integer are determined by that integer ([[thm-canonical-prime-factorisation]]).

[L5] Every positive integer has a finite prime factorisation, unique up to the order of its prime factors ([[thm-fundamental-theorem-of-arithmetic]]).

## Proof

**Proof technique:** direct.

1.1 By [L5], $n$ has a finite prime factorisation; grouping equal factors and using [L4] gives its uniquely determined nontrivial prime-power factors, which are pairwise coprime. Apply [L3] to identify the unit group modulo $n$ with the product of their unit groups; when $n=1$, this is the empty product of groups and has one element. [L3, L4, L5]

2.1 Under the isomorphism of step 1.1, a global square maps to a square in every component. Conversely, if every component is a square, choose one root in each of the finitely many nonempty local root sets and apply the inverse CRT isomorphism to obtain a global root. Substitution of [L1] and [L2] gives the explicit local conditions in the Statement, and the empty product handles $n=1$. [step 1.1, L1, L2, L3, choose] ∎
