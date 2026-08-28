---
id: cor-dominated-convergence-is-a-vitali-corollary
kind: corollary
title: "Dominated convergence is a Vitali corollary"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces, prop-dominated-families-are-uniformly-integrable, thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces, thm-chebyshev-markov-inequality-for-the-integral, thm-monotone-convergence-for-the-integral, thm-the-lebesgue-integral-respects-almost-everywhere-equality, def-integral-over-a-measurable-set, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-finite-and-countable-subadditivity-of-measures, def-finite-sigma-finite-and-semifinite-measures]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Terence Tao, 245A Notes 4: Modes of convergence, Theorem 29"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 7.23"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a sigma-finite measure space. Let
$f_n : X \to \mathbb R$ be measurable, let $g \in L^1(\mu)$ be nonnegative,
and suppose $|f_n|\le g$ almost everywhere for every $n$ and
$f_n \to f$ almost everywhere. Then $f \in L^1(\mu)$ and $f_n \to f$ in
$L^1(\mu)$.

## Facts & Assumptions

**Given:** A sigma-finite measure space $(X,\mathcal A,\mu)$, measurable functions $f_n,f : X \to \mathbb R$, and a nonnegative integrable function $g$ with $|f_n|\le g$ almost everywhere and $f_n \to f$ almost everywhere.

[L1] A dominated family is uniformly integrable. ([[prop-dominated-families-are-uniformly-integrable]])

[L2] On a sigma-finite measure space, convergence in measure together with uniform integrability and tightness implies convergence in $L^1$. ([[thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces]])

[L3] On a finite measure space, almost-everywhere convergence implies convergence in measure. ([[thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces]])

[L4] If $h:X\to[0,+\infty]$ is measurable and $t>0$, then $\mu(\{h\ge t\})\le t^{-1}\int h\,d\mu$. ([[thm-chebyshev-markov-inequality-for-the-integral]])

[L5] For an increasing sequence of nonnegative measurable functions, the integrals increase to the integral of the limit. ([[thm-monotone-convergence-for-the-integral]])

[L6] If two integrable functions are equal almost everywhere, then their integrals over every measurable set agree. ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]])

[L7] Sigma-finiteness means that $X=\bigcup_m X_m$ for some measurable sets $X_m$ of finite measure. ([[def-finite-sigma-finite-and-semifinite-measures]])

[L8] For a measurable set $E$ and a nonnegative measurable function $u$, $\int_E u\,d\mu=\int u\chi_E\,d\mu$. ([[def-integral-over-a-measurable-set]])

[L9] The nonnegative integral is monotone. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[L10] Countable unions of null sets are null. ([[thm-finite-and-countable-subadditivity-of-measures]])

## Proof

**Proof technique:** direct.

1.1 Let $N_*$ be a null set outside which $f_n(x)\to f(x)$, and for each $n \in \mathbb N$ let $N_n$ be a null set outside which $|f_n|\le g$. Put $$N:=N_*\cup\bigcup_{n=0}^\infty N_n.$$ By [L10], the set $N$ is null. On $X\setminus N$ one has $f_n(x)\to f(x)$ for every $x$ and $|f_n(x)|\le g(x)$ for every $n$, so also $|f(x)|\le g(x)$ there. [L10, construct]

1.2 By [L1], the family $\{f_n : n \in \mathbb N\}$ is uniformly integrable. [L1]

2.1 By [L7], choose measurable sets $Y_m$ of finite measure with $X=\bigcup_m Y_m$, and put $X_m:=\bigcup_{j=0}^mY_j$. Then $X_m$ is measurable of finite measure, $X_m\uparrow X$, and hence $g\chi_{X_m}\uparrow g$. Fact [L5] gives $\int_{X_m} g\,d\mu \uparrow \int g\,d\mu$, so $\int_{X\setminus X_m} g\,d\mu \to 0$. Fix $\varepsilon>0$ and choose $m$ with $\int_{X\setminus X_m} g\,d\mu<\varepsilon$. For each $n$, put $u_{n,m}:=|f_n|\chi_{(X\setminus X_m)\setminus N}$. Then $u_{n,m}=|f_n|\chi_{X\setminus X_m}$ almost everywhere and $u_{n,m}\le g\chi_{X\setminus X_m}$ pointwise, so [L6], [L8], and [L9] give $$\int_{X\setminus X_m}|f_n|\,d\mu =\int_{X\setminus X_m}u_{n,m}\,d\mu \le\int_{X\setminus X_m} g\,d\mu <\varepsilon.$$ So the family $\{f_n\}$ is tight. [step 1.1, L5, L6, L7, L8, L9, algebra]

2.2 Let $\varepsilon,\eta>0$. Choose $m$ so that $\int_{X\setminus X_m} g\,d\mu<\varepsilon\eta/8$. On the finite measure space $X_m$, step 1.1 and [L3] make $f_n \to f$ in measure. Define $h_n:=|f_n-f|\chi_{(X\setminus X_m)\setminus N}$. Then $$\{h_n>\varepsilon\}=\{|f_n-f|>\varepsilon\}\cap((X\setminus X_m)\setminus N),$$ and $h_n\le 2g\chi_{X\setminus X_m}$ pointwise. Since $N$ is null, $$\mu(\{|f_n-f|>\varepsilon\}\cap(X\setminus X_m)) =\mu(\{h_n>\varepsilon\}).$$ Therefore [L4], [L8], and [L9] give $$\mu(\{|f_n-f|>\varepsilon\}\cap(X\setminus X_m)) \le \varepsilon^{-1}\int_{X\setminus X_m} h_n\,d\mu \le \frac{2}{\varepsilon}\int_{X\setminus X_m} g\,d\mu <\eta/4.$$ Combining this with convergence in measure on $X_m$ shows $f_n \to f$ in measure on all of $X$. [step 1.1, L3, L4, L8, L9, choose, algebra]

3.1 Step 1.2 gives uniform integrability, step 2.1 gives tightness, and step 2.2 gives convergence in measure. Applying [L2] yields $f \in L^1(\mu)$ and $f_n \to f$ in $L^1(\mu)$. [step 1.2, step 2.1, step 2.2, L2] ∎
