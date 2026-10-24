---
id: thm-finite-metric-transport-duality
kind: theorem
title: "Finite-metric transport duality and complementary slackness"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-metric-space
  - def-euclidean-inner-product
  - def-convex-subset-of-euclidean-space
  - def-finite-probability-vector
  - def-finite-metric-coupling
  - def-finite-metric-wasserstein-one
  - lem-metric-nonnegativity
  - lem-finite-set-has-max
  - def-max-min
  - lem-finitely-generated-cone-is-closed
  - lem-finite-metric-transport-optima-attained
  - thm-strict-separation-of-a-point-from-a-closed-convex-set
justified_by: []
axiom_use: "No choice principle is used. The argument uses finite sums, finite minima, the choice-free local cone proof, and the stated finite-dimensional separation theorem."
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
    - title: "Gabriel Peyré and Marco Cuturi, Computational Optimal Transport, §§2.1–2.3, 3.1, 3.3 and 6.1"
      url: "https://ar5iv.labs.arxiv.org/html/1803.00567"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §§1.1–1.3, PDF pp. 3–6"
      url: "https://arxiv.org/pdf/1009.3856"
    - title: "Martin Arjovsky, Soumith Chintala and Léon Bottou, Wasserstein GAN, §§2–3, PDF pp. 3–6"
      url: "https://arxiv.org/pdf/1701.07875"
---

## Statement

Let $X=\{x_1,\ldots,x_m\}$ be a nonempty finite set, let $d:X\times X\to\mathbb R$ satisfy $d(x,y)=0$ if and only if $x=y$, $d(x,y)=d(y,x)$, and $d(x,z)\le d(x,y)+d(y,z)$, and let $p=(p_i)_{i=1}^m$, $q=(q_i)_{i=1}^m$ have nonnegative coordinates with each vector summing to $1$. Let $\Gamma(p,q)$ consist of matrices $\pi_{ij}\ge0$ with row sums $p_i$ and column sums $q_j$, and let
$$
W_1(p,q)=\min_{\pi\in\Gamma(p,q)}\sum_{i=1}^m\sum_{j=1}^m d(x_i,x_j)\pi_{ij}.
$$
Then
$$
W_1(p,q)=\max_{\substack{f\in\mathbb R^m,\ f_1=0\\ |f_i-f_j|\le d(x_i,x_j)\ \text{for all }i,j}}\sum_{i=1}^m(p_i-q_i)f_i.
$$
Both extrema are attained. Moreover, for every minimizing coupling $\pi$ and every maximizing vector $f$, $\pi_{ij}>0$ implies $f_i-f_j=d(x_i,x_j)$.

## Statement references

