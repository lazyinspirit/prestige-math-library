---
id: lem-three-dimensional-scattering-kernel-is-square-integrable
kind: lemma
title: The three-dimensional free-space scattering kernel is square integrable
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-volume-integral-scattering-model, thm-polar-coordinates-formula-for-lebesgue-measure, thm-tonelli-and-fubini-for-completed-product-measures, def-countable-choice, prop-countable-subsets-of-rn-are-lebesgue-null, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, prop-essential-supremum-is-attained-as-the-least-essential-bound, cor-volume-of-a-closed-three-ball]
justified_by: []
proof_strategy: direct
axiom_use: "The polar-coordinate and completed-product Tonelli suppliers assume Countable Choice; no full Axiom of Choice is used here."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, Sommersemester 2015, §5.2.6"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "PDF pp. 79–82, the three-dimensional Helmholtz volume kernel; square integrability is proved locally."
    - title: "Maximilian Kreuzer, Quantum Theory: Lecture Notes, version July 15, 2009, Chapter 8"
      url: "https://hep.itp.tuwien.ac.at/~kreuzer/Quanten.15.07.09.pdf"
      locator: "PDF pp. 147–149, the three-dimensional outgoing Helmholtz radial kernel; the local proof establishes its square-integrability over bounded domains."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $D\subset\mathbb R^3$ be bounded and Lebesgue measurable, let $M:=|D|$, $d_D:=\operatorname{diam}(D)$, $q\in L^\infty(D;\mathbb C)$, and $k\in\mathbb R$. If $M>0$, define $a(x,y)=G_k(x-y)q(y)$ off the diagonal and set it to zero on the diagonal. Then $a\in L^2(D\times D)$ and
$$\|a\|_{L^2(D\times D)}^2\le\frac{\|q\|_\infty^2 M d_D}{4\pi}.$$
If $M=0$, every measurable kernel on $D\times D$ represents the zero product $L^2$ class.

## Facts & Assumptions

**Given:** Countable Choice, the bounded measurable set $D$, its positive finite measure and diameter, $q\in L^\infty(D;\mathbb C)$, and real $k$.

[F1] For every nonnegative Borel function $g$ on $\mathbb R^3$, polar coordinates give $\int g(y)dy=\int_0^\infty\int_{S^2}g(r\omega)r^2d\sigma(\omega)dr$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]); a closed ball of radius $r$ has volume $4\pi r^3/3$ ([[cor-volume-of-a-closed-three-ball]]).

[F2] Tonelli applies to nonnegative functions on the completed product of the finite Lebesgue measure spaces ([[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F3] A countable subset of $\mathbb R^3$, in particular a singleton, is Lebesgue null ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[F4] For real $t$, $|e^{it}|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F5] Applying [[prop-essential-supremum-is-attained-as-the-least-essential-bound]] to the measurable real function $|q|$ gives a measurable representative of $q$ with $|q(y)|\le\|q\|_\infty$ everywhere after changing it on a null set; such a change does not affect the product $L^2$ class by completed-product Tonelli.

## Proof

**Given:** The data of the Statement and a measurable representative of $q$ satisfying $|q(y)|\le\|q\|_\infty$ almost everywhere.

1.1 If $M=0$, then $(D\times D,\lambda_3\times\lambda_3)$ is null and the conclusion follows. Suppose $M>0$. Off the Borel diagonal, $G_k(x-y)q(y)$ is product-measurable, and setting it to zero on the diagonal preserves measurability. For $x\ne y$, [F4] and real $k$ give $|e^{ik|x-y|}|=1$; choosing the representative in [F5] yields $|a(x,y)|^2\le\|q\|_\infty^2(16\pi^2|x-y|^2)^{-1}$. The diagonal is product-null by [F2] and F3, so its assigned value does not alter the class. [given, F2, F3, F4, F5, cases, algebra]

1.2 In the positive-measure case $d_D>0$. For each fixed $x\in D$, $D\subseteq\overline B(x,d_D)$. By F1 with the Borel function $g(y)=|x-y|^{-2}\mathbf1_{0<|x-y|\le d_D}$, polar coordinates give $\int_D|x-y|^{-2}dy\le\int_0^{d_D}\int_{S^2}r^{-2}r^2d\sigma(\omega)dr=4\pi d_D$, using $\sigma(S^2)=4\pi$, which follows by applying polar coordinates to the unit ball and using its volume $4\pi/3$ ([[cor-volume-of-a-closed-three-ball]]). [F1, given, algebra]

2.1 In the positive-measure case, integrating the bound of step 1.1 in $x$ and applying F2 gives $\int_D\int_D|a(x,y)|^2dy\,dx\le\frac{\|q\|_\infty^2}{16\pi^2}M(4\pi d_D)=\frac{\|q\|_\infty^2Md_D}{4\pi}<\infty$. Thus $a\in L^2(D\times D)$. Steps 1.1 and 1.2 cover respectively $M=0$ and $M>0$. [F2, step 1.1, step 1.2, cases-exhaustive, algebra] ∎
