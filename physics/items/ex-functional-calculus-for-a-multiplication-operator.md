---
id: ex-functional-calculus-for-a-multiplication-operator
kind: example
title: Functional calculus for a multiplication operator
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-continuous-functional-calculus-for-bounded-self-adjoint-operators, thm-complex-stone-weierstrass-self-adjoint, def-axiom-of-choice, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, cor-primitives-of-a-continuous-function, thm-substitution, lem-derivative-of-a-power, def-operator-norm, def-spectrum-and-resolvent-of-a-bounded-operator, thm-spectral-mapping-for-continuous-normal-functional-calculus, def-self-adjoint-positive-unitary-and-normal-operator, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-hilbert-space-adjoint, thm-continuous-implies-integrable, thm-lebesgue-measure-of-a-box-of-every-kind, thm-heine-borel-r, thm-metric-hausdorff-separation]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3, printed pp.235–245"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, §4, pp.10–15"
      url: "https://www.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
verification:
  audited: 2026-09-22
---

## Example

Assume AC. Let $H=L^2(0,1)$ with Lebesgue measure and let $T=M_t$ be multiplication by the coordinate, $(M_tf)(t)=tf(t)$. Then $\sigma(T)=[0,1]$ and $f(T)=M_f$ for every continuous $f$ on $[0,1]$.

## Facts & Assumptions

[A1] Complex $L^2(0,1)$ with $\langle f,g\rangle=\int_0^1f\overline g$ is a Hilbert space, and $\|f\|_2^2=\int_0^1|f|^2$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[A2] Endpoints have Lebesgue measure zero by [[thm-lebesgue-measure-of-a-box-of-every-kind]], so continuous-function integrals on $(0,1)$ agree with those on $[0,1]$. A continuous real function on $[0,1]$ is Lebesgue integrable with the Lebesgue integral equal to its Riemann integral, primitives of continuous functions evaluate definite integrals, and the substitution rule and power rule give the polynomial integrals used below ([[thm-continuous-implies-integrable]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[cor-primitives-of-a-continuous-function]], [[thm-substitution]], [[lem-derivative-of-a-power]]).

[A3] $z\in\rho(T)$ exactly when $zI-T$ is bijective with bounded inverse; a self-adjoint operator $T$ is normal, the defining adjoint pairing characterizes self-adjointness ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-hilbert-space-adjoint]]).

[A4] For the self-adjoint calculus of a bounded self-adjoint operator there is a unique isometric unital star-homomorphism $C(\sigma(T))\to\mathcal B(H)$ with $z\mapsto T$ and range $C^*(I,T)$; complex polynomials are uniformly dense in $C([0,1])$, since they form a unital point-separating self-adjoint algebra on the compact Hausdorff interval ([[thm-heine-borel-r]], [[thm-metric-hausdorff-separation]]) ([[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]], [[thm-complex-stone-weierstrass-self-adjoint]]).

[A5] AC is the hypothesis of the calculus and Hilbert-space suppliers ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** The Hilbert space $H=L^2(0,1)$ and the operator $M_t$ of multiplication by $t$.

1.1 $M_t$ is well defined on a.e. classes, linear, bounded with $\|M_tf\|_2\le\|f\|_2$, and self-adjoint with $M_t^2=M_{t^2}$; self-adjointness follows from $\langle M_tu,v\rangle=\int tu\overline v=\langle u,M_tv\rangle$. For $\lambda\in\mathbb C$ one has $M_t-\lambda I=M_{t-\lambda}$. [A1, A3]

2.1 If $z\notin[0,1]$ then $g(t)=1/(z-t)$ is continuous on $[0,1]$ with $|g|\le1/\operatorname{dist}(z,[0,1])$, so $M_g$ is bounded and $M_g(zI-M_t)=(zI-M_t)M_g=I$; hence $z\in\rho(M_t)$. [step 1.1, A1, A3]

2.2 If $z\in[0,1]$ and $0<\delta\le1$, let $f_\delta(t):=(1-|t-z|/\delta)_+$ on $[0,1]$, a continuous function vanishing wherever $|t-z|\ge\delta$, and put $\varphi_\delta:=c_\delta f_\delta$ with $c_\delta$ chosen so that $\|\varphi_\delta\|_2=1$. For $z=0$ or $z=1$ take $0<\delta\le1$; for $0<z<1$ take $0<\delta\le\min(z,1-z)$. Respectively, the polynomial integrals give $\int f_\delta^2=\delta/3$ or $2\delta/3$ and $\int(t-z)^2f_\delta^2=\delta^3/30$ or $\delta^3/15$ respectively, so the ratio of the second integral to the first is $\delta^2/10$ in both cases. Thus $\|(M_t-zI)\varphi_\delta\|_2^2=\delta^2/10$. A bounded inverse $B$ would imply $1\le\|B\|\delta/\sqrt{10}$ for all such $\delta>0$, which is impossible; hence $M_t-zI$ is not bounded below and $z\in\sigma(M_t)$. [step 1.1, A2, A3]

3.1 Steps 2.1 and 2.2 give $\sigma(M_t)=[0,1]$, and $M_t$ is self-adjoint, so the continuous functional calculus for $M_t$ is defined on $C([0,1])$. [step 1.1, step 2.1, step 2.2, A3]

4.1 For a continuous $f$ the multiplier $M_f$ is well defined on a.e. classes, linear, and bounded with $\|M_f\|\le\|f\|_\infty$, by $\int|fu|^2\le\|f\|_\infty^2\int|u|^2$. Multiplication of multipliers and the unital algebra property of the supplied calculus give $p(M_t)=M_p$ for every complex polynomial $p$. For each $\varepsilon>0$, [A4] supplies a polynomial $p$ with $\|f-p\|_\infty<\varepsilon$. The calculus isometry and the multiplier bound give $\|f(M_t)-M_f\|\le\|f(M_t)-p(M_t)\|+\|M_p-M_f\|\le2\|f-p\|_\infty<2\varepsilon$. Since this holds for every $\varepsilon>0$, $f(M_t)=M_f$. In particular the isometry and range conclusions already established for the calculus give $\|M_f\|=\|f\|_\infty$ and range $C^*(I,M_t)$. [step 3.1, A1, A4]

5.1 Therefore $\sigma(M_t)=[0,1]$ and the calculus of $M_t$ is multiplication by $f$. [step 3.1, step 4.1, A5] ∎
