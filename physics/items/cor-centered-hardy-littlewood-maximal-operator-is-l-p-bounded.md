---
id: cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded
kind: corollary
title: "The centered maximal operator is bounded on $L^p(\\mathbb{R}^n)$ for $1<p<\\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, prop-centered-and-uncentered-maximal-functions-are-comparable, prop-hardy-littlewood-maximal-function-is-l-infinity-bounded, thm-hardy-littlewood-maximal-inequality-for-balls, thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Corollary 6.35"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "G. H. Hardy and J. E. Littlewood, A maximal theorem with function-theoretic applications, Theorem 13"
      url: "https://web.archive.org/web/20240816135714if_/https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5446-11511_2006_Article_BF02547518.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $1<p<\infty$. Then there is a constant $C_{n,p}$ such that every
$f\in L^p(\mathbb{R}^n)$ satisfies
$$\|Mf\|_p\le C_{n,p}\|f\|_p.$$
By comparison, the same is true for the uncentered maximal function.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, an exponent $1<p<\infty$, and a function $f\in L^p(\mathbb{R}^n)$.

[L1] The centered maximal operator is of weak type $(1,1)$ with constant $5^n$. ([[thm-hardy-littlewood-maximal-inequality-for-balls]])

[L2] The centered maximal operator is of strong type $(\infty,\infty)$ with operator norm at most $1$. ([[prop-hardy-littlewood-maximal-function-is-l-infinity-bounded]])

[L3] A sublinear operator of weak type $(1,1)$ and strong type $(\infty,\infty)$ is of strong type $(p,p)$ for every $1<p<\infty$. ([[thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity]])

[L4] One has $Mf\le M^*f\le2^nMf$ pointwise. ([[prop-centered-and-uncentered-maximal-functions-are-comparable]])

## Proof

**Proof technique:** direct.

1.1 The maximal operator is sublinear by definition of supremum and absolute [L1, L2, L3, given, algebra] values. Apply [L3] with the constants from [L1] and [L2]. This yields a constant $C_{n,p}$ such that $$\|Mf\|_p\le C_{n,p}\|f\|_p.$$ [L1, L2, L3, given, algebra]

2.1 Step 1.1 proves the centered estimate. Then [L4] gives [step 1.1, L4, algebra] $$\|M^*f\|_p\le 2^n\|Mf\|_p\le 2^nC_{n,p}\|f\|_p,$$ so the uncentered estimate follows as well. [step 1.1, L4, algebra] ∎
