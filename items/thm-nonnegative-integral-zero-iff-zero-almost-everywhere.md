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
deps: [def-nonnegative-lebesgue-integral, def-integral-over-a-measurable-set, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-measure-null-set-and-almost-everywhere, lem-well-definedness-of-the-simple-integral]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (thm-nonnegative-integral-zero-iff-zero-almost-everywhere). No independent judge or whole-closure certification.
    delegated_by: owner
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

[L4] The nonnegative integral agrees with the defining simple integral on simple functions ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\int f\,d\mu=0$. For $n\ge1$ let $E_n:=\{f\ge1/n\}$. Then $(1/n)\chi_{E_n}\le f$, so [L1] and [L4] give $\frac1n\mu(E_n)=\int (1/n)\chi_{E_n}\,d\mu\le\int f\,d\mu=0$. Hence $\mu(E_n)=0$ for every $n$. Since $\{f>0\}=\bigcup_nE_n$, the exceptional set where $f\ne0$ is null, so $f=0$ almost everywhere by [L2]. [L1, L2, L4, given, algebra]


1.2 Assume $f=0$ almost everywhere, and let $N$ be a measurable null set containing $\{f>0\}$. For any disjoint simple representation $s=\sum_j c_j\chi_{E_j}\le f$, every $E_j$ with $c_j>0$ lies inside $N$ and has measure zero. Every zero-coefficient term contributes zero, including an omitted complement cell of infinite measure, by the simple integral's $0\cdot(+\infty)=0$ convention. Thus $\int s\,d\mu=0$. The now-complete finite refinement proof of [[lem-well-definedness-of-the-simple-integral]] makes this value independent of representation. Taking the supremum over all simple minorants in [L3] gives $\int f\,d\mu=0$. [L2, L3, given]


2.1 Step 1.1 proves the forward implication and step 1.2 proves the reverse implication. [step 1.1, step 1.2] ∎
