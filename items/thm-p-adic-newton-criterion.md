---
id: thm-p-adic-newton-criterion
kind: theorem
title: "Newton's criterion in Q_p"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-zp-is-the-valuation-ring-of-qp, thm-p-adic-completion-is-a-field]
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Hensel's Lemma, Theorem 4.1"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/hensel.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, Theorem 7.32"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
pipeline_run: null
---

## Statement

Let $f \in \mathbb Z_p[X]$ and $a_0 \in \mathbb Z_p$. If

$$|f(a_0)|_p < |f'(a_0)|_p^2,$$

then the Newton iterates

$$a_{n+1} := a_n - \frac{f(a_n)}{f'(a_n)}$$

are defined, converge in $\mathbb Z_p$ to a root $a$ of $f$, satisfy
$|a-a_0|_p \le |f(a_0)/f'(a_0)|_p$, and that root is unique in the closed ball
of that radius around $a_0$.

## Facts & Assumptions

**Given:** A polynomial $f \in \mathbb Z_p[X]$ and $a_0 \in \mathbb Z_p$ with $|f(a_0)|_p < |f'(a_0)|_p^2$.

[L1] $\mathbb Z_p$ is the valuation ring of $\mathbb Q_p$ ([[cor-zp-is-the-valuation-ring-of-qp]]).

[L2] $\mathbb Q_p$ is a complete nonarchimedean valued field ([[thm-p-adic-completion-is-a-field]]).

## Proof

**Proof technique:** constructive.

1.1 Put $h_n := f(a_n)/f'(a_n)$ whenever $a_n$ is defined. Since $|h_0|_p < |f'(a_0)|_p \le 1$, we have $h_0 \in p\mathbb Z_p$, so $a_1 = a_0-h_0$ lies in $\mathbb Z_p$. For any $x \in \mathbb Z_p$, Taylor expansion gives $$f(x-h) = f(x) - h f'(x) + h^2 g_x(h)$$ with $g_x(h) \in \mathbb Z_p$. Hence $$f(a_{n+1}) = h_n^2 g_{a_n}(h_n),$$ so $|f(a_{n+1})|_p \le |h_n|_p^2$. [L1, L2, given, construct]

2.1 The derivative also satisfies $$f'(a_{n+1}) = f'(a_n) + h_n u_n$$ for some $u_n \in \mathbb Z_p$. Because $|h_n|_p < |f'(a_n)|_p$, the ultrametric inequality gives $$|f'(a_{n+1})|_p = |f'(a_n)|_p.$$ By induction, every iterate is defined, each $f'(a_n)$ has the same nonzero absolute value, and $$|a_{n+1}-a_n|_p = |h_n|_p \le \frac{|f(a_n)|_p}{|f'(a_0)|_p} \le \left(\frac{|f(a_0)|_p}{|f'(a_0)|_p^2}\right)^{2^n-1} |h_0|_p.$$ So the differences tend to $0$ quadratically. [L2, step 1.1, induction]

3.1 The series of successive differences is therefore Cauchy, so $(a_n)$ converges in $\mathbb Z_p$ by [L2]; call its limit $a$. Continuity of polynomial evaluation gives $f(a)=0$, and the ultrametric inequality applied to $$a-a_0 = \sum_{n \ge 0} (a_{n+1}-a_n)$$ shows $|a-a_0|_p \le |h_0|_p = |f(a_0)/f'(a_0)|_p$. [L2, step 2.1, algebra]

4.1 If $b$ is another root in the closed ball of radius $|h_0|_p$ about $a_0$, then $$0 = f(b)-f(a) = (b-a)v$$ for the usual divided-difference element $v \in \mathbb Z_p$. Because $a-a_0$ and $b-a_0$ both have absolute value at most $|h_0|_p$, each term of $v-f'(a_0)$ contains one factor from $(a-a_0)\mathbb Z_p$ or $(b-a_0)\mathbb Z_p$. Thus $$|v-f'(a_0)|_p \le |h_0|_p < |f'(a_0)|_p.$$ The ultrametric inequality therefore gives $|v|_p = |f'(a_0)|_p \ne 0$, so $v$ is nonzero and hence $b-a=0$. Therefore $b=a$. [L1, step 3.1, algebra, discharge-construct] ∎
