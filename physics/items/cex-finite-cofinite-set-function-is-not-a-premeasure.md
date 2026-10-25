---
id: cex-finite-cofinite-set-function-is-not-a-premeasure
kind: counterexample
title: "Zero on finite sets and infinity on cofinite sets is finitely additive but not a premeasure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-premeasure-on-an-algebra, def-algebra-of-subsets, def-countable]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Exercises 1.7.4(iii) and 1.7.6"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement refuted

Every finitely additive nonnegative function on an algebra that vanishes at the empty set is a premeasure.

## Facts & Assumptions

**Given:** The finite-cofinite algebra $\mathcal A_0$ of $\mathbb N$ and $\mu_0(A)=0$ for finite $A$, $\mu_0(A)=+\infty$ for cofinite $A$.

[F1] A **premeasure** on an algebra $\mathcal A_0$ vanishes at the empty set and is countably additive whenever a disjoint sequence in $\mathcal A_0$ has its union in $\mathcal A_0$. ([[def-premeasure-on-an-algebra]])

## Counterexample

**Proof technique:** direct.

1.1 The finite-cofinite family is an algebra. For a disjoint pair, two cofinite members cannot occur; two finite members and their union all have value $0$, while if one member is cofinite then both it and the union have value $+\infty$, so $\mu_0$ is finitely additive. [given, algebra]

2.1 The disjoint singleton sequence has union $\mathbb N\in\mathcal A_0$, but $\mu_0(\mathbb N)=+\infty$ and $\sum_{k=0}^{\infty}\mu_0(\{k\})=0$, violating the countable-additivity clause of [F1]. [step 1.1, F1, algebra] ∎
