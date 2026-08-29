---
id: thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order
kind: theorem
title: "Local conditioning times backward error controls forward error to first order"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-absolute-and-relative-local-condition-numbers-of-a-problem-map, def-normwise-and-componentwise-backward-error-for-linear-systems, def-forward-and-backward-stability-for-a-problem-family]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Theorem 15.1"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---



## Statement

Let $f:X\to Y$ be a map between normed spaces, let $x\in\operatorname{dom} f$,
and let $\kappa:=\kappa_{\mathrm{abs}}(f,x)$ be the absolute local condition
number of [[def-absolute-and-relative-local-condition-numbers-of-a-problem-map]].

1. **Quantified form.** If $\kappa<+\infty$, then for every $c>\kappa$ there is
   a $\delta>0$ such that every $h\in X$ with $0<\lVert h\rVert<\delta$ and
   $x+h\in\operatorname{dom} f$ satisfies
   $$\lVert f(x+h)-f(x)\rVert\;\le\;c\,\lVert h\rVert.$$
2. **First-order form.** If $\kappa<+\infty$, then along admissible $h$,
   $$\lVert f(x+h)-f(x)\rVert\;\le\;\bigl(\kappa+o(1)\bigr)\lVert h\rVert\qquad\text{as }\lVert h\rVert\to 0,$$
   that is: for every $\varepsilon>0$ there is $\delta>0$ such that
   $0<\lVert h\rVert<\delta$ implies $\lVert f(x+h)-f(x)\rVert\le(\kappa+\varepsilon)\lVert h\rVert$.
3. **Relative form.** If additionally $x\ne 0$ and $f(x)\ne 0$, and
   $\kappa_{\mathrm{rel}}:=\kappa\,\lVert x\rVert/\lVert f(x)\rVert$, then along
   admissible $h$,
   $$\frac{\lVert f(x+h)-f(x)\rVert}{\lVert f(x)\rVert}\;\le\;\bigl(\kappa_{\mathrm{rel}}+o(1)\bigr)\frac{\lVert h\rVert}{\lVert x\rVert}\qquad\text{as }\lVert h\rVert\to 0.$$

In the vocabulary of
[[def-forward-and-backward-stability-for-a-problem-family]]: a computed value
$\widehat y=f(x+h)$ has backward error $\lVert h\rVert$, and its forward error
is, to first order in that backward error, at most the condition number times
the backward error; the linear-system instance uses the backward error of
[[def-normwise-and-componentwise-backward-error-for-linear-systems]].

## Facts & Assumptions

**Given:** Normed spaces $X,Y$, a map $f:X\to Y$, a point $x\in\operatorname{dom} f$, and $\kappa=\inf_{\delta>0}S_{f,x}(\delta)$ where $S_{f,x}(\delta)=\sup\{\lVert f(x+h)-f(x)\rVert/\lVert h\rVert:0<\lVert h\rVert<\delta,\ x+h\in\operatorname{dom} f\}$.

[L1] The absolute condition number is the infimum over $\delta>0$ of the nondecreasing map $\delta\mapsto S_{f,x}(\delta)$ ([[def-absolute-and-relative-local-condition-numbers-of-a-problem-map]]).

[L2] An infimum characterisation: if $\kappa$ is the infimum of a set $S\subseteq[0,+\infty]$, then for every $c>\kappa$ there is an element $s\in S$ with $s<c$; in particular for every $c>\kappa$ there is $\delta>0$ with $S_{f,x}(\delta)<c$.

## Proof

**Proof technique:** direct.

1.1 By [L2] applied to the set $S=\{S_{f,x}(\delta):\delta>0\}$ whose infimum is $\kappa$ by [L1], every $c>\kappa$ admits some $\delta_0>0$ with $S_{f,x}(\delta_0)<c$. [L1, L2, choose]

2.1 By the definition of $S_{f,x}(\delta_0)$ as a supremum, every admissible $h$ with $0<\lVert h\rVert<\delta_0$ satisfies $\lVert f(x+h)-f(x)\rVert/\lVert h\rVert\le S_{f,x}(\delta_0)<c$, hence $\lVert f(x+h)-f(x)\rVert\le c\lVert h\rVert$, which is claim 1 with $\delta:=\delta_0$. [step 1.1, given, algebra]

3.1 For every $\varepsilon>0$ the number $c:=\kappa+\varepsilon$ is strictly larger than $\kappa$, so claim 1 supplies $\delta>0$ with $\lVert f(x+h)-f(x)\rVert\le(\kappa+\varepsilon)\lVert h\rVert$ for all admissible $h$ of norm below $\delta$; this is exactly the stated bound, which is claim 2. [step 2.1, algebra]

4.1 For the relative form, divide the inequality of claim 2 by the fixed positive number $\lVert f(x)\rVert$ and multiply by the fixed positive number $\lVert x\rVert$: $\lVert f(x+h)-f(x)\rVert/\lVert f(x)\rVert\le(\kappa+\varepsilon)\lVert h\rVert/\lVert f(x)\rVert=\bigl(\kappa\lVert x\rVert/\lVert f(x)\rVert+\varepsilon\lVert x\rVert/\lVert f(x)\rVert\bigr)\lVert h\rVert/\lVert x\rVert$, and the error term is $o(1)\lVert h\rVert/\lVert x\rVert$ because the positive constants $\lVert x\rVert,\lVert f(x)\rVert$ are fixed, which is claim 3. [step 3.1, given, algebra]

5.1 Claims 1, 2 and 3 are steps 2.1, 3.1 and 4.1. [step 2.1, step 3.1, step 4.1] ∎
