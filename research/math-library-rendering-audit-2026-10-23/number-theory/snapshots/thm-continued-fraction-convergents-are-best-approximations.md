---
id: thm-continued-fraction-convergents-are-best-approximations
kind: theorem
title: "Convergents are best rational approximations of the first kind"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-continued-fraction-convergents-are-reduced, def-continued-fraction-complete-quotients, def-convergents-of-regular-continued-fraction, lem-continued-fraction-error-bound, lem-continued-fraction-complete-quotient-formula]
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

## Statement

Let $\alpha$ be an irrational real number with convergents $p_n/q_n$, and let
$n\ge1$. If
$r,s\in\mathbb{Z}$ with $s>0$ and
$$|s\alpha-r|<|q_n\alpha-p_n|,$$
then
$$s\ge q_{n+1}.$$
Consequently, no rational number with denominator at most $q_n$ approximates
$\alpha$ more closely than $p_n/q_n$.

## Facts & Assumptions

**Given:** An irrational real number $\alpha$, an index $n\ge1$, its convergents $p_n/q_n$, and integers $r,s$ with $s>0$.

[F1] Since $n\ge1$, the corollary [[cor-continued-fraction-convergents-are-reduced]] applied at the index $n-1$ shows that the vectors $$(q_n,p_n),\qquad (q_{n-1},p_{n-1})$$ form a $\mathbb{Z}$-basis of $\mathbb{Z}^2$.

[F2] The complete-quotient algorithm produces a unique integer $a_{n+1}$ with $$a_{n+1}\le \alpha_{n+1}<a_{n+1}+1,$$ and every later complete quotient satisfies $\alpha_{n+1}>1$ ([[def-continued-fraction-complete-quotients]]).

[F3] If $\alpha_{n+1}$ is the next complete quotient, then $$\alpha = \frac{\alpha_{n+1}p_n+p_{n-1}}{\alpha_{n+1}q_n+q_{n-1}}.$$ ([[lem-continued-fraction-complete-quotient-formula]]).

[F4] The convergent denominators satisfy $$q_{-1}=0,\qquad q_0=1,\qquad q_{n+1}=a_{n+1}q_n+q_{n-1}.$$ ([[def-convergents-of-regular-continued-fraction]])

[F5] The convergent errors satisfy $$\alpha-\frac{p_n}{q_n} = \frac{(-1)^n}{q_n(\alpha_{n+1}q_n+q_{n-1})},\qquad \left|\alpha-\frac{p_n}{q_n}\right|<\frac1{q_nq_{n+1}}.$$ ([[lem-continued-fraction-error-bound]]).

## Proof

**Proof technique:** direct.

1.1 From [F3] and [F5] one obtains. [F3, F5, algebra] $$q_n\alpha-p_n=\frac{(-1)^n}{\alpha_{n+1}q_n+q_{n-1}},\qquad q_{n-1}\alpha-p_{n-1}=-\alpha_{n+1}(q_n\alpha-p_n).$$ So the consecutive errors have opposite signs and satisfy $$|q_{n-1}\alpha-p_{n-1}|=\alpha_{n+1}|q_n\alpha-p_n|.$$ [F3, F5, algebra]

2.1 By the basis statement in [F1], there are unique integers $u,v$ with. [F1, step 1.1, algebra] $$\begin{pmatrix}s\\ r\end{pmatrix} = u\begin{pmatrix}q_n\\ p_n\end{pmatrix} + v\begin{pmatrix}q_{n-1}\\ p_{n-1}\end{pmatrix}.$$ Subtracting $r$ from $s\alpha$ gives $$s\alpha-r = u(q_n\alpha-p_n)+v(q_{n-1}\alpha-p_{n-1}) = (u-v\alpha_{n+1})(q_n\alpha-p_n)$$ by step 1.1. [F1, step 1.1, algebra]

3.1 Assume $|s\alpha-r|<|q_n\alpha-p_n|$. Step 2.1 gives. [step 2.1, F2, algebra] $$|u-v\alpha_{n+1}|<1.$$ If $v<0$, then $u<0$ as well, because otherwise $u-v\alpha_{n+1}\ge1+\alpha_{n+1}>1$; but then $s=uq_n+vq_{n-1}<0$, impossible. If $v=0$, then $|u|<1$, so $u=0$ and again $s=0$, impossible. Therefore $v>0$. Since $u$ is an integer and [F2] gives $\alpha_{n+1}>a_{n+1}$, the inequality above implies $$u>v\alpha_{n+1}-1>va_{n+1}-1,$$ hence $u\ge va_{n+1}$. [step 2.1, F2, algebra]

4.1 Now. [step 3.1, F4, algebra] $$s=uq_n+vq_{n-1}\ge v(a_{n+1}q_n+q_{n-1})=vq_{n+1}\ge q_{n+1},$$ which is the first claim. Because $n\ge1$, fact [F2] gives $a_{n+1}\ge1$, and [F4] then gives $$q_{n+1}=a_{n+1}q_n+q_{n-1}>q_n.$$ For the consequence, suppose $s\le q_n$ and $$\left|\alpha-\frac{r}{s}\right|<\left|\alpha-\frac{p_n}{q_n}\right|.$$ Then $$|s\alpha-r| = s\left|\alpha-\frac{r}{s}\right| < s\left|\alpha-\frac{p_n}{q_n}\right| \le q_n\left|\alpha-\frac{p_n}{q_n}\right| = |q_n\alpha-p_n|,$$ contradicting the first claim because $s<q_{n+1}$. Thus no denominator at most $q_n$ gives a closer rational approximation. [step 3.1, F2, F4, algebra] ∎
