---
id: cex-an-excellent-approximation-at-the-legendre-boundary
kind: counterexample
title: "The constant 1/2 in Legendre's criterion cannot be replaced by 3/4"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [lem-continued-fraction-error-bound, thm-legendre-continued-fraction-criterion]
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
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "Bruce Ikenaga, Approximation by Rational Numbers"
      url: "https://sites.millersville.edu/bikenaga/number-theory/approximation-by-rationals/approximation-by-rationals.html"
pipeline_run: null
---

## Statement refuted

For every irrational real number $\alpha$ and every reduced rational number
$r/s$ with $s>0$,
$$\left|\alpha-\frac{r}{s}\right|<\frac{3}{4s^2}$$
implies that $r/s$ is a convergent of $\alpha$.

## Facts & Assumptions

**Given:** The irrational number $\sqrt2$ and the rational number $10/7$.

[F1] Legendre's criterion with the sharp constant $1/2$ says that
$|\alpha-r/s|<1/(2s^2)$ forces $r/s$ to be a convergent
([[thm-legendre-continued-fraction-criterion]]).

[F2] Convergents of an irrational satisfy the standard error bound
$|\alpha-p_n/q_n|<1/(q_nq_{n+1})$
([[lem-continued-fraction-error-bound]]).

## Counterexample

**Proof technique:** direct.

1.1 The first few convergents of $[1;\overline2]=\sqrt2$ are. [given, algebra]
$$1,\qquad \frac32,\qquad \frac75,\qquad \frac{17}{12},$$
so $10/7$ is not a convergent of $\sqrt2$. [given, algebra]

1.2 Nevertheless. [given, algebra]
$$\frac{10}{7}-\sqrt2 = \frac{100-98}{7(10+7\sqrt2)} = \frac{2}{7(10+7\sqrt2)} < \frac{3}{4\cdot 7^2}.$$
Thus $10/7$ satisfies the displayed $3/(4s^2)$ bound. [given, algebra]

2.1 Step 1.1 and step 1.2 together refute the statement. In the light of [F1],. [F1, F2, step 1.1, step 1.2]
this shows that the sharp constant $1/2$ in Legendre's criterion cannot simply
be replaced by the larger constant $3/4$. [F1, F2, step 1.1, step 1.2] ∎
