---
id: lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone
kind: lemma
title: "Mean-zero L2 functions on a cube embed continuously into H1"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [lem-ltwo-atoms-have-uniform-hone-quasinorm, def-multidimensional-rectangle-and-volume, def-l-p-space-as-a-quotient-by-null-functions, def-real-hardy-space-by-a-radial-maximal-function, thm-polynomial-growth-functions-define-tempered-distributions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "the inequality $\\|g\\|_{H^1}\\le c|B|^{1/2}\\|g\\|_{L^2}$ used in the proof of Theorem 7.40(b), printed p. 47"
---

## Statement

Assume Countable Choice, and fix the admissible kernel $\varphi$ and auxiliary
order $\widetilde N$ of [[lem-ltwo-atoms-have-uniform-hone-quasinorm]]. There is
$C_{n,\widetilde N,\varphi}<\infty$ such that for every cube $Q$ and
every $f\in L^2(\mathbb R^n)$ with $\operatorname{supp}f\subseteq Q$ and
$\int_Qf=0$, the class of $f$ lies in $H^1(\mathbb R^n)$ and
$\|f\|_{H^1}\le C_{n,\widetilde N,\varphi}|Q|^{1/2}\|f\|_{L^2}$.

## Facts & Assumptions

**Given:** Countable Choice, the fixed $\varphi$ and $\widetilde N$, a cube $Q$ of finite positive volume $|Q|$ ([[def-multidimensional-rectangle-and-volume]]) and a function $f\in L^2(\mathbb R^n)$ with $\operatorname{supp}f\subseteq Q$ and $\int_Qf=0$.

[F1] The $H^1$ functional is $\|g\|_{H^1}=\|M^0_\varphi g\|_{L^1}$ for an admissible Schwartz function $\varphi$ with $\int\varphi\ne0$, defined for tempered distributions ([[def-real-hardy-space-by-a-radial-maximal-function]]), and every $L^2$ class has a representative defining a tempered distribution ([[thm-polynomial-growth-functions-define-tempered-distributions]]).

[F2] If $a$ vanishes off a cube $Q$, has $\int a=0$ and $\bigl(|Q|^{-1}\int_Q|a|^2\bigr)^{1/2}\le|Q|^{-1}$, then $\|a\|_{H^1}\le C_{n,\widetilde N,\varphi}$ with this constant independent of $Q$ and $a$ ([[lem-ltwo-atoms-have-uniform-hone-quasinorm]]).

[F3] For $\lambda\in\mathbb C$ and a tempered distribution $g$, $M^0_\varphi(\lambda g)=|\lambda|M^0_\varphi g$ pointwise, because $(g*\varphi_t)(y)=\langle g,\varphi_t(y-\cdot)\rangle$ is complex-linear in $g$; hence $\|\lambda g\|_{H^1}=|\lambda|\|g\|_{H^1}$ ([[def-real-hardy-space-by-a-radial-maximal-function]]).

[F4] The $L^2$ classes of [[def-l-p-space-as-a-quotient-by-null-functions]] are used, so all statements below are insensitive to changes on null sets.

## Proof

**Proof technique:** direct.

1.1 If $f=0$ almost everywhere, then $f$ is the zero distribution and $\|f\|_{H^1}=0\le C_{n,\widetilde N,\varphi}|Q|^{1/2}\|f\|_{L^2}=0$. [F1]

1.2 Assume $f\ne0$ in $L^2$, so $\|f\|_{L^2}>0$ because $Q$ has finite measure, and put $a:=f/\bigl(|Q|^{1/2}\|f\|_{L^2}\bigr)$. Then $a$ vanishes off $Q$ and $\int a=0$; moreover $|a|^2=|f|^2/\bigl(|Q|\,\|f\|_{L^2}^2\bigr)$, so $\int_Q|a|^2=|Q|^{-1}$ and $\bigl(|Q|^{-1}\int_Q|a|^2\bigr)^{1/2}=|Q|^{-1}$: the function $a$ is a $(1,2)$-atom. By [F2], $\|a\|_{H^1}\le C_{n,\widetilde N,\varphi}$. [F1, F2, F4]

2.1 Since $f=|Q|^{1/2}\|f\|_{L^2}\,a$, the homogeneity [F3] gives $\|f\|_{H^1}=|Q|^{1/2}\|f\|_{L^2}\|a\|_{H^1}\le C_{n,\widetilde N,\varphi}|Q|^{1/2}\|f\|_{L^2}$; together with the trivial case of step 1.1 this is the asserted estimate, and the class of $f$ lies in $H^1$ because $a$ does and multiplication by a scalar preserves the space. [step 1.1, step 1.2, F3] ∎
