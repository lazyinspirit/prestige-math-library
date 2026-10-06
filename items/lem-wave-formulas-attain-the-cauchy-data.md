---
id: lem-wave-formulas-attain-the-cauchy-data
kind: lemma
title: "The dimension formulas attain the Cauchy data"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
proof_strategy: direct
deps: [thm-kirchhoff-formula-for-the-three-dimensional-wave-equation, thm-poisson-formula-for-the-two-dimensional-wave-equation, thm-odd-dimensional-wave-formula-by-spherical-means, thm-even-dimensional-wave-formula-by-descent, def-spherical-mean-of-space-dependent-data, lem-spherical-means-of-smooth-data-are-smooth, lem-radial-derivative-expansion-of-the-epd-transform, thm-algebra-of-derivatives, cor-mean-value-theorem, def-countable-choice, lem-spherical-surface-integrals-project-onto-weighted-ball-integrals, thm-dominated-convergence, cor-euclidean-closed-balls-and-spheres-are-compact, thm-extreme-value-metric]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.2, printed pp. 175–176, (7.21)–(7.22) and Problems 7.10–7.11 (attainment at $r=0$)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.2, printed p. 283: the odd-in-$t$ symmetry and recovery of the data in three dimensions"
---


## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c>0$, $n\ge2$ and let $u$ be one of the functions constructed from data $u_0,u_1$ of the regularity required by the corresponding formula: Kirchhoff ($n=3$, [[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]]), Poisson ($n=2$, [[thm-poisson-formula-for-the-two-dimensional-wave-equation]]), the odd-dimensional formula ([[thm-odd-dimensional-wave-formula-by-spherical-means]]) or the even-dimensional formula ([[thm-even-dimensional-wave-formula-by-descent]]). Then, as $t\downarrow0$, for every $x$
$$u(x,t)\longrightarrow u_0(x),\qquad \partial_tu(x,t)\longrightarrow u_1(x),$$
and the extension $u(x,0):=u_0(x)$ is continuous on $\mathbb R^n\times[0,\infty)$.

## Facts & Assumptions

**Given:** Countable Choice, $c>0$, $n\ge2$, and one of the four representation formulas with its data classes.

[F1] For $j\ge1$ and every $\varphi\in C^{j+1}((0,\infty))$, $D_r^{j-1}(r^{2j-1}\varphi(r))=\sum_{i=0}^{j-1}\alpha_{j,i}r^{i+1}\varphi^{(i)}(r)$ with $\alpha_{j,0}=(2j-1)!!$ ([[lem-radial-derivative-expansion-of-the-epd-transform]]).

[F2] For $m\ge1$ and $h\in C^m(\mathbb R^n)$, the spherical mean $M_h$ is $C^m$ on $\mathbb R^n\times(0,\infty)$ with $\partial_r^iM_h$ obtained by differentiating $h$ under the sphere integral, and $r\mapsto M_h(x,r)$ is even ([[lem-spherical-means-of-smooth-data-are-smooth]]).

[F3] The odd- and even-dimensional formulas define $C^2$ solutions of $u_{tt}=c^2\Delta u$ on $\mathbb R^n\times(0,\infty)$ ([[thm-odd-dimensional-wave-formula-by-spherical-means]], [[thm-even-dimensional-wave-formula-by-descent]]); for $n=3$ the odd formula is Kirchhoff's expression and for $n=2$ the even formula is Poisson's expression ([[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]], [[thm-poisson-formula-for-the-two-dimensional-wave-equation]]).

[F4] Sums, products and quotients are differentiated by the usual rules ([[thm-algebra-of-derivatives]]).

## Proof

1.1 Differentiated finite expansion. Suppose $n=2k+1$ and put $h_f(x,t)=M_f(x,ct)$, using the signed-radius extension of [F2]. This is $C^{k+1}$ and even when $f\in C^{k+1}$, so $h_f(x,0)=f(x)$ and $\partial_th_f(x,0)=0$. By [F1], $T_f(x,t):=D_t^{k-1}(t^{2k-1}h_f(x,t))=\sum_{j=0}^{k-1}\alpha_{k,j}t^{j+1}\partial_t^jh_f(x,t)$, where $a:=\alpha_{k,0}=(2k-1)!!$. Differentiate this finite sum itself: $T_f'=\sum_j\alpha_{k,j}((j+1)t^j h_f^{(j)}+t^{j+1}h_f^{(j+1)})$ and $T_f''=\sum_j\alpha_{k,j}(j(j+1)t^{j-1}h_f^{(j)}+2(j+1)t^jh_f^{(j+1)}+t^{j+1}h_f^{(j+2)})$, with the first summand omitted for $j=0$. Every derivative used has order at most $k+1$. Continuity and $h_f'(x,0)=0$ give $T_f\to0$, $T_f'\to af(x)$ and $T_f''\to0$, uniformly for $x$ in compact sets. For $T_f''$, the only terms without a positive power of $t$ are constant multiples of $h_f'$, which vanish at zero. These formulas never differentiate an unspecified error term. [F1, F2, F4, algebra]

2.1 Odd-dimensional data. The odd formula is $u=a^{-1}(T_{u_0}'+T_{u_1})$ and $u_t=a^{-1}(T_{u_0}''+T_{u_1}')$. Step 1.1 applies to both data, since their classes are at least $C^{k+1}$. It follows that $u\to u_0$ and $u_t\to u_1$, locally uniformly in $x$. The even smooth signed-radius means in step 1.1 also show that $T_f$ and its first two derivatives extend continuously through zero. [F3, step 1.1, algebra]

3.1 Even-dimensional data by descent. For $n=2k$, extend the data cylindrically to $\mathbb R^{n+1}$. Their differentiability classes are exactly those of the odd formula in dimension $n+1=2k+1$. The construction in [[thm-even-dimensional-wave-formula-by-descent]] identifies the even solution with the restriction of that odd solution to the last coordinate zero. The limits of step 2.1 therefore apply without differentiating a singular ball weight. [F3, step 2.1]

4.1 The locally uniform displacement limit and continuity of $u_0$ give joint continuity of the extension $u(x,0)=u_0(x)$. The velocity limit holds as stated. The cases $n=3$ and $n=2$ are Kirchhoff and Poisson by [F3]. [F3, step 2.1, step 3.1] ∎
