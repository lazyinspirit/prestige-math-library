---
id: thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces
kind: theorem
title: "Vitali convergence theorem on finite and sigma-finite measure spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-measure, def-convergence-in-l-one-of-a-measure, def-uniformly-integrable-family, def-tight-family-of-integrable-functions, def-finite-sigma-finite-and-semifinite-measures, thm-l-one-convergence-implies-convergence-in-measure, thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces, thm-riesz-subsequence-theorem-for-convergence-in-measure, thm-absolute-continuity-of-the-integral, thm-fatou-lemma]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Terence Tao, 245A Notes 4: Modes of convergence, Theorem 29"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
    - title: "H. L. Royden and P. M. Fitzpatrick, Real Analysis, 4th ed., The Vitali Convergence Theorem"
      url: "https://fliphtml5.com/avac/zfwm/Measure_Theory_Royden/"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 7.22"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space, let
$f_n : X \to \mathbb R$ be measurable with $f_n \in L^1(\mu)$ for every $n$,
and let $f:X \to \mathbb R$ be measurable.

1. If $\mu(X)<+\infty$, then
   $f_n \to f$ in $L^1(\mu)$ if and only if $f_n \to f$ in measure and the
   family $\{f_n : n \in \mathbb N\}$ is uniformly integrable.
2. If $\mu$ is sigma-finite and $f_n \to f$ in measure, and the family
   $\{f_n : n \in \mathbb N\}$ is uniformly integrable and tight, then
   $f \in L^1(\mu)$ and $f_n \to f$ in $L^1(\mu)$.

## Facts & Assumptions

**Given:** Integrable real-valued functions $f_n \in L^1(\mu)$ and a measurable $f:X \to \mathbb R$.

[L1] Convergence in measure means that for every real $\varepsilon>0$, $\mu(\{|f_n-f|>\varepsilon\}) \to 0$. ([[def-convergence-in-measure]])

[L2] Convergence in $L^1(\mu)$ means $\int |f_n-f|\,d\mu \to 0$. ([[def-convergence-in-l-one-of-a-measure]])

[L3] On a finite measure space, uniform integrability is equivalent to $L^1$-boundedness plus uniform absolute continuity. ([[thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces]])

[L4] Convergence in $L^1(\mu)$ implies convergence in measure. ([[thm-l-one-convergence-implies-convergence-in-measure]])

[L5] Convergence in measure has a subsequence converging almost everywhere. ([[thm-riesz-subsequence-theorem-for-convergence-in-measure]])

[L6] If $g \in L^1(\mu)$ and $\varepsilon>0$, then there is $\delta>0$ such that $\mu(E)<\delta \Rightarrow \int_E |g|\,d\mu<\varepsilon$. ([[thm-absolute-continuity-of-the-integral]])

[L7] For nonnegative measurable functions $u_n$, $\int \liminf_n u_n\,d\mu\le \liminf_n \int u_n\,d\mu$. ([[thm-fatou-lemma]])

[L8] A family is tight when for every $\varepsilon>0$ there is a measurable set $E$ of finite measure such that $\sup_n\int_{X\setminus E}|f_n|\,d\mu<\varepsilon$. ([[def-tight-family-of-integrable-functions]])

## Proof

**Proof technique:** direct.

1.1 Assume $\mu(X)<+\infty$ and $f_n \to f$ in $L^1(\mu)$. By [L4], the sequence converges to $f$ in measure. To prove uniform integrability, it suffices by [L3] to show $L^1$-boundedness and uniform absolute continuity. For $L^1$-boundedness, choose $N$ so that $\int|f_n-f|\,d\mu<1$ for $n \ge N$. Then $\int|f_n|\,d\mu\le \int|f|\,d\mu+1$ for $n \ge N$, and the finitely many initial terms may be absorbed into one larger bound. [L2, L3, L4, algebra]

