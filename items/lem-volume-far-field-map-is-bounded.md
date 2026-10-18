---
id: lem-volume-far-field-map-is-bounded
kind: lemma
title: The volume far-field map is bounded and is the uniform far-field limit
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-volume-integral-scattering-model, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, def-polar-surface-measure-on-the-unit-sphere, def-countable-choice, def-complex-exponential, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, cor-vector-valued-ftc-and-lipschitz-bound]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is assumed for the surface-measure convention; the pointwise far-field bounds use no further choice."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, Sommersemester 2015, §5.2.2"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "PDF p. 70, the far-field mapping; the volume-potential asymptotic below is derived locally."
    - title: "Maximilian Kreuzer, Quantum Theory: Lecture Notes, Chapter 8, §8.1.2"
      url: "https://hep.itp.tuwien.ac.at/~kreuzer/Quanten.15.07.09.pdf"
      locator: "PDF pp. 143–145, scattered-wave far-field amplitude convention."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $D,q,k$ be as in [[def-volume-integral-scattering-model]], with $0<|D|<\infty$, and put $R_0>\sup_{y\in D}|y|$. Then $\mathcal F_k:L^2(D;\mathbb C)\to C(S^2;\mathbb C)$ is linear and
$$\|\mathcal F_kv\|_\infty\le\frac{\|q\|_\infty\sqrt{|D|}}{4\pi}\|v\|_2.$$
It is Lipschitz in direction with constant at most $|k|R_0\|q\|_\infty\sqrt{|D|}\|v\|_2/(4\pi)$. For every $r\ge2R_0$, the exterior volume potential of [[def-volume-integral-scattering-model]] satisfies
$$\sup_{\theta\in S^2}\left|r e^{-ikr}V_kv(r\theta)-\mathcal F_kv(\theta)\right|\le\frac{2R_0+|k|R_0^2}{4\pi r}\|q\|_\infty\sqrt{|D|}\|v\|_2.$$
Thus $\mathcal F_kv$ is the uniform far-field amplitude under the outgoing $e^{ikr}/r$ convention.

## Facts & Assumptions

**Given:** Countable Choice, $D,q,k$ as in the Statement, $v\in L^2(D;\mathbb C)$, and $R_0>\sup_{y\in D}|y|$.

[F1] Cauchy–Schwarz gives $\|qv\|_{L^1(D)}\le\|q\|_\infty\sqrt{|D|}\|v\|_2$ ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F2] For real $s,t$, let $\gamma(r)=\exp(i(t+r(s-t)))$ on $[0,1]$. If $s=t$, it is constant. Otherwise, with $z=i(t+r(s-t))$, the complex derivative theorem [[thm-complex-exponential-is-entire-with-derivative-itself]] gives
$$\frac{\gamma(r+h)-\gamma(r)}h=i(s-t)\frac{\exp(z+ih(s-t))-\exp z}{ih(s-t)}\longrightarrow i(s-t)\exp z.$$
Thus $|\gamma'(r)|=|s-t|$ by [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], and identifying $\mathbb C$ with $\mathbb R^2$, [[cor-vector-valued-ftc-and-lipschitz-bound]] gives $|e^{is}-e^{it}|\le|s-t|$.

[F3] The integral convention for the exterior potential and the far-field map is fixed in [[def-volume-integral-scattering-model]].

## Proof

**Given:** The data in the Statement.

1.1 By [F1], the defining integral of $\mathcal F_kv$ is absolutely convergent and $|\mathcal F_kv(\theta)|\le(4\pi)^{-1}\|qv\|_1$. Taking the supremum proves the norm bound; linearity follows from linearity of the integral. [F1, F3, algebra]

1.2 For $\theta,\theta'\in S^2$, [F2] gives $|e^{-ik\theta\cdot y}-e^{-ik\theta'\cdot y}|\le |k|\,|y|\,|\theta-\theta'|$. Integrating against $|qv|/(4\pi)$ and using [F1] proves the stated Lipschitz bound and hence continuity in direction. [F1, F2, F3]

1.3 Fix $r\ge2R_0$, $\theta\in S^2$, and $y\in D$, and set $s:=|r\theta-y|$. Then $s\ge r-R_0\ge r/2$, $|r-s|\le R_0$, and
$$|s-(r-\theta\cdot y)|=\frac{|y|^2-(\theta\cdot y)^2}{s+r-\theta\cdot y}\le\frac{R_0^2}{r},$$
because the denominator is at least $(r-R_0)+(r-R_0)\ge r$. Therefore $|r/s-1|\le2R_0/r$ and, by [F2], $|e^{ik(s-r)}-e^{-ik\theta\cdot y}|\le |k|R_0^2/r$. [given, F2, algebra]

2.1 The integrand identity $r e^{-ikr}G_k(r\theta-y)=(4\pi)^{-1}(r/s)e^{ik(s-r)}$ and step 1.3 give a uniform pointwise error at most $(2R_0+|k|R_0^2)/(4\pi r)$. Integrating against $|qv|$, applying [F1], and taking the supremum over $\theta$ proves the far-field estimate. [F1, F3, step 1.3, algebra] ∎
