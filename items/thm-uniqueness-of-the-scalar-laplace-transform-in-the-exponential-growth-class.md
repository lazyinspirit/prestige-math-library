---
id: thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class
kind: theorem
title: "Uniqueness of the scalar Laplace transform in the exponential-growth class"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-countable-choice
  - cor-weierstrass-approximation-on-the-unit-interval
  - cor-one-dimensional-change-of-variables-with-absolute-derivative
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-integral-triangle-inequality
  - def-l-one-of-a-measure
  - def-integral-over-a-measurable-set
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 1, Theorem 1.10 and its use for uniqueness, printed pp. 55-58"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3-11.4, the transform arguments preceding Lemma 11.13, printed pp. 262-263"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Universitext, Springer 2011 (complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Chapter 7 Section 7.2, Laplace-transform manipulation in the proof of Theorem 7.4, printed pp. 186-188"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the Lebesgue-measure interfaces. Let $\mathbb K\in\{\mathbb R,\mathbb C\}$ and let $f:[0,\infty)\to\mathbb K$ be continuous with $|f(t)|\le Ce^{\sigma t}$ for some $C\ge0$, $\sigma\in\mathbb R$ and all $t\ge0$. If the Laplace transform vanishes on a right half-line, $$\int_0^\infty e^{-\lambda t}f(t)\,dt=0\qquad\text{for every real }\lambda>\sigma,$$ then $f(t)=0$ for every $t\ge0$.

## Facts & Assumptions

**Given:** Countable Choice; A real or complex-valued continuous $f:[0,\infty)\to\mathbb K$ with $|f(t)|\le Ce^{\sigma t}$ for some $C\ge0$, $\sigma\in\mathbb R$ and all $t\ge0$, and $\int_0^\infty e^{-\lambda t}f(t)\,dt=0$ for every real $\lambda>\sigma$; for $\lambda>\sigma$ the integrand is dominated by $Ce^{-(\lambda-\sigma)t}$ and the integral exists as a Lebesgue integral over $[0,\infty)$.

[F1] If $a<b$, $\varphi$ is $C^1$ and injective with $\varphi'\ne0$ on a neighbourhood of $[a,b]$, and the continuous function $h$ is defined on an interval containing $\varphi([a,b])$, then $\int_{\min\varphi}^{\max\varphi}h=\int_a^b h(\varphi(t))|\varphi'(t)|\,dt$ ([[cor-one-dimensional-change-of-variables-with-absolute-derivative]]). This substitution is stated for Riemann integrals; on the compact intervals used below all its integrands are continuous, hence bounded and Riemann integrable, and [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]] identifies those integrals with their Lebesgue integrals under Countable Choice.

[F2] Polynomials are uniformly dense in $C([0,1],\mathbb R)$: for every continuous real $\varphi$ on $[0,1]$ and $\eta>0$ there is a polynomial $p$ with $\sup_{[0,1]}|p-\varphi|<\eta$ ([[cor-weierstrass-approximation-on-the-unit-interval]]).

[F3] The Lebesgue integral is linear on $L^1$ and satisfies $\bigl|\int h\bigr|\le\int|h|$; the integral over a measurable set is defined by restricting each real positive/negative and imaginary component, giving $\int_Eh=\int h\mathbf1_E$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-integral-triangle-inequality]], [[def-l-one-of-a-measure]], [[def-integrable-real-and-complex-functions-and-their-integrals]]); [[def-integral-over-a-measurable-set]] alone supplies only the nonnegative convention.



## Proof

**Proof technique:** direct, reducing to real $f$, converting the Laplace moments into moments of a continuous function on $[0,1]$, and applying polynomial density.

1.1 It suffices to prove the theorem for real-valued $f$: if $f$ is complex-valued, then $\operatorname{Re}f$ and $\operatorname{Im}f$ are continuous, satisfy the same bound $|\operatorname{Re}f|,|\operatorname{Im}f|\le Ce^{\sigma t}$, and by [F3] have $\int_0^\infty e^{-\lambda t}\operatorname{Re}f(t)\,dt=\operatorname{Re}0=0$ and likewise for $\operatorname{Im}f$ for every real $\lambda>\sigma$. [F3, algebra]

