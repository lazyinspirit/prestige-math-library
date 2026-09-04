---
id: thm-odd-degree-real-polynomial-has-a-real-root
kind: theorem
title: "Every odd-degree real polynomial has a real root"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-algebra-of-continuous-functions, thm-intermediate-value, def-polynomial-degree-leading-coefficient-and-monic, thm-reals-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Applications of Galois Theory, Theorem 2.1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoisappn.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 5"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
pipeline_run: frontier-20
---

## Statement

Let
$$ f(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_0 \in \mathbb R[x] $$
have odd degree $n \ge 1$. Then there exists $c \in \mathbb R$ with $f(c)=0$.

## Facts & Assumptions

**Given:** A real polynomial $f(x)=a_nx^n+\cdots+a_0$ of odd degree $n \ge 1$.

[F1] The degree hypothesis means $a_n \ne 0$ and $a_i = 0$ for every $i > n$ ([[def-polynomial-degree-leading-coefficient-and-monic]]).

[L1] Every real polynomial function is continuous on $\mathbb R$ ([[thm-algebra-of-continuous-functions]]).

[L2] A continuous function on a closed interval takes every intermediate value between its endpoint values ([[thm-intermediate-value]]).

[F2] The real numbers form an ordered field, so absolute values and the order laws behave as usual ([[thm-reals-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Put $S:=\sum_{i<n}|a_i|$ and $$ R:=1+\frac{S}{|a_n|}. $$ Then $R>1$, and therefore $$ \sum_{i<n}|a_i|R^i \le SR^{n-1} < |a_n|R^n. $$ [F1, F2, algebra]

2.1 The estimate in step 1.1 gives $$ \left|\sum_{i<n}a_iR^i\right| \le \sum_{i<n}|a_i|R^i < |a_n|R^n. $$ Hence $f(R)=a_nR^n+\sum_{i<n}a_iR^i$ has the same sign as $a_n$. [step 1.1, F2, algebra]

2.2 Because $n$ is odd, $(-R)^n=-R^n$. Also $$ \left|\sum_{i<n}a_i(-R)^i\right| \le \sum_{i<n}|a_i|R^i < |a_n|R^n, $$ so $f(-R)=a_n(-R)^n+\sum_{i<n}a_i(-R)^i$ has the opposite sign from $a_n$. Thus $f(-R)$ and $f(R)$ have opposite signs. [step 1.1, F1, F2, algebra]

3.1 By [L1], the polynomial function $f$ is continuous on $[-R,R]$. Since step 2.2 shows that $0$ lies between $f(-R)$ and $f(R)$, [L2] gives a point $c \in [-R,R]$ with $f(c)=0$. [L1, L2, step 2.2] ∎
