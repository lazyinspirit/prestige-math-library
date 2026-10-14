---
id: lem-bowl-shaped-loss-has-centered-lipschitz-minorants
kind: lemma
title: Bounded bowl-shaped losses have Gaussian-centered Lipschitz minorants
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - lem-distance-to-set-is-lipschitz
  - def-metric-bounded-diameter
  - def-infimum
  - thm-infimum-property
  - cor-triangle-inequality-for-inner-product-norm
  - def-euclidean-inner-product
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - lem-convex-set-and-closure-have-same-interior-and-boundary
  - thm-metric-sequential-closure
  - def-borel-and-lebesgue-measurable-function-on-rn
  - lem-boundary-of-convex-set-is-lebesgue-null
  - lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - thm-independent-random-elements-have-product-joint-law
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-dominated-convergence
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. W. van der Vaart, Semiparametric Statistics, Theorem 4.14 and complete proof, pp. 46–48"
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: "John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, Theorem 3 and proof, pp. 17–18; local finite-prior proof supplied here"
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Statement

Assume AC. Let $L:\mathbb R^d\to[0,M]$ be Borel measurable, symmetric and quasi-convex, with $M>0$. For integers $N\ge2$ and $m\ge1$, put $\delta=M/N$, $C_k=\overline{\{x:L(x)\le k\delta\}}$ and
$$g_{N,m}(x)=\delta\sum_{k=1}^{N-1}\min(1,m\,d(x,C_k)).$$
For $C_k=\varnothing$ the corresponding summand is defined to be one, and for $C_k=\mathbb R^d$ it is zero. Then $0\le g_{N,m}\le L$, and $g_{N,m}$ is bounded and Lipschitz. For every nondegenerate Gaussian $H\sim N_d(b,S)$,
$$\inf_a E g_{N,m}(a-H)=E g_{N,m}(H-b),\qquad \lim_{N\to\infty}\lim_{m\to\infty}E g_{N,m}(H-b)=E L(H-b).$$
Each summand is symmetric and quasi-convex; no quasi-convexity of their sum is asserted.

## Facts & Assumptions

**Given:** AC, the bounded bowl-shaped loss, integers and Gaussian law.

[F1] [[lem-distance-to-set-is-lipschitz]]: distance to a nonempty set is one-Lipschitz.

[F2] [[lem-boundary-of-convex-set-is-lebesgue-null]]: the boundary of a convex set is Lebesgue-null, including lower-dimensional convex sets.

[F3] [[lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss]]: a bounded Borel symmetric quasi-convex loss has least Gaussian shift risk at the Gaussian center.

[F4] [[def-multivariate-normal-law]]: A nondegenerate Gaussian can be
realized as $b+AG$, where $A=S^{1/2}$ is invertible and $G$ has independent
standard-normal coordinates.

[F5] [[thm-dominated-convergence]] passes limits of functions bounded by $M$ through the Gaussian expectation.

[F6] [[def-metric-bounded-diameter]], [[def-infimum]], and
[[thm-infimum-property]]: $d(x,C)=\inf_{c\in C}\|x-c\|_2$, and for every
$\epsilon>0$ a point of nonempty $C$ can be chosen within $\epsilon$ of this
infimum.

[F7] [[cor-triangle-inequality-for-inner-product-norm]]: The Euclidean norm
satisfies $\|u+v\|_2\le\|u\|_2+\|v\|_2$.

[F8] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: The expectation of
a finite sum of bounded measurable functions is the sum of their expectations.

[F9] [[def-borel-and-lebesgue-measurable-function-on-rn]]: Borel functions
on $\mathbb R^d$ are measurable for the Gaussian and Lebesgue integrals.

[F10] [[lem-convex-set-and-closure-have-same-interior-and-boundary]]: Under
AC and countable choice, a nonempty convex subset and its closure have the
same interior and boundary, and the closure is convex. AC supplies countable
choice here.

[F11] [[thm-metric-sequential-closure]]: A point in the closure of a subset
of Euclidean space is the limit of a sequence from that subset.

[A1] [[def-axiom-of-choice]] is retained for the Gaussian and centering suppliers.

