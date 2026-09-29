---
id: lem-tensor-consistency-test-soundness
kind: lemma
title: "Tensor consistency rejects a wrong decoded tensor"
status: draft
origin: pipeline
deps:
  - def-walsh-hadamard-encoding-and-relative-distance
  - def-quadratic-consistency-test
  - lem-random-subsum-detects-a-nonzero-binary-vector
  - def-self-correction-of-a-noisy-linear-function
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.2 proof of Theorem 18.21 Step 2, printed pp. 366–367"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
---

## Statement

Let $N\ge0$, $u\in\mathbb F_2^N$, and $V\in\mathbb F_2^{N\times N}$ with
$V\ne u\otimes u$, using row-major tensor coordinates. Put
$F_u=\operatorname{WH}_N(u)$ and
$G_V=\operatorname{WH}_{N^2}(\operatorname{vec}(V))$. The ideal test samples
independent uniform $r,s\in\mathbb F_2^N$ and rejects exactly when
$G_V(r\otimes s)\ne F_u(r)F_u(s)$. Its rejection probability is at least
$1/4$.

Now let fixed tables $f:\mathbb F_2^N\to\mathbb F_2$ and
$g:\mathbb F_2^{N\times N}\to\mathbb F_2$ have relative distances
$$\delta_f=2^{-N}|\{x:f(x)\ne F_u(x)\}|,\qquad \delta_g=2^{-N^2}|\{Z:g(Z)\ne G_V(Z)\}|.$$
The six-query self-corrected test samples independent uniform
$r,s,y,y'\in\mathbb F_2^N$ and $Y\in\mathbb F_2^{N\times N}$, forms
$$\widehat f_r=f(y)+f(r+y),\quad \widehat f_s=f(y')+f(s+y'),\quad \widehat g_{r\otimes s}=g(Y)+g(Y+r\otimes s),$$
and rejects exactly when
$\widehat g_{r\otimes s}\ne\widehat f_r\widehat f_s$. It makes six
nonadaptive table queries, allowing repeated locations, and rejects with
probability at least $\frac14-4\delta_f-2\delta_g$. When $N=0$ the condition
$V\ne u\otimes u$ is impossible.

## Facts & Assumptions

**Given:** A dimension $N$, a vector $u$, a matrix $V\ne u\otimes u$, and
fixed tables $f,g$ at the stated distances from the corresponding linear
Walsh–Hadamard tables.

[F1] Walsh–Hadamard tables are truth tables of linear forms, so
$\operatorname{WH}_n(w)(x)=w\cdot x$.
([[def-walsh-hadamard-encoding-and-relative-distance]])

[F2] The ideal tensor test compares $g(r\otimes s)$ with $f(r)f(s)$ for
independent uniform $r,s$.
([[def-quadratic-consistency-test]])

[F3] Tensor coordinates are $(r\otimes s)_{ij}=r_is_j$ in fixed row-major
order. ([[def-quadratic-consistency-test]])

[F4] For every nonzero binary vector $d$ and uniform $z$,
$\Pr[z\cdot d=1]=1/2$.
([[lem-random-subsum-detects-a-nonzero-binary-vector]])

[F5] The two-query corrector for a fixed oracle $h$ at request $q$ returns
$h(a)+h(q+a)$ for uniform $a$.
([[def-self-correction-of-a-noisy-linear-function]])

[F6] The self-corrected tensor test independently samples its auxiliary
points and uses two table queries for each of its three decoded values.
([[def-quadratic-consistency-test]])

## Proof

1.1 Let $D=V+u\otimes u\ne0$ over $\mathbb F_2$, choose the first nonzero column $j$ of $D$, and view $r$ as a row vector. By [F4], $rD\ne0$ with probability at least $\Pr[r\cdot D_{*,j}=1]=1/2$. For each such $r$, $rD$ is a nonzero vector, so [F4] gives $\Pr_s[rDs=1]=1/2$. Since $G_V(r\otimes s)+F_u(r)F_u(s)=rDs$ by [F1] and [F3], the rejection probability of the ideal test in [F2] is at least $1/4$. [F1, F2, F3, F4, given, construct, algebra]

1.2 For any fixed requested point $q$ and any fixed table $h$ at relative distance $\eta$ from a linear form $L$, the points $a$ and $q+a$ are both uniform when $a$ is uniform. Unless either lies in the error set, [F5] returns $h(a)+h(q+a)=L(a)+L(q+a)=L(q)$. The union bound therefore gives corrector error at most $2\eta$, uniformly in $q$, including $q=0$. [F1, F5, given, algebra]

2.1 Apply step 1.2 to the two requests $r,s$ for $f$ and to request $r\otimes s$ for $g$. The probability that any of the three corrected values is wrong is at most $2\delta_f+2\delta_f+2\delta_g=4\delta_f+2\delta_g$. Outside that union, the self-corrected predicate in [F6] equals the ideal predicate in [F2]. Hence its rejection probability is at least the ideal rejection probability from step 1.1 minus $4\delta_f+2\delta_g$, which is the claimed bound; no independence of the correction errors is used. [F2, F6, step 1.1, step 1.2, algebra]

3.1 The test samples $r,s,y,y'$ using $4N$ unbiased bits and $Y$ using $N^2$ more, computes all six query locations before receiving any table value, and makes exactly six queries as stated in [F6]. Repeated locations are permitted by [F5]; for $N=0$, all domains are singletons and the hypothesis is impossible. [F5, F6, step 2.1, construct, discharge-construct] ∎
