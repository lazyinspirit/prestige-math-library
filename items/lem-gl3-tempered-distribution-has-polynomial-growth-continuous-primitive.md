---
dependency_level: 0
id: lem-gl3-tempered-distribution-has-polynomial-growth-continuous-primitive
kind: lemma
title: "A tempered distribution has a continuous primitive of polynomial growth"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-tempered-distribution, thm-finite-seminorm-bound-characterizes-tempered-distributions, def-distributional-derivative, lem-test-function-cutoffs-and-euclidean-localization, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, def-countable-choice, thm-integration-by-parts, thm-polynomial-growth-functions-define-tempered-distributions, lem-test-function-inclusion-in-schwartz-space-is-continuous, thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, Distributions and Analytic Continuation of Dirichlet Series, proof of Theorem 3.19, printed pp.20–21"
      url: "https://arxiv.org/pdf/math/0403030v1"
---

## Statement

Assume Countable Choice. For every tempered distribution $T\in\mathcal S'(\mathbb R)$ there exist a nonnegative integer $\ell$, a continuous function $F:\mathbb R\to\mathbb C$, and finite constants $C,M\ge0$ such that $|F(x)|\le C(1+|x|)^M$ and $D^\ell F=T$ as tempered distributions. If $T$ is zero on an open interval containing $0$, $F$ can be chosen zero on a smaller such interval.

## Statement references

[Miller and Schmid, proof of Theorem 3.19](https://arxiv.org/pdf/math/0403030v1)

## Facts & Assumptions

**Given:** Countable Choice and a tempered distribution $T$ on the real line. The regular distribution of a continuous function is interpreted using its locally integrable representative.

[F1] [[def-tempered-distribution]] and [[thm-finite-seminorm-bound-characterizes-tempered-distributions]] give continuity and a finite Schwartz-seminorm bound.

[F2] [[def-distributional-derivative]] defines $D^jT$ by $\langle D^jT,\varphi\rangle=(-1)^j\langle T,D^j\varphi\rangle$.

[F3] [[lem-test-function-cutoffs-and-euclidean-localization]] supplies a fixed nonnegative compact smooth mollifier, normalized to integral one, and smooth cutoffs. A smooth step is obtained by integrating such a mollifier.

[F4] [[thm-integration-by-parts]] gives proper continuously differentiable integration by parts, componentwise for complex functions. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]] identifies the compact continuous Riemann and Lebesgue integrals under [[def-countable-choice|Countable Choice]].

[F5] [[thm-polynomial-growth-functions-define-tempered-distributions]] makes a continuous polynomial-growth function tempered. [[thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions]] preserves temperateness under derivatives, and [[lem-test-function-inclusion-in-schwartz-space-is-continuous]] makes compact smooth tests dense in Schwartz space.

## Proof

**Given:** The distribution and assumptions in the statement.

1.1 By [F1], choose $N\ge0$ and $A>0$ with $|T(\varphi)|\le A Q_N(\varphi)$, where $Q_N(g)=\max_{0\le j\le N}\sup_y(1+|y|)^N|D^jg(y)|$. Indeed choose $N$ at least every derivative and weight order in a finite controlling family; the powers $(1+|y|)^N$ dominate that family. Set $\ell=N+2$ and fix a smooth function $\chi$ equal to $1$ for $y\le-1$ and $0$ for $y\ge0$, using [F3]. [F1, F3, choose, algebra]

2.1 For a compactly supported $C^N$ function $g$, convolution with the fixed smooth mollifier at scale $\varepsilon\downarrow0$ gives compactly supported smooth $g_\varepsilon$ whose derivatives through order $N$ converge uniformly to those of $g$, with supports in one fixed compact enlargement. For each derivative this follows from uniform continuity in the formula $D^jg_\varepsilon(y)-D^jg(y)=\int\eta(z)(D^jg(y-\varepsilon z)-D^jg(y))\,dz$. Step 1.1 therefore makes $T(g_\varepsilon)$ Cauchy. Its limit $\overline T(g)$ is independent of the smoothing sequence, is linear, satisfies the same $AQ_N$ bound, and agrees with $T$ on smooth tests. These extensions agree when fixed-support spaces overlap. [F3, step 1.1, construct, algebra]

3.1 Define $K_x(y)=((x-y)_+^{\ell-1}-\chi(y)(x-y)^{\ell-1})/(\ell-1)!$. It is $C^N$ in $y$, since $\ell-1-N=1$, and its support lies in $[\min(x,-1),\max(x,0)]$: on the lower complementary interval the two polynomial terms cancel, and on the upper one both vanish. On a bounded $x$ interval, all derivatives through $N$ depend continuously on $(x,y)$ and have one common compact support. Direct differentiation gives $Q_N(K_x)\le C_N(1+|x|)^{N+\ell-1}$; the only derivatives of $\chi$ are supported in $[-1,0]$. Hence $F(x):=\overline T(K_x)$ is continuous and has polynomial growth. [step 1.1, step 2.1, construct, algebra]

4.1 Fix $\varphi\in C_c^\infty(\mathbb R)$. The proper parameter integral $\int K_x(\cdot)\varphi^{(\ell)}(x)\,dx$ is the limit of Riemann sums in one fixed-support $C^N$ norm: joint continuity of all derivatives through $N$ on its compact rectangle makes the convergence uniform. Thus the continuous functional $\overline T$ commutes with this integral. Repeated integration by parts gives $\int K_x(y)\varphi^{(\ell)}(x)\,dx=(-1)^\ell\varphi(y)$; the cutoff term is a polynomial in $x$ of degree $\ell-1$ and contributes zero, and the truncated-power term is the repeated integration kernel. By [F2] and [F4], $\langle D^\ell F,\varphi\rangle=(-1)^\ell\overline T(\int K_x\varphi^{(\ell)}(x)\,dx)=T(\varphi)$. Both sides are tempered by [F5], so density of compact smooth tests extends the equality to every Schwartz test. [F2, F4, F5, step 2.1, step 3.1, algebra]

5.1 If a distribution $S$ on an interval $J$ has $DS=0$, every smooth test $\varphi$ with integral zero is the derivative of the compactly supported test $\psi(x)=\int_{-\infty}^x\varphi(t)\,dt$ on $J$. Thus $S(\varphi)=0$. Subtracting a fixed unit-integral test shows $S(\varphi)=c\int\varphi$ for one constant $c$. Applying this successively to $D^{\ell-1}F$, then subtracting $cx^{\ell-1}/(\ell-1)!$, and continuing downwards shows that $D^\ell F=0$ on $J$ forces $F$ to equal a polynomial of degree at most $\ell-1$ there as a regular distribution. Since $F$ is continuous the equality is pointwise: a nonzero continuous difference could be paired with a sufficiently small nonnegative bump and a constant complex phase to give a nonzero integral. [F2, F3, F4, step 4.1, algebra]

6.1 If $T=0$ on an interval $J$ around $0$, step 5.1 supplies a polynomial $p$ with $F=p$ on $J$. Replace $F$ by $F-p$ globally. Its $\ell$th derivative is unchanged, it is zero on $J$, and it still has polynomial growth. The case $T=0$ permits $F=0$ directly. This proves both assertions; Countable Choice is used only for the regular-integral identification in [F4]. [step 3.1, step 4.1, step 5.1, algebra] ∎