[F12] [[def-standard-normal-and-normal-laws]],
[[thm-independent-random-elements-have-product-joint-law]],
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]], and
[[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]:
The scalar standard normal has density $\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$;
independent coordinates have product law, repeated integration is valid, and
product Lebesgue measure agrees with Euclidean Lebesgue measure on Borel sets.

[F13] [[thm-linear-change-of-variables-for-lebesgue-measure]]: Under
countable choice, an invertible linear map sends Lebesgue-null sets to null
sets. AC supplies countable choice in [F12] and [F13].

## Proof

1.1 Each sublevel $A_k=\{L\le k\delta\}$ is convex and symmetric by hypothesis. Its closure $C_k$ is closed; it is convex by [F10] when $A_k$ is nonempty, and is convex by vacuity when $A_k=\varnothing$. If $x\in C_k$, [F11] supplies $x_j\in A_k$ with $x_j\to x$; then $-x_j\in A_k$ and $-x\in C_k$, so $C_k$ is symmetric (the empty case is symmetric as well). For a nonempty closed convex $C$, choose $c_x,c_y\in C$ within $\epsilon$ of $d(x,C),d(y,C)$ using [F6]. Their convex combination lies in $C$, and [F7] gives $d((1-t)x+ty,C)\le(1-t)d(x,C)+td(y,C)+\epsilon$. Let $\epsilon\downarrow0$ to prove convexity of the distance function. When $C=-C$, replacing each $c$ by $-c$ in the infimum shows $d(-x,C)=d(x,C)$. Thus for a nonempty proper $C_k$, $q(x)=\min(1,m d(x,C_k))$ is symmetric; its sublevel at $0\le t<1$ is $\{d(x,C_k)\le t/m\}$, which is convex, and its sublevel for $t\ge1$ is the whole space. It is Borel and $m$-Lipschitz by [F1] and [F9]. For empty $C_k$ or $C_k=\mathbb R^d$, the stated constant conventions have the same properties. [A1, F1, F6, F7, F9, F10, F11, given, choose, construct, algebra]

2.1 If $L(x)\le k\delta$, then $x\in C_k$ and the $k$th term is zero. Every remaining term is at most one, so $0\le g_{N,m}(x)\le\delta\#\{1\le k<N:k\delta<L(x)\}\le L(x)$. The finite sum is bounded by $M$ and has Lipschitz constant at most $M m$. Apply F3 separately to each summand. Every summand's expected loss is minimized at $a=b$ (use its symmetry to replace $b-H$ by $H-b$), so the same action minimizes their sum by [F8]. This proves the first displayed identity without assuming the sum quasi-convex. [F3, F8, A1, step 1.1, algebra]

3.1 Since $C_k$ is closed, its $k$th term increases to $\mathbf1_{C_k^c}$ as $m\to\infty$. If $C_k=\mathbb R^d$, then [F10] gives $\operatorname{int}\{L\le k\delta\}=\mathbb R^d$, so the level set is all of $\mathbb R^d$ and both indicators vanish. If $C_k=\varnothing$, the level set is empty and both indicators equal one. Otherwise the difference between $\{L>k\delta\}$ and $C_k^c$ is contained in the boundary of the convex set $\{L\le k\delta\}$, which is null by [F2]. To justify the Gaussian nullity, [F4] realizes $H-b=AG$. By [F12], repeated integration of the scalar densities gives $P(G\in E)=\int_E\prod_{j=1}^d\phi(z_j)\,d\lambda_d(z)$ for every Borel $E$ (for $d=1$ this is the scalar definition). The closed boundary $D$ is Borel and null, and $A^{-1}D$ is null by [F13], so $P(H-b\in D)=P(G\in A^{-1}D)=0$. Therefore F5 gives $\lim_m E g_{N,m}(H-b)=E[\delta\sum_{k=1}^{N-1}\mathbf1_{\{L(H-b)>k\delta\}}]$. The expression inside the expectation differs from $L(H-b)$ by at most $\delta$: count the grid thresholds strictly below each value in $[0,M]$. Let $N\to\infty$ to obtain the second identity. [A1, F2, F4, F5, F9, F10, F12, F13, step 2.1, algebra] ∎

