---
id: thm-irlgnm-local-source-condition-discrepancy-convergence
kind: theorem
title: Local source-condition discrepancy convergence for iteratively regularized Gauss–Newton
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-iteratively-regularized-gauss-newton-step
  - lem-local-lipschitz-derivative-quadratic-remainder
  - lem-irlgnm-one-step-error-recurrence
  - thm-continuous-functional-calculus-for-bounded-self-adjoint-operators
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 11, §§11.2–11.3, printed pp. 107–116 / PDF pp. 119–128; hypothesis comparison only. The unanchored LM discrepancy theorem has different derivative-scaling and discrepancy assumptions, while the source-condition IRGNM argument uses an anchor term. Neither proves this target."
    - title: "Barbara Kaltenbacher, Methods for Inverse Problems: IV. Newton type methods, author lecture notes"
      url: "https://me.aau.at/~bkaltenb/LectureIP_4_Newton"
      locator: "Pages 2–7 and 9–13; full formula and hypothesis comparison only. The unanchored LM discrepancy result and anchored IRGNM source-condition theorem are distinct."
    - title: "Qinian Jin, A convergence analysis of the iteratively regularized Gauss-Newton method under Lipschitz condition"
      url: "https://arxiv.org/pdf/0803.2373"
      locator: "§§1–2; hypothesis comparison only. The source-condition recurrence is for the anchored update and is not transferred to the assigned unanchored formula."
---

## Escalated target (unproved; not a logical supplier)

This is the nonlinear local theorem required by controlling Contract INV2. Let
$X,Y$ be real or complex Hilbert spaces, let $U\subseteq X$ be open, and let
$F:U\to Y$ be continuously Fréchet differentiable. Let $x^\dagger,x_0$ lie
in a convex ball $B\subseteq U$ that contains every iterate before the first
discrepancy crossing, let $y=F(x^\dagger)$, and let
$\|y_\delta-y\|\le\delta$. Assume on $B$ that
$$\|F(x)-F(z)-F'(z)(x-z)\|\le\eta\|F(x)-F(z)\|,\qquad \eta<\tfrac12,$$
and that
$$\|F'(x)-F'(z)\|\le L\|x-z\|\qquad(x,z\in B).$$
For
$S=F'(x^\dagger)^*F'(x^\dagger)$, assume the stated source condition
$$x^\dagger-x_0=S^\nu w,\qquad 0<\nu\le\tfrac12,\qquad \|w\|\le R.$$
Use the assigned unanchored step with $\alpha_k=\alpha_0q^k$,
$\alpha_0>0$, $0<q<1$, and discrepancy factor $\tau>1$.

For each noisy datum, let
$$k_\delta:=\min\{k\ge0:\|F(x_k^\delta)-y_\delta\|\le\tau\delta\}$$
when this set is nonempty. The required conclusion is to derive the
regularization/noise error recurrence, prove this first crossing is finite for
sufficiently small positive $\delta$, and prove convergence of
$x_{k_\delta}^\delta$ to $x^\dagger$ as $\delta\to0$ when the finite budget
reaches that crossing.
Contract INV2 gives no nonlinear rate, so this target asserts none. No proof
or completed source-power interpretation is supplied here; this draft is not
available as a theorem supplier.

## Escalation

- [[lem-irlgnm-one-step-error-recurrence]] proves the exact one-step identity
  and the bound
  $$\|e_{k+1}\|\le\|e_k\|+ \frac{\delta+(L/2)\|e_k\|^2}{2\sqrt{\alpha_k}}.$$
  This estimate does not give a contraction, invariant-ball preservation, or a
  discrepancy-crossing bound. The affected claims are convergence and finite
  noise-aware stopping for this unanchored update.
- The inspected source-condition IRGNM theorem in Jin and the corresponding
  Kaltenbacher notes use the extra anchor term
  $\alpha_k(x_0-x_k)$. Clason's unanchored LM discrepancy theorem has a
  different derivative-scaling and discrepancy-factor interface. These
  complete arguments do not prove the target above.
- The source condition uses $S^\nu$ for a bounded positive self-adjoint
  operator. [[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]]
  supplies this only on a nonzero complex Hilbert space and assumes the full
  Axiom of Choice. The target also permits real Hilbert spaces; a proved real
  transfer or complexification interface is missing. The real-field source
  power is therefore unresolved, and the AC dependency/use must remain explicit
  if the complex calculus is retained.
- Proposed owner resolution: supply a proved source-power definition for the
  stated real/complex field, then a local contraction/error supplier for the
  unanchored method under a reconciled hypothesis set, followed by this stopped
  convergence theorem. Alternatively, the owner may amend the assigned update
  and plan to the anchored method, after which the matching source theorem and
  its exact hypotheses can be proved. No such formula or plan change is made
  in this batch.
