---
id: cor-hopf-lax-is-a-contraction-in-the-supremum-norm
kind: corollary
title: The Hopf--Lax operator is a contraction in the supremum norm
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-hopf-lax-operator
- def-legendre-transform-of-a-hamiltonian
- cor-convex-functions-on-open-convex-sets-are-continuous
- thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
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
    locator: Chapter 2 Section 5.4, Theorem 2.23 and formula (2.19), printed pp. 67--68. The contraction estimate is the direct termwise-infimum consequence proved here.
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $H:\mathbb R^n\to\mathbb R$ be convex and superlinear with Legendre transform
$L$, and let $u_0,v_0:\mathbb R^n\to\mathbb R$ be bounded. Then for every $t\ge0$
and every $x\in\mathbb R^n$
$$\bigl|Q_tu_0(x)-Q_tv_0(x)\bigr|\le\sup_{\mathbb R^n}|u_0-v_0|,$$
and consequently $\sup_{\mathbb R^n}|Q_tu_0-Q_tv_0|\le\|u_0-v_0\|_\infty$; both
$Q_tu_0$ and $Q_tv_0$ are real-valued (see the proof for the explicit
finiteness argument). No uniform continuity of the data is needed for this
particular estimate, and no choice principle is used.

## Facts & Assumptions

**Given:** A convex superlinear $H:\mathbb R^n\to\mathbb R$, its Legendre transform $L(v)=\sup_p(p\cdot v-H(p))$, bounded data $u_0,v_0:\mathbb R^n\to\mathbb R$, the operators $Q_t$ of [[def-hopf-lax-operator]], and $c:=\sup_{\mathbb R^n}|u_0-v_0|\in[0,\infty)$.

[F1] For $t>0$ and $x\in\mathbb R^n$, $Q_tu_0(x)=\inf_{y\in\mathbb R^n}\{u_0(y)+tL((x-y)/t)\}$ and $Q_tv_0(x)=\inf_{y\in\mathbb R^n}\{v_0(y)+tL((x-y)/t)\}$, with infima computed in $\mathbb R\cup\{+\infty\}$; for $t=0$, $Q_0u_0=u_0$ and $Q_0v_0=v_0$ ([[def-hopf-lax-operator]]).

[F2] $L(v)=\sup_{p\in\mathbb R^n}(p\cdot v-H(p))$ for every $v$, so $L(v)\ge-H(0)$ and $L(v)$ is the least upper bound of $\{p\cdot v-H(p):p\in\mathbb R^n\}$ ([[def-legendre-transform-of-a-hamiltonian]]).

[F3] Every convex function on an open convex set is continuous; in particular $H$ is continuous on $\mathbb R^n$ ([[cor-convex-functions-on-open-convex-sets-are-continuous]]).

[F4] A nonempty subset of $\mathbb R^n$ is compact if and only if it is closed and bounded, and every continuous real-valued function on a nonempty compact subset attains a maximum and a minimum there ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

## Proof

**Proof technique:** compare the two infima termwise, then record the finiteness of the Lagrangian values.

1.1 The Lagrangian values and Hopf--Lax values are real. Fix $v\in\mathbb R^n$. The lower bound $L(v)\ge-H(0)$ is [F2]. For the upper bound, superlinearity of $H$ gives $R>0$ with $H(p)\ge2|v|\,|p|$ whenever $|p|\ge R$; then $p\cdot v-H(p)\le|v|\,|p|-2|v|\,|p|\le0$ for such $p$. On the closed ball $\overline B(0,R)$, which is nonempty, closed and bounded and hence compact by [F4], the continuous function $p\mapsto p\cdot v-H(p)$ (continuity of $H$ is [F3]) attains a maximum $M_v<\infty$ by [F4]. Therefore $p\cdot v-H(p)\le\max\{M_v,0\}<\infty$ for every $p$, so the least upper bound $L(v)$ of [F2] is real. For $t>0$, every Hopf--Lax term is bounded below by $\inf u_0-tH(0)$, and the competitor $y=x$ gives the finite upper bound $Q_tu_0(x)\le u_0(x)+tL(0)$; hence $Q_tu_0(x)\in\mathbb R$, and likewise for $v_0$. [F1, F2, F3, F4, algebra]

2.1 One-sided comparison for $t>0$. Fix $x$ and $t>0$, and write $a(y):=u_0(y)+tL((x-y)/t)$ and $b(y):=v_0(y)+tL((x-y)/t)$. By step 1.1 and [F2], $b$ is real-valued, bounded below by $\inf v_0-tH(0)$, and has a finite value at $y=x$, so $m:=\inf_y b(y)=Q_tv_0(x)$ is real. Since $u_0(y)\le v_0(y)+c$, we have $a(y)\le b(y)+c$ for every $y$. For each $\varepsilon>0$, the infimum property gives a $y$ with $b(y)<m+\varepsilon$, and then $Q_tu_0(x)=\inf_y a(y)\le a(y)\le b(y)+c<m+c+\varepsilon$. Letting $\varepsilon\downarrow0$ gives $Q_tu_0(x)\le Q_tv_0(x)+c$. [F1, F2, step 1.1, algebra]

3.1 Conclusion. Fix $t>0$ and $x$. Applying step 2.1 to $(u_0,v_0)$ and to $(v_0,u_0)$, whose value of $c$ is unchanged, gives both one-sided inequalities; the Hopf--Lax values are real by step 1.1, so $|Q_tu_0(x)-Q_tv_0(x)|\le c$. For $t=0$ this is $|u_0(x)-v_0(x)|\le c$ by [F1]. Taking the supremum over $x$ gives $\sup|Q_tu_0-Q_tv_0|\le c=\|u_0-v_0\|_\infty$. [step 1.1, step 2.1, F1] ∎

## Remarks

- **Hypotheses actually used.** Only convexity, superlinearity, boundedness of the data and the algebraic form of the infimum enter; uniform continuity and the localisation lemma are not needed for this estimate. The argument also shows $L$ is real-valued under superlinearity, a fact used independently in [[lem-hopf-lax-infima-localise]].
- **Sharpness.** The constant $1$ is optimal: for $t>0$ constant data are preserved by $Q_t$ up to the same constant, so the operator is nonexpansive and no smaller universal constant can hold.
