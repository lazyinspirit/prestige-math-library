---
id: lem-sigma-finite-caratheodory-sets-have-generated-measurable-hulls
kind: lemma
title: "Under sigma-finiteness, every Carathéodory measurable set differs from a generated measurable hull by a null set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-premeasure-on-an-algebra, thm-premeasure-induced-outer-measure-is-regular, thm-caratheodory-extension-theorem, def-caratheodory-measurable-set, def-generated-sigma-algebra, def-countable-choice]
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
    - title: "G. Folland, Real Analysis, 2nd ed., Exercise 18(c) in Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.7.9(i)"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Assume countable choice. If $\mu_0$ is sigma-finite, $\mu^*$ is its induced outer measure, and $E$ is Carathéodory measurable, then there is $H\in\sigma(\mathcal A_0)$ with $E\subseteq H$ and $\mu^*(H\setminus E)=0$.

## Facts & Assumptions

**Given:** Countable choice, a sigma-finite premeasure $\mu_0$, a covering sequence $(A_n)$ of finite premeasure, and a Carathéodory measurable set $E$.

[F1] A **premeasure** on an algebra $\mathcal A_0$ vanishes at the empty set and is countably additive whenever a disjoint sequence in $\mathcal A_0$ has its union in $\mathcal A_0$. ([[def-premeasure-on-an-algebra]])

[L1] Assuming countable choice, an outer measure induced by a premeasure is regular, and every set has a measurable hull in $\sigma(\mathcal A_0)$. ([[thm-premeasure-induced-outer-measure-is-regular]])

[L2] Assuming countable choice, the induced outer measure restricts to a complete measure on its Carathéodory sigma-algebra and to a measure on $\sigma(\mathcal A_0)$ extending $\mu_0$. ([[thm-caratheodory-extension-theorem]])

## Proof

**Proof technique:** direct.

1.1 Put $P_n=\bigcup_{k\le n}A_k$, so [F1] gives $P_n\in\mathcal A_0$, $P_n\uparrow X$, and $\mu_0(P_n)<+\infty$; using countable choice and [L1], select $H_n\in\sigma(\mathcal A_0)$ with $E\cap P_n\subseteq H_n$ and $\mu^*(H_n)=\mu^*(E\cap P_n)$. [F1, L1, choose]

2.1 Both $H_n$ and $E\cap P_n$ are Carathéodory measurable by [L2], and their common measure is finite, so additivity on $H_n=(E\cap P_n)\sqcup(H_n\setminus(E\cap P_n))$ gives $\mu^*(H_n\setminus(E\cap P_n))=0$. [step 1.1, L2, algebra]

3.1 The set $H=\bigcup_nH_n$ belongs to $\sigma(\mathcal A_0)$ and contains $E$ because $P_n\uparrow X$; moreover $H\setminus E$ is contained in the union of the null excesses from step 2.1, so countable subadditivity gives $\mu^*(H\setminus E)=0$. [step 2.1, algebra] ∎
