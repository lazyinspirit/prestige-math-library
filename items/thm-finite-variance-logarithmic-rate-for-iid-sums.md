---
id: thm-finite-variance-logarithmic-rate-for-iid-sums
kind: theorem
title: Finite variance logarithmic rate for iid sums
deps: ["thm-kolmogorov-strong-law-under-summable-normalized-variances", "def-integer-power", "def-real-power", "thm-natural-logarithm-laws", "thm-real-power-laws", "thm-real-power-continuity-and-derivatives", "thm-p-series-real-exponents", "thm-direct-comparison-test"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, Theorem 2.5.11, p. 87; Roch, Theorem 5.9, pp. 5–6
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Roch, Note 5, Theorems 5.8–5.9, printed pp. 5–6 (mutual independence specialization only)
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

If IID real variables have mean $\mu$ and finite variance v, then for every $\varepsilon>0$, $(S_n-n\mu)/(\sqrt n(\log n)^{1/2+\varepsilon})\to0$ almost surely, with the displayed normalization used for $n\ge2$.

## Facts & Assumptions

[F1] [[thm-natural-logarithm-laws]]: The function $\log:(0,\infty)\to\mathbb R$ is continuous and strictly increasing, is onto $\mathbb R$, and satisfies, for $x,y>0$,
$$\log(xy)=\log x+\log y,\qquad \log(x/y)=\log x-\log y,\qquad \log(1/x)=-\log x.$$
Also $\log 1=0$.

[F2] [[thm-real-power-continuity-and-derivatives]]: For $a>0$, the function $x\mapsto a^x$ is continuous on $\mathbb R$ and
$$(a^x)'=a^x\log a.$$
For $\alpha\in\mathbb R$, the function $x\mapsto x^\alpha$ is continuous and differentiable on $(0,\infty)$, with
$$(x^\alpha)'=\alpha x^{\alpha-1}.$$

[F3] [[thm-real-power-laws]]: For $a,b>0$ and $r,s\in\mathbb R$,
$$a^{r+s}=a^ra^s,\qquad (ab)^r=a^rb^r,\qquad (a/b)^r=a^r/b^r,\qquad (a^r)^s=a^{rs}.$$

[F4] [[thm-p-series-real-exponents]]: For every real $p$,
$$\sum_{k\ge1}\frac1{k^p}\text{ converges}\quad\Longleftrightarrow\quad p>1.$$

[F5] [[thm-direct-comparison-test]]: Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is
$K \in \mathbb{N}$ with

$$0 \;\le\; a_k \;\le\; b_k \qquad \text{for all } k \ge K .$$

Then:

1. if $\sum b_k$ converges then $\sum a_k$ converges (def-series);
2. if $\sum a_k$ diverges then $\sum b_k$ diverges.

The same statement holds verbatim for series with a general starting index $m$,
applied to the shifted sequences of def-series.

The hypothesis is on the terms from some index on, not on all of them: finitely
many terms of either sequence may violate it, or be negative, without affecting
the conclusion. What may not be dropped is nonnegativity of $(a_k)$ from that
index on.

[F6] [[thm-kolmogorov-strong-law-under-summable-normalized-variances]]: Let $(X_n)_{n\ge1}$ be independent square-integrable real random variables. Let $0<b_n$ be deterministic and nondecreasing with $b_n\to\infty$. If
$$\sum_{n\ge1}\frac{\operatorname{Var}(X_n)}{b_n^2}<\infty,$$
then
$$\frac1{b_n}\sum_{k=1}^n(X_k-\mathbb EX_k)\longrightarrow0\quad\text{almost surely}.$$
In particular, for IID centered square-integrable variables and any $\varepsilon>0$, $S_n/[\sqrt n(\log n)^{1/2+\varepsilon}]\to0$ almost surely (the displayed normalization is used for $n\ge2$).

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 Fix $\varepsilon$>0 and put $q=1$/2+$\varepsilon$. By F1, log $n>0$ for $n\ge2$. The derivatives in F2 show that positive powers are increasing; thus $b_n=\sqrt n(\log n)^q$ is positive and increasing for $n\ge2$ and tends to infinity. Set $b_1$=$b_2$ to obtain a positive nondecreasing sequence at every index. [F1, F2]

1.2 Using integer powers of 2 and F3, for $2^k\le n<2^{k+1}$ with $k\ge1$, $1/[n(\log n)^{1+2\varepsilon}]\le2^{-k}(k\log2)^{-1-2\varepsilon}$. There are $2^k$ terms in this block, so its sum is at most $(\log2)^{-1-2\varepsilon}k^{-1-2\varepsilon}$. F4 and F5 bound all partial sums of the nonnegative block series, because 1+2epsilon>1. Therefore $\sum_n v/b_n^2<\infty$, including the single finite $n=1$ term. [F3, F4, F5]

2.1 The original variables are independent and square-integrable. Step 1.1 and step 1.2 verify all hypotheses of the general normalized-variance conclusion of F6. It gives $(S_n-n\mu)/b_n\to0$ almost surely, as required for the arbitrarily fixed $\varepsilon$. [F6, step 1.2] ∎