1.2 Assume $f$ real. Fix $\lambda_0>\max\{\sigma,0\}$ and put $\delta:=\lambda_0-\sigma>0$ and $F(t):=e^{-\lambda_0t}f(t)$. Then $F$ is continuous with $|F(t)|\le Ce^{-\delta t}$ for $t\ge0$, so $F\in L^1(0,\infty)$; moreover for every integer $k\ge0$ the number $\lambda:=\lambda_0+k+1$ exceeds $\sigma$ and $\int_0^\infty e^{-(k+1)t}F(t)\,dt=\int_0^\infty e^{-\lambda t}f(t)\,dt=0$. [F3, algebra]

1.3 Put $g(x):=F(-\ln x)$ for $x\in(0,1]$ and $g(0):=0$. Then $g$ is continuous on $[0,1]$: it is continuous on $(0,1]$ as a composition, and $|g(x)|=|F(-\ln x)|\le Cx^{\delta}\to0$ as $x\downarrow0$ because $\delta>0$, matching $g(0)=0$; also $|g(x)|\le Cx^{\delta}\le C$ on $[0,1]$, so $g\in L^1(0,1)$ and $\int_0^1|g|\,dx\le C$. [F3, algebra]

2.1 For $T>0$ and $k\ge0$, [F1] applied on $[0,T]$ to $\varphi(t)=e^{-t}$ and the continuous $h(x)=x^kg(x)$ on $[0,1]$ gives $\int_{e^{-T}}^{1}x^kg(x)\,dx=\int_0^{T}e^{-(k+1)t}F(t)\,dt$. [F1, step 1.3]

3.1 Letting $T\to\infty$ in [step 2.1]: the right-hand side tends to $\int_0^\infty e^{-(k+1)t}F(t)\,dt$ because its tail is bounded by $\int_T^\infty Ce^{-(\delta+k+1)t}\,dt\le Ce^{-(\delta+k+1)T}/(\delta+k+1)\to0$; the left-hand side tends to $\int_0^1x^kg(x)\,dx$ because the missing part satisfies $\bigl|\int_0^{e^{-T}}x^kg(x)\,dx\bigr|\le C\int_0^{e^{-T}}x^{\delta+k}\,dx\le Ce^{-(k+\delta+1)T}\to0$; by [step 1.2] the limits are $0$, so $\int_0^1x^kg(x)\,dx=0$ for every integer $k\ge0$. [F3, step 1.2, step 2.1, algebra]

4.1 Every continuous real $\varphi$ on $[0,1]$ satisfies $\int_0^1\varphi(x)g(x)\,dx=0$: fix $\eta>0$ and, by [F2], choose a polynomial $p$ with $\sup_{[0,1]}|\varphi-p|\le\eta/(1+\int_0^1|g|\,dx)$; then $\bigl|\int_0^1(\varphi-p)g\,dx\bigr|\le\sup|\varphi-p|\int_0^1|g|\,dx<\eta$ by [F3], while $\int_0^1pg\,dx=0$ by [step 3.1]; hence $\bigl|\int_0^1\varphi g\,dx\bigr|<\eta$ for every $\eta>0$, so the integral vanishes. [F2, F3, step 1.3, step 3.1]

5.1 The function $g$ vanishes identically on $[0,1]$: otherwise $g(x_0)\ne0$ for some $x_0\in(0,1]$ with $g(x_0)>0$ (or $<0$), and by continuity there is an interval $J\subseteq[0,1]$ of positive length with $g>0$ on $J$ (respectively $g<0$ on $J$); choosing a continuous nonnegative bump $\varphi$ supported in $J$ with $\varphi(x_0)>0$ gives $\varphi g\ge0$, positive at $x_0$ and continuous, so $\int_0^1\varphi g\,dx>0$ (respectively $<0$), contradicting [step 4.1]. [step 4.1, algebra]

6.1 Consequently $F(t)=g(e^{-t})=0$ for every $t\ge0$, whence $f(t)=e^{\lambda_0t}F(t)=0$ for every $t\ge0$ in the real case; the complex case follows by applying the real case to $\operatorname{Re}f$ and $\operatorname{Im}f$ as in [step 1.1]. [step 1.1, step 1.3, step 5.1] ∎
