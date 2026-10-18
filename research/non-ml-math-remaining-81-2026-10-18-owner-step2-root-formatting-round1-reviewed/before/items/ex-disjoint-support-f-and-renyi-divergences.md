---
id: ex-disjoint-support-f-and-renyi-divergences
kind: example
title: Disjoint supports and singular divergence values
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-finite-probability-vector
  - def-finite-f-divergence
  - def-finite-kullback-leibler-divergence
  - def-finite-renyi-divergence
  - def-abs-value
  - lem-of-abs-value
  - lem-of-triangle-inequality
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §§7.1 and 7.12"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Tim van Erven and Peter Harremoës, Rényi Divergence and Kullback-Leibler Divergence, §II-A"
      url: "https://arxiv.org/pdf/1206.2459"
---

## Example

Let $\mathcal X=\{a,b\}$, $P=(1,0)$, and $Q=(0,1)$. The two laws have
disjoint supports.

## Facts & Assumptions

**Given:** The displayed $P,Q$, the total-variation generator
$f(t)=\frac12|t-1|$, and the KL and Rényi conventions.

[F1] [[def-finite-probability-vector]]: coordinates may be zero, and
$\operatorname{supp}P=\{x:p_x>0\}$.

[F2] [[def-finite-f-divergence]]: the generator must be finite and convex on
$(0,\infty)$ and satisfy $f(1)=0$; a coordinate with $q_x>0=p_x$
contributes $q_xf(0)$, while one with $p_x>0=q_x$ contributes
$p_xf_\infty$.

[F3] [[def-finite-kullback-leibler-divergence]]: any coordinate with
$p_x>0=q_x$ makes $D(P\|Q)=+\infty$; zero $P$-mass contributes zero.

[F4] [[def-finite-renyi-divergence]]: below order one a $p_x>0=q_x$
coordinate contributes zero to the affinity; above order one it makes the
affinity infinite.

[F5] [[def-abs-value]] and [[lem-of-abs-value]]: absolute value is real-valued,
$|c|=c$ for $c\ge0$, and $|cz|=|c||z|$.

[F6] [[lem-of-triangle-inequality]]: $|u+v|\le|u|+|v|$.

[F7] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: a
function is convex when it lies below each two-point chord.

## Verification

**Given:** $P=(1,0)$ and $Q=(0,1)$ on $\{a,b\}$.

1.1 Put $f(t)=\frac12|t-1|$ for $t>0$. It is finite-valued and $f(1)=0$.
For $x,y>0$ and $s\in[0,1]$, $(1-s)x+sy>0$, so [F5] and [F6] give
$$f((1-s)x+sy)=\frac12|(1-s)(x-1)+s(y-1)|\le(1-s)f(x)+sf(y).$$
Thus [F7] proves that $f$ is convex, so it is an admissible generator in
[F2]. [F2, F5, F6, F7, algebra]

1.2 For $0<t<1$, $f(t)=\frac12(1-t)$, so $f(0)=\lim_{t\downarrow0}f(t)=1/2$.
For $t>1$, $f(t)/t=\frac12(1-1/t)$, so
$f_\infty=\lim_{t\to\infty}f(t)/t=1/2$. The coordinate $a$ contributes
$p_af_\infty=1/2$ by [F2], and coordinate $b$ contributes
$q_bf(0)=1/2$. Thus $D_f(P\|Q)=1$. [F1, F2, step 1.1, algebra]

1.3 Since $p_a=1>0=q_a$, [F3] gives $D(P\|Q)=+\infty$. This records the singular direction; $D(Q\|P)$ is also infinite by the same support calculation with $a,b$ exchanged. [F3, algebra]

2.1 If $0<\alpha<1$, the only coordinate with $q_x>0$ is $b$, where $p_b=0$, so $S_\alpha(P,Q)=0$ and $D_\alpha(P\|Q)=+\infty$ by [F4] and the definition. If $\alpha>1$, coordinate $a$ gives infinite affinity by [F4]. At $\alpha=1$, KL is infinite by step 1.3. [F3, F4, step 1.3, algebra] ∎
