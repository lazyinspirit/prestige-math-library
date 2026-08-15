---
id: cex-factorial-generating-series-is-not-rational
kind: counterexample
title: '$\sum_{n\ge0}n!x^n$ is a formal power series that is not rational over $\mathbb Q$'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-linear-recurrence-iff-rational-generating-function, thm-root-bound-for-polynomials-over-a-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Every formal power series over $\mathbb Q$ is rational.

The series $F(x)=\sum_{n\ge0}n!x^n$ is a counterexample.

## Facts & Assumptions

**Given:** The formal series $F(x)=\sum_{n\ge0}n!x^n\in\mathbb Q\llbracket x\rrbracket$.

[L1] A formal series over a field is rational if and only if its coefficient sequence satisfies an eventual constant-coefficient recurrence ([[thm-linear-recurrence-iff-rational-generating-function]]).

[L2] A nonzero polynomial of degree $d$ over an integral domain has at most $d$ distinct roots ([[thm-root-bound-for-polynomials-over-a-domain]]).

## Counterexample

**Proof technique:** contradiction by polynomial degree.

1.1 Suppose $F$ were rational. By [L1] its coefficient sequence would satisfy an eventual constant-coefficient recurrence. That recurrence cannot have order zero, since an eventual order-zero recurrence makes the sequence eventually zero while $n!\ne0$ in $\mathbb Q$ for every $n$. So there would be $d\ge1$, coefficients $c_1,\ldots,c_d\in\mathbb Q$ with $c_d\ne0$, and an index $N$ such that $(n+d)!+c_1(n+d-1)!+\cdots+c_dn!=0$ for every $n\ge N$. [assume-contra, L1]

2.1 Divide the relation by the nonzero integer $n!$. It says that the polynomial $P(z)=(z+1)\cdots(z+d)+c_1(z+1)\cdots(z+d-1)+\cdots+c_{d-1}(z+1)+c_d$ vanishes at every integer $z=n\ge N$. [step 1.1, algebra]

3.1 The polynomial $P$ has degree $d$ and leading coefficient $1$, so it is nonzero. But step 2.1 gives it more than $d$ distinct rational roots, contradicting [L2]. [step 2.1, L2, algebra]

4.1 Therefore the coefficient sequence is not eventually recurrent and [L1] shows that $F(x)$ is not rational. This argument is entirely formal and uses no convergence claim. [step 3.1, L1, discharge-contradiction] ∎