[Peyré and Cuturi, Computational Optimal Transport, §§2.1–2.3, 3.1, 3.3 and 6.1](https://ar5iv.labs.arxiv.org/html/1803.00567)

[Santambrogio, Introduction to Optimal Transport Theory, §§1.1–1.3](https://arxiv.org/pdf/1009.3856)

[Arjovsky, Chintala and Bottou, Wasserstein GAN, §§2–3](https://arxiv.org/pdf/1701.07875)

## Facts & Assumptions

**Given:** The finite metric space, probability vectors, and coupling set in the Statement.

[F1] A metric is real-valued and satisfies separation, symmetry and the triangle inequality ([[def-metric-space]]).

[F2] Metric values are nonnegative, although this is derived from the metric axioms rather than assumed ([[lem-metric-nonnegativity]]).

[F3] The vectors $p,q$ have nonnegative coordinates and total mass one ([[def-finite-probability-vector]]).

[F4] $\Gamma(p,q)$ consists of nonnegative matrices with row sums $p_i$ and column sums $q_j$ ([[def-finite-metric-coupling]]).

[F5] $W_1(p,q)$ is the minimum coupling cost $\min_{\pi\in\Gamma(p,q)}\sum_{i,j}d(x_i,x_j)\pi_{ij}$ ([[def-finite-metric-wasserstein-one]]).

[F6] The coupling set is nonempty compact and its cost minimum is attained; the normalized 1-Lipschitz potential set is nonempty compact and its linear objective maximum is attained ([[lem-finite-metric-transport-optima-attained]]).

[F7] The nonnegative span of finitely many Euclidean vectors is closed and closed under nonnegative linear combinations ([[lem-finitely-generated-cone-is-closed]]).

[F8] If $C$ is a nonempty closed convex subset of $\mathbb R^n$, $n\ge1$, and $y\notin C$, there are a nonzero vector $h$ and a real $\beta$ such that $\langle h,z\rangle\le\beta<\langle h,y\rangle$ for all $z\in C$ ([[thm-strict-separation-of-a-point-from-a-closed-convex-set]]).

[F9] A nonempty finite list of real numbers has an attained minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[F10] On the library's $\mathbb R^n$, coordinates are indexed by $k<n$ and the Euclidean pairing is $\langle x,y\rangle=\sum_{k<n}x_ky_k$ ([[def-euclidean-inner-product]]).

[F11] A subset of Euclidean space is convex when it contains $(1-t)x+ty$ for every pair of its points and every $t\in[0,1]$ ([[def-convex-subset-of-euclidean-space]]).

## Proof

**Given:** The finite metric space, probability vectors, and coupling set in the Statement.

1.1 For any $\pi\in\Gamma(p,q)$ and any $f\in\mathbb R^m$ with $f_1=0$ and $|f_i-f_j|\le d(x_i,x_j)$, the marginal equations give $\sum_i(p_i-q_i)f_i=\sum_{i,j}\pi_{ij}(f_i-f_j)\le\sum_{i,j}\pi_{ij}d(x_i,x_j)$. The inequality uses $\pi_{ij}\ge0$ and $f_i-f_j\le|f_i-f_j|\le d(x_i,x_j)$. Thus every feasible dual value is at most every feasible primal cost. [given, F2, F3, F4, algebra]

1.2 Write $d_{ij}=d(x_i,x_j)$, and for $i=1,\ldots,m$ let $e_i\in\mathbb R^m$ have value $1$ at library coordinate $k=i-1$ and $0$ at every other coordinate. For alphabet-indexed tuples $u=(u_i)_{i=1}^m$ and $v=(v_j)_{j=1}^m$, identify $(u,v,t)$ with the vector in $\mathbb R^{2m+1}$ whose coordinate $k<m$ is $u_{k+1}$, whose coordinate $m+k$ is $v_{k+1}$, and whose coordinate $2m$ is $t$. Let $K$ be the nonnegative span of $(e_i,e_j,d_{ij})$ for all $i,j$, together with $(0,0,1)$. By [F7], $K$ is closed and closed under nonnegative linear combinations. For $x,y\in K$ and $s\in[0,1]$, [F7] gives $sx+(1-s)y\in K$, so [F11] makes $K$ convex; the zero representation gives $0\in K$. Put $c_*=W_1(p,q)$, which is finite and attained by [F6]. For every $\varepsilon>0$, the vector $y_\varepsilon=(p,q,c_*-\varepsilon)$ under this identification is outside $K$: if it had a representation with coefficients $\lambda_{ij}\ge0$ and $t\ge0$, its first two coordinate blocks would make $\lambda\in\Gamma(p,q)$ and its last coordinate would give $c_*-\varepsilon=\sum_{i,j}d_{ij}\lambda_{ij}+t\ge c_*$, contradicting minimality. [F1, F2, F3, F4, F5, F6, F7, F11]

2.1 Apply [F8] to $K$ and $y_\varepsilon$. It gives a vector $h$ and threshold $\beta$ with $\langle h,z\rangle\le\beta<\langle h,y_\varepsilon\rangle$ for all $z\in K$. Since $0\in K$, $\beta\ge0$. By [F7], $s z\in K$ for every $z\in K$ and $s\ge0$. If $c:=\langle h,z\rangle>0$ for some $z\in K$, take $s=(\beta+1)/c>0$; then $sz\in K$ but $\langle h,sz\rangle=\beta+1>\beta$, a contradiction. Hence $\langle h,z\rangle\le0$ for every $z\in K$, while $\langle h,y_\varepsilon\rangle>0$. [F7, F8, F10, step 1.2, algebra]

3.1 Decompose $h=(a,b,g)$ with $a,b\in\mathbb R^m$ and $g\in\mathbb R$. By [F10], pairing with $(0,0,1)\in K$ gives $g\le0$. If $g=0$, pairing with every $(e_i,e_j,d_{ij})$ gives $a_i+b_j\le0$. Multiplying by $p_iq_j\ge0$ and summing yields $\sum_i p_i a_i+\sum_jq_jb_j=\sum_{i,j}p_iq_j(a_i+b_j)\le0$. When $g=0$ this left-hand side is $\langle h,y_\varepsilon\rangle$, contrary to step 2.1. Therefore $g<0$. [step 2.1, F3, F10, algebra]

4.1 Define $u_i=a_i/(-g)$ and $v_j=b_j/(-g)$. The generator inequalities and $g<0$ give $u_i+v_j\le d_{ij}$ for all $i,j$. Dividing the strict point inequality by $-g>0$ gives $\sum_i p_i u_i+\sum_jq_jv_j>c_*-\varepsilon$. [step 2.1, step 3.1, algebra]

5.1 Set $f_i=\min_{1\le j\le m}(d_{ij}-v_j)$, whose minimum is attained by [F9]. From $u_i+v_j\le d_{ij}$ we have $u_i\le f_i$. For any $i,k,j$, the triangle inequality gives $d_{ij}-v_j\le d_{ik}+d_{kj}-v_j$; taking finite minima yields $f_i\le d_{ik}+f_k$, and symmetry gives $|f_i-f_k|\le d_{ik}$. Also $f_j\le d_{jj}-v_j=-v_j$, so $-f_j\ge v_j$. Since $p,q$ are nonnegative, $\sum_i(p_i-q_i)f_i\ge\sum_i p_i u_i+\sum_jq_jv_j>c_*-\varepsilon$. Replacing $f_i$ by $f_i-f_1$ preserves all Lipschitz inequalities and the objective because $\sum_i p_i=\sum_iq_i=1$; the resulting vector is normalized with first coordinate zero. [step 4.1, F1, F3, F9, algebra]

6.1 Let $D$ be the attained maximum in [F6]. Step 5.1 shows $D>c_*-\varepsilon$ for every $\varepsilon>0$, so $D\ge c_*$; otherwise $\varepsilon=(c_*-D)/2$ contradicts that inequality. Step 1.1 gives $D\le c_*$. Hence $D=c_*=W_1(p,q)$, and both extrema are attained by [F6]. [step 1.1, step 5.1, F5, F6, algebra]

7.1 Let $\pi$ be any minimizing coupling and $f$ any maximizing normalized potential. By the marginal equations and optimal-value equality, $0=c_*-\sum_i(p_i-q_i)f_i=\sum_{i,j}\pi_{ij}\bigl(d_{ij}-(f_i-f_j)\bigr)$. Each summand is nonnegative by feasibility. A finite sum of nonnegative reals can be zero only if each term is zero: if one term were positive, adding the other nonnegative terms would keep the total positive. Thus if $\pi_{ij}>0$, its factor $d_{ij}-(f_i-f_j)$ is zero, proving $f_i-f_j=d_{ij}$. [step 1.1, step 6.1, F4, algebra] ∎

