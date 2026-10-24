---
id: thm-finite-renyi-data-processing
kind: theorem
title: Finite data processing for Rényi divergence
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-finite-probability-vector
  - def-finite-stochastic-kernel
  - def-finite-f-divergence
  - def-finite-renyi-divergence
  - thm-finite-f-divergence-data-processing
  - lem-finite-renyi-generators-are-convex
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §§7.1–7.2 and §7.12"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Tim van Erven and Peter Harremoës, Rényi Divergence and Kullback-Leibler Divergence, §§II-A, II-B, III-A"
      url: "https://arxiv.org/pdf/1206.2459"
---

## Statement

Let $P,Q$ be probability vectors on a finite nonempty alphabet $\mathcal X$
and let $K$ be a stochastic kernel from $\mathcal X$ to a finite nonempty
alphabet $\mathcal Y$. For every $\alpha\in(0,\infty)\setminus\{1\}$,
$$D_\alpha(PK\|QK)\le D_\alpha(P\|Q),$$
with Rényi divergence as defined in [[def-finite-renyi-divergence]].

## Facts & Assumptions

**Given:** $P,Q,K$ and $\alpha$ as in the Statement.

[F1] [[def-finite-renyi-divergence]]: for $\alpha\ne1$,
$D_\alpha(P\|Q)=\log S_\alpha(P,Q)/(\alpha-1)$; a positive $P$-mass at a
zero $Q$-coordinate makes $S_\alpha=+\infty$ when $\alpha>1$, while for
$0<\alpha<1$ it contributes zero.

[F2] [[def-finite-f-divergence]]: a convex generator $f$ defines the
closed-perspective sum, with singular term $f_\infty\sum_{q_x=0}p_x$.

[F3] [[def-finite-stochastic-kernel]]: $PK$ and $QK$ are the output laws
under the same row-stochastic kernel.

[F4] [[thm-finite-f-divergence-data-processing]]: $D_f(PK\|QK)\le
D_f(P\|Q)$ for every convex generator with its stated boundary convention.

[F5] [[lem-finite-renyi-generators-are-convex]]: for $\alpha>1$,
$t^\alpha-1$ is convex with recession value $+\infty$; for
$0<\alpha<1$, $1-t^\alpha$ is convex with recession value $0$.

## Proof

1.1 Suppose $\alpha>1$. If $P\not\ll Q$, [F1] gives $D_\alpha(P\|Q)=+\infty$, so the claimed inequality holds. If $P\ll Q$, then $PK\ll QK$: whenever $(QK)_y=0$, nonnegativity of the summands gives $q_xK(y\mid x)=0$ for every $x$, and $p_x>0$ implies $q_x>0$ and hence $K(y\mid x)=0$. For $f(t)=t^\alpha-1$, convexity holds, $f_\infty=+\infty$ by [F5], and direct substitution into [F2] gives $D_f(P\|Q)=S_\alpha(P,Q)-1$ and the same identity for $PK,QK$. [F1, F2, F3, F5, given, algebra]

1.2 Suppose $0<\alpha<1$ and take $g(t)=1-t^\alpha$. By [F5] it is convex, $g(1)=0$, $g(0)=1$, and $g_\infty=0$. Substitution into [F2] gives $D_g(P\|Q)=1-S_\alpha(P,Q)$, including when $P$ has mass outside $\operatorname{supp}Q$; likewise $D_g(PK\|QK)=1-S_\alpha(PK,QK)$. [F1, F2, F3, F5, given, algebra]

2.1 By [F4], $S_\alpha(PK,QK)-1\le S_\alpha(P,Q)-1$. The logarithm is increasing and $\alpha-1>0$, so dividing the logarithms by $\alpha-1$ preserves the inequality and proves the result for $\alpha>1$. [F1, F4, step 1.1, algebra]

3.1 By [F4], $S_\alpha(PK,QK)\ge S_\alpha(P,Q)$. If the input affinity is zero, [F1] gives $D_\alpha(P\|Q)=+\infty$ and the conclusion follows. Otherwise both affinities are positive; applying the increasing logarithm and then dividing by $\alpha-1<0$ reverses the inequality. This proves the claim for $0<\alpha<1$. [F1, F4, step 1.2, algebra] ∎
