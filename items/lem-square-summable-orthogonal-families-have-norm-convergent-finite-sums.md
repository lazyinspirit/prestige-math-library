---
id: lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums
kind: lemma
title: Square-summable orthogonal families have norm-convergent finite sums
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-square-summable-family-on-an-arbitrary-index-set, lem-pythagorean-theorem-and-finite-orthogonal-sums, thm-cauchy-schwarz-in-an-inner-product-space, def-hilbert-space, def-countable-choice, cor-archimedean-reciprocal, lem-of-square-monotone, lem-reverse-triangle-inequality-in-a-normed-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, p.49, Theorem 2.2"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Bruce Blackadar, Ilijas Farah and Asaf Karagila, Hilbert spaces without the Countable Axiom of Choice, §§3–4.1"
      url: "https://eprints.whiterose.ac.uk/216587/1/Hilbert%20spaces%20without%20the.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$(x_i)_{i\in I}$ be an orthogonal family in a real or complex Hilbert space $H$
whose square sum is finite,

$$S:=\sum_{i\in I}\|x_i\|^2<+\infty$$

in the finite-subset-supremum convention
([[def-square-summable-family-on-an-arbitrary-index-set]]), and for finite
$F\subseteq I$ put $s_F:=\sum_{i\in F}x_i$.

1. The finite-subset net $(s_F)_{F\in\operatorname{Fin}(I)}$ converges in $H$;
   its limit $s$ satisfies
   $\|s\|^2=\sum_{i\in I}\|x_i\|^2=S$.
2. In particular, if $(e_i)_{i\in I}$ is an orthonormal family in $H$
   ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]])
   and $a=(a_i)_{i\in I}\in\ell^2(I,\mathbb F)$, then the finite-subset net
   $\sum_{i\in F}a_ie_i$ converges to a limit $s$ with $\|s\|^2=\sum_{i\in I}|a_i|^2$,
   and $\langle s,e_j\rangle=a_j$ for every $j\in I$.

**The hypothesis is exactly $\mathrm{AC}_\omega$.** It is spent once, in
selecting one finite tail-control set for each natural number; no enumeration of
$I$ and no maximal orthonormal family is used.

## Facts & Assumptions

[A1] For pairwise orthogonal vectors $z_1,\dots,z_m$, $\|\sum_jz_j\|^2=\sum_j\|z_j\|^2$; in particular the identity applies to sums indexed by finite subsets and to differences of nested finite sums ([[lem-pythagorean-theorem-and-finite-orthogonal-sums]]).

[A2] $\sum_{i\in I}\|x_i\|^2$ is the supremum of the finite subsums; since $S<+\infty$ and $S=\sum_{i\in F}\|x_i\|^2+\sum_{i\in I\setminus F}\|x_i\|^2$ for every finite $F$, and since for every real $\varepsilon>0$ some finite $F$ has finite subsum $>S-\varepsilon$, for every real $\varepsilon>0$ there is a finite $F$ with $\sum_{i\in I\setminus F}\|x_i\|^2<\varepsilon$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[A3] For every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$; and squaring is monotone on the nonnegatives, so $0\le u\le v$ implies $u^2\le v^2$ and, for $u,v\ge0$, $u<v$ implies $u^2<v^2$ ([[cor-archimedean-reciprocal]], [[lem-of-square-monotone]]).

[A4] A Hilbert space is complete for the induced norm: every Cauchy sequence converges ([[def-hilbert-space]]).

[A5] A convergent net of scalars has at most one limit, and $|\langle u,v\rangle|\le\|u\|\|v\|$, so for fixed $v$ the scalar net $\langle z_F,v\rangle$ converges to $\langle z,v\rangle$ whenever $z_F\to z$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A6] $\bigl|\|u\|-\|v\|\bigr|\le\|u-v\|$, so the norm is continuous along convergent nets ([[lem-reverse-triangle-inequality-in-a-normed-space]]).

[A7] Countable Choice selects one element from each of countably many nonempty sets ([[def-countable-choice]]).

[A8] In an orthonormal family, $\langle e_i,e_i\rangle=1$, so $\|a_ie_i\|=|a_i|$ and the family $(a_ie_i)_{i\in I}$ is orthogonal with $\sum_{i\in I}\|a_ie_i\|^2=\sum_{i\in I}|a_i|^2$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice; an orthogonal family $(x_i)_{i\in I}$ in the Hilbert space $H$ with $S=\sum_{i\in I}\|x_i\|^2<+\infty$; and $s_F=\sum_{i\in F}x_i$ for finite $F$.

