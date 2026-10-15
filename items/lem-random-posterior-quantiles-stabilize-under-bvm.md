---
id: lem-random-posterior-quantiles-stabilize-under-bvm
kind: lemma
title: Posterior quantiles stabilize under scalar weak convergence
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - lem-measurable-posterior-quantile-and-cdf-bracketing
  - thm-continuity-from-above-for-measures
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §7.3.4, especially Theorem 7.3.23"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, §2.3"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
---

## Statement

Let $Q_n(y,\cdot)$ be data-indexed probability kernels on $\mathbb R$, let $Q$ be a fixed law with continuous CDF $F$, and suppose $\beta_{BL}(Q_n(y,\cdot),Q)\to0$ in probability. Fix $0<u<1$ and let $q=q_u(Q):=\inf\{r\in\mathbb Q:Q((-∞,r])\ge u\}$, using the canonical rational embedding. Assume $F$ is strictly increasing on some open interval containing $q$. Define $q_u(Q_n(y,\cdot))$ by the same convention. Then $q_u(Q_n)\to q$ in probability. The local strict-increase hypothesis permits CDFs, such as norms of nonnegative random elements, that are constant on part of $\mathbb R$.

## Facts & Assumptions

**Given:** The data-indexed kernels, fixed $Q$, and $u\in(0,1)$ in the Statement; $\beta_{BL}(Q_n,Q)=\sup\{|\int h\,dQ_n-\int h\,dQ|:\|h\|_\infty\le1,\operatorname{Lip}(h)\le1\}$.

[F1] [[lem-measurable-posterior-quantile-and-cdf-bracketing]]: the lower quantile is the real infimum of $\{r\in\mathbb Q:Q((-∞,r])\ge u\}$ and its CDF satisfies $Q((-∞,q))\le u\le Q((-∞,q])$.

[F2] [[thm-continuity-from-above-for-measures]]: probabilities of decreasing measurable sets with finite first measure converge to the probability of their intersection.

[A1] The limiting CDF is continuous on $\mathbb R$ and strictly increasing on an open interval containing $q_u(Q)$.

## Proof

1.1 Fix $x\in\mathbb R$ and $\eta>0$. Choose $0<\delta<\min(1,\eta)$. The piecewise-linear ramps that fall from $1$ to $0$ on $[x-\delta,x]$ and on $[x,x+\delta]$ bound $1_{(-\infty,x]}$ below and above. Multiplying each ramp by $\delta$ makes its sup norm and Lipschitz constant at most $1$. Comparing the lower and upper ramps under $Q_n$ with their integrals under $Q$ gives $|Q_n((-\infty,x])-F(x)|\le\delta^{-1}\beta_{BL}(Q_n,Q)+Q([x-\delta,x+\delta])$. By [A1], $Q(\{x\})=0$; [F2] then gives $Q([x-\delta,x+\delta])\to0$ as $\delta\downarrow0$. First choose $\delta$ small and then let $n\to\infty$; this proves $Q_n((-\infty,x])\to F(x)$ in probability. [A1, F2, given, algebra]

2.1 Write $q=q_u(Q)$ as in [F1]. Since [A1] makes $F$ continuous, the CDF bracket in [F1] gives $F(q)=u$. For every sufficiently small $\varepsilon>0$, strict increase near $q$ then gives $F(q-\varepsilon)<u<F(q+\varepsilon)$. Step 1.1 at these two points implies, with probability tending to one, $Q_n((-\infty,q-\varepsilon])<u<Q_n((-\infty,q+\varepsilon])$. By monotonicity, no rational at or below $q-\varepsilon$ is in the defining set for $q_u(Q_n)$, while every rational above $q+\varepsilon$ belongs to it. Its infimum therefore lies in $[q-\varepsilon,q+\varepsilon]$. Since arbitrarily small such $\varepsilon$ are available, the quantiles converge in probability. [A1, F1, step 1.1, algebra] ∎
