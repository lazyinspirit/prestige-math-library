---
id: ex-functional-calculus-for-a-multiplication-operator
kind: example
title: Functional calculus for a multiplication operator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-continuous-functional-calculus-for-bounded-self-adjoint-operators, thm-complex-stone-weierstrass-self-adjoint, def-axiom-of-choice, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, cor-primitives-of-a-continuous-function, thm-substitution, lem-derivative-of-a-power, def-operator-norm, def-spectrum-and-resolvent-of-a-bounded-operator, thm-spectral-mapping-for-continuous-normal-functional-calculus, def-self-adjoint-positive-unitary-and-normal-operator, def-lebesgue-measure-and-the-lebesgue-sigma-algebra]
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
---

## Example

Assume AC. Let $H=L^2(0,1)$ with Lebesgue measure and let $T=M_t$ be multiplication by the coordinate, $(M_tf)(t)=tf(t)$. Then $\sigma(T)=[0,1]$ and $f(T)=M_f$ for every continuous $f$ on $[0,1]$.

## Facts & Assumptions

[A1] Complex $L^2(0,1)$ with $\langle f,g\rangle=\int_0^1f\overline g$ is a Hilbert space, and $\|f\|_2^2=\int_0^1|f|^2$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[A2] A continuous function on $[0,1]$ is Lebesgue integrable with the Lebesgue integral equal to its Riemann integral, primitives of continuous functions evaluate definite integrals, and the substitution rule and power rule give the polynomial integrals used below ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[cor-primitives-of-a-continuous-function]], [[thm-substitution]], [[lem-derivative-of-a-power]]).

[A3] $z\in\rho(T)$ exactly when $zI-T$ is bijective with bounded inverse; a self-adjoint operator $T$ is normal, and $f(T)$ is self-adjoint for real $f$ ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A4] For the self-adjoint calculus of a bounded self-adjoint operator there is a unique isometric unital star-homomorphism $C(\sigma(T))\to\mathcal B(H)$ with $z\mapsto T$ and range $C^*(I,T)$; complex polynomials are uniformly dense in $C([0,1])$ ([[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]], [[thm-complex-stone-weierstrass-self-adjoint]]).

[A5] AC is the hypothesis of the calculus and Hilbert-space suppliers ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** The Hilbert space $H=L^2(0,1)$ and the operator $M_t$ of multiplication by $t$.

1.1 $M_t$ is well defined on a.e. classes, linear, bounded with $\|M_tf\|_2\le\|f\|_2$, and self-adjoint with $M_t^2=M_{t^2}$; for $\lambda\in\mathbb R$ one has $M_t-\lambda I=M_{t-\lambda}$. [A1]

2.1 If $z\notin[0,1]$ then $g(t)=1/(z-t)$ is continuous on $[0,1]$ with $|g|\le1/\operatorname{dist}(z,[0,1])$, so $M_g$ is bounded and $M_g(zI-M_t)=I$; hence $z\in\rho(M_t)$. [step 1.1, A1, A3]

2.2 If $z\in[0,1]$ and $0<\delta\le1$, let $f_\delta(t):=(1-|t-z|/\delta)_+$ on $[0,1]$, a continuous function vanishing outside $(z-\delta,z+\delta)\cap[0,1]$, and put $\varphi_\delta:=c_\delta f_\delta$ with $c_\delta$ chosen so that $\|\varphi_\delta\|_2=1$. With $\delta$ so small that the support lies on one side of $z$ or is symmetric in $[0,1]$, the polynomial integrals give $\int f_\delta^2=\delta/3$ or $2\delta/3$ and $\int(t-z)^2f_\delta^2=\delta^3/30$ or $\delta^3/15$ respectively, so in both cases $\|(M_t-zI)\varphi_\delta\|_2^2=(3/\delta)(\delta^3/30)=\delta^2/10$; hence $M_t-zI$ is not bounded below and $z\in\sigma(M_t)$. [step 1.1, A2, A3]

3.1 Steps 2.1 and 2.2 give $\sigma(M_t)=[0,1]$, and $M_t$ is self-adjoint, so the continuous functional calculus for $M_t$ is defined on $C([0,1])$. [step 1.1, step 2.1, step 2.2, A3]

4.1 For $f\in C([0,1])$, the assignment $f\mapsto M_f$ is a unital $\ast$-homomorphism with $z\mapsto M_t$ and $\|M_f\|=\|f\|_\infty$. The upper bound follows from the integral norm; for the lower bound, continuity at a point where $|f|$ attains its maximum gives, for every $\varepsilon>0$, an interval of positive measure on which $|f|>\|f\|_\infty-\varepsilon$, and testing on its normalized indicator gives $\|M_f\|\ge\|f\|_\infty-\varepsilon$. Thus its range is closed. Polynomial density gives $M_f$ as a norm limit of polynomials in $M_t$, while every polynomial in $M_t$ is a multiplier, so the range is exactly $C^*(I,M_t)$. Uniqueness of the calculus now gives $f(M_t)=M_f$. [step 3.1, A1, A2, A4]

5.1 Therefore $\sigma(M_t)=[0,1]$ and the calculus of $M_t$ is multiplication by $f$. [step 3.1, step 4.1, A5] ∎
