---
id: lem-finite-metric-transport-optima-attained
kind: lemma
title: "Finite-metric transport and normalized dual optima are attained"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-metric-space
  - def-finite-probability-vector
  - def-finite-metric-coupling
  - def-finite-metric-wasserstein-one
  - lem-metric-nonnegativity
  - thm-heine-borel-rn
  - lem-metrics-on-rn
  - def-metric-topology
  - lem-real-line-is-a-metric-space
  - def-metric-continuity
  - def-semicontinuity-on-euclidean-subsets
  - thm-euclidean-semicontinuous-extreme-value-theorem
  - lem-finite-sum-laws
  - lem-of-square-positive
  - lem-of-square-monotone
  - thm-of-square-roots
  - def-abs-value
  - lem-of-abs-value
  - lem-of-triangle-inequality
  - lem-of-sign-rules
  - def-integer-power
  - lem-of-zero-mult
  - thm-induction-principle
justified_by: []
axiom_use: "No choice principle is used; the product coupling is explicit and all compactness statements are finite-dimensional."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Gabriel Peyré and Marco Cuturi, Computational Optimal Transport, §§2.1–2.3 and 3.1"
      url: "https://ar5iv.labs.arxiv.org/html/1803.00567"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §§1.1–1.2, PDF pp. 3–5"
      url: "https://arxiv.org/pdf/1009.3856"
---

## Statement

Let $X=\{x_1,\ldots,x_m\}$ be a nonempty finite metric space, and let $p,q$ be probability vectors on $X$. The coupling set $\Gamma(p,q)$ is nonempty and compact in $\mathbb R^{m^2}$, so the finite-metric transport cost $W_1(p,q)$ attains its minimum. The normalized 1-Lipschitz potential set
$$
\mathcal L_1(X,d)=\{f\in\mathbb R^m:f_1=0,\ |f_i-f_j|\le d(x_i,x_j)\text{ for all }i,j\}
$$
is also nonempty and compact, so the linear functional $f\mapsto\sum_{i=1}^m(p_i-q_i)f_i$ attains a maximum on it.

## Statement references

[Peyré and Cuturi, Computational Optimal Transport, §§2.1–2.3 and 3.1](https://ar5iv.labs.arxiv.org/html/1803.00567)

[Santambrogio, Introduction to Optimal Transport Theory, §§1.1–1.2](https://arxiv.org/pdf/1009.3856)

## Facts & Assumptions

**Given:** A nonempty finite set $X=\{x_1,\ldots,x_m\}$ with metric $d$, and probability vectors $p,q$ on $X$.

[F1] A probability vector has nonnegative coordinates with total sum one ([[def-finite-probability-vector]]).

[F2] A coupling is a nonnegative matrix whose row sums are $p_i$ and column sums are $q_j$ ([[def-finite-metric-coupling]]).

[F3] A metric has real values, vanishes exactly on equal points, is symmetric, and satisfies the triangle inequality ([[def-metric-space]]).

[F4] Every metric is nonnegative, although nonnegativity is not listed as a separate metric axiom ([[lem-metric-nonnegativity]]).

[F5] On $\mathbb R^n$ for $n\ge1$, $d_2(x,y)=\sqrt{\sum_{k<n}(x_k-y_k)^2}$ is a metric ([[lem-metrics-on-rn]]). Closedness and openness refer to its metric topology; a set is closed when its complement is open, and open sets contain a ball around each of their points ([[def-metric-topology]]).

[F6] A subset of $\mathbb R^n$, $n\ge1$, is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]).

[F7] Every lower semicontinuous real function on a nonempty compact Euclidean set attains a minimum, and every upper semicontinuous one attains a maximum ([[thm-euclidean-semicontinuous-extreme-value-theorem]]).

[F8] The real line has metric $d_{\mathbb R}(a,b)=|a-b|$ ([[lem-real-line-is-a-metric-space]]), and continuity at $x$ means that for each $\varepsilon>0$ some $\delta>0$ makes $d_X(x,y)<\delta$ imply $d_Y(f(x),f(y))<\varepsilon$ ([[def-metric-continuity]]).

[F9] A continuous real function on a Euclidean subset is both lower and upper semicontinuous ([[def-semicontinuity-on-euclidean-subsets]]).

[F10] The finite-metric transport cost is $W_1(p,q)=\min_{\pi\in\Gamma(p,q)}\sum_{i,j}d(x_i,x_j)\pi_{ij}$ ([[def-finite-metric-wasserstein-one]]).

[F11] Every nonzero real has positive square and $0^2=0$; finite sums of nonnegative terms dominate each term, termwise inequalities may be summed, and finite sums scale by a common scalar; for nonnegative reals, comparison of squares is equivalent to comparison of the reals; square roots are nonnegative and square to their radicands; absolute values are nonnegative and satisfy $|a|=0\iff a=0$, $|ab|=|a||b|$, $|a+b|\le|a|+|b|$, and $|a|^2=a^2$; multiplication by a nonnegative real preserves nonstrict inequalities ([[lem-of-square-positive]], [[def-integer-power]], [[lem-of-zero-mult]], [[lem-finite-sum-laws]], [[lem-of-square-monotone]], [[thm-of-square-roots]], [[def-abs-value]], [[lem-of-abs-value]], [[lem-of-triangle-inequality]], [[lem-of-sign-rules]]).

