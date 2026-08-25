---
id: thm-lebesgue-measure-under-dilations-and-reflections
kind: theorem
title: "For a nonzero real $c$, dilation by $c$ multiplies Lebesgue outer measure by $|c|^n$, and reflection in the origin preserves it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure, def-lebesgue-outer-measure, def-multidimensional-rectangle-and-volume, def-integer-power, lem-power-laws, def-caratheodory-measurable-set, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, def-extended-reals, def-nonnegative-extended-series, lem-finite-sum-laws, def-finite-sum, def-abs-value, lem-of-abs-value, def-countable-choice, lem-of-inverse-positive, lem-of-sign-rules, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Theorem 3.4"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$, **assume the Axiom of Countable Choice**
([[def-countable-choice]]), let $c$ be a nonzero real and write
$cE := \{\, cx : x \in E \,\}$ for $E \subseteq \mathbb{R}^n$, where
$(cx)_i := cx_i$. Then:

1. $\lambda_n^*(cE) = |c|^{\,n}\,\lambda_n^*(E)$ for every subset $E$, the
   product being defined in $\overline{\mathbb{R}}$ because $|c|^{\,n} > 0$;
2. $E$ is Lebesgue measurable if and only if $cE$ is;
3. $\lambda_n(cE) = |c|^{\,n}\lambda_n(E)$ for every Lebesgue measurable $E$.

At $c = -1$ the map is reflection in the origin and $|c|^{\,n} = 1$, so it
preserves outer measure, measurability and measure. The value $c = 0$ is
excluded because $0E$ is $\{0\}$ or $\varnothing$ and carries no information
about $E$.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, a nonzero real $c$, and a subset $E \subseteq \mathbb{R}^n$.

[L1] Assuming countable choice, $\lambda^{\mathrm{cl}}(E) = \lambda_n^*(E)$, the infimum of $\sum_{k=0}^{\infty}\operatorname{vol}[u^k,v^k]$ over countable covers of $E$ by closed rectangles ([[lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure]], [[def-lebesgue-outer-measure]]).

[L2] A set $E$ is **Lebesgue measurable** when $\lambda_n^*(A) = \lambda_n^*(A\cap E)+\lambda_n^*(A\setminus E)$ for every $A \subseteq \mathbb{R}^n$, and $\lambda_n$ is the restriction of $\lambda_n^*$ to the family of these ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[def-caratheodory-measurable-set]], [[thm-lebesgue-measure-is-a-complete-measure]]).

[F1] $[a,b]:=\{x\in\mathbb R^m:a_j\le x_j\le b_j\ (j<m)\}$ and $\operatorname{vol}[a,b]:=\prod_{j<m}(b_j-a_j)$ ([[def-multidimensional-rectangle-and-volume]]).

[F2] $\prod_{k<n}(a_kb_k) = (\prod_{k<n}a_k)(\prod_{k<n}b_k)$, and finite products are defined by the recursion $\Pi_0 = 1$, $\Pi_{\sigma(n)} = \Pi_n \cdot a_n$ ([[lem-finite-sum-laws]], claim 6; [[def-finite-sum]]).

[F3] The defining recursion for natural powers is $a^0 = 1$ and $a^{n+1} = a^n\cdot a$ ([[def-integer-power]]), and $(ab)^n = a^nb^n$ ([[lem-power-laws]], claim 1).

[F4] $ab := +\infty$ when one of $a, b$ is $\pm\infty$, the other is $\ne 0$, and both are $> 0$ or both are $< 0$; every product with one factor $0$ and the other $\pm\infty$ is left undefined ([[def-extended-reals]]).

[F5] The absolute value satisfies $|c| > 0$ for $c \ne 0$ and $|cd| = |c||d|$ ([[def-abs-value]], [[lem-of-abs-value]]).

[F6] For positive reals, multiplication preserves order and reciprocals stay positive: if $0<q$ and $u\le v$ then $qu\le qv$, and if $0<q$ then $0<q^{-1}$ ([[lem-of-sign-rules]], [[lem-of-inverse-positive]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 For reals $u_i \le v_i$ one has $c[u,v] = [cu,cv]$ when $c>0$ and $c[u,v] = [cv,cu]$ when $c<0$, in both cases a closed rectangle whose $i$-th side length is $|c|(v_i-u_i)$; its volume is therefore $\prod_{i<n}\big(|c|(v_i-u_i)\big) = \big(\prod_{i<n}|c|\big)\prod_{i<n}(v_i-u_i) = |c|^{\,n}\operatorname{vol}[u,v]$. [F1, F2, F3, F5]

1.2 Put $q:=|c|^{\,n}>0$. If $s_0=\inf S$ for a nonempty $S\subseteq[0,+\infty]$, then $qs_0$ is a lower bound of $qS:=\{qs:s\in S\}$: for every real $s\in S$ the inequality $s_0\le s$ gives $qs_0\le qs$ by [F6], while the claim is automatic when $s=+\infty$. Conversely, let $t$ be a lower bound of $qS$. If $t=+\infty$, then every element of $qS$ is $+\infty$, hence every element of $S$ is $+\infty$ and therefore $s_0=+\infty$. If $t$ is real, then $q^{-1}>0$ by [F6], so $t\le qs$ implies $q^{-1}t\le s$ for every real $s\in S$, and again the claim is automatic when $s=+\infty$; thus $q^{-1}t$ is a lower bound of $S$, so $q^{-1}t\le s_0$ and therefore $t\le qs_0$. Hence $\inf(qS)=q\,\inf S$. [F3, F4, F5, F6]

2.1 The assignment $[u,v]\mapsto c[u,v]$ is a bijection from the countable closed-rectangle covers of $E$ onto those of $cE$, with inverse given by multiplication by $c^{-1}$. For one such cover, let $(a_k)$ be its sequence of rectangle volumes and $(s_n)$ the partial sums of $\sum_{k=0}^\infty a_k$ in the sense of [[def-nonnegative-extended-series]]; let $(t_n)$ be the partial sums of the transformed cover cost. By step 1.1 each transformed term is $qa_k$, and the shared recursion of nonnegative extended series gives $t_n=qs_n$ for every $n$. Therefore the transformed cover cost is $q\sum_{k=0}^\infty a_k$ by step 1.2. So step 1.2 turns the infimum of all transformed cover costs into $\lambda^{\mathrm{cl}}(cE)=|c|^{\,n}\lambda^{\mathrm{cl}}(E)$, and [L1] then gives the same identity for $\lambda_n^*$. [step 1.1, step 1.2, L1, F6]

3.1 For a test set $A$ one has $A \cap cE = c\big((c^{-1}A)\cap E\big)$ and $A\setminus cE = c\big((c^{-1}A)\setminus E\big)$, so step 2.1 turns the Carathéodory identity for $cE$ tested against $A$ into $|c|^{\,n}$ times the identity for $E$ tested against $c^{-1}A$; multiplication by the positive real $|c|^{\,n}$ is injective on $[0,+\infty]$, and $A \mapsto c^{-1}A$ is a bijection of the power set, so $cE$ is Lebesgue measurable exactly when $E$ is, and then $\lambda_n(cE) = \lambda_n^*(cE) = |c|^{\,n}\lambda_n^*(E) = |c|^{\,n}\lambda_n(E)$. [step 2.1, L2, F4, F5] ∎
