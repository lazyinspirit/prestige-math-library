---
id: fs-premeasure-extensions-are-always-unique
kind: false-statement
title: "FALSE: the extension of a premeasure is always unique"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-premeasure-on-an-algebra, def-measure, def-counting-measure, prop-counting-measure-is-a-measure, def-borel-sigma-algebra, thm-seven-generators-of-the-borel-sigma-algebra-on-r]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Exercise 23 in Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.7.8"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Every premeasure has at most one measure extension to its generated sigma-algebra, without any sigma-finiteness hypothesis.

## Facts & Assumptions

**Given:** The algebra $\mathcal A_0$ of finite unions of half-open intervals $(a,b]$ in $\mathbb R$ with extended endpoints, and $\mu_0(\varnothing)=0$, $\mu_0(A)=+\infty$ for nonempty $A\in\mathcal A_0$.

[F1] A **premeasure** on an algebra $\mathcal A_0$ vanishes at the empty set and is countably additive whenever a disjoint sequence in $\mathcal A_0$ has its union in $\mathcal A_0$. ([[def-premeasure-on-an-algebra]])

[L1] For every set $X$, counting measure is a measure on $(X,\mathcal P(X))$. ([[prop-counting-measure-is-a-measure]])

[L2] The family of half-open intervals $(a,b]$ with real $a<b$ generates the Borel sigma-algebra $\mathcal B(\mathbb R)$. ([[thm-seven-generators-of-the-borel-sigma-algebra-on-r]])
## Refutation

**Proof technique:** direct.

1.1 The family $\mathcal A_0$ is an algebra containing the finite half-open intervals, so [L2] gives $\mathcal B(\mathbb R)\subseteq\sigma(\mathcal A_0)$. Every extended-endpoint half-open interval is Borel, and finite unions of Borel sets are Borel, so $\mathcal A_0\subseteq\mathcal B(\mathbb R)$ and the reverse inclusion follows. A disjoint sequence in $\mathcal A_0$ with empty union has all terms empty, while one with nonempty union has a nonempty term, so [F1] gives countable additivity of $\mu_0$. Every nonempty member contains a nonempty interval component and hence the distinct midpoint-bisection sequence $a+(b-a)/2^n$ after restricting to finite endpoints; therefore it is infinite, and the only finite-$\mu_0$ member is $\varnothing$, so $\mu_0$ is not sigma-finite. [F1, L2, algebra]

2.1 By [L1], counting measure restricted to $\mathcal B(\mathbb R)$ is a measure and agrees with $\mu_0$ because every nonempty source-algebra member is infinite. The function $\nu(B)=0$ for $B=\varnothing$ and $\nu(B)=+\infty$ otherwise is also a Borel measure: a disjoint union is empty exactly when every term is empty, and otherwise one term is nonempty. Thus both are extensions. [step 1.1, L1, algebra]

3.1 On a singleton $\{x\}$, counting measure is $1$ while $\nu(\{x\})=+\infty$, so the extensions are distinct. [step 2.1, algebra] ∎
