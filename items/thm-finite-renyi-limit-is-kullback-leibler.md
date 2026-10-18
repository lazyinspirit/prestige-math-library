---
id: thm-finite-renyi-limit-is-kullback-leibler
kind: theorem
title: The finite Rényi divergence limit is KL
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-finite-probability-vector
  - def-finite-kullback-leibler-divergence
  - def-finite-renyi-divergence
  - def-natural-logarithm
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-logarithm-derivative-and-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Tim van Erven and Peter Harremoës, Rényi Divergence and Kullback-Leibler Divergence, §II-C, Theorem 5 and proof"
      url: "https://arxiv.org/pdf/1206.2459"
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §7.12"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
---

## Statement

For probability vectors $P,Q$ on a finite nonempty alphabet,
$$\lim_{\alpha\to1}D_\alpha(P\|Q)=D(P\|Q)$$
as a two-sided extended-real limit.

## Facts & Assumptions

**Given:** $P,Q$ as in the Statement.

[F1] [[def-finite-probability-vector]]: $P,Q$ have nonnegative coordinates summing to one, and $P\ll Q$ means $p_x>0$ only where $q_x>0$.

[F2] [[def-finite-kullback-leibler-divergence]]: $D(P\|Q)$ uses $p_x\log(p_x/q_x)$ on positive $p_x$, and equals $+\infty$ if $P\not\ll Q$.

[F3] [[def-finite-renyi-divergence]]: for $\alpha\ne1$ the affinity is $S_\alpha(P,Q)=\sum_{q_x>0}p_x^\alpha q_x^{1-\alpha}$, with the specified singular-support conventions.

[F4] [[def-real-power]] and [[thm-real-power-continuity-and-derivatives]]: for fixed $r>0$, $h\mapsto r^h$ is differentiable with derivative $r^h\log r$.

[F5] [[thm-algebra-of-derivatives]]: derivatives commute with finite sums.

[F6] [[thm-chain-rule]] and [[thm-logarithm-derivative-and-integral]]: the derivative of $\log S(h)$ at $S(h)=1$ is $S'(h)$.

## Proof

1.1 Suppose $P\ll Q$. On the finite set $\operatorname{supp}P$, every $p_x,q_x$ is positive. Put $r_x=p_x/q_x$ and define $S(h):=\sum_{p_x>0}p_xr_x^h$ for every real $h$. Then $S(h)>0$, $S(0)=1$, and $S(h)=S_{1+h}(P,Q)$ for $0<|h|<1$ by [F3]. By [F4] and [F5], $S'(0)=\sum_{p_x>0}p_x\log r_x=D(P\|Q)$. The chain rule [F6] gives $(\log S)'(0)=D(P\|Q)$. Since $\log S(0)=0$, the definition of this derivative proves the two-sided limit. [F1, F2, F3, F4, F5, F6, given, construct, algebra]

1.2 Suppose $P\not\ll Q$. Let $s:=\sum_{x:q_x>0}p_x<1$. For $0<\alpha<1$, the finite sum in [F3] tends to $s$ as $\alpha\uparrow1$, because each term with $q_x>0$ tends to $p_x$. If $s=0$, that sum is identically zero and $D_\alpha=+\infty$. If $s>0$, then $\log S_\alpha\to\log s<0$ while $\alpha-1\to0$ through negative values, so $D_\alpha\to+\infty$ from below order one. [F1, F3, given, algebra]

2.1 For every $\alpha>1$, the positive $P$-mass at a zero $Q$-coordinate makes $S_\alpha=+\infty$, hence $D_\alpha=+\infty$ by [F3]. Also $D(P\|Q)=+\infty$ by [F2]. The left and right limits therefore both equal the stated extended value. [F2, F3, step 1.2, algebra] ∎