[F12] A property holding at $0$ and passing from $n$ to $n+1$ holds for every natural $n$ ([[thm-induction-principle]]).

## Proof

1.1 Define $\pi_{ij}=p_iq_j$. These entries are nonnegative by [F1], and their row sums are $p_i\sum_jq_j=p_i$ while their column sums are $q_j\sum_ip_i=q_j$. Thus $\pi\in\Gamma(p,q)$ and the coupling set is nonempty. [given, F1, F2, construct]

1.2 Flatten a matrix into $\mathbb R^{m^2}$ in row-major order, assigning entry $\pi_{ij}$ to library coordinate $k=(i-1)m+(j-1)<m^2$; likewise potential coordinate $f_i$ corresponds to library coordinate $i-1<m$. In any dimension $n\ge1$, for $u\in\mathbb R^n$ and $k<n$, [F11] gives $u_k^2\le\sum_{j<n}u_j^2$; by [F5,F11], $|u_k|^2=u_k^2\le d_2(u,0)^2$, and both $|u_k|$ and $d_2(u,0)$ are nonnegative, so [F11] gives $|u_k|\le d_2(u,0)$. By induction on $n$, every finite list satisfies $|\sum_{k<n}a_k|\le\sum_{k<n}|a_k|$: the empty case is equality and the successor step follows from $|a+b|\le|a|+|b|$ in [F11]. Thus for every finite linear form $L(z)=\sum_{k<n}c_kz_k$, this bound, $|ab|=|a||b|$, the coordinate estimate, multiplication by nonnegative coefficients, finite-sum monotonicity and scaling in [F11] give $|L(z)-L(w)|\le(\sum_{k<n}|c_k|)d_2(z,w)$. The same estimate holds for every affine form $H(z)=L(z)+b$, since the constant cancels in $H(z)-H(w)$. The set $\Gamma(p,q)$ is defined by finitely many affine equalities and weak inequalities. Each row or column equality, after moving its marginal to one side, has $m$ coefficients equal to $1$; each entrywise nonnegativity constraint has one coefficient equal to $1$, so the coefficient sum $C=\sum|c_k|$ is positive for every constraint. If an affine equality $H(z)=0$ fails at $z_0$, then for $d_2(z,z_0)<|H(z_0)|/(2C)$ the estimate gives $|H(z)-H(z_0)|<|H(z_0)|/2$, so $H(z)\ne0$. If an affine inequality $H(z)\ge0$ fails at $z_0$, then for $d_2(z,z_0)<-H(z_0)/(2C)$ the estimate gives $H(z)<H(z_0)/2<0$. Thus every point outside $\Gamma(p,q)$ has a ball in its complement, so [F5,F6] make $\Gamma(p,q)$ closed. Also $0\le\pi_{ij}\le p_i\le1$ by [F1,F2], so the set is bounded. Since $m^2\ge1$, [F6] makes $\Gamma(p,q)$ compact. [given, F1, F2, F5, F6, F11, F12, algebra]

2.1 For a matrix difference $z-w$, the objective changes by at most $C d_2(z,w)$, where $C=\sum_{i,j}d(x_i,x_j)\ge0$ is finite; the coordinate bound is the same as in step 1.2. For any $\varepsilon>0$, taking $\delta=\varepsilon/(C+1)$ shows that inputs within $\delta$ have output difference less than $\varepsilon$, so the objective is continuous by [F8] and lower semicontinuous by [F9]. It is real-valued because all distances are finite reals; by [F4] and [F1] its values are nonnegative. The nonempty compact set from steps 1.1–1.2 and [F7] therefore give a finite attained minimum, which is $W_1(p,q)$ by [F10]. [step 1.1, step 1.2, F1, F4, F7, F8, F9, F10, F11]

2.2 The set $\mathcal L_1(X,d)$ contains the zero vector. It is closed because its constraints are finitely many linear equalities and weak inequalities: $f_1=0$ has one nonzero coefficient, and writing each $|f_i-f_j|\le d(x_i,x_j)$ as $d(x_i,x_j)-(f_i-f_j)\ge0$ and $d(x_i,x_j)+(f_i-f_j)\ge0$ gives two nonzero coefficients in each inequality when $i\ne j$; when $i=j$ the constraint is the identity $0\le0$. Thus every violated constraint has positive coefficient sum and the strict-violation ball argument in step 1.2 applies using [F5,F6,F11]. Since $f_1=0$ and $|f_i-f_1|\le d(x_i,x_1)$, every $f\in\mathcal L_1(X,d)$ satisfies $|f_i|\le d(x_i,x_1)\le 1+\sum_{k=1}^m d(x_k,x_1)$ by [F3,F4]; thus the set is bounded. Since $m\ge1$, [F6] makes it compact. [given, F3, F4, F5, F6, F11, step 1.2, algebra]

3.1 The objective $f\mapsto\sum_i(p_i-q_i)f_i$ changes by at most $C'd_2(f,g)$, where $C'=\sum_i|p_i-q_i|\ge0$; taking $\delta=\varepsilon/(C'+1)$ for each $\varepsilon>0$ proves continuity by [F8] and upper semicontinuity by [F9]. The nonempty compact set from step 2.2 and [F7] give an attained maximum. [step 2.2, F7, F8, F9, F11, algebra] ∎

