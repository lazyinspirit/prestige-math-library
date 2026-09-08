---
id: def-relative-normed-convexity-and-separation
kind: definition
title: Convex sets and continuous real-hyperplane separation in a normed space
status: draft
origin: pipeline
deps: [rem-real-and-complex-normed-space-convention, def-dual-space-of-a-normed-space, def-metric-topology]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, §§1.1–1.2 and §1.3 evaluation paragraph
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Theorems 4.13–4.20 and §5.1 (2018 university-hosted copy)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
pipeline_run: phase-2-wave-1
---

## Definition

Let $X$ be a normed space over $\mathbb K\in\{\mathbb R,\mathbb C\}$ with the metric and scalar convention of [[rem-real-and-complex-normed-space-convention]]. A subset $C\subseteq X$ is **convex** when
$$x,y\in C,\quad 0\le t\le1\quad\Longrightarrow\quad (1-t)x+ty\in C,$$
where $t$ is real, also when $\mathbb K=\mathbb C$. The empty set and every singleton are convex: the former has no pair of points to test, and $(1-t)x+tx=x$ for the latter. At $t=0,1$ the convex combination is one of its endpoints.

For a nonzero $f\in X^*$ (the bounded scalar-linear dual of [[def-dual-space-of-a-normed-space]]) put $u=\operatorname{Re}f$, with $u=f$ over $\mathbb R$. A **continuous real affine hyperplane** is a set $\{x:u(x)=a\}$ for $a\in\mathbb R$. For subsets $A,B\subseteq X$, this hyperplane gives:

- **weak separation** if $u(x)\le a\le u(y)$ for all $x\in A,y\in B$;
- **open-side strict separation** in the indicated orientation if $u(x)<a\le u(y)$ for all such $x,y$;
- **uniform strict separation** if there is $\varepsilon>0$ with $u(x)\le a-\varepsilon<a+\varepsilon\le u(y)$ for all such $x,y$.

Only real numbers are ordered in these formulas. The last condition requires one positive margin that works for all pairs, rather than merely pointwise strict inequalities.

Here $u$ is a nonzero bounded real-linear functional. Indeed, if $f(w)\ne0$ in the complex case, put $b=\overline{f(w)}/|f(w)|$. Then $u(bw)=\operatorname{Re}(bf(w))=|f(w)|>0$; over the real field, $u=f\ne0$. Normalizing a nonzero vector $v$ in the dual-norm definition gives $|f(v)|\le\|f\|\|v\|$, also true at zero. Hence $|u(x)-u(y)|\le\|f\|\|x-y\|$ and $\|f\|>0$. If $u(x)\ne a$, every $y$ with $\|y-x\|<|u(x)-a|/(2\|f\|)$ still has $u(y)\ne a$. Thus the complement of the level set is open by [[def-metric-topology]], so the level set is closed. If $u(v)\ne0$, the point $av/u(v)$ is in the level set, and the set is its translate of $\ker u$; every $x$ decomposes as $x-u(x)v/u(v)+u(x)v/u(v)$ with the first term in $\ker u$. Thus it is an affine hyperplane of the underlying real space.

## Source notes

Brezis §1.2 definitions, pp.4–5; Teschl Theorems 5.2–5.3, pp.138–139.
