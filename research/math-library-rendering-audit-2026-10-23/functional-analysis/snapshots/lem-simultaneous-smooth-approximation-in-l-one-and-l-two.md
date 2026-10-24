---
id: lem-simultaneous-smooth-approximation-in-l-one-and-l-two
kind: lemma
title: Simultaneous L1 and L2 smooth approximation
deps: ["thm-dominated-convergence", "thm-l-one-approximate-identities-converge-in-l-p", "thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign", "thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset", "prop-mollifier-families-are-l-one-approximate-identities", "def-countable-choice", "lem-complex-translation-and-approximate-identity-interfaces", "lem-schwartz-cutoffs-from-the-standard-smooth-step"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Lemma 14.11 proof, p.383
---

## Statement

Assume countable choice and let $n\ge1$. For $f\in L^1(\mathbb R^n;\mathbb C)\cap L^2(\mathbb R^n;\mathbb C)$ there is one sequence $f_j\in C_c^\infty$ converging to $f$ in both norms.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and [[def-countable-choice]]. The real approximate-identity, smoothness, support and rescaling suppliers are [[thm-l-one-approximate-identities-converge-in-l-p]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset]], and [[prop-mollifier-families-are-l-one-approximate-identities]].

[F1] Dominated convergence holds ([[thm-dominated-convergence]]).

[F2] Under countable choice in dimension $n\ge1$, the complex interface gives convergence of mollifications in each finite-exponent norm, and smooth compact support for a compactly supported input ([[lem-complex-translation-and-approximate-identity-interfaces]]).

[F3] There is an explicit nonnegative smooth cutoff equal to one on the unit ball and supported in the radius-two ball ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

## Proof

**Proof technique:** direct.

1.1 Fix a finite measurable representative of $f$ and set $g_j=f\mathbf1_{\{|x|\le j,\ |f(x)|\le j\}}$, $j\ge1$. Then $g_j$ is bounded and compactly supported, and $|g_j-f|^p\le|f|^p$ tends pointwise to zero for $p=1,2$. [F1] therefore gives $\|g_j-f\|_p\to0$ in both norms. Let $\chi$ be [F3]'s cutoff and put $\rho=\chi/\int\chi$. Its integral is finite since it is bounded and supported in a finite-volume ball, and positive since it equals one on a ball containing a positive-volume box. Thus $\rho$ is a specified real smooth compactly supported kernel of mass one. [F1, F3, given]

2.1 For fixed $j$, [F2] gives $\rho_{1/k}*g_j\to g_j$ as $k\to\infty$ in both norms. Let $k_j$ be the least positive integer for which both errors are below $1/j$, and define $f_j=\rho_{1/k_j}*g_j$. The qualifying set is nonempty since both convergences hold, and the least-integer rule needs no further choice. [F2] makes $f_j$ smooth with compact support (contained in the radius $j+2/k_j$ ball). Finally $\|f_j-f\|_p\le1/j+\|g_j-f\|_p\to0$ for both $p=1,2$. The same sequence works, with countable choice inherited only from the Euclidean mollification interface. [step 1.1, F2, given] ∎
