---
id: lem-hopf-lax-infima-localise
kind: lemma
title: Finiteness, superlinearity of the Lagrangian and localisation of Hopf--Lax near-minimisers
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-hopf-lax-operator
- def-legendre-transform-of-a-hamiltonian
- cor-convex-functions-on-open-convex-sets-are-continuous
- thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
- cor-euclidean-closed-balls-and-spheres-are-compact
- def-metric-uniform-continuity
- def-bounded-set
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 2, Theorem 2.13(i) and its proof, printed p. 62; attainment paragraph following (2.19), printed p. 68; Exercise 26, printed p. 67.
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $H:\mathbb R^n\to\mathbb R$ be convex and superlinear with Legendre
transform $L$, and let $u_0:\mathbb R^n\to\mathbb R$ be bounded and continuous.
Then: (1) $L$ is real-valued on $\mathbb R^n$, convex, continuous, and
superlinear; (2) for every $x\in\mathbb R^n$ and $t>0$ the infimum defining
$Q_tu_0(x)$ is attained, and for every $\delta>0$ there is a finite radius
$\rho=\rho(x,t,\delta,\|u_0\|_\infty)$ such that every near-minimiser $y$ with
$$u_0(y)+tL\Bigl(\frac{x-y}{t}\Bigr)\le Q_tu_0(x)+\delta$$
satisfies $|y-x|\le\rho$; (3) consequently $Q_tu_0$ is real-valued for every
$x$ and every $t\ge0$. No choice principle is used.

## Facts & Assumptions

**Given:** A convex superlinear $H:\mathbb R^n\to\mathbb R$ with $\lim_{|p|\to\infty}H(p)/|p|=+\infty$, its Legendre transform $L$, a bounded continuous $u_0:\mathbb R^n\to\mathbb R$, and the operators $Q_t$ of [[def-hopf-lax-operator]].

[F1] For $t>0$, $Q_tu_0(x)=\inf_{y\in\mathbb R^n}\{u_0(y)+tL((x-y)/t)\}$, and $Q_0u_0=u_0$ ([[def-hopf-lax-operator]]).

[F2] $L(v)=\sup_{p\in\mathbb R^n}(p\cdot v-H(p))$ for every $v\in\mathbb R^n$, the supremum being the least upper bound in $\overline{\mathbb R}$ of the set of real numbers $p\cdot v-H(p)$ ([[def-legendre-transform-of-a-hamiltonian]]).

[F3] Every convex function on an open convex set is continuous on it; in particular any finite convex function on $\mathbb R^n$ is continuous ([[cor-convex-functions-on-open-convex-sets-are-continuous]]).

[F4] A nonempty subset of $\mathbb R^n$ is compact exactly when it is closed and bounded, and every continuous real-valued function on such a set attains a maximum and a minimum ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

## Proof

**Proof technique:** coercivity of the Lagrangian confines near-minimisers to a compact ball, where continuity gives attainment.

1.1 Properties of $L$. Fix $v\in\mathbb R^n$. Superlinearity of $H$ gives $R>0$ with $H(p)\ge2|v|\,|p|$ for $|p|\ge R$, so $p\cdot v-H(p)\le-|v|\,|p|\le0$ there; on the closed ball $\overline B(0,R)$, which is closed and bounded and hence compact by [F4], the continuous function $p\mapsto p\cdot v-H(p)$ (continuity of $H$ is [F3]) attains a maximum $M_v<\infty$ by [F4]. Hence $p\cdot v-H(p)\le\max\{M_v,0\}<\infty$ for every $p$, while $L(v)\ge-H(0)$ because $p=0$ is admissible; by the least-upper-bound property of [F2], $L(v)$ is a real number. Convexity of $L$: for fixed $p$ the map $v\mapsto p\cdot v-H(p)$ is affine, and a pointwise supremum of affine functions is convex; $L$ is real-valued, so it is finite and convex on the open convex set $\mathbb R^n$ and therefore continuous by [F3]. Superlinearity: fix $a>0$; for $v\ne0$ the admissible test point $p:=a v/|v|$ gives $L(v)\ge a|v|-H(av/|v|)\ge a|v|-\max_{|q|\le a}H(q)$, where the maximum is finite by [F3] and [F4]; dividing by $|v|$ and letting $|v|\to\infty$ gives $\liminf_{|v|\to\infty}L(v)/|v|\ge a$, and since $a>0$ was arbitrary, $L(v)/|v|\to+\infty$. [F2, F3, F4, algebra]

2.1 Attainment and localisation. Fix $x$, $t>0$ and $\delta>0$, and put $\varphi(y):=u_0(y)+tL((x-y)/t)$, so that $Q_tu_0(x)=\inf\varphi$ by [F1]. The competitor $y=x$ gives $Q_tu_0(x)\le\varphi(x)=u_0(x)+tL(0)\le\|u_0\|_\infty+tL(0)=:A<\infty$, where $L(0)\in\mathbb R$. Also every term is at least $\inf u_0-tH(0)>-\infty$ by [F2], so $Q_tu_0(x)\in\mathbb R$. Let $y$ satisfy $\varphi(y)\le Q_tu_0(x)+\delta$; then $$tL\Bigl(\frac{x-y}{t}\Bigr)\le A+\delta-\inf u_0\le 2\|u_0\|_\infty+tL(0)+\delta=:C.$$ Superlinearity of $L$ from step 1.1 gives $R>0$ such that $L(w)>C/t$ whenever $|w|\ge R$. If $|x-y|/t\ge R$, then $tL((x-y)/t)>C$, contradicting the preceding bound. Hence $|y-x|<tR$, so every $\delta$-near-minimiser lies in the closed ball $\overline B(x,\rho)$ with $\rho:=tR<\infty$; the radius depends only on $t,\delta,\|u_0\|_\infty$ and the fixed $H$ (and may harmlessly be viewed as a function of $x$ as in the statement).
For attainment, let $S:=\{y\in\mathbb R^n:\varphi(y)\le Q_tu_0(x)+1\}$. By the definition of the finite infimum, $S$ is nonempty. It is closed by continuity of $\varphi$ and bounded by the localisation just proved with $\delta=1$, so [F4] makes it compact. The continuous function $\varphi$ attains a minimum on $S$ at some $y_*$. This minimum equals the global infimum: it is at least $Q_tu_0(x)$, and for every $0<\varepsilon<1$ the infimum property gives $y$ with $\varphi(y)<Q_tu_0(x)+\varepsilon$, which lies in $S$, so the minimum is at most $Q_tu_0(x)+\varepsilon$. Thus $\varphi(y_*)=Q_tu_0(x)$ and the infimum is attained, without selecting a sequence. [step 1.1, F1, F2, F3, F4, algebra]

3.1 Real-valuedness of $Q_tu_0$. For $t>0$ each term satisfies $u_0(y)+tL((x-y)/t)\ge\inf_{\mathbb R^n}u_0-tH(0)>-\infty$ by the estimate $L\ge-H(0)$ of step 1.1, and the value at $y=x$ is finite; hence $Q_tu_0(x)\in\mathbb R$ by [F1]. For $t=0$ this is $Q_0u_0=u_0$, real-valued by hypothesis. [step 1.1, step 2.1, F1]

4.1 Conclusion. Part (1) is step 1.1, part (2) is step 2.1, and part (3) is step 3.1. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **Dependence of the radius.** The radius produced depends on $x$, $t$, $\delta$ and $\|u_0\|_\infty$ only through the quantifier-free bounds of step 2.1; it is uniform in $x$ on compact $x$-sets because the estimates are translation invariant. No compactness of the ambient space and no subsequence selection is used, hence no choice principle.
