---
id: def-scaled-symmetric-compact-kernel-family
kind: definition
title: "Scaled symmetric compactly supported kernel family"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-euclidean-inner-product, def-metric-ball, def-support-and-compactly-supported-riemann-integral-in-rn, thm-continuous-functions-on-compact-jordan-sets-are-integrable]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_use: "No choice principle is used in this definition."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Volker Springel, Smoothed Particle Hydrodynamics in Astrophysics, Annual Review of Astronomy and Astrophysics 48 (2010), author full text"
      url: "https://arxiv.org/html/1109.2219"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Numerical Methods for Partial Differential Equations, Lecture 25: Particle Methods (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf"
---

## Definition

Fix an integer $d\ge1$. An **admissible smoothing kernel** is a radial function $W\in C_c^2(\mathbb R^d,[0,\infty))$, supported in the closed Euclidean ball $\overline B(0,R)$ of some radius $R>0$ ([[def-metric-ball]]), with $\int_{\mathbb R^d}W(z)\,dz=1$. Here radial means $W(z)=w(|z|)$ for some function $w:[0,\infty)\to[0,\infty)$, and $C_c^2$ means twice continuously differentiable with compact support. All vector norms are the Euclidean norm from [[def-euclidean-inner-product]], and $\|D^2W\|_\infty$ uses the induced operator norm. Throughout this pair, $L^\infty$ norms are suprema of Euclidean norms, and norms of multilinear derivatives are the induced operator norms. Compactly supported integrals use [[def-support-and-compactly-supported-riemann-integral-in-rn]], where $\operatorname{supp}f$ is the closure of the set on which $f$ is nonzero.

For $\varepsilon>0$ define the scaled kernel $W_\varepsilon(z)=\varepsilon^{-d}W(z/\varepsilon)$. Write $M_0=\|W\|_\infty$, $M_1=\|\nabla W\|_\infty$, $M_2=\|D^2W\|_\infty$, $m_2=\int |z|^2W(z)\,dz$, and $m_3=\int |z|^3|\nabla W(z)|\,dz$. The norm functions and moment integrands are continuous with compact support. They are bounded and Riemann integrable on a bounding Jordan box by [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]], so these constants are finite.

For continuous $f:\mathbb R^d\to\mathbb R$, define the full-space smoother and its kernel-gradient operator by
$$S_\varepsilon f(x)=\int_{\mathbb R^d}f(x-z)W_\varepsilon(z)\,dz,\qquad D_\varepsilon f(x)=\int_{\mathbb R^d}f(y)\nabla W_\varepsilon(x-y)\,dy.$$
For each fixed $x$, both scalar integrands and every component of the vector integrand are continuous and compactly supported, hence Riemann integrable on a bounding Jordan box by [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]. Thus the displayed integrals exist as compactly supported Riemann integrals; the vector integral defining $D_\varepsilon f$ is taken componentwise.

This page fixes $\varepsilon$ in the finite-particle system. Limits $\varepsilon\to0$ are used only in the stated kernel-bias and joint-refinement results.
