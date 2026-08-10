---
id: cor-uniform-cauchy-criterion-function-series
kind: corollary
title: "A series of real-valued functions converges uniformly if and only if its tails are uniformly small"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series-of-real-functions, thm-uniform-cauchy-criterion-real-functions, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Sequences and Series of Functions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%253A_Function_Limits_and_Continuity/4.12%253A_Sequences_and_Series_of_Functions"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $f_k:X\to\mathbb{R}$. The function series
$\sum f_k$ converges uniformly on $X$ if and only if, for every real
$\varepsilon>0$, there is $N\in\mathbb{N}$ such that

$$\left|\sum_{k=m+1}^{n}f_k(x)\right|<\varepsilon$$

for every $n>m\ge N$ and every $x\in X$.

## Facts & Assumptions

**Given:** A set $X$, functions $f_k:X\to\mathbb{R}$, and partial-sum functions $S_r(x)=\sum_{k<r}f_k(x)$.

[L1] The series $\sum f_k$ converges uniformly exactly when its partial-sum sequence $(S_r)$ converges uniformly ([[def-series-of-real-functions]]).

[L2] A sequence of real-valued functions converges uniformly exactly when it is uniformly Cauchy ([[thm-uniform-cauchy-criterion-real-functions]]).

[L3] For $n>m$, $\sum_{k=m+1}^{n}f_k(x)=S_{n+1}(x)-S_{m+1}(x)$, and $|-u|=|u|$ for every real $u$ ([[def-series-of-real-functions]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $\sum f_k$ converges uniformly, and let $\varepsilon>0$ be real. [L1]

1.2 Conversely, suppose the displayed tail condition holds, and fix a real $\varepsilon>0$ and a corresponding index $N$. [given]

2.1 By [L1] and [L2], choose $K$ such that $|S_p(x)-S_q(x)|<\varepsilon$ for every $p,q\ge K$ and every $x\in X$. [step 1.1, L1, L2, choose]

2.2 Put $K:=N+1$. If $p,q\ge K$ and $x\in X$, then the difference is $0$ when $p=q$; if $p>q$, set $m=q-1\ge N$ and $n=p-1>m$, so the tail condition and [L3] give $|S_p(x)-S_q(x)|<\varepsilon$; the case $q>p$ follows by symmetry of absolute value. [step 1.2, L3, algebra]

3.1 For $n>m\ge K$ and $x\in X$, the indices $n+1,m+1$ are at least $K$, so [L3] and step 2.1 give $\left|\sum_{k=m+1}^{n}f_k(x)\right|<\varepsilon$. [step 2.1, L3]

3.2 Thus $(S_r)$ is uniformly Cauchy, hence converges uniformly by [L2], and therefore $\sum f_k$ converges uniformly by [L1]. [step 2.2, L1, L2]

4.1 Steps 3.1 and 3.2 prove the two implications, hence the equivalence. [step 3.1, step 3.2] ∎
