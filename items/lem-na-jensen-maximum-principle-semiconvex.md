---
id: lem-na-jensen-maximum-principle-semiconvex
kind: lemma
title: Jensen maximum principle for locally semiconvex functions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    "def-axiom-of-choice",
    "def-convex-and-strictly-convex-functions-on-euclidean-sets",
    "def-metric-ball",
    "def-null-and-content-zero-in-rn",
    "thm-convex-functions-on-open-convex-sets-are-locally-lipschitz",
    "thm-lipschitz-images-of-null-sets-in-rn-are-null",
    "thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume",
    "lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure",
    "thm-euclidean-semicontinuous-extreme-value-theorem"
  ]
justified_by: []
aliases: []
proof_strategy: direct
axiom_base: Assume the Axiom of Choice; its exact uses are identified in the
  proof and inherited supplier contracts.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Crandall, Ishii and Lions, User's guide to viscosity solutions of second
        order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "Sections 2–3 and Appendix A, printed pp. 9–18 and 56–63."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice. Let $f$ be finite and locally semiconvex near $0\in\mathbb R^m$, $m\ge1$: on some Euclidean ball ([[def-metric-ball]]), $f(x)+\lambda|x|^2/2$ is convex ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]) for a finite $\lambda\ge0$. Suppose $0$ is a strict local maximum of $f$. For every sufficiently small $r>0$ and every $\delta>0$, the set of points $x\in B_r(0)$ where $f(x)+q\cdot x$ has a local maximum for some $|q|\le\delta$ contains a compact subset of positive Lebesgue outer measure. Consequently, given any Lebesgue null set $N$, such a maximum can be chosen with $x\notin N$, $|x|<r$, and $|q|\le\delta$.

## Facts & Assumptions

**Given:** The function, strict maximum, and parameters in the Statement; assume [[def-axiom-of-choice]].

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); this supplies the Countable Choice hypotheses of the cited outer-measure suppliers.

[F1] Finite convex functions on open convex sets are locally Lipschitz ([[thm-convex-functions-on-open-convex-sets-are-locally-lipschitz]]).

[F2] A Lipschitz map $\mathbb R^m\to\mathbb R^m$ sends cube-cover null sets ([[def-null-and-content-zero-in-rn]]) to null sets ([[thm-lipschitz-images-of-null-sets-in-rn-are-null]]). Cube-cover nullity agrees with zero Lebesgue outer measure ([[lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure]]). Outer measure is monotone, and a nonempty open ball has positive outer measure because it contains a positive-volume half-open box ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]]).

[F3] A continuous function on a compact Euclidean ball attains its maximum ([[thm-euclidean-semicontinuous-extreme-value-theorem]]).

## Proof

1.1 Shrink to a ball $\overline B_R\subseteq U$ on which $g(x)=f(x)+\lambda|x|^2/2$ is convex and $f(0)>f(x)$ for $0<|x|\le R$. By [F1], $f$ is continuous. Given $0<r<R/4$, the compact annulus $r\le|x|\le R$ has a strictly positive gap $c=f(0)-\max f$. Fix $0<\eta\le\delta$ with $\eta R<c/2$. For every $|q|\le\eta$, all global maximizers of $f(x)+q\cdot x$ on $\overline B_R$ lie in $B_r$, since their value at zero is $f(0)$ and annulus values are at most $f(0)-c+\eta R$. Their maximizing pairs form a closed subset of the compact product $\overline B_R\times\overline B_\eta$, so their set $K$ is compact and lies in $B_r$. [F1, F3, given, choose]

2.1 At a maximizing pair $(x,q)$, $f(z)\le f(x)-q\cdot(z-x)$ on $\overline B_R$. Put $v=-q+\lambda x$. Expanding the quadratic gives $g(x+h)\le g(x)+v\cdot h+\lambda|h|^2/2$. Convexity gives the reverse support $g(z)\ge g(x)+v\cdot(z-x)$: for $h=z-x$ and small $t>0$, convexity on the segment from $x-th$ to $z$ yields $g(z)-g(x)\ge(g(x)-g(x-th))/t\ge v\cdot h-\lambda t|h|^2/2$, and let $t\downarrow0$. Thus $f$ is differentiable at $x$, $p_x=Df(x)=-q$, and $f(x)+p_x\cdot(z-x)-\lambda|z-x|^2/2\le f(z)\le f(x)+p_x\cdot(z-x)$ for $z\in\overline B_R$; in particular the slope at each $x\in K$ is unique. [step 1.1, algebra]

3.1 For distinct $x,y\in K$, set $d=y-x$. The support bounds in step 2.1 and $f(y)\le f(x)+p_x\cdot d$ give $(p_x-p_y)\cdot h\le\lambda|d+h|^2/2$ whenever $y+h\in B_R$. If $p_x\ne p_y$, take $h=|d|(p_x-p_y)/|p_x-p_y|$, which is admissible since $|y+h|<3r<R$. Then $|p_x-p_y||d|\le2\lambda|d|^2$. Equal slopes need no estimate, so $x\mapsto p_x$ is $2\lambda$-Lipschitz on $K$. [step 2.1, algebra]

4.1 For each coordinate set $P_j(z)=\inf_{x\in K}(p_x^j+2\lambda|z-x|)$. Compactness makes this finite; the triangle inequality makes it $2\lambda$-Lipschitz, and step 3.1 gives $P_j(x)=p_x^j$ on $K$. Hence $P=(P_1,\ldots,P_m)$ is $2\lambda\sqrt m$-Lipschitz and, since each $|q|\le\eta$ has a maximizer in $K$ with $P(x)=-q$, $P(K)\supseteq\overline B_\eta$. If $K$ were null, [F2] would make $P(K)$ null, contradicting the positive outer measure of $B_\eta$; thus $K$ has positive outer measure. If $\lambda=0$, this same construction makes $P$ constant while its image contains $\overline B_\eta$, a contradiction, so no strict-maximum case is missed. Countable Choice required by [F2] follows from [A1]. [A1, step 1.1, step 3.1, F2, algebra]

5.1 Since $K$ has positive outer measure, it cannot be contained in the given null set $N$. Choose $x\in K\setminus N$ and its maximizing slope $q$; then $|x|<r$ and $|q|\le\eta\le\delta$. This proves both conclusions. [A1, step 4.1, F2, given] ∎
