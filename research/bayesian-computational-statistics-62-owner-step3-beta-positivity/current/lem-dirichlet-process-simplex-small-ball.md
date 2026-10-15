---
id: lem-dirichlet-process-simplex-small-ball
kind: lemma
title: "A Dirichlet process assigns exponential mass to a finite-partition simplex neighborhood"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-dirichlet-process
  - thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure
  - def-dirichlet-distribution
  - def-axiom-of-choice
  - def-real-gamma-function-by-the-euler-integral
  - thm-real-gamma-euler-integral-convergence
  - thm-real-gamma-functional-equation
  - thm-real-gamma-is-smooth
proof_strategy: direct
axiom_use: "Full AC is inherited from the normalized-gamma existence theorem and implies the Countable Choice used to normalize the finite-dimensional Dirichlet densities."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, Lemma 10"
      url: "https://arxiv.org/pdf/0708.1885"
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Fundamentals of Nonparametric Bayesian Inference, Lemma 6.12"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/bayesianstatistics"
---

## Statement

Assume AC, let $\alpha$ be a finite nonzero measure of total mass $m$, and
let $F\sim DP(\alpha)$. Consider a finite partition
$(U_0,U_1,\ldots,U_N)$ with $\alpha(U_0)=0$ or
$0<\alpha(U_0)\le m$. Write $\alpha_j=\alpha(U_j)$ for $j\ge1$, and assume
$$a\eta^b\le\alpha_j\le1\quad(1\le j\le N),\qquad 0<\eta<1/4,\qquad N\eta\le1/4,$$
for fixed $a,b>0$. For every $w=(w_1,\ldots,w_N)$ in the probability
simplex, there are constants $c,C>0$ depending only on $a,b,m,\alpha(U_0)$
such that
$$\Pr\!\left\{\sum_{j=1}^N|F(U_j)-w_j|+F(U_0)\le3\eta,\quad \min_{1\le j\le N}F(U_j)\ge\eta^2/2\right\}\ge C\exp\{-cN\log(e/\eta)\}.$$
For any compact $J\subset(0,m]$, the constants may instead depend only on
$a,b,m,J$ and are uniform over $\alpha(U_0)\in J$.
When $\alpha(U_0)=0$, the zero-base cell has $F(U_0)=0$ almost surely and is
omitted from the Dirichlet vector.

## Facts & Assumptions

**Given:** Full AC, a finite nonzero base measure, the stated finite partition, and $w$ in the $N$-simplex.

[A1] Full AC supplies the normalized-gamma Dirichlet-process existence interface and implies Countable Choice for the finite-dimensional Dirichlet density. [[def-axiom-of-choice]]

[F1] [[def-dirichlet-process]] and [[thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure]]: the finite-partition mass vector has the Dirichlet law with parameters $\alpha(U_j)$; zero-base cells have mass zero.

[F2] [[def-dirichlet-distribution]]: with positive parameters $(a_0,a_1,\ldots,a_N)$, the simplex density is $\Gamma(m)\prod_{j=0}^Nx_j^{a_j-1}/\prod_{j=0}^N\Gamma(a_j)$, where $m=\sum_j a_j$; the zero-coordinate case is omitted.

[F3] The Euler Gamma values are positive and finite for positive arguments, and $\Gamma(s+1)=s\Gamma(s)$ for $s>0$. [[def-real-gamma-function-by-the-euler-integral]] [[thm-real-gamma-euler-integral-convergence]] [[thm-real-gamma-functional-equation]]