1.1 For every finite $F\subseteq I$ Pythagoras gives $\|s_F\|^2=\sum_{i\in F}\|x_i\|^2$, and then $\|s_F\|^2\le S$ because a finite subsum is at most the supremum $S$. [A1, A2]

1.2 For finite $F\subseteq G\subseteq I$, the difference $s_G-s_F=\sum_{i\in G\setminus F}x_i$ is a sum of pairwise orthogonal vectors, so $\|s_G-s_F\|^2=\sum_{i\in G\setminus F}\|x_i\|^2$, a value at most $\sum_{i\in I\setminus F}\|x_i\|^2$. [A1, A2]

1.3 The net $t_F:=\sum_{i\in F}\|x_i\|^2$ is nondecreasing with respect to inclusion and has supremum $S$, so for every real $\varepsilon>0$ there is a finite $F_0$ with $S-t_F<\varepsilon$ for every finite $F\supseteq F_0$. [A2, algebra]

1.4 For each natural $n\ge1$ the set of finite $F$ with $\sum_{i\in I\setminus F}\|x_i\|^2<1/n$ is nonempty by [A2], so Countable Choice selects one such finite set $F_n$ for every $n\ge1$; replacing $F_n$ by $F_1\cup\dots\cup F_n$ gives finite sets with $F_1\subseteq F_2\subseteq\cdots$ and $\sum_{i\in I\setminus F_n}\|x_i\|^2<1/n$ still, since the tail of a larger set is smaller. [A2, A7, algebra]

2.1 For $m\ge n$ the estimate of step 1.2 gives $\|s_{F_m}-s_{F_n}\|^2\le\sum_{i\in I\setminus F_n}\|x_i\|^2<1/n$, so $(s_{F_n})_{n\ge1}$ is a Cauchy sequence: for $\varepsilon>0$ choose $n$ with $1/n<\varepsilon^2$, then $\|s_{F_m}-s_{F_n}\|<\varepsilon$ for all $m\ge n$ by monotonicity of squaring on nonnegative reals. Hence $(s_{F_n})$ converges to some $s\in H$ by completeness. [step 1.2, step 1.4, A3, A4, algebra]

3.1 The limit satisfies $\|s\|^2=S$: the splitting identity for the nonnegative family gives $t_{F_n}=S-\sum_{i\in I\setminus F_n}\|x_i\|^2$, and the subtracted tails are below $1/n$ and hence tend to $0$, so $t_{F_n}\to S$; by step 1.1, step 2.1 and continuity of the norm, $\|s\|^2=\lim_n\|s_{F_n}\|^2=\lim_nt_{F_n}=S$. [step 1.1, step 2.1, A2, A6, algebra]

3.2 The whole finite-subset net converges to $s$: given a real $\delta>0$, choose $n$ with $1/n<\delta^2/4$ and $\|s_{F_n}-s\|<\delta/2$, which is possible because $(s_{F_n})$ converges to $s$; then every finite $F\supseteq F_n$ satisfies $\|s_F-s_{F_n}\|^2\le\sum_{i\in I\setminus F_n}\|x_i\|^2<1/n<\delta^2/4$, hence $\|s_F-s\|\le\|s_F-s_{F_n}\|+\|s_{F_n}-s\|<\delta$. [step 1.2, step 1.4, step 2.1, A3, algebra]

4.1 For the orthonormal case let $x_i:=a_ie_i$; the family $(x_i)$ is orthogonal with $\|x_i\|=|a_i|$, and $\sum_{i\in I}\|x_i\|^2=\sum_{i\in I}|a_i|^2<+\infty$ because $a\in\ell^2(I,\mathbb F)$, so steps 3.2 and 3.1 give a limit $s$ of the net $\sum_{i\in F}a_ie_i$ with $\|s\|^2=\sum_{i\in I}|a_i|^2$; and for each fixed $j\in I$, $\langle s_F,e_j\rangle=a_j$ for every finite $F\ni j$, so the coefficients converge, $\langle s,e_j\rangle=\lim_F\langle s_F,e_j\rangle=a_j$, by continuity of the pairing in the first variable. [step 3.1, step 3.2, A5, A8] ∎
