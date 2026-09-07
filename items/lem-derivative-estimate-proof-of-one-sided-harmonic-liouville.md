---
id: lem-derivative-estimate-proof-of-one-sided-harmonic-liouville
kind: lemma
title: "Derivative estimate proof of one sided harmonic liouville"
status: draft
origin: pipeline
deps: [lem-smooth-sphere-data-have-a-harmonic-replacement, lem-derivatives-of-harmonic-functions-are-harmonic, cor-ball-mean-value-property-for-harmonic-functions, thm-continuous-mean-value-functions-are-harmonic]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Theorem 2.7 and Corollary 2.8, p.23"
    - title: "Tsogtgerel Gantumur, Harmonic functions (2012)"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§8 equations (77)–(78), pp.13–14"
---

## Statement

Let $n\ge2$, $R>0$, and $u$ be real harmonic on $B_R(a)$. If $S=\sup_{B_R(a)}|u|<\infty$, then $|\nabla u(a)|\le nS/R$. If $u\ge0$, the stronger estimate $|\nabla u(a)|\le nu(a)/R$ holds without assuming a finite global supremum. Consequently, a nonnegative entire harmonic function has gradient zero everywhere.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Smooth sphere data have a unique smooth harmonic replacement given by the displayed sphere kernel, continuous with those data on the boundary. ([[lem-smooth-sphere-data-have-a-harmonic-replacement]]).

[F2] Every partial derivative of a smooth harmonic function is smooth harmonic. ([[lem-derivatives-of-harmonic-functions-are-harmonic]]).

[F3] A classical harmonic function has the ball mean-value property. ([[cor-ball-mean-value-property-for-harmonic-functions]]).

[F4] A continuous function with the ball mean-value property is smooth and harmonic. ([[thm-continuous-mean-value-functions-are-harmonic]]).

## Proof

**Proof technique:** direct.

1.1 The ball mean property and the continuous mean-value theorem make $u$ smooth. Its partial derivatives are therefore harmonic by the smooth derivative lemma, whose smoothness hypothesis is now satisfied. [F2, F3, F4, given]

2.1 On every sphere of radius $0<s<R$, the trace of $u$ is smooth. Harmonic replacement and uniqueness represent $u$ inside the smaller ball by this trace. Differentiate the kernel at its center and write $y=a+s\theta$. It gives $\nabla u(a)=\frac n s\frac1{|\partial B_s|}\int_{\partial B_s(a)}u(y)\theta\,dS(y)$, while the undifferentiated center formula gives $u(a)=|\partial B_s|^{-1}\int_{\partial B_s(a)}u$. Derivative passage is justified by the same compact-sphere bounds as in replacement. [F1, step 1.1, algebra]

3.1 Taking vector norms and using $|\theta|=1$ bounds the gradient by $(n/s)$ times the average of $|u|$. This is at most $nS/s$ in the bounded signed case, and exactly $nu(a)/s$ as an upper bound in the nonnegative case. Let $s\uparrow R$ to obtain both estimates. [step 2.1, algebra]

4.1 For a nonnegative entire harmonic function, the positive estimate holds at each fixed $a$ for every $R>0$. Let $R\to\infty$ to obtain $\nabla u(a)=0$. This is also a second route to one-sided Liouville after shifting and, if necessary, negating the function. [step 3.1, algebra] ∎
