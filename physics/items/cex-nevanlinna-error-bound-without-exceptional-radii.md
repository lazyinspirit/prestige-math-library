---
id: cex-nevanlinna-error-bound-without-exceptional-radii
kind: counterexample
title: "Exceptional radii cannot be removed from the logarithmic-derivative estimate"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-nevanlinna-exceptional-radius-notation
  - thm-nevanlinna-characteristic-elementary-laws
  - def-nevanlinna-counting-proximity-and-characteristic
  - def-countable-choice
  - thm-weierstrass-m-test-for-complex-function-series
  - thm-termwise-differentiation-of-complex-power-series
  - cor-complex-power-series-sums-are-analytic
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §1, printed pp. 92–94: Hayman's lacunary construction showing (1.12) fails; conditions λ_n=o(ln λ_{n+1}) and the estimates (1.15) and (1.16)"
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §6"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
      locator: "§6, printed pp. 12–13: the logarithmic-derivative lemma and its exceptional set"
verification:
  audited: 2026-10-02
---

## Statement refuted

Assume Countable Choice. There exists an entire function $f$ of infinite order,
together with radii $r_n\to\infty$, such that
$$ m_0(r_n,f'/f)\ne O\bigl(\log^+T(r_n,f)+\log r_n\bigr), $$
i.e. the quotient of $m_0(r_n,f'/f)$ by $\log^+T(r_n,f)+\log r_n$ is
unbounded along $r_n$. Thus the exceptional-radius set in the lemma on the
logarithmic derivative cannot simply be erased and replaced by an estimate
valid at every radius.

## Facts & Assumptions

**Given:** Countable Choice is assumed as in the statement.

[F1] The standard proximity is $m_0(r,g)=\frac1{2\pi}\int_0^{2\pi}\log^+|g(re^{it})|dt$, while $T(r,g)=m(r,\infty;g)+N(r,\infty;g)$ uses chordal proximity. For entire $g$, $N(r,\infty;g)=0$ and $m_0(r,g)\le T(r,g)\le m_0(r,g)+\frac12\log2$ by the chordal comparison ([[def-nevanlinna-counting-proximity-and-characteristic]], [[thm-nevanlinna-characteristic-elementary-laws]]). Also $m_0(r,f'/f)=\frac1{2\pi}\int_0^{2\pi}\log^+|f'(re^{it})/f(re^{it})|dt$ is the standard proximity in the logarithmic-derivative lemma ([[def-nevanlinna-exceptional-radius-notation]]).

[F2] Weierstrass test: a series of functions that is dominated on every compact set by a convergent numerical series converges locally uniformly ([[thm-weierstrass-m-test-for-complex-function-series]]).

[F3] A complex power series is analytic inside its disc of convergence and may be differentiated term by term there ([[cor-complex-power-series-sums-are-analytic]], [[thm-termwise-differentiation-of-complex-power-series]]).

## Counterexample

**Proof technique:** build the Hayman lacunary series $\sum_n(z/r_n)^{\lambda_n}$ with super-exponentially growing exponents, estimate it from above and its derivative from below on the lacunary circles, and compare the standard proximity of $f'/f$ with the characteristic of $f$.

1.1 Set $r_n:=2^{n-1}$ and define integers $\lambda_1:=2$, $\lambda_{n+1}:=4n\lambda_n2^{n\lambda_n}+n+1$ for $n\ge1$. Then $\lambda_n$ is strictly increasing with $\lambda_n>n$ and $\lambda_n\ge2^n$, and $\lambda_{n+1}\ge4n\lambda_n2^{n\lambda_n}\ge16n\lambda_n$ for every $n$. [construct, algebra]

2.1 Consequences for $\nu\ge2$: $\log\lambda_\nu\ge\log\bigl(4(\nu-1)\lambda_{\nu-1}\bigr)+(\nu-1)\lambda_{\nu-1}\log2\ge(\nu-1)\lambda_{\nu-1}\log2$, and $\lambda_{\nu-1}\to\infty$, so $\log\lambda_\nu/\nu\to\infty$ and $\log\lambda_\nu/\lambda_{\nu-1}\to\infty$. Hence $\nu=o(\log\lambda_\nu)$, $\log\nu=o(\log\lambda_\nu)$ and $\lambda_{\nu-1}=o(\log\lambda_\nu)$. [step 1.1, algebra]

2.2 Define coefficients $a_j:=r_n^{-\lambda_n}$ when $j=\lambda_n$ for some $n$, and $a_j:=0$ otherwise; strict increase of $\lambda_n$ makes this unambiguous. On $|z|\le R$, all but finitely many nonzero terms of $\sum_{j\ge0}a_jz^j$ are bounded by $2^{-\lambda_n}$, and $\sum_n2^{-\lambda_n}<\infty$. Thus [F2] gives absolute uniform convergence on every such disc; the power series has infinite radius and its nonzero terms, in increasing degree order, are precisely $f(z):=\sum_{n\ge1}(z/r_n)^{\lambda_n}$. By [F3], $f$ is entire and $f'(z)=\sum_{n\ge1}\frac{\lambda_n}{r_n}(z/r_n)^{\lambda_n-1}$; this is the differentiated power series with zero coefficients omitted. Its coefficient of $z^2$ is $r_1^{-2}=1$, so $f$ is nonconstant. [F2, F3, step 1.1, construct]

3.1 (Upper bound on lacunary circles) For $\nu\ge2$ and $|z|=r_\nu$, the $n$-th term of $f$ has modulus $2^{(\nu-n)\lambda_n}$ for $n<\nu$, modulus $1$ for $n=\nu$, and modulus $2^{-(n-\nu)\lambda_n}$ for $n>\nu$. In the first block each modulus is at most $2^{\lambda_{\nu-1}}$: for $n\le\nu-2$ one has $(\nu-n)\lambda_n\le(\nu-1)\lambda_{\nu-2}\le\lambda_{\nu-1}$ by step 1.1, while $n=\nu-1$ gives exponent $\lambda_{\nu-1}$ exactly. Hence the first block is at most $(\nu-1)2^{\lambda_{\nu-1}}$, and the tail is at most $\sum_{m\ge1}2^{-m}=1$. So $|f(z)|\le(\nu-1)2^{\lambda_{\nu-1}}+2$ and $m_0(r_\nu,f)\le\log\bigl((\nu-1)2^{\lambda_{\nu-1}}+2\bigr)\le\lambda_{\nu-1}\log2+\log\bigl(2(\nu-1)\bigr)$. [F1, step 1.1, step 2.2, algebra]

3.2 (Lower bound for the derivative) For $\nu\ge2$ and $|z|=r_\nu$: the $\nu$-th term of $f'$ has modulus $\lambda_\nu/r_\nu$; the earlier terms satisfy $\sum_{n<\nu}\frac{\lambda_n}{r_n}\bigl(\frac{r_\nu}{r_n}\bigr)^{\lambda_n-1}=\frac1{r_\nu}\sum_{n<\nu}\lambda_n2^{(\nu-n)\lambda_n}\le\frac{(\nu-1)\lambda_{\nu-1}2^{(\nu-1)\lambda_{\nu-1}}}{r_\nu}\le\frac{\lambda_\nu}{4r_\nu}$ by step 1.1; and the later terms satisfy $\sum_{n>\nu}\frac{\lambda_n}{r_n}\bigl(\frac{r_\nu}{r_n}\bigr)^{\lambda_n-1}=\frac1{r_\nu}\sum_{m\ge1}\lambda_{\nu+m}2^{-m\lambda_{\nu+m}}\le\frac2{r_\nu}$ because $\lambda_{\nu+m}\ge2$ makes each summand at most $2^{-m}$. Hence $|f'(z)|\ge\frac1{r_\nu}\bigl(\lambda_\nu-\frac{\lambda_\nu}4-2\bigr)\ge\frac{\lambda_\nu}{2r_\nu}$ for all $\nu$, so $m_0(r_\nu,f')\ge\log\lambda_\nu-\log 2-(\nu-1)\log2\ge\frac12\log\lambda_\nu$ for all large $\nu$ by step 2.1. [F1, step 1.1, step 2.1, step 2.2, algebra]

4.1 (Standard proximity of the quotient) For finite complex $u,v\ne0$ one has $\log^+|u/v|\ge\log^+|u|-\log^+|v|$; taking angular means gives $m_0(r_\nu,f'/f)\ge m_0(r_\nu,f')-m_0(r_\nu,f)\ge\frac12\log\lambda_\nu-\lambda_{\nu-1}\log2-\log\bigl(2(\nu-1)\bigr)\ge\frac13\log\lambda_\nu$ for all large $\nu$, by step 2.1. [F1, step 2.1, step 3.1, step 3.2, algebra]

4.2 (Comparison scale) By step 3.1 and [F1], $\log^+T(r_\nu,f)+\log r_\nu=O(\lambda_{\nu-1}+\nu+\log\nu)=o(\log\lambda_\nu)$ by step 2.1. [F1, step 2.1, step 3.1, algebra]

4.3 (Infinite order) At $|z|=r_{\nu+1}=2r_\nu$ the $\nu$-th term of $f$ equals $2^{\lambda_\nu}$, the terms with $n<\nu$ sum to at most $2^{\lambda_\nu-1}$ by step 1.1 (each of the $\nu-1$ terms has exponent $(\nu+1-n)\lambda_n\le2\lambda_{\nu-1}$, and $(\nu-1)2^{2\lambda_{\nu-1}}\le2^{\lambda_\nu-1}$ because $\lambda_\nu-1\ge2\lambda_{\nu-1}+\log_2(\nu-1)$ whenever $\lambda_\nu\ge16(\nu-1)\lambda_{\nu-1}$ and $\lambda_{\nu-1}\ge2^{\nu-1}$), and the terms with $n>\nu$ sum to at most $2$ as in step 3.1. Hence $|f|\ge2^{\lambda_\nu-1}-2\ge2^{\lambda_\nu-2}$ on that circle, so $m_0(r_{\nu+1},f)\ge(\lambda_\nu-2)\log2$ and [F1] gives $T(r_{\nu+1},f)\ge m_0(r_{\nu+1},f)$. By step 2.1, $\log\lambda_\nu/\nu\to\infty$; since $\log r_{\nu+1}=\nu\log2$, this gives $\log T(r_{\nu+1},f)/\log r_{\nu+1}\to\infty$, so $f$ has infinite order. [F1, step 1.1, step 2.1, step 2.2, algebra]

5.1 Combining steps 4.1 and 4.2, $\frac{m_0(r_\nu,f'/f)}{\log^+T(r_\nu,f)+\log r_\nu}\ge\frac{\log\lambda_\nu/3}{o(\log\lambda_\nu)}\to\infty$ along $r_\nu\to\infty$; hence $m_0(r_\nu,f'/f)$ is not $O\bigl(\log^+T(r_\nu,f)+\log r_\nu\bigr)$. [step 4.1, step 4.2, algebra]

6.1 The construction is explicit: the exponents are given by a closed recursion, the radii are $r_\nu=2^{\nu-1}$, and no selection beyond the displayed formulas occurs. Countable Choice is carried only as in the statement. [given, discharge-construct] ∎
