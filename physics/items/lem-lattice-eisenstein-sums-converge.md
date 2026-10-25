---
id: lem-lattice-eisenstein-sums-converge
kind: lemma
title: "Absolute convergence and holomorphy of the lattice Eisenstein sums"
status: published
origin: pipeline
deps:
  - def-modular-group-action-on-the-upper-half-plane
  - def-series
  - def-absolute-and-conditional-convergence
  - thm-nonnegative-series-bounded-partial-sums
  - thm-direct-comparison-test
  - thm-p-series-rational
  - thm-double-series-fubini
  - lem-absolute-convergence-implies-convergence
  - thm-weierstrass-convergence-holomorphic-functions
  - lem-complex-conjugation-and-modulus-laws
  - def-complex-conjugate-real-imaginary-part-and-modulus
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-21.md"
      - "research/frontier-38-owner-30-alpha-batch-21-5a.md"
      - "research/frontier-38-owner-30-step5-hash-21-post-5a.json"
    content_sha256: "715689b60b7d49d84e1b8c8a1cdf831de00be26629a330de61aa6c2b2b140664"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Proposition 3.10 and Proposition 4.7, printed pp. 45 and 50: convergence of G_k, k>1."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Equations (9)-(10) and the discussion before Proposition 4, printed pp. 13-15: absolute convergence of G_k for k>2."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Ch. 5, 'Modular forms', printed pp. 99-101: the Eisenstein sums and their convergence."
proof_strategy: direct
---

## Statement

For every even $k\ge4$ and every $\tau\in\mathfrak H$ the family $\bigl((m\tau+n)^{-k}\bigr)_{(m,n)\in\mathbb Z^2\setminus\{(0,0)\}}$ is absolutely summable, and the convergence is uniform on compact subsets of $\mathfrak H$. Consequently $G_k(\tau):=\sum'_{(m,n)}(m\tau+n)^{-k}$ defines a holomorphic function on $\mathfrak H$, and it depends only on the lattice $\Lambda_\tau=\mathbb Z+\mathbb Z\tau$ assigned to $\tau$.

## Facts & Assumptions

**Given:** An even integer $k\ge4$, the upper half-plane $\mathfrak H$ with $\operatorname{Im}>0$ ([[def-modular-group-action-on-the-upper-half-plane]]), and a compact $K\subseteq\mathfrak H$ with $\operatorname{Im}\tau\ge y_0>0$ and $|\operatorname{Re}\tau|\le X$ for all $\tau\in K$.

[F1] Convergence, absolute convergence and nonnegative comparison of series are as in [[def-series]], [[def-absolute-and-conditional-convergence]] and [[thm-nonnegative-series-bounded-partial-sums]].

[F2] If $0\le a_j\le b_j$ eventually and $\sum b_j$ converges then $\sum a_j$ converges ([[thm-direct-comparison-test]]); $\sum_j j^{-p}$ converges for rational $p>1$ ([[thm-p-series-rational]]).

[F3] For a complex double family with summable absolute values, apply the real double-series theorem separately to its real and imaginary parts. The family may then be summed in any order, in particular iterated or regrouped into shells ([[thm-double-series-fubini]], [[lem-absolute-convergence-implies-convergence]]).

[F4] If holomorphic functions on an open set converge locally uniformly, their limit is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

[F5] $|z+w|\ge\bigl||z|-|w|\bigr|$, $|zw|=|z||w|$, and $|\operatorname{Re}z|\le|z|$ ([[lem-complex-conjugation-and-modulus-laws]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

## Proof

1.1 Since $m\tau+n=0$ with $(m,n)\ne(0,0)$ would give $\tau=-n/m\in\mathbb R$ when $m\ne0$ and $n=0$ when $m=0$, no denominator vanishes. Let $c_K:=\min\bigl(1/2,\ y_0/\max(1,2X)\bigr)>0$. For $(m,n)\ne(0,0)$ and $\tau\in K$ we claim $|m\tau+n|\ge c_K\max(|m|,|n|)$. If $|n|\ge2X|m|$, then $|\operatorname{Re}(m\tau+n)|=|m\operatorname{Re}\tau+n|\ge|n|-X|m|\ge|n|/2$ by [F5]; if moreover $|n|\ge|m|$ then $|m\tau+n|\ge|n|/2\ge\max(|m|,|n|)/2$, while if $|n|<|m|$ then the imaginary part gives $|m\tau+n|\ge y_0|m|=y_0\max(|m|,|n|)$. If instead $|n|<2X|m|$, then $\max(|m|,|n|)\le\max(1,2X)|m|$ and the imaginary part gives $|m\tau+n|\ge y_0|m|\ge\frac{y_0}{\max(1,2X)}\max(|m|,|n|)$. In all cases the claim holds. [F5, given, algebra]

2.1 Regroup the nonzero pairs by the shell $j:=\max(|m|,|n|)\ge1$; the shell has $(2j+1)^2-(2j-1)^2=8j$ elements, and by 1.1 each contributes at most $(c_Kj)^{-k}$, so shell $j$ contributes at most $8c_K^{-k}j^{1-k}$. Since $k\ge4$ gives $k-1>1$, the bound $\sum_{j\ge1}8c_K^{-k}j^{1-k}<\infty$ follows from [F2]. The shell partial sums of the family are therefore nonnegative and bounded uniformly in $\tau\in K$ by an absolute constant, so they converge by the bounded-partial-sums criterion of [F1]; in the terminology of [F1] the family $((m\tau+n)^{-k})_{(m,n)\ne(0,0)}$ is absolutely summable for each $\tau\in K$, the regrouping being licensed by [F3], and the tail beyond shell $J$ is bounded uniformly on $K$ by $8c_K^{-k}\sum_{j>J}j^{1-k}$. [F1, F2, F3, step 1.1, given, algebra]

3.1 Each term $\tau\mapsto(m\tau+n)^{-k}$ is holomorphic on $\mathfrak H$ for $(m,n)\ne(0,0)$, being a power of the nonvanishing holomorphic function $\tau\mapsto m\tau+n$. By 2.1 the partial sums over shells converge uniformly on every compact $K\subseteq\mathfrak H$ (compactness supplies some $y_0,X$), so [F4] makes the shell-sum limit $G_k$ holomorphic on $\mathfrak H$, and this limit agrees with the (absolutely summable, hence order-independent by [F3]) family sum. Finally $(m,n)\mapsto m\tau+n$ is a bijection of $\mathbb Z^2$ onto the lattice $\Lambda_\tau=\mathbb Z+\mathbb Z\tau$, so the summed family is exactly the family of values $\lambda^{-k}$ over the nonzero points $\lambda\in\Lambda_\tau$; hence $G_k(\tau)$ depends only on $\Lambda_\tau$ and not on the enumeration. [F3, F4, step 2.1, given, algebra] ∎
