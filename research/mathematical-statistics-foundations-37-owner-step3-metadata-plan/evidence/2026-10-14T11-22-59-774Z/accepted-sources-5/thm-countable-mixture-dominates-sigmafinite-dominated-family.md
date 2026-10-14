---
id: thm-countable-mixture-dominates-sigmafinite-dominated-family
kind: theorem
title: "A countable mixture dominates a sigma-finite dominated family"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-axiom-of-choice
  - def-finite-sigma-finite-and-semifinite-measures
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - thm-monotone-convergence-for-the-integral
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
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

Assume AC. Let $(P_\theta)_{\theta\in\Theta}$ be a nonempty family of probability measures dominated by a $\sigma$-finite positive measure $\mu$ on $(\mathcal X,\mathcal A)$. There are a finite or countable sequence $(\theta_j)$ from $\Theta$ and weights $w_j>0$ summing to one such that $Q=\sum_jw_jP_{\theta_j}$ satisfies $P_\theta\ll Q$ for every $\theta$. Repetitions are permitted if $\Theta$ is finite.

## Facts & Assumptions

**Given:** AC, a nonempty dominated family, and a sigma-finite dominating measure.

[A1] [[def-axiom-of-choice]]: AC selects a finite-subfamily approximation to a supremum and countably many RN versions.

[F1] [[def-dominated-statistical-experiment]]: every $P_\theta$ is absolutely continuous with respect to the supplied sigma-finite $\mu$.

[F2] [[def-finite-sigma-finite-and-semifinite-measures]]: $\mu$ has a countable cover by measurable sets of finite measure.

[F3] [[def-likelihood-density]] and [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]: each $P_\theta\ll\lambda$ has a nonnegative density $p_\theta$ with $P_\theta(A)=\int_Ap_\theta d\lambda$.

[F4] [[thm-monotone-convergence-for-the-integral]]: increasing nonnegative functions, including indicators and partial sums of densities, pass to their integrals.

## Proof

1.1 Choose a countable measurable partition $(E_n)_{n\ge0}$ of $\mathcal X$ with $\mu(E_n)<\infty$ by disjointifying a sigma-finite cover [F2]. Put $c_n=2^{-(n+1)}/(1+\mu(E_n))$ and $\lambda(A)=\sum_{n\ge0}c_n\mu(A\cap E_n)$. For disjoint measurable $A_m$, countable additivity of $\mu$ and interchange of nonnegative double series give $\lambda(\bigcup_m A_m)=\sum_n c_n\sum_m\mu(A_m\cap E_n)=\sum_m\lambda(A_m)$; the interchange is valid because both sides are the supremum of the same finite subsums. Thus $\lambda$ is a measure. Also $\lambda(\mathcal X)\le\sum_{n\ge0}2^{-(n+1)}=1$. Since every $c_n>0$, $\lambda(A)=0$ iff every $\mu(A\cap E_n)=0$, iff $\mu(A)=0$. Thus $\lambda$ is finite and equivalent to $\mu$, so every $P_\theta\ll\lambda$. [A1, F1, F2, given, construct]

2.1 For each $\theta$, choose the RN density $p_\theta=dP_\theta/d\lambda$ from [F3], finite outside a $\lambda$-null set, and let $A_\theta=\{p_\theta>0\}$. Fix $\theta_*$; since $\int p_{\theta_*}\,d\lambda=1$, $\lambda(A_{\theta_*})>0$. Define $s=\sup_{F\subseteq\Theta,\,F\text{ finite}}\lambda(\bigcup_{\theta\in F}A_\theta)$, so $s>0$. By [A1], choose finite $F_n$ with union measure greater than $s-1/n$. For all sufficiently large $n$, these unions have positive measure, so the selected index set $\bigcup_nF_n$ is nonempty. Set $A=\bigcup_n\bigcup_{\theta\in F_n}A_\theta$. Finite unions from the selected sets have measure at most $s$, so [F4] applied to their indicators gives $\lambda(A)\le s$ by continuity from below; the approximations give $\lambda(A)\ge s$. Hence $\lambda(A)=s$. [A1, F3, F4, step 1.1, given, choose]

3.1 Fix $\theta$. If $\lambda(A_\theta\setminus A)>0$, the increasing finite unions $(\bigcup_{n\le N}\bigcup_{\phi\in F_n}A_\phi)\cup A_\theta$ converge to $A\cup A_\theta$, whose measure is greater than $s$. [F4] applied to their indicators shows that some finite union then exceeds $s$, contradicting its definition. Therefore $p_\theta=0$ $\lambda$-almost everywhere on $A^c$. [F4, step 2.1, given, contradiction]

4.1 Enumerate the nonempty countable collection of selected indices $\bigcup_nF_n$ as $(\theta_j)$, allowing repetitions if needed, and choose positive weights summing to one. The mixture $Q=\sum_jw_jP_{\theta_j}$ has density $q=\sum_jw_jp_{\theta_j}$ by [F4], so $q>0$ exactly on $A$ up to a $\lambda$-null set. If $Q(C)=0$, then $\int_Cq\,d\lambda=0$. For each $m\ge1$, $\lambda(C\cap A\cap\{q\ge1/m\})/m\le\int_Cq\,d\lambda=0$; these sets cover $C\cap A$ up to the null set where $q$ is not positive on $A$. Hence $\lambda(C\cap A)=0$. Also every $p_\theta$ vanishes on $A^c$ by step 3.1, so $P_\theta(C)=\int_Cp_\theta d\lambda=0$. Since $\theta$ was arbitrary, $P_\theta\ll Q$ for all $\theta$. [A1, F3, F4, step 2.1, step 3.1, given, construct] ∎
