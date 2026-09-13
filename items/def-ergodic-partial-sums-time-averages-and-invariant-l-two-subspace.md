---
id: def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace
kind: definition
title: Ergodic partial sums, time averages, and the invariant L2 subspace
status: draft
origin: pipeline
deps: [def-measure-preserving-transformation-and-system, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-strict-and-mod-null-invariant-sigma-algebras]
justified_by: [prop-ergodic-averages-are-well-defined-and-l-p-contractive]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§9.3, printed p. 84; §§9.5–9.6, printed pp. 85–87; §10.1, printed p. 89"
    - title: "Omri Sarig, Lecture Notes on Ergodic Theory (2023)"
      url: "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf"
      locator: "Chapter 2, Theorems 2.1–2.3, printed pp. 35–41"
---

## Definition

Let $(X,\mathcal A,\mu,T)$ be a measure-preserving system
([[def-measure-preserving-transformation-and-system]]), and put
$T^0=\operatorname{id}_X$ and $T^{k+1}=T\circ T^k$.  For a finite-valued
measurable real or complex representative $f$ and an integer $n\geq1$, its
**ergodic partial sum** and **ergodic time average** are

$$S_nf:=\sum_{k=0}^{n-1}f\circ T^k,\qquad A_nf:=\frac1nS_nf.$$

These are initially pointwise formulas for a chosen representative.  The
companion proposition
[[prop-ergodic-averages-are-well-defined-and-l-p-contractive]] proves that,
when $f$ represents an element of $L^p(\mu)$, the formulas are independent of
the representative and define $L^p$ classes.  Thus the notation does not hide
a simultaneous choice of representatives.

Using the complex-$L^2$ convention of
[[def-complex-lp-and-euclidean-test-function-conventions]], define the
**invariant $L^2$ subspace**

$$\mathcal M:=\{[g]\in L^2(\mu;\mathbb C):[g\circ T]=[g]\}=\{[g]:g\circ T=g\ \mu\text{-a.e.}\}.$$

This is the fixed space of composition by $T$.  Membership in $\mathcal M$
means invariance almost everywhere; it does not mean that $g$ is constant.
The strict and modulo-null invariant-set conventions are those of
[[def-strict-and-mod-null-invariant-sigma-algebras]].
