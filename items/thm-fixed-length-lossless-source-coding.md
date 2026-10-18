---
id: thm-fixed-length-lossless-source-coding
title: "Fixed-length lossless source coding at the entropy rate"
kind: theorem
status: draft
dependency_level: 6
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-fixed-length-lossless-block-code
  - def-finite-alphabet-iid-source
  - def-finite-law-self-information-and-entropy
  - def-finite-source-information-density-and-typical-set
  - def-it-information-units-and-logarithm-base
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - cor-aep-typical-set-probability-and-size-bounds
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 3, §§3.1–3.3"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
    - title: "MIT OpenCourseWare 6.441 Information Theory, Spring 2010, Lecture 3: AEP and typical-set compression"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/d58c259c32b5d6ccd38548141239d52e_MIT6_441S10_lec03.pdf"
    - title: "MIT OpenCourseWare 6.441 Information Theory, Spring 2010, Lecture 5: Codes and optimal code lengths"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/a8525ccc542cccf186535efcf673ab36_MIT6_441S10_lec05.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $p$ be a probability law on a finite nonempty alphabet $A$, with entropy
$H(p)$ and surprisal variance $V(p)$ in nats. There is a sequence of
deterministic fixed-length binary block codes with block errors $e_n$ and
rates $R_n$ as defined in
[[def-fixed-length-lossless-block-code]] such that
$$e_n\le\frac{V(p)}{\sqrt n},\qquad R_n\le H(p)+n^{-1/4}+\frac{2\ln2}{n}.$$
Thus $e_n\to0$ and $\limsup R_n\le H(p)$. Conversely, every sequence of
such codes with $e_n\to0$ satisfies $\liminf R_n\ge H(p)$. If
$\limsup R_n<H(p)$, then $e_n\to1$.

## Facts & Assumptions

**Given:** A finite-alphabet IID source with law $p$ and its entropy $H(p)$
and surprisal variance $V(p)$.

[F1] [[def-fixed-length-lossless-block-code]]: A length-$n$ binary block code
has maps $f_n:A^n\to\{0,1\}^{k_n}$ and $g_n:\{0,1\}^{k_n}\to A^n$, block
error $\mathbb P(g_n(f_n(X^n))\ne X^n)$, and rate $R_n=k_n\ln2/n$.

[F2] [[def-finite-alphabet-iid-source]]: Each $X^n$ has law $p^n$.

[F3] [[def-finite-law-self-information-and-entropy]]: On its support,
$p^n(x^n)=\prod_i p(x_i)$ and $-\ln p^n(x^n)$ is block self-information;
$V(p)$ is the finite surprisal variance.

[F4] [[def-it-information-units-and-logarithm-base]]: The default logarithm is
$\ln$, it is strictly increasing with $\ln 1=0$, and information is measured
in nats.

[F5] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]:
$H(p)=-\sum_{a:p(a)>0}p(a)\ln p(a)$ with zero terms set to zero, in natural units.

[F6] [[def-finite-source-information-density-and-typical-set]]:
$T_n(\varepsilon)=\{x^n\in A_+^n:|I_n(x^n)-H(p)|\le\varepsilon\}$.

[F7] [[cor-aep-typical-set-probability-and-size-bounds]]: With
$\delta_n(\varepsilon)=\mathbb P(X^n\notin T_n(\varepsilon))$,
$\delta_n(\varepsilon)\le V(p)/(n\varepsilon^2)$ and
$|T_n(\varepsilon)|\le e^{n(H(p)+\varepsilon)}$.

## Proof

**Given:** The source and definitions in the Statement and Facts.

1.1 Let $\varepsilon_n=n^{-1/4}$ and $T_n=T_n(\varepsilon_n)$. Put $M_n=|T_n|+1$ and $k_n=\lceil\log_2 M_n\rceil$. Fix $a_0\in A$, possible since $A$ is nonempty, and assign distinct binary strings of length $k_n$ to the words in $T_n$ plus one unused string. Encode each typical word by its assigned string and every other word by the unused string; decode assigned strings to their typical words and all other strings to $a_0^n$. This defines maps on all of $A^n$, and every typical word is decoded correctly. [given, F1, F6, construct, choose]

1.2 For any length-$n$ code, let $C_n=\{x^n\in A^n:g_n(f_n(x^n))=x^n\}$ be its correctly decoded set. Each binary message has only one decoder output, so $|C_n|\le2^{k_n}$. For any $\gamma>0$, every $x^n\in C_n\cap T_n(\gamma)$ has $p^n(x^n)\le e^{-n(H(p)-\gamma)}$. Therefore $$1-e_n=\mathbb P(X^n\in C_n)\le\delta_n(\gamma)+|C_n|e^{-n(H(p)-\gamma)}\le\delta_n(\gamma)+e^{n(R_n-H(p)+\gamma)}.$$ Here [F1] supplies the number of messages, [F2] the source law, [F3] the product law, [F4]–[F6] the log, entropy and typical-set conventions, and [F7] the error-tail notation. [given, F1, F2, F3, F4, F5, F6, F7, algebra]

2.1 The error is at most $\delta_n(\varepsilon_n)\le V(p)/(n\varepsilon_n^2)=V(p)/\sqrt n$ by [F7]. For each $a$ with $p(a)>0$, $p(a)\le1$, and [F4] gives $\ln p(a)\le\ln1=0$; hence each summand $-p(a)\ln p(a)$ in [F5] is nonnegative and $H(p)\ge0$. Thus $M_n\le e^{n(H(p)+\varepsilon_n)}+1\le2e^{n(H(p)+\varepsilon_n)}$. Since $k_n=\lceil\log_2M_n\rceil$, $k_n\ln2\le\ln M_n+\ln2$, so $R_n\le H(p)+n^{-1/4}+2\ln2/n$. These bounds prove the achievability claims. [F1, F4, F5, F7, step 1.1, algebra]

2.2 Suppose $\rho:=\limsup R_n<H(p)$. Since $\ln2>\ln1=0$ by [F4] and $k_n\ge0$ by [F1], all rates are nonnegative. The finite sum in [F5] has finitely many finite terms, so $H(p)$ and then $\rho$ are finite reals. Choose $\gamma=(H(p)-\rho)/4>0$. Eventually $R_n\le\rho+\gamma=H(p)-3\gamma$. Then step 1.2 gives $1-e_n\le\delta_n(\gamma)+e^{-2n\gamma}\to0$ by [F7], so $e_n\to1$. [F1, F4, F5, F7, step 1.2, algebra]

3.1 Suppose instead that $e_n\to0$ but $L:=\liminf R_n<H(p)$. Since $\ln2>\ln1=0$ by [F4] and $k_n\ge0$ by [F1], all rates are nonnegative. The finite sum in [F5] has finitely many finite terms, so $H(p)$ and $L$ are finite reals. Take $\gamma=(H(p)-L)/4>0$. Infinitely many $n$ satisfy $R_n\le L+\gamma=H(p)-3\gamma$. Along those indices, step 1.2 and [F7] give $1-e_n\le\delta_n(\gamma)+e^{-2n\gamma}\to0$, contradicting $e_n\to0$. Hence $\liminf R_n\ge H(p)$. [F1, F4, F5, F7, step 1.2, algebra] ∎
