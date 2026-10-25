---
id: cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems
kind: corollary
title: Birkhoff ergodic theorem for ergodic finite-measure systems
status: published
origin: pipeline
landmark: true
deps: [thm-birkhoff-ergodic-theorem, thm-birkhoff-limit-identification-on-finite-measure-spaces, lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces, thm-ergodicity-and-invariant-functions, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Alessio Del Vigna, The Birkhoff Ergodic Theorem"
      url: "https://poisson.phc.dm.unipi.it/~delvigna/maths/birkhoff.pdf"
      locator: "Corollary 6, p. 6"
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "Corollary 10.1.2, printed p. 89"
    - title: "Omri Sarig, Lecture Notes on Ergodic Theory (2023)"
      url: "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf"
      locator: "Theorem 2.2, printed pp. 37–40"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice.  Let $T$ preserve an ergodic measure $\mu$ with
$0<\mu(X)<\infty$.  For every real- or complex-valued $f\in L^1(\mu)$,

$$A_nf\longrightarrow \frac1{\mu(X)}\int_Xf\,d\mu$$

both $\mu$-almost everywhere and in $L^1(\mu)$.

## Facts & Assumptions

**Given:** AC, the ergodic finite positive measure system, and $f$ in the Statement.

[F1] Birkhoff supplies an invariant a.e. limit ([[thm-birkhoff-ergodic-theorem]]).

[F2] Under AC, the finite-measure identification gives $\int_Xf^*=\int_Xf$ ([[thm-birkhoff-limit-identification-on-finite-measure-spaces]], [[def-axiom-of-choice]]).

[F3] In an ergodic probability system every finite-valued a.e.-invariant real or complex measurable function is constant a.e. ([[thm-ergodicity-and-invariant-functions]]).

[F4] On a finite measure space the averages converge in $L^1$ to their Birkhoff limit ([[lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Normalize the measure to $\widehat\mu=\mu/\mu(X)$.  This does not change measurable sets, null sets, invariance, or ergodicity, and $T$ preserves $\widehat\mu$.  By [F1], $A_nf\to f^*$ a.e. and $f^*\circ T=f^*$ a.e. [F1]

2.1 Applying [F3] to the normalized probability system makes $f^*=c$ a.e. for some scalar $c$.  The event identity of [F2] at $E=X$ gives $$c\mu(X)=\int_Xf^*\,d\mu=\int_Xf\,d\mu,$$ so $c=\mu(X)^{-1}\int_Xf\,d\mu$.  This is where the AC-dependent Radon–Nikodym identification is used. [F2, F3, step 1.1]

3.1 The case $p=1$ of [F4] gives $\lVert A_nf-f^*\rVert_1\to0$.  Combining with step 2.1 proves both modes of convergence.  For complex $f$, [F3] and the integral identity apply to its two components, producing the same complex constant formula. [F4, step 2.1] ∎
