---
id: cex-the-ordinary-chain-rule-fails-for-brownian-motion
kind: counterexample
title: "The ordinary chain rule fails for Brownian motion"
status: published
origin: pipeline
deps: [cor-brownian-square-martingale, def-brownian-motion, def-elementary-predictable-brownian-integrand, def-locally-square-integrable-predictable-brownian-integrand, def-ito-integral-for-square-integrable-predictable-processes, thm-localized-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, thm-ito-isometry-and-linearity-in-predictable-l2, lem-gaussian-even-moment-bound-for-brownian-increments, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-continuous-time-adapted-process-and-martingale, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Sections 3.2-3.3"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
verification:
  audited: 2026-09-22
---

## Statement refuted

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]], with the filtration satisfying
the usual conditions, and use the $\mathcal F_0$-normalized everywhere-continuous
representative of the standard Brownian motion.

The ordinary chain rule
$$d(B_t^2)=2B_t\,dB_t\qquad\text{(claimed)}$$
is false for standard Brownian motion. The correct identity is
$$B_t^2=2\int_0^tB_s\,dB_s+t,$$
and the two candidate formulas are distinguished by their expectations at every
$t>0$: the missing term is exactly the quadratic-variation correction $t$.

## Facts & Assumptions

**Given:** AC, (H), the usual conditions, the $\mathcal F_0$-normalized everywhere-continuous adapted representative of a standard Brownian motion $B$, and $t>0$.
 
[F1] **Correct identity.** $B_t^2-t=2\int_0^tB_s\,dB_s$ up to indistinguishability, so $B_t^2=2\int_0^tB_s\,dB_s+t$; the integral is the localized integral of the predictable process $2B$, whose energy on $[0,t]$ is $E\int_0^t4B_s^2ds=4E\int_0^tB_s^2ds=2t^2<\infty$. [[cor-brownian-square-martingale]] [[thm-localized-ito-integral]] [[def-locally-square-integrable-predictable-brownian-integrand]] [[def-ito-integral-for-square-integrable-predictable-processes]]
 
[F2] **Mean and second moment of the integral.** A finite-energy integral $\int_0^tH\,dB$ is a square-integrable martingale with mean zero; in particular $E\int_0^tB_s\,dB_s=0$. [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[def-continuous-time-adapted-process-and-martingale]]
 
[F3] **Second moment of Brownian motion.** $EB_t^2=t$: for $t>0$, $B_t$ has law $N(0,t)$ with density $(2\pi t)^{-1/2}e^{-x^2/(2t)}$, whose second moment is $t$; the value at $t=0$ is $0$. [[def-standard-normal-and-normal-laws]] [[def-brownian-motion]] [[lem-normal-density-has-total-mass-one]] [[lem-gaussian-even-moment-bound-for-brownian-increments]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]
 
[F4] **AC bookkeeping.** Choice is declared for the ambient completeness interface. [[def-axiom-of-choice]]
 
 
 
 

## Counterexample

**Proof technique:** direct.
 
1.1 The alleged rule, integrated from $0$ with $B_0=0$, would give $B_t^2=2\int_0^tB_s\,dB_s$ up to indistinguishability, since the chain rule applied to $x\mapsto x^2$ with no quadratic correction yields exactly that identity. [F1, given]
 
2.1 Taking expectations of the alleged identity gives $EB_t^2=2E\int_0^tB_s\,dB_s=0$ by [F2]. But the correct identity [F1] gives $EB_t^2=2E\int_0^tB_s\,dB_s+t=t$, and [F3] confirms $EB_t^2=t$. [F1, F2, F3, step 1.1]
 
3.1 Since $t>0$, the two values $0$ and $t$ are distinct, so the alleged chain-rule identity fails; the witness is the single process $B^2$ together with the two candidate formulas, and the failed conclusion is the expectation equality $E[B_t^2]=2E\int_0^tB_s\,dB_s$ for $t>0$. [F2, F3, step 2.1]
 
4.1 Boundary and consistency cases: at $t=0$ both candidate formulas agree, which is why the counterexample requires $t>0$; the correct identity differs from the alleged one by the deterministic function $t$, so the failure is not a null-set or version artefact; the integral in both formulas is the same object, so the discrepancy is entirely in the drift term; for $f(x)=x$ no correction appears and the ordinary rule is recovered, showing that the failure is tied to the nonvanishing second derivative; and AC enters only through [F4]. [F1, F2, F4, step 3.1] ∎

## Source notes

Lawler, Sections 3.2--3.3, contrasts the Ito computation with the ordinary chain rule; the counterexample above isolates the discrepancy through the expectations of the two candidate formulas, using the finite-energy mean-zero property of the stochastic integral.
