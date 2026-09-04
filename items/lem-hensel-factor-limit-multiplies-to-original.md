---
id: lem-hensel-factor-limit-multiplies-to-original
kind: lemma
title: "The coefficientwise limits multiply back to the original polynomial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-hensel-factor-corrections-form-cauchy-sequences, def-separated-and-complete-filtered-module]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Chapter 22"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 15.11: Henselian pairs"
      url: "https://stacks.math.columbia.edu/tag/09XD"
pipeline_run: null
---

## Statement

Let $A$ be $I$-adically complete and separated, and let $(g_r,h_r)_{r \ge 1}$
be monic polynomial lifts of fixed degrees such that:

1. $f-g_rh_r \in I^r[T]$ for every $r \ge 1$, and
2. the coefficient sequences of $g_r$ and $h_r$ are $I$-adically Cauchy.

Then the coefficientwise limits $g,h \in A[T]$ exist and satisfy $f=gh$.

## Facts & Assumptions

**Given:** An $I$-adically complete and separated ring $A$, a polynomial
$f \in A[T]$, and stagewise lifts $(g_r,h_r)$ as above.

[L1] The Hensel correction sequences are coefficientwise $I$-adically Cauchy
([[lem-hensel-factor-corrections-form-cauchy-sequences]]).

[L2] Completeness gives limits of $I$-adic Cauchy sequences, and separatedness
means that an element lying in every $I^r$ is zero
([[def-separated-and-complete-filtered-module]]).

## Proof

**Proof technique:** take coefficientwise limits and use separatedness on each coefficient.

1.1 By completeness and [L2], each coefficient sequence of $g_r$ and of $h_r$ has a limit in $A$. Since the degrees are fixed and the leading coefficients are always $1$, these limits assemble into monic polynomials $g,h \in A[T]$ of the same degrees. [L1, L2, given]

2.1 Fix a coefficient index $j$ of the product. Only finitely many coefficient pairs contribute to the $T^j$-coefficient of $g_rh_r$, so ordinary continuity of finite sums and products shows that the $T^j$-coefficient of $g_rh_r$ converges to the $T^j$-coefficient of $gh$. [step 1.1, given, algebra]

3.1 For every $r$, the coefficient of $T^j$ in $f-g_rh_r$ lies in $I^r$ by hypothesis. Passing to the limit in step 2.1 shows that the coefficient of $T^j$ in $f-gh$ lies in every $I^r$. By separatedness and [L2], that coefficient is $0$. Since this holds for every $j$, one has $f=gh$. [L2, step 2.1, given, algebra]

4.1 Therefore the coefficientwise limits of the iterative factors multiply back to the original polynomial. [step 1.1, step 3.1] ∎