[F4] The real Gamma function is continuous on $(0,\infty)$. [[thm-real-gamma-is-smooth]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F1]–[F2], if $\alpha(U_0)>0$ the vector $(X_0,X_1,\ldots,X_N):=(F(U_0),F(U_1),\ldots,F(U_N))$ has the displayed Dirichlet density; if $\alpha(U_0)=0$, set $X_0=0$ and use the $N$-coordinate Dirichlet density. Choose an index $i_*$ with $w_{i_*}=\max_jw_j\ge1/N$. For every $j\ne i_*$ restrict $x_j$ to $[\max(w_j-\eta^2,\eta^2/2),\min(w_j+\eta^2,1)]$, an interval of length at least $\eta^2/2$. If $\alpha(U_0)>0$, also restrict $x_0$ to $[\eta^2/2,\eta^2]$ and define $x_{i_*}=1-x_0-\sum_{j\ne i_*}x_j$; if $\alpha(U_0)=0$, define $x_{i_*}=1-\sum_{j\ne i_*}x_j$. The deviations of the coordinates other than $i_*$ sum to at most $N\eta^2$, so $|x_{i_*}-w_{i_*}|\le N\eta^2$. Consequently the total event deviation is at most $2N\eta^2+\eta^2\le3\eta$; and $x_{i_*}\ge1/N-N\eta^2\ge\eta^2/2$ because $N\eta\le1/4$. These choices lie in the simplex, satisfy the event, and their integration region has coordinate volume at least $(\eta^2/2)^N$ when $\alpha(U_0)>0$ and $(\eta^2/2)^{N-1}$ when $\alpha(U_0)=0$. [A1, F1, F2, given, choose, construct]

2.1 For $0<a_j\le1$, split the Euler integral for $\Gamma(1+a_j)$ at $1$. On $(0,1]$, $t^{a_j}\le1$, and on $[1,\infty)$, $t^{a_j}\le t$, so $\Gamma(1+a_j)\le1+\int_1^\infty te^{-t}\,dt=1+2/e$. The functional equation in [F3] gives $\Gamma(a_j)\le(1+2/e)/a_j$. Put $c_\Gamma=(1+2/e)^{-1}$. When $\alpha(U_0)>0$, the normalizing coefficient in [F2] is at least $[\Gamma(m)/\Gamma(\alpha(U_0))]c_\Gamma^N\prod_{j=1}^N a_j$; when $\alpha(U_0)=0$ and $N\ge2$, it is at least $\Gamma(m)c_\Gamma^N\prod_{j=1}^N a_j$. These Gamma factors are positive by [F3]. On the region from step 1.1, each interval coordinate satisfies $x_j^{a_j-1}\ge1$. If $\alpha(U_0)>1$, its factor is at least $(\eta^2/2)^{m}$; if $0<\alpha(U_0)\le1$, it is at least one. For $\alpha(U_0)>0$, integrating the density over that region is therefore at least $[\Gamma(m)/\Gamma(\alpha(U_0))](c_\Gamma a/2)^N\eta^{(b+2)N}$, multiplied by $(\eta^2/2)^m$ when $\alpha(U_0)>1$. For $\alpha(U_0)=0$ and $N\ge2$, the coordinate volume $(\eta^2/2)^{N-1}\ge(\eta^2/2)^N$ gives a lower bound $\Gamma(m)(c_\Gamma a/2)^N\eta^{(b+2)N}$. If $\alpha(U_0)$ ranges in a compact $J\subset(0,m]$, [F4] bounds $\Gamma(\alpha(U_0))$ above uniformly, so $\Gamma(m)/\Gamma(\alpha(U_0))$ is uniformly bounded below; all other Gamma factors here are fixed and positive. Since $a,b$ are fixed, $(c_\Gamma a/2)^N\eta^{(b+2)N}\ge\exp\{-c_1N\log(e/\eta)\}$ for some $c_1>0$. When present, the residual factor $(\eta^2/2)^m$ is at least $\exp\{-c_2N\log(e/\eta)\}$ because $m$ is fixed and $N\ge1$. Combining these bounds gives $C\exp\{-cN\log(e/\eta)\}$ with constants depending only on $a,b,m,\alpha(U_0)$, uniformly when $\alpha(U_0)\in J$. If $\alpha(U_0)=0$ and $N=1$, then $F(U_1)=w_1=1$ almost surely, so the event has probability one and satisfies the claimed bound after taking $C\le1$. The resulting probability is the one in the Statement by [F1]. [A1, F1, F2, F3, F4, step 1.1, algebra, cases] ∎
