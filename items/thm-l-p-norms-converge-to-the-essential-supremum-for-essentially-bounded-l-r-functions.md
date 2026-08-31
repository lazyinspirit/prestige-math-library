---
id: thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions
kind: theorem
title: "$L^p$ norms converge to the essential supremum for essentially bounded $L^r$ functions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-essential-supremum-is-attained-as-the-least-essential-bound, def-calligraphic-l-p-on-a-measure-space, def-l-infinity-on-a-measure-space, prop-order-and-scalar-rules-for-the-nonnegative-integral]
proof_strategy: "The upper bound is ||f||_p^p <= ||f||_infinity^(p - r) ||f||_r^r. For the lower bound, every epsilon below the essential supremum leaves a set of positive measure where |f| exceeds ||f||_infinity - epsilon, forcing the p-norm above that level as p grows."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem 8.1"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
    - title: "John K. Hunter, Measure Theory, Section 17"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $0<r<\infty$, let $f\in\mathcal L^r(\mu)\cap L^\infty(\mu)$, and put
$M:=\|f\|_\infty$. Then $f\in\mathcal L^p(\mu)$ for every finite $p\ge r$ and

$$\lim_{p\to\infty}\|f\|_p=M.$$

## Facts & Assumptions

**Given:** A real exponent $r>0$ and a function $f\in\mathcal L^r(\mu)\cap L^\infty(\mu)$.

[L1] If $M=\|f\|_\infty<\infty$, then $|f|\le M$ almost everywhere and $M$ is the least essential bound ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[L2] Membership in $L^r(\mu)$ and $L^\infty(\mu)$ is defined in [[def-calligraphic-l-p-on-a-measure-space]] and [[def-l-infinity-on-a-measure-space]].

[L3] The nonnegative integral is monotone and homogeneous ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Proof

**Proof technique:** The upper bound is $\|f\|_p^p\le\|f\|_\infty^{p-r}\|f\|_r^r$. For the lower bound, every $\varepsilon$ below the essential supremum leaves a set of positive measure where $|f|$ exceeds $\|f\|_\infty-\varepsilon$, forcing the $p$-norm above that level as $p$ grows.

1.1 If $M=0$, then [L1] gives $|f|=0$ almost everywhere, so $$\|f\|_p^p=\int |f|^p\,d\mu=0$$ for every finite $p\ge r$. Hence $\|f\|_p=0=M$ for all such $p$, and the conclusion follows in this case. [L1, L3, given]

1.2 Assume from now on that $M>0$. For every finite $p\ge r$, one has $$\|f\|_p^p=\int |f|^p\,d\mu\le M^{p-r}\int |f|^r\,d\mu=M^{p-r}\|f\|_r^r,$$ because [L1] gives $|f|^p=|f|^r|f|^{p-r}\le M^{p-r}|f|^r$ almost everywhere. Thus $f\in\mathcal L^p(\mu)$ and $$\|f\|_p\le M^{1-r/p}\|f\|_r^{r/p}.$$ In particular, $$\limsup_{p\to\infty}\|f\|_p\le M.$$ [L1, L2, L3, given, algebra]

2.1 Fix $\varepsilon$ with $0<\varepsilon<M$. Because $M$ is the least essential bound, the set $E_\varepsilon:=\{|f|>M-\varepsilon\}$ has positive measure. For every finite $p\ge r$, step 1.2 gives $\|f\|_p<\infty$, so $$\|f\|_p^p=\int |f|^p\,d\mu\ge\int_{E_\varepsilon}|f|^p\,d\mu\ge (M-\varepsilon)^p\mu(E_\varepsilon)$$ forces $\mu(E_\varepsilon)<\infty$. Therefore $$\|f\|_p\ge (M-\varepsilon)\mu(E_\varepsilon)^{1/p},$$ and letting $p\to\infty$ gives $$\liminf_{p\to\infty}\|f\|_p\ge M-\varepsilon.$$ [L1, L3, step 1.2, given]

3.1 Because $0<\varepsilon<M$ was arbitrary in the case $M>0$, step 2.1 yields $\liminf_{p\to\infty}\|f\|_p\ge M$. Combined with step 1.2, this proves $\|f\|_p\to M$, while step 1.1 already handled the case $M=0$. [step 1.1, step 1.2, step 2.1] ∎
