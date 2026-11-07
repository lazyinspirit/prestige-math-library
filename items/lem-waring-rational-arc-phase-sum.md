---
id: lem-waring-rational-arc-phase-sum
kind: lemma
title: "A phase-sum bound on Waring major and minor arcs"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-exponential-character-e
  - def-real-power
  - def-common-divisor-and-gcd
  - def-coprime
  - thm-dirichlet-rational-approximation-with-denominator-range
  - thm-logarithm-slower-than-every-positive-power
  - lem-waring-rational-arc-spacing-bound
  - lem-waring-major-arc-phase-transference
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§10, equations (10.5)–(10.7), printed pp. 1618–1619"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§5.1, Weyl differencing and the phase-sum reduction, printed pp. 28–30"
---

## Statement

Let $k\ge2$ and $N\ge2$ be integers. On $\mathbb T=\mathbb R/\mathbb Z$, put
$$\mathfrak A_N(q,a)=\left\{\alpha:\left\|\alpha-\frac aq\right\|_{\mathbb T}\le\frac{N^{1-k}}q\right\},$$
$$\mathfrak M_N=\bigcup_{q=1}^N\ \bigcup_{\substack{a\pmod q\\\gcd(a,q)=1}}\mathfrak A_N(q,a),\qquad \mathfrak m_N=\mathbb T\setminus\mathfrak M_N,$$
where $\|t\|_{\mathbb T}:=\min_{m\in\mathbb Z}|t-m|$. For real $\alpha,\theta$, define
$$\Psi_{k,N}(\alpha,\theta):=\sum_{z=1}^N\min\!\left(N^{k-1},\|kz\alpha+\theta\|_{\mathbb T}^{-1}\right),$$
with a zero distance interpreted as contributing $N^{k-1}$ and $\gcd(a,q)=1$ meaning no common positive divisor other than $1$. For every $\varepsilon>0$ there is $C_{k,\varepsilon}$ such that:

(i) If $\alpha\in\mathfrak A_N(q,a)$, choose a lift $a'\equiv a\pmod q$ with $\Delta:=|q\alpha-a'|\le N^{1-k}$. Then
$$\Psi_{k,N}(\alpha,\theta)\le C_{k,\varepsilon}\left(N^{k-1+\varepsilon}+\frac{N^{k+\varepsilon}}{q+N^k\Delta}\right).$$

(ii) If $\alpha\in\mathfrak m_N$, then $\Psi_{k,N}(\alpha,\theta)\le C_{k,\varepsilon}N^{k-1+\varepsilon}$.

## Statement references

[Wooley, §10, equations (10.5)–(10.7)](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §5.1](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** Integers $k\ge2$, $N\ge2$, reals $\alpha,\theta$, and the torus norm and arcs defined in the Statement.

[F1] For every real $x$ and real $X\ge1$, there are coprime integers $a,q$ with $1\le q\le X$ and $|x-a/q|\le1/(qX)$ ([[thm-dirichlet-rational-approximation-with-denominator-range]]).

[F2] If $|\beta-b/r|\le A/r^2$ with $b,r$ coprime positive-denominator integers, then
$$\sum_{z=1}^N\min\!\left(N^{k-1},\|z\beta+\theta\|_{\mathbb T}^{-1}\right)\le C_A(N/r+1)(N^{k-1}+r\log(2r))$$
([[lem-waring-rational-arc-spacing-bound]]).

[F3] For each $\delta>0$, $\log x\le C_\delta x^\delta$ for $x\ge2$ ([[thm-logarithm-slower-than-every-positive-power]]).

[F4] The required major-arc refinement has denominator $q+N^k\Delta$ when $\Delta=|q\alpha-a|\le N^{1-k}$ ([[lem-waring-major-arc-phase-transference]]). Its full local proof is now supplied by the installed transference lemma.

## Proof

**Proof technique:** rational approximation and spacing.

1.1 Suppose $\alpha\in\mathfrak A_N(q,a)$ and choose the lift $a'$ in (i). Put $g=\gcd(k,q)$, $r=q/g$, and $b=ka'/g$. Since $\gcd(a',q)=1$, $b$ and $r$ are coprime. Also $|k\alpha-b/r|=k\Delta/q$ and $$r^2|k\alpha-b/r|=\frac{kq\Delta}{g^2}\le\frac{kN^{2-k}}{g^2}\le2.$$ Applying [F2] and expanding the product gives the rigorously established, weaker estimate $$\Psi_{k,N}(\alpha,\theta)\ll_k N^{k-1}+\frac{N^k}{q}+N\log(2N).$$ Here $r\le q\le N$, and $N^k/r=gN^k/q\le kN^k/q$. [F2, given, algebra]

1.2 If $\alpha\in\mathfrak m_N$, apply [F1] with $X=N^{k-1}$ to obtain coprime $a,q$ with $q\le N^{k-1}$ and $\Delta:=|q\alpha-a|\le N^{1-k}$. The condition $\alpha\notin\mathfrak M_N$ forces $q>N$. Set $g=\gcd(k,q)$, $r=q/g$, and $b=ka/g$. Then $b,r$ are coprime, $N/r<k$, $r\le N^{k-1}$, and $$r^2|k\alpha-b/r|=\frac{kq\Delta}{g^2}\le k.$$ By [F2], $\Psi_{k,N}(\alpha,\theta)\ll_k N^{k-1}+N\log(2N)+N^{k-1}\log(2N)$. Using [F3] with a smaller positive exponent absorbs the logarithms and proves (ii). [F1, F2, F3, given, algebra]

2.1 Apply [F4] with $X=N$ and the chosen lift $a'$. Its hypotheses are exactly those of (i), so it proves (i) with denominator $q+N^k\Delta$. Together with the proved minor-arc clause in step 1.2, this establishes both conclusions. [F4, step 1.1, step 1.2, algebra] ∎

## Proof status

The supplier-only hold is discharged by the installed full proof of [[lem-waring-major-arc-phase-transference]]. The unchanged major-arc and minor-arc Statements now follow from the displayed arguments.
