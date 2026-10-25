---
id: ex-small-norm-volume-scatterer-born-truncation
kind: example
title: A small-norm ball scatterer has a certified Born tail
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-volume-integral-scattering-model, lem-three-dimensional-scattering-kernel-is-square-integrable, thm-volume-integral-scattering-born-neumann-error, cor-volume-of-a-closed-three-ball, def-countable-choice]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is an explicit premise inherited from the Born theorem for L2 completeness; the numerical norm bound itself is a direct kernel estimate."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, Sommersemester 2015, Chapter 5, §5.2.6"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "PDF pp. 79–82, Lippmann–Schwinger volume equation; the ball norm and geometric Born tail are calculated locally."
    - title: "Habib Ammari, Brian Fitzpatrick, and Sanghyeon Yu, Mathematical and Computational Methods in Photonics: Tutorial Notes, §1.3"
      url: "https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computational%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf"
      locator: "Printed pp. 11–12, Neumann-series solution estimate."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Assume Countable Choice. Take $D=B(0,1)\subset\mathbb R^3$, constant contrast $q=1/2$, real $k$, and arbitrary $f\in L^2(D)$. The general kernel estimate gives $\|K_k\|\le1/\sqrt6<1$, so the Born series converges and its $m$th partial sum has an explicit geometric error bound.

## Verification

**Given:** Countable Choice, the ball, contrast and volume operator from [[def-volume-integral-scattering-model]].

[F1] The ball has volume $4\pi/3$ and diameter $2$ ([[cor-volume-of-a-closed-three-ball]]).

[F2] For the three-dimensional kernel, $\|K_k\|\le\|q\|_\infty\sqrt{|D|\operatorname{diam}(D)/(4\pi)}$ ([[lem-three-dimensional-scattering-kernel-is-square-integrable]]).

[F3] If $\|K_k\|=\rho<1$, the equation has a unique solution and Born tail $\|u-\sum_{j=0}^mK_k^jf\|_2\le\rho^{m+1}\|f\|_2/(1-\rho)$ ([[thm-volume-integral-scattering-born-neumann-error]]).

1.1 Substituting $|D|=4\pi/3$, $\operatorname{diam}(D)=2$, and $\|q\|_\infty=1/2$ into [F2] gives $\|K_k\|\le(1/2)\sqrt{(4\pi/3)2/(4\pi)}=1/\sqrt6<1$. [F1, F2, algebra]

2.1 Set $\rho=\|K_k\|$. Step 1.1 gives $0\le\rho\le1/\sqrt6<1$, so [F3] applies and yields a unique solution and $\left\|u-\sum_{j=0}^mK_k^jf\right\|_2\le\frac{\rho^{m+1}}{1-\rho}\|f\|_2\le\frac{(1/\sqrt6)^{m+1}}{1-1/\sqrt6}\|f\|_2$. The last inequality follows termwise from $\rho^{m+1}/(1-\rho)=\sum_{n=m+1}^\infty\rho^n$, which is increasing on $[0,1)$. [F3, step 1.1, algebra] ∎
