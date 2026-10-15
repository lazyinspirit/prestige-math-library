---
id: thm-lebesgue-measure-is-a-complete-measure
kind: theorem
title: "Assuming countable choice, $\\mathcal{L}(\\mathbb{R}^n)$ is a sigma-algebra containing every elementary set and $\\lambda_n$ is a complete measure extending elementary volume"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume, thm-caratheodory-outer-measure-theorem, lem-source-algebra-is-caratheodory-measurable, thm-caratheodory-extension-theorem, prop-outer-null-sets-are-caratheodory-measurable, def-measure, def-complete-measure-space, def-countable-choice, def-elementary-set-in-rn, def-lebesgue-outer-measure, thm-box-volume-is-a-premeasure-on-the-elementary-algebra, thm-elementary-volume-is-well-defined, def-half-open-box]
justified_by: []
aliases: []
landmark: true
short: "$\\lambda_n$ is a complete measure"
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Theorem 2.9 and Proposition 2.12"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). Then:

1. $\mathcal{L}(\mathbb{R}^n)$ is a sigma-algebra on $\mathbb{R}^n$ and
   $\lambda_n$ is a measure on it ([[def-measure]]);
2. the measure space $(\mathbb{R}^n, \mathcal{L}(\mathbb{R}^n), \lambda_n)$ is
   complete ([[def-complete-measure-space]]), and every $S \subseteq \mathbb{R}^n$
   with $\lambda_n^*(S) = 0$ is Lebesgue measurable with $\lambda_n(S) = 0$;
3. every elementary set is Lebesgue measurable and
   $\lambda_n(A) = \mu_0(A)$ for every $A \in \mathcal{E}_n$; in particular
   $\lambda_n(B) = \operatorname{vol}(B)$ for every half-open box $B$,
   $\lambda_n(\varnothing) = 0$ and $\lambda_n(\mathbb{R}^n) = +\infty$.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, Lebesgue outer measure $\lambda_n^*$, and the family $\mathcal{L}(\mathbb{R}^n)$ of sets Carathéodory measurable for it.

[L1] A set $E \subseteq \mathbb{R}^n$ is **Lebesgue measurable** when it is Carathéodory measurable for $\lambda_n^*$, the family of these is $\mathcal{L}(\mathbb{R}^n)$, and $\lambda_n := \lambda_n^*\!\restriction_{\mathcal{L}(\mathbb{R}^n)}$ ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[L2] Assuming countable choice, $\lambda_n^*$ is an outer measure on $\mathbb{R}^n$, and $\lambda_n^*(A) = \mu_0(A)$ for every elementary set $A$ ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]]).

[L3] $\lambda_n^*$ is the outer set function induced by the premeasure $\mu_0$ on the algebra $\mathcal{E}_n$ of elementary sets ([[def-lebesgue-outer-measure]]).

[L4] Elementary volume $\mu_0$ is a sigma-finite premeasure on $\mathcal{E}_n$ ([[thm-box-volume-is-a-premeasure-on-the-elementary-algebra]]); its value on a half-open box is the box volume ([[thm-elementary-volume-is-well-defined]], [[def-half-open-box]]), and $\mathbb R^n$ is elementary with infinite elementary volume ([[def-elementary-set-in-rn]]).

[F1] For an outer measure $\mu^*$ on $X$, the Carathéodory measurable subsets form a sigma-algebra, and the restriction of the outer measure to it is a complete measure ([[thm-caratheodory-outer-measure-theorem]]).

[F2] Assume the Axiom of Countable Choice. Every member of the source algebra is Carathéodory measurable for the induced outer measure ([[lem-source-algebra-is-caratheodory-measurable]]).

[F3] Assume the Axiom of Countable Choice. If $\mu_0$ is a premeasure on an algebra $\mathcal A_0$ of subsets of $X$ and $\mu^*$ is its induced outer set function, then $\mathcal A_0\subseteq\mathcal M_{\mu^*}$ and $\mu^*|_{\mathcal A_0}=\mu_0$ ([[thm-caratheodory-extension-theorem]]).

[F4] Every set of outer measure zero, and every subset of it, is Carathéodory measurable and has outer measure zero ([[prop-outer-null-sets-are-caratheodory-measurable]]).

[F5] A measure space $(X,\mathcal A,\mu)$ is **complete** if every subset of every measurable $\mu$-null set is measurable ([[def-complete-measure-space]]); and a **measure** on $(X,\mathcal A)$ is a function $\mu:\mathcal A\to[0,+\infty]$ with $\mu(\varnothing)=0$ that is countably additive on pairwise disjoint sequences ([[def-measure]]).

[F6] The **Axiom of Countable Choice** says that for every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that $f(n) \in X_n$ for every $n \in \mathbb{N}$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Under countable choice $\lambda_n^*$ is an outer measure on $\mathbb{R}^n$, so [F1] applies to it: its Carathéodory measurable sets, which are by definition the members of $\mathcal{L}(\mathbb{R}^n)$, form a sigma-algebra, and the restriction $\lambda_n$ of $\lambda_n^*$ to it is a complete measure. [L1, L2, F1, F5, F6]

1.2 Since $\lambda_n^*$ is the outer set function induced by the premeasure $\mu_0$ on $\mathcal{E}_n$, the extension theorem and the source-algebra lemma give $\mathcal{E}_n \subseteq \mathcal{L}(\mathbb{R}^n)$ and $\lambda_n^*(A)=\mu_0(A)$ there; a half-open box and $\varnothing$ and $\mathbb{R}^n$ are elementary, so $\lambda_n(B)=\operatorname{vol}(B)$, $\lambda_n(\varnothing)=0$ and $\lambda_n(\mathbb{R}^n)=+\infty$. [L1, L3, L4, F2, F3, F6]

1.3 A set $S$ with $\lambda_n^*(S)=0$ is Carathéodory measurable for $\lambda_n^*$, hence Lebesgue measurable, and its measure is its outer measure, namely $0$. [L1, F4]

2.1 Claim 1 and the completeness half of claim 2 are step 1.1, the null-set half of claim 2 is step 1.3, and claim 3 is step 1.2. [step 1.1, step 1.2, step 1.3] ∎
