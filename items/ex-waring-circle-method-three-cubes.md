---
id: ex-waring-circle-method-three-cubes
kind: example
title: "Twenty-one cubes through the circle method"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-countable-choice
  - alg-circle-method-major-minor-arc-decomposition
  - thm-waring-asymptotic-for-sufficiently-many-powers
  - lem-waring-major-arcs-asymptotic
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
      locator: "Theorem 1.4 and §10, printed pp. 1579 and 1620–1621"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§§6.1–6.3, Waring representation counts and circle-method arcs, printed pp. 34–48"
---

## Example

Assume countable choice. For $k=3$ and $s=21$, define $R_{21,3}(n)=\#\{(x_1,\ldots,x_{21})\in\mathbb Z_{>0}^{21}:\sum_i x_i^3=n\}$ with ordered tuples, $e(u)=\exp(2\pi i u)$, and $S_3(q,a)=\sum_{r=0}^{q-1}e(ar^3/q)$. Set
$$\mathfrak S_{21,3}(n)=\sum_{q=1}^{\infty}\sum_{\substack{0\le a<q\\\gcd(a,q)=1}}q^{-21}S_3(q,a)^{21}e(-an/q),$$
where the $q=1$ sum uses $a=0$ and $\gcd(a,q)=1$ means that $a$ and $q$ have no positive common divisor other than $1$. Let $\Gamma(u)=\int_0^\infty t^{u-1}\exp(-t)dt$ for $u>0$. On $\mathbb T=\mathbb R/\mathbb Z$, put $\|t\|_{\mathbb T}=\min_{m\in\mathbb Z}|t-m|$. For positive integers $n$, put $N=\lfloor n^{1/3}\rfloor$, $P=\lfloor N^{1/8}\rfloor$, and $Q=\lfloor N^{1/16}\rfloor$. The major arcs are the torus intervals centered at reduced fractions $a/q$ with $q\le Q$ and torus radius $16P/(qN^3)$; the minor arcs are their complement. The circle method gives
$$\lim_{n\to\infty}\frac{R_{21,3}(n)-\dfrac{\Gamma(4/3)^{21}}{\Gamma(7)}\mathfrak S_{21,3}(n)n^6}{n^6}=0.$$
The major arcs contribute the singular-series and singular-integral main term, and the minor arcs contribute a term whose ratio to $n^6$ tends to zero.

## Example references

[Wooley, Theorem 1.4 and §10](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §§6.1–6.3](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** The Waring representation count, the major/minor arcs in the Statement, and the Waring asymptotic theorem for sufficiently many powers.

[A1] Countable choice is assumed by the Waring theorem used in this example ([[def-countable-choice]]).

[F1] The chosen circle-method decomposition partitions the torus into its major arcs and their complement, and the torus integral of the generating sum is the representation count ([[alg-circle-method-major-minor-arc-decomposition]]).

[F2] For $k=3$, the sufficient-power threshold $2k^2+2k-3$ equals $21$ ([[thm-waring-asymptotic-for-sufficiently-many-powers]]).

[F3] In this specialization, the major-arc contribution is asymptotic to $\mathfrak J_{21,3}\mathfrak S_{21,3}(n)N^{18}$ ([[lem-waring-major-arcs-asymptotic]]).

[F4] Under the stated theorem hypothesis, the minor-arc integral is $o(N^{18})$ ([[thm-waring-asymptotic-for-sufficiently-many-powers]]).

## Proof

**Proof technique:** specialize the threshold and evaluate the exponents.

1.1 At $k=3$, the theorem threshold is $2(3)^2+2(3)-3=21$, so $s=21$ meets its hypothesis. The circle-method identity [F1] splits the representation count into the major-arc and minor-arc integrals. [A1, F1, F2, algebra]

1.2 By [F3], the major arcs contribute $\mathfrak J_{21,3}\mathfrak S_{21,3}(n)N^{21-3}+o(N^{18})$. The minor-arc estimate in [F4] gives the remaining $o(N^{18})$ term. [F3, F4]

2.1 Here $21/3-1=6$, $N^{18}/n^6\to1$, and the singular-integral evaluation gives $\mathfrak J_{21,3}=\Gamma(4/3)^{21}/\Gamma(7)$. Substituting yields the displayed formula. [F2, F3, algebra] ∎
