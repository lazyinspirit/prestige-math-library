---
id: lem-it-finite-log-sum-inequality
kind: lemma
title: "Finite log-sum inequality with support and equality cases"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-it-information-units-and-logarithm-base, thm-finite-jensen-inequality, def-natural-logarithm, thm-natural-logarithm-laws, thm-logarithm-derivative-and-integral, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, cor-mean-value-theorem, def-convex-concave-and-midpoint-convex-functions]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite Jensen and finite sums are choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: "Chapter 2, §2.3, printed pp. 21–23, Lemma 2.3.1; finite divergence/Jensen inequality."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 2, §§2.1 and 2.5, printed pp. 21–22 and 31–35; finite KL support and processing arguments."
---

## Statement

Let $(a_i)_{i=1}^n,(b_i)_{i=1}^n$ be finite nonnegative real vectors, with $A=\sum_i a_i$ and $B=\sum_i b_i$. Interpret $\sum_{a_i>0}a_i\ln(a_i/b_i)$ as $+\infty$ if some $a_i>0=b_i$; otherwise zero coordinates contribute $0$. Interpret $A\ln(A/B)$ as $0$ if $A=0$ and as $+\infty$ if $A>0=B$. Then

$$\sum_{a_i>0}a_i\ln\frac{a_i}{b_i}\ge A\ln\frac AB.$$

When $A,B>0$, equality holds exactly when $a_i=(A/B)b_i$ for every $i$. If $A>0=B$, both sides are $+\infty$ and no finite equality characterization is asserted.

## Facts & Assumptions

**Given:** Finite nonnegative vectors $a,b$, and $A=\sum_i a_i$, $B=\sum_i b_i$.

[F1] [[def-it-information-units-and-logarithm-base]]: logarithms are natural by default, $0\ln0=0$, and a positive numerator over zero denominator contributes $+\infty$.

[F2] [[thm-natural-logarithm-laws]]: $\ln$ is continuous and strictly increasing on $(0,\infty)$ and $\ln1=0$.

[F3] [[thm-logarithm-derivative-and-integral]]: $(\ln t)'=1/t$ for $t>0$.

[F4] [[thm-algebra-of-derivatives]]: the product rule gives $(fg)'=f'g+fg'$ wherever both factors are differentiable.

[F5] [[thm-algebra-of-continuous-functions]]: products of functions continuous at a point are continuous there.

[F6] [[cor-mean-value-theorem]]: if $f$ is continuous on $[u,v]$ and differentiable on $(u,v)$, some $c\in(u,v)$ satisfies $f(v)-f(u)=f'(c)(v-u)$.

[F7] [[def-convex-concave-and-midpoint-convex-functions]]: strict convexity means $f(\lambda x+(1-\lambda)y)<\lambda f(x)+(1-\lambda)f(y)$ for $x\ne y$ and $0<\lambda<1$.

[F8] [[thm-finite-jensen-inequality]]: for finitely many points in an interval and nonnegative weights summing to one, a convex function at the weighted mean is at most the weighted mean of its values.

## Proof

1.1 Define $f(0)=0$ and $f(t)=t\ln t$ for $t>0$. On $(0,\infty)$, [F3] and [F4] give $f'(t)=\ln t+1$, which is strictly increasing by [F2]; [F2] and [F5] also give continuity of $f$ on every positive compact interval. If $0<u<v<w$, [F6] on $[u,v]$ and $[v,w]$ gives secant slopes $f'(c_1)$ and $f'(c_2)$ with $c_1<v<c_2$; strict increase makes the first slope smaller, which rearranges to the strict convexity inequality at $v$. For an endpoint $0<y$ and $0<\lambda<1$, $f(\lambda y)=\lambda f(y)+\lambda y\ln\lambda<\lambda f(y)+(1-\lambda)f(0)$ since $\ln\lambda<0$ by [F2]. Thus $f$ is strictly convex on $[0,\infty)$. [F2, F3, F4, F5, F6, F7, algebra]

1.2 If $A=0$, nonnegativity forces all $a_i=0$, so both sides are $0$. If $A>0=B$, all $b_i=0$ and at least one $a_i>0$, so both sides are $+\infty$. If $A,B>0$ but some $a_i>0=b_i$, the left side is $+\infty$ while the right side is finite. It remains to handle $A,B>0$ with $a_i=0$ whenever $b_i=0$. [given, F1, cases, algebra]

2.1 For the remaining case set $J=\{i:b_i>0\}$, $\lambda_i=b_i/B$, and $x_i=a_i/b_i$ for $i\in J$. These weights are positive and sum to one, and $\sum_{i\in J}\lambda_i x_i=A/B$. By [F8] and the convexity proved in step 1.1, $Bf(A/B)\le\sum_{i\in J}b_i f(a_i/b_i)$. Expanding $f$ turns this into the desired inequality, including coordinates with $a_i=0<b_i$ because $f(0)=0$. [F1, F8, step 1.1, algebra]

2.2 If all $x_i$ are equal, their weighted mean is $A/B$ and Jensen is an equality; together with $a_i=0$ when $b_i=0$, this is exactly $a_i=(A/B)b_i$ for every coordinate. Conversely, suppose they are not all equal, so $|J|\ge2$ and $0<\lambda_j<1$ for every $j$. For each $j\in J$, let $\mu_i=\lambda_i/(1-\lambda_j)$ for $i\ne j$ and $y_j=\sum_{i\ne j}\mu_i x_i$. Some $j$ has $x_j\ne y_j$: otherwise $x_j=(A/B-\lambda_jx_j)/(1-\lambda_j)$ for every $j$, forcing each $x_j=A/B$. Fix such a $j$. Then $A/B=\lambda_jx_j+(1-\lambda_j)y_j$; strict convexity from step 1.1 gives $f(A/B)<\lambda_jf(x_j)+(1-\lambda_j)f(y_j)$. By [F8] on the normalized remaining weights, $f(y_j)\le\sum_{i\ne j}\mu_if(x_i)$, making the total Jensen inequality strict. [F7, F8, step 1.1, choose, algebra]

3.1 Steps 1.2–2.2 prove the inequality in every extended-real support case and, when $A,B>0$, prove equality exactly at proportional vectors. [step 1.2, step 2.1, step 2.2] ∎
