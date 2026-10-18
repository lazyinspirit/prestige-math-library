---
id: thm-completeness-of-full-exponential-family
kind: theorem
title: "A full exponential family is complete"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-complete-statistic
  - def-exponential-family
  - lem-uniqueness-of-a-multivariate-exponential-transform
  - def-axiom-of-choice
  - def-total-variation-of-a-signed-or-complex-measure
  - thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data
  - thm-nonnegative-measurable-functions-admit-increasing-simple-approximations
  - thm-monotone-convergence-for-the-integral
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

Assume AC and let $(P_\eta)_{\eta\in\Omega}$ be a full-rank exponential family as in [[def-exponential-family]], with $\Omega$ containing a nonempty open subset of $\mathbb R^k$. Then its canonical statistic $T$ is complete.

## Facts & Assumptions

**Given:** the carrier, statistic, base measure, an open parameter subset, and a measurable real $g$ such that $E_\eta|g(T)|<\infty$ and $E_\eta g(T)=0$ for every $\eta\in\Omega$.

[A1] [[def-axiom-of-choice]]: the transform-uniqueness lemma is used under its stated axiom branch.

[F1] [[def-exponential-family]]: the law has density $h e^{\eta\cdot T-A(\eta)}$, with finite positive normalizer on $\Omega$.

[F2] [[def-complete-statistic]]: to prove completeness it suffices to show the stated mean-zero function vanishes almost surely for every parameter.

[F3] [[lem-uniqueness-of-a-multivariate-exponential-transform]]: a finite signed measure with an exponential moment and zero Laplace transform on a real neighborhood is zero.

[F4] [[thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data]] and [[def-total-variation-of-a-signed-or-complex-measure]]: an integrable real density defines a finite signed measure with variation density $|g|$, and variation is characterized by countable partition sums.

[F5] [[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]] and [[thm-monotone-convergence-for-the-integral]]: nonnegative measurable functions have increasing simple approximations whose integrals converge to their integral.

## Proof

1.1 Choose $\eta_0$ in the open subset and $\epsilon>0$ so the closed cube $\eta_0+[-\epsilon,\epsilon]^k$ lies in $\Omega$. Define the finite signed measure $\rho(A)=\int_Ag(T(x))\,P_{\eta_0}(dx)$ by [F4], and set $\nu(B)=\rho(T^{-1}B)$ for Borel $B\subseteq\mathbb R^k$. Since $T$ is measurable, preimages preserve disjoint countable unions, so $\nu$ is a finite signed Borel measure. The preimages of a countable partition form a countable partition, giving $|\nu|\le T_\#|\rho|$ by [F4]. Hence $|\nu|(\mathbb R^k)\le E_{\eta_0}|g(T)|<\infty$. [F1, F4, given, construct]

2.1 Choose $0<\delta<\epsilon$. Since $e^{\delta\|s\|_1}\le\sum_{\sigma\in\{-1,1\}^k}e^{\delta\sigma\cdot s}$ and $|\nu|\le T_\#|\rho|$ by step 1.1, the weighted-integral bound follows first for nonnegative simple functions from that setwise domination and then for $e^{\delta\|s\|_1}$ by [F5]. For each sign vector, changing from $P_{\eta_0}$ to $P_{\eta_0+\delta\sigma}$ contributes the factor $Z(\eta_0+\delta\sigma)/Z(\eta_0)$, so $\int e^{\delta\|s\|_1}|\nu|(ds)\le\sum_\sigma \frac{Z(\eta_0+\delta\sigma)}{Z(\eta_0)}E_{\eta_0+\delta\sigma}|g(T)|<\infty$, the exponential moment required by [F3]. [F1, F3, F4, F5, step 1.1, given, algebra]

3.1 For every real $t$ with $\|t\|_\infty<\delta$, its Laplace transform is $\int e^{t\cdot s}\nu(ds)=\frac{Z(\eta_0+t)}{Z(\eta_0)}E_{\eta_0+t}g(T)=0$ by the mean-zero premise. The transform-uniqueness result [F3], under axiom branch [A1], gives $\nu=0$. [A1, F3, step 2.1, given, algebra]

4.1 For every Borel $B$, $0=\nu(B)=\rho(T^{-1}B)=\int_Bg(s)P_{\eta_0}^T(ds)$ by the definition of the pushforward measure and $\rho$. Taking $B=\{g>0\}$ and $B=\{g<0\}$ shows both positive and negative parts have zero integral, so $g(T)=0$ $P_{\eta_0}$-almost surely. Every family density is strictly positive on $\{h>0\}$, so all $P_\eta$ are equivalent to $P_{\eta_0}$ and the same vanishing holds for every $\eta$. By [F2], $T$ is complete. [F1, F2, step 3.1, given, algebra] ∎
