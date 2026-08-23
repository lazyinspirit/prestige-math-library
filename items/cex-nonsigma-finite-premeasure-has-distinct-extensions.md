---
id: cex-nonsigma-finite-premeasure-has-distinct-extensions
kind: counterexample
title: "A non-sigma-finite premeasure has distinct Borel extensions"
status: draft
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
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Exercise 23 in Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.7.8"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement refuted

Every premeasure has a unique measure extension to its generated sigma-algebra, even when it is not sigma-finite.

## Facts & Assumptions

**Given:** The algebra $\mathcal A_0$ of finite unions of half-open intervals in $\mathbb R$ with extended endpoints, and $\mu_0(\varnothing)=0$, $\mu_0(A)=+\infty$ for nonempty $A\in\mathcal A_0$.

[F1] A **premeasure** on an algebra $\mathcal A_0$ vanishes at the empty set and is countably additive whenever a disjoint sequence in $\mathcal A_0$ has its union in $\mathcal A_0$. ([[def-premeasure-on-an-algebra]])

[L1] For every set $X$, counting measure is a measure on $(X,\mathcal P(X))$. ([[prop-counting-measure-is-a-measure]])

[L2] The family of half-open intervals $(a,b]$ with real $a<b$ generates $\mathcal B(\mathbb R)$. ([[thm-seven-generators-of-the-borel-sigma-algebra-on-r]])
## Counterexample

**Proof technique:** direct.

1.1 The interval family is an algebra containing all finite half-open intervals, so [L2] gives $\mathcal B(\mathbb R)\subseteq\sigma(\mathcal A_0)$. Every extended-endpoint half-open interval is Borel, and finite unions of Borel sets are Borel, so $\mathcal A_0\subseteq\mathcal B(\mathbb R)$ and the reverse inclusion follows. The zero-or-infinity function satisfies [F1] because any nonempty disjoint union has a nonempty term. Every nonempty algebra member contains an interval component and an infinite midpoint-bisection sequence, so only $\varnothing$ has finite premeasure and no sigma-finite cover exists. [F1, L2, algebra]

2.1 Counting measure from [L1] restricts to a Borel extension because every nonempty algebra member is infinite. The Borel function $\nu(B)=0$ for $B=\varnothing$ and $+\infty$ otherwise is also countably additive by the same empty-versus-nonempty argument, and it too extends $\mu_0$. [step 1.1, L1, algebra]

3.1 For every $x\in\mathbb R$, counting measure gives $\#(\{x\})=1$ while $\nu(\{x\})=+\infty$, so the extensions are distinct. [step 2.1, algebra] ∎
