---
id: "thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology"
kind: "theorem"
title: "Integration is an isomorphism on top compactly supported de Rham cohomology"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-compactly-supported-top-cohomology-propagates-across-overlapping-oriented-coordinate-balls","thm-integration-descends-to-compactly-supported-top-de-rham-cohomology","lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes","def-connected-space","def-compactly-supported-de-rham-cochain-complex-and-cohomology","lem-chart-bump-at-a-point-with-prescribed-support","def-the-standard-smooth-step-function","lem-compactness-of-a-subspace-is-ambient","thm-heine-borel-rn","thm-compactness-under-continuous-maps","thm-closed-subspace-of-a-compact-space-is-compact"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
landmark: true
proof_strategy: "direct"
---

## Statement

Let $M^n$ be a nonempty connected oriented smooth manifold without boundary. With the finite-localization integral, the map $\operatorname{Int}_M:H_c^n(M)\to\mathbb R$, $[\omega]\mapsto\int_M\omega$, is an isomorphism. More explicitly, a compactly supported top form has integral zero if and only if it is the derivative of a compactly supported $(n-1)$-form. For $n=0$ this means that the zero form has the zero negative-degree primitive. The theorem holds in ZF, without a choice axiom.

## Facts & Assumptions

[F1] [[lem-compactly-supported-top-cohomology-propagates-across-overlapping-oriented-coordinate-balls]] supplies normalized bump top forms, compact primitives for zero-integral forms supported in a ball, and equality of normalized ambient classes across an overlap.

[F2] [[thm-integration-descends-to-compactly-supported-top-de-rham-cohomology]] supplies the well-defined linear map and vanishing on compact exact forms.

[F3] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] gives the finite-localization integral using connected coordinate domains.

[F4] [[def-connected-space]] excludes two disjoint nonempty opens covering $M$.

[F5] [[def-compactly-supported-de-rham-cochain-complex-and-cohomology]] gives the compact-support quotient, its linear operations and zero negative degrees.

[F6] [[lem-chart-bump-at-a-point-with-prescribed-support]] gives a smooth function equal to one at a specified point and supported in any prescribed open neighborhood.

[F7] [[def-the-standard-smooth-step-function]] gives a smooth $s:\mathbb R\to[0,1]$ equal to zero on $(-\infty,0]$ and to one on $[1,\infty)$.

[F8] [[lem-compactness-of-a-subspace-is-ambient]] gives finite subcovers by ambient open sets. [[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]] and [[thm-closed-subspace-of-a-compact-space-is-compact]] give compactness of closed coordinate balls, their chart preimages, and closed subsets thereof.

## Proof

**Given:** A manifold as stated. A ball below means a coordinate ball as in [F1].

1.1 Choose one ball $U_0$ and one normalized compact bump $\nu_0$ in it, possible by nonemptiness and [F1]. Let $A$ be the union of all balls reachable from $U_0$ by a finite sequence of coordinate balls with consecutive nonempty overlaps, allowing a sequence of length zero. It is an open set containing $U_0$. If $x\notin A$, take any coordinate ball $V$ about $x$. If $V$ met $A$, it would meet a ball at the end of some finite chain; adjoining $V$ would put $V\subset A$, contradicting $x\notin A$. Thus $V\subset M\setminus A$, and the complement is open. By [F4] and $A\ne\varnothing$, $A=M$. This defines the set of all finite chains and proves their existence when needed, without choosing a chain at every point. [F1, F4, given]

1.2 Let $\omega\in\Omega_c^n(M)$ and put $K=\operatorname{supp}\omega$. For every $p\in K$, restrict a chart about $p$ to a coordinate ball $U$ whose closed coordinate ball lies inside the original chart. The latter closure is compact by [F8]. Apply [F6] inside $U$ and consider the set of all resulting pairs $(U,b)$ with $b(p)=1$ for some $p\in K$. Their opens $\{b>1/2\}$ cover $K$, so [F8] retains finitely many $b_1,\ldots,b_m$ supported in coordinate balls $U_1,\ldots,U_m$. Each support is compact: it is closed, lies in the corresponding compact closed coordinate ball, and [F8] applies. Put $B=\sum_i b_i$, $\theta=s(4B-1)$ using [F7], and define $\chi_i=\theta b_i/B$ where $B>0$ and zero where $B=0$. This is smooth because $\theta=0$ on the neighborhood $B\le1/4$ of the possible zero denominator. Each $\chi_i$ has compact support in $U_i$, and $\sum_i\chi_i=1$ wherever $B>1/2$, a neighborhood of $K$. Thus $\omega=\sum_{i=1}^m\omega_i$ with $\omega_i=\chi_i\omega$ compactly supported inside the ball $U_i$. If $K$ is empty, take the empty sum. All integrals below are the finite-localization integrals of [F3]. Set $c_i=\int_M\omega_i$. Choose one normalized bump $\nu_i$ inside each of these finitely many balls using [F1]. The form $\omega_i-c_i\nu_i$ has integral zero by [F2] and has compact support inside $U_i$ by [F5]. By [F1], it is $d\eta_i$ for an ambient compact primitive. Hence $[\omega_i]=c_i[\nu_i]$. [F1, F2, F3, F5, F6, F7, F8, given]

2.1 For each of the finitely many $U_i$, step 1.1 supplies a finite overlap chain from $U_0$ to $U_i$: choose a point in $U_i$, use its membership in $A$, and append $U_i$ to the chain containing that point. Choose normalized bumps in the finitely many intermediate balls by [F1]. Consecutive normalized classes agree by [F1], so transitivity along the finite chain gives $[\nu_i]=[\nu_0]$. This also holds for the zero-length chain. Consequently, using the actual finite sums from step 1.2, $$[\omega]=\sum_i[\omega_i]=\left(\sum_i c_i\right)[\nu_0]=\left(\int_M\omega\right)[\nu_0].$$ The last equality is linearity [F2]. Finite unions of the finite chains and of their finitely many compact primitives remain finite; thus the quotient equality can equivalently be witnessed by the corresponding finite sum of compact primitives under [F5]. [F1, F2, F5, step 1.1, step 1.2]

3.1 If $\int_M\omega=0$, step 2.1 gives $[\omega]=0$; the quotient definition [F5] means precisely $\omega=d\eta$ for a compactly supported $\eta$. Conversely, such a derivative has integral zero by [F2]. Thus the claimed iff and injectivity hold. For each real $a$, the compactly supported form $a\nu_0$ has integral $a$ by [F2]. This proves surjectivity, with explicit linear inverse $a\mapsto a[\nu_0]$; step 2.1 proves that this inverse is independent of the temporary chosen normalized bump. [F2, F5, step 1.1, step 2.1]

4.1 In dimension zero every singleton is open, so [F4] forces the nonempty connected manifold to be one point. Its integral is the orientation sign times the function value by [F2], hence is an isomorphism, and zero integral means the zero form, with zero negative-degree primitive by [F5]. At $n=1$ every primitive above is a compactly supported function as supplied by [F1], including at the ends of a coordinate interval. Empty support and zero coefficients contribute zero classes and can use zero primitives; nonempty $M$ is necessary since the empty manifold has zero cohomology and cannot map onto $\mathbb R$. All selections concern one base bump, one finite support cover, finitely many finite chains, and finitely many primitives for a given input. No countable partition, infinite family of primitives, path selections, or AC is used. [F1, F2, F4, F5, step 1.1, step 1.2, step 2.1, step 3.1] ∎