1.2 Still on a finite measure space, assume $f_n \to f$ in measure and the family $\{f_n\}$ is uniformly integrable. By [L3], the family is $L^1$-bounded and uniformly absolutely continuous on small sets. By [L5], some subsequence $f_{n_k}$ converges to $f$ almost everywhere. Fatou's lemma [L7] then gives $$\int |f|\,d\mu\le \liminf_{k\to\infty}\int |f_{n_k}|\,d\mu<+\infty,$$ so $f \in L^1(\mu)$. [L3, L5, L7, algebra]

2.1 Still under step 1.1, let $\varepsilon>0$. Choose $N$ so that $\int|f_n-f|\,d\mu<\varepsilon/2$ for $n \ge N$. Apply [L6] to $f$ and to the finitely many functions $f_0,\dots,f_{N-1}$, and let $\delta$ be the minimum of the resulting positive numbers. Then $\mu(E)<\delta$ implies $\int_E |f_n|\,d\mu<\varepsilon$ for every $n<N$, while for $n \ge N$ one has $$\int_E |f_n|\,d\mu\le \int_E |f|\,d\mu+\int |f_n-f|\,d\mu<\varepsilon.$$ So [L3] yields uniform integrability. [L2, L3, L6, choose, algebra]

2.2 Let $\varepsilon>0$. Choose $\delta>0$ such that $\mu(E)<\delta$ implies both $\sup_n\int_E |f_n|\,d\mu<\varepsilon/3$ and $\int_E |f|\,d\mu<\varepsilon/3$; the first uses step 1.2 together with [L3], and the second uses [L6]. Choose $\eta>0$ with $\eta\mu(X)<\varepsilon/3$. Since $f_n \to f$ in measure, there is $N$ such that $\mu(B_n)<\delta$ for $n \ge N$, where $B_n:=\{|f_n-f|>\eta\}$. Then for $n \ge N$, $$\int |f_n-f|\,d\mu \le \int_{B_n}|f_n|\,d\mu+\int_{B_n}|f|\,d\mu+\int_{X\setminus B_n}\eta\,d\mu <\varepsilon.$$ So $f_n \to f$ in $L^1(\mu)$. [step 1.2, L1, L2, L3, L6, choose, algebra]

3.1 Assume now that $\mu$ is sigma-finite, that $f_n \to f$ in measure, and that the family $\{f_n\}$ is uniformly integrable and tight. Let $\varepsilon>0$. By [L8], choose a measurable set $E$ with $\mu(E)<+\infty$ and $$\sup_n\int_{X\setminus E}|f_n|\,d\mu<\varepsilon/4.$$ Because $f_n \to f$ in measure on $X$, the restricted sequence converges in measure on $E$ as well, and uniform integrability persists on $E$. Therefore step 2.2 applied on the finite measure space $E$ gives $f|_E \in L^1(\mu)$ and $\int_E |f_n-f|\,d\mu \to 0$. By [L5], after passing to a subsequence if necessary we may assume $f_{n_k}\to f$ almost everywhere on $X$. Applying [L7] to the nonnegative functions $|f_{n_k}|\mathbf 1_{X\setminus E}$ gives $$\int_{X\setminus E}|f|\,d\mu \le \liminf_{k\to\infty}\int_{X\setminus E}|f_{n_k}|\,d\mu \le \varepsilon/4.$$ Hence $f \in L^1(\mu)$. For all large $n$ one has $\int_E |f_n-f|\,d\mu<\varepsilon/2$, and then $$\int |f_n-f|\,d\mu \le \int_E |f_n-f|\,d\mu+\int_{X\setminus E}|f_n|\,d\mu+\int_{X\setminus E}|f|\,d\mu <\varepsilon.$$ So $f_n \to f$ in $L^1(\mu)$. [step 2.2, L5, L7, L8, choose, algebra]

4.1 Step 1.1 proves the forward finite implication, steps 1.2 and 2.2 prove the reverse finite implication, and step 3.1 proves the sigma-finite tight form. [step 1.1, step 2.1, step 1.2, step 2.2, step 3.1] ∎
