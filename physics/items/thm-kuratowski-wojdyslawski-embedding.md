---
id: thm-kuratowski-wojdyslawski-embedding
kind: theorem
title: "Kuratowski-Wojdyslawski embedding theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-kuratowski-distance-map-is-an-isometry, thm-uniform-limit-theorem,
       lem-bounded-remetrisation, def-equivalent-metrics, def-metrizable-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "James Dugundji, Topology"
      url: "https://dokumen.pub/topology-12th-printingnbsped-9780697068897.html"
pipeline_run: frontier-29
---

## Statement

Let $(M,d)$ be a bounded nonempty metric space. Then there is a Banach space
$B$ and an isometric embedding $\iota:M\to B$ such that $\iota[M]$ is closed in
its algebraic convex hull.

Concretely, one may take $B=C_b(M)$ with the supremum norm and
$\iota=K_o$ for any basepoint $o\in M$.

Consequently, every metrizable space embeds homeomorphically as a closed subset
of a convex subset of a Banach space.

## Facts & Assumptions

**Given:** A bounded nonempty metric space $(M,d)$, a basepoint $o\in M$, and the based Kuratowski map $K_o:M\to C_b(M)$.

[L1] $K_o$ is an isometric embedding ([[thm-kuratowski-distance-map-is-an-isometry]]).

[L2] Uniform limits of continuous functions are continuous ([[thm-uniform-limit-theorem]]).

[L3] The metric $d_b:=d/(1+d)$ is bounded and topologically equivalent to $d$ ([[lem-bounded-remetrisation]], [[def-equivalent-metrics]]).

[L4] A metrizable space is one whose topology is induced by some metric ([[def-metrizable-space]]).

## Proof

**Proof technique:** direct.

1.1 The target $C_b(M)$ is Banach for the supremum norm. Indeed, let $(f_n)$ be a Cauchy sequence in the supremum norm. Then each scalar sequence $(f_n(z))_n$ is Cauchy, so define $f(z):=\lim_n f_n(z)$. Fix $N$ with $\|f_n-f_m\|_\infty<1$ for $n,m\ge N$; letting $m\to\infty$ gives $|f(z)|\le \|f_N\|_\infty+1$ for all $z$, so $f$ is bounded. Given $\varepsilon>0$, fix $N$ with $\|f_n-f_m\|_\infty<\varepsilon$ for $n,m\ge N$; letting $m\to\infty$ yields $\|f_n-f\|_\infty\le\varepsilon$ for $n\ge N$, so $f_n\to f$ uniformly. By [L2], $f$ is continuous. Hence every Cauchy sequence converges in $C_b(M)$. [L2, choose]

2.1 By [L1], $K_o$ is an isometric embedding of $M$ into the Banach space $C_b(M)$. [L1, step 1.1]

3.1 Let $$f=\sum_{j=1}^m \lambda_j K_o(x_j)$$ be a point of the algebraic convex hull of $K_o[M]$, so each $\lambda_j\ge0$ and $\sum_j\lambda_j=1$. Put $$\Delta:=\sum_{i=1}^m\sum_{j=1}^m \lambda_i\lambda_j d(x_i,x_j).$$ If $\Delta=0$, then every pair with $\lambda_i\lambda_j>0$ satisfies $d(x_i,x_j)=0$, hence all support points coincide and $f=K_o(x_j)$ lies in the image. [step 2.1, algebra]

4.1 Assume $\Delta>0$, and let $y\in M$. Evaluating at $y$ gives $$f(y)-K_o(y)(y)=\sum_{j=1}^m\lambda_j d(x_j,y).$$ For each $i,j$, the triangle inequality yields $d(x_i,x_j)\le d(x_i,y)+d(y,x_j)$. Multiplying by $\lambda_i\lambda_j$ and summing over $i,j$ gives $$\Delta\le 2\sum_{j=1}^m\lambda_j d(x_j,y)=2\bigl(f(y)-K_o(y)(y)\bigr).$$ Therefore $$\|f-K_o(y)\|_\infty\ge f(y)-K_o(y)(y)\ge \frac\Delta2>0.$$ Since this holds for every $y\in M$, the distance from $f$ to $K_o[M]$ is at least $\Delta/2$. So no such $f$ lies in the closure of $K_o[M]$. [step 3.1, algebra]

5.1 Steps 3.1 and 4.1 show that every point of the algebraic convex hull that lies in the closure of $K_o[M]$ is already in $K_o[M]$. Thus $K_o[M]$ is closed in its algebraic convex hull. [step 3.1, step 4.1]

6.1 For the final claim, let $(X,\mathcal T)$ be metrizable. If $X=\varnothing$, the unique map $\varnothing\to\{0\}$ into any Banach space is a homeomorphic embedding, and its image is closed in its algebraic convex hull. Assume now that $X\ne\varnothing$. By [L4], choose a metric $d$ inducing $\mathcal T$. By [L3], the bounded metric $d_b=d/(1+d)$ induces the same topology. Applying steps 1.1 to 5.1 to $(X,d_b)$ gives an isometric embedding into a Banach space whose image is closed in its algebraic convex hull. Because $d$ and $d_b$ are topologically equivalent, that same map is a homeomorphic embedding for the original topology $\mathcal T$. [L3, L4, step 1.1, step 2.1, step 5.1, choose] ∎

## Remarks

- The closedness conclusion is relative to the algebraic convex hull. The proof above shows exactly why it need not be a statement about the whole Banach space.
