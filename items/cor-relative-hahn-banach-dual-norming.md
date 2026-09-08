---
id: cor-relative-hahn-banach-dual-norming
kind: corollary
title: Relative dual norming, point separation, and recovery of the norm
status: draft
origin: pipeline
deps: [thm-relative-hahn-banach-norm-preserving-extension, lem-span-is-the-set-of-linear-combinations, def-metric-interior-closure-boundary, def-dual-space-of-a-normed-space]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, §§1.1–1.2 and §1.3 evaluation paragraph
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Theorems 4.13–4.20 and §5.1 (2018 university-hosted copy)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
pipeline_run: phase-2-wave-1
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Statement

Assume HB and let $X$ be a real or complex normed space. For each $x\ne0$ there is $f\in X^*$ with $\|f\|=1$ and $f(x)=\|x\|$, a positive real number also in the complex case. Hence $X^*$ separates distinct points, and
$$\|x\|=\max_{f\in X^*,\ \|f\|\le1}|f(x)|\qquad(x\in X).$$
The formula includes $x=0$ and the zero space. Moreover, if $H\subseteq X^*$ has norm-dense scalar-linear span and $h(x)=0$ for all $h\in H$, then $x=0$.

## Facts & Assumptions

[F1] Under HB every bounded scalar-linear functional on a linear subspace extends preserving its norm ([[thm-relative-hahn-banach-norm-preserving-extension]]).

[F2] A linear span consists exactly of finite linear combinations, including the empty combination zero ([[lem-span-is-the-set-of-linear-combinations]]).

[F3] Density means that the closure is the whole space; membership in the closure means that every positive-radius ball meets the set ([[def-metric-interior-closure-boundary]]).

[F4] The norm on $X^*$ is $\sup_{\|y\|\le1}|f(y)|$ ([[def-dual-space-of-a-normed-space]]).

## Proof

**Given:** HB, a real or complex normed space $X$, and, for the last assertion, $H\subseteq X^*$ with norm-dense linear span.

1.1 Fix $x\ne0$. The set $M=\mathbb Kx$ contains zero and is closed under addition and scalar multiplication, so is a linear subspace. The coefficient of $x$ is unique: $(a-b)x=0$ with $a\ne b$ would imply $x=0$ on multiplying by $(a-b)^{-1}$. Thus $g(ax)=a\|x\|$ is well-defined and scalar-linear. Moreover $|g(ax)|=|a|\|x\|=\|ax\|$ and $g(x/\|x\|)=1$, so $\|g\|=1$. [given, F4, algebra]

1.2 For the final assertion alone, suppose $h(x)=0$ for all $h\in H$ and the span of $H$ is norm dense. Every finite combination $g=\sum_{j<n}a_jh_j$ satisfies $g(x)=\sum_{j<n}a_jh_j(x)=0$, including $n=0$, so every element of the span vanishes at $x$. [given, F2, algebra]

2.1 Apply norm-preserving extension to this $M$ and $g$. Its hypotheses were checked in step 1.1, so it gives $f\in X^*$ with $\|f\|=1$ and $f(x)=g(x)=\|x\|$. This is an existence statement for the fixed $x$. [step 1.1, F1]

3.1 For $v\ne w$, apply step 2.1 to $x=v-w\ne0$. The resulting functional satisfies $f(v)-f(w)=f(v-w)=\|v-w\|>0$, hence separates these points. [step 2.1, algebra]

3.2 For any $h\in X^*$ and $x\ne0$, normalization gives $|h(x)|=\|x\||h(x/\|x\|)|\le\|h\|\|x\|$; for $x=0$ both sides vanish. Thus every unit-ball value is at most $\|x\|$. For nonzero $x$ step 2.1 attains this upper bound; for $x=0$ the zero functional has norm zero and attains value zero. This proves the maximum formula even if $X=\{0\}$. [step 2.1, F4, algebra]

4.1 Fix $f\in X^*$ and $\varepsilon>0$. By density a ball of radius $\varepsilon$ about $f$ meets the span, so there is $g$ in the span with $\|f-g\|<\varepsilon$. Thus $|f(x)|=|(f-g)(x)|\le\|f-g\|\|x\|\le\varepsilon\|x\|$. If $\|x\|>0$ and $|f(x)|>0$, taking $\varepsilon=|f(x)|/(2\|x\|)$ is impossible; if $\|x\|=0$, then $x=0$ already. Therefore all $f$ vanish at $x$, and the maximum formula gives $\|x\|=0$, hence $x=0$. [step 3.2, step 1.2, F3, algebra] ∎

## Source notes

Brezis Corollaries 1.3–1.4, pp.3–4; Teschl Corollary 4.16 and Theorem 4.20 proof, pp.114–116.

## Remarks

The maximum is over functionals for a fixed vector. It does not assert that each fixed functional attains its own norm on the unit ball, or that a simultaneous function $x\mapsto f_x$ has been selected.
