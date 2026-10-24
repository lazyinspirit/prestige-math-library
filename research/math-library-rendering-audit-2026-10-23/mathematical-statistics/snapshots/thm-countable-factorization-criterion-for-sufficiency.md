---
id: thm-countable-factorization-criterion-for-sufficiency
kind: theorem
title: "Countable factorization criterion for sufficiency"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-sufficient-statistic
  - def-measure-kernel-and-probability-kernel
  - def-standard-borel-space
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
proof_strategy: direct
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html"
    - title: "Noah Fithian, Stat 210a Reader: Completeness, Ancillarity, and Basu’s Theorem"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/completeness.html"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Statement

Let $\mathcal X$ be a nonempty countable set with its full $\sigma$-field, let $\Theta\ne\varnothing$, let $T:\mathcal X\to\mathcal Y$ be a statistic into a standard Borel space, and write $p_\theta(x)=P_\theta(\{x\})$. Then $T$ is sufficient if and only if there are nonnegative functions $h:\mathcal X\to[0,\infty)$ and Borel $g_\theta:\mathcal Y\to[0,\infty)$ such that

$$p_\theta(x)=g_\theta(Tx)h(x)\quad(\theta\in\Theta,\ x\in\mathcal X).$$

The pointwise convention is $g_\theta(t)=0$ whenever $M(t)=0$, where $M(t)=\sup_{\theta}P_\theta(T=t)$ on the countable image $T(\mathcal X)$; outside that image set $g_\theta=0$.

## Facts & Assumptions

**Given:** the countable experiment, the statistic $T$, and the displayed factorization or a common kernel, according to the implication being proved.

[F1] [[def-sufficient-statistic]]: sufficiency means one probability kernel $K$ satisfying the conditional-law identity for every model law.

[F2] [[def-measure-kernel-and-probability-kernel]]: for each target event, a probability kernel is measurable in its conditioning argument and is a probability measure in its event argument.

[F3] [[def-standard-borel-space]]: singletons in a standard Borel space are Borel, and countable subsets are Borel.

## Proof

1.1 Suppose $T$ is sufficient and fix a common kernel $K$ from [F1]. For $t\in T(\mathcal X)$ set $m_\theta(t)=P_\theta(T=t)$ and $M(t)=\sup_\theta m_\theta(t)$. The image is countable by countability of $\mathcal X$, hence Borel by [F3]; every function on this image extended by zero is Borel. Define $h(x)=M(Tx)K(Tx,\{x\})$ and define $g_\theta(t)=m_\theta(t)/M(t)$ when $M(t)>0$, and zero when $M(t)=0$. Then $g_\theta$ is Borel and nonnegative. [F1, F2, F3, given, construct]

2.1 If $M(Tx)>0$, choose $\theta_0$ with $m_{\theta_0}(Tx)>0$. The conditional identity in [F1] gives $K(Tx,T^{-1}\{Tx\})=1$ and $p_\theta(x)=m_\theta(Tx)K(Tx,\{x\})$ for every $\theta$; if $m_\theta(Tx)=0$, both sides vanish by the same identity. Thus $p_\theta(x)=g_\theta(Tx)h(x)$. If $M(Tx)=0$, every law gives that fiber probability zero, so $p_\theta(x)=h(x)=g_\theta(Tx)=0$. This proves the forward implication pointwise. [F1, step 1.1, given, algebra]

2.2 Conversely suppose the factorization holds. For each $t\in T(\mathcal X)$ let $F_t=T^{-1}\{t\}$ and $H(t)=\sum_{x\in F_t}h(x)$. If some $m_\theta(t)>0$, then $g_\theta(t)>0$ and $0<H(t)=m_\theta(t)/g_\theta(t)<\infty$, since the sum of the probabilities on the fiber is at most one. In that case put $K(t,\{x\})=h(x)/H(t)$ on $F_t$ and zero off $F_t$. If all $m_\theta(t)=0$, choose the first point of $F_t$ in a fixed enumeration and let $K(t,\cdot)$ be its point mass. For $t\notin T(\mathcal X)$ choose one fixed $x_0\in\mathcal X$ and set $K(t,\cdot)=\delta_{x_0}$. The countable image and enumeration make every coordinate $t\mapsto K(t,\{x\})$ Borel. For each $A\subseteq\mathcal X$, $K(t,A)=\sum_{x\in A}K(t,\{x\})$ is a countable sum of Borel functions, so it is Borel; the point-mass assignments are countably additive probability measures. [F2, F3, given, choose, construct, step 1.1]

3.1 On an active fiber, for every $A\subseteq\mathcal X$, $P_\theta(A\cap F_t)=g_\theta(t)\sum_{x\in A\cap F_t}h(x)=m_\theta(t)K(t,A)$. On an inactive fiber both sides are zero. Summing over the countably many $t\in C\cap T(\mathcal X)$ gives the conditional-law identity for every Borel $C\subseteq\mathcal Y$. Thus [F1] holds and $T$ is sufficient. [F1, step 2.2, given, algebra] ∎
