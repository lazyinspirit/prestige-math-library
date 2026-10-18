---
id: lem-na-jensen-maximum-principle-semiconvex
kind: lemma
title: Jensen maximum principle for locally semiconvex functions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: ["def-axiom-of-choice", "thm-convex-functions-on-open-convex-sets-are-locally-lipschitz", "thm-lipschitz-images-of-null-sets-in-rn-are-null", "thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume", "lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure", "thm-euclidean-semicontinuous-extreme-value-theorem"]
justified_by: []
aliases: []
proof_strategy: direct
axiom_base: Assume the Axiom of Choice; its exact uses are identified in the proof and inherited supplier contracts.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Crandall, Ishii and Lions, User's guide to viscosity solutions of second order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "Sections 2–3 and Appendix A, printed pp. 9–18 and 56–63."
---

## Statement

Assume the Axiom of Choice. Let $f$ be finite and locally semiconvex near $0\in\mathbb R^m$, $m\ge1$: on some ball, $f(x)+\lambda|x|^2/2$ is convex for a finite $\lambda\ge0$. Suppose $0$ is a strict local maximum of $f$. For every sufficiently small $r>0$ and every $\delta>0$, the set of points $x\in B_r(0)$ where $f(x)+q\cdot x$ has a local maximum for some $|q|\le\delta$ contains a compact subset of positive Lebesgue outer measure. Consequently, given any Lebesgue null set $N$, such a maximum can be chosen with $x\notin N$, $|x|<r$, and $|q|\le\delta$.

## Facts & Assumptions

**Given:** The function, strict maximum, and parameters in the Statement; assume [[def-axiom-of-choice]].

[F1] Finite convex functions on open convex sets are locally Lipschitz ([[thm-convex-functions-on-open-convex-sets-are-locally-lipschitz]]).

[F2] A Lipschitz map $\mathbb R^m\to\mathbb R^m$ sends cube-cover null sets to null sets ([[thm-lipschitz-images-of-null-sets-in-rn-are-null]]). Cube-cover nullity agrees with zero Lebesgue outer measure ([[lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure]]). Outer measure is monotone, and a nonempty open ball has positive outer measure because it contains a positive-volume half-open box ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]]).

[F3] A continuous function on a compact Euclidean ball attains its maximum ([[thm-euclidean-semicontinuous-extreme-value-theorem]]).

## Proof

1.1 Shrink to a ball $\overline B_R\subseteq U$ on which $g(x)=f(x)+\lambda|x|^2/2$ is convex and $f(0)>f(x)$ for $0<|x|\le R$. By [F1], $f$ is continuous. Given $0<r<R/4$, the compact annulus $r\le|x|\le R$ has a strictly positive gap $c=f(0)-\max f$. Fix $0<\eta\le\delta$ with $\eta R<c/2$. For every $|q|\le\eta$, all global maximizers of $f(x)+q\cdot x$ on $\overline B_R$ lie in $B_r$, since their value at zero is $f(0)$ and the annulus values are at most $f(0)-c+\eta R$. Let $K$ be the set of these maximizers as $q$ varies over $\overline B_\eta$. The maximizing pairs form a closed subset of the compact product $\overline B_R\times\overline B_\eta$, so $K$ is compact and lies in $B_r$. [F1, F3, given, choose]

1.2 At a maximizing pair $(x,q)$ the affine upper support gives $f(z)\le f(x)-q\cdot(z-x)$ on $\overline B_R$. Put $v=-q+\lambda x$. Then $g(x+h)\le g(x)+v\cdot h+\lambda|h|^2/2$. Convexity also implies $g(z)\ge g(x)+v\cdot(z-x)$: for $h=z-x$, apply convexity to $x-th,x,z$ to get $g(z)-g(x)\ge(g(x)-g(x-th))/t\ge v\cdot h-\lambda t|h|^2/2$, and let $t\downarrow0$. Consequently $0\le g(x+h)-g(x)-v\cdot h\le\lambda|h|^2/2$ locally. Thus $f$ is differentiable at $x$, $p_x=Df(x)=-q$, and for all $z\in\overline B_R$,
$$f(x)+p_x\cdot(z-x)-\tfrac\lambda2|z-x|^2\le f(z)\le f(x)+p_x\cdot(z-x).$$
In particular the slope attached to each $x\in K$ is unique. [step 1.1, algebra]

1.3 The map $x\mapsto p_x$ is $2\lambda$-Lipschitz on $K$. For distinct $x,y\in K$, set $d=y-x$, take any $h$ with $y+h\in B_R$, and use the lower bound at $x$ and upper bound at $y$, together with $f(y)\le f(x)+p_x\cdot d$, to obtain $(p_x-p_y)\cdot h\le\lambda|d+h|^2/2$. If $p_x\ne p_y$, take $h=|d|(p_x-p_y)/|p_x-p_y|$; it is admissible because $|y+h|<3r<R$. Then $|p_x-p_y||d|\le2\lambda|d|^2$. The case of equal slopes is immediate. [step 1.2, algebra]

2.1 For completeness this map on $K$ extends to a Lipschitz map on all of $\mathbb R^m$: for each coordinate define $P_j(z)=\inf_{x\in K}(p_x^j+2\lambda|z-x|)$. Compactness makes this finite, the triangle inequality makes it $2\lambda$-Lipschitz, and the Lipschitz inequality of step 1.3 makes $P_j(x)=p_x^j$ on $K$. Hence $P=(P_1,\ldots,P_m)$ is $2\lambda\sqrt m$-Lipschitz. Every $|q|\le\eta$ has a maximizer in $K$ with $P(x)=-q$, so $P(K)\supseteq\overline B_\eta$. If $K$ had zero outer measure, [F2] would make $P(K)$ null, contradicting positive outer measure of $B_\eta$. Thus $K$ has positive outer measure. (When $\lambda=0$ the same argument would make $P$ constant and contradict the slope ball; hence a strict maximum cannot occur in that case.) [step 1.1, step 1.3, F2, algebra]

2.2 A null set cannot contain $K$ by monotonicity, so some $x\in K\setminus N$ has its associated maximizing slope $q$, with $|x|<r$ and $|q|\le\eta\le\delta$. This proves both conclusions. The AC assumption supplies the choice assumptions of the outer-measure suppliers; this proof uses no area formula or differentiability theorem. [step 2.1, F2, given] ∎
