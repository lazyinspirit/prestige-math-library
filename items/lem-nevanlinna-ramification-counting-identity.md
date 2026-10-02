---
id: lem-nevanlinna-ramification-counting-identity
kind: lemma
title: "Ramification count from the derivative divisor"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-nevanlinna-truncated-and-ramification-counts
  - def-nevanlinna-counting-proximity-and-characteristic
  - thm-zero-order-factorization-holomorphic-function
  - thm-pole-characterizations
  - thm-nevanlinna-quantities-well-defined
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §§4–6"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
      locator: "§4, equation (17), printed p. 9: $n_1=n_{f'}(r,0)+2n_f(r,\\infty)-n_{f'}(r,\\infty)$"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §1, printed pp. 88–89: the ramification count and its use in truncation"
---

## Statement

Let $f$ be a nonconstant meromorphic function on $\mathbb C$. For every $r>0$
the ramification count of the sphere map, including the centre regularisation,
is
$$ N_1(r,f)=N(r,0;f')+2N(r,\infty;f)-N(r,\infty;f'). $$
Moreover, for every $r\ge1$ and every finite set $A$ of distinct sphere targets,
$$ \sum_{a\in A}N_1(r,a;f)\le N_1(r,f). $$

## Facts & Assumptions

**Given:** A nonconstant meromorphic $f$ on $\mathbb C$ and $r>0$.

[F1] Truncated and ramification counts: $n(r,a;f)=\bar n(r,a;f)+n_1(r,a;f)$ and $N=N_1(r,a;f)+\bar N(r,a;f)$; $n_1(t,f)$ sums $(m_b-1)$ over the points of local degree $m_b\ge2$ of the sphere map, and $N_1(r,f)$ is its centre-regularized integral ([[def-nevanlinna-truncated-and-ramification-counts]]).

[F2] Counting conventions: $n(r,a;f)$ is the multiplicity sum over the closed disc $|z|\le r$, and $N(r,a;f)=n(0,a;f)\log r+\int_0^r\frac{n(t,a;f)-n(0,a;f)}{t}dt$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F3] A zero of finite order $m$ factors locally as $(z-b)^mh(z)$ with $h(b)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]]).

[F4] At a pole $p$ of order $m$, the function factors as $(z-p)^{-m}g$ with $g$ holomorphic, $g(p)\ne0$ ([[thm-pole-characterizations]]).

[F5] All counts $n(t,a;f)$ and $n_1(t,f)$ are finite, and the regularized integrals are finite and continuous in $r$ ([[thm-nevanlinna-quantities-well-defined]], [[def-nevanlinna-truncated-and-ramification-counts]]).

## Proof

**Proof technique:** compare the local weights of the two sides point by point, then integrate and sum over disjoint target classes.

1.1 (Finite target) Let $b$ be a point with $f(b)=a\in\mathbb C$ and local degree $m\ge1$. By [F3], $f-a=(z-b)^mh$ with $h(b)\ne0$; the product rule gives $f'=(z-b)^{m-1}\bigl(mh+(z-b)h'\bigr)$ with $mh(b)\ne0$, so $f'$ has a zero of order exactly $m-1$ at $b$. Thus $b$ contributes $m-1$ to $n(t,0;f')$ and, when $m\ge2$, exactly $m-1$ to $n_1(t,a;f)$; when $m=1$ both contributions vanish. [F1, F2, F3, algebra]

1.2 (Poles) Let $p$ be a pole of order $m\ge1$. By [F4], $f=(z-p)^{-m}g$ with $g$ holomorphic and $g(p)\ne0$, so $f'=(z-p)^{-m-1}\bigl(-mg+(z-p)g'\bigr)$ has a pole of order $m+1$ and no zero at $p$. Hence $p$ contributes $m$ to $n(t,\infty;f)$, $2m-(m+1)=m-1$ to $2n(t,\infty;f)-n(t,\infty;f')$, and, when $m\ge2$, exactly $m-1$ to $n_1(t,\infty;f)$. [F1, F2, F4, algebra]

1.3 (Disjointness for a target set) Let $A$ be a finite set of distinct sphere targets. For $a\in A$, $n_1(t,a;f)$ is a sum of weights $m_b-1$ over points $b$ with $f(b)=a$ and $m_b\ge2$; for distinct $a$ these point sets are disjoint, and each such $b$ is a ramification point of the sphere map with the same local degree $m_b$, so its weight appears in $n_1(t,f)$. Hence $n_1(t,a;f)\ge0$ and $\sum_{a\in A}n_1(t,a;f)\le n_1(t,f)$ for every $t>0$. [F1, algebra]

2.1 (Weight identity) Every ramification point of the sphere map is either a non-pole point with local degree $m\ge2$, where step 1.1 makes the weight $m-1$ equal to the order of the zero of $f'$, or a pole of order $m\ge2$, handled by step 1.2; conversely every zero of $f'$ is a non-pole point of local degree $\nu+1\ge2$ with weight $\nu$. Therefore, for every $t>0$, $ n_1(t,f)=n(t,0;f')+2n(t,\infty;f)-n(t,\infty;f'), $ both sides being finite sums of nonnegative weights. [F1, F5, step 1.1, step 1.2, algebra]

3.1 (Integration) The identity of step 2.1 holds at $t=0$ as well, since $t\mapsto n(t,\cdot)$ is a right-continuous step function and the centre value is included in each term. Multiplying by the centre-regularisation $n(0)\log r+\int_0^r(\,\cdot\,-n(0))\frac{dt}{t}$ is linear, so $ N_1(r,f)=N(r,0;f')+2N(r,\infty;f)-N(r,\infty;f'), $ and all terms are finite by [F5]. [F2, F5, step 2.1, algebra]

4.1 (Integrate the inequality) Each ramification point $b\ne0$ contributes its nonnegative weight times $\log(r/|b|)$ when $|b|\le r$, while a point at $0$ contributes its weight times $\log r$. For $r\ge1$ all these coefficients are nonnegative, so the pointwise inclusion of step 1.3 yields $\sum_{a\in A}N_1(r,a;f)\le N_1(r,f)$. [F2, F5, step 1.3, algebra] ∎
