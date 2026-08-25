---
id: ex-the-first-twelve-cyclotomic-polynomials
kind: example
title: "$\\Phi_1$ through $\\Phi_{12}$ computed from the divisor recursion"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cyclotomic-polynomial, thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient, prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate, thm-monic-polynomial-division, cor-polynomial-ring-over-a-domain-is-a-domain, thm-totient-of-a-prime-power, cor-totient-at-one-and-at-a-prime, thm-euler-totient-product-formula, def-unit-group-modulo-n-and-euler-totient, def-sum-over-a-finite-index-set, def-polynomial-degree-leading-coefficient-and-monic, def-divides-in-z]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Example 5.1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Section 9.1.2"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
pipeline_run: null
---

## Example

Running the recursion of [[def-cyclotomic-polynomial]] gives

$$\begin{aligned} \Phi_1&=t-1, & \Phi_2&=t+1, & \Phi_3&=t^{2}+t+1,\\ \Phi_4&=t^{2}+1, & \Phi_5&=t^{4}+t^{3}+t^{2}+t+1, & \Phi_6&=t^{2}-t+1,\\ \Phi_7&=t^{6}+t^{5}+t^{4}+t^{3}+t^{2}+t+1, & \Phi_8&=t^{4}+1, & \Phi_9&=t^{6}+t^{3}+1,\\ \Phi_{10}&=t^{4}-t^{3}+t^{2}-t+1, & \Phi_{11}&=\textstyle\sum_{k=0}^{10}t^{k}, & \Phi_{12}&=t^{4}-t^{2}+1, \end{aligned}$$

each monic in $\mathbb Z[t]$, with degrees

$$1,\ 1,\ 2,\ 2,\ 4,\ 2,\ 6,\ 4,\ 6,\ 4,\ 10,\ 4$$

matching $\varphi(1),\dots,\varphi(12)$
([[def-unit-group-modulo-n-and-euler-totient]]).

## Facts & Assumptions

**Given:** The recursion $\Phi_1=t-1$ and $\Phi_n=(t^{n}-1)/\prod_{d\mid n,\,d<n}\Phi_d$ ([[def-cyclotomic-polynomial]], [[def-sum-over-a-finite-index-set]], [[def-divides-in-z]]); and the elementary identity $(t^{a}-1)\bigl(t^{a(b-1)}+\dots+t^{a}+1\bigr)=t^{ab}-1$ for $a,b\ge1$.

[L1] For every $n\ge1$, $\Phi_n$ is monic in $\mathbb Z[t]$ with $\prod_{d\mid n}\Phi_d=t^{n}-1$ and $\deg\Phi_n=\varphi(n)$ ([[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]], [[def-polynomial-degree-leading-coefficient-and-monic]]).

[L2] For a prime $p$ and $r\ge1$, $\Phi_{p^{r}}=\sum_{k=0}^{p-1}t^{kp^{r-1}}$ ([[prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate]]).

[L3] $\mathbb Z[t]$ is an integral domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]), so a nonzero factor may be cancelled; and division by a monic polynomial has a unique quotient and remainder ([[thm-monic-polynomial-division]]).

[L4] $\varphi(1)=1$ and $\varphi(p)=p-1$ for a prime $p$ ([[cor-totient-at-one-and-at-a-prime]]); $\varphi(p^{k})=p^{k}-p^{k-1}$ ([[thm-totient-of-a-prime-power]]); and for $n\ge1$ with prime divisors $p_0,\dots,p_{r-1}$ and $k_i=v_{p_i}(n)$, $\varphi(n)=\prod_{i<r}(p_i^{k_i}-p_i^{k_i-1})$ ([[thm-euler-totient-product-formula]]).

## Verification

**Proof technique:** direct.

1.1 $\Phi_1=t-1$ is the base clause of the recursion, of degree $1=\varphi(1)$ by [L4]. [L4, given]

1.2 The prime powers among $2,\dots,12$ are $2,3,4,5,7,8,9,11$, and [L2] gives their cyclotomic polynomials directly: $\Phi_2=1+t$, $\Phi_3=1+t+t^{2}$, $\Phi_4=1+t^{2}$, $\Phi_5=1+t+t^{2}+t^{3}+t^{4}$, $\Phi_7=\sum_{k=0}^{6}t^{k}$, $\Phi_8=1+t^{4}$, $\Phi_9=1+t^{3}+t^{6}$ and $\Phi_{11}=\sum_{k=0}^{10}t^{k}$. [L2]

2.1 For $n=6$: the positive divisors of $6$ are $1,2,3,6$ and those of $3$ are $1,3$, so [L1] gives $\Phi_1\Phi_2\Phi_3\Phi_6=t^{6}-1$ and $\Phi_1\Phi_3=t^{3}-1$; dividing and using the given identity with $a=3$, $b=2$ yields $\Phi_2\Phi_6=(t^{6}-1)/(t^{3}-1)=t^{3}+1$. Since $(t+1)(t^{2}-t+1)=t^{3}+1$ and $\Phi_2=t+1$ is nonzero, cancelling in $\mathbb Z[t]$ by [L3] gives $\Phi_6=t^{2}-t+1$. [step 1.2, L1, L3, given]

2.2 For $n=10$: the divisors of $10$ are $1,2,5,10$ and those of $5$ are $1,5$, so $\Phi_2\Phi_{10}=(t^{10}-1)/(t^{5}-1)=t^{5}+1$ by [L1] and the given identity with $a=5$, $b=2$; and $(t+1)(t^{4}-t^{3}+t^{2}-t+1)=t^{5}+1$, so cancelling gives $\Phi_{10}=t^{4}-t^{3}+t^{2}-t+1$. [step 1.2, L1, L3, given]

3.1 For $n=12$: the divisors of $12$ are $1,2,3,4,6,12$ and those of $6$ are $1,2,3,6$, so $\Phi_4\Phi_{12}=(t^{12}-1)/(t^{6}-1)=t^{6}+1$ by [L1] and the given identity with $a=6$, $b=2$; and $(t^{2}+1)(t^{4}-t^{2}+1)=t^{6}+1$ with $\Phi_4=t^{2}+1$, so cancelling gives $\Phi_{12}=t^{4}-t^{2}+1$. [step 1.2, step 2.1, L1, L3, given]

4.1 The degrees read off the displayed polynomials are $1,1,2,2,4,2,6,4,6,4,10,4$. By [L4] these are $\varphi(1)=1$, $\varphi(2)=1$, $\varphi(3)=2$, $\varphi(4)=2^{2}-2=2$, $\varphi(5)=4$, $\varphi(6)=(2-1)(3-1)=2$, $\varphi(7)=6$, $\varphi(8)=2^{3}-2^{2}=4$, $\varphi(9)=3^{2}-3=6$, $\varphi(10)=(2-1)(5-1)=4$, $\varphi(11)=10$ and $\varphi(12)=(2^{2}-2)(3-1)=4$, so every degree matches [L1]. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, L1, L4] ∎

## Remarks

- **Every division in the recursion is exact and stays over $\mathbb Z$.** That is not visible from the table and is not a coincidence of small $n$: it is [[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]], and it is what makes the recursion a definition rather than a computation that might fail.
