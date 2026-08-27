---
id: thm-nonnegative-integral-zero-iff-zero-almost-everywhere
kind: theorem
title: "A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nonnegative-lebesgue-integral, def-integral-over-a-measurable-set, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-measure-null-set-and-almost-everywhere]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 8.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Proposition 2.16"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $f:X\to[0,+\infty]$ be measurable. Then
$$\int f\,d\mu=0 \qquad\Longleftrightarrow\qquad f=0 \text{ almost everywhere.}$$

## Facts & Assumptions

**Given:** A nonnegative measurable function $f$.

[L1] The nonnegative integral is monotone and homogeneous ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L2] A statement holds almost everywhere when its exceptional set is contained in a measurable null set ([[def-measure-null-set-and-almost-everywhere]]).

[L3] The nonnegative integral is the supremum of the integrals of simple minorants ([[def-nonnegative-lebesgue-integral]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\int f\,d\mu=0$. For $n\ge1$ let $E_n:=\{f\ge1/n\}$. Then[L1, L2, given, algebra]
$(1/n)\chi_{E_n}\le f$, so [L1] gives
$$\frac1n\,\mu(E_n)=\int (1/n)\chi_{E_n}\,d\mu\le\int f\,d\mu=0.$$
Hence $\mu(E_n)=0$ for every $n$. Since $\{f>0\}=\bigcup_nE_n$, the
exceptional set where $f\ne0$ is null, so $f=0$ almost everywhere by [L2].


1.2 Assume $f=0$ almost everywhere, and let $N$ be a measurable null set[L2, L3, given]
containing $\{f>0\}$. If $s=\sum_j c_j\chi_{E_j}$ is a simple minorant of $f$,
then every set $E_j$ with $c_j>0$ lies inside $\{f>0\}\subseteq N$, so
$\mu(E_j)=0$; the remaining coefficients are $0$. Therefore $\int s\,d\mu=0$.
Taking the supremum over all simple minorants in [L3] gives $\int f\,d\mu=0$.


2.1 Step 1.1 proves the forward implication and step 1.2 proves the reverse [step 1.1, step 1.2] ∎
implication.
